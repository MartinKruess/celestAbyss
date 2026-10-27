// Restart budget belongs to the supervisor, not to the process being restarted.
export const RESTART_FOR_STORAGE = 75;
export const STOP_FOR_STORAGE = 76;

// Windows Unreal can finish a graceful RequestExitWithStatus with process code 0.
// Only the marker for this exact process may classify that clean exit as recovery.
export function storageExitCode(code, instanceID, marker) {
  if (code !== 0 || marker?.instanceID !== instanceID) return code;
  return marker.code === RESTART_FOR_STORAGE || marker.code === STOP_FOR_STORAGE ? marker.code : code;
}

export async function superviseDedicated({ readState, writeState, register, launch, newInstance, log }) {
  let state = await readState();
  if (state.blocked) { log('start_blocked', { reason: state.reason }); return 78; }
  for (;;) {
    const instanceID = newInstance();
    try { await register(instanceID); }
    catch {
      state = { ...state, blocked: true, reason: 'storage_startup_check_failed' };
      await writeState(state); log('start_blocked', { reason: state.reason }); return 78;
    }
    log('started', { instanceID, recoveryAttempted: !!state.recoveryAttempted });
    const code = await launch({ instanceID, recoveryAttempted: !!state.recoveryAttempted });
    if (code === RESTART_FOR_STORAGE && !state.recoveryAttempted) {
      state = { recoveryAttempted: true, blocked: false, reason: 'storage_failure_restart', restartedAt: new Date().toISOString() };
      // Persist before starting the replacement, including across supervisor restarts.
      await writeState(state); log('restart', { reason: state.reason });
      continue;
    }
    if (code !== 0) {
      state = { ...state, blocked: true, reason: code === RESTART_FOR_STORAGE || code === STOP_FOR_STORAGE ? 'storage_failed_after_restart' : 'unexpected_process_exit' };
      await writeState(state); log('stopped', { reason: state.reason, code });
    } else log('stopped', { reason: 'normal_shutdown', code });
    return code;
  }
}
