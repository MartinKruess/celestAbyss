import { resolveSkillAtLevel } from './skillLevel.js';
import { curveValue } from './skillProgression.js';
import { learnableSkillLevel } from './skillLearningLimits.js';

// Presentation only. These strings never change combat definitions or formulas.
const summaries = {
  1:'Die innere Kraft der Aurora stärkt dauerhaft deine Intelligenz und Willenskraft und verbessert deine Manaregeneration.',
  2:'Deine Überlebenskraft stärkt dauerhaft deine Attribute und deine natürliche Regeneration.',
  5:'Deine Anpassungsfähigkeit stärkt dauerhaft Vitalität, Willenskraft und deine natürliche Regeneration.',
  6:'Eigene Angriffe können vorübergehend deine Stärke erhöhen.',
  10:'Schärft dauerhaft deine Geschicklichkeit und Agilität.',
  12:'Erhöht vorübergehend dein maximales Leben und deinen physischen Angriff.',
  13:'Verbraucht Wut für einen mächtigen physischen Angriff und stärkt dich anschließend.',
  14:'Weiche gegnerischen Angriffen mit einer schnellen Rolle aus.',
  17:'Ein blutiger Klingenangriff verletzt den Gegner und heilt dich abhängig vom verursachten Lebensschaden.',
  19:'Ein Schildangriff verletzt den Gegner und schwächt seine physische Verteidigung.',
  28:'Stärkt dauerhaft deine Vitalität und deinen Umgang mit dem Schild.',
  29:'Eine Eislanze durchbohrt das Ziel und schwächt kurzzeitig seine Rüstung.',
  31:'Ein elektrisches Bodenfeld verletzt und verlangsamt Gegner, solange sie darin stehen.',
  32:'Eigene Angriffe können deine Intelligenz erhöhen und die magische Verteidigung des Gegners schwächen.',
  33:'Erhöht dauerhaft deinen physischen und magischen Angriff.',
  34:'Ein Schild fängt Schaden ab und verstärkt während seiner Wirkung deine normalen Angriffe. Dabei wird fortlaufend Mana verbraucht.',
  35:'Entlädt Energie und trifft Gegner in deiner Nähe mit physischem Schaden.',
  37:'Ein entziehender Pfeil verletzt den Gegner und stellt dein Leben wieder her.',
  38:'Ein Erdbeben verletzt nahe Gegner mit physischem und magischem Schaden.',
  41:'Versorgt deine Verletzungen und stellt sofort Leben wieder her.',
  42:'Wenn du mit wenig Leben angreifst und Erwachen bereit ist, aktiviert sich ein Schutz. Er verringert vorübergehend erlittenen physischen und magischen Schaden.',
  43:'Schärft dauerhaft deine Sinne und stärkt Geschicklichkeit, Agilität, Vitalität und Willenskraft.',
  44:'Erweitert dauerhaft deine geistigen Fähigkeiten und stärkt Intelligenz, Willenskraft und Geschicklichkeit.',
  45:'Stärkt dauerhaft deinen Körper und erhöht Stärke, Vitalität und Willenskraft.',
  46:'Verfolgende Eisgeschosse verletzen den Gegner und können ihn einfrieren. Eingefrorene Gegner erleiden währenddessen weniger Schaden.',
  47:'Deine nächsten Pfeile lösen nach ihrem Einschlag zusätzliche Explosionen aus.',
  48:'Astrale Flammen umhüllen das Ziel und verletzen Gegner im Wirkungsbereich wiederholt.',
  52:'Erhöht dauerhaft dein Glück und deine kritische Trefferwertung.',
  54:'Verstärkt deine Eiszauber und lässt treffende Eisangriffe mit einer Chance Einfrieren und Gefrierbrand auslösen.',
  56:'Geladener Nebel verletzt Gegner, senkt ihre Genauigkeit und macht sie im Nebel anfälliger für Elektroangriffe.',
  57:'Ein gezielter Blitzschlag trifft einen Gegner mit magischem Schaden.',
  59:'Ein schützendes Schildabbild verringert den Schaden abgefangener Angriffe auf Verbündete hinter dir.',
  60:'Stärkt dauerhaft deine Intelligenz und Willenskraft.',
  66:'Ein gezielter Kopfschuss trifft einen Gegner mit garantiert kritischem Schaden.',
  67:'Verbessert dauerhaft deine Geschicklichkeit und Agilität und senkt deine Manakosten.',
  69:'Ein Kugelblitz trifft einen Gegner mit magischem Schaden.',
  70:'Ein Kunai-Angriff setzt einem Gegner zu und wird gegen stark geschwächte Ziele besonders gefährlich.',
  71:'Stellt einen Teil des maximalen Lebens eines Verbündeten oder Begleiters wieder her.',
  73:'Erhöht dauerhaft deine kritische Trefferwertung.',
  74:'Erhöht vorübergehend deine Intelligenz auf Kosten deiner Willenskraft.',
  75:'Stärkt die körperlichen Fähigkeiten deiner Gruppe und ihrer Begleiter.',
  77:'Bündelt deine Kraft zu einem mächtigen physischen Hieb gegen einen Gegner.',
  78:'Heilt dich und deine Gruppenmitglieder in deiner Nähe.',
  79:'Erhöht vorübergehend deinen magischen Angriff.',
  80:'Erhöht vorübergehend deine Laufgeschwindigkeit und Agilität.',
  81:'Stärkt dauerhaft deine Intelligenz und Vitalität.',
  82:'Eine schützende Aura erhöht deine physische und magische Verteidigung.',
  83:'Deine Angriffsskills opfern einen Teil deines maximalen Lebens und verursachen dafür mehr Schaden.',
  84:'Deine elektrischen Angriffe können den getroffenen Gegner paralysieren.',
  86:'Ein präziser Schuss trifft garantiert kritisch und verlangsamt den Gegner.',
  88:'Feuert mehrere Pfeilwellen auf den Gegner ab.',
  90:'Stürme aus der Tarnung auf einen Gegner zu und verletze ihn mit einem Dolchangriff. Der Angriff beendet deine Tarnung.',
  91:'Platziert während der Tarnung eine verborgene Falle, die einen Gegner verletzt und benommen macht. Das Platzieren deckt dich nicht auf.',
  92:'Greift aus der Tarnung an und macht dich kurz sichtbar. Anschließend kehrt eine noch laufende Tarnung zurück.',
  94:'Ein Schildstoß verletzt den Gegner und zieht seine Aufmerksamkeit auf dich.',
  98:'Eine Schockwelle verletzt nahe Gegner und heilt dich abhängig vom verursachten Schaden.',
  99:'Opfert einen Teil deines maximalen Lebens für einen Angriff gegen den Gegner.',
  100:'Opfert eigenes Leben und Mana, um die physische und magische Verteidigung eines Gegners zu schwächen.',
  101:'Ein gewaltiges Lichtschwert spießt den Gegner auf und verursacht magischen Schaden.',
  107:'Erhöht vorübergehend die physische und magische Verteidigung naher Verbündeter.',
  108:'Ein mit dir wanderndes Aurafeld heilt deine Gruppe in der Nähe.',
  109:'Entfesselt während Ausbruch der Wut einen Sturm gegen den Gegner.',
  110:'Ein zunächst ruhiges Feuerfeld verdichtet sich und verbrennt Gegner im Zielgebiet.',
  112:'Eine Gewitterwolke trifft wiederholt wechselnde Gegner in ihrem Wirkungsbereich mit Blitzschaden.',
  113:'Springt zwischen nahen Gegnern umher und trifft sie mit schnellen Klingenangriffen. Bei einem einzelnen Gegner treffen ihn alle Angriffe.',
  114:'Eigene Angriffe bei niedrigem Leben können deine Stärke und Verteidigung vorübergehend erhöhen.',
  115:'Eine schnelle Überschallklinge verletzt den Gegner und paralysiert ihn kurz.',
  116:'Stärkt dauerhaft deine Vitalität und deinen magischen Angriff und erhöht auf höheren Stufen dein Glück.',
  117:'Ein Himmelsstrahl trifft das Zielgebiet und verursacht kurz darauf einen weiteren Treffer.',
  118:'Ein Wirbelsturm zieht Gegner zur Mitte und fügt ihnen Windschaden zu.',
  119:'Verbessert dauerhaft deinen physischen Angriff und auf der höchsten Stufe dein Angriffstempo.',
  120:'Erweitert dauerhaft deinen Speicher für gesammelte Seelen.',
  121:'Ein verstärkter Pfeil trifft einen Gegner mit physischem Schaden.',
  122:'Erhöht dauerhaft die Durchdringung deiner Angriffe, deine Geschicklichkeit und auf höheren Stufen dein Glück.',
  123:'Verkürzt dauerhaft die Abklingzeiten deiner Skills.',
  124:'Stellt das Leben eines verbündeten Ziels über Zeit wieder her.',
  125:'Windmagie verletzt den Gegner und verlangsamt seine Angriffe.',
  127:'Eine Wutexplosion trifft den Gegner, solange Ausbruch der Wut auf dir wirkt.',
  128:'Ein wütender Klingenangriff trifft den Gegner, solange Ausbruch der Wut auf dir wirkt.',
  135:'Erhöht die Anzahl der Kreaturen, die du gleichzeitig kontrollieren kannst.',
  136:'Ruft deine Kreatur an deine Seite.',
  139:'Stärkt dauerhaft deine Ausdauer und deine körperlichen Attribute.',
  143:'Stärkt dauerhaft Intelligenz und Willenskraft und verbessert deine Widerstandskraft gegen Flüche.',
  144:'Verbessert dauerhaft deine Fertigkeiten im Umgang mit Rüstungen.',
  146:'Ein listiger Eigenbuff stärkt deine Fähigkeiten im Kampf.',
  147:'Stärkt vorübergehend die Geschicklichkeit und Agilität deiner Gruppe.',
  148:'Schärft deinen Instinkt und verbessert vorübergehend deine Kampffähigkeiten.',
  149:'Die Macht der Wildnis stärkt dich vorübergehend.',
  150:'Verstärkt vorübergehend die Begleiter deiner Gruppe.',
  151:'Stärkt dich mit dem Willen, für deine Ehre zu kämpfen.',
  152:'Deine Angriffe können dem Gegner eine Vergiftung zufügen.',
  153:'Verbessert vorübergehend deine Treffsicherheit.',
  154:'Schärft deine Sinne und verbessert vorübergehend deine Fähigkeiten im Fernkampf.',
  155:'Ein geschärfter sechster Sinn verbessert vorübergehend deine Verteidigung im Kampf.',
  156:'Die Erfahrung des Waldläufers stärkt vorübergehend deine Fähigkeiten.',
  157:'Eigene normale Angriffe gegen das markierte Ziel lösen zusätzliche Pfeile der Vorfahren aus.',
  158:'Solange aktiviert, erzeugen deine schadensverursachenden Angriffe mehr Aggro und verbrauchen regelmäßig Mana.',
  159:'Erhöht vorübergehend dein Glück.',
  160:'Der Stolz des Kriegers stärkt dich vorübergehend im Kampf.',
  161:'Erhöht deinen physischen Angriff und unterstützt den Aufbau deiner Wut.',
  162:'Stärkt vorübergehend deine innere Kraft und deine körperlichen Fähigkeiten.',
  163:'Entfaltet vorübergehend dein kämpferisches Potential.',
  164:'Erhöht vorübergehend deine physische und magische Verteidigung sowie deine Willenskraft.',
  165:'Erhöht vorübergehend deine Intelligenz und verringert die durch deinen Schaden erzeugte Aggro.',
  166:'Stärkt vorübergehend Intelligenz und Willenskraft deiner Gruppe.',
  167:'Verringert während der Wirkung die Wahrscheinlichkeit, neu vergiftet zu werden. Bereits laufende Vergiftungen werden nicht entfernt.',
  169:'Verstärkt deine magischen Skills mit einem zufälligen Schadensbonus je Anwendung. Der Bonus gilt auch für ihre Mehrfachtreffer und Schadensticks.',
  170:'Erhöht vorübergehend dein maximales Leben und deine Vitalität.',
  171:'Erhöht kurzzeitig deine physische und magische Verteidigung.',
  172:'Dein Kampfinstinkt stärkt dich vorübergehend.',
  173:'Der Geist des Kriegers stärkt dich vorübergehend.',
  174:'Ein Blutrausch verstärkt vorübergehend deine Kampffähigkeiten.',
  175:'Trotzt für kurze Zeit einem tödlichen Treffer. Nach Ende der Gnadenfrist stirbst du.',
  176:'Eigene Angriffe bei sehr niedrigem Leben können den Willen des ewigen Siegers auslösen.',
  177:'Erhöht dauerhaft den physischen Schaden deiner Skills.',
  178:'Der Geist des Feuers stärkt vorübergehend deine Attribute.',
  179:'Stärkt vorübergehend die Kampffähigkeiten deiner Gruppe.',
  180:'Entfesselt vor dir eine Seelenplage, die mehrere Gegner mit magischem Schaden trifft.',
  181:'Verbessert dauerhaft deine Manaregeneration und Vitalität.',
  183:'Gute Reflexe verbessern vorübergehend deine Fähigkeiten im Kampf.',
  187:'Hartes Training stärkt dauerhaft deine Geschicklichkeit und dein Angriffstempo.',
  188:'Verhüllt dich in Dunkelheit und ermöglicht Angriffe aus der Tarnung.',
  189:'Erhöht vorübergehend dein Angriffstempo und deine Laufgeschwindigkeit. Zusammen mit Attentäter können normale Angriffe Mana wiederherstellen.',
  190:'Erhöht vorübergehend deine Geschicklichkeit und deinen physischen Angriff.',
  191:'Erhöht vorübergehend die Laufgeschwindigkeit deiner Gruppe.',
  192:'Erhöht vorübergehend die physische Verteidigung deiner Gruppe.',
  193:'Verbessert vorübergehend die Manaregeneration deiner Gruppe.',
  194:'Stärkt vorübergehend deine Intelligenz, Stärke, Vitalität und Willenskraft.',
  197:'Segnet deine Gruppe mit stärkeren Attributen und verbesserter Manaregeneration.',
  198:'Verbessert vorübergehend geistige Attribute und Manaregeneration deiner Gruppe.',
  199:'Stärkt vorübergehend Vitalität und Verteidigung deiner Gruppe.',
  201:'Verbessert dauerhaft deine Fertigkeiten im Umgang mit Waffen.',
  202:'Setzt einen Gegner in Brand und verursacht wiederholt magischen Schaden.',
  203:'Stärkt dauerhaft deine körperlichen und geistigen Attribute.',
  207:'Opfert eigenes Leben für eine sofortige Notfallheilung deiner Verbündeten.',
  208:'Erweitert dauerhaft dein Wissen und stärkt Intelligenz und Willenskraft.',
  209:'Verstärkt dauerhaft den direkten magischen Schaden deiner Seelenangriffe.',
  212:'Trifft den Gegner mit aufeinanderfolgenden physischen und magischen Angriffen.',
  214:'Stärkt deine Blutmagie und erhöht deinen magischen Angriff.',
  219:'Verbraucht dein gesamtes aktuelles Mana für eine gewaltige magische Explosion.',
  220:'Ein Bann unterdrückt vorübergehend die Zauber des Gegners.',
  222:'Erhöht einen ausgewählten, bereits gelernten Skill um eine effektive Stufe. Dafür sinken deine körperlichen und geistigen Attribute.',
  223:'Erhöht vorübergehend Angriffs- und Laufgeschwindigkeit deiner Gruppe.',
  224:'Erhöht vorübergehend den physischen Skillschaden deiner Gruppe.',
  225:'Erhöht vorübergehend die magische Verteidigung deiner Gruppe.',
  226:'Beschwört einen Seelenbegleiter, der Gegner mit physischen Fernkampfangriffen bekämpft.',
  228:'Eine Barriere um dich verringert den Schaden, den Verbündete in ihrem Bereich erleiden.',
  235:'Ein Meteoritenschauer trifft Gegner wiederholt im Zielgebiet.',
  236:'Ein Teufelspakt stärkt vorübergehend Intelligenz, Willenskraft und Vitalität.',
  237:'Morrak wechselt von Nahkampfangriffen zu magischen Fernkampfangriffen. Die Beschwörung selbst erhältst du durch die zugehörige Quest.',
  238:'Erhöht vorübergehend dein Angriffstempo. Zusammen mit Herz des Verräters können normale Angriffe Mana wiederherstellen.',
  239:'Eisiger Regen verletzt Gegner wiederholt im Zielgebiet.',
  240:'Solange aktiviert, verbessert Permafrost die Einfrierchance deiner Eisangriffe und verbraucht regelmäßig Mana.',
  241:'Erweitert dauerhaft deinen Vorrat an Seelenfragmenten.',
  242:'Erhöht vorübergehend dein maximales Mana und deine Manaregeneration.',
  243:'Stärkt dauerhaft deine Stärke und gewährt zusätzliches maximales Mana abhängig von deinem aktuellen Geschick.',
  246:'Bei vollem Vertrauen übernimmt dein Begleiter einen Teil deiner aktuellen Angriffs- und Verteidigungswerte.',
  247:'Nach einem erlittenen kritischen Treffer kann Beharrlichkeit vorübergehend deine Widerstandskraft stärken.',
  249:'Stürmt gemeinsam mit deinen verfügbaren Begleitern zum Angriff vor. Der Angriff ist auch ohne Begleiter nutzbar.',
  250:'Überträgt während der Kanalisierung eigenes Leben und Mana in Heilung für deinen Begleiter. Bewegung unterbricht die Übertragung.',
  251:'Ein blutender Schwerthieb verletzt den Gegner und verursacht anschließend weiteren Schaden.',
  254:'Verstärkt deine physischen Erdangriffe und magischen Feuerangriffe und senkt deine Manakosten.',
  257:'Eigene Angriffe bei niedrigem Mana können deine feurige Leidenschaft entfesseln.',
  259:'Stärkt dauerhaft deine Stärke, Vitalität und Intelligenz.',
  260:'Verringert dauerhaft erlittenen Gift- und Dunkelheitsschaden und verbessert die Abwehr neuer Flüche.',
  261:'Verstärkt den ersten Treffer deiner Eisranken mit der Kraft der Dornen.',
  263:'Ein Stoßgebet trifft einen Gegner mit magischem Schaden.',
};

const statNames = {str:'Stärke',vita:'Vitalität',int:'Intelligenz',wis:'Willenskraft',dex:'Geschicklichkeit',agi:'Agilität',luck:'Glück',
  patk:'Physischer Angriff',matk:'Magischer Angriff',pdef:'Physische Verteidigung',mdef:'Magische Verteidigung',
  health:'Heilung',maxHealth:'Maximales Leben',maxMana:'Maximales Mana',healthRegen:'Lebensregeneration',manaRegen:'Manaregeneration',
  atkSpeed:'Angriffsgeschwindigkeit',movementSpeed:'Laufgeschwindigkeit',accuracy:'Trefferwertung',dodge:'Ausweichwertung',
  block:'Blockwertung',penetration:'Durchdringung',critChanceRating:'Kritische Trefferwertung',amb:'Hinterhalt',faith:'Glaube',vic:'Victim'};
const controlNames={root:'Fesseln',freeze:'Einfrieren',paralysis:'Paralyse',dazed:'Benommenheit',stun:'Betäubung',taunt:'Provokation',pull:'Heranziehen',spellSuppression:'Zaubersperre'};
const schools={physical:'physisch',magical:'magisch',fire:'Feuer',ice:'Eis',electric:'Elektro',poison:'Gift',dark:'Dunkelheit',wind:'Wind'};
const num=n=>Number(n.toFixed(4)).toLocaleString('de-DE',{maximumFractionDigits:4});
const numeric=n=>typeof n==='number'&&Number.isFinite(n);
const at=(curve, fallback, rank)=>curve?.type?curveValue(curve,rank):fallback;
const byRank=(values,rank)=>values?.[rank-1];
const durationUnit=' Sekunden';
const percent=n=>num(n*100)+' %';
const signed=n=>(n>0?'+':'')+num(n);

export function playerSkillDescription(skill) {
  if(summaries[skill.nr])return summaries[skill.nr];
  const first=String(skill.description_de??'').split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ])/)[0];
  if(first.length>=30&&first.length<=240&&!/\d|vorläufig|bisher|Reserve|unzugewiesen|Stufen|Klasse|Berechnung|festgelegt/i.test(first))return first;
  const stats=Object.keys(skill.statScaling??{}).filter(k=>statNames[k]).map(k=>statNames[k].toLowerCase());
  if(stats.length)return `${skill.type==='passive'?'Verbessert dauerhaft':'Verbessert vorübergehend'} ${stats.join(', ')}.`;
  return skill.type==='passive'?'Verbessert dauerhaft deine Fähigkeiten.':'Entfesselt die Wirkung dieser Fähigkeit auf ihr Ziel.';
}

// Every column contains exact values for each learnable rank. The client only
// selects columns and compares strings; it does not recreate progression rules.
export function buildSkillTooltip(skill,classKey,skillNames=new Map()) {
  const max=learnableSkillLevel(skill,classKey);
  const columns=new Map();
  const add=(rank,key,label,value)=>{
    if(value===undefined||value===null||value==='')return;
    if(!columns.has(key))columns.set(key,{key,label,values:Array(max).fill('—')});
    columns.get(key).values[rank-1]=String(value);
  };
  for(let rank=1;rank<=max;rank++) {
    const s=resolveSkillAtLevel(skill,rank,{classKey});
    const put=(key,label,value,unit='',positive=false)=>{if(numeric(value))add(rank,key,label,(positive?signed(value):num(value))+unit);};
    for(const [key,label]of Object.entries(statNames)) {
      if(!numeric(s[key]))continue;
      const damage=s.type==='skill'&&['patk','matk'].includes(key)&&Boolean(s.damageType);
      const name=damage?(key==='patk'?'Physischer Grundschaden':'Magischer Grundschaden'):label;
      const unit=key==='manaRegen'?' MP/Tick':key==='healthRegen'?' HP/Tick':s.statBonusUnits?.[key]==='fraction'?' %':'';
      put('stat.'+key,name,damage?Math.floor(s[key]):s[key]*(s.statBonusUnits?.[key]==='fraction'?100:1),unit,!damage&&key!=='health');
    }
    for(const cost of s.resourceCosts??[]) {
      const value=at(cost.scaling,cost.value,rank);
      const name={mana:'Manakosten',health:'Lebenskosten',rage:'Wutkosten',soul:'Seelenkosten',stamina:'Ausdauerkosten'}[cost.resource]??'Ressourcenkosten';
      if(numeric(value))add(rank,'cost.'+cost.resource,name,cost.unit==='fraction'?percent(value)+({maxMana:' des maximalen Manas',maxHealth:' des maximalen Lebens',currentMana:' des aktuellen Manas',maxStamina:' der maximalen Ausdauer'}[cost.reference]??''):num(value)+({mana:' MP',health:' HP'}[cost.resource]??''));
    }
    if(!(s.resourceCosts??[]).some(c=>c.resource==='mana'))put('cost.mana','Manakosten',s.mana,' MP');
    put('cast','Aufladezeit',s.castTimeSeconds,durationUnit);
    put('cooldown',s.type==='passive'?'Interne Abklingzeit':'Abklingzeit',s.cd,durationUnit);
    if(s.dur>0)put('duration','Wirkungsdauer',s.dur,durationUnit);
    if(s.activation==='toggle')add(rank,'toggle','Wirkungsdauer','Bis zum Ausschalten');
    const trigger=s.triggerCondition??{};
    const chance=at(trigger.chancePerCheckScaling,trigger.chancePerCheck,rank);
    if(numeric(chance))add(rank,'trigger.chance','Auslösechance',percent(chance));
    put('trigger.actions','Prüfung nach eigenen Angriffen',trigger.checkEveryAttackActions);
    if(numeric(trigger.manaBelowFraction))add(rank,'trigger.mana','Benötigtes Mana','Unter '+percent(trigger.manaBelowFraction));
    for(const [i,t]of (trigger.healthThresholds??[]).entries()) {
      if(t.chancePerCheck===1)add(rank,`trigger.health.${i}`,'Auslöser','Eigener Angriff unter '+percent(t.belowFraction)+' Leben');
      else add(rank,`trigger.health.${i}`,'Auslösechance unter '+percent(t.belowFraction)+' Leben',percent(t.chancePerCheck));
    }
    for(const [i,e]of (s.effects??[]).entries()) {
      if(rank<(e.minimumSkillLevel??1))continue;
      const key='effect.'+i;
      const target=e.target==='companion'?'Begleiter: ':e.target==='enemy'||e.target==='enemiesInArea'?'Ziel: ':'';
      const school=schools[e.damageSchool]??(e.damageTypes?.length===1?schools[e.damageTypes[0]]:'');
      const label={statModifier:statNames[e.stat],periodicDamage:`${school?school+'-':''}Grundschaden pro Tick`,heal:'Heilung',shield:'Schildkapazität',
        damageBonus:`${school?school+'-':''}Schadensbonus`,resourceDrain:'Laufender '+(e.resource==='health'?'Lebens':'Mana')+'verbrauch',
        damageReduction:`${school?school+'-':''}Schadensverringerung`,damageTakenBonus:`${school?school+'-':''}Schadensanfälligkeit`,
        resourceCostReduction:e.resource==='mana'?'Manakostenverringerung':'Ressourcenkostenverringerung',cooldownReduction:'Abklingzeitverringerung',
        experienceBonus:'Begleiter-Erfahrungsbonus',statusResistance:'Widerstand gegen '+({curse:'Flüche',poison:'Vergiftung'}[e.resistedStatus]??'Status'),
        triggeredAttack:'Schaden des Zusatzangriffs',threatMultiplier:'Erzeugte Schadens-Aggro',resourceGain:'Gewinn: '+({mana:'Mana',health:'Leben',rage:'Wut'}[e.resource]??'Ressource'),
        damageReplay:'Wiederholter Schaden',procChanceBonus:'Zusätzliche Einfrierchance',castTimeReduction:'Aufladezeitverringerung',threatGain:'Zusätzliche Aggro'}[e.type];
      if(label&&numeric(e.value)) {
        const flatDamage=e.unit!=='fraction'&&['periodicDamage','triggeredAttack','damageBonus'].includes(e.type);
        let value=e.unit==='fraction'?percent(e.value):num(flatDamage?Math.floor(e.value):e.value);
        if(e.type==='threatMultiplier'&&e.unit!=='fraction')value='×'+num(e.value);
        if(e.type==='cooldownReduction'||e.type==='castTimeReduction')value+=durationUnit;
        if(e.reference==='maxHealth')value+=' des maximalen Lebens';
        if(e.reference==='maxMana')value+=' des maximalen Manas';
        if(e.damageBasis==='actualHealthDamage')value+=' des verursachten Lebensschadens';
        if(e.intervalSource==='manaRegenerationTick')value+=' / MP-Tick';
        add(rank,key,target+label,value);
      }
      const duration=at(e.durationScaling,e.durationSeconds,rank);
      if(duration>0&&(e.type==='control'||duration!==s.dur))put(key+'.duration',(e.type==='control'?controlNames[e.controlKind]??'Kontrolle':target+(label??'Effekt'))+' – Dauer',duration,durationUnit);
      if(numeric(e.hitChance))add(rank,key+'.chance',(controlNames[e.controlKind]??label??'Effekt')+' – Chance',percent(e.hitChance));
      if(numeric(e.applicationChance))add(rank,key+'.applicationChance','Auslösechance',percent(e.applicationChance));
      put(key+'.interval','Tickabstand',e.intervalSeconds,durationUnit);
      put(key+'.firstTick','Erster Tick nach',e.firstTickAfterSeconds,durationUnit);
      if(e.initialCalculatedDamageFraction!==undefined)add(rank,key+'.portion','Schaden pro Tick',percent(e.initialCalculatedDamageFraction)+' des ersten Treffers');
      if(e.additionalProjectileCount)put(key+'.projectiles','Zusatzgeschosse',e.additionalProjectileCount);
      if(e.randomDamageRange){const r=e.randomDamageRange;add(rank,key+'.range','Zusätzlicher magischer Skillschaden',num(Math.floor(r.minimum+(rank-1)*r.minimumPerAdditionalLevel))+'–'+num(Math.floor(r.maximum+(rank-1)*r.maximumPerAdditionalLevel)));}
      if(e.restoredHealthFraction!==undefined)add(rank,key+'.restore','Wiederhergestelltes Leben',percent(e.restoredHealthFraction));
      if(e.eligibleSkillNumbers?.length)add(rank,key+'.skills','Verstärkte Skills',e.eligibleSkillNumbers.map(n=>skillNames.get(n)).filter(Boolean).join(', '));
      if(e.requiredActiveSkillNumbers?.length)add(rank,key+'.active','Benötigte aktive Buffs',e.requiredActiveSkillNumbers.map(n=>skillNames.get(n)).filter(Boolean).join(', '));
    }
    const attack=s.attackExecution??{};
    put('hits','Treffer',at(attack.hitCountScaling,attack.hitCount,rank));
    if(attack.hitSequence?.length)put('hits','Treffer',attack.hitSequence.length);
    if(attack.meteorWaveSequence?.length)put('waves','Trefferwellen',attack.meteorWaveSequence.length);
    if(attack.guaranteedCriticalHit)add(rank,'critical','Treffer','Garantiert kritisch');
    const multiplier=at(attack.damageMultiplierScaling,undefined,rank);
    if(numeric(multiplier))add(rank,'damage.multiplier','Schaden bei erfüllter Bedingung','×'+num(multiplier));
    const armor=byRank(attack.armorIgnoreFractionByLevel,rank);
    if(numeric(armor))add(rank,'armor.ignore','Rüstungsignorierung bei erfüllter Bedingung',percent(armor));
    put('range','Reichweite',s.movement?.distanceScaling?.type?curveValue(s.movement.distanceScaling,rank):s.movement?.distanceMeters,' m');
    put('height','Sprunghöhe',at(s.movement?.heightScaling,s.movement?.heightMeters,rank),' m');
    put('radius','Radius',at(s.attackArea?.radiusScaling,s.attackArea?.radiusMeters??s.areaSettings?.radiusMeters,rank),' m');
    put('diameter','Durchmesser',s.attackArea?.diameterMeters??s.areaSettings?.diameterMeters,' m');
    put('targets','Maximale Ziele',at(s.attackArea?.maxTargetsScaling,s.attackArea?.maxTargets,rank));
    const cap=byRank(s.companionControlSettings?.maximumControlledCreaturesByLevel,rank);
    put('companions','Gleichzeitig kontrollierte Kreaturen',cap);
    put('souls','Seelenspeicher',at(s.soulStorageSettings?.capacityScaling,s.soulStorageSettings?.capacity,rank));
    put('soul.targets','Maximale Seelenquellen',at(s.soulGenerationSettings?.maximumUniqueEnemiesScaling,undefined,rank));
    const tame=at(s.taming?.chanceMultiplierScaling,s.taming?.chanceMultiplier,rank);
    if(numeric(tame))add(rank,'taming','Zähmchance','×'+num(tame));
    const resurrect=at(s.resurrectionSettings?.restoredHealthScaling,s.resurrectionSettings?.restoredHealth,rank);
    put('resurrection','Leben nach Wiederbelebung',resurrect,' HP');
    const burst=s.burstUsage;
    if(burst){const threshold=byRank(burst.belowTargetHealthFractionByLevel,rank);if(numeric(threshold))add(rank,'burst.health','Verstärkt gegen Ziele mit','Unter '+percent(threshold)+' Leben');put('burst.uses','Anwendungen gegen geschwächte Ziele',byRank(burst.usesBelowThresholdByLevel,rank));}
    const exchange=s.attributeExchangeSettings;
    if(exchange){const portion=at(exchange.sourceFractionScaling,undefined,rank);if(numeric(portion))add(rank,'exchange','Umwandlung '+(statNames[exchange.sourceStat]??'Attribut'),percent(portion)+' in '+(statNames[exchange.destinationStat]??'Attribut'));}
    const prepaid=s.prepaidComboBudget;
    if(prepaid){put('combo.cost','Mana je Folgeanwendung',at(prepaid.perApplicationManaScaling,undefined,rank),' MP');put('combo.paid','Vorausbezahlte Anwendungen',prepaid.paidApplications);put('combo.max','Maximale Folgeanwendungen',prepaid.maxApplications);}
    if(s.attributeConversionBonus){const b=s.attributeConversionBonus;put('attributeConversion',`${statNames[b.targetStat]??'Bonus'} je ${statNames[b.sourceStat]??'Attributpunkt'}`,at(b.amountPerPointScaling,b.amountPerPoint,rank),'',true);}
    if(s.skillLevelGrant){put('grant','Zusätzliche effektive Skillstufen',s.skillLevelGrant.levels,'',true);for(const[k,v]of Object.entries(s.skillLevelGrant.attributeCost??{}))put('grant.'+k,statNames[k]??'Attributkosten',-v);}
    const sacrifice=s.attackSacrificeSettings;
    if(sacrifice){const hp=at(sacrifice.healthCostFractionScaling,undefined,rank),damage=at(sacrifice.damageBonusFractionScaling,undefined,rank);if(numeric(hp))add(rank,'sacrifice.hp','Leben je Angriffsskill',percent(hp)+' des maximalen Lebens');if(numeric(damage))add(rank,'sacrifice.damage','Gesamter Angriffsskill-Schaden','+'+percent(damage));}
    const transfer=s.lifeTransferSettings;
    if(transfer){put('transfer.heal','Heilung je Impuls',byRank(transfer.healingPerImpulseByLevel,rank),' HP');put('transfer.hp','Lebenskosten je Impuls',byRank(transfer.healthCostPerImpulseByLevel,rank),' HP');put('transfer.mp','Manakosten je Impuls',byRank(transfer.manaCostPerImpulseByLevel,rank),' MP');put('transfer.count','Heilimpulse',transfer.impulseCount);put('transfer.interval','Impulsabstand',byRank(transfer.intervalSecondsByLevel,rank),durationUnit);}
    const summon=s.summonedCreatureSettings;
    if(summon){put('summon.lifetime','Begleiter-Laufzeit',summon.lifetimeSeconds,durationUnit);for(const[k,v]of Object.entries(summon.baseStats??{}))put('summon.'+k,'Begleiter: '+({physicalAttack:'Physischer Angriff',magicalAttack:'Magischer Angriff',physicalDefense:'Physische Verteidigung',magicalDefense:'Magische Verteidigung',maxHealth:'Maximales Leben'}[k]??k),v);}
    const bond=s.companionBondSettings;
    if(bond){if(numeric(bond.requiredTrustFraction))add(rank,'bond.trust','Benötigtes Vertrauen',percent(bond.requiredTrustFraction));for(const[k,label]of [['physicalAttack','Physischer Angriff'],['physicalDefense','Physische Verteidigung'],['magicalDefense','Magische Verteidigung']]){const v=byRank(bond[k+'FractionByLevel'],rank);if(numeric(v))add(rank,'bond.'+k,'Begleiter: '+label,percent(v)+' deines Wertes');}}
    const reserve=s.soulReserveBonusSettings;
    if(reserve){put('reserve.step','Seelenfragmente je Bonusstufe',reserve.fragmentsPerBonusStep);put('reserve.bonus','Magischer Angriff je Bonusstufe',reserve.bonusPerFullStep,'',true);put('reserve.max','Maximaler magischer Angriffsbonus',reserve.maximumBonus,'',true);}
    const reactive=s.reactiveBuffSettings;
    if(reactive){if(numeric(reactive.chance))add(rank,'reactive.chance','Chance nach erlittenem kritischen Treffer',percent(reactive.chance));put('reactive.duration','Wirkungsdauer',reactive.durationSeconds,durationUnit);const linear=c=>c&&numeric(c.base)?c.base+(rank-1)*(c.perLevel??0):undefined;put('reactive.cd','Interne Abklingzeit',linear(reactive.internalCooldownScaling),durationUnit);put('reactive.heal','Sofortige Heilung',linear(reactive.immediateHealingScaling),' HP');for(const[k,v]of Object.entries(reactive.bonusesPerLevel??{}))put('reactive.'+k,statNames[k]??'Bonus',v*rank,'',true);}
  }
  const tooltipRows=[...columns.values()];
  const tooltipCategory=(skill.effectKind==='movement'?'Bewegung':skill.type==='passive'?'Passiv':skill.type==='selfBuff'?'Selbstbuff':skill.type==='buff'?'Gruppenbuff':'Aktiv')
    +(skill.category==='creature'?' · Begleiter':skill.unlockPhase==='race'?' · '+skill.category:skill.damageType?' · '+({physical:'Physischer Angriff',magical:'Magischer Angriff',mixed:'Physischer und magischer Angriff'}[skill.damageType]):'');
  return {description:playerSkillDescription(skill),tooltipCategory,tooltipRows};
}
