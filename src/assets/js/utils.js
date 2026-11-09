export const $ = (s,el=document)=>el.querySelector(s);
export const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
export const fmtNum = n => n.replace(/(\d{2})(\d{0,4})(\d{0,4})(\d{0,4})/,(m,a,b,c,d)=>[a,b,c,d].filter(Boolean).join(" "));
export const initials = n => n.split(/\s+/).filter(w=>/^[A-ZА-ЯІЇЄҐ]/.test(w)).slice(0,2).map(w=>w[0]).join("") || "•";
export const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
