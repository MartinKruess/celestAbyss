import {curveValue} from './skillProgression.js';

export function attributeConversionFactor(skill) {
 const conversion=skill?.attributeConversionBonus;
 return curveValue(conversion?.amountPerPointScaling,skill?.maxSkillLv)??conversion?.amountPerPoint??0;
}
