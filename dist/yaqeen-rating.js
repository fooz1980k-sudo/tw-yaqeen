import { css as x, LitElement as b, html as d } from "lit";
import { property as u, state as h } from "lit/decorators.js";
const v = x`
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
`, l = (e) => String(e && typeof e == "object" ? e[(document.documentElement.lang || "ar").slice(0, 2)] ?? e.ar ?? "" : e ?? "");
function w(e, t, i = 0.25) {
  if (!("IntersectionObserver" in window)) {
    t();
    return;
  }
  const a = new IntersectionObserver((r) => {
    r.some((o) => o.isIntersecting) && (a.disconnect(), t());
  }, { threshold: i });
  a.observe(e);
}
const y = (e) => e ? `--tf-custom:${e}` : "";
var k = Object.defineProperty, g = (e, t, i, a) => {
  for (var r = void 0, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (r = p(t, i, r) || r);
  return r && k(t, i, r), r;
};
const f = class f extends b {
  constructor() {
    super(...arguments), this.shown = !1;
  }
  firstUpdated() {
    w(this, () => this.shown = !0);
  }
  render() {
    const t = this.config ?? {}, i = [t.s5, t.s4, t.s3, t.s2, t.s1].map((n) => Math.max(0, Number(n) || 0)), a = i.reduce((n, c) => n + c, 0);
    if (!a) return d``;
    const r = i.reduce((n, c, m) => n + c * (5 - m), 0) / a, o = Math.round((i[0] + i[1]) / a * 100), p = Math.round(r);
    return d`<div class="wrap" style=${y(t.color)}><span class="eyebrow">⭐ تقييمات حقيقية</span><h2 class="title">${l(t.title) || "عملاؤنا قالوا كلمتهم"}</h2>
      <div class="box"><div class="avg"><b>${r.toFixed(1)}</b><div class="st" aria-label="${r.toFixed(1)} من 5">${"★".repeat(p)}${"☆".repeat(5 - p)}</div>
        <small>من ${a.toLocaleString("en")} تقييم ${l(t.source) ? `· ${l(t.source)}` : ""}</small></div>
        <div>${i.map((n, c) => d`<div class="row"><span>${5 - c} ★</span><div class="tr"><div class="fl" style="width:${this.shown ? n / a * 100 : 0}%"></div></div><span class="pc">${Math.round(n / a * 100)}٪</span></div>`)}
          <div class="rec">👍 ${o}٪ من العملاء يقيّمونا 4 نجوم أو أكثر${t.link ? d` · <a href=${t.link} style="color:inherit">اقرأ التقييمات</a>` : ""}</div></div></div></div>`;
  }
};
f.styles = [v, x`
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
g([
  u({ type: Object })
], s.prototype, "config");
g([
  h()
], s.prototype, "shown");
typeof s < "u" && s.registerSallaComponent("salla-yaqeen-rating");
export {
  s as default
};
