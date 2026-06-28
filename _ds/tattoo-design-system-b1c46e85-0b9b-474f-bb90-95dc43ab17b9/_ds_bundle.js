/* @ds-bundle: {"format":3,"namespace":"TattooDesignSystem_b1c46e","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"QuoteBlock","sourcePath":"components/content/QuoteBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"CraneMark","sourcePath":"components/core/Seal.jsx"},{"name":"Seal","sourcePath":"components/core/Seal.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"b786ff4f64eb","components/content/QuoteBlock.jsx":"4314253e8b75","components/core/Badge.jsx":"b95c7616a6f7","components/core/Button.jsx":"0cc7bc3f0793","components/core/Card.jsx":"64799be16385","components/core/Divider.jsx":"f8c89abed701","components/core/IconButton.jsx":"2a1672586453","components/core/Seal.jsx":"226dc06d363a","components/core/craneAsset.js":"0af1b13cc58f","components/forms/Checkbox.jsx":"e93dbaa99eec","components/forms/Input.jsx":"cdb1bd504067","ui_kits/website/BookingScreen.jsx":"2b0d7786e4c3","ui_kits/website/GuideScreen.jsx":"abf4bd1bf423","ui_kits/website/HomeScreen.jsx":"89ed0d29e9cd","ui_kits/website/Nav.jsx":"3b0c8795884b","ui_kits/website/PhotoTile.jsx":"2d49e125766c","ui_kits/website/PortfolioScreen.jsx":"8a50bf0bf601"},"inlinedExternals":[],"unexposedExports":[{"name":"craneInk","sourcePath":"components/core/craneAsset.js"},{"name":"craneLight","sourcePath":"components/core/craneAsset.js"}]} */

(() => {

const __ds_ns = (window.TattooDesignSystem_b1c46e = window.TattooDesignSystem_b1c46e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FAQ accordion — built for 新手教育 ("第一次纹身会痛吗？" …).
 * items: [{ q, a }]. Gentle hairline rows, no heavy chrome.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-hair)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-hair)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '20px 4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-song)',
        fontSize: '18px',
        color: isOpen ? 'var(--text-brand)' : 'var(--text-primary)',
        letterSpacing: '0.04em',
        transition: 'color var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 22,
        height: 22,
        position: 'relative',
        transform: isOpen ? 'rotate(90deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)',
        color: 'var(--brand-soft)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 22 22",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 5v12M5 11h12"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? '320px' : '0',
        overflow: 'hidden',
        transition: 'max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-soft)',
        opacity: isOpen ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 4px 22px',
        fontFamily: 'var(--font-hei)',
        fontSize: '15px',
        lineHeight: 1.85,
        color: 'var(--text-muted)',
        maxWidth: '60ch'
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Editorial pull-quote for stories behind a tattoo. */
function QuoteBlock({
  children,
  attribution = null,
  lang = 'cn',
  align = 'left',
  style = {},
  ...rest
}) {
  const fontFamily = lang === 'cn' ? 'var(--font-song)' : 'var(--font-serif-display)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-display)',
      fontSize: '56px',
      lineHeight: 0.6,
      color: 'var(--brand-soft)',
      marginBottom: '14px',
      height: '28px'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily,
      fontWeight: 300,
      fontSize: lang === 'cn' ? '24px' : '30px',
      lineHeight: lang === 'cn' ? 1.85 : 1.4,
      letterSpacing: lang === 'cn' ? '0.06em' : '0',
      fontStyle: lang === 'en' ? 'italic' : 'normal',
      color: 'var(--text-primary)',
      maxWidth: '24ch',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '18px',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "\u2014 ", attribution));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small editorial tag — tattoo styles, motifs, meta. Letterspaced. */
function Badge({
  children,
  variant = 'outline',
  dot = false,
  style = {},
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid var(--brand)'
    },
    solid: {
      background: 'var(--brand)',
      color: 'var(--paper-1)',
      border: '1px solid var(--brand)'
    },
    soft: {
      background: 'var(--surface-mist)',
      color: 'var(--green-2)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--rose-4)',
      color: 'var(--rose-1)',
      border: '1px solid transparent'
    },
    kraft: {
      background: 'var(--surface-kraft)',
      color: 'var(--ink-1)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.7
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 千纸鹤 Button — gentle, editorial. Forest-green primary by default.
 * Tone matters: labels stay calm ("预约咨询", not "立即抢购").
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px',
      gap: '7px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '14px',
      gap: '9px'
    },
    lg: {
      padding: '15px 34px',
      fontSize: '15px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--paper-1)',
      border: '1px solid var(--brand)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid var(--border-default)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--paper-0)',
      border: '1px solid var(--accent)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-hei)',
    fontWeight: 500,
    letterSpacing: '0.08em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
    textDecoration: 'none',
    boxSizing: 'border-box',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const El = as;
  const hoverBg = {
    primary: 'var(--brand-deep)',
    secondary: 'var(--surface-sunken)',
    accent: 'var(--rose-1)',
    ghost: 'var(--surface-sunken)'
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    style: base,
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: e => {
      if (!disabled) {
        if (variant === 'primary' || variant === 'accent') e.currentTarget.style.background = hoverBg[variant];else e.currentTarget.style.background = hoverBg[variant];
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Paper card. Optional vintage double-line frame and hover lift. */
function Card({
  children,
  framed = false,
  hover = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const frameStyle = framed ? {
    border: '1px solid var(--border-default)',
    outline: '1px solid var(--border-default)',
    outlineOffset: '5px'
  } : {
    border: '1px solid var(--border-hair)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderRadius: framed ? '0' : 'var(--radius-lg)',
      boxShadow: framed ? 'none' : 'var(--shadow-card)',
      padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      boxSizing: 'border-box',
      ...frameStyle,
      ...style
    },
    onMouseEnter: e => {
      if (hover) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }
    },
    onMouseLeave: e => {
      if (hover) {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = framed ? 'none' : 'var(--shadow-card)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline divider with an optional botanical center mark. */
function Divider({
  label = null,
  symbol = '❋',
  tone = 'soft',
  style = {},
  ...rest
}) {
  const lineColor = tone === 'dark' ? 'var(--border-on-dark)' : 'var(--border-default)';
  const markColor = tone === 'dark' ? 'var(--green-4)' : 'var(--brand-soft)';
  const line = {
    height: '1px',
    flex: 1,
    background: lineColor
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: line
  }), (label || symbol) && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      color: label ? tone === 'dark' ? 'var(--green-4)' : 'var(--text-muted)' : markColor,
      fontFamily: label ? 'var(--font-label)' : 'inherit',
      fontSize: label ? '11px' : '13px',
      letterSpacing: label ? '0.22em' : '0.3em',
      textTransform: label ? 'uppercase' : 'none'
    }
  }, label || symbol), /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small circular/secondary icon button — hairline by default. */
function IconButton({
  children,
  label = '',
  variant = 'outline',
  size = 40,
  disabled = false,
  style = {},
  ...rest
}) {
  const variants = {
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-brand)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--brand)',
      color: 'var(--paper-1)',
      border: '1px solid var(--brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'outline') e.currentTarget.style.background = 'var(--surface-sunken)';
    },
    onMouseLeave: e => {
      if (variant === 'outline') e.currentTarget.style.background = 'var(--surface-card)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/craneAsset.js
try { (() => {
// Auto-generated crane glyph from the real 千纸鹤 logo (raster, fine-line).
const craneInk = "data:image/png;base64,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";
const craneLight = "data:image/png;base64,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";
Object.assign(__ds_scope, { craneInk, craneLight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/craneAsset.js", error: String((e && e.message) || e) }); }

// components/core/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Crane glyph sourced from the official 千纸鹤 logo (raster, fine-line).

/** The real 千纸鹤 crane mark (fine-line origami crane), as an <img>.
 *  tone: "ink" (dark, for light backgrounds) | "light" (cream, for dark). */
function CraneMark({
  size = 48,
  tone = 'ink',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: tone === 'light' ? __ds_scope.craneLight : __ds_scope.craneInk,
    alt: "\u5343\u7EB8\u9E64 crane mark",
    width: size,
    height: size * 0.69,
    style: {
      display: 'block',
      objectFit: 'contain',
      ...style
    }
  }, rest));
}

/** Circular crane seal — IG avatar, stickers, aftercare cards, stamps. */
function Seal({
  size = 180,
  tone = 'green',
  craneTone = 'ink',
  title = '千纸鹤',
  caption = 'TATTOO · KL',
  arc = 'BOTANICAL · FINE-LINE',
  style = {},
  ...rest
}) {
  const tones = {
    green: 'var(--brand)',
    rose: 'var(--rose-1)',
    ink: 'var(--ink-0)'
  };
  const color = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: `1.5px solid ${color}`,
      color,
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: size * 0.05,
      borderRadius: '50%',
      border: `1px solid ${color}`,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.03,
      transform: `translateY(${-size * 0.03}px)`
    }
  }, /*#__PURE__*/React.createElement(CraneMark, {
    size: size * 0.30,
    tone: craneTone,
    style: {
      marginBottom: size * 0.01
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: size * 0.135,
      letterSpacing: '0.26em',
      textIndent: '0.26em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size * 0.022,
      height: size * 0.022,
      borderRadius: '50%',
      background: color,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: size * 0.052,
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, caption)), arc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: size * 0.11,
      left: 0,
      right: 0,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-label)',
      fontSize: size * 0.045,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      opacity: 0.8
    }
  }, arc));
}
Object.assign(__ds_scope, { CraneMark, Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Seal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label — booking consent, aftercare confirmations. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-hei)',
      fontSize: '14px',
      color: 'var(--text-body)',
      lineHeight: 1.5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast) var(--ease-soft)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "var(--paper-1)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5 5 9 9.5 3.5"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  fontFamily: 'var(--font-hei)',
  fontSize: '15px',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  padding: '12px 14px',
  boxSizing: 'border-box',
  transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
  outline: 'none'
};
function Label({
  label,
  hint,
  htmlFor
}) {
  if (!label) return null;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-faint)'
    }
  }, hint));
}
function focusOn(e) {
  e.currentTarget.style.borderColor = 'var(--brand)';
  e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)';
}
function focusOff(e) {
  e.currentTarget.style.borderColor = 'var(--border-default)';
  e.currentTarget.style.boxShadow = 'none';
}

/** Text input with editorial label. */
function Input({
  label,
  hint,
  id,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    label: label,
    hint: hint,
    htmlFor: id
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    style: {
      ...fieldBase,
      ...style
    },
    onFocus: focusOn,
    onBlur: focusOff
  }, rest)));
}

/** Multi-line input — used for "说说你的故事". */
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    label: label,
    hint: hint,
    htmlFor: id
  }), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    style: {
      ...fieldBase,
      resize: 'vertical',
      lineHeight: 1.6,
      ...style
    },
    onFocus: focusOn,
    onBlur: focusOff
  }, rest)));
}

/** Native select, brand-styled. */
function Select({
  label,
  hint,
  id,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    label: label,
    hint: hint,
    htmlFor: id
  }), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    style: {
      ...fieldBase,
      appearance: 'none',
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none' stroke='%236B6353' stroke-width='1.5'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      paddingRight: '36px',
      ...style
    },
    onFocus: focusOn,
    onBlur: focusOff
  }, rest), children));
}
Object.assign(__ds_scope, { Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingScreen.jsx
try { (() => {
function BookingScreen({
  go
}) {
  const {
    Input,
    Select,
    Textarea,
    Checkbox,
    Button,
    Badge,
    Divider,
    Seal
  } = window.TattooDesignSystem_b1c46e;
  const W = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 12
    }
  }, "Booking"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 300,
      fontSize: 'clamp(2.4rem,4vw,3.4rem)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, "\u9884\u7EA6\u54A8\u8BE2"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 16.5,
      lineHeight: 2,
      color: 'var(--text-muted)',
      marginTop: 18,
      maxWidth: 420
    }
  }, "\u586B\u4E00\u70B9\u70B9\u8D44\u6599\u5C31\u597D\u3002\u6211\u4EEC\u4F1A\u5148\u548C\u4F60\u804A\u804A\u56FE\u6848\u7684\u6545\u4E8B\u3001\u5927\u5C0F\u548C\u4F4D\u7F6E\uFF0C\u786E\u8BA4\u90FD\u6EE1\u610F\u4E86\uFF0C\u518D\u7EA6\u65F6\u95F4\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "\u4F60\u53EF\u4EE5\u653E\u5FC3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '22px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['第一次纹身？我们会一步步陪你确认。', '不催促、不推销，慢慢决定都可以。', '干净的环境与清楚的护理说明。'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 14.5,
      color: 'var(--text-body)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-soft)',
      marginTop: 2
    }
  }, "\u274B"), t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hair)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-7)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 10px'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    tone: "green",
    size: 150,
    style: {
      margin: '0 auto 26px'
    },
    arc: "\u8C22\u8C22\u4F60\u7684\u4FE1\u4EFB"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-song)',
      fontWeight: 400,
      fontSize: 24,
      letterSpacing: '0.08em',
      margin: '0 0 12px'
    }
  }, "\u6211\u4EEC\u6536\u5230\u4F60\u7684\u6545\u4E8B\u4E86"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.9,
      color: 'var(--text-muted)',
      maxWidth: 360,
      margin: '0 auto 26px'
    }
  }, "\u6211\u4EEC\u4F1A\u5728 1\u20132 \u5929\u5185\u79C1\u8BAF\u4F60\uFF0C\u4E00\u8D77\u6162\u6162\u786E\u8BA4\u56FE\u6848\u3001\u5927\u5C0F\u548C\u4F4D\u7F6E\u3002\u5148\u6DF1\u547C\u5438\uFF0C\u4E0D\u7528\u7D27\u5F20\u3002"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "\u2190 \u8FD4\u56DE\u4FEE\u6539")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u4F60\u7684\u79F0\u547C",
    placeholder: "\u600E\u4E48\u79F0\u547C\u4F60",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u8054\u7EDC\u65B9\u5F0F",
    placeholder: "IG / WhatsApp",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u60F3\u7EB9\u7684\u4F4D\u7F6E",
    defaultValue: "\u624B\u81C2"
  }, /*#__PURE__*/React.createElement("option", null, "\u624B\u81C2"), /*#__PURE__*/React.createElement("option", null, "\u9501\u9AA8"), /*#__PURE__*/React.createElement("option", null, "\u624B\u8155"), /*#__PURE__*/React.createElement("option", null, "\u811A\u8E1D"), /*#__PURE__*/React.createElement("option", null, "\u540E\u9888"), /*#__PURE__*/React.createElement("option", null, "\u8FD8\u4E0D\u786E\u5B9A")), /*#__PURE__*/React.createElement(Select, {
    label: "\u5927\u6982\u5927\u5C0F",
    defaultValue: "\u5C0F (3\u20136cm)"
  }, /*#__PURE__*/React.createElement("option", null, "\u8FF7\u4F60 (<3cm)"), /*#__PURE__*/React.createElement("option", null, "\u5C0F (3\u20136cm)"), /*#__PURE__*/React.createElement("option", null, "\u4E2D (6\u201312cm)"), /*#__PURE__*/React.createElement("option", null, "\u8FD8\u4E0D\u786E\u5B9A"))), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u8BF4\u8BF4\u4F60\u7684\u6545\u4E8B",
    hint: "\u9009\u586B",
    rows: 4,
    placeholder: "\u8FD9\u4E2A\u56FE\u6848\u5BF9\u4F60\u7684\u610F\u4E49\u3001\u60F3\u8981\u7684\u98CE\u683C\uFF0C\u6216\u9644\u4E0A\u53C2\u8003\u56FE\u7684\u65B9\u5411\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    label: "\u6211\u5DF2\u9605\u8BFB\u5E76\u4E86\u89E3\u7EB9\u8EAB\u62A4\u7406\u987B\u77E5\uFF0C\u613F\u610F\u6162\u6162\u6C9F\u901A\u786E\u8BA4\u56FE\u6848\u3002"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    disabled: !agree
  }, "\u9001\u51FA\u9884\u7EA6\u54A8\u8BE2"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-hei)',
      fontSize: 12.5,
      color: 'var(--text-faint)',
      textAlign: 'center',
      margin: 0,
      lineHeight: 1.7
    }
  }, "\u9001\u51FA\u540E\u6211\u4EEC\u4F1A\u79C1\u8BAF\u4F60\uFF0C\u9884\u7EA6\u4E0D\u4EE3\u8868\u5F53\u5929\u4E00\u5B9A\u8981\u7EB9\u3002"))))));
}
window.BookingScreen = BookingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GuideScreen.jsx
try { (() => {
function GuideScreen({
  go
}) {
  const {
    Accordion,
    Badge,
    Divider,
    Button,
    Card
  } = window.TattooDesignSystem_b1c46e;
  const W = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const steps = [['01', '私讯 / 预约', '把你的想法、参考图、想纹的位置告诉我们。'], ['02', '沟通设计', '一起确认图案、大小、线条与位置，慢慢来。'], ['03', '当天纹身', '干净、专业、舒服的环境，全程陪伴。'], ['04', '术后护理', '附上清楚的护理须知，随时可以问我们。']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 64,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 12
    }
  }, "First Tattoo Guide"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 300,
      fontSize: 'clamp(2.4rem,4vw,3.4rem)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, "\u65B0\u624B\u6307\u5357"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-muted)',
      maxWidth: 540,
      marginTop: 14
    }
  }, "\u7B2C\u4E00\u6B21\u7EB9\u8EAB\u4E0D\u7528\u7D27\u5F20\u3002\u8FD9\u91CC\u6574\u7406\u4E86\u4F60\u6700\u60F3\u77E5\u9053\u7684\u4E8B\uFF0C\u6162\u6162\u770B\u5C31\u597D\u3002")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 30,
      paddingBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 30,
      color: 'var(--text-accent)',
      marginBottom: 12
    }
  }, "No.", n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 18,
      color: 'var(--text-primary)',
      marginBottom: 8,
      letterSpacing: '0.06em'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.8,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    dot: true
  }, "\u5E38\u89C1\u95EE\u9898"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-song)',
      fontWeight: 400,
      fontSize: 27,
      letterSpacing: '0.08em',
      margin: '18px 0 14px'
    }
  }, "\u4F60\u53EF\u80FD\u60F3\u95EE\u7684"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.9,
      color: 'var(--text-muted)'
    }
  }, "\u8FD8\u6709\u5176\u4ED6\u7591\u95EE\uFF1F\u6B22\u8FCE\u79C1\u8BAF\uFF0C\u6211\u4EEC\u4F1A\u6E29\u67D4\u5730\u4E00\u4E00\u56DE\u7B54\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('booking')
  }, "\u9884\u7EA6\u54A8\u8BE2"))), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      q: '第一次纹身会很痛吗？',
      a: '大部分小图案的疼痛感都很轻，像被橡皮筋轻轻弹一下或猫抓一下。我们会陪你慢慢开始，随时可以休息。'
    }, {
      q: '哪个位置比较适合新手？',
      a: '手臂、小腿、肩膀这类肉比较多的位置通常比较友善；锁骨、脚踝偏敏感一些。我们会依你的图案一起建议。'
    }, {
      q: '小图案会不会容易糊掉？',
      a: '只要线条粗细与留白处理得当，并按护理须知好好照顾，细线小图也能干净耐看许多年。'
    }, {
      q: '纹身后多久可以洗澡、运动？',
      a: '当天可以快速淋浴，但请避免泡水；建议 24–48 小时内不要剧烈运动，等伤口稳定后再恢复。'
    }, {
      q: '可以带自己的图来吗？',
      a: '当然可以。我们会在尊重原作的前提下，帮你调整比例与线条，让它更适合你的身体与位置。'
    }]
  }))));
}
window.GuideScreen = GuideScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GuideScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Button,
    Badge,
    Divider,
    QuoteBlock,
    Seal
  } = window.TattooDesignSystem_b1c46e;
  const PhotoTile = window.PhotoTile;
  const W = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 84,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    dot: true
  }, "\u97E9\u5F0F\u5C0F\u6E05\u65B0"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Fine-line"), /*#__PURE__*/React.createElement(Badge, {
    variant: "kraft"
  }, "\u590D\u53E4\u690D\u7269")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-song)',
      fontWeight: 300,
      fontSize: 'clamp(2.6rem,4.6vw,4rem)',
      lineHeight: 1.32,
      letterSpacing: '0.06em',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "\u628A\u6545\u4E8B\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u8F7B\u8F7B\u7EB9\u5728\u8EAB\u4E0A\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-hei)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 2,
      color: 'var(--text-muted)',
      maxWidth: 440,
      marginTop: 24
    }
  }, "\u5343\u7EB8\u9E64\u662F KL \u7684\u6587\u827A\u97E9\u5F0F\u5C0F\u6E05\u65B0\u7EB9\u8EAB\u5DE5\u4F5C\u5BA4\u3002", /*#__PURE__*/React.createElement("br", null), "\u6211\u4EEC\u76F8\u4FE1\uFF0C\u4E00\u6735\u5C0F\u82B1\u3001\u4E00\u884C\u5B57\uFF0C\u4E5F\u80FD\u88C5\u7740\u5F88\u957F\u7684\u6545\u4E8B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('booking')
  }, "\u9884\u7EA6\u54A8\u8BE2"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('portfolio')
  }, "\u770B\u770B\u4F5C\u54C1\u96C6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    no: "01",
    label: "\u9501\u9AA8",
    tone: "kraft"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    no: "02",
    label: "\u624B\u8155",
    tone: "mist",
    style: {
      marginTop: 32
    }
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    no: "03",
    label: "\u811A\u8E1D",
    tone: "rose",
    style: {
      marginTop: -16
    }
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    no: "04",
    label: "\u540E\u9888",
    tone: "kraft",
    style: {
      marginTop: 16
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-hair)',
      borderBottom: '1px solid var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...W,
      paddingTop: 52,
      paddingBottom: 52,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, [['倾听', '先听懂你的故事，再开始设计。'], ['美感', '考虑位置、比例、线条与留白。'], ['专业', '清楚的流程、卫生与护理说明。'], ['温柔陪伴', '第一次纹身，也可以慢慢来。']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 21,
      color: 'var(--text-brand)',
      marginBottom: 10,
      letterSpacing: '0.1em'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.85,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 76,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "Selected Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-song)',
      fontWeight: 400,
      fontSize: 30,
      letterSpacing: '0.08em',
      margin: 0
    }
  }, "\u8FD1\u671F\u4F5C\u54C1")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('portfolio')
  }, "\u67E5\u770B\u5168\u90E8 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    no: "11",
    label: "\u96CF\u83CA",
    tone: "kraft"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    no: "12",
    label: "\u8774\u8776",
    tone: "mist"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    no: "13",
    label: "\u624B\u5199\u5B57",
    tone: "rose"
  }), /*#__PURE__*/React.createElement(PhotoTile, {
    no: "14",
    label: "\u6708\u4EAE",
    tone: "kraft"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 80,
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    symbol: "\u274B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 50,
      marginTop: 50
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    attribution: "Mei \xB7 \u9501\u9AA8 \u96CF\u83CA",
    style: {
      flex: 1
    }
  }, "\u6709\u4E9B\u7EB9\u8EAB\u4E0D\u662F\u4E3A\u4E86\u88AB\u522B\u4EBA\u770B\u89C1\uFF0C\u800C\u662F\u4E3A\u4E86\u8BB0\u4F4F\u67D0\u4E2A\u91CD\u8981\u7684\u81EA\u5DF1\u3002"), /*#__PURE__*/React.createElement(Seal, {
    tone: "rose",
    size: 172,
    arc: "\u628A\u6545\u4E8B \xB7 \u8F7B\u8F7B\u7EB9\u5728\u8EAB\u4E0A"
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Top navigation + footer for the 千纸鹤 marketing site.
function SiteNav({
  screen,
  go
}) {
  const {
    CraneMark
  } = window.TattooDesignSystem_b1c46e;
  const items = [['home', '首页'], ['portfolio', '作品集'], ['guide', '新手指南'], ['booking', '预约']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(245,239,225,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(CraneMark, {
    size: 40,
    tone: "ink"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 22,
      letterSpacing: '0.22em',
      textIndent: '0.22em',
      color: 'var(--text-primary)'
    }
  }, "\u5343\u7EB8\u9E64")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, items.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => go(key),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      fontFamily: 'var(--font-hei)',
      fontSize: 14,
      letterSpacing: '0.1em',
      color: screen === key ? 'var(--text-brand)' : 'var(--text-muted)',
      borderBottom: screen === key ? '1px solid var(--brand)' : '1px solid transparent'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "KL \xB7 \u9884\u7EA6\u5236"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "at-sign",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }))));
}
function SiteFooter() {
  const {
    CraneMark,
    Divider
  } = window.TattooDesignSystem_b1c46e;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--text-on-dark)',
      padding: '64px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(CraneMark, {
    size: 38,
    tone: "light"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 20,
      letterSpacing: '0.2em'
    }
  }, "\u5343\u7EB8\u9E64")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 15,
      lineHeight: 1.9,
      color: 'var(--green-4)',
      margin: 0
    }
  }, "\u628A\u6545\u4E8B\uFF0C\u8F7B\u8F7B\u7EB9\u5728\u8EAB\u4E0A\u3002", /*#__PURE__*/React.createElement("br", null), "\u9884\u7EA6\u5F00\u653E\u4E2D\uFF0C\u6B22\u8FCE\u79C1\u8BAF\u8BA8\u8BBA\u4F60\u7684\u56FE\u6848\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--green-4)',
      marginBottom: 14
    }
  }, "\u5173\u4E8E"), ['作品集', '新手指南', '价目参考', '护理须知'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 14,
      color: 'var(--paper-2)',
      marginBottom: 10
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--green-4)',
      marginBottom: 14
    }
  }, "\u8054\u7EDC"), ['Instagram', '小红书', 'WhatsApp', 'Kuala Lumpur'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 14,
      color: 'var(--paper-2)',
      marginBottom: 10
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--green-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u5343\u7EB8\u9E64 Tattoo \xB7 Est. 2024"), /*#__PURE__*/React.createElement("span", null, "Botanical \xB7 Fine-line \xB7 Korean Minimal"))));
}
window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PhotoTile.jsx
try { (() => {
// Placeholder for a real tattoo photograph — vintage paper tile with crane watermark.
// In production, drop in real work photos (warm, filmic, lots of skin + negative space).
function PhotoTile({
  label = '作品',
  no = '01',
  ratio = '3 / 4',
  tone = 'kraft',
  style = {}
}) {
  const tones = {
    kraft: 'linear-gradient(150deg, var(--paper-3), var(--paper-2))',
    mist: 'linear-gradient(150deg, var(--green-5), var(--paper-2))',
    rose: 'linear-gradient(150deg, var(--rose-4), var(--paper-2))'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      background: tones[tone] || tones.kraft,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 10,
      border: '1px solid rgba(42,38,32,0.14)',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/crane.png",
    alt: "",
    style: {
      width: 56,
      opacity: 0.22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, label, " \xB7 No.", no));
}
window.PhotoTile = PhotoTile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PortfolioScreen.jsx
try { (() => {
function PortfolioScreen({
  go
}) {
  const {
    Badge,
    Button
  } = window.TattooDesignSystem_b1c46e;
  const PhotoTile = window.PhotoTile;
  const W = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const filters = ['全部', '植物花卉', '蝴蝶 / 动物', '手写字', '月亮 / 符号', '情侣 / 纪念'];
  const [active, setActive] = React.useState('全部');
  const works = [['雏菊', '锁骨', 'kraft'], ['细叶尤加利', '前臂', 'mist'], ['小蝴蝶', '脚踝', 'rose'], ['手写日期', '手腕内侧', 'kraft'], ['月相', '后颈', 'mist'], ['铃兰', '肩胛', 'rose'], ['燕子', '脚背', 'kraft'], ['一行诗', '锁骨', 'mist'], ['满天星', '手肘', 'rose']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...W,
      paddingTop: 64,
      paddingBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 12
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 300,
      fontSize: 'clamp(2.4rem,4vw,3.4rem)',
      letterSpacing: '-0.01em',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, "\u4F5C\u54C1\u96C6"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--text-muted)',
      maxWidth: 520,
      marginTop: 14
    }
  }, "\u6BCF\u4E00\u4E2A\u56FE\u6848\uFF0C\u90FD\u662F\u4E3A\u5B83\u7684\u4E3B\u4EBA\u5355\u72EC\u8BBE\u8BA1\u7684\u3002\u70B9\u5F00\u770B\u770B\u5B83\u4EEC\u80CC\u540E\u7684\u6545\u4E8B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setActive(f),
    style: {
      fontFamily: 'var(--font-hei)',
      fontSize: 13,
      letterSpacing: '0.06em',
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (active === f ? 'var(--brand)' : 'var(--border-default)'),
      background: active === f ? 'var(--brand)' : 'transparent',
      color: active === f ? 'var(--paper-1)' : 'var(--text-muted)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, f)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...W
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, works.map(([name, place, tone], i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    no: String(20 + i),
    label: place,
    tone: tone,
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-song)',
      fontSize: 17,
      color: 'var(--text-primary)',
      letterSpacing: '0.04em'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, place))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 50
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('booking')
  }, "\u559C\u6B22\u8FD9\u4E2A\u65B9\u5411\uFF1F\u9884\u7EA6\u804A\u804A \u2192"))));
}
window.PortfolioScreen = PortfolioScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PortfolioScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CraneMark = __ds_scope.CraneMark;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

})();
