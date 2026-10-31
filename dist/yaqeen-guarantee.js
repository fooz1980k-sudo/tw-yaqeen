import { css as d, LitElement as f, svg as x, html as s } from "lit";
import { property as g } from "lit/decorators.js";
const m = d`
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
`, r = (e) => String(e && typeof e == "object" ? e[(document.documentElement.lang || "ar").slice(0, 2)] ?? e.ar ?? "" : e ?? ""), b = (e) => e ? `--tf-custom:${e}` : "";
var h = Object.defineProperty, u = (e, t, n, l) => {
  for (var i = void 0, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (i = c(t, n, i) || i);
  return i && h(t, n, i), i;
};
const p = class p extends f {
  render() {
    const t = this.config ?? {}, n = r(t.seal) || "ضمان ذهبي · رضاك أولاً · ", l = n.repeat(Math.max(1, Math.floor(84 / n.length))), i = (t.promises ?? []).map((a) => r(a.text)).filter(Boolean);
    return s`<div class="wrap"><div class="box dark" style=${b(t.color)}><div class="glow"></div>
      <div class="seal"><svg class="ring" viewBox="0 0 200 200" aria-hidden="true">${x`<defs><path id="c" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"/></defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="#c9a45c" stroke-opacity=".45"/><circle cx="100" cy="100" r="70" fill="none" stroke="#c9a45c" stroke-opacity=".3" stroke-dasharray="2 5"/>
        <text font-size="12" font-weight="700" fill="#e9cf8f" direction="ltr"><textPath href="#c">${l}</textPath></text>`}</svg>
        <div class="core"><b>${t.days ?? 30}</b><span>يوم ضمان</span></div></div>
      <div><span class="eyebrow">🛡️ وعدنا لك</span><h2 class="title">${r(t.title) || "اشترِ وأنت مطمئن"}</h2>${r(t.subtitle) ? s`<p class="sub">${r(t.subtitle)}</p>` : ""}
        <ul>${i.map((a) => s`<li><i>✓</i>${a}</li>`)}</ul>
        ${r(t.button) && t.link ? s`<a class="btn" href=${t.link}>${r(t.button)} ←</a>` : ""}</div>
    </div></div>`;
  }
};
p.styles = [m, d`
    .box { border-radius: 30px; display: grid; grid-template-columns: 320px 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; padding: clamp(28px, 5vw, 64px); position: relative; overflow: hidden; }
    @media (max-width: 760px) { .box { grid-template-columns: 1fr; text-align: center; } .seal { margin: 0 auto; } ul { justify-items: center; } }
    .seal { width: min(280px, 70vw); aspect-ratio: 1; position: relative; }
    .seal svg.ring { position: absolute; inset: 0; animation: spin 28s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }
    .core { position: absolute; inset: 22%; border-radius: 50%; display: grid; place-content: center; text-align: center; background: var(--tf-gold); color: #241a05; box-shadow: inset 0 0 0 6px #ffffff55, 0 20px 60px -20px #c9a45c; }
    .core b { font-size: clamp(44px, 9vw, 64px); line-height: 1; } .core span { font-weight: 800; font-size: 14px; }
    ul { list-style: none; padding: 0; margin: 0 0 26px; display: grid; gap: 12px; }
    li { display: flex; gap: 12px; align-items: center; font-size: 16px; } li i { font-style: normal; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; background: var(--tf-accent); color: #fff; font-size: 14px; flex: none; }
    .glow { position: absolute; width: 520px; height: 520px; border-radius: 50%; inset-inline-start: -160px; top: -160px; background: radial-gradient(closest-side, color-mix(in srgb, var(--tf-accent) 35%, transparent), transparent); pointer-events: none; }
  `];
let o = p;
u([
  g({ type: Object })
], o.prototype, "config");
typeof o < "u" && o.registerSallaComponent("salla-yaqeen-guarantee");
export {
  o as default
};
