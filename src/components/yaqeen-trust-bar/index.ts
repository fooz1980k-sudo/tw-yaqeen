import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, localizedString } from '../../shared/salla';

type Item = { emoji?: string; title?: unknown; text?: unknown };
/** Reassurance strip: shipping, returns, payment… Grid on desktop, a gentle auto-scroll on phones. */
export default class YaqeenTrustBar extends LitElement {
  @property({ type: Object }) config?: { items?: Item[]; dark?: boolean; color?: string };
  static styles = [base, css`
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
  private row(items: Item[], dup = false) {
    return items.map((i) => html`<div class="it ${dup ? 'dup' : ''}" aria-hidden=${dup ? 'true' : 'false'}><span class="em">${i.emoji || '✓'}</span><span><b>${localizedString(i.title)}</b>${localizedString(i.text) ? html`<small>${localizedString(i.text)}</small>` : ''}</span></div>`);
  }
  render() {
    const c = this.config ?? {}; const items = (c.items ?? []).filter((i) => localizedString(i.title));
    if (!items.length) return html``;
    return html`<div class="wrap" style="padding-block:18px"><div class="bar ${c.dark ? 'dark' : ''}" style=${style(c.color)}><div class="track">${this.row(items)}${this.row(items, true)}</div></div></div>`;
  }
}
