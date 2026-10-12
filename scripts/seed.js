import 'dotenv/config';
import mongoose from 'mongoose';
import { prepareSeed, insertOperations } from './seedData.js';

const args = process.argv.slice(2);
if (args.length !== 1 || !['--check', '--apply'].includes(args[0])) {
  console.error('Usage: node scripts/seed.js --check | --apply');
  process.exitCode = 1;
} else {
  const { groups, errors } = prepareSeed();
  for (const group of groups) console.log(`${group.model.modelName}: ${group.documents.length} templates`);
  if (errors.length) {
    errors.forEach(error => console.error(error));
    process.exitCode = 1;
  } else if (args[0] === '--check') {
    console.log('Validation successful. No database connection or writes.');
  } else {
    try {
      const uri = process.env.DB_MONGO_URL || process.env.MONGODB_URI;
      if (!uri) throw new Error('Missing configuration');
      const dbName = process.env.MONGODB_DB_NAME || 'celestabyss_dev';
      await mongoose.connect(uri, { dbName, serverSelectionTimeoutMS: 10000 });
      console.log(`Target database: ${mongoose.connection.name}`);
      for (const group of groups) {
        await group.model.init();
        const result = await group.model.bulkWrite(insertOperations(group), { ordered: true });
        console.log(`${group.model.modelName}: inserted ${result.upsertedCount}, already present ${result.matchedCount}`);
      }
    } catch {
      console.error('Import failed. Check configuration, access and database indexes. No credentials printed. A partial import can be retried.');
      process.exitCode = 1;
    } finally { await mongoose.disconnect(); }
  }
}
