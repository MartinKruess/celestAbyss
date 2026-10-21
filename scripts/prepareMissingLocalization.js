import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const confirmed=JSON.parse(await fs.readFile('data/localization/confirmed-item-texts.json','utf8'));
import {weaponGerman,otherGerman,creaturesGerman} from './localizationItemTranslations.js';
const source=JSON.parse(await fs.readFile('data/localization/source-audit.json','utf8'));
const blank=v=>typeof v!=='string'||!v.trim();
const pending=[],items={},classes={},patches=[];
const gems={Granat:['Garnet','Granat'],Saphir:['Sapphire','Saphir'],Amethyst:['Amethyst','Amethyst'],Jade:['Jade','Jade'],Achat:['Agate','Achat'],Onyx:['Onyx','Onyx'],Turmalin:['Tourmaline','Turmalin'],Opal:['Opal','Opal'],Labradorit:['Labradorite','Labradorit'],Jaspis:['Jasper','Jaspis']};
const statGerman={vitality:'Vitalität',intelligence:'Intelligenz',wisdom:'Willenskraft',faith:'Faith',luck:'Glück',victim:'Victim',dexterity:'Geschick',ambush:'Ambush',strength:'Stärke',agility:'Agilität'};
const conflicts={
 'Balanced Crossbow':'Als Bogen gespeichert, Name und Beschreibung bezeichnen eine Armbrust.',
 'Big Crusher':'Als Zweihandaxt gespeichert, Beschreibung bezeichnet einen Hammer.',
 'Lightbreaker':'Als Dolch gespeichert, Beschreibung bezeichnet ein Schwert.',
 'Anguish of Peaceful Mind':'Als Streitkolben gespeichert, Beschreibung bezeichnet eine Klinge.',
 'Scepter of Lunar Eclipse':'Beschreibung ist identisch mit Wand of Rejuvenation; Bezug zur Mondfinsternis fehlt.',
 'Soulstealer':'Als Zauberstab gespeichert, Beschreibung spricht ausdrücklich von einer Klinge.',
 'Rod of Divine Light':'Englische Beschreibung beginnt abgeschnitten mit „d evil wherever it shone“.',
 'Skeleton Guard':'Kartenname Skelettwache, Beschreibung nennt Cernunos.',
 'Salamander Ignes':'Name lautet Ignes, Beschreibung nennt Ignis; gewünschte Eigennamenschreibweise unklar.',
};
for(const item of source.items){
 const candidate={name_eng:item.name==='Soulstealer'?'Soulreaver':item.name},de=weaponGerman[item.name]??otherGerman[item.name];
 let descriptionDe=de?.[1],nameDe=de?.[0];
 if(item.category==='upgrade'){
  const parts=item.name.match(/^(Splinter|Fragment|Refined Fragment|Ignoble|Refined|Blessed) (.+)$/);assert.ok(parts,item.name);
  const [,prefix,stone]=parts,[en,deStone]=gems[stone];
  candidate.name_eng=prefix+' '+en;
  const stem=stone==='Jade'?'Jade':deStone;
  nameDe=prefix==='Splinter'?stem+'splitter':prefix==='Fragment'?stem+'fragment':prefix==='Refined Fragment'?'Veredeltes '+stem+'fragment':(prefix==='Ignoble'?(stone==='Jade'?'Unedle ':'Unedler '):prefix==='Refined'?(stone==='Jade'?'Veredelte ':'Veredelter '):(stone==='Jade'?'Gesegnete ':'Gesegneter '))+deStone;
  const match=item.description.match(/^Increases (\w+) by \+(\d+)\.$/i);assert.ok(match,item.name);
  descriptionDe=`Erhöht ${statGerman[match[1].toLowerCase()]} um ${match[2]}.`;
  if(stone==='Opal')conflicts[item.name]='Beschreibung nennt Geschick, gespeichertes Attribut ist Agilität.';
  if(item.name==='Refined Jaspis')conflicts[item.name]='Beschreibung nennt +30 Stärke, gespeichert sind +20.';
 }else if(gems[item.name])candidate.name_eng=gems[item.name][0];
 if(item.category==='Emptycard'){
  nameDe=creaturesGerman[item.name];
  if(item.name==='Imp')nameDe='Imp';
  const grade=item.type==='Common'?'gewöhnliche':item.type==='Uncommon'?'ungewöhnliche':null;
  // Existing English wording identifies the rarity when the legacy type is not informative.
  const rarity=grade??(item.description.includes('ordinary blank')?'gewöhnliche':item.description.includes('unusual blank')?'ungewöhnliche':null);
  if(nameDe&&rarity)descriptionDe=`Eine ${rarity} leere Karte, mit der du die Kreatur „${nameDe}“ zähmen kannst.`;
 }
 if(item.name==='The Huntress of the Shaddow')descriptionDe='Eine legendäre Armbrust, geführt von einer schwer zu fassenden, tödlichen Jägerin, die durch die Schatten streift. Aus feinstem Ebenholz gefertigt und mit dunkler Magie durchdrungen, versetzt sie ihre Beute in Angst und Schrecken.';
 if(item.name==='Rage of the Minotaur')descriptionDe="Ein gewaltiger Zweihandstreitkolben, in dem der unbändige Zorn des Minotaurus fortlebt. Seine Schläge fallen mit der Wucht einer Bestie und zerschmettern selbst standhafte Gegner. Man sagt, wer ihn führt, spüre vor jedem Hieb das ferne Beben donnernder Hufe – und einen Zorn, der sich niemals bezwingen lässt.";
 if(item.name==='Weidenbaum')candidate.name_eng='Willow Tree';
 if(item.name==='Glimmer of Hope')descriptionDe='Ein Zeichen der Hoffnung in den dunkelsten Zeiten. Sein Licht durchdringt die Verzweiflung und geleitet verlorene Seelen in Sicherheit. Von Heilern und Hütern des Lichts getragen, spendet er Bedürftigen Trost und Schutz.';
 if(confirmed[item.name]?.name_de)nameDe=confirmed[item.name].name_de;
 if(nameDe)candidate.name_de=nameDe;
 else pending.push({kind:'item',name:item.name,fields:['name_de'],reason:item.name==='Rayans Deracles'?'Eigennamen Rayan/Deracles und beabsichtigte Schreibweise ungeklärt.':'Deutsche Kreaturenbezeichnung nicht eindeutig festgelegt.'});
 if(confirmed[item.name]?.description_de){descriptionDe=confirmed[item.name].description_de;delete conflicts[item.name];}
 if(conflicts[item.name])pending.push({kind:'item',name:item.name,fields:['description_de','description_eng'],reason:conflicts[item.name]});
 else if(blank(item.description))pending.push({kind:'item',name:item.name,fields:['description_de','description_eng'],reason:'Keine Ausgangsbeschreibung vorhanden; keine neuen Eigenschaften oder Hintergrundgeschichte erfunden.'});
 else{
  candidate.description_eng=item.description;
  if(item.name==='Rage of the Minotaur')candidate.description_eng="A mighty two-handed mace in which the untamed rage of the minotaur lives on. Its blows strike with the force of a rampaging beast, shattering even the most steadfast foes. It is said that those who wield it feel the distant tremor of thundering hooves before every strike—and a fury that can never be tamed.";
  if(item.name==='The Huntress of the Shaddow')candidate.description_eng='A legendary crossbow wielded by the elusive and deadly huntress who stalks the shadows. Crafted from the finest ebony wood and imbued with dark magic, it strikes fear into the hearts of her prey.';
  if(item.name==='Glimmer of Hope')candidate.description_eng='A symbol of hope in the darkest of times. Its light pierces through despair and guides lost souls to safety. Carried by healers and guardians of the light, it offers comfort and protection to those in need.';
  assert.ok(descriptionDe,item.name+' missing German description');candidate.description_de=descriptionDe;
 }
 Object.assign(candidate,confirmed[item.name]??{});
 const set=Object.fromEntries(Object.entries(candidate).filter(([key,value])=>!blank(value)&&blank(item[key])));
 if(Object.keys(set).length){items[item.name]=set;patches.push({collection:'items',id:item._id,key:item.name,set});}
}
const classNames={
 villian:{displayName_de:'Schurke',displayName_eng:'Rogue',advancementName_de:'Schattenklinge',advancementName_eng:'Shadowreaper'},
 summoner:{displayName_de:'Schattenjäger',displayName_eng:'Shadow Hunter',advancementName_de:'Seelenjäger',advancementName_eng:'Soulseeker'},
 gladiator:{displayName_de:'Gladiator',displayName_eng:'Gladiator',advancementName_de:'Berserker',advancementName_eng:'Berserker'},
 herbalist:{displayName_de:'Kräuterkundler',displayName_eng:'Herbalist',advancementName_de:'Hexer',advancementName_eng:'Witcher'},
 adventurer:{displayName_de:'Abenteurer',displayName_eng:'Adventurer',advancementName_de:'Späher',advancementName_eng:'Scout'},
 butcher:{displayName_de:'Schlächter',displayName_eng:'Butcher',advancementName_de:'Zerstörer',advancementName_eng:'Destroyer'},
 druid:{displayName_de:'Druide',displayName_eng:'Druid',advancementName_de:'Erzdruide',advancementName_eng:'Archdruid'},
 healer:{displayName_de:'Heiler-Adept',displayName_eng:'Healer Adept',advancementName_de:'Erzbischof',advancementName_eng:'Archbishop'},
 shaman:{displayName_de:'Schamane',displayName_eng:'Shaman',advancementName_de:'Hochelfe',advancementName_eng:'High Elf'},
 luminet:{displayName_de:'Luminet',displayName_eng:'Luminet',advancementName_de:'Lichtmagier',advancementName_eng:'Light Mage'},
 knight:{displayName_de:'Ritter',displayName_eng:'Knight',advancementName_de:'Tempelritter',advancementName_eng:'Templar'},
 hunter:{displayName_de:'Jäger',displayName_eng:'Hunter',advancementName_de:'Schütze',advancementName_eng:'Archer'},
 ritualist:{displayName_de:'Ritualist',displayName_eng:'Ritualist',advancementName_de:'Blutmagier',advancementName_eng:'Blood Mage'},
};
for(const c of source.classes){
 const names=classNames[c.key];
 if(!names){pending.push({kind:'class',name:c.key,fields:['displayName_de','displayName_eng','advancementName_de','advancementName_eng'],reason:c.key==='villian'?'Vorlage Villian/Schattenkrieger, aktuelle Balancebezeichnung Schurke; gewünschte Basis- und Folgeklassennamen unklar.':'Vorlage Beschwörer/Seelenjäger, aktuelle Balancebezeichnung Nachtjäger/Seelenjäger; gewünschte Basis- und Folgeklassennamen unklar.'});continue;}
 const set=Object.fromEntries(Object.entries(names).filter(([key])=>blank(c[key])));
 if(Object.keys(set).length){classes[c.key]=set;patches.push({collection:'classTemplates',id:c._id,key:c.key,set});}
}
const skillGaps=source.skills.flatMap(s=>['skillName_de','skillName_eng','description_de','description_eng'].filter(k=>blank(s[k])).map(field=>({nr:s.nr,field})));
assert.deepEqual(skillGaps,[]);
await fs.writeFile('data/localization/item-missing-translations.json',JSON.stringify(items,null,2)+'\n');
await fs.writeFile('data/localization/class-missing-translations.json',JSON.stringify(classes,null,2)+'\n');
await fs.writeFile('data/localization/missing-language-plan.json',JSON.stringify({sourceReadAt:source.readAt,scope:'Fill missing language fields only; preserve legacy text, names, IDs, stats and mechanics',skillsChecked:source.skills.length,skillGaps,patches,pending},null,2)+'\n');
console.log(JSON.stringify({items:Object.keys(items).length,classes:Object.keys(classes).length,newFields:patches.reduce((sum,p)=>sum+Object.keys(p.set).length,0),pending:pending.length}));
