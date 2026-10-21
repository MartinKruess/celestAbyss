import {isSelfBuff} from './skillClassification.js';
export function usesFixedSelfBuffCast(skill){
 return Boolean(skill.charClass?.length)&&(isSelfBuff(skill)&&skill.nr!==158);
}
export function selfBuffManaCurve(){return {type:'linear',base:50,perLevel:13};}
