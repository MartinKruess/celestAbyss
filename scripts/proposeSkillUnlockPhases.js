import {skillClassification} from '../services/skillClassification.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [skills,points,comparison]=await Promise.all(['data/skills.json','data/balancing/class-skill-points.json','data/balancing/class-comparison-level60.json'].map(read));
const groups={
 common:{1:1,2:1,5:1,43:3,44:3,45:3,133:20,134:20,135:20,136:20,137:20,138:20,139:2,144:2,201:2,41:5,142:10},
 weapons:{7:10,18:10,22:10,26:10,93:10,102:10,131:10,132:10,245:10,252:10},
 adventurer:{14:1,21:1,25:1,67:6,75:12,106:3,114:15,126:18,145:9,147:17,148:12,149:20,150:20,246:40,247:14,248:1,249:40,250:20,251:5},
 butcher:{3:5,11:3,12:40,35:40,38:30,39:40,77:2,87:1,89:15,96:6,98:40,140:6,172:12,173:16,174:40,175:30,176:40,177:40,227:40,234:40},
 druid:{6:8,9:30,29:1,30:5,36:1,118:40,125:7,193:14,194:40,203:12,204:40,212:40,219:30,220:10,221:3,222:40,225:16,244:40,253:40},
 gladiator:{13:40,34:30,52:30,61:1,75:12,77:2,96:6,106:3,109:40,114:15,127:40,128:40,140:6,145:9,158:10,161:40,162:12,163:40,230:40,233:16},
 healer:{29:1,36:1,54:12,58:40,60:8,64:14,68:5,78:40,101:16,108:30,124:14,143:15,197:40,206:40,207:40,208:10,217:30,239:18,240:40,242:12},
 herbalist:{4:6,16:1,29:1,31:10,32:8,46:5,56:15,57:3,69:8,71:14,81:40,84:16,112:40,123:15,164:12,165:16,166:18,167:10,169:40,205:40,221:3},
 hunter:{10:6,14:1,25:1,37:8,51:3,53:1,63:5,86:12,88:40,97:10,121:15,122:8,150:20,152:16,153:12,154:18,156:40,157:40,226:40},
 knight:{19:3,23:30,28:8,40:40,42:30,55:5,59:40,64:14,75:12,77:2,82:16,94:1,95:18,107:40,114:15,140:6,141:12,158:10,171:30},
 luminet:{8:40,9:30,29:1,36:1,60:8,74:16,101:16,116:12,117:18,208:10,211:40,213:15,215:6,216:40,217:30,218:10,228:40,231:1,260:14},
 ritualist:{48:40,49:1,72:6,83:14,99:30,100:10,103:40,104:40,105:40,110:18,120:40,178:16,180:40,181:8,209:40,214:30,232:1,235:40,236:40,237:40,241:40},
 shaman:{6:8,15:1,33:12,38:30,50:3,62:40,76:15,106:3,149:20,192:14,202:6,223:16,224:18,254:40,255:5,256:40,257:22,258:19,259:40},
 summoner:{21:1,24:8,47:18,51:3,63:5,66:40,80:10,119:6,147:17,148:12,183:14,184:1,185:40,186:40,187:15,190:16,191:13,229:40},
 villian:{17:6,20:11,27:1,65:17,67:6,70:3,80:10,90:40,91:40,92:40,111:15,113:40,115:19,126:18,146:12,188:40,189:40,191:13,238:40,243:16}
};
const progressionSpread={
 134:21,135:22,138:24,
 75:21,147:23,148:18,149:24,150:25,247:17,126:26,250:22,
 172:13,173:22,89:18,193:21,225:23,203:13,220:11,162:22,233:18,
 54:11,242:22,208:18,101:24,239:23,74:21,116:13,260:17,213:22,117:25,218:12,
 31:11,164:14,165:22,166:24,167:13,84:17,123:21,71:18,
 86:13,153:21,154:24,121:17,152:22,97:11,141:13,82:23,95:26,
 100:12,83:17,178:22,110:25,33:11,192:21,76:17,223:23,224:25,
 187:17,183:16,190:22,80:11,47:24,146:14,111:18,243:21,65:22,115:24,
 246:40,249:42,12:40,35:41,39:43,98:41,174:40,176:42,177:43,227:42,234:43,
 244:40,194:41,253:41,222:42,118:42,212:43,204:42,
 161:40,13:40,109:41,128:41,127:42,230:43,163:42,
 58:40,78:41,206:40,197:42,240:41,207:43,
 81:40,112:43,169:41,205:42,226:40,88:42,156:41,157:43,
 40:40,59:41,107:42,8:41,211:42,216:40,228:43,
 237:40,120:40,103:40,104:41,105:42,241:42,209:43,48:41,180:43,235:43,236:41,
 62:40,254:40,259:41,256:43,185:40,186:40,229:41,66:42,
 188:40,90:40,91:41,92:41,238:42,189:42,113:43
};
for(const group of Object.values(groups))for(const nr of Object.keys(group))if(progressionSpread[nr]!==undefined)group[nr]=progressionSpread[nr];
const levels={};for(const group of Object.values(groups))for(const [nr,level]of Object.entries(group)){assert(!levels[nr]||levels[nr]===level,'Conflicting shared skill '+nr);levels[nr]=level;}
const pet=new Set([133,134,135,136,137,138]);
const prerequisites={109:[13],127:[13],128:[13],13:[161],103:[120],104:[103],105:[103,104],180:[120],241:[120],48:[120],209:[120],90:[188],91:[188],92:[188],185:[],186:[185],229:[185,186],150:[136],246:[134,136],249:[136],250:[136],236:[237]};
const classes=comparison.rows.map(c=>{const owned=points.classes.find(p=>p.key===c.key);assert(owned.skillCount<=32);const rows=owned.skills.filter(o=>!(c.key==='knight'&&o.nr===64)).map((o,i)=>{const s=skills.find(s=>s.nr===o.nr),level=levels[s.nr];assert(Number.isInteger(level),'Missing unlock '+s.nr);return {nr:s.nr,name:s.skillName_de,...skillClassification(s),maxSkillLevel:o.learnableMaxLevel,minimumCharacterLevel:level,phase:pet.has(s.nr)?'regularPets':level>=40?'classSpecialization':level>=30?'advancedBridge':level>=10?'expandedBasics':'starter',requiresLearnedSkills:(prerequisites[s.nr]??[]).map(nr=>({nr,minimumSkillLevel:1})),...([237,244,226].includes(s.nr)?{questRequirement:{status:'questIdentifierPending',name:null,offeredAtCharacterLevel:40,requiredOutcome:s.nr===237?'Morrak defeated and associated quest completed':s.nr===244?'Nature Spirit quest completed':'Soul Companion quest completed'}}:{}),...(c.key==='knight'&&s.nr===64?{reviewNote:'Existing Knight Heal assignment questioned by user; retained provisionally, no removal authorized.'}:{})};}).sort((a,b)=>a.minimumCharacterLevel-b.minimumCharacterLevel||a.nr-b.nr);
 const set=new Set(rows.map(s=>s.nr));for(const row of rows)for(const p of row.requiresLearnedSkills){assert(set.has(p.nr),'Missing prerequisite '+c.key+' '+row.nr+' -> '+p.nr);assert(rows.find(s=>s.nr===p.nr).minimumCharacterLevel<=row.minimumCharacterLevel,'Prerequisite unlocked too late');}
 return {key:c.key,name:c.name,skillCount:rows.length,sp:rows.reduce((sum,row)=>sum+row.maxSkillLevel,0),levelGroups:[...new Set(rows.map(s=>s.minimumCharacterLevel))].map(level=>({characterLevel:level,skills:rows.filter(s=>s.minimumCharacterLevel===level).map(s=>({nr:s.nr,name:s.name}))})),skills:rows};});
const draft={status:'proposalNotAppliedToDatabase',generatedAt:new Date().toISOString(),scope:'All currently assigned skills, first unlock only. Skill values, learning caps, SP costs and existing DB unlocks unchanged. New proposal supersedes early pet unlock plan. Selected intermediate unlocks between levels 21 and 39; class-defining combinations start at level 40 and expand through level 43. All existing character classes retained; no invented advancement quest.',sharedRules:{racialPassives:1,generalTraining:2,classFamilyPassives:3,firstAid:5,weaponSpecificTraining:10,regularPetSkillsStart:20,regularPetSkillLevels:{133:20,136:20,137:20,134:21,135:22,138:24},classIdentitySkillsStart:40,classIdentitySkillsEnd:43},notes:['Skill rank upgrade character-level requirements remain undefined. Unlocking does not auto-learn a skill; prerequisite ranks require SP as usual.','Advanced packages unlock across levels 40-43; prerequisite skills must be learned first. No minimum rank above 1 invented.','Morrak, Nature Spirit and Soul Companion each unlock at level 40 through their quest. Quest names and identifiers are not defined; only Morrak explicitly requires defeating the demon.','Holzspalter proposed at level 1 instead of tentative level 2 to give Gladiator a simple initial attack.','Volles Potential proposed at level 40 instead of tentative level 30, matching new specialization boundary.','Body Reinforcement proposed at level 21; early attacks and weapon training remain available before it.','Knight Heal removed by user instruction. Replacement slot intentionally empty.'],classes};
draft.userReview={reviewedThroughClass:'herbalist',changes:[{nr:175,level:30},{nr:9,level:30,sharedBy:['druid','luminet']},{nr:219,level:30},{nr:52,level:30},{nr:34,level:30,reason:'Shield and temporary basic-attack buff; independent of Rage package.'},{nr:64,level:14,sharedBy:['healer']},{nr:124,level:14},{nr:143,level:15},{nr:108,level:30},{nr:56,level:15}],petLearningCaps:'Adventurer/Tamer 3 for Bond, Control and Breeding; all other current classes 1.'};
draft.userReview.secondPass={reviewedThroughClass:'villian',changes:[{nr:23,level:30},{nr:171,level:30},{nr:42,level:30,agentProposal:true},{nr:217,level:30,agentProposal:true,sharedBy:['luminet','healer']},{nr:214,level:30},{nr:99,level:30,agentProposal:true},{nr:257,level:22,agentProposal:true},{nr:258,level:19,agentProposal:true},{nr:38,level:30,sharedBy:['shaman','butcher']}],rogueSpacing:{20:11,191:13,111:15,243:16,65:17,115:19},notes:['Astralkörper 8 and Ätherregen 9 are separate existing skills, not a rename.','Knight Heal removed; 31 remaining Knight skills, one replacement slot open.','Verbrennen maximum skill rank is 15; proposed first character-level unlock remains 6.','Verloren in der Dunkelheit remains 40 because its soul attacks and Reaper are level 40.','Intermediate levels 19 and 22 distinguish early terrain control and modest fire proc from powerful level-40 masteries.']};
draft.pendingSkillRemovals=points.classes.find(c=>c.key==='knight').skills.some(s=>s.nr===64)?[{classKey:'knight',nr:64,name:'Heilung',status:'pendingDatabaseUpdate',replacement:null}]:[];
draft.userReview.progressionSpacing={status:'userRequestedAgentDistribution',bounds:{starter:[1,9],expansion:[10,29],bridge:[30,39],specialization:[40,43]},levelsBySkill:progressionSpread,notes:['Not random at runtime; deterministic proposed learning levels. Shared definitions retain the same unlock across all owners.','Morrak, Nature Spirit and Soul Companion remain exactly level 40 with quest conditions.','Related skills may share a level or follow on consecutive levels. Pet support starts no earlier than regular pets.','Skill values, ranks and SP costs are not changed.']};
draft.pendingRenames=skills.find(s=>s.nr===259).skillName_de==='Weisheit des Erdweisen'?[]:[{nr:259,name:'Weisheit des Erdweisen',englishName:'Wisdom of the Earth Sage',status:'pendingDatabaseUpdate'}];
await fs.writeFile('data/balancing/skill-unlock-phase-proposal.json',JSON.stringify(draft,null,2)+'\n');
for(const c of classes)console.log(c.name+' ('+c.skillCount+'): '+['starter','expandedBasics','regularPets','advancedBridge','classSpecialization'].map(p=>p+'='+c.skills.filter(s=>s.phase===p).length).join(', '));
