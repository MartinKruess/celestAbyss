import fs from 'node:fs/promises';
import {skillClassVariant} from '../services/skillClassVariant.js';
async function writeIfChanged(path, content) {
  if(await fs.readFile(path,'utf8') !== content)await fs.writeFile(path,content);
}

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const decision=JSON.parse(await fs.readFile('data/balancing/starter-skill-unlocks-decision.json','utf8'));
const old=JSON.parse(await fs.readFile(`${decision.backup}/catalog.json`,'utf8'));
const numbers=new Set(decision.skillNumbers);
function requirementRows(value,path='learningRequirements'){
  return Object.entries(value).flatMap(([key,v])=>v&&typeof v==='object'?requirementRows(v,`${path}.${key}`):[`| ${path}.${key} | ${v} |`]);
}
function updateBlock(block,s){
  const previous=old.find(x=>x.nr===s.nr);
  for(const key of ['description_de','description_eng'])if(previous?.[key]&&previous[key]!==s[key])block=block.replaceAll(previous[key],s[key]);
  const stripped=block.replace(/^\| learningRequirements(?:\.[^|]*)? \|[^\n]*\r?\n/gm,'');
  return stripped.replace(/(\| (?:Feld \| Gespeicherter Wert|Gespeichertes Feld \| Wert) \|\r?\n\| --- \| --- \|\r?\n)/,`$1${requirementRows(s.learningRequirements).join('\n')}\n`);
}
for(const file of await fs.readdir('data/balancing')){
  if(!file.endsWith('-skill-review.json'))continue;
  const path=`data/balancing/${file}`;
  const review=JSON.parse(await fs.readFile(path,'utf8'));
  if(!review.skills)continue;
  const key=review.classKey;
  review.skills=review.skills.map(s=>{
    if(!numbers.has(s.nr))return s;
    const actual=skillClassVariant(catalog.find(c=>c.nr===s.nr),key);
    return {...s,learningRequirements:actual.learningRequirements,description_de:actual.description_de,description_eng:actual.description_eng};
  });
  await writeIfChanged(path,JSON.stringify(review,null,2)+'\n');
  const classFile=`docs/balancing/classes/${file.replace('-skill-review.json','-skills.md')}`;
  let md;
  try{md=await fs.readFile(classFile,'utf8');}catch(error){if(error.code==='ENOENT')continue;throw error;}
  for(const s of review.skills.filter(s=>numbers.has(s.nr))){
    const pattern=new RegExp(`(^### ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^### \\d+:|^## |$(?![\\s\\S]))`,'m');
    md=md.replace(pattern,block=>updateBlock(block,s));
  }
  await writeIfChanged(classFile,md);
}
const sharedPath='docs/balancing/shared-creature-skills.md';
let shared=await fs.readFile(sharedPath,'utf8');
for(const s of catalog.filter(s=>numbers.has(s.nr)&&s.category==='creature')){
  const pattern=new RegExp(`(^## ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^## |$(?![\\s\\S]))`,'m');
  shared=shared.replace(pattern,block=>updateBlock(block,s));
}
await writeIfChanged(sharedPath,shared);
const trainingPath='docs/balancing/shared-training-skills.md';
let training=await fs.readFile(trainingPath,'utf8');
for(const s of catalog.filter(s=>numbers.has(s.nr)&&[139,144,201].includes(s.nr))){
  const pattern=new RegExp(`(^## ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^## |$(?![\\s\\S]))`,'m');
  training=training.replace(pattern,block=>updateBlock(block,s));
}
await writeIfChanged(trainingPath,training);
const planPath='data/balancing/skill-learning-plan.json';
const plan=JSON.parse(await fs.readFile(planPath,'utf8'));
plan.status='definedFirstUnlocksAppliedToCatalogAndDatabase';
plan.databaseDecision='data/balancing/starter-skill-unlocks-decision.json';
await writeIfChanged(planPath,JSON.stringify(plan,null,2)+'\n');
console.log('Synchronized stored unlock requirements in class review data and detailed skill tables; combat values preserved.');
