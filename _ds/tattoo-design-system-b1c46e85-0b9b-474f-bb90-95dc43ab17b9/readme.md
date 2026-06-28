# 千纸鹤 Tattoo · Design System

> **把故事，轻轻纹在身上。**
> A vintage-botanical, Korean-minimal, literary tattoo studio brand for Kuala Lumpur.

千纸鹤 (Thousand Paper Cranes) is a fine-line / 小清新 tattoo studio. The brand is **not** dark or hardcore — it is gentle, editorial, and story-driven: *复古艺术感 + 植物插画感 + 韩式小清新 + 简约专业感*. It helps people turn a memory, a wish, or a moment into a small, clean, lasting tattoo.

This design system encodes that direction as tokens, components, brand assets, an interactive website kit, and ready social/print collateral.

## Sources
Built from a written brand brief **plus the official logo** (`uploads/Screenshot 2026-06-28 at 8.30.08 PM.png` — a fine-line illustration of a hand releasing an origami paper crane with sparkle accents, over the 千纸鹤 / TATTOO STUDIO / KUALA LUMPUR wordmark). The logo was processed into transparent ink + cream lockups and a standalone crane glyph (see *assets*). The brief covered positioning, audience & pain points, mission/vision, values, personality, voice, slogans, brand story, colour, type, logo, and do/don't lists. **A vector (SVG/AI) of the logo would let us scale it crisply — please share if available.**

---

## CONTENT FUNDAMENTALS — how 千纸鹤 writes

**Languages.** Primarily **Simplified Chinese**, with English used as editorial accents (kickers, labels, slogans, "Fine-line", "Selected Work"). Chinese carries meaning and warmth; English carries the vintage art-book texture.

**Voice.** Like *一个温柔、专业、有审美的纹身师* — a gentle, tasteful, professional tattoo artist. Calm but with quiet strength. Never loud, never rushed, never a hard sell.

**Person.** Warm "we" (我们) toward a soft "you" (你). The studio accompanies — *"我们会陪你慢慢确认"* — rather than instructs or pressures.

**Tone qualities.** 简单 · 温柔 · 真诚 · 不夸张 · 不压迫 · 有一点诗意但不难懂. A little poetic, never obscure.

**Casing & rhythm.** Chinese set with generous letter-spacing on titles (`--ls-cn-wide`) and airy line-height (`--lh-body` 1.72). English labels are UPPERCASE and widely letterspaced (`--ls-label` 0.22em). Lots of negative space — *干净留白*.

**Do say:**
- 「第一次纹身不用紧张，我们会陪你慢慢确认图案、大小和位置。」
- 「有些纹身不是为了被别人看见，而是为了记住某个重要的自己。」
- 「一个小小的图案，也可以装着很长的故事。」
- 「预约开放中，欢迎私讯讨论你的图案。」

**Don't say** (too loud / salesy / pushy):
- ~~「全 KL 最强纹身店！」~~
- ~~「今天不纹明天后悔！」~~ ~~「超便宜，快来抢！」~~
- ~~「马上预约！最后机会！错过没有！」~~

**Emoji:** not part of the brand. Use the botanical glyph `❋`, a dot `·`, or `No.01`-style numerals as ornaments instead.

---

## VISUAL FOUNDATIONS

**Overall feeling.** A well-made botanical field guide / vintage art postcard: 旧书感 · 艺术海报感 · 纸张纹理 · 暖而柔的复古色. Clean, restrained, lots of breathing room — but always reads as a *tattoo* brand (fine-line motifs, body-placement language, aftercare, hygiene), never a florist or café.

**Colour.**
- **Paper neutrals** (`--paper-0…4`, cream → kraft) are the canvas — most surfaces are warm off-white.
- **Forest green** (`--green-1` `#2C3E33`) is the identity colour: literary, elevated, and gender-neutral — it offsets anything too sweet. Used for primary buttons, dark sections, the seal, the footer.
- **Dusty rose** (`--rose-1…4`) is a *sparing* accent for petals, single key words, and tags. Too much → 像美甲店.
- **Ink** text is soft coffee-black (`--ink-0` `#2A2620`), never pure `#000`.

**Type.** Vintage editorial serif for English display (**Cormorant Garamond**), literary 细宋 for Chinese titles & quotes (**Noto Serif SC**, light weights), rounded 黑体 for UI & instructions (**Noto Sans SC**), and a handwritten accent used sparingly (**Ma Shan Zheng**). Weights stay light — *不要太粗*.

**Backgrounds.** Flat warm paper, optionally with a very subtle SVG **grain** overlay (`--grain`, `.paper-grain`). No loud gradients (the only gradients are faint paper-to-paper tints on photo tiles). Dark sections use solid forest green.

**Imagery.** Real fine-line tattoo photos, design scans, skin close-ups — warm, filmic, with lots of negative space. In this kit they are **placeholders** (`PhotoTile`, kraft/mist/rose paper tiles with a faint crane watermark). Drop in real photography for production.

**Borders & frames.** Hairlines (`--border-hair/-soft`) and kraft borders (`--border-default`). A signature **vintage double-line frame** (`.frame-double` / `Card framed`) — a border plus an offset outline — for certificates, aftercare cards, and seals.

**Corner radii.** Soft and restrained: cards `--radius-lg` (14px), inputs `--radius-md` (8px), pills/buttons `--radius-pill`. Framed/print pieces often use square corners. Never bubbly.

**Cards.** Cream surface, hairline border, soft warm shadow (`--shadow-card`), rounded — *or* the squared vintage double-frame. Optional gentle hover lift (−3px, deeper shadow).

**Shadows.** Warm-tinted, low, soft (`--shadow-sm/md/lg` on `rgba(42,38,32,…)`) — paper resting on paper, never crisp neon-UI shadows.

**Motion.** Gentle and slow — `--ease-soft` / `--ease-out`, 140–420ms. Fades and small translates; never bouncy, no infinite decorative loops.

**Hover / press.** Hover: primary buttons darken to `--green-0`; outline/ghost fill with `--surface-sunken`; cards lift. Press: a 1px downward nudge. Inputs focus with a soft forest-green ring (`--focus-ring`).

**Ornaments.** Dotted rules with a botanical center mark (`.rule-dot`, `Divider`), italic `No.01` numerals, letterspaced caps labels, and the circular crane **seal/stamp**.

**Transparency / blur.** Used only on the sticky site header (translucent paper + blur). Otherwise surfaces are opaque.

---

## ICONOGRAPHY

- **Primary mark:** the official **paper crane** — a fine-line origami crane, part of the full logo where a delicate hand releases it amid sparkle accents. Extracted as `assets/crane.png` (ink) and `assets/crane-light.png` (cream), and embedded in the `CraneMark` / `Seal` components. The full lockup lives in `assets/logo-lockup.png` (+ `-light`). Keep it clean and fine-line — never cartoonish or heavy.
- **UI icons:** **Lucide** (CDN) — thin 1.5px line icons that match the fine-line aesthetic (e.g. `instagram`, `arrow-right`, `calendar-heart`). *Substitution flag:* Lucide is a stand-in matching the desired stroke weight; swap for a bespoke set if commissioned.
- **Botanical ornaments:** the Unicode glyph **`❋`** and dot **`·`** stand in for small floral marks. Real fine-line botanical illustrations (leaves, sprigs, petals) should be commissioned and dropped into `assets/` — do **not** hand-draw heavy floral SVGs (keep it from looking like a florist).
- **Emoji:** never.
- **Numerals:** italic Cormorant `No.01` numbering is an icon-like motif for steps, works, and lists.

---

## INDEX — what's in here

**Root**
- `styles.css` — global entry; `@import`s everything below. Consumers link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `readme.md` — this file. `SKILL.md` — portable Agent-Skill wrapper.

**Brand assets** — `assets/`
- `logo-lockup.png` / `logo-lockup-light.png` — the full official logo (hand + origami crane + sparkles + wordmark), transparent, for light / dark surfaces.
- `crane.png` / `crane-light.png` — the standalone fine-line crane glyph (ink / cream) for avatars, seals, watermarks, favicon.

**Foundation cards** — `guidelines/` (Design System tab)
- Colors: Paper, Forest Green, Ink, Dusty Rose · Type: Display, 细宋, 黑体+手写, Scale · Spacing: Scale, Radii, Shadows&Frames · Brand: Logo, Crane Mark, Seal, Voice, Marks&Motifs.

**Components** — `components/` (namespace `window.TattooDesignSystem_b1c46e`)
- core: `Button`, `IconButton`, `Badge`, `Card`, `Divider`, `CraneMark`, `Seal`
- forms: `Input`, `Textarea`, `Select`, `Checkbox`
- content: `Accordion`, `QuoteBlock`
- Starting points: Button, Card, Seal, Accordion.

**UI kit** — `ui_kits/website/`
- Interactive marketing site: Home · Portfolio · Guide · Booking (+ Nav/Footer, PhotoTile). See its `README.md`.

**Collateral** — `collateral/` (Social & Print groups)
- `social-ig-post`, `social-xhs-cover`, `print-business-card`, `print-aftercare`, `print-price`.

**Templates** — `templates/`
- `ig-post/IgPost.dc.html` — editable 1:1 Instagram work post.

---

## CAVEATS / OPEN QUESTIONS
- **Fonts are Google Fonts substitutions** matching the brief's described categories (Cormorant Garamond, Noto Serif SC, Noto Sans SC, Ma Shan Zheng). If you have licensed faces (e.g. a specific 细宋 or a vintage display serif), please share them and I'll wire up `@font-face`. The wordmark in the official logo may use a specific face worth matching.
- **The crane glyph and lockups are raster** (cleanly extracted from the provided logo screenshot). They're sharp at the sizes used here; for billboard-scale or print, a **vector logo** would be ideal — please share if you have one.
- All photography is **placeholder** — real fine-line work photos will transform the kit.
