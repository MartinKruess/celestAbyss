import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read=path=>JSON.parse(fs.readFileSync(new URL('../'+path,import.meta.url),'utf8'));
const audit=read('data/balancing/skill-description-audit.json');
const before=read(audit.backup+'/local-catalog.json');
const after=read('data/skills.json');
const tamingDecision=read('data/balancing/taming-multiplier-decision.json');
const mechanics=skill=>{
  const value=structuredClone(skill);
  delete value.description_de;
  delete value.description_eng;
  delete value.__v;
  return value;
};

test('audited text corrections preserve mechanics and identifiers of the corrected skills',()=>{
  assert.equal(after.length,before.length);
  for(const update of audit.updates){
    const skill=after.find(s=>s.nr===update.nr);
    const expected=update.nr===133?tamingDecision.skill:before.find(s=>s.nr===update.nr);
    assert.deepEqual(mechanics(skill),mechanics(expected));
    assert.equal(skill.description_de,update.nr===133?tamingDecision.skill.description_de:update.after.description_de);
    assert.equal(skill.description_eng,update.nr===133?tamingDecision.skill.description_eng:update.after.description_eng);
  }
});

test('known obsolete cost and damage-channel claims are removed',()=>{
  const get=nr=>after.find(s=>s.nr===nr);
  assert.ok(!get(117).description_de.includes('Der physische Grundschaden'));
  assert.ok(!get(240).description_de.includes('kein zusätzlicher einmaliger Aktivierungspreis'));
  assert.ok(!get(240).description_eng.includes('Cast time zero'));
  for(const [nr,oldText]of [[163,'133 +62'],[175,'39 plus 16'],[242,'27 Mana auf Stufe 1']])assert.ok(!get(nr).description_de.includes(oldText));
});
