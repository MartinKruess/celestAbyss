import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {starterTreeMetadata,discoveredSkill} from '../services/skillTree.js';
const fixtures=JSON.parse(readFileSync(new URL('./fixtures/skill-tree-classes.json',import.meta.url)));
test('Luminet first aid and purification follow the reviewed stamina chain only for Luminet',()=>{
 const definitions=[{nr:139,maxSkillLv:20},{nr:41,maxSkillLv:10},{nr:260,maxSkillLv:10}];
 for(const [child,parent]of [[41,139],[260,41]]){
  const skill=definitions.find(s=>s.nr===child);
  assert.deepEqual(starterTreeMetadata(skill,definitions,'luminet').requirements,[{number:parent,level:3}]);
  assert.deepEqual(starterTreeMetadata(skill,definitions,'butcher').requirements,[]);
 }
});
for(const [key,catalog] of Object.entries(fixtures))test(`${key}: starter prerequisites and discovery use real class catalog`,()=>{
 const definitions=catalog.map(s=>({nr:s.number,maxSkillLv:s.maximumLevel,type:s.type,unlockPhase:s.raceCore?'race':'class',learningRequirements:{minimumCharacterLevel:s.minimumCharacterLevel}}));
 const root=definitions.find(s=>s.unlockPhase==='race');
 for(const nr of [139,201,135])assert.deepEqual(starterTreeMetadata(definitions.find(s=>s.nr===nr),definitions).requirements,[{number:root.nr,level:2}]);
 const attack=definitions.find(s=>s.type==='skill'&&s.learningRequirements.minimumCharacterLevel===6);
 if(attack)assert.deepEqual(starterTreeMetadata(attack,definitions).requirements,[{number:201,level:2}]);
 else assert(['shaman','knight'].includes(key),'Reviewed exceptions start at level eight or ten');
 for(const [nr,parent] of [[133,134],[136,135],[137,136],[144,139],[14,139],[25,139],[142,139]]) {
  const skill=definitions.find(s=>s.nr===nr);if(skill)assert.deepEqual(starterTreeMetadata(skill,definitions).requirements,[{number:parent,level:Math.min(3,definitions.find(s=>s.nr===parent).maxSkillLv)}]);
 }
 for(const nr of [134,138]) assert.deepEqual(starterTreeMetadata(definitions.find(s=>s.nr===nr),definitions).requirements,[{number:135,level:1}]);
 for(const nr of [226,237,244]) {const companion=definitions.find(s=>s.nr===nr);if(companion)assert.deepEqual(starterTreeMetadata(companion,definitions).requirements,[{number:134,level:Math.min(3,definitions.find(s=>s.nr===134).maxSkillLv)}]);}
 for(const nr of [43,44]){const skill=definitions.find(s=>s.nr===nr);if(skill)assert.deepEqual(starterTreeMetadata(skill,definitions).requirements,[{number:144,level:3},{number:201,level:3}]);}
 root.maxSkillLv=20;assert.equal(starterTreeMetadata(root,definitions).definedLearningRanks,20);
 const initial=catalog.filter(s=>discoveredSkill(s,{level:1}));
 assert(initial.length>8);assert(initial.every(s=>s.minimumCharacterLevel<=10));
 assert.deepEqual(catalog.filter(s=>discoveredSkill(s,{level:40})),initial,'Level alone must not reveal hidden skills');
 const tier2=catalog.filter(s=>discoveredSkill(s,{level:10,completedSkillQuests:['foundation']}));
 assert(tier2.length>initial.length);assert(tier2.every(s=>s.minimumCharacterLevel<=40));
 const tier3=catalog.filter(s=>discoveredSkill(s,{level:40,completedSkillQuests:['foundation','specialization']}));
 assert.equal(tier3.some(s=>s.minimumCharacterLevel===42),catalog.some(s=>s.minimumCharacterLevel===42));assert(tier3.every(s=>s.minimumCharacterLevel<=42));
 assert.equal(catalog.filter(s=>discoveredSkill(s,{level:150,completedSkillQuests:['foundation','specialization']})).length,catalog.filter(s=>s.minimumCharacterLevel>0||s.raceCore).length);
});
test('undiscovered skills stay absent; old learned skills are preserved',()=>{
 const s={minimumCharacterLevel:123,learnedLevel:0};
 assert.equal(discoveredSkill(s,{level:122,completedSkillQuests:['foundation','specialization']}),false);
 assert.equal(discoveredSkill(s,{level:123,completedSkillQuests:['foundation','specialization']}),true);
 assert.equal(discoveredSkill({...s,learnedLevel:1},{level:1}),true);
 assert.equal(discoveredSkill({...s,minimumCharacterLevel:-1},{level:150}),false);
});

test('unlocked skills use their class cap without invented rank-level gates; first attack keeps weapon two',()=>{
 const definitions=[{nr:201,type:'passive'}, {nr:51,type:'skill',maxSkillLv:20,learningRequirements:{minimumCharacterLevel:6}}];
 const fire=starterTreeMetadata(definitions[1],definitions);
 assert.equal(fire.definedLearningRanks,20);assert.deepEqual(fire.requirements,[{number:201,level:2}]);
 assert.equal(starterTreeMetadata({...definitions[1],nr:49},definitions).definedLearningRanks,20);
});

test('hunter attack chain and side branches are scoped to the reviewed class',()=>{
 const definitions=fixtures.hunter.map(s=>({nr:s.number,maxSkillLv:s.maximumLevel,type:s.type,unlockPhase:s.raceCore?'race':'class',learningRequirements:{minimumCharacterLevel:s.minimumCharacterLevel}}));
 const parents={18:201,63:51,53:63,153:53,97:53,37:97,122:37,152:37,154:122,10:154,121:122,150:10};
 for(const [nr,parent] of Object.entries(parents)) {
  const skill=definitions.find(s=>s.nr===Number(nr));
  assert.deepEqual(starterTreeMetadata(skill,definitions,'hunter').requirements,[{number:parent,level:Math.min(3,definitions.find(s=>s.nr===parent).maxSkillLv)}]);
  assert.deepEqual(starterTreeMetadata(skill,definitions,'ritualist').requirements,[]);
 }
});

test('global predecessor threshold is capped by the actual class limit',()=>{
 const parent={nr:136,maxSkillLv:10,learningLimits:{defaultMaxLevel:1}};
 const child={nr:137,maxSkillLv:1};
 assert.deepEqual(starterTreeMetadata(child,[parent,child],'hunter').requirements,[{number:136,level:1}]);
 parent.learningLimits.defaultMaxLevel=2;
 assert.deepEqual(starterTreeMetadata(child,[parent,child],'hunter').requirements,[{number:136,level:2}]);
 parent.learningLimits.defaultMaxLevel=10;
 assert.deepEqual(starterTreeMetadata(child,[parent,child],'hunter').requirements,[{number:136,level:3}]);
});

test('reviewed late hunter dependencies use exact max ranks and stay class scoped',()=>{
 const definitions=fixtures.hunter.map(s=>({nr:s.number,maxSkillLv:s.maximumLevel,type:s.type,learningRequirements:{minimumCharacterLevel:s.minimumCharacterLevel}}));
 const expected={86:[{number:153,level:10}],156:[{number:10,level:5}],157:[{number:156,level:1}],88:[{number:121,level:20},{number:18,level:10}]};
 for(const [nr,requirements] of Object.entries(expected)){
  const skill=definitions.find(s=>s.nr===Number(nr));
  assert.deepEqual(starterTreeMetadata(skill,definitions,'hunter').requirements,requirements);
  assert.deepEqual(starterTreeMetadata(skill,definitions,'ritualist').requirements,[]);
  for(const r of requirements)assert.equal(definitions.find(s=>s.nr===r.number).maxSkillLv,r.level);
 }
});

test('first reviewed classes share foundations and retain their explicit attack exceptions',()=>{
 for(const key of ['adventurer','gladiator','herbalist','druid','healer','hunter']) {
  const skills=fixtures[key];assert.equal(skills.filter(s=>s.raceCore).length,1,key);
  const first=skills.find(s=>s.type==='skill'&&s.minimumCharacterLevel===6);assert(first,key);
  assert.deepEqual(first.requirements,[{number:201,level:2}]);
 }
 const mighty=fixtures.gladiator.find(s=>s.number===77);
 assert.deepEqual(mighty.requirements,[{number:61,level:1}]);assert.equal(mighty.furtherPrerequisiteLevel,3);
 assert.deepEqual(fixtures.gladiator.find(s=>s.number===45).requirements,[{number:144,level:3}]);
 for(const key of ['druid','healer'])assert.deepEqual(fixtures[key].find(s=>s.number===30).requirements,[{number:36,level:3}]);
});

test('reviewed adventurer and gladiator branches stay class scoped and connect every non-root skill',()=>{
 const parents={adventurer:{245:201,251:248,247:45,75:45,249:251,145:45,67:145,150:134,114:75,126:106,148:147,246:134,41:139,250:136,106:251,21:106,149:75,147:149},gladiator:{158:139,26:201,96:77,140:45,106:96,75:45,34:75,145:75,162:26,161:201,128:161,109:161,127:161,13:161,114:145,233:106,163:127,52:163,230:233}};
 for(const [key,map]of Object.entries(parents))for(const[nr,parent]of Object.entries(map)){
  const skill=fixtures[key].find(s=>s.number===Number(nr)),source=fixtures[key].find(s=>s.number===parent);
  assert.deepEqual(skill.requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);
 }
 for(const key of ['adventurer','gladiator']) {
  const catalog=fixtures[key];const visit=(number,path=[])=>{assert(!path.includes(number),'No prerequisite cycle');const skill=catalog.find(s=>s.number===number);assert(skill);for(const r of skill.requirements)visit(r.number,[...path,number]);};
  for(const skill of catalog){if(!skill.raceCore)assert(skill.requirements.length>0,`${key} ${skill.number} has a predecessor`);visit(skill.number);}
 }
 assert.deepEqual(fixtures.gladiator.find(s=>s.number===150)?.requirements??[],[]);
 assert.deepEqual(fixtures.hunter.find(s=>s.number===150).requirements,[{number:10,level:3}]);
});

test('reviewed druid elemental, spirit and training paths use the existing class caps',()=>{
 const catalog=fixtures.druid;
 const parents={29:30,132:201,125:29,193:44,225:44,221:125,219:221,6:139,220:44,253:244,118:221,212:194,194:9,9:6,204:9,222:204,203:194,261:30};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 for(const skill of catalog)if(!skill.raceCore)assert(skill.requirements.length>0);
 const visit=(nr,path=[])=>{assert(!path.includes(nr));for(const r of catalog.find(s=>s.number===nr).requirements)visit(r.number,[...path,nr]);};
 catalog.forEach(s=>visit(s.number));
 assert.deepEqual(fixtures.herbalist.find(s=>s.number===29).requirements,[{number:31,level:3}],'Herbalist ice lance follows electric field, separately from the druid path');
});
test('knight reviewed sword, shield and defense paths retain the gladiator provoke parent',()=>{
 const catalog=fixtures.knight;
 const parents={77:201,158:139,93:201,102:201,94:93,140:45,19:158,55:19,75:140,160:102,23:77,42:55,171:144,107:171,95:93,114:75,82:107,28:95,40:158,141:28};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 assert.deepEqual(catalog.find(s=>s.number===59).requirements,[{number:28,level:3},{number:141,level:3}]);
 assert.deepEqual(fixtures.gladiator.find(s=>s.number===158).requirements,[{number:139,level:3}]);
 assert.deepEqual(fixtures.gladiator.find(s=>s.number===77).requirements,[{number:61,level:1}]);
 assert.equal(catalog.length,32);assert.deepEqual(catalog.filter(s=>s.raceCore).map(s=>s.number),[5]);
 const visit=(nr,path=[])=>{assert(!path.includes(nr),'No prerequisite cycle');const s=catalog.find(s=>s.number===nr);assert(s);for(const r of s.requirements)visit(r.number,[...path,nr]);};
 for(const s of catalog){if(!s.raceCore)assert(s.requirements.length>0);visit(s.number);}
});

test('herbalist reviewed branches connect all skills and storm requires targeted lightning 10 and nature force 1',()=>{
 const catalog=fixtures.herbalist;
 const parents={31:16,29:31,167:139,164:167,46:29,165:44,221:29,71:165,69:31,4:201,166:4,56:69,81:71,123:81,84:56,205:123,57:84,32:205,169:32};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 assert.deepEqual(catalog.find(s=>s.number===112).requirements,[{number:57,level:10},{number:81,level:1}]);
 const definitions=catalog.map(s=>({nr:s.number,maxSkillLv:s.maximumLevel}));
 const storm=definitions.find(s=>s.nr===112);
 assert.deepEqual(starterTreeMetadata(storm,definitions,'herbalist').requirements,[{number:57,level:10},{number:81,level:1}]);
 assert.deepEqual(starterTreeMetadata(storm,definitions,'druid').requirements,[],'Herbalist storm requirements stay class scoped');
 const visit=(nr,path=[])=>{assert(!path.includes(nr));const s=catalog.find(s=>s.number===nr);assert(s);for(const r of s.requirements)visit(r.number,[...path,nr]);};
 for(const s of catalog){if(!s.raceCore)assert(s.requirements.length>0);visit(s.number);}
 assert.equal(catalog.length,32);
});

test('all herbalist first unlocks are assigned and retain the catalyst rule',()=>{
 const catalog=fixtures.herbalist;assert.equal(catalog.length,32);assert.equal(catalog.find(s=>s.number===205).minimumCharacterLevel,fixtures.druid.find(s=>s.number===204).minimumCharacterLevel);assert.equal(catalog.find(s=>s.number===205).minimumCharacterLevel,47);assert.equal(catalog.filter(s=>s.minimumCharacterLevel<1).length,0);
 for(const[nr,level]of Object.entries({112:65,31:10,71:25,166:33,81:42,56:37,69:27,57:55,46:20,123:42,4:30,167:15,169:60,32:60,84:42,164:17}))assert.equal(catalog.find(s=>s.number===Number(nr)).minimumCharacterLevel,level);
 const visible=catalog.filter(s=>discoveredSkill(s,{level:65,completedSkillQuests:['foundation','specialization']}));
 assert.deepEqual(visible.filter(s=>s.minimumCharacterLevel>10).map(s=>s.number).sort((a,b)=>a-b),[4,29,32,46,56,57,69,71,81,84,112,123,164,165,166,167,169,205,221]);
 assert.equal(visible.length,32);
 for(const nr of [32,57,169,112])assert.equal(catalog.find(s=>s.number===nr).rankCosts.reduce((a,b)=>a+b,0),400);
 for(const nr of [84,164])assert.equal(catalog.find(s=>s.number===nr).rankCosts.reduce((a,b)=>a+b,0),300);
});

test('summoner reviewed attack, movement and soul paths connect every skill without cycles',()=>{
 const catalog=fixtures.summoner;
 const parents={7:201,21:139,63:21,187:43,184:51,24:184,119:43,191:142,47:24,147:43,183:139,80:183,185:43,186:185,66:24,262:47,148:187,190:148,229:186};
 for(const[nr,parent]of Object.entries(parents)){
  const skill=catalog.find(s=>s.number===Number(nr)),source=catalog.find(s=>s.number===parent);
  assert.deepEqual(skill.requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);
  const definitions=catalog.map(s=>({nr:s.number,maxSkillLv:s.maximumLevel,type:s.type,learningRequirements:{minimumCharacterLevel:s.minimumCharacterLevel}}));
  assert.equal(starterTreeMetadata(definitions.find(s=>s.nr===Number(nr)),definitions,'ritualist').requirements.some(r=>r.number===parent),false,'Summoner-specific relation stays scoped');
 }
 const visit=(nr,path=[])=>{assert(!path.includes(nr),'No prerequisite cycle');const s=catalog.find(s=>s.number===nr);assert(s);for(const r of s.requirements)visit(r.number,[...path,nr]);};
 assert.equal(catalog.length,32);
 for(const skill of catalog){if(!skill.raceCore)assert(skill.requirements.length>0);visit(skill.number);}
});

test('ritualist retains both fire prerequisites and a single spirit prerequisite for arcane charge',()=>{
 const catalog=fixtures.ritualist;
 const parents={72:139,100:201,120:44,232:49,178:44,110:178,214:178,83:48,236:120,99:83,103:48,235:232,241:120,104:241,105:104,209:103,180:209};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 assert.deepEqual(catalog.find(s=>s.number===48).requirements,[{number:120,level:3},{number:110,level:3}]);
 assert.deepEqual(catalog.find(s=>s.number===181).requirements,[{number:44,level:3}]);
 const visit=(nr,path=[])=>{assert(!path.includes(nr),'No prerequisite cycle');const s=catalog.find(s=>s.number===nr);assert(s);for(const r of s.requirements)visit(r.number,[...path,nr]);};
 assert.equal(catalog.length,32);
 for(const skill of catalog){if(!skill.raceCore)assert(skill.requirements.length>0);visit(skill.number);}
});

test('rogue reviewed branches follow the final blade order and both deadly dance prerequisites',()=>{
 const catalog=fixtures.villian;
 const parents={70:27,17:139,22:201,188:43,91:188,92:188,191:139,90:188,146:43,67:43,20:22,80:191,111:17,115:111,126:111,65:126,238:80,189:146,243:70};
 const definitions=catalog.map(s=>({nr:s.number,maxSkillLv:s.maximumLevel,type:s.type,unlockPhase:s.raceCore?'race':'class',learningRequirements:{minimumCharacterLevel:s.minimumCharacterLevel}}));
 for(const[nr,parent]of Object.entries(parents)){
  const skill=definitions.find(s=>s.nr===Number(nr)), source=definitions.find(s=>s.nr===parent);
  const expected=[{number:parent,level:Math.min(3,source.maxSkillLv)}];
  assert.deepEqual(starterTreeMetadata(skill,definitions,'villian').requirements,expected);
  assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,expected);
 }
 assert.deepEqual(starterTreeMetadata(definitions.find(s=>s.nr===113),definitions,'villian').requirements,[{number:189,level:3},{number:243,level:3}]);
 assert.equal(catalog.some(s=>s.number===142),false,'Current catalog does not assign dodge training to rogue');
 assert.equal(catalog.length,32);
 const visit=(nr,path=[])=>{assert(!path.includes(nr),'No prerequisite cycle');const s=catalog.find(s=>s.number===nr);assert(s);for(const r of s.requirements)visit(r.number,[...path,nr]);};
 for(const s of catalog){if(!s.raceCore)assert(s.requirements.length>0);visit(s.number);}
 // Shared skills must retain the already reviewed connections of other classes.
 assert.deepEqual(fixtures.summoner.find(s=>s.number===191).requirements,[{number:142,level:3}]);
 assert.deepEqual(fixtures.adventurer.find(s=>s.number===126).requirements,[{number:106,level:3}]);
});

test('Butcher completed review connects every skill and scopes its attack predecessors',()=>{
 const catalog=fixtures.butcher;
 const parents={77:87,38:77,131:201,96:77,140:45,39:38,11:77,3:11,175:139,176:175,35:3,173:140,98:35,172:131,12:173,227:98,89:11,234:89,177:176,174:172};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 assert.deepEqual(catalog.filter(s=>!s.raceCore&&!s.requirements.length).map(s=>s.number),[]);
 assert(catalog.find(s=>s.number===11).description.length>100,'Charged strike description exists in the served catalog');
 const visit=(nr,path=[])=>{assert(!path.includes(nr));for(const r of catalog.find(s=>s.number===nr).requirements)visit(r.number,[...path,nr]);};
 catalog.forEach(s=>visit(s.number));
 assert.deepEqual(fixtures.gladiator.find(s=>s.number===77).requirements,[{number:61,level:1}]);
});

test('shaman earth, fire and stamina branches connect every skill without cycles',()=>{
 const catalog=fixtures.shaman;
 const parents={258:201,15:258,38:15,252:201,263:44,106:38,192:44,224:44,6:139,149:6,50:44,202:50,223:149,255:38,257:149,33:263,76:257,62:257,254:257,259:257,256:255};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 const visit=(nr,path=[])=>{assert(!path.includes(nr));const skill=catalog.find(s=>s.number===nr);assert(skill);for(const r of skill.requirements)visit(r.number,[...path,nr]);};
 assert.equal(catalog.length,32);
 for(const skill of catalog){if(!skill.raceCore)assert(skill.requirements.length>0);visit(skill.number);}
});

test('completed Luminet review connects every light and hope branch without self-dependencies',()=>{
 const catalog=fixtures.luminet;
 const parents={41:139,260:41,29:36,231:36,60:44,215:60,165:260,216:215,217:216,218:60,9:60,116:60,228:116,117:218,213:218,8:44,211:8,208:44,74:208,101:228};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 assert.equal(catalog.find(s=>s.number===228).minimumCharacterLevel,37);
 const visit=(nr,path=[])=>{assert(!path.includes(nr),'No prerequisite cycle');const skill=catalog.find(s=>s.number===nr);assert(skill);for(const r of skill.requirements)visit(r.number,[...path,nr]);};
 assert.equal(catalog.length,32);
 for(const skill of catalog){if(!skill.raceCore)assert(skill.requirements.length>0);visit(skill.number);}
});

test('healer paths require both Aurora prerequisites and connect all skills without cycles',()=>{
 const catalog=fixtures.healer;const parents={29:30,68:29,143:44,64:143,60:44,124:64,206:197,108:197,217:60,240:29,54:240,239:240,242:44,207:197,78:108,58:197,208:44,101:217};
 for(const[nr,parent]of Object.entries(parents)){const source=catalog.find(s=>s.number===parent);assert.deepEqual(catalog.find(s=>s.number===Number(nr)).requirements,[{number:parent,level:Math.min(3,source.maximumLevel)}]);}
 assert.deepEqual(catalog.find(s=>s.number===197).requirements,[{number:64,level:3},{number:60,level:3}]);
 const visit=(nr,path=[])=>{assert(!path.includes(nr));const skill=catalog.find(s=>s.number===nr);assert(skill);for(const r of skill.requirements)visit(r.number,[...path,nr]);};
 for(const skill of catalog){if(!skill.raceCore)assert(skill.requirements.length>0);visit(skill.number);}
});
