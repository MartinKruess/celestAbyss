"""Read the historical ODS Skills sheet without modifying the workbook."""
import hashlib
import json
from pathlib import Path
import xml.etree.ElementTree as ET
import zipfile

source = Path('data/source/Questsystem.ods')
ns = {'t': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0', 'x': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0'}
tag = '{' + ns['t'] + '}'
with zipfile.ZipFile(source) as archive:
    root = ET.fromstring(archive.read('content.xml'))
table = next(t for t in root.findall('.//t:table', ns) if t.get(tag + 'name') == 'Skills')
rows = []
for number, row in enumerate(table.findall('t:table-row', ns), 1):
    column = 1
    cells = {}
    for cell in row:
        text = ' '.join(''.join(p.itertext()) for p in cell.findall('.//x:p', ns))
        if text:
            cells[column] = text
        column += int(cell.get(tag + 'number-columns-repeated', '1'))
    rows.append({'row': number, 'cells': cells})

classes = []
current = None
for row in rows:
    c = row['cells']
    if c.get(1) == 'Lv' and c.get(2):
        current = {'name': c[2], 'headerRow': row['row'], 'skills': []}
        classes.append(current)
        continue
    if current is None or row['row'] > 355:
        continue
    for level_col, name_col, kind in [(1, 2, 'Linke Skillliste'), (5, 6, 'Rechte Skillliste / Passive')]:
        if c.get(level_col, '').isdigit() and c.get(name_col):
            current['skills'].append({'level': int(c[level_col]), 'name': c[name_col], 'kind': kind, 'row': row['row']})

overview = []
for row in rows:
    c = row['cells']
    if row['row'] < 57 and c.get(18, '').isdigit():
        for col in [19, 21, 23, 25, 27, 30, 32, 34, 36, 38, 41, 43, 45, 47, 49]:
            if c.get(col):
                overview.append({'row': row['row'], 'column': col, 'level': int(c[18]), 'name': c[col]})

result = {'source': str(source), 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(), 'sheet': 'Skills', 'status': 'historicalReferenceNotApplied', 'classes': classes, 'earlierOverview': overview, 'caution': 'Multiple historical drafts disagree; numbers beside skill names can be IDs or damage, not skill-point costs.'}
Path('data/balancing/legacy-skill-learning-reference.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
md = '# Alte Lernlevel – Vorlage aus dem Reiter Skills\n\nQuelle: [Questsystem.ods](../../data/source/Questsystem.ods), Reiter **Skills**. Diese lokale Quelle enthält die zuvor als CA-Grundlagen besprochenen Tabellen. Historische Vorlage, nicht als aktuelle Regel übernommen.\n\nEs gibt mehrere Entwürfe: oben Klassenraster bis Level 30, weiter unten ausführlichere Lernlisten mit aktiven Skills bis Level 50 und rechten Listen bis Level 65. Verschiedene Namen und Level widersprechen sich. Zahlen neben Namen sind nicht automatisch Skillpunktkosten; die rechten Listen tragen beispielsweise die Überschrift „nr“.\n\n'
for group in classes:
    md += f"## {group['name']}\n\n| Lernlevel alt | Skillname alt | Quellliste | Zeile |\n| ---: | --- | --- | ---: |\n"
    for skill in sorted(group['skills'], key=lambda s: (s['level'], s['row'])):
        md += f"| {skill['level']} | {skill['name']} | {skill['kind']} | {skill['row']} |\n"
    md += '\n'
md += '## Früheres Klassenraster – ausgewählte Level-30-Einträge\n\nDiese Einträge erklären die im Gespräch genannten Level 30. Das weiter unten stehende Klassenblatt kann abweichende Lernlevel enthalten. „Große Regeneration“ bleibt hier ausschließlich als historische Quellenzeile stehen; laut Besprechung kein Kandidat für die neue Verteilung.\n\n| Lernlevel alt | Skillname alt | Quellzeile |\n| ---: | --- | ---: |\n'
for skill in overview:
    if skill['level'] == 30:
        md += f"| 30 | {skill['name']} | {skill['row']} |\n"
md += '\nAbenteurer besitzt in diesem unteren Tabellenbereich keine eigene Lv-Klassenliste; das frühere Raster enthält ihn. Für heutige Namen und Zuordnungen gelten die aktuellen Klassenübersichten. Keine automatische Streckung auf Level 80 angewendet.\n'
Path('docs/balancing/legacy-skill-learning-levels.md').write_text(md, encoding='utf-8')
print(json.dumps({'historicalClassLists': len(classes), 'historicalSkills': sum(len(c['skills']) for c in classes)}))
