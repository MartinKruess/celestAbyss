import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [items,equipment,skills,pre]=await Promise.all(['tmp/weapon-review-items.json','data/balancing/ranked-equipment.json','data/skills.json','data/balancing/shaman-precombat.json'].map(read));
const dir='data/balancing/history/before-shaman-comparison-'+Date.now();await fs.mkdir(dir,{recursive:true});
for(const p of ['data/balancing/ranked-equipment.json','data/balancing/shaman-precombat.json','data/balancing/class-comparison-level60.json','data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md'])await fs.copyFile(p,dir+'/'+p.split('/').at(-1));
const labels={pang:'P.Ang',mang:'M.Ang',strength:'Stärke',int:'Intelligence',speed:'ATK Speed'};
for(const item of items.filter(i=>i.type==='Mace')){
const index=equipment.weapons.findIndex(w=>w.name==='Mace'&&w.rank===item.rang);assert.ok(index>=0);
equipment.weapons[index]={...equipment.weapons[index],itemName:item.name,source:'MongoDB current confirmed mace values',raw:Object.entries(item.attributes).filter(([k])=>labels[k]).map(([k,value])=>({label:labels[k],value}))};
}
const training=skills.find(s=>s.skillName_eng==='Dual Mace Training'),passive=skills.find(s=>s.skillName_eng==='Wisdom of the Salamander');assert.ok(training&&passive);
const archdruid=skills.find(s=>s.skillName_eng==='Wisdom of the Archdruid');
for(const variant of pre.variants)variant.includedSkills=[1,33,44,training.nr,139,144,201,passive.nr,...(archdruid?[archdruid.nr]:[])];
await fs.writeFile('data/balancing/ranked-equipment.json',JSON.stringify(equipment,null,2)+'\n');
await fs.writeFile('data/balancing/shaman-precombat.json',JSON.stringify(pre,null,2)+'\n');
console.log('Prepared Shaman dual Mace comparison inputs; backup '+dir);
