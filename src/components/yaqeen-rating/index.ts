import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { onView, style, txt } from '../../shared/salla';

/** Rating summary: computes the average and share of each star level from the merchant's real counts, with animated bars. */
export default class YaqeenRating extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; s5?: number; s4?: number; s3?: number; s2?: number; s1?: number; source?: unknown; link?: string; color?: string };
  @state() private shown = false;
  static styles = [base, css`
    .box { display: grid; grid-template-columns: auto 1fr; gap: clamp(24px, 6vw, 80px); align-items: center; padding: clamp(26px, 5vw, 56px); border-radius: 28px; background: #fff; border: 1px solid #0000000f; box-shadow: 0 30px 60px -40px #0004; }
    @media (max-width: 680px) { .box { grid-template-columns: 1fr; text-align: center; } }
    .avg b { display: block; font-size: clamp(64px, 12vw, 104px); line-height: 1; font-weight: 800; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .st { color: #e3b341; font-size: 22px; letter-spacing: 3px; } .avg small { display: block; opacity: .6; margin-top: 6px; }
    .row { display: grid; grid-template-columns: 42px 1fr 52px; gap: 12px; align-items: center; margin: 10px 0; font-size: 14px; }
    .tr { height: 10px; border-radius: 99px; background: #0000000d; overflow: hidden; } .fl { height: 100%; width: 0; border-radius: inherit; background: var(--tf-gold); transition: width 1.4s cubic-bezier(.2,.8,.2,1); }
    .pc { opacity: .6; text-align: end; font-variant-numeric: tabular-nums; }
    .rec { margin-top: 16px; padding: 12px 16px; border-radius: 14px; background: color-mix(in srgb, var(--tf-accent) 10%, transparent); font-weight: 700; }
  `];
  firstUpdated() { onView(this, () => (this.shown = true)); }
  render() {
    const c = this.config ?? {}; const n = [c.s5, c.s4, c.s3, c.s2, c.s1].map((x) => Math.max(0, Number(x) || 0)); const total = n.reduce((a, b) => a + b, 0);
    if (!total) return html``;
    const avg = n.reduce((a, v, i) => a + v * (5 - i), 0) / total; const rec = Math.round(((n[0] + n[1]) / total) * 100);
    const full = Math.round(avg);
    return html`<div class="wrap" style=${style(c.color)}><span class="eyebrow">⭐ تقييمات حقيقية</span><h2 class="title">${txt(c.title) || 'عملاؤنا قالوا كلمتهم'}</h2>
      <div class="box"><div class="avg"><b>${avg.toFixed(1)}</b><div class="st" aria-label="${avg.toFixed(1)} من 5">${'★'.repeat(full)}${'☆'.repeat(5 - full)}</div>
        <small>من ${total.toLocaleString('en')} تقييم ${txt(c.source) ? `· ${txt(c.source)}` : ''}</small></div>
        <div>${n.map((v, i) => html`<div class="row"><span>${5 - i} ★</span><div class="tr"><div class="fl" style="width:${this.shown ? (v / total) * 100 : 0}%"></div></div><span class="pc">${Math.round((v / total) * 100)}٪</span></div>`)}
          <div class="rec">👍 ${rec}٪ من العملاء يقيّمونا 4 نجوم أو أكثر${c.link ? html` · <a href=${c.link} style="color:inherit">اقرأ التقييمات</a>` : ''}</div></div></div></div>`;
  }
}
