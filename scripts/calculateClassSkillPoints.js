import {isPassiveSkill} from '../services/skillClassification.js';
import fs from 'node:fs/promises';

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const counts=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
const families={adventurer:['Abenteurer',['Abenteuer','Adventure','Adventurer','Scout']],butcher:['Butcher',['Butcher','Destroyer']],druid:['Druide',['Druide','Alchemist']],gladiator:['Gladiator',['Gladiator','Berserker']],knight:['Ritter',['Knife','Templar','Ritter','Tempelritter']],shaman:['Schamane',['Shamane','High Elves']],healer:['Heiler',['Healer','Priest']],herbalist:['Kräuterkundler',['Herbalist','Witcher']],hunter:['Jäger',['Hunter','Archer']],summoner:['Nachtjäger',['Summoner','Soulseeker']],ritualist:['Ritualist',['Ritualist','Bloodmage']],luminet:['Luminet',['Luminet','Lightmage']],villian:['Schurke',['Villian','Shadowwarrior']]};
const classes=[];
for(const[key,[name,aliases]]of Object.entries(families)){
 const count=counts.find(c=>c.name.startsWith(name));if(!count)throw Error('Missing class '+key);
 const skills=count.skillNumbers.map(nr=>{
  const s=catalog.find(s=>s.nr===nr);const limits=s.learningLimits;
  const overrides=aliases.map(a=>limits?.classOverrides?.[a]).filter(v=>v!==undefined);
  const cap=overrides.length?Math.max(...overrides):limits?.defaultMaxLevel??s.maxSkillLv;
  if(!Number.isInteger(cap)||cap<1||cap>s.maxSkillLv)throw Error('Invalid learning cap');
  return {nr,name:s.skillName_de,definitionMaxLevel:s.maxSkillLv,learnableMaxLevel:cap,sp:cap,passive:isPassiveSkill(s),source:overrides.length?'classOverride':limits?'defaultLearningLimit':'definitionMaxLevel'};
 });
 classes.push({key,name,skillCount:skills.length,sp:skills.reduce((v,s)=>v+s.sp,0),activeSP:skills.filter(s=>!s.passive).reduce((v,s)=>v+s.sp,0),passiveSP:skills.filter(s=>s.passive).reduce((v,s)=>v+s.sp,0),skills});
}
await fs.writeFile('data/balancing/class-skill-points.json',JSON.stringify({costPerLearnedLevel:1,levelOneCostsPoint:true,sharedSkillsCountedOnce:true,unresolvedSourceSkillsExcluded:true,status:'Current stored learning caps; unreviewed classes provisional',classes},null,2)+'\n');
console.log(JSON.stringify(classes.map(({key,skillCount,sp,activeSP,passiveSP})=>({key,skillCount,sp,activeSP,passiveSP}))));
