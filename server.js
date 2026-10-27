import 'dotenv/config';
import { readRuntimeConfig } from './config/runtime.js';
import { startBackend } from './runtime.js';

try {
  const backend = await startBackend(readRuntimeConfig());
  const shutdown = () => {
    backend.stop().catch(() => {
      console.error('Shutdown failed.'); process.exitCode = 1;
    });
  };
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
} catch {
  console.error('Backend startup failed. Check configuration, MongoDB access and port availability.');
  process.exitCode = 1;
}
