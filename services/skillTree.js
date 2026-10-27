import { learnableSkillLevel } from './skillLearningLimits.js';

// Reviewed dependencies use predecessor rank 3, capped at its class-specific maximum.
// Race foundations and the first attack retain their explicit rank-2 exceptions.
export function starterTreeMetadata(skill, definitions, classKey = '') {
  const root=definitions.find(s=>s.unlockPhase==='race');
  const requirements=[];
  const predecessorRank=number=>{
    const source=definitions.find(s=>s.nr===number);
    const cap=source?learnableSkillLevel(source,classKey):null;
    return Number.isInteger(cap)&&cap>0?Math.min(3,cap):3;
  };
  if(root && [139,201,135].includes(skill.nr)) requirements.push({number:root.nr,level:2});
  if([134,138].includes(skill.nr)) requirements.push({number:135,level:1});
  if([226,237,244].includes(skill.nr) && definitions.some(s=>s.nr===134)) requirements.push({number:134,level:predecessorRank(134)});
  if(skill.learningRequirements?.minimumCharacterLevel===6 && skill.type==='skill' && definitions.some(s=>s.nr===201)) requirements.push({number:201,level:2});
  const parent={144:139,14:139,25:139,133:134,136:135,137:136,142:139}[skill.nr];
  if(parent) requirements.push({number:parent,level:predecessorRank(parent)});
  if([43,44,45].includes(skill.nr)) for(const number of (classKey==='gladiator'&&skill.nr===45?[144]:[144,201])) requirements.push({number,level:predecessorRank(number)});
  if(classKey==='gladiator'&&skill.nr===77) requirements.push({number:61,level:1});
  if(['druid','healer'].includes(classKey)&&skill.nr===30) requirements.push({number:36,level:predecessorRank(36)});
  // Hunter connections confirmed in the tree review; do not apply shared skill numbers to other classes.
  if(classKey==='hunter') {
    const hunterParent={18:201,63:51,53:63,153:53,97:53,37:97,122:37,152:37,154:122,10:154,121:122,150:10}[skill.nr];
    if(hunterParent && definitions.some(s=>s.nr===hunterParent)) requirements.push({number:hunterParent,level:predecessorRank(hunterParent)});
    const lateRequirements={86:[{number:153,level:10}],156:[{number:10,level:5}],157:[{number:156,level:1}],88:[{number:121,level:20},{number:18,level:10}]}[skill.nr];
    if(lateRequirements) requirements.push(...lateRequirements);
  }
  const reviewedParents={
    adventurer:{245:201,251:248,247:45,75:45,249:251,145:45,67:145,150:134,114:75,126:106,148:147,246:134,41:139,250:136,106:251,21:106,149:75,147:149},
    gladiator:{158:139,26:201,96:77,140:45,106:96,75:45,34:75,145:75,162:26,161:201,128:161,109:161,127:161,13:161,114:145,233:106,163:127,52:163,230:233},
    knight:{77:201,158:139,93:201,102:201,94:93,140:45,19:158,55:19,75:140,160:102,23:77,42:55,171:144,107:171,95:93,114:75,82:107,28:95,40:158,141:28},
    herbalist:{31:16,29:31,167:139,164:167,46:29,165:44,221:29,71:165,69:31,4:201,166:4,56:69,81:71,123:81,84:56,205:123,57:84,32:205,169:32},
    druid:{29:30,132:201,125:29,193:44,225:44,221:125,219:221,6:139,220:44,253:244,118:221,212:194,194:9,9:6,204:9,222:204,203:194,261:30},
    healer:{29:30,68:29,143:44,64:143,60:44,124:64,206:197,108:197,217:60,240:29,54:240,239:240,242:44,207:197,78:108,58:197,208:44,101:217},
    luminet:{41:139,260:41,29:36,231:36,60:44,215:60,165:260,216:215,217:216,218:60,9:60,116:60,228:116,117:218,213:218,8:44,211:8,208:44,74:208,101:228},
    summoner:{7:201,21:139,63:21,187:43,184:51,24:184,119:43,191:142,47:24,147:43,183:139,80:183,185:43,186:185,66:24,262:47,148:187,190:148,229:186},
    ritualist:{72:139,100:201,120:44,232:49,178:44,110:178,214:178,83:48,236:120,99:83,103:48,235:232,241:120,104:241,105:104,209:103,180:209},
    villian:{70:27,17:139,22:201,188:43,91:188,92:188,191:139,90:188,146:43,67:43,20:22,80:191,111:17,115:111,126:111,65:126,238:80,189:146,243:70},
    butcher:{77:87,38:77,131:201,96:77,140:45,39:38,11:77,3:11,175:139,176:175,35:3,173:140,98:35,172:131,12:173,227:98,89:11,234:89,177:176,174:172},
    shaman:{258:201,15:258,38:15,252:201,263:44,106:38,192:44,224:44,6:139,149:6,50:44,202:50,223:149,255:38,257:149,33:263,76:257,62:257,254:257,259:257,256:255},
  }[classKey];
  const reviewedParent=reviewedParents?.[skill.nr];
  if(reviewedParent && definitions.some(s=>s.nr===reviewedParent)) requirements.push({number:reviewedParent,level:predecessorRank(reviewedParent)});
  if(classKey==='healer'&&skill.nr===197) for(const number of [64,60]) requirements.push({number,level:predecessorRank(number)});
  if(classKey==='ritualist') for(const number of ({48:[120,110],181:[44]}[skill.nr]??[])) requirements.push({number,level:predecessorRank(number)});
  if(classKey==='villian'&&skill.nr===113) for(const number of [189,243]) requirements.push({number,level:predecessorRank(number)});
  if(classKey==='knight'&&skill.nr===59) for(const number of [28,141]) requirements.push({number,level:predecessorRank(number)});
  if(classKey==='herbalist'&&skill.nr===112) requirements.push({number:57,level:10},{number:81,level:1});
  let branch='general';
  if(skill.nr>=133&&skill.nr<=138) branch='taming';
  else if([150,226,237,244].includes(skill.nr)) branch='companion';
  else if([103,104,105,180,209,237,241].includes(skill.nr)) branch='souls';
  else if([48,110,178,214,235].includes(skill.nr)) branch='fire';
  else if([29,30,193].includes(skill.nr)) branch='water';
  else if([118,125,221,253].includes(skill.nr)) branch='wind';
  else if(skill.type==='passive') branch='training';
  return {requirements,furtherPrerequisiteLevel:classKey==='gladiator'&&skill.nr===77?predecessorRank(61):0,treeBranch:branch,definedLearningRanks:learnableSkillLevel(skill,classKey)??1};
}

// Quest keys are server-owned completion markers. No quest content is invented here.
export function discoveredSkill(skill, character) {
  if(skill.learnedLevel>0 || skill.raceCore) return true;
  const level=skill.minimumCharacterLevel;
  if(level<1) return false;
  if(level<=10) return true;
  const completed=new Set(character.completedSkillQuests??[]);
  if((character.level??1)<10 || !completed.has('foundation')) return false;
  if(level<=40) return true;
  if((character.level??1)<40 || !completed.has('specialization')) return false;
  if(level===42) return true;
  return (character.level??1)>=level;
}
