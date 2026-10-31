import { css as d, LitElement as f, html as r } from "lit";
import { property as m } from "lit/decorators.js";
const g = d`
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
`, s = (a) => String(a && typeof a == "object" ? a[(document.documentElement.lang || "ar").slice(0, 2)] ?? a.ar ?? "" : a ?? "");
var x = Object.defineProperty, h = (a, n, i, c) => {
  for (var t = void 0, e = a.length - 1, o; e >= 0; e--)
    (o = a[e]) && (t = o(n, i, t) || t);
  return t && x(n, i, t), t;
};
const l = class l extends f {
  render() {
    const n = this.config ?? {}, i = (n.logos ?? []).filter((t) => t.image || s(t.name));
    if (!i.length) return r``;
    const c = (t) => i.map((e) => {
      const o = e.image ? r`<img src=${e.image} alt=${s(e.name)} loading="lazy" />` : r`<span class="nm">${s(e.name)}</span>`;
      return e.link ? r`<a href=${e.link} aria-hidden=${t}>${o}</a>` : r`<span class="l" aria-hidden=${t}>${o}</span>`;
    });
    return r`<div class="wrap" style="padding-block:36px">${s(n.title) ? r`<h3>${s(n.title)}</h3>` : ""}
      <div class="vp ${n.color_always ? "color" : ""}" style="--d:${Math.max(10, 60 - (n.speed ?? 30))}s"><div class="track">${c(!1)}${c(!0)}${c(!0)}</div></div></div>`;
  }
};
l.styles = [g, d`
    h3 { text-align: center; margin: 0 0 26px; font-size: 14px; letter-spacing: .25em; opacity: .55; font-weight: 700; }
    .vp { overflow: hidden; mask: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
    .track { display: flex; gap: clamp(36px, 6vw, 80px); width: max-content; align-items: center; animation: run var(--d, 30s) linear infinite; }
    .vp:hover .track { animation-play-state: paused; } :host-context([dir=ltr]) .track { animation-direction: reverse; }
    @keyframes run { to { transform: translateX(50%); } }
    a, span.l { display: block; height: 54px; flex: none; } img { height: 100%; width: auto; max-width: 170px; object-fit: contain; filter: grayscale(1) opacity(.55); transition: filter .4s, transform .4s; }
    .color img, a:hover img, span.l:hover img { filter: none; transform: scale(1.06); }
    .nm { font-weight: 800; font-size: 22px; opacity: .5; white-space: nowrap; line-height: 54px; }
  `];
let p = l;
h([
  m({ type: Object })
], p.prototype, "config");
typeof p < "u" && p.registerSallaComponent("salla-yaqeen-logos");
export {
  p as default
};
