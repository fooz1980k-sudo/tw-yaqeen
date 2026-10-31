import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { txt } from '../../shared/salla';

/** "As seen in / our brands" logo marquee: monochrome at rest, full colour on hover. */
export default class YaqeenLogos extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; logos?: { image?: string; name?: unknown; link?: string }[]; speed?: number; color_always?: boolean };
  static styles = [base, css`
    h3 { text-align: center; margin: 0 0 26px; font-size: 14px; letter-spacing: .25em; opacity: .55; font-weight: 700; }
    .vp { overflow: hidden; mask: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
    .track { display: flex; gap: clamp(36px, 6vw, 80px); width: max-content; align-items: center; animation: run var(--d, 30s) linear infinite; }
    .vp:hover .track { animation-play-state: paused; } :host-context([dir=ltr]) .track { animation-direction: reverse; }
    @keyframes run { to { transform: translateX(50%); } }
    a, span.l { display: block; height: 54px; flex: none; } img { height: 100%; width: auto; max-width: 170px; object-fit: contain; filter: grayscale(1) opacity(.55); transition: filter .4s, transform .4s; }
    .color img, a:hover img, span.l:hover img { filter: none; transform: scale(1.06); }
    .nm { font-weight: 800; font-size: 22px; opacity: .5; white-space: nowrap; line-height: 54px; }
  `];
  render() {
    const c = this.config ?? {}; const logos = (c.logos ?? []).filter((l) => l.image || txt(l.name));
    if (!logos.length) return html``;
    const row = (dup: boolean) => logos.map((l) => { const inner = l.image ? html`<img src=${l.image} alt=${txt(l.name)} loading="lazy" />` : html`<span class="nm">${txt(l.name)}</span>`;
      return l.link ? html`<a href=${l.link} aria-hidden=${dup}>${inner}</a>` : html`<span class="l" aria-hidden=${dup}>${inner}</span>`; });
    return html`<div class="wrap" style="padding-block:36px">${txt(c.title) ? html`<h3>${txt(c.title)}</h3>` : ''}
      <div class="vp ${c.color_always ? 'color' : ''}" style="--d:${Math.max(10, 60 - (c.speed ?? 30))}s"><div class="track">${row(false)}${row(true)}${row(true)}</div></div></div>`;
  }
}
