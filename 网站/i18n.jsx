// Lightweight global language store + hook for the 千纸鹤 site.
// t(zh, en) returns the right string for the current language.
const langStore = {
  lang: (typeof localStorage !== 'undefined' && localStorage.getItem('zzh-lang')) || 'zh',
  listeners: new Set(),
  set(l) {
    this.lang = l;
    try { localStorage.setItem('zzh-lang', l); } catch (e) {}
    document.documentElement.lang = l === 'zh' ? 'zh' : 'en';
    this.listeners.forEach((fn) => fn());
  },
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
};

function useLang() {
  const lang = React.useSyncExternalStore(
    (cb) => langStore.subscribe(cb),
    () => langStore.lang,
    () => langStore.lang,
  );
  const t = React.useCallback((zh, en) => (lang === 'zh' ? zh : (en !== undefined ? en : zh)), [lang]);
  return { lang, setLang: (l) => langStore.set(l), t };
}

window.useLang = useLang;
window.langStore = langStore;
