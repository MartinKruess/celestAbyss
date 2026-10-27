import { randomBytes } from 'node:crypto';
import { readFileSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { dedicatedConfiguration } from '../security/dedicated.js';

const file = fileURLToPath(new URL('../.env', import.meta.url));
const current = dotenv.parse(readFileSync(file));
const additions = {};
if (!current.CELEST_DEDICATED_API_KEY) additions.CELEST_DEDICATED_API_KEY = randomBytes(32).toString('base64url');
if (!current.CELEST_DEDICATED_ID) additions.CELEST_DEDICATED_ID = 'local';
if (!current.CELEST_DEDICATED_ADDRESS) additions.CELEST_DEDICATED_ADDRESS = '127.0.0.1:7777';
if (!dedicatedConfiguration({ ...current, ...additions })) throw new Error('Existing Dedicated configuration is invalid; nothing changed.');
if (Object.keys(additions).length) appendFileSync(file, '\n# Local Dedicated Server connection (do not commit or copy into client assets)\n' + Object.entries(additions).map(([k, v]) => `${k}=${v}`).join('\n') + '\n');
console.log('Local Dedicated configuration ready. No credentials printed; no server started.');
