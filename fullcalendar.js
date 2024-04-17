
FullCalendar v5.10.2
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/
var FullCalendar = (function (e) {
    "use strict";
    var t = function (e, n) {
        return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, n);
    };
    function n(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function r() {
            this.constructor = e;
        }
        t(e, n), (e.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
    }
    var r = function () {
        return (r =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
    };
    function o(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || t);
    }
    var i,
        a,
        s,
        l,
        u,
        c = {},
        d = [],
        p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function f(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function h(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function v(e, t, n) {
        var r,
            o,
            i,
            a = arguments,
            s = {};
        for (i in t) "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (s[i] = t[i]);
        if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if ((null != n && (s.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return g(e, s, r, o, null);
    }
    function g(e, t, n, r, o) {
        var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++i.__v : o };
        return null != i.vnode && i.vnode(a), a;
    }
    function m(e) {
        return e.children;
    }
    function y(e, t) {
        (this.props = e), (this.context = t);
    }
    function E(e, t) {
        if (null == t) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? E(e) : null;
    }
    function S(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break;
                }
            return S(e);
        }
    }
    function b(e) {
        ((!e.__d && (e.__d = !0) && a.push(e) && !D.__r++) || l !== i.debounceRendering) && ((l = i.debounceRendering) || s)(D);
    }
    function D() {
        for (var e; (D.__r = a.length); )
            (e = a.sort(function (e, t) {
                return e.__v.__b - t.__v.__b;
            })),
                (a = []),
                e.some(function (e) {
                    var t, n, r, o, i, a;
                    e.__d &&
                        ((i = (o = (t = e).__v).__e),
                        (a = t.__P) && ((n = []), ((r = f({}, o)).__v = o.__v + 1), I(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? E(o) : i, o.__h), P(n, o), o.__e != i && S(o)));
                });
    }
    function C(e, t, n, r, o, i, a, s, l, u) {
        var p,
            f,
            h,
            v,
            y,
            S,
            b,
            D = (r && r.__k) || d,
            C = D.length;
        for (n.__k = [], p = 0; p < t.length; p++)
            if (
                null !=
                (v = n.__k[p] =
                    null == (v = t[p]) || "boolean" == typeof v
                        ? null
                        : "string" == typeof v || "number" == typeof v || "bigint" == typeof v
                        ? g(null, v, null, null, v)
                        : Array.isArray(v)
                        ? g(m, { children: v }, null, null, null)
                        : v.__b > 0
                        ? g(v.type, v.props, v.key, null, v.__v)
                        : v)
            ) {
                if (((v.__ = n), (v.__b = n.__b + 1), null === (h = D[p]) || (h && v.key == h.key && v.type === h.type))) D[p] = void 0;
                else
                    for (f = 0; f < C; f++) {
                        if ((h = D[f]) && v.key == h.key && v.type === h.type) {
                            D[f] = void 0;
                            break;
                        }
                        h = null;
                    }
                I(e, v, (h = h || c), o, i, a, s, l, u),
                    (y = v.__e),
                    (f = v.ref) && h.ref != f && (b || (b = []), h.ref && b.push(h.ref, null, v), b.push(f, v.__c || y, v)),
                    null != y
                        ? (null == S && (S = y),
                          "function" == typeof v.type && null != v.__k && v.__k === h.__k ? (v.__d = l = w(v, l, e)) : (l = _(e, v, h, D, y, l)),
                          u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : (e.value = ""))
                        : l && h.__e == l && l.parentNode != e && (l = E(h));
            }
        for (n.__e = S, p = C; p--; ) null != D[p] && ("function" == typeof n.type && null != D[p].__e && D[p].__e == n.__d && (n.__d = E(r, p + 1)), O(D[p], D[p]));
        if (b) for (p = 0; p < b.length; p++) H(b[p], b[++p], b[++p]);
    }
    function w(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++) (o = e.__k[r]) && ((o.__ = e), (t = "function" == typeof o.type ? w(o, t, n) : _(n, o, o, e.__k, o.__e, t)));
        return t;
    }
    function R(e, t) {
        return (
            (t = t || []),
            null == e ||
                "boolean" == typeof e ||
                (Array.isArray(e)
                    ? e.some(function (e) {
                          R(e, t);
                      })
                    : t.push(e)),
            t
        );
    }
    function _(e, t, n, r, o, i) {
        var a, s, l;
        if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
        else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
            else {
                for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2) if (s == o) break e;
                e.insertBefore(o, i), (a = i);
            }
        return void 0 !== a ? a : o.nextSibling;
    }
    function T(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : (e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px");
    }
    function k(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) (n && t in n) || T(e.style, t, "");
                if (n) for (t in n) (r && n[t] === r[t]) || T(e.style, t, n[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            (i = t !== (t = t.replace(/Capture$/, ""))),
                (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + i] = n),
                n ? r || e.addEventListener(t, i ? M : x, i) : e.removeEventListener(t, i ? M : x, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == n ? "" : n;
                    break e;
                } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t));
        }
    }
    function x(e) {
        this.l[e.type + !1](i.event ? i.event(e) : e);
    }
    function M(e) {
        this.l[e.type + !0](i.event ? i.event(e) : e);
    }
    function I(e, t, n, r, o, a, s, l, u) {
        var c,
            d,
            p,
            h,
            v,
            g,
            E,
            S,
            b,
            D,
            w,
            R = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && ((u = n.__h), (l = t.__e = n.__e), (t.__h = null), (a = [l])), (c = i.__b) && c(t);
        try {
            e: if ("function" == typeof R) {
                if (
                    ((S = t.props),
                    (b = (c = R.contextType) && r[c.__c]),
                    (D = c ? (b ? b.props.value : c.__) : r),
                    n.__c
                        ? (E = (d = t.__c = n.__c).__ = d.__E)
                        : ("prototype" in R && R.prototype.render ? (t.__c = d = new R(S, D)) : ((t.__c = d = new y(S, D)), (d.constructor = R), (d.render = A)),
                          b && b.sub(d),
                          (d.props = S),
                          d.state || (d.state = {}),
                          (d.context = D),
                          (d.__n = r),
                          (p = d.__d = !0),
                          (d.__h = [])),
                    null == d.__s && (d.__s = d.state),
                    null != R.getDerivedStateFromProps && (d.__s == d.state && (d.__s = f({}, d.__s)), f(d.__s, R.getDerivedStateFromProps(S, d.__s))),
                    (h = d.props),
                    (v = d.state),
                    p)
                )
                    null == R.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (
                        (null == R.getDerivedStateFromProps && S !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, D),
                        (!d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, D)) || t.__v === n.__v)
                    ) {
                        (d.props = S),
                            (d.state = d.__s),
                            t.__v !== n.__v && (d.__d = !1),
                            (d.__v = t),
                            (t.__e = n.__e),
                            (t.__k = n.__k),
                            t.__k.forEach(function (e) {
                                e && (e.__ = t);
                            }),
                            d.__h.length && s.push(d);
                        break e;
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, D),
                        null != d.componentDidUpdate &&
                            d.__h.push(function () {
                                d.componentDidUpdate(h, v, g);
                            });
                }
                (d.context = D),
                    (d.props = S),
                    (d.state = d.__s),
                    (c = i.__r) && c(t),
                    (d.__d = !1),
                    (d.__v = t),
                    (d.__P = e),
                    (c = d.render(d.props, d.state, d.context)),
                    (d.state = d.__s),
                    null != d.getChildContext && (r = f(f({}, r), d.getChildContext())),
                    p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(h, v)),
                    (w = null != c && c.type === m && null == c.key ? c.props.children : c),
                    C(e, Array.isArray(w) ? w : [w], t, n, r, o, a, s, l, u),
                    (d.base = t.__e),
                    (t.__h = null),
                    d.__h.length && s.push(d),
                    E && (d.__E = d.__ = null),
                    (d.__e = !1);
            } else null == a && t.__v === n.__v ? ((t.__k = n.__k), (t.__e = n.__e)) : (t.__e = N(n.__e, t, n, r, o, a, s, u));
            (c = i.diffed) && c(t);
        } catch (e) {
            (t.__v = null), (u || null != a) && ((t.__e = l), (t.__h = !!u), (a[a.indexOf(l)] = null)), i.__e(e, t, n);
        }
    }
    function P(e, t) {
        i.__c && i.__c(t, e),
            e.some(function (t) {
                try {
                    (e = t.__h),
                        (t.__h = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    i.__e(e, t.__v);
                }
            });
    }
    function N(e, t, n, r, o, i, a, s) {
        var l,
            u,
            p,
            f,
            v = n.props,
            g = t.props,
            m = t.type,
            y = 0;
        if (("svg" === m && (o = !0), null != i))
            for (; y < i.length; y++)
                if ((l = i[y]) && (l === e || (m ? l.localName == m : 3 == l.nodeType))) {
                    (e = l), (i[y] = null);
                    break;
                }
        if (null == e) {
            if (null === m) return document.createTextNode(g);
            (e = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, g.is && g)), (i = null), (s = !1);
        }
        if (null === m) v === g || (s && e.data === g) || (e.data = g);
        else {
            if (((i = i && d.slice.call(e.childNodes)), (u = (v = n.props || c).dangerouslySetInnerHTML), (p = g.dangerouslySetInnerHTML), !s)) {
                if (null != i) for (v = {}, f = 0; f < e.attributes.length; f++) v[e.attributes[f].name] = e.attributes[f].value;
                (p || u) && ((p && ((u && p.__html == u.__html) || p.__html === e.innerHTML)) || (e.innerHTML = (p && p.__html) || ""));
            }
            if (
                ((function (e, t, n, r, o) {
                    var i;
                    for (i in n) "children" === i || "key" === i || i in t || k(e, i, null, n[i], r);
                    for (i in t) (o && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || k(e, i, t[i], n[i], r);
                })(e, g, v, o, s),
                p)
            )
                t.__k = [];
            else if (((y = t.props.children), C(e, Array.isArray(y) ? y : [y], t, n, r, o && "foreignObject" !== m, i, a, e.firstChild, s), null != i)) for (y = i.length; y--; ) null != i[y] && h(i[y]);
            s ||
                ("value" in g && void 0 !== (y = g.value) && (y !== e.value || ("progress" === m && !y)) && k(e, "value", y, v.value, !1),
                "checked" in g && void 0 !== (y = g.checked) && y !== e.checked && k(e, "checked", y, v.checked, !1));
        }
        return e;
    }
    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            i.__e(e, n);
        }
    }
    function O(e, t, n) {
        var r, o, a;
        if ((i.unmount && i.unmount(e), (r = e.ref) && ((r.current && r.current !== e.__e) || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), (e.__e = e.__d = void 0), null != (r = e.__c))) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount();
                } catch (e) {
                    i.__e(e, t);
                }
            r.base = r.__P = null;
        }
        if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && O(r[a], t, n);
        null != o && h(o);
    }
    function A(e, t, n) {
        return this.constructor(e, n);
    }
    function L(e, t, n) {
        var r, o, a;
        i.__ && i.__(e, t),
            (o = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (a = []),
            I(t, (e = ((!r && n) || t).__k = v(m, null, [e])), o || c, c, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? d.slice.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r),
            P(a, e);
    }
    (i = {
        __e: function (e, t) {
            for (var n, r, o; (t = t.__); )
                if ((n = t.__c) && !n.__)
                    try {
                        if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)), null != n.componentDidCatch && (n.componentDidCatch(e), (o = n.__d)), o))
                            return (n.__E = n);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
        __v: 0,
    }),
        (y.prototype.setState = function (e, t) {
            var n;
            (n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = f({}, this.state))), "function" == typeof e && (e = e(f({}, n), this.props)), e && f(n, e), null != e && this.__v && (t && this.__h.push(t), b(this));
        }),
        (y.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), b(this));
        }),
        (y.prototype.render = m),
        (a = []),
        (s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (D.__r = 0),
        (u = 0);
    var U,
        W = [],
        V = i.__b,
        F = i.__r,
        B = i.diffed,
        z = i.__c,
        j = i.unmount;
    function G() {
        W.forEach(function (e) {
            if (e.__P)
                try {
                    e.__H.__h.forEach(Y), e.__H.__h.forEach(Z), (e.__H.__h = []);
                } catch (t) {
                    (e.__H.__h = []), i.__e(t, e.__v);
                }
        }),
            (W = []);
    }
    (i.__b = function (e) {
        V && V(e);
    }),
        (i.__r = function (e) {
            F && F(e);
            var t = e.__c.__H;
            t && (t.__h.forEach(Y), t.__h.forEach(Z), (t.__h = []));
        }),
        (i.diffed = function (e) {
            B && B(e);
            var t = e.__c;
            t &&
                t.__H &&
                t.__H.__h.length &&
                ((1 !== W.push(t) && U === i.requestAnimationFrame) ||
                    (
                        (U = i.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                n = function () {
                                    clearTimeout(r), q && cancelAnimationFrame(t), setTimeout(e);
                                },
                                r = setTimeout(n, 100);
                            q && (t = requestAnimationFrame(n));
                        }
                    )(G));
        }),
        (i.__c = function (e, t) {
            t.some(function (e) {
                try {
                    e.__h.forEach(Y),
                        (e.__h = e.__h.filter(function (e) {
                            return !e.__ || Z(e);
                        }));
                } catch (n) {
                    t.some(function (e) {
                        e.__h && (e.__h = []);
                    }),
                        (t = []),
                        i.__e(n, e.__v);
                }
            }),
                z && z(e, t);
        }),
        (i.unmount = function (e) {
            j && j(e);
            var t = e.__c;
            if (t && t.__H)
                try {
                    t.__H.__.forEach(Y);
                } catch (e) {
                    i.__e(e, t.__v);
                }
        });
    var q = "function" == typeof requestAnimationFrame;
    function Y(e) {
        "function" == typeof e.__c && e.__c();
    }
    function Z(e) {
        e.__c = e.__();
    }
    function X(e, t) {
        for (var n in e) if ("__source" !== n && !(n in t)) return !0;
        for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1;
    }
    function K(e) {
        this.props = e;
    }
    ((K.prototype = new y()).isPureReactComponent = !0),
        (K.prototype.shouldComponentUpdate = function (e, t) {
            return X(this.props, e) || X(this.state, t);
        });
    var $ = i.__b;
    i.__b = function (e) {
        e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), $ && $(e);
    };
    var J = i.__e;
    i.__e = function (e, t, n) {
        if (e.then) for (var r, o = t; (o = o.__); ) if ((r = o.__c) && r.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
        J(e, t, n);
    };
    var Q = i.unmount;
    function ee() {
        (this.__u = 0), (this.t = null), (this.__b = null);
    }
    function te(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e);
    }
    function ne() {
        (this.u = null), (this.o = null);
    }
    (i.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Q && Q(e);
    }),
        ((ee.prototype = new y()).__c = function (e, t) {
            var n = t.__c,
                r = this;
            null == r.t && (r.t = []), r.t.push(n);
            var o = te(r.__v),
                i = !1,
                a = function () {
                    i || ((i = !0), (n.__R = null), o ? o(s) : s());
                };
            n.__R = a;
            var s = function () {
                    if (!--r.__u) {
                        if (r.state.__e) {
                            var e = r.state.__e;
                            r.__v.__k[0] = (function e(t, n, r) {
                                return (
                                    t &&
                                        ((t.__v = null),
                                        (t.__k =
                                            t.__k &&
                                            t.__k.map(function (t) {
                                                return e(t, n, r);
                                            })),
                                        t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = r))),
                                    t
                                );
                            })(e, e.__c.__P, e.__c.__O);
                        }
                        var t;
                        for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); ) t.forceUpdate();
                    }
                },
                l = !0 === t.__h;
            r.__u++ || l || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(a, a);
        }),
        (ee.prototype.componentWillUnmount = function () {
            this.t = [];
        }),
        (ee.prototype.render = function (e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div"),
                        r = this.__v.__k[0].__c;
                    this.__v.__k[0] = (function e(t, n, r) {
                        return (
                            t &&
                                (t.__c &&
                                    t.__c.__H &&
                                    (t.__c.__H.__.forEach(function (e) {
                                        "function" == typeof e.__c && e.__c();
                                    }),
                                    (t.__c.__H = null)),
                                null !=
                                    (t = (function (e, t) {
                                        for (var n in t) e[n] = t[n];
                                        return e;
                                    })({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                                (t.__k =
                                    t.__k &&
                                    t.__k.map(function (t) {
                                        return e(t, n, r);
                                    }))),
                            t
                        );
                    })(this.__b, n, (r.__O = r.__P));
                }
                this.__b = null;
            }
            var o = t.__e && v(m, null, e.fallback);
            return o && (o.__h = null), [v(m, null, t.__e ? null : e.children), o];
        });
    var re = function (e, t, n) {
        if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)))
            for (n = e.u; n; ) {
                for (; n.length > 3; ) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2];
            }
    };
    function oe(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function ie(e) {
        var t = this,
            n = e.i;
        (t.componentWillUnmount = function () {
            L(null, t.l), (t.l = null), (t.i = null);
        }),
            t.i && t.i !== n && t.componentWillUnmount(),
            e.__v
                ? (t.l ||
                      ((t.i = n),
                      (t.l = {
                          nodeType: 1,
                          parentNode: n,
                          childNodes: [],
                          appendChild: function (e) {
                              this.childNodes.push(e), t.i.appendChild(e);
                          },
                          insertBefore: function (e, n) {
                              this.childNodes.push(e), t.i.appendChild(e);
                          },
                          removeChild: function (e) {
                              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
                          },
                      })),
                  L(v(oe, { context: t.context }, e.__v), t.l))
                : t.l && t.componentWillUnmount();
    }
    ((ne.prototype = new y()).__e = function (e) {
        var t = this,
            n = te(t.__v),
            r = t.o.get(e);
        return (
            r[0]++,
            function (o) {
                var i = function () {
                    t.props.revealOrder ? (r.push(o), re(t, e, r)) : o();
                };
                n ? n(i) : i();
            }
        );
    }),
        (ne.prototype.render = function (e) {
            (this.u = null), (this.o = new Map());
            var t = R(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
            return e.children;
        }),
        (ne.prototype.componentDidUpdate = ne.prototype.componentDidMount = function () {
            var e = this;
            this.o.forEach(function (t, n) {
                re(e, n, t);
            });
        });
    var ae = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
        se = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        le = function (e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e);
        };
    (y.prototype.isReactComponent = {}),
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
            Object.defineProperty(y.prototype, e, {
                configurable: !0,
                get: function () {
                    return this["UNSAFE_" + e];
                },
                set: function (t) {
                    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
                },
            });
        });
    var ue = i.event;
    function ce() {}
    function de() {
        return this.cancelBubble;
    }
    function pe() {
        return this.defaultPrevented;
    }
    i.event = function (e) {
        return ue && (e = ue(e)), (e.persist = ce), (e.isPropagationStopped = de), (e.isDefaultPrevented = pe), (e.nativeEvent = e);
    };
    var fe = {
            configurable: !0,
            get: function () {
                return this.class;
            },
        },
        he = i.vnode;
    i.vnode = function (e) {
        var t = e.type,
            n = e.props,
            r = n;
        if ("string" == typeof t) {
            for (var o in ((r = {}), n)) {
                var i = n[o];
                ("value" === o && "defaultValue" in n && null == i) ||
                    ("defaultValue" === o && "value" in n && null == n.value
                        ? (o = "value")
                        : "download" === o && !0 === i
                        ? (i = "")
                        : /ondoubleclick/i.test(o)
                        ? (o = "ondblclick")
                        : /^onchange(textarea|input)/i.test(o + t) && !le(n.type)
                        ? (o = "oninput")
                        : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
                        ? (o = o.toLowerCase())
                        : se.test(o)
                        ? (o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                        : null === i && (i = void 0),
                    (r[o] = i));
            }
