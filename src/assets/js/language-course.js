import { WORDS, UPDATES, DIALOGUES, READINGS } from './data/course.js';
import { VOCAB } from './data/vocabulary.js';
import { $,esc } from './utils.js';
import { ua } from './language-tools.js';
import { markAnswer } from './answer-feedback.js';
import { markLessonReviewed } from './lesson-progress.js';
import './glossary.js';

const native=(uk,en,tag='span',linkWords=false)=>`<${tag} class="learning-uk" lang="uk" data-gloss="${esc(en)}">${linkWords?ua(uk):esc(uk)}</${tag}>`;

// Practice permits retries. A completion means the learner has worked through
// the material; it is not an exam score or a claim about language proficiency.
function exercise(root,questions,{id,onFinish,onAnswer,onReset}={}){
  let index=0;
  const render=(focus=false)=>{
    if(index===questions.length){
      root.innerHTML=`<h3 id="${id}-complete" tabindex="-1">Practice complete</h3><p>You have worked through every question. Try again whenever you want a refresher.</p><button class="btn ghost" type="button" data-retry>Try again</button>`;
      root.querySelector('[data-retry]').onclick=()=>{index=0;onReset?.();render(true);};
      onFinish?.();
      if(focus)root.querySelector('h3').focus();
      return;
    }
    const q=questions[index];
    root.innerHTML=`<p class="note">Question ${index+1} of ${questions.length}</p>
      ${q.uk?native(q.uk,q.en,'p',true):''}
      <h3 id="${id}-prompt" tabindex="-1">${esc(q.question)}</h3>
      <div class="opts course-options">${q.options.map((option,i)=>`<button type="button" data-choice="${i}">${native(option.uk,option.en)}</button>`).join('')}</div>
      <div class="fb" id="${id}-feedback" role="status"></div>`;
    if(focus)root.querySelector('h3').focus();
    root.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
      if(button.getAttribute('aria-disabled')==='true')return;
      const correct=+button.dataset.choice===q.answer;
      markAnswer(button,correct,true);
      const feedback=root.querySelector('.fb');
      feedback.innerHTML=`<b>${correct?'Correct.':'Not quite.'}</b> ${esc(q.explanation)}`;
      if(!correct){button.setAttribute('aria-disabled','true');return;}
      root.querySelectorAll('[data-choice]').forEach(b=>{b.disabled=true;});
      onAnswer?.(q,q.options[q.answer]);
      const next=document.createElement('button');next.className='btn ghost';next.type='button';next.dataset.continue='';
      next.textContent=index<questions.length-1?'Continue':'Finish practice';
      next.onclick=()=>{index++;render(true);};feedback.append(document.createElement('br'),next);next.focus();
    }));
  };
  render();
}

function vocabulary(){
  const root=$('#word-deck');
  let queue=WORDS.map((_,i)=>i),remembered=new Set(),updatesDone=false;
  const complete=()=>{if(remembered.size===WORDS.length&&updatesDone)markLessonReviewed('words');};
  function card(focus=false){
    if(!queue.length){
      root.innerHTML=`<h3 tabindex="-1">All twelve words reviewed</h3><p>Keep going with the tracking updates, or review the cards again.</p><button class="btn ghost" type="button" data-review-all>Review the cards again</button>`;
      root.querySelector('[data-review-all]').onclick=()=>{queue=WORDS.map((_,i)=>i);remembered.clear();card(true);};
      complete();if(focus)root.querySelector('h3').focus();return;
    }
    const index=queue[0],item=WORDS[index],word=VOCAB[item.key];
    root.innerHTML=`<p class="note">Card ${index+1} of ${WORDS.length}</p><h3 class="word-prompt" tabindex="-1">${native(word.w,word.en)}</h3>
      ${native(item.uk,item.en,'p',true)}
      <p class="note">${remembered.size} of ${WORDS.length} words remembered</p>
      <button class="btn" type="button" data-reveal>Reveal meaning</button>
      <div class="word-answer" hidden><p lang="en" data-i18n-ignore><b>${esc(word.en)}</b></p><p lang="en" data-i18n-ignore>${esc(item.en)}</p><div class="word-decisions"><button class="btn ghost" type="button" data-remember><span aria-hidden="true">✓</span> <span>I remembered it</span></button><button class="btn ghost" type="button" data-review><span aria-hidden="true">↻</span> <span>Review again</span></button></div></div>`;
    if(focus)root.querySelector('h3').focus();
    root.querySelector('[data-reveal]').onclick=()=>{root.querySelector('.word-answer').hidden=false;root.querySelector('[data-reveal]').hidden=true;root.querySelector('[data-remember]').focus();};
    root.querySelector('[data-remember]').onclick=()=>{remembered.add(queue.shift());card(true);};
    root.querySelector('[data-review]').onclick=()=>{queue.push(queue.shift());card(true);};
  }
  card();
  exercise($('#updates-practice'),UPDATES,{id:'updates',onFinish:()=>{updatesDone=true;complete();}});
}

function switcher(root,items,prefix,selector){
  root.hidden=false;
  root.innerHTML=items.map((item,i)=>`<button type="button" data-scene-id="${item.id}" aria-pressed="${i===0}" aria-controls="${prefix}-${item.id}">${esc(item.title)}</button>`).join('');
  const panels=[...document.querySelectorAll(selector)];
  function select(id){
    panels.forEach(panel=>{panel.hidden=panel.id!==`${prefix}-${id}`;});
    root.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sceneId===id)));
  }
  root.addEventListener('click',event=>{const button=event.target.closest('[data-scene-id]');if(button)select(button.dataset.sceneId);});
  select(items[0].id);
}

function conversations(){
  const completed=new Set();
  switcher($('#dialogue-switch'),DIALOGUES,'scene','[data-scene]');
  for(const scene of DIALOGUES){
    const log=$(`#log-${scene.id}`);
    exercise(document.querySelector(`[data-dialogue="${scene.id}"]`),scene.turns,{
      id:`dialogue-${scene.id}`,
      onReset:()=>log.replaceChildren(),
      onAnswer:(question,answer)=>{
        const item=document.createElement('li');
        item.innerHTML=`<p><b>Operator</b> ${native(question.uk,question.en)}</p><p><b>You</b> ${native(answer.uk,answer.en)}</p>`;
        log.append(item);
      },
      onFinish:()=>{
        completed.add(scene.id);
        const button=document.querySelector(`[data-scene-id="${scene.id}"]`);
        if(!button.querySelector('.scene-reviewed'))button.insertAdjacentHTML('beforeend','<span class="scene-reviewed"><span aria-hidden="true">✓</span> <span>Reviewed</span></span>');
        if(completed.size===DIALOGUES.length)markLessonReviewed('conversation');
      }
    });
  }
}

function reading(){
  const completed=new Set();
  switcher($('#reading-switch'),READINGS,'reading','[data-reading]');
  for(const story of READINGS)exercise(document.querySelector(`[data-reading-exercise="${story.id}"]`),story.questions,{
    id:`reading-${story.id}`,
    onFinish:()=>{
      completed.add(story.id);
      const button=document.querySelector(`[data-scene-id="${story.id}"]`);
      if(!button.querySelector('.scene-reviewed'))button.insertAdjacentHTML('beforeend','<span class="scene-reviewed"><span aria-hidden="true">✓</span> <span>Reviewed</span></span>');
      if(completed.size===READINGS.length)markLessonReviewed('reading');
    }
  });
}

export function initializeLanguageCourse(){
  // Add the existing word glossary to authored examples without nesting a
  // button inside another control or a disclosure summary.
  for(const text of document.querySelectorAll('.learning-uk'))if(!text.closest('button,summary'))text.innerHTML=ua(text.textContent);
  if($('#word-deck'))vocabulary();
  if($('#dialogue-switch'))conversations();
  if($('#reading-switch'))reading();
}
