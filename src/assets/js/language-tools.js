import { VOCAB, NAMES, VFORMS } from './data/vocabulary.js';
import { esc } from './utils.js';
export const NAME_RE = new RegExp('\\b(' + Object.keys(NAMES).sort((a,b)=>b.length-a.length).join('|') + ')\\b', 'g');
export const uaName = s => s.replace(NAME_RE, m => NAMES[m]).replace(/ and /g, ' і ');
let FORM_RE = new RegExp("(?<![\\p{L}\\p{M}'’ʼ-])("+Object.keys(VFORMS).sort((a,b)=>b.length-a.length).map(f=>f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")(?![\\p{L}\\p{M}'’ʼ-])","giu");
const termBtn = (k,label) => `<button class="term" lang="uk" data-k="${esc(k)}" aria-haspopup="dialog" aria-expanded="false">${label}</button>`;
const autoLink = h => h.replace(FORM_RE,(m)=>{const k=VFORMS[m.toLowerCase()]; return k&&VOCAB[k]?termBtn(k,m):m;});
const ua = t => autoLink(esc(t));

/* first-mention Cyrillic introductions, tracked per context */
const INTRO = {};
function introNames(h,ctx){
  if(!ctx) return h;
  const set = INTRO[ctx] || (INTRO[ctx]=new Set());
  return h.replace(NAME_RE,(m)=>{ if(set.has(m)) return m; set.add(m); return `<span class="nm" lang="uk">${NAMES[m]}</span> (${m})`; });
}


function terms(txt,ctx){
  const html = String(txt||"").split(/(\[\[[^\]]+\]\])/).map(p=>{
    const m=p.match(/^\[\[([^\]]+)\]\]$/);
    if(m) return VOCAB[m[1]]?termBtn(m[1],esc(m[1])):esc(m[1]);
    return introNames(autoLink(esc(p)),ctx);
  }).join("");
  return /[A-Za-z]{2}/.test(txt) ? `<span class="passage" data-source="${esc(txt)}">${html}</span>` : html;
}

const hasName = w => { NAME_RE.lastIndex=0; return NAME_RE.test(w); };
const nameTag = w => hasName(w) ? `<b lang="uk">${esc(uaName(w))}</b> <span class="lat">${esc(w)}</span>` : `<b>${esc(w)}</b>`;
const dualName = w => hasName(w) ? `<span lang="uk">${esc(uaName(w))}</span> <span class="lat">(${esc(w)})</span>` : esc(w);


export { INTRO, ua, terms, nameTag, dualName };
