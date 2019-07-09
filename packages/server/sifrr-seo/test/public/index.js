(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function () {

	  var m;

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
	    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);

	    return c;
	  }

	  var da = "undefined" != typeof window && window === this ? this : "undefined" != typeof commonjsGlobal && null != commonjsGlobal ? commonjsGlobal : this;

	  function n(a, b) {
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
	        l = Math.min(b - e, d - f);
	    if (0 == e && 0 == f) a: {
	      for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;

	      g = l;
	    }

	    if (b == a.length && d == c.length) {
	      h = a.length;

	      for (var k = c.length, p = 0; p < l - g && fa(a[--h], c[--k]);) p++;

	      h = p;
	    }

	    e += g;
	    f += g;
	    b -= h;
	    d -= h;
	    if (0 == b - e && 0 == d - f) return [];

	    if (e == b) {
	      for (b = n(e, 0); f < d;) b.o.push(c[f++]);

	      return [b];
	    }

	    if (f == d) return [n(e, b - e)];
	    l = e;
	    g = f;
	    d = d - g + 1;
	    h = b - l + 1;
	    b = Array(d);

	    for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k;

	    for (k = 0; k < h; k++) b[0][k] = k;

	    for (k = 1; k < d; k++) for (p = 1; p < h; p++) if (a[l + p - 1] === c[g + k - 1]) b[k][p] = b[k - 1][p - 1];else {
	      var w = b[k - 1][p] + 1,
	          K = b[k][p - 1] + 1;
	      b[k][p] = w < K ? w : K;
	    }

	    l = b.length - 1;
	    g = b[0].length - 1;
	    d = b[l][g];

	    for (a = []; 0 < l || 0 < g;) 0 == l ? (a.push(2), g--) : 0 == g ? (a.push(3), l--) : (h = b[l - 1][g - 1], k = b[l - 1][g], p = b[l][g - 1], w = k < p ? k < h ? k : h : p < h ? p : h, w == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : w == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = p));

	    a.reverse();
	    b = void 0;
	    l = [];

	    for (g = 0; g < a.length; g++) switch (a[g]) {
	      case 0:
	        b && (l.push(b), b = void 0);
	        e++;
	        f++;
	        break;

	      case 1:
	        b || (b = n(e, 0));
	        b.v++;
	        e++;
	        b.o.push(c[f]);
	        f++;
	        break;

	      case 2:
	        b || (b = n(e, 0));
	        b.v++;
	        e++;
	        break;

	      case 3:
	        b || (b = n(e, 0)), b.o.push(c[f]), f++;
	    }

	    b && l.push(b);
	    return l;
	  }

	  function fa(a, b) {
	    return a === b;
	  }

	  function ha() {}

	  ha.prototype.toJSON = function () {
	    return {};
	  };

	  function q(a) {
	    a.__shady || (a.__shady = new ha());
	    return a.__shady;
	  }

	  function r(a) {
	    return a && a.__shady;
	  }
	  var t = window.ShadyDOM || {};
	  t.U = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
	  var ia = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
	  t.f = !!(ia && ia.configurable && ia.get);
	  t.F = t.force || !t.U;
	  t.g = t.noPatch || !1;
	  t.J = t.preferPerformance;
	  var ja = navigator.userAgent.match("Trident");
	  t.L = ja;

	  function u(a) {
	    return (a = r(a)) && void 0 !== a.firstChild;
	  }

	  function v(a) {
	    return "ShadyRoot" === a.R;
	  }

	  function ka(a) {
	    return (a = (a = r(a)) && a.root) && la(a);
	  }

	  var x = Element.prototype,
	      ma = x.matches || x.matchesSelector || x.mozMatchesSelector || x.msMatchesSelector || x.oMatchesSelector || x.webkitMatchesSelector,
	      na = document.createTextNode(""),
	      oa = 0,
	      pa = [];
	  new MutationObserver(function () {
	    for (; pa.length;) try {
	      pa.shift()();
	    } catch (a) {
	      throw na.textContent = oa++, a;
	    }
	  }).observe(na, {
	    characterData: !0
	  });

	  function qa(a) {
	    pa.push(a);
	    na.textContent = oa++;
	  }

	  var ra = !!document.contains;

	  function sa(a, b) {
	    for (; b;) {
	      if (b == a) return !0;
	      b = b.__shady_parentNode;
	    }

	    return !1;
	  }

	  function ta(a) {
	    for (var b = a.length - 1; 0 <= b; b--) {
	      var c = a[b],
	          d = c.getAttribute("id") || c.getAttribute("name");
	      d && "length" !== d && isNaN(d) && (a[d] = c);
	    }

	    a.item = function (b) {
	      return a[b];
	    };

	    a.namedItem = function (b) {
	      if ("length" !== b && isNaN(b) && a[b]) return a[b];

	      for (var c = ba(a), d = c.next(); !d.done; d = c.next()) if (d = d.value, (d.getAttribute("id") || d.getAttribute("name")) == b) return d;

	      return null;
	    };

	    return a;
	  }

	  function va(a) {
	    var b = [];

	    for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);

	    return b;
	  }

	  function wa(a) {
	    var b = [];

	    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);

	    return b;
	  }

	  function y(a, b, c, d) {
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

	  function z(a) {
	    var b = {};
	    Object.getOwnPropertyNames(a).forEach(function (c) {
	      b[c] = Object.getOwnPropertyDescriptor(a, c);
	    });
	    return b;
	  }
	  var A = [],
	      xa;

	  function ya(a) {
	    xa || (xa = !0, qa(B));
	    A.push(a);
	  }

	  function B() {
	    xa = !1;

	    for (var a = !!A.length; A.length;) A.shift()();

	    return a;
	  }

	  B.list = A;
	  var C = z({
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
	      D = z({
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
	      E = z({
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

	  }),
	      za;

	  for (za in C) C[za].enumerable = !1;

	  for (var Aa in D) D[Aa].enumerable = !1;

	  for (var Ba in E) E[Ba].enumerable = !1;

	  var Ca = t.f || t.g,
	      Da = Ca ? function () {} : function (a) {
	    var b = q(a);
	    b.N || (b.N = !0, y(a, E));
	  },
	      Ea = Ca ? function () {} : function (a) {
	    var b = q(a);
	    b.M || (b.M = !0, y(a, C), window.customElements && !t.g || y(a, D));
	  };

	  function Fa(a, b, c, d) {
	    Da(a);
	    d = d || null;
	    var e = q(a),
	        f = d ? q(d) : null;
	    e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
	    if (f = r(e.previousSibling)) f.nextSibling = a;
	    if (f = r(e.nextSibling = d)) f.previousSibling = a;
	    e.parentNode = b;
	    d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
	    c.childNodes = null;
	  }

	  function Ga(a, b, c) {
	    Ea(b);
	    var d = q(b);
	    void 0 !== d.firstChild && (d.childNodes = null);
	    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Fa(a, b, d, c);else Fa(a, b, d, c);
	  }

	  function Ha(a, b) {
	    var c = q(a);
	    b = q(b);
	    a === b.firstChild && (b.firstChild = c.nextSibling);
	    a === b.lastChild && (b.lastChild = c.previousSibling);
	    a = c.previousSibling;
	    var d = c.nextSibling;
	    a && (q(a).nextSibling = d);
	    d && (q(d).previousSibling = a);
	    c.parentNode = c.previousSibling = c.nextSibling = void 0;
	    void 0 !== b.childNodes && (b.childNodes = null);
	  }

	  function F(a, b) {
	    var c = q(a);

	    if (b || void 0 === c.firstChild) {
	      c.childNodes = null;
	      var d = c.firstChild = a.__shady_native_firstChild;
	      c.lastChild = a.__shady_native_lastChild;
	      Ea(a);
	      c = d;

	      for (d = void 0; c; c = c.__shady_native_nextSibling) {
	        var e = q(c);
	        e.parentNode = b || a;
	        e.nextSibling = c.__shady_native_nextSibling;
	        e.previousSibling = d || null;
	        d = c;
	        Da(c);
	      }
	    }
	  }
	  var Ia = window.document,
	      Ja = t.J,
	      Ka = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
	      La = Ka && Ka.get;

	  function Ma(a) {
	    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
	  }

	  function Na(a) {
	    var b = r(a);
	    if (b && void 0 !== b.A) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Na(b);
	    if (a = r(a)) a.A = void 0;
	  }

	  function Oa(a) {
	    var b = a;
	    a && "slot" === a.localName && (b = (b = (b = r(a)) && b.l) && b.length ? b[0] : Oa(a.__shady_nextSibling));
	    return b;
	  }

	  function Pa(a, b, c) {
	    if (a = (a = r(a)) && a.m) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Qa(a);
	  }

	  var L = z({
	    get parentNode() {
	      var a = r(this);
	      a = a && a.parentNode;
	      return void 0 !== a ? a : this.__shady_native_parentNode;
	    },

	    get firstChild() {
	      var a = r(this);
	      a = a && a.firstChild;
	      return void 0 !== a ? a : this.__shady_native_firstChild;
	    },

	    get lastChild() {
	      var a = r(this);
	      a = a && a.lastChild;
	      return void 0 !== a ? a : this.__shady_native_lastChild;
	    },

	    get nextSibling() {
	      var a = r(this);
	      a = a && a.nextSibling;
	      return void 0 !== a ? a : this.__shady_native_nextSibling;
	    },

	    get previousSibling() {
	      var a = r(this);
	      a = a && a.previousSibling;
	      return void 0 !== a ? a : this.__shady_native_previousSibling;
	    },

	    get childNodes() {
	      if (u(this)) {
	        var a = r(this);

	        if (!a.childNodes) {
	          a.childNodes = [];

	          for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
	        }

	        var c = a.childNodes;
	      } else c = this.__shady_native_childNodes;

	      c.item = function (a) {
	        return c[a];
	      };

	      return c;
	    },

	    get parentElement() {
	      var a = r(this);
	      (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
	      return void 0 !== a ? a : this.__shady_native_parentElement;
	    },

	    get isConnected() {
	      if (La && La.call(this)) return !0;
	      if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
	      var a = this.ownerDocument;

	      if (ra) {
	        if (a.__shady_native_contains(this)) return !0;
	      } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;

	      for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (v(a) ? a.host : void 0);

	      return !!(a && a instanceof Document);
	    },

	    get textContent() {
	      if (u(this)) {
	        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);

	        return a.join("");
	      }

	      return this.__shady_native_textContent;
	    },

	    set textContent(a) {
	      if ("undefined" === typeof a || null === a) a = "";

	      switch (this.nodeType) {
	        case Node.ELEMENT_NODE:
	        case Node.DOCUMENT_FRAGMENT_NODE:
	          if (!u(this) && t.f) {
	            var b = this.__shady_firstChild;
	            (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Ma(this);
	            this.__shady_native_textContent = a;
	          } else Ma(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));

	          break;

	        default:
	          this.nodeValue = a;
	      }
	    },

	    insertBefore: function (a, b) {
	      if (this.ownerDocument !== Ia && a.ownerDocument !== Ia) return this.__shady_native_insertBefore(a, b), a;
	      if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");

	      if (b) {
	        var c = r(b);
	        c = c && c.parentNode;
	        if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
	      }

	      if (b === a) return a;
	      var d = [],
	          e = (c = G(this)) ? c.host.localName : H(this),
	          f = a.__shady_parentNode;

	      if (f) {
	        var g = H(a);
	        var h = !!c || !G(a) || Ja && void 0 !== this.__noInsertionPoint;

	        f.__shady_removeChild(a, h);
	      }

	      f = !0;
	      var l = (!Ja || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Ra(a, e),
	          k = c && !a.__noInsertionPoint && (!Ja || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
	      if (k || l) l && (g = g || H(a)), Sa(a, function (a) {
	        k && "slot" === a.localName && d.push(a);

	        if (l) {
	          var b = g;
	          I() && (b && Ta(a, b), (b = I()) && b.scopeNode(a, e));
	        }
	      });
	      d.length && (Ua(c), c.c.push.apply(c.c, d instanceof Array ? d : ca(ba(d))), J(c));
	      u(this) && (Ga(a, this, b), c = r(this), ka(this) ? (J(c.root), f = !1) : c.root && (f = !1));
	      f ? (c = v(this) ? this.host : this, b ? (b = Oa(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
	      Pa(this, a);
	      return a;
	    },
	    appendChild: function (a) {
	      if (this != a || !v(a)) return this.__shady_insertBefore(a);
	    },
	    removeChild: function (a, b) {
	      b = void 0 === b ? !1 : b;
	      if (this.ownerDocument !== Ia) return this.__shady_native_removeChild(a);
	      if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
	      var c = G(a),
	          d = c && Va(c, a),
	          e = r(this);

	      if (u(this) && (Ha(a, this), ka(this))) {
	        J(e.root);
	        var f = !0;
	      }

	      if (I() && !b && c && a.nodeType !== Node.TEXT_NODE) {
	        var g = H(a);
	        Sa(a, function (a) {
	          Ta(a, g);
	        });
	      }

	      Na(a);
	      c && ((b = this && "slot" === this.localName) && (f = !0), (d || b) && J(c));
	      f || (f = v(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
	      Pa(this, null, a);
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

	        for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
	      }

	      return b;
	    },
	    getRootNode: function (a) {
	      if (this && this.nodeType) {
	        var b = q(this),
	            c = b.A;
	        void 0 === c && (v(this) ? (c = this, b.A = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.A = c)));
	        return c;
	      }
	    },
	    contains: function (a) {
	      return sa(this, a);
	    }
	  });

	  function Wa(a, b, c) {
	    var d = [];
	    Xa(a, b, c, d);
	    return d;
	  }

	  function Xa(a, b, c, d) {
	    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
	      var e;

	      if (e = a.nodeType === Node.ELEMENT_NODE) {
	        e = a;
	        var f = b,
	            g = c,
	            h = d,
	            l = f(e);
	        l && h.push(e);
	        g && g(l) ? e = l : (Xa(e, f, g, h), e = void 0);
	      }

	      if (e) break;
	    }
	  }

	  var M = z({
	    get firstElementChild() {
	      var a = r(this);

	      if (a && void 0 !== a.firstChild) {
	        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;

	        return a;
	      }

	      return this.__shady_native_firstElementChild;
	    },

	    get lastElementChild() {
	      var a = r(this);

	      if (a && void 0 !== a.lastChild) {
	        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;

	        return a;
	      }

	      return this.__shady_native_lastElementChild;
	    },

	    get children() {
	      return u(this) ? ta(Array.prototype.filter.call(wa(this), function (a) {
	        return a.nodeType === Node.ELEMENT_NODE;
	      })) : this.__shady_native_children;
	    },

	    get childElementCount() {
	      var a = this.__shady_children;
	      return a ? a.length : 0;
	    }

	  }),
	      Ya = z({
	    querySelector: function (a) {
	      return Wa(this, function (b) {
	        return ma.call(b, a);
	      }, function (a) {
	        return !!a;
	      })[0] || null;
	    },
	    querySelectorAll: function (a, b) {
	      if (b) {
	        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));

	        var c = this.__shady_getRootNode();

	        return b.filter(function (a) {
	          return a.__shady_getRootNode() == c;
	        });
	      }

	      return Wa(this, function (b) {
	        return ma.call(b, a);
	      });
	    }
	  }),
	      Za = t.J && !t.g ? Object.assign({}, M) : M;
	  Object.assign(M, Ya);
	  var $a = z({
	    getElementById: function (a) {
	      return "" === a ? null : Wa(this, function (b) {
	        return b.id == a;
	      }, function (a) {
	        return !!a;
	      })[0] || null;
	    }
	  });
	  var ab = z({
	    get activeElement() {
	      var a = t.f ? document.__shady_native_activeElement : document.activeElement;
	      if (!a || !a.nodeType) return null;
	      var b = !!v(this);
	      if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;

	      for (b = G(a); b && b !== this;) a = b.host, b = G(a);

	      return this === document ? b ? null : a : b === this ? a : null;
	    }

	  });
	  var bb = /[&\u00A0"]/g,
	      cb = /[&\u00A0<>]/g;

	  function db(a) {
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

	  function eb(a) {
	    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;

	    return b;
	  }

	  var fb = eb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
	      gb = eb("style script xmp iframe noembed noframes plaintext noscript".split(" "));

	  function hb(a, b) {
	    "template" === a.localName && (a = a.content);

	    for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
	      a: {
	        var h = g;
	        var l = a,
	            k = b;

	        switch (h.nodeType) {
	          case Node.ELEMENT_NODE:
	            l = h.localName;

	            for (var p = "<" + l, w = h.attributes, K = 0, ua; ua = w[K]; K++) p += " " + ua.name + '="' + ua.value.replace(bb, db) + '"';

	            p += ">";
	            h = fb[l] ? p : p + hb(h, k) + "</" + l + ">";
	            break a;

	          case Node.TEXT_NODE:
	            h = h.data;
	            h = l && gb[l.localName] ? h : h.replace(cb, db);
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
	  var ib = document.implementation.createHTMLDocument("inert"),
	      jb = z({
	    get innerHTML() {
	      return u(this) ? hb("template" === this.localName ? this.content : this, wa) : this.__shady_native_innerHTML;
	    },

	    set innerHTML(a) {
	      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
	        Ma(this);
	        var b = this.localName || "div";
	        b = this.namespaceURI && this.namespaceURI !== ib.namespaceURI ? ib.createElementNS(this.namespaceURI, b) : ib.createElement(b);

	        for (t.f ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
	      }
	    }

	  });
	  var kb = z({
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

	  function lb(a, b) {
	    y(a, kb, b);
	    y(a, ab, b);
	    y(a, jb, b);
	    y(a, M, b);
	    t.g && !b ? (y(a, L, b), y(a, $a, b)) : t.f || (y(a, E), y(a, C), y(a, D));
	  }
	  var mb = {},
	      N = t.deferConnectionCallbacks && "loading" === document.readyState,
	      O;

	  function nb(a) {
	    var b = [];

	    do b.unshift(a); while (a = a.__shady_parentNode);

	    return b;
	  }

	  function P(a, b, c) {
	    if (a !== mb) throw new TypeError("Illegal constructor");
	    this.a = null;
	    ob(this, b, c);
	  }

	  function ob(a, b, c) {
	    a.R = "ShadyRoot";
	    a.host = b;
	    a.mode = c && c.mode;
	    F(a.host);
	    b = q(a.host);
	    b.root = a;
	    b.V = "closed" !== a.mode ? a : null;
	    b = q(a);
	    b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
	    if (t.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else J(a);
	  }

	  function J(a) {
	    a.j || (a.j = !0, ya(function () {
	      return Q(a);
	    }));
	  }

	  function Q(a) {
	    var b;

	    if (b = a.j) {
	      for (var c; a;) a: {
	        a.j && (c = a), b = a;
	        a = b.host.__shady_getRootNode();
	        if (v(a) && (b = r(b.host)) && 0 < b.u) break a;
	        a = void 0;
	      }

	      b = c;
	    }

	    (c = b) && c._renderSelf();
	  }

	  P.prototype._renderSelf = function () {
	    var a = N;
	    N = !0;
	    this.j = !1;

	    if (this.a) {
	      R(this);

	      for (var b = 0, c; b < this.a.length; b++) {
	        c = this.a[b];
	        var d = r(c),
	            e = d.assignedNodes;
	        d.assignedNodes = [];
	        d.l = [];
	        if (d.H = e) for (d = 0; d < e.length; d++) {
	          var f = r(e[d]);
	          f.C = f.assignedSlot;
	          f.assignedSlot === c && (f.assignedSlot = null);
	        }
	      }

	      for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) pb(this, b);

	      for (b = 0; b < this.a.length; b++) {
	        c = this.a[b];
	        e = r(c);
	        if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) pb(this, d, c);
	        (d = (d = r(c.__shady_parentNode)) && d.root) && (la(d) || d.j) && d._renderSelf();
	        qb(this, e.l, e.assignedNodes);

	        if (d = e.H) {
	          for (f = 0; f < d.length; f++) r(d[f]).C = null;

	          e.H = null;
	          d.length > e.assignedNodes.length && (e.D = !0);
	        }

	        e.D && (e.D = !1, rb(this, c));
	      }

	      c = this.a;
	      b = [];

	      for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = r(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);

	      for (c = 0; c < b.length; c++) {
	        f = b[c];
	        e = f === this ? this.host : f;
	        d = [];

	        for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = r(f).l, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);

	        f = va(e);
	        g = ea(d, d.length, f, f.length);

	        for (var l = h = 0, k = void 0; h < g.length && (k = g[h]); h++) {
	          for (var p = 0, w = void 0; p < k.o.length && (w = k.o[p]); p++) w.__shady_native_parentNode === e && e.__shady_native_removeChild(w), f.splice(k.index + l, 1);

	          l -= k.v;
	        }

	        l = 0;

	        for (k = void 0; l < g.length && (k = g[l]); l++) for (h = f[k.index], p = k.index; p < k.index + k.v; p++) w = d[p], e.__shady_native_insertBefore(w, h), f.splice(p, 0, w);
	      }
	    }

	    if (!t.preferPerformance && !this.G) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = r(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
	    this.G = !0;
	    N = a;
	    O && O();
	  };

	  function pb(a, b, c) {
	    var d = q(b),
	        e = d.C;
	    d.C = null;
	    c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);
	    c ? (q(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
	    e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).D = !0);
	  }

	  function qb(a, b, c) {
	    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
	      var f = r(e).assignedNodes;
	      f && f.length && qb(a, b, f);
	    } else b.push(c[d]);
	  }

	  function rb(a, b) {
	    b.__shady_native_dispatchEvent(new Event("slotchange"));

	    b = r(b);
	    b.assignedSlot && rb(a, b.assignedSlot);
	  }

	  function Ua(a) {
	    a.c = a.c || [];
	    a.a = a.a || [];
	    a.b = a.b || {};
	  }

	  function R(a) {
	    if (a.c && a.c.length) {
	      for (var b = a.c, c, d = 0; d < b.length; d++) {
	        var e = b[d];
	        F(e);
	        var f = e.__shady_parentNode;
	        F(f);
	        f = r(f);
	        f.u = (f.u || 0) + 1;
	        f = sb(e);
	        a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];
	        a.a.push(e);
	      }

	      if (c) for (var g in c) a.b[g] = tb(a.b[g]);
	      a.c = [];
	    }
	  }

	  function sb(a) {
	    var b = a.name || a.getAttribute("name") || "__catchall";
	    return a.O = b;
	  }

	  function tb(a) {
	    return a.sort(function (a, c) {
	      a = nb(a);

	      for (var b = nb(c), e = 0; e < a.length; e++) {
	        c = a[e];
	        var f = b[e];
	        if (c !== f) return a = wa(c.__shady_parentNode), a.indexOf(c) - a.indexOf(f);
	      }
	    });
	  }

	  function Va(a, b) {
	    if (a.a) {
	      R(a);
	      var c = a.b,
	          d;

	      for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
	        var g = e[f];

	        if (sa(b, g)) {
	          e.splice(f, 1);
	          var h = a.a.indexOf(g);
	          0 <= h && (a.a.splice(h, 1), (h = r(g.__shady_parentNode)) && h.u && h.u--);
	          f--;
	          g = r(g);
	          if (h = g.l) for (var l = 0; l < h.length; l++) {
	            var k = h[l],
	                p = k.__shady_native_parentNode;
	            p && p.__shady_native_removeChild(k);
	          }
	          g.l = [];
	          g.assignedNodes = [];
	          h = !0;
	        }
	      }

	      return h;
	    }
	  }

	  function la(a) {
	    R(a);
	    return !(!a.a || !a.a.length);
	  }

	  (function (a) {
	    a.__proto__ = DocumentFragment.prototype;
	    lb(a, "__shady_");
	    lb(a);
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
	  })(P.prototype);

	  if (window.customElements && t.F && !t.preferPerformance) {
	    var S = new Map();

	    O = function () {
	      var a = [];
	      S.forEach(function (b, c) {
	        a.push([c, b]);
	      });
	      S.clear();

	      for (var b = 0; b < a.length; b++) {
	        var c = a[b][0];
	        a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
	      }
	    };

	    N && document.addEventListener("readystatechange", function () {
	      N = !1;
	      O();
	    }, {
	      once: !0
	    });

	    var ub = function (a, b, c) {
	      var d = 0,
	          e = "__isConnected" + d++;
	      if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
	        N ? S.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
	      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
	        N ? this.isConnected || S.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
	      };
	      return a;
	    },
	        vb = window.customElements.define,
	        wb = function (a, b) {
	      var c = b.prototype.connectedCallback,
	          d = b.prototype.disconnectedCallback;
	      vb.call(window.customElements, a, ub(b, c, d));
	      b.prototype.connectedCallback = c;
	      b.prototype.disconnectedCallback = d;
	    };

	    window.customElements.define = wb;
	    Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
	      value: wb,
	      configurable: !0
	    });
	  }

	  function G(a) {
	    a = a.__shady_getRootNode();
	    if (v(a)) return a;
	  }

	  function xb() {
	    this.a = !1;
	    this.addedNodes = [];
	    this.removedNodes = [];
	    this.w = new Set();
	  }

	  function Qa(a) {
	    a.a || (a.a = !0, qa(function () {
	      a.flush();
	    }));
	  }

	  xb.prototype.flush = function () {
	    if (this.a) {
	      this.a = !1;
	      var a = this.takeRecords();
	      a.length && this.w.forEach(function (b) {
	        b(a);
	      });
	    }
	  };

	  xb.prototype.takeRecords = function () {
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

	  function yb(a, b) {
	    var c = q(a);
	    c.m || (c.m = new xb());
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

	  function zb(a) {
	    var b = a && a.T;
	    b && (b.w.delete(a.P), b.w.size || (q(a.S).m = null));
	  }

	  function Ab(a, b) {
	    var c = b.getRootNode();
	    return a.map(function (a) {
	      var b = c === a.target.getRootNode();

	      if (b && a.addedNodes) {
	        if (b = Array.from(a.addedNodes).filter(function (a) {
	          return c === a.getRootNode();
	        }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
	          value: b,
	          configurable: !0
	        }), a;
	      } else if (b) return a;
	    }).filter(function (a) {
	      return a;
	    });
	  }

	  var T = "__eventWrappers" + Date.now(),
	      Bb = function () {
	    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
	    return a ? function (b) {
	      return a.get.call(b);
	    } : null;
	  }(),
	      Cb = function () {
	    function a() {}

	    var b = !1,
	        c = {
	      get capture() {
	        b = !0;
	      }

	    };
	    window.addEventListener("test", a, c);
	    window.removeEventListener("test", a, c);
	    return b;
	  }();

	  function Db(a) {
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
	      I: Cb ? a : b
	    };
	  }

	  var Eb = {
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
	      Fb = {
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

	  function Gb(a) {
	    return a instanceof Node ? a.__shady_getRootNode() : a;
	  }

	  function Hb(a, b) {
	    var c = [],
	        d = a;

	    for (a = Gb(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;

	    c[c.length - 1] === document && c.push(window);
	    return c;
	  }

	  function Ib(a) {
	    a.__composedPath || (a.__composedPath = Hb(a.target, !0));
	    return a.__composedPath;
	  }

	  function Jb(a, b) {
	    if (!v) return a;
	    a = Hb(a, !0);

	    for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = Gb(d), f !== e && (g = a.indexOf(f), e = f), !v(f) || -1 < g) return d;
	  }

	  function Kb(a) {
	    function b(b, d) {
	      b = new a(b, d);
	      b.__composed = d && !!d.composed;
	      return b;
	    }

	    b.__proto__ = a;
	    b.prototype = a.prototype;
	    return b;
	  }

	  var Lb = {
	    focus: !0,
	    blur: !0
	  };

	  function Mb(a) {
	    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
	  }

	  function Nb(a, b, c) {
	    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!Mb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
	  }

	  function Ob(a) {
	    var b = a.composedPath();
	    Object.defineProperty(a, "currentTarget", {
	      get: function () {
	        return d;
	      },
	      configurable: !0
	    });

	    for (var c = b.length - 1; 0 <= c; c--) {
	      var d = b[c];
	      Nb(a, d, "capture");
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
	      var f = r(d);
	      f = f && f.root;
	      if (0 === c || f && f === e) if (Nb(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.B) break;
	    }
	  }

	  function Pb(a, b, c, d, e, f) {
	    for (var g = 0; g < a.length; g++) {
	      var h = a[g],
	          l = h.type,
	          k = h.capture,
	          p = h.once,
	          w = h.passive;
	      if (b === h.node && c === l && d === k && e === p && f === w) return g;
	    }

	    return -1;
	  }

	  function Qb(a, b, c) {
	    var d = Db(c),
	        e = d.capture,
	        f = d.once,
	        g = d.passive,
	        h = d.K;
	    d = d.I;

	    if (b) {
	      var l = typeof b;
	      if ("function" === l || "object" === l) if ("object" !== l || b.handleEvent && "function" === typeof b.handleEvent) {
	        if (Fb[a]) return this.__shady_native_addEventListener(a, b, d);
	        var k = h || this;

	        if (h = b[T]) {
	          if (-1 < Pb(h, k, a, e, f, g)) return;
	        } else b[T] = [];

	        h = function (d) {
	          f && this.__shady_removeEventListener(a, b, c);
	          d.__target || Rb(d);

	          if (k !== this) {
	            var e = Object.getOwnPropertyDescriptor(d, "currentTarget");
	            Object.defineProperty(d, "currentTarget", {
	              get: function () {
	                return k;
	              },
	              configurable: !0
	            });
	          }

	          d.__previousCurrentTarget = d.currentTarget;
	          if (!v(k) && "slot" !== k.localName || -1 != d.composedPath().indexOf(k)) if (d.composed || -1 < d.composedPath().indexOf(k)) if (Mb(d) && d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation();else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === k || k instanceof Window) {
	            var g = "function" === l ? b.call(k, d) : b.handleEvent && b.handleEvent(d);
	            k !== this && (e ? (Object.defineProperty(d, "currentTarget", e), e = null) : delete d.currentTarget);
	            return g;
	          }
	        };

	        b[T].push({
	          node: k,
	          type: a,
	          capture: e,
	          once: f,
	          passive: g,
	          W: h
	        });
	        Lb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
	          capture: [],
	          bubble: []
	        }, this.__handlers[a][e ? "capture" : "bubble"].push(h)) : this.__shady_native_addEventListener(a, h, d);
	      }
	    }
	  }

	  function Sb(a, b, c) {
	    if (b) {
	      var d = Db(c);
	      c = d.capture;
	      var e = d.once,
	          f = d.passive,
	          g = d.K;
	      d = d.I;
	      if (Fb[a]) return this.__shady_native_removeEventListener(a, b, d);
	      var h = g || this;
	      g = void 0;
	      var l = null;

	      try {
	        l = b[T];
	      } catch (k) {}

	      l && (e = Pb(l, h, a, c, e, f), -1 < e && (g = l.splice(e, 1)[0].W, l.length || (b[T] = void 0)));

	      this.__shady_native_removeEventListener(a, g || b, d);

	      g && Lb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
	    }
	  }

	  function Tb() {
	    for (var a in Lb) window.__shady_native_addEventListener(a, function (a) {
	      a.__target || (Rb(a), Ob(a));
	    }, !0);
	  }

	  var Ub = z({
	    get composed() {
	      void 0 === this.__composed && (Bb ? this.__composed = "focusin" === this.type || "focusout" === this.type || Bb(this) : !1 !== this.isTrusted && (this.__composed = Eb[this.type]));
	      return this.__composed || !1;
	    },

	    composedPath: function () {
	      this.__composedPath || (this.__composedPath = Hb(this.__target, this.composed));
	      return this.__composedPath;
	    },

	    get target() {
	      return Jb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
	    },

	    get relatedTarget() {
	      if (!this.__relatedTarget) return null;
	      this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Hb(this.__relatedTarget, !0));
	      return Jb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
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

	  function Rb(a) {
	    a.__target = a.target;
	    a.__relatedTarget = a.relatedTarget;

	    if (t.f) {
	      var b = Object.getPrototypeOf(a);

	      if (!Object.hasOwnProperty(b, "__shady_patchedProto")) {
	        var c = Object.create(b);
	        c.__shady_sourceProto = b;
	        y(c, Ub);
	        b.__shady_patchedProto = c;
	      }

	      a.__proto__ = b.__shady_patchedProto;
	    } else y(a, Ub);
	  }

	  var Vb = Kb(Event),
	      Wb = Kb(CustomEvent),
	      Xb = Kb(MouseEvent);

	  function Yb() {
	    if (!Bb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
	      var a = function () {
	        var a = new MouseEvent("click", {
	          bubbles: !0,
	          cancelable: !0,
	          composed: !0
	        });

	        this.__shady_dispatchEvent(a);
	      };

	      Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
	    }
	  }

	  var Zb = Object.getOwnPropertyNames(Document.prototype).filter(function (a) {
	    return "on" === a.substring(0, 2);
	  });
	  var $b = t.f,
	      ac = {
	    querySelector: function (a) {
	      return this.__shady_native_querySelector(a);
	    },
	    querySelectorAll: function (a) {
	      return this.__shady_native_querySelectorAll(a);
	    }
	  },
	      bc = {};

	  function cc(a) {
	    bc[a] = function (b) {
	      return b["__shady_native_" + a];
	    };
	  }

	  function U(a, b) {
	    y(a, b, "__shady_native_");

	    for (var c in b) cc(c);
	  }

	  function V(a, b) {
	    b = void 0 === b ? [] : b;

	    for (var c = 0; c < b.length; c++) {
	      var d = b[c],
	          e = Object.getOwnPropertyDescriptor(a, d);
	      e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? ac[d] || (ac[d] = e.value) : cc(d));
	    }
	  }

	  var W = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
	      X = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
	      dc = document.implementation.createHTMLDocument("inert");

	  function ec(a) {
	    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
	  }

	  var fc = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
	      gc = ["querySelector", "querySelectorAll"];

	  function hc() {
	    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
	    window.EventTarget ? V(window.EventTarget.prototype, a) : (V(Node.prototype, a), V(Window.prototype, a));
	    $b ? V(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : U(Node.prototype, {
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
	          var a = [];
	          W.currentNode = this;

	          for (var c = W.firstChild(); c;) a.push(c), c = W.nextSibling();

	          return a;
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
	              for (var a = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = a.nextNode();) c += d.nodeValue;

	              return c;

	            default:
	              return this.nodeValue;
	          }
	        },
	        set: function (a) {
	          if ("undefined" === typeof a || null === a) a = "";

	          switch (this.nodeType) {
	            case Node.ELEMENT_NODE:
	            case Node.DOCUMENT_FRAGMENT_NODE:
	              ec(this);
	              (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(a), void 0);
	              break;

	            default:
	              this.nodeValue = a;
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
	          var a = [];
	          X.currentNode = this;

	          for (var c = X.firstChild(); c;) a.push(c), c = X.nextSibling();

	          return ta(a);
	        }
	      },
	      childElementCount: {
	        get: function () {
	          return this.children ? this.children.length : 0;
	        }
	      }
	    };
	    $b ? (V(Element.prototype, fc), V(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), V(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (U(Element.prototype, a), U(Element.prototype, {
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
	          return hb(this, va);
	        },
	        set: function (a) {
	          var b = "template" === this.localName ? this.content : this;
	          ec(b);
	          var d = this.localName || "div";
	          d = this.namespaceURI && this.namespaceURI !== dc.namespaceURI ? dc.createElementNS(this.namespaceURI, d) : dc.createElement(d);
	          d.innerHTML = a;

	          for (a = "template" === this.localName ? d.content : d; d = a.__shady_native_firstChild;) b.__shady_native_insertBefore(d, void 0);
	        }
	      },
	      className: {
	        get: function () {
	          return this.getAttribute("class") || "";
	        },
	        set: function (a) {
	          this.setAttribute("class", a);
	        }
	      }
	    }));
	    V(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
	    V(Element.prototype, gc);
	    V(HTMLElement.prototype, ["focus", "blur"]);
	    window.HTMLTemplateElement && V(window.HTMLTemplateElement.prototype, ["innerHTML"]);
	    $b ? V(DocumentFragment.prototype, fc) : U(DocumentFragment.prototype, a);
	    V(DocumentFragment.prototype, gc);
	    $b ? (V(Document.prototype, fc), V(Document.prototype, ["activeElement"])) : U(Document.prototype, a);
	    V(Document.prototype, ["importNode", "getElementById"]);
	    V(Document.prototype, gc);
	  }
	  var ic = z({
	    dispatchEvent: function (a) {
	      B();
	      return this.__shady_native_dispatchEvent(a);
	    },
	    addEventListener: Qb,
	    removeEventListener: Sb
	  });
	  var jc = z({
	    get assignedSlot() {
	      var a = this.__shady_parentNode;
	      (a = a && a.__shady_shadowRoot) && Q(a);
	      return (a = r(this)) && a.assignedSlot || null;
	    }

	  });
	  var kc = null;

	  function I() {
	    kc || (kc = window.ShadyCSS && window.ShadyCSS.ScopingShim);
	    return kc || null;
	  }

	  function Ta(a, b) {
	    var c = I();
	    c && c.unscopeNode(a, b);
	  }

	  function Ra(a, b) {
	    var c = I();
	    if (!c) return !0;

	    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	      c = !0;

	      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Ra(a, b);

	      return c;
	    }

	    return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
	  }

	  function H(a) {
	    if (a.nodeType !== Node.ELEMENT_NODE) return "";
	    var b = I();
	    return b ? b.currentScopeForNode(a) : "";
	  }

	  function Sa(a, b) {
	    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Sa(a, b);
	  }
	  var lc = window.document;

	  function mc(a, b) {
	    if ("slot" === b) a = a.__shady_parentNode, ka(a) && J(r(a).root);else if ("slot" === a.localName && "name" === b && (b = G(a))) {
	      if (b.a) {
	        R(b);
	        var c = a.O,
	            d = sb(a);

	        if (d !== c) {
	          c = b.b[c];
	          var e = c.indexOf(a);
	          0 <= e && c.splice(e, 1);
	          c = b.b[d] || (b.b[d] = []);
	          c.push(a);
	          1 < c.length && (b.b[d] = tb(c));
	        }
	      }

	      J(b);
	    }
	  }

	  var nc = z({
	    get previousElementSibling() {
	      var a = r(this);

	      if (a && void 0 !== a.previousSibling) {
	        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;

	        return a;
	      }

	      return this.__shady_native_previousElementSibling;
	    },

	    get nextElementSibling() {
	      var a = r(this);

	      if (a && void 0 !== a.nextSibling) {
	        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;

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
	      var a = r(this);
	      return a && a.V || null;
	    },

	    get className() {
	      return this.getAttribute("class") || "";
	    },

	    set className(a) {
	      this.__shady_setAttribute("class", a);
	    },

	    setAttribute: function (a, b) {
	      if (this.ownerDocument !== lc) this.__shady_native_setAttribute(a, b);else {
	        var c;
	        (c = I()) && "class" === a ? (c.setElementClass(this, b), c = !0) : c = !1;
	        c || (this.__shady_native_setAttribute(a, b), mc(this, a));
	      }
	    },
	    removeAttribute: function (a) {
	      this.__shady_native_removeAttribute(a);

	      mc(this, a);
	    },
	    attachShadow: function (a) {
	      if (!this) throw Error("Must provide a host.");
	      if (!a) throw Error("Not enough arguments.");

	      if (a.shadyUpgradeFragment && !t.L) {
	        var b = a.shadyUpgradeFragment;
	        b.__proto__ = ShadowRoot.prototype;
	        ob(b, this, a);
	        F(b, b);
	        a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
	        b.__noInsertionPoint = void 0;

	        if (a && a.length) {
	          var c = b;
	          Ua(c);
	          c.c.push.apply(c.c, a instanceof Array ? a : ca(ba(a)));
	          J(b);
	        }

	        b.host.__shady_native_appendChild(b);
	      } else b = new P(mb, this, a);

	      return b;
	    }
	  });
	  var oc = z({
	    blur: function () {
	      var a = r(this);
	      (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
	    }
	  });
	  Zb.forEach(function (a) {
	    oc[a] = {
	      set: function (b) {
	        var c = q(this),
	            d = a.substring(2);
	        c.h || (c.h = {});
	        c.h[a] && this.removeEventListener(d, c.h[a]);

	        this.__shady_addEventListener(d, b);

	        c.h[a] = b;
	      },
	      get: function () {
	        var b = r(this);
	        return b && b.h && b.h[a];
	      },
	      configurable: !0
	    };
	  });
	  var pc = z({
	    assignedNodes: function (a) {
	      if ("slot" === this.localName) {
	        var b = this.__shady_getRootNode();

	        b && v(b) && Q(b);
	        return (b = r(this)) ? (a && a.flatten ? b.l : b.assignedNodes) || [] : [];
	      }
	    },
	    addEventListener: function (a, b, c) {
	      if ("slot" !== this.localName || "slotchange" === a) Qb.call(this, a, b, c);else {
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
	      if ("slot" !== this.localName || "slotchange" === a) Sb.call(this, a, b, c);else {
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
	  var qc = window.document,
	      rc = z({
	    importNode: function (a, b) {
	      if (a.ownerDocument !== qc || "template" === a.localName) return this.__shady_native_importNode(a, b);

	      var c = this.__shady_native_importNode(a, !1);

	      if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
	      return c;
	    }
	  });
	  var sc = z({
	    addEventListener: Qb.bind(window),
	    removeEventListener: Sb.bind(window)
	  });
	  var Y = {};
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Y.parentElement = L.parentElement);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Y.contains = L.contains);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Y.children = M.children);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Y.innerHTML = jb.innerHTML);
	  Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Y.className = nc.className);
	  var tc = {
	    EventTarget: [ic],
	    Node: [L, window.EventTarget ? null : ic],
	    Text: [jc],
	    Element: [nc, M, jc, !t.f || "innerHTML" in Element.prototype ? jb : null, window.HTMLSlotElement ? null : pc],
	    HTMLElement: [oc, Y],
	    HTMLSlotElement: [pc],
	    DocumentFragment: [Za, $a],
	    Document: [rc, Za, $a, ab],
	    Window: [sc]
	  },
	      uc = t.f ? null : ["innerHTML", "textContent"];

	  function vc(a) {
	    var b = a ? null : uc,
	        c = {},
	        d;

	    for (d in tc) c.s = window[d] && window[d].prototype, tc[d].forEach(function (c) {
	      return function (d) {
	        return c.s && d && y(c.s, d, a, b);
	      };
	    }(c)), c = {
	      s: c.s
	    };
	  }

	  function Z(a) {
	    this.node = a;
	  }

	  m = Z.prototype;

	  m.addEventListener = function (a, b, c) {
	    return this.node.__shady_addEventListener(a, b, c);
	  };

	  m.removeEventListener = function (a, b, c) {
	    return this.node.__shady_removeEventListener(a, b, c);
	  };

	  m.appendChild = function (a) {
	    return this.node.__shady_appendChild(a);
	  };

	  m.insertBefore = function (a, b) {
	    return this.node.__shady_insertBefore(a, b);
	  };

	  m.removeChild = function (a) {
	    return this.node.__shady_removeChild(a);
	  };

	  m.replaceChild = function (a, b) {
	    return this.node.__shady_replaceChild(a, b);
	  };

	  m.cloneNode = function (a) {
	    return this.node.__shady_cloneNode(a);
	  };

	  m.getRootNode = function (a) {
	    return this.node.__shady_getRootNode(a);
	  };

	  m.contains = function (a) {
	    return this.node.__shady_contains(a);
	  };

	  m.dispatchEvent = function (a) {
	    return this.node.__shady_dispatchEvent(a);
	  };

	  m.setAttribute = function (a, b) {
	    this.node.__shady_setAttribute(a, b);
	  };

	  m.getAttribute = function (a) {
	    return this.node.__shady_native_getAttribute(a);
	  };

	  m.removeAttribute = function (a) {
	    this.node.__shady_removeAttribute(a);
	  };

	  m.attachShadow = function (a) {
	    return this.node.__shady_attachShadow(a);
	  };

	  m.focus = function () {
	    this.node.__shady_native_focus();
	  };

	  m.blur = function () {
	    this.node.__shady_blur();
	  };

	  m.importNode = function (a, b) {
	    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
	  };

	  m.getElementById = function (a) {
	    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
	  };

	  m.querySelector = function (a) {
	    return this.node.__shady_querySelector(a);
	  };

	  m.querySelectorAll = function (a, b) {
	    return this.node.__shady_querySelectorAll(a, b);
	  };

	  m.assignedNodes = function (a) {
	    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
	  };

	  da.Object.defineProperties(Z.prototype, {
	    activeElement: {
	      configurable: !0,
	      enumerable: !0,
	      get: function () {
	        if (v(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
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
	        if (v(this.node)) return this.node.host;
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
	  Zb.forEach(function (a) {
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
	  var wc = new WeakMap();

	  function xc(a) {
	    if (v(a) || a instanceof Z) return a;
	    var b = wc.get(a);
	    b || (b = new Z(a), wc.set(a, b));
	    return b;
	  }
	  t.F && (window.ShadyDOM = {
	    inUse: t.F,
	    patch: function (a) {
	      Ea(a);
	      Da(a);
	      return a;
	    },
	    isShadyRoot: v,
	    enqueue: ya,
	    flush: B,
	    flushInitial: function (a) {
	      !a.G && a.j && Q(a);
	    },
	    settings: t,
	    filterMutations: Ab,
	    observeChildren: yb,
	    unobserveChildren: zb,
	    deferConnectionCallbacks: t.deferConnectionCallbacks,
	    preferPerformance: t.preferPerformance,
	    handlesDynamicScoping: !0,
	    wrap: t.g ? xc : function (a) {
	      return a;
	    },
	    Wrapper: Z,
	    composedPath: Ib,
	    noPatch: t.g,
	    nativeMethods: ac,
	    nativeTree: bc
	  }, hc(), vc("__shady_"), Object.defineProperty(document, "_activeElement", ab.activeElement), y(Window.prototype, sc, "__shady_"), t.g || (vc(), Yb()), Tb(), window.Event = Vb, window.CustomEvent = Wb, window.MouseEvent = Xb, window.ShadowRoot = P);
	}).call(commonjsGlobal);

	Sifrr.Dom.setup({
	  useShadowRoot: true
	});
	Sifrr.Dom.load('sifrr-test');
	Sifrr.Dom.load('sifrr-nosr');

}());
//# sourceMappingURL=index.js.map
