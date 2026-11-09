import { stat } from 'node:fs/promises';
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const native=(uk,en,tag='span')=>`<${tag} class="learning-uk" lang="uk" data-gloss="${escape(en)}">${escape(uk)}</${tag}>`;
async function data(file){const url=new URL(`../src/assets/js/data/${file}.js`,import.meta.url);url.searchParams.set('v',String((await stat(url)).mtimeMs));return import(url.href);}
export async function courseFragments(){
  const [{WORDS,DIALOGUES,READINGS},{VOCAB},{GAME,FLIPS}]=await Promise.all([data('course'),data('vocabulary'),data('language')]);
  const wordList=WORDS.map(item=>{const v=VOCAB[item.key];return `<details class="word-entry"><summary>${native(v.w,v.en)}</summary><p lang="en" data-i18n-ignore>${escape(v.en)}</p>${native(item.uk,item.en,'p')}<p class="note">${escape(v.note)}</p></details>`;}).join('\n');
  const referenceGlossary=Object.values(VOCAB).sort((a,b)=>a.w.replace(/\u0301/g,'').localeCompare(b.w.replace(/\u0301/g,''),'uk')).map(v=>`<li data-search="${escape([v.w,v.en,v.rom].join(' '))}"><details class="reference-entry"><summary>${native(v.w,v.en)}</summary><p lang="en" data-i18n-ignore>${escape(v.en)}</p><p class="rom">${escape(v.rom)}</p><p class="note">${escape(v.note)}</p></details></li>`).join('\n');
  const phrases=FLIPS.map(([uk,rom,en])=>`<details class="phrase-card"><summary>${native(uk,en)}</summary><p lang="en" data-i18n-ignore>${escape(en)}</p><p class="rom">${escape(rom)}</p></details>`).join('\n');
  const dialogues=DIALOGUES.map((scene,i)=>`<section class="lesson-scene" id="scene-${scene.id}" data-scene="${scene.id}"><h2>${escape(scene.title)}</h2><p class="measure">${escape(scene.situation)}</p><div class="exercise" data-dialogue="${scene.id}"></div><details class="conversation-record"><summary>Your conversation</summary><ol class="conversation-log" id="log-${scene.id}"></ol></details></section>`).join('\n');
  const readings=READINGS.map(reading=>`<section class="lesson-scene" id="reading-${reading.id}" data-reading="${reading.id}"><p class="eyebrow">${reading.level}</p><h2>${escape(reading.title)}</h2><div class="reading-text">${native(reading.uk,reading.en,'p')}</div><div class="exercise" data-reading-exercise="${reading.id}"></div></section>`).join('\n');
  const questions=['хто? що?','кого? чого?','у кому? у чому?','ким? чим?','кого? що?','кому? чому?','звертання'];
  const cases=[0,1,5,4,3,2,6].map(i=>{const g=GAME[i];return `<tr><th scope="row">${escape(g.c)}</th><td lang="uk">${questions[i]}</td><td lang="uk">${escape(g.a)}</td><td>${native(g.s.replace('___',g.a),g.en)}</td></tr>`;}).join('\n');
  return {wordList,phrases,dialogues,readings,cases,referenceGlossary};
}
