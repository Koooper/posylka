const ids=['words','conversation','grammar','reading'];
const key='posylka-lessons-v1';
let saved={}, persistent=true;
try {saved=JSON.parse(localStorage.getItem(key)||'{}');} catch {persistent=false;}
let progress=Object.fromEntries(ids.map(id=>[id,['started','reviewed'].includes(saved?.[id])?saved[id]:'new']));
function write(){
  try{localStorage.setItem(key,JSON.stringify(progress));}catch{persistent=false;}
  render();
}
function render(){
  for(const note of document.querySelectorAll('[data-progress-note]'))note.textContent=persistent?'Progress stays in this browser.':'Progress is temporary here; the lessons still work.';
  for(const status of document.querySelectorAll('[data-lesson-status]')){
    const state=progress[status.dataset.lessonStatus];
    status.hidden=false;status.classList.toggle('is-reviewed',state==='reviewed');
    status.innerHTML=`<span aria-hidden="true">${state==='reviewed'?'✓':state==='started'?'→':'○'}</span> <span>${state==='reviewed'?'Reviewed':state==='started'?'In progress':'Not started'}</span>`;
  }
  for(const badge of document.querySelectorAll('[data-completion]'))badge.hidden=progress[badge.dataset.completion]!=='reviewed';
  const counter=document.getElementById('course-progress-count');
  if(counter)counter.textContent=`${ids.filter(id=>progress[id]==='reviewed').length} of ${ids.length} lessons reviewed`;
}
export function markLessonReviewed(id){
  if(!ids.includes(id))return;
  progress[id]='reviewed';write();
}
export function initializeCourseProgress(){
  const id=document.querySelector('[data-language-lesson]')?.dataset.languageLesson;
  if(ids.includes(id)&&progress[id]==='new'){progress[id]='started';write();}
  const root=document.getElementById('course-progress');if(root)root.hidden=false;
  document.getElementById('reset-course')?.addEventListener('click',()=>{progress=Object.fromEntries(ids.map(id=>[id,'new']));write();});
  render();
}
