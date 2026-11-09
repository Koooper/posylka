import { PARCELS, STOPS_UA, C128 } from './data/parcels.js';
import { $, esc, fmtNum, initials, reduced } from './utils.js';
import { INTRO, NAME_RE, ua, terms, uaName, nameTag, dualName } from './language-tools.js';
import './glossary.js';
const DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const toDate = ts => { const [d,t]=ts.split("T"); const [y,mo,da]=d.split("-").map(Number); const [h,mi]=t.split(":").map(Number); return new Date(Date.UTC(y,mo-1,da,h,mi)); };
const hm = d => String(d.getUTCHours()).padStart(2,"0")+":"+String(d.getUTCMinutes()).padStart(2,"0");
const dayLabel = d => `${DAYS[d.getUTCDay()]} ${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;
function dur(ms){
  const mins=Math.round(ms/60000), h=Math.floor(mins/60), m=mins%60;
  if(h<48) return `${h} h ${String(m).padStart(2,"0")} min`;
  const d=Math.floor(h/24), hh=h%24;
  return `${d} days ${hh} h`;
}

/* ---------- Code 128 (set C) barcode ---------- */
function barcodeSVG(digits){
  const vals=[105]; for(let i=0;i<digits.length;i+=2) vals.push(+digits.substr(i,2));
  let sum=105; vals.slice(1).forEach((v,i)=>sum+=v*(i+1)); vals.push(sum%103); vals.push(106);
  const pat=vals.map(v=>C128[v]).join("");
  let x=10, rects="", bar=true;
  for(const w of pat){ const n=+w; if(bar) rects+=`<rect x="${x}" y="0" width="${n}" height="40"/>`; x+=n; bar=!bar; }
  const W=x+10;
  return `<svg class="bc" viewBox="0 0 ${W} 40" preserveAspectRatio="none" role="img" aria-label="Barcode for ${fmtNum(digits)}"><g fill="currentColor">${rects}</g></svg>`;
}

/* ---------- artifacts ---------- */
const BOX = `<svg width="14" height="14" viewBox="0 0 34 34" aria-hidden="true"><rect x="3" y="9" width="28" height="21" rx="4" fill="#fff"/><rect x="14" y="9" width="6" height="21" fill="#D7261E"/></svg>`;
const ICO = {np:BOX, alert:`<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20z" fill="#fff"/><rect x="11" y="9" width="2" height="6" fill="#C62828"/><rect x="11" y="16.5" width="2" height="2" fill="#C62828"/></svg>`, health:`<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z" fill="#fff"/></svg>`};
function art(a){
  if(a.k==="push") return `<div class="push"><div class="hdr"><span class="ico ${a.ico==="alert"?"alert":a.ico==="health"?"health":""}">${ICO[a.ico]||BOX}</span><span>${esc(a.app)}</span><span class="t">${esc(a.t)}</span></div><div class="ttl" lang="uk">${ua(a.ttl)}</div><div lang="uk">${ua(a.body)}</div><span class="tr">${esc(a.en)}</span></div>`;
  if(a.k==="chat") return `<div class="chat ${a.ops?"ops":""}"><div class="hdr"><span lang="uk">${esc(a.title)}</span><span class="app">${esc(a.app)}</span></div><div class="body">${a.msgs.map(m=>`<div class="bub ${m.me?"me":"them"} ${m.voice?"voice":""}">${m.from?`<span class="from">${esc(m.from)}</span>`:""}<span lang="uk">${ua(m.ua)}</span>${m.en?`<span class="tr">${esc(m.en)}</span>`:""}</div>`).join("")}</div></div>`;
  if(a.k==="talk") return `<div class="talk">${a.lines.map(l=>`<p><span class="sp">${esc(l.sp)}:</span> <span lang="uk">${ua(l.ua)}</span> <span class="tr" style="display:inline">${esc(l.en)}</span></p>`).join("")}</div>`;
  if(a.k==="screen") return `<div class="appscreen ${a.warn?"warn":""}"><div class="bar"><span>${esc(a.bar)}</span><span>app</span></div><div class="ttl" lang="uk">${ua(a.ttl)}</div><div lang="uk">${ua(a.body)}</div>${a.btn?`<span class="bt" lang="uk">${esc(a.btn)}</span>`:""}<span class="tr">${esc(a.en)}</span></div>`;
  if(a.k==="mail") return `<div class="mail"><div class="fromline">Email from ${esc(a.from)}</div><div class="sub">${esc(a.sub)}</div><div>${esc(a.body)}</div></div>`;
  return "";
}
const arts = list => list&&list.length?`<div class="arts">${list.map(art).join("")}</div>`:"";


/* ---------- tracker state ---------- */
const progress = {A:1,B:1,C:1,D:1,E:1};
let current=null, view="c", filterQ="";
const P = id => PARCELS.find(p=>p.id===id);
const startOf = p => toDate(p.steps.find(s=>s.start).ts);

function mineRows(){
  const box=$("#mine-list"), q=filterQ;
  if(!box.children.length){
    box.innerHTML=PARCELS.map(p=>`<button class="prow" data-id="${p.id}" aria-describedby="pill-${p.id}">
      <span class="pt">${esc(p.title)}</span><span class="pill" id="pill-${p.id}" lang="uk"></span>
      <span class="ft"><span lang="uk">${esc(uaName(p.from.n))} → ${esc(uaName(p.to.n))}</span> <span class="lat">${esc(p.from.n)} → ${esc(p.to.n)}</span></span><span class="n">${fmtNum(p.num)}</span></button>`).join("");
  }
  let visible=0;
  PARCELS.forEach(p=>{
    const b=box.querySelector(`[data-id="${p.id}"]`), s=p.steps[progress[p.id]-1], pill=b.querySelector(".pill");
    const show=!q||p.num.startsWith(q); if(show) visible++;
    b.hidden=!show; b.setAttribute("aria-current",String(!!(current&&current.id===p.id)));
    const seen=p.steps.slice(0,progress[p.id]);
    const delivered=seen.some(step=>step.done), started=seen.some(step=>step.start);
    const state=delivered?'delivered':s.x?'disruption':started?'transit':'preparing';
    const label=delivered?'Delivered':s.x?'Disruption':started?'In transit':'Preparing';
    pill.className="pill "+(delivered?"ok":s.x?"warn":"");
    pill.dataset.parcelState=state;
    pill.innerHTML=`<span class="pill-heading"><span aria-hidden="true">${delivered?'✓':s.x?'!':started?'→':'…'}</span><span>${label}</span></span><span class="pill-detail" lang="uk">${esc(s.ua)}</span>`;
  });
  return visible;
}
function onType(){
  const inp=$("#tn");
  if(/[^\d\s]/.test(inp.value)){ const pos=inp.selectionStart; const before=inp.value.length; inp.value=inp.value.replace(/[^\d\s]/g,""); const p=Math.max(0,pos-(before-inp.value.length)); inp.setSelectionRange(p,p); }
  const digits=inp.value.replace(/\D/g,"").slice(0,14); filterQ=digits;
  const n=mineRows();
  $("#tn-clear").hidden=!inp.value;
  $("#tn-err").textContent = digits && !n ? `None of the five example parcels starts with ${fmtNum(digits)}.` : "";
}
function track(){
  const q=$("#tn").value.replace(/\D/g,"");
  const hits=PARCELS.filter(p=>!q||p.num.startsWith(q));
  if(!q){$("#tn-err").textContent="Type one of the example numbers, or choose a story below."; return;}
  if(hits.length===1){load(hits[0]);return;}
  $("#tn-err").textContent = hits.length? "Keep typing, or choose a story below." : `None of the five example parcels starts with ${fmtNum(q)}. This is a simulation: real numbers won’t work.`;
}
function load(p){
  current=p; $("#tn").value=fmtNum(p.num); filterQ=""; $("#tn-err").textContent=""; $("#tn-clear").hidden=false;
  mineRows(); renderJourney();
  document.getElementById("journey").scrollIntoView({behavior:reduced()?"auto":"smooth"});
  $("#jtitle").focus({preventScroll:true});
}

/* ---------- journey ---------- */
function stepHTML(p,s,i){
  const d=toDate(s.ts), st=startOf(p), el=d-st;
  const elTxt = s.start ? "Drop-off" : el<0 ? "Before drop-off" : "+ "+dur(el);
  const badge = s.done?"✓":s.x?"!":i+1;
  const seed=(who,ctx)=>{const set=INTRO[ctx]||(INTRO[ctx]=new Set()); (who.match(NAME_RE)||[]).forEach(n=>set.add(n)); return "";};
  const side=(v,staff,why,say,ctx)=>seed(v.who,ctx)+`<div class="persona ${staff?"staff":""}"><div class="avatar" aria-hidden="true">${esc(initials(v.who))}</div><div>${nameTag(v.who)} <span class="role">${esc(v.role)}</span><p>${terms(v.txt,ctx)}</p>${arts(v.arts)}</div></div>
      <div class="why">${terms(why,ctx)}</div>
      <div class="say">Say it: <span class="ua" lang="uk">${ua(say[0])}</span> <span class="muted">“${esc(say[1])}”</span></div>`;
  return `<li class="step ${s.x?"disrupt":""} ${s.done?"done":""}" data-i="${i}">
    <div class="when-col"><div class="badge" aria-hidden="true">${badge}</div><div class="hm">${hm(d)}</div><div class="day">${dayLabel(d)}</div><span class="el ${el<=0?"pre":""}">${elTxt}</span></div>
    <div class="card">
      ${s.x?`<span class="disrupt-tag"><span aria-hidden="true">!</span> <span>Disruption</span></span>`:""}${s.done?`<span class="complete-tag"><span aria-hidden="true">✓</span> <span>Delivered</span></span>`:""}${s.leg?`<span class="leg leg-${s.leg}">${s.leg==="np"?"Nova Post leg":s.leg==="before"?"Before Nova Post":"After Nova Post"}</span>`:""}
      <div class="meta"><span>${esc(s.p)}</span></div>
      <p class="status" lang="uk" tabindex="-1">${ua(s.ua)}</p>
      <p class="status-en">${esc(s.en)}</p>
      ${s.done?`<div class="door"><span>Door to door</span><b>${dur(d-st)}</b></div>`:""}
      ${s.npEnd?(()=>{const f=p.steps.find(x=>x.leg==="np");return `<div class="door np"><span>Nova Post’s part, counter to counter</span><b>${dur(d-toDate(f.ts))}</b></div>`;})():""}
      <div class="v-c">${side(s.c,false,s.whyC,s.sayC,p.id+"-c")}</div>
      <div class="v-s">${side(s.s,true,s.whyS,s.sayS,p.id+"-s")}</div>
    </div></li>
    ${s.m?`<li class="meanwhile v-${s.m.v}"><span class="mw">Meanwhile</span><p>${terms(s.m.txt,p.id+"-"+s.m.v)}</p>${arts(s.m.arts)}</li>`:""}`;
}
function renderJourney(){
  const p=current, root=$("#journey-root");
  delete INTRO[p.id+"-c"]; delete INTRO[p.id+"-s"];
  root.innerHTML=`
   <div class="label">
     <div>
       <div class="num">${fmtNum(p.num)}</div>
       <h3 class="ptitle" id="jtitle" tabindex="-1">${esc(p.title)}</h3>
       <div class="who">${esc(p.contents)}</div>
     </div>
     <div class="bc-wrap">${barcodeSVG(p.num)}<div>${p.num}</div></div>
     ${p.note?`<p class="lnote">${esc(p.note)}</p>`:""}
     <div class="parties">
       <div class="who"><b>From: ${dualName(p.from.n)}</b>${esc(p.from.d)}</div>
       <div class="who"><b>To: ${dualName(p.to.n)}</b>${esc(p.to.d)}</div>
     </div>
   </div>
   <div class="stickybar" id="sbar">
     <div class="route" style="--n:${p.stops.length}" aria-hidden="true"><div class="fill" id="rfill"></div>${p.stops.map((s,i)=>`<div class="stop" data-n="${i}"><i>${i+1}</i><span class="su" lang="uk">${esc(STOPS_UA[p.id][i])}</span><span class="sl">${esc(s)}</span></div>`).join("")}</div>
     <p class="stage-now" id="stage" aria-live="polite"></p>
     <div class="controls">
       <div class="seg" role="group" aria-label="Choose a point of view">
         <button data-v="c" aria-pressed="${view==="c"}">Customer<span class="v-word"> view</span></button>
         <button data-v="s" aria-pressed="${view==="s"}">Staff<span class="v-word"> view</span></button>
       </div>
       <div class="clock" id="clock" aria-live="polite"></div>
     </div>
   </div>
   <ol class="timeline view-${view}" id="tl"></ol>
   <div class="next-row" id="nrow"><button class="btn" id="next">Show next update</button><button class="btn ghost" id="all">Show all</button><button class="btn ghost" id="restart" hidden>Start again</button></div>`;
  const tl=$("#tl"); tl.innerHTML=p.steps.slice(0,progress[p.id]).map((s,i)=>stepHTML(p,s,i)).join("");
  updateBar();
}
function updateBar(){
  const p=current, n=progress[p.id], s=p.steps[n-1];
  const pct=s.n/(p.stops.length-1);
  $("#rfill").style.width=`calc((100% - 100% / ${p.stops.length}) * ${pct})`;
  $("#stage").innerHTML=`<span class="sr-only">Current stage: </span>Stage ${s.n+1} of ${p.stops.length}: <span lang="uk">${esc(STOPS_UA[p.id][s.n])}</span> <span class="lat">(${esc(p.stops[s.n])})</span>`;
  document.querySelectorAll("#sbar .stop").forEach(e=>{
    const index=+e.dataset.n;
    e.classList.toggle("on",index<=s.n);
    e.classList.toggle("is-current",index===s.n);
    e.querySelector('i').textContent=index<s.n?'✓':index+1;
  });
  const doneStep=p.steps.slice(0,n).filter(x=>x.done).pop();
  const d=toDate((doneStep||s).ts), el=d-startOf(p);
  $("#clock").innerHTML = doneStep ? `Delivered in ${dur(el)}<small>Update ${n} of ${p.steps.length}</small>` : el<0 ? `Not handed over yet<small>Update ${n} of ${p.steps.length}</small>` : `In transit ${dur(el)}<small>Update ${n} of ${p.steps.length}</small>`;
  const more=n<p.steps.length; $("#next").hidden=!more; $("#all").hidden=!more; $("#restart").hidden=more;
  mineRows();
}
function setView(v){
  const sb=$("#sbar"), limit=sb?sb.getBoundingClientRect().bottom:0;
  let anchor=null, off=0;
  for(const li of document.querySelectorAll("#tl > li.step")){const r=li.getBoundingClientRect(); if(r.bottom>limit+24){anchor=li;off=r.top;break;}}
  view=v;
  document.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===view));
  $("#tl").className="timeline view-"+view;
  if(anchor){
    window.scrollBy({top:anchor.getBoundingClientRect().top-off,left:0,behavior:"instant"});
    anchor.classList.remove("anchor"); void anchor.offsetWidth; anchor.classList.add("anchor");
  }
}
function nextStep(){
  const p=current; if(progress[p.id]>=p.steps.length) return;
  progress[p.id]++; const i=progress[p.id]-1;
  $("#tl").insertAdjacentHTML("beforeend",stepHTML(p,p.steps[i],i));
  updateBar();
  const li=$(`#tl .step[data-i="${i}"]`);
  const y=li.getBoundingClientRect().top+window.scrollY-($("#sbar").offsetHeight+80);
  window.scrollTo({top:y,behavior:reduced()?"auto":"smooth"});
  li.querySelector(".status").focus({preventScroll:true});
}
document.addEventListener("click",e=>{
  const id=e.target.closest("button")?.id;
  if(id==="next") nextStep();
  if(id==="all"){const from=progress[current.id];progress[current.id]=current.steps.length;renderJourney();const li=$(`#tl .step[data-i="${from}"]`);if(li){const y=li.getBoundingClientRect().top+window.scrollY-($("#sbar").offsetHeight+80);window.scrollTo({top:y});li.querySelector(".status").focus({preventScroll:true});}}
  if(id==="restart"){progress[current.id]=1;renderJourney();document.getElementById("journey").scrollIntoView();$("#jtitle").focus({preventScroll:true});}
  const vb=e.target.closest(".seg button");
  if(vb && vb.dataset.v!==view) setView(vb.dataset.v);
  const row=e.target.closest(".prow"); if(row) load(P(row.dataset.id));
});


mineRows();
$("#tn").addEventListener("input",onType);
$("#tn").addEventListener("blur",e=>{const d=e.target.value.replace(/\D/g,"").slice(0,14); e.target.value=fmtNum(d);});
$("#tn-clear").addEventListener("click",()=>{$("#tn").value="";filterQ="";mineRows();$("#tn-err").textContent="";$("#tn-clear").hidden=true;$("#tn").focus();});

$("#tn").addEventListener("keydown",e=>{if(e.key==="Enter")track();});
$("#tn-go").addEventListener("click",track);
