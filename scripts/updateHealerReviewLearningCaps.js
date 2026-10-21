import fs from 'node:fs/promises';
const path='scripts/buildHealerSkillReview.js';let s=await fs.readFile(path,'utf8');
s="import {skillForClass} from '../services/skillLearningLevel.js';\n"+s;
s=s.replaceAll('curve(c,s.maxSkillLv)',"curve(c,skillForClass(s,'healer').maxSkillLv)").replaceAll('curve(e.valueScaling,s.maxSkillLv)',"curve(e.valueScaling,skillForClass(s,'healer').maxSkillLv)").replaceAll('curve(c.scaling,s.maxSkillLv)',"curve(c.scaling,skillForClass(s,'healer').maxSkillLv)").replaceAll('curve(s.manaCostScaling,s.maxSkillLv)',"curve(s.manaCostScaling,skillForClass(s,'healer').maxSkillLv)").replaceAll('curve(e.durationScaling,s.maxSkillLv)',"curve(e.durationScaling,skillForClass(s,'healer').maxSkillLv)");
await fs.writeFile(path,s);
for(const file of ['scripts/buildLuminetHealerActiveReview.js','scripts/buildRitualistHealerActiveReview.js']){s=await fs.readFile(file,'utf8');s="import {skillForClass} from '../services/skillLearningLevel.js';\n"+s;s=s.replace('skills.find(s=>s.nr===n))','skillForClass(skills.find(s=>s.nr===n),key))');await fs.writeFile(file,s);}
