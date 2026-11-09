import { readFile, stat } from 'node:fs/promises';
import * as parcels from '../src/assets/js/data/parcels.js';
import * as people from '../src/assets/js/data/people.js';
import * as research from '../src/assets/js/data/questions.js';
import * as network from '../src/assets/js/data/network.js';
import * as language from '../src/assets/js/data/language.js';
import * as vocabulary from '../src/assets/js/data/vocabulary.js';
import * as course from '../src/assets/js/data/course.js';

const source = { parcels, people, research, network, language, vocabulary, course };
export function messages(group) {
  const result = {};
  function walk(value, path) {
    if (typeof value === 'string') {
      if (!/[A-Za-z]{2}/.test(value) || /^https?:/.test(value)) return;
      const key = path.at(-1);
      if (group === 'parcels' && (path[0] !== 'PARCELS' || ['id','num','n','ts','who','sp','en','k','ico','app'].includes(key) || path.includes('stops') || path.includes('sayC') || path.includes('sayS'))) return;
      if (group === 'people' && (['id','who','t','k'].includes(key) || path.includes('say'))) return;
      if (group === 'research' && (path[0] === 'RECOVERY' || ['u','o','d','c','tr'].includes(key))) return;
      if (group === 'language' && (path[0] === 'FLIPS' || key === 'en')) return;
      if (group === 'vocabulary' && (path[0] !== 'VOCAB' || key !== 'note')) return;
      if (group === 'course' && ['id','key','en','level'].includes(key)) return;
      // Research bodies contain HTML and citation markers. Translate their text
      // segments while leaving links, emphasis and citation IDs intact.
      if (/[<>]|\[\[cite:/.test(value)) {
        let i = 0;
        for (const segment of value.split(/<[^>]*>|\[\[cite:[^\]]+\]\]/g)) {
          if (/[A-Za-z]{2}/.test(segment)) result[[...path, i++].join('.')] = segment.trim();
        }
      } else result[path.join('.')] = value.trim();
    } else if (value && typeof value === 'object') {
      for (const [key, child] of Object.entries(value)) walk(child, [...path, key]);
    }
  }
  walk(source[group], []);
  const seen = new Set();
  return Object.fromEntries(Object.entries(result).filter(([,text]) => {
    if (seen.has(text)) return false;
    seen.add(text);
    return true;
  }));
}

export async function catalog() {
  // The preview process stays alive between builds. Re-read data modules when
  // their files change so edited English copy and its locale stay in sync.
  await Promise.all(Object.entries({parcels:'parcels',people:'people',research:'questions',network:'network',language:'language',vocabulary:'vocabulary',course:'course'}).map(async([group,file])=>{
    const url=new URL(`../src/assets/js/data/${file}.js`,import.meta.url);
    const modified=(await stat(url)).mtimeMs;
    url.searchParams.set('v',String(modified));
    source[group]=await import(url.href);
  }));
  const entries = new Map();
  for (const file of ['interface','pages','sources','course-ui']) {
    const values=JSON.parse(await readFile(new URL(`../src/locales/uk/${file}.json`, import.meta.url), 'utf8'));
    for(const entry of Object.entries(values))entries.set(...entry);
  }
  for (const group of Object.keys(source)) {
    const translations = JSON.parse(await readFile(new URL(`../src/locales/uk/${group}.json`, import.meta.url), 'utf8'));
    const originals=messages(group);
    for (const [id, english] of Object.entries(originals)) {
      const translation = translations[id] || entries.get(english);
      if (!translation) throw new Error(`Missing Ukrainian translation: ${group}.${id}`);
      entries.set(english, translation);
    }
    for (const id of Object.keys(translations)) {
      if (!(id in originals)) throw new Error(`Stale Ukrainian translation: ${group}.${id}`);
    }
  }
  for (const [english, ukrainian] of Object.entries(source.vocabulary.NAMES)) entries.set(english, ukrainian);
  for(const parcel of source.parcels.PARCELS)parcel.stops.forEach((english,i)=>entries.set(english,source.parcels.STOPS_UA[parcel.id][i]));
  return Object.fromEntries([...entries].map(([en,uk]) => [en.replace(/\s+/g,' ').trim(),uk]));
}
