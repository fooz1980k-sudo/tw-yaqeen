import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, txt } from '../../shared/salla';

type QA = { q?: unknown; a?: unknown };
/** Searchable FAQ accordion that also publishes FAQPage structured data for Google. */
export default class YaqeenFaq extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; items?: QA[]; search?: boolean; contact?: string; color?: string };
  @state() private open = 0;
  @state() private q = '';
  private ld?: HTMLScriptElement;
  static styles = [base, css`
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
  private items() { return (this.config?.items ?? []).map((i) => ({ q: txt(i.q), a: txt(i.a) })).filter((i) => i.q); }
  updated(ch: Map<string, unknown>) {
    if (!ch.has('config')) return;
    this.ld?.remove();
    const items = this.items(); if (!items.length) return;
    this.ld = Object.assign(document.createElement('script'), { type: 'application/ld+json',
      textContent: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) }) });
    document.head.appendChild(this.ld);
  }
  disconnectedCallback() { super.disconnectedCallback(); this.ld?.remove(); }
  private hi(s: string) {
    const q = this.q.trim(); if (!q) return s; const i = s.toLowerCase().indexOf(q.toLowerCase()); if (i < 0) return s;
    return html`${s.slice(0, i)}<mark>${s.slice(i, i + q.length)}</mark>${s.slice(i + q.length)}`;
  }
  render() {
    const c = this.config ?? {}; const q = this.q.trim().toLowerCase();
    const list = this.items().filter((i) => !q || (i.q + ' ' + i.a).toLowerCase().includes(q));
    return html`<div class="wrap" style=${style(c.color)}><div class="grid">
      <div class="side"><span class="eyebrow">💬 أسئلة شائعة</span><h2 class="title">${txt(c.title) || 'عندك سؤال؟'}</h2>${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}
        ${c.search !== false ? html`<input type="search" placeholder="ابحث في الأسئلة… (مثلاً: الشحن)" .value=${this.q} @input=${(e: Event) => { this.q = (e.target as HTMLInputElement).value; this.open = 0; }} aria-label="ابحث في الأسئلة" />` : ''}
        ${c.contact ? html`<p class="ct">ما لقيت جوابك؟ <a href=${c.contact} style="color:var(--tf-accent);font-weight:700">كلّمنا ←</a></p>` : ''}</div>
      <div>${list.length ? list.map((i, n) => html`<div class="qa ${this.open === n ? 'on' : ''}">
          <button class="q" aria-expanded=${this.open === n} @click=${() => (this.open = this.open === n ? -1 : n)}><span>${this.hi(i.q)}</span><span class="pm">+</span></button>
          <div class="a" role="region"><div><p>${this.hi(i.a)}</p></div></div></div>`) : html`<p class="none">ما فيه سؤال يطابق «${this.q}».</p>`}</div>
    </div></div>`;
  }
}
