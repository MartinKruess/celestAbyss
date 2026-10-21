// Canonical skill purpose and damage kind are independent. Legacy catalog
// records remain readable while the reviewed database migration is pending.
export const SKILL_TYPES = ['skill', 'passive', 'selfBuff', 'buff'];
export const DAMAGE_TYPES = ['physical', 'magical', 'mixed'];

function legacyClassification(skill) {
 const old=skill.dmgType??skill.S_DMG_Type;
 if(old==='passive')return {type:'passive'};
 if(old==='Movement')return {type:'buff',effectKind:'movement',target:'self'};
 if(old==='selfbuff'||skill.nr===34)return {type:'selfBuff',target:'self'};
 if(old==='buff')return {type:'buff',target:skill.nr===150?'companions':'group'};
 if(old!==undefined&&!['spell','physical','Physicas','phyical','heal'].includes(old))throw new Error('Unknown skill classification: '+skill.nr+' / '+old);
 const has=key=>Boolean(skill[key]||skill.statScaling?.[key]);
 let physical=has('patk'),magical=has('matk');
 for(const effect of skill.effects??[])if(effect.type==='periodicDamage'){
  physical ||= effect.damageTypes?.includes('physical')??false;
  magical ||= effect.damageTypes?.includes('magical')??false;
 }
 const damageType=physical&&magical?'mixed':physical?'physical':magical?'magical':undefined;
 return {type:'skill',...(damageType?{damageType}:{})};
}

export function skillClassification(skill) {
 if(!skill)return {};
 if(skill.type!==undefined){
  if(!SKILL_TYPES.includes(skill.type))throw new Error('Invalid skill type: '+skill.type);
  if(skill.damageType!==undefined&&!DAMAGE_TYPES.includes(skill.damageType))throw new Error('Invalid damage type: '+skill.damageType);
  return {type:skill.type,...(skill.damageType?{damageType:skill.damageType}:{}),...(skill.effectKind?{effectKind:skill.effectKind}:{}),...(skill.target?{target:skill.target}:{})};
 }
 return legacyClassification(skill);
}

export function withSkillClassification(skill){return {...skill,...skillClassification(skill),classificationVersion:1};}
export const isPassiveSkill=s=>skillClassification(s).type==='passive';
export const isSelfBuff=s=>skillClassification(s).type==='selfBuff';
export const isMovementSkill=s=>skillClassification(s).effectKind==='movement';
export const isGroupBuff=s=>{const c=skillClassification(s);return c.type==='buff'&&c.target!=='self'&&c.effectKind!=='movement';};
export const isAttackSkill=s=>{const c=skillClassification(s);return c.type==='skill'&&Boolean(c.damageType);};

// Adapter for historical report layouts, never used to choose attack scaling.
export function legacySkillType(skill){
 const c=skillClassification(skill);
 if(c.type==='passive')return 'passive';
 if(c.type==='selfBuff')return 'selfbuff';
 if(c.effectKind==='movement')return 'Movement';
 if(c.type==='buff')return 'buff';
 if(c.damageType==='physical')return 'physical';
 if(c.damageType==='mixed'&&['physical','Physicas','phyical'].includes(skill.dmgType))return 'physical';
 if(skill.dmgType==='heal')return 'heal';
 return 'spell';
}

export function skillClassificationLabel(skill){
 const c=skillClassification(skill);
 if(c.effectKind==='movement')return 'Buff / Bewegung (selbst)';
 if(c.type==='passive')return 'Passive';
 if(c.type==='selfBuff')return 'Selbstbuff';
 if(c.type==='buff')return c.target==='companions'?'Buff / Begleiter':'Buff';
 return 'Skill'+(c.damageType?' / '+{physical:'physisch',magical:'magisch',mixed:'gemischt'}[c.damageType]:'');
}
