import { QS2, REFS, RECOVERY } from './data/questions.js';
import { $, esc, reduced } from './utils.js';
import { ua } from './language-tools.js';
import './glossary.js';
/* ---------- four questions with citations ---------- */
function renderQS(){
  const order=[], counts={};
  const cite=k=>{ if(!REFS[k]) return ""; if(!(k in counts)){counts[k]=0;order.push(k);} counts[k]++; const n=order.indexOf(k)+1; return `<sup class="cite"><a href="#ref-${k}" id="cite-${k}-${counts[k]}" aria-label="Reference ${n}">[${n}]</a></sup>`; };
  const C = h => h.replace(/\[\[cite:([A-Za-z0-9]+)\]\]/g,(m,k)=>cite(k));
  const quote = q => !q ? "" : `<figure class="pq"><blockquote>${q.tr?`<span lang="uk">«${ua(q.x)}»</span><span class="tr">${esc(q.tr)}</span>`:`“${esc(q.x)}”`}</blockquote><figcaption>${q.w}${C("[[cite:"+q.c+"]]")}</figcaption></figure>`;
  const chart = () => `<figure class="chart"><svg viewBox="0 0 520 190" role="img" aria-label="Parcel volume as a share of pre-war levels, 2022: 2% on 26 February, 30% end of March, 50% in May, 70% in June, 100% in September">${RECOVERY.map((r,i)=>{const x=30+i*98,h=r[1]*1.4,y=160-h;return `<rect x="${x}" y="${y}" width="62" height="${Math.max(h,2)}" rx="4" fill="var(--red)"/><text x="${x+31}" y="${y-6}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">${r[1]}%</text><text x="${x+31}" y="180" text-anchor="middle" font-size="12" fill="var(--muted)">${r[0]}</text>`;}).join("")}<line x1="20" y1="160" x2="510" y2="160" stroke="var(--line)"/></svg><figcaption>Parcel volume as a share of pre-war levels, 2022. Management’s month-by-month account.${C("[[cite:dou2022]]")}</figcaption></figure>`;
  $("#qs").innerHTML=QS2.map((q,i)=>`<div class="q" data-open="${i===0}"><button aria-expanded="${i===0}" aria-controls="qa${i}"><span class="qn">${i+1}</span><span class="qt">${esc(q.t)}</span><span class="chev" aria-hidden="true">+</span></button>
    <div class="qa" id="qa${i}"><p class="qlead">${C(q.lead)}</p>${q.parts.map(pt=>`<section class="qpart"><h3>${esc(pt.h)}</h3><div>${C(pt.b)}</div>${pt.chart?chart():""}${quote(pt.q)}${quote(pt.q2)}</section>`).join("")}</div></div>`).join("");
  $("#refs").innerHTML=order.map((k,i)=>{const r=REFS[k],n=counts[k];
    const back = n===1 ? `<a href="#cite-${k}-1" class="back" aria-label="Back to citation">^</a>` : `^ ${Array.from({length:n},(_,j)=>`<a href="#cite-${k}-${j+1}" class="back" aria-label="Back to citation ${j+1}">${String.fromCharCode(97+j)}</a>`).join(" ")}`;
    return `<li id="ref-${k}"><span class="backs">${back}</span> <span data-i18n-ignore>${esc(r.o)}</span>. “<span>${esc(r.t)}</span>”. <span>${esc(r.d)}</span>. <a href="${r.u}" target="_blank" rel="noopener" aria-label="Read: ${esc(r.t)}, ${esc(r.o)} (opens in a new tab)">Read</a>${r.n?` <span class="rn">(${esc(r.n)})</span>`:""}</li>`;}).join("");
  $("#ref-count").textContent=`${order.length} sources`;
}
function flash(el){ el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); }
document.addEventListener("click",e=>{
  const a=e.target.closest('a[href^="#cite-"],a[href^="#ref-"]'); if(!a) return;
  const el=document.getElementById(a.getAttribute("href").slice(1)); if(!el) return;
  e.preventDefault();
  const q=el.closest(".q"); if(q && q.dataset.open!=="true"){q.dataset.open="true";q.querySelector("button").setAttribute("aria-expanded","true");}
  if(el.closest("#refs-wrap") && !$("#refs-wrap").open) $("#refs-wrap").open=true;
  history.pushState(null,"",a.getAttribute("href"));
  reveal(el);
});
function reveal(el){
  const q=el.closest(".q"); if(q && q.dataset.open!=="true"){q.dataset.open="true";q.querySelector("button").setAttribute("aria-expanded","true");}
  if(el.closest("#refs-wrap")) $("#refs-wrap").open=true;
  el.scrollIntoView({block:"center",behavior:reduced()?"auto":"smooth"}); flash(el.closest("sup")||el);
  const f = el.matches("a,button") ? el : (el.querySelector("a.back")||el); if(!f.matches("a,button")) el.setAttribute("tabindex","-1"); f.focus({preventScroll:true});
}
function fromHash(){ const h=location.hash.slice(1); if(!/^(ref|cite)-/.test(h)) return; const el=document.getElementById(h); if(el) reveal(el); }
window.addEventListener("hashchange",fromHash);


  renderQS();
  $("#qs").addEventListener("click",e=>{const b=e.target.closest(".q > button"); if(!b) return; const q=b.parentElement; const o=q.dataset.open!=="true"; q.dataset.open=o; b.setAttribute("aria-expanded",o);});
  $("#qs-all").addEventListener("click",()=>{const qs=[...document.querySelectorAll("#qs .q")]; const open=qs.some(q=>q.dataset.open!=="true"); qs.forEach(q=>{q.dataset.open=open;q.querySelector("button").setAttribute("aria-expanded",open);}); $("#qs-all").textContent=open?"Collapse all answers":"Expand all answers";});

fromHash();
