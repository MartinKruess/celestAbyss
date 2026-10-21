import 'dotenv/config';
import mongoose from 'mongoose';
try {
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName:process.env.MONGODB_DB_NAME, autoIndex:false, serverSelectionTimeoutMS:10000 });
  const collections=await mongoose.connection.db.listCollections({}, {nameOnly:true}).toArray();
  console.log('Collections:',collections.map(x=>x.name).join(', '));
  const items=await mongoose.connection.db.collection('items').find({}).project({name:1,rang:1,type:1,category:1,attributes:1}).toArray();
  console.log(JSON.stringify(items.filter(x=>/axe|shield|gladi|butcher|chest|knight|axt|schild/i.test(x.name)),null,2));
} catch(error) { console.error(`Equipment inspection failed (${error.name}); credentials omitted.`);process.exitCode=1; }
finally {await mongoose.disconnect();}
