import { VOCAB } from './data/vocabulary.js';
import { $, esc } from './utils.js';
/* ---------- glossary popover ---------- */
const pop=$("#pop");
function openPop(btn){
  const k=btn.dataset.k, v=VOCAB[k]; if(!v) return;
  if(pop._from) pop._from.setAttribute("aria-expanded","false");
  pop.innerHTML=`<button aria-label="Close glossary">×</button><div class="w" id="pop-w" lang="uk">${esc(v.w)}</div><div class="rom">${esc(v.rom)}</div><div lang="en" data-i18n-ignore><b>${esc(v.en)}</b></div><p style="margin:.5em 0 0">${esc(v.note)}</p>`;
  pop.hidden=false;
  const r=btn.getBoundingClientRect(); const pw=Math.min(300,window.innerWidth-24);
  let left=r.left+window.scrollX; if(left+pw>window.scrollX+window.innerWidth-12) left=window.scrollX+window.innerWidth-12-pw;
  pop.style.left=Math.max(12,left)+"px"; pop.style.top=(r.bottom+window.scrollY+8)+"px";
  pop.querySelector("button").focus(); pop._from=btn; btn.setAttribute("aria-expanded","true");
}
document.addEventListener("click",e=>{
  const t=e.target.closest(".term"); if(t){e.preventDefault();openPop(t);return;}
  if(!pop.hidden && (e.target.closest("#pop button") || !e.target.closest("#pop"))){pop.hidden=true; if(pop._from){pop._from.setAttribute("aria-expanded","false"); if(e.target.closest("#pop button")) pop._from.focus();}}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!pop.hidden){pop.hidden=true;if(pop._from){pop._from.setAttribute("aria-expanded","false");pop._from.focus();}}});
