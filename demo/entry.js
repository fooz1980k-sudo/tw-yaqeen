import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/yaqeen-trust-bar.js');
await import('../dist/yaqeen-guarantee.js');
await import('../dist/yaqeen-faq.js');
await import('../dist/yaqeen-logos.js');
await import('../dist/yaqeen-rating.js');
window.__ready = true;
