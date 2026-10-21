import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {SkillDataModel} from '../models/skillSchema.js';
import {withSkillClassification} from '../services/skillClassification.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
export function classifiedRecord(original){const s=withSkillClassification(original);if(['Physicas','phyical'].includes(s.dmgType))s.dmgType='physical';return s;}
if(process.argv[1]?.endsWith('prepareSkillClassification.js')){
 const before=JSON.parse(await fs.readFile('data/skills.json','utf8')),skills=before.map(classifiedRecord);
 for(let i=0;i<skills.length;i++){const s=skills[i];await new SkillDataModel(s).validate();for(const stats of [{physicalAttack:0,magicalAttack:0,criticalDamageBonus:.8},{physicalAttack:400,magicalAttack:700,criticalDamageBonus:.8}])assert.deepEqual(evaluateDamageSkill(s,stats),evaluateDamageSkill(before[i],stats),'Damage changed '+s.nr);assert.deepEqual(s.charClass,before[i].charClass);assert.deepEqual(s.resourceCosts,before[i].resourceCosts);}
 const counts=Object.fromEntries(['skill','passive','selfBuff','buff'].map(t=>[t,skills.filter(s=>s.type===t).length]));
 await fs.writeFile('data/balancing/skill-classification-migration-preview.json',JSON.stringify({status:'validatedPreviewNotDatabaseExport',generatedAt:new Date().toISOString(),count:skills.length,counts,compatibility:'dmgType retained only for historical consumers; Physicas normalized to physical. Primary classification uses type, damageType, effectKind and target.',skills},null,2)+'\n');console.log('Validated '+skills.length+' definitions, unchanged damage, resources and ownership: '+JSON.stringify(counts));
}
