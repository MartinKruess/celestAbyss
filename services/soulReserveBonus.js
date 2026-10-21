export function soulReserveAttackBonus(skill,storedSouls){
 const settings=skill?.soulReserveBonusSettings;
 if(settings?.stat!=='matk')return 0;
 const souls=Math.max(0,storedSouls);
 const amount=settings.fragmentsPerBonusStep>0
  ?Math.floor(souls/settings.fragmentsPerBonusStep)*(settings.bonusPerFullStep??0)
  :souls*(settings.bonusPerStoredFragment??0);
 return Math.min(settings.maximumBonus??Infinity,amount);
}
