// All page sections for the 千纸鹤 one-page site. Each renders inside a <section id> anchor.
const SECT = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

function Kicker({ children }) {
  return (
    <div style={{ fontFamily: 'var(--font-label)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 12 }}>{children}</div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { Button, Badge } = window.TattooDesignSystem_b1c46e;
  const PhotoTile = window.PhotoTile;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 880px)');
  return (
    <section id="home" data-screen-label="首页" style={{ ...SECT, paddingTop: isMobile ? 48 : 84, paddingBottom: isMobile ? 48 : 72 }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr', gap: isMobile ? 40 : 56, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 26, flexWrap: 'wrap' }}>
            <Badge variant="soft" dot>{t('韩式小清新', 'Korean Minimal')}</Badge>
            <Badge variant="outline">Fine-line</Badge>
            <Badge variant="kraft">{t('复古植物', 'Botanical')}</Badge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-song)', fontWeight: 300, fontSize: 'clamp(2.4rem,5.2vw,4rem)', lineHeight: 1.32, letterSpacing: '0.06em', color: 'var(--text-primary)', margin: 0 }}>
            {t(<>把故事，<br />轻轻纹在身上。</>, <>Wear your story,<br />gently.</>)}
          </h1>
          <p style={{ fontFamily: 'var(--font-hei)', fontWeight: 300, fontSize: 17, lineHeight: 2, color: 'var(--text-muted)', maxWidth: 460, marginTop: 24 }}>
            {t(
              <>千纸鹤是 KL 的文艺韩式小清新纹身工作室。<br />我们相信，一朵小花、一行字，也能装着很长的故事。</>,
              <>Thousand Paper Cranes is a literary, Korean-minimal fine-line tattoo studio in KL.<br />We believe a small flower or a single line can hold a very long story.</>,
            )}
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => window.scrollToId('booking')}>{t('预约咨询', 'Book a consult')}</Button>
            <Button variant="secondary" size="lg" onClick={() => window.scrollToId('portfolio')}>{t('看看作品集', 'See the work')}</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <PhotoTile no="01" label={t('锁骨', 'Collarbone')} tone="kraft" />
          <PhotoTile no="02" label={t('手腕', 'Wrist')} tone="mist" style={{ marginTop: isMobile ? 0 : 32 }} />
          <PhotoTile no="03" label={t('脚踝', 'Ankle')} tone="rose" style={{ marginTop: isMobile ? 0 : -16 }} />
          <PhotoTile no="04" label={t('后颈', 'Nape')} tone="kraft" style={{ marginTop: isMobile ? 0 : 16 }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- VALUES ---------------- */
function Values() {
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 760px)');
  const vals = [
    [t('倾听', 'Listen'), t('先听懂你的故事，再开始设计。', 'We hear your story first, then start to design.')],
    [t('美感', 'Aesthetic'), t('考虑位置、比例、线条与留白。', 'Placement, proportion, line and negative space.')],
    [t('专业', 'Care'), t('清楚的流程、卫生与护理说明。', 'Clear process, hygiene and aftercare.')],
    [t('温柔陪伴', 'Company'), t('第一次纹身，也可以慢慢来。', 'First tattoo? We take it slow with you.')],
  ];
  return (
    <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-hair)', borderBottom: '1px solid var(--border-hair)' }}>
      <div style={{ ...SECT, paddingTop: 52, paddingBottom: 52, display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? 28 : 40 }}>
        {vals.map(([title, d]) => (
          <div key={title}>
            <div style={{ fontFamily: 'var(--font-song)', fontSize: 21, color: 'var(--text-brand)', marginBottom: 10, letterSpacing: '0.1em' }}>{title}</div>
            <div style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--text-muted)' }}>{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
function Portfolio() {
  const { Button } = window.TattooDesignSystem_b1c46e;
  const PhotoTile = window.PhotoTile;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 760px)');
  const filters = [
    ['all', t('全部', 'All')], ['flora', t('植物花卉', 'Botanical')], ['animal', t('蝴蝶 / 动物', 'Animals')],
    ['letter', t('手写字', 'Lettering')], ['symbol', t('月亮 / 符号', 'Symbols')], ['memory', t('情侣 / 纪念', 'Memory')],
  ];
  const [active, setActive] = React.useState('all');
  const works = [
    [t('雏菊', 'Daisy'), t('锁骨', 'Collarbone'), 'kraft', 'flora'],
    [t('细叶尤加利', 'Eucalyptus'), t('前臂', 'Forearm'), 'mist', 'flora'],
    [t('小蝴蝶', 'Butterfly'), t('脚踝', 'Ankle'), 'rose', 'animal'],
    [t('手写日期', 'A date'), t('手腕内侧', 'Inner wrist'), 'kraft', 'letter'],
    [t('月相', 'Moon phases'), t('后颈', 'Nape'), 'mist', 'symbol'],
    [t('铃兰', 'Lily of the valley'), t('肩胛', 'Shoulder'), 'rose', 'flora'],
    [t('燕子', 'Swallow'), t('脚背', 'Foot'), 'kraft', 'animal'],
    [t('一行诗', 'A line of verse'), t('锁骨', 'Collarbone'), 'mist', 'letter'],
    [t('满天星', 'Baby’s breath'), t('手肘', 'Elbow'), 'rose', 'flora'],
  ];
  const shown = active === 'all' ? works : works.filter((w) => w[3] === active);
  return (
    <section id="portfolio" data-screen-label="作品集" style={{ ...SECT, paddingTop: isMobile ? 56 : 76, paddingBottom: 24 }}>
      <Kicker>Selected Works</Kicker>
      <h2 style={{ fontFamily: 'var(--font-song)', fontWeight: 400, fontSize: 'clamp(1.9rem,3.4vw,2.4rem)', letterSpacing: '0.08em', margin: 0 }}>{t('作品集', 'Portfolio')}</h2>
      <p style={{ fontFamily: 'var(--font-song)', fontSize: 16, lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: 540, marginTop: 14 }}>
        {t('每一个图案，都是为它的主人单独设计的。点开看看它们背后的故事。', 'Every design is drawn for one person alone. Look closer — each one carries a story.')}
      </p>
      <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
        {filters.map(([key, label]) => (
          <button key={key} onClick={() => setActive(key)} style={{
            fontFamily: 'var(--font-hei)', fontSize: 13, letterSpacing: '0.06em',
            padding: '8px 18px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
            border: '1px solid ' + (active === key ? 'var(--brand)' : 'var(--border-default)'),
            background: active === key ? 'var(--brand)' : 'transparent',
            color: active === key ? 'var(--paper-1)' : 'var(--text-muted)',
            transition: 'all var(--dur-base) var(--ease-soft)',
          }}>{label}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3,1fr)', gap: isMobile ? 16 : 22, marginTop: 34 }}>
        {shown.map(([name, place, tone], i) => (
          <figure key={name + i} style={{ margin: 0, cursor: 'pointer' }}>
            <PhotoTile no={String(20 + i)} label={place} tone={tone} ratio="4 / 5" />
            <figcaption style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12, gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-song)', fontSize: 16, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>{name}</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>{place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 46 }}>
        <Button variant="secondary" onClick={() => window.scrollToId('booking')}>{t('喜欢这个方向？预约聊聊 →', 'Like this direction? Let’s talk →')}</Button>
      </div>
    </section>
  );
}

/* ---------------- ABOUT / 纹身师介绍 ---------------- */
function About() {
  const { Badge, Divider, QuoteBlock, Seal } = window.TattooDesignSystem_b1c46e;
  const PhotoTile = window.PhotoTile;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 880px)');
  const stats = [
    [t('6 年+', '6 yrs+'), t('细线纹身经验', 'Fine-line experience')],
    [t('1对1', '1-on-1'), t('预约制 · 不赶时间', 'By appointment · unhurried')],
    [t('100%', '100%'), t('客制化设计', 'Custom design')],
  ];
  return (
    <section id="about" data-screen-label="关于" style={{ background: 'var(--surface-sunken)' }}>
      <div style={{ ...SECT, paddingTop: isMobile ? 60 : 90, paddingBottom: isMobile ? 60 : 90 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 40 : 64, alignItems: 'center' }}>
          <div>
            <PhotoTile no={t('艺术家', 'Studio')} label={t('工作室一隅', 'In the studio')} tone="mist" ratio={isMobile ? '4 / 3' : '4 / 5'} />
          </div>
          <div>
            <Kicker>About the Studio</Kicker>
            <h2 style={{ fontFamily: 'var(--font-song)', fontWeight: 300, fontSize: 'clamp(1.9rem,3.6vw,2.6rem)', letterSpacing: '0.06em', margin: '0 0 18px', lineHeight: 1.4 }}>
              {t(<>一间安静的小工作室，<br />只为一个图案、一段故事。</>, <>A quiet little studio —<br />one design, one story at a time.</>)}
            </h2>
            <p style={{ fontFamily: 'var(--font-hei)', fontWeight: 300, fontSize: 16, lineHeight: 2, color: 'var(--text-muted)', maxWidth: 480 }}>
              {t(
                '千纸鹤位于吉隆坡，主理人 Yan 是一位偏爱细线与植物的纹身师。比起把图案做大、做满，我们更在意它和你的身体、和你的故事是否合拍。',
                'Thousand Paper Cranes sits in Kuala Lumpur. Yan, the artist behind it, loves fine lines and botanicals. Rather than making a design big or busy, we care whether it sits well with your body — and your story.',
              )}
            </p>
            <p style={{ fontFamily: 'var(--font-hei)', fontWeight: 300, fontSize: 16, lineHeight: 2, color: 'var(--text-muted)', maxWidth: 480, marginTop: 14 }}>
              {t(
                '工作室采预约制，一次只接待一位客人——让你可以慢慢说，不被打扰地决定。',
                'We work by appointment, one guest at a time — so you can speak slowly and decide undisturbed.',
              )}
            </p>
            <div style={{ display: 'flex', gap: 28, marginTop: 28, flexWrap: 'wrap' }}>
              {stats.map(([n, d]) => (
                <div key={d}>
                  <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 30, color: 'var(--text-brand)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-faint)', marginTop: 8, letterSpacing: '0.04em' }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Badge variant="soft" dot>{t('主理人 · Yan', 'Artist · Yan')}</Badge>
            </div>
          </div>
        </div>
        <div style={{ marginTop: isMobile ? 50 : 76 }}>
          <Divider symbol="❋" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 50, marginTop: 44, flexWrap: 'wrap' }}>
            <QuoteBlock attribution={t('Mei · 锁骨 雏菊', 'Mei · daisy on collarbone')} style={{ flex: '1 1 360px' }}>
              {t('有些纹身不是为了被别人看见，而是为了记住某个重要的自己。', 'Some tattoos aren’t for others to see — they’re to remember an important version of yourself.')}
            </QuoteBlock>
            {!isMobile && <Seal tone="rose" size={160} arc="把故事 · 轻轻纹在身上" />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GUIDE ---------------- */
function Guide() {
  const { Accordion, Badge, Button, Card } = window.TattooDesignSystem_b1c46e;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 880px)');
  const stepCols = useMedia('(max-width: 560px)') ? '1fr' : (isMobile ? '1fr 1fr' : 'repeat(4,1fr)');
  const steps = [
    ['01', t('私讯 / 预约', 'Reach out'), t('把你的想法、参考图、想纹的位置告诉我们。', 'Tell us your idea, references and the placement.')],
    ['02', t('沟通设计', 'Design together'), t('一起确认图案、大小、线条与位置，慢慢来。', 'We confirm motif, size, line and placement — slowly.')],
    ['03', t('当天纹身', 'Tattoo day'), t('干净、专业、舒服的环境，全程陪伴。', 'A clean, calm, professional space — with you throughout.')],
    ['04', t('术后护理', 'Aftercare'), t('附上清楚的护理须知，随时可以问我们。', 'Clear aftercare notes — ask us anytime.')],
  ];
  const faqs = [
    { q: t('第一次纹身会很痛吗？', 'Will my first tattoo hurt a lot?'), a: t('大部分小图案的疼痛感都很轻，像被橡皮筋轻轻弹一下或猫抓一下。我们会陪你慢慢开始，随时可以休息。', 'Most small pieces feel mild — like a rubber band flick or a cat scratch. We start gently and you can rest anytime.') },
    { q: t('哪个位置比较适合新手？', 'Which placement suits beginners?'), a: t('手臂、小腿、肩膀这类肉比较多的位置通常比较友善；锁骨、脚踝偏敏感一些。我们会依你的图案一起建议。', 'Arms, calves and shoulders are usually friendlier; collarbone and ankle are more sensitive. We’ll advise based on your design.') },
    { q: t('小图案会不会容易糊掉？', 'Do small fine-line tattoos blur easily?'), a: t('只要线条粗细与留白处理得当，并按护理须知好好照顾，细线小图也能干净耐看许多年。', 'With the right line weight, spacing and good aftercare, fine-line pieces stay clean for many years.') },
    { q: t('纹身后多久可以洗澡、运动？', 'When can I shower or exercise after?'), a: t('当天可以快速淋浴，但请避免泡水；建议 24–48 小时内不要剧烈运动，等伤口稳定后再恢复。', 'A quick shower is fine the same day, but avoid soaking; skip intense exercise for 24–48 hours until it settles.') },
    { q: t('可以带自己的图来吗？', 'Can I bring my own design?'), a: t('当然可以。我们会在尊重原作的前提下，帮你调整比例与线条，让它更适合你的身体与位置。', 'Of course. We’ll respect the original while adjusting scale and line so it fits your body and placement.') },
  ];
  return (
    <section id="guide" data-screen-label="新手指南" style={{ ...SECT, paddingTop: isMobile ? 56 : 84, paddingBottom: isMobile ? 50 : 70 }}>
      <Kicker>First Tattoo Guide</Kicker>
      <h2 style={{ fontFamily: 'var(--font-serif-display)', fontWeight: 300, fontSize: 'clamp(2.1rem,4vw,3rem)', margin: 0, color: 'var(--text-primary)' }}>{t('新手指南', 'First-Timer Guide')}</h2>
      <p style={{ fontFamily: 'var(--font-song)', fontSize: 16, lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: 540, marginTop: 14 }}>
        {t('第一次纹身不用紧张。这里整理了你最想知道的事，慢慢看就好。', 'No need to be nervous about your first tattoo. Here’s what you’ll most want to know — take your time.')}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: stepCols, gap: 18, marginTop: 34 }}>
        {steps.map(([n, title, d]) => (
          <Card key={n} padding="var(--space-6)">
            <div style={{ fontFamily: 'var(--font-serif-display)', fontStyle: 'italic', fontSize: 30, color: 'var(--text-accent)', marginBottom: 12 }}>No.{n}</div>
            <div style={{ fontFamily: 'var(--font-song)', fontSize: 18, color: 'var(--text-primary)', marginBottom: 8, letterSpacing: '0.06em' }}>{title}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.8, color: 'var(--text-muted)' }}>{d}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr', gap: isMobile ? 32 : 56, alignItems: 'start', marginTop: isMobile ? 46 : 64 }}>
        <div>
          <Badge variant="soft" dot>{t('常见问题', 'FAQ')}</Badge>
          <h3 style={{ fontFamily: 'var(--font-song)', fontWeight: 400, fontSize: 24, letterSpacing: '0.08em', margin: '18px 0 14px' }}>{t('你可能想问的', 'You might be wondering')}</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--text-muted)' }}>
            {t('还有其他疑问？欢迎私讯，我们会温柔地一一回答。', 'More questions? Message us — we’ll answer each one, gently.')}
          </p>
          <div style={{ marginTop: 22 }}>
            <Button variant="primary" onClick={() => window.scrollToId('booking')}>{t('预约咨询', 'Book a consult')}</Button>
          </div>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}

/* ---------------- PRICE ---------------- */
function Price() {
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 720px)');
  const rows = [
    [t('迷你 Mini', 'Mini'), t('小于 3cm · 简单线条', 'Under 3cm · simple line'), t('RM 180 起', 'from RM 180')],
    [t('小图 Small', 'Small'), t('3–6cm · 细线植物 / 字', '3–6cm · fine botanical / lettering'), t('RM 280 起', 'from RM 280')],
    [t('中图 Medium', 'Medium'), t('6–12cm · 含层次细节', '6–12cm · with detail & depth'), t('RM 520 起', 'from RM 520')],
    [t('客制设计 Custom', 'Custom'), t('依故事单独绘制', 'Drawn for your story alone'), t('面议', 'Let’s talk')],
  ];
  return (
    <section id="price" data-screen-label="价目" style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-hair)', borderBottom: '1px solid var(--border-hair)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: isMobile ? '56px var(--gutter)' : '84px var(--gutter)' }}>
        <div style={{ textAlign: 'center' }}>
          <Kicker>Price Reference</Kicker>
          <h2 style={{ fontFamily: 'var(--font-serif-display)', fontWeight: 300, fontSize: 'clamp(2.4rem,4.6vw,3.6rem)', letterSpacing: '0.02em', margin: '4px 0 6px', color: 'var(--text-primary)' }}>Pricing</h2>
          <div style={{ fontFamily: 'var(--font-song)', fontSize: 20, letterSpacing: '0.2em', color: 'var(--text-muted)' }}>{t('价目参考', 'A gentle guide')}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--border-default)', margin: '34px 0 8px' }}>
          <span style={{ height: 1, flex: 1, background: 'currentColor' }}></span>
          <span style={{ color: 'var(--brand-soft)', fontSize: 16, letterSpacing: '0.3em' }}>❋</span>
          <span style={{ height: 1, flex: 1, background: 'currentColor' }}></span>
        </div>
        <div>
          {rows.map(([nm, ds, pr]) => (
            <div key={nm} style={{ display: 'flex', alignItems: 'baseline', gap: 18, padding: '22px 0', borderBottom: '1px solid var(--border-hair)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-song)', fontSize: isMobile ? 21 : 25, letterSpacing: '0.06em', color: 'var(--text-primary)' }}>{nm}</div>
                <div style={{ fontFamily: 'var(--font-hei)', fontSize: 13.5, color: 'var(--text-faint)', marginTop: 5 }}>{ds}</div>
              </div>
              <div style={{ flex: 1, borderBottom: '1px dotted var(--paper-4)', transform: 'translateY(-6px)' }}></div>
              <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: isMobile ? 22 : 27, color: 'var(--text-brand)', whiteSpace: 'nowrap' }}>{pr}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 26, fontFamily: 'var(--font-song)', fontSize: 17, lineHeight: 1.8, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
          {t(<>价格依设计、大小与位置而定。<br />欢迎私讯，我们会先聊聊再给你专属报价。</>, <>Price depends on design, size and placement.<br />Message us — we’ll talk first, then quote just for you.</>)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */
function Booking() {
  const { Input, Select, Textarea, Checkbox, Button, Divider, Seal } = window.TattooDesignSystem_b1c46e;
  const { t } = window.useLang();
  const useMedia = window.useMedia;
  const isMobile = useMedia('(max-width: 880px)');
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  const assurances = [
    t('第一次纹身？我们会一步步陪你确认。', 'First tattoo? We’ll confirm everything with you, step by step.'),
    t('不催促、不推销，慢慢决定都可以。', 'No rushing, no hard sell — decide at your own pace.'),
    t('干净的环境与清楚的护理说明。', 'A clean space and clear aftercare notes.'),
  ];
  return (
    <section id="booking" data-screen-label="预约咨询" style={{ ...SECT, paddingTop: isMobile ? 56 : 84, paddingBottom: isMobile ? 64 : 100 }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 40 : 64, alignItems: 'start' }}>
        <div>
          <Kicker>Booking</Kicker>
          <h2 style={{ fontFamily: 'var(--font-serif-display)', fontWeight: 300, fontSize: 'clamp(2.1rem,4vw,3rem)', margin: 0, color: 'var(--text-primary)' }}>{t('预约咨询', 'Book a Consult')}</h2>
          <p style={{ fontFamily: 'var(--font-song)', fontSize: 16.5, lineHeight: 2, color: 'var(--text-muted)', marginTop: 18, maxWidth: 440 }}>
            {t('填一点点资料就好。我们会先和你聊聊图案的故事、大小和位置，确认都满意了，再约时间。', 'Just a few details. We’ll chat about your design’s story, size and placement first — and only set a date once you’re happy.')}
          </p>
          <div style={{ marginTop: 30 }}>
            <Divider label={t('你可以放心', 'You’re in good hands')} />
            <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {assurances.map((tx) => (
                <li key={tx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--brand-soft)', marginTop: 2 }}>❋</span>{tx}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', padding: 'var(--space-7)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <Seal tone="green" size={150} style={{ margin: '0 auto 26px' }} arc="谢谢你的信任" />
              <h3 style={{ fontFamily: 'var(--font-song)', fontWeight: 400, fontSize: 24, letterSpacing: '0.08em', margin: '0 0 12px' }}>{t('我们收到你的故事了', 'We’ve received your story')}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: 360, margin: '0 auto 26px' }}>
                {t('我们会在 1–2 天内私讯你，一起慢慢确认图案、大小和位置。先深呼吸，不用紧张。', 'We’ll message you within 1–2 days to confirm the design, size and placement together. Take a breath — no need to be nervous.')}
              </p>
              <Button variant="secondary" onClick={() => setSent(false)}>{t('← 返回修改', '← Back to edit')}</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Input label={t('你的称呼', 'Your name')} placeholder={t('怎么称呼你', 'What should we call you')} required />
                <Input label={t('联络方式', 'Contact')} placeholder="IG / WhatsApp" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Select label={t('想纹的位置', 'Placement')} defaultValue={t('手臂', 'Arm')}>
                  <option>{t('手臂', 'Arm')}</option><option>{t('锁骨', 'Collarbone')}</option><option>{t('手腕', 'Wrist')}</option>
                  <option>{t('脚踝', 'Ankle')}</option><option>{t('后颈', 'Nape')}</option><option>{t('还不确定', 'Not sure yet')}</option>
                </Select>
                <Select label={t('大概大小', 'Rough size')} defaultValue={t('小 (3–6cm)', 'Small (3–6cm)')}>
                  <option>{t('迷你 (<3cm)', 'Mini (<3cm)')}</option><option>{t('小 (3–6cm)', 'Small (3–6cm)')}</option>
                  <option>{t('中 (6–12cm)', 'Medium (6–12cm)')}</option><option>{t('还不确定', 'Not sure yet')}</option>
                </Select>
              </div>
              <Textarea label={t('说说你的故事', 'Tell us your story')} hint={t('选填', 'Optional')} rows={4} placeholder={t('这个图案对你的意义、想要的风格，或附上参考图的方向…', 'What this design means to you, the style you like, or a reference direction…')} />
              <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} label={t('我已阅读并了解纹身护理须知，愿意慢慢沟通确认图案。', 'I’ve read the aftercare notes and am happy to confirm the design together, slowly.')} />
              <Button variant="primary" size="lg" block disabled={!agree}>{t('送出预约咨询', 'Send enquiry')}</Button>
              <p style={{ fontFamily: 'var(--font-hei)', fontSize: 12.5, color: 'var(--text-faint)', textAlign: 'center', margin: 0, lineHeight: 1.7 }}>
                {t('送出后我们会私讯你，预约不代表当天一定要纹。', 'We’ll message you after — an enquiry doesn’t commit you to getting tattooed.')}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.Values = Values;
window.Portfolio = Portfolio;
window.About = About;
window.Guide = Guide;
window.Price = Price;
window.Booking = Booking;
