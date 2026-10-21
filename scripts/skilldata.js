// Generated compatibility view. Edit data/skills.json or export the reviewed database catalog.
import catalog from '../data/skills.json' with { type: 'json' };
const numericFields = {patk:'PAttack',matk:'MAttack',cd:'CD',dur:'Duration',mana:'Mana',health:'Health',agi:'Agi',amb:'Amb',block:'Block',dex:'Dex',faith:'Faith',int:'Int',luck:'Luck',str:'Str',vic:'Vic',vita:'Vita',wis:'Wis',pdef:'PDefense',mdef:'MDefense',atkSpeed:'ATK_Speed',movementSpeed:'MovementSpeed',manaRegen:'ManaRegen'};
export const skills = catalog.map(record => ({
  ...record, catalogRecord: record,
  S_Name_de: record.skillName_de, S_Name_eng: record.skillName_eng,
  CharClass: record.charClass, S_Max_Lv: record.maxSkillLv, S_DMG_Type: record.dmgType,
  S_Description_de: record.description_de, S_Description_eng: record.description_eng,
  ...Object.fromEntries(Object.entries(numericFields).map(([key,suffix]) => ['S_'+suffix,record[key] ?? 0])),
}));
