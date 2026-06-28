// Placeholder for a real tattoo photograph — vintage paper tile with crane watermark.
// In production, drop in real work photos (warm, filmic, lots of skin + negative space).
function PhotoTile({ label = '作品', no = '01', ratio = '3 / 4', tone = 'kraft', style = {} }) {
  const tones = {
    kraft: 'linear-gradient(150deg, var(--paper-3), var(--paper-2))',
    mist: 'linear-gradient(150deg, var(--green-5), var(--paper-2))',
    rose: 'linear-gradient(150deg, var(--rose-4), var(--paper-2))',
  };
  return (
    <div style={{
      position: 'relative', aspectRatio: ratio, width: '100%',
      background: tones[tone] || tones.kraft,
      borderRadius: 'var(--radius-md)', overflow: 'hidden',
      display: 'grid', placeItems: 'center', ...style,
    }}>
      <div style={{ position: 'absolute', inset: 10, border: '1px solid rgba(42,38,32,0.14)', borderRadius: 'var(--radius-sm)' }}></div>
      <img src="assets/crane.png" alt="" style={{ width: '32%', maxWidth: 72, opacity: 0.22 }} />
      <span style={{
        position: 'absolute', bottom: 14, left: 14,
        fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'var(--ink-2)',
      }}>{label} · No.{no}</span>
    </div>
  );
}

// Shared responsive hook — re-renders on viewport breakpoint changes.
function useMedia(query) {
  const get = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = React.useState(get);
  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const on = () => setMatches(mql.matches);
    on();
    mql.addEventListener('change', on);
    return () => mql.removeEventListener('change', on);
  }, [query]);
  return matches;
}

window.PhotoTile = PhotoTile;
window.useMedia = useMedia;
