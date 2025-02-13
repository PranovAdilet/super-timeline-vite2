import * as k from "react";
import je, { useState as ee, useRef as Ve, cloneElement as jb, useCallback as Tr, forwardRef as Bd, createElement as Sa, useSyncExternalStore as Nb, useEffect as Ne } from "react";
import { createPortal as Fb } from "react-dom";
import { create as $d } from "zustand";
import { Player as zb } from "@remotion/player";
import { Sequence as ps, AbsoluteFill as fa, Audio as Hb, OffthreadVideo as Ub, Img as Wb } from "remotion";
import { Flex as Vd } from "@radix-ui/themes";
import { ActiveSelection as Za, controlsUtils as ne, classRegistry as re, Rect as nn, Control as Qe, util as Gd, Group as Ka, Point as Bb, Canvas as $b, FabricObject as $e } from "fabric";
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ia = { exports: {} }, ti = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var td;
function Vb() {
  if (td) return ti;
  td = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(s, a, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), a.key !== void 0 && (u = "" + a.key), "key" in a) {
      c = {};
      for (var d in a)
        d !== "key" && (c[d] = a[d]);
    } else c = a;
    return a = c.ref, {
      $$typeof: e,
      type: s,
      key: u,
      ref: a !== void 0 ? a : null,
      props: c
    };
  }
  return ti.Fragment = n, ti.jsx = r, ti.jsxs = r, ti;
}
var ei = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed;
function Gb() {
  return ed || (ed = 1, process.env.NODE_ENV !== "production" && function() {
    function e(_) {
      if (_ == null) return null;
      if (typeof _ == "function")
        return _.$$typeof === Tt ? null : _.displayName || _.name || null;
      if (typeof _ == "string") return _;
      switch (_) {
        case Y:
          return "Fragment";
        case K:
          return "Portal";
        case Z:
          return "Profiler";
        case q:
          return "StrictMode";
        case B:
          return "Suspense";
        case dt:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (typeof _.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), _.$$typeof) {
          case Q:
            return (_.displayName || "Context") + ".Provider";
          case G:
            return (_._context.displayName || "Context") + ".Consumer";
          case tt:
            var $ = _.render;
            return _ = _.displayName, _ || (_ = $.displayName || $.name || "", _ = _ !== "" ? "ForwardRef(" + _ + ")" : "ForwardRef"), _;
          case St:
            return $ = _.displayName || null, $ !== null ? $ : e(_.type) || "Memo";
          case Pt:
            $ = _._payload, _ = _._init;
            try {
              return e(_($));
            } catch {
            }
        }
      return null;
    }
    function n(_) {
      return "" + _;
    }
    function r(_) {
      try {
        n(_);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var V = $.error, vt = typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return V.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          vt
        ), n(_);
      }
    }
    function s() {
    }
    function a() {
      if (sn === 0) {
        on = console.log, Bn = console.info, Si = console.warn, _n = console.error, Sn = console.group, Ii = console.groupCollapsed, $n = console.groupEnd;
        var _ = {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: _,
          log: _,
          warn: _,
          error: _,
          group: _,
          groupCollapsed: _,
          groupEnd: _
        });
      }
      sn++;
    }
    function c() {
      if (sn--, sn === 0) {
        var _ = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: rt({}, _, { value: on }),
          info: rt({}, _, { value: Bn }),
          warn: rt({}, _, { value: Si }),
          error: rt({}, _, { value: _n }),
          group: rt({}, _, { value: Sn }),
          groupCollapsed: rt({}, _, { value: Ii }),
          groupEnd: rt({}, _, { value: $n })
        });
      }
      0 > sn && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function u(_) {
      if (In === void 0)
        try {
          throw Error();
        } catch (V) {
          var $ = V.stack.trim().match(/\n( *(at )?)/);
          In = $ && $[1] || "", jr = -1 < V.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < V.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + In + _ + jr;
    }
    function d(_, $) {
      if (!_ || ie) return "";
      var V = an.get(_);
      if (V !== void 0) return V;
      ie = !0, V = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var vt = null;
      vt = Et.H, Et.H = null, a();
      try {
        var jt = {
          DetermineComponentFrameRoot: function() {
            try {
              if ($) {
                var ke = function() {
                  throw Error();
                };
                if (Object.defineProperty(ke.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ke, []);
                  } catch (ve) {
                    var Cn = ve;
                  }
                  Reflect.construct(_, [], ke);
                } else {
                  try {
                    ke.call();
                  } catch (ve) {
                    Cn = ve;
                  }
                  _.call(ke.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ve) {
                  Cn = ve;
                }
                (ke = _()) && typeof ke.catch == "function" && ke.catch(function() {
                });
              }
            } catch (ve) {
              if (ve && Cn && typeof ve.stack == "string")
                return [ve.stack, Cn.stack];
            }
            return [null, null];
          }
        };
        jt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var At = Object.getOwnPropertyDescriptor(
          jt.DetermineComponentFrameRoot,
          "name"
        );
        At && At.configurable && Object.defineProperty(
          jt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var it = jt.DetermineComponentFrameRoot(), Jt = it[0], Xe = it[1];
        if (Jt && Xe) {
          var Bt = Jt.split(`
`), ze = Xe.split(`
`);
          for (it = At = 0; At < Bt.length && !Bt[At].includes(
            "DetermineComponentFrameRoot"
          ); )
            At++;
          for (; it < ze.length && !ze[it].includes(
            "DetermineComponentFrameRoot"
          ); )
            it++;
          if (At === Bt.length || it === ze.length)
            for (At = Bt.length - 1, it = ze.length - 1; 1 <= At && 0 <= it && Bt[At] !== ze[it]; )
              it--;
          for (; 1 <= At && 0 <= it; At--, it--)
            if (Bt[At] !== ze[it]) {
              if (At !== 1 || it !== 1)
                do
                  if (At--, it--, 0 > it || Bt[At] !== ze[it]) {
                    var cn = `
` + Bt[At].replace(
                      " at new ",
                      " at "
                    );
                    return _.displayName && cn.includes("<anonymous>") && (cn = cn.replace("<anonymous>", _.displayName)), typeof _ == "function" && an.set(_, cn), cn;
                  }
                while (1 <= At && 0 <= it);
              break;
            }
        }
      } finally {
        ie = !1, Et.H = vt, c(), Error.prepareStackTrace = V;
      }
      return Bt = (Bt = _ ? _.displayName || _.name : "") ? u(Bt) : "", typeof _ == "function" && an.set(_, Bt), Bt;
    }
    function h(_) {
      if (_ == null) return "";
      if (typeof _ == "function") {
        var $ = _.prototype;
        return d(
          _,
          !(!$ || !$.isReactComponent)
        );
      }
      if (typeof _ == "string") return u(_);
      switch (_) {
        case B:
          return u("Suspense");
        case dt:
          return u("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case tt:
            return _ = d(_.render, !1), _;
          case St:
            return h(_.type);
          case Pt:
            $ = _._payload, _ = _._init;
            try {
              return h(_($));
            } catch {
            }
        }
      return "";
    }
    function m() {
      var _ = Et.A;
      return _ === null ? null : _.getOwner();
    }
    function b(_) {
      if (fe.call(_, "key")) {
        var $ = Object.getOwnPropertyDescriptor(_, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return _.key !== void 0;
    }
    function x(_, $) {
      function V() {
        Ce || (Ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(_, "key", {
        get: V,
        configurable: !0
      });
    }
    function S() {
      var _ = e(this.type);
      return Nr[_] || (Nr[_] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), _ = this.props.ref, _ !== void 0 ? _ : null;
    }
    function C(_, $, V, vt, jt, At) {
      return V = At.ref, _ = {
        $$typeof: z,
        type: _,
        key: $,
        props: At,
        _owner: jt
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(_, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(_, "ref", { enumerable: !1, value: null }), _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(_, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    }
    function R(_, $, V, vt, jt, At) {
      if (typeof _ == "string" || typeof _ == "function" || _ === Y || _ === Z || _ === q || _ === B || _ === dt || _ === wt || typeof _ == "object" && _ !== null && (_.$$typeof === Pt || _.$$typeof === St || _.$$typeof === Q || _.$$typeof === G || _.$$typeof === tt || _.$$typeof === lr || _.getModuleId !== void 0)) {
        var it = $.children;
        if (it !== void 0)
          if (vt)
            if (Wn(it)) {
              for (vt = 0; vt < it.length; vt++)
                A(it[vt], _);
              Object.freeze && Object.freeze(it);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else A(it, _);
      } else
        it = "", (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (it += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), _ === null ? vt = "null" : Wn(_) ? vt = "array" : _ !== void 0 && _.$$typeof === z ? (vt = "<" + (e(_.type) || "Unknown") + " />", it = " Did you accidentally export a JSX literal instead of a component?") : vt = typeof _, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          vt,
          it
        );
      if (fe.call($, "key")) {
        it = e(_);
        var Jt = Object.keys($).filter(function(Bt) {
          return Bt !== "key";
        });
        vt = 0 < Jt.length ? "{key: someKey, " + Jt.join(": ..., ") + ": ...}" : "{key: someKey}", Ti[it + vt] || (Jt = 0 < Jt.length ? "{" + Jt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          vt,
          it,
          Jt,
          it
        ), Ti[it + vt] = !0);
      }
      if (it = null, V !== void 0 && (r(V), it = "" + V), b($) && (r($.key), it = "" + $.key), "key" in $) {
        V = {};
        for (var Xe in $)
          Xe !== "key" && (V[Xe] = $[Xe]);
      } else V = $;
      return it && x(
        V,
        typeof _ == "function" ? _.displayName || _.name || "Unknown" : _
      ), C(_, it, At, jt, m(), V);
    }
    function A(_, $) {
      if (typeof _ == "object" && _ && _.$$typeof !== Ks) {
        if (Wn(_))
          for (var V = 0; V < _.length; V++) {
            var vt = _[V];
            E(vt) && P(vt, $);
          }
        else if (E(_))
          _._store && (_._store.validated = 1);
        else if (_ === null || typeof _ != "object" ? V = null : (V = It && _[It] || _["@@iterator"], V = typeof V == "function" ? V : null), typeof V == "function" && V !== _.entries && (V = V.call(_), V !== _))
          for (; !(_ = V.next()).done; )
            E(_.value) && P(_.value, $);
      }
    }
    function E(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === z;
    }
    function P(_, $) {
      if (_._store && !_._store.validated && _.key == null && (_._store.validated = 1, $ = D($), !Tn[$])) {
        Tn[$] = !0;
        var V = "";
        _ && _._owner != null && _._owner !== m() && (V = null, typeof _._owner.tag == "number" ? V = e(_._owner.type) : typeof _._owner.name == "string" && (V = _._owner.name), V = " It was passed a child from " + V + ".");
        var vt = Et.getCurrentStack;
        Et.getCurrentStack = function() {
          var jt = h(_.type);
          return vt && (jt += vt() || ""), jt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          $,
          V
        ), Et.getCurrentStack = vt;
      }
    }
    function D(_) {
      var $ = "", V = m();
      return V && (V = e(V.type)) && ($ = `

Check the render method of \`` + V + "`."), $ || (_ = e(_)) && ($ = `

Check the top-level render call using <` + _ + ">."), $;
    }
    var N = je, z = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), tt = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), dt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), wt = Symbol.for("react.offscreen"), It = Symbol.iterator, Tt = Symbol.for("react.client.reference"), Et = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = Object.prototype.hasOwnProperty, rt = Object.assign, lr = Symbol.for("react.client.reference"), Wn = Array.isArray, sn = 0, on, Bn, Si, _n, Sn, Ii, $n;
    s.__reactDisabledLog = !0;
    var In, jr, ie = !1, an = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ks = Symbol.for("react.client.reference"), Ce, Nr = {}, Ti = {}, Tn = {};
    ei.Fragment = Y, ei.jsx = function(_, $, V, vt, jt) {
      return R(_, $, V, !1, vt, jt);
    }, ei.jsxs = function(_, $, V, vt, jt) {
      return R(_, $, V, !0, vt, jt);
    };
  }()), ei;
}
process.env.NODE_ENV === "production" ? Ia.exports = Vb() : Ia.exports = Gb();
var v = Ia.exports;
function nd(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function Xd(...e) {
  return (n) => {
    let r = !1;
    const s = e.map((a) => {
      const c = nd(a, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const c = s[a];
          typeof c == "function" ? c() : nd(e[a], null);
        }
      };
  };
}
function le(...e) {
  return k.useCallback(Xd(...e), e);
}
var ai = k.forwardRef((e, n) => {
  const { children: r, ...s } = e, a = k.Children.toArray(r), c = a.find(Yb);
  if (c) {
    const u = c.props.children, d = a.map((h) => h === c ? k.Children.count(u) > 1 ? k.Children.only(null) : k.isValidElement(u) ? u.props.children : null : h);
    return /* @__PURE__ */ v.jsx(Ta, { ...s, ref: n, children: k.isValidElement(u) ? k.cloneElement(u, void 0, d) : null });
  }
  return /* @__PURE__ */ v.jsx(Ta, { ...s, ref: n, children: r });
});
ai.displayName = "Slot";
var Ta = k.forwardRef((e, n) => {
  const { children: r, ...s } = e;
  if (k.isValidElement(r)) {
    const a = Kb(r), c = Zb(s, r.props);
    return r.type !== k.Fragment && (c.ref = n ? Xd(n, a) : a), k.cloneElement(r, c);
  }
  return k.Children.count(r) > 1 ? k.Children.only(null) : null;
});
Ta.displayName = "SlotClone";
var Xb = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function Yb(e) {
  return k.isValidElement(e) && e.type === Xb;
}
function Zb(e, n) {
  const r = { ...n };
  for (const s in n) {
    const a = e[s], c = n[s];
    /^on[A-Z]/.test(s) ? a && c ? r[s] = (...d) => {
      c(...d), a(...d);
    } : a && (r[s] = a) : s === "style" ? r[s] = { ...a, ...c } : s === "className" && (r[s] = [a, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Kb(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Yd(e) {
  var n, r, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (n = 0; n < a; n++) e[n] && (r = Yd(e[n])) && (s && (s += " "), s += r);
  } else for (r in e) e[r] && (s && (s += " "), s += r);
  return s;
}
function Zd() {
  for (var e, n, r = 0, s = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (n = Yd(e)) && (s && (s += " "), s += n);
  return s;
}
const rd = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, id = Zd, qb = (e, n) => (r) => {
  var s;
  if (n?.variants == null) return id(e, r?.class, r?.className);
  const { variants: a, defaultVariants: c } = n, u = Object.keys(a).map((m) => {
    const b = r?.[m], x = c?.[m];
    if (b === null) return null;
    const S = rd(b) || rd(x);
    return a[m][S];
  }), d = r && Object.entries(r).reduce((m, b) => {
    let [x, S] = b;
    return S === void 0 || (m[x] = S), m;
  }, {}), h = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((m, b) => {
    let { class: x, className: S, ...C } = b;
    return Object.entries(C).every((R) => {
      let [A, E] = R;
      return Array.isArray(E) ? E.includes({
        ...c,
        ...d
      }[A]) : {
        ...c,
        ...d
      }[A] === E;
    }) ? [
      ...m,
      x,
      S
    ] : m;
  }, []);
  return id(e, u, h, r?.class, r?.className);
}, qa = "-", Jb = (e) => {
  const n = ty(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (u) => {
      const d = u.split(qa);
      return d[0] === "" && d.length !== 1 && d.shift(), Kd(d, n) || Qb(u);
    },
    getConflictingClassGroupIds: (u, d) => {
      const h = r[u] || [];
      return d && s[u] ? [...h, ...s[u]] : h;
    }
  };
}, Kd = (e, n) => {
  if (e.length === 0)
    return n.classGroupId;
  const r = e[0], s = n.nextPart.get(r), a = s ? Kd(e.slice(1), s) : void 0;
  if (a)
    return a;
  if (n.validators.length === 0)
    return;
  const c = e.join(qa);
  return n.validators.find(({
    validator: u
  }) => u(c))?.classGroupId;
}, sd = /^\[(.+)\]$/, Qb = (e) => {
  if (sd.test(e)) {
    const n = sd.exec(e)[1], r = n?.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, ty = (e) => {
  const {
    theme: n,
    prefix: r
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ny(Object.entries(e.classGroups), r).forEach(([c, u]) => {
    Ca(u, s, c, n);
  }), s;
}, Ca = (e, n, r, s) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const c = a === "" ? n : od(n, a);
      c.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (ey(a)) {
        Ca(a(s), n, r, s);
        return;
      }
      n.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([c, u]) => {
      Ca(u, od(n, c), r, s);
    });
  });
}, od = (e, n) => {
  let r = e;
  return n.split(qa).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, ey = (e) => e.isThemeGetter, ny = (e, n) => n ? e.map(([r, s]) => {
  const a = s.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, d]) => [n + u, d])) : c);
  return [r, a];
}) : e, ry = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const a = (c, u) => {
    r.set(c, u), n++, n > e && (n = 0, s = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let u = r.get(c);
      if (u !== void 0)
        return u;
      if ((u = s.get(c)) !== void 0)
        return a(c, u), u;
    },
    set(c, u) {
      r.has(c) ? r.set(c, u) : a(c, u);
    }
  };
}, qd = "!", iy = (e) => {
  const {
    separator: n,
    experimentalParseClassName: r
  } = e, s = n.length === 1, a = n[0], c = n.length, u = (d) => {
    const h = [];
    let m = 0, b = 0, x;
    for (let E = 0; E < d.length; E++) {
      let P = d[E];
      if (m === 0) {
        if (P === a && (s || d.slice(E, E + c) === n)) {
          h.push(d.slice(b, E)), b = E + c;
          continue;
        }
        if (P === "/") {
          x = E;
          continue;
        }
      }
      P === "[" ? m++ : P === "]" && m--;
    }
    const S = h.length === 0 ? d : d.substring(b), C = S.startsWith(qd), R = C ? S.substring(1) : S, A = x && x > b ? x - b : void 0;
    return {
      modifiers: h,
      hasImportantModifier: C,
      baseClassName: R,
      maybePostfixModifierPosition: A
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: u
  }) : u;
}, sy = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let r = [];
  return e.forEach((s) => {
    s[0] === "[" ? (n.push(...r.sort(), s), r = []) : r.push(s);
  }), n.push(...r.sort()), n;
}, oy = (e) => ({
  cache: ry(e.cacheSize),
  parseClassName: iy(e),
  ...Jb(e)
}), ay = /\s+/, cy = (e, n) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: a
  } = n, c = [], u = e.trim().split(ay);
  let d = "";
  for (let h = u.length - 1; h >= 0; h -= 1) {
    const m = u[h], {
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: S,
      maybePostfixModifierPosition: C
    } = r(m);
    let R = !!C, A = s(R ? S.substring(0, C) : S);
    if (!A) {
      if (!R) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (A = s(S), !A) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      R = !1;
    }
    const E = sy(b).join(":"), P = x ? E + qd : E, D = P + A;
    if (c.includes(D))
      continue;
    c.push(D);
    const N = a(A, R);
    for (let z = 0; z < N.length; ++z) {
      const K = N[z];
      c.push(P + K);
    }
    d = m + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function ly() {
  let e = 0, n, r, s = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (r = Jd(n)) && (s && (s += " "), s += r);
  return s;
}
const Jd = (e) => {
  if (typeof e == "string")
    return e;
  let n, r = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (n = Jd(e[s])) && (r && (r += " "), r += n);
  return r;
};
function uy(e, ...n) {
  let r, s, a, c = u;
  function u(h) {
    const m = n.reduce((b, x) => x(b), e());
    return r = oy(m), s = r.cache.get, a = r.cache.set, c = d, d(h);
  }
  function d(h) {
    const m = s(h);
    if (m)
      return m;
    const b = cy(h, r);
    return a(h, b), b;
  }
  return function() {
    return c(ly.apply(null, arguments));
  };
}
const Rt = (e) => {
  const n = (r) => r[e] || [];
  return n.isThemeGetter = !0, n;
}, Qd = /^\[(?:([a-z-]+):)?(.+)\]$/i, dy = /^\d+\/\d+$/, fy = /* @__PURE__ */ new Set(["px", "full", "screen"]), hy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, py = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, my = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, bn = (e) => Cr(e) || fy.has(e) || dy.test(e), jn = (e) => Ar(e, "length", Ty), Cr = (e) => !!e && !Number.isNaN(Number(e)), ha = (e) => Ar(e, "number", Cr), ni = (e) => !!e && Number.isInteger(Number(e)), by = (e) => e.endsWith("%") && Cr(e.slice(0, -1)), ct = (e) => Qd.test(e), Nn = (e) => hy.test(e), yy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wy = (e) => Ar(e, yy, tf), xy = (e) => Ar(e, "position", tf), _y = /* @__PURE__ */ new Set(["image", "url"]), Sy = (e) => Ar(e, _y, ky), Iy = (e) => Ar(e, "", Cy), ri = () => !0, Ar = (e, n, r) => {
  const s = Qd.exec(e);
  return s ? s[1] ? typeof n == "string" ? s[1] === n : n.has(s[1]) : r(s[2]) : !1;
}, Ty = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  py.test(e) && !gy.test(e)
), tf = () => !1, Cy = (e) => my.test(e), ky = (e) => vy.test(e), Ey = () => {
  const e = Rt("colors"), n = Rt("spacing"), r = Rt("blur"), s = Rt("brightness"), a = Rt("borderColor"), c = Rt("borderRadius"), u = Rt("borderSpacing"), d = Rt("borderWidth"), h = Rt("contrast"), m = Rt("grayscale"), b = Rt("hueRotate"), x = Rt("invert"), S = Rt("gap"), C = Rt("gradientColorStops"), R = Rt("gradientColorStopPositions"), A = Rt("inset"), E = Rt("margin"), P = Rt("opacity"), D = Rt("padding"), N = Rt("saturate"), z = Rt("scale"), K = Rt("sepia"), Y = Rt("skew"), q = Rt("space"), Z = Rt("translate"), G = () => ["auto", "contain", "none"], Q = () => ["auto", "hidden", "clip", "visible", "scroll"], tt = () => ["auto", ct, n], B = () => [ct, n], dt = () => ["", bn, jn], St = () => ["auto", Cr, ct], Pt = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], wt = () => ["solid", "dashed", "dotted", "double", "none"], It = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Tt = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Et = () => ["", "0", ct], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], rt = () => [Cr, ct];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ri],
      spacing: [bn, jn],
      blur: ["none", "", Nn, ct],
      brightness: rt(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nn, ct],
      borderSpacing: B(),
      borderWidth: dt(),
      contrast: rt(),
      grayscale: Et(),
      hueRotate: rt(),
      invert: Et(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [by, jn],
      inset: tt(),
      margin: tt(),
      opacity: rt(),
      padding: B(),
      saturate: rt(),
      scale: rt(),
      sepia: Et(),
      skew: rt(),
      space: B(),
      translate: B()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ct]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Nn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Pt(), ct]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [A]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [A]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [A]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [A]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [A]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [A]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [A]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [A]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [A]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ni, ct]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: tt()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ct]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Et()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Et()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ni, ct]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ri]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ni, ct]
        }, ct]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": St()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": St()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ri]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ni, ct]
        }, ct]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": St()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": St()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ct]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ct]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [S]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [S]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [S]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Tt()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Tt(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Tt(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [D]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [D]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [D]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [D]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [D]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [D]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [D]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [D]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [D]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [E]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [E]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [E]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [E]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [E]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [E]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [E]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [E]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [E]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [q]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [q]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ct, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ct, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ct, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [Nn]
        }, Nn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ct, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ct, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ct, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ct, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Nn, jn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ha]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ri]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ct]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Cr, ha]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", bn, ct]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ct]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ct]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [P]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...wt(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", bn, jn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", bn, ct]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ct]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ct]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [P]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Pt(), xy]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", wy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Sy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [R]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [R]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [R]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [C]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...wt(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [d]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: wt()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...wt()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [bn, ct]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [bn, jn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: dt()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [bn, jn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Nn, Iy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ri]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...It(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": It()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Nn, ct]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [K]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [K]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ct]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: rt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ct]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: rt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ct]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [z]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [z]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [z]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ni, ct]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ct]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ct]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ct]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [bn, jn, ha]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Ay = /* @__PURE__ */ uy(Ey);
function ce(...e) {
  return Ay(Zd(e));
}
function LS(e, n = {}) {
  const { decimals: r = 0, sizeType: s = "normal" } = n, a = ["Bytes", "KB", "MB", "GB", "TB"], c = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (e === 0) return "0 Byte";
  const u = Math.floor(Math.log(e) / Math.log(1024));
  return `${(e / Math.pow(1024, u)).toFixed(r)} ${s === "accurate" ? c[u] ?? "Bytest" : a[u] ?? "Bytes"}`;
}
const My = qb(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Lt = k.forwardRef(
  ({ className: e, variant: n, size: r, asChild: s = !1, ...a }, c) => {
    const u = s ? ai : "button";
    return /* @__PURE__ */ v.jsx(
      u,
      {
        className: ce(My({ variant: n, size: r, className: e })),
        ref: c,
        ...a
      }
    );
  }
);
Lt.displayName = "Button";
function Ja(e, [n, r]) {
  return Math.min(r, Math.max(n, e));
}
function Ft(e, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(a) {
    if (e?.(a), r === !1 || !a.defaultPrevented)
      return n?.(a);
  };
}
function gi(e, n = []) {
  let r = [];
  function s(c, u) {
    const d = k.createContext(u), h = r.length;
    r = [...r, u];
    const m = (x) => {
      const { scope: S, children: C, ...R } = x, A = S?.[e]?.[h] || d, E = k.useMemo(() => R, Object.values(R));
      return /* @__PURE__ */ v.jsx(A.Provider, { value: E, children: C });
    };
    m.displayName = c + "Provider";
    function b(x, S) {
      const C = S?.[e]?.[h] || d, R = k.useContext(C);
      if (R) return R;
      if (u !== void 0) return u;
      throw new Error(`\`${x}\` must be used within \`${c}\``);
    }
    return [m, b];
  }
  const a = () => {
    const c = r.map((u) => k.createContext(u));
    return function(d) {
      const h = d?.[e] || c;
      return k.useMemo(
        () => ({ [`__scope${e}`]: { ...d, [e]: h } }),
        [d, h]
      );
    };
  };
  return a.scopeName = e, [s, Ry(a, ...n)];
}
function Ry(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const r = () => {
    const s = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(c) {
      const u = s.reduce((d, { useScope: h, scopeName: m }) => {
        const x = h(c)[`__scope${m}`];
        return { ...d, ...x };
      }, {});
      return k.useMemo(() => ({ [`__scope${n.scopeName}`]: u }), [u]);
    };
  };
  return r.scopeName = n.scopeName, r;
}
function qe(e) {
  const n = k.useRef(e);
  return k.useEffect(() => {
    n.current = e;
  }), k.useMemo(() => (...r) => n.current?.(...r), []);
}
function Qa({
  prop: e,
  defaultProp: n,
  onChange: r = () => {
  }
}) {
  const [s, a] = Oy({ defaultProp: n, onChange: r }), c = e !== void 0, u = c ? e : s, d = qe(r), h = k.useCallback(
    (m) => {
      if (c) {
        const x = typeof m == "function" ? m(e) : m;
        x !== e && d(x);
      } else
        a(m);
    },
    [c, e, a, d]
  );
  return [u, h];
}
function Oy({
  defaultProp: e,
  onChange: n
}) {
  const r = k.useState(e), [s] = r, a = k.useRef(s), c = qe(n);
  return k.useEffect(() => {
    a.current !== s && (c(s), a.current = s);
  }, [s, a, c]), r;
}
var Py = k.createContext(void 0);
function Ds(e) {
  const n = k.useContext(Py);
  return e || n || "ltr";
}
function Dy(e) {
  const n = k.useRef({ value: e, previous: e });
  return k.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var ci = globalThis?.document ? k.useLayoutEffect : () => {
};
function Ly(e) {
  const [n, r] = k.useState(void 0);
  return ci(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const c = a[0];
        let u, d;
        if ("borderBoxSize" in c) {
          const h = c.borderBoxSize, m = Array.isArray(h) ? h[0] : h;
          u = m.inlineSize, d = m.blockSize;
        } else
          u = e.offsetWidth, d = e.offsetHeight;
        r({ width: u, height: d });
      });
      return s.observe(e, { box: "border-box" }), () => s.unobserve(e);
    } else
      r(void 0);
  }, [e]), n;
}
var jy = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ue = jy.reduce((e, n) => {
  const r = k.forwardRef((s, a) => {
    const { asChild: c, ...u } = s, d = c ? ai : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(d, { ...u, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function ef(e) {
  const n = e + "CollectionProvider", [r, s] = gi(n), [a, c] = r(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), u = (C) => {
    const { scope: R, children: A } = C, E = je.useRef(null), P = je.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(a, { scope: R, itemMap: P, collectionRef: E, children: A });
  };
  u.displayName = n;
  const d = e + "CollectionSlot", h = je.forwardRef(
    (C, R) => {
      const { scope: A, children: E } = C, P = c(d, A), D = le(R, P.collectionRef);
      return /* @__PURE__ */ v.jsx(ai, { ref: D, children: E });
    }
  );
  h.displayName = d;
  const m = e + "CollectionItemSlot", b = "data-radix-collection-item", x = je.forwardRef(
    (C, R) => {
      const { scope: A, children: E, ...P } = C, D = je.useRef(null), N = le(R, D), z = c(m, A);
      return je.useEffect(() => (z.itemMap.set(D, { ref: D, ...P }), () => void z.itemMap.delete(D))), /* @__PURE__ */ v.jsx(ai, { [b]: "", ref: N, children: E });
    }
  );
  x.displayName = m;
  function S(C) {
    const R = c(e + "CollectionConsumer", C);
    return je.useCallback(() => {
      const E = R.collectionRef.current;
      if (!E) return [];
      const P = Array.from(E.querySelectorAll(`[${b}]`));
      return Array.from(R.itemMap.values()).sort(
        (z, K) => P.indexOf(z.ref.current) - P.indexOf(K.ref.current)
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [
    { Provider: u, Slot: h, ItemSlot: x },
    S,
    s
  ];
}
var nf = ["PageUp", "PageDown"], rf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], sf = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Mr = "Slider", [ka, Ny, Fy] = ef(Mr), [of, jS] = gi(Mr, [
  Fy
]), [zy, Ls] = of(Mr), af = k.forwardRef(
  (e, n) => {
    const {
      name: r,
      min: s = 0,
      max: a = 100,
      step: c = 1,
      orientation: u = "horizontal",
      disabled: d = !1,
      minStepsBetweenThumbs: h = 0,
      defaultValue: m = [s],
      value: b,
      onValueChange: x = () => {
      },
      onValueCommit: S = () => {
      },
      inverted: C = !1,
      form: R,
      ...A
    } = e, E = k.useRef(/* @__PURE__ */ new Set()), P = k.useRef(0), N = u === "horizontal" ? Hy : Uy, [z = [], K] = Qa({
      prop: b,
      defaultProp: m,
      onChange: (tt) => {
        [...E.current][P.current]?.focus(), x(tt);
      }
    }), Y = k.useRef(z);
    function q(tt) {
      const B = Gy(z, tt);
      Q(tt, B);
    }
    function Z(tt) {
      Q(tt, P.current);
    }
    function G() {
      const tt = Y.current[P.current];
      z[P.current] !== tt && S(z);
    }
    function Q(tt, B, { commit: dt } = { commit: !1 }) {
      const St = Ky(c), Pt = qy(Math.round((tt - s) / c) * c + s, St), wt = Ja(Pt, [s, a]);
      K((It = []) => {
        const Tt = $y(It, wt, B);
        if (Zy(Tt, h * c)) {
          P.current = Tt.indexOf(wt);
          const Et = String(Tt) !== String(It);
          return Et && dt && S(Tt), Et ? Tt : It;
        } else
          return It;
      });
    }
    return /* @__PURE__ */ v.jsx(
      zy,
      {
        scope: e.__scopeSlider,
        name: r,
        disabled: d,
        min: s,
        max: a,
        valueIndexToChangeRef: P,
        thumbs: E.current,
        values: z,
        orientation: u,
        form: R,
        children: /* @__PURE__ */ v.jsx(ka.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ v.jsx(ka.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ v.jsx(
          N,
          {
            "aria-disabled": d,
            "data-disabled": d ? "" : void 0,
            ...A,
            ref: n,
            onPointerDown: Ft(A.onPointerDown, () => {
              d || (Y.current = z);
            }),
            min: s,
            max: a,
            inverted: C,
            onSlideStart: d ? void 0 : q,
            onSlideMove: d ? void 0 : Z,
            onSlideEnd: d ? void 0 : G,
            onHomeKeyDown: () => !d && Q(s, 0, { commit: !0 }),
            onEndKeyDown: () => !d && Q(a, z.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: tt, direction: B }) => {
              if (!d) {
                const Pt = nf.includes(tt.key) || tt.shiftKey && rf.includes(tt.key) ? 10 : 1, wt = P.current, It = z[wt], Tt = c * Pt * B;
                Q(It + Tt, wt, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
af.displayName = Mr;
var [cf, lf] = of(Mr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Hy = k.forwardRef(
  (e, n) => {
    const {
      min: r,
      max: s,
      dir: a,
      inverted: c,
      onSlideStart: u,
      onSlideMove: d,
      onSlideEnd: h,
      onStepKeyDown: m,
      ...b
    } = e, [x, S] = k.useState(null), C = le(n, (N) => S(N)), R = k.useRef(void 0), A = Ds(a), E = A === "ltr", P = E && !c || !E && c;
    function D(N) {
      const z = R.current || x.getBoundingClientRect(), K = [0, z.width], q = tc(K, P ? [r, s] : [s, r]);
      return R.current = z, q(N - z.left);
    }
    return /* @__PURE__ */ v.jsx(
      cf,
      {
        scope: e.__scopeSlider,
        startEdge: P ? "left" : "right",
        endEdge: P ? "right" : "left",
        direction: P ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ v.jsx(
          uf,
          {
            dir: A,
            "data-orientation": "horizontal",
            ...b,
            ref: C,
            style: {
              ...b.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (N) => {
              const z = D(N.clientX);
              u?.(z);
            },
            onSlideMove: (N) => {
              const z = D(N.clientX);
              d?.(z);
            },
            onSlideEnd: () => {
              R.current = void 0, h?.();
            },
            onStepKeyDown: (N) => {
              const K = sf[P ? "from-left" : "from-right"].includes(N.key);
              m?.({ event: N, direction: K ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Uy = k.forwardRef(
  (e, n) => {
    const {
      min: r,
      max: s,
      inverted: a,
      onSlideStart: c,
      onSlideMove: u,
      onSlideEnd: d,
      onStepKeyDown: h,
      ...m
    } = e, b = k.useRef(null), x = le(n, b), S = k.useRef(void 0), C = !a;
    function R(A) {
      const E = S.current || b.current.getBoundingClientRect(), P = [0, E.height], N = tc(P, C ? [s, r] : [r, s]);
      return S.current = E, N(A - E.top);
    }
    return /* @__PURE__ */ v.jsx(
      cf,
      {
        scope: e.__scopeSlider,
        startEdge: C ? "bottom" : "top",
        endEdge: C ? "top" : "bottom",
        size: "height",
        direction: C ? 1 : -1,
        children: /* @__PURE__ */ v.jsx(
          uf,
          {
            "data-orientation": "vertical",
            ...m,
            ref: x,
            style: {
              ...m.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (A) => {
              const E = R(A.clientY);
              c?.(E);
            },
            onSlideMove: (A) => {
              const E = R(A.clientY);
              u?.(E);
            },
            onSlideEnd: () => {
              S.current = void 0, d?.();
            },
            onStepKeyDown: (A) => {
              const P = sf[C ? "from-bottom" : "from-top"].includes(A.key);
              h?.({ event: A, direction: P ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), uf = k.forwardRef(
  (e, n) => {
    const {
      __scopeSlider: r,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: c,
      onHomeKeyDown: u,
      onEndKeyDown: d,
      onStepKeyDown: h,
      ...m
    } = e, b = Ls(Mr, r);
    return /* @__PURE__ */ v.jsx(
      ue.span,
      {
        ...m,
        ref: n,
        onKeyDown: Ft(e.onKeyDown, (x) => {
          x.key === "Home" ? (u(x), x.preventDefault()) : x.key === "End" ? (d(x), x.preventDefault()) : nf.concat(rf).includes(x.key) && (h(x), x.preventDefault());
        }),
        onPointerDown: Ft(e.onPointerDown, (x) => {
          const S = x.target;
          S.setPointerCapture(x.pointerId), x.preventDefault(), b.thumbs.has(S) ? S.focus() : s(x);
        }),
        onPointerMove: Ft(e.onPointerMove, (x) => {
          x.target.hasPointerCapture(x.pointerId) && a(x);
        }),
        onPointerUp: Ft(e.onPointerUp, (x) => {
          const S = x.target;
          S.hasPointerCapture(x.pointerId) && (S.releasePointerCapture(x.pointerId), c(x));
        })
      }
    );
  }
), df = "SliderTrack", ff = k.forwardRef(
  (e, n) => {
    const { __scopeSlider: r, ...s } = e, a = Ls(df, r);
    return /* @__PURE__ */ v.jsx(
      ue.span,
      {
        "data-disabled": a.disabled ? "" : void 0,
        "data-orientation": a.orientation,
        ...s,
        ref: n
      }
    );
  }
);
ff.displayName = df;
var Ea = "SliderRange", hf = k.forwardRef(
  (e, n) => {
    const { __scopeSlider: r, ...s } = e, a = Ls(Ea, r), c = lf(Ea, r), u = k.useRef(null), d = le(n, u), h = a.values.length, m = a.values.map(
      (S) => gf(S, a.min, a.max)
    ), b = h > 1 ? Math.min(...m) : 0, x = 100 - Math.max(...m);
    return /* @__PURE__ */ v.jsx(
      ue.span,
      {
        "data-orientation": a.orientation,
        "data-disabled": a.disabled ? "" : void 0,
        ...s,
        ref: d,
        style: {
          ...e.style,
          [c.startEdge]: b + "%",
          [c.endEdge]: x + "%"
        }
      }
    );
  }
);
hf.displayName = Ea;
var Aa = "SliderThumb", pf = k.forwardRef(
  (e, n) => {
    const r = Ny(e.__scopeSlider), [s, a] = k.useState(null), c = le(n, (d) => a(d)), u = k.useMemo(
      () => s ? r().findIndex((d) => d.ref.current === s) : -1,
      [r, s]
    );
    return /* @__PURE__ */ v.jsx(Wy, { ...e, ref: c, index: u });
  }
), Wy = k.forwardRef(
  (e, n) => {
    const { __scopeSlider: r, index: s, name: a, ...c } = e, u = Ls(Aa, r), d = lf(Aa, r), [h, m] = k.useState(null), b = le(n, (D) => m(D)), x = h ? u.form || !!h.closest("form") : !0, S = Ly(h), C = u.values[s], R = C === void 0 ? 0 : gf(C, u.min, u.max), A = Vy(s, u.values.length), E = S?.[d.size], P = E ? Xy(E, R, d.direction) : 0;
    return k.useEffect(() => {
      if (h)
        return u.thumbs.add(h), () => {
          u.thumbs.delete(h);
        };
    }, [h, u.thumbs]), /* @__PURE__ */ v.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [d.startEdge]: `calc(${R}% + ${P}px)`
        },
        children: [
          /* @__PURE__ */ v.jsx(ka.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ v.jsx(
            ue.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || A,
              "aria-valuemin": u.min,
              "aria-valuenow": C,
              "aria-valuemax": u.max,
              "aria-orientation": u.orientation,
              "data-orientation": u.orientation,
              "data-disabled": u.disabled ? "" : void 0,
              tabIndex: u.disabled ? void 0 : 0,
              ...c,
              ref: b,
              style: C === void 0 ? { display: "none" } : e.style,
              onFocus: Ft(e.onFocus, () => {
                u.valueIndexToChangeRef.current = s;
              })
            }
          ) }),
          x && /* @__PURE__ */ v.jsx(
            By,
            {
              name: a ?? (u.name ? u.name + (u.values.length > 1 ? "[]" : "") : void 0),
              form: u.form,
              value: C
            },
            s
          )
        ]
      }
    );
  }
);
pf.displayName = Aa;
var By = (e) => {
  const { value: n, ...r } = e, s = k.useRef(null), a = Dy(n);
  return k.useEffect(() => {
    const c = s.current, u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
    if (a !== n && h) {
      const m = new Event("input", { bubbles: !0 });
      h.call(c, n), c.dispatchEvent(m);
    }
  }, [a, n]), /* @__PURE__ */ v.jsx("input", { style: { display: "none" }, ...r, ref: s, defaultValue: n });
};
function $y(e = [], n, r) {
  const s = [...e];
  return s[r] = n, s.sort((a, c) => a - c);
}
function gf(e, n, r) {
  const c = 100 / (r - n) * (e - n);
  return Ja(c, [0, 100]);
}
function Vy(e, n) {
  return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Gy(e, n) {
  if (e.length === 1) return 0;
  const r = e.map((a) => Math.abs(a - n)), s = Math.min(...r);
  return r.indexOf(s);
}
function Xy(e, n, r) {
  const s = e / 2, c = tc([0, 50], [0, s]);
  return (s - c(n) * r) * r;
}
function Yy(e) {
  return e.slice(0, -1).map((n, r) => e[r + 1] - n);
}
function Zy(e, n) {
  if (n > 0) {
    const r = Yy(e);
    return Math.min(...r) >= n;
  }
  return !0;
}
function tc(e, n) {
  return (r) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const s = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + s * (r - e[0]);
  };
}
function Ky(e) {
  return (String(e).split(".")[1] || "").length;
}
function qy(e, n) {
  const r = Math.pow(10, n);
  return Math.round(e * r) / r;
}
var mf = af, Jy = ff, Qy = hf, t5 = pf;
const e5 = k.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ v.jsxs(
  mf,
  {
    ref: r,
    className: ce(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx(Jy, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ v.jsx(Qy, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ v.jsx(t5, { className: "block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
e5.displayName = mf.displayName;
function n5(e, n) {
  return k.useReducer((r, s) => n[r][s] ?? r, e);
}
var Rr = (e) => {
  const { present: n, children: r } = e, s = r5(n), a = typeof r == "function" ? r({ present: s.isPresent }) : k.Children.only(r), c = le(s.ref, i5(a));
  return typeof r == "function" || s.isPresent ? k.cloneElement(a, { ref: c }) : null;
};
Rr.displayName = "Presence";
function r5(e) {
  const [n, r] = k.useState(), s = k.useRef({}), a = k.useRef(e), c = k.useRef("none"), u = e ? "mounted" : "unmounted", [d, h] = n5(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return k.useEffect(() => {
    const m = gs(s.current);
    c.current = d === "mounted" ? m : "none";
  }, [d]), ci(() => {
    const m = s.current, b = a.current;
    if (b !== e) {
      const S = c.current, C = gs(m);
      e ? h("MOUNT") : C === "none" || m?.display === "none" ? h("UNMOUNT") : h(b && S !== C ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, h]), ci(() => {
    if (n) {
      let m;
      const b = n.ownerDocument.defaultView ?? window, x = (C) => {
        const A = gs(s.current).includes(C.animationName);
        if (C.target === n && A && (h("ANIMATION_END"), !a.current)) {
          const E = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", m = b.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = E);
          });
        }
      }, S = (C) => {
        C.target === n && (c.current = gs(s.current));
      };
      return n.addEventListener("animationstart", S), n.addEventListener("animationcancel", x), n.addEventListener("animationend", x), () => {
        b.clearTimeout(m), n.removeEventListener("animationstart", S), n.removeEventListener("animationcancel", x), n.removeEventListener("animationend", x);
      };
    } else
      h("ANIMATION_END");
  }, [n, h]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: k.useCallback((m) => {
      m && (s.current = getComputedStyle(m)), r(m);
    }, [])
  };
}
function gs(e) {
  return e?.animationName || "none";
}
function i5(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function s5(e, n) {
  return k.useReducer((r, s) => n[r][s] ?? r, e);
}
var ec = "ScrollArea", [vf, NS] = gi(ec), [o5, Fe] = vf(ec), bf = k.forwardRef(
  (e, n) => {
    const {
      __scopeScrollArea: r,
      type: s = "hover",
      dir: a,
      scrollHideDelay: c = 600,
      ...u
    } = e, [d, h] = k.useState(null), [m, b] = k.useState(null), [x, S] = k.useState(null), [C, R] = k.useState(null), [A, E] = k.useState(null), [P, D] = k.useState(0), [N, z] = k.useState(0), [K, Y] = k.useState(!1), [q, Z] = k.useState(!1), G = le(n, (tt) => h(tt)), Q = Ds(a);
    return /* @__PURE__ */ v.jsx(
      o5,
      {
        scope: r,
        type: s,
        dir: Q,
        scrollHideDelay: c,
        scrollArea: d,
        viewport: m,
        onViewportChange: b,
        content: x,
        onContentChange: S,
        scrollbarX: C,
        onScrollbarXChange: R,
        scrollbarXEnabled: K,
        onScrollbarXEnabledChange: Y,
        scrollbarY: A,
        onScrollbarYChange: E,
        scrollbarYEnabled: q,
        onScrollbarYEnabledChange: Z,
        onCornerWidthChange: D,
        onCornerHeightChange: z,
        children: /* @__PURE__ */ v.jsx(
          ue.div,
          {
            dir: Q,
            ...u,
            ref: G,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": P + "px",
              "--radix-scroll-area-corner-height": N + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
bf.displayName = ec;
var yf = "ScrollAreaViewport", wf = k.forwardRef(
  (e, n) => {
    const { __scopeScrollArea: r, children: s, nonce: a, ...c } = e, u = Fe(yf, r), d = k.useRef(null), h = le(n, d, u.onViewportChange);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: a
        }
      ),
      /* @__PURE__ */ v.jsx(
        ue.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...c,
          ref: h,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ v.jsx("div", { ref: u.onContentChange, style: { minWidth: "100%", display: "table" }, children: s })
        }
      )
    ] });
  }
);
wf.displayName = yf;
var rn = "ScrollAreaScrollbar", js = k.forwardRef(
  (e, n) => {
    const { forceMount: r, ...s } = e, a = Fe(rn, e.__scopeScrollArea), { onScrollbarXEnabledChange: c, onScrollbarYEnabledChange: u } = a, d = e.orientation === "horizontal";
    return k.useEffect(() => (d ? c(!0) : u(!0), () => {
      d ? c(!1) : u(!1);
    }), [d, c, u]), a.type === "hover" ? /* @__PURE__ */ v.jsx(a5, { ...s, ref: n, forceMount: r }) : a.type === "scroll" ? /* @__PURE__ */ v.jsx(c5, { ...s, ref: n, forceMount: r }) : a.type === "auto" ? /* @__PURE__ */ v.jsx(xf, { ...s, ref: n, forceMount: r }) : a.type === "always" ? /* @__PURE__ */ v.jsx(nc, { ...s, ref: n }) : null;
  }
);
js.displayName = rn;
var a5 = k.forwardRef((e, n) => {
  const { forceMount: r, ...s } = e, a = Fe(rn, e.__scopeScrollArea), [c, u] = k.useState(!1);
  return k.useEffect(() => {
    const d = a.scrollArea;
    let h = 0;
    if (d) {
      const m = () => {
        window.clearTimeout(h), u(!0);
      }, b = () => {
        h = window.setTimeout(() => u(!1), a.scrollHideDelay);
      };
      return d.addEventListener("pointerenter", m), d.addEventListener("pointerleave", b), () => {
        window.clearTimeout(h), d.removeEventListener("pointerenter", m), d.removeEventListener("pointerleave", b);
      };
    }
  }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ v.jsx(Rr, { present: r || c, children: /* @__PURE__ */ v.jsx(
    xf,
    {
      "data-state": c ? "visible" : "hidden",
      ...s,
      ref: n
    }
  ) });
}), c5 = k.forwardRef((e, n) => {
  const { forceMount: r, ...s } = e, a = Fe(rn, e.__scopeScrollArea), c = e.orientation === "horizontal", u = Fs(() => h("SCROLL_END"), 100), [d, h] = s5("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return k.useEffect(() => {
    if (d === "idle") {
      const m = window.setTimeout(() => h("HIDE"), a.scrollHideDelay);
      return () => window.clearTimeout(m);
    }
  }, [d, a.scrollHideDelay, h]), k.useEffect(() => {
    const m = a.viewport, b = c ? "scrollLeft" : "scrollTop";
    if (m) {
      let x = m[b];
      const S = () => {
        const C = m[b];
        x !== C && (h("SCROLL"), u()), x = C;
      };
      return m.addEventListener("scroll", S), () => m.removeEventListener("scroll", S);
    }
  }, [a.viewport, c, h, u]), /* @__PURE__ */ v.jsx(Rr, { present: r || d !== "hidden", children: /* @__PURE__ */ v.jsx(
    nc,
    {
      "data-state": d === "hidden" ? "hidden" : "visible",
      ...s,
      ref: n,
      onPointerEnter: Ft(e.onPointerEnter, () => h("POINTER_ENTER")),
      onPointerLeave: Ft(e.onPointerLeave, () => h("POINTER_LEAVE"))
    }
  ) });
}), xf = k.forwardRef((e, n) => {
  const r = Fe(rn, e.__scopeScrollArea), { forceMount: s, ...a } = e, [c, u] = k.useState(!1), d = e.orientation === "horizontal", h = Fs(() => {
    if (r.viewport) {
      const m = r.viewport.offsetWidth < r.viewport.scrollWidth, b = r.viewport.offsetHeight < r.viewport.scrollHeight;
      u(d ? m : b);
    }
  }, 10);
  return kr(r.viewport, h), kr(r.content, h), /* @__PURE__ */ v.jsx(Rr, { present: s || c, children: /* @__PURE__ */ v.jsx(
    nc,
    {
      "data-state": c ? "visible" : "hidden",
      ...a,
      ref: n
    }
  ) });
}), nc = k.forwardRef((e, n) => {
  const { orientation: r = "vertical", ...s } = e, a = Fe(rn, e.__scopeScrollArea), c = k.useRef(null), u = k.useRef(0), [d, h] = k.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), m = Tf(d.viewport, d.content), b = {
    ...s,
    sizes: d,
    onSizesChange: h,
    hasThumb: m > 0 && m < 1,
    onThumbChange: (S) => c.current = S,
    onThumbPointerUp: () => u.current = 0,
    onThumbPointerDown: (S) => u.current = S
  };
  function x(S, C) {
    return p5(S, u.current, d, C);
  }
  return r === "horizontal" ? /* @__PURE__ */ v.jsx(
    l5,
    {
      ...b,
      ref: n,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const S = a.viewport.scrollLeft, C = ad(S, d, a.dir);
          c.current.style.transform = `translate3d(${C}px, 0, 0)`;
        }
      },
      onWheelScroll: (S) => {
        a.viewport && (a.viewport.scrollLeft = S);
      },
      onDragScroll: (S) => {
        a.viewport && (a.viewport.scrollLeft = x(S, a.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ v.jsx(
    u5,
    {
      ...b,
      ref: n,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const S = a.viewport.scrollTop, C = ad(S, d);
          c.current.style.transform = `translate3d(0, ${C}px, 0)`;
        }
      },
      onWheelScroll: (S) => {
        a.viewport && (a.viewport.scrollTop = S);
      },
      onDragScroll: (S) => {
        a.viewport && (a.viewport.scrollTop = x(S));
      }
    }
  ) : null;
}), l5 = k.forwardRef((e, n) => {
  const { sizes: r, onSizesChange: s, ...a } = e, c = Fe(rn, e.__scopeScrollArea), [u, d] = k.useState(), h = k.useRef(null), m = le(n, h, c.onScrollbarXChange);
  return k.useEffect(() => {
    h.current && d(getComputedStyle(h.current));
  }, [h]), /* @__PURE__ */ v.jsx(
    Sf,
    {
      "data-orientation": "horizontal",
      ...a,
      ref: m,
      sizes: r,
      style: {
        bottom: 0,
        left: c.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: c.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ns(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (b) => e.onThumbPointerDown(b.x),
      onDragScroll: (b) => e.onDragScroll(b.x),
      onWheelScroll: (b, x) => {
        if (c.viewport) {
          const S = c.viewport.scrollLeft + b.deltaX;
          e.onWheelScroll(S), kf(S, x) && b.preventDefault();
        }
      },
      onResize: () => {
        h.current && c.viewport && u && s({
          content: c.viewport.scrollWidth,
          viewport: c.viewport.offsetWidth,
          scrollbar: {
            size: h.current.clientWidth,
            paddingStart: xs(u.paddingLeft),
            paddingEnd: xs(u.paddingRight)
          }
        });
      }
    }
  );
}), u5 = k.forwardRef((e, n) => {
  const { sizes: r, onSizesChange: s, ...a } = e, c = Fe(rn, e.__scopeScrollArea), [u, d] = k.useState(), h = k.useRef(null), m = le(n, h, c.onScrollbarYChange);
  return k.useEffect(() => {
    h.current && d(getComputedStyle(h.current));
  }, [h]), /* @__PURE__ */ v.jsx(
    Sf,
    {
      "data-orientation": "vertical",
      ...a,
      ref: m,
      sizes: r,
      style: {
        top: 0,
        right: c.dir === "ltr" ? 0 : void 0,
        left: c.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ns(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (b) => e.onThumbPointerDown(b.y),
      onDragScroll: (b) => e.onDragScroll(b.y),
      onWheelScroll: (b, x) => {
        if (c.viewport) {
          const S = c.viewport.scrollTop + b.deltaY;
          e.onWheelScroll(S), kf(S, x) && b.preventDefault();
        }
      },
      onResize: () => {
        h.current && c.viewport && u && s({
          content: c.viewport.scrollHeight,
          viewport: c.viewport.offsetHeight,
          scrollbar: {
            size: h.current.clientHeight,
            paddingStart: xs(u.paddingTop),
            paddingEnd: xs(u.paddingBottom)
          }
        });
      }
    }
  );
}), [d5, _f] = vf(rn), Sf = k.forwardRef((e, n) => {
  const {
    __scopeScrollArea: r,
    sizes: s,
    hasThumb: a,
    onThumbChange: c,
    onThumbPointerUp: u,
    onThumbPointerDown: d,
    onThumbPositionChange: h,
    onDragScroll: m,
    onWheelScroll: b,
    onResize: x,
    ...S
  } = e, C = Fe(rn, r), [R, A] = k.useState(null), E = le(n, (G) => A(G)), P = k.useRef(null), D = k.useRef(""), N = C.viewport, z = s.content - s.viewport, K = qe(b), Y = qe(h), q = Fs(x, 10);
  function Z(G) {
    if (P.current) {
      const Q = G.clientX - P.current.left, tt = G.clientY - P.current.top;
      m({ x: Q, y: tt });
    }
  }
  return k.useEffect(() => {
    const G = (Q) => {
      const tt = Q.target;
      R?.contains(tt) && K(Q, z);
    };
    return document.addEventListener("wheel", G, { passive: !1 }), () => document.removeEventListener("wheel", G, { passive: !1 });
  }, [N, R, z, K]), k.useEffect(Y, [s, Y]), kr(R, q), kr(C.content, q), /* @__PURE__ */ v.jsx(
    d5,
    {
      scope: r,
      scrollbar: R,
      hasThumb: a,
      onThumbChange: qe(c),
      onThumbPointerUp: qe(u),
      onThumbPositionChange: Y,
      onThumbPointerDown: qe(d),
      children: /* @__PURE__ */ v.jsx(
        ue.div,
        {
          ...S,
          ref: E,
          style: { position: "absolute", ...S.style },
          onPointerDown: Ft(e.onPointerDown, (G) => {
            G.button === 0 && (G.target.setPointerCapture(G.pointerId), P.current = R.getBoundingClientRect(), D.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", C.viewport && (C.viewport.style.scrollBehavior = "auto"), Z(G));
          }),
          onPointerMove: Ft(e.onPointerMove, Z),
          onPointerUp: Ft(e.onPointerUp, (G) => {
            const Q = G.target;
            Q.hasPointerCapture(G.pointerId) && Q.releasePointerCapture(G.pointerId), document.body.style.webkitUserSelect = D.current, C.viewport && (C.viewport.style.scrollBehavior = ""), P.current = null;
          })
        }
      )
    }
  );
}), ws = "ScrollAreaThumb", rc = k.forwardRef(
  (e, n) => {
    const { forceMount: r, ...s } = e, a = _f(ws, e.__scopeScrollArea);
    return /* @__PURE__ */ v.jsx(Rr, { present: r || a.hasThumb, children: /* @__PURE__ */ v.jsx(f5, { ref: n, ...s }) });
  }
), f5 = k.forwardRef(
  (e, n) => {
    const { __scopeScrollArea: r, style: s, ...a } = e, c = Fe(ws, r), u = _f(ws, r), { onThumbPositionChange: d } = u, h = le(
      n,
      (x) => u.onThumbChange(x)
    ), m = k.useRef(void 0), b = Fs(() => {
      m.current && (m.current(), m.current = void 0);
    }, 100);
    return k.useEffect(() => {
      const x = c.viewport;
      if (x) {
        const S = () => {
          if (b(), !m.current) {
            const C = g5(x, d);
            m.current = C, d();
          }
        };
        return d(), x.addEventListener("scroll", S), () => x.removeEventListener("scroll", S);
      }
    }, [c.viewport, b, d]), /* @__PURE__ */ v.jsx(
      ue.div,
      {
        "data-state": u.hasThumb ? "visible" : "hidden",
        ...a,
        ref: h,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...s
        },
        onPointerDownCapture: Ft(e.onPointerDownCapture, (x) => {
          const C = x.target.getBoundingClientRect(), R = x.clientX - C.left, A = x.clientY - C.top;
          u.onThumbPointerDown({ x: R, y: A });
        }),
        onPointerUp: Ft(e.onPointerUp, u.onThumbPointerUp)
      }
    );
  }
);
rc.displayName = ws;
var ic = "ScrollAreaCorner", If = k.forwardRef(
  (e, n) => {
    const r = Fe(ic, e.__scopeScrollArea), s = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && s ? /* @__PURE__ */ v.jsx(h5, { ...e, ref: n }) : null;
  }
);
If.displayName = ic;
var h5 = k.forwardRef((e, n) => {
  const { __scopeScrollArea: r, ...s } = e, a = Fe(ic, r), [c, u] = k.useState(0), [d, h] = k.useState(0), m = !!(c && d);
  return kr(a.scrollbarX, () => {
    const b = a.scrollbarX?.offsetHeight || 0;
    a.onCornerHeightChange(b), h(b);
  }), kr(a.scrollbarY, () => {
    const b = a.scrollbarY?.offsetWidth || 0;
    a.onCornerWidthChange(b), u(b);
  }), m ? /* @__PURE__ */ v.jsx(
    ue.div,
    {
      ...s,
      ref: n,
      style: {
        width: c,
        height: d,
        position: "absolute",
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function xs(e) {
  return e ? parseInt(e, 10) : 0;
}
function Tf(e, n) {
  const r = e / n;
  return isNaN(r) ? 0 : r;
}
function Ns(e) {
  const n = Tf(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, s = (e.scrollbar.size - r) * n;
  return Math.max(s, 18);
}
function p5(e, n, r, s = "ltr") {
  const a = Ns(r), c = a / 2, u = n || c, d = a - u, h = r.scrollbar.paddingStart + u, m = r.scrollbar.size - r.scrollbar.paddingEnd - d, b = r.content - r.viewport, x = s === "ltr" ? [0, b] : [b * -1, 0];
  return Cf([h, m], x)(e);
}
function ad(e, n, r = "ltr") {
  const s = Ns(n), a = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, c = n.scrollbar.size - a, u = n.content - n.viewport, d = c - s, h = r === "ltr" ? [0, u] : [u * -1, 0], m = Ja(e, h);
  return Cf([0, u], [0, d])(m);
}
function Cf(e, n) {
  return (r) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const s = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + s * (r - e[0]);
  };
}
function kf(e, n) {
  return e > 0 && e < n;
}
var g5 = (e, n = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, s = 0;
  return function a() {
    const c = { left: e.scrollLeft, top: e.scrollTop }, u = r.left !== c.left, d = r.top !== c.top;
    (u || d) && n(), r = c, s = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(s);
};
function Fs(e, n) {
  const r = qe(e), s = k.useRef(0);
  return k.useEffect(() => () => window.clearTimeout(s.current), []), k.useCallback(() => {
    window.clearTimeout(s.current), s.current = window.setTimeout(r, n);
  }, [r, n]);
}
function kr(e, n) {
  const r = qe(n);
  ci(() => {
    let s = 0;
    if (e) {
      const a = new ResizeObserver(() => {
        cancelAnimationFrame(s), s = window.requestAnimationFrame(r);
      });
      return a.observe(e), () => {
        window.cancelAnimationFrame(s), a.unobserve(e);
      };
    }
  }, [e, r]);
}
var _s = bf, Ma = wf, cd = js, ld = rc, m5 = If;
const Or = k.forwardRef(({ className: e, children: n, ...r }, s) => /* @__PURE__ */ v.jsxs(
  _s,
  {
    ref: s,
    className: ce("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ v.jsx(Ma, { className: "h-full w-full rounded-[inherit]", children: n }),
      /* @__PURE__ */ v.jsx(Ef, {}),
      /* @__PURE__ */ v.jsx(m5, {})
    ]
  }
));
Or.displayName = _s.displayName;
const Ef = k.forwardRef(({ className: e, orientation: n = "vertical", ...r }, s) => /* @__PURE__ */ v.jsx(
  js,
  {
    ref: s,
    orientation: n,
    className: ce(
      "flex touch-none select-none transition-colors",
      n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ v.jsx(rc, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Ef.displayName = js.displayName;
const zs = ({
  children: e,
  renderCustomPreview: n,
  data: r = {},
  shouldDisplayPreview: s = !0
}) => {
  const [a, c] = ee(!1), [u, d] = ee({ x: 0, y: 0 }), h = Ve(null), S = jb(e, {
    draggable: !0,
    onDragStart: (C) => {
      c(!0), C.dataTransfer.setDragImage(new Image(), 0, 0), C.dataTransfer.setData(JSON.stringify(r), JSON.stringify(r)), d({
        x: C.clientX,
        y: C.clientY
      });
    },
    onDragEnd: () => {
      c(!1);
    },
    onDrag: (C) => {
      a && d({
        x: C.clientX,
        y: C.clientY
      });
    },
    style: {
      ...e.props.style
    }
  });
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    S,
    a && s && n ? Fb(
      /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: h,
          style: {
            position: "fixed",
            left: u.x,
            top: u.y,
            pointerEvents: "none",
            zIndex: 9999,
            transform: "translate(-50%, -50%)"
            // Center the preview
          },
          children: n
        }
      ),
      document.body
    ) : null
  ] });
};
var v5 = k.useId || (() => {
}), b5 = 0;
function Af(e) {
  const [n, r] = k.useState(v5());
  return ci(() => {
    r((s) => s ?? String(b5++));
  }, [e]), n ? `radix-${n}` : "";
}
var pa = "rovingFocusGroup.onEntryFocus", y5 = { bubbles: !1, cancelable: !0 }, Hs = "RovingFocusGroup", [Ra, Mf, w5] = ef(Hs), [x5, Rf] = gi(
  Hs,
  [w5]
), [_5, S5] = x5(Hs), Of = k.forwardRef(
  (e, n) => /* @__PURE__ */ v.jsx(Ra.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(Ra.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(I5, { ...e, ref: n }) }) })
);
Of.displayName = Hs;
var I5 = k.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: s,
    loop: a = !1,
    dir: c,
    currentTabStopId: u,
    defaultCurrentTabStopId: d,
    onCurrentTabStopIdChange: h,
    onEntryFocus: m,
    preventScrollOnEntryFocus: b = !1,
    ...x
  } = e, S = k.useRef(null), C = le(n, S), R = Ds(c), [A = null, E] = Qa({
    prop: u,
    defaultProp: d,
    onChange: h
  }), [P, D] = k.useState(!1), N = qe(m), z = Mf(r), K = k.useRef(!1), [Y, q] = k.useState(0);
  return k.useEffect(() => {
    const Z = S.current;
    if (Z)
      return Z.addEventListener(pa, N), () => Z.removeEventListener(pa, N);
  }, [N]), /* @__PURE__ */ v.jsx(
    _5,
    {
      scope: r,
      orientation: s,
      dir: R,
      loop: a,
      currentTabStopId: A,
      onItemFocus: k.useCallback(
        (Z) => E(Z),
        [E]
      ),
      onItemShiftTab: k.useCallback(() => D(!0), []),
      onFocusableItemAdd: k.useCallback(
        () => q((Z) => Z + 1),
        []
      ),
      onFocusableItemRemove: k.useCallback(
        () => q((Z) => Z - 1),
        []
      ),
      children: /* @__PURE__ */ v.jsx(
        ue.div,
        {
          tabIndex: P || Y === 0 ? -1 : 0,
          "data-orientation": s,
          ...x,
          ref: C,
          style: { outline: "none", ...e.style },
          onMouseDown: Ft(e.onMouseDown, () => {
            K.current = !0;
          }),
          onFocus: Ft(e.onFocus, (Z) => {
            const G = !K.current;
            if (Z.target === Z.currentTarget && G && !P) {
              const Q = new CustomEvent(pa, y5);
              if (Z.currentTarget.dispatchEvent(Q), !Q.defaultPrevented) {
                const tt = z().filter((wt) => wt.focusable), B = tt.find((wt) => wt.active), dt = tt.find((wt) => wt.id === A), Pt = [B, dt, ...tt].filter(
                  Boolean
                ).map((wt) => wt.ref.current);
                Lf(Pt, b);
              }
            }
            K.current = !1;
          }),
          onBlur: Ft(e.onBlur, () => D(!1))
        }
      )
    }
  );
}), Pf = "RovingFocusGroupItem", Df = k.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: s = !0,
      active: a = !1,
      tabStopId: c,
      ...u
    } = e, d = Af(), h = c || d, m = S5(Pf, r), b = m.currentTabStopId === h, x = Mf(r), { onFocusableItemAdd: S, onFocusableItemRemove: C } = m;
    return k.useEffect(() => {
      if (s)
        return S(), () => C();
    }, [s, S, C]), /* @__PURE__ */ v.jsx(
      Ra.ItemSlot,
      {
        scope: r,
        id: h,
        focusable: s,
        active: a,
        children: /* @__PURE__ */ v.jsx(
          ue.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": m.orientation,
            ...u,
            ref: n,
            onMouseDown: Ft(e.onMouseDown, (R) => {
              s ? m.onItemFocus(h) : R.preventDefault();
            }),
            onFocus: Ft(e.onFocus, () => m.onItemFocus(h)),
            onKeyDown: Ft(e.onKeyDown, (R) => {
              if (R.key === "Tab" && R.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (R.target !== R.currentTarget) return;
              const A = k5(R, m.orientation, m.dir);
              if (A !== void 0) {
                if (R.metaKey || R.ctrlKey || R.altKey || R.shiftKey) return;
                R.preventDefault();
                let P = x().filter((D) => D.focusable).map((D) => D.ref.current);
                if (A === "last") P.reverse();
                else if (A === "prev" || A === "next") {
                  A === "prev" && P.reverse();
                  const D = P.indexOf(R.currentTarget);
                  P = m.loop ? E5(P, D + 1) : P.slice(D + 1);
                }
                setTimeout(() => Lf(P));
              }
            })
          }
        )
      }
    );
  }
);
Df.displayName = Pf;
var T5 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function C5(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function k5(e, n, r) {
  const s = C5(e.key, r);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s)))
    return T5[s];
}
function Lf(e, n = !1) {
  const r = document.activeElement;
  for (const s of e)
    if (s === r || (s.focus({ preventScroll: n }), document.activeElement !== r)) return;
}
function E5(e, n) {
  return e.map((r, s) => e[(n + s) % e.length]);
}
var A5 = Of, M5 = Df, sc = "Tabs", [R5, FS] = gi(sc, [
  Rf
]), jf = Rf(), [O5, oc] = R5(sc), Nf = k.forwardRef(
  (e, n) => {
    const {
      __scopeTabs: r,
      value: s,
      onValueChange: a,
      defaultValue: c,
      orientation: u = "horizontal",
      dir: d,
      activationMode: h = "automatic",
      ...m
    } = e, b = Ds(d), [x, S] = Qa({
      prop: s,
      onChange: a,
      defaultProp: c
    });
    return /* @__PURE__ */ v.jsx(
      O5,
      {
        scope: r,
        baseId: Af(),
        value: x,
        onValueChange: S,
        orientation: u,
        dir: b,
        activationMode: h,
        children: /* @__PURE__ */ v.jsx(
          ue.div,
          {
            dir: b,
            "data-orientation": u,
            ...m,
            ref: n
          }
        )
      }
    );
  }
);
Nf.displayName = sc;
var Ff = "TabsList", zf = k.forwardRef(
  (e, n) => {
    const { __scopeTabs: r, loop: s = !0, ...a } = e, c = oc(Ff, r), u = jf(r);
    return /* @__PURE__ */ v.jsx(
      A5,
      {
        asChild: !0,
        ...u,
        orientation: c.orientation,
        dir: c.dir,
        loop: s,
        children: /* @__PURE__ */ v.jsx(
          ue.div,
          {
            role: "tablist",
            "aria-orientation": c.orientation,
            ...a,
            ref: n
          }
        )
      }
    );
  }
);
zf.displayName = Ff;
var Hf = "TabsTrigger", Uf = k.forwardRef(
  (e, n) => {
    const { __scopeTabs: r, value: s, disabled: a = !1, ...c } = e, u = oc(Hf, r), d = jf(r), h = $f(u.baseId, s), m = Vf(u.baseId, s), b = s === u.value;
    return /* @__PURE__ */ v.jsx(
      M5,
      {
        asChild: !0,
        ...d,
        focusable: !a,
        active: b,
        children: /* @__PURE__ */ v.jsx(
          ue.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": b,
            "aria-controls": m,
            "data-state": b ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: h,
            ...c,
            ref: n,
            onMouseDown: Ft(e.onMouseDown, (x) => {
              !a && x.button === 0 && x.ctrlKey === !1 ? u.onValueChange(s) : x.preventDefault();
            }),
            onKeyDown: Ft(e.onKeyDown, (x) => {
              [" ", "Enter"].includes(x.key) && u.onValueChange(s);
            }),
            onFocus: Ft(e.onFocus, () => {
              const x = u.activationMode !== "manual";
              !b && !a && x && u.onValueChange(s);
            })
          }
        )
      }
    );
  }
);
Uf.displayName = Hf;
var Wf = "TabsContent", Bf = k.forwardRef(
  (e, n) => {
    const { __scopeTabs: r, value: s, forceMount: a, children: c, ...u } = e, d = oc(Wf, r), h = $f(d.baseId, s), m = Vf(d.baseId, s), b = s === d.value, x = k.useRef(b);
    return k.useEffect(() => {
      const S = requestAnimationFrame(() => x.current = !1);
      return () => cancelAnimationFrame(S);
    }, []), /* @__PURE__ */ v.jsx(Rr, { present: a || b, children: ({ present: S }) => /* @__PURE__ */ v.jsx(
      ue.div,
      {
        "data-state": b ? "active" : "inactive",
        "data-orientation": d.orientation,
        role: "tabpanel",
        "aria-labelledby": h,
        hidden: !S,
        id: m,
        tabIndex: 0,
        ...u,
        ref: n,
        style: {
          ...e.style,
          animationDuration: x.current ? "0s" : void 0
        },
        children: S && c
      }
    ) });
  }
);
Bf.displayName = Wf;
function $f(e, n) {
  return `${e}-trigger-${n}`;
}
function Vf(e, n) {
  return `${e}-content-${n}`;
}
var P5 = Nf, Gf = zf, Xf = Uf, Yf = Bf;
const D5 = P5, Zf = k.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ v.jsx(
  Gf,
  {
    ref: r,
    className: ce(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...n
  }
));
Zf.displayName = Gf.displayName;
const Oa = k.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ v.jsx(
  Xf,
  {
    ref: r,
    className: ce(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...n
  }
));
Oa.displayName = Xf.displayName;
const Pa = k.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ v.jsx(
  Yf,
  {
    ref: r,
    className: ce(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...n
  }
));
Pa.displayName = Yf.displayName;
const zS = "add", HS = "track", US = "trackItems", WS = "track:changed", BS = "trackItems:changed", $S = "state", VS = "state:changed", L5 = "add", Kf = "add:text", mi = "add:video", vi = "add:audio", GS = "add:placeholder", bi = "add:image", XS = "add:mask", YS = "add:transition", ZS = "add:animation", KS = "edit", qS = "edit:object", JS = "edit:text", QS = "edit:shape", t6 = "enterEditMode", j5 = "player", qf = "player:play", Jf = "player:pause", N5 = "player:seek", e6 = "player:seekTo", F5 = "player:seekBy", z5 = "player:togglePlay", H5 = "active", n6 = "active:set", Qf = "active:delete", r6 = "active:paste", th = "active:clone", eh = "active:split", U5 = "layer", i6 = "layer:locked", s6 = "layer:hidden", o6 = "layer:move", a6 = "layer:select", nh = "layer:selection", c6 = "layer:sendTo", l6 = "layer:rename", u6 = "layer:editingName", d6 = "layer:copy", f6 = "layer:paste", h6 = "layer:clone", p6 = "layer:split", g6 = "layer:cut", m6 = "layer:delete", W5 = "history", rh = "history:undo", ih = "history:redo", v6 = "history:reset", B5 = "scale", sh = "scale:changed", $5 = "drag", oh = "drag:start", Ss = "drag:end", V5 = "timeline", ah = "timeline:boundingChanged";
var Da = function(e, n) {
  return Da = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a]);
  }, Da(e, n);
};
function Pr(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Da(e, n);
  function r() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
function La(e) {
  var n = typeof Symbol == "function" && Symbol.iterator, r = n && e[n], s = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ja(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var s = r.call(e), a, c = [], u;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = s.next()).done; ) c.push(a.value);
  } catch (d) {
    u = { error: d };
  } finally {
    try {
      a && !a.done && (r = s.return) && r.call(s);
    } finally {
      if (u) throw u.error;
    }
  }
  return c;
}
function Na(e, n, r) {
  if (r || arguments.length === 2) for (var s = 0, a = n.length, c; s < a; s++)
    (c || !(s in n)) && (c || (c = Array.prototype.slice.call(n, 0, s)), c[s] = n[s]);
  return e.concat(c || Array.prototype.slice.call(n));
}
function Je(e) {
  return typeof e == "function";
}
function ch(e) {
  var n = function(s) {
    Error.call(s), s.stack = new Error().stack;
  }, r = e(n);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var ga = ch(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(s, a) {
      return a + 1 + ") " + s.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Fa(e, n) {
  if (e) {
    var r = e.indexOf(n);
    0 <= r && e.splice(r, 1);
  }
}
var Us = function() {
  function e(n) {
    this.initialTeardown = n, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var n, r, s, a, c;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var d = La(u), h = d.next(); !h.done; h = d.next()) {
              var m = h.value;
              m.remove(this);
            }
          } catch (A) {
            n = { error: A };
          } finally {
            try {
              h && !h.done && (r = d.return) && r.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
        else
          u.remove(this);
      var b = this.initialTeardown;
      if (Je(b))
        try {
          b();
        } catch (A) {
          c = A instanceof ga ? A.errors : [A];
        }
      var x = this._finalizers;
      if (x) {
        this._finalizers = null;
        try {
          for (var S = La(x), C = S.next(); !C.done; C = S.next()) {
            var R = C.value;
            try {
              ud(R);
            } catch (A) {
              c = c ?? [], A instanceof ga ? c = Na(Na([], ja(c)), ja(A.errors)) : c.push(A);
            }
          }
        } catch (A) {
          s = { error: A };
        } finally {
          try {
            C && !C.done && (a = S.return) && a.call(S);
          } finally {
            if (s) throw s.error;
          }
        }
      }
      if (c)
        throw new ga(c);
    }
  }, e.prototype.add = function(n) {
    var r;
    if (n && n !== this)
      if (this.closed)
        ud(n);
      else {
        if (n instanceof e) {
          if (n.closed || n._hasParent(this))
            return;
          n._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(n);
      }
  }, e.prototype._hasParent = function(n) {
    var r = this._parentage;
    return r === n || Array.isArray(r) && r.includes(n);
  }, e.prototype._addParent = function(n) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(n), r) : r ? [r, n] : n;
  }, e.prototype._removeParent = function(n) {
    var r = this._parentage;
    r === n ? this._parentage = null : Array.isArray(r) && Fa(r, n);
  }, e.prototype.remove = function(n) {
    var r = this._finalizers;
    r && Fa(r, n), n instanceof e && n._removeParent(this);
  }, e.EMPTY = function() {
    var n = new e();
    return n.closed = !0, n;
  }(), e;
}(), lh = Us.EMPTY;
function uh(e) {
  return e instanceof Us || e && "closed" in e && Je(e.remove) && Je(e.add) && Je(e.unsubscribe);
}
function ud(e) {
  Je(e) ? e() : e.unsubscribe();
}
var G5 = {
  Promise: void 0
}, X5 = {
  setTimeout: function(e, n) {
    for (var r = [], s = 2; s < arguments.length; s++)
      r[s - 2] = arguments[s];
    return setTimeout.apply(void 0, Na([e, n], ja(r)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function Y5(e) {
  X5.setTimeout(function() {
    throw e;
  });
}
function dd() {
}
function bs(e) {
  e();
}
var ac = function(e) {
  Pr(n, e);
  function n(r) {
    var s = e.call(this) || this;
    return s.isStopped = !1, r ? (s.destination = r, uh(r) && r.add(s)) : s.destination = q5, s;
  }
  return n.create = function(r, s, a) {
    return new za(r, s, a);
  }, n.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, n.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, n.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, n.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, n.prototype._next = function(r) {
    this.destination.next(r);
  }, n.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, n.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, n;
}(Us), Z5 = function() {
  function e(n) {
    this.partialObserver = n;
  }
  return e.prototype.next = function(n) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(n);
      } catch (s) {
        ms(s);
      }
  }, e.prototype.error = function(n) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(n);
      } catch (s) {
        ms(s);
      }
    else
      ms(n);
  }, e.prototype.complete = function() {
    var n = this.partialObserver;
    if (n.complete)
      try {
        n.complete();
      } catch (r) {
        ms(r);
      }
  }, e;
}(), za = function(e) {
  Pr(n, e);
  function n(r, s, a) {
    var c = e.call(this) || this, u;
    return Je(r) || !r ? u = {
      next: r ?? void 0,
      error: s ?? void 0,
      complete: a ?? void 0
    } : u = r, c.destination = new Z5(u), c;
  }
  return n;
}(ac);
function ms(e) {
  Y5(e);
}
function K5(e) {
  throw e;
}
var q5 = {
  closed: !0,
  next: dd,
  error: K5,
  complete: dd
}, J5 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Q5(e) {
  return e;
}
function tw(e) {
  return e.length === 0 ? Q5 : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(s, a) {
      return a(s);
    }, r);
  };
}
var fd = function() {
  function e(n) {
    n && (this._subscribe = n);
  }
  return e.prototype.lift = function(n) {
    var r = new e();
    return r.source = this, r.operator = n, r;
  }, e.prototype.subscribe = function(n, r, s) {
    var a = this, c = nw(n) ? n : new za(n, r, s);
    return bs(function() {
      var u = a, d = u.operator, h = u.source;
      c.add(d ? d.call(c, h) : h ? a._subscribe(c) : a._trySubscribe(c));
    }), c;
  }, e.prototype._trySubscribe = function(n) {
    try {
      return this._subscribe(n);
    } catch (r) {
      n.error(r);
    }
  }, e.prototype.forEach = function(n, r) {
    var s = this;
    return r = hd(r), new r(function(a, c) {
      var u = new za({
        next: function(d) {
          try {
            n(d);
          } catch (h) {
            c(h), u.unsubscribe();
          }
        },
        error: c,
        complete: a
      });
      s.subscribe(u);
    });
  }, e.prototype._subscribe = function(n) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n);
  }, e.prototype[J5] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var n = [], r = 0; r < arguments.length; r++)
      n[r] = arguments[r];
    return tw(n)(this);
  }, e.prototype.toPromise = function(n) {
    var r = this;
    return n = hd(n), new n(function(s, a) {
      var c;
      r.subscribe(function(u) {
        return c = u;
      }, function(u) {
        return a(u);
      }, function() {
        return s(c);
      });
    });
  }, e.create = function(n) {
    return new e(n);
  }, e;
}();
function hd(e) {
  var n;
  return (n = e ?? G5.Promise) !== null && n !== void 0 ? n : Promise;
}
function ew(e) {
  return e && Je(e.next) && Je(e.error) && Je(e.complete);
}
function nw(e) {
  return e && e instanceof ac || ew(e) && uh(e);
}
function rw(e) {
  return Je(e?.lift);
}
function iw(e) {
  return function(n) {
    if (rw(n))
      return n.lift(function(r) {
        try {
          return e(r, this);
        } catch (s) {
          this.error(s);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function sw(e, n, r, s, a) {
  return new ow(e, n, r, s, a);
}
var ow = function(e) {
  Pr(n, e);
  function n(r, s, a, c, u, d) {
    var h = e.call(this, r) || this;
    return h.onFinalize = u, h.shouldUnsubscribe = d, h._next = s ? function(m) {
      try {
        s(m);
      } catch (b) {
        r.error(b);
      }
    } : e.prototype._next, h._error = c ? function(m) {
      try {
        c(m);
      } catch (b) {
        r.error(b);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, h._complete = a ? function() {
      try {
        a();
      } catch (m) {
        r.error(m);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, h;
  }
  return n.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var s = this.closed;
      e.prototype.unsubscribe.call(this), !s && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, n;
}(ac), aw = ch(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), cc = function(e) {
  Pr(n, e);
  function n() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return n.prototype.lift = function(r) {
    var s = new pd(this, this);
    return s.operator = r, s;
  }, n.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new aw();
  }, n.prototype.next = function(r) {
    var s = this;
    bs(function() {
      var a, c;
      if (s._throwIfClosed(), !s.isStopped) {
        s.currentObservers || (s.currentObservers = Array.from(s.observers));
        try {
          for (var u = La(s.currentObservers), d = u.next(); !d.done; d = u.next()) {
            var h = d.value;
            h.next(r);
          }
        } catch (m) {
          a = { error: m };
        } finally {
          try {
            d && !d.done && (c = u.return) && c.call(u);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    });
  }, n.prototype.error = function(r) {
    var s = this;
    bs(function() {
      if (s._throwIfClosed(), !s.isStopped) {
        s.hasError = s.isStopped = !0, s.thrownError = r;
        for (var a = s.observers; a.length; )
          a.shift().error(r);
      }
    });
  }, n.prototype.complete = function() {
    var r = this;
    bs(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var s = r.observers; s.length; )
          s.shift().complete();
      }
    });
  }, n.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(n.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, n.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, n.prototype._innerSubscribe = function(r) {
    var s = this, a = this, c = a.hasError, u = a.isStopped, d = a.observers;
    return c || u ? lh : (this.currentObservers = null, d.push(r), new Us(function() {
      s.currentObservers = null, Fa(d, r);
    }));
  }, n.prototype._checkFinalizedStatuses = function(r) {
    var s = this, a = s.hasError, c = s.thrownError, u = s.isStopped;
    a ? r.error(c) : u && r.complete();
  }, n.prototype.asObservable = function() {
    var r = new fd();
    return r.source = this, r;
  }, n.create = function(r, s) {
    return new pd(r, s);
  }, n;
}(fd), pd = function(e) {
  Pr(n, e);
  function n(r, s) {
    var a = e.call(this) || this;
    return a.destination = r, a.source = s, a;
  }
  return n.prototype.next = function(r) {
    var s, a;
    (a = (s = this.destination) === null || s === void 0 ? void 0 : s.next) === null || a === void 0 || a.call(s, r);
  }, n.prototype.error = function(r) {
    var s, a;
    (a = (s = this.destination) === null || s === void 0 ? void 0 : s.error) === null || a === void 0 || a.call(s, r);
  }, n.prototype.complete = function() {
    var r, s;
    (s = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || s === void 0 || s.call(r);
  }, n.prototype._subscribe = function(r) {
    var s, a;
    return (a = (s = this.source) === null || s === void 0 ? void 0 : s.subscribe(r)) !== null && a !== void 0 ? a : lh;
  }, n;
}(cc), gd = function(e) {
  Pr(n, e);
  function n(r) {
    var s = e.call(this) || this;
    return s._value = r, s;
  }
  return Object.defineProperty(n.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._subscribe = function(r) {
    var s = e.prototype._subscribe.call(this, r);
    return !s.closed && r.next(this._value), s;
  }, n.prototype.getValue = function() {
    var r = this, s = r.hasError, a = r.thrownError, c = r._value;
    if (s)
      throw a;
    return this._throwIfClosed(), c;
  }, n.prototype.next = function(r) {
    e.prototype.next.call(this, this._value = r);
  }, n;
}(cc);
function wn(e, n) {
  return iw(function(r, s) {
    var a = 0;
    r.subscribe(sw(s, function(c) {
      return e.call(n, c, a++) && s.next(c);
    }));
  });
}
const dh = new cc(), cw = (e, n) => {
  dh.next({ key: e, value: n });
}, pt = {
  subject: dh,
  dispatch: cw
}, qt = [];
for (let e = 0; e < 256; ++e)
  qt.push((e + 256).toString(16).slice(1));
function lw(e, n = 0) {
  return (qt[e[n + 0]] + qt[e[n + 1]] + qt[e[n + 2]] + qt[e[n + 3]] + "-" + qt[e[n + 4]] + qt[e[n + 5]] + "-" + qt[e[n + 6]] + qt[e[n + 7]] + "-" + qt[e[n + 8]] + qt[e[n + 9]] + "-" + qt[e[n + 10]] + qt[e[n + 11]] + qt[e[n + 12]] + qt[e[n + 13]] + qt[e[n + 14]] + qt[e[n + 15]]).toLowerCase();
}
let ma;
const uw = new Uint8Array(16);
function dw() {
  if (!ma) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ma = crypto.getRandomValues.bind(crypto);
  }
  return ma(uw);
}
const fw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), md = { randomUUID: fw };
function Xt(e, n, r) {
  if (md.randomUUID && !e)
    return md.randomUUID();
  e = e || {};
  const s = e.random ?? e.rng?.() ?? dw();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, lw(s);
}
var fh = /* @__PURE__ */ ((e) => (e.IMAGE = "image", e.VIDEO = "video", e.AUDIO = "audio", e))(fh || {});
const hw = (e) => {
  const [n, r] = ee(!1), [s, a] = ee(!1), c = Tr((b) => {
    const x = { ...b, id: Xt() };
    switch (b.type) {
      case "image":
        pt.dispatch(bi, { payload: x });
        break;
      case "video":
        pt.dispatch(mi, { payload: x });
        break;
      case "audio":
        pt.dispatch(vi, { payload: x });
        break;
    }
  }, []), u = Tr(
    (b) => {
      b.preventDefault();
      try {
        const x = b.dataTransfer?.types[0], S = JSON.parse(x);
        if (!Object.values(fh).includes(S.type))
          return;
        a(!0), r(!0), e?.(!0);
      } catch (x) {
        console.error("Error parsing dragged data:", x);
      }
    },
    [e]
  ), d = Tr(
    (b) => {
      b.preventDefault(), n && (a(!0), e?.(!0));
    },
    [n, e]
  ), h = Tr(
    (b) => {
      if (s) {
        b.preventDefault(), a(!1), e?.(!1);
        try {
          const x = b.dataTransfer?.types[0], S = JSON.parse(
            b.dataTransfer.getData(x)
          );
          c(S);
        } catch (x) {
          console.error("Error parsing dropped data:", x);
        }
      }
    },
    [s, e, c]
  ), m = Tr(
    (b) => {
      b.preventDefault(), b.currentTarget.contains(b.relatedTarget) || (a(!1), r(!1), e?.(!1));
    },
    [e]
  );
  return { onDragEnter: u, onDragOver: d, onDrop: h, onDragLeave: m, isDraggingOver: s };
}, pw = ({
  children: e,
  className: n,
  style: r,
  onDragStateChange: s,
  id: a
}) => {
  const { onDragEnter: c, onDragOver: u, onDrop: d, onDragLeave: h } = hw(s);
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      id: a,
      onDragEnter: c,
      onDrop: d,
      onDragOver: u,
      onDragLeave: h,
      className: n,
      style: r,
      role: "region",
      "aria-label": "Droppable area for images, videos, and audio",
      children: e
    }
  );
}, b6 = ({
  size: e,
  children: n
}) => {
  const [r, s] = ee(!1);
  return /* @__PURE__ */ v.jsxs(
    pw,
    {
      id: "artboard",
      onDragStateChange: s,
      style: {
        width: e.width,
        height: e.height
      },
      className: "designcombo_scene pointer-events-auto mt-3.5 bg-black",
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            style: {
              width: e.width,
              height: e.height
            },
            className: `pointer-events-none absolute z-50 mt-3.5 transition-colors duration-200 ease-in-out ${r ? "border-4 border-dashed border-white bg-white/[0.075]" : "bg-transparent"} shadow-[0_0_0_5000px_#1D1D1F]`
          }
        ),
        n
      ]
    }
  );
}, y6 = 100, w6 = 30, x6 = 18, _6 = 14, S6 = 30, I6 = 24, T6 = 16, gw = 12, C6 = "Regular", mw = "sans-serif", Ws = 188, Ha = 40, k6 = 4e3, vw = 1920, bw = 1080, yw = 60, ww = 1e3 / yw, E6 = 2e6, A6 = 1e7, M6 = 48e3, R6 = 192e3, hh = 2.3, O6 = vw / hh, P6 = bw / hh, D6 = 184, L6 = 348, j6 = 512, N6 = 300, F6 = 0, z6 = 5e3, H6 = 1, U6 = 0, W6 = 0, B6 = 0, $6 = 359, V6 = 1, G6 = 0, X6 = !1, Y6 = !1, Z6 = 0, K6 = 2, q6 = 0.01, J6 = 1, Q6 = 0, t7 = 3, e7 = 0.01, n7 = 1, r7 = 0, i7 = 1, s7 = 0.01, o7 = 0.5, a7 = -1e3, c7 = 1e3, l7 = 1, u7 = 1, d7 = 0, f7 = 1, h7 = 0.01, p7 = 1, g7 = 0, m7 = 1, v7 = 0.01, b7 = 0, y7 = 0.5, w7 = 10, x7 = 0.01, _7 = 1, S7 = 0, I7 = 1, T7 = 0.01, C7 = 1, lc = 16, vd = 80;
function xw(e) {
  if (!e) return "0";
  const n = e / Ws, r = Math.trunc(n) % 60, s = Math.trunc(n / 60) % 60, a = Math.trunc(n / 3600) % 60, u = [
    Math.trunc(n / 216e3).toString(),
    a.toString(),
    s.toString(),
    r.toString()
  ];
  return n < 60 ? `${u[3].padStart(2, "0")}f` : n < 3600 ? `${u[2].padStart(1, "0")}s` : n < 216e3 ? `${u[1].padStart(2, "0")}:${u[2].padStart(
    2,
    "0"
  )}` : `${u[0].padStart(2, "0")}:${u[1].padStart(
    2,
    "0"
  )}:${u[2].padStart(2, "0")}`;
}
function k7(e, n = !1) {
  if (!e) return "00:00";
  const s = 1e3 / 60;
  if (e < 1e3)
    return n ? `${Math.floor(e / s)}f` : `${(e / 1e3).toFixed(1)}s`;
  const a = Math.floor(e / 1e3);
  if (a < 60)
    return `${a}s`;
  const c = Math.floor(a / 60);
  if (c < 60) {
    const m = a % 60;
    return `${c.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }
  const u = Math.floor(c / 60), d = c % 60, h = a % 60;
  return `${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
}
function Is(e, n) {
  return e.map((r) => ({
    ...r,
    items: r.items.filter((s) => !n.includes(s))
  }));
}
const _w = ({ frame: e }, { fps: n }) => {
  const r = e / n, s = Math.floor(r / 3600), a = r % 3600, c = Math.floor(a / 60), u = Math.floor(a % 60), d = Math.floor(
    (a - Math.floor(a)) * 100
  );
  return s > 0 ? `${s}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}` : `${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
}, Sw = ({ time: e }) => {
  const n = e / 1e3, r = Math.floor(n / 3600), s = n % 3600, a = Math.floor(s / 60), c = Math.floor(s % 60), u = Math.floor(
    (s - Math.floor(s)) * 100
  );
  return r > 0 ? `${r}:${a.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}` : `${a.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
}, Iw = () => {
  const e = document.getElementById("video-current-time");
  return (e ? parseFloat(e.getAttribute("data-current-time") ?? "") : 0) * 1e3;
}, tn = [
  {
    // 1x distance (minute 0 to minute 5, 5 segments).
    index: 0,
    unit: 18e3,
    zoom: 1 / 18e3,
    segments: 5
  },
  {
    // 1x distance (minute 0 to minute 3, 3 segments).
    index: 1,
    unit: 10800,
    zoom: 1 / 10800,
    segments: 3
  },
  {
    // 1x distance (minute 0 to minute 2, 2 segments).
    index: 2,
    unit: 7200,
    zoom: 1 / 7200,
    segments: 2
  },
  {
    // 1x distance (minute 0 to minute 1, 1 segment).
    index: 3,
    unit: 3600,
    zoom: 1 / 3600,
    segments: 1
  },
  {
    // 1x distance (second 0 to second 30, 2 segments).
    index: 4,
    unit: 1800,
    zoom: 1 / 1800,
    segments: 2
  },
  {
    // 1x distance (second 0 to second 15, 3 segments).
    index: 5,
    unit: 900,
    zoom: 1 / 900,
    segments: 3
  },
  {
    // 1x distance (second 0 to second 10, 2 segments).
    index: 6,
    unit: 600,
    zoom: 1 / 600,
    segments: 2
  },
  {
    // 1x distance (second 0 to second 5, 5 segments).
    index: 7,
    unit: 300,
    zoom: 1 / 300,
    segments: 5
  },
  {
    // 1x distance (second 0 to second 3, 3 segments).
    index: 8,
    unit: 180,
    zoom: 1 / 180,
    segments: 3
  },
  {
    // 1x distance (second 0 to second 2, 2 segments).
    index: 9,
    unit: 120,
    zoom: 1 / 120,
    segments: 10
  },
  {
    // 1x distance (second 0 to second 1, 1 segment).
    index: 10,
    unit: 60,
    zoom: 1 / 60,
    segments: 5
  },
  {
    // 1x distance (second 0 to second 1, 1 segment).
    index: 11,
    unit: 60,
    zoom: 1 / 60,
    segments: 5
  },
  {
    // 1x distance (frame 0 to frame 30, 2 segments).
    index: 12,
    unit: 30,
    zoom: 1 / 30,
    segments: 2
  },
  {
    // 1x distance (frame 0 to frame 15, 3 segments).
    index: 13,
    unit: 15,
    zoom: 1 / 15,
    segments: 3
  },
  {
    // 1x distance (frame 0 to frame 10, 2 segments).
    index: 14,
    unit: 10,
    zoom: 1 / 10,
    segments: 2
  },
  {
    // 1x distance (frame 0 to frame 5, 5 segments).
    index: 15,
    unit: 5,
    zoom: 1 / 5,
    segments: 5
  },
  {
    // 1x distance (frame 0 to frame 3, 3 segments).
    index: 16,
    unit: 3,
    zoom: 1 / 3,
    segments: 3
  },
  {
    // 1x distance (frame 0 to frame 2, 2 segments).
    index: 17,
    unit: 2,
    zoom: 1 / 2,
    segments: 5
  },
  {
    // 1x distance (frame 0 to frame 1, 1 segment).
    index: 18,
    unit: 1,
    zoom: 1,
    segments: 5
  },
  {
    // 2x distance (frame 0 to frame 1, 1 segment).
    index: 19,
    unit: 1,
    zoom: 2,
    segments: 5
  },
  {
    // 4x distance (frame 0 to frame 1, 1 segment).
    index: 20,
    unit: 1,
    zoom: 4,
    segments: 10
  }
];
function ph(e, n) {
  let r = -1, s = e.length - 1;
  for (; 1 + r < s; ) {
    const a = r + (s - r >> 1);
    n(e[a], a, e) ? s = a : r = a;
  }
  return s;
}
function E7(e, n = 1) {
  const r = () => {
    const h = Math.max(0, Ha), b = document.getElementById(
      "designcombo-timeline-canvas"
    )?.offsetWidth ?? document.body.offsetWidth;
    return Math.max(1, b - h);
  }, s = () => typeof e == "number" ? Wt(e, n) : Mw(e, n), a = r() / s(), c = n * a;
  return {
    segments: 5,
    index: ph(tn, (d) => d.zoom > c),
    zoom: c,
    unit: 1 / c
  };
}
function A7(e) {
  return tn[e];
}
function Tw(e) {
  return Cw(e) || tn[0];
}
const Cw = (e) => {
  const n = tn.filter(
    (s) => s.zoom < e.zoom
  );
  return n.length === 0 ? null : n.reduce(
    (s, a) => a.zoom > s.zoom ? a : s
  );
}, kw = (e) => {
  const n = tn.filter(
    (s) => s.zoom > e.zoom
  );
  return n.length === 0 ? null : n.reduce(
    (s, a) => a.zoom < s.zoom ? a : s
  );
};
function Ew(e) {
  return kw(e) || tn[tn.length - 1];
}
function M7(e) {
  const n = tn.at(-1), r = e === n, a = Aw(e) - (r ? 1 : 2);
  return Math.max(0, a);
}
function Aw(e) {
  const n = ph(tn, (r) => r.zoom > e.zoom);
  return Math.min(tn.length - 1, n);
}
function Wt(e, n = 1, r = 1) {
  const s = Ws * n;
  return e * (60 / 1e3) * s / r;
}
function er(e, n = 1) {
  const r = Ws * n;
  return e / r * ww;
}
function Mw(e, n = 1) {
  return Wt(e, n);
}
const R7 = Math.floor(Math.random() * 1e3) + 1;
function gh(e, n = 1) {
  const r = [], s = Math.floor(n), a = (c, u) => {
    for (const d of c)
      Array.isArray(d) && u < s ? a(d, u + 1) : r.push(d);
  };
  return a(e, 0), r;
}
function mh(e, n) {
  const r = n.sort((a, c) => a.tempIndex - c.tempIndex), s = [];
  for (const a of r)
    a.tempIndex < 0 && s.push(a);
  s.push(e);
  for (const a of r)
    a.tempIndex >= 0 && s.push(a);
  return s;
}
const bd = {
  id: "font_UwdNKSyVq2iiMiuHSRRsUIOu",
  family: "Roboto",
  fullName: "Roboto Bold",
  postScriptName: "Roboto-Bold",
  preview: "https://ik.imagekit.io/lh/fonts/v2/5zQgS86djScKA0ri67BBCqW7.png",
  style: "Roboto-Bold",
  url: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
  category: "sans-serif",
  createdAt: "2023-06-20T04:42:55.909Z",
  updatedAt: "2023-06-20T04:42:55.909Z",
  userId: null
}, Rw = (e) => {
  const n = e.map(
    (r) => new FontFace(r.fontFamily, `url(${r.fontUrl})`).load()
    // .catch((error: unknown) => error),
  );
  return n.length === 0 ? Promise.resolve(!0) : new Promise((r, s) => {
    Promise.all(n).then((a) => {
      a.forEach((c) => {
        c instanceof FontFace && c.family && (document.fonts.add(c), r(!0));
      });
    }).catch((a) => {
      s(a);
    });
  });
}, xn = $d((e) => ({
  timeline: null,
  size: {
    width: 1080,
    height: 1920
  },
  duration: 5e3,
  fps: 30,
  scale: {
    // 1x distance (second 0 to second 5, 5 segments).
    index: 7,
    unit: 300,
    zoom: 1 / 300,
    segments: 5
  },
  scroll: {
    left: 0,
    top: 0
  },
  playerRef: null,
  activeIds: [],
  targetIds: [],
  tracks: [],
  trackItemIds: [],
  transitionIds: [],
  transitionsMap: {},
  trackItemDetailsMap: {},
  trackItemsMap: {},
  setTimeline: (n) => {
    e(() => ({
      timeline: n
    }));
  },
  setScale: (n) => {
    e(() => ({
      scale: n
    }));
  },
  setScroll: (n) => {
    e(() => ({
      scroll: n
    }));
  },
  setState: async (n) => {
    e({ ...n });
  },
  setPlayerRef: (n) => {
    e({ playerRef: n });
  }
}));
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vh = (...e) => e.filter((n, r, s) => !!n && n.trim() !== "" && s.indexOf(n) === r).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = Bd(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: a = "",
    children: c,
    iconNode: u,
    ...d
  }, h) => Sa(
    "svg",
    {
      ref: h,
      ...Pw,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: s ? Number(r) * 24 / Number(n) : r,
      className: vh("lucide", a),
      ...d
    },
    [
      ...u.map(([m, b]) => Sa(m, b)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e, n) => {
  const r = Bd(
    ({ className: s, ...a }, c) => Sa(Dw, {
      ref: c,
      iconNode: n,
      className: vh(`lucide-${Ow(e)}`, s),
      ...a
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lw = de("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = de("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bh = de("Music", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nw = de("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = de("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = de("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hw = de("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = de("SquareSplitHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uw = de("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ww = de("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = de("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bw = de("Video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = de("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = de("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gw = de("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), uc = (e) => {
  const n = Tr(
    (s) => {
      if (!e?.current)
        return () => {
        };
      const a = () => {
        s();
      };
      return e.current.addEventListener("frameupdate", a), () => {
        e.current && e.current.removeEventListener("frameupdate", a);
      };
    },
    [e]
  );
  return Nb(
    n,
    () => e?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
}, Bs = () => {
  const [e, n] = ee(!1);
  return Ne(() => {
    const s = pt.subject.pipe(
      wn(({ key: a }) => a.startsWith($5))
    ).subscribe((a) => {
      a.key === oh ? n(!0) : a.key === Ss && n(!1);
    });
    return () => s.unsubscribe();
  }, []), e;
}, Xw = () => {
  const [e, n] = ee(!1), { duration: r, fps: s, scale: a, playerRef: c, activeIds: u } = xn(), d = uc(c), h = () => {
    pt.dispatch(Qf);
  }, m = () => {
    pt.dispatch(eh, {
      payload: {},
      options: {
        time: Iw()
      }
    });
  }, b = (C) => {
    pt.dispatch(sh, {
      payload: {
        scale: C
      }
    });
  }, x = () => {
    pt.dispatch(qf);
  }, S = () => {
    pt.dispatch(Jf);
  };
  return Ne(() => (c?.current?.addEventListener("play", () => {
    n(!0);
  }), c?.current?.addEventListener("pause", () => {
    n(!1);
  }), () => {
    c?.current?.removeEventListener("play", () => {
      n(!0);
    }), c?.current?.removeEventListener("pause", () => {
      n(!1);
    });
  }), [c]), /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        position: "relative",
        height: "50px",
        boxShadow: "inset 0 1px 0 0 #27272a",
        flex: "none"
      },
      className: "bg-background",
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          style: {
            position: "absolute",
            height: 50,
            width: "100%",
            display: "flex",
            alignItems: "center"
          },
          children: /* @__PURE__ */ v.jsxs(
            "div",
            {
              style: {
                height: 36,
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 260px 1fr",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ v.jsxs("div", { className: "flex px-2", children: [
                  /* @__PURE__ */ v.jsxs(
                    Lt,
                    {
                      disabled: !u.length,
                      onClick: h,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(Uw, { size: 14 }),
                        " Delete"
                      ]
                    }
                  ),
                  /* @__PURE__ */ v.jsxs(
                    Lt,
                    {
                      disabled: !u.length,
                      onClick: m,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(yd, { size: 15 }),
                        " Split"
                      ]
                    }
                  ),
                  /* @__PURE__ */ v.jsxs(
                    Lt,
                    {
                      disabled: !u.length,
                      onClick: () => {
                        pt.dispatch(th);
                      },
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(yd, { size: 15 }),
                        " Clone"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-center", children: [
                  /* @__PURE__ */ v.jsxs("div", { children: [
                    /* @__PURE__ */ v.jsx(
                      Lt,
                      {
                        onClick: h,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ v.jsx(zw, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Lt,
                      {
                        onClick: () => {
                          if (e)
                            return S();
                          x();
                        },
                        variant: "ghost",
                        size: "icon",
                        children: e ? /* @__PURE__ */ v.jsx(Nw, { size: 14 }) : /* @__PURE__ */ v.jsx(Fw, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Lt,
                      {
                        onClick: m,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ v.jsx(Hw, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsxs(
                    "div",
                    {
                      className: "text-xs font-light",
                      style: {
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "54px 4px 54px",
                        paddingTop: "2px",
                        justifyContent: "center"
                      },
                      children: [
                        /* @__PURE__ */ v.jsx(
                          "div",
                          {
                            className: "font-medium text-zinc-200",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            "data-current-time": d / s,
                            id: "video-current-time",
                            children: _w({ frame: d }, { fps: s })
                          }
                        ),
                        /* @__PURE__ */ v.jsx("span", { children: "/" }),
                        /* @__PURE__ */ v.jsx(
                          "div",
                          {
                            className: "text-muted-foreground",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            children: Sw({ time: r })
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx(
                  Yw,
                  {
                    scale: a,
                    onChangeTimelineScale: b,
                    duration: r
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, Yw = ({
  scale: e,
  onChangeTimelineScale: n,
  duration: r
}) => {
  const s = () => {
    const c = Tw(e);
    n(c);
  }, a = () => {
    const c = Ew(e);
    n(c);
  };
  return /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ v.jsxs("div", { className: "flex border-l border-border pl-4 pr-2", children: [
    /* @__PURE__ */ v.jsx(
      Lt,
      {
        size: "icon",
        variant: "ghost",
        onClick: s,
        disabled: e.index === 0,
        children: /* @__PURE__ */ v.jsx(Gw, { size: 16 })
      }
    ),
    /* @__PURE__ */ v.jsx(
      Lt,
      {
        size: "icon",
        variant: "ghost",
        onClick: a,
        disabled: e.index === 20,
        children: /* @__PURE__ */ v.jsx(Vw, { size: 16 })
      }
    )
  ] }) });
}, Zw = [
  {
    id: "1",
    details: {
      src: "https://cdn.designcombo.dev/audio/Dawn%20of%20change.mp3",
      text: "Voiceover"
    },
    name: "Dawn of change",
    type: "audio",
    metadata: {
      author: "Roman Senyk"
    },
    display: { from: 3e3 }
  },
  {
    id: "2",
    details: {
      src: "https://cdn.designcombo.dev/audio/Hope.mp3"
    },
    name: "Hope",
    type: "audio",
    metadata: {
      author: "Hugo Dujardin"
    }
  },
  {
    id: "3",
    details: {
      src: "https://cdn.designcombo.dev/audio/Tenderness.mp3"
    },
    name: "Tenderness",
    type: "audio",
    metadata: {
      author: "Benjamin Tissot"
    }
  },
  {
    id: "4",
    details: {
      src: "https://cdn.designcombo.dev/audio/Piano%20Moment.mp3"
    },
    name: "Piano moment",
    type: "audio",
    metadata: {
      author: "Benjamin Tissot"
    }
  }
], Kw = [
  {
    id: "1",
    details: { src: "https://ik.imagekit.io/wombo/images/img1.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img1.jpg?tr=w-190",
    type: "image"
  },
  {
    id: "2",
    details: { src: "https://ik.imagekit.io/wombo/images/img2.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img2.jpg?tr=w-190",
    type: "image"
  },
  {
    id: "3",
    details: { src: "https://ik.imagekit.io/wombo/images/img3.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img3.jpg?tr=w-190",
    type: "image"
  },
  {
    id: "4",
    details: { src: "https://ik.imagekit.io/wombo/images/img4.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img4.jpg?tr=w-190",
    type: "image"
  },
  {
    id: "5",
    details: { src: "https://ik.imagekit.io/wombo/images/img5.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img5.jpg?tr=w-190",
    type: "image"
  },
  ,
  {
    id: "6",
    details: { src: "https://ik.imagekit.io/wombo/images/img6.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img6.jpg?tr=w-190",
    type: "image"
  },
  {
    id: "7",
    details: { src: "https://ik.imagekit.io/wombo/images/img7.jpg" },
    preview: "https://ik.imagekit.io/wombo/images/img7.jpg?tr=w-190",
    type: "image"
  }
], qw = [
  {
    id: "1",
    details: {
      src: "https://cdn.designcombo.dev/videos/demo-video-1.mp4",
      text: "Scene"
    },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-1.png",
    duration: 17e3,
    display: { from: 3e3 }
  },
  {
    id: "2",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-2.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-2.png"
  },
  {
    id: "3",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-3.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-3.png",
    duration: 2e4
  },
  {
    id: "4",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-4.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-4.png",
    duration: 2e4
  },
  {
    id: "5",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-5.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-5.png",
    duration: 23e3
  },
  {
    id: "6",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-6.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-6.png",
    duration: 1e4
  },
  {
    id: "7",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-7.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-7.png",
    duration: 12e3
  },
  {
    id: "8",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-8.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-8.png",
    duration: 15e3
  },
  {
    id: "9",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-9.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-9.png",
    duration: 15e3
  },
  {
    id: "10",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-10.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-10.png",
    duration: 5e3
  },
  {
    id: "11",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-11.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-11.png",
    duration: 5e3
  }
], Jw = [
  {
    id: "1",
    kind: "none",
    duration: 0,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/transition-none.png",
    type: "transition"
  },
  {
    id: "2",
    kind: "fade",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/fade.webp",
    type: "transition"
  },
  {
    id: "3",
    kind: "slide",
    name: "slide up",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/slide-up.webp",
    type: "transition",
    direction: "from-bottom"
  },
  {
    id: "4",
    kind: "slide",
    name: "slide down",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/slide-down.webp",
    type: "transition",
    direction: "from-top"
  },
  {
    id: "5",
    kind: "slide",
    name: "slide left",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/slide-left.webp",
    type: "transition",
    direction: "from-right"
  },
  {
    id: "6",
    kind: "slide",
    name: "slide right",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/slide-right.webp",
    type: "transition",
    direction: "from-left"
  },
  {
    id: "7",
    kind: "wipe",
    name: "wipe up",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/wipe-up.webp",
    type: "transition",
    direction: "from-bottom"
  },
  {
    id: "8",
    kind: "wipe",
    name: "wipe down",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/wipe-down.webp",
    type: "transition",
    direction: "from-top"
  },
  {
    id: "9",
    kind: "wipe",
    name: "wipe left",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/wipe-left.webp",
    type: "transition",
    direction: "from-right"
  },
  {
    id: "10",
    kind: "wipe",
    name: "wipe right",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/wipe-right.webp",
    type: "transition",
    direction: "from-left"
  },
  {
    id: "11",
    kind: "flip",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/flip.webp",
    type: "transition"
  },
  {
    id: "12",
    kind: "clockWipe",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/clock-wipe.webp",
    type: "transition"
  },
  {
    id: "13",
    kind: "star",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/star.webp",
    type: "transition"
  },
  {
    id: "14",
    kind: "circle",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/circle.webp",
    type: "transition"
  },
  {
    id: "15",
    kind: "rectangle",
    duration: 0.5,
    preview: "https://ik.imagekit.io/wombo/transitions-v2/rectangle.webp",
    type: "transition"
  }
], O7 = [
  {
    id: "1",
    src: "https://ik.imagekit.io/snapmotion/upload-video-1.mp4",
    type: "video"
  },
  {
    id: "2",
    src: "https://ik.imagekit.io/snapmotion/upload-video-2.mp4",
    type: "video"
  },
  {
    id: "3",
    src: "https://ik.imagekit.io/snapmotion/upload-video-3.mp4",
    type: "video"
  }
], Qw = () => {
  const e = Bs();
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col overflow-auto", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Transitions" }),
    /* @__PURE__ */ v.jsx(Or, { children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-3 gap-2 px-4", children: Jw.map((n, r) => /* @__PURE__ */ v.jsx(
      t3,
      {
        transition: n,
        shouldDisplayPreview: !e
      },
      r
    )) }) })
  ] });
}, t3 = ({
  transition: e,
  shouldDisplayPreview: n
}) => {
  const r = je.useMemo(
    () => ({
      backgroundImage: `url(${e.preview})`,
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    [e.preview]
  );
  return /* @__PURE__ */ v.jsx(
    zs,
    {
      data: e,
      renderCustomPreview: /* @__PURE__ */ v.jsx("div", { style: r }),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
          "div",
          {
            style: r,
            draggable: !1
          }
        ) }),
        /* @__PURE__ */ v.jsx("div", { className: "flex h-6 items-center overflow-ellipsis text-nowrap text-[12px] capitalize text-muted-foreground", children: e.name || e.type })
      ] })
    }
  );
}, e3 = () => {
  const e = () => {
    pt.dispatch(Kf, {
      payload: {
        id: Xt(),
        display: {
          from: 0,
          to: 5e3
        },
        details: {
          text: "Heading and some body",
          fontSize: 120,
          width: 600,
          fontUrl: bd.url,
          fontFamily: bd.postScriptName,
          color: "#ffffff",
          wordWrap: "break-word",
          textAlign: "center",
          borderWidth: 0,
          borderColor: "#000000",
          boxShadow: {
            color: "#ffffff",
            x: 0,
            y: 0,
            blur: 0
          }
        }
      },
      options: {}
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Text" }),
    /* @__PURE__ */ v.jsx("div", { className: "flex flex-col gap-2 px-4", children: /* @__PURE__ */ v.jsx(
      Lt,
      {
        draggable: !1,
        onClick: e,
        variant: "secondary",
        className: "w-full",
        children: "Add text"
      }
    ) })
  ] });
}, n3 = () => {
  const e = Ve(null), n = (s) => {
    r(s);
  }, r = async (s) => {
    const a = s[0].type;
    a.includes("audio") && pt.dispatch(vi, {
      payload: {
        id: Xt(),
        details: {
          src: URL.createObjectURL(s[0]),
          volume: 50
        }
      }
    }), a.includes("video") && pt.dispatch(mi, {
      payload: {
        id: Xt(),
        display: {
          from: 2e3,
          to: 7e3
        },
        details: {
          src: URL.createObjectURL(s[0]),
          name: s[0].name
        }
      }
    }), a.includes("image") && pt.dispatch(bi, {
      payload: {
        id: Xt(),
        details: {
          src: URL.createObjectURL(s[0])
        }
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Your media" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: e,
        id: "file-upload-handle",
        type: "file",
        accept: "audio/*,video/*,image/*",
        onChange: (s) => n(Array.from(s.target.files || [])),
        className: "hidden"
      }
    ),
    /* @__PURE__ */ v.jsx("div", { className: "px-4 py-2", children: /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs(
      D5,
      {
        defaultValue: "projects",
        className: "w-full",
        children: [
          /* @__PURE__ */ v.jsxs(Zf, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ v.jsx(Oa, { value: "projects", children: "Project" }),
            /* @__PURE__ */ v.jsx(Oa, { value: "workspace", children: "Workspace" })
          ] }),
          /* @__PURE__ */ v.jsxs(Pa, { value: "projects", children: [
            /* @__PURE__ */ v.jsxs(
              Lt,
              {
                onClick: () => {
                  e.current?.click();
                },
                className: "flex w-full gap-2",
                variant: "secondary",
                children: [
                  /* @__PURE__ */ v.jsx(wd, { size: 16 }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ v.jsx("div", {})
          ] }),
          /* @__PURE__ */ v.jsx(Pa, { value: "workspace", children: /* @__PURE__ */ v.jsxs(
            Lt,
            {
              onClick: () => {
                e.current?.click();
              },
              className: "flex w-full gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ v.jsx(wd, { size: 16 }),
                " Upload"
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ v.jsx(Or, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4" }) })
  ] });
}, r3 = () => {
  const e = Bs(), n = (r) => {
    pt.dispatch(vi, {
      payload: r,
      options: {}
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audios" }),
    /* @__PURE__ */ v.jsx(Or, { children: /* @__PURE__ */ v.jsx("div", { className: "flex flex-col px-2", children: Zw.map((r, s) => /* @__PURE__ */ v.jsx(
      i3,
      {
        shouldDisplayPreview: !e,
        handleAddAudio: n,
        audio: r
      },
      s
    )) }) })
  ] });
}, i3 = ({
  handleAddAudio: e,
  audio: n,
  shouldDisplayPreview: r
}) => {
  const s = je.useMemo(
    () => ({
      backgroundImage: "url(https://cdn.designcombo.dev/thumbnails/music-preview.png)",
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    []
  );
  return /* @__PURE__ */ v.jsx(
    zs,
    {
      data: n,
      renderCustomPreview: /* @__PURE__ */ v.jsx("div", { style: s }),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          draggable: !1,
          onClick: () => e(n),
          style: {
            display: "grid",
            gridTemplateColumns: "48px 1fr"
          },
          className: "flex cursor-pointer gap-4 px-2 py-1 text-sm hover:bg-zinc-800/70",
          children: [
            /* @__PURE__ */ v.jsx("div", { className: "flex h-12 items-center justify-center bg-zinc-800", children: /* @__PURE__ */ v.jsx(bh, { width: 16 }) }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ v.jsx("div", { children: n.name }),
              /* @__PURE__ */ v.jsx("div", { className: "text-zinc-400", children: n.metadata?.author })
            ] })
          ]
        }
      )
    }
  );
}, s3 = () => {
  const e = Bs(), n = (r) => {
    pt.dispatch(bi, {
      payload: r,
      options: {
        trackId: "main"
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Photos" }),
    /* @__PURE__ */ v.jsx(Or, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4", children: Kw.map((r, s) => /* @__PURE__ */ v.jsx(
      o3,
      {
        image: r,
        shouldDisplayPreview: !e,
        handleAddImage: n
      },
      s
    )) }) })
  ] });
}, o3 = ({
  handleAddImage: e,
  image: n,
  shouldDisplayPreview: r
}) => {
  const s = je.useMemo(
    () => ({
      backgroundImage: `url(${n.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [n.preview]
  );
  return /* @__PURE__ */ v.jsx(
    zs,
    {
      data: n,
      renderCustomPreview: /* @__PURE__ */ v.jsx("div", { style: s }),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          onClick: () => e({
            id: Xt(),
            details: {
              src: n.details.src
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ v.jsx(
            "img",
            {
              draggable: !1,
              src: n.preview,
              className: "h-full w-full rounded-md object-cover",
              alt: "image"
            }
          )
        }
      )
    }
  );
}, a3 = () => {
  const e = Bs(), n = (r) => {
    pt.dispatch(mi, {
      payload: r,
      options: {
        resourceId: "main"
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Videos" }),
    /* @__PURE__ */ v.jsx(Or, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4", children: qw.map((r, s) => /* @__PURE__ */ v.jsx(
      c3,
      {
        video: r,
        shouldDisplayPreview: !e,
        handleAddVideo: n
      },
      s
    )) }) })
  ] });
}, c3 = ({
  handleAddVideo: e,
  video: n,
  shouldDisplayPreview: r
}) => {
  const s = je.useMemo(
    () => ({
      backgroundImage: `url(${n.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [n.preview]
  );
  return /* @__PURE__ */ v.jsx(
    zs,
    {
      data: n,
      renderCustomPreview: /* @__PURE__ */ v.jsx(
        "div",
        {
          style: s,
          className: "draggable"
        }
      ),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          onClick: () => e({
            ...n,
            id: Xt(),
            details: {
              src: n.details.src,
              ...n.details
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ v.jsx(
            "img",
            {
              draggable: !1,
              src: n.preview,
              className: "h-full w-full rounded-md object-cover",
              alt: "image"
            }
          )
        }
      )
    }
  );
}, dc = $d((e) => ({
  activeMenuItem: null,
  showMenuItem: !1,
  cropTarget: null,
  showControlItem: !1,
  showToolboxItem: !1,
  activeToolboxItem: null,
  setCropTarget: (n) => e({ cropTarget: n }),
  setActiveMenuItem: (n) => e({ activeMenuItem: n }),
  setShowMenuItem: (n) => e({ showMenuItem: n }),
  setShowControlItem: (n) => e({ showControlItem: n }),
  setShowToolboxItem: (n) => e({ showToolboxItem: n }),
  setActiveToolboxItem: (n) => e({ activeToolboxItem: n })
})), l3 = ({ children: e }) => {
  const { showMenuItem: n, setShowMenuItem: r } = dc(), s = () => {
    r(!1);
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: {
        left: n ? "0" : "-100%",
        transition: "left 0.25s ease-in-out",
        zIndex: 200
      },
      className: "absolute top-1/2 mt-6 flex h-[calc(100%-32px-64px)] w-[340px] -translate-y-1/2 rounded-lg shadow-lg",
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "w-[74px]" }),
        /* @__PURE__ */ v.jsxs("div", { className: "relative flex flex-1 bg-background/80 backdrop-blur-lg backdrop-filter", children: [
          /* @__PURE__ */ v.jsx(
            Lt,
            {
              variant: "ghost",
              className: "absolute right-2 top-2 h-8 w-8 text-muted-foreground",
              size: "icon",
              children: /* @__PURE__ */ v.jsx(
                $w,
                {
                  width: 16,
                  onClick: s
                }
              )
            }
          ),
          e
        ] })
      ]
    }
  );
}, u3 = () => {
  const { activeMenuItem: e } = dc();
  return e === "transitions" ? /* @__PURE__ */ v.jsx(Qw, {}) : e === "texts" ? /* @__PURE__ */ v.jsx(e3, {}) : e === "videos" ? /* @__PURE__ */ v.jsx(a3, {}) : e === "audios" ? /* @__PURE__ */ v.jsx(r3, {}) : e === "images" ? /* @__PURE__ */ v.jsx(s3, {}) : e === "uploads" ? /* @__PURE__ */ v.jsx(n3, {}) : null;
}, d3 = () => /* @__PURE__ */ v.jsx(l3, { children: /* @__PURE__ */ v.jsx(u3, {}) }), yn = {
  audio: bh,
  captions: Lw,
  image: jw,
  redo: ({ ...e }) => /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ v.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.2957 4.15721C13.9052 3.76669 13.9052 3.13352 14.2957 2.743C14.6862 2.35247 15.3194 2.35247 15.7099 2.743L20.953 7.98603C21.1387 8.16758 21.2539 8.42087 21.2539 8.70108C21.2539 8.70111 21.2539 8.70114 21.2539 8.70117C21.2539 8.70431 21.2539 8.70744 21.2539 8.71057C21.2518 8.93273 21.1773 9.13757 21.0528 9.30262C21.0249 9.33973 20.9942 9.37505 20.961 9.40828L15.7099 14.6593C15.3194 15.0499 14.6862 15.0499 14.2957 14.6593C13.9052 14.2688 13.9052 13.6357 14.2957 13.2451L17.8398 9.70108H9.22665C8.59943 9.70108 7.97836 9.82462 7.39888 10.0646C6.81941 10.3047 6.29289 10.6565 5.84938 11.1C5.40587 11.5435 5.05406 12.07 4.81403 12.6495C4.57401 13.229 4.45047 13.85 4.45047 14.4773C4.45047 15.1045 4.57401 15.7256 4.81403 16.305C5.05406 16.8845 5.40587 17.411 5.84938 17.8545C6.29289 18.298 6.81941 18.6498 7.39888 18.8899C7.97836 19.1299 8.59943 19.2534 9.22665 19.2534H12.9024C13.4547 19.2534 13.9024 19.7012 13.9024 20.2534C13.9024 20.8057 13.4547 21.2534 12.9024 21.2534H9.22665C8.33679 21.2534 7.45564 21.0782 6.63352 20.7376C5.81139 20.3971 5.06439 19.898 4.43517 19.2687C3.80594 18.6395 3.30681 17.8925 2.96627 17.0704C2.62574 16.2483 2.45047 15.3671 2.45047 14.4773C2.45047 13.5874 2.62574 12.7063 2.96627 11.8841C3.30681 11.062 3.80594 10.315 4.43517 9.68578C5.06439 9.05655 5.81139 8.55742 6.63352 8.21689C7.45564 7.87635 8.33679 7.70108 9.22665 7.70108H17.8396L14.2957 4.15721Z",
          fill: "currentColor"
        }
      )
    }
  ),
  shapes: ({ ...e }) => /* @__PURE__ */ v.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ v.jsx("g", { clipPath: "url(#clip0_2077_2705)", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            d: "M3.75 12H2.25V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H9.75V20.25H3.75V12ZM21 21.75H12.75C12.6197 21.75 12.4916 21.716 12.3784 21.6514C12.2652 21.5868 12.1708 21.4938 12.1045 21.3816C12.0382 21.2694 12.0022 21.1419 12.0002 21.0116C11.9982 20.8813 12.0302 20.7527 12.093 20.6385L16.218 13.1385C16.2821 13.0203 16.377 12.9218 16.4928 12.8534C16.6085 12.7849 16.7406 12.7492 16.875 12.75C17.1322 12.75 17.3895 12.879 17.532 13.1385L21.657 20.6385C21.7198 20.7527 21.7518 20.8813 21.7498 21.0116C21.7478 21.1419 21.7118 21.2694 21.6455 21.3816C21.5792 21.4938 21.4848 21.5868 21.3716 21.6514C21.2584 21.716 21.1303 21.75 21 21.75ZM14.0182 20.25H19.7318L16.875 15.0563L14.0182 20.25ZM20.25 2.25H12V3.75H20.25V14.244H21.75V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM8.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V8.25C2.25 8.64782 2.40804 9.02936 2.68934 9.31066C2.97064 9.59196 3.35218 9.75 3.75 9.75H8.25C8.64782 9.75 9.02936 9.59196 9.31066 9.31066C9.59196 9.02936 9.75 8.64782 9.75 8.25V3.75C9.75 3.35218 9.59196 2.97064 9.31066 2.68934C9.02936 2.40804 8.64782 2.25 8.25 2.25ZM8.25 8.25H3.75V3.75H8.25V8.25Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ v.jsx("defs", { children: /* @__PURE__ */ v.jsx("clipPath", { id: "clip0_2077_2705", children: /* @__PURE__ */ v.jsx(
          "rect",
          {
            width: "24",
            height: "24",
            fill: "white"
          }
        ) }) })
      ]
    }
  ),
  type: Ww,
  undo: ({ ...e }) => /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ v.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.60387 4.30711C9.99439 3.91659 9.99439 3.28342 9.60387 2.8929C9.21334 2.50238 8.58018 2.50237 8.18965 2.8929L2.8925 8.19004C2.70497 8.37758 2.59961 8.63193 2.59961 8.89715C2.59961 9.16237 2.70497 9.41672 2.8925 9.60426L8.18965 14.9014C8.58018 15.2919 9.21334 15.2919 9.60387 14.9014C9.99439 14.5109 9.99439 13.8777 9.60387 13.4872L5.86478 9.7481H15.1044C15.7383 9.7481 16.366 9.87295 16.9516 10.1155C17.5372 10.3581 18.0693 10.7136 18.5176 11.1619C18.9658 11.6101 19.3213 12.1422 19.5639 12.7278C19.8065 13.3134 19.9313 13.9411 19.9313 14.575C19.9313 15.2088 19.8065 15.8365 19.5639 16.4221C19.3213 17.0077 18.9658 17.5398 18.5176 17.9881C18.0693 18.4363 17.5372 18.7918 16.9516 19.0344C16.366 19.277 15.7383 19.4018 15.1044 19.4018H11.3964C10.8442 19.4018 10.3964 19.8495 10.3964 20.4018C10.3964 20.9541 10.8442 21.4018 11.3964 21.4018H15.1044C16.001 21.4018 16.8887 21.2252 17.717 20.8822C18.5452 20.5391 19.2978 20.0362 19.9318 19.4023C20.5657 18.7683 21.0686 18.0158 21.4116 17.1875C21.7547 16.3592 21.9313 15.4715 21.9313 14.575C21.9313 13.6784 21.7547 12.7907 21.4116 11.9624C21.0686 11.1342 20.5657 10.3816 19.9318 9.74764C19.2978 9.11371 18.5452 8.61085 17.717 8.26777C16.8887 7.92469 16.001 7.7481 15.1044 7.7481H6.16287L9.60387 4.30711Z",
          fill: "currentColor"
        }
      )
    }
  ),
  upload: ({ ...e }) => /* @__PURE__ */ v.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ v.jsxs("g", { clipPath: "url(#clip0_2077_2699)", children: [
          /* @__PURE__ */ v.jsx(
            "path",
            {
              d: "M8.25 13.5L9.3075 14.5575L11.25 12.6225V21.75H12.75V12.6225L14.6925 14.5575L15.75 13.5L12 9.75L8.25 13.5Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ v.jsx(
            "path",
            {
              d: "M17.6249 16.5004H17.2499V15.0004H17.6249C18.52 15.0362 19.3927 14.715 20.0509 14.1074C20.7092 13.4997 21.0991 12.6555 21.1349 11.7604C21.1707 10.8653 20.8495 9.99264 20.2418 9.33438C19.6342 8.67613 18.79 8.28621 17.8949 8.25041H17.2499L17.1749 7.63541C17.0085 6.37275 16.3888 5.21362 15.4312 4.37395C14.4736 3.53428 13.2435 3.07132 11.9699 3.07132C10.6963 3.07132 9.46616 3.53428 8.50857 4.37395C7.55099 5.21362 6.93129 6.37275 6.76489 7.63541L6.74989 8.25041H6.10489C5.20979 8.28621 4.36557 8.67613 3.75795 9.33438C3.15033 9.99264 2.82909 10.8653 2.86489 11.7604C2.9007 12.6555 3.29062 13.4997 3.94887 14.1074C4.60712 14.715 5.47979 15.0362 6.37489 15.0004H6.74989V16.5004H6.37489C5.1722 16.4928 4.01477 16.0409 3.12513 15.2315C2.2355 14.4221 1.67646 13.3124 1.55549 12.1158C1.43453 10.9192 1.76018 9.72009 2.46983 8.74905C3.17949 7.77801 4.22305 7.10357 5.39989 6.85541C5.72367 5.3453 6.55552 3.99189 7.75663 3.02101C8.95774 2.05013 10.4555 1.52051 11.9999 1.52051C13.5443 1.52051 15.042 2.05013 16.2432 3.02101C17.4443 3.99189 18.2761 5.3453 18.5999 6.85541C19.7767 7.10357 20.8203 7.77801 21.53 8.74905C22.2396 9.72009 22.5653 10.9192 22.4443 12.1158C22.3233 13.3124 21.7643 14.4221 20.8747 15.2315C19.985 16.0409 18.8276 16.4928 17.6249 16.5004Z",
              fill: "currentColor"
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx("defs", { children: /* @__PURE__ */ v.jsx("clipPath", { id: "clip0_2077_2699", children: /* @__PURE__ */ v.jsx(
          "rect",
          {
            width: "24",
            height: "24",
            fill: "white"
          }
        ) }) })
      ]
    }
  ),
  video: Bw
};
function f3() {
  const { setActiveMenuItem: e, setShowMenuItem: n, activeMenuItem: r, showMenuItem: s } = dc();
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: { zIndex: 201 },
      className: "absolute left-2.5 top-1/2 mt-6 flex w-14 -translate-y-1/2 flex-col items-center rounded-lg bg-background/80 py-2 shadow-lg backdrop-blur-lg backdrop-filter",
      children: [
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("uploads"), n(!0);
            },
            className: ce(
              s && r === "uploads" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.upload, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("texts"), n(!0);
            },
            className: ce(
              s && r === "texts" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.type, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("videos"), n(!0);
            },
            className: ce(
              s && r === "videos" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.video, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("captions"), n(!0);
            },
            className: ce(
              s && r === "captions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.captions, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("images"), n(!0);
            },
            className: ce(
              s && r === "images" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.image, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("shapes"), n(!0);
            },
            className: ce(
              s && r === "shapes" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.shapes, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("audios"), n(!0);
            },
            className: ce(
              s && r === "audios" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(yn.audio, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: () => {
              e("transitions"), n(!0);
            },
            className: ce(
              s && r === "transitions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                width: 20,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ v.jsx(
                  "path",
                  {
                    d: "M3 5.30359C3 3.93159 4.659 3.24359 5.629 4.21359L11.997 10.5826L10.583 11.9966L5 6.41359V17.5856L10.586 11.9996L10.583 11.9966L11.997 10.5826L12 10.5856L18.371 4.21459C19.341 3.24459 21 3.93159 21 5.30359V18.6956C21 20.0676 19.341 20.7556 18.371 19.7856L12 13.5L13.414 11.9996L19 17.5866V6.41359L13.414 11.9996L13.421 12.0056L12.006 13.4206L12 13.4136L5.629 19.7846C4.659 20.7546 3 20.0676 3 18.6956V5.30359Z",
                    fill: "currentColor"
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}
function h3() {
  const e = () => {
    pt.dispatch(rh);
  }, n = () => {
    pt.dispatch(ih);
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px"
      },
      className: "pointer-events-none absolute left-0 right-0 top-0 z-[205] flex h-[72px] items-center px-2",
      children: /* @__PURE__ */ v.jsxs("div", { className: "pointer-events-auto flex h-14 items-center gap-2", children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-md bg-background" }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex h-12 items-center bg-background px-1.5", children: [
          /* @__PURE__ */ v.jsx(
            Lt,
            {
              onClick: e,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ v.jsx(yn.undo, { width: 20 })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Lt,
            {
              onClick: n,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ v.jsx(yn.redo, { width: 20 })
            }
          )
        ] })
      ] })
    }
  );
}
const vs = (e, n) => {
  const r = e.from / 1e3 * n, s = e.to / 1e3 * n - r;
  return { from: r, durationInFrames: s };
}, p3 = {
  text: (e, n) => {
    const { fps: r, height: s, width: a } = n, { from: c, durationInFrames: u } = vs(e.display, r);
    return /* @__PURE__ */ v.jsx(
      ps,
      {
        from: c,
        durationInFrames: u,
        "data-track-item": "transition-element",
        style: {
          position: "absolute",
          width: e.details.width ?? 300,
          height: e.details.height ?? 400,
          transform: e.details.transform ?? "none",
          fontSize: e.details.fontSize || "16px",
          // Updated default font size
          textAlign: e.details.textAlign || "left",
          // Updated default text alignment
          top: e.details.top ?? 300,
          left: e.details.left ?? 600,
          color: e.details.color || "#000000",
          // Updated text color (fill)
          backgroundColor: e.details.backgroundColor || "transparent",
          // Updated background color
          border: e.details.border ?? "none",
          // Updated border
          opacity: e.details.opacity ?? 100 / 100,
          fontFamily: e.details.fontFamily || "Arial",
          // Updated default font family
          textDecoration: e.details.textDecoration || "none",
          fontWeight: e.details.fontWeight || "normal",
          lineHeight: e.details.lineHeight || "normal",
          // Added line height
          letterSpacing: e.details.letterSpacing || "normal",
          // Added letter spacing
          wordSpacing: e.details.wordSpacing || "normal",
          // Added word spacing
          wordWrap: e.details.wordWrap || "normal",
          //'break-word'
          wordBreak: e.details.wordBreak || "normal",
          //'break-all',
          pointerEvents: "auto"
        },
        children: /* @__PURE__ */ v.jsx("div", { children: e.details.text })
      },
      e.id
    );
  },
  image: (e, n) => {
    const { fps: r } = n, { from: s, durationInFrames: a } = vs(e.display, r);
    return /* @__PURE__ */ v.jsx(
      ps,
      {
        from: s,
        durationInFrames: a,
        style: {
          width: e.details.width ?? "100%",
          // Default width
          height: e.details.height ?? "auto",
          // Default height
          transform: e.details.transform ?? "none",
          opacity: (e.details.opacity ?? 100) / 100 || 1,
          border: e.details.border ?? "none",
          // Default border
          borderRadius: e.details.borderRadius ?? "0",
          // Default border radius
          boxShadow: e.details.boxShadow ?? "none",
          // Default box shadow
          filter: e.details.filter || "none",
          top: e.details.top ?? 0,
          left: e.details.left ?? 0
        },
        children: /* @__PURE__ */ v.jsx(fa, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ v.jsx(
          Wb,
          {
            style: { pointerEvents: "none" },
            "data-id": e.id,
            src: e.details.src
          }
        ) })
      },
      e.id
    );
  },
  video: (e, n) => {
    const { fps: r } = n, { from: s, durationInFrames: a } = vs(e.display, r), c = e.trim, u = e.details.crop || {
      x: 0,
      y: 0,
      width: e.details.width,
      height: e.details.height
    };
    return c ? /* @__PURE__ */ v.jsx(
      ps,
      {
        premountFor: 30 * 5,
        from: s,
        durationInFrames: a,
        style: {
          width: u.width || "100%",
          // Default width
          height: u.height || "auto",
          // Default height
          transform: e.details.transform ?? "none",
          opacity: (e.details.opacity ?? 100) / 100 || 1,
          border: e.details.border ?? "none",
          // Default border
          borderRadius: e.details.borderRadius ?? "0",
          // Default border radius
          boxShadow: e.details.boxShadow ?? "none",
          // Default box shadow
          top: e.details.top ?? 0,
          left: e.details.left ?? 0,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ v.jsx(
          fa,
          {
            style: {
              pointerEvents: "none",
              width: e.details.width,
              height: e.details.height,
              top: -u.y,
              left: -u.x
            },
            children: /* @__PURE__ */ v.jsx(
              Ub,
              {
                startFrom: c.from / 1e3 * r,
                endAt: c.to / 1e3 * r,
                src: e.details.src,
                volume: (e.details.volume ?? 100) / 100,
                style: {
                  pointerEvents: "none",
                  width: e.details.width,
                  height: e.details.height
                }
              }
            )
          }
        )
      },
      e.id
    ) : /* @__PURE__ */ v.jsx(v.Fragment, {});
  },
  audio: (e, n) => {
    const { fps: r } = n, { from: s, durationInFrames: a } = vs(e.display, r), c = e.trim;
    return c ? /* @__PURE__ */ v.jsx(
      ps,
      {
        className: `moonshine-scene-item id-${e.id} moonshine-scene-item-type-${e.type}`,
        from: s,
        durationInFrames: a,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ v.jsx(fa, { children: /* @__PURE__ */ v.jsx(
          Hb,
          {
            startFrom: c.from / 1e3 * r,
            endAt: c.to / 1e3 * r,
            src: e.details.src,
            volume: (e.details.volume ?? 100) / 100
          }
        ) })
      },
      e.id
    ) : /* @__PURE__ */ v.jsx(v.Fragment, {});
  }
};
var Ts = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ts.exports;
(function(e, n) {
  (function() {
    var r, s = "4.17.21", a = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", d = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", m = 500, b = "__lodash_placeholder__", x = 1, S = 2, C = 4, R = 1, A = 2, E = 1, P = 2, D = 4, N = 8, z = 16, K = 32, Y = 64, q = 128, Z = 256, G = 512, Q = 30, tt = "...", B = 800, dt = 16, St = 1, Pt = 2, wt = 3, It = 1 / 0, Tt = 9007199254740991, Et = 17976931348623157e292, fe = NaN, rt = 4294967295, lr = rt - 1, Wn = rt >>> 1, sn = [
      ["ary", q],
      ["bind", E],
      ["bindKey", P],
      ["curry", N],
      ["curryRight", z],
      ["flip", G],
      ["partial", K],
      ["partialRight", Y],
      ["rearg", Z]
    ], on = "[object Arguments]", Bn = "[object Array]", Si = "[object AsyncFunction]", _n = "[object Boolean]", Sn = "[object Date]", Ii = "[object DOMException]", $n = "[object Error]", In = "[object Function]", jr = "[object GeneratorFunction]", ie = "[object Map]", an = "[object Number]", Ks = "[object Null]", Ce = "[object Object]", Nr = "[object Promise]", Ti = "[object Proxy]", Tn = "[object RegExp]", _ = "[object Set]", $ = "[object String]", V = "[object Symbol]", vt = "[object Undefined]", jt = "[object WeakMap]", At = "[object WeakSet]", it = "[object ArrayBuffer]", Jt = "[object DataView]", Xe = "[object Float32Array]", Bt = "[object Float64Array]", ze = "[object Int8Array]", cn = "[object Int16Array]", ke = "[object Int32Array]", Cn = "[object Uint8Array]", ve = "[object Uint8ClampedArray]", qs = "[object Uint16Array]", Js = "[object Uint32Array]", rp = /\b__p \+= '';/g, ip = /\b(__p \+=) '' \+/g, sp = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Tc = /&(?:amp|lt|gt|quot|#39);/g, Cc = /[&<>"']/g, op = RegExp(Tc.source), ap = RegExp(Cc.source), cp = /<%-([\s\S]+?)%>/g, lp = /<%([\s\S]+?)%>/g, kc = /<%=([\s\S]+?)%>/g, up = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dp = /^\w*$/, fp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qs = /[\\^$.*+?()[\]{}|]/g, hp = RegExp(Qs.source), to = /^\s+/, pp = /\s/, gp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mp = /\{\n\/\* \[wrapped with (.+)\] \*/, vp = /,? & /, bp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, yp = /[()=,{}\[\]\/\s]/, wp = /\\(\\)?/g, xp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ec = /\w*$/, _p = /^[-+]0x[0-9a-f]+$/i, Sp = /^0b[01]+$/i, Ip = /^\[object .+?Constructor\]$/, Tp = /^0o[0-7]+$/i, Cp = /^(?:0|[1-9]\d*)$/, kp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ci = /($^)/, Ep = /['\n\r\u2028\u2029\\]/g, ki = "\\ud800-\\udfff", Ap = "\\u0300-\\u036f", Mp = "\\ufe20-\\ufe2f", Rp = "\\u20d0-\\u20ff", Ac = Ap + Mp + Rp, Mc = "\\u2700-\\u27bf", Rc = "a-z\\xdf-\\xf6\\xf8-\\xff", Op = "\\xac\\xb1\\xd7\\xf7", Pp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Dp = "\\u2000-\\u206f", Lp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Oc = "A-Z\\xc0-\\xd6\\xd8-\\xde", Pc = "\\ufe0e\\ufe0f", Dc = Op + Pp + Dp + Lp, eo = "['’]", jp = "[" + ki + "]", Lc = "[" + Dc + "]", Ei = "[" + Ac + "]", jc = "\\d+", Np = "[" + Mc + "]", Nc = "[" + Rc + "]", Fc = "[^" + ki + Dc + jc + Mc + Rc + Oc + "]", no = "\\ud83c[\\udffb-\\udfff]", Fp = "(?:" + Ei + "|" + no + ")", zc = "[^" + ki + "]", ro = "(?:\\ud83c[\\udde6-\\uddff]){2}", io = "[\\ud800-\\udbff][\\udc00-\\udfff]", ur = "[" + Oc + "]", Hc = "\\u200d", Uc = "(?:" + Nc + "|" + Fc + ")", zp = "(?:" + ur + "|" + Fc + ")", Wc = "(?:" + eo + "(?:d|ll|m|re|s|t|ve))?", Bc = "(?:" + eo + "(?:D|LL|M|RE|S|T|VE))?", $c = Fp + "?", Vc = "[" + Pc + "]?", Hp = "(?:" + Hc + "(?:" + [zc, ro, io].join("|") + ")" + Vc + $c + ")*", Up = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gc = Vc + $c + Hp, Bp = "(?:" + [Np, ro, io].join("|") + ")" + Gc, $p = "(?:" + [zc + Ei + "?", Ei, ro, io, jp].join("|") + ")", Vp = RegExp(eo, "g"), Gp = RegExp(Ei, "g"), so = RegExp(no + "(?=" + no + ")|" + $p + Gc, "g"), Xp = RegExp([
      ur + "?" + Nc + "+" + Wc + "(?=" + [Lc, ur, "$"].join("|") + ")",
      zp + "+" + Bc + "(?=" + [Lc, ur + Uc, "$"].join("|") + ")",
      ur + "?" + Uc + "+" + Wc,
      ur + "+" + Bc,
      Wp,
      Up,
      jc,
      Bp
    ].join("|"), "g"), Yp = RegExp("[" + Hc + ki + Ac + Pc + "]"), Zp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Kp = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], qp = -1, Mt = {};
    Mt[Xe] = Mt[Bt] = Mt[ze] = Mt[cn] = Mt[ke] = Mt[Cn] = Mt[ve] = Mt[qs] = Mt[Js] = !0, Mt[on] = Mt[Bn] = Mt[it] = Mt[_n] = Mt[Jt] = Mt[Sn] = Mt[$n] = Mt[In] = Mt[ie] = Mt[an] = Mt[Ce] = Mt[Tn] = Mt[_] = Mt[$] = Mt[jt] = !1;
    var kt = {};
    kt[on] = kt[Bn] = kt[it] = kt[Jt] = kt[_n] = kt[Sn] = kt[Xe] = kt[Bt] = kt[ze] = kt[cn] = kt[ke] = kt[ie] = kt[an] = kt[Ce] = kt[Tn] = kt[_] = kt[$] = kt[V] = kt[Cn] = kt[ve] = kt[qs] = kt[Js] = !0, kt[$n] = kt[In] = kt[jt] = !1;
    var Jp = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Qp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, t1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, e1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, n1 = parseFloat, r1 = parseInt, Xc = typeof Qr == "object" && Qr && Qr.Object === Object && Qr, i1 = typeof self == "object" && self && self.Object === Object && self, Zt = Xc || i1 || Function("return this")(), oo = n && !n.nodeType && n, Vn = oo && !0 && e && !e.nodeType && e, Yc = Vn && Vn.exports === oo, ao = Yc && Xc.process, Ee = function() {
      try {
        var I = Vn && Vn.require && Vn.require("util").types;
        return I || ao && ao.binding && ao.binding("util");
      } catch {
      }
    }(), Zc = Ee && Ee.isArrayBuffer, Kc = Ee && Ee.isDate, qc = Ee && Ee.isMap, Jc = Ee && Ee.isRegExp, Qc = Ee && Ee.isSet, tl = Ee && Ee.isTypedArray;
    function be(I, O, M) {
      switch (M.length) {
        case 0:
          return I.call(O);
        case 1:
          return I.call(O, M[0]);
        case 2:
          return I.call(O, M[0], M[1]);
        case 3:
          return I.call(O, M[0], M[1], M[2]);
      }
      return I.apply(O, M);
    }
    function s1(I, O, M, W) {
      for (var st = -1, bt = I == null ? 0 : I.length; ++st < bt; ) {
        var $t = I[st];
        O(W, $t, M($t), I);
      }
      return W;
    }
    function Ae(I, O) {
      for (var M = -1, W = I == null ? 0 : I.length; ++M < W && O(I[M], M, I) !== !1; )
        ;
      return I;
    }
    function o1(I, O) {
      for (var M = I == null ? 0 : I.length; M-- && O(I[M], M, I) !== !1; )
        ;
      return I;
    }
    function el(I, O) {
      for (var M = -1, W = I == null ? 0 : I.length; ++M < W; )
        if (!O(I[M], M, I))
          return !1;
      return !0;
    }
    function kn(I, O) {
      for (var M = -1, W = I == null ? 0 : I.length, st = 0, bt = []; ++M < W; ) {
        var $t = I[M];
        O($t, M, I) && (bt[st++] = $t);
      }
      return bt;
    }
    function Ai(I, O) {
      var M = I == null ? 0 : I.length;
      return !!M && dr(I, O, 0) > -1;
    }
    function co(I, O, M) {
      for (var W = -1, st = I == null ? 0 : I.length; ++W < st; )
        if (M(O, I[W]))
          return !0;
      return !1;
    }
    function Ot(I, O) {
      for (var M = -1, W = I == null ? 0 : I.length, st = Array(W); ++M < W; )
        st[M] = O(I[M], M, I);
      return st;
    }
    function En(I, O) {
      for (var M = -1, W = O.length, st = I.length; ++M < W; )
        I[st + M] = O[M];
      return I;
    }
    function lo(I, O, M, W) {
      var st = -1, bt = I == null ? 0 : I.length;
      for (W && bt && (M = I[++st]); ++st < bt; )
        M = O(M, I[st], st, I);
      return M;
    }
    function a1(I, O, M, W) {
      var st = I == null ? 0 : I.length;
      for (W && st && (M = I[--st]); st--; )
        M = O(M, I[st], st, I);
      return M;
    }
    function uo(I, O) {
      for (var M = -1, W = I == null ? 0 : I.length; ++M < W; )
        if (O(I[M], M, I))
          return !0;
      return !1;
    }
    var c1 = fo("length");
    function l1(I) {
      return I.split("");
    }
    function u1(I) {
      return I.match(bp) || [];
    }
    function nl(I, O, M) {
      var W;
      return M(I, function(st, bt, $t) {
        if (O(st, bt, $t))
          return W = bt, !1;
      }), W;
    }
    function Mi(I, O, M, W) {
      for (var st = I.length, bt = M + (W ? 1 : -1); W ? bt-- : ++bt < st; )
        if (O(I[bt], bt, I))
          return bt;
      return -1;
    }
    function dr(I, O, M) {
      return O === O ? _1(I, O, M) : Mi(I, rl, M);
    }
    function d1(I, O, M, W) {
      for (var st = M - 1, bt = I.length; ++st < bt; )
        if (W(I[st], O))
          return st;
      return -1;
    }
    function rl(I) {
      return I !== I;
    }
    function il(I, O) {
      var M = I == null ? 0 : I.length;
      return M ? po(I, O) / M : fe;
    }
    function fo(I) {
      return function(O) {
        return O == null ? r : O[I];
      };
    }
    function ho(I) {
      return function(O) {
        return I == null ? r : I[O];
      };
    }
    function sl(I, O, M, W, st) {
      return st(I, function(bt, $t, Ct) {
        M = W ? (W = !1, bt) : O(M, bt, $t, Ct);
      }), M;
    }
    function f1(I, O) {
      var M = I.length;
      for (I.sort(O); M--; )
        I[M] = I[M].value;
      return I;
    }
    function po(I, O) {
      for (var M, W = -1, st = I.length; ++W < st; ) {
        var bt = O(I[W]);
        bt !== r && (M = M === r ? bt : M + bt);
      }
      return M;
    }
    function go(I, O) {
      for (var M = -1, W = Array(I); ++M < I; )
        W[M] = O(M);
      return W;
    }
    function h1(I, O) {
      return Ot(O, function(M) {
        return [M, I[M]];
      });
    }
    function ol(I) {
      return I && I.slice(0, ul(I) + 1).replace(to, "");
    }
    function ye(I) {
      return function(O) {
        return I(O);
      };
    }
    function mo(I, O) {
      return Ot(O, function(M) {
        return I[M];
      });
    }
    function Fr(I, O) {
      return I.has(O);
    }
    function al(I, O) {
      for (var M = -1, W = I.length; ++M < W && dr(O, I[M], 0) > -1; )
        ;
      return M;
    }
    function cl(I, O) {
      for (var M = I.length; M-- && dr(O, I[M], 0) > -1; )
        ;
      return M;
    }
    function p1(I, O) {
      for (var M = I.length, W = 0; M--; )
        I[M] === O && ++W;
      return W;
    }
    var g1 = ho(Jp), m1 = ho(Qp);
    function v1(I) {
      return "\\" + e1[I];
    }
    function b1(I, O) {
      return I == null ? r : I[O];
    }
    function fr(I) {
      return Yp.test(I);
    }
    function y1(I) {
      return Zp.test(I);
    }
    function w1(I) {
      for (var O, M = []; !(O = I.next()).done; )
        M.push(O.value);
      return M;
    }
    function vo(I) {
      var O = -1, M = Array(I.size);
      return I.forEach(function(W, st) {
        M[++O] = [st, W];
      }), M;
    }
    function ll(I, O) {
      return function(M) {
        return I(O(M));
      };
    }
    function An(I, O) {
      for (var M = -1, W = I.length, st = 0, bt = []; ++M < W; ) {
        var $t = I[M];
        ($t === O || $t === b) && (I[M] = b, bt[st++] = M);
      }
      return bt;
    }
    function Ri(I) {
      var O = -1, M = Array(I.size);
      return I.forEach(function(W) {
        M[++O] = W;
      }), M;
    }
    function x1(I) {
      var O = -1, M = Array(I.size);
      return I.forEach(function(W) {
        M[++O] = [W, W];
      }), M;
    }
    function _1(I, O, M) {
      for (var W = M - 1, st = I.length; ++W < st; )
        if (I[W] === O)
          return W;
      return -1;
    }
    function S1(I, O, M) {
      for (var W = M + 1; W--; )
        if (I[W] === O)
          return W;
      return W;
    }
    function hr(I) {
      return fr(I) ? T1(I) : c1(I);
    }
    function He(I) {
      return fr(I) ? C1(I) : l1(I);
    }
    function ul(I) {
      for (var O = I.length; O-- && pp.test(I.charAt(O)); )
        ;
      return O;
    }
    var I1 = ho(t1);
    function T1(I) {
      for (var O = so.lastIndex = 0; so.test(I); )
        ++O;
      return O;
    }
    function C1(I) {
      return I.match(so) || [];
    }
    function k1(I) {
      return I.match(Xp) || [];
    }
    var E1 = function I(O) {
      O = O == null ? Zt : pr.defaults(Zt.Object(), O, pr.pick(Zt, Kp));
      var M = O.Array, W = O.Date, st = O.Error, bt = O.Function, $t = O.Math, Ct = O.Object, bo = O.RegExp, A1 = O.String, Me = O.TypeError, Oi = M.prototype, M1 = bt.prototype, gr = Ct.prototype, Pi = O["__core-js_shared__"], Di = M1.toString, _t = gr.hasOwnProperty, R1 = 0, dl = function() {
        var t = /[^.]+$/.exec(Pi && Pi.keys && Pi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Li = gr.toString, O1 = Di.call(Ct), P1 = Zt._, D1 = bo(
        "^" + Di.call(_t).replace(Qs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ji = Yc ? O.Buffer : r, Mn = O.Symbol, Ni = O.Uint8Array, fl = ji ? ji.allocUnsafe : r, Fi = ll(Ct.getPrototypeOf, Ct), hl = Ct.create, pl = gr.propertyIsEnumerable, zi = Oi.splice, gl = Mn ? Mn.isConcatSpreadable : r, zr = Mn ? Mn.iterator : r, Gn = Mn ? Mn.toStringTag : r, Hi = function() {
        try {
          var t = qn(Ct, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), L1 = O.clearTimeout !== Zt.clearTimeout && O.clearTimeout, j1 = W && W.now !== Zt.Date.now && W.now, N1 = O.setTimeout !== Zt.setTimeout && O.setTimeout, Ui = $t.ceil, Wi = $t.floor, yo = Ct.getOwnPropertySymbols, F1 = ji ? ji.isBuffer : r, ml = O.isFinite, z1 = Oi.join, H1 = ll(Ct.keys, Ct), Vt = $t.max, Qt = $t.min, U1 = W.now, W1 = O.parseInt, vl = $t.random, B1 = Oi.reverse, wo = qn(O, "DataView"), Hr = qn(O, "Map"), xo = qn(O, "Promise"), mr = qn(O, "Set"), Ur = qn(O, "WeakMap"), Wr = qn(Ct, "create"), Bi = Ur && new Ur(), vr = {}, $1 = Jn(wo), V1 = Jn(Hr), G1 = Jn(xo), X1 = Jn(mr), Y1 = Jn(Ur), $i = Mn ? Mn.prototype : r, Br = $i ? $i.valueOf : r, bl = $i ? $i.toString : r;
      function p(t) {
        if (Nt(t) && !ot(t) && !(t instanceof ht)) {
          if (t instanceof Re)
            return t;
          if (_t.call(t, "__wrapped__"))
            return yu(t);
        }
        return new Re(t);
      }
      var br = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!Dt(i))
            return {};
          if (hl)
            return hl(i);
          t.prototype = i;
          var o = new t();
          return t.prototype = r, o;
        };
      }();
      function Vi() {
      }
      function Re(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: cp,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: lp,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: kc,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: p
        }
      }, p.prototype = Vi.prototype, p.prototype.constructor = p, Re.prototype = br(Vi.prototype), Re.prototype.constructor = Re;
      function ht(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = rt, this.__views__ = [];
      }
      function Z1() {
        var t = new ht(this.__wrapped__);
        return t.__actions__ = he(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = he(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = he(this.__views__), t;
      }
      function K1() {
        if (this.__filtered__) {
          var t = new ht(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function q1() {
        var t = this.__wrapped__.value(), i = this.__dir__, o = ot(t), l = i < 0, f = o ? t.length : 0, g = lm(0, f, this.__views__), y = g.start, w = g.end, T = w - y, L = l ? w : y - 1, j = this.__iteratees__, F = j.length, U = 0, X = Qt(T, this.__takeCount__);
        if (!o || !l && f == T && X == T)
          return Wl(t, this.__actions__);
        var et = [];
        t:
          for (; T-- && U < X; ) {
            L += i;
            for (var lt = -1, nt = t[L]; ++lt < F; ) {
              var ft = j[lt], mt = ft.iteratee, _e = ft.type, ae = mt(nt);
              if (_e == Pt)
                nt = ae;
              else if (!ae) {
                if (_e == St)
                  continue t;
                break t;
              }
            }
            et[U++] = nt;
          }
        return et;
      }
      ht.prototype = br(Vi.prototype), ht.prototype.constructor = ht;
      function Xn(t) {
        var i = -1, o = t == null ? 0 : t.length;
        for (this.clear(); ++i < o; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function J1() {
        this.__data__ = Wr ? Wr(null) : {}, this.size = 0;
      }
      function Q1(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function tg(t) {
        var i = this.__data__;
        if (Wr) {
          var o = i[t];
          return o === h ? r : o;
        }
        return _t.call(i, t) ? i[t] : r;
      }
      function eg(t) {
        var i = this.__data__;
        return Wr ? i[t] !== r : _t.call(i, t);
      }
      function ng(t, i) {
        var o = this.__data__;
        return this.size += this.has(t) ? 0 : 1, o[t] = Wr && i === r ? h : i, this;
      }
      Xn.prototype.clear = J1, Xn.prototype.delete = Q1, Xn.prototype.get = tg, Xn.prototype.has = eg, Xn.prototype.set = ng;
      function ln(t) {
        var i = -1, o = t == null ? 0 : t.length;
        for (this.clear(); ++i < o; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function rg() {
        this.__data__ = [], this.size = 0;
      }
      function ig(t) {
        var i = this.__data__, o = Gi(i, t);
        if (o < 0)
          return !1;
        var l = i.length - 1;
        return o == l ? i.pop() : zi.call(i, o, 1), --this.size, !0;
      }
      function sg(t) {
        var i = this.__data__, o = Gi(i, t);
        return o < 0 ? r : i[o][1];
      }
      function og(t) {
        return Gi(this.__data__, t) > -1;
      }
      function ag(t, i) {
        var o = this.__data__, l = Gi(o, t);
        return l < 0 ? (++this.size, o.push([t, i])) : o[l][1] = i, this;
      }
      ln.prototype.clear = rg, ln.prototype.delete = ig, ln.prototype.get = sg, ln.prototype.has = og, ln.prototype.set = ag;
      function un(t) {
        var i = -1, o = t == null ? 0 : t.length;
        for (this.clear(); ++i < o; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function cg() {
        this.size = 0, this.__data__ = {
          hash: new Xn(),
          map: new (Hr || ln)(),
          string: new Xn()
        };
      }
      function lg(t) {
        var i = is(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function ug(t) {
        return is(this, t).get(t);
      }
      function dg(t) {
        return is(this, t).has(t);
      }
      function fg(t, i) {
        var o = is(this, t), l = o.size;
        return o.set(t, i), this.size += o.size == l ? 0 : 1, this;
      }
      un.prototype.clear = cg, un.prototype.delete = lg, un.prototype.get = ug, un.prototype.has = dg, un.prototype.set = fg;
      function Yn(t) {
        var i = -1, o = t == null ? 0 : t.length;
        for (this.__data__ = new un(); ++i < o; )
          this.add(t[i]);
      }
      function hg(t) {
        return this.__data__.set(t, h), this;
      }
      function pg(t) {
        return this.__data__.has(t);
      }
      Yn.prototype.add = Yn.prototype.push = hg, Yn.prototype.has = pg;
      function Ue(t) {
        var i = this.__data__ = new ln(t);
        this.size = i.size;
      }
      function gg() {
        this.__data__ = new ln(), this.size = 0;
      }
      function mg(t) {
        var i = this.__data__, o = i.delete(t);
        return this.size = i.size, o;
      }
      function vg(t) {
        return this.__data__.get(t);
      }
      function bg(t) {
        return this.__data__.has(t);
      }
      function yg(t, i) {
        var o = this.__data__;
        if (o instanceof ln) {
          var l = o.__data__;
          if (!Hr || l.length < a - 1)
            return l.push([t, i]), this.size = ++o.size, this;
          o = this.__data__ = new un(l);
        }
        return o.set(t, i), this.size = o.size, this;
      }
      Ue.prototype.clear = gg, Ue.prototype.delete = mg, Ue.prototype.get = vg, Ue.prototype.has = bg, Ue.prototype.set = yg;
      function yl(t, i) {
        var o = ot(t), l = !o && Qn(t), f = !o && !l && Ln(t), g = !o && !l && !f && _r(t), y = o || l || f || g, w = y ? go(t.length, A1) : [], T = w.length;
        for (var L in t)
          (i || _t.call(t, L)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
          (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          g && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
          pn(L, T))) && w.push(L);
        return w;
      }
      function wl(t) {
        var i = t.length;
        return i ? t[Oo(0, i - 1)] : r;
      }
      function wg(t, i) {
        return ss(he(t), Zn(i, 0, t.length));
      }
      function xg(t) {
        return ss(he(t));
      }
      function _o(t, i, o) {
        (o !== r && !We(t[i], o) || o === r && !(i in t)) && dn(t, i, o);
      }
      function $r(t, i, o) {
        var l = t[i];
        (!(_t.call(t, i) && We(l, o)) || o === r && !(i in t)) && dn(t, i, o);
      }
      function Gi(t, i) {
        for (var o = t.length; o--; )
          if (We(t[o][0], i))
            return o;
        return -1;
      }
      function _g(t, i, o, l) {
        return Rn(t, function(f, g, y) {
          i(l, f, o(f), y);
        }), l;
      }
      function xl(t, i) {
        return t && Ze(i, Yt(i), t);
      }
      function Sg(t, i) {
        return t && Ze(i, ge(i), t);
      }
      function dn(t, i, o) {
        i == "__proto__" && Hi ? Hi(t, i, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : t[i] = o;
      }
      function So(t, i) {
        for (var o = -1, l = i.length, f = M(l), g = t == null; ++o < l; )
          f[o] = g ? r : ra(t, i[o]);
        return f;
      }
      function Zn(t, i, o) {
        return t === t && (o !== r && (t = t <= o ? t : o), i !== r && (t = t >= i ? t : i)), t;
      }
      function Oe(t, i, o, l, f, g) {
        var y, w = i & x, T = i & S, L = i & C;
        if (o && (y = f ? o(t, l, f, g) : o(t)), y !== r)
          return y;
        if (!Dt(t))
          return t;
        var j = ot(t);
        if (j) {
          if (y = dm(t), !w)
            return he(t, y);
        } else {
          var F = te(t), U = F == In || F == jr;
          if (Ln(t))
            return Vl(t, w);
          if (F == Ce || F == on || U && !f) {
            if (y = T || U ? {} : uu(t), !w)
              return T ? tm(t, Sg(y, t)) : Qg(t, xl(y, t));
          } else {
            if (!kt[F])
              return f ? t : {};
            y = fm(t, F, w);
          }
        }
        g || (g = new Ue());
        var X = g.get(t);
        if (X)
          return X;
        g.set(t, y), zu(t) ? t.forEach(function(nt) {
          y.add(Oe(nt, i, o, nt, t, g));
        }) : Nu(t) && t.forEach(function(nt, ft) {
          y.set(ft, Oe(nt, i, o, ft, t, g));
        });
        var et = L ? T ? Bo : Wo : T ? ge : Yt, lt = j ? r : et(t);
        return Ae(lt || t, function(nt, ft) {
          lt && (ft = nt, nt = t[ft]), $r(y, ft, Oe(nt, i, o, ft, t, g));
        }), y;
      }
      function Ig(t) {
        var i = Yt(t);
        return function(o) {
          return _l(o, t, i);
        };
      }
      function _l(t, i, o) {
        var l = o.length;
        if (t == null)
          return !l;
        for (t = Ct(t); l--; ) {
          var f = o[l], g = i[f], y = t[f];
          if (y === r && !(f in t) || !g(y))
            return !1;
        }
        return !0;
      }
      function Sl(t, i, o) {
        if (typeof t != "function")
          throw new Me(u);
        return qr(function() {
          t.apply(r, o);
        }, i);
      }
      function Vr(t, i, o, l) {
        var f = -1, g = Ai, y = !0, w = t.length, T = [], L = i.length;
        if (!w)
          return T;
        o && (i = Ot(i, ye(o))), l ? (g = co, y = !1) : i.length >= a && (g = Fr, y = !1, i = new Yn(i));
        t:
          for (; ++f < w; ) {
            var j = t[f], F = o == null ? j : o(j);
            if (j = l || j !== 0 ? j : 0, y && F === F) {
              for (var U = L; U--; )
                if (i[U] === F)
                  continue t;
              T.push(j);
            } else g(i, F, l) || T.push(j);
          }
        return T;
      }
      var Rn = Kl(Ye), Il = Kl(To, !0);
      function Tg(t, i) {
        var o = !0;
        return Rn(t, function(l, f, g) {
          return o = !!i(l, f, g), o;
        }), o;
      }
      function Xi(t, i, o) {
        for (var l = -1, f = t.length; ++l < f; ) {
          var g = t[l], y = i(g);
          if (y != null && (w === r ? y === y && !xe(y) : o(y, w)))
            var w = y, T = g;
        }
        return T;
      }
      function Cg(t, i, o, l) {
        var f = t.length;
        for (o = at(o), o < 0 && (o = -o > f ? 0 : f + o), l = l === r || l > f ? f : at(l), l < 0 && (l += f), l = o > l ? 0 : Uu(l); o < l; )
          t[o++] = i;
        return t;
      }
      function Tl(t, i) {
        var o = [];
        return Rn(t, function(l, f, g) {
          i(l, f, g) && o.push(l);
        }), o;
      }
      function Kt(t, i, o, l, f) {
        var g = -1, y = t.length;
        for (o || (o = pm), f || (f = []); ++g < y; ) {
          var w = t[g];
          i > 0 && o(w) ? i > 1 ? Kt(w, i - 1, o, l, f) : En(f, w) : l || (f[f.length] = w);
        }
        return f;
      }
      var Io = ql(), Cl = ql(!0);
      function Ye(t, i) {
        return t && Io(t, i, Yt);
      }
      function To(t, i) {
        return t && Cl(t, i, Yt);
      }
      function Yi(t, i) {
        return kn(i, function(o) {
          return gn(t[o]);
        });
      }
      function Kn(t, i) {
        i = Pn(i, t);
        for (var o = 0, l = i.length; t != null && o < l; )
          t = t[Ke(i[o++])];
        return o && o == l ? t : r;
      }
      function kl(t, i, o) {
        var l = i(t);
        return ot(t) ? l : En(l, o(t));
      }
      function se(t) {
        return t == null ? t === r ? vt : Ks : Gn && Gn in Ct(t) ? cm(t) : xm(t);
      }
      function Co(t, i) {
        return t > i;
      }
      function kg(t, i) {
        return t != null && _t.call(t, i);
      }
      function Eg(t, i) {
        return t != null && i in Ct(t);
      }
      function Ag(t, i, o) {
        return t >= Qt(i, o) && t < Vt(i, o);
      }
      function ko(t, i, o) {
        for (var l = o ? co : Ai, f = t[0].length, g = t.length, y = g, w = M(g), T = 1 / 0, L = []; y--; ) {
          var j = t[y];
          y && i && (j = Ot(j, ye(i))), T = Qt(j.length, T), w[y] = !o && (i || f >= 120 && j.length >= 120) ? new Yn(y && j) : r;
        }
        j = t[0];
        var F = -1, U = w[0];
        t:
          for (; ++F < f && L.length < T; ) {
            var X = j[F], et = i ? i(X) : X;
            if (X = o || X !== 0 ? X : 0, !(U ? Fr(U, et) : l(L, et, o))) {
              for (y = g; --y; ) {
                var lt = w[y];
                if (!(lt ? Fr(lt, et) : l(t[y], et, o)))
                  continue t;
              }
              U && U.push(et), L.push(X);
            }
          }
        return L;
      }
      function Mg(t, i, o, l) {
        return Ye(t, function(f, g, y) {
          i(l, o(f), g, y);
        }), l;
      }
      function Gr(t, i, o) {
        i = Pn(i, t), t = pu(t, i);
        var l = t == null ? t : t[Ke(De(i))];
        return l == null ? r : be(l, t, o);
      }
      function El(t) {
        return Nt(t) && se(t) == on;
      }
      function Rg(t) {
        return Nt(t) && se(t) == it;
      }
      function Og(t) {
        return Nt(t) && se(t) == Sn;
      }
      function Xr(t, i, o, l, f) {
        return t === i ? !0 : t == null || i == null || !Nt(t) && !Nt(i) ? t !== t && i !== i : Pg(t, i, o, l, Xr, f);
      }
      function Pg(t, i, o, l, f, g) {
        var y = ot(t), w = ot(i), T = y ? Bn : te(t), L = w ? Bn : te(i);
        T = T == on ? Ce : T, L = L == on ? Ce : L;
        var j = T == Ce, F = L == Ce, U = T == L;
        if (U && Ln(t)) {
          if (!Ln(i))
            return !1;
          y = !0, j = !1;
        }
        if (U && !j)
          return g || (g = new Ue()), y || _r(t) ? au(t, i, o, l, f, g) : om(t, i, T, o, l, f, g);
        if (!(o & R)) {
          var X = j && _t.call(t, "__wrapped__"), et = F && _t.call(i, "__wrapped__");
          if (X || et) {
            var lt = X ? t.value() : t, nt = et ? i.value() : i;
            return g || (g = new Ue()), f(lt, nt, o, l, g);
          }
        }
        return U ? (g || (g = new Ue()), am(t, i, o, l, f, g)) : !1;
      }
      function Dg(t) {
        return Nt(t) && te(t) == ie;
      }
      function Eo(t, i, o, l) {
        var f = o.length, g = f, y = !l;
        if (t == null)
          return !g;
        for (t = Ct(t); f--; ) {
          var w = o[f];
          if (y && w[2] ? w[1] !== t[w[0]] : !(w[0] in t))
            return !1;
        }
        for (; ++f < g; ) {
          w = o[f];
          var T = w[0], L = t[T], j = w[1];
          if (y && w[2]) {
            if (L === r && !(T in t))
              return !1;
          } else {
            var F = new Ue();
            if (l)
              var U = l(L, j, T, t, i, F);
            if (!(U === r ? Xr(j, L, R | A, l, F) : U))
              return !1;
          }
        }
        return !0;
      }
      function Al(t) {
        if (!Dt(t) || mm(t))
          return !1;
        var i = gn(t) ? D1 : Ip;
        return i.test(Jn(t));
      }
      function Lg(t) {
        return Nt(t) && se(t) == Tn;
      }
      function jg(t) {
        return Nt(t) && te(t) == _;
      }
      function Ng(t) {
        return Nt(t) && ds(t.length) && !!Mt[se(t)];
      }
      function Ml(t) {
        return typeof t == "function" ? t : t == null ? me : typeof t == "object" ? ot(t) ? Pl(t[0], t[1]) : Ol(t) : Ju(t);
      }
      function Ao(t) {
        if (!Kr(t))
          return H1(t);
        var i = [];
        for (var o in Ct(t))
          _t.call(t, o) && o != "constructor" && i.push(o);
        return i;
      }
      function Fg(t) {
        if (!Dt(t))
          return wm(t);
        var i = Kr(t), o = [];
        for (var l in t)
          l == "constructor" && (i || !_t.call(t, l)) || o.push(l);
        return o;
      }
      function Mo(t, i) {
        return t < i;
      }
      function Rl(t, i) {
        var o = -1, l = pe(t) ? M(t.length) : [];
        return Rn(t, function(f, g, y) {
          l[++o] = i(f, g, y);
        }), l;
      }
      function Ol(t) {
        var i = Vo(t);
        return i.length == 1 && i[0][2] ? fu(i[0][0], i[0][1]) : function(o) {
          return o === t || Eo(o, t, i);
        };
      }
      function Pl(t, i) {
        return Xo(t) && du(i) ? fu(Ke(t), i) : function(o) {
          var l = ra(o, t);
          return l === r && l === i ? ia(o, t) : Xr(i, l, R | A);
        };
      }
      function Zi(t, i, o, l, f) {
        t !== i && Io(i, function(g, y) {
          if (f || (f = new Ue()), Dt(g))
            zg(t, i, y, o, Zi, l, f);
          else {
            var w = l ? l(Zo(t, y), g, y + "", t, i, f) : r;
            w === r && (w = g), _o(t, y, w);
          }
        }, ge);
      }
      function zg(t, i, o, l, f, g, y) {
        var w = Zo(t, o), T = Zo(i, o), L = y.get(T);
        if (L) {
          _o(t, o, L);
          return;
        }
        var j = g ? g(w, T, o + "", t, i, y) : r, F = j === r;
        if (F) {
          var U = ot(T), X = !U && Ln(T), et = !U && !X && _r(T);
          j = T, U || X || et ? ot(w) ? j = w : zt(w) ? j = he(w) : X ? (F = !1, j = Vl(T, !0)) : et ? (F = !1, j = Gl(T, !0)) : j = [] : Jr(T) || Qn(T) ? (j = w, Qn(w) ? j = Wu(w) : (!Dt(w) || gn(w)) && (j = uu(T))) : F = !1;
        }
        F && (y.set(T, j), f(j, T, l, g, y), y.delete(T)), _o(t, o, j);
      }
      function Dl(t, i) {
        var o = t.length;
        if (o)
          return i += i < 0 ? o : 0, pn(i, o) ? t[i] : r;
      }
      function Ll(t, i, o) {
        i.length ? i = Ot(i, function(g) {
          return ot(g) ? function(y) {
            return Kn(y, g.length === 1 ? g[0] : g);
          } : g;
        }) : i = [me];
        var l = -1;
        i = Ot(i, ye(J()));
        var f = Rl(t, function(g, y, w) {
          var T = Ot(i, function(L) {
            return L(g);
          });
          return { criteria: T, index: ++l, value: g };
        });
        return f1(f, function(g, y) {
          return Jg(g, y, o);
        });
      }
      function Hg(t, i) {
        return jl(t, i, function(o, l) {
          return ia(t, l);
        });
      }
      function jl(t, i, o) {
        for (var l = -1, f = i.length, g = {}; ++l < f; ) {
          var y = i[l], w = Kn(t, y);
          o(w, y) && Yr(g, Pn(y, t), w);
        }
        return g;
      }
      function Ug(t) {
        return function(i) {
          return Kn(i, t);
        };
      }
      function Ro(t, i, o, l) {
        var f = l ? d1 : dr, g = -1, y = i.length, w = t;
        for (t === i && (i = he(i)), o && (w = Ot(t, ye(o))); ++g < y; )
          for (var T = 0, L = i[g], j = o ? o(L) : L; (T = f(w, j, T, l)) > -1; )
            w !== t && zi.call(w, T, 1), zi.call(t, T, 1);
        return t;
      }
      function Nl(t, i) {
        for (var o = t ? i.length : 0, l = o - 1; o--; ) {
          var f = i[o];
          if (o == l || f !== g) {
            var g = f;
            pn(f) ? zi.call(t, f, 1) : Lo(t, f);
          }
        }
        return t;
      }
      function Oo(t, i) {
        return t + Wi(vl() * (i - t + 1));
      }
      function Wg(t, i, o, l) {
        for (var f = -1, g = Vt(Ui((i - t) / (o || 1)), 0), y = M(g); g--; )
          y[l ? g : ++f] = t, t += o;
        return y;
      }
      function Po(t, i) {
        var o = "";
        if (!t || i < 1 || i > Tt)
          return o;
        do
          i % 2 && (o += t), i = Wi(i / 2), i && (t += t);
        while (i);
        return o;
      }
      function ut(t, i) {
        return Ko(hu(t, i, me), t + "");
      }
      function Bg(t) {
        return wl(Sr(t));
      }
      function $g(t, i) {
        var o = Sr(t);
        return ss(o, Zn(i, 0, o.length));
      }
      function Yr(t, i, o, l) {
        if (!Dt(t))
          return t;
        i = Pn(i, t);
        for (var f = -1, g = i.length, y = g - 1, w = t; w != null && ++f < g; ) {
          var T = Ke(i[f]), L = o;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return t;
          if (f != y) {
            var j = w[T];
            L = l ? l(j, T, w) : r, L === r && (L = Dt(j) ? j : pn(i[f + 1]) ? [] : {});
          }
          $r(w, T, L), w = w[T];
        }
        return t;
      }
      var Fl = Bi ? function(t, i) {
        return Bi.set(t, i), t;
      } : me, Vg = Hi ? function(t, i) {
        return Hi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: oa(i),
          writable: !0
        });
      } : me;
      function Gg(t) {
        return ss(Sr(t));
      }
      function Pe(t, i, o) {
        var l = -1, f = t.length;
        i < 0 && (i = -i > f ? 0 : f + i), o = o > f ? f : o, o < 0 && (o += f), f = i > o ? 0 : o - i >>> 0, i >>>= 0;
        for (var g = M(f); ++l < f; )
          g[l] = t[l + i];
        return g;
      }
      function Xg(t, i) {
        var o;
        return Rn(t, function(l, f, g) {
          return o = i(l, f, g), !o;
        }), !!o;
      }
      function Ki(t, i, o) {
        var l = 0, f = t == null ? l : t.length;
        if (typeof i == "number" && i === i && f <= Wn) {
          for (; l < f; ) {
            var g = l + f >>> 1, y = t[g];
            y !== null && !xe(y) && (o ? y <= i : y < i) ? l = g + 1 : f = g;
          }
          return f;
        }
        return Do(t, i, me, o);
      }
      function Do(t, i, o, l) {
        var f = 0, g = t == null ? 0 : t.length;
        if (g === 0)
          return 0;
        i = o(i);
        for (var y = i !== i, w = i === null, T = xe(i), L = i === r; f < g; ) {
          var j = Wi((f + g) / 2), F = o(t[j]), U = F !== r, X = F === null, et = F === F, lt = xe(F);
          if (y)
            var nt = l || et;
          else L ? nt = et && (l || U) : w ? nt = et && U && (l || !X) : T ? nt = et && U && !X && (l || !lt) : X || lt ? nt = !1 : nt = l ? F <= i : F < i;
          nt ? f = j + 1 : g = j;
        }
        return Qt(g, lr);
      }
      function zl(t, i) {
        for (var o = -1, l = t.length, f = 0, g = []; ++o < l; ) {
          var y = t[o], w = i ? i(y) : y;
          if (!o || !We(w, T)) {
            var T = w;
            g[f++] = y === 0 ? 0 : y;
          }
        }
        return g;
      }
      function Hl(t) {
        return typeof t == "number" ? t : xe(t) ? fe : +t;
      }
      function we(t) {
        if (typeof t == "string")
          return t;
        if (ot(t))
          return Ot(t, we) + "";
        if (xe(t))
          return bl ? bl.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -1 / 0 ? "-0" : i;
      }
      function On(t, i, o) {
        var l = -1, f = Ai, g = t.length, y = !0, w = [], T = w;
        if (o)
          y = !1, f = co;
        else if (g >= a) {
          var L = i ? null : im(t);
          if (L)
            return Ri(L);
          y = !1, f = Fr, T = new Yn();
        } else
          T = i ? [] : w;
        t:
          for (; ++l < g; ) {
            var j = t[l], F = i ? i(j) : j;
            if (j = o || j !== 0 ? j : 0, y && F === F) {
              for (var U = T.length; U--; )
                if (T[U] === F)
                  continue t;
              i && T.push(F), w.push(j);
            } else f(T, F, o) || (T !== w && T.push(F), w.push(j));
          }
        return w;
      }
      function Lo(t, i) {
        return i = Pn(i, t), t = pu(t, i), t == null || delete t[Ke(De(i))];
      }
      function Ul(t, i, o, l) {
        return Yr(t, i, o(Kn(t, i)), l);
      }
      function qi(t, i, o, l) {
        for (var f = t.length, g = l ? f : -1; (l ? g-- : ++g < f) && i(t[g], g, t); )
          ;
        return o ? Pe(t, l ? 0 : g, l ? g + 1 : f) : Pe(t, l ? g + 1 : 0, l ? f : g);
      }
      function Wl(t, i) {
        var o = t;
        return o instanceof ht && (o = o.value()), lo(i, function(l, f) {
          return f.func.apply(f.thisArg, En([l], f.args));
        }, o);
      }
      function jo(t, i, o) {
        var l = t.length;
        if (l < 2)
          return l ? On(t[0]) : [];
        for (var f = -1, g = M(l); ++f < l; )
          for (var y = t[f], w = -1; ++w < l; )
            w != f && (g[f] = Vr(g[f] || y, t[w], i, o));
        return On(Kt(g, 1), i, o);
      }
      function Bl(t, i, o) {
        for (var l = -1, f = t.length, g = i.length, y = {}; ++l < f; ) {
          var w = l < g ? i[l] : r;
          o(y, t[l], w);
        }
        return y;
      }
      function No(t) {
        return zt(t) ? t : [];
      }
      function Fo(t) {
        return typeof t == "function" ? t : me;
      }
      function Pn(t, i) {
        return ot(t) ? t : Xo(t, i) ? [t] : bu(xt(t));
      }
      var Yg = ut;
      function Dn(t, i, o) {
        var l = t.length;
        return o = o === r ? l : o, !i && o >= l ? t : Pe(t, i, o);
      }
      var $l = L1 || function(t) {
        return Zt.clearTimeout(t);
      };
      function Vl(t, i) {
        if (i)
          return t.slice();
        var o = t.length, l = fl ? fl(o) : new t.constructor(o);
        return t.copy(l), l;
      }
      function zo(t) {
        var i = new t.constructor(t.byteLength);
        return new Ni(i).set(new Ni(t)), i;
      }
      function Zg(t, i) {
        var o = i ? zo(t.buffer) : t.buffer;
        return new t.constructor(o, t.byteOffset, t.byteLength);
      }
      function Kg(t) {
        var i = new t.constructor(t.source, Ec.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function qg(t) {
        return Br ? Ct(Br.call(t)) : {};
      }
      function Gl(t, i) {
        var o = i ? zo(t.buffer) : t.buffer;
        return new t.constructor(o, t.byteOffset, t.length);
      }
      function Xl(t, i) {
        if (t !== i) {
          var o = t !== r, l = t === null, f = t === t, g = xe(t), y = i !== r, w = i === null, T = i === i, L = xe(i);
          if (!w && !L && !g && t > i || g && y && T && !w && !L || l && y && T || !o && T || !f)
            return 1;
          if (!l && !g && !L && t < i || L && o && f && !l && !g || w && o && f || !y && f || !T)
            return -1;
        }
        return 0;
      }
      function Jg(t, i, o) {
        for (var l = -1, f = t.criteria, g = i.criteria, y = f.length, w = o.length; ++l < y; ) {
          var T = Xl(f[l], g[l]);
          if (T) {
            if (l >= w)
              return T;
            var L = o[l];
            return T * (L == "desc" ? -1 : 1);
          }
        }
        return t.index - i.index;
      }
      function Yl(t, i, o, l) {
        for (var f = -1, g = t.length, y = o.length, w = -1, T = i.length, L = Vt(g - y, 0), j = M(T + L), F = !l; ++w < T; )
          j[w] = i[w];
        for (; ++f < y; )
          (F || f < g) && (j[o[f]] = t[f]);
        for (; L--; )
          j[w++] = t[f++];
        return j;
      }
      function Zl(t, i, o, l) {
        for (var f = -1, g = t.length, y = -1, w = o.length, T = -1, L = i.length, j = Vt(g - w, 0), F = M(j + L), U = !l; ++f < j; )
          F[f] = t[f];
        for (var X = f; ++T < L; )
          F[X + T] = i[T];
        for (; ++y < w; )
          (U || f < g) && (F[X + o[y]] = t[f++]);
        return F;
      }
      function he(t, i) {
        var o = -1, l = t.length;
        for (i || (i = M(l)); ++o < l; )
          i[o] = t[o];
        return i;
      }
      function Ze(t, i, o, l) {
        var f = !o;
        o || (o = {});
        for (var g = -1, y = i.length; ++g < y; ) {
          var w = i[g], T = l ? l(o[w], t[w], w, o, t) : r;
          T === r && (T = t[w]), f ? dn(o, w, T) : $r(o, w, T);
        }
        return o;
      }
      function Qg(t, i) {
        return Ze(t, Go(t), i);
      }
      function tm(t, i) {
        return Ze(t, cu(t), i);
      }
      function Ji(t, i) {
        return function(o, l) {
          var f = ot(o) ? s1 : _g, g = i ? i() : {};
          return f(o, t, J(l, 2), g);
        };
      }
      function yr(t) {
        return ut(function(i, o) {
          var l = -1, f = o.length, g = f > 1 ? o[f - 1] : r, y = f > 2 ? o[2] : r;
          for (g = t.length > 3 && typeof g == "function" ? (f--, g) : r, y && oe(o[0], o[1], y) && (g = f < 3 ? r : g, f = 1), i = Ct(i); ++l < f; ) {
            var w = o[l];
            w && t(i, w, l, g);
          }
          return i;
        });
      }
      function Kl(t, i) {
        return function(o, l) {
          if (o == null)
            return o;
          if (!pe(o))
            return t(o, l);
          for (var f = o.length, g = i ? f : -1, y = Ct(o); (i ? g-- : ++g < f) && l(y[g], g, y) !== !1; )
            ;
          return o;
        };
      }
      function ql(t) {
        return function(i, o, l) {
          for (var f = -1, g = Ct(i), y = l(i), w = y.length; w--; ) {
            var T = y[t ? w : ++f];
            if (o(g[T], T, g) === !1)
              break;
          }
          return i;
        };
      }
      function em(t, i, o) {
        var l = i & E, f = Zr(t);
        function g() {
          var y = this && this !== Zt && this instanceof g ? f : t;
          return y.apply(l ? o : this, arguments);
        }
        return g;
      }
      function Jl(t) {
        return function(i) {
          i = xt(i);
          var o = fr(i) ? He(i) : r, l = o ? o[0] : i.charAt(0), f = o ? Dn(o, 1).join("") : i.slice(1);
          return l[t]() + f;
        };
      }
      function wr(t) {
        return function(i) {
          return lo(Ku(Zu(i).replace(Vp, "")), t, "");
        };
      }
      function Zr(t) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new t();
            case 1:
              return new t(i[0]);
            case 2:
              return new t(i[0], i[1]);
            case 3:
              return new t(i[0], i[1], i[2]);
            case 4:
              return new t(i[0], i[1], i[2], i[3]);
            case 5:
              return new t(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var o = br(t.prototype), l = t.apply(o, i);
          return Dt(l) ? l : o;
        };
      }
      function nm(t, i, o) {
        var l = Zr(t);
        function f() {
          for (var g = arguments.length, y = M(g), w = g, T = xr(f); w--; )
            y[w] = arguments[w];
          var L = g < 3 && y[0] !== T && y[g - 1] !== T ? [] : An(y, T);
          if (g -= L.length, g < o)
            return ru(
              t,
              i,
              Qi,
              f.placeholder,
              r,
              y,
              L,
              r,
              r,
              o - g
            );
          var j = this && this !== Zt && this instanceof f ? l : t;
          return be(j, this, y);
        }
        return f;
      }
      function Ql(t) {
        return function(i, o, l) {
          var f = Ct(i);
          if (!pe(i)) {
            var g = J(o, 3);
            i = Yt(i), o = function(w) {
              return g(f[w], w, f);
            };
          }
          var y = t(i, o, l);
          return y > -1 ? f[g ? i[y] : y] : r;
        };
      }
      function tu(t) {
        return hn(function(i) {
          var o = i.length, l = o, f = Re.prototype.thru;
          for (t && i.reverse(); l--; ) {
            var g = i[l];
            if (typeof g != "function")
              throw new Me(u);
            if (f && !y && rs(g) == "wrapper")
              var y = new Re([], !0);
          }
          for (l = y ? l : o; ++l < o; ) {
            g = i[l];
            var w = rs(g), T = w == "wrapper" ? $o(g) : r;
            T && Yo(T[0]) && T[1] == (q | N | K | Z) && !T[4].length && T[9] == 1 ? y = y[rs(T[0])].apply(y, T[3]) : y = g.length == 1 && Yo(g) ? y[w]() : y.thru(g);
          }
          return function() {
            var L = arguments, j = L[0];
            if (y && L.length == 1 && ot(j))
              return y.plant(j).value();
            for (var F = 0, U = o ? i[F].apply(this, L) : j; ++F < o; )
              U = i[F].call(this, U);
            return U;
          };
        });
      }
      function Qi(t, i, o, l, f, g, y, w, T, L) {
        var j = i & q, F = i & E, U = i & P, X = i & (N | z), et = i & G, lt = U ? r : Zr(t);
        function nt() {
          for (var ft = arguments.length, mt = M(ft), _e = ft; _e--; )
            mt[_e] = arguments[_e];
          if (X)
            var ae = xr(nt), Se = p1(mt, ae);
          if (l && (mt = Yl(mt, l, f, X)), g && (mt = Zl(mt, g, y, X)), ft -= Se, X && ft < L) {
            var Ht = An(mt, ae);
            return ru(
              t,
              i,
              Qi,
              nt.placeholder,
              o,
              mt,
              Ht,
              w,
              T,
              L - ft
            );
          }
          var Be = F ? o : this, vn = U ? Be[t] : t;
          return ft = mt.length, w ? mt = _m(mt, w) : et && ft > 1 && mt.reverse(), j && T < ft && (mt.length = T), this && this !== Zt && this instanceof nt && (vn = lt || Zr(vn)), vn.apply(Be, mt);
        }
        return nt;
      }
      function eu(t, i) {
        return function(o, l) {
          return Mg(o, t, i(l), {});
        };
      }
      function ts(t, i) {
        return function(o, l) {
          var f;
          if (o === r && l === r)
            return i;
          if (o !== r && (f = o), l !== r) {
            if (f === r)
              return l;
            typeof o == "string" || typeof l == "string" ? (o = we(o), l = we(l)) : (o = Hl(o), l = Hl(l)), f = t(o, l);
          }
          return f;
        };
      }
      function Ho(t) {
        return hn(function(i) {
          return i = Ot(i, ye(J())), ut(function(o) {
            var l = this;
            return t(i, function(f) {
              return be(f, l, o);
            });
          });
        });
      }
      function es(t, i) {
        i = i === r ? " " : we(i);
        var o = i.length;
        if (o < 2)
          return o ? Po(i, t) : i;
        var l = Po(i, Ui(t / hr(i)));
        return fr(i) ? Dn(He(l), 0, t).join("") : l.slice(0, t);
      }
      function rm(t, i, o, l) {
        var f = i & E, g = Zr(t);
        function y() {
          for (var w = -1, T = arguments.length, L = -1, j = l.length, F = M(j + T), U = this && this !== Zt && this instanceof y ? g : t; ++L < j; )
            F[L] = l[L];
          for (; T--; )
            F[L++] = arguments[++w];
          return be(U, f ? o : this, F);
        }
        return y;
      }
      function nu(t) {
        return function(i, o, l) {
          return l && typeof l != "number" && oe(i, o, l) && (o = l = r), i = mn(i), o === r ? (o = i, i = 0) : o = mn(o), l = l === r ? i < o ? 1 : -1 : mn(l), Wg(i, o, l, t);
        };
      }
      function ns(t) {
        return function(i, o) {
          return typeof i == "string" && typeof o == "string" || (i = Le(i), o = Le(o)), t(i, o);
        };
      }
      function ru(t, i, o, l, f, g, y, w, T, L) {
        var j = i & N, F = j ? y : r, U = j ? r : y, X = j ? g : r, et = j ? r : g;
        i |= j ? K : Y, i &= ~(j ? Y : K), i & D || (i &= -4);
        var lt = [
          t,
          i,
          f,
          X,
          F,
          et,
          U,
          w,
          T,
          L
        ], nt = o.apply(r, lt);
        return Yo(t) && gu(nt, lt), nt.placeholder = l, mu(nt, t, i);
      }
      function Uo(t) {
        var i = $t[t];
        return function(o, l) {
          if (o = Le(o), l = l == null ? 0 : Qt(at(l), 292), l && ml(o)) {
            var f = (xt(o) + "e").split("e"), g = i(f[0] + "e" + (+f[1] + l));
            return f = (xt(g) + "e").split("e"), +(f[0] + "e" + (+f[1] - l));
          }
          return i(o);
        };
      }
      var im = mr && 1 / Ri(new mr([, -0]))[1] == It ? function(t) {
        return new mr(t);
      } : la;
      function iu(t) {
        return function(i) {
          var o = te(i);
          return o == ie ? vo(i) : o == _ ? x1(i) : h1(i, t(i));
        };
      }
      function fn(t, i, o, l, f, g, y, w) {
        var T = i & P;
        if (!T && typeof t != "function")
          throw new Me(u);
        var L = l ? l.length : 0;
        if (L || (i &= -97, l = f = r), y = y === r ? y : Vt(at(y), 0), w = w === r ? w : at(w), L -= f ? f.length : 0, i & Y) {
          var j = l, F = f;
          l = f = r;
        }
        var U = T ? r : $o(t), X = [
          t,
          i,
          o,
          l,
          f,
          j,
          F,
          g,
          y,
          w
        ];
        if (U && ym(X, U), t = X[0], i = X[1], o = X[2], l = X[3], f = X[4], w = X[9] = X[9] === r ? T ? 0 : t.length : Vt(X[9] - L, 0), !w && i & (N | z) && (i &= -25), !i || i == E)
          var et = em(t, i, o);
        else i == N || i == z ? et = nm(t, i, w) : (i == K || i == (E | K)) && !f.length ? et = rm(t, i, o, l) : et = Qi.apply(r, X);
        var lt = U ? Fl : gu;
        return mu(lt(et, X), t, i);
      }
      function su(t, i, o, l) {
        return t === r || We(t, gr[o]) && !_t.call(l, o) ? i : t;
      }
      function ou(t, i, o, l, f, g) {
        return Dt(t) && Dt(i) && (g.set(i, t), Zi(t, i, r, ou, g), g.delete(i)), t;
      }
      function sm(t) {
        return Jr(t) ? r : t;
      }
      function au(t, i, o, l, f, g) {
        var y = o & R, w = t.length, T = i.length;
        if (w != T && !(y && T > w))
          return !1;
        var L = g.get(t), j = g.get(i);
        if (L && j)
          return L == i && j == t;
        var F = -1, U = !0, X = o & A ? new Yn() : r;
        for (g.set(t, i), g.set(i, t); ++F < w; ) {
          var et = t[F], lt = i[F];
          if (l)
            var nt = y ? l(lt, et, F, i, t, g) : l(et, lt, F, t, i, g);
          if (nt !== r) {
            if (nt)
              continue;
            U = !1;
            break;
          }
          if (X) {
            if (!uo(i, function(ft, mt) {
              if (!Fr(X, mt) && (et === ft || f(et, ft, o, l, g)))
                return X.push(mt);
            })) {
              U = !1;
              break;
            }
          } else if (!(et === lt || f(et, lt, o, l, g))) {
            U = !1;
            break;
          }
        }
        return g.delete(t), g.delete(i), U;
      }
      function om(t, i, o, l, f, g, y) {
        switch (o) {
          case Jt:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
              return !1;
            t = t.buffer, i = i.buffer;
          case it:
            return !(t.byteLength != i.byteLength || !g(new Ni(t), new Ni(i)));
          case _n:
          case Sn:
          case an:
            return We(+t, +i);
          case $n:
            return t.name == i.name && t.message == i.message;
          case Tn:
          case $:
            return t == i + "";
          case ie:
            var w = vo;
          case _:
            var T = l & R;
            if (w || (w = Ri), t.size != i.size && !T)
              return !1;
            var L = y.get(t);
            if (L)
              return L == i;
            l |= A, y.set(t, i);
            var j = au(w(t), w(i), l, f, g, y);
            return y.delete(t), j;
          case V:
            if (Br)
              return Br.call(t) == Br.call(i);
        }
        return !1;
      }
      function am(t, i, o, l, f, g) {
        var y = o & R, w = Wo(t), T = w.length, L = Wo(i), j = L.length;
        if (T != j && !y)
          return !1;
        for (var F = T; F--; ) {
          var U = w[F];
          if (!(y ? U in i : _t.call(i, U)))
            return !1;
        }
        var X = g.get(t), et = g.get(i);
        if (X && et)
          return X == i && et == t;
        var lt = !0;
        g.set(t, i), g.set(i, t);
        for (var nt = y; ++F < T; ) {
          U = w[F];
          var ft = t[U], mt = i[U];
          if (l)
            var _e = y ? l(mt, ft, U, i, t, g) : l(ft, mt, U, t, i, g);
          if (!(_e === r ? ft === mt || f(ft, mt, o, l, g) : _e)) {
            lt = !1;
            break;
          }
          nt || (nt = U == "constructor");
        }
        if (lt && !nt) {
          var ae = t.constructor, Se = i.constructor;
          ae != Se && "constructor" in t && "constructor" in i && !(typeof ae == "function" && ae instanceof ae && typeof Se == "function" && Se instanceof Se) && (lt = !1);
        }
        return g.delete(t), g.delete(i), lt;
      }
      function hn(t) {
        return Ko(hu(t, r, _u), t + "");
      }
      function Wo(t) {
        return kl(t, Yt, Go);
      }
      function Bo(t) {
        return kl(t, ge, cu);
      }
      var $o = Bi ? function(t) {
        return Bi.get(t);
      } : la;
      function rs(t) {
        for (var i = t.name + "", o = vr[i], l = _t.call(vr, i) ? o.length : 0; l--; ) {
          var f = o[l], g = f.func;
          if (g == null || g == t)
            return f.name;
        }
        return i;
      }
      function xr(t) {
        var i = _t.call(p, "placeholder") ? p : t;
        return i.placeholder;
      }
      function J() {
        var t = p.iteratee || aa;
        return t = t === aa ? Ml : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function is(t, i) {
        var o = t.__data__;
        return gm(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
      }
      function Vo(t) {
        for (var i = Yt(t), o = i.length; o--; ) {
          var l = i[o], f = t[l];
          i[o] = [l, f, du(f)];
        }
        return i;
      }
      function qn(t, i) {
        var o = b1(t, i);
        return Al(o) ? o : r;
      }
      function cm(t) {
        var i = _t.call(t, Gn), o = t[Gn];
        try {
          t[Gn] = r;
          var l = !0;
        } catch {
        }
        var f = Li.call(t);
        return l && (i ? t[Gn] = o : delete t[Gn]), f;
      }
      var Go = yo ? function(t) {
        return t == null ? [] : (t = Ct(t), kn(yo(t), function(i) {
          return pl.call(t, i);
        }));
      } : ua, cu = yo ? function(t) {
        for (var i = []; t; )
          En(i, Go(t)), t = Fi(t);
        return i;
      } : ua, te = se;
      (wo && te(new wo(new ArrayBuffer(1))) != Jt || Hr && te(new Hr()) != ie || xo && te(xo.resolve()) != Nr || mr && te(new mr()) != _ || Ur && te(new Ur()) != jt) && (te = function(t) {
        var i = se(t), o = i == Ce ? t.constructor : r, l = o ? Jn(o) : "";
        if (l)
          switch (l) {
            case $1:
              return Jt;
            case V1:
              return ie;
            case G1:
              return Nr;
            case X1:
              return _;
            case Y1:
              return jt;
          }
        return i;
      });
      function lm(t, i, o) {
        for (var l = -1, f = o.length; ++l < f; ) {
          var g = o[l], y = g.size;
          switch (g.type) {
            case "drop":
              t += y;
              break;
            case "dropRight":
              i -= y;
              break;
            case "take":
              i = Qt(i, t + y);
              break;
            case "takeRight":
              t = Vt(t, i - y);
              break;
          }
        }
        return { start: t, end: i };
      }
      function um(t) {
        var i = t.match(mp);
        return i ? i[1].split(vp) : [];
      }
      function lu(t, i, o) {
        i = Pn(i, t);
        for (var l = -1, f = i.length, g = !1; ++l < f; ) {
          var y = Ke(i[l]);
          if (!(g = t != null && o(t, y)))
            break;
          t = t[y];
        }
        return g || ++l != f ? g : (f = t == null ? 0 : t.length, !!f && ds(f) && pn(y, f) && (ot(t) || Qn(t)));
      }
      function dm(t) {
        var i = t.length, o = new t.constructor(i);
        return i && typeof t[0] == "string" && _t.call(t, "index") && (o.index = t.index, o.input = t.input), o;
      }
      function uu(t) {
        return typeof t.constructor == "function" && !Kr(t) ? br(Fi(t)) : {};
      }
      function fm(t, i, o) {
        var l = t.constructor;
        switch (i) {
          case it:
            return zo(t);
          case _n:
          case Sn:
            return new l(+t);
          case Jt:
            return Zg(t, o);
          case Xe:
          case Bt:
          case ze:
          case cn:
          case ke:
          case Cn:
          case ve:
          case qs:
          case Js:
            return Gl(t, o);
          case ie:
            return new l();
          case an:
          case $:
            return new l(t);
          case Tn:
            return Kg(t);
          case _:
            return new l();
          case V:
            return qg(t);
        }
      }
      function hm(t, i) {
        var o = i.length;
        if (!o)
          return t;
        var l = o - 1;
        return i[l] = (o > 1 ? "& " : "") + i[l], i = i.join(o > 2 ? ", " : " "), t.replace(gp, `{
/* [wrapped with ` + i + `] */
`);
      }
      function pm(t) {
        return ot(t) || Qn(t) || !!(gl && t && t[gl]);
      }
      function pn(t, i) {
        var o = typeof t;
        return i = i ?? Tt, !!i && (o == "number" || o != "symbol" && Cp.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function oe(t, i, o) {
        if (!Dt(o))
          return !1;
        var l = typeof i;
        return (l == "number" ? pe(o) && pn(i, o.length) : l == "string" && i in o) ? We(o[i], t) : !1;
      }
      function Xo(t, i) {
        if (ot(t))
          return !1;
        var o = typeof t;
        return o == "number" || o == "symbol" || o == "boolean" || t == null || xe(t) ? !0 : dp.test(t) || !up.test(t) || i != null && t in Ct(i);
      }
      function gm(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function Yo(t) {
        var i = rs(t), o = p[i];
        if (typeof o != "function" || !(i in ht.prototype))
          return !1;
        if (t === o)
          return !0;
        var l = $o(o);
        return !!l && t === l[0];
      }
      function mm(t) {
        return !!dl && dl in t;
      }
      var vm = Pi ? gn : da;
      function Kr(t) {
        var i = t && t.constructor, o = typeof i == "function" && i.prototype || gr;
        return t === o;
      }
      function du(t) {
        return t === t && !Dt(t);
      }
      function fu(t, i) {
        return function(o) {
          return o == null ? !1 : o[t] === i && (i !== r || t in Ct(o));
        };
      }
      function bm(t) {
        var i = ls(t, function(l) {
          return o.size === m && o.clear(), l;
        }), o = i.cache;
        return i;
      }
      function ym(t, i) {
        var o = t[1], l = i[1], f = o | l, g = f < (E | P | q), y = l == q && o == N || l == q && o == Z && t[7].length <= i[8] || l == (q | Z) && i[7].length <= i[8] && o == N;
        if (!(g || y))
          return t;
        l & E && (t[2] = i[2], f |= o & E ? 0 : D);
        var w = i[3];
        if (w) {
          var T = t[3];
          t[3] = T ? Yl(T, w, i[4]) : w, t[4] = T ? An(t[3], b) : i[4];
        }
        return w = i[5], w && (T = t[5], t[5] = T ? Zl(T, w, i[6]) : w, t[6] = T ? An(t[5], b) : i[6]), w = i[7], w && (t[7] = w), l & q && (t[8] = t[8] == null ? i[8] : Qt(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = f, t;
      }
      function wm(t) {
        var i = [];
        if (t != null)
          for (var o in Ct(t))
            i.push(o);
        return i;
      }
      function xm(t) {
        return Li.call(t);
      }
      function hu(t, i, o) {
        return i = Vt(i === r ? t.length - 1 : i, 0), function() {
          for (var l = arguments, f = -1, g = Vt(l.length - i, 0), y = M(g); ++f < g; )
            y[f] = l[i + f];
          f = -1;
          for (var w = M(i + 1); ++f < i; )
            w[f] = l[f];
          return w[i] = o(y), be(t, this, w);
        };
      }
      function pu(t, i) {
        return i.length < 2 ? t : Kn(t, Pe(i, 0, -1));
      }
      function _m(t, i) {
        for (var o = t.length, l = Qt(i.length, o), f = he(t); l--; ) {
          var g = i[l];
          t[l] = pn(g, o) ? f[g] : r;
        }
        return t;
      }
      function Zo(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var gu = vu(Fl), qr = N1 || function(t, i) {
        return Zt.setTimeout(t, i);
      }, Ko = vu(Vg);
      function mu(t, i, o) {
        var l = i + "";
        return Ko(t, hm(l, Sm(um(l), o)));
      }
      function vu(t) {
        var i = 0, o = 0;
        return function() {
          var l = U1(), f = dt - (l - o);
          if (o = l, f > 0) {
            if (++i >= B)
              return arguments[0];
          } else
            i = 0;
          return t.apply(r, arguments);
        };
      }
      function ss(t, i) {
        var o = -1, l = t.length, f = l - 1;
        for (i = i === r ? l : i; ++o < i; ) {
          var g = Oo(o, f), y = t[g];
          t[g] = t[o], t[o] = y;
        }
        return t.length = i, t;
      }
      var bu = bm(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(fp, function(o, l, f, g) {
          i.push(f ? g.replace(wp, "$1") : l || o);
        }), i;
      });
      function Ke(t) {
        if (typeof t == "string" || xe(t))
          return t;
        var i = t + "";
        return i == "0" && 1 / t == -1 / 0 ? "-0" : i;
      }
      function Jn(t) {
        if (t != null) {
          try {
            return Di.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Sm(t, i) {
        return Ae(sn, function(o) {
          var l = "_." + o[0];
          i & o[1] && !Ai(t, l) && t.push(l);
        }), t.sort();
      }
      function yu(t) {
        if (t instanceof ht)
          return t.clone();
        var i = new Re(t.__wrapped__, t.__chain__);
        return i.__actions__ = he(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function Im(t, i, o) {
        (o ? oe(t, i, o) : i === r) ? i = 1 : i = Vt(at(i), 0);
        var l = t == null ? 0 : t.length;
        if (!l || i < 1)
          return [];
        for (var f = 0, g = 0, y = M(Ui(l / i)); f < l; )
          y[g++] = Pe(t, f, f += i);
        return y;
      }
      function Tm(t) {
        for (var i = -1, o = t == null ? 0 : t.length, l = 0, f = []; ++i < o; ) {
          var g = t[i];
          g && (f[l++] = g);
        }
        return f;
      }
      function Cm() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var i = M(t - 1), o = arguments[0], l = t; l--; )
          i[l - 1] = arguments[l];
        return En(ot(o) ? he(o) : [o], Kt(i, 1));
      }
      var km = ut(function(t, i) {
        return zt(t) ? Vr(t, Kt(i, 1, zt, !0)) : [];
      }), Em = ut(function(t, i) {
        var o = De(i);
        return zt(o) && (o = r), zt(t) ? Vr(t, Kt(i, 1, zt, !0), J(o, 2)) : [];
      }), Am = ut(function(t, i) {
        var o = De(i);
        return zt(o) && (o = r), zt(t) ? Vr(t, Kt(i, 1, zt, !0), r, o) : [];
      });
      function Mm(t, i, o) {
        var l = t == null ? 0 : t.length;
        return l ? (i = o || i === r ? 1 : at(i), Pe(t, i < 0 ? 0 : i, l)) : [];
      }
      function Rm(t, i, o) {
        var l = t == null ? 0 : t.length;
        return l ? (i = o || i === r ? 1 : at(i), i = l - i, Pe(t, 0, i < 0 ? 0 : i)) : [];
      }
      function Om(t, i) {
        return t && t.length ? qi(t, J(i, 3), !0, !0) : [];
      }
      function Pm(t, i) {
        return t && t.length ? qi(t, J(i, 3), !0) : [];
      }
      function Dm(t, i, o, l) {
        var f = t == null ? 0 : t.length;
        return f ? (o && typeof o != "number" && oe(t, i, o) && (o = 0, l = f), Cg(t, i, o, l)) : [];
      }
      function wu(t, i, o) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = o == null ? 0 : at(o);
        return f < 0 && (f = Vt(l + f, 0)), Mi(t, J(i, 3), f);
      }
      function xu(t, i, o) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = l - 1;
        return o !== r && (f = at(o), f = o < 0 ? Vt(l + f, 0) : Qt(f, l - 1)), Mi(t, J(i, 3), f, !0);
      }
      function _u(t) {
        var i = t == null ? 0 : t.length;
        return i ? Kt(t, 1) : [];
      }
      function Lm(t) {
        var i = t == null ? 0 : t.length;
        return i ? Kt(t, It) : [];
      }
      function jm(t, i) {
        var o = t == null ? 0 : t.length;
        return o ? (i = i === r ? 1 : at(i), Kt(t, i)) : [];
      }
      function Nm(t) {
        for (var i = -1, o = t == null ? 0 : t.length, l = {}; ++i < o; ) {
          var f = t[i];
          l[f[0]] = f[1];
        }
        return l;
      }
      function Su(t) {
        return t && t.length ? t[0] : r;
      }
      function Fm(t, i, o) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = o == null ? 0 : at(o);
        return f < 0 && (f = Vt(l + f, 0)), dr(t, i, f);
      }
      function zm(t) {
        var i = t == null ? 0 : t.length;
        return i ? Pe(t, 0, -1) : [];
      }
      var Hm = ut(function(t) {
        var i = Ot(t, No);
        return i.length && i[0] === t[0] ? ko(i) : [];
      }), Um = ut(function(t) {
        var i = De(t), o = Ot(t, No);
        return i === De(o) ? i = r : o.pop(), o.length && o[0] === t[0] ? ko(o, J(i, 2)) : [];
      }), Wm = ut(function(t) {
        var i = De(t), o = Ot(t, No);
        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === t[0] ? ko(o, r, i) : [];
      });
      function Bm(t, i) {
        return t == null ? "" : z1.call(t, i);
      }
      function De(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : r;
      }
      function $m(t, i, o) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var f = l;
        return o !== r && (f = at(o), f = f < 0 ? Vt(l + f, 0) : Qt(f, l - 1)), i === i ? S1(t, i, f) : Mi(t, rl, f, !0);
      }
      function Vm(t, i) {
        return t && t.length ? Dl(t, at(i)) : r;
      }
      var Gm = ut(Iu);
      function Iu(t, i) {
        return t && t.length && i && i.length ? Ro(t, i) : t;
      }
      function Xm(t, i, o) {
        return t && t.length && i && i.length ? Ro(t, i, J(o, 2)) : t;
      }
      function Ym(t, i, o) {
        return t && t.length && i && i.length ? Ro(t, i, r, o) : t;
      }
      var Zm = hn(function(t, i) {
        var o = t == null ? 0 : t.length, l = So(t, i);
        return Nl(t, Ot(i, function(f) {
          return pn(f, o) ? +f : f;
        }).sort(Xl)), l;
      });
      function Km(t, i) {
        var o = [];
        if (!(t && t.length))
          return o;
        var l = -1, f = [], g = t.length;
        for (i = J(i, 3); ++l < g; ) {
          var y = t[l];
          i(y, l, t) && (o.push(y), f.push(l));
        }
        return Nl(t, f), o;
      }
      function qo(t) {
        return t == null ? t : B1.call(t);
      }
      function qm(t, i, o) {
        var l = t == null ? 0 : t.length;
        return l ? (o && typeof o != "number" && oe(t, i, o) ? (i = 0, o = l) : (i = i == null ? 0 : at(i), o = o === r ? l : at(o)), Pe(t, i, o)) : [];
      }
      function Jm(t, i) {
        return Ki(t, i);
      }
      function Qm(t, i, o) {
        return Do(t, i, J(o, 2));
      }
      function t0(t, i) {
        var o = t == null ? 0 : t.length;
        if (o) {
          var l = Ki(t, i);
          if (l < o && We(t[l], i))
            return l;
        }
        return -1;
      }
      function e0(t, i) {
        return Ki(t, i, !0);
      }
      function n0(t, i, o) {
        return Do(t, i, J(o, 2), !0);
      }
      function r0(t, i) {
        var o = t == null ? 0 : t.length;
        if (o) {
          var l = Ki(t, i, !0) - 1;
          if (We(t[l], i))
            return l;
        }
        return -1;
      }
      function i0(t) {
        return t && t.length ? zl(t) : [];
      }
      function s0(t, i) {
        return t && t.length ? zl(t, J(i, 2)) : [];
      }
      function o0(t) {
        var i = t == null ? 0 : t.length;
        return i ? Pe(t, 1, i) : [];
      }
      function a0(t, i, o) {
        return t && t.length ? (i = o || i === r ? 1 : at(i), Pe(t, 0, i < 0 ? 0 : i)) : [];
      }
      function c0(t, i, o) {
        var l = t == null ? 0 : t.length;
        return l ? (i = o || i === r ? 1 : at(i), i = l - i, Pe(t, i < 0 ? 0 : i, l)) : [];
      }
      function l0(t, i) {
        return t && t.length ? qi(t, J(i, 3), !1, !0) : [];
      }
      function u0(t, i) {
        return t && t.length ? qi(t, J(i, 3)) : [];
      }
      var d0 = ut(function(t) {
        return On(Kt(t, 1, zt, !0));
      }), f0 = ut(function(t) {
        var i = De(t);
        return zt(i) && (i = r), On(Kt(t, 1, zt, !0), J(i, 2));
      }), h0 = ut(function(t) {
        var i = De(t);
        return i = typeof i == "function" ? i : r, On(Kt(t, 1, zt, !0), r, i);
      });
      function p0(t) {
        return t && t.length ? On(t) : [];
      }
      function g0(t, i) {
        return t && t.length ? On(t, J(i, 2)) : [];
      }
      function m0(t, i) {
        return i = typeof i == "function" ? i : r, t && t.length ? On(t, r, i) : [];
      }
      function Jo(t) {
        if (!(t && t.length))
          return [];
        var i = 0;
        return t = kn(t, function(o) {
          if (zt(o))
            return i = Vt(o.length, i), !0;
        }), go(i, function(o) {
          return Ot(t, fo(o));
        });
      }
      function Tu(t, i) {
        if (!(t && t.length))
          return [];
        var o = Jo(t);
        return i == null ? o : Ot(o, function(l) {
          return be(i, r, l);
        });
      }
      var v0 = ut(function(t, i) {
        return zt(t) ? Vr(t, i) : [];
      }), b0 = ut(function(t) {
        return jo(kn(t, zt));
      }), y0 = ut(function(t) {
        var i = De(t);
        return zt(i) && (i = r), jo(kn(t, zt), J(i, 2));
      }), w0 = ut(function(t) {
        var i = De(t);
        return i = typeof i == "function" ? i : r, jo(kn(t, zt), r, i);
      }), x0 = ut(Jo);
      function _0(t, i) {
        return Bl(t || [], i || [], $r);
      }
      function S0(t, i) {
        return Bl(t || [], i || [], Yr);
      }
      var I0 = ut(function(t) {
        var i = t.length, o = i > 1 ? t[i - 1] : r;
        return o = typeof o == "function" ? (t.pop(), o) : r, Tu(t, o);
      });
      function Cu(t) {
        var i = p(t);
        return i.__chain__ = !0, i;
      }
      function T0(t, i) {
        return i(t), t;
      }
      function os(t, i) {
        return i(t);
      }
      var C0 = hn(function(t) {
        var i = t.length, o = i ? t[0] : 0, l = this.__wrapped__, f = function(g) {
          return So(g, t);
        };
        return i > 1 || this.__actions__.length || !(l instanceof ht) || !pn(o) ? this.thru(f) : (l = l.slice(o, +o + (i ? 1 : 0)), l.__actions__.push({
          func: os,
          args: [f],
          thisArg: r
        }), new Re(l, this.__chain__).thru(function(g) {
          return i && !g.length && g.push(r), g;
        }));
      });
      function k0() {
        return Cu(this);
      }
      function E0() {
        return new Re(this.value(), this.__chain__);
      }
      function A0() {
        this.__values__ === r && (this.__values__ = Hu(this.value()));
        var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
        return { done: t, value: i };
      }
      function M0() {
        return this;
      }
      function R0(t) {
        for (var i, o = this; o instanceof Vi; ) {
          var l = yu(o);
          l.__index__ = 0, l.__values__ = r, i ? f.__wrapped__ = l : i = l;
          var f = l;
          o = o.__wrapped__;
        }
        return f.__wrapped__ = t, i;
      }
      function O0() {
        var t = this.__wrapped__;
        if (t instanceof ht) {
          var i = t;
          return this.__actions__.length && (i = new ht(this)), i = i.reverse(), i.__actions__.push({
            func: os,
            args: [qo],
            thisArg: r
          }), new Re(i, this.__chain__);
        }
        return this.thru(qo);
      }
      function P0() {
        return Wl(this.__wrapped__, this.__actions__);
      }
      var D0 = Ji(function(t, i, o) {
        _t.call(t, o) ? ++t[o] : dn(t, o, 1);
      });
      function L0(t, i, o) {
        var l = ot(t) ? el : Tg;
        return o && oe(t, i, o) && (i = r), l(t, J(i, 3));
      }
      function j0(t, i) {
        var o = ot(t) ? kn : Tl;
        return o(t, J(i, 3));
      }
      var N0 = Ql(wu), F0 = Ql(xu);
      function z0(t, i) {
        return Kt(as(t, i), 1);
      }
      function H0(t, i) {
        return Kt(as(t, i), It);
      }
      function U0(t, i, o) {
        return o = o === r ? 1 : at(o), Kt(as(t, i), o);
      }
      function ku(t, i) {
        var o = ot(t) ? Ae : Rn;
        return o(t, J(i, 3));
      }
      function Eu(t, i) {
        var o = ot(t) ? o1 : Il;
        return o(t, J(i, 3));
      }
      var W0 = Ji(function(t, i, o) {
        _t.call(t, o) ? t[o].push(i) : dn(t, o, [i]);
      });
      function B0(t, i, o, l) {
        t = pe(t) ? t : Sr(t), o = o && !l ? at(o) : 0;
        var f = t.length;
        return o < 0 && (o = Vt(f + o, 0)), fs(t) ? o <= f && t.indexOf(i, o) > -1 : !!f && dr(t, i, o) > -1;
      }
      var $0 = ut(function(t, i, o) {
        var l = -1, f = typeof i == "function", g = pe(t) ? M(t.length) : [];
        return Rn(t, function(y) {
          g[++l] = f ? be(i, y, o) : Gr(y, i, o);
        }), g;
      }), V0 = Ji(function(t, i, o) {
        dn(t, o, i);
      });
      function as(t, i) {
        var o = ot(t) ? Ot : Rl;
        return o(t, J(i, 3));
      }
      function G0(t, i, o, l) {
        return t == null ? [] : (ot(i) || (i = i == null ? [] : [i]), o = l ? r : o, ot(o) || (o = o == null ? [] : [o]), Ll(t, i, o));
      }
      var X0 = Ji(function(t, i, o) {
        t[o ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Y0(t, i, o) {
        var l = ot(t) ? lo : sl, f = arguments.length < 3;
        return l(t, J(i, 4), o, f, Rn);
      }
      function Z0(t, i, o) {
        var l = ot(t) ? a1 : sl, f = arguments.length < 3;
        return l(t, J(i, 4), o, f, Il);
      }
      function K0(t, i) {
        var o = ot(t) ? kn : Tl;
        return o(t, us(J(i, 3)));
      }
      function q0(t) {
        var i = ot(t) ? wl : Bg;
        return i(t);
      }
      function J0(t, i, o) {
        (o ? oe(t, i, o) : i === r) ? i = 1 : i = at(i);
        var l = ot(t) ? wg : $g;
        return l(t, i);
      }
      function Q0(t) {
        var i = ot(t) ? xg : Gg;
        return i(t);
      }
      function tv(t) {
        if (t == null)
          return 0;
        if (pe(t))
          return fs(t) ? hr(t) : t.length;
        var i = te(t);
        return i == ie || i == _ ? t.size : Ao(t).length;
      }
      function ev(t, i, o) {
        var l = ot(t) ? uo : Xg;
        return o && oe(t, i, o) && (i = r), l(t, J(i, 3));
      }
      var nv = ut(function(t, i) {
        if (t == null)
          return [];
        var o = i.length;
        return o > 1 && oe(t, i[0], i[1]) ? i = [] : o > 2 && oe(i[0], i[1], i[2]) && (i = [i[0]]), Ll(t, Kt(i, 1), []);
      }), cs = j1 || function() {
        return Zt.Date.now();
      };
      function rv(t, i) {
        if (typeof i != "function")
          throw new Me(u);
        return t = at(t), function() {
          if (--t < 1)
            return i.apply(this, arguments);
        };
      }
      function Au(t, i, o) {
        return i = o ? r : i, i = t && i == null ? t.length : i, fn(t, q, r, r, r, r, i);
      }
      function Mu(t, i) {
        var o;
        if (typeof i != "function")
          throw new Me(u);
        return t = at(t), function() {
          return --t > 0 && (o = i.apply(this, arguments)), t <= 1 && (i = r), o;
        };
      }
      var Qo = ut(function(t, i, o) {
        var l = E;
        if (o.length) {
          var f = An(o, xr(Qo));
          l |= K;
        }
        return fn(t, l, i, o, f);
      }), Ru = ut(function(t, i, o) {
        var l = E | P;
        if (o.length) {
          var f = An(o, xr(Ru));
          l |= K;
        }
        return fn(i, l, t, o, f);
      });
      function Ou(t, i, o) {
        i = o ? r : i;
        var l = fn(t, N, r, r, r, r, r, i);
        return l.placeholder = Ou.placeholder, l;
      }
      function Pu(t, i, o) {
        i = o ? r : i;
        var l = fn(t, z, r, r, r, r, r, i);
        return l.placeholder = Pu.placeholder, l;
      }
      function Du(t, i, o) {
        var l, f, g, y, w, T, L = 0, j = !1, F = !1, U = !0;
        if (typeof t != "function")
          throw new Me(u);
        i = Le(i) || 0, Dt(o) && (j = !!o.leading, F = "maxWait" in o, g = F ? Vt(Le(o.maxWait) || 0, i) : g, U = "trailing" in o ? !!o.trailing : U);
        function X(Ht) {
          var Be = l, vn = f;
          return l = f = r, L = Ht, y = t.apply(vn, Be), y;
        }
        function et(Ht) {
          return L = Ht, w = qr(ft, i), j ? X(Ht) : y;
        }
        function lt(Ht) {
          var Be = Ht - T, vn = Ht - L, Qu = i - Be;
          return F ? Qt(Qu, g - vn) : Qu;
        }
        function nt(Ht) {
          var Be = Ht - T, vn = Ht - L;
          return T === r || Be >= i || Be < 0 || F && vn >= g;
        }
        function ft() {
          var Ht = cs();
          if (nt(Ht))
            return mt(Ht);
          w = qr(ft, lt(Ht));
        }
        function mt(Ht) {
          return w = r, U && l ? X(Ht) : (l = f = r, y);
        }
        function _e() {
          w !== r && $l(w), L = 0, l = T = f = w = r;
        }
        function ae() {
          return w === r ? y : mt(cs());
        }
        function Se() {
          var Ht = cs(), Be = nt(Ht);
          if (l = arguments, f = this, T = Ht, Be) {
            if (w === r)
              return et(T);
            if (F)
              return $l(w), w = qr(ft, i), X(T);
          }
          return w === r && (w = qr(ft, i)), y;
        }
        return Se.cancel = _e, Se.flush = ae, Se;
      }
      var iv = ut(function(t, i) {
        return Sl(t, 1, i);
      }), sv = ut(function(t, i, o) {
        return Sl(t, Le(i) || 0, o);
      });
      function ov(t) {
        return fn(t, G);
      }
      function ls(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function")
          throw new Me(u);
        var o = function() {
          var l = arguments, f = i ? i.apply(this, l) : l[0], g = o.cache;
          if (g.has(f))
            return g.get(f);
          var y = t.apply(this, l);
          return o.cache = g.set(f, y) || g, y;
        };
        return o.cache = new (ls.Cache || un)(), o;
      }
      ls.Cache = un;
      function us(t) {
        if (typeof t != "function")
          throw new Me(u);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, i[0]);
            case 2:
              return !t.call(this, i[0], i[1]);
            case 3:
              return !t.call(this, i[0], i[1], i[2]);
          }
          return !t.apply(this, i);
        };
      }
      function av(t) {
        return Mu(2, t);
      }
      var cv = Yg(function(t, i) {
        i = i.length == 1 && ot(i[0]) ? Ot(i[0], ye(J())) : Ot(Kt(i, 1), ye(J()));
        var o = i.length;
        return ut(function(l) {
          for (var f = -1, g = Qt(l.length, o); ++f < g; )
            l[f] = i[f].call(this, l[f]);
          return be(t, this, l);
        });
      }), ta = ut(function(t, i) {
        var o = An(i, xr(ta));
        return fn(t, K, r, i, o);
      }), Lu = ut(function(t, i) {
        var o = An(i, xr(Lu));
        return fn(t, Y, r, i, o);
      }), lv = hn(function(t, i) {
        return fn(t, Z, r, r, r, i);
      });
      function uv(t, i) {
        if (typeof t != "function")
          throw new Me(u);
        return i = i === r ? i : at(i), ut(t, i);
      }
      function dv(t, i) {
        if (typeof t != "function")
          throw new Me(u);
        return i = i == null ? 0 : Vt(at(i), 0), ut(function(o) {
          var l = o[i], f = Dn(o, 0, i);
          return l && En(f, l), be(t, this, f);
        });
      }
      function fv(t, i, o) {
        var l = !0, f = !0;
        if (typeof t != "function")
          throw new Me(u);
        return Dt(o) && (l = "leading" in o ? !!o.leading : l, f = "trailing" in o ? !!o.trailing : f), Du(t, i, {
          leading: l,
          maxWait: i,
          trailing: f
        });
      }
      function hv(t) {
        return Au(t, 1);
      }
      function pv(t, i) {
        return ta(Fo(i), t);
      }
      function gv() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return ot(t) ? t : [t];
      }
      function mv(t) {
        return Oe(t, C);
      }
      function vv(t, i) {
        return i = typeof i == "function" ? i : r, Oe(t, C, i);
      }
      function bv(t) {
        return Oe(t, x | C);
      }
      function yv(t, i) {
        return i = typeof i == "function" ? i : r, Oe(t, x | C, i);
      }
      function wv(t, i) {
        return i == null || _l(t, i, Yt(i));
      }
      function We(t, i) {
        return t === i || t !== t && i !== i;
      }
      var xv = ns(Co), _v = ns(function(t, i) {
        return t >= i;
      }), Qn = El(/* @__PURE__ */ function() {
        return arguments;
      }()) ? El : function(t) {
        return Nt(t) && _t.call(t, "callee") && !pl.call(t, "callee");
      }, ot = M.isArray, Sv = Zc ? ye(Zc) : Rg;
      function pe(t) {
        return t != null && ds(t.length) && !gn(t);
      }
      function zt(t) {
        return Nt(t) && pe(t);
      }
      function Iv(t) {
        return t === !0 || t === !1 || Nt(t) && se(t) == _n;
      }
      var Ln = F1 || da, Tv = Kc ? ye(Kc) : Og;
      function Cv(t) {
        return Nt(t) && t.nodeType === 1 && !Jr(t);
      }
      function kv(t) {
        if (t == null)
          return !0;
        if (pe(t) && (ot(t) || typeof t == "string" || typeof t.splice == "function" || Ln(t) || _r(t) || Qn(t)))
          return !t.length;
        var i = te(t);
        if (i == ie || i == _)
          return !t.size;
        if (Kr(t))
          return !Ao(t).length;
        for (var o in t)
          if (_t.call(t, o))
            return !1;
        return !0;
      }
      function Ev(t, i) {
        return Xr(t, i);
      }
      function Av(t, i, o) {
        o = typeof o == "function" ? o : r;
        var l = o ? o(t, i) : r;
        return l === r ? Xr(t, i, r, o) : !!l;
      }
      function ea(t) {
        if (!Nt(t))
          return !1;
        var i = se(t);
        return i == $n || i == Ii || typeof t.message == "string" && typeof t.name == "string" && !Jr(t);
      }
      function Mv(t) {
        return typeof t == "number" && ml(t);
      }
      function gn(t) {
        if (!Dt(t))
          return !1;
        var i = se(t);
        return i == In || i == jr || i == Si || i == Ti;
      }
      function ju(t) {
        return typeof t == "number" && t == at(t);
      }
      function ds(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Tt;
      }
      function Dt(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function Nt(t) {
        return t != null && typeof t == "object";
      }
      var Nu = qc ? ye(qc) : Dg;
      function Rv(t, i) {
        return t === i || Eo(t, i, Vo(i));
      }
      function Ov(t, i, o) {
        return o = typeof o == "function" ? o : r, Eo(t, i, Vo(i), o);
      }
      function Pv(t) {
        return Fu(t) && t != +t;
      }
      function Dv(t) {
        if (vm(t))
          throw new st(c);
        return Al(t);
      }
      function Lv(t) {
        return t === null;
      }
      function jv(t) {
        return t == null;
      }
      function Fu(t) {
        return typeof t == "number" || Nt(t) && se(t) == an;
      }
      function Jr(t) {
        if (!Nt(t) || se(t) != Ce)
          return !1;
        var i = Fi(t);
        if (i === null)
          return !0;
        var o = _t.call(i, "constructor") && i.constructor;
        return typeof o == "function" && o instanceof o && Di.call(o) == O1;
      }
      var na = Jc ? ye(Jc) : Lg;
      function Nv(t) {
        return ju(t) && t >= -9007199254740991 && t <= Tt;
      }
      var zu = Qc ? ye(Qc) : jg;
      function fs(t) {
        return typeof t == "string" || !ot(t) && Nt(t) && se(t) == $;
      }
      function xe(t) {
        return typeof t == "symbol" || Nt(t) && se(t) == V;
      }
      var _r = tl ? ye(tl) : Ng;
      function Fv(t) {
        return t === r;
      }
      function zv(t) {
        return Nt(t) && te(t) == jt;
      }
      function Hv(t) {
        return Nt(t) && se(t) == At;
      }
      var Uv = ns(Mo), Wv = ns(function(t, i) {
        return t <= i;
      });
      function Hu(t) {
        if (!t)
          return [];
        if (pe(t))
          return fs(t) ? He(t) : he(t);
        if (zr && t[zr])
          return w1(t[zr]());
        var i = te(t), o = i == ie ? vo : i == _ ? Ri : Sr;
        return o(t);
      }
      function mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Le(t), t === It || t === -1 / 0) {
          var i = t < 0 ? -1 : 1;
          return i * Et;
        }
        return t === t ? t : 0;
      }
      function at(t) {
        var i = mn(t), o = i % 1;
        return i === i ? o ? i - o : i : 0;
      }
      function Uu(t) {
        return t ? Zn(at(t), 0, rt) : 0;
      }
      function Le(t) {
        if (typeof t == "number")
          return t;
        if (xe(t))
          return fe;
        if (Dt(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Dt(i) ? i + "" : i;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = ol(t);
        var o = Sp.test(t);
        return o || Tp.test(t) ? r1(t.slice(2), o ? 2 : 8) : _p.test(t) ? fe : +t;
      }
      function Wu(t) {
        return Ze(t, ge(t));
      }
      function Bv(t) {
        return t ? Zn(at(t), -9007199254740991, Tt) : t === 0 ? t : 0;
      }
      function xt(t) {
        return t == null ? "" : we(t);
      }
      var $v = yr(function(t, i) {
        if (Kr(i) || pe(i)) {
          Ze(i, Yt(i), t);
          return;
        }
        for (var o in i)
          _t.call(i, o) && $r(t, o, i[o]);
      }), Bu = yr(function(t, i) {
        Ze(i, ge(i), t);
      }), hs = yr(function(t, i, o, l) {
        Ze(i, ge(i), t, l);
      }), Vv = yr(function(t, i, o, l) {
        Ze(i, Yt(i), t, l);
      }), Gv = hn(So);
      function Xv(t, i) {
        var o = br(t);
        return i == null ? o : xl(o, i);
      }
      var Yv = ut(function(t, i) {
        t = Ct(t);
        var o = -1, l = i.length, f = l > 2 ? i[2] : r;
        for (f && oe(i[0], i[1], f) && (l = 1); ++o < l; )
          for (var g = i[o], y = ge(g), w = -1, T = y.length; ++w < T; ) {
            var L = y[w], j = t[L];
            (j === r || We(j, gr[L]) && !_t.call(t, L)) && (t[L] = g[L]);
          }
        return t;
      }), Zv = ut(function(t) {
        return t.push(r, ou), be($u, r, t);
      });
      function Kv(t, i) {
        return nl(t, J(i, 3), Ye);
      }
      function qv(t, i) {
        return nl(t, J(i, 3), To);
      }
      function Jv(t, i) {
        return t == null ? t : Io(t, J(i, 3), ge);
      }
      function Qv(t, i) {
        return t == null ? t : Cl(t, J(i, 3), ge);
      }
      function t2(t, i) {
        return t && Ye(t, J(i, 3));
      }
      function e2(t, i) {
        return t && To(t, J(i, 3));
      }
      function n2(t) {
        return t == null ? [] : Yi(t, Yt(t));
      }
      function r2(t) {
        return t == null ? [] : Yi(t, ge(t));
      }
      function ra(t, i, o) {
        var l = t == null ? r : Kn(t, i);
        return l === r ? o : l;
      }
      function i2(t, i) {
        return t != null && lu(t, i, kg);
      }
      function ia(t, i) {
        return t != null && lu(t, i, Eg);
      }
      var s2 = eu(function(t, i, o) {
        i != null && typeof i.toString != "function" && (i = Li.call(i)), t[i] = o;
      }, oa(me)), o2 = eu(function(t, i, o) {
        i != null && typeof i.toString != "function" && (i = Li.call(i)), _t.call(t, i) ? t[i].push(o) : t[i] = [o];
      }, J), a2 = ut(Gr);
      function Yt(t) {
        return pe(t) ? yl(t) : Ao(t);
      }
      function ge(t) {
        return pe(t) ? yl(t, !0) : Fg(t);
      }
      function c2(t, i) {
        var o = {};
        return i = J(i, 3), Ye(t, function(l, f, g) {
          dn(o, i(l, f, g), l);
        }), o;
      }
      function l2(t, i) {
        var o = {};
        return i = J(i, 3), Ye(t, function(l, f, g) {
          dn(o, f, i(l, f, g));
        }), o;
      }
      var u2 = yr(function(t, i, o) {
        Zi(t, i, o);
      }), $u = yr(function(t, i, o, l) {
        Zi(t, i, o, l);
      }), d2 = hn(function(t, i) {
        var o = {};
        if (t == null)
          return o;
        var l = !1;
        i = Ot(i, function(g) {
          return g = Pn(g, t), l || (l = g.length > 1), g;
        }), Ze(t, Bo(t), o), l && (o = Oe(o, x | S | C, sm));
        for (var f = i.length; f--; )
          Lo(o, i[f]);
        return o;
      });
      function f2(t, i) {
        return Vu(t, us(J(i)));
      }
      var h2 = hn(function(t, i) {
        return t == null ? {} : Hg(t, i);
      });
      function Vu(t, i) {
        if (t == null)
          return {};
        var o = Ot(Bo(t), function(l) {
          return [l];
        });
        return i = J(i), jl(t, o, function(l, f) {
          return i(l, f[0]);
        });
      }
      function p2(t, i, o) {
        i = Pn(i, t);
        var l = -1, f = i.length;
        for (f || (f = 1, t = r); ++l < f; ) {
          var g = t == null ? r : t[Ke(i[l])];
          g === r && (l = f, g = o), t = gn(g) ? g.call(t) : g;
        }
        return t;
      }
      function g2(t, i, o) {
        return t == null ? t : Yr(t, i, o);
      }
      function m2(t, i, o, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Yr(t, i, o, l);
      }
      var Gu = iu(Yt), Xu = iu(ge);
      function v2(t, i, o) {
        var l = ot(t), f = l || Ln(t) || _r(t);
        if (i = J(i, 4), o == null) {
          var g = t && t.constructor;
          f ? o = l ? new g() : [] : Dt(t) ? o = gn(g) ? br(Fi(t)) : {} : o = {};
        }
        return (f ? Ae : Ye)(t, function(y, w, T) {
          return i(o, y, w, T);
        }), o;
      }
      function b2(t, i) {
        return t == null ? !0 : Lo(t, i);
      }
      function y2(t, i, o) {
        return t == null ? t : Ul(t, i, Fo(o));
      }
      function w2(t, i, o, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Ul(t, i, Fo(o), l);
      }
      function Sr(t) {
        return t == null ? [] : mo(t, Yt(t));
      }
      function x2(t) {
        return t == null ? [] : mo(t, ge(t));
      }
      function _2(t, i, o) {
        return o === r && (o = i, i = r), o !== r && (o = Le(o), o = o === o ? o : 0), i !== r && (i = Le(i), i = i === i ? i : 0), Zn(Le(t), i, o);
      }
      function S2(t, i, o) {
        return i = mn(i), o === r ? (o = i, i = 0) : o = mn(o), t = Le(t), Ag(t, i, o);
      }
      function I2(t, i, o) {
        if (o && typeof o != "boolean" && oe(t, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof t == "boolean" && (o = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = mn(t), i === r ? (i = t, t = 0) : i = mn(i)), t > i) {
          var l = t;
          t = i, i = l;
        }
        if (o || t % 1 || i % 1) {
          var f = vl();
          return Qt(t + f * (i - t + n1("1e-" + ((f + "").length - 1))), i);
        }
        return Oo(t, i);
      }
      var T2 = wr(function(t, i, o) {
        return i = i.toLowerCase(), t + (o ? Yu(i) : i);
      });
      function Yu(t) {
        return sa(xt(t).toLowerCase());
      }
      function Zu(t) {
        return t = xt(t), t && t.replace(kp, g1).replace(Gp, "");
      }
      function C2(t, i, o) {
        t = xt(t), i = we(i);
        var l = t.length;
        o = o === r ? l : Zn(at(o), 0, l);
        var f = o;
        return o -= i.length, o >= 0 && t.slice(o, f) == i;
      }
      function k2(t) {
        return t = xt(t), t && ap.test(t) ? t.replace(Cc, m1) : t;
      }
      function E2(t) {
        return t = xt(t), t && hp.test(t) ? t.replace(Qs, "\\$&") : t;
      }
      var A2 = wr(function(t, i, o) {
        return t + (o ? "-" : "") + i.toLowerCase();
      }), M2 = wr(function(t, i, o) {
        return t + (o ? " " : "") + i.toLowerCase();
      }), R2 = Jl("toLowerCase");
      function O2(t, i, o) {
        t = xt(t), i = at(i);
        var l = i ? hr(t) : 0;
        if (!i || l >= i)
          return t;
        var f = (i - l) / 2;
        return es(Wi(f), o) + t + es(Ui(f), o);
      }
      function P2(t, i, o) {
        t = xt(t), i = at(i);
        var l = i ? hr(t) : 0;
        return i && l < i ? t + es(i - l, o) : t;
      }
      function D2(t, i, o) {
        t = xt(t), i = at(i);
        var l = i ? hr(t) : 0;
        return i && l < i ? es(i - l, o) + t : t;
      }
      function L2(t, i, o) {
        return o || i == null ? i = 0 : i && (i = +i), W1(xt(t).replace(to, ""), i || 0);
      }
      function j2(t, i, o) {
        return (o ? oe(t, i, o) : i === r) ? i = 1 : i = at(i), Po(xt(t), i);
      }
      function N2() {
        var t = arguments, i = xt(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var F2 = wr(function(t, i, o) {
        return t + (o ? "_" : "") + i.toLowerCase();
      });
      function z2(t, i, o) {
        return o && typeof o != "number" && oe(t, i, o) && (i = o = r), o = o === r ? rt : o >>> 0, o ? (t = xt(t), t && (typeof i == "string" || i != null && !na(i)) && (i = we(i), !i && fr(t)) ? Dn(He(t), 0, o) : t.split(i, o)) : [];
      }
      var H2 = wr(function(t, i, o) {
        return t + (o ? " " : "") + sa(i);
      });
      function U2(t, i, o) {
        return t = xt(t), o = o == null ? 0 : Zn(at(o), 0, t.length), i = we(i), t.slice(o, o + i.length) == i;
      }
      function W2(t, i, o) {
        var l = p.templateSettings;
        o && oe(t, i, o) && (i = r), t = xt(t), i = hs({}, i, l, su);
        var f = hs({}, i.imports, l.imports, su), g = Yt(f), y = mo(f, g), w, T, L = 0, j = i.interpolate || Ci, F = "__p += '", U = bo(
          (i.escape || Ci).source + "|" + j.source + "|" + (j === kc ? xp : Ci).source + "|" + (i.evaluate || Ci).source + "|$",
          "g"
        ), X = "//# sourceURL=" + (_t.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qp + "]") + `
`;
        t.replace(U, function(nt, ft, mt, _e, ae, Se) {
          return mt || (mt = _e), F += t.slice(L, Se).replace(Ep, v1), ft && (w = !0, F += `' +
__e(` + ft + `) +
'`), ae && (T = !0, F += `';
` + ae + `;
__p += '`), mt && (F += `' +
((__t = (` + mt + `)) == null ? '' : __t) +
'`), L = Se + nt.length, nt;
        }), F += `';
`;
        var et = _t.call(i, "variable") && i.variable;
        if (!et)
          F = `with (obj) {
` + F + `
}
`;
        else if (yp.test(et))
          throw new st(d);
        F = (T ? F.replace(rp, "") : F).replace(ip, "$1").replace(sp, "$1;"), F = "function(" + (et || "obj") + `) {
` + (et ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var lt = qu(function() {
          return bt(g, X + "return " + F).apply(r, y);
        });
        if (lt.source = F, ea(lt))
          throw lt;
        return lt;
      }
      function B2(t) {
        return xt(t).toLowerCase();
      }
      function $2(t) {
        return xt(t).toUpperCase();
      }
      function V2(t, i, o) {
        if (t = xt(t), t && (o || i === r))
          return ol(t);
        if (!t || !(i = we(i)))
          return t;
        var l = He(t), f = He(i), g = al(l, f), y = cl(l, f) + 1;
        return Dn(l, g, y).join("");
      }
      function G2(t, i, o) {
        if (t = xt(t), t && (o || i === r))
          return t.slice(0, ul(t) + 1);
        if (!t || !(i = we(i)))
          return t;
        var l = He(t), f = cl(l, He(i)) + 1;
        return Dn(l, 0, f).join("");
      }
      function X2(t, i, o) {
        if (t = xt(t), t && (o || i === r))
          return t.replace(to, "");
        if (!t || !(i = we(i)))
          return t;
        var l = He(t), f = al(l, He(i));
        return Dn(l, f).join("");
      }
      function Y2(t, i) {
        var o = Q, l = tt;
        if (Dt(i)) {
          var f = "separator" in i ? i.separator : f;
          o = "length" in i ? at(i.length) : o, l = "omission" in i ? we(i.omission) : l;
        }
        t = xt(t);
        var g = t.length;
        if (fr(t)) {
          var y = He(t);
          g = y.length;
        }
        if (o >= g)
          return t;
        var w = o - hr(l);
        if (w < 1)
          return l;
        var T = y ? Dn(y, 0, w).join("") : t.slice(0, w);
        if (f === r)
          return T + l;
        if (y && (w += T.length - w), na(f)) {
          if (t.slice(w).search(f)) {
            var L, j = T;
            for (f.global || (f = bo(f.source, xt(Ec.exec(f)) + "g")), f.lastIndex = 0; L = f.exec(j); )
              var F = L.index;
            T = T.slice(0, F === r ? w : F);
          }
        } else if (t.indexOf(we(f), w) != w) {
          var U = T.lastIndexOf(f);
          U > -1 && (T = T.slice(0, U));
        }
        return T + l;
      }
      function Z2(t) {
        return t = xt(t), t && op.test(t) ? t.replace(Tc, I1) : t;
      }
      var K2 = wr(function(t, i, o) {
        return t + (o ? " " : "") + i.toUpperCase();
      }), sa = Jl("toUpperCase");
      function Ku(t, i, o) {
        return t = xt(t), i = o ? r : i, i === r ? y1(t) ? k1(t) : u1(t) : t.match(i) || [];
      }
      var qu = ut(function(t, i) {
        try {
          return be(t, r, i);
        } catch (o) {
          return ea(o) ? o : new st(o);
        }
      }), q2 = hn(function(t, i) {
        return Ae(i, function(o) {
          o = Ke(o), dn(t, o, Qo(t[o], t));
        }), t;
      });
      function J2(t) {
        var i = t == null ? 0 : t.length, o = J();
        return t = i ? Ot(t, function(l) {
          if (typeof l[1] != "function")
            throw new Me(u);
          return [o(l[0]), l[1]];
        }) : [], ut(function(l) {
          for (var f = -1; ++f < i; ) {
            var g = t[f];
            if (be(g[0], this, l))
              return be(g[1], this, l);
          }
        });
      }
      function Q2(t) {
        return Ig(Oe(t, x));
      }
      function oa(t) {
        return function() {
          return t;
        };
      }
      function tb(t, i) {
        return t == null || t !== t ? i : t;
      }
      var eb = tu(), nb = tu(!0);
      function me(t) {
        return t;
      }
      function aa(t) {
        return Ml(typeof t == "function" ? t : Oe(t, x));
      }
      function rb(t) {
        return Ol(Oe(t, x));
      }
      function ib(t, i) {
        return Pl(t, Oe(i, x));
      }
      var sb = ut(function(t, i) {
        return function(o) {
          return Gr(o, t, i);
        };
      }), ob = ut(function(t, i) {
        return function(o) {
          return Gr(t, o, i);
        };
      });
      function ca(t, i, o) {
        var l = Yt(i), f = Yi(i, l);
        o == null && !(Dt(i) && (f.length || !l.length)) && (o = i, i = t, t = this, f = Yi(i, Yt(i)));
        var g = !(Dt(o) && "chain" in o) || !!o.chain, y = gn(t);
        return Ae(f, function(w) {
          var T = i[w];
          t[w] = T, y && (t.prototype[w] = function() {
            var L = this.__chain__;
            if (g || L) {
              var j = t(this.__wrapped__), F = j.__actions__ = he(this.__actions__);
              return F.push({ func: T, args: arguments, thisArg: t }), j.__chain__ = L, j;
            }
            return T.apply(t, En([this.value()], arguments));
          });
        }), t;
      }
      function ab() {
        return Zt._ === this && (Zt._ = P1), this;
      }
      function la() {
      }
      function cb(t) {
        return t = at(t), ut(function(i) {
          return Dl(i, t);
        });
      }
      var lb = Ho(Ot), ub = Ho(el), db = Ho(uo);
      function Ju(t) {
        return Xo(t) ? fo(Ke(t)) : Ug(t);
      }
      function fb(t) {
        return function(i) {
          return t == null ? r : Kn(t, i);
        };
      }
      var hb = nu(), pb = nu(!0);
      function ua() {
        return [];
      }
      function da() {
        return !1;
      }
      function gb() {
        return {};
      }
      function mb() {
        return "";
      }
      function vb() {
        return !0;
      }
      function bb(t, i) {
        if (t = at(t), t < 1 || t > Tt)
          return [];
        var o = rt, l = Qt(t, rt);
        i = J(i), t -= rt;
        for (var f = go(l, i); ++o < t; )
          i(o);
        return f;
      }
      function yb(t) {
        return ot(t) ? Ot(t, Ke) : xe(t) ? [t] : he(bu(xt(t)));
      }
      function wb(t) {
        var i = ++R1;
        return xt(t) + i;
      }
      var xb = ts(function(t, i) {
        return t + i;
      }, 0), _b = Uo("ceil"), Sb = ts(function(t, i) {
        return t / i;
      }, 1), Ib = Uo("floor");
      function Tb(t) {
        return t && t.length ? Xi(t, me, Co) : r;
      }
      function Cb(t, i) {
        return t && t.length ? Xi(t, J(i, 2), Co) : r;
      }
      function kb(t) {
        return il(t, me);
      }
      function Eb(t, i) {
        return il(t, J(i, 2));
      }
      function Ab(t) {
        return t && t.length ? Xi(t, me, Mo) : r;
      }
      function Mb(t, i) {
        return t && t.length ? Xi(t, J(i, 2), Mo) : r;
      }
      var Rb = ts(function(t, i) {
        return t * i;
      }, 1), Ob = Uo("round"), Pb = ts(function(t, i) {
        return t - i;
      }, 0);
      function Db(t) {
        return t && t.length ? po(t, me) : 0;
      }
      function Lb(t, i) {
        return t && t.length ? po(t, J(i, 2)) : 0;
      }
      return p.after = rv, p.ary = Au, p.assign = $v, p.assignIn = Bu, p.assignInWith = hs, p.assignWith = Vv, p.at = Gv, p.before = Mu, p.bind = Qo, p.bindAll = q2, p.bindKey = Ru, p.castArray = gv, p.chain = Cu, p.chunk = Im, p.compact = Tm, p.concat = Cm, p.cond = J2, p.conforms = Q2, p.constant = oa, p.countBy = D0, p.create = Xv, p.curry = Ou, p.curryRight = Pu, p.debounce = Du, p.defaults = Yv, p.defaultsDeep = Zv, p.defer = iv, p.delay = sv, p.difference = km, p.differenceBy = Em, p.differenceWith = Am, p.drop = Mm, p.dropRight = Rm, p.dropRightWhile = Om, p.dropWhile = Pm, p.fill = Dm, p.filter = j0, p.flatMap = z0, p.flatMapDeep = H0, p.flatMapDepth = U0, p.flatten = _u, p.flattenDeep = Lm, p.flattenDepth = jm, p.flip = ov, p.flow = eb, p.flowRight = nb, p.fromPairs = Nm, p.functions = n2, p.functionsIn = r2, p.groupBy = W0, p.initial = zm, p.intersection = Hm, p.intersectionBy = Um, p.intersectionWith = Wm, p.invert = s2, p.invertBy = o2, p.invokeMap = $0, p.iteratee = aa, p.keyBy = V0, p.keys = Yt, p.keysIn = ge, p.map = as, p.mapKeys = c2, p.mapValues = l2, p.matches = rb, p.matchesProperty = ib, p.memoize = ls, p.merge = u2, p.mergeWith = $u, p.method = sb, p.methodOf = ob, p.mixin = ca, p.negate = us, p.nthArg = cb, p.omit = d2, p.omitBy = f2, p.once = av, p.orderBy = G0, p.over = lb, p.overArgs = cv, p.overEvery = ub, p.overSome = db, p.partial = ta, p.partialRight = Lu, p.partition = X0, p.pick = h2, p.pickBy = Vu, p.property = Ju, p.propertyOf = fb, p.pull = Gm, p.pullAll = Iu, p.pullAllBy = Xm, p.pullAllWith = Ym, p.pullAt = Zm, p.range = hb, p.rangeRight = pb, p.rearg = lv, p.reject = K0, p.remove = Km, p.rest = uv, p.reverse = qo, p.sampleSize = J0, p.set = g2, p.setWith = m2, p.shuffle = Q0, p.slice = qm, p.sortBy = nv, p.sortedUniq = i0, p.sortedUniqBy = s0, p.split = z2, p.spread = dv, p.tail = o0, p.take = a0, p.takeRight = c0, p.takeRightWhile = l0, p.takeWhile = u0, p.tap = T0, p.throttle = fv, p.thru = os, p.toArray = Hu, p.toPairs = Gu, p.toPairsIn = Xu, p.toPath = yb, p.toPlainObject = Wu, p.transform = v2, p.unary = hv, p.union = d0, p.unionBy = f0, p.unionWith = h0, p.uniq = p0, p.uniqBy = g0, p.uniqWith = m0, p.unset = b2, p.unzip = Jo, p.unzipWith = Tu, p.update = y2, p.updateWith = w2, p.values = Sr, p.valuesIn = x2, p.without = v0, p.words = Ku, p.wrap = pv, p.xor = b0, p.xorBy = y0, p.xorWith = w0, p.zip = x0, p.zipObject = _0, p.zipObjectDeep = S0, p.zipWith = I0, p.entries = Gu, p.entriesIn = Xu, p.extend = Bu, p.extendWith = hs, ca(p, p), p.add = xb, p.attempt = qu, p.camelCase = T2, p.capitalize = Yu, p.ceil = _b, p.clamp = _2, p.clone = mv, p.cloneDeep = bv, p.cloneDeepWith = yv, p.cloneWith = vv, p.conformsTo = wv, p.deburr = Zu, p.defaultTo = tb, p.divide = Sb, p.endsWith = C2, p.eq = We, p.escape = k2, p.escapeRegExp = E2, p.every = L0, p.find = N0, p.findIndex = wu, p.findKey = Kv, p.findLast = F0, p.findLastIndex = xu, p.findLastKey = qv, p.floor = Ib, p.forEach = ku, p.forEachRight = Eu, p.forIn = Jv, p.forInRight = Qv, p.forOwn = t2, p.forOwnRight = e2, p.get = ra, p.gt = xv, p.gte = _v, p.has = i2, p.hasIn = ia, p.head = Su, p.identity = me, p.includes = B0, p.indexOf = Fm, p.inRange = S2, p.invoke = a2, p.isArguments = Qn, p.isArray = ot, p.isArrayBuffer = Sv, p.isArrayLike = pe, p.isArrayLikeObject = zt, p.isBoolean = Iv, p.isBuffer = Ln, p.isDate = Tv, p.isElement = Cv, p.isEmpty = kv, p.isEqual = Ev, p.isEqualWith = Av, p.isError = ea, p.isFinite = Mv, p.isFunction = gn, p.isInteger = ju, p.isLength = ds, p.isMap = Nu, p.isMatch = Rv, p.isMatchWith = Ov, p.isNaN = Pv, p.isNative = Dv, p.isNil = jv, p.isNull = Lv, p.isNumber = Fu, p.isObject = Dt, p.isObjectLike = Nt, p.isPlainObject = Jr, p.isRegExp = na, p.isSafeInteger = Nv, p.isSet = zu, p.isString = fs, p.isSymbol = xe, p.isTypedArray = _r, p.isUndefined = Fv, p.isWeakMap = zv, p.isWeakSet = Hv, p.join = Bm, p.kebabCase = A2, p.last = De, p.lastIndexOf = $m, p.lowerCase = M2, p.lowerFirst = R2, p.lt = Uv, p.lte = Wv, p.max = Tb, p.maxBy = Cb, p.mean = kb, p.meanBy = Eb, p.min = Ab, p.minBy = Mb, p.stubArray = ua, p.stubFalse = da, p.stubObject = gb, p.stubString = mb, p.stubTrue = vb, p.multiply = Rb, p.nth = Vm, p.noConflict = ab, p.noop = la, p.now = cs, p.pad = O2, p.padEnd = P2, p.padStart = D2, p.parseInt = L2, p.random = I2, p.reduce = Y0, p.reduceRight = Z0, p.repeat = j2, p.replace = N2, p.result = p2, p.round = Ob, p.runInContext = I, p.sample = q0, p.size = tv, p.snakeCase = F2, p.some = ev, p.sortedIndex = Jm, p.sortedIndexBy = Qm, p.sortedIndexOf = t0, p.sortedLastIndex = e0, p.sortedLastIndexBy = n0, p.sortedLastIndexOf = r0, p.startCase = H2, p.startsWith = U2, p.subtract = Pb, p.sum = Db, p.sumBy = Lb, p.template = W2, p.times = bb, p.toFinite = mn, p.toInteger = at, p.toLength = Uu, p.toLower = B2, p.toNumber = Le, p.toSafeInteger = Bv, p.toString = xt, p.toUpper = $2, p.trim = V2, p.trimEnd = G2, p.trimStart = X2, p.truncate = Y2, p.unescape = Z2, p.uniqueId = wb, p.upperCase = K2, p.upperFirst = sa, p.each = ku, p.eachRight = Eu, p.first = Su, ca(p, function() {
        var t = {};
        return Ye(p, function(i, o) {
          _t.call(p.prototype, o) || (t[o] = i);
        }), t;
      }(), { chain: !1 }), p.VERSION = s, Ae(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        p[t].placeholder = p;
      }), Ae(["drop", "take"], function(t, i) {
        ht.prototype[t] = function(o) {
          o = o === r ? 1 : Vt(at(o), 0);
          var l = this.__filtered__ && !i ? new ht(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Qt(o, l.__takeCount__) : l.__views__.push({
            size: Qt(o, rt),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ht.prototype[t + "Right"] = function(o) {
          return this.reverse()[t](o).reverse();
        };
      }), Ae(["filter", "map", "takeWhile"], function(t, i) {
        var o = i + 1, l = o == St || o == wt;
        ht.prototype[t] = function(f) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: J(f, 3),
            type: o
          }), g.__filtered__ = g.__filtered__ || l, g;
        };
      }), Ae(["head", "last"], function(t, i) {
        var o = "take" + (i ? "Right" : "");
        ht.prototype[t] = function() {
          return this[o](1).value()[0];
        };
      }), Ae(["initial", "tail"], function(t, i) {
        var o = "drop" + (i ? "" : "Right");
        ht.prototype[t] = function() {
          return this.__filtered__ ? new ht(this) : this[o](1);
        };
      }), ht.prototype.compact = function() {
        return this.filter(me);
      }, ht.prototype.find = function(t) {
        return this.filter(t).head();
      }, ht.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ht.prototype.invokeMap = ut(function(t, i) {
        return typeof t == "function" ? new ht(this) : this.map(function(o) {
          return Gr(o, t, i);
        });
      }), ht.prototype.reject = function(t) {
        return this.filter(us(J(t)));
      }, ht.prototype.slice = function(t, i) {
        t = at(t);
        var o = this;
        return o.__filtered__ && (t > 0 || i < 0) ? new ht(o) : (t < 0 ? o = o.takeRight(-t) : t && (o = o.drop(t)), i !== r && (i = at(i), o = i < 0 ? o.dropRight(-i) : o.take(i - t)), o);
      }, ht.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ht.prototype.toArray = function() {
        return this.take(rt);
      }, Ye(ht.prototype, function(t, i) {
        var o = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), f = p[l ? "take" + (i == "last" ? "Right" : "") : i], g = l || /^find/.test(i);
        f && (p.prototype[i] = function() {
          var y = this.__wrapped__, w = l ? [1] : arguments, T = y instanceof ht, L = w[0], j = T || ot(y), F = function(ft) {
            var mt = f.apply(p, En([ft], w));
            return l && U ? mt[0] : mt;
          };
          j && o && typeof L == "function" && L.length != 1 && (T = j = !1);
          var U = this.__chain__, X = !!this.__actions__.length, et = g && !U, lt = T && !X;
          if (!g && j) {
            y = lt ? y : new ht(this);
            var nt = t.apply(y, w);
            return nt.__actions__.push({ func: os, args: [F], thisArg: r }), new Re(nt, U);
          }
          return et && lt ? t.apply(this, w) : (nt = this.thru(F), et ? l ? nt.value()[0] : nt.value() : nt);
        });
      }), Ae(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var i = Oi[t], o = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        p.prototype[t] = function() {
          var f = arguments;
          if (l && !this.__chain__) {
            var g = this.value();
            return i.apply(ot(g) ? g : [], f);
          }
          return this[o](function(y) {
            return i.apply(ot(y) ? y : [], f);
          });
        };
      }), Ye(ht.prototype, function(t, i) {
        var o = p[i];
        if (o) {
          var l = o.name + "";
          _t.call(vr, l) || (vr[l] = []), vr[l].push({ name: i, func: o });
        }
      }), vr[Qi(r, P).name] = [{
        name: "wrapper",
        func: r
      }], ht.prototype.clone = Z1, ht.prototype.reverse = K1, ht.prototype.value = q1, p.prototype.at = C0, p.prototype.chain = k0, p.prototype.commit = E0, p.prototype.next = A0, p.prototype.plant = R0, p.prototype.reverse = O0, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = P0, p.prototype.first = p.prototype.head, zr && (p.prototype[zr] = M0), p;
    }, pr = E1();
    Vn ? ((Vn.exports = pr)._ = pr, oo._ = pr) : Zt._ = pr;
  }).call(Qr);
})(Ts, Ts.exports);
var yt = Ts.exports;
const g3 = () => {
  const { trackItemIds: e, trackItemsMap: n, fps: r, trackItemDetailsMap: s } = xn(), a = yt.merge(n, s);
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: e.map((c) => {
    const u = a[c];
    return p3[u.type](u, {
      fps: r
    });
  }) });
}, m3 = () => {
  const e = Ve(null), { setPlayerRef: n, duration: r, fps: s, size: a } = xn();
  return Ne(() => {
    n(e);
  }, []), /* @__PURE__ */ v.jsx(Vd, { className: "size-full", children: /* @__PURE__ */ v.jsx(
    zb,
    {
      ref: e,
      component: g3,
      durationInFrames: Math.round(r / 1e3 * s) || 5 * 30,
      compositionWidth: 1920,
      compositionHeight: 1080,
      style: { width: "100%", height: "100%" },
      inputProps: {},
      fps: s,
      controls: !0
    }
  ) });
}, v3 = ({ scrollLeft: e }) => {
  const n = Ve(null), { playerRef: r, fps: s, scale: a } = xn(), c = uc(r ?? void 0), u = Wt(c / s * 1e3, a.zoom) - e, [d, h] = ee(!1), [m, b] = ee(0), [x, S] = ee(u), C = () => {
    h(!1);
  }, R = (E) => {
    h(!0);
    const P = "touches" in E ? E.touches[0].clientX : E.clientX;
    b(P), S(u);
  }, A = (E) => {
    if (d) {
      const D = ("touches" in E ? E.touches[0].clientX : E.clientX) - m, N = x + D, z = er(N, a.zoom);
      r?.current?.seekTo(z * s / 1e3);
    }
  };
  return Ne(() => {
    const E = (P) => {
      P.preventDefault();
    };
    return d ? (document.addEventListener("mousemove", A), document.addEventListener("mouseup", C), document.addEventListener("touchmove", A), document.addEventListener("touchend", C), document.addEventListener("dragstart", E)) : (document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", C)), () => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", C), document.removeEventListener("dragstart", E);
    };
  }, [d, A, C]), /* @__PURE__ */ v.jsx(
    "div",
    {
      ref: n,
      role: "button",
      tabIndex: 0,
      onMouseDown: (E) => {
        R(E);
      },
      onTouchStart: (E) => {
        R(E);
      },
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && R(E);
      },
      style: {
        position: "absolute",
        left: 40 + lc + u,
        top: 80,
        width: 1,
        height: "calc(100% - 80px)",
        background: "#d4d4d8",
        zIndex: 10,
        cursor: "pointer"
      },
      children: /* @__PURE__ */ v.jsxs("div", { className: "relative h-full", children: [
        /* @__PURE__ */ v.jsx("div", { className: "absolute top-0  h-full w-3 -translate-x-1/2" }),
        /* @__PURE__ */ v.jsx("div", { className: "absolute top-0  h-full w-0.5 -translate-x-1/2 bg-white/50" }),
        /* @__PURE__ */ v.jsx(
          "div",
          {
            style: {
              borderRadius: "0 0 20px 20px"
            },
            className: "absolute h-3 -translate-x-1/2 px-1.5",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                children: /* @__PURE__ */ v.jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M11.6585 7.04881L6.6585 11.4238C6.28148 11.7537 5.71852 11.7537 5.3415 11.4238L0.341495 7.04881C0.12448 6.85892 0 6.58459 0 6.29623V1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1V6.29623C12 6.58459 11.8755 6.85892 11.6585 7.04881Z"
                  }
                )
              }
            )
          }
        )
      ] })
    }
  );
}, b3 = (e) => {
  const {
    height: n = 40,
    // Increased height to give space for the text
    longLineSize: r = 8,
    shortLineSize: s = 6,
    offsetX: a = Ha + lc,
    textOffsetY: c = 12,
    // Place the text above the lines but inside the canvas
    textFormat: u = xw,
    scrollLeft: d = 0,
    onClick: h
  } = e, { scale: m } = xn(), b = Ve(null), [x, S] = ee(null), [C, R] = ee({
    width: 0,
    height: n
    // Increased height for text space
  });
  Ne(() => {
    const D = b.current;
    if (D) {
      const N = D.getContext("2d");
      S(N), A(D, N, d);
    }
  }, []), Ne(() => {
    x && A(b.current, x, d);
  }, [x, d, m]);
  const A = (D, N, z) => {
    if (!D || !N) return;
    const Y = D.offsetParent.offsetWidth ?? D.offsetWidth, q = C.height;
    D.width = Y, D.height = q, E(N, z, Y, q), R({ width: Y, height: q });
  }, E = (D, N, z, K) => {
    const Y = m.zoom, q = m.unit, Z = m.segments;
    D.clearRect(0, 0, z, K), D.save(), D.strokeStyle = "#71717a", D.fillStyle = "#71717a", D.lineWidth = 1, D.font = `${gw}px ${mw}`, D.textBaseline = "top", D.translate(0.5, 0), D.beginPath();
    const G = q * Y * Ws, Q = Math.floor(N / G), B = Math.ceil((N + z) / G) - Q;
    for (let dt = 0; dt <= B; ++dt) {
      const St = dt + Q;
      if (St < 0) continue;
      const Pt = St * G / Y, wt = (Pt - N / Y) * Y;
      if (wt < -G || wt >= z + G) continue;
      const It = u(Pt), Et = -D.measureText(It).width / 2;
      D.fillText(It, wt + Et + a, c);
    }
    for (let dt = 0; dt <= B; ++dt) {
      const St = dt + Q;
      if (St < 0) continue;
      const wt = St * G - N + a;
      for (let It = 0; It < Z; ++It) {
        const Tt = wt + It / Z * G;
        if (Tt < 0 || Tt >= z) continue;
        const Et = It % Z ? s : r;
        Et === s ? D.strokeStyle = "#a1a1aa" : D.strokeStyle = "#d4d4d8";
        const fe = 32, [rt, lr] = [Tt, fe], [Wn, sn] = [rt, lr + Et];
        D.beginPath(), D.moveTo(rt, lr), D.lineTo(Wn, sn), D.stroke();
      }
    }
    D.restore();
  }, P = (D) => {
    const N = b.current;
    if (!N) return;
    const z = N.getBoundingClientRect(), Y = D.clientX - z.left + d - Ha;
    h?.(Y);
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "border-border border-t",
      style: {
        position: "relative",
        width: "100%",
        height: `${C.height}px`,
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ v.jsx(
        "canvas",
        {
          onClick: P,
          ref: b,
          height: C.height
        }
      )
    }
  );
}, y3 = () => /* @__PURE__ */ v.jsx(
  Vd,
  {
    flexGrow: "1",
    justify: "center",
    width: "100%",
    height: "100%",
    className: "bg-scene py-3",
    children: /* @__PURE__ */ v.jsx("div", { className: "max-w-3xl flex-1  w-full h-full flex relative", children: /* @__PURE__ */ v.jsx(m3, {}) })
  }
);
class w3 {
  ___eventListeners;
  ___activeObjects;
  constructor() {
    this.___activeObjects = [], this.___eventListeners = {};
  }
  pauseEventListeners() {
    this.___eventListeners = this.__eventListeners, this.__eventListeners = {};
    const n = this.getActiveObjects();
    this.discardActiveObject(), this.___activeObjects = n;
  }
  resumeEventListeners() {
    this.__eventListeners = this.___eventListeners, this.___eventListeners = {};
    const n = this.___activeObjects;
    if (!n.length)
      return this.requestRenderAll(), !1;
    if (n.length === 1)
      this.setActiveObject(n[0]);
    else {
      const r = new Za(n);
      this.setActiveObject(r);
    }
    this.requestRenderAll();
  }
}
class Er extends nn {
  isSelected = !1;
  text;
  tScale;
  display;
  id;
  backgroundColor;
  static ownDefaults = {
    rx: 6,
    ry: 6,
    objectCaching: !1,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    fill: "#27272a",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    fontSize: 16,
    fontFamily: "Arial",
    fontColor: "#ffffff",
    textAlign: "center"
  };
  static type = "Text";
  constructor(n) {
    super(n), Object.assign(this, Er.ownDefaults), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.text = n.text || "", this.backgroundColor = n.backgroundColor || "transparent";
  }
  static createControls() {
    return {
      controls: yh()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Er.ownDefaults
    };
  }
  setSelected(n) {
    this.isSelected = n, this.set({ dirty: !0 });
  }
  _render(n) {
    super._render(n), this.updateSelected(n);
  }
  updateSelected(n) {
    this.isSelected && (n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      6
    ), n.lineWidth = 2, n.strokeStyle = "rgba(0, 216, 214,1.0)", n.stroke(), n.restore());
  }
}
function zn(e, n, r, s, a) {
  e.save(), e.translate(n, r), e.rotate(Gd.degreesToRadians(90 + a.angle)), e.beginPath(), e.lineWidth = 4, e.lineCap = "round", e.strokeStyle = "#dfe2e8", e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
function yh() {
  return {
    mr: new Qe({
      x: 0.5,
      y: 0,
      actionHandler: Cs,
      cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: zn
    }),
    ml: new Qe({
      x: -0.5,
      y: 0,
      actionHandler: Cs,
      cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: zn
    })
  };
}
const Cs = ne.wrapWithFireEvent(
  "resizing",
  ne.wrapWithFixedAnchor((e, n, r, s) => {
    const a = ne.getLocalPoint(
      n,
      n.originX,
      n.originY,
      r,
      s
    );
    if (_3(n.originX) || I3(n.originX) && a.x < 0 || S3(n.originX) && a.x > 0) {
      const c = n.target, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = T3(n) ? 2 : 1, h = c.width, m = Math.ceil(
        Math.abs(a.x * d / c.scaleX) - u
      );
      if (n.corner === "ml") {
        const x = h - m;
        if (c.left + x < 0)
          return c.set("width", c.width + c.left), !0;
      }
      return c.set("width", Math.max(m, 0)), h !== c.width;
    }
    return !1;
  })
), x3 = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
}, gt = (e) => typeof e == "string" ? x3[e] : e - 0.5, _3 = (e) => gt(e) === gt("center"), S3 = (e) => gt(e) === gt("left"), I3 = (e) => gt(e) === gt("right");
function T3(e) {
  return gt(e.originX) === gt("center") && gt(e.originY) === gt("center");
}
re.setClass(Er, "Text");
class Ge extends nn {
  static type = "Transition";
  id;
  duration;
  fromId;
  toId;
  static ownDefaults = {
    objectCaching: !1,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 1.5,
    fill: "rgba(0, 0, 0, 0.5)",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    lockMovementX: !0,
    lockMovementY: !0,
    duration: 1500,
    rx: 8,
    ry: 8
  };
  isSelected = !1;
  constructor(n) {
    super(n), this.id = n.id, this.fromId = n.fromId, this.toId = n.toId, Object.assign(this, {
      duration: n.duration,
      fromId: n.fromId,
      toId: n.toId,
      kind: n.kind,
      tScale: n.tScale,
      strokeDashArray: n.strokeDashArray || [],
      isSelected: !1,
      centeredScaling: !0,
      strokeWidth: 0
    }), Object.assign(this, Ge.ownDefaults);
  }
  static createControls() {
    return {
      controls: C3()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Ge.ownDefaults
    };
  }
  updateCoords() {
  }
  _render(n) {
    super._render(n), this.updateSelected(n);
  }
  setSelected(n) {
    this.isSelected = n, this.set({ dirty: !0 });
  }
  updateSelected(n) {
    n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), n.lineWidth = 2, this.strokeDashArray && n.setLineDash(this.strokeDashArray), n.strokeStyle = this.isSelected ? "rgba(255, 255, 255,1.0)" : "rgba(255, 255, 255,0.15)", n.stroke(), n.restore();
  }
}
re.setClass(Ge, "Transition");
const C3 = () => ({
  mr: new Qe({
    x: 0.5,
    y: 0,
    actionHandler: xd,
    cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: zn
  }),
  ml: new Qe({
    x: -0.5,
    y: 0,
    actionHandler: xd,
    cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: zn
  })
});
re.setClass(Ge, "Transition");
const { wrapWithFireEvent: k3, getLocalPoint: E3 } = ne, Ua = "center", A3 = "left", M3 = "right";
function R3(e) {
  return (n, r, s, a) => {
    const { target: c, originX: u, originY: d } = r, h = c.getRelativeCenterPoint(), m = c.translateToOriginPoint(
      h,
      u,
      d
    ), b = e(n, r, s, a);
    return c.setPositionByOrigin(m, u, d), b;
  };
}
const O3 = (e, n, r, s) => {
  const a = E3(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (gt(n.originX) === gt(Ua) || gt(n.originX) === gt(M3) && a.x < 0 || gt(n.originX) === gt(A3) && a.x > 0) {
    const { target: c } = n, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = P3(n) ? 2 : 1, h = c.width, m = Math.ceil(
      Math.abs(a.x * d / c.scaleX) - u
    ), b = er(m, c.tScale);
    return b >= 1500 || b < 500 ? !1 : (c.set("width", Math.max(m, 0)), c.set("duration", b), c.setCoords(), c.canvas && c.canvas.renderAll(), h !== c.width);
  }
  return !1;
};
function P3(e) {
  return gt(e.originX) === gt(Ua) && gt(e.originY) === gt(Ua);
}
const xd = k3(
  "resizing",
  R3(O3)
);
class li extends nn {
  static type = "Placeholder";
  guideItemId;
  distXToActCenter;
  trackItemType;
  defaultPos;
  draggedObject = null;
  for;
  id;
  static ownDefaults = {
    rx: 6,
    ry: 6,
    objectCaching: !1,
    borderColor: "transparent",
    strokeWidth: 0,
    fill: "rgba(255, 211, 42, 0.1)",
    stroke: "rgba(255, 211, 42, 1.0)",
    selectable: !1,
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    strokeDashArray: [5, 1],
    evented: !1
  };
  constructor(n) {
    super(n), this.id = n.id, this.for = n.for, Object.assign(this, li.ownDefaults);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...li.ownDefaults
    };
  }
  _render(n) {
    super._render(n), this.updateSelected(n);
  }
  updateSelected(n) {
    n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), n.lineWidth = 2, this.strokeDashArray && n.setLineDash(this.strokeDashArray), n.strokeStyle = "rgba(0, 216, 214,1.0)", n.stroke(), n.restore();
  }
}
re.setClass(li, "Placeholder");
const D3 = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 }
}, $s = "rgba(0, 216, 214, 1.0)", va = (e, n, r) => new nn({
  top: e,
  left: 0,
  strokeWidth: 0,
  fill: "transparent",
  selectable: !0,
  height: r,
  width: n
});
class si extends Ka {
  static type = "Helper";
  static defaultSettings = {
    selectable: !1,
    evented: !1
  };
  static ownDefaults = { ...si.defaultSettings };
  guide;
  topGuide;
  bottomGuide;
  id;
  metadata = {};
  tScale;
  kind;
  constructor(n) {
    const r = D3[n.kind], s = va(0, n.width, r.top), a = va(r.top, n.width, r.guideHeight), c = va(
      r.top + r.guideHeight,
      n.width,
      r.bottom
    );
    super([s, a, c], {
      ...si.defaultSettings,
      ...n
    }), this.topGuide = s, this.guide = a, this.bottomGuide = c, this.id = n.id, this.metadata = n.metadata ?? {}, this.tScale = n.tScale, this.kind = n.kind;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...si.defaultSettings
    };
  }
  updateCoords(n) {
    this.scaleToWidth(n), this.set("scaleY", 1);
  }
  setSelected(n) {
    this.guide.set("fill", n ? $s : "transparent");
  }
}
const yi = si;
re.setClass(yi, "Helper");
class nr extends nn {
  static ownDefaults = {
    selectable: !1,
    evented: !1,
    strokeWidth: 0,
    stroke: "transparent"
  };
  static type = "Track";
  id;
  accepts;
  metadata;
  items;
  borderColor = "transparent";
  stroke = "transparent";
  strokeWidth = 0;
  constructor(n) {
    super(n), Object.assign(this, nr.ownDefaults), this.id = n.id, this.accepts = n.accepts || ["audio", "video", "image", "text"], this.items = n.items || [], this.metadata = n.metadata;
  }
  static getDefaults() {
    return { ...super.getDefaults(), ...nr.ownDefaults };
  }
  updateCoords(n) {
    this.width = n;
  }
}
re.setClass(nr, "Track");
class ks extends nn {
  isSelected;
  tScale;
  display;
  id;
  src;
  itemType;
  static ownDefaults = {
    rx: 8,
    ry: 8,
    objectCaching: !1,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    fill: "#27272a"
  };
  static type = "Image";
  constructor(n) {
    super(n), this.itemType = "image", this.isSelected = !1, Object.assign(this, ks.ownDefaults), this.id = n.id, this.src = n.src, this.display = n.display, this.tScale = n.tScale;
  }
  static createControls() {
    return {
      controls: yh()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ks.ownDefaults
    };
  }
  _render(n) {
    super._render(n), this.updateSelected(n);
  }
  setSelected(n) {
    this.isSelected = n, this.set({ dirty: !0 });
  }
  updateSelected(n) {
    this.isSelected && (n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), n.lineWidth = 2, n.strokeStyle = $s, n.stroke(), n.restore());
  }
}
const fc = ks;
re.setClass(fc, "Image");
class Dr extends nn {
  id;
  tScale;
  isSelected = !1;
  display;
  trim;
  static type = "Video";
  static defaultProps = {
    objectCaching: !1,
    rx: 8,
    ry: 8,
    fill: "#27272a"
  };
  constructor(n) {
    super(Object.assign({}, Dr.defaultProps, n)), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.trim = n.trim;
  }
  static createControls() {
    return { controls: L3() };
  }
  _render(n) {
    super._render(n), this.updateSelected(n);
  }
  setSelected(n) {
    this.isSelected = n, this.set({ dirty: !0 });
  }
  updateSelected(n) {
    this.isSelected && (n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), n.lineWidth = 2, n.strokeStyle = $s, n.stroke(), n.restore());
  }
}
re.setClass(Dr, "Video");
const L3 = () => ({
  mr: new Qe({
    x: 0.5,
    y: 0,
    render: zn,
    actionHandler: _d,
    cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new Qe({
    x: -0.5,
    y: 0,
    render: zn,
    actionHandler: _d,
    cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: j3, getLocalPoint: N3 } = ne, F3 = (e, n, r, s) => {
  const a = N3(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (gt(n.originX) === gt("center") || gt(n.originX) === gt("right") && a.x < 0 || gt(n.originX) === gt("left") && a.x > 0) {
    const { target: c } = n;
    return c.width !== c.width;
  }
  return !1;
};
function wh(e) {
  return (n, r, s, a) => {
    const { target: c, originX: u, originY: d } = r, h = c.getRelativeCenterPoint(), m = c.translateToOriginPoint(
      h,
      u,
      d
    ), b = e(n, r, s, a);
    return c.setPositionByOrigin(m, u, d), b;
  };
}
const _d = j3(
  "resizing",
  wh(F3)
);
class Fn extends nn {
  id;
  itemType = "audio";
  isSelected = !1;
  trim;
  src;
  tScale;
  display;
  static ownDefaults = {
    rx: 6,
    ry: 6,
    objectCaching: !1,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    fill: "#27272a",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default"
  };
  static type = "Audio";
  constructor(n) {
    super({
      ...Fn.getDefaults(),
      ...n
    }), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.trim = n.trim, this.src = n.src;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Fn.ownDefaults
    };
  }
  static createControls() {
    return { controls: z3() };
  }
  setSelected(n) {
    this.isSelected = n, this.set({ dirty: !0 });
  }
  _render(n) {
    super._render(n), this.updateSelected(n);
  }
  updateSelected(n) {
    this.isSelected && (n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      Fn.ownDefaults.rx
    ), n.lineWidth = 2, n.strokeStyle = $s, n.stroke(), n.restore());
  }
}
re.setClass(Fn, "Audio");
const z3 = () => ({
  mr: new Qe({
    x: 0.5,
    y: 0,
    render: zn,
    actionHandler: Sd,
    cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new Qe({
    x: -0.5,
    y: 0,
    render: zn,
    actionHandler: Sd,
    cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: H3, getLocalPoint: U3 } = ne, W3 = (e, n, r, s) => {
  const a = U3(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (gt(n.originX) === gt("center") || gt(n.originX) === gt("right") && a.x < 0 || gt(n.originX) === gt("left") && a.x > 0) {
    const { target: c } = n, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = B3(n) ? 2 : 1, h = c.width, m = Math.ceil(
      Math.abs(a.x * d / c.scaleX) - u
    );
    if (n.corner === "mr") {
      const b = c.trim.to, x = m - h, S = er(x, c.tScale), C = b + S;
      if (C > c.duration) return !1;
      c.set("width", Math.max(m, 0)), c.trim.to = C;
    } else {
      if (c.left < 0) return !1;
      const b = h - m;
      if (c.left + b < 0)
        return c.set("width", c.width + c.left), !0;
      const x = m - h, S = c.trim.from, C = er(x, c.tScale), R = S - C;
      if (R < 0) return !1;
      c.set("width", Math.max(m, 0)), c.trim.from = R;
    }
    return h !== c.width;
  }
  return !1;
};
function B3(e) {
  return gt(e.originX) === gt("center") && gt(e.originY) === gt("center");
}
const Sd = H3(
  "resizing",
  wh(W3)
);
class Es extends nn {
  static type = "TransitionGuide";
  static ownDefaults = {
    objectCaching: !1,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 1.5,
    fill: "rgba(0,0,0,0.85)",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    lockMovementX: !0,
    lockMovementY: !0,
    duration: 1500,
    rx: 8,
    ry: 8
  };
  tScale;
  duration = 0;
  fromId;
  toId;
  itemType = "none";
  isSelected = !1;
  id;
  constructor(n) {
    super(n), Object.assign(this, Es.ownDefaults), this.id = n.id;
  }
  static createControls() {
    return {
      controls: $3()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Es.ownDefaults
    };
  }
  updateCoords() {
    const n = this.canvas;
    if (!n) return;
    const r = n.getObjects().find((c) => c.id === this.fromId);
    if (!r) return;
    const s = Wt(this.duration, this.tScale), a = r.left + r.width - s / 2;
    this.set({
      width: s,
      left: a
    });
  }
  _render(n) {
    super._render(n), this.drawTextIdentity(n), this.updateSelected(n);
  }
  drawTextIdentity(n) {
    const r = new Path2D(
      "M3 5.30359C3 3.93159 4.659 3.24359 5.629 4.21359L11.997 10.5826L10.583 11.9966L5 6.41359V17.5856L10.586 11.9996L10.583 11.9966L11.997 10.5826L12 10.5856L18.371 4.21459C19.341 3.24459 21 3.93159 21 5.30359V18.6956C21 20.0676 19.341 20.7556 18.371 19.7856L12 13.5L13.414 11.9996L19 17.5866V6.41359L13.414 11.9996L13.421 12.0056L12.006 13.4206L12 13.4136L5.629 19.7846C4.659 20.7546 3 20.0676 3 18.6956V5.30359Z"
    );
    n.save(), n.translate(-12, -12), n.fillStyle = "#ffffff", n.fill(r), n.restore();
  }
  setSelected(n) {
    this.isSelected = n, this.set({ dirty: !0 });
  }
  updateSelected(n) {
    this.isSelected && (n.save(), n.beginPath(), n.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255,1.0)", n.stroke(), n.restore());
  }
}
function $3() {
  return {
    mr: new Qe({
      x: 0.5,
      y: 0,
      actionHandler: Cs,
      cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Id
    }),
    ml: new Qe({
      x: -0.5,
      y: 0,
      actionHandler: Cs,
      cursorStyleHandler: ne.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Id
    })
  };
}
function Id(e, n, r, s, a) {
  e.save(), e.translate(n, r), e.rotate(Gd.degreesToRadians(90 + a.angle)), e.lineWidth = 6, e.lineCap = "round", e.strokeStyle = "white", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.lineWidth = 4, e.strokeStyle = "black", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
class As extends nn {
  static type = "PreviewTrackItem";
  static ownDefaults = {
    objectCaching: !1,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    rx: 4,
    ry: 4
  };
  duration = 0;
  fromId = "";
  toId = "";
  isSelected = !1;
  name;
  durationString;
  id;
  constructor(n) {
    super(n), Object.assign(this, As.ownDefaults), this.id = n.id, this.name = n.name || "item", this.durationString = "00:05", this.fill = "#27272a";
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...As.ownDefaults
    };
  }
  _render(n) {
    n.save(), super._render(n), n.beginPath(), n.rect(-this.width / 2, -this.height / 2, this.width, this.height), n.clip(), this.drawTextIdentity(n), n.restore();
  }
  drawTextIdentity(n) {
    n.font = "600 12px 'Geist variable'", n.textAlign = "left";
    const h = n.measureText(this.name).width, m = n.measureText(this.durationString).width, b = -this.height / 2 + 4, x = -this.width / 2, S = x + h + 8 * 2 + 4, C = h + 8 * 2;
    this.drawRoundedRect(
      n,
      x,
      b,
      C,
      20,
      4
    ), n.fillStyle = "#f4f4f5", n.fillText(this.name, x + 8, b + 12 + 2);
    const R = m + 8 * 2;
    this.drawRoundedRect(
      n,
      S,
      b,
      R,
      20,
      4
    ), n.fillStyle = "#f4f4f5", n.fillText(
      this.durationString,
      S + 8,
      b + 12 + 2
    );
  }
  drawRoundedRect(n, r, s, a, c, u) {
    n.fillStyle = "rgba(0, 0, 0, 0.5)", n.roundRect ? (n.beginPath(), n.roundRect(r, s, a, c, u), n.fill()) : n.fillRect(r, s, a, c);
  }
}
function V3(e, n) {
  n.forEach((r) => {
    Object.getOwnPropertyNames(r.prototype).forEach((s) => {
      if (s !== "constructor") {
        const a = Object.getOwnPropertyDescriptor(
          r.prototype,
          s
        );
        a && Object.defineProperty(e.prototype, s, a);
      }
    });
  });
}
const hc = (e, n) => {
  const r = {
    x: e.size.width / 2,
    y: e.size.height / 2
  }, s = {
    x: n.width / 2,
    y: n.height / 2
  }, a = r.x - s.x, c = r.y - s.y, u = Math.min(
    e.size.width / n.width,
    e.size.height / n.height
  );
  return {
    top: `${c}px`,
    left: `${a}px`,
    transform: `scale(${u})`
  };
}, G3 = (e) => new Promise((n, r) => {
  const s = new Audio();
  s.preload = "auto", s.addEventListener("loadedmetadata", () => {
    const a = s.duration * 1e3;
    n({
      duration: a
    });
  }), s.addEventListener("error", (a) => {
    r(a);
  }), s.src = e, s.crossOrigin = "anonymous", s.load();
}), X3 = (e) => new Promise((n, r) => {
  const s = new Image();
  console.warn("Consider updating CDN config for CORS issues?"), s.onload = () => {
    const a = s.width, c = s.height;
    n({ width: a, height: c });
  }, s.onerror = (a) => {
    r(a);
  }, s.crossOrigin = "anonymous", s.src = e;
}), Y3 = (e) => new Promise((n, r) => {
  const s = document.createElement("video");
  s.preload = "auto", s.addEventListener("loadedmetadata", () => {
    const a = s.duration * 1e3, c = s.videoWidth, u = s.videoHeight;
    n({
      duration: a,
      width: c,
      height: u
    });
  }), s.addEventListener("error", (a) => {
    r(a);
  }), s.src = e, s.load();
}), ys = (e, n) => {
  const r = document.createElement("div");
  Object.keys(n).forEach((a) => {
    a !== "height" && (r.style[a] = n[a]);
  }), document.body.appendChild(r), r.textContent = e, r.style.width = `${n.width}px`, r.style.fontSize = `${n.fontSize}px`;
  const s = getComputedStyle(r).height;
  return document.body.removeChild(r), parseFloat(s);
}, en = (e) => Object.keys(e).reduce((n, r) => {
  const {
    display: { to: s }
  } = e[r];
  return Math.max(n, s);
}, 0), Z3 = (e, n) => {
  if (!e)
    return {
      from: 0,
      to: n.duration
    };
  const { from: r, to: s } = e;
  return {
    from: r ?? 0,
    to: s ?? n.duration
  };
}, K3 = (e, n) => {
  const { duration: r, trim: s } = n, a = s ? s.to - s.from : r || 5e3, c = {
    from: 0,
    to: a
  };
  if (!e)
    return c;
  if (e.from !== void 0 && e.from < 0)
    return console.error(
      "'from' must be a non-negative number. Returning default display."
    ), c;
  if (e.from !== void 0 && e.to === void 0)
    return {
      from: e.from,
      to: e.from + a
    };
  if (e.to !== void 0) {
    if (e.to < 0)
      return console.error(
        "'to' must be a non-negative number. Returning default display."
      ), c;
    if (e.to < e.from)
      return console.error(
        "'to' must be greater than or equal to 'from'. Returning default display."
      ), c;
  }
  return e;
};
function q3(e, n) {
  return e.map((r) => {
    const s = r.items.filter(
      (a) => !n.includes(a)
    );
    return { ...r, items: s };
  }).filter((r) => r.items.length > 0);
}
const J3 = async (e, n) => {
  const r = e.details, s = await X3(r.src), a = hc(n, s);
  return {
    id: e.id,
    type: "image",
    name: "",
    display: {
      from: n.origin || 0,
      to: (n.origin || 5e3) + 5e3
    },
    details: {
      src: r.src || "",
      width: r.width || s.width || 100,
      height: r.height || s.height || 100,
      opacity: r.opacity ?? 100,
      transform: a.transform,
      border: r.border || "none",
      borderRadius: r.borderRadius || "0",
      boxShadow: r.boxShadow || "none",
      top: a.top || "0px",
      left: a.left || "0px"
    },
    metadata: e.metadata || {}
  };
}, Q3 = async (e, n) => {
  const r = e.details.src, s = await Y3(r), a = hc(n, {
    ...s
  }), c = Z3(e.trim, { duration: s.duration }), u = {
    width: s.width,
    height: s.height,
    duration: s.duration,
    src: r,
    volume: e.details.volume ?? 100,
    top: e.details.top || a.top || "0px",
    left: e.details.left || a.left || "0px",
    text: e.details.text
    // Default volume
  };
  return {
    ...e,
    trim: c,
    type: "video",
    details: u,
    display: K3(e?.display, {
      duration: s.duration,
      trim: c
    })
  };
}, t4 = async (e) => {
  const n = e.details, r = (await G3(n.src)).duration, s = e?.display?.from ?? 0;
  return {
    id: e.id,
    name: "",
    type: "audio",
    display: {
      from: s,
      to: s + r
    },
    trim: {
      from: 0,
      to: r
    },
    details: {
      src: n.src,
      duration: r,
      volume: n.volume ?? 100,
      text: n.text
      // Default volume
    },
    metadata: {
      ...e.metadata
    }
  };
}, e4 = 5e3, xh = async (e, n) => {
  const r = e.id;
  await Rw([
    {
      fontFamily: e.details.fontFamily ?? "",
      fontUrl: e.details.fontUrl ?? ""
    }
  ]);
  const s = {
    fontFamily: e.details.fontFamily ?? "Arial",
    fontSize: e.details.fontSize ?? "16px",
    fontWeight: e.details.fontWeight ?? "normal",
    fontStyle: e.details.fontStyle ?? "normal",
    textDecoration: e.details.textDecoration ?? "none",
    textAlign: e.details.textAlign ?? "left",
    lineHeight: e.details.lineHeight ?? "normal",
    letterSpacing: e.details.letterSpacing ?? "normal",
    wordSpacing: e.details.wordSpacing ?? "normal",
    color: e.details.color ?? "#ffffff",
    backgroundColor: e.details.backgroundColor ?? "transparent",
    border: e.details.border ?? "none",
    textShadow: e.details.textShadow ?? "none",
    text: e.details.text ?? "",
    opacity: e.details.opacity ?? 100,
    width: e.details.width ?? 300,
    wordWrap: e.details.wordWrap ?? "normal",
    wordBreak: e.details.wordBreak ?? "normal",
    WebkitTextStrokeColor: e.details.WebkitTextStrokeColor ?? "#ffffff",
    WebkitTextStrokeWidth: e.details.WebkitTextStrokeWidth ?? "0px",
    top: e.details.top ?? "0px",
    left: e.details.left ?? "0px"
  }, a = ys(e.details.text ?? "", s), c = hc(n, {
    width: s.width ?? 0,
    height: a
  });
  return {
    id: r,
    name: "",
    type: "text",
    display: {
      from: 0,
      to: e4
    },
    details: {
      ...s,
      height: a,
      top: c.top,
      left: c.left,
      fontUrl: e.details.fontUrl,
      text: e.details.text ?? ""
    },
    metadata: {}
  };
}, n4 = (e, n) => {
  const r = e.display, s = Wt(r.from, n.tScale), a = Wt(r.to - r.from, n.tScale), c = re.getClass("Audio") || Fn;
  return new c({
    width: a,
    height: 42,
    top: 10,
    left: s,
    id: e.id,
    display: r,
    text: e.details.text,
    trim: e.trim || {
      from: 0,
      to: e.details.duration
    },
    duration: e.details.duration,
    src: e.details.src,
    tScale: n.tScale
  });
}, r4 = (e, n) => {
  const r = Wt(e.display.from, n.tScale), s = Wt(e.details.duration || 5e3, n.tScale), a = re.getClass("Image") || fc;
  return new a({
    width: s,
    height: 42,
    id: e.id,
    src: e.details.src,
    tScale: n.tScale,
    top: 10,
    left: r,
    display: e.display
  });
}, i4 = (e, n) => {
  const r = Wt(e.trim.from, n.tScale), s = Wt(e.trim.to - e.trim.from, n.tScale), a = re.getClass("Video") || Dr;
  return new a({
    width: s,
    height: 42,
    id: e.id,
    tScale: n.tScale,
    fill: "#333333",
    top: 10,
    left: r,
    display: e.trim,
    trim: e.trim,
    text: e.details.text
  });
}, s4 = (e, n) => {
  const r = e.display, s = Wt(r.from, n.tScale), a = Wt(r.to - r.from, n.tScale), c = re.getClass("Text") || Er;
  return new c({
    width: a,
    height: 42,
    id: e.id,
    display: r,
    top: 10,
    left: s,
    text: e.details.text,
    tScale: n.tScale
  });
}, o4 = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42
}, a4 = (e = {}) => {
  const n = { ...o4, ...e };
  return Object.fromEntries(
    Object.entries(n).filter(([, r]) => typeof r == "number")
  );
};
let c4 = class extends Fn {
  static type = "Audio";
  text;
  constructor(n) {
    super(n), this.text = n.text ?? "Audio";
  }
  _render(n) {
    super._render(n), this.drawTextIdentity(n), this.updateSelected(n);
  }
  drawTextIdentity(n) {
    const r = new Path2D(
      "M8.24092 0C8.24092 2.51565 10.2795 4.55419 12.7951 4.55419C12.9677 4.55419 13.1331 4.62274 13.2552 4.74475C13.3772 4.86676 13.4457 5.03224 13.4457 5.20479C13.4457 5.37734 13.3772 5.54282 13.2552 5.66483C13.1331 5.78685 12.9677 5.85539 12.7951 5.85539C11.9218 5.85605 11.0594 5.66105 10.2713 5.28471C9.48319 4.90838 8.78942 4.36027 8.24092 3.68066V13.8794C8.24094 14.8271 7.91431 15.7458 7.31606 16.4808C6.71781 17.2157 5.88451 17.722 4.95657 17.9143C4.02863 18.1066 3.06276 17.9731 2.22172 17.5364C1.38067 17.0997 0.715856 16.3865 0.339286 15.5169C-0.0372842 14.6473 -0.10259 13.6744 0.154372 12.7622C0.411334 11.8501 0.974857 11.0544 1.74999 10.5092C2.52512 9.96403 3.46449 9.7027 4.40981 9.76924C5.35512 9.83579 6.24861 10.2261 6.93972 10.8745V0H8.24092ZM6.93972 13.8794C6.93972 13.1317 6.6427 12.4146 6.11398 11.8859C5.58527 11.3572 4.86818 11.0602 4.12046 11.0602C3.37275 11.0602 2.65566 11.3572 2.12694 11.8859C1.59823 12.4146 1.3012 13.1317 1.3012 13.8794C1.3012 14.6272 1.59823 15.3443 2.12694 15.873C2.65566 16.4017 3.37275 16.6987 4.12046 16.6987C4.86818 16.6987 5.58527 16.4017 6.11398 15.873C6.6427 15.3443 6.93972 14.6272 6.93972 13.8794Z"
    );
    n.save(), n.translate(-this.width / 2, -this.height / 2), n.translate(0, 10), n.font = "600 12px 'Geist variable'", n.fillStyle = "#f4f4f5", n.textAlign = "left", n.clip(), n.fillText(this.text, 36, 14), n.translate(10, 1), n.fillStyle = "#f4f4f5", n.fill(r), n.restore();
  }
};
class l4 extends Dr {
  static type = "Video";
  text;
  constructor(n) {
    super(n), this.text = n.text ?? "Video";
  }
  _render(n) {
    super._render(n), this.drawTextIdentity(n), this.updateSelected(n);
  }
  drawTextIdentity(n) {
    const r = new Path2D(
      "M16.5625 0.925L12.5 3.275V0.625L11.875 0H0.625L0 0.625V9.375L0.625 10H11.875L12.5 9.375V6.875L16.5625 9.2125L17.5 8.625V1.475L16.5625 0.925ZM11.25 8.75H1.25V1.25H11.25V8.75ZM16.25 7.5L12.5 5.375V4.725L16.25 2.5V7.5Z"
    );
    n.save(), n.translate(-this.width / 2, -this.height / 2), n.translate(0, 14), n.font = "600 12px 'Geist variable'", n.fillStyle = "#f4f4f5", n.textAlign = "left", n.clip(), n.fillText(this.text, 36, 10), n.translate(8, 1), n.fillStyle = "#f4f4f5", n.fill(r), n.restore();
  }
}
class _h extends Er {
  static type = "Text";
  constructor(n) {
    super(n), this.fill = "#303030";
  }
  _render(n) {
    super._render(n), this.drawTextIdentity(n), this.updateSelected(n);
  }
  drawTextIdentity(n) {
    const r = new Path2D(
      "M6.23982 0.361968C6.18894 0.253743 6.10832 0.162234 6.00736 0.0981357C5.9064 0.034038 5.78929 0 5.6697 0C5.55012 0 5.433 0.034038 5.33204 0.0981357C5.23109 0.162234 5.15046 0.253743 5.09959 0.361968L0.0599035 11.0713C0.0246926 11.1462 0.00457285 11.2272 0.000693114 11.3099C-0.00318662 11.3925 0.00924959 11.4751 0.0372917 11.553C0.0939253 11.7102 0.210687 11.8384 0.361891 11.9095C0.513095 11.9806 0.686354 11.9888 0.843555 11.9322C1.00076 11.8755 1.12902 11.7588 1.20013 11.6075L2.51202 8.81998H8.82738L10.1393 11.6075C10.1745 11.6824 10.2241 11.7496 10.2853 11.8053C10.3465 11.861 10.418 11.9041 10.4958 11.9322C10.5737 11.9602 10.6563 11.9726 10.7389 11.9687C10.8216 11.9649 10.9026 11.9447 10.9775 11.9095C11.0524 11.8743 11.1196 11.8247 11.1753 11.7635C11.231 11.7023 11.2741 11.6308 11.3021 11.553C11.3302 11.4751 11.3426 11.3925 11.3387 11.3099C11.3348 11.2272 11.3147 11.1462 11.2795 11.0713L6.23982 0.361968ZM3.10498 7.56005L5.6697 2.11011L8.23443 7.56005H3.10498ZM15.1191 3.78029C14.1143 3.78029 13.3292 4.05354 12.7859 4.59294C12.6721 4.71153 12.6092 4.86987 12.6106 5.03419C12.6119 5.19851 12.6774 5.3558 12.7931 5.4725C12.9088 5.58921 13.0655 5.6561 13.2298 5.6589C13.3941 5.6617 13.553 5.60018 13.6726 5.48748C13.9718 5.19062 14.46 5.04021 15.1191 5.04021C16.1609 5.04021 17.009 5.74892 17.009 6.61511V6.86867C16.45 6.49465 15.7917 6.29663 15.1191 6.30013C13.382 6.30013 11.9693 7.57187 11.9693 9.13495C11.9693 10.698 13.382 11.9698 15.1191 11.9698C15.792 11.9727 16.4503 11.7739 17.009 11.3989C17.0168 11.566 17.0907 11.7231 17.2144 11.8357C17.3381 11.9483 17.5014 12.0071 17.6685 11.9993C17.8356 11.9915 17.9927 11.9176 18.1053 11.7939C18.2179 11.6702 18.2767 11.5069 18.2689 11.3398V6.61511C18.2689 5.05202 16.8562 3.78029 15.1191 3.78029ZM15.1191 10.7099C14.0773 10.7099 13.2292 10.0012 13.2292 9.13495C13.2292 8.26876 14.0773 7.56005 15.1191 7.56005C16.1609 7.56005 17.009 8.26876 17.009 9.13495C17.009 10.0012 16.1609 10.7099 15.1191 10.7099Z"
    );
    n.save(), n.translate(-this.width / 2, -this.height / 2), n.translate(0, 12), n.font = "600 12px 'Geist variable'", n.fillStyle = "#f4f4f5", n.textAlign = "left", n.clip(), n.fillText(this.text, 36, 12), n.translate(8, 1), n.fillStyle = "#f4f4f5", n.fill(r), n.restore();
  }
}
let u4 = class extends fc {
  static type = "Image";
  text;
  constructor(n) {
    super(n), this.text = n.text ?? "Image";
  }
  _render(n) {
    super._render(n), this.drawTextIdentity(n), this.updateSelected(n);
  }
  drawTextIdentity(n) {
    const r = new Path2D(
      "M1.55556 0H14.4444C15.3031 0 16 0.696889 16 1.55556V14.4444C16 14.857 15.8361 15.2527 15.5444 15.5444C15.2527 15.8361 14.857 16 14.4444 16H1.55556C1.143 16 0.747335 15.8361 0.455612 15.5444C0.163889 15.2527 0 14.857 0 14.4444V1.55556C0 0.696889 0.696889 0 1.55556 0ZM14.4444 1.33333H1.55556C1.49662 1.33333 1.4401 1.35675 1.39842 1.39842C1.35675 1.4401 1.33333 1.49662 1.33333 1.55556V14.4444C1.33333 14.5671 1.43289 14.6667 1.55556 14.6667H1.72444L10.456 5.93511C10.6004 5.79065 10.7719 5.67605 10.9607 5.59787C11.1494 5.51968 11.3517 5.47944 11.556 5.47944C11.7603 5.47944 11.9626 5.51968 12.1513 5.59787C12.3401 5.67605 12.5116 5.79065 12.656 5.93511L14.6667 7.94578V1.55556C14.6667 1.49662 14.6433 1.4401 14.6016 1.39842C14.5599 1.35675 14.5034 1.33333 14.4444 1.33333ZM14.6667 9.83111L11.7129 6.87733C11.6922 6.85664 11.6677 6.84022 11.6407 6.82902C11.6137 6.81781 11.5848 6.81205 11.5556 6.81205C11.5263 6.81205 11.4974 6.81781 11.4704 6.82902C11.4434 6.84022 11.4189 6.85664 11.3982 6.87733L3.60978 14.6667H14.4444C14.5034 14.6667 14.5599 14.6433 14.6016 14.6016C14.6433 14.5599 14.6667 14.5034 14.6667 14.4444V9.83111ZM4.88889 7.11111C4.29952 7.11111 3.73429 6.87699 3.31754 6.46024C2.90079 6.04349 2.66667 5.47826 2.66667 4.88889C2.66667 4.29952 2.90079 3.73429 3.31754 3.31754C3.73429 2.90079 4.29952 2.66667 4.88889 2.66667C5.47826 2.66667 6.04349 2.90079 6.46024 3.31754C6.87699 3.73429 7.11111 4.29952 7.11111 4.88889C7.11111 5.47826 6.87699 6.04349 6.46024 6.46024C6.04349 6.87699 5.47826 7.11111 4.88889 7.11111ZM4.88889 5.77778C5.12464 5.77778 5.35073 5.68413 5.51743 5.51743C5.68413 5.35073 5.77778 5.12464 5.77778 4.88889C5.77778 4.65314 5.68413 4.42705 5.51743 4.26035C5.35073 4.09365 5.12464 4 4.88889 4C4.65314 4 4.42705 4.09365 4.26035 4.26035C4.09365 4.42705 4 4.65314 4 4.88889C4 5.12464 4.09365 5.35073 4.26035 5.51743C4.42705 5.68413 4.65314 5.77778 4.88889 5.77778Z"
    );
    n.save(), n.translate(-this.width / 2, -this.height / 2), n.translate(0, 12), n.font = "600 12px 'Geist variable'", n.fillStyle = "#f4f4f5", n.textAlign = "left", n.clip(), n.fillText(this.text, 36, 12), n.translate(8, 1), n.fillStyle = "#f4f4f5", n.fill(r), n.restore();
  }
};
class d4 extends nr {
  static type = "Track";
  constructor(n) {
    super(n), this.fill = "#18181b";
  }
  _render(n) {
    super._render(n);
    const r = new Path2D(
      "M14.4444 13.3263H11.0667C12.5384 12.3991 13.6259 10.9716 14.1289 9.30644C14.632 7.64131 14.5169 5.85051 13.8048 4.26348C13.0927 2.67645 11.8314 1.39993 10.2531 0.668736C8.67478 -0.0624548 6.8855 -0.199136 5.21442 0.283835C3.54334 0.766806 2.10285 1.83695 1.15794 3.2974C0.213035 4.75785 -0.172743 6.51038 0.0715766 8.23261C0.315896 9.95484 1.17388 11.5309 2.4877 12.671C3.80151 13.811 5.4828 14.4383 7.22227 14.4374H14.4444C14.5918 14.4374 14.7331 14.3789 14.8373 14.2747C14.9415 14.1705 15 14.0292 15 13.8819C15 13.7345 14.9415 13.5932 14.8373 13.489C14.7331 13.3848 14.5918 13.3263 14.4444 13.3263ZM1.1112 7.21523C1.1112 6.00658 1.46961 4.82506 2.14111 3.8201C2.8126 2.81514 3.76702 2.03187 4.88367 1.56934C6.00032 1.10681 7.22905 0.985789 8.41449 1.22159C9.59992 1.45738 10.6888 2.03941 11.5435 2.89405C12.3981 3.7487 12.9801 4.83759 13.2159 6.02302C13.4517 7.20845 13.3307 8.43719 12.8682 9.55384C12.4056 10.6705 11.6224 11.6249 10.6174 12.2964C9.61244 12.9679 8.43093 13.3263 7.22227 13.3263C5.60208 13.3245 4.04878 12.68 2.90313 11.5344C1.75748 10.3887 1.11304 8.83542 1.1112 7.21523ZM7.22227 5.54858C7.55191 5.54858 7.87414 5.45083 8.14822 5.2677C8.4223 5.08456 8.63592 4.82426 8.76206 4.51972C8.88821 4.21518 8.92121 3.88007 8.85691 3.55677C8.7926 3.23347 8.63386 2.9365 8.40078 2.70342C8.16769 2.47033 7.87072 2.3116 7.54742 2.24729C7.22412 2.18298 6.88901 2.21599 6.58447 2.34213C6.27993 2.46828 6.01964 2.6819 5.8365 2.95598C5.65337 3.23006 5.55562 3.55229 5.55562 3.88192C5.55562 4.32395 5.73121 4.74787 6.04377 5.06043C6.35633 5.37298 6.78025 5.54858 7.22227 5.54858ZM7.22227 3.32637C7.33215 3.32637 7.43956 3.35895 7.53092 3.42C7.62228 3.48104 7.69349 3.56781 7.73554 3.66932C7.77759 3.77084 7.78859 3.88254 7.76715 3.9903C7.74572 4.09807 7.6928 4.19706 7.61511 4.27476C7.53741 4.35245 7.43842 4.40536 7.33066 4.4268C7.22289 4.44824 7.11119 4.43723 7.00967 4.39519C6.90816 4.35314 6.82139 4.28193 6.76035 4.19057C6.69931 4.09921 6.66672 3.9918 6.66672 3.88192C6.66672 3.73458 6.72525 3.59327 6.82944 3.48909C6.93363 3.3849 7.07493 3.32637 7.22227 3.32637ZM8.88893 10.5485C8.88893 10.2189 8.79118 9.89668 8.60805 9.6226C8.42491 9.34852 8.16462 9.1349 7.86008 9.00875C7.55553 8.88261 7.22043 8.8496 6.89713 8.91391C6.57383 8.97822 6.27686 9.13695 6.04377 9.37004C5.81069 9.60313 5.65195 9.9001 5.58764 10.2234C5.52334 10.5467 5.55634 10.8818 5.68249 11.1863C5.80863 11.4909 6.02225 11.7512 6.29633 11.9343C6.57041 12.1175 6.89264 12.2152 7.22227 12.2152C7.6643 12.2152 8.08822 12.0396 8.40078 11.727C8.71334 11.4145 8.88893 10.9906 8.88893 10.5485ZM6.66672 10.5485C6.66672 10.4387 6.69931 10.3313 6.76035 10.2399C6.82139 10.1485 6.90816 10.0773 7.00967 10.0353C7.11119 9.99323 7.22289 9.98223 7.33066 10.0037C7.43842 10.0251 7.53741 10.078 7.61511 10.1557C7.6928 10.2334 7.74572 10.3324 7.76715 10.4402C7.78859 10.5479 7.77759 10.6596 7.73554 10.7611C7.69349 10.8627 7.62228 10.9494 7.53092 11.0105C7.43956 11.0715 7.33215 11.1041 7.22227 11.1041C7.07493 11.1041 6.93363 11.0456 6.82944 10.9414C6.72525 10.8372 6.66672 10.6959 6.66672 10.5485ZM10.5556 8.88189C10.8852 8.88189 11.2074 8.78414 11.4815 8.60101C11.7556 8.41787 11.9692 8.15758 12.0954 7.85303C12.2215 7.54849 12.2545 7.21338 12.1902 6.89008C12.1259 6.56678 11.9672 6.26982 11.7341 6.03673C11.501 5.80364 11.204 5.64491 10.8807 5.5806C10.5574 5.51629 10.2223 5.5493 9.91778 5.67544C9.61324 5.80159 9.35295 6.01521 9.16981 6.28929C8.98668 6.56337 8.88893 6.8856 8.88893 7.21523C8.88893 7.65726 9.06452 8.08118 9.37708 8.39374C9.68964 8.70629 10.1136 8.88189 10.5556 8.88189ZM10.5556 6.65968C10.6655 6.65968 10.7729 6.69226 10.8642 6.75331C10.9556 6.81435 11.0268 6.90112 11.0688 7.00263C11.1109 7.10415 11.1219 7.21585 11.1005 7.32362C11.079 7.43138 11.0261 7.53037 10.9484 7.60807C10.8707 7.68576 10.7717 7.73867 10.664 7.76011C10.5562 7.78155 10.4445 7.77054 10.343 7.7285C10.2415 7.68645 10.1547 7.61524 10.0937 7.52388C10.0326 7.43252 10 7.32511 10 7.21523C10 7.06789 10.0586 6.92658 10.1628 6.8224C10.2669 6.71821 10.4082 6.65968 10.5556 6.65968ZM3.88896 5.54858C3.55933 5.54858 3.2371 5.64633 2.96302 5.82946C2.68894 6.01259 2.47532 6.27289 2.34918 6.57743C2.22303 6.88197 2.19002 7.21708 2.25433 7.54038C2.31864 7.86368 2.47737 8.16065 2.71046 8.39374C2.94355 8.62682 3.24052 8.78556 3.56382 8.84986C3.88711 8.91417 4.22222 8.88117 4.52677 8.75502C4.83131 8.62888 5.0916 8.41526 5.27474 8.14118C5.45787 7.8671 5.55562 7.54487 5.55562 7.21523C5.55562 6.77321 5.38003 6.34929 5.06747 6.03673C4.75491 5.72417 4.33099 5.54858 3.88896 5.54858ZM3.88896 7.77078C3.77909 7.77078 3.67168 7.7382 3.58032 7.67716C3.48896 7.61611 3.41775 7.52935 3.3757 7.42783C3.33365 7.32632 3.32265 7.21462 3.34409 7.10685C3.36552 6.99908 3.41843 6.90009 3.49613 6.8224C3.57382 6.7447 3.67281 6.69179 3.78058 6.67036C3.88835 6.64892 4.00005 6.65992 4.10156 6.70197C4.20308 6.74402 4.28984 6.81522 4.35089 6.90658C4.41193 6.99794 4.44452 7.10535 4.44452 7.21523C4.44452 7.36257 4.38598 7.50388 4.2818 7.60807C4.17761 7.71225 4.03631 7.77078 3.88896 7.77078Z"
    );
    this.items.length || (n.save(), n.translate(-this.width / 2, -this.height / 2), n.translate(0, 12), n.font = "600 12px 'Geist variable'", n.fillStyle = "#A0A4A2", n.textAlign = "left", n.clip(), n.fillText("Drag and drop media here", 32, 12), n.translate(8, 1), n.fillStyle = "#A0A4A2", n.fill(r), n.restore());
  }
}
class f4 extends yi {
  static type = "Helper";
  constructor(n) {
    n.activeGuideFill = "#ffffff", super(n);
  }
}
class h4 {
  addTrackItem(n) {
    const r = n.id, s = ba(n, {
      tScale: this.tScale,
      sizesMap: this.sizesMap
    });
    this.add(s), this.trackItemIds.push(r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = en(this.trackItemsMap);
  }
  alignItemsToTrack() {
    this.pauseEventListeners();
    const n = new Map(
      this.getObjects("Track").map((s) => [s.id, s])
    ), r = this.getObjects("Image", "Video", "Text", "Audio");
    this.trackItemIds.forEach((s) => {
      const a = this.tracks.find((d) => d.items.includes(s));
      if (!a) return;
      const c = n.get(a.id);
      this.duration;
      const u = this.getObjects().find((d) => d.id === s);
      u && c && (u.isMain = !1, this.trackItemsMap[s].isMain = !1, u.set({ top: c.top }), u.setCoords());
    }), n.forEach((s) => {
      s.items = r.filter((a) => a.top === s.top).map((a) => a.id);
    }), this.resumeEventListeners();
  }
  updateTrackItemsPosition() {
    const n = this.getObjects("Image", "Text", "Video", "Audio");
    n.sort((r, s) => r.top - s.top), this.trackItemIds = n.map((r) => r.id).reverse();
  }
  restoreTrackItemPositions() {
  }
  updateTrackItemsState() {
    this.pauseEventListeners();
    const n = this.getObjects("Image", "Video", "Text", "Audio"), r = {};
    n.forEach((s) => {
      const { id: a, left: c, width: u } = s, d = this.trackItemsMap[a], h = er(c, this.tScale), m = h + er(u, this.tScale), b = { from: h, to: m }, x = {
        ...d,
        display: b,
        trim: s instanceof Dr || s instanceof Fn ? s.trim : void 0
      };
      s.display = b, r[a] = x;
    }), this.trackItemsMap = r, this.resumeEventListeners();
  }
  deleteActiveTrackItem() {
    const n = this.getActiveObjects();
    if (!n.length) return !1;
    const r = n.map((a) => a.id), s = Is(this.tracks, r);
    this.trackItemsMap = Object.keys(this.trackItemsMap).reduce((a, c) => (r.includes(c) || (a[c] = this.trackItemsMap[c]), a), {}), this.trackItemIds = this.trackItemIds.filter(
      (a) => !r.includes(a)
    ), this.tracks = s, this.discardActiveObject(), this.remove(...n), this.setActiveIds([]), this.renderTracks(), this.alignItemsToTrack(), this.updateState({ updateHistory: !0, kind: "remove" });
  }
  updateTrackItemsToHistory() {
    this.pauseEventListeners();
    const n = this.getObjects();
    this.trackItemIds.forEach((r) => {
      const s = this.tracks.find(
        (m) => m.items.includes(r)
      ), a = n.find(
        (m) => m.id === s?.id
      )?.top;
      if (!a) {
        console.warn(`Track top not found for trackItemId: ${r}`);
        return;
      }
      const c = this.trackItemsMap[r], u = n.find((m) => m.id === r);
      if (!u) {
        console.warn(`Object not found for trackItemId: ${r}`);
        return;
      }
      const d = Wt(c.display.from, this.tScale), h = Wt(
        c.display.to - c.display.from,
        this.tScale
      );
      u.set({ left: d, width: h, top: a }), u.setCoords();
    }), this.requestRenderAll(), this.resumeEventListeners();
  }
  cloneActiveTrackItem(n) {
    const r = n?.trackItemId || this.activeIds[0];
    if (!r) return !1;
    const a = {
      ...this.trackItemsMap[r],
      id: Xt()
    }, c = this.tracks.find(
      (b) => b.items.includes(r)
    ), u = this.tracks.findIndex((b) => b.id === c?.id) + 1;
    this.findOrCreateTrack(a, { trackIndex: u });
    const d = ba(a, {
      tScale: this.tScale
    });
    d && this.add(d);
    const { audioData: h, ...m } = a.metadata || {};
    a.metadata = m, this.trackItemsMap[a.id] = a, this.trackItemIds.push(a.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  splitActiveTrackItem(n) {
    const r = n.trackItemId ?? this.activeIds[0];
    if (!r || this.activeIds.length > 1) return !1;
    const s = this.trackItemsMap[r], a = n.time;
    if (s.display.from >= a || s.display.to <= a)
      return !1;
    const c = {
      ...s,
      display: { from: s.display.from, to: a }
    }, u = {
      ...s,
      display: { from: a, to: s.display.to },
      id: Xt()
    };
    if (s.type === "video" || s.type === "audio") {
      const b = a - c.display.from;
      c.trim = {
        from: s.trim.from,
        to: s.trim.from + b
      }, u.trim = {
        from: c.trim.to,
        to: s.trim.to
      };
    }
    const d = this.getObjects().find(
      (b) => b.id === r
    );
    d.display = c.display, this.tracks.find(
      (b) => b.items.includes(r)
    )?.items.push(u.id);
    const m = ba(u, {
      tScale: this.tScale
    });
    m && this.add(m), this.trackItemsMap[u.id] = u, this.trackItemsMap[r] = c, this.trackItemIds.push(u.id), this.updateTrackItemCoords(c.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  updateTrackItemCoords(n) {
    const r = this.getObjects().find((u) => u.id === n), s = this.trackItemsMap[n], a = Wt(s.display.from, this.tScale), c = Wt(
      s.display.to - s.display.from,
      this.tScale
    );
    r?.set({ left: a, width: c }), r?.setCoords();
  }
  updateTrackItemDetails(n, r) {
    const s = r?.trackItemId;
    if (!s) return !1;
    const a = this.trackItemsMap[s], c = { ...a.details, ...n.details };
    ("fontSize" in c || "lineHeight" in c) && (c.height = ys(
      c.text,
      c
    )), this.trackItemsMap[s] = {
      ...a,
      ...n,
      details: c
    }, this.updateState();
  }
  updateTrackItem(n, r) {
    const s = r.trackItemId;
    if (!s) return !1;
    const a = this.trackItemsMap[s], c = { ...a.details, ...n.details };
    if (a.type === "text" && n.details.text) {
      const u = this.getObjects("Text").find(
        (d) => d.id === s
      );
      u instanceof _h && (u.text = n.details.text, this.requestRenderAll());
    }
    ("fontSize" in c || "lineHeight" in c) && (c.height = ys(
      c.text,
      c
    )), this.trackItemsMap[s] = {
      ...a,
      ...n,
      details: c
    }, this.updateState();
  }
  updateTrackItemsDetails(n, r) {
    r?.trackItemIds?.forEach((s, a) => {
      const c = this.trackItemsMap[s], u = {
        ...c.details,
        ...n[a].details
      };
      ("fontSize" in u || "lineHeight" in u) && (u.height = ys(
        u.text,
        u
      )), this.trackItemsMap[s] = {
        ...c,
        ...n[a],
        details: u
      };
    }), this.updateState();
  }
  getTrackItems() {
    return this.getObjects(...p4);
  }
  setActiveTrackItemCoords() {
    this.getActiveObjects().forEach((n) => n.setCoords());
  }
  deleteTrackItemById(n) {
    const r = this.getObjects().filter(
      (s) => n.includes(s.id)
    );
    this.tracks = Is(this.tracks, n), this.trackItemsMap = Object.keys(this.trackItemsMap).filter((s) => !n.includes(s)).reduce((s, a) => (s[a] = this.trackItemsMap[a], s), {}), this.trackItemIds = this.trackItemIds.filter((s) => !n.includes(s)), this.discardActiveObject(), this.remove(...r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = en(this.trackItemsMap);
  }
  selectTrackItemByIds(n) {
    const r = this.getActiveObjects().map((a) => a.id);
    if (yt.isEqual(r, n)) return;
    const s = this.getTrackItems().filter(
      (a) => n.includes(a.id)
    );
    if (s.length === 0)
      this.discardActiveObject();
    else if (s.length === 1)
      this.setActiveObject(s[0]);
    else {
      const a = new Za(s);
      this.setActiveObject(a);
    }
    this.requestRenderAll();
  }
}
const p4 = ["Image", "Text", "Video", "Audio", "Caption", "Template"], ba = (e, n) => {
  const s = {
    text: s4,
    video: i4,
    image: r4,
    audio: n4
  }[e.type];
  return s(e, n);
}, Ir = {
  text: 32,
  image: 40,
  video: 40,
  audio: 32,
  main: 40
}, Td = (e) => {
  switch (e) {
    case "text":
      return Ir.text;
    case "image":
      return Ir.image;
    case "video":
      return Ir.video;
    case "audio":
      return Ir.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return Ir.main;
    default:
      return Ir.text;
  }
};
class g4 {
  // Метод для нахождения или создания нового трека
  findOrCreateTrack(n, { trackId: r, trackIndex: s }) {
    const a = r;
    if (a) {
      const u = this.tracks.find((d) => d.id === a);
      if (u)
        return u.items.push(n.id), a;
    }
    const c = {
      id: Xt(),
      // Генерация уникального ID
      items: [n.id],
      type: n.type,
      accepts: this.acceptsMap?.[n.type]
    };
    return s !== void 0 ? this.tracks.splice(s, 0, c) : this.tracks.push(c), this.renderTracks(), c.id;
  }
  // Метод для удаления всех треков и вспомогательных объектов
  removeTracks() {
    this.getObjects("Track", "Helper")?.forEach((n) => this.remove(n));
  }
  // Метод для отображения треков
  renderTracks() {
    this.updateTracksState(), this.removeTracks();
    const n = this.width, r = this.tracks.flatMap((d) => [
      d,
      {
        id: `after-${d.id}`,
        type: "helper",
        items: [],
        accepts: []
      }
    ]).slice(0, -1);
    let s = 0;
    const a = re.getClass("Helper") || yi, c = new a({
      id: "helperLineTop",
      top: s,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: n,
      kind: "top",
      metadata: {}
    });
    s += Td("helperTop"), this.insertAt(0, c), r.forEach((d, h) => {
      if (d.type === "helper") {
        const m = Td("helperCenter"), b = new a({
          id: d.id,
          top: s,
          tScale: this.tScale,
          width: n,
          height: m,
          metadata: { order: (h + 1) / 2 },
          kind: "center"
        });
        s += m, this.insertAt(0, b);
      } else {
        const m = re.getClass("Track") || nr, b = new m({
          id: d.id,
          top: s,
          left: 0,
          fill: "#18181b",
          height: 42,
          width: n,
          tScale: this.tScale,
          accepts: this.acceptsMap?.[d.type] || [],
          items: d.items
        });
        s += 42, this.insertAt(0, b);
      }
    });
    const u = new a({
      id: "helperLineBottom",
      top: s,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: n,
      kind: "bottom",
      metadata: {}
    });
    this.insertAt(0, u);
  }
  // Метод для обновления состояния треков
  updateTracksState() {
    const n = this.tracks.filter(
      (s) => s.items.length || s.type === "main"
    ), r = /* @__PURE__ */ new Map();
    n.forEach((s) => r.set(s.id, s)), this.tracks = Array.from(r.values());
  }
  // Метод для обновления координат треков
  updateTrackCoords() {
    const n = this.bounding.width + this.spacing.right;
    this.getObjects("Track", "Helper").forEach((r) => {
      r.updateCoords(n), r.setCoords();
    });
  }
}
const m4 = 60, v4 = 188;
function Cd(e, n = 1, r = 1) {
  const s = v4 * n;
  return e * (m4 / 1e3) * s / r;
}
class b4 {
  // Удаление всех переходов
  removeTransitions() {
    const n = this.getObjects("Transition");
    this.remove(...n);
  }
  // Рендеринг переходов
  renderTransitions() {
    this.removeTransitions(), this.transitionIds.forEach((n) => {
      const r = this.transitionsMap[n], s = r.fromId, a = r.toId, c = this.getObjects(), u = c.find((S) => S.id === s), d = c.find((S) => S.id === a);
      if (!u || !d) return;
      const h = Cd(r.duration, this.tScale), m = u.left + u.width - h / 2, b = u.height, x = new Ge({
        id: r.id,
        left: m,
        top: u.top,
        height: b,
        width: h,
        tScale: this.tScale,
        duration: r.duration,
        fromId: u.id,
        toId: d.id,
        kind: r.kind
      });
      r.kind === "none" && (x.visible = !1), this.add(x);
    });
  }
  // Обновление координат переходов
  updateTransitionCoordinates() {
    this.pauseEventListeners(), this.getObjects("Transition").forEach((n) => {
      n.tScale = this.tScale, n.updateCoords(), n.setCoords();
    }), this.resumeEventListeners();
  }
  // Выравнивание переходов по треку
  alignTransitionsToTrack() {
    this.pauseEventListeners(), this.transitionIds.forEach((n) => {
      const r = this.getObjects("Transition").find(
        (s) => s.id === n
      );
      if (r instanceof Ge) {
        const s = this.getObjects().find(
          (u) => u.id === r.fromId
        );
        if (!s) return;
        const a = Cd(r.duration, this.tScale), c = s.left + s.width - a / 2;
        r.set({ left: c, top: s.top }), r.setCoords();
      }
    }), this.resumeEventListeners();
  }
  // Обновление переходов
  updateTransitions(n = !0) {
    n && this.pauseEventListeners();
    const r = this.getObjects("Track"), s = this.getObjects("Video", "Image");
    this.removeTransitions();
    const a = {}, c = [];
    r.forEach((u) => {
      const d = s.filter((h) => u.items.includes(h.id)).sort((h, m) => h.left - m.left);
      for (let h = 0; h < d.length - 1; h++) {
        const m = d[h], b = d[h + 1];
        if (Math.abs(m.left + m.width - b.left) <= 1) {
          const x = `${m.id}-${b.id}`;
          if (this.transitionIds.includes(x))
            a[x] = this.transitionsMap[x];
          else {
            const S = {
              id: x,
              duration: 1500,
              fromId: m.id,
              toId: b.id,
              kind: "none",
              trackId: u.id,
              type: "transition"
            };
            a[x] = S;
          }
          c.push(x);
        }
      }
    }), this.transitionIds = c, this.transitionsMap = a, this.renderTransitions(), n && this.resumeEventListeners();
  }
}
const H = {
  canvas: null,
  enableGuideRedraw: !0,
  isPointerOverHelperTrack: !1,
  draggingOverTrack: null,
  primaryMovingObjects: [],
  secondaryMovingObjects: [],
  placeholderMovingObjects: [],
  objectInitialPositions: {},
  originTrack: {},
  trackToItemsMap: {},
  activeTrackToItemsMap: {},
  trackTopToIdMap: {},
  trackTops: [],
  activeObjects: [],
  primaryTracks: {},
  secondaryTracks: {}
}, Ut = {
  guide: null,
  object: null,
  objects: []
}, L7 = () => H, j7 = (e) => {
  Object.assign(H, e);
}, y4 = (e) => {
  e.on("before:transform", Sh.bind(e));
}, w4 = (e) => {
  e.off("before:transform", Sh.bind(e));
};
function Sh(e) {
  H.canvas = this, H.activeTrackToItemsMap = {}, H.primaryTracks = {}, H.secondaryTracks = {}, H.trackTops = [], H.trackToItemsMap = {}, H.activeObjects = [], H.trackTopToIdMap = {}, H.canvas.trackIdAfterTransform = "", H.canvas.positionAfterTransform = {};
  const n = H.canvas.getActiveObject();
  if (!n) return;
  H.activeObjects = n instanceof Za ? n.getObjects() : [n];
  const r = H.canvas.getScenePoint(e.e), s = H.canvas.getObjects("Track");
  H.originTrack = s.find((u) => {
    const d = u.getBoundingRect();
    return r.x >= d.left && r.x <= d.left + d.width && r.y >= d.top && r.y <= d.top + d.height;
  }) ?? {};
  const a = H.canvas.getObjects(
    "Video",
    "Image",
    "Audio",
    "Text",
    "Element"
  );
  s.forEach((u) => {
    const d = a.filter(
      (h) => u.items.includes(h.id)
    );
    H.trackToItemsMap[u.id] = d, H.trackTopToIdMap[u.top] = u.id, H.trackTops.push(u.top);
  }), H.trackTops.sort((u, d) => u - d), H.activeObjects.forEach((u) => {
    const d = s?.find(
      (m) => m.items.includes(u.id)
    );
    if (!d) return;
    const h = d.id;
    H.activeTrackToItemsMap[h] ? H.activeTrackToItemsMap[h].push(u) : H.activeTrackToItemsMap[h] = [u];
  }), H.primaryMovingObjects = H.activeObjects.filter(
    (u) => {
      const d = u.getBoundingRect();
      return r.y >= d.top && r.y <= d.top + d.height && !(u instanceof Ge);
    }
  ), H.primaryMovingObjects.forEach((u) => {
    const d = u.getBoundingRect().top, h = H.trackTopToIdMap[d];
    if (H.primaryTracks[h])
      H.primaryTracks[h].objects.push(u);
    else {
      const m = Wa(
        H.trackTops,
        H.originTrack.top,
        d
      );
      if (typeof m != "number") return;
      H.primaryTracks[h] = { objects: [u], index: m };
    }
  }), H.primaryMovingObjects = H.primaryMovingObjects.sort(
    (u, d) => u.left - d.left
  ), H.secondaryMovingObjects = H.activeObjects.filter(
    (u) => !H.primaryMovingObjects.includes(u) && !(u instanceof Ge)
  ), H.secondaryMovingObjects.forEach((u) => {
    const d = u.getBoundingRect().top, h = H.trackTopToIdMap[u.getBoundingRect().top];
    if (H.secondaryTracks[h])
      H.secondaryTracks[h].objects.push(u);
    else {
      const m = Wa(
        H.trackTops,
        H.originTrack.top,
        d
      );
      if (typeof m != "number") return;
      H.secondaryTracks[h] = { objects: [u], index: m };
    }
  }), H.originTrack && (H.canvas.trackOriginBeforeTransform = H.originTrack.id), n && (H.canvas.positionBeforeTransform = {
    top: n.top,
    left: n.left
  }), ("transform" in e ? e.transform : {}).action === "drag" && (H.placeholderMovingObjects = H.primaryMovingObjects.map(
    (u) => {
      const d = u.getBoundingRect();
      H.objectInitialPositions[u.id] = {
        top: d.top,
        left: d.left
      };
      const h = new li({
        id: `${u.id}-placeholder`,
        left: d.left,
        top: d.top,
        width: d.width,
        height: d.height,
        for: x4[u.type]
      });
      return h.draggedObject = u, h;
    }
  ), H.canvas.add(...H.placeholderMovingObjects));
}
function Wa(e, n, r) {
  const s = e.indexOf(n), a = e.indexOf(r);
  return s === -1 || a === -1 ? null : a - s;
}
const x4 = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text"
};
function Ih(e) {
  if (!Ut.guide) return !1;
  e.e.preventDefault();
  const n = this, r = n.getViewportPoint(e.e);
  Ut.guide.set({
    left: r.x - 16,
    top: r.y - Ut.guide.height / 2
  });
  const s = _4(
    r,
    Ut.objects
  );
  s && (Ut.object = s, s.strokeDashArray = [5, 1], s.setSelected(!0)), Ut.objects.forEach((a) => {
    a !== s && a.setSelected(!1);
  }), n.requestRenderAll();
}
function _4(e, n) {
  let r = 1 / 0, s = null;
  const a = new Bb(e.x, e.y);
  return n.forEach((c) => {
    const u = S4(c, a);
    u < r && (r = u, s = c);
  }), s;
}
function S4(e, n) {
  return Math.sqrt(
    Math.pow(e.left - n.x, 2) + Math.pow(e.top - n.y, 2)
  );
}
const I4 = [
  "transition",
  "image",
  "video",
  "audio",
  "caption",
  "text"
];
function Th(e) {
  const n = e.e.dataTransfer?.types[0];
  if (!n) return;
  const r = JSON.parse(n), { type: s, duration: a = 5e3 } = r;
  if (!I4.includes(s)) return;
  const c = this;
  c.discardActiveObject();
  const u = Wt(a, c.tScale);
  Ut.guide = T4({
    width: u,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type: s
  }), c.add(Ut.guide), s === "transition" && (Ut.objects = c.getObjects("Transition"), Ut.objects.forEach((d) => {
    d.visible = !0;
  })), pt.dispatch(oh);
}
function T4({ width: e, height: n, id: r, left: s, top: a, type: c }) {
  return c === "transition" ? new Es({
    top: 0,
    left: 0,
    height: 48,
    width: 48,
    id: "TransitionGuide"
  }) : new As({
    top: a,
    left: s,
    height: n,
    width: e,
    id: r,
    name: "Rivers in the mountains"
  });
}
function Ch() {
  if (!Ut.guide) return;
  pt.dispatch(Ss);
  const e = this;
  C4(Ut.objects), e.remove(Ut.guide);
}
function C4(e) {
  e.forEach((n) => {
    n.strokeDashArray = [], n.setSelected(!1), n.kind === "none" && (n.visible = !1);
  });
}
var k4 = typeof global == "object" && global && global.Object === Object && global, E4 = typeof self == "object" && self && self.Object === Object && self, pc = k4 || E4 || Function("return this")(), Hn = pc.Symbol, kh = Object.prototype, A4 = kh.hasOwnProperty, M4 = kh.toString, ii = Hn ? Hn.toStringTag : void 0;
function R4(e) {
  var n = A4.call(e, ii), r = e[ii];
  try {
    e[ii] = void 0;
    var s = !0;
  } catch {
  }
  var a = M4.call(e);
  return s && (n ? e[ii] = r : delete e[ii]), a;
}
var O4 = Object.prototype, P4 = O4.toString;
function D4(e) {
  return P4.call(e);
}
var L4 = "[object Null]", j4 = "[object Undefined]", kd = Hn ? Hn.toStringTag : void 0;
function gc(e) {
  return e == null ? e === void 0 ? j4 : L4 : kd && kd in Object(e) ? R4(e) : D4(e);
}
function mc(e) {
  return e != null && typeof e == "object";
}
var N4 = "[object Symbol]";
function vc(e) {
  return typeof e == "symbol" || mc(e) && gc(e) == N4;
}
function F4(e, n) {
  for (var r = -1, s = e == null ? 0 : e.length, a = Array(s); ++r < s; )
    a[r] = n(e[r], r, e);
  return a;
}
var wi = Array.isArray, Ed = Hn ? Hn.prototype : void 0, Ad = Ed ? Ed.toString : void 0;
function Eh(e) {
  if (typeof e == "string")
    return e;
  if (wi(e))
    return F4(e, Eh) + "";
  if (vc(e))
    return Ad ? Ad.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
}
function Ms(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function z4(e) {
  return e;
}
var H4 = "[object AsyncFunction]", U4 = "[object Function]", W4 = "[object GeneratorFunction]", B4 = "[object Proxy]";
function $4(e) {
  if (!Ms(e))
    return !1;
  var n = gc(e);
  return n == U4 || n == W4 || n == H4 || n == B4;
}
var ya = pc["__core-js_shared__"], Md = function() {
  var e = /[^.]+$/.exec(ya && ya.keys && ya.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function V4(e) {
  return !!Md && Md in e;
}
var G4 = Function.prototype, X4 = G4.toString;
function Y4(e) {
  if (e != null) {
    try {
      return X4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Z4 = /[\\^$.*+?()[\]{}|]/g, K4 = /^\[object .+?Constructor\]$/, q4 = Function.prototype, J4 = Object.prototype, Q4 = q4.toString, tx = J4.hasOwnProperty, ex = RegExp(
  "^" + Q4.call(tx).replace(Z4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nx(e) {
  if (!Ms(e) || V4(e))
    return !1;
  var n = $4(e) ? ex : K4;
  return n.test(Y4(e));
}
function rx(e, n) {
  return e?.[n];
}
function bc(e, n) {
  var r = rx(e, n);
  return nx(r) ? r : void 0;
}
function ix(e, n, r) {
  switch (r.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, r[0]);
    case 2:
      return e.call(n, r[0], r[1]);
    case 3:
      return e.call(n, r[0], r[1], r[2]);
  }
  return e.apply(n, r);
}
var sx = 800, ox = 16, ax = Date.now;
function cx(e) {
  var n = 0, r = 0;
  return function() {
    var s = ax(), a = ox - (s - r);
    if (r = s, a > 0) {
      if (++n >= sx)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function lx(e) {
  return function() {
    return e;
  };
}
var Rs = function() {
  try {
    var e = bc(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ux = Rs ? function(e, n) {
  return Rs(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lx(n),
    writable: !0
  });
} : z4, dx = cx(ux), fx = 9007199254740991, hx = /^(?:0|[1-9]\d*)$/;
function Ah(e, n) {
  var r = typeof e;
  return n = n ?? fx, !!n && (r == "number" || r != "symbol" && hx.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function px(e, n, r) {
  n == "__proto__" && Rs ? Rs(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function Mh(e, n) {
  return e === n || e !== e && n !== n;
}
var gx = Object.prototype, mx = gx.hasOwnProperty;
function vx(e, n, r) {
  var s = e[n];
  (!(mx.call(e, n) && Mh(s, r)) || r === void 0 && !(n in e)) && px(e, n, r);
}
var Rd = Math.max;
function bx(e, n, r) {
  return n = Rd(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var s = arguments, a = -1, c = Rd(s.length - n, 0), u = Array(c); ++a < c; )
      u[a] = s[n + a];
    a = -1;
    for (var d = Array(n + 1); ++a < n; )
      d[a] = s[a];
    return d[n] = r(u), ix(e, this, d);
  };
}
var yx = 9007199254740991;
function wx(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yx;
}
var xx = "[object Arguments]";
function Od(e) {
  return mc(e) && gc(e) == xx;
}
var Rh = Object.prototype, _x = Rh.hasOwnProperty, Sx = Rh.propertyIsEnumerable, Oh = Od(/* @__PURE__ */ function() {
  return arguments;
}()) ? Od : function(e) {
  return mc(e) && _x.call(e, "callee") && !Sx.call(e, "callee");
}, Ix = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tx = /^\w*$/;
function Cx(e, n) {
  if (wi(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || vc(e) ? !0 : Tx.test(e) || !Ix.test(e) || n != null && e in Object(n);
}
var ui = bc(Object, "create");
function kx() {
  this.__data__ = ui ? ui(null) : {}, this.size = 0;
}
function Ex(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Ax = "__lodash_hash_undefined__", Mx = Object.prototype, Rx = Mx.hasOwnProperty;
function Ox(e) {
  var n = this.__data__;
  if (ui) {
    var r = n[e];
    return r === Ax ? void 0 : r;
  }
  return Rx.call(n, e) ? n[e] : void 0;
}
var Px = Object.prototype, Dx = Px.hasOwnProperty;
function Lx(e) {
  var n = this.__data__;
  return ui ? n[e] !== void 0 : Dx.call(n, e);
}
var jx = "__lodash_hash_undefined__";
function Nx(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ui && n === void 0 ? jx : n, this;
}
function rr(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
rr.prototype.clear = kx;
rr.prototype.delete = Ex;
rr.prototype.get = Ox;
rr.prototype.has = Lx;
rr.prototype.set = Nx;
function Fx() {
  this.__data__ = [], this.size = 0;
}
function Vs(e, n) {
  for (var r = e.length; r--; )
    if (Mh(e[r][0], n))
      return r;
  return -1;
}
var zx = Array.prototype, Hx = zx.splice;
function Ux(e) {
  var n = this.__data__, r = Vs(n, e);
  if (r < 0)
    return !1;
  var s = n.length - 1;
  return r == s ? n.pop() : Hx.call(n, r, 1), --this.size, !0;
}
function Wx(e) {
  var n = this.__data__, r = Vs(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function Bx(e) {
  return Vs(this.__data__, e) > -1;
}
function $x(e, n) {
  var r = this.__data__, s = Vs(r, e);
  return s < 0 ? (++this.size, r.push([e, n])) : r[s][1] = n, this;
}
function Lr(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
Lr.prototype.clear = Fx;
Lr.prototype.delete = Ux;
Lr.prototype.get = Wx;
Lr.prototype.has = Bx;
Lr.prototype.set = $x;
var Vx = bc(pc, "Map");
function Gx() {
  this.size = 0, this.__data__ = {
    hash: new rr(),
    map: new (Vx || Lr)(),
    string: new rr()
  };
}
function Xx(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Gs(e, n) {
  var r = e.__data__;
  return Xx(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function Yx(e) {
  var n = Gs(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Zx(e) {
  return Gs(this, e).get(e);
}
function Kx(e) {
  return Gs(this, e).has(e);
}
function qx(e, n) {
  var r = Gs(this, e), s = r.size;
  return r.set(e, n), this.size += r.size == s ? 0 : 1, this;
}
function cr(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var s = e[n];
    this.set(s[0], s[1]);
  }
}
cr.prototype.clear = Gx;
cr.prototype.delete = Yx;
cr.prototype.get = Zx;
cr.prototype.has = Kx;
cr.prototype.set = qx;
var Jx = "Expected a function";
function yc(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Jx);
  var r = function() {
    var s = arguments, a = n ? n.apply(this, s) : s[0], c = r.cache;
    if (c.has(a))
      return c.get(a);
    var u = e.apply(this, s);
    return r.cache = c.set(a, u) || c, u;
  };
  return r.cache = new (yc.Cache || cr)(), r;
}
yc.Cache = cr;
var Qx = 500;
function t_(e) {
  var n = yc(e, function(s) {
    return r.size === Qx && r.clear(), s;
  }), r = n.cache;
  return n;
}
var e_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n_ = /\\(\\)?/g, r_ = t_(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(e_, function(r, s, a, c) {
    n.push(a ? c.replace(n_, "$1") : s || r);
  }), n;
});
function i_(e) {
  return e == null ? "" : Eh(e);
}
function Xs(e, n) {
  return wi(e) ? e : Cx(e, n) ? [e] : r_(i_(e));
}
function wc(e) {
  if (typeof e == "string" || vc(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
}
function s_(e, n) {
  n = Xs(n, e);
  for (var r = 0, s = n.length; e != null && r < s; )
    e = e[wc(n[r++])];
  return r && r == s ? e : void 0;
}
function o_(e, n) {
  for (var r = -1, s = n.length, a = e.length; ++r < s; )
    e[a + r] = n[r];
  return e;
}
var Pd = Hn ? Hn.isConcatSpreadable : void 0;
function a_(e) {
  return wi(e) || Oh(e) || !!(Pd && e && e[Pd]);
}
function c_(e, n, r, s, a) {
  var c = -1, u = e.length;
  for (r || (r = a_), a || (a = []); ++c < u; ) {
    var d = e[c];
    r(d) ? o_(a, d) : a[a.length] = d;
  }
  return a;
}
function l_(e) {
  var n = e == null ? 0 : e.length;
  return n ? c_(e) : [];
}
function u_(e) {
  return dx(bx(e, void 0, l_), e + "");
}
function d_(e, n) {
  return e != null && n in Object(e);
}
function f_(e, n, r) {
  n = Xs(n, e);
  for (var s = -1, a = n.length, c = !1; ++s < a; ) {
    var u = wc(n[s]);
    if (!(c = e != null && r(e, u)))
      break;
    e = e[u];
  }
  return c || ++s != a ? c : (a = e == null ? 0 : e.length, !!a && wx(a) && Ah(u, a) && (wi(e) || Oh(e)));
}
function h_(e, n) {
  return e != null && f_(e, n, d_);
}
function p_(e, n, r, s) {
  if (!Ms(e))
    return e;
  n = Xs(n, e);
  for (var a = -1, c = n.length, u = c - 1, d = e; d != null && ++a < c; ) {
    var h = wc(n[a]), m = r;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return e;
    if (a != u) {
      var b = d[h];
      m = void 0, m === void 0 && (m = Ms(b) ? b : Ah(n[a + 1]) ? [] : {});
    }
    vx(d, h, m), d = d[h];
  }
  return e;
}
function g_(e, n, r) {
  for (var s = -1, a = n.length, c = {}; ++s < a; ) {
    var u = n[s], d = s_(e, u);
    r(d, u) && p_(c, Xs(u, e), d);
  }
  return c;
}
function m_(e, n) {
  return g_(e, n, function(r, s) {
    return h_(e, s);
  });
}
var v_ = u_(function(e, n) {
  return e == null ? {} : m_(e, n);
});
function Ph(e) {
  const n = e.e.dataTransfer?.types[0];
  if (!n) return;
  const r = JSON.parse(
    e.e.dataTransfer.getData(n)
  ), s = this;
  if (r.type !== "transition") {
    b_(r), s.remove(Ut.guide), s.requestRenderAll(), pt.dispatch(Ss);
    return;
  }
  Ut.guide && (Ut.object && y_(r, s), Ut.objects.forEach((a) => {
    a.strokeDashArray = [], a.setSelected(!1), a.kind === "none" && (a.visible = !1);
  }), s.remove(Ut.guide), s.requestRenderAll(), pt.dispatch(Ss));
}
function b_(e) {
  const n = { ...e, id: Xt() };
  switch (e.type) {
    case "image":
      pt.dispatch(bi, { payload: n });
      break;
    case "video":
      pt.dispatch(mi, { payload: n });
      break;
    case "audio":
      pt.dispatch(vi, { payload: n });
      break;
  }
}
function y_(e, n) {
  const r = Ut.object?.id, s = v_(e, ["kind", "direction"]);
  Object.entries(s).forEach(([a, c]) => {
    a === "kind" ? Ut.object.kind = c : Ut.object[a] = c;
  }), n.transitionsMap[r] = {
    ...n.transitionsMap[r],
    ...s
  }, n.updateState();
}
const w_ = (e) => {
  e.on("dragover", Ih), e.on("dragenter", Th), e.on("dragleave", Ch), e.on("drop", Ph);
}, x_ = (e) => {
  e.off("dragover", Ih), e.off("dragenter", Th), e.off("dragleave", Ch), e.off("drop", Ph);
}, Dh = (e) => {
  const n = e.target.canvas, r = e.target;
  if (e.action === "resizing" && r instanceof Ge && n) {
    const s = r.id, a = n.getObjects("Transition").find((c) => c.id === s);
    if (a && a instanceof Ge) {
      const c = yt.cloneDeep(n.transitionsMap), u = {
        ...c,
        [s]: {
          ...c[s],
          width: a.width,
          duration: a.duration
        }
      };
      n.transitionsMap = u, n.updateState();
    }
  }
  n && (__(n, n.getObjects()), S_(n.getObjects("Helper")), H.isPointerOverHelperTrack = !1, H.draggingOverTrack = null);
}, __ = (e, n) => {
  n.forEach((r) => {
    r.isAlignmentAuxiliary && e.remove(r);
  });
}, S_ = (e) => {
  e.forEach((n) => n.setSelected(!1));
};
function Lh(e) {
  const n = e.target.canvas;
  if (!n) return;
  const r = n.getActiveObject();
  if (!r || !n.positionBeforeTransform) return;
  const s = n.getScenePoint(e.e), a = n.getObjects("Track", "Helper").find((c) => {
    const u = c.getBoundingRect();
    return s.x >= u.left && s.x <= u.left + u.width && s.y >= u.top && s.y <= u.top + u.height;
  });
  if (e.action === "resizing") {
    const c = (H.trackToItemsMap[H.originTrack.id] || []).filter((d) => d !== r);
    r.setCoords();
    const u = Ys(
      c,
      r.getBoundingRect()
    );
    return n.fire("track-items:resized", {
      trackId: H.originTrack.id,
      trackItemIds: [r.id],
      isOverlapped: !!u
    }), !1;
  }
  if (!a)
    return r && (r?.set(n.positionBeforeTransform), r?.setCoords()), !1;
  if (a instanceof yi) {
    let c;
    switch (a.kind) {
      case "top":
        c = 0;
        break;
      case "center":
        c = a.metadata.order || 0;
        break;
      case "bottom":
        c = -1;
        break;
      default:
        return;
    }
    const u = {
      isSecondaryOverlapped: !1,
      secondaryTracks: H.secondaryTracks,
      primaryTracks: H.primaryTracks,
      primaryPositions: {
        trackIndex: c,
        trackId: n.trackIdAfterTransform,
        positions: n.positionAfterTransform
      }
    };
    k_(u);
  } else if (a instanceof nr) {
    const c = {
      isSecondaryOverlapped: T_(),
      secondaryTracks: H.secondaryTracks,
      primaryTracks: H.primaryTracks,
      primaryPositions: {
        trackId: n.trackIdAfterTransform,
        positions: n.positionAfterTransform
      }
    };
    I_(c);
  }
}
const I_ = (e) => {
  H.canvas && H.canvas.fire("track-items:moved", e);
};
function T_() {
  const e = C_();
  return Object.keys(e).some((n) => {
    const r = H.trackToItemsMap[n], s = e[n].objects;
    return r?.length ? r.filter((a) => !s.includes(a)).some(
      (a) => Ys(s, a.getBoundingRect())
    ) : !0;
  });
}
function C_() {
  const [e] = H.primaryMovingObjects, n = e.id, s = H.canvas.positionAfterTransform[n].top - e.getBoundingRect().top, a = {};
  return H.secondaryMovingObjects.forEach((c) => {
    const u = c.getBoundingRect().top + s, d = H.trackTopToIdMap[u], h = Wa(
      H.trackTops,
      H.originTrack.top,
      u
    );
    a[d] ? a[d].objects.push(c) : a[d] = {
      objects: [c],
      index: h
    };
  }), a;
}
const k_ = (e) => {
  H.canvas && H.canvas.fire("track:create", e);
};
function Ys(e, n) {
  return e.find((r) => {
    const s = r.getBoundingRect();
    return n.left < s.left + s.width && n.left + n.width > s.left && n.top < s.top + s.height && n.top + n.height > s.top;
  });
}
const E_ = (e) => {
  e.on("object:modified", Dh), e.on("object:modified", Lh);
}, A_ = (e) => {
  e.off("object:modified", Dh), e.off("object:modified", Lh);
};
function M_(e, n) {
  e.remove(...n), n.length = 0;
}
function jh() {
  M_(this, H.placeholderMovingObjects);
}
function Nh(e) {
  const n = this.height < this.bounding.height, r = this.width < this.bounding.width;
  if (!n && !r) return;
  const s = this.viewportTransform;
  let a = s[4], c = s[5];
  const u = 2;
  e.e.shiftKey ? a = s[4] - e.e.deltaY * u : (n && (c = s[5] - e.e.deltaY * u), a = s[4] - e.e.deltaX * u), this.setViewportPos(a, c);
}
const R_ = (e) => {
  e.on("mouse:wheel", Nh), e.on("mouse:up", jh.bind(e));
}, O_ = (e) => {
  e.off("mouse:wheel", Nh), e.off("mouse:up", jh.bind(e));
};
function Fh(e) {
  const n = this;
  if (!n) return;
  const r = n.getScenePoint(e.e), s = n.getObjects("Helper", "Track");
  H.draggingOverTrack = s.find((m) => {
    const b = m.getBoundingRect();
    return r.x >= b.left && r.x <= b.left + b.width && r.y >= b.top && r.y <= b.top + b.height;
  }) ?? null, s.forEach((m) => {
    if (Ld(m)) {
      const b = H.draggingOverTrack;
      m.setSelected(m === b);
    }
  }), H.isPointerOverHelperTrack = Ld(
    H.draggingOverTrack
  ), n.getObjects();
  const a = e.target;
  a.getBoundingRect(), a.setCoords();
  const c = [
    a,
    ...n.getActiveObjects(),
    ...n.getObjects("Track", "Helper", "Transition", "Placeholder")
  ], u = P_(c, n), d = L_(a);
  D_(
    u,
    d
  ).forEach((m) => {
    m.orientation === "V" ? a.left = m.lineGuide + m.offset : a.top = m.lineGuide + m.offset;
  });
}
const P_ = (e, n) => {
  const r = [], s = [];
  return n.getObjects().filter((a) => a.visible).forEach((a) => {
    if (e.some(
      (d) => d.id === a.id
    ) || a.isAlignmentAuxiliary) return;
    const u = a.getBoundingRect();
    r.push(
      Dd(
        u.left,
        u.width,
        u.top,
        u.height
      )
    ), s.push(
      Dd(
        u.top,
        u.height,
        u.left,
        u.width
      )
    );
  }), {
    vertical: r.flat(),
    horizontal: []
  };
}, Dd = (e, n, r, s) => [e, e + n].map((a) => ({
  val: a,
  start: r,
  end: r + s
})), D_ = (e, n) => {
  const r = [], s = [];
  e.vertical.forEach((h) => {
    n.vertical.forEach((m) => {
      const b = Math.abs(h.val - m.guide);
      b < 10 && r.push({
        lineGuide: h.val,
        diff: b,
        orientation: "V",
        snap: m.snap,
        offset: m.offset,
        targetDim: {
          start: h.start,
          end: h.end
        }
      });
    });
  }), e.horizontal.forEach((h) => {
    n.horizontal.forEach((m) => {
      const b = Math.abs(h.val - m.guide);
      b < 10 && s.push({
        lineGuide: h.val,
        diff: b,
        orientation: "H",
        snap: m.snap,
        offset: m.offset,
        targetDim: {
          start: h.start,
          end: h.end
        }
      });
    });
  });
  const c = [], u = r.sort(
    (h, m) => h.diff - m.diff
  )[0], d = s.sort(
    (h, m) => h.diff - m.diff
  )[0];
  return u && c.push({
    lineGuide: u.lineGuide,
    offset: u.offset,
    orientation: "V",
    snap: u.snap,
    targetDim: u.targetDim
  }), d && c.push({
    lineGuide: d.lineGuide,
    offset: d.offset,
    orientation: "H",
    snap: d.snap,
    targetDim: d.targetDim
  }), c;
}, L_ = (e) => {
  const n = e.getBoundingRect();
  return {
    vertical: [
      {
        guide: Math.round(n.left),
        offset: Math.round(e.left - n.left),
        snap: "start"
      },
      {
        guide: Math.round(n.left + n.width),
        offset: Math.round(
          e.left - n.left - n.width
        ),
        snap: "end"
      }
    ],
    horizontal: [
      {
        guide: Math.round(n.top),
        offset: Math.round(e.top - n.top),
        snap: "start"
      },
      {
        guide: Math.round(n.top + n.height),
        offset: Math.round(e.top - n.top - n.height),
        snap: "end"
      }
    ]
  };
}, Ld = (e) => e instanceof yi;
function j_(e) {
  e.opacity = H.isPointerOverHelperTrack ? 0 : 1;
}
const zh = B_((e) => {
  const n = e.target.canvas;
  if ($_(e), !H.draggingOverTrack) return;
  const r = H.placeholderMovingObjects.map(
    (c) => c.draggedObject
  ), s = (H.trackToItemsMap[H.draggingOverTrack.id] || []).filter((c) => !r.includes(c)), a = s.find(
    (c) => Ys(r, c.getBoundingRect())
  );
  H.placeholderMovingObjects.forEach((c) => {
    const u = c.draggedObject;
    u?.setCoords(), j_(c);
    const d = N_(
      u,
      s,
      a,
      H.placeholderMovingObjects.length > 1
    );
    n.trackIdAfterTransform = H.trackTopToIdMap[d.top], n.positionAfterTransform[u?.id] = {
      top: d.top,
      left: d.left
    }, c.left = d.left, c.top = d.top;
  });
}, 5), N_ = (e, n, r, s) => !F_(e) || s && r ? Hh(e) : r ? z_(e, r, n) : W_(e), F_ = (e) => H.draggingOverTrack ? H.draggingOverTrack.accepts?.includes(e.type) ?? !1 : !1, Hh = (e) => ({
  top: H.objectInitialPositions[e.id].top,
  left: H.objectInitialPositions[e.id].left
}), z_ = (e, n, r) => {
  const s = H_(e, n);
  return !U_(r, e, s) || H.activeObjects.length !== 1 ? Hh(e) : {
    left: s,
    top: n.top
  };
}, H_ = (e, n) => {
  const r = e.left + e.width / 2, s = n.left + n.width / 2;
  return r < s ? n.left - e.width : n.left + n.width;
}, U_ = (e, n, r) => !(r < 0 || Ys(e, {
  ...n.getBoundingRect(),
  left: r
})), W_ = (e) => ({
  left: e.getBoundingRect().left,
  top: H.draggingOverTrack?.top ?? 0
});
function B_(e, n) {
  let r = null;
  return function(...s) {
    const a = Date.now();
    (r === null || a - r >= n) && (r = a, e(...s));
  };
}
function $_(e) {
  const n = e.target, r = n.canvas, s = n.top, a = -n.height * 0.75, c = r.height + n.height * 0.75;
  n.top = Math.min(Math.max(s, a), c - n.height);
  const u = n.left;
  n.left = Math.max(u, 0);
}
const V_ = (e) => {
  e.on("object:moving", Fh.bind(e)), e.on("object:moving", zh);
}, G_ = (e) => {
  e.off("object:moving", Fh.bind(e)), e.off("object:moving", zh);
};
function Uh() {
  const e = this, n = e.getActiveObject(), r = e.getActiveObjects().map((s) => s.id);
  n instanceof Ka ? (n.borderColor = "rgba(0, 216, 214, 0.75)", n.hasControls = !1, n.hoverCursor = "default", n.borderScaleFactor = 1, n.padding = 0, n.getObjects().forEach((s) => {
    s.setSelected(!0);
  })) : n?.setSelected(!0), this.setActiveIds(r);
}
function Wh(e) {
  const n = this, r = n.getActiveObject();
  r instanceof Ka && (r.borderColor = "transparent", r.hasControls = !1, r.hoverCursor = "default"), e.selected.forEach((a) => {
    a.setSelected(!0);
  }), e.deselected.forEach((a) => {
    a.setSelected(!1);
  });
  const s = n.getActiveObjects().map((a) => a.id);
  this.setActiveIds(s);
}
function Bh(e) {
  this.getObjects().forEach((r) => {
    r.isSelected && (r.isSelected = !1);
  }), e.deselected.forEach((r) => {
    r.setSelected(!1);
  });
  const n = this.getActiveObjects().map((r) => r.id);
  this.setActiveIds(n);
}
const X_ = (e) => {
  e.on("selection:created", Uh), e.on("selection:updated", Wh), e.on("selection:cleared", Bh);
}, Y_ = (e) => {
  e.off("selection:created", Uh), e.off("selection:updated", Wh), e.off("selection:cleared", Bh);
};
let $h, Vh, Gh;
const Z_ = (e) => {
  const { state: n } = e;
  $h = n.subscribeToActiveIds(({ activeIds: r }) => {
    if (r.length === 1) {
      const s = r[0], { trackItemIds: a, trackItemsMap: c } = n.getState();
      a.forEach((u) => {
        c[u].type;
      }), e.selectTrackItemByIds([s]);
    } else
      e.selectTrackItemByIds(r);
  }), Vh = n.subscribeToHistory((r) => {
    const { tracks: s, trackItemsMap: a, trackItemIds: c, trackItemDetailsMap: u } = r;
    e.tracks = s, e.trackItemsMap = a, e.trackItemIds = c, e.trackItemDetailsMap = u, e.renderTracks(), e.updateTrackItemsToHistory(), e.alignItemsToTrack(), e.calcBounding(), e.updateTransitions(), e.duration = en(e.trackItemsMap);
  }), Gh = n.subscribeToAddOrRemoveItems(() => {
    const r = e.getTrackItems().map((d) => d.id), { trackItemIds: s, trackItemsMap: a, trackItemDetailsMap: c } = n.getState(), u = [];
    r.forEach((d) => {
      s.includes(d) || u.push(d);
    }), e.deleteTrackItemById(u), e.tracks = n.getState().tracks, e.trackItemsMap = a, e.trackItemDetailsMap = c, s.forEach((d) => {
      if (!r.includes(d)) {
        const h = {
          ...a[d],
          details: {
            ...c[d].details
          }
        };
        e.addTrackItem(h);
      }
    }), e.renderTracks(), e.alignItemsToTrack(), s.forEach((d) => {
      e.updateTrackItemCoords(d);
    }), e.updateTransitions(), e.updateTrackCoords();
  });
}, K_ = (e) => {
  $h.unsubscribe(), Vh.unsubscribe(), Gh.unsubscribe();
};
function Xh(e) {
  const {
    isSecondaryOverlapped: n,
    secondaryTracks: r,
    primaryTracks: s,
    primaryPositions: a
  } = e, { trackId: c, positions: u } = a, d = this.tracks.findIndex((C) => C.id === c), h = gh(
    Object.keys(r).map(
      (C) => r[C].objects.map((R) => R.id)
    )
  ), m = Is(this.tracks, [
    ...Object.keys(u),
    ...h
  ]);
  Object.keys(s).forEach((C) => {
    this.pauseEventListeners();
    const { objects: R } = s[C];
    R.forEach((E) => {
      const P = u[E.id];
      E.left = P.left;
    }), this.resumeEventListeners();
    const A = m.find((E) => E.id === c);
    A && A.items.push(...Object.keys(u)), this.tracks = m;
  });
  const b = this.tracks[d], x = [];
  Object.keys(r).forEach((C) => {
    const { objects: R, index: A } = r[C], E = R.map((N) => N.id), [P] = E, D = this.trackItemsMap[P];
    if (n) {
      const N = {
        id: Xt(),
        items: E,
        type: D.type,
        accepts: this.acceptsMap?.[D.type],
        tempIndex: A
      };
      x.push(N);
    } else {
      const N = m[d + A];
      N && N.items.push(...E), this.tracks = m;
    }
  });
  const S = mh(
    b,
    x
  );
  S.length && m.splice(d, 1, ...S), this.tracks = m, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
function Yh({
  trackItemIds: e,
  isOverlapped: n
}) {
  const [r] = e;
  if (r) {
    if (!this.getObjects("Transition").find(
      (s) => s.id === r
    )) {
      const s = this.tracks.find((a) => a.items.includes(r));
      if (n) {
        const a = q_(this.tracks, e), c = {
          id: Xt(),
          items: [r],
          type: s?.type,
          accepts: s?.accepts
        }, u = this.tracks.findIndex((d) => d.id === s?.id);
        a.splice(u, 0, c), this.tracks = a;
      }
    }
    this.renderTracks(), this.alignItemsToTrack(), this.alignTransitionsToTrack(), this.updateTransitions(), this.updateTrackItemsPosition(), this.updateState({ updateHistory: !0, kind: "update" });
  }
}
function q_(e, n) {
  return e.map((r) => ({
    ...r,
    items: r.items.filter(
      (s) => !n.includes(s)
    )
  }));
}
function Zh(e) {
  const {
    secondaryTracks: n,
    primaryTracks: r,
    primaryPositions: s
  } = e, { positions: a, trackIndex: c } = s, u = c === -1 ? this.tracks.length : c, [d] = Object.keys(r), h = this.tracks.find((A) => A.id == d), m = r[d], b = {
    id: Xt(),
    items: m.objects.map((A) => A.id),
    type: h?.type,
    accepts: h?.accepts
  }, x = gh(
    Object.keys(n).map(
      (A) => n[A].objects.map((E) => E.id)
    )
  ), S = Is(this.tracks, [
    ...Object.keys(a),
    ...x
  ]), C = [];
  Object.keys(n).forEach((A) => {
    const { objects: E, index: P } = n[A], D = this.tracks.find(
      (K) => K.id == A
    ), N = E.map((K) => K.id), z = {
      id: Xt(),
      items: N,
      type: D?.type,
      accepts: D?.accepts,
      tempIndex: P
    };
    C.push(z);
  });
  const R = mh(b, C);
  R.length && S.splice(u, 0, ...R), this.tracks = S, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
const J_ = (e) => {
  e.on("track:create", Zh.bind(e)), e.on("track-items:resized", Yh.bind(e)), e.on("track-items:moved", Xh.bind(e));
}, Q_ = (e) => {
  e.off("track:create", Zh.bind(e)), e.off("track-items:resized", Yh.bind(e)), e.off("track-items:moved", Xh.bind(e));
}, tS = (e) => {
  w_(e), E_(e), R_(e), V_(e), J_(e), X_(e), y4(e), Z_(e);
}, eS = (e) => {
  x_(e), A_(e), O_(e), G_(e), Q_(e), Y_(e), w4(e), K_();
}, nS = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"]
}, rS = ["video", "image", "audio", "text"];
let xc = class extends $b {
  acceptsMap;
  tracks = [];
  trackItemsMap = {};
  trackItemIds = [];
  transitionIds = [];
  transitionsMap = {};
  trackItemDetailsMap = {};
  bounding;
  onScroll;
  tScale;
  store;
  state;
  activeIds = [];
  spacing;
  scale;
  sizesMap;
  duration;
  setupFabricDefaults() {
    $e.ownDefaults.borderColor = "transparent", $e.ownDefaults.cornerColor = "white", $e.ownDefaults.cornerStrokeColor = "transparent", $e.ownDefaults.strokeWidth = 0, $e.ownDefaults.borderOpacityWhenMoving = 1, $e.ownDefaults.borderScaleFactor = 1, $e.ownDefaults.cornerSize = 8, $e.ownDefaults.cornerStyle = "rect", $e.ownDefaults.centeredScaling = !1, $e.ownDefaults.centeredRotation = !0, $e.ownDefaults.transparentCorners = !1;
  }
  constructor(n, r) {
    super(n, r), this.bounding = r.bounding || {
      width: r.width || 0,
      height: r.height || 0
    }, this.spacing = {
      left: 16,
      right: 80,
      ...r.spacing
    };
    const s = this.viewportTransform;
    s[4] = this.spacing.left, this.tScale = r.tScale || 1 / 300, this.store = r.store, this.state = r.state, this.scale = r.scale, this.onScroll = r.onScroll, this.acceptsMap = this.createAcceptsItemMap(r.acceptsMap), this.sizesMap = a4(r.sizesMap), this.setupFabricDefaults(), this.initEventListeners();
  }
  createAcceptsItemMap(n = nS) {
    const r = {};
    return Object.keys(n).forEach((s) => {
      const a = n[s];
      r[s] = a.includes("*") ? rS : a;
    }), r;
  }
  // setActiveIds(e: any) {
  //   this.activeIds = e;
  //   eventBus.dispatch(LAYER_SELECTION, {
  //     payload: {
  //       activeIds: this.activeIds,
  //     },
  //   });
  // }
  setActiveIds(n) {
    this.activeIds = n, this.getObjects("Transition").some(
      (s) => n.includes(s.id)
    ) || (this.state?.updateState({
      activeIds: yt.cloneDeep(this.activeIds)
    }), pt.dispatch(nh, {
      payload: {
        activeIds: this.activeIds
      }
    }));
  }
  purge() {
    eS(this), this.dispose();
  }
  static registerItems(n) {
    Object.keys(n).forEach((r) => {
      re.setClass(n[r], r);
    });
  }
  initEventListeners() {
    tS(this);
  }
  getUpdatedState() {
    const n = en(this.trackItemsMap);
    return {
      tracks: this.tracks,
      trackItemIds: this.trackItemIds,
      trackItemsMap: this.trackItemsMap,
      transitionIds: this.transitionIds,
      transitionsMap: this.transitionsMap,
      // tScale: this.tScale,
      scale: this.scale,
      duration: n
    };
  }
  getState() {
    const n = en(this.trackItemsMap);
    return {
      tracks: this.tracks,
      trackItemIds: this.trackItemIds,
      trackItemsMap: this.trackItemsMap,
      transitionIds: this.transitionIds,
      transitionsMap: this.transitionsMap,
      trackItemDetailsMap: this.trackItemDetailsMap,
      // tScale: this.tScale,
      scale: this.scale,
      duration: n
    };
  }
  notify(n = { updateHistory: !1 }) {
    const r = this.getUpdatedState();
    this.state.updateState(r, n);
  }
  updateState(n) {
    this.updateTracksState(), this.updateTrackItemsState(), this.requestRenderAll(), this.calcBounding(), this.updateTrackCoords();
    const r = this.getUpdatedState();
    this.state.updateState(r, n);
  }
  scrollTo({
    scrollLeft: n,
    scrollTop: r
  }) {
    const s = [...this.viewportTransform];
    let a = !1;
    if (typeof n == "number" && (s[4] = -n + this.spacing.left, a = !0), typeof r == "number" && (s[5] = -r, a = !0), a) {
      this.viewportTransform = s;
      const c = this.getActiveObject();
      c && c.setCoords(), this.requestRenderAll();
    }
  }
  setBoundingBox(n) {
    this.bounding = n;
  }
  calcBounding() {
    const n = this.getTrackItems().reduce(
      (r, s) => {
        const { left: a, top: c, width: u, height: d } = s.getBoundingRect();
        return {
          left: Math.min(r.left, a),
          top: Math.min(r.top, c),
          width: Math.max(r.width, a + u),
          height: Math.max(r.height, c + d)
        };
      },
      { left: 1 / 0, top: 1 / 0, width: this.width, height: 0 }
    );
    this.bounding = n, pt.dispatch(ah, {
      payload: { bounding: n }
    });
  }
  setScale(n) {
    this.pauseEventListeners(), this.tScale = n.zoom, this.scale = n;
    const r = this.getState();
    this.getObjects("Video", "Image", "Text", "Audio").forEach(
      (s) => {
        const a = r.trackItemsMap[s.id], { from: c, to: u } = a.display, d = Wt(c, this.tScale), h = Wt(
          u - c,
          this.tScale,
          s.playbackRate
        );
        s.set({ left: d, width: h, tScale: n.zoom }), s.setCoords();
      }
    ), this.requestRenderAll(), this.calcBounding(), this.updateTrackCoords(), this.updateTransitions(!1), this.resumeEventListeners(), this.notify();
  }
  setViewportPos(n, r) {
    const s = this.getViewportPos(n, r), a = this.viewportTransform;
    a[4] = s.x, a[5] = s.y, this.requestRenderAll(), this.setActiveTrackItemCoords();
    const c = this.onScroll;
    c && c.call(this, {
      scrollTop: s.y,
      scrollLeft: s.x - this.spacing.left
    });
  }
  getViewportPos(n, r) {
    const s = this.bounding.width - 100 >= this.width ? this.spacing.right : 0, a = this.width - this.bounding.width - s, c = this.spacing.left, u = Math.max(a, Math.min(n, c));
    if (this.bounding.height < this.height) return { x: u, y: 0 };
    const d = this.height - this.bounding.height - 40, h = Math.max(d, Math.min(r, 0));
    return { x: u, y: h };
  }
};
V3(xc, [
  w3,
  h4,
  g4,
  b4
]);
function iS(e) {
  const n = pt.subject.pipe(wn(({ key: r }) => r.startsWith(B5))).subscribe((r) => {
    if (r.key === sh) {
      const s = r.value;
      e.setScale(s?.payload.scale ?? void 0);
    }
  });
  return {
    unsubscribe: () => {
      n.unsubscribe();
    }
  };
}
xc.registerItems({
  Text: _h,
  Image: u4,
  Video: l4,
  Audio: c4,
  Track: d4,
  Helper: f4
});
const sS = ({ stateManager: e }) => {
  const n = Ve(!1), [r, s] = ee(0), a = Ve(null), c = Ve(null), u = Ve(null), d = Ve(null), h = Ve(null), [m, b] = ee({
    width: 0,
    height: 0
  }), [x, S] = ee({
    width: 0,
    height: 0
  }), {
    scale: C,
    playerRef: R,
    fps: A,
    setState: E,
    timeline: P
  } = xn(), { setTimeline: D } = xn(), N = uc(R ?? void 0), z = (Z) => {
    h.current && d.current && (d.current.scrollTop = -Z.scrollTop, h.current.scrollLeft = -Z.scrollLeft, s(-Z.scrollLeft));
  };
  Ne(() => {
    const Z = Wt(N / A * 1e3, C.zoom), G = c.current?.getBoundingClientRect().x + c.current?.clientWidth;
    if (Z - r + 40 >= G) {
      const tt = h.current?.clientWidth, B = h.current?.scrollWidth, dt = h.current?.scrollLeft, Pt = (B - (tt + dt)) / tt;
      Pt >= 0 && (Pt > 1 ? h.current?.scrollTo({
        left: dt + tt
      }) : h.current?.scrollTo({
        left: B - tt
      }));
    }
  }, [N]), Ne(() => {
    const Z = c.current, G = a.current;
    if (!Z || !G) return;
    const Q = G.clientWidth, tt = G.clientHeight, B = new xc(Z, {
      width: Q,
      height: tt,
      bounding: {
        width: Q,
        height: 0
      },
      selectionColor: "rgba(0, 216, 214,0.1)",
      selectionBorderColor: "rgba(0, 216, 214,1.0)",
      onScroll: z,
      // tScale: scale.zoom,
      // store,
      state: e,
      scale: C,
      spacing: {
        left: lc,
        right: vd
      }
    }), dt = iS(B);
    u.current = B, b({
      width: Q,
      height: tt
    }), S({
      width: Q,
      height: 0
    }), D(B);
    const St = e.subscribeToSize(
      (rt) => {
        E(rt);
      }
    ), Pt = e.subscribeToScale((rt) => {
      E(rt);
    }), wt = e.subscribeToTracks(
      (rt) => {
        E(rt);
      }
    ), It = e.subscribeToDuration(
      (rt) => {
        E(rt);
      }
    ), Tt = e.subscribeToUpdateTrackItem(() => {
      const rt = e.getState();
      E({
        duration: rt.duration,
        trackItemsMap: rt.trackItemsMap
      });
    }), Et = e.subscribeToAddOrRemoveItems(
      () => {
        const rt = e.getState();
        E({
          trackItemDetailsMap: rt.trackItemDetailsMap,
          trackItemsMap: rt.trackItemsMap,
          trackItemIds: rt.trackItemIds,
          tracks: rt.tracks
        });
      }
    ), fe = e.subscribeToUpdateItemDetails(() => {
      const rt = e.getState();
      E({
        trackItemDetailsMap: rt.trackItemDetailsMap
      });
    });
    return () => {
      dt.unsubscribe(), B.purge(), Pt.unsubscribe(), wt.unsubscribe(), It.unsubscribe(), Et.unsubscribe(), Tt.unsubscribe(), fe.unsubscribe(), St.unsubscribe();
    };
  }, []), Ne(() => {
    const G = pt.subject.pipe(
      wn(({ key: Q }) => Q.startsWith(V5))
    ).subscribe((Q) => {
      if (Q.key === ah) {
        const tt = Q.value?.payload?.bounding;
        tt && S({
          width: tt.width,
          height: tt.height
        });
      }
    });
    return () => {
      G.unsubscribe();
    };
  }, []);
  const K = (Z) => {
    const G = Z.currentTarget.scrollLeft;
    n.current && u.current.scrollTo({ scrollLeft: G }), s(G);
  }, Y = (Z) => {
    const G = Z.currentTarget.scrollTop;
    n.current && u.current.scrollTo({ scrollTop: G });
  };
  Ne(() => {
    const Z = h.current?.scrollWidth;
    if (!Z || !P) return;
    const G = P.width;
    Z < G + r && P.scrollTo({ scrollLeft: Z - G });
  }, [C]);
  const q = (Z) => {
    if (!u.current) return;
    const Q = er(Z, C.zoom);
    R?.current?.seekTo(Q * A / 1e3);
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "relative overflow-hidden h-80 w-full", children: [
    /* @__PURE__ */ v.jsx(Xw, {}),
    /* @__PURE__ */ v.jsx(
      b3,
      {
        onClick: q,
        scrollLeft: r
      }
    ),
    /* @__PURE__ */ v.jsx(v3, { scrollLeft: r }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ v.jsx("div", { className: "relative w-10 flex-none" }),
      /* @__PURE__ */ v.jsxs("div", { className: "relative h-[230px] flex-1", children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            ref: a,
            className: "absolute top-0 h-[230px] w-full text-sm text-white ",
            children: /* @__PURE__ */ v.jsx(
              "canvas",
              {
                ref: c,
                id: "designcombo-timeline-canvas"
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsxs(
          _s,
          {
            type: "always",
            style: {
              position: "absolute",
              width: "calc(100vw - 40px)",
              height: "10px"
            },
            className: "ScrollAreaRootH",
            children: [
              /* @__PURE__ */ v.jsx(
                Ma,
                {
                  onScroll: K,
                  className: "ScrollAreaViewport",
                  id: "viewportH",
                  ref: h,
                  children: /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        width: x.width > m.width ? x.width + vd : x.width
                      },
                      className: "pointer-events-none h-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(
                cd,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "horizontal",
                  children: /* @__PURE__ */ v.jsx(
                    ld,
                    {
                      className: "ScrollAreaThumb",
                      onMouseDown: () => {
                        n.current = !0;
                      },
                      onMouseUp: () => {
                        n.current = !1;
                      }
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(
          _s,
          {
            type: "always",
            style: {
              position: "absolute",
              height: "230px",
              width: "10px"
            },
            className: "ScrollAreaRootV",
            children: [
              /* @__PURE__ */ v.jsx(
                Ma,
                {
                  onScroll: Y,
                  className: "ScrollAreaViewport",
                  ref: d,
                  children: /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        height: x.height > m.height ? x.height + 40 : m.height
                      },
                      className: "pointer-events-none w-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(
                cd,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "vertical",
                  children: /* @__PURE__ */ v.jsx(
                    ld,
                    {
                      className: "ScrollAreaThumb",
                      onMouseDown: () => {
                        n.current = !0;
                      },
                      onMouseUp: () => {
                        n.current = !1;
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}, oS = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Kh(e, n, r = { cyclesFix: !0 }, s = []) {
  let a = [];
  const c = Array.isArray(e);
  for (const d in e) {
    const h = e[d], m = c ? +d : d;
    if (!(d in n)) {
      a.push({
        type: "REMOVE",
        path: [m],
        oldValue: e[d]
      });
      continue;
    }
    const b = n[d], x = typeof h == "object" && typeof b == "object" && Array.isArray(h) === Array.isArray(b);
    h && b && x && !oS[Object.getPrototypeOf(h)?.constructor?.name] && (!r.cyclesFix || !s.includes(h)) ? a.push.apply(a, Kh(h, b, r, r.cyclesFix ? s.concat([h]) : []).map((S) => (S.path.unshift(m), S))) : h !== b && // treat NaN values as equivalent
    !(Number.isNaN(h) && Number.isNaN(b)) && !(x && (isNaN(h) ? h + "" == b + "" : +h == +b)) && a.push({
      path: [m],
      type: "CHANGE",
      value: b,
      oldValue: h
    });
  }
  const u = Array.isArray(n);
  for (const d in n)
    d in e || a.push({
      type: "CREATE",
      path: [u ? +d : d],
      value: n[d]
    });
  return a;
}
var _c = Symbol.for("immer-nothing"), oi = Symbol.for("immer-draftable"), Ie = Symbol.for("immer-state"), qh = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Gt(e, ...n) {
  if (process.env.NODE_ENV !== "production") {
    const r = qh[e], s = typeof r == "function" ? r.apply(null, n) : r;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ir = Object.getPrototypeOf;
function sr(e) {
  return !!e && !!e[Ie];
}
function Un(e) {
  return e ? Jh(e) || Array.isArray(e) || !!e[oi] || !!e.constructor?.[oi] || xi(e) || _i(e) : !1;
}
var aS = Object.prototype.constructor.toString();
function Jh(e) {
  if (!e || typeof e != "object")
    return !1;
  const n = ir(e);
  if (n === null)
    return !0;
  const r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === aS;
}
function di(e, n) {
  or(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    n(r, e[r], e);
  }) : e.forEach((r, s) => n(s, r, e));
}
function or(e) {
  const n = e[Ie];
  return n ? n.type_ : Array.isArray(e) ? 1 : xi(e) ? 2 : _i(e) ? 3 : 0;
}
function fi(e, n) {
  return or(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function wa(e, n) {
  return or(e) === 2 ? e.get(n) : e[n];
}
function Qh(e, n, r) {
  const s = or(e);
  s === 2 ? e.set(n, r) : s === 3 ? e.add(r) : e[n] = r;
}
function cS(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function xi(e) {
  return e instanceof Map;
}
function _i(e) {
  return e instanceof Set;
}
function tr(e) {
  return e.copy_ || e.base_;
}
function Ba(e, n) {
  if (xi(e))
    return new Map(e);
  if (_i(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Jh(e);
  if (n === !0 || n === "class_only" && !r) {
    const s = Object.getOwnPropertyDescriptors(e);
    delete s[Ie];
    let a = Reflect.ownKeys(s);
    for (let c = 0; c < a.length; c++) {
      const u = a[c], d = s[u];
      d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (s[u] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: d.enumerable,
        value: e[u]
      });
    }
    return Object.create(ir(e), s);
  } else {
    const s = ir(e);
    if (s !== null && r)
      return { ...e };
    const a = Object.create(s);
    return Object.assign(a, e);
  }
}
function Sc(e, n = !1) {
  return Zs(e) || sr(e) || !Un(e) || (or(e) > 1 && (e.set = e.add = e.clear = e.delete = lS), Object.freeze(e), n && Object.entries(e).forEach(([r, s]) => Sc(s, !0))), e;
}
function lS() {
  Gt(2);
}
function Zs(e) {
  return Object.isFrozen(e);
}
var $a = {};
function ar(e) {
  const n = $a[e];
  return n || Gt(0, e), n;
}
function uS(e, n) {
  $a[e] || ($a[e] = n);
}
var hi;
function tp() {
  return hi;
}
function dS(e, n) {
  return {
    drafts_: [],
    parent_: e,
    immer_: n,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function jd(e, n) {
  n && (ar("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = n);
}
function Va(e) {
  Ga(e), e.drafts_.forEach(fS), e.drafts_ = null;
}
function Ga(e) {
  e === hi && (hi = e.parent_);
}
function Nd(e) {
  return hi = dS(hi, e);
}
function fS(e) {
  const n = e[Ie];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function Fd(e, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const r = n.drafts_[0];
  return e !== void 0 && e !== r ? (r[Ie].modified_ && (Va(n), Gt(4)), Un(e) && (e = Os(n, e), n.parent_ || Ps(n, e)), n.patches_ && ar("Patches").generateReplacementPatches_(
    r[Ie].base_,
    e,
    n.patches_,
    n.inversePatches_
  )) : e = Os(n, r, []), Va(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), e !== _c ? e : void 0;
}
function Os(e, n, r) {
  if (Zs(n))
    return n;
  const s = n[Ie];
  if (!s)
    return di(
      n,
      (a, c) => zd(e, s, n, a, c, r)
    ), n;
  if (s.scope_ !== e)
    return n;
  if (!s.modified_)
    return Ps(e, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const a = s.copy_;
    let c = a, u = !1;
    s.type_ === 3 && (c = new Set(a), a.clear(), u = !0), di(
      c,
      (d, h) => zd(e, s, a, d, h, r, u)
    ), Ps(e, a, !1), r && e.patches_ && ar("Patches").generatePatches_(
      s,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return s.copy_;
}
function zd(e, n, r, s, a, c, u) {
  if (process.env.NODE_ENV !== "production" && a === r && Gt(5), sr(a)) {
    const d = c && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !fi(n.assigned_, s) ? c.concat(s) : void 0, h = Os(e, a, d);
    if (Qh(r, s, h), sr(h))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else u && r.add(a);
  if (Un(a) && !Zs(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Os(e, a), (!n || !n.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(r, s) && Ps(e, a);
  }
}
function Ps(e, n, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Sc(n, r);
}
function hS(e, n) {
  const r = Array.isArray(e), s = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : tp(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: n,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = s, c = Ic;
  r && (a = [s], c = pi);
  const { revoke: u, proxy: d } = Proxy.revocable(a, c);
  return s.draft_ = d, s.revoke_ = u, d;
}
var Ic = {
  get(e, n) {
    if (n === Ie)
      return e;
    const r = tr(e);
    if (!fi(r, n))
      return pS(e, r, n);
    const s = r[n];
    return e.finalized_ || !Un(s) ? s : s === xa(e.base_, n) ? (_a(e), e.copy_[n] = Ya(s, e)) : s;
  },
  has(e, n) {
    return n in tr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(tr(e));
  },
  set(e, n, r) {
    const s = ep(tr(e), n);
    if (s?.set)
      return s.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const a = xa(tr(e), n), c = a?.[Ie];
      if (c && c.base_ === r)
        return e.copy_[n] = r, e.assigned_[n] = !1, !0;
      if (cS(r, a) && (r !== void 0 || fi(e.base_, n)))
        return !0;
      _a(e), Xa(e);
    }
    return e.copy_[n] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || n in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[n]) || (e.copy_[n] = r, e.assigned_[n] = !0), !0;
  },
  deleteProperty(e, n) {
    return xa(e.base_, n) !== void 0 || n in e.base_ ? (e.assigned_[n] = !1, _a(e), Xa(e)) : delete e.assigned_[n], e.copy_ && delete e.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, n) {
    const r = tr(e), s = Reflect.getOwnPropertyDescriptor(r, n);
    return s && {
      writable: !0,
      configurable: e.type_ !== 1 || n !== "length",
      enumerable: s.enumerable,
      value: r[n]
    };
  },
  defineProperty() {
    Gt(11);
  },
  getPrototypeOf(e) {
    return ir(e.base_);
  },
  setPrototypeOf() {
    Gt(12);
  }
}, pi = {};
di(Ic, (e, n) => {
  pi[e] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
pi.deleteProperty = function(e, n) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(n)) && Gt(13), pi.set.call(this, e, n, void 0);
};
pi.set = function(e, n, r) {
  return process.env.NODE_ENV !== "production" && n !== "length" && isNaN(parseInt(n)) && Gt(14), Ic.set.call(this, e[0], n, r, e[0]);
};
function xa(e, n) {
  const r = e[Ie];
  return (r ? tr(r) : e)[n];
}
function pS(e, n, r) {
  const s = ep(n, r);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    s.get?.call(e.draft_)
  ) : void 0;
}
function ep(e, n) {
  if (!(n in e))
    return;
  let r = ir(e);
  for (; r; ) {
    const s = Object.getOwnPropertyDescriptor(r, n);
    if (s)
      return s;
    r = ir(r);
  }
}
function Xa(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Xa(e.parent_));
}
function _a(e) {
  e.copy_ || (e.copy_ = Ba(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var gS = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, r, s) => {
      if (typeof n == "function" && typeof r != "function") {
        const c = r;
        r = n;
        const u = this;
        return function(h = c, ...m) {
          return u.produce(h, (b) => r.call(this, b, ...m));
        };
      }
      typeof r != "function" && Gt(6), s !== void 0 && typeof s != "function" && Gt(7);
      let a;
      if (Un(n)) {
        const c = Nd(this), u = Ya(n, void 0);
        let d = !0;
        try {
          a = r(u), d = !1;
        } finally {
          d ? Va(c) : Ga(c);
        }
        return jd(c, s), Fd(a, c);
      } else if (!n || typeof n != "object") {
        if (a = r(n), a === void 0 && (a = n), a === _c && (a = void 0), this.autoFreeze_ && Sc(a, !0), s) {
          const c = [], u = [];
          ar("Patches").generateReplacementPatches_(n, a, c, u), s(c, u);
        }
        return a;
      } else
        Gt(1, n);
    }, this.produceWithPatches = (n, r) => {
      if (typeof n == "function")
        return (u, ...d) => this.produceWithPatches(u, (h) => n(h, ...d));
      let s, a;
      return [this.produce(n, r, (u, d) => {
        s = u, a = d;
      }), s, a];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Un(e) || Gt(8), sr(e) && (e = mS(e));
    const n = Nd(this), r = Ya(e, void 0);
    return r[Ie].isManual_ = !0, Ga(n), r;
  }
  finishDraft(e, n) {
    const r = e && e[Ie];
    (!r || !r.isManual_) && Gt(9);
    const { scope_: s } = r;
    return jd(s, n), Fd(void 0, s);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, n) {
    let r;
    for (r = n.length - 1; r >= 0; r--) {
      const a = n[r];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    r > -1 && (n = n.slice(r + 1));
    const s = ar("Patches").applyPatches_;
    return sr(e) ? s(e, n) : this.produce(
      e,
      (a) => s(a, n)
    );
  }
};
function Ya(e, n) {
  const r = xi(e) ? ar("MapSet").proxyMap_(e, n) : _i(e) ? ar("MapSet").proxySet_(e, n) : hS(e, n);
  return (n ? n.scope_ : tp()).drafts_.push(r), r;
}
function mS(e) {
  return sr(e) || Gt(10, e), np(e);
}
function np(e) {
  if (!Un(e) || Zs(e))
    return e;
  const n = e[Ie];
  let r;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, r = Ba(e, n.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Ba(e, !0);
  return di(r, (s, a) => {
    Qh(r, s, np(a));
  }), n && (n.finalized_ = !1), r;
}
function Hd() {
  process.env.NODE_ENV !== "production" && qh.push(
    'Sets cannot have "replace" patches.',
    function(S) {
      return "Unsupported patch operation: " + S;
    },
    function(S) {
      return "Cannot apply patch, path doesn't resolve: " + S;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const n = "replace", r = "add", s = "remove";
  function a(S, C, R, A) {
    switch (S.type_) {
      case 0:
      case 2:
        return u(
          S,
          C,
          R,
          A
        );
      case 1:
        return c(S, C, R, A);
      case 3:
        return d(
          S,
          C,
          R,
          A
        );
    }
  }
  function c(S, C, R, A) {
    let { base_: E, assigned_: P } = S, D = S.copy_;
    D.length < E.length && ([E, D] = [D, E], [R, A] = [A, R]);
    for (let N = 0; N < E.length; N++)
      if (P[N] && D[N] !== E[N]) {
        const z = C.concat([N]);
        R.push({
          op: n,
          path: z,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: x(D[N])
        }), A.push({
          op: n,
          path: z,
          value: x(E[N])
        });
      }
    for (let N = E.length; N < D.length; N++) {
      const z = C.concat([N]);
      R.push({
        op: r,
        path: z,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: x(D[N])
      });
    }
    for (let N = D.length - 1; E.length <= N; --N) {
      const z = C.concat([N]);
      A.push({
        op: s,
        path: z
      });
    }
  }
  function u(S, C, R, A) {
    const { base_: E, copy_: P } = S;
    di(S.assigned_, (D, N) => {
      const z = wa(E, D), K = wa(P, D), Y = N ? fi(E, D) ? n : r : s;
      if (z === K && Y === n)
        return;
      const q = C.concat(D);
      R.push(Y === s ? { op: Y, path: q } : { op: Y, path: q, value: K }), A.push(
        Y === r ? { op: s, path: q } : Y === s ? { op: r, path: q, value: x(z) } : { op: n, path: q, value: x(z) }
      );
    });
  }
  function d(S, C, R, A) {
    let { base_: E, copy_: P } = S, D = 0;
    E.forEach((N) => {
      if (!P.has(N)) {
        const z = C.concat([D]);
        R.push({
          op: s,
          path: z,
          value: N
        }), A.unshift({
          op: r,
          path: z,
          value: N
        });
      }
      D++;
    }), D = 0, P.forEach((N) => {
      if (!E.has(N)) {
        const z = C.concat([D]);
        R.push({
          op: r,
          path: z,
          value: N
        }), A.unshift({
          op: s,
          path: z,
          value: N
        });
      }
      D++;
    });
  }
  function h(S, C, R, A) {
    R.push({
      op: n,
      path: [],
      value: C === _c ? void 0 : C
    }), A.push({
      op: n,
      path: [],
      value: S
    });
  }
  function m(S, C) {
    return C.forEach((R) => {
      const { path: A, op: E } = R;
      let P = S;
      for (let K = 0; K < A.length - 1; K++) {
        const Y = or(P);
        let q = A[K];
        typeof q != "string" && typeof q != "number" && (q = "" + q), (Y === 0 || Y === 1) && (q === "__proto__" || q === "constructor") && Gt(19), typeof P == "function" && q === "prototype" && Gt(19), P = wa(P, q), typeof P != "object" && Gt(18, A.join("/"));
      }
      const D = or(P), N = b(R.value), z = A[A.length - 1];
      switch (E) {
        case n:
          switch (D) {
            case 2:
              return P.set(z, N);
            case 3:
              Gt(16);
            default:
              return P[z] = N;
          }
        case r:
          switch (D) {
            case 1:
              return z === "-" ? P.push(N) : P.splice(z, 0, N);
            case 2:
              return P.set(z, N);
            case 3:
              return P.add(N);
            default:
              return P[z] = N;
          }
        case s:
          switch (D) {
            case 1:
              return P.splice(z, 1);
            case 2:
              return P.delete(z);
            case 3:
              return P.delete(R.value);
            default:
              return delete P[z];
          }
        default:
          Gt(17, E);
      }
    }), S;
  }
  function b(S) {
    if (!Un(S))
      return S;
    if (Array.isArray(S))
      return S.map(b);
    if (xi(S))
      return new Map(
        Array.from(S.entries()).map(([R, A]) => [R, b(A)])
      );
    if (_i(S))
      return new Set(Array.from(S).map(b));
    const C = Object.create(ir(S));
    for (const R in S)
      C[R] = b(S[R]);
    return fi(S, oi) && (C[oi] = S[oi]), C;
  }
  function x(S) {
    return sr(S) ? b(S) : S;
  }
  uS("Patches", {
    applyPatches_: m,
    generatePatches_: a,
    generateReplacementPatches_: h
  });
}
var Te = new gS(), vS = Te.produce;
Te.produceWithPatches.bind(
  Te
);
Te.setAutoFreeze.bind(Te);
Te.setUseStrictShallowCopy.bind(Te);
var bS = Te.applyPatches.bind(Te);
Te.createDraft.bind(Te);
Te.finishDraft.bind(Te);
function yS(e) {
  const n = e.value, r = [];
  if (n?.payload?.trackItemIds) {
    const s = n.payload.trackItemIds;
    r.push(s), this.updateState({ activeIds: r });
  }
  if (e.key === Qf) {
    const s = e.value?.payload.trackItemIds, a = yt.cloneDeep(this.getState()), c = s?.length ? s : a.activeIds, u = a.trackItemIds.filter(
      (x) => !c.includes(x)
    ), d = Object.fromEntries(
      Object.entries(a.trackItemDetailsMap).filter(
        ([x]) => !c.includes(x)
      )
    ), h = q3(a.tracks, c), m = Object.fromEntries(
      Object.entries(a.trackItemsMap).filter(
        ([x]) => !c.includes(x)
      )
    ), b = en(m);
    this.updateState(
      {
        trackItemIds: u,
        trackItemDetailsMap: d,
        activeIds: [],
        trackItemsMap: m,
        tracks: h,
        duration: b
      },
      { updateHistory: !0, kind: "remove" }
    );
  }
  if (e.key === th) {
    const s = yt.cloneDeep(this.getState()), a = [], c = e.value?.payload.trackItemIds || s.activeIds;
    if (c.length === 0) return;
    c.forEach((d) => {
      const h = s.trackItemsMap[d], m = s.trackItemDetailsMap[d], b = Xt();
      a.push(b), s.trackItemsMap = {
        ...s.trackItemsMap,
        [b]: { ...yt.cloneDeep(h), id: b }
      }, s.trackItemDetailsMap = {
        ...s.trackItemDetailsMap,
        [b]: { ...yt.cloneDeep(m) }
      }, s.trackItemIds.push(b);
    });
    const u = s.tracks.map((d) => {
      const h = {
        ...d,
        id: Xt(),
        items: d.items.filter((m) => c.includes(m)).map((m) => {
          const b = c.indexOf(m);
          return a[b];
        })
      };
      return h.items.length ? h : null;
    }).filter(Boolean);
    s.tracks.unshift(...u), this.updateState(
      {
        trackItemDetailsMap: s.trackItemDetailsMap,
        tracks: s.tracks,
        trackItemIds: s.trackItemIds,
        trackItemsMap: s.trackItemsMap
      },
      {
        updateHistory: !0,
        kind: "update"
      }
    );
  }
  if (e.key === eh) {
    const s = yt.cloneDeep(this.getState()), a = e.value?.options.time;
    if (s.activeIds.length !== 1) return;
    const c = s.activeIds[0], u = s.trackItemsMap[c];
    if (a <= u.display.from || a >= u.display.to)
      return;
    const d = Xt(), h = {
      ...u,
      id: d,
      display: { from: a, to: u.display.to },
      trim: { from: a, to: u.display.to }
    };
    s.trackItemsMap[c].display.to = a, s.trackItemsMap[d] = h, s.trackItemDetailsMap[d] = s.trackItemDetailsMap[c], s.trackItemIds.push(d), s.tracks.forEach((m) => {
      m.items.includes(c) && m.items.push(d);
    }), this.updateState(
      {
        trackItemsMap: s.trackItemsMap,
        trackItemDetailsMap: s.trackItemDetailsMap,
        trackItemIds: s.trackItemIds,
        tracks: s.tracks
      },
      { updateHistory: !0, kind: "update" }
    );
  }
}
async function wS(e) {
  if (e.key === "scene:load") {
    const n = e.value?.payload, r = n.size, s = n.trackItemIds, a = n.trackItemsMap, c = n.trackItemDetailsMap;
    if (!s) return;
    const u = s?.map(async (h) => {
      try {
        const m = c[h], b = a[h];
        if (m.type === "text") {
          const x = await xh(
            { id: h, details: m.details, ...b },
            {
              size: r
            }
          ), { details: S, ...C } = x;
          c[h] = { type: "text", details: S }, a[h] = C;
        }
        return !0;
      } catch {
        return !1;
      }
    });
    await Promise.all(u);
    const d = en(a);
    this.updateState({
      ...n,
      trackItemsMap: a,
      duration: d
    });
  }
}
async function xS(e) {
  const n = yt.cloneDeep(this.getState()), r = e.value?.options?.trackId, s = e.value?.options?.trackIndex;
  let a = [], c;
  if (e.key === mi) {
    c = "video";
    const d = await Q3(e.value?.payload, {
      size: n.size
    }), { details: h, ...m } = d;
    n.trackItemDetailsMap[m.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[m.id] = m, n.trackItemIds.push(m.id), a = [m.id];
  }
  if (e.key === bi) {
    c = "image";
    const d = await J3(e.value?.payload, {
      size: n.size
    }), { details: h, ...m } = d;
    n.trackItemDetailsMap[m.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[m.id] = m, n.trackItemIds.push(m.id), a = [m.id];
  }
  if (e.key === vi) {
    c = "audio";
    const d = await t4(e.value?.payload), { details: h, ...m } = d;
    n.trackItemDetailsMap[m.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[m.id] = m, n.trackItemIds.push(m.id), a = [m.id];
  }
  if (e.key === Kf) {
    c = "text";
    const { details: d, ...h } = await xh(
      e.value?.payload ?? void 0,
      {
        size: n.size
      }
    );
    n.trackItemDetailsMap[h.id] = { type: c, details: d }, n.trackItemsMap[h.id] = h, n.trackItemIds.push(h.id), a.push(h.id);
  }
  const u = _S(
    a,
    n.tracks,
    n.trackItemsMap,
    r,
    s
  );
  if (u.trackId)
    n.tracks.find((h) => h.id === u.trackId)?.items.push(...a);
  else if (u.trackIndex !== void 0) {
    const d = Ud(c, a);
    n.tracks.splice(u.trackIndex, 0, d);
  } else {
    const d = Ud(c, a);
    n.tracks.unshift(d);
  }
  n.duration = en(n.trackItemsMap), this.updateState(
    {
      trackItemIds: n.trackItemIds,
      trackItemDetailsMap: n.trackItemDetailsMap,
      trackItemsMap: n.trackItemsMap,
      tracks: n.tracks,
      duration: n.duration,
      structure: n.structure
    },
    {
      updateHistory: !0,
      kind: "add"
    }
  );
}
function Ud(e, n) {
  return {
    id: Xt(),
    accepts: ["text", "audio", "helper", "video", "image"],
    type: e,
    items: n,
    magnetic: !1,
    static: !1
  };
}
const _S = (e, n, r, s, a) => {
  if (s === void 0 && a === void 0)
    return { trackId: void 0, trackIndex: void 0 };
  const c = a !== void 0 ? n[Math.max(0, Math.min(a, n.length - 1))] : n.find((h) => h.id === s);
  if (!c)
    return {
      trackId: void 0,
      trackIndex: a !== void 0 ? Math.max(0, Math.min(a, n.length - 1)) : void 0
    };
  const u = c.items.map((h) => r[h]), d = e.map((h) => r[h]);
  for (const h of u) {
    const m = h.display.from, b = h.display.to;
    for (const x of d) {
      const S = x.display.from;
      if (!(x.display.to <= m || S >= b))
        return {
          trackId: void 0,
          trackIndex: n.indexOf(c)
        };
    }
  }
  return {
    trackId: c.id,
    trackIndex: n.indexOf(c)
  };
}, Wd = [
  "tracks",
  "trackItemsMap",
  "trackItemDetailsMap",
  "transitionIds",
  "transitionsMap",
  "trackItemIds"
], SS = {
  size: {
    width: 1080,
    height: 1920
  },
  tracks: [],
  trackItemIds: [],
  trackItemsMap: {},
  transitionIds: [],
  transitionsMap: {},
  scale: {
    unit: 1,
    zoom: 1,
    segments: 1,
    index: 1
  },
  duration: 0,
  activeIds: [],
  trackItemDetailsMap: {},
  structure: []
};
class IS {
  stateSubject;
  stateHistorySubject;
  prevState;
  undos;
  redos;
  listener;
  constructor(n) {
    this.stateSubject = null, this.stateHistorySubject = null, this.prevState = null, this.undos = [], this.redos = [], this.listener = null;
    const r = n || SS;
    this.stateSubject = new gd(r), this.stateHistorySubject = new gd({
      handleRedo: !1,
      handleUndo: !1
    }), this.prevState = r, this.initListeners();
  }
  initListeners() {
    TS(this);
  }
  destroyListeners() {
    this.listener && this.listener.unsubscribe();
  }
  purge() {
    this.destroyListeners();
  }
  updateHistory(n, r) {
    const s = yt.pick(n, Wd), a = yt.pick(this.getState(), Wd), c = Kh(a, s);
    c.length && (this.undos.push({ undos: c, type: r }), this.redos = []);
  }
  getStateHistory() {
    return this.stateHistorySubject.getValue();
  }
  subscribeHistory(n) {
    return this.stateHistorySubject.subscribe(n);
  }
  getState() {
    return this.stateSubject.getValue();
  }
  subscribe(n) {
    return this.stateSubject.subscribe(n);
  }
  updateState(n, r = { updateHistory: !1, kind: void 0 }) {
    const s = this.getState(), a = { ...s, ...n };
    if (!yt.isEqual(s, a)) {
      r.updateHistory && this.updateHistory(a, r.kind);
      const { duration: c, trackItemsMap: u, ...d } = s;
      this.prevState = {
        ...d,
        duration: this.prevState.duration,
        trackItemsMap: this.prevState.trackItemsMap
      }, this.stateSubject.next(a);
    }
  }
  subscribeToSize(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      yt.isEqual(r.size, this.prevState.size) || n({ size: r.size });
    });
  }
  subscribeToScale(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      yt.isEqual(r.scale, this.prevState.scale) || n({ scale: r.scale });
    });
  }
  subscribeToUpdateTrackItem(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      yt.isEqual(r.trackItemsMap, this.prevState.trackItemsMap) || n({ trackItemsMap: r.trackItemsMap });
    });
  }
  subscribeToUpdateItemDetails(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      yt.isEqual(
        r.trackItemDetailsMap,
        this.prevState.trackItemDetailsMap
      ) || n({ trackItemDetailsMap: r.trackItemDetailsMap });
    });
  }
  subscribeToDuration(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      r.duration !== this.prevState.duration && n({ duration: r.duration });
    });
  }
  subscribeToHistory(n) {
    return this.stateHistorySubject.asObservable().subscribe((r) => {
      if (r.handleRedo) {
        const s = this.undos[this.undos.length - 1]?.type;
        s === "update" && n({ ...this.getState(), type: s }), this.stateHistorySubject.next({
          handleRedo: !1,
          handleUndo: !1
        });
      }
      if (r.handleUndo) {
        const s = this.redos[this.redos.length - 1]?.type;
        s === "update" && n({ ...this.getState(), type: s }), this.stateHistorySubject.next({
          handleRedo: !1,
          handleUndo: !1
        });
      }
    });
  }
  subscribeToAddOrRemoveItems(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      (!r.trackItemIds?.every(
        (s) => this.prevState.trackItemIds?.includes(s)
      ) || !yt.isEqual(r.tracks, this.prevState.tracks)) && n({ trackItemIds: r.trackItemIds });
    });
  }
  subscribeToActiveIds(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      yt.isEqual(r.activeIds, this.prevState.activeIds) || n({ activeIds: r.activeIds });
    });
  }
  subscribeToTracks(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      (!yt.isEqual(r.tracks, this.prevState.tracks) || !yt.isEqual(r.trackItemIds, this.prevState.trackItemIds) || !yt.isEqual(r.trackItemsMap, this.prevState.trackItemsMap) || !yt.isEqual(r.transitionIds, this.prevState.transitionIds) || !yt.isEqual(r.transitionsMap, this.prevState.transitionsMap) || !yt.isEqual(
        r.trackItemDetailsMap,
        this.prevState.trackItemDetailsMap
      )) && n({
        tracks: r.tracks,
        trackItemIds: r.trackItemIds,
        trackItemsMap: r.trackItemsMap,
        transitionIds: r.transitionIds,
        transitionsMap: r.transitionsMap,
        trackItemDetailsMap: r.trackItemDetailsMap
        // structure: currentState.structure,
      });
    });
  }
  undo() {
    const n = this.undos.pop(), r = n?.undos, s = n?.type;
    if (!r || !s) return;
    Hd();
    const {
      trackItemDetailsMap: a,
      trackItemIds: c,
      tracks: u,
      transitionIds: d,
      transitionsMap: h,
      trackItemsMap: m
    } = this.getState(), b = yt.cloneDeep({
      trackItemDetailsMap: a,
      trackItemIds: c,
      tracks: u,
      transitionIds: d,
      transitionsMap: h,
      trackItemsMap: m
    }), x = [], S = [], C = [], R = [], A = [], E = [];
    r.forEach((B) => {
      let dt;
      const St = B.path.slice(1);
      B.type === "CREATE" ? dt = {
        path: St,
        op: "remove",
        value: B.value
      } : B.type === "CHANGE" ? dt = {
        path: St,
        op: "replace",
        value: B.oldValue
      } : dt = {
        path: St,
        op: "add",
        value: B.oldValue
      }, B.path.includes("trackItemIds") ? C.push(dt) : B.path.includes("transitionIds") ? S.push(dt) : B.path.includes("trackItemsMap") ? A.push(dt) : B.path.includes("transitionsMap") ? R.push(dt) : B.path.includes("tracks") ? x.push(dt) : B.path.includes("trackItemDetailsMap") && E.push(dt);
    });
    const P = this.applyPatch(b.tracks, x), D = this.applyPatch(
      b.transitionIds,
      S
    ), N = this.applyPatch(
      b.trackItemIds,
      C
    ), z = this.applyPatch(
      b.transitionsMap,
      R
    ), K = this.applyPatch(
      b.trackItemsMap,
      A
    ), Y = this.applyPatch(
      b.trackItemDetailsMap,
      E
    ), q = yt.cloneDeep({
      tracks: P,
      transitionIds: D,
      trackItemIds: N,
      transitionsMap: z,
      trackItemsMap: K,
      trackItemDetailsMap: Y
    }), Z = yt.cloneDeep(this.getState()), G = { ...Z, ...q };
    this.prevState = Z;
    const Q = { redos: r, type: s };
    this.redos.push(Q);
    const tt = en(G.trackItemsMap);
    this.stateSubject.next({ ...G, duration: tt }), this.stateHistorySubject.next({ handleRedo: !1, handleUndo: !0 });
  }
  redo() {
    const n = this.redos.pop();
    if (!n?.redos || !n?.type) return;
    Hd();
    const r = this.getState(), {
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: c,
      transitionIds: u,
      transitionsMap: d,
      trackItemsMap: h
    } = r, m = yt.cloneDeep({
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: c,
      transitionIds: u,
      transitionsMap: d,
      trackItemsMap: h
    }), b = [], x = [], S = [], C = [], R = [], A = [];
    n.redos.forEach((z) => {
      const K = z.path.slice(1);
      let Y = {};
      switch (z.type) {
        case "CREATE":
          Y = {
            path: K,
            op: "add",
            value: z.value
          };
          break;
        case "CHANGE":
          Y = {
            path: K,
            op: "replace",
            value: z.value
          };
          break;
        case "REMOVE":
          Y = {
            path: K,
            op: "remove",
            value: z.oldValue
          };
          break;
        default:
          return null;
      }
      z.path.includes("trackItemIds") ? S.push(Y) : z.path.includes("transitionIds") ? x.push(Y) : z.path.includes("trackItemsMap") ? R.push(Y) : z.path.includes("transitionsMap") ? C.push(Y) : z.path.includes("trackItemDetailsMap") ? A.push(Y) : b.push(Y);
    });
    const E = {
      tracks: this.applyPatch(m.tracks, b),
      transitionIds: this.applyPatch(m.transitionIds, x),
      trackItemIds: this.applyPatch(m.trackItemIds, S),
      transitionsMap: this.applyPatch(m.transitionsMap, C),
      trackItemsMap: this.applyPatch(m.trackItemsMap, R),
      trackItemDetailsMap: this.applyPatch(m.trackItemDetailsMap, A)
    }, P = yt.cloneDeep(E), D = { ...yt.cloneDeep(r), ...P };
    this.prevState = r, this.undos.push({ undos: n.redos, type: n.type });
    const N = en(D.trackItemsMap);
    this.stateSubject.next({ ...D, duration: N }), this.stateHistorySubject.next({ handleRedo: !0, handleUndo: !1 });
  }
  applyPatch(n, r) {
    return r.reverse().reduce(
      (s, a) => vS(s, (c) => {
        bS(c, [a]);
      }),
      n
    );
  }
}
function TS(e) {
  const n = pt.subject.pipe(wn(({ key: c }) => c.startsWith(W5))).subscribe((c) => {
    c.key === rh && e.undo(), c.key === ih && e.redo();
  }), r = pt.subject.pipe(wn(({ key: c, value: u }) => c.startsWith(L5))).subscribe((c) => {
    xS.bind(e)(c);
  }), s = pt.subject.pipe(
    wn(({ key: c, value: u }) => c.startsWith("scene"))
  ).subscribe(async (c) => {
    await wS.bind(e)(c);
  }), a = pt.subject.pipe(wn(({ key: c }) => c.startsWith(H5))).subscribe(async (c) => {
    yS.bind(e)(c);
  });
  return () => {
    n.unsubscribe(), r.unsubscribe(), a.unsubscribe(), s.unsubscribe();
  };
}
const CS = () => {
  const { playerRef: e, fps: n, timeline: r, setState: s } = xn();
  Ne(() => {
    const c = pt.subject.pipe(
      wn(({ key: u }) => u.startsWith(j5))
    ).subscribe((u) => {
      if (u.key === N5) {
        const { time: d } = u.value?.payload;
        e?.current?.seekTo(d / 1e3 * n);
      } else if (u.key === qf)
        e?.current?.play();
      else if (u.key === Jf)
        e?.current?.pause();
      else if (u.key === z5)
        e?.current?.isPlaying() ? e.current.pause() : e?.current?.play();
      else if (u.key === F5) {
        const { frames: d } = u.value?.payload;
        e?.current?.seekTo(
          Math.round(e.current.getCurrentFrame()) + d
        );
      }
    });
    return () => {
      c.unsubscribe();
    };
  }, [e, n]), Ne(() => {
    const c = pt.subject.pipe(
      wn(({ key: u }) => u.startsWith(U5))
    ).subscribe((u) => {
      u.key === nh && s({
        activeIds: u.value?.payload.activeIds
      });
    });
    return () => {
      c.unsubscribe();
    };
  }, [r]);
}, kS = new IS(), F7 = () => {
  const { playerRef: e } = xn();
  CS();
  const [n, r] = ee([]);
  return /* @__PURE__ */ v.jsxs("div", { className: "relative flex h-screen w-screen flex-col bg-background ", children: [
    /* @__PURE__ */ v.jsx(h3, {}),
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          position: "relative",
          flex: 1,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ v.jsx(f3, {}),
          /* @__PURE__ */ v.jsx(d3, {}),
          /* @__PURE__ */ v.jsx(y3, {})
        ]
      }
    ),
    /* @__PURE__ */ v.jsx("div", { className: "h-70 w-full ", children: e && /* @__PURE__ */ v.jsx(sS, { stateManager: kS }) })
  ] });
};
export {
  th as ACTIVE_CLONE,
  Qf as ACTIVE_DELETE,
  r6 as ACTIVE_PASTE,
  H5 as ACTIVE_PREFIX,
  n6 as ACTIVE_SET,
  eh as ACTIVE_SPLIT,
  ZS as ADD_ANIMATION,
  vi as ADD_AUDIO,
  bi as ADD_IMAGE,
  XS as ADD_MASK,
  GS as ADD_PLACEHOLDER,
  L5 as ADD_PREFIX,
  zS as ADD_SUFFIX,
  Kf as ADD_TEXT,
  YS as ADD_TRANSITION,
  mi as ADD_VIDEO,
  Zw as AUDIOS,
  F7 as AppComponent,
  c4 as Audio,
  Fn as AudioObject,
  k6 as BASE_TIMELINE_ELEMENT_DURATION_MS,
  Lt as Button,
  w3 as CanvasMixin,
  R6 as DEFAULT_AUDIO_BITRATE,
  M6 as DEFAULT_AUDIO_SAMPLE_RATE,
  b7 as DEFAULT_BLUR,
  v7 as DEFAULT_BLUR_STEP,
  J6 as DEFAULT_BRIGHTNESS,
  q6 as DEFAULT_BRIGHTNESS_STEP,
  u7 as DEFAULT_CONTRAST,
  l7 as DEFAULT_CONTRAST_STEP,
  U6 as DEFAULT_FADE_IN,
  W6 as DEFAULT_FADE_OUT,
  H6 as DEFAULT_FADE_STEP,
  X6 as DEFAULT_FLIP_X,
  Y6 as DEFAULT_FLIP_Y,
  bd as DEFAULT_FONT,
  yw as DEFAULT_FRAMERATE,
  m7 as DEFAULT_MAX_BLUR,
  K6 as DEFAULT_MAX_BRIGHTNESS,
  c7 as DEFAULT_MAX_CONTRAST,
  z6 as DEFAULT_MAX_FADE,
  f7 as DEFAULT_MAX_OPACITY,
  $6 as DEFAULT_MAX_ROTATION,
  t7 as DEFAULT_MAX_SATURATION,
  w7 as DEFAULT_MAX_SPEED,
  i7 as DEFAULT_MAX_TEMPERATURE,
  I7 as DEFAULT_MAX_VOLUME,
  L6 as DEFAULT_MEDIA_PANEL_WIDTH,
  g7 as DEFAULT_MIN_BLUR,
  Z6 as DEFAULT_MIN_BRIGHTNESS,
  a7 as DEFAULT_MIN_CONTRAST,
  F6 as DEFAULT_MIN_FADE,
  d7 as DEFAULT_MIN_OPACITY,
  B6 as DEFAULT_MIN_ROTATION,
  Q6 as DEFAULT_MIN_SATURATION,
  y7 as DEFAULT_MIN_SPEED,
  r7 as DEFAULT_MIN_TEMPERATURE,
  S7 as DEFAULT_MIN_VOLUME,
  p7 as DEFAULT_OPACITY,
  h7 as DEFAULT_OPACITY_STEP,
  P6 as DEFAULT_PREVIEW_HEIGHT,
  hh as DEFAULT_PREVIEW_SCALE,
  O6 as DEFAULT_PREVIEW_WIDTH,
  G6 as DEFAULT_ROTATION,
  V6 as DEFAULT_ROTATION_STEP,
  n7 as DEFAULT_SATURATION,
  e7 as DEFAULT_SATURATION_STEP,
  N6 as DEFAULT_SETTINGS_PANEL_WIDTH,
  _7 as DEFAULT_SPEED,
  x7 as DEFAULT_SPEED_STEP,
  o7 as DEFAULT_TEMPERATURE,
  s7 as DEFAULT_TEMPERATURE_STEP,
  bw as DEFAULT_VIDEO_HEIGHT,
  A6 as DEFAULT_VIDEO_MAX_BITRATE,
  E6 as DEFAULT_VIDEO_MIN_BITRATE,
  vw as DEFAULT_VIDEO_WIDTH,
  C7 as DEFAULT_VOLUME,
  T7 as DEFAULT_VOLUME_STEP,
  C6 as DEFAULT_WEIGHT,
  Ss as DRAG_END,
  $5 as DRAG_PREFIX,
  oh as DRAG_START,
  zs as Draggable,
  pw as DroppableArea,
  qS as EDIT_OBJECT,
  KS as EDIT_PREFIX,
  QS as EDIT_SHAPE,
  JS as EDIT_TEXT,
  t6 as ENTER_EDIT_MODE,
  ww as FRAME_INTERVAL,
  y6 as GIANT_ICON_SIZE,
  W5 as HISTORY_PREFIX,
  ih as HISTORY_REDO,
  v6 as HISTORY_RESET,
  rh as HISTORY_UNDO,
  Xw as Header,
  f4 as Helper,
  yi as HelperObject,
  Kw as IMAGES,
  u4 as Image,
  fc as ImageObject,
  S6 as LARGER_FONT_SIZE,
  I6 as LARGE_FONT_SIZE,
  w6 as LARGE_ICON_SIZE,
  h6 as LAYER_CLONE,
  d6 as LAYER_COPY,
  g6 as LAYER_CUT,
  m6 as LAYER_DELETE,
  u6 as LAYER_EDITING_NAME,
  s6 as LAYER_HIDDEN,
  i6 as LAYER_LOCKED,
  o6 as LAYER_MOVE,
  f6 as LAYER_PASTE,
  U5 as LAYER_PREFIX,
  l6 as LAYER_RENAME,
  a6 as LAYER_SELECT,
  nh as LAYER_SELECTION,
  c6 as LAYER_SEND_TO,
  p6 as LAYER_SPLIT,
  j6 as MAX_MEDIA_PANEL_WIDTH,
  D6 as MIN_MEDIA_PANEL_WIDTH,
  d3 as MenuItem,
  T6 as NORMAL_FONT_SIZE,
  x6 as NORMAL_ICON_SIZE,
  h3 as NavbarComponent,
  Jf as PLAYER_PAUSE,
  qf as PLAYER_PLAY,
  j5 as PLAYER_PREFIX,
  N5 as PLAYER_SEEK,
  F5 as PLAYER_SEEK_BY,
  e6 as PLAYER_SEEK_TO,
  z5 as PLAYER_TOGGLE_PLAY,
  Ws as PREVIEW_FRAME_WIDTH,
  li as Placeholder,
  m3 as Player,
  v3 as PlayheadComponent,
  As as PreviewTrackItem,
  b3 as RulerComponent,
  mw as SECONDARY_FONT,
  gw as SMALL_FONT_SIZE,
  _6 as SMALL_ICON_SIZE,
  VS as STATE_CHANGED,
  $S as STATE_PREFIX,
  y3 as Scene,
  b6 as SceneBoard,
  Or as ScrollArea,
  Ef as ScrollBar,
  p3 as SequenceItem,
  e5 as Slider,
  IS as StateManager,
  ah as TIMELINE_BOUNDING_CHANGED,
  lc as TIMELINE_OFFSET_CANVAS_LEFT,
  vd as TIMELINE_OFFSET_CANVAS_RIGHT,
  Ha as TIMELINE_OFFSET_X,
  V5 as TIMELINE_PREFIX,
  sh as TIMELINE_SCALE_CHANGED,
  B5 as TIMELINE_SCALE_PREFIX,
  tn as TIMELINE_ZOOM_LEVELS,
  WS as TRACKS_CHANGED,
  BS as TRACK_ITEMS_CHANGED,
  US as TRACK_ITEMS_PREFIX,
  HS as TRACK_PREFIX,
  Jw as TRANSITIONS,
  D5 as Tabs,
  Pa as TabsContent,
  Zf as TabsList,
  Oa as TabsTrigger,
  _h as Text,
  Er as TextObject,
  xc as Timeline,
  sS as TimelineComponent,
  d4 as Track,
  h4 as TrackItemsMixin,
  nr as TrackObject,
  g4 as TracksMixin,
  Ge as Transition,
  Es as TransitionGuide,
  b4 as TransitionsMixin,
  O7 as UPLOADS,
  qw as VIDEOS,
  l4 as Video,
  Dr as VideoObject,
  tS as addEventListeners,
  V3 as applyMixins,
  My as buttonVariants,
  K3 as calculateDisplayRange,
  en as calculateDuration,
  hc as calculatePosition,
  Mw as calculateTimelineWidth,
  Z3 as calculateTrim,
  ce as cn,
  z3 as createAudioControls,
  $3 as createControls,
  L3 as createMediaControls,
  yh as createResizeControls,
  $s as defaultColor,
  o4 as defaultSizes,
  q3 as filterAndCleanTracks,
  ph as findIndex,
  LS as formatBytes,
  k7 as formatTimeToHumanReadable,
  xw as formatTimelineUnit,
  _w as frameToTimeString,
  Iw as getCurrentTime,
  E7 as getFitZoomLevel,
  L7 as getMovingState,
  kw as getNextZoom,
  Aw as getNextZoomIndex,
  Ew as getNextZoomLevel,
  gt as getOffset,
  Cw as getPreviousZoom,
  M7 as getPreviousZoomIndex,
  Tw as getPreviousZoomLevel,
  ys as getTextHeight,
  A7 as getZoomByIndex,
  iS as handleEvents,
  Cs as handleResize,
  G3 as loadAudio,
  t4 as loadAudioItem,
  n4 as loadAudioObject,
  Rw as loadFonts,
  X3 as loadImage,
  J3 as loadImageItem,
  r4 as loadImageObject,
  xh as loadTextItem,
  s4 as loadTextObject,
  Y3 as loadVideo,
  Q3 as loadVideoItem,
  i4 as loadVideoObject,
  a4 as mergeSizes,
  gh as mergeTrackObjects,
  H as movingState,
  x3 as positionOffsets,
  R7 as randomInt,
  eS as removeEventListeners,
  Is as removeItemsFromTrack,
  zn as renderControl,
  mh as reorderTracksByIndex,
  TS as setupHistoryListeners,
  Wt as timeMsToUnits,
  Sw as timeToString,
  Ut as transitionStore,
  er as unitsToTimeMs,
  j7 as updateMovingState,
  uc as useCurrentPlayerFrame,
  Bs as useIsDraggingOverTimeline,
  dc as useLayoutStore,
  xn as useStore,
  CS as useTimelineEvents,
  wh as wrapResizeWithAnchorPosition
};
