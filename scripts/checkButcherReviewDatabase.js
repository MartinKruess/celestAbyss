import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
const f=v=>typeof v==='number'?Number(v.toFixed(6)).toLocaleString('de-DE'):String(v);
const esc=v=>String(v).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
function flatten(v,p='',out=[]){if(Array.isArray(v)){if(!v.length)out.push([p,'[]']);else v.forEach((x,i)=>flatten(x,`${p}[${i}]`,out));}else if(v&&typeof v==='object'){for(const[k,x]of Object.entries(v))flatten(x,p?p+'.'+k:k,out);}else out.push([p,v===null?'null':f(v)]);return out;}
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 const review=JSON.parse(await fs.readFile('data/balancing/butcher-skill-review.json','utf8'));
 const md=await fs.readFile('docs/balancing/classes/butcher-skills.md','utf8');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const database=await SkillDataModel.collection.find({nr:{$in:review.skillNumbers}}).toArray();if(database.length!==33)throw Error('Count mismatch');
 let fields=0;
 for(const stored of database){const s=JSON.parse(JSON.stringify(stored));delete s.__v;const local=review.skills.find(x=>x.nr===s.nr);if(!isDeepStrictEqual(s,local))throw Error('Review differs from database');
 const heading=`### ${s.nr}: ${s.skillName_de}`;const start=md.indexOf(heading);if(start<0)throw Error('Missing detail block');const end=md.indexOf('\n### ',start+heading.length);const block=md.slice(start,end<0?undefined:end);
 for(const[k,v]of flatten(s).filter(([k])=>k!=='_id')){const label=k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana')?'mana (Aktivierungskosten, kein Bonus)':k;if(!block.includes(`| ${esc(label)} | ${esc(v)} |`))throw Error('Markdown field differs: '+s.nr+' '+k);fields++;}}
 if(md.split('\n').some(line=>line.startsWith('|')&&line.includes('NaN')))throw Error('Invalid displayed number');
 console.log(`Verified all ${fields} displayed stored fields across all 33 Butcher skills directly against MongoDB; review JSON and Markdown match. No database writes.`);
}catch(e){console.error(`Butcher audit failed (${e.name}); credentials omitted.`);if(e.message.startsWith('Markdown field differs')||['Count mismatch','Review differs from database','Missing detail block','Invalid displayed number'].includes(e.message))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}
