import { css, html, LitElement, svg } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, txt } from '../../shared/salla';

/** Guarantee section with a rotating gold seal and the store's promises. */
export default class YaqeenGuarantee extends LitElement {
  @property({ type: Object }) config?: { seal?: unknown; days?: number; title?: unknown; subtitle?: unknown; promises?: { text?: unknown }[]; button?: unknown; link?: string; color?: string };
  static styles = [base, css`
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
  render() {
    const c = this.config ?? {}; const unit = txt(c.seal) || 'ضمان ذهبي · رضاك أولاً · '; const ring = unit.repeat(Math.max(1, Math.floor(84 / unit.length)));
    const promises = (c.promises ?? []).map((p) => txt(p.text)).filter(Boolean);
    return html`<div class="wrap"><div class="box dark" style=${style(c.color)}><div class="glow"></div>
      <div class="seal"><svg class="ring" viewBox="0 0 200 200" aria-hidden="true">${svg`<defs><path id="c" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"/></defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="#c9a45c" stroke-opacity=".45"/><circle cx="100" cy="100" r="70" fill="none" stroke="#c9a45c" stroke-opacity=".3" stroke-dasharray="2 5"/>
        <text font-size="12" font-weight="700" fill="#e9cf8f" direction="ltr"><textPath href="#c">${ring}</textPath></text>`}</svg>
        <div class="core"><b>${c.days ?? 30}</b><span>يوم ضمان</span></div></div>
      <div><span class="eyebrow">🛡️ وعدنا لك</span><h2 class="title">${txt(c.title) || 'اشترِ وأنت مطمئن'}</h2>${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}
        <ul>${promises.map((p) => html`<li><i>✓</i>${p}</li>`)}</ul>
        ${txt(c.button) && c.link ? html`<a class="btn" href=${c.link}>${txt(c.button)} ←</a>` : ''}</div>
    </div></div>`;
  }
}
