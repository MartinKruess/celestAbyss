import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const db=mongoose.connection.db;
 const [items,skills,classes,creatures]=await Promise.all(['items','skills','classTemplates','creatures'].map(n=>db.collection(n).find({}).toArray()));
 await fs.mkdir('data/localization',{recursive:true});
 await fs.writeFile('data/localization/source-audit.json',JSON.stringify({readAt:new Date().toISOString(),items,skills,classes,creatures},null,2)+'\n');
 console.log(JSON.stringify({items:items.length,skills:skills.length,classes:classes.length,creatures:creatures.map(c=>({name:c.name,description:c.description}))}));
}catch(error){console.error('Localization audit failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
