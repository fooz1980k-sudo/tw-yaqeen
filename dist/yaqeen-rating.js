import { css as u, LitElement as b, html as d } from "lit";
import { property as h, state as v } from "lit/decorators.js";
const y = u`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`, g = () => window.Salla, w = () => {
  var e, t, n, r, i;
  try {
    const o = ((t = (e = g()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((i = (r = (n = g()) == null ? void 0 : n.config) == null ? void 0 : r.get) == null ? void 0 : i.call(r, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, l = (e) => {
  if (e == null) return "";
  if (typeof e == "string") {
    const t = e.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return l(JSON.parse(t));
      } catch {
      }
    return e;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const t = e, n = t[w()] ?? t.ar ?? t.en ?? Object.values(t).find((r) => typeof r == "string" && r);
    return typeof n == "string" ? n : "";
  }
  return "";
};
function k(e, t, n = 0.25) {
  if (!("IntersectionObserver" in window)) {
    t();
    return;
  }
  const r = new IntersectionObserver((i) => {
    i.some((o) => o.isIntersecting) && (r.disconnect(), t());
  }, { threshold: n });
  r.observe(e);
}
const $ = (e) => e ? `--tf-custom:${e}` : "";
var z = Object.defineProperty, x = (e, t, n, r) => {
  for (var i = void 0, o = e.length - 1, c; o >= 0; o--)
    (c = e[o]) && (i = c(t, n, i) || i);
  return i && z(t, n, i), i;
};
const f = class f extends b {
  constructor() {
    super(...arguments), this.shown = !1;
  }
  firstUpdated() {
    k(this, () => this.shown = !0);
  }
  render() {
    const t = this.config ?? {}, n = [t.s5, t.s4, t.s3, t.s2, t.s1].map((a) => Math.max(0, Number(a) || 0)), r = n.reduce((a, p) => a + p, 0);
    if (!r) return d``;
    const i = n.reduce((a, p, m) => a + p * (5 - m), 0) / r, o = Math.round((n[0] + n[1]) / r * 100), c = Math.round(i);
    return d`<div class="wrap" style=${$(t.color)}><span class="eyebrow">⭐ تقييمات حقيقية</span><h2 class="title">${l(t.title) || "عملاؤنا قالوا كلمتهم"}</h2>
      <div class="box"><div class="avg"><b>${i.toFixed(1)}</b><div class="st" aria-label="${i.toFixed(1)} من 5">${"★".repeat(c)}${"☆".repeat(5 - c)}</div>
        <small>من ${r.toLocaleString("en")} تقييم ${l(t.source) ? `· ${l(t.source)}` : ""}</small></div>
        <div>${n.map((a, p) => d`<div class="row"><span>${5 - p} ★</span><div class="tr"><div class="fl" style="width:${this.shown ? a / r * 100 : 0}%"></div></div><span class="pc">${Math.round(a / r * 100)}٪</span></div>`)}
          <div class="rec">👍 ${o}٪ من العملاء يقيّمونا 4 نجوم أو أكثر${t.link ? d` · <a href=${t.link} style="color:inherit">اقرأ التقييمات</a>` : ""}</div></div></div></div>`;
  }
};
f.styles = [y, u`
    .box { display: grid; grid-template-columns: auto 1fr; gap: clamp(24px, 6vw, 80px); align-items: center; padding: clamp(26px, 5vw, 56px); border-radius: 28px; background: #fff; border: 1px solid #0000000f; box-shadow: 0 30px 60px -40px #0004; }
    @media (max-width: 680px) { .box { grid-template-columns: 1fr; text-align: center; } }
    .avg b { display: block; font-size: clamp(64px, 12vw, 104px); line-height: 1; font-weight: 800; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .st { color: #e3b341; font-size: 22px; letter-spacing: 3px; } .avg small { display: block; opacity: .6; margin-top: 6px; }
    .row { display: grid; grid-template-columns: 42px 1fr 52px; gap: 12px; align-items: center; margin: 10px 0; font-size: 14px; }
    .tr { height: 10px; border-radius: 99px; background: #0000000d; overflow: hidden; } .fl { height: 100%; width: 0; border-radius: inherit; background: var(--tf-gold); transition: width 1.4s cubic-bezier(.2,.8,.2,1); }
    .pc { opacity: .6; text-align: end; font-variant-numeric: tabular-nums; }
    .rec { margin-top: 16px; padding: 12px 16px; border-radius: 14px; background: color-mix(in srgb, var(--tf-accent) 10%, transparent); font-weight: 700; }
  `];
let s = f;
x([
  h({ type: Object })
], s.prototype, "config");
x([
  v()
], s.prototype, "shown");
typeof s < "u" && s.registerSallaComponent("salla-yaqeen-rating");
export {
  s as default
};
