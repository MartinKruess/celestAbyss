import 'dotenv/config';
import mongoose from 'mongoose';
import { readRuntimeConfig } from '../config/runtime.js';
import { inspectIdentityIndexes, ensureIdentityIndexes } from '../services/identityIndexes.js';

if (process.argv.slice(2).some(arg => !['--check', '--apply'].includes(arg))) throw new Error('Use --check or --apply');
try {
  const config = readRuntimeConfig();
  await mongoose.connect(config.uri, { dbName: config.dbName, autoIndex: false, serverSelectionTimeoutMS: 10000 });
  const before = await inspectIdentityIndexes();
  console.log(JSON.stringify({ phase: 'before', indexes: before }));
  if (before.some(entry => entry.duplicateGroups)) throw new Error('DUPLICATE_IDENTITY_VALUES');
  if (process.argv.includes('--apply')) {
    await ensureIdentityIndexes();
    console.log(JSON.stringify({ phase: 'verified', indexes: await inspectIdentityIndexes() }));
  }
} catch (error) {
  console.error(error.message === 'DUPLICATE_IDENTITY_VALUES'
    ? 'Conflicting identity values found. No account data or indexes were changed.'
    : 'Identity index check/setup failed. Existing data was not modified; connection details omitted.');
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }
