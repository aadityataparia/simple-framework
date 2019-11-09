(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function () {
	  var n;
	  function aa(a) {
	    var b = 0;
	    return function () {
	      return b < a.length ? {
	        done: !1,
	        value: a[b++]
	      } : {
	        done: !0
	      };
	    };
	  }
	  function ba(a) {
	    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
	    return b ? b.call(a) : {
	      next: aa(a)
	    };
	  }
	  function ca(a) {
	    if (!(a instanceof Array)) {
	      a = ba(a);
	      for (var b, c = []; !(b = a.next()).done;) {
	        c.push(b.value);
	      }
	      a = c;
	    }
	    return a;
	  }
	  var da = "undefined" != typeof window && window === this ? this : "undefined" != typeof commonjsGlobal && null != commonjsGlobal ? commonjsGlobal : this;
	  function p(a, b) {
	    return {
	      index: a,
	      o: [],
	      v: b
	    };
	  }
	  function ea(a, b, c, d) {
	    var e = 0,
	        f = 0,
	        g = 0,
	        h = 0,
	        m = Math.min(b - e, d - f);
	    if (0 == e && 0 == f) a: {
	      for (g = 0; g < m; g++) {
	        if (a[g] !== c[g]) break a;
	      }
	      g = m;
	    }
	    if (b == a.length && d == c.length) {
	      h = a.length;
	      for (var k = c.length, l = 0; l < m - g && fa(a[--h], c[--k]);) {
	        l++;
	      }
	      h = l;
	    }
	    e += g;
	    f += g;
	    b -= h;
	    d -= h;
	    if (0 == b - e && 0 == d - f) return [];
	    if (e == b) {
	      for (b = p(e, 0); f < d;) {
	        b.o.push(c[f++]);
	      }
	      return [b];
	    }
	    if (f == d) return [p(e, b - e)];
	    m = e;
	    g = f;
	    d = d - g + 1;
	    h = b - m + 1;
	    b = Array(d);
	    for (k = 0; k < d; k++) {
	      b[k] = Array(h), b[k][0] = k;
	    }
	    for (k = 0; k < h; k++) {
	      b[0][k] = k;
	    }
	    for (k = 1; k < d; k++) {
	      for (l = 1; l < h; l++) {
	        if (a[m + l - 1] === c[g + k - 1]) b[k][l] = b[k - 1][l - 1];else {
	          var q = b[k - 1][l] + 1,
	              B = b[k][l - 1] + 1;
	          b[k][l] = q < B ? q : B;
	        }
	      }
	    }
	    m = b.length - 1;
	    g = b[0].length - 1;
	    d = b[m][g];
	    for (a = []; 0 < m || 0 < g;) {
	      0 == m ? (a.push(2), g--) : 0 == g ? (a.push(3), m--) : (h = b[m - 1][g - 1], k = b[m - 1][g], l = b[m][g - 1], q = k < l ? k < h ? k : h : l < h ? l : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), m--, g--) : q == k ? (a.push(3), m--, d = k) : (a.push(2), g--, d = l));
	    }
	    a.reverse();
	    b = void 0;
	    m = [];
	    for (g = 0; g < a.length; g++) {
	      switch (a[g]) {
	        case 0:
	          b && (m.push(b), b = void 0);
	          e++;
	          f++;
	          break;
	        case 1:
	          b || (b = p(e, 0));
	          b.v++;
	          e++;
	          b.o.push(c[f]);
	          f++;
	          break;
	        case 2:
	          b || (b = p(e, 0));
	          b.v++;
	          e++;
	          break;
	        case 3:
	          b || (b = p(e, 0)), b.o.push(c[f]), f++;
	      }
	    }
	    b && m.push(b);
	    return m;
	  }
	  function fa(a, b) {
	    return a === b;
	  }
	  function ha() {}
	  ha.prototype.toJSON = function () {
	    return {};
	  };
	  function r(a) {
	    a.__shady || (a.__shady = new ha());
	    return a.__shady;
	  }
	  function t(a) {
	    return a && a.__shady;
	  }
	  var u = window.ShadyDOM || {};
	  u.U = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
	  var ia = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
	  u.f = !!(ia && ia.configurable && ia.get);
	  u.F = u.force || !u.U;
	  u.g = u.noPatch || !1;
	  u.J = u.preferPerformance;
	  u.L = navigator.userAgent.match("Trident");
	  function v(a) {
	    return (a = t(a)) && void 0 !== a.firstChild;
	  }
	  function w(a) {
	    return "ShadyRoot" === a.R;
	  }
	  function ja(a) {
	    return (a = (a = t(a)) && a.root) && ka(a);
	  }
	  var x = Element.prototype,
	      la = x.matches || x.matchesSelector || x.mozMatchesSelector || x.msMatchesSelector || x.oMatchesSelector || x.webkitMatchesSelector,
	      ma = document.createTextNode(""),
	      na = 0,
	      oa = [];
	  new MutationObserver(function () {
	    for (; oa.length;) {
	      try {
	        oa.shift()();
	      } catch (a) {
	        throw ma.textContent = na++, a;
	      }
	    }
	  }).observe(ma, {
	    characterData: !0
	  });
	  function pa(a) {
	    oa.push(a);
	    ma.textContent = na++;
	  }
	  var qa = !!document.contains;
	  function ra(a, b) {
	    for (; b;) {
	      if (b == a) return !0;
	      b = b.__shady_parentNode;
	    }
	    return !1;
	  }
	  function y(a) {
	    for (var b = a.length - 1; 0 <= b; b--) {
	      var c = a[b],
	          d = c.getAttribute("id") || c.getAttribute("name");
	      d && "length" !== d && isNaN(d) && (a[d] = c);
	    }
	    a.item = function (e) {
	      return a[e];
	    };
	    a.namedItem = function (e) {
	      if ("length" !== e && isNaN(e) && a[e]) return a[e];
	      for (var f = ba(a), g = f.next(); !g.done; g = f.next()) {
	        if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
	      }
	      return null;
	    };
	    return a;
	  }
	  function sa(a) {
	    var b = [];
	    for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) {
	      b.push(a);
	    }
	    return b;
	  }
	  function ta(a) {
	    var b = [];
	    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
	      b.push(a);
	    }
	    return b;
	  }
	  function z(a, b, c, d) {
	    c = void 0 === c ? "" : c;
	    for (var e in b) {
	      var f = b[e];
	      if (!(d && 0 <= d.indexOf(e))) {
	        f.configurable = !0;
	        var g = c + e;
	        if (f.value) a[g] = f.value;else try {
	          Object.defineProperty(a, g, f);
	        } catch (h) {}
	      }
	    }
	  }
	  function A(a) {
	    var b = {};
	    Object.getOwnPropertyNames(a).forEach(function (c) {
	      b[c] = Object.getOwnPropertyDescriptor(a, c);
	    });
	    return b;
	  }
	  var C = [],
	      ua;
	  function va(a) {
	    ua || (ua = !0, pa(D));
	    C.push(a);
	  }
	  function D() {
	    ua = !1;
	    for (var a = !!C.length; C.length;) {
	      C.shift()();
	    }
	    return a;
	  }
	  D.list = C;
	  var xa = A({
	    get childNodes() {
	      return this.__shady_childNodes;
	    },
	    get firstChild() {
	      return this.__shady_firstChild;
	    },
	    get lastChild() {
	      return this.__shady_lastChild;
	    },
	    get childElementCount() {
	      return this.__shady_childElementCount;
	    },
	    get children() {
	      return this.__shady_children;
	    },
	    get firstElementChild() {
	      return this.__shady_firstElementChild;
	    },
	    get lastElementChild() {
	      return this.__shady_lastElementChild;
	    },
	    get shadowRoot() {
	      return this.__shady_shadowRoot;
	    }
	  }),
	      ya = A({
	    get textContent() {
	      return this.__shady_textContent;
	    },
	    set textContent(a) {
	      this.__shady_textContent = a;
	    },
	    get innerHTML() {
	      return this.__shady_innerHTML;
	    },
	    set innerHTML(a) {
	      return this.__shady_innerHTML = a;
	    }
	  }),
	      za = A({
	    get parentElement() {
	      return this.__shady_parentElement;
	    },
	    get parentNode() {
	      return this.__shady_parentNode;
	    },
	    get nextSibling() {
	      return this.__shady_nextSibling;
	    },
	    get previousSibling() {
	      return this.__shady_previousSibling;
	    },
	    get nextElementSibling() {
	      return this.__shady_nextElementSibling;
	    },
	    get previousElementSibling() {
	      return this.__shady_previousElementSibling;
	    },
	    get className() {
	      return this.__shady_className;
	    },
	    set className(a) {
	      return this.__shady_className = a;
	    }
	  });
	  function Aa(a) {
	    for (var b in a) {
	      var c = a[b];
	      c && (c.enumerable = !1);
	    }
	  }
	  Aa(xa);
	  Aa(ya);
	  Aa(za);
	  var Ba = u.f || u.g,
	      Ca = Ba ? function () {} : function (a) {
	    var b = r(a);
	    b.N || (b.N = !0, z(a, za));
	  },
	      Da = Ba ? function () {} : function (a) {
	    var b = r(a);
	    b.M || (b.M = !0, z(a, xa), window.customElements && !u.g || z(a, ya));
	  };
	  function Ea(a, b, c, d) {
	    Ca(a);
	    d = d || null;
	    var e = r(a),
	        f = d ? r(d) : null;
	    e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
	    if (f = t(e.previousSibling)) f.nextSibling = a;
	    if (f = t(e.nextSibling = d)) f.previousSibling = a;
	    e.parentNode = b;
	    d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
	    c.childNodes = null;
	  }
	  function Fa(a, b, c) {
	    Da(b);
	    var d = r(b);
	    void 0 !== d.firstChild && (d.childNodes = null);
	    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) {
	      Ea(a, b, d, c);
	    } else Ea(a, b, d, c);
	  }
	  function Ga(a, b) {
	    var c = r(a);
	    b = r(b);
	    a === b.firstChild && (b.firstChild = c.nextSibling);
	    a === b.lastChild && (b.lastChild = c.previousSibling);
	    a = c.previousSibling;
	    var d = c.nextSibling;
	    a && (r(a).nextSibling = d);
	    d && (r(d).previousSibling = a);
	    c.parentNode = c.previousSibling = c.nextSibling = void 0;
	    void 0 !== b.childNodes && (b.childNodes = null);
	  }
	  function E(a, b) {
	    var c = r(a);
	    if (b || void 0 === c.firstChild) {
	      c.childNodes = null;
	      var d = c.firstChild = a.__shady_native_firstChild;
	      c.lastChild = a.__shady_native_lastChild;
	      Da(a);
	      c = d;
	      for (d = void 0; c; c = c.__shady_native_nextSibling) {
	        var e = r(c);
	        e.parentNode = b || a;
	        e.nextSibling = c.__shady_native_nextSibling;
	        e.previousSibling = d || null;
	        d = c;
	        Ca(c);
	      }
	    }
	  }
	  var Ha = window.document,
	      Ia = u.J,
	      Ja = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
	      Ka = Ja && Ja.get;
	  function La(a) {
	    for (var b; b = a.__shady_firstChild;) {
	      a.__shady_removeChild(b);
	    }
	  }
	  function Ma(a) {
	    var b = t(a);
	    if (b && void 0 !== b.A) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) {
	      Ma(b);
	    }
	    if (a = t(a)) a.A = void 0;
	  }
	  function Na(a) {
	    var b = a;
	    a && "slot" === a.localName && (b = (b = (b = t(a)) && b.l) && b.length ? b[0] : Na(a.__shady_nextSibling));
	    return b;
	  }
	  function Oa(a, b, c) {
	    if (a = (a = t(a)) && a.m) b && (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? a.addedNodes.push.apply(a.addedNodes, ca(b.childNodes)) : a.addedNodes.push(b)), c && a.removedNodes.push(c), Pa(a);
	  }
	  var J = A({
	    get parentNode() {
	      var a = t(this);
	      a = a && a.parentNode;
	      return void 0 !== a ? a : this.__shady_native_parentNode;
	    },
	    get firstChild() {
	      var a = t(this);
	      a = a && a.firstChild;
	      return void 0 !== a ? a : this.__shady_native_firstChild;
	    },
	    get lastChild() {
	      var a = t(this);
	      a = a && a.lastChild;
	      return void 0 !== a ? a : this.__shady_native_lastChild;
	    },
	    get nextSibling() {
	      var a = t(this);
	      a = a && a.nextSibling;
	      return void 0 !== a ? a : this.__shady_native_nextSibling;
	    },
	    get previousSibling() {
	      var a = t(this);
	      a = a && a.previousSibling;
	      return void 0 !== a ? a : this.__shady_native_previousSibling;
	    },
	    get childNodes() {
	      if (v(this)) {
	        var a = t(this);
	        if (!a.childNodes) {
	          a.childNodes = [];
	          for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) {
	            a.childNodes.push(b);
	          }
	        }
	        var c = a.childNodes;
	      } else c = this.__shady_native_childNodes;
	      c.item = function (d) {
	        return c[d];
	      };
	      return c;
	    },
	    get parentElement() {
	      var a = t(this);
	      (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
	      return void 0 !== a ? a : this.__shady_native_parentElement;
	    },
	    get isConnected() {
	      if (Ka && Ka.call(this)) return !0;
	      if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
	      var a = this.ownerDocument;
	      if (qa) {
	        if (a.__shady_native_contains(this)) return !0;
	      } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;
	      for (a = this; a && !(a instanceof Document);) {
	        a = a.__shady_parentNode || (w(a) ? a.host : void 0);
	      }
	      return !!(a && a instanceof Document);
	    },
	    get textContent() {
	      if (v(this)) {
	        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) {
	          b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
	        }
	        return a.join("");
	      }
	      return this.__shady_native_textContent;
	    },
	    set textContent(a) {
	      if ("undefined" === typeof a || null === a) a = "";
	      switch (this.nodeType) {
	        case Node.ELEMENT_NODE:
	        case Node.DOCUMENT_FRAGMENT_NODE:
	          if (!v(this) && u.f) {
	            var b = this.__shady_firstChild;
	            (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && La(this);
	            this.__shady_native_textContent = a;
	          } else La(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
	          break;
	        default:
	          this.nodeValue = a;
	      }
	    },
	    insertBefore: function (a, b) {
	      if (this.ownerDocument !== Ha && a.ownerDocument !== Ha) return this.__shady_native_insertBefore(a, b), a;
	      if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
	      if (b) {
	        var c = t(b);
	        c = c && c.parentNode;
	        if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
	      }
	      if (b === a) return a;
	      Oa(this, a);
	      var d = [],
	          e = (c = F(this)) ? c.host.localName : G(this),
	          f = a.__shady_parentNode;
	      if (f) {
	        var g = G(a);
	        var h = !!c || !F(a) || Ia && void 0 !== this.__noInsertionPoint;
	        f.__shady_removeChild(a, h);
	      }
	      f = !0;
	      var m = (!Ia || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Qa(a, e),
	          k = c && !a.__noInsertionPoint && (!Ia || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
	      if (k || m) m && (g = g || G(a)), Ra(a, function (l) {
	        k && "slot" === l.localName && d.push(l);
	        if (m) {
	          var q = g;
	          H() && (q && Sa(l, q), (q = H()) && q.scopeNode(l, e));
	        }
	      });
	      d.length && (Ta(c), c.c.push.apply(c.c, ca(d)), I(c));
	      v(this) && (Fa(a, this, b), c = t(this), ja(this) ? (I(c.root), f = !1) : c.root && (f = !1));
	      f ? (c = w(this) ? this.host : this, b ? (b = Na(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
	      return a;
	    },
	    appendChild: function (a) {
	      if (this != a || !w(a)) return this.__shady_insertBefore(a);
	    },
	    removeChild: function (a, b) {
	      b = void 0 === b ? !1 : b;
	      if (this.ownerDocument !== Ha) return this.__shady_native_removeChild(a);
	      if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
	      Oa(this, null, a);
	      var c = F(a),
	          d = c && Ua(c, a),
	          e = t(this);
	      if (v(this) && (Ga(a, this), ja(this))) {
	        I(e.root);
	        var f = !0;
	      }
	      if (H() && !b && c && a.nodeType !== Node.TEXT_NODE) {
	        var g = G(a);
	        Ra(a, function (h) {
	          Sa(h, g);
	        });
	      }
	      Ma(a);
	      c && ((b = this && "slot" === this.localName) && (f = !0), (d || b) && I(c));
	      f || (f = w(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
	      return a;
	    },
	    replaceChild: function (a, b) {
	      this.__shady_insertBefore(a, b);
	      this.__shady_removeChild(b);
	      return a;
	    },
	    cloneNode: function (a) {
	      if ("template" == this.localName) return this.__shady_native_cloneNode(a);
	      var b = this.__shady_native_cloneNode(!1);
	      if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
	        a = this.__shady_firstChild;
	        for (var c; a; a = a.__shady_nextSibling) {
	          c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
	        }
	      }
	      return b;
	    },
	    getRootNode: function (a) {
	      if (this && this.nodeType) {
	        var b = r(this),
	            c = b.A;
	        void 0 === c && (w(this) ? (c = this, b.A = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.A = c)));
	        return c;
	      }
	    },
	    contains: function (a) {
	      return ra(this, a);
	    }
	  });
	  function Va(a, b, c) {
	    var d = [];
	    Wa(a, b, c, d);
	    return d;
	  }
	  function Wa(a, b, c, d) {
	    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
	      var e;
	      if (e = a.nodeType === Node.ELEMENT_NODE) {
	        e = a;
	        var f = b,
	            g = c,
	            h = d,
	            m = f(e);
	        m && h.push(e);
	        g && g(m) ? e = m : (Wa(e, f, g, h), e = void 0);
	      }
	      if (e) break;
	    }
	  }
	  var K = A({
	    get firstElementChild() {
	      var a = t(this);
	      if (a && void 0 !== a.firstChild) {
	        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
	          a = a.__shady_nextSibling;
	        }
	        return a;
	      }
	      return this.__shady_native_firstElementChild;
	    },
	    get lastElementChild() {
	      var a = t(this);
	      if (a && void 0 !== a.lastChild) {
	        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
	          a = a.__shady_previousSibling;
	        }
	        return a;
	      }
	      return this.__shady_native_lastElementChild;
	    },
	    get children() {
	      return v(this) ? y(Array.prototype.filter.call(ta(this), function (a) {
	        return a.nodeType === Node.ELEMENT_NODE;
	      })) : this.__shady_native_children;
	    },
	    get childElementCount() {
	      var a = this.__shady_children;
	      return a ? a.length : 0;
	    }
	  }),
	      Xa = A({
	    querySelector: function (a) {
	      return Va(this, function (b) {
	        return la.call(b, a);
	      }, function (b) {
	        return !!b;
	      })[0] || null;
	    },
	    querySelectorAll: function (a, b) {
	      if (b) {
	        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));
	        var c = this.__shady_getRootNode();
	        return y(b.filter(function (d) {
	          return d.__shady_getRootNode() == c;
	        }));
	      }
	      return y(Va(this, function (d) {
	        return la.call(d, a);
	      }));
	    }
	  }),
	      Ya = u.J && !u.g ? Object.assign({}, K) : K;
	  Object.assign(K, Xa);
	  var Za = A({
	    getElementById: function (a) {
	      return "" === a ? null : Va(this, function (b) {
	        return b.id == a;
	      }, function (b) {
	        return !!b;
	      })[0] || null;
	    }
	  });
	  var $a = A({
	    get activeElement() {
	      var a = u.f ? document.__shady_native_activeElement : document.activeElement;
	      if (!a || !a.nodeType) return null;
	      var b = !!w(this);
	      if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;
	      for (b = F(a); b && b !== this;) {
	        a = b.host, b = F(a);
	      }
	      return this === document ? b ? null : a : b === this ? a : null;
	    }
	  });
	  var ab = /[&\u00A0"]/g,
	      bb = /[&\u00A0<>]/g;
	  function cb(a) {
	    switch (a) {
	      case "&":
	        return "&amp;";
	      case "<":
	        return "&lt;";
	      case ">":
	        return "&gt;";
	      case '"':
	        return "&quot;";
	      case "\u00a0":
	        return "&nbsp;";
	    }
	  }
	  function db(a) {
	    for (var b = {}, c = 0; c < a.length; c++) {
	      b[a[c]] = !0;
	    }
	    return b;
	  }
	  var eb = db("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
	      fb = db("style script xmp iframe noembed noframes plaintext noscript".split(" "));
	  function gb(a, b) {
	    "template" === a.localName && (a = a.content);
	    for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
	      a: {
	        var h = g;
	        var m = a,
	            k = b;
	        switch (h.nodeType) {
	          case Node.ELEMENT_NODE:
	            m = h.localName;
	            for (var l = "<" + m, q = h.attributes, B = 0, wa; wa = q[B]; B++) {
	              l += " " + wa.name + '="' + wa.value.replace(ab, cb) + '"';
	            }
	            l += ">";
	            h = eb[m] ? l : l + gb(h, k) + "</" + m + ">";
	            break a;
	          case Node.TEXT_NODE:
	            h = h.data;
	            h = m && fb[m.localName] ? h : h.replace(bb, cb);
	            break a;
	          case Node.COMMENT_NODE:
	            h = "\x3c!--" + h.data + "--\x3e";
	            break a;
	          default:
	            throw window.console.error(h), Error("not implemented");
	        }
	      }
	      c += h;
	    }
	    return c;
	  }
	  var hb = document.implementation.createHTMLDocument("inert"),
	      ib = A({
	    get innerHTML() {
	      return v(this) ? gb("template" === this.localName ? this.content : this, ta) : this.__shady_native_innerHTML;
	    },
	    set innerHTML(a) {
	      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
	        La(this);
	        var b = this.localName || "div";
	        b = this.namespaceURI && this.namespaceURI !== hb.namespaceURI ? hb.createElementNS(this.namespaceURI, b) : hb.createElement(b);
	        for (u.f ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) {
	          this.__shady_insertBefore(a);
	        }
	      }
	    }
	  });
	  var jb = A({
	    addEventListener: function (a, b, c) {
	      "object" !== typeof c && (c = {
	        capture: !!c
	      });
	      c.i = c.i || this;
	      this.host.__shady_addEventListener(a, b, c);
	    },
	    removeEventListener: function (a, b, c) {
	      "object" !== typeof c && (c = {
	        capture: !!c
	      });
	      c.i = c.i || this;
	      this.host.__shady_removeEventListener(a, b, c);
	    }
	  });
	  function kb(a, b) {
	    z(a, jb, b);
	    z(a, $a, b);
	    z(a, ib, b);
	    z(a, K, b);
	    u.g && !b ? (z(a, J, b), z(a, Za, b)) : u.f || (z(a, za), z(a, xa), z(a, ya));
	  }
	  var lb = {},
	      L = u.deferConnectionCallbacks && "loading" === document.readyState,
	      M;
	  function mb(a) {
	    var b = [];
	    do {
	      b.unshift(a);
	    } while (a = a.__shady_parentNode);
	    return b;
	  }
	  function N(a, b, c) {
	    if (a !== lb) throw new TypeError("Illegal constructor");
	    this.a = null;
	    nb(this, b, c);
	  }
	  function nb(a, b, c) {
	    a.R = "ShadyRoot";
	    a.host = b;
	    a.mode = c && c.mode;
	    E(a.host);
	    b = r(a.host);
	    b.root = a;
	    b.V = "closed" !== a.mode ? a : null;
	    b = r(a);
	    b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
	    if (u.preferPerformance) for (; b = a.host.__shady_native_firstChild;) {
	      a.host.__shady_native_removeChild(b);
	    } else I(a);
	  }
	  function I(a) {
	    a.j || (a.j = !0, va(function () {
	      return O(a);
	    }));
	  }
	  function O(a) {
	    var b;
	    if (b = a.j) {
	      for (var c; a;) {
	        a: {
	          a.j && (c = a), b = a;
	          a = b.host.__shady_getRootNode();
	          if (w(a) && (b = t(b.host)) && 0 < b.u) break a;
	          a = void 0;
	        }
	      }
	      b = c;
	    }
	    (c = b) && c._renderSelf();
	  }
	  N.prototype._renderSelf = function () {
	    var a = L;
	    L = !0;
	    this.j = !1;
	    if (this.a) {
	      P(this);
	      for (var b = 0, c; b < this.a.length; b++) {
	        c = this.a[b];
	        var d = t(c),
	            e = d.assignedNodes;
	        d.assignedNodes = [];
	        d.l = [];
	        if (d.H = e) for (d = 0; d < e.length; d++) {
	          var f = t(e[d]);
	          f.C = f.assignedSlot;
	          f.assignedSlot === c && (f.assignedSlot = null);
	        }
	      }
	      for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
	        ob(this, b);
	      }
	      for (b = 0; b < this.a.length; b++) {
	        c = this.a[b];
	        e = t(c);
	        if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) {
	          ob(this, d, c);
	        }
	        (d = (d = t(c.__shady_parentNode)) && d.root) && (ka(d) || d.j) && d._renderSelf();
	        pb(this, e.l, e.assignedNodes);
	        if (d = e.H) {
	          for (f = 0; f < d.length; f++) {
	            t(d[f]).C = null;
	          }
	          e.H = null;
	          d.length > e.assignedNodes.length && (e.D = !0);
	        }
	        e.D && (e.D = !1, qb(this, c));
	      }
	      c = this.a;
	      b = [];
	      for (e = 0; e < c.length; e++) {
	        d = c[e].__shady_parentNode, (f = t(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);
	      }
	      for (c = 0; c < b.length; c++) {
	        f = b[c];
	        e = f === this ? this.host : f;
	        d = [];
	        for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) {
	          if ("slot" == f.localName) for (var g = t(f).l, h = 0; h < g.length; h++) {
	            d.push(g[h]);
	          } else d.push(f);
	        }
	        f = sa(e);
	        g = ea(d, d.length, f, f.length);
	        for (var m = h = 0, k = void 0; h < g.length && (k = g[h]); h++) {
	          for (var l = 0, q = void 0; l < k.o.length && (q = k.o[l]); l++) {
	            q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(k.index + m, 1);
	          }
	          m -= k.v;
	        }
	        m = 0;
	        for (k = void 0; m < g.length && (k = g[m]); m++) {
	          for (h = f[k.index], l = k.index; l < k.index + k.v; l++) {
	            q = d[l], e.__shady_native_insertBefore(q, h), f.splice(l, 0, q);
	          }
	        }
	      }
	    }
	    if (!u.preferPerformance && !this.G) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
	      c = t(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
	    }
	    this.G = !0;
	    L = a;
	    M && M();
	  };
	  function ob(a, b, c) {
	    var d = r(b),
	        e = d.C;
	    d.C = null;
	    c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);
	    c ? (r(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
	    e !== d.assignedSlot && d.assignedSlot && (r(d.assignedSlot).D = !0);
	  }
	  function pb(a, b, c) {
	    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) {
	      if ("slot" == e.localName) {
	        var f = t(e).assignedNodes;
	        f && f.length && pb(a, b, f);
	      } else b.push(c[d]);
	    }
	  }
	  function qb(a, b) {
	    b.__shady_native_dispatchEvent(new Event("slotchange"));
	    b = t(b);
	    b.assignedSlot && qb(a, b.assignedSlot);
	  }
	  function Ta(a) {
	    a.c = a.c || [];
	    a.a = a.a || [];
	    a.b = a.b || {};
	  }
	  function P(a) {
	    if (a.c && a.c.length) {
	      for (var b = a.c, c, d = 0; d < b.length; d++) {
	        var e = b[d];
	        E(e);
	        var f = e.__shady_parentNode;
	        E(f);
	        f = t(f);
	        f.u = (f.u || 0) + 1;
	        f = rb(e);
	        a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];
	        a.a.push(e);
	      }
	      if (c) for (var g in c) {
	        a.b[g] = sb(a.b[g]);
	      }
	      a.c = [];
	    }
	  }
	  function rb(a) {
	    var b = a.name || a.getAttribute("name") || "__catchall";
	    return a.O = b;
	  }
	  function sb(a) {
	    return a.sort(function (b, c) {
	      b = mb(b);
	      for (var d = mb(c), e = 0; e < b.length; e++) {
	        c = b[e];
	        var f = d[e];
	        if (c !== f) return b = ta(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
	      }
	    });
	  }
	  function Ua(a, b) {
	    if (a.a) {
	      P(a);
	      var c = a.b,
	          d;
	      for (d in c) {
	        for (var e = c[d], f = 0; f < e.length; f++) {
	          var g = e[f];
	          if (ra(b, g)) {
	            e.splice(f, 1);
	            var h = a.a.indexOf(g);
	            0 <= h && (a.a.splice(h, 1), (h = t(g.__shady_parentNode)) && h.u && h.u--);
	            f--;
	            g = t(g);
	            if (h = g.l) for (var m = 0; m < h.length; m++) {
	              var k = h[m],
	                  l = k.__shady_native_parentNode;
	              l && l.__shady_native_removeChild(k);
	            }
	            g.l = [];
	            g.assignedNodes = [];
	            h = !0;
	          }
	        }
	      }
	      return h;
	    }
	  }
	  function ka(a) {
	    P(a);
	    return !(!a.a || !a.a.length);
	  }
	  (function (a) {
	    a.__proto__ = DocumentFragment.prototype;
	    kb(a, "__shady_");
	    kb(a);
	    Object.defineProperties(a, {
	      nodeType: {
	        value: Node.DOCUMENT_FRAGMENT_NODE,
	        configurable: !0
	      },
	      nodeName: {
	        value: "#document-fragment",
	        configurable: !0
	      },
	      nodeValue: {
	        value: null,
	        configurable: !0
	      }
	    });
	    ["localName", "namespaceURI", "prefix"].forEach(function (b) {
	      Object.defineProperty(a, b, {
	        value: void 0,
	        configurable: !0
	      });
	    });
	    ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
	      Object.defineProperty(a, b, {
	        get: function () {
	          return this.host[b];
	        },
	        configurable: !0
	      });
	    });
	  })(N.prototype);
	  if (window.customElements && u.F && !u.preferPerformance) {
	    var Q = new Map();
	    M = function () {
	      var a = [];
	      Q.forEach(function (d, e) {
	        a.push([e, d]);
	      });
	      Q.clear();
	      for (var b = 0; b < a.length; b++) {
	        var c = a[b][0];
	        a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
	      }
	    };
	    L && document.addEventListener("readystatechange", function () {
	      L = !1;
	      M();
	    }, {
	      once: !0
	    });
	    var tb = function (a, b, c) {
	      var d = 0,
	          e = "__isConnected" + d++;
	      if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
	        L ? Q.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
	      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
	        L ? this.isConnected || Q.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
	      };
	      return a;
	    },
	        ub = window.customElements.define,
	        vb = function (a, b) {
	      var c = b.prototype.connectedCallback,
	          d = b.prototype.disconnectedCallback;
	      ub.call(window.customElements, a, tb(b, c, d));
	      b.prototype.connectedCallback = c;
	      b.prototype.disconnectedCallback = d;
	    };
	    window.customElements.define = vb;
	    Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
	      value: vb,
	      configurable: !0
	    });
	  }
	  function F(a) {
	    a = a.__shady_getRootNode();
	    if (w(a)) return a;
	  }
	  function wb() {
	    this.a = !1;
	    this.addedNodes = [];
	    this.removedNodes = [];
	    this.w = new Set();
	  }
	  function Pa(a) {
	    a.a || (a.a = !0, pa(function () {
	      a.flush();
	    }));
	  }
	  wb.prototype.flush = function () {
	    if (this.a) {
	      this.a = !1;
	      var a = this.takeRecords();
	      a.length && this.w.forEach(function (b) {
	        b(a);
	      });
	    }
	  };
	  wb.prototype.takeRecords = function () {
	    if (this.addedNodes.length || this.removedNodes.length) {
	      var a = [{
	        addedNodes: this.addedNodes,
	        removedNodes: this.removedNodes
	      }];
	      this.addedNodes = [];
	      this.removedNodes = [];
	      return a;
	    }
	    return [];
	  };
	  function xb(a, b) {
	    var c = r(a);
	    c.m || (c.m = new wb());
	    c.m.w.add(b);
	    var d = c.m;
	    return {
	      P: b,
	      T: d,
	      S: a,
	      takeRecords: function () {
	        return d.takeRecords();
	      }
	    };
	  }
	  function yb(a) {
	    var b = a && a.T;
	    b && (b.w.delete(a.P), b.w.size || (r(a.S).m = null));
	  }
	  function zb(a, b) {
	    var c = b.getRootNode();
	    return a.map(function (d) {
	      var e = c === d.target.getRootNode();
	      if (e && d.addedNodes) {
	        if (e = Array.from(d.addedNodes).filter(function (f) {
	          return c === f.getRootNode();
	        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", {
	          value: e,
	          configurable: !0
	        }), d;
	      } else if (e) return d;
	    }).filter(function (d) {
	      return d;
	    });
	  }
	  var R = "__eventWrappers" + Date.now(),
	      Ab = function () {
	    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
	    return a ? function (b) {
	      return a.get.call(b);
	    } : null;
	  }(),
	      Bb = function () {
	    function a() {}
	    var b = !1,
	        c = {
	      get capture() {
	        b = !0;
	        return !1;
	      }
	    };
	    window.addEventListener("test", a, c);
	    window.removeEventListener("test", a, c);
	    return b;
	  }();
	  function Cb(a) {
	    if (a && "object" === typeof a) {
	      var b = !!a.capture;
	      var c = !!a.once;
	      var d = !!a.passive;
	      var e = a.i;
	    } else b = !!a, d = c = !1;
	    return {
	      K: e,
	      capture: b,
	      once: c,
	      passive: d,
	      I: Bb ? a : b
	    };
	  }
	  var Db = {
	    blur: !0,
	    focus: !0,
	    focusin: !0,
	    focusout: !0,
	    click: !0,
	    dblclick: !0,
	    mousedown: !0,
	    mouseenter: !0,
	    mouseleave: !0,
	    mousemove: !0,
	    mouseout: !0,
	    mouseover: !0,
	    mouseup: !0,
	    wheel: !0,
	    beforeinput: !0,
	    input: !0,
	    keydown: !0,
	    keyup: !0,
	    compositionstart: !0,
	    compositionupdate: !0,
	    compositionend: !0,
	    touchstart: !0,
	    touchend: !0,
	    touchmove: !0,
	    touchcancel: !0,
	    pointerover: !0,
	    pointerenter: !0,
	    pointerdown: !0,
	    pointermove: !0,
	    pointerup: !0,
	    pointercancel: !0,
	    pointerout: !0,
	    pointerleave: !0,
	    gotpointercapture: !0,
	    lostpointercapture: !0,
	    dragstart: !0,
	    drag: !0,
	    dragenter: !0,
	    dragleave: !0,
	    dragover: !0,
	    drop: !0,
	    dragend: !0,
	    DOMActivate: !0,
	    DOMFocusIn: !0,
	    DOMFocusOut: !0,
	    keypress: !0
	  },
	      Eb = {
	    DOMAttrModified: !0,
	    DOMAttributeNameChanged: !0,
	    DOMCharacterDataModified: !0,
	    DOMElementNameChanged: !0,
	    DOMNodeInserted: !0,
	    DOMNodeInsertedIntoDocument: !0,
	    DOMNodeRemoved: !0,
	    DOMNodeRemovedFromDocument: !0,
	    DOMSubtreeModified: !0
	  };
	  function Fb(a) {
	    return a instanceof Node ? a.__shady_getRootNode() : a;
	  }
	  function S(a, b) {
	    var c = [],
	        d = a;
	    for (a = Fb(a); d;) {
	      c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;
	    }
	    c[c.length - 1] === document && c.push(window);
	    return c;
	  }
	  function Gb(a) {
	    a.__composedPath || (a.__composedPath = S(a.target, !0));
	    return a.__composedPath;
	  }
	  function Hb(a, b) {
	    if (!w) return a;
	    a = S(a, !0);
	    for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) {
	      if (d = b[c], f = Fb(d), f !== e && (g = a.indexOf(f), e = f), !w(f) || -1 < g) return d;
	    }
	  }
	  function Ib(a) {
	    function b(c, d) {
	      c = new a(c, d);
	      c.__composed = d && !!d.composed;
	      return c;
	    }
	    b.__proto__ = a;
	    b.prototype = a.prototype;
	    return b;
	  }
	  var Jb = {
	    focus: !0,
	    blur: !0
	  };
	  function Kb(a) {
	    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
	  }
	  function Lb(a, b, c) {
	    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!Kb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++) {
	    }
	  }
	  function Mb(a) {
	    var b = a.composedPath();
	    Object.defineProperty(a, "currentTarget", {
	      get: function () {
	        return d;
	      },
	      configurable: !0
	    });
	    for (var c = b.length - 1; 0 <= c; c--) {
	      var d = b[c];
	      Lb(a, d, "capture");
	      if (a.B) return;
	    }
	    Object.defineProperty(a, "eventPhase", {
	      get: function () {
	        return Event.AT_TARGET;
	      }
	    });
	    var e;
	    for (c = 0; c < b.length; c++) {
	      d = b[c];
	      var f = t(d);
	      f = f && f.root;
	      if (0 === c || f && f === e) if (Lb(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.B) break;
	    }
	  }
	  function Nb(a, b, c, d, e, f) {
	    for (var g = 0; g < a.length; g++) {
	      var h = a[g],
	          m = h.type,
	          k = h.capture,
	          l = h.once,
	          q = h.passive;
	      if (b === h.node && c === m && d === k && e === l && f === q) return g;
	    }
	    return -1;
	  }
	  function Ob(a) {
	    D();
	    return this.__shady_native_dispatchEvent(a);
	  }
	  function Pb(a, b, c) {
	    var d = Cb(c),
	        e = d.capture,
	        f = d.once,
	        g = d.passive,
	        h = d.K;
	    d = d.I;
	    if (b) {
	      var m = typeof b;
	      if ("function" === m || "object" === m) if ("object" !== m || b.handleEvent && "function" === typeof b.handleEvent) {
	        if (Eb[a]) return this.__shady_native_addEventListener(a, b, d);
	        var k = h || this;
	        if (h = b[R]) {
	          if (-1 < Nb(h, k, a, e, f, g)) return;
	        } else b[R] = [];
	        h = function (l) {
	          f && this.__shady_removeEventListener(a, b, c);
	          l.__target || Qb(l);
	          if (k !== this) {
	            var q = Object.getOwnPropertyDescriptor(l, "currentTarget");
	            Object.defineProperty(l, "currentTarget", {
	              get: function () {
	                return k;
	              },
	              configurable: !0
	            });
	          }
	          l.__previousCurrentTarget = l.currentTarget;
	          if (!w(k) && "slot" !== k.localName || -1 != l.composedPath().indexOf(k)) if (l.composed || -1 < l.composedPath().indexOf(k)) if (Kb(l) && l.target === l.relatedTarget) l.eventPhase === Event.BUBBLING_PHASE && l.stopImmediatePropagation();else if (l.eventPhase === Event.CAPTURING_PHASE || l.bubbles || l.target === k || k instanceof Window) {
	            var B = "function" === m ? b.call(k, l) : b.handleEvent && b.handleEvent(l);
	            k !== this && (q ? (Object.defineProperty(l, "currentTarget", q), q = null) : delete l.currentTarget);
	            return B;
	          }
	        };
	        b[R].push({
	          node: k,
	          type: a,
	          capture: e,
	          once: f,
	          passive: g,
	          W: h
	        });
	        Jb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
	          capture: [],
	          bubble: []
	        }, this.__handlers[a][e ? "capture" : "bubble"].push(h)) : this.__shady_native_addEventListener(a, h, d);
	      }
	    }
	  }
	  function Rb(a, b, c) {
	    if (b) {
	      var d = Cb(c);
	      c = d.capture;
	      var e = d.once,
	          f = d.passive,
	          g = d.K;
	      d = d.I;
	      if (Eb[a]) return this.__shady_native_removeEventListener(a, b, d);
	      var h = g || this;
	      g = void 0;
	      var m = null;
	      try {
	        m = b[R];
	      } catch (k) {}
	      m && (e = Nb(m, h, a, c, e, f), -1 < e && (g = m.splice(e, 1)[0].W, m.length || (b[R] = void 0)));
	      this.__shady_native_removeEventListener(a, g || b, d);
	      g && Jb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
	    }
	  }
	  function Sb() {
	    for (var a in Jb) {
	      window.__shady_native_addEventListener(a, function (b) {
	        b.__target || (Qb(b), Mb(b));
	      }, !0);
	    }
	  }
	  var Tb = A({
	    get composed() {
	      void 0 === this.__composed && (Ab ? this.__composed = "focusin" === this.type || "focusout" === this.type || Ab(this) : !1 !== this.isTrusted && (this.__composed = Db[this.type]));
	      return this.__composed || !1;
	    },
	    composedPath: function () {
	      this.__composedPath || (this.__composedPath = S(this.__target, this.composed));
	      return this.__composedPath;
	    },
	    get target() {
	      return Hb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
	    },
	    get relatedTarget() {
	      if (!this.__relatedTarget) return null;
	      this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = S(this.__relatedTarget, !0));
	      return Hb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
	    },
	    stopPropagation: function () {
	      Event.prototype.stopPropagation.call(this);
	      this.B = !0;
	    },
	    stopImmediatePropagation: function () {
	      Event.prototype.stopImmediatePropagation.call(this);
	      this.B = this.__immediatePropagationStopped = !0;
	    }
	  });
	  function Qb(a) {
	    a.__target = a.target;
	    a.__relatedTarget = a.relatedTarget;
	    if (u.f) {
	      var b = Object.getPrototypeOf(a);
	      if (!Object.hasOwnProperty(b, "__shady_patchedProto")) {
	        var c = Object.create(b);
	        c.__shady_sourceProto = b;
	        z(c, Tb);
	        b.__shady_patchedProto = c;
	      }
	      a.__proto__ = b.__shady_patchedProto;
	    } else z(a, Tb);
	  }
	  var Ub = Ib(Event),
	      Vb = Ib(CustomEvent),
	      Wb = Ib(MouseEvent);
	  function Xb() {
	    if (!Ab && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
	      var a = function () {
	        var b = new MouseEvent("click", {
	          bubbles: !0,
	          cancelable: !0,
	          composed: !0
	        });
	        this.__shady_dispatchEvent(b);
	      };
	      Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
	    }
	  }
	  var Yb = Object.getOwnPropertyNames(Document.prototype).filter(function (a) {
	    return "on" === a.substring(0, 2);
	  });
	  var T = u.f,
	      Zb = {
	    querySelector: function (a) {
	      return this.__shady_native_querySelector(a);
	    },
	    querySelectorAll: function (a) {
	      return this.__shady_native_querySelectorAll(a);
	    }
	  },
	      $b = {};
	  function ac(a) {
	    $b[a] = function (b) {
	      return b["__shady_native_" + a];
	    };
	  }
	  function U(a, b) {
	    z(a, b, "__shady_native_");
	    for (var c in b) {
	      ac(c);
	    }
	  }
	  function V(a, b) {
	    b = void 0 === b ? [] : b;
	    for (var c = 0; c < b.length; c++) {
	      var d = b[c],
	          e = Object.getOwnPropertyDescriptor(a, d);
	      e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Zb[d] || (Zb[d] = e.value) : ac(d));
	    }
	  }
	  var W = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
	      X = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
	      bc = document.implementation.createHTMLDocument("inert");
	  function cc(a) {
	    for (var b; b = a.__shady_native_firstChild;) {
	      a.__shady_native_removeChild(b);
	    }
	  }
	  var dc = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
	      ec = ["querySelector", "querySelectorAll"];
	  function fc() {
	    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
	    window.EventTarget ? V(window.EventTarget.prototype, a) : (V(Node.prototype, a), V(Window.prototype, a));
	    T ? V(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : U(Node.prototype, {
	      parentNode: {
	        get: function () {
	          W.currentNode = this;
	          return W.parentNode();
	        }
	      },
	      firstChild: {
	        get: function () {
	          W.currentNode = this;
	          return W.firstChild();
	        }
	      },
	      lastChild: {
	        get: function () {
	          W.currentNode = this;
	          return W.lastChild();
	        }
	      },
	      previousSibling: {
	        get: function () {
	          W.currentNode = this;
	          return W.previousSibling();
	        }
	      },
	      nextSibling: {
	        get: function () {
	          W.currentNode = this;
	          return W.nextSibling();
	        }
	      },
	      childNodes: {
	        get: function () {
	          var b = [];
	          W.currentNode = this;
	          for (var c = W.firstChild(); c;) {
	            b.push(c), c = W.nextSibling();
	          }
	          return b;
	        }
	      },
	      parentElement: {
	        get: function () {
	          X.currentNode = this;
	          return X.parentNode();
	        }
	      },
	      textContent: {
	        get: function () {
	          switch (this.nodeType) {
	            case Node.ELEMENT_NODE:
	            case Node.DOCUMENT_FRAGMENT_NODE:
	              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) {
	                c += d.nodeValue;
	              }
	              return c;
	            default:
	              return this.nodeValue;
	          }
	        },
	        set: function (b) {
	          if ("undefined" === typeof b || null === b) b = "";
	          switch (this.nodeType) {
	            case Node.ELEMENT_NODE:
	            case Node.DOCUMENT_FRAGMENT_NODE:
	              cc(this);
	              (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
	              break;
	            default:
	              this.nodeValue = b;
	          }
	        }
	      }
	    });
	    V(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
	    V(HTMLElement.prototype, ["parentElement", "contains"]);
	    a = {
	      firstElementChild: {
	        get: function () {
	          X.currentNode = this;
	          return X.firstChild();
	        }
	      },
	      lastElementChild: {
	        get: function () {
	          X.currentNode = this;
	          return X.lastChild();
	        }
	      },
	      children: {
	        get: function () {
	          var b = [];
	          X.currentNode = this;
	          for (var c = X.firstChild(); c;) {
	            b.push(c), c = X.nextSibling();
	          }
	          return y(b);
	        }
	      },
	      childElementCount: {
	        get: function () {
	          return this.children ? this.children.length : 0;
	        }
	      }
	    };
	    T ? (V(Element.prototype, dc), V(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), V(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (U(Element.prototype, a), U(Element.prototype, {
	      previousElementSibling: {
	        get: function () {
	          X.currentNode = this;
	          return X.previousSibling();
	        }
	      },
	      nextElementSibling: {
	        get: function () {
	          X.currentNode = this;
	          return X.nextSibling();
	        }
	      },
	      innerHTML: {
	        get: function () {
	          return gb(this, sa);
	        },
	        set: function (b) {
	          var c = "template" === this.localName ? this.content : this;
	          cc(c);
	          var d = this.localName || "div";
	          d = this.namespaceURI && this.namespaceURI !== bc.namespaceURI ? bc.createElementNS(this.namespaceURI, d) : bc.createElement(d);
	          d.innerHTML = b;
	          for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) {
	            c.__shady_native_insertBefore(d, void 0);
	          }
	        }
	      },
	      className: {
	        get: function () {
	          return this.getAttribute("class") || "";
	        },
	        set: function (b) {
	          this.setAttribute("class", b);
	        }
	      }
	    }));
	    V(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
	    V(Element.prototype, ec);
	    V(HTMLElement.prototype, ["focus", "blur"]);
	    window.HTMLTemplateElement && V(window.HTMLTemplateElement.prototype, ["innerHTML"]);
	    T ? V(DocumentFragment.prototype, dc) : U(DocumentFragment.prototype, a);
	    V(DocumentFragment.prototype, ec);
	    T ? (V(Document.prototype, dc), V(Document.prototype, ["activeElement"])) : U(Document.prototype, a);
	    V(Document.prototype, ["importNode", "getElementById"]);
	    V(Document.prototype, ec);
	  }
	  var gc = A({
	    dispatchEvent: Ob,
	    addEventListener: Pb,
	    removeEventListener: Rb
	  });
	  var hc = A({
	    get assignedSlot() {
	      var a = this.__shady_parentNode;
	      (a = a && a.__shady_shadowRoot) && O(a);
	      return (a = t(this)) && a.assignedSlot || null;
	    }
	  });
	  var ic = null;
	  function H() {
	    ic || (ic = window.ShadyCSS && window.ShadyCSS.ScopingShim);
	    return ic || null;
	  }
	  function jc(a, b, c) {
	    var d = H();
	    return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
	  }
	  function Sa(a, b) {
	    var c = H();
	    c && c.unscopeNode(a, b);
	  }
	  function Qa(a, b) {
	    var c = H();
	    if (!c) return !0;
	    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	      c = !0;
	      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
	        c = c && Qa(a, b);
	      }
	      return c;
	    }
	    return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
	  }
	  function G(a) {
	    if (a.nodeType !== Node.ELEMENT_NODE) return "";
	    var b = H();
	    return b ? b.currentScopeForNode(a) : "";
	  }
	  function Ra(a, b) {
	    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
	      a.nodeType === Node.ELEMENT_NODE && Ra(a, b);
	    }
	  }
	  var kc = window.document;
	  function lc(a, b) {
	    if ("slot" === b) a = a.__shady_parentNode, ja(a) && I(t(a).root);else if ("slot" === a.localName && "name" === b && (b = F(a))) {
	      if (b.a) {
	        P(b);
	        var c = a.O,
	            d = rb(a);
	        if (d !== c) {
	          c = b.b[c];
	          var e = c.indexOf(a);
	          0 <= e && c.splice(e, 1);
	          c = b.b[d] || (b.b[d] = []);
	          c.push(a);
	          1 < c.length && (b.b[d] = sb(c));
	        }
	      }
	      I(b);
	    }
	  }
	  var mc = A({
	    get previousElementSibling() {
	      var a = t(this);
	      if (a && void 0 !== a.previousSibling) {
	        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
	          a = a.__shady_previousSibling;
	        }
	        return a;
	      }
	      return this.__shady_native_previousElementSibling;
	    },
	    get nextElementSibling() {
	      var a = t(this);
	      if (a && void 0 !== a.nextSibling) {
	        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
	          a = a.__shady_nextSibling;
	        }
	        return a;
	      }
	      return this.__shady_native_nextElementSibling;
	    },
	    get slot() {
	      return this.getAttribute("slot");
	    },
	    set slot(a) {
	      this.__shady_setAttribute("slot", a);
	    },
	    get shadowRoot() {
	      var a = t(this);
	      return a && a.V || null;
	    },
	    get className() {
	      return this.getAttribute("class") || "";
	    },
	    set className(a) {
	      this.__shady_setAttribute("class", a);
	    },
	    setAttribute: function (a, b) {
	      this.ownerDocument !== kc ? this.__shady_native_setAttribute(a, b) : jc(this, a, b) || (this.__shady_native_setAttribute(a, b), lc(this, a));
	    },
	    removeAttribute: function (a) {
	      this.ownerDocument !== kc ? this.__shady_native_removeAttribute(a) : jc(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), lc(this, a));
	    },
	    attachShadow: function (a) {
	      if (!this) throw Error("Must provide a host.");
	      if (!a) throw Error("Not enough arguments.");
	      if (a.shadyUpgradeFragment && !u.L) {
	        var b = a.shadyUpgradeFragment;
	        b.__proto__ = ShadowRoot.prototype;
	        nb(b, this, a);
	        E(b, b);
	        a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
	        b.__noInsertionPoint = void 0;
	        if (a && a.length) {
	          var c = b;
	          Ta(c);
	          c.c.push.apply(c.c, ca(a));
	          I(b);
	        }
	        b.host.__shady_native_appendChild(b);
	      } else b = new N(lb, this, a);
	      return b;
	    }
	  });
	  var nc = A({
	    blur: function () {
	      var a = t(this);
	      (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
	    }
	  });
	  Yb.forEach(function (a) {
	    nc[a] = {
	      set: function (b) {
	        var c = r(this),
	            d = a.substring(2);
	        c.h || (c.h = {});
	        c.h[a] && this.removeEventListener(d, c.h[a]);
	        this.__shady_addEventListener(d, b);
	        c.h[a] = b;
	      },
	      get: function () {
	        var b = t(this);
	        return b && b.h && b.h[a];
	      },
	      configurable: !0
	    };
	  });
	  var oc = A({
	    assignedNodes: function (a) {
	      if ("slot" === this.localName) {
	        var b = this.__shady_getRootNode();
	        b && w(b) && O(b);
	        return (b = t(this)) ? (a && a.flatten ? b.l : b.assignedNodes) || [] : [];
	      }
	    },
	    addEventListener: function (a, b, c) {
	      if ("slot" !== this.localName || "slotchange" === a) Pb.call(this, a, b, c);else {
	        "object" !== typeof c && (c = {
	          capture: !!c
	        });
	        var d = this.__shady_parentNode;
	        if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
	        c.i = this;
	        d.__shady_addEventListener(a, b, c);
	      }
	    },
	    removeEventListener: function (a, b, c) {
	      if ("slot" !== this.localName || "slotchange" === a) Rb.call(this, a, b, c);else {
	        "object" !== typeof c && (c = {
	          capture: !!c
	        });
	        var d = this.__shady_parentNode;
	        if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
	        c.i = this;
	        d.__shady_removeEventListener(a, b, c);
	      }
	    }
	  });
	  var pc = window.document,
	      qc = A({
	    importNode: function (a, b) {
	      if (a.ownerDocument !== pc || "template" === a.localName) return this.__shady_native_importNode(a, b);
	      var c = this.__shady_native_importNode(a, !1);
	      if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
	        b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
	      }
	      return c;
	    }
	  });
	  var rc = A({
	    dispatchEvent: Ob,
	    addEventListener: Pb.bind(window),
	    removeEventListener: Rb.bind(window)
	  });
	  var Y = {};
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Y.parentElement = J.parentElement);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Y.contains = J.contains);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Y.children = K.children);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Y.innerHTML = ib.innerHTML);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Y.className = mc.className);
	  var sc = {
	    EventTarget: [gc],
	    Node: [J, window.EventTarget ? null : gc],
	    Text: [hc],
	    Element: [mc, K, hc, !u.f || "innerHTML" in Element.prototype ? ib : null, window.HTMLSlotElement ? null : oc],
	    HTMLElement: [nc, Y],
	    HTMLSlotElement: [oc],
	    DocumentFragment: [Ya, Za],
	    Document: [qc, Ya, Za, $a],
	    Window: [rc]
	  },
	      tc = u.f ? null : ["innerHTML", "textContent"];
	  function uc(a) {
	    var b = a ? null : tc,
	        c = {},
	        d;
	    for (d in sc) {
	      c.s = window[d] && window[d].prototype, sc[d].forEach(function (e) {
	        return function (f) {
	          return e.s && f && z(e.s, f, a, b);
	        };
	      }(c)), c = {
	        s: c.s
	      };
	    }
	  }
	  function Z(a) {
	    this.node = a;
	  }
	  n = Z.prototype;
	  n.addEventListener = function (a, b, c) {
	    return this.node.__shady_addEventListener(a, b, c);
	  };
	  n.removeEventListener = function (a, b, c) {
	    return this.node.__shady_removeEventListener(a, b, c);
	  };
	  n.appendChild = function (a) {
	    return this.node.__shady_appendChild(a);
	  };
	  n.insertBefore = function (a, b) {
	    return this.node.__shady_insertBefore(a, b);
	  };
	  n.removeChild = function (a) {
	    return this.node.__shady_removeChild(a);
	  };
	  n.replaceChild = function (a, b) {
	    return this.node.__shady_replaceChild(a, b);
	  };
	  n.cloneNode = function (a) {
	    return this.node.__shady_cloneNode(a);
	  };
	  n.getRootNode = function (a) {
	    return this.node.__shady_getRootNode(a);
	  };
	  n.contains = function (a) {
	    return this.node.__shady_contains(a);
	  };
	  n.dispatchEvent = function (a) {
	    return this.node.__shady_dispatchEvent(a);
	  };
	  n.setAttribute = function (a, b) {
	    this.node.__shady_setAttribute(a, b);
	  };
	  n.getAttribute = function (a) {
	    return this.node.__shady_native_getAttribute(a);
	  };
	  n.removeAttribute = function (a) {
	    this.node.__shady_removeAttribute(a);
	  };
	  n.attachShadow = function (a) {
	    return this.node.__shady_attachShadow(a);
	  };
	  n.focus = function () {
	    this.node.__shady_native_focus();
	  };
	  n.blur = function () {
	    this.node.__shady_blur();
	  };
	  n.importNode = function (a, b) {
	    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
	  };
	  n.getElementById = function (a) {
	    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
	  };
	  n.querySelector = function (a) {
	    return this.node.__shady_querySelector(a);
	  };
	  n.querySelectorAll = function (a, b) {
	    return this.node.__shady_querySelectorAll(a, b);
	  };
	  n.assignedNodes = function (a) {
	    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
	  };
	  da.Object.defineProperties(Z.prototype, {
	    activeElement: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
	      }
	    },
	    _activeElement: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.activeElement;
	      }
	    },
	    host: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        if (w(this.node)) return this.node.host;
	      }
	    },
	    parentNode: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_parentNode;
	      }
	    },
	    firstChild: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_firstChild;
	      }
	    },
	    lastChild: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_lastChild;
	      }
	    },
	    nextSibling: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_nextSibling;
	      }
	    },
	    previousSibling: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_previousSibling;
	      }
	    },
	    childNodes: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_childNodes;
	      }
	    },
	    parentElement: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_parentElement;
	      }
	    },
	    firstElementChild: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_firstElementChild;
	      }
	    },
	    lastElementChild: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_lastElementChild;
	      }
	    },
	    nextElementSibling: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_nextElementSibling;
	      }
	    },
	    previousElementSibling: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_previousElementSibling;
	      }
	    },
	    children: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_children;
	      }
	    },
	    childElementCount: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_childElementCount;
	      }
	    },
	    shadowRoot: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_shadowRoot;
	      }
	    },
	    assignedSlot: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_assignedSlot;
	      }
	    },
	    isConnected: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_isConnected;
	      }
	    },
	    innerHTML: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_innerHTML;
	      },
	      set: function (a) {
	        this.node.__shady_innerHTML = a;
	      }
	    },
	    textContent: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_textContent;
	      },
	      set: function (a) {
	        this.node.__shady_textContent = a;
	      }
	    },
	    slot: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_slot;
	      },
	      set: function (a) {
	        this.node.__shady_slot = a;
	      }
	    },
	    className: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        return this.node.__shady_className;
	      },
	      set: function (a) {
	        return this.node.__shady_className = a;
	      }
	    }
	  });
	  Yb.forEach(function (a) {
	    Object.defineProperty(Z.prototype, a, {
	      get: function () {
	        return this.node["__shady_" + a];
	      },
	      set: function (b) {
	        this.node["__shady_" + a] = b;
	      },
	      configurable: !0
	    });
	  });
	  var vc = new WeakMap();
	  function wc(a) {
	    if (w(a) || a instanceof Z) return a;
	    var b = vc.get(a);
	    b || (b = new Z(a), vc.set(a, b));
	    return b;
	  }
	  u.F && (window.ShadyDOM = {
	    inUse: u.F,
	    patch: function (a) {
	      Da(a);
	      Ca(a);
	      return a;
	    },
	    isShadyRoot: w,
	    enqueue: va,
	    flush: D,
	    flushInitial: function (a) {
	      !a.G && a.j && O(a);
	    },
	    settings: u,
	    filterMutations: zb,
	    observeChildren: xb,
	    unobserveChildren: yb,
	    deferConnectionCallbacks: u.deferConnectionCallbacks,
	    preferPerformance: u.preferPerformance,
	    handlesDynamicScoping: !0,
	    wrap: u.g ? wc : function (a) {
	      return a;
	    },
	    Wrapper: Z,
	    composedPath: Gb,
	    noPatch: u.g,
	    nativeMethods: Zb,
	    nativeTree: $b
	  }, fc(), uc("__shady_"), Object.defineProperty(document, "_activeElement", $a.activeElement), z(Window.prototype, rc, "__shady_"), u.g || (uc(), Xb()), Sb(), window.Event = Ub, window.CustomEvent = Vb, window.MouseEvent = Wb, window.ShadowRoot = N);
	}).call(commonjsGlobal);

	window.Sifrr.Dom.setup({
	  useShadowRoot: true
	});
	window.Sifrr.Dom.load('sifrr-test');
	window.Sifrr.Dom.load('sifrr-nosr');

}());
//# sourceMappingURL=index.js.map
