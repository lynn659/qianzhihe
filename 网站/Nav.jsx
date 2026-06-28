// Sticky top navigation (anchor scroll) + forest-green footer for the 千纸鹤 one-page site.
const NAV_ITEMS = [
  ['home', '首页', 'Home'], ['portfolio', '作品集', 'Work'], ['about', '关于', 'About'],
  ['guide', '新手指南', 'Guide'], ['price', '价目', 'Pricing'], ['booking', '预约', 'Booking'],
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
}

// 中 / EN segmented toggle.
function LangToggle({ compact }) {
  const { lang, setLang } = window.useLang();
  const opts = [['zh', '中'], ['en', 'EN']];
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-pill)', padding: 2, background: 'var(--surface-page)',
    }}>
      {opts.map(([key, label]) => {
        const on = lang === key;
        return (
          <button key={key} onClick={() => setLang(key)} aria-pressed={on} style={{
            border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)',
            padding: compact ? '7px 18px' : '5px 13px', fontFamily: 'var(--font-label)',
            fontSize: compact ? 13 : 12, letterSpacing: '0.14em',
            background: on ? 'var(--brand)' : 'transparent',
            color: on ? 'var(--paper-1)' : 'var(--text-muted)',
            transition: 'all var(--dur-base) var(--ease-soft)',
          }}>{label}</button>
        );
      })}
    </div>
  );
}

function SiteNav() {
  const { CraneMark, Button } = window.TattooDesignSystem_b1c46e;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 980px)');
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('home');

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [open, isMobile]);

  React.useEffect(() => {
    const ids = NAV_ITEMS.map(([k]) => k);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (key) => { setOpen(false); scrollToId(key); };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(245,239,225,0.86)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hair)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer' }}>
          <CraneMark size={36} tone="ink" />
          <span style={{ fontFamily: 'var(--font-song)', fontSize: 21, letterSpacing: '0.22em', textIndent: '0.22em', color: 'var(--text-primary)' }}>千纸鹤</span>
        </button>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {NAV_ITEMS.map(([key, zh, en]) => (
              <button key={key} onClick={() => go(key)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0', whiteSpace: 'nowrap',
                fontFamily: 'var(--font-hei)', fontSize: 14, letterSpacing: '0.1em',
                color: active === key ? 'var(--text-brand)' : 'var(--text-muted)',
                borderBottom: active === key ? '1px solid var(--brand)' : '1px solid transparent',
                transition: 'color var(--dur-base) var(--ease-soft)',
              }}>{t(zh, en)}</button>
            ))}
          </nav>
        )}

        {!isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <LangToggle />
            <Button variant="primary" size="sm" onClick={() => go('booking')}>{t('预约咨询', 'Book')}</Button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LangToggle />
            <button onClick={() => setOpen((o) => !o)} aria-label={t('菜单', 'Menu')} style={{
              background: 'none', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-sm)',
              width: 40, height: 36, display: 'grid', placeItems: 'center', cursor: 'pointer',
            }}>
              <i data-lucide={open ? 'x' : 'menu'} style={{ width: 18, height: 18, color: 'var(--text-primary)' }}></i>
            </button>
          </div>
        )}
      </div>

      {isMobile && open && (
        <div style={{ borderTop: '1px solid var(--border-hair)', background: 'var(--surface-page)', padding: '8px var(--gutter) 18px' }}>
          {NAV_ITEMS.map(([key, zh, en]) => (
            <button key={key} onClick={() => go(key)} style={{
              display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
              padding: '14px 2px', borderBottom: '1px solid var(--border-hair)', cursor: 'pointer',
              fontFamily: 'var(--font-hei)', fontSize: 16, letterSpacing: '0.08em',
              color: active === key ? 'var(--text-brand)' : 'var(--text-body)',
            }}>{t(zh, en)}</button>
          ))}
          <div style={{ marginTop: 16 }}>
            <Button variant="primary" block onClick={() => go('booking')}>{t('预约咨询', 'Book a consult')}</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const { CraneMark } = window.TattooDesignSystem_b1c46e;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 720px)');
  const go = (k) => scrollToId(k);
  return (
    <footer style={{ background: 'var(--surface-ink)', color: 'var(--text-on-dark)', padding: '64px var(--gutter) 40px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 36 }}>
          <div style={{ maxWidth: 340 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <CraneMark size={38} tone="light" />
              <span style={{ fontFamily: 'var(--font-song)', fontSize: 20, letterSpacing: '0.2em' }}>千纸鹤</span>
            </div>
            <p style={{ fontFamily: 'var(--font-song)', fontSize: 15, lineHeight: 1.9, color: 'var(--green-4)', margin: 0 }}>
              {t('把故事，轻轻纹在身上。', 'Wear your story, gently.')}<br />
              {t('预约开放中，欢迎私讯讨论你的图案。', 'Booking is open — message us to talk through your design.')}
            </p>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 40 : 56, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-4)', marginBottom: 14 }}>{t('关于', 'Explore')}</div>
              {[['portfolio', '作品集', 'Work'], ['about', '关于工作室', 'About'], ['guide', '新手指南', 'Guide'], ['price', '价目参考', 'Pricing']].map(([k, zh, en]) => (
                <button key={k} onClick={() => go(k)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'var(--font-hei)', fontSize: 14, color: 'var(--paper-2)', marginBottom: 12 }}>{t(zh, en)}</button>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-4)', marginBottom: 14 }}>{t('联络', 'Contact')}</div>
              {['Instagram', t('小红书', 'RED'), 'WhatsApp', 'Kuala Lumpur'].map((tx) => (
                <div key={tx} style={{ fontSize: 14, color: 'var(--paper-2)', marginBottom: 12 }}>{tx}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 44, paddingTop: 22, borderTop: '1px solid var(--border-on-dark)', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green-4)' }}>
          <span>千纸鹤 Tattoo · Est. 2024</span>
          <span>Botanical · Fine-line · Korean Minimal</span>
        </div>
      </div>
    </footer>
  );
}

window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
window.scrollToId = scrollToId;
