import * as x from "react";
import Ct, { useState as Ke, useRef as pn, cloneElement as m3, useCallback as Dr, useLayoutEffect as g3, useEffect as ut, forwardRef as O1, createElement as Cl, useSyncExternalStore as v3 } from "react";
import * as L1 from "react-dom";
import y3, { createPortal as b3 } from "react-dom";
import { create as D1 } from "zustand";
import { Player as x3 } from "@remotion/player";
import { Sequence as As, AbsoluteFill as Fs, Audio as w3, OffthreadVideo as C3, Img as S3 } from "remotion";
import { ActiveSelection as Jl, controlsUtils as dt, classRegistry as ft, Rect as Cn, Control as yn, util as j1, Group as Ql, Point as _3, Canvas as T3, FabricObject as tn } from "fabric";
var ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function E3(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sl = { exports: {} }, co = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function I3() {
  if (bh) return co;
  bh = 1;
  var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var m, v = {}, b = null, C = null;
    h !== void 0 && (b = "" + h), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (m in f) o.call(f, m) && !a.hasOwnProperty(m) && (v[m] = f[m]);
    if (u && u.defaultProps) for (m in f = u.defaultProps, f) v[m] === void 0 && (v[m] = f[m]);
    return { $$typeof: t, type: u, key: b, ref: C, props: v, _owner: s.current };
  }
  return co.Fragment = n, co.jsx = l, co.jsxs = l, co;
}
var lo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xh;
function k3() {
  return xh || (xh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ct, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator, S = "@@iterator";
    function E(I) {
      if (I === null || typeof I != "object")
        return null;
      var B = T && I[T] || I[S];
      return typeof B == "function" ? B : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(I) {
      {
        for (var B = arguments.length, X = new Array(B > 1 ? B - 1 : 0), ce = 1; ce < B; ce++)
          X[ce - 1] = arguments[ce];
        M("error", I, X);
      }
    }
    function M(I, B, X) {
      {
        var ce = k.ReactDebugCurrentFrame, Ie = ce.getStackAddendum();
        Ie !== "" && (B += "%s", X = X.concat([Ie]));
        var Re = X.map(function(we) {
          return String(we);
        });
        Re.unshift("Warning: " + B), Function.prototype.apply.call(console[I], console, Re);
      }
    }
    var L = !1, N = !1, $ = !1, F = !1, V = !1, G;
    G = Symbol.for("react.module.reference");
    function K(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === o || I === a || V || I === s || I === h || I === m || F || I === C || L || N || $ || typeof I == "object" && I !== null && (I.$$typeof === b || I.$$typeof === v || I.$$typeof === l || I.$$typeof === u || I.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === G || I.getModuleId !== void 0));
    }
    function J(I, B, X) {
      var ce = I.displayName;
      if (ce)
        return ce;
      var Ie = B.displayName || B.name || "";
      return Ie !== "" ? X + "(" + Ie + ")" : X;
    }
    function Z(I) {
      return I.displayName || "Context";
    }
    function Q(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case u:
            var B = I;
            return Z(B) + ".Consumer";
          case l:
            var X = I;
            return Z(X._context) + ".Provider";
          case f:
            return J(I, I.render, "ForwardRef");
          case v:
            var ce = I.displayName || null;
            return ce !== null ? ce : Q(I.type) || "Memo";
          case b: {
            var Ie = I, Re = Ie._payload, we = Ie._init;
            try {
              return Q(we(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Te = 0, re, le, ee, ye, fe, Me, En;
    function Vn() {
    }
    Vn.__reactDisabledLog = !0;
    function xr() {
      {
        if (Te === 0) {
          re = console.log, le = console.info, ee = console.warn, ye = console.error, fe = console.group, Me = console.groupCollapsed, En = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: Vn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        Te++;
      }
    }
    function cn() {
      {
        if (Te--, Te === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, I, {
              value: re
            }),
            info: ne({}, I, {
              value: le
            }),
            warn: ne({}, I, {
              value: ee
            }),
            error: ne({}, I, {
              value: ye
            }),
            group: ne({}, I, {
              value: fe
            }),
            groupCollapsed: ne({}, I, {
              value: Me
            }),
            groupEnd: ne({}, I, {
              value: En
            })
          });
        }
        Te < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ln = k.ReactCurrentDispatcher, Yt;
    function St(I, B, X) {
      {
        if (Yt === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var ce = Ie.stack.trim().match(/\n( *(at )?)/);
            Yt = ce && ce[1] || "";
          }
        return `
` + Yt + I;
      }
    }
    var Xt = !1, Gn;
    {
      var Zn = typeof WeakMap == "function" ? WeakMap : Map;
      Gn = new Zn();
    }
    function In(I, B) {
      if (!I || Xt)
        return "";
      {
        var X = Gn.get(I);
        if (X !== void 0)
          return X;
      }
      var ce;
      Xt = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = ln.current, ln.current = null, xr();
      try {
        if (B) {
          var we = function() {
            throw Error();
          };
          if (Object.defineProperty(we.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(we, []);
            } catch (qe) {
              ce = qe;
            }
            Reflect.construct(I, [], we);
          } else {
            try {
              we.call();
            } catch (qe) {
              ce = qe;
            }
            I.call(we.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            ce = qe;
          }
          I();
        }
      } catch (qe) {
        if (qe && ce && typeof qe.stack == "string") {
          for (var ve = qe.stack.split(`
`), rt = ce.stack.split(`
`), Be = ve.length - 1, $e = rt.length - 1; Be >= 1 && $e >= 0 && ve[Be] !== rt[$e]; )
            $e--;
          for (; Be >= 1 && $e >= 0; Be--, $e--)
            if (ve[Be] !== rt[$e]) {
              if (Be !== 1 || $e !== 1)
                do
                  if (Be--, $e--, $e < 0 || ve[Be] !== rt[$e]) {
                    var vt = `
` + ve[Be].replace(" at new ", " at ");
                    return I.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", I.displayName)), typeof I == "function" && Gn.set(I, vt), vt;
                  }
                while (Be >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        Xt = !1, ln.current = Re, cn(), Error.prepareStackTrace = Ie;
      }
      var Kt = I ? I.displayName || I.name : "", Rn = Kt ? St(Kt) : "";
      return typeof I == "function" && Gn.set(I, Rn), Rn;
    }
    function kn(I, B, X) {
      return In(I, !1);
    }
    function _t(I) {
      var B = I.prototype;
      return !!(B && B.isReactComponent);
    }
    function un(I, B, X) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return In(I, _t(I));
      if (typeof I == "string")
        return St(I);
      switch (I) {
        case h:
          return St("Suspense");
        case m:
          return St("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case f:
            return kn(I.render);
          case v:
            return un(I.type, B, X);
          case b: {
            var ce = I, Ie = ce._payload, Re = ce._init;
            try {
              return un(Re(Ie), B, X);
            } catch {
            }
          }
        }
      return "";
    }
    var wr = Object.prototype.hasOwnProperty, Nt = {}, Li = k.ReactDebugCurrentFrame;
    function Gr(I) {
      if (I) {
        var B = I._owner, X = un(I.type, I._source, B ? B.type : null);
        Li.setExtraStackFrame(X);
      } else
        Li.setExtraStackFrame(null);
    }
    function Cr(I, B, X, ce, Ie) {
      {
        var Re = Function.call.bind(wr);
        for (var we in I)
          if (Re(I, we)) {
            var ve = void 0;
            try {
              if (typeof I[we] != "function") {
                var rt = Error((ce || "React class") + ": " + X + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw rt.name = "Invariant Violation", rt;
              }
              ve = I[we](B, we, ce, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              ve = Be;
            }
            ve && !(ve instanceof Error) && (Gr(Ie), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", X, we, typeof ve), Gr(null)), ve instanceof Error && !(ve.message in Nt) && (Nt[ve.message] = !0, Gr(Ie), R("Failed %s type: %s", X, ve.message), Gr(null));
          }
      }
    }
    var Tt = Array.isArray;
    function An(I) {
      return Tt(I);
    }
    function Zr(I) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, X = B && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return X;
      }
    }
    function Da(I) {
      try {
        return Yn(I), !1;
      } catch {
        return !0;
      }
    }
    function Yn(I) {
      return "" + I;
    }
    function No(I) {
      if (Da(I))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zr(I)), Yn(I);
    }
    var Xn = k.ReactCurrentOwner, Kn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yr, Xr;
    function Di(I) {
      if (wr.call(I, "ref")) {
        var B = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function ji(I) {
      if (wr.call(I, "key")) {
        var B = Object.getOwnPropertyDescriptor(I, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function Ni(I, B) {
      typeof I.ref == "string" && Xn.current;
    }
    function Fi(I, B) {
      {
        var X = function() {
          Yr || (Yr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        X.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function zi(I, B) {
      {
        var X = function() {
          Xr || (Xr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        X.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var Hi = function(I, B, X, ce, Ie, Re, we) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: I,
        key: B,
        ref: X,
        props: we,
        // Record the component responsible for creating this element.
        _owner: Re
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Wi(I, B, X, ce, Ie) {
      {
        var Re, we = {}, ve = null, rt = null;
        X !== void 0 && (No(X), ve = "" + X), ji(B) && (No(B.key), ve = "" + B.key), Di(B) && (rt = B.ref, Ni(B, Ie));
        for (Re in B)
          wr.call(B, Re) && !Kn.hasOwnProperty(Re) && (we[Re] = B[Re]);
        if (I && I.defaultProps) {
          var Be = I.defaultProps;
          for (Re in Be)
            we[Re] === void 0 && (we[Re] = Be[Re]);
        }
        if (ve || rt) {
          var $e = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          ve && Fi(we, $e), rt && zi(we, $e);
        }
        return Hi(I, ve, rt, Ie, ce, Xn.current, we);
      }
    }
    var Bi = k.ReactCurrentOwner, Fo = k.ReactDebugCurrentFrame;
    function qn(I) {
      if (I) {
        var B = I._owner, X = un(I.type, I._source, B ? B.type : null);
        Fo.setExtraStackFrame(X);
      } else
        Fo.setExtraStackFrame(null);
    }
    var Kr;
    Kr = !1;
    function qr(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function zo() {
      {
        if (Bi.current) {
          var I = Q(Bi.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function ja(I) {
      return "";
    }
    var Ho = {};
    function Na(I) {
      {
        var B = zo();
        if (!B) {
          var X = typeof I == "string" ? I : I.displayName || I.name;
          X && (B = `

Check the top-level render call using <` + X + ">.");
        }
        return B;
      }
    }
    function Ui(I, B) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var X = Na(B);
        if (Ho[X])
          return;
        Ho[X] = !0;
        var ce = "";
        I && I._owner && I._owner !== Bi.current && (ce = " It was passed a child from " + Q(I._owner.type) + "."), qn(I), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, ce), qn(null);
      }
    }
    function Wo(I, B) {
      {
        if (typeof I != "object")
          return;
        if (An(I))
          for (var X = 0; X < I.length; X++) {
            var ce = I[X];
            qr(ce) && Ui(ce, B);
          }
        else if (qr(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var Ie = E(I);
          if (typeof Ie == "function" && Ie !== I.entries)
            for (var Re = Ie.call(I), we; !(we = Re.next()).done; )
              qr(we.value) && Ui(we.value, B);
        }
      }
    }
    function Fa(I) {
      {
        var B = I.type;
        if (B == null || typeof B == "string")
          return;
        var X;
        if (typeof B == "function")
          X = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === v))
          X = B.propTypes;
        else
          return;
        if (X) {
          var ce = Q(B);
          Cr(X, I.props, "prop", ce, I);
        } else if (B.PropTypes !== void 0 && !Kr) {
          Kr = !0;
          var Ie = Q(B);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function za(I) {
      {
        for (var B = Object.keys(I.props), X = 0; X < B.length; X++) {
          var ce = B[X];
          if (ce !== "children" && ce !== "key") {
            qn(I), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), qn(null);
            break;
          }
        }
        I.ref !== null && (qn(I), R("Invalid attribute `ref` supplied to `React.Fragment`."), qn(null));
      }
    }
    var Jr = {};
    function Bo(I, B, X, ce, Ie, Re) {
      {
        var we = K(I);
        if (!we) {
          var ve = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = ja();
          rt ? ve += rt : ve += zo();
          var Be;
          I === null ? Be = "null" : An(I) ? Be = "array" : I !== void 0 && I.$$typeof === t ? (Be = "<" + (Q(I.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof I, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, ve);
        }
        var $e = Wi(I, B, X, Ie, Re);
        if ($e == null)
          return $e;
        if (we) {
          var vt = B.children;
          if (vt !== void 0)
            if (ce)
              if (An(vt)) {
                for (var Kt = 0; Kt < vt.length; Kt++)
                  Wo(vt[Kt], I);
                Object.freeze && Object.freeze(vt);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wo(vt, I);
        }
        if (wr.call(B, "key")) {
          var Rn = Q(I), qe = Object.keys(B).filter(function($a) {
            return $a !== "key";
          }), Vi = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jr[Rn + Vi]) {
            var Ua = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vi, Rn, Ua, Rn), Jr[Rn + Vi] = !0;
          }
        }
        return I === o ? za($e) : Fa($e), $e;
      }
    }
    function $i(I, B, X) {
      return Bo(I, B, X, !0);
    }
    function Ha(I, B, X) {
      return Bo(I, B, X, !1);
    }
    var Wa = Ha, Ba = $i;
    lo.Fragment = o, lo.jsx = Wa, lo.jsxs = Ba;
  }()), lo;
}
process.env.NODE_ENV === "production" ? Sl.exports = I3() : Sl.exports = k3();
var p = Sl.exports;
function wh(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function N1(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((s) => {
      const a = wh(s, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : wh(e[s], null);
        }
      };
  };
}
function We(...e) {
  return x.useCallback(N1(...e), e);
}
var Nr = x.forwardRef((e, t) => {
  const { children: n, ...o } = e, s = x.Children.toArray(n), a = s.find(A3);
  if (a) {
    const l = a.props.children, u = s.map((f) => f === a ? x.Children.count(l) > 1 ? x.Children.only(null) : x.isValidElement(l) ? l.props.children : null : f);
    return /* @__PURE__ */ p.jsx(_l, { ...o, ref: t, children: x.isValidElement(l) ? x.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ p.jsx(_l, { ...o, ref: t, children: n });
});
Nr.displayName = "Slot";
var _l = x.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (x.isValidElement(n)) {
    const s = P3(n), a = R3(o, n.props);
    return n.type !== x.Fragment && (a.ref = t ? N1(t, s) : s), x.cloneElement(n, a);
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
_l.displayName = "SlotClone";
var F1 = ({ children: e }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: e });
function A3(e) {
  return x.isValidElement(e) && e.type === F1;
}
function R3(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? n[o] = (...u) => {
      a(...u), s(...u);
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...a } : o === "className" && (n[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function P3(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var z1 = Nr;
function H1(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = H1(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function W1() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = H1(e)) && (o && (o += " "), o += t);
  return o;
}
const Ch = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Sh = W1, M3 = (e, t) => (n) => {
  var o;
  if (t?.variants == null) return Sh(e, n?.class, n?.className);
  const { variants: s, defaultVariants: a } = t, l = Object.keys(s).map((h) => {
    const m = n?.[h], v = a?.[h];
    if (m === null) return null;
    const b = Ch(m) || Ch(v);
    return s[h][b];
  }), u = n && Object.entries(n).reduce((h, m) => {
    let [v, b] = m;
    return b === void 0 || (h[v] = b), h;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, m) => {
    let { class: v, className: b, ...C } = m;
    return Object.entries(C).every((T) => {
      let [S, E] = T;
      return Array.isArray(E) ? E.includes({
        ...a,
        ...u
      }[S]) : {
        ...a,
        ...u
      }[S] === E;
    }) ? [
      ...h,
      v,
      b
    ] : h;
  }, []);
  return Sh(e, l, f, n?.class, n?.className);
}, eu = "-", O3 = (e) => {
  const t = D3(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(eu);
      return u[0] === "" && u.length !== 1 && u.shift(), B1(u, t) || L3(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const f = n[l] || [];
      return u && o[l] ? [...f, ...o[l]] : f;
    }
  };
}, B1 = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), s = o ? B1(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const a = e.join(eu);
  return t.validators.find(({
    validator: l
  }) => l(a))?.classGroupId;
}, _h = /^\[(.+)\]$/, L3 = (e) => {
  if (_h.test(e)) {
    const t = _h.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, D3 = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return N3(Object.entries(e.classGroups), n).forEach(([a, l]) => {
    Tl(l, o, a, t);
  }), o;
}, Tl = (e, t, n, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? t : Th(t, s);
      a.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (j3(s)) {
        Tl(s(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([a, l]) => {
      Tl(l, Th(t, a), n, o);
    });
  });
}, Th = (e, t) => {
  let n = e;
  return t.split(eu).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, j3 = (e) => e.isThemeGetter, N3 = (e, t) => t ? e.map(([n, o]) => {
  const s = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([l, u]) => [t + l, u])) : a);
  return [n, s];
}) : e, F3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (a, l) => {
    n.set(a, l), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let l = n.get(a);
      if (l !== void 0)
        return l;
      if ((l = o.get(a)) !== void 0)
        return s(a, l), l;
    },
    set(a, l) {
      n.has(a) ? n.set(a, l) : s(a, l);
    }
  };
}, U1 = "!", z3 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, s = t[0], a = t.length, l = (u) => {
    const f = [];
    let h = 0, m = 0, v;
    for (let E = 0; E < u.length; E++) {
      let k = u[E];
      if (h === 0) {
        if (k === s && (o || u.slice(E, E + a) === t)) {
          f.push(u.slice(m, E)), m = E + a;
          continue;
        }
        if (k === "/") {
          v = E;
          continue;
        }
      }
      k === "[" ? h++ : k === "]" && h--;
    }
    const b = f.length === 0 ? u : u.substring(m), C = b.startsWith(U1), T = C ? b.substring(1) : b, S = v && v > m ? v - m : void 0;
    return {
      modifiers: f,
      hasImportantModifier: C,
      baseClassName: T,
      maybePostfixModifierPosition: S
    };
  };
  return n ? (u) => n({
    className: u,
    parseClassName: l
  }) : l;
}, H3 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, W3 = (e) => ({
  cache: F3(e.cacheSize),
  parseClassName: z3(e),
  ...O3(e)
}), B3 = /\s+/, U3 = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, a = [], l = e.trim().split(B3);
  let u = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const h = l[f], {
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: C
    } = n(h);
    let T = !!C, S = o(T ? b.substring(0, C) : b);
    if (!S) {
      if (!T) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (S = o(b), !S) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const E = H3(m).join(":"), k = v ? E + U1 : E, R = k + S;
    if (a.includes(R))
      continue;
    a.push(R);
    const M = s(S, T);
    for (let L = 0; L < M.length; ++L) {
      const N = M[L];
      a.push(k + N);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function $3() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = $1(t)) && (o && (o += " "), o += n);
  return o;
}
const $1 = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = $1(e[o])) && (n && (n += " "), n += t);
  return n;
};
function V3(e, ...t) {
  let n, o, s, a = l;
  function l(f) {
    const h = t.reduce((m, v) => v(m), e());
    return n = W3(h), o = n.cache.get, s = n.cache.set, a = u, u(f);
  }
  function u(f) {
    const h = o(f);
    if (h)
      return h;
    const m = U3(f, n);
    return s(f, m), m;
  }
  return function() {
    return a($3.apply(null, arguments));
  };
}
const ze = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, V1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, G3 = /^\d+\/\d+$/, Z3 = /* @__PURE__ */ new Set(["px", "full", "screen"]), Y3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, X3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, K3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, q3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, J3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Hn = (e) => yi(e) || Z3.has(e) || G3.test(e), ar = (e) => Ei(e, "length", s6), yi = (e) => !!e && !Number.isNaN(Number(e)), tl = (e) => Ei(e, "number", yi), uo = (e) => !!e && Number.isInteger(Number(e)), Q3 = (e) => e.endsWith("%") && yi(e.slice(0, -1)), pe = (e) => V1.test(e), cr = (e) => Y3.test(e), e6 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), t6 = (e) => Ei(e, e6, G1), n6 = (e) => Ei(e, "position", G1), r6 = /* @__PURE__ */ new Set(["image", "url"]), i6 = (e) => Ei(e, r6, c6), o6 = (e) => Ei(e, "", a6), fo = () => !0, Ei = (e, t, n) => {
  const o = V1.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, s6 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  X3.test(e) && !K3.test(e)
), G1 = () => !1, a6 = (e) => q3.test(e), c6 = (e) => J3.test(e), l6 = () => {
  const e = ze("colors"), t = ze("spacing"), n = ze("blur"), o = ze("brightness"), s = ze("borderColor"), a = ze("borderRadius"), l = ze("borderSpacing"), u = ze("borderWidth"), f = ze("contrast"), h = ze("grayscale"), m = ze("hueRotate"), v = ze("invert"), b = ze("gap"), C = ze("gradientColorStops"), T = ze("gradientColorStopPositions"), S = ze("inset"), E = ze("margin"), k = ze("opacity"), R = ze("padding"), M = ze("saturate"), L = ze("scale"), N = ze("sepia"), $ = ze("skew"), F = ze("space"), V = ze("translate"), G = () => ["auto", "contain", "none"], K = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", pe, t], Z = () => [pe, t], Q = () => ["", Hn, ar], ne = () => ["auto", yi, pe], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], re = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ye = () => ["", "0", pe], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Me = () => [yi, pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fo],
      spacing: [Hn, ar],
      blur: ["none", "", cr, pe],
      brightness: Me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", cr, pe],
      borderSpacing: Z(),
      borderWidth: Q(),
      contrast: Me(),
      grayscale: ye(),
      hueRotate: Me(),
      invert: ye(),
      gap: Z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Q3, ar],
      inset: J(),
      margin: J(),
      opacity: Me(),
      padding: Z(),
      saturate: Me(),
      scale: Me(),
      sepia: ye(),
      skew: Me(),
      space: Z(),
      translate: Z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", pe]
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
        columns: [cr]
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
        object: [...Te(), pe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
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
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
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
        z: ["auto", uo, pe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: J()
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
        flex: ["1", "auto", "initial", "none", pe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ye()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ye()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", uo, pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", uo, pe]
        }, pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [fo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [uo, pe]
        }, pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
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
        "auto-cols": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ee()]
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
        content: ["normal", ...ee(), "baseline"]
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
        "place-content": [...ee(), "baseline"]
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
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
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
        "space-x": [F]
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
        "space-y": [F]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [pe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [pe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [cr]
        }, cr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [pe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", cr, ar]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", tl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", yi, tl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Hn, pe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", pe]
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
        "placeholder-opacity": [k]
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
        "text-opacity": [k]
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
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Hn, ar]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Hn, pe]
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
        indent: Z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
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
        content: ["none", pe]
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
        "bg-opacity": [k]
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
        bg: [...Te(), n6]
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
        bg: ["auto", "cover", "contain", t6]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, i6]
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
        from: [T]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [T]
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
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...re(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: re()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...re()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Hn, pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Hn, ar]
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
        ring: Q()
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Hn, ar]
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
        shadow: ["", "inner", "none", cr, o6]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", cr, pe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [N]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [N]
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
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Me()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", pe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Me()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", pe]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [uo, pe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [V]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [V]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [$]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [$]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
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
        "scroll-m": Z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Z()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe]
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
        stroke: [Hn, ar, tl]
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
}, u6 = /* @__PURE__ */ V3(l6);
function gt(...e) {
  return u6(W1(e));
}
function SI(e, t = {}) {
  const { decimals: n = 0, sizeType: o = "normal" } = t, s = ["Bytes", "KB", "MB", "GB", "TB"], a = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (e === 0) return "0 Byte";
  const l = Math.floor(Math.log(e) / Math.log(1024));
  return `${(e / Math.pow(1024, l)).toFixed(n)} ${o === "accurate" ? a[l] ?? "Bytest" : s[l] ?? "Bytes"}`;
}
const d6 = M3(
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
), Le = x.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...s }, a) => {
    const l = o ? Nr : "button";
    return /* @__PURE__ */ p.jsx(
      l,
      {
        className: gt(d6({ variant: t, size: n, className: e })),
        ref: a,
        ...s
      }
    );
  }
);
Le.displayName = "Button";
function tu(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e?.(s), n === !1 || !s.defaultPrevented)
      return t?.(s);
  };
}
function yr(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = x.createContext(l), f = n.length;
    n = [...n, l];
    const h = (v) => {
      const { scope: b, children: C, ...T } = v, S = b?.[e]?.[f] || u, E = x.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ p.jsx(S.Provider, { value: E, children: C });
    };
    h.displayName = a + "Provider";
    function m(v, b) {
      const C = b?.[e]?.[f] || u, T = x.useContext(C);
      if (T) return T;
      if (l !== void 0) return l;
      throw new Error(`\`${v}\` must be used within \`${a}\``);
    }
    return [h, m];
  }
  const s = () => {
    const a = n.map((l) => x.createContext(l));
    return function(u) {
      const f = u?.[e] || a;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, f6(s, ...t)];
}
function f6(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: h }) => {
        const v = f(a)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function lt(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => t.current?.(...n), []);
}
function ua({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, s] = h6({ defaultProp: t, onChange: n }), a = e !== void 0, l = a ? e : o, u = lt(n), f = x.useCallback(
    (h) => {
      if (a) {
        const v = typeof h == "function" ? h(e) : h;
        v !== e && u(v);
      } else
        s(h);
    },
    [a, e, s, u]
  );
  return [l, f];
}
function h6({
  defaultProp: e,
  onChange: t
}) {
  const n = x.useState(e), [o] = n, s = x.useRef(o), a = lt(t);
  return x.useEffect(() => {
    s.current !== o && (a(o), s.current = o);
  }, [o, s, a]), n;
}
var Z1 = x.createContext(void 0), p6 = (e) => {
  const { dir: t, children: n } = e;
  return /* @__PURE__ */ p.jsx(Z1.Provider, { value: t, children: n });
};
function da(e) {
  const t = x.useContext(Z1);
  return e || t || "ltr";
}
var m6 = p6;
function g6(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var dr = globalThis?.document ? x.useLayoutEffect : () => {
};
function Y1(e) {
  const [t, n] = x.useState(void 0);
  return dr(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let l, u;
        if ("borderBoxSize" in a) {
          const f = a.borderBoxSize, h = Array.isArray(f) ? f[0] : f;
          l = h.inlineSize, u = h.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        n({ width: l, height: u });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var v6 = [
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
], Ne = v6.reduce((e, t) => {
  const n = x.forwardRef((o, s) => {
    const { asChild: a, ...l } = o, u = a ? Nr : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(u, { ...l, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function y6(e, t) {
  e && L1.flushSync(() => e.dispatchEvent(t));
}
function X1(e) {
  const t = e + "CollectionProvider", [n, o] = yr(t), [s, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (C) => {
    const { scope: T, children: S } = C, E = Ct.useRef(null), k = Ct.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(s, { scope: T, itemMap: k, collectionRef: E, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = Ct.forwardRef(
    (C, T) => {
      const { scope: S, children: E } = C, k = a(u, S), R = We(T, k.collectionRef);
      return /* @__PURE__ */ p.jsx(Nr, { ref: R, children: E });
    }
  );
  f.displayName = u;
  const h = e + "CollectionItemSlot", m = "data-radix-collection-item", v = Ct.forwardRef(
    (C, T) => {
      const { scope: S, children: E, ...k } = C, R = Ct.useRef(null), M = We(T, R), L = a(h, S);
      return Ct.useEffect(() => (L.itemMap.set(R, { ref: R, ...k }), () => void L.itemMap.delete(R))), /* @__PURE__ */ p.jsx(Nr, { [m]: "", ref: M, children: E });
    }
  );
  v.displayName = h;
  function b(C) {
    const T = a(e + "CollectionConsumer", C);
    return Ct.useCallback(() => {
      const E = T.collectionRef.current;
      if (!E) return [];
      const k = Array.from(E.querySelectorAll(`[${m}]`));
      return Array.from(T.itemMap.values()).sort(
        (L, N) => k.indexOf(L.ref.current) - k.indexOf(N.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: v },
    b,
    o
  ];
}
var K1 = ["PageUp", "PageDown"], q1 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], J1 = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Ii = "Slider", [El, b6, x6] = X1(Ii), [Q1, _I] = yr(Ii, [
  x6
]), [w6, fa] = Q1(Ii), ep = x.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: o = 0,
      max: s = 100,
      step: a = 1,
      orientation: l = "horizontal",
      disabled: u = !1,
      minStepsBetweenThumbs: f = 0,
      defaultValue: h = [o],
      value: m,
      onValueChange: v = () => {
      },
      onValueCommit: b = () => {
      },
      inverted: C = !1,
      form: T,
      ...S
    } = e, E = x.useRef(/* @__PURE__ */ new Set()), k = x.useRef(0), M = l === "horizontal" ? C6 : S6, [L = [], N] = ua({
      prop: m,
      defaultProp: h,
      onChange: (J) => {
        [...E.current][k.current]?.focus(), v(J);
      }
    }), $ = x.useRef(L);
    function F(J) {
      const Z = k6(L, J);
      K(J, Z);
    }
    function V(J) {
      K(J, k.current);
    }
    function G() {
      const J = $.current[k.current];
      L[k.current] !== J && b(L);
    }
    function K(J, Z, { commit: Q } = { commit: !1 }) {
      const ne = M6(a), Te = O6(Math.round((J - o) / a) * a + o, ne), re = tu(Te, [o, s]);
      N((le = []) => {
        const ee = E6(le, re, Z);
        if (P6(ee, f * a)) {
          k.current = ee.indexOf(re);
          const ye = String(ee) !== String(le);
          return ye && Q && b(ee), ye ? ee : le;
        } else
          return le;
      });
    }
    return /* @__PURE__ */ p.jsx(
      w6,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: u,
        min: o,
        max: s,
        valueIndexToChangeRef: k,
        thumbs: E.current,
        values: L,
        orientation: l,
        form: T,
        children: /* @__PURE__ */ p.jsx(El.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ p.jsx(El.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p.jsx(
          M,
          {
            "aria-disabled": u,
            "data-disabled": u ? "" : void 0,
            ...S,
            ref: t,
            onPointerDown: Se(S.onPointerDown, () => {
              u || ($.current = L);
            }),
            min: o,
            max: s,
            inverted: C,
            onSlideStart: u ? void 0 : F,
            onSlideMove: u ? void 0 : V,
            onSlideEnd: u ? void 0 : G,
            onHomeKeyDown: () => !u && K(o, 0, { commit: !0 }),
            onEndKeyDown: () => !u && K(s, L.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: J, direction: Z }) => {
              if (!u) {
                const Te = K1.includes(J.key) || J.shiftKey && q1.includes(J.key) ? 10 : 1, re = k.current, le = L[re], ee = a * Te * Z;
                K(le + ee, re, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
ep.displayName = Ii;
var [tp, np] = Q1(Ii, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), C6 = x.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: o,
      dir: s,
      inverted: a,
      onSlideStart: l,
      onSlideMove: u,
      onSlideEnd: f,
      onStepKeyDown: h,
      ...m
    } = e, [v, b] = x.useState(null), C = We(t, (M) => b(M)), T = x.useRef(void 0), S = da(s), E = S === "ltr", k = E && !a || !E && a;
    function R(M) {
      const L = T.current || v.getBoundingClientRect(), N = [0, L.width], F = nu(N, k ? [n, o] : [o, n]);
      return T.current = L, F(M - L.left);
    }
    return /* @__PURE__ */ p.jsx(
      tp,
      {
        scope: e.__scopeSlider,
        startEdge: k ? "left" : "right",
        endEdge: k ? "right" : "left",
        direction: k ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ p.jsx(
          rp,
          {
            dir: S,
            "data-orientation": "horizontal",
            ...m,
            ref: C,
            style: {
              ...m.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (M) => {
              const L = R(M.clientX);
              l?.(L);
            },
            onSlideMove: (M) => {
              const L = R(M.clientX);
              u?.(L);
            },
            onSlideEnd: () => {
              T.current = void 0, f?.();
            },
            onStepKeyDown: (M) => {
              const N = J1[k ? "from-left" : "from-right"].includes(M.key);
              h?.({ event: M, direction: N ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), S6 = x.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: o,
      inverted: s,
      onSlideStart: a,
      onSlideMove: l,
      onSlideEnd: u,
      onStepKeyDown: f,
      ...h
    } = e, m = x.useRef(null), v = We(t, m), b = x.useRef(void 0), C = !s;
    function T(S) {
      const E = b.current || m.current.getBoundingClientRect(), k = [0, E.height], M = nu(k, C ? [o, n] : [n, o]);
      return b.current = E, M(S - E.top);
    }
    return /* @__PURE__ */ p.jsx(
      tp,
      {
        scope: e.__scopeSlider,
        startEdge: C ? "bottom" : "top",
        endEdge: C ? "top" : "bottom",
        size: "height",
        direction: C ? 1 : -1,
        children: /* @__PURE__ */ p.jsx(
          rp,
          {
            "data-orientation": "vertical",
            ...h,
            ref: v,
            style: {
              ...h.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (S) => {
              const E = T(S.clientY);
              a?.(E);
            },
            onSlideMove: (S) => {
              const E = T(S.clientY);
              l?.(E);
            },
            onSlideEnd: () => {
              b.current = void 0, u?.();
            },
            onStepKeyDown: (S) => {
              const k = J1[C ? "from-bottom" : "from-top"].includes(S.key);
              f?.({ event: S, direction: k ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), rp = x.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: o,
      onSlideMove: s,
      onSlideEnd: a,
      onHomeKeyDown: l,
      onEndKeyDown: u,
      onStepKeyDown: f,
      ...h
    } = e, m = fa(Ii, n);
    return /* @__PURE__ */ p.jsx(
      Ne.span,
      {
        ...h,
        ref: t,
        onKeyDown: Se(e.onKeyDown, (v) => {
          v.key === "Home" ? (l(v), v.preventDefault()) : v.key === "End" ? (u(v), v.preventDefault()) : K1.concat(q1).includes(v.key) && (f(v), v.preventDefault());
        }),
        onPointerDown: Se(e.onPointerDown, (v) => {
          const b = v.target;
          b.setPointerCapture(v.pointerId), v.preventDefault(), m.thumbs.has(b) ? b.focus() : o(v);
        }),
        onPointerMove: Se(e.onPointerMove, (v) => {
          v.target.hasPointerCapture(v.pointerId) && s(v);
        }),
        onPointerUp: Se(e.onPointerUp, (v) => {
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && (b.releasePointerCapture(v.pointerId), a(v));
        })
      }
    );
  }
), ip = "SliderTrack", op = x.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, s = fa(ip, n);
    return /* @__PURE__ */ p.jsx(
      Ne.span,
      {
        "data-disabled": s.disabled ? "" : void 0,
        "data-orientation": s.orientation,
        ...o,
        ref: t
      }
    );
  }
);
op.displayName = ip;
var Il = "SliderRange", sp = x.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, s = fa(Il, n), a = np(Il, n), l = x.useRef(null), u = We(t, l), f = s.values.length, h = s.values.map(
      (b) => cp(b, s.min, s.max)
    ), m = f > 1 ? Math.min(...h) : 0, v = 100 - Math.max(...h);
    return /* @__PURE__ */ p.jsx(
      Ne.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: u,
        style: {
          ...e.style,
          [a.startEdge]: m + "%",
          [a.endEdge]: v + "%"
        }
      }
    );
  }
);
sp.displayName = Il;
var kl = "SliderThumb", ap = x.forwardRef(
  (e, t) => {
    const n = b6(e.__scopeSlider), [o, s] = x.useState(null), a = We(t, (u) => s(u)), l = x.useMemo(
      () => o ? n().findIndex((u) => u.ref.current === o) : -1,
      [n, o]
    );
    return /* @__PURE__ */ p.jsx(_6, { ...e, ref: a, index: l });
  }
), _6 = x.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: o, name: s, ...a } = e, l = fa(kl, n), u = np(kl, n), [f, h] = x.useState(null), m = We(t, (R) => h(R)), v = f ? l.form || !!f.closest("form") : !0, b = Y1(f), C = l.values[o], T = C === void 0 ? 0 : cp(C, l.min, l.max), S = I6(o, l.values.length), E = b?.[u.size], k = E ? A6(E, T, u.direction) : 0;
    return x.useEffect(() => {
      if (f)
        return l.thumbs.add(f), () => {
          l.thumbs.delete(f);
        };
    }, [f, l.thumbs]), /* @__PURE__ */ p.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [u.startEdge]: `calc(${T}% + ${k}px)`
        },
        children: [
          /* @__PURE__ */ p.jsx(El.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p.jsx(
            Ne.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || S,
              "aria-valuemin": l.min,
              "aria-valuenow": C,
              "aria-valuemax": l.max,
              "aria-orientation": l.orientation,
              "data-orientation": l.orientation,
              "data-disabled": l.disabled ? "" : void 0,
              tabIndex: l.disabled ? void 0 : 0,
              ...a,
              ref: m,
              style: C === void 0 ? { display: "none" } : e.style,
              onFocus: Se(e.onFocus, () => {
                l.valueIndexToChangeRef.current = o;
              })
            }
          ) }),
          v && /* @__PURE__ */ p.jsx(
            T6,
            {
              name: s ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              form: l.form,
              value: C
            },
            o
          )
        ]
      }
    );
  }
);
ap.displayName = kl;
var T6 = (e) => {
  const { value: t, ...n } = e, o = x.useRef(null), s = g6(t);
  return x.useEffect(() => {
    const a = o.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
    if (s !== t && f) {
      const h = new Event("input", { bubbles: !0 });
      f.call(a, t), a.dispatchEvent(h);
    }
  }, [s, t]), /* @__PURE__ */ p.jsx("input", { style: { display: "none" }, ...n, ref: o, defaultValue: t });
};
function E6(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((s, a) => s - a);
}
function cp(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return tu(a, [0, 100]);
}
function I6(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function k6(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((s) => Math.abs(s - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function A6(e, t, n) {
  const o = e / 2, a = nu([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function R6(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function P6(e, t) {
  if (t > 0) {
    const n = R6(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function nu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function M6(e) {
  return (String(e).split(".")[1] || "").length;
}
function O6(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var lp = ep, L6 = op, D6 = sp, j6 = ap;
const N6 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsxs(
  lp,
  {
    ref: n,
    className: gt(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ p.jsx(L6, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ p.jsx(D6, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ p.jsx(j6, { className: "block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
N6.displayName = lp.displayName;
function F6(e, t) {
  return x.useReducer((n, o) => t[n][o] ?? n, e);
}
var $n = (e) => {
  const { present: t, children: n } = e, o = z6(t), s = typeof n == "function" ? n({ present: o.isPresent }) : x.Children.only(n), a = We(o.ref, H6(s));
  return typeof n == "function" || o.isPresent ? x.cloneElement(s, { ref: a }) : null;
};
$n.displayName = "Presence";
function z6(e) {
  const [t, n] = x.useState(), o = x.useRef({}), s = x.useRef(e), a = x.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = F6(l, {
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
  return x.useEffect(() => {
    const h = Rs(o.current);
    a.current = u === "mounted" ? h : "none";
  }, [u]), dr(() => {
    const h = o.current, m = s.current;
    if (m !== e) {
      const b = a.current, C = Rs(h);
      e ? f("MOUNT") : C === "none" || h?.display === "none" ? f("UNMOUNT") : f(m && b !== C ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), dr(() => {
    if (t) {
      let h;
      const m = t.ownerDocument.defaultView ?? window, v = (C) => {
        const S = Rs(o.current).includes(C.animationName);
        if (C.target === t && S && (f("ANIMATION_END"), !s.current)) {
          const E = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E);
          });
        }
      }, b = (C) => {
        C.target === t && (a.current = Rs(o.current));
      };
      return t.addEventListener("animationstart", b), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        m.clearTimeout(h), t.removeEventListener("animationstart", b), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: x.useCallback((h) => {
      h && (o.current = getComputedStyle(h)), n(h);
    }, [])
  };
}
function Rs(e) {
  return e?.animationName || "none";
}
function H6(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function W6(e, t) {
  return x.useReducer((n, o) => t[n][o] ?? n, e);
}
var ru = "ScrollArea", [up, TI] = yr(ru), [B6, Zt] = up(ru), dp = x.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: s,
      scrollHideDelay: a = 600,
      ...l
    } = e, [u, f] = x.useState(null), [h, m] = x.useState(null), [v, b] = x.useState(null), [C, T] = x.useState(null), [S, E] = x.useState(null), [k, R] = x.useState(0), [M, L] = x.useState(0), [N, $] = x.useState(!1), [F, V] = x.useState(!1), G = We(t, (J) => f(J)), K = da(s);
    return /* @__PURE__ */ p.jsx(
      B6,
      {
        scope: n,
        type: o,
        dir: K,
        scrollHideDelay: a,
        scrollArea: u,
        viewport: h,
        onViewportChange: m,
        content: v,
        onContentChange: b,
        scrollbarX: C,
        onScrollbarXChange: T,
        scrollbarXEnabled: N,
        onScrollbarXEnabledChange: $,
        scrollbarY: S,
        onScrollbarYChange: E,
        scrollbarYEnabled: F,
        onScrollbarYEnabledChange: V,
        onCornerWidthChange: R,
        onCornerHeightChange: L,
        children: /* @__PURE__ */ p.jsx(
          Ne.div,
          {
            dir: K,
            ...l,
            ref: G,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": k + "px",
              "--radix-scroll-area-corner-height": M + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
dp.displayName = ru;
var fp = "ScrollAreaViewport", hp = x.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: s, ...a } = e, l = Zt(fp, n), u = x.useRef(null), f = We(t, u, l.onViewportChange);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ p.jsx(
        Ne.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: f,
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
            overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ p.jsx("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
hp.displayName = fp;
var Sn = "ScrollAreaScrollbar", ha = x.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, s = Zt(Sn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: l } = s, u = e.orientation === "horizontal";
    return x.useEffect(() => (u ? a(!0) : l(!0), () => {
      u ? a(!1) : l(!1);
    }), [u, a, l]), s.type === "hover" ? /* @__PURE__ */ p.jsx(U6, { ...o, ref: t, forceMount: n }) : s.type === "scroll" ? /* @__PURE__ */ p.jsx($6, { ...o, ref: t, forceMount: n }) : s.type === "auto" ? /* @__PURE__ */ p.jsx(pp, { ...o, ref: t, forceMount: n }) : s.type === "always" ? /* @__PURE__ */ p.jsx(iu, { ...o, ref: t }) : null;
  }
);
ha.displayName = Sn;
var U6 = x.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = Zt(Sn, e.__scopeScrollArea), [a, l] = x.useState(!1);
  return x.useEffect(() => {
    const u = s.scrollArea;
    let f = 0;
    if (u) {
      const h = () => {
        window.clearTimeout(f), l(!0);
      }, m = () => {
        f = window.setTimeout(() => l(!1), s.scrollHideDelay);
      };
      return u.addEventListener("pointerenter", h), u.addEventListener("pointerleave", m), () => {
        window.clearTimeout(f), u.removeEventListener("pointerenter", h), u.removeEventListener("pointerleave", m);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ p.jsx($n, { present: n || a, children: /* @__PURE__ */ p.jsx(
    pp,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), $6 = x.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = Zt(Sn, e.__scopeScrollArea), a = e.orientation === "horizontal", l = ma(() => f("SCROLL_END"), 100), [u, f] = W6("hidden", {
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
  return x.useEffect(() => {
    if (u === "idle") {
      const h = window.setTimeout(() => f("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(h);
    }
  }, [u, s.scrollHideDelay, f]), x.useEffect(() => {
    const h = s.viewport, m = a ? "scrollLeft" : "scrollTop";
    if (h) {
      let v = h[m];
      const b = () => {
        const C = h[m];
        v !== C && (f("SCROLL"), l()), v = C;
      };
      return h.addEventListener("scroll", b), () => h.removeEventListener("scroll", b);
    }
  }, [s.viewport, a, f, l]), /* @__PURE__ */ p.jsx($n, { present: n || u !== "hidden", children: /* @__PURE__ */ p.jsx(
    iu,
    {
      "data-state": u === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: Se(e.onPointerEnter, () => f("POINTER_ENTER")),
      onPointerLeave: Se(e.onPointerLeave, () => f("POINTER_LEAVE"))
    }
  ) });
}), pp = x.forwardRef((e, t) => {
  const n = Zt(Sn, e.__scopeScrollArea), { forceMount: o, ...s } = e, [a, l] = x.useState(!1), u = e.orientation === "horizontal", f = ma(() => {
    if (n.viewport) {
      const h = n.viewport.offsetWidth < n.viewport.scrollWidth, m = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(u ? h : m);
    }
  }, 10);
  return wi(n.viewport, f), wi(n.content, f), /* @__PURE__ */ p.jsx($n, { present: o || a, children: /* @__PURE__ */ p.jsx(
    iu,
    {
      "data-state": a ? "visible" : "hidden",
      ...s,
      ref: t
    }
  ) });
}), iu = x.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, s = Zt(Sn, e.__scopeScrollArea), a = x.useRef(null), l = x.useRef(0), [u, f] = x.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = yp(u.viewport, u.content), m = {
    ...o,
    sizes: u,
    onSizesChange: f,
    hasThumb: h > 0 && h < 1,
    onThumbChange: (b) => a.current = b,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (b) => l.current = b
  };
  function v(b, C) {
    return K6(b, l.current, u, C);
  }
  return n === "horizontal" ? /* @__PURE__ */ p.jsx(
    V6,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const b = s.viewport.scrollLeft, C = Eh(b, u, s.dir);
          a.current.style.transform = `translate3d(${C}px, 0, 0)`;
        }
      },
      onWheelScroll: (b) => {
        s.viewport && (s.viewport.scrollLeft = b);
      },
      onDragScroll: (b) => {
        s.viewport && (s.viewport.scrollLeft = v(b, s.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ p.jsx(
    G6,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const b = s.viewport.scrollTop, C = Eh(b, u);
          a.current.style.transform = `translate3d(0, ${C}px, 0)`;
        }
      },
      onWheelScroll: (b) => {
        s.viewport && (s.viewport.scrollTop = b);
      },
      onDragScroll: (b) => {
        s.viewport && (s.viewport.scrollTop = v(b));
      }
    }
  ) : null;
}), V6 = x.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...s } = e, a = Zt(Sn, e.__scopeScrollArea), [l, u] = x.useState(), f = x.useRef(null), h = We(t, f, a.onScrollbarXChange);
  return x.useEffect(() => {
    f.current && u(getComputedStyle(f.current));
  }, [f]), /* @__PURE__ */ p.jsx(
    gp,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: h,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": pa(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.x),
      onDragScroll: (m) => e.onDragScroll(m.x),
      onWheelScroll: (m, v) => {
        if (a.viewport) {
          const b = a.viewport.scrollLeft + m.deltaX;
          e.onWheelScroll(b), xp(b, v) && m.preventDefault();
        }
      },
      onResize: () => {
        f.current && a.viewport && l && o({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: f.current.clientWidth,
            paddingStart: Gs(l.paddingLeft),
            paddingEnd: Gs(l.paddingRight)
          }
        });
      }
    }
  );
}), G6 = x.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...s } = e, a = Zt(Sn, e.__scopeScrollArea), [l, u] = x.useState(), f = x.useRef(null), h = We(t, f, a.onScrollbarYChange);
  return x.useEffect(() => {
    f.current && u(getComputedStyle(f.current));
  }, [f]), /* @__PURE__ */ p.jsx(
    gp,
    {
      "data-orientation": "vertical",
      ...s,
      ref: h,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": pa(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.y),
      onDragScroll: (m) => e.onDragScroll(m.y),
      onWheelScroll: (m, v) => {
        if (a.viewport) {
          const b = a.viewport.scrollTop + m.deltaY;
          e.onWheelScroll(b), xp(b, v) && m.preventDefault();
        }
      },
      onResize: () => {
        f.current && a.viewport && l && o({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: f.current.clientHeight,
            paddingStart: Gs(l.paddingTop),
            paddingEnd: Gs(l.paddingBottom)
          }
        });
      }
    }
  );
}), [Z6, mp] = up(Sn), gp = x.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: o,
    hasThumb: s,
    onThumbChange: a,
    onThumbPointerUp: l,
    onThumbPointerDown: u,
    onThumbPositionChange: f,
    onDragScroll: h,
    onWheelScroll: m,
    onResize: v,
    ...b
  } = e, C = Zt(Sn, n), [T, S] = x.useState(null), E = We(t, (G) => S(G)), k = x.useRef(null), R = x.useRef(""), M = C.viewport, L = o.content - o.viewport, N = lt(m), $ = lt(f), F = ma(v, 10);
  function V(G) {
    if (k.current) {
      const K = G.clientX - k.current.left, J = G.clientY - k.current.top;
      h({ x: K, y: J });
    }
  }
  return x.useEffect(() => {
    const G = (K) => {
      const J = K.target;
      T?.contains(J) && N(K, L);
    };
    return document.addEventListener("wheel", G, { passive: !1 }), () => document.removeEventListener("wheel", G, { passive: !1 });
  }, [M, T, L, N]), x.useEffect($, [o, $]), wi(T, F), wi(C.content, F), /* @__PURE__ */ p.jsx(
    Z6,
    {
      scope: n,
      scrollbar: T,
      hasThumb: s,
      onThumbChange: lt(a),
      onThumbPointerUp: lt(l),
      onThumbPositionChange: $,
      onThumbPointerDown: lt(u),
      children: /* @__PURE__ */ p.jsx(
        Ne.div,
        {
          ...b,
          ref: E,
          style: { position: "absolute", ...b.style },
          onPointerDown: Se(e.onPointerDown, (G) => {
            G.button === 0 && (G.target.setPointerCapture(G.pointerId), k.current = T.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", C.viewport && (C.viewport.style.scrollBehavior = "auto"), V(G));
          }),
          onPointerMove: Se(e.onPointerMove, V),
          onPointerUp: Se(e.onPointerUp, (G) => {
            const K = G.target;
            K.hasPointerCapture(G.pointerId) && K.releasePointerCapture(G.pointerId), document.body.style.webkitUserSelect = R.current, C.viewport && (C.viewport.style.scrollBehavior = ""), k.current = null;
          })
        }
      )
    }
  );
}), Vs = "ScrollAreaThumb", ou = x.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, s = mp(Vs, e.__scopeScrollArea);
    return /* @__PURE__ */ p.jsx($n, { present: n || s.hasThumb, children: /* @__PURE__ */ p.jsx(Y6, { ref: t, ...o }) });
  }
), Y6 = x.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...s } = e, a = Zt(Vs, n), l = mp(Vs, n), { onThumbPositionChange: u } = l, f = We(
      t,
      (v) => l.onThumbChange(v)
    ), h = x.useRef(void 0), m = ma(() => {
      h.current && (h.current(), h.current = void 0);
    }, 100);
    return x.useEffect(() => {
      const v = a.viewport;
      if (v) {
        const b = () => {
          if (m(), !h.current) {
            const C = q6(v, u);
            h.current = C, u();
          }
        };
        return u(), v.addEventListener("scroll", b), () => v.removeEventListener("scroll", b);
      }
    }, [a.viewport, m, u]), /* @__PURE__ */ p.jsx(
      Ne.div,
      {
        "data-state": l.hasThumb ? "visible" : "hidden",
        ...s,
        ref: f,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: Se(e.onPointerDownCapture, (v) => {
          const C = v.target.getBoundingClientRect(), T = v.clientX - C.left, S = v.clientY - C.top;
          l.onThumbPointerDown({ x: T, y: S });
        }),
        onPointerUp: Se(e.onPointerUp, l.onThumbPointerUp)
      }
    );
  }
);
ou.displayName = Vs;
var su = "ScrollAreaCorner", vp = x.forwardRef(
  (e, t) => {
    const n = Zt(su, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ p.jsx(X6, { ...e, ref: t }) : null;
  }
);
vp.displayName = su;
var X6 = x.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, s = Zt(su, n), [a, l] = x.useState(0), [u, f] = x.useState(0), h = !!(a && u);
  return wi(s.scrollbarX, () => {
    const m = s.scrollbarX?.offsetHeight || 0;
    s.onCornerHeightChange(m), f(m);
  }), wi(s.scrollbarY, () => {
    const m = s.scrollbarY?.offsetWidth || 0;
    s.onCornerWidthChange(m), l(m);
  }), h ? /* @__PURE__ */ p.jsx(
    Ne.div,
    {
      ...o,
      ref: t,
      style: {
        width: a,
        height: u,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Gs(e) {
  return e ? parseInt(e, 10) : 0;
}
function yp(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function pa(e) {
  const t = yp(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function K6(e, t, n, o = "ltr") {
  const s = pa(n), a = s / 2, l = t || a, u = s - l, f = n.scrollbar.paddingStart + l, h = n.scrollbar.size - n.scrollbar.paddingEnd - u, m = n.content - n.viewport, v = o === "ltr" ? [0, m] : [m * -1, 0];
  return bp([f, h], v)(e);
}
function Eh(e, t, n = "ltr") {
  const o = pa(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - s, l = t.content - t.viewport, u = a - o, f = n === "ltr" ? [0, l] : [l * -1, 0], h = tu(e, f);
  return bp([0, l], [0, u])(h);
}
function bp(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function xp(e, t) {
  return e > 0 && e < t;
}
var q6 = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return function s() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, l = n.left !== a.left, u = n.top !== a.top;
    (l || u) && t(), n = a, o = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(o);
};
function ma(e, t) {
  const n = lt(e), o = x.useRef(0);
  return x.useEffect(() => () => window.clearTimeout(o.current), []), x.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function wi(e, t) {
  const n = lt(t);
  dr(() => {
    let o = 0;
    if (e) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return s.observe(e), () => {
        window.cancelAnimationFrame(o), s.unobserve(e);
      };
    }
  }, [e, n]);
}
var Zs = dp, Al = hp, Ih = ha, kh = ou, J6 = vp;
const _n = x.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ p.jsxs(
  Zs,
  {
    ref: o,
    className: gt("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ p.jsx(Al, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ p.jsx(wp, {}),
      /* @__PURE__ */ p.jsx(J6, {})
    ]
  }
));
_n.displayName = Zs.displayName;
const wp = x.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ p.jsx(
  ha,
  {
    ref: o,
    orientation: t,
    className: gt(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.jsx(ou, { className: "relative flex-1 rounded-full bg-border" })
  }
));
wp.displayName = ha.displayName;
const ga = ({
  children: e,
  renderCustomPreview: t,
  data: n = {},
  shouldDisplayPreview: o = !0
}) => {
  const [s, a] = Ke(!1), [l, u] = Ke({ x: 0, y: 0 }), f = pn(null), b = m3(e, {
    draggable: !0,
    onDragStart: (C) => {
      a(!0), C.dataTransfer.setDragImage(new Image(), 0, 0), C.dataTransfer.setData(JSON.stringify(n), JSON.stringify(n)), u({
        x: C.clientX,
        y: C.clientY
      });
    },
    onDragEnd: () => {
      a(!1);
    },
    onDrag: (C) => {
      s && u({
        x: C.clientX,
        y: C.clientY
      });
    },
    style: {
      ...e.props.style
    }
  });
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    b,
    s && o && t ? b3(
      /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: f,
          style: {
            position: "fixed",
            left: l.x,
            top: l.y,
            pointerEvents: "none",
            zIndex: 9999,
            transform: "translate(-50%, -50%)"
            // Center the preview
          },
          children: t
        }
      ),
      document.body
    ) : null
  ] });
};
var Q6 = x.useId || (() => {
}), ex = 0;
function au(e) {
  const [t, n] = x.useState(Q6());
  return dr(() => {
    n((o) => o ?? String(ex++));
  }, [e]), t ? `radix-${t}` : "";
}
var nl = "rovingFocusGroup.onEntryFocus", tx = { bubbles: !1, cancelable: !0 }, va = "RovingFocusGroup", [Rl, Cp, nx] = X1(va), [rx, Sp] = yr(
  va,
  [nx]
), [ix, ox] = rx(va), _p = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(Rl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Rl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(sx, { ...e, ref: t }) }) })
);
_p.displayName = va;
var sx = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: s = !1,
    dir: a,
    currentTabStopId: l,
    defaultCurrentTabStopId: u,
    onCurrentTabStopIdChange: f,
    onEntryFocus: h,
    preventScrollOnEntryFocus: m = !1,
    ...v
  } = e, b = x.useRef(null), C = We(t, b), T = da(a), [S = null, E] = ua({
    prop: l,
    defaultProp: u,
    onChange: f
  }), [k, R] = x.useState(!1), M = lt(h), L = Cp(n), N = x.useRef(!1), [$, F] = x.useState(0);
  return x.useEffect(() => {
    const V = b.current;
    if (V)
      return V.addEventListener(nl, M), () => V.removeEventListener(nl, M);
  }, [M]), /* @__PURE__ */ p.jsx(
    ix,
    {
      scope: n,
      orientation: o,
      dir: T,
      loop: s,
      currentTabStopId: S,
      onItemFocus: x.useCallback(
        (V) => E(V),
        [E]
      ),
      onItemShiftTab: x.useCallback(() => R(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => F((V) => V + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => F((V) => V - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        Ne.div,
        {
          tabIndex: k || $ === 0 ? -1 : 0,
          "data-orientation": o,
          ...v,
          ref: C,
          style: { outline: "none", ...e.style },
          onMouseDown: Se(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: Se(e.onFocus, (V) => {
            const G = !N.current;
            if (V.target === V.currentTarget && G && !k) {
              const K = new CustomEvent(nl, tx);
              if (V.currentTarget.dispatchEvent(K), !K.defaultPrevented) {
                const J = L().filter((re) => re.focusable), Z = J.find((re) => re.active), Q = J.find((re) => re.id === S), Te = [Z, Q, ...J].filter(
                  Boolean
                ).map((re) => re.ref.current);
                Ip(Te, m);
              }
            }
            N.current = !1;
          }),
          onBlur: Se(e.onBlur, () => R(!1))
        }
      )
    }
  );
}), Tp = "RovingFocusGroupItem", Ep = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: s = !1,
      tabStopId: a,
      ...l
    } = e, u = au(), f = a || u, h = ox(Tp, n), m = h.currentTabStopId === f, v = Cp(n), { onFocusableItemAdd: b, onFocusableItemRemove: C } = h;
    return x.useEffect(() => {
      if (o)
        return b(), () => C();
    }, [o, b, C]), /* @__PURE__ */ p.jsx(
      Rl.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ p.jsx(
          Ne.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": h.orientation,
            ...l,
            ref: t,
            onMouseDown: Se(e.onMouseDown, (T) => {
              o ? h.onItemFocus(f) : T.preventDefault();
            }),
            onFocus: Se(e.onFocus, () => h.onItemFocus(f)),
            onKeyDown: Se(e.onKeyDown, (T) => {
              if (T.key === "Tab" && T.shiftKey) {
                h.onItemShiftTab();
                return;
              }
              if (T.target !== T.currentTarget) return;
              const S = lx(T, h.orientation, h.dir);
              if (S !== void 0) {
                if (T.metaKey || T.ctrlKey || T.altKey || T.shiftKey) return;
                T.preventDefault();
                let k = v().filter((R) => R.focusable).map((R) => R.ref.current);
                if (S === "last") k.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && k.reverse();
                  const R = k.indexOf(T.currentTarget);
                  k = h.loop ? ux(k, R + 1) : k.slice(R + 1);
                }
                setTimeout(() => Ip(k));
              }
            })
          }
        )
      }
    );
  }
);
Ep.displayName = Tp;
var ax = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function cx(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lx(e, t, n) {
  const o = cx(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return ax[o];
}
function Ip(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ux(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var dx = _p, fx = Ep, cu = "Tabs", [hx, EI] = yr(cu, [
  Sp
]), kp = Sp(), [px, lu] = hx(cu), Ap = x.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: o,
      onValueChange: s,
      defaultValue: a,
      orientation: l = "horizontal",
      dir: u,
      activationMode: f = "automatic",
      ...h
    } = e, m = da(u), [v, b] = ua({
      prop: o,
      onChange: s,
      defaultProp: a
    });
    return /* @__PURE__ */ p.jsx(
      px,
      {
        scope: n,
        baseId: au(),
        value: v,
        onValueChange: b,
        orientation: l,
        dir: m,
        activationMode: f,
        children: /* @__PURE__ */ p.jsx(
          Ne.div,
          {
            dir: m,
            "data-orientation": l,
            ...h,
            ref: t
          }
        )
      }
    );
  }
);
Ap.displayName = cu;
var Rp = "TabsList", Pp = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...s } = e, a = lu(Rp, n), l = kp(n);
    return /* @__PURE__ */ p.jsx(
      dx,
      {
        asChild: !0,
        ...l,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: /* @__PURE__ */ p.jsx(
          Ne.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Pp.displayName = Rp;
var Mp = "TabsTrigger", Op = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, disabled: s = !1, ...a } = e, l = lu(Mp, n), u = kp(n), f = jp(l.baseId, o), h = Np(l.baseId, o), m = o === l.value;
    return /* @__PURE__ */ p.jsx(
      fx,
      {
        asChild: !0,
        ...u,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ p.jsx(
          Ne.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": h,
            "data-state": m ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: f,
            ...a,
            ref: t,
            onMouseDown: Se(e.onMouseDown, (v) => {
              !s && v.button === 0 && v.ctrlKey === !1 ? l.onValueChange(o) : v.preventDefault();
            }),
            onKeyDown: Se(e.onKeyDown, (v) => {
              [" ", "Enter"].includes(v.key) && l.onValueChange(o);
            }),
            onFocus: Se(e.onFocus, () => {
              const v = l.activationMode !== "manual";
              !m && !s && v && l.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Op.displayName = Mp;
var Lp = "TabsContent", Dp = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, forceMount: s, children: a, ...l } = e, u = lu(Lp, n), f = jp(u.baseId, o), h = Np(u.baseId, o), m = o === u.value, v = x.useRef(m);
    return x.useEffect(() => {
      const b = requestAnimationFrame(() => v.current = !1);
      return () => cancelAnimationFrame(b);
    }, []), /* @__PURE__ */ p.jsx($n, { present: s || m, children: ({ present: b }) => /* @__PURE__ */ p.jsx(
      Ne.div,
      {
        "data-state": m ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": f,
        hidden: !b,
        id: h,
        tabIndex: 0,
        ...l,
        ref: t,
        style: {
          ...e.style,
          animationDuration: v.current ? "0s" : void 0
        },
        children: b && a
      }
    ) });
  }
);
Dp.displayName = Lp;
function jp(e, t) {
  return `${e}-trigger-${t}`;
}
function Np(e, t) {
  return `${e}-content-${t}`;
}
var mx = Ap, Fp = Pp, zp = Op, Hp = Dp;
const Wp = mx, uu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Fp,
  {
    ref: n,
    className: gt(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
uu.displayName = Fp.displayName;
const yo = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  zp,
  {
    ref: n,
    className: gt(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
yo.displayName = zp.displayName;
const bo = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Hp,
  {
    ref: n,
    className: gt(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
bo.displayName = Hp.displayName;
const II = "add", kI = "track", AI = "trackItems", RI = "track:changed", PI = "trackItems:changed", MI = "state", OI = "state:changed", gx = "add", Bp = "add:text", ko = "add:video", Ao = "add:audio", LI = "add:placeholder", Ro = "add:image", DI = "add:mask", jI = "add:transition", NI = "add:animation", FI = "edit", zI = "edit:object", HI = "edit:text", WI = "edit:shape", BI = "enterEditMode", vx = "player", Up = "player:play", $p = "player:pause", yx = "player:seek", UI = "player:seekTo", bx = "player:seekBy", xx = "player:togglePlay", wx = "active", $I = "active:set", Vp = "active:delete", VI = "active:paste", Gp = "active:clone", Zp = "active:split", Cx = "layer", GI = "layer:locked", ZI = "layer:hidden", YI = "layer:move", XI = "layer:select", Yp = "layer:selection", KI = "layer:sendTo", qI = "layer:rename", JI = "layer:editingName", QI = "layer:copy", ek = "layer:paste", tk = "layer:clone", nk = "layer:split", rk = "layer:cut", ik = "layer:delete", Sx = "history", Xp = "history:undo", Kp = "history:redo", ok = "history:reset", _x = "scale", qp = "scale:changed", Tx = "drag", Jp = "drag:start", Ys = "drag:end", Ex = "timeline", Qp = "timeline:boundingChanged", sk = "design:load", ak = "design", Ix = "scene", e0 = "scene:resize", kx = "scene:load";
var Pl = function(e, t) {
  return Pl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
    n.__proto__ = o;
  } || function(n, o) {
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
  }, Pl(e, t);
};
function ki(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pl(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var mn = function() {
  return mn = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, mn.apply(this, arguments);
};
function t0(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function Ml(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], o = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ol(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e), s, a = [], l;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; ) a.push(s.value);
  } catch (u) {
    l = { error: u };
  } finally {
    try {
      s && !s.done && (n = o.return) && n.call(o);
    } finally {
      if (l) throw l.error;
    }
  }
  return a;
}
function Xs(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function gn(e) {
  return typeof e == "function";
}
function n0(e) {
  var t = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var rl = n0(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(o, s) {
      return s + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ll(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var ya = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, o, s, a;
    if (!this.closed) {
      this.closed = !0;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var u = Ml(l), f = u.next(); !f.done; f = u.next()) {
              var h = f.value;
              h.remove(this);
            }
          } catch (S) {
            t = { error: S };
          } finally {
            try {
              f && !f.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          l.remove(this);
      var m = this.initialTeardown;
      if (gn(m))
        try {
          m();
        } catch (S) {
          a = S instanceof rl ? S.errors : [S];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var b = Ml(v), C = b.next(); !C.done; C = b.next()) {
            var T = C.value;
            try {
              Ah(T);
            } catch (S) {
              a = a ?? [], S instanceof rl ? a = Xs(Xs([], Ol(a)), Ol(S.errors)) : a.push(S);
            }
          }
        } catch (S) {
          o = { error: S };
        } finally {
          try {
            C && !C.done && (s = b.return) && s.call(b);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (a)
        throw new rl(a);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Ah(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && Ll(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Ll(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), r0 = ya.EMPTY;
function i0(e) {
  return e instanceof ya || e && "closed" in e && gn(e.remove) && gn(e.add) && gn(e.unsubscribe);
}
function Ah(e) {
  gn(e) ? e() : e.unsubscribe();
}
var Ax = {
  Promise: void 0
}, Rx = {
  setTimeout: function(e, t) {
    for (var n = [], o = 2; o < arguments.length; o++)
      n[o - 2] = arguments[o];
    return setTimeout.apply(void 0, Xs([e, t], Ol(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function Px(e) {
  Rx.setTimeout(function() {
    throw e;
  });
}
function Rh() {
}
function zs(e) {
  e();
}
var du = function(e) {
  ki(t, e);
  function t(n) {
    var o = e.call(this) || this;
    return o.isStopped = !1, n ? (o.destination = n, i0(n) && n.add(o)) : o.destination = Lx, o;
  }
  return t.create = function(n, o, s) {
    return new Dl(n, o, s);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(ya), Mx = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (o) {
        Ps(o);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (o) {
        Ps(o);
      }
    else
      Ps(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Ps(n);
      }
  }, e;
}(), Dl = function(e) {
  ki(t, e);
  function t(n, o, s) {
    var a = e.call(this) || this, l;
    return gn(n) || !n ? l = {
      next: n ?? void 0,
      error: o ?? void 0,
      complete: s ?? void 0
    } : l = n, a.destination = new Mx(l), a;
  }
  return t;
}(du);
function Ps(e) {
  Px(e);
}
function Ox(e) {
  throw e;
}
var Lx = {
  closed: !0,
  next: Rh,
  error: Ox,
  complete: Rh
}, Dx = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function jx(e) {
  return e;
}
function Nx(e) {
  return e.length === 0 ? jx : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(o, s) {
      return s(o);
    }, n);
  };
}
var Ph = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, o) {
    var s = this, a = zx(t) ? t : new Dl(t, n, o);
    return zs(function() {
      var l = s, u = l.operator, f = l.source;
      a.add(u ? u.call(a, f) : f ? s._subscribe(a) : s._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var o = this;
    return n = Mh(n), new n(function(s, a) {
      var l = new Dl({
        next: function(u) {
          try {
            t(u);
          } catch (f) {
            a(f), l.unsubscribe();
          }
        },
        error: a,
        complete: s
      });
      o.subscribe(l);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[Dx] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return Nx(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Mh(t), new t(function(o, s) {
      var a;
      n.subscribe(function(l) {
        return a = l;
      }, function(l) {
        return s(l);
      }, function() {
        return o(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Mh(e) {
  var t;
  return (t = e ?? Ax.Promise) !== null && t !== void 0 ? t : Promise;
}
function Fx(e) {
  return e && gn(e.next) && gn(e.error) && gn(e.complete);
}
function zx(e) {
  return e && e instanceof du || Fx(e) && i0(e);
}
function Hx(e) {
  return gn(e?.lift);
}
function Wx(e) {
  return function(t) {
    if (Hx(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (o) {
          this.error(o);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Bx(e, t, n, o, s) {
  return new Ux(e, t, n, o, s);
}
var Ux = function(e) {
  ki(t, e);
  function t(n, o, s, a, l, u) {
    var f = e.call(this, n) || this;
    return f.onFinalize = l, f.shouldUnsubscribe = u, f._next = o ? function(h) {
      try {
        o(h);
      } catch (m) {
        n.error(m);
      }
    } : e.prototype._next, f._error = a ? function(h) {
      try {
        a(h);
      } catch (m) {
        n.error(m);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, f._complete = s ? function() {
      try {
        s();
      } catch (h) {
        n.error(h);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, f;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var o = this.closed;
      e.prototype.unsubscribe.call(this), !o && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(du), $x = n0(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), fu = function(e) {
  ki(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var o = new Oh(this, this);
    return o.operator = n, o;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new $x();
  }, t.prototype.next = function(n) {
    var o = this;
    zs(function() {
      var s, a;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var l = Ml(o.currentObservers), u = l.next(); !u.done; u = l.next()) {
            var f = u.value;
            f.next(n);
          }
        } catch (h) {
          s = { error: h };
        } finally {
          try {
            u && !u.done && (a = l.return) && a.call(l);
          } finally {
            if (s) throw s.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var o = this;
    zs(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = !0, o.thrownError = n;
        for (var s = o.observers; s.length; )
          s.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    zs(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var o = n.observers; o.length; )
          o.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var o = this, s = this, a = s.hasError, l = s.isStopped, u = s.observers;
    return a || l ? r0 : (this.currentObservers = null, u.push(n), new ya(function() {
      o.currentObservers = null, Ll(u, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var o = this, s = o.hasError, a = o.thrownError, l = o.isStopped;
    s ? n.error(a) : l && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new Ph();
    return n.source = this, n;
  }, t.create = function(n, o) {
    return new Oh(n, o);
  }, t;
}(Ph), Oh = function(e) {
  ki(t, e);
  function t(n, o) {
    var s = e.call(this) || this;
    return s.destination = n, s.source = o, s;
  }
  return t.prototype.next = function(n) {
    var o, s;
    (s = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || s === void 0 || s.call(o, n);
  }, t.prototype.error = function(n) {
    var o, s;
    (s = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || s === void 0 || s.call(o, n);
  }, t.prototype.complete = function() {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || o === void 0 || o.call(n);
  }, t.prototype._subscribe = function(n) {
    var o, s;
    return (s = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(n)) !== null && s !== void 0 ? s : r0;
  }, t;
}(fu), Lh = function(e) {
  ki(t, e);
  function t(n) {
    var o = e.call(this) || this;
    return o._value = n, o;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(n) {
    var o = e.prototype._subscribe.call(this, n);
    return !o.closed && n.next(this._value), o;
  }, t.prototype.getValue = function() {
    var n = this, o = n.hasError, s = n.thrownError, a = n._value;
    if (o)
      throw s;
    return this._throwIfClosed(), a;
  }, t.prototype.next = function(n) {
    e.prototype.next.call(this, this._value = n);
  }, t;
}(fu);
function Wn(e, t) {
  return Wx(function(n, o) {
    var s = 0;
    n.subscribe(Bx(o, function(a) {
      return e.call(t, a, s++) && o.next(a);
    }));
  });
}
const o0 = new fu(), Vx = (e, t) => {
  o0.next({ key: e, value: t });
}, xe = {
  subject: o0,
  dispatch: Vx
}, st = [];
for (let e = 0; e < 256; ++e)
  st.push((e + 256).toString(16).slice(1));
function Gx(e, t = 0) {
  return (st[e[t + 0]] + st[e[t + 1]] + st[e[t + 2]] + st[e[t + 3]] + "-" + st[e[t + 4]] + st[e[t + 5]] + "-" + st[e[t + 6]] + st[e[t + 7]] + "-" + st[e[t + 8]] + st[e[t + 9]] + "-" + st[e[t + 10]] + st[e[t + 11]] + st[e[t + 12]] + st[e[t + 13]] + st[e[t + 14]] + st[e[t + 15]]).toLowerCase();
}
let il;
const Zx = new Uint8Array(16);
function Yx() {
  if (!il) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    il = crypto.getRandomValues.bind(crypto);
  }
  return il(Zx);
}
const Xx = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Dh = { randomUUID: Xx };
function tt(e, t, n) {
  if (Dh.randomUUID && !e)
    return Dh.randomUUID();
  e = e || {};
  const o = e.random ?? e.rng?.() ?? Yx();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Gx(o);
}
var s0 = /* @__PURE__ */ ((e) => (e.IMAGE = "image", e.VIDEO = "video", e.AUDIO = "audio", e))(s0 || {});
const Kx = (e) => {
  const [t, n] = Ke(!1), [o, s] = Ke(!1), a = Dr((m) => {
    const v = { ...m, id: tt() };
    switch (m.type) {
      case "image":
        xe.dispatch(Ro, { payload: v });
        break;
      case "video":
        xe.dispatch(ko, { payload: v });
        break;
      case "audio":
        xe.dispatch(Ao, { payload: v });
        break;
    }
  }, []), l = Dr(
    (m) => {
      m.preventDefault();
      try {
        const v = m.dataTransfer?.types[0], b = JSON.parse(v);
        if (!Object.values(s0).includes(b.type))
          return;
        s(!0), n(!0), e?.(!0);
      } catch (v) {
        console.error("Error parsing dragged data:", v);
      }
    },
    [e]
  ), u = Dr(
    (m) => {
      m.preventDefault(), t && (s(!0), e?.(!0));
    },
    [t, e]
  ), f = Dr(
    (m) => {
      if (o) {
        m.preventDefault(), s(!1), e?.(!1);
        try {
          const v = m.dataTransfer?.types[0], b = JSON.parse(
            m.dataTransfer.getData(v)
          );
          a(b);
        } catch (v) {
          console.error("Error parsing dropped data:", v);
        }
      }
    },
    [o, e, a]
  ), h = Dr(
    (m) => {
      m.preventDefault(), m.currentTarget.contains(m.relatedTarget) || (s(!1), n(!1), e?.(!1));
    },
    [e]
  );
  return { onDragEnter: l, onDragOver: u, onDrop: f, onDragLeave: h, isDraggingOver: o };
}, qx = ({
  children: e,
  className: t,
  style: n,
  onDragStateChange: o,
  id: s
}) => {
  const { onDragEnter: a, onDragOver: l, onDrop: u, onDragLeave: f } = Kx(o);
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      id: s,
      onDragEnter: a,
      onDrop: u,
      onDragOver: l,
      onDragLeave: f,
      className: t,
      style: n,
      role: "region",
      "aria-label": "Droppable area for images, videos, and audio",
      children: e
    }
  );
};
var Jx = "VisuallyHidden", a0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Ne.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
a0.displayName = Jx;
var Qx = a0;
function e9(e, t = globalThis?.document) {
  const n = lt(e);
  x.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var t9 = "DismissableLayer", jl = "dismissableLayer.update", n9 = "dismissableLayer.pointerDownOutside", r9 = "dismissableLayer.focusOutside", jh, c0 = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), hu = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, h = x.useContext(c0), [m, v] = x.useState(null), b = m?.ownerDocument ?? globalThis?.document, [, C] = x.useState({}), T = We(t, (F) => v(F)), S = Array.from(h.layers), [E] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), k = S.indexOf(E), R = m ? S.indexOf(m) : -1, M = h.layersWithOutsidePointerEventsDisabled.size > 0, L = R >= k, N = s9((F) => {
      const V = F.target, G = [...h.branches].some((K) => K.contains(V));
      !L || G || (s?.(F), l?.(F), F.defaultPrevented || u?.());
    }, b), $ = a9((F) => {
      const V = F.target;
      [...h.branches].some((K) => K.contains(V)) || (a?.(F), l?.(F), F.defaultPrevented || u?.());
    }, b);
    return e9((F) => {
      R === h.layers.size - 1 && (o?.(F), !F.defaultPrevented && u && (F.preventDefault(), u()));
    }, b), x.useEffect(() => {
      if (m)
        return n && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (jh = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(m)), h.layers.add(m), Nh(), () => {
          n && h.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = jh);
        };
    }, [m, b, n, h]), x.useEffect(() => () => {
      m && (h.layers.delete(m), h.layersWithOutsidePointerEventsDisabled.delete(m), Nh());
    }, [m, h]), x.useEffect(() => {
      const F = () => C({});
      return document.addEventListener(jl, F), () => document.removeEventListener(jl, F);
    }, []), /* @__PURE__ */ p.jsx(
      Ne.div,
      {
        ...f,
        ref: T,
        style: {
          pointerEvents: M ? L ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Se(e.onFocusCapture, $.onFocusCapture),
        onBlurCapture: Se(e.onBlurCapture, $.onBlurCapture),
        onPointerDownCapture: Se(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
hu.displayName = t9;
var i9 = "DismissableLayerBranch", o9 = x.forwardRef((e, t) => {
  const n = x.useContext(c0), o = x.useRef(null), s = We(t, o);
  return x.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Ne.div, { ...e, ref: s });
});
o9.displayName = i9;
function s9(e, t = globalThis?.document) {
  const n = lt(e), o = x.useRef(!1), s = x.useRef(() => {
  });
  return x.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          l0(
            n9,
            n,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = f, t.addEventListener("click", s.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", s.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", a), t.removeEventListener("click", s.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function a9(e, t = globalThis?.document) {
  const n = lt(e), o = x.useRef(!1);
  return x.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && l0(r9, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Nh() {
  const e = new CustomEvent(jl);
  document.dispatchEvent(e);
}
function l0(e, t, n, { discrete: o }) {
  const s = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), o ? y6(s, a) : s.dispatchEvent(a);
}
var ol = "focusScope.autoFocusOnMount", sl = "focusScope.autoFocusOnUnmount", Fh = { bubbles: !1, cancelable: !0 }, c9 = "FocusScope", u0 = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = x.useState(null), h = lt(s), m = lt(a), v = x.useRef(null), b = We(t, (S) => f(S)), C = x.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  x.useEffect(() => {
    if (o) {
      let S = function(M) {
        if (C.paused || !u) return;
        const L = M.target;
        u.contains(L) ? v.current = L : lr(v.current, { select: !0 });
      }, E = function(M) {
        if (C.paused || !u) return;
        const L = M.relatedTarget;
        L !== null && (u.contains(L) || lr(v.current, { select: !0 }));
      }, k = function(M) {
        if (document.activeElement === document.body)
          for (const N of M)
            N.removedNodes.length > 0 && lr(u);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", E);
      const R = new MutationObserver(k);
      return u && R.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", E), R.disconnect();
      };
    }
  }, [o, u, C.paused]), x.useEffect(() => {
    if (u) {
      Hh.add(C);
      const S = document.activeElement;
      if (!u.contains(S)) {
        const k = new CustomEvent(ol, Fh);
        u.addEventListener(ol, h), u.dispatchEvent(k), k.defaultPrevented || (l9(p9(d0(u)), { select: !0 }), document.activeElement === S && lr(u));
      }
      return () => {
        u.removeEventListener(ol, h), setTimeout(() => {
          const k = new CustomEvent(sl, Fh);
          u.addEventListener(sl, m), u.dispatchEvent(k), k.defaultPrevented || lr(S ?? document.body, { select: !0 }), u.removeEventListener(sl, m), Hh.remove(C);
        }, 0);
      };
    }
  }, [u, h, m, C]);
  const T = x.useCallback(
    (S) => {
      if (!n && !o || C.paused) return;
      const E = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, k = document.activeElement;
      if (E && k) {
        const R = S.currentTarget, [M, L] = u9(R);
        M && L ? !S.shiftKey && k === L ? (S.preventDefault(), n && lr(M, { select: !0 })) : S.shiftKey && k === M && (S.preventDefault(), n && lr(L, { select: !0 })) : k === R && S.preventDefault();
      }
    },
    [n, o, C.paused]
  );
  return /* @__PURE__ */ p.jsx(Ne.div, { tabIndex: -1, ...l, ref: b, onKeyDown: T });
});
u0.displayName = c9;
function l9(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (lr(o, { select: t }), document.activeElement !== n) return;
}
function u9(e) {
  const t = d0(e), n = zh(t, e), o = zh(t.reverse(), e);
  return [n, o];
}
function d0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zh(e, t) {
  for (const n of e)
    if (!d9(n, { upTo: t })) return n;
}
function d9(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function f9(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function lr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && f9(e) && t && e.select();
  }
}
var Hh = h9();
function h9() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Wh(e, t), e.unshift(t);
    },
    remove(t) {
      e = Wh(e, t), e[0]?.resume();
    }
  };
}
function Wh(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function p9(e) {
  return e.filter((t) => t.tagName !== "A");
}
var m9 = "Portal", f0 = x.forwardRef((e, t) => {
  const { container: n, ...o } = e, [s, a] = x.useState(!1);
  dr(() => a(!0), []);
  const l = n || s && globalThis?.document?.body;
  return l ? y3.createPortal(/* @__PURE__ */ p.jsx(Ne.div, { ...o, ref: t }), l) : null;
});
f0.displayName = m9;
var al = 0;
function g9() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Bh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Bh()), al++, () => {
      al === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), al--;
    };
  }, []);
}
function Bh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Hs = "right-scroll-bar-position", Ws = "width-before-scroll-bar", v9 = "with-scroll-bars-hidden", y9 = "--removed-body-scroll-bar-size";
function cl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function b9(e, t) {
  var n = Ke(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var s = n.value;
          s !== o && (n.value = o, n.callback(o, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var x9 = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Uh = /* @__PURE__ */ new WeakMap();
function w9(e, t) {
  var n = b9(null, function(o) {
    return e.forEach(function(s) {
      return cl(s, o);
    });
  });
  return x9(function() {
    var o = Uh.get(n);
    if (o) {
      var s = new Set(o), a = new Set(e), l = n.current;
      s.forEach(function(u) {
        a.has(u) || cl(u, null);
      }), a.forEach(function(u) {
        s.has(u) || cl(u, l);
      });
    }
    Uh.set(n, e);
  }, [e]), n;
}
function C9(e) {
  return e;
}
function S9(e, t) {
  t === void 0 && (t = C9);
  var n = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var l = t(a, o);
      return n.push(l), function() {
        n = n.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(a);
      }
      n = {
        push: function(u) {
          return a(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var l = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(a), l = n;
      }
      var f = function() {
        var m = l;
        l = [], m.forEach(a);
      }, h = function() {
        return Promise.resolve().then(f);
      };
      h(), n = {
        push: function(m) {
          l.push(m), h();
        },
        filter: function(m) {
          return l = l.filter(m), n;
        }
      };
    }
  };
  return s;
}
function _9(e) {
  e === void 0 && (e = {});
  var t = S9(null);
  return t.options = mn({ async: !0, ssr: !1 }, e), t;
}
var h0 = function(e) {
  var t = e.sideCar, n = t0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return x.createElement(o, mn({}, n));
};
h0.isSideCarExport = !0;
function T9(e, t) {
  return e.useMedium(t), h0;
}
var p0 = _9(), ll = function() {
}, ba = x.forwardRef(function(e, t) {
  var n = x.useRef(null), o = x.useState({
    onScrollCapture: ll,
    onWheelCapture: ll,
    onTouchMoveCapture: ll
  }), s = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, h = e.removeScrollBar, m = e.enabled, v = e.shards, b = e.sideCar, C = e.noIsolation, T = e.inert, S = e.allowPinchZoom, E = e.as, k = E === void 0 ? "div" : E, R = e.gapMode, M = t0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), L = b, N = w9([n, t]), $ = mn(mn({}, M), s);
  return x.createElement(
    x.Fragment,
    null,
    m && x.createElement(L, { sideCar: p0, removeScrollBar: h, shards: v, noIsolation: C, inert: T, setCallbacks: a, allowPinchZoom: !!S, lockRef: n, gapMode: R }),
    l ? x.cloneElement(x.Children.only(u), mn(mn({}, $), { ref: N })) : x.createElement(k, mn({}, $, { className: f, ref: N }), u)
  );
});
ba.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ba.classNames = {
  fullWidth: Ws,
  zeroRight: Hs
};
var E9 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function I9() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = E9();
  return t && e.setAttribute("nonce", t), e;
}
function k9(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function A9(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var R9 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = I9()) && (k9(t, n), A9(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, P9 = function() {
  var e = R9();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, m0 = function() {
  var e = P9(), t = function(n) {
    var o = n.styles, s = n.dynamic;
    return e(o, s), null;
  };
  return t;
}, M9 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ul = function(e) {
  return parseInt(e || "", 10) || 0;
}, O9 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ul(n), ul(o), ul(s)];
}, L9 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return M9;
  var t = O9(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, D9 = m0(), bi = "data-scroll-locked", j9 = function(e, t, n, o) {
  var s = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(v9, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(bi, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Hs, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ws, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Hs, " .").concat(Hs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ws, " .").concat(Ws, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(bi, `] {
    `).concat(y9, ": ").concat(u, `px;
  }
`);
}, $h = function() {
  var e = parseInt(document.body.getAttribute(bi) || "0", 10);
  return isFinite(e) ? e : 0;
}, N9 = function() {
  x.useEffect(function() {
    return document.body.setAttribute(bi, ($h() + 1).toString()), function() {
      var e = $h() - 1;
      e <= 0 ? document.body.removeAttribute(bi) : document.body.setAttribute(bi, e.toString());
    };
  }, []);
}, F9 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  N9();
  var a = x.useMemo(function() {
    return L9(s);
  }, [s]);
  return x.createElement(D9, { styles: j9(a, !t, s, n ? "" : "!important") });
}, Nl = !1;
if (typeof window < "u")
  try {
    var Ms = Object.defineProperty({}, "passive", {
      get: function() {
        return Nl = !0, !0;
      }
    });
    window.addEventListener("test", Ms, Ms), window.removeEventListener("test", Ms, Ms);
  } catch {
    Nl = !1;
  }
var hi = Nl ? { passive: !1 } : !1, z9 = function(e) {
  return e.tagName === "TEXTAREA";
}, g0 = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !z9(e) && n[t] === "visible")
  );
}, H9 = function(e) {
  return g0(e, "overflowY");
}, W9 = function(e) {
  return g0(e, "overflowX");
}, Vh = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = v0(e, o);
    if (s) {
      var a = y0(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, B9 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, U9 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, v0 = function(e, t) {
  return e === "v" ? H9(t) : W9(t);
}, y0 = function(e, t) {
  return e === "v" ? B9(t) : U9(t);
}, $9 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, V9 = function(e, t, n, o, s) {
  var a = $9(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), h = !1, m = l > 0, v = 0, b = 0;
  do {
    var C = y0(e, u), T = C[0], S = C[1], E = C[2], k = S - E - a * T;
    (T || k) && v0(e, u) && (v += k, b += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (m && Math.abs(v) < 1 || !m && Math.abs(b) < 1) && (h = !0), h;
}, Os = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gh = function(e) {
  return [e.deltaX, e.deltaY];
}, Zh = function(e) {
  return e && "current" in e ? e.current : e;
}, G9 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Z9 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Y9 = 0, pi = [];
function X9(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), o = x.useRef(), s = x.useState(Y9++)[0], a = x.useState(m0)[0], l = x.useRef(e);
  x.useEffect(function() {
    l.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var S = Xs([e.lockRef.current], (e.shards || []).map(Zh), !0).filter(Boolean);
      return S.forEach(function(E) {
        return E.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), S.forEach(function(E) {
          return E.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = x.useCallback(function(S, E) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !l.current.allowPinchZoom;
    var k = Os(S), R = n.current, M = "deltaX" in S ? S.deltaX : R[0] - k[0], L = "deltaY" in S ? S.deltaY : R[1] - k[1], N, $ = S.target, F = Math.abs(M) > Math.abs(L) ? "h" : "v";
    if ("touches" in S && F === "h" && $.type === "range")
      return !1;
    var V = Vh(F, $);
    if (!V)
      return !0;
    if (V ? N = F : (N = F === "v" ? "h" : "v", V = Vh(F, $)), !V)
      return !1;
    if (!o.current && "changedTouches" in S && (M || L) && (o.current = N), !N)
      return !0;
    var G = o.current || N;
    return V9(G, E, S, G === "h" ? M : L);
  }, []), f = x.useCallback(function(S) {
    var E = S;
    if (!(!pi.length || pi[pi.length - 1] !== a)) {
      var k = "deltaY" in E ? Gh(E) : Os(E), R = t.current.filter(function(N) {
        return N.name === E.type && (N.target === E.target || E.target === N.shadowParent) && G9(N.delta, k);
      })[0];
      if (R && R.should) {
        E.cancelable && E.preventDefault();
        return;
      }
      if (!R) {
        var M = (l.current.shards || []).map(Zh).filter(Boolean).filter(function(N) {
          return N.contains(E.target);
        }), L = M.length > 0 ? u(E, M[0]) : !l.current.noIsolation;
        L && E.cancelable && E.preventDefault();
      }
    }
  }, []), h = x.useCallback(function(S, E, k, R) {
    var M = { name: S, delta: E, target: k, should: R, shadowParent: K9(k) };
    t.current.push(M), setTimeout(function() {
      t.current = t.current.filter(function(L) {
        return L !== M;
      });
    }, 1);
  }, []), m = x.useCallback(function(S) {
    n.current = Os(S), o.current = void 0;
  }, []), v = x.useCallback(function(S) {
    h(S.type, Gh(S), S.target, u(S, e.lockRef.current));
  }, []), b = x.useCallback(function(S) {
    h(S.type, Os(S), S.target, u(S, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return pi.push(a), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", f, hi), document.addEventListener("touchmove", f, hi), document.addEventListener("touchstart", m, hi), function() {
      pi = pi.filter(function(S) {
        return S !== a;
      }), document.removeEventListener("wheel", f, hi), document.removeEventListener("touchmove", f, hi), document.removeEventListener("touchstart", m, hi);
    };
  }, []);
  var C = e.removeScrollBar, T = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    T ? x.createElement(a, { styles: Z9(s) }) : null,
    C ? x.createElement(F9, { gapMode: e.gapMode }) : null
  );
}
function K9(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const q9 = T9(p0, X9);
var b0 = x.forwardRef(function(e, t) {
  return x.createElement(ba, mn({}, e, { ref: t, sideCar: q9 }));
});
b0.classNames = ba.classNames;
var J9 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mi = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Ds = {}, dl = 0, x0 = function(e) {
  return e && (e.host || x0(e.parentNode));
}, Q9 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = x0(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ew = function(e, t, n, o) {
  var s = Q9(t, Array.isArray(e) ? e : [e]);
  Ds[n] || (Ds[n] = /* @__PURE__ */ new WeakMap());
  var a = Ds[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(v) {
    !v || u.has(v) || (u.add(v), h(v.parentNode));
  };
  s.forEach(h);
  var m = function(v) {
    !v || f.has(v) || Array.prototype.forEach.call(v.children, function(b) {
      if (u.has(b))
        m(b);
      else
        try {
          var C = b.getAttribute(o), T = C !== null && C !== "false", S = (mi.get(b) || 0) + 1, E = (a.get(b) || 0) + 1;
          mi.set(b, S), a.set(b, E), l.push(b), S === 1 && T && Ls.set(b, !0), E === 1 && b.setAttribute(n, "true"), T || b.setAttribute(o, "true");
        } catch (k) {
          console.error("aria-hidden: cannot operate on ", b, k);
        }
    });
  };
  return m(t), u.clear(), dl++, function() {
    l.forEach(function(v) {
      var b = mi.get(v) - 1, C = a.get(v) - 1;
      mi.set(v, b), a.set(v, C), b || (Ls.has(v) || v.removeAttribute(o), Ls.delete(v)), C || v.removeAttribute(n);
    }), dl--, dl || (mi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Ds = {});
  };
}, tw = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = J9(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), ew(o, s, n, "aria-hidden")) : function() {
    return null;
  };
};
const nw = ["top", "right", "bottom", "left"], fr = Math.min, Ot = Math.max, Ks = Math.round, js = Math.floor, vn = (e) => ({
  x: e,
  y: e
}), rw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, iw = {
  start: "end",
  end: "start"
};
function Fl(e, t, n) {
  return Ot(e, fr(t, n));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Un(e) {
  return e.split("-")[0];
}
function Ai(e) {
  return e.split("-")[1];
}
function pu(e) {
  return e === "x" ? "y" : "x";
}
function mu(e) {
  return e === "y" ? "height" : "width";
}
function hr(e) {
  return ["top", "bottom"].includes(Un(e)) ? "y" : "x";
}
function gu(e) {
  return pu(hr(e));
}
function ow(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ai(e), s = gu(e), a = mu(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = qs(l)), [l, qs(l)];
}
function sw(e) {
  const t = qs(e);
  return [zl(e), t, zl(t)];
}
function zl(e) {
  return e.replace(/start|end/g, (t) => iw[t]);
}
function aw(e, t, n) {
  const o = ["left", "right"], s = ["right", "left"], a = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? a : l;
    default:
      return [];
  }
}
function cw(e, t, n, o) {
  const s = Ai(e);
  let a = aw(Un(e), n === "start", o);
  return s && (a = a.map((l) => l + "-" + s), t && (a = a.concat(a.map(zl)))), a;
}
function qs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rw[t]);
}
function lw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function w0(e) {
  return typeof e != "number" ? lw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Js(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: n,
    left: t,
    right: t + o,
    bottom: n + s,
    x: t,
    y: n
  };
}
function Yh(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = hr(t), l = gu(t), u = mu(l), f = Un(t), h = a === "y", m = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, b = o[u] / 2 - s[u] / 2;
  let C;
  switch (f) {
    case "top":
      C = {
        x: m,
        y: o.y - s.height
      };
      break;
    case "bottom":
      C = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      C = {
        x: o.x + o.width,
        y: v
      };
      break;
    case "left":
      C = {
        x: o.x - s.width,
        y: v
      };
      break;
    default:
      C = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ai(t)) {
    case "start":
      C[l] -= b * (n && h ? -1 : 1);
      break;
    case "end":
      C[l] += b * (n && h ? -1 : 1);
      break;
  }
  return C;
}
const uw = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: l
  } = n, u = a.filter(Boolean), f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: m,
    y: v
  } = Yh(h, o, f), b = o, C = {}, T = 0;
  for (let S = 0; S < u.length; S++) {
    const {
      name: E,
      fn: k
    } = u[S], {
      x: R,
      y: M,
      data: L,
      reset: N
    } = await k({
      x: m,
      y: v,
      initialPlacement: o,
      placement: b,
      strategy: s,
      middlewareData: C,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = R ?? m, v = M ?? v, C = {
      ...C,
      [E]: {
        ...C[E],
        ...L
      }
    }, N && T <= 50 && (T++, typeof N == "object" && (N.placement && (b = N.placement), N.rects && (h = N.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : N.rects), {
      x: m,
      y: v
    } = Yh(h, b, f)), S = -1);
  }
  return {
    x: m,
    y: v,
    placement: b,
    strategy: s,
    middlewareData: C
  };
};
async function xo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: a,
    rects: l,
    elements: u,
    strategy: f
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: v = "floating",
    altBoundary: b = !1,
    padding: C = 0
  } = Bn(t, e), T = w0(C), E = u[b ? v === "floating" ? "reference" : "floating" : v], k = Js(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(E))) == null || n ? E : E.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: m,
    strategy: f
  })), R = v === "floating" ? {
    x: o,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, M = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), L = await (a.isElement == null ? void 0 : a.isElement(M)) ? await (a.getScale == null ? void 0 : a.getScale(M)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Js(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: R,
    offsetParent: M,
    strategy: f
  }) : R);
  return {
    top: (k.top - N.top + T.top) / L.y,
    bottom: (N.bottom - k.bottom + T.bottom) / L.y,
    left: (k.left - N.left + T.left) / L.x,
    right: (N.right - k.right + T.right) / L.x
  };
}
const dw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: s,
      rects: a,
      platform: l,
      elements: u,
      middlewareData: f
    } = t, {
      element: h,
      padding: m = 0
    } = Bn(e, t) || {};
    if (h == null)
      return {};
    const v = w0(m), b = {
      x: n,
      y: o
    }, C = gu(s), T = mu(C), S = await l.getDimensions(h), E = C === "y", k = E ? "top" : "left", R = E ? "bottom" : "right", M = E ? "clientHeight" : "clientWidth", L = a.reference[T] + a.reference[C] - b[C] - a.floating[T], N = b[C] - a.reference[C], $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let F = $ ? $[M] : 0;
    (!F || !await (l.isElement == null ? void 0 : l.isElement($))) && (F = u.floating[M] || a.floating[T]);
    const V = L / 2 - N / 2, G = F / 2 - S[T] / 2 - 1, K = fr(v[k], G), J = fr(v[R], G), Z = K, Q = F - S[T] - J, ne = F / 2 - S[T] / 2 + V, Te = Fl(Z, ne, Q), re = !f.arrow && Ai(s) != null && ne !== Te && a.reference[T] / 2 - (ne < Z ? K : J) - S[T] / 2 < 0, le = re ? ne < Z ? ne - Z : ne - Q : 0;
    return {
      [C]: b[C] + le,
      data: {
        [C]: Te,
        centerOffset: ne - Te - le,
        ...re && {
          alignmentOffset: le
        }
      },
      reset: re
    };
  }
}), fw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        middlewareData: a,
        rects: l,
        initialPlacement: u,
        platform: f,
        elements: h
      } = t, {
        mainAxis: m = !0,
        crossAxis: v = !0,
        fallbackPlacements: b,
        fallbackStrategy: C = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: S = !0,
        ...E
      } = Bn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const k = Un(s), R = hr(u), M = Un(u) === u, L = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), N = b || (M || !S ? [qs(u)] : sw(u)), $ = T !== "none";
      !b && $ && N.push(...cw(u, S, T, L));
      const F = [u, ...N], V = await xo(t, E), G = [];
      let K = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (m && G.push(V[k]), v) {
        const ne = ow(s, l, L);
        G.push(V[ne[0]], V[ne[1]]);
      }
      if (K = [...K, {
        placement: s,
        overflows: G
      }], !G.every((ne) => ne <= 0)) {
        var J, Z;
        const ne = (((J = a.flip) == null ? void 0 : J.index) || 0) + 1, Te = F[ne];
        if (Te)
          return {
            data: {
              index: ne,
              overflows: K
            },
            reset: {
              placement: Te
            }
          };
        let re = (Z = K.filter((le) => le.overflows[0] <= 0).sort((le, ee) => le.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!re)
          switch (C) {
            case "bestFit": {
              var Q;
              const le = (Q = K.filter((ee) => {
                if ($) {
                  const ye = hr(ee.placement);
                  return ye === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ye === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((ye) => ye > 0).reduce((ye, fe) => ye + fe, 0)]).sort((ee, ye) => ee[1] - ye[1])[0]) == null ? void 0 : Q[0];
              le && (re = le);
              break;
            }
            case "initialPlacement":
              re = u;
              break;
          }
        if (s !== re)
          return {
            reset: {
              placement: re
            }
          };
      }
      return {};
    }
  };
};
function Xh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Kh(e) {
  return nw.some((t) => e[t] >= 0);
}
const hw = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Bn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await xo(t, {
            ...s,
            elementContext: "reference"
          }), l = Xh(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Kh(l)
            }
          };
        }
        case "escaped": {
          const a = await xo(t, {
            ...s,
            altBoundary: !0
          }), l = Xh(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Kh(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function pw(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Un(n), u = Ai(n), f = hr(n) === "y", h = ["left", "top"].includes(l) ? -1 : 1, m = a && f ? -1 : 1, v = Bn(t, e);
  let {
    mainAxis: b,
    crossAxis: C,
    alignmentAxis: T
  } = typeof v == "number" ? {
    mainAxis: v,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: v.mainAxis || 0,
    crossAxis: v.crossAxis || 0,
    alignmentAxis: v.alignmentAxis
  };
  return u && typeof T == "number" && (C = u === "end" ? T * -1 : T), f ? {
    x: C * m,
    y: b * h
  } : {
    x: b * h,
    y: C * m
  };
}
const mw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: s,
        y: a,
        placement: l,
        middlewareData: u
      } = t, f = await pw(t, e);
      return l === ((n = u.offset) == null ? void 0 : n.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: s + f.x,
        y: a + f.y,
        data: {
          ...f,
          placement: l
        }
      };
    }
  };
}, gw = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (E) => {
            let {
              x: k,
              y: R
            } = E;
            return {
              x: k,
              y: R
            };
          }
        },
        ...f
      } = Bn(e, t), h = {
        x: n,
        y: o
      }, m = await xo(t, f), v = hr(Un(s)), b = pu(v);
      let C = h[b], T = h[v];
      if (a) {
        const E = b === "y" ? "top" : "left", k = b === "y" ? "bottom" : "right", R = C + m[E], M = C - m[k];
        C = Fl(R, C, M);
      }
      if (l) {
        const E = v === "y" ? "top" : "left", k = v === "y" ? "bottom" : "right", R = T + m[E], M = T - m[k];
        T = Fl(R, T, M);
      }
      const S = u.fn({
        ...t,
        [b]: C,
        [v]: T
      });
      return {
        ...S,
        data: {
          x: S.x - n,
          y: S.y - o,
          enabled: {
            [b]: a,
            [v]: l
          }
        }
      };
    }
  };
}, vw = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: s,
        rects: a,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: h = !0
      } = Bn(e, t), m = {
        x: n,
        y: o
      }, v = hr(s), b = pu(v);
      let C = m[b], T = m[v];
      const S = Bn(u, t), E = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (f) {
        const M = b === "y" ? "height" : "width", L = a.reference[b] - a.floating[M] + E.mainAxis, N = a.reference[b] + a.reference[M] - E.mainAxis;
        C < L ? C = L : C > N && (C = N);
      }
      if (h) {
        var k, R;
        const M = b === "y" ? "width" : "height", L = ["top", "left"].includes(Un(s)), N = a.reference[v] - a.floating[M] + (L && ((k = l.offset) == null ? void 0 : k[v]) || 0) + (L ? 0 : E.crossAxis), $ = a.reference[v] + a.reference[M] + (L ? 0 : ((R = l.offset) == null ? void 0 : R[v]) || 0) - (L ? E.crossAxis : 0);
        T < N ? T = N : T > $ && (T = $);
      }
      return {
        [b]: C,
        [v]: T
      };
    }
  };
}, yw = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        rects: a,
        platform: l,
        elements: u
      } = t, {
        apply: f = () => {
        },
        ...h
      } = Bn(e, t), m = await xo(t, h), v = Un(s), b = Ai(s), C = hr(s) === "y", {
        width: T,
        height: S
      } = a.floating;
      let E, k;
      v === "top" || v === "bottom" ? (E = v, k = b === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (k = v, E = b === "end" ? "top" : "bottom");
      const R = S - m.top - m.bottom, M = T - m.left - m.right, L = fr(S - m[E], R), N = fr(T - m[k], M), $ = !t.middlewareData.shift;
      let F = L, V = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (V = M), (o = t.middlewareData.shift) != null && o.enabled.y && (F = R), $ && !b) {
        const K = Ot(m.left, 0), J = Ot(m.right, 0), Z = Ot(m.top, 0), Q = Ot(m.bottom, 0);
        C ? V = T - 2 * (K !== 0 || J !== 0 ? K + J : Ot(m.left, m.right)) : F = S - 2 * (Z !== 0 || Q !== 0 ? Z + Q : Ot(m.top, m.bottom));
      }
      await f({
        ...t,
        availableWidth: V,
        availableHeight: F
      });
      const G = await l.getDimensions(u.floating);
      return T !== G.width || S !== G.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function xa() {
  return typeof window < "u";
}
function Ri(e) {
  return C0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Lt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tn(e) {
  var t;
  return (t = (C0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function C0(e) {
  return xa() ? e instanceof Node || e instanceof Lt(e).Node : !1;
}
function on(e) {
  return xa() ? e instanceof Element || e instanceof Lt(e).Element : !1;
}
function bn(e) {
  return xa() ? e instanceof HTMLElement || e instanceof Lt(e).HTMLElement : !1;
}
function qh(e) {
  return !xa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Lt(e).ShadowRoot;
}
function Po(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = sn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function bw(e) {
  return ["table", "td", "th"].includes(Ri(e));
}
function wa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function vu(e) {
  const t = yu(), n = on(e) ? sn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function xw(e) {
  let t = pr(e);
  for (; bn(t) && !Ci(t); ) {
    if (vu(t))
      return t;
    if (wa(t))
      return null;
    t = pr(t);
  }
  return null;
}
function yu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ci(e) {
  return ["html", "body", "#document"].includes(Ri(e));
}
function sn(e) {
  return Lt(e).getComputedStyle(e);
}
function Ca(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function pr(e) {
  if (Ri(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qh(e) && e.host || // Fallback.
    Tn(e)
  );
  return qh(t) ? t.host : t;
}
function S0(e) {
  const t = pr(e);
  return Ci(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bn(t) && Po(t) ? t : S0(t);
}
function wo(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = S0(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Lt(s);
  if (a) {
    const u = Hl(l);
    return t.concat(l, l.visualViewport || [], Po(s) ? s : [], u && n ? wo(u) : []);
  }
  return t.concat(s, wo(s, [], n));
}
function Hl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _0(e) {
  const t = sn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = bn(e), a = s ? e.offsetWidth : n, l = s ? e.offsetHeight : o, u = Ks(n) !== a || Ks(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function bu(e) {
  return on(e) ? e : e.contextElement;
}
function xi(e) {
  const t = bu(e);
  if (!bn(t))
    return vn(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = _0(t);
  let l = (a ? Ks(n.width) : n.width) / o, u = (a ? Ks(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const ww = /* @__PURE__ */ vn(0);
function T0(e) {
  const t = Lt(e);
  return !yu() || !t.visualViewport ? ww : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Lt(e) ? !1 : t;
}
function Fr(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), a = bu(e);
  let l = vn(1);
  t && (o ? on(o) && (l = xi(o)) : l = xi(e));
  const u = Cw(a, n, o) ? T0(a) : vn(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, m = s.width / l.x, v = s.height / l.y;
  if (a) {
    const b = Lt(a), C = o && on(o) ? Lt(o) : o;
    let T = b, S = Hl(T);
    for (; S && o && C !== T; ) {
      const E = xi(S), k = S.getBoundingClientRect(), R = sn(S), M = k.left + (S.clientLeft + parseFloat(R.paddingLeft)) * E.x, L = k.top + (S.clientTop + parseFloat(R.paddingTop)) * E.y;
      f *= E.x, h *= E.y, m *= E.x, v *= E.y, f += M, h += L, T = Lt(S), S = Hl(T);
    }
  }
  return Js({
    width: m,
    height: v,
    x: f,
    y: h
  });
}
function xu(e, t) {
  const n = Ca(e).scrollLeft;
  return t ? t.left + n : Fr(Tn(e)).left + n;
}
function E0(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    xu(e, o)
  )), a = o.top + t.scrollTop;
  return {
    x: s,
    y: a
  };
}
function Sw(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", l = Tn(o), u = t ? wa(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = vn(1);
  const m = vn(0), v = bn(o);
  if ((v || !v && !a) && ((Ri(o) !== "body" || Po(l)) && (f = Ca(o)), bn(o))) {
    const C = Fr(o);
    h = xi(o), m.x = C.x + o.clientLeft, m.y = C.y + o.clientTop;
  }
  const b = l && !v && !a ? E0(l, f, !0) : vn(0);
  return {
    width: n.width * h.x,
    height: n.height * h.y,
    x: n.x * h.x - f.scrollLeft * h.x + m.x + b.x,
    y: n.y * h.y - f.scrollTop * h.y + m.y + b.y
  };
}
function _w(e) {
  return Array.from(e.getClientRects());
}
function Tw(e) {
  const t = Tn(e), n = Ca(e), o = e.ownerDocument.body, s = Ot(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Ot(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + xu(e);
  const u = -n.scrollTop;
  return sn(o).direction === "rtl" && (l += Ot(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Ew(e, t) {
  const n = Lt(e), o = Tn(e), s = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    a = s.width, l = s.height;
    const h = yu();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
function Iw(e, t) {
  const n = Fr(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, a = bn(e) ? xi(e) : vn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = s * a.x, h = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function Jh(e, t, n) {
  let o;
  if (t === "viewport")
    o = Ew(e, n);
  else if (t === "document")
    o = Tw(Tn(e));
  else if (on(t))
    o = Iw(t, n);
  else {
    const s = T0(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Js(o);
}
function I0(e, t) {
  const n = pr(e);
  return n === t || !on(n) || Ci(n) ? !1 : sn(n).position === "fixed" || I0(n, t);
}
function kw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = wo(e, [], !1).filter((u) => on(u) && Ri(u) !== "body"), s = null;
  const a = sn(e).position === "fixed";
  let l = a ? pr(e) : e;
  for (; on(l) && !Ci(l); ) {
    const u = sn(l), f = vu(l);
    !f && u.position === "fixed" && (s = null), (a ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Po(l) && !f && I0(e, l)) ? o = o.filter((m) => m !== l) : s = u, l = pr(l);
  }
  return t.set(e, o), o;
}
function Aw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? wa(t) ? [] : kw(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((h, m) => {
    const v = Jh(t, m, s);
    return h.top = Ot(v.top, h.top), h.right = fr(v.right, h.right), h.bottom = fr(v.bottom, h.bottom), h.left = Ot(v.left, h.left), h;
  }, Jh(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function Rw(e) {
  const {
    width: t,
    height: n
  } = _0(e);
  return {
    width: t,
    height: n
  };
}
function Pw(e, t, n) {
  const o = bn(t), s = Tn(t), a = n === "fixed", l = Fr(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = vn(0);
  if (o || !o && !a)
    if ((Ri(t) !== "body" || Po(s)) && (u = Ca(t)), o) {
      const b = Fr(t, !0, a, t);
      f.x = b.x + t.clientLeft, f.y = b.y + t.clientTop;
    } else s && (f.x = xu(s));
  const h = s && !o && !a ? E0(s, u) : vn(0), m = l.left + u.scrollLeft - f.x - h.x, v = l.top + u.scrollTop - f.y - h.y;
  return {
    x: m,
    y: v,
    width: l.width,
    height: l.height
  };
}
function fl(e) {
  return sn(e).position === "static";
}
function Qh(e, t) {
  if (!bn(e) || sn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Tn(e) === n && (n = n.ownerDocument.body), n;
}
function k0(e, t) {
  const n = Lt(e);
  if (wa(e))
    return n;
  if (!bn(e)) {
    let s = pr(e);
    for (; s && !Ci(s); ) {
      if (on(s) && !fl(s))
        return s;
      s = pr(s);
    }
    return n;
  }
  let o = Qh(e, t);
  for (; o && bw(o) && fl(o); )
    o = Qh(o, t);
  return o && Ci(o) && fl(o) && !vu(o) ? n : o || xw(e) || n;
}
const Mw = async function(e) {
  const t = this.getOffsetParent || k0, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Pw(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Ow(e) {
  return sn(e).direction === "rtl";
}
const Lw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sw,
  getDocumentElement: Tn,
  getClippingRect: Aw,
  getOffsetParent: k0,
  getElementRects: Mw,
  getClientRects: _w,
  getDimensions: Rw,
  getScale: xi,
  isElement: on,
  isRTL: Ow
};
function A0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Dw(e, t) {
  let n = null, o;
  const s = Tn(e);
  function a() {
    var u;
    clearTimeout(o), (u = n) == null || u.disconnect(), n = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), a();
    const h = e.getBoundingClientRect(), {
      left: m,
      top: v,
      width: b,
      height: C
    } = h;
    if (u || t(), !b || !C)
      return;
    const T = js(v), S = js(s.clientWidth - (m + b)), E = js(s.clientHeight - (v + C)), k = js(m), M = {
      rootMargin: -T + "px " + -S + "px " + -E + "px " + -k + "px",
      threshold: Ot(0, fr(1, f)) || 1
    };
    let L = !0;
    function N($) {
      const F = $[0].intersectionRatio;
      if (F !== f) {
        if (!L)
          return l();
        F ? l(!1, F) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      F === 1 && !A0(h, e.getBoundingClientRect()) && l(), L = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...M,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, M);
    }
    n.observe(e);
  }
  return l(!0), a;
}
function jw(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, h = bu(e), m = s || a ? [...h ? wo(h) : [], ...wo(t)] : [];
  m.forEach((k) => {
    s && k.addEventListener("scroll", n, {
      passive: !0
    }), a && k.addEventListener("resize", n);
  });
  const v = h && u ? Dw(h, n) : null;
  let b = -1, C = null;
  l && (C = new ResizeObserver((k) => {
    let [R] = k;
    R && R.target === h && C && (C.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var M;
      (M = C) == null || M.observe(t);
    })), n();
  }), h && !f && C.observe(h), C.observe(t));
  let T, S = f ? Fr(e) : null;
  f && E();
  function E() {
    const k = Fr(e);
    S && !A0(S, k) && n(), S = k, T = requestAnimationFrame(E);
  }
  return n(), () => {
    var k;
    m.forEach((R) => {
      s && R.removeEventListener("scroll", n), a && R.removeEventListener("resize", n);
    }), v?.(), (k = C) == null || k.disconnect(), C = null, f && cancelAnimationFrame(T);
  };
}
const Nw = mw, Fw = gw, zw = fw, Hw = yw, Ww = hw, e1 = dw, Bw = vw, Uw = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Lw,
    ...n
  }, a = {
    ...s.platform,
    _c: o
  };
  return uw(e, t, {
    ...s,
    platform: a
  });
};
var Bs = typeof document < "u" ? g3 : ut;
function Qs(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Qs(e[o], t[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = s[o];
      if (!(a === "_owner" && e.$$typeof) && !Qs(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function R0(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function t1(e, t) {
  const n = R0(e);
  return Math.round(t * n) / n;
}
function hl(e) {
  const t = x.useRef(e);
  return Bs(() => {
    t.current = e;
  }), t;
}
function $w(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: a,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: f,
    open: h
  } = e, [m, v] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [b, C] = x.useState(o);
  Qs(b, o) || C(o);
  const [T, S] = x.useState(null), [E, k] = x.useState(null), R = x.useCallback((ee) => {
    ee !== $.current && ($.current = ee, S(ee));
  }, []), M = x.useCallback((ee) => {
    ee !== F.current && (F.current = ee, k(ee));
  }, []), L = a || T, N = l || E, $ = x.useRef(null), F = x.useRef(null), V = x.useRef(m), G = f != null, K = hl(f), J = hl(s), Z = hl(h), Q = x.useCallback(() => {
    if (!$.current || !F.current)
      return;
    const ee = {
      placement: t,
      strategy: n,
      middleware: b
    };
    J.current && (ee.platform = J.current), Uw($.current, F.current, ee).then((ye) => {
      const fe = {
        ...ye,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Z.current !== !1
      };
      ne.current && !Qs(V.current, fe) && (V.current = fe, L1.flushSync(() => {
        v(fe);
      }));
    });
  }, [b, t, n, J, Z]);
  Bs(() => {
    h === !1 && V.current.isPositioned && (V.current.isPositioned = !1, v((ee) => ({
      ...ee,
      isPositioned: !1
    })));
  }, [h]);
  const ne = x.useRef(!1);
  Bs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Bs(() => {
    if (L && ($.current = L), N && (F.current = N), L && N) {
      if (K.current)
        return K.current(L, N, Q);
      Q();
    }
  }, [L, N, Q, K, G]);
  const Te = x.useMemo(() => ({
    reference: $,
    floating: F,
    setReference: R,
    setFloating: M
  }), [R, M]), re = x.useMemo(() => ({
    reference: L,
    floating: N
  }), [L, N]), le = x.useMemo(() => {
    const ee = {
      position: n,
      left: 0,
      top: 0
    };
    if (!re.floating)
      return ee;
    const ye = t1(re.floating, m.x), fe = t1(re.floating, m.y);
    return u ? {
      ...ee,
      transform: "translate(" + ye + "px, " + fe + "px)",
      ...R0(re.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: ye,
      top: fe
    };
  }, [n, u, re.floating, m.x, m.y]);
  return x.useMemo(() => ({
    ...m,
    update: Q,
    refs: Te,
    elements: re,
    floatingStyles: le
  }), [m, Q, Te, re, le]);
}
const Vw = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? e1({
        element: o.current,
        padding: s
      }).fn(n) : {} : o ? e1({
        element: o,
        padding: s
      }).fn(n) : {};
    }
  };
}, Gw = (e, t) => ({
  ...Nw(e),
  options: [e, t]
}), Zw = (e, t) => ({
  ...Fw(e),
  options: [e, t]
}), Yw = (e, t) => ({
  ...Bw(e),
  options: [e, t]
}), Xw = (e, t) => ({
  ...zw(e),
  options: [e, t]
}), Kw = (e, t) => ({
  ...Hw(e),
  options: [e, t]
}), qw = (e, t) => ({
  ...Ww(e),
  options: [e, t]
}), Jw = (e, t) => ({
  ...Vw(e),
  options: [e, t]
});
var Qw = "Arrow", P0 = x.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ p.jsx(
    Ne.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
P0.displayName = Qw;
var e7 = P0, wu = "Popper", [M0, Sa] = yr(wu), [t7, O0] = M0(wu), L0 = (e) => {
  const { __scopePopper: t, children: n } = e, [o, s] = x.useState(null);
  return /* @__PURE__ */ p.jsx(t7, { scope: t, anchor: o, onAnchorChange: s, children: n });
};
L0.displayName = wu;
var D0 = "PopperAnchor", j0 = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e, a = O0(D0, n), l = x.useRef(null), u = We(t, l);
    return x.useEffect(() => {
      a.onAnchorChange(o?.current || l.current);
    }), o ? null : /* @__PURE__ */ p.jsx(Ne.div, { ...s, ref: u });
  }
);
j0.displayName = D0;
var Cu = "PopperContent", [n7, r7] = M0(Cu), N0 = x.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: f = !0,
      collisionBoundary: h = [],
      collisionPadding: m = 0,
      sticky: v = "partial",
      hideWhenDetached: b = !1,
      updatePositionStrategy: C = "optimized",
      onPlaced: T,
      ...S
    } = e, E = O0(Cu, n), [k, R] = x.useState(null), M = We(t, (Yt) => R(Yt)), [L, N] = x.useState(null), $ = Y1(L), F = $?.width ?? 0, V = $?.height ?? 0, G = o + (a !== "center" ? "-" + a : ""), K = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, J = Array.isArray(h) ? h : [h], Z = J.length > 0, Q = {
      padding: K,
      boundary: J.filter(o7),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Z
    }, { refs: ne, floatingStyles: Te, placement: re, isPositioned: le, middlewareData: ee } = $w({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: G,
      whileElementsMounted: (...Yt) => jw(...Yt, {
        animationFrame: C === "always"
      }),
      elements: {
        reference: E.anchor
      },
      middleware: [
        Gw({ mainAxis: s + V, alignmentAxis: l }),
        f && Zw({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? Yw() : void 0,
          ...Q
        }),
        f && Xw({ ...Q }),
        Kw({
          ...Q,
          apply: ({ elements: Yt, rects: St, availableWidth: Xt, availableHeight: Gn }) => {
            const { width: Zn, height: In } = St.reference, kn = Yt.floating.style;
            kn.setProperty("--radix-popper-available-width", `${Xt}px`), kn.setProperty("--radix-popper-available-height", `${Gn}px`), kn.setProperty("--radix-popper-anchor-width", `${Zn}px`), kn.setProperty("--radix-popper-anchor-height", `${In}px`);
          }
        }),
        L && Jw({ element: L, padding: u }),
        s7({ arrowWidth: F, arrowHeight: V }),
        b && qw({ strategy: "referenceHidden", ...Q })
      ]
    }), [ye, fe] = H0(re), Me = lt(T);
    dr(() => {
      le && Me?.();
    }, [le, Me]);
    const En = ee.arrow?.x, Vn = ee.arrow?.y, xr = ee.arrow?.centerOffset !== 0, [cn, ln] = x.useState();
    return dr(() => {
      k && ln(window.getComputedStyle(k).zIndex);
    }, [k]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: ne.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Te,
          transform: le ? Te.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: cn,
          "--radix-popper-transform-origin": [
            ee.transformOrigin?.x,
            ee.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...ee.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          n7,
          {
            scope: n,
            placedSide: ye,
            onArrowChange: N,
            arrowX: En,
            arrowY: Vn,
            shouldHideArrow: xr,
            children: /* @__PURE__ */ p.jsx(
              Ne.div,
              {
                "data-side": ye,
                "data-align": fe,
                ...S,
                ref: M,
                style: {
                  ...S.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: le ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
N0.displayName = Cu;
var F0 = "PopperArrow", i7 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, z0 = x.forwardRef(function(t, n) {
  const { __scopePopper: o, ...s } = t, a = r7(F0, o), l = i7[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p.jsx(
          e7,
          {
            ...s,
            ref: n,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
z0.displayName = F0;
function o7(e) {
  return e !== null;
}
var s7 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: s } = t, l = s.arrow?.centerOffset !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [h, m] = H0(n), v = { start: "0%", center: "50%", end: "100%" }[m], b = (s.arrow?.x ?? 0) + u / 2, C = (s.arrow?.y ?? 0) + f / 2;
    let T = "", S = "";
    return h === "bottom" ? (T = l ? v : `${b}px`, S = `${-f}px`) : h === "top" ? (T = l ? v : `${b}px`, S = `${o.floating.height + f}px`) : h === "right" ? (T = `${-f}px`, S = l ? v : `${C}px`) : h === "left" && (T = `${o.floating.width + f}px`, S = l ? v : `${C}px`), { data: { x: T, y: S } };
  }
});
function H0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var a7 = L0, Su = j0, W0 = N0, B0 = z0, _u = "Popover", [U0, ck] = yr(_u, [
  Sa
]), Mo = Sa(), [c7, br] = U0(_u), $0 = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: l = !1
  } = e, u = Mo(t), f = x.useRef(null), [h, m] = x.useState(!1), [v = !1, b] = ua({
    prop: o,
    defaultProp: s,
    onChange: a
  });
  return /* @__PURE__ */ p.jsx(a7, { ...u, children: /* @__PURE__ */ p.jsx(
    c7,
    {
      scope: t,
      contentId: au(),
      triggerRef: f,
      open: v,
      onOpenChange: b,
      onOpenToggle: x.useCallback(() => b((C) => !C), [b]),
      hasCustomAnchor: h,
      onCustomAnchorAdd: x.useCallback(() => m(!0), []),
      onCustomAnchorRemove: x.useCallback(() => m(!1), []),
      modal: l,
      children: n
    }
  ) });
};
$0.displayName = _u;
var V0 = "PopoverAnchor", G0 = x.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = br(V0, n), a = Mo(n), { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = s;
    return x.useEffect(() => (l(), () => u()), [l, u]), /* @__PURE__ */ p.jsx(Su, { ...a, ...o, ref: t });
  }
);
G0.displayName = V0;
var Z0 = "PopoverTrigger", Y0 = x.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = br(Z0, n), a = Mo(n), l = We(t, s.triggerRef), u = /* @__PURE__ */ p.jsx(
      Ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": em(s.open),
        ...o,
        ref: l,
        onClick: Se(e.onClick, s.onOpenToggle)
      }
    );
    return s.hasCustomAnchor ? u : /* @__PURE__ */ p.jsx(Su, { asChild: !0, ...a, children: u });
  }
);
Y0.displayName = Z0;
var Tu = "PopoverPortal", [l7, u7] = U0(Tu, {
  forceMount: void 0
}), X0 = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: s } = e, a = br(Tu, t);
  return /* @__PURE__ */ p.jsx(l7, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx($n, { present: n || a.open, children: /* @__PURE__ */ p.jsx(f0, { asChild: !0, container: s, children: o }) }) });
};
X0.displayName = Tu;
var Si = "PopoverContent", K0 = x.forwardRef(
  (e, t) => {
    const n = u7(Si, e.__scopePopover), { forceMount: o = n.forceMount, ...s } = e, a = br(Si, e.__scopePopover);
    return /* @__PURE__ */ p.jsx($n, { present: o || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(d7, { ...s, ref: t }) : /* @__PURE__ */ p.jsx(f7, { ...s, ref: t }) });
  }
);
K0.displayName = Si;
var d7 = x.forwardRef(
  (e, t) => {
    const n = br(Si, e.__scopePopover), o = x.useRef(null), s = We(t, o), a = x.useRef(!1);
    return x.useEffect(() => {
      const l = o.current;
      if (l) return tw(l);
    }, []), /* @__PURE__ */ p.jsx(b0, { as: Nr, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
      q0,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Se(e.onCloseAutoFocus, (l) => {
          l.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Se(
          e.onPointerDownOutside,
          (l) => {
            const u = l.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0, h = u.button === 2 || f;
            a.current = h;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Se(
          e.onFocusOutside,
          (l) => l.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), f7 = x.forwardRef(
  (e, t) => {
    const n = br(Si, e.__scopePopover), o = x.useRef(!1), s = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      q0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (o.current || n.triggerRef.current?.focus(), a.preventDefault()), o.current = !1, s.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const l = a.target;
          n.triggerRef.current?.contains(l) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && s.current && a.preventDefault();
        }
      }
    );
  }
), q0 = x.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: h,
      onInteractOutside: m,
      ...v
    } = e, b = br(Si, n), C = Mo(n);
    return g9(), /* @__PURE__ */ p.jsx(
      u0,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: s,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p.jsx(
          hu,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: m,
            onEscapeKeyDown: u,
            onPointerDownOutside: f,
            onFocusOutside: h,
            onDismiss: () => b.onOpenChange(!1),
            children: /* @__PURE__ */ p.jsx(
              W0,
              {
                "data-state": em(b.open),
                role: "dialog",
                id: b.contentId,
                ...C,
                ...v,
                ref: t,
                style: {
                  ...v.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), J0 = "PopoverClose", Q0 = x.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = br(J0, n);
    return /* @__PURE__ */ p.jsx(
      Ne.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Se(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
Q0.displayName = J0;
var h7 = "PopoverArrow", p7 = x.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = Mo(n);
    return /* @__PURE__ */ p.jsx(B0, { ...s, ...o, ref: t });
  }
);
p7.displayName = h7;
function em(e) {
  return e ? "open" : "closed";
}
var m7 = $0, g7 = G0, v7 = Y0, y7 = X0, b7 = K0, x7 = Q0, [_a, lk] = yr("Tooltip", [
  Sa
]), Eu = Sa(), tm = "TooltipProvider", w7 = 700, n1 = "tooltip.open", [C7, nm] = _a(tm), rm = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = w7,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: a
  } = e, [l, u] = x.useState(!0), f = x.useRef(!1), h = x.useRef(0);
  return x.useEffect(() => {
    const m = h.current;
    return () => window.clearTimeout(m);
  }, []), /* @__PURE__ */ p.jsx(
    C7,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: n,
      onOpen: x.useCallback(() => {
        window.clearTimeout(h.current), u(!1);
      }, []),
      onClose: x.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: f,
      onPointerInTransitChange: x.useCallback((m) => {
        f.current = m;
      }, []),
      disableHoverableContent: s,
      children: a
    }
  );
};
rm.displayName = tm;
var im = "Tooltip", [uk, Ta] = _a(im), Wl = "TooltipTrigger", S7 = x.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = Ta(Wl, n), a = nm(Wl, n), l = Eu(n), u = x.useRef(null), f = We(t, u, s.onTriggerChange), h = x.useRef(!1), m = x.useRef(!1), v = x.useCallback(() => h.current = !1, []);
    return x.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ p.jsx(Su, { asChild: !0, ...l, children: /* @__PURE__ */ p.jsx(
      Ne.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: f,
        onPointerMove: Se(e.onPointerMove, (b) => {
          b.pointerType !== "touch" && !m.current && !a.isPointerInTransitRef.current && (s.onTriggerEnter(), m.current = !0);
        }),
        onPointerLeave: Se(e.onPointerLeave, () => {
          s.onTriggerLeave(), m.current = !1;
        }),
        onPointerDown: Se(e.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", v, { once: !0 });
        }),
        onFocus: Se(e.onFocus, () => {
          h.current || s.onOpen();
        }),
        onBlur: Se(e.onBlur, s.onClose),
        onClick: Se(e.onClick, s.onClose)
      }
    ) });
  }
);
S7.displayName = Wl;
var _7 = "TooltipPortal", [dk, T7] = _a(_7, {
  forceMount: void 0
}), _i = "TooltipContent", E7 = x.forwardRef(
  (e, t) => {
    const n = T7(_i, e.__scopeTooltip), { forceMount: o = n.forceMount, side: s = "top", ...a } = e, l = Ta(_i, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx($n, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ p.jsx(om, { side: s, ...a, ref: t }) : /* @__PURE__ */ p.jsx(I7, { side: s, ...a, ref: t }) });
  }
), I7 = x.forwardRef((e, t) => {
  const n = Ta(_i, e.__scopeTooltip), o = nm(_i, e.__scopeTooltip), s = x.useRef(null), a = We(t, s), [l, u] = x.useState(null), { trigger: f, onClose: h } = n, m = s.current, { onPointerInTransitChange: v } = o, b = x.useCallback(() => {
    u(null), v(!1);
  }, [v]), C = x.useCallback(
    (T, S) => {
      const E = T.currentTarget, k = { x: T.clientX, y: T.clientY }, R = P7(k, E.getBoundingClientRect()), M = M7(k, R), L = O7(S.getBoundingClientRect()), N = D7([...M, ...L]);
      u(N), v(!0);
    },
    [v]
  );
  return x.useEffect(() => () => b(), [b]), x.useEffect(() => {
    if (f && m) {
      const T = (E) => C(E, m), S = (E) => C(E, f);
      return f.addEventListener("pointerleave", T), m.addEventListener("pointerleave", S), () => {
        f.removeEventListener("pointerleave", T), m.removeEventListener("pointerleave", S);
      };
    }
  }, [f, m, C, b]), x.useEffect(() => {
    if (l) {
      const T = (S) => {
        const E = S.target, k = { x: S.clientX, y: S.clientY }, R = f?.contains(E) || m?.contains(E), M = !L7(k, l);
        R ? b() : M && (b(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [f, m, l, h, b]), /* @__PURE__ */ p.jsx(om, { ...e, ref: a });
}), [k7, A7] = _a(im, { isInside: !1 }), om = x.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = Ta(_i, n), h = Eu(n), { onClose: m } = f;
    return x.useEffect(() => (document.addEventListener(n1, m), () => document.removeEventListener(n1, m)), [m]), x.useEffect(() => {
      if (f.trigger) {
        const v = (b) => {
          b.target?.contains(f.trigger) && m();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [f.trigger, m]), /* @__PURE__ */ p.jsx(
      hu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ p.jsxs(
          W0,
          {
            "data-state": f.stateAttribute,
            ...h,
            ...u,
            ref: t,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p.jsx(F1, { children: o }),
              /* @__PURE__ */ p.jsx(k7, { scope: n, isInside: !0, children: /* @__PURE__ */ p.jsx(Qx, { id: f.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
E7.displayName = _i;
var sm = "TooltipArrow", R7 = x.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = Eu(n);
    return A7(
      sm,
      n
    ).isInside ? null : /* @__PURE__ */ p.jsx(B0, { ...s, ...o, ref: t });
  }
);
R7.displayName = sm;
function P7(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), s = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, o, s, a)) {
    case a:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function M7(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function O7(e) {
  const { top: t, right: n, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: s, y: o }
  ];
}
function L7(e, t) {
  const { x: n, y: o } = e;
  let s = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a].x, f = t[a].y, h = t[l].x, m = t[l].y;
    f > o != m > o && n < (h - u) * (o - f) / (m - f) + u && (s = !s);
  }
  return s;
}
function D7(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), j7(t);
}
function j7(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], l = t[t.length - 2];
      if ((a.x - l.x) * (s.y - l.y) >= (a.y - l.y) * (s.x - l.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const s = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], l = n[n.length - 2];
      if ((a.x - l.x) * (s.y - l.y) >= (a.y - l.y) * (s.x - l.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var N7 = rm, am = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (a = s(a, o(u)));
      }
      return a;
    }
    function o(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var l = "";
      for (var u in a)
        t.call(a, u) && a[u] && (l = s(l, u));
      return l;
    }
    function s(a, l) {
      return l ? a ? a + " " + l : a + l : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(am);
var F7 = am.exports;
const jr = /* @__PURE__ */ E3(F7), cm = { asChild: { type: "boolean" } }, Us = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, lm = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Iu = ["initial", "xs", "sm", "md", "lg", "xl"];
function um(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function mo(e) {
  return typeof e == "object" && Object.keys(e).some((t) => Iu.includes(t));
}
function z7({ className: e, customProperties: t, ...n }) {
  const o = dm({ allowArbitraryValues: !0, className: e, ...n }), s = H7({ customProperties: t, ...n });
  return [o, s];
}
function dm({ allowArbitraryValues: e, value: t, className: n, propValues: o, parseValue: s = (a) => a }) {
  const a = [];
  if (t) {
    if (typeof t == "string" && o.includes(t)) return r1(n, t, s);
    if (mo(t)) {
      const l = t;
      for (const u in l) {
        if (!um(l, u) || !Iu.includes(u)) continue;
        const f = l[u];
        if (f !== void 0) {
          if (o.includes(f)) {
            const h = r1(n, f, s), m = u === "initial" ? h : `${u}:${h}`;
            a.push(m);
          } else if (e) {
            const h = u === "initial" ? n : `${u}:${n}`;
            a.push(h);
          }
        }
      }
      return a.join(" ");
    }
    if (e) return n;
  }
}
function r1(e, t, n) {
  const o = e ? "-" : "", s = n(t), a = s?.startsWith("-"), l = a ? "-" : "", u = a ? s?.substring(1) : s;
  return `${l}${e}${o}${u}`;
}
function H7({ customProperties: e, value: t, propValues: n, parseValue: o = (s) => s }) {
  let s = {};
  if (!(!t || typeof t == "string" && n.includes(t))) {
    if (typeof t == "string" && (s = Object.fromEntries(e.map((a) => [a, t]))), mo(t)) {
      const a = t;
      for (const l in a) {
        if (!um(a, l) || !Iu.includes(l)) continue;
        const u = a[l];
        if (!n.includes(u)) for (const f of e) s = { [l === "initial" ? f : `${f}-${l}`]: u, ...s };
      }
    }
    for (const a in s) {
      const l = s[a];
      l !== void 0 && (s[a] = o(l));
    }
    return s;
  }
}
function i1(...e) {
  let t = {};
  for (const n of e) n && (t = { ...t, ...n });
  return Object.keys(t).length ? t : void 0;
}
function W7(...e) {
  return Object.assign({}, ...e);
}
function fm(e, ...t) {
  let n, o;
  const s = { ...e }, a = W7(...t);
  for (const l in a) {
    let u = s[l];
    const f = a[l];
    if (f.default !== void 0 && u === void 0 && (u = f.default), f.type === "enum" && ![f.default, ...f.values].includes(u) && !mo(u) && (u = f.default), s[l] = u, "className" in f && f.className) {
      delete s[l];
      const h = "responsive" in f;
      if (!u || mo(u) && !h) continue;
      if (mo(u) && (f.default !== void 0 && u.initial === void 0 && (u.initial = f.default), f.type === "enum" && ([f.default, ...f.values].includes(u.initial) || (u.initial = f.default))), f.type === "enum") {
        const m = dm({ allowArbitraryValues: !1, value: u, className: f.className, propValues: f.values, parseValue: f.parseValue });
        n = jr(n, m);
        continue;
      }
      if (f.type === "string" || f.type === "enum | string") {
        const m = f.type === "string" ? [] : f.values, [v, b] = z7({ className: f.className, customProperties: f.customProperties, propValues: m, parseValue: f.parseValue, value: u });
        o = i1(o, b), n = jr(n, v);
        continue;
      }
      if (f.type === "boolean" && u) {
        n = jr(n, f.className);
        continue;
      }
    }
  }
  return s.className = jr(n, e.className), s.style = i1(o, e.style), s;
}
const Mr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], B7 = { m: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: Mr, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } };
function U7(e) {
  switch (e) {
    case "tomato":
    case "red":
    case "ruby":
    case "crimson":
    case "pink":
    case "plum":
    case "purple":
    case "violet":
      return "mauve";
    case "iris":
    case "indigo":
    case "blue":
    case "sky":
    case "cyan":
      return "slate";
    case "teal":
    case "jade":
    case "mint":
    case "green":
      return "sage";
    case "grass":
    case "lime":
      return "olive";
    case "yellow":
    case "amber":
    case "orange":
    case "brown":
    case "gold":
    case "bronze":
      return "sand";
    case "gray":
      return "gray";
  }
}
const Mt = { hasBackground: { default: !0 }, appearance: { default: "inherit" }, accentColor: { default: "indigo" }, grayColor: { default: "auto" }, panelBackground: { default: "translucent" }, radius: { default: "medium" }, scaling: { default: "100%" } }, gi = () => {
}, Bl = x.createContext(void 0), hm = x.forwardRef((e, t) => x.useContext(Bl) === void 0 ? x.createElement(N7, { delayDuration: 200 }, x.createElement(m6, { dir: "ltr" }, x.createElement(pm, { ...e, ref: t }))) : x.createElement(ku, { ...e, ref: t }));
hm.displayName = "Theme";
const pm = x.forwardRef((e, t) => {
  const { appearance: n = Mt.appearance.default, accentColor: o = Mt.accentColor.default, grayColor: s = Mt.grayColor.default, panelBackground: a = Mt.panelBackground.default, radius: l = Mt.radius.default, scaling: u = Mt.scaling.default, hasBackground: f = Mt.hasBackground.default, ...h } = e, [m, v] = x.useState(n);
  x.useEffect(() => v(n), [n]);
  const [b, C] = x.useState(o);
  x.useEffect(() => C(o), [o]);
  const [T, S] = x.useState(s);
  x.useEffect(() => S(s), [s]);
  const [E, k] = x.useState(a);
  x.useEffect(() => k(a), [a]);
  const [R, M] = x.useState(l);
  x.useEffect(() => M(l), [l]);
  const [L, N] = x.useState(u);
  return x.useEffect(() => N(u), [u]), x.createElement(ku, { ...h, ref: t, isRoot: !0, hasBackground: f, appearance: m, accentColor: b, grayColor: T, panelBackground: E, radius: R, scaling: L, onAppearanceChange: v, onAccentColorChange: C, onGrayColorChange: S, onPanelBackgroundChange: k, onRadiusChange: M, onScalingChange: N });
});
pm.displayName = "ThemeRoot";
const ku = x.forwardRef((e, t) => {
  const n = x.useContext(Bl), { asChild: o, isRoot: s, hasBackground: a, appearance: l = n?.appearance ?? Mt.appearance.default, accentColor: u = n?.accentColor ?? Mt.accentColor.default, grayColor: f = n?.resolvedGrayColor ?? Mt.grayColor.default, panelBackground: h = n?.panelBackground ?? Mt.panelBackground.default, radius: m = n?.radius ?? Mt.radius.default, scaling: v = n?.scaling ?? Mt.scaling.default, onAppearanceChange: b = gi, onAccentColorChange: C = gi, onGrayColorChange: T = gi, onPanelBackgroundChange: S = gi, onRadiusChange: E = gi, onScalingChange: k = gi, ...R } = e, M = o ? z1 : "div", L = f === "auto" ? U7(u) : f, N = e.appearance === "light" || e.appearance === "dark", $ = a === void 0 ? s || N : a;
  return x.createElement(Bl.Provider, { value: x.useMemo(() => ({ appearance: l, accentColor: u, grayColor: f, resolvedGrayColor: L, panelBackground: h, radius: m, scaling: v, onAppearanceChange: b, onAccentColorChange: C, onGrayColorChange: T, onPanelBackgroundChange: S, onRadiusChange: E, onScalingChange: k }), [l, u, f, L, h, m, v, b, C, T, S, E, k]) }, x.createElement(M, { "data-is-root-theme": s ? "true" : "false", "data-accent-color": u, "data-gray-color": L, "data-has-background": $ ? "true" : "false", "data-panel-background": h, "data-radius": m, "data-scaling": v, ref: t, ...R, className: jr("radix-themes", { light: l === "light", dark: l === "dark" }, R.className) }));
});
ku.displayName = "ThemeImpl";
const mm = (e) => {
  if (!x.isValidElement(e)) throw Error(`Expected a single React Element child, but got: ${x.Children.toArray(e).map((t) => typeof t == "object" && "type" in t && typeof t.type == "string" ? t.type : typeof t).join(", ")}`);
  return e;
}, $7 = z1, Or = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], V7 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: Or, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: Or, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: Or, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: Or, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: Or, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: Or, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: Or, responsive: !0 } }, pl = ["visible", "hidden", "clip", "scroll", "auto"], G7 = ["static", "relative", "absolute", "fixed", "sticky"], ho = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], Z7 = ["0", "1"], Y7 = ["0", "1"], X7 = { ...V7, ...Us, ...lm, position: { type: "enum", className: "rt-r-position", values: G7, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: ho, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: ho, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: ho, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: ho, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: ho, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: pl, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: pl, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: pl, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: Z7, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: Y7, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 } }, ml = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], K7 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: ml, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: ml, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: ml, responsive: !0 } }, q7 = ["div", "span"], J7 = ["none", "inline-flex", "flex"], Q7 = ["row", "column", "row-reverse", "column-reverse"], e8 = ["start", "center", "end", "baseline", "stretch"], t8 = ["start", "center", "end", "between"], n8 = ["nowrap", "wrap", "wrap-reverse"], r8 = { as: { type: "enum", values: q7, default: "div" }, ...cm, display: { type: "enum", className: "rt-r-display", values: J7, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: Q7, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: e8, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: t8, parseValue: i8, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: n8, responsive: !0 }, ...K7 };
function i8(e) {
  return e === "between" ? "space-between" : e;
}
const Au = x.forwardRef((e, t) => {
  const { className: n, asChild: o, as: s = "div", ...a } = fm(e, r8, X7, B7);
  return x.createElement(o ? $7 : s, { ...a, ref: t, className: jr("rt-Flex", n) });
});
Au.displayName = "Flex";
const o8 = ["1", "2", "3", "4"], s8 = { ...cm, size: { type: "enum", className: "rt-r-size", values: o8, default: "2", responsive: !0 }, width: Us.width, minWidth: Us.minWidth, maxWidth: { ...Us.maxWidth, default: "480px" }, ...lm }, gm = (e) => x.createElement(m7, { ...e });
gm.displayName = "Popover.Root";
const vm = x.forwardRef(({ children: e, ...t }, n) => x.createElement(v7, { ...t, ref: n, asChild: !0 }, mm(e)));
vm.displayName = "Popover.Trigger";
const ym = x.forwardRef((e, t) => {
  const { className: n, forceMount: o, container: s, ...a } = fm(e, s8);
  return x.createElement(y7, { container: s, forceMount: o }, x.createElement(hm, { asChild: !0 }, x.createElement(b7, { align: "start", sideOffset: 8, collisionPadding: 10, ...a, ref: t, className: jr("rt-PopperContent", "rt-PopoverContent", n) })));
});
ym.displayName = "Popover.Content";
const a8 = x.forwardRef(({ children: e, ...t }, n) => x.createElement(x7, { ...t, ref: n, asChild: !0 }, mm(e)));
a8.displayName = "Popover.Close";
const c8 = x.forwardRef(({ children: e, ...t }, n) => x.createElement(g7, { ...t, ref: n }));
c8.displayName = "Popover.Anchor";
const l8 = ({ trigger: e, children: t, ...n }) => {
  const o = (s) => {
    s.stopPropagation();
  };
  return /* @__PURE__ */ p.jsxs(gm, { ...n, children: [
    e && /* @__PURE__ */ p.jsx(vm, { onClick: o, children: e }),
    /* @__PURE__ */ p.jsx(ym, { maxHeight: "250px", children: t })
  ] });
}, fk = ({
  size: e,
  children: t
}) => {
  const [n, o] = Ke(!1);
  return /* @__PURE__ */ p.jsxs(
    qx,
    {
      id: "artboard",
      onDragStateChange: o,
      style: {
        width: e.width,
        height: e.height
      },
      className: "designcombo_scene pointer-events-auto mt-3.5 bg-black",
      children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            style: {
              width: e.width,
              height: e.height
            },
            className: `pointer-events-none absolute z-50 mt-3.5 transition-colors duration-200 ease-in-out ${n ? "border-4 border-dashed border-white bg-white/[0.075]" : "bg-transparent"} shadow-[0_0_0_5000px_#1D1D1F]`
          }
        ),
        t
      ]
    }
  );
}, hk = 100, pk = 30, mk = 18, gk = 14, vk = 30, yk = 24, bk = 16, u8 = 12, xk = "Regular", d8 = "sans-serif", Ea = 188, Ul = 40, wk = 4e3, f8 = 1920, h8 = 1080, p8 = 60, m8 = 1e3 / p8, Ck = 2e6, Sk = 1e7, _k = 48e3, Tk = 192e3, bm = 2.3, Ek = f8 / bm, Ik = h8 / bm, kk = 184, Ak = 348, Rk = 512, Pk = 300, Mk = 0, Ok = 5e3, Lk = 1, Dk = 0, jk = 0, Nk = 0, Fk = 359, zk = 1, Hk = 0, Wk = !1, Bk = !1, Uk = 0, $k = 2, Vk = 0.01, Gk = 1, Zk = 0, Yk = 3, Xk = 0.01, Kk = 1, qk = 0, Jk = 1, Qk = 0.01, eA = 0.5, tA = -1e3, nA = 1e3, rA = 1, iA = 1, oA = 0, sA = 1, aA = 0.01, cA = 1, lA = 0, uA = 1, dA = 0.01, fA = 0, hA = 0.5, pA = 10, mA = 0.01, gA = 1, vA = 0, yA = 1, bA = 0.01, xA = 1, Ru = 16, o1 = 80;
function g8(e) {
  if (!e) return "0";
  const t = e / Ea, n = Math.trunc(t) % 60, o = Math.trunc(t / 60) % 60, s = Math.trunc(t / 3600) % 60, l = [
    Math.trunc(t / 216e3).toString(),
    s.toString(),
    o.toString(),
    n.toString()
  ];
  return t < 60 ? `${l[3].padStart(2, "0")}f` : t < 3600 ? `${l[2].padStart(1, "0")}s` : t < 216e3 ? `${l[1].padStart(2, "0")}:${l[2].padStart(
    2,
    "0"
  )}` : `${l[0].padStart(2, "0")}:${l[1].padStart(
    2,
    "0"
  )}:${l[2].padStart(2, "0")}`;
}
function wA(e, t = !1) {
  if (!e) return "00:00";
  const o = 1e3 / 60;
  if (e < 1e3)
    return t ? `${Math.floor(e / o)}f` : `${(e / 1e3).toFixed(1)}s`;
  const s = Math.floor(e / 1e3);
  if (s < 60)
    return `${s}s`;
  const a = Math.floor(s / 60);
  if (a < 60) {
    const h = s % 60;
    return `${a.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
  }
  const l = Math.floor(a / 60), u = a % 60, f = s % 60;
  return `${l.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
}
function ea(e, t) {
  return e.map((n) => ({
    ...n,
    items: n.items.filter((o) => !t.includes(o))
  }));
}
const v8 = ({ frame: e }, { fps: t }) => {
  const n = e / t, o = Math.floor(n / 3600), s = n % 3600, a = Math.floor(s / 60), l = Math.floor(s % 60), u = Math.floor(
    (s - Math.floor(s)) * 100
  );
  return o > 0 ? `${o}:${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}` : `${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
}, y8 = ({ time: e }) => {
  const t = e / 1e3, n = Math.floor(t / 3600), o = t % 3600, s = Math.floor(o / 60), a = Math.floor(o % 60), l = Math.floor(
    (o - Math.floor(o)) * 100
  );
  return n > 0 ? `${n}:${s.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}` : `${s.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
}, b8 = () => {
  const e = document.getElementById("video-current-time");
  return (e ? parseFloat(e.getAttribute("data-current-time") ?? "") : 0) * 1e3;
}, xn = [
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
function xm(e, t) {
  let n = -1, o = e.length - 1;
  for (; 1 + n < o; ) {
    const s = n + (o - n >> 1);
    t(e[s], s, e) ? o = s : n = s;
  }
  return o;
}
function CA(e, t = 1) {
  const n = () => {
    const f = Math.max(0, Ul), m = document.getElementById(
      "designcombo-timeline-canvas"
    )?.offsetWidth ?? document.body.offsetWidth;
    return Math.max(1, m - f);
  }, o = () => typeof e == "number" ? Xe(e, t) : T8(e, t), s = n() / o(), a = t * s;
  return {
    segments: 5,
    index: xm(xn, (u) => u.zoom > a),
    zoom: a,
    unit: 1 / a
  };
}
function SA(e) {
  return xn[e];
}
function x8(e) {
  return w8(e) || xn[0];
}
const w8 = (e) => {
  const t = xn.filter(
    (o) => o.zoom < e.zoom
  );
  return t.length === 0 ? null : t.reduce(
    (o, s) => s.zoom > o.zoom ? s : o
  );
}, C8 = (e) => {
  const t = xn.filter(
    (o) => o.zoom > e.zoom
  );
  return t.length === 0 ? null : t.reduce(
    (o, s) => s.zoom < o.zoom ? s : o
  );
};
function S8(e) {
  return C8(e) || xn[xn.length - 1];
}
function _A(e) {
  const t = xn.at(-1), n = e === t, s = _8(e) - (n ? 1 : 2);
  return Math.max(0, s);
}
function _8(e) {
  const t = xm(xn, (n) => n.zoom > e.zoom);
  return Math.min(xn.length - 1, t);
}
function Xe(e, t = 1, n = 1) {
  const o = Ea * t;
  return e * (60 / 1e3) * o / n;
}
function rn(e, t = 1) {
  const n = Ea * t;
  return e / n * m8;
}
function T8(e, t = 1) {
  return Xe(e, t);
}
const TA = Math.floor(Math.random() * 1e3) + 1;
function wm(e, t = 1) {
  const n = [], o = Math.floor(t), s = (a, l) => {
    for (const u of a)
      Array.isArray(u) && l < o ? s(u, l + 1) : n.push(u);
  };
  return s(e, 0), n;
}
function Cm(e, t) {
  const n = t.sort((s, a) => s.tempIndex - a.tempIndex), o = [];
  for (const s of n)
    s.tempIndex < 0 && o.push(s);
  o.push(e);
  for (const s of n)
    s.tempIndex >= 0 && o.push(s);
  return o;
}
const s1 = {
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
}, E8 = (e) => {
  const t = e.map(
    (n) => new FontFace(n.fontFamily, `url(${n.fontUrl})`).load()
    // .catch((error: unknown) => error),
  );
  return t.length === 0 ? Promise.resolve(!0) : new Promise((n, o) => {
    Promise.all(t).then((s) => {
      s.forEach((a) => {
        a instanceof FontFace && a.family && (document.fonts.add(a), n(!0));
      });
    }).catch((s) => {
      o(s);
    });
  });
}, Gt = D1((e) => ({
  timeline: null,
  size: {
    width: 1920,
    height: 1080
  },
  aspectRatio: 16 / 9,
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
  setTimeline: (t) => {
    e(() => ({
      timeline: t
    }));
  },
  setScale: (t) => {
    e(() => ({
      scale: t
    }));
  },
  setScroll: (t) => {
    e(() => ({
      scroll: t
    }));
  },
  setState: async (t) => {
    e({ ...t });
  },
  setPlayerRef: (t) => {
    e({ playerRef: t });
  }
}));
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I8 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sm = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var k8 = {
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
const A8 = O1(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: l,
    ...u
  }, f) => Cl(
    "svg",
    {
      ref: f,
      ...k8,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Sm("lucide", s),
      ...u
    },
    [
      ...l.map(([h, m]) => Cl(h, m)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (e, t) => {
  const n = O1(
    ({ className: o, ...s }, a) => Cl(A8, {
      ref: a,
      iconNode: t,
      className: Sm(`lucide-${I8(e)}`, o),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R8 = ae("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P8 = ae("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M8 = ae("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O8 = ae("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L8 = ae("ChartLine", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D8 = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j8 = ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N8 = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F8 = ae("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z8 = ae("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H8 = ae("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W8 = ae("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B8 = ae("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U8 = ae("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $8 = ae("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V8 = ae("FolderClosed", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G8 = ae("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = ae("Image", [
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
const Z8 = ae("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y8 = ae("LayoutPanelLeft", [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X8 = ae("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K8 = ae("MessagesSquare", [
  ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z", key: "p1xzt8" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q8 = ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = ae("Music", [
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
const J8 = ae("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q8 = ae("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eC = ae("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tC = ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nC = ae("Puzzle", [
  [
    "path",
    {
      d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
      key: "i0oyt7"
    }
  ]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rC = ae("RectangleHorizontal", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iC = ae("RectangleVertical", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sC = ae("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aC = ae("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = ae("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = ae("SquareSplitHorizontal", [
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
const lC = ae("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = ae("SunMedium", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = ae("Trash", [
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
const dC = ae("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = ae("Type", [
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
const u1 = ae("Upload", [
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
const fC = ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hC = ae("Video", [
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
const pC = ae("WandSparkles", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mC = ae("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gC = ae("ZoomIn", [
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
const vC = ae("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), Mu = (e) => {
  const t = Dr(
    (o) => {
      if (!e?.current)
        return () => {
        };
      const s = () => {
        o();
      };
      return e.current.addEventListener("frameupdate", s), () => {
        e.current && e.current.removeEventListener("frameupdate", s);
      };
    },
    [e]
  );
  return v3(
    t,
    () => e?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
}, Ia = () => {
  const [e, t] = Ke(!1);
  return ut(() => {
    const o = xe.subject.pipe(
      Wn(({ key: s }) => s.startsWith(Tx))
    ).subscribe((s) => {
      s.key === Jp ? t(!0) : s.key === Ys && t(!1);
    });
    return () => o.unsubscribe();
  }, []), e;
}, yC = () => {
  const [e, t] = Ke(!1), { duration: n, fps: o, scale: s, playerRef: a, activeIds: l } = Gt(), u = Mu(a), f = () => {
    xe.dispatch(Vp);
  }, h = () => {
    xe.dispatch(Zp, {
      payload: {},
      options: {
        time: b8()
      }
    });
  }, m = (C) => {
    xe.dispatch(qp, {
      payload: {
        scale: C
      }
    });
  }, v = () => {
    xe.dispatch(Up);
  }, b = () => {
    xe.dispatch($p);
  };
  return ut(() => (a?.current?.addEventListener("play", () => {
    t(!0);
  }), a?.current?.addEventListener("pause", () => {
    t(!1);
  }), () => {
    a?.current?.removeEventListener("play", () => {
      t(!0);
    }), a?.current?.removeEventListener("pause", () => {
      t(!1);
    });
  }), [a]), /* @__PURE__ */ p.jsx(
    "div",
    {
      style: {
        position: "relative",
        height: "50px",
        boxShadow: "inset 0 1px 0 0 #27272a",
        flex: "none"
      },
      className: "bg-background",
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          style: {
            position: "absolute",
            height: 50,
            width: "100%",
            display: "flex",
            alignItems: "center"
          },
          children: /* @__PURE__ */ p.jsxs(
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
                /* @__PURE__ */ p.jsxs("div", { className: "flex px-2", children: [
                  /* @__PURE__ */ p.jsxs(
                    Le,
                    {
                      disabled: !l.length,
                      onClick: f,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ p.jsx(Tm, { size: 14 }),
                        " Delete"
                      ]
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    Le,
                    {
                      disabled: !l.length,
                      onClick: h,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ p.jsx(c1, { size: 15 }),
                        " Split"
                      ]
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    Le,
                    {
                      disabled: !l.length,
                      onClick: () => {
                        xe.dispatch(Gp);
                      },
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ p.jsx(c1, { size: 15 }),
                        " Clone"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-center", children: [
                  /* @__PURE__ */ p.jsxs("div", { children: [
                    /* @__PURE__ */ p.jsx(
                      Le,
                      {
                        onClick: f,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ p.jsx(aC, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ p.jsx(
                      Le,
                      {
                        onClick: () => {
                          if (e)
                            return b();
                          v();
                        },
                        variant: "ghost",
                        size: "icon",
                        children: e ? /* @__PURE__ */ p.jsx(Q8, { size: 14 }) : /* @__PURE__ */ p.jsx(eC, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ p.jsx(
                      Le,
                      {
                        onClick: h,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ p.jsx(cC, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ p.jsxs(
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
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "font-medium text-zinc-200",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            "data-current-time": u / o,
                            id: "video-current-time",
                            children: v8({ frame: u }, { fps: o })
                          }
                        ),
                        /* @__PURE__ */ p.jsx("span", { children: "/" }),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "text-muted-foreground",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            children: y8({ time: n })
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ p.jsx(
                  bC,
                  {
                    scale: s,
                    onChangeTimelineScale: m,
                    duration: n
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, bC = ({
  scale: e,
  onChangeTimelineScale: t,
  duration: n
}) => {
  const o = () => {
    const a = x8(e);
    t(a);
  }, s = () => {
    const a = S8(e);
    t(a);
  };
  return /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ p.jsxs("div", { className: "flex border-l border-border pl-4 pr-2", children: [
    /* @__PURE__ */ p.jsx(
      Le,
      {
        size: "icon",
        variant: "ghost",
        onClick: o,
        disabled: e.index === 0,
        children: /* @__PURE__ */ p.jsx(vC, { size: 16 })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Le,
      {
        size: "icon",
        variant: "ghost",
        onClick: s,
        disabled: e.index === 20,
        children: /* @__PURE__ */ p.jsx(gC, { size: 16 })
      }
    )
  ] }) });
}, xC = [
  {
    id: "111",
    details: {
      src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\KhDhy5qKkppcfCMWV9md5w.mpeg",
      text: "Voiceover"
    },
    name: "Super",
    type: "audio",
    metadata: {
      author: "Adilet"
    },
    display: { from: 0 }
  },
  {
    id: "222",
    details: {
      src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\SQCTWQnVjRBzbUjCMyZd32.mpeg",
      text: "Voiceover"
    },
    name: "Super",
    type: "audio",
    metadata: {
      author: "Adilet2"
    },
    display: { from: 0 }
  },
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
], wC = [
  {
    id: "123",
    details: {
      src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/2/17/21\\E6FG5Gp3w6z9ws5ysPCq67.webp"
    },
    preview: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/2/17/21\\E6FG5Gp3w6z9ws5ysPCq67.webp",
    type: "image"
  },
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
], CC = [
  {
    id: "11",
    details: {
      src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\fdcKLDioCK6fNMFSaV9no9.mp4",
      text: "Video"
    },
    type: "video",
    preview: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\MjU9BA9oBAcasKPWW89oAq.webp",
    display: { from: 0 }
  },
  {
    id: "22",
    details: {
      src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\NarjF5LQKZ3RE8cg5BAEZa.mp4",
      text: "Video"
    },
    type: "video",
    preview: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\br3G6fanEMrVZCXAmYpWdL.webp",
    display: { from: 0 }
  },
  {
    id: "33",
    details: {
      src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\LUB9JnQSSeVJdzRrq8PnAr.mp4",
      text: "Video"
    },
    type: "video",
    preview: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\N8SF2nTVffFxn8fwA7VZZM.webp",
    display: { from: 0 }
  },
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
], SC = [
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
], EA = [
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
], _C = () => {
  const e = Ia();
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col overflow-auto", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Transitions" }),
    /* @__PURE__ */ p.jsx(_n, { children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-3 gap-2 px-4", children: SC.map((t, n) => /* @__PURE__ */ p.jsx(
      TC,
      {
        transition: t,
        shouldDisplayPreview: !e
      },
      n
    )) }) })
  ] });
}, TC = ({
  transition: e,
  shouldDisplayPreview: t
}) => {
  const n = Ct.useMemo(
    () => ({
      backgroundImage: `url(${e.preview})`,
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    [e.preview]
  );
  return /* @__PURE__ */ p.jsx(
    ga,
    {
      data: e,
      renderCustomPreview: /* @__PURE__ */ p.jsx("div", { style: n }),
      shouldDisplayPreview: t,
      children: /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(
          "div",
          {
            style: n,
            draggable: !1
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "flex h-6 items-center overflow-ellipsis text-nowrap text-[12px] capitalize text-muted-foreground", children: e.name || e.type })
      ] })
    }
  );
}, EC = () => {
  const e = () => {
    xe.dispatch(Bp, {
      payload: {
        id: tt(),
        display: {
          from: 0,
          to: 5e3
        },
        details: {
          text: "Heading and some body",
          fontSize: 120,
          width: 600,
          fontUrl: s1.url,
          fontFamily: s1.postScriptName,
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
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Text" }),
    /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 px-4", children: /* @__PURE__ */ p.jsx(
      Le,
      {
        draggable: !1,
        onClick: e,
        variant: "secondary",
        className: "w-full",
        children: "Add text"
      }
    ) })
  ] });
}, IC = () => {
  const e = pn(null), t = (o) => {
    n(o);
  }, n = async (o) => {
    const s = o[0].type;
    s.includes("audio") && xe.dispatch(Ao, {
      payload: {
        id: tt(),
        details: {
          src: URL.createObjectURL(o[0]),
          volume: 50
        }
      }
    }), s.includes("video") && xe.dispatch(ko, {
      payload: {
        id: tt(),
        display: {
          from: 2e3,
          to: 7e3
        },
        details: {
          src: URL.createObjectURL(o[0]),
          name: o[0].name
        }
      }
    }), s.includes("image") && xe.dispatch(Ro, {
      payload: {
        id: tt(),
        details: {
          src: URL.createObjectURL(o[0])
        }
      }
    });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Your media" }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: e,
        id: "file-upload-handle",
        type: "file",
        accept: "audio/*,video/*,image/*",
        onChange: (o) => t(Array.from(o.target.files || [])),
        className: "hidden"
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "px-4 py-2", children: /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsxs(
      Wp,
      {
        defaultValue: "projects",
        className: "w-full",
        children: [
          /* @__PURE__ */ p.jsxs(uu, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ p.jsx(yo, { value: "projects", children: "Project" }),
            /* @__PURE__ */ p.jsx(yo, { value: "workspace", children: "Workspace" })
          ] }),
          /* @__PURE__ */ p.jsxs(bo, { value: "projects", children: [
            /* @__PURE__ */ p.jsxs(
              Le,
              {
                onClick: () => {
                  e.current?.click();
                },
                className: "flex w-full gap-2",
                variant: "secondary",
                children: [
                  /* @__PURE__ */ p.jsx(u1, { size: 16 }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ p.jsx("div", {})
          ] }),
          /* @__PURE__ */ p.jsx(bo, { value: "workspace", children: /* @__PURE__ */ p.jsxs(
            Le,
            {
              onClick: () => {
                e.current?.click();
              },
              className: "flex w-full gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ p.jsx(u1, { size: 16 }),
                " Upload"
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ p.jsx(_n, { children: /* @__PURE__ */ p.jsx("div", { className: "masonry-sm px-4" }) })
  ] });
}, kC = () => {
  const e = Ia(), t = (n) => {
    xe.dispatch(Ao, {
      payload: n,
      options: {}
    });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audios" }),
    /* @__PURE__ */ p.jsx(_n, { children: /* @__PURE__ */ p.jsx("div", { className: "flex flex-col px-2", children: xC.map((n, o) => /* @__PURE__ */ p.jsx(
      AC,
      {
        shouldDisplayPreview: !e,
        handleAddAudio: t,
        audio: n
      },
      o
    )) }) })
  ] });
}, AC = ({
  handleAddAudio: e,
  audio: t,
  shouldDisplayPreview: n
}) => {
  const o = Ct.useMemo(
    () => ({
      backgroundImage: "url(https://cdn.designcombo.dev/thumbnails/music-preview.png)",
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    []
  );
  return /* @__PURE__ */ p.jsx(
    ga,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ p.jsx("div", { style: o }),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ p.jsxs(
        "div",
        {
          draggable: !1,
          onClick: () => e(t),
          style: {
            display: "grid",
            gridTemplateColumns: "48px 1fr"
          },
          className: "flex cursor-pointer gap-4 px-2 py-1 text-sm hover:bg-zinc-800/70",
          children: [
            /* @__PURE__ */ p.jsx("div", { className: "flex h-12 items-center justify-center bg-zinc-800", children: /* @__PURE__ */ p.jsx(_m, { width: 16 }) }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ p.jsx("div", { children: t.name }),
              /* @__PURE__ */ p.jsx("div", { className: "text-zinc-400", children: t.metadata?.author })
            ] })
          ]
        }
      )
    }
  );
}, RC = () => {
  const e = Ia(), t = (n) => {
    xe.dispatch(Ro, {
      payload: n,
      options: {
        trackId: "main"
      }
    });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Photos" }),
    /* @__PURE__ */ p.jsx(_n, { children: /* @__PURE__ */ p.jsx("div", { className: "masonry-sm px-4", children: wC.map((n, o) => /* @__PURE__ */ p.jsx(
      PC,
      {
        image: n,
        shouldDisplayPreview: !e,
        handleAddImage: t
      },
      o
    )) }) })
  ] });
}, PC = ({
  handleAddImage: e,
  image: t,
  shouldDisplayPreview: n
}) => {
  const o = Ct.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ p.jsx(
    ga,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ p.jsx("div", { style: o }),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          onClick: () => e({
            id: tt(),
            details: {
              src: t.details.src
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ p.jsx(
            "img",
            {
              draggable: !1,
              src: t.preview,
              className: "h-full w-full rounded-md object-cover",
              alt: "image"
            }
          )
        }
      )
    }
  );
}, MC = () => {
  const e = Ia(), t = (n) => {
    xe.dispatch(ko, {
      payload: n,
      options: {
        resourceId: "main"
      }
    });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Videos" }),
    /* @__PURE__ */ p.jsx(_n, { children: /* @__PURE__ */ p.jsx("div", { className: "masonry-sm px-4", children: CC.map((n, o) => /* @__PURE__ */ p.jsx(
      OC,
      {
        video: n,
        shouldDisplayPreview: !e,
        handleAddVideo: t
      },
      o
    )) }) })
  ] });
}, OC = ({
  handleAddVideo: e,
  video: t,
  shouldDisplayPreview: n
}) => {
  const o = Ct.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ p.jsx(
    ga,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ p.jsx(
        "div",
        {
          style: o,
          className: "draggable"
        }
      ),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          onClick: () => e({
            ...t,
            id: tt(),
            details: {
              src: t.details.src,
              ...t.details
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ p.jsx(
            "img",
            {
              draggable: !1,
              src: t.preview,
              className: "h-full w-full rounded-md object-cover",
              alt: "image"
            }
          )
        }
      )
    }
  );
}, Pi = D1((e) => ({
  activeMenuItem: null,
  showMenuItem: !1,
  cropTarget: null,
  showControlItem: !1,
  showToolboxItem: !1,
  activeToolboxItem: null,
  setCropTarget: (t) => e({ cropTarget: t }),
  setActiveMenuItem: (t) => e({ activeMenuItem: t }),
  setShowMenuItem: (t) => e({ showMenuItem: t }),
  setShowControlItem: (t) => e({ showControlItem: t }),
  setShowToolboxItem: (t) => e({ showToolboxItem: t }),
  setActiveToolboxItem: (t) => e({ activeToolboxItem: t })
})), LC = ({ children: e }) => {
  const { showMenuItem: t, setShowMenuItem: n } = Pi(), o = () => {
    n(!1);
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      style: {
        left: t ? "0" : "-100%",
        transition: "left 0.25s ease-in-out",
        zIndex: 200
      },
      className: "absolute top-1/2 mt-6 flex h-[calc(100%-32px-64px)] w-[340px] -translate-y-1/2 rounded-lg shadow-lg",
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "w-[74px]" }),
        /* @__PURE__ */ p.jsxs("div", { className: "relative flex flex-1 bg-background/80 backdrop-blur-lg backdrop-filter", children: [
          /* @__PURE__ */ p.jsx(
            Le,
            {
              variant: "ghost",
              className: "absolute right-2 top-2 h-8 w-8 text-muted-foreground",
              size: "icon",
              children: /* @__PURE__ */ p.jsx(
                Pu,
                {
                  width: 16,
                  onClick: o
                }
              )
            }
          ),
          e
        ] })
      ]
    }
  );
}, DC = () => {
  const { activeMenuItem: e } = Pi();
  return e === "transitions" ? /* @__PURE__ */ p.jsx(_C, {}) : e === "texts" ? /* @__PURE__ */ p.jsx(EC, {}) : e === "videos" ? /* @__PURE__ */ p.jsx(MC, {}) : e === "audios" ? /* @__PURE__ */ p.jsx(kC, {}) : e === "images" ? /* @__PURE__ */ p.jsx(RC, {}) : e === "uploads" ? /* @__PURE__ */ p.jsx(IC, {}) : null;
}, jC = () => /* @__PURE__ */ p.jsx(LC, { children: /* @__PURE__ */ p.jsx(DC, {}) }), nn = {
  add: tC,
  audio: _m,
  arrowRight: R8,
  arrowUpRight: P8,
  billing: H8,
  bookOpen: M8,
  captions: O8,
  chevronLeft: j8,
  chevronRight: N8,
  check: D8,
  close: Pu,
  copy: z8,
  dashboard: Y8,
  ellipsis: B8,
  folder: V8,
  gitHub: ({ ...e }) => /* @__PURE__ */ p.jsx(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "github",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 496 512",
      ...e,
      children: /* @__PURE__ */ p.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        }
      )
    }
  ),
  google: ({ ...e }) => /* @__PURE__ */ p.jsx(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "google",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 488 512",
      ...e,
      children: /* @__PURE__ */ p.jsx(
        "path",
        {
          d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
          fill: "currentColor"
        }
      )
    }
  ),
  nextjs: ({ ...e }) => /* @__PURE__ */ p.jsx(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "nextjs",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 15 15",
      ...e,
      children: /* @__PURE__ */ p.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
        }
      )
    }
  ),
  help: F8,
  home: G8,
  image: a1,
  landscape: rC,
  laptop: Z8,
  lineChart: L8,
  logo: nC,
  media: a1,
  messages: K8,
  moon: q8,
  package: J8,
  page: $8,
  portrait: iC,
  post: U8,
  preset: mC,
  search: oC,
  square: lC,
  redo: ({ ...e }) => /* @__PURE__ */ p.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ p.jsx(
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
  shapes: ({ ...e }) => /* @__PURE__ */ p.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ p.jsx("g", { clipPath: "url(#clip0_2077_2705)", children: /* @__PURE__ */ p.jsx(
          "path",
          {
            d: "M3.75 12H2.25V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H9.75V20.25H3.75V12ZM21 21.75H12.75C12.6197 21.75 12.4916 21.716 12.3784 21.6514C12.2652 21.5868 12.1708 21.4938 12.1045 21.3816C12.0382 21.2694 12.0022 21.1419 12.0002 21.0116C11.9982 20.8813 12.0302 20.7527 12.093 20.6385L16.218 13.1385C16.2821 13.0203 16.377 12.9218 16.4928 12.8534C16.6085 12.7849 16.7406 12.7492 16.875 12.75C17.1322 12.75 17.3895 12.879 17.532 13.1385L21.657 20.6385C21.7198 20.7527 21.7518 20.8813 21.7498 21.0116C21.7478 21.1419 21.7118 21.2694 21.6455 21.3816C21.5792 21.4938 21.4848 21.5868 21.3716 21.6514C21.2584 21.716 21.1303 21.75 21 21.75ZM14.0182 20.25H19.7318L16.875 15.0563L14.0182 20.25ZM20.25 2.25H12V3.75H20.25V14.244H21.75V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM8.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V8.25C2.25 8.64782 2.40804 9.02936 2.68934 9.31066C2.97064 9.59196 3.35218 9.75 3.75 9.75H8.25C8.64782 9.75 9.02936 9.59196 9.31066 9.31066C9.59196 9.02936 9.75 8.64782 9.75 8.25V3.75C9.75 3.35218 9.59196 2.97064 9.31066 2.68934C9.02936 2.40804 8.64782 2.25 8.25 2.25ZM8.25 8.25H3.75V3.75H8.25V8.25Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ p.jsx("defs", { children: /* @__PURE__ */ p.jsx("clipPath", { id: "clip0_2077_2705", children: /* @__PURE__ */ p.jsx(
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
  settings: sC,
  smart: pC,
  spinner: X8,
  sun: uC,
  templates: ({ ...e }) => /* @__PURE__ */ p.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ p.jsx("g", { clipPath: "url(#clip0_2077_2714)", children: /* @__PURE__ */ p.jsx(
          "path",
          {
            d: "M19.5 4.5V7.5H4.5V4.5H19.5ZM19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V7.5C3 7.89782 3.15804 8.27936 3.43934 8.56066C3.72064 8.84196 4.10218 9 4.5 9H19.5C19.8978 9 20.2794 8.84196 20.5607 8.56066C20.842 8.27936 21 7.89782 21 7.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM7.5 12V19.5H4.5V12H7.5ZM7.5 10.5H4.5C4.10218 10.5 3.72064 10.658 3.43934 10.9393C3.15804 11.2206 3 11.6022 3 12V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H7.5C7.89782 21 8.27936 20.842 8.56066 20.5607C8.84196 20.2794 9 19.8978 9 19.5V12C9 11.6022 8.84196 11.2206 8.56066 10.9393C8.27936 10.658 7.89782 10.5 7.5 10.5ZM19.5 12V19.5H12V12H19.5ZM19.5 10.5H12C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12V19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V12C21 11.6022 20.842 11.2206 20.5607 10.9393C20.2794 10.658 19.8978 10.5 19.5 10.5Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ p.jsx("defs", { children: /* @__PURE__ */ p.jsx("clipPath", { id: "clip0_2077_2714", children: /* @__PURE__ */ p.jsx(
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
  text: l1,
  trash: Tm,
  twitter: ({ ...e }) => /* @__PURE__ */ p.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "twitter",
      role: "img",
      ...e,
      children: /* @__PURE__ */ p.jsx(
        "path",
        {
          d: "M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0",
          fill: "currentColor"
        }
      )
    }
  ),
  type: l1,
  undo: ({ ...e }) => /* @__PURE__ */ p.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ p.jsx(
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
  upload: ({ ...e }) => /* @__PURE__ */ p.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ p.jsxs("g", { clipPath: "url(#clip0_2077_2699)", children: [
          /* @__PURE__ */ p.jsx(
            "path",
            {
              d: "M8.25 13.5L9.3075 14.5575L11.25 12.6225V21.75H12.75V12.6225L14.6925 14.5575L15.75 13.5L12 9.75L8.25 13.5Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "path",
            {
              d: "M17.6249 16.5004H17.2499V15.0004H17.6249C18.52 15.0362 19.3927 14.715 20.0509 14.1074C20.7092 13.4997 21.0991 12.6555 21.1349 11.7604C21.1707 10.8653 20.8495 9.99264 20.2418 9.33438C19.6342 8.67613 18.79 8.28621 17.8949 8.25041H17.2499L17.1749 7.63541C17.0085 6.37275 16.3888 5.21362 15.4312 4.37395C14.4736 3.53428 13.2435 3.07132 11.9699 3.07132C10.6963 3.07132 9.46616 3.53428 8.50857 4.37395C7.55099 5.21362 6.93129 6.37275 6.76489 7.63541L6.74989 8.25041H6.10489C5.20979 8.28621 4.36557 8.67613 3.75795 9.33438C3.15033 9.99264 2.82909 10.8653 2.86489 11.7604C2.9007 12.6555 3.29062 13.4997 3.94887 14.1074C4.60712 14.715 5.47979 15.0362 6.37489 15.0004H6.74989V16.5004H6.37489C5.1722 16.4928 4.01477 16.0409 3.12513 15.2315C2.2355 14.4221 1.67646 13.3124 1.55549 12.1158C1.43453 10.9192 1.76018 9.72009 2.46983 8.74905C3.17949 7.77801 4.22305 7.10357 5.39989 6.85541C5.72367 5.3453 6.55552 3.99189 7.75663 3.02101C8.95774 2.05013 10.4555 1.52051 11.9999 1.52051C13.5443 1.52051 15.042 2.05013 16.2432 3.02101C17.4443 3.99189 18.2761 5.3453 18.5999 6.85541C19.7767 7.10357 20.8203 7.77801 21.53 8.74905C22.2396 9.72009 22.5653 10.9192 22.4443 12.1158C22.3233 13.3124 21.7643 14.4221 20.8747 15.2315C19.985 16.0409 18.8276 16.4928 17.6249 16.5004Z",
              fill: "currentColor"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("defs", { children: /* @__PURE__ */ p.jsx("clipPath", { id: "clip0_2077_2699", children: /* @__PURE__ */ p.jsx(
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
  user: fC,
  video: hC,
  warning: dC
};
function NC() {
  const { setActiveMenuItem: e, setShowMenuItem: t, activeMenuItem: n, showMenuItem: o } = Pi();
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      style: { zIndex: 201 },
      className: "absolute left-2.5 top-1/2 mt-6 flex w-14 -translate-y-1/2 flex-col items-center rounded-lg bg-background/80 py-2 shadow-lg backdrop-blur-lg backdrop-filter",
      children: [
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("uploads"), t(!0);
            },
            className: gt(
              o && n === "uploads" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.upload, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("texts"), t(!0);
            },
            className: gt(
              o && n === "texts" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.type, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("videos"), t(!0);
            },
            className: gt(
              o && n === "videos" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.video, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("captions"), t(!0);
            },
            className: gt(
              o && n === "captions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.captions, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("images"), t(!0);
            },
            className: gt(
              o && n === "images" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.image, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("shapes"), t(!0);
            },
            className: gt(
              o && n === "shapes" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.shapes, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("audios"), t(!0);
            },
            className: gt(
              o && n === "audios" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(nn.audio, { width: 20 })
          }
        ),
        /* @__PURE__ */ p.jsx(
          Le,
          {
            onClick: () => {
              e("transitions"), t(!0);
            },
            className: gt(
              o && n === "transitions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ p.jsx(
              "svg",
              {
                width: 20,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ p.jsx(
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
function FC() {
  const e = () => {
    xe.dispatch(Xp);
  }, t = () => {
    xe.dispatch(Kp);
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px"
      },
      className: "pointer-events-none absolute left-0 right-0 top-0 z-[205] flex h-[72px] items-center px-2",
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "pointer-events-auto flex h-14 items-center gap-2", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-md bg-background" }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex h-12 items-center bg-background px-1.5", children: [
            /* @__PURE__ */ p.jsx(
              Le,
              {
                onClick: e,
                className: "text-muted-foreground",
                variant: "ghost",
                size: "icon",
                children: /* @__PURE__ */ p.jsx(nn.undo, { width: 20 })
              }
            ),
            /* @__PURE__ */ p.jsx(
              Le,
              {
                onClick: t,
                className: "text-muted-foreground",
                variant: "ghost",
                size: "icon",
                children: /* @__PURE__ */ p.jsx(nn.redo, { width: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "pointer-events-auto flex h-14 items-center justify-center gap-2", children: /* @__PURE__ */ p.jsxs("div", { className: "flex h-12 items-center gap-4 rounded-md bg-background px-2.5", children: [
          /* @__PURE__ */ p.jsx("div", { className: "px-1 text-sm font-medium", children: "Untitled video" }),
          /* @__PURE__ */ p.jsx(HC, {})
        ] }) })
      ]
    }
  );
}
const zC = [
  {
    label: "16:9",
    icon: "landscape",
    description: "YouTube ads",
    value: {
      width: 1920,
      height: 1080,
      name: "16:9"
    }
  },
  {
    label: "9:16",
    icon: "portrait",
    description: "TikTok, YouTube Shorts",
    value: {
      width: 1080,
      height: 1920,
      name: "9:16"
    }
  },
  {
    label: "1:1",
    icon: "square",
    description: "Instagram, Facebook posts",
    value: {
      width: 1080,
      height: 1080,
      name: "1:1"
    }
  }
], HC = () => {
  const e = (t) => {
    xe.dispatch(e0, {
      payload: {
        ...t
      }
    });
  };
  return /* @__PURE__ */ p.jsx("div", { className: "text-sm", children: /* @__PURE__ */ p.jsx(
    l8,
    {
      trigger: /* @__PURE__ */ p.jsx(
        Le,
        {
          className: "border border-border",
          variant: "secondary",
          children: "Resize"
        }
      ),
      children: zC.map((t, n) => /* @__PURE__ */ p.jsx(
        WC,
        {
          label: t.label,
          icon: t.icon,
          value: t.value,
          handleResize: e,
          description: t.description
        },
        n
      ))
    }
  ) });
}, WC = ({
  label: e,
  icon: t,
  value: n,
  description: o,
  handleResize: s
}) => {
  const a = nn[t];
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      onClick: () => s(n),
      className: "flex cursor-pointer items-center rounded-md p-2 hover:bg-zinc-50/10",
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "w-8 text-muted-foreground", children: /* @__PURE__ */ p.jsx(a, { size: 20 }) }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("div", { children: e }),
          /* @__PURE__ */ p.jsx("div", { className: "text-xs text-muted-foreground", children: o })
        ] })
      ]
    }
  );
}, Ns = (e, t) => {
  const n = e.from / 1e3 * t, o = e.to / 1e3 * t - n;
  return { from: n, durationInFrames: o };
}, BC = {
  text: (e, t) => {
    const { fps: n, height: o, width: s } = t, { from: a, durationInFrames: l } = Ns(e.display, n);
    return /* @__PURE__ */ p.jsx(
      As,
      {
        from: a,
        durationInFrames: l,
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
        children: /* @__PURE__ */ p.jsx("div", { children: e.details.text })
      },
      e.id
    );
  },
  image: (e, t) => {
    const { fps: n } = t, { from: o, durationInFrames: s } = Ns(e.display, n);
    return /* @__PURE__ */ p.jsx(
      As,
      {
        from: o,
        durationInFrames: s,
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
        children: /* @__PURE__ */ p.jsx(Fs, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ p.jsx(
          S3,
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
  video: (e, t) => {
    const { fps: n } = t, { from: o, durationInFrames: s } = Ns(e.display, n), a = e.trim, l = e.details.crop || {
      x: 0,
      y: 0,
      width: e.details.width,
      height: e.details.height
    };
    return a ? /* @__PURE__ */ p.jsx(
      As,
      {
        premountFor: 30 * 5,
        from: o,
        durationInFrames: s,
        style: {
          // width: crop.width || "100%", // Default width
          // height: crop.height || "auto", // Default height
          transform: e.details.transform ?? "none",
          opacity: (e.details.opacity ?? 100) / 100 || 1,
          border: e.details.border ?? "none",
          // Default border
          borderRadius: e.details.borderRadius ?? "0",
          // Default border radius
          boxShadow: e.details.boxShadow ?? "none",
          // Default box shadow
          // top: item.details.top ?? 0,
          // left: item.details.left ?? 0,
          overflow: "hidden"
        },
        className: "size-full",
        children: /* @__PURE__ */ p.jsx(
          Fs,
          {
            style: {
              pointerEvents: "none",
              // width: item.details.width,
              // height: item.details.height,
              top: -l.y,
              left: -l.x
            },
            className: "size-full",
            children: /* @__PURE__ */ p.jsx(
              C3,
              {
                startFrom: a.from / 1e3 * n,
                endAt: a.to / 1e3 * n,
                src: e.details.src,
                volume: (e.details.volume ?? 100) / 100,
                style: {
                  pointerEvents: "none"
                  // width: item.details.width,
                  // height: item.details.height,
                },
                className: "size-full"
              }
            )
          }
        )
      },
      e.id
    ) : /* @__PURE__ */ p.jsx(p.Fragment, {});
  },
  audio: (e, t) => {
    const { fps: n } = t, { from: o, durationInFrames: s } = Ns(e.display, n), a = e.trim;
    return a ? /* @__PURE__ */ p.jsx(
      As,
      {
        className: `moonshine-scene-item id-${e.id} moonshine-scene-item-type-${e.type}`,
        from: o,
        durationInFrames: s,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ p.jsx(Fs, { children: /* @__PURE__ */ p.jsx(
          w3,
          {
            startFrom: a.from / 1e3 * n,
            endAt: a.to / 1e3 * n,
            src: e.details.src,
            volume: (e.details.volume ?? 100) / 100
          }
        ) })
      },
      e.id
    ) : /* @__PURE__ */ p.jsx(p.Fragment, {});
  }
};
var ta = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ta.exports;
(function(e, t) {
  (function() {
    var n, o = "4.17.21", s = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", v = 1, b = 2, C = 4, T = 1, S = 2, E = 1, k = 2, R = 4, M = 8, L = 16, N = 32, $ = 64, F = 128, V = 256, G = 512, K = 30, J = "...", Z = 800, Q = 16, ne = 1, Te = 2, re = 3, le = 1 / 0, ee = 9007199254740991, ye = 17976931348623157e292, fe = NaN, Me = 4294967295, En = Me - 1, Vn = Me >>> 1, xr = [
      ["ary", F],
      ["bind", E],
      ["bindKey", k],
      ["curry", M],
      ["curryRight", L],
      ["flip", G],
      ["partial", N],
      ["partialRight", $],
      ["rearg", V]
    ], cn = "[object Arguments]", ln = "[object Array]", Yt = "[object AsyncFunction]", St = "[object Boolean]", Xt = "[object Date]", Gn = "[object DOMException]", Zn = "[object Error]", In = "[object Function]", kn = "[object GeneratorFunction]", _t = "[object Map]", un = "[object Number]", wr = "[object Null]", Nt = "[object Object]", Li = "[object Promise]", Gr = "[object Proxy]", Cr = "[object RegExp]", Tt = "[object Set]", An = "[object String]", Zr = "[object Symbol]", Da = "[object Undefined]", Yn = "[object WeakMap]", No = "[object WeakSet]", Xn = "[object ArrayBuffer]", Kn = "[object DataView]", Yr = "[object Float32Array]", Xr = "[object Float64Array]", Di = "[object Int8Array]", ji = "[object Int16Array]", Ni = "[object Int32Array]", Fi = "[object Uint8Array]", zi = "[object Uint8ClampedArray]", Hi = "[object Uint16Array]", Wi = "[object Uint32Array]", Bi = /\b__p \+= '';/g, Fo = /\b(__p \+=) '' \+/g, qn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Kr = /&(?:amp|lt|gt|quot|#39);/g, qr = /[&<>"']/g, zo = RegExp(Kr.source), ja = RegExp(qr.source), Ho = /<%-([\s\S]+?)%>/g, Na = /<%([\s\S]+?)%>/g, Ui = /<%=([\s\S]+?)%>/g, Wo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fa = /^\w*$/, za = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jr = /[\\^$.*+?()[\]{}|]/g, Bo = RegExp(Jr.source), $i = /^\s+/, Ha = /\s/, Wa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ba = /\{\n\/\* \[wrapped with (.+)\] \*/, I = /,? & /, B = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, X = /[()=,{}\[\]\/\s]/, ce = /\\(\\)?/g, Ie = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Re = /\w*$/, we = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, rt = /^\[object .+?Constructor\]$/, Be = /^0o[0-7]+$/i, $e = /^(?:0|[1-9]\d*)$/, vt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Kt = /($^)/, Rn = /['\n\r\u2028\u2029\\]/g, qe = "\\ud800-\\udfff", Vi = "\\u0300-\\u036f", Ua = "\\ufe20-\\ufe2f", $a = "\\u20d0-\\u20ff", Zu = Vi + Ua + $a, Yu = "\\u2700-\\u27bf", Xu = "a-z\\xdf-\\xf6\\xf8-\\xff", dg = "\\xac\\xb1\\xd7\\xf7", fg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", hg = "\\u2000-\\u206f", pg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ku = "A-Z\\xc0-\\xd6\\xd8-\\xde", qu = "\\ufe0e\\ufe0f", Ju = dg + fg + hg + pg, Va = "['’]", mg = "[" + qe + "]", Qu = "[" + Ju + "]", Uo = "[" + Zu + "]", ed = "\\d+", gg = "[" + Yu + "]", td = "[" + Xu + "]", nd = "[^" + qe + Ju + ed + Yu + Xu + Ku + "]", Ga = "\\ud83c[\\udffb-\\udfff]", vg = "(?:" + Uo + "|" + Ga + ")", rd = "[^" + qe + "]", Za = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ya = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qr = "[" + Ku + "]", id = "\\u200d", od = "(?:" + td + "|" + nd + ")", yg = "(?:" + Qr + "|" + nd + ")", sd = "(?:" + Va + "(?:d|ll|m|re|s|t|ve))?", ad = "(?:" + Va + "(?:D|LL|M|RE|S|T|VE))?", cd = vg + "?", ld = "[" + qu + "]?", bg = "(?:" + id + "(?:" + [rd, Za, Ya].join("|") + ")" + ld + cd + ")*", xg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", wg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ud = ld + cd + bg, Cg = "(?:" + [gg, Za, Ya].join("|") + ")" + ud, Sg = "(?:" + [rd + Uo + "?", Uo, Za, Ya, mg].join("|") + ")", _g = RegExp(Va, "g"), Tg = RegExp(Uo, "g"), Xa = RegExp(Ga + "(?=" + Ga + ")|" + Sg + ud, "g"), Eg = RegExp([
      Qr + "?" + td + "+" + sd + "(?=" + [Qu, Qr, "$"].join("|") + ")",
      yg + "+" + ad + "(?=" + [Qu, Qr + od, "$"].join("|") + ")",
      Qr + "?" + od + "+" + sd,
      Qr + "+" + ad,
      wg,
      xg,
      ed,
      Cg
    ].join("|"), "g"), Ig = RegExp("[" + id + qe + Zu + qu + "]"), kg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ag = [
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
    ], Rg = -1, Fe = {};
    Fe[Yr] = Fe[Xr] = Fe[Di] = Fe[ji] = Fe[Ni] = Fe[Fi] = Fe[zi] = Fe[Hi] = Fe[Wi] = !0, Fe[cn] = Fe[ln] = Fe[Xn] = Fe[St] = Fe[Kn] = Fe[Xt] = Fe[Zn] = Fe[In] = Fe[_t] = Fe[un] = Fe[Nt] = Fe[Cr] = Fe[Tt] = Fe[An] = Fe[Yn] = !1;
    var je = {};
    je[cn] = je[ln] = je[Xn] = je[Kn] = je[St] = je[Xt] = je[Yr] = je[Xr] = je[Di] = je[ji] = je[Ni] = je[_t] = je[un] = je[Nt] = je[Cr] = je[Tt] = je[An] = je[Zr] = je[Fi] = je[zi] = je[Hi] = je[Wi] = !0, je[Zn] = je[In] = je[Yn] = !1;
    var Pg = {
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
    }, Mg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Og = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Lg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Dg = parseFloat, jg = parseInt, dd = typeof ao == "object" && ao && ao.Object === Object && ao, Ng = typeof self == "object" && self && self.Object === Object && self, it = dd || Ng || Function("return this")(), Ka = t && !t.nodeType && t, Sr = Ka && !0 && e && !e.nodeType && e, fd = Sr && Sr.exports === Ka, qa = fd && dd.process, Ft = function() {
      try {
        var P = Sr && Sr.require && Sr.require("util").types;
        return P || qa && qa.binding && qa.binding("util");
      } catch {
      }
    }(), hd = Ft && Ft.isArrayBuffer, pd = Ft && Ft.isDate, md = Ft && Ft.isMap, gd = Ft && Ft.isRegExp, vd = Ft && Ft.isSet, yd = Ft && Ft.isTypedArray;
    function Et(P, j, D) {
      switch (D.length) {
        case 0:
          return P.call(j);
        case 1:
          return P.call(j, D[0]);
        case 2:
          return P.call(j, D[0], D[1]);
        case 3:
          return P.call(j, D[0], D[1], D[2]);
      }
      return P.apply(j, D);
    }
    function Fg(P, j, D, q) {
      for (var ue = -1, ke = P == null ? 0 : P.length; ++ue < ke; ) {
        var Je = P[ue];
        j(q, Je, D(Je), P);
      }
      return q;
    }
    function zt(P, j) {
      for (var D = -1, q = P == null ? 0 : P.length; ++D < q && j(P[D], D, P) !== !1; )
        ;
      return P;
    }
    function zg(P, j) {
      for (var D = P == null ? 0 : P.length; D-- && j(P[D], D, P) !== !1; )
        ;
      return P;
    }
    function bd(P, j) {
      for (var D = -1, q = P == null ? 0 : P.length; ++D < q; )
        if (!j(P[D], D, P))
          return !1;
      return !0;
    }
    function Jn(P, j) {
      for (var D = -1, q = P == null ? 0 : P.length, ue = 0, ke = []; ++D < q; ) {
        var Je = P[D];
        j(Je, D, P) && (ke[ue++] = Je);
      }
      return ke;
    }
    function $o(P, j) {
      var D = P == null ? 0 : P.length;
      return !!D && ei(P, j, 0) > -1;
    }
    function Ja(P, j, D) {
      for (var q = -1, ue = P == null ? 0 : P.length; ++q < ue; )
        if (D(j, P[q]))
          return !0;
      return !1;
    }
    function He(P, j) {
      for (var D = -1, q = P == null ? 0 : P.length, ue = Array(q); ++D < q; )
        ue[D] = j(P[D], D, P);
      return ue;
    }
    function Qn(P, j) {
      for (var D = -1, q = j.length, ue = P.length; ++D < q; )
        P[ue + D] = j[D];
      return P;
    }
    function Qa(P, j, D, q) {
      var ue = -1, ke = P == null ? 0 : P.length;
      for (q && ke && (D = P[++ue]); ++ue < ke; )
        D = j(D, P[ue], ue, P);
      return D;
    }
    function Hg(P, j, D, q) {
      var ue = P == null ? 0 : P.length;
      for (q && ue && (D = P[--ue]); ue--; )
        D = j(D, P[ue], ue, P);
      return D;
    }
    function ec(P, j) {
      for (var D = -1, q = P == null ? 0 : P.length; ++D < q; )
        if (j(P[D], D, P))
          return !0;
      return !1;
    }
    var Wg = tc("length");
    function Bg(P) {
      return P.split("");
    }
    function Ug(P) {
      return P.match(B) || [];
    }
    function xd(P, j, D) {
      var q;
      return D(P, function(ue, ke, Je) {
        if (j(ue, ke, Je))
          return q = ke, !1;
      }), q;
    }
    function Vo(P, j, D, q) {
      for (var ue = P.length, ke = D + (q ? 1 : -1); q ? ke-- : ++ke < ue; )
        if (j(P[ke], ke, P))
          return ke;
      return -1;
    }
    function ei(P, j, D) {
      return j === j ? t2(P, j, D) : Vo(P, wd, D);
    }
    function $g(P, j, D, q) {
      for (var ue = D - 1, ke = P.length; ++ue < ke; )
        if (q(P[ue], j))
          return ue;
      return -1;
    }
    function wd(P) {
      return P !== P;
    }
    function Cd(P, j) {
      var D = P == null ? 0 : P.length;
      return D ? rc(P, j) / D : fe;
    }
    function tc(P) {
      return function(j) {
        return j == null ? n : j[P];
      };
    }
    function nc(P) {
      return function(j) {
        return P == null ? n : P[j];
      };
    }
    function Sd(P, j, D, q, ue) {
      return ue(P, function(ke, Je, De) {
        D = q ? (q = !1, ke) : j(D, ke, Je, De);
      }), D;
    }
    function Vg(P, j) {
      var D = P.length;
      for (P.sort(j); D--; )
        P[D] = P[D].value;
      return P;
    }
    function rc(P, j) {
      for (var D, q = -1, ue = P.length; ++q < ue; ) {
        var ke = j(P[q]);
        ke !== n && (D = D === n ? ke : D + ke);
      }
      return D;
    }
    function ic(P, j) {
      for (var D = -1, q = Array(P); ++D < P; )
        q[D] = j(D);
      return q;
    }
    function Gg(P, j) {
      return He(j, function(D) {
        return [D, P[D]];
      });
    }
    function _d(P) {
      return P && P.slice(0, kd(P) + 1).replace($i, "");
    }
    function It(P) {
      return function(j) {
        return P(j);
      };
    }
    function oc(P, j) {
      return He(j, function(D) {
        return P[D];
      });
    }
    function Gi(P, j) {
      return P.has(j);
    }
    function Td(P, j) {
      for (var D = -1, q = P.length; ++D < q && ei(j, P[D], 0) > -1; )
        ;
      return D;
    }
    function Ed(P, j) {
      for (var D = P.length; D-- && ei(j, P[D], 0) > -1; )
        ;
      return D;
    }
    function Zg(P, j) {
      for (var D = P.length, q = 0; D--; )
        P[D] === j && ++q;
      return q;
    }
    var Yg = nc(Pg), Xg = nc(Mg);
    function Kg(P) {
      return "\\" + Lg[P];
    }
    function qg(P, j) {
      return P == null ? n : P[j];
    }
    function ti(P) {
      return Ig.test(P);
    }
    function Jg(P) {
      return kg.test(P);
    }
    function Qg(P) {
      for (var j, D = []; !(j = P.next()).done; )
        D.push(j.value);
      return D;
    }
    function sc(P) {
      var j = -1, D = Array(P.size);
      return P.forEach(function(q, ue) {
        D[++j] = [ue, q];
      }), D;
    }
    function Id(P, j) {
      return function(D) {
        return P(j(D));
      };
    }
    function er(P, j) {
      for (var D = -1, q = P.length, ue = 0, ke = []; ++D < q; ) {
        var Je = P[D];
        (Je === j || Je === m) && (P[D] = m, ke[ue++] = D);
      }
      return ke;
    }
    function Go(P) {
      var j = -1, D = Array(P.size);
      return P.forEach(function(q) {
        D[++j] = q;
      }), D;
    }
    function e2(P) {
      var j = -1, D = Array(P.size);
      return P.forEach(function(q) {
        D[++j] = [q, q];
      }), D;
    }
    function t2(P, j, D) {
      for (var q = D - 1, ue = P.length; ++q < ue; )
        if (P[q] === j)
          return q;
      return -1;
    }
    function n2(P, j, D) {
      for (var q = D + 1; q--; )
        if (P[q] === j)
          return q;
      return q;
    }
    function ni(P) {
      return ti(P) ? i2(P) : Wg(P);
    }
    function qt(P) {
      return ti(P) ? o2(P) : Bg(P);
    }
    function kd(P) {
      for (var j = P.length; j-- && Ha.test(P.charAt(j)); )
        ;
      return j;
    }
    var r2 = nc(Og);
    function i2(P) {
      for (var j = Xa.lastIndex = 0; Xa.test(P); )
        ++j;
      return j;
    }
    function o2(P) {
      return P.match(Xa) || [];
    }
    function s2(P) {
      return P.match(Eg) || [];
    }
    var a2 = function P(j) {
      j = j == null ? it : ri.defaults(it.Object(), j, ri.pick(it, Ag));
      var D = j.Array, q = j.Date, ue = j.Error, ke = j.Function, Je = j.Math, De = j.Object, ac = j.RegExp, c2 = j.String, Ht = j.TypeError, Zo = D.prototype, l2 = ke.prototype, ii = De.prototype, Yo = j["__core-js_shared__"], Xo = l2.toString, Oe = ii.hasOwnProperty, u2 = 0, Ad = function() {
        var r = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Ko = ii.toString, d2 = Xo.call(De), f2 = it._, h2 = ac(
        "^" + Xo.call(Oe).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), qo = fd ? j.Buffer : n, tr = j.Symbol, Jo = j.Uint8Array, Rd = qo ? qo.allocUnsafe : n, Qo = Id(De.getPrototypeOf, De), Pd = De.create, Md = ii.propertyIsEnumerable, es = Zo.splice, Od = tr ? tr.isConcatSpreadable : n, Zi = tr ? tr.iterator : n, _r = tr ? tr.toStringTag : n, ts = function() {
        try {
          var r = Ar(De, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), p2 = j.clearTimeout !== it.clearTimeout && j.clearTimeout, m2 = q && q.now !== it.Date.now && q.now, g2 = j.setTimeout !== it.setTimeout && j.setTimeout, ns = Je.ceil, rs = Je.floor, cc = De.getOwnPropertySymbols, v2 = qo ? qo.isBuffer : n, Ld = j.isFinite, y2 = Zo.join, b2 = Id(De.keys, De), Qe = Je.max, at = Je.min, x2 = q.now, w2 = j.parseInt, Dd = Je.random, C2 = Zo.reverse, lc = Ar(j, "DataView"), Yi = Ar(j, "Map"), uc = Ar(j, "Promise"), oi = Ar(j, "Set"), Xi = Ar(j, "WeakMap"), Ki = Ar(De, "create"), is = Xi && new Xi(), si = {}, S2 = Rr(lc), _2 = Rr(Yi), T2 = Rr(uc), E2 = Rr(oi), I2 = Rr(Xi), os = tr ? tr.prototype : n, qi = os ? os.valueOf : n, jd = os ? os.toString : n;
      function y(r) {
        if (Ve(r) && !de(r) && !(r instanceof Ce)) {
          if (r instanceof Wt)
            return r;
          if (Oe.call(r, "__wrapped__"))
            return Ff(r);
        }
        return new Wt(r);
      }
      var ai = /* @__PURE__ */ function() {
        function r() {
        }
        return function(i) {
          if (!Ue(i))
            return {};
          if (Pd)
            return Pd(i);
          r.prototype = i;
          var c = new r();
          return r.prototype = n, c;
        };
      }();
      function ss() {
      }
      function Wt(r, i) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
      }
      y.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Ho,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Na,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ui,
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
          _: y
        }
      }, y.prototype = ss.prototype, y.prototype.constructor = y, Wt.prototype = ai(ss.prototype), Wt.prototype.constructor = Wt;
      function Ce(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
      }
      function k2() {
        var r = new Ce(this.__wrapped__);
        return r.__actions__ = yt(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = yt(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = yt(this.__views__), r;
      }
      function A2() {
        if (this.__filtered__) {
          var r = new Ce(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function R2() {
        var r = this.__wrapped__.value(), i = this.__dir__, c = de(r), d = i < 0, g = c ? r.length : 0, w = Bv(0, g, this.__views__), _ = w.start, A = w.end, O = A - _, z = d ? A : _ - 1, H = this.__iteratees__, W = H.length, Y = 0, te = at(O, this.__takeCount__);
        if (!c || !d && g == O && te == O)
          return af(r, this.__actions__);
        var oe = [];
        e:
          for (; O-- && Y < te; ) {
            z += i;
            for (var me = -1, se = r[z]; ++me < W; ) {
              var be = H[me], Ee = be.iteratee, Rt = be.type, mt = Ee(se);
              if (Rt == Te)
                se = mt;
              else if (!mt) {
                if (Rt == ne)
                  continue e;
                break e;
              }
            }
            oe[Y++] = se;
          }
        return oe;
      }
      Ce.prototype = ai(ss.prototype), Ce.prototype.constructor = Ce;
      function Tr(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var d = r[i];
          this.set(d[0], d[1]);
        }
      }
      function P2() {
        this.__data__ = Ki ? Ki(null) : {}, this.size = 0;
      }
      function M2(r) {
        var i = this.has(r) && delete this.__data__[r];
        return this.size -= i ? 1 : 0, i;
      }
      function O2(r) {
        var i = this.__data__;
        if (Ki) {
          var c = i[r];
          return c === f ? n : c;
        }
        return Oe.call(i, r) ? i[r] : n;
      }
      function L2(r) {
        var i = this.__data__;
        return Ki ? i[r] !== n : Oe.call(i, r);
      }
      function D2(r, i) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = Ki && i === n ? f : i, this;
      }
      Tr.prototype.clear = P2, Tr.prototype.delete = M2, Tr.prototype.get = O2, Tr.prototype.has = L2, Tr.prototype.set = D2;
      function Pn(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var d = r[i];
          this.set(d[0], d[1]);
        }
      }
      function j2() {
        this.__data__ = [], this.size = 0;
      }
      function N2(r) {
        var i = this.__data__, c = as(i, r);
        if (c < 0)
          return !1;
        var d = i.length - 1;
        return c == d ? i.pop() : es.call(i, c, 1), --this.size, !0;
      }
      function F2(r) {
        var i = this.__data__, c = as(i, r);
        return c < 0 ? n : i[c][1];
      }
      function z2(r) {
        return as(this.__data__, r) > -1;
      }
      function H2(r, i) {
        var c = this.__data__, d = as(c, r);
        return d < 0 ? (++this.size, c.push([r, i])) : c[d][1] = i, this;
      }
      Pn.prototype.clear = j2, Pn.prototype.delete = N2, Pn.prototype.get = F2, Pn.prototype.has = z2, Pn.prototype.set = H2;
      function Mn(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var d = r[i];
          this.set(d[0], d[1]);
        }
      }
      function W2() {
        this.size = 0, this.__data__ = {
          hash: new Tr(),
          map: new (Yi || Pn)(),
          string: new Tr()
        };
      }
      function B2(r) {
        var i = bs(this, r).delete(r);
        return this.size -= i ? 1 : 0, i;
      }
      function U2(r) {
        return bs(this, r).get(r);
      }
      function $2(r) {
        return bs(this, r).has(r);
      }
      function V2(r, i) {
        var c = bs(this, r), d = c.size;
        return c.set(r, i), this.size += c.size == d ? 0 : 1, this;
      }
      Mn.prototype.clear = W2, Mn.prototype.delete = B2, Mn.prototype.get = U2, Mn.prototype.has = $2, Mn.prototype.set = V2;
      function Er(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new Mn(); ++i < c; )
          this.add(r[i]);
      }
      function G2(r) {
        return this.__data__.set(r, f), this;
      }
      function Z2(r) {
        return this.__data__.has(r);
      }
      Er.prototype.add = Er.prototype.push = G2, Er.prototype.has = Z2;
      function Jt(r) {
        var i = this.__data__ = new Pn(r);
        this.size = i.size;
      }
      function Y2() {
        this.__data__ = new Pn(), this.size = 0;
      }
      function X2(r) {
        var i = this.__data__, c = i.delete(r);
        return this.size = i.size, c;
      }
      function K2(r) {
        return this.__data__.get(r);
      }
      function q2(r) {
        return this.__data__.has(r);
      }
      function J2(r, i) {
        var c = this.__data__;
        if (c instanceof Pn) {
          var d = c.__data__;
          if (!Yi || d.length < s - 1)
            return d.push([r, i]), this.size = ++c.size, this;
          c = this.__data__ = new Mn(d);
        }
        return c.set(r, i), this.size = c.size, this;
      }
      Jt.prototype.clear = Y2, Jt.prototype.delete = X2, Jt.prototype.get = K2, Jt.prototype.has = q2, Jt.prototype.set = J2;
      function Nd(r, i) {
        var c = de(r), d = !c && Pr(r), g = !c && !d && sr(r), w = !c && !d && !g && di(r), _ = c || d || g || w, A = _ ? ic(r.length, c2) : [], O = A.length;
        for (var z in r)
          (i || Oe.call(r, z)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
          (z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          g && (z == "offset" || z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (z == "buffer" || z == "byteLength" || z == "byteOffset") || // Skip index properties.
          jn(z, O))) && A.push(z);
        return A;
      }
      function Fd(r) {
        var i = r.length;
        return i ? r[wc(0, i - 1)] : n;
      }
      function Q2(r, i) {
        return xs(yt(r), Ir(i, 0, r.length));
      }
      function ev(r) {
        return xs(yt(r));
      }
      function dc(r, i, c) {
        (c !== n && !Qt(r[i], c) || c === n && !(i in r)) && On(r, i, c);
      }
      function Ji(r, i, c) {
        var d = r[i];
        (!(Oe.call(r, i) && Qt(d, c)) || c === n && !(i in r)) && On(r, i, c);
      }
      function as(r, i) {
        for (var c = r.length; c--; )
          if (Qt(r[c][0], i))
            return c;
        return -1;
      }
      function tv(r, i, c, d) {
        return nr(r, function(g, w, _) {
          i(d, g, c(g), _);
        }), d;
      }
      function zd(r, i) {
        return r && fn(i, nt(i), r);
      }
      function nv(r, i) {
        return r && fn(i, xt(i), r);
      }
      function On(r, i, c) {
        i == "__proto__" && ts ? ts(r, i, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : r[i] = c;
      }
      function fc(r, i) {
        for (var c = -1, d = i.length, g = D(d), w = r == null; ++c < d; )
          g[c] = w ? n : Gc(r, i[c]);
        return g;
      }
      function Ir(r, i, c) {
        return r === r && (c !== n && (r = r <= c ? r : c), i !== n && (r = r >= i ? r : i)), r;
      }
      function Bt(r, i, c, d, g, w) {
        var _, A = i & v, O = i & b, z = i & C;
        if (c && (_ = g ? c(r, d, g, w) : c(r)), _ !== n)
          return _;
        if (!Ue(r))
          return r;
        var H = de(r);
        if (H) {
          if (_ = $v(r), !A)
            return yt(r, _);
        } else {
          var W = ct(r), Y = W == In || W == kn;
          if (sr(r))
            return uf(r, A);
          if (W == Nt || W == cn || Y && !g) {
            if (_ = O || Y ? {} : Af(r), !A)
              return O ? Ov(r, nv(_, r)) : Mv(r, zd(_, r));
          } else {
            if (!je[W])
              return g ? r : {};
            _ = Vv(r, W, A);
          }
        }
        w || (w = new Jt());
        var te = w.get(r);
        if (te)
          return te;
        w.set(r, _), ih(r) ? r.forEach(function(se) {
          _.add(Bt(se, i, c, se, r, w));
        }) : nh(r) && r.forEach(function(se, be) {
          _.set(be, Bt(se, i, c, be, r, w));
        });
        var oe = z ? O ? Mc : Pc : O ? xt : nt, me = H ? n : oe(r);
        return zt(me || r, function(se, be) {
          me && (be = se, se = r[be]), Ji(_, be, Bt(se, i, c, be, r, w));
        }), _;
      }
      function rv(r) {
        var i = nt(r);
        return function(c) {
          return Hd(c, r, i);
        };
      }
      function Hd(r, i, c) {
        var d = c.length;
        if (r == null)
          return !d;
        for (r = De(r); d--; ) {
          var g = c[d], w = i[g], _ = r[g];
          if (_ === n && !(g in r) || !w(_))
            return !1;
        }
        return !0;
      }
      function Wd(r, i, c) {
        if (typeof r != "function")
          throw new Ht(l);
        return oo(function() {
          r.apply(n, c);
        }, i);
      }
      function Qi(r, i, c, d) {
        var g = -1, w = $o, _ = !0, A = r.length, O = [], z = i.length;
        if (!A)
          return O;
        c && (i = He(i, It(c))), d ? (w = Ja, _ = !1) : i.length >= s && (w = Gi, _ = !1, i = new Er(i));
        e:
          for (; ++g < A; ) {
            var H = r[g], W = c == null ? H : c(H);
            if (H = d || H !== 0 ? H : 0, _ && W === W) {
              for (var Y = z; Y--; )
                if (i[Y] === W)
                  continue e;
              O.push(H);
            } else w(i, W, d) || O.push(H);
          }
        return O;
      }
      var nr = mf(dn), Bd = mf(pc, !0);
      function iv(r, i) {
        var c = !0;
        return nr(r, function(d, g, w) {
          return c = !!i(d, g, w), c;
        }), c;
      }
      function cs(r, i, c) {
        for (var d = -1, g = r.length; ++d < g; ) {
          var w = r[d], _ = i(w);
          if (_ != null && (A === n ? _ === _ && !At(_) : c(_, A)))
            var A = _, O = w;
        }
        return O;
      }
      function ov(r, i, c, d) {
        var g = r.length;
        for (c = he(c), c < 0 && (c = -c > g ? 0 : g + c), d = d === n || d > g ? g : he(d), d < 0 && (d += g), d = c > d ? 0 : sh(d); c < d; )
          r[c++] = i;
        return r;
      }
      function Ud(r, i) {
        var c = [];
        return nr(r, function(d, g, w) {
          i(d, g, w) && c.push(d);
        }), c;
      }
      function ot(r, i, c, d, g) {
        var w = -1, _ = r.length;
        for (c || (c = Zv), g || (g = []); ++w < _; ) {
          var A = r[w];
          i > 0 && c(A) ? i > 1 ? ot(A, i - 1, c, d, g) : Qn(g, A) : d || (g[g.length] = A);
        }
        return g;
      }
      var hc = gf(), $d = gf(!0);
      function dn(r, i) {
        return r && hc(r, i, nt);
      }
      function pc(r, i) {
        return r && $d(r, i, nt);
      }
      function ls(r, i) {
        return Jn(i, function(c) {
          return Nn(r[c]);
        });
      }
      function kr(r, i) {
        i = ir(i, r);
        for (var c = 0, d = i.length; r != null && c < d; )
          r = r[hn(i[c++])];
        return c && c == d ? r : n;
      }
      function Vd(r, i, c) {
        var d = i(r);
        return de(r) ? d : Qn(d, c(r));
      }
      function ht(r) {
        return r == null ? r === n ? Da : wr : _r && _r in De(r) ? Wv(r) : ey(r);
      }
      function mc(r, i) {
        return r > i;
      }
      function sv(r, i) {
        return r != null && Oe.call(r, i);
      }
      function av(r, i) {
        return r != null && i in De(r);
      }
      function cv(r, i, c) {
        return r >= at(i, c) && r < Qe(i, c);
      }
      function gc(r, i, c) {
        for (var d = c ? Ja : $o, g = r[0].length, w = r.length, _ = w, A = D(w), O = 1 / 0, z = []; _--; ) {
          var H = r[_];
          _ && i && (H = He(H, It(i))), O = at(H.length, O), A[_] = !c && (i || g >= 120 && H.length >= 120) ? new Er(_ && H) : n;
        }
        H = r[0];
        var W = -1, Y = A[0];
        e:
          for (; ++W < g && z.length < O; ) {
            var te = H[W], oe = i ? i(te) : te;
            if (te = c || te !== 0 ? te : 0, !(Y ? Gi(Y, oe) : d(z, oe, c))) {
              for (_ = w; --_; ) {
                var me = A[_];
                if (!(me ? Gi(me, oe) : d(r[_], oe, c)))
                  continue e;
              }
              Y && Y.push(oe), z.push(te);
            }
          }
        return z;
      }
      function lv(r, i, c, d) {
        return dn(r, function(g, w, _) {
          i(d, c(g), w, _);
        }), d;
      }
      function eo(r, i, c) {
        i = ir(i, r), r = Of(r, i);
        var d = r == null ? r : r[hn($t(i))];
        return d == null ? n : Et(d, r, c);
      }
      function Gd(r) {
        return Ve(r) && ht(r) == cn;
      }
      function uv(r) {
        return Ve(r) && ht(r) == Xn;
      }
      function dv(r) {
        return Ve(r) && ht(r) == Xt;
      }
      function to(r, i, c, d, g) {
        return r === i ? !0 : r == null || i == null || !Ve(r) && !Ve(i) ? r !== r && i !== i : fv(r, i, c, d, to, g);
      }
      function fv(r, i, c, d, g, w) {
        var _ = de(r), A = de(i), O = _ ? ln : ct(r), z = A ? ln : ct(i);
        O = O == cn ? Nt : O, z = z == cn ? Nt : z;
        var H = O == Nt, W = z == Nt, Y = O == z;
        if (Y && sr(r)) {
          if (!sr(i))
            return !1;
          _ = !0, H = !1;
        }
        if (Y && !H)
          return w || (w = new Jt()), _ || di(r) ? Ef(r, i, c, d, g, w) : zv(r, i, O, c, d, g, w);
        if (!(c & T)) {
          var te = H && Oe.call(r, "__wrapped__"), oe = W && Oe.call(i, "__wrapped__");
          if (te || oe) {
            var me = te ? r.value() : r, se = oe ? i.value() : i;
            return w || (w = new Jt()), g(me, se, c, d, w);
          }
        }
        return Y ? (w || (w = new Jt()), Hv(r, i, c, d, g, w)) : !1;
      }
      function hv(r) {
        return Ve(r) && ct(r) == _t;
      }
      function vc(r, i, c, d) {
        var g = c.length, w = g, _ = !d;
        if (r == null)
          return !w;
        for (r = De(r); g--; ) {
          var A = c[g];
          if (_ && A[2] ? A[1] !== r[A[0]] : !(A[0] in r))
            return !1;
        }
        for (; ++g < w; ) {
          A = c[g];
          var O = A[0], z = r[O], H = A[1];
          if (_ && A[2]) {
            if (z === n && !(O in r))
              return !1;
          } else {
            var W = new Jt();
            if (d)
              var Y = d(z, H, O, r, i, W);
            if (!(Y === n ? to(H, z, T | S, d, W) : Y))
              return !1;
          }
        }
        return !0;
      }
      function Zd(r) {
        if (!Ue(r) || Xv(r))
          return !1;
        var i = Nn(r) ? h2 : rt;
        return i.test(Rr(r));
      }
      function pv(r) {
        return Ve(r) && ht(r) == Cr;
      }
      function mv(r) {
        return Ve(r) && ct(r) == Tt;
      }
      function gv(r) {
        return Ve(r) && Es(r.length) && !!Fe[ht(r)];
      }
      function Yd(r) {
        return typeof r == "function" ? r : r == null ? wt : typeof r == "object" ? de(r) ? qd(r[0], r[1]) : Kd(r) : vh(r);
      }
      function yc(r) {
        if (!io(r))
          return b2(r);
        var i = [];
        for (var c in De(r))
          Oe.call(r, c) && c != "constructor" && i.push(c);
        return i;
      }
      function vv(r) {
        if (!Ue(r))
          return Qv(r);
        var i = io(r), c = [];
        for (var d in r)
          d == "constructor" && (i || !Oe.call(r, d)) || c.push(d);
        return c;
      }
      function bc(r, i) {
        return r < i;
      }
      function Xd(r, i) {
        var c = -1, d = bt(r) ? D(r.length) : [];
        return nr(r, function(g, w, _) {
          d[++c] = i(g, w, _);
        }), d;
      }
      function Kd(r) {
        var i = Lc(r);
        return i.length == 1 && i[0][2] ? Pf(i[0][0], i[0][1]) : function(c) {
          return c === r || vc(c, r, i);
        };
      }
      function qd(r, i) {
        return jc(r) && Rf(i) ? Pf(hn(r), i) : function(c) {
          var d = Gc(c, r);
          return d === n && d === i ? Zc(c, r) : to(i, d, T | S);
        };
      }
      function us(r, i, c, d, g) {
        r !== i && hc(i, function(w, _) {
          if (g || (g = new Jt()), Ue(w))
            yv(r, i, _, c, us, d, g);
          else {
            var A = d ? d(Fc(r, _), w, _ + "", r, i, g) : n;
            A === n && (A = w), dc(r, _, A);
          }
        }, xt);
      }
      function yv(r, i, c, d, g, w, _) {
        var A = Fc(r, c), O = Fc(i, c), z = _.get(O);
        if (z) {
          dc(r, c, z);
          return;
        }
        var H = w ? w(A, O, c + "", r, i, _) : n, W = H === n;
        if (W) {
          var Y = de(O), te = !Y && sr(O), oe = !Y && !te && di(O);
          H = O, Y || te || oe ? de(A) ? H = A : Ge(A) ? H = yt(A) : te ? (W = !1, H = uf(O, !0)) : oe ? (W = !1, H = df(O, !0)) : H = [] : so(O) || Pr(O) ? (H = A, Pr(A) ? H = ah(A) : (!Ue(A) || Nn(A)) && (H = Af(O))) : W = !1;
        }
        W && (_.set(O, H), g(H, O, d, w, _), _.delete(O)), dc(r, c, H);
      }
      function Jd(r, i) {
        var c = r.length;
        if (c)
          return i += i < 0 ? c : 0, jn(i, c) ? r[i] : n;
      }
      function Qd(r, i, c) {
        i.length ? i = He(i, function(w) {
          return de(w) ? function(_) {
            return kr(_, w.length === 1 ? w[0] : w);
          } : w;
        }) : i = [wt];
        var d = -1;
        i = He(i, It(ie()));
        var g = Xd(r, function(w, _, A) {
          var O = He(i, function(z) {
            return z(w);
          });
          return { criteria: O, index: ++d, value: w };
        });
        return Vg(g, function(w, _) {
          return Pv(w, _, c);
        });
      }
      function bv(r, i) {
        return ef(r, i, function(c, d) {
          return Zc(r, d);
        });
      }
      function ef(r, i, c) {
        for (var d = -1, g = i.length, w = {}; ++d < g; ) {
          var _ = i[d], A = kr(r, _);
          c(A, _) && no(w, ir(_, r), A);
        }
        return w;
      }
      function xv(r) {
        return function(i) {
          return kr(i, r);
        };
      }
      function xc(r, i, c, d) {
        var g = d ? $g : ei, w = -1, _ = i.length, A = r;
        for (r === i && (i = yt(i)), c && (A = He(r, It(c))); ++w < _; )
          for (var O = 0, z = i[w], H = c ? c(z) : z; (O = g(A, H, O, d)) > -1; )
            A !== r && es.call(A, O, 1), es.call(r, O, 1);
        return r;
      }
      function tf(r, i) {
        for (var c = r ? i.length : 0, d = c - 1; c--; ) {
          var g = i[c];
          if (c == d || g !== w) {
            var w = g;
            jn(g) ? es.call(r, g, 1) : _c(r, g);
          }
        }
        return r;
      }
      function wc(r, i) {
        return r + rs(Dd() * (i - r + 1));
      }
      function wv(r, i, c, d) {
        for (var g = -1, w = Qe(ns((i - r) / (c || 1)), 0), _ = D(w); w--; )
          _[d ? w : ++g] = r, r += c;
        return _;
      }
      function Cc(r, i) {
        var c = "";
        if (!r || i < 1 || i > ee)
          return c;
        do
          i % 2 && (c += r), i = rs(i / 2), i && (r += r);
        while (i);
        return c;
      }
      function ge(r, i) {
        return zc(Mf(r, i, wt), r + "");
      }
      function Cv(r) {
        return Fd(fi(r));
      }
      function Sv(r, i) {
        var c = fi(r);
        return xs(c, Ir(i, 0, c.length));
      }
      function no(r, i, c, d) {
        if (!Ue(r))
          return r;
        i = ir(i, r);
        for (var g = -1, w = i.length, _ = w - 1, A = r; A != null && ++g < w; ) {
          var O = hn(i[g]), z = c;
          if (O === "__proto__" || O === "constructor" || O === "prototype")
            return r;
          if (g != _) {
            var H = A[O];
            z = d ? d(H, O, A) : n, z === n && (z = Ue(H) ? H : jn(i[g + 1]) ? [] : {});
          }
          Ji(A, O, z), A = A[O];
        }
        return r;
      }
      var nf = is ? function(r, i) {
        return is.set(r, i), r;
      } : wt, _v = ts ? function(r, i) {
        return ts(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Xc(i),
          writable: !0
        });
      } : wt;
      function Tv(r) {
        return xs(fi(r));
      }
      function Ut(r, i, c) {
        var d = -1, g = r.length;
        i < 0 && (i = -i > g ? 0 : g + i), c = c > g ? g : c, c < 0 && (c += g), g = i > c ? 0 : c - i >>> 0, i >>>= 0;
        for (var w = D(g); ++d < g; )
          w[d] = r[d + i];
        return w;
      }
      function Ev(r, i) {
        var c;
        return nr(r, function(d, g, w) {
          return c = i(d, g, w), !c;
        }), !!c;
      }
      function ds(r, i, c) {
        var d = 0, g = r == null ? d : r.length;
        if (typeof i == "number" && i === i && g <= Vn) {
          for (; d < g; ) {
            var w = d + g >>> 1, _ = r[w];
            _ !== null && !At(_) && (c ? _ <= i : _ < i) ? d = w + 1 : g = w;
          }
          return g;
        }
        return Sc(r, i, wt, c);
      }
      function Sc(r, i, c, d) {
        var g = 0, w = r == null ? 0 : r.length;
        if (w === 0)
          return 0;
        i = c(i);
        for (var _ = i !== i, A = i === null, O = At(i), z = i === n; g < w; ) {
          var H = rs((g + w) / 2), W = c(r[H]), Y = W !== n, te = W === null, oe = W === W, me = At(W);
          if (_)
            var se = d || oe;
          else z ? se = oe && (d || Y) : A ? se = oe && Y && (d || !te) : O ? se = oe && Y && !te && (d || !me) : te || me ? se = !1 : se = d ? W <= i : W < i;
          se ? g = H + 1 : w = H;
        }
        return at(w, En);
      }
      function rf(r, i) {
        for (var c = -1, d = r.length, g = 0, w = []; ++c < d; ) {
          var _ = r[c], A = i ? i(_) : _;
          if (!c || !Qt(A, O)) {
            var O = A;
            w[g++] = _ === 0 ? 0 : _;
          }
        }
        return w;
      }
      function of(r) {
        return typeof r == "number" ? r : At(r) ? fe : +r;
      }
      function kt(r) {
        if (typeof r == "string")
          return r;
        if (de(r))
          return He(r, kt) + "";
        if (At(r))
          return jd ? jd.call(r) : "";
        var i = r + "";
        return i == "0" && 1 / r == -1 / 0 ? "-0" : i;
      }
      function rr(r, i, c) {
        var d = -1, g = $o, w = r.length, _ = !0, A = [], O = A;
        if (c)
          _ = !1, g = Ja;
        else if (w >= s) {
          var z = i ? null : Nv(r);
          if (z)
            return Go(z);
          _ = !1, g = Gi, O = new Er();
        } else
          O = i ? [] : A;
        e:
          for (; ++d < w; ) {
            var H = r[d], W = i ? i(H) : H;
            if (H = c || H !== 0 ? H : 0, _ && W === W) {
              for (var Y = O.length; Y--; )
                if (O[Y] === W)
                  continue e;
              i && O.push(W), A.push(H);
            } else g(O, W, c) || (O !== A && O.push(W), A.push(H));
          }
        return A;
      }
      function _c(r, i) {
        return i = ir(i, r), r = Of(r, i), r == null || delete r[hn($t(i))];
      }
      function sf(r, i, c, d) {
        return no(r, i, c(kr(r, i)), d);
      }
      function fs(r, i, c, d) {
        for (var g = r.length, w = d ? g : -1; (d ? w-- : ++w < g) && i(r[w], w, r); )
          ;
        return c ? Ut(r, d ? 0 : w, d ? w + 1 : g) : Ut(r, d ? w + 1 : 0, d ? g : w);
      }
      function af(r, i) {
        var c = r;
        return c instanceof Ce && (c = c.value()), Qa(i, function(d, g) {
          return g.func.apply(g.thisArg, Qn([d], g.args));
        }, c);
      }
      function Tc(r, i, c) {
        var d = r.length;
        if (d < 2)
          return d ? rr(r[0]) : [];
        for (var g = -1, w = D(d); ++g < d; )
          for (var _ = r[g], A = -1; ++A < d; )
            A != g && (w[g] = Qi(w[g] || _, r[A], i, c));
        return rr(ot(w, 1), i, c);
      }
      function cf(r, i, c) {
        for (var d = -1, g = r.length, w = i.length, _ = {}; ++d < g; ) {
          var A = d < w ? i[d] : n;
          c(_, r[d], A);
        }
        return _;
      }
      function Ec(r) {
        return Ge(r) ? r : [];
      }
      function Ic(r) {
        return typeof r == "function" ? r : wt;
      }
      function ir(r, i) {
        return de(r) ? r : jc(r, i) ? [r] : Nf(Pe(r));
      }
      var Iv = ge;
      function or(r, i, c) {
        var d = r.length;
        return c = c === n ? d : c, !i && c >= d ? r : Ut(r, i, c);
      }
      var lf = p2 || function(r) {
        return it.clearTimeout(r);
      };
      function uf(r, i) {
        if (i)
          return r.slice();
        var c = r.length, d = Rd ? Rd(c) : new r.constructor(c);
        return r.copy(d), d;
      }
      function kc(r) {
        var i = new r.constructor(r.byteLength);
        return new Jo(i).set(new Jo(r)), i;
      }
      function kv(r, i) {
        var c = i ? kc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.byteLength);
      }
      function Av(r) {
        var i = new r.constructor(r.source, Re.exec(r));
        return i.lastIndex = r.lastIndex, i;
      }
      function Rv(r) {
        return qi ? De(qi.call(r)) : {};
      }
      function df(r, i) {
        var c = i ? kc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.length);
      }
      function ff(r, i) {
        if (r !== i) {
          var c = r !== n, d = r === null, g = r === r, w = At(r), _ = i !== n, A = i === null, O = i === i, z = At(i);
          if (!A && !z && !w && r > i || w && _ && O && !A && !z || d && _ && O || !c && O || !g)
            return 1;
          if (!d && !w && !z && r < i || z && c && g && !d && !w || A && c && g || !_ && g || !O)
            return -1;
        }
        return 0;
      }
      function Pv(r, i, c) {
        for (var d = -1, g = r.criteria, w = i.criteria, _ = g.length, A = c.length; ++d < _; ) {
          var O = ff(g[d], w[d]);
          if (O) {
            if (d >= A)
              return O;
            var z = c[d];
            return O * (z == "desc" ? -1 : 1);
          }
        }
        return r.index - i.index;
      }
      function hf(r, i, c, d) {
        for (var g = -1, w = r.length, _ = c.length, A = -1, O = i.length, z = Qe(w - _, 0), H = D(O + z), W = !d; ++A < O; )
          H[A] = i[A];
        for (; ++g < _; )
          (W || g < w) && (H[c[g]] = r[g]);
        for (; z--; )
          H[A++] = r[g++];
        return H;
      }
      function pf(r, i, c, d) {
        for (var g = -1, w = r.length, _ = -1, A = c.length, O = -1, z = i.length, H = Qe(w - A, 0), W = D(H + z), Y = !d; ++g < H; )
          W[g] = r[g];
        for (var te = g; ++O < z; )
          W[te + O] = i[O];
        for (; ++_ < A; )
          (Y || g < w) && (W[te + c[_]] = r[g++]);
        return W;
      }
      function yt(r, i) {
        var c = -1, d = r.length;
        for (i || (i = D(d)); ++c < d; )
          i[c] = r[c];
        return i;
      }
      function fn(r, i, c, d) {
        var g = !c;
        c || (c = {});
        for (var w = -1, _ = i.length; ++w < _; ) {
          var A = i[w], O = d ? d(c[A], r[A], A, c, r) : n;
          O === n && (O = r[A]), g ? On(c, A, O) : Ji(c, A, O);
        }
        return c;
      }
      function Mv(r, i) {
        return fn(r, Dc(r), i);
      }
      function Ov(r, i) {
        return fn(r, If(r), i);
      }
      function hs(r, i) {
        return function(c, d) {
          var g = de(c) ? Fg : tv, w = i ? i() : {};
          return g(c, r, ie(d, 2), w);
        };
      }
      function ci(r) {
        return ge(function(i, c) {
          var d = -1, g = c.length, w = g > 1 ? c[g - 1] : n, _ = g > 2 ? c[2] : n;
          for (w = r.length > 3 && typeof w == "function" ? (g--, w) : n, _ && pt(c[0], c[1], _) && (w = g < 3 ? n : w, g = 1), i = De(i); ++d < g; ) {
            var A = c[d];
            A && r(i, A, d, w);
          }
          return i;
        });
      }
      function mf(r, i) {
        return function(c, d) {
          if (c == null)
            return c;
          if (!bt(c))
            return r(c, d);
          for (var g = c.length, w = i ? g : -1, _ = De(c); (i ? w-- : ++w < g) && d(_[w], w, _) !== !1; )
            ;
          return c;
        };
      }
      function gf(r) {
        return function(i, c, d) {
          for (var g = -1, w = De(i), _ = d(i), A = _.length; A--; ) {
            var O = _[r ? A : ++g];
            if (c(w[O], O, w) === !1)
              break;
          }
          return i;
        };
      }
      function Lv(r, i, c) {
        var d = i & E, g = ro(r);
        function w() {
          var _ = this && this !== it && this instanceof w ? g : r;
          return _.apply(d ? c : this, arguments);
        }
        return w;
      }
      function vf(r) {
        return function(i) {
          i = Pe(i);
          var c = ti(i) ? qt(i) : n, d = c ? c[0] : i.charAt(0), g = c ? or(c, 1).join("") : i.slice(1);
          return d[r]() + g;
        };
      }
      function li(r) {
        return function(i) {
          return Qa(mh(ph(i).replace(_g, "")), r, "");
        };
      }
      function ro(r) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new r();
            case 1:
              return new r(i[0]);
            case 2:
              return new r(i[0], i[1]);
            case 3:
              return new r(i[0], i[1], i[2]);
            case 4:
              return new r(i[0], i[1], i[2], i[3]);
            case 5:
              return new r(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var c = ai(r.prototype), d = r.apply(c, i);
          return Ue(d) ? d : c;
        };
      }
      function Dv(r, i, c) {
        var d = ro(r);
        function g() {
          for (var w = arguments.length, _ = D(w), A = w, O = ui(g); A--; )
            _[A] = arguments[A];
          var z = w < 3 && _[0] !== O && _[w - 1] !== O ? [] : er(_, O);
          if (w -= z.length, w < c)
            return Cf(
              r,
              i,
              ps,
              g.placeholder,
              n,
              _,
              z,
              n,
              n,
              c - w
            );
          var H = this && this !== it && this instanceof g ? d : r;
          return Et(H, this, _);
        }
        return g;
      }
      function yf(r) {
        return function(i, c, d) {
          var g = De(i);
          if (!bt(i)) {
            var w = ie(c, 3);
            i = nt(i), c = function(A) {
              return w(g[A], A, g);
            };
          }
          var _ = r(i, c, d);
          return _ > -1 ? g[w ? i[_] : _] : n;
        };
      }
      function bf(r) {
        return Dn(function(i) {
          var c = i.length, d = c, g = Wt.prototype.thru;
          for (r && i.reverse(); d--; ) {
            var w = i[d];
            if (typeof w != "function")
              throw new Ht(l);
            if (g && !_ && ys(w) == "wrapper")
              var _ = new Wt([], !0);
          }
          for (d = _ ? d : c; ++d < c; ) {
            w = i[d];
            var A = ys(w), O = A == "wrapper" ? Oc(w) : n;
            O && Nc(O[0]) && O[1] == (F | M | N | V) && !O[4].length && O[9] == 1 ? _ = _[ys(O[0])].apply(_, O[3]) : _ = w.length == 1 && Nc(w) ? _[A]() : _.thru(w);
          }
          return function() {
            var z = arguments, H = z[0];
            if (_ && z.length == 1 && de(H))
              return _.plant(H).value();
            for (var W = 0, Y = c ? i[W].apply(this, z) : H; ++W < c; )
              Y = i[W].call(this, Y);
            return Y;
          };
        });
      }
      function ps(r, i, c, d, g, w, _, A, O, z) {
        var H = i & F, W = i & E, Y = i & k, te = i & (M | L), oe = i & G, me = Y ? n : ro(r);
        function se() {
          for (var be = arguments.length, Ee = D(be), Rt = be; Rt--; )
            Ee[Rt] = arguments[Rt];
          if (te)
            var mt = ui(se), Pt = Zg(Ee, mt);
          if (d && (Ee = hf(Ee, d, g, te)), w && (Ee = pf(Ee, w, _, te)), be -= Pt, te && be < z) {
            var Ze = er(Ee, mt);
            return Cf(
              r,
              i,
              ps,
              se.placeholder,
              c,
              Ee,
              Ze,
              A,
              O,
              z - be
            );
          }
          var en = W ? c : this, zn = Y ? en[r] : r;
          return be = Ee.length, A ? Ee = ty(Ee, A) : oe && be > 1 && Ee.reverse(), H && O < be && (Ee.length = O), this && this !== it && this instanceof se && (zn = me || ro(zn)), zn.apply(en, Ee);
        }
        return se;
      }
      function xf(r, i) {
        return function(c, d) {
          return lv(c, r, i(d), {});
        };
      }
      function ms(r, i) {
        return function(c, d) {
          var g;
          if (c === n && d === n)
            return i;
          if (c !== n && (g = c), d !== n) {
            if (g === n)
              return d;
            typeof c == "string" || typeof d == "string" ? (c = kt(c), d = kt(d)) : (c = of(c), d = of(d)), g = r(c, d);
          }
          return g;
        };
      }
      function Ac(r) {
        return Dn(function(i) {
          return i = He(i, It(ie())), ge(function(c) {
            var d = this;
            return r(i, function(g) {
              return Et(g, d, c);
            });
          });
        });
      }
      function gs(r, i) {
        i = i === n ? " " : kt(i);
        var c = i.length;
        if (c < 2)
          return c ? Cc(i, r) : i;
        var d = Cc(i, ns(r / ni(i)));
        return ti(i) ? or(qt(d), 0, r).join("") : d.slice(0, r);
      }
      function jv(r, i, c, d) {
        var g = i & E, w = ro(r);
        function _() {
          for (var A = -1, O = arguments.length, z = -1, H = d.length, W = D(H + O), Y = this && this !== it && this instanceof _ ? w : r; ++z < H; )
            W[z] = d[z];
          for (; O--; )
            W[z++] = arguments[++A];
          return Et(Y, g ? c : this, W);
        }
        return _;
      }
      function wf(r) {
        return function(i, c, d) {
          return d && typeof d != "number" && pt(i, c, d) && (c = d = n), i = Fn(i), c === n ? (c = i, i = 0) : c = Fn(c), d = d === n ? i < c ? 1 : -1 : Fn(d), wv(i, c, d, r);
        };
      }
      function vs(r) {
        return function(i, c) {
          return typeof i == "string" && typeof c == "string" || (i = Vt(i), c = Vt(c)), r(i, c);
        };
      }
      function Cf(r, i, c, d, g, w, _, A, O, z) {
        var H = i & M, W = H ? _ : n, Y = H ? n : _, te = H ? w : n, oe = H ? n : w;
        i |= H ? N : $, i &= ~(H ? $ : N), i & R || (i &= -4);
        var me = [
          r,
          i,
          g,
          te,
          W,
          oe,
          Y,
          A,
          O,
          z
        ], se = c.apply(n, me);
        return Nc(r) && Lf(se, me), se.placeholder = d, Df(se, r, i);
      }
      function Rc(r) {
        var i = Je[r];
        return function(c, d) {
          if (c = Vt(c), d = d == null ? 0 : at(he(d), 292), d && Ld(c)) {
            var g = (Pe(c) + "e").split("e"), w = i(g[0] + "e" + (+g[1] + d));
            return g = (Pe(w) + "e").split("e"), +(g[0] + "e" + (+g[1] - d));
          }
          return i(c);
        };
      }
      var Nv = oi && 1 / Go(new oi([, -0]))[1] == le ? function(r) {
        return new oi(r);
      } : Jc;
      function Sf(r) {
        return function(i) {
          var c = ct(i);
          return c == _t ? sc(i) : c == Tt ? e2(i) : Gg(i, r(i));
        };
      }
      function Ln(r, i, c, d, g, w, _, A) {
        var O = i & k;
        if (!O && typeof r != "function")
          throw new Ht(l);
        var z = d ? d.length : 0;
        if (z || (i &= -97, d = g = n), _ = _ === n ? _ : Qe(he(_), 0), A = A === n ? A : he(A), z -= g ? g.length : 0, i & $) {
          var H = d, W = g;
          d = g = n;
        }
        var Y = O ? n : Oc(r), te = [
          r,
          i,
          c,
          d,
          g,
          H,
          W,
          w,
          _,
          A
        ];
        if (Y && Jv(te, Y), r = te[0], i = te[1], c = te[2], d = te[3], g = te[4], A = te[9] = te[9] === n ? O ? 0 : r.length : Qe(te[9] - z, 0), !A && i & (M | L) && (i &= -25), !i || i == E)
          var oe = Lv(r, i, c);
        else i == M || i == L ? oe = Dv(r, i, A) : (i == N || i == (E | N)) && !g.length ? oe = jv(r, i, c, d) : oe = ps.apply(n, te);
        var me = Y ? nf : Lf;
        return Df(me(oe, te), r, i);
      }
      function _f(r, i, c, d) {
        return r === n || Qt(r, ii[c]) && !Oe.call(d, c) ? i : r;
      }
      function Tf(r, i, c, d, g, w) {
        return Ue(r) && Ue(i) && (w.set(i, r), us(r, i, n, Tf, w), w.delete(i)), r;
      }
      function Fv(r) {
        return so(r) ? n : r;
      }
      function Ef(r, i, c, d, g, w) {
        var _ = c & T, A = r.length, O = i.length;
        if (A != O && !(_ && O > A))
          return !1;
        var z = w.get(r), H = w.get(i);
        if (z && H)
          return z == i && H == r;
        var W = -1, Y = !0, te = c & S ? new Er() : n;
        for (w.set(r, i), w.set(i, r); ++W < A; ) {
          var oe = r[W], me = i[W];
          if (d)
            var se = _ ? d(me, oe, W, i, r, w) : d(oe, me, W, r, i, w);
          if (se !== n) {
            if (se)
              continue;
            Y = !1;
            break;
          }
          if (te) {
            if (!ec(i, function(be, Ee) {
              if (!Gi(te, Ee) && (oe === be || g(oe, be, c, d, w)))
                return te.push(Ee);
            })) {
              Y = !1;
              break;
            }
          } else if (!(oe === me || g(oe, me, c, d, w))) {
            Y = !1;
            break;
          }
        }
        return w.delete(r), w.delete(i), Y;
      }
      function zv(r, i, c, d, g, w, _) {
        switch (c) {
          case Kn:
            if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
              return !1;
            r = r.buffer, i = i.buffer;
          case Xn:
            return !(r.byteLength != i.byteLength || !w(new Jo(r), new Jo(i)));
          case St:
          case Xt:
          case un:
            return Qt(+r, +i);
          case Zn:
            return r.name == i.name && r.message == i.message;
          case Cr:
          case An:
            return r == i + "";
          case _t:
            var A = sc;
          case Tt:
            var O = d & T;
            if (A || (A = Go), r.size != i.size && !O)
              return !1;
            var z = _.get(r);
            if (z)
              return z == i;
            d |= S, _.set(r, i);
            var H = Ef(A(r), A(i), d, g, w, _);
            return _.delete(r), H;
          case Zr:
            if (qi)
              return qi.call(r) == qi.call(i);
        }
        return !1;
      }
      function Hv(r, i, c, d, g, w) {
        var _ = c & T, A = Pc(r), O = A.length, z = Pc(i), H = z.length;
        if (O != H && !_)
          return !1;
        for (var W = O; W--; ) {
          var Y = A[W];
          if (!(_ ? Y in i : Oe.call(i, Y)))
            return !1;
        }
        var te = w.get(r), oe = w.get(i);
        if (te && oe)
          return te == i && oe == r;
        var me = !0;
        w.set(r, i), w.set(i, r);
        for (var se = _; ++W < O; ) {
          Y = A[W];
          var be = r[Y], Ee = i[Y];
          if (d)
            var Rt = _ ? d(Ee, be, Y, i, r, w) : d(be, Ee, Y, r, i, w);
          if (!(Rt === n ? be === Ee || g(be, Ee, c, d, w) : Rt)) {
            me = !1;
            break;
          }
          se || (se = Y == "constructor");
        }
        if (me && !se) {
          var mt = r.constructor, Pt = i.constructor;
          mt != Pt && "constructor" in r && "constructor" in i && !(typeof mt == "function" && mt instanceof mt && typeof Pt == "function" && Pt instanceof Pt) && (me = !1);
        }
        return w.delete(r), w.delete(i), me;
      }
      function Dn(r) {
        return zc(Mf(r, n, Wf), r + "");
      }
      function Pc(r) {
        return Vd(r, nt, Dc);
      }
      function Mc(r) {
        return Vd(r, xt, If);
      }
      var Oc = is ? function(r) {
        return is.get(r);
      } : Jc;
      function ys(r) {
        for (var i = r.name + "", c = si[i], d = Oe.call(si, i) ? c.length : 0; d--; ) {
          var g = c[d], w = g.func;
          if (w == null || w == r)
            return g.name;
        }
        return i;
      }
      function ui(r) {
        var i = Oe.call(y, "placeholder") ? y : r;
        return i.placeholder;
      }
      function ie() {
        var r = y.iteratee || Kc;
        return r = r === Kc ? Yd : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function bs(r, i) {
        var c = r.__data__;
        return Yv(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
      }
      function Lc(r) {
        for (var i = nt(r), c = i.length; c--; ) {
          var d = i[c], g = r[d];
          i[c] = [d, g, Rf(g)];
        }
        return i;
      }
      function Ar(r, i) {
        var c = qg(r, i);
        return Zd(c) ? c : n;
      }
      function Wv(r) {
        var i = Oe.call(r, _r), c = r[_r];
        try {
          r[_r] = n;
          var d = !0;
        } catch {
        }
        var g = Ko.call(r);
        return d && (i ? r[_r] = c : delete r[_r]), g;
      }
      var Dc = cc ? function(r) {
        return r == null ? [] : (r = De(r), Jn(cc(r), function(i) {
          return Md.call(r, i);
        }));
      } : Qc, If = cc ? function(r) {
        for (var i = []; r; )
          Qn(i, Dc(r)), r = Qo(r);
        return i;
      } : Qc, ct = ht;
      (lc && ct(new lc(new ArrayBuffer(1))) != Kn || Yi && ct(new Yi()) != _t || uc && ct(uc.resolve()) != Li || oi && ct(new oi()) != Tt || Xi && ct(new Xi()) != Yn) && (ct = function(r) {
        var i = ht(r), c = i == Nt ? r.constructor : n, d = c ? Rr(c) : "";
        if (d)
          switch (d) {
            case S2:
              return Kn;
            case _2:
              return _t;
            case T2:
              return Li;
            case E2:
              return Tt;
            case I2:
              return Yn;
          }
        return i;
      });
      function Bv(r, i, c) {
        for (var d = -1, g = c.length; ++d < g; ) {
          var w = c[d], _ = w.size;
          switch (w.type) {
            case "drop":
              r += _;
              break;
            case "dropRight":
              i -= _;
              break;
            case "take":
              i = at(i, r + _);
              break;
            case "takeRight":
              r = Qe(r, i - _);
              break;
          }
        }
        return { start: r, end: i };
      }
      function Uv(r) {
        var i = r.match(Ba);
        return i ? i[1].split(I) : [];
      }
      function kf(r, i, c) {
        i = ir(i, r);
        for (var d = -1, g = i.length, w = !1; ++d < g; ) {
          var _ = hn(i[d]);
          if (!(w = r != null && c(r, _)))
            break;
          r = r[_];
        }
        return w || ++d != g ? w : (g = r == null ? 0 : r.length, !!g && Es(g) && jn(_, g) && (de(r) || Pr(r)));
      }
      function $v(r) {
        var i = r.length, c = new r.constructor(i);
        return i && typeof r[0] == "string" && Oe.call(r, "index") && (c.index = r.index, c.input = r.input), c;
      }
      function Af(r) {
        return typeof r.constructor == "function" && !io(r) ? ai(Qo(r)) : {};
      }
      function Vv(r, i, c) {
        var d = r.constructor;
        switch (i) {
          case Xn:
            return kc(r);
          case St:
          case Xt:
            return new d(+r);
          case Kn:
            return kv(r, c);
          case Yr:
          case Xr:
          case Di:
          case ji:
          case Ni:
          case Fi:
          case zi:
          case Hi:
          case Wi:
            return df(r, c);
          case _t:
            return new d();
          case un:
          case An:
            return new d(r);
          case Cr:
            return Av(r);
          case Tt:
            return new d();
          case Zr:
            return Rv(r);
        }
      }
      function Gv(r, i) {
        var c = i.length;
        if (!c)
          return r;
        var d = c - 1;
        return i[d] = (c > 1 ? "& " : "") + i[d], i = i.join(c > 2 ? ", " : " "), r.replace(Wa, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Zv(r) {
        return de(r) || Pr(r) || !!(Od && r && r[Od]);
      }
      function jn(r, i) {
        var c = typeof r;
        return i = i ?? ee, !!i && (c == "number" || c != "symbol" && $e.test(r)) && r > -1 && r % 1 == 0 && r < i;
      }
      function pt(r, i, c) {
        if (!Ue(c))
          return !1;
        var d = typeof i;
        return (d == "number" ? bt(c) && jn(i, c.length) : d == "string" && i in c) ? Qt(c[i], r) : !1;
      }
      function jc(r, i) {
        if (de(r))
          return !1;
        var c = typeof r;
        return c == "number" || c == "symbol" || c == "boolean" || r == null || At(r) ? !0 : Fa.test(r) || !Wo.test(r) || i != null && r in De(i);
      }
      function Yv(r) {
        var i = typeof r;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
      }
      function Nc(r) {
        var i = ys(r), c = y[i];
        if (typeof c != "function" || !(i in Ce.prototype))
          return !1;
        if (r === c)
          return !0;
        var d = Oc(c);
        return !!d && r === d[0];
      }
      function Xv(r) {
        return !!Ad && Ad in r;
      }
      var Kv = Yo ? Nn : el;
      function io(r) {
        var i = r && r.constructor, c = typeof i == "function" && i.prototype || ii;
        return r === c;
      }
      function Rf(r) {
        return r === r && !Ue(r);
      }
      function Pf(r, i) {
        return function(c) {
          return c == null ? !1 : c[r] === i && (i !== n || r in De(c));
        };
      }
      function qv(r) {
        var i = _s(r, function(d) {
          return c.size === h && c.clear(), d;
        }), c = i.cache;
        return i;
      }
      function Jv(r, i) {
        var c = r[1], d = i[1], g = c | d, w = g < (E | k | F), _ = d == F && c == M || d == F && c == V && r[7].length <= i[8] || d == (F | V) && i[7].length <= i[8] && c == M;
        if (!(w || _))
          return r;
        d & E && (r[2] = i[2], g |= c & E ? 0 : R);
        var A = i[3];
        if (A) {
          var O = r[3];
          r[3] = O ? hf(O, A, i[4]) : A, r[4] = O ? er(r[3], m) : i[4];
        }
        return A = i[5], A && (O = r[5], r[5] = O ? pf(O, A, i[6]) : A, r[6] = O ? er(r[5], m) : i[6]), A = i[7], A && (r[7] = A), d & F && (r[8] = r[8] == null ? i[8] : at(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = g, r;
      }
      function Qv(r) {
        var i = [];
        if (r != null)
          for (var c in De(r))
            i.push(c);
        return i;
      }
      function ey(r) {
        return Ko.call(r);
      }
      function Mf(r, i, c) {
        return i = Qe(i === n ? r.length - 1 : i, 0), function() {
          for (var d = arguments, g = -1, w = Qe(d.length - i, 0), _ = D(w); ++g < w; )
            _[g] = d[i + g];
          g = -1;
          for (var A = D(i + 1); ++g < i; )
            A[g] = d[g];
          return A[i] = c(_), Et(r, this, A);
        };
      }
      function Of(r, i) {
        return i.length < 2 ? r : kr(r, Ut(i, 0, -1));
      }
      function ty(r, i) {
        for (var c = r.length, d = at(i.length, c), g = yt(r); d--; ) {
          var w = i[d];
          r[d] = jn(w, c) ? g[w] : n;
        }
        return r;
      }
      function Fc(r, i) {
        if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__")
          return r[i];
      }
      var Lf = jf(nf), oo = g2 || function(r, i) {
        return it.setTimeout(r, i);
      }, zc = jf(_v);
      function Df(r, i, c) {
        var d = i + "";
        return zc(r, Gv(d, ny(Uv(d), c)));
      }
      function jf(r) {
        var i = 0, c = 0;
        return function() {
          var d = x2(), g = Q - (d - c);
          if (c = d, g > 0) {
            if (++i >= Z)
              return arguments[0];
          } else
            i = 0;
          return r.apply(n, arguments);
        };
      }
      function xs(r, i) {
        var c = -1, d = r.length, g = d - 1;
        for (i = i === n ? d : i; ++c < i; ) {
          var w = wc(c, g), _ = r[w];
          r[w] = r[c], r[c] = _;
        }
        return r.length = i, r;
      }
      var Nf = qv(function(r) {
        var i = [];
        return r.charCodeAt(0) === 46 && i.push(""), r.replace(za, function(c, d, g, w) {
          i.push(g ? w.replace(ce, "$1") : d || c);
        }), i;
      });
      function hn(r) {
        if (typeof r == "string" || At(r))
          return r;
        var i = r + "";
        return i == "0" && 1 / r == -1 / 0 ? "-0" : i;
      }
      function Rr(r) {
        if (r != null) {
          try {
            return Xo.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function ny(r, i) {
        return zt(xr, function(c) {
          var d = "_." + c[0];
          i & c[1] && !$o(r, d) && r.push(d);
        }), r.sort();
      }
      function Ff(r) {
        if (r instanceof Ce)
          return r.clone();
        var i = new Wt(r.__wrapped__, r.__chain__);
        return i.__actions__ = yt(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i;
      }
      function ry(r, i, c) {
        (c ? pt(r, i, c) : i === n) ? i = 1 : i = Qe(he(i), 0);
        var d = r == null ? 0 : r.length;
        if (!d || i < 1)
          return [];
        for (var g = 0, w = 0, _ = D(ns(d / i)); g < d; )
          _[w++] = Ut(r, g, g += i);
        return _;
      }
      function iy(r) {
        for (var i = -1, c = r == null ? 0 : r.length, d = 0, g = []; ++i < c; ) {
          var w = r[i];
          w && (g[d++] = w);
        }
        return g;
      }
      function oy() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var i = D(r - 1), c = arguments[0], d = r; d--; )
          i[d - 1] = arguments[d];
        return Qn(de(c) ? yt(c) : [c], ot(i, 1));
      }
      var sy = ge(function(r, i) {
        return Ge(r) ? Qi(r, ot(i, 1, Ge, !0)) : [];
      }), ay = ge(function(r, i) {
        var c = $t(i);
        return Ge(c) && (c = n), Ge(r) ? Qi(r, ot(i, 1, Ge, !0), ie(c, 2)) : [];
      }), cy = ge(function(r, i) {
        var c = $t(i);
        return Ge(c) && (c = n), Ge(r) ? Qi(r, ot(i, 1, Ge, !0), n, c) : [];
      });
      function ly(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (i = c || i === n ? 1 : he(i), Ut(r, i < 0 ? 0 : i, d)) : [];
      }
      function uy(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (i = c || i === n ? 1 : he(i), i = d - i, Ut(r, 0, i < 0 ? 0 : i)) : [];
      }
      function dy(r, i) {
        return r && r.length ? fs(r, ie(i, 3), !0, !0) : [];
      }
      function fy(r, i) {
        return r && r.length ? fs(r, ie(i, 3), !0) : [];
      }
      function hy(r, i, c, d) {
        var g = r == null ? 0 : r.length;
        return g ? (c && typeof c != "number" && pt(r, i, c) && (c = 0, d = g), ov(r, i, c, d)) : [];
      }
      function zf(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = c == null ? 0 : he(c);
        return g < 0 && (g = Qe(d + g, 0)), Vo(r, ie(i, 3), g);
      }
      function Hf(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = d - 1;
        return c !== n && (g = he(c), g = c < 0 ? Qe(d + g, 0) : at(g, d - 1)), Vo(r, ie(i, 3), g, !0);
      }
      function Wf(r) {
        var i = r == null ? 0 : r.length;
        return i ? ot(r, 1) : [];
      }
      function py(r) {
        var i = r == null ? 0 : r.length;
        return i ? ot(r, le) : [];
      }
      function my(r, i) {
        var c = r == null ? 0 : r.length;
        return c ? (i = i === n ? 1 : he(i), ot(r, i)) : [];
      }
      function gy(r) {
        for (var i = -1, c = r == null ? 0 : r.length, d = {}; ++i < c; ) {
          var g = r[i];
          d[g[0]] = g[1];
        }
        return d;
      }
      function Bf(r) {
        return r && r.length ? r[0] : n;
      }
      function vy(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = c == null ? 0 : he(c);
        return g < 0 && (g = Qe(d + g, 0)), ei(r, i, g);
      }
      function yy(r) {
        var i = r == null ? 0 : r.length;
        return i ? Ut(r, 0, -1) : [];
      }
      var by = ge(function(r) {
        var i = He(r, Ec);
        return i.length && i[0] === r[0] ? gc(i) : [];
      }), xy = ge(function(r) {
        var i = $t(r), c = He(r, Ec);
        return i === $t(c) ? i = n : c.pop(), c.length && c[0] === r[0] ? gc(c, ie(i, 2)) : [];
      }), wy = ge(function(r) {
        var i = $t(r), c = He(r, Ec);
        return i = typeof i == "function" ? i : n, i && c.pop(), c.length && c[0] === r[0] ? gc(c, n, i) : [];
      });
      function Cy(r, i) {
        return r == null ? "" : y2.call(r, i);
      }
      function $t(r) {
        var i = r == null ? 0 : r.length;
        return i ? r[i - 1] : n;
      }
      function Sy(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = d;
        return c !== n && (g = he(c), g = g < 0 ? Qe(d + g, 0) : at(g, d - 1)), i === i ? n2(r, i, g) : Vo(r, wd, g, !0);
      }
      function _y(r, i) {
        return r && r.length ? Jd(r, he(i)) : n;
      }
      var Ty = ge(Uf);
      function Uf(r, i) {
        return r && r.length && i && i.length ? xc(r, i) : r;
      }
      function Ey(r, i, c) {
        return r && r.length && i && i.length ? xc(r, i, ie(c, 2)) : r;
      }
      function Iy(r, i, c) {
        return r && r.length && i && i.length ? xc(r, i, n, c) : r;
      }
      var ky = Dn(function(r, i) {
        var c = r == null ? 0 : r.length, d = fc(r, i);
        return tf(r, He(i, function(g) {
          return jn(g, c) ? +g : g;
        }).sort(ff)), d;
      });
      function Ay(r, i) {
        var c = [];
        if (!(r && r.length))
          return c;
        var d = -1, g = [], w = r.length;
        for (i = ie(i, 3); ++d < w; ) {
          var _ = r[d];
          i(_, d, r) && (c.push(_), g.push(d));
        }
        return tf(r, g), c;
      }
      function Hc(r) {
        return r == null ? r : C2.call(r);
      }
      function Ry(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (c && typeof c != "number" && pt(r, i, c) ? (i = 0, c = d) : (i = i == null ? 0 : he(i), c = c === n ? d : he(c)), Ut(r, i, c)) : [];
      }
      function Py(r, i) {
        return ds(r, i);
      }
      function My(r, i, c) {
        return Sc(r, i, ie(c, 2));
      }
      function Oy(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var d = ds(r, i);
          if (d < c && Qt(r[d], i))
            return d;
        }
        return -1;
      }
      function Ly(r, i) {
        return ds(r, i, !0);
      }
      function Dy(r, i, c) {
        return Sc(r, i, ie(c, 2), !0);
      }
      function jy(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var d = ds(r, i, !0) - 1;
          if (Qt(r[d], i))
            return d;
        }
        return -1;
      }
      function Ny(r) {
        return r && r.length ? rf(r) : [];
      }
      function Fy(r, i) {
        return r && r.length ? rf(r, ie(i, 2)) : [];
      }
      function zy(r) {
        var i = r == null ? 0 : r.length;
        return i ? Ut(r, 1, i) : [];
      }
      function Hy(r, i, c) {
        return r && r.length ? (i = c || i === n ? 1 : he(i), Ut(r, 0, i < 0 ? 0 : i)) : [];
      }
      function Wy(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (i = c || i === n ? 1 : he(i), i = d - i, Ut(r, i < 0 ? 0 : i, d)) : [];
      }
      function By(r, i) {
        return r && r.length ? fs(r, ie(i, 3), !1, !0) : [];
      }
      function Uy(r, i) {
        return r && r.length ? fs(r, ie(i, 3)) : [];
      }
      var $y = ge(function(r) {
        return rr(ot(r, 1, Ge, !0));
      }), Vy = ge(function(r) {
        var i = $t(r);
        return Ge(i) && (i = n), rr(ot(r, 1, Ge, !0), ie(i, 2));
      }), Gy = ge(function(r) {
        var i = $t(r);
        return i = typeof i == "function" ? i : n, rr(ot(r, 1, Ge, !0), n, i);
      });
      function Zy(r) {
        return r && r.length ? rr(r) : [];
      }
      function Yy(r, i) {
        return r && r.length ? rr(r, ie(i, 2)) : [];
      }
      function Xy(r, i) {
        return i = typeof i == "function" ? i : n, r && r.length ? rr(r, n, i) : [];
      }
      function Wc(r) {
        if (!(r && r.length))
          return [];
        var i = 0;
        return r = Jn(r, function(c) {
          if (Ge(c))
            return i = Qe(c.length, i), !0;
        }), ic(i, function(c) {
          return He(r, tc(c));
        });
      }
      function $f(r, i) {
        if (!(r && r.length))
          return [];
        var c = Wc(r);
        return i == null ? c : He(c, function(d) {
          return Et(i, n, d);
        });
      }
      var Ky = ge(function(r, i) {
        return Ge(r) ? Qi(r, i) : [];
      }), qy = ge(function(r) {
        return Tc(Jn(r, Ge));
      }), Jy = ge(function(r) {
        var i = $t(r);
        return Ge(i) && (i = n), Tc(Jn(r, Ge), ie(i, 2));
      }), Qy = ge(function(r) {
        var i = $t(r);
        return i = typeof i == "function" ? i : n, Tc(Jn(r, Ge), n, i);
      }), eb = ge(Wc);
      function tb(r, i) {
        return cf(r || [], i || [], Ji);
      }
      function nb(r, i) {
        return cf(r || [], i || [], no);
      }
      var rb = ge(function(r) {
        var i = r.length, c = i > 1 ? r[i - 1] : n;
        return c = typeof c == "function" ? (r.pop(), c) : n, $f(r, c);
      });
      function Vf(r) {
        var i = y(r);
        return i.__chain__ = !0, i;
      }
      function ib(r, i) {
        return i(r), r;
      }
      function ws(r, i) {
        return i(r);
      }
      var ob = Dn(function(r) {
        var i = r.length, c = i ? r[0] : 0, d = this.__wrapped__, g = function(w) {
          return fc(w, r);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Ce) || !jn(c) ? this.thru(g) : (d = d.slice(c, +c + (i ? 1 : 0)), d.__actions__.push({
          func: ws,
          args: [g],
          thisArg: n
        }), new Wt(d, this.__chain__).thru(function(w) {
          return i && !w.length && w.push(n), w;
        }));
      });
      function sb() {
        return Vf(this);
      }
      function ab() {
        return new Wt(this.value(), this.__chain__);
      }
      function cb() {
        this.__values__ === n && (this.__values__ = oh(this.value()));
        var r = this.__index__ >= this.__values__.length, i = r ? n : this.__values__[this.__index__++];
        return { done: r, value: i };
      }
      function lb() {
        return this;
      }
      function ub(r) {
        for (var i, c = this; c instanceof ss; ) {
          var d = Ff(c);
          d.__index__ = 0, d.__values__ = n, i ? g.__wrapped__ = d : i = d;
          var g = d;
          c = c.__wrapped__;
        }
        return g.__wrapped__ = r, i;
      }
      function db() {
        var r = this.__wrapped__;
        if (r instanceof Ce) {
          var i = r;
          return this.__actions__.length && (i = new Ce(this)), i = i.reverse(), i.__actions__.push({
            func: ws,
            args: [Hc],
            thisArg: n
          }), new Wt(i, this.__chain__);
        }
        return this.thru(Hc);
      }
      function fb() {
        return af(this.__wrapped__, this.__actions__);
      }
      var hb = hs(function(r, i, c) {
        Oe.call(r, c) ? ++r[c] : On(r, c, 1);
      });
      function pb(r, i, c) {
        var d = de(r) ? bd : iv;
        return c && pt(r, i, c) && (i = n), d(r, ie(i, 3));
      }
      function mb(r, i) {
        var c = de(r) ? Jn : Ud;
        return c(r, ie(i, 3));
      }
      var gb = yf(zf), vb = yf(Hf);
      function yb(r, i) {
        return ot(Cs(r, i), 1);
      }
      function bb(r, i) {
        return ot(Cs(r, i), le);
      }
      function xb(r, i, c) {
        return c = c === n ? 1 : he(c), ot(Cs(r, i), c);
      }
      function Gf(r, i) {
        var c = de(r) ? zt : nr;
        return c(r, ie(i, 3));
      }
      function Zf(r, i) {
        var c = de(r) ? zg : Bd;
        return c(r, ie(i, 3));
      }
      var wb = hs(function(r, i, c) {
        Oe.call(r, c) ? r[c].push(i) : On(r, c, [i]);
      });
      function Cb(r, i, c, d) {
        r = bt(r) ? r : fi(r), c = c && !d ? he(c) : 0;
        var g = r.length;
        return c < 0 && (c = Qe(g + c, 0)), Is(r) ? c <= g && r.indexOf(i, c) > -1 : !!g && ei(r, i, c) > -1;
      }
      var Sb = ge(function(r, i, c) {
        var d = -1, g = typeof i == "function", w = bt(r) ? D(r.length) : [];
        return nr(r, function(_) {
          w[++d] = g ? Et(i, _, c) : eo(_, i, c);
        }), w;
      }), _b = hs(function(r, i, c) {
        On(r, c, i);
      });
      function Cs(r, i) {
        var c = de(r) ? He : Xd;
        return c(r, ie(i, 3));
      }
      function Tb(r, i, c, d) {
        return r == null ? [] : (de(i) || (i = i == null ? [] : [i]), c = d ? n : c, de(c) || (c = c == null ? [] : [c]), Qd(r, i, c));
      }
      var Eb = hs(function(r, i, c) {
        r[c ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Ib(r, i, c) {
        var d = de(r) ? Qa : Sd, g = arguments.length < 3;
        return d(r, ie(i, 4), c, g, nr);
      }
      function kb(r, i, c) {
        var d = de(r) ? Hg : Sd, g = arguments.length < 3;
        return d(r, ie(i, 4), c, g, Bd);
      }
      function Ab(r, i) {
        var c = de(r) ? Jn : Ud;
        return c(r, Ts(ie(i, 3)));
      }
      function Rb(r) {
        var i = de(r) ? Fd : Cv;
        return i(r);
      }
      function Pb(r, i, c) {
        (c ? pt(r, i, c) : i === n) ? i = 1 : i = he(i);
        var d = de(r) ? Q2 : Sv;
        return d(r, i);
      }
      function Mb(r) {
        var i = de(r) ? ev : Tv;
        return i(r);
      }
      function Ob(r) {
        if (r == null)
          return 0;
        if (bt(r))
          return Is(r) ? ni(r) : r.length;
        var i = ct(r);
        return i == _t || i == Tt ? r.size : yc(r).length;
      }
      function Lb(r, i, c) {
        var d = de(r) ? ec : Ev;
        return c && pt(r, i, c) && (i = n), d(r, ie(i, 3));
      }
      var Db = ge(function(r, i) {
        if (r == null)
          return [];
        var c = i.length;
        return c > 1 && pt(r, i[0], i[1]) ? i = [] : c > 2 && pt(i[0], i[1], i[2]) && (i = [i[0]]), Qd(r, ot(i, 1), []);
      }), Ss = m2 || function() {
        return it.Date.now();
      };
      function jb(r, i) {
        if (typeof i != "function")
          throw new Ht(l);
        return r = he(r), function() {
          if (--r < 1)
            return i.apply(this, arguments);
        };
      }
      function Yf(r, i, c) {
        return i = c ? n : i, i = r && i == null ? r.length : i, Ln(r, F, n, n, n, n, i);
      }
      function Xf(r, i) {
        var c;
        if (typeof i != "function")
          throw new Ht(l);
        return r = he(r), function() {
          return --r > 0 && (c = i.apply(this, arguments)), r <= 1 && (i = n), c;
        };
      }
      var Bc = ge(function(r, i, c) {
        var d = E;
        if (c.length) {
          var g = er(c, ui(Bc));
          d |= N;
        }
        return Ln(r, d, i, c, g);
      }), Kf = ge(function(r, i, c) {
        var d = E | k;
        if (c.length) {
          var g = er(c, ui(Kf));
          d |= N;
        }
        return Ln(i, d, r, c, g);
      });
      function qf(r, i, c) {
        i = c ? n : i;
        var d = Ln(r, M, n, n, n, n, n, i);
        return d.placeholder = qf.placeholder, d;
      }
      function Jf(r, i, c) {
        i = c ? n : i;
        var d = Ln(r, L, n, n, n, n, n, i);
        return d.placeholder = Jf.placeholder, d;
      }
      function Qf(r, i, c) {
        var d, g, w, _, A, O, z = 0, H = !1, W = !1, Y = !0;
        if (typeof r != "function")
          throw new Ht(l);
        i = Vt(i) || 0, Ue(c) && (H = !!c.leading, W = "maxWait" in c, w = W ? Qe(Vt(c.maxWait) || 0, i) : w, Y = "trailing" in c ? !!c.trailing : Y);
        function te(Ze) {
          var en = d, zn = g;
          return d = g = n, z = Ze, _ = r.apply(zn, en), _;
        }
        function oe(Ze) {
          return z = Ze, A = oo(be, i), H ? te(Ze) : _;
        }
        function me(Ze) {
          var en = Ze - O, zn = Ze - z, yh = i - en;
          return W ? at(yh, w - zn) : yh;
        }
        function se(Ze) {
          var en = Ze - O, zn = Ze - z;
          return O === n || en >= i || en < 0 || W && zn >= w;
        }
        function be() {
          var Ze = Ss();
          if (se(Ze))
            return Ee(Ze);
          A = oo(be, me(Ze));
        }
        function Ee(Ze) {
          return A = n, Y && d ? te(Ze) : (d = g = n, _);
        }
        function Rt() {
          A !== n && lf(A), z = 0, d = O = g = A = n;
        }
        function mt() {
          return A === n ? _ : Ee(Ss());
        }
        function Pt() {
          var Ze = Ss(), en = se(Ze);
          if (d = arguments, g = this, O = Ze, en) {
            if (A === n)
              return oe(O);
            if (W)
              return lf(A), A = oo(be, i), te(O);
          }
          return A === n && (A = oo(be, i)), _;
        }
        return Pt.cancel = Rt, Pt.flush = mt, Pt;
      }
      var Nb = ge(function(r, i) {
        return Wd(r, 1, i);
      }), Fb = ge(function(r, i, c) {
        return Wd(r, Vt(i) || 0, c);
      });
      function zb(r) {
        return Ln(r, G);
      }
      function _s(r, i) {
        if (typeof r != "function" || i != null && typeof i != "function")
          throw new Ht(l);
        var c = function() {
          var d = arguments, g = i ? i.apply(this, d) : d[0], w = c.cache;
          if (w.has(g))
            return w.get(g);
          var _ = r.apply(this, d);
          return c.cache = w.set(g, _) || w, _;
        };
        return c.cache = new (_s.Cache || Mn)(), c;
      }
      _s.Cache = Mn;
      function Ts(r) {
        if (typeof r != "function")
          throw new Ht(l);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, i[0]);
            case 2:
              return !r.call(this, i[0], i[1]);
            case 3:
              return !r.call(this, i[0], i[1], i[2]);
          }
          return !r.apply(this, i);
        };
      }
      function Hb(r) {
        return Xf(2, r);
      }
      var Wb = Iv(function(r, i) {
        i = i.length == 1 && de(i[0]) ? He(i[0], It(ie())) : He(ot(i, 1), It(ie()));
        var c = i.length;
        return ge(function(d) {
          for (var g = -1, w = at(d.length, c); ++g < w; )
            d[g] = i[g].call(this, d[g]);
          return Et(r, this, d);
        });
      }), Uc = ge(function(r, i) {
        var c = er(i, ui(Uc));
        return Ln(r, N, n, i, c);
      }), eh = ge(function(r, i) {
        var c = er(i, ui(eh));
        return Ln(r, $, n, i, c);
      }), Bb = Dn(function(r, i) {
        return Ln(r, V, n, n, n, i);
      });
      function Ub(r, i) {
        if (typeof r != "function")
          throw new Ht(l);
        return i = i === n ? i : he(i), ge(r, i);
      }
      function $b(r, i) {
        if (typeof r != "function")
          throw new Ht(l);
        return i = i == null ? 0 : Qe(he(i), 0), ge(function(c) {
          var d = c[i], g = or(c, 0, i);
          return d && Qn(g, d), Et(r, this, g);
        });
      }
      function Vb(r, i, c) {
        var d = !0, g = !0;
        if (typeof r != "function")
          throw new Ht(l);
        return Ue(c) && (d = "leading" in c ? !!c.leading : d, g = "trailing" in c ? !!c.trailing : g), Qf(r, i, {
          leading: d,
          maxWait: i,
          trailing: g
        });
      }
      function Gb(r) {
        return Yf(r, 1);
      }
      function Zb(r, i) {
        return Uc(Ic(i), r);
      }
      function Yb() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return de(r) ? r : [r];
      }
      function Xb(r) {
        return Bt(r, C);
      }
      function Kb(r, i) {
        return i = typeof i == "function" ? i : n, Bt(r, C, i);
      }
      function qb(r) {
        return Bt(r, v | C);
      }
      function Jb(r, i) {
        return i = typeof i == "function" ? i : n, Bt(r, v | C, i);
      }
      function Qb(r, i) {
        return i == null || Hd(r, i, nt(i));
      }
      function Qt(r, i) {
        return r === i || r !== r && i !== i;
      }
      var e5 = vs(mc), t5 = vs(function(r, i) {
        return r >= i;
      }), Pr = Gd(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Gd : function(r) {
        return Ve(r) && Oe.call(r, "callee") && !Md.call(r, "callee");
      }, de = D.isArray, n5 = hd ? It(hd) : uv;
      function bt(r) {
        return r != null && Es(r.length) && !Nn(r);
      }
      function Ge(r) {
        return Ve(r) && bt(r);
      }
      function r5(r) {
        return r === !0 || r === !1 || Ve(r) && ht(r) == St;
      }
      var sr = v2 || el, i5 = pd ? It(pd) : dv;
      function o5(r) {
        return Ve(r) && r.nodeType === 1 && !so(r);
      }
      function s5(r) {
        if (r == null)
          return !0;
        if (bt(r) && (de(r) || typeof r == "string" || typeof r.splice == "function" || sr(r) || di(r) || Pr(r)))
          return !r.length;
        var i = ct(r);
        if (i == _t || i == Tt)
          return !r.size;
        if (io(r))
          return !yc(r).length;
        for (var c in r)
          if (Oe.call(r, c))
            return !1;
        return !0;
      }
      function a5(r, i) {
        return to(r, i);
      }
      function c5(r, i, c) {
        c = typeof c == "function" ? c : n;
        var d = c ? c(r, i) : n;
        return d === n ? to(r, i, n, c) : !!d;
      }
      function $c(r) {
        if (!Ve(r))
          return !1;
        var i = ht(r);
        return i == Zn || i == Gn || typeof r.message == "string" && typeof r.name == "string" && !so(r);
      }
      function l5(r) {
        return typeof r == "number" && Ld(r);
      }
      function Nn(r) {
        if (!Ue(r))
          return !1;
        var i = ht(r);
        return i == In || i == kn || i == Yt || i == Gr;
      }
      function th(r) {
        return typeof r == "number" && r == he(r);
      }
      function Es(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ee;
      }
      function Ue(r) {
        var i = typeof r;
        return r != null && (i == "object" || i == "function");
      }
      function Ve(r) {
        return r != null && typeof r == "object";
      }
      var nh = md ? It(md) : hv;
      function u5(r, i) {
        return r === i || vc(r, i, Lc(i));
      }
      function d5(r, i, c) {
        return c = typeof c == "function" ? c : n, vc(r, i, Lc(i), c);
      }
      function f5(r) {
        return rh(r) && r != +r;
      }
      function h5(r) {
        if (Kv(r))
          throw new ue(a);
        return Zd(r);
      }
      function p5(r) {
        return r === null;
      }
      function m5(r) {
        return r == null;
      }
      function rh(r) {
        return typeof r == "number" || Ve(r) && ht(r) == un;
      }
      function so(r) {
        if (!Ve(r) || ht(r) != Nt)
          return !1;
        var i = Qo(r);
        if (i === null)
          return !0;
        var c = Oe.call(i, "constructor") && i.constructor;
        return typeof c == "function" && c instanceof c && Xo.call(c) == d2;
      }
      var Vc = gd ? It(gd) : pv;
      function g5(r) {
        return th(r) && r >= -9007199254740991 && r <= ee;
      }
      var ih = vd ? It(vd) : mv;
      function Is(r) {
        return typeof r == "string" || !de(r) && Ve(r) && ht(r) == An;
      }
      function At(r) {
        return typeof r == "symbol" || Ve(r) && ht(r) == Zr;
      }
      var di = yd ? It(yd) : gv;
      function v5(r) {
        return r === n;
      }
      function y5(r) {
        return Ve(r) && ct(r) == Yn;
      }
      function b5(r) {
        return Ve(r) && ht(r) == No;
      }
      var x5 = vs(bc), w5 = vs(function(r, i) {
        return r <= i;
      });
      function oh(r) {
        if (!r)
          return [];
        if (bt(r))
          return Is(r) ? qt(r) : yt(r);
        if (Zi && r[Zi])
          return Qg(r[Zi]());
        var i = ct(r), c = i == _t ? sc : i == Tt ? Go : fi;
        return c(r);
      }
      function Fn(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Vt(r), r === le || r === -1 / 0) {
          var i = r < 0 ? -1 : 1;
          return i * ye;
        }
        return r === r ? r : 0;
      }
      function he(r) {
        var i = Fn(r), c = i % 1;
        return i === i ? c ? i - c : i : 0;
      }
      function sh(r) {
        return r ? Ir(he(r), 0, Me) : 0;
      }
      function Vt(r) {
        if (typeof r == "number")
          return r;
        if (At(r))
          return fe;
        if (Ue(r)) {
          var i = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = Ue(i) ? i + "" : i;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = _d(r);
        var c = ve.test(r);
        return c || Be.test(r) ? jg(r.slice(2), c ? 2 : 8) : we.test(r) ? fe : +r;
      }
      function ah(r) {
        return fn(r, xt(r));
      }
      function C5(r) {
        return r ? Ir(he(r), -9007199254740991, ee) : r === 0 ? r : 0;
      }
      function Pe(r) {
        return r == null ? "" : kt(r);
      }
      var S5 = ci(function(r, i) {
        if (io(i) || bt(i)) {
          fn(i, nt(i), r);
          return;
        }
        for (var c in i)
          Oe.call(i, c) && Ji(r, c, i[c]);
      }), ch = ci(function(r, i) {
        fn(i, xt(i), r);
      }), ks = ci(function(r, i, c, d) {
        fn(i, xt(i), r, d);
      }), _5 = ci(function(r, i, c, d) {
        fn(i, nt(i), r, d);
      }), T5 = Dn(fc);
      function E5(r, i) {
        var c = ai(r);
        return i == null ? c : zd(c, i);
      }
      var I5 = ge(function(r, i) {
        r = De(r);
        var c = -1, d = i.length, g = d > 2 ? i[2] : n;
        for (g && pt(i[0], i[1], g) && (d = 1); ++c < d; )
          for (var w = i[c], _ = xt(w), A = -1, O = _.length; ++A < O; ) {
            var z = _[A], H = r[z];
            (H === n || Qt(H, ii[z]) && !Oe.call(r, z)) && (r[z] = w[z]);
          }
        return r;
      }), k5 = ge(function(r) {
        return r.push(n, Tf), Et(lh, n, r);
      });
      function A5(r, i) {
        return xd(r, ie(i, 3), dn);
      }
      function R5(r, i) {
        return xd(r, ie(i, 3), pc);
      }
      function P5(r, i) {
        return r == null ? r : hc(r, ie(i, 3), xt);
      }
      function M5(r, i) {
        return r == null ? r : $d(r, ie(i, 3), xt);
      }
      function O5(r, i) {
        return r && dn(r, ie(i, 3));
      }
      function L5(r, i) {
        return r && pc(r, ie(i, 3));
      }
      function D5(r) {
        return r == null ? [] : ls(r, nt(r));
      }
      function j5(r) {
        return r == null ? [] : ls(r, xt(r));
      }
      function Gc(r, i, c) {
        var d = r == null ? n : kr(r, i);
        return d === n ? c : d;
      }
      function N5(r, i) {
        return r != null && kf(r, i, sv);
      }
      function Zc(r, i) {
        return r != null && kf(r, i, av);
      }
      var F5 = xf(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = Ko.call(i)), r[i] = c;
      }, Xc(wt)), z5 = xf(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = Ko.call(i)), Oe.call(r, i) ? r[i].push(c) : r[i] = [c];
      }, ie), H5 = ge(eo);
      function nt(r) {
        return bt(r) ? Nd(r) : yc(r);
      }
      function xt(r) {
        return bt(r) ? Nd(r, !0) : vv(r);
      }
      function W5(r, i) {
        var c = {};
        return i = ie(i, 3), dn(r, function(d, g, w) {
          On(c, i(d, g, w), d);
        }), c;
      }
      function B5(r, i) {
        var c = {};
        return i = ie(i, 3), dn(r, function(d, g, w) {
          On(c, g, i(d, g, w));
        }), c;
      }
      var U5 = ci(function(r, i, c) {
        us(r, i, c);
      }), lh = ci(function(r, i, c, d) {
        us(r, i, c, d);
      }), $5 = Dn(function(r, i) {
        var c = {};
        if (r == null)
          return c;
        var d = !1;
        i = He(i, function(w) {
          return w = ir(w, r), d || (d = w.length > 1), w;
        }), fn(r, Mc(r), c), d && (c = Bt(c, v | b | C, Fv));
        for (var g = i.length; g--; )
          _c(c, i[g]);
        return c;
      });
      function V5(r, i) {
        return uh(r, Ts(ie(i)));
      }
      var G5 = Dn(function(r, i) {
        return r == null ? {} : bv(r, i);
      });
      function uh(r, i) {
        if (r == null)
          return {};
        var c = He(Mc(r), function(d) {
          return [d];
        });
        return i = ie(i), ef(r, c, function(d, g) {
          return i(d, g[0]);
        });
      }
      function Z5(r, i, c) {
        i = ir(i, r);
        var d = -1, g = i.length;
        for (g || (g = 1, r = n); ++d < g; ) {
          var w = r == null ? n : r[hn(i[d])];
          w === n && (d = g, w = c), r = Nn(w) ? w.call(r) : w;
        }
        return r;
      }
      function Y5(r, i, c) {
        return r == null ? r : no(r, i, c);
      }
      function X5(r, i, c, d) {
        return d = typeof d == "function" ? d : n, r == null ? r : no(r, i, c, d);
      }
      var dh = Sf(nt), fh = Sf(xt);
      function K5(r, i, c) {
        var d = de(r), g = d || sr(r) || di(r);
        if (i = ie(i, 4), c == null) {
          var w = r && r.constructor;
          g ? c = d ? new w() : [] : Ue(r) ? c = Nn(w) ? ai(Qo(r)) : {} : c = {};
        }
        return (g ? zt : dn)(r, function(_, A, O) {
          return i(c, _, A, O);
        }), c;
      }
      function q5(r, i) {
        return r == null ? !0 : _c(r, i);
      }
      function J5(r, i, c) {
        return r == null ? r : sf(r, i, Ic(c));
      }
      function Q5(r, i, c, d) {
        return d = typeof d == "function" ? d : n, r == null ? r : sf(r, i, Ic(c), d);
      }
      function fi(r) {
        return r == null ? [] : oc(r, nt(r));
      }
      function e4(r) {
        return r == null ? [] : oc(r, xt(r));
      }
      function t4(r, i, c) {
        return c === n && (c = i, i = n), c !== n && (c = Vt(c), c = c === c ? c : 0), i !== n && (i = Vt(i), i = i === i ? i : 0), Ir(Vt(r), i, c);
      }
      function n4(r, i, c) {
        return i = Fn(i), c === n ? (c = i, i = 0) : c = Fn(c), r = Vt(r), cv(r, i, c);
      }
      function r4(r, i, c) {
        if (c && typeof c != "boolean" && pt(r, i, c) && (i = c = n), c === n && (typeof i == "boolean" ? (c = i, i = n) : typeof r == "boolean" && (c = r, r = n)), r === n && i === n ? (r = 0, i = 1) : (r = Fn(r), i === n ? (i = r, r = 0) : i = Fn(i)), r > i) {
          var d = r;
          r = i, i = d;
        }
        if (c || r % 1 || i % 1) {
          var g = Dd();
          return at(r + g * (i - r + Dg("1e-" + ((g + "").length - 1))), i);
        }
        return wc(r, i);
      }
      var i4 = li(function(r, i, c) {
        return i = i.toLowerCase(), r + (c ? hh(i) : i);
      });
      function hh(r) {
        return Yc(Pe(r).toLowerCase());
      }
      function ph(r) {
        return r = Pe(r), r && r.replace(vt, Yg).replace(Tg, "");
      }
      function o4(r, i, c) {
        r = Pe(r), i = kt(i);
        var d = r.length;
        c = c === n ? d : Ir(he(c), 0, d);
        var g = c;
        return c -= i.length, c >= 0 && r.slice(c, g) == i;
      }
      function s4(r) {
        return r = Pe(r), r && ja.test(r) ? r.replace(qr, Xg) : r;
      }
      function a4(r) {
        return r = Pe(r), r && Bo.test(r) ? r.replace(Jr, "\\$&") : r;
      }
      var c4 = li(function(r, i, c) {
        return r + (c ? "-" : "") + i.toLowerCase();
      }), l4 = li(function(r, i, c) {
        return r + (c ? " " : "") + i.toLowerCase();
      }), u4 = vf("toLowerCase");
      function d4(r, i, c) {
        r = Pe(r), i = he(i);
        var d = i ? ni(r) : 0;
        if (!i || d >= i)
          return r;
        var g = (i - d) / 2;
        return gs(rs(g), c) + r + gs(ns(g), c);
      }
      function f4(r, i, c) {
        r = Pe(r), i = he(i);
        var d = i ? ni(r) : 0;
        return i && d < i ? r + gs(i - d, c) : r;
      }
      function h4(r, i, c) {
        r = Pe(r), i = he(i);
        var d = i ? ni(r) : 0;
        return i && d < i ? gs(i - d, c) + r : r;
      }
      function p4(r, i, c) {
        return c || i == null ? i = 0 : i && (i = +i), w2(Pe(r).replace($i, ""), i || 0);
      }
      function m4(r, i, c) {
        return (c ? pt(r, i, c) : i === n) ? i = 1 : i = he(i), Cc(Pe(r), i);
      }
      function g4() {
        var r = arguments, i = Pe(r[0]);
        return r.length < 3 ? i : i.replace(r[1], r[2]);
      }
      var v4 = li(function(r, i, c) {
        return r + (c ? "_" : "") + i.toLowerCase();
      });
      function y4(r, i, c) {
        return c && typeof c != "number" && pt(r, i, c) && (i = c = n), c = c === n ? Me : c >>> 0, c ? (r = Pe(r), r && (typeof i == "string" || i != null && !Vc(i)) && (i = kt(i), !i && ti(r)) ? or(qt(r), 0, c) : r.split(i, c)) : [];
      }
      var b4 = li(function(r, i, c) {
        return r + (c ? " " : "") + Yc(i);
      });
      function x4(r, i, c) {
        return r = Pe(r), c = c == null ? 0 : Ir(he(c), 0, r.length), i = kt(i), r.slice(c, c + i.length) == i;
      }
      function w4(r, i, c) {
        var d = y.templateSettings;
        c && pt(r, i, c) && (i = n), r = Pe(r), i = ks({}, i, d, _f);
        var g = ks({}, i.imports, d.imports, _f), w = nt(g), _ = oc(g, w), A, O, z = 0, H = i.interpolate || Kt, W = "__p += '", Y = ac(
          (i.escape || Kt).source + "|" + H.source + "|" + (H === Ui ? Ie : Kt).source + "|" + (i.evaluate || Kt).source + "|$",
          "g"
        ), te = "//# sourceURL=" + (Oe.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Rg + "]") + `
`;
        r.replace(Y, function(se, be, Ee, Rt, mt, Pt) {
          return Ee || (Ee = Rt), W += r.slice(z, Pt).replace(Rn, Kg), be && (A = !0, W += `' +
__e(` + be + `) +
'`), mt && (O = !0, W += `';
` + mt + `;
__p += '`), Ee && (W += `' +
((__t = (` + Ee + `)) == null ? '' : __t) +
'`), z = Pt + se.length, se;
        }), W += `';
`;
        var oe = Oe.call(i, "variable") && i.variable;
        if (!oe)
          W = `with (obj) {
` + W + `
}
`;
        else if (X.test(oe))
          throw new ue(u);
        W = (O ? W.replace(Bi, "") : W).replace(Fo, "$1").replace(qn, "$1;"), W = "function(" + (oe || "obj") + `) {
` + (oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (O ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var me = gh(function() {
          return ke(w, te + "return " + W).apply(n, _);
        });
        if (me.source = W, $c(me))
          throw me;
        return me;
      }
      function C4(r) {
        return Pe(r).toLowerCase();
      }
      function S4(r) {
        return Pe(r).toUpperCase();
      }
      function _4(r, i, c) {
        if (r = Pe(r), r && (c || i === n))
          return _d(r);
        if (!r || !(i = kt(i)))
          return r;
        var d = qt(r), g = qt(i), w = Td(d, g), _ = Ed(d, g) + 1;
        return or(d, w, _).join("");
      }
      function T4(r, i, c) {
        if (r = Pe(r), r && (c || i === n))
          return r.slice(0, kd(r) + 1);
        if (!r || !(i = kt(i)))
          return r;
        var d = qt(r), g = Ed(d, qt(i)) + 1;
        return or(d, 0, g).join("");
      }
      function E4(r, i, c) {
        if (r = Pe(r), r && (c || i === n))
          return r.replace($i, "");
        if (!r || !(i = kt(i)))
          return r;
        var d = qt(r), g = Td(d, qt(i));
        return or(d, g).join("");
      }
      function I4(r, i) {
        var c = K, d = J;
        if (Ue(i)) {
          var g = "separator" in i ? i.separator : g;
          c = "length" in i ? he(i.length) : c, d = "omission" in i ? kt(i.omission) : d;
        }
        r = Pe(r);
        var w = r.length;
        if (ti(r)) {
          var _ = qt(r);
          w = _.length;
        }
        if (c >= w)
          return r;
        var A = c - ni(d);
        if (A < 1)
          return d;
        var O = _ ? or(_, 0, A).join("") : r.slice(0, A);
        if (g === n)
          return O + d;
        if (_ && (A += O.length - A), Vc(g)) {
          if (r.slice(A).search(g)) {
            var z, H = O;
            for (g.global || (g = ac(g.source, Pe(Re.exec(g)) + "g")), g.lastIndex = 0; z = g.exec(H); )
              var W = z.index;
            O = O.slice(0, W === n ? A : W);
          }
        } else if (r.indexOf(kt(g), A) != A) {
          var Y = O.lastIndexOf(g);
          Y > -1 && (O = O.slice(0, Y));
        }
        return O + d;
      }
      function k4(r) {
        return r = Pe(r), r && zo.test(r) ? r.replace(Kr, r2) : r;
      }
      var A4 = li(function(r, i, c) {
        return r + (c ? " " : "") + i.toUpperCase();
      }), Yc = vf("toUpperCase");
      function mh(r, i, c) {
        return r = Pe(r), i = c ? n : i, i === n ? Jg(r) ? s2(r) : Ug(r) : r.match(i) || [];
      }
      var gh = ge(function(r, i) {
        try {
          return Et(r, n, i);
        } catch (c) {
          return $c(c) ? c : new ue(c);
        }
      }), R4 = Dn(function(r, i) {
        return zt(i, function(c) {
          c = hn(c), On(r, c, Bc(r[c], r));
        }), r;
      });
      function P4(r) {
        var i = r == null ? 0 : r.length, c = ie();
        return r = i ? He(r, function(d) {
          if (typeof d[1] != "function")
            throw new Ht(l);
          return [c(d[0]), d[1]];
        }) : [], ge(function(d) {
          for (var g = -1; ++g < i; ) {
            var w = r[g];
            if (Et(w[0], this, d))
              return Et(w[1], this, d);
          }
        });
      }
      function M4(r) {
        return rv(Bt(r, v));
      }
      function Xc(r) {
        return function() {
          return r;
        };
      }
      function O4(r, i) {
        return r == null || r !== r ? i : r;
      }
      var L4 = bf(), D4 = bf(!0);
      function wt(r) {
        return r;
      }
      function Kc(r) {
        return Yd(typeof r == "function" ? r : Bt(r, v));
      }
      function j4(r) {
        return Kd(Bt(r, v));
      }
      function N4(r, i) {
        return qd(r, Bt(i, v));
      }
      var F4 = ge(function(r, i) {
        return function(c) {
          return eo(c, r, i);
        };
      }), z4 = ge(function(r, i) {
        return function(c) {
          return eo(r, c, i);
        };
      });
      function qc(r, i, c) {
        var d = nt(i), g = ls(i, d);
        c == null && !(Ue(i) && (g.length || !d.length)) && (c = i, i = r, r = this, g = ls(i, nt(i)));
        var w = !(Ue(c) && "chain" in c) || !!c.chain, _ = Nn(r);
        return zt(g, function(A) {
          var O = i[A];
          r[A] = O, _ && (r.prototype[A] = function() {
            var z = this.__chain__;
            if (w || z) {
              var H = r(this.__wrapped__), W = H.__actions__ = yt(this.__actions__);
              return W.push({ func: O, args: arguments, thisArg: r }), H.__chain__ = z, H;
            }
            return O.apply(r, Qn([this.value()], arguments));
          });
        }), r;
      }
      function H4() {
        return it._ === this && (it._ = f2), this;
      }
      function Jc() {
      }
      function W4(r) {
        return r = he(r), ge(function(i) {
          return Jd(i, r);
        });
      }
      var B4 = Ac(He), U4 = Ac(bd), $4 = Ac(ec);
      function vh(r) {
        return jc(r) ? tc(hn(r)) : xv(r);
      }
      function V4(r) {
        return function(i) {
          return r == null ? n : kr(r, i);
        };
      }
      var G4 = wf(), Z4 = wf(!0);
      function Qc() {
        return [];
      }
      function el() {
        return !1;
      }
      function Y4() {
        return {};
      }
      function X4() {
        return "";
      }
      function K4() {
        return !0;
      }
      function q4(r, i) {
        if (r = he(r), r < 1 || r > ee)
          return [];
        var c = Me, d = at(r, Me);
        i = ie(i), r -= Me;
        for (var g = ic(d, i); ++c < r; )
          i(c);
        return g;
      }
      function J4(r) {
        return de(r) ? He(r, hn) : At(r) ? [r] : yt(Nf(Pe(r)));
      }
      function Q4(r) {
        var i = ++u2;
        return Pe(r) + i;
      }
      var e3 = ms(function(r, i) {
        return r + i;
      }, 0), t3 = Rc("ceil"), n3 = ms(function(r, i) {
        return r / i;
      }, 1), r3 = Rc("floor");
      function i3(r) {
        return r && r.length ? cs(r, wt, mc) : n;
      }
      function o3(r, i) {
        return r && r.length ? cs(r, ie(i, 2), mc) : n;
      }
      function s3(r) {
        return Cd(r, wt);
      }
      function a3(r, i) {
        return Cd(r, ie(i, 2));
      }
      function c3(r) {
        return r && r.length ? cs(r, wt, bc) : n;
      }
      function l3(r, i) {
        return r && r.length ? cs(r, ie(i, 2), bc) : n;
      }
      var u3 = ms(function(r, i) {
        return r * i;
      }, 1), d3 = Rc("round"), f3 = ms(function(r, i) {
        return r - i;
      }, 0);
      function h3(r) {
        return r && r.length ? rc(r, wt) : 0;
      }
      function p3(r, i) {
        return r && r.length ? rc(r, ie(i, 2)) : 0;
      }
      return y.after = jb, y.ary = Yf, y.assign = S5, y.assignIn = ch, y.assignInWith = ks, y.assignWith = _5, y.at = T5, y.before = Xf, y.bind = Bc, y.bindAll = R4, y.bindKey = Kf, y.castArray = Yb, y.chain = Vf, y.chunk = ry, y.compact = iy, y.concat = oy, y.cond = P4, y.conforms = M4, y.constant = Xc, y.countBy = hb, y.create = E5, y.curry = qf, y.curryRight = Jf, y.debounce = Qf, y.defaults = I5, y.defaultsDeep = k5, y.defer = Nb, y.delay = Fb, y.difference = sy, y.differenceBy = ay, y.differenceWith = cy, y.drop = ly, y.dropRight = uy, y.dropRightWhile = dy, y.dropWhile = fy, y.fill = hy, y.filter = mb, y.flatMap = yb, y.flatMapDeep = bb, y.flatMapDepth = xb, y.flatten = Wf, y.flattenDeep = py, y.flattenDepth = my, y.flip = zb, y.flow = L4, y.flowRight = D4, y.fromPairs = gy, y.functions = D5, y.functionsIn = j5, y.groupBy = wb, y.initial = yy, y.intersection = by, y.intersectionBy = xy, y.intersectionWith = wy, y.invert = F5, y.invertBy = z5, y.invokeMap = Sb, y.iteratee = Kc, y.keyBy = _b, y.keys = nt, y.keysIn = xt, y.map = Cs, y.mapKeys = W5, y.mapValues = B5, y.matches = j4, y.matchesProperty = N4, y.memoize = _s, y.merge = U5, y.mergeWith = lh, y.method = F4, y.methodOf = z4, y.mixin = qc, y.negate = Ts, y.nthArg = W4, y.omit = $5, y.omitBy = V5, y.once = Hb, y.orderBy = Tb, y.over = B4, y.overArgs = Wb, y.overEvery = U4, y.overSome = $4, y.partial = Uc, y.partialRight = eh, y.partition = Eb, y.pick = G5, y.pickBy = uh, y.property = vh, y.propertyOf = V4, y.pull = Ty, y.pullAll = Uf, y.pullAllBy = Ey, y.pullAllWith = Iy, y.pullAt = ky, y.range = G4, y.rangeRight = Z4, y.rearg = Bb, y.reject = Ab, y.remove = Ay, y.rest = Ub, y.reverse = Hc, y.sampleSize = Pb, y.set = Y5, y.setWith = X5, y.shuffle = Mb, y.slice = Ry, y.sortBy = Db, y.sortedUniq = Ny, y.sortedUniqBy = Fy, y.split = y4, y.spread = $b, y.tail = zy, y.take = Hy, y.takeRight = Wy, y.takeRightWhile = By, y.takeWhile = Uy, y.tap = ib, y.throttle = Vb, y.thru = ws, y.toArray = oh, y.toPairs = dh, y.toPairsIn = fh, y.toPath = J4, y.toPlainObject = ah, y.transform = K5, y.unary = Gb, y.union = $y, y.unionBy = Vy, y.unionWith = Gy, y.uniq = Zy, y.uniqBy = Yy, y.uniqWith = Xy, y.unset = q5, y.unzip = Wc, y.unzipWith = $f, y.update = J5, y.updateWith = Q5, y.values = fi, y.valuesIn = e4, y.without = Ky, y.words = mh, y.wrap = Zb, y.xor = qy, y.xorBy = Jy, y.xorWith = Qy, y.zip = eb, y.zipObject = tb, y.zipObjectDeep = nb, y.zipWith = rb, y.entries = dh, y.entriesIn = fh, y.extend = ch, y.extendWith = ks, qc(y, y), y.add = e3, y.attempt = gh, y.camelCase = i4, y.capitalize = hh, y.ceil = t3, y.clamp = t4, y.clone = Xb, y.cloneDeep = qb, y.cloneDeepWith = Jb, y.cloneWith = Kb, y.conformsTo = Qb, y.deburr = ph, y.defaultTo = O4, y.divide = n3, y.endsWith = o4, y.eq = Qt, y.escape = s4, y.escapeRegExp = a4, y.every = pb, y.find = gb, y.findIndex = zf, y.findKey = A5, y.findLast = vb, y.findLastIndex = Hf, y.findLastKey = R5, y.floor = r3, y.forEach = Gf, y.forEachRight = Zf, y.forIn = P5, y.forInRight = M5, y.forOwn = O5, y.forOwnRight = L5, y.get = Gc, y.gt = e5, y.gte = t5, y.has = N5, y.hasIn = Zc, y.head = Bf, y.identity = wt, y.includes = Cb, y.indexOf = vy, y.inRange = n4, y.invoke = H5, y.isArguments = Pr, y.isArray = de, y.isArrayBuffer = n5, y.isArrayLike = bt, y.isArrayLikeObject = Ge, y.isBoolean = r5, y.isBuffer = sr, y.isDate = i5, y.isElement = o5, y.isEmpty = s5, y.isEqual = a5, y.isEqualWith = c5, y.isError = $c, y.isFinite = l5, y.isFunction = Nn, y.isInteger = th, y.isLength = Es, y.isMap = nh, y.isMatch = u5, y.isMatchWith = d5, y.isNaN = f5, y.isNative = h5, y.isNil = m5, y.isNull = p5, y.isNumber = rh, y.isObject = Ue, y.isObjectLike = Ve, y.isPlainObject = so, y.isRegExp = Vc, y.isSafeInteger = g5, y.isSet = ih, y.isString = Is, y.isSymbol = At, y.isTypedArray = di, y.isUndefined = v5, y.isWeakMap = y5, y.isWeakSet = b5, y.join = Cy, y.kebabCase = c4, y.last = $t, y.lastIndexOf = Sy, y.lowerCase = l4, y.lowerFirst = u4, y.lt = x5, y.lte = w5, y.max = i3, y.maxBy = o3, y.mean = s3, y.meanBy = a3, y.min = c3, y.minBy = l3, y.stubArray = Qc, y.stubFalse = el, y.stubObject = Y4, y.stubString = X4, y.stubTrue = K4, y.multiply = u3, y.nth = _y, y.noConflict = H4, y.noop = Jc, y.now = Ss, y.pad = d4, y.padEnd = f4, y.padStart = h4, y.parseInt = p4, y.random = r4, y.reduce = Ib, y.reduceRight = kb, y.repeat = m4, y.replace = g4, y.result = Z5, y.round = d3, y.runInContext = P, y.sample = Rb, y.size = Ob, y.snakeCase = v4, y.some = Lb, y.sortedIndex = Py, y.sortedIndexBy = My, y.sortedIndexOf = Oy, y.sortedLastIndex = Ly, y.sortedLastIndexBy = Dy, y.sortedLastIndexOf = jy, y.startCase = b4, y.startsWith = x4, y.subtract = f3, y.sum = h3, y.sumBy = p3, y.template = w4, y.times = q4, y.toFinite = Fn, y.toInteger = he, y.toLength = sh, y.toLower = C4, y.toNumber = Vt, y.toSafeInteger = C5, y.toString = Pe, y.toUpper = S4, y.trim = _4, y.trimEnd = T4, y.trimStart = E4, y.truncate = I4, y.unescape = k4, y.uniqueId = Q4, y.upperCase = A4, y.upperFirst = Yc, y.each = Gf, y.eachRight = Zf, y.first = Bf, qc(y, function() {
        var r = {};
        return dn(y, function(i, c) {
          Oe.call(y.prototype, c) || (r[c] = i);
        }), r;
      }(), { chain: !1 }), y.VERSION = o, zt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        y[r].placeholder = y;
      }), zt(["drop", "take"], function(r, i) {
        Ce.prototype[r] = function(c) {
          c = c === n ? 1 : Qe(he(c), 0);
          var d = this.__filtered__ && !i ? new Ce(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = at(c, d.__takeCount__) : d.__views__.push({
            size: at(c, Me),
            type: r + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Ce.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), zt(["filter", "map", "takeWhile"], function(r, i) {
        var c = i + 1, d = c == ne || c == re;
        Ce.prototype[r] = function(g) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: ie(g, 3),
            type: c
          }), w.__filtered__ = w.__filtered__ || d, w;
        };
      }), zt(["head", "last"], function(r, i) {
        var c = "take" + (i ? "Right" : "");
        Ce.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), zt(["initial", "tail"], function(r, i) {
        var c = "drop" + (i ? "" : "Right");
        Ce.prototype[r] = function() {
          return this.__filtered__ ? new Ce(this) : this[c](1);
        };
      }), Ce.prototype.compact = function() {
        return this.filter(wt);
      }, Ce.prototype.find = function(r) {
        return this.filter(r).head();
      }, Ce.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Ce.prototype.invokeMap = ge(function(r, i) {
        return typeof r == "function" ? new Ce(this) : this.map(function(c) {
          return eo(c, r, i);
        });
      }), Ce.prototype.reject = function(r) {
        return this.filter(Ts(ie(r)));
      }, Ce.prototype.slice = function(r, i) {
        r = he(r);
        var c = this;
        return c.__filtered__ && (r > 0 || i < 0) ? new Ce(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), i !== n && (i = he(i), c = i < 0 ? c.dropRight(-i) : c.take(i - r)), c);
      }, Ce.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Ce.prototype.toArray = function() {
        return this.take(Me);
      }, dn(Ce.prototype, function(r, i) {
        var c = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), g = y[d ? "take" + (i == "last" ? "Right" : "") : i], w = d || /^find/.test(i);
        g && (y.prototype[i] = function() {
          var _ = this.__wrapped__, A = d ? [1] : arguments, O = _ instanceof Ce, z = A[0], H = O || de(_), W = function(be) {
            var Ee = g.apply(y, Qn([be], A));
            return d && Y ? Ee[0] : Ee;
          };
          H && c && typeof z == "function" && z.length != 1 && (O = H = !1);
          var Y = this.__chain__, te = !!this.__actions__.length, oe = w && !Y, me = O && !te;
          if (!w && H) {
            _ = me ? _ : new Ce(this);
            var se = r.apply(_, A);
            return se.__actions__.push({ func: ws, args: [W], thisArg: n }), new Wt(se, Y);
          }
          return oe && me ? r.apply(this, A) : (se = this.thru(W), oe ? d ? se.value()[0] : se.value() : se);
        });
      }), zt(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var i = Zo[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(r);
        y.prototype[r] = function() {
          var g = arguments;
          if (d && !this.__chain__) {
            var w = this.value();
            return i.apply(de(w) ? w : [], g);
          }
          return this[c](function(_) {
            return i.apply(de(_) ? _ : [], g);
          });
        };
      }), dn(Ce.prototype, function(r, i) {
        var c = y[i];
        if (c) {
          var d = c.name + "";
          Oe.call(si, d) || (si[d] = []), si[d].push({ name: i, func: c });
        }
      }), si[ps(n, k).name] = [{
        name: "wrapper",
        func: n
      }], Ce.prototype.clone = k2, Ce.prototype.reverse = A2, Ce.prototype.value = R2, y.prototype.at = ob, y.prototype.chain = sb, y.prototype.commit = ab, y.prototype.next = cb, y.prototype.plant = ub, y.prototype.reverse = db, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = fb, y.prototype.first = y.prototype.head, Zi && (y.prototype[Zi] = lb), y;
    }, ri = a2();
    Sr ? ((Sr.exports = ri)._ = ri, Ka._ = ri) : it._ = ri;
  }).call(ao);
})(ta, ta.exports);
var Ae = ta.exports;
const UC = () => {
  const { trackItemIds: e, trackItemsMap: t, fps: n, trackItemDetailsMap: o } = Gt(), s = Ae.merge(t, o);
  return /* @__PURE__ */ p.jsx(Fs, { className: "bg-black overflow-hidden", children: e.map((a) => {
    const l = s[a];
    return BC[l.type](l, {
      fps: n
    });
  }) });
}, $C = () => {
  const e = pn(null), { setPlayerRef: t, duration: n, fps: o, size: s } = Gt();
  return ut(() => {
    t(e);
  }, []), /* @__PURE__ */ p.jsx(Au, { className: "size-full", children: /* @__PURE__ */ p.jsx(
    x3,
    {
      ref: e,
      component: UC,
      durationInFrames: Math.round(n / 1e3 * o) || 5 * 30,
      compositionWidth: s.width,
      compositionHeight: s.height,
      style: { width: "100%", height: "100%" },
      inputProps: {},
      fps: o,
      overflowVisible: !0,
      numberOfSharedAudioTags: 10
    }
  ) });
}, VC = ({ scrollLeft: e }) => {
  const t = pn(null), { playerRef: n, fps: o, scale: s } = Gt(), a = Mu(n), l = Xe(a / o * 1e3, s.zoom) - e, [u, f] = Ke(!1), [h, m] = Ke(0), [v, b] = Ke(l), C = () => {
    f(!1);
  }, T = (E) => {
    E.preventDefault(), f(!0);
    const k = "touches" in E ? E.touches[0].clientX : E.clientX;
    m(k), b(l);
  }, S = (E) => {
    if (u) {
      E.preventDefault();
      const R = ("touches" in E ? E.touches[0].clientX : E.clientX) - h + e, M = v + R, L = rn(M, s.zoom);
      n?.current?.seekTo(L * o / 1e3);
    }
  };
  return ut(() => {
    const E = (k) => {
      k.preventDefault();
    };
    return u ? (document.addEventListener("mousemove", S), document.addEventListener("mouseup", C), document.addEventListener("touchmove", S), document.addEventListener("touchend", C), document.addEventListener("dragstart", E)) : (document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", S), document.removeEventListener("touchend", C), document.removeEventListener("dragstart", E)), () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", S), document.removeEventListener("touchend", C), document.removeEventListener("dragstart", E);
    };
  }, [u, S, C]), /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: t,
      onMouseDown: T,
      onTouchStart: T,
      onDragStart: (E) => E.preventDefault(),
      style: {
        position: "absolute",
        left: 40 + Ru + l,
        top: 80,
        width: 1,
        height: "calc(100% - 80px)",
        background: "#d4d4d8",
        zIndex: 10,
        cursor: "pointer",
        touchAction: "none"
        // Prevent default touch actions
      },
      children: /* @__PURE__ */ p.jsxs("div", { className: "relative h-full", children: [
        /* @__PURE__ */ p.jsx("div", { className: "absolute top-0 h-full w-3 -translate-x-1/2 transform" }),
        /* @__PURE__ */ p.jsx("div", { className: "absolute top-0 h-full w-0.5 -translate-x-1/2 transform bg-white/50" }),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            style: {
              borderRadius: "0 0 20px 20px"
            },
            className: "absolute h-3 -translate-x-1/2 transform px-1.5",
            children: /* @__PURE__ */ p.jsx(
              "svg",
              {
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                children: /* @__PURE__ */ p.jsx(
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
}, GC = (e) => {
  const {
    height: t = 40,
    // Increased height to give space for the text
    longLineSize: n = 8,
    shortLineSize: o = 6,
    offsetX: s = Ul + Ru,
    textOffsetY: a = 12,
    // Place the text above the lines but inside the canvas
    textFormat: l = g8,
    scrollLeft: u = 0,
    onClick: f
  } = e, { scale: h } = Gt(), m = pn(null), [v, b] = Ke(null), [C, T] = Ke({
    width: 0,
    height: t
    // Increased height for text space
  });
  ut(() => {
    const R = m.current;
    if (R) {
      const M = R.getContext("2d");
      b(M), S(R, M, u);
    }
  }, []), ut(() => {
    v && S(m.current, v, u);
  }, [v, u, h]);
  const S = (R, M, L) => {
    if (!R || !M) return;
    const $ = R.offsetParent.offsetWidth ?? R.offsetWidth, F = C.height;
    R.width = $, R.height = F, E(M, L, $, F), T({ width: $, height: F });
  }, E = (R, M, L, N) => {
    const $ = h.zoom, F = h.unit, V = h.segments;
    R.clearRect(0, 0, L, N), R.save(), R.strokeStyle = "#71717a", R.fillStyle = "#71717a", R.lineWidth = 1, R.font = `${u8}px ${d8}`, R.textBaseline = "top", R.translate(0.5, 0), R.beginPath();
    const G = F * $ * Ea, K = Math.floor(M / G), Z = Math.ceil((M + L) / G) - K;
    for (let Q = 0; Q <= Z; ++Q) {
      const ne = Q + K;
      if (ne < 0) continue;
      const Te = ne * G / $, re = (Te - M / $) * $;
      if (re < -G || re >= L + G) continue;
      const le = l(Te), ye = -R.measureText(le).width / 2;
      R.fillText(le, re + ye + s, a);
    }
    for (let Q = 0; Q <= Z; ++Q) {
      const ne = Q + K;
      if (ne < 0) continue;
      const re = ne * G - M + s;
      for (let le = 0; le < V; ++le) {
        const ee = re + le / V * G;
        if (ee < 0 || ee >= L) continue;
        const ye = le % V ? o : n;
        ye === o ? R.strokeStyle = "#a1a1aa" : R.strokeStyle = "#d4d4d8";
        const fe = 32, [Me, En] = [ee, fe], [Vn, xr] = [Me, En + ye];
        R.beginPath(), R.moveTo(Me, En), R.lineTo(Vn, xr), R.stroke();
      }
    }
    R.restore();
  }, k = (R) => {
    const M = m.current;
    if (!M) return;
    const L = M.getBoundingClientRect(), $ = R.clientX - L.left + u - Ul;
    f?.($);
  };
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: "border-border border-t",
      style: {
        position: "relative",
        width: "100%",
        height: `${C.height}px`,
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ p.jsx(
        "canvas",
        {
          onClick: k,
          ref: m,
          height: C.height
        }
      )
    }
  );
}, ZC = () => /* @__PURE__ */ p.jsx(
  Au,
  {
    flexGrow: "1",
    justify: "center",
    width: "100%",
    height: "100%",
    className: "bg-scene py-3",
    children: /* @__PURE__ */ p.jsx("div", { className: "max-w-3xl flex-1  w-full h-full flex relative", children: /* @__PURE__ */ p.jsx($C, {}) })
  }
);
class YC {
  ___eventListeners;
  ___activeObjects;
  constructor() {
    this.___activeObjects = [], this.___eventListeners = {};
  }
  pauseEventListeners() {
    this.___eventListeners = this.__eventListeners, this.__eventListeners = {};
    const t = this.getActiveObjects();
    this.discardActiveObject(), this.___activeObjects = t;
  }
  resumeEventListeners() {
    this.__eventListeners = this.___eventListeners, this.___eventListeners = {};
    const t = this.___activeObjects;
    if (!t.length)
      return this.requestRenderAll(), !1;
    if (t.length === 1)
      this.setActiveObject(t[0]);
    else {
      const n = new Jl(t);
      this.setActiveObject(n);
    }
    this.requestRenderAll();
  }
}
class Ti extends Cn {
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
  constructor(t) {
    super(t), Object.assign(this, Ti.ownDefaults), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.text = t.text || "", this.backgroundColor = t.backgroundColor || "transparent";
  }
  static createControls() {
    return {
      controls: Em()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Ti.ownDefaults
    };
  }
  setSelected(t) {
    this.isSelected = t, this.set({ dirty: !0 });
  }
  _render(t) {
    super._render(t), this.updateSelected(t);
  }
  updateSelected(t) {
    this.isSelected && (t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      6
    ), t.lineWidth = 2, t.strokeStyle = "rgba(0, 216, 214,1.0)", t.stroke(), t.restore());
  }
}
function mr(e, t, n, o, s) {
  e.save(), e.translate(t, n), e.rotate(j1.degreesToRadians(90 + s.angle)), e.beginPath(), e.lineWidth = 4, e.lineCap = "round", e.strokeStyle = "#dfe2e8", e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
function Em() {
  return {
    mr: new yn({
      x: 0.5,
      y: 0,
      actionHandler: na,
      cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: mr
    }),
    ml: new yn({
      x: -0.5,
      y: 0,
      actionHandler: na,
      cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: mr
    })
  };
}
const na = dt.wrapWithFireEvent(
  "resizing",
  dt.wrapWithFixedAnchor((e, t, n, o) => {
    const s = dt.getLocalPoint(
      t,
      t.originX,
      t.originY,
      n,
      o
    );
    if (KC(t.originX) || JC(t.originX) && s.x < 0 || qC(t.originX) && s.x > 0) {
      const a = t.target, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = QC(t) ? 2 : 1, f = a.width, h = Math.ceil(
        Math.abs(s.x * u / a.scaleX) - l
      );
      if (t.corner === "ml") {
        const v = f - h;
        if (a.left + v < 0)
          return a.set("width", a.width + a.left), !0;
      }
      return a.set("width", Math.max(h, 0)), f !== a.width;
    }
    return !1;
  })
), XC = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
}, _e = (e) => typeof e == "string" ? XC[e] : e - 0.5, KC = (e) => _e(e) === _e("center"), qC = (e) => _e(e) === _e("left"), JC = (e) => _e(e) === _e("right");
function QC(e) {
  return _e(e.originX) === _e("center") && _e(e.originY) === _e("center");
}
ft.setClass(Ti, "Text");
class an extends Cn {
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
  constructor(t) {
    super(t), this.id = t.id, this.fromId = t.fromId, this.toId = t.toId, Object.assign(this, {
      duration: t.duration,
      fromId: t.fromId,
      toId: t.toId,
      kind: t.kind,
      tScale: t.tScale,
      strokeDashArray: t.strokeDashArray || [],
      isSelected: !1,
      centeredScaling: !0,
      strokeWidth: 0
    }), Object.assign(this, an.ownDefaults);
  }
  static createControls() {
    return {
      controls: eS()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...an.ownDefaults
    };
  }
  updateCoords() {
  }
  _render(t) {
    super._render(t), this.updateSelected(t);
  }
  setSelected(t) {
    this.isSelected = t, this.set({ dirty: !0 });
  }
  updateSelected(t) {
    t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), t.lineWidth = 2, this.strokeDashArray && t.setLineDash(this.strokeDashArray), t.strokeStyle = this.isSelected ? "rgba(255, 255, 255,1.0)" : "rgba(255, 255, 255,0.15)", t.stroke(), t.restore();
  }
}
ft.setClass(an, "Transition");
const eS = () => ({
  mr: new yn({
    x: 0.5,
    y: 0,
    actionHandler: d1,
    cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: mr
  }),
  ml: new yn({
    x: -0.5,
    y: 0,
    actionHandler: d1,
    cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: mr
  })
});
ft.setClass(an, "Transition");
const { wrapWithFireEvent: tS, getLocalPoint: nS } = dt, $l = "center", rS = "left", iS = "right";
function oS(e) {
  return (t, n, o, s) => {
    const { target: a, originX: l, originY: u } = n, f = a.getRelativeCenterPoint(), h = a.translateToOriginPoint(
      f,
      l,
      u
    ), m = e(t, n, o, s);
    return a.setPositionByOrigin(h, l, u), m;
  };
}
const sS = (e, t, n, o) => {
  const s = nS(
    t,
    t.originX,
    t.originY,
    n,
    o
  );
  if (_e(t.originX) === _e($l) || _e(t.originX) === _e(iS) && s.x < 0 || _e(t.originX) === _e(rS) && s.x > 0) {
    const { target: a } = t, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = aS(t) ? 2 : 1, f = a.width, h = Math.ceil(
      Math.abs(s.x * u / a.scaleX) - l
    ), m = rn(h, a.tScale);
    return m >= 1500 || m < 500 ? !1 : (a.set("width", Math.max(h, 0)), a.set("duration", m), a.setCoords(), a.canvas && a.canvas.renderAll(), f !== a.width);
  }
  return !1;
};
function aS(e) {
  return _e(e.originX) === _e($l) && _e(e.originY) === _e($l);
}
const d1 = tS(
  "resizing",
  oS(sS)
);
class Co extends Cn {
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
  constructor(t) {
    super(t), this.id = t.id, this.for = t.for, Object.assign(this, Co.ownDefaults);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Co.ownDefaults
    };
  }
  _render(t) {
    super._render(t), this.updateSelected(t);
  }
  updateSelected(t) {
    t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), t.lineWidth = 2, this.strokeDashArray && t.setLineDash(this.strokeDashArray), t.strokeStyle = "rgba(0, 216, 214,1.0)", t.stroke(), t.restore();
  }
}
ft.setClass(Co, "Placeholder");
const cS = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 }
}, ka = "rgba(0, 216, 214, 1.0)", gl = (e, t, n) => new Cn({
  top: e,
  left: 0,
  strokeWidth: 0,
  fill: "transparent",
  selectable: !0,
  height: n,
  width: t
});
class go extends Ql {
  static type = "Helper";
  static defaultSettings = {
    selectable: !1,
    evented: !1
  };
  static ownDefaults = { ...go.defaultSettings };
  guide;
  topGuide;
  bottomGuide;
  id;
  metadata = {};
  tScale;
  kind;
  constructor(t) {
    const n = cS[t.kind], o = gl(0, t.width, n.top), s = gl(n.top, t.width, n.guideHeight), a = gl(
      n.top + n.guideHeight,
      t.width,
      n.bottom
    );
    super([o, s, a], {
      ...go.defaultSettings,
      ...t
    }), this.topGuide = o, this.guide = s, this.bottomGuide = a, this.id = t.id, this.metadata = t.metadata ?? {}, this.tScale = t.tScale, this.kind = t.kind;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...go.defaultSettings
    };
  }
  updateCoords(t) {
    this.scaleToWidth(t), this.set("scaleY", 1);
  }
  setSelected(t) {
    this.guide.set("fill", t ? ka : "transparent");
  }
}
const Oo = go;
ft.setClass(Oo, "Helper");
class zr extends Cn {
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
  constructor(t) {
    super(t), Object.assign(this, zr.ownDefaults), this.id = t.id, this.accepts = t.accepts || ["audio", "video", "image", "text"], this.items = t.items || [], this.metadata = t.metadata;
  }
  static getDefaults() {
    return { ...super.getDefaults(), ...zr.ownDefaults };
  }
  updateCoords(t) {
    this.width = t;
  }
}
ft.setClass(zr, "Track");
class ra extends Cn {
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
  constructor(t) {
    super(t), this.itemType = "image", this.isSelected = !1, Object.assign(this, ra.ownDefaults), this.id = t.id, this.src = t.src, this.display = t.display, this.tScale = t.tScale;
  }
  static createControls() {
    return {
      controls: Em()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ra.ownDefaults
    };
  }
  _render(t) {
    super._render(t), this.updateSelected(t);
  }
  setSelected(t) {
    this.isSelected = t, this.set({ dirty: !0 });
  }
  updateSelected(t) {
    this.isSelected && (t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), t.lineWidth = 2, t.strokeStyle = ka, t.stroke(), t.restore());
  }
}
const Ou = ra;
ft.setClass(Ou, "Image");
class ur extends Cn {
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
  constructor(t) {
    super({
      ...ur.getDefaults(),
      ...t
    }), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.trim = t.trim, this.src = t.src;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ur.ownDefaults
    };
  }
  static createControls() {
    return { controls: lS() };
  }
  setSelected(t) {
    this.isSelected = t, this.set({ dirty: !0 });
  }
  _render(t) {
    super._render(t), this.updateSelected(t);
  }
  updateSelected(t) {
    this.isSelected && (t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      ur.ownDefaults.rx
    ), t.lineWidth = 2, t.strokeStyle = ka, t.stroke(), t.restore());
  }
}
ft.setClass(ur, "Audio");
const lS = () => ({
  mr: new yn({
    x: 0.5,
    y: 0,
    render: mr,
    actionHandler: f1,
    cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new yn({
    x: -0.5,
    y: 0,
    render: mr,
    actionHandler: f1,
    cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: uS, getLocalPoint: dS } = dt, fS = (e, t, n, o) => {
  const s = dS(
    t,
    t.originX,
    t.originY,
    n,
    o
  );
  if (_e(t.originX) === _e("center") || _e(t.originX) === _e("right") && s.x < 0 || _e(t.originX) === _e("left") && s.x > 0) {
    const { target: a } = t, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = Im(t) ? 2 : 1, f = a.width, h = Math.ceil(
      Math.abs(s.x * u / a.scaleX) - l
    );
    if (t.corner === "ml") {
      const m = h - f, v = rn(m, a.tScale);
      if (a.trim.from - v < 0) return !1;
      const T = t.width - h;
      if (t.left + T < 0)
        return t.set("width", t.width + t.left), !0;
    }
    if (t.corner === "mr") {
      const m = a.trim.to, v = h - f, b = rn(v, a.tScale), C = m + b;
      if (C > a.duration) return !1;
      a.set("width", Math.max(h, 0)), a.trim.to = C;
    } else {
      if (a.left < 0) return !1;
      const m = f - h;
      if (a.left + m < 0)
        return a.set("width", a.width + a.left), !0;
      const v = h - f, b = a.trim.from, C = rn(v, a.tScale), T = b - C;
      if (T < 0) return !1;
      a.set("width", Math.max(h, 0)), a.trim.from = T;
    }
    return f !== a.width;
  }
  return !1;
};
function Im(e) {
  return _e(e.originX) === _e("center") && _e(e.originY) === _e("center");
}
const f1 = uS(
  "resizing",
  km(fS)
);
class Mi extends Cn {
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
  constructor(t) {
    super(Object.assign({}, Mi.defaultProps, t)), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.trim = t.trim;
  }
  static createControls() {
    return { controls: hS() };
  }
  _render(t) {
    super._render(t), this.updateSelected(t);
  }
  setSelected(t) {
    this.isSelected = t, this.set({ dirty: !0 });
  }
  updateSelected(t) {
    this.isSelected && (t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), t.lineWidth = 2, t.strokeStyle = ka, t.stroke(), t.restore());
  }
}
ft.setClass(Mi, "Video");
const hS = () => ({
  mr: new yn({
    x: 0.5,
    y: 0,
    render: mr,
    actionHandler: h1,
    cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new yn({
    x: -0.5,
    y: 0,
    render: mr,
    actionHandler: h1,
    cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: pS, getLocalPoint: mS } = dt, gS = (e, t, n, o) => {
  const s = mS(
    t,
    t.originX,
    t.originY,
    n,
    o
  );
  if (_e(t.originX) === _e("center") || _e(t.originX) === _e("right") && s.x < 0 || _e(t.originX) === _e("left") && s.x > 0) {
    const { target: a } = t, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = Im(t) ? 2 : 1, f = a.width, h = Math.ceil(
      Math.abs(s.x * u / a.scaleX) - l
    );
    if (t.corner === "ml") {
      const m = h - f, v = rn(m, a.tScale);
      if (a.trim.from - v < 0) return !1;
      const T = t.width - h;
      if (t.left + T < 0)
        return t.set("width", t.width + t.left), !0;
    }
    if (t.corner === "mr") {
      const m = a.trim.to, v = h - f, b = rn(v, a.tScale), C = m + b;
      if (C > a.duration) return !1;
      a.set("width", Math.max(h, 0)), a.trim.to = C;
    } else {
      if (a.left < 0) return !1;
      const m = f - h;
      if (a.left + m < 0)
        return a.set("width", a.width + a.left), !0;
      const v = h - f, b = a.trim.from, C = rn(v, a.tScale), T = b - C;
      if (T < 0) return !1;
      a.set("width", Math.max(h, 0)), a.trim.from = T;
    }
    return f !== a.width;
  }
  return !1;
};
function km(e) {
  return (t, n, o, s) => {
    const { target: a, originX: l, originY: u } = n, f = a.getRelativeCenterPoint(), h = a.translateToOriginPoint(
      f,
      l,
      u
    ), m = e(t, n, o, s);
    return a.setPositionByOrigin(h, l, u), m;
  };
}
const h1 = pS(
  "resizing",
  km(gS)
);
class ia extends Cn {
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
  constructor(t) {
    super(t), Object.assign(this, ia.ownDefaults), this.id = t.id;
  }
  static createControls() {
    return {
      controls: vS()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ia.ownDefaults
    };
  }
  updateCoords() {
    const t = this.canvas;
    if (!t) return;
    const n = t.getObjects().find((a) => a.id === this.fromId);
    if (!n) return;
    const o = Xe(this.duration, this.tScale), s = n.left + n.width - o / 2;
    this.set({
      width: o,
      left: s
    });
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const n = new Path2D(
      "M3 5.30359C3 3.93159 4.659 3.24359 5.629 4.21359L11.997 10.5826L10.583 11.9966L5 6.41359V17.5856L10.586 11.9996L10.583 11.9966L11.997 10.5826L12 10.5856L18.371 4.21459C19.341 3.24459 21 3.93159 21 5.30359V18.6956C21 20.0676 19.341 20.7556 18.371 19.7856L12 13.5L13.414 11.9996L19 17.5866V6.41359L13.414 11.9996L13.421 12.0056L12.006 13.4206L12 13.4136L5.629 19.7846C4.659 20.7546 3 20.0676 3 18.6956V5.30359Z"
    );
    t.save(), t.translate(-12, -12), t.fillStyle = "#ffffff", t.fill(n), t.restore();
  }
  setSelected(t) {
    this.isSelected = t, this.set({ dirty: !0 });
  }
  updateSelected(t) {
    this.isSelected && (t.save(), t.beginPath(), t.roundRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height,
      this.rx
    ), t.lineWidth = 1, t.strokeStyle = "rgba(255, 255, 255,1.0)", t.stroke(), t.restore());
  }
}
function vS() {
  return {
    mr: new yn({
      x: 0.5,
      y: 0,
      actionHandler: na,
      cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: p1
    }),
    ml: new yn({
      x: -0.5,
      y: 0,
      actionHandler: na,
      cursorStyleHandler: dt.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: p1
    })
  };
}
function p1(e, t, n, o, s) {
  e.save(), e.translate(t, n), e.rotate(j1.degreesToRadians(90 + s.angle)), e.lineWidth = 6, e.lineCap = "round", e.strokeStyle = "white", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.lineWidth = 4, e.strokeStyle = "black", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
class oa extends Cn {
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
  constructor(t) {
    super(t), Object.assign(this, oa.ownDefaults), this.id = t.id, this.name = t.name || "item", this.durationString = "00:05", this.fill = "#27272a";
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...oa.ownDefaults
    };
  }
  _render(t) {
    t.save(), super._render(t), t.beginPath(), t.rect(-this.width / 2, -this.height / 2, this.width, this.height), t.clip(), this.drawTextIdentity(t), t.restore();
  }
  drawTextIdentity(t) {
    t.font = "600 12px 'Geist variable'", t.textAlign = "left";
    const f = t.measureText(this.name).width, h = t.measureText(this.durationString).width, m = -this.height / 2 + 4, v = -this.width / 2, b = v + f + 8 * 2 + 4, C = f + 8 * 2;
    this.drawRoundedRect(
      t,
      v,
      m,
      C,
      20,
      4
    ), t.fillStyle = "#f4f4f5", t.fillText(this.name, v + 8, m + 12 + 2);
    const T = h + 8 * 2;
    this.drawRoundedRect(
      t,
      b,
      m,
      T,
      20,
      4
    ), t.fillStyle = "#f4f4f5", t.fillText(
      this.durationString,
      b + 8,
      m + 12 + 2
    );
  }
  drawRoundedRect(t, n, o, s, a, l) {
    t.fillStyle = "rgba(0, 0, 0, 0.5)", t.roundRect ? (t.beginPath(), t.roundRect(n, o, s, a, l), t.fill()) : t.fillRect(n, o, s, a);
  }
}
function yS(e, t) {
  t.forEach((n) => {
    Object.getOwnPropertyNames(n.prototype).forEach((o) => {
      if (o !== "constructor") {
        const s = Object.getOwnPropertyDescriptor(
          n.prototype,
          o
        );
        s && Object.defineProperty(e.prototype, o, s);
      }
    });
  });
}
const Lu = (e, t) => {
  const n = {
    x: e.size.width / 2,
    y: e.size.height / 2
  }, o = {
    x: t.width / 2,
    y: t.height / 2
  }, s = n.x - o.x, a = n.y - o.y, l = Math.min(
    e.size.width / t.width,
    e.size.height / t.height
  );
  return {
    top: `${a}px`,
    left: `${s}px`,
    transform: `scale(${l})`
  };
}, bS = (e) => new Promise((t, n) => {
  const o = new Audio();
  o.preload = "auto", o.addEventListener("loadedmetadata", () => {
    const s = o.duration * 1e3;
    t({
      duration: s
    });
  }), o.addEventListener("error", (s) => {
    n(s);
  }), o.src = e, o.crossOrigin = "anonymous", o.load();
}), xS = (e) => new Promise((t, n) => {
  const o = new Image();
  console.warn("Consider updating CDN config for CORS issues?"), o.onload = () => {
    const s = o.width, a = o.height;
    t({ width: s, height: a });
  }, o.onerror = (s) => {
    n(s);
  }, o.crossOrigin = "anonymous", o.src = e;
}), wS = (e) => new Promise((t, n) => {
  const o = document.createElement("video");
  o.preload = "auto", o.addEventListener("loadedmetadata", () => {
    const s = o.duration * 1e3, a = o.videoWidth, l = o.videoHeight;
    t({
      duration: s,
      width: a,
      height: l
    });
  }), o.addEventListener("error", (s) => {
    n(s);
  }), o.src = e, o.load();
}), $s = (e, t) => {
  const n = document.createElement("div");
  Object.keys(t).forEach((s) => {
    s !== "height" && (n.style[s] = t[s]);
  }), document.body.appendChild(n), n.textContent = e, n.style.width = `${t.width}px`, n.style.fontSize = `${t.fontSize}px`;
  const o = getComputedStyle(n).height;
  return document.body.removeChild(n), parseFloat(o);
}, wn = (e) => Object.keys(e).reduce((t, n) => {
  const {
    display: { to: o }
  } = e[n];
  return Math.max(t, o);
}, 0), CS = (e, t) => {
  if (!e)
    return {
      from: 0,
      to: t.duration
    };
  const { from: n, to: o } = e;
  return {
    from: n ?? 0,
    to: o ?? t.duration
  };
}, SS = (e, t) => {
  const { duration: n, trim: o } = t, s = o ? o.to - o.from : n || 5e3, a = {
    from: 0,
    to: s
  };
  if (!e)
    return a;
  if (e.from !== void 0 && e.from < 0)
    return console.error(
      "'from' must be a non-negative number. Returning default display."
    ), a;
  if (e.from !== void 0 && e.to === void 0)
    return {
      from: e.from,
      to: e.from + s
    };
  if (e.to !== void 0) {
    if (e.to < 0)
      return console.error(
        "'to' must be a non-negative number. Returning default display."
      ), a;
    if (e.to < e.from)
      return console.error(
        "'to' must be greater than or equal to 'from'. Returning default display."
      ), a;
  }
  return e;
};
function _S(e, t) {
  return e.map((n) => {
    const o = n.items.filter(
      (s) => !t.includes(s)
    );
    return { ...n, items: o };
  }).filter((n) => n.items.length > 0);
}
const TS = async (e, t) => {
  const n = e.details, o = await xS(n.src), s = Lu(t, o);
  return {
    id: e.id,
    type: "image",
    name: "",
    display: {
      from: t.origin || 0,
      to: (t.origin || 5e3) + 5e3
    },
    details: {
      src: n.src || "",
      width: n.width || o.width || 100,
      height: n.height || o.height || 100,
      opacity: n.opacity ?? 100,
      transform: s.transform,
      border: n.border || "none",
      borderRadius: n.borderRadius || "0",
      boxShadow: n.boxShadow || "none",
      top: s.top || "0px",
      left: s.left || "0px"
    },
    metadata: e.metadata || {}
  };
}, ES = async (e, t) => {
  const n = e.details.src, o = await wS(n), s = Lu(t, o), a = CS(e.trim, { duration: o.duration }), l = {
    width: e.details.width || o.width || 100,
    height: e.details.height || o.height || 100,
    duration: o.duration,
    src: n,
    volume: e.details.volume ?? 100,
    top: e.details.top || s.top || "0px",
    left: e.details.left || s.left || "0px",
    text: e.details.text
    // Default volume
  };
  return {
    ...e,
    trim: a,
    type: "video",
    details: l,
    display: SS(e?.display, {
      duration: o.duration,
      trim: a
    })
  };
}, IS = async (e) => {
  const t = e.details, n = (await bS(t.src)).duration, o = e?.display?.from ?? 0;
  return {
    id: e.id,
    name: "",
    type: "audio",
    display: {
      from: o,
      to: o + n
    },
    trim: {
      from: 0,
      to: n
    },
    details: {
      src: t.src,
      duration: n,
      volume: t.volume ?? 100,
      text: t.text
      // Default volume
    },
    metadata: {
      ...e.metadata
    }
  };
}, kS = 5e3, Am = async (e, t) => {
  const n = e.id;
  await E8([
    {
      fontFamily: e.details.fontFamily ?? "",
      fontUrl: e.details.fontUrl ?? ""
    }
  ]);
  const o = {
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
  }, s = $s(e.details.text ?? "", o), a = Lu(t, {
    width: o.width ?? 0,
    height: s
  });
  return {
    id: n,
    name: "",
    type: "text",
    display: {
      from: e.display.from ?? 0,
      to: e.display.to ?? kS
    },
    details: {
      ...o,
      height: s,
      top: a.top,
      left: a.left,
      fontUrl: e.details.fontUrl,
      text: e.details.text ?? ""
    },
    metadata: {}
  };
}, AS = (e, t) => {
  const n = e.display, o = Xe(n.from, t.tScale), s = Xe(n.to - n.from, t.tScale), a = ft.getClass("Audio") || ur;
  return new a({
    width: s,
    height: 42,
    top: 10,
    left: o,
    id: e.id,
    display: n,
    text: e.details.text,
    trim: e.trim || {
      from: 0,
      to: e.details.duration
    },
    duration: e.details.duration,
    src: e.details.src,
    tScale: t.tScale
  });
}, RS = (e, t) => {
  const n = Xe(e.display.from, t.tScale), o = Xe(e.details.duration || 5e3, t.tScale), s = ft.getClass("Image") || Ou;
  return new s({
    width: o,
    height: 42,
    id: e.id,
    src: e.details.src,
    tScale: t.tScale,
    top: 10,
    left: n,
    display: e.display
  });
}, PS = (e, t) => {
  const n = Xe(e.trim.from, t.tScale), o = Xe(e.trim.to - e.trim.from, t.tScale), s = ft.getClass("Video") || Mi;
  return new s({
    width: o,
    height: 42,
    id: e.id,
    tScale: t.tScale,
    fill: "#333333",
    top: 10,
    left: n,
    display: e.trim,
    trim: e.trim,
    text: e.details.text,
    duration: e.details.duration
  });
}, MS = (e, t) => {
  const n = e.display, o = Xe(n.from, t.tScale), s = Xe(n.to - n.from, t.tScale), a = ft.getClass("Text") || Ti;
  return new a({
    width: s,
    height: 42,
    id: e.id,
    display: n,
    top: 10,
    left: o,
    text: e.details.text,
    tScale: t.tScale
  });
}, OS = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42
}, LS = (e = {}) => {
  const t = { ...OS, ...e };
  return Object.fromEntries(
    Object.entries(t).filter(([, n]) => typeof n == "number")
  );
};
let DS = class extends ur {
  static type = "Audio";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Audio", this.fill = "#768F44";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const n = new Path2D(
      "M8.24092 0C8.24092 2.51565 10.2795 4.55419 12.7951 4.55419C12.9677 4.55419 13.1331 4.62274 13.2552 4.74475C13.3772 4.86676 13.4457 5.03224 13.4457 5.20479C13.4457 5.37734 13.3772 5.54282 13.2552 5.66483C13.1331 5.78685 12.9677 5.85539 12.7951 5.85539C11.9218 5.85605 11.0594 5.66105 10.2713 5.28471C9.48319 4.90838 8.78942 4.36027 8.24092 3.68066V13.8794C8.24094 14.8271 7.91431 15.7458 7.31606 16.4808C6.71781 17.2157 5.88451 17.722 4.95657 17.9143C4.02863 18.1066 3.06276 17.9731 2.22172 17.5364C1.38067 17.0997 0.715856 16.3865 0.339286 15.5169C-0.0372842 14.6473 -0.10259 13.6744 0.154372 12.7622C0.411334 11.8501 0.974857 11.0544 1.74999 10.5092C2.52512 9.96403 3.46449 9.7027 4.40981 9.76924C5.35512 9.83579 6.24861 10.2261 6.93972 10.8745V0H8.24092ZM6.93972 13.8794C6.93972 13.1317 6.6427 12.4146 6.11398 11.8859C5.58527 11.3572 4.86818 11.0602 4.12046 11.0602C3.37275 11.0602 2.65566 11.3572 2.12694 11.8859C1.59823 12.4146 1.3012 13.1317 1.3012 13.8794C1.3012 14.6272 1.59823 15.3443 2.12694 15.873C2.65566 16.4017 3.37275 16.6987 4.12046 16.6987C4.86818 16.6987 5.58527 16.4017 6.11398 15.873C6.6427 15.3443 6.93972 14.6272 6.93972 13.8794Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 10), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 14), t.translate(10, 1), t.fillStyle = "#f4f4f5", t.fill(n), t.restore();
  }
};
class jS extends Mi {
  static type = "Video";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Video", this.fill = "#43A19F";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const n = new Path2D(
      "M16.5625 0.925L12.5 3.275V0.625L11.875 0H0.625L0 0.625V9.375L0.625 10H11.875L12.5 9.375V6.875L16.5625 9.2125L17.5 8.625V1.475L16.5625 0.925ZM11.25 8.75H1.25V1.25H11.25V8.75ZM16.25 7.5L12.5 5.375V4.725L16.25 2.5V7.5Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 14), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 10), t.translate(8, 1), t.fillStyle = "#f4f4f5", t.fill(n), t.restore();
  }
}
class Rm extends Ti {
  static type = "Text";
  constructor(t) {
    super(t), this.fill = "#6E6855";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const n = new Path2D(
      "M6.23982 0.361968C6.18894 0.253743 6.10832 0.162234 6.00736 0.0981357C5.9064 0.034038 5.78929 0 5.6697 0C5.55012 0 5.433 0.034038 5.33204 0.0981357C5.23109 0.162234 5.15046 0.253743 5.09959 0.361968L0.0599035 11.0713C0.0246926 11.1462 0.00457285 11.2272 0.000693114 11.3099C-0.00318662 11.3925 0.00924959 11.4751 0.0372917 11.553C0.0939253 11.7102 0.210687 11.8384 0.361891 11.9095C0.513095 11.9806 0.686354 11.9888 0.843555 11.9322C1.00076 11.8755 1.12902 11.7588 1.20013 11.6075L2.51202 8.81998H8.82738L10.1393 11.6075C10.1745 11.6824 10.2241 11.7496 10.2853 11.8053C10.3465 11.861 10.418 11.9041 10.4958 11.9322C10.5737 11.9602 10.6563 11.9726 10.7389 11.9687C10.8216 11.9649 10.9026 11.9447 10.9775 11.9095C11.0524 11.8743 11.1196 11.8247 11.1753 11.7635C11.231 11.7023 11.2741 11.6308 11.3021 11.553C11.3302 11.4751 11.3426 11.3925 11.3387 11.3099C11.3348 11.2272 11.3147 11.1462 11.2795 11.0713L6.23982 0.361968ZM3.10498 7.56005L5.6697 2.11011L8.23443 7.56005H3.10498ZM15.1191 3.78029C14.1143 3.78029 13.3292 4.05354 12.7859 4.59294C12.6721 4.71153 12.6092 4.86987 12.6106 5.03419C12.6119 5.19851 12.6774 5.3558 12.7931 5.4725C12.9088 5.58921 13.0655 5.6561 13.2298 5.6589C13.3941 5.6617 13.553 5.60018 13.6726 5.48748C13.9718 5.19062 14.46 5.04021 15.1191 5.04021C16.1609 5.04021 17.009 5.74892 17.009 6.61511V6.86867C16.45 6.49465 15.7917 6.29663 15.1191 6.30013C13.382 6.30013 11.9693 7.57187 11.9693 9.13495C11.9693 10.698 13.382 11.9698 15.1191 11.9698C15.792 11.9727 16.4503 11.7739 17.009 11.3989C17.0168 11.566 17.0907 11.7231 17.2144 11.8357C17.3381 11.9483 17.5014 12.0071 17.6685 11.9993C17.8356 11.9915 17.9927 11.9176 18.1053 11.7939C18.2179 11.6702 18.2767 11.5069 18.2689 11.3398V6.61511C18.2689 5.05202 16.8562 3.78029 15.1191 3.78029ZM15.1191 10.7099C14.0773 10.7099 13.2292 10.0012 13.2292 9.13495C13.2292 8.26876 14.0773 7.56005 15.1191 7.56005C16.1609 7.56005 17.009 8.26876 17.009 9.13495C17.009 10.0012 16.1609 10.7099 15.1191 10.7099Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 12), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 12), t.translate(8, 1), t.fillStyle = "#f4f4f5", t.fill(n), t.restore();
  }
}
let NS = class extends Ou {
  static type = "Image";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Image", this.fill = "#4376A1";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const n = new Path2D(
      "M1.55556 0H14.4444C15.3031 0 16 0.696889 16 1.55556V14.4444C16 14.857 15.8361 15.2527 15.5444 15.5444C15.2527 15.8361 14.857 16 14.4444 16H1.55556C1.143 16 0.747335 15.8361 0.455612 15.5444C0.163889 15.2527 0 14.857 0 14.4444V1.55556C0 0.696889 0.696889 0 1.55556 0ZM14.4444 1.33333H1.55556C1.49662 1.33333 1.4401 1.35675 1.39842 1.39842C1.35675 1.4401 1.33333 1.49662 1.33333 1.55556V14.4444C1.33333 14.5671 1.43289 14.6667 1.55556 14.6667H1.72444L10.456 5.93511C10.6004 5.79065 10.7719 5.67605 10.9607 5.59787C11.1494 5.51968 11.3517 5.47944 11.556 5.47944C11.7603 5.47944 11.9626 5.51968 12.1513 5.59787C12.3401 5.67605 12.5116 5.79065 12.656 5.93511L14.6667 7.94578V1.55556C14.6667 1.49662 14.6433 1.4401 14.6016 1.39842C14.5599 1.35675 14.5034 1.33333 14.4444 1.33333ZM14.6667 9.83111L11.7129 6.87733C11.6922 6.85664 11.6677 6.84022 11.6407 6.82902C11.6137 6.81781 11.5848 6.81205 11.5556 6.81205C11.5263 6.81205 11.4974 6.81781 11.4704 6.82902C11.4434 6.84022 11.4189 6.85664 11.3982 6.87733L3.60978 14.6667H14.4444C14.5034 14.6667 14.5599 14.6433 14.6016 14.6016C14.6433 14.5599 14.6667 14.5034 14.6667 14.4444V9.83111ZM4.88889 7.11111C4.29952 7.11111 3.73429 6.87699 3.31754 6.46024C2.90079 6.04349 2.66667 5.47826 2.66667 4.88889C2.66667 4.29952 2.90079 3.73429 3.31754 3.31754C3.73429 2.90079 4.29952 2.66667 4.88889 2.66667C5.47826 2.66667 6.04349 2.90079 6.46024 3.31754C6.87699 3.73429 7.11111 4.29952 7.11111 4.88889C7.11111 5.47826 6.87699 6.04349 6.46024 6.46024C6.04349 6.87699 5.47826 7.11111 4.88889 7.11111ZM4.88889 5.77778C5.12464 5.77778 5.35073 5.68413 5.51743 5.51743C5.68413 5.35073 5.77778 5.12464 5.77778 4.88889C5.77778 4.65314 5.68413 4.42705 5.51743 4.26035C5.35073 4.09365 5.12464 4 4.88889 4C4.65314 4 4.42705 4.09365 4.26035 4.26035C4.09365 4.42705 4 4.65314 4 4.88889C4 5.12464 4.09365 5.35073 4.26035 5.51743C4.42705 5.68413 4.65314 5.77778 4.88889 5.77778Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 12), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 12), t.translate(8, 1), t.fillStyle = "#f4f4f5", t.fill(n), t.restore();
  }
};
class FS extends zr {
  static type = "Track";
  constructor(t) {
    super(t), this.fill = "#18181b";
  }
  _render(t) {
    super._render(t);
    const n = new Path2D(
      "M14.4444 13.3263H11.0667C12.5384 12.3991 13.6259 10.9716 14.1289 9.30644C14.632 7.64131 14.5169 5.85051 13.8048 4.26348C13.0927 2.67645 11.8314 1.39993 10.2531 0.668736C8.67478 -0.0624548 6.8855 -0.199136 5.21442 0.283835C3.54334 0.766806 2.10285 1.83695 1.15794 3.2974C0.213035 4.75785 -0.172743 6.51038 0.0715766 8.23261C0.315896 9.95484 1.17388 11.5309 2.4877 12.671C3.80151 13.811 5.4828 14.4383 7.22227 14.4374H14.4444C14.5918 14.4374 14.7331 14.3789 14.8373 14.2747C14.9415 14.1705 15 14.0292 15 13.8819C15 13.7345 14.9415 13.5932 14.8373 13.489C14.7331 13.3848 14.5918 13.3263 14.4444 13.3263ZM1.1112 7.21523C1.1112 6.00658 1.46961 4.82506 2.14111 3.8201C2.8126 2.81514 3.76702 2.03187 4.88367 1.56934C6.00032 1.10681 7.22905 0.985789 8.41449 1.22159C9.59992 1.45738 10.6888 2.03941 11.5435 2.89405C12.3981 3.7487 12.9801 4.83759 13.2159 6.02302C13.4517 7.20845 13.3307 8.43719 12.8682 9.55384C12.4056 10.6705 11.6224 11.6249 10.6174 12.2964C9.61244 12.9679 8.43093 13.3263 7.22227 13.3263C5.60208 13.3245 4.04878 12.68 2.90313 11.5344C1.75748 10.3887 1.11304 8.83542 1.1112 7.21523ZM7.22227 5.54858C7.55191 5.54858 7.87414 5.45083 8.14822 5.2677C8.4223 5.08456 8.63592 4.82426 8.76206 4.51972C8.88821 4.21518 8.92121 3.88007 8.85691 3.55677C8.7926 3.23347 8.63386 2.9365 8.40078 2.70342C8.16769 2.47033 7.87072 2.3116 7.54742 2.24729C7.22412 2.18298 6.88901 2.21599 6.58447 2.34213C6.27993 2.46828 6.01964 2.6819 5.8365 2.95598C5.65337 3.23006 5.55562 3.55229 5.55562 3.88192C5.55562 4.32395 5.73121 4.74787 6.04377 5.06043C6.35633 5.37298 6.78025 5.54858 7.22227 5.54858ZM7.22227 3.32637C7.33215 3.32637 7.43956 3.35895 7.53092 3.42C7.62228 3.48104 7.69349 3.56781 7.73554 3.66932C7.77759 3.77084 7.78859 3.88254 7.76715 3.9903C7.74572 4.09807 7.6928 4.19706 7.61511 4.27476C7.53741 4.35245 7.43842 4.40536 7.33066 4.4268C7.22289 4.44824 7.11119 4.43723 7.00967 4.39519C6.90816 4.35314 6.82139 4.28193 6.76035 4.19057C6.69931 4.09921 6.66672 3.9918 6.66672 3.88192C6.66672 3.73458 6.72525 3.59327 6.82944 3.48909C6.93363 3.3849 7.07493 3.32637 7.22227 3.32637ZM8.88893 10.5485C8.88893 10.2189 8.79118 9.89668 8.60805 9.6226C8.42491 9.34852 8.16462 9.1349 7.86008 9.00875C7.55553 8.88261 7.22043 8.8496 6.89713 8.91391C6.57383 8.97822 6.27686 9.13695 6.04377 9.37004C5.81069 9.60313 5.65195 9.9001 5.58764 10.2234C5.52334 10.5467 5.55634 10.8818 5.68249 11.1863C5.80863 11.4909 6.02225 11.7512 6.29633 11.9343C6.57041 12.1175 6.89264 12.2152 7.22227 12.2152C7.6643 12.2152 8.08822 12.0396 8.40078 11.727C8.71334 11.4145 8.88893 10.9906 8.88893 10.5485ZM6.66672 10.5485C6.66672 10.4387 6.69931 10.3313 6.76035 10.2399C6.82139 10.1485 6.90816 10.0773 7.00967 10.0353C7.11119 9.99323 7.22289 9.98223 7.33066 10.0037C7.43842 10.0251 7.53741 10.078 7.61511 10.1557C7.6928 10.2334 7.74572 10.3324 7.76715 10.4402C7.78859 10.5479 7.77759 10.6596 7.73554 10.7611C7.69349 10.8627 7.62228 10.9494 7.53092 11.0105C7.43956 11.0715 7.33215 11.1041 7.22227 11.1041C7.07493 11.1041 6.93363 11.0456 6.82944 10.9414C6.72525 10.8372 6.66672 10.6959 6.66672 10.5485ZM10.5556 8.88189C10.8852 8.88189 11.2074 8.78414 11.4815 8.60101C11.7556 8.41787 11.9692 8.15758 12.0954 7.85303C12.2215 7.54849 12.2545 7.21338 12.1902 6.89008C12.1259 6.56678 11.9672 6.26982 11.7341 6.03673C11.501 5.80364 11.204 5.64491 10.8807 5.5806C10.5574 5.51629 10.2223 5.5493 9.91778 5.67544C9.61324 5.80159 9.35295 6.01521 9.16981 6.28929C8.98668 6.56337 8.88893 6.8856 8.88893 7.21523C8.88893 7.65726 9.06452 8.08118 9.37708 8.39374C9.68964 8.70629 10.1136 8.88189 10.5556 8.88189ZM10.5556 6.65968C10.6655 6.65968 10.7729 6.69226 10.8642 6.75331C10.9556 6.81435 11.0268 6.90112 11.0688 7.00263C11.1109 7.10415 11.1219 7.21585 11.1005 7.32362C11.079 7.43138 11.0261 7.53037 10.9484 7.60807C10.8707 7.68576 10.7717 7.73867 10.664 7.76011C10.5562 7.78155 10.4445 7.77054 10.343 7.7285C10.2415 7.68645 10.1547 7.61524 10.0937 7.52388C10.0326 7.43252 10 7.32511 10 7.21523C10 7.06789 10.0586 6.92658 10.1628 6.8224C10.2669 6.71821 10.4082 6.65968 10.5556 6.65968ZM3.88896 5.54858C3.55933 5.54858 3.2371 5.64633 2.96302 5.82946C2.68894 6.01259 2.47532 6.27289 2.34918 6.57743C2.22303 6.88197 2.19002 7.21708 2.25433 7.54038C2.31864 7.86368 2.47737 8.16065 2.71046 8.39374C2.94355 8.62682 3.24052 8.78556 3.56382 8.84986C3.88711 8.91417 4.22222 8.88117 4.52677 8.75502C4.83131 8.62888 5.0916 8.41526 5.27474 8.14118C5.45787 7.8671 5.55562 7.54487 5.55562 7.21523C5.55562 6.77321 5.38003 6.34929 5.06747 6.03673C4.75491 5.72417 4.33099 5.54858 3.88896 5.54858ZM3.88896 7.77078C3.77909 7.77078 3.67168 7.7382 3.58032 7.67716C3.48896 7.61611 3.41775 7.52935 3.3757 7.42783C3.33365 7.32632 3.32265 7.21462 3.34409 7.10685C3.36552 6.99908 3.41843 6.90009 3.49613 6.8224C3.57382 6.7447 3.67281 6.69179 3.78058 6.67036C3.88835 6.64892 4.00005 6.65992 4.10156 6.70197C4.20308 6.74402 4.28984 6.81522 4.35089 6.90658C4.41193 6.99794 4.44452 7.10535 4.44452 7.21523C4.44452 7.36257 4.38598 7.50388 4.2818 7.60807C4.17761 7.71225 4.03631 7.77078 3.88896 7.77078Z"
    );
    this.items.length || (t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 12), t.font = "600 12px 'Geist variable'", t.fillStyle = "#A0A4A2", t.textAlign = "left", t.clip(), t.fillText("Drag and drop media here", 32, 12), t.translate(8, 1), t.fillStyle = "#A0A4A2", t.fill(n), t.restore());
  }
}
class zS extends Oo {
  static type = "Helper";
  constructor(t) {
    t.activeGuideFill = "#ffffff", super(t);
  }
}
class HS {
  addTrackItem(t) {
    const n = t.id, o = vl(t, {
      tScale: this.tScale,
      sizesMap: this.sizesMap
    });
    this.add(o), this.trackItemIds.push(n), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = wn(this.trackItemsMap);
  }
  alignItemsToTrack() {
    this.pauseEventListeners();
    const t = new Map(
      this.getObjects("Track").map((o) => [o.id, o])
    ), n = this.getObjects("Image", "Video", "Text", "Audio");
    this.trackItemIds.forEach((o) => {
      const s = this.tracks.find((u) => u.items.includes(o));
      if (!s) return;
      const a = t.get(s.id);
      this.duration;
      const l = this.getObjects().find((u) => u.id === o);
      l && a && (l.isMain = !1, this.trackItemsMap[o].isMain = !1, l.set({ top: a.top }), l.setCoords());
    }), t.forEach((o) => {
      o.items = n.filter((s) => s.top === o.top).map((s) => s.id);
    }), this.resumeEventListeners();
  }
  updateTrackItemsPosition() {
    const t = this.getObjects("Image", "Text", "Video", "Audio");
    t.sort((n, o) => n.top - o.top), this.trackItemIds = t.map((n) => n.id).reverse();
  }
  restoreTrackItemPositions() {
  }
  updateTrackItemsState() {
    this.pauseEventListeners();
    const t = this.getObjects("Image", "Video", "Text", "Audio"), n = {};
    t.forEach((o) => {
      const { id: s, left: a, width: l } = o, u = this.trackItemsMap[s], f = rn(a, this.tScale), h = f + rn(l, this.tScale), m = { from: f, to: h }, v = {
        ...u,
        display: m,
        trim: o instanceof Mi || o instanceof ur ? o.trim : void 0
      };
      o.display = m, n[s] = v;
    }), this.trackItemsMap = n, this.resumeEventListeners();
  }
  deleteActiveTrackItem() {
    const t = this.getActiveObjects();
    if (!t.length) return !1;
    const n = t.map((s) => s.id), o = ea(this.tracks, n);
    this.trackItemsMap = Object.keys(this.trackItemsMap).reduce((s, a) => (n.includes(a) || (s[a] = this.trackItemsMap[a]), s), {}), this.trackItemIds = this.trackItemIds.filter(
      (s) => !n.includes(s)
    ), this.tracks = o, this.discardActiveObject(), this.remove(...t), this.setActiveIds([]), this.renderTracks(), this.alignItemsToTrack(), this.updateState({ updateHistory: !0, kind: "remove" });
  }
  updateTrackItemsToHistory() {
    this.pauseEventListeners();
    const t = this.getObjects();
    this.trackItemIds.forEach((n) => {
      const o = this.tracks.find(
        (h) => h.items.includes(n)
      ), s = t.find(
        (h) => h.id === o?.id
      )?.top;
      if (!s) {
        console.warn(`Track top not found for trackItemId: ${n}`);
        return;
      }
      const a = this.trackItemsMap[n], l = t.find((h) => h.id === n);
      if (!l) {
        console.warn(`Object not found for trackItemId: ${n}`);
        return;
      }
      const u = Xe(a.display.from, this.tScale), f = Xe(
        a.display.to - a.display.from,
        this.tScale
      );
      l.set({ left: u, width: f, top: s }), l.setCoords();
    }), this.requestRenderAll(), this.resumeEventListeners();
  }
  cloneActiveTrackItem(t) {
    const n = t?.trackItemId || this.activeIds[0];
    if (!n) return !1;
    const s = {
      ...this.trackItemsMap[n],
      id: tt()
    }, a = this.tracks.find(
      (m) => m.items.includes(n)
    ), l = this.tracks.findIndex((m) => m.id === a?.id) + 1;
    this.findOrCreateTrack(s, { trackIndex: l });
    const u = vl(s, {
      tScale: this.tScale
    });
    u && this.add(u);
    const { audioData: f, ...h } = s.metadata || {};
    s.metadata = h, this.trackItemsMap[s.id] = s, this.trackItemIds.push(s.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  splitActiveTrackItem(t) {
    const n = t.trackItemId ?? this.activeIds[0];
    if (!n || this.activeIds.length > 1) return !1;
    const o = this.trackItemsMap[n], s = t.time;
    if (o.display.from >= s || o.display.to <= s)
      return !1;
    const a = {
      ...o,
      display: { from: o.display.from, to: s }
    }, l = {
      ...o,
      display: { from: s, to: o.display.to },
      id: tt()
    };
    if (o.type === "video" || o.type === "audio") {
      const m = s - a.display.from;
      a.trim = {
        from: o.trim.from,
        to: o.trim.from + m
      }, l.trim = {
        from: a.trim.to,
        to: o.trim.to
      };
    }
    const u = this.getObjects().find(
      (m) => m.id === n
    );
    u.display = a.display, this.tracks.find(
      (m) => m.items.includes(n)
    )?.items.push(l.id);
    const h = vl(l, {
      tScale: this.tScale
    });
    h && this.add(h), this.trackItemsMap[l.id] = l, this.trackItemsMap[n] = a, this.trackItemIds.push(l.id), this.updateTrackItemCoords(a.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  updateTrackItemCoords(t) {
    const n = this.getObjects().find((l) => l.id === t), o = this.trackItemsMap[t], s = Xe(o.display.from, this.tScale), a = Xe(
      o.display.to - o.display.from,
      this.tScale
    );
    n?.set({ left: s, width: a }), n?.setCoords();
  }
  updateTrackItemDetails(t, n) {
    const o = n?.trackItemId;
    if (!o) return !1;
    const s = this.trackItemsMap[o], a = { ...s.details, ...t.details };
    ("fontSize" in a || "lineHeight" in a) && (a.height = $s(
      a.text,
      a
    )), this.trackItemsMap[o] = {
      ...s,
      ...t,
      details: a
    }, this.updateState();
  }
  updateTrackItem(t, n) {
    const o = n.trackItemId;
    if (!o) return !1;
    const s = this.trackItemsMap[o], a = { ...s.details, ...t.details };
    if (s.type === "text" && t.details.text) {
      const l = this.getObjects("Text").find(
        (u) => u.id === o
      );
      l instanceof Rm && (l.text = t.details.text, this.requestRenderAll());
    }
    ("fontSize" in a || "lineHeight" in a) && (a.height = $s(
      a.text,
      a
    )), this.trackItemsMap[o] = {
      ...s,
      ...t,
      details: a
    }, this.updateState();
  }
  updateTrackItemsDetails(t, n) {
    n?.trackItemIds?.forEach((o, s) => {
      const a = this.trackItemsMap[o], l = {
        ...a.details,
        ...t[s].details
      };
      ("fontSize" in l || "lineHeight" in l) && (l.height = $s(
        l.text,
        l
      )), this.trackItemsMap[o] = {
        ...a,
        ...t[s],
        details: l
      };
    }), this.updateState();
  }
  getTrackItems() {
    return this.getObjects(...WS);
  }
  setActiveTrackItemCoords() {
    this.getActiveObjects().forEach((t) => t.setCoords());
  }
  deleteTrackItemById(t) {
    const n = this.getObjects().filter(
      (o) => t.includes(o.id)
    );
    this.tracks = ea(this.tracks, t), this.trackItemsMap = Object.keys(this.trackItemsMap).filter((o) => !t.includes(o)).reduce((o, s) => (o[s] = this.trackItemsMap[s], o), {}), this.trackItemIds = this.trackItemIds.filter((o) => !t.includes(o)), this.discardActiveObject(), this.remove(...n), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = wn(this.trackItemsMap);
  }
  selectTrackItemByIds(t) {
    const n = this.getActiveObjects().map((s) => s.id);
    if (Ae.isEqual(n, t)) return;
    const o = this.getTrackItems().filter(
      (s) => t.includes(s.id)
    );
    if (o.length === 0)
      this.discardActiveObject();
    else if (o.length === 1)
      this.setActiveObject(o[0]);
    else {
      const s = new Jl(o);
      this.setActiveObject(s);
    }
    this.requestRenderAll();
  }
}
const WS = ["Image", "Text", "Video", "Audio", "Caption", "Template"], vl = (e, t) => {
  const o = {
    text: MS,
    video: PS,
    image: RS,
    audio: AS
  }[e.type];
  return o(e, t);
}, vi = {
  text: 32,
  image: 40,
  video: 40,
  audio: 32,
  main: 40
}, m1 = (e) => {
  switch (e) {
    case "text":
      return vi.text;
    case "image":
      return vi.image;
    case "video":
      return vi.video;
    case "audio":
      return vi.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return vi.main;
    default:
      return vi.text;
  }
};
class BS {
  // Метод для нахождения или создания нового трека
  findOrCreateTrack(t, { trackId: n, trackIndex: o }) {
    const s = n;
    if (s) {
      const l = this.tracks.find((u) => u.id === s);
      if (l)
        return l.items.push(t.id), s;
    }
    const a = {
      id: tt(),
      // Генерация уникального ID
      items: [t.id],
      type: t.type,
      accepts: this.acceptsMap?.[t.type]
    };
    return o !== void 0 ? this.tracks.splice(o, 0, a) : this.tracks.push(a), this.renderTracks(), a.id;
  }
  // Метод для удаления всех треков и вспомогательных объектов
  removeTracks() {
    this.getObjects("Track", "Helper")?.forEach((t) => this.remove(t));
  }
  // Метод для отображения треков
  renderTracks() {
    this.updateTracksState(), this.removeTracks();
    const t = this.width, n = this.tracks.flatMap((u) => [
      u,
      {
        id: `after-${u.id}`,
        type: "helper",
        items: [],
        accepts: []
      }
    ]).slice(0, -1);
    let o = 0;
    const s = ft.getClass("Helper") || Oo, a = new s({
      id: "helperLineTop",
      top: o,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: t,
      kind: "top",
      metadata: {}
    });
    o += m1("helperTop"), this.insertAt(0, a), n.forEach((u, f) => {
      if (u.type === "helper") {
        const h = m1("helperCenter"), m = new s({
          id: u.id,
          top: o,
          tScale: this.tScale,
          width: t,
          height: h,
          metadata: { order: (f + 1) / 2 },
          kind: "center"
        });
        o += h, this.insertAt(0, m);
      } else {
        const h = ft.getClass("Track") || zr, m = new h({
          id: u.id,
          top: o,
          left: 0,
          fill: "#18181b",
          height: 42,
          width: t,
          tScale: this.tScale,
          accepts: this.acceptsMap?.[u.type] || [],
          items: u.items
        });
        o += 42, this.insertAt(0, m);
      }
    });
    const l = new s({
      id: "helperLineBottom",
      top: o,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: t,
      kind: "bottom",
      metadata: {}
    });
    this.insertAt(0, l);
  }
  // Метод для обновления состояния треков
  updateTracksState() {
    const t = this.tracks.filter(
      (o) => o.items.length || o.type === "main"
    ), n = /* @__PURE__ */ new Map();
    t.forEach((o) => n.set(o.id, o)), this.tracks = Array.from(n.values());
  }
  // Метод для обновления координат треков
  updateTrackCoords() {
    const t = this.bounding.width + this.spacing.right;
    this.getObjects("Track", "Helper").forEach((n) => {
      n.updateCoords(t), n.setCoords();
    });
  }
}
const US = 60, $S = 188;
function g1(e, t = 1, n = 1) {
  const o = $S * t;
  return e * (US / 1e3) * o / n;
}
class VS {
  // Удаление всех переходов
  removeTransitions() {
    const t = this.getObjects("Transition");
    this.remove(...t);
  }
  // Рендеринг переходов
  renderTransitions() {
    this.removeTransitions(), this.transitionIds.forEach((t) => {
      const n = this.transitionsMap[t], o = n.fromId, s = n.toId, a = this.getObjects(), l = a.find((b) => b.id === o), u = a.find((b) => b.id === s);
      if (!l || !u) return;
      const f = g1(n.duration, this.tScale), h = l.left + l.width - f / 2, m = l.height, v = new an({
        id: n.id,
        left: h,
        top: l.top,
        height: m,
        width: f,
        tScale: this.tScale,
        duration: n.duration,
        fromId: l.id,
        toId: u.id,
        kind: n.kind
      });
      n.kind === "none" && (v.visible = !1), this.add(v);
    });
  }
  // Обновление координат переходов
  updateTransitionCoordinates() {
    this.pauseEventListeners(), this.getObjects("Transition").forEach((t) => {
      t.tScale = this.tScale, t.updateCoords(), t.setCoords();
    }), this.resumeEventListeners();
  }
  // Выравнивание переходов по треку
  alignTransitionsToTrack() {
    this.pauseEventListeners(), this.transitionIds.forEach((t) => {
      const n = this.getObjects("Transition").find(
        (o) => o.id === t
      );
      if (n instanceof an) {
        const o = this.getObjects().find(
          (l) => l.id === n.fromId
        );
        if (!o) return;
        const s = g1(n.duration, this.tScale), a = o.left + o.width - s / 2;
        n.set({ left: a, top: o.top }), n.setCoords();
      }
    }), this.resumeEventListeners();
  }
  // Обновление переходов
  updateTransitions(t = !0) {
    t && this.pauseEventListeners();
    const n = this.getObjects("Track"), o = this.getObjects("Video", "Image");
    this.removeTransitions();
    const s = {}, a = [];
    n.forEach((l) => {
      const u = o.filter((f) => l.items.includes(f.id)).sort((f, h) => f.left - h.left);
      for (let f = 0; f < u.length - 1; f++) {
        const h = u[f], m = u[f + 1];
        if (Math.abs(h.left + h.width - m.left) <= 1) {
          const v = `${h.id}-${m.id}`;
          if (this.transitionIds.includes(v))
            s[v] = this.transitionsMap[v];
          else {
            const b = {
              id: v,
              duration: 1500,
              fromId: h.id,
              toId: m.id,
              kind: "none",
              trackId: l.id,
              type: "transition"
            };
            s[v] = b;
          }
          a.push(v);
        }
      }
    }), this.transitionIds = a, this.transitionsMap = s, this.renderTransitions(), t && this.resumeEventListeners();
  }
}
const U = {
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
}, Ye = {
  guide: null,
  object: null,
  objects: []
}, AA = () => U, RA = (e) => {
  Object.assign(U, e);
}, GS = (e) => {
  e.on("before:transform", Pm.bind(e));
}, ZS = (e) => {
  e.off("before:transform", Pm.bind(e));
};
function Pm(e) {
  U.canvas = this, U.activeTrackToItemsMap = {}, U.primaryTracks = {}, U.secondaryTracks = {}, U.trackTops = [], U.trackToItemsMap = {}, U.activeObjects = [], U.trackTopToIdMap = {}, U.canvas.trackIdAfterTransform = "", U.canvas.positionAfterTransform = {};
  const t = U.canvas.getActiveObject();
  if (!t) return;
  U.activeObjects = t instanceof Jl ? t.getObjects() : [t];
  const n = U.canvas.getScenePoint(e.e), o = U.canvas.getObjects("Track");
  U.originTrack = o.find((l) => {
    const u = l.getBoundingRect();
    return n.x >= u.left && n.x <= u.left + u.width && n.y >= u.top && n.y <= u.top + u.height;
  }) ?? {};
  const s = U.canvas.getObjects(
    "Video",
    "Image",
    "Audio",
    "Text",
    "Element"
  );
  o.forEach((l) => {
    const u = s.filter(
      (f) => l.items.includes(f.id)
    );
    U.trackToItemsMap[l.id] = u, U.trackTopToIdMap[l.top] = l.id, U.trackTops.push(l.top);
  }), U.trackTops.sort((l, u) => l - u), U.activeObjects.forEach((l) => {
    const u = o?.find(
      (h) => h.items.includes(l.id)
    );
    if (!u) return;
    const f = u.id;
    U.activeTrackToItemsMap[f] ? U.activeTrackToItemsMap[f].push(l) : U.activeTrackToItemsMap[f] = [l];
  }), U.primaryMovingObjects = U.activeObjects.filter(
    (l) => {
      const u = l.getBoundingRect();
      return n.y >= u.top && n.y <= u.top + u.height && !(l instanceof an);
    }
  ), U.primaryMovingObjects.forEach((l) => {
    const u = l.getBoundingRect().top, f = U.trackTopToIdMap[u];
    if (U.primaryTracks[f])
      U.primaryTracks[f].objects.push(l);
    else {
      const h = Vl(
        U.trackTops,
        U.originTrack.top,
        u
      );
      if (typeof h != "number") return;
      U.primaryTracks[f] = { objects: [l], index: h };
    }
  }), U.primaryMovingObjects = U.primaryMovingObjects.sort(
    (l, u) => l.left - u.left
  ), U.secondaryMovingObjects = U.activeObjects.filter(
    (l) => !U.primaryMovingObjects.includes(l) && !(l instanceof an)
  ), U.secondaryMovingObjects.forEach((l) => {
    const u = l.getBoundingRect().top, f = U.trackTopToIdMap[l.getBoundingRect().top];
    if (U.secondaryTracks[f])
      U.secondaryTracks[f].objects.push(l);
    else {
      const h = Vl(
        U.trackTops,
        U.originTrack.top,
        u
      );
      if (typeof h != "number") return;
      U.secondaryTracks[f] = { objects: [l], index: h };
    }
  }), U.originTrack && (U.canvas.trackOriginBeforeTransform = U.originTrack.id), t && (U.canvas.positionBeforeTransform = {
    top: t.top,
    left: t.left
  }), ("transform" in e ? e.transform : {}).action === "drag" && (U.placeholderMovingObjects = U.primaryMovingObjects.map(
    (l) => {
      const u = l.getBoundingRect();
      U.objectInitialPositions[l.id] = {
        top: u.top,
        left: u.left
      };
      const f = new Co({
        id: `${l.id}-placeholder`,
        left: u.left,
        top: u.top,
        width: u.width,
        height: u.height,
        for: YS[l.type]
      });
      return f.draggedObject = l, f;
    }
  ), U.canvas.add(...U.placeholderMovingObjects));
}
function Vl(e, t, n) {
  const o = e.indexOf(t), s = e.indexOf(n);
  return o === -1 || s === -1 ? null : s - o;
}
const YS = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text"
};
function Mm(e) {
  if (!Ye.guide) return !1;
  e.e.preventDefault();
  const t = this, n = t.getViewportPoint(e.e);
  Ye.guide.set({
    left: n.x - 16,
    top: n.y - Ye.guide.height / 2
  });
  const o = XS(
    n,
    Ye.objects
  );
  o && (Ye.object = o, o.strokeDashArray = [5, 1], o.setSelected(!0)), Ye.objects.forEach((s) => {
    s !== o && s.setSelected(!1);
  }), t.requestRenderAll();
}
function XS(e, t) {
  let n = 1 / 0, o = null;
  const s = new _3(e.x, e.y);
  return t.forEach((a) => {
    const l = KS(a, s);
    l < n && (n = l, o = a);
  }), o;
}
function KS(e, t) {
  return Math.sqrt(
    Math.pow(e.left - t.x, 2) + Math.pow(e.top - t.y, 2)
  );
}
const qS = [
  "transition",
  "image",
  "video",
  "audio",
  "caption",
  "text"
];
function Om(e) {
  const t = e.e.dataTransfer?.types[0];
  if (!t) return;
  const n = JSON.parse(t), { type: o, duration: s = 5e3 } = n;
  if (!qS.includes(o)) return;
  const a = this;
  a.discardActiveObject();
  const l = Xe(s, a.tScale);
  Ye.guide = JS({
    width: l,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type: o
  }), a.add(Ye.guide), o === "transition" && (Ye.objects = a.getObjects("Transition"), Ye.objects.forEach((u) => {
    u.visible = !0;
  })), xe.dispatch(Jp);
}
function JS({ width: e, height: t, id: n, left: o, top: s, type: a }) {
  return a === "transition" ? new ia({
    top: 0,
    left: 0,
    height: 48,
    width: 48,
    id: "TransitionGuide"
  }) : new oa({
    top: s,
    left: o,
    height: t,
    width: e,
    id: n,
    name: "Rivers in the mountains"
  });
}
function Lm() {
  if (!Ye.guide) return;
  xe.dispatch(Ys);
  const e = this;
  QS(Ye.objects), e.remove(Ye.guide);
}
function QS(e) {
  e.forEach((t) => {
    t.strokeDashArray = [], t.setSelected(!1), t.kind === "none" && (t.visible = !1);
  });
}
var e_ = typeof global == "object" && global && global.Object === Object && global, t_ = typeof self == "object" && self && self.Object === Object && self, Du = e_ || t_ || Function("return this")(), gr = Du.Symbol, Dm = Object.prototype, n_ = Dm.hasOwnProperty, r_ = Dm.toString, po = gr ? gr.toStringTag : void 0;
function i_(e) {
  var t = n_.call(e, po), n = e[po];
  try {
    e[po] = void 0;
    var o = !0;
  } catch {
  }
  var s = r_.call(e);
  return o && (t ? e[po] = n : delete e[po]), s;
}
var o_ = Object.prototype, s_ = o_.toString;
function a_(e) {
  return s_.call(e);
}
var c_ = "[object Null]", l_ = "[object Undefined]", v1 = gr ? gr.toStringTag : void 0;
function ju(e) {
  return e == null ? e === void 0 ? l_ : c_ : v1 && v1 in Object(e) ? i_(e) : a_(e);
}
function Nu(e) {
  return e != null && typeof e == "object";
}
var u_ = "[object Symbol]";
function Fu(e) {
  return typeof e == "symbol" || Nu(e) && ju(e) == u_;
}
function d_(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var Lo = Array.isArray, y1 = gr ? gr.prototype : void 0, b1 = y1 ? y1.toString : void 0;
function jm(e) {
  if (typeof e == "string")
    return e;
  if (Lo(e))
    return d_(e, jm) + "";
  if (Fu(e))
    return b1 ? b1.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function sa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function f_(e) {
  return e;
}
var h_ = "[object AsyncFunction]", p_ = "[object Function]", m_ = "[object GeneratorFunction]", g_ = "[object Proxy]";
function v_(e) {
  if (!sa(e))
    return !1;
  var t = ju(e);
  return t == p_ || t == m_ || t == h_ || t == g_;
}
var yl = Du["__core-js_shared__"], x1 = function() {
  var e = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function y_(e) {
  return !!x1 && x1 in e;
}
var b_ = Function.prototype, x_ = b_.toString;
function w_(e) {
  if (e != null) {
    try {
      return x_.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var C_ = /[\\^$.*+?()[\]{}|]/g, S_ = /^\[object .+?Constructor\]$/, __ = Function.prototype, T_ = Object.prototype, E_ = __.toString, I_ = T_.hasOwnProperty, k_ = RegExp(
  "^" + E_.call(I_).replace(C_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function A_(e) {
  if (!sa(e) || y_(e))
    return !1;
  var t = v_(e) ? k_ : S_;
  return t.test(w_(e));
}
function R_(e, t) {
  return e?.[t];
}
function zu(e, t) {
  var n = R_(e, t);
  return A_(n) ? n : void 0;
}
function P_(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var M_ = 800, O_ = 16, L_ = Date.now;
function D_(e) {
  var t = 0, n = 0;
  return function() {
    var o = L_(), s = O_ - (o - n);
    if (n = o, s > 0) {
      if (++t >= M_)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function j_(e) {
  return function() {
    return e;
  };
}
var aa = function() {
  try {
    var e = zu(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), N_ = aa ? function(e, t) {
  return aa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: j_(t),
    writable: !0
  });
} : f_, F_ = D_(N_), z_ = 9007199254740991, H_ = /^(?:0|[1-9]\d*)$/;
function Nm(e, t) {
  var n = typeof e;
  return t = t ?? z_, !!t && (n == "number" || n != "symbol" && H_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function W_(e, t, n) {
  t == "__proto__" && aa ? aa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Fm(e, t) {
  return e === t || e !== e && t !== t;
}
var B_ = Object.prototype, U_ = B_.hasOwnProperty;
function $_(e, t, n) {
  var o = e[t];
  (!(U_.call(e, t) && Fm(o, n)) || n === void 0 && !(t in e)) && W_(e, t, n);
}
var w1 = Math.max;
function V_(e, t, n) {
  return t = w1(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, a = w1(o.length - t, 0), l = Array(a); ++s < a; )
      l[s] = o[t + s];
    s = -1;
    for (var u = Array(t + 1); ++s < t; )
      u[s] = o[s];
    return u[t] = n(l), P_(e, this, u);
  };
}
var G_ = 9007199254740991;
function Z_(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= G_;
}
var Y_ = "[object Arguments]";
function C1(e) {
  return Nu(e) && ju(e) == Y_;
}
var zm = Object.prototype, X_ = zm.hasOwnProperty, K_ = zm.propertyIsEnumerable, Hm = C1(/* @__PURE__ */ function() {
  return arguments;
}()) ? C1 : function(e) {
  return Nu(e) && X_.call(e, "callee") && !K_.call(e, "callee");
}, q_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, J_ = /^\w*$/;
function Q_(e, t) {
  if (Lo(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Fu(e) ? !0 : J_.test(e) || !q_.test(e) || t != null && e in Object(t);
}
var So = zu(Object, "create");
function eT() {
  this.__data__ = So ? So(null) : {}, this.size = 0;
}
function tT(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nT = "__lodash_hash_undefined__", rT = Object.prototype, iT = rT.hasOwnProperty;
function oT(e) {
  var t = this.__data__;
  if (So) {
    var n = t[e];
    return n === nT ? void 0 : n;
  }
  return iT.call(t, e) ? t[e] : void 0;
}
var sT = Object.prototype, aT = sT.hasOwnProperty;
function cT(e) {
  var t = this.__data__;
  return So ? t[e] !== void 0 : aT.call(t, e);
}
var lT = "__lodash_hash_undefined__";
function uT(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = So && t === void 0 ? lT : t, this;
}
function Hr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Hr.prototype.clear = eT;
Hr.prototype.delete = tT;
Hr.prototype.get = oT;
Hr.prototype.has = cT;
Hr.prototype.set = uT;
function dT() {
  this.__data__ = [], this.size = 0;
}
function Aa(e, t) {
  for (var n = e.length; n--; )
    if (Fm(e[n][0], t))
      return n;
  return -1;
}
var fT = Array.prototype, hT = fT.splice;
function pT(e) {
  var t = this.__data__, n = Aa(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : hT.call(t, n, 1), --this.size, !0;
}
function mT(e) {
  var t = this.__data__, n = Aa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gT(e) {
  return Aa(this.__data__, e) > -1;
}
function vT(e, t) {
  var n = this.__data__, o = Aa(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Oi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Oi.prototype.clear = dT;
Oi.prototype.delete = pT;
Oi.prototype.get = mT;
Oi.prototype.has = gT;
Oi.prototype.set = vT;
var yT = zu(Du, "Map");
function bT() {
  this.size = 0, this.__data__ = {
    hash: new Hr(),
    map: new (yT || Oi)(),
    string: new Hr()
  };
}
function xT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ra(e, t) {
  var n = e.__data__;
  return xT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function wT(e) {
  var t = Ra(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function CT(e) {
  return Ra(this, e).get(e);
}
function ST(e) {
  return Ra(this, e).has(e);
}
function _T(e, t) {
  var n = Ra(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Vr.prototype.clear = bT;
Vr.prototype.delete = wT;
Vr.prototype.get = CT;
Vr.prototype.has = ST;
Vr.prototype.set = _T;
var TT = "Expected a function";
function Hu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(TT);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var l = e.apply(this, o);
    return n.cache = a.set(s, l) || a, l;
  };
  return n.cache = new (Hu.Cache || Vr)(), n;
}
Hu.Cache = Vr;
var ET = 500;
function IT(e) {
  var t = Hu(e, function(o) {
    return n.size === ET && n.clear(), o;
  }), n = t.cache;
  return t;
}
var kT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, AT = /\\(\\)?/g, RT = IT(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kT, function(n, o, s, a) {
    t.push(s ? a.replace(AT, "$1") : o || n);
  }), t;
});
function PT(e) {
  return e == null ? "" : jm(e);
}
function Pa(e, t) {
  return Lo(e) ? e : Q_(e, t) ? [e] : RT(PT(e));
}
function Wu(e) {
  if (typeof e == "string" || Fu(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function MT(e, t) {
  t = Pa(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Wu(t[n++])];
  return n && n == o ? e : void 0;
}
function OT(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var S1 = gr ? gr.isConcatSpreadable : void 0;
function LT(e) {
  return Lo(e) || Hm(e) || !!(S1 && e && e[S1]);
}
function DT(e, t, n, o, s) {
  var a = -1, l = e.length;
  for (n || (n = LT), s || (s = []); ++a < l; ) {
    var u = e[a];
    n(u) ? OT(s, u) : s[s.length] = u;
  }
  return s;
}
function jT(e) {
  var t = e == null ? 0 : e.length;
  return t ? DT(e) : [];
}
function NT(e) {
  return F_(V_(e, void 0, jT), e + "");
}
function FT(e, t) {
  return e != null && t in Object(e);
}
function zT(e, t, n) {
  t = Pa(t, e);
  for (var o = -1, s = t.length, a = !1; ++o < s; ) {
    var l = Wu(t[o]);
    if (!(a = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != s ? a : (s = e == null ? 0 : e.length, !!s && Z_(s) && Nm(l, s) && (Lo(e) || Hm(e)));
}
function HT(e, t) {
  return e != null && zT(e, t, FT);
}
function WT(e, t, n, o) {
  if (!sa(e))
    return e;
  t = Pa(t, e);
  for (var s = -1, a = t.length, l = a - 1, u = e; u != null && ++s < a; ) {
    var f = Wu(t[s]), h = n;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (s != l) {
      var m = u[f];
      h = void 0, h === void 0 && (h = sa(m) ? m : Nm(t[s + 1]) ? [] : {});
    }
    $_(u, f, h), u = u[f];
  }
  return e;
}
function BT(e, t, n) {
  for (var o = -1, s = t.length, a = {}; ++o < s; ) {
    var l = t[o], u = MT(e, l);
    n(u, l) && WT(a, Pa(l, e), u);
  }
  return a;
}
function UT(e, t) {
  return BT(e, t, function(n, o) {
    return HT(e, o);
  });
}
var $T = NT(function(e, t) {
  return e == null ? {} : UT(e, t);
});
function Wm(e) {
  const t = e.e.dataTransfer?.types[0];
  if (!t) return;
  const n = JSON.parse(
    e.e.dataTransfer.getData(t)
  ), o = this;
  if (n.type !== "transition") {
    VT(n), o.remove(Ye.guide), o.requestRenderAll(), xe.dispatch(Ys);
    return;
  }
  Ye.guide && (Ye.object && GT(n, o), Ye.objects.forEach((s) => {
    s.strokeDashArray = [], s.setSelected(!1), s.kind === "none" && (s.visible = !1);
  }), o.remove(Ye.guide), o.requestRenderAll(), xe.dispatch(Ys));
}
function VT(e) {
  const t = { ...e, id: tt() };
  switch (e.type) {
    case "image":
      xe.dispatch(Ro, { payload: t });
      break;
    case "video":
      xe.dispatch(ko, { payload: t });
      break;
    case "audio":
      xe.dispatch(Ao, { payload: t });
      break;
  }
}
function GT(e, t) {
  const n = Ye.object?.id, o = $T(e, ["kind", "direction"]);
  Object.entries(o).forEach(([s, a]) => {
    s === "kind" ? Ye.object.kind = a : Ye.object[s] = a;
  }), t.transitionsMap[n] = {
    ...t.transitionsMap[n],
    ...o
  }, t.updateState();
}
const ZT = (e) => {
  e.on("dragover", Mm), e.on("dragenter", Om), e.on("dragleave", Lm), e.on("drop", Wm);
}, YT = (e) => {
  e.off("dragover", Mm), e.off("dragenter", Om), e.off("dragleave", Lm), e.off("drop", Wm);
}, Bm = (e) => {
  const t = e.target.canvas, n = e.target;
  if (e.action === "resizing" && n instanceof an && t) {
    const o = n.id, s = t.getObjects("Transition").find((a) => a.id === o);
    if (s && s instanceof an) {
      const a = Ae.cloneDeep(t.transitionsMap), l = {
        ...a,
        [o]: {
          ...a[o],
          width: s.width,
          duration: s.duration
        }
      };
      t.transitionsMap = l, t.updateState();
    }
  }
  t && (XT(t, t.getObjects()), KT(t.getObjects("Helper")), U.isPointerOverHelperTrack = !1, U.draggingOverTrack = null);
}, XT = (e, t) => {
  t.forEach((n) => {
    n.isAlignmentAuxiliary && e.remove(n);
  });
}, KT = (e) => {
  e.forEach((t) => t.setSelected(!1));
};
function Um(e) {
  const t = e.target.canvas;
  if (!t) return;
  const n = t.getActiveObject();
  if (!n || !t.positionBeforeTransform) return;
  const o = t.getScenePoint(e.e), s = t.getObjects("Track", "Helper").find((a) => {
    const l = a.getBoundingRect();
    return o.x >= l.left && o.x <= l.left + l.width && o.y >= l.top && o.y <= l.top + l.height;
  });
  if (e.action === "resizing") {
    const a = (U.trackToItemsMap[U.originTrack.id] || []).filter((u) => u !== n);
    n.setCoords();
    const l = Ma(
      a,
      n.getBoundingRect()
    );
    return t.fire("track-items:resized", {
      trackId: U.originTrack.id,
      trackItemIds: [n.id],
      isOverlapped: !!l
    }), !1;
  }
  if (!s)
    return n && (n?.set(t.positionBeforeTransform), n?.setCoords()), !1;
  if (s instanceof Oo) {
    let a;
    switch (s.kind) {
      case "top":
        a = 0;
        break;
      case "center":
        a = s.metadata.order || 0;
        break;
      case "bottom":
        a = -1;
        break;
      default:
        return;
    }
    const l = {
      isSecondaryOverlapped: !1,
      secondaryTracks: U.secondaryTracks,
      primaryTracks: U.primaryTracks,
      primaryPositions: {
        trackIndex: a,
        trackId: t.trackIdAfterTransform,
        positions: t.positionAfterTransform
      }
    };
    eE(l);
  } else if (s instanceof zr) {
    const a = {
      isSecondaryOverlapped: JT(),
      secondaryTracks: U.secondaryTracks,
      primaryTracks: U.primaryTracks,
      primaryPositions: {
        trackId: t.trackIdAfterTransform,
        positions: t.positionAfterTransform
      }
    };
    qT(a);
  }
}
const qT = (e) => {
  U.canvas && U.canvas.fire("track-items:moved", e);
};
function JT() {
  const e = QT();
  return Object.keys(e).some((t) => {
    const n = U.trackToItemsMap[t], o = e[t].objects;
    return n?.length ? n.filter((s) => !o.includes(s)).some(
      (s) => Ma(o, s.getBoundingRect())
    ) : !0;
  });
}
function QT() {
  const [e] = U.primaryMovingObjects, t = e.id, o = U.canvas.positionAfterTransform[t].top - e.getBoundingRect().top, s = {};
  return U.secondaryMovingObjects.forEach((a) => {
    const l = a.getBoundingRect().top + o, u = U.trackTopToIdMap[l], f = Vl(
      U.trackTops,
      U.originTrack.top,
      l
    );
    s[u] ? s[u].objects.push(a) : s[u] = {
      objects: [a],
      index: f
    };
  }), s;
}
const eE = (e) => {
  U.canvas && U.canvas.fire("track:create", e);
};
function Ma(e, t) {
  return e.find((n) => {
    const o = n.getBoundingRect();
    return t.left < o.left + o.width && t.left + t.width > o.left && t.top < o.top + o.height && t.top + t.height > o.top;
  });
}
const tE = (e) => {
  e.on("object:modified", Bm), e.on("object:modified", Um);
}, nE = (e) => {
  e.off("object:modified", Bm), e.off("object:modified", Um);
};
function rE(e, t) {
  e.remove(...t), t.length = 0;
}
function $m() {
  rE(this, U.placeholderMovingObjects);
}
function Vm(e) {
  const t = this.height < this.bounding.height, n = this.width < this.bounding.width;
  if (!t && !n) return;
  const o = this.viewportTransform;
  let s = o[4], a = o[5];
  const l = 2;
  e.e.shiftKey ? s = o[4] - e.e.deltaY * l : (t && (a = o[5] - e.e.deltaY * l), s = o[4] - e.e.deltaX * l), this.setViewportPos(s, a);
}
const iE = (e) => {
  e.on("mouse:wheel", Vm), e.on("mouse:up", $m.bind(e));
}, oE = (e) => {
  e.off("mouse:wheel", Vm), e.off("mouse:up", $m.bind(e));
};
function Gm(e) {
  const t = this;
  if (!t) return;
  const n = t.getScenePoint(e.e), o = t.getObjects("Helper", "Track");
  U.draggingOverTrack = o.find((h) => {
    const m = h.getBoundingRect();
    return n.x >= m.left && n.x <= m.left + m.width && n.y >= m.top && n.y <= m.top + m.height;
  }) ?? null, o.forEach((h) => {
    if (T1(h)) {
      const m = U.draggingOverTrack;
      h.setSelected(h === m);
    }
  }), U.isPointerOverHelperTrack = T1(
    U.draggingOverTrack
  ), t.getObjects();
  const s = e.target;
  s.getBoundingRect(), s.setCoords();
  const a = [
    s,
    ...t.getActiveObjects(),
    ...t.getObjects("Track", "Helper", "Transition", "Placeholder")
  ], l = sE(a, t), u = cE(s);
  aE(
    l,
    u
  ).forEach((h) => {
    h.orientation === "V" ? s.left = h.lineGuide + h.offset : s.top = h.lineGuide + h.offset;
  });
}
const sE = (e, t) => {
  const n = [], o = [];
  return t.getObjects().filter((s) => s.visible).forEach((s) => {
    if (e.some(
      (u) => u.id === s.id
    ) || s.isAlignmentAuxiliary) return;
    const l = s.getBoundingRect();
    n.push(
      _1(
        l.left,
        l.width,
        l.top,
        l.height
      )
    ), o.push(
      _1(
        l.top,
        l.height,
        l.left,
        l.width
      )
    );
  }), {
    vertical: n.flat(),
    horizontal: []
  };
}, _1 = (e, t, n, o) => [e, e + t].map((s) => ({
  val: s,
  start: n,
  end: n + o
})), aE = (e, t) => {
  const n = [], o = [];
  e.vertical.forEach((f) => {
    t.vertical.forEach((h) => {
      const m = Math.abs(f.val - h.guide);
      m < 10 && n.push({
        lineGuide: f.val,
        diff: m,
        orientation: "V",
        snap: h.snap,
        offset: h.offset,
        targetDim: {
          start: f.start,
          end: f.end
        }
      });
    });
  }), e.horizontal.forEach((f) => {
    t.horizontal.forEach((h) => {
      const m = Math.abs(f.val - h.guide);
      m < 10 && o.push({
        lineGuide: f.val,
        diff: m,
        orientation: "H",
        snap: h.snap,
        offset: h.offset,
        targetDim: {
          start: f.start,
          end: f.end
        }
      });
    });
  });
  const a = [], l = n.sort(
    (f, h) => f.diff - h.diff
  )[0], u = o.sort(
    (f, h) => f.diff - h.diff
  )[0];
  return l && a.push({
    lineGuide: l.lineGuide,
    offset: l.offset,
    orientation: "V",
    snap: l.snap,
    targetDim: l.targetDim
  }), u && a.push({
    lineGuide: u.lineGuide,
    offset: u.offset,
    orientation: "H",
    snap: u.snap,
    targetDim: u.targetDim
  }), a;
}, cE = (e) => {
  const t = e.getBoundingRect();
  return {
    vertical: [
      {
        guide: Math.round(t.left),
        offset: Math.round(e.left - t.left),
        snap: "start"
      },
      {
        guide: Math.round(t.left + t.width),
        offset: Math.round(
          e.left - t.left - t.width
        ),
        snap: "end"
      }
    ],
    horizontal: [
      {
        guide: Math.round(t.top),
        offset: Math.round(e.top - t.top),
        snap: "start"
      },
      {
        guide: Math.round(t.top + t.height),
        offset: Math.round(e.top - t.top - t.height),
        snap: "end"
      }
    ]
  };
}, T1 = (e) => e instanceof Oo;
function lE(e) {
  e.opacity = U.isPointerOverHelperTrack ? 0 : 1;
}
const Zm = gE((e) => {
  const t = e.target.canvas;
  if (vE(e), !U.draggingOverTrack) return;
  const n = U.placeholderMovingObjects.map(
    (a) => a.draggedObject
  ), o = (U.trackToItemsMap[U.draggingOverTrack.id] || []).filter((a) => !n.includes(a)), s = o.find(
    (a) => Ma(n, a.getBoundingRect())
  );
  U.placeholderMovingObjects.forEach((a) => {
    const l = a.draggedObject;
    l?.setCoords(), lE(a);
    const u = uE(
      l,
      o,
      s,
      U.placeholderMovingObjects.length > 1
    );
    t.trackIdAfterTransform = U.trackTopToIdMap[u.top], t.positionAfterTransform[l?.id] = {
      top: u.top,
      left: u.left
    }, a.left = u.left, a.top = u.top;
  });
}, 5), uE = (e, t, n, o) => !dE(e) || o && n ? Ym(e) : n ? fE(e, n, t) : mE(e), dE = (e) => U.draggingOverTrack ? U.draggingOverTrack.accepts?.includes(e.type) ?? !1 : !1, Ym = (e) => ({
  top: U.objectInitialPositions[e.id].top,
  left: U.objectInitialPositions[e.id].left
}), fE = (e, t, n) => {
  const o = hE(e, t);
  return !pE(n, e, o) || U.activeObjects.length !== 1 ? Ym(e) : {
    left: o,
    top: t.top
  };
}, hE = (e, t) => {
  const n = e.left + e.width / 2, o = t.left + t.width / 2;
  return n < o ? t.left - e.width : t.left + t.width;
}, pE = (e, t, n) => !(n < 0 || Ma(e, {
  ...t.getBoundingRect(),
  left: n
})), mE = (e) => ({
  left: e.getBoundingRect().left,
  top: U.draggingOverTrack?.top ?? 0
});
function gE(e, t) {
  let n = null;
  return function(...o) {
    const s = Date.now();
    (n === null || s - n >= t) && (n = s, e(...o));
  };
}
function vE(e) {
  const t = e.target, n = t.canvas, o = t.top, s = -t.height * 0.75, a = n.height + t.height * 0.75;
  t.top = Math.min(Math.max(o, s), a - t.height);
  const l = t.left;
  t.left = Math.max(l, 0);
}
const yE = (e) => {
  e.on("object:moving", Gm.bind(e)), e.on("object:moving", Zm);
}, bE = (e) => {
  e.off("object:moving", Gm.bind(e)), e.off("object:moving", Zm);
};
function Xm() {
  const e = this, t = e.getActiveObject(), n = e.getActiveObjects().map((o) => o.id);
  t instanceof Ql ? (t.borderColor = "rgba(0, 216, 214, 0.75)", t.hasControls = !1, t.hoverCursor = "default", t.borderScaleFactor = 1, t.padding = 0, t.getObjects().forEach((o) => {
    o.setSelected(!0);
  })) : t?.setSelected(!0), this.setActiveIds(n);
}
function Km(e) {
  const t = this, n = t.getActiveObject();
  n instanceof Ql && (n.borderColor = "transparent", n.hasControls = !1, n.hoverCursor = "default"), e.selected.forEach((s) => {
    s.setSelected(!0);
  }), e.deselected.forEach((s) => {
    s.setSelected(!1);
  });
  const o = t.getActiveObjects().map((s) => s.id);
  this.setActiveIds(o);
}
function qm(e) {
  this.getObjects().forEach((n) => {
    n.isSelected && (n.isSelected = !1);
  }), e.deselected.forEach((n) => {
    n.setSelected(!1);
  });
  const t = this.getActiveObjects().map((n) => n.id);
  this.setActiveIds(t);
}
const xE = (e) => {
  e.on("selection:created", Xm), e.on("selection:updated", Km), e.on("selection:cleared", qm);
}, wE = (e) => {
  e.off("selection:created", Xm), e.off("selection:updated", Km), e.off("selection:cleared", qm);
};
let Jm, Qm, eg;
const CE = (e) => {
  const { state: t } = e;
  Jm = t.subscribeToActiveIds(({ activeIds: n }) => {
    if (n.length === 1) {
      const o = n[0], { trackItemIds: s, trackItemsMap: a } = t.getState();
      s.forEach((l) => {
        a[l].type;
      }), e.selectTrackItemByIds([o]);
    } else
      e.selectTrackItemByIds(n);
  }), Qm = t.subscribeToHistory((n) => {
    const { tracks: o, trackItemsMap: s, trackItemIds: a, trackItemDetailsMap: l } = n;
    e.tracks = o, e.trackItemsMap = s, e.trackItemIds = a, e.trackItemDetailsMap = l, e.renderTracks(), e.updateTrackItemsToHistory(), e.alignItemsToTrack(), e.calcBounding(), e.updateTransitions(), e.duration = wn(e.trackItemsMap);
  }), eg = t.subscribeToAddOrRemoveItems(() => {
    const n = e.getTrackItems().map((u) => u.id), { trackItemIds: o, trackItemsMap: s, trackItemDetailsMap: a } = t.getState(), l = [];
    n.forEach((u) => {
      o.includes(u) || l.push(u);
    }), e.deleteTrackItemById(l), e.tracks = t.getState().tracks, e.trackItemsMap = s, e.trackItemDetailsMap = a, o.forEach((u) => {
      if (!n.includes(u)) {
        const f = {
          ...s[u],
          details: {
            ...a[u].details
          }
        };
        e.addTrackItem(f);
      }
    }), e.renderTracks(), e.alignItemsToTrack(), o.forEach((u) => {
      e.updateTrackItemCoords(u);
    }), e.updateTransitions(), e.updateTrackCoords();
  });
}, SE = (e) => {
  Jm.unsubscribe(), Qm.unsubscribe(), eg.unsubscribe();
};
function tg(e) {
  const {
    isSecondaryOverlapped: t,
    secondaryTracks: n,
    primaryTracks: o,
    primaryPositions: s
  } = e, { trackId: a, positions: l } = s, u = this.tracks.findIndex((C) => C.id === a), f = wm(
    Object.keys(n).map(
      (C) => n[C].objects.map((T) => T.id)
    )
  ), h = ea(this.tracks, [
    ...Object.keys(l),
    ...f
  ]);
  Object.keys(o).forEach((C) => {
    this.pauseEventListeners();
    const { objects: T } = o[C];
    T.forEach((E) => {
      const k = l[E.id];
      E.left = k.left;
    }), this.resumeEventListeners();
    const S = h.find((E) => E.id === a);
    S && S.items.push(...Object.keys(l)), this.tracks = h;
  });
  const m = this.tracks[u], v = [];
  Object.keys(n).forEach((C) => {
    const { objects: T, index: S } = n[C], E = T.map((M) => M.id), [k] = E, R = this.trackItemsMap[k];
    if (t) {
      const M = {
        id: tt(),
        items: E,
        type: R.type,
        accepts: this.acceptsMap?.[R.type],
        tempIndex: S
      };
      v.push(M);
    } else {
      const M = h[u + S];
      M && M.items.push(...E), this.tracks = h;
    }
  });
  const b = Cm(
    m,
    v
  );
  b.length && h.splice(u, 1, ...b), this.tracks = h, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
function ng({
  trackItemIds: e,
  isOverlapped: t
}) {
  const [n] = e;
  if (n) {
    if (!this.getObjects("Transition").find(
      (o) => o.id === n
    )) {
      const o = this.tracks.find((s) => s.items.includes(n));
      if (t) {
        const s = _E(this.tracks, e), a = {
          id: tt(),
          items: [n],
          type: o?.type,
          accepts: o?.accepts
        }, l = this.tracks.findIndex((u) => u.id === o?.id);
        s.splice(l, 0, a), this.tracks = s;
      }
    }
    this.renderTracks(), this.alignItemsToTrack(), this.alignTransitionsToTrack(), this.updateTransitions(), this.updateTrackItemsPosition(), this.updateState({ updateHistory: !0, kind: "update" });
  }
}
function _E(e, t) {
  return e.map((n) => ({
    ...n,
    items: n.items.filter(
      (o) => !t.includes(o)
    )
  }));
}
function rg(e) {
  const {
    secondaryTracks: t,
    primaryTracks: n,
    primaryPositions: o
  } = e, { positions: s, trackIndex: a } = o, l = a === -1 ? this.tracks.length : a, [u] = Object.keys(n), f = this.tracks.find((S) => S.id == u), h = n[u], m = {
    id: tt(),
    items: h.objects.map((S) => S.id),
    type: f?.type,
    accepts: f?.accepts
  }, v = wm(
    Object.keys(t).map(
      (S) => t[S].objects.map((E) => E.id)
    )
  ), b = ea(this.tracks, [
    ...Object.keys(s),
    ...v
  ]), C = [];
  Object.keys(t).forEach((S) => {
    const { objects: E, index: k } = t[S], R = this.tracks.find(
      (N) => N.id == S
    ), M = E.map((N) => N.id), L = {
      id: tt(),
      items: M,
      type: R?.type,
      accepts: R?.accepts,
      tempIndex: k
    };
    C.push(L);
  });
  const T = Cm(m, C);
  T.length && b.splice(l, 0, ...T), this.tracks = b, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
const TE = (e) => {
  e.on("track:create", rg.bind(e)), e.on("track-items:resized", ng.bind(e)), e.on("track-items:moved", tg.bind(e));
}, EE = (e) => {
  e.off("track:create", rg.bind(e)), e.off("track-items:resized", ng.bind(e)), e.off("track-items:moved", tg.bind(e));
}, IE = (e) => {
  ZT(e), tE(e), iE(e), yE(e), TE(e), xE(e), GS(e), CE(e);
}, kE = (e) => {
  YT(e), nE(e), oE(e), bE(e), EE(e), wE(e), ZS(e), SE();
}, AE = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"]
}, RE = ["video", "image", "audio", "text"];
let Bu = class extends T3 {
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
    tn.ownDefaults.borderColor = "transparent", tn.ownDefaults.cornerColor = "white", tn.ownDefaults.cornerStrokeColor = "transparent", tn.ownDefaults.strokeWidth = 0, tn.ownDefaults.borderOpacityWhenMoving = 1, tn.ownDefaults.borderScaleFactor = 1, tn.ownDefaults.cornerSize = 8, tn.ownDefaults.cornerStyle = "rect", tn.ownDefaults.centeredScaling = !1, tn.ownDefaults.centeredRotation = !0, tn.ownDefaults.transparentCorners = !1;
  }
  constructor(t, n) {
    super(t, n), this.bounding = n.bounding || {
      width: n.width || 0,
      height: n.height || 0
    }, this.spacing = {
      left: 16,
      right: 80,
      ...n.spacing
    };
    const o = this.viewportTransform;
    o[4] = this.spacing.left, this.tScale = n.tScale || 1 / 300, this.store = n.store, this.state = n.state, this.scale = n.scale, this.onScroll = n.onScroll, this.acceptsMap = this.createAcceptsItemMap(n.acceptsMap), this.sizesMap = LS(n.sizesMap), this.setupFabricDefaults(), this.initEventListeners();
  }
  createAcceptsItemMap(t = AE) {
    const n = {};
    return Object.keys(t).forEach((o) => {
      const s = t[o];
      n[o] = s.includes("*") ? RE : s;
    }), n;
  }
  // setActiveIds(e: any) {
  //   this.activeIds = e;
  //   eventBus.dispatch(LAYER_SELECTION, {
  //     payload: {
  //       activeIds: this.activeIds,
  //     },
  //   });
  // }
  setActiveIds(t) {
    this.activeIds = t, this.getObjects("Transition").some(
      (o) => t.includes(o.id)
    ) || (this.state?.updateState({
      activeIds: Ae.cloneDeep(this.activeIds)
    }), xe.dispatch(Yp, {
      payload: {
        activeIds: this.activeIds
      }
    }));
  }
  purge() {
    kE(this), this.dispose();
  }
  static registerItems(t) {
    Object.keys(t).forEach((n) => {
      ft.setClass(t[n], n);
    });
  }
  initEventListeners() {
    IE(this);
  }
  getUpdatedState() {
    const t = wn(this.trackItemsMap);
    return {
      tracks: this.tracks,
      trackItemIds: this.trackItemIds,
      trackItemsMap: this.trackItemsMap,
      transitionIds: this.transitionIds,
      transitionsMap: this.transitionsMap,
      // tScale: this.tScale,
      scale: this.scale,
      duration: t
    };
  }
  getState() {
    const t = wn(this.trackItemsMap);
    return {
      tracks: this.tracks,
      trackItemIds: this.trackItemIds,
      trackItemsMap: this.trackItemsMap,
      transitionIds: this.transitionIds,
      transitionsMap: this.transitionsMap,
      trackItemDetailsMap: this.trackItemDetailsMap,
      // tScale: this.tScale,
      scale: this.scale,
      duration: t
    };
  }
  notify(t = { updateHistory: !1 }) {
    const n = this.getUpdatedState();
    this.state.updateState(n, t);
  }
  updateState(t) {
    this.updateTracksState(), this.updateTrackItemsState(), this.requestRenderAll(), this.calcBounding(), this.updateTrackCoords();
    const n = this.getUpdatedState();
    this.state.updateState(n, t);
  }
  scrollTo({
    scrollLeft: t,
    scrollTop: n
  }) {
    const o = [...this.viewportTransform];
    let s = !1;
    if (typeof t == "number" && (o[4] = -t + this.spacing.left, s = !0), typeof n == "number" && (o[5] = -n, s = !0), s) {
      this.viewportTransform = o;
      const a = this.getActiveObject();
      a && a.setCoords(), this.requestRenderAll();
    }
  }
  setBoundingBox(t) {
    this.bounding = t;
  }
  calcBounding() {
    const t = this.getTrackItems().reduce(
      (n, o) => {
        const { left: s, top: a, width: l, height: u } = o.getBoundingRect();
        return {
          left: Math.min(n.left, s),
          top: Math.min(n.top, a),
          width: Math.max(n.width, s + l),
          height: Math.max(n.height, a + u)
        };
      },
      { left: 1 / 0, top: 1 / 0, width: this.width, height: 0 }
    );
    this.bounding = t, xe.dispatch(Qp, {
      payload: { bounding: t }
    });
  }
  setScale(t) {
    this.pauseEventListeners(), this.tScale = t.zoom, this.scale = t;
    const n = this.getState();
    this.getObjects("Video", "Image", "Text", "Audio").forEach(
      (o) => {
        const s = n.trackItemsMap[o.id], { from: a, to: l } = s.display, u = Xe(a, this.tScale), f = Xe(
          l - a,
          this.tScale,
          o.playbackRate
        );
        o.set({ left: u, width: f, tScale: t.zoom }), o.setCoords();
      }
    ), this.requestRenderAll(), this.calcBounding(), this.updateTrackCoords(), this.updateTransitions(!1), this.resumeEventListeners(), this.notify();
  }
  setViewportPos(t, n) {
    const o = this.getViewportPos(t, n), s = this.viewportTransform;
    s[4] = o.x, s[5] = o.y, this.requestRenderAll(), this.setActiveTrackItemCoords();
    const a = this.onScroll;
    a && a.call(this, {
      scrollTop: o.y,
      scrollLeft: o.x - this.spacing.left
    });
  }
  getViewportPos(t, n) {
    const o = this.bounding.width - 100 >= this.width ? this.spacing.right : 0, s = this.width - this.bounding.width - o, a = this.spacing.left, l = Math.max(s, Math.min(t, a));
    if (this.bounding.height < this.height) return { x: l, y: 0 };
    const u = this.height - this.bounding.height - 40, f = Math.max(u, Math.min(n, 0));
    return { x: l, y: f };
  }
};
yS(Bu, [
  YC,
  HS,
  BS,
  VS
]);
function PE(e) {
  const t = xe.subject.pipe(Wn(({ key: n }) => n.startsWith(_x))).subscribe((n) => {
    if (n.key === qp) {
      const o = n.value;
      e.setScale(o?.payload.scale ?? void 0);
    }
  });
  return {
    unsubscribe: () => {
      t.unsubscribe();
    }
  };
}
Bu.registerItems({
  Text: Rm,
  Image: NS,
  Video: jS,
  Audio: DS,
  Track: FS,
  Helper: zS
});
const ME = ({ stateManager: e }) => {
  const [t, n] = Ke(0), o = pn(null), s = pn(null), a = pn(null), l = pn(null), u = pn(null), [f, h] = Ke({
    width: 0,
    height: 0
  }), [m, v] = Ke({
    width: 0,
    height: 0
  }), {
    scale: b,
    playerRef: C,
    fps: T,
    setState: S,
    timeline: E
  } = Gt(), { setTimeline: k } = Gt(), R = Mu(C ?? void 0), M = (F) => {
    u.current && l.current && (l.current.scrollTop = -F.scrollTop, u.current.scrollLeft = -F.scrollLeft, n(-F.scrollLeft));
  };
  ut(() => {
    const F = Xe(R / T * 1e3, b.zoom), V = s.current?.getBoundingClientRect().x + s.current?.clientWidth;
    if (F - t + 40 >= V) {
      const K = u.current?.clientWidth, J = u.current?.scrollWidth, Z = u.current?.scrollLeft, ne = (J - (K + Z)) / K;
      ne >= 0 && (ne > 1 ? u.current?.scrollTo({
        left: Z + K
      }) : u.current?.scrollTo({
        left: J - K
      }));
    }
  }, [R]), ut(() => {
    const F = s.current, V = o.current;
    if (!F || !V) return;
    const G = V.clientWidth, K = V.clientHeight, J = new Bu(F, {
      width: G,
      height: K,
      bounding: {
        width: G,
        height: 0
      },
      selectionColor: "rgba(0, 216, 214,0.1)",
      selectionBorderColor: "rgba(0, 216, 214,1.0)",
      onScroll: M,
      // tScale: scale.zoom,
      // store,
      state: e,
      scale: b,
      spacing: {
        left: Ru,
        right: o1
      }
    }), Z = PE(J);
    a.current = J, h({
      width: G,
      height: K
    }), v({
      width: G,
      height: 0
    }), k(J);
    const Q = e.subscribeToSize(
      (fe) => {
        S(fe);
      }
    ), ne = e.subscribeToScale((fe) => {
      S(fe);
    }), Te = e.subscribeToTracks(
      (fe) => {
        S(fe);
      }
    ), re = e.subscribeToDuration(
      (fe) => {
        S(fe);
      }
    ), le = e.subscribeToUpdateTrackItem(() => {
      const fe = e.getState();
      S({
        duration: fe.duration,
        trackItemsMap: fe.trackItemsMap
      });
    }), ee = e.subscribeToAddOrRemoveItems(
      () => {
        const fe = e.getState();
        S({
          trackItemDetailsMap: fe.trackItemDetailsMap,
          trackItemsMap: fe.trackItemsMap,
          trackItemIds: fe.trackItemIds,
          tracks: fe.tracks
        });
      }
    ), ye = e.subscribeToUpdateItemDetails(() => {
      const fe = e.getState();
      S({
        trackItemDetailsMap: fe.trackItemDetailsMap
      });
    });
    return () => {
      Z.unsubscribe(), J.purge(), ne.unsubscribe(), Te.unsubscribe(), re.unsubscribe(), ee.unsubscribe(), le.unsubscribe(), ye.unsubscribe(), Q.unsubscribe();
    };
  }, []), ut(() => {
    const V = xe.subject.pipe(
      Wn(({ key: G }) => G.startsWith(Ex))
    ).subscribe((G) => {
      if (G.key === Qp) {
        const K = G.value?.payload?.bounding;
        K && v({
          width: K.width,
          height: K.height
        });
      }
    });
    return () => {
      V.unsubscribe();
    };
  }, []);
  const L = (F) => {
    const V = F.currentTarget.scrollLeft;
    a.current.scrollTo({ scrollLeft: V }), n(V);
  }, N = (F) => {
    const V = F.currentTarget.scrollTop;
    a.current.scrollTo({ scrollTop: V });
  };
  ut(() => {
    const F = u.current?.scrollWidth;
    if (!F || !E) return;
    const V = E.width;
    F < V + t && E.scrollTo({ scrollLeft: F - V });
  }, [b]);
  const $ = (F) => {
    if (!a.current) return;
    const G = rn(F, b.zoom);
    C?.current?.seekTo(G * T / 1e3);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "relative overflow-hidden h-80 w-full", children: [
    /* @__PURE__ */ p.jsx(yC, {}),
    /* @__PURE__ */ p.jsx(
      GC,
      {
        onClick: $,
        scrollLeft: t
      }
    ),
    /* @__PURE__ */ p.jsx(VC, { scrollLeft: t }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "relative w-10 flex-none" }),
      /* @__PURE__ */ p.jsxs("div", { className: "relative h-[230px] flex-1", children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            ref: o,
            className: "absolute top-0 h-[230px] w-full text-sm text-white ",
            children: /* @__PURE__ */ p.jsx(
              "canvas",
              {
                ref: s,
                id: "designcombo-timeline-canvas"
              }
            )
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Zs,
          {
            type: "always",
            style: {
              position: "absolute",
              width: "calc(100vw - 40px)",
              height: "10px"
            },
            className: "ScrollAreaRootH",
            children: [
              /* @__PURE__ */ p.jsx(
                Al,
                {
                  onScroll: L,
                  className: "ScrollAreaViewport",
                  id: "viewportH",
                  ref: u,
                  children: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      style: {
                        width: m.width > f.width ? m.width + o1 : m.width
                      },
                      className: "pointer-events-none h-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ p.jsx(
                Ih,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "horizontal",
                  children: /* @__PURE__ */ p.jsx(kh, { className: "ScrollAreaThumb" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Zs,
          {
            type: "always",
            style: {
              position: "absolute",
              height: "230px",
              width: "10px"
            },
            className: "ScrollAreaRootV",
            children: [
              /* @__PURE__ */ p.jsx(
                Al,
                {
                  onScroll: N,
                  className: "ScrollAreaViewport",
                  ref: l,
                  children: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      style: {
                        height: m.height > f.height ? m.height + 40 : f.height
                      },
                      className: "pointer-events-none w-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ p.jsx(
                Ih,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "vertical",
                  children: /* @__PURE__ */ p.jsx(kh, { className: "ScrollAreaThumb" })
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
};
function OE() {
  const { activeIds: e, trackItemsMap: t } = Gt(), [n, o] = Ke(null), { setShowToolboxItem: s, setActiveToolboxItem: a } = Pi();
  return ut(() => {
    if (e.length === 1) {
      const [l] = e, u = t[l];
      u && (s(!0), a(`basic-${u.type}`), o(u.type));
    } else
      o(null), s(!1), a(null);
  }, [e, t]), /* @__PURE__ */ p.jsx(p.Fragment, { children: n && /* @__PURE__ */ p.jsx(LE, { controlType: n }) });
}
function LE({ controlType: e }) {
  const { setShowToolboxItem: t, setActiveToolboxItem: n, activeToolboxItem: o } = Pi(), s = Dr(
    (a) => {
      a === o ? (t(!1), n(null)) : (t(!0), n(a));
    },
    [o]
  );
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      style: { zIndex: 201 },
      className: "absolute right-2.5 top-1/2 flex w-14 -translate-y-1/2 flex-col items-center rounded-lg bg-background/80 py-2 shadow-lg backdrop-blur-lg backdrop-filter",
      children: {
        image: /* @__PURE__ */ p.jsx(
          DE,
          {
            activeToolboxItem: o,
            type: e,
            openToolboxItem: s
          }
        ),
        video: /* @__PURE__ */ p.jsx(
          NE,
          {
            activeToolboxItem: o,
            type: e,
            openToolboxItem: s
          }
        ),
        audio: /* @__PURE__ */ p.jsx(
          FE,
          {
            activeToolboxItem: o,
            type: e,
            openToolboxItem: s
          }
        ),
        text: /* @__PURE__ */ p.jsx(
          jE,
          {
            activeToolboxItem: o,
            type: e,
            openToolboxItem: s
          }
        )
      }[e]
    }
  );
}
const DE = ({
  openToolboxItem: e,
  type: t,
  activeToolboxItem: n
}) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-center", children: [
  /* @__PURE__ */ p.jsx(
    Oa,
    {
      activeToolboxItem: n,
      openToolboxItem: e,
      type: t
    }
  ),
  /* @__PURE__ */ p.jsx(
    Uu,
    {
      activeToolboxItem: n,
      openToolboxItem: e
    }
  )
] }), jE = ({
  openToolboxItem: e,
  type: t,
  activeToolboxItem: n
}) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-center", children: [
  /* @__PURE__ */ p.jsx(
    Oa,
    {
      activeToolboxItem: n,
      openToolboxItem: e,
      type: t
    }
  ),
  /* @__PURE__ */ p.jsx(
    Uu,
    {
      activeToolboxItem: n,
      openToolboxItem: e
    }
  )
] }), NE = ({
  openToolboxItem: e,
  type: t,
  activeToolboxItem: n
}) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-center", children: [
  /* @__PURE__ */ p.jsx(
    Oa,
    {
      activeToolboxItem: n,
      openToolboxItem: e,
      type: t
    }
  ),
  /* @__PURE__ */ p.jsx(
    Uu,
    {
      activeToolboxItem: n,
      openToolboxItem: e
    }
  )
] }), FE = ({
  openToolboxItem: e,
  type: t,
  activeToolboxItem: n
}) => /* @__PURE__ */ p.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ p.jsx(
  Oa,
  {
    activeToolboxItem: n,
    openToolboxItem: e,
    type: t
  }
) }), Oa = ({
  openToolboxItem: e,
  type: t,
  activeToolboxItem: n
}) => {
  const o = nn[t];
  return /* @__PURE__ */ p.jsx(
    Le,
    {
      size: "icon",
      onClick: () => e(`basic-${t}`),
      variant: `basic-${t}` === n ? "secondary" : "ghost",
      className: `basic-${t}` !== n ? "text-muted-foreground" : "",
      children: /* @__PURE__ */ p.jsx(o, { size: 20 })
    }
  );
}, Uu = ({
  openToolboxItem: e,
  activeToolboxItem: t
}) => /* @__PURE__ */ p.jsx(
  Le,
  {
    size: "icon",
    onClick: () => e("animation"),
    variant: t === "animation" ? "secondary" : "ghost",
    className: t !== "animation" ? "text-muted-foreground" : "",
    children: /* @__PURE__ */ p.jsxs(
      "svg",
      {
        width: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ p.jsx(
            "path",
            {
              d: "M6.77329 21.1395C6.2479 21.3357 5.67727 21.3772 5.12902 21.2591C4.58077 21.1409 4.07788 20.8681 3.67995 20.4729C3.40573 20.202 3.18839 19.879 3.0407 19.523C2.89302 19.1669 2.81797 18.785 2.81995 18.3995C2.82282 18.1286 2.8632 17.8594 2.93995 17.5995C2.65089 17.0591 2.42709 16.4861 2.27329 15.8929C1.66062 16.7379 1.37897 17.7782 1.48164 18.8169C1.5843 19.8557 2.06417 20.8207 2.83041 21.5295C3.59666 22.2382 4.59613 22.6415 5.63969 22.663C6.68325 22.6845 7.69849 22.3228 8.49329 21.6462C7.90225 21.5446 7.32504 21.3745 6.77329 21.1395ZM12.2733 18.4529C11.3101 18.9897 10.1982 19.1982 9.10595 19.0466C8.0137 18.895 7.00057 18.3917 6.21995 17.6129C5.44017 16.8357 4.93549 15.8252 4.78266 14.735C4.62984 13.6447 4.83722 12.5344 5.37329 11.5729C5.22747 10.9494 5.14483 10.3129 5.12662 9.67285C3.99221 10.8831 3.3732 12.4873 3.40057 14.1459C3.42794 15.8045 4.09956 17.3873 5.27329 18.5595C6.4502 19.7295 8.03445 20.3983 9.69374 20.4257C11.353 20.453 12.9585 19.8368 14.1733 18.7062C13.5331 18.6849 12.8967 18.6 12.2733 18.4529Z",
              fill: "currentColor",
              fillOpacity: "0.5"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "path",
            {
              d: "M2.31998 18.3942H2.31998L2.31996 18.3969C2.31763 18.849 2.40565 19.297 2.57886 19.7145C2.75198 20.1319 3.00671 20.5105 3.3281 20.8281C3.79378 21.2904 4.3822 21.6096 5.02368 21.7478C5.59915 21.8719 6.19568 21.8456 6.7562 21.6732C6.91495 21.7365 7.07554 21.7947 7.23776 21.848C6.74151 22.0651 6.20021 22.1745 5.64999 22.1631C4.72873 22.1441 3.84638 21.7881 3.16993 21.1624C2.49348 20.5367 2.06985 19.6847 1.97921 18.7678C1.92477 18.217 1.99273 17.6657 2.17288 17.1516C2.2453 17.3233 2.32356 17.4926 2.40755 17.6592C2.352 17.9001 2.3226 18.1466 2.31998 18.3942ZM9.03722 19.5418C10.1726 19.6994 11.3273 19.5029 12.3446 18.9816C12.5134 19.0181 12.683 19.0503 12.8533 19.0782C11.9099 19.6462 10.8192 19.9442 9.70198 19.9257C8.1721 19.9005 6.7114 19.284 5.62619 18.2053C4.54461 17.1249 3.92573 15.6662 3.9005 14.1376C3.8821 13.0223 4.18082 11.9336 4.74979 10.9932C4.7771 11.1632 4.80878 11.3325 4.84483 11.5009C4.32414 12.517 4.12857 13.6706 4.2875 14.8044C4.45544 16.0024 5.00998 17.1128 5.8668 17.9668C6.72435 18.8224 7.83733 19.3753 9.03722 19.5418Z",
              stroke: "currentColor",
              strokeOpacity: "0.5"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "mask",
            {
              id: "path-3-inside-1_4741_350",
              fill: "white",
              children: /* @__PURE__ */ p.jsx("path", { d: "M14.4394 17.4732C12.5735 17.4704 10.7663 16.8208 9.32553 15.6352C7.88477 14.4495 6.89961 12.801 6.53784 10.9705C6.17608 9.13998 6.46008 7.24067 7.34149 5.59605C8.22289 3.95144 9.64718 2.66324 11.3718 1.95087C13.0963 1.2385 15.0145 1.14602 16.7996 1.68919C18.5847 2.23235 20.1263 3.37756 21.1619 4.92976C22.1974 6.48196 22.6628 8.34514 22.4788 10.202C22.2948 12.0588 21.4728 13.7944 20.1528 15.1132C19.4024 15.8629 18.5115 16.4572 17.5311 16.8622C16.5508 17.2671 15.5002 17.4747 14.4394 17.4732ZM14.4394 2.6665C13.5538 2.66563 12.6766 2.83932 11.8581 3.17764C11.0396 3.51597 10.2958 4.01229 9.66923 4.63825C9.04266 5.2642 8.5456 6.00751 8.20646 6.82568C7.86733 7.64385 7.69277 8.52083 7.69278 9.4065C7.6929 10.293 7.86985 11.1707 8.21326 11.988C8.55668 12.8053 9.05966 13.5459 9.69278 14.1665C10.958 15.4314 12.6737 16.1419 14.4628 16.1419C16.2518 16.1419 17.9676 15.4314 19.2328 14.1665C20.175 13.2219 20.8157 12.019 21.0738 10.71C21.3318 9.401 21.1955 8.04488 20.6822 6.81339C20.1689 5.58191 19.3017 4.53047 18.1904 3.79224C17.079 3.05402 15.7736 2.66223 14.4394 2.6665Z" })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "path",
            {
              d: "M14.4394 17.4732C12.5735 17.4704 10.7663 16.8208 9.32553 15.6352C7.88477 14.4495 6.89961 12.801 6.53784 10.9705C6.17608 9.13998 6.46008 7.24067 7.34149 5.59605C8.22289 3.95144 9.64718 2.66324 11.3718 1.95087C13.0963 1.2385 15.0145 1.14602 16.7996 1.68919C18.5847 2.23235 20.1263 3.37756 21.1619 4.92976C22.1974 6.48196 22.6628 8.34514 22.4788 10.202C22.2948 12.0588 21.4728 13.7944 20.1528 15.1132C19.4024 15.8629 18.5115 16.4572 17.5311 16.8622C16.5508 17.2671 15.5002 17.4747 14.4394 17.4732ZM14.4394 2.6665C13.5538 2.66563 12.6766 2.83932 11.8581 3.17764C11.0396 3.51597 10.2958 4.01229 9.66923 4.63825C9.04266 5.2642 8.5456 6.00751 8.20646 6.82568C7.86733 7.64385 7.69277 8.52083 7.69278 9.4065C7.6929 10.293 7.86985 11.1707 8.21326 11.988C8.55668 12.8053 9.05966 13.5459 9.69278 14.1665C10.958 15.4314 12.6737 16.1419 14.4628 16.1419C16.2518 16.1419 17.9676 15.4314 19.2328 14.1665C20.175 13.2219 20.8157 12.019 21.0738 10.71C21.3318 9.401 21.1955 8.04488 20.6822 6.81339C20.1689 5.58191 19.3017 4.53047 18.1904 3.79224C17.079 3.05402 15.7736 2.66223 14.4394 2.6665Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "path",
            {
              d: "M14.4394 17.4732L14.435 20.4732L14.4394 17.4732ZM22.4788 10.202L19.4934 9.90613L22.4788 10.202ZM20.1528 15.1132L22.2731 17.2355L20.1528 15.1132ZM14.4394 2.6665L14.4365 5.66653L14.449 5.66649L14.4394 2.6665ZM7.69278 9.4065L4.69278 9.4065L4.69278 9.40693L7.69278 9.4065ZM9.69278 14.1665L11.8138 12.0449L11.8034 12.0344L11.7928 12.0241L9.69278 14.1665ZM14.4628 16.1419L14.4628 19.1419L14.4628 16.1419ZM19.2328 14.1665L21.3538 16.2881L21.3567 16.2852L19.2328 14.1665ZM14.4439 14.4732C13.2719 14.4714 12.1368 14.0635 11.2319 13.3187L7.4192 17.9516C9.39577 19.5782 11.8751 20.4694 14.435 20.4732L14.4439 14.4732ZM11.2319 13.3187C10.3269 12.574 9.70814 11.5386 9.48092 10.3888L3.59477 11.5521C4.09107 14.0634 5.44262 16.325 7.4192 17.9516L11.2319 13.3187ZM9.48092 10.3888C9.25369 9.2391 9.43208 8.04615 9.98569 7.01317L4.69729 4.17894C3.48809 6.43519 3.09846 9.04086 3.59477 11.5521L9.48092 10.3888ZM9.98569 7.01317C10.5393 5.98018 11.4339 5.17107 12.5171 4.72363L10.2264 -0.821889C7.86046 0.15541 5.90649 1.92269 4.69729 4.17894L9.98569 7.01317ZM12.5171 4.72363C13.6003 4.27619 14.8051 4.21811 15.9263 4.55927L17.6729 -1.18089C15.2239 -1.92606 12.5924 -1.79919 10.2264 -0.821889L12.5171 4.72363ZM15.9263 4.55927C17.0476 4.90043 18.0158 5.61973 18.6663 6.59467L23.6575 3.26485C22.2368 1.13539 20.1219 -0.435727 17.6729 -1.18089L15.9263 4.55927ZM18.6663 6.59467C19.3167 7.5696 19.609 8.73986 19.4934 9.90613L25.4642 10.4978C25.7166 7.95041 25.0781 5.39431 23.6575 3.26485L18.6663 6.59467ZM19.4934 9.90613C19.3779 11.0724 18.8615 12.1625 18.0324 12.9909L22.2731 17.2355C24.084 15.4262 25.2118 13.0452 25.4642 10.4978L19.4934 9.90613ZM18.0324 12.9909C17.5611 13.4617 17.0016 13.835 16.3858 14.0894L18.6765 19.6349C20.0214 19.0793 21.2436 18.264 22.2731 17.2355L18.0324 12.9909ZM16.3858 14.0894C15.77 14.3438 15.1101 14.4742 14.4439 14.4732L14.435 20.4732C15.8902 20.4753 17.3315 20.1905 18.6765 19.6349L16.3858 14.0894ZM14.4424 -0.333495C13.1625 -0.334761 11.8949 -0.0837622 10.7121 0.405152L13.0041 5.95013C13.4583 5.7624 13.945 5.66602 14.4365 5.6665L14.4424 -0.333495ZM10.7121 0.405152C9.52929 0.894066 8.45442 1.61131 7.54896 2.51588L11.7895 6.76061C12.1372 6.41327 12.5499 6.13787 13.0041 5.95013L10.7121 0.405152ZM7.54896 2.51588C6.6435 3.42044 5.92519 4.4946 5.43511 5.67694L10.9778 7.97441C11.166 7.52041 11.4418 7.10795 11.7895 6.76061L7.54896 2.51588ZM5.43511 5.67694C4.94503 6.85928 4.69277 8.12662 4.69278 9.4065L10.6928 9.4065C10.6928 8.91505 10.7896 8.42841 10.9778 7.97441L5.43511 5.67694ZM4.69278 9.40693C4.69296 10.6924 4.94953 11.965 5.44748 13.1501L10.979 10.8259C10.7902 10.3764 10.6928 9.89367 10.6928 9.40607L4.69278 9.40693ZM5.44748 13.1501C5.94543 14.3352 6.67476 15.4091 7.59278 16.3089L11.7928 12.0241C11.4446 11.6828 11.1679 11.2754 10.979 10.8259L5.44748 13.1501ZM7.57173 16.2881C9.39951 18.1154 11.8782 19.1419 14.4628 19.1419L14.4628 13.1419C13.4693 13.1419 12.5164 12.7473 11.8138 12.0449L7.57173 16.2881ZM14.4628 19.1419C17.0473 19.1419 19.526 18.1154 21.3538 16.2881L17.1117 12.0449C16.4091 12.7473 15.4563 13.1419 14.4628 13.1419L14.4628 19.1419ZM21.3567 16.2852C22.7183 14.9202 23.6442 13.1818 24.0171 11.2902L18.1304 10.1298C17.9872 10.8561 17.6317 11.5237 17.1088 12.0478L21.3567 16.2852ZM24.0171 11.2902C24.39 9.39856 24.1931 7.43883 23.4513 5.6592L17.9131 7.96758C18.198 8.65093 18.2736 9.40343 18.1304 10.1298L24.0171 11.2902ZM23.4513 5.6592C22.7096 3.87958 21.4563 2.36014 19.8503 1.29333L16.5304 6.29116C17.1471 6.70079 17.6283 7.28423 17.9131 7.96758L23.4513 5.6592ZM19.8503 1.29333C18.2443 0.226522 16.3579 -0.339653 14.4298 -0.333481L14.449 5.66649C15.1894 5.66412 15.9137 5.88152 16.5304 6.29116L19.8503 1.29333Z",
              fill: "currentColor",
              mask: "url(#path-3-inside-1_4741_350)"
            }
          )
        ]
      }
    )
  }
), zE = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function ig(e, t, n = { cyclesFix: !0 }, o = []) {
  let s = [];
  const a = Array.isArray(e);
  for (const u in e) {
    const f = e[u], h = a ? +u : u;
    if (!(u in t)) {
      s.push({
        type: "REMOVE",
        path: [h],
        oldValue: e[u]
      });
      continue;
    }
    const m = t[u], v = typeof f == "object" && typeof m == "object" && Array.isArray(f) === Array.isArray(m);
    f && m && v && !zE[Object.getPrototypeOf(f)?.constructor?.name] && (!n.cyclesFix || !o.includes(f)) ? s.push.apply(s, ig(f, m, n, n.cyclesFix ? o.concat([f]) : []).map((b) => (b.path.unshift(h), b))) : f !== m && // treat NaN values as equivalent
    !(Number.isNaN(f) && Number.isNaN(m)) && !(v && (isNaN(f) ? f + "" == m + "" : +f == +m)) && s.push({
      path: [h],
      type: "CHANGE",
      value: m,
      oldValue: f
    });
  }
  const l = Array.isArray(t);
  for (const u in t)
    u in e || s.push({
      type: "CREATE",
      path: [l ? +u : u],
      value: t[u]
    });
  return s;
}
var $u = Symbol.for("immer-nothing"), vo = Symbol.for("immer-draftable"), Dt = Symbol.for("immer-state"), og = process.env.NODE_ENV !== "production" ? [
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
function et(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = og[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Wr = Object.getPrototypeOf;
function Br(e) {
  return !!e && !!e[Dt];
}
function vr(e) {
  return e ? sg(e) || Array.isArray(e) || !!e[vo] || !!e.constructor?.[vo] || Do(e) || jo(e) : !1;
}
var HE = Object.prototype.constructor.toString();
function sg(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Wr(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === HE;
}
function _o(e, t) {
  Ur(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Ur(e) {
  const t = e[Dt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Do(e) ? 2 : jo(e) ? 3 : 0;
}
function To(e, t) {
  return Ur(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function bl(e, t) {
  return Ur(e) === 2 ? e.get(t) : e[t];
}
function ag(e, t, n) {
  const o = Ur(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function WE(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Do(e) {
  return e instanceof Map;
}
function jo(e) {
  return e instanceof Set;
}
function Lr(e) {
  return e.copy_ || e.base_;
}
function Gl(e, t) {
  if (Do(e))
    return new Map(e);
  if (jo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = sg(e);
  if (t === !0 || t === "class_only" && !n) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[Dt];
    let s = Reflect.ownKeys(o);
    for (let a = 0; a < s.length; a++) {
      const l = s[a], u = o[l];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (o[l] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[l]
      });
    }
    return Object.create(Wr(e), o);
  } else {
    const o = Wr(e);
    if (o !== null && n)
      return { ...e };
    const s = Object.create(o);
    return Object.assign(s, e);
  }
}
function Vu(e, t = !1) {
  return La(e) || Br(e) || !vr(e) || (Ur(e) > 1 && (e.set = e.add = e.clear = e.delete = BE), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => Vu(o, !0))), e;
}
function BE() {
  et(2);
}
function La(e) {
  return Object.isFrozen(e);
}
var Zl = {};
function $r(e) {
  const t = Zl[e];
  return t || et(0, e), t;
}
function UE(e, t) {
  Zl[e] || (Zl[e] = t);
}
var Eo;
function cg() {
  return Eo;
}
function $E(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function E1(e, t) {
  t && ($r("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Yl(e) {
  Xl(e), e.drafts_.forEach(VE), e.drafts_ = null;
}
function Xl(e) {
  e === Eo && (Eo = e.parent_);
}
function I1(e) {
  return Eo = $E(Eo, e);
}
function VE(e) {
  const t = e[Dt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function k1(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Dt].modified_ && (Yl(t), et(4)), vr(e) && (e = ca(t, e), t.parent_ || la(t, e)), t.patches_ && $r("Patches").generateReplacementPatches_(
    n[Dt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ca(t, n, []), Yl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== $u ? e : void 0;
}
function ca(e, t, n) {
  if (La(t))
    return t;
  const o = t[Dt];
  if (!o)
    return _o(
      t,
      (s, a) => A1(e, o, t, s, a, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return la(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const s = o.copy_;
    let a = s, l = !1;
    o.type_ === 3 && (a = new Set(s), s.clear(), l = !0), _o(
      a,
      (u, f) => A1(e, o, s, u, f, n, l)
    ), la(e, s, !1), n && e.patches_ && $r("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function A1(e, t, n, o, s, a, l) {
  if (process.env.NODE_ENV !== "production" && s === n && et(5), Br(s)) {
    const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !To(t.assigned_, o) ? a.concat(o) : void 0, f = ca(e, s, u);
    if (ag(n, o, f), Br(f))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(s);
  if (vr(s) && !La(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ca(e, s), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && la(e, s);
  }
}
function la(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Vu(t, n);
}
function GE(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : cg(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
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
  let s = o, a = Gu;
  n && (s = [o], a = Io);
  const { revoke: l, proxy: u } = Proxy.revocable(s, a);
  return o.draft_ = u, o.revoke_ = l, u;
}
var Gu = {
  get(e, t) {
    if (t === Dt)
      return e;
    const n = Lr(e);
    if (!To(n, t))
      return ZE(e, n, t);
    const o = n[t];
    return e.finalized_ || !vr(o) ? o : o === xl(e.base_, t) ? (wl(e), e.copy_[t] = ql(o, e)) : o;
  },
  has(e, t) {
    return t in Lr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Lr(e));
  },
  set(e, t, n) {
    const o = lg(Lr(e), t);
    if (o?.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const s = xl(Lr(e), t), a = s?.[Dt];
      if (a && a.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (WE(n, s) && (n !== void 0 || To(e.base_, t)))
        return !0;
      wl(e), Kl(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return xl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, wl(e), Kl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Lr(e), o = Reflect.getOwnPropertyDescriptor(n, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    et(11);
  },
  getPrototypeOf(e) {
    return Wr(e.base_);
  },
  setPrototypeOf() {
    et(12);
  }
}, Io = {};
_o(Gu, (e, t) => {
  Io[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Io.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && et(13), Io.set.call(this, e, t, void 0);
};
Io.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && et(14), Gu.set.call(this, e[0], t, n, e[0]);
};
function xl(e, t) {
  const n = e[Dt];
  return (n ? Lr(n) : e)[t];
}
function ZE(e, t, n) {
  const o = lg(t, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    o.get?.call(e.draft_)
  ) : void 0;
}
function lg(e, t) {
  if (!(t in e))
    return;
  let n = Wr(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = Wr(n);
  }
}
function Kl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Kl(e.parent_));
}
function wl(e) {
  e.copy_ || (e.copy_ = Gl(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var YE = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const a = n;
        n = t;
        const l = this;
        return function(f = a, ...h) {
          return l.produce(f, (m) => n.call(this, m, ...h));
        };
      }
      typeof n != "function" && et(6), o !== void 0 && typeof o != "function" && et(7);
      let s;
      if (vr(t)) {
        const a = I1(this), l = ql(t, void 0);
        let u = !0;
        try {
          s = n(l), u = !1;
        } finally {
          u ? Yl(a) : Xl(a);
        }
        return E1(a, o), k1(s, a);
      } else if (!t || typeof t != "object") {
        if (s = n(t), s === void 0 && (s = t), s === $u && (s = void 0), this.autoFreeze_ && Vu(s, !0), o) {
          const a = [], l = [];
          $r("Patches").generateReplacementPatches_(t, s, a, l), o(a, l);
        }
        return s;
      } else
        et(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (l, ...u) => this.produceWithPatches(l, (f) => t(f, ...u));
      let o, s;
      return [this.produce(t, n, (l, u) => {
        o = l, s = u;
      }), o, s];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    vr(e) || et(8), Br(e) && (e = XE(e));
    const t = I1(this), n = ql(e, void 0);
    return n[Dt].isManual_ = !0, Xl(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Dt];
    (!n || !n.isManual_) && et(9);
    const { scope_: o } = n;
    return E1(o, t), k1(void 0, o);
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
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const s = t[n];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const o = $r("Patches").applyPatches_;
    return Br(e) ? o(e, t) : this.produce(
      e,
      (s) => o(s, t)
    );
  }
};
function ql(e, t) {
  const n = Do(e) ? $r("MapSet").proxyMap_(e, t) : jo(e) ? $r("MapSet").proxySet_(e, t) : GE(e, t);
  return (t ? t.scope_ : cg()).drafts_.push(n), n;
}
function XE(e) {
  return Br(e) || et(10, e), ug(e);
}
function ug(e) {
  if (!vr(e) || La(e))
    return e;
  const t = e[Dt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Gl(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Gl(e, !0);
  return _o(n, (o, s) => {
    ag(n, o, ug(s));
  }), t && (t.finalized_ = !1), n;
}
function R1() {
  process.env.NODE_ENV !== "production" && og.push(
    'Sets cannot have "replace" patches.',
    function(b) {
      return "Unsupported patch operation: " + b;
    },
    function(b) {
      return "Cannot apply patch, path doesn't resolve: " + b;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", o = "remove";
  function s(b, C, T, S) {
    switch (b.type_) {
      case 0:
      case 2:
        return l(
          b,
          C,
          T,
          S
        );
      case 1:
        return a(b, C, T, S);
      case 3:
        return u(
          b,
          C,
          T,
          S
        );
    }
  }
  function a(b, C, T, S) {
    let { base_: E, assigned_: k } = b, R = b.copy_;
    R.length < E.length && ([E, R] = [R, E], [T, S] = [S, T]);
    for (let M = 0; M < E.length; M++)
      if (k[M] && R[M] !== E[M]) {
        const L = C.concat([M]);
        T.push({
          op: t,
          path: L,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: v(R[M])
        }), S.push({
          op: t,
          path: L,
          value: v(E[M])
        });
      }
    for (let M = E.length; M < R.length; M++) {
      const L = C.concat([M]);
      T.push({
        op: n,
        path: L,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: v(R[M])
      });
    }
    for (let M = R.length - 1; E.length <= M; --M) {
      const L = C.concat([M]);
      S.push({
        op: o,
        path: L
      });
    }
  }
  function l(b, C, T, S) {
    const { base_: E, copy_: k } = b;
    _o(b.assigned_, (R, M) => {
      const L = bl(E, R), N = bl(k, R), $ = M ? To(E, R) ? t : n : o;
      if (L === N && $ === t)
        return;
      const F = C.concat(R);
      T.push($ === o ? { op: $, path: F } : { op: $, path: F, value: N }), S.push(
        $ === n ? { op: o, path: F } : $ === o ? { op: n, path: F, value: v(L) } : { op: t, path: F, value: v(L) }
      );
    });
  }
  function u(b, C, T, S) {
    let { base_: E, copy_: k } = b, R = 0;
    E.forEach((M) => {
      if (!k.has(M)) {
        const L = C.concat([R]);
        T.push({
          op: o,
          path: L,
          value: M
        }), S.unshift({
          op: n,
          path: L,
          value: M
        });
      }
      R++;
    }), R = 0, k.forEach((M) => {
      if (!E.has(M)) {
        const L = C.concat([R]);
        T.push({
          op: n,
          path: L,
          value: M
        }), S.unshift({
          op: o,
          path: L,
          value: M
        });
      }
      R++;
    });
  }
  function f(b, C, T, S) {
    T.push({
      op: t,
      path: [],
      value: C === $u ? void 0 : C
    }), S.push({
      op: t,
      path: [],
      value: b
    });
  }
  function h(b, C) {
    return C.forEach((T) => {
      const { path: S, op: E } = T;
      let k = b;
      for (let N = 0; N < S.length - 1; N++) {
        const $ = Ur(k);
        let F = S[N];
        typeof F != "string" && typeof F != "number" && (F = "" + F), ($ === 0 || $ === 1) && (F === "__proto__" || F === "constructor") && et(19), typeof k == "function" && F === "prototype" && et(19), k = bl(k, F), typeof k != "object" && et(18, S.join("/"));
      }
      const R = Ur(k), M = m(T.value), L = S[S.length - 1];
      switch (E) {
        case t:
          switch (R) {
            case 2:
              return k.set(L, M);
            case 3:
              et(16);
            default:
              return k[L] = M;
          }
        case n:
          switch (R) {
            case 1:
              return L === "-" ? k.push(M) : k.splice(L, 0, M);
            case 2:
              return k.set(L, M);
            case 3:
              return k.add(M);
            default:
              return k[L] = M;
          }
        case o:
          switch (R) {
            case 1:
              return k.splice(L, 1);
            case 2:
              return k.delete(L);
            case 3:
              return k.delete(T.value);
            default:
              return delete k[L];
          }
        default:
          et(17, E);
      }
    }), b;
  }
  function m(b) {
    if (!vr(b))
      return b;
    if (Array.isArray(b))
      return b.map(m);
    if (Do(b))
      return new Map(
        Array.from(b.entries()).map(([T, S]) => [T, m(S)])
      );
    if (jo(b))
      return new Set(Array.from(b).map(m));
    const C = Object.create(Wr(b));
    for (const T in b)
      C[T] = m(b[T]);
    return To(b, vo) && (C[vo] = b[vo]), C;
  }
  function v(b) {
    return Br(b) ? m(b) : b;
  }
  UE("Patches", {
    applyPatches_: h,
    generatePatches_: s,
    generateReplacementPatches_: f
  });
}
var jt = new YE(), KE = jt.produce;
jt.produceWithPatches.bind(
  jt
);
jt.setAutoFreeze.bind(jt);
jt.setUseStrictShallowCopy.bind(jt);
var qE = jt.applyPatches.bind(jt);
jt.createDraft.bind(jt);
jt.finishDraft.bind(jt);
function JE(e) {
  const t = e.value, n = [];
  if (t?.payload?.trackItemIds) {
    const o = t.payload.trackItemIds;
    n.push(o), this.updateState({ activeIds: n });
  }
  if (e.key === Vp) {
    const o = e.value?.payload.trackItemIds, s = Ae.cloneDeep(this.getState()), a = o?.length ? o : s.activeIds, l = s.trackItemIds.filter(
      (v) => !a.includes(v)
    ), u = Object.fromEntries(
      Object.entries(s.trackItemDetailsMap).filter(
        ([v]) => !a.includes(v)
      )
    ), f = _S(s.tracks, a), h = Object.fromEntries(
      Object.entries(s.trackItemsMap).filter(
        ([v]) => !a.includes(v)
      )
    ), m = wn(h);
    this.updateState(
      {
        trackItemIds: l,
        trackItemDetailsMap: u,
        activeIds: [],
        trackItemsMap: h,
        tracks: f,
        duration: m
      },
      { updateHistory: !0, kind: "remove" }
    );
  }
  if (e.key === Gp) {
    const o = Ae.cloneDeep(this.getState()), s = [], a = e.value?.payload.trackItemIds || o.activeIds;
    if (a.length === 0) return;
    a.forEach((u) => {
      const f = o.trackItemsMap[u], h = o.trackItemDetailsMap[u], m = tt();
      s.push(m), o.trackItemsMap = {
        ...o.trackItemsMap,
        [m]: { ...Ae.cloneDeep(f), id: m }
      }, o.trackItemDetailsMap = {
        ...o.trackItemDetailsMap,
        [m]: { ...Ae.cloneDeep(h) }
      }, o.trackItemIds.push(m);
    });
    const l = o.tracks.map((u) => {
      const f = {
        ...u,
        id: tt(),
        items: u.items.filter((h) => a.includes(h)).map((h) => {
          const m = a.indexOf(h);
          return s[m];
        })
      };
      return f.items.length ? f : null;
    }).filter(Boolean);
    o.tracks.unshift(...l), this.updateState(
      {
        trackItemDetailsMap: o.trackItemDetailsMap,
        tracks: o.tracks,
        trackItemIds: o.trackItemIds,
        trackItemsMap: o.trackItemsMap
      },
      {
        updateHistory: !0,
        kind: "update"
      }
    );
  }
  if (e.key === Zp) {
    const o = Ae.cloneDeep(this.getState()), s = e.value?.options.time;
    if (o.activeIds.length !== 1) return;
    const a = o.activeIds[0], l = o.trackItemsMap[a];
    if (s <= l.display.from || s >= l.display.to)
      return;
    const u = tt(), f = {
      ...l,
      id: u,
      display: { from: s, to: l.display.to },
      trim: { from: s, to: l.display.to }
    };
    o.trackItemsMap[a].display.to = s, o.trackItemsMap[u] = f, o.trackItemDetailsMap[u] = o.trackItemDetailsMap[a], o.trackItemIds.push(u), o.tracks.forEach((h) => {
      h.items.includes(a) && h.items.push(u);
    }), this.updateState(
      {
        trackItemsMap: o.trackItemsMap,
        trackItemDetailsMap: o.trackItemDetailsMap,
        trackItemIds: o.trackItemIds,
        tracks: o.tracks
      },
      { updateHistory: !0, kind: "update" }
    );
  }
}
async function QE(e) {
  if (e.key === e0) {
    const t = e.value?.payload;
    this.updateState(
      {
        size: t
      },
      {
        kind: "scene:resize",
        updateHistory: !1
      }
    );
  }
  if (e.key === kx) {
    const t = e.value?.payload, n = t.size, o = t.trackItemIds, s = t.trackItemsMap, a = t.trackItemDetailsMap;
    if (!o) return;
    const l = o?.map(async (f) => {
      try {
        const h = a[f], m = s[f];
        if (h.type === "text") {
          const v = await Am(
            { id: f, details: h.details, ...m },
            {
              size: n
            }
          ), { details: b, ...C } = v;
          a[f] = { type: "text", details: b }, s[f] = C;
        }
        return !0;
      } catch {
        return !1;
      }
    });
    await Promise.all(l);
    const u = wn(s);
    this.updateState({
      ...t,
      trackItemsMap: s,
      duration: u
    });
  }
}
async function eI(e) {
  const t = Ae.cloneDeep(this.getState()), n = e.value?.options?.trackId, o = e.value?.options?.trackIndex;
  let s = [], a;
  if (e.key === ko) {
    a = "video";
    const u = await ES(e.value?.payload, {
      size: t.size
    }), { details: f, ...h } = u;
    t.trackItemDetailsMap[h.id] = {
      type: a,
      details: f
    }, t.trackItemsMap[h.id] = h, t.trackItemIds.push(h.id), s = [h.id];
  }
  if (e.key === Ro) {
    a = "image";
    const u = await TS(e.value?.payload, {
      size: t.size
    }), { details: f, ...h } = u;
    t.trackItemDetailsMap[h.id] = {
      type: a,
      details: f
    }, t.trackItemsMap[h.id] = h, t.trackItemIds.push(h.id), s = [h.id];
  }
  if (e.key === Ao) {
    a = "audio";
    const u = await IS(e.value?.payload), { details: f, ...h } = u;
    t.trackItemDetailsMap[h.id] = {
      type: a,
      details: f
    }, t.trackItemsMap[h.id] = h, t.trackItemIds.push(h.id), s = [h.id];
  }
  if (e.key === Bp) {
    a = "text";
    const { details: u, ...f } = await Am(
      e.value?.payload ?? void 0,
      {
        size: t.size
      }
    );
    t.trackItemDetailsMap[f.id] = { type: a, details: u }, t.trackItemsMap[f.id] = f, t.trackItemIds.push(f.id), s.push(f.id);
  }
  const l = tI(
    s,
    t.tracks,
    t.trackItemsMap,
    n,
    o
  );
  if (l.trackId)
    t.tracks.find((f) => f.id === l.trackId)?.items.push(...s);
  else if (l.trackIndex !== void 0) {
    const u = P1(a, s);
    t.tracks.splice(l.trackIndex, 0, u);
  } else {
    const u = P1(a, s);
    t.tracks.unshift(u);
  }
  t.duration = wn(t.trackItemsMap), this.updateState(
    {
      trackItemIds: t.trackItemIds,
      trackItemDetailsMap: t.trackItemDetailsMap,
      trackItemsMap: t.trackItemsMap,
      tracks: t.tracks,
      duration: t.duration,
      structure: t.structure
    },
    {
      updateHistory: !0,
      kind: "add"
    }
  );
}
function P1(e, t) {
  return {
    id: tt(),
    accepts: ["text", "audio", "helper", "video", "image"],
    type: e,
    items: t,
    magnetic: !1,
    static: !1
  };
}
const tI = (e, t, n, o, s) => {
  if (o === void 0 && s === void 0)
    return { trackId: void 0, trackIndex: void 0 };
  const a = s !== void 0 ? t[Math.max(0, Math.min(s, t.length - 1))] : t.find((f) => f.id === o);
  if (!a)
    return {
      trackId: void 0,
      trackIndex: s !== void 0 ? Math.max(0, Math.min(s, t.length - 1)) : void 0
    };
  const l = a.items.map((f) => n[f]), u = e.map((f) => n[f]);
  for (const f of l) {
    const h = f.display.from, m = f.display.to;
    for (const v of u) {
      const b = v.display.from;
      if (!(v.display.to <= h || b >= m))
        return {
          trackId: void 0,
          trackIndex: t.indexOf(a)
        };
    }
  }
  return {
    trackId: a.id,
    trackIndex: t.indexOf(a)
  };
}, M1 = [
  "tracks",
  "trackItemsMap",
  "trackItemDetailsMap",
  "transitionIds",
  "transitionsMap",
  "trackItemIds"
], nI = {
  size: {
    width: 1920,
    height: 1080
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
class rI {
  stateSubject;
  stateHistorySubject;
  prevState;
  undos;
  redos;
  listener;
  constructor(t) {
    this.stateSubject = null, this.stateHistorySubject = null, this.prevState = null, this.undos = [], this.redos = [], this.listener = null;
    const n = t || nI;
    this.stateSubject = new Lh(n), this.stateHistorySubject = new Lh({
      handleRedo: !1,
      handleUndo: !1
    }), this.prevState = n, this.initListeners();
  }
  initListeners() {
    iI(this);
  }
  destroyListeners() {
    this.listener && this.listener.unsubscribe();
  }
  purge() {
    this.destroyListeners();
  }
  updateHistory(t, n) {
    const o = Ae.pick(t, M1), s = Ae.pick(this.getState(), M1), a = ig(s, o);
    a.length && (this.undos.push({ undos: a, type: n }), this.redos = []);
  }
  getStateHistory() {
    return this.stateHistorySubject.getValue();
  }
  subscribeHistory(t) {
    return this.stateHistorySubject.subscribe(t);
  }
  getState() {
    return this.stateSubject.getValue();
  }
  subscribe(t) {
    return this.stateSubject.subscribe(t);
  }
  updateState(t, n = { updateHistory: !1, kind: void 0 }) {
    const o = this.getState(), s = { ...o, ...t };
    if (!Ae.isEqual(o, s)) {
      n.updateHistory && this.updateHistory(s, n.kind);
      const { duration: a, trackItemsMap: l, ...u } = o;
      this.prevState = {
        ...u,
        duration: this.prevState.duration,
        trackItemsMap: this.prevState.trackItemsMap
      }, this.stateSubject.next(s);
    }
  }
  subscribeToSize(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      Ae.isEqual(n.size, this.prevState.size) || t({ size: n.size });
    });
  }
  subscribeToScale(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      Ae.isEqual(n.scale, this.prevState.scale) || t({ scale: n.scale });
    });
  }
  subscribeToUpdateTrackItem(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      Ae.isEqual(n.trackItemsMap, this.prevState.trackItemsMap) || t({ trackItemsMap: n.trackItemsMap });
    });
  }
  subscribeToUpdateItemDetails(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      Ae.isEqual(
        n.trackItemDetailsMap,
        this.prevState.trackItemDetailsMap
      ) || t({ trackItemDetailsMap: n.trackItemDetailsMap });
    });
  }
  subscribeToDuration(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      n.duration !== this.prevState.duration && t({ duration: n.duration });
    });
  }
  subscribeToHistory(t) {
    return this.stateHistorySubject.asObservable().subscribe((n) => {
      if (n.handleRedo) {
        const o = this.undos[this.undos.length - 1]?.type;
        o === "update" && t({ ...this.getState(), type: o }), this.stateHistorySubject.next({
          handleRedo: !1,
          handleUndo: !1
        });
      }
      if (n.handleUndo) {
        const o = this.redos[this.redos.length - 1]?.type;
        o === "update" && t({ ...this.getState(), type: o }), this.stateHistorySubject.next({
          handleRedo: !1,
          handleUndo: !1
        });
      }
    });
  }
  subscribeToAddOrRemoveItems(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      (!n.trackItemIds?.every(
        (o) => this.prevState.trackItemIds?.includes(o)
      ) || !Ae.isEqual(n.tracks, this.prevState.tracks)) && t({ trackItemIds: n.trackItemIds });
    });
  }
  subscribeToActiveIds(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      Ae.isEqual(n.activeIds, this.prevState.activeIds) || t({ activeIds: n.activeIds });
    });
  }
  subscribeToTracks(t) {
    return this.stateSubject.asObservable().subscribe((n) => {
      (!Ae.isEqual(n.tracks, this.prevState.tracks) || !Ae.isEqual(n.trackItemIds, this.prevState.trackItemIds) || !Ae.isEqual(n.trackItemsMap, this.prevState.trackItemsMap) || !Ae.isEqual(n.transitionIds, this.prevState.transitionIds) || !Ae.isEqual(n.transitionsMap, this.prevState.transitionsMap) || !Ae.isEqual(
        n.trackItemDetailsMap,
        this.prevState.trackItemDetailsMap
      )) && t({
        tracks: n.tracks,
        trackItemIds: n.trackItemIds,
        trackItemsMap: n.trackItemsMap,
        transitionIds: n.transitionIds,
        transitionsMap: n.transitionsMap,
        trackItemDetailsMap: n.trackItemDetailsMap
        // structure: currentState.structure,
      });
    });
  }
  undo() {
    const t = this.undos.pop(), n = t?.undos, o = t?.type;
    if (!n || !o) return;
    R1();
    const {
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: l,
      transitionIds: u,
      transitionsMap: f,
      trackItemsMap: h
    } = this.getState(), m = Ae.cloneDeep({
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: l,
      transitionIds: u,
      transitionsMap: f,
      trackItemsMap: h
    }), v = [], b = [], C = [], T = [], S = [], E = [];
    n.forEach((Z) => {
      let Q;
      const ne = Z.path.slice(1);
      Z.type === "CREATE" ? Q = {
        path: ne,
        op: "remove",
        value: Z.value
      } : Z.type === "CHANGE" ? Q = {
        path: ne,
        op: "replace",
        value: Z.oldValue
      } : Q = {
        path: ne,
        op: "add",
        value: Z.oldValue
      }, Z.path.includes("trackItemIds") ? C.push(Q) : Z.path.includes("transitionIds") ? b.push(Q) : Z.path.includes("trackItemsMap") ? S.push(Q) : Z.path.includes("transitionsMap") ? T.push(Q) : Z.path.includes("tracks") ? v.push(Q) : Z.path.includes("trackItemDetailsMap") && E.push(Q);
    });
    const k = this.applyPatch(m.tracks, v), R = this.applyPatch(
      m.transitionIds,
      b
    ), M = this.applyPatch(
      m.trackItemIds,
      C
    ), L = this.applyPatch(
      m.transitionsMap,
      T
    ), N = this.applyPatch(
      m.trackItemsMap,
      S
    ), $ = this.applyPatch(
      m.trackItemDetailsMap,
      E
    ), F = Ae.cloneDeep({
      tracks: k,
      transitionIds: R,
      trackItemIds: M,
      transitionsMap: L,
      trackItemsMap: N,
      trackItemDetailsMap: $
    }), V = Ae.cloneDeep(this.getState()), G = { ...V, ...F };
    this.prevState = V;
    const K = { redos: n, type: o };
    this.redos.push(K);
    const J = wn(G.trackItemsMap);
    this.stateSubject.next({ ...G, duration: J }), this.stateHistorySubject.next({ handleRedo: !1, handleUndo: !0 });
  }
  redo() {
    const t = this.redos.pop();
    if (!t?.redos || !t?.type) return;
    R1();
    const n = this.getState(), {
      trackItemDetailsMap: o,
      trackItemIds: s,
      tracks: a,
      transitionIds: l,
      transitionsMap: u,
      trackItemsMap: f
    } = n, h = Ae.cloneDeep({
      trackItemDetailsMap: o,
      trackItemIds: s,
      tracks: a,
      transitionIds: l,
      transitionsMap: u,
      trackItemsMap: f
    }), m = [], v = [], b = [], C = [], T = [], S = [];
    t.redos.forEach((L) => {
      const N = L.path.slice(1);
      let $ = {};
      switch (L.type) {
        case "CREATE":
          $ = {
            path: N,
            op: "add",
            value: L.value
          };
          break;
        case "CHANGE":
          $ = {
            path: N,
            op: "replace",
            value: L.value
          };
          break;
        case "REMOVE":
          $ = {
            path: N,
            op: "remove",
            value: L.oldValue
          };
          break;
        default:
          return null;
      }
      L.path.includes("trackItemIds") ? b.push($) : L.path.includes("transitionIds") ? v.push($) : L.path.includes("trackItemsMap") ? T.push($) : L.path.includes("transitionsMap") ? C.push($) : L.path.includes("trackItemDetailsMap") ? S.push($) : m.push($);
    });
    const E = {
      tracks: this.applyPatch(h.tracks, m),
      transitionIds: this.applyPatch(h.transitionIds, v),
      trackItemIds: this.applyPatch(h.trackItemIds, b),
      transitionsMap: this.applyPatch(h.transitionsMap, C),
      trackItemsMap: this.applyPatch(h.trackItemsMap, T),
      trackItemDetailsMap: this.applyPatch(h.trackItemDetailsMap, S)
    }, k = Ae.cloneDeep(E), R = { ...Ae.cloneDeep(n), ...k };
    this.prevState = n, this.undos.push({ undos: t.redos, type: t.type });
    const M = wn(R.trackItemsMap);
    this.stateSubject.next({ ...R, duration: M }), this.stateHistorySubject.next({ handleRedo: !0, handleUndo: !1 });
  }
  applyPatch(t, n) {
    return n.reverse().reduce(
      (o, s) => KE(o, (a) => {
        qE(a, [s]);
      }),
      t
    );
  }
}
function iI(e) {
  const t = xe.subject.pipe(Wn(({ key: a }) => a.startsWith(Sx))).subscribe((a) => {
    a.key === Xp && e.undo(), a.key === Kp && e.redo();
  }), n = xe.subject.pipe(Wn(({ key: a, value: l }) => a.startsWith(gx))).subscribe((a) => {
    eI.bind(e)(a);
  }), o = xe.subject.pipe(
    Wn(({ key: a, value: l }) => a.startsWith(Ix))
  ).subscribe(async (a) => {
    await QE.bind(e)(a);
  }), s = xe.subject.pipe(Wn(({ key: a }) => a.startsWith(wx))).subscribe(async (a) => {
    JE.bind(e)(a);
  });
  return () => {
    t.unsubscribe(), n.unsubscribe(), s.unsubscribe(), o.unsubscribe();
  };
}
const oI = () => {
  const { playerRef: e, fps: t, timeline: n, setState: o } = Gt();
  ut(() => {
    const a = xe.subject.pipe(
      Wn(({ key: l }) => l.startsWith(vx))
    ).subscribe((l) => {
      if (l.key === yx) {
        const { time: u } = l.value?.payload;
        e?.current?.seekTo(u / 1e3 * t);
      } else if (l.key === Up)
        e?.current?.play();
      else if (l.key === $p)
        e?.current?.pause();
      else if (l.key === xx)
        e?.current?.isPlaying() ? e.current.pause() : e?.current?.play();
      else if (l.key === bx) {
        const { frames: u } = l.value?.payload;
        e?.current?.seekTo(
          Math.round(e.current.getCurrentFrame()) + u
        );
      }
    });
    return () => {
      a.unsubscribe();
    };
  }, [e, t]), ut(() => {
    const a = xe.subject.pipe(
      Wn(({ key: l }) => l.startsWith(Cx))
    ).subscribe((l) => {
      l.key === Yp && o({
        activeIds: l.value?.payload.activeIds
      });
    });
    return () => {
      a.unsubscribe();
    };
  }, [n]);
}, sI = () => /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ p.jsx("div", { className: "text-md text-text-primary flex h-12 flex-none items-center px-4 font-medium", children: "Presets" }) }), aI = () => {
  const { activeIds: e } = Gt();
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-md text-text-primary flex h-12 flex-none items-center px-4 font-medium", children: "Animations" }),
    /* @__PURE__ */ p.jsx("div", { className: "px-4", children: /* @__PURE__ */ p.jsxs(
      Wp,
      {
        defaultValue: "in",
        className: "w-full",
        children: [
          /* @__PURE__ */ p.jsxs(uu, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ p.jsx(yo, { value: "in", children: "In" }),
            /* @__PURE__ */ p.jsx(yo, { value: "out", children: "Out" })
          ] }),
          /* @__PURE__ */ p.jsx(bo, { value: "in", children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-3 gap-2 py-4" }) }),
          /* @__PURE__ */ p.jsx(bo, { value: "out", children: /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-3 gap-2 py-4" }) })
        ]
      }
    ) })
  ] });
}, cI = () => /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ p.jsx("div", { className: "text-md text-text-primary flex h-12 flex-none items-center px-4 font-medium", children: "Ai things" }) }), lI = ({ trackItem: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
  /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Text" }),
  /* @__PURE__ */ p.jsx(_n, { className: "h-full", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col gap-2 px-4", children: [
    /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2" }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-2 gap-2" })
  ] }) })
] }), uI = ({ trackItem: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
  /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Image" }),
  /* @__PURE__ */ p.jsx(_n, { className: "h-full", children: /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 px-4" }) })
] }), dI = ({ trackItem: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
  /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Video" }),
  /* @__PURE__ */ p.jsx(_n, { className: "h-full", children: /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-2 px-4", children: /* @__PURE__ */ p.jsx(
    Le,
    {
      variant: "secondary",
      size: "icon",
      onClick: () => {
        console.log(e);
      },
      children: /* @__PURE__ */ p.jsx(W8, { size: 18 })
    }
  ) }) })
] }), fI = ({ trackItem: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col", children: [
  /* @__PURE__ */ p.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audio" }),
  /* @__PURE__ */ p.jsx(_n, { className: "h-full" })
] }), hI = ({ children: e }) => {
  const { activeToolboxItem: t, setActiveToolboxItem: n } = Pi(), { activeIds: o, trackItemsMap: s, trackItemDetailsMap: a, transitionsMap: l } = Gt(), [u, f] = Ke(null), [h, m] = Ke(!1);
  return ut(() => {
    if (o.length === 1) {
      const [v] = o, b = a[v], C = {
        ...s[v],
        details: b?.details || {}
      };
      b ? f(C) : console.log(l[v]);
    } else
      f(null), m(!1);
  }, [o, s]), ut(() => {
    m(!!t);
  }, [t]), u ? /* @__PURE__ */ p.jsxs(
    "div",
    {
      style: {
        right: t && h ? "0" : "-100%",
        transition: "right 0.25s ease-in-out",
        zIndex: 200
      },
      className: "absolute top-1/2 mt-6 flex h-[calc(100%-32px-64px)] w-[340px] -translate-y-1/2 rounded-lg shadow-lg",
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "relative flex h-full w-[266px] bg-background/80 backdrop-blur-lg backdrop-filter", children: [
          /* @__PURE__ */ p.jsx(
            Le,
            {
              variant: "ghost",
              className: "absolute right-2 top-2 h-8 w-8 text-muted-foreground",
              size: "icon",
              children: /* @__PURE__ */ p.jsx(
                Pu,
                {
                  width: 16,
                  onClick: () => {
                    m(!1), n(null);
                  }
                }
              )
            }
          ),
          Ct.cloneElement(e, {
            trackItem: u,
            activeToolboxItem: t
          })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "w-[74px]" })
      ]
    }
  ) : null;
}, pI = ({
  trackItem: e,
  activeToolboxItem: t
}) => !e || !t ? null : /* @__PURE__ */ p.jsx(p.Fragment, { children: {
  "basic-text": /* @__PURE__ */ p.jsx(lI, { trackItem: e }),
  "basic-image": /* @__PURE__ */ p.jsx(uI, { trackItem: e }),
  "basic-video": /* @__PURE__ */ p.jsx(dI, { trackItem: e }),
  "basic-audio": /* @__PURE__ */ p.jsx(fI, { trackItem: e }),
  "preset-text": /* @__PURE__ */ p.jsx(sI, {}),
  animation: /* @__PURE__ */ p.jsx(aI, {}),
  smart: /* @__PURE__ */ p.jsx(cI, {})
}[t] }), mI = () => /* @__PURE__ */ p.jsx(hI, { children: /* @__PURE__ */ p.jsx(pI, {}) }), gI = new rI(), MA = () => {
  const { playerRef: e } = Gt();
  oI();
  const [t, n] = Ke([]);
  return /* @__PURE__ */ p.jsxs("div", { className: "relative flex h-screen w-screen flex-col bg-background ", children: [
    /* @__PURE__ */ p.jsx(FC, {}),
    /* @__PURE__ */ p.jsxs(
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
          /* @__PURE__ */ p.jsx(NC, {}),
          /* @__PURE__ */ p.jsx(jC, {}),
          /* @__PURE__ */ p.jsx(OE, {}),
          /* @__PURE__ */ p.jsx(mI, {}),
          /* @__PURE__ */ p.jsx(ZC, {})
        ]
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "h-70 w-full ", children: e && /* @__PURE__ */ p.jsx(ME, { stateManager: gI }) })
  ] });
};
export {
  Gp as ACTIVE_CLONE,
  Vp as ACTIVE_DELETE,
  VI as ACTIVE_PASTE,
  wx as ACTIVE_PREFIX,
  $I as ACTIVE_SET,
  Zp as ACTIVE_SPLIT,
  NI as ADD_ANIMATION,
  Ao as ADD_AUDIO,
  Ro as ADD_IMAGE,
  DI as ADD_MASK,
  LI as ADD_PLACEHOLDER,
  gx as ADD_PREFIX,
  II as ADD_SUFFIX,
  Bp as ADD_TEXT,
  jI as ADD_TRANSITION,
  ko as ADD_VIDEO,
  xC as AUDIOS,
  MA as AppComponent,
  DS as Audio,
  ur as AudioObject,
  wk as BASE_TIMELINE_ELEMENT_DURATION_MS,
  Le as Button,
  YC as CanvasMixin,
  Tk as DEFAULT_AUDIO_BITRATE,
  _k as DEFAULT_AUDIO_SAMPLE_RATE,
  fA as DEFAULT_BLUR,
  dA as DEFAULT_BLUR_STEP,
  Gk as DEFAULT_BRIGHTNESS,
  Vk as DEFAULT_BRIGHTNESS_STEP,
  iA as DEFAULT_CONTRAST,
  rA as DEFAULT_CONTRAST_STEP,
  Dk as DEFAULT_FADE_IN,
  jk as DEFAULT_FADE_OUT,
  Lk as DEFAULT_FADE_STEP,
  Wk as DEFAULT_FLIP_X,
  Bk as DEFAULT_FLIP_Y,
  s1 as DEFAULT_FONT,
  p8 as DEFAULT_FRAMERATE,
  uA as DEFAULT_MAX_BLUR,
  $k as DEFAULT_MAX_BRIGHTNESS,
  nA as DEFAULT_MAX_CONTRAST,
  Ok as DEFAULT_MAX_FADE,
  sA as DEFAULT_MAX_OPACITY,
  Fk as DEFAULT_MAX_ROTATION,
  Yk as DEFAULT_MAX_SATURATION,
  pA as DEFAULT_MAX_SPEED,
  Jk as DEFAULT_MAX_TEMPERATURE,
  yA as DEFAULT_MAX_VOLUME,
  Ak as DEFAULT_MEDIA_PANEL_WIDTH,
  lA as DEFAULT_MIN_BLUR,
  Uk as DEFAULT_MIN_BRIGHTNESS,
  tA as DEFAULT_MIN_CONTRAST,
  Mk as DEFAULT_MIN_FADE,
  oA as DEFAULT_MIN_OPACITY,
  Nk as DEFAULT_MIN_ROTATION,
  Zk as DEFAULT_MIN_SATURATION,
  hA as DEFAULT_MIN_SPEED,
  qk as DEFAULT_MIN_TEMPERATURE,
  vA as DEFAULT_MIN_VOLUME,
  cA as DEFAULT_OPACITY,
  aA as DEFAULT_OPACITY_STEP,
  Ik as DEFAULT_PREVIEW_HEIGHT,
  bm as DEFAULT_PREVIEW_SCALE,
  Ek as DEFAULT_PREVIEW_WIDTH,
  Hk as DEFAULT_ROTATION,
  zk as DEFAULT_ROTATION_STEP,
  Kk as DEFAULT_SATURATION,
  Xk as DEFAULT_SATURATION_STEP,
  Pk as DEFAULT_SETTINGS_PANEL_WIDTH,
  gA as DEFAULT_SPEED,
  mA as DEFAULT_SPEED_STEP,
  eA as DEFAULT_TEMPERATURE,
  Qk as DEFAULT_TEMPERATURE_STEP,
  h8 as DEFAULT_VIDEO_HEIGHT,
  Sk as DEFAULT_VIDEO_MAX_BITRATE,
  Ck as DEFAULT_VIDEO_MIN_BITRATE,
  f8 as DEFAULT_VIDEO_WIDTH,
  xA as DEFAULT_VOLUME,
  bA as DEFAULT_VOLUME_STEP,
  xk as DEFAULT_WEIGHT,
  sk as DESIGN_LOAD,
  ak as DESIGN_PREFIX,
  Ys as DRAG_END,
  Tx as DRAG_PREFIX,
  Jp as DRAG_START,
  ga as Draggable,
  qx as DroppableArea,
  zI as EDIT_OBJECT,
  FI as EDIT_PREFIX,
  WI as EDIT_SHAPE,
  HI as EDIT_TEXT,
  BI as ENTER_EDIT_MODE,
  m8 as FRAME_INTERVAL,
  hk as GIANT_ICON_SIZE,
  Sx as HISTORY_PREFIX,
  Kp as HISTORY_REDO,
  ok as HISTORY_RESET,
  Xp as HISTORY_UNDO,
  yC as Header,
  zS as Helper,
  Oo as HelperObject,
  wC as IMAGES,
  NS as Image,
  Ou as ImageObject,
  vk as LARGER_FONT_SIZE,
  yk as LARGE_FONT_SIZE,
  pk as LARGE_ICON_SIZE,
  tk as LAYER_CLONE,
  QI as LAYER_COPY,
  rk as LAYER_CUT,
  ik as LAYER_DELETE,
  JI as LAYER_EDITING_NAME,
  ZI as LAYER_HIDDEN,
  GI as LAYER_LOCKED,
  YI as LAYER_MOVE,
  ek as LAYER_PASTE,
  Cx as LAYER_PREFIX,
  qI as LAYER_RENAME,
  XI as LAYER_SELECT,
  Yp as LAYER_SELECTION,
  KI as LAYER_SEND_TO,
  nk as LAYER_SPLIT,
  Rk as MAX_MEDIA_PANEL_WIDTH,
  kk as MIN_MEDIA_PANEL_WIDTH,
  jC as MenuItem,
  NC as MenuList,
  bk as NORMAL_FONT_SIZE,
  mk as NORMAL_ICON_SIZE,
  FC as NavbarComponent,
  $p as PLAYER_PAUSE,
  Up as PLAYER_PLAY,
  vx as PLAYER_PREFIX,
  yx as PLAYER_SEEK,
  bx as PLAYER_SEEK_BY,
  UI as PLAYER_SEEK_TO,
  xx as PLAYER_TOGGLE_PLAY,
  Ea as PREVIEW_FRAME_WIDTH,
  Co as Placeholder,
  $C as Player,
  VC as PlayheadComponent,
  l8 as Popover,
  oa as PreviewTrackItem,
  HC as ResizeVideo,
  GC as RulerComponent,
  kx as SCENE_LOAD,
  Ix as SCENE_PREFIX,
  e0 as SCENE_RESIZE,
  d8 as SECONDARY_FONT,
  u8 as SMALL_FONT_SIZE,
  gk as SMALL_ICON_SIZE,
  OI as STATE_CHANGED,
  MI as STATE_PREFIX,
  ZC as Scene,
  fk as SceneBoard,
  _n as ScrollArea,
  wp as ScrollBar,
  BC as SequenceItem,
  N6 as Slider,
  rI as StateManager,
  Qp as TIMELINE_BOUNDING_CHANGED,
  Ru as TIMELINE_OFFSET_CANVAS_LEFT,
  o1 as TIMELINE_OFFSET_CANVAS_RIGHT,
  Ul as TIMELINE_OFFSET_X,
  Ex as TIMELINE_PREFIX,
  qp as TIMELINE_SCALE_CHANGED,
  _x as TIMELINE_SCALE_PREFIX,
  xn as TIMELINE_ZOOM_LEVELS,
  RI as TRACKS_CHANGED,
  PI as TRACK_ITEMS_CHANGED,
  AI as TRACK_ITEMS_PREFIX,
  kI as TRACK_PREFIX,
  SC as TRANSITIONS,
  Wp as Tabs,
  bo as TabsContent,
  uu as TabsList,
  yo as TabsTrigger,
  Rm as Text,
  Ti as TextObject,
  Bu as Timeline,
  ME as TimelineComponent,
  FS as Track,
  HS as TrackItemsMixin,
  zr as TrackObject,
  BS as TracksMixin,
  an as Transition,
  ia as TransitionGuide,
  VS as TransitionsMixin,
  EA as UPLOADS,
  CC as VIDEOS,
  jS as Video,
  Mi as VideoObject,
  IE as addEventListeners,
  yS as applyMixins,
  d6 as buttonVariants,
  SS as calculateDisplayRange,
  wn as calculateDuration,
  Lu as calculatePosition,
  T8 as calculateTimelineWidth,
  CS as calculateTrim,
  gt as cn,
  lS as createAudioControls,
  vS as createControls,
  hS as createMediaControls,
  Em as createResizeControls,
  ka as defaultColor,
  OS as defaultSizes,
  xe as eventBus,
  _S as filterAndCleanTracks,
  xm as findIndex,
  SI as formatBytes,
  wA as formatTimeToHumanReadable,
  g8 as formatTimelineUnit,
  v8 as frameToTimeString,
  b8 as getCurrentTime,
  CA as getFitZoomLevel,
  AA as getMovingState,
  C8 as getNextZoom,
  _8 as getNextZoomIndex,
  S8 as getNextZoomLevel,
  _e as getOffset,
  w8 as getPreviousZoom,
  _A as getPreviousZoomIndex,
  x8 as getPreviousZoomLevel,
  $s as getTextHeight,
  SA as getZoomByIndex,
  PE as handleEvents,
  na as handleResize,
  Im as isScalingFromCenter,
  bS as loadAudio,
  IS as loadAudioItem,
  AS as loadAudioObject,
  E8 as loadFonts,
  xS as loadImage,
  TS as loadImageItem,
  RS as loadImageObject,
  Am as loadTextItem,
  MS as loadTextObject,
  wS as loadVideo,
  ES as loadVideoItem,
  PS as loadVideoObject,
  LS as mergeSizes,
  wm as mergeTrackObjects,
  U as movingState,
  XC as positionOffsets,
  TA as randomInt,
  kE as removeEventListeners,
  ea as removeItemsFromTrack,
  mr as renderControl,
  Cm as reorderTracksByIndex,
  iI as setupHistoryListeners,
  Xe as timeMsToUnits,
  y8 as timeToString,
  Ye as transitionStore,
  rn as unitsToTimeMs,
  RA as updateMovingState,
  Mu as useCurrentPlayerFrame,
  Ia as useIsDraggingOverTimeline,
  Pi as useLayoutStore,
  Gt as useStore,
  oI as useTimelineEvents,
  km as wrapResizeWithAnchorPosition
};
