import fs from 'node:fs/promises';
import { render } from '../.ssr/entry-server.js';
const target=new URL('../../arts/index.html',import.meta.url);
const html=await fs.readFile(target,'utf8');
await fs.writeFile(target,html.replace('<div id="root"></div>','<div id="root">'+render()+'</div>'));
console.log('Prerendered React content to arts/index.html');
