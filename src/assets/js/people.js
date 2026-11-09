import { PEOPLE } from './data/people.js';
import { $, esc, reduced } from './utils.js';
import { INTRO, ua, terms, uaName } from './language-tools.js';
import './glossary.js';
const dayCategories={work:['Work','•'],life:['Life','○'],hot:['Hard moment','!'],spark:['Bright spot','✦']};
/* ---------- support staff days ---------- */
function people(){
  $("#people").innerHTML=PEOPLE.map(x=>`<button class="person" data-id="${x.id}" aria-expanded="false" aria-controls="dayview"><span class="ph">${esc(x.h)}</span><span class="ua" lang="uk">${esc(x.ua)}</span><p>${esc(x.p)}</p><span class="open"><span>Spend a day with </span><span class="lat">${esc(x.who)} </span><span lang="uk">(${esc(uaName(x.who))})</span></span></button>`).join("");
  $("#people").addEventListener("click",e=>{
    const b=e.target.closest(".person"); if(!b) return;
    const open=b.getAttribute("aria-expanded")==="true";
    document.querySelectorAll(".person").forEach(x=>x.setAttribute("aria-expanded","false"));
    const dv=$("#dayview");
    if(open){dv.hidden=true;return;}
    b.setAttribute("aria-expanded","true");
    const x=PEOPLE.find(y=>y.id===b.dataset.id);
    const ctx="day-"+x.id; delete INTRO[ctx]; INTRO[ctx]=new Set([x.who]);
    dv.innerHTML=`<div class="dh"><h3 id="dayhead" tabindex="-1">A day with <span lang="uk">${esc(uaName(x.who))}</span> <span class="lat">(${esc(x.who)})</span></h3><span class="who">${esc(x.role)}</span><button class="btn ghost dclose" data-close>Close</button></div>
      <p class="bio">${terms(x.bio,ctx)}</p>
      <div class="ts"><div class="tough"><b>What wears on ${esc(x.who)}</b><p>${esc(x.tough)}</p></div><div class="spark"><b>What keeps ${esc(x.who)} going</b><p>${esc(x.spark)}</p></div></div>
      <div class="legend"><span class="lg work">Work</span><span class="lg life">Life</span><span class="lg hot">Hard moment</span><span class="lg spark">Bright spot</span></div>
      <ol class="dlist">${x.day.map(d=>{const kind=d.k||'work', [label,icon]=dayCategories[kind];return `<li class="${kind}"><span class="hm">${esc(d.t)}</span><div><span class="day-category"><span aria-hidden="true">${icon}</span> <span>${label}</span></span><p>${terms(d.txt,ctx)}</p>${d.say?`<div class="say">Say it: <span class="ua" lang="uk">${ua(d.say[0])}</span> <span class="muted">“${esc(d.say[1])}”</span></div>`:""}</div></li>`;}).join("")}</ol>
      <button class="btn ghost dclose" data-close style="margin-top:14px">Close this day</button>`;
    dv.hidden=false;
    dv.querySelectorAll("[data-close]").forEach(c=>c.onclick=()=>{dv.hidden=true;b.setAttribute("aria-expanded","false");b.focus();});
    dv.scrollIntoView({behavior:reduced()?"auto":"smooth",block:"start"});
    $("#dayhead").focus({preventScroll:true});
  });
}


people();
