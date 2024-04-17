"select" == t &&
                r.multiple &&
                Array.isArray(r.value) &&
                (r.value = R(n.children).forEach(function (e) {
                    e.props.selected = -1 != r.value.indexOf(e.props.value);
                })),
                "select" == t &&
                    null != r.defaultValue &&
                    (r.value = R(n.children).forEach(function (e) {
                        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
                    })),
                (e.props = r);
        }
        t && n.class != n.className && ((fe.enumerable = "className" in n), null != n.className && (r.class = n.className), Object.defineProperty(r, "className", fe)), (e.$$typeof = ae), he && he(e);
    };
    var ve = i.__r;
    (i.__r = function (e) {
        ve && ve(e);
    }),
        "object" == typeof performance && "function" == typeof performance.now && performance.now.bind(performance);
    var ge = "undefined" != typeof globalThis ? globalThis : window;
    ge.FullCalendarVDom
        ? console.warn("FullCalendar VDOM already loaded")
        : (ge.FullCalendarVDom = {
              Component: y,
              createElement: v,
              render: L,
              createRef: function () {
                  return { current: null };
              },
              Fragment: m,
              createContext: function (e) {
                  var t = (function (e, t) {
                          var n = {
                              __c: (t = "__cC" + u++),
                              __: e,
                              Consumer: function (e, t) {
                                  return e.children(t);
                              },
                              Provider: function (e) {
                                  var n, r;
                                  return (
                                      this.getChildContext ||
                                          ((n = []),
                                          ((r = {})[t] = this),
                                          (this.getChildContext = function () {
                                              return r;
                                          }),
                                          (this.shouldComponentUpdate = function (e) {
                                              this.props.value !== e.value && n.some(b);
                                          }),
                                          (this.sub = function (e) {
                                              n.push(e);
                                              var t = e.componentWillUnmount;
                                              e.componentWillUnmount = function () {
                                                  n.splice(n.indexOf(e), 1), t && t.call(e);
                                              };
                                          })),
                                      e.children
                                  );
                              },
                          };
                          return (n.Provider.__ = n.Consumer.contextType = n);
                      })(e),
                      n = t.Provider;
                  return (
                      (t.Provider = function () {
                          var e = this,
                              t = !this.getChildContext,
                              r = n.apply(this, arguments);
                          if (t) {
                              var o = [];
                              (this.shouldComponentUpdate = function (t) {
                                  e.props.value !== t.value &&
                                      o.forEach(function (e) {
                                          (e.context = t.value), e.forceUpdate();
                                      });
                              }),
                                  (this.sub = function (e) {
                                      o.push(e);
                                      var t = e.componentWillUnmount;
                                      e.componentWillUnmount = function () {
                                          o.splice(o.indexOf(e), 1), t && t.call(e);
                                      };
                                  });
                          }
                          return r;
                      }),
                      t
                  );
              },
              createPortal: function (e, t) {
                  return v(ie, { __v: e, i: t });
              },
              flushToDom: function () {
                  var e = i.debounceRendering,
                      t = [];
                  function n(e) {
                      t.push(e);
                  }
                  (i.debounceRendering = n), L(v(me, {}), document.createElement("div"));
                  for (; t.length; ) t.shift()();
                  i.debounceRendering = e;
              },
              unmountComponentAtNode: function (e) {
                  L(null, e);
              },
          });
    var me = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return v("div", {});
            }),
            (t.prototype.componentDidMount = function () {
                this.setState({});
            }),
            t
        );
    })(y);
    var ye = (function () {
        function e(e, t) {
            (this.context = e), (this.internalEventSource = t);
        }
        return (
            (e.prototype.remove = function () {
                this.context.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId });
            }),
            (e.prototype.refetch = function () {
                this.context.dispatch({ type: "FETCH_EVENT_SOURCES", sourceIds: [this.internalEventSource.sourceId], isRefetch: !0 });
            }),
            Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.internalEventSource.publicId;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return this.internalEventSource.meta.url;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "format", {
                get: function () {
                    return this.internalEventSource.meta.format;
                },
                enumerable: !1,
                configurable: !0,
            }),
            e
        );
    })();
    function Ee(e) {
        e.parentNode && e.parentNode.removeChild(e);
    }
    function Se(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (be(e, t)) return e;
            e = e.parentElement || e.parentNode;
        } while (null !== e && 1 === e.nodeType);
        return null;
    }
    function be(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
    }
    function De(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1) for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r;
    }
    var Ce = /(top|left|right|bottom|width|height)$/i;
    function we(e, t) {
        for (var n in t) Re(e, n, t[n]);
    }
    function Re(e, t, n) {
        null == n ? (e.style[t] = "") : "number" == typeof n && Ce.test(t) ? (e.style[t] = n + "px") : (e.style[t] = n);
    }
    function _e(e) {
        var t, n;
        return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target;
    }
    function Te(e) {
        return e.getRootNode ? e.getRootNode() : document;
    }
    var ke = 0;
    function xe() {
        return "fc-dom-" + (ke += 1);
    }
    function Me(e) {
        e.preventDefault();
    }
    function Ie(e, t, n, r) {
        var o = (function (e, t) {
            return function (n) {
                var r = Se(n.target, e);
                r && t.call(r, n, r);
            };
        })(n, r);
        return (
            e.addEventListener(t, o),
            function () {
                e.removeEventListener(t, o);
            }
        );
    }
    var Pe = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
    function Ne(e, t) {
        var n = function (r) {
            t(r),
                Pe.forEach(function (t) {
                    e.removeEventListener(t, n);
                });
        };
        Pe.forEach(function (t) {
            e.addEventListener(t, n);
        });
    }
    function He(e) {
        return r({ onClick: e }, Oe(e));
    }
    function Oe(e) {
        return {
            tabIndex: 0,
            onKeyDown: function (t) {
                ("Enter" !== t.key && " " !== t.key) || (e(t), t.preventDefault());
            },
        };
    }
    var Ae = 0;
    function Le() {
        return String((Ae += 1));
    }
    function Ue() {
        document.body.classList.add("fc-not-allowed");
    }
    function We() {
        document.body.classList.remove("fc-not-allowed");
    }
    function Ve(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Me);
    }
    function Fe(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", Me);
    }
    function Be(e) {
        e.addEventListener("contextmenu", Me);
    }
    function ze(e) {
        e.removeEventListener("contextmenu", Me);
    }
    function je(e) {
        var t,
            n,
            r = [],
            o = [];
        for ("string" == typeof e ? (o = e.split(/\s*,\s*/)) : "function" == typeof e ? (o = [e]) : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1)
            "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? { field: n.substring(1), order: -1 } : { field: n, order: 1 }) : "function" == typeof n && r.push({ func: n });
        return r;
    }
    function Ge(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1) if ((o = qe(e, t, n[r]))) return o;
        return 0;
    }
    function qe(e, t, n) {
        return n.func ? n.func(e, t) : Ye(e[n.field], t[n.field]) * (n.order || 1);
    }
    function Ye(e, t) {
        return e || t ? (null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t) : 0;
    }
    function Ze(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n;
    }
    function Xe(e, t, n) {
        return "function" == typeof e
            ? e.apply(void 0, t)
            : "string" == typeof e
            ? t.reduce(function (e, t, n) {
                  return e.replace("$" + n, t || "");
              }, e)
            : n;
    }
    function Ke(e, t) {
        return e - t;
    }
    function $e(e) {
        return e % 1 == 0;
    }
    function Je(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
    }
    var Qe = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function et(e, t) {
        var n = ft(e);
        return (n[2] += 7 * t), ht(n);
    }
    function tt(e, t) {
        var n = ft(e);
        return (n[2] += t), ht(n);
    }
    function nt(e, t) {
        var n = ft(e);
        return (n[6] += t), ht(n);
    }
    function rt(e, t) {
        return ot(e, t) / 7;
    }
    function ot(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5;
    }
    function it(e, t) {
        var n = lt(e),
            r = lt(t);
        return { years: 0, months: 0, days: Math.round(ot(n, r)), milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()) };
    }
    function at(e, t) {
        var n = st(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null;
    }
    function st(e, t) {
        return gt(e) === gt(t) ? Math.round(ot(e, t)) : null;
    }
    function lt(e) {
        return ht([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
    }
    function ut(e, t, n, r) {
        var o = ht([t, 0, 1 + ct(t, n, r)]),
            i = lt(e),
            a = Math.round(ot(o, i));
        return Math.floor(a / 7) + 1;
    }
    function ct(e, t, n) {
        var r = 7 + t - n;
        return -((7 + ht([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
    }
    function dt(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()];
    }
    function pt(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
    }
    function ft(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()];
    }
    function ht(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e));
    }
    function vt(e) {
        return !isNaN(e.valueOf());
    }
    function gt(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds();
    }
    function mt(e, t, n, r) {
        return { instanceId: Le(), defId: e, range: t, forcedStartTzo: null == n ? null : n, forcedEndTzo: null == r ? null : r };
    }
    var yt = Object.prototype.hasOwnProperty;
    function Et(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break;
                    }
                }
                o.length && (n[r] = Et(o));
            }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l]);
        }
        return n;
    }
    function St(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n;
    }
    function bt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n;
    }
    function Dt(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0;
        }
        return t;
    }
    function Ct(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t;
    }
    function wt(e, t) {
        if (e === t) return !0;
        for (var n in e) if (yt.call(e, n) && !(n in t)) return !1;
        for (var n in t) if (yt.call(t, n) && e[n] !== t[n]) return !1;
        return !0;
    }
    function Rt(e, t) {
        var n = [];
        for (var r in e) yt.call(e, r) && (r in t || n.push(r));
        for (var r in t) yt.call(t, r) && e[r] !== t[r] && n.push(r);
        return n;
    }
    function _t(e, t, n) {
        if ((void 0 === n && (n = {}), e === t)) return !0;
        for (var r in t) if (!(r in e) || !Tt(e[r], t[r], n[r])) return !1;
        for (var r in e) if (!(r in t)) return !1;
        return !0;
    }
    function Tt(e, t, n) {
        return e === t || !0 === n || (!!n && n(e, t));
    }
    function kt(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a);
        }
        return o;
    }
    function xt(e, t, n) {
        var r = n.dateEnv,
            o = n.pluginHooks,
            i = n.options,
            a = e.defs,
            s = e.instances;
        for (var l in ((s = St(s, function (e) {
            return !a[e.defId].recurringDef;
        })),
        a)) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
                for (var d = 0, p = Mt(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d],
                        h = mt(l, { start: f, end: r.add(f, c) });
                    s[h.instanceId] = h;
                }
            }
        }
        return { defs: a, instances: s };
    }
    function Mt(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, { start: r.subtract(n.start, t), end: n.end }, r);
        return e.allDay && (i = i.map(lt)), i;
    }
    var It = ["years", "months", "days", "milliseconds"],
        Pt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function Nt(e, t) {
        var n;
        return "string" == typeof e
            ? (function (e) {
                  var t = Pt.exec(e);
                  if (t) {
                      var n = t[1] ? -1 : 1;
                      return {
                          years: 0,
                          months: 0,
                          days: n * (t[2] ? parseInt(t[2], 10) : 0),
                          milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0)),
                      };
                  }
                  return null;
              })(e)
            : "object" == typeof e && e
            ? Ht(e)
            : "number" == typeof e
            ? Ht((((n = {})[t || "milliseconds"] = e), n))
            : null;
    }
    function Ht(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0),
            },
            n = e.weeks || e.week;
        return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
    }
    function Ot(e, t) {
        return { years: e.years + t.years, months: e.months + t.months, days: e.days + t.days, milliseconds: e.milliseconds + t.milliseconds };
    }
    function At(e, t) {
        return { years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t };
    }
    function Lt(e) {
        return Ut(e) / 864e5;
    }
    function Ut(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds;
    }
    function Wt(e, t) {
        for (var n = null, r = 0; r < It.length; r += 1) {
            var o = It[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!$e(i) || (null !== n && n !== i)) return null;
                n = i;
            } else if (e[o]) return null;
        }
        return n;
    }
    function Vt(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return { unit: "millisecond", value: t };
            if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
            if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
            if (t) return { unit: "hour", value: t / 36e5 };
        }
        return e.days
            ? e.specifiedWeeks && e.days % 7 == 0
                ? { unit: "week", value: e.days / 7 }
                : { unit: "day", value: e.days }
            : e.months
            ? { unit: "month", value: e.months }
            : e.years
            ? { unit: "year", value: e.years }
            : { unit: "millisecond", value: 0 };
    }
    function Ft(e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return (r = r.replace(".000", "")), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? (r = r.replace("Z", "")) : 0 !== t && (r = r.replace("Z", jt(t, !0)))), r;
    }
    function Bt(e) {
        return e.toISOString().replace(/T.*$/, "");
    }
    function zt(e) {
        return Ze(e.getUTCHours(), 2) + ":" + Ze(e.getUTCMinutes(), 2) + ":" + Ze(e.getUTCSeconds(), 2);
    }
    function jt(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            o = Math.floor(r / 60),
            i = Math.round(r % 60);
        return t ? n + Ze(o, 2) + ":" + Ze(i, 2) : "GMT" + n + o + (i ? ":" + Ze(i, 2) : "");
    }
    function Gt(e, t, n) {
        if (e === t) return !0;
        var r,
            o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1) if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0;
    }
    function qt(e, t, n) {
        var r, o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
            if (r) {
