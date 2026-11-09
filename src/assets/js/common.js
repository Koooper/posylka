import { getLanguage } from './i18n.js';
// Keep bookmarks from the original single-page handoff useful.
const oldSections = {
  track: '/track/', journey: '/track/#journey', behind: '/people/',
  questions: '/questions/', inside: '/network/', numbers: '/network/#numbers',
  ukrainian: '/language/', sources: '/sources/',
};
if (location.pathname === '/') {
  const hash = location.hash.slice(1);
  const destination = oldSections[hash] || (/^(ref|cite)-/.test(hash) ? `/questions/#${hash}` : null);
  if (destination) {
    const target=new URL(destination,location.origin);
    if(getLanguage()==='uk')target.searchParams.set('lang','uk');
    location.replace(target);
  }
}
if(location.pathname==='/language/'){
  const legacy={game:'/language/grammar/#game',quiz:'/language/reading/#quiz',glossary:'/language/reference/#glossary',flips:'/language/conversation/#phrases'};
  const destination=legacy[location.hash.slice(1)];
  if(destination){const target=new URL(destination,location.origin);if(getLanguage()==='uk')target.searchParams.set('lang','uk');location.replace(target);}
}

const menu = document.querySelector('.mnav');
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
document.addEventListener('click', event => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});
