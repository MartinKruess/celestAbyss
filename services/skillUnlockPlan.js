export function skillUnlockUpdates(catalog, plan) {
  const updates = new Map();
  const skill = nr => {
    if (!updates.has(nr)) {
      const found = catalog.find(s => s.nr === nr);
      if (!found) throw new Error(`Missing skill ${nr}`);
      updates.set(nr, structuredClone(found));
    }
    return updates.get(nr);
  };
  for (const [nr, level] of Object.entries(plan.sharedFirstUnlocks)) {
    const s = skill(Number(nr));
    s.learningRequirements = {...s.learningRequirements, minimumCharacterLevel: level, status: 'defined', furtherSkillLevelsStatus: s.learningRequirements?.furtherSkillLevelsStatus ?? 'pending'};
    // A newly agreed shared level replaces former class-specific exceptions.
    delete s.learningRequirements.classOverrides;
  }
  for (const [className, first] of Object.entries(plan.classFirstAttacks)) {
    if (!first) continue;
    const key = className === 'rogue' ? 'villian' : className;
    const s = skill(first.nr);
    if (plan.sharedFirstUnlocks[String(first.nr)] === first.level) continue;
    s.learningRequirements = {...s.learningRequirements, status: 'defined', furtherSkillLevelsStatus: s.learningRequirements?.furtherSkillLevelsStatus ?? 'pending', classOverrides: {...s.learningRequirements?.classOverrides, [key]: first.level}};
  }
  for (const old of plan.replacedFirstAttacks ?? []) {
    if (plan.classFirstAttacks[old.classKey]?.nr === old.nr) continue;
    const s = skill(old.nr);
    if (s.learningRequirements?.classOverrides?.[old.classKey] === old.previousLevel) {
      delete s.learningRequirements.classOverrides[old.classKey];
      if (!Object.keys(s.learningRequirements.classOverrides).length) delete s.learningRequirements.classOverrides;
    }
  }
  for (const [nr, withdrawnLevel] of Object.entries(plan.withdrawnFirstUnlocks ?? {})) {
    if (Object.hasOwn(plan.sharedFirstUnlocks,nr)) continue;
    const s = skill(Number(nr));
    if (s.learningRequirements?.minimumCharacterLevel === withdrawnLevel) delete s.learningRequirements.minimumCharacterLevel;
  }
  // Control's prose contains an explicit first-unlock level as well.
  const control = updates.get(135);
  if (control) {
    control.description_de = control.description_de.replace(/Freischaltung ab Charakterlevel \d+\./g, `Freischaltung ab Charakterlevel ${plan.sharedFirstUnlocks['135']}.`);
    control.description_eng = control.description_eng.replace(/Unlocks at character level \d+\./g, `Unlocks at character level ${plan.sharedFirstUnlocks['135']}.`);
  }
  return [...updates.values()];
}
