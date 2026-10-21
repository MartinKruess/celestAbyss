import fs from 'node:fs/promises';
import path from 'node:path';
const policy=JSON.parse(await fs.readFile(new URL('../data/balancing/documentation-policy.json',import.meta.url),'utf8'));

// Old diagnostic scripts may still produce their historical reports, but must
// not recreate retired documents among the current balancing references.
export async function retiredBalancingReportPath(originalPath){
 if(!policy.retired.some(entry=>entry.path===originalPath))throw Error('Unknown retired report path');
 const archiveRoot=path.resolve(policy.archiveDirectory);
 const target=path.resolve(archiveRoot,path.relative('docs/balancing',originalPath));
 if(!target.startsWith(archiveRoot+path.sep))throw Error('Report path outside archive');
 await fs.mkdir(path.dirname(target),{recursive:true});
 return target;
}
