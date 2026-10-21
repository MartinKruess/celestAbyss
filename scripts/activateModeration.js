import 'dotenv/config';
import mongoose from 'mongoose';
import { ModerationRuleModel } from '../models/moderationRuleSchema.js';
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000 });
  const result = await ModerationRuleModel.updateMany({ status: 'agreed', active: false },
    { $set: { active: true, scope: 'global' }, $inc: { version: 1 } });
  console.log(`Activated ${result.modifiedCount} agreed rules; pending drafts remain inactive.`);
  console.log('Active rules:', await ModerationRuleModel.countDocuments({ active: true, status: 'agreed' }));
} catch (error) { console.error(`Activation failed (${error.name}); no credentials printed.`); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
