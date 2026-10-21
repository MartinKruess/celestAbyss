import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const source=JSON.parse(await fs.readFile('tmp/recovered-data/Questsystem.ods.json','utf8'));
const sourceHash=createHash('sha256').update(await fs.readFile('data/source/Questsystem.ods')).digest('hex');assert.equal(sourceHash,source.sha256);
const sheet=source.tables.find(t=>t.name==='EQ_Stats'),ranked=JSON.parse(await fs.readFile('data/balancing/ranked-equipment.json','utf8'));
const colName=n=>{let s='';while(n){n--;s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26);}return s;};
const colNumber=s=>[...s].reduce((n,c)=>n*26+c.charCodeAt(0)-64,0);
const cells=new Map(sheet.rows.flatMap(r=>r.cells.map(c=>[colName(c.column)+r.row,{...c,row:r.row}])));
const numeric=c=>c?.value==null?null:Number(c.value),close=(a,b)=>Math.abs(a-b)<1e-6;
const formulaErrors=[],unsupported=[],computed=new Map();
function evaluate(address,stack=[]){
 if(computed.has(address))return computed.get(address);if(stack.includes(address))throw Error('Circular reference '+address);
 const cell=cells.get(address);if(!cell)throw Error('Missing reference '+address);if(!cell.formula)return numeric(cell);
 const expr=cell.formula.replace(/^of:=/,'').replace(/\s/g,'').replace(/\$/g,'');
 const tokens=expr.match(/\[\.[A-Z]+\d+\]|(?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?|[()+*/^-]/g)??[];
 if(tokens.join('')!==expr)throw Error('Unsupported formula '+address);
 let i=0;
 function atom(){const t=tokens[i++];if(t==='('){const v=sum();if(tokens[i++]!==')')throw Error('Parenthesis');return v;}if(t==='-')return -atom();if(t==='+')return atom();if(/^\[\./.test(t??''))return evaluate(t.slice(2,-1),[...stack,address]);if(t===undefined||!Number.isFinite(Number(t)))throw Error('Invalid atom');return Number(t);}
 function power(){let v=atom();if(tokens[i]==='^'){i++;v**=power();}return v;}
 function product(){let v=power();while(['*','/'].includes(tokens[i])){const op=tokens[i++],n=power();v=op==='*'?v*n:v/n;}return v;}
 function sum(){let v=product();while(['+','-'].includes(tokens[i])){const op=tokens[i++],n=product();v=op==='+'?v+n:v-n;}return v;}
 const result=sum();if(i!==tokens.length||!Number.isFinite(result))throw Error('Invalid result');computed.set(address,result);return result;
}
for(const [address,c]of cells)if(c.formula)try{const value=evaluate(address);if(!close(value,numeric(c)))formulaErrors.push({address,formula:c.formula,cached:numeric(c),calculated:value});}catch(error){unsupported.push({address,formula:c.formula,message:error.message});}
const aliases={Butcher:'Butcher / Destroyer',Gladiator:'Gladiator / Berserker',Tank:'Ritter / Tempelritter',Villain:'Schurke / Schattenkrieger',Bloodmage:'Ritualist / Blutmagier',Healer:'Heiler / Priester',Lightmage:'Luminet / Lichtmagier','Kräuterkundler':'Kräuterkundler / Witcher',Archer:'Jäger / Schütze',Shamane:'Schamane / Hochelfe',Druid:'Druide / Alchemist','Seelenjäger':'Nachtjäger / Seelenjäger',Adventure:'Abenteurer / Scout'};
const fields=[{key:'physicalDefense',name:'P-Abwehr',total:5,start:6},{key:'magicalDefense',name:'M-Abwehr',total:11,start:12},{key:'vitality',name:'Vitalität',total:17,start:18},{key:'wisdom',name:'Willenskraft',total:23,start:24}];
const slots=[{key:'r',name:'Rüstung/Brust',fraction:.34},{key:'h',name:'Helm',fraction:.2},{key:'g',name:'Handschuhe',fraction:.2},{key:'s',name:'Schuhe',fraction:.26}];
const rows=[],parts=[],sumErrors=[],distributionDifferences=[],referenceErrors=[],monotonicity=[],missing=[],comparisonDifferences=[],roundingDifferences=[];
let name;
for(const row of sheet.rows){
 const at=n=>row.cells.find(c=>c.column===n),label=at(1)?.text;if(label&&!/^R[1-6]$/.test(label))name=label;
 if(!/^R[1-6]$/.test(label??''))continue;
 const rank=Number(label.slice(1)),raw={health:numeric(at(2)),mana:numeric(at(3)),...Object.fromEntries(fields.map(f=>[f.key,numeric(at(f.total))]))};
 const entry={sourceClass:name,className:aliases[name]??name,rank,row:row.row,raw};rows.push(entry);
 const current=ranked.armor.find(a=>a.name===name&&a.rank===rank);for(const[k,v]of Object.entries(raw)){if(v===null||!Number.isFinite(v)||v<0)missing.push({name,rank,field:k,value:v});if(current?.raw[k]!==v)comparisonDifferences.push({name,rank,field:k,source:v,comparison:current?.raw[k]});}
 const slotRows=slots.map(slot=>({sourceClass:name,className:entry.className,rank,slot:slot.key,slotName:slot.name,allocation:slot.fraction,values:{},displayed:{},addresses:{}}));
 for(const f of fields){
  let sum=0,displaySum=0;
  for(let index=0;index<4;index++){
   const c=at(f.start+index),value=numeric(c),address=colName(f.start+index)+row.row,expected=raw[f.key]*slots[index].fraction;
   slotRows[index].values[f.key]=value;slotRows[index].displayed[f.key]=c?.text;slotRows[index].addresses[f.key]=address;
   if(value===null){missing.push({name,rank,field:f.key,address});continue;}sum+=value;displaySum+=Number(c.text);
   if(!close(value,expected))distributionDifferences.push({name,rank,slot:slots[index].name,field:f.name,address,actual:value,expected,difference:value-expected,formula:c.formula});
   if(c.formula){const expectedFormula=`of:=[.${colName(f.total)}${row.row}]*${slots[index].fraction}`;if(c.formula!==expectedFormula)referenceErrors.push({name,rank,address,actual:c.formula,expected:expectedFormula});}
  }
  if(!close(sum,raw[f.key]))sumErrors.push({name,rank,row:row.row,field:f.name,total:raw[f.key],sum,difference:sum-raw[f.key],relativePercent:100*(sum/raw[f.key]-1)});
  if(!close(displaySum,sum))roundingDifferences.push({name,rank,field:f.name,underlying:sum,displaySum,difference:displaySum-sum});
 }
 parts.push(...slotRows);
}
for(const className of new Set(rows.map(r=>r.sourceClass))){const series=rows.filter(r=>r.sourceClass===className);assert.deepEqual(series.map(r=>r.rank),[1,2,3,4,5,6]);for(let i=1;i<series.length;i++)for(const[k,value]of Object.entries(series[i].raw))if(value<series[i-1].raw[k])monotonicity.push({name:className,rank:series[i].rank,field:k,previous:series[i-1].raw[k],current:value});}
const growth=[];for(const className of new Set(rows.map(r=>r.sourceClass))){const series=rows.filter(r=>r.sourceClass===className);for(let i=1;i<series.length;i++)for(const field of ['physicalDefense','magicalDefense']){const ratio=series[i].raw[field]/series[i-1].raw[field];if(ratio>2)growth.push({name:className,rank:series[i].rank,field,from:series[i-1].raw[field],to:series[i].raw[field],ratio,status:'reviewOnlyNotProvenError'});}}
assert.equal(rows.length,78);assert.equal(parts.length,312);
const report={generatedAt:new Date().toISOString(),status:'readOnlyAuditNoGameChanges',source:'data/source/Questsystem.ods',sourceHash,sourceUnchanged:true,export:'tmp/recovered-data/Questsystem.ods.json',formulaCount:[...cells.values()].filter(c=>c.formula).length,evaluatedFormulaCount:computed.size,databaseArmorItemsPresent:false,databaseEvidence:'Current items category/type aggregation contains no armor or armor slots; no separate armor collection exists. These are spreadsheet definitions, not imported item records.',slotInterpretation:'EQ_Stats labels are r/h/g/s only. Interpreted as armor/chest, helmet, gloves, shoes; formal slot definitions and per-item class restrictions are not yet stored. No pants column.',hpMana:'Direct HP and Mana are set-level only; no per-part allocation defined.',aliases,slots,rows,parts,formulaErrors,unsupported,distributionDifferences,referenceErrors,sumErrors,roundingDifferences,monotonicity,missing,comparisonDifferences,growth};
await fs.writeFile('data/balancing/armor-source-audit.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Number(n.toFixed(4)).toLocaleString('de-DE');
let md='# Rüstungen – Quellenprüfung und Einzelteil-Verteilung\n\nLesende Prüfung. Keine Spielwerte oder Originaldateien geändert. 13 Klassenreihen × 6 Ränge = 78 Gesamtzeilen und 312 abgeleitete Teilzeilen. Die aktuelle MongoDB enthält keine Rüstungsteile als Items; vorhanden sind die Werte der geretteten Tabelle EQ_Stats. Klassenbezug steht in der Quelle als Reihenüberschrift, nicht als Item-Beschränkung.\n\nVier Quellkürzel r/h/g/s, hier als Rüstung/Brust, Helm, Handschuhe und Schuhe interpretiert. Verteilung grundsätzlich 34/20/20/26 Prozent. Keine Hosenspalte. Direkte Lebens- und Mana-Boni sind nicht auf Einzelteile verteilt. Nachkommastellen sind die tatsächlich gespeicherten Werte; die Tabelle zeigt häufig gerundete Zahlen.\n\n';
md+=`Prüfumfang: ${computed.size} berechnete Formelzellen; ${formulaErrors.length} abweichende Formel-Caches; ${unsupported.length} nicht auswertbare Formeln; ${sumErrors.length} Abweichungen zwischen Teil-Summe und Gesamtwert; ${distributionDifferences.length} Teilwerte außerhalb der üblichen Verteilung; ${monotonicity.length} Rang-Abnahmen; ${comparisonDifferences.length} Unterschiede zu den aktuellen Vergleichs-Gesamtwerten.\n\n`;
md+='## Abweichende Summen der Einzelteile\n\n| Klasse | Rang | Wert | Gesamt laut Quelle | Summe der Teile | Differenz | Zellenzeile |\n| --- | ---: | --- | ---: | ---: | ---: | ---: |\n';for(const e of sumErrors)md+=`| ${aliases[e.name]??e.name} | ${e.rank} | ${e.field} | ${f(e.total)} | ${f(e.sum)} | ${f(e.difference)} | ${e.row} |\n`;
md+='\n## Abweichende Verteilungszellen\n\nErwartungswerte sind aus der durchgängigen 34/20/20/26-Prozent-Verteilung abgeleitet, keine bestätigten Korrekturen. Manuell gesetzte Werte können absichtliche Ausnahmen sein.\n\n| Klasse | Rang | Teil | Wert | Zelle | Gespeichert | Nach üblicher Verteilung | Formel |\n| --- | ---: | --- | --- | --- | ---: | ---: | --- |\n';for(const e of distributionDifferences)md+=`| ${e.name} | ${e.rank} | ${e.slot} | ${e.field} | ${e.address} | ${f(e.actual)} | ${f(e.expected)} | ${e.formula??'Manuell'} |\n`;
md+='\n## Größere Rang-Sprünge – zur Sichtprüfung\n\nMehr als eine Verdopplung ist kein nachgewiesener Rechenfehler.\n\n| Klasse | Rangwechsel | Wert | Vorher | Nachher | Faktor |\n| --- | --- | --- | ---: | ---: | ---: |\n';for(const e of growth)md+=`| ${e.name} | R${e.rank-1} → R${e.rank} | ${e.field} | ${e.from} | ${e.to} | ${f(e.ratio)} |\n`;
md+='\n## Alle Gesamtwerte\n\n| Klasse | Rang | Direkt HP | Direkt MP | P-Abwehr | M-Abwehr | Vitalität | Willenskraft |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';for(const r of rows)md+=`| ${r.className} | ${r.rank} | ${Object.values(r.raw).map(f).join(' | ')} |\n`;
md+='\n## Alle abgeleiteten Einzelteile\n\nNoch keine benannten Datenbank-Items. Leben und Mana bleiben ohne erfundene Slotzuweisung.\n\n| Klasse | Rang | Teil | P-Abwehr | M-Abwehr | Vitalität | Willenskraft |\n| --- | ---: | --- | ---: | ---: | ---: | ---: |\n';for(const p of parts)md+=`| ${p.className} | ${p.rank} | ${p.slotName} | ${fields.map(fld=>f(p.values[fld.key])).join(' | ')} |\n`;
await fs.writeFile('docs/balancing/armor-source-audit.md',md);
console.log(JSON.stringify({rows:rows.length,parts:parts.length,formulaErrors,unsupported,sumErrors,distributionDifferences,referenceErrors,monotonicity,comparisonDifferences,growth},null,2));
