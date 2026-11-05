import { css as g, LitElement as u, html as a } from "lit";
import { property as h, state as m } from "lit/decorators.js";
const x = g`
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
`, f = () => window.Salla, b = () => {
  var n, t, e, r, i;
  try {
    const o = ((t = (n = f()) == null ? void 0 : n.lang) == null ? void 0 : t.locale) ?? ((i = (r = (e = f()) == null ? void 0 : e.config) == null ? void 0 : r.get) == null ? void 0 : i.call(r, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, p = (n) => {
  if (n == null) return "";
  if (typeof n == "string") {
    const t = n.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return p(JSON.parse(t));
      } catch {
      }
    return n;
  }
  if (typeof n == "number" || typeof n == "boolean") return String(n);
  if (typeof n == "object") {
    const t = n, e = t[b()] ?? t.ar ?? t.en ?? Object.values(t).find((r) => typeof r == "string" && r);
    return typeof e == "string" ? e : "";
  }
  return "";
}, y = (n) => n ? `--tf-custom:${n}` : "";
var v = Object.defineProperty, c = (n, t, e, r) => {
  for (var i = void 0, o = n.length - 1, l; o >= 0; o--)
    (l = n[o]) && (i = l(t, e, i) || i);
  return i && v(t, e, i), i;
};
const d = class d extends u {
  constructor() {
    super(...arguments), this.open = 0, this.q = "";
  }
  items() {
    var t;
    return (((t = this.config) == null ? void 0 : t.items) ?? []).map((e) => ({ q: p(e.q), a: p(e.a) })).filter((e) => e.q);
  }
  updated(t) {
    var r;
    if (!t.has("config")) return;
    (r = this.ld) == null || r.remove();
    const e = this.items();
    e.length && (this.ld = Object.assign(document.createElement("script"), {
      type: "application/ld+json",
      textContent: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: e.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) })
    }), document.head.appendChild(this.ld));
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.ld) == null || t.remove();
  }
  hi(t) {
    const e = this.q.trim();
    if (!e) return t;
    const r = t.toLowerCase().indexOf(e.toLowerCase());
    return r < 0 ? t : a`${t.slice(0, r)}<mark>${t.slice(r, r + e.length)}</mark>${t.slice(r + e.length)}`;
  }
  render() {
    const t = this.config ?? {}, e = this.q.trim().toLowerCase(), r = this.items().filter((i) => !e || (i.q + " " + i.a).toLowerCase().includes(e));
    return a`<div class="wrap" style=${y(t.color)}><div class="grid">
      <div class="side"><span class="eyebrow">💬 أسئلة شائعة</span><h2 class="title">${p(t.title) || "عندك سؤال؟"}</h2>${p(t.subtitle) ? a`<p class="sub">${p(t.subtitle)}</p>` : ""}
        ${t.search !== !1 ? a`<input type="search" placeholder="ابحث في الأسئلة… (مثلاً: الشحن)" .value=${this.q} @input=${(i) => {
      this.q = i.target.value, this.open = 0;
    }} aria-label="ابحث في الأسئلة" />` : ""}
        ${t.contact ? a`<p class="ct">ما لقيت جوابك؟ <a href=${t.contact} style="color:var(--tf-accent);font-weight:700">كلّمنا ←</a></p>` : ""}</div>
      <div>${r.length ? r.map((i, o) => a`<div class="qa ${this.open === o ? "on" : ""}">
          <button class="q" aria-expanded=${this.open === o} @click=${() => this.open = this.open === o ? -1 : o}><span>${this.hi(i.q)}</span><span class="pm">+</span></button>
          <div class="a" role="region"><div><p>${this.hi(i.a)}</p></div></div></div>`) : a`<p class="none">ما فيه سؤال يطابق «${this.q}».</p>`}</div>
    </div></div>`;
  }
};
d.styles = [x, g`
    .grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(24px, 5vw, 64px); align-items: start; }
    @media (max-width: 860px) { .grid { grid-template-columns: 1fr; } }
    .side { position: sticky; top: 90px; }
    input { width: 100%; font: inherit; padding: 14px 18px; border-radius: 16px; border: 1px solid #0000001a; background: #fff; outline: none; transition: border-color .2s, box-shadow .2s; }
    input:focus { border-color: var(--tf-accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--tf-accent) 18%, transparent); }
    .qa { border-bottom: 1px solid #00000012; }
    button.q { all: unset; cursor: pointer; display: flex; width: 100%; gap: 16px; align-items: center; justify-content: space-between; padding: 22px 4px; font-weight: 700; font-size: 17px; box-sizing: border-box; }
    button.q:focus-visible { outline: 2px solid var(--tf-accent); border-radius: 8px; }
    .pm { flex: none; width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #0000001f; transition: transform .35s, background .35s, color .35s; font-size: 20px; }
    .on .pm { transform: rotate(45deg); background: var(--tf-accent); color: #fff; border-color: transparent; }
    .a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .4s ease; } .on .a { grid-template-rows: 1fr; }
    .a > div { overflow: hidden; } .a p { margin: 0 0 22px; opacity: .75; line-height: 1.9; white-space: pre-line; }
    .none { opacity: .6; padding: 20px 0; } mark { background: color-mix(in srgb, var(--tf-accent) 30%, transparent); color: inherit; border-radius: 4px; }
    .ct { margin-top: 18px; }
  `];
let s = d;
c([
  h({ type: Object })
], s.prototype, "config");
c([
  m()
], s.prototype, "open");
c([
  m()
], s.prototype, "q");
typeof s < "u" && s.registerSallaComponent("salla-yaqeen-faq");
export {
  s as default
};
