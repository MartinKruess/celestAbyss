import { spawn } from 'node:child_process';
import { openSync, closeSync, existsSync, mkdirSync, readFileSync, writeFileSync, renameSync, unlinkSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import dgram from 'node:dgram';
import path from 'node:path';
import dotenv from 'dotenv';
import { dedicatedConfiguration } from '../security/dedicated.js';
import { superviseDedicated, storageExitCode } from './DedicatedSupervisor.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const settings = { ...dotenv.parse(readFileSync(path.join(root, '.env'))), ...process.env };
const config = dedicatedConfiguration(settings);
if (!config) throw new Error('Dedicated configuration missing; run node scripts/configureDedicated.js.');
const editor = settings.CELEST_UNREAL_EDITOR || 'E:/Unreal_Engine_5.8/UE_5.8/Engine/Binaries/Win64/UnrealEditor.exe';
const project = settings.CELEST_UNREAL_PROJECT || 'E:/CelestAbyss_UE/CelestAbyss/CelestAbyss.uproject';
if (!existsSync(editor) || !existsSync(project)) throw new Error('Unreal editor or project path missing.');
const logDir = path.join(root, 'tmp');
const backend = settings.CELEST_BACKEND_URL || `http://127.0.0.1:${settings.PORT || 5600}`;
if (!process.argv.includes('--start') && !process.argv.includes('--supervise')) {
  console.log('Dedicated configuration checked. --start launches supervised; --reset-restart-guard --start explicitly clears the one-restart safety latch.');
} else {
  mkdirSync(logDir, { recursive: true });
  const output = openSync(path.join(logDir, 'dedicated-process.log'), 'a');
  if (!process.argv.includes('--supervise')) {
    const args = [fileURLToPath(import.meta.url), '--supervise'];
    if (process.argv.includes('--reset-restart-guard')) args.push('--reset-restart-guard');
    const child = spawn(process.execPath, args, { cwd: root, detached: true, windowsHide: true, stdio: ['ignore', output, output] });
    child.on('error', () => console.error('Dedicated supervisor failed to launch.'));
    child.unref(); closeSync(output);
    console.log(`Dedicated supervisor launched, PID ${child.pid}. Status: tmp/dedicated-supervisor.log`);
  } else {
    const stateFile = path.join(logDir, `dedicated-${config.serverID}-restart-state.json`);
    const lockFile = path.join(logDir, `dedicated-${config.serverID}.lock`);
    const lockID = randomUUID();
    const log = (event, detail = {}) => appendFileSync(path.join(logDir, 'dedicated-supervisor.log'), JSON.stringify({ at: new Date().toISOString(), serverID: config.serverID, event, ...detail }) + '\n');
    const readState = () => existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf8')) : { recoveryAttempted: false, blocked: false };
    const writeState = state => { writeFileSync(stateFile + '.new', JSON.stringify(state, null, 2)); renameSync(stateFile + '.new', stateFile); };
    const call = async (route, instanceID, body) => {
      const response = await fetch(backend + '/dedicated/runtime' + route, {
        method: body === undefined ? 'GET' : 'POST', signal: AbortSignal.timeout(15000),
        headers: { authorization: `Bearer ${config.key}`, 'content-type': 'application/json', 'x-celest-instance': instanceID },
        ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      });
      if (!response.ok) throw new Error('DEDICATED_BACKEND_UNAVAILABLE');
      return response.json();
    };
    const portFree = () => new Promise((resolve, reject) => {
      const socket = dgram.createSocket('udp4');
      socket.once('error', error => { socket.close(); reject(error); });
      socket.bind(Number(config.address.split(':')[1]), '0.0.0.0', () => socket.close(resolve));
    });
    let locked = false;
    try {
      if (existsSync(lockFile)) {
        const previous = JSON.parse(readFileSync(lockFile, 'utf8'));
        let alive = true; try { process.kill(previous.pid, 0); } catch (error) { if (error.code === 'ESRCH') alive = false; }
        if (alive) throw new Error('DEDICATED_SUPERVISOR_ALREADY_RUNNING');
        unlinkSync(lockFile);
      }
      const lock = openSync(lockFile, 'wx'); writeFileSync(lock, JSON.stringify({ pid: process.pid, lockID })); closeSync(lock); locked = true;
      if (process.argv.includes('--reset-restart-guard')) { writeState({ recoveryAttempted: false, blocked: false }); log('restart_guard_reset_by_operator'); }
      process.exitCode = await superviseDedicated({ readState, writeState, newInstance: randomUUID, log,
        register: async instanceID => {
          await portFree();
          const previous = await call('', instanceID);
          const result = await call('/start', instanceID, { expectedInstanceID: previous.instanceID });
          if (!result.ready || result.instanceID !== instanceID) throw new Error('STORAGE_NOT_READY');
          const probe = await call('/probe', instanceID, {});
          if (!probe.ready || probe.instanceID !== instanceID) throw new Error('STORAGE_NOT_READY');
        },
        launch: ({ instanceID, recoveryAttempted }) => new Promise(resolve => {
          const exitFile = path.join(logDir, `dedicated-exit-${instanceID}.json`);
          const child = spawn(editor, [project, '/Game/ThirdPerson/Lvl_ThirdPerson?game=/Script/CelestFrontendApi.CelestGameMode', '-server', '-CelestInventoryTestPickups', '-unattended', '-nosound', '-NullRHI', '-nosplash', '-DisablePlugins=ModelContextProtocol,EditorToolset,UMGToolSet,ToolsetRegistry,PythonScriptPlugin', `-port=${config.address.split(':')[1]}`, `-abslog=${path.join(logDir, 'dedicated-unreal.log')}`],
            { cwd: path.dirname(project), windowsHide: true, stdio: ['ignore', output, output], env: { ...process.env,
              CELEST_DEDICATED_API_KEY: config.key, CELEST_BACKEND_URL: backend, CELEST_DEDICATED_INSTANCE_ID: instanceID,
              CELEST_STORAGE_EXIT_FILE: exitFile,
              CELEST_STORAGE_RECOVERY_ATTEMPTED: recoveryAttempted ? '1' : '0' } });
          child.once('error', () => resolve(1)); child.once('exit', code => {
            let marker;
            try { if (existsSync(exitFile)) marker = JSON.parse(readFileSync(exitFile, 'utf8')); }
            catch { log('invalid_exit_marker', { instanceID }); resolve(1); return; }
            resolve(storageExitCode(code ?? 1, instanceID, marker));
          });
        }),
      });
    } catch (error) { log('supervisor_failed', { code: error.message === 'DEDICATED_SUPERVISOR_ALREADY_RUNNING' ? error.message : 'STARTUP_FAILED' }); process.exitCode = 1; }
    finally {
      closeSync(output);
      if (locked && existsSync(lockFile) && JSON.parse(readFileSync(lockFile, 'utf8')).lockID === lockID) unlinkSync(lockFile);
    }
  }
}
