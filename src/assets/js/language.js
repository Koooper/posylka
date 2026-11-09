import { GAME, FORMS, QUIZ } from './data/language.js';
import { $, esc } from './utils.js';
import { markAnswer } from './answer-feedback.js';
import { initializeLanguageCourse } from './language-course.js';
import { initializeCourseProgress,markLessonReviewed } from './lesson-progress.js';

function reference(){
  const entries=[...document.querySelectorAll('#glossary > li')];
  const normalize=value=>value.toLocaleLowerCase().replace(/\u0301/g,'').trim();
  function render(){
    const query=normalize($('#glossary-search').value);
    const found=entries.filter(entry=>{const match=normalize(entry.dataset.search).includes(query);entry.hidden=!match;return match;});
    $('#glossary-count').textContent=`${found.length} terms`;
    $('#glossary-empty').hidden=found.length>0;
  }
  $('#reference-search').hidden=false;
  $('#glossary-search').addEventListener('input',render);
  render();
}

/* ---------- case game ---------- */
let gi=0;
function game(focus){
  const g=GAME[gi], root=$("#game");
  const opts=[...FORMS].sort(()=>Math.random()-.5);
  root.innerHTML=`<div class="muted" style="font-size:.9rem">Sentence ${gi+1} of ${GAME.length}</div>
   <div class="sentence" id="gsent" lang="uk" tabindex="-1">${esc(g.s).replace("___",'<span class="blank" id="blank">&nbsp;?&nbsp;</span>')}</div>
   <div class="muted sentence-meaning" style="margin:-6px 0 14px">“${esc(g.en)}”</div>
   <div class="opts">${opts.map(o=>`<button lang="uk" data-f="${esc(o)}">${esc(o)}</button>`).join("")}</div>
   <div class="fb" id="gfb" role="status"></div>`;
  if(focus) $("#gsent").focus();
  root.querySelectorAll(".opts button").forEach(b=>b.addEventListener("click",()=>{
    if(b.getAttribute("aria-disabled")==="true") return;
    if(b.dataset.f===g.a){
      root.querySelectorAll(".opts button").forEach(x=>x.disabled=true);
      markAnswer(b,true,true); $("#blank").textContent=g.a;
      $("#gfb").innerHTML=`<b>Correct.</b> <b>${g.c}.</b> ${esc(g.why)}<br>`+(gi<GAME.length-1?'<button class="btn ghost" id="gnext" style="margin-top:8px">Next sentence</button>':'<b>All seven cases done.</b> <button class="btn ghost" id="gagain" style="margin-top:8px">Play again</button>');
      const n=$("#gnext"); if(n){n.onclick=()=>{gi++;game(true);}; n.focus();}
      const a=$("#gagain"); if(a){a.onclick=()=>{gi=0;game(true);}; a.focus();}
      if(gi===GAME.length-1)markLessonReviewed('grammar');
    } else { markAnswer(b,false,true); b.setAttribute("aria-disabled","true"); $("#gfb").textContent="Not this one. Think about what the phrase is doing: who, of what, where, by what means, to whom?"; }
  }));
}

/* ---------- quiz ---------- */
let qi=0, qs=0;
function quiz(focus){
  const root=$("#quiz");
  if(qi>=QUIZ.length){root.innerHTML=`<p class="score" id="qscore" tabindex="-1">You got ${qs} of ${QUIZ.length}.</p><p>${qs===QUIZ.length?"Ready to work a shift at the terminal.":'Try <a href="/track/">following a parcel</a>, then come back for another round.'}</p><button class="btn ghost" id="qagain">Try again</button>`; $("#qagain").onclick=()=>{qi=0;qs=0;quiz(true);}; if(focus) $("#qscore").focus(); return;}
  const q=QUIZ[qi];
  root.innerHTML=`<div class="muted" style="font-size:.9rem">Question ${qi+1} of ${QUIZ.length}</div><p class="qq" id="qq" tabindex="-1">${esc(q.q)}</p><div class="opts">${q.o.map((o,i)=>`<button data-i="${i}">${esc(o)}</button>`).join("")}</div><div class="fb" id="qfb" role="status"></div>`;
  if(focus) $("#qq").focus();
  root.querySelectorAll(".opts button").forEach(b=>b.addEventListener("click",()=>{
    const ok=+b.dataset.i===q.a;
    root.querySelectorAll(".opts button").forEach((x,j)=>{x.disabled=true; if(j===q.a) markAnswer(x,true,x===b);});
    if(!ok) markAnswer(b,false,true); else qs++;
    $("#qfb").innerHTML=`<b>${ok?"Correct.":"Not quite."}</b> ${esc(q.ex)}<br><button class="btn ghost" id="qnext" style="margin-top:8px">${qi<QUIZ.length-1?"Next question":"See your score"}</button>`;
    $("#qnext").onclick=()=>{qi++;quiz(true);}; $("#qnext").focus();
  }));
}


initializeCourseProgress();
initializeLanguageCourse();
if($('#game'))game();
if($('#quiz'))quiz();
if($('#glossary'))reference();
