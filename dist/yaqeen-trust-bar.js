import { css as f, LitElement as x, html as d } from "lit";
import { property as g } from "lit/decorators.js";
const m = f`
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
`, l = () => window.Salla, b = () => {
  var r, t, e, a, n;
  try {
    const i = ((t = (r = l()) == null ? void 0 : r.lang) == null ? void 0 : t.locale) ?? ((n = (a = (e = l()) == null ? void 0 : e.config) == null ? void 0 : a.get) == null ? void 0 : n.call(a, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, o = (r) => {
  if (r == null) return "";
  if (typeof r == "string") {
    const t = r.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return o(JSON.parse(t));
      } catch {
      }
    return r;
  }
  if (typeof r == "number" || typeof r == "boolean") return String(r);
  if (typeof r == "object") {
    const t = r, e = t[b()] ?? t.ar ?? t.en ?? Object.values(t).find((a) => typeof a == "string" && a);
    return typeof e == "string" ? e : "";
  }
  return "";
}, u = (r) => r ? `--tf-custom:${r}` : "";
var h = Object.defineProperty, y = (r, t, e, a) => {
  for (var n = void 0, i = r.length - 1, c; i >= 0; i--)
    (c = r[i]) && (n = c(t, e, n) || n);
  return n && h(t, e, n), n;
};
const p = class p extends x {
  row(t, e = !1) {
    return t.map((a) => d`<div class="it ${e ? "dup" : ""}" aria-hidden=${e ? "true" : "false"}><span class="em">${a.emoji || "✓"}</span><span><b>${o(a.title)}</b>${o(a.text) ? d`<small>${o(a.text)}</small>` : ""}</span></div>`);
  }
  render() {
    const t = this.config ?? {}, e = (t.items ?? []).filter((a) => o(a.title));
    return e.length ? d`<div class="wrap" style="padding-block:18px"><div class="bar ${t.dark ? "dark" : ""}" style=${u(t.color)}><div class="track">${this.row(e)}${this.row(e, !0)}</div></div></div>` : d``;
  }
};
p.styles = [m, f`
    .bar { border-radius: 22px; padding: 6px; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 6px; background: #fff; border: 1px solid #0000000f; box-shadow: 0 18px 40px -30px #0005; }
    .dark.bar { background: #0f0c18; border-color: #ffffff14; }
    .it { display: flex; align-items: center; gap: 14px; padding: 18px 20px; border-radius: 18px; transition: background .3s; }
    .it:hover { background: color-mix(in srgb, var(--tf-accent) 9%, transparent); }
    .em { flex: none; width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; font-size: 24px; background: color-mix(in srgb, var(--tf-accent) 14%, transparent); border: 1px solid color-mix(in srgb, var(--tf-accent) 30%, transparent); }
    b { display: block; font-size: 15px; } small { display: block; opacity: .65; font-size: 13px; margin-top: 2px; line-height: 1.6; }
    .it + .it { border-inline-start: 1px solid #0000000d; } .dark .it + .it { border-color: #ffffff12; }
    @media (max-width: 860px) {
      .bar { display: block; overflow: hidden; padding: 4px; mask: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
      .track { display: flex; width: max-content; animation: run 26s linear infinite; } .track:hover { animation-play-state: paused; }
      .it { width: 250px; } :host-context([dir=ltr]) .track { animation-direction: reverse; }
    }
    @media (min-width: 861px) { .track { display: contents; } .dup { display: none; } }
    @keyframes run { to { transform: translateX(50%); } }
  `];
let s = p;
y([
  g({ type: Object })
], s.prototype, "config");
typeof s < "u" && s.registerSallaComponent("salla-yaqeen-trust-bar");
export {
  s as default
};
