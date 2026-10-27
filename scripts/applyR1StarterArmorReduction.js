import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [review,model,armor,decision]=await Promise.all(['data/balancing/r1-armor-level-review.json','data/balancing/armor-defense-model.json','data/balancing/armor-parts.json','data/balancing/r4-armor-calibration-decision.json'].map(read));
const rows=review.rows.map(row=>{
 const entry=decision.rows.find(c=>c.name===row.name||c.key===({Abenteurer:'adventurer',Butcher:'butcher',Druide:'druid',Gladiator:'gladiator',Heiler:'healer','Kräuterkundler':'herbalist','Jäger':'hunter',Ritter:'knight',Luminet:'luminet',Ritualist:'ritualist',Schamane:'shaman','Seelenjäger':'summoner',Schurke:'villian'})[row.name]);
 assert.ok(entry);
 const reduction=Math.floor(Math.abs(row.theoreticalArmorForLevel1));
 const target=row.currentArmor-reduction;
 assert.ok(Number.isSafeInteger(target)&&target>=0);
 const current=armor.sets.find(s=>s.name===entry.name&&s.rank===1).raw.physicalDefense;
 assert.ok([row.currentArmor,target].includes(current),'Unexpected R1 change');
 return {key:entry.key,name:row.name,sourceClass:entry.name,before:row.currentArmor,reduction,after:target,effectiveLevel:(row.baseDefense+target)/row.divisor};
});
if(process.argv.includes('--apply')){
 const backup=`data/balancing/history/before-r1-starter-reduction-${Date.now()}`;
 await fs.mkdir(backup,{recursive:true});
 for(const file of ['armor-defense-model.json','armor-parts.json','ranked-equipment.json','r6-equipment.json','armor-database-manifest.json','r4-armor-calibration-decision.json'])await fs.copyFile(`data/balancing/${file}`,`${backup}/${file}`);
 for(const row of rows){
  model.physicalDefenseByClassAndRank[row.sourceClass][1]=row.after;
  decision.rows.find(r=>r.key===row.key).after[1]=row.after;
 }
 model.r1StarterAdjustment={rule:'Subtract only the whole-number magnitude of the previously calculated negative level-1 armor target from existing R1 armor; magnitudes below 1 unchanged. This does not calibrate effective armor level to 1.',rows};
 model.physicalCalibration.preservedRanks=[];
 model.physicalCalibration.rule=model.physicalCalibration.rule.replace('R1 retained as starter exception.','R1 independently reduced by the approved whole-point starter adjustment.');
 decision.scope=model.physicalCalibration;
 await fs.writeFile('data/balancing/armor-defense-model.json',JSON.stringify(model,null,2)+'\n');
 await fs.writeFile('data/balancing/r4-armor-calibration-decision.json',JSON.stringify(decision,null,2)+'\n');
 await fs.writeFile('data/balancing/r1-starter-reduction-decision.json',JSON.stringify({status:'localModelApplied',backup,rows},null,2)+'\n');
}
console.log(JSON.stringify(rows,null,2));
