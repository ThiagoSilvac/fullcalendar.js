        return (
            (e.prototype.setThisContext = function (e) {
                this.thisContext = e;
            }),
            (e.prototype.setOptions = function (e) {
                this.options = e;
            }),
            (e.prototype.on = function (e, t) {
                !(function (e, t, n) {
                    (e[t] || (e[t] = [])).push(n);
                })(this.handlers, e, t);
            }),
            (e.prototype.off = function (e, t) {
                !(function (e, t, n) {
                    n
                        ? e[t] &&
                          (e[t] = e[t].filter(function (e) {
                              return e !== n;
                          }))
                        : delete e[t];
                })(this.handlers, e, t);
            }),
            (e.prototype.trigger = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = [].concat(o || [], r), a = 0, s = i; a < s.length; a++) {
                    var l = s[a];
                    l.apply(this.thisContext, t);
                }
            }),
            (e.prototype.hasHandlers = function (e) {
                return Boolean((this.handlers[e] && this.handlers[e].length) || (this.options && this.options[e]));
            }),
            e
        );
    })();
    var So = (function () {
            function e(e, t, n, r) {
                this.els = t;
                var o = (this.originClientRect = e.getBoundingClientRect());
                n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top);
            }
            return (
                (e.prototype.buildElHorizontals = function (e) {
                    for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                        var i = o[r].getBoundingClientRect();
                        t.push(i.left - e), n.push(i.right - e);
                    }
                    (this.lefts = t), (this.rights = n);
                }),
                (e.prototype.buildElVerticals = function (e) {
                    for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                        var i = o[r].getBoundingClientRect();
                        t.push(i.top - e), n.push(i.bottom - e);
                    }
                    (this.tops = t), (this.bottoms = n);
                }),
                (e.prototype.leftToIndex = function (e) {
                    var t,
                        n = this.lefts,
                        r = this.rights,
                        o = n.length;
                    for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t;
                }),
                (e.prototype.topToIndex = function (e) {
                    var t,
                        n = this.tops,
                        r = this.bottoms,
                        o = n.length;
                    for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t;
                }),
                (e.prototype.getWidth = function (e) {
                    return this.rights[e] - this.lefts[e];
                }),
                (e.prototype.getHeight = function (e) {
                    return this.bottoms[e] - this.tops[e];
                }),
                e
            );
        })(),
        bo = (function () {
            function e() {}
            return (
                (e.prototype.getMaxScrollTop = function () {
                    return this.getScrollHeight() - this.getClientHeight();
                }),
                (e.prototype.getMaxScrollLeft = function () {
                    return this.getScrollWidth() - this.getClientWidth();
                }),
                (e.prototype.canScrollVertically = function () {
                    return this.getMaxScrollTop() > 0;
                }),
                (e.prototype.canScrollHorizontally = function () {
                    return this.getMaxScrollLeft() > 0;
                }),
                (e.prototype.canScrollUp = function () {
                    return this.getScrollTop() > 0;
                }),
                (e.prototype.canScrollDown = function () {
                    return this.getScrollTop() < this.getMaxScrollTop();
                }),
                (e.prototype.canScrollLeft = function () {
                    return this.getScrollLeft() > 0;
                }),
                (e.prototype.canScrollRight = function () {
                    return this.getScrollLeft() < this.getMaxScrollLeft();
                }),
                e
            );
        })(),
        Do = (function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return (n.el = t), n;
            }
            return (
                n(t, e),
                (t.prototype.getScrollTop = function () {
                    return this.el.scrollTop;
                }),
                (t.prototype.getScrollLeft = function () {
                    return this.el.scrollLeft;
                }),
                (t.prototype.setScrollTop = function (e) {
                    this.el.scrollTop = e;
                }),
                (t.prototype.setScrollLeft = function (e) {
                    this.el.scrollLeft = e;
                }),
                (t.prototype.getScrollWidth = function () {
                    return this.el.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return this.el.scrollHeight;
                }),
                (t.prototype.getClientHeight = function () {
                    return this.el.clientHeight;
                }),
                (t.prototype.getClientWidth = function () {
                    return this.el.clientWidth;
                }),
                t
            );
        })(bo),
        Co = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.getScrollTop = function () {
                    return window.pageYOffset;
                }),
                (t.prototype.getScrollLeft = function () {
                    return window.pageXOffset;
                }),
                (t.prototype.setScrollTop = function (e) {
                    window.scroll(window.pageXOffset, e);
                }),
                (t.prototype.setScrollLeft = function (e) {
                    window.scroll(e, window.pageYOffset);
                }),
                (t.prototype.getScrollWidth = function () {
                    return document.documentElement.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return document.documentElement.scrollHeight;
                }),
                (t.prototype.getClientHeight = function () {
                    return document.documentElement.clientHeight;
                }),
                (t.prototype.getClientWidth = function () {
                    return document.documentElement.clientWidth;
                }),
                t
            );
        })(bo),
        wo = (function () {
            function e(e) {
                this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
            }
            return (
                (e.prototype.setIconOverride = function (e) {
                    var t, n;
                    if ("object" == typeof e && e) {
                        for (n in ((t = r({}, this.iconClasses)), e)) t[n] = this.applyIconOverridePrefix(e[n]);
                        this.iconClasses = t;
                    } else !1 === e && (this.iconClasses = {});
                }),
                (e.prototype.applyIconOverridePrefix = function (e) {
                    var t = this.iconOverridePrefix;
                    return t && 0 !== e.indexOf(t) && (e = t + e), e;
                }),
                (e.prototype.getClass = function (e) {
                    return this.classes[e] || "";
                }),
                (e.prototype.getIconClass = function (e, t) {
                    var n;
                    return (n = (t && this.rtlIconClasses && this.rtlIconClasses[e]) || this.iconClasses[e]) ? this.baseIconClass + " " + n : "";
                }),
                (e.prototype.getCustomButtonIconClass = function (e) {
                    var t;
                    return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : "";
                }),
                e
            );
        })();
    if (((wo.prototype.classes = {}), (wo.prototype.iconClasses = {}), (wo.prototype.baseIconClass = ""), (wo.prototype.iconOverridePrefix = ""), "undefined" == typeof FullCalendarVDom))
        throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var Ro = FullCalendarVDom.Component,
        _o = FullCalendarVDom.createElement,
        To = FullCalendarVDom.render,
        ko = FullCalendarVDom.createRef,
        xo = FullCalendarVDom.Fragment,
        Mo = FullCalendarVDom.createContext,
        Io = FullCalendarVDom.createPortal,
        Po = FullCalendarVDom.flushToDom,
        No = FullCalendarVDom.unmountComponentAtNode,
        Ho = (function () {
            function e(e, t, n, o) {
                var i = this;
                (this.execFunc = e),
                    (this.emitter = t),
                    (this.scrollTime = n),
                    (this.scrollTimeReset = o),
                    (this.handleScrollRequest = function (e) {
                        (i.queuedRequest = r({}, i.queuedRequest || {}, e)), i.drain();
                    }),
                    t.on("_scrollRequest", this.handleScrollRequest),
                    this.fireInitialScroll();
            }
            return (
                (e.prototype.detach = function () {
                    this.emitter.off("_scrollRequest", this.handleScrollRequest);
                }),
                (e.prototype.update = function (e) {
                    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
                }),
                (e.prototype.fireInitialScroll = function () {
                    this.handleScrollRequest({ time: this.scrollTime });
                }),
                (e.prototype.drain = function () {
                    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
                }),
                e
            );
        })(),
        Oo = Mo({});
    function Ao(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e);
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e);
            },
            createScrollResponder: function (e) {
                return new Ho(e, u, Nt(n.scrollTime), n.scrollTimeReset);
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p,
        };
    }
    var Lo = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return this.debug && console.log(Rt(e, this.props), Rt(t, this.state)), !_t(this.props, e, this.propEquality) || !_t(this.state, t, this.stateEquality);
            }),
            (t.addPropsEquality = Wo),
            (t.addStateEquality = Vo),
            (t.contextType = Oo),
            t
        );
    })(Ro);
    (Lo.prototype.propEquality = {}), (Lo.prototype.stateEquality = {});
    var Uo = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(t, e), (t.contextType = Oo), t;
    })(Lo);
    function Wo(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), (this.prototype.propEquality = t);
    }
    function Vo(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), (this.prototype.stateEquality = t);
    }
    function Fo(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
    }
    var Bo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.uid = Le()), t;
        }
        return (
            n(t, e),
            (t.prototype.prepareHits = function () {}),
            (t.prototype.queryHit = function (e, t, n, r) {
                return null;
            }),
            (t.prototype.isValidSegDownEl = function (e) {
                return !this.props.eventDrag && !this.props.eventResize && !Se(e, ".fc-event-mirror");
            }),
            (t.prototype.isValidDateDownEl = function (e) {
                return !(Se(e, ".fc-event:not(.fc-bg-event)") || Se(e, ".fc-more-link") || Se(e, "a[data-navlink]") || Se(e, ".fc-popover"));
            }),
            t
        );
    })(Uo);
    function zo(e) {
        return {
            id: Le(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {},
        };
    }
    function jo() {
        var e,
            t = [],
            n = [];
        return function (o, i) {
            return (
                (e && Gt(o, t) && Gt(i, n)) ||
                    (e = (function (e, t) {
                        var n = {},
                            o = {
                                reducers: [],
                                isLoadingFuncs: [],
                                contextInit: [],
                                eventRefiners: {},
                                eventDefMemberAdders: [],
                                eventSourceRefiners: {},
                                isDraggableTransformers: [],
                                eventDragMutationMassagers: [],
                                eventDefMutationAppliers: [],
                                dateSelectionTransformers: [],
                                datePointTransforms: [],
                                dateSpanTransforms: [],
                                views: {},
                                viewPropsTransformers: [],
                                isPropsValid: null,
                                externalDefTransforms: [],
                                viewContainerAppends: [],
                                eventDropTransformers: [],
                                componentInteractions: [],
                                calendarInteractions: [],
                                themeClasses: {},
                                eventSourceDefs: [],
                                cmdFormatter: null,
                                recurringTypes: [],
                                namedTimeZonedImpl: null,
                                initialView: "",
                                elementDraggingImpl: null,
                                optionChangeHandlers: {},
                                scrollGridImpl: null,
                                contentTypeHandlers: {},
                                listenerRefiners: {},
                                optionRefiners: {},
                                propSetHandlers: {},
                            };
                        function i(e) {
                            for (var t = 0, a = e; t < a.length; t++) {
                                var s = a[t];
                                n[s.id] ||
                                    ((n[s.id] = !0),
                                    i(s.deps),
                                    (u = s),
                                    (o = {
                                        reducers: (l = o).reducers.concat(u.reducers),
                                        isLoadingFuncs: l.isLoadingFuncs.concat(u.isLoadingFuncs),
                                        contextInit: l.contextInit.concat(u.contextInit),
                                        eventRefiners: r(r({}, l.eventRefiners), u.eventRefiners),
                                        eventDefMemberAdders: l.eventDefMemberAdders.concat(u.eventDefMemberAdders),
                                        eventSourceRefiners: r(r({}, l.eventSourceRefiners), u.eventSourceRefiners),
                                        isDraggableTransformers: l.isDraggableTransformers.concat(u.isDraggableTransformers),
                                        eventDragMutationMassagers: l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),
                                        eventDefMutationAppliers: l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),
                                        dateSelectionTransformers: l.dateSelectionTransformers.concat(u.dateSelectionTransformers),
                                        datePointTransforms: l.datePointTransforms.concat(u.datePointTransforms),
                                        dateSpanTransforms: l.dateSpanTransforms.concat(u.dateSpanTransforms),
                                        views: r(r({}, l.views), u.views),
                                        viewPropsTransformers: l.viewPropsTransformers.concat(u.viewPropsTransformers),
                                        isPropsValid: u.isPropsValid || l.isPropsValid,
                                        externalDefTransforms: l.externalDefTransforms.concat(u.externalDefTransforms),
                                        viewContainerAppends: l.viewContainerAppends.concat(u.viewContainerAppends),
                                        eventDropTransformers: l.eventDropTransformers.concat(u.eventDropTransformers),
                                        calendarInteractions: l.calendarInteractions.concat(u.calendarInteractions),
                                        componentInteractions: l.componentInteractions.concat(u.componentInteractions),
                                        themeClasses: r(r({}, l.themeClasses), u.themeClasses),
                                        eventSourceDefs: l.eventSourceDefs.concat(u.eventSourceDefs),
                                        cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                                        recurringTypes: l.recurringTypes.concat(u.recurringTypes),
                                        namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                                        initialView: l.initialView || u.initialView,
                                        elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
                                        optionChangeHandlers: r(r({}, l.optionChangeHandlers), u.optionChangeHandlers),
                                        scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                                        contentTypeHandlers: r(r({}, l.contentTypeHandlers), u.contentTypeHandlers),
                                        listenerRefiners: r(r({}, l.listenerRefiners), u.listenerRefiners),
                                        optionRefiners: r(r({}, l.optionRefiners), u.optionRefiners),
                                        propSetHandlers: r(r({}, l.propSetHandlers), u.propSetHandlers),
                                    }));
                            }
                            var l, u;
                        }
                        return e && i(e), i(t), o;
                    })(o, i)),
                (t = o),
                (n = i),
                e
            );
        };
    }
    var Go = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(t, e), t;
    })(wo);
    function qo(e, t, n, o) {
        if (t[e]) return t[e];
        var i = (function (e, t, n, o) {
            var i = n[e],
                a = o[e],
                s = function (e) {
                    return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null;
                },
                l = s("component"),
                u = s("superType"),
                c = null;
            if (u) {
                if (u === e) throw new Error("Can't have a custom view type that references itself");
                c = qo(u, t, n, o);
            }
            !l && c && (l = c.component);
            if (!l) return null;
            return { type: e, component: l, defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}), overrides: r(r({}, c ? c.overrides : {}), a ? a.rawOptions : {}) };
        })(e, t, n, o);
        return i && (t[e] = i), i;
    }
    (Go.prototype.classes = { root: "fc-theme-standard", tableCellShaded: "fc-cell-shaded", buttonGroup: "fc-button-group", button: "fc-button fc-button-primary", buttonActive: "fc-button-active" }),
        (Go.prototype.baseIconClass = "fc-icon"),
        (Go.prototype.iconClasses = { close: "fc-icon-x", prev: "fc-icon-chevron-left", next: "fc-icon-chevron-right", prevYear: "fc-icon-chevrons-left", nextYear: "fc-icon-chevrons-right" }),
        (Go.prototype.rtlIconClasses = { prev: "fc-icon-chevron-right", next: "fc-icon-chevron-left", prevYear: "fc-icon-chevrons-right", nextYear: "fc-icon-chevrons-left" }),
        (Go.prototype.iconOverrideOption = "buttonIcons"),
        (Go.prototype.iconOverrideCustomButtonOption = "icon"),
        (Go.prototype.iconOverridePrefix = "fc-icon-");
    var Yo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.rootElRef = ko()),
                    (t.handleRootEl = function (e) {
                        Fo(t.rootElRef, e), t.props.elRef && Fo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.hookProps;
                    return _o($o, { hookProps: n, didMount: t.didMount, willUnmount: t.willUnmount, elRef: this.handleRootEl }, function (r) {
                        return _o(Xo, { hookProps: n, content: t.content, defaultContent: t.defaultContent, backupElRef: e.rootElRef }, function (e, o) {
                            return t.children(r, Qo(t.classNames, n), e, o);
                        });
                    });
                }),
                t
            );
        })(Uo),
        Zo = Mo(0);
    function Xo(e) {
        return _o(Zo.Consumer, null, function (t) {
            return _o(Ko, r({ renderId: t }, e));
        });
    }
    var Ko = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.innerElRef = ko()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.children(this.innerElRef, this.renderInnerContent());
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateCustomContent();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateCustomContent();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
                }),
                (t.prototype.renderInnerContent = function () {
                    var e = this.customContentInfo,
                        t = this.getInnerContent(),
                        n = this.getContentMeta(t);
                    return (
                        e && e.contentKey === n.contentKey
                            ? e && (e.contentVal = t[n.contentKey])
                            : (e && (e.destroy && e.destroy(), (e = this.customContentInfo = null)), n.contentKey && (e = this.customContentInfo = r({ contentKey: n.contentKey, contentVal: t[n.contentKey] }, n.buildLifecycleFuncs()))),
                        e ? [] : t
                    );
                }),
                (t.prototype.getInnerContent = function () {
                    var e = this.props,
                        t = ei(e.content, e.hookProps);
                    return void 0 === t && (t = ei(e.defaultContent, e.hookProps)), null == t ? null : t;
                }),
                (t.prototype.getContentMeta = function (e) {
                    var t = this.context.pluginHooks.contentTypeHandlers,
                        n = "",
                        r = null;
                    if (e)
                        for (var o in t)
                            if (void 0 !== e[o]) {
                                (n = o), (r = t[o]);
                                break;
                            }
                    return { contentKey: n, buildLifecycleFuncs: r };
                }),
                (t.prototype.updateCustomContent = function () {
                    this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal);
                }),
                t
            );
        })(Uo),
        $o = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), t.props.elRef && Fo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.children(this.handleRootEl);
                }),
                (t.prototype.componentDidMount = function () {
                    var e = this.props.didMount;
                    e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
                }),
                (t.prototype.componentWillUnmount = function () {
                    var e = this.props.willUnmount;
                    e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
                }),
                t
            );
        })(Uo);
    function Jo() {
        var e,
            t,
            n = [];
        return function (r, o) {
            return (t && wt(t, o) && r === e) || ((e = r), (t = o), (n = Qo(r, o))), n;
        };
    }
    function Qo(e, t) {
        return "function" == typeof e && (e = e(t)), Rn(e);
    }
    function ei(e, t) {
        return "function" == typeof e ? e(t, _o) : e;
    }
    var ti = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.normalizeClassNames = Jo()), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = { view: t.viewApi },
                    o = this.normalizeClassNames(n.viewClassNames, r);
                return _o($o, { hookProps: r, didMount: n.viewDidMount, willUnmount: n.viewWillUnmount, elRef: e.elRef }, function (t) {
                    return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o));
                });
            }),
            t
        );
    })(Uo);
    function ni(e) {
        return bt(e, ri);
    }
    function ri(e) {
        var t,
            n = "function" == typeof e ? { component: e } : e,
            o = n.component;
        return (
            n.content &&
                ((t = n),
                (o = function (e) {
                    return _o(Oo.Consumer, null, function (n) {
                        return _o(ti, { viewSpec: n.viewSpec }, function (o, i) {
                            var a = r(r({}, e), { nextDayThreshold: n.options.nextDayThreshold });
                            return _o(Yo, { hookProps: a, classNames: t.classNames, content: t.content, didMount: t.didMount, willUnmount: t.willUnmount, elRef: o }, function (e, t, n, r) {
                                return _o("div", { className: i.concat(t).join(" "), ref: e }, r);
                            });
                        });
                    });
                })),
            { superType: n.type, component: o, rawOptions: n }
        );
    }
    function oi(e, t, n, o) {
        var i = ni(e),
            a = ni(t.views);
        return bt(
            (function (e, t) {
                var n,
                    r = {};
                for (n in e) qo(n, r, e, t);
                for (n in t) qo(n, r, e, t);
                return r;
            })(i, a),
            function (e) {
                return (function (e, t, n, o, i) {
                    var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration,
                        s = null,
                        l = "",
                        u = "",
                        c = {};
                    if (
                        a &&
                        (s = (function (e) {
                            var t = JSON.stringify(e),
                                n = ii[t];
                            void 0 === n && ((n = Nt(e)), (ii[t] = n));
                            return n;
                        })(a))
                    ) {
                        var d = Vt(s);
                        (l = d.unit), 1 === d.value && ((u = l), (c = t[l] ? t[l].rawOptions : {}));
                    }
                    var p = function (t) {
                            var n = t.buttonText || {},
                                r = e.defaults.buttonTextKey;
                            return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : null;
                        },
                        f = function (t) {
                            var n = t.buttonHints || {},
                                r = e.defaults.buttonTextKey;
                            return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : null;
                        };
                    return {
                        type: e.type,
                        component: e.component,
                        duration: s,
                        durationUnit: l,
                        singleUnit: u,
                        optionDefaults: e.defaults,
                        optionOverrides: r(r({}, c), e.overrides),
                        buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                        buttonTextDefault: p(i) || e.defaults.buttonText || p(cn) || e.type,
                        buttonTitleOverride: f(o) || f(n) || e.overrides.buttonHint,
                        buttonTitleDefault: f(i) || e.defaults.buttonHint || f(cn),
                    };
                })(e, a, t, n, o);
            }
        );
    }
    var ii = {};
    var ai = (function () {
        function e(e) {
            (this.props = e), (this.nowDate = Tr(e.nowInput, e.dateEnv)), this.initHiddenDays();
        }
        return (
            (e.prototype.buildPrev = function (e, t, n) {
                var r = this.props.dateEnv,
                    o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(o, -1, n);
            }),
            (e.prototype.buildNext = function (e, t, n) {
                var r = this.props.dateEnv,
                    o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(o, 1, n);
            }),
            (e.prototype.build = function (e, t, n) {
                void 0 === n && (n = !0);
                var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = this.props;
                return (
                    (r = this.buildValidRange()),
                    (r = this.trimHiddenDays(r)),
                    n && ((u = e), (e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u)),
                    (o = this.buildCurrentRangeInfo(e, t)),
                    (i = /^(year|month|week|day)$/.test(o.unit)),
                    (a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i)),
                    (s = a = this.trimHiddenDays(a)),
                    d.showNonCurrentDates || (s = jn(s, o.range)),
                    (s = jn((s = this.adjustActiveRange(s)), r)),
                    (l = qn(o.range, r)),
                    {
                        validRange: r,
                        currentRange: o.range,
                        currentRangeUnit: o.unit,
                        isRangeAllDay: i,
                        activeRange: s,
                        renderRange: a,
                        slotMinTime: d.slotMinTime,
                        slotMaxTime: d.slotMaxTime,
                        isValid: l,
                        dateIncrement: this.buildDateIncrement(o.duration),
                    }
                );
            }),
            (e.prototype.buildValidRange = function () {
                var e = this.props.validRangeInput,
                    t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
                return this.refineRange(t) || { start: null, end: null };
            }),
            (e.prototype.buildCurrentRangeInfo = function (e, t) {
                var n,
                    r = this.props,
                    o = null,
                    i = null,
                    a = null;
                return (
                    r.duration
                        ? ((o = r.duration), (i = r.durationUnit), (a = this.buildRangeFromDuration(e, t, o, i)))
                        : (n = this.props.dayCount)
                        ? ((i = "day"), (a = this.buildRangeFromDayCount(e, t, n)))
                        : (a = this.buildCustomVisibleRange(e))
                        ? (i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit)
                        : ((i = Vt((o = this.getFallbackDuration())).unit), (a = this.buildRangeFromDuration(e, t, o, i))),
                    { duration: o, unit: i, range: a }
                );
            }),
            (e.prototype.getFallbackDuration = function () {
                return Nt({ day: 1 });
            }),
            (e.prototype.adjustActiveRange = function (e) {
                var t = this.props,
                    n = t.dateEnv,
                    r = t.usesMinMaxTime,
                    o = t.slotMinTime,
                    i = t.slotMaxTime,
                    a = e.start,
                    s = e.end;
                return r && (Lt(o) < 0 && ((a = lt(a)), (a = n.add(a, o))), Lt(i) > 1 && ((s = tt((s = lt(s)), -1)), (s = n.add(s, i)))), { start: a, end: s };
            }),
            (e.prototype.buildRangeFromDuration = function (e, t, n, r) {
                var o,
                    i,
                    a,
                    s = this.props,
                    l = s.dateEnv,
                    u = s.dateAlignment;
                if (!u) {
                    var c = this.props.dateIncrement;
                    u = c && Ut(c) < Ut(n) ? Vt(c).unit : r;
                }
                function d() {
                    (o = l.startOf(e, u)), (i = l.add(o, n)), (a = { start: o, end: i });
                }
                return Lt(n) <= 1 && this.isHiddenDay(o) && (o = lt((o = this.skipHiddenDays(o, t)))), d(), this.trimHiddenDays(a) || ((e = this.skipHiddenDays(e, t)), d()), a;
            }),
            (e.prototype.buildRangeFromDayCount = function (e, t, n) {
                var r,
                    o = this.props,
                    i = o.dateEnv,
                    a = o.dateAlignment,
                    s = 0,
                    l = e;
                a && (l = i.startOf(l, a)), (l = lt(l)), (r = l = this.skipHiddenDays(l, t));
                do {
                    (r = tt(r, 1)), this.isHiddenDay(r) || (s += 1);
                } while (s < n);
                return { start: l, end: r };
            }),
            (e.prototype.buildCustomVisibleRange = function (e) {
                var t = this.props,
                    n = t.visibleRangeInput,
                    r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
                    o = this.refineRange(r);
                return !o || (null != o.start && null != o.end) ? o : null;
            }),
            (e.prototype.buildRenderRange = function (e, t, n) {
                return e;
            }),
            (e.prototype.buildDateIncrement = function (e) {
                var t,
                    n = this.props.dateIncrement;
                return n || ((t = this.props.dateAlignment) ? Nt(1, t) : e || Nt({ days: 1 }));
            }),
            (e.prototype.refineRange = function (e) {
                if (e) {
                    var t = ((n = e), (r = this.props.dateEnv), (o = null), (i = null), n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? (o && i && i < o ? null : { start: o, end: i }) : null);
                    return t && (t = Wn(t)), t;
                }
                var n, r, o, i;
                return null;
            }),
            (e.prototype.initHiddenDays = function () {
                var e,
                    t = this.props.hiddenDays || [],
                    n = [],
                    r = 0;
                for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) (n[e] = -1 !== t.indexOf(e)) || (r += 1);
                if (!r) throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n;
            }),
            (e.prototype.trimHiddenDays = function (e) {
                var t = e.start,
                    n = e.end;
                return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? { start: t, end: n } : null;
            }),
            (e.prototype.isHiddenDay = function (e) {
                return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
            }),
            (e.prototype.skipHiddenDays = function (e, t, n) {
                for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; ) e = tt(e, t);
                return e;
            }),
            e
        );
    })();
    function si(e, t, n) {
        var r = t ? t.activeRange : null;
        return ci(
            {},
            (function (e, t) {
                var n = _r(t),
                    r = [].concat(e.eventSources || []),
                    o = [];
                e.initialEvents && r.unshift(e.initialEvents);
                e.events && r.unshift(e.events);
                for (var i = 0, a = r; i < a.length; i++) {
                    var s = Rr(a[i], t, n);
                    s && o.push(s);
                }
                return o;
            })(e, n),
            r,
            n
        );
    }
    function li(e, t, n, o) {
        var i,
            a,
            s = n ? n.activeRange : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return ci(e, t.sources, s, o);
            case "REMOVE_EVENT_SOURCE":
                return (
                    (i = e),
                    (a = t.sourceId),
                    St(i, function (e) {
                        return e.sourceId !== a;
                    })
                );
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n ? di(e, s, o) : e;
            case "FETCH_EVENT_SOURCES":
                return pi(e, t.sourceIds ? Dt(t.sourceIds) : hi(e, o), s, t.isRefetch || !1, o);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return (function (e, t, n, o) {
                    var i,
                        a = e[t];
                    if (a && n === a.latestFetchId) return r(r({}, e), (((i = {})[t] = r(r({}, a), { isFetching: !1, fetchRange: o })), i));
                    return e;
                })(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e;
        }
    }
    function ui(e) {
        for (var t in e) if (e[t].isFetching) return !0;
        return !1;
    }
    function ci(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l;
        }
        return n && (i = di(i, n, o)), r(r({}, e), i);
    }
    function di(e, t, n) {
        return pi(
            e,
            St(e, function (e) {
                return (function (e, t, n) {
                    if (!vi(e, n)) return !e.latestFetchId;
                    return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end;
                })(e, t, n);
            }),
            t,
            !1,
            n
        );
    }
    function pi(e, t, n, r, o) {
        var i = {};
        for (var a in e) {
            var s = e[a];
            t[a] ? (i[a] = fi(s, n, r, o)) : (i[a] = s);
        }
        return i;
    }
    function fi(e, t, n, o) {
        var i = o.options,
            a = o.calendarApi,
            s = o.pluginHooks.eventSourceDefs[e.sourceDefId],
            l = Le();
        return (
            s.fetch(
                { eventSource: e, range: t, isRefetch: n, context: o },
                function (n) {
                    var r = n.rawEvents;
                    i.eventSourceSuccess && (r = i.eventSourceSuccess.call(a, r, n.xhr) || r),
                        e.success && (r = e.success.call(a, r, n.xhr) || r),
                        o.dispatch({ type: "RECEIVE_EVENTS", sourceId: e.sourceId, fetchId: l, fetchRange: t, rawEvents: r });
                },
                function (n) {
                    console.warn(n.message, n), i.eventSourceFailure && i.eventSourceFailure.call(a, n), e.failure && e.failure(n), o.dispatch({ type: "RECEIVE_EVENT_ERROR", sourceId: e.sourceId, fetchId: l, fetchRange: t, error: n });
                }
            ),
            r(r({}, e), { isFetching: !0, latestFetchId: l })
        );
    }
    function hi(e, t) {
        return St(e, function (e) {
            return vi(e, t);
        });
    }
    function vi(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
    }
    function gi(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return (function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = En(
                            (function (e, t, n) {
                                var r = n.options.eventDataTransform,
                                    o = t ? t.eventDataTransform : null;
                                o && (e = mi(e, o));
                                r && (e = mi(e, r));
                                return e;
                            })(o, t, i),
                            t,
                            i
                        );
                        return r && (a = xt(a, r, i)), Cn(yi(e, t.sourceId), a);
                    }
                    return e;
                })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return (function (e, t, n, r) {
                    n && (t = xt(t, n, r));
                    return Cn(e, t);
                })(e, t.eventStore, r ? r.activeRange : null, o);
            case "RESET_EVENTS":
                return t.eventStore;
            case "MERGE_EVENTS":
                return Cn(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r ? xt(e, r.activeRange, o) : e;
            case "REMOVE_EVENTS":
                return (function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {},
                        i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return { defs: o, instances: i };
                })(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return yi(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return wn(e, function (e) {
                    return !e.sourceId;
                });
            case "REMOVE_ALL_EVENTS":
                return { defs: {}, instances: {} };
            default:
                return e;
        }
    }
    function mi(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i);
            }
        } else n = e;
        return n;
    }
    function yi(e, t) {
        return wn(e, function (e) {
            return e.sourceId !== t;
        });
    }
    function Ei(e, t) {
        switch (t.type) {
            case "UNSELECT_DATES":
                return null;
            case "SELECT_DATES":
                return t.selection;
            default:
                return e;
        }
    }
    function Si(e, t) {
        switch (t.type) {
            case "UNSELECT_EVENT":
                return "";
            case "SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e;
        }
    }
    function bi(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_DRAG":
                return null;
            case "SET_EVENT_DRAG":
                return { affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent };
            default:
                return e;
        }
    }
    function Di(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_RESIZE":
                return null;
            case "SET_EVENT_RESIZE":
                return { affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent };
            default:
                return e;
        }
    }
    function Ci(e, t, n, r, o) {
        return { header: e.headerToolbar ? wi(e.headerToolbar, e, t, n, r, o) : null, footer: e.footerToolbar ? wi(e.footerToolbar, e, t, n, r, o) : null };
    }
    function wi(e, t, n, r, o, i) {
        var a = {},
            s = [],
            l = !1;
        for (var u in e) {
            var c = Ri(e[u], t, n, r, o, i);
            (a[u] = c.widgets), s.push.apply(s, c.viewsWithButtons), (l = l || c.hasTitle);
        }
        return { sectionWidgets: a, viewsWithButtons: s, hasTitle: l };
    }
    function Ri(e, t, n, r, o, i) {
        var a = "rtl" === t.direction,
            s = t.customButtons || {},
            l = n.buttonText || {},
            u = t.buttonText || {},
            c = n.buttonHints || {},
            d = t.buttonHints || {},
            p = e ? e.split(" ") : [],
            f = [],
            h = !1;
        return {
            widgets: p.map(function (e) {
                return e.split(",").map(function (e) {
                    if ("title" === e) return (h = !0), { buttonName: e };
                    var n, p, v, g, m, y;
                    if ((n = s[e]))
                        (v = function (e) {
                            n.click && n.click.call(e.target, e, e.target);
                        }),
                            (g = r.getCustomButtonIconClass(n)) || (g = r.getIconClass(e, a)) || (m = n.text),
                            (y = n.hint || n.text);
                    else if ((p = o[e])) {
                        f.push(e),
                            (v = function () {
                                i.changeView(e);
                            }),
                            (m = p.buttonTextOverride) || (g = r.getIconClass(e, a)) || (m = p.buttonTextDefault);
                        var E = p.buttonTextOverride || p.buttonTextDefault;
                        y = Xe(p.buttonTitleOverride || p.buttonTitleDefault || t.viewHint, [E, e], E);
                    } else if (i[e])
                        if (
                            ((v = function () {
                                i[e]();
                            }),
                            (m = l[e]) || (g = r.getIconClass(e, a)) || (m = u[e]),
                            "prevYear" === e || "nextYear" === e)
                        ) {
                            var S = "prevYear" === e ? "prev" : "next";
                            y = Xe(c[S] || d[S], [u.year || "year", "year"], u[e]);
                        } else
                            y = function (t) {
                                return Xe(c[e] || d[e], [u[t] || t, t], u[e]);
                            };
                    return { buttonName: e, buttonClick: v, buttonIcon: g, buttonText: m, buttonHint: y };
                });
            }),
            viewsWithButtons: f,
            hasTitle: h,
        };
    }
    function _i(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase())
            ? (t = (function (e, t) {
                  return e + (-1 === e.indexOf("?") ? "?" : "&") + Ti(t);
              })(t, n))
            : (i = Ti(n));
        var a = new XMLHttpRequest();
        a.open(e, t, !0),
            "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            (a.onload = function () {
                if (a.status >= 200 && a.status < 400) {
                    var e = !1,
                        t = void 0;
                    try {
                        (t = JSON.parse(a.responseText)), (e = !0);
                    } catch (e) {}
                    e ? r(t, a) : o("Failure parsing JSON", a);
                } else o("Request failed", a);
            }),
            (a.onerror = function () {
                o("Request failed", a);
            }),
            a.send(i);
    }
    function Ti(e) {
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&");
    }
    function ki(e, t) {
        for (var n = Ct(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1), (s = !0);
                    break;
                }
            s || r.push(a);
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId });
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h);
        }
    }
    var xi = [
        zo({
            eventSourceDefs: [
                {
                    ignoreRange: !0,
                    parseMeta: function (e) {
                        return Array.isArray(e.events) ? e.events : null;
                    },
                    fetch: function (e, t) {
                        t({ rawEvents: e.eventSource.meta });
                    },
                },
            ],
        }),
        zo({
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return "function" == typeof e.events ? e.events : null;
                    },
                    fetch: function (e, t, n) {
                        var r = e.context.dateEnv;
                        yo(
                            e.eventSource.meta.bind(null, hr(e.range, r)),
                            function (e) {
                                t({ rawEvents: e });
                            },
                            n
                        );
                    },
                },
            ],
        }),
        zo({
            eventSourceRefiners: { method: String, extraParams: yn, startParam: String, endParam: String, timeZoneParam: String },
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return !e.url || ("json" !== e.format && e.format)
                            ? null
                            : { url: e.url, format: "json", method: (e.method || "GET").toUpperCase(), extraParams: e.extraParams, startParam: e.startParam, endParam: e.endParam, timeZoneParam: e.timeZoneParam };
                    },
                    fetch: function (e, t, n) {
                        var o = e.eventSource.meta,
                            i = (function (e, t, n) {
                                var o,
                                    i,
                                    a,
                                    s,
                                    l = n.dateEnv,
                                    u = n.options,
                                    c = {};
                                null == (o = e.startParam) && (o = u.startParam);
                                null == (i = e.endParam) && (i = u.endParam);
                                null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
                                s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                                r(c, s), (c[o] = l.formatIso(t.start)), (c[i] = l.formatIso(t.end)), "local" !== l.timeZone && (c[a] = l.timeZone);
                                return c;
                            })(o, e.range, e.context);
                        _i(
                            o.method,
                            o.url,
                            i,
                            function (e, n) {
                                t({ rawEvents: e, xhr: n });
                            },
                            function (e, t) {
                                n({ message: e, xhr: t });
                            }
                        );
                    },
                },
            ],
        }),
        zo({
            recurringTypes: [
                {
                    parse: function (e, t) {
                        if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                            var n = {
                                    daysOfWeek: e.daysOfWeek || null,
                                    startTime: e.startTime || null,
                                    endTime: e.endTime || null,
                                    startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                                    endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
                                },
                                r = void 0;
                            return (
                                e.duration && (r = e.duration),
                                !r && e.startTime && e.endTime && ((o = e.endTime), (i = e.startTime), (r = { years: o.years - i.years, months: o.months - i.months, days: o.days - i.days, milliseconds: o.milliseconds - i.milliseconds })),
                                { allDayGuess: Boolean(!e.startTime && !e.endTime), duration: r, typeData: n }
                            );
                        }
                        var o, i;
                        return null;
                    },
                    expand: function (e, t, n) {
                        var r = jn(t, { start: e.startRecur, end: e.endRecur });
                        return r
                            ? (function (e, t, n, r) {
                                  var o = e ? Dt(e) : null,
                                      i = lt(n.start),
                                      a = n.end,
                                      s = [];
                                  for (; i < a; ) {
                                      var l = void 0;
                                      (o && !o[i.getUTCDay()]) || ((l = t ? r.add(i, t) : i), s.push(l)), (i = tt(i, 1));
                                  }
                                  return s;
                              })(e.daysOfWeek, e.startTime, r, n)
                            : [];
                    },
                },
            ],
            eventRefiners: { daysOfWeek: yn, startTime: Nt, endTime: Nt, duration: Nt, startRecur: yn, endRecur: yn },
        }),
        zo({
            optionChangeHandlers: {
                events: function (e, t) {
                    ki([e], t);
                },
                eventSources: ki,
            },
        }),
        zo({
            isLoadingFuncs: [
                function (e) {
                    return ui(e.eventSources);
                },
            ],
            contentTypeHandlers: {
                html: function () {
                    var e = null,
                        t = "";
                    return {
                        render: function (n, r) {
                            (n === e && r === t) || (n.innerHTML = r), (e = n), (t = r);
                        },
                        destroy: function () {
                            (e.innerHTML = ""), (e = null), (t = "");
                        },
                    };
                },
                domNodes: function () {
                    var e = null,
                        t = [];
                    function n() {
                        t.forEach(Ee), (t = []), (e = null);
                    }
                    return {
                        render: function (r, o) {
                            var i = Array.prototype.slice.call(o);
                            if (r !== e || !Gt(t, i)) {
                                for (var a = 0, s = i; a < s.length; a++) {
                                    var l = s[a];
                                    r.appendChild(l);
                                }
                                n();
                            }
                            (e = r), (t = i);
                        },
                        destroy: n,
                    };
                },
            },
            propSetHandlers: {
                dateProfile: function (e, t) {
                    t.emitter.trigger("datesSet", r(r({}, hr(e.activeRange, t.dateEnv)), { view: t.viewApi }));
                },
                eventStore: function (e, t) {
                    var n = t.emitter;
                    n.hasHandlers("eventsSet") && n.trigger("eventsSet", Ir(e, t));
                },
            },
        }),
    ];
    var Mi = (function () {
            function e(e) {
                (this.drainedOption = e), (this.isRunning = !1), (this.isDirty = !1), (this.pauseDepths = {}), (this.timeoutId = 0);
            }
            return (
                (e.prototype.request = function (e) {
                    (this.isDirty = !0), this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)));
                }),
                (e.prototype.pause = function (e) {
                    void 0 === e && (e = "");
                    var t = this.pauseDepths;
                    (t[e] = (t[e] || 0) + 1), this.clearTimeout();
                }),
                (e.prototype.resume = function (e, t) {
                    void 0 === e && (e = "");
                    var n = this.pauseDepths;
                    if (e in n) {
                        if (t) delete n[e];
                        else (n[e] -= 1), n[e] <= 0 && delete n[e];
                        this.tryDrain();
                    }
                }),
                (e.prototype.isPaused = function () {
                    return Object.keys(this.pauseDepths).length;
                }),
                (e.prototype.tryDrain = function () {
                    if (!this.isRunning && !this.isPaused()) {
                        for (this.isRunning = !0; this.isDirty; ) (this.isDirty = !1), this.drained();
                        this.isRunning = !1;
                    }
                }),
                (e.prototype.clear = function () {
                    this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
                }),
                (e.prototype.clearTimeout = function () {
                    this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0));
                }),
                (e.prototype.drained = function () {
                    this.drainedOption && this.drainedOption();
                }),
                e
            );
        })(),
        Ii = (function () {
            function e(e, t) {
                (this.runTaskOption = e), (this.drainedOption = t), (this.queue = []), (this.delayedRunner = new Mi(this.drain.bind(this)));
            }
            return (
                (e.prototype.request = function (e, t) {
                    this.queue.push(e), this.delayedRunner.request(t);
                }),
                (e.prototype.pause = function (e) {
                    this.delayedRunner.pause(e);
                }),
                (e.prototype.resume = function (e, t) {
                    this.delayedRunner.resume(e, t);
                }),
                (e.prototype.drain = function () {
                    for (var e = this.queue; e.length; ) {
                        for (var t = [], n = void 0; (n = e.shift()); ) this.runTask(n), t.push(n);
                        this.drained(t);
                    }
                }),
                (e.prototype.runTask = function (e) {
                    this.runTaskOption && this.runTaskOption(e);
                }),
                (e.prototype.drained = function (e) {
                    this.drainedOption && this.drainedOption(e);
                }),
                e
            );
        })();
    function Pi(e, t, n) {
        var r;
        return (
            (r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange),
            n.formatRange(
                r.start,
                r.end,
                ln(
                    t.titleFormat ||
                        (function (e) {
                            var t = e.currentRangeUnit;
                            if ("year" === t) return { year: "numeric" };
                            if ("month" === t) return { year: "numeric", month: "long" };
                            var n = st(e.currentRange.start, e.currentRange.end);
                            if (null !== n && n > 1) return { year: "numeric", month: "short", day: "numeric" };
                            return { year: "numeric", month: "long", day: "numeric" };
                        })(e)
                ),
                { isEndExclusive: e.isRangeAllDay, defaultSeparator: t.titleRangeSeparator }
            )
        );
    }
    var Ni = (function () {
        function e(e) {
            var t = this;
            (this.computeOptionsData = qt(this._computeOptionsData)),
                (this.computeCurrentViewData = qt(this._computeCurrentViewData)),
                (this.organizeRawLocales = qt(Fr)),
                (this.buildLocale = qt(Br)),
                (this.buildPluginHooks = jo()),
                (this.buildDateEnv = qt(Hi)),
                (this.buildTheme = qt(Oi)),
                (this.parseToolbars = qt(Ci)),
                (this.buildViewSpecs = qt(oi)),
                (this.buildDateProfileGenerator = Yt(Ai)),
                (this.buildViewApi = qt(Li)),
                (this.buildViewUiProps = Yt(Vi)),
                (this.buildEventUiBySource = qt(Ui, wt)),
                (this.buildEventUiBases = qt(Wi)),
                (this.parseContextBusinessHours = Yt(Bi)),
                (this.buildTitle = qt(Pi)),
                (this.emitter = new Eo()),
                (this.actionRunner = new Ii(this._handleAction.bind(this), this.updateData.bind(this))),
                (this.currentCalendarOptionsInput = {}),
                (this.currentCalendarOptionsRefined = {}),
                (this.currentViewOptionsInput = {}),
                (this.currentViewOptionsRefined = {}),
                (this.currentCalendarOptionsRefiners = {}),
                (this.getCurrentData = function () {
                    return t.data;
                }),
                (this.dispatch = function (e) {
                    t.actionRunner.request(e);
                }),
                (this.props = e),
                this.actionRunner.pause();
            var n = {},
                o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            (e.calendarApi.currentDataManager = this), this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(a.options);
            var s,
                l,
                u,
                c = ((s = o.calendarOptions), (l = o.dateEnv), null != (u = s.initialDate) ? l.createMarker(u) : Tr(s.now, l)),
                d = a.dateProfileGenerator.build(c);
            Zn(d.activeRange, c) || (c = d.currentRange.start);
            for (
                var p = { dateEnv: o.dateEnv, options: o.calendarOptions, pluginHooks: o.pluginHooks, calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData },
                    f = 0,
                    h = o.pluginHooks.contextInit;
                f < h.length;
                f++
            ) {
                (0, h[f])(p);
            }
            for (
                var v = si(o.calendarOptions, d, p),
                    g = {
                        dynamicOptionOverrides: n,
                        currentViewType: i,
                        currentDate: c,
                        dateProfile: d,
                        businessHours: this.parseContextBusinessHours(p),
                        eventSources: v,
                        eventUiBases: {},
                        eventStore: { defs: {}, instances: {} },
                        renderableEventStore: { defs: {}, instances: {} },
                        dateSelection: null,
                        eventSelection: "",
                        eventDrag: null,
                        eventResize: null,
                        selectionConfig: this.buildViewUiProps(p).selectionConfig,
                    },
                    m = r(r({}, p), g),
                    y = 0,
                    E = o.pluginHooks.reducers;
                y < E.length;
                y++
            ) {
                var S = E[y];
                r(g, S(null, null, m));
            }
            Fi(g, p) && this.emitter.trigger("loading", !0), (this.state = g), this.updateData(), this.actionRunner.resume();
        }
        return (
            (e.prototype.resetOptions = function (e, t) {
                var n = this.props;
                (n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e), this.actionRunner.request({ type: "NOTHING" });
            }),
            (e.prototype._handleAction = function (e) {
                var t = this,
                    n = t.props,
                    o = t.state,
                    i = t.emitter,
                    a = (function (e, t) {
                        var n;
                        switch (t.type) {
                            case "SET_OPTION":
                                return r(r({}, e), (((n = {})[t.optionName] = t.rawOptionValue), n));
                            default:
                                return e;
                        }
                    })(o.dynamicOptionOverrides, e),
                    s = this.computeOptionsData(n.optionOverrides, a, n.calendarApi),
                    l = (function (e, t) {
                        switch (t.type) {
                            case "CHANGE_VIEW_TYPE":
                                e = t.viewType;
                        }
                        return e;
                    })(o.currentViewType, e),
                    u = this.computeCurrentViewData(l, s, n.optionOverrides, a);
                (n.calendarApi.currentDataManager = this), i.setThisContext(n.calendarApi), i.setOptions(u.options);
                var c = { dateEnv: s.dateEnv, options: s.calendarOptions, pluginHooks: s.pluginHooks, calendarApi: n.calendarApi, dispatch: this.dispatch, emitter: i, getCurrentData: this.getCurrentData },
                    d = o.currentDate,
                    p = o.dateProfile;
                this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (p = u.dateProfileGenerator.build(d)),
                    (p = (function (e, t, n, r) {
                        var o;
                        switch (t.type) {
                            case "CHANGE_VIEW_TYPE":
                                return r.build(t.dateMarker || n);
                            case "CHANGE_DATE":
                                return r.build(t.dateMarker);
                            case "PREV":
                                if ((o = r.buildPrev(e, n)).isValid) return o;
                                break;
                            case "NEXT":
                                if ((o = r.buildNext(e, n)).isValid) return o;
                        }
                        return e;
                    })(
                        p,
                        e,
                        (d = (function (e, t) {
                            switch (t.type) {
                                case "CHANGE_DATE":
                                    return t.dateMarker;
                                default:
                                    return e;
                            }
                        })(d, e)),
                        u.dateProfileGenerator
                    )),
                    ("PREV" !== e.type && "NEXT" !== e.type && Zn(p.currentRange, d)) || (d = p.currentRange.start);
                for (
                    var f = li(o.eventSources, e, p, c),
                        h = gi(o.eventStore, e, f, p, c),
                        v = (ui(f) && !u.options.progressiveEventRendering && o.renderableEventStore) || h,
                        g = this.buildViewUiProps(c),
                        m = g.eventUiSingleBase,
                        y = g.selectionConfig,
                        E = this.buildEventUiBySource(f),
                        S = {
                            dynamicOptionOverrides: a,
                            currentViewType: l,
                            currentDate: d,
                            dateProfile: p,
                            eventSources: f,
                            eventStore: h,
                            renderableEventStore: v,
                            selectionConfig: y,
                            eventUiBases: this.buildEventUiBases(v.defs, m, E),
                            businessHours: this.parseContextBusinessHours(c),
                            dateSelection: Ei(o.dateSelection, e),
                            eventSelection: Si(o.eventSelection, e),
                            eventDrag: bi(o.eventDrag, e),
                            eventResize: Di(o.eventResize, e),
                        },
                        b = r(r({}, c), S),
                        D = 0,
                        C = s.pluginHooks.reducers;
                    D < C.length;
                    D++
                ) {
                    var w = C[D];
                    r(S, w(o, e, b));
                }
                var R = Fi(o, c),
                    _ = Fi(S, c);
                !R && _ ? i.trigger("loading", !0) : R && !_ && i.trigger("loading", !1), (this.state = S), n.onAction && n.onAction(e);
            }),
            (e.prototype.updateData = function () {
                var e,
                    t,
                    n,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c = this.props,
                    d = this.state,
                    p = this.data,
                    f = this.computeOptionsData(c.optionOverrides, d.dynamicOptionOverrides, c.calendarApi),
                    h = this.computeCurrentViewData(d.currentViewType, f, c.optionOverrides, d.dynamicOptionOverrides),
                    v = (this.data = r(r(r({ viewTitle: this.buildTitle(d.dateProfile, h.options, f.dateEnv), calendarApi: c.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, f), h), d)),
                    g = f.pluginHooks.optionChangeHandlers,
                    m = p && p.calendarOptions,
                    y = f.calendarOptions;
                if (m && m !== y)
                    for (var E in (m.timeZone !== y.timeZone &&
                        ((d.eventSources = v.eventSources = ((a = v.eventSources), (s = d.dateProfile), (l = v), (u = s ? s.activeRange : null), pi(a, hi(a, l), u, !0, l))),
                        (d.eventStore = v.eventStore =
                            ((e = v.eventStore),
                            (t = p.dateEnv),
                            (n = v.dateEnv),
                            (o = e.defs),
                            (i = bt(e.instances, function (e) {
                                var i = o[e.defId];
                                return i.allDay || i.recurringDef
                                    ? e
                                    : r(r({}, e), {
                                          range: { start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)), end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo)) },
                                          forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                                          forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo,
                                      });
                            })),
                            { defs: o, instances: i }))),
                    g))
                        m[E] !== y[E] && g[E](y[E], v);
                c.onData && c.onData(v);
            }),
            (e.prototype._computeOptionsData = function (e, t, n) {
                var r = this.processRawCalendarOptions(e, t),
                    o = r.refinedOptions,
                    i = r.pluginHooks,
                    a = r.localeDefaults,
                    s = r.availableLocaleData;
                zi(r.extra);
                var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
                    u = this.buildViewSpecs(i.views, e, t, a),
                    c = this.buildTheme(o, i);
                return { calendarOptions: o, pluginHooks: i, dateEnv: l, viewSpecs: u, theme: c, toolbarConfig: this.parseToolbars(o, e, c, u, n), localeDefaults: a, availableRawLocales: s.map };
            }),
            (e.prototype.processRawCalendarOptions = function (e, t) {
                var n = gn([cn, e, t]),
                    o = n.locales,
                    i = n.locale,
                    a = this.organizeRawLocales(o),
                    s = a.map,
                    l = this.buildLocale(i || a.defaultCode, s).options,
                    u = this.buildPluginHooks(e.plugins || [], xi),
                    c = (this.currentCalendarOptionsRefiners = r(r(r(r(r({}, un), dn), pn), u.listenerRefiners), u.optionRefiners)),
                    d = {},
                    p = gn([cn, l, e, t]),
                    f = {},
                    h = this.currentCalendarOptionsInput,
                    v = this.currentCalendarOptionsRefined,
                    g = !1;
                for (var m in p) "plugins" !== m && (p[m] === h[m] || (fn[m] && m in h && fn[m](h[m], p[m])) ? (f[m] = v[m]) : c[m] ? ((f[m] = c[m](p[m])), (g = !0)) : (d[m] = h[m]));
                return (
                    g && ((this.currentCalendarOptionsInput = p), (this.currentCalendarOptionsRefined = f)),
                    { rawOptions: this.currentCalendarOptionsInput, refinedOptions: this.currentCalendarOptionsRefined, pluginHooks: u, availableLocaleData: a, localeDefaults: l, extra: d }
                );
            }),
            (e.prototype._computeCurrentViewData = function (e, t, n, r) {
                var o = t.viewSpecs[e];
                if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
                var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r),
                    a = i.refinedOptions;
                return (
                    zi(i.extra),
                    {
                        viewSpec: o,
                        options: a,
                        dateProfileGenerator: this.buildDateProfileGenerator({
                            dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                            duration: o.duration,
                            durationUnit: o.durationUnit,
                            usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                            dateEnv: t.dateEnv,
                            calendarApi: this.props.calendarApi,
                            slotMinTime: a.slotMinTime,
                            slotMaxTime: a.slotMaxTime,
                            showNonCurrentDates: a.showNonCurrentDates,
                            dayCount: a.dayCount,
                            dateAlignment: a.dateAlignment,
                            dateIncrement: a.dateIncrement,
                            hiddenDays: a.hiddenDays,
                            weekends: a.weekends,
                            nowInput: a.now,
                            validRangeInput: a.validRange,
                            visibleRangeInput: a.visibleRange,
                            monthMode: a.monthMode,
                            fixedWeekCount: a.fixedWeekCount,
                        }),
                        viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv),
                    }
                );
            }),
            (e.prototype.processRawViewOptions = function (e, t, n, o, i) {
                var a = gn([cn, e.optionDefaults, n, o, e.optionOverrides, i]),
                    s = r(r(r(r(r(r({}, un), dn), pn), vn), t.listenerRefiners), t.optionRefiners),
                    l = {},
                    u = this.currentViewOptionsInput,
                    c = this.currentViewOptionsRefined,
                    d = !1,
                    p = {};
                for (var f in a)
                    a[f] === u[f]
                        ? (l[f] = c[f])
                        : (a[f] === this.currentCalendarOptionsInput[f] ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : s[f] ? (l[f] = s[f](a[f])) : (p[f] = a[f]), (d = !0));
                return d && ((this.currentViewOptionsInput = a), (this.currentViewOptionsRefined = l)), { rawOptions: this.currentViewOptionsInput, refinedOptions: this.currentViewOptionsRefined, extra: p };
            }),
            e
        );
    })();
    function Hi(e, t, n, r, o, i, a, s) {
        var l = Br(t || a.defaultCode, a.map);
        return new Lr({ calendarSystem: "gregory", timeZone: e, namedTimeZoneImpl: i.namedTimeZonedImpl, locale: l, weekNumberCalculation: n, firstDay: r, weekText: o, cmdFormatter: i.cmdFormatter, defaultSeparator: s });
    }
    function Oi(e, t) {
        return new (t.themeClasses[e.themeSystem] || Go)(e);
    }
    function Ai(e) {
        return new (e.dateProfileGeneratorClass || ai)(e);
    }
    function Li(e, t, n) {
        return new Cr(e, t, n);
    }
    function Ui(e) {
        return bt(e, function (e) {
            return e.ui;
        });
    }
    function Wi(e, t, n) {
        var r = { "": t };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId]);
        }
        return r;
    }
    function Vi(e) {
        var t = e.options;
        return {
            eventUiSingleBase: kn(
                {
                    display: t.eventDisplay,
                    editable: t.editable,
                    startEditable: t.eventStartEditable,
                    durationEditable: t.eventDurationEditable,
                    constraint: t.eventConstraint,
                    overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                    allow: t.eventAllow,
                    backgroundColor: t.eventBackgroundColor,
                    borderColor: t.eventBorderColor,
                    textColor: t.eventTextColor,
                    color: t.eventColor,
                },
                e
            ),
            selectionConfig: kn({ constraint: t.selectConstraint, overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0, allow: t.selectAllow }, e),
        };
    }
    function Fi(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) return !0;
        }
        return !1;
    }
    function Bi(e) {
        return Yr(e.options.businessHours, e);
    }
    function zi(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""));
    }
    var ji = (function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return (
                (n.handleData = function (e) {
                    n.dataManager ? n.setState(e) : (n.state = e);
                }),
                (n.dataManager = new Ni({ optionOverrides: t.optionOverrides, calendarApi: t.calendarApi, onData: n.handleData })),
                n
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return this.props.children(this.state);
            }),
            (t.prototype.componentDidUpdate = function (e) {
                var t = this.props.optionOverrides;
                t !== e.optionOverrides && this.dataManager.resetOptions(t);
            }),
            t
        );
    })(Ro);
    var Gi = function (e) {
            this.timeZoneName = e;
        },
        qi = (function () {
            function e() {
                (this.strictOrder = !1), (this.allowReslicing = !1), (this.maxCoord = -1), (this.maxStackCnt = -1), (this.levelCoords = []), (this.entriesByLevel = []), (this.stackCnts = {});
            }
            return (
                (e.prototype.addSegs = function (e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        this.insertEntry(o, t);
                    }
                    return t;
                }),
                (e.prototype.insertEntry = function (e, t) {
                    var n = this.findInsertion(e);
                    return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t);
                }),
                (e.prototype.isInsertionValid = function (e, t) {
                    return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt);
                }),
                (e.prototype.handleInvalidInsertion = function (e, t, n) {
                    return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0);
                }),
                (e.prototype.splitEntry = function (e, t, n) {
                    var r = 0,
                        i = [],
                        a = e.span,
                        s = t.span;
                    return (
                        a.start < s.start && (r += this.insertEntry({ index: e.index, thickness: e.thickness, span: { start: a.start, end: s.start } }, i)),
                        a.end > s.end && (r += this.insertEntry({ index: e.index, thickness: e.thickness, span: { start: s.end, end: a.end } }, i)),
                        r ? (n.push.apply(n, o([{ index: e.index, thickness: e.thickness, span: $i(s, a) }], i)), r) : (n.push(e), 0)
                    );
                }),
                (e.prototype.insertEntryAt = function (e, t) {
                    var n = this.entriesByLevel,
                        r = this.levelCoords;
                    -1 === t.lateral ? (Ji(r, t.level, t.levelCoord), Ji(n, t.level, [e])) : Ji(n[t.level], t.lateral, e), (this.stackCnts[Zi(e)] = t.stackCnt);
                }),
                (e.prototype.findInsertion = function (e) {
                    for (var t = this, n = t.levelCoords, r = t.entriesByLevel, o = t.strictOrder, i = t.stackCnts, a = n.length, s = 0, l = -1, u = -1, c = null, d = 0, p = 0; p < a; p += 1) {
                        var f = n[p];
                        if (!o && f >= s + e.thickness) break;
                        for (var h = r[p], v = void 0, g = Qi(h, e.span.start, Yi), m = g[0] + g[1]; (v = h[m]) && v.span.start < e.span.end; ) {
                            var y = f + v.thickness;
                            y > s && ((s = y), (c = v), (l = p), (u = m)), y === s && (d = Math.max(d, i[Zi(v)] + 1)), (m += 1);
                        }
                    }
                    var E = 0;
                    if (c) for (E = l + 1; E < a && n[E] < s; ) E += 1;
                    var S = -1;
                    return E < a && n[E] === s && (S = Qi(r[E], e.span.end, Yi)[0]), { touchingLevel: l, touchingLateral: u, touchingEntry: c, stackCnt: d, levelCoord: s, level: E, lateral: S };
                }),
                (e.prototype.toRects = function () {
                    for (var e = this.entriesByLevel, t = this.levelCoords, n = e.length, o = [], i = 0; i < n; i += 1)
                        for (var a = e[i], s = t[i], l = 0, u = a; l < u.length; l++) {
                            var c = u[l];
                            o.push(r(r({}, c), { levelCoord: s }));
                        }
                    return o;
                }),
                e
            );
        })();
    function Yi(e) {
        return e.span.end;
    }
    function Zi(e) {
        return e.index + ":" + e.span.start;
    }
    function Xi(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (var o = r[n], i = [], a = { span: o.span, entries: [o] }, s = 0, l = t; s < l.length; s++) {
                var u = l[s];
                $i(u.span, a.span) ? (a = { entries: u.entries.concat(a.entries), span: Ki(u.span, a.span) }) : i.push(u);
            }
            i.push(a), (t = i);
        }
        return t;
    }
    function Ki(e, t) {
        return { start: Math.min(e.start, t.start), end: Math.max(e.end, t.end) };
    }
    function $i(e, t) {
        var n = Math.max(e.start, t.start),
            r = Math.min(e.end, t.end);
        return n < r ? { start: n, end: r } : null;
    }
    function Ji(e, t, n) {
        e.splice(t, 0, n);
    }
    function Qi(e, t, n) {
        var r = 0,
            o = e.length;
        if (!o || t < n(e[r])) return [0, 0];
        if (t > n(e[o - 1])) return [o, 0];
        for (; r < o; ) {
            var i = Math.floor(r + (o - r) / 2),
                a = n(e[i]);
            if (t < a) o = i;
            else {
                if (!(t > a)) return [i, 1];
                r = i + 1;
            }
        }
        return [r, 0];
    }
    var ea = (function () {
        function e(e) {
            (this.component = e.component), (this.isHitComboAllowed = e.isHitComboAllowed || null);
        }
        return (e.prototype.destroy = function () {}), e;
    })();
    function ta(e, t) {
        return { component: e, el: t.el, useEventCenter: null == t.useEventCenter || t.useEventCenter, isHitComboAllowed: t.isHitComboAllowed || null };
    }
    function na(e) {
        var t;
        return ((t = {})[e.component.uid] = e), t;
    }
    var ra = {},
        oa = (function () {
            function e(e, t) {
                this.emitter = new Eo();
            }
            return (e.prototype.destroy = function () {}), (e.prototype.setMirrorIsVisible = function (e) {}), (e.prototype.setMirrorNeedsRevert = function (e) {}), (e.prototype.setAutoScrollEnabled = function (e) {}), e;
        })(),
        ia = {},
        aa = { startTime: Nt, duration: Nt, create: Boolean, sourceId: String };
    function sa(e) {
        var t = mn(e, aa),
            n = t.refined,
            r = t.extra;
        return { startTime: n.startTime || null, duration: n.duration || null, create: null == n.create || n.create, sourceId: n.sourceId, leftoverProps: r };
    }
    var la = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props.widgetGroups.map(function (t) {
                            return e.renderWidgetGroup(t);
                        });
                    return _o.apply(void 0, o(["div", { className: "fc-toolbar-chunk" }], t));
                }),
                (t.prototype.renderWidgetGroup = function (e) {
                    for (var t = this.props, n = this.context.theme, r = [], i = !0, a = 0, s = e; a < s.length; a++) {
                        var l = s[a],
                            u = l.buttonName,
                            c = l.buttonClick,
                            d = l.buttonText,
                            p = l.buttonIcon,
                            f = l.buttonHint;
                        if ("title" === u) (i = !1), r.push(_o("h4", { className: "fc-toolbar-title", id: t.titleId }, t.title));
                        else {
                            var h = u === t.activeButton,
                                v = (!t.isTodayEnabled && "today" === u) || (!t.isPrevEnabled && "prev" === u) || (!t.isNextEnabled && "next" === u),
                                g = ["fc-" + u + "-button", n.getClass("button")];
                            h && g.push(n.getClass("buttonActive")),
                                r.push(_o("button", { type: "button", title: "function" == typeof f ? f(t.navUnit) : f, disabled: v, "aria-pressed": h, className: g.join(" "), onClick: c }, d || (p ? _o("span", { className: p }) : "")));
                        }
                    }
                    if (r.length > 1) {
                        var m = (i && n.getClass("buttonGroup")) || "";
                        return _o.apply(void 0, o(["div", { className: m }], r));
                    }
                    return r[0];
                }),
                t
            );
        })(Uo),
        ua = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e,
                        t,
                        n = this.props,
                        r = n.model,
                        o = n.extraClassName,
                        i = !1,
                        a = r.sectionWidgets,
                        s = a.center;
                    return (
                        a.left ? ((i = !0), (e = a.left)) : (e = a.start),
                        a.right ? ((i = !0), (t = a.right)) : (t = a.end),
                        _o("div", { className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ") }, this.renderSection("start", e || []), this.renderSection("center", s || []), this.renderSection("end", t || []))
                    );
                }),
                (t.prototype.renderSection = function (e, t) {
                    var n = this.props;
                    return _o(la, {
                        key: e,
                        widgetGroups: t,
                        title: n.title,
                        navUnit: n.navUnit,
                        activeButton: n.activeButton,
                        isTodayEnabled: n.isTodayEnabled,
                        isPrevEnabled: n.isPrevEnabled,
                        isNextEnabled: n.isNextEnabled,
                        titleId: n.titleId,
                    });
                }),
                t
            );
        })(Uo),
        ca = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { availableWidth: null }),
                    (t.handleEl = function (e) {
                        (t.el = e), Fo(t.props.elRef, e), t.updateAvailableWidth();
                    }),
                    (t.handleResize = function () {
                        t.updateAvailableWidth();
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.state,
                        n = e.aspectRatio,
                        r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
                        o = "",
                        i = "";
                    return (
                        n ? (null !== t.availableWidth ? (o = t.availableWidth / n) : (i = (1 / n) * 100 + "%")) : (o = e.height || ""),
                        _o("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: r.join(" "), style: { height: o, paddingBottom: i } }, e.children)
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.context.addResizeHandler(this.handleResize);
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.context.removeResizeHandler(this.handleResize);
                }),
                (t.prototype.updateAvailableWidth = function () {
                    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
                }),
                t
            );
        })(Uo),
        da = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return (
                    (n.handleSegClick = function (e, t) {
                        var r = n.component,
                            o = r.context,
                            i = Jn(t);
                        if (i && r.isValidSegDownEl(e.target)) {
                            var a = Se(e.target, ".fc-event-forced-url"),
                                s = a ? a.querySelector("a[href]").href : "";
                            o.emitter.trigger("eventClick", { el: t, event: new xr(r.context, i.eventRange.def, i.eventRange.instance), jsEvent: e, view: o.viewApi }), s && !e.defaultPrevented && (window.location.href = s);
                        }
                    }),
                    (n.destroy = Ie(t.el, "click", ".fc-event", n.handleSegClick)),
                    n
                );
            }
            return n(t, e), t;
        })(ea),
        pa = (function (e) {
            function t(t) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    s = e.call(this, t) || this;
                return (
                    (s.handleEventElRemove = function (e) {
                        e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl);
                    }),
                    (s.handleSegEnter = function (e, t) {
                        Jn(t) && ((s.currentSegEl = t), s.triggerEvent("eventMouseEnter", e, t));
                    }),
                    (s.handleSegLeave = function (e, t) {
                        s.currentSegEl && ((s.currentSegEl = null), s.triggerEvent("eventMouseLeave", e, t));
                    }),
                    (s.removeHoverListeners =
                        ((n = t.el),
                        (r = ".fc-event"),
                        (o = s.handleSegEnter),
                        (i = s.handleSegLeave),
                        Ie(n, "mouseover", r, function (e, t) {
                            if (t !== a) {
                                (a = t), o(e, t);
                                var n = function (e) {
                                    (a = null), i(e, t), t.removeEventListener("mouseleave", n);
                                };
                                t.addEventListener("mouseleave", n);
                            }
                        }))),
                    s
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.removeHoverListeners();
                }),
                (t.prototype.triggerEvent = function (e, t, n) {
                    var r = this.component,
                        o = r.context,
                        i = Jn(n);
                    (t && !r.isValidSegDownEl(t.target)) || o.emitter.trigger(e, { el: n, event: new xr(o, i.eventRange.def, i.eventRange.instance), jsEvent: t, view: o.viewApi });
                }),
                t
            );
        })(ea),
        fa = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildViewContext = qt(Ao)),
                    (t.buildViewPropTransformers = qt(va)),
                    (t.buildToolbarProps = qt(ha)),
                    (t.headerRef = ko()),
                    (t.footerRef = ko()),
                    (t.interactionsStore = {}),
                    (t.state = { viewLabelId: xe() }),
                    (t.registerInteractiveComponent = function (e, n) {
                        var r = ta(e, n),
                            o = [da, pa].concat(t.props.pluginHooks.componentInteractions).map(function (e) {
                                return new e(r);
                            });
                        (t.interactionsStore[e.uid] = o), (ra[e.uid] = r);
                    }),
                    (t.unregisterInteractiveComponent = function (e) {
                        for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                            r[n].destroy();
                        }
                        delete t.interactionsStore[e.uid], delete ra[e.uid];
                    }),
                    (t.resizeRunner = new Mi(function () {
                        t.props.emitter.trigger("_resize", !0), t.props.emitter.trigger("windowResize", { view: t.props.viewApi });
                    })),
                    (t.handleWindowResize = function (e) {
                        var n = t.props.options;
                        n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e,
                        t = this.props,
                        n = t.toolbarConfig,
                        o = t.options,
                        i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Tr(t.options.now, t.dateEnv), t.viewTitle),
                        a = !1,
                        s = "";
                    t.isHeightAuto || t.forPrint ? (s = "") : null != o.height ? (a = !0) : null != o.contentHeight ? (s = o.contentHeight) : (e = Math.max(o.aspectRatio, 0.5));
                    var l = this.buildViewContext(
                            t.viewSpec,
                            t.viewApi,
                            t.options,
                            t.dateProfileGenerator,
                            t.dateEnv,
                            t.theme,
                            t.pluginHooks,
                            t.dispatch,
                            t.getCurrentData,
                            t.emitter,
                            t.calendarApi,
                            this.registerInteractiveComponent,
                            this.unregisterInteractiveComponent
                        ),
                        u = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
                    return _o(
                        Oo.Provider,
                        { value: l },
                        n.header && _o(ua, r({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, i)),
                        _o(ca, { liquid: a, height: s, aspectRatio: e, labeledById: u }, this.renderView(t), this.buildAppendContent()),
                        n.footer && _o(ua, r({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    var e = this.props;
                    (this.calendarInteractions = e.pluginHooks.calendarInteractions.map(function (t) {
                        return new t(e);
                    })),
                        window.addEventListener("resize", this.handleWindowResize);
                    var t = e.pluginHooks.propSetHandlers;
                    for (var n in t) t[n](e[n], e);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props,
                        n = t.pluginHooks.propSetHandlers;
                    for (var r in n) t[r] !== e[r] && n[r](t[r], t);
                }),
                (t.prototype.componentWillUnmount = function () {
                    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
                    for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                        t[e].destroy();
                    }
                    this.props.emitter.trigger("_unmount");
                }),
                (t.prototype.buildAppendContent = function () {
                    var e = this.props,
                        t = e.pluginHooks.viewContainerAppends.map(function (t) {
                            return t(e);
                        });
                    return _o.apply(void 0, o([xo, {}], t));
                }),
                (t.prototype.renderView = function (e) {
                    for (
                        var t = e.pluginHooks,
                            n = e.viewSpec,
                            o = {
                                dateProfile: e.dateProfile,
                                businessHours: e.businessHours,
                                eventStore: e.renderableEventStore,
                                eventUiBases: e.eventUiBases,
                                dateSelection: e.dateSelection,
                                eventSelection: e.eventSelection,
                                eventDrag: e.eventDrag,
                                eventResize: e.eventResize,
                                isHeightAuto: e.isHeightAuto,
                                forPrint: e.forPrint,
                            },
                            i = 0,
                            a = this.buildViewPropTransformers(t.viewPropsTransformers);
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        r(o, s.transform(o, e));
                    }
                    var l = n.component;
                    return _o(l, r({}, o));
                }),
                t
            );
        })(Lo);
    function ha(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            l = n.buildNext(t, r, !1);
        return { title: i, activeButton: e.type, navUnit: e.singleUnit, isTodayEnabled: a.isValid && !Zn(t.currentRange, o), isPrevEnabled: s.isValid, isNextEnabled: l.isValid };
    }
    function va(e) {
        return e.map(function (e) {
            return new e();
        });
    }
    var ga = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.state = { forPrint: !1 }),
                (t.handleBeforePrint = function () {
                    t.setState({ forPrint: !0 });
                }),
                (t.handleAfterPrint = function () {
                    t.setState({ forPrint: !1 });
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = e.options,
                    n = this.state.forPrint,
                    r = n || "auto" === t.height || "auto" === t.contentHeight,
                    o = r || null == t.height ? "" : t.height,
                    i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
                return Qr() || i.push("fc-liquid-hack"), e.children(i, o, r, n);
            }),
            (t.prototype.componentDidMount = function () {
                var e = this.props.emitter;
                e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
            }),
            (t.prototype.componentWillUnmount = function () {
                var e = this.props.emitter;
                e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
            }),
            t
        );
    })(Uo);
    function ma(e, t) {
        return ln(!e || t > 10 ? { weekday: "short" } : t > 1 ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 } : { weekday: "long" });
    }
    var ya = "fc-col-header-cell";
    function Ea(e) {
        return e.text;
    }
    var Sa = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.dateEnv,
                        n = e.options,
                        o = e.theme,
                        i = e.viewApi,
                        a = this.props,
                        s = a.date,
                        l = a.dateProfile,
                        u = ro(s, a.todayRange, null, l),
                        c = [ya].concat(oo(u, o)),
                        d = t.format(s, a.dayHeaderFormat),
                        p = !u.isDisabled && a.colCnt > 1 ? so(this.context, s) : {},
                        f = r(r(r({ date: t.toDate(s), view: i }, a.extraHookProps), { text: d }), u);
                    return _o(Yo, { hookProps: f, classNames: n.dayHeaderClassNames, content: n.dayHeaderContent, defaultContent: Ea, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, function (e, t, n, o) {
                        return _o(
                            "th",
                            r({ ref: e, role: "columnheader", className: c.concat(t).join(" "), "data-date": u.isDisabled ? void 0 : Bt(s), colSpan: a.colSpan }, a.extraDataAttrs),
                            _o("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && _o("a", r({ ref: n, className: ["fc-col-header-cell-cushion", a.isSticky ? "fc-sticky" : ""].join(" ") }, p), o))
                        );
                    });
                }),
                t
            );
        })(Uo),
        ba = ln({ weekday: "long" }),
        Da = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.dateEnv,
                        o = t.theme,
                        i = t.viewApi,
                        a = t.options,
                        s = tt(new Date(2592e5), e.dow),
                        l = { dow: e.dow, isDisabled: !1, isFuture: !1, isPast: !1, isToday: !1, isOther: !1 },
                        u = [ya].concat(oo(l, o), e.extraClassNames || []),
                        c = n.format(s, e.dayHeaderFormat),
                        d = r(r(r(r({ date: s }, l), { view: i }), e.extraHookProps), { text: c });
                    return _o(Yo, { hookProps: d, classNames: a.dayHeaderClassNames, content: a.dayHeaderContent, defaultContent: Ea, didMount: a.dayHeaderDidMount, willUnmount: a.dayHeaderWillUnmount }, function (t, o, i, a) {
                        return _o(
                            "th",
                            r({ ref: t, role: "columnheader", className: u.concat(o).join(" "), colSpan: e.colSpan }, e.extraDataAttrs),
                            _o("div", { className: "fc-scrollgrid-sync-inner" }, _o("a", { "aria-label": n.format(s, ba), className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "), ref: i }, a))
                        );
                    });
                }),
                t
            );
        })(Uo),
        Ca = (function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return (r.initialNowDate = Tr(n.options.now, n.dateEnv)), (r.initialNowQueriedMs = new Date().valueOf()), (r.state = r.computeTiming().currentState), r;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.state;
                    return e.children(t.nowDate, t.todayRange);
                }),
                (t.prototype.componentDidMount = function () {
                    this.setTimeout();
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.clearTimeout();
                }),
                (t.prototype.computeTiming = function () {
                    var e = this.props,
                        t = this.context,
                        n = nt(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
                        r = t.dateEnv.startOf(n, e.unit),
                        o = t.dateEnv.add(r, Nt(1, e.unit)),
                        i = o.valueOf() - n.valueOf();
                    return (i = Math.min(864e5, i)), { currentState: { nowDate: r, todayRange: wa(r) }, nextState: { nowDate: o, todayRange: wa(o) }, waitMs: i };
                }),
                (t.prototype.setTimeout = function () {
                    var e = this,
                        t = this.computeTiming(),
                        n = t.nextState,
                        r = t.waitMs;
                    this.timeoutId = setTimeout(function () {
                        e.setState(n, function () {
                            e.setTimeout();
                        });
                    }, r);
                }),
                (t.prototype.clearTimeout = function () {
                    this.timeoutId && clearTimeout(this.timeoutId);
                }),
                (t.contextType = Oo),
                t
            );
        })(Ro);
    function wa(e) {
        var t = lt(e);
        return { start: t, end: tt(t, 1) };
    }
    var Ra = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.createDayHeaderFormatter = qt(_a)), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.context,
                    t = this.props,
                    n = t.dates,
                    r = t.dateProfile,
                    o = t.datesRepDistinctDays,
                    i = t.renderIntro,
                    a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
                return _o(Ca, { unit: "day" }, function (e, t) {
                    return _o(
                        "tr",
                        { role: "row" },
                        i && i("day"),
                        n.map(function (e) {
                            return o ? _o(Sa, { key: e.toISOString(), date: e, dateProfile: r, todayRange: t, colCnt: n.length, dayHeaderFormat: a }) : _o(Da, { key: e.getUTCDay(), dow: e.getUTCDay(), dayHeaderFormat: a });
                        })
                    );
                });
            }),
            t
        );
    })(Uo);
    function _a(e, t, n) {
        return e || ma(t, n);
    }
    var Ta = (function () {
            function e(e, t) {
                for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r; ) t.isHiddenDay(n) ? o.push(a + 0.5) : ((a += 1), o.push(a), i.push(n)), (n = tt(n, 1));
                (this.dates = i), (this.indices = o), (this.cnt = i.length);
            }
            return (
                (e.prototype.sliceRange = function (e) {
                    var t = this.getDateDayIndex(e.start),
                        n = this.getDateDayIndex(tt(e.end, -1)),
                        r = Math.max(0, t),
                        o = Math.min(this.cnt - 1, n);
                    return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? { firstIndex: r, lastIndex: o, isStart: t === r, isEnd: n === o } : null;
                }),
                (e.prototype.getDateDayIndex = function (e) {
                    var t = this.indices,
                        n = Math.floor(ot(this.dates[0], e));
                    return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
                }),
                e
            );
        })(),
        ka = (function () {
            function e(e, t) {
                var n,
                    r,
                    o,
                    i = e.dates;
                if (t) {
                    for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1);
                    o = Math.ceil(i.length / n);
                } else (o = 1), (n = i.length);
                (this.rowCnt = o), (this.colCnt = n), (this.daySeries = e), (this.cells = this.buildCells()), (this.headerDates = this.buildHeaderDates());
            }
            return (
                (e.prototype.buildCells = function () {
                    for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                        for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
                        e.push(n);
                    }
                    return e;
                }),
                (e.prototype.buildCell = function (e, t) {
                    var n = this.daySeries.dates[e * this.colCnt + t];
                    return { key: n.toISOString(), date: n };
                }),
                (e.prototype.buildHeaderDates = function () {
                    for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
                    return e;
                }),
                (e.prototype.sliceRange = function (e) {
                    var t = this.colCnt,
                        n = this.daySeries.sliceRange(e),
                        r = [];
                    if (n)
                        for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i; ) {
                            var s = Math.floor(a / t),
                                l = Math.min((s + 1) * t, i + 1);
                            r.push({ row: s, firstCol: a % t, lastCol: (l - 1) % t, isStart: n.isStart && a === o, isEnd: n.isEnd && l - 1 === i }), (a = l);
                        }
                    return r;
                }),
                e
            );
        })(),
        xa = (function () {
            function e() {
                (this.sliceBusinessHours = qt(this._sliceBusinessHours)),
                    (this.sliceDateSelection = qt(this._sliceDateSpan)),
                    (this.sliceEventStore = qt(this._sliceEventStore)),
                    (this.sliceEventDrag = qt(this._sliceInteraction)),
                    (this.sliceEventResize = qt(this._sliceInteraction)),
                    (this.forceDayIfListItem = !1);
            }
            return (
                (e.prototype.sliceProps = function (e, t, n, r) {
                    for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
                    var s = e.eventUiBases,
                        l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
                    return {
                        dateSelectionSegs: this.sliceDateSelection.apply(this, o([e.dateSelection, s, r], i)),
                        businessHourSegs: this.sliceBusinessHours.apply(this, o([e.businessHours, t, n, r], i)),
                        fgEventSegs: l.fg,
                        bgEventSegs: l.bg,
                        eventDrag: this.sliceEventDrag.apply(this, o([e.eventDrag, s, t, n], i)),
                        eventResize: this.sliceEventResize.apply(this, o([e.eventResize, s, t, n], i)),
                        eventSelection: e.eventSelection,
                    };
                }),
                (e.prototype.sliceNowDate = function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    return this._sliceDateSpan.apply(this, o([{ range: { start: e, end: nt(e, 1) }, allDay: !1 }, {}, t], n));
                }),
                (e.prototype._sliceBusinessHours = function (e, t, n, r) {
                    for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
                    return e ? this._sliceEventStore.apply(this, o([xt(e, Ma(t, Boolean(n)), r), {}, t, n], i)).bg : [];
                }),
                (e.prototype._sliceEventStore = function (e, t, n, r) {
                    for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                    if (e) {
                        var a = Xn(e, t, Ma(n, Boolean(r)), r);
                        return { bg: this.sliceEventRanges(a.bg, o), fg: this.sliceEventRanges(a.fg, o) };
                    }
                    return { bg: [], fg: [] };
                }),
                (e.prototype._sliceInteraction = function (e, t, n, r) {
                    for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                    if (!e) return null;
                    var a = Xn(e.mutatedEvents, t, Ma(n, Boolean(r)), r);
                    return { segs: this.sliceEventRanges(a.fg, o), affectedInstances: e.affectedEvents.instances, isEvent: e.isEvent };
                }),
                (e.prototype._sliceDateSpan = function (e, t, n) {
                    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                    if (!e) return [];
                    for (var a = gr(e, t, n), s = this.sliceRange.apply(this, o([e.range], r)), l = 0, u = s; l < u.length; l++) {
                        var c = u[l];
                        c.eventRange = a;
                    }
                    return s;
                }),
                (e.prototype.sliceEventRanges = function (e, t) {
                    for (var n = [], r = 0, o = e; r < o.length; r++) {
                        var i = o[r];
                        n.push.apply(n, this.sliceEventRange(i, t));
                    }
                    return n;
                }),
                (e.prototype.sliceEventRange = function (e, t) {
                    var n = e.range;
                    this.forceDayIfListItem && "list-item" === e.ui.display && (n = { start: n.start, end: tt(n.start, 1) });
                    for (var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r; i < a.length; i++) {
                        var s = a[i];
                        (s.eventRange = e), (s.isStart = e.isStart && s.isStart), (s.isEnd = e.isEnd && s.isEnd);
                    }
                    return r;
                }),
                e
            );
        })();
    function Ma(e, t) {
        var n = e.activeRange;
        return t ? n : { start: nt(n.start, e.slotMinTime.milliseconds), end: nt(n.end, e.slotMaxTime.milliseconds - 864e5) };
    }
    function Ia(e, t, n) {
        var r = e.mutatedEvents.instances;
        for (var o in r) if (!Yn(t.validRange, r[o].range)) return !1;
        return Na({ eventDrag: e }, n);
    }
    function Pa(e, t, n) {
        return !!Yn(t.validRange, e.range) && Na({ dateSelection: e }, n);
    }
    function Na(e, t) {
        var n = t.getCurrentData(),
            o = r({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, e);
        return (t.pluginHooks.isPropsValid || Ha)(o, t);
    }
    function Ha(e, t, n, o) {
        return (
            void 0 === n && (n = {}),
            !(
                e.eventDrag &&
                !(function (e, t, n, o) {
                    var i = t.getCurrentData(),
                        a = e.eventDrag,
                        s = a.mutatedEvents,
                        l = s.defs,
                        u = s.instances,
                        c = Qn(l, a.isEvent ? e.eventUiBases : { "": i.selectionConfig });
                    o && (c = bt(c, o));
                    var d =
                            ((v = e.eventStore),
                            (g = a.affectedEvents.instances),
                            {
                                defs: v.defs,
                                instances: St(v.instances, function (e) {
                                    return !g[e.instanceId];
                                }),
                            }),
                        p = d.defs,
                        f = d.instances,
                        h = Qn(p, e.eventUiBases);
                    var v, g;
                    for (var m in u) {
                        var y = u[m],
                            E = y.range,
                            S = c[y.defId],
                            b = l[y.defId];
                        if (!Oa(S.constraints, E, d, e.businessHours, t)) return !1;
                        var D = t.options.eventOverlap,
                            C = "function" == typeof D ? D : null;
                        for (var w in f) {
                            var R = f[w];
                            if (qn(E, R.range)) {
                                if (!1 === h[R.defId].overlap && a.isEvent) return !1;
                                if (!1 === S.overlap) return !1;
                                if (C && !C(new xr(t, p[R.defId], R), new xr(t, b, y))) return !1;
                            }
                        }
                        for (var _ = i.eventStore, T = 0, k = S.allows; T < k.length; T++) {
                            var x = k[T],
                                M = r(r({}, n), { range: y.range, allDay: b.allDay }),
                                I = _.defs[b.defId],
                                P = _.instances[m],
                                N = void 0;
                            if (((N = I ? new xr(t, I, P) : new xr(t, b)), !x(yr(M, t), N))) return !1;
                        }
                    }
                    return !0;
                })(e, t, n, o)
            ) &&
                !(
                    e.dateSelection &&
                    !(function (e, t, n, o) {
                        var i = e.eventStore,
                            a = i.defs,
                            s = i.instances,
                            l = e.dateSelection,
                            u = l.range,
                            c = t.getCurrentData().selectionConfig;
                        o && (c = o(c));
                        if (!Oa(c.constraints, u, i, e.businessHours, t)) return !1;
                        var d = t.options.selectOverlap,
                            p = "function" == typeof d ? d : null;
                        for (var f in s) {
                            var h = s[f];
                            if (qn(u, h.range)) {
                                if (!1 === c.overlap) return !1;
                                if (p && !p(new xr(t, a[h.defId], h), null)) return !1;
                            }
                        }
                        for (var v = 0, g = c.allows; v < g.length; v++) {
                            if (!(0, g[v])(yr(r(r({}, n), l), t), null)) return !1;
                        }
                        return !0;
                    })(e, t, n, o)
                )
        );
    }
    function Oa(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!Ua(Aa(a[i], t, n, r, o), t)) return !1;
        }
        return !0;
    }
    function Aa(e, t, n, r, o) {
        return "businessHours" === e
            ? La(xt(r, t, o))
            : "string" == typeof e
            ? La(
                  wn(n, function (t) {
                      return t.groupId === e;
                  })
              )
            : "object" == typeof e && e
            ? La(xt(e, t, o))
            : [];
    }
    function La(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n;
    }
    function Ua(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (Yn(r[n], t)) return !0;
        }
        return !1;
    }
    var Wa = /^(visible|hidden)$/,
        Va = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleEl = function (e) {
                        (t.el = e), Fo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = e.liquid,
                        n = e.liquidIsAbsolute,
                        r = t && n,
                        o = ["fc-scroller"];
                    return (
                        t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")),
                        _o(
                            "div",
                            {
                                ref: this.handleEl,
                                className: o.join(" "),
                                style: {
                                    overflowX: e.overflowX,
                                    overflowY: e.overflowY,
                                    left: (r && -(e.overcomeLeft || 0)) || "",
                                    right: (r && -(e.overcomeRight || 0)) || "",
                                    bottom: (r && -(e.overcomeBottom || 0)) || "",
                                    marginLeft: (!r && -(e.overcomeLeft || 0)) || "",
                                    marginRight: (!r && -(e.overcomeRight || 0)) || "",
                                    marginBottom: (!r && -(e.overcomeBottom || 0)) || "",
                                    maxHeight: e.maxHeight || "",
                                },
                            },
                            e.children
                        )
                    );
                }),
                (t.prototype.needsXScrolling = function () {
                    if (Wa.test(this.props.overflowX)) return !1;
                    for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                        if (n[r].getBoundingClientRect().width > t) return !0;
                    }
                    return !1;
                }),
                (t.prototype.needsYScrolling = function () {
                    if (Wa.test(this.props.overflowY)) return !1;
                    for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                        if (n[r].getBoundingClientRect().height > t) return !0;
                    }
                    return !1;
                }),
                (t.prototype.getXScrollbarWidth = function () {
                    return Wa.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
                }),
                (t.prototype.getYScrollbarWidth = function () {
                    return Wa.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
                }),
                t
            );
        })(Uo),
        Fa = (function () {
            function e(e) {
                var t = this;
                (this.masterCallback = e),
                    (this.currentMap = {}),
                    (this.depths = {}),
                    (this.callbackMap = {}),
                    (this.handleValue = function (e, n) {
                        var r = t,
                            o = r.depths,
                            i = r.currentMap,
                            a = !1,
                            s = !1;
                        null !== e ? ((a = n in i), (i[n] = e), (o[n] = (o[n] || 0) + 1), (s = !0)) : ((o[n] -= 1), o[n] || (delete i[n], delete t.callbackMap[n], (a = !0))),
                            t.masterCallback && (a && t.masterCallback(null, String(n)), s && t.masterCallback(e, String(n)));
                    });
            }
            return (
                (e.prototype.createRef = function (e) {
                    var t = this,
                        n = this.callbackMap[e];
                    return (
                        n ||
                            (n = this.callbackMap[e] = function (n) {
                                t.handleValue(n, String(e));
                            }),
                        n
                    );
                }),
                (e.prototype.collect = function (e, t, n) {
                    return kt(this.currentMap, e, t, n);
                }),
                (e.prototype.getAll = function () {
                    return Ct(this.currentMap);
                }),
                e
            );
        })();
    function Ba(e) {
        for (var t = 0, n = 0, r = De(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, Je(o));
        }
        return Math.ceil(t);
    }
    function za(e, t) {
        return e.liquid && t.liquid;
    }
    function ja(e, t) {
        return null != t.maxHeight || za(e, t);
    }
    function Ga(e, t, n, r) {
        var o = n.expandRows;
        return "function" == typeof t.content
            ? t.content(n)
            : _o(
                  "table",
                  { role: "presentation", className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "), style: { minWidth: n.tableMinWidth, width: n.clientWidth, height: o ? n.clientHeight : "" } },
                  n.tableColGroupNode,
                  _o(r ? "thead" : "tbody", { role: "presentation" }, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent)
              );
    }
    function qa(e, t) {
        return Gt(e, t, wt);
    }
    function Ya(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1) n.push(_o("col", { style: { width: "shrink" === a.width ? Za(t) : a.width || "", minWidth: a.minWidth || "" } }));
        return _o.apply(void 0, o(["colgroup", {}], n));
    }
    function Za(e) {
        return null == e ? 4 : e;
    }
    function Xa(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0;
        }
        return !1;
    }
    function Ka(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n;
    }
    function $a(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
    }
    function Ja(e) {
        return _o("div", { className: "fc-scrollgrid-sticky-shim", style: { width: e.clientWidth, minWidth: e.tableMinWidth } });
    }
    function Qa(e) {
        var t = e.stickyHeaderDates;
        return (null != t && "auto" !== t) || (t = "auto" === e.height || "auto" === e.viewHeight), t;
    }
    function es(e) {
        var t = e.stickyFooterScrollbar;
        return (null != t && "auto" !== t) || (t = "auto" === e.height || "auto" === e.viewHeight), t;
    }
    var ts = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.processCols = qt(function (e) {
                    return e;
                }, qa)),
                (t.renderMicroColGroup = qt(Ya)),
                (t.scrollerRefs = new Fa()),
                (t.scrollerElRefs = new Fa(t._handleScrollerEl.bind(t))),
                (t.state = { shrinkWidth: null, forceYScrollbars: !1, scrollerClientWidths: {}, scrollerClientHeights: {} }),
                (t.handleSizing = function () {
                    t.setState(r({ shrinkWidth: t.computeShrinkWidth() }, t.computeScrollerDims()));
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.state,
                    r = e.context,
                    i = t.sections || [],
                    a = this.processCols(t.cols),
                    s = this.renderMicroColGroup(a, n.shrinkWidth),
                    l = Ka(t.liquid, r);
                t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
                for (var u, c = i.length, d = 0, p = [], f = [], h = []; d < c && "header" === (u = i[d]).type; ) p.push(this.renderSection(u, s, !0)), (d += 1);
                for (; d < c && "body" === (u = i[d]).type; ) f.push(this.renderSection(u, s, !1)), (d += 1);
                for (; d < c && "footer" === (u = i[d]).type; ) h.push(this.renderSection(u, s, !0)), (d += 1);
                var v = !Qr(),
                    g = { role: "rowgroup" };
                return _o(
                    "table",
                    { role: "grid", className: l.join(" "), style: { height: t.height } },
                    Boolean(!v && p.length) && _o.apply(void 0, o(["thead", g], p)),
                    Boolean(!v && f.length) && _o.apply(void 0, o(["tbody", g], f)),
                    Boolean(!v && h.length) && _o.apply(void 0, o(["tfoot", g], h)),
                    v && _o.apply(void 0, o(o(o(["tbody", g], p), f), h))
                );
            }),
            (t.prototype.renderSection = function (e, t, n) {
                return "outerContent" in e ? _o(xo, { key: e.key }, e.outerContent) : _o("tr", { key: e.key, role: "presentation", className: $a(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, t, e.chunk, n));
            }),
            (t.prototype.renderChunkTd = function (e, t, n, r) {
                if ("outerContent" in n) return n.outerContent;
                var o = this.props,
                    i = this.state,
                    a = i.forceYScrollbars,
                    s = i.scrollerClientWidths,
                    l = i.scrollerClientHeights,
                    u = ja(o, e),
                    c = za(o, e),
                    d = o.liquid ? (a ? "scroll" : u ? "auto" : "hidden") : "visible",
                    p = e.key,
                    f = Ga(
                        e,
                        n,
                        {
                            tableColGroupNode: t,
                            tableMinWidth: "",
                            clientWidth: o.collapsibleWidth || void 0 === s[p] ? null : s[p],
                            clientHeight: void 0 !== l[p] ? l[p] : null,
                            expandRows: e.expandRows,
                            syncRowHeights: !1,
                            rowSyncHeights: [],
                            reportRowHeightChange: function () {},
                        },
                        r
                    );
                return _o(
                    r ? "th" : "td",
                    { ref: n.elRef, role: "presentation" },
                    _o(
                        "div",
                        { className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "") },
                        _o(Va, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: d, overflowX: o.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: c, liquidIsAbsolute: !0 }, f)
                    )
                );
            }),
            (t.prototype._handleScrollerEl = function (e, t) {
                var n = (function (e, t) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        if (o.key === t) return o;
                    }
                    return null;
                })(this.props.sections, t);
                n && Fo(n.chunk.scrollerElRef, e);
            }),
            (t.prototype.componentDidMount = function () {
                this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
            }),
            (t.prototype.componentDidUpdate = function () {
                this.handleSizing();
            }),
            (t.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleSizing);
            }),
            (t.prototype.computeShrinkWidth = function () {
                return Xa(this.props.cols) ? Ba(this.scrollerElRefs.getAll()) : 0;
            }),
            (t.prototype.computeScrollerDims = function () {
                var e = po(),
                    t = this.scrollerRefs,
                    n = this.scrollerElRefs,
                    r = !1,
                    o = {},
                    i = {};
                for (var a in t.currentMap) {
                    var s = t.currentMap[a];
                    if (s && s.needsYScrolling()) {
                        r = !0;
                        break;
                    }
                }
                for (var l = 0, u = this.props.sections; l < u.length; l++) {
                    a = u[l].key;
                    var c = n.currentMap[a];
                    if (c) {
                        var d = c.parentNode;
                        (o[a] = Math.floor(d.getBoundingClientRect().width - (r ? e.y : 0))), (i[a] = Math.floor(d.getBoundingClientRect().height));
                    }
                }
                return { forceYScrollbars: r, scrollerClientWidths: o, scrollerClientHeights: i };
            }),
            t
        );
    })(Uo);
    ts.addStateEquality({ scrollerClientWidths: wt, scrollerClientHeights: wt });
    var ns = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.elRef = ko()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = e.seg,
                        o = r.eventRange,
                        i = o.ui,
                        a = {
                            event: new xr(t, o.def, o.instance),
                            view: t.viewApi,
                            timeText: e.timeText,
                            textColor: i.textColor,
                            backgroundColor: i.backgroundColor,
                            borderColor: i.borderColor,
                            isDraggable: !e.disableDragging && rr(r, t),
                            isStartResizable: !e.disableResizing && or(r, t),
                            isEndResizable: !e.disableResizing && ir(r),
                            isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                            isStart: Boolean(r.isStart),
                            isEnd: Boolean(r.isEnd),
                            isPast: Boolean(e.isPast),
                            isFuture: Boolean(e.isFuture),
                            isToday: Boolean(e.isToday),
                            isSelected: Boolean(e.isSelected),
                            isDragging: Boolean(e.isDragging),
                            isResizing: Boolean(e.isResizing),
                        },
                        s = lr(a).concat(i.classNames);
                    return _o(Yo, { hookProps: a, classNames: n.eventClassNames, content: n.eventContent, defaultContent: e.defaultContent, didMount: n.eventDidMount, willUnmount: n.eventWillUnmount, elRef: this.elRef }, function (
                        t,
                        n,
                        r,
                        o
                    ) {
                        return e.children(t, s.concat(n), r, o, a);
                    });
                }),
                (t.prototype.componentDidMount = function () {
                    $n(this.elRef.current, this.props.seg);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props.seg;
                    t !== e.seg && $n(this.elRef.current, t);
                }),
                t
            );
        })(Uo),
        rs = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = e.seg,
                        o = t.options.eventTimeFormat || e.defaultTimeFormat,
                        i = ar(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
                    return _o(
                        ns,
                        {
                            seg: n,
                            timeText: i,
                            disableDragging: e.disableDragging,
                            disableResizing: e.disableResizing,
                            defaultContent: e.defaultContent || os,
                            isDragging: e.isDragging,
                            isResizing: e.isResizing,
                            isDateSelecting: e.isDateSelecting,
                            isSelected: e.isSelected,
                            isPast: e.isPast,
                            isFuture: e.isFuture,
                            isToday: e.isToday,
                        },
                        function (o, i, a, s, l) {
                            return _o(
                                "a",
                                r({ className: e.extraClassNames.concat(i).join(" "), style: { borderColor: l.borderColor, backgroundColor: l.backgroundColor }, ref: o }, cr(n, t)),
                                _o("div", { className: "fc-event-main", ref: a, style: { color: l.textColor } }, s),
                                l.isStartResizable && _o("div", { className: "fc-event-resizer fc-event-resizer-start" }),
                                l.isEndResizable && _o("div", { className: "fc-event-resizer fc-event-resizer-end" })
                            );
                        }
                    );
                }),
                t
            );
        })(Uo);
    function os(e) {
        return _o(
            "div",
            { className: "fc-event-main-frame" },
            e.timeText && _o("div", { className: "fc-event-time" }, e.timeText),
            _o("div", { className: "fc-event-title-container" }, _o("div", { className: "fc-event-title fc-sticky" }, e.event.title || _o(xo, null, "Â ")))
        );
    }
    var is = function (e) {
            return _o(Oo.Consumer, null, function (t) {
                var n = t.options,
                    r = { isAxis: e.isAxis, date: t.dateEnv.toDate(e.date), view: t.viewApi };
                return _o(Yo, { hookProps: r, classNames: n.nowIndicatorClassNames, content: n.nowIndicatorContent, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }, e.children);
            });
        },
        as = ln({ day: "numeric" }),
        ss = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = ls({ date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, showDayNumber: e.showDayNumber, extraProps: e.extraHookProps, viewApi: t.viewApi, dateEnv: t.dateEnv });
                    return _o(Xo, { hookProps: r, content: n.dayCellContent, defaultContent: e.defaultContent }, e.children);
                }),
                t
            );
        })(Uo);
    function ls(e) {
        var t = e.date,
            n = e.dateEnv,
            o = ro(t, e.todayRange, null, e.dateProfile);
        return r(r(r({ date: n.toDate(t), view: e.viewApi }, o), { dayNumberText: e.showDayNumber ? n.format(t, as) : "" }), e.extraProps);
    }
    var us = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.refineHookProps = Yt(ls)), (t.normalizeClassNames = Jo()), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = this.refineHookProps({ date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, showDayNumber: e.showDayNumber, extraProps: e.extraHookProps, viewApi: t.viewApi, dateEnv: t.dateEnv }),
                    o = oo(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
                    i = r.isDisabled ? {} : { "data-date": Bt(e.date) };
                return _o($o, { hookProps: r, didMount: n.dayCellDidMount, willUnmount: n.dayCellWillUnmount, elRef: e.elRef }, function (t) {
                    return e.children(t, o, i, r.isDisabled);
                });
            }),
            t
        );
    })(Uo);
    function cs(e) {
        return _o("div", { className: "fc-" + e });
    }
    var ds = function (e) {
        return _o(
            ns,
            { defaultContent: ps, seg: e.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday },
            function (e, t, n, r, o) {
                return _o("div", { ref: e, className: ["fc-bg-event"].concat(t).join(" "), style: { backgroundColor: o.backgroundColor } }, r);
            }
        );
    };
    function ps(e) {
        return e.event.title && _o("div", { className: "fc-event-title" }, e.event.title);
    }
    var fs = function (e) {
        return _o(Oo.Consumer, null, function (t) {
            var n = t.dateEnv,
                r = t.options,
                o = e.date,
                i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o),
                s = n.format(o, i);
            return _o(Yo, { hookProps: { num: a, text: s, date: o }, classNames: r.weekNumberClassNames, content: r.weekNumberContent, defaultContent: hs, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount }, e.children);
        });
    };
    function hs(e) {
        return e.text;
    }
    var vs = (function (e) {
			var isDragging = false;
			var offsetX, offsetY;

			function t() {
				var t = (null !== e && e.apply(this, arguments)) || this;
				t.state = { titleId: xe() };

				t.handleRootEl = function (e) {
					t.rootEl = e;
					t.props.elRef && Fo(t.props.elRef, e);
				};

				t.handleDocumentMouseDown = function (e) {
					var n = _e(e);
					!t.rootEl.contains(n) && t.handleCloseClick();
				};

				t.handleDocumentKeyDown = function (e) {
					"Escape" === e.key && t.handleCloseClick();
				};

				t.handleCloseClick = function () {
					var e = t.props.onClose;
					e && e();
				};

				return t;
			}

			n(t, e);

			t.prototype.render = function () {
				var e = this.context,
					t = e.theme,
					n = e.options,
					o = this.props,
					i = this.state,
					a = ["fc-popover", t.getClass("popover")].concat(o.extraClassNames || []);

				return Io(
					_o(
						"div",
						r({ id: o.id, className: a.join(" "), "aria-labelledby": i.titleId }, o.extraAttrs, { ref: this.handleRootEl }),
						_o(
							"div",
							{ className: "fc-popover-header " + t.getClass("popoverHeader") },
							_o("span", { className: "fc-popover-title", id: i.titleId }, o.title),
							_o("span", { className: "fc-popover-close " + t.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
						),
						_o("div", { className: "fc-popover-body " + t.getClass("popoverContent") }, o.children)
					),
					o.parentEl
				);
			};
