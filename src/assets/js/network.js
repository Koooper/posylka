import { INNO, RECEIPT } from './data/network.js';
import { $, esc } from './utils.js';
document.documentElement.classList.add('js-tabs');
  $("#inno").innerHTML=INNO.map(x=>`<div class="box"><span class="tag ${x.tag==="New"?"new":""}">${esc(x.tag)}</span><h3>${esc(x.h)}</h3><p>${esc(x.p)}</p></div>`).join("");
  $("#receipt-lines").innerHTML=RECEIPT.map(r=>`<div class="line"><span>${esc(r[0])}${r[2]?`<small>${esc(r[2])}</small>`:""}</span><b>${esc(r[1])}</b></div>`).join("");

  const tabs=[...document.querySelectorAll('[role="tab"]')];
  function select(t){tabs.forEach(x=>{const on=x===t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute("aria-controls")).classList.toggle("on",on);});}
  document.querySelectorAll('[role="tabpanel"]').forEach(p=>p.tabIndex=0);
  tabs.forEach((t,i)=>{t.tabIndex=i===0?0:-1;t.addEventListener("click",()=>select(t));t.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){const n=tabs[(i+(e.key==="ArrowRight"?1:tabs.length-1))%tabs.length];n.focus();select(n);}});});
  document.querySelectorAll("[data-sms]").forEach(b=>b.addEventListener("click",()=>{
    $("#sms-reveal").innerHTML=(b.dataset.sms==="scam"?"<b>Right: it’s a scam.</b> ":"<b>It’s a scam.</b> ")+"Nova Post warned about exactly this message. Red flags: an unknown sender, urgency, and a link to a look-alike website. Check the status in the official app instead. Useful word: <span lang=\"uk\" class=\"ua\">індекс</span> = postcode.";
  }));
