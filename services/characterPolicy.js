export const classRaces = Object.freeze({
  Druide: 'Aurora', Healer: 'Aurora', Luminet: 'Aurora', Shamane: 'Aurora',
  Butcher: 'Umbra', Ritualist: 'Umbra', Summoner: 'Umbra', Villian: 'Umbra',
  Gladiator: 'Human', Herbalist: 'Human', Knife: 'Human', Hunter: 'Human',
});
export function characterRace(charClass) {
  if (!Object.hasOwn(classRaces, charClass)) {
    const error = new Error('INVALID_CLASS'); error.status = 400; throw error;
  }
  return classRaces[charClass];
}
export function characterError(code, status) {
  const error = new Error(code); error.status = status; return error;
}
