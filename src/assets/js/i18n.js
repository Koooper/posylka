import translations from './i18n/catalog.js';
import { VOCAB } from './data/vocabulary.js';
import { ua } from './language-tools.js';

const normalize = value => value.replace(/\s+/g, ' ').trim();
const clean = value => value.replace(/\[\[([^\]]+)\]\]/g, '$1');
const dictionary = new Map(Object.entries(translations));
const textRecords = new WeakMap();
const attributeRecords = new WeakMap();
const richRecords = new WeakMap();
const names = Object.fromEntries(Object.entries(translations).filter(([en,uk]) => /^[A-Z][a-z]+$/.test(en) && /^[А-ЯІЇЄҐа-яіїєґʼ’'-]+$/.test(uk)));
let language = 'en';
let storageAvailable=true;
const requestedLanguage=new URLSearchParams(location.search).get('lang');
try {
  language = requestedLanguage || localStorage.getItem('posylka-language') || 'en';
  if(['uk','en'].includes(requestedLanguage))localStorage.setItem('posylka-language',requestedLanguage);
} catch {storageAvailable=false;language=requestedLanguage||'en';}
if (language !== 'uk') language = 'en';
export const getLanguage = () => language;

function translate(value) {
  const key = normalize(value);
  if (dictionary.has(key)) return dictionary.get(key);
  const quoted = key.match(/^([“"«(]?)(.*?)([”"»).]?)$/);
  if (quoted && dictionary.has(quoted[2])) return quoted[1] + dictionary.get(quoted[2]) + quoted[3];
  const month = {Jan:'січ.',Feb:'лют.',Mar:'бер.',Apr:'квіт.',May:'трав.',Jun:'черв.',Jul:'лип.',Aug:'серп.',Sep:'вер.',Oct:'жовт.',Nov:'лист.',Dec:'груд.'};
  const day = {Sun:'нд',Mon:'пн',Tue:'вт',Wed:'ср',Thu:'чт',Fri:'пт',Sat:'сб'};
  if (/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) \d+ [A-Za-z]{3}$/.test(key)) return key.replace(/^[A-Za-z]{3}/, x=>day[x]).replace(/[A-Za-z]{3}$/, x=>month[x]);
  if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/.test(key)) return key.replace(/^[A-Za-z]{3}/,x=>month[x]);
  if (!key.startsWith('Read: ') && /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b/.test(key)) {
    return key.replace(/\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b/g,x=>month[x.slice(0,3)]).replaceAll('(UA)','(укр.)').replace('special project','спецпроєкт');
  }
  if(!key.startsWith('Read: ')&&key.includes('(UA)'))return key.replaceAll('(UA)','(укр.)');
  if (/^\d+ h \d+ min$/.test(key)) return key.replace(' h ', ' год ').replace(' min',' хв');
  if (/^\d+ days \d+ h$/.test(key)) return key.replace(' days ',' дн. ').replace(' h',' год');
  const patterns = [
    [/^Update (\d+) of (\d+)$/, (_,n,total)=>`Оновлення ${n} із ${total}`],
    [/^Stage (\d+) of (\d+):$/, (_,n,total)=>`Етап ${n} із ${total}:`],
    [/^Sentence (\d+) of (\d+)$/, (_,n,total)=>`Речення ${n} із ${total}`],
    [/^Question (\d+) of (\d+)$/, (_,n,total)=>`Запитання ${n} із ${total}`],
    [/^Card (\d+) of (\d+)$/,(_,n,total)=>`Картка ${n} із ${total}`],
    [/^(\d+) of (\d+) words remembered$/,(_,n,total)=>`Запам’ятовано слів: ${n} із ${total}`],
    [/^(\d+) of (\d+) lessons reviewed$/,(_,n,total)=>`Пройдено уроків: ${n} із ${total}`],
    [/^(\d+) terms$/,(_,n)=>`Слів: ${n}`],
    [/^You got (\d+) of (\d+)\.$/, (_,n,total)=>`Ваш результат: ${n} із ${total}.`],
    [/^(In transit|Delivered in) (.+)$/, (_,label,time)=>`${label==='In transit'?'У дорозі':'Доставлено за'} ${translate(time)||time}`],
    [/^(\d+) sources$/,(_,n)=>`Джерел: ${n}`],
    [/^Reference (\d+)$/,(_,n)=>`Джерело ${n}`],
    [/^Back to citation (\d+)$/,(_,n)=>`Назад до цитати ${n}`],
    [/^Read: (.+), (.+) \(opens in a new tab\)$/,(_,title,publisher)=>`Читати: ${translate(title)||title}, ${publisher} (відкриється в новій вкладці)`],
    [/^Barcode for (.+)$/,(_,n)=>`Штрихкод посилки ${n}`],
    [/^Example: (.+)$/,(_,n)=>`Приклад: ${n}`],
    [/^None of the five example parcels starts with (.+?)\.(.*)$/,(_,n,rest)=>`Немає навчальної посилки з номером, що починається на ${n}.${rest?' Це навчальна модель. Справжні номери тут не працюють.':''}`],
    [/^Spend a day with (.+)$/,(_,name)=>`Один день: ${names[name]||name}`],
    [/^What wears on (.+)$/,()=>`Що виснажує`],
    [/^What keeps (.+) going$/,()=>`Що дає сили`],
    [/^Email from (.+)$/,(_,name)=>`Лист від: ${dictionary.get(name)||name}`],
    [/^From: (.+)$/,(_,name)=>`Від: ${translate(name)||name}`],
    [/^\+ (.+)$/,(_,time)=>`+ ${translate(time)||time}`],
    [/^([A-Z][a-z]+):$/,(_,name)=>`${dictionary.get(name)||name}:`],
    [/^\((.+) and (.+)\)$/,(_,first,last)=>`(${dictionary.get(first)||first} і ${dictionary.get(last)||last})`],
    [/^(.+) → (.+)$/,(_,from,to)=>`${dictionary.get(from)||from} → ${dictionary.get(to)||to}`],
  ];
  for (const [pattern, replace] of patterns) if (pattern.test(key)) return key.replace(pattern, replace);
  return null;
}

function prepareHint(element, english) {
  const meaningFor=word=>{
    const meaning=VOCAB[word]?.en;
    return meaning ? meaning.split(',')[0].replace(/^(?:the|a|an) /,'') : word;
  };
  element.dataset.english = english
    .replace(/\b(a|an)\s+\[\[([^\]]+)\]\]/gi,(_,article,word)=>{
      const meaning=meaningFor(word);
      let replacement=/^[aeiou]/i.test(meaning)?'an':'a';
      if(article[0]===article[0].toUpperCase())replacement=replacement[0].toUpperCase()+replacement.slice(1);
      return replacement+' '+meaning;
    })
    .replace(/\[\[([^\]]+)\]\]/g,(_,word)=>meaningFor(word));
  const interactive = element.closest('button,a,summary,input,[role="tab"]');
  if (!interactive && element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
    if (language === 'uk' || element.matches('[data-gloss],.term[lang="uk"]')) {
      if (!element.hasAttribute('tabindex')) {element.tabIndex=0;element.dataset.hintTab='true';}
    } else if (element.dataset.hintTab) {
      element.removeAttribute('tabindex'); delete element.dataset.hintTab;
    }
  }
}

function localize() {
  observer.disconnect();
  for(const gloss of document.querySelectorAll('.status-en,.tr,.say .muted,.sentence-meaning,.sms-meaning,.native-meaning,.f-en,.f-rom,.gloss-meaning,.lat,.sl,.rom')) {
    gloss.lang='en'; gloss.setAttribute('data-i18n-ignore','');
  }
  for (const passage of document.querySelectorAll('.passage[data-source]')) {
    if (!richRecords.has(passage)) richRecords.set(passage, passage.innerHTML);
    const original = passage.dataset.source;
    const ukrainian = translate(original);
    if (ukrainian) {
      if (language === 'uk' && passage.dataset.rendered!=='uk') passage.innerHTML = ua(clean(ukrainian));
      else if (language === 'en' && passage.dataset.rendered === 'uk') passage.innerHTML = richRecords.get(passage);
      passage.dataset.rendered=language;
      passage.lang=language;
      prepareHint(passage, original);
    }
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const parent=node.parentElement;
    if (!parent || parent.closest('script,style,noscript,[data-i18n-ignore],.passage,.translation')) continue;
    const englishAncestor=parent.closest('[lang="en"]');
    if(englishAncestor && englishAncestor!==document.documentElement)continue;
    const english=textRecords.get(node)||node.textContent;
    if(parent.matches('.names-grid .box'))continue;
    const ukrainian=translate(english);
    if (!ukrainian || normalize(english)===normalize(ukrainian)) continue;
    // SVG text cannot contain an HTML span; preserve its SVG text node.
    if (parent.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
      if (!textRecords.has(node)) textRecords.set(node,english);
      node.textContent=language==='uk'?ukrainian:english;
      continue;
    }
    const span=document.createElement('span'); span.className='translation';
    span.dataset.en=english; span.dataset.uk=ukrainian;
    node.replaceWith(span);
  }
  for (const span of document.querySelectorAll('.translation')) {
    const leading=span.dataset.en.match(/^\s*/)[0], trailing=span.dataset.en.match(/\s*$/)[0];
    span.textContent=language==='uk'?leading+span.dataset.uk+trailing:span.dataset.en;
    span.lang=language;
    prepareHint(span,span.dataset.en);
  }
  for (const element of document.querySelectorAll('[aria-label],[placeholder],[title]')) {
    if(element.closest('[data-i18n-ignore]')) continue;
    let originals=attributeRecords.get(element); if(!originals){originals={};attributeRecords.set(element, originals);}
    for(const attr of ['aria-label','placeholder','title']) {
      if(!element.hasAttribute(attr))continue;
      originals[attr] ??= element.getAttribute(attr);
      const translated=translate(originals[attr]);
      if(translated)element.setAttribute(attr,language==='uk'?translated:originals[attr]);
    }
  }
  // Ukrainian supplied in the original also gets English help, without
  // displaying the answer underneath every sentence in immersion mode.
  for(const term of document.querySelectorAll('.term[data-k]')) {
    const item=VOCAB[term.dataset.k]; if(item)prepareHint(term,item.en);
  }
  for(const gloss of document.querySelectorAll('.status-en,.tr,.say .muted,.sentence-meaning,.sms-meaning,.native-meaning,.sl')) {
    const previous=gloss.previousElementSibling;
    if(previous && previous.matches('[lang="uk"],.sentence,.sms'))prepareHint(previous,gloss.textContent.replace(/^[““]|[””]$/g,''));
  }
  for(const flip of document.querySelectorAll('.flip'))prepareHint(flip,flip.querySelector('.f-en').textContent);
  for(const word of document.querySelectorAll('[data-gloss]'))prepareHint(word,word.dataset.gloss);
  if(!storageAvailable)for(const link of document.querySelectorAll('a[href^="/"]')) {
    const url=new URL(link.href);if(url.origin!==location.origin)continue;
    if(language==='uk')url.searchParams.set('lang','uk');else url.searchParams.delete('lang');
    link.setAttribute('href',url.pathname+url.search+url.hash);
  }
  document.documentElement.lang=language;
  document.getElementById('immersion-help').hidden=language!=='uk';
  const control=document.getElementById('language-toggle'); control.hidden=false;
  control.setAttribute('aria-pressed',String(language==='uk'));
  control.lang=language;
  control.setAttribute('aria-label',language==='uk'?'Мова сайту: українська. Перемкнути на англійську':'Site language: English. Switch to Ukrainian');
  control.querySelectorAll('[data-language]').forEach(label=>label.classList.toggle('selected',label.dataset.language===language));
  document.title=language==='uk'?(translate(originalTitle)||originalTitle):originalTitle;
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});
}

let queued=false;
const observer=new MutationObserver(()=>{
  if(queued)return; queued=true;
  queueMicrotask(()=>{queued=false;localize();});
});
const originalTitle=document.title;
const tooltip=document.getElementById('translation-tooltip');
let origin=null, hintSource=null, timer, previousDescription=null, suppressHint=false;
function hideHint(){clearTimeout(timer);tooltip.hidden=true;hintSource=null;if(origin){if(previousDescription)origin.setAttribute('aria-describedby',previousDescription);else origin.removeAttribute('aria-describedby');origin=null;previousDescription=null;}}
function showHint(element){
  if(suppressHint||!element?.dataset.english)return;
  if(language!=='uk'&&!element.matches('[data-gloss],.term[lang="uk"]'))return;
  clearTimeout(timer);
  const anchor=element.closest('button,a,summary')||element;
  if(origin!==anchor){hideHint();previousDescription=anchor.getAttribute('aria-describedby');origin=anchor;}
  hintSource=element;
  tooltip.textContent=element.dataset.english;tooltip.hidden=false;
  anchor.setAttribute('aria-describedby',[previousDescription,'translation-tooltip'].filter(Boolean).join(' '));
  const rect=anchor.getBoundingClientRect();
  if(rect.bottom<64||rect.top>innerHeight){hideHint();return;}
  const height=tooltip.offsetHeight, width=tooltip.offsetWidth;
  tooltip.style.left=Math.max(12,Math.min(rect.left,innerWidth-width-12))+'px';
  tooltip.style.top=(rect.bottom+height+12<innerHeight?rect.bottom+8:Math.max(8,rect.top-height-8))+'px';
}
const hintTarget=target=>target.closest('[data-english]') || target.closest('button,a,summary')?.querySelector('[data-english]');
document.addEventListener('pointerover',event=>{const target=hintTarget(event.target);if(target)showHint(target);});
document.addEventListener('pointerout',event=>{if(!tooltip.contains(event.relatedTarget)&&!origin?.contains(event.relatedTarget))timer=setTimeout(hideHint,150);});
tooltip.addEventListener('pointerenter',()=>clearTimeout(timer));
tooltip.addEventListener('pointerleave',hideHint);
document.addEventListener('focusin',event=>{const target=hintTarget(event.target);if(target)showHint(target);});
document.addEventListener('focusout',()=>{timer=setTimeout(hideHint,100);});
document.addEventListener('click',event=>{
  const target=hintTarget(event.target);
  if(target&&!target.closest('button,a,summary,input'))showHint(target);
  else if(!target&&!tooltip.contains(event.target))hideHint();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){hideHint();suppressHint=true;queueMicrotask(()=>{suppressHint=false;});}});
// Native focus/hover may scroll the passage into view after its event fires.
// Keep that hint attached; dismiss it once the passage is no longer in view.
window.addEventListener('scroll',()=>{
  const source=hintSource;
  if(source && (source.matches(':hover')||origin?.contains(document.activeElement))) {
    requestAnimationFrame(()=>{if(hintSource===source)showHint(source);});
  } else hideHint();
},{passive:true});
window.addEventListener('resize',hideHint);
document.getElementById('language-toggle').addEventListener('click',()=>{
  hideHint(); language=language==='uk'?'en':'uk';
  try{localStorage.setItem('posylka-language',language);}catch{storageAvailable=false;}
  const url=new URL(location.href);if(url.searchParams.has('lang')){url.searchParams.set('lang',language);history.replaceState(null,'',url);}
  localize();
});
localize();
