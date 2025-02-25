import * as w from "react";
import Rt, { useState as st, useRef as hn, cloneElement as f5, useCallback as mi, useLayoutEffect as h5, useEffect as Mt, forwardRef as Ap, createElement as yl, useSyncExternalStore as p5 } from "react";
import * as Rp from "react-dom";
import g5, { createPortal as m5 } from "react-dom";
import { create as Pp } from "zustand";
import { Player as v5 } from "@remotion/player";
import { Sequence as Es, AbsoluteFill as Kc, Audio as y5, OffthreadVideo as b5, Img as w5 } from "remotion";
import { ActiveSelection as Kl, controlsUtils as ut, classRegistry as dt, Rect as xn, Control as vn, util as Op, Group as ql, Point as x5, Canvas as S5, FabricObject as en } from "fabric";
var so = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _5(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bl = { exports: {} }, ao = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gh;
function C5() {
  if (gh) return ao;
  gh = 1;
  var e = Rt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var p, v = {}, b = null, S = null;
    h !== void 0 && (b = "" + h), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (p in f) o.call(f, p) && !a.hasOwnProperty(p) && (v[p] = f[p]);
    if (u && u.defaultProps) for (p in f = u.defaultProps, f) v[p] === void 0 && (v[p] = f[p]);
    return { $$typeof: t, type: u, key: b, ref: S, props: v, _owner: s.current };
  }
  return ao.Fragment = n, ao.jsx = l, ao.jsxs = l, ao;
}
var co = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mh;
function T5() {
  return mh || (mh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, _ = "@@iterator";
    function E(I) {
      if (I === null || typeof I != "object")
        return null;
      var U = T && I[T] || I[_];
      return typeof U == "function" ? U : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(I) {
      {
        for (var U = arguments.length, Z = new Array(U > 1 ? U - 1 : 0), ae = 1; ae < U; ae++)
          Z[ae - 1] = arguments[ae];
        O("error", I, Z);
      }
    }
    function O(I, U, Z) {
      {
        var ae = k.ReactDebugCurrentFrame, Ie = ae.getStackAddendum();
        Ie !== "" && (U += "%s", Z = Z.concat([Ie]));
        var Re = Z.map(function(xe) {
          return String(xe);
        });
        Re.unshift("Warning: " + U), Function.prototype.apply.call(console[I], console, Re);
      }
    }
    var D = !1, j = !1, $ = !1, F = !1, V = !1, G;
    G = Symbol.for("react.module.reference");
    function K(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === o || I === a || V || I === s || I === h || I === p || F || I === S || D || j || $ || typeof I == "object" && I !== null && (I.$$typeof === b || I.$$typeof === v || I.$$typeof === l || I.$$typeof === u || I.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === G || I.getModuleId !== void 0));
    }
    function J(I, U, Z) {
      var ae = I.displayName;
      if (ae)
        return ae;
      var Ie = U.displayName || U.name || "";
      return Ie !== "" ? Z + "(" + Ie + ")" : Z;
    }
    function Y(I) {
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
        case p:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case u:
            var U = I;
            return Y(U) + ".Consumer";
          case l:
            var Z = I;
            return Y(Z._context) + ".Provider";
          case f:
            return J(I, I.render, "ForwardRef");
          case v:
            var ae = I.displayName || null;
            return ae !== null ? ae : Q(I.type) || "Memo";
          case b: {
            var Ie = I, Re = Ie._payload, xe = Ie._init;
            try {
              return Q(xe(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Te = 0, re, le, ee, ye, fe, Oe, Cn;
    function $n() {
    }
    $n.__reactDisabledLog = !0;
    function br() {
      {
        if (Te === 0) {
          re = console.log, le = console.info, ee = console.warn, ye = console.error, fe = console.group, Oe = console.groupCollapsed, Cn = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: $n,
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
    function sn() {
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
              value: Oe
            }),
            groupEnd: ne({}, I, {
              value: Cn
            })
          });
        }
        Te < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var an = k.ReactCurrentDispatcher, Yt;
    function xt(I, U, Z) {
      {
        if (Yt === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var ae = Ie.stack.trim().match(/\n( *(at )?)/);
            Yt = ae && ae[1] || "";
          }
        return `
` + Yt + I;
      }
    }
    var Xt = !1, Vn;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      Vn = new Gn();
    }
    function Tn(I, U) {
      if (!I || Xt)
        return "";
      {
        var Z = Vn.get(I);
        if (Z !== void 0)
          return Z;
      }
      var ae;
      Xt = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = an.current, an.current = null, br();
      try {
        if (U) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (Ke) {
              ae = Ke;
            }
            Reflect.construct(I, [], xe);
          } else {
            try {
              xe.call();
            } catch (Ke) {
              ae = Ke;
            }
            I.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            ae = Ke;
          }
          I();
        }
      } catch (Ke) {
        if (Ke && ae && typeof Ke.stack == "string") {
          for (var ve = Ke.stack.split(`
`), nt = ae.stack.split(`
`), Ue = ve.length - 1, $e = nt.length - 1; Ue >= 1 && $e >= 0 && ve[Ue] !== nt[$e]; )
            $e--;
          for (; Ue >= 1 && $e >= 0; Ue--, $e--)
            if (ve[Ue] !== nt[$e]) {
              if (Ue !== 1 || $e !== 1)
                do
                  if (Ue--, $e--, $e < 0 || ve[Ue] !== nt[$e]) {
                    var mt = `
` + ve[Ue].replace(" at new ", " at ");
                    return I.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", I.displayName)), typeof I == "function" && Vn.set(I, mt), mt;
                  }
                while (Ue >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        Xt = !1, an.current = Re, sn(), Error.prepareStackTrace = Ie;
      }
      var Zt = I ? I.displayName || I.name : "", kn = Zt ? xt(Zt) : "";
      return typeof I == "function" && Vn.set(I, kn), kn;
    }
    function En(I, U, Z) {
      return Tn(I, !1);
    }
    function St(I) {
      var U = I.prototype;
      return !!(U && U.isReactComponent);
    }
    function cn(I, U, Z) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return Tn(I, St(I));
      if (typeof I == "string")
        return xt(I);
      switch (I) {
        case h:
          return xt("Suspense");
        case p:
          return xt("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case f:
            return En(I.render);
          case v:
            return cn(I.type, U, Z);
          case b: {
            var ae = I, Ie = ae._payload, Re = ae._init;
            try {
              return cn(Re(Ie), U, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var wr = Object.prototype.hasOwnProperty, jt = {}, Mi = k.ReactDebugCurrentFrame;
    function $r(I) {
      if (I) {
        var U = I._owner, Z = cn(I.type, I._source, U ? U.type : null);
        Mi.setExtraStackFrame(Z);
      } else
        Mi.setExtraStackFrame(null);
    }
    function xr(I, U, Z, ae, Ie) {
      {
        var Re = Function.call.bind(wr);
        for (var xe in I)
          if (Re(I, xe)) {
            var ve = void 0;
            try {
              if (typeof I[xe] != "function") {
                var nt = Error((ae || "React class") + ": " + Z + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw nt.name = "Invariant Violation", nt;
              }
              ve = I[xe](U, xe, ae, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              ve = Ue;
            }
            ve && !(ve instanceof Error) && ($r(Ie), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", Z, xe, typeof ve), $r(null)), ve instanceof Error && !(ve.message in jt) && (jt[ve.message] = !0, $r(Ie), R("Failed %s type: %s", Z, ve.message), $r(null));
          }
      }
    }
    var _t = Array.isArray;
    function In(I) {
      return _t(I);
    }
    function Vr(I) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, Z = U && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return Z;
      }
    }
    function Ra(I) {
      try {
        return Yn(I), !1;
      } catch {
        return !0;
      }
    }
    function Yn(I) {
      return "" + I;
    }
    function Do(I) {
      if (Ra(I))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(I)), Yn(I);
    }
    var Xn = k.ReactCurrentOwner, Zn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gr, Yr;
    function Di(I) {
      if (wr.call(I, "ref")) {
        var U = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function Li(I) {
      if (wr.call(I, "key")) {
        var U = Object.getOwnPropertyDescriptor(I, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function Ni(I, U) {
      typeof I.ref == "string" && Xn.current;
    }
    function ji(I, U) {
      {
        var Z = function() {
          Gr || (Gr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Z.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Fi(I, U) {
      {
        var Z = function() {
          Yr || (Yr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Z.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var zi = function(I, U, Z, ae, Ie, Re, xe) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: I,
        key: U,
        ref: Z,
        props: xe,
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
        value: ae
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Hi(I, U, Z, ae, Ie) {
      {
        var Re, xe = {}, ve = null, nt = null;
        Z !== void 0 && (Do(Z), ve = "" + Z), Li(U) && (Do(U.key), ve = "" + U.key), Di(U) && (nt = U.ref, Ni(U, Ie));
        for (Re in U)
          wr.call(U, Re) && !Zn.hasOwnProperty(Re) && (xe[Re] = U[Re]);
        if (I && I.defaultProps) {
          var Ue = I.defaultProps;
          for (Re in Ue)
            xe[Re] === void 0 && (xe[Re] = Ue[Re]);
        }
        if (ve || nt) {
          var $e = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          ve && ji(xe, $e), nt && Fi(xe, $e);
        }
        return zi(I, ve, nt, Ie, ae, Xn.current, xe);
      }
    }
    var Wi = k.ReactCurrentOwner, Lo = k.ReactDebugCurrentFrame;
    function Kn(I) {
      if (I) {
        var U = I._owner, Z = cn(I.type, I._source, U ? U.type : null);
        Lo.setExtraStackFrame(Z);
      } else
        Lo.setExtraStackFrame(null);
    }
    var Xr;
    Xr = !1;
    function Zr(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function No() {
      {
        if (Wi.current) {
          var I = Q(Wi.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function Pa(I) {
      return "";
    }
    var jo = {};
    function Oa(I) {
      {
        var U = No();
        if (!U) {
          var Z = typeof I == "string" ? I : I.displayName || I.name;
          Z && (U = `

Check the top-level render call using <` + Z + ">.");
        }
        return U;
      }
    }
    function Ui(I, U) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var Z = Oa(U);
        if (jo[Z])
          return;
        jo[Z] = !0;
        var ae = "";
        I && I._owner && I._owner !== Wi.current && (ae = " It was passed a child from " + Q(I._owner.type) + "."), Kn(I), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ae), Kn(null);
      }
    }
    function Fo(I, U) {
      {
        if (typeof I != "object")
          return;
        if (In(I))
          for (var Z = 0; Z < I.length; Z++) {
            var ae = I[Z];
            Zr(ae) && Ui(ae, U);
          }
        else if (Zr(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var Ie = E(I);
          if (typeof Ie == "function" && Ie !== I.entries)
            for (var Re = Ie.call(I), xe; !(xe = Re.next()).done; )
              Zr(xe.value) && Ui(xe.value, U);
        }
      }
    }
    function Ma(I) {
      {
        var U = I.type;
        if (U == null || typeof U == "string")
          return;
        var Z;
        if (typeof U == "function")
          Z = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === v))
          Z = U.propTypes;
        else
          return;
        if (Z) {
          var ae = Q(U);
          xr(Z, I.props, "prop", ae, I);
        } else if (U.PropTypes !== void 0 && !Xr) {
          Xr = !0;
          var Ie = Q(U);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(I) {
      {
        for (var U = Object.keys(I.props), Z = 0; Z < U.length; Z++) {
          var ae = U[Z];
          if (ae !== "children" && ae !== "key") {
            Kn(I), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), Kn(null);
            break;
          }
        }
        I.ref !== null && (Kn(I), R("Invalid attribute `ref` supplied to `React.Fragment`."), Kn(null));
      }
    }
    var Kr = {};
    function zo(I, U, Z, ae, Ie, Re) {
      {
        var xe = K(I);
        if (!xe) {
          var ve = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = Pa();
          nt ? ve += nt : ve += No();
          var Ue;
          I === null ? Ue = "null" : In(I) ? Ue = "array" : I !== void 0 && I.$$typeof === t ? (Ue = "<" + (Q(I.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof I, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, ve);
        }
        var $e = Hi(I, U, Z, Ie, Re);
        if ($e == null)
          return $e;
        if (xe) {
          var mt = U.children;
          if (mt !== void 0)
            if (ae)
              if (In(mt)) {
                for (var Zt = 0; Zt < mt.length; Zt++)
                  Fo(mt[Zt], I);
                Object.freeze && Object.freeze(mt);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fo(mt, I);
        }
        if (wr.call(U, "key")) {
          var kn = Q(I), Ke = Object.keys(U).filter(function(za) {
            return za !== "key";
          }), $i = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Kr[kn + $i]) {
            var Fa = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $i, kn, Fa, kn), Kr[kn + $i] = !0;
          }
        }
        return I === o ? Da($e) : Ma($e), $e;
      }
    }
    function Bi(I, U, Z) {
      return zo(I, U, Z, !0);
    }
    function La(I, U, Z) {
      return zo(I, U, Z, !1);
    }
    var Na = La, ja = Bi;
    co.Fragment = o, co.jsx = Na, co.jsxs = ja;
  }()), co;
}
process.env.NODE_ENV === "production" ? bl.exports = C5() : bl.exports = T5();
var m = bl.exports;
function vh(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Mp(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((s) => {
      const a = vh(s, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : vh(e[s], null);
        }
      };
  };
}
function We(...e) {
  return w.useCallback(Mp(...e), e);
}
var Lr = w.forwardRef((e, t) => {
  const { children: n, ...o } = e, s = w.Children.toArray(n), a = s.find(E5);
  if (a) {
    const l = a.props.children, u = s.map((f) => f === a ? w.Children.count(l) > 1 ? w.Children.only(null) : w.isValidElement(l) ? l.props.children : null : f);
    return /* @__PURE__ */ m.jsx(wl, { ...o, ref: t, children: w.isValidElement(l) ? w.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ m.jsx(wl, { ...o, ref: t, children: n });
});
Lr.displayName = "Slot";
var wl = w.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (w.isValidElement(n)) {
    const s = k5(n), a = I5(o, n.props);
    return n.type !== w.Fragment && (a.ref = t ? Mp(t, s) : s), w.cloneElement(n, a);
  }
  return w.Children.count(n) > 1 ? w.Children.only(null) : null;
});
wl.displayName = "SlotClone";
var Dp = ({ children: e }) => /* @__PURE__ */ m.jsx(m.Fragment, { children: e });
function E5(e) {
  return w.isValidElement(e) && e.type === Dp;
}
function I5(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? n[o] = (...u) => {
      a(...u), s(...u);
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...a } : o === "className" && (n[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function k5(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Lp = Lr;
function Np(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Np(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function jp() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Np(e)) && (o && (o += " "), o += t);
  return o;
}
const yh = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, bh = jp, A5 = (e, t) => (n) => {
  var o;
  if (t?.variants == null) return bh(e, n?.class, n?.className);
  const { variants: s, defaultVariants: a } = t, l = Object.keys(s).map((h) => {
    const p = n?.[h], v = a?.[h];
    if (p === null) return null;
    const b = yh(p) || yh(v);
    return s[h][b];
  }), u = n && Object.entries(n).reduce((h, p) => {
    let [v, b] = p;
    return b === void 0 || (h[v] = b), h;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, p) => {
    let { class: v, className: b, ...S } = p;
    return Object.entries(S).every((T) => {
      let [_, E] = T;
      return Array.isArray(E) ? E.includes({
        ...a,
        ...u
      }[_]) : {
        ...a,
        ...u
      }[_] === E;
    }) ? [
      ...h,
      v,
      b
    ] : h;
  }, []);
  return bh(e, l, f, n?.class, n?.className);
}, Jl = "-", R5 = (e) => {
  const t = O5(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(Jl);
      return u[0] === "" && u.length !== 1 && u.shift(), Fp(u, t) || P5(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const f = n[l] || [];
      return u && o[l] ? [...f, ...o[l]] : f;
    }
  };
}, Fp = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), s = o ? Fp(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const a = e.join(Jl);
  return t.validators.find(({
    validator: l
  }) => l(a))?.classGroupId;
}, wh = /^\[(.+)\]$/, P5 = (e) => {
  if (wh.test(e)) {
    const t = wh.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, O5 = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return D5(Object.entries(e.classGroups), n).forEach(([a, l]) => {
    xl(l, o, a, t);
  }), o;
}, xl = (e, t, n, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? t : xh(t, s);
      a.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (M5(s)) {
        xl(s(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([a, l]) => {
      xl(l, xh(t, a), n, o);
    });
  });
}, xh = (e, t) => {
  let n = e;
  return t.split(Jl).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, M5 = (e) => e.isThemeGetter, D5 = (e, t) => t ? e.map(([n, o]) => {
  const s = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([l, u]) => [t + l, u])) : a);
  return [n, s];
}) : e, L5 = (e) => {
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
}, zp = "!", N5 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, s = t[0], a = t.length, l = (u) => {
    const f = [];
    let h = 0, p = 0, v;
    for (let E = 0; E < u.length; E++) {
      let k = u[E];
      if (h === 0) {
        if (k === s && (o || u.slice(E, E + a) === t)) {
          f.push(u.slice(p, E)), p = E + a;
          continue;
        }
        if (k === "/") {
          v = E;
          continue;
        }
      }
      k === "[" ? h++ : k === "]" && h--;
    }
    const b = f.length === 0 ? u : u.substring(p), S = b.startsWith(zp), T = S ? b.substring(1) : b, _ = v && v > p ? v - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: S,
      baseClassName: T,
      maybePostfixModifierPosition: _
    };
  };
  return n ? (u) => n({
    className: u,
    parseClassName: l
  }) : l;
}, j5 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, F5 = (e) => ({
  cache: L5(e.cacheSize),
  parseClassName: N5(e),
  ...R5(e)
}), z5 = /\s+/, H5 = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, a = [], l = e.trim().split(z5);
  let u = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const h = l[f], {
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: S
    } = n(h);
    let T = !!S, _ = o(T ? b.substring(0, S) : b);
    if (!_) {
      if (!T) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (_ = o(b), !_) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const E = j5(p).join(":"), k = v ? E + zp : E, R = k + _;
    if (a.includes(R))
      continue;
    a.push(R);
    const O = s(_, T);
    for (let D = 0; D < O.length; ++D) {
      const j = O[D];
      a.push(k + j);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function W5() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hp(t)) && (o && (o += " "), o += n);
  return o;
}
const Hp = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Hp(e[o])) && (n && (n += " "), n += t);
  return n;
};
function U5(e, ...t) {
  let n, o, s, a = l;
  function l(f) {
    const h = t.reduce((p, v) => v(p), e());
    return n = F5(h), o = n.cache.get, s = n.cache.set, a = u, u(f);
  }
  function u(f) {
    const h = o(f);
    if (h)
      return h;
    const p = H5(f, n);
    return s(f, p), p;
  }
  return function() {
    return a(W5.apply(null, arguments));
  };
}
const Fe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Wp = /^\[(?:([a-z-]+):)?(.+)\]$/i, B5 = /^\d+\/\d+$/, $5 = /* @__PURE__ */ new Set(["px", "full", "screen"]), V5 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, G5 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Y5 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, X5 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Z5 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fn = (e) => vi(e) || $5.has(e) || B5.test(e), sr = (e) => Ti(e, "length", r3), vi = (e) => !!e && !Number.isNaN(Number(e)), qc = (e) => Ti(e, "number", vi), lo = (e) => !!e && Number.isInteger(Number(e)), K5 = (e) => e.endsWith("%") && vi(e.slice(0, -1)), pe = (e) => Wp.test(e), ar = (e) => V5.test(e), q5 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), J5 = (e) => Ti(e, q5, Up), Q5 = (e) => Ti(e, "position", Up), e3 = /* @__PURE__ */ new Set(["image", "url"]), t3 = (e) => Ti(e, e3, o3), n3 = (e) => Ti(e, "", i3), uo = () => !0, Ti = (e, t, n) => {
  const o = Wp.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, r3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  G5.test(e) && !Y5.test(e)
), Up = () => !1, i3 = (e) => X5.test(e), o3 = (e) => Z5.test(e), s3 = () => {
  const e = Fe("colors"), t = Fe("spacing"), n = Fe("blur"), o = Fe("brightness"), s = Fe("borderColor"), a = Fe("borderRadius"), l = Fe("borderSpacing"), u = Fe("borderWidth"), f = Fe("contrast"), h = Fe("grayscale"), p = Fe("hueRotate"), v = Fe("invert"), b = Fe("gap"), S = Fe("gradientColorStops"), T = Fe("gradientColorStopPositions"), _ = Fe("inset"), E = Fe("margin"), k = Fe("opacity"), R = Fe("padding"), O = Fe("saturate"), D = Fe("scale"), j = Fe("sepia"), $ = Fe("skew"), F = Fe("space"), V = Fe("translate"), G = () => ["auto", "contain", "none"], K = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", pe, t], Y = () => [pe, t], Q = () => ["", Fn, sr], ne = () => ["auto", vi, pe], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], re = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ye = () => ["", "0", pe], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Oe = () => [vi, pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [uo],
      spacing: [Fn, sr],
      blur: ["none", "", ar, pe],
      brightness: Oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ar, pe],
      borderSpacing: Y(),
      borderWidth: Q(),
      contrast: Oe(),
      grayscale: ye(),
      hueRotate: Oe(),
      invert: ye(),
      gap: Y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [K5, sr],
      inset: J(),
      margin: J(),
      opacity: Oe(),
      padding: Y(),
      saturate: Oe(),
      scale: Oe(),
      sepia: ye(),
      skew: Oe(),
      space: Y(),
      translate: Y()
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
        columns: [ar]
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
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
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
        z: ["auto", lo, pe]
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
        order: ["first", "last", "none", lo, pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [uo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", lo, pe]
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
        "grid-rows": [uo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [lo, pe]
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
          screen: [ar]
        }, ar]
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
        text: ["base", ar, sr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [uo]
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
        "line-clamp": ["none", vi, qc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fn, pe]
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
        decoration: ["auto", "from-font", Fn, sr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fn, pe]
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
        indent: Y()
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
        bg: [...Te(), Q5]
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
        bg: ["auto", "cover", "contain", J5]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, t3]
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
        from: [S]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [S]
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
        "outline-offset": [Fn, pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Fn, sr]
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
        "ring-offset": [Fn, sr]
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
        shadow: ["", "inner", "none", ar, n3]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [uo]
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
        "drop-shadow": ["", "none", ar, pe]
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
        "hue-rotate": [p]
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
        saturate: [O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [j]
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
        "backdrop-hue-rotate": [p]
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
        "backdrop-saturate": [O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [j]
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
        duration: Oe()
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
        delay: Oe()
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
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [lo, pe]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        stroke: [Fn, sr, qc]
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
}, a3 = /* @__PURE__ */ U5(s3);
function gt(...e) {
  return a3(jp(e));
}
function iI(e, t = {}) {
  const { decimals: n = 0, sizeType: o = "normal" } = t, s = ["Bytes", "KB", "MB", "GB", "TB"], a = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (e === 0) return "0 Byte";
  const l = Math.floor(Math.log(e) / Math.log(1024));
  return `${(e / Math.pow(1024, l)).toFixed(n)} ${o === "accurate" ? a[l] ?? "Bytest" : s[l] ?? "Bytes"}`;
}
const c3 = A5(
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
), He = w.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...s }, a) => {
    const l = o ? Lr : "button";
    return /* @__PURE__ */ m.jsx(
      l,
      {
        className: gt(c3({ variant: t, size: n, className: e })),
        ref: a,
        ...s
      }
    );
  }
);
He.displayName = "Button";
function Ql(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function _e(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e?.(s), n === !1 || !s.defaultPrevented)
      return t?.(s);
  };
}
function vr(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = w.createContext(l), f = n.length;
    n = [...n, l];
    const h = (v) => {
      const { scope: b, children: S, ...T } = v, _ = b?.[e]?.[f] || u, E = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(_.Provider, { value: E, children: S });
    };
    h.displayName = a + "Provider";
    function p(v, b) {
      const S = b?.[e]?.[f] || u, T = w.useContext(S);
      if (T) return T;
      if (l !== void 0) return l;
      throw new Error(`\`${v}\` must be used within \`${a}\``);
    }
    return [h, p];
  }
  const s = () => {
    const a = n.map((l) => w.createContext(l));
    return function(u) {
      const f = u?.[e] || a;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, l3(s, ...t)];
}
function l3(...e) {
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
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function lt(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }), w.useMemo(() => (...n) => t.current?.(...n), []);
}
function sa({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, s] = u3({ defaultProp: t, onChange: n }), a = e !== void 0, l = a ? e : o, u = lt(n), f = w.useCallback(
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
function u3({
  defaultProp: e,
  onChange: t
}) {
  const n = w.useState(e), [o] = n, s = w.useRef(o), a = lt(t);
  return w.useEffect(() => {
    s.current !== o && (a(o), s.current = o);
  }, [o, s, a]), n;
}
var Bp = w.createContext(void 0), d3 = (e) => {
  const { dir: t, children: n } = e;
  return /* @__PURE__ */ m.jsx(Bp.Provider, { value: t, children: n });
};
function aa(e) {
  const t = w.useContext(Bp);
  return e || t || "ltr";
}
var f3 = d3;
function h3(e) {
  const t = w.useRef({ value: e, previous: e });
  return w.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var ur = globalThis?.document ? w.useLayoutEffect : () => {
};
function $p(e) {
  const [t, n] = w.useState(void 0);
  return ur(() => {
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
var p3 = [
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
], Ne = p3.reduce((e, t) => {
  const n = w.forwardRef((o, s) => {
    const { asChild: a, ...l } = o, u = a ? Lr : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m.jsx(u, { ...l, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function g3(e, t) {
  e && Rp.flushSync(() => e.dispatchEvent(t));
}
function Vp(e) {
  const t = e + "CollectionProvider", [n, o] = vr(t), [s, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (S) => {
    const { scope: T, children: _ } = S, E = Rt.useRef(null), k = Rt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(s, { scope: T, itemMap: k, collectionRef: E, children: _ });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = Rt.forwardRef(
    (S, T) => {
      const { scope: _, children: E } = S, k = a(u, _), R = We(T, k.collectionRef);
      return /* @__PURE__ */ m.jsx(Lr, { ref: R, children: E });
    }
  );
  f.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", v = Rt.forwardRef(
    (S, T) => {
      const { scope: _, children: E, ...k } = S, R = Rt.useRef(null), O = We(T, R), D = a(h, _);
      return Rt.useEffect(() => (D.itemMap.set(R, { ref: R, ...k }), () => void D.itemMap.delete(R))), /* @__PURE__ */ m.jsx(Lr, { [p]: "", ref: O, children: E });
    }
  );
  v.displayName = h;
  function b(S) {
    const T = a(e + "CollectionConsumer", S);
    return Rt.useCallback(() => {
      const E = T.collectionRef.current;
      if (!E) return [];
      const k = Array.from(E.querySelectorAll(`[${p}]`));
      return Array.from(T.itemMap.values()).sort(
        (D, j) => k.indexOf(D.ref.current) - k.indexOf(j.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: v },
    b,
    o
  ];
}
var Gp = ["PageUp", "PageDown"], Yp = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Xp = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Ei = "Slider", [Sl, m3, v3] = Vp(Ei), [Zp, oI] = vr(Ei, [
  v3
]), [y3, ca] = Zp(Ei), Kp = w.forwardRef(
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
      value: p,
      onValueChange: v = () => {
      },
      onValueCommit: b = () => {
      },
      inverted: S = !1,
      form: T,
      ..._
    } = e, E = w.useRef(/* @__PURE__ */ new Set()), k = w.useRef(0), O = l === "horizontal" ? b3 : w3, [D = [], j] = sa({
      prop: p,
      defaultProp: h,
      onChange: (J) => {
        [...E.current][k.current]?.focus(), v(J);
      }
    }), $ = w.useRef(D);
    function F(J) {
      const Y = T3(D, J);
      K(J, Y);
    }
    function V(J) {
      K(J, k.current);
    }
    function G() {
      const J = $.current[k.current];
      D[k.current] !== J && b(D);
    }
    function K(J, Y, { commit: Q } = { commit: !1 }) {
      const ne = A3(a), Te = R3(Math.round((J - o) / a) * a + o, ne), re = Ql(Te, [o, s]);
      j((le = []) => {
        const ee = _3(le, re, Y);
        if (k3(ee, f * a)) {
          k.current = ee.indexOf(re);
          const ye = String(ee) !== String(le);
          return ye && Q && b(ee), ye ? ee : le;
        } else
          return le;
      });
    }
    return /* @__PURE__ */ m.jsx(
      y3,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: u,
        min: o,
        max: s,
        valueIndexToChangeRef: k,
        thumbs: E.current,
        values: D,
        orientation: l,
        form: T,
        children: /* @__PURE__ */ m.jsx(Sl.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ m.jsx(Sl.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m.jsx(
          O,
          {
            "aria-disabled": u,
            "data-disabled": u ? "" : void 0,
            ..._,
            ref: t,
            onPointerDown: _e(_.onPointerDown, () => {
              u || ($.current = D);
            }),
            min: o,
            max: s,
            inverted: S,
            onSlideStart: u ? void 0 : F,
            onSlideMove: u ? void 0 : V,
            onSlideEnd: u ? void 0 : G,
            onHomeKeyDown: () => !u && K(o, 0, { commit: !0 }),
            onEndKeyDown: () => !u && K(s, D.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: J, direction: Y }) => {
              if (!u) {
                const Te = Gp.includes(J.key) || J.shiftKey && Yp.includes(J.key) ? 10 : 1, re = k.current, le = D[re], ee = a * Te * Y;
                K(le + ee, re, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Kp.displayName = Ei;
var [qp, Jp] = Zp(Ei, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), b3 = w.forwardRef(
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
      ...p
    } = e, [v, b] = w.useState(null), S = We(t, (O) => b(O)), T = w.useRef(void 0), _ = aa(s), E = _ === "ltr", k = E && !a || !E && a;
    function R(O) {
      const D = T.current || v.getBoundingClientRect(), j = [0, D.width], F = eu(j, k ? [n, o] : [o, n]);
      return T.current = D, F(O - D.left);
    }
    return /* @__PURE__ */ m.jsx(
      qp,
      {
        scope: e.__scopeSlider,
        startEdge: k ? "left" : "right",
        endEdge: k ? "right" : "left",
        direction: k ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ m.jsx(
          Qp,
          {
            dir: _,
            "data-orientation": "horizontal",
            ...p,
            ref: S,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (O) => {
              const D = R(O.clientX);
              l?.(D);
            },
            onSlideMove: (O) => {
              const D = R(O.clientX);
              u?.(D);
            },
            onSlideEnd: () => {
              T.current = void 0, f?.();
            },
            onStepKeyDown: (O) => {
              const j = Xp[k ? "from-left" : "from-right"].includes(O.key);
              h?.({ event: O, direction: j ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), w3 = w.forwardRef(
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
    } = e, p = w.useRef(null), v = We(t, p), b = w.useRef(void 0), S = !s;
    function T(_) {
      const E = b.current || p.current.getBoundingClientRect(), k = [0, E.height], O = eu(k, S ? [o, n] : [n, o]);
      return b.current = E, O(_ - E.top);
    }
    return /* @__PURE__ */ m.jsx(
      qp,
      {
        scope: e.__scopeSlider,
        startEdge: S ? "bottom" : "top",
        endEdge: S ? "top" : "bottom",
        size: "height",
        direction: S ? 1 : -1,
        children: /* @__PURE__ */ m.jsx(
          Qp,
          {
            "data-orientation": "vertical",
            ...h,
            ref: v,
            style: {
              ...h.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (_) => {
              const E = T(_.clientY);
              a?.(E);
            },
            onSlideMove: (_) => {
              const E = T(_.clientY);
              l?.(E);
            },
            onSlideEnd: () => {
              b.current = void 0, u?.();
            },
            onStepKeyDown: (_) => {
              const k = Xp[S ? "from-bottom" : "from-top"].includes(_.key);
              f?.({ event: _, direction: k ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Qp = w.forwardRef(
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
    } = e, p = ca(Ei, n);
    return /* @__PURE__ */ m.jsx(
      Ne.span,
      {
        ...h,
        ref: t,
        onKeyDown: _e(e.onKeyDown, (v) => {
          v.key === "Home" ? (l(v), v.preventDefault()) : v.key === "End" ? (u(v), v.preventDefault()) : Gp.concat(Yp).includes(v.key) && (f(v), v.preventDefault());
        }),
        onPointerDown: _e(e.onPointerDown, (v) => {
          const b = v.target;
          b.setPointerCapture(v.pointerId), v.preventDefault(), p.thumbs.has(b) ? b.focus() : o(v);
        }),
        onPointerMove: _e(e.onPointerMove, (v) => {
          v.target.hasPointerCapture(v.pointerId) && s(v);
        }),
        onPointerUp: _e(e.onPointerUp, (v) => {
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && (b.releasePointerCapture(v.pointerId), a(v));
        })
      }
    );
  }
), e1 = "SliderTrack", t1 = w.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, s = ca(e1, n);
    return /* @__PURE__ */ m.jsx(
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
t1.displayName = e1;
var _l = "SliderRange", n1 = w.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, s = ca(_l, n), a = Jp(_l, n), l = w.useRef(null), u = We(t, l), f = s.values.length, h = s.values.map(
      (b) => i1(b, s.min, s.max)
    ), p = f > 1 ? Math.min(...h) : 0, v = 100 - Math.max(...h);
    return /* @__PURE__ */ m.jsx(
      Ne.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: u,
        style: {
          ...e.style,
          [a.startEdge]: p + "%",
          [a.endEdge]: v + "%"
        }
      }
    );
  }
);
n1.displayName = _l;
var Cl = "SliderThumb", r1 = w.forwardRef(
  (e, t) => {
    const n = m3(e.__scopeSlider), [o, s] = w.useState(null), a = We(t, (u) => s(u)), l = w.useMemo(
      () => o ? n().findIndex((u) => u.ref.current === o) : -1,
      [n, o]
    );
    return /* @__PURE__ */ m.jsx(x3, { ...e, ref: a, index: l });
  }
), x3 = w.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: o, name: s, ...a } = e, l = ca(Cl, n), u = Jp(Cl, n), [f, h] = w.useState(null), p = We(t, (R) => h(R)), v = f ? l.form || !!f.closest("form") : !0, b = $p(f), S = l.values[o], T = S === void 0 ? 0 : i1(S, l.min, l.max), _ = C3(o, l.values.length), E = b?.[u.size], k = E ? E3(E, T, u.direction) : 0;
    return w.useEffect(() => {
      if (f)
        return l.thumbs.add(f), () => {
          l.thumbs.delete(f);
        };
    }, [f, l.thumbs]), /* @__PURE__ */ m.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [u.startEdge]: `calc(${T}% + ${k}px)`
        },
        children: [
          /* @__PURE__ */ m.jsx(Sl.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m.jsx(
            Ne.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || _,
              "aria-valuemin": l.min,
              "aria-valuenow": S,
              "aria-valuemax": l.max,
              "aria-orientation": l.orientation,
              "data-orientation": l.orientation,
              "data-disabled": l.disabled ? "" : void 0,
              tabIndex: l.disabled ? void 0 : 0,
              ...a,
              ref: p,
              style: S === void 0 ? { display: "none" } : e.style,
              onFocus: _e(e.onFocus, () => {
                l.valueIndexToChangeRef.current = o;
              })
            }
          ) }),
          v && /* @__PURE__ */ m.jsx(
            S3,
            {
              name: s ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              form: l.form,
              value: S
            },
            o
          )
        ]
      }
    );
  }
);
r1.displayName = Cl;
var S3 = (e) => {
  const { value: t, ...n } = e, o = w.useRef(null), s = h3(t);
  return w.useEffect(() => {
    const a = o.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
    if (s !== t && f) {
      const h = new Event("input", { bubbles: !0 });
      f.call(a, t), a.dispatchEvent(h);
    }
  }, [s, t]), /* @__PURE__ */ m.jsx("input", { style: { display: "none" }, ...n, ref: o, defaultValue: t });
};
function _3(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((s, a) => s - a);
}
function i1(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Ql(a, [0, 100]);
}
function C3(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function T3(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((s) => Math.abs(s - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function E3(e, t, n) {
  const o = e / 2, a = eu([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function I3(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function k3(e, t) {
  if (t > 0) {
    const n = I3(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function eu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function A3(e) {
  return (String(e).split(".")[1] || "").length;
}
function R3(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var o1 = Kp, P3 = t1, O3 = n1, M3 = r1;
const D3 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsxs(
  o1,
  {
    ref: n,
    className: gt(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ m.jsx(P3, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ m.jsx(O3, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ m.jsx(M3, { className: "block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
D3.displayName = o1.displayName;
function L3(e, t) {
  return w.useReducer((n, o) => t[n][o] ?? n, e);
}
var Bn = (e) => {
  const { present: t, children: n } = e, o = N3(t), s = typeof n == "function" ? n({ present: o.isPresent }) : w.Children.only(n), a = We(o.ref, j3(s));
  return typeof n == "function" || o.isPresent ? w.cloneElement(s, { ref: a }) : null;
};
Bn.displayName = "Presence";
function N3(e) {
  const [t, n] = w.useState(), o = w.useRef({}), s = w.useRef(e), a = w.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = L3(l, {
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
  return w.useEffect(() => {
    const h = Is(o.current);
    a.current = u === "mounted" ? h : "none";
  }, [u]), ur(() => {
    const h = o.current, p = s.current;
    if (p !== e) {
      const b = a.current, S = Is(h);
      e ? f("MOUNT") : S === "none" || h?.display === "none" ? f("UNMOUNT") : f(p && b !== S ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), ur(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, v = (S) => {
        const _ = Is(o.current).includes(S.animationName);
        if (S.target === t && _ && (f("ANIMATION_END"), !s.current)) {
          const E = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E);
          });
        }
      }, b = (S) => {
        S.target === t && (a.current = Is(o.current));
      };
      return t.addEventListener("animationstart", b), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", b), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: w.useCallback((h) => {
      h && (o.current = getComputedStyle(h)), n(h);
    }, [])
  };
}
function Is(e) {
  return e?.animationName || "none";
}
function j3(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function F3(e, t) {
  return w.useReducer((n, o) => t[n][o] ?? n, e);
}
var tu = "ScrollArea", [s1, sI] = vr(tu), [z3, Gt] = s1(tu), a1 = w.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: s,
      scrollHideDelay: a = 600,
      ...l
    } = e, [u, f] = w.useState(null), [h, p] = w.useState(null), [v, b] = w.useState(null), [S, T] = w.useState(null), [_, E] = w.useState(null), [k, R] = w.useState(0), [O, D] = w.useState(0), [j, $] = w.useState(!1), [F, V] = w.useState(!1), G = We(t, (J) => f(J)), K = aa(s);
    return /* @__PURE__ */ m.jsx(
      z3,
      {
        scope: n,
        type: o,
        dir: K,
        scrollHideDelay: a,
        scrollArea: u,
        viewport: h,
        onViewportChange: p,
        content: v,
        onContentChange: b,
        scrollbarX: S,
        onScrollbarXChange: T,
        scrollbarXEnabled: j,
        onScrollbarXEnabledChange: $,
        scrollbarY: _,
        onScrollbarYChange: E,
        scrollbarYEnabled: F,
        onScrollbarYEnabledChange: V,
        onCornerWidthChange: R,
        onCornerHeightChange: D,
        children: /* @__PURE__ */ m.jsx(
          Ne.div,
          {
            dir: K,
            ...l,
            ref: G,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": k + "px",
              "--radix-scroll-area-corner-height": O + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
a1.displayName = tu;
var c1 = "ScrollAreaViewport", l1 = w.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: s, ...a } = e, l = Gt(c1, n), u = w.useRef(null), f = We(t, u, l.onViewportChange);
    return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ m.jsx(
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
          children: /* @__PURE__ */ m.jsx("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
l1.displayName = c1;
var Sn = "ScrollAreaScrollbar", la = w.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, s = Gt(Sn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: l } = s, u = e.orientation === "horizontal";
    return w.useEffect(() => (u ? a(!0) : l(!0), () => {
      u ? a(!1) : l(!1);
    }), [u, a, l]), s.type === "hover" ? /* @__PURE__ */ m.jsx(H3, { ...o, ref: t, forceMount: n }) : s.type === "scroll" ? /* @__PURE__ */ m.jsx(W3, { ...o, ref: t, forceMount: n }) : s.type === "auto" ? /* @__PURE__ */ m.jsx(u1, { ...o, ref: t, forceMount: n }) : s.type === "always" ? /* @__PURE__ */ m.jsx(nu, { ...o, ref: t }) : null;
  }
);
la.displayName = Sn;
var H3 = w.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = Gt(Sn, e.__scopeScrollArea), [a, l] = w.useState(!1);
  return w.useEffect(() => {
    const u = s.scrollArea;
    let f = 0;
    if (u) {
      const h = () => {
        window.clearTimeout(f), l(!0);
      }, p = () => {
        f = window.setTimeout(() => l(!1), s.scrollHideDelay);
      };
      return u.addEventListener("pointerenter", h), u.addEventListener("pointerleave", p), () => {
        window.clearTimeout(f), u.removeEventListener("pointerenter", h), u.removeEventListener("pointerleave", p);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ m.jsx(Bn, { present: n || a, children: /* @__PURE__ */ m.jsx(
    u1,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), W3 = w.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = Gt(Sn, e.__scopeScrollArea), a = e.orientation === "horizontal", l = da(() => f("SCROLL_END"), 100), [u, f] = F3("hidden", {
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
  return w.useEffect(() => {
    if (u === "idle") {
      const h = window.setTimeout(() => f("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(h);
    }
  }, [u, s.scrollHideDelay, f]), w.useEffect(() => {
    const h = s.viewport, p = a ? "scrollLeft" : "scrollTop";
    if (h) {
      let v = h[p];
      const b = () => {
        const S = h[p];
        v !== S && (f("SCROLL"), l()), v = S;
      };
      return h.addEventListener("scroll", b), () => h.removeEventListener("scroll", b);
    }
  }, [s.viewport, a, f, l]), /* @__PURE__ */ m.jsx(Bn, { present: n || u !== "hidden", children: /* @__PURE__ */ m.jsx(
    nu,
    {
      "data-state": u === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: _e(e.onPointerEnter, () => f("POINTER_ENTER")),
      onPointerLeave: _e(e.onPointerLeave, () => f("POINTER_LEAVE"))
    }
  ) });
}), u1 = w.forwardRef((e, t) => {
  const n = Gt(Sn, e.__scopeScrollArea), { forceMount: o, ...s } = e, [a, l] = w.useState(!1), u = e.orientation === "horizontal", f = da(() => {
    if (n.viewport) {
      const h = n.viewport.offsetWidth < n.viewport.scrollWidth, p = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(u ? h : p);
    }
  }, 10);
  return wi(n.viewport, f), wi(n.content, f), /* @__PURE__ */ m.jsx(Bn, { present: o || a, children: /* @__PURE__ */ m.jsx(
    nu,
    {
      "data-state": a ? "visible" : "hidden",
      ...s,
      ref: t
    }
  ) });
}), nu = w.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, s = Gt(Sn, e.__scopeScrollArea), a = w.useRef(null), l = w.useRef(0), [u, f] = w.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = p1(u.viewport, u.content), p = {
    ...o,
    sizes: u,
    onSizesChange: f,
    hasThumb: h > 0 && h < 1,
    onThumbChange: (b) => a.current = b,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (b) => l.current = b
  };
  function v(b, S) {
    return Y3(b, l.current, u, S);
  }
  return n === "horizontal" ? /* @__PURE__ */ m.jsx(
    U3,
    {
      ...p,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const b = s.viewport.scrollLeft, S = Sh(b, u, s.dir);
          a.current.style.transform = `translate3d(${S}px, 0, 0)`;
        }
      },
      onWheelScroll: (b) => {
        s.viewport && (s.viewport.scrollLeft = b);
      },
      onDragScroll: (b) => {
        s.viewport && (s.viewport.scrollLeft = v(b, s.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ m.jsx(
    B3,
    {
      ...p,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const b = s.viewport.scrollTop, S = Sh(b, u);
          a.current.style.transform = `translate3d(0, ${S}px, 0)`;
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
}), U3 = w.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...s } = e, a = Gt(Sn, e.__scopeScrollArea), [l, u] = w.useState(), f = w.useRef(null), h = We(t, f, a.onScrollbarXChange);
  return w.useEffect(() => {
    f.current && u(getComputedStyle(f.current));
  }, [f]), /* @__PURE__ */ m.jsx(
    f1,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: h,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ua(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (p) => e.onThumbPointerDown(p.x),
      onDragScroll: (p) => e.onDragScroll(p.x),
      onWheelScroll: (p, v) => {
        if (a.viewport) {
          const b = a.viewport.scrollLeft + p.deltaX;
          e.onWheelScroll(b), m1(b, v) && p.preventDefault();
        }
      },
      onResize: () => {
        f.current && a.viewport && l && o({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: f.current.clientWidth,
            paddingStart: Us(l.paddingLeft),
            paddingEnd: Us(l.paddingRight)
          }
        });
      }
    }
  );
}), B3 = w.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...s } = e, a = Gt(Sn, e.__scopeScrollArea), [l, u] = w.useState(), f = w.useRef(null), h = We(t, f, a.onScrollbarYChange);
  return w.useEffect(() => {
    f.current && u(getComputedStyle(f.current));
  }, [f]), /* @__PURE__ */ m.jsx(
    f1,
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
        "--radix-scroll-area-thumb-height": ua(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (p) => e.onThumbPointerDown(p.y),
      onDragScroll: (p) => e.onDragScroll(p.y),
      onWheelScroll: (p, v) => {
        if (a.viewport) {
          const b = a.viewport.scrollTop + p.deltaY;
          e.onWheelScroll(b), m1(b, v) && p.preventDefault();
        }
      },
      onResize: () => {
        f.current && a.viewport && l && o({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: f.current.clientHeight,
            paddingStart: Us(l.paddingTop),
            paddingEnd: Us(l.paddingBottom)
          }
        });
      }
    }
  );
}), [$3, d1] = s1(Sn), f1 = w.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: o,
    hasThumb: s,
    onThumbChange: a,
    onThumbPointerUp: l,
    onThumbPointerDown: u,
    onThumbPositionChange: f,
    onDragScroll: h,
    onWheelScroll: p,
    onResize: v,
    ...b
  } = e, S = Gt(Sn, n), [T, _] = w.useState(null), E = We(t, (G) => _(G)), k = w.useRef(null), R = w.useRef(""), O = S.viewport, D = o.content - o.viewport, j = lt(p), $ = lt(f), F = da(v, 10);
  function V(G) {
    if (k.current) {
      const K = G.clientX - k.current.left, J = G.clientY - k.current.top;
      h({ x: K, y: J });
    }
  }
  return w.useEffect(() => {
    const G = (K) => {
      const J = K.target;
      T?.contains(J) && j(K, D);
    };
    return document.addEventListener("wheel", G, { passive: !1 }), () => document.removeEventListener("wheel", G, { passive: !1 });
  }, [O, T, D, j]), w.useEffect($, [o, $]), wi(T, F), wi(S.content, F), /* @__PURE__ */ m.jsx(
    $3,
    {
      scope: n,
      scrollbar: T,
      hasThumb: s,
      onThumbChange: lt(a),
      onThumbPointerUp: lt(l),
      onThumbPositionChange: $,
      onThumbPointerDown: lt(u),
      children: /* @__PURE__ */ m.jsx(
        Ne.div,
        {
          ...b,
          ref: E,
          style: { position: "absolute", ...b.style },
          onPointerDown: _e(e.onPointerDown, (G) => {
            G.button === 0 && (G.target.setPointerCapture(G.pointerId), k.current = T.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S.viewport && (S.viewport.style.scrollBehavior = "auto"), V(G));
          }),
          onPointerMove: _e(e.onPointerMove, V),
          onPointerUp: _e(e.onPointerUp, (G) => {
            const K = G.target;
            K.hasPointerCapture(G.pointerId) && K.releasePointerCapture(G.pointerId), document.body.style.webkitUserSelect = R.current, S.viewport && (S.viewport.style.scrollBehavior = ""), k.current = null;
          })
        }
      )
    }
  );
}), Ws = "ScrollAreaThumb", ru = w.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, s = d1(Ws, e.__scopeScrollArea);
    return /* @__PURE__ */ m.jsx(Bn, { present: n || s.hasThumb, children: /* @__PURE__ */ m.jsx(V3, { ref: t, ...o }) });
  }
), V3 = w.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...s } = e, a = Gt(Ws, n), l = d1(Ws, n), { onThumbPositionChange: u } = l, f = We(
      t,
      (v) => l.onThumbChange(v)
    ), h = w.useRef(void 0), p = da(() => {
      h.current && (h.current(), h.current = void 0);
    }, 100);
    return w.useEffect(() => {
      const v = a.viewport;
      if (v) {
        const b = () => {
          if (p(), !h.current) {
            const S = X3(v, u);
            h.current = S, u();
          }
        };
        return u(), v.addEventListener("scroll", b), () => v.removeEventListener("scroll", b);
      }
    }, [a.viewport, p, u]), /* @__PURE__ */ m.jsx(
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
        onPointerDownCapture: _e(e.onPointerDownCapture, (v) => {
          const S = v.target.getBoundingClientRect(), T = v.clientX - S.left, _ = v.clientY - S.top;
          l.onThumbPointerDown({ x: T, y: _ });
        }),
        onPointerUp: _e(e.onPointerUp, l.onThumbPointerUp)
      }
    );
  }
);
ru.displayName = Ws;
var iu = "ScrollAreaCorner", h1 = w.forwardRef(
  (e, t) => {
    const n = Gt(iu, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ m.jsx(G3, { ...e, ref: t }) : null;
  }
);
h1.displayName = iu;
var G3 = w.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, s = Gt(iu, n), [a, l] = w.useState(0), [u, f] = w.useState(0), h = !!(a && u);
  return wi(s.scrollbarX, () => {
    const p = s.scrollbarX?.offsetHeight || 0;
    s.onCornerHeightChange(p), f(p);
  }), wi(s.scrollbarY, () => {
    const p = s.scrollbarY?.offsetWidth || 0;
    s.onCornerWidthChange(p), l(p);
  }), h ? /* @__PURE__ */ m.jsx(
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
function Us(e) {
  return e ? parseInt(e, 10) : 0;
}
function p1(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ua(e) {
  const t = p1(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function Y3(e, t, n, o = "ltr") {
  const s = ua(n), a = s / 2, l = t || a, u = s - l, f = n.scrollbar.paddingStart + l, h = n.scrollbar.size - n.scrollbar.paddingEnd - u, p = n.content - n.viewport, v = o === "ltr" ? [0, p] : [p * -1, 0];
  return g1([f, h], v)(e);
}
function Sh(e, t, n = "ltr") {
  const o = ua(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - s, l = t.content - t.viewport, u = a - o, f = n === "ltr" ? [0, l] : [l * -1, 0], h = Ql(e, f);
  return g1([0, l], [0, u])(h);
}
function g1(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function m1(e, t) {
  return e > 0 && e < t;
}
var X3 = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return function s() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, l = n.left !== a.left, u = n.top !== a.top;
    (l || u) && t(), n = a, o = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(o);
};
function da(e, t) {
  const n = lt(e), o = w.useRef(0);
  return w.useEffect(() => () => window.clearTimeout(o.current), []), w.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function wi(e, t) {
  const n = lt(t);
  ur(() => {
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
var Bs = a1, Tl = l1, _h = la, Ch = ru, Z3 = h1;
const Ii = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ m.jsxs(
  Bs,
  {
    ref: o,
    className: gt("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ m.jsx(Tl, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ m.jsx(v1, {}),
      /* @__PURE__ */ m.jsx(Z3, {})
    ]
  }
));
Ii.displayName = Bs.displayName;
const v1 = w.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ m.jsx(
  la,
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
    children: /* @__PURE__ */ m.jsx(ru, { className: "relative flex-1 rounded-full bg-border" })
  }
));
v1.displayName = la.displayName;
const fa = ({
  children: e,
  renderCustomPreview: t,
  data: n = {},
  shouldDisplayPreview: o = !0
}) => {
  const [s, a] = st(!1), [l, u] = st({ x: 0, y: 0 }), f = hn(null), b = f5(e, {
    draggable: !0,
    onDragStart: (S) => {
      a(!0), S.dataTransfer.setDragImage(new Image(), 0, 0), S.dataTransfer.setData(JSON.stringify(n), JSON.stringify(n)), u({
        x: S.clientX,
        y: S.clientY
      });
    },
    onDragEnd: () => {
      a(!1);
    },
    onDrag: (S) => {
      s && u({
        x: S.clientX,
        y: S.clientY
      });
    },
    style: {
      ...e.props.style
    }
  });
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    b,
    s && o && t ? m5(
      /* @__PURE__ */ m.jsx(
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
var K3 = w.useId || (() => {
}), q3 = 0;
function ou(e) {
  const [t, n] = w.useState(K3());
  return ur(() => {
    n((o) => o ?? String(q3++));
  }, [e]), t ? `radix-${t}` : "";
}
var Jc = "rovingFocusGroup.onEntryFocus", J3 = { bubbles: !1, cancelable: !0 }, ha = "RovingFocusGroup", [El, y1, Q3] = Vp(ha), [e4, b1] = vr(
  ha,
  [Q3]
), [t4, n4] = e4(ha), w1 = w.forwardRef(
  (e, t) => /* @__PURE__ */ m.jsx(El.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(El.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(r4, { ...e, ref: t }) }) })
);
w1.displayName = ha;
var r4 = w.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: s = !1,
    dir: a,
    currentTabStopId: l,
    defaultCurrentTabStopId: u,
    onCurrentTabStopIdChange: f,
    onEntryFocus: h,
    preventScrollOnEntryFocus: p = !1,
    ...v
  } = e, b = w.useRef(null), S = We(t, b), T = aa(a), [_ = null, E] = sa({
    prop: l,
    defaultProp: u,
    onChange: f
  }), [k, R] = w.useState(!1), O = lt(h), D = y1(n), j = w.useRef(!1), [$, F] = w.useState(0);
  return w.useEffect(() => {
    const V = b.current;
    if (V)
      return V.addEventListener(Jc, O), () => V.removeEventListener(Jc, O);
  }, [O]), /* @__PURE__ */ m.jsx(
    t4,
    {
      scope: n,
      orientation: o,
      dir: T,
      loop: s,
      currentTabStopId: _,
      onItemFocus: w.useCallback(
        (V) => E(V),
        [E]
      ),
      onItemShiftTab: w.useCallback(() => R(!0), []),
      onFocusableItemAdd: w.useCallback(
        () => F((V) => V + 1),
        []
      ),
      onFocusableItemRemove: w.useCallback(
        () => F((V) => V - 1),
        []
      ),
      children: /* @__PURE__ */ m.jsx(
        Ne.div,
        {
          tabIndex: k || $ === 0 ? -1 : 0,
          "data-orientation": o,
          ...v,
          ref: S,
          style: { outline: "none", ...e.style },
          onMouseDown: _e(e.onMouseDown, () => {
            j.current = !0;
          }),
          onFocus: _e(e.onFocus, (V) => {
            const G = !j.current;
            if (V.target === V.currentTarget && G && !k) {
              const K = new CustomEvent(Jc, J3);
              if (V.currentTarget.dispatchEvent(K), !K.defaultPrevented) {
                const J = D().filter((re) => re.focusable), Y = J.find((re) => re.active), Q = J.find((re) => re.id === _), Te = [Y, Q, ...J].filter(
                  Boolean
                ).map((re) => re.ref.current);
                _1(Te, p);
              }
            }
            j.current = !1;
          }),
          onBlur: _e(e.onBlur, () => R(!1))
        }
      )
    }
  );
}), x1 = "RovingFocusGroupItem", S1 = w.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: s = !1,
      tabStopId: a,
      ...l
    } = e, u = ou(), f = a || u, h = n4(x1, n), p = h.currentTabStopId === f, v = y1(n), { onFocusableItemAdd: b, onFocusableItemRemove: S } = h;
    return w.useEffect(() => {
      if (o)
        return b(), () => S();
    }, [o, b, S]), /* @__PURE__ */ m.jsx(
      El.ItemSlot,
      {
        scope: n,
        id: f,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ m.jsx(
          Ne.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": h.orientation,
            ...l,
            ref: t,
            onMouseDown: _e(e.onMouseDown, (T) => {
              o ? h.onItemFocus(f) : T.preventDefault();
            }),
            onFocus: _e(e.onFocus, () => h.onItemFocus(f)),
            onKeyDown: _e(e.onKeyDown, (T) => {
              if (T.key === "Tab" && T.shiftKey) {
                h.onItemShiftTab();
                return;
              }
              if (T.target !== T.currentTarget) return;
              const _ = s4(T, h.orientation, h.dir);
              if (_ !== void 0) {
                if (T.metaKey || T.ctrlKey || T.altKey || T.shiftKey) return;
                T.preventDefault();
                let k = v().filter((R) => R.focusable).map((R) => R.ref.current);
                if (_ === "last") k.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && k.reverse();
                  const R = k.indexOf(T.currentTarget);
                  k = h.loop ? a4(k, R + 1) : k.slice(R + 1);
                }
                setTimeout(() => _1(k));
              }
            })
          }
        )
      }
    );
  }
);
S1.displayName = x1;
var i4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function o4(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function s4(e, t, n) {
  const o = o4(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return i4[o];
}
function _1(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function a4(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var c4 = w1, l4 = S1, su = "Tabs", [u4, aI] = vr(su, [
  b1
]), C1 = b1(), [d4, au] = u4(su), T1 = w.forwardRef(
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
    } = e, p = aa(u), [v, b] = sa({
      prop: o,
      onChange: s,
      defaultProp: a
    });
    return /* @__PURE__ */ m.jsx(
      d4,
      {
        scope: n,
        baseId: ou(),
        value: v,
        onValueChange: b,
        orientation: l,
        dir: p,
        activationMode: f,
        children: /* @__PURE__ */ m.jsx(
          Ne.div,
          {
            dir: p,
            "data-orientation": l,
            ...h,
            ref: t
          }
        )
      }
    );
  }
);
T1.displayName = su;
var E1 = "TabsList", I1 = w.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...s } = e, a = au(E1, n), l = C1(n);
    return /* @__PURE__ */ m.jsx(
      c4,
      {
        asChild: !0,
        ...l,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: /* @__PURE__ */ m.jsx(
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
I1.displayName = E1;
var k1 = "TabsTrigger", A1 = w.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, disabled: s = !1, ...a } = e, l = au(k1, n), u = C1(n), f = O1(l.baseId, o), h = M1(l.baseId, o), p = o === l.value;
    return /* @__PURE__ */ m.jsx(
      l4,
      {
        asChild: !0,
        ...u,
        focusable: !s,
        active: p,
        children: /* @__PURE__ */ m.jsx(
          Ne.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": p,
            "aria-controls": h,
            "data-state": p ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: f,
            ...a,
            ref: t,
            onMouseDown: _e(e.onMouseDown, (v) => {
              !s && v.button === 0 && v.ctrlKey === !1 ? l.onValueChange(o) : v.preventDefault();
            }),
            onKeyDown: _e(e.onKeyDown, (v) => {
              [" ", "Enter"].includes(v.key) && l.onValueChange(o);
            }),
            onFocus: _e(e.onFocus, () => {
              const v = l.activationMode !== "manual";
              !p && !s && v && l.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
A1.displayName = k1;
var R1 = "TabsContent", P1 = w.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, forceMount: s, children: a, ...l } = e, u = au(R1, n), f = O1(u.baseId, o), h = M1(u.baseId, o), p = o === u.value, v = w.useRef(p);
    return w.useEffect(() => {
      const b = requestAnimationFrame(() => v.current = !1);
      return () => cancelAnimationFrame(b);
    }, []), /* @__PURE__ */ m.jsx(Bn, { present: s || p, children: ({ present: b }) => /* @__PURE__ */ m.jsx(
      Ne.div,
      {
        "data-state": p ? "active" : "inactive",
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
P1.displayName = R1;
function O1(e, t) {
  return `${e}-trigger-${t}`;
}
function M1(e, t) {
  return `${e}-content-${t}`;
}
var f4 = T1, D1 = I1, L1 = A1, N1 = P1;
const h4 = f4, j1 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  D1,
  {
    ref: n,
    className: gt(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
j1.displayName = D1.displayName;
const Il = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  L1,
  {
    ref: n,
    className: gt(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Il.displayName = L1.displayName;
const kl = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  N1,
  {
    ref: n,
    className: gt(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
kl.displayName = N1.displayName;
const cI = "add", lI = "track", uI = "trackItems", dI = "track:changed", fI = "trackItems:changed", hI = "state", pI = "state:changed", p4 = "add", F1 = "add:text", To = "add:video", Eo = "add:audio", gI = "add:placeholder", Io = "add:image", mI = "add:mask", vI = "add:transition", yI = "add:animation", bI = "edit", wI = "edit:object", xI = "edit:text", SI = "edit:shape", _I = "enterEditMode", g4 = "player", z1 = "player:play", H1 = "player:pause", m4 = "player:seek", CI = "player:seekTo", v4 = "player:seekBy", y4 = "player:togglePlay", b4 = "active", TI = "active:set", W1 = "active:delete", EI = "active:paste", U1 = "active:clone", B1 = "active:split", w4 = "layer", II = "layer:locked", kI = "layer:hidden", AI = "layer:move", RI = "layer:select", $1 = "layer:selection", PI = "layer:sendTo", OI = "layer:rename", MI = "layer:editingName", DI = "layer:copy", LI = "layer:paste", NI = "layer:clone", jI = "layer:split", FI = "layer:cut", zI = "layer:delete", x4 = "history", V1 = "history:undo", G1 = "history:redo", HI = "history:reset", S4 = "scale", Y1 = "scale:changed", _4 = "drag", X1 = "drag:start", $s = "drag:end", C4 = "timeline", Z1 = "timeline:boundingChanged", WI = "design:load", UI = "design", T4 = "scene", K1 = "scene:resize", E4 = "scene:load";
var Al = function(e, t) {
  return Al = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
    n.__proto__ = o;
  } || function(n, o) {
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
  }, Al(e, t);
};
function ki(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Al(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var pn = function() {
  return pn = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, pn.apply(this, arguments);
};
function q1(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function Rl(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], o = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Pl(e, t) {
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
function Vs(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function gn(e) {
  return typeof e == "function";
}
function J1(e) {
  var t = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Qc = J1(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(o, s) {
      return s + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ol(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var pa = function() {
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
            for (var u = Rl(l), f = u.next(); !f.done; f = u.next()) {
              var h = f.value;
              h.remove(this);
            }
          } catch (_) {
            t = { error: _ };
          } finally {
            try {
              f && !f.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          l.remove(this);
      var p = this.initialTeardown;
      if (gn(p))
        try {
          p();
        } catch (_) {
          a = _ instanceof Qc ? _.errors : [_];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var b = Rl(v), S = b.next(); !S.done; S = b.next()) {
            var T = S.value;
            try {
              Th(T);
            } catch (_) {
              a = a ?? [], _ instanceof Qc ? a = Vs(Vs([], Pl(a)), Pl(_.errors)) : a.push(_);
            }
          }
        } catch (_) {
          o = { error: _ };
        } finally {
          try {
            S && !S.done && (s = b.return) && s.call(b);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (a)
        throw new Qc(a);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Th(t);
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
    n === t ? this._parentage = null : Array.isArray(n) && Ol(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Ol(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), Q1 = pa.EMPTY;
function eg(e) {
  return e instanceof pa || e && "closed" in e && gn(e.remove) && gn(e.add) && gn(e.unsubscribe);
}
function Th(e) {
  gn(e) ? e() : e.unsubscribe();
}
var I4 = {
  Promise: void 0
}, k4 = {
  setTimeout: function(e, t) {
    for (var n = [], o = 2; o < arguments.length; o++)
      n[o - 2] = arguments[o];
    return setTimeout.apply(void 0, Vs([e, t], Pl(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function A4(e) {
  k4.setTimeout(function() {
    throw e;
  });
}
function Eh() {
}
function Ls(e) {
  e();
}
var cu = function(e) {
  ki(t, e);
  function t(n) {
    var o = e.call(this) || this;
    return o.isStopped = !1, n ? (o.destination = n, eg(n) && n.add(o)) : o.destination = O4, o;
  }
  return t.create = function(n, o, s) {
    return new Ml(n, o, s);
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
}(pa), R4 = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (o) {
        ks(o);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (o) {
        ks(o);
      }
    else
      ks(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        ks(n);
      }
  }, e;
}(), Ml = function(e) {
  ki(t, e);
  function t(n, o, s) {
    var a = e.call(this) || this, l;
    return gn(n) || !n ? l = {
      next: n ?? void 0,
      error: o ?? void 0,
      complete: s ?? void 0
    } : l = n, a.destination = new R4(l), a;
  }
  return t;
}(cu);
function ks(e) {
  A4(e);
}
function P4(e) {
  throw e;
}
var O4 = {
  closed: !0,
  next: Eh,
  error: P4,
  complete: Eh
}, M4 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function D4(e) {
  return e;
}
function L4(e) {
  return e.length === 0 ? D4 : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(o, s) {
      return s(o);
    }, n);
  };
}
var Ih = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, o) {
    var s = this, a = j4(t) ? t : new Ml(t, n, o);
    return Ls(function() {
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
    return n = kh(n), new n(function(s, a) {
      var l = new Ml({
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
  }, e.prototype[M4] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return L4(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = kh(t), new t(function(o, s) {
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
function kh(e) {
  var t;
  return (t = e ?? I4.Promise) !== null && t !== void 0 ? t : Promise;
}
function N4(e) {
  return e && gn(e.next) && gn(e.error) && gn(e.complete);
}
function j4(e) {
  return e && e instanceof cu || N4(e) && eg(e);
}
function F4(e) {
  return gn(e?.lift);
}
function z4(e) {
  return function(t) {
    if (F4(t))
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
function H4(e, t, n, o, s) {
  return new W4(e, t, n, o, s);
}
var W4 = function(e) {
  ki(t, e);
  function t(n, o, s, a, l, u) {
    var f = e.call(this, n) || this;
    return f.onFinalize = l, f.shouldUnsubscribe = u, f._next = o ? function(h) {
      try {
        o(h);
      } catch (p) {
        n.error(p);
      }
    } : e.prototype._next, f._error = a ? function(h) {
      try {
        a(h);
      } catch (p) {
        n.error(p);
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
}(cu), U4 = J1(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), lu = function(e) {
  ki(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var o = new Ah(this, this);
    return o.operator = n, o;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new U4();
  }, t.prototype.next = function(n) {
    var o = this;
    Ls(function() {
      var s, a;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var l = Rl(o.currentObservers), u = l.next(); !u.done; u = l.next()) {
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
    Ls(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = !0, o.thrownError = n;
        for (var s = o.observers; s.length; )
          s.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    Ls(function() {
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
    return a || l ? Q1 : (this.currentObservers = null, u.push(n), new pa(function() {
      o.currentObservers = null, Ol(u, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var o = this, s = o.hasError, a = o.thrownError, l = o.isStopped;
    s ? n.error(a) : l && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new Ih();
    return n.source = this, n;
  }, t.create = function(n, o) {
    return new Ah(n, o);
  }, t;
}(Ih), Ah = function(e) {
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
    return (s = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(n)) !== null && s !== void 0 ? s : Q1;
  }, t;
}(lu), Rh = function(e) {
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
}(lu);
function zn(e, t) {
  return z4(function(n, o) {
    var s = 0;
    n.subscribe(H4(o, function(a) {
      return e.call(t, a, s++) && o.next(a);
    }));
  });
}
const tg = new lu(), B4 = (e, t) => {
  tg.next({ key: e, value: t });
}, we = {
  subject: tg,
  dispatch: B4
}, ot = [];
for (let e = 0; e < 256; ++e)
  ot.push((e + 256).toString(16).slice(1));
function $4(e, t = 0) {
  return (ot[e[t + 0]] + ot[e[t + 1]] + ot[e[t + 2]] + ot[e[t + 3]] + "-" + ot[e[t + 4]] + ot[e[t + 5]] + "-" + ot[e[t + 6]] + ot[e[t + 7]] + "-" + ot[e[t + 8]] + ot[e[t + 9]] + "-" + ot[e[t + 10]] + ot[e[t + 11]] + ot[e[t + 12]] + ot[e[t + 13]] + ot[e[t + 14]] + ot[e[t + 15]]).toLowerCase();
}
let el;
const V4 = new Uint8Array(16);
function G4() {
  if (!el) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    el = crypto.getRandomValues.bind(crypto);
  }
  return el(V4);
}
const Y4 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ph = { randomUUID: Y4 };
function et(e, t, n) {
  if (Ph.randomUUID && !e)
    return Ph.randomUUID();
  e = e || {};
  const o = e.random ?? e.rng?.() ?? G4();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, $4(o);
}
var ng = /* @__PURE__ */ ((e) => (e.IMAGE = "image", e.VIDEO = "video", e.AUDIO = "audio", e))(ng || {});
const X4 = (e) => {
  const [t, n] = st(!1), [o, s] = st(!1), a = mi((p) => {
    const v = { ...p, id: et() };
    switch (p.type) {
      case "image":
        we.dispatch(Io, { payload: v });
        break;
      case "video":
        we.dispatch(To, { payload: v });
        break;
      case "audio":
        we.dispatch(Eo, { payload: v });
        break;
    }
  }, []), l = mi(
    (p) => {
      p.preventDefault();
      try {
        const v = p.dataTransfer?.types[0], b = JSON.parse(v);
        if (!Object.values(ng).includes(b.type))
          return;
        s(!0), n(!0), e?.(!0);
      } catch (v) {
        console.error("Error parsing dragged data:", v);
      }
    },
    [e]
  ), u = mi(
    (p) => {
      p.preventDefault(), t && (s(!0), e?.(!0));
    },
    [t, e]
  ), f = mi(
    (p) => {
      if (o) {
        p.preventDefault(), s(!1), e?.(!1);
        try {
          const v = p.dataTransfer?.types[0], b = JSON.parse(
            p.dataTransfer.getData(v)
          );
          a(b);
        } catch (v) {
          console.error("Error parsing dropped data:", v);
        }
      }
    },
    [o, e, a]
  ), h = mi(
    (p) => {
      p.preventDefault(), p.currentTarget.contains(p.relatedTarget) || (s(!1), n(!1), e?.(!1));
    },
    [e]
  );
  return { onDragEnter: l, onDragOver: u, onDrop: f, onDragLeave: h, isDraggingOver: o };
}, Z4 = ({
  children: e,
  className: t,
  style: n,
  onDragStateChange: o,
  id: s
}) => {
  const { onDragEnter: a, onDragOver: l, onDrop: u, onDragLeave: f } = X4(o);
  return /* @__PURE__ */ m.jsx(
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
var K4 = "VisuallyHidden", rg = w.forwardRef(
  (e, t) => /* @__PURE__ */ m.jsx(
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
rg.displayName = K4;
var q4 = rg;
function J4(e, t = globalThis?.document) {
  const n = lt(e);
  w.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Q4 = "DismissableLayer", Dl = "dismissableLayer.update", e6 = "dismissableLayer.pointerDownOutside", t6 = "dismissableLayer.focusOutside", Oh, ig = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), uu = w.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, h = w.useContext(ig), [p, v] = w.useState(null), b = p?.ownerDocument ?? globalThis?.document, [, S] = w.useState({}), T = We(t, (F) => v(F)), _ = Array.from(h.layers), [E] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), k = _.indexOf(E), R = p ? _.indexOf(p) : -1, O = h.layersWithOutsidePointerEventsDisabled.size > 0, D = R >= k, j = i6((F) => {
      const V = F.target, G = [...h.branches].some((K) => K.contains(V));
      !D || G || (s?.(F), l?.(F), F.defaultPrevented || u?.());
    }, b), $ = o6((F) => {
      const V = F.target;
      [...h.branches].some((K) => K.contains(V)) || (a?.(F), l?.(F), F.defaultPrevented || u?.());
    }, b);
    return J4((F) => {
      R === h.layers.size - 1 && (o?.(F), !F.defaultPrevented && u && (F.preventDefault(), u()));
    }, b), w.useEffect(() => {
      if (p)
        return n && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Oh = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), Mh(), () => {
          n && h.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = Oh);
        };
    }, [p, b, n, h]), w.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), Mh());
    }, [p, h]), w.useEffect(() => {
      const F = () => S({});
      return document.addEventListener(Dl, F), () => document.removeEventListener(Dl, F);
    }, []), /* @__PURE__ */ m.jsx(
      Ne.div,
      {
        ...f,
        ref: T,
        style: {
          pointerEvents: O ? D ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: _e(e.onFocusCapture, $.onFocusCapture),
        onBlurCapture: _e(e.onBlurCapture, $.onBlurCapture),
        onPointerDownCapture: _e(
          e.onPointerDownCapture,
          j.onPointerDownCapture
        )
      }
    );
  }
);
uu.displayName = Q4;
var n6 = "DismissableLayerBranch", r6 = w.forwardRef((e, t) => {
  const n = w.useContext(ig), o = w.useRef(null), s = We(t, o);
  return w.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m.jsx(Ne.div, { ...e, ref: s });
});
r6.displayName = n6;
function i6(e, t = globalThis?.document) {
  const n = lt(e), o = w.useRef(!1), s = w.useRef(() => {
  });
  return w.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          og(
            e6,
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
function o6(e, t = globalThis?.document) {
  const n = lt(e), o = w.useRef(!1);
  return w.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && og(t6, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Mh() {
  const e = new CustomEvent(Dl);
  document.dispatchEvent(e);
}
function og(e, t, n, { discrete: o }) {
  const s = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), o ? g3(s, a) : s.dispatchEvent(a);
}
var tl = "focusScope.autoFocusOnMount", nl = "focusScope.autoFocusOnUnmount", Dh = { bubbles: !1, cancelable: !0 }, s6 = "FocusScope", sg = w.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = w.useState(null), h = lt(s), p = lt(a), v = w.useRef(null), b = We(t, (_) => f(_)), S = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (o) {
      let _ = function(O) {
        if (S.paused || !u) return;
        const D = O.target;
        u.contains(D) ? v.current = D : cr(v.current, { select: !0 });
      }, E = function(O) {
        if (S.paused || !u) return;
        const D = O.relatedTarget;
        D !== null && (u.contains(D) || cr(v.current, { select: !0 }));
      }, k = function(O) {
        if (document.activeElement === document.body)
          for (const j of O)
            j.removedNodes.length > 0 && cr(u);
      };
      document.addEventListener("focusin", _), document.addEventListener("focusout", E);
      const R = new MutationObserver(k);
      return u && R.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", E), R.disconnect();
      };
    }
  }, [o, u, S.paused]), w.useEffect(() => {
    if (u) {
      Nh.add(S);
      const _ = document.activeElement;
      if (!u.contains(_)) {
        const k = new CustomEvent(tl, Dh);
        u.addEventListener(tl, h), u.dispatchEvent(k), k.defaultPrevented || (a6(f6(ag(u)), { select: !0 }), document.activeElement === _ && cr(u));
      }
      return () => {
        u.removeEventListener(tl, h), setTimeout(() => {
          const k = new CustomEvent(nl, Dh);
          u.addEventListener(nl, p), u.dispatchEvent(k), k.defaultPrevented || cr(_ ?? document.body, { select: !0 }), u.removeEventListener(nl, p), Nh.remove(S);
        }, 0);
      };
    }
  }, [u, h, p, S]);
  const T = w.useCallback(
    (_) => {
      if (!n && !o || S.paused) return;
      const E = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, k = document.activeElement;
      if (E && k) {
        const R = _.currentTarget, [O, D] = c6(R);
        O && D ? !_.shiftKey && k === D ? (_.preventDefault(), n && cr(O, { select: !0 })) : _.shiftKey && k === O && (_.preventDefault(), n && cr(D, { select: !0 })) : k === R && _.preventDefault();
      }
    },
    [n, o, S.paused]
  );
  return /* @__PURE__ */ m.jsx(Ne.div, { tabIndex: -1, ...l, ref: b, onKeyDown: T });
});
sg.displayName = s6;
function a6(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (cr(o, { select: t }), document.activeElement !== n) return;
}
function c6(e) {
  const t = ag(e), n = Lh(t, e), o = Lh(t.reverse(), e);
  return [n, o];
}
function ag(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Lh(e, t) {
  for (const n of e)
    if (!l6(n, { upTo: t })) return n;
}
function l6(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function u6(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && u6(e) && t && e.select();
  }
}
var Nh = d6();
function d6() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = jh(e, t), e.unshift(t);
    },
    remove(t) {
      e = jh(e, t), e[0]?.resume();
    }
  };
}
function jh(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function f6(e) {
  return e.filter((t) => t.tagName !== "A");
}
var h6 = "Portal", cg = w.forwardRef((e, t) => {
  const { container: n, ...o } = e, [s, a] = w.useState(!1);
  ur(() => a(!0), []);
  const l = n || s && globalThis?.document?.body;
  return l ? g5.createPortal(/* @__PURE__ */ m.jsx(Ne.div, { ...o, ref: t }), l) : null;
});
cg.displayName = h6;
var rl = 0;
function p6() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Fh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Fh()), rl++, () => {
      rl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), rl--;
    };
  }, []);
}
function Fh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ns = "right-scroll-bar-position", js = "width-before-scroll-bar", g6 = "with-scroll-bars-hidden", m6 = "--removed-body-scroll-bar-size";
function il(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function v6(e, t) {
  var n = st(function() {
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
var y6 = typeof window < "u" ? w.useLayoutEffect : w.useEffect, zh = /* @__PURE__ */ new WeakMap();
function b6(e, t) {
  var n = v6(null, function(o) {
    return e.forEach(function(s) {
      return il(s, o);
    });
  });
  return y6(function() {
    var o = zh.get(n);
    if (o) {
      var s = new Set(o), a = new Set(e), l = n.current;
      s.forEach(function(u) {
        a.has(u) || il(u, null);
      }), a.forEach(function(u) {
        s.has(u) || il(u, l);
      });
    }
    zh.set(n, e);
  }, [e]), n;
}
function w6(e) {
  return e;
}
function x6(e, t) {
  t === void 0 && (t = w6);
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
        var p = l;
        l = [], p.forEach(a);
      }, h = function() {
        return Promise.resolve().then(f);
      };
      h(), n = {
        push: function(p) {
          l.push(p), h();
        },
        filter: function(p) {
          return l = l.filter(p), n;
        }
      };
    }
  };
  return s;
}
function S6(e) {
  e === void 0 && (e = {});
  var t = x6(null);
  return t.options = pn({ async: !0, ssr: !1 }, e), t;
}
var lg = function(e) {
  var t = e.sideCar, n = q1(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return w.createElement(o, pn({}, n));
};
lg.isSideCarExport = !0;
function _6(e, t) {
  return e.useMedium(t), lg;
}
var ug = S6(), ol = function() {
}, ga = w.forwardRef(function(e, t) {
  var n = w.useRef(null), o = w.useState({
    onScrollCapture: ol,
    onWheelCapture: ol,
    onTouchMoveCapture: ol
  }), s = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, h = e.removeScrollBar, p = e.enabled, v = e.shards, b = e.sideCar, S = e.noIsolation, T = e.inert, _ = e.allowPinchZoom, E = e.as, k = E === void 0 ? "div" : E, R = e.gapMode, O = q1(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), D = b, j = b6([n, t]), $ = pn(pn({}, O), s);
  return w.createElement(
    w.Fragment,
    null,
    p && w.createElement(D, { sideCar: ug, removeScrollBar: h, shards: v, noIsolation: S, inert: T, setCallbacks: a, allowPinchZoom: !!_, lockRef: n, gapMode: R }),
    l ? w.cloneElement(w.Children.only(u), pn(pn({}, $), { ref: j })) : w.createElement(k, pn({}, $, { className: f, ref: j }), u)
  );
});
ga.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ga.classNames = {
  fullWidth: js,
  zeroRight: Ns
};
var C6 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function T6() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = C6();
  return t && e.setAttribute("nonce", t), e;
}
function E6(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function I6(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var k6 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = T6()) && (E6(t, n), I6(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, A6 = function() {
  var e = k6();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, dg = function() {
  var e = A6(), t = function(n) {
    var o = n.styles, s = n.dynamic;
    return e(o, s), null;
  };
  return t;
}, R6 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sl = function(e) {
  return parseInt(e || "", 10) || 0;
}, P6 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [sl(n), sl(o), sl(s)];
}, O6 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return R6;
  var t = P6(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, M6 = dg(), yi = "data-scroll-locked", D6 = function(e, t, n, o) {
  var s = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(g6, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(yi, `] {
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
  
  .`).concat(Ns, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(js, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ns, " .").concat(Ns, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(js, " .").concat(js, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(yi, `] {
    `).concat(m6, ": ").concat(u, `px;
  }
`);
}, Hh = function() {
  var e = parseInt(document.body.getAttribute(yi) || "0", 10);
  return isFinite(e) ? e : 0;
}, L6 = function() {
  w.useEffect(function() {
    return document.body.setAttribute(yi, (Hh() + 1).toString()), function() {
      var e = Hh() - 1;
      e <= 0 ? document.body.removeAttribute(yi) : document.body.setAttribute(yi, e.toString());
    };
  }, []);
}, N6 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  L6();
  var a = w.useMemo(function() {
    return O6(s);
  }, [s]);
  return w.createElement(M6, { styles: D6(a, !t, s, n ? "" : "!important") });
}, Ll = !1;
if (typeof window < "u")
  try {
    var As = Object.defineProperty({}, "passive", {
      get: function() {
        return Ll = !0, !0;
      }
    });
    window.addEventListener("test", As, As), window.removeEventListener("test", As, As);
  } catch {
    Ll = !1;
  }
var di = Ll ? { passive: !1 } : !1, j6 = function(e) {
  return e.tagName === "TEXTAREA";
}, fg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !j6(e) && n[t] === "visible")
  );
}, F6 = function(e) {
  return fg(e, "overflowY");
}, z6 = function(e) {
  return fg(e, "overflowX");
}, Wh = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = hg(e, o);
    if (s) {
      var a = pg(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, H6 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, W6 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, hg = function(e, t) {
  return e === "v" ? F6(t) : z6(t);
}, pg = function(e, t) {
  return e === "v" ? H6(t) : W6(t);
}, U6 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, B6 = function(e, t, n, o, s) {
  var a = U6(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), h = !1, p = l > 0, v = 0, b = 0;
  do {
    var S = pg(e, u), T = S[0], _ = S[1], E = S[2], k = _ - E - a * T;
    (T || k) && hg(e, u) && (v += k, b += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (p && Math.abs(v) < 1 || !p && Math.abs(b) < 1) && (h = !0), h;
}, Rs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Uh = function(e) {
  return [e.deltaX, e.deltaY];
}, Bh = function(e) {
  return e && "current" in e ? e.current : e;
}, $6 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, V6 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, G6 = 0, fi = [];
function Y6(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), o = w.useRef(), s = w.useState(G6++)[0], a = w.useState(dg)[0], l = w.useRef(e);
  w.useEffect(function() {
    l.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var _ = Vs([e.lockRef.current], (e.shards || []).map(Bh), !0).filter(Boolean);
      return _.forEach(function(E) {
        return E.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), _.forEach(function(E) {
          return E.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = w.useCallback(function(_, E) {
    if ("touches" in _ && _.touches.length === 2 || _.type === "wheel" && _.ctrlKey)
      return !l.current.allowPinchZoom;
    var k = Rs(_), R = n.current, O = "deltaX" in _ ? _.deltaX : R[0] - k[0], D = "deltaY" in _ ? _.deltaY : R[1] - k[1], j, $ = _.target, F = Math.abs(O) > Math.abs(D) ? "h" : "v";
    if ("touches" in _ && F === "h" && $.type === "range")
      return !1;
    var V = Wh(F, $);
    if (!V)
      return !0;
    if (V ? j = F : (j = F === "v" ? "h" : "v", V = Wh(F, $)), !V)
      return !1;
    if (!o.current && "changedTouches" in _ && (O || D) && (o.current = j), !j)
      return !0;
    var G = o.current || j;
    return B6(G, E, _, G === "h" ? O : D);
  }, []), f = w.useCallback(function(_) {
    var E = _;
    if (!(!fi.length || fi[fi.length - 1] !== a)) {
      var k = "deltaY" in E ? Uh(E) : Rs(E), R = t.current.filter(function(j) {
        return j.name === E.type && (j.target === E.target || E.target === j.shadowParent) && $6(j.delta, k);
      })[0];
      if (R && R.should) {
        E.cancelable && E.preventDefault();
        return;
      }
      if (!R) {
        var O = (l.current.shards || []).map(Bh).filter(Boolean).filter(function(j) {
          return j.contains(E.target);
        }), D = O.length > 0 ? u(E, O[0]) : !l.current.noIsolation;
        D && E.cancelable && E.preventDefault();
      }
    }
  }, []), h = w.useCallback(function(_, E, k, R) {
    var O = { name: _, delta: E, target: k, should: R, shadowParent: X6(k) };
    t.current.push(O), setTimeout(function() {
      t.current = t.current.filter(function(D) {
        return D !== O;
      });
    }, 1);
  }, []), p = w.useCallback(function(_) {
    n.current = Rs(_), o.current = void 0;
  }, []), v = w.useCallback(function(_) {
    h(_.type, Uh(_), _.target, u(_, e.lockRef.current));
  }, []), b = w.useCallback(function(_) {
    h(_.type, Rs(_), _.target, u(_, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return fi.push(a), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", f, di), document.addEventListener("touchmove", f, di), document.addEventListener("touchstart", p, di), function() {
      fi = fi.filter(function(_) {
        return _ !== a;
      }), document.removeEventListener("wheel", f, di), document.removeEventListener("touchmove", f, di), document.removeEventListener("touchstart", p, di);
    };
  }, []);
  var S = e.removeScrollBar, T = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    T ? w.createElement(a, { styles: V6(s) }) : null,
    S ? w.createElement(N6, { gapMode: e.gapMode }) : null
  );
}
function X6(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Z6 = _6(ug, Y6);
var gg = w.forwardRef(function(e, t) {
  return w.createElement(ga, pn({}, e, { ref: t, sideCar: Z6 }));
});
gg.classNames = ga.classNames;
var K6 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, hi = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), Os = {}, al = 0, mg = function(e) {
  return e && (e.host || mg(e.parentNode));
}, q6 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = mg(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, J6 = function(e, t, n, o) {
  var s = q6(t, Array.isArray(e) ? e : [e]);
  Os[n] || (Os[n] = /* @__PURE__ */ new WeakMap());
  var a = Os[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(v) {
    !v || u.has(v) || (u.add(v), h(v.parentNode));
  };
  s.forEach(h);
  var p = function(v) {
    !v || f.has(v) || Array.prototype.forEach.call(v.children, function(b) {
      if (u.has(b))
        p(b);
      else
        try {
          var S = b.getAttribute(o), T = S !== null && S !== "false", _ = (hi.get(b) || 0) + 1, E = (a.get(b) || 0) + 1;
          hi.set(b, _), a.set(b, E), l.push(b), _ === 1 && T && Ps.set(b, !0), E === 1 && b.setAttribute(n, "true"), T || b.setAttribute(o, "true");
        } catch (k) {
          console.error("aria-hidden: cannot operate on ", b, k);
        }
    });
  };
  return p(t), u.clear(), al++, function() {
    l.forEach(function(v) {
      var b = hi.get(v) - 1, S = a.get(v) - 1;
      hi.set(v, b), a.set(v, S), b || (Ps.has(v) || v.removeAttribute(o), Ps.delete(v)), S || v.removeAttribute(n);
    }), al--, al || (hi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), Os = {});
  };
}, Q6 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = K6(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), J6(o, s, n, "aria-hidden")) : function() {
    return null;
  };
};
const eS = ["top", "right", "bottom", "left"], dr = Math.min, Ot = Math.max, Gs = Math.round, Ms = Math.floor, mn = (e) => ({
  x: e,
  y: e
}), tS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nS = {
  start: "end",
  end: "start"
};
function Nl(e, t, n) {
  return Ot(e, dr(t, n));
}
function Hn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function Ai(e) {
  return e.split("-")[1];
}
function du(e) {
  return e === "x" ? "y" : "x";
}
function fu(e) {
  return e === "y" ? "height" : "width";
}
function fr(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function hu(e) {
  return du(fr(e));
}
function rS(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ai(e), s = hu(e), a = fu(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = Ys(l)), [l, Ys(l)];
}
function iS(e) {
  const t = Ys(e);
  return [jl(e), t, jl(t)];
}
function jl(e) {
  return e.replace(/start|end/g, (t) => nS[t]);
}
function oS(e, t, n) {
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
function sS(e, t, n, o) {
  const s = Ai(e);
  let a = oS(Wn(e), n === "start", o);
  return s && (a = a.map((l) => l + "-" + s), t && (a = a.concat(a.map(jl)))), a;
}
function Ys(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tS[t]);
}
function aS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vg(e) {
  return typeof e != "number" ? aS(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xs(e) {
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
function $h(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = fr(t), l = hu(t), u = fu(l), f = Wn(t), h = a === "y", p = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, b = o[u] / 2 - s[u] / 2;
  let S;
  switch (f) {
    case "top":
      S = {
        x: p,
        y: o.y - s.height
      };
      break;
    case "bottom":
      S = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      S = {
        x: o.x + o.width,
        y: v
      };
      break;
    case "left":
      S = {
        x: o.x - s.width,
        y: v
      };
      break;
    default:
      S = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ai(t)) {
    case "start":
      S[l] -= b * (n && h ? -1 : 1);
      break;
    case "end":
      S[l] += b * (n && h ? -1 : 1);
      break;
  }
  return S;
}
const cS = async (e, t, n) => {
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
    x: p,
    y: v
  } = $h(h, o, f), b = o, S = {}, T = 0;
  for (let _ = 0; _ < u.length; _++) {
    const {
      name: E,
      fn: k
    } = u[_], {
      x: R,
      y: O,
      data: D,
      reset: j
    } = await k({
      x: p,
      y: v,
      initialPlacement: o,
      placement: b,
      strategy: s,
      middlewareData: S,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = R ?? p, v = O ?? v, S = {
      ...S,
      [E]: {
        ...S[E],
        ...D
      }
    }, j && T <= 50 && (T++, typeof j == "object" && (j.placement && (b = j.placement), j.rects && (h = j.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : j.rects), {
      x: p,
      y: v
    } = $h(h, b, f)), _ = -1);
  }
  return {
    x: p,
    y: v,
    placement: b,
    strategy: s,
    middlewareData: S
  };
};
async function vo(e, t) {
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
    rootBoundary: p = "viewport",
    elementContext: v = "floating",
    altBoundary: b = !1,
    padding: S = 0
  } = Hn(t, e), T = vg(S), E = u[b ? v === "floating" ? "reference" : "floating" : v], k = Xs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(E))) == null || n ? E : E.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: f
  })), R = v === "floating" ? {
    x: o,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), D = await (a.isElement == null ? void 0 : a.isElement(O)) ? await (a.getScale == null ? void 0 : a.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = Xs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: R,
    offsetParent: O,
    strategy: f
  }) : R);
  return {
    top: (k.top - j.top + T.top) / D.y,
    bottom: (j.bottom - k.bottom + T.bottom) / D.y,
    left: (k.left - j.left + T.left) / D.x,
    right: (j.right - k.right + T.right) / D.x
  };
}
const lS = (e) => ({
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
      padding: p = 0
    } = Hn(e, t) || {};
    if (h == null)
      return {};
    const v = vg(p), b = {
      x: n,
      y: o
    }, S = hu(s), T = fu(S), _ = await l.getDimensions(h), E = S === "y", k = E ? "top" : "left", R = E ? "bottom" : "right", O = E ? "clientHeight" : "clientWidth", D = a.reference[T] + a.reference[S] - b[S] - a.floating[T], j = b[S] - a.reference[S], $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let F = $ ? $[O] : 0;
    (!F || !await (l.isElement == null ? void 0 : l.isElement($))) && (F = u.floating[O] || a.floating[T]);
    const V = D / 2 - j / 2, G = F / 2 - _[T] / 2 - 1, K = dr(v[k], G), J = dr(v[R], G), Y = K, Q = F - _[T] - J, ne = F / 2 - _[T] / 2 + V, Te = Nl(Y, ne, Q), re = !f.arrow && Ai(s) != null && ne !== Te && a.reference[T] / 2 - (ne < Y ? K : J) - _[T] / 2 < 0, le = re ? ne < Y ? ne - Y : ne - Q : 0;
    return {
      [S]: b[S] + le,
      data: {
        [S]: Te,
        centerOffset: ne - Te - le,
        ...re && {
          alignmentOffset: le
        }
      },
      reset: re
    };
  }
}), uS = function(e) {
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
        mainAxis: p = !0,
        crossAxis: v = !0,
        fallbackPlacements: b,
        fallbackStrategy: S = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: _ = !0,
        ...E
      } = Hn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const k = Wn(s), R = fr(u), O = Wn(u) === u, D = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), j = b || (O || !_ ? [Ys(u)] : iS(u)), $ = T !== "none";
      !b && $ && j.push(...sS(u, _, T, D));
      const F = [u, ...j], V = await vo(t, E), G = [];
      let K = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (p && G.push(V[k]), v) {
        const ne = rS(s, l, D);
        G.push(V[ne[0]], V[ne[1]]);
      }
      if (K = [...K, {
        placement: s,
        overflows: G
      }], !G.every((ne) => ne <= 0)) {
        var J, Y;
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
        let re = (Y = K.filter((le) => le.overflows[0] <= 0).sort((le, ee) => le.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!re)
          switch (S) {
            case "bestFit": {
              var Q;
              const le = (Q = K.filter((ee) => {
                if ($) {
                  const ye = fr(ee.placement);
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
function Vh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Gh(e) {
  return eS.some((t) => e[t] >= 0);
}
const dS = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Hn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await vo(t, {
            ...s,
            elementContext: "reference"
          }), l = Vh(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Gh(l)
            }
          };
        }
        case "escaped": {
          const a = await vo(t, {
            ...s,
            altBoundary: !0
          }), l = Vh(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Gh(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function fS(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Wn(n), u = Ai(n), f = fr(n) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = a && f ? -1 : 1, v = Hn(t, e);
  let {
    mainAxis: b,
    crossAxis: S,
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
  return u && typeof T == "number" && (S = u === "end" ? T * -1 : T), f ? {
    x: S * p,
    y: b * h
  } : {
    x: b * h,
    y: S * p
  };
}
const hS = function(e) {
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
      } = t, f = await fS(t, e);
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
}, pS = function(e) {
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
      } = Hn(e, t), h = {
        x: n,
        y: o
      }, p = await vo(t, f), v = fr(Wn(s)), b = du(v);
      let S = h[b], T = h[v];
      if (a) {
        const E = b === "y" ? "top" : "left", k = b === "y" ? "bottom" : "right", R = S + p[E], O = S - p[k];
        S = Nl(R, S, O);
      }
      if (l) {
        const E = v === "y" ? "top" : "left", k = v === "y" ? "bottom" : "right", R = T + p[E], O = T - p[k];
        T = Nl(R, T, O);
      }
      const _ = u.fn({
        ...t,
        [b]: S,
        [v]: T
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - o,
          enabled: {
            [b]: a,
            [v]: l
          }
        }
      };
    }
  };
}, gS = function(e) {
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
      } = Hn(e, t), p = {
        x: n,
        y: o
      }, v = fr(s), b = du(v);
      let S = p[b], T = p[v];
      const _ = Hn(u, t), E = typeof _ == "number" ? {
        mainAxis: _,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ..._
      };
      if (f) {
        const O = b === "y" ? "height" : "width", D = a.reference[b] - a.floating[O] + E.mainAxis, j = a.reference[b] + a.reference[O] - E.mainAxis;
        S < D ? S = D : S > j && (S = j);
      }
      if (h) {
        var k, R;
        const O = b === "y" ? "width" : "height", D = ["top", "left"].includes(Wn(s)), j = a.reference[v] - a.floating[O] + (D && ((k = l.offset) == null ? void 0 : k[v]) || 0) + (D ? 0 : E.crossAxis), $ = a.reference[v] + a.reference[O] + (D ? 0 : ((R = l.offset) == null ? void 0 : R[v]) || 0) - (D ? E.crossAxis : 0);
        T < j ? T = j : T > $ && (T = $);
      }
      return {
        [b]: S,
        [v]: T
      };
    }
  };
}, mS = function(e) {
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
      } = Hn(e, t), p = await vo(t, h), v = Wn(s), b = Ai(s), S = fr(s) === "y", {
        width: T,
        height: _
      } = a.floating;
      let E, k;
      v === "top" || v === "bottom" ? (E = v, k = b === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (k = v, E = b === "end" ? "top" : "bottom");
      const R = _ - p.top - p.bottom, O = T - p.left - p.right, D = dr(_ - p[E], R), j = dr(T - p[k], O), $ = !t.middlewareData.shift;
      let F = D, V = j;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (V = O), (o = t.middlewareData.shift) != null && o.enabled.y && (F = R), $ && !b) {
        const K = Ot(p.left, 0), J = Ot(p.right, 0), Y = Ot(p.top, 0), Q = Ot(p.bottom, 0);
        S ? V = T - 2 * (K !== 0 || J !== 0 ? K + J : Ot(p.left, p.right)) : F = _ - 2 * (Y !== 0 || Q !== 0 ? Y + Q : Ot(p.top, p.bottom));
      }
      await f({
        ...t,
        availableWidth: V,
        availableHeight: F
      });
      const G = await l.getDimensions(u.floating);
      return T !== G.width || _ !== G.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ma() {
  return typeof window < "u";
}
function Ri(e) {
  return yg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Dt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _n(e) {
  var t;
  return (t = (yg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yg(e) {
  return ma() ? e instanceof Node || e instanceof Dt(e).Node : !1;
}
function nn(e) {
  return ma() ? e instanceof Element || e instanceof Dt(e).Element : !1;
}
function yn(e) {
  return ma() ? e instanceof HTMLElement || e instanceof Dt(e).HTMLElement : !1;
}
function Yh(e) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Dt(e).ShadowRoot;
}
function ko(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = rn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function vS(e) {
  return ["table", "td", "th"].includes(Ri(e));
}
function va(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function pu(e) {
  const t = gu(), n = nn(e) ? rn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function yS(e) {
  let t = hr(e);
  for (; yn(t) && !xi(t); ) {
    if (pu(t))
      return t;
    if (va(t))
      return null;
    t = hr(t);
  }
  return null;
}
function gu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xi(e) {
  return ["html", "body", "#document"].includes(Ri(e));
}
function rn(e) {
  return Dt(e).getComputedStyle(e);
}
function ya(e) {
  return nn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hr(e) {
  if (Ri(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yh(e) && e.host || // Fallback.
    _n(e)
  );
  return Yh(t) ? t.host : t;
}
function bg(e) {
  const t = hr(e);
  return xi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yn(t) && ko(t) ? t : bg(t);
}
function yo(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = bg(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Dt(s);
  if (a) {
    const u = Fl(l);
    return t.concat(l, l.visualViewport || [], ko(s) ? s : [], u && n ? yo(u) : []);
  }
  return t.concat(s, yo(s, [], n));
}
function Fl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wg(e) {
  const t = rn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = yn(e), a = s ? e.offsetWidth : n, l = s ? e.offsetHeight : o, u = Gs(n) !== a || Gs(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function mu(e) {
  return nn(e) ? e : e.contextElement;
}
function bi(e) {
  const t = mu(e);
  if (!yn(t))
    return mn(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = wg(t);
  let l = (a ? Gs(n.width) : n.width) / o, u = (a ? Gs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const bS = /* @__PURE__ */ mn(0);
function xg(e) {
  const t = Dt(e);
  return !gu() || !t.visualViewport ? bS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function wS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Dt(e) ? !1 : t;
}
function Nr(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), a = mu(e);
  let l = mn(1);
  t && (o ? nn(o) && (l = bi(o)) : l = bi(e));
  const u = wS(a, n, o) ? xg(a) : mn(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, p = s.width / l.x, v = s.height / l.y;
  if (a) {
    const b = Dt(a), S = o && nn(o) ? Dt(o) : o;
    let T = b, _ = Fl(T);
    for (; _ && o && S !== T; ) {
      const E = bi(_), k = _.getBoundingClientRect(), R = rn(_), O = k.left + (_.clientLeft + parseFloat(R.paddingLeft)) * E.x, D = k.top + (_.clientTop + parseFloat(R.paddingTop)) * E.y;
      f *= E.x, h *= E.y, p *= E.x, v *= E.y, f += O, h += D, T = Dt(_), _ = Fl(T);
    }
  }
  return Xs({
    width: p,
    height: v,
    x: f,
    y: h
  });
}
function vu(e, t) {
  const n = ya(e).scrollLeft;
  return t ? t.left + n : Nr(_n(e)).left + n;
}
function Sg(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    vu(e, o)
  )), a = o.top + t.scrollTop;
  return {
    x: s,
    y: a
  };
}
function xS(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", l = _n(o), u = t ? va(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = mn(1);
  const p = mn(0), v = yn(o);
  if ((v || !v && !a) && ((Ri(o) !== "body" || ko(l)) && (f = ya(o)), yn(o))) {
    const S = Nr(o);
    h = bi(o), p.x = S.x + o.clientLeft, p.y = S.y + o.clientTop;
  }
  const b = l && !v && !a ? Sg(l, f, !0) : mn(0);
  return {
    width: n.width * h.x,
    height: n.height * h.y,
    x: n.x * h.x - f.scrollLeft * h.x + p.x + b.x,
    y: n.y * h.y - f.scrollTop * h.y + p.y + b.y
  };
}
function SS(e) {
  return Array.from(e.getClientRects());
}
function _S(e) {
  const t = _n(e), n = ya(e), o = e.ownerDocument.body, s = Ot(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Ot(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + vu(e);
  const u = -n.scrollTop;
  return rn(o).direction === "rtl" && (l += Ot(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function CS(e, t) {
  const n = Dt(e), o = _n(e), s = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    a = s.width, l = s.height;
    const h = gu();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
function TS(e, t) {
  const n = Nr(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, a = yn(e) ? bi(e) : mn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = s * a.x, h = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function Xh(e, t, n) {
  let o;
  if (t === "viewport")
    o = CS(e, n);
  else if (t === "document")
    o = _S(_n(e));
  else if (nn(t))
    o = TS(t, n);
  else {
    const s = xg(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Xs(o);
}
function _g(e, t) {
  const n = hr(e);
  return n === t || !nn(n) || xi(n) ? !1 : rn(n).position === "fixed" || _g(n, t);
}
function ES(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = yo(e, [], !1).filter((u) => nn(u) && Ri(u) !== "body"), s = null;
  const a = rn(e).position === "fixed";
  let l = a ? hr(e) : e;
  for (; nn(l) && !xi(l); ) {
    const u = rn(l), f = pu(l);
    !f && u.position === "fixed" && (s = null), (a ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || ko(l) && !f && _g(e, l)) ? o = o.filter((p) => p !== l) : s = u, l = hr(l);
  }
  return t.set(e, o), o;
}
function IS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? va(t) ? [] : ES(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((h, p) => {
    const v = Xh(t, p, s);
    return h.top = Ot(v.top, h.top), h.right = dr(v.right, h.right), h.bottom = dr(v.bottom, h.bottom), h.left = Ot(v.left, h.left), h;
  }, Xh(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function kS(e) {
  const {
    width: t,
    height: n
  } = wg(e);
  return {
    width: t,
    height: n
  };
}
function AS(e, t, n) {
  const o = yn(t), s = _n(t), a = n === "fixed", l = Nr(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = mn(0);
  if (o || !o && !a)
    if ((Ri(t) !== "body" || ko(s)) && (u = ya(t)), o) {
      const b = Nr(t, !0, a, t);
      f.x = b.x + t.clientLeft, f.y = b.y + t.clientTop;
    } else s && (f.x = vu(s));
  const h = s && !o && !a ? Sg(s, u) : mn(0), p = l.left + u.scrollLeft - f.x - h.x, v = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function cl(e) {
  return rn(e).position === "static";
}
function Zh(e, t) {
  if (!yn(e) || rn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return _n(e) === n && (n = n.ownerDocument.body), n;
}
function Cg(e, t) {
  const n = Dt(e);
  if (va(e))
    return n;
  if (!yn(e)) {
    let s = hr(e);
    for (; s && !xi(s); ) {
      if (nn(s) && !cl(s))
        return s;
      s = hr(s);
    }
    return n;
  }
  let o = Zh(e, t);
  for (; o && vS(o) && cl(o); )
    o = Zh(o, t);
  return o && xi(o) && cl(o) && !pu(o) ? n : o || yS(e) || n;
}
const RS = async function(e) {
  const t = this.getOffsetParent || Cg, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: AS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function PS(e) {
  return rn(e).direction === "rtl";
}
const OS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xS,
  getDocumentElement: _n,
  getClippingRect: IS,
  getOffsetParent: Cg,
  getElementRects: RS,
  getClientRects: SS,
  getDimensions: kS,
  getScale: bi,
  isElement: nn,
  isRTL: PS
};
function Tg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function MS(e, t) {
  let n = null, o;
  const s = _n(e);
  function a() {
    var u;
    clearTimeout(o), (u = n) == null || u.disconnect(), n = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), a();
    const h = e.getBoundingClientRect(), {
      left: p,
      top: v,
      width: b,
      height: S
    } = h;
    if (u || t(), !b || !S)
      return;
    const T = Ms(v), _ = Ms(s.clientWidth - (p + b)), E = Ms(s.clientHeight - (v + S)), k = Ms(p), O = {
      rootMargin: -T + "px " + -_ + "px " + -E + "px " + -k + "px",
      threshold: Ot(0, dr(1, f)) || 1
    };
    let D = !0;
    function j($) {
      const F = $[0].intersectionRatio;
      if (F !== f) {
        if (!D)
          return l();
        F ? l(!1, F) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      F === 1 && !Tg(h, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      n = new IntersectionObserver(j, {
        ...O,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(j, O);
    }
    n.observe(e);
  }
  return l(!0), a;
}
function DS(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, h = mu(e), p = s || a ? [...h ? yo(h) : [], ...yo(t)] : [];
  p.forEach((k) => {
    s && k.addEventListener("scroll", n, {
      passive: !0
    }), a && k.addEventListener("resize", n);
  });
  const v = h && u ? MS(h, n) : null;
  let b = -1, S = null;
  l && (S = new ResizeObserver((k) => {
    let [R] = k;
    R && R.target === h && S && (S.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var O;
      (O = S) == null || O.observe(t);
    })), n();
  }), h && !f && S.observe(h), S.observe(t));
  let T, _ = f ? Nr(e) : null;
  f && E();
  function E() {
    const k = Nr(e);
    _ && !Tg(_, k) && n(), _ = k, T = requestAnimationFrame(E);
  }
  return n(), () => {
    var k;
    p.forEach((R) => {
      s && R.removeEventListener("scroll", n), a && R.removeEventListener("resize", n);
    }), v?.(), (k = S) == null || k.disconnect(), S = null, f && cancelAnimationFrame(T);
  };
}
const LS = hS, NS = pS, jS = uS, FS = mS, zS = dS, Kh = lS, HS = gS, WS = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: OS,
    ...n
  }, a = {
    ...s.platform,
    _c: o
  };
  return cS(e, t, {
    ...s,
    platform: a
  });
};
var Fs = typeof document < "u" ? h5 : Mt;
function Zs(e, t) {
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
        if (!Zs(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !Zs(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Eg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qh(e, t) {
  const n = Eg(e);
  return Math.round(t * n) / n;
}
function ll(e) {
  const t = w.useRef(e);
  return Fs(() => {
    t.current = e;
  }), t;
}
function US(e) {
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
  } = e, [p, v] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [b, S] = w.useState(o);
  Zs(b, o) || S(o);
  const [T, _] = w.useState(null), [E, k] = w.useState(null), R = w.useCallback((ee) => {
    ee !== $.current && ($.current = ee, _(ee));
  }, []), O = w.useCallback((ee) => {
    ee !== F.current && (F.current = ee, k(ee));
  }, []), D = a || T, j = l || E, $ = w.useRef(null), F = w.useRef(null), V = w.useRef(p), G = f != null, K = ll(f), J = ll(s), Y = ll(h), Q = w.useCallback(() => {
    if (!$.current || !F.current)
      return;
    const ee = {
      placement: t,
      strategy: n,
      middleware: b
    };
    J.current && (ee.platform = J.current), WS($.current, F.current, ee).then((ye) => {
      const fe = {
        ...ye,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      ne.current && !Zs(V.current, fe) && (V.current = fe, Rp.flushSync(() => {
        v(fe);
      }));
    });
  }, [b, t, n, J, Y]);
  Fs(() => {
    h === !1 && V.current.isPositioned && (V.current.isPositioned = !1, v((ee) => ({
      ...ee,
      isPositioned: !1
    })));
  }, [h]);
  const ne = w.useRef(!1);
  Fs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Fs(() => {
    if (D && ($.current = D), j && (F.current = j), D && j) {
      if (K.current)
        return K.current(D, j, Q);
      Q();
    }
  }, [D, j, Q, K, G]);
  const Te = w.useMemo(() => ({
    reference: $,
    floating: F,
    setReference: R,
    setFloating: O
  }), [R, O]), re = w.useMemo(() => ({
    reference: D,
    floating: j
  }), [D, j]), le = w.useMemo(() => {
    const ee = {
      position: n,
      left: 0,
      top: 0
    };
    if (!re.floating)
      return ee;
    const ye = qh(re.floating, p.x), fe = qh(re.floating, p.y);
    return u ? {
      ...ee,
      transform: "translate(" + ye + "px, " + fe + "px)",
      ...Eg(re.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: ye,
      top: fe
    };
  }, [n, u, re.floating, p.x, p.y]);
  return w.useMemo(() => ({
    ...p,
    update: Q,
    refs: Te,
    elements: re,
    floatingStyles: le
  }), [p, Q, Te, re, le]);
}
const BS = (e) => {
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
      return o && t(o) ? o.current != null ? Kh({
        element: o.current,
        padding: s
      }).fn(n) : {} : o ? Kh({
        element: o,
        padding: s
      }).fn(n) : {};
    }
  };
}, $S = (e, t) => ({
  ...LS(e),
  options: [e, t]
}), VS = (e, t) => ({
  ...NS(e),
  options: [e, t]
}), GS = (e, t) => ({
  ...HS(e),
  options: [e, t]
}), YS = (e, t) => ({
  ...jS(e),
  options: [e, t]
}), XS = (e, t) => ({
  ...FS(e),
  options: [e, t]
}), ZS = (e, t) => ({
  ...zS(e),
  options: [e, t]
}), KS = (e, t) => ({
  ...BS(e),
  options: [e, t]
});
var qS = "Arrow", Ig = w.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ m.jsx(
    Ne.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ig.displayName = qS;
var JS = Ig, yu = "Popper", [kg, ba] = vr(yu), [QS, Ag] = kg(yu), Rg = (e) => {
  const { __scopePopper: t, children: n } = e, [o, s] = w.useState(null);
  return /* @__PURE__ */ m.jsx(QS, { scope: t, anchor: o, onAnchorChange: s, children: n });
};
Rg.displayName = yu;
var Pg = "PopperAnchor", Og = w.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e, a = Ag(Pg, n), l = w.useRef(null), u = We(t, l);
    return w.useEffect(() => {
      a.onAnchorChange(o?.current || l.current);
    }), o ? null : /* @__PURE__ */ m.jsx(Ne.div, { ...s, ref: u });
  }
);
Og.displayName = Pg;
var bu = "PopperContent", [e7, t7] = kg(bu), Mg = w.forwardRef(
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
      collisionPadding: p = 0,
      sticky: v = "partial",
      hideWhenDetached: b = !1,
      updatePositionStrategy: S = "optimized",
      onPlaced: T,
      ..._
    } = e, E = Ag(bu, n), [k, R] = w.useState(null), O = We(t, (Yt) => R(Yt)), [D, j] = w.useState(null), $ = $p(D), F = $?.width ?? 0, V = $?.height ?? 0, G = o + (a !== "center" ? "-" + a : ""), K = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, J = Array.isArray(h) ? h : [h], Y = J.length > 0, Q = {
      padding: K,
      boundary: J.filter(r7),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: ne, floatingStyles: Te, placement: re, isPositioned: le, middlewareData: ee } = US({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: G,
      whileElementsMounted: (...Yt) => DS(...Yt, {
        animationFrame: S === "always"
      }),
      elements: {
        reference: E.anchor
      },
      middleware: [
        $S({ mainAxis: s + V, alignmentAxis: l }),
        f && VS({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? GS() : void 0,
          ...Q
        }),
        f && YS({ ...Q }),
        XS({
          ...Q,
          apply: ({ elements: Yt, rects: xt, availableWidth: Xt, availableHeight: Vn }) => {
            const { width: Gn, height: Tn } = xt.reference, En = Yt.floating.style;
            En.setProperty("--radix-popper-available-width", `${Xt}px`), En.setProperty("--radix-popper-available-height", `${Vn}px`), En.setProperty("--radix-popper-anchor-width", `${Gn}px`), En.setProperty("--radix-popper-anchor-height", `${Tn}px`);
          }
        }),
        D && KS({ element: D, padding: u }),
        i7({ arrowWidth: F, arrowHeight: V }),
        b && ZS({ strategy: "referenceHidden", ...Q })
      ]
    }), [ye, fe] = Ng(re), Oe = lt(T);
    ur(() => {
      le && Oe?.();
    }, [le, Oe]);
    const Cn = ee.arrow?.x, $n = ee.arrow?.y, br = ee.arrow?.centerOffset !== 0, [sn, an] = w.useState();
    return ur(() => {
      k && an(window.getComputedStyle(k).zIndex);
    }, [k]), /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: ne.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Te,
          transform: le ? Te.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: sn,
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
        children: /* @__PURE__ */ m.jsx(
          e7,
          {
            scope: n,
            placedSide: ye,
            onArrowChange: j,
            arrowX: Cn,
            arrowY: $n,
            shouldHideArrow: br,
            children: /* @__PURE__ */ m.jsx(
              Ne.div,
              {
                "data-side": ye,
                "data-align": fe,
                ..._,
                ref: O,
                style: {
                  ..._.style,
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
Mg.displayName = bu;
var Dg = "PopperArrow", n7 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Lg = w.forwardRef(function(t, n) {
  const { __scopePopper: o, ...s } = t, a = t7(Dg, o), l = n7[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m.jsx(
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
        children: /* @__PURE__ */ m.jsx(
          JS,
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
Lg.displayName = Dg;
function r7(e) {
  return e !== null;
}
var i7 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: s } = t, l = s.arrow?.centerOffset !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [h, p] = Ng(n), v = { start: "0%", center: "50%", end: "100%" }[p], b = (s.arrow?.x ?? 0) + u / 2, S = (s.arrow?.y ?? 0) + f / 2;
    let T = "", _ = "";
    return h === "bottom" ? (T = l ? v : `${b}px`, _ = `${-f}px`) : h === "top" ? (T = l ? v : `${b}px`, _ = `${o.floating.height + f}px`) : h === "right" ? (T = `${-f}px`, _ = l ? v : `${S}px`) : h === "left" && (T = `${o.floating.width + f}px`, _ = l ? v : `${S}px`), { data: { x: T, y: _ } };
  }
});
function Ng(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var o7 = Rg, wu = Og, jg = Mg, Fg = Lg, xu = "Popover", [zg, BI] = vr(xu, [
  ba
]), Ao = ba(), [s7, yr] = zg(xu), Hg = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: l = !1
  } = e, u = Ao(t), f = w.useRef(null), [h, p] = w.useState(!1), [v = !1, b] = sa({
    prop: o,
    defaultProp: s,
    onChange: a
  });
  return /* @__PURE__ */ m.jsx(o7, { ...u, children: /* @__PURE__ */ m.jsx(
    s7,
    {
      scope: t,
      contentId: ou(),
      triggerRef: f,
      open: v,
      onOpenChange: b,
      onOpenToggle: w.useCallback(() => b((S) => !S), [b]),
      hasCustomAnchor: h,
      onCustomAnchorAdd: w.useCallback(() => p(!0), []),
      onCustomAnchorRemove: w.useCallback(() => p(!1), []),
      modal: l,
      children: n
    }
  ) });
};
Hg.displayName = xu;
var Wg = "PopoverAnchor", Ug = w.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = yr(Wg, n), a = Ao(n), { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = s;
    return w.useEffect(() => (l(), () => u()), [l, u]), /* @__PURE__ */ m.jsx(wu, { ...a, ...o, ref: t });
  }
);
Ug.displayName = Wg;
var Bg = "PopoverTrigger", $g = w.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = yr(Bg, n), a = Ao(n), l = We(t, s.triggerRef), u = /* @__PURE__ */ m.jsx(
      Ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Kg(s.open),
        ...o,
        ref: l,
        onClick: _e(e.onClick, s.onOpenToggle)
      }
    );
    return s.hasCustomAnchor ? u : /* @__PURE__ */ m.jsx(wu, { asChild: !0, ...a, children: u });
  }
);
$g.displayName = Bg;
var Su = "PopoverPortal", [a7, c7] = zg(Su, {
  forceMount: void 0
}), Vg = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: s } = e, a = yr(Su, t);
  return /* @__PURE__ */ m.jsx(a7, { scope: t, forceMount: n, children: /* @__PURE__ */ m.jsx(Bn, { present: n || a.open, children: /* @__PURE__ */ m.jsx(cg, { asChild: !0, container: s, children: o }) }) });
};
Vg.displayName = Su;
var Si = "PopoverContent", Gg = w.forwardRef(
  (e, t) => {
    const n = c7(Si, e.__scopePopover), { forceMount: o = n.forceMount, ...s } = e, a = yr(Si, e.__scopePopover);
    return /* @__PURE__ */ m.jsx(Bn, { present: o || a.open, children: a.modal ? /* @__PURE__ */ m.jsx(l7, { ...s, ref: t }) : /* @__PURE__ */ m.jsx(u7, { ...s, ref: t }) });
  }
);
Gg.displayName = Si;
var l7 = w.forwardRef(
  (e, t) => {
    const n = yr(Si, e.__scopePopover), o = w.useRef(null), s = We(t, o), a = w.useRef(!1);
    return w.useEffect(() => {
      const l = o.current;
      if (l) return Q6(l);
    }, []), /* @__PURE__ */ m.jsx(gg, { as: Lr, allowPinchZoom: !0, children: /* @__PURE__ */ m.jsx(
      Yg,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _e(e.onCloseAutoFocus, (l) => {
          l.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: _e(
          e.onPointerDownOutside,
          (l) => {
            const u = l.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0, h = u.button === 2 || f;
            a.current = h;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: _e(
          e.onFocusOutside,
          (l) => l.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), u7 = w.forwardRef(
  (e, t) => {
    const n = yr(Si, e.__scopePopover), o = w.useRef(!1), s = w.useRef(!1);
    return /* @__PURE__ */ m.jsx(
      Yg,
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
), Yg = w.forwardRef(
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
      onInteractOutside: p,
      ...v
    } = e, b = yr(Si, n), S = Ao(n);
    return p6(), /* @__PURE__ */ m.jsx(
      sg,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: s,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ m.jsx(
          uu,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: p,
            onEscapeKeyDown: u,
            onPointerDownOutside: f,
            onFocusOutside: h,
            onDismiss: () => b.onOpenChange(!1),
            children: /* @__PURE__ */ m.jsx(
              jg,
              {
                "data-state": Kg(b.open),
                role: "dialog",
                id: b.contentId,
                ...S,
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
), Xg = "PopoverClose", Zg = w.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = yr(Xg, n);
    return /* @__PURE__ */ m.jsx(
      Ne.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: _e(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
Zg.displayName = Xg;
var d7 = "PopoverArrow", f7 = w.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, s = Ao(n);
    return /* @__PURE__ */ m.jsx(Fg, { ...s, ...o, ref: t });
  }
);
f7.displayName = d7;
function Kg(e) {
  return e ? "open" : "closed";
}
var h7 = Hg, p7 = Ug, g7 = $g, m7 = Vg, v7 = Gg, y7 = Zg, [wa, $I] = vr("Tooltip", [
  ba
]), _u = ba(), qg = "TooltipProvider", b7 = 700, Jh = "tooltip.open", [w7, Jg] = wa(qg), Qg = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = b7,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: a
  } = e, [l, u] = w.useState(!0), f = w.useRef(!1), h = w.useRef(0);
  return w.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ m.jsx(
    w7,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: n,
      onOpen: w.useCallback(() => {
        window.clearTimeout(h.current), u(!1);
      }, []),
      onClose: w.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: f,
      onPointerInTransitChange: w.useCallback((p) => {
        f.current = p;
      }, []),
      disableHoverableContent: s,
      children: a
    }
  );
};
Qg.displayName = qg;
var em = "Tooltip", [VI, xa] = wa(em), zl = "TooltipTrigger", x7 = w.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = xa(zl, n), a = Jg(zl, n), l = _u(n), u = w.useRef(null), f = We(t, u, s.onTriggerChange), h = w.useRef(!1), p = w.useRef(!1), v = w.useCallback(() => h.current = !1, []);
    return w.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ m.jsx(wu, { asChild: !0, ...l, children: /* @__PURE__ */ m.jsx(
      Ne.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: f,
        onPointerMove: _e(e.onPointerMove, (b) => {
          b.pointerType !== "touch" && !p.current && !a.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: _e(e.onPointerLeave, () => {
          s.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: _e(e.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", v, { once: !0 });
        }),
        onFocus: _e(e.onFocus, () => {
          h.current || s.onOpen();
        }),
        onBlur: _e(e.onBlur, s.onClose),
        onClick: _e(e.onClick, s.onClose)
      }
    ) });
  }
);
x7.displayName = zl;
var S7 = "TooltipPortal", [GI, _7] = wa(S7, {
  forceMount: void 0
}), _i = "TooltipContent", C7 = w.forwardRef(
  (e, t) => {
    const n = _7(_i, e.__scopeTooltip), { forceMount: o = n.forceMount, side: s = "top", ...a } = e, l = xa(_i, e.__scopeTooltip);
    return /* @__PURE__ */ m.jsx(Bn, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ m.jsx(tm, { side: s, ...a, ref: t }) : /* @__PURE__ */ m.jsx(T7, { side: s, ...a, ref: t }) });
  }
), T7 = w.forwardRef((e, t) => {
  const n = xa(_i, e.__scopeTooltip), o = Jg(_i, e.__scopeTooltip), s = w.useRef(null), a = We(t, s), [l, u] = w.useState(null), { trigger: f, onClose: h } = n, p = s.current, { onPointerInTransitChange: v } = o, b = w.useCallback(() => {
    u(null), v(!1);
  }, [v]), S = w.useCallback(
    (T, _) => {
      const E = T.currentTarget, k = { x: T.clientX, y: T.clientY }, R = A7(k, E.getBoundingClientRect()), O = R7(k, R), D = P7(_.getBoundingClientRect()), j = M7([...O, ...D]);
      u(j), v(!0);
    },
    [v]
  );
  return w.useEffect(() => () => b(), [b]), w.useEffect(() => {
    if (f && p) {
      const T = (E) => S(E, p), _ = (E) => S(E, f);
      return f.addEventListener("pointerleave", T), p.addEventListener("pointerleave", _), () => {
        f.removeEventListener("pointerleave", T), p.removeEventListener("pointerleave", _);
      };
    }
  }, [f, p, S, b]), w.useEffect(() => {
    if (l) {
      const T = (_) => {
        const E = _.target, k = { x: _.clientX, y: _.clientY }, R = f?.contains(E) || p?.contains(E), O = !O7(k, l);
        R ? b() : O && (b(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [f, p, l, h, b]), /* @__PURE__ */ m.jsx(tm, { ...e, ref: a });
}), [E7, I7] = wa(em, { isInside: !1 }), tm = w.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = xa(_i, n), h = _u(n), { onClose: p } = f;
    return w.useEffect(() => (document.addEventListener(Jh, p), () => document.removeEventListener(Jh, p)), [p]), w.useEffect(() => {
      if (f.trigger) {
        const v = (b) => {
          b.target?.contains(f.trigger) && p();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [f.trigger, p]), /* @__PURE__ */ m.jsx(
      uu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ m.jsxs(
          jg,
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
              /* @__PURE__ */ m.jsx(Dp, { children: o }),
              /* @__PURE__ */ m.jsx(E7, { scope: n, isInside: !0, children: /* @__PURE__ */ m.jsx(q4, { id: f.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
C7.displayName = _i;
var nm = "TooltipArrow", k7 = w.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = _u(n);
    return I7(
      nm,
      n
    ).isInside ? null : /* @__PURE__ */ m.jsx(Fg, { ...s, ...o, ref: t });
  }
);
k7.displayName = nm;
function A7(e, t) {
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
function R7(e, t, n = 5) {
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
function P7(e) {
  const { top: t, right: n, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: s, y: o }
  ];
}
function O7(e, t) {
  const { x: n, y: o } = e;
  let s = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a].x, f = t[a].y, h = t[l].x, p = t[l].y;
    f > o != p > o && n < (h - u) * (o - f) / (p - f) + u && (s = !s);
  }
  return s;
}
function M7(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), D7(t);
}
function D7(e) {
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
var L7 = Qg, rm = { exports: {} };
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
})(rm);
var N7 = rm.exports;
const Dr = /* @__PURE__ */ _5(N7), im = { asChild: { type: "boolean" } }, zs = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, om = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Cu = ["initial", "xs", "sm", "md", "lg", "xl"];
function sm(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function po(e) {
  return typeof e == "object" && Object.keys(e).some((t) => Cu.includes(t));
}
function j7({ className: e, customProperties: t, ...n }) {
  const o = am({ allowArbitraryValues: !0, className: e, ...n }), s = F7({ customProperties: t, ...n });
  return [o, s];
}
function am({ allowArbitraryValues: e, value: t, className: n, propValues: o, parseValue: s = (a) => a }) {
  const a = [];
  if (t) {
    if (typeof t == "string" && o.includes(t)) return Qh(n, t, s);
    if (po(t)) {
      const l = t;
      for (const u in l) {
        if (!sm(l, u) || !Cu.includes(u)) continue;
        const f = l[u];
        if (f !== void 0) {
          if (o.includes(f)) {
            const h = Qh(n, f, s), p = u === "initial" ? h : `${u}:${h}`;
            a.push(p);
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
function Qh(e, t, n) {
  const o = e ? "-" : "", s = n(t), a = s?.startsWith("-"), l = a ? "-" : "", u = a ? s?.substring(1) : s;
  return `${l}${e}${o}${u}`;
}
function F7({ customProperties: e, value: t, propValues: n, parseValue: o = (s) => s }) {
  let s = {};
  if (!(!t || typeof t == "string" && n.includes(t))) {
    if (typeof t == "string" && (s = Object.fromEntries(e.map((a) => [a, t]))), po(t)) {
      const a = t;
      for (const l in a) {
        if (!sm(a, l) || !Cu.includes(l)) continue;
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
function ep(...e) {
  let t = {};
  for (const n of e) n && (t = { ...t, ...n });
  return Object.keys(t).length ? t : void 0;
}
function z7(...e) {
  return Object.assign({}, ...e);
}
function cm(e, ...t) {
  let n, o;
  const s = { ...e }, a = z7(...t);
  for (const l in a) {
    let u = s[l];
    const f = a[l];
    if (f.default !== void 0 && u === void 0 && (u = f.default), f.type === "enum" && ![f.default, ...f.values].includes(u) && !po(u) && (u = f.default), s[l] = u, "className" in f && f.className) {
      delete s[l];
      const h = "responsive" in f;
      if (!u || po(u) && !h) continue;
      if (po(u) && (f.default !== void 0 && u.initial === void 0 && (u.initial = f.default), f.type === "enum" && ([f.default, ...f.values].includes(u.initial) || (u.initial = f.default))), f.type === "enum") {
        const p = am({ allowArbitraryValues: !1, value: u, className: f.className, propValues: f.values, parseValue: f.parseValue });
        n = Dr(n, p);
        continue;
      }
      if (f.type === "string" || f.type === "enum | string") {
        const p = f.type === "string" ? [] : f.values, [v, b] = j7({ className: f.className, customProperties: f.customProperties, propValues: p, parseValue: f.parseValue, value: u });
        o = ep(o, b), n = Dr(n, v);
        continue;
      }
      if (f.type === "boolean" && u) {
        n = Dr(n, f.className);
        continue;
      }
    }
  }
  return s.className = Dr(n, e.className), s.style = ep(o, e.style), s;
}
const Pr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], H7 = { m: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: Pr, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } };
function W7(e) {
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
const Pt = { hasBackground: { default: !0 }, appearance: { default: "inherit" }, accentColor: { default: "indigo" }, grayColor: { default: "auto" }, panelBackground: { default: "translucent" }, radius: { default: "medium" }, scaling: { default: "100%" } }, pi = () => {
}, Hl = w.createContext(void 0), lm = w.forwardRef((e, t) => w.useContext(Hl) === void 0 ? w.createElement(L7, { delayDuration: 200 }, w.createElement(f3, { dir: "ltr" }, w.createElement(um, { ...e, ref: t }))) : w.createElement(Tu, { ...e, ref: t }));
lm.displayName = "Theme";
const um = w.forwardRef((e, t) => {
  const { appearance: n = Pt.appearance.default, accentColor: o = Pt.accentColor.default, grayColor: s = Pt.grayColor.default, panelBackground: a = Pt.panelBackground.default, radius: l = Pt.radius.default, scaling: u = Pt.scaling.default, hasBackground: f = Pt.hasBackground.default, ...h } = e, [p, v] = w.useState(n);
  w.useEffect(() => v(n), [n]);
  const [b, S] = w.useState(o);
  w.useEffect(() => S(o), [o]);
  const [T, _] = w.useState(s);
  w.useEffect(() => _(s), [s]);
  const [E, k] = w.useState(a);
  w.useEffect(() => k(a), [a]);
  const [R, O] = w.useState(l);
  w.useEffect(() => O(l), [l]);
  const [D, j] = w.useState(u);
  return w.useEffect(() => j(u), [u]), w.createElement(Tu, { ...h, ref: t, isRoot: !0, hasBackground: f, appearance: p, accentColor: b, grayColor: T, panelBackground: E, radius: R, scaling: D, onAppearanceChange: v, onAccentColorChange: S, onGrayColorChange: _, onPanelBackgroundChange: k, onRadiusChange: O, onScalingChange: j });
});
um.displayName = "ThemeRoot";
const Tu = w.forwardRef((e, t) => {
  const n = w.useContext(Hl), { asChild: o, isRoot: s, hasBackground: a, appearance: l = n?.appearance ?? Pt.appearance.default, accentColor: u = n?.accentColor ?? Pt.accentColor.default, grayColor: f = n?.resolvedGrayColor ?? Pt.grayColor.default, panelBackground: h = n?.panelBackground ?? Pt.panelBackground.default, radius: p = n?.radius ?? Pt.radius.default, scaling: v = n?.scaling ?? Pt.scaling.default, onAppearanceChange: b = pi, onAccentColorChange: S = pi, onGrayColorChange: T = pi, onPanelBackgroundChange: _ = pi, onRadiusChange: E = pi, onScalingChange: k = pi, ...R } = e, O = o ? Lp : "div", D = f === "auto" ? W7(u) : f, j = e.appearance === "light" || e.appearance === "dark", $ = a === void 0 ? s || j : a;
  return w.createElement(Hl.Provider, { value: w.useMemo(() => ({ appearance: l, accentColor: u, grayColor: f, resolvedGrayColor: D, panelBackground: h, radius: p, scaling: v, onAppearanceChange: b, onAccentColorChange: S, onGrayColorChange: T, onPanelBackgroundChange: _, onRadiusChange: E, onScalingChange: k }), [l, u, f, D, h, p, v, b, S, T, _, E, k]) }, w.createElement(O, { "data-is-root-theme": s ? "true" : "false", "data-accent-color": u, "data-gray-color": D, "data-has-background": $ ? "true" : "false", "data-panel-background": h, "data-radius": p, "data-scaling": v, ref: t, ...R, className: Dr("radix-themes", { light: l === "light", dark: l === "dark" }, R.className) }));
});
Tu.displayName = "ThemeImpl";
const dm = (e) => {
  if (!w.isValidElement(e)) throw Error(`Expected a single React Element child, but got: ${w.Children.toArray(e).map((t) => typeof t == "object" && "type" in t && typeof t.type == "string" ? t.type : typeof t).join(", ")}`);
  return e;
}, U7 = Lp, Or = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], B7 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: Or, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: Or, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: Or, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: Or, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: Or, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: Or, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: Or, responsive: !0 } }, ul = ["visible", "hidden", "clip", "scroll", "auto"], $7 = ["static", "relative", "absolute", "fixed", "sticky"], fo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], V7 = ["0", "1"], G7 = ["0", "1"], Y7 = { ...B7, ...zs, ...om, position: { type: "enum", className: "rt-r-position", values: $7, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: fo, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: fo, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: fo, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: fo, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: fo, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: ul, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: ul, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: ul, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: V7, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: G7, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 } }, dl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], X7 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: dl, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: dl, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: dl, responsive: !0 } }, Z7 = ["div", "span"], K7 = ["none", "inline-flex", "flex"], q7 = ["row", "column", "row-reverse", "column-reverse"], J7 = ["start", "center", "end", "baseline", "stretch"], Q7 = ["start", "center", "end", "between"], e_ = ["nowrap", "wrap", "wrap-reverse"], t_ = { as: { type: "enum", values: Z7, default: "div" }, ...im, display: { type: "enum", className: "rt-r-display", values: K7, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: q7, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: J7, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: Q7, parseValue: n_, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: e_, responsive: !0 }, ...X7 };
function n_(e) {
  return e === "between" ? "space-between" : e;
}
const Eu = w.forwardRef((e, t) => {
  const { className: n, asChild: o, as: s = "div", ...a } = cm(e, t_, Y7, H7);
  return w.createElement(o ? U7 : s, { ...a, ref: t, className: Dr("rt-Flex", n) });
});
Eu.displayName = "Flex";
const r_ = ["1", "2", "3", "4"], i_ = { ...im, size: { type: "enum", className: "rt-r-size", values: r_, default: "2", responsive: !0 }, width: zs.width, minWidth: zs.minWidth, maxWidth: { ...zs.maxWidth, default: "480px" }, ...om }, fm = (e) => w.createElement(h7, { ...e });
fm.displayName = "Popover.Root";
const hm = w.forwardRef(({ children: e, ...t }, n) => w.createElement(g7, { ...t, ref: n, asChild: !0 }, dm(e)));
hm.displayName = "Popover.Trigger";
const pm = w.forwardRef((e, t) => {
  const { className: n, forceMount: o, container: s, ...a } = cm(e, i_);
  return w.createElement(m7, { container: s, forceMount: o }, w.createElement(lm, { asChild: !0 }, w.createElement(v7, { align: "start", sideOffset: 8, collisionPadding: 10, ...a, ref: t, className: Dr("rt-PopperContent", "rt-PopoverContent", n) })));
});
pm.displayName = "Popover.Content";
const o_ = w.forwardRef(({ children: e, ...t }, n) => w.createElement(y7, { ...t, ref: n, asChild: !0 }, dm(e)));
o_.displayName = "Popover.Close";
const s_ = w.forwardRef(({ children: e, ...t }, n) => w.createElement(p7, { ...t, ref: n }));
s_.displayName = "Popover.Anchor";
const a_ = ({ trigger: e, children: t, ...n }) => {
  const o = (s) => {
    s.stopPropagation();
  };
  return /* @__PURE__ */ m.jsxs(fm, { ...n, children: [
    e && /* @__PURE__ */ m.jsx(hm, { onClick: o, children: e }),
    /* @__PURE__ */ m.jsx(pm, { maxHeight: "250px", children: t })
  ] });
}, YI = ({
  size: e,
  children: t
}) => {
  const [n, o] = st(!1);
  return /* @__PURE__ */ m.jsxs(
    Z4,
    {
      id: "artboard",
      onDragStateChange: o,
      style: {
        width: e.width,
        height: e.height
      },
      className: "designcombo_scene pointer-events-auto mt-3.5 bg-black",
      children: [
        /* @__PURE__ */ m.jsx(
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
}, XI = 100, ZI = 30, KI = 18, qI = 14, JI = 30, QI = 24, ek = 16, c_ = 12, tk = "Regular", l_ = "sans-serif", Sa = 188, Wl = 40, nk = 4e3, u_ = 1920, d_ = 1080, f_ = 60, h_ = 1e3 / f_, rk = 2e6, ik = 1e7, ok = 48e3, sk = 192e3, gm = 2.3, ak = u_ / gm, ck = d_ / gm, lk = 184, uk = 348, dk = 512, fk = 300, hk = 0, pk = 5e3, gk = 1, mk = 0, vk = 0, yk = 0, bk = 359, wk = 1, xk = 0, Sk = !1, _k = !1, Ck = 0, Tk = 2, Ek = 0.01, Ik = 1, kk = 0, Ak = 3, Rk = 0.01, Pk = 1, Ok = 0, Mk = 1, Dk = 0.01, Lk = 0.5, Nk = -1e3, jk = 1e3, Fk = 1, zk = 1, Hk = 0, Wk = 1, Uk = 0.01, Bk = 1, $k = 0, Vk = 1, Gk = 0.01, Yk = 0, Xk = 0.5, Zk = 10, Kk = 0.01, qk = 1, Jk = 0, Qk = 1, eA = 0.01, tA = 1, Iu = 16, tp = 80;
function p_(e) {
  if (!e) return "0";
  const t = e / Sa, n = Math.trunc(t) % 60, o = Math.trunc(t / 60) % 60, s = Math.trunc(t / 3600) % 60, l = [
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
function nA(e, t = !1) {
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
function Ks(e, t) {
  return e.map((n) => ({
    ...n,
    items: n.items.filter((o) => !t.includes(o))
  }));
}
const g_ = ({ frame: e }, { fps: t }) => {
  const n = e / t, o = Math.floor(n / 3600), s = n % 3600, a = Math.floor(s / 60), l = Math.floor(s % 60), u = Math.floor(
    (s - Math.floor(s)) * 100
  );
  return o > 0 ? `${o}:${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}` : `${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
}, m_ = ({ time: e }) => {
  const t = e / 1e3, n = Math.floor(t / 3600), o = t % 3600, s = Math.floor(o / 60), a = Math.floor(o % 60), l = Math.floor(
    (o - Math.floor(o)) * 100
  );
  return n > 0 ? `${n}:${s.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}` : `${s.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
}, v_ = () => {
  const e = document.getElementById("video-current-time");
  return (e ? parseFloat(e.getAttribute("data-current-time") ?? "") : 0) * 1e3;
}, bn = [
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
function mm(e, t) {
  let n = -1, o = e.length - 1;
  for (; 1 + n < o; ) {
    const s = n + (o - n >> 1);
    t(e[s], s, e) ? o = s : n = s;
  }
  return o;
}
function rA(e, t = 1) {
  const n = () => {
    const f = Math.max(0, Wl), p = document.getElementById(
      "designcombo-timeline-canvas"
    )?.offsetWidth ?? document.body.offsetWidth;
    return Math.max(1, p - f);
  }, o = () => typeof e == "number" ? Ze(e, t) : __(e, t), s = n() / o(), a = t * s;
  return {
    segments: 5,
    index: mm(bn, (u) => u.zoom > a),
    zoom: a,
    unit: 1 / a
  };
}
function iA(e) {
  return bn[e];
}
function y_(e) {
  return b_(e) || bn[0];
}
const b_ = (e) => {
  const t = bn.filter(
    (o) => o.zoom < e.zoom
  );
  return t.length === 0 ? null : t.reduce(
    (o, s) => s.zoom > o.zoom ? s : o
  );
}, w_ = (e) => {
  const t = bn.filter(
    (o) => o.zoom > e.zoom
  );
  return t.length === 0 ? null : t.reduce(
    (o, s) => s.zoom < o.zoom ? s : o
  );
};
function x_(e) {
  return w_(e) || bn[bn.length - 1];
}
function oA(e) {
  const t = bn.at(-1), n = e === t, s = S_(e) - (n ? 1 : 2);
  return Math.max(0, s);
}
function S_(e) {
  const t = mm(bn, (n) => n.zoom > e.zoom);
  return Math.min(bn.length - 1, t);
}
function Ze(e, t = 1, n = 1) {
  const o = Sa * t;
  return e * (60 / 1e3) * o / n;
}
function tn(e, t = 1) {
  const n = Sa * t;
  return e / n * h_;
}
function __(e, t = 1) {
  return Ze(e, t);
}
const sA = Math.floor(Math.random() * 1e3) + 1;
function vm(e, t = 1) {
  const n = [], o = Math.floor(t), s = (a, l) => {
    for (const u of a)
      Array.isArray(u) && l < o ? s(u, l + 1) : n.push(u);
  };
  return s(e, 0), n;
}
function ym(e, t) {
  const n = t.sort((s, a) => s.tempIndex - a.tempIndex), o = [];
  for (const s of n)
    s.tempIndex < 0 && o.push(s);
  o.push(e);
  for (const s of n)
    s.tempIndex >= 0 && o.push(s);
  return o;
}
const np = {
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
}, C_ = (e) => {
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
}, Un = Pp((e) => ({
  timeline: null,
  size: {
    width: 1080,
    height: 1920
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
const T_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), bm = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var E_ = {
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
const I_ = Ap(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: l,
    ...u
  }, f) => yl(
    "svg",
    {
      ref: f,
      ...E_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: bm("lucide", s),
      ...u
    },
    [
      ...l.map(([h, p]) => yl(h, p)),
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
const ce = (e, t) => {
  const n = Ap(
    ({ className: o, ...s }, a) => yl(I_, {
      ref: a,
      iconNode: t,
      className: bm(`lucide-${T_(e)}`, o),
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
const k_ = ce("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A_ = ce("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R_ = ce("BookOpen", [
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
const P_ = ce("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = ce("ChartLine", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M_ = ce("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D_ = ce("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L_ = ce("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N_ = ce("CircleHelp", [
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
const j_ = ce("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = ce("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z_ = ce("EllipsisVertical", [
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
const H_ = ce("FileText", [
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
const W_ = ce("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = ce("FolderClosed", [
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
const B_ = ce("House", [
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
const rp = ce("Image", [
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
const $_ = ce("Laptop", [
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
const V_ = ce("LayoutPanelLeft", [
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
const G_ = ce("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y_ = ce("MessagesSquare", [
  ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z", key: "p1xzt8" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X_ = ce("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = ce("Music", [
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
const Z_ = ce("Package", [
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
const K_ = ce("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q_ = ce("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J_ = ce("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q_ = ce("Puzzle", [
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
const eC = ce("RectangleHorizontal", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tC = ce("RectangleVertical", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nC = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rC = ce("Settings", [
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
const iC = ce("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = ce("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = ce("SquareSplitHorizontal", [
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
const sC = ce("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aC = ce("SunMedium", [
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
const xm = ce("Trash", [
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
const cC = ce("TriangleAlert", [
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
const op = ce("Type", [
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
const sp = ce("Upload", [
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
const lC = ce("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = ce("Video", [
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
const dC = ce("WandSparkles", [
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
const Sm = ce("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = ce("Zap", [
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
const hC = ce("ZoomIn", [
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
const pC = ce("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), ku = (e) => {
  const t = mi(
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
  return p5(
    t,
    () => e?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
}, _a = () => {
  const [e, t] = st(!1);
  return Mt(() => {
    const o = we.subject.pipe(
      zn(({ key: s }) => s.startsWith(_4))
    ).subscribe((s) => {
      s.key === X1 ? t(!0) : s.key === $s && t(!1);
    });
    return () => o.unsubscribe();
  }, []), e;
}, gC = () => {
  const [e, t] = st(!1), { duration: n, fps: o, scale: s, playerRef: a, activeIds: l } = Un(), u = ku(a), f = () => {
    we.dispatch(W1);
  }, h = () => {
    we.dispatch(B1, {
      payload: {},
      options: {
        time: v_()
      }
    });
  }, p = (S) => {
    we.dispatch(Y1, {
      payload: {
        scale: S
      }
    });
  }, v = () => {
    we.dispatch(z1);
  }, b = () => {
    we.dispatch(H1);
  };
  return Mt(() => (a?.current?.addEventListener("play", () => {
    t(!0);
  }), a?.current?.addEventListener("pause", () => {
    t(!1);
  }), () => {
    a?.current?.removeEventListener("play", () => {
      t(!0);
    }), a?.current?.removeEventListener("pause", () => {
      t(!1);
    });
  }), [a]), /* @__PURE__ */ m.jsx(
    "div",
    {
      style: {
        position: "relative",
        height: "50px",
        boxShadow: "inset 0 1px 0 0 #27272a",
        flex: "none"
      },
      className: "bg-background",
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          style: {
            position: "absolute",
            height: 50,
            width: "100%",
            display: "flex",
            alignItems: "center"
          },
          children: /* @__PURE__ */ m.jsxs(
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
                /* @__PURE__ */ m.jsxs("div", { className: "flex px-2", children: [
                  /* @__PURE__ */ m.jsxs(
                    He,
                    {
                      disabled: !l.length,
                      onClick: f,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ m.jsx(xm, { size: 14 }),
                        " Delete"
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsxs(
                    He,
                    {
                      disabled: !l.length,
                      onClick: h,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ m.jsx(ip, { size: 15 }),
                        " Split"
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsxs(
                    He,
                    {
                      disabled: !l.length,
                      onClick: () => {
                        we.dispatch(U1);
                      },
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ m.jsx(ip, { size: 15 }),
                        " Clone"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-center", children: [
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    /* @__PURE__ */ m.jsx(
                      He,
                      {
                        onClick: f,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ m.jsx(iC, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      He,
                      {
                        onClick: () => {
                          if (e)
                            return b();
                          v();
                        },
                        variant: "ghost",
                        size: "icon",
                        children: e ? /* @__PURE__ */ m.jsx(K_, { size: 14 }) : /* @__PURE__ */ m.jsx(q_, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      He,
                      {
                        onClick: h,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ m.jsx(oC, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ m.jsxs(
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
                        /* @__PURE__ */ m.jsx(
                          "div",
                          {
                            className: "font-medium text-zinc-200",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            "data-current-time": u / o,
                            id: "video-current-time",
                            children: g_({ frame: u }, { fps: o })
                          }
                        ),
                        /* @__PURE__ */ m.jsx("span", { children: "/" }),
                        /* @__PURE__ */ m.jsx(
                          "div",
                          {
                            className: "text-muted-foreground",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            children: m_({ time: n })
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsx(
                  mC,
                  {
                    scale: s,
                    onChangeTimelineScale: p,
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
}, mC = ({
  scale: e,
  onChangeTimelineScale: t,
  duration: n
}) => {
  const o = () => {
    const a = y_(e);
    t(a);
  }, s = () => {
    const a = x_(e);
    t(a);
  };
  return /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ m.jsxs("div", { className: "flex border-l border-border pl-4 pr-2", children: [
    /* @__PURE__ */ m.jsx(
      He,
      {
        size: "icon",
        variant: "ghost",
        onClick: o,
        disabled: e.index === 0,
        children: /* @__PURE__ */ m.jsx(pC, { size: 16 })
      }
    ),
    /* @__PURE__ */ m.jsx(
      He,
      {
        size: "icon",
        variant: "ghost",
        onClick: s,
        disabled: e.index === 20,
        children: /* @__PURE__ */ m.jsx(hC, { size: 16 })
      }
    )
  ] }) });
}, vC = [
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
], yC = [
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
], bC = [
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
], wC = [
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
], aA = [
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
], xC = () => {
  const e = _a();
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-1 flex-col overflow-auto", children: [
    /* @__PURE__ */ m.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Transitions" }),
    /* @__PURE__ */ m.jsx(Ii, { children: /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-3 gap-2 px-4", children: wC.map((t, n) => /* @__PURE__ */ m.jsx(
      SC,
      {
        transition: t,
        shouldDisplayPreview: !e
      },
      n
    )) }) })
  ] });
}, SC = ({
  transition: e,
  shouldDisplayPreview: t
}) => {
  const n = Rt.useMemo(
    () => ({
      backgroundImage: `url(${e.preview})`,
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    [e.preview]
  );
  return /* @__PURE__ */ m.jsx(
    fa,
    {
      data: e,
      renderCustomPreview: /* @__PURE__ */ m.jsx("div", { style: n }),
      shouldDisplayPreview: t,
      children: /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(
          "div",
          {
            style: n,
            draggable: !1
          }
        ) }),
        /* @__PURE__ */ m.jsx("div", { className: "flex h-6 items-center overflow-ellipsis text-nowrap text-[12px] capitalize text-muted-foreground", children: e.name || e.type })
      ] })
    }
  );
}, _C = () => {
  const e = () => {
    we.dispatch(F1, {
      payload: {
        id: et(),
        display: {
          from: 0,
          to: 5e3
        },
        details: {
          text: "Heading and some body",
          fontSize: 120,
          width: 600,
          fontUrl: np.url,
          fontFamily: np.postScriptName,
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
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Text" }),
    /* @__PURE__ */ m.jsx("div", { className: "flex flex-col gap-2 px-4", children: /* @__PURE__ */ m.jsx(
      He,
      {
        draggable: !1,
        onClick: e,
        variant: "secondary",
        className: "w-full",
        children: "Add text"
      }
    ) })
  ] });
}, CC = () => {
  const e = hn(null), t = (o) => {
    n(o);
  }, n = async (o) => {
    const s = o[0].type;
    s.includes("audio") && we.dispatch(Eo, {
      payload: {
        id: et(),
        details: {
          src: URL.createObjectURL(o[0]),
          volume: 50
        }
      }
    }), s.includes("video") && we.dispatch(To, {
      payload: {
        id: et(),
        display: {
          from: 2e3,
          to: 7e3
        },
        details: {
          src: URL.createObjectURL(o[0]),
          name: o[0].name
        }
      }
    }), s.includes("image") && we.dispatch(Io, {
      payload: {
        id: et(),
        details: {
          src: URL.createObjectURL(o[0])
        }
      }
    });
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Your media" }),
    /* @__PURE__ */ m.jsx(
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
    /* @__PURE__ */ m.jsx("div", { className: "px-4 py-2", children: /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsxs(
      h4,
      {
        defaultValue: "projects",
        className: "w-full",
        children: [
          /* @__PURE__ */ m.jsxs(j1, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ m.jsx(Il, { value: "projects", children: "Project" }),
            /* @__PURE__ */ m.jsx(Il, { value: "workspace", children: "Workspace" })
          ] }),
          /* @__PURE__ */ m.jsxs(kl, { value: "projects", children: [
            /* @__PURE__ */ m.jsxs(
              He,
              {
                onClick: () => {
                  e.current?.click();
                },
                className: "flex w-full gap-2",
                variant: "secondary",
                children: [
                  /* @__PURE__ */ m.jsx(sp, { size: 16 }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ m.jsx("div", {})
          ] }),
          /* @__PURE__ */ m.jsx(kl, { value: "workspace", children: /* @__PURE__ */ m.jsxs(
            He,
            {
              onClick: () => {
                e.current?.click();
              },
              className: "flex w-full gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ m.jsx(sp, { size: 16 }),
                " Upload"
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ m.jsx(Ii, { children: /* @__PURE__ */ m.jsx("div", { className: "masonry-sm px-4" }) })
  ] });
}, TC = () => {
  const e = _a(), t = (n) => {
    we.dispatch(Eo, {
      payload: n,
      options: {}
    });
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audios" }),
    /* @__PURE__ */ m.jsx(Ii, { children: /* @__PURE__ */ m.jsx("div", { className: "flex flex-col px-2", children: vC.map((n, o) => /* @__PURE__ */ m.jsx(
      EC,
      {
        shouldDisplayPreview: !e,
        handleAddAudio: t,
        audio: n
      },
      o
    )) }) })
  ] });
}, EC = ({
  handleAddAudio: e,
  audio: t,
  shouldDisplayPreview: n
}) => {
  const o = Rt.useMemo(
    () => ({
      backgroundImage: "url(https://cdn.designcombo.dev/thumbnails/music-preview.png)",
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    []
  );
  return /* @__PURE__ */ m.jsx(
    fa,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ m.jsx("div", { style: o }),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ m.jsxs(
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
            /* @__PURE__ */ m.jsx("div", { className: "flex h-12 items-center justify-center bg-zinc-800", children: /* @__PURE__ */ m.jsx(wm, { width: 16 }) }),
            /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ m.jsx("div", { children: t.name }),
              /* @__PURE__ */ m.jsx("div", { className: "text-zinc-400", children: t.metadata?.author })
            ] })
          ]
        }
      )
    }
  );
}, IC = () => {
  const e = _a(), t = (n) => {
    we.dispatch(Io, {
      payload: n,
      options: {
        trackId: "main"
      }
    });
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Photos" }),
    /* @__PURE__ */ m.jsx(Ii, { children: /* @__PURE__ */ m.jsx("div", { className: "masonry-sm px-4", children: yC.map((n, o) => /* @__PURE__ */ m.jsx(
      kC,
      {
        image: n,
        shouldDisplayPreview: !e,
        handleAddImage: t
      },
      o
    )) }) })
  ] });
}, kC = ({
  handleAddImage: e,
  image: t,
  shouldDisplayPreview: n
}) => {
  const o = Rt.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ m.jsx(
    fa,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ m.jsx("div", { style: o }),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          onClick: () => e({
            id: et(),
            details: {
              src: t.details.src
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ m.jsx(
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
}, AC = () => {
  const e = _a(), t = (n) => {
    we.dispatch(To, {
      payload: n,
      options: {
        resourceId: "main"
      }
    });
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Videos" }),
    /* @__PURE__ */ m.jsx(Ii, { children: /* @__PURE__ */ m.jsx("div", { className: "masonry-sm px-4", children: bC.map((n, o) => /* @__PURE__ */ m.jsx(
      RC,
      {
        video: n,
        shouldDisplayPreview: !e,
        handleAddVideo: t
      },
      o
    )) }) })
  ] });
}, RC = ({
  handleAddVideo: e,
  video: t,
  shouldDisplayPreview: n
}) => {
  const o = Rt.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ m.jsx(
    fa,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ m.jsx(
        "div",
        {
          style: o,
          className: "draggable"
        }
      ),
      shouldDisplayPreview: n,
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          onClick: () => e({
            ...t,
            id: et(),
            details: {
              src: t.details.src,
              ...t.details
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ m.jsx(
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
}, Au = Pp((e) => ({
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
})), PC = ({ children: e }) => {
  const { showMenuItem: t, setShowMenuItem: n } = Au(), o = () => {
    n(!1);
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      style: {
        left: t ? "0" : "-100%",
        transition: "left 0.25s ease-in-out",
        zIndex: 200
      },
      className: "absolute top-1/2 mt-6 flex h-[calc(100%-32px-64px)] w-[340px] -translate-y-1/2 rounded-lg shadow-lg",
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-[74px]" }),
        /* @__PURE__ */ m.jsxs("div", { className: "relative flex flex-1 bg-background/80 backdrop-blur-lg backdrop-filter", children: [
          /* @__PURE__ */ m.jsx(
            He,
            {
              variant: "ghost",
              className: "absolute right-2 top-2 h-8 w-8 text-muted-foreground",
              size: "icon",
              children: /* @__PURE__ */ m.jsx(
                Sm,
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
}, OC = () => {
  const { activeMenuItem: e } = Au();
  return e === "transitions" ? /* @__PURE__ */ m.jsx(xC, {}) : e === "texts" ? /* @__PURE__ */ m.jsx(_C, {}) : e === "videos" ? /* @__PURE__ */ m.jsx(AC, {}) : e === "audios" ? /* @__PURE__ */ m.jsx(TC, {}) : e === "images" ? /* @__PURE__ */ m.jsx(IC, {}) : e === "uploads" ? /* @__PURE__ */ m.jsx(CC, {}) : null;
}, MC = () => /* @__PURE__ */ m.jsx(PC, { children: /* @__PURE__ */ m.jsx(OC, {}) }), fn = {
  add: J_,
  audio: wm,
  arrowRight: k_,
  arrowUpRight: A_,
  billing: F_,
  bookOpen: R_,
  captions: P_,
  chevronLeft: D_,
  chevronRight: L_,
  check: M_,
  close: Sm,
  copy: j_,
  dashboard: V_,
  ellipsis: z_,
  folder: U_,
  gitHub: ({ ...e }) => /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        }
      )
    }
  ),
  google: ({ ...e }) => /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
          fill: "currentColor"
        }
      )
    }
  ),
  nextjs: ({ ...e }) => /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
        }
      )
    }
  ),
  help: N_,
  home: B_,
  image: rp,
  landscape: eC,
  laptop: $_,
  lineChart: O_,
  logo: Q_,
  media: rp,
  messages: Y_,
  moon: X_,
  package: Z_,
  page: W_,
  portrait: tC,
  post: H_,
  preset: fC,
  search: nC,
  square: sC,
  redo: ({ ...e }) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ m.jsx(
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
  shapes: ({ ...e }) => /* @__PURE__ */ m.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ m.jsx("g", { clipPath: "url(#clip0_2077_2705)", children: /* @__PURE__ */ m.jsx(
          "path",
          {
            d: "M3.75 12H2.25V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H9.75V20.25H3.75V12ZM21 21.75H12.75C12.6197 21.75 12.4916 21.716 12.3784 21.6514C12.2652 21.5868 12.1708 21.4938 12.1045 21.3816C12.0382 21.2694 12.0022 21.1419 12.0002 21.0116C11.9982 20.8813 12.0302 20.7527 12.093 20.6385L16.218 13.1385C16.2821 13.0203 16.377 12.9218 16.4928 12.8534C16.6085 12.7849 16.7406 12.7492 16.875 12.75C17.1322 12.75 17.3895 12.879 17.532 13.1385L21.657 20.6385C21.7198 20.7527 21.7518 20.8813 21.7498 21.0116C21.7478 21.1419 21.7118 21.2694 21.6455 21.3816C21.5792 21.4938 21.4848 21.5868 21.3716 21.6514C21.2584 21.716 21.1303 21.75 21 21.75ZM14.0182 20.25H19.7318L16.875 15.0563L14.0182 20.25ZM20.25 2.25H12V3.75H20.25V14.244H21.75V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM8.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V8.25C2.25 8.64782 2.40804 9.02936 2.68934 9.31066C2.97064 9.59196 3.35218 9.75 3.75 9.75H8.25C8.64782 9.75 9.02936 9.59196 9.31066 9.31066C9.59196 9.02936 9.75 8.64782 9.75 8.25V3.75C9.75 3.35218 9.59196 2.97064 9.31066 2.68934C9.02936 2.40804 8.64782 2.25 8.25 2.25ZM8.25 8.25H3.75V3.75H8.25V8.25Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ m.jsx("defs", { children: /* @__PURE__ */ m.jsx("clipPath", { id: "clip0_2077_2705", children: /* @__PURE__ */ m.jsx(
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
  settings: rC,
  smart: dC,
  spinner: G_,
  sun: aC,
  templates: ({ ...e }) => /* @__PURE__ */ m.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ m.jsx("g", { clipPath: "url(#clip0_2077_2714)", children: /* @__PURE__ */ m.jsx(
          "path",
          {
            d: "M19.5 4.5V7.5H4.5V4.5H19.5ZM19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V7.5C3 7.89782 3.15804 8.27936 3.43934 8.56066C3.72064 8.84196 4.10218 9 4.5 9H19.5C19.8978 9 20.2794 8.84196 20.5607 8.56066C20.842 8.27936 21 7.89782 21 7.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM7.5 12V19.5H4.5V12H7.5ZM7.5 10.5H4.5C4.10218 10.5 3.72064 10.658 3.43934 10.9393C3.15804 11.2206 3 11.6022 3 12V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H7.5C7.89782 21 8.27936 20.842 8.56066 20.5607C8.84196 20.2794 9 19.8978 9 19.5V12C9 11.6022 8.84196 11.2206 8.56066 10.9393C8.27936 10.658 7.89782 10.5 7.5 10.5ZM19.5 12V19.5H12V12H19.5ZM19.5 10.5H12C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12V19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V12C21 11.6022 20.842 11.2206 20.5607 10.9393C20.2794 10.658 19.8978 10.5 19.5 10.5Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ m.jsx("defs", { children: /* @__PURE__ */ m.jsx("clipPath", { id: "clip0_2077_2714", children: /* @__PURE__ */ m.jsx(
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
  text: op,
  trash: xm,
  twitter: ({ ...e }) => /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0",
          fill: "currentColor"
        }
      )
    }
  ),
  type: op,
  undo: ({ ...e }) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ m.jsx(
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
  upload: ({ ...e }) => /* @__PURE__ */ m.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        /* @__PURE__ */ m.jsxs("g", { clipPath: "url(#clip0_2077_2699)", children: [
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: "M8.25 13.5L9.3075 14.5575L11.25 12.6225V21.75H12.75V12.6225L14.6925 14.5575L15.75 13.5L12 9.75L8.25 13.5Z",
              fill: "currentColor"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: "M17.6249 16.5004H17.2499V15.0004H17.6249C18.52 15.0362 19.3927 14.715 20.0509 14.1074C20.7092 13.4997 21.0991 12.6555 21.1349 11.7604C21.1707 10.8653 20.8495 9.99264 20.2418 9.33438C19.6342 8.67613 18.79 8.28621 17.8949 8.25041H17.2499L17.1749 7.63541C17.0085 6.37275 16.3888 5.21362 15.4312 4.37395C14.4736 3.53428 13.2435 3.07132 11.9699 3.07132C10.6963 3.07132 9.46616 3.53428 8.50857 4.37395C7.55099 5.21362 6.93129 6.37275 6.76489 7.63541L6.74989 8.25041H6.10489C5.20979 8.28621 4.36557 8.67613 3.75795 9.33438C3.15033 9.99264 2.82909 10.8653 2.86489 11.7604C2.9007 12.6555 3.29062 13.4997 3.94887 14.1074C4.60712 14.715 5.47979 15.0362 6.37489 15.0004H6.74989V16.5004H6.37489C5.1722 16.4928 4.01477 16.0409 3.12513 15.2315C2.2355 14.4221 1.67646 13.3124 1.55549 12.1158C1.43453 10.9192 1.76018 9.72009 2.46983 8.74905C3.17949 7.77801 4.22305 7.10357 5.39989 6.85541C5.72367 5.3453 6.55552 3.99189 7.75663 3.02101C8.95774 2.05013 10.4555 1.52051 11.9999 1.52051C13.5443 1.52051 15.042 2.05013 16.2432 3.02101C17.4443 3.99189 18.2761 5.3453 18.5999 6.85541C19.7767 7.10357 20.8203 7.77801 21.53 8.74905C22.2396 9.72009 22.5653 10.9192 22.4443 12.1158C22.3233 13.3124 21.7643 14.4221 20.8747 15.2315C19.985 16.0409 18.8276 16.4928 17.6249 16.5004Z",
              fill: "currentColor"
            }
          )
        ] }),
        /* @__PURE__ */ m.jsx("defs", { children: /* @__PURE__ */ m.jsx("clipPath", { id: "clip0_2077_2699", children: /* @__PURE__ */ m.jsx(
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
  user: lC,
  video: uC,
  warning: cC
};
function DC() {
  const { setActiveMenuItem: e, setShowMenuItem: t, activeMenuItem: n, showMenuItem: o } = Au();
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      style: { zIndex: 201 },
      className: "absolute left-2.5 top-1/2 mt-6 flex w-14 -translate-y-1/2 flex-col items-center rounded-lg bg-background/80 py-2 shadow-lg backdrop-blur-lg backdrop-filter",
      children: [
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("uploads"), t(!0);
            },
            className: gt(
              o && n === "uploads" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.upload, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("texts"), t(!0);
            },
            className: gt(
              o && n === "texts" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.type, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("videos"), t(!0);
            },
            className: gt(
              o && n === "videos" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.video, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("captions"), t(!0);
            },
            className: gt(
              o && n === "captions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.captions, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("images"), t(!0);
            },
            className: gt(
              o && n === "images" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.image, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("shapes"), t(!0);
            },
            className: gt(
              o && n === "shapes" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.shapes, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("audios"), t(!0);
            },
            className: gt(
              o && n === "audios" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(fn.audio, { width: 20 })
          }
        ),
        /* @__PURE__ */ m.jsx(
          He,
          {
            onClick: () => {
              e("transitions"), t(!0);
            },
            className: gt(
              o && n === "transitions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ m.jsx(
              "svg",
              {
                width: 20,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ m.jsx(
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
function LC() {
  const e = () => {
    we.dispatch(V1);
  }, t = () => {
    we.dispatch(G1);
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px"
      },
      className: "pointer-events-none absolute left-0 right-0 top-0 z-[205] flex h-[72px] items-center px-2",
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: "pointer-events-auto flex h-14 items-center gap-2", children: [
          /* @__PURE__ */ m.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-md bg-background" }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex h-12 items-center bg-background px-1.5", children: [
            /* @__PURE__ */ m.jsx(
              He,
              {
                onClick: e,
                className: "text-muted-foreground",
                variant: "ghost",
                size: "icon",
                children: /* @__PURE__ */ m.jsx(fn.undo, { width: 20 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              He,
              {
                onClick: t,
                className: "text-muted-foreground",
                variant: "ghost",
                size: "icon",
                children: /* @__PURE__ */ m.jsx(fn.redo, { width: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "pointer-events-auto flex h-14 items-center justify-center gap-2", children: /* @__PURE__ */ m.jsxs("div", { className: "flex h-12 items-center gap-4 rounded-md bg-background px-2.5", children: [
          /* @__PURE__ */ m.jsx("div", { className: "px-1 text-sm font-medium", children: "Untitled video" }),
          /* @__PURE__ */ m.jsx(jC, {})
        ] }) })
      ]
    }
  );
}
const NC = [
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
], jC = () => {
  const e = (t) => {
    we.dispatch(K1, {
      payload: {
        ...t
      }
    });
  };
  return /* @__PURE__ */ m.jsx("div", { className: "text-sm", children: /* @__PURE__ */ m.jsx(
    a_,
    {
      trigger: /* @__PURE__ */ m.jsx(
        He,
        {
          className: "border border-border",
          variant: "secondary",
          children: "Resize"
        }
      ),
      children: NC.map((t, n) => /* @__PURE__ */ m.jsx(
        FC,
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
}, FC = ({
  label: e,
  icon: t,
  value: n,
  description: o,
  handleResize: s
}) => {
  const a = fn[t];
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      onClick: () => s(n),
      className: "flex cursor-pointer items-center rounded-md p-2 hover:bg-zinc-50/10",
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "w-8 text-muted-foreground", children: /* @__PURE__ */ m.jsx(a, { size: 20 }) }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("div", { children: e }),
          /* @__PURE__ */ m.jsx("div", { className: "text-xs text-muted-foreground", children: o })
        ] })
      ]
    }
  );
}, Ds = (e, t) => {
  const n = e.from / 1e3 * t, o = e.to / 1e3 * t - n;
  return { from: n, durationInFrames: o };
}, zC = {
  text: (e, t) => {
    const { fps: n, height: o, width: s } = t, { from: a, durationInFrames: l } = Ds(e.display, n);
    return /* @__PURE__ */ m.jsx(
      Es,
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
        children: /* @__PURE__ */ m.jsx("div", { children: e.details.text })
      },
      e.id
    );
  },
  image: (e, t) => {
    const { fps: n } = t, { from: o, durationInFrames: s } = Ds(e.display, n);
    return /* @__PURE__ */ m.jsx(
      Es,
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
        children: /* @__PURE__ */ m.jsx(Kc, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ m.jsx(
          w5,
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
    const { fps: n } = t, { from: o, durationInFrames: s } = Ds(e.display, n), a = e.trim, l = e.details.crop || {
      x: 0,
      y: 0,
      width: e.details.width,
      height: e.details.height
    };
    return a ? /* @__PURE__ */ m.jsx(
      Es,
      {
        premountFor: 30 * 5,
        from: o,
        durationInFrames: s,
        style: {
          width: l.width || "100%",
          // Default width
          height: l.height || "auto",
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
        children: /* @__PURE__ */ m.jsx(
          Kc,
          {
            style: {
              pointerEvents: "none",
              width: e.details.width,
              height: e.details.height,
              top: -l.y,
              left: -l.x
            },
            children: /* @__PURE__ */ m.jsx(
              b5,
              {
                startFrom: a.from / 1e3 * n,
                endAt: a.to / 1e3 * n,
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
    ) : /* @__PURE__ */ m.jsx(m.Fragment, {});
  },
  audio: (e, t) => {
    const { fps: n } = t, { from: o, durationInFrames: s } = Ds(e.display, n), a = e.trim;
    return a ? /* @__PURE__ */ m.jsx(
      Es,
      {
        className: `moonshine-scene-item id-${e.id} moonshine-scene-item-type-${e.type}`,
        from: o,
        durationInFrames: s,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ m.jsx(Kc, { children: /* @__PURE__ */ m.jsx(
          y5,
          {
            startFrom: a.from / 1e3 * n,
            endAt: a.to / 1e3 * n,
            src: e.details.src,
            volume: (e.details.volume ?? 100) / 100
          }
        ) })
      },
      e.id
    ) : /* @__PURE__ */ m.jsx(m.Fragment, {});
  }
};
var qs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
qs.exports;
(function(e, t) {
  (function() {
    var n, o = "4.17.21", s = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", v = 1, b = 2, S = 4, T = 1, _ = 2, E = 1, k = 2, R = 4, O = 8, D = 16, j = 32, $ = 64, F = 128, V = 256, G = 512, K = 30, J = "...", Y = 800, Q = 16, ne = 1, Te = 2, re = 3, le = 1 / 0, ee = 9007199254740991, ye = 17976931348623157e292, fe = NaN, Oe = 4294967295, Cn = Oe - 1, $n = Oe >>> 1, br = [
      ["ary", F],
      ["bind", E],
      ["bindKey", k],
      ["curry", O],
      ["curryRight", D],
      ["flip", G],
      ["partial", j],
      ["partialRight", $],
      ["rearg", V]
    ], sn = "[object Arguments]", an = "[object Array]", Yt = "[object AsyncFunction]", xt = "[object Boolean]", Xt = "[object Date]", Vn = "[object DOMException]", Gn = "[object Error]", Tn = "[object Function]", En = "[object GeneratorFunction]", St = "[object Map]", cn = "[object Number]", wr = "[object Null]", jt = "[object Object]", Mi = "[object Promise]", $r = "[object Proxy]", xr = "[object RegExp]", _t = "[object Set]", In = "[object String]", Vr = "[object Symbol]", Ra = "[object Undefined]", Yn = "[object WeakMap]", Do = "[object WeakSet]", Xn = "[object ArrayBuffer]", Zn = "[object DataView]", Gr = "[object Float32Array]", Yr = "[object Float64Array]", Di = "[object Int8Array]", Li = "[object Int16Array]", Ni = "[object Int32Array]", ji = "[object Uint8Array]", Fi = "[object Uint8ClampedArray]", zi = "[object Uint16Array]", Hi = "[object Uint32Array]", Wi = /\b__p \+= '';/g, Lo = /\b(__p \+=) '' \+/g, Kn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Xr = /&(?:amp|lt|gt|quot|#39);/g, Zr = /[&<>"']/g, No = RegExp(Xr.source), Pa = RegExp(Zr.source), jo = /<%-([\s\S]+?)%>/g, Oa = /<%([\s\S]+?)%>/g, Ui = /<%=([\s\S]+?)%>/g, Fo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ma = /^\w*$/, Da = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kr = /[\\^$.*+?()[\]{}|]/g, zo = RegExp(Kr.source), Bi = /^\s+/, La = /\s/, Na = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ja = /\{\n\/\* \[wrapped with (.+)\] \*/, I = /,? & /, U = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Z = /[()=,{}\[\]\/\s]/, ae = /\\(\\)?/g, Ie = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Re = /\w*$/, xe = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, nt = /^\[object .+?Constructor\]$/, Ue = /^0o[0-7]+$/i, $e = /^(?:0|[1-9]\d*)$/, mt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Zt = /($^)/, kn = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", $i = "\\u0300-\\u036f", Fa = "\\ufe20-\\ufe2f", za = "\\u20d0-\\u20ff", Bu = $i + Fa + za, $u = "\\u2700-\\u27bf", Vu = "a-z\\xdf-\\xf6\\xf8-\\xff", c0 = "\\xac\\xb1\\xd7\\xf7", l0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", u0 = "\\u2000-\\u206f", d0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Gu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Yu = "\\ufe0e\\ufe0f", Xu = c0 + l0 + u0 + d0, Ha = "['’]", f0 = "[" + Ke + "]", Zu = "[" + Xu + "]", Ho = "[" + Bu + "]", Ku = "\\d+", h0 = "[" + $u + "]", qu = "[" + Vu + "]", Ju = "[^" + Ke + Xu + Ku + $u + Vu + Gu + "]", Wa = "\\ud83c[\\udffb-\\udfff]", p0 = "(?:" + Ho + "|" + Wa + ")", Qu = "[^" + Ke + "]", Ua = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ba = "[\\ud800-\\udbff][\\udc00-\\udfff]", qr = "[" + Gu + "]", ed = "\\u200d", td = "(?:" + qu + "|" + Ju + ")", g0 = "(?:" + qr + "|" + Ju + ")", nd = "(?:" + Ha + "(?:d|ll|m|re|s|t|ve))?", rd = "(?:" + Ha + "(?:D|LL|M|RE|S|T|VE))?", id = p0 + "?", od = "[" + Yu + "]?", m0 = "(?:" + ed + "(?:" + [Qu, Ua, Ba].join("|") + ")" + od + id + ")*", v0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", y0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", sd = od + id + m0, b0 = "(?:" + [h0, Ua, Ba].join("|") + ")" + sd, w0 = "(?:" + [Qu + Ho + "?", Ho, Ua, Ba, f0].join("|") + ")", x0 = RegExp(Ha, "g"), S0 = RegExp(Ho, "g"), $a = RegExp(Wa + "(?=" + Wa + ")|" + w0 + sd, "g"), _0 = RegExp([
      qr + "?" + qu + "+" + nd + "(?=" + [Zu, qr, "$"].join("|") + ")",
      g0 + "+" + rd + "(?=" + [Zu, qr + td, "$"].join("|") + ")",
      qr + "?" + td + "+" + nd,
      qr + "+" + rd,
      y0,
      v0,
      Ku,
      b0
    ].join("|"), "g"), C0 = RegExp("[" + ed + Ke + Bu + Yu + "]"), T0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, E0 = [
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
    ], I0 = -1, je = {};
    je[Gr] = je[Yr] = je[Di] = je[Li] = je[Ni] = je[ji] = je[Fi] = je[zi] = je[Hi] = !0, je[sn] = je[an] = je[Xn] = je[xt] = je[Zn] = je[Xt] = je[Gn] = je[Tn] = je[St] = je[cn] = je[jt] = je[xr] = je[_t] = je[In] = je[Yn] = !1;
    var Le = {};
    Le[sn] = Le[an] = Le[Xn] = Le[Zn] = Le[xt] = Le[Xt] = Le[Gr] = Le[Yr] = Le[Di] = Le[Li] = Le[Ni] = Le[St] = Le[cn] = Le[jt] = Le[xr] = Le[_t] = Le[In] = Le[Vr] = Le[ji] = Le[Fi] = Le[zi] = Le[Hi] = !0, Le[Gn] = Le[Tn] = Le[Yn] = !1;
    var k0 = {
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
    }, A0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, R0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, P0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, O0 = parseFloat, M0 = parseInt, ad = typeof so == "object" && so && so.Object === Object && so, D0 = typeof self == "object" && self && self.Object === Object && self, rt = ad || D0 || Function("return this")(), Va = t && !t.nodeType && t, Sr = Va && !0 && e && !e.nodeType && e, cd = Sr && Sr.exports === Va, Ga = cd && ad.process, Ft = function() {
      try {
        var P = Sr && Sr.require && Sr.require("util").types;
        return P || Ga && Ga.binding && Ga.binding("util");
      } catch {
      }
    }(), ld = Ft && Ft.isArrayBuffer, ud = Ft && Ft.isDate, dd = Ft && Ft.isMap, fd = Ft && Ft.isRegExp, hd = Ft && Ft.isSet, pd = Ft && Ft.isTypedArray;
    function Ct(P, N, L) {
      switch (L.length) {
        case 0:
          return P.call(N);
        case 1:
          return P.call(N, L[0]);
        case 2:
          return P.call(N, L[0], L[1]);
        case 3:
          return P.call(N, L[0], L[1], L[2]);
      }
      return P.apply(N, L);
    }
    function L0(P, N, L, q) {
      for (var ue = -1, ke = P == null ? 0 : P.length; ++ue < ke; ) {
        var qe = P[ue];
        N(q, qe, L(qe), P);
      }
      return q;
    }
    function zt(P, N) {
      for (var L = -1, q = P == null ? 0 : P.length; ++L < q && N(P[L], L, P) !== !1; )
        ;
      return P;
    }
    function N0(P, N) {
      for (var L = P == null ? 0 : P.length; L-- && N(P[L], L, P) !== !1; )
        ;
      return P;
    }
    function gd(P, N) {
      for (var L = -1, q = P == null ? 0 : P.length; ++L < q; )
        if (!N(P[L], L, P))
          return !1;
      return !0;
    }
    function qn(P, N) {
      for (var L = -1, q = P == null ? 0 : P.length, ue = 0, ke = []; ++L < q; ) {
        var qe = P[L];
        N(qe, L, P) && (ke[ue++] = qe);
      }
      return ke;
    }
    function Wo(P, N) {
      var L = P == null ? 0 : P.length;
      return !!L && Jr(P, N, 0) > -1;
    }
    function Ya(P, N, L) {
      for (var q = -1, ue = P == null ? 0 : P.length; ++q < ue; )
        if (L(N, P[q]))
          return !0;
      return !1;
    }
    function ze(P, N) {
      for (var L = -1, q = P == null ? 0 : P.length, ue = Array(q); ++L < q; )
        ue[L] = N(P[L], L, P);
      return ue;
    }
    function Jn(P, N) {
      for (var L = -1, q = N.length, ue = P.length; ++L < q; )
        P[ue + L] = N[L];
      return P;
    }
    function Xa(P, N, L, q) {
      var ue = -1, ke = P == null ? 0 : P.length;
      for (q && ke && (L = P[++ue]); ++ue < ke; )
        L = N(L, P[ue], ue, P);
      return L;
    }
    function j0(P, N, L, q) {
      var ue = P == null ? 0 : P.length;
      for (q && ue && (L = P[--ue]); ue--; )
        L = N(L, P[ue], ue, P);
      return L;
    }
    function Za(P, N) {
      for (var L = -1, q = P == null ? 0 : P.length; ++L < q; )
        if (N(P[L], L, P))
          return !0;
      return !1;
    }
    var F0 = Ka("length");
    function z0(P) {
      return P.split("");
    }
    function H0(P) {
      return P.match(U) || [];
    }
    function md(P, N, L) {
      var q;
      return L(P, function(ue, ke, qe) {
        if (N(ue, ke, qe))
          return q = ke, !1;
      }), q;
    }
    function Uo(P, N, L, q) {
      for (var ue = P.length, ke = L + (q ? 1 : -1); q ? ke-- : ++ke < ue; )
        if (N(P[ke], ke, P))
          return ke;
      return -1;
    }
    function Jr(P, N, L) {
      return N === N ? J0(P, N, L) : Uo(P, vd, L);
    }
    function W0(P, N, L, q) {
      for (var ue = L - 1, ke = P.length; ++ue < ke; )
        if (q(P[ue], N))
          return ue;
      return -1;
    }
    function vd(P) {
      return P !== P;
    }
    function yd(P, N) {
      var L = P == null ? 0 : P.length;
      return L ? Ja(P, N) / L : fe;
    }
    function Ka(P) {
      return function(N) {
        return N == null ? n : N[P];
      };
    }
    function qa(P) {
      return function(N) {
        return P == null ? n : P[N];
      };
    }
    function bd(P, N, L, q, ue) {
      return ue(P, function(ke, qe, De) {
        L = q ? (q = !1, ke) : N(L, ke, qe, De);
      }), L;
    }
    function U0(P, N) {
      var L = P.length;
      for (P.sort(N); L--; )
        P[L] = P[L].value;
      return P;
    }
    function Ja(P, N) {
      for (var L, q = -1, ue = P.length; ++q < ue; ) {
        var ke = N(P[q]);
        ke !== n && (L = L === n ? ke : L + ke);
      }
      return L;
    }
    function Qa(P, N) {
      for (var L = -1, q = Array(P); ++L < P; )
        q[L] = N(L);
      return q;
    }
    function B0(P, N) {
      return ze(N, function(L) {
        return [L, P[L]];
      });
    }
    function wd(P) {
      return P && P.slice(0, Cd(P) + 1).replace(Bi, "");
    }
    function Tt(P) {
      return function(N) {
        return P(N);
      };
    }
    function ec(P, N) {
      return ze(N, function(L) {
        return P[L];
      });
    }
    function Vi(P, N) {
      return P.has(N);
    }
    function xd(P, N) {
      for (var L = -1, q = P.length; ++L < q && Jr(N, P[L], 0) > -1; )
        ;
      return L;
    }
    function Sd(P, N) {
      for (var L = P.length; L-- && Jr(N, P[L], 0) > -1; )
        ;
      return L;
    }
    function $0(P, N) {
      for (var L = P.length, q = 0; L--; )
        P[L] === N && ++q;
      return q;
    }
    var V0 = qa(k0), G0 = qa(A0);
    function Y0(P) {
      return "\\" + P0[P];
    }
    function X0(P, N) {
      return P == null ? n : P[N];
    }
    function Qr(P) {
      return C0.test(P);
    }
    function Z0(P) {
      return T0.test(P);
    }
    function K0(P) {
      for (var N, L = []; !(N = P.next()).done; )
        L.push(N.value);
      return L;
    }
    function tc(P) {
      var N = -1, L = Array(P.size);
      return P.forEach(function(q, ue) {
        L[++N] = [ue, q];
      }), L;
    }
    function _d(P, N) {
      return function(L) {
        return P(N(L));
      };
    }
    function Qn(P, N) {
      for (var L = -1, q = P.length, ue = 0, ke = []; ++L < q; ) {
        var qe = P[L];
        (qe === N || qe === p) && (P[L] = p, ke[ue++] = L);
      }
      return ke;
    }
    function Bo(P) {
      var N = -1, L = Array(P.size);
      return P.forEach(function(q) {
        L[++N] = q;
      }), L;
    }
    function q0(P) {
      var N = -1, L = Array(P.size);
      return P.forEach(function(q) {
        L[++N] = [q, q];
      }), L;
    }
    function J0(P, N, L) {
      for (var q = L - 1, ue = P.length; ++q < ue; )
        if (P[q] === N)
          return q;
      return -1;
    }
    function Q0(P, N, L) {
      for (var q = L + 1; q--; )
        if (P[q] === N)
          return q;
      return q;
    }
    function ei(P) {
      return Qr(P) ? tv(P) : F0(P);
    }
    function Kt(P) {
      return Qr(P) ? nv(P) : z0(P);
    }
    function Cd(P) {
      for (var N = P.length; N-- && La.test(P.charAt(N)); )
        ;
      return N;
    }
    var ev = qa(R0);
    function tv(P) {
      for (var N = $a.lastIndex = 0; $a.test(P); )
        ++N;
      return N;
    }
    function nv(P) {
      return P.match($a) || [];
    }
    function rv(P) {
      return P.match(_0) || [];
    }
    var iv = function P(N) {
      N = N == null ? rt : ti.defaults(rt.Object(), N, ti.pick(rt, E0));
      var L = N.Array, q = N.Date, ue = N.Error, ke = N.Function, qe = N.Math, De = N.Object, nc = N.RegExp, ov = N.String, Ht = N.TypeError, $o = L.prototype, sv = ke.prototype, ni = De.prototype, Vo = N["__core-js_shared__"], Go = sv.toString, Me = ni.hasOwnProperty, av = 0, Td = function() {
        var r = /[^.]+$/.exec(Vo && Vo.keys && Vo.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Yo = ni.toString, cv = Go.call(De), lv = rt._, uv = nc(
        "^" + Go.call(Me).replace(Kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Xo = cd ? N.Buffer : n, er = N.Symbol, Zo = N.Uint8Array, Ed = Xo ? Xo.allocUnsafe : n, Ko = _d(De.getPrototypeOf, De), Id = De.create, kd = ni.propertyIsEnumerable, qo = $o.splice, Ad = er ? er.isConcatSpreadable : n, Gi = er ? er.iterator : n, _r = er ? er.toStringTag : n, Jo = function() {
        try {
          var r = kr(De, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), dv = N.clearTimeout !== rt.clearTimeout && N.clearTimeout, fv = q && q.now !== rt.Date.now && q.now, hv = N.setTimeout !== rt.setTimeout && N.setTimeout, Qo = qe.ceil, es = qe.floor, rc = De.getOwnPropertySymbols, pv = Xo ? Xo.isBuffer : n, Rd = N.isFinite, gv = $o.join, mv = _d(De.keys, De), Je = qe.max, at = qe.min, vv = q.now, yv = N.parseInt, Pd = qe.random, bv = $o.reverse, ic = kr(N, "DataView"), Yi = kr(N, "Map"), oc = kr(N, "Promise"), ri = kr(N, "Set"), Xi = kr(N, "WeakMap"), Zi = kr(De, "create"), ts = Xi && new Xi(), ii = {}, wv = Ar(ic), xv = Ar(Yi), Sv = Ar(oc), _v = Ar(ri), Cv = Ar(Xi), ns = er ? er.prototype : n, Ki = ns ? ns.valueOf : n, Od = ns ? ns.toString : n;
      function y(r) {
        if (Ve(r) && !de(r) && !(r instanceof Se)) {
          if (r instanceof Wt)
            return r;
          if (Me.call(r, "__wrapped__"))
            return Df(r);
        }
        return new Wt(r);
      }
      var oi = /* @__PURE__ */ function() {
        function r() {
        }
        return function(i) {
          if (!Be(i))
            return {};
          if (Id)
            return Id(i);
          r.prototype = i;
          var c = new r();
          return r.prototype = n, c;
        };
      }();
      function rs() {
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
        escape: jo,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Oa,
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
      }, y.prototype = rs.prototype, y.prototype.constructor = y, Wt.prototype = oi(rs.prototype), Wt.prototype.constructor = Wt;
      function Se(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Oe, this.__views__ = [];
      }
      function Tv() {
        var r = new Se(this.__wrapped__);
        return r.__actions__ = vt(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = vt(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = vt(this.__views__), r;
      }
      function Ev() {
        if (this.__filtered__) {
          var r = new Se(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function Iv() {
        var r = this.__wrapped__.value(), i = this.__dir__, c = de(r), d = i < 0, g = c ? r.length : 0, x = z2(0, g, this.__views__), C = x.start, A = x.end, M = A - C, z = d ? A : C - 1, H = this.__iteratees__, W = H.length, X = 0, te = at(M, this.__takeCount__);
        if (!c || !d && g == M && te == M)
          return nf(r, this.__actions__);
        var oe = [];
        e:
          for (; M-- && X < te; ) {
            z += i;
            for (var ge = -1, se = r[z]; ++ge < W; ) {
              var be = H[ge], Ee = be.iteratee, kt = be.type, pt = Ee(se);
              if (kt == Te)
                se = pt;
              else if (!pt) {
                if (kt == ne)
                  continue e;
                break e;
              }
            }
            oe[X++] = se;
          }
        return oe;
      }
      Se.prototype = oi(rs.prototype), Se.prototype.constructor = Se;
      function Cr(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var d = r[i];
          this.set(d[0], d[1]);
        }
      }
      function kv() {
        this.__data__ = Zi ? Zi(null) : {}, this.size = 0;
      }
      function Av(r) {
        var i = this.has(r) && delete this.__data__[r];
        return this.size -= i ? 1 : 0, i;
      }
      function Rv(r) {
        var i = this.__data__;
        if (Zi) {
          var c = i[r];
          return c === f ? n : c;
        }
        return Me.call(i, r) ? i[r] : n;
      }
      function Pv(r) {
        var i = this.__data__;
        return Zi ? i[r] !== n : Me.call(i, r);
      }
      function Ov(r, i) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = Zi && i === n ? f : i, this;
      }
      Cr.prototype.clear = kv, Cr.prototype.delete = Av, Cr.prototype.get = Rv, Cr.prototype.has = Pv, Cr.prototype.set = Ov;
      function An(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var d = r[i];
          this.set(d[0], d[1]);
        }
      }
      function Mv() {
        this.__data__ = [], this.size = 0;
      }
      function Dv(r) {
        var i = this.__data__, c = is(i, r);
        if (c < 0)
          return !1;
        var d = i.length - 1;
        return c == d ? i.pop() : qo.call(i, c, 1), --this.size, !0;
      }
      function Lv(r) {
        var i = this.__data__, c = is(i, r);
        return c < 0 ? n : i[c][1];
      }
      function Nv(r) {
        return is(this.__data__, r) > -1;
      }
      function jv(r, i) {
        var c = this.__data__, d = is(c, r);
        return d < 0 ? (++this.size, c.push([r, i])) : c[d][1] = i, this;
      }
      An.prototype.clear = Mv, An.prototype.delete = Dv, An.prototype.get = Lv, An.prototype.has = Nv, An.prototype.set = jv;
      function Rn(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++i < c; ) {
          var d = r[i];
          this.set(d[0], d[1]);
        }
      }
      function Fv() {
        this.size = 0, this.__data__ = {
          hash: new Cr(),
          map: new (Yi || An)(),
          string: new Cr()
        };
      }
      function zv(r) {
        var i = ms(this, r).delete(r);
        return this.size -= i ? 1 : 0, i;
      }
      function Hv(r) {
        return ms(this, r).get(r);
      }
      function Wv(r) {
        return ms(this, r).has(r);
      }
      function Uv(r, i) {
        var c = ms(this, r), d = c.size;
        return c.set(r, i), this.size += c.size == d ? 0 : 1, this;
      }
      Rn.prototype.clear = Fv, Rn.prototype.delete = zv, Rn.prototype.get = Hv, Rn.prototype.has = Wv, Rn.prototype.set = Uv;
      function Tr(r) {
        var i = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new Rn(); ++i < c; )
          this.add(r[i]);
      }
      function Bv(r) {
        return this.__data__.set(r, f), this;
      }
      function $v(r) {
        return this.__data__.has(r);
      }
      Tr.prototype.add = Tr.prototype.push = Bv, Tr.prototype.has = $v;
      function qt(r) {
        var i = this.__data__ = new An(r);
        this.size = i.size;
      }
      function Vv() {
        this.__data__ = new An(), this.size = 0;
      }
      function Gv(r) {
        var i = this.__data__, c = i.delete(r);
        return this.size = i.size, c;
      }
      function Yv(r) {
        return this.__data__.get(r);
      }
      function Xv(r) {
        return this.__data__.has(r);
      }
      function Zv(r, i) {
        var c = this.__data__;
        if (c instanceof An) {
          var d = c.__data__;
          if (!Yi || d.length < s - 1)
            return d.push([r, i]), this.size = ++c.size, this;
          c = this.__data__ = new Rn(d);
        }
        return c.set(r, i), this.size = c.size, this;
      }
      qt.prototype.clear = Vv, qt.prototype.delete = Gv, qt.prototype.get = Yv, qt.prototype.has = Xv, qt.prototype.set = Zv;
      function Md(r, i) {
        var c = de(r), d = !c && Rr(r), g = !c && !d && or(r), x = !c && !d && !g && li(r), C = c || d || g || x, A = C ? Qa(r.length, ov) : [], M = A.length;
        for (var z in r)
          (i || Me.call(r, z)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
          (z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          g && (z == "offset" || z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          x && (z == "buffer" || z == "byteLength" || z == "byteOffset") || // Skip index properties.
          Dn(z, M))) && A.push(z);
        return A;
      }
      function Dd(r) {
        var i = r.length;
        return i ? r[mc(0, i - 1)] : n;
      }
      function Kv(r, i) {
        return vs(vt(r), Er(i, 0, r.length));
      }
      function qv(r) {
        return vs(vt(r));
      }
      function sc(r, i, c) {
        (c !== n && !Jt(r[i], c) || c === n && !(i in r)) && Pn(r, i, c);
      }
      function qi(r, i, c) {
        var d = r[i];
        (!(Me.call(r, i) && Jt(d, c)) || c === n && !(i in r)) && Pn(r, i, c);
      }
      function is(r, i) {
        for (var c = r.length; c--; )
          if (Jt(r[c][0], i))
            return c;
        return -1;
      }
      function Jv(r, i, c, d) {
        return tr(r, function(g, x, C) {
          i(d, g, c(g), C);
        }), d;
      }
      function Ld(r, i) {
        return r && un(i, tt(i), r);
      }
      function Qv(r, i) {
        return r && un(i, bt(i), r);
      }
      function Pn(r, i, c) {
        i == "__proto__" && Jo ? Jo(r, i, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : r[i] = c;
      }
      function ac(r, i) {
        for (var c = -1, d = i.length, g = L(d), x = r == null; ++c < d; )
          g[c] = x ? n : Wc(r, i[c]);
        return g;
      }
      function Er(r, i, c) {
        return r === r && (c !== n && (r = r <= c ? r : c), i !== n && (r = r >= i ? r : i)), r;
      }
      function Ut(r, i, c, d, g, x) {
        var C, A = i & v, M = i & b, z = i & S;
        if (c && (C = g ? c(r, d, g, x) : c(r)), C !== n)
          return C;
        if (!Be(r))
          return r;
        var H = de(r);
        if (H) {
          if (C = W2(r), !A)
            return vt(r, C);
        } else {
          var W = ct(r), X = W == Tn || W == En;
          if (or(r))
            return sf(r, A);
          if (W == jt || W == sn || X && !g) {
            if (C = M || X ? {} : Tf(r), !A)
              return M ? R2(r, Qv(C, r)) : A2(r, Ld(C, r));
          } else {
            if (!Le[W])
              return g ? r : {};
            C = U2(r, W, A);
          }
        }
        x || (x = new qt());
        var te = x.get(r);
        if (te)
          return te;
        x.set(r, C), eh(r) ? r.forEach(function(se) {
          C.add(Ut(se, i, c, se, r, x));
        }) : Jf(r) && r.forEach(function(se, be) {
          C.set(be, Ut(se, i, c, be, r, x));
        });
        var oe = z ? M ? Ic : Ec : M ? bt : tt, ge = H ? n : oe(r);
        return zt(ge || r, function(se, be) {
          ge && (be = se, se = r[be]), qi(C, be, Ut(se, i, c, be, r, x));
        }), C;
      }
      function e2(r) {
        var i = tt(r);
        return function(c) {
          return Nd(c, r, i);
        };
      }
      function Nd(r, i, c) {
        var d = c.length;
        if (r == null)
          return !d;
        for (r = De(r); d--; ) {
          var g = c[d], x = i[g], C = r[g];
          if (C === n && !(g in r) || !x(C))
            return !1;
        }
        return !0;
      }
      function jd(r, i, c) {
        if (typeof r != "function")
          throw new Ht(l);
        return io(function() {
          r.apply(n, c);
        }, i);
      }
      function Ji(r, i, c, d) {
        var g = -1, x = Wo, C = !0, A = r.length, M = [], z = i.length;
        if (!A)
          return M;
        c && (i = ze(i, Tt(c))), d ? (x = Ya, C = !1) : i.length >= s && (x = Vi, C = !1, i = new Tr(i));
        e:
          for (; ++g < A; ) {
            var H = r[g], W = c == null ? H : c(H);
            if (H = d || H !== 0 ? H : 0, C && W === W) {
              for (var X = z; X--; )
                if (i[X] === W)
                  continue e;
              M.push(H);
            } else x(i, W, d) || M.push(H);
          }
        return M;
      }
      var tr = df(ln), Fd = df(lc, !0);
      function t2(r, i) {
        var c = !0;
        return tr(r, function(d, g, x) {
          return c = !!i(d, g, x), c;
        }), c;
      }
      function os(r, i, c) {
        for (var d = -1, g = r.length; ++d < g; ) {
          var x = r[d], C = i(x);
          if (C != null && (A === n ? C === C && !It(C) : c(C, A)))
            var A = C, M = x;
        }
        return M;
      }
      function n2(r, i, c, d) {
        var g = r.length;
        for (c = he(c), c < 0 && (c = -c > g ? 0 : g + c), d = d === n || d > g ? g : he(d), d < 0 && (d += g), d = c > d ? 0 : nh(d); c < d; )
          r[c++] = i;
        return r;
      }
      function zd(r, i) {
        var c = [];
        return tr(r, function(d, g, x) {
          i(d, g, x) && c.push(d);
        }), c;
      }
      function it(r, i, c, d, g) {
        var x = -1, C = r.length;
        for (c || (c = $2), g || (g = []); ++x < C; ) {
          var A = r[x];
          i > 0 && c(A) ? i > 1 ? it(A, i - 1, c, d, g) : Jn(g, A) : d || (g[g.length] = A);
        }
        return g;
      }
      var cc = ff(), Hd = ff(!0);
      function ln(r, i) {
        return r && cc(r, i, tt);
      }
      function lc(r, i) {
        return r && Hd(r, i, tt);
      }
      function ss(r, i) {
        return qn(i, function(c) {
          return Ln(r[c]);
        });
      }
      function Ir(r, i) {
        i = rr(i, r);
        for (var c = 0, d = i.length; r != null && c < d; )
          r = r[dn(i[c++])];
        return c && c == d ? r : n;
      }
      function Wd(r, i, c) {
        var d = i(r);
        return de(r) ? d : Jn(d, c(r));
      }
      function ft(r) {
        return r == null ? r === n ? Ra : wr : _r && _r in De(r) ? F2(r) : q2(r);
      }
      function uc(r, i) {
        return r > i;
      }
      function r2(r, i) {
        return r != null && Me.call(r, i);
      }
      function i2(r, i) {
        return r != null && i in De(r);
      }
      function o2(r, i, c) {
        return r >= at(i, c) && r < Je(i, c);
      }
      function dc(r, i, c) {
        for (var d = c ? Ya : Wo, g = r[0].length, x = r.length, C = x, A = L(x), M = 1 / 0, z = []; C--; ) {
          var H = r[C];
          C && i && (H = ze(H, Tt(i))), M = at(H.length, M), A[C] = !c && (i || g >= 120 && H.length >= 120) ? new Tr(C && H) : n;
        }
        H = r[0];
        var W = -1, X = A[0];
        e:
          for (; ++W < g && z.length < M; ) {
            var te = H[W], oe = i ? i(te) : te;
            if (te = c || te !== 0 ? te : 0, !(X ? Vi(X, oe) : d(z, oe, c))) {
              for (C = x; --C; ) {
                var ge = A[C];
                if (!(ge ? Vi(ge, oe) : d(r[C], oe, c)))
                  continue e;
              }
              X && X.push(oe), z.push(te);
            }
          }
        return z;
      }
      function s2(r, i, c, d) {
        return ln(r, function(g, x, C) {
          i(d, c(g), x, C);
        }), d;
      }
      function Qi(r, i, c) {
        i = rr(i, r), r = Af(r, i);
        var d = r == null ? r : r[dn($t(i))];
        return d == null ? n : Ct(d, r, c);
      }
      function Ud(r) {
        return Ve(r) && ft(r) == sn;
      }
      function a2(r) {
        return Ve(r) && ft(r) == Xn;
      }
      function c2(r) {
        return Ve(r) && ft(r) == Xt;
      }
      function eo(r, i, c, d, g) {
        return r === i ? !0 : r == null || i == null || !Ve(r) && !Ve(i) ? r !== r && i !== i : l2(r, i, c, d, eo, g);
      }
      function l2(r, i, c, d, g, x) {
        var C = de(r), A = de(i), M = C ? an : ct(r), z = A ? an : ct(i);
        M = M == sn ? jt : M, z = z == sn ? jt : z;
        var H = M == jt, W = z == jt, X = M == z;
        if (X && or(r)) {
          if (!or(i))
            return !1;
          C = !0, H = !1;
        }
        if (X && !H)
          return x || (x = new qt()), C || li(r) ? Sf(r, i, c, d, g, x) : N2(r, i, M, c, d, g, x);
        if (!(c & T)) {
          var te = H && Me.call(r, "__wrapped__"), oe = W && Me.call(i, "__wrapped__");
          if (te || oe) {
            var ge = te ? r.value() : r, se = oe ? i.value() : i;
            return x || (x = new qt()), g(ge, se, c, d, x);
          }
        }
        return X ? (x || (x = new qt()), j2(r, i, c, d, g, x)) : !1;
      }
      function u2(r) {
        return Ve(r) && ct(r) == St;
      }
      function fc(r, i, c, d) {
        var g = c.length, x = g, C = !d;
        if (r == null)
          return !x;
        for (r = De(r); g--; ) {
          var A = c[g];
          if (C && A[2] ? A[1] !== r[A[0]] : !(A[0] in r))
            return !1;
        }
        for (; ++g < x; ) {
          A = c[g];
          var M = A[0], z = r[M], H = A[1];
          if (C && A[2]) {
            if (z === n && !(M in r))
              return !1;
          } else {
            var W = new qt();
            if (d)
              var X = d(z, H, M, r, i, W);
            if (!(X === n ? eo(H, z, T | _, d, W) : X))
              return !1;
          }
        }
        return !0;
      }
      function Bd(r) {
        if (!Be(r) || G2(r))
          return !1;
        var i = Ln(r) ? uv : nt;
        return i.test(Ar(r));
      }
      function d2(r) {
        return Ve(r) && ft(r) == xr;
      }
      function f2(r) {
        return Ve(r) && ct(r) == _t;
      }
      function h2(r) {
        return Ve(r) && _s(r.length) && !!je[ft(r)];
      }
      function $d(r) {
        return typeof r == "function" ? r : r == null ? wt : typeof r == "object" ? de(r) ? Yd(r[0], r[1]) : Gd(r) : hh(r);
      }
      function hc(r) {
        if (!ro(r))
          return mv(r);
        var i = [];
        for (var c in De(r))
          Me.call(r, c) && c != "constructor" && i.push(c);
        return i;
      }
      function p2(r) {
        if (!Be(r))
          return K2(r);
        var i = ro(r), c = [];
        for (var d in r)
          d == "constructor" && (i || !Me.call(r, d)) || c.push(d);
        return c;
      }
      function pc(r, i) {
        return r < i;
      }
      function Vd(r, i) {
        var c = -1, d = yt(r) ? L(r.length) : [];
        return tr(r, function(g, x, C) {
          d[++c] = i(g, x, C);
        }), d;
      }
      function Gd(r) {
        var i = Ac(r);
        return i.length == 1 && i[0][2] ? If(i[0][0], i[0][1]) : function(c) {
          return c === r || fc(c, r, i);
        };
      }
      function Yd(r, i) {
        return Pc(r) && Ef(i) ? If(dn(r), i) : function(c) {
          var d = Wc(c, r);
          return d === n && d === i ? Uc(c, r) : eo(i, d, T | _);
        };
      }
      function as(r, i, c, d, g) {
        r !== i && cc(i, function(x, C) {
          if (g || (g = new qt()), Be(x))
            g2(r, i, C, c, as, d, g);
          else {
            var A = d ? d(Mc(r, C), x, C + "", r, i, g) : n;
            A === n && (A = x), sc(r, C, A);
          }
        }, bt);
      }
      function g2(r, i, c, d, g, x, C) {
        var A = Mc(r, c), M = Mc(i, c), z = C.get(M);
        if (z) {
          sc(r, c, z);
          return;
        }
        var H = x ? x(A, M, c + "", r, i, C) : n, W = H === n;
        if (W) {
          var X = de(M), te = !X && or(M), oe = !X && !te && li(M);
          H = M, X || te || oe ? de(A) ? H = A : Ge(A) ? H = vt(A) : te ? (W = !1, H = sf(M, !0)) : oe ? (W = !1, H = af(M, !0)) : H = [] : oo(M) || Rr(M) ? (H = A, Rr(A) ? H = rh(A) : (!Be(A) || Ln(A)) && (H = Tf(M))) : W = !1;
        }
        W && (C.set(M, H), g(H, M, d, x, C), C.delete(M)), sc(r, c, H);
      }
      function Xd(r, i) {
        var c = r.length;
        if (c)
          return i += i < 0 ? c : 0, Dn(i, c) ? r[i] : n;
      }
      function Zd(r, i, c) {
        i.length ? i = ze(i, function(x) {
          return de(x) ? function(C) {
            return Ir(C, x.length === 1 ? x[0] : x);
          } : x;
        }) : i = [wt];
        var d = -1;
        i = ze(i, Tt(ie()));
        var g = Vd(r, function(x, C, A) {
          var M = ze(i, function(z) {
            return z(x);
          });
          return { criteria: M, index: ++d, value: x };
        });
        return U0(g, function(x, C) {
          return k2(x, C, c);
        });
      }
      function m2(r, i) {
        return Kd(r, i, function(c, d) {
          return Uc(r, d);
        });
      }
      function Kd(r, i, c) {
        for (var d = -1, g = i.length, x = {}; ++d < g; ) {
          var C = i[d], A = Ir(r, C);
          c(A, C) && to(x, rr(C, r), A);
        }
        return x;
      }
      function v2(r) {
        return function(i) {
          return Ir(i, r);
        };
      }
      function gc(r, i, c, d) {
        var g = d ? W0 : Jr, x = -1, C = i.length, A = r;
        for (r === i && (i = vt(i)), c && (A = ze(r, Tt(c))); ++x < C; )
          for (var M = 0, z = i[x], H = c ? c(z) : z; (M = g(A, H, M, d)) > -1; )
            A !== r && qo.call(A, M, 1), qo.call(r, M, 1);
        return r;
      }
      function qd(r, i) {
        for (var c = r ? i.length : 0, d = c - 1; c--; ) {
          var g = i[c];
          if (c == d || g !== x) {
            var x = g;
            Dn(g) ? qo.call(r, g, 1) : bc(r, g);
          }
        }
        return r;
      }
      function mc(r, i) {
        return r + es(Pd() * (i - r + 1));
      }
      function y2(r, i, c, d) {
        for (var g = -1, x = Je(Qo((i - r) / (c || 1)), 0), C = L(x); x--; )
          C[d ? x : ++g] = r, r += c;
        return C;
      }
      function vc(r, i) {
        var c = "";
        if (!r || i < 1 || i > ee)
          return c;
        do
          i % 2 && (c += r), i = es(i / 2), i && (r += r);
        while (i);
        return c;
      }
      function me(r, i) {
        return Dc(kf(r, i, wt), r + "");
      }
      function b2(r) {
        return Dd(ui(r));
      }
      function w2(r, i) {
        var c = ui(r);
        return vs(c, Er(i, 0, c.length));
      }
      function to(r, i, c, d) {
        if (!Be(r))
          return r;
        i = rr(i, r);
        for (var g = -1, x = i.length, C = x - 1, A = r; A != null && ++g < x; ) {
          var M = dn(i[g]), z = c;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return r;
          if (g != C) {
            var H = A[M];
            z = d ? d(H, M, A) : n, z === n && (z = Be(H) ? H : Dn(i[g + 1]) ? [] : {});
          }
          qi(A, M, z), A = A[M];
        }
        return r;
      }
      var Jd = ts ? function(r, i) {
        return ts.set(r, i), r;
      } : wt, x2 = Jo ? function(r, i) {
        return Jo(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: $c(i),
          writable: !0
        });
      } : wt;
      function S2(r) {
        return vs(ui(r));
      }
      function Bt(r, i, c) {
        var d = -1, g = r.length;
        i < 0 && (i = -i > g ? 0 : g + i), c = c > g ? g : c, c < 0 && (c += g), g = i > c ? 0 : c - i >>> 0, i >>>= 0;
        for (var x = L(g); ++d < g; )
          x[d] = r[d + i];
        return x;
      }
      function _2(r, i) {
        var c;
        return tr(r, function(d, g, x) {
          return c = i(d, g, x), !c;
        }), !!c;
      }
      function cs(r, i, c) {
        var d = 0, g = r == null ? d : r.length;
        if (typeof i == "number" && i === i && g <= $n) {
          for (; d < g; ) {
            var x = d + g >>> 1, C = r[x];
            C !== null && !It(C) && (c ? C <= i : C < i) ? d = x + 1 : g = x;
          }
          return g;
        }
        return yc(r, i, wt, c);
      }
      function yc(r, i, c, d) {
        var g = 0, x = r == null ? 0 : r.length;
        if (x === 0)
          return 0;
        i = c(i);
        for (var C = i !== i, A = i === null, M = It(i), z = i === n; g < x; ) {
          var H = es((g + x) / 2), W = c(r[H]), X = W !== n, te = W === null, oe = W === W, ge = It(W);
          if (C)
            var se = d || oe;
          else z ? se = oe && (d || X) : A ? se = oe && X && (d || !te) : M ? se = oe && X && !te && (d || !ge) : te || ge ? se = !1 : se = d ? W <= i : W < i;
          se ? g = H + 1 : x = H;
        }
        return at(x, Cn);
      }
      function Qd(r, i) {
        for (var c = -1, d = r.length, g = 0, x = []; ++c < d; ) {
          var C = r[c], A = i ? i(C) : C;
          if (!c || !Jt(A, M)) {
            var M = A;
            x[g++] = C === 0 ? 0 : C;
          }
        }
        return x;
      }
      function ef(r) {
        return typeof r == "number" ? r : It(r) ? fe : +r;
      }
      function Et(r) {
        if (typeof r == "string")
          return r;
        if (de(r))
          return ze(r, Et) + "";
        if (It(r))
          return Od ? Od.call(r) : "";
        var i = r + "";
        return i == "0" && 1 / r == -1 / 0 ? "-0" : i;
      }
      function nr(r, i, c) {
        var d = -1, g = Wo, x = r.length, C = !0, A = [], M = A;
        if (c)
          C = !1, g = Ya;
        else if (x >= s) {
          var z = i ? null : D2(r);
          if (z)
            return Bo(z);
          C = !1, g = Vi, M = new Tr();
        } else
          M = i ? [] : A;
        e:
          for (; ++d < x; ) {
            var H = r[d], W = i ? i(H) : H;
            if (H = c || H !== 0 ? H : 0, C && W === W) {
              for (var X = M.length; X--; )
                if (M[X] === W)
                  continue e;
              i && M.push(W), A.push(H);
            } else g(M, W, c) || (M !== A && M.push(W), A.push(H));
          }
        return A;
      }
      function bc(r, i) {
        return i = rr(i, r), r = Af(r, i), r == null || delete r[dn($t(i))];
      }
      function tf(r, i, c, d) {
        return to(r, i, c(Ir(r, i)), d);
      }
      function ls(r, i, c, d) {
        for (var g = r.length, x = d ? g : -1; (d ? x-- : ++x < g) && i(r[x], x, r); )
          ;
        return c ? Bt(r, d ? 0 : x, d ? x + 1 : g) : Bt(r, d ? x + 1 : 0, d ? g : x);
      }
      function nf(r, i) {
        var c = r;
        return c instanceof Se && (c = c.value()), Xa(i, function(d, g) {
          return g.func.apply(g.thisArg, Jn([d], g.args));
        }, c);
      }
      function wc(r, i, c) {
        var d = r.length;
        if (d < 2)
          return d ? nr(r[0]) : [];
        for (var g = -1, x = L(d); ++g < d; )
          for (var C = r[g], A = -1; ++A < d; )
            A != g && (x[g] = Ji(x[g] || C, r[A], i, c));
        return nr(it(x, 1), i, c);
      }
      function rf(r, i, c) {
        for (var d = -1, g = r.length, x = i.length, C = {}; ++d < g; ) {
          var A = d < x ? i[d] : n;
          c(C, r[d], A);
        }
        return C;
      }
      function xc(r) {
        return Ge(r) ? r : [];
      }
      function Sc(r) {
        return typeof r == "function" ? r : wt;
      }
      function rr(r, i) {
        return de(r) ? r : Pc(r, i) ? [r] : Mf(Pe(r));
      }
      var C2 = me;
      function ir(r, i, c) {
        var d = r.length;
        return c = c === n ? d : c, !i && c >= d ? r : Bt(r, i, c);
      }
      var of = dv || function(r) {
        return rt.clearTimeout(r);
      };
      function sf(r, i) {
        if (i)
          return r.slice();
        var c = r.length, d = Ed ? Ed(c) : new r.constructor(c);
        return r.copy(d), d;
      }
      function _c(r) {
        var i = new r.constructor(r.byteLength);
        return new Zo(i).set(new Zo(r)), i;
      }
      function T2(r, i) {
        var c = i ? _c(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.byteLength);
      }
      function E2(r) {
        var i = new r.constructor(r.source, Re.exec(r));
        return i.lastIndex = r.lastIndex, i;
      }
      function I2(r) {
        return Ki ? De(Ki.call(r)) : {};
      }
      function af(r, i) {
        var c = i ? _c(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.length);
      }
      function cf(r, i) {
        if (r !== i) {
          var c = r !== n, d = r === null, g = r === r, x = It(r), C = i !== n, A = i === null, M = i === i, z = It(i);
          if (!A && !z && !x && r > i || x && C && M && !A && !z || d && C && M || !c && M || !g)
            return 1;
          if (!d && !x && !z && r < i || z && c && g && !d && !x || A && c && g || !C && g || !M)
            return -1;
        }
        return 0;
      }
      function k2(r, i, c) {
        for (var d = -1, g = r.criteria, x = i.criteria, C = g.length, A = c.length; ++d < C; ) {
          var M = cf(g[d], x[d]);
          if (M) {
            if (d >= A)
              return M;
            var z = c[d];
            return M * (z == "desc" ? -1 : 1);
          }
        }
        return r.index - i.index;
      }
      function lf(r, i, c, d) {
        for (var g = -1, x = r.length, C = c.length, A = -1, M = i.length, z = Je(x - C, 0), H = L(M + z), W = !d; ++A < M; )
          H[A] = i[A];
        for (; ++g < C; )
          (W || g < x) && (H[c[g]] = r[g]);
        for (; z--; )
          H[A++] = r[g++];
        return H;
      }
      function uf(r, i, c, d) {
        for (var g = -1, x = r.length, C = -1, A = c.length, M = -1, z = i.length, H = Je(x - A, 0), W = L(H + z), X = !d; ++g < H; )
          W[g] = r[g];
        for (var te = g; ++M < z; )
          W[te + M] = i[M];
        for (; ++C < A; )
          (X || g < x) && (W[te + c[C]] = r[g++]);
        return W;
      }
      function vt(r, i) {
        var c = -1, d = r.length;
        for (i || (i = L(d)); ++c < d; )
          i[c] = r[c];
        return i;
      }
      function un(r, i, c, d) {
        var g = !c;
        c || (c = {});
        for (var x = -1, C = i.length; ++x < C; ) {
          var A = i[x], M = d ? d(c[A], r[A], A, c, r) : n;
          M === n && (M = r[A]), g ? Pn(c, A, M) : qi(c, A, M);
        }
        return c;
      }
      function A2(r, i) {
        return un(r, Rc(r), i);
      }
      function R2(r, i) {
        return un(r, _f(r), i);
      }
      function us(r, i) {
        return function(c, d) {
          var g = de(c) ? L0 : Jv, x = i ? i() : {};
          return g(c, r, ie(d, 2), x);
        };
      }
      function si(r) {
        return me(function(i, c) {
          var d = -1, g = c.length, x = g > 1 ? c[g - 1] : n, C = g > 2 ? c[2] : n;
          for (x = r.length > 3 && typeof x == "function" ? (g--, x) : n, C && ht(c[0], c[1], C) && (x = g < 3 ? n : x, g = 1), i = De(i); ++d < g; ) {
            var A = c[d];
            A && r(i, A, d, x);
          }
          return i;
        });
      }
      function df(r, i) {
        return function(c, d) {
          if (c == null)
            return c;
          if (!yt(c))
            return r(c, d);
          for (var g = c.length, x = i ? g : -1, C = De(c); (i ? x-- : ++x < g) && d(C[x], x, C) !== !1; )
            ;
          return c;
        };
      }
      function ff(r) {
        return function(i, c, d) {
          for (var g = -1, x = De(i), C = d(i), A = C.length; A--; ) {
            var M = C[r ? A : ++g];
            if (c(x[M], M, x) === !1)
              break;
          }
          return i;
        };
      }
      function P2(r, i, c) {
        var d = i & E, g = no(r);
        function x() {
          var C = this && this !== rt && this instanceof x ? g : r;
          return C.apply(d ? c : this, arguments);
        }
        return x;
      }
      function hf(r) {
        return function(i) {
          i = Pe(i);
          var c = Qr(i) ? Kt(i) : n, d = c ? c[0] : i.charAt(0), g = c ? ir(c, 1).join("") : i.slice(1);
          return d[r]() + g;
        };
      }
      function ai(r) {
        return function(i) {
          return Xa(dh(uh(i).replace(x0, "")), r, "");
        };
      }
      function no(r) {
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
          var c = oi(r.prototype), d = r.apply(c, i);
          return Be(d) ? d : c;
        };
      }
      function O2(r, i, c) {
        var d = no(r);
        function g() {
          for (var x = arguments.length, C = L(x), A = x, M = ci(g); A--; )
            C[A] = arguments[A];
          var z = x < 3 && C[0] !== M && C[x - 1] !== M ? [] : Qn(C, M);
          if (x -= z.length, x < c)
            return yf(
              r,
              i,
              ds,
              g.placeholder,
              n,
              C,
              z,
              n,
              n,
              c - x
            );
          var H = this && this !== rt && this instanceof g ? d : r;
          return Ct(H, this, C);
        }
        return g;
      }
      function pf(r) {
        return function(i, c, d) {
          var g = De(i);
          if (!yt(i)) {
            var x = ie(c, 3);
            i = tt(i), c = function(A) {
              return x(g[A], A, g);
            };
          }
          var C = r(i, c, d);
          return C > -1 ? g[x ? i[C] : C] : n;
        };
      }
      function gf(r) {
        return Mn(function(i) {
          var c = i.length, d = c, g = Wt.prototype.thru;
          for (r && i.reverse(); d--; ) {
            var x = i[d];
            if (typeof x != "function")
              throw new Ht(l);
            if (g && !C && gs(x) == "wrapper")
              var C = new Wt([], !0);
          }
          for (d = C ? d : c; ++d < c; ) {
            x = i[d];
            var A = gs(x), M = A == "wrapper" ? kc(x) : n;
            M && Oc(M[0]) && M[1] == (F | O | j | V) && !M[4].length && M[9] == 1 ? C = C[gs(M[0])].apply(C, M[3]) : C = x.length == 1 && Oc(x) ? C[A]() : C.thru(x);
          }
          return function() {
            var z = arguments, H = z[0];
            if (C && z.length == 1 && de(H))
              return C.plant(H).value();
            for (var W = 0, X = c ? i[W].apply(this, z) : H; ++W < c; )
              X = i[W].call(this, X);
            return X;
          };
        });
      }
      function ds(r, i, c, d, g, x, C, A, M, z) {
        var H = i & F, W = i & E, X = i & k, te = i & (O | D), oe = i & G, ge = X ? n : no(r);
        function se() {
          for (var be = arguments.length, Ee = L(be), kt = be; kt--; )
            Ee[kt] = arguments[kt];
          if (te)
            var pt = ci(se), At = $0(Ee, pt);
          if (d && (Ee = lf(Ee, d, g, te)), x && (Ee = uf(Ee, x, C, te)), be -= At, te && be < z) {
            var Ye = Qn(Ee, pt);
            return yf(
              r,
              i,
              ds,
              se.placeholder,
              c,
              Ee,
              Ye,
              A,
              M,
              z - be
            );
          }
          var Qt = W ? c : this, jn = X ? Qt[r] : r;
          return be = Ee.length, A ? Ee = J2(Ee, A) : oe && be > 1 && Ee.reverse(), H && M < be && (Ee.length = M), this && this !== rt && this instanceof se && (jn = ge || no(jn)), jn.apply(Qt, Ee);
        }
        return se;
      }
      function mf(r, i) {
        return function(c, d) {
          return s2(c, r, i(d), {});
        };
      }
      function fs(r, i) {
        return function(c, d) {
          var g;
          if (c === n && d === n)
            return i;
          if (c !== n && (g = c), d !== n) {
            if (g === n)
              return d;
            typeof c == "string" || typeof d == "string" ? (c = Et(c), d = Et(d)) : (c = ef(c), d = ef(d)), g = r(c, d);
          }
          return g;
        };
      }
      function Cc(r) {
        return Mn(function(i) {
          return i = ze(i, Tt(ie())), me(function(c) {
            var d = this;
            return r(i, function(g) {
              return Ct(g, d, c);
            });
          });
        });
      }
      function hs(r, i) {
        i = i === n ? " " : Et(i);
        var c = i.length;
        if (c < 2)
          return c ? vc(i, r) : i;
        var d = vc(i, Qo(r / ei(i)));
        return Qr(i) ? ir(Kt(d), 0, r).join("") : d.slice(0, r);
      }
      function M2(r, i, c, d) {
        var g = i & E, x = no(r);
        function C() {
          for (var A = -1, M = arguments.length, z = -1, H = d.length, W = L(H + M), X = this && this !== rt && this instanceof C ? x : r; ++z < H; )
            W[z] = d[z];
          for (; M--; )
            W[z++] = arguments[++A];
          return Ct(X, g ? c : this, W);
        }
        return C;
      }
      function vf(r) {
        return function(i, c, d) {
          return d && typeof d != "number" && ht(i, c, d) && (c = d = n), i = Nn(i), c === n ? (c = i, i = 0) : c = Nn(c), d = d === n ? i < c ? 1 : -1 : Nn(d), y2(i, c, d, r);
        };
      }
      function ps(r) {
        return function(i, c) {
          return typeof i == "string" && typeof c == "string" || (i = Vt(i), c = Vt(c)), r(i, c);
        };
      }
      function yf(r, i, c, d, g, x, C, A, M, z) {
        var H = i & O, W = H ? C : n, X = H ? n : C, te = H ? x : n, oe = H ? n : x;
        i |= H ? j : $, i &= ~(H ? $ : j), i & R || (i &= -4);
        var ge = [
          r,
          i,
          g,
          te,
          W,
          oe,
          X,
          A,
          M,
          z
        ], se = c.apply(n, ge);
        return Oc(r) && Rf(se, ge), se.placeholder = d, Pf(se, r, i);
      }
      function Tc(r) {
        var i = qe[r];
        return function(c, d) {
          if (c = Vt(c), d = d == null ? 0 : at(he(d), 292), d && Rd(c)) {
            var g = (Pe(c) + "e").split("e"), x = i(g[0] + "e" + (+g[1] + d));
            return g = (Pe(x) + "e").split("e"), +(g[0] + "e" + (+g[1] - d));
          }
          return i(c);
        };
      }
      var D2 = ri && 1 / Bo(new ri([, -0]))[1] == le ? function(r) {
        return new ri(r);
      } : Yc;
      function bf(r) {
        return function(i) {
          var c = ct(i);
          return c == St ? tc(i) : c == _t ? q0(i) : B0(i, r(i));
        };
      }
      function On(r, i, c, d, g, x, C, A) {
        var M = i & k;
        if (!M && typeof r != "function")
          throw new Ht(l);
        var z = d ? d.length : 0;
        if (z || (i &= -97, d = g = n), C = C === n ? C : Je(he(C), 0), A = A === n ? A : he(A), z -= g ? g.length : 0, i & $) {
          var H = d, W = g;
          d = g = n;
        }
        var X = M ? n : kc(r), te = [
          r,
          i,
          c,
          d,
          g,
          H,
          W,
          x,
          C,
          A
        ];
        if (X && Z2(te, X), r = te[0], i = te[1], c = te[2], d = te[3], g = te[4], A = te[9] = te[9] === n ? M ? 0 : r.length : Je(te[9] - z, 0), !A && i & (O | D) && (i &= -25), !i || i == E)
          var oe = P2(r, i, c);
        else i == O || i == D ? oe = O2(r, i, A) : (i == j || i == (E | j)) && !g.length ? oe = M2(r, i, c, d) : oe = ds.apply(n, te);
        var ge = X ? Jd : Rf;
        return Pf(ge(oe, te), r, i);
      }
      function wf(r, i, c, d) {
        return r === n || Jt(r, ni[c]) && !Me.call(d, c) ? i : r;
      }
      function xf(r, i, c, d, g, x) {
        return Be(r) && Be(i) && (x.set(i, r), as(r, i, n, xf, x), x.delete(i)), r;
      }
      function L2(r) {
        return oo(r) ? n : r;
      }
      function Sf(r, i, c, d, g, x) {
        var C = c & T, A = r.length, M = i.length;
        if (A != M && !(C && M > A))
          return !1;
        var z = x.get(r), H = x.get(i);
        if (z && H)
          return z == i && H == r;
        var W = -1, X = !0, te = c & _ ? new Tr() : n;
        for (x.set(r, i), x.set(i, r); ++W < A; ) {
          var oe = r[W], ge = i[W];
          if (d)
            var se = C ? d(ge, oe, W, i, r, x) : d(oe, ge, W, r, i, x);
          if (se !== n) {
            if (se)
              continue;
            X = !1;
            break;
          }
          if (te) {
            if (!Za(i, function(be, Ee) {
              if (!Vi(te, Ee) && (oe === be || g(oe, be, c, d, x)))
                return te.push(Ee);
            })) {
              X = !1;
              break;
            }
          } else if (!(oe === ge || g(oe, ge, c, d, x))) {
            X = !1;
            break;
          }
        }
        return x.delete(r), x.delete(i), X;
      }
      function N2(r, i, c, d, g, x, C) {
        switch (c) {
          case Zn:
            if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
              return !1;
            r = r.buffer, i = i.buffer;
          case Xn:
            return !(r.byteLength != i.byteLength || !x(new Zo(r), new Zo(i)));
          case xt:
          case Xt:
          case cn:
            return Jt(+r, +i);
          case Gn:
            return r.name == i.name && r.message == i.message;
          case xr:
          case In:
            return r == i + "";
          case St:
            var A = tc;
          case _t:
            var M = d & T;
            if (A || (A = Bo), r.size != i.size && !M)
              return !1;
            var z = C.get(r);
            if (z)
              return z == i;
            d |= _, C.set(r, i);
            var H = Sf(A(r), A(i), d, g, x, C);
            return C.delete(r), H;
          case Vr:
            if (Ki)
              return Ki.call(r) == Ki.call(i);
        }
        return !1;
      }
      function j2(r, i, c, d, g, x) {
        var C = c & T, A = Ec(r), M = A.length, z = Ec(i), H = z.length;
        if (M != H && !C)
          return !1;
        for (var W = M; W--; ) {
          var X = A[W];
          if (!(C ? X in i : Me.call(i, X)))
            return !1;
        }
        var te = x.get(r), oe = x.get(i);
        if (te && oe)
          return te == i && oe == r;
        var ge = !0;
        x.set(r, i), x.set(i, r);
        for (var se = C; ++W < M; ) {
          X = A[W];
          var be = r[X], Ee = i[X];
          if (d)
            var kt = C ? d(Ee, be, X, i, r, x) : d(be, Ee, X, r, i, x);
          if (!(kt === n ? be === Ee || g(be, Ee, c, d, x) : kt)) {
            ge = !1;
            break;
          }
          se || (se = X == "constructor");
        }
        if (ge && !se) {
          var pt = r.constructor, At = i.constructor;
          pt != At && "constructor" in r && "constructor" in i && !(typeof pt == "function" && pt instanceof pt && typeof At == "function" && At instanceof At) && (ge = !1);
        }
        return x.delete(r), x.delete(i), ge;
      }
      function Mn(r) {
        return Dc(kf(r, n, jf), r + "");
      }
      function Ec(r) {
        return Wd(r, tt, Rc);
      }
      function Ic(r) {
        return Wd(r, bt, _f);
      }
      var kc = ts ? function(r) {
        return ts.get(r);
      } : Yc;
      function gs(r) {
        for (var i = r.name + "", c = ii[i], d = Me.call(ii, i) ? c.length : 0; d--; ) {
          var g = c[d], x = g.func;
          if (x == null || x == r)
            return g.name;
        }
        return i;
      }
      function ci(r) {
        var i = Me.call(y, "placeholder") ? y : r;
        return i.placeholder;
      }
      function ie() {
        var r = y.iteratee || Vc;
        return r = r === Vc ? $d : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function ms(r, i) {
        var c = r.__data__;
        return V2(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
      }
      function Ac(r) {
        for (var i = tt(r), c = i.length; c--; ) {
          var d = i[c], g = r[d];
          i[c] = [d, g, Ef(g)];
        }
        return i;
      }
      function kr(r, i) {
        var c = X0(r, i);
        return Bd(c) ? c : n;
      }
      function F2(r) {
        var i = Me.call(r, _r), c = r[_r];
        try {
          r[_r] = n;
          var d = !0;
        } catch {
        }
        var g = Yo.call(r);
        return d && (i ? r[_r] = c : delete r[_r]), g;
      }
      var Rc = rc ? function(r) {
        return r == null ? [] : (r = De(r), qn(rc(r), function(i) {
          return kd.call(r, i);
        }));
      } : Xc, _f = rc ? function(r) {
        for (var i = []; r; )
          Jn(i, Rc(r)), r = Ko(r);
        return i;
      } : Xc, ct = ft;
      (ic && ct(new ic(new ArrayBuffer(1))) != Zn || Yi && ct(new Yi()) != St || oc && ct(oc.resolve()) != Mi || ri && ct(new ri()) != _t || Xi && ct(new Xi()) != Yn) && (ct = function(r) {
        var i = ft(r), c = i == jt ? r.constructor : n, d = c ? Ar(c) : "";
        if (d)
          switch (d) {
            case wv:
              return Zn;
            case xv:
              return St;
            case Sv:
              return Mi;
            case _v:
              return _t;
            case Cv:
              return Yn;
          }
        return i;
      });
      function z2(r, i, c) {
        for (var d = -1, g = c.length; ++d < g; ) {
          var x = c[d], C = x.size;
          switch (x.type) {
            case "drop":
              r += C;
              break;
            case "dropRight":
              i -= C;
              break;
            case "take":
              i = at(i, r + C);
              break;
            case "takeRight":
              r = Je(r, i - C);
              break;
          }
        }
        return { start: r, end: i };
      }
      function H2(r) {
        var i = r.match(ja);
        return i ? i[1].split(I) : [];
      }
      function Cf(r, i, c) {
        i = rr(i, r);
        for (var d = -1, g = i.length, x = !1; ++d < g; ) {
          var C = dn(i[d]);
          if (!(x = r != null && c(r, C)))
            break;
          r = r[C];
        }
        return x || ++d != g ? x : (g = r == null ? 0 : r.length, !!g && _s(g) && Dn(C, g) && (de(r) || Rr(r)));
      }
      function W2(r) {
        var i = r.length, c = new r.constructor(i);
        return i && typeof r[0] == "string" && Me.call(r, "index") && (c.index = r.index, c.input = r.input), c;
      }
      function Tf(r) {
        return typeof r.constructor == "function" && !ro(r) ? oi(Ko(r)) : {};
      }
      function U2(r, i, c) {
        var d = r.constructor;
        switch (i) {
          case Xn:
            return _c(r);
          case xt:
          case Xt:
            return new d(+r);
          case Zn:
            return T2(r, c);
          case Gr:
          case Yr:
          case Di:
          case Li:
          case Ni:
          case ji:
          case Fi:
          case zi:
          case Hi:
            return af(r, c);
          case St:
            return new d();
          case cn:
          case In:
            return new d(r);
          case xr:
            return E2(r);
          case _t:
            return new d();
          case Vr:
            return I2(r);
        }
      }
      function B2(r, i) {
        var c = i.length;
        if (!c)
          return r;
        var d = c - 1;
        return i[d] = (c > 1 ? "& " : "") + i[d], i = i.join(c > 2 ? ", " : " "), r.replace(Na, `{
/* [wrapped with ` + i + `] */
`);
      }
      function $2(r) {
        return de(r) || Rr(r) || !!(Ad && r && r[Ad]);
      }
      function Dn(r, i) {
        var c = typeof r;
        return i = i ?? ee, !!i && (c == "number" || c != "symbol" && $e.test(r)) && r > -1 && r % 1 == 0 && r < i;
      }
      function ht(r, i, c) {
        if (!Be(c))
          return !1;
        var d = typeof i;
        return (d == "number" ? yt(c) && Dn(i, c.length) : d == "string" && i in c) ? Jt(c[i], r) : !1;
      }
      function Pc(r, i) {
        if (de(r))
          return !1;
        var c = typeof r;
        return c == "number" || c == "symbol" || c == "boolean" || r == null || It(r) ? !0 : Ma.test(r) || !Fo.test(r) || i != null && r in De(i);
      }
      function V2(r) {
        var i = typeof r;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
      }
      function Oc(r) {
        var i = gs(r), c = y[i];
        if (typeof c != "function" || !(i in Se.prototype))
          return !1;
        if (r === c)
          return !0;
        var d = kc(c);
        return !!d && r === d[0];
      }
      function G2(r) {
        return !!Td && Td in r;
      }
      var Y2 = Vo ? Ln : Zc;
      function ro(r) {
        var i = r && r.constructor, c = typeof i == "function" && i.prototype || ni;
        return r === c;
      }
      function Ef(r) {
        return r === r && !Be(r);
      }
      function If(r, i) {
        return function(c) {
          return c == null ? !1 : c[r] === i && (i !== n || r in De(c));
        };
      }
      function X2(r) {
        var i = xs(r, function(d) {
          return c.size === h && c.clear(), d;
        }), c = i.cache;
        return i;
      }
      function Z2(r, i) {
        var c = r[1], d = i[1], g = c | d, x = g < (E | k | F), C = d == F && c == O || d == F && c == V && r[7].length <= i[8] || d == (F | V) && i[7].length <= i[8] && c == O;
        if (!(x || C))
          return r;
        d & E && (r[2] = i[2], g |= c & E ? 0 : R);
        var A = i[3];
        if (A) {
          var M = r[3];
          r[3] = M ? lf(M, A, i[4]) : A, r[4] = M ? Qn(r[3], p) : i[4];
        }
        return A = i[5], A && (M = r[5], r[5] = M ? uf(M, A, i[6]) : A, r[6] = M ? Qn(r[5], p) : i[6]), A = i[7], A && (r[7] = A), d & F && (r[8] = r[8] == null ? i[8] : at(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = g, r;
      }
      function K2(r) {
        var i = [];
        if (r != null)
          for (var c in De(r))
            i.push(c);
        return i;
      }
      function q2(r) {
        return Yo.call(r);
      }
      function kf(r, i, c) {
        return i = Je(i === n ? r.length - 1 : i, 0), function() {
          for (var d = arguments, g = -1, x = Je(d.length - i, 0), C = L(x); ++g < x; )
            C[g] = d[i + g];
          g = -1;
          for (var A = L(i + 1); ++g < i; )
            A[g] = d[g];
          return A[i] = c(C), Ct(r, this, A);
        };
      }
      function Af(r, i) {
        return i.length < 2 ? r : Ir(r, Bt(i, 0, -1));
      }
      function J2(r, i) {
        for (var c = r.length, d = at(i.length, c), g = vt(r); d--; ) {
          var x = i[d];
          r[d] = Dn(x, c) ? g[x] : n;
        }
        return r;
      }
      function Mc(r, i) {
        if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__")
          return r[i];
      }
      var Rf = Of(Jd), io = hv || function(r, i) {
        return rt.setTimeout(r, i);
      }, Dc = Of(x2);
      function Pf(r, i, c) {
        var d = i + "";
        return Dc(r, B2(d, Q2(H2(d), c)));
      }
      function Of(r) {
        var i = 0, c = 0;
        return function() {
          var d = vv(), g = Q - (d - c);
          if (c = d, g > 0) {
            if (++i >= Y)
              return arguments[0];
          } else
            i = 0;
          return r.apply(n, arguments);
        };
      }
      function vs(r, i) {
        var c = -1, d = r.length, g = d - 1;
        for (i = i === n ? d : i; ++c < i; ) {
          var x = mc(c, g), C = r[x];
          r[x] = r[c], r[c] = C;
        }
        return r.length = i, r;
      }
      var Mf = X2(function(r) {
        var i = [];
        return r.charCodeAt(0) === 46 && i.push(""), r.replace(Da, function(c, d, g, x) {
          i.push(g ? x.replace(ae, "$1") : d || c);
        }), i;
      });
      function dn(r) {
        if (typeof r == "string" || It(r))
          return r;
        var i = r + "";
        return i == "0" && 1 / r == -1 / 0 ? "-0" : i;
      }
      function Ar(r) {
        if (r != null) {
          try {
            return Go.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function Q2(r, i) {
        return zt(br, function(c) {
          var d = "_." + c[0];
          i & c[1] && !Wo(r, d) && r.push(d);
        }), r.sort();
      }
      function Df(r) {
        if (r instanceof Se)
          return r.clone();
        var i = new Wt(r.__wrapped__, r.__chain__);
        return i.__actions__ = vt(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i;
      }
      function ey(r, i, c) {
        (c ? ht(r, i, c) : i === n) ? i = 1 : i = Je(he(i), 0);
        var d = r == null ? 0 : r.length;
        if (!d || i < 1)
          return [];
        for (var g = 0, x = 0, C = L(Qo(d / i)); g < d; )
          C[x++] = Bt(r, g, g += i);
        return C;
      }
      function ty(r) {
        for (var i = -1, c = r == null ? 0 : r.length, d = 0, g = []; ++i < c; ) {
          var x = r[i];
          x && (g[d++] = x);
        }
        return g;
      }
      function ny() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var i = L(r - 1), c = arguments[0], d = r; d--; )
          i[d - 1] = arguments[d];
        return Jn(de(c) ? vt(c) : [c], it(i, 1));
      }
      var ry = me(function(r, i) {
        return Ge(r) ? Ji(r, it(i, 1, Ge, !0)) : [];
      }), iy = me(function(r, i) {
        var c = $t(i);
        return Ge(c) && (c = n), Ge(r) ? Ji(r, it(i, 1, Ge, !0), ie(c, 2)) : [];
      }), oy = me(function(r, i) {
        var c = $t(i);
        return Ge(c) && (c = n), Ge(r) ? Ji(r, it(i, 1, Ge, !0), n, c) : [];
      });
      function sy(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (i = c || i === n ? 1 : he(i), Bt(r, i < 0 ? 0 : i, d)) : [];
      }
      function ay(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (i = c || i === n ? 1 : he(i), i = d - i, Bt(r, 0, i < 0 ? 0 : i)) : [];
      }
      function cy(r, i) {
        return r && r.length ? ls(r, ie(i, 3), !0, !0) : [];
      }
      function ly(r, i) {
        return r && r.length ? ls(r, ie(i, 3), !0) : [];
      }
      function uy(r, i, c, d) {
        var g = r == null ? 0 : r.length;
        return g ? (c && typeof c != "number" && ht(r, i, c) && (c = 0, d = g), n2(r, i, c, d)) : [];
      }
      function Lf(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = c == null ? 0 : he(c);
        return g < 0 && (g = Je(d + g, 0)), Uo(r, ie(i, 3), g);
      }
      function Nf(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = d - 1;
        return c !== n && (g = he(c), g = c < 0 ? Je(d + g, 0) : at(g, d - 1)), Uo(r, ie(i, 3), g, !0);
      }
      function jf(r) {
        var i = r == null ? 0 : r.length;
        return i ? it(r, 1) : [];
      }
      function dy(r) {
        var i = r == null ? 0 : r.length;
        return i ? it(r, le) : [];
      }
      function fy(r, i) {
        var c = r == null ? 0 : r.length;
        return c ? (i = i === n ? 1 : he(i), it(r, i)) : [];
      }
      function hy(r) {
        for (var i = -1, c = r == null ? 0 : r.length, d = {}; ++i < c; ) {
          var g = r[i];
          d[g[0]] = g[1];
        }
        return d;
      }
      function Ff(r) {
        return r && r.length ? r[0] : n;
      }
      function py(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = c == null ? 0 : he(c);
        return g < 0 && (g = Je(d + g, 0)), Jr(r, i, g);
      }
      function gy(r) {
        var i = r == null ? 0 : r.length;
        return i ? Bt(r, 0, -1) : [];
      }
      var my = me(function(r) {
        var i = ze(r, xc);
        return i.length && i[0] === r[0] ? dc(i) : [];
      }), vy = me(function(r) {
        var i = $t(r), c = ze(r, xc);
        return i === $t(c) ? i = n : c.pop(), c.length && c[0] === r[0] ? dc(c, ie(i, 2)) : [];
      }), yy = me(function(r) {
        var i = $t(r), c = ze(r, xc);
        return i = typeof i == "function" ? i : n, i && c.pop(), c.length && c[0] === r[0] ? dc(c, n, i) : [];
      });
      function by(r, i) {
        return r == null ? "" : gv.call(r, i);
      }
      function $t(r) {
        var i = r == null ? 0 : r.length;
        return i ? r[i - 1] : n;
      }
      function wy(r, i, c) {
        var d = r == null ? 0 : r.length;
        if (!d)
          return -1;
        var g = d;
        return c !== n && (g = he(c), g = g < 0 ? Je(d + g, 0) : at(g, d - 1)), i === i ? Q0(r, i, g) : Uo(r, vd, g, !0);
      }
      function xy(r, i) {
        return r && r.length ? Xd(r, he(i)) : n;
      }
      var Sy = me(zf);
      function zf(r, i) {
        return r && r.length && i && i.length ? gc(r, i) : r;
      }
      function _y(r, i, c) {
        return r && r.length && i && i.length ? gc(r, i, ie(c, 2)) : r;
      }
      function Cy(r, i, c) {
        return r && r.length && i && i.length ? gc(r, i, n, c) : r;
      }
      var Ty = Mn(function(r, i) {
        var c = r == null ? 0 : r.length, d = ac(r, i);
        return qd(r, ze(i, function(g) {
          return Dn(g, c) ? +g : g;
        }).sort(cf)), d;
      });
      function Ey(r, i) {
        var c = [];
        if (!(r && r.length))
          return c;
        var d = -1, g = [], x = r.length;
        for (i = ie(i, 3); ++d < x; ) {
          var C = r[d];
          i(C, d, r) && (c.push(C), g.push(d));
        }
        return qd(r, g), c;
      }
      function Lc(r) {
        return r == null ? r : bv.call(r);
      }
      function Iy(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (c && typeof c != "number" && ht(r, i, c) ? (i = 0, c = d) : (i = i == null ? 0 : he(i), c = c === n ? d : he(c)), Bt(r, i, c)) : [];
      }
      function ky(r, i) {
        return cs(r, i);
      }
      function Ay(r, i, c) {
        return yc(r, i, ie(c, 2));
      }
      function Ry(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var d = cs(r, i);
          if (d < c && Jt(r[d], i))
            return d;
        }
        return -1;
      }
      function Py(r, i) {
        return cs(r, i, !0);
      }
      function Oy(r, i, c) {
        return yc(r, i, ie(c, 2), !0);
      }
      function My(r, i) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var d = cs(r, i, !0) - 1;
          if (Jt(r[d], i))
            return d;
        }
        return -1;
      }
      function Dy(r) {
        return r && r.length ? Qd(r) : [];
      }
      function Ly(r, i) {
        return r && r.length ? Qd(r, ie(i, 2)) : [];
      }
      function Ny(r) {
        var i = r == null ? 0 : r.length;
        return i ? Bt(r, 1, i) : [];
      }
      function jy(r, i, c) {
        return r && r.length ? (i = c || i === n ? 1 : he(i), Bt(r, 0, i < 0 ? 0 : i)) : [];
      }
      function Fy(r, i, c) {
        var d = r == null ? 0 : r.length;
        return d ? (i = c || i === n ? 1 : he(i), i = d - i, Bt(r, i < 0 ? 0 : i, d)) : [];
      }
      function zy(r, i) {
        return r && r.length ? ls(r, ie(i, 3), !1, !0) : [];
      }
      function Hy(r, i) {
        return r && r.length ? ls(r, ie(i, 3)) : [];
      }
      var Wy = me(function(r) {
        return nr(it(r, 1, Ge, !0));
      }), Uy = me(function(r) {
        var i = $t(r);
        return Ge(i) && (i = n), nr(it(r, 1, Ge, !0), ie(i, 2));
      }), By = me(function(r) {
        var i = $t(r);
        return i = typeof i == "function" ? i : n, nr(it(r, 1, Ge, !0), n, i);
      });
      function $y(r) {
        return r && r.length ? nr(r) : [];
      }
      function Vy(r, i) {
        return r && r.length ? nr(r, ie(i, 2)) : [];
      }
      function Gy(r, i) {
        return i = typeof i == "function" ? i : n, r && r.length ? nr(r, n, i) : [];
      }
      function Nc(r) {
        if (!(r && r.length))
          return [];
        var i = 0;
        return r = qn(r, function(c) {
          if (Ge(c))
            return i = Je(c.length, i), !0;
        }), Qa(i, function(c) {
          return ze(r, Ka(c));
        });
      }
      function Hf(r, i) {
        if (!(r && r.length))
          return [];
        var c = Nc(r);
        return i == null ? c : ze(c, function(d) {
          return Ct(i, n, d);
        });
      }
      var Yy = me(function(r, i) {
        return Ge(r) ? Ji(r, i) : [];
      }), Xy = me(function(r) {
        return wc(qn(r, Ge));
      }), Zy = me(function(r) {
        var i = $t(r);
        return Ge(i) && (i = n), wc(qn(r, Ge), ie(i, 2));
      }), Ky = me(function(r) {
        var i = $t(r);
        return i = typeof i == "function" ? i : n, wc(qn(r, Ge), n, i);
      }), qy = me(Nc);
      function Jy(r, i) {
        return rf(r || [], i || [], qi);
      }
      function Qy(r, i) {
        return rf(r || [], i || [], to);
      }
      var eb = me(function(r) {
        var i = r.length, c = i > 1 ? r[i - 1] : n;
        return c = typeof c == "function" ? (r.pop(), c) : n, Hf(r, c);
      });
      function Wf(r) {
        var i = y(r);
        return i.__chain__ = !0, i;
      }
      function tb(r, i) {
        return i(r), r;
      }
      function ys(r, i) {
        return i(r);
      }
      var nb = Mn(function(r) {
        var i = r.length, c = i ? r[0] : 0, d = this.__wrapped__, g = function(x) {
          return ac(x, r);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Se) || !Dn(c) ? this.thru(g) : (d = d.slice(c, +c + (i ? 1 : 0)), d.__actions__.push({
          func: ys,
          args: [g],
          thisArg: n
        }), new Wt(d, this.__chain__).thru(function(x) {
          return i && !x.length && x.push(n), x;
        }));
      });
      function rb() {
        return Wf(this);
      }
      function ib() {
        return new Wt(this.value(), this.__chain__);
      }
      function ob() {
        this.__values__ === n && (this.__values__ = th(this.value()));
        var r = this.__index__ >= this.__values__.length, i = r ? n : this.__values__[this.__index__++];
        return { done: r, value: i };
      }
      function sb() {
        return this;
      }
      function ab(r) {
        for (var i, c = this; c instanceof rs; ) {
          var d = Df(c);
          d.__index__ = 0, d.__values__ = n, i ? g.__wrapped__ = d : i = d;
          var g = d;
          c = c.__wrapped__;
        }
        return g.__wrapped__ = r, i;
      }
      function cb() {
        var r = this.__wrapped__;
        if (r instanceof Se) {
          var i = r;
          return this.__actions__.length && (i = new Se(this)), i = i.reverse(), i.__actions__.push({
            func: ys,
            args: [Lc],
            thisArg: n
          }), new Wt(i, this.__chain__);
        }
        return this.thru(Lc);
      }
      function lb() {
        return nf(this.__wrapped__, this.__actions__);
      }
      var ub = us(function(r, i, c) {
        Me.call(r, c) ? ++r[c] : Pn(r, c, 1);
      });
      function db(r, i, c) {
        var d = de(r) ? gd : t2;
        return c && ht(r, i, c) && (i = n), d(r, ie(i, 3));
      }
      function fb(r, i) {
        var c = de(r) ? qn : zd;
        return c(r, ie(i, 3));
      }
      var hb = pf(Lf), pb = pf(Nf);
      function gb(r, i) {
        return it(bs(r, i), 1);
      }
      function mb(r, i) {
        return it(bs(r, i), le);
      }
      function vb(r, i, c) {
        return c = c === n ? 1 : he(c), it(bs(r, i), c);
      }
      function Uf(r, i) {
        var c = de(r) ? zt : tr;
        return c(r, ie(i, 3));
      }
      function Bf(r, i) {
        var c = de(r) ? N0 : Fd;
        return c(r, ie(i, 3));
      }
      var yb = us(function(r, i, c) {
        Me.call(r, c) ? r[c].push(i) : Pn(r, c, [i]);
      });
      function bb(r, i, c, d) {
        r = yt(r) ? r : ui(r), c = c && !d ? he(c) : 0;
        var g = r.length;
        return c < 0 && (c = Je(g + c, 0)), Cs(r) ? c <= g && r.indexOf(i, c) > -1 : !!g && Jr(r, i, c) > -1;
      }
      var wb = me(function(r, i, c) {
        var d = -1, g = typeof i == "function", x = yt(r) ? L(r.length) : [];
        return tr(r, function(C) {
          x[++d] = g ? Ct(i, C, c) : Qi(C, i, c);
        }), x;
      }), xb = us(function(r, i, c) {
        Pn(r, c, i);
      });
      function bs(r, i) {
        var c = de(r) ? ze : Vd;
        return c(r, ie(i, 3));
      }
      function Sb(r, i, c, d) {
        return r == null ? [] : (de(i) || (i = i == null ? [] : [i]), c = d ? n : c, de(c) || (c = c == null ? [] : [c]), Zd(r, i, c));
      }
      var _b = us(function(r, i, c) {
        r[c ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Cb(r, i, c) {
        var d = de(r) ? Xa : bd, g = arguments.length < 3;
        return d(r, ie(i, 4), c, g, tr);
      }
      function Tb(r, i, c) {
        var d = de(r) ? j0 : bd, g = arguments.length < 3;
        return d(r, ie(i, 4), c, g, Fd);
      }
      function Eb(r, i) {
        var c = de(r) ? qn : zd;
        return c(r, Ss(ie(i, 3)));
      }
      function Ib(r) {
        var i = de(r) ? Dd : b2;
        return i(r);
      }
      function kb(r, i, c) {
        (c ? ht(r, i, c) : i === n) ? i = 1 : i = he(i);
        var d = de(r) ? Kv : w2;
        return d(r, i);
      }
      function Ab(r) {
        var i = de(r) ? qv : S2;
        return i(r);
      }
      function Rb(r) {
        if (r == null)
          return 0;
        if (yt(r))
          return Cs(r) ? ei(r) : r.length;
        var i = ct(r);
        return i == St || i == _t ? r.size : hc(r).length;
      }
      function Pb(r, i, c) {
        var d = de(r) ? Za : _2;
        return c && ht(r, i, c) && (i = n), d(r, ie(i, 3));
      }
      var Ob = me(function(r, i) {
        if (r == null)
          return [];
        var c = i.length;
        return c > 1 && ht(r, i[0], i[1]) ? i = [] : c > 2 && ht(i[0], i[1], i[2]) && (i = [i[0]]), Zd(r, it(i, 1), []);
      }), ws = fv || function() {
        return rt.Date.now();
      };
      function Mb(r, i) {
        if (typeof i != "function")
          throw new Ht(l);
        return r = he(r), function() {
          if (--r < 1)
            return i.apply(this, arguments);
        };
      }
      function $f(r, i, c) {
        return i = c ? n : i, i = r && i == null ? r.length : i, On(r, F, n, n, n, n, i);
      }
      function Vf(r, i) {
        var c;
        if (typeof i != "function")
          throw new Ht(l);
        return r = he(r), function() {
          return --r > 0 && (c = i.apply(this, arguments)), r <= 1 && (i = n), c;
        };
      }
      var jc = me(function(r, i, c) {
        var d = E;
        if (c.length) {
          var g = Qn(c, ci(jc));
          d |= j;
        }
        return On(r, d, i, c, g);
      }), Gf = me(function(r, i, c) {
        var d = E | k;
        if (c.length) {
          var g = Qn(c, ci(Gf));
          d |= j;
        }
        return On(i, d, r, c, g);
      });
      function Yf(r, i, c) {
        i = c ? n : i;
        var d = On(r, O, n, n, n, n, n, i);
        return d.placeholder = Yf.placeholder, d;
      }
      function Xf(r, i, c) {
        i = c ? n : i;
        var d = On(r, D, n, n, n, n, n, i);
        return d.placeholder = Xf.placeholder, d;
      }
      function Zf(r, i, c) {
        var d, g, x, C, A, M, z = 0, H = !1, W = !1, X = !0;
        if (typeof r != "function")
          throw new Ht(l);
        i = Vt(i) || 0, Be(c) && (H = !!c.leading, W = "maxWait" in c, x = W ? Je(Vt(c.maxWait) || 0, i) : x, X = "trailing" in c ? !!c.trailing : X);
        function te(Ye) {
          var Qt = d, jn = g;
          return d = g = n, z = Ye, C = r.apply(jn, Qt), C;
        }
        function oe(Ye) {
          return z = Ye, A = io(be, i), H ? te(Ye) : C;
        }
        function ge(Ye) {
          var Qt = Ye - M, jn = Ye - z, ph = i - Qt;
          return W ? at(ph, x - jn) : ph;
        }
        function se(Ye) {
          var Qt = Ye - M, jn = Ye - z;
          return M === n || Qt >= i || Qt < 0 || W && jn >= x;
        }
        function be() {
          var Ye = ws();
          if (se(Ye))
            return Ee(Ye);
          A = io(be, ge(Ye));
        }
        function Ee(Ye) {
          return A = n, X && d ? te(Ye) : (d = g = n, C);
        }
        function kt() {
          A !== n && of(A), z = 0, d = M = g = A = n;
        }
        function pt() {
          return A === n ? C : Ee(ws());
        }
        function At() {
          var Ye = ws(), Qt = se(Ye);
          if (d = arguments, g = this, M = Ye, Qt) {
            if (A === n)
              return oe(M);
            if (W)
              return of(A), A = io(be, i), te(M);
          }
          return A === n && (A = io(be, i)), C;
        }
        return At.cancel = kt, At.flush = pt, At;
      }
      var Db = me(function(r, i) {
        return jd(r, 1, i);
      }), Lb = me(function(r, i, c) {
        return jd(r, Vt(i) || 0, c);
      });
      function Nb(r) {
        return On(r, G);
      }
      function xs(r, i) {
        if (typeof r != "function" || i != null && typeof i != "function")
          throw new Ht(l);
        var c = function() {
          var d = arguments, g = i ? i.apply(this, d) : d[0], x = c.cache;
          if (x.has(g))
            return x.get(g);
          var C = r.apply(this, d);
          return c.cache = x.set(g, C) || x, C;
        };
        return c.cache = new (xs.Cache || Rn)(), c;
      }
      xs.Cache = Rn;
      function Ss(r) {
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
      function jb(r) {
        return Vf(2, r);
      }
      var Fb = C2(function(r, i) {
        i = i.length == 1 && de(i[0]) ? ze(i[0], Tt(ie())) : ze(it(i, 1), Tt(ie()));
        var c = i.length;
        return me(function(d) {
          for (var g = -1, x = at(d.length, c); ++g < x; )
            d[g] = i[g].call(this, d[g]);
          return Ct(r, this, d);
        });
      }), Fc = me(function(r, i) {
        var c = Qn(i, ci(Fc));
        return On(r, j, n, i, c);
      }), Kf = me(function(r, i) {
        var c = Qn(i, ci(Kf));
        return On(r, $, n, i, c);
      }), zb = Mn(function(r, i) {
        return On(r, V, n, n, n, i);
      });
      function Hb(r, i) {
        if (typeof r != "function")
          throw new Ht(l);
        return i = i === n ? i : he(i), me(r, i);
      }
      function Wb(r, i) {
        if (typeof r != "function")
          throw new Ht(l);
        return i = i == null ? 0 : Je(he(i), 0), me(function(c) {
          var d = c[i], g = ir(c, 0, i);
          return d && Jn(g, d), Ct(r, this, g);
        });
      }
      function Ub(r, i, c) {
        var d = !0, g = !0;
        if (typeof r != "function")
          throw new Ht(l);
        return Be(c) && (d = "leading" in c ? !!c.leading : d, g = "trailing" in c ? !!c.trailing : g), Zf(r, i, {
          leading: d,
          maxWait: i,
          trailing: g
        });
      }
      function Bb(r) {
        return $f(r, 1);
      }
      function $b(r, i) {
        return Fc(Sc(i), r);
      }
      function Vb() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return de(r) ? r : [r];
      }
      function Gb(r) {
        return Ut(r, S);
      }
      function Yb(r, i) {
        return i = typeof i == "function" ? i : n, Ut(r, S, i);
      }
      function Xb(r) {
        return Ut(r, v | S);
      }
      function Zb(r, i) {
        return i = typeof i == "function" ? i : n, Ut(r, v | S, i);
      }
      function Kb(r, i) {
        return i == null || Nd(r, i, tt(i));
      }
      function Jt(r, i) {
        return r === i || r !== r && i !== i;
      }
      var qb = ps(uc), Jb = ps(function(r, i) {
        return r >= i;
      }), Rr = Ud(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Ud : function(r) {
        return Ve(r) && Me.call(r, "callee") && !kd.call(r, "callee");
      }, de = L.isArray, Qb = ld ? Tt(ld) : a2;
      function yt(r) {
        return r != null && _s(r.length) && !Ln(r);
      }
      function Ge(r) {
        return Ve(r) && yt(r);
      }
      function ew(r) {
        return r === !0 || r === !1 || Ve(r) && ft(r) == xt;
      }
      var or = pv || Zc, tw = ud ? Tt(ud) : c2;
      function nw(r) {
        return Ve(r) && r.nodeType === 1 && !oo(r);
      }
      function rw(r) {
        if (r == null)
          return !0;
        if (yt(r) && (de(r) || typeof r == "string" || typeof r.splice == "function" || or(r) || li(r) || Rr(r)))
          return !r.length;
        var i = ct(r);
        if (i == St || i == _t)
          return !r.size;
        if (ro(r))
          return !hc(r).length;
        for (var c in r)
          if (Me.call(r, c))
            return !1;
        return !0;
      }
      function iw(r, i) {
        return eo(r, i);
      }
      function ow(r, i, c) {
        c = typeof c == "function" ? c : n;
        var d = c ? c(r, i) : n;
        return d === n ? eo(r, i, n, c) : !!d;
      }
      function zc(r) {
        if (!Ve(r))
          return !1;
        var i = ft(r);
        return i == Gn || i == Vn || typeof r.message == "string" && typeof r.name == "string" && !oo(r);
      }
      function sw(r) {
        return typeof r == "number" && Rd(r);
      }
      function Ln(r) {
        if (!Be(r))
          return !1;
        var i = ft(r);
        return i == Tn || i == En || i == Yt || i == $r;
      }
      function qf(r) {
        return typeof r == "number" && r == he(r);
      }
      function _s(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ee;
      }
      function Be(r) {
        var i = typeof r;
        return r != null && (i == "object" || i == "function");
      }
      function Ve(r) {
        return r != null && typeof r == "object";
      }
      var Jf = dd ? Tt(dd) : u2;
      function aw(r, i) {
        return r === i || fc(r, i, Ac(i));
      }
      function cw(r, i, c) {
        return c = typeof c == "function" ? c : n, fc(r, i, Ac(i), c);
      }
      function lw(r) {
        return Qf(r) && r != +r;
      }
      function uw(r) {
        if (Y2(r))
          throw new ue(a);
        return Bd(r);
      }
      function dw(r) {
        return r === null;
      }
      function fw(r) {
        return r == null;
      }
      function Qf(r) {
        return typeof r == "number" || Ve(r) && ft(r) == cn;
      }
      function oo(r) {
        if (!Ve(r) || ft(r) != jt)
          return !1;
        var i = Ko(r);
        if (i === null)
          return !0;
        var c = Me.call(i, "constructor") && i.constructor;
        return typeof c == "function" && c instanceof c && Go.call(c) == cv;
      }
      var Hc = fd ? Tt(fd) : d2;
      function hw(r) {
        return qf(r) && r >= -9007199254740991 && r <= ee;
      }
      var eh = hd ? Tt(hd) : f2;
      function Cs(r) {
        return typeof r == "string" || !de(r) && Ve(r) && ft(r) == In;
      }
      function It(r) {
        return typeof r == "symbol" || Ve(r) && ft(r) == Vr;
      }
      var li = pd ? Tt(pd) : h2;
      function pw(r) {
        return r === n;
      }
      function gw(r) {
        return Ve(r) && ct(r) == Yn;
      }
      function mw(r) {
        return Ve(r) && ft(r) == Do;
      }
      var vw = ps(pc), yw = ps(function(r, i) {
        return r <= i;
      });
      function th(r) {
        if (!r)
          return [];
        if (yt(r))
          return Cs(r) ? Kt(r) : vt(r);
        if (Gi && r[Gi])
          return K0(r[Gi]());
        var i = ct(r), c = i == St ? tc : i == _t ? Bo : ui;
        return c(r);
      }
      function Nn(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Vt(r), r === le || r === -1 / 0) {
          var i = r < 0 ? -1 : 1;
          return i * ye;
        }
        return r === r ? r : 0;
      }
      function he(r) {
        var i = Nn(r), c = i % 1;
        return i === i ? c ? i - c : i : 0;
      }
      function nh(r) {
        return r ? Er(he(r), 0, Oe) : 0;
      }
      function Vt(r) {
        if (typeof r == "number")
          return r;
        if (It(r))
          return fe;
        if (Be(r)) {
          var i = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = Be(i) ? i + "" : i;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = wd(r);
        var c = ve.test(r);
        return c || Ue.test(r) ? M0(r.slice(2), c ? 2 : 8) : xe.test(r) ? fe : +r;
      }
      function rh(r) {
        return un(r, bt(r));
      }
      function bw(r) {
        return r ? Er(he(r), -9007199254740991, ee) : r === 0 ? r : 0;
      }
      function Pe(r) {
        return r == null ? "" : Et(r);
      }
      var ww = si(function(r, i) {
        if (ro(i) || yt(i)) {
          un(i, tt(i), r);
          return;
        }
        for (var c in i)
          Me.call(i, c) && qi(r, c, i[c]);
      }), ih = si(function(r, i) {
        un(i, bt(i), r);
      }), Ts = si(function(r, i, c, d) {
        un(i, bt(i), r, d);
      }), xw = si(function(r, i, c, d) {
        un(i, tt(i), r, d);
      }), Sw = Mn(ac);
      function _w(r, i) {
        var c = oi(r);
        return i == null ? c : Ld(c, i);
      }
      var Cw = me(function(r, i) {
        r = De(r);
        var c = -1, d = i.length, g = d > 2 ? i[2] : n;
        for (g && ht(i[0], i[1], g) && (d = 1); ++c < d; )
          for (var x = i[c], C = bt(x), A = -1, M = C.length; ++A < M; ) {
            var z = C[A], H = r[z];
            (H === n || Jt(H, ni[z]) && !Me.call(r, z)) && (r[z] = x[z]);
          }
        return r;
      }), Tw = me(function(r) {
        return r.push(n, xf), Ct(oh, n, r);
      });
      function Ew(r, i) {
        return md(r, ie(i, 3), ln);
      }
      function Iw(r, i) {
        return md(r, ie(i, 3), lc);
      }
      function kw(r, i) {
        return r == null ? r : cc(r, ie(i, 3), bt);
      }
      function Aw(r, i) {
        return r == null ? r : Hd(r, ie(i, 3), bt);
      }
      function Rw(r, i) {
        return r && ln(r, ie(i, 3));
      }
      function Pw(r, i) {
        return r && lc(r, ie(i, 3));
      }
      function Ow(r) {
        return r == null ? [] : ss(r, tt(r));
      }
      function Mw(r) {
        return r == null ? [] : ss(r, bt(r));
      }
      function Wc(r, i, c) {
        var d = r == null ? n : Ir(r, i);
        return d === n ? c : d;
      }
      function Dw(r, i) {
        return r != null && Cf(r, i, r2);
      }
      function Uc(r, i) {
        return r != null && Cf(r, i, i2);
      }
      var Lw = mf(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = Yo.call(i)), r[i] = c;
      }, $c(wt)), Nw = mf(function(r, i, c) {
        i != null && typeof i.toString != "function" && (i = Yo.call(i)), Me.call(r, i) ? r[i].push(c) : r[i] = [c];
      }, ie), jw = me(Qi);
      function tt(r) {
        return yt(r) ? Md(r) : hc(r);
      }
      function bt(r) {
        return yt(r) ? Md(r, !0) : p2(r);
      }
      function Fw(r, i) {
        var c = {};
        return i = ie(i, 3), ln(r, function(d, g, x) {
          Pn(c, i(d, g, x), d);
        }), c;
      }
      function zw(r, i) {
        var c = {};
        return i = ie(i, 3), ln(r, function(d, g, x) {
          Pn(c, g, i(d, g, x));
        }), c;
      }
      var Hw = si(function(r, i, c) {
        as(r, i, c);
      }), oh = si(function(r, i, c, d) {
        as(r, i, c, d);
      }), Ww = Mn(function(r, i) {
        var c = {};
        if (r == null)
          return c;
        var d = !1;
        i = ze(i, function(x) {
          return x = rr(x, r), d || (d = x.length > 1), x;
        }), un(r, Ic(r), c), d && (c = Ut(c, v | b | S, L2));
        for (var g = i.length; g--; )
          bc(c, i[g]);
        return c;
      });
      function Uw(r, i) {
        return sh(r, Ss(ie(i)));
      }
      var Bw = Mn(function(r, i) {
        return r == null ? {} : m2(r, i);
      });
      function sh(r, i) {
        if (r == null)
          return {};
        var c = ze(Ic(r), function(d) {
          return [d];
        });
        return i = ie(i), Kd(r, c, function(d, g) {
          return i(d, g[0]);
        });
      }
      function $w(r, i, c) {
        i = rr(i, r);
        var d = -1, g = i.length;
        for (g || (g = 1, r = n); ++d < g; ) {
          var x = r == null ? n : r[dn(i[d])];
          x === n && (d = g, x = c), r = Ln(x) ? x.call(r) : x;
        }
        return r;
      }
      function Vw(r, i, c) {
        return r == null ? r : to(r, i, c);
      }
      function Gw(r, i, c, d) {
        return d = typeof d == "function" ? d : n, r == null ? r : to(r, i, c, d);
      }
      var ah = bf(tt), ch = bf(bt);
      function Yw(r, i, c) {
        var d = de(r), g = d || or(r) || li(r);
        if (i = ie(i, 4), c == null) {
          var x = r && r.constructor;
          g ? c = d ? new x() : [] : Be(r) ? c = Ln(x) ? oi(Ko(r)) : {} : c = {};
        }
        return (g ? zt : ln)(r, function(C, A, M) {
          return i(c, C, A, M);
        }), c;
      }
      function Xw(r, i) {
        return r == null ? !0 : bc(r, i);
      }
      function Zw(r, i, c) {
        return r == null ? r : tf(r, i, Sc(c));
      }
      function Kw(r, i, c, d) {
        return d = typeof d == "function" ? d : n, r == null ? r : tf(r, i, Sc(c), d);
      }
      function ui(r) {
        return r == null ? [] : ec(r, tt(r));
      }
      function qw(r) {
        return r == null ? [] : ec(r, bt(r));
      }
      function Jw(r, i, c) {
        return c === n && (c = i, i = n), c !== n && (c = Vt(c), c = c === c ? c : 0), i !== n && (i = Vt(i), i = i === i ? i : 0), Er(Vt(r), i, c);
      }
      function Qw(r, i, c) {
        return i = Nn(i), c === n ? (c = i, i = 0) : c = Nn(c), r = Vt(r), o2(r, i, c);
      }
      function ex(r, i, c) {
        if (c && typeof c != "boolean" && ht(r, i, c) && (i = c = n), c === n && (typeof i == "boolean" ? (c = i, i = n) : typeof r == "boolean" && (c = r, r = n)), r === n && i === n ? (r = 0, i = 1) : (r = Nn(r), i === n ? (i = r, r = 0) : i = Nn(i)), r > i) {
          var d = r;
          r = i, i = d;
        }
        if (c || r % 1 || i % 1) {
          var g = Pd();
          return at(r + g * (i - r + O0("1e-" + ((g + "").length - 1))), i);
        }
        return mc(r, i);
      }
      var tx = ai(function(r, i, c) {
        return i = i.toLowerCase(), r + (c ? lh(i) : i);
      });
      function lh(r) {
        return Bc(Pe(r).toLowerCase());
      }
      function uh(r) {
        return r = Pe(r), r && r.replace(mt, V0).replace(S0, "");
      }
      function nx(r, i, c) {
        r = Pe(r), i = Et(i);
        var d = r.length;
        c = c === n ? d : Er(he(c), 0, d);
        var g = c;
        return c -= i.length, c >= 0 && r.slice(c, g) == i;
      }
      function rx(r) {
        return r = Pe(r), r && Pa.test(r) ? r.replace(Zr, G0) : r;
      }
      function ix(r) {
        return r = Pe(r), r && zo.test(r) ? r.replace(Kr, "\\$&") : r;
      }
      var ox = ai(function(r, i, c) {
        return r + (c ? "-" : "") + i.toLowerCase();
      }), sx = ai(function(r, i, c) {
        return r + (c ? " " : "") + i.toLowerCase();
      }), ax = hf("toLowerCase");
      function cx(r, i, c) {
        r = Pe(r), i = he(i);
        var d = i ? ei(r) : 0;
        if (!i || d >= i)
          return r;
        var g = (i - d) / 2;
        return hs(es(g), c) + r + hs(Qo(g), c);
      }
      function lx(r, i, c) {
        r = Pe(r), i = he(i);
        var d = i ? ei(r) : 0;
        return i && d < i ? r + hs(i - d, c) : r;
      }
      function ux(r, i, c) {
        r = Pe(r), i = he(i);
        var d = i ? ei(r) : 0;
        return i && d < i ? hs(i - d, c) + r : r;
      }
      function dx(r, i, c) {
        return c || i == null ? i = 0 : i && (i = +i), yv(Pe(r).replace(Bi, ""), i || 0);
      }
      function fx(r, i, c) {
        return (c ? ht(r, i, c) : i === n) ? i = 1 : i = he(i), vc(Pe(r), i);
      }
      function hx() {
        var r = arguments, i = Pe(r[0]);
        return r.length < 3 ? i : i.replace(r[1], r[2]);
      }
      var px = ai(function(r, i, c) {
        return r + (c ? "_" : "") + i.toLowerCase();
      });
      function gx(r, i, c) {
        return c && typeof c != "number" && ht(r, i, c) && (i = c = n), c = c === n ? Oe : c >>> 0, c ? (r = Pe(r), r && (typeof i == "string" || i != null && !Hc(i)) && (i = Et(i), !i && Qr(r)) ? ir(Kt(r), 0, c) : r.split(i, c)) : [];
      }
      var mx = ai(function(r, i, c) {
        return r + (c ? " " : "") + Bc(i);
      });
      function vx(r, i, c) {
        return r = Pe(r), c = c == null ? 0 : Er(he(c), 0, r.length), i = Et(i), r.slice(c, c + i.length) == i;
      }
      function yx(r, i, c) {
        var d = y.templateSettings;
        c && ht(r, i, c) && (i = n), r = Pe(r), i = Ts({}, i, d, wf);
        var g = Ts({}, i.imports, d.imports, wf), x = tt(g), C = ec(g, x), A, M, z = 0, H = i.interpolate || Zt, W = "__p += '", X = nc(
          (i.escape || Zt).source + "|" + H.source + "|" + (H === Ui ? Ie : Zt).source + "|" + (i.evaluate || Zt).source + "|$",
          "g"
        ), te = "//# sourceURL=" + (Me.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++I0 + "]") + `
`;
        r.replace(X, function(se, be, Ee, kt, pt, At) {
          return Ee || (Ee = kt), W += r.slice(z, At).replace(kn, Y0), be && (A = !0, W += `' +
__e(` + be + `) +
'`), pt && (M = !0, W += `';
` + pt + `;
__p += '`), Ee && (W += `' +
((__t = (` + Ee + `)) == null ? '' : __t) +
'`), z = At + se.length, se;
        }), W += `';
`;
        var oe = Me.call(i, "variable") && i.variable;
        if (!oe)
          W = `with (obj) {
` + W + `
}
`;
        else if (Z.test(oe))
          throw new ue(u);
        W = (M ? W.replace(Wi, "") : W).replace(Lo, "$1").replace(Kn, "$1;"), W = "function(" + (oe || "obj") + `) {
` + (oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var ge = fh(function() {
          return ke(x, te + "return " + W).apply(n, C);
        });
        if (ge.source = W, zc(ge))
          throw ge;
        return ge;
      }
      function bx(r) {
        return Pe(r).toLowerCase();
      }
      function wx(r) {
        return Pe(r).toUpperCase();
      }
      function xx(r, i, c) {
        if (r = Pe(r), r && (c || i === n))
          return wd(r);
        if (!r || !(i = Et(i)))
          return r;
        var d = Kt(r), g = Kt(i), x = xd(d, g), C = Sd(d, g) + 1;
        return ir(d, x, C).join("");
      }
      function Sx(r, i, c) {
        if (r = Pe(r), r && (c || i === n))
          return r.slice(0, Cd(r) + 1);
        if (!r || !(i = Et(i)))
          return r;
        var d = Kt(r), g = Sd(d, Kt(i)) + 1;
        return ir(d, 0, g).join("");
      }
      function _x(r, i, c) {
        if (r = Pe(r), r && (c || i === n))
          return r.replace(Bi, "");
        if (!r || !(i = Et(i)))
          return r;
        var d = Kt(r), g = xd(d, Kt(i));
        return ir(d, g).join("");
      }
      function Cx(r, i) {
        var c = K, d = J;
        if (Be(i)) {
          var g = "separator" in i ? i.separator : g;
          c = "length" in i ? he(i.length) : c, d = "omission" in i ? Et(i.omission) : d;
        }
        r = Pe(r);
        var x = r.length;
        if (Qr(r)) {
          var C = Kt(r);
          x = C.length;
        }
        if (c >= x)
          return r;
        var A = c - ei(d);
        if (A < 1)
          return d;
        var M = C ? ir(C, 0, A).join("") : r.slice(0, A);
        if (g === n)
          return M + d;
        if (C && (A += M.length - A), Hc(g)) {
          if (r.slice(A).search(g)) {
            var z, H = M;
            for (g.global || (g = nc(g.source, Pe(Re.exec(g)) + "g")), g.lastIndex = 0; z = g.exec(H); )
              var W = z.index;
            M = M.slice(0, W === n ? A : W);
          }
        } else if (r.indexOf(Et(g), A) != A) {
          var X = M.lastIndexOf(g);
          X > -1 && (M = M.slice(0, X));
        }
        return M + d;
      }
      function Tx(r) {
        return r = Pe(r), r && No.test(r) ? r.replace(Xr, ev) : r;
      }
      var Ex = ai(function(r, i, c) {
        return r + (c ? " " : "") + i.toUpperCase();
      }), Bc = hf("toUpperCase");
      function dh(r, i, c) {
        return r = Pe(r), i = c ? n : i, i === n ? Z0(r) ? rv(r) : H0(r) : r.match(i) || [];
      }
      var fh = me(function(r, i) {
        try {
          return Ct(r, n, i);
        } catch (c) {
          return zc(c) ? c : new ue(c);
        }
      }), Ix = Mn(function(r, i) {
        return zt(i, function(c) {
          c = dn(c), Pn(r, c, jc(r[c], r));
        }), r;
      });
      function kx(r) {
        var i = r == null ? 0 : r.length, c = ie();
        return r = i ? ze(r, function(d) {
          if (typeof d[1] != "function")
            throw new Ht(l);
          return [c(d[0]), d[1]];
        }) : [], me(function(d) {
          for (var g = -1; ++g < i; ) {
            var x = r[g];
            if (Ct(x[0], this, d))
              return Ct(x[1], this, d);
          }
        });
      }
      function Ax(r) {
        return e2(Ut(r, v));
      }
      function $c(r) {
        return function() {
          return r;
        };
      }
      function Rx(r, i) {
        return r == null || r !== r ? i : r;
      }
      var Px = gf(), Ox = gf(!0);
      function wt(r) {
        return r;
      }
      function Vc(r) {
        return $d(typeof r == "function" ? r : Ut(r, v));
      }
      function Mx(r) {
        return Gd(Ut(r, v));
      }
      function Dx(r, i) {
        return Yd(r, Ut(i, v));
      }
      var Lx = me(function(r, i) {
        return function(c) {
          return Qi(c, r, i);
        };
      }), Nx = me(function(r, i) {
        return function(c) {
          return Qi(r, c, i);
        };
      });
      function Gc(r, i, c) {
        var d = tt(i), g = ss(i, d);
        c == null && !(Be(i) && (g.length || !d.length)) && (c = i, i = r, r = this, g = ss(i, tt(i)));
        var x = !(Be(c) && "chain" in c) || !!c.chain, C = Ln(r);
        return zt(g, function(A) {
          var M = i[A];
          r[A] = M, C && (r.prototype[A] = function() {
            var z = this.__chain__;
            if (x || z) {
              var H = r(this.__wrapped__), W = H.__actions__ = vt(this.__actions__);
              return W.push({ func: M, args: arguments, thisArg: r }), H.__chain__ = z, H;
            }
            return M.apply(r, Jn([this.value()], arguments));
          });
        }), r;
      }
      function jx() {
        return rt._ === this && (rt._ = lv), this;
      }
      function Yc() {
      }
      function Fx(r) {
        return r = he(r), me(function(i) {
          return Xd(i, r);
        });
      }
      var zx = Cc(ze), Hx = Cc(gd), Wx = Cc(Za);
      function hh(r) {
        return Pc(r) ? Ka(dn(r)) : v2(r);
      }
      function Ux(r) {
        return function(i) {
          return r == null ? n : Ir(r, i);
        };
      }
      var Bx = vf(), $x = vf(!0);
      function Xc() {
        return [];
      }
      function Zc() {
        return !1;
      }
      function Vx() {
        return {};
      }
      function Gx() {
        return "";
      }
      function Yx() {
        return !0;
      }
      function Xx(r, i) {
        if (r = he(r), r < 1 || r > ee)
          return [];
        var c = Oe, d = at(r, Oe);
        i = ie(i), r -= Oe;
        for (var g = Qa(d, i); ++c < r; )
          i(c);
        return g;
      }
      function Zx(r) {
        return de(r) ? ze(r, dn) : It(r) ? [r] : vt(Mf(Pe(r)));
      }
      function Kx(r) {
        var i = ++av;
        return Pe(r) + i;
      }
      var qx = fs(function(r, i) {
        return r + i;
      }, 0), Jx = Tc("ceil"), Qx = fs(function(r, i) {
        return r / i;
      }, 1), e5 = Tc("floor");
      function t5(r) {
        return r && r.length ? os(r, wt, uc) : n;
      }
      function n5(r, i) {
        return r && r.length ? os(r, ie(i, 2), uc) : n;
      }
      function r5(r) {
        return yd(r, wt);
      }
      function i5(r, i) {
        return yd(r, ie(i, 2));
      }
      function o5(r) {
        return r && r.length ? os(r, wt, pc) : n;
      }
      function s5(r, i) {
        return r && r.length ? os(r, ie(i, 2), pc) : n;
      }
      var a5 = fs(function(r, i) {
        return r * i;
      }, 1), c5 = Tc("round"), l5 = fs(function(r, i) {
        return r - i;
      }, 0);
      function u5(r) {
        return r && r.length ? Ja(r, wt) : 0;
      }
      function d5(r, i) {
        return r && r.length ? Ja(r, ie(i, 2)) : 0;
      }
      return y.after = Mb, y.ary = $f, y.assign = ww, y.assignIn = ih, y.assignInWith = Ts, y.assignWith = xw, y.at = Sw, y.before = Vf, y.bind = jc, y.bindAll = Ix, y.bindKey = Gf, y.castArray = Vb, y.chain = Wf, y.chunk = ey, y.compact = ty, y.concat = ny, y.cond = kx, y.conforms = Ax, y.constant = $c, y.countBy = ub, y.create = _w, y.curry = Yf, y.curryRight = Xf, y.debounce = Zf, y.defaults = Cw, y.defaultsDeep = Tw, y.defer = Db, y.delay = Lb, y.difference = ry, y.differenceBy = iy, y.differenceWith = oy, y.drop = sy, y.dropRight = ay, y.dropRightWhile = cy, y.dropWhile = ly, y.fill = uy, y.filter = fb, y.flatMap = gb, y.flatMapDeep = mb, y.flatMapDepth = vb, y.flatten = jf, y.flattenDeep = dy, y.flattenDepth = fy, y.flip = Nb, y.flow = Px, y.flowRight = Ox, y.fromPairs = hy, y.functions = Ow, y.functionsIn = Mw, y.groupBy = yb, y.initial = gy, y.intersection = my, y.intersectionBy = vy, y.intersectionWith = yy, y.invert = Lw, y.invertBy = Nw, y.invokeMap = wb, y.iteratee = Vc, y.keyBy = xb, y.keys = tt, y.keysIn = bt, y.map = bs, y.mapKeys = Fw, y.mapValues = zw, y.matches = Mx, y.matchesProperty = Dx, y.memoize = xs, y.merge = Hw, y.mergeWith = oh, y.method = Lx, y.methodOf = Nx, y.mixin = Gc, y.negate = Ss, y.nthArg = Fx, y.omit = Ww, y.omitBy = Uw, y.once = jb, y.orderBy = Sb, y.over = zx, y.overArgs = Fb, y.overEvery = Hx, y.overSome = Wx, y.partial = Fc, y.partialRight = Kf, y.partition = _b, y.pick = Bw, y.pickBy = sh, y.property = hh, y.propertyOf = Ux, y.pull = Sy, y.pullAll = zf, y.pullAllBy = _y, y.pullAllWith = Cy, y.pullAt = Ty, y.range = Bx, y.rangeRight = $x, y.rearg = zb, y.reject = Eb, y.remove = Ey, y.rest = Hb, y.reverse = Lc, y.sampleSize = kb, y.set = Vw, y.setWith = Gw, y.shuffle = Ab, y.slice = Iy, y.sortBy = Ob, y.sortedUniq = Dy, y.sortedUniqBy = Ly, y.split = gx, y.spread = Wb, y.tail = Ny, y.take = jy, y.takeRight = Fy, y.takeRightWhile = zy, y.takeWhile = Hy, y.tap = tb, y.throttle = Ub, y.thru = ys, y.toArray = th, y.toPairs = ah, y.toPairsIn = ch, y.toPath = Zx, y.toPlainObject = rh, y.transform = Yw, y.unary = Bb, y.union = Wy, y.unionBy = Uy, y.unionWith = By, y.uniq = $y, y.uniqBy = Vy, y.uniqWith = Gy, y.unset = Xw, y.unzip = Nc, y.unzipWith = Hf, y.update = Zw, y.updateWith = Kw, y.values = ui, y.valuesIn = qw, y.without = Yy, y.words = dh, y.wrap = $b, y.xor = Xy, y.xorBy = Zy, y.xorWith = Ky, y.zip = qy, y.zipObject = Jy, y.zipObjectDeep = Qy, y.zipWith = eb, y.entries = ah, y.entriesIn = ch, y.extend = ih, y.extendWith = Ts, Gc(y, y), y.add = qx, y.attempt = fh, y.camelCase = tx, y.capitalize = lh, y.ceil = Jx, y.clamp = Jw, y.clone = Gb, y.cloneDeep = Xb, y.cloneDeepWith = Zb, y.cloneWith = Yb, y.conformsTo = Kb, y.deburr = uh, y.defaultTo = Rx, y.divide = Qx, y.endsWith = nx, y.eq = Jt, y.escape = rx, y.escapeRegExp = ix, y.every = db, y.find = hb, y.findIndex = Lf, y.findKey = Ew, y.findLast = pb, y.findLastIndex = Nf, y.findLastKey = Iw, y.floor = e5, y.forEach = Uf, y.forEachRight = Bf, y.forIn = kw, y.forInRight = Aw, y.forOwn = Rw, y.forOwnRight = Pw, y.get = Wc, y.gt = qb, y.gte = Jb, y.has = Dw, y.hasIn = Uc, y.head = Ff, y.identity = wt, y.includes = bb, y.indexOf = py, y.inRange = Qw, y.invoke = jw, y.isArguments = Rr, y.isArray = de, y.isArrayBuffer = Qb, y.isArrayLike = yt, y.isArrayLikeObject = Ge, y.isBoolean = ew, y.isBuffer = or, y.isDate = tw, y.isElement = nw, y.isEmpty = rw, y.isEqual = iw, y.isEqualWith = ow, y.isError = zc, y.isFinite = sw, y.isFunction = Ln, y.isInteger = qf, y.isLength = _s, y.isMap = Jf, y.isMatch = aw, y.isMatchWith = cw, y.isNaN = lw, y.isNative = uw, y.isNil = fw, y.isNull = dw, y.isNumber = Qf, y.isObject = Be, y.isObjectLike = Ve, y.isPlainObject = oo, y.isRegExp = Hc, y.isSafeInteger = hw, y.isSet = eh, y.isString = Cs, y.isSymbol = It, y.isTypedArray = li, y.isUndefined = pw, y.isWeakMap = gw, y.isWeakSet = mw, y.join = by, y.kebabCase = ox, y.last = $t, y.lastIndexOf = wy, y.lowerCase = sx, y.lowerFirst = ax, y.lt = vw, y.lte = yw, y.max = t5, y.maxBy = n5, y.mean = r5, y.meanBy = i5, y.min = o5, y.minBy = s5, y.stubArray = Xc, y.stubFalse = Zc, y.stubObject = Vx, y.stubString = Gx, y.stubTrue = Yx, y.multiply = a5, y.nth = xy, y.noConflict = jx, y.noop = Yc, y.now = ws, y.pad = cx, y.padEnd = lx, y.padStart = ux, y.parseInt = dx, y.random = ex, y.reduce = Cb, y.reduceRight = Tb, y.repeat = fx, y.replace = hx, y.result = $w, y.round = c5, y.runInContext = P, y.sample = Ib, y.size = Rb, y.snakeCase = px, y.some = Pb, y.sortedIndex = ky, y.sortedIndexBy = Ay, y.sortedIndexOf = Ry, y.sortedLastIndex = Py, y.sortedLastIndexBy = Oy, y.sortedLastIndexOf = My, y.startCase = mx, y.startsWith = vx, y.subtract = l5, y.sum = u5, y.sumBy = d5, y.template = yx, y.times = Xx, y.toFinite = Nn, y.toInteger = he, y.toLength = nh, y.toLower = bx, y.toNumber = Vt, y.toSafeInteger = bw, y.toString = Pe, y.toUpper = wx, y.trim = xx, y.trimEnd = Sx, y.trimStart = _x, y.truncate = Cx, y.unescape = Tx, y.uniqueId = Kx, y.upperCase = Ex, y.upperFirst = Bc, y.each = Uf, y.eachRight = Bf, y.first = Ff, Gc(y, function() {
        var r = {};
        return ln(y, function(i, c) {
          Me.call(y.prototype, c) || (r[c] = i);
        }), r;
      }(), { chain: !1 }), y.VERSION = o, zt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        y[r].placeholder = y;
      }), zt(["drop", "take"], function(r, i) {
        Se.prototype[r] = function(c) {
          c = c === n ? 1 : Je(he(c), 0);
          var d = this.__filtered__ && !i ? new Se(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = at(c, d.__takeCount__) : d.__views__.push({
            size: at(c, Oe),
            type: r + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Se.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), zt(["filter", "map", "takeWhile"], function(r, i) {
        var c = i + 1, d = c == ne || c == re;
        Se.prototype[r] = function(g) {
          var x = this.clone();
          return x.__iteratees__.push({
            iteratee: ie(g, 3),
            type: c
          }), x.__filtered__ = x.__filtered__ || d, x;
        };
      }), zt(["head", "last"], function(r, i) {
        var c = "take" + (i ? "Right" : "");
        Se.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), zt(["initial", "tail"], function(r, i) {
        var c = "drop" + (i ? "" : "Right");
        Se.prototype[r] = function() {
          return this.__filtered__ ? new Se(this) : this[c](1);
        };
      }), Se.prototype.compact = function() {
        return this.filter(wt);
      }, Se.prototype.find = function(r) {
        return this.filter(r).head();
      }, Se.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Se.prototype.invokeMap = me(function(r, i) {
        return typeof r == "function" ? new Se(this) : this.map(function(c) {
          return Qi(c, r, i);
        });
      }), Se.prototype.reject = function(r) {
        return this.filter(Ss(ie(r)));
      }, Se.prototype.slice = function(r, i) {
        r = he(r);
        var c = this;
        return c.__filtered__ && (r > 0 || i < 0) ? new Se(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), i !== n && (i = he(i), c = i < 0 ? c.dropRight(-i) : c.take(i - r)), c);
      }, Se.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Se.prototype.toArray = function() {
        return this.take(Oe);
      }, ln(Se.prototype, function(r, i) {
        var c = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), g = y[d ? "take" + (i == "last" ? "Right" : "") : i], x = d || /^find/.test(i);
        g && (y.prototype[i] = function() {
          var C = this.__wrapped__, A = d ? [1] : arguments, M = C instanceof Se, z = A[0], H = M || de(C), W = function(be) {
            var Ee = g.apply(y, Jn([be], A));
            return d && X ? Ee[0] : Ee;
          };
          H && c && typeof z == "function" && z.length != 1 && (M = H = !1);
          var X = this.__chain__, te = !!this.__actions__.length, oe = x && !X, ge = M && !te;
          if (!x && H) {
            C = ge ? C : new Se(this);
            var se = r.apply(C, A);
            return se.__actions__.push({ func: ys, args: [W], thisArg: n }), new Wt(se, X);
          }
          return oe && ge ? r.apply(this, A) : (se = this.thru(W), oe ? d ? se.value()[0] : se.value() : se);
        });
      }), zt(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var i = $o[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(r);
        y.prototype[r] = function() {
          var g = arguments;
          if (d && !this.__chain__) {
            var x = this.value();
            return i.apply(de(x) ? x : [], g);
          }
          return this[c](function(C) {
            return i.apply(de(C) ? C : [], g);
          });
        };
      }), ln(Se.prototype, function(r, i) {
        var c = y[i];
        if (c) {
          var d = c.name + "";
          Me.call(ii, d) || (ii[d] = []), ii[d].push({ name: i, func: c });
        }
      }), ii[ds(n, k).name] = [{
        name: "wrapper",
        func: n
      }], Se.prototype.clone = Tv, Se.prototype.reverse = Ev, Se.prototype.value = Iv, y.prototype.at = nb, y.prototype.chain = rb, y.prototype.commit = ib, y.prototype.next = ob, y.prototype.plant = ab, y.prototype.reverse = cb, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = lb, y.prototype.first = y.prototype.head, Gi && (y.prototype[Gi] = sb), y;
    }, ti = iv();
    Sr ? ((Sr.exports = ti)._ = ti, Va._ = ti) : rt._ = ti;
  }).call(so);
})(qs, qs.exports);
var Ae = qs.exports;
const HC = () => {
  const { trackItemIds: e, trackItemsMap: t, fps: n, trackItemDetailsMap: o } = Un(), s = Ae.merge(t, o);
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: e.map((a) => {
    const l = s[a];
    return zC[l.type](l, {
      fps: n
    });
  }) });
}, WC = () => {
  const e = hn(null), { setPlayerRef: t, duration: n, fps: o, size: s } = Un();
  return Mt(() => {
    t(e);
  }, []), /* @__PURE__ */ m.jsx(Eu, { className: "size-full", children: /* @__PURE__ */ m.jsx(
    v5,
    {
      ref: e,
      component: HC,
      durationInFrames: Math.round(n / 1e3 * o) || 5 * 30,
      compositionWidth: s.width,
      compositionHeight: s.height,
      style: { width: "100%", height: "100%" },
      inputProps: {},
      fps: o,
      controls: !0,
      numberOfSharedAudioTags: 10
    }
  ) });
}, UC = ({ scrollLeft: e }) => {
  const t = hn(null), { playerRef: n, fps: o, scale: s } = Un(), a = ku(n ?? void 0), l = Ze(a / o * 1e3, s.zoom) - e, [u, f] = st(!1), [h, p] = st(0), [v, b] = st(l), S = () => {
    f(!1);
  }, T = (E) => {
    f(!0);
    const k = "touches" in E ? E.touches[0].clientX : E.clientX;
    p(k), b(l);
  }, _ = (E) => {
    if (u) {
      const R = ("touches" in E ? E.touches[0].clientX : E.clientX) - h, O = v + R, D = tn(O, s.zoom);
      n?.current?.seekTo(D * o / 1e3);
    }
  };
  return Mt(() => {
    const E = (k) => {
      k.preventDefault();
    };
    return u ? (document.addEventListener("mousemove", _), document.addEventListener("mouseup", S), document.addEventListener("touchmove", _), document.addEventListener("touchend", S), document.addEventListener("dragstart", E)) : (document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", _), document.removeEventListener("touchend", S)), () => {
      document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", _), document.removeEventListener("touchend", S), document.removeEventListener("dragstart", E);
    };
  }, [u, _, S]), /* @__PURE__ */ m.jsx(
    "div",
    {
      ref: t,
      role: "button",
      tabIndex: 0,
      onMouseDown: (E) => {
        T(E);
      },
      onTouchStart: (E) => {
        T(E);
      },
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && T(E);
      },
      style: {
        position: "absolute",
        left: 40 + Iu + l,
        top: 80,
        width: 1,
        height: "calc(100% - 80px)",
        background: "#d4d4d8",
        zIndex: 10,
        cursor: "pointer"
      },
      children: /* @__PURE__ */ m.jsxs("div", { className: "relative h-full", children: [
        /* @__PURE__ */ m.jsx("div", { className: "absolute top-0  h-full w-3 -translate-x-1/2" }),
        /* @__PURE__ */ m.jsx("div", { className: "absolute top-0  h-full w-0.5 -translate-x-1/2 bg-white/50" }),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            style: {
              borderRadius: "0 0 20px 20px"
            },
            className: "absolute h-3 -translate-x-1/2 px-1.5",
            children: /* @__PURE__ */ m.jsx(
              "svg",
              {
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                children: /* @__PURE__ */ m.jsx(
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
}, BC = (e) => {
  const {
    height: t = 40,
    // Increased height to give space for the text
    longLineSize: n = 8,
    shortLineSize: o = 6,
    offsetX: s = Wl + Iu,
    textOffsetY: a = 12,
    // Place the text above the lines but inside the canvas
    textFormat: l = p_,
    scrollLeft: u = 0,
    onClick: f
  } = e, { scale: h } = Un(), p = hn(null), [v, b] = st(null), [S, T] = st({
    width: 0,
    height: t
    // Increased height for text space
  });
  Mt(() => {
    const R = p.current;
    if (R) {
      const O = R.getContext("2d");
      b(O), _(R, O, u);
    }
  }, []), Mt(() => {
    v && _(p.current, v, u);
  }, [v, u, h]);
  const _ = (R, O, D) => {
    if (!R || !O) return;
    const $ = R.offsetParent.offsetWidth ?? R.offsetWidth, F = S.height;
    R.width = $, R.height = F, E(O, D, $, F), T({ width: $, height: F });
  }, E = (R, O, D, j) => {
    const $ = h.zoom, F = h.unit, V = h.segments;
    R.clearRect(0, 0, D, j), R.save(), R.strokeStyle = "#71717a", R.fillStyle = "#71717a", R.lineWidth = 1, R.font = `${c_}px ${l_}`, R.textBaseline = "top", R.translate(0.5, 0), R.beginPath();
    const G = F * $ * Sa, K = Math.floor(O / G), Y = Math.ceil((O + D) / G) - K;
    for (let Q = 0; Q <= Y; ++Q) {
      const ne = Q + K;
      if (ne < 0) continue;
      const Te = ne * G / $, re = (Te - O / $) * $;
      if (re < -G || re >= D + G) continue;
      const le = l(Te), ye = -R.measureText(le).width / 2;
      R.fillText(le, re + ye + s, a);
    }
    for (let Q = 0; Q <= Y; ++Q) {
      const ne = Q + K;
      if (ne < 0) continue;
      const re = ne * G - O + s;
      for (let le = 0; le < V; ++le) {
        const ee = re + le / V * G;
        if (ee < 0 || ee >= D) continue;
        const ye = le % V ? o : n;
        ye === o ? R.strokeStyle = "#a1a1aa" : R.strokeStyle = "#d4d4d8";
        const fe = 32, [Oe, Cn] = [ee, fe], [$n, br] = [Oe, Cn + ye];
        R.beginPath(), R.moveTo(Oe, Cn), R.lineTo($n, br), R.stroke();
      }
    }
    R.restore();
  }, k = (R) => {
    const O = p.current;
    if (!O) return;
    const D = O.getBoundingClientRect(), $ = R.clientX - D.left + u - Wl;
    f?.($);
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "border-border border-t",
      style: {
        position: "relative",
        width: "100%",
        height: `${S.height}px`,
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ m.jsx(
        "canvas",
        {
          onClick: k,
          ref: p,
          height: S.height
        }
      )
    }
  );
}, $C = () => /* @__PURE__ */ m.jsx(
  Eu,
  {
    flexGrow: "1",
    justify: "center",
    width: "100%",
    height: "100%",
    className: "bg-scene py-3",
    children: /* @__PURE__ */ m.jsx("div", { className: "max-w-3xl flex-1  w-full h-full flex relative", children: /* @__PURE__ */ m.jsx(WC, {}) })
  }
);
class VC {
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
      const n = new Kl(t);
      this.setActiveObject(n);
    }
    this.requestRenderAll();
  }
}
class Ci extends xn {
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
    super(t), Object.assign(this, Ci.ownDefaults), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.text = t.text || "", this.backgroundColor = t.backgroundColor || "transparent";
  }
  static createControls() {
    return {
      controls: _m()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Ci.ownDefaults
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
function pr(e, t, n, o, s) {
  e.save(), e.translate(t, n), e.rotate(Op.degreesToRadians(90 + s.angle)), e.beginPath(), e.lineWidth = 4, e.lineCap = "round", e.strokeStyle = "#dfe2e8", e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
function _m() {
  return {
    mr: new vn({
      x: 0.5,
      y: 0,
      actionHandler: Js,
      cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: pr
    }),
    ml: new vn({
      x: -0.5,
      y: 0,
      actionHandler: Js,
      cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: pr
    })
  };
}
const Js = ut.wrapWithFireEvent(
  "resizing",
  ut.wrapWithFixedAnchor((e, t, n, o) => {
    const s = ut.getLocalPoint(
      t,
      t.originX,
      t.originY,
      n,
      o
    );
    if (YC(t.originX) || ZC(t.originX) && s.x < 0 || XC(t.originX) && s.x > 0) {
      const a = t.target, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = KC(t) ? 2 : 1, f = a.width, h = Math.ceil(
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
), GC = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
}, Ce = (e) => typeof e == "string" ? GC[e] : e - 0.5, YC = (e) => Ce(e) === Ce("center"), XC = (e) => Ce(e) === Ce("left"), ZC = (e) => Ce(e) === Ce("right");
function KC(e) {
  return Ce(e.originX) === Ce("center") && Ce(e.originY) === Ce("center");
}
dt.setClass(Ci, "Text");
class on extends xn {
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
    }), Object.assign(this, on.ownDefaults);
  }
  static createControls() {
    return {
      controls: qC()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...on.ownDefaults
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
dt.setClass(on, "Transition");
const qC = () => ({
  mr: new vn({
    x: 0.5,
    y: 0,
    actionHandler: ap,
    cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: pr
  }),
  ml: new vn({
    x: -0.5,
    y: 0,
    actionHandler: ap,
    cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: pr
  })
});
dt.setClass(on, "Transition");
const { wrapWithFireEvent: JC, getLocalPoint: QC } = ut, Ul = "center", e9 = "left", t9 = "right";
function n9(e) {
  return (t, n, o, s) => {
    const { target: a, originX: l, originY: u } = n, f = a.getRelativeCenterPoint(), h = a.translateToOriginPoint(
      f,
      l,
      u
    ), p = e(t, n, o, s);
    return a.setPositionByOrigin(h, l, u), p;
  };
}
const r9 = (e, t, n, o) => {
  const s = QC(
    t,
    t.originX,
    t.originY,
    n,
    o
  );
  if (Ce(t.originX) === Ce(Ul) || Ce(t.originX) === Ce(t9) && s.x < 0 || Ce(t.originX) === Ce(e9) && s.x > 0) {
    const { target: a } = t, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = i9(t) ? 2 : 1, f = a.width, h = Math.ceil(
      Math.abs(s.x * u / a.scaleX) - l
    ), p = tn(h, a.tScale);
    return p >= 1500 || p < 500 ? !1 : (a.set("width", Math.max(h, 0)), a.set("duration", p), a.setCoords(), a.canvas && a.canvas.renderAll(), f !== a.width);
  }
  return !1;
};
function i9(e) {
  return Ce(e.originX) === Ce(Ul) && Ce(e.originY) === Ce(Ul);
}
const ap = JC(
  "resizing",
  n9(r9)
);
class bo extends xn {
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
    super(t), this.id = t.id, this.for = t.for, Object.assign(this, bo.ownDefaults);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...bo.ownDefaults
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
dt.setClass(bo, "Placeholder");
const o9 = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 }
}, Ca = "rgba(0, 216, 214, 1.0)", fl = (e, t, n) => new xn({
  top: e,
  left: 0,
  strokeWidth: 0,
  fill: "transparent",
  selectable: !0,
  height: n,
  width: t
});
class go extends ql {
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
    const n = o9[t.kind], o = fl(0, t.width, n.top), s = fl(n.top, t.width, n.guideHeight), a = fl(
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
    this.guide.set("fill", t ? Ca : "transparent");
  }
}
const Ro = go;
dt.setClass(Ro, "Helper");
class jr extends xn {
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
    super(t), Object.assign(this, jr.ownDefaults), this.id = t.id, this.accepts = t.accepts || ["audio", "video", "image", "text"], this.items = t.items || [], this.metadata = t.metadata;
  }
  static getDefaults() {
    return { ...super.getDefaults(), ...jr.ownDefaults };
  }
  updateCoords(t) {
    this.width = t;
  }
}
dt.setClass(jr, "Track");
class Qs extends xn {
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
    super(t), this.itemType = "image", this.isSelected = !1, Object.assign(this, Qs.ownDefaults), this.id = t.id, this.src = t.src, this.display = t.display, this.tScale = t.tScale;
  }
  static createControls() {
    return {
      controls: _m()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Qs.ownDefaults
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
    ), t.lineWidth = 2, t.strokeStyle = Ca, t.stroke(), t.restore());
  }
}
const Ru = Qs;
dt.setClass(Ru, "Image");
class lr extends xn {
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
      ...lr.getDefaults(),
      ...t
    }), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.trim = t.trim, this.src = t.src;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...lr.ownDefaults
    };
  }
  static createControls() {
    return { controls: s9() };
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
      lr.ownDefaults.rx
    ), t.lineWidth = 2, t.strokeStyle = Ca, t.stroke(), t.restore());
  }
}
dt.setClass(lr, "Audio");
const s9 = () => ({
  mr: new vn({
    x: 0.5,
    y: 0,
    render: pr,
    actionHandler: cp,
    cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new vn({
    x: -0.5,
    y: 0,
    render: pr,
    actionHandler: cp,
    cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: a9, getLocalPoint: c9 } = ut, l9 = (e, t, n, o) => {
  const s = c9(
    t,
    t.originX,
    t.originY,
    n,
    o
  );
  if (Ce(t.originX) === Ce("center") || Ce(t.originX) === Ce("right") && s.x < 0 || Ce(t.originX) === Ce("left") && s.x > 0) {
    const { target: a } = t, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = Cm(t) ? 2 : 1, f = a.width, h = Math.ceil(
      Math.abs(s.x * u / a.scaleX) - l
    );
    if (t.corner === "ml") {
      const p = h - f, v = tn(p, a.tScale);
      if (a.trim.from - v < 0) return !1;
      const T = t.width - h;
      if (t.left + T < 0)
        return t.set("width", t.width + t.left), !0;
    }
    if (t.corner === "mr") {
      const p = a.trim.to, v = h - f, b = tn(v, a.tScale), S = p + b;
      if (S > a.duration) return !1;
      a.set("width", Math.max(h, 0)), a.trim.to = S;
    } else {
      if (a.left < 0) return !1;
      const p = f - h;
      if (a.left + p < 0)
        return a.set("width", a.width + a.left), !0;
      const v = h - f, b = a.trim.from, S = tn(v, a.tScale), T = b - S;
      if (T < 0) return !1;
      a.set("width", Math.max(h, 0)), a.trim.from = T;
    }
    return f !== a.width;
  }
  return !1;
};
function Cm(e) {
  return Ce(e.originX) === Ce("center") && Ce(e.originY) === Ce("center");
}
const cp = a9(
  "resizing",
  Tm(l9)
);
class Pi extends xn {
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
    super(Object.assign({}, Pi.defaultProps, t)), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.trim = t.trim;
  }
  static createControls() {
    return { controls: u9() };
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
    ), t.lineWidth = 2, t.strokeStyle = Ca, t.stroke(), t.restore());
  }
}
dt.setClass(Pi, "Video");
const u9 = () => ({
  mr: new vn({
    x: 0.5,
    y: 0,
    render: pr,
    actionHandler: lp,
    cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new vn({
    x: -0.5,
    y: 0,
    render: pr,
    actionHandler: lp,
    cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: d9, getLocalPoint: f9 } = ut, h9 = (e, t, n, o) => {
  const s = f9(
    t,
    t.originX,
    t.originY,
    n,
    o
  );
  if (Ce(t.originX) === Ce("center") || Ce(t.originX) === Ce("right") && s.x < 0 || Ce(t.originX) === Ce("left") && s.x > 0) {
    const { target: a } = t, l = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), u = Cm(t) ? 2 : 1, f = a.width, h = Math.ceil(
      Math.abs(s.x * u / a.scaleX) - l
    );
    if (t.corner === "ml") {
      const p = h - f, v = tn(p, a.tScale);
      if (a.trim.from - v < 0) return !1;
      const T = t.width - h;
      if (t.left + T < 0)
        return t.set("width", t.width + t.left), !0;
    }
    if (t.corner === "mr") {
      const p = a.trim.to, v = h - f, b = tn(v, a.tScale), S = p + b;
      if (S > a.duration) return !1;
      a.set("width", Math.max(h, 0)), a.trim.to = S;
    } else {
      if (a.left < 0) return !1;
      const p = f - h;
      if (a.left + p < 0)
        return a.set("width", a.width + a.left), !0;
      const v = h - f, b = a.trim.from, S = tn(v, a.tScale), T = b - S;
      if (T < 0) return !1;
      a.set("width", Math.max(h, 0)), a.trim.from = T;
    }
    return f !== a.width;
  }
  return !1;
};
function Tm(e) {
  return (t, n, o, s) => {
    const { target: a, originX: l, originY: u } = n, f = a.getRelativeCenterPoint(), h = a.translateToOriginPoint(
      f,
      l,
      u
    ), p = e(t, n, o, s);
    return a.setPositionByOrigin(h, l, u), p;
  };
}
const lp = d9(
  "resizing",
  Tm(h9)
);
class ea extends xn {
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
    super(t), Object.assign(this, ea.ownDefaults), this.id = t.id;
  }
  static createControls() {
    return {
      controls: p9()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ea.ownDefaults
    };
  }
  updateCoords() {
    const t = this.canvas;
    if (!t) return;
    const n = t.getObjects().find((a) => a.id === this.fromId);
    if (!n) return;
    const o = Ze(this.duration, this.tScale), s = n.left + n.width - o / 2;
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
function p9() {
  return {
    mr: new vn({
      x: 0.5,
      y: 0,
      actionHandler: Js,
      cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: up
    }),
    ml: new vn({
      x: -0.5,
      y: 0,
      actionHandler: Js,
      cursorStyleHandler: ut.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: up
    })
  };
}
function up(e, t, n, o, s) {
  e.save(), e.translate(t, n), e.rotate(Op.degreesToRadians(90 + s.angle)), e.lineWidth = 6, e.lineCap = "round", e.strokeStyle = "white", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.lineWidth = 4, e.strokeStyle = "black", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
class ta extends xn {
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
    super(t), Object.assign(this, ta.ownDefaults), this.id = t.id, this.name = t.name || "item", this.durationString = "00:05", this.fill = "#27272a";
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ta.ownDefaults
    };
  }
  _render(t) {
    t.save(), super._render(t), t.beginPath(), t.rect(-this.width / 2, -this.height / 2, this.width, this.height), t.clip(), this.drawTextIdentity(t), t.restore();
  }
  drawTextIdentity(t) {
    t.font = "600 12px 'Geist variable'", t.textAlign = "left";
    const f = t.measureText(this.name).width, h = t.measureText(this.durationString).width, p = -this.height / 2 + 4, v = -this.width / 2, b = v + f + 8 * 2 + 4, S = f + 8 * 2;
    this.drawRoundedRect(
      t,
      v,
      p,
      S,
      20,
      4
    ), t.fillStyle = "#f4f4f5", t.fillText(this.name, v + 8, p + 12 + 2);
    const T = h + 8 * 2;
    this.drawRoundedRect(
      t,
      b,
      p,
      T,
      20,
      4
    ), t.fillStyle = "#f4f4f5", t.fillText(
      this.durationString,
      b + 8,
      p + 12 + 2
    );
  }
  drawRoundedRect(t, n, o, s, a, l) {
    t.fillStyle = "rgba(0, 0, 0, 0.5)", t.roundRect ? (t.beginPath(), t.roundRect(n, o, s, a, l), t.fill()) : t.fillRect(n, o, s, a);
  }
}
function g9(e, t) {
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
const Pu = (e, t) => {
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
}, m9 = (e) => new Promise((t, n) => {
  const o = new Audio();
  o.preload = "auto", o.addEventListener("loadedmetadata", () => {
    const s = o.duration * 1e3;
    t({
      duration: s
    });
  }), o.addEventListener("error", (s) => {
    n(s);
  }), o.src = e, o.crossOrigin = "anonymous", o.load();
}), v9 = (e) => new Promise((t, n) => {
  const o = new Image();
  console.warn("Consider updating CDN config for CORS issues?"), o.onload = () => {
    const s = o.width, a = o.height;
    t({ width: s, height: a });
  }, o.onerror = (s) => {
    n(s);
  }, o.crossOrigin = "anonymous", o.src = e;
}), y9 = (e) => new Promise((t, n) => {
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
}), Hs = (e, t) => {
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
}, 0), b9 = (e, t) => {
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
}, w9 = (e, t) => {
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
function x9(e, t) {
  return e.map((n) => {
    const o = n.items.filter(
      (s) => !t.includes(s)
    );
    return { ...n, items: o };
  }).filter((n) => n.items.length > 0);
}
const S9 = async (e, t) => {
  const n = e.details, o = await v9(n.src), s = Pu(t, o);
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
}, _9 = async (e, t) => {
  const n = e.details.src, o = await y9(n), s = Pu(t, {
    ...o
  }), a = b9(e.trim, { duration: o.duration }), l = {
    width: o.width,
    height: o.height,
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
    display: w9(e?.display, {
      duration: o.duration,
      trim: a
    })
  };
}, C9 = async (e) => {
  const t = e.details, n = (await m9(t.src)).duration, o = e?.display?.from ?? 0;
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
}, T9 = 5e3, Em = async (e, t) => {
  const n = e.id;
  await C_([
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
  }, s = Hs(e.details.text ?? "", o), a = Pu(t, {
    width: o.width ?? 0,
    height: s
  });
  return {
    id: n,
    name: "",
    type: "text",
    display: {
      from: e.display.from ?? 0,
      to: e.display.to ?? T9
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
}, E9 = (e, t) => {
  const n = e.display, o = Ze(n.from, t.tScale), s = Ze(n.to - n.from, t.tScale), a = dt.getClass("Audio") || lr;
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
}, I9 = (e, t) => {
  const n = Ze(e.display.from, t.tScale), o = Ze(e.details.duration || 5e3, t.tScale), s = dt.getClass("Image") || Ru;
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
}, k9 = (e, t) => {
  const n = Ze(e.trim.from, t.tScale), o = Ze(e.trim.to - e.trim.from, t.tScale), s = dt.getClass("Video") || Pi;
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
}, A9 = (e, t) => {
  const n = e.display, o = Ze(n.from, t.tScale), s = Ze(n.to - n.from, t.tScale), a = dt.getClass("Text") || Ci;
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
}, R9 = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42
}, P9 = (e = {}) => {
  const t = { ...R9, ...e };
  return Object.fromEntries(
    Object.entries(t).filter(([, n]) => typeof n == "number")
  );
};
let O9 = class extends lr {
  static type = "Audio";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Audio";
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
class M9 extends Pi {
  static type = "Video";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Video";
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
class Im extends Ci {
  static type = "Text";
  constructor(t) {
    super(t), this.fill = "#303030";
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
let D9 = class extends Ru {
  static type = "Image";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Image";
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
class L9 extends jr {
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
class N9 extends Ro {
  static type = "Helper";
  constructor(t) {
    t.activeGuideFill = "#ffffff", super(t);
  }
}
class j9 {
  addTrackItem(t) {
    const n = t.id, o = hl(t, {
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
      const { id: s, left: a, width: l } = o, u = this.trackItemsMap[s], f = tn(a, this.tScale), h = f + tn(l, this.tScale), p = { from: f, to: h }, v = {
        ...u,
        display: p,
        trim: o instanceof Pi || o instanceof lr ? o.trim : void 0
      };
      o.display = p, n[s] = v;
    }), this.trackItemsMap = n, this.resumeEventListeners();
  }
  deleteActiveTrackItem() {
    const t = this.getActiveObjects();
    if (!t.length) return !1;
    const n = t.map((s) => s.id), o = Ks(this.tracks, n);
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
      const u = Ze(a.display.from, this.tScale), f = Ze(
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
      id: et()
    }, a = this.tracks.find(
      (p) => p.items.includes(n)
    ), l = this.tracks.findIndex((p) => p.id === a?.id) + 1;
    this.findOrCreateTrack(s, { trackIndex: l });
    const u = hl(s, {
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
      id: et()
    };
    if (o.type === "video" || o.type === "audio") {
      const p = s - a.display.from;
      a.trim = {
        from: o.trim.from,
        to: o.trim.from + p
      }, l.trim = {
        from: a.trim.to,
        to: o.trim.to
      };
    }
    const u = this.getObjects().find(
      (p) => p.id === n
    );
    u.display = a.display, this.tracks.find(
      (p) => p.items.includes(n)
    )?.items.push(l.id);
    const h = hl(l, {
      tScale: this.tScale
    });
    h && this.add(h), this.trackItemsMap[l.id] = l, this.trackItemsMap[n] = a, this.trackItemIds.push(l.id), this.updateTrackItemCoords(a.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  updateTrackItemCoords(t) {
    const n = this.getObjects().find((l) => l.id === t), o = this.trackItemsMap[t], s = Ze(o.display.from, this.tScale), a = Ze(
      o.display.to - o.display.from,
      this.tScale
    );
    n?.set({ left: s, width: a }), n?.setCoords();
  }
  updateTrackItemDetails(t, n) {
    const o = n?.trackItemId;
    if (!o) return !1;
    const s = this.trackItemsMap[o], a = { ...s.details, ...t.details };
    ("fontSize" in a || "lineHeight" in a) && (a.height = Hs(
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
      l instanceof Im && (l.text = t.details.text, this.requestRenderAll());
    }
    ("fontSize" in a || "lineHeight" in a) && (a.height = Hs(
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
      ("fontSize" in l || "lineHeight" in l) && (l.height = Hs(
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
    return this.getObjects(...F9);
  }
  setActiveTrackItemCoords() {
    this.getActiveObjects().forEach((t) => t.setCoords());
  }
  deleteTrackItemById(t) {
    const n = this.getObjects().filter(
      (o) => t.includes(o.id)
    );
    this.tracks = Ks(this.tracks, t), this.trackItemsMap = Object.keys(this.trackItemsMap).filter((o) => !t.includes(o)).reduce((o, s) => (o[s] = this.trackItemsMap[s], o), {}), this.trackItemIds = this.trackItemIds.filter((o) => !t.includes(o)), this.discardActiveObject(), this.remove(...n), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = wn(this.trackItemsMap);
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
      const s = new Kl(o);
      this.setActiveObject(s);
    }
    this.requestRenderAll();
  }
}
const F9 = ["Image", "Text", "Video", "Audio", "Caption", "Template"], hl = (e, t) => {
  const o = {
    text: A9,
    video: k9,
    image: I9,
    audio: E9
  }[e.type];
  return o(e, t);
}, gi = {
  text: 32,
  image: 40,
  video: 40,
  audio: 32,
  main: 40
}, dp = (e) => {
  switch (e) {
    case "text":
      return gi.text;
    case "image":
      return gi.image;
    case "video":
      return gi.video;
    case "audio":
      return gi.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return gi.main;
    default:
      return gi.text;
  }
};
class z9 {
  // Метод для нахождения или создания нового трека
  findOrCreateTrack(t, { trackId: n, trackIndex: o }) {
    const s = n;
    if (s) {
      const l = this.tracks.find((u) => u.id === s);
      if (l)
        return l.items.push(t.id), s;
    }
    const a = {
      id: et(),
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
    const s = dt.getClass("Helper") || Ro, a = new s({
      id: "helperLineTop",
      top: o,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: t,
      kind: "top",
      metadata: {}
    });
    o += dp("helperTop"), this.insertAt(0, a), n.forEach((u, f) => {
      if (u.type === "helper") {
        const h = dp("helperCenter"), p = new s({
          id: u.id,
          top: o,
          tScale: this.tScale,
          width: t,
          height: h,
          metadata: { order: (f + 1) / 2 },
          kind: "center"
        });
        o += h, this.insertAt(0, p);
      } else {
        const h = dt.getClass("Track") || jr, p = new h({
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
        o += 42, this.insertAt(0, p);
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
const H9 = 60, W9 = 188;
function fp(e, t = 1, n = 1) {
  const o = W9 * t;
  return e * (H9 / 1e3) * o / n;
}
class U9 {
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
      const f = fp(n.duration, this.tScale), h = l.left + l.width - f / 2, p = l.height, v = new on({
        id: n.id,
        left: h,
        top: l.top,
        height: p,
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
      if (n instanceof on) {
        const o = this.getObjects().find(
          (l) => l.id === n.fromId
        );
        if (!o) return;
        const s = fp(n.duration, this.tScale), a = o.left + o.width - s / 2;
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
        const h = u[f], p = u[f + 1];
        if (Math.abs(h.left + h.width - p.left) <= 1) {
          const v = `${h.id}-${p.id}`;
          if (this.transitionIds.includes(v))
            s[v] = this.transitionsMap[v];
          else {
            const b = {
              id: v,
              duration: 1500,
              fromId: h.id,
              toId: p.id,
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
const B = {
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
}, Xe = {
  guide: null,
  object: null,
  objects: []
}, uA = () => B, dA = (e) => {
  Object.assign(B, e);
}, B9 = (e) => {
  e.on("before:transform", km.bind(e));
}, $9 = (e) => {
  e.off("before:transform", km.bind(e));
};
function km(e) {
  B.canvas = this, B.activeTrackToItemsMap = {}, B.primaryTracks = {}, B.secondaryTracks = {}, B.trackTops = [], B.trackToItemsMap = {}, B.activeObjects = [], B.trackTopToIdMap = {}, B.canvas.trackIdAfterTransform = "", B.canvas.positionAfterTransform = {};
  const t = B.canvas.getActiveObject();
  if (!t) return;
  B.activeObjects = t instanceof Kl ? t.getObjects() : [t];
  const n = B.canvas.getScenePoint(e.e), o = B.canvas.getObjects("Track");
  B.originTrack = o.find((l) => {
    const u = l.getBoundingRect();
    return n.x >= u.left && n.x <= u.left + u.width && n.y >= u.top && n.y <= u.top + u.height;
  }) ?? {};
  const s = B.canvas.getObjects(
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
    B.trackToItemsMap[l.id] = u, B.trackTopToIdMap[l.top] = l.id, B.trackTops.push(l.top);
  }), B.trackTops.sort((l, u) => l - u), B.activeObjects.forEach((l) => {
    const u = o?.find(
      (h) => h.items.includes(l.id)
    );
    if (!u) return;
    const f = u.id;
    B.activeTrackToItemsMap[f] ? B.activeTrackToItemsMap[f].push(l) : B.activeTrackToItemsMap[f] = [l];
  }), B.primaryMovingObjects = B.activeObjects.filter(
    (l) => {
      const u = l.getBoundingRect();
      return n.y >= u.top && n.y <= u.top + u.height && !(l instanceof on);
    }
  ), B.primaryMovingObjects.forEach((l) => {
    const u = l.getBoundingRect().top, f = B.trackTopToIdMap[u];
    if (B.primaryTracks[f])
      B.primaryTracks[f].objects.push(l);
    else {
      const h = Bl(
        B.trackTops,
        B.originTrack.top,
        u
      );
      if (typeof h != "number") return;
      B.primaryTracks[f] = { objects: [l], index: h };
    }
  }), B.primaryMovingObjects = B.primaryMovingObjects.sort(
    (l, u) => l.left - u.left
  ), B.secondaryMovingObjects = B.activeObjects.filter(
    (l) => !B.primaryMovingObjects.includes(l) && !(l instanceof on)
  ), B.secondaryMovingObjects.forEach((l) => {
    const u = l.getBoundingRect().top, f = B.trackTopToIdMap[l.getBoundingRect().top];
    if (B.secondaryTracks[f])
      B.secondaryTracks[f].objects.push(l);
    else {
      const h = Bl(
        B.trackTops,
        B.originTrack.top,
        u
      );
      if (typeof h != "number") return;
      B.secondaryTracks[f] = { objects: [l], index: h };
    }
  }), B.originTrack && (B.canvas.trackOriginBeforeTransform = B.originTrack.id), t && (B.canvas.positionBeforeTransform = {
    top: t.top,
    left: t.left
  }), ("transform" in e ? e.transform : {}).action === "drag" && (B.placeholderMovingObjects = B.primaryMovingObjects.map(
    (l) => {
      const u = l.getBoundingRect();
      B.objectInitialPositions[l.id] = {
        top: u.top,
        left: u.left
      };
      const f = new bo({
        id: `${l.id}-placeholder`,
        left: u.left,
        top: u.top,
        width: u.width,
        height: u.height,
        for: V9[l.type]
      });
      return f.draggedObject = l, f;
    }
  ), B.canvas.add(...B.placeholderMovingObjects));
}
function Bl(e, t, n) {
  const o = e.indexOf(t), s = e.indexOf(n);
  return o === -1 || s === -1 ? null : s - o;
}
const V9 = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text"
};
function Am(e) {
  if (!Xe.guide) return !1;
  e.e.preventDefault();
  const t = this, n = t.getViewportPoint(e.e);
  Xe.guide.set({
    left: n.x - 16,
    top: n.y - Xe.guide.height / 2
  });
  const o = G9(
    n,
    Xe.objects
  );
  o && (Xe.object = o, o.strokeDashArray = [5, 1], o.setSelected(!0)), Xe.objects.forEach((s) => {
    s !== o && s.setSelected(!1);
  }), t.requestRenderAll();
}
function G9(e, t) {
  let n = 1 / 0, o = null;
  const s = new x5(e.x, e.y);
  return t.forEach((a) => {
    const l = Y9(a, s);
    l < n && (n = l, o = a);
  }), o;
}
function Y9(e, t) {
  return Math.sqrt(
    Math.pow(e.left - t.x, 2) + Math.pow(e.top - t.y, 2)
  );
}
const X9 = [
  "transition",
  "image",
  "video",
  "audio",
  "caption",
  "text"
];
function Rm(e) {
  const t = e.e.dataTransfer?.types[0];
  if (!t) return;
  const n = JSON.parse(t), { type: o, duration: s = 5e3 } = n;
  if (!X9.includes(o)) return;
  const a = this;
  a.discardActiveObject();
  const l = Ze(s, a.tScale);
  Xe.guide = Z9({
    width: l,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type: o
  }), a.add(Xe.guide), o === "transition" && (Xe.objects = a.getObjects("Transition"), Xe.objects.forEach((u) => {
    u.visible = !0;
  })), we.dispatch(X1);
}
function Z9({ width: e, height: t, id: n, left: o, top: s, type: a }) {
  return a === "transition" ? new ea({
    top: 0,
    left: 0,
    height: 48,
    width: 48,
    id: "TransitionGuide"
  }) : new ta({
    top: s,
    left: o,
    height: t,
    width: e,
    id: n,
    name: "Rivers in the mountains"
  });
}
function Pm() {
  if (!Xe.guide) return;
  we.dispatch($s);
  const e = this;
  K9(Xe.objects), e.remove(Xe.guide);
}
function K9(e) {
  e.forEach((t) => {
    t.strokeDashArray = [], t.setSelected(!1), t.kind === "none" && (t.visible = !1);
  });
}
var q9 = typeof global == "object" && global && global.Object === Object && global, J9 = typeof self == "object" && self && self.Object === Object && self, Ou = q9 || J9 || Function("return this")(), gr = Ou.Symbol, Om = Object.prototype, Q9 = Om.hasOwnProperty, e8 = Om.toString, ho = gr ? gr.toStringTag : void 0;
function t8(e) {
  var t = Q9.call(e, ho), n = e[ho];
  try {
    e[ho] = void 0;
    var o = !0;
  } catch {
  }
  var s = e8.call(e);
  return o && (t ? e[ho] = n : delete e[ho]), s;
}
var n8 = Object.prototype, r8 = n8.toString;
function i8(e) {
  return r8.call(e);
}
var o8 = "[object Null]", s8 = "[object Undefined]", hp = gr ? gr.toStringTag : void 0;
function Mu(e) {
  return e == null ? e === void 0 ? s8 : o8 : hp && hp in Object(e) ? t8(e) : i8(e);
}
function Du(e) {
  return e != null && typeof e == "object";
}
var a8 = "[object Symbol]";
function Lu(e) {
  return typeof e == "symbol" || Du(e) && Mu(e) == a8;
}
function c8(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var Po = Array.isArray, pp = gr ? gr.prototype : void 0, gp = pp ? pp.toString : void 0;
function Mm(e) {
  if (typeof e == "string")
    return e;
  if (Po(e))
    return c8(e, Mm) + "";
  if (Lu(e))
    return gp ? gp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function na(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function l8(e) {
  return e;
}
var u8 = "[object AsyncFunction]", d8 = "[object Function]", f8 = "[object GeneratorFunction]", h8 = "[object Proxy]";
function p8(e) {
  if (!na(e))
    return !1;
  var t = Mu(e);
  return t == d8 || t == f8 || t == u8 || t == h8;
}
var pl = Ou["__core-js_shared__"], mp = function() {
  var e = /[^.]+$/.exec(pl && pl.keys && pl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function g8(e) {
  return !!mp && mp in e;
}
var m8 = Function.prototype, v8 = m8.toString;
function y8(e) {
  if (e != null) {
    try {
      return v8.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var b8 = /[\\^$.*+?()[\]{}|]/g, w8 = /^\[object .+?Constructor\]$/, x8 = Function.prototype, S8 = Object.prototype, _8 = x8.toString, C8 = S8.hasOwnProperty, T8 = RegExp(
  "^" + _8.call(C8).replace(b8, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function E8(e) {
  if (!na(e) || g8(e))
    return !1;
  var t = p8(e) ? T8 : w8;
  return t.test(y8(e));
}
function I8(e, t) {
  return e?.[t];
}
function Nu(e, t) {
  var n = I8(e, t);
  return E8(n) ? n : void 0;
}
function k8(e, t, n) {
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
var A8 = 800, R8 = 16, P8 = Date.now;
function O8(e) {
  var t = 0, n = 0;
  return function() {
    var o = P8(), s = R8 - (o - n);
    if (n = o, s > 0) {
      if (++t >= A8)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function M8(e) {
  return function() {
    return e;
  };
}
var ra = function() {
  try {
    var e = Nu(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), D8 = ra ? function(e, t) {
  return ra(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: M8(t),
    writable: !0
  });
} : l8, L8 = O8(D8), N8 = 9007199254740991, j8 = /^(?:0|[1-9]\d*)$/;
function Dm(e, t) {
  var n = typeof e;
  return t = t ?? N8, !!t && (n == "number" || n != "symbol" && j8.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function F8(e, t, n) {
  t == "__proto__" && ra ? ra(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Lm(e, t) {
  return e === t || e !== e && t !== t;
}
var z8 = Object.prototype, H8 = z8.hasOwnProperty;
function W8(e, t, n) {
  var o = e[t];
  (!(H8.call(e, t) && Lm(o, n)) || n === void 0 && !(t in e)) && F8(e, t, n);
}
var vp = Math.max;
function U8(e, t, n) {
  return t = vp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, a = vp(o.length - t, 0), l = Array(a); ++s < a; )
      l[s] = o[t + s];
    s = -1;
    for (var u = Array(t + 1); ++s < t; )
      u[s] = o[s];
    return u[t] = n(l), k8(e, this, u);
  };
}
var B8 = 9007199254740991;
function $8(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= B8;
}
var V8 = "[object Arguments]";
function yp(e) {
  return Du(e) && Mu(e) == V8;
}
var Nm = Object.prototype, G8 = Nm.hasOwnProperty, Y8 = Nm.propertyIsEnumerable, jm = yp(/* @__PURE__ */ function() {
  return arguments;
}()) ? yp : function(e) {
  return Du(e) && G8.call(e, "callee") && !Y8.call(e, "callee");
}, X8 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Z8 = /^\w*$/;
function K8(e, t) {
  if (Po(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Lu(e) ? !0 : Z8.test(e) || !X8.test(e) || t != null && e in Object(t);
}
var wo = Nu(Object, "create");
function q8() {
  this.__data__ = wo ? wo(null) : {}, this.size = 0;
}
function J8(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Q8 = "__lodash_hash_undefined__", eT = Object.prototype, tT = eT.hasOwnProperty;
function nT(e) {
  var t = this.__data__;
  if (wo) {
    var n = t[e];
    return n === Q8 ? void 0 : n;
  }
  return tT.call(t, e) ? t[e] : void 0;
}
var rT = Object.prototype, iT = rT.hasOwnProperty;
function oT(e) {
  var t = this.__data__;
  return wo ? t[e] !== void 0 : iT.call(t, e);
}
var sT = "__lodash_hash_undefined__";
function aT(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = wo && t === void 0 ? sT : t, this;
}
function Fr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Fr.prototype.clear = q8;
Fr.prototype.delete = J8;
Fr.prototype.get = nT;
Fr.prototype.has = oT;
Fr.prototype.set = aT;
function cT() {
  this.__data__ = [], this.size = 0;
}
function Ta(e, t) {
  for (var n = e.length; n--; )
    if (Lm(e[n][0], t))
      return n;
  return -1;
}
var lT = Array.prototype, uT = lT.splice;
function dT(e) {
  var t = this.__data__, n = Ta(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : uT.call(t, n, 1), --this.size, !0;
}
function fT(e) {
  var t = this.__data__, n = Ta(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hT(e) {
  return Ta(this.__data__, e) > -1;
}
function pT(e, t) {
  var n = this.__data__, o = Ta(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Oi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Oi.prototype.clear = cT;
Oi.prototype.delete = dT;
Oi.prototype.get = fT;
Oi.prototype.has = hT;
Oi.prototype.set = pT;
var gT = Nu(Ou, "Map");
function mT() {
  this.size = 0, this.__data__ = {
    hash: new Fr(),
    map: new (gT || Oi)(),
    string: new Fr()
  };
}
function vT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ea(e, t) {
  var n = e.__data__;
  return vT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function yT(e) {
  var t = Ea(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function bT(e) {
  return Ea(this, e).get(e);
}
function wT(e) {
  return Ea(this, e).has(e);
}
function xT(e, t) {
  var n = Ea(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Br.prototype.clear = mT;
Br.prototype.delete = yT;
Br.prototype.get = bT;
Br.prototype.has = wT;
Br.prototype.set = xT;
var ST = "Expected a function";
function ju(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ST);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var l = e.apply(this, o);
    return n.cache = a.set(s, l) || a, l;
  };
  return n.cache = new (ju.Cache || Br)(), n;
}
ju.Cache = Br;
var _T = 500;
function CT(e) {
  var t = ju(e, function(o) {
    return n.size === _T && n.clear(), o;
  }), n = t.cache;
  return t;
}
var TT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ET = /\\(\\)?/g, IT = CT(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(TT, function(n, o, s, a) {
    t.push(s ? a.replace(ET, "$1") : o || n);
  }), t;
});
function kT(e) {
  return e == null ? "" : Mm(e);
}
function Ia(e, t) {
  return Po(e) ? e : K8(e, t) ? [e] : IT(kT(e));
}
function Fu(e) {
  if (typeof e == "string" || Lu(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function AT(e, t) {
  t = Ia(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Fu(t[n++])];
  return n && n == o ? e : void 0;
}
function RT(e, t) {
  for (var n = -1, o = t.length, s = e.length; ++n < o; )
    e[s + n] = t[n];
  return e;
}
var bp = gr ? gr.isConcatSpreadable : void 0;
function PT(e) {
  return Po(e) || jm(e) || !!(bp && e && e[bp]);
}
function OT(e, t, n, o, s) {
  var a = -1, l = e.length;
  for (n || (n = PT), s || (s = []); ++a < l; ) {
    var u = e[a];
    n(u) ? RT(s, u) : s[s.length] = u;
  }
  return s;
}
function MT(e) {
  var t = e == null ? 0 : e.length;
  return t ? OT(e) : [];
}
function DT(e) {
  return L8(U8(e, void 0, MT), e + "");
}
function LT(e, t) {
  return e != null && t in Object(e);
}
function NT(e, t, n) {
  t = Ia(t, e);
  for (var o = -1, s = t.length, a = !1; ++o < s; ) {
    var l = Fu(t[o]);
    if (!(a = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != s ? a : (s = e == null ? 0 : e.length, !!s && $8(s) && Dm(l, s) && (Po(e) || jm(e)));
}
function jT(e, t) {
  return e != null && NT(e, t, LT);
}
function FT(e, t, n, o) {
  if (!na(e))
    return e;
  t = Ia(t, e);
  for (var s = -1, a = t.length, l = a - 1, u = e; u != null && ++s < a; ) {
    var f = Fu(t[s]), h = n;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (s != l) {
      var p = u[f];
      h = void 0, h === void 0 && (h = na(p) ? p : Dm(t[s + 1]) ? [] : {});
    }
    W8(u, f, h), u = u[f];
  }
  return e;
}
function zT(e, t, n) {
  for (var o = -1, s = t.length, a = {}; ++o < s; ) {
    var l = t[o], u = AT(e, l);
    n(u, l) && FT(a, Ia(l, e), u);
  }
  return a;
}
function HT(e, t) {
  return zT(e, t, function(n, o) {
    return jT(e, o);
  });
}
var WT = DT(function(e, t) {
  return e == null ? {} : HT(e, t);
});
function Fm(e) {
  const t = e.e.dataTransfer?.types[0];
  if (!t) return;
  const n = JSON.parse(
    e.e.dataTransfer.getData(t)
  ), o = this;
  if (n.type !== "transition") {
    UT(n), o.remove(Xe.guide), o.requestRenderAll(), we.dispatch($s);
    return;
  }
  Xe.guide && (Xe.object && BT(n, o), Xe.objects.forEach((s) => {
    s.strokeDashArray = [], s.setSelected(!1), s.kind === "none" && (s.visible = !1);
  }), o.remove(Xe.guide), o.requestRenderAll(), we.dispatch($s));
}
function UT(e) {
  const t = { ...e, id: et() };
  switch (e.type) {
    case "image":
      we.dispatch(Io, { payload: t });
      break;
    case "video":
      we.dispatch(To, { payload: t });
      break;
    case "audio":
      we.dispatch(Eo, { payload: t });
      break;
  }
}
function BT(e, t) {
  const n = Xe.object?.id, o = WT(e, ["kind", "direction"]);
  Object.entries(o).forEach(([s, a]) => {
    s === "kind" ? Xe.object.kind = a : Xe.object[s] = a;
  }), t.transitionsMap[n] = {
    ...t.transitionsMap[n],
    ...o
  }, t.updateState();
}
const $T = (e) => {
  e.on("dragover", Am), e.on("dragenter", Rm), e.on("dragleave", Pm), e.on("drop", Fm);
}, VT = (e) => {
  e.off("dragover", Am), e.off("dragenter", Rm), e.off("dragleave", Pm), e.off("drop", Fm);
}, zm = (e) => {
  const t = e.target.canvas, n = e.target;
  if (e.action === "resizing" && n instanceof on && t) {
    const o = n.id, s = t.getObjects("Transition").find((a) => a.id === o);
    if (s && s instanceof on) {
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
  t && (GT(t, t.getObjects()), YT(t.getObjects("Helper")), B.isPointerOverHelperTrack = !1, B.draggingOverTrack = null);
}, GT = (e, t) => {
  t.forEach((n) => {
    n.isAlignmentAuxiliary && e.remove(n);
  });
}, YT = (e) => {
  e.forEach((t) => t.setSelected(!1));
};
function Hm(e) {
  const t = e.target.canvas;
  if (!t) return;
  const n = t.getActiveObject();
  if (!n || !t.positionBeforeTransform) return;
  const o = t.getScenePoint(e.e), s = t.getObjects("Track", "Helper").find((a) => {
    const l = a.getBoundingRect();
    return o.x >= l.left && o.x <= l.left + l.width && o.y >= l.top && o.y <= l.top + l.height;
  });
  if (e.action === "resizing") {
    const a = (B.trackToItemsMap[B.originTrack.id] || []).filter((u) => u !== n);
    n.setCoords();
    const l = ka(
      a,
      n.getBoundingRect()
    );
    return t.fire("track-items:resized", {
      trackId: B.originTrack.id,
      trackItemIds: [n.id],
      isOverlapped: !!l
    }), !1;
  }
  if (!s)
    return n && (n?.set(t.positionBeforeTransform), n?.setCoords()), !1;
  if (s instanceof Ro) {
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
      secondaryTracks: B.secondaryTracks,
      primaryTracks: B.primaryTracks,
      primaryPositions: {
        trackIndex: a,
        trackId: t.trackIdAfterTransform,
        positions: t.positionAfterTransform
      }
    };
    qT(l);
  } else if (s instanceof jr) {
    const a = {
      isSecondaryOverlapped: ZT(),
      secondaryTracks: B.secondaryTracks,
      primaryTracks: B.primaryTracks,
      primaryPositions: {
        trackId: t.trackIdAfterTransform,
        positions: t.positionAfterTransform
      }
    };
    XT(a);
  }
}
const XT = (e) => {
  B.canvas && B.canvas.fire("track-items:moved", e);
};
function ZT() {
  const e = KT();
  return Object.keys(e).some((t) => {
    const n = B.trackToItemsMap[t], o = e[t].objects;
    return n?.length ? n.filter((s) => !o.includes(s)).some(
      (s) => ka(o, s.getBoundingRect())
    ) : !0;
  });
}
function KT() {
  const [e] = B.primaryMovingObjects, t = e.id, o = B.canvas.positionAfterTransform[t].top - e.getBoundingRect().top, s = {};
  return B.secondaryMovingObjects.forEach((a) => {
    const l = a.getBoundingRect().top + o, u = B.trackTopToIdMap[l], f = Bl(
      B.trackTops,
      B.originTrack.top,
      l
    );
    s[u] ? s[u].objects.push(a) : s[u] = {
      objects: [a],
      index: f
    };
  }), s;
}
const qT = (e) => {
  B.canvas && B.canvas.fire("track:create", e);
};
function ka(e, t) {
  return e.find((n) => {
    const o = n.getBoundingRect();
    return t.left < o.left + o.width && t.left + t.width > o.left && t.top < o.top + o.height && t.top + t.height > o.top;
  });
}
const JT = (e) => {
  e.on("object:modified", zm), e.on("object:modified", Hm);
}, QT = (e) => {
  e.off("object:modified", zm), e.off("object:modified", Hm);
};
function eE(e, t) {
  e.remove(...t), t.length = 0;
}
function Wm() {
  eE(this, B.placeholderMovingObjects);
}
function Um(e) {
  const t = this.height < this.bounding.height, n = this.width < this.bounding.width;
  if (!t && !n) return;
  const o = this.viewportTransform;
  let s = o[4], a = o[5];
  const l = 2;
  e.e.shiftKey ? s = o[4] - e.e.deltaY * l : (t && (a = o[5] - e.e.deltaY * l), s = o[4] - e.e.deltaX * l), this.setViewportPos(s, a);
}
const tE = (e) => {
  e.on("mouse:wheel", Um), e.on("mouse:up", Wm.bind(e));
}, nE = (e) => {
  e.off("mouse:wheel", Um), e.off("mouse:up", Wm.bind(e));
};
function Bm(e) {
  const t = this;
  if (!t) return;
  const n = t.getScenePoint(e.e), o = t.getObjects("Helper", "Track");
  B.draggingOverTrack = o.find((h) => {
    const p = h.getBoundingRect();
    return n.x >= p.left && n.x <= p.left + p.width && n.y >= p.top && n.y <= p.top + p.height;
  }) ?? null, o.forEach((h) => {
    if (xp(h)) {
      const p = B.draggingOverTrack;
      h.setSelected(h === p);
    }
  }), B.isPointerOverHelperTrack = xp(
    B.draggingOverTrack
  ), t.getObjects();
  const s = e.target;
  s.getBoundingRect(), s.setCoords();
  const a = [
    s,
    ...t.getActiveObjects(),
    ...t.getObjects("Track", "Helper", "Transition", "Placeholder")
  ], l = rE(a, t), u = oE(s);
  iE(
    l,
    u
  ).forEach((h) => {
    h.orientation === "V" ? s.left = h.lineGuide + h.offset : s.top = h.lineGuide + h.offset;
  });
}
const rE = (e, t) => {
  const n = [], o = [];
  return t.getObjects().filter((s) => s.visible).forEach((s) => {
    if (e.some(
      (u) => u.id === s.id
    ) || s.isAlignmentAuxiliary) return;
    const l = s.getBoundingRect();
    n.push(
      wp(
        l.left,
        l.width,
        l.top,
        l.height
      )
    ), o.push(
      wp(
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
}, wp = (e, t, n, o) => [e, e + t].map((s) => ({
  val: s,
  start: n,
  end: n + o
})), iE = (e, t) => {
  const n = [], o = [];
  e.vertical.forEach((f) => {
    t.vertical.forEach((h) => {
      const p = Math.abs(f.val - h.guide);
      p < 10 && n.push({
        lineGuide: f.val,
        diff: p,
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
      const p = Math.abs(f.val - h.guide);
      p < 10 && o.push({
        lineGuide: f.val,
        diff: p,
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
}, oE = (e) => {
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
}, xp = (e) => e instanceof Ro;
function sE(e) {
  e.opacity = B.isPointerOverHelperTrack ? 0 : 1;
}
const $m = hE((e) => {
  const t = e.target.canvas;
  if (pE(e), !B.draggingOverTrack) return;
  const n = B.placeholderMovingObjects.map(
    (a) => a.draggedObject
  ), o = (B.trackToItemsMap[B.draggingOverTrack.id] || []).filter((a) => !n.includes(a)), s = o.find(
    (a) => ka(n, a.getBoundingRect())
  );
  B.placeholderMovingObjects.forEach((a) => {
    const l = a.draggedObject;
    l?.setCoords(), sE(a);
    const u = aE(
      l,
      o,
      s,
      B.placeholderMovingObjects.length > 1
    );
    t.trackIdAfterTransform = B.trackTopToIdMap[u.top], t.positionAfterTransform[l?.id] = {
      top: u.top,
      left: u.left
    }, a.left = u.left, a.top = u.top;
  });
}, 5), aE = (e, t, n, o) => !cE(e) || o && n ? Vm(e) : n ? lE(e, n, t) : fE(e), cE = (e) => B.draggingOverTrack ? B.draggingOverTrack.accepts?.includes(e.type) ?? !1 : !1, Vm = (e) => ({
  top: B.objectInitialPositions[e.id].top,
  left: B.objectInitialPositions[e.id].left
}), lE = (e, t, n) => {
  const o = uE(e, t);
  return !dE(n, e, o) || B.activeObjects.length !== 1 ? Vm(e) : {
    left: o,
    top: t.top
  };
}, uE = (e, t) => {
  const n = e.left + e.width / 2, o = t.left + t.width / 2;
  return n < o ? t.left - e.width : t.left + t.width;
}, dE = (e, t, n) => !(n < 0 || ka(e, {
  ...t.getBoundingRect(),
  left: n
})), fE = (e) => ({
  left: e.getBoundingRect().left,
  top: B.draggingOverTrack?.top ?? 0
});
function hE(e, t) {
  let n = null;
  return function(...o) {
    const s = Date.now();
    (n === null || s - n >= t) && (n = s, e(...o));
  };
}
function pE(e) {
  const t = e.target, n = t.canvas, o = t.top, s = -t.height * 0.75, a = n.height + t.height * 0.75;
  t.top = Math.min(Math.max(o, s), a - t.height);
  const l = t.left;
  t.left = Math.max(l, 0);
}
const gE = (e) => {
  e.on("object:moving", Bm.bind(e)), e.on("object:moving", $m);
}, mE = (e) => {
  e.off("object:moving", Bm.bind(e)), e.off("object:moving", $m);
};
function Gm() {
  const e = this, t = e.getActiveObject(), n = e.getActiveObjects().map((o) => o.id);
  t instanceof ql ? (t.borderColor = "rgba(0, 216, 214, 0.75)", t.hasControls = !1, t.hoverCursor = "default", t.borderScaleFactor = 1, t.padding = 0, t.getObjects().forEach((o) => {
    o.setSelected(!0);
  })) : t?.setSelected(!0), this.setActiveIds(n);
}
function Ym(e) {
  const t = this, n = t.getActiveObject();
  n instanceof ql && (n.borderColor = "transparent", n.hasControls = !1, n.hoverCursor = "default"), e.selected.forEach((s) => {
    s.setSelected(!0);
  }), e.deselected.forEach((s) => {
    s.setSelected(!1);
  });
  const o = t.getActiveObjects().map((s) => s.id);
  this.setActiveIds(o);
}
function Xm(e) {
  this.getObjects().forEach((n) => {
    n.isSelected && (n.isSelected = !1);
  }), e.deselected.forEach((n) => {
    n.setSelected(!1);
  });
  const t = this.getActiveObjects().map((n) => n.id);
  this.setActiveIds(t);
}
const vE = (e) => {
  e.on("selection:created", Gm), e.on("selection:updated", Ym), e.on("selection:cleared", Xm);
}, yE = (e) => {
  e.off("selection:created", Gm), e.off("selection:updated", Ym), e.off("selection:cleared", Xm);
};
let Zm, Km, qm;
const bE = (e) => {
  const { state: t } = e;
  Zm = t.subscribeToActiveIds(({ activeIds: n }) => {
    if (n.length === 1) {
      const o = n[0], { trackItemIds: s, trackItemsMap: a } = t.getState();
      s.forEach((l) => {
        a[l].type;
      }), e.selectTrackItemByIds([o]);
    } else
      e.selectTrackItemByIds(n);
  }), Km = t.subscribeToHistory((n) => {
    const { tracks: o, trackItemsMap: s, trackItemIds: a, trackItemDetailsMap: l } = n;
    e.tracks = o, e.trackItemsMap = s, e.trackItemIds = a, e.trackItemDetailsMap = l, e.renderTracks(), e.updateTrackItemsToHistory(), e.alignItemsToTrack(), e.calcBounding(), e.updateTransitions(), e.duration = wn(e.trackItemsMap);
  }), qm = t.subscribeToAddOrRemoveItems(() => {
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
}, wE = (e) => {
  Zm.unsubscribe(), Km.unsubscribe(), qm.unsubscribe();
};
function Jm(e) {
  const {
    isSecondaryOverlapped: t,
    secondaryTracks: n,
    primaryTracks: o,
    primaryPositions: s
  } = e, { trackId: a, positions: l } = s, u = this.tracks.findIndex((S) => S.id === a), f = vm(
    Object.keys(n).map(
      (S) => n[S].objects.map((T) => T.id)
    )
  ), h = Ks(this.tracks, [
    ...Object.keys(l),
    ...f
  ]);
  Object.keys(o).forEach((S) => {
    this.pauseEventListeners();
    const { objects: T } = o[S];
    T.forEach((E) => {
      const k = l[E.id];
      E.left = k.left;
    }), this.resumeEventListeners();
    const _ = h.find((E) => E.id === a);
    _ && _.items.push(...Object.keys(l)), this.tracks = h;
  });
  const p = this.tracks[u], v = [];
  Object.keys(n).forEach((S) => {
    const { objects: T, index: _ } = n[S], E = T.map((O) => O.id), [k] = E, R = this.trackItemsMap[k];
    if (t) {
      const O = {
        id: et(),
        items: E,
        type: R.type,
        accepts: this.acceptsMap?.[R.type],
        tempIndex: _
      };
      v.push(O);
    } else {
      const O = h[u + _];
      O && O.items.push(...E), this.tracks = h;
    }
  });
  const b = ym(
    p,
    v
  );
  b.length && h.splice(u, 1, ...b), this.tracks = h, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
function Qm({
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
        const s = xE(this.tracks, e), a = {
          id: et(),
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
function xE(e, t) {
  return e.map((n) => ({
    ...n,
    items: n.items.filter(
      (o) => !t.includes(o)
    )
  }));
}
function e0(e) {
  const {
    secondaryTracks: t,
    primaryTracks: n,
    primaryPositions: o
  } = e, { positions: s, trackIndex: a } = o, l = a === -1 ? this.tracks.length : a, [u] = Object.keys(n), f = this.tracks.find((_) => _.id == u), h = n[u], p = {
    id: et(),
    items: h.objects.map((_) => _.id),
    type: f?.type,
    accepts: f?.accepts
  }, v = vm(
    Object.keys(t).map(
      (_) => t[_].objects.map((E) => E.id)
    )
  ), b = Ks(this.tracks, [
    ...Object.keys(s),
    ...v
  ]), S = [];
  Object.keys(t).forEach((_) => {
    const { objects: E, index: k } = t[_], R = this.tracks.find(
      (j) => j.id == _
    ), O = E.map((j) => j.id), D = {
      id: et(),
      items: O,
      type: R?.type,
      accepts: R?.accepts,
      tempIndex: k
    };
    S.push(D);
  });
  const T = ym(p, S);
  T.length && b.splice(l, 0, ...T), this.tracks = b, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
const SE = (e) => {
  e.on("track:create", e0.bind(e)), e.on("track-items:resized", Qm.bind(e)), e.on("track-items:moved", Jm.bind(e));
}, _E = (e) => {
  e.off("track:create", e0.bind(e)), e.off("track-items:resized", Qm.bind(e)), e.off("track-items:moved", Jm.bind(e));
}, CE = (e) => {
  $T(e), JT(e), tE(e), gE(e), SE(e), vE(e), B9(e), bE(e);
}, TE = (e) => {
  VT(e), QT(e), nE(e), mE(e), _E(e), yE(e), $9(e), wE();
}, EE = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"]
}, IE = ["video", "image", "audio", "text"];
let zu = class extends S5 {
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
    en.ownDefaults.borderColor = "transparent", en.ownDefaults.cornerColor = "white", en.ownDefaults.cornerStrokeColor = "transparent", en.ownDefaults.strokeWidth = 0, en.ownDefaults.borderOpacityWhenMoving = 1, en.ownDefaults.borderScaleFactor = 1, en.ownDefaults.cornerSize = 8, en.ownDefaults.cornerStyle = "rect", en.ownDefaults.centeredScaling = !1, en.ownDefaults.centeredRotation = !0, en.ownDefaults.transparentCorners = !1;
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
    o[4] = this.spacing.left, this.tScale = n.tScale || 1 / 300, this.store = n.store, this.state = n.state, this.scale = n.scale, this.onScroll = n.onScroll, this.acceptsMap = this.createAcceptsItemMap(n.acceptsMap), this.sizesMap = P9(n.sizesMap), this.setupFabricDefaults(), this.initEventListeners();
  }
  createAcceptsItemMap(t = EE) {
    const n = {};
    return Object.keys(t).forEach((o) => {
      const s = t[o];
      n[o] = s.includes("*") ? IE : s;
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
    }), we.dispatch($1, {
      payload: {
        activeIds: this.activeIds
      }
    }));
  }
  purge() {
    TE(this), this.dispose();
  }
  static registerItems(t) {
    Object.keys(t).forEach((n) => {
      dt.setClass(t[n], n);
    });
  }
  initEventListeners() {
    CE(this);
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
    this.bounding = t, we.dispatch(Z1, {
      payload: { bounding: t }
    });
  }
  setScale(t) {
    this.pauseEventListeners(), this.tScale = t.zoom, this.scale = t;
    const n = this.getState();
    this.getObjects("Video", "Image", "Text", "Audio").forEach(
      (o) => {
        const s = n.trackItemsMap[o.id], { from: a, to: l } = s.display, u = Ze(a, this.tScale), f = Ze(
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
g9(zu, [
  VC,
  j9,
  z9,
  U9
]);
function kE(e) {
  const t = we.subject.pipe(zn(({ key: n }) => n.startsWith(S4))).subscribe((n) => {
    if (n.key === Y1) {
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
zu.registerItems({
  Text: Im,
  Image: D9,
  Video: M9,
  Audio: O9,
  Track: L9,
  Helper: N9
});
const AE = ({ stateManager: e }) => {
  const [t, n] = st(0), o = hn(null), s = hn(null), a = hn(null), l = hn(null), u = hn(null), [f, h] = st({
    width: 0,
    height: 0
  }), [p, v] = st({
    width: 0,
    height: 0
  }), {
    scale: b,
    playerRef: S,
    fps: T,
    setState: _,
    timeline: E
  } = Un(), { setTimeline: k } = Un(), R = ku(S ?? void 0), O = (F) => {
    u.current && l.current && (l.current.scrollTop = -F.scrollTop, u.current.scrollLeft = -F.scrollLeft, n(-F.scrollLeft));
  };
  Mt(() => {
    const F = Ze(R / T * 1e3, b.zoom), V = s.current?.getBoundingClientRect().x + s.current?.clientWidth;
    if (F - t + 40 >= V) {
      const K = u.current?.clientWidth, J = u.current?.scrollWidth, Y = u.current?.scrollLeft, ne = (J - (K + Y)) / K;
      ne >= 0 && (ne > 1 ? u.current?.scrollTo({
        left: Y + K
      }) : u.current?.scrollTo({
        left: J - K
      }));
    }
  }, [R]), Mt(() => {
    const F = s.current, V = o.current;
    if (!F || !V) return;
    const G = V.clientWidth, K = V.clientHeight, J = new zu(F, {
      width: G,
      height: K,
      bounding: {
        width: G,
        height: 0
      },
      selectionColor: "rgba(0, 216, 214,0.1)",
      selectionBorderColor: "rgba(0, 216, 214,1.0)",
      onScroll: O,
      // tScale: scale.zoom,
      // store,
      state: e,
      scale: b,
      spacing: {
        left: Iu,
        right: tp
      }
    }), Y = kE(J);
    a.current = J, h({
      width: G,
      height: K
    }), v({
      width: G,
      height: 0
    }), k(J);
    const Q = e.subscribeToSize(
      (fe) => {
        _(fe);
      }
    ), ne = e.subscribeToScale((fe) => {
      _(fe);
    }), Te = e.subscribeToTracks(
      (fe) => {
        _(fe);
      }
    ), re = e.subscribeToDuration(
      (fe) => {
        _(fe);
      }
    ), le = e.subscribeToUpdateTrackItem(() => {
      const fe = e.getState();
      _({
        duration: fe.duration,
        trackItemsMap: fe.trackItemsMap
      });
    }), ee = e.subscribeToAddOrRemoveItems(
      () => {
        const fe = e.getState();
        _({
          trackItemDetailsMap: fe.trackItemDetailsMap,
          trackItemsMap: fe.trackItemsMap,
          trackItemIds: fe.trackItemIds,
          tracks: fe.tracks
        });
      }
    ), ye = e.subscribeToUpdateItemDetails(() => {
      const fe = e.getState();
      _({
        trackItemDetailsMap: fe.trackItemDetailsMap
      });
    });
    return () => {
      Y.unsubscribe(), J.purge(), ne.unsubscribe(), Te.unsubscribe(), re.unsubscribe(), ee.unsubscribe(), le.unsubscribe(), ye.unsubscribe(), Q.unsubscribe();
    };
  }, []), Mt(() => {
    const V = we.subject.pipe(
      zn(({ key: G }) => G.startsWith(C4))
    ).subscribe((G) => {
      if (G.key === Z1) {
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
  const D = (F) => {
    const V = F.currentTarget.scrollLeft;
    a.current.scrollTo({ scrollLeft: V }), n(V);
  }, j = (F) => {
    const V = F.currentTarget.scrollTop;
    a.current.scrollTo({ scrollTop: V });
  };
  Mt(() => {
    const F = u.current?.scrollWidth;
    if (!F || !E) return;
    const V = E.width;
    F < V + t && E.scrollTo({ scrollLeft: F - V });
  }, [b]);
  const $ = (F) => {
    if (!a.current) return;
    const G = tn(F, b.zoom);
    S?.current?.seekTo(G * T / 1e3);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "relative overflow-hidden h-80 w-full", children: [
    /* @__PURE__ */ m.jsx(gC, {}),
    /* @__PURE__ */ m.jsx(
      BC,
      {
        onClick: $,
        scrollLeft: t
      }
    ),
    /* @__PURE__ */ m.jsx(UC, { scrollLeft: t }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ m.jsx("div", { className: "relative w-10 flex-none" }),
      /* @__PURE__ */ m.jsxs("div", { className: "relative h-[230px] flex-1", children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            ref: o,
            className: "absolute top-0 h-[230px] w-full text-sm text-white ",
            children: /* @__PURE__ */ m.jsx(
              "canvas",
              {
                ref: s,
                id: "designcombo-timeline-canvas"
              }
            )
          }
        ),
        /* @__PURE__ */ m.jsxs(
          Bs,
          {
            type: "always",
            style: {
              position: "absolute",
              width: "calc(100vw - 40px)",
              height: "10px"
            },
            className: "ScrollAreaRootH",
            children: [
              /* @__PURE__ */ m.jsx(
                Tl,
                {
                  onScroll: D,
                  className: "ScrollAreaViewport",
                  id: "viewportH",
                  ref: u,
                  children: /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      style: {
                        width: p.width > f.width ? p.width + tp : p.width
                      },
                      className: "pointer-events-none h-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ m.jsx(
                _h,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "horizontal",
                  children: /* @__PURE__ */ m.jsx(Ch, { className: "ScrollAreaThumb" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(
          Bs,
          {
            type: "always",
            style: {
              position: "absolute",
              height: "230px",
              width: "10px"
            },
            className: "ScrollAreaRootV",
            children: [
              /* @__PURE__ */ m.jsx(
                Tl,
                {
                  onScroll: j,
                  className: "ScrollAreaViewport",
                  ref: l,
                  children: /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      style: {
                        height: p.height > f.height ? p.height + 40 : f.height
                      },
                      className: "pointer-events-none w-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ m.jsx(
                _h,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "vertical",
                  children: /* @__PURE__ */ m.jsx(Ch, { className: "ScrollAreaThumb" })
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}, RE = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function t0(e, t, n = { cyclesFix: !0 }, o = []) {
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
    const p = t[u], v = typeof f == "object" && typeof p == "object" && Array.isArray(f) === Array.isArray(p);
    f && p && v && !RE[Object.getPrototypeOf(f)?.constructor?.name] && (!n.cyclesFix || !o.includes(f)) ? s.push.apply(s, t0(f, p, n, n.cyclesFix ? o.concat([f]) : []).map((b) => (b.path.unshift(h), b))) : f !== p && // treat NaN values as equivalent
    !(Number.isNaN(f) && Number.isNaN(p)) && !(v && (isNaN(f) ? f + "" == p + "" : +f == +p)) && s.push({
      path: [h],
      type: "CHANGE",
      value: p,
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
var Hu = Symbol.for("immer-nothing"), mo = Symbol.for("immer-draftable"), Lt = Symbol.for("immer-state"), n0 = process.env.NODE_ENV !== "production" ? [
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
function Qe(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = n0[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var zr = Object.getPrototypeOf;
function Hr(e) {
  return !!e && !!e[Lt];
}
function mr(e) {
  return e ? r0(e) || Array.isArray(e) || !!e[mo] || !!e.constructor?.[mo] || Oo(e) || Mo(e) : !1;
}
var PE = Object.prototype.constructor.toString();
function r0(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = zr(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === PE;
}
function xo(e, t) {
  Wr(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Wr(e) {
  const t = e[Lt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Oo(e) ? 2 : Mo(e) ? 3 : 0;
}
function So(e, t) {
  return Wr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function gl(e, t) {
  return Wr(e) === 2 ? e.get(t) : e[t];
}
function i0(e, t, n) {
  const o = Wr(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function OE(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Oo(e) {
  return e instanceof Map;
}
function Mo(e) {
  return e instanceof Set;
}
function Mr(e) {
  return e.copy_ || e.base_;
}
function $l(e, t) {
  if (Oo(e))
    return new Map(e);
  if (Mo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = r0(e);
  if (t === !0 || t === "class_only" && !n) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[Lt];
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
    return Object.create(zr(e), o);
  } else {
    const o = zr(e);
    if (o !== null && n)
      return { ...e };
    const s = Object.create(o);
    return Object.assign(s, e);
  }
}
function Wu(e, t = !1) {
  return Aa(e) || Hr(e) || !mr(e) || (Wr(e) > 1 && (e.set = e.add = e.clear = e.delete = ME), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => Wu(o, !0))), e;
}
function ME() {
  Qe(2);
}
function Aa(e) {
  return Object.isFrozen(e);
}
var Vl = {};
function Ur(e) {
  const t = Vl[e];
  return t || Qe(0, e), t;
}
function DE(e, t) {
  Vl[e] || (Vl[e] = t);
}
var _o;
function o0() {
  return _o;
}
function LE(e, t) {
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
function Sp(e, t) {
  t && (Ur("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Gl(e) {
  Yl(e), e.drafts_.forEach(NE), e.drafts_ = null;
}
function Yl(e) {
  e === _o && (_o = e.parent_);
}
function _p(e) {
  return _o = LE(_o, e);
}
function NE(e) {
  const t = e[Lt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Cp(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Lt].modified_ && (Gl(t), Qe(4)), mr(e) && (e = ia(t, e), t.parent_ || oa(t, e)), t.patches_ && Ur("Patches").generateReplacementPatches_(
    n[Lt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ia(t, n, []), Gl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Hu ? e : void 0;
}
function ia(e, t, n) {
  if (Aa(t))
    return t;
  const o = t[Lt];
  if (!o)
    return xo(
      t,
      (s, a) => Tp(e, o, t, s, a, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return oa(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const s = o.copy_;
    let a = s, l = !1;
    o.type_ === 3 && (a = new Set(s), s.clear(), l = !0), xo(
      a,
      (u, f) => Tp(e, o, s, u, f, n, l)
    ), oa(e, s, !1), n && e.patches_ && Ur("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Tp(e, t, n, o, s, a, l) {
  if (process.env.NODE_ENV !== "production" && s === n && Qe(5), Hr(s)) {
    const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !So(t.assigned_, o) ? a.concat(o) : void 0, f = ia(e, s, u);
    if (i0(n, o, f), Hr(f))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(s);
  if (mr(s) && !Aa(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ia(e, s), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && oa(e, s);
  }
}
function oa(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wu(t, n);
}
function jE(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : o0(),
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
  let s = o, a = Uu;
  n && (s = [o], a = Co);
  const { revoke: l, proxy: u } = Proxy.revocable(s, a);
  return o.draft_ = u, o.revoke_ = l, u;
}
var Uu = {
  get(e, t) {
    if (t === Lt)
      return e;
    const n = Mr(e);
    if (!So(n, t))
      return FE(e, n, t);
    const o = n[t];
    return e.finalized_ || !mr(o) ? o : o === ml(e.base_, t) ? (vl(e), e.copy_[t] = Zl(o, e)) : o;
  },
  has(e, t) {
    return t in Mr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Mr(e));
  },
  set(e, t, n) {
    const o = s0(Mr(e), t);
    if (o?.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const s = ml(Mr(e), t), a = s?.[Lt];
      if (a && a.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (OE(n, s) && (n !== void 0 || So(e.base_, t)))
        return !0;
      vl(e), Xl(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return ml(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, vl(e), Xl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Mr(e), o = Reflect.getOwnPropertyDescriptor(n, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Qe(11);
  },
  getPrototypeOf(e) {
    return zr(e.base_);
  },
  setPrototypeOf() {
    Qe(12);
  }
}, Co = {};
xo(Uu, (e, t) => {
  Co[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Co.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Qe(13), Co.set.call(this, e, t, void 0);
};
Co.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Qe(14), Uu.set.call(this, e[0], t, n, e[0]);
};
function ml(e, t) {
  const n = e[Lt];
  return (n ? Mr(n) : e)[t];
}
function FE(e, t, n) {
  const o = s0(t, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    o.get?.call(e.draft_)
  ) : void 0;
}
function s0(e, t) {
  if (!(t in e))
    return;
  let n = zr(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = zr(n);
  }
}
function Xl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Xl(e.parent_));
}
function vl(e) {
  e.copy_ || (e.copy_ = $l(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var zE = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const a = n;
        n = t;
        const l = this;
        return function(f = a, ...h) {
          return l.produce(f, (p) => n.call(this, p, ...h));
        };
      }
      typeof n != "function" && Qe(6), o !== void 0 && typeof o != "function" && Qe(7);
      let s;
      if (mr(t)) {
        const a = _p(this), l = Zl(t, void 0);
        let u = !0;
        try {
          s = n(l), u = !1;
        } finally {
          u ? Gl(a) : Yl(a);
        }
        return Sp(a, o), Cp(s, a);
      } else if (!t || typeof t != "object") {
        if (s = n(t), s === void 0 && (s = t), s === Hu && (s = void 0), this.autoFreeze_ && Wu(s, !0), o) {
          const a = [], l = [];
          Ur("Patches").generateReplacementPatches_(t, s, a, l), o(a, l);
        }
        return s;
      } else
        Qe(1, t);
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
    mr(e) || Qe(8), Hr(e) && (e = HE(e));
    const t = _p(this), n = Zl(e, void 0);
    return n[Lt].isManual_ = !0, Yl(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Lt];
    (!n || !n.isManual_) && Qe(9);
    const { scope_: o } = n;
    return Sp(o, t), Cp(void 0, o);
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
    const o = Ur("Patches").applyPatches_;
    return Hr(e) ? o(e, t) : this.produce(
      e,
      (s) => o(s, t)
    );
  }
};
function Zl(e, t) {
  const n = Oo(e) ? Ur("MapSet").proxyMap_(e, t) : Mo(e) ? Ur("MapSet").proxySet_(e, t) : jE(e, t);
  return (t ? t.scope_ : o0()).drafts_.push(n), n;
}
function HE(e) {
  return Hr(e) || Qe(10, e), a0(e);
}
function a0(e) {
  if (!mr(e) || Aa(e))
    return e;
  const t = e[Lt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = $l(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = $l(e, !0);
  return xo(n, (o, s) => {
    i0(n, o, a0(s));
  }), t && (t.finalized_ = !1), n;
}
function Ep() {
  process.env.NODE_ENV !== "production" && n0.push(
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
  function s(b, S, T, _) {
    switch (b.type_) {
      case 0:
      case 2:
        return l(
          b,
          S,
          T,
          _
        );
      case 1:
        return a(b, S, T, _);
      case 3:
        return u(
          b,
          S,
          T,
          _
        );
    }
  }
  function a(b, S, T, _) {
    let { base_: E, assigned_: k } = b, R = b.copy_;
    R.length < E.length && ([E, R] = [R, E], [T, _] = [_, T]);
    for (let O = 0; O < E.length; O++)
      if (k[O] && R[O] !== E[O]) {
        const D = S.concat([O]);
        T.push({
          op: t,
          path: D,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: v(R[O])
        }), _.push({
          op: t,
          path: D,
          value: v(E[O])
        });
      }
    for (let O = E.length; O < R.length; O++) {
      const D = S.concat([O]);
      T.push({
        op: n,
        path: D,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: v(R[O])
      });
    }
    for (let O = R.length - 1; E.length <= O; --O) {
      const D = S.concat([O]);
      _.push({
        op: o,
        path: D
      });
    }
  }
  function l(b, S, T, _) {
    const { base_: E, copy_: k } = b;
    xo(b.assigned_, (R, O) => {
      const D = gl(E, R), j = gl(k, R), $ = O ? So(E, R) ? t : n : o;
      if (D === j && $ === t)
        return;
      const F = S.concat(R);
      T.push($ === o ? { op: $, path: F } : { op: $, path: F, value: j }), _.push(
        $ === n ? { op: o, path: F } : $ === o ? { op: n, path: F, value: v(D) } : { op: t, path: F, value: v(D) }
      );
    });
  }
  function u(b, S, T, _) {
    let { base_: E, copy_: k } = b, R = 0;
    E.forEach((O) => {
      if (!k.has(O)) {
        const D = S.concat([R]);
        T.push({
          op: o,
          path: D,
          value: O
        }), _.unshift({
          op: n,
          path: D,
          value: O
        });
      }
      R++;
    }), R = 0, k.forEach((O) => {
      if (!E.has(O)) {
        const D = S.concat([R]);
        T.push({
          op: n,
          path: D,
          value: O
        }), _.unshift({
          op: o,
          path: D,
          value: O
        });
      }
      R++;
    });
  }
  function f(b, S, T, _) {
    T.push({
      op: t,
      path: [],
      value: S === Hu ? void 0 : S
    }), _.push({
      op: t,
      path: [],
      value: b
    });
  }
  function h(b, S) {
    return S.forEach((T) => {
      const { path: _, op: E } = T;
      let k = b;
      for (let j = 0; j < _.length - 1; j++) {
        const $ = Wr(k);
        let F = _[j];
        typeof F != "string" && typeof F != "number" && (F = "" + F), ($ === 0 || $ === 1) && (F === "__proto__" || F === "constructor") && Qe(19), typeof k == "function" && F === "prototype" && Qe(19), k = gl(k, F), typeof k != "object" && Qe(18, _.join("/"));
      }
      const R = Wr(k), O = p(T.value), D = _[_.length - 1];
      switch (E) {
        case t:
          switch (R) {
            case 2:
              return k.set(D, O);
            case 3:
              Qe(16);
            default:
              return k[D] = O;
          }
        case n:
          switch (R) {
            case 1:
              return D === "-" ? k.push(O) : k.splice(D, 0, O);
            case 2:
              return k.set(D, O);
            case 3:
              return k.add(O);
            default:
              return k[D] = O;
          }
        case o:
          switch (R) {
            case 1:
              return k.splice(D, 1);
            case 2:
              return k.delete(D);
            case 3:
              return k.delete(T.value);
            default:
              return delete k[D];
          }
        default:
          Qe(17, E);
      }
    }), b;
  }
  function p(b) {
    if (!mr(b))
      return b;
    if (Array.isArray(b))
      return b.map(p);
    if (Oo(b))
      return new Map(
        Array.from(b.entries()).map(([T, _]) => [T, p(_)])
      );
    if (Mo(b))
      return new Set(Array.from(b).map(p));
    const S = Object.create(zr(b));
    for (const T in b)
      S[T] = p(b[T]);
    return So(b, mo) && (S[mo] = b[mo]), S;
  }
  function v(b) {
    return Hr(b) ? p(b) : b;
  }
  DE("Patches", {
    applyPatches_: h,
    generatePatches_: s,
    generateReplacementPatches_: f
  });
}
var Nt = new zE(), WE = Nt.produce;
Nt.produceWithPatches.bind(
  Nt
);
Nt.setAutoFreeze.bind(Nt);
Nt.setUseStrictShallowCopy.bind(Nt);
var UE = Nt.applyPatches.bind(Nt);
Nt.createDraft.bind(Nt);
Nt.finishDraft.bind(Nt);
function BE(e) {
  const t = e.value, n = [];
  if (t?.payload?.trackItemIds) {
    const o = t.payload.trackItemIds;
    n.push(o), this.updateState({ activeIds: n });
  }
  if (e.key === W1) {
    const o = e.value?.payload.trackItemIds, s = Ae.cloneDeep(this.getState()), a = o?.length ? o : s.activeIds, l = s.trackItemIds.filter(
      (v) => !a.includes(v)
    ), u = Object.fromEntries(
      Object.entries(s.trackItemDetailsMap).filter(
        ([v]) => !a.includes(v)
      )
    ), f = x9(s.tracks, a), h = Object.fromEntries(
      Object.entries(s.trackItemsMap).filter(
        ([v]) => !a.includes(v)
      )
    ), p = wn(h);
    this.updateState(
      {
        trackItemIds: l,
        trackItemDetailsMap: u,
        activeIds: [],
        trackItemsMap: h,
        tracks: f,
        duration: p
      },
      { updateHistory: !0, kind: "remove" }
    );
  }
  if (e.key === U1) {
    const o = Ae.cloneDeep(this.getState()), s = [], a = e.value?.payload.trackItemIds || o.activeIds;
    if (a.length === 0) return;
    a.forEach((u) => {
      const f = o.trackItemsMap[u], h = o.trackItemDetailsMap[u], p = et();
      s.push(p), o.trackItemsMap = {
        ...o.trackItemsMap,
        [p]: { ...Ae.cloneDeep(f), id: p }
      }, o.trackItemDetailsMap = {
        ...o.trackItemDetailsMap,
        [p]: { ...Ae.cloneDeep(h) }
      }, o.trackItemIds.push(p);
    });
    const l = o.tracks.map((u) => {
      const f = {
        ...u,
        id: et(),
        items: u.items.filter((h) => a.includes(h)).map((h) => {
          const p = a.indexOf(h);
          return s[p];
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
  if (e.key === B1) {
    const o = Ae.cloneDeep(this.getState()), s = e.value?.options.time;
    if (o.activeIds.length !== 1) return;
    const a = o.activeIds[0], l = o.trackItemsMap[a];
    if (s <= l.display.from || s >= l.display.to)
      return;
    const u = et(), f = {
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
async function $E(e) {
  if (e.key === K1) {
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
  if (e.key === E4) {
    const t = e.value?.payload, n = t.size, o = t.trackItemIds, s = t.trackItemsMap, a = t.trackItemDetailsMap;
    if (!o) return;
    const l = o?.map(async (f) => {
      try {
        const h = a[f], p = s[f];
        if (h.type === "text") {
          const v = await Em(
            { id: f, details: h.details, ...p },
            {
              size: n
            }
          ), { details: b, ...S } = v;
          a[f] = { type: "text", details: b }, s[f] = S;
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
async function VE(e) {
  const t = Ae.cloneDeep(this.getState()), n = e.value?.options?.trackId, o = e.value?.options?.trackIndex;
  let s = [], a;
  if (e.key === To) {
    a = "video";
    const u = await _9(e.value?.payload, {
      size: t.size
    }), { details: f, ...h } = u;
    t.trackItemDetailsMap[h.id] = {
      type: a,
      details: f
    }, t.trackItemsMap[h.id] = h, t.trackItemIds.push(h.id), s = [h.id];
  }
  if (e.key === Io) {
    a = "image";
    const u = await S9(e.value?.payload, {
      size: t.size
    }), { details: f, ...h } = u;
    t.trackItemDetailsMap[h.id] = {
      type: a,
      details: f
    }, t.trackItemsMap[h.id] = h, t.trackItemIds.push(h.id), s = [h.id];
  }
  if (e.key === Eo) {
    a = "audio";
    const u = await C9(e.value?.payload), { details: f, ...h } = u;
    t.trackItemDetailsMap[h.id] = {
      type: a,
      details: f
    }, t.trackItemsMap[h.id] = h, t.trackItemIds.push(h.id), s = [h.id];
  }
  if (e.key === F1) {
    a = "text";
    const { details: u, ...f } = await Em(
      e.value?.payload ?? void 0,
      {
        size: t.size
      }
    );
    t.trackItemDetailsMap[f.id] = { type: a, details: u }, t.trackItemsMap[f.id] = f, t.trackItemIds.push(f.id), s.push(f.id);
  }
  const l = GE(
    s,
    t.tracks,
    t.trackItemsMap,
    n,
    o
  );
  if (l.trackId)
    t.tracks.find((f) => f.id === l.trackId)?.items.push(...s);
  else if (l.trackIndex !== void 0) {
    const u = Ip(a, s);
    t.tracks.splice(l.trackIndex, 0, u);
  } else {
    const u = Ip(a, s);
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
function Ip(e, t) {
  return {
    id: et(),
    accepts: ["text", "audio", "helper", "video", "image"],
    type: e,
    items: t,
    magnetic: !1,
    static: !1
  };
}
const GE = (e, t, n, o, s) => {
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
    const h = f.display.from, p = f.display.to;
    for (const v of u) {
      const b = v.display.from;
      if (!(v.display.to <= h || b >= p))
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
}, kp = [
  "tracks",
  "trackItemsMap",
  "trackItemDetailsMap",
  "transitionIds",
  "transitionsMap",
  "trackItemIds"
], YE = {
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
class XE {
  stateSubject;
  stateHistorySubject;
  prevState;
  undos;
  redos;
  listener;
  constructor(t) {
    this.stateSubject = null, this.stateHistorySubject = null, this.prevState = null, this.undos = [], this.redos = [], this.listener = null;
    const n = t || YE;
    this.stateSubject = new Rh(n), this.stateHistorySubject = new Rh({
      handleRedo: !1,
      handleUndo: !1
    }), this.prevState = n, this.initListeners();
  }
  initListeners() {
    ZE(this);
  }
  destroyListeners() {
    this.listener && this.listener.unsubscribe();
  }
  purge() {
    this.destroyListeners();
  }
  updateHistory(t, n) {
    const o = Ae.pick(t, kp), s = Ae.pick(this.getState(), kp), a = t0(s, o);
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
    Ep();
    const {
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: l,
      transitionIds: u,
      transitionsMap: f,
      trackItemsMap: h
    } = this.getState(), p = Ae.cloneDeep({
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: l,
      transitionIds: u,
      transitionsMap: f,
      trackItemsMap: h
    }), v = [], b = [], S = [], T = [], _ = [], E = [];
    n.forEach((Y) => {
      let Q;
      const ne = Y.path.slice(1);
      Y.type === "CREATE" ? Q = {
        path: ne,
        op: "remove",
        value: Y.value
      } : Y.type === "CHANGE" ? Q = {
        path: ne,
        op: "replace",
        value: Y.oldValue
      } : Q = {
        path: ne,
        op: "add",
        value: Y.oldValue
      }, Y.path.includes("trackItemIds") ? S.push(Q) : Y.path.includes("transitionIds") ? b.push(Q) : Y.path.includes("trackItemsMap") ? _.push(Q) : Y.path.includes("transitionsMap") ? T.push(Q) : Y.path.includes("tracks") ? v.push(Q) : Y.path.includes("trackItemDetailsMap") && E.push(Q);
    });
    const k = this.applyPatch(p.tracks, v), R = this.applyPatch(
      p.transitionIds,
      b
    ), O = this.applyPatch(
      p.trackItemIds,
      S
    ), D = this.applyPatch(
      p.transitionsMap,
      T
    ), j = this.applyPatch(
      p.trackItemsMap,
      _
    ), $ = this.applyPatch(
      p.trackItemDetailsMap,
      E
    ), F = Ae.cloneDeep({
      tracks: k,
      transitionIds: R,
      trackItemIds: O,
      transitionsMap: D,
      trackItemsMap: j,
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
    Ep();
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
    }), p = [], v = [], b = [], S = [], T = [], _ = [];
    t.redos.forEach((D) => {
      const j = D.path.slice(1);
      let $ = {};
      switch (D.type) {
        case "CREATE":
          $ = {
            path: j,
            op: "add",
            value: D.value
          };
          break;
        case "CHANGE":
          $ = {
            path: j,
            op: "replace",
            value: D.value
          };
          break;
        case "REMOVE":
          $ = {
            path: j,
            op: "remove",
            value: D.oldValue
          };
          break;
        default:
          return null;
      }
      D.path.includes("trackItemIds") ? b.push($) : D.path.includes("transitionIds") ? v.push($) : D.path.includes("trackItemsMap") ? T.push($) : D.path.includes("transitionsMap") ? S.push($) : D.path.includes("trackItemDetailsMap") ? _.push($) : p.push($);
    });
    const E = {
      tracks: this.applyPatch(h.tracks, p),
      transitionIds: this.applyPatch(h.transitionIds, v),
      trackItemIds: this.applyPatch(h.trackItemIds, b),
      transitionsMap: this.applyPatch(h.transitionsMap, S),
      trackItemsMap: this.applyPatch(h.trackItemsMap, T),
      trackItemDetailsMap: this.applyPatch(h.trackItemDetailsMap, _)
    }, k = Ae.cloneDeep(E), R = { ...Ae.cloneDeep(n), ...k };
    this.prevState = n, this.undos.push({ undos: t.redos, type: t.type });
    const O = wn(R.trackItemsMap);
    this.stateSubject.next({ ...R, duration: O }), this.stateHistorySubject.next({ handleRedo: !0, handleUndo: !1 });
  }
  applyPatch(t, n) {
    return n.reverse().reduce(
      (o, s) => WE(o, (a) => {
        UE(a, [s]);
      }),
      t
    );
  }
}
function ZE(e) {
  const t = we.subject.pipe(zn(({ key: a }) => a.startsWith(x4))).subscribe((a) => {
    a.key === V1 && e.undo(), a.key === G1 && e.redo();
  }), n = we.subject.pipe(zn(({ key: a, value: l }) => a.startsWith(p4))).subscribe((a) => {
    VE.bind(e)(a);
  }), o = we.subject.pipe(
    zn(({ key: a, value: l }) => a.startsWith(T4))
  ).subscribe(async (a) => {
    await $E.bind(e)(a);
  }), s = we.subject.pipe(zn(({ key: a }) => a.startsWith(b4))).subscribe(async (a) => {
    BE.bind(e)(a);
  });
  return () => {
    t.unsubscribe(), n.unsubscribe(), s.unsubscribe(), o.unsubscribe();
  };
}
const KE = () => {
  const { playerRef: e, fps: t, timeline: n, setState: o } = Un();
  Mt(() => {
    const a = we.subject.pipe(
      zn(({ key: l }) => l.startsWith(g4))
    ).subscribe((l) => {
      if (l.key === m4) {
        const { time: u } = l.value?.payload;
        e?.current?.seekTo(u / 1e3 * t);
      } else if (l.key === z1)
        e?.current?.play();
      else if (l.key === H1)
        e?.current?.pause();
      else if (l.key === y4)
        e?.current?.isPlaying() ? e.current.pause() : e?.current?.play();
      else if (l.key === v4) {
        const { frames: u } = l.value?.payload;
        e?.current?.seekTo(
          Math.round(e.current.getCurrentFrame()) + u
        );
      }
    });
    return () => {
      a.unsubscribe();
    };
  }, [e, t]), Mt(() => {
    const a = we.subject.pipe(
      zn(({ key: l }) => l.startsWith(w4))
    ).subscribe((l) => {
      l.key === $1 && o({
        activeIds: l.value?.payload.activeIds
      });
    });
    return () => {
      a.unsubscribe();
    };
  }, [n]);
}, qE = new XE(), hA = () => {
  const { playerRef: e } = Un();
  KE();
  const [t, n] = st([]);
  return /* @__PURE__ */ m.jsxs("div", { className: "relative flex h-screen w-screen flex-col bg-background ", children: [
    /* @__PURE__ */ m.jsx(LC, {}),
    /* @__PURE__ */ m.jsxs(
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
          /* @__PURE__ */ m.jsx(DC, {}),
          /* @__PURE__ */ m.jsx(MC, {}),
          /* @__PURE__ */ m.jsx($C, {})
        ]
      }
    ),
    /* @__PURE__ */ m.jsx("div", { className: "h-70 w-full ", children: e && /* @__PURE__ */ m.jsx(AE, { stateManager: qE }) })
  ] });
};
export {
  U1 as ACTIVE_CLONE,
  W1 as ACTIVE_DELETE,
  EI as ACTIVE_PASTE,
  b4 as ACTIVE_PREFIX,
  TI as ACTIVE_SET,
  B1 as ACTIVE_SPLIT,
  yI as ADD_ANIMATION,
  Eo as ADD_AUDIO,
  Io as ADD_IMAGE,
  mI as ADD_MASK,
  gI as ADD_PLACEHOLDER,
  p4 as ADD_PREFIX,
  cI as ADD_SUFFIX,
  F1 as ADD_TEXT,
  vI as ADD_TRANSITION,
  To as ADD_VIDEO,
  vC as AUDIOS,
  hA as AppComponent,
  O9 as Audio,
  lr as AudioObject,
  nk as BASE_TIMELINE_ELEMENT_DURATION_MS,
  He as Button,
  VC as CanvasMixin,
  sk as DEFAULT_AUDIO_BITRATE,
  ok as DEFAULT_AUDIO_SAMPLE_RATE,
  Yk as DEFAULT_BLUR,
  Gk as DEFAULT_BLUR_STEP,
  Ik as DEFAULT_BRIGHTNESS,
  Ek as DEFAULT_BRIGHTNESS_STEP,
  zk as DEFAULT_CONTRAST,
  Fk as DEFAULT_CONTRAST_STEP,
  mk as DEFAULT_FADE_IN,
  vk as DEFAULT_FADE_OUT,
  gk as DEFAULT_FADE_STEP,
  Sk as DEFAULT_FLIP_X,
  _k as DEFAULT_FLIP_Y,
  np as DEFAULT_FONT,
  f_ as DEFAULT_FRAMERATE,
  Vk as DEFAULT_MAX_BLUR,
  Tk as DEFAULT_MAX_BRIGHTNESS,
  jk as DEFAULT_MAX_CONTRAST,
  pk as DEFAULT_MAX_FADE,
  Wk as DEFAULT_MAX_OPACITY,
  bk as DEFAULT_MAX_ROTATION,
  Ak as DEFAULT_MAX_SATURATION,
  Zk as DEFAULT_MAX_SPEED,
  Mk as DEFAULT_MAX_TEMPERATURE,
  Qk as DEFAULT_MAX_VOLUME,
  uk as DEFAULT_MEDIA_PANEL_WIDTH,
  $k as DEFAULT_MIN_BLUR,
  Ck as DEFAULT_MIN_BRIGHTNESS,
  Nk as DEFAULT_MIN_CONTRAST,
  hk as DEFAULT_MIN_FADE,
  Hk as DEFAULT_MIN_OPACITY,
  yk as DEFAULT_MIN_ROTATION,
  kk as DEFAULT_MIN_SATURATION,
  Xk as DEFAULT_MIN_SPEED,
  Ok as DEFAULT_MIN_TEMPERATURE,
  Jk as DEFAULT_MIN_VOLUME,
  Bk as DEFAULT_OPACITY,
  Uk as DEFAULT_OPACITY_STEP,
  ck as DEFAULT_PREVIEW_HEIGHT,
  gm as DEFAULT_PREVIEW_SCALE,
  ak as DEFAULT_PREVIEW_WIDTH,
  xk as DEFAULT_ROTATION,
  wk as DEFAULT_ROTATION_STEP,
  Pk as DEFAULT_SATURATION,
  Rk as DEFAULT_SATURATION_STEP,
  fk as DEFAULT_SETTINGS_PANEL_WIDTH,
  qk as DEFAULT_SPEED,
  Kk as DEFAULT_SPEED_STEP,
  Lk as DEFAULT_TEMPERATURE,
  Dk as DEFAULT_TEMPERATURE_STEP,
  d_ as DEFAULT_VIDEO_HEIGHT,
  ik as DEFAULT_VIDEO_MAX_BITRATE,
  rk as DEFAULT_VIDEO_MIN_BITRATE,
  u_ as DEFAULT_VIDEO_WIDTH,
  tA as DEFAULT_VOLUME,
  eA as DEFAULT_VOLUME_STEP,
  tk as DEFAULT_WEIGHT,
  WI as DESIGN_LOAD,
  UI as DESIGN_PREFIX,
  $s as DRAG_END,
  _4 as DRAG_PREFIX,
  X1 as DRAG_START,
  fa as Draggable,
  Z4 as DroppableArea,
  wI as EDIT_OBJECT,
  bI as EDIT_PREFIX,
  SI as EDIT_SHAPE,
  xI as EDIT_TEXT,
  _I as ENTER_EDIT_MODE,
  h_ as FRAME_INTERVAL,
  XI as GIANT_ICON_SIZE,
  x4 as HISTORY_PREFIX,
  G1 as HISTORY_REDO,
  HI as HISTORY_RESET,
  V1 as HISTORY_UNDO,
  gC as Header,
  N9 as Helper,
  Ro as HelperObject,
  yC as IMAGES,
  D9 as Image,
  Ru as ImageObject,
  JI as LARGER_FONT_SIZE,
  QI as LARGE_FONT_SIZE,
  ZI as LARGE_ICON_SIZE,
  NI as LAYER_CLONE,
  DI as LAYER_COPY,
  FI as LAYER_CUT,
  zI as LAYER_DELETE,
  MI as LAYER_EDITING_NAME,
  kI as LAYER_HIDDEN,
  II as LAYER_LOCKED,
  AI as LAYER_MOVE,
  LI as LAYER_PASTE,
  w4 as LAYER_PREFIX,
  OI as LAYER_RENAME,
  RI as LAYER_SELECT,
  $1 as LAYER_SELECTION,
  PI as LAYER_SEND_TO,
  jI as LAYER_SPLIT,
  dk as MAX_MEDIA_PANEL_WIDTH,
  lk as MIN_MEDIA_PANEL_WIDTH,
  MC as MenuItem,
  DC as MenuList,
  ek as NORMAL_FONT_SIZE,
  KI as NORMAL_ICON_SIZE,
  LC as NavbarComponent,
  H1 as PLAYER_PAUSE,
  z1 as PLAYER_PLAY,
  g4 as PLAYER_PREFIX,
  m4 as PLAYER_SEEK,
  v4 as PLAYER_SEEK_BY,
  CI as PLAYER_SEEK_TO,
  y4 as PLAYER_TOGGLE_PLAY,
  Sa as PREVIEW_FRAME_WIDTH,
  bo as Placeholder,
  WC as Player,
  UC as PlayheadComponent,
  a_ as Popover,
  ta as PreviewTrackItem,
  BC as RulerComponent,
  E4 as SCENE_LOAD,
  T4 as SCENE_PREFIX,
  K1 as SCENE_RESIZE,
  l_ as SECONDARY_FONT,
  c_ as SMALL_FONT_SIZE,
  qI as SMALL_ICON_SIZE,
  pI as STATE_CHANGED,
  hI as STATE_PREFIX,
  $C as Scene,
  YI as SceneBoard,
  Ii as ScrollArea,
  v1 as ScrollBar,
  zC as SequenceItem,
  D3 as Slider,
  XE as StateManager,
  Z1 as TIMELINE_BOUNDING_CHANGED,
  Iu as TIMELINE_OFFSET_CANVAS_LEFT,
  tp as TIMELINE_OFFSET_CANVAS_RIGHT,
  Wl as TIMELINE_OFFSET_X,
  C4 as TIMELINE_PREFIX,
  Y1 as TIMELINE_SCALE_CHANGED,
  S4 as TIMELINE_SCALE_PREFIX,
  bn as TIMELINE_ZOOM_LEVELS,
  dI as TRACKS_CHANGED,
  fI as TRACK_ITEMS_CHANGED,
  uI as TRACK_ITEMS_PREFIX,
  lI as TRACK_PREFIX,
  wC as TRANSITIONS,
  h4 as Tabs,
  kl as TabsContent,
  j1 as TabsList,
  Il as TabsTrigger,
  Im as Text,
  Ci as TextObject,
  zu as Timeline,
  AE as TimelineComponent,
  L9 as Track,
  j9 as TrackItemsMixin,
  jr as TrackObject,
  z9 as TracksMixin,
  on as Transition,
  ea as TransitionGuide,
  U9 as TransitionsMixin,
  aA as UPLOADS,
  bC as VIDEOS,
  M9 as Video,
  Pi as VideoObject,
  CE as addEventListeners,
  g9 as applyMixins,
  c3 as buttonVariants,
  w9 as calculateDisplayRange,
  wn as calculateDuration,
  Pu as calculatePosition,
  __ as calculateTimelineWidth,
  b9 as calculateTrim,
  gt as cn,
  s9 as createAudioControls,
  p9 as createControls,
  u9 as createMediaControls,
  _m as createResizeControls,
  Ca as defaultColor,
  R9 as defaultSizes,
  we as eventBus,
  x9 as filterAndCleanTracks,
  mm as findIndex,
  iI as formatBytes,
  nA as formatTimeToHumanReadable,
  p_ as formatTimelineUnit,
  g_ as frameToTimeString,
  v_ as getCurrentTime,
  rA as getFitZoomLevel,
  uA as getMovingState,
  w_ as getNextZoom,
  S_ as getNextZoomIndex,
  x_ as getNextZoomLevel,
  Ce as getOffset,
  b_ as getPreviousZoom,
  oA as getPreviousZoomIndex,
  y_ as getPreviousZoomLevel,
  Hs as getTextHeight,
  iA as getZoomByIndex,
  kE as handleEvents,
  Js as handleResize,
  Cm as isScalingFromCenter,
  m9 as loadAudio,
  C9 as loadAudioItem,
  E9 as loadAudioObject,
  C_ as loadFonts,
  v9 as loadImage,
  S9 as loadImageItem,
  I9 as loadImageObject,
  Em as loadTextItem,
  A9 as loadTextObject,
  y9 as loadVideo,
  _9 as loadVideoItem,
  k9 as loadVideoObject,
  P9 as mergeSizes,
  vm as mergeTrackObjects,
  B as movingState,
  GC as positionOffsets,
  sA as randomInt,
  TE as removeEventListeners,
  Ks as removeItemsFromTrack,
  pr as renderControl,
  ym as reorderTracksByIndex,
  ZE as setupHistoryListeners,
  Ze as timeMsToUnits,
  m_ as timeToString,
  Xe as transitionStore,
  tn as unitsToTimeMs,
  dA as updateMovingState,
  ku as useCurrentPlayerFrame,
  _a as useIsDraggingOverTimeline,
  Au as useLayoutStore,
  Un as useStore,
  KE as useTimelineEvents,
  Tm as wrapResizeWithAnchorPosition
};
