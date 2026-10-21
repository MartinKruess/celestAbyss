import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';import {createHash} from 'node:crypto';
const catalog=await fs.readFile('data/skills.json');const hash=createHash('sha256').update(catalog).digest('hex');
await fs.mkdir('data/balancing/simulation-inputs',{recursive:true});
for(const[path,data]of [[`data/balancing/simulation-inputs/${hash}.skills.json`,catalog],['data/balancing/all-class-timed-damage-baseline-2s-before-energy-change.json',await fs.readFile('data/balancing/all-class-timed-damage.json')],[await retiredBalancingReportPath('docs/balancing/all-class-timed-damage-baseline-2s-before-energy-change.md'),await fs.readFile('docs/balancing/all-class-timed-damage.md')]]){try{await fs.writeFile(path,data,{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}}
const report=JSON.parse(await fs.readFile('data/balancing/all-class-timed-damage.json','utf8'));if(report.inputHashes['data/skills.json']!==hash)throw Error('Baseline skill hash mismatch');
console.log('Existing two-second baseline and its exact input catalog preserved; no simulation run.');
