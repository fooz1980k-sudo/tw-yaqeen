var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o7) {
        if (this._$cssResult$ = true, o7 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s8 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s8 && 1 === s8.length;
          e5 && (t3 = o.get(s8)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s8, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o7 = 1 === t3.length ? t3[0] : e5.reduce((e6, s8, o8) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s8) + t3[o8 + 1], t3[0]);
      return new n(o7, t3, s);
    };
    S = (s8, o7) => {
      if (e) s8.adoptedStyleSheets = o7.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o7) {
        const o8 = document.createElement("style"), n6 = t.litNonce;
        void 0 !== n6 && o8.setAttribute("nonce", n6), o8.textContent = e5.cssText, s8.appendChild(o8);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s8 of t4.cssRules) e5 += s8.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s8) => t3;
    u = { toAttribute(t3, s8) {
      switch (s8) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s8) {
      let i5 = t3;
      switch (s8) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s8) => !i2(t3, s8);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s8 = b) {
        if (s8.state && (s8.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s8 = Object.create(s8)).wrapped = true), this.elementProperties.set(t3, s8), !s8.noAccessor) {
          const i5 = Symbol(), h5 = this.getPropertyDescriptor(t3, i5, s8);
          void 0 !== h5 && e2(this.prototype, t3, h5);
        }
      }
      static getPropertyDescriptor(t3, s8, i5) {
        const { get: e5, set: r7 } = h(this.prototype, t3) ?? { get() {
          return this[s8];
        }, set(t4) {
          this[s8] = t4;
        } };
        return { get: e5, set(s9) {
          const h5 = e5?.call(this);
          r7?.call(this, s9), this.requestUpdate(t3, h5, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s8 = [...r2(t4), ...o2(t4)];
          for (const i5 of s8) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s8 = litPropertyMetadata.get(t3);
          if (void 0 !== s8) for (const [t4, i5] of s8) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s8] of this.elementProperties) {
          const i5 = this._$Eu(t4, s8);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s8) {
        const i5 = [];
        if (Array.isArray(s8)) {
          const e5 = new Set(s8.flat(1 / 0).reverse());
          for (const s9 of e5) i5.unshift(c(s9));
        } else void 0 !== s8 && i5.push(c(s8));
        return i5;
      }
      static _$Eu(t3, s8) {
        const i5 = s8.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s8 = this.constructor.elementProperties;
        for (const i5 of s8.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s8, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s8) {
        const i5 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e5 && true === i5.reflect) {
          const h5 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s8, i5.type);
          this._$Em = t3, null == h5 ? this.removeAttribute(e5) : this.setAttribute(e5, h5), this._$Em = null;
        }
      }
      _$AK(t3, s8) {
        const i5 = this.constructor, e5 = i5._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i5.getPropertyOptions(e5), h5 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r7 = h5.fromAttribute(s8, t4.type);
          this[e5] = r7 ?? this._$Ej?.get(e5) ?? r7, this._$Em = null;
        }
      }
      requestUpdate(t3, s8, i5, e5 = false, h5) {
        if (void 0 !== t3) {
          const r7 = this.constructor;
          if (false === e5 && (h5 = this[t3]), i5 ??= r7.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h5, s8) || i5.useDefault && i5.reflect && h5 === this._$Ej?.get(t3) && !this.hasAttribute(r7._$Eu(t3, i5)))) return;
          this.C(t3, s8, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s8, { useDefault: i5, reflect: e5, wrapped: h5 }, r7) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r7 ?? s8 ?? this[t3]), true !== h5 || void 0 !== r7) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s8 = void 0), this._$AL.set(t3, s8)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s9] of this._$Ep) this[t5] = s9;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s9, i5] of t4) {
            const { wrapped: t5 } = i5, e5 = this[s9];
            true !== t5 || this._$AL.has(s9) || void 0 === e5 || this.C(s9, void 0, i5, e5);
          }
        }
        let t3 = false;
        const s8 = this._$AL;
        try {
          t3 = this.shouldUpdate(s8), t3 ? (this.willUpdate(s8), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s8)) : this._$EM();
        } catch (s9) {
          throw t3 = false, this._$EM(), s9;
        }
        t3 && this._$AE(s8);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s8 = t3, e5) {
  if (i5 === E) return i5;
  let h5 = void 0 !== e5 ? s8._$Co?.[e5] : s8._$Cl;
  const o7 = a2(i5) ? void 0 : i5._$litDirective$;
  return h5?.constructor !== o7 && (h5?._$AO?.(false), void 0 === o7 ? h5 = void 0 : (h5 = new o7(t3), h5._$AT(t3, s8, e5)), void 0 !== e5 ? (s8._$Co ??= [])[e5] = h5 : s8._$Cl = h5), void 0 !== h5 && (i5 = M(t3, h5._$AS(t3, i5.values), h5, e5)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s8) => ({ _$litType$: t3, strings: i5, values: s8 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s8 = t3.length - 1, e5 = [];
      let n6, l6 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c5 = v;
      for (let i6 = 0; i6 < s8; i6++) {
        const s9 = t3[i6];
        let a3, u6, d5 = -1, f5 = 0;
        for (; f5 < s9.length && (c5.lastIndex = f5, u6 = c5.exec(s9), null !== u6); ) f5 = c5.lastIndex, c5 === v ? "!--" === u6[1] ? c5 = _ : void 0 !== u6[1] ? c5 = m : void 0 !== u6[2] ? (y2.test(u6[2]) && (n6 = RegExp("</" + u6[2], "g")), c5 = p2) : void 0 !== u6[3] && (c5 = p2) : c5 === p2 ? ">" === u6[0] ? (c5 = n6 ?? v, d5 = -1) : void 0 === u6[1] ? d5 = -2 : (d5 = c5.lastIndex - u6[2].length, a3 = u6[1], c5 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n6 = void 0);
        const x4 = c5 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l6 += c5 === v ? s9 + r3 : d5 >= 0 ? (e5.push(a3), s9.slice(0, d5) + h2 + s9.slice(d5) + o3 + x4) : s9 + o3 + (-2 === d5 ? i6 : x4);
      }
      return [V(t3, l6 + (t3[s8] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e5) {
        let r7;
        this.parts = [];
        let l6 = 0, a3 = 0;
        const u6 = t3.length - 1, d5 = this.parts, [f5, v3] = N(t3, i5);
        if (this.el = _S.createElement(f5, e5), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r7 = P.nextNode()) && d5.length < u6; ) {
          if (1 === r7.nodeType) {
            if (r7.hasAttributes()) for (const t4 of r7.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v3[a3++], s8 = r7.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i6);
              d5.push({ type: 1, index: l6, name: e6[2], strings: s8, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r7.removeAttribute(t4);
            } else t4.startsWith(o3) && (d5.push({ type: 6, index: l6 }), r7.removeAttribute(t4));
            if (y2.test(r7.tagName)) {
              const t4 = r7.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r7.textContent = s2 ? s2.emptyScript : "";
                for (let s8 = 0; s8 < i6; s8++) r7.append(t4[s8], c3()), P.nextNode(), d5.push({ type: 2, index: ++l6 });
                r7.append(t4[i6], c3());
              }
            }
          } else if (8 === r7.nodeType) if (r7.data === n3) d5.push({ type: 2, index: l6 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r7.data.indexOf(o3, t4 + 1)); ) d5.push({ type: 7, index: l6 }), t4 += o3.length - 1;
          }
          l6++;
        }
      }
      static createElement(t3, i5) {
        const s8 = l2.createElement("template");
        return s8.innerHTML = t3, s8;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s8 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e5;
        let h5 = P.nextNode(), o7 = 0, n6 = 0, r7 = s8[0];
        for (; void 0 !== r7; ) {
          if (o7 === r7.index) {
            let i6;
            2 === r7.type ? i6 = new k(h5, h5.nextSibling, this, t3) : 1 === r7.type ? i6 = new r7.ctor(h5, r7.name, r7.strings, this, t3) : 6 === r7.type && (i6 = new Z(h5, this, t3)), this._$AV.push(i6), r7 = s8[++n6];
          }
          o7 !== r7?.index && (h5 = P.nextNode(), o7++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i5 = 0;
        for (const s8 of this._$AV) void 0 !== s8 && (void 0 !== s8.strings ? (s8._$AI(t3, s8, i5), i5 += s8.strings.length - 2) : s8._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s8, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s8, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s8 } = t3, e5 = "number" == typeof s8 ? this._$AC(t3) : (void 0 === s8.el && (s8.el = S2.createElement(V(s8.h, s8.h[0]), this.options)), s8);
        if (this._$AH?._$AD === e5) this._$AH.p(i5);
        else {
          const t4 = new R(e5, this), s9 = t4.u(this.options);
          t4.p(i5), this.T(s9), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s8, e5 = 0;
        for (const h5 of t3) e5 === i5.length ? i5.push(s8 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s8 = i5[e5], s8._$AI(h5), e5++;
        e5 < i5.length && (this._$AR(s8 && s8._$AB.nextSibling, e5), i5.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s8) {
        for (this._$AP?.(false, true, s8); t3 !== this._$AB; ) {
          const s9 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s9;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s8, e5, h5) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = h5, s8.length > 2 || "" !== s8[0] || "" !== s8[1] ? (this._$AH = Array(s8.length - 1).fill(new String()), this.strings = s8) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s8, e5) {
        const h5 = this.strings;
        let o7 = false;
        if (void 0 === h5) t3 = M(this, t3, i5, 0), o7 = !a2(t3) || t3 !== this._$AH && t3 !== E, o7 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n6, r7;
          for (t3 = h5[0], n6 = 0; n6 < h5.length - 1; n6++) r7 = M(this, e6[s8 + n6], i5, n6), r7 === E && (r7 = this._$AH[n6]), o7 ||= !a2(r7) || r7 !== this._$AH[n6], r7 === A ? t3 = A : t3 !== A && (t3 += (r7 ?? "") + h5[n6 + 1]), this._$AH[n6] = r7;
        }
        o7 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s8, e5, h5) {
        super(t3, i5, s8, e5, h5), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s8 = this._$AH, e5 = t3 === A && s8 !== A || t3.capture !== s8.capture || t3.once !== s8.once || t3.passive !== s8.passive, h5 = t3 !== A && (s8 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s8), h5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s8) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s8;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s8) => {
      const e5 = s8?.renderBefore ?? i5;
      let h5 = e5._$litPart$;
      if (void 0 === h5) {
        const t4 = s8?.renderBefore ?? null;
        e5._$litPart$ = h5 = new k(i5.insertBefore(c3(), t4), t4, void 0, s8 ?? {});
      }
      return h5._$AI(t3), h5;
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r7 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r7, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o7) => "object" == typeof o7 ? r4(t3, e5, o7) : ((t4, e6, o8) => {
    const r7 = e6.hasOwnProperty(o8);
    return e6.constructor.createProperty(o8, t4), r7 ? Object.getOwnPropertyDescriptor(e6, o8) : void 0;
  })(t3, e5, o7);
}
var o5, r4;
var init_property = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r7) => {
      const { kind: n6, metadata: i5 } = r7;
      let s8 = globalThis.litPropertyMetadata.get(i5);
      if (void 0 === s8 && globalThis.litPropertyMetadata.set(i5, s8 = /* @__PURE__ */ new Map()), "setter" === n6 && ((t3 = Object.create(t3)).wrapped = true), s8.set(r7.name, t3), "accessor" === n6) {
        const { name: o7 } = r7;
        return { set(r8) {
          const n7 = e5.get.call(this);
          e5.set.call(this, r8), this.requestUpdate(o7, n7, t3, true, r8);
        }, init(e6) {
          return void 0 !== e6 && this.C(o7, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n6) {
        const { name: o7 } = r7;
        return function(r8) {
          const n7 = this[o7];
          e5.call(this, r8), this.requestUpdate(o7, n7, t3, true, r8);
        };
      }
      throw Error("Unsupported decorator location: " + n6);
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r7) {
  return n4({ ...r7, state: true, attribute: false });
}
var init_state = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// ../dist/yaqeen-trust-bar.js
var yaqeen_trust_bar_exports = {};
__export(yaqeen_trust_bar_exports, {
  default: () => n5
});
var m2, s4, b3, g2, u3, p3, n5;
var init_yaqeen_trust_bar = __esm({
  "../dist/yaqeen-trust-bar.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m2 = i`
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
`;
    s4 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    b3 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    g2 = Object.defineProperty;
    u3 = (t3, a3, r7, e5) => {
      for (var i5 = void 0, d5 = t3.length - 1, l6; d5 >= 0; d5--)
        (l6 = t3[d5]) && (i5 = l6(a3, r7, i5) || i5);
      return i5 && g2(a3, r7, i5), i5;
    };
    p3 = class p4 extends i4 {
      row(a3, r7 = false) {
        return a3.map((e5) => b2`<div class="it ${r7 ? "dup" : ""}" aria-hidden=${r7 ? "true" : "false"}><span class="em">${e5.emoji || "\u2713"}</span><span><b>${s4(e5.title)}</b>${s4(e5.text) ? b2`<small>${s4(e5.text)}</small>` : ""}</span></div>`);
      }
      render() {
        const a3 = this.config ?? {}, r7 = (a3.items ?? []).filter((e5) => s4(e5.title));
        return r7.length ? b2`<div class="wrap" style="padding-block:18px"><div class="bar ${a3.dark ? "dark" : ""}" style=${b3(a3.color)}><div class="track">${this.row(r7)}${this.row(r7, true)}</div></div></div>` : b2``;
      }
    };
    p3.styles = [m2, i`
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
    n5 = p3;
    u3([
      n4({ type: Object })
    ], n5.prototype, "config");
    typeof n5 < "u" && n5.registerSallaComponent("salla-yaqeen-trust-bar");
  }
});

// ../dist/yaqeen-guarantee.js
var yaqeen_guarantee_exports = {};
__export(yaqeen_guarantee_exports, {
  default: () => o6
});
var m3, r6, b4, h3, u4, p5, o6;
var init_yaqeen_guarantee = __esm({
  "../dist/yaqeen-guarantee.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m3 = i`
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
`;
    r6 = (e5) => String(e5 && typeof e5 == "object" ? e5[(document.documentElement.lang || "ar").slice(0, 2)] ?? e5.ar ?? "" : e5 ?? "");
    b4 = (e5) => e5 ? `--tf-custom:${e5}` : "";
    h3 = Object.defineProperty;
    u4 = (e5, t3, n6, l6) => {
      for (var i5 = void 0, a3 = e5.length - 1, c5; a3 >= 0; a3--)
        (c5 = e5[a3]) && (i5 = c5(t3, n6, i5) || i5);
      return i5 && h3(t3, n6, i5), i5;
    };
    p5 = class p6 extends i4 {
      render() {
        const t3 = this.config ?? {}, n6 = r6(t3.seal) || "\u0636\u0645\u0627\u0646 \u0630\u0647\u0628\u064A \xB7 \u0631\u0636\u0627\u0643 \u0623\u0648\u0644\u0627\u064B \xB7 ", l6 = n6.repeat(Math.max(1, Math.floor(84 / n6.length))), i5 = (t3.promises ?? []).map((a3) => r6(a3.text)).filter(Boolean);
        return b2`<div class="wrap"><div class="box dark" style=${b4(t3.color)}><div class="glow"></div>
      <div class="seal"><svg class="ring" viewBox="0 0 200 200" aria-hidden="true">${w`<defs><path id="c" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"/></defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="#c9a45c" stroke-opacity=".45"/><circle cx="100" cy="100" r="70" fill="none" stroke="#c9a45c" stroke-opacity=".3" stroke-dasharray="2 5"/>
        <text font-size="12" font-weight="700" fill="#e9cf8f" direction="ltr"><textPath href="#c">${l6}</textPath></text>`}</svg>
        <div class="core"><b>${t3.days ?? 30}</b><span>يوم ضمان</span></div></div>
      <div><span class="eyebrow">🛡️ وعدنا لك</span><h2 class="title">${r6(t3.title) || "\u0627\u0634\u062A\u0631\u0650 \u0648\u0623\u0646\u062A \u0645\u0637\u0645\u0626\u0646"}</h2>${r6(t3.subtitle) ? b2`<p class="sub">${r6(t3.subtitle)}</p>` : ""}
        <ul>${i5.map((a3) => b2`<li><i>✓</i>${a3}</li>`)}</ul>
        ${r6(t3.button) && t3.link ? b2`<a class="btn" href=${t3.link}>${r6(t3.button)} ←</a>` : ""}</div>
    </div></div>`;
      }
    };
    p5.styles = [m3, i`
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
    o6 = p5;
    u4([
      n4({ type: Object })
    ], o6.prototype, "config");
    typeof o6 < "u" && o6.registerSallaComponent("salla-yaqeen-guarantee");
  }
});

// ../dist/yaqeen-faq.js
var yaqeen_faq_exports = {};
__export(yaqeen_faq_exports, {
  default: () => s5
});
var x2, p7, u5, b5, c4, d3, s5;
var init_yaqeen_faq = __esm({
  "../dist/yaqeen-faq.js"() {
    "use strict";
    init_lit();
    init_decorators();
    x2 = i`
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
`;
    p7 = (n6) => String(n6 && typeof n6 == "object" ? n6[(document.documentElement.lang || "ar").slice(0, 2)] ?? n6.ar ?? "" : n6 ?? "");
    u5 = (n6) => n6 ? `--tf-custom:${n6}` : "";
    b5 = Object.defineProperty;
    c4 = (n6, t3, e5, i5) => {
      for (var r7 = void 0, a3 = n6.length - 1, l6; a3 >= 0; a3--)
        (l6 = n6[a3]) && (r7 = l6(t3, e5, r7) || r7);
      return r7 && b5(t3, e5, r7), r7;
    };
    d3 = class d4 extends i4 {
      constructor() {
        super(...arguments), this.open = 0, this.q = "";
      }
      items() {
        var t3;
        return (((t3 = this.config) == null ? void 0 : t3.items) ?? []).map((e5) => ({ q: p7(e5.q), a: p7(e5.a) })).filter((e5) => e5.q);
      }
      updated(t3) {
        var i5;
        if (!t3.has("config")) return;
        (i5 = this.ld) == null || i5.remove();
        const e5 = this.items();
        e5.length && (this.ld = Object.assign(document.createElement("script"), {
          type: "application/ld+json",
          textContent: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: e5.map((r7) => ({ "@type": "Question", name: r7.q, acceptedAnswer: { "@type": "Answer", text: r7.a } })) })
        }), document.head.appendChild(this.ld));
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this.ld) == null || t3.remove();
      }
      hi(t3) {
        const e5 = this.q.trim();
        if (!e5) return t3;
        const i5 = t3.toLowerCase().indexOf(e5.toLowerCase());
        return i5 < 0 ? t3 : b2`${t3.slice(0, i5)}<mark>${t3.slice(i5, i5 + e5.length)}</mark>${t3.slice(i5 + e5.length)}`;
      }
      render() {
        const t3 = this.config ?? {}, e5 = this.q.trim().toLowerCase(), i5 = this.items().filter((r7) => !e5 || (r7.q + " " + r7.a).toLowerCase().includes(e5));
        return b2`<div class="wrap" style=${u5(t3.color)}><div class="grid">
      <div class="side"><span class="eyebrow">💬 أسئلة شائعة</span><h2 class="title">${p7(t3.title) || "\u0639\u0646\u062F\u0643 \u0633\u0624\u0627\u0644\u061F"}</h2>${p7(t3.subtitle) ? b2`<p class="sub">${p7(t3.subtitle)}</p>` : ""}
        ${t3.search !== false ? b2`<input type="search" placeholder="ابحث في الأسئلة… (مثلاً: الشحن)" .value=${this.q} @input=${(r7) => {
          this.q = r7.target.value, this.open = 0;
        }} aria-label="ابحث في الأسئلة" />` : ""}
        ${t3.contact ? b2`<p class="ct">ما لقيت جوابك؟ <a href=${t3.contact} style="color:var(--tf-accent);font-weight:700">كلّمنا ←</a></p>` : ""}</div>
      <div>${i5.length ? i5.map((r7, a3) => b2`<div class="qa ${this.open === a3 ? "on" : ""}">
          <button class="q" aria-expanded=${this.open === a3} @click=${() => this.open = this.open === a3 ? -1 : a3}><span>${this.hi(r7.q)}</span><span class="pm">+</span></button>
          <div class="a" role="region"><div><p>${this.hi(r7.a)}</p></div></div></div>`) : b2`<p class="none">ما فيه سؤال يطابق «${this.q}».</p>`}</div>
    </div></div>`;
      }
    };
    d3.styles = [x2, i`
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
    s5 = d3;
    c4([
      n4({ type: Object })
    ], s5.prototype, "config");
    c4([
      r5()
    ], s5.prototype, "open");
    c4([
      r5()
    ], s5.prototype, "q");
    typeof s5 < "u" && s5.registerSallaComponent("salla-yaqeen-faq");
  }
});

// ../dist/yaqeen-logos.js
var yaqeen_logos_exports = {};
__export(yaqeen_logos_exports, {
  default: () => p8
});
var g3, s6, x3, h4, l3, p8;
var init_yaqeen_logos = __esm({
  "../dist/yaqeen-logos.js"() {
    "use strict";
    init_lit();
    init_decorators();
    g3 = i`
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
`;
    s6 = (a3) => String(a3 && typeof a3 == "object" ? a3[(document.documentElement.lang || "ar").slice(0, 2)] ?? a3.ar ?? "" : a3 ?? "");
    x3 = Object.defineProperty;
    h4 = (a3, n6, i5, c5) => {
      for (var t3 = void 0, e5 = a3.length - 1, o7; e5 >= 0; e5--)
        (o7 = a3[e5]) && (t3 = o7(n6, i5, t3) || t3);
      return t3 && x3(n6, i5, t3), t3;
    };
    l3 = class l4 extends i4 {
      render() {
        const n6 = this.config ?? {}, i5 = (n6.logos ?? []).filter((t3) => t3.image || s6(t3.name));
        if (!i5.length) return b2``;
        const c5 = (t3) => i5.map((e5) => {
          const o7 = e5.image ? b2`<img src=${e5.image} alt=${s6(e5.name)} loading="lazy" />` : b2`<span class="nm">${s6(e5.name)}</span>`;
          return e5.link ? b2`<a href=${e5.link} aria-hidden=${t3}>${o7}</a>` : b2`<span class="l" aria-hidden=${t3}>${o7}</span>`;
        });
        return b2`<div class="wrap" style="padding-block:36px">${s6(n6.title) ? b2`<h3>${s6(n6.title)}</h3>` : ""}
      <div class="vp ${n6.color_always ? "color" : ""}" style="--d:${Math.max(10, 60 - (n6.speed ?? 30))}s"><div class="track">${c5(false)}${c5(true)}${c5(true)}</div></div></div>`;
      }
    };
    l3.styles = [g3, i`
    h3 { text-align: center; margin: 0 0 26px; font-size: 14px; letter-spacing: .25em; opacity: .55; font-weight: 700; }
    .vp { overflow: hidden; mask: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
    .track { display: flex; gap: clamp(36px, 6vw, 80px); width: max-content; align-items: center; animation: run var(--d, 30s) linear infinite; }
    .vp:hover .track { animation-play-state: paused; } :host-context([dir=ltr]) .track { animation-direction: reverse; }
    @keyframes run { to { transform: translateX(50%); } }
    a, span.l { display: block; height: 54px; flex: none; } img { height: 100%; width: auto; max-width: 170px; object-fit: contain; filter: grayscale(1) opacity(.55); transition: filter .4s, transform .4s; }
    .color img, a:hover img, span.l:hover img { filter: none; transform: scale(1.06); }
    .nm { font-weight: 800; font-size: 22px; opacity: .5; white-space: nowrap; line-height: 54px; }
  `];
    p8 = l3;
    h4([
      n4({ type: Object })
    ], p8.prototype, "config");
    typeof p8 < "u" && p8.registerSallaComponent("salla-yaqeen-logos");
  }
});

// ../dist/yaqeen-rating.js
var yaqeen_rating_exports = {};
__export(yaqeen_rating_exports, {
  default: () => s7
});
function w2(e5, t3, i5 = 0.25) {
  if (!("IntersectionObserver" in window)) {
    t3();
    return;
  }
  const a3 = new IntersectionObserver((r7) => {
    r7.some((o7) => o7.isIntersecting) && (a3.disconnect(), t3());
  }, { threshold: i5 });
  a3.observe(e5);
}
var v2, l5, y3, k2, g4, f3, s7;
var init_yaqeen_rating = __esm({
  "../dist/yaqeen-rating.js"() {
    "use strict";
    init_lit();
    init_decorators();
    v2 = i`
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
`;
    l5 = (e5) => String(e5 && typeof e5 == "object" ? e5[(document.documentElement.lang || "ar").slice(0, 2)] ?? e5.ar ?? "" : e5 ?? "");
    y3 = (e5) => e5 ? `--tf-custom:${e5}` : "";
    k2 = Object.defineProperty;
    g4 = (e5, t3, i5, a3) => {
      for (var r7 = void 0, o7 = e5.length - 1, p9; o7 >= 0; o7--)
        (p9 = e5[o7]) && (r7 = p9(t3, i5, r7) || r7);
      return r7 && k2(t3, i5, r7), r7;
    };
    f3 = class f4 extends i4 {
      constructor() {
        super(...arguments), this.shown = false;
      }
      firstUpdated() {
        w2(this, () => this.shown = true);
      }
      render() {
        const t3 = this.config ?? {}, i5 = [t3.s5, t3.s4, t3.s3, t3.s2, t3.s1].map((n6) => Math.max(0, Number(n6) || 0)), a3 = i5.reduce((n6, c5) => n6 + c5, 0);
        if (!a3) return b2``;
        const r7 = i5.reduce((n6, c5, m4) => n6 + c5 * (5 - m4), 0) / a3, o7 = Math.round((i5[0] + i5[1]) / a3 * 100), p9 = Math.round(r7);
        return b2`<div class="wrap" style=${y3(t3.color)}><span class="eyebrow">⭐ تقييمات حقيقية</span><h2 class="title">${l5(t3.title) || "\u0639\u0645\u0644\u0627\u0624\u0646\u0627 \u0642\u0627\u0644\u0648\u0627 \u0643\u0644\u0645\u062A\u0647\u0645"}</h2>
      <div class="box"><div class="avg"><b>${r7.toFixed(1)}</b><div class="st" aria-label="${r7.toFixed(1)} من 5">${"\u2605".repeat(p9)}${"\u2606".repeat(5 - p9)}</div>
        <small>من ${a3.toLocaleString("en")} تقييم ${l5(t3.source) ? `\xB7 ${l5(t3.source)}` : ""}</small></div>
        <div>${i5.map((n6, c5) => b2`<div class="row"><span>${5 - c5} ★</span><div class="tr"><div class="fl" style="width:${this.shown ? n6 / a3 * 100 : 0}%"></div></div><span class="pc">${Math.round(n6 / a3 * 100)}٪</span></div>`)}
          <div class="rec">👍 ${o7}٪ من العملاء يقيّمونا 4 نجوم أو أكثر${t3.link ? b2` · <a href=${t3.link} style="color:inherit">اقرأ التقييمات</a>` : ""}</div></div></div></div>`;
      }
    };
    f3.styles = [v2, i`
    .box { display: grid; grid-template-columns: auto 1fr; gap: clamp(24px, 6vw, 80px); align-items: center; padding: clamp(26px, 5vw, 56px); border-radius: 28px; background: #fff; border: 1px solid #0000000f; box-shadow: 0 30px 60px -40px #0004; }
    @media (max-width: 680px) { .box { grid-template-columns: 1fr; text-align: center; } }
    .avg b { display: block; font-size: clamp(64px, 12vw, 104px); line-height: 1; font-weight: 800; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .st { color: #e3b341; font-size: 22px; letter-spacing: 3px; } .avg small { display: block; opacity: .6; margin-top: 6px; }
    .row { display: grid; grid-template-columns: 42px 1fr 52px; gap: 12px; align-items: center; margin: 10px 0; font-size: 14px; }
    .tr { height: 10px; border-radius: 99px; background: #0000000d; overflow: hidden; } .fl { height: 100%; width: 0; border-radius: inherit; background: var(--tf-gold); transition: width 1.4s cubic-bezier(.2,.8,.2,1); }
    .pc { opacity: .6; text-align: end; font-variant-numeric: tabular-nums; }
    .rec { margin-top: 16px; padding: 12px 16px; border-radius: 14px; background: color-mix(in srgb, var(--tf-accent) 10%, transparent); font-weight: 700; }
  `];
    s7 = f3;
    g4([
      n4({ type: Object })
    ], s7.prototype, "config");
    g4([
      r5()
    ], s7.prototype, "shown");
    typeof s7 < "u" && s7.registerSallaComponent("salla-yaqeen-rating");
  }
});

// entry.js
init_lit();
i4.registerSallaComponent = function(n6) {
  if (!customElements.get(n6)) customElements.define(n6, this);
};
await Promise.resolve().then(() => (init_yaqeen_trust_bar(), yaqeen_trust_bar_exports));
await Promise.resolve().then(() => (init_yaqeen_guarantee(), yaqeen_guarantee_exports));
await Promise.resolve().then(() => (init_yaqeen_faq(), yaqeen_faq_exports));
await Promise.resolve().then(() => (init_yaqeen_logos(), yaqeen_logos_exports));
await Promise.resolve().then(() => (init_yaqeen_rating(), yaqeen_rating_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
