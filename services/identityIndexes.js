import { UserDataModel } from '../models/userSchema.js';
import { CharDataModel } from '../models/characterSchema.js';

export const identityIndexTargets = [
  { model: UserDataModel, fields: ['username', 'email'] },
  { model: CharDataModel, fields: ['charName'] },
];
export async function inspectIdentityIndexes(targets = identityIndexTargets) {
  const report = [];
  for (const { model, fields } of targets) {
    let indexes;
    try { indexes = await model.collection.listIndexes().toArray(); }
    catch (error) { if (error.code !== 26) throw error; indexes = []; }
    for (const field of fields) {
      const duplicates = await model.collection.aggregate([
        { $group: { _id: `$${field}`, count: { $sum: 1 } } },
        { $match: { count: { $gt: 1 } } }, { $count: 'groups' },
      ]).toArray();
      report.push({ collection: model.collection.collectionName, field,
        duplicateGroups: duplicates[0]?.groups ?? 0,
        unique: indexes.some(index => index.unique === true && !index.sparse && !index.partialFilterExpression
          && Object.keys(index.key).length === 1 && index.key[field] === 1) });
    }
  }
  return report;
}
export async function ensureIdentityIndexes(targets = identityIndexTargets) {
  // Create declarations already present in the schemas. Never drop/rebuild indexes or alter account data.
  for (const { model } of targets) await model.createIndexes();
  for (const { model, fields } of targets) {
    const indexes = await model.collection.listIndexes().toArray();
    if (fields.some(field => !indexes.some(index => index.unique === true && !index.sparse && !index.partialFilterExpression
      && Object.keys(index.key).length === 1 && index.key[field] === 1))) throw new Error('IDENTITY_UNIQUE_INDEX_MISSING');
  }
}
