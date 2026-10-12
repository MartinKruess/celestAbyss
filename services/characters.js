import mongoose from 'mongoose';
import { CharDataModel } from '../models/characterSchema.js';
import { InventoryModel } from '../models/inventorySchema.js';
import { SkillDataModel } from '../models/skillSchema.js';
import { UserDataModel } from '../models/userSchema.js';
import '../models/itemSchema.js';
import '../models/creatureSchema.js';
import { characterRace, characterError } from './characterPolicy.js';

export function createCharacterService({ users = UserDataModel, characters = CharDataModel,
  inventories = InventoryModel, skills = SkillDataModel, startSession = () => mongoose.startSession(),
  newID = () => new mongoose.Types.ObjectId() } = {}) {
  const transaction = async work => {
    const session = await startSession();
    try { return await session.withTransaction(() => work(session)); }
    finally { await session.endSession(); }
  };
  return {
    create: async ({ accountID, charName, class: charClass }) => {
      const race = characterRace(charClass);
      return transaction(async session => {
        const characterID = newID(), inventoryID = newID();
        // Serialize creations through the account document and check the limit atomically.
        const reserved = await users.findOneAndUpdate({
          _id: accountID, isBanned: false,
          $expr: { $lt: [{ $size: { $ifNull: ['$characters', []] } }, '$maxChars'] },
        }, { $push: { characters: characterID } }, { session, new: true });
        if (!reserved) throw characterError('CHARACTER_LIMIT_OR_ACCOUNT_UNAVAILABLE', 409);
        const templates = await skills.find({ charClass }).session(session);
        await characters.create([{ _id: characterID, accountID, charName, class: charClass,
          race, inventory: [inventoryID], skills: templates.map(skill => skill._id) }], { session });
        await inventories.create([{ _id: inventoryID, characterID, items: [] }], { session });
        return String(characterID);
      });
    },
    remove: async ({ accountID, characterID }) => transaction(async session => {
      const result = await characters.deleteOne({ _id: characterID, accountID }, { session });
      if (!result.deletedCount) throw characterError('CHARACTER_NOT_FOUND', 404);
      await inventories.deleteMany({ characterID }, { session });
      const account = await users.updateOne({ _id: accountID }, { $pull: { characters: characterID } }, { session });
      if (!account.matchedCount) throw characterError('ACCOUNT_NOT_FOUND', 404);
    }),
    get: ({ accountID, characterID }) => characters.findOne({ _id: characterID, accountID })
      .populate({ path: 'inventory', populate: { path: 'items.itemID' } })
      .populate('skills'),
    account: accountID => users.findById(accountID).select('_id username language maxChars characters').populate('characters'),
  };
}
export const characterService = createCharacterService();
