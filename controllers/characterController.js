import { characterService } from '../services/characters.js';
import { classRaces } from '../services/characterPolicy.js';

export function createCharacterControllers(service = characterService) {
  const failure = (error, res) => res.status(error.code === 11000 ? 409 : error.status || 500)
    .json({ error: error.code === 11000 ? 'CHARACTER_NAME_EXISTS' : error.status ? error.message : 'CHARACTER_OPERATION_FAILED' });
  return {
    list: async (req, res) => {
      try {
        return res.json({ characters: await service.list({ accountID: req.auth.accountID }), classes: Object.keys(classRaces) });
      } catch (error) { return failure(error, res); }
    },
    get: async (req, res) => {
      try {
        const character = await service.get({ accountID: req.auth.accountID, characterID: req.params.id });
        return character ? res.json(character) : res.status(404).json({ error: 'CHARACTER_NOT_FOUND' });
      } catch (error) { return failure(error, res); }
    },
    create: async (req, res) => {
      try {
        const characterID = await service.create({ accountID: req.auth.accountID, charName: req.body.charName, class: req.body.class });
        return res.status(201).json({ characterID, userData: await service.account(req.auth.accountID) });
      } catch (error) { return failure(error, res); }
    },
    remove: async (req, res) => {
      try {
        await service.remove({ accountID: req.auth.accountID, characterID: req.params.id });
        return res.json({ userData: await service.account(req.auth.accountID) });
      } catch (error) { return failure(error, res); }
    },
  };
}
const controllers = createCharacterControllers();
export const listCharacters = controllers.list;
export const getCharData = controllers.get;
export const newCharData = controllers.create;
export const deleteCharacter = controllers.remove;
