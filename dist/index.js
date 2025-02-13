import * as k from "react";
import Et, { useState as it, useRef as Yt, cloneElement as j2, useCallback as zr, forwardRef as yf, createElement as nc, useSyncExternalStore as N2, useEffect as Ht } from "react";
import { createPortal as F2 } from "react-dom";
import { create as wf } from "zustand";
import { Player as z2 } from "@remotion/player";
import { Sequence as Ws, AbsoluteFill as Va, Audio as H2, OffthreadVideo as U2, Img as W2 } from "remotion";
import { Flex as _f } from "@radix-ui/themes";
import { ActiveSelection as Ec, controlsUtils as st, classRegistry as ot, Rect as an, Control as rn, util as xf, Group as Ac, Point as B2, Canvas as $2, FabricObject as Xt } from "fabric";
var Ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rc = { exports: {} }, Ci = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function V2() {
  if (Ad) return Ci;
  Ad = 1;
  var t = Et, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, h, m) {
    var b, _ = {}, S = null, C = null;
    m !== void 0 && (S = "" + m), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (C = h.ref);
    for (b in h) s.call(h, b) && !c.hasOwnProperty(b) && (_[b] = h[b]);
    if (d && d.defaultProps) for (b in h = d.defaultProps, h) _[b] === void 0 && (_[b] = h[b]);
    return { $$typeof: n, type: d, key: S, ref: C, props: _, _owner: a.current };
  }
  return Ci.Fragment = r, Ci.jsx = u, Ci.jsxs = u, Ci;
}
var ki = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function G2() {
  return Rd || (Rd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Et, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function E(w) {
      if (w === null || typeof w != "object")
        return null;
      var H = O && w[O] || w[A];
      return typeof H == "function" ? H : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(w) {
      {
        for (var H = arguments.length, B = new Array(H > 1 ? H - 1 : 0), re = 1; re < H; re++)
          B[re - 1] = arguments[re];
        N("error", w, B);
      }
    }
    function N(w, H, B) {
      {
        var re = P.ReactDebugCurrentFrame, we = re.getStackAddendum();
        we !== "" && (H += "%s", B = B.concat([we]));
        var Ie = B.map(function(pe) {
          return String(pe);
        });
        Ie.unshift("Warning: " + H), Function.prototype.apply.call(console[w], console, Ie);
      }
    }
    var z = !1, K = !1, Z = !1, q = !1, Y = !1, G;
    G = Symbol.for("react.module.reference");
    function te(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === s || w === c || Y || w === a || w === m || w === b || q || w === C || z || K || Z || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === _ || w.$$typeof === u || w.$$typeof === d || w.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === G || w.getModuleId !== void 0));
    }
    function ne(w, H, B) {
      var re = w.displayName;
      if (re)
        return re;
      var we = H.displayName || H.name || "";
      return we !== "" ? B + "(" + we + ")" : B;
    }
    function V(w) {
      return w.displayName || "Context";
    }
    function ae(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case a:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case d:
            var H = w;
            return V(H) + ".Consumer";
          case u:
            var B = w;
            return V(B._context) + ".Provider";
          case h:
            return ne(w, w.render, "ForwardRef");
          case _:
            var re = w.displayName || null;
            return re !== null ? re : ae(w.type) || "Memo";
          case S: {
            var we = w, Ie = we._payload, pe = we._init;
            try {
              return ae(pe(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ye = Object.assign, Oe = 0, _e, Ee, ke, $e, pt, ie, Gn;
    function pr() {
    }
    pr.__reactDisabledLog = !0;
    function Kr() {
      {
        if (Oe === 0) {
          _e = console.log, Ee = console.info, ke = console.warn, $e = console.error, pt = console.group, ie = console.groupCollapsed, Gn = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: pr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        Oe++;
      }
    }
    function Tn() {
      {
        if (Oe--, Oe === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ye({}, w, {
              value: _e
            }),
            info: ye({}, w, {
              value: Ee
            }),
            warn: ye({}, w, {
              value: ke
            }),
            error: ye({}, w, {
              value: $e
            }),
            group: ye({}, w, {
              value: pt
            }),
            groupCollapsed: ye({}, w, {
              value: ie
            }),
            groupEnd: ye({}, w, {
              value: Gn
            })
          });
        }
        Oe < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Cn = P.ReactCurrentDispatcher, qr;
    function Kt(w, H, B) {
      {
        if (qr === void 0)
          try {
            throw Error();
          } catch (we) {
            var re = we.stack.trim().match(/\n( *(at )?)/);
            qr = re && re[1] || "";
          }
        return `
` + qr + w;
      }
    }
    var ln = !1, gr;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      gr = new mr();
    }
    function Xn(w, H) {
      if (!w || ln)
        return "";
      {
        var B = gr.get(w);
        if (B !== void 0)
          return B;
      }
      var re;
      ln = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = Cn.current, Cn.current = null, Kr();
      try {
        if (H) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (Ge) {
              re = Ge;
            }
            Reflect.construct(w, [], pe);
          } else {
            try {
              pe.call();
            } catch (Ge) {
              re = Ge;
            }
            w.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            re = Ge;
          }
          w();
        }
      } catch (Ge) {
        if (Ge && re && typeof Ge.stack == "string") {
          for (var fe = Ge.stack.split(`
`), Je = re.stack.split(`
`), Le = fe.length - 1, Fe = Je.length - 1; Le >= 1 && Fe >= 0 && fe[Le] !== Je[Fe]; )
            Fe--;
          for (; Le >= 1 && Fe >= 0; Le--, Fe--)
            if (fe[Le] !== Je[Fe]) {
              if (Le !== 1 || Fe !== 1)
                do
                  if (Le--, Fe--, Fe < 0 || fe[Le] !== Je[Fe]) {
                    var gt = `
` + fe[Le].replace(" at new ", " at ");
                    return w.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", w.displayName)), typeof w == "function" && gr.set(w, gt), gt;
                  }
                while (Le >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        ln = !1, Cn.current = Ie, Tn(), Error.prepareStackTrace = we;
      }
      var Wt = w ? w.displayName || w.name : "", dn = Wt ? Kt(Wt) : "";
      return typeof w == "function" && gr.set(w, dn), dn;
    }
    function Zi(w, H, B) {
      return Xn(w, !1);
    }
    function wt(w) {
      var H = w.prototype;
      return !!(H && H.isReactComponent);
    }
    function qt(w, H, B) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Xn(w, wt(w));
      if (typeof w == "string")
        return Kt(w);
      switch (w) {
        case m:
          return Kt("Suspense");
        case b:
          return Kt("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case h:
            return Zi(w.render);
          case _:
            return qt(w.type, H, B);
          case S: {
            var re = w, we = re._payload, Ie = re._init;
            try {
              return qt(Ie(we), H, B);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, Ot = {}, Jr = P.ReactDebugCurrentFrame;
    function vr(w) {
      if (w) {
        var H = w._owner, B = qt(w.type, w._source, H ? H.type : null);
        Jr.setExtraStackFrame(B);
      } else
        Jr.setExtraStackFrame(null);
    }
    function Zn(w, H, B, re, we) {
      {
        var Ie = Function.call.bind(Yn);
        for (var pe in w)
          if (Ie(w, pe)) {
            var fe = void 0;
            try {
              if (typeof w[pe] != "function") {
                var Je = Error((re || "React class") + ": " + B + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              fe = w[pe](H, pe, re, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              fe = Le;
            }
            fe && !(fe instanceof Error) && (vr(we), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", B, pe, typeof fe), vr(null)), fe instanceof Error && !(fe.message in Ot) && (Ot[fe.message] = !0, vr(we), M("Failed %s type: %s", B, fe.message), vr(null));
          }
      }
    }
    var _t = Array.isArray;
    function un(w) {
      return _t(w);
    }
    function br(w) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, B = H && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return B;
      }
    }
    function To(w) {
      try {
        return kn(w), !1;
      } catch {
        return !0;
      }
    }
    function kn(w) {
      return "" + w;
    }
    function Ki(w) {
      if (To(w))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(w)), kn(w);
    }
    var En = P.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yr, wr;
    function Qr(w) {
      if (Yn.call(w, "ref")) {
        var H = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function ei(w) {
      if (Yn.call(w, "key")) {
        var H = Object.getOwnPropertyDescriptor(w, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function ti(w, H) {
      typeof w.ref == "string" && En.current;
    }
    function ni(w, H) {
      {
        var B = function() {
          yr || (yr = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        B.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function ri(w, H) {
      {
        var B = function() {
          wr || (wr = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        B.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var ii = function(w, H, B, re, we, Ie, pe) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: w,
        key: H,
        ref: B,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: Ie
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function si(w, H, B, re, we) {
      {
        var Ie, pe = {}, fe = null, Je = null;
        B !== void 0 && (Ki(B), fe = "" + B), ei(H) && (Ki(H.key), fe = "" + H.key), Qr(H) && (Je = H.ref, ti(H, we));
        for (Ie in H)
          Yn.call(H, Ie) && !An.hasOwnProperty(Ie) && (pe[Ie] = H[Ie]);
        if (w && w.defaultProps) {
          var Le = w.defaultProps;
          for (Ie in Le)
            pe[Ie] === void 0 && (pe[Ie] = Le[Ie]);
        }
        if (fe || Je) {
          var Fe = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          fe && ni(pe, Fe), Je && ri(pe, Fe);
        }
        return ii(w, fe, Je, we, re, En.current, pe);
      }
    }
    var oi = P.ReactCurrentOwner, qi = P.ReactDebugCurrentFrame;
    function Rn(w) {
      if (w) {
        var H = w._owner, B = qt(w.type, w._source, H ? H.type : null);
        qi.setExtraStackFrame(B);
      } else
        qi.setExtraStackFrame(null);
    }
    var _r;
    _r = !1;
    function xr(w) {
      return typeof w == "object" && w !== null && w.$$typeof === n;
    }
    function Ji() {
      {
        if (oi.current) {
          var w = ae(oi.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function Co(w) {
      return "";
    }
    var Qi = {};
    function ko(w) {
      {
        var H = Ji();
        if (!H) {
          var B = typeof w == "string" ? w : w.displayName || w.name;
          B && (H = `

Check the top-level render call using <` + B + ">.");
        }
        return H;
      }
    }
    function ai(w, H) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var B = ko(H);
        if (Qi[B])
          return;
        Qi[B] = !0;
        var re = "";
        w && w._owner && w._owner !== oi.current && (re = " It was passed a child from " + ae(w._owner.type) + "."), Rn(w), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, re), Rn(null);
      }
    }
    function es(w, H) {
      {
        if (typeof w != "object")
          return;
        if (un(w))
          for (var B = 0; B < w.length; B++) {
            var re = w[B];
            xr(re) && ai(re, H);
          }
        else if (xr(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var we = E(w);
          if (typeof we == "function" && we !== w.entries)
            for (var Ie = we.call(w), pe; !(pe = Ie.next()).done; )
              xr(pe.value) && ai(pe.value, H);
        }
      }
    }
    function Eo(w) {
      {
        var H = w.type;
        if (H == null || typeof H == "string")
          return;
        var B;
        if (typeof H == "function")
          B = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === _))
          B = H.propTypes;
        else
          return;
        if (B) {
          var re = ae(H);
          Zn(B, w.props, "prop", re, w);
        } else if (H.PropTypes !== void 0 && !_r) {
          _r = !0;
          var we = ae(H);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ao(w) {
      {
        for (var H = Object.keys(w.props), B = 0; B < H.length; B++) {
          var re = H[B];
          if (re !== "children" && re !== "key") {
            Rn(w), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Rn(null);
            break;
          }
        }
        w.ref !== null && (Rn(w), M("Invalid attribute `ref` supplied to `React.Fragment`."), Rn(null));
      }
    }
    var Sr = {};
    function ts(w, H, B, re, we, Ie) {
      {
        var pe = te(w);
        if (!pe) {
          var fe = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Co();
          Je ? fe += Je : fe += Ji();
          var Le;
          w === null ? Le = "null" : un(w) ? Le = "array" : w !== void 0 && w.$$typeof === n ? (Le = "<" + (ae(w.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof w, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, fe);
        }
        var Fe = si(w, H, B, we, Ie);
        if (Fe == null)
          return Fe;
        if (pe) {
          var gt = H.children;
          if (gt !== void 0)
            if (re)
              if (un(gt)) {
                for (var Wt = 0; Wt < gt.length; Wt++)
                  es(gt[Wt], w);
                Object.freeze && Object.freeze(gt);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              es(gt, w);
        }
        if (Yn.call(H, "key")) {
          var dn = ae(w), Ge = Object.keys(H).filter(function(Do) {
            return Do !== "key";
          }), li = Ge.length > 0 ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Sr[dn + li]) {
            var Po = Ge.length > 0 ? "{" + Ge.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, li, dn, Po, dn), Sr[dn + li] = !0;
          }
        }
        return w === s ? Ao(Fe) : Eo(Fe), Fe;
      }
    }
    function ci(w, H, B) {
      return ts(w, H, B, !0);
    }
    function Ro(w, H, B) {
      return ts(w, H, B, !1);
    }
    var Oo = Ro, Mo = ci;
    ki.Fragment = s, ki.jsx = Oo, ki.jsxs = Mo;
  }()), ki;
}
process.env.NODE_ENV === "production" ? rc.exports = V2() : rc.exports = G2();
var v = rc.exports;
function Od(t, n) {
  if (typeof t == "function")
    return t(n);
  t != null && (t.current = n);
}
function Sf(...t) {
  return (n) => {
    let r = !1;
    const s = t.map((a) => {
      const c = Od(a, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const c = s[a];
          typeof c == "function" ? c() : Od(t[a], null);
        }
      };
  };
}
function dt(...t) {
  return k.useCallback(Sf(...t), t);
}
var Pi = k.forwardRef((t, n) => {
  const { children: r, ...s } = t, a = k.Children.toArray(r), c = a.find(Y2);
  if (c) {
    const u = c.props.children, d = a.map((h) => h === c ? k.Children.count(u) > 1 ? k.Children.only(null) : k.isValidElement(u) ? u.props.children : null : h);
    return /* @__PURE__ */ v.jsx(ic, { ...s, ref: n, children: k.isValidElement(u) ? k.cloneElement(u, void 0, d) : null });
  }
  return /* @__PURE__ */ v.jsx(ic, { ...s, ref: n, children: r });
});
Pi.displayName = "Slot";
var ic = k.forwardRef((t, n) => {
  const { children: r, ...s } = t;
  if (k.isValidElement(r)) {
    const a = K2(r), c = Z2(s, r.props);
    return r.type !== k.Fragment && (c.ref = n ? Sf(n, a) : a), k.cloneElement(r, c);
  }
  return k.Children.count(r) > 1 ? k.Children.only(null) : null;
});
ic.displayName = "SlotClone";
var X2 = ({ children: t }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: t });
function Y2(t) {
  return k.isValidElement(t) && t.type === X2;
}
function Z2(t, n) {
  const r = { ...n };
  for (const s in n) {
    const a = t[s], c = n[s];
    /^on[A-Z]/.test(s) ? a && c ? r[s] = (...d) => {
      c(...d), a(...d);
    } : a && (r[s] = a) : s === "style" ? r[s] = { ...a, ...c } : s === "className" && (r[s] = [a, c].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function K2(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? t.ref : (n = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
function If(t) {
  var n, r, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (n = 0; n < a; n++) t[n] && (r = If(t[n])) && (s && (s += " "), s += r);
  } else for (r in t) t[r] && (s && (s += " "), s += r);
  return s;
}
function Tf() {
  for (var t, n, r = 0, s = "", a = arguments.length; r < a; r++) (t = arguments[r]) && (n = If(t)) && (s && (s += " "), s += n);
  return s;
}
const Md = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Pd = Tf, q2 = (t, n) => (r) => {
  var s;
  if (n?.variants == null) return Pd(t, r?.class, r?.className);
  const { variants: a, defaultVariants: c } = n, u = Object.keys(a).map((m) => {
    const b = r?.[m], _ = c?.[m];
    if (b === null) return null;
    const S = Md(b) || Md(_);
    return a[m][S];
  }), d = r && Object.entries(r).reduce((m, b) => {
    let [_, S] = b;
    return S === void 0 || (m[_] = S), m;
  }, {}), h = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((m, b) => {
    let { class: _, className: S, ...C } = b;
    return Object.entries(C).every((O) => {
      let [A, E] = O;
      return Array.isArray(E) ? E.includes({
        ...c,
        ...d
      }[A]) : {
        ...c,
        ...d
      }[A] === E;
    }) ? [
      ...m,
      _,
      S
    ] : m;
  }, []);
  return Pd(t, u, h, r?.class, r?.className);
}, Rc = "-", J2 = (t) => {
  const n = ey(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = t;
  return {
    getClassGroupId: (u) => {
      const d = u.split(Rc);
      return d[0] === "" && d.length !== 1 && d.shift(), Cf(d, n) || Q2(u);
    },
    getConflictingClassGroupIds: (u, d) => {
      const h = r[u] || [];
      return d && s[u] ? [...h, ...s[u]] : h;
    }
  };
}, Cf = (t, n) => {
  if (t.length === 0)
    return n.classGroupId;
  const r = t[0], s = n.nextPart.get(r), a = s ? Cf(t.slice(1), s) : void 0;
  if (a)
    return a;
  if (n.validators.length === 0)
    return;
  const c = t.join(Rc);
  return n.validators.find(({
    validator: u
  }) => u(c))?.classGroupId;
}, Dd = /^\[(.+)\]$/, Q2 = (t) => {
  if (Dd.test(t)) {
    const n = Dd.exec(t)[1], r = n?.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, ey = (t) => {
  const {
    theme: n,
    prefix: r
  } = t, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ny(Object.entries(t.classGroups), r).forEach(([c, u]) => {
    sc(u, s, c, n);
  }), s;
}, sc = (t, n, r, s) => {
  t.forEach((a) => {
    if (typeof a == "string") {
      const c = a === "" ? n : Ld(n, a);
      c.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (ty(a)) {
        sc(a(s), n, r, s);
        return;
      }
      n.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([c, u]) => {
      sc(u, Ld(n, c), r, s);
    });
  });
}, Ld = (t, n) => {
  let r = t;
  return n.split(Rc).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, ty = (t) => t.isThemeGetter, ny = (t, n) => n ? t.map(([r, s]) => {
  const a = s.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, d]) => [n + u, d])) : c);
  return [r, a];
}) : t, ry = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const a = (c, u) => {
    r.set(c, u), n++, n > t && (n = 0, s = r, r = /* @__PURE__ */ new Map());
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
}, kf = "!", iy = (t) => {
  const {
    separator: n,
    experimentalParseClassName: r
  } = t, s = n.length === 1, a = n[0], c = n.length, u = (d) => {
    const h = [];
    let m = 0, b = 0, _;
    for (let E = 0; E < d.length; E++) {
      let P = d[E];
      if (m === 0) {
        if (P === a && (s || d.slice(E, E + c) === n)) {
          h.push(d.slice(b, E)), b = E + c;
          continue;
        }
        if (P === "/") {
          _ = E;
          continue;
        }
      }
      P === "[" ? m++ : P === "]" && m--;
    }
    const S = h.length === 0 ? d : d.substring(b), C = S.startsWith(kf), O = C ? S.substring(1) : S, A = _ && _ > b ? _ - b : void 0;
    return {
      modifiers: h,
      hasImportantModifier: C,
      baseClassName: O,
      maybePostfixModifierPosition: A
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: u
  }) : u;
}, sy = (t) => {
  if (t.length <= 1)
    return t;
  const n = [];
  let r = [];
  return t.forEach((s) => {
    s[0] === "[" ? (n.push(...r.sort(), s), r = []) : r.push(s);
  }), n.push(...r.sort()), n;
}, oy = (t) => ({
  cache: ry(t.cacheSize),
  parseClassName: iy(t),
  ...J2(t)
}), ay = /\s+/, cy = (t, n) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: a
  } = n, c = [], u = t.trim().split(ay);
  let d = "";
  for (let h = u.length - 1; h >= 0; h -= 1) {
    const m = u[h], {
      modifiers: b,
      hasImportantModifier: _,
      baseClassName: S,
      maybePostfixModifierPosition: C
    } = r(m);
    let O = !!C, A = s(O ? S.substring(0, C) : S);
    if (!A) {
      if (!O) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (A = s(S), !A) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      O = !1;
    }
    const E = sy(b).join(":"), P = _ ? E + kf : E, M = P + A;
    if (c.includes(M))
      continue;
    c.push(M);
    const N = a(A, O);
    for (let z = 0; z < N.length; ++z) {
      const K = N[z];
      c.push(P + K);
    }
    d = m + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function ly() {
  let t = 0, n, r, s = "";
  for (; t < arguments.length; )
    (n = arguments[t++]) && (r = Ef(n)) && (s && (s += " "), s += r);
  return s;
}
const Ef = (t) => {
  if (typeof t == "string")
    return t;
  let n, r = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (n = Ef(t[s])) && (r && (r += " "), r += n);
  return r;
};
function uy(t, ...n) {
  let r, s, a, c = u;
  function u(h) {
    const m = n.reduce((b, _) => _(b), t());
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
const Pe = (t) => {
  const n = (r) => r[t] || [];
  return n.isThemeGetter = !0, n;
}, Af = /^\[(?:([a-z-]+):)?(.+)\]$/i, dy = /^\d+\/\d+$/, fy = /* @__PURE__ */ new Set(["px", "full", "screen"]), hy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, py = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, my = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _n = (t) => Hr(t) || fy.has(t) || dy.test(t), Hn = (t) => Br(t, "length", Ty), Hr = (t) => !!t && !Number.isNaN(Number(t)), Ga = (t) => Br(t, "number", Hr), Ei = (t) => !!t && Number.isInteger(Number(t)), by = (t) => t.endsWith("%") && Hr(t.slice(0, -1)), le = (t) => Af.test(t), Un = (t) => hy.test(t), yy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wy = (t) => Br(t, yy, Rf), _y = (t) => Br(t, "position", Rf), xy = /* @__PURE__ */ new Set(["image", "url"]), Sy = (t) => Br(t, xy, ky), Iy = (t) => Br(t, "", Cy), Ai = () => !0, Br = (t, n, r) => {
  const s = Af.exec(t);
  return s ? s[1] ? typeof n == "string" ? s[1] === n : n.has(s[1]) : r(s[2]) : !1;
}, Ty = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  py.test(t) && !gy.test(t)
), Rf = () => !1, Cy = (t) => my.test(t), ky = (t) => vy.test(t), Ey = () => {
  const t = Pe("colors"), n = Pe("spacing"), r = Pe("blur"), s = Pe("brightness"), a = Pe("borderColor"), c = Pe("borderRadius"), u = Pe("borderSpacing"), d = Pe("borderWidth"), h = Pe("contrast"), m = Pe("grayscale"), b = Pe("hueRotate"), _ = Pe("invert"), S = Pe("gap"), C = Pe("gradientColorStops"), O = Pe("gradientColorStopPositions"), A = Pe("inset"), E = Pe("margin"), P = Pe("opacity"), M = Pe("padding"), N = Pe("saturate"), z = Pe("scale"), K = Pe("sepia"), Z = Pe("skew"), q = Pe("space"), Y = Pe("translate"), G = () => ["auto", "contain", "none"], te = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", le, n], V = () => [le, n], ae = () => ["", _n, Hn], ye = () => ["auto", Hr, le], Oe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _e = () => ["solid", "dashed", "dotted", "double", "none"], Ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ke = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], $e = () => ["", "0", le], pt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [Hr, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ai],
      spacing: [_n, Hn],
      blur: ["none", "", Un, le],
      brightness: ie(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Un, le],
      borderSpacing: V(),
      borderWidth: ae(),
      contrast: ie(),
      grayscale: $e(),
      hueRotate: ie(),
      invert: $e(),
      gap: V(),
      gradientColorStops: [t],
      gradientColorStopPositions: [by, Hn],
      inset: ne(),
      margin: ne(),
      opacity: ie(),
      padding: V(),
      saturate: ie(),
      scale: ie(),
      sepia: $e(),
      skew: ie(),
      space: V(),
      translate: V()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
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
        columns: [Un]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pt()
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
        object: [...Oe(), le]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: te()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": te()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": te()
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
        z: ["auto", Ei, le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: $e()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: $e()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ei, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ai]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ei, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ye()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ye()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ai]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ei, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ye()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ye()
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
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
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
        justify: ["normal", ...ke()]
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
        content: ["normal", ...ke(), "baseline"]
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
        "place-content": [...ke(), "baseline"]
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
        p: [M]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [M]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [M]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [M]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [M]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [M]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [M]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [M]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [M]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [Un]
        }, Un]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Un, Hn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ga]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ai]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Hr, Ga]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _n, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
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
        placeholder: [t]
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
        text: [t]
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
        decoration: [..._e(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", _n, Hn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _n, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
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
        content: ["none", le]
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
        bg: [...Oe(), _y]
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
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
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
        border: [..._e(), "hidden"]
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
        divide: _e()
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
        outline: ["", ..._e()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_n, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [_n, Hn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ae()
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
        ring: [t]
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
        "ring-offset": [_n, Hn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Un, Iy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ai]
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
        "mix-blend": [...Ee(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ee()
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
        "drop-shadow": ["", "none", Un, le]
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
        invert: [_]
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
        "backdrop-invert": [_]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ie()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ie()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
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
        rotate: [Ei, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Y]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Y]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_n, Hn, Ga]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
function ut(...t) {
  return Ay(Tf(t));
}
function LS(t, n = {}) {
  const { decimals: r = 0, sizeType: s = "normal" } = n, a = ["Bytes", "KB", "MB", "GB", "TB"], c = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (t === 0) return "0 Byte";
  const u = Math.floor(Math.log(t) / Math.log(1024));
  return `${(t / Math.pow(1024, u)).toFixed(r)} ${s === "accurate" ? c[u] ?? "Bytest" : a[u] ?? "Bytes"}`;
}
const Ry = q2(
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
), Ne = k.forwardRef(
  ({ className: t, variant: n, size: r, asChild: s = !1, ...a }, c) => {
    const u = s ? Pi : "button";
    return /* @__PURE__ */ v.jsx(
      u,
      {
        className: ut(Ry({ variant: n, size: r, className: t })),
        ref: c,
        ...a
      }
    );
  }
);
Ne.displayName = "Button";
function Oc(t, [n, r]) {
  return Math.min(r, Math.max(n, t));
}
function He(t, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(a) {
    if (t?.(a), r === !1 || !a.defaultPrevented)
      return n?.(a);
  };
}
function Ui(t, n = []) {
  let r = [];
  function s(c, u) {
    const d = k.createContext(u), h = r.length;
    r = [...r, u];
    const m = (_) => {
      const { scope: S, children: C, ...O } = _, A = S?.[t]?.[h] || d, E = k.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ v.jsx(A.Provider, { value: E, children: C });
    };
    m.displayName = c + "Provider";
    function b(_, S) {
      const C = S?.[t]?.[h] || d, O = k.useContext(C);
      if (O) return O;
      if (u !== void 0) return u;
      throw new Error(`\`${_}\` must be used within \`${c}\``);
    }
    return [m, b];
  }
  const a = () => {
    const c = r.map((u) => k.createContext(u));
    return function(d) {
      const h = d?.[t] || c;
      return k.useMemo(
        () => ({ [`__scope${t}`]: { ...d, [t]: h } }),
        [d, h]
      );
    };
  };
  return a.scopeName = t, [s, Oy(a, ...n)];
}
function Oy(...t) {
  const n = t[0];
  if (t.length === 1) return n;
  const r = () => {
    const s = t.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(c) {
      const u = s.reduce((d, { useScope: h, scopeName: m }) => {
        const _ = h(c)[`__scope${m}`];
        return { ...d, ..._ };
      }, {});
      return k.useMemo(() => ({ [`__scope${n.scopeName}`]: u }), [u]);
    };
  };
  return r.scopeName = n.scopeName, r;
}
function tn(t) {
  const n = k.useRef(t);
  return k.useEffect(() => {
    n.current = t;
  }), k.useMemo(() => (...r) => n.current?.(...r), []);
}
function Mc({
  prop: t,
  defaultProp: n,
  onChange: r = () => {
  }
}) {
  const [s, a] = My({ defaultProp: n, onChange: r }), c = t !== void 0, u = c ? t : s, d = tn(r), h = k.useCallback(
    (m) => {
      if (c) {
        const _ = typeof m == "function" ? m(t) : m;
        _ !== t && d(_);
      } else
        a(m);
    },
    [c, t, a, d]
  );
  return [u, h];
}
function My({
  defaultProp: t,
  onChange: n
}) {
  const r = k.useState(t), [s] = r, a = k.useRef(s), c = tn(n);
  return k.useEffect(() => {
    a.current !== s && (c(s), a.current = s);
  }, [s, a, c]), r;
}
var Py = k.createContext(void 0);
function co(t) {
  const n = k.useContext(Py);
  return t || n || "ltr";
}
function Dy(t) {
  const n = k.useRef({ value: t, previous: t });
  return k.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
var Di = globalThis?.document ? k.useLayoutEffect : () => {
};
function Ly(t) {
  const [n, r] = k.useState(void 0);
  return Di(() => {
    if (t) {
      r({ width: t.offsetWidth, height: t.offsetHeight });
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const c = a[0];
        let u, d;
        if ("borderBoxSize" in c) {
          const h = c.borderBoxSize, m = Array.isArray(h) ? h[0] : h;
          u = m.inlineSize, d = m.blockSize;
        } else
          u = t.offsetWidth, d = t.offsetHeight;
        r({ width: u, height: d });
      });
      return s.observe(t, { box: "border-box" }), () => s.unobserve(t);
    } else
      r(void 0);
  }, [t]), n;
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
], ft = jy.reduce((t, n) => {
  const r = k.forwardRef((s, a) => {
    const { asChild: c, ...u } = s, d = c ? Pi : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(d, { ...u, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...t, [n]: r };
}, {});
function Of(t) {
  const n = t + "CollectionProvider", [r, s] = Ui(n), [a, c] = r(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), u = (C) => {
    const { scope: O, children: A } = C, E = Et.useRef(null), P = Et.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(a, { scope: O, itemMap: P, collectionRef: E, children: A });
  };
  u.displayName = n;
  const d = t + "CollectionSlot", h = Et.forwardRef(
    (C, O) => {
      const { scope: A, children: E } = C, P = c(d, A), M = dt(O, P.collectionRef);
      return /* @__PURE__ */ v.jsx(Pi, { ref: M, children: E });
    }
  );
  h.displayName = d;
  const m = t + "CollectionItemSlot", b = "data-radix-collection-item", _ = Et.forwardRef(
    (C, O) => {
      const { scope: A, children: E, ...P } = C, M = Et.useRef(null), N = dt(O, M), z = c(m, A);
      return Et.useEffect(() => (z.itemMap.set(M, { ref: M, ...P }), () => void z.itemMap.delete(M))), /* @__PURE__ */ v.jsx(Pi, { [b]: "", ref: N, children: E });
    }
  );
  _.displayName = m;
  function S(C) {
    const O = c(t + "CollectionConsumer", C);
    return Et.useCallback(() => {
      const E = O.collectionRef.current;
      if (!E) return [];
      const P = Array.from(E.querySelectorAll(`[${b}]`));
      return Array.from(O.itemMap.values()).sort(
        (z, K) => P.indexOf(z.ref.current) - P.indexOf(K.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: u, Slot: h, ItemSlot: _ },
    S,
    s
  ];
}
var Mf = ["PageUp", "PageDown"], Pf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Df = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, $r = "Slider", [oc, Ny, Fy] = Of($r), [Lf, jS] = Ui($r, [
  Fy
]), [zy, lo] = Lf($r), jf = k.forwardRef(
  (t, n) => {
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
      onValueChange: _ = () => {
      },
      onValueCommit: S = () => {
      },
      inverted: C = !1,
      form: O,
      ...A
    } = t, E = k.useRef(/* @__PURE__ */ new Set()), P = k.useRef(0), N = u === "horizontal" ? Hy : Uy, [z = [], K] = Mc({
      prop: b,
      defaultProp: m,
      onChange: (ne) => {
        [...E.current][P.current]?.focus(), _(ne);
      }
    }), Z = k.useRef(z);
    function q(ne) {
      const V = Gy(z, ne);
      te(ne, V);
    }
    function Y(ne) {
      te(ne, P.current);
    }
    function G() {
      const ne = Z.current[P.current];
      z[P.current] !== ne && S(z);
    }
    function te(ne, V, { commit: ae } = { commit: !1 }) {
      const ye = Ky(c), Oe = qy(Math.round((ne - s) / c) * c + s, ye), _e = Oc(Oe, [s, a]);
      K((Ee = []) => {
        const ke = $y(Ee, _e, V);
        if (Zy(ke, h * c)) {
          P.current = ke.indexOf(_e);
          const $e = String(ke) !== String(Ee);
          return $e && ae && S(ke), $e ? ke : Ee;
        } else
          return Ee;
      });
    }
    return /* @__PURE__ */ v.jsx(
      zy,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: d,
        min: s,
        max: a,
        valueIndexToChangeRef: P,
        thumbs: E.current,
        values: z,
        orientation: u,
        form: O,
        children: /* @__PURE__ */ v.jsx(oc.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(oc.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(
          N,
          {
            "aria-disabled": d,
            "data-disabled": d ? "" : void 0,
            ...A,
            ref: n,
            onPointerDown: He(A.onPointerDown, () => {
              d || (Z.current = z);
            }),
            min: s,
            max: a,
            inverted: C,
            onSlideStart: d ? void 0 : q,
            onSlideMove: d ? void 0 : Y,
            onSlideEnd: d ? void 0 : G,
            onHomeKeyDown: () => !d && te(s, 0, { commit: !0 }),
            onEndKeyDown: () => !d && te(a, z.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: ne, direction: V }) => {
              if (!d) {
                const Oe = Mf.includes(ne.key) || ne.shiftKey && Pf.includes(ne.key) ? 10 : 1, _e = P.current, Ee = z[_e], ke = c * Oe * V;
                te(Ee + ke, _e, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
jf.displayName = $r;
var [Nf, Ff] = Lf($r, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Hy = k.forwardRef(
  (t, n) => {
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
    } = t, [_, S] = k.useState(null), C = dt(n, (N) => S(N)), O = k.useRef(void 0), A = co(a), E = A === "ltr", P = E && !c || !E && c;
    function M(N) {
      const z = O.current || _.getBoundingClientRect(), K = [0, z.width], q = Pc(K, P ? [r, s] : [s, r]);
      return O.current = z, q(N - z.left);
    }
    return /* @__PURE__ */ v.jsx(
      Nf,
      {
        scope: t.__scopeSlider,
        startEdge: P ? "left" : "right",
        endEdge: P ? "right" : "left",
        direction: P ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ v.jsx(
          zf,
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
              const z = M(N.clientX);
              u?.(z);
            },
            onSlideMove: (N) => {
              const z = M(N.clientX);
              d?.(z);
            },
            onSlideEnd: () => {
              O.current = void 0, h?.();
            },
            onStepKeyDown: (N) => {
              const K = Df[P ? "from-left" : "from-right"].includes(N.key);
              m?.({ event: N, direction: K ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Uy = k.forwardRef(
  (t, n) => {
    const {
      min: r,
      max: s,
      inverted: a,
      onSlideStart: c,
      onSlideMove: u,
      onSlideEnd: d,
      onStepKeyDown: h,
      ...m
    } = t, b = k.useRef(null), _ = dt(n, b), S = k.useRef(void 0), C = !a;
    function O(A) {
      const E = S.current || b.current.getBoundingClientRect(), P = [0, E.height], N = Pc(P, C ? [s, r] : [r, s]);
      return S.current = E, N(A - E.top);
    }
    return /* @__PURE__ */ v.jsx(
      Nf,
      {
        scope: t.__scopeSlider,
        startEdge: C ? "bottom" : "top",
        endEdge: C ? "top" : "bottom",
        size: "height",
        direction: C ? 1 : -1,
        children: /* @__PURE__ */ v.jsx(
          zf,
          {
            "data-orientation": "vertical",
            ...m,
            ref: _,
            style: {
              ...m.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (A) => {
              const E = O(A.clientY);
              c?.(E);
            },
            onSlideMove: (A) => {
              const E = O(A.clientY);
              u?.(E);
            },
            onSlideEnd: () => {
              S.current = void 0, d?.();
            },
            onStepKeyDown: (A) => {
              const P = Df[C ? "from-bottom" : "from-top"].includes(A.key);
              h?.({ event: A, direction: P ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), zf = k.forwardRef(
  (t, n) => {
    const {
      __scopeSlider: r,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: c,
      onHomeKeyDown: u,
      onEndKeyDown: d,
      onStepKeyDown: h,
      ...m
    } = t, b = lo($r, r);
    return /* @__PURE__ */ v.jsx(
      ft.span,
      {
        ...m,
        ref: n,
        onKeyDown: He(t.onKeyDown, (_) => {
          _.key === "Home" ? (u(_), _.preventDefault()) : _.key === "End" ? (d(_), _.preventDefault()) : Mf.concat(Pf).includes(_.key) && (h(_), _.preventDefault());
        }),
        onPointerDown: He(t.onPointerDown, (_) => {
          const S = _.target;
          S.setPointerCapture(_.pointerId), _.preventDefault(), b.thumbs.has(S) ? S.focus() : s(_);
        }),
        onPointerMove: He(t.onPointerMove, (_) => {
          _.target.hasPointerCapture(_.pointerId) && a(_);
        }),
        onPointerUp: He(t.onPointerUp, (_) => {
          const S = _.target;
          S.hasPointerCapture(_.pointerId) && (S.releasePointerCapture(_.pointerId), c(_));
        })
      }
    );
  }
), Hf = "SliderTrack", Uf = k.forwardRef(
  (t, n) => {
    const { __scopeSlider: r, ...s } = t, a = lo(Hf, r);
    return /* @__PURE__ */ v.jsx(
      ft.span,
      {
        "data-disabled": a.disabled ? "" : void 0,
        "data-orientation": a.orientation,
        ...s,
        ref: n
      }
    );
  }
);
Uf.displayName = Hf;
var ac = "SliderRange", Wf = k.forwardRef(
  (t, n) => {
    const { __scopeSlider: r, ...s } = t, a = lo(ac, r), c = Ff(ac, r), u = k.useRef(null), d = dt(n, u), h = a.values.length, m = a.values.map(
      (S) => $f(S, a.min, a.max)
    ), b = h > 1 ? Math.min(...m) : 0, _ = 100 - Math.max(...m);
    return /* @__PURE__ */ v.jsx(
      ft.span,
      {
        "data-orientation": a.orientation,
        "data-disabled": a.disabled ? "" : void 0,
        ...s,
        ref: d,
        style: {
          ...t.style,
          [c.startEdge]: b + "%",
          [c.endEdge]: _ + "%"
        }
      }
    );
  }
);
Wf.displayName = ac;
var cc = "SliderThumb", Bf = k.forwardRef(
  (t, n) => {
    const r = Ny(t.__scopeSlider), [s, a] = k.useState(null), c = dt(n, (d) => a(d)), u = k.useMemo(
      () => s ? r().findIndex((d) => d.ref.current === s) : -1,
      [r, s]
    );
    return /* @__PURE__ */ v.jsx(Wy, { ...t, ref: c, index: u });
  }
), Wy = k.forwardRef(
  (t, n) => {
    const { __scopeSlider: r, index: s, name: a, ...c } = t, u = lo(cc, r), d = Ff(cc, r), [h, m] = k.useState(null), b = dt(n, (M) => m(M)), _ = h ? u.form || !!h.closest("form") : !0, S = Ly(h), C = u.values[s], O = C === void 0 ? 0 : $f(C, u.min, u.max), A = Vy(s, u.values.length), E = S?.[d.size], P = E ? Xy(E, O, d.direction) : 0;
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
          [d.startEdge]: `calc(${O}% + ${P}px)`
        },
        children: [
          /* @__PURE__ */ v.jsx(oc.ItemSlot, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(
            ft.span,
            {
              role: "slider",
              "aria-label": t["aria-label"] || A,
              "aria-valuemin": u.min,
              "aria-valuenow": C,
              "aria-valuemax": u.max,
              "aria-orientation": u.orientation,
              "data-orientation": u.orientation,
              "data-disabled": u.disabled ? "" : void 0,
              tabIndex: u.disabled ? void 0 : 0,
              ...c,
              ref: b,
              style: C === void 0 ? { display: "none" } : t.style,
              onFocus: He(t.onFocus, () => {
                u.valueIndexToChangeRef.current = s;
              })
            }
          ) }),
          _ && /* @__PURE__ */ v.jsx(
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
Bf.displayName = cc;
var By = (t) => {
  const { value: n, ...r } = t, s = k.useRef(null), a = Dy(n);
  return k.useEffect(() => {
    const c = s.current, u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
    if (a !== n && h) {
      const m = new Event("input", { bubbles: !0 });
      h.call(c, n), c.dispatchEvent(m);
    }
  }, [a, n]), /* @__PURE__ */ v.jsx("input", { style: { display: "none" }, ...r, ref: s, defaultValue: n });
};
function $y(t = [], n, r) {
  const s = [...t];
  return s[r] = n, s.sort((a, c) => a - c);
}
function $f(t, n, r) {
  const c = 100 / (r - n) * (t - n);
  return Oc(c, [0, 100]);
}
function Vy(t, n) {
  return n > 2 ? `Value ${t + 1} of ${n}` : n === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function Gy(t, n) {
  if (t.length === 1) return 0;
  const r = t.map((a) => Math.abs(a - n)), s = Math.min(...r);
  return r.indexOf(s);
}
function Xy(t, n, r) {
  const s = t / 2, c = Pc([0, 50], [0, s]);
  return (s - c(n) * r) * r;
}
function Yy(t) {
  return t.slice(0, -1).map((n, r) => t[r + 1] - n);
}
function Zy(t, n) {
  if (n > 0) {
    const r = Yy(t);
    return Math.min(...r) >= n;
  }
  return !0;
}
function Pc(t, n) {
  return (r) => {
    if (t[0] === t[1] || n[0] === n[1]) return n[0];
    const s = (n[1] - n[0]) / (t[1] - t[0]);
    return n[0] + s * (r - t[0]);
  };
}
function Ky(t) {
  return (String(t).split(".")[1] || "").length;
}
function qy(t, n) {
  const r = Math.pow(10, n);
  return Math.round(t * r) / r;
}
var Vf = jf, Jy = Uf, Qy = Wf, e5 = Bf;
const t5 = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  Vf,
  {
    ref: r,
    className: ut(
      "relative flex w-full touch-none select-none items-center",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx(Jy, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ v.jsx(Qy, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ v.jsx(e5, { className: "block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
t5.displayName = Vf.displayName;
function n5(t, n) {
  return k.useReducer((r, s) => n[r][s] ?? r, t);
}
var Vr = (t) => {
  const { present: n, children: r } = t, s = r5(n), a = typeof r == "function" ? r({ present: s.isPresent }) : k.Children.only(r), c = dt(s.ref, i5(a));
  return typeof r == "function" || s.isPresent ? k.cloneElement(a, { ref: c }) : null;
};
Vr.displayName = "Presence";
function r5(t) {
  const [n, r] = k.useState(), s = k.useRef({}), a = k.useRef(t), c = k.useRef("none"), u = t ? "mounted" : "unmounted", [d, h] = n5(u, {
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
    const m = Bs(s.current);
    c.current = d === "mounted" ? m : "none";
  }, [d]), Di(() => {
    const m = s.current, b = a.current;
    if (b !== t) {
      const S = c.current, C = Bs(m);
      t ? h("MOUNT") : C === "none" || m?.display === "none" ? h("UNMOUNT") : h(b && S !== C ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
    }
  }, [t, h]), Di(() => {
    if (n) {
      let m;
      const b = n.ownerDocument.defaultView ?? window, _ = (C) => {
        const A = Bs(s.current).includes(C.animationName);
        if (C.target === n && A && (h("ANIMATION_END"), !a.current)) {
          const E = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", m = b.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = E);
          });
        }
      }, S = (C) => {
        C.target === n && (c.current = Bs(s.current));
      };
      return n.addEventListener("animationstart", S), n.addEventListener("animationcancel", _), n.addEventListener("animationend", _), () => {
        b.clearTimeout(m), n.removeEventListener("animationstart", S), n.removeEventListener("animationcancel", _), n.removeEventListener("animationend", _);
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
function Bs(t) {
  return t?.animationName || "none";
}
function i5(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? t.ref : (n = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
function s5(t, n) {
  return k.useReducer((r, s) => n[r][s] ?? r, t);
}
var Dc = "ScrollArea", [Gf, NS] = Ui(Dc), [o5, Ut] = Gf(Dc), Xf = k.forwardRef(
  (t, n) => {
    const {
      __scopeScrollArea: r,
      type: s = "hover",
      dir: a,
      scrollHideDelay: c = 600,
      ...u
    } = t, [d, h] = k.useState(null), [m, b] = k.useState(null), [_, S] = k.useState(null), [C, O] = k.useState(null), [A, E] = k.useState(null), [P, M] = k.useState(0), [N, z] = k.useState(0), [K, Z] = k.useState(!1), [q, Y] = k.useState(!1), G = dt(n, (ne) => h(ne)), te = co(a);
    return /* @__PURE__ */ v.jsx(
      o5,
      {
        scope: r,
        type: s,
        dir: te,
        scrollHideDelay: c,
        scrollArea: d,
        viewport: m,
        onViewportChange: b,
        content: _,
        onContentChange: S,
        scrollbarX: C,
        onScrollbarXChange: O,
        scrollbarXEnabled: K,
        onScrollbarXEnabledChange: Z,
        scrollbarY: A,
        onScrollbarYChange: E,
        scrollbarYEnabled: q,
        onScrollbarYEnabledChange: Y,
        onCornerWidthChange: M,
        onCornerHeightChange: z,
        children: /* @__PURE__ */ v.jsx(
          ft.div,
          {
            dir: te,
            ...u,
            ref: G,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": P + "px",
              "--radix-scroll-area-corner-height": N + "px",
              ...t.style
            }
          }
        )
      }
    );
  }
);
Xf.displayName = Dc;
var Yf = "ScrollAreaViewport", Zf = k.forwardRef(
  (t, n) => {
    const { __scopeScrollArea: r, children: s, nonce: a, ...c } = t, u = Ut(Yf, r), d = k.useRef(null), h = dt(n, d, u.onViewportChange);
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
        ft.div,
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
            ...t.style
          },
          children: /* @__PURE__ */ v.jsx("div", { ref: u.onContentChange, style: { minWidth: "100%", display: "table" }, children: s })
        }
      )
    ] });
  }
);
Zf.displayName = Yf;
var cn = "ScrollAreaScrollbar", uo = k.forwardRef(
  (t, n) => {
    const { forceMount: r, ...s } = t, a = Ut(cn, t.__scopeScrollArea), { onScrollbarXEnabledChange: c, onScrollbarYEnabledChange: u } = a, d = t.orientation === "horizontal";
    return k.useEffect(() => (d ? c(!0) : u(!0), () => {
      d ? c(!1) : u(!1);
    }), [d, c, u]), a.type === "hover" ? /* @__PURE__ */ v.jsx(a5, { ...s, ref: n, forceMount: r }) : a.type === "scroll" ? /* @__PURE__ */ v.jsx(c5, { ...s, ref: n, forceMount: r }) : a.type === "auto" ? /* @__PURE__ */ v.jsx(Kf, { ...s, ref: n, forceMount: r }) : a.type === "always" ? /* @__PURE__ */ v.jsx(Lc, { ...s, ref: n }) : null;
  }
);
uo.displayName = cn;
var a5 = k.forwardRef((t, n) => {
  const { forceMount: r, ...s } = t, a = Ut(cn, t.__scopeScrollArea), [c, u] = k.useState(!1);
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
  }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ v.jsx(Vr, { present: r || c, children: /* @__PURE__ */ v.jsx(
    Kf,
    {
      "data-state": c ? "visible" : "hidden",
      ...s,
      ref: n
    }
  ) });
}), c5 = k.forwardRef((t, n) => {
  const { forceMount: r, ...s } = t, a = Ut(cn, t.__scopeScrollArea), c = t.orientation === "horizontal", u = ho(() => h("SCROLL_END"), 100), [d, h] = s5("hidden", {
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
      let _ = m[b];
      const S = () => {
        const C = m[b];
        _ !== C && (h("SCROLL"), u()), _ = C;
      };
      return m.addEventListener("scroll", S), () => m.removeEventListener("scroll", S);
    }
  }, [a.viewport, c, h, u]), /* @__PURE__ */ v.jsx(Vr, { present: r || d !== "hidden", children: /* @__PURE__ */ v.jsx(
    Lc,
    {
      "data-state": d === "hidden" ? "hidden" : "visible",
      ...s,
      ref: n,
      onPointerEnter: He(t.onPointerEnter, () => h("POINTER_ENTER")),
      onPointerLeave: He(t.onPointerLeave, () => h("POINTER_LEAVE"))
    }
  ) });
}), Kf = k.forwardRef((t, n) => {
  const r = Ut(cn, t.__scopeScrollArea), { forceMount: s, ...a } = t, [c, u] = k.useState(!1), d = t.orientation === "horizontal", h = ho(() => {
    if (r.viewport) {
      const m = r.viewport.offsetWidth < r.viewport.scrollWidth, b = r.viewport.offsetHeight < r.viewport.scrollHeight;
      u(d ? m : b);
    }
  }, 10);
  return Ur(r.viewport, h), Ur(r.content, h), /* @__PURE__ */ v.jsx(Vr, { present: s || c, children: /* @__PURE__ */ v.jsx(
    Lc,
    {
      "data-state": c ? "visible" : "hidden",
      ...a,
      ref: n
    }
  ) });
}), Lc = k.forwardRef((t, n) => {
  const { orientation: r = "vertical", ...s } = t, a = Ut(cn, t.__scopeScrollArea), c = k.useRef(null), u = k.useRef(0), [d, h] = k.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), m = eh(d.viewport, d.content), b = {
    ...s,
    sizes: d,
    onSizesChange: h,
    hasThumb: m > 0 && m < 1,
    onThumbChange: (S) => c.current = S,
    onThumbPointerUp: () => u.current = 0,
    onThumbPointerDown: (S) => u.current = S
  };
  function _(S, C) {
    return p5(S, u.current, d, C);
  }
  return r === "horizontal" ? /* @__PURE__ */ v.jsx(
    l5,
    {
      ...b,
      ref: n,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const S = a.viewport.scrollLeft, C = jd(S, d, a.dir);
          c.current.style.transform = `translate3d(${C}px, 0, 0)`;
        }
      },
      onWheelScroll: (S) => {
        a.viewport && (a.viewport.scrollLeft = S);
      },
      onDragScroll: (S) => {
        a.viewport && (a.viewport.scrollLeft = _(S, a.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ v.jsx(
    u5,
    {
      ...b,
      ref: n,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const S = a.viewport.scrollTop, C = jd(S, d);
          c.current.style.transform = `translate3d(0, ${C}px, 0)`;
        }
      },
      onWheelScroll: (S) => {
        a.viewport && (a.viewport.scrollTop = S);
      },
      onDragScroll: (S) => {
        a.viewport && (a.viewport.scrollTop = _(S));
      }
    }
  ) : null;
}), l5 = k.forwardRef((t, n) => {
  const { sizes: r, onSizesChange: s, ...a } = t, c = Ut(cn, t.__scopeScrollArea), [u, d] = k.useState(), h = k.useRef(null), m = dt(n, h, c.onScrollbarXChange);
  return k.useEffect(() => {
    h.current && d(getComputedStyle(h.current));
  }, [h]), /* @__PURE__ */ v.jsx(
    Jf,
    {
      "data-orientation": "horizontal",
      ...a,
      ref: m,
      sizes: r,
      style: {
        bottom: 0,
        left: c.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: c.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": fo(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (b) => t.onThumbPointerDown(b.x),
      onDragScroll: (b) => t.onDragScroll(b.x),
      onWheelScroll: (b, _) => {
        if (c.viewport) {
          const S = c.viewport.scrollLeft + b.deltaX;
          t.onWheelScroll(S), nh(S, _) && b.preventDefault();
        }
      },
      onResize: () => {
        h.current && c.viewport && u && s({
          content: c.viewport.scrollWidth,
          viewport: c.viewport.offsetWidth,
          scrollbar: {
            size: h.current.clientWidth,
            paddingStart: Zs(u.paddingLeft),
            paddingEnd: Zs(u.paddingRight)
          }
        });
      }
    }
  );
}), u5 = k.forwardRef((t, n) => {
  const { sizes: r, onSizesChange: s, ...a } = t, c = Ut(cn, t.__scopeScrollArea), [u, d] = k.useState(), h = k.useRef(null), m = dt(n, h, c.onScrollbarYChange);
  return k.useEffect(() => {
    h.current && d(getComputedStyle(h.current));
  }, [h]), /* @__PURE__ */ v.jsx(
    Jf,
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
        "--radix-scroll-area-thumb-height": fo(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (b) => t.onThumbPointerDown(b.y),
      onDragScroll: (b) => t.onDragScroll(b.y),
      onWheelScroll: (b, _) => {
        if (c.viewport) {
          const S = c.viewport.scrollTop + b.deltaY;
          t.onWheelScroll(S), nh(S, _) && b.preventDefault();
        }
      },
      onResize: () => {
        h.current && c.viewport && u && s({
          content: c.viewport.scrollHeight,
          viewport: c.viewport.offsetHeight,
          scrollbar: {
            size: h.current.clientHeight,
            paddingStart: Zs(u.paddingTop),
            paddingEnd: Zs(u.paddingBottom)
          }
        });
      }
    }
  );
}), [d5, qf] = Gf(cn), Jf = k.forwardRef((t, n) => {
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
    onResize: _,
    ...S
  } = t, C = Ut(cn, r), [O, A] = k.useState(null), E = dt(n, (G) => A(G)), P = k.useRef(null), M = k.useRef(""), N = C.viewport, z = s.content - s.viewport, K = tn(b), Z = tn(h), q = ho(_, 10);
  function Y(G) {
    if (P.current) {
      const te = G.clientX - P.current.left, ne = G.clientY - P.current.top;
      m({ x: te, y: ne });
    }
  }
  return k.useEffect(() => {
    const G = (te) => {
      const ne = te.target;
      O?.contains(ne) && K(te, z);
    };
    return document.addEventListener("wheel", G, { passive: !1 }), () => document.removeEventListener("wheel", G, { passive: !1 });
  }, [N, O, z, K]), k.useEffect(Z, [s, Z]), Ur(O, q), Ur(C.content, q), /* @__PURE__ */ v.jsx(
    d5,
    {
      scope: r,
      scrollbar: O,
      hasThumb: a,
      onThumbChange: tn(c),
      onThumbPointerUp: tn(u),
      onThumbPositionChange: Z,
      onThumbPointerDown: tn(d),
      children: /* @__PURE__ */ v.jsx(
        ft.div,
        {
          ...S,
          ref: E,
          style: { position: "absolute", ...S.style },
          onPointerDown: He(t.onPointerDown, (G) => {
            G.button === 0 && (G.target.setPointerCapture(G.pointerId), P.current = O.getBoundingClientRect(), M.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", C.viewport && (C.viewport.style.scrollBehavior = "auto"), Y(G));
          }),
          onPointerMove: He(t.onPointerMove, Y),
          onPointerUp: He(t.onPointerUp, (G) => {
            const te = G.target;
            te.hasPointerCapture(G.pointerId) && te.releasePointerCapture(G.pointerId), document.body.style.webkitUserSelect = M.current, C.viewport && (C.viewport.style.scrollBehavior = ""), P.current = null;
          })
        }
      )
    }
  );
}), Ys = "ScrollAreaThumb", jc = k.forwardRef(
  (t, n) => {
    const { forceMount: r, ...s } = t, a = qf(Ys, t.__scopeScrollArea);
    return /* @__PURE__ */ v.jsx(Vr, { present: r || a.hasThumb, children: /* @__PURE__ */ v.jsx(f5, { ref: n, ...s }) });
  }
), f5 = k.forwardRef(
  (t, n) => {
    const { __scopeScrollArea: r, style: s, ...a } = t, c = Ut(Ys, r), u = qf(Ys, r), { onThumbPositionChange: d } = u, h = dt(
      n,
      (_) => u.onThumbChange(_)
    ), m = k.useRef(void 0), b = ho(() => {
      m.current && (m.current(), m.current = void 0);
    }, 100);
    return k.useEffect(() => {
      const _ = c.viewport;
      if (_) {
        const S = () => {
          if (b(), !m.current) {
            const C = g5(_, d);
            m.current = C, d();
          }
        };
        return d(), _.addEventListener("scroll", S), () => _.removeEventListener("scroll", S);
      }
    }, [c.viewport, b, d]), /* @__PURE__ */ v.jsx(
      ft.div,
      {
        "data-state": u.hasThumb ? "visible" : "hidden",
        ...a,
        ref: h,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...s
        },
        onPointerDownCapture: He(t.onPointerDownCapture, (_) => {
          const C = _.target.getBoundingClientRect(), O = _.clientX - C.left, A = _.clientY - C.top;
          u.onThumbPointerDown({ x: O, y: A });
        }),
        onPointerUp: He(t.onPointerUp, u.onThumbPointerUp)
      }
    );
  }
);
jc.displayName = Ys;
var Nc = "ScrollAreaCorner", Qf = k.forwardRef(
  (t, n) => {
    const r = Ut(Nc, t.__scopeScrollArea), s = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && s ? /* @__PURE__ */ v.jsx(h5, { ...t, ref: n }) : null;
  }
);
Qf.displayName = Nc;
var h5 = k.forwardRef((t, n) => {
  const { __scopeScrollArea: r, ...s } = t, a = Ut(Nc, r), [c, u] = k.useState(0), [d, h] = k.useState(0), m = !!(c && d);
  return Ur(a.scrollbarX, () => {
    const b = a.scrollbarX?.offsetHeight || 0;
    a.onCornerHeightChange(b), h(b);
  }), Ur(a.scrollbarY, () => {
    const b = a.scrollbarY?.offsetWidth || 0;
    a.onCornerWidthChange(b), u(b);
  }), m ? /* @__PURE__ */ v.jsx(
    ft.div,
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
        ...t.style
      }
    }
  ) : null;
});
function Zs(t) {
  return t ? parseInt(t, 10) : 0;
}
function eh(t, n) {
  const r = t / n;
  return isNaN(r) ? 0 : r;
}
function fo(t) {
  const n = eh(t.viewport, t.content), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = (t.scrollbar.size - r) * n;
  return Math.max(s, 18);
}
function p5(t, n, r, s = "ltr") {
  const a = fo(r), c = a / 2, u = n || c, d = a - u, h = r.scrollbar.paddingStart + u, m = r.scrollbar.size - r.scrollbar.paddingEnd - d, b = r.content - r.viewport, _ = s === "ltr" ? [0, b] : [b * -1, 0];
  return th([h, m], _)(t);
}
function jd(t, n, r = "ltr") {
  const s = fo(n), a = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, c = n.scrollbar.size - a, u = n.content - n.viewport, d = c - s, h = r === "ltr" ? [0, u] : [u * -1, 0], m = Oc(t, h);
  return th([0, u], [0, d])(m);
}
function th(t, n) {
  return (r) => {
    if (t[0] === t[1] || n[0] === n[1]) return n[0];
    const s = (n[1] - n[0]) / (t[1] - t[0]);
    return n[0] + s * (r - t[0]);
  };
}
function nh(t, n) {
  return t > 0 && t < n;
}
var g5 = (t, n = () => {
}) => {
  let r = { left: t.scrollLeft, top: t.scrollTop }, s = 0;
  return function a() {
    const c = { left: t.scrollLeft, top: t.scrollTop }, u = r.left !== c.left, d = r.top !== c.top;
    (u || d) && n(), r = c, s = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(s);
};
function ho(t, n) {
  const r = tn(t), s = k.useRef(0);
  return k.useEffect(() => () => window.clearTimeout(s.current), []), k.useCallback(() => {
    window.clearTimeout(s.current), s.current = window.setTimeout(r, n);
  }, [r, n]);
}
function Ur(t, n) {
  const r = tn(n);
  Di(() => {
    let s = 0;
    if (t) {
      const a = new ResizeObserver(() => {
        cancelAnimationFrame(s), s = window.requestAnimationFrame(r);
      });
      return a.observe(t), () => {
        window.cancelAnimationFrame(s), a.unobserve(t);
      };
    }
  }, [t, r]);
}
var Ks = Xf, lc = Zf, Nd = uo, Fd = jc, m5 = Qf;
const Gr = k.forwardRef(({ className: t, children: n, ...r }, s) => /* @__PURE__ */ v.jsxs(
  Ks,
  {
    ref: s,
    className: ut("relative overflow-hidden", t),
    ...r,
    children: [
      /* @__PURE__ */ v.jsx(lc, { className: "h-full w-full rounded-[inherit]", children: n }),
      /* @__PURE__ */ v.jsx(rh, {}),
      /* @__PURE__ */ v.jsx(m5, {})
    ]
  }
));
Gr.displayName = Ks.displayName;
const rh = k.forwardRef(({ className: t, orientation: n = "vertical", ...r }, s) => /* @__PURE__ */ v.jsx(
  uo,
  {
    ref: s,
    orientation: n,
    className: ut(
      "flex touch-none select-none transition-colors",
      n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...r,
    children: /* @__PURE__ */ v.jsx(jc, { className: "relative flex-1 rounded-full bg-border" })
  }
));
rh.displayName = uo.displayName;
const po = ({
  children: t,
  renderCustomPreview: n,
  data: r = {},
  shouldDisplayPreview: s = !0
}) => {
  const [a, c] = it(!1), [u, d] = it({ x: 0, y: 0 }), h = Yt(null), S = j2(t, {
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
      ...t.props.style
    }
  });
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    S,
    a && s && n ? F2(
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
function ih(t) {
  const [n, r] = k.useState(v5());
  return Di(() => {
    r((s) => s ?? String(b5++));
  }, [t]), n ? `radix-${n}` : "";
}
var Xa = "rovingFocusGroup.onEntryFocus", y5 = { bubbles: !1, cancelable: !0 }, go = "RovingFocusGroup", [uc, sh, w5] = Of(go), [_5, oh] = Ui(
  go,
  [w5]
), [x5, S5] = _5(go), ah = k.forwardRef(
  (t, n) => /* @__PURE__ */ v.jsx(uc.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(uc.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(I5, { ...t, ref: n }) }) })
);
ah.displayName = go;
var I5 = k.forwardRef((t, n) => {
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
    ..._
  } = t, S = k.useRef(null), C = dt(n, S), O = co(c), [A = null, E] = Mc({
    prop: u,
    defaultProp: d,
    onChange: h
  }), [P, M] = k.useState(!1), N = tn(m), z = sh(r), K = k.useRef(!1), [Z, q] = k.useState(0);
  return k.useEffect(() => {
    const Y = S.current;
    if (Y)
      return Y.addEventListener(Xa, N), () => Y.removeEventListener(Xa, N);
  }, [N]), /* @__PURE__ */ v.jsx(
    x5,
    {
      scope: r,
      orientation: s,
      dir: O,
      loop: a,
      currentTabStopId: A,
      onItemFocus: k.useCallback(
        (Y) => E(Y),
        [E]
      ),
      onItemShiftTab: k.useCallback(() => M(!0), []),
      onFocusableItemAdd: k.useCallback(
        () => q((Y) => Y + 1),
        []
      ),
      onFocusableItemRemove: k.useCallback(
        () => q((Y) => Y - 1),
        []
      ),
      children: /* @__PURE__ */ v.jsx(
        ft.div,
        {
          tabIndex: P || Z === 0 ? -1 : 0,
          "data-orientation": s,
          ..._,
          ref: C,
          style: { outline: "none", ...t.style },
          onMouseDown: He(t.onMouseDown, () => {
            K.current = !0;
          }),
          onFocus: He(t.onFocus, (Y) => {
            const G = !K.current;
            if (Y.target === Y.currentTarget && G && !P) {
              const te = new CustomEvent(Xa, y5);
              if (Y.currentTarget.dispatchEvent(te), !te.defaultPrevented) {
                const ne = z().filter((_e) => _e.focusable), V = ne.find((_e) => _e.active), ae = ne.find((_e) => _e.id === A), Oe = [V, ae, ...ne].filter(
                  Boolean
                ).map((_e) => _e.ref.current);
                uh(Oe, b);
              }
            }
            K.current = !1;
          }),
          onBlur: He(t.onBlur, () => M(!1))
        }
      )
    }
  );
}), ch = "RovingFocusGroupItem", lh = k.forwardRef(
  (t, n) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: s = !0,
      active: a = !1,
      tabStopId: c,
      ...u
    } = t, d = ih(), h = c || d, m = S5(ch, r), b = m.currentTabStopId === h, _ = sh(r), { onFocusableItemAdd: S, onFocusableItemRemove: C } = m;
    return k.useEffect(() => {
      if (s)
        return S(), () => C();
    }, [s, S, C]), /* @__PURE__ */ v.jsx(
      uc.ItemSlot,
      {
        scope: r,
        id: h,
        focusable: s,
        active: a,
        children: /* @__PURE__ */ v.jsx(
          ft.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": m.orientation,
            ...u,
            ref: n,
            onMouseDown: He(t.onMouseDown, (O) => {
              s ? m.onItemFocus(h) : O.preventDefault();
            }),
            onFocus: He(t.onFocus, () => m.onItemFocus(h)),
            onKeyDown: He(t.onKeyDown, (O) => {
              if (O.key === "Tab" && O.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (O.target !== O.currentTarget) return;
              const A = k5(O, m.orientation, m.dir);
              if (A !== void 0) {
                if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
                O.preventDefault();
                let P = _().filter((M) => M.focusable).map((M) => M.ref.current);
                if (A === "last") P.reverse();
                else if (A === "prev" || A === "next") {
                  A === "prev" && P.reverse();
                  const M = P.indexOf(O.currentTarget);
                  P = m.loop ? E5(P, M + 1) : P.slice(M + 1);
                }
                setTimeout(() => uh(P));
              }
            })
          }
        )
      }
    );
  }
);
lh.displayName = ch;
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
function C5(t, n) {
  return n !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function k5(t, n, r) {
  const s = C5(t.key, r);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s)))
    return T5[s];
}
function uh(t, n = !1) {
  const r = document.activeElement;
  for (const s of t)
    if (s === r || (s.focus({ preventScroll: n }), document.activeElement !== r)) return;
}
function E5(t, n) {
  return t.map((r, s) => t[(n + s) % t.length]);
}
var A5 = ah, R5 = lh, Fc = "Tabs", [O5, FS] = Ui(Fc, [
  oh
]), dh = oh(), [M5, zc] = O5(Fc), fh = k.forwardRef(
  (t, n) => {
    const {
      __scopeTabs: r,
      value: s,
      onValueChange: a,
      defaultValue: c,
      orientation: u = "horizontal",
      dir: d,
      activationMode: h = "automatic",
      ...m
    } = t, b = co(d), [_, S] = Mc({
      prop: s,
      onChange: a,
      defaultProp: c
    });
    return /* @__PURE__ */ v.jsx(
      M5,
      {
        scope: r,
        baseId: ih(),
        value: _,
        onValueChange: S,
        orientation: u,
        dir: b,
        activationMode: h,
        children: /* @__PURE__ */ v.jsx(
          ft.div,
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
fh.displayName = Fc;
var hh = "TabsList", ph = k.forwardRef(
  (t, n) => {
    const { __scopeTabs: r, loop: s = !0, ...a } = t, c = zc(hh, r), u = dh(r);
    return /* @__PURE__ */ v.jsx(
      A5,
      {
        asChild: !0,
        ...u,
        orientation: c.orientation,
        dir: c.dir,
        loop: s,
        children: /* @__PURE__ */ v.jsx(
          ft.div,
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
ph.displayName = hh;
var gh = "TabsTrigger", mh = k.forwardRef(
  (t, n) => {
    const { __scopeTabs: r, value: s, disabled: a = !1, ...c } = t, u = zc(gh, r), d = dh(r), h = yh(u.baseId, s), m = wh(u.baseId, s), b = s === u.value;
    return /* @__PURE__ */ v.jsx(
      R5,
      {
        asChild: !0,
        ...d,
        focusable: !a,
        active: b,
        children: /* @__PURE__ */ v.jsx(
          ft.button,
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
            onMouseDown: He(t.onMouseDown, (_) => {
              !a && _.button === 0 && _.ctrlKey === !1 ? u.onValueChange(s) : _.preventDefault();
            }),
            onKeyDown: He(t.onKeyDown, (_) => {
              [" ", "Enter"].includes(_.key) && u.onValueChange(s);
            }),
            onFocus: He(t.onFocus, () => {
              const _ = u.activationMode !== "manual";
              !b && !a && _ && u.onValueChange(s);
            })
          }
        )
      }
    );
  }
);
mh.displayName = gh;
var vh = "TabsContent", bh = k.forwardRef(
  (t, n) => {
    const { __scopeTabs: r, value: s, forceMount: a, children: c, ...u } = t, d = zc(vh, r), h = yh(d.baseId, s), m = wh(d.baseId, s), b = s === d.value, _ = k.useRef(b);
    return k.useEffect(() => {
      const S = requestAnimationFrame(() => _.current = !1);
      return () => cancelAnimationFrame(S);
    }, []), /* @__PURE__ */ v.jsx(Vr, { present: a || b, children: ({ present: S }) => /* @__PURE__ */ v.jsx(
      ft.div,
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
          ...t.style,
          animationDuration: _.current ? "0s" : void 0
        },
        children: S && c
      }
    ) });
  }
);
bh.displayName = vh;
function yh(t, n) {
  return `${t}-trigger-${n}`;
}
function wh(t, n) {
  return `${t}-content-${n}`;
}
var P5 = fh, _h = ph, xh = mh, Sh = bh;
const D5 = P5, Ih = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  _h,
  {
    ref: r,
    className: ut(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...n
  }
));
Ih.displayName = _h.displayName;
const dc = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  xh,
  {
    ref: r,
    className: ut(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...n
  }
));
dc.displayName = xh.displayName;
const fc = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Sh,
  {
    ref: r,
    className: ut(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...n
  }
));
fc.displayName = Sh.displayName;
const zS = "add", HS = "track", US = "trackItems", WS = "track:changed", BS = "trackItems:changed", $S = "state", VS = "state:changed", L5 = "add", Th = "add:text", Wi = "add:video", Bi = "add:audio", GS = "add:placeholder", $i = "add:image", XS = "add:mask", YS = "add:transition", ZS = "add:animation", KS = "edit", qS = "edit:object", JS = "edit:text", QS = "edit:shape", e6 = "enterEditMode", j5 = "player", Ch = "player:play", kh = "player:pause", N5 = "player:seek", t6 = "player:seekTo", F5 = "player:seekBy", z5 = "player:togglePlay", H5 = "active", n6 = "active:set", Eh = "active:delete", r6 = "active:paste", Ah = "active:clone", Rh = "active:split", U5 = "layer", i6 = "layer:locked", s6 = "layer:hidden", o6 = "layer:move", a6 = "layer:select", Oh = "layer:selection", c6 = "layer:sendTo", l6 = "layer:rename", u6 = "layer:editingName", d6 = "layer:copy", f6 = "layer:paste", h6 = "layer:clone", p6 = "layer:split", g6 = "layer:cut", m6 = "layer:delete", W5 = "history", Mh = "history:undo", Ph = "history:redo", v6 = "history:reset", B5 = "scale", Dh = "scale:changed", $5 = "drag", Lh = "drag:start", qs = "drag:end", V5 = "timeline", jh = "timeline:boundingChanged";
var hc = function(t, n) {
  return hc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a]);
  }, hc(t, n);
};
function Xr(t, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  hc(t, n);
  function r() {
    this.constructor = t;
  }
  t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
function pc(t) {
  var n = typeof Symbol == "function" && Symbol.iterator, r = n && t[n], s = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && s >= t.length && (t = void 0), { value: t && t[s++], done: !t };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function gc(t, n) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var s = r.call(t), a, c = [], u;
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
function mc(t, n, r) {
  if (r || arguments.length === 2) for (var s = 0, a = n.length, c; s < a; s++)
    (c || !(s in n)) && (c || (c = Array.prototype.slice.call(n, 0, s)), c[s] = n[s]);
  return t.concat(c || Array.prototype.slice.call(n));
}
function nn(t) {
  return typeof t == "function";
}
function Nh(t) {
  var n = function(s) {
    Error.call(s), s.stack = new Error().stack;
  }, r = t(n);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Ya = Nh(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(s, a) {
      return a + 1 + ") " + s.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function vc(t, n) {
  if (t) {
    var r = t.indexOf(n);
    0 <= r && t.splice(r, 1);
  }
}
var mo = function() {
  function t(n) {
    this.initialTeardown = n, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var n, r, s, a, c;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var d = pc(u), h = d.next(); !h.done; h = d.next()) {
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
      if (nn(b))
        try {
          b();
        } catch (A) {
          c = A instanceof Ya ? A.errors : [A];
        }
      var _ = this._finalizers;
      if (_) {
        this._finalizers = null;
        try {
          for (var S = pc(_), C = S.next(); !C.done; C = S.next()) {
            var O = C.value;
            try {
              zd(O);
            } catch (A) {
              c = c ?? [], A instanceof Ya ? c = mc(mc([], gc(c)), gc(A.errors)) : c.push(A);
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
        throw new Ya(c);
    }
  }, t.prototype.add = function(n) {
    var r;
    if (n && n !== this)
      if (this.closed)
        zd(n);
      else {
        if (n instanceof t) {
          if (n.closed || n._hasParent(this))
            return;
          n._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(n);
      }
  }, t.prototype._hasParent = function(n) {
    var r = this._parentage;
    return r === n || Array.isArray(r) && r.includes(n);
  }, t.prototype._addParent = function(n) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(n), r) : r ? [r, n] : n;
  }, t.prototype._removeParent = function(n) {
    var r = this._parentage;
    r === n ? this._parentage = null : Array.isArray(r) && vc(r, n);
  }, t.prototype.remove = function(n) {
    var r = this._finalizers;
    r && vc(r, n), n instanceof t && n._removeParent(this);
  }, t.EMPTY = function() {
    var n = new t();
    return n.closed = !0, n;
  }(), t;
}(), Fh = mo.EMPTY;
function zh(t) {
  return t instanceof mo || t && "closed" in t && nn(t.remove) && nn(t.add) && nn(t.unsubscribe);
}
function zd(t) {
  nn(t) ? t() : t.unsubscribe();
}
var G5 = {
  Promise: void 0
}, X5 = {
  setTimeout: function(t, n) {
    for (var r = [], s = 2; s < arguments.length; s++)
      r[s - 2] = arguments[s];
    return setTimeout.apply(void 0, mc([t, n], gc(r)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Y5(t) {
  X5.setTimeout(function() {
    throw t;
  });
}
function Hd() {
}
function Gs(t) {
  t();
}
var Hc = function(t) {
  Xr(n, t);
  function n(r) {
    var s = t.call(this) || this;
    return s.isStopped = !1, r ? (s.destination = r, zh(r) && r.add(s)) : s.destination = q5, s;
  }
  return n.create = function(r, s, a) {
    return new bc(r, s, a);
  }, n.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, n.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, n.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, n.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
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
}(mo), Z5 = function() {
  function t(n) {
    this.partialObserver = n;
  }
  return t.prototype.next = function(n) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(n);
      } catch (s) {
        $s(s);
      }
  }, t.prototype.error = function(n) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(n);
      } catch (s) {
        $s(s);
      }
    else
      $s(n);
  }, t.prototype.complete = function() {
    var n = this.partialObserver;
    if (n.complete)
      try {
        n.complete();
      } catch (r) {
        $s(r);
      }
  }, t;
}(), bc = function(t) {
  Xr(n, t);
  function n(r, s, a) {
    var c = t.call(this) || this, u;
    return nn(r) || !r ? u = {
      next: r ?? void 0,
      error: s ?? void 0,
      complete: a ?? void 0
    } : u = r, c.destination = new Z5(u), c;
  }
  return n;
}(Hc);
function $s(t) {
  Y5(t);
}
function K5(t) {
  throw t;
}
var q5 = {
  closed: !0,
  next: Hd,
  error: K5,
  complete: Hd
}, J5 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Q5(t) {
  return t;
}
function ew(t) {
  return t.length === 0 ? Q5 : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(s, a) {
      return a(s);
    }, r);
  };
}
var Ud = function() {
  function t(n) {
    n && (this._subscribe = n);
  }
  return t.prototype.lift = function(n) {
    var r = new t();
    return r.source = this, r.operator = n, r;
  }, t.prototype.subscribe = function(n, r, s) {
    var a = this, c = nw(n) ? n : new bc(n, r, s);
    return Gs(function() {
      var u = a, d = u.operator, h = u.source;
      c.add(d ? d.call(c, h) : h ? a._subscribe(c) : a._trySubscribe(c));
    }), c;
  }, t.prototype._trySubscribe = function(n) {
    try {
      return this._subscribe(n);
    } catch (r) {
      n.error(r);
    }
  }, t.prototype.forEach = function(n, r) {
    var s = this;
    return r = Wd(r), new r(function(a, c) {
      var u = new bc({
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
  }, t.prototype._subscribe = function(n) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n);
  }, t.prototype[J5] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var n = [], r = 0; r < arguments.length; r++)
      n[r] = arguments[r];
    return ew(n)(this);
  }, t.prototype.toPromise = function(n) {
    var r = this;
    return n = Wd(n), new n(function(s, a) {
      var c;
      r.subscribe(function(u) {
        return c = u;
      }, function(u) {
        return a(u);
      }, function() {
        return s(c);
      });
    });
  }, t.create = function(n) {
    return new t(n);
  }, t;
}();
function Wd(t) {
  var n;
  return (n = t ?? G5.Promise) !== null && n !== void 0 ? n : Promise;
}
function tw(t) {
  return t && nn(t.next) && nn(t.error) && nn(t.complete);
}
function nw(t) {
  return t && t instanceof Hc || tw(t) && zh(t);
}
function rw(t) {
  return nn(t?.lift);
}
function iw(t) {
  return function(n) {
    if (rw(n))
      return n.lift(function(r) {
        try {
          return t(r, this);
        } catch (s) {
          this.error(s);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function sw(t, n, r, s, a) {
  return new ow(t, n, r, s, a);
}
var ow = function(t) {
  Xr(n, t);
  function n(r, s, a, c, u, d) {
    var h = t.call(this, r) || this;
    return h.onFinalize = u, h.shouldUnsubscribe = d, h._next = s ? function(m) {
      try {
        s(m);
      } catch (b) {
        r.error(b);
      }
    } : t.prototype._next, h._error = c ? function(m) {
      try {
        c(m);
      } catch (b) {
        r.error(b);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, h._complete = a ? function() {
      try {
        a();
      } catch (m) {
        r.error(m);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, h;
  }
  return n.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var s = this.closed;
      t.prototype.unsubscribe.call(this), !s && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, n;
}(Hc), aw = Nh(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Uc = function(t) {
  Xr(n, t);
  function n() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return n.prototype.lift = function(r) {
    var s = new Bd(this, this);
    return s.operator = r, s;
  }, n.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new aw();
  }, n.prototype.next = function(r) {
    var s = this;
    Gs(function() {
      var a, c;
      if (s._throwIfClosed(), !s.isStopped) {
        s.currentObservers || (s.currentObservers = Array.from(s.observers));
        try {
          for (var u = pc(s.currentObservers), d = u.next(); !d.done; d = u.next()) {
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
    Gs(function() {
      if (s._throwIfClosed(), !s.isStopped) {
        s.hasError = s.isStopped = !0, s.thrownError = r;
        for (var a = s.observers; a.length; )
          a.shift().error(r);
      }
    });
  }, n.prototype.complete = function() {
    var r = this;
    Gs(function() {
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
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
  }, n.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, n.prototype._innerSubscribe = function(r) {
    var s = this, a = this, c = a.hasError, u = a.isStopped, d = a.observers;
    return c || u ? Fh : (this.currentObservers = null, d.push(r), new mo(function() {
      s.currentObservers = null, vc(d, r);
    }));
  }, n.prototype._checkFinalizedStatuses = function(r) {
    var s = this, a = s.hasError, c = s.thrownError, u = s.isStopped;
    a ? r.error(c) : u && r.complete();
  }, n.prototype.asObservable = function() {
    var r = new Ud();
    return r.source = this, r;
  }, n.create = function(r, s) {
    return new Bd(r, s);
  }, n;
}(Ud), Bd = function(t) {
  Xr(n, t);
  function n(r, s) {
    var a = t.call(this) || this;
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
    return (a = (s = this.source) === null || s === void 0 ? void 0 : s.subscribe(r)) !== null && a !== void 0 ? a : Fh;
  }, n;
}(Uc), $d = function(t) {
  Xr(n, t);
  function n(r) {
    var s = t.call(this) || this;
    return s._value = r, s;
  }
  return Object.defineProperty(n.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype._subscribe = function(r) {
    var s = t.prototype._subscribe.call(this, r);
    return !s.closed && r.next(this._value), s;
  }, n.prototype.getValue = function() {
    var r = this, s = r.hasError, a = r.thrownError, c = r._value;
    if (s)
      throw a;
    return this._throwIfClosed(), c;
  }, n.prototype.next = function(r) {
    t.prototype.next.call(this, this._value = r);
  }, n;
}(Uc);
function Sn(t, n) {
  return iw(function(r, s) {
    var a = 0;
    r.subscribe(sw(s, function(c) {
      return t.call(n, c, a++) && s.next(c);
    }));
  });
}
const Hh = new Uc(), cw = (t, n) => {
  Hh.next({ key: t, value: n });
}, me = {
  subject: Hh,
  dispatch: cw
}, tt = [];
for (let t = 0; t < 256; ++t)
  tt.push((t + 256).toString(16).slice(1));
function lw(t, n = 0) {
  return (tt[t[n + 0]] + tt[t[n + 1]] + tt[t[n + 2]] + tt[t[n + 3]] + "-" + tt[t[n + 4]] + tt[t[n + 5]] + "-" + tt[t[n + 6]] + tt[t[n + 7]] + "-" + tt[t[n + 8]] + tt[t[n + 9]] + "-" + tt[t[n + 10]] + tt[t[n + 11]] + tt[t[n + 12]] + tt[t[n + 13]] + tt[t[n + 14]] + tt[t[n + 15]]).toLowerCase();
}
let Za;
const uw = new Uint8Array(16);
function dw() {
  if (!Za) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Za = crypto.getRandomValues.bind(crypto);
  }
  return Za(uw);
}
const fw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Vd = { randomUUID: fw };
function Ke(t, n, r) {
  if (Vd.randomUUID && !t)
    return Vd.randomUUID();
  t = t || {};
  const s = t.random ?? t.rng?.() ?? dw();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, lw(s);
}
var Uh = /* @__PURE__ */ ((t) => (t.IMAGE = "image", t.VIDEO = "video", t.AUDIO = "audio", t))(Uh || {});
const hw = (t) => {
  const [n, r] = it(!1), [s, a] = it(!1), c = zr((b) => {
    const _ = { ...b, id: Ke() };
    switch (b.type) {
      case "image":
        me.dispatch($i, { payload: _ });
        break;
      case "video":
        me.dispatch(Wi, { payload: _ });
        break;
      case "audio":
        me.dispatch(Bi, { payload: _ });
        break;
    }
  }, []), u = zr(
    (b) => {
      b.preventDefault();
      try {
        const _ = b.dataTransfer?.types[0], S = JSON.parse(_);
        if (!Object.values(Uh).includes(S.type))
          return;
        a(!0), r(!0), t?.(!0);
      } catch (_) {
        console.error("Error parsing dragged data:", _);
      }
    },
    [t]
  ), d = zr(
    (b) => {
      b.preventDefault(), n && (a(!0), t?.(!0));
    },
    [n, t]
  ), h = zr(
    (b) => {
      if (s) {
        b.preventDefault(), a(!1), t?.(!1);
        try {
          const _ = b.dataTransfer?.types[0], S = JSON.parse(
            b.dataTransfer.getData(_)
          );
          c(S);
        } catch (_) {
          console.error("Error parsing dropped data:", _);
        }
      }
    },
    [s, t, c]
  ), m = zr(
    (b) => {
      b.preventDefault(), b.currentTarget.contains(b.relatedTarget) || (a(!1), r(!1), t?.(!1));
    },
    [t]
  );
  return { onDragEnter: u, onDragOver: d, onDrop: h, onDragLeave: m, isDraggingOver: s };
}, pw = ({
  children: t,
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
      children: t
    }
  );
}, b6 = ({
  size: t,
  children: n
}) => {
  const [r, s] = it(!1);
  return /* @__PURE__ */ v.jsxs(
    pw,
    {
      id: "artboard",
      onDragStateChange: s,
      style: {
        width: t.width,
        height: t.height
      },
      className: "designcombo_scene pointer-events-auto mt-3.5 bg-black",
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            style: {
              width: t.width,
              height: t.height
            },
            className: `pointer-events-none absolute z-50 mt-3.5 transition-colors duration-200 ease-in-out ${r ? "border-4 border-dashed border-white bg-white/[0.075]" : "bg-transparent"} shadow-[0_0_0_5000px_#1D1D1F]`
          }
        ),
        n
      ]
    }
  );
}, y6 = 100, w6 = 30, _6 = 18, x6 = 14, S6 = 30, I6 = 24, T6 = 16, gw = 12, C6 = "Regular", mw = "sans-serif", vo = 188, yc = 40, k6 = 4e3, vw = 1920, bw = 1080, yw = 60, ww = 1e3 / yw, E6 = 2e6, A6 = 1e7, R6 = 48e3, O6 = 192e3, Wh = 2.3, M6 = vw / Wh, P6 = bw / Wh, D6 = 184, L6 = 348, j6 = 512, N6 = 300, F6 = 0, z6 = 5e3, H6 = 1, U6 = 0, W6 = 0, B6 = 0, $6 = 359, V6 = 1, G6 = 0, X6 = !1, Y6 = !1, Z6 = 0, K6 = 2, q6 = 0.01, J6 = 1, Q6 = 0, e7 = 3, t7 = 0.01, n7 = 1, r7 = 0, i7 = 1, s7 = 0.01, o7 = 0.5, a7 = -1e3, c7 = 1e3, l7 = 1, u7 = 1, d7 = 0, f7 = 1, h7 = 0.01, p7 = 1, g7 = 0, m7 = 1, v7 = 0.01, b7 = 0, y7 = 0.5, w7 = 10, _7 = 0.01, x7 = 1, S7 = 0, I7 = 1, T7 = 0.01, C7 = 1, Wc = 16, Gd = 80;
function _w(t) {
  if (!t) return "0";
  const n = t / vo, r = Math.trunc(n) % 60, s = Math.trunc(n / 60) % 60, a = Math.trunc(n / 3600) % 60, u = [
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
function k7(t, n = !1) {
  if (!t) return "00:00";
  const s = 1e3 / 60;
  if (t < 1e3)
    return n ? `${Math.floor(t / s)}f` : `${(t / 1e3).toFixed(1)}s`;
  const a = Math.floor(t / 1e3);
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
function Js(t, n) {
  return t.map((r) => ({
    ...r,
    items: r.items.filter((s) => !n.includes(s))
  }));
}
const xw = ({ frame: t }, { fps: n }) => {
  const r = t / n, s = Math.floor(r / 3600), a = r % 3600, c = Math.floor(a / 60), u = Math.floor(a % 60), d = Math.floor(
    (a - Math.floor(a)) * 100
  );
  return s > 0 ? `${s}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}` : `${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
}, Sw = ({ time: t }) => {
  const n = t / 1e3, r = Math.floor(n / 3600), s = n % 3600, a = Math.floor(s / 60), c = Math.floor(s % 60), u = Math.floor(
    (s - Math.floor(s)) * 100
  );
  return r > 0 ? `${r}:${a.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}` : `${a.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
}, Iw = () => {
  const t = document.getElementById("video-current-time");
  return (t ? parseFloat(t.getAttribute("data-current-time") ?? "") : 0) * 1e3;
}, sn = [
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
function Bh(t, n) {
  let r = -1, s = t.length - 1;
  for (; 1 + r < s; ) {
    const a = r + (s - r >> 1);
    n(t[a], a, t) ? s = a : r = a;
  }
  return s;
}
function E7(t, n = 1) {
  const r = () => {
    const h = Math.max(0, yc), b = document.getElementById(
      "designcombo-timeline-canvas"
    )?.offsetWidth ?? document.body.offsetWidth;
    return Math.max(1, b - h);
  }, s = () => typeof t == "number" ? Ve(t, n) : Rw(t, n), a = r() / s(), c = n * a;
  return {
    segments: 5,
    index: Bh(sn, (d) => d.zoom > c),
    zoom: c,
    unit: 1 / c
  };
}
function A7(t) {
  return sn[t];
}
function Tw(t) {
  return Cw(t) || sn[0];
}
const Cw = (t) => {
  const n = sn.filter(
    (s) => s.zoom < t.zoom
  );
  return n.length === 0 ? null : n.reduce(
    (s, a) => a.zoom > s.zoom ? a : s
  );
}, kw = (t) => {
  const n = sn.filter(
    (s) => s.zoom > t.zoom
  );
  return n.length === 0 ? null : n.reduce(
    (s, a) => a.zoom < s.zoom ? a : s
  );
};
function Ew(t) {
  return kw(t) || sn[sn.length - 1];
}
function R7(t) {
  const n = sn.at(-1), r = t === n, a = Aw(t) - (r ? 1 : 2);
  return Math.max(0, a);
}
function Aw(t) {
  const n = Bh(sn, (r) => r.zoom > t.zoom);
  return Math.min(sn.length - 1, n);
}
function Ve(t, n = 1, r = 1) {
  const s = vo * n;
  return t * (60 / 1e3) * s / r;
}
function or(t, n = 1) {
  const r = vo * n;
  return t / r * ww;
}
function Rw(t, n = 1) {
  return Ve(t, n);
}
const O7 = Math.floor(Math.random() * 1e3) + 1;
function $h(t, n = 1) {
  const r = [], s = Math.floor(n), a = (c, u) => {
    for (const d of c)
      Array.isArray(d) && u < s ? a(d, u + 1) : r.push(d);
  };
  return a(t, 0), r;
}
function Vh(t, n) {
  const r = n.sort((a, c) => a.tempIndex - c.tempIndex), s = [];
  for (const a of r)
    a.tempIndex < 0 && s.push(a);
  s.push(t);
  for (const a of r)
    a.tempIndex >= 0 && s.push(a);
  return s;
}
const Xd = {
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
}, Ow = (t) => {
  const n = t.map(
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
}, In = wf((t) => ({
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
    t(() => ({
      timeline: n
    }));
  },
  setScale: (n) => {
    t(() => ({
      scale: n
    }));
  },
  setScroll: (n) => {
    t(() => ({
      scroll: n
    }));
  },
  setState: async (n) => {
    t({ ...n });
  },
  setPlayerRef: (n) => {
    t({ playerRef: n });
  }
}));
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mw = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gh = (...t) => t.filter((n, r, s) => !!n && n.trim() !== "" && s.indexOf(n) === r).join(" ").trim();
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
const Dw = yf(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: a = "",
    children: c,
    iconNode: u,
    ...d
  }, h) => nc(
    "svg",
    {
      ref: h,
      ...Pw,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: s ? Number(r) * 24 / Number(n) : r,
      className: Gh("lucide", a),
      ...d
    },
    [
      ...u.map(([m, b]) => nc(m, b)),
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
const ht = (t, n) => {
  const r = yf(
    ({ className: s, ...a }, c) => nc(Dw, {
      ref: c,
      iconNode: n,
      className: Gh(`lucide-${Mw(t)}`, s),
      ...a
    })
  );
  return r.displayName = `${t}`, r;
};
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lw = ht("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = ht("Image", [
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
const Xh = ht("Music", [
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
const Nw = ht("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = ht("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = ht("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hw = ht("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = ht("SquareSplitHorizontal", [
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
const Uw = ht("Trash", [
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
const Ww = ht("Type", [
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
const Zd = ht("Upload", [
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
const Bw = ht("Video", [
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
const $w = ht("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = ht("ZoomIn", [
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
const Gw = ht("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), Bc = (t) => {
  const n = zr(
    (s) => {
      if (!t?.current)
        return () => {
        };
      const a = () => {
        s();
      };
      return t.current.addEventListener("frameupdate", a), () => {
        t.current && t.current.removeEventListener("frameupdate", a);
      };
    },
    [t]
  );
  return N2(
    n,
    () => t?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
}, bo = () => {
  const [t, n] = it(!1);
  return Ht(() => {
    const s = me.subject.pipe(
      Sn(({ key: a }) => a.startsWith($5))
    ).subscribe((a) => {
      a.key === Lh ? n(!0) : a.key === qs && n(!1);
    });
    return () => s.unsubscribe();
  }, []), t;
}, Xw = () => {
  const [t, n] = it(!1), { duration: r, fps: s, scale: a, playerRef: c, activeIds: u } = In(), d = Bc(c), h = () => {
    me.dispatch(Eh);
  }, m = () => {
    me.dispatch(Rh, {
      payload: {},
      options: {
        time: Iw()
      }
    });
  }, b = (C) => {
    me.dispatch(Dh, {
      payload: {
        scale: C
      }
    });
  }, _ = () => {
    me.dispatch(Ch);
  }, S = () => {
    me.dispatch(kh);
  };
  return Ht(() => (c?.current?.addEventListener("play", () => {
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
                    Ne,
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
                    Ne,
                    {
                      disabled: !u.length,
                      onClick: m,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(Yd, { size: 15 }),
                        " Split"
                      ]
                    }
                  ),
                  /* @__PURE__ */ v.jsxs(
                    Ne,
                    {
                      disabled: !u.length,
                      onClick: () => {
                        me.dispatch(Ah);
                      },
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(Yd, { size: 15 }),
                        " Clone"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-center", children: [
                  /* @__PURE__ */ v.jsxs("div", { children: [
                    /* @__PURE__ */ v.jsx(
                      Ne,
                      {
                        onClick: h,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ v.jsx(zw, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Ne,
                      {
                        onClick: () => {
                          if (t)
                            return S();
                          _();
                        },
                        variant: "ghost",
                        size: "icon",
                        children: t ? /* @__PURE__ */ v.jsx(Nw, { size: 14 }) : /* @__PURE__ */ v.jsx(Fw, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Ne,
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
                            children: xw({ frame: d }, { fps: s })
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
  scale: t,
  onChangeTimelineScale: n,
  duration: r
}) => {
  const s = () => {
    const c = Tw(t);
    n(c);
  }, a = () => {
    const c = Ew(t);
    n(c);
  };
  return /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ v.jsxs("div", { className: "flex border-l border-border pl-4 pr-2", children: [
    /* @__PURE__ */ v.jsx(
      Ne,
      {
        size: "icon",
        variant: "ghost",
        onClick: s,
        disabled: t.index === 0,
        children: /* @__PURE__ */ v.jsx(Gw, { size: 16 })
      }
    ),
    /* @__PURE__ */ v.jsx(
      Ne,
      {
        size: "icon",
        variant: "ghost",
        onClick: a,
        disabled: t.index === 20,
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
], M7 = [
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
  const t = bo();
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col overflow-auto", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Transitions" }),
    /* @__PURE__ */ v.jsx(Gr, { children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-3 gap-2 px-4", children: Jw.map((n, r) => /* @__PURE__ */ v.jsx(
      e3,
      {
        transition: n,
        shouldDisplayPreview: !t
      },
      r
    )) }) })
  ] });
}, e3 = ({
  transition: t,
  shouldDisplayPreview: n
}) => {
  const r = Et.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ v.jsx(
    po,
    {
      data: t,
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
        /* @__PURE__ */ v.jsx("div", { className: "flex h-6 items-center overflow-ellipsis text-nowrap text-[12px] capitalize text-muted-foreground", children: t.name || t.type })
      ] })
    }
  );
}, t3 = () => {
  const t = () => {
    me.dispatch(Th, {
      payload: {
        id: Ke(),
        display: {
          from: 0,
          to: 5e3
        },
        details: {
          text: "Heading and some body",
          fontSize: 120,
          width: 600,
          fontUrl: Xd.url,
          fontFamily: Xd.postScriptName,
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
      Ne,
      {
        draggable: !1,
        onClick: t,
        variant: "secondary",
        className: "w-full",
        children: "Add text"
      }
    ) })
  ] });
}, n3 = () => {
  const t = Yt(null), n = (s) => {
    r(s);
  }, r = async (s) => {
    const a = s[0].type;
    a.includes("audio") && me.dispatch(Bi, {
      payload: {
        id: Ke(),
        details: {
          src: URL.createObjectURL(s[0]),
          volume: 50
        }
      }
    }), a.includes("video") && me.dispatch(Wi, {
      payload: {
        id: Ke(),
        display: {
          from: 2e3,
          to: 7e3
        },
        details: {
          src: URL.createObjectURL(s[0]),
          name: s[0].name
        }
      }
    }), a.includes("image") && me.dispatch($i, {
      payload: {
        id: Ke(),
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
        ref: t,
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
          /* @__PURE__ */ v.jsxs(Ih, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ v.jsx(dc, { value: "projects", children: "Project" }),
            /* @__PURE__ */ v.jsx(dc, { value: "workspace", children: "Workspace" })
          ] }),
          /* @__PURE__ */ v.jsxs(fc, { value: "projects", children: [
            /* @__PURE__ */ v.jsxs(
              Ne,
              {
                onClick: () => {
                  t.current?.click();
                },
                className: "flex w-full gap-2",
                variant: "secondary",
                children: [
                  /* @__PURE__ */ v.jsx(Zd, { size: 16 }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ v.jsx("div", {})
          ] }),
          /* @__PURE__ */ v.jsx(fc, { value: "workspace", children: /* @__PURE__ */ v.jsxs(
            Ne,
            {
              onClick: () => {
                t.current?.click();
              },
              className: "flex w-full gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ v.jsx(Zd, { size: 16 }),
                " Upload"
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ v.jsx(Gr, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4" }) })
  ] });
}, r3 = () => {
  const t = bo(), n = (r) => {
    me.dispatch(Bi, {
      payload: r,
      options: {}
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audios" }),
    /* @__PURE__ */ v.jsx(Gr, { children: /* @__PURE__ */ v.jsx("div", { className: "flex flex-col px-2", children: Zw.map((r, s) => /* @__PURE__ */ v.jsx(
      i3,
      {
        shouldDisplayPreview: !t,
        handleAddAudio: n,
        audio: r
      },
      s
    )) }) })
  ] });
}, i3 = ({
  handleAddAudio: t,
  audio: n,
  shouldDisplayPreview: r
}) => {
  const s = Et.useMemo(
    () => ({
      backgroundImage: "url(https://cdn.designcombo.dev/thumbnails/music-preview.png)",
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    []
  );
  return /* @__PURE__ */ v.jsx(
    po,
    {
      data: n,
      renderCustomPreview: /* @__PURE__ */ v.jsx("div", { style: s }),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          draggable: !1,
          onClick: () => t(n),
          style: {
            display: "grid",
            gridTemplateColumns: "48px 1fr"
          },
          className: "flex cursor-pointer gap-4 px-2 py-1 text-sm hover:bg-zinc-800/70",
          children: [
            /* @__PURE__ */ v.jsx("div", { className: "flex h-12 items-center justify-center bg-zinc-800", children: /* @__PURE__ */ v.jsx(Xh, { width: 16 }) }),
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
  const t = bo(), n = (r) => {
    me.dispatch($i, {
      payload: r,
      options: {
        trackId: "main"
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Photos" }),
    /* @__PURE__ */ v.jsx(Gr, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4", children: Kw.map((r, s) => /* @__PURE__ */ v.jsx(
      o3,
      {
        image: r,
        shouldDisplayPreview: !t,
        handleAddImage: n
      },
      s
    )) }) })
  ] });
}, o3 = ({
  handleAddImage: t,
  image: n,
  shouldDisplayPreview: r
}) => {
  const s = Et.useMemo(
    () => ({
      backgroundImage: `url(${n.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [n.preview]
  );
  return /* @__PURE__ */ v.jsx(
    po,
    {
      data: n,
      renderCustomPreview: /* @__PURE__ */ v.jsx("div", { style: s }),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          onClick: () => t({
            id: Ke(),
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
  const t = bo(), n = (r) => {
    me.dispatch(Wi, {
      payload: r,
      options: {
        resourceId: "main"
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Videos" }),
    /* @__PURE__ */ v.jsx(Gr, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4", children: qw.map((r, s) => /* @__PURE__ */ v.jsx(
      c3,
      {
        video: r,
        shouldDisplayPreview: !t,
        handleAddVideo: n
      },
      s
    )) }) })
  ] });
}, c3 = ({
  handleAddVideo: t,
  video: n,
  shouldDisplayPreview: r
}) => {
  const s = Et.useMemo(
    () => ({
      backgroundImage: `url(${n.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [n.preview]
  );
  return /* @__PURE__ */ v.jsx(
    po,
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
          onClick: () => t({
            ...n,
            id: Ke(),
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
}, $c = wf((t) => ({
  activeMenuItem: null,
  showMenuItem: !1,
  cropTarget: null,
  showControlItem: !1,
  showToolboxItem: !1,
  activeToolboxItem: null,
  setCropTarget: (n) => t({ cropTarget: n }),
  setActiveMenuItem: (n) => t({ activeMenuItem: n }),
  setShowMenuItem: (n) => t({ showMenuItem: n }),
  setShowControlItem: (n) => t({ showControlItem: n }),
  setShowToolboxItem: (n) => t({ showToolboxItem: n }),
  setActiveToolboxItem: (n) => t({ activeToolboxItem: n })
})), l3 = ({ children: t }) => {
  const { showMenuItem: n, setShowMenuItem: r } = $c(), s = () => {
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
            Ne,
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
          t
        ] })
      ]
    }
  );
}, u3 = () => {
  const { activeMenuItem: t } = $c();
  return t === "transitions" ? /* @__PURE__ */ v.jsx(Qw, {}) : t === "texts" ? /* @__PURE__ */ v.jsx(t3, {}) : t === "videos" ? /* @__PURE__ */ v.jsx(a3, {}) : t === "audios" ? /* @__PURE__ */ v.jsx(r3, {}) : t === "images" ? /* @__PURE__ */ v.jsx(s3, {}) : t === "uploads" ? /* @__PURE__ */ v.jsx(n3, {}) : null;
}, d3 = () => /* @__PURE__ */ v.jsx(l3, { children: /* @__PURE__ */ v.jsx(u3, {}) }), xn = {
  audio: Xh,
  captions: Lw,
  image: jw,
  redo: ({ ...t }) => /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
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
  shapes: ({ ...t }) => /* @__PURE__ */ v.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
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
  undo: ({ ...t }) => /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
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
  upload: ({ ...t }) => /* @__PURE__ */ v.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
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
  const { setActiveMenuItem: t, setShowMenuItem: n, activeMenuItem: r, showMenuItem: s } = $c();
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: { zIndex: 201 },
      className: "absolute left-2.5 top-1/2 mt-6 flex w-14 -translate-y-1/2 flex-col items-center rounded-lg bg-background/80 py-2 shadow-lg backdrop-blur-lg backdrop-filter",
      children: [
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("uploads"), n(!0);
            },
            className: ut(
              s && r === "uploads" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.upload, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("texts"), n(!0);
            },
            className: ut(
              s && r === "texts" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.type, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("videos"), n(!0);
            },
            className: ut(
              s && r === "videos" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.video, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("captions"), n(!0);
            },
            className: ut(
              s && r === "captions" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.captions, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("images"), n(!0);
            },
            className: ut(
              s && r === "images" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.image, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("shapes"), n(!0);
            },
            className: ut(
              s && r === "shapes" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.shapes, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("audios"), n(!0);
            },
            className: ut(
              s && r === "audios" ? "bg-secondary" : "text-muted-foreground"
            ),
            variant: "ghost",
            size: "icon",
            children: /* @__PURE__ */ v.jsx(xn.audio, { width: 20 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ne,
          {
            onClick: () => {
              t("transitions"), n(!0);
            },
            className: ut(
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
  const t = () => {
    me.dispatch(Mh);
  }, n = () => {
    me.dispatch(Ph);
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
            Ne,
            {
              onClick: t,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ v.jsx(xn.undo, { width: 20 })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Ne,
            {
              onClick: n,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ v.jsx(xn.redo, { width: 20 })
            }
          )
        ] })
      ] })
    }
  );
}
const Vs = (t, n) => {
  const r = t.from / 1e3 * n, s = t.to / 1e3 * n - r;
  return { from: r, durationInFrames: s };
}, p3 = {
  text: (t, n) => {
    const { fps: r, height: s, width: a } = n, { from: c, durationInFrames: u } = Vs(t.display, r);
    return /* @__PURE__ */ v.jsx(
      Ws,
      {
        from: c,
        durationInFrames: u,
        "data-track-item": "transition-element",
        style: {
          position: "absolute",
          width: t.details.width ?? 300,
          height: t.details.height ?? 400,
          transform: t.details.transform ?? "none",
          fontSize: t.details.fontSize || "16px",
          // Updated default font size
          textAlign: t.details.textAlign || "left",
          // Updated default text alignment
          top: t.details.top ?? 300,
          left: t.details.left ?? 600,
          color: t.details.color || "#000000",
          // Updated text color (fill)
          backgroundColor: t.details.backgroundColor || "transparent",
          // Updated background color
          border: t.details.border ?? "none",
          // Updated border
          opacity: t.details.opacity ?? 100 / 100,
          fontFamily: t.details.fontFamily || "Arial",
          // Updated default font family
          textDecoration: t.details.textDecoration || "none",
          fontWeight: t.details.fontWeight || "normal",
          lineHeight: t.details.lineHeight || "normal",
          // Added line height
          letterSpacing: t.details.letterSpacing || "normal",
          // Added letter spacing
          wordSpacing: t.details.wordSpacing || "normal",
          // Added word spacing
          wordWrap: t.details.wordWrap || "normal",
          //'break-word'
          wordBreak: t.details.wordBreak || "normal",
          //'break-all',
          pointerEvents: "auto"
        },
        children: /* @__PURE__ */ v.jsx("div", { children: t.details.text })
      },
      t.id
    );
  },
  image: (t, n) => {
    const { fps: r } = n, { from: s, durationInFrames: a } = Vs(t.display, r);
    return /* @__PURE__ */ v.jsx(
      Ws,
      {
        from: s,
        durationInFrames: a,
        style: {
          width: t.details.width ?? "100%",
          // Default width
          height: t.details.height ?? "auto",
          // Default height
          transform: t.details.transform ?? "none",
          opacity: (t.details.opacity ?? 100) / 100 || 1,
          border: t.details.border ?? "none",
          // Default border
          borderRadius: t.details.borderRadius ?? "0",
          // Default border radius
          boxShadow: t.details.boxShadow ?? "none",
          // Default box shadow
          filter: t.details.filter || "none",
          top: t.details.top ?? 0,
          left: t.details.left ?? 0
        },
        children: /* @__PURE__ */ v.jsx(Va, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ v.jsx(
          W2,
          {
            style: { pointerEvents: "none" },
            "data-id": t.id,
            src: t.details.src
          }
        ) })
      },
      t.id
    );
  },
  video: (t, n) => {
    const { fps: r } = n, { from: s, durationInFrames: a } = Vs(t.display, r), c = t.trim, u = t.details.crop || {
      x: 0,
      y: 0,
      width: t.details.width,
      height: t.details.height
    };
    return c ? /* @__PURE__ */ v.jsx(
      Ws,
      {
        premountFor: 30 * 5,
        from: s,
        durationInFrames: a,
        style: {
          width: u.width || "100%",
          // Default width
          height: u.height || "auto",
          // Default height
          transform: t.details.transform ?? "none",
          opacity: (t.details.opacity ?? 100) / 100 || 1,
          border: t.details.border ?? "none",
          // Default border
          borderRadius: t.details.borderRadius ?? "0",
          // Default border radius
          boxShadow: t.details.boxShadow ?? "none",
          // Default box shadow
          top: t.details.top ?? 0,
          left: t.details.left ?? 0,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ v.jsx(
          Va,
          {
            style: {
              pointerEvents: "none",
              width: t.details.width,
              height: t.details.height,
              top: -u.y,
              left: -u.x
            },
            children: /* @__PURE__ */ v.jsx(
              U2,
              {
                startFrom: c.from / 1e3 * r,
                endAt: c.to / 1e3 * r,
                src: t.details.src,
                volume: (t.details.volume ?? 100) / 100,
                style: {
                  pointerEvents: "none",
                  width: t.details.width,
                  height: t.details.height
                }
              }
            )
          }
        )
      },
      t.id
    ) : /* @__PURE__ */ v.jsx(v.Fragment, {});
  },
  audio: (t, n) => {
    const { fps: r } = n, { from: s, durationInFrames: a } = Vs(t.display, r), c = t.trim;
    return c ? /* @__PURE__ */ v.jsx(
      Ws,
      {
        className: `moonshine-scene-item id-${t.id} moonshine-scene-item-type-${t.type}`,
        from: s,
        durationInFrames: a,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ v.jsx(Va, { children: /* @__PURE__ */ v.jsx(
          H2,
          {
            startFrom: c.from / 1e3 * r,
            endAt: c.to / 1e3 * r,
            src: t.details.src,
            volume: (t.details.volume ?? 100) / 100
          }
        ) })
      },
      t.id
    ) : /* @__PURE__ */ v.jsx(v.Fragment, {});
  }
};
var Qs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Qs.exports;
(function(t, n) {
  (function() {
    var r, s = "4.17.21", a = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", d = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", m = 500, b = "__lodash_placeholder__", _ = 1, S = 2, C = 4, O = 1, A = 2, E = 1, P = 2, M = 4, N = 8, z = 16, K = 32, Z = 64, q = 128, Y = 256, G = 512, te = 30, ne = "...", V = 800, ae = 16, ye = 1, Oe = 2, _e = 3, Ee = 1 / 0, ke = 9007199254740991, $e = 17976931348623157e292, pt = NaN, ie = 4294967295, Gn = ie - 1, pr = ie >>> 1, Kr = [
      ["ary", q],
      ["bind", E],
      ["bindKey", P],
      ["curry", N],
      ["curryRight", z],
      ["flip", G],
      ["partial", K],
      ["partialRight", Z],
      ["rearg", Y]
    ], Tn = "[object Arguments]", Cn = "[object Array]", qr = "[object AsyncFunction]", Kt = "[object Boolean]", ln = "[object Date]", gr = "[object DOMException]", mr = "[object Error]", Xn = "[object Function]", Zi = "[object GeneratorFunction]", wt = "[object Map]", qt = "[object Number]", Yn = "[object Null]", Ot = "[object Object]", Jr = "[object Promise]", vr = "[object Proxy]", Zn = "[object RegExp]", _t = "[object Set]", un = "[object String]", br = "[object Symbol]", To = "[object Undefined]", kn = "[object WeakMap]", Ki = "[object WeakSet]", En = "[object ArrayBuffer]", An = "[object DataView]", yr = "[object Float32Array]", wr = "[object Float64Array]", Qr = "[object Int8Array]", ei = "[object Int16Array]", ti = "[object Int32Array]", ni = "[object Uint8Array]", ri = "[object Uint8ClampedArray]", ii = "[object Uint16Array]", si = "[object Uint32Array]", oi = /\b__p \+= '';/g, qi = /\b(__p \+=) '' \+/g, Rn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, _r = /&(?:amp|lt|gt|quot|#39);/g, xr = /[&<>"']/g, Ji = RegExp(_r.source), Co = RegExp(xr.source), Qi = /<%-([\s\S]+?)%>/g, ko = /<%([\s\S]+?)%>/g, ai = /<%=([\s\S]+?)%>/g, es = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eo = /^\w*$/, Ao = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sr = /[\\^$.*+?()[\]{}|]/g, ts = RegExp(Sr.source), ci = /^\s+/, Ro = /\s/, Oo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Mo = /\{\n\/\* \[wrapped with (.+)\] \*/, w = /,? & /, H = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, B = /[()=,{}\[\]\/\s]/, re = /\\(\\)?/g, we = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ie = /\w*$/, pe = /^[-+]0x[0-9a-f]+$/i, fe = /^0b[01]+$/i, Je = /^\[object .+?Constructor\]$/, Le = /^0o[0-7]+$/i, Fe = /^(?:0|[1-9]\d*)$/, gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Wt = /($^)/, dn = /['\n\r\u2028\u2029\\]/g, Ge = "\\ud800-\\udfff", li = "\\u0300-\\u036f", Po = "\\ufe20-\\ufe2f", Do = "\\u20d0-\\u20ff", il = li + Po + Do, sl = "\\u2700-\\u27bf", ol = "a-z\\xdf-\\xf6\\xf8-\\xff", Mp = "\\xac\\xb1\\xd7\\xf7", Pp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Dp = "\\u2000-\\u206f", Lp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", al = "A-Z\\xc0-\\xd6\\xd8-\\xde", cl = "\\ufe0e\\ufe0f", ll = Mp + Pp + Dp + Lp, Lo = "['’]", jp = "[" + Ge + "]", ul = "[" + ll + "]", ns = "[" + il + "]", dl = "\\d+", Np = "[" + sl + "]", fl = "[" + ol + "]", hl = "[^" + Ge + ll + dl + sl + ol + al + "]", jo = "\\ud83c[\\udffb-\\udfff]", Fp = "(?:" + ns + "|" + jo + ")", pl = "[^" + Ge + "]", No = "(?:\\ud83c[\\udde6-\\uddff]){2}", Fo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ir = "[" + al + "]", gl = "\\u200d", ml = "(?:" + fl + "|" + hl + ")", zp = "(?:" + Ir + "|" + hl + ")", vl = "(?:" + Lo + "(?:d|ll|m|re|s|t|ve))?", bl = "(?:" + Lo + "(?:D|LL|M|RE|S|T|VE))?", yl = Fp + "?", wl = "[" + cl + "]?", Hp = "(?:" + gl + "(?:" + [pl, No, Fo].join("|") + ")" + wl + yl + ")*", Up = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _l = wl + yl + Hp, Bp = "(?:" + [Np, No, Fo].join("|") + ")" + _l, $p = "(?:" + [pl + ns + "?", ns, No, Fo, jp].join("|") + ")", Vp = RegExp(Lo, "g"), Gp = RegExp(ns, "g"), zo = RegExp(jo + "(?=" + jo + ")|" + $p + _l, "g"), Xp = RegExp([
      Ir + "?" + fl + "+" + vl + "(?=" + [ul, Ir, "$"].join("|") + ")",
      zp + "+" + bl + "(?=" + [ul, Ir + ml, "$"].join("|") + ")",
      Ir + "?" + ml + "+" + vl,
      Ir + "+" + bl,
      Wp,
      Up,
      dl,
      Bp
    ].join("|"), "g"), Yp = RegExp("[" + gl + Ge + il + cl + "]"), Zp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Kp = [
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
    ], qp = -1, Me = {};
    Me[yr] = Me[wr] = Me[Qr] = Me[ei] = Me[ti] = Me[ni] = Me[ri] = Me[ii] = Me[si] = !0, Me[Tn] = Me[Cn] = Me[En] = Me[Kt] = Me[An] = Me[ln] = Me[mr] = Me[Xn] = Me[wt] = Me[qt] = Me[Ot] = Me[Zn] = Me[_t] = Me[un] = Me[kn] = !1;
    var Re = {};
    Re[Tn] = Re[Cn] = Re[En] = Re[An] = Re[Kt] = Re[ln] = Re[yr] = Re[wr] = Re[Qr] = Re[ei] = Re[ti] = Re[wt] = Re[qt] = Re[Ot] = Re[Zn] = Re[_t] = Re[un] = Re[br] = Re[ni] = Re[ri] = Re[ii] = Re[si] = !0, Re[mr] = Re[Xn] = Re[kn] = !1;
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
    }, e1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, t1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, n1 = parseFloat, r1 = parseInt, xl = typeof Ti == "object" && Ti && Ti.Object === Object && Ti, i1 = typeof self == "object" && self && self.Object === Object && self, Qe = xl || i1 || Function("return this")(), Ho = n && !n.nodeType && n, Kn = Ho && !0 && t && !t.nodeType && t, Sl = Kn && Kn.exports === Ho, Uo = Sl && xl.process, Mt = function() {
      try {
        var I = Kn && Kn.require && Kn.require("util").types;
        return I || Uo && Uo.binding && Uo.binding("util");
      } catch {
      }
    }(), Il = Mt && Mt.isArrayBuffer, Tl = Mt && Mt.isDate, Cl = Mt && Mt.isMap, kl = Mt && Mt.isRegExp, El = Mt && Mt.isSet, Al = Mt && Mt.isTypedArray;
    function xt(I, D, R) {
      switch (R.length) {
        case 0:
          return I.call(D);
        case 1:
          return I.call(D, R[0]);
        case 2:
          return I.call(D, R[0], R[1]);
        case 3:
          return I.call(D, R[0], R[1], R[2]);
      }
      return I.apply(D, R);
    }
    function s1(I, D, R, $) {
      for (var se = -1, xe = I == null ? 0 : I.length; ++se < xe; ) {
        var Xe = I[se];
        D($, Xe, R(Xe), I);
      }
      return $;
    }
    function Pt(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length; ++R < $ && D(I[R], R, I) !== !1; )
        ;
      return I;
    }
    function o1(I, D) {
      for (var R = I == null ? 0 : I.length; R-- && D(I[R], R, I) !== !1; )
        ;
      return I;
    }
    function Rl(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length; ++R < $; )
        if (!D(I[R], R, I))
          return !1;
      return !0;
    }
    function On(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length, se = 0, xe = []; ++R < $; ) {
        var Xe = I[R];
        D(Xe, R, I) && (xe[se++] = Xe);
      }
      return xe;
    }
    function rs(I, D) {
      var R = I == null ? 0 : I.length;
      return !!R && Tr(I, D, 0) > -1;
    }
    function Wo(I, D, R) {
      for (var $ = -1, se = I == null ? 0 : I.length; ++$ < se; )
        if (R(D, I[$]))
          return !0;
      return !1;
    }
    function De(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length, se = Array($); ++R < $; )
        se[R] = D(I[R], R, I);
      return se;
    }
    function Mn(I, D) {
      for (var R = -1, $ = D.length, se = I.length; ++R < $; )
        I[se + R] = D[R];
      return I;
    }
    function Bo(I, D, R, $) {
      var se = -1, xe = I == null ? 0 : I.length;
      for ($ && xe && (R = I[++se]); ++se < xe; )
        R = D(R, I[se], se, I);
      return R;
    }
    function a1(I, D, R, $) {
      var se = I == null ? 0 : I.length;
      for ($ && se && (R = I[--se]); se--; )
        R = D(R, I[se], se, I);
      return R;
    }
    function $o(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length; ++R < $; )
        if (D(I[R], R, I))
          return !0;
      return !1;
    }
    var c1 = Vo("length");
    function l1(I) {
      return I.split("");
    }
    function u1(I) {
      return I.match(H) || [];
    }
    function Ol(I, D, R) {
      var $;
      return R(I, function(se, xe, Xe) {
        if (D(se, xe, Xe))
          return $ = xe, !1;
      }), $;
    }
    function is(I, D, R, $) {
      for (var se = I.length, xe = R + ($ ? 1 : -1); $ ? xe-- : ++xe < se; )
        if (D(I[xe], xe, I))
          return xe;
      return -1;
    }
    function Tr(I, D, R) {
      return D === D ? x1(I, D, R) : is(I, Ml, R);
    }
    function d1(I, D, R, $) {
      for (var se = R - 1, xe = I.length; ++se < xe; )
        if ($(I[se], D))
          return se;
      return -1;
    }
    function Ml(I) {
      return I !== I;
    }
    function Pl(I, D) {
      var R = I == null ? 0 : I.length;
      return R ? Xo(I, D) / R : pt;
    }
    function Vo(I) {
      return function(D) {
        return D == null ? r : D[I];
      };
    }
    function Go(I) {
      return function(D) {
        return I == null ? r : I[D];
      };
    }
    function Dl(I, D, R, $, se) {
      return se(I, function(xe, Xe, Ae) {
        R = $ ? ($ = !1, xe) : D(R, xe, Xe, Ae);
      }), R;
    }
    function f1(I, D) {
      var R = I.length;
      for (I.sort(D); R--; )
        I[R] = I[R].value;
      return I;
    }
    function Xo(I, D) {
      for (var R, $ = -1, se = I.length; ++$ < se; ) {
        var xe = D(I[$]);
        xe !== r && (R = R === r ? xe : R + xe);
      }
      return R;
    }
    function Yo(I, D) {
      for (var R = -1, $ = Array(I); ++R < I; )
        $[R] = D(R);
      return $;
    }
    function h1(I, D) {
      return De(D, function(R) {
        return [R, I[R]];
      });
    }
    function Ll(I) {
      return I && I.slice(0, zl(I) + 1).replace(ci, "");
    }
    function St(I) {
      return function(D) {
        return I(D);
      };
    }
    function Zo(I, D) {
      return De(D, function(R) {
        return I[R];
      });
    }
    function ui(I, D) {
      return I.has(D);
    }
    function jl(I, D) {
      for (var R = -1, $ = I.length; ++R < $ && Tr(D, I[R], 0) > -1; )
        ;
      return R;
    }
    function Nl(I, D) {
      for (var R = I.length; R-- && Tr(D, I[R], 0) > -1; )
        ;
      return R;
    }
    function p1(I, D) {
      for (var R = I.length, $ = 0; R--; )
        I[R] === D && ++$;
      return $;
    }
    var g1 = Go(Jp), m1 = Go(Qp);
    function v1(I) {
      return "\\" + t1[I];
    }
    function b1(I, D) {
      return I == null ? r : I[D];
    }
    function Cr(I) {
      return Yp.test(I);
    }
    function y1(I) {
      return Zp.test(I);
    }
    function w1(I) {
      for (var D, R = []; !(D = I.next()).done; )
        R.push(D.value);
      return R;
    }
    function Ko(I) {
      var D = -1, R = Array(I.size);
      return I.forEach(function($, se) {
        R[++D] = [se, $];
      }), R;
    }
    function Fl(I, D) {
      return function(R) {
        return I(D(R));
      };
    }
    function Pn(I, D) {
      for (var R = -1, $ = I.length, se = 0, xe = []; ++R < $; ) {
        var Xe = I[R];
        (Xe === D || Xe === b) && (I[R] = b, xe[se++] = R);
      }
      return xe;
    }
    function ss(I) {
      var D = -1, R = Array(I.size);
      return I.forEach(function($) {
        R[++D] = $;
      }), R;
    }
    function _1(I) {
      var D = -1, R = Array(I.size);
      return I.forEach(function($) {
        R[++D] = [$, $];
      }), R;
    }
    function x1(I, D, R) {
      for (var $ = R - 1, se = I.length; ++$ < se; )
        if (I[$] === D)
          return $;
      return -1;
    }
    function S1(I, D, R) {
      for (var $ = R + 1; $--; )
        if (I[$] === D)
          return $;
      return $;
    }
    function kr(I) {
      return Cr(I) ? T1(I) : c1(I);
    }
    function Bt(I) {
      return Cr(I) ? C1(I) : l1(I);
    }
    function zl(I) {
      for (var D = I.length; D-- && Ro.test(I.charAt(D)); )
        ;
      return D;
    }
    var I1 = Go(e1);
    function T1(I) {
      for (var D = zo.lastIndex = 0; zo.test(I); )
        ++D;
      return D;
    }
    function C1(I) {
      return I.match(zo) || [];
    }
    function k1(I) {
      return I.match(Xp) || [];
    }
    var E1 = function I(D) {
      D = D == null ? Qe : Er.defaults(Qe.Object(), D, Er.pick(Qe, Kp));
      var R = D.Array, $ = D.Date, se = D.Error, xe = D.Function, Xe = D.Math, Ae = D.Object, qo = D.RegExp, A1 = D.String, Dt = D.TypeError, os = R.prototype, R1 = xe.prototype, Ar = Ae.prototype, as = D["__core-js_shared__"], cs = R1.toString, Ce = Ar.hasOwnProperty, O1 = 0, Hl = function() {
        var e = /[^.]+$/.exec(as && as.keys && as.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ls = Ar.toString, M1 = cs.call(Ae), P1 = Qe._, D1 = qo(
        "^" + cs.call(Ce).replace(Sr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), us = Sl ? D.Buffer : r, Dn = D.Symbol, ds = D.Uint8Array, Ul = us ? us.allocUnsafe : r, fs = Fl(Ae.getPrototypeOf, Ae), Wl = Ae.create, Bl = Ar.propertyIsEnumerable, hs = os.splice, $l = Dn ? Dn.isConcatSpreadable : r, di = Dn ? Dn.iterator : r, qn = Dn ? Dn.toStringTag : r, ps = function() {
        try {
          var e = nr(Ae, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), L1 = D.clearTimeout !== Qe.clearTimeout && D.clearTimeout, j1 = $ && $.now !== Qe.Date.now && $.now, N1 = D.setTimeout !== Qe.setTimeout && D.setTimeout, gs = Xe.ceil, ms = Xe.floor, Jo = Ae.getOwnPropertySymbols, F1 = us ? us.isBuffer : r, Vl = D.isFinite, z1 = os.join, H1 = Fl(Ae.keys, Ae), Ye = Xe.max, nt = Xe.min, U1 = $.now, W1 = D.parseInt, Gl = Xe.random, B1 = os.reverse, Qo = nr(D, "DataView"), fi = nr(D, "Map"), ea = nr(D, "Promise"), Rr = nr(D, "Set"), hi = nr(D, "WeakMap"), pi = nr(Ae, "create"), vs = hi && new hi(), Or = {}, $1 = rr(Qo), V1 = rr(fi), G1 = rr(ea), X1 = rr(Rr), Y1 = rr(hi), bs = Dn ? Dn.prototype : r, gi = bs ? bs.valueOf : r, Xl = bs ? bs.toString : r;
      function p(e) {
        if (ze(e) && !oe(e) && !(e instanceof ge)) {
          if (e instanceof Lt)
            return e;
          if (Ce.call(e, "__wrapped__"))
            return Yu(e);
        }
        return new Lt(e);
      }
      var Mr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(i) {
          if (!je(i))
            return {};
          if (Wl)
            return Wl(i);
          e.prototype = i;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function ys() {
      }
      function Lt(e, i) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qi,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ko,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ai,
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
      }, p.prototype = ys.prototype, p.prototype.constructor = p, Lt.prototype = Mr(ys.prototype), Lt.prototype.constructor = Lt;
      function ge(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ie, this.__views__ = [];
      }
      function Z1() {
        var e = new ge(this.__wrapped__);
        return e.__actions__ = mt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = mt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = mt(this.__views__), e;
      }
      function K1() {
        if (this.__filtered__) {
          var e = new ge(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function q1() {
        var e = this.__wrapped__.value(), i = this.__dir__, o = oe(e), l = i < 0, f = o ? e.length : 0, g = lm(0, f, this.__views__), y = g.start, x = g.end, T = x - y, L = l ? x : y - 1, j = this.__iteratees__, F = j.length, W = 0, X = nt(T, this.__takeCount__);
        if (!o || !l && f == T && X == T)
          return vu(e, this.__actions__);
        var Q = [];
        e:
          for (; T-- && W < X; ) {
            L += i;
            for (var ue = -1, ee = e[L]; ++ue < F; ) {
              var he = j[ue], be = he.iteratee, Ct = he.type, lt = be(ee);
              if (Ct == Oe)
                ee = lt;
              else if (!lt) {
                if (Ct == ye)
                  continue e;
                break e;
              }
            }
            Q[W++] = ee;
          }
        return Q;
      }
      ge.prototype = Mr(ys.prototype), ge.prototype.constructor = ge;
      function Jn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var l = e[i];
          this.set(l[0], l[1]);
        }
      }
      function J1() {
        this.__data__ = pi ? pi(null) : {}, this.size = 0;
      }
      function Q1(e) {
        var i = this.has(e) && delete this.__data__[e];
        return this.size -= i ? 1 : 0, i;
      }
      function eg(e) {
        var i = this.__data__;
        if (pi) {
          var o = i[e];
          return o === h ? r : o;
        }
        return Ce.call(i, e) ? i[e] : r;
      }
      function tg(e) {
        var i = this.__data__;
        return pi ? i[e] !== r : Ce.call(i, e);
      }
      function ng(e, i) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = pi && i === r ? h : i, this;
      }
      Jn.prototype.clear = J1, Jn.prototype.delete = Q1, Jn.prototype.get = eg, Jn.prototype.has = tg, Jn.prototype.set = ng;
      function fn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var l = e[i];
          this.set(l[0], l[1]);
        }
      }
      function rg() {
        this.__data__ = [], this.size = 0;
      }
      function ig(e) {
        var i = this.__data__, o = ws(i, e);
        if (o < 0)
          return !1;
        var l = i.length - 1;
        return o == l ? i.pop() : hs.call(i, o, 1), --this.size, !0;
      }
      function sg(e) {
        var i = this.__data__, o = ws(i, e);
        return o < 0 ? r : i[o][1];
      }
      function og(e) {
        return ws(this.__data__, e) > -1;
      }
      function ag(e, i) {
        var o = this.__data__, l = ws(o, e);
        return l < 0 ? (++this.size, o.push([e, i])) : o[l][1] = i, this;
      }
      fn.prototype.clear = rg, fn.prototype.delete = ig, fn.prototype.get = sg, fn.prototype.has = og, fn.prototype.set = ag;
      function hn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var l = e[i];
          this.set(l[0], l[1]);
        }
      }
      function cg() {
        this.size = 0, this.__data__ = {
          hash: new Jn(),
          map: new (fi || fn)(),
          string: new Jn()
        };
      }
      function lg(e) {
        var i = Ms(this, e).delete(e);
        return this.size -= i ? 1 : 0, i;
      }
      function ug(e) {
        return Ms(this, e).get(e);
      }
      function dg(e) {
        return Ms(this, e).has(e);
      }
      function fg(e, i) {
        var o = Ms(this, e), l = o.size;
        return o.set(e, i), this.size += o.size == l ? 0 : 1, this;
      }
      hn.prototype.clear = cg, hn.prototype.delete = lg, hn.prototype.get = ug, hn.prototype.has = dg, hn.prototype.set = fg;
      function Qn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new hn(); ++i < o; )
          this.add(e[i]);
      }
      function hg(e) {
        return this.__data__.set(e, h), this;
      }
      function pg(e) {
        return this.__data__.has(e);
      }
      Qn.prototype.add = Qn.prototype.push = hg, Qn.prototype.has = pg;
      function $t(e) {
        var i = this.__data__ = new fn(e);
        this.size = i.size;
      }
      function gg() {
        this.__data__ = new fn(), this.size = 0;
      }
      function mg(e) {
        var i = this.__data__, o = i.delete(e);
        return this.size = i.size, o;
      }
      function vg(e) {
        return this.__data__.get(e);
      }
      function bg(e) {
        return this.__data__.has(e);
      }
      function yg(e, i) {
        var o = this.__data__;
        if (o instanceof fn) {
          var l = o.__data__;
          if (!fi || l.length < a - 1)
            return l.push([e, i]), this.size = ++o.size, this;
          o = this.__data__ = new hn(l);
        }
        return o.set(e, i), this.size = o.size, this;
      }
      $t.prototype.clear = gg, $t.prototype.delete = mg, $t.prototype.get = vg, $t.prototype.has = bg, $t.prototype.set = yg;
      function Yl(e, i) {
        var o = oe(e), l = !o && ir(e), f = !o && !l && zn(e), g = !o && !l && !f && jr(e), y = o || l || f || g, x = y ? Yo(e.length, A1) : [], T = x.length;
        for (var L in e)
          (i || Ce.call(e, L)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
          (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          g && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
          vn(L, T))) && x.push(L);
        return x;
      }
      function Zl(e) {
        var i = e.length;
        return i ? e[da(0, i - 1)] : r;
      }
      function wg(e, i) {
        return Ps(mt(e), er(i, 0, e.length));
      }
      function _g(e) {
        return Ps(mt(e));
      }
      function ta(e, i, o) {
        (o !== r && !Vt(e[i], o) || o === r && !(i in e)) && pn(e, i, o);
      }
      function mi(e, i, o) {
        var l = e[i];
        (!(Ce.call(e, i) && Vt(l, o)) || o === r && !(i in e)) && pn(e, i, o);
      }
      function ws(e, i) {
        for (var o = e.length; o--; )
          if (Vt(e[o][0], i))
            return o;
        return -1;
      }
      function xg(e, i, o, l) {
        return Ln(e, function(f, g, y) {
          i(l, f, o(f), y);
        }), l;
      }
      function Kl(e, i) {
        return e && Qt(i, qe(i), e);
      }
      function Sg(e, i) {
        return e && Qt(i, bt(i), e);
      }
      function pn(e, i, o) {
        i == "__proto__" && ps ? ps(e, i, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[i] = o;
      }
      function na(e, i) {
        for (var o = -1, l = i.length, f = R(l), g = e == null; ++o < l; )
          f[o] = g ? r : ja(e, i[o]);
        return f;
      }
      function er(e, i, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e;
      }
      function jt(e, i, o, l, f, g) {
        var y, x = i & _, T = i & S, L = i & C;
        if (o && (y = f ? o(e, l, f, g) : o(e)), y !== r)
          return y;
        if (!je(e))
          return e;
        var j = oe(e);
        if (j) {
          if (y = dm(e), !x)
            return mt(e, y);
        } else {
          var F = rt(e), W = F == Xn || F == Zi;
          if (zn(e))
            return wu(e, x);
          if (F == Ot || F == Tn || W && !f) {
            if (y = T || W ? {} : zu(e), !x)
              return T ? em(e, Sg(y, e)) : Qg(e, Kl(y, e));
          } else {
            if (!Re[F])
              return f ? e : {};
            y = fm(e, F, x);
          }
        }
        g || (g = new $t());
        var X = g.get(e);
        if (X)
          return X;
        g.set(e, y), pd(e) ? e.forEach(function(ee) {
          y.add(jt(ee, i, o, ee, e, g));
        }) : fd(e) && e.forEach(function(ee, he) {
          y.set(he, jt(ee, i, o, he, e, g));
        });
        var Q = L ? T ? xa : _a : T ? bt : qe, ue = j ? r : Q(e);
        return Pt(ue || e, function(ee, he) {
          ue && (he = ee, ee = e[he]), mi(y, he, jt(ee, i, o, he, e, g));
        }), y;
      }
      function Ig(e) {
        var i = qe(e);
        return function(o) {
          return ql(o, e, i);
        };
      }
      function ql(e, i, o) {
        var l = o.length;
        if (e == null)
          return !l;
        for (e = Ae(e); l--; ) {
          var f = o[l], g = i[f], y = e[f];
          if (y === r && !(f in e) || !g(y))
            return !1;
        }
        return !0;
      }
      function Jl(e, i, o) {
        if (typeof e != "function")
          throw new Dt(u);
        return Si(function() {
          e.apply(r, o);
        }, i);
      }
      function vi(e, i, o, l) {
        var f = -1, g = rs, y = !0, x = e.length, T = [], L = i.length;
        if (!x)
          return T;
        o && (i = De(i, St(o))), l ? (g = Wo, y = !1) : i.length >= a && (g = ui, y = !1, i = new Qn(i));
        e:
          for (; ++f < x; ) {
            var j = e[f], F = o == null ? j : o(j);
            if (j = l || j !== 0 ? j : 0, y && F === F) {
              for (var W = L; W--; )
                if (i[W] === F)
                  continue e;
              T.push(j);
            } else g(i, F, l) || T.push(j);
          }
        return T;
      }
      var Ln = Tu(Jt), Ql = Tu(ia, !0);
      function Tg(e, i) {
        var o = !0;
        return Ln(e, function(l, f, g) {
          return o = !!i(l, f, g), o;
        }), o;
      }
      function _s(e, i, o) {
        for (var l = -1, f = e.length; ++l < f; ) {
          var g = e[l], y = i(g);
          if (y != null && (x === r ? y === y && !Tt(y) : o(y, x)))
            var x = y, T = g;
        }
        return T;
      }
      function Cg(e, i, o, l) {
        var f = e.length;
        for (o = ce(o), o < 0 && (o = -o > f ? 0 : f + o), l = l === r || l > f ? f : ce(l), l < 0 && (l += f), l = o > l ? 0 : md(l); o < l; )
          e[o++] = i;
        return e;
      }
      function eu(e, i) {
        var o = [];
        return Ln(e, function(l, f, g) {
          i(l, f, g) && o.push(l);
        }), o;
      }
      function et(e, i, o, l, f) {
        var g = -1, y = e.length;
        for (o || (o = pm), f || (f = []); ++g < y; ) {
          var x = e[g];
          i > 0 && o(x) ? i > 1 ? et(x, i - 1, o, l, f) : Mn(f, x) : l || (f[f.length] = x);
        }
        return f;
      }
      var ra = Cu(), tu = Cu(!0);
      function Jt(e, i) {
        return e && ra(e, i, qe);
      }
      function ia(e, i) {
        return e && tu(e, i, qe);
      }
      function xs(e, i) {
        return On(i, function(o) {
          return bn(e[o]);
        });
      }
      function tr(e, i) {
        i = Nn(i, e);
        for (var o = 0, l = i.length; e != null && o < l; )
          e = e[en(i[o++])];
        return o && o == l ? e : r;
      }
      function nu(e, i, o) {
        var l = i(e);
        return oe(e) ? l : Mn(l, o(e));
      }
      function at(e) {
        return e == null ? e === r ? To : Yn : qn && qn in Ae(e) ? cm(e) : _m(e);
      }
      function sa(e, i) {
        return e > i;
      }
      function kg(e, i) {
        return e != null && Ce.call(e, i);
      }
      function Eg(e, i) {
        return e != null && i in Ae(e);
      }
      function Ag(e, i, o) {
        return e >= nt(i, o) && e < Ye(i, o);
      }
      function oa(e, i, o) {
        for (var l = o ? Wo : rs, f = e[0].length, g = e.length, y = g, x = R(g), T = 1 / 0, L = []; y--; ) {
          var j = e[y];
          y && i && (j = De(j, St(i))), T = nt(j.length, T), x[y] = !o && (i || f >= 120 && j.length >= 120) ? new Qn(y && j) : r;
        }
        j = e[0];
        var F = -1, W = x[0];
        e:
          for (; ++F < f && L.length < T; ) {
            var X = j[F], Q = i ? i(X) : X;
            if (X = o || X !== 0 ? X : 0, !(W ? ui(W, Q) : l(L, Q, o))) {
              for (y = g; --y; ) {
                var ue = x[y];
                if (!(ue ? ui(ue, Q) : l(e[y], Q, o)))
                  continue e;
              }
              W && W.push(Q), L.push(X);
            }
          }
        return L;
      }
      function Rg(e, i, o, l) {
        return Jt(e, function(f, g, y) {
          i(l, o(f), g, y);
        }), l;
      }
      function bi(e, i, o) {
        i = Nn(i, e), e = Bu(e, i);
        var l = e == null ? e : e[en(Ft(i))];
        return l == null ? r : xt(l, e, o);
      }
      function ru(e) {
        return ze(e) && at(e) == Tn;
      }
      function Og(e) {
        return ze(e) && at(e) == En;
      }
      function Mg(e) {
        return ze(e) && at(e) == ln;
      }
      function yi(e, i, o, l, f) {
        return e === i ? !0 : e == null || i == null || !ze(e) && !ze(i) ? e !== e && i !== i : Pg(e, i, o, l, yi, f);
      }
      function Pg(e, i, o, l, f, g) {
        var y = oe(e), x = oe(i), T = y ? Cn : rt(e), L = x ? Cn : rt(i);
        T = T == Tn ? Ot : T, L = L == Tn ? Ot : L;
        var j = T == Ot, F = L == Ot, W = T == L;
        if (W && zn(e)) {
          if (!zn(i))
            return !1;
          y = !0, j = !1;
        }
        if (W && !j)
          return g || (g = new $t()), y || jr(e) ? ju(e, i, o, l, f, g) : om(e, i, T, o, l, f, g);
        if (!(o & O)) {
          var X = j && Ce.call(e, "__wrapped__"), Q = F && Ce.call(i, "__wrapped__");
          if (X || Q) {
            var ue = X ? e.value() : e, ee = Q ? i.value() : i;
            return g || (g = new $t()), f(ue, ee, o, l, g);
          }
        }
        return W ? (g || (g = new $t()), am(e, i, o, l, f, g)) : !1;
      }
      function Dg(e) {
        return ze(e) && rt(e) == wt;
      }
      function aa(e, i, o, l) {
        var f = o.length, g = f, y = !l;
        if (e == null)
          return !g;
        for (e = Ae(e); f--; ) {
          var x = o[f];
          if (y && x[2] ? x[1] !== e[x[0]] : !(x[0] in e))
            return !1;
        }
        for (; ++f < g; ) {
          x = o[f];
          var T = x[0], L = e[T], j = x[1];
          if (y && x[2]) {
            if (L === r && !(T in e))
              return !1;
          } else {
            var F = new $t();
            if (l)
              var W = l(L, j, T, e, i, F);
            if (!(W === r ? yi(j, L, O | A, l, F) : W))
              return !1;
          }
        }
        return !0;
      }
      function iu(e) {
        if (!je(e) || mm(e))
          return !1;
        var i = bn(e) ? D1 : Je;
        return i.test(rr(e));
      }
      function Lg(e) {
        return ze(e) && at(e) == Zn;
      }
      function jg(e) {
        return ze(e) && rt(e) == _t;
      }
      function Ng(e) {
        return ze(e) && zs(e.length) && !!Me[at(e)];
      }
      function su(e) {
        return typeof e == "function" ? e : e == null ? yt : typeof e == "object" ? oe(e) ? cu(e[0], e[1]) : au(e) : kd(e);
      }
      function ca(e) {
        if (!xi(e))
          return H1(e);
        var i = [];
        for (var o in Ae(e))
          Ce.call(e, o) && o != "constructor" && i.push(o);
        return i;
      }
      function Fg(e) {
        if (!je(e))
          return wm(e);
        var i = xi(e), o = [];
        for (var l in e)
          l == "constructor" && (i || !Ce.call(e, l)) || o.push(l);
        return o;
      }
      function la(e, i) {
        return e < i;
      }
      function ou(e, i) {
        var o = -1, l = vt(e) ? R(e.length) : [];
        return Ln(e, function(f, g, y) {
          l[++o] = i(f, g, y);
        }), l;
      }
      function au(e) {
        var i = Ia(e);
        return i.length == 1 && i[0][2] ? Uu(i[0][0], i[0][1]) : function(o) {
          return o === e || aa(o, e, i);
        };
      }
      function cu(e, i) {
        return Ca(e) && Hu(i) ? Uu(en(e), i) : function(o) {
          var l = ja(o, e);
          return l === r && l === i ? Na(o, e) : yi(i, l, O | A);
        };
      }
      function Ss(e, i, o, l, f) {
        e !== i && ra(i, function(g, y) {
          if (f || (f = new $t()), je(g))
            zg(e, i, y, o, Ss, l, f);
          else {
            var x = l ? l(Ea(e, y), g, y + "", e, i, f) : r;
            x === r && (x = g), ta(e, y, x);
          }
        }, bt);
      }
      function zg(e, i, o, l, f, g, y) {
        var x = Ea(e, o), T = Ea(i, o), L = y.get(T);
        if (L) {
          ta(e, o, L);
          return;
        }
        var j = g ? g(x, T, o + "", e, i, y) : r, F = j === r;
        if (F) {
          var W = oe(T), X = !W && zn(T), Q = !W && !X && jr(T);
          j = T, W || X || Q ? oe(x) ? j = x : Ue(x) ? j = mt(x) : X ? (F = !1, j = wu(T, !0)) : Q ? (F = !1, j = _u(T, !0)) : j = [] : Ii(T) || ir(T) ? (j = x, ir(x) ? j = vd(x) : (!je(x) || bn(x)) && (j = zu(T))) : F = !1;
        }
        F && (y.set(T, j), f(j, T, l, g, y), y.delete(T)), ta(e, o, j);
      }
      function lu(e, i) {
        var o = e.length;
        if (o)
          return i += i < 0 ? o : 0, vn(i, o) ? e[i] : r;
      }
      function uu(e, i, o) {
        i.length ? i = De(i, function(g) {
          return oe(g) ? function(y) {
            return tr(y, g.length === 1 ? g[0] : g);
          } : g;
        }) : i = [yt];
        var l = -1;
        i = De(i, St(J()));
        var f = ou(e, function(g, y, x) {
          var T = De(i, function(L) {
            return L(g);
          });
          return { criteria: T, index: ++l, value: g };
        });
        return f1(f, function(g, y) {
          return Jg(g, y, o);
        });
      }
      function Hg(e, i) {
        return du(e, i, function(o, l) {
          return Na(e, l);
        });
      }
      function du(e, i, o) {
        for (var l = -1, f = i.length, g = {}; ++l < f; ) {
          var y = i[l], x = tr(e, y);
          o(x, y) && wi(g, Nn(y, e), x);
        }
        return g;
      }
      function Ug(e) {
        return function(i) {
          return tr(i, e);
        };
      }
      function ua(e, i, o, l) {
        var f = l ? d1 : Tr, g = -1, y = i.length, x = e;
        for (e === i && (i = mt(i)), o && (x = De(e, St(o))); ++g < y; )
          for (var T = 0, L = i[g], j = o ? o(L) : L; (T = f(x, j, T, l)) > -1; )
            x !== e && hs.call(x, T, 1), hs.call(e, T, 1);
        return e;
      }
      function fu(e, i) {
        for (var o = e ? i.length : 0, l = o - 1; o--; ) {
          var f = i[o];
          if (o == l || f !== g) {
            var g = f;
            vn(f) ? hs.call(e, f, 1) : pa(e, f);
          }
        }
        return e;
      }
      function da(e, i) {
        return e + ms(Gl() * (i - e + 1));
      }
      function Wg(e, i, o, l) {
        for (var f = -1, g = Ye(gs((i - e) / (o || 1)), 0), y = R(g); g--; )
          y[l ? g : ++f] = e, e += o;
        return y;
      }
      function fa(e, i) {
        var o = "";
        if (!e || i < 1 || i > ke)
          return o;
        do
          i % 2 && (o += e), i = ms(i / 2), i && (e += e);
        while (i);
        return o;
      }
      function de(e, i) {
        return Aa(Wu(e, i, yt), e + "");
      }
      function Bg(e) {
        return Zl(Nr(e));
      }
      function $g(e, i) {
        var o = Nr(e);
        return Ps(o, er(i, 0, o.length));
      }
      function wi(e, i, o, l) {
        if (!je(e))
          return e;
        i = Nn(i, e);
        for (var f = -1, g = i.length, y = g - 1, x = e; x != null && ++f < g; ) {
          var T = en(i[f]), L = o;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return e;
          if (f != y) {
            var j = x[T];
            L = l ? l(j, T, x) : r, L === r && (L = je(j) ? j : vn(i[f + 1]) ? [] : {});
          }
          mi(x, T, L), x = x[T];
        }
        return e;
      }
      var hu = vs ? function(e, i) {
        return vs.set(e, i), e;
      } : yt, Vg = ps ? function(e, i) {
        return ps(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: za(i),
          writable: !0
        });
      } : yt;
      function Gg(e) {
        return Ps(Nr(e));
      }
      function Nt(e, i, o) {
        var l = -1, f = e.length;
        i < 0 && (i = -i > f ? 0 : f + i), o = o > f ? f : o, o < 0 && (o += f), f = i > o ? 0 : o - i >>> 0, i >>>= 0;
        for (var g = R(f); ++l < f; )
          g[l] = e[l + i];
        return g;
      }
      function Xg(e, i) {
        var o;
        return Ln(e, function(l, f, g) {
          return o = i(l, f, g), !o;
        }), !!o;
      }
      function Is(e, i, o) {
        var l = 0, f = e == null ? l : e.length;
        if (typeof i == "number" && i === i && f <= pr) {
          for (; l < f; ) {
            var g = l + f >>> 1, y = e[g];
            y !== null && !Tt(y) && (o ? y <= i : y < i) ? l = g + 1 : f = g;
          }
          return f;
        }
        return ha(e, i, yt, o);
      }
      function ha(e, i, o, l) {
        var f = 0, g = e == null ? 0 : e.length;
        if (g === 0)
          return 0;
        i = o(i);
        for (var y = i !== i, x = i === null, T = Tt(i), L = i === r; f < g; ) {
          var j = ms((f + g) / 2), F = o(e[j]), W = F !== r, X = F === null, Q = F === F, ue = Tt(F);
          if (y)
            var ee = l || Q;
          else L ? ee = Q && (l || W) : x ? ee = Q && W && (l || !X) : T ? ee = Q && W && !X && (l || !ue) : X || ue ? ee = !1 : ee = l ? F <= i : F < i;
          ee ? f = j + 1 : g = j;
        }
        return nt(g, Gn);
      }
      function pu(e, i) {
        for (var o = -1, l = e.length, f = 0, g = []; ++o < l; ) {
          var y = e[o], x = i ? i(y) : y;
          if (!o || !Vt(x, T)) {
            var T = x;
            g[f++] = y === 0 ? 0 : y;
          }
        }
        return g;
      }
      function gu(e) {
        return typeof e == "number" ? e : Tt(e) ? pt : +e;
      }
      function It(e) {
        if (typeof e == "string")
          return e;
        if (oe(e))
          return De(e, It) + "";
        if (Tt(e))
          return Xl ? Xl.call(e) : "";
        var i = e + "";
        return i == "0" && 1 / e == -1 / 0 ? "-0" : i;
      }
      function jn(e, i, o) {
        var l = -1, f = rs, g = e.length, y = !0, x = [], T = x;
        if (o)
          y = !1, f = Wo;
        else if (g >= a) {
          var L = i ? null : im(e);
          if (L)
            return ss(L);
          y = !1, f = ui, T = new Qn();
        } else
          T = i ? [] : x;
        e:
          for (; ++l < g; ) {
            var j = e[l], F = i ? i(j) : j;
            if (j = o || j !== 0 ? j : 0, y && F === F) {
              for (var W = T.length; W--; )
                if (T[W] === F)
                  continue e;
              i && T.push(F), x.push(j);
            } else f(T, F, o) || (T !== x && T.push(F), x.push(j));
          }
        return x;
      }
      function pa(e, i) {
        return i = Nn(i, e), e = Bu(e, i), e == null || delete e[en(Ft(i))];
      }
      function mu(e, i, o, l) {
        return wi(e, i, o(tr(e, i)), l);
      }
      function Ts(e, i, o, l) {
        for (var f = e.length, g = l ? f : -1; (l ? g-- : ++g < f) && i(e[g], g, e); )
          ;
        return o ? Nt(e, l ? 0 : g, l ? g + 1 : f) : Nt(e, l ? g + 1 : 0, l ? f : g);
      }
      function vu(e, i) {
        var o = e;
        return o instanceof ge && (o = o.value()), Bo(i, function(l, f) {
          return f.func.apply(f.thisArg, Mn([l], f.args));
        }, o);
      }
      function ga(e, i, o) {
        var l = e.length;
        if (l < 2)
          return l ? jn(e[0]) : [];
        for (var f = -1, g = R(l); ++f < l; )
          for (var y = e[f], x = -1; ++x < l; )
            x != f && (g[f] = vi(g[f] || y, e[x], i, o));
        return jn(et(g, 1), i, o);
      }
      function bu(e, i, o) {
        for (var l = -1, f = e.length, g = i.length, y = {}; ++l < f; ) {
          var x = l < g ? i[l] : r;
          o(y, e[l], x);
        }
        return y;
      }
      function ma(e) {
        return Ue(e) ? e : [];
      }
      function va(e) {
        return typeof e == "function" ? e : yt;
      }
      function Nn(e, i) {
        return oe(e) ? e : Ca(e, i) ? [e] : Xu(Te(e));
      }
      var Yg = de;
      function Fn(e, i, o) {
        var l = e.length;
        return o = o === r ? l : o, !i && o >= l ? e : Nt(e, i, o);
      }
      var yu = L1 || function(e) {
        return Qe.clearTimeout(e);
      };
      function wu(e, i) {
        if (i)
          return e.slice();
        var o = e.length, l = Ul ? Ul(o) : new e.constructor(o);
        return e.copy(l), l;
      }
      function ba(e) {
        var i = new e.constructor(e.byteLength);
        return new ds(i).set(new ds(e)), i;
      }
      function Zg(e, i) {
        var o = i ? ba(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function Kg(e) {
        var i = new e.constructor(e.source, Ie.exec(e));
        return i.lastIndex = e.lastIndex, i;
      }
      function qg(e) {
        return gi ? Ae(gi.call(e)) : {};
      }
      function _u(e, i) {
        var o = i ? ba(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function xu(e, i) {
        if (e !== i) {
          var o = e !== r, l = e === null, f = e === e, g = Tt(e), y = i !== r, x = i === null, T = i === i, L = Tt(i);
          if (!x && !L && !g && e > i || g && y && T && !x && !L || l && y && T || !o && T || !f)
            return 1;
          if (!l && !g && !L && e < i || L && o && f && !l && !g || x && o && f || !y && f || !T)
            return -1;
        }
        return 0;
      }
      function Jg(e, i, o) {
        for (var l = -1, f = e.criteria, g = i.criteria, y = f.length, x = o.length; ++l < y; ) {
          var T = xu(f[l], g[l]);
          if (T) {
            if (l >= x)
              return T;
            var L = o[l];
            return T * (L == "desc" ? -1 : 1);
          }
        }
        return e.index - i.index;
      }
      function Su(e, i, o, l) {
        for (var f = -1, g = e.length, y = o.length, x = -1, T = i.length, L = Ye(g - y, 0), j = R(T + L), F = !l; ++x < T; )
          j[x] = i[x];
        for (; ++f < y; )
          (F || f < g) && (j[o[f]] = e[f]);
        for (; L--; )
          j[x++] = e[f++];
        return j;
      }
      function Iu(e, i, o, l) {
        for (var f = -1, g = e.length, y = -1, x = o.length, T = -1, L = i.length, j = Ye(g - x, 0), F = R(j + L), W = !l; ++f < j; )
          F[f] = e[f];
        for (var X = f; ++T < L; )
          F[X + T] = i[T];
        for (; ++y < x; )
          (W || f < g) && (F[X + o[y]] = e[f++]);
        return F;
      }
      function mt(e, i) {
        var o = -1, l = e.length;
        for (i || (i = R(l)); ++o < l; )
          i[o] = e[o];
        return i;
      }
      function Qt(e, i, o, l) {
        var f = !o;
        o || (o = {});
        for (var g = -1, y = i.length; ++g < y; ) {
          var x = i[g], T = l ? l(o[x], e[x], x, o, e) : r;
          T === r && (T = e[x]), f ? pn(o, x, T) : mi(o, x, T);
        }
        return o;
      }
      function Qg(e, i) {
        return Qt(e, Ta(e), i);
      }
      function em(e, i) {
        return Qt(e, Nu(e), i);
      }
      function Cs(e, i) {
        return function(o, l) {
          var f = oe(o) ? s1 : xg, g = i ? i() : {};
          return f(o, e, J(l, 2), g);
        };
      }
      function Pr(e) {
        return de(function(i, o) {
          var l = -1, f = o.length, g = f > 1 ? o[f - 1] : r, y = f > 2 ? o[2] : r;
          for (g = e.length > 3 && typeof g == "function" ? (f--, g) : r, y && ct(o[0], o[1], y) && (g = f < 3 ? r : g, f = 1), i = Ae(i); ++l < f; ) {
            var x = o[l];
            x && e(i, x, l, g);
          }
          return i;
        });
      }
      function Tu(e, i) {
        return function(o, l) {
          if (o == null)
            return o;
          if (!vt(o))
            return e(o, l);
          for (var f = o.length, g = i ? f : -1, y = Ae(o); (i ? g-- : ++g < f) && l(y[g], g, y) !== !1; )
            ;
          return o;
        };
      }
      function Cu(e) {
        return function(i, o, l) {
          for (var f = -1, g = Ae(i), y = l(i), x = y.length; x--; ) {
            var T = y[e ? x : ++f];
            if (o(g[T], T, g) === !1)
              break;
          }
          return i;
        };
      }
      function tm(e, i, o) {
        var l = i & E, f = _i(e);
        function g() {
          var y = this && this !== Qe && this instanceof g ? f : e;
          return y.apply(l ? o : this, arguments);
        }
        return g;
      }
      function ku(e) {
        return function(i) {
          i = Te(i);
          var o = Cr(i) ? Bt(i) : r, l = o ? o[0] : i.charAt(0), f = o ? Fn(o, 1).join("") : i.slice(1);
          return l[e]() + f;
        };
      }
      function Dr(e) {
        return function(i) {
          return Bo(Td(Id(i).replace(Vp, "")), e, "");
        };
      }
      function _i(e) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new e();
            case 1:
              return new e(i[0]);
            case 2:
              return new e(i[0], i[1]);
            case 3:
              return new e(i[0], i[1], i[2]);
            case 4:
              return new e(i[0], i[1], i[2], i[3]);
            case 5:
              return new e(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var o = Mr(e.prototype), l = e.apply(o, i);
          return je(l) ? l : o;
        };
      }
      function nm(e, i, o) {
        var l = _i(e);
        function f() {
          for (var g = arguments.length, y = R(g), x = g, T = Lr(f); x--; )
            y[x] = arguments[x];
          var L = g < 3 && y[0] !== T && y[g - 1] !== T ? [] : Pn(y, T);
          if (g -= L.length, g < o)
            return Mu(
              e,
              i,
              ks,
              f.placeholder,
              r,
              y,
              L,
              r,
              r,
              o - g
            );
          var j = this && this !== Qe && this instanceof f ? l : e;
          return xt(j, this, y);
        }
        return f;
      }
      function Eu(e) {
        return function(i, o, l) {
          var f = Ae(i);
          if (!vt(i)) {
            var g = J(o, 3);
            i = qe(i), o = function(x) {
              return g(f[x], x, f);
            };
          }
          var y = e(i, o, l);
          return y > -1 ? f[g ? i[y] : y] : r;
        };
      }
      function Au(e) {
        return mn(function(i) {
          var o = i.length, l = o, f = Lt.prototype.thru;
          for (e && i.reverse(); l--; ) {
            var g = i[l];
            if (typeof g != "function")
              throw new Dt(u);
            if (f && !y && Os(g) == "wrapper")
              var y = new Lt([], !0);
          }
          for (l = y ? l : o; ++l < o; ) {
            g = i[l];
            var x = Os(g), T = x == "wrapper" ? Sa(g) : r;
            T && ka(T[0]) && T[1] == (q | N | K | Y) && !T[4].length && T[9] == 1 ? y = y[Os(T[0])].apply(y, T[3]) : y = g.length == 1 && ka(g) ? y[x]() : y.thru(g);
          }
          return function() {
            var L = arguments, j = L[0];
            if (y && L.length == 1 && oe(j))
              return y.plant(j).value();
            for (var F = 0, W = o ? i[F].apply(this, L) : j; ++F < o; )
              W = i[F].call(this, W);
            return W;
          };
        });
      }
      function ks(e, i, o, l, f, g, y, x, T, L) {
        var j = i & q, F = i & E, W = i & P, X = i & (N | z), Q = i & G, ue = W ? r : _i(e);
        function ee() {
          for (var he = arguments.length, be = R(he), Ct = he; Ct--; )
            be[Ct] = arguments[Ct];
          if (X)
            var lt = Lr(ee), kt = p1(be, lt);
          if (l && (be = Su(be, l, f, X)), g && (be = Iu(be, g, y, X)), he -= kt, X && he < L) {
            var We = Pn(be, lt);
            return Mu(
              e,
              i,
              ks,
              ee.placeholder,
              o,
              be,
              We,
              x,
              T,
              L - he
            );
          }
          var Gt = F ? o : this, wn = W ? Gt[e] : e;
          return he = be.length, x ? be = xm(be, x) : Q && he > 1 && be.reverse(), j && T < he && (be.length = T), this && this !== Qe && this instanceof ee && (wn = ue || _i(wn)), wn.apply(Gt, be);
        }
        return ee;
      }
      function Ru(e, i) {
        return function(o, l) {
          return Rg(o, e, i(l), {});
        };
      }
      function Es(e, i) {
        return function(o, l) {
          var f;
          if (o === r && l === r)
            return i;
          if (o !== r && (f = o), l !== r) {
            if (f === r)
              return l;
            typeof o == "string" || typeof l == "string" ? (o = It(o), l = It(l)) : (o = gu(o), l = gu(l)), f = e(o, l);
          }
          return f;
        };
      }
      function ya(e) {
        return mn(function(i) {
          return i = De(i, St(J())), de(function(o) {
            var l = this;
            return e(i, function(f) {
              return xt(f, l, o);
            });
          });
        });
      }
      function As(e, i) {
        i = i === r ? " " : It(i);
        var o = i.length;
        if (o < 2)
          return o ? fa(i, e) : i;
        var l = fa(i, gs(e / kr(i)));
        return Cr(i) ? Fn(Bt(l), 0, e).join("") : l.slice(0, e);
      }
      function rm(e, i, o, l) {
        var f = i & E, g = _i(e);
        function y() {
          for (var x = -1, T = arguments.length, L = -1, j = l.length, F = R(j + T), W = this && this !== Qe && this instanceof y ? g : e; ++L < j; )
            F[L] = l[L];
          for (; T--; )
            F[L++] = arguments[++x];
          return xt(W, f ? o : this, F);
        }
        return y;
      }
      function Ou(e) {
        return function(i, o, l) {
          return l && typeof l != "number" && ct(i, o, l) && (o = l = r), i = yn(i), o === r ? (o = i, i = 0) : o = yn(o), l = l === r ? i < o ? 1 : -1 : yn(l), Wg(i, o, l, e);
        };
      }
      function Rs(e) {
        return function(i, o) {
          return typeof i == "string" && typeof o == "string" || (i = zt(i), o = zt(o)), e(i, o);
        };
      }
      function Mu(e, i, o, l, f, g, y, x, T, L) {
        var j = i & N, F = j ? y : r, W = j ? r : y, X = j ? g : r, Q = j ? r : g;
        i |= j ? K : Z, i &= ~(j ? Z : K), i & M || (i &= -4);
        var ue = [
          e,
          i,
          f,
          X,
          F,
          Q,
          W,
          x,
          T,
          L
        ], ee = o.apply(r, ue);
        return ka(e) && $u(ee, ue), ee.placeholder = l, Vu(ee, e, i);
      }
      function wa(e) {
        var i = Xe[e];
        return function(o, l) {
          if (o = zt(o), l = l == null ? 0 : nt(ce(l), 292), l && Vl(o)) {
            var f = (Te(o) + "e").split("e"), g = i(f[0] + "e" + (+f[1] + l));
            return f = (Te(g) + "e").split("e"), +(f[0] + "e" + (+f[1] - l));
          }
          return i(o);
        };
      }
      var im = Rr && 1 / ss(new Rr([, -0]))[1] == Ee ? function(e) {
        return new Rr(e);
      } : Wa;
      function Pu(e) {
        return function(i) {
          var o = rt(i);
          return o == wt ? Ko(i) : o == _t ? _1(i) : h1(i, e(i));
        };
      }
      function gn(e, i, o, l, f, g, y, x) {
        var T = i & P;
        if (!T && typeof e != "function")
          throw new Dt(u);
        var L = l ? l.length : 0;
        if (L || (i &= -97, l = f = r), y = y === r ? y : Ye(ce(y), 0), x = x === r ? x : ce(x), L -= f ? f.length : 0, i & Z) {
          var j = l, F = f;
          l = f = r;
        }
        var W = T ? r : Sa(e), X = [
          e,
          i,
          o,
          l,
          f,
          j,
          F,
          g,
          y,
          x
        ];
        if (W && ym(X, W), e = X[0], i = X[1], o = X[2], l = X[3], f = X[4], x = X[9] = X[9] === r ? T ? 0 : e.length : Ye(X[9] - L, 0), !x && i & (N | z) && (i &= -25), !i || i == E)
          var Q = tm(e, i, o);
        else i == N || i == z ? Q = nm(e, i, x) : (i == K || i == (E | K)) && !f.length ? Q = rm(e, i, o, l) : Q = ks.apply(r, X);
        var ue = W ? hu : $u;
        return Vu(ue(Q, X), e, i);
      }
      function Du(e, i, o, l) {
        return e === r || Vt(e, Ar[o]) && !Ce.call(l, o) ? i : e;
      }
      function Lu(e, i, o, l, f, g) {
        return je(e) && je(i) && (g.set(i, e), Ss(e, i, r, Lu, g), g.delete(i)), e;
      }
      function sm(e) {
        return Ii(e) ? r : e;
      }
      function ju(e, i, o, l, f, g) {
        var y = o & O, x = e.length, T = i.length;
        if (x != T && !(y && T > x))
          return !1;
        var L = g.get(e), j = g.get(i);
        if (L && j)
          return L == i && j == e;
        var F = -1, W = !0, X = o & A ? new Qn() : r;
        for (g.set(e, i), g.set(i, e); ++F < x; ) {
          var Q = e[F], ue = i[F];
          if (l)
            var ee = y ? l(ue, Q, F, i, e, g) : l(Q, ue, F, e, i, g);
          if (ee !== r) {
            if (ee)
              continue;
            W = !1;
            break;
          }
          if (X) {
            if (!$o(i, function(he, be) {
              if (!ui(X, be) && (Q === he || f(Q, he, o, l, g)))
                return X.push(be);
            })) {
              W = !1;
              break;
            }
          } else if (!(Q === ue || f(Q, ue, o, l, g))) {
            W = !1;
            break;
          }
        }
        return g.delete(e), g.delete(i), W;
      }
      function om(e, i, o, l, f, g, y) {
        switch (o) {
          case An:
            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
              return !1;
            e = e.buffer, i = i.buffer;
          case En:
            return !(e.byteLength != i.byteLength || !g(new ds(e), new ds(i)));
          case Kt:
          case ln:
          case qt:
            return Vt(+e, +i);
          case mr:
            return e.name == i.name && e.message == i.message;
          case Zn:
          case un:
            return e == i + "";
          case wt:
            var x = Ko;
          case _t:
            var T = l & O;
            if (x || (x = ss), e.size != i.size && !T)
              return !1;
            var L = y.get(e);
            if (L)
              return L == i;
            l |= A, y.set(e, i);
            var j = ju(x(e), x(i), l, f, g, y);
            return y.delete(e), j;
          case br:
            if (gi)
              return gi.call(e) == gi.call(i);
        }
        return !1;
      }
      function am(e, i, o, l, f, g) {
        var y = o & O, x = _a(e), T = x.length, L = _a(i), j = L.length;
        if (T != j && !y)
          return !1;
        for (var F = T; F--; ) {
          var W = x[F];
          if (!(y ? W in i : Ce.call(i, W)))
            return !1;
        }
        var X = g.get(e), Q = g.get(i);
        if (X && Q)
          return X == i && Q == e;
        var ue = !0;
        g.set(e, i), g.set(i, e);
        for (var ee = y; ++F < T; ) {
          W = x[F];
          var he = e[W], be = i[W];
          if (l)
            var Ct = y ? l(be, he, W, i, e, g) : l(he, be, W, e, i, g);
          if (!(Ct === r ? he === be || f(he, be, o, l, g) : Ct)) {
            ue = !1;
            break;
          }
          ee || (ee = W == "constructor");
        }
        if (ue && !ee) {
          var lt = e.constructor, kt = i.constructor;
          lt != kt && "constructor" in e && "constructor" in i && !(typeof lt == "function" && lt instanceof lt && typeof kt == "function" && kt instanceof kt) && (ue = !1);
        }
        return g.delete(e), g.delete(i), ue;
      }
      function mn(e) {
        return Aa(Wu(e, r, qu), e + "");
      }
      function _a(e) {
        return nu(e, qe, Ta);
      }
      function xa(e) {
        return nu(e, bt, Nu);
      }
      var Sa = vs ? function(e) {
        return vs.get(e);
      } : Wa;
      function Os(e) {
        for (var i = e.name + "", o = Or[i], l = Ce.call(Or, i) ? o.length : 0; l--; ) {
          var f = o[l], g = f.func;
          if (g == null || g == e)
            return f.name;
        }
        return i;
      }
      function Lr(e) {
        var i = Ce.call(p, "placeholder") ? p : e;
        return i.placeholder;
      }
      function J() {
        var e = p.iteratee || Ha;
        return e = e === Ha ? su : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ms(e, i) {
        var o = e.__data__;
        return gm(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
      }
      function Ia(e) {
        for (var i = qe(e), o = i.length; o--; ) {
          var l = i[o], f = e[l];
          i[o] = [l, f, Hu(f)];
        }
        return i;
      }
      function nr(e, i) {
        var o = b1(e, i);
        return iu(o) ? o : r;
      }
      function cm(e) {
        var i = Ce.call(e, qn), o = e[qn];
        try {
          e[qn] = r;
          var l = !0;
        } catch {
        }
        var f = ls.call(e);
        return l && (i ? e[qn] = o : delete e[qn]), f;
      }
      var Ta = Jo ? function(e) {
        return e == null ? [] : (e = Ae(e), On(Jo(e), function(i) {
          return Bl.call(e, i);
        }));
      } : Ba, Nu = Jo ? function(e) {
        for (var i = []; e; )
          Mn(i, Ta(e)), e = fs(e);
        return i;
      } : Ba, rt = at;
      (Qo && rt(new Qo(new ArrayBuffer(1))) != An || fi && rt(new fi()) != wt || ea && rt(ea.resolve()) != Jr || Rr && rt(new Rr()) != _t || hi && rt(new hi()) != kn) && (rt = function(e) {
        var i = at(e), o = i == Ot ? e.constructor : r, l = o ? rr(o) : "";
        if (l)
          switch (l) {
            case $1:
              return An;
            case V1:
              return wt;
            case G1:
              return Jr;
            case X1:
              return _t;
            case Y1:
              return kn;
          }
        return i;
      });
      function lm(e, i, o) {
        for (var l = -1, f = o.length; ++l < f; ) {
          var g = o[l], y = g.size;
          switch (g.type) {
            case "drop":
              e += y;
              break;
            case "dropRight":
              i -= y;
              break;
            case "take":
              i = nt(i, e + y);
              break;
            case "takeRight":
              e = Ye(e, i - y);
              break;
          }
        }
        return { start: e, end: i };
      }
      function um(e) {
        var i = e.match(Mo);
        return i ? i[1].split(w) : [];
      }
      function Fu(e, i, o) {
        i = Nn(i, e);
        for (var l = -1, f = i.length, g = !1; ++l < f; ) {
          var y = en(i[l]);
          if (!(g = e != null && o(e, y)))
            break;
          e = e[y];
        }
        return g || ++l != f ? g : (f = e == null ? 0 : e.length, !!f && zs(f) && vn(y, f) && (oe(e) || ir(e)));
      }
      function dm(e) {
        var i = e.length, o = new e.constructor(i);
        return i && typeof e[0] == "string" && Ce.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function zu(e) {
        return typeof e.constructor == "function" && !xi(e) ? Mr(fs(e)) : {};
      }
      function fm(e, i, o) {
        var l = e.constructor;
        switch (i) {
          case En:
            return ba(e);
          case Kt:
          case ln:
            return new l(+e);
          case An:
            return Zg(e, o);
          case yr:
          case wr:
          case Qr:
          case ei:
          case ti:
          case ni:
          case ri:
          case ii:
          case si:
            return _u(e, o);
          case wt:
            return new l();
          case qt:
          case un:
            return new l(e);
          case Zn:
            return Kg(e);
          case _t:
            return new l();
          case br:
            return qg(e);
        }
      }
      function hm(e, i) {
        var o = i.length;
        if (!o)
          return e;
        var l = o - 1;
        return i[l] = (o > 1 ? "& " : "") + i[l], i = i.join(o > 2 ? ", " : " "), e.replace(Oo, `{
/* [wrapped with ` + i + `] */
`);
      }
      function pm(e) {
        return oe(e) || ir(e) || !!($l && e && e[$l]);
      }
      function vn(e, i) {
        var o = typeof e;
        return i = i ?? ke, !!i && (o == "number" || o != "symbol" && Fe.test(e)) && e > -1 && e % 1 == 0 && e < i;
      }
      function ct(e, i, o) {
        if (!je(o))
          return !1;
        var l = typeof i;
        return (l == "number" ? vt(o) && vn(i, o.length) : l == "string" && i in o) ? Vt(o[i], e) : !1;
      }
      function Ca(e, i) {
        if (oe(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || Tt(e) ? !0 : Eo.test(e) || !es.test(e) || i != null && e in Ae(i);
      }
      function gm(e) {
        var i = typeof e;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
      }
      function ka(e) {
        var i = Os(e), o = p[i];
        if (typeof o != "function" || !(i in ge.prototype))
          return !1;
        if (e === o)
          return !0;
        var l = Sa(o);
        return !!l && e === l[0];
      }
      function mm(e) {
        return !!Hl && Hl in e;
      }
      var vm = as ? bn : $a;
      function xi(e) {
        var i = e && e.constructor, o = typeof i == "function" && i.prototype || Ar;
        return e === o;
      }
      function Hu(e) {
        return e === e && !je(e);
      }
      function Uu(e, i) {
        return function(o) {
          return o == null ? !1 : o[e] === i && (i !== r || e in Ae(o));
        };
      }
      function bm(e) {
        var i = Ns(e, function(l) {
          return o.size === m && o.clear(), l;
        }), o = i.cache;
        return i;
      }
      function ym(e, i) {
        var o = e[1], l = i[1], f = o | l, g = f < (E | P | q), y = l == q && o == N || l == q && o == Y && e[7].length <= i[8] || l == (q | Y) && i[7].length <= i[8] && o == N;
        if (!(g || y))
          return e;
        l & E && (e[2] = i[2], f |= o & E ? 0 : M);
        var x = i[3];
        if (x) {
          var T = e[3];
          e[3] = T ? Su(T, x, i[4]) : x, e[4] = T ? Pn(e[3], b) : i[4];
        }
        return x = i[5], x && (T = e[5], e[5] = T ? Iu(T, x, i[6]) : x, e[6] = T ? Pn(e[5], b) : i[6]), x = i[7], x && (e[7] = x), l & q && (e[8] = e[8] == null ? i[8] : nt(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = f, e;
      }
      function wm(e) {
        var i = [];
        if (e != null)
          for (var o in Ae(e))
            i.push(o);
        return i;
      }
      function _m(e) {
        return ls.call(e);
      }
      function Wu(e, i, o) {
        return i = Ye(i === r ? e.length - 1 : i, 0), function() {
          for (var l = arguments, f = -1, g = Ye(l.length - i, 0), y = R(g); ++f < g; )
            y[f] = l[i + f];
          f = -1;
          for (var x = R(i + 1); ++f < i; )
            x[f] = l[f];
          return x[i] = o(y), xt(e, this, x);
        };
      }
      function Bu(e, i) {
        return i.length < 2 ? e : tr(e, Nt(i, 0, -1));
      }
      function xm(e, i) {
        for (var o = e.length, l = nt(i.length, o), f = mt(e); l--; ) {
          var g = i[l];
          e[l] = vn(g, o) ? f[g] : r;
        }
        return e;
      }
      function Ea(e, i) {
        if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__")
          return e[i];
      }
      var $u = Gu(hu), Si = N1 || function(e, i) {
        return Qe.setTimeout(e, i);
      }, Aa = Gu(Vg);
      function Vu(e, i, o) {
        var l = i + "";
        return Aa(e, hm(l, Sm(um(l), o)));
      }
      function Gu(e) {
        var i = 0, o = 0;
        return function() {
          var l = U1(), f = ae - (l - o);
          if (o = l, f > 0) {
            if (++i >= V)
              return arguments[0];
          } else
            i = 0;
          return e.apply(r, arguments);
        };
      }
      function Ps(e, i) {
        var o = -1, l = e.length, f = l - 1;
        for (i = i === r ? l : i; ++o < i; ) {
          var g = da(o, f), y = e[g];
          e[g] = e[o], e[o] = y;
        }
        return e.length = i, e;
      }
      var Xu = bm(function(e) {
        var i = [];
        return e.charCodeAt(0) === 46 && i.push(""), e.replace(Ao, function(o, l, f, g) {
          i.push(f ? g.replace(re, "$1") : l || o);
        }), i;
      });
      function en(e) {
        if (typeof e == "string" || Tt(e))
          return e;
        var i = e + "";
        return i == "0" && 1 / e == -1 / 0 ? "-0" : i;
      }
      function rr(e) {
        if (e != null) {
          try {
            return cs.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Sm(e, i) {
        return Pt(Kr, function(o) {
          var l = "_." + o[0];
          i & o[1] && !rs(e, l) && e.push(l);
        }), e.sort();
      }
      function Yu(e) {
        if (e instanceof ge)
          return e.clone();
        var i = new Lt(e.__wrapped__, e.__chain__);
        return i.__actions__ = mt(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i;
      }
      function Im(e, i, o) {
        (o ? ct(e, i, o) : i === r) ? i = 1 : i = Ye(ce(i), 0);
        var l = e == null ? 0 : e.length;
        if (!l || i < 1)
          return [];
        for (var f = 0, g = 0, y = R(gs(l / i)); f < l; )
          y[g++] = Nt(e, f, f += i);
        return y;
      }
      function Tm(e) {
        for (var i = -1, o = e == null ? 0 : e.length, l = 0, f = []; ++i < o; ) {
          var g = e[i];
          g && (f[l++] = g);
        }
        return f;
      }
      function Cm() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var i = R(e - 1), o = arguments[0], l = e; l--; )
          i[l - 1] = arguments[l];
        return Mn(oe(o) ? mt(o) : [o], et(i, 1));
      }
      var km = de(function(e, i) {
        return Ue(e) ? vi(e, et(i, 1, Ue, !0)) : [];
      }), Em = de(function(e, i) {
        var o = Ft(i);
        return Ue(o) && (o = r), Ue(e) ? vi(e, et(i, 1, Ue, !0), J(o, 2)) : [];
      }), Am = de(function(e, i) {
        var o = Ft(i);
        return Ue(o) && (o = r), Ue(e) ? vi(e, et(i, 1, Ue, !0), r, o) : [];
      });
      function Rm(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (i = o || i === r ? 1 : ce(i), Nt(e, i < 0 ? 0 : i, l)) : [];
      }
      function Om(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (i = o || i === r ? 1 : ce(i), i = l - i, Nt(e, 0, i < 0 ? 0 : i)) : [];
      }
      function Mm(e, i) {
        return e && e.length ? Ts(e, J(i, 3), !0, !0) : [];
      }
      function Pm(e, i) {
        return e && e.length ? Ts(e, J(i, 3), !0) : [];
      }
      function Dm(e, i, o, l) {
        var f = e == null ? 0 : e.length;
        return f ? (o && typeof o != "number" && ct(e, i, o) && (o = 0, l = f), Cg(e, i, o, l)) : [];
      }
      function Zu(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = o == null ? 0 : ce(o);
        return f < 0 && (f = Ye(l + f, 0)), is(e, J(i, 3), f);
      }
      function Ku(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = l - 1;
        return o !== r && (f = ce(o), f = o < 0 ? Ye(l + f, 0) : nt(f, l - 1)), is(e, J(i, 3), f, !0);
      }
      function qu(e) {
        var i = e == null ? 0 : e.length;
        return i ? et(e, 1) : [];
      }
      function Lm(e) {
        var i = e == null ? 0 : e.length;
        return i ? et(e, Ee) : [];
      }
      function jm(e, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i = i === r ? 1 : ce(i), et(e, i)) : [];
      }
      function Nm(e) {
        for (var i = -1, o = e == null ? 0 : e.length, l = {}; ++i < o; ) {
          var f = e[i];
          l[f[0]] = f[1];
        }
        return l;
      }
      function Ju(e) {
        return e && e.length ? e[0] : r;
      }
      function Fm(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = o == null ? 0 : ce(o);
        return f < 0 && (f = Ye(l + f, 0)), Tr(e, i, f);
      }
      function zm(e) {
        var i = e == null ? 0 : e.length;
        return i ? Nt(e, 0, -1) : [];
      }
      var Hm = de(function(e) {
        var i = De(e, ma);
        return i.length && i[0] === e[0] ? oa(i) : [];
      }), Um = de(function(e) {
        var i = Ft(e), o = De(e, ma);
        return i === Ft(o) ? i = r : o.pop(), o.length && o[0] === e[0] ? oa(o, J(i, 2)) : [];
      }), Wm = de(function(e) {
        var i = Ft(e), o = De(e, ma);
        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === e[0] ? oa(o, r, i) : [];
      });
      function Bm(e, i) {
        return e == null ? "" : z1.call(e, i);
      }
      function Ft(e) {
        var i = e == null ? 0 : e.length;
        return i ? e[i - 1] : r;
      }
      function $m(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = l;
        return o !== r && (f = ce(o), f = f < 0 ? Ye(l + f, 0) : nt(f, l - 1)), i === i ? S1(e, i, f) : is(e, Ml, f, !0);
      }
      function Vm(e, i) {
        return e && e.length ? lu(e, ce(i)) : r;
      }
      var Gm = de(Qu);
      function Qu(e, i) {
        return e && e.length && i && i.length ? ua(e, i) : e;
      }
      function Xm(e, i, o) {
        return e && e.length && i && i.length ? ua(e, i, J(o, 2)) : e;
      }
      function Ym(e, i, o) {
        return e && e.length && i && i.length ? ua(e, i, r, o) : e;
      }
      var Zm = mn(function(e, i) {
        var o = e == null ? 0 : e.length, l = na(e, i);
        return fu(e, De(i, function(f) {
          return vn(f, o) ? +f : f;
        }).sort(xu)), l;
      });
      function Km(e, i) {
        var o = [];
        if (!(e && e.length))
          return o;
        var l = -1, f = [], g = e.length;
        for (i = J(i, 3); ++l < g; ) {
          var y = e[l];
          i(y, l, e) && (o.push(y), f.push(l));
        }
        return fu(e, f), o;
      }
      function Ra(e) {
        return e == null ? e : B1.call(e);
      }
      function qm(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (o && typeof o != "number" && ct(e, i, o) ? (i = 0, o = l) : (i = i == null ? 0 : ce(i), o = o === r ? l : ce(o)), Nt(e, i, o)) : [];
      }
      function Jm(e, i) {
        return Is(e, i);
      }
      function Qm(e, i, o) {
        return ha(e, i, J(o, 2));
      }
      function e0(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var l = Is(e, i);
          if (l < o && Vt(e[l], i))
            return l;
        }
        return -1;
      }
      function t0(e, i) {
        return Is(e, i, !0);
      }
      function n0(e, i, o) {
        return ha(e, i, J(o, 2), !0);
      }
      function r0(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var l = Is(e, i, !0) - 1;
          if (Vt(e[l], i))
            return l;
        }
        return -1;
      }
      function i0(e) {
        return e && e.length ? pu(e) : [];
      }
      function s0(e, i) {
        return e && e.length ? pu(e, J(i, 2)) : [];
      }
      function o0(e) {
        var i = e == null ? 0 : e.length;
        return i ? Nt(e, 1, i) : [];
      }
      function a0(e, i, o) {
        return e && e.length ? (i = o || i === r ? 1 : ce(i), Nt(e, 0, i < 0 ? 0 : i)) : [];
      }
      function c0(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (i = o || i === r ? 1 : ce(i), i = l - i, Nt(e, i < 0 ? 0 : i, l)) : [];
      }
      function l0(e, i) {
        return e && e.length ? Ts(e, J(i, 3), !1, !0) : [];
      }
      function u0(e, i) {
        return e && e.length ? Ts(e, J(i, 3)) : [];
      }
      var d0 = de(function(e) {
        return jn(et(e, 1, Ue, !0));
      }), f0 = de(function(e) {
        var i = Ft(e);
        return Ue(i) && (i = r), jn(et(e, 1, Ue, !0), J(i, 2));
      }), h0 = de(function(e) {
        var i = Ft(e);
        return i = typeof i == "function" ? i : r, jn(et(e, 1, Ue, !0), r, i);
      });
      function p0(e) {
        return e && e.length ? jn(e) : [];
      }
      function g0(e, i) {
        return e && e.length ? jn(e, J(i, 2)) : [];
      }
      function m0(e, i) {
        return i = typeof i == "function" ? i : r, e && e.length ? jn(e, r, i) : [];
      }
      function Oa(e) {
        if (!(e && e.length))
          return [];
        var i = 0;
        return e = On(e, function(o) {
          if (Ue(o))
            return i = Ye(o.length, i), !0;
        }), Yo(i, function(o) {
          return De(e, Vo(o));
        });
      }
      function ed(e, i) {
        if (!(e && e.length))
          return [];
        var o = Oa(e);
        return i == null ? o : De(o, function(l) {
          return xt(i, r, l);
        });
      }
      var v0 = de(function(e, i) {
        return Ue(e) ? vi(e, i) : [];
      }), b0 = de(function(e) {
        return ga(On(e, Ue));
      }), y0 = de(function(e) {
        var i = Ft(e);
        return Ue(i) && (i = r), ga(On(e, Ue), J(i, 2));
      }), w0 = de(function(e) {
        var i = Ft(e);
        return i = typeof i == "function" ? i : r, ga(On(e, Ue), r, i);
      }), _0 = de(Oa);
      function x0(e, i) {
        return bu(e || [], i || [], mi);
      }
      function S0(e, i) {
        return bu(e || [], i || [], wi);
      }
      var I0 = de(function(e) {
        var i = e.length, o = i > 1 ? e[i - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, ed(e, o);
      });
      function td(e) {
        var i = p(e);
        return i.__chain__ = !0, i;
      }
      function T0(e, i) {
        return i(e), e;
      }
      function Ds(e, i) {
        return i(e);
      }
      var C0 = mn(function(e) {
        var i = e.length, o = i ? e[0] : 0, l = this.__wrapped__, f = function(g) {
          return na(g, e);
        };
        return i > 1 || this.__actions__.length || !(l instanceof ge) || !vn(o) ? this.thru(f) : (l = l.slice(o, +o + (i ? 1 : 0)), l.__actions__.push({
          func: Ds,
          args: [f],
          thisArg: r
        }), new Lt(l, this.__chain__).thru(function(g) {
          return i && !g.length && g.push(r), g;
        }));
      });
      function k0() {
        return td(this);
      }
      function E0() {
        return new Lt(this.value(), this.__chain__);
      }
      function A0() {
        this.__values__ === r && (this.__values__ = gd(this.value()));
        var e = this.__index__ >= this.__values__.length, i = e ? r : this.__values__[this.__index__++];
        return { done: e, value: i };
      }
      function R0() {
        return this;
      }
      function O0(e) {
        for (var i, o = this; o instanceof ys; ) {
          var l = Yu(o);
          l.__index__ = 0, l.__values__ = r, i ? f.__wrapped__ = l : i = l;
          var f = l;
          o = o.__wrapped__;
        }
        return f.__wrapped__ = e, i;
      }
      function M0() {
        var e = this.__wrapped__;
        if (e instanceof ge) {
          var i = e;
          return this.__actions__.length && (i = new ge(this)), i = i.reverse(), i.__actions__.push({
            func: Ds,
            args: [Ra],
            thisArg: r
          }), new Lt(i, this.__chain__);
        }
        return this.thru(Ra);
      }
      function P0() {
        return vu(this.__wrapped__, this.__actions__);
      }
      var D0 = Cs(function(e, i, o) {
        Ce.call(e, o) ? ++e[o] : pn(e, o, 1);
      });
      function L0(e, i, o) {
        var l = oe(e) ? Rl : Tg;
        return o && ct(e, i, o) && (i = r), l(e, J(i, 3));
      }
      function j0(e, i) {
        var o = oe(e) ? On : eu;
        return o(e, J(i, 3));
      }
      var N0 = Eu(Zu), F0 = Eu(Ku);
      function z0(e, i) {
        return et(Ls(e, i), 1);
      }
      function H0(e, i) {
        return et(Ls(e, i), Ee);
      }
      function U0(e, i, o) {
        return o = o === r ? 1 : ce(o), et(Ls(e, i), o);
      }
      function nd(e, i) {
        var o = oe(e) ? Pt : Ln;
        return o(e, J(i, 3));
      }
      function rd(e, i) {
        var o = oe(e) ? o1 : Ql;
        return o(e, J(i, 3));
      }
      var W0 = Cs(function(e, i, o) {
        Ce.call(e, o) ? e[o].push(i) : pn(e, o, [i]);
      });
      function B0(e, i, o, l) {
        e = vt(e) ? e : Nr(e), o = o && !l ? ce(o) : 0;
        var f = e.length;
        return o < 0 && (o = Ye(f + o, 0)), Hs(e) ? o <= f && e.indexOf(i, o) > -1 : !!f && Tr(e, i, o) > -1;
      }
      var $0 = de(function(e, i, o) {
        var l = -1, f = typeof i == "function", g = vt(e) ? R(e.length) : [];
        return Ln(e, function(y) {
          g[++l] = f ? xt(i, y, o) : bi(y, i, o);
        }), g;
      }), V0 = Cs(function(e, i, o) {
        pn(e, o, i);
      });
      function Ls(e, i) {
        var o = oe(e) ? De : ou;
        return o(e, J(i, 3));
      }
      function G0(e, i, o, l) {
        return e == null ? [] : (oe(i) || (i = i == null ? [] : [i]), o = l ? r : o, oe(o) || (o = o == null ? [] : [o]), uu(e, i, o));
      }
      var X0 = Cs(function(e, i, o) {
        e[o ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Y0(e, i, o) {
        var l = oe(e) ? Bo : Dl, f = arguments.length < 3;
        return l(e, J(i, 4), o, f, Ln);
      }
      function Z0(e, i, o) {
        var l = oe(e) ? a1 : Dl, f = arguments.length < 3;
        return l(e, J(i, 4), o, f, Ql);
      }
      function K0(e, i) {
        var o = oe(e) ? On : eu;
        return o(e, Fs(J(i, 3)));
      }
      function q0(e) {
        var i = oe(e) ? Zl : Bg;
        return i(e);
      }
      function J0(e, i, o) {
        (o ? ct(e, i, o) : i === r) ? i = 1 : i = ce(i);
        var l = oe(e) ? wg : $g;
        return l(e, i);
      }
      function Q0(e) {
        var i = oe(e) ? _g : Gg;
        return i(e);
      }
      function ev(e) {
        if (e == null)
          return 0;
        if (vt(e))
          return Hs(e) ? kr(e) : e.length;
        var i = rt(e);
        return i == wt || i == _t ? e.size : ca(e).length;
      }
      function tv(e, i, o) {
        var l = oe(e) ? $o : Xg;
        return o && ct(e, i, o) && (i = r), l(e, J(i, 3));
      }
      var nv = de(function(e, i) {
        if (e == null)
          return [];
        var o = i.length;
        return o > 1 && ct(e, i[0], i[1]) ? i = [] : o > 2 && ct(i[0], i[1], i[2]) && (i = [i[0]]), uu(e, et(i, 1), []);
      }), js = j1 || function() {
        return Qe.Date.now();
      };
      function rv(e, i) {
        if (typeof i != "function")
          throw new Dt(u);
        return e = ce(e), function() {
          if (--e < 1)
            return i.apply(this, arguments);
        };
      }
      function id(e, i, o) {
        return i = o ? r : i, i = e && i == null ? e.length : i, gn(e, q, r, r, r, r, i);
      }
      function sd(e, i) {
        var o;
        if (typeof i != "function")
          throw new Dt(u);
        return e = ce(e), function() {
          return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o;
        };
      }
      var Ma = de(function(e, i, o) {
        var l = E;
        if (o.length) {
          var f = Pn(o, Lr(Ma));
          l |= K;
        }
        return gn(e, l, i, o, f);
      }), od = de(function(e, i, o) {
        var l = E | P;
        if (o.length) {
          var f = Pn(o, Lr(od));
          l |= K;
        }
        return gn(i, l, e, o, f);
      });
      function ad(e, i, o) {
        i = o ? r : i;
        var l = gn(e, N, r, r, r, r, r, i);
        return l.placeholder = ad.placeholder, l;
      }
      function cd(e, i, o) {
        i = o ? r : i;
        var l = gn(e, z, r, r, r, r, r, i);
        return l.placeholder = cd.placeholder, l;
      }
      function ld(e, i, o) {
        var l, f, g, y, x, T, L = 0, j = !1, F = !1, W = !0;
        if (typeof e != "function")
          throw new Dt(u);
        i = zt(i) || 0, je(o) && (j = !!o.leading, F = "maxWait" in o, g = F ? Ye(zt(o.maxWait) || 0, i) : g, W = "trailing" in o ? !!o.trailing : W);
        function X(We) {
          var Gt = l, wn = f;
          return l = f = r, L = We, y = e.apply(wn, Gt), y;
        }
        function Q(We) {
          return L = We, x = Si(he, i), j ? X(We) : y;
        }
        function ue(We) {
          var Gt = We - T, wn = We - L, Ed = i - Gt;
          return F ? nt(Ed, g - wn) : Ed;
        }
        function ee(We) {
          var Gt = We - T, wn = We - L;
          return T === r || Gt >= i || Gt < 0 || F && wn >= g;
        }
        function he() {
          var We = js();
          if (ee(We))
            return be(We);
          x = Si(he, ue(We));
        }
        function be(We) {
          return x = r, W && l ? X(We) : (l = f = r, y);
        }
        function Ct() {
          x !== r && yu(x), L = 0, l = T = f = x = r;
        }
        function lt() {
          return x === r ? y : be(js());
        }
        function kt() {
          var We = js(), Gt = ee(We);
          if (l = arguments, f = this, T = We, Gt) {
            if (x === r)
              return Q(T);
            if (F)
              return yu(x), x = Si(he, i), X(T);
          }
          return x === r && (x = Si(he, i)), y;
        }
        return kt.cancel = Ct, kt.flush = lt, kt;
      }
      var iv = de(function(e, i) {
        return Jl(e, 1, i);
      }), sv = de(function(e, i, o) {
        return Jl(e, zt(i) || 0, o);
      });
      function ov(e) {
        return gn(e, G);
      }
      function Ns(e, i) {
        if (typeof e != "function" || i != null && typeof i != "function")
          throw new Dt(u);
        var o = function() {
          var l = arguments, f = i ? i.apply(this, l) : l[0], g = o.cache;
          if (g.has(f))
            return g.get(f);
          var y = e.apply(this, l);
          return o.cache = g.set(f, y) || g, y;
        };
        return o.cache = new (Ns.Cache || hn)(), o;
      }
      Ns.Cache = hn;
      function Fs(e) {
        if (typeof e != "function")
          throw new Dt(u);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, i[0]);
            case 2:
              return !e.call(this, i[0], i[1]);
            case 3:
              return !e.call(this, i[0], i[1], i[2]);
          }
          return !e.apply(this, i);
        };
      }
      function av(e) {
        return sd(2, e);
      }
      var cv = Yg(function(e, i) {
        i = i.length == 1 && oe(i[0]) ? De(i[0], St(J())) : De(et(i, 1), St(J()));
        var o = i.length;
        return de(function(l) {
          for (var f = -1, g = nt(l.length, o); ++f < g; )
            l[f] = i[f].call(this, l[f]);
          return xt(e, this, l);
        });
      }), Pa = de(function(e, i) {
        var o = Pn(i, Lr(Pa));
        return gn(e, K, r, i, o);
      }), ud = de(function(e, i) {
        var o = Pn(i, Lr(ud));
        return gn(e, Z, r, i, o);
      }), lv = mn(function(e, i) {
        return gn(e, Y, r, r, r, i);
      });
      function uv(e, i) {
        if (typeof e != "function")
          throw new Dt(u);
        return i = i === r ? i : ce(i), de(e, i);
      }
      function dv(e, i) {
        if (typeof e != "function")
          throw new Dt(u);
        return i = i == null ? 0 : Ye(ce(i), 0), de(function(o) {
          var l = o[i], f = Fn(o, 0, i);
          return l && Mn(f, l), xt(e, this, f);
        });
      }
      function fv(e, i, o) {
        var l = !0, f = !0;
        if (typeof e != "function")
          throw new Dt(u);
        return je(o) && (l = "leading" in o ? !!o.leading : l, f = "trailing" in o ? !!o.trailing : f), ld(e, i, {
          leading: l,
          maxWait: i,
          trailing: f
        });
      }
      function hv(e) {
        return id(e, 1);
      }
      function pv(e, i) {
        return Pa(va(i), e);
      }
      function gv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function mv(e) {
        return jt(e, C);
      }
      function vv(e, i) {
        return i = typeof i == "function" ? i : r, jt(e, C, i);
      }
      function bv(e) {
        return jt(e, _ | C);
      }
      function yv(e, i) {
        return i = typeof i == "function" ? i : r, jt(e, _ | C, i);
      }
      function wv(e, i) {
        return i == null || ql(e, i, qe(i));
      }
      function Vt(e, i) {
        return e === i || e !== e && i !== i;
      }
      var _v = Rs(sa), xv = Rs(function(e, i) {
        return e >= i;
      }), ir = ru(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ru : function(e) {
        return ze(e) && Ce.call(e, "callee") && !Bl.call(e, "callee");
      }, oe = R.isArray, Sv = Il ? St(Il) : Og;
      function vt(e) {
        return e != null && zs(e.length) && !bn(e);
      }
      function Ue(e) {
        return ze(e) && vt(e);
      }
      function Iv(e) {
        return e === !0 || e === !1 || ze(e) && at(e) == Kt;
      }
      var zn = F1 || $a, Tv = Tl ? St(Tl) : Mg;
      function Cv(e) {
        return ze(e) && e.nodeType === 1 && !Ii(e);
      }
      function kv(e) {
        if (e == null)
          return !0;
        if (vt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || zn(e) || jr(e) || ir(e)))
          return !e.length;
        var i = rt(e);
        if (i == wt || i == _t)
          return !e.size;
        if (xi(e))
          return !ca(e).length;
        for (var o in e)
          if (Ce.call(e, o))
            return !1;
        return !0;
      }
      function Ev(e, i) {
        return yi(e, i);
      }
      function Av(e, i, o) {
        o = typeof o == "function" ? o : r;
        var l = o ? o(e, i) : r;
        return l === r ? yi(e, i, r, o) : !!l;
      }
      function Da(e) {
        if (!ze(e))
          return !1;
        var i = at(e);
        return i == mr || i == gr || typeof e.message == "string" && typeof e.name == "string" && !Ii(e);
      }
      function Rv(e) {
        return typeof e == "number" && Vl(e);
      }
      function bn(e) {
        if (!je(e))
          return !1;
        var i = at(e);
        return i == Xn || i == Zi || i == qr || i == vr;
      }
      function dd(e) {
        return typeof e == "number" && e == ce(e);
      }
      function zs(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ke;
      }
      function je(e) {
        var i = typeof e;
        return e != null && (i == "object" || i == "function");
      }
      function ze(e) {
        return e != null && typeof e == "object";
      }
      var fd = Cl ? St(Cl) : Dg;
      function Ov(e, i) {
        return e === i || aa(e, i, Ia(i));
      }
      function Mv(e, i, o) {
        return o = typeof o == "function" ? o : r, aa(e, i, Ia(i), o);
      }
      function Pv(e) {
        return hd(e) && e != +e;
      }
      function Dv(e) {
        if (vm(e))
          throw new se(c);
        return iu(e);
      }
      function Lv(e) {
        return e === null;
      }
      function jv(e) {
        return e == null;
      }
      function hd(e) {
        return typeof e == "number" || ze(e) && at(e) == qt;
      }
      function Ii(e) {
        if (!ze(e) || at(e) != Ot)
          return !1;
        var i = fs(e);
        if (i === null)
          return !0;
        var o = Ce.call(i, "constructor") && i.constructor;
        return typeof o == "function" && o instanceof o && cs.call(o) == M1;
      }
      var La = kl ? St(kl) : Lg;
      function Nv(e) {
        return dd(e) && e >= -9007199254740991 && e <= ke;
      }
      var pd = El ? St(El) : jg;
      function Hs(e) {
        return typeof e == "string" || !oe(e) && ze(e) && at(e) == un;
      }
      function Tt(e) {
        return typeof e == "symbol" || ze(e) && at(e) == br;
      }
      var jr = Al ? St(Al) : Ng;
      function Fv(e) {
        return e === r;
      }
      function zv(e) {
        return ze(e) && rt(e) == kn;
      }
      function Hv(e) {
        return ze(e) && at(e) == Ki;
      }
      var Uv = Rs(la), Wv = Rs(function(e, i) {
        return e <= i;
      });
      function gd(e) {
        if (!e)
          return [];
        if (vt(e))
          return Hs(e) ? Bt(e) : mt(e);
        if (di && e[di])
          return w1(e[di]());
        var i = rt(e), o = i == wt ? Ko : i == _t ? ss : Nr;
        return o(e);
      }
      function yn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = zt(e), e === Ee || e === -1 / 0) {
          var i = e < 0 ? -1 : 1;
          return i * $e;
        }
        return e === e ? e : 0;
      }
      function ce(e) {
        var i = yn(e), o = i % 1;
        return i === i ? o ? i - o : i : 0;
      }
      function md(e) {
        return e ? er(ce(e), 0, ie) : 0;
      }
      function zt(e) {
        if (typeof e == "number")
          return e;
        if (Tt(e))
          return pt;
        if (je(e)) {
          var i = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = je(i) ? i + "" : i;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Ll(e);
        var o = fe.test(e);
        return o || Le.test(e) ? r1(e.slice(2), o ? 2 : 8) : pe.test(e) ? pt : +e;
      }
      function vd(e) {
        return Qt(e, bt(e));
      }
      function Bv(e) {
        return e ? er(ce(e), -9007199254740991, ke) : e === 0 ? e : 0;
      }
      function Te(e) {
        return e == null ? "" : It(e);
      }
      var $v = Pr(function(e, i) {
        if (xi(i) || vt(i)) {
          Qt(i, qe(i), e);
          return;
        }
        for (var o in i)
          Ce.call(i, o) && mi(e, o, i[o]);
      }), bd = Pr(function(e, i) {
        Qt(i, bt(i), e);
      }), Us = Pr(function(e, i, o, l) {
        Qt(i, bt(i), e, l);
      }), Vv = Pr(function(e, i, o, l) {
        Qt(i, qe(i), e, l);
      }), Gv = mn(na);
      function Xv(e, i) {
        var o = Mr(e);
        return i == null ? o : Kl(o, i);
      }
      var Yv = de(function(e, i) {
        e = Ae(e);
        var o = -1, l = i.length, f = l > 2 ? i[2] : r;
        for (f && ct(i[0], i[1], f) && (l = 1); ++o < l; )
          for (var g = i[o], y = bt(g), x = -1, T = y.length; ++x < T; ) {
            var L = y[x], j = e[L];
            (j === r || Vt(j, Ar[L]) && !Ce.call(e, L)) && (e[L] = g[L]);
          }
        return e;
      }), Zv = de(function(e) {
        return e.push(r, Lu), xt(yd, r, e);
      });
      function Kv(e, i) {
        return Ol(e, J(i, 3), Jt);
      }
      function qv(e, i) {
        return Ol(e, J(i, 3), ia);
      }
      function Jv(e, i) {
        return e == null ? e : ra(e, J(i, 3), bt);
      }
      function Qv(e, i) {
        return e == null ? e : tu(e, J(i, 3), bt);
      }
      function eb(e, i) {
        return e && Jt(e, J(i, 3));
      }
      function tb(e, i) {
        return e && ia(e, J(i, 3));
      }
      function nb(e) {
        return e == null ? [] : xs(e, qe(e));
      }
      function rb(e) {
        return e == null ? [] : xs(e, bt(e));
      }
      function ja(e, i, o) {
        var l = e == null ? r : tr(e, i);
        return l === r ? o : l;
      }
      function ib(e, i) {
        return e != null && Fu(e, i, kg);
      }
      function Na(e, i) {
        return e != null && Fu(e, i, Eg);
      }
      var sb = Ru(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = ls.call(i)), e[i] = o;
      }, za(yt)), ob = Ru(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = ls.call(i)), Ce.call(e, i) ? e[i].push(o) : e[i] = [o];
      }, J), ab = de(bi);
      function qe(e) {
        return vt(e) ? Yl(e) : ca(e);
      }
      function bt(e) {
        return vt(e) ? Yl(e, !0) : Fg(e);
      }
      function cb(e, i) {
        var o = {};
        return i = J(i, 3), Jt(e, function(l, f, g) {
          pn(o, i(l, f, g), l);
        }), o;
      }
      function lb(e, i) {
        var o = {};
        return i = J(i, 3), Jt(e, function(l, f, g) {
          pn(o, f, i(l, f, g));
        }), o;
      }
      var ub = Pr(function(e, i, o) {
        Ss(e, i, o);
      }), yd = Pr(function(e, i, o, l) {
        Ss(e, i, o, l);
      }), db = mn(function(e, i) {
        var o = {};
        if (e == null)
          return o;
        var l = !1;
        i = De(i, function(g) {
          return g = Nn(g, e), l || (l = g.length > 1), g;
        }), Qt(e, xa(e), o), l && (o = jt(o, _ | S | C, sm));
        for (var f = i.length; f--; )
          pa(o, i[f]);
        return o;
      });
      function fb(e, i) {
        return wd(e, Fs(J(i)));
      }
      var hb = mn(function(e, i) {
        return e == null ? {} : Hg(e, i);
      });
      function wd(e, i) {
        if (e == null)
          return {};
        var o = De(xa(e), function(l) {
          return [l];
        });
        return i = J(i), du(e, o, function(l, f) {
          return i(l, f[0]);
        });
      }
      function pb(e, i, o) {
        i = Nn(i, e);
        var l = -1, f = i.length;
        for (f || (f = 1, e = r); ++l < f; ) {
          var g = e == null ? r : e[en(i[l])];
          g === r && (l = f, g = o), e = bn(g) ? g.call(e) : g;
        }
        return e;
      }
      function gb(e, i, o) {
        return e == null ? e : wi(e, i, o);
      }
      function mb(e, i, o, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : wi(e, i, o, l);
      }
      var _d = Pu(qe), xd = Pu(bt);
      function vb(e, i, o) {
        var l = oe(e), f = l || zn(e) || jr(e);
        if (i = J(i, 4), o == null) {
          var g = e && e.constructor;
          f ? o = l ? new g() : [] : je(e) ? o = bn(g) ? Mr(fs(e)) : {} : o = {};
        }
        return (f ? Pt : Jt)(e, function(y, x, T) {
          return i(o, y, x, T);
        }), o;
      }
      function bb(e, i) {
        return e == null ? !0 : pa(e, i);
      }
      function yb(e, i, o) {
        return e == null ? e : mu(e, i, va(o));
      }
      function wb(e, i, o, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : mu(e, i, va(o), l);
      }
      function Nr(e) {
        return e == null ? [] : Zo(e, qe(e));
      }
      function _b(e) {
        return e == null ? [] : Zo(e, bt(e));
      }
      function xb(e, i, o) {
        return o === r && (o = i, i = r), o !== r && (o = zt(o), o = o === o ? o : 0), i !== r && (i = zt(i), i = i === i ? i : 0), er(zt(e), i, o);
      }
      function Sb(e, i, o) {
        return i = yn(i), o === r ? (o = i, i = 0) : o = yn(o), e = zt(e), Ag(e, i, o);
      }
      function Ib(e, i, o) {
        if (o && typeof o != "boolean" && ct(e, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof e == "boolean" && (o = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = yn(e), i === r ? (i = e, e = 0) : i = yn(i)), e > i) {
          var l = e;
          e = i, i = l;
        }
        if (o || e % 1 || i % 1) {
          var f = Gl();
          return nt(e + f * (i - e + n1("1e-" + ((f + "").length - 1))), i);
        }
        return da(e, i);
      }
      var Tb = Dr(function(e, i, o) {
        return i = i.toLowerCase(), e + (o ? Sd(i) : i);
      });
      function Sd(e) {
        return Fa(Te(e).toLowerCase());
      }
      function Id(e) {
        return e = Te(e), e && e.replace(gt, g1).replace(Gp, "");
      }
      function Cb(e, i, o) {
        e = Te(e), i = It(i);
        var l = e.length;
        o = o === r ? l : er(ce(o), 0, l);
        var f = o;
        return o -= i.length, o >= 0 && e.slice(o, f) == i;
      }
      function kb(e) {
        return e = Te(e), e && Co.test(e) ? e.replace(xr, m1) : e;
      }
      function Eb(e) {
        return e = Te(e), e && ts.test(e) ? e.replace(Sr, "\\$&") : e;
      }
      var Ab = Dr(function(e, i, o) {
        return e + (o ? "-" : "") + i.toLowerCase();
      }), Rb = Dr(function(e, i, o) {
        return e + (o ? " " : "") + i.toLowerCase();
      }), Ob = ku("toLowerCase");
      function Mb(e, i, o) {
        e = Te(e), i = ce(i);
        var l = i ? kr(e) : 0;
        if (!i || l >= i)
          return e;
        var f = (i - l) / 2;
        return As(ms(f), o) + e + As(gs(f), o);
      }
      function Pb(e, i, o) {
        e = Te(e), i = ce(i);
        var l = i ? kr(e) : 0;
        return i && l < i ? e + As(i - l, o) : e;
      }
      function Db(e, i, o) {
        e = Te(e), i = ce(i);
        var l = i ? kr(e) : 0;
        return i && l < i ? As(i - l, o) + e : e;
      }
      function Lb(e, i, o) {
        return o || i == null ? i = 0 : i && (i = +i), W1(Te(e).replace(ci, ""), i || 0);
      }
      function jb(e, i, o) {
        return (o ? ct(e, i, o) : i === r) ? i = 1 : i = ce(i), fa(Te(e), i);
      }
      function Nb() {
        var e = arguments, i = Te(e[0]);
        return e.length < 3 ? i : i.replace(e[1], e[2]);
      }
      var Fb = Dr(function(e, i, o) {
        return e + (o ? "_" : "") + i.toLowerCase();
      });
      function zb(e, i, o) {
        return o && typeof o != "number" && ct(e, i, o) && (i = o = r), o = o === r ? ie : o >>> 0, o ? (e = Te(e), e && (typeof i == "string" || i != null && !La(i)) && (i = It(i), !i && Cr(e)) ? Fn(Bt(e), 0, o) : e.split(i, o)) : [];
      }
      var Hb = Dr(function(e, i, o) {
        return e + (o ? " " : "") + Fa(i);
      });
      function Ub(e, i, o) {
        return e = Te(e), o = o == null ? 0 : er(ce(o), 0, e.length), i = It(i), e.slice(o, o + i.length) == i;
      }
      function Wb(e, i, o) {
        var l = p.templateSettings;
        o && ct(e, i, o) && (i = r), e = Te(e), i = Us({}, i, l, Du);
        var f = Us({}, i.imports, l.imports, Du), g = qe(f), y = Zo(f, g), x, T, L = 0, j = i.interpolate || Wt, F = "__p += '", W = qo(
          (i.escape || Wt).source + "|" + j.source + "|" + (j === ai ? we : Wt).source + "|" + (i.evaluate || Wt).source + "|$",
          "g"
        ), X = "//# sourceURL=" + (Ce.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qp + "]") + `
`;
        e.replace(W, function(ee, he, be, Ct, lt, kt) {
          return be || (be = Ct), F += e.slice(L, kt).replace(dn, v1), he && (x = !0, F += `' +
__e(` + he + `) +
'`), lt && (T = !0, F += `';
` + lt + `;
__p += '`), be && (F += `' +
((__t = (` + be + `)) == null ? '' : __t) +
'`), L = kt + ee.length, ee;
        }), F += `';
`;
        var Q = Ce.call(i, "variable") && i.variable;
        if (!Q)
          F = `with (obj) {
` + F + `
}
`;
        else if (B.test(Q))
          throw new se(d);
        F = (T ? F.replace(oi, "") : F).replace(qi, "$1").replace(Rn, "$1;"), F = "function(" + (Q || "obj") + `) {
` + (Q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var ue = Cd(function() {
          return xe(g, X + "return " + F).apply(r, y);
        });
        if (ue.source = F, Da(ue))
          throw ue;
        return ue;
      }
      function Bb(e) {
        return Te(e).toLowerCase();
      }
      function $b(e) {
        return Te(e).toUpperCase();
      }
      function Vb(e, i, o) {
        if (e = Te(e), e && (o || i === r))
          return Ll(e);
        if (!e || !(i = It(i)))
          return e;
        var l = Bt(e), f = Bt(i), g = jl(l, f), y = Nl(l, f) + 1;
        return Fn(l, g, y).join("");
      }
      function Gb(e, i, o) {
        if (e = Te(e), e && (o || i === r))
          return e.slice(0, zl(e) + 1);
        if (!e || !(i = It(i)))
          return e;
        var l = Bt(e), f = Nl(l, Bt(i)) + 1;
        return Fn(l, 0, f).join("");
      }
      function Xb(e, i, o) {
        if (e = Te(e), e && (o || i === r))
          return e.replace(ci, "");
        if (!e || !(i = It(i)))
          return e;
        var l = Bt(e), f = jl(l, Bt(i));
        return Fn(l, f).join("");
      }
      function Yb(e, i) {
        var o = te, l = ne;
        if (je(i)) {
          var f = "separator" in i ? i.separator : f;
          o = "length" in i ? ce(i.length) : o, l = "omission" in i ? It(i.omission) : l;
        }
        e = Te(e);
        var g = e.length;
        if (Cr(e)) {
          var y = Bt(e);
          g = y.length;
        }
        if (o >= g)
          return e;
        var x = o - kr(l);
        if (x < 1)
          return l;
        var T = y ? Fn(y, 0, x).join("") : e.slice(0, x);
        if (f === r)
          return T + l;
        if (y && (x += T.length - x), La(f)) {
          if (e.slice(x).search(f)) {
            var L, j = T;
            for (f.global || (f = qo(f.source, Te(Ie.exec(f)) + "g")), f.lastIndex = 0; L = f.exec(j); )
              var F = L.index;
            T = T.slice(0, F === r ? x : F);
          }
        } else if (e.indexOf(It(f), x) != x) {
          var W = T.lastIndexOf(f);
          W > -1 && (T = T.slice(0, W));
        }
        return T + l;
      }
      function Zb(e) {
        return e = Te(e), e && Ji.test(e) ? e.replace(_r, I1) : e;
      }
      var Kb = Dr(function(e, i, o) {
        return e + (o ? " " : "") + i.toUpperCase();
      }), Fa = ku("toUpperCase");
      function Td(e, i, o) {
        return e = Te(e), i = o ? r : i, i === r ? y1(e) ? k1(e) : u1(e) : e.match(i) || [];
      }
      var Cd = de(function(e, i) {
        try {
          return xt(e, r, i);
        } catch (o) {
          return Da(o) ? o : new se(o);
        }
      }), qb = mn(function(e, i) {
        return Pt(i, function(o) {
          o = en(o), pn(e, o, Ma(e[o], e));
        }), e;
      });
      function Jb(e) {
        var i = e == null ? 0 : e.length, o = J();
        return e = i ? De(e, function(l) {
          if (typeof l[1] != "function")
            throw new Dt(u);
          return [o(l[0]), l[1]];
        }) : [], de(function(l) {
          for (var f = -1; ++f < i; ) {
            var g = e[f];
            if (xt(g[0], this, l))
              return xt(g[1], this, l);
          }
        });
      }
      function Qb(e) {
        return Ig(jt(e, _));
      }
      function za(e) {
        return function() {
          return e;
        };
      }
      function e2(e, i) {
        return e == null || e !== e ? i : e;
      }
      var t2 = Au(), n2 = Au(!0);
      function yt(e) {
        return e;
      }
      function Ha(e) {
        return su(typeof e == "function" ? e : jt(e, _));
      }
      function r2(e) {
        return au(jt(e, _));
      }
      function i2(e, i) {
        return cu(e, jt(i, _));
      }
      var s2 = de(function(e, i) {
        return function(o) {
          return bi(o, e, i);
        };
      }), o2 = de(function(e, i) {
        return function(o) {
          return bi(e, o, i);
        };
      });
      function Ua(e, i, o) {
        var l = qe(i), f = xs(i, l);
        o == null && !(je(i) && (f.length || !l.length)) && (o = i, i = e, e = this, f = xs(i, qe(i)));
        var g = !(je(o) && "chain" in o) || !!o.chain, y = bn(e);
        return Pt(f, function(x) {
          var T = i[x];
          e[x] = T, y && (e.prototype[x] = function() {
            var L = this.__chain__;
            if (g || L) {
              var j = e(this.__wrapped__), F = j.__actions__ = mt(this.__actions__);
              return F.push({ func: T, args: arguments, thisArg: e }), j.__chain__ = L, j;
            }
            return T.apply(e, Mn([this.value()], arguments));
          });
        }), e;
      }
      function a2() {
        return Qe._ === this && (Qe._ = P1), this;
      }
      function Wa() {
      }
      function c2(e) {
        return e = ce(e), de(function(i) {
          return lu(i, e);
        });
      }
      var l2 = ya(De), u2 = ya(Rl), d2 = ya($o);
      function kd(e) {
        return Ca(e) ? Vo(en(e)) : Ug(e);
      }
      function f2(e) {
        return function(i) {
          return e == null ? r : tr(e, i);
        };
      }
      var h2 = Ou(), p2 = Ou(!0);
      function Ba() {
        return [];
      }
      function $a() {
        return !1;
      }
      function g2() {
        return {};
      }
      function m2() {
        return "";
      }
      function v2() {
        return !0;
      }
      function b2(e, i) {
        if (e = ce(e), e < 1 || e > ke)
          return [];
        var o = ie, l = nt(e, ie);
        i = J(i), e -= ie;
        for (var f = Yo(l, i); ++o < e; )
          i(o);
        return f;
      }
      function y2(e) {
        return oe(e) ? De(e, en) : Tt(e) ? [e] : mt(Xu(Te(e)));
      }
      function w2(e) {
        var i = ++O1;
        return Te(e) + i;
      }
      var _2 = Es(function(e, i) {
        return e + i;
      }, 0), x2 = wa("ceil"), S2 = Es(function(e, i) {
        return e / i;
      }, 1), I2 = wa("floor");
      function T2(e) {
        return e && e.length ? _s(e, yt, sa) : r;
      }
      function C2(e, i) {
        return e && e.length ? _s(e, J(i, 2), sa) : r;
      }
      function k2(e) {
        return Pl(e, yt);
      }
      function E2(e, i) {
        return Pl(e, J(i, 2));
      }
      function A2(e) {
        return e && e.length ? _s(e, yt, la) : r;
      }
      function R2(e, i) {
        return e && e.length ? _s(e, J(i, 2), la) : r;
      }
      var O2 = Es(function(e, i) {
        return e * i;
      }, 1), M2 = wa("round"), P2 = Es(function(e, i) {
        return e - i;
      }, 0);
      function D2(e) {
        return e && e.length ? Xo(e, yt) : 0;
      }
      function L2(e, i) {
        return e && e.length ? Xo(e, J(i, 2)) : 0;
      }
      return p.after = rv, p.ary = id, p.assign = $v, p.assignIn = bd, p.assignInWith = Us, p.assignWith = Vv, p.at = Gv, p.before = sd, p.bind = Ma, p.bindAll = qb, p.bindKey = od, p.castArray = gv, p.chain = td, p.chunk = Im, p.compact = Tm, p.concat = Cm, p.cond = Jb, p.conforms = Qb, p.constant = za, p.countBy = D0, p.create = Xv, p.curry = ad, p.curryRight = cd, p.debounce = ld, p.defaults = Yv, p.defaultsDeep = Zv, p.defer = iv, p.delay = sv, p.difference = km, p.differenceBy = Em, p.differenceWith = Am, p.drop = Rm, p.dropRight = Om, p.dropRightWhile = Mm, p.dropWhile = Pm, p.fill = Dm, p.filter = j0, p.flatMap = z0, p.flatMapDeep = H0, p.flatMapDepth = U0, p.flatten = qu, p.flattenDeep = Lm, p.flattenDepth = jm, p.flip = ov, p.flow = t2, p.flowRight = n2, p.fromPairs = Nm, p.functions = nb, p.functionsIn = rb, p.groupBy = W0, p.initial = zm, p.intersection = Hm, p.intersectionBy = Um, p.intersectionWith = Wm, p.invert = sb, p.invertBy = ob, p.invokeMap = $0, p.iteratee = Ha, p.keyBy = V0, p.keys = qe, p.keysIn = bt, p.map = Ls, p.mapKeys = cb, p.mapValues = lb, p.matches = r2, p.matchesProperty = i2, p.memoize = Ns, p.merge = ub, p.mergeWith = yd, p.method = s2, p.methodOf = o2, p.mixin = Ua, p.negate = Fs, p.nthArg = c2, p.omit = db, p.omitBy = fb, p.once = av, p.orderBy = G0, p.over = l2, p.overArgs = cv, p.overEvery = u2, p.overSome = d2, p.partial = Pa, p.partialRight = ud, p.partition = X0, p.pick = hb, p.pickBy = wd, p.property = kd, p.propertyOf = f2, p.pull = Gm, p.pullAll = Qu, p.pullAllBy = Xm, p.pullAllWith = Ym, p.pullAt = Zm, p.range = h2, p.rangeRight = p2, p.rearg = lv, p.reject = K0, p.remove = Km, p.rest = uv, p.reverse = Ra, p.sampleSize = J0, p.set = gb, p.setWith = mb, p.shuffle = Q0, p.slice = qm, p.sortBy = nv, p.sortedUniq = i0, p.sortedUniqBy = s0, p.split = zb, p.spread = dv, p.tail = o0, p.take = a0, p.takeRight = c0, p.takeRightWhile = l0, p.takeWhile = u0, p.tap = T0, p.throttle = fv, p.thru = Ds, p.toArray = gd, p.toPairs = _d, p.toPairsIn = xd, p.toPath = y2, p.toPlainObject = vd, p.transform = vb, p.unary = hv, p.union = d0, p.unionBy = f0, p.unionWith = h0, p.uniq = p0, p.uniqBy = g0, p.uniqWith = m0, p.unset = bb, p.unzip = Oa, p.unzipWith = ed, p.update = yb, p.updateWith = wb, p.values = Nr, p.valuesIn = _b, p.without = v0, p.words = Td, p.wrap = pv, p.xor = b0, p.xorBy = y0, p.xorWith = w0, p.zip = _0, p.zipObject = x0, p.zipObjectDeep = S0, p.zipWith = I0, p.entries = _d, p.entriesIn = xd, p.extend = bd, p.extendWith = Us, Ua(p, p), p.add = _2, p.attempt = Cd, p.camelCase = Tb, p.capitalize = Sd, p.ceil = x2, p.clamp = xb, p.clone = mv, p.cloneDeep = bv, p.cloneDeepWith = yv, p.cloneWith = vv, p.conformsTo = wv, p.deburr = Id, p.defaultTo = e2, p.divide = S2, p.endsWith = Cb, p.eq = Vt, p.escape = kb, p.escapeRegExp = Eb, p.every = L0, p.find = N0, p.findIndex = Zu, p.findKey = Kv, p.findLast = F0, p.findLastIndex = Ku, p.findLastKey = qv, p.floor = I2, p.forEach = nd, p.forEachRight = rd, p.forIn = Jv, p.forInRight = Qv, p.forOwn = eb, p.forOwnRight = tb, p.get = ja, p.gt = _v, p.gte = xv, p.has = ib, p.hasIn = Na, p.head = Ju, p.identity = yt, p.includes = B0, p.indexOf = Fm, p.inRange = Sb, p.invoke = ab, p.isArguments = ir, p.isArray = oe, p.isArrayBuffer = Sv, p.isArrayLike = vt, p.isArrayLikeObject = Ue, p.isBoolean = Iv, p.isBuffer = zn, p.isDate = Tv, p.isElement = Cv, p.isEmpty = kv, p.isEqual = Ev, p.isEqualWith = Av, p.isError = Da, p.isFinite = Rv, p.isFunction = bn, p.isInteger = dd, p.isLength = zs, p.isMap = fd, p.isMatch = Ov, p.isMatchWith = Mv, p.isNaN = Pv, p.isNative = Dv, p.isNil = jv, p.isNull = Lv, p.isNumber = hd, p.isObject = je, p.isObjectLike = ze, p.isPlainObject = Ii, p.isRegExp = La, p.isSafeInteger = Nv, p.isSet = pd, p.isString = Hs, p.isSymbol = Tt, p.isTypedArray = jr, p.isUndefined = Fv, p.isWeakMap = zv, p.isWeakSet = Hv, p.join = Bm, p.kebabCase = Ab, p.last = Ft, p.lastIndexOf = $m, p.lowerCase = Rb, p.lowerFirst = Ob, p.lt = Uv, p.lte = Wv, p.max = T2, p.maxBy = C2, p.mean = k2, p.meanBy = E2, p.min = A2, p.minBy = R2, p.stubArray = Ba, p.stubFalse = $a, p.stubObject = g2, p.stubString = m2, p.stubTrue = v2, p.multiply = O2, p.nth = Vm, p.noConflict = a2, p.noop = Wa, p.now = js, p.pad = Mb, p.padEnd = Pb, p.padStart = Db, p.parseInt = Lb, p.random = Ib, p.reduce = Y0, p.reduceRight = Z0, p.repeat = jb, p.replace = Nb, p.result = pb, p.round = M2, p.runInContext = I, p.sample = q0, p.size = ev, p.snakeCase = Fb, p.some = tv, p.sortedIndex = Jm, p.sortedIndexBy = Qm, p.sortedIndexOf = e0, p.sortedLastIndex = t0, p.sortedLastIndexBy = n0, p.sortedLastIndexOf = r0, p.startCase = Hb, p.startsWith = Ub, p.subtract = P2, p.sum = D2, p.sumBy = L2, p.template = Wb, p.times = b2, p.toFinite = yn, p.toInteger = ce, p.toLength = md, p.toLower = Bb, p.toNumber = zt, p.toSafeInteger = Bv, p.toString = Te, p.toUpper = $b, p.trim = Vb, p.trimEnd = Gb, p.trimStart = Xb, p.truncate = Yb, p.unescape = Zb, p.uniqueId = w2, p.upperCase = Kb, p.upperFirst = Fa, p.each = nd, p.eachRight = rd, p.first = Ju, Ua(p, function() {
        var e = {};
        return Jt(p, function(i, o) {
          Ce.call(p.prototype, o) || (e[o] = i);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, Pt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), Pt(["drop", "take"], function(e, i) {
        ge.prototype[e] = function(o) {
          o = o === r ? 1 : Ye(ce(o), 0);
          var l = this.__filtered__ && !i ? new ge(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = nt(o, l.__takeCount__) : l.__views__.push({
            size: nt(o, ie),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ge.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Pt(["filter", "map", "takeWhile"], function(e, i) {
        var o = i + 1, l = o == ye || o == _e;
        ge.prototype[e] = function(f) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: J(f, 3),
            type: o
          }), g.__filtered__ = g.__filtered__ || l, g;
        };
      }), Pt(["head", "last"], function(e, i) {
        var o = "take" + (i ? "Right" : "");
        ge.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Pt(["initial", "tail"], function(e, i) {
        var o = "drop" + (i ? "" : "Right");
        ge.prototype[e] = function() {
          return this.__filtered__ ? new ge(this) : this[o](1);
        };
      }), ge.prototype.compact = function() {
        return this.filter(yt);
      }, ge.prototype.find = function(e) {
        return this.filter(e).head();
      }, ge.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ge.prototype.invokeMap = de(function(e, i) {
        return typeof e == "function" ? new ge(this) : this.map(function(o) {
          return bi(o, e, i);
        });
      }), ge.prototype.reject = function(e) {
        return this.filter(Fs(J(e)));
      }, ge.prototype.slice = function(e, i) {
        e = ce(e);
        var o = this;
        return o.__filtered__ && (e > 0 || i < 0) ? new ge(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), i !== r && (i = ce(i), o = i < 0 ? o.dropRight(-i) : o.take(i - e)), o);
      }, ge.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ge.prototype.toArray = function() {
        return this.take(ie);
      }, Jt(ge.prototype, function(e, i) {
        var o = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), f = p[l ? "take" + (i == "last" ? "Right" : "") : i], g = l || /^find/.test(i);
        f && (p.prototype[i] = function() {
          var y = this.__wrapped__, x = l ? [1] : arguments, T = y instanceof ge, L = x[0], j = T || oe(y), F = function(he) {
            var be = f.apply(p, Mn([he], x));
            return l && W ? be[0] : be;
          };
          j && o && typeof L == "function" && L.length != 1 && (T = j = !1);
          var W = this.__chain__, X = !!this.__actions__.length, Q = g && !W, ue = T && !X;
          if (!g && j) {
            y = ue ? y : new ge(this);
            var ee = e.apply(y, x);
            return ee.__actions__.push({ func: Ds, args: [F], thisArg: r }), new Lt(ee, W);
          }
          return Q && ue ? e.apply(this, x) : (ee = this.thru(F), Q ? l ? ee.value()[0] : ee.value() : ee);
        });
      }), Pt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var i = os[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var f = arguments;
          if (l && !this.__chain__) {
            var g = this.value();
            return i.apply(oe(g) ? g : [], f);
          }
          return this[o](function(y) {
            return i.apply(oe(y) ? y : [], f);
          });
        };
      }), Jt(ge.prototype, function(e, i) {
        var o = p[i];
        if (o) {
          var l = o.name + "";
          Ce.call(Or, l) || (Or[l] = []), Or[l].push({ name: i, func: o });
        }
      }), Or[ks(r, P).name] = [{
        name: "wrapper",
        func: r
      }], ge.prototype.clone = Z1, ge.prototype.reverse = K1, ge.prototype.value = q1, p.prototype.at = C0, p.prototype.chain = k0, p.prototype.commit = E0, p.prototype.next = A0, p.prototype.plant = O0, p.prototype.reverse = M0, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = P0, p.prototype.first = p.prototype.head, di && (p.prototype[di] = R0), p;
    }, Er = E1();
    Kn ? ((Kn.exports = Er)._ = Er, Ho._ = Er) : Qe._ = Er;
  }).call(Ti);
})(Qs, Qs.exports);
var Se = Qs.exports;
const g3 = () => {
  const { trackItemIds: t, trackItemsMap: n, fps: r, trackItemDetailsMap: s } = In(), a = Se.merge(n, s);
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: t.map((c) => {
    const u = a[c];
    return p3[u.type](u, {
      fps: r
    });
  }) });
}, m3 = () => {
  const t = Yt(null), { setPlayerRef: n, duration: r, fps: s, size: a } = In();
  return Ht(() => {
    n(t);
  }, []), /* @__PURE__ */ v.jsx(_f, { className: "size-full", children: /* @__PURE__ */ v.jsx(
    z2,
    {
      ref: t,
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
}, v3 = ({ scrollLeft: t }) => {
  const n = Yt(null), { playerRef: r, fps: s, scale: a } = In(), c = Bc(r ?? void 0), u = Ve(c / s * 1e3, a.zoom) - t, [d, h] = it(!1), [m, b] = it(0), [_, S] = it(u), C = () => {
    h(!1);
  }, O = (E) => {
    h(!0);
    const P = "touches" in E ? E.touches[0].clientX : E.clientX;
    b(P), S(u);
  }, A = (E) => {
    if (d) {
      const M = ("touches" in E ? E.touches[0].clientX : E.clientX) - m, N = _ + M, z = or(N, a.zoom);
      r?.current?.seekTo(z * s / 1e3);
    }
  };
  return Ht(() => {
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
        O(E);
      },
      onTouchStart: (E) => {
        O(E);
      },
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && O(E);
      },
      style: {
        position: "absolute",
        left: 40 + Wc + u,
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
}, b3 = (t) => {
  const {
    height: n = 40,
    // Increased height to give space for the text
    longLineSize: r = 8,
    shortLineSize: s = 6,
    offsetX: a = yc + Wc,
    textOffsetY: c = 12,
    // Place the text above the lines but inside the canvas
    textFormat: u = _w,
    scrollLeft: d = 0,
    onClick: h
  } = t, { scale: m } = In(), b = Yt(null), [_, S] = it(null), [C, O] = it({
    width: 0,
    height: n
    // Increased height for text space
  });
  Ht(() => {
    const M = b.current;
    if (M) {
      const N = M.getContext("2d");
      S(N), A(M, N, d);
    }
  }, []), Ht(() => {
    _ && A(b.current, _, d);
  }, [_, d, m]);
  const A = (M, N, z) => {
    if (!M || !N) return;
    const Z = M.offsetParent.offsetWidth ?? M.offsetWidth, q = C.height;
    M.width = Z, M.height = q, E(N, z, Z, q), O({ width: Z, height: q });
  }, E = (M, N, z, K) => {
    const Z = m.zoom, q = m.unit, Y = m.segments;
    M.clearRect(0, 0, z, K), M.save(), M.strokeStyle = "#71717a", M.fillStyle = "#71717a", M.lineWidth = 1, M.font = `${gw}px ${mw}`, M.textBaseline = "top", M.translate(0.5, 0), M.beginPath();
    const G = q * Z * vo, te = Math.floor(N / G), V = Math.ceil((N + z) / G) - te;
    for (let ae = 0; ae <= V; ++ae) {
      const ye = ae + te;
      if (ye < 0) continue;
      const Oe = ye * G / Z, _e = (Oe - N / Z) * Z;
      if (_e < -G || _e >= z + G) continue;
      const Ee = u(Oe), $e = -M.measureText(Ee).width / 2;
      M.fillText(Ee, _e + $e + a, c);
    }
    for (let ae = 0; ae <= V; ++ae) {
      const ye = ae + te;
      if (ye < 0) continue;
      const _e = ye * G - N + a;
      for (let Ee = 0; Ee < Y; ++Ee) {
        const ke = _e + Ee / Y * G;
        if (ke < 0 || ke >= z) continue;
        const $e = Ee % Y ? s : r;
        $e === s ? M.strokeStyle = "#a1a1aa" : M.strokeStyle = "#d4d4d8";
        const pt = 32, [ie, Gn] = [ke, pt], [pr, Kr] = [ie, Gn + $e];
        M.beginPath(), M.moveTo(ie, Gn), M.lineTo(pr, Kr), M.stroke();
      }
    }
    M.restore();
  }, P = (M) => {
    const N = b.current;
    if (!N) return;
    const z = N.getBoundingClientRect(), Z = M.clientX - z.left + d - yc;
    h?.(Z);
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
  _f,
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
      const r = new Ec(n);
      this.setActiveObject(r);
    }
    this.requestRenderAll();
  }
}
class Wr extends an {
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
    super(n), Object.assign(this, Wr.ownDefaults), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.text = n.text || "", this.backgroundColor = n.backgroundColor || "transparent";
  }
  static createControls() {
    return {
      controls: Yh()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Wr.ownDefaults
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
function Bn(t, n, r, s, a) {
  t.save(), t.translate(n, r), t.rotate(xf.degreesToRadians(90 + a.angle)), t.beginPath(), t.lineWidth = 4, t.lineCap = "round", t.strokeStyle = "#dfe2e8", t.moveTo(-6, 0), t.lineTo(6, 0), t.stroke(), t.restore();
}
function Yh() {
  return {
    mr: new rn({
      x: 0.5,
      y: 0,
      actionHandler: eo,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Bn
    }),
    ml: new rn({
      x: -0.5,
      y: 0,
      actionHandler: eo,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Bn
    })
  };
}
const eo = st.wrapWithFireEvent(
  "resizing",
  st.wrapWithFixedAnchor((t, n, r, s) => {
    const a = st.getLocalPoint(
      n,
      n.originX,
      n.originY,
      r,
      s
    );
    if (x3(n.originX) || I3(n.originX) && a.x < 0 || S3(n.originX) && a.x > 0) {
      const c = n.target, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = T3(n) ? 2 : 1, h = c.width, m = Math.ceil(
        Math.abs(a.x * d / c.scaleX) - u
      );
      if (n.corner === "ml") {
        const _ = h - m;
        if (c.left + _ < 0)
          return c.set("width", c.width + c.left), !0;
      }
      return c.set("width", Math.max(m, 0)), h !== c.width;
    }
    return !1;
  })
), _3 = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
}, ve = (t) => typeof t == "string" ? _3[t] : t - 0.5, x3 = (t) => ve(t) === ve("center"), S3 = (t) => ve(t) === ve("left"), I3 = (t) => ve(t) === ve("right");
function T3(t) {
  return ve(t.originX) === ve("center") && ve(t.originY) === ve("center");
}
ot.setClass(Wr, "Text");
class Zt extends an {
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
    }), Object.assign(this, Zt.ownDefaults);
  }
  static createControls() {
    return {
      controls: C3()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Zt.ownDefaults
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
ot.setClass(Zt, "Transition");
const C3 = () => ({
  mr: new rn({
    x: 0.5,
    y: 0,
    actionHandler: Kd,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: Bn
  }),
  ml: new rn({
    x: -0.5,
    y: 0,
    actionHandler: Kd,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: Bn
  })
});
ot.setClass(Zt, "Transition");
const { wrapWithFireEvent: k3, getLocalPoint: E3 } = st, wc = "center", A3 = "left", R3 = "right";
function O3(t) {
  return (n, r, s, a) => {
    const { target: c, originX: u, originY: d } = r, h = c.getRelativeCenterPoint(), m = c.translateToOriginPoint(
      h,
      u,
      d
    ), b = t(n, r, s, a);
    return c.setPositionByOrigin(m, u, d), b;
  };
}
const M3 = (t, n, r, s) => {
  const a = E3(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (ve(n.originX) === ve(wc) || ve(n.originX) === ve(R3) && a.x < 0 || ve(n.originX) === ve(A3) && a.x > 0) {
    const { target: c } = n, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = P3(n) ? 2 : 1, h = c.width, m = Math.ceil(
      Math.abs(a.x * d / c.scaleX) - u
    ), b = or(m, c.tScale);
    return b >= 1500 || b < 500 ? !1 : (c.set("width", Math.max(m, 0)), c.set("duration", b), c.setCoords(), c.canvas && c.canvas.renderAll(), h !== c.width);
  }
  return !1;
};
function P3(t) {
  return ve(t.originX) === ve(wc) && ve(t.originY) === ve(wc);
}
const Kd = k3(
  "resizing",
  O3(M3)
);
class Li extends an {
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
    super(n), this.id = n.id, this.for = n.for, Object.assign(this, Li.ownDefaults);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Li.ownDefaults
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
ot.setClass(Li, "Placeholder");
const D3 = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 }
}, yo = "rgba(0, 216, 214, 1.0)", Ka = (t, n, r) => new an({
  top: t,
  left: 0,
  strokeWidth: 0,
  fill: "transparent",
  selectable: !0,
  height: r,
  width: n
});
class Oi extends Ac {
  static type = "Helper";
  static defaultSettings = {
    selectable: !1,
    evented: !1
  };
  static ownDefaults = { ...Oi.defaultSettings };
  guide;
  topGuide;
  bottomGuide;
  id;
  metadata = {};
  tScale;
  kind;
  constructor(n) {
    const r = D3[n.kind], s = Ka(0, n.width, r.top), a = Ka(r.top, n.width, r.guideHeight), c = Ka(
      r.top + r.guideHeight,
      n.width,
      r.bottom
    );
    super([s, a, c], {
      ...Oi.defaultSettings,
      ...n
    }), this.topGuide = s, this.guide = a, this.bottomGuide = c, this.id = n.id, this.metadata = n.metadata ?? {}, this.tScale = n.tScale, this.kind = n.kind;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Oi.defaultSettings
    };
  }
  updateCoords(n) {
    this.scaleToWidth(n), this.set("scaleY", 1);
  }
  setSelected(n) {
    this.guide.set("fill", n ? yo : "transparent");
  }
}
const Vi = Oi;
ot.setClass(Vi, "Helper");
class ar extends an {
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
    super(n), Object.assign(this, ar.ownDefaults), this.id = n.id, this.accepts = n.accepts || ["audio", "video", "image", "text"], this.items = n.items || [], this.metadata = n.metadata;
  }
  static getDefaults() {
    return { ...super.getDefaults(), ...ar.ownDefaults };
  }
  updateCoords(n) {
    this.width = n;
  }
}
ot.setClass(ar, "Track");
class to extends an {
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
    super(n), this.itemType = "image", this.isSelected = !1, Object.assign(this, to.ownDefaults), this.id = n.id, this.src = n.src, this.display = n.display, this.tScale = n.tScale;
  }
  static createControls() {
    return {
      controls: Yh()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...to.ownDefaults
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
    ), n.lineWidth = 2, n.strokeStyle = yo, n.stroke(), n.restore());
  }
}
const Vc = to;
ot.setClass(Vc, "Image");
class Yr extends an {
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
    super(Object.assign({}, Yr.defaultProps, n)), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.trim = n.trim;
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
    ), n.lineWidth = 2, n.strokeStyle = yo, n.stroke(), n.restore());
  }
}
ot.setClass(Yr, "Video");
const L3 = () => ({
  mr: new rn({
    x: 0.5,
    y: 0,
    render: Bn,
    actionHandler: qd,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new rn({
    x: -0.5,
    y: 0,
    render: Bn,
    actionHandler: qd,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: j3, getLocalPoint: N3 } = st, F3 = (t, n, r, s) => {
  const a = N3(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (ve(n.originX) === ve("center") || ve(n.originX) === ve("right") && a.x < 0 || ve(n.originX) === ve("left") && a.x > 0) {
    const { target: c } = n;
    return c.width !== c.width;
  }
  return !1;
};
function Zh(t) {
  return (n, r, s, a) => {
    const { target: c, originX: u, originY: d } = r, h = c.getRelativeCenterPoint(), m = c.translateToOriginPoint(
      h,
      u,
      d
    ), b = t(n, r, s, a);
    return c.setPositionByOrigin(m, u, d), b;
  };
}
const qd = j3(
  "resizing",
  Zh(F3)
);
class Wn extends an {
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
      ...Wn.getDefaults(),
      ...n
    }), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.trim = n.trim, this.src = n.src;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Wn.ownDefaults
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
      Wn.ownDefaults.rx
    ), n.lineWidth = 2, n.strokeStyle = yo, n.stroke(), n.restore());
  }
}
ot.setClass(Wn, "Audio");
const z3 = () => ({
  mr: new rn({
    x: 0.5,
    y: 0,
    render: Bn,
    actionHandler: Jd,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new rn({
    x: -0.5,
    y: 0,
    render: Bn,
    actionHandler: Jd,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: H3, getLocalPoint: U3 } = st, W3 = (t, n, r, s) => {
  const a = U3(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (ve(n.originX) === ve("center") || ve(n.originX) === ve("right") && a.x < 0 || ve(n.originX) === ve("left") && a.x > 0) {
    const { target: c } = n, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = B3(n) ? 2 : 1, h = c.width, m = Math.ceil(
      Math.abs(a.x * d / c.scaleX) - u
    );
    if (n.corner === "mr") {
      const b = c.trim.to, _ = m - h, S = or(_, c.tScale), C = b + S;
      if (C > c.duration) return !1;
      c.set("width", Math.max(m, 0)), c.trim.to = C;
    } else {
      if (c.left < 0) return !1;
      const b = h - m;
      if (c.left + b < 0)
        return c.set("width", c.width + c.left), !0;
      const _ = m - h, S = c.trim.from, C = or(_, c.tScale), O = S - C;
      if (O < 0) return !1;
      c.set("width", Math.max(m, 0)), c.trim.from = O;
    }
    return h !== c.width;
  }
  return !1;
};
function B3(t) {
  return ve(t.originX) === ve("center") && ve(t.originY) === ve("center");
}
const Jd = H3(
  "resizing",
  Zh(W3)
);
class no extends an {
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
    super(n), Object.assign(this, no.ownDefaults), this.id = n.id;
  }
  static createControls() {
    return {
      controls: $3()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...no.ownDefaults
    };
  }
  updateCoords() {
    const n = this.canvas;
    if (!n) return;
    const r = n.getObjects().find((c) => c.id === this.fromId);
    if (!r) return;
    const s = Ve(this.duration, this.tScale), a = r.left + r.width - s / 2;
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
    mr: new rn({
      x: 0.5,
      y: 0,
      actionHandler: eo,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Qd
    }),
    ml: new rn({
      x: -0.5,
      y: 0,
      actionHandler: eo,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Qd
    })
  };
}
function Qd(t, n, r, s, a) {
  t.save(), t.translate(n, r), t.rotate(xf.degreesToRadians(90 + a.angle)), t.lineWidth = 6, t.lineCap = "round", t.strokeStyle = "white", t.beginPath(), t.moveTo(-6, 0), t.lineTo(6, 0), t.stroke(), t.lineWidth = 4, t.strokeStyle = "black", t.beginPath(), t.moveTo(-6, 0), t.lineTo(6, 0), t.stroke(), t.restore();
}
class ro extends an {
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
    super(n), Object.assign(this, ro.ownDefaults), this.id = n.id, this.name = n.name || "item", this.durationString = "00:05", this.fill = "#27272a";
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ro.ownDefaults
    };
  }
  _render(n) {
    n.save(), super._render(n), n.beginPath(), n.rect(-this.width / 2, -this.height / 2, this.width, this.height), n.clip(), this.drawTextIdentity(n), n.restore();
  }
  drawTextIdentity(n) {
    n.font = "600 12px 'Geist variable'", n.textAlign = "left";
    const h = n.measureText(this.name).width, m = n.measureText(this.durationString).width, b = -this.height / 2 + 4, _ = -this.width / 2, S = _ + h + 8 * 2 + 4, C = h + 8 * 2;
    this.drawRoundedRect(
      n,
      _,
      b,
      C,
      20,
      4
    ), n.fillStyle = "#f4f4f5", n.fillText(this.name, _ + 8, b + 12 + 2);
    const O = m + 8 * 2;
    this.drawRoundedRect(
      n,
      S,
      b,
      O,
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
function V3(t, n) {
  n.forEach((r) => {
    Object.getOwnPropertyNames(r.prototype).forEach((s) => {
      if (s !== "constructor") {
        const a = Object.getOwnPropertyDescriptor(
          r.prototype,
          s
        );
        a && Object.defineProperty(t.prototype, s, a);
      }
    });
  });
}
const Gc = (t, n) => {
  const r = {
    x: t.size.width / 2,
    y: t.size.height / 2
  }, s = {
    x: n.width / 2,
    y: n.height / 2
  }, a = r.x - s.x, c = r.y - s.y, u = Math.min(
    t.size.width / n.width,
    t.size.height / n.height
  );
  return {
    top: `${c}px`,
    left: `${a}px`,
    transform: `scale(${u})`
  };
}, G3 = (t) => new Promise((n, r) => {
  const s = new Audio();
  s.preload = "auto", s.addEventListener("loadedmetadata", () => {
    const a = s.duration * 1e3;
    n({
      duration: a
    });
  }), s.addEventListener("error", (a) => {
    r(a);
  }), s.src = t, s.crossOrigin = "anonymous", s.load();
}), X3 = (t) => new Promise((n, r) => {
  const s = new Image();
  console.warn("Consider updating CDN config for CORS issues?"), s.onload = () => {
    const a = s.width, c = s.height;
    n({ width: a, height: c });
  }, s.onerror = (a) => {
    r(a);
  }, s.crossOrigin = "anonymous", s.src = t;
}), Y3 = (t) => new Promise((n, r) => {
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
  }), s.src = t, s.load();
}), Xs = (t, n) => {
  const r = document.createElement("div");
  Object.keys(n).forEach((a) => {
    a !== "height" && (r.style[a] = n[a]);
  }), document.body.appendChild(r), r.textContent = t, r.style.width = `${n.width}px`, r.style.fontSize = `${n.fontSize}px`;
  const s = getComputedStyle(r).height;
  return document.body.removeChild(r), parseFloat(s);
}, on = (t) => Object.keys(t).reduce((n, r) => {
  const {
    display: { to: s }
  } = t[r];
  return Math.max(n, s);
}, 0), Z3 = (t, n) => {
  if (!t)
    return {
      from: 0,
      to: n.duration
    };
  const { from: r, to: s } = t;
  return {
    from: r ?? 0,
    to: s ?? n.duration
  };
}, K3 = (t, n) => {
  const { duration: r, trim: s } = n, a = s ? s.to - s.from : r || 5e3, c = {
    from: 0,
    to: a
  };
  if (!t)
    return c;
  if (t.from !== void 0 && t.from < 0)
    return console.error(
      "'from' must be a non-negative number. Returning default display."
    ), c;
  if (t.from !== void 0 && t.to === void 0)
    return {
      from: t.from,
      to: t.from + a
    };
  if (t.to !== void 0) {
    if (t.to < 0)
      return console.error(
        "'to' must be a non-negative number. Returning default display."
      ), c;
    if (t.to < t.from)
      return console.error(
        "'to' must be greater than or equal to 'from'. Returning default display."
      ), c;
  }
  return t;
};
function q3(t, n) {
  return t.map((r) => {
    const s = r.items.filter(
      (a) => !n.includes(a)
    );
    return { ...r, items: s };
  }).filter((r) => r.items.length > 0);
}
const J3 = async (t, n) => {
  const r = t.details, s = await X3(r.src), a = Gc(n, s);
  return {
    id: t.id,
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
    metadata: t.metadata || {}
  };
}, Q3 = async (t, n) => {
  const r = t.details.src, s = await Y3(r), a = Gc(n, {
    ...s
  }), c = Z3(t.trim, { duration: s.duration }), u = {
    width: s.width,
    height: s.height,
    duration: s.duration,
    src: r,
    volume: t.details.volume ?? 100,
    top: t.details.top || a.top || "0px",
    left: t.details.left || a.left || "0px",
    text: t.details.text
    // Default volume
  };
  return {
    ...t,
    trim: c,
    type: "video",
    details: u,
    display: K3(t?.display, {
      duration: s.duration,
      trim: c
    })
  };
}, e_ = async (t) => {
  const n = t.details, r = (await G3(n.src)).duration, s = t?.display?.from ?? 0;
  return {
    id: t.id,
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
      ...t.metadata
    }
  };
}, t_ = 5e3, Kh = async (t, n) => {
  const r = t.id;
  await Ow([
    {
      fontFamily: t.details.fontFamily ?? "",
      fontUrl: t.details.fontUrl ?? ""
    }
  ]);
  const s = {
    fontFamily: t.details.fontFamily ?? "Arial",
    fontSize: t.details.fontSize ?? "16px",
    fontWeight: t.details.fontWeight ?? "normal",
    fontStyle: t.details.fontStyle ?? "normal",
    textDecoration: t.details.textDecoration ?? "none",
    textAlign: t.details.textAlign ?? "left",
    lineHeight: t.details.lineHeight ?? "normal",
    letterSpacing: t.details.letterSpacing ?? "normal",
    wordSpacing: t.details.wordSpacing ?? "normal",
    color: t.details.color ?? "#ffffff",
    backgroundColor: t.details.backgroundColor ?? "transparent",
    border: t.details.border ?? "none",
    textShadow: t.details.textShadow ?? "none",
    text: t.details.text ?? "",
    opacity: t.details.opacity ?? 100,
    width: t.details.width ?? 300,
    wordWrap: t.details.wordWrap ?? "normal",
    wordBreak: t.details.wordBreak ?? "normal",
    WebkitTextStrokeColor: t.details.WebkitTextStrokeColor ?? "#ffffff",
    WebkitTextStrokeWidth: t.details.WebkitTextStrokeWidth ?? "0px",
    top: t.details.top ?? "0px",
    left: t.details.left ?? "0px"
  }, a = Xs(t.details.text ?? "", s), c = Gc(n, {
    width: s.width ?? 0,
    height: a
  });
  return {
    id: r,
    name: "",
    type: "text",
    display: {
      from: 0,
      to: t_
    },
    details: {
      ...s,
      height: a,
      top: c.top,
      left: c.left,
      fontUrl: t.details.fontUrl,
      text: t.details.text ?? ""
    },
    metadata: {}
  };
}, n_ = (t, n) => {
  const r = t.display, s = Ve(r.from, n.tScale), a = Ve(r.to - r.from, n.tScale), c = ot.getClass("Audio") || Wn;
  return new c({
    width: a,
    height: 42,
    top: 10,
    left: s,
    id: t.id,
    display: r,
    text: t.details.text,
    trim: t.trim || {
      from: 0,
      to: t.details.duration
    },
    duration: t.details.duration,
    src: t.details.src,
    tScale: n.tScale
  });
}, r_ = (t, n) => {
  const r = Ve(t.display.from, n.tScale), s = Ve(t.details.duration || 5e3, n.tScale), a = ot.getClass("Image") || Vc;
  return new a({
    width: s,
    height: 42,
    id: t.id,
    src: t.details.src,
    tScale: n.tScale,
    top: 10,
    left: r,
    display: t.display
  });
}, i_ = (t, n) => {
  const r = Ve(t.trim.from, n.tScale), s = Ve(t.trim.to - t.trim.from, n.tScale), a = ot.getClass("Video") || Yr;
  return new a({
    width: s,
    height: 42,
    id: t.id,
    tScale: n.tScale,
    fill: "#333333",
    top: 10,
    left: r,
    display: t.trim,
    trim: t.trim,
    text: t.details.text
  });
}, s_ = (t, n) => {
  const r = t.display, s = Ve(r.from, n.tScale), a = Ve(r.to - r.from, n.tScale), c = ot.getClass("Text") || Wr;
  return new c({
    width: a,
    height: 42,
    id: t.id,
    display: r,
    top: 10,
    left: s,
    text: t.details.text,
    tScale: n.tScale
  });
}, o_ = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42
}, a_ = (t = {}) => {
  const n = { ...o_, ...t };
  return Object.fromEntries(
    Object.entries(n).filter(([, r]) => typeof r == "number")
  );
};
let c_ = class extends Wn {
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
class l_ extends Yr {
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
class qh extends Wr {
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
let u_ = class extends Vc {
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
class d_ extends ar {
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
class f_ extends Vi {
  static type = "Helper";
  constructor(n) {
    n.activeGuideFill = "#ffffff", super(n);
  }
}
class h_ {
  addTrackItem(n) {
    const r = n.id, s = qa(n, {
      tScale: this.tScale,
      sizesMap: this.sizesMap
    });
    this.add(s), this.trackItemIds.push(r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = on(this.trackItemsMap);
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
      const { id: a, left: c, width: u } = s, d = this.trackItemsMap[a], h = or(c, this.tScale), m = h + or(u, this.tScale), b = { from: h, to: m }, _ = {
        ...d,
        display: b,
        trim: s instanceof Yr || s instanceof Wn ? s.trim : void 0
      };
      s.display = b, r[a] = _;
    }), this.trackItemsMap = r, this.resumeEventListeners();
  }
  deleteActiveTrackItem() {
    const n = this.getActiveObjects();
    if (!n.length) return !1;
    const r = n.map((a) => a.id), s = Js(this.tracks, r);
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
      const d = Ve(c.display.from, this.tScale), h = Ve(
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
      id: Ke()
    }, c = this.tracks.find(
      (b) => b.items.includes(r)
    ), u = this.tracks.findIndex((b) => b.id === c?.id) + 1;
    this.findOrCreateTrack(a, { trackIndex: u });
    const d = qa(a, {
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
      id: Ke()
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
    const m = qa(u, {
      tScale: this.tScale
    });
    m && this.add(m), this.trackItemsMap[u.id] = u, this.trackItemsMap[r] = c, this.trackItemIds.push(u.id), this.updateTrackItemCoords(c.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  updateTrackItemCoords(n) {
    const r = this.getObjects().find((u) => u.id === n), s = this.trackItemsMap[n], a = Ve(s.display.from, this.tScale), c = Ve(
      s.display.to - s.display.from,
      this.tScale
    );
    r?.set({ left: a, width: c }), r?.setCoords();
  }
  updateTrackItemDetails(n, r) {
    const s = r?.trackItemId;
    if (!s) return !1;
    const a = this.trackItemsMap[s], c = { ...a.details, ...n.details };
    ("fontSize" in c || "lineHeight" in c) && (c.height = Xs(
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
      u instanceof qh && (u.text = n.details.text, this.requestRenderAll());
    }
    ("fontSize" in c || "lineHeight" in c) && (c.height = Xs(
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
      ("fontSize" in u || "lineHeight" in u) && (u.height = Xs(
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
    return this.getObjects(...p_);
  }
  setActiveTrackItemCoords() {
    this.getActiveObjects().forEach((n) => n.setCoords());
  }
  deleteTrackItemById(n) {
    const r = this.getObjects().filter(
      (s) => n.includes(s.id)
    );
    this.tracks = Js(this.tracks, n), this.trackItemsMap = Object.keys(this.trackItemsMap).filter((s) => !n.includes(s)).reduce((s, a) => (s[a] = this.trackItemsMap[a], s), {}), this.trackItemIds = this.trackItemIds.filter((s) => !n.includes(s)), this.discardActiveObject(), this.remove(...r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = on(this.trackItemsMap);
  }
  selectTrackItemByIds(n) {
    const r = this.getActiveObjects().map((a) => a.id);
    if (Se.isEqual(r, n)) return;
    const s = this.getTrackItems().filter(
      (a) => n.includes(a.id)
    );
    if (s.length === 0)
      this.discardActiveObject();
    else if (s.length === 1)
      this.setActiveObject(s[0]);
    else {
      const a = new Ec(s);
      this.setActiveObject(a);
    }
    this.requestRenderAll();
  }
}
const p_ = ["Image", "Text", "Video", "Audio", "Caption", "Template"], qa = (t, n) => {
  const s = {
    text: s_,
    video: i_,
    image: r_,
    audio: n_
  }[t.type];
  return s(t, n);
}, Fr = {
  text: 32,
  image: 40,
  video: 40,
  audio: 32,
  main: 40
}, ef = (t) => {
  switch (t) {
    case "text":
      return Fr.text;
    case "image":
      return Fr.image;
    case "video":
      return Fr.video;
    case "audio":
      return Fr.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return Fr.main;
    default:
      return Fr.text;
  }
};
class g_ {
  // Метод для нахождения или создания нового трека
  findOrCreateTrack(n, { trackId: r, trackIndex: s }) {
    const a = r;
    if (a) {
      const u = this.tracks.find((d) => d.id === a);
      if (u)
        return u.items.push(n.id), a;
    }
    const c = {
      id: Ke(),
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
    const a = ot.getClass("Helper") || Vi, c = new a({
      id: "helperLineTop",
      top: s,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: n,
      kind: "top",
      metadata: {}
    });
    s += ef("helperTop"), this.insertAt(0, c), r.forEach((d, h) => {
      if (d.type === "helper") {
        const m = ef("helperCenter"), b = new a({
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
        const m = ot.getClass("Track") || ar, b = new m({
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
const m_ = 60, v_ = 188;
function tf(t, n = 1, r = 1) {
  const s = v_ * n;
  return t * (m_ / 1e3) * s / r;
}
class b_ {
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
      const h = tf(r.duration, this.tScale), m = u.left + u.width - h / 2, b = u.height, _ = new Zt({
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
      r.kind === "none" && (_.visible = !1), this.add(_);
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
      if (r instanceof Zt) {
        const s = this.getObjects().find(
          (u) => u.id === r.fromId
        );
        if (!s) return;
        const a = tf(r.duration, this.tScale), c = s.left + s.width - a / 2;
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
          const _ = `${m.id}-${b.id}`;
          if (this.transitionIds.includes(_))
            a[_] = this.transitionsMap[_];
          else {
            const S = {
              id: _,
              duration: 1500,
              fromId: m.id,
              toId: b.id,
              kind: "none",
              trackId: u.id,
              type: "transition"
            };
            a[_] = S;
          }
          c.push(_);
        }
      }
    }), this.transitionIds = c, this.transitionsMap = a, this.renderTransitions(), n && this.resumeEventListeners();
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
}, Be = {
  guide: null,
  object: null,
  objects: []
}, L7 = () => U, j7 = (t) => {
  Object.assign(U, t);
}, y_ = (t) => {
  t.on("before:transform", Jh.bind(t));
}, w_ = (t) => {
  t.off("before:transform", Jh.bind(t));
};
function Jh(t) {
  U.canvas = this, U.activeTrackToItemsMap = {}, U.primaryTracks = {}, U.secondaryTracks = {}, U.trackTops = [], U.trackToItemsMap = {}, U.activeObjects = [], U.trackTopToIdMap = {}, U.canvas.trackIdAfterTransform = "", U.canvas.positionAfterTransform = {};
  const n = U.canvas.getActiveObject();
  if (!n) return;
  U.activeObjects = n instanceof Ec ? n.getObjects() : [n];
  const r = U.canvas.getScenePoint(t.e), s = U.canvas.getObjects("Track");
  U.originTrack = s.find((u) => {
    const d = u.getBoundingRect();
    return r.x >= d.left && r.x <= d.left + d.width && r.y >= d.top && r.y <= d.top + d.height;
  }) ?? {};
  const a = U.canvas.getObjects(
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
    U.trackToItemsMap[u.id] = d, U.trackTopToIdMap[u.top] = u.id, U.trackTops.push(u.top);
  }), U.trackTops.sort((u, d) => u - d), U.activeObjects.forEach((u) => {
    const d = s?.find(
      (m) => m.items.includes(u.id)
    );
    if (!d) return;
    const h = d.id;
    U.activeTrackToItemsMap[h] ? U.activeTrackToItemsMap[h].push(u) : U.activeTrackToItemsMap[h] = [u];
  }), U.primaryMovingObjects = U.activeObjects.filter(
    (u) => {
      const d = u.getBoundingRect();
      return r.y >= d.top && r.y <= d.top + d.height && !(u instanceof Zt);
    }
  ), U.primaryMovingObjects.forEach((u) => {
    const d = u.getBoundingRect().top, h = U.trackTopToIdMap[d];
    if (U.primaryTracks[h])
      U.primaryTracks[h].objects.push(u);
    else {
      const m = _c(
        U.trackTops,
        U.originTrack.top,
        d
      );
      if (typeof m != "number") return;
      U.primaryTracks[h] = { objects: [u], index: m };
    }
  }), U.primaryMovingObjects = U.primaryMovingObjects.sort(
    (u, d) => u.left - d.left
  ), U.secondaryMovingObjects = U.activeObjects.filter(
    (u) => !U.primaryMovingObjects.includes(u) && !(u instanceof Zt)
  ), U.secondaryMovingObjects.forEach((u) => {
    const d = u.getBoundingRect().top, h = U.trackTopToIdMap[u.getBoundingRect().top];
    if (U.secondaryTracks[h])
      U.secondaryTracks[h].objects.push(u);
    else {
      const m = _c(
        U.trackTops,
        U.originTrack.top,
        d
      );
      if (typeof m != "number") return;
      U.secondaryTracks[h] = { objects: [u], index: m };
    }
  }), U.originTrack && (U.canvas.trackOriginBeforeTransform = U.originTrack.id), n && (U.canvas.positionBeforeTransform = {
    top: n.top,
    left: n.left
  }), ("transform" in t ? t.transform : {}).action === "drag" && (U.placeholderMovingObjects = U.primaryMovingObjects.map(
    (u) => {
      const d = u.getBoundingRect();
      U.objectInitialPositions[u.id] = {
        top: d.top,
        left: d.left
      };
      const h = new Li({
        id: `${u.id}-placeholder`,
        left: d.left,
        top: d.top,
        width: d.width,
        height: d.height,
        for: __[u.type]
      });
      return h.draggedObject = u, h;
    }
  ), U.canvas.add(...U.placeholderMovingObjects));
}
function _c(t, n, r) {
  const s = t.indexOf(n), a = t.indexOf(r);
  return s === -1 || a === -1 ? null : a - s;
}
const __ = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text"
};
function Qh(t) {
  if (!Be.guide) return !1;
  t.e.preventDefault();
  const n = this, r = n.getViewportPoint(t.e);
  Be.guide.set({
    left: r.x - 16,
    top: r.y - Be.guide.height / 2
  });
  const s = x_(
    r,
    Be.objects
  );
  s && (Be.object = s, s.strokeDashArray = [5, 1], s.setSelected(!0)), Be.objects.forEach((a) => {
    a !== s && a.setSelected(!1);
  }), n.requestRenderAll();
}
function x_(t, n) {
  let r = 1 / 0, s = null;
  const a = new B2(t.x, t.y);
  return n.forEach((c) => {
    const u = S_(c, a);
    u < r && (r = u, s = c);
  }), s;
}
function S_(t, n) {
  return Math.sqrt(
    Math.pow(t.left - n.x, 2) + Math.pow(t.top - n.y, 2)
  );
}
const I_ = [
  "transition",
  "image",
  "video",
  "audio",
  "caption",
  "text"
];
function ep(t) {
  const n = t.e.dataTransfer?.types[0];
  if (!n) return;
  const r = JSON.parse(n), { type: s, duration: a = 5e3 } = r;
  if (!I_.includes(s)) return;
  const c = this;
  c.discardActiveObject();
  const u = Ve(a, c.tScale);
  Be.guide = T_({
    width: u,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type: s
  }), c.add(Be.guide), s === "transition" && (Be.objects = c.getObjects("Transition"), Be.objects.forEach((d) => {
    d.visible = !0;
  })), me.dispatch(Lh);
}
function T_({ width: t, height: n, id: r, left: s, top: a, type: c }) {
  return c === "transition" ? new no({
    top: 0,
    left: 0,
    height: 48,
    width: 48,
    id: "TransitionGuide"
  }) : new ro({
    top: a,
    left: s,
    height: n,
    width: t,
    id: r,
    name: "Rivers in the mountains"
  });
}
function tp() {
  if (!Be.guide) return;
  me.dispatch(qs);
  const t = this;
  C_(Be.objects), t.remove(Be.guide);
}
function C_(t) {
  t.forEach((n) => {
    n.strokeDashArray = [], n.setSelected(!1), n.kind === "none" && (n.visible = !1);
  });
}
var k_ = typeof global == "object" && global && global.Object === Object && global, E_ = typeof self == "object" && self && self.Object === Object && self, Xc = k_ || E_ || Function("return this")(), $n = Xc.Symbol, np = Object.prototype, A_ = np.hasOwnProperty, R_ = np.toString, Ri = $n ? $n.toStringTag : void 0;
function O_(t) {
  var n = A_.call(t, Ri), r = t[Ri];
  try {
    t[Ri] = void 0;
    var s = !0;
  } catch {
  }
  var a = R_.call(t);
  return s && (n ? t[Ri] = r : delete t[Ri]), a;
}
var M_ = Object.prototype, P_ = M_.toString;
function D_(t) {
  return P_.call(t);
}
var L_ = "[object Null]", j_ = "[object Undefined]", nf = $n ? $n.toStringTag : void 0;
function Yc(t) {
  return t == null ? t === void 0 ? j_ : L_ : nf && nf in Object(t) ? O_(t) : D_(t);
}
function Zc(t) {
  return t != null && typeof t == "object";
}
var N_ = "[object Symbol]";
function Kc(t) {
  return typeof t == "symbol" || Zc(t) && Yc(t) == N_;
}
function F_(t, n) {
  for (var r = -1, s = t == null ? 0 : t.length, a = Array(s); ++r < s; )
    a[r] = n(t[r], r, t);
  return a;
}
var Gi = Array.isArray, rf = $n ? $n.prototype : void 0, sf = rf ? rf.toString : void 0;
function rp(t) {
  if (typeof t == "string")
    return t;
  if (Gi(t))
    return F_(t, rp) + "";
  if (Kc(t))
    return sf ? sf.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function io(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
function z_(t) {
  return t;
}
var H_ = "[object AsyncFunction]", U_ = "[object Function]", W_ = "[object GeneratorFunction]", B_ = "[object Proxy]";
function $_(t) {
  if (!io(t))
    return !1;
  var n = Yc(t);
  return n == U_ || n == W_ || n == H_ || n == B_;
}
var Ja = Xc["__core-js_shared__"], of = function() {
  var t = /[^.]+$/.exec(Ja && Ja.keys && Ja.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function V_(t) {
  return !!of && of in t;
}
var G_ = Function.prototype, X_ = G_.toString;
function Y_(t) {
  if (t != null) {
    try {
      return X_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Z_ = /[\\^$.*+?()[\]{}|]/g, K_ = /^\[object .+?Constructor\]$/, q_ = Function.prototype, J_ = Object.prototype, Q_ = q_.toString, e4 = J_.hasOwnProperty, t4 = RegExp(
  "^" + Q_.call(e4).replace(Z_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function n4(t) {
  if (!io(t) || V_(t))
    return !1;
  var n = $_(t) ? t4 : K_;
  return n.test(Y_(t));
}
function r4(t, n) {
  return t?.[n];
}
function qc(t, n) {
  var r = r4(t, n);
  return n4(r) ? r : void 0;
}
function i4(t, n, r) {
  switch (r.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, r[0]);
    case 2:
      return t.call(n, r[0], r[1]);
    case 3:
      return t.call(n, r[0], r[1], r[2]);
  }
  return t.apply(n, r);
}
var s4 = 800, o4 = 16, a4 = Date.now;
function c4(t) {
  var n = 0, r = 0;
  return function() {
    var s = a4(), a = o4 - (s - r);
    if (r = s, a > 0) {
      if (++n >= s4)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function l4(t) {
  return function() {
    return t;
  };
}
var so = function() {
  try {
    var t = qc(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), u4 = so ? function(t, n) {
  return so(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: l4(n),
    writable: !0
  });
} : z_, d4 = c4(u4), f4 = 9007199254740991, h4 = /^(?:0|[1-9]\d*)$/;
function ip(t, n) {
  var r = typeof t;
  return n = n ?? f4, !!n && (r == "number" || r != "symbol" && h4.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function p4(t, n, r) {
  n == "__proto__" && so ? so(t, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[n] = r;
}
function sp(t, n) {
  return t === n || t !== t && n !== n;
}
var g4 = Object.prototype, m4 = g4.hasOwnProperty;
function v4(t, n, r) {
  var s = t[n];
  (!(m4.call(t, n) && sp(s, r)) || r === void 0 && !(n in t)) && p4(t, n, r);
}
var af = Math.max;
function b4(t, n, r) {
  return n = af(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var s = arguments, a = -1, c = af(s.length - n, 0), u = Array(c); ++a < c; )
      u[a] = s[n + a];
    a = -1;
    for (var d = Array(n + 1); ++a < n; )
      d[a] = s[a];
    return d[n] = r(u), i4(t, this, d);
  };
}
var y4 = 9007199254740991;
function w4(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= y4;
}
var _4 = "[object Arguments]";
function cf(t) {
  return Zc(t) && Yc(t) == _4;
}
var op = Object.prototype, x4 = op.hasOwnProperty, S4 = op.propertyIsEnumerable, ap = cf(/* @__PURE__ */ function() {
  return arguments;
}()) ? cf : function(t) {
  return Zc(t) && x4.call(t, "callee") && !S4.call(t, "callee");
}, I4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, T4 = /^\w*$/;
function C4(t, n) {
  if (Gi(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Kc(t) ? !0 : T4.test(t) || !I4.test(t) || n != null && t in Object(n);
}
var ji = qc(Object, "create");
function k4() {
  this.__data__ = ji ? ji(null) : {}, this.size = 0;
}
function E4(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var A4 = "__lodash_hash_undefined__", R4 = Object.prototype, O4 = R4.hasOwnProperty;
function M4(t) {
  var n = this.__data__;
  if (ji) {
    var r = n[t];
    return r === A4 ? void 0 : r;
  }
  return O4.call(n, t) ? n[t] : void 0;
}
var P4 = Object.prototype, D4 = P4.hasOwnProperty;
function L4(t) {
  var n = this.__data__;
  return ji ? n[t] !== void 0 : D4.call(n, t);
}
var j4 = "__lodash_hash_undefined__";
function N4(t, n) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = ji && n === void 0 ? j4 : n, this;
}
function cr(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
cr.prototype.clear = k4;
cr.prototype.delete = E4;
cr.prototype.get = M4;
cr.prototype.has = L4;
cr.prototype.set = N4;
function F4() {
  this.__data__ = [], this.size = 0;
}
function wo(t, n) {
  for (var r = t.length; r--; )
    if (sp(t[r][0], n))
      return r;
  return -1;
}
var z4 = Array.prototype, H4 = z4.splice;
function U4(t) {
  var n = this.__data__, r = wo(n, t);
  if (r < 0)
    return !1;
  var s = n.length - 1;
  return r == s ? n.pop() : H4.call(n, r, 1), --this.size, !0;
}
function W4(t) {
  var n = this.__data__, r = wo(n, t);
  return r < 0 ? void 0 : n[r][1];
}
function B4(t) {
  return wo(this.__data__, t) > -1;
}
function $4(t, n) {
  var r = this.__data__, s = wo(r, t);
  return s < 0 ? (++this.size, r.push([t, n])) : r[s][1] = n, this;
}
function Zr(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
Zr.prototype.clear = F4;
Zr.prototype.delete = U4;
Zr.prototype.get = W4;
Zr.prototype.has = B4;
Zr.prototype.set = $4;
var V4 = qc(Xc, "Map");
function G4() {
  this.size = 0, this.__data__ = {
    hash: new cr(),
    map: new (V4 || Zr)(),
    string: new cr()
  };
}
function X4(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function _o(t, n) {
  var r = t.__data__;
  return X4(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function Y4(t) {
  var n = _o(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Z4(t) {
  return _o(this, t).get(t);
}
function K4(t) {
  return _o(this, t).has(t);
}
function q4(t, n) {
  var r = _o(this, t), s = r.size;
  return r.set(t, n), this.size += r.size == s ? 0 : 1, this;
}
function hr(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
hr.prototype.clear = G4;
hr.prototype.delete = Y4;
hr.prototype.get = Z4;
hr.prototype.has = K4;
hr.prototype.set = q4;
var J4 = "Expected a function";
function Jc(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(J4);
  var r = function() {
    var s = arguments, a = n ? n.apply(this, s) : s[0], c = r.cache;
    if (c.has(a))
      return c.get(a);
    var u = t.apply(this, s);
    return r.cache = c.set(a, u) || c, u;
  };
  return r.cache = new (Jc.Cache || hr)(), r;
}
Jc.Cache = hr;
var Q4 = 500;
function ex(t) {
  var n = Jc(t, function(s) {
    return r.size === Q4 && r.clear(), s;
  }), r = n.cache;
  return n;
}
var tx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nx = /\\(\\)?/g, rx = ex(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(tx, function(r, s, a, c) {
    n.push(a ? c.replace(nx, "$1") : s || r);
  }), n;
});
function ix(t) {
  return t == null ? "" : rp(t);
}
function xo(t, n) {
  return Gi(t) ? t : C4(t, n) ? [t] : rx(ix(t));
}
function Qc(t) {
  if (typeof t == "string" || Kc(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function sx(t, n) {
  n = xo(n, t);
  for (var r = 0, s = n.length; t != null && r < s; )
    t = t[Qc(n[r++])];
  return r && r == s ? t : void 0;
}
function ox(t, n) {
  for (var r = -1, s = n.length, a = t.length; ++r < s; )
    t[a + r] = n[r];
  return t;
}
var lf = $n ? $n.isConcatSpreadable : void 0;
function ax(t) {
  return Gi(t) || ap(t) || !!(lf && t && t[lf]);
}
function cx(t, n, r, s, a) {
  var c = -1, u = t.length;
  for (r || (r = ax), a || (a = []); ++c < u; ) {
    var d = t[c];
    r(d) ? ox(a, d) : a[a.length] = d;
  }
  return a;
}
function lx(t) {
  var n = t == null ? 0 : t.length;
  return n ? cx(t) : [];
}
function ux(t) {
  return d4(b4(t, void 0, lx), t + "");
}
function dx(t, n) {
  return t != null && n in Object(t);
}
function fx(t, n, r) {
  n = xo(n, t);
  for (var s = -1, a = n.length, c = !1; ++s < a; ) {
    var u = Qc(n[s]);
    if (!(c = t != null && r(t, u)))
      break;
    t = t[u];
  }
  return c || ++s != a ? c : (a = t == null ? 0 : t.length, !!a && w4(a) && ip(u, a) && (Gi(t) || ap(t)));
}
function hx(t, n) {
  return t != null && fx(t, n, dx);
}
function px(t, n, r, s) {
  if (!io(t))
    return t;
  n = xo(n, t);
  for (var a = -1, c = n.length, u = c - 1, d = t; d != null && ++a < c; ) {
    var h = Qc(n[a]), m = r;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return t;
    if (a != u) {
      var b = d[h];
      m = void 0, m === void 0 && (m = io(b) ? b : ip(n[a + 1]) ? [] : {});
    }
    v4(d, h, m), d = d[h];
  }
  return t;
}
function gx(t, n, r) {
  for (var s = -1, a = n.length, c = {}; ++s < a; ) {
    var u = n[s], d = sx(t, u);
    r(d, u) && px(c, xo(u, t), d);
  }
  return c;
}
function mx(t, n) {
  return gx(t, n, function(r, s) {
    return hx(t, s);
  });
}
var vx = ux(function(t, n) {
  return t == null ? {} : mx(t, n);
});
function cp(t) {
  const n = t.e.dataTransfer?.types[0];
  if (!n) return;
  const r = JSON.parse(
    t.e.dataTransfer.getData(n)
  ), s = this;
  if (r.type !== "transition") {
    bx(r), s.remove(Be.guide), s.requestRenderAll(), me.dispatch(qs);
    return;
  }
  Be.guide && (Be.object && yx(r, s), Be.objects.forEach((a) => {
    a.strokeDashArray = [], a.setSelected(!1), a.kind === "none" && (a.visible = !1);
  }), s.remove(Be.guide), s.requestRenderAll(), me.dispatch(qs));
}
function bx(t) {
  const n = { ...t, id: Ke() };
  switch (t.type) {
    case "image":
      me.dispatch($i, { payload: n });
      break;
    case "video":
      me.dispatch(Wi, { payload: n });
      break;
    case "audio":
      me.dispatch(Bi, { payload: n });
      break;
  }
}
function yx(t, n) {
  const r = Be.object?.id, s = vx(t, ["kind", "direction"]);
  Object.entries(s).forEach(([a, c]) => {
    a === "kind" ? Be.object.kind = c : Be.object[a] = c;
  }), n.transitionsMap[r] = {
    ...n.transitionsMap[r],
    ...s
  }, n.updateState();
}
const wx = (t) => {
  t.on("dragover", Qh), t.on("dragenter", ep), t.on("dragleave", tp), t.on("drop", cp);
}, _x = (t) => {
  t.off("dragover", Qh), t.off("dragenter", ep), t.off("dragleave", tp), t.off("drop", cp);
}, lp = (t) => {
  const n = t.target.canvas, r = t.target;
  if (t.action === "resizing" && r instanceof Zt && n) {
    const s = r.id, a = n.getObjects("Transition").find((c) => c.id === s);
    if (a && a instanceof Zt) {
      const c = Se.cloneDeep(n.transitionsMap), u = {
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
  n && (xx(n, n.getObjects()), Sx(n.getObjects("Helper")), U.isPointerOverHelperTrack = !1, U.draggingOverTrack = null);
}, xx = (t, n) => {
  n.forEach((r) => {
    r.isAlignmentAuxiliary && t.remove(r);
  });
}, Sx = (t) => {
  t.forEach((n) => n.setSelected(!1));
};
function up(t) {
  const n = t.target.canvas;
  if (!n) return;
  const r = n.getActiveObject();
  if (!r || !n.positionBeforeTransform) return;
  const s = n.getScenePoint(t.e), a = n.getObjects("Track", "Helper").find((c) => {
    const u = c.getBoundingRect();
    return s.x >= u.left && s.x <= u.left + u.width && s.y >= u.top && s.y <= u.top + u.height;
  });
  if (t.action === "resizing") {
    const c = (U.trackToItemsMap[U.originTrack.id] || []).filter((d) => d !== r);
    r.setCoords();
    const u = So(
      c,
      r.getBoundingRect()
    );
    return n.fire("track-items:resized", {
      trackId: U.originTrack.id,
      trackItemIds: [r.id],
      isOverlapped: !!u
    }), !1;
  }
  if (!a)
    return r && (r?.set(n.positionBeforeTransform), r?.setCoords()), !1;
  if (a instanceof Vi) {
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
      secondaryTracks: U.secondaryTracks,
      primaryTracks: U.primaryTracks,
      primaryPositions: {
        trackIndex: c,
        trackId: n.trackIdAfterTransform,
        positions: n.positionAfterTransform
      }
    };
    kx(u);
  } else if (a instanceof ar) {
    const c = {
      isSecondaryOverlapped: Tx(),
      secondaryTracks: U.secondaryTracks,
      primaryTracks: U.primaryTracks,
      primaryPositions: {
        trackId: n.trackIdAfterTransform,
        positions: n.positionAfterTransform
      }
    };
    Ix(c);
  }
}
const Ix = (t) => {
  U.canvas && U.canvas.fire("track-items:moved", t);
};
function Tx() {
  const t = Cx();
  return Object.keys(t).some((n) => {
    const r = U.trackToItemsMap[n], s = t[n].objects;
    return r?.length ? r.filter((a) => !s.includes(a)).some(
      (a) => So(s, a.getBoundingRect())
    ) : !0;
  });
}
function Cx() {
  const [t] = U.primaryMovingObjects, n = t.id, s = U.canvas.positionAfterTransform[n].top - t.getBoundingRect().top, a = {};
  return U.secondaryMovingObjects.forEach((c) => {
    const u = c.getBoundingRect().top + s, d = U.trackTopToIdMap[u], h = _c(
      U.trackTops,
      U.originTrack.top,
      u
    );
    a[d] ? a[d].objects.push(c) : a[d] = {
      objects: [c],
      index: h
    };
  }), a;
}
const kx = (t) => {
  U.canvas && U.canvas.fire("track:create", t);
};
function So(t, n) {
  return t.find((r) => {
    const s = r.getBoundingRect();
    return n.left < s.left + s.width && n.left + n.width > s.left && n.top < s.top + s.height && n.top + n.height > s.top;
  });
}
const Ex = (t) => {
  t.on("object:modified", lp), t.on("object:modified", up);
}, Ax = (t) => {
  t.off("object:modified", lp), t.off("object:modified", up);
};
function Rx(t, n) {
  t.remove(...n), n.length = 0;
}
function dp() {
  Rx(this, U.placeholderMovingObjects);
}
function fp(t) {
  const n = this.height < this.bounding.height, r = this.width < this.bounding.width;
  if (!n && !r) return;
  const s = this.viewportTransform;
  let a = s[4], c = s[5];
  const u = 2;
  t.e.shiftKey ? a = s[4] - t.e.deltaY * u : (n && (c = s[5] - t.e.deltaY * u), a = s[4] - t.e.deltaX * u), this.setViewportPos(a, c);
}
const Ox = (t) => {
  t.on("mouse:wheel", fp), t.on("mouse:up", dp.bind(t));
}, Mx = (t) => {
  t.off("mouse:wheel", fp), t.off("mouse:up", dp.bind(t));
};
function hp(t) {
  const n = this;
  if (!n) return;
  const r = n.getScenePoint(t.e), s = n.getObjects("Helper", "Track");
  U.draggingOverTrack = s.find((m) => {
    const b = m.getBoundingRect();
    return r.x >= b.left && r.x <= b.left + b.width && r.y >= b.top && r.y <= b.top + b.height;
  }) ?? null, s.forEach((m) => {
    if (df(m)) {
      const b = U.draggingOverTrack;
      m.setSelected(m === b);
    }
  }), U.isPointerOverHelperTrack = df(
    U.draggingOverTrack
  ), n.getObjects();
  const a = t.target;
  a.getBoundingRect(), a.setCoords();
  const c = [
    a,
    ...n.getActiveObjects(),
    ...n.getObjects("Track", "Helper", "Transition", "Placeholder")
  ], u = Px(c, n), d = Lx(a);
  Dx(
    u,
    d
  ).forEach((m) => {
    m.orientation === "V" ? a.left = m.lineGuide + m.offset : a.top = m.lineGuide + m.offset;
  });
}
const Px = (t, n) => {
  const r = [], s = [];
  return n.getObjects().filter((a) => a.visible).forEach((a) => {
    if (t.some(
      (d) => d.id === a.id
    ) || a.isAlignmentAuxiliary) return;
    const u = a.getBoundingRect();
    r.push(
      uf(
        u.left,
        u.width,
        u.top,
        u.height
      )
    ), s.push(
      uf(
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
}, uf = (t, n, r, s) => [t, t + n].map((a) => ({
  val: a,
  start: r,
  end: r + s
})), Dx = (t, n) => {
  const r = [], s = [];
  t.vertical.forEach((h) => {
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
  }), t.horizontal.forEach((h) => {
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
}, Lx = (t) => {
  const n = t.getBoundingRect();
  return {
    vertical: [
      {
        guide: Math.round(n.left),
        offset: Math.round(t.left - n.left),
        snap: "start"
      },
      {
        guide: Math.round(n.left + n.width),
        offset: Math.round(
          t.left - n.left - n.width
        ),
        snap: "end"
      }
    ],
    horizontal: [
      {
        guide: Math.round(n.top),
        offset: Math.round(t.top - n.top),
        snap: "start"
      },
      {
        guide: Math.round(n.top + n.height),
        offset: Math.round(t.top - n.top - n.height),
        snap: "end"
      }
    ]
  };
}, df = (t) => t instanceof Vi;
function jx(t) {
  t.opacity = U.isPointerOverHelperTrack ? 0 : 1;
}
const pp = Bx((t) => {
  const n = t.target.canvas;
  if ($x(t), !U.draggingOverTrack) return;
  const r = U.placeholderMovingObjects.map(
    (c) => c.draggedObject
  ), s = (U.trackToItemsMap[U.draggingOverTrack.id] || []).filter((c) => !r.includes(c)), a = s.find(
    (c) => So(r, c.getBoundingRect())
  );
  U.placeholderMovingObjects.forEach((c) => {
    const u = c.draggedObject;
    u?.setCoords(), jx(c);
    const d = Nx(
      u,
      s,
      a,
      U.placeholderMovingObjects.length > 1
    );
    n.trackIdAfterTransform = U.trackTopToIdMap[d.top], n.positionAfterTransform[u?.id] = {
      top: d.top,
      left: d.left
    }, c.left = d.left, c.top = d.top;
  });
}, 5), Nx = (t, n, r, s) => !Fx(t) || s && r ? gp(t) : r ? zx(t, r, n) : Wx(t), Fx = (t) => U.draggingOverTrack ? U.draggingOverTrack.accepts?.includes(t.type) ?? !1 : !1, gp = (t) => ({
  top: U.objectInitialPositions[t.id].top,
  left: U.objectInitialPositions[t.id].left
}), zx = (t, n, r) => {
  const s = Hx(t, n);
  return !Ux(r, t, s) || U.activeObjects.length !== 1 ? gp(t) : {
    left: s,
    top: n.top
  };
}, Hx = (t, n) => {
  const r = t.left + t.width / 2, s = n.left + n.width / 2;
  return r < s ? n.left - t.width : n.left + n.width;
}, Ux = (t, n, r) => !(r < 0 || So(t, {
  ...n.getBoundingRect(),
  left: r
})), Wx = (t) => ({
  left: t.getBoundingRect().left,
  top: U.draggingOverTrack?.top ?? 0
});
function Bx(t, n) {
  let r = null;
  return function(...s) {
    const a = Date.now();
    (r === null || a - r >= n) && (r = a, t(...s));
  };
}
function $x(t) {
  const n = t.target, r = n.canvas, s = n.top, a = -n.height * 0.75, c = r.height + n.height * 0.75;
  n.top = Math.min(Math.max(s, a), c - n.height);
  const u = n.left;
  n.left = Math.max(u, 0);
}
const Vx = (t) => {
  t.on("object:moving", hp.bind(t)), t.on("object:moving", pp);
}, Gx = (t) => {
  t.off("object:moving", hp.bind(t)), t.off("object:moving", pp);
};
function mp() {
  const t = this, n = t.getActiveObject(), r = t.getActiveObjects().map((s) => s.id);
  n instanceof Ac ? (n.borderColor = "rgba(0, 216, 214, 0.75)", n.hasControls = !1, n.hoverCursor = "default", n.borderScaleFactor = 1, n.padding = 0, n.getObjects().forEach((s) => {
    s.setSelected(!0);
  })) : n?.setSelected(!0), this.setActiveIds(r);
}
function vp(t) {
  const n = this, r = n.getActiveObject();
  r instanceof Ac && (r.borderColor = "transparent", r.hasControls = !1, r.hoverCursor = "default"), t.selected.forEach((a) => {
    a.setSelected(!0);
  }), t.deselected.forEach((a) => {
    a.setSelected(!1);
  });
  const s = n.getActiveObjects().map((a) => a.id);
  this.setActiveIds(s);
}
function bp(t) {
  this.getObjects().forEach((r) => {
    r.isSelected && (r.isSelected = !1);
  }), t.deselected.forEach((r) => {
    r.setSelected(!1);
  });
  const n = this.getActiveObjects().map((r) => r.id);
  this.setActiveIds(n);
}
const Xx = (t) => {
  t.on("selection:created", mp), t.on("selection:updated", vp), t.on("selection:cleared", bp);
}, Yx = (t) => {
  t.off("selection:created", mp), t.off("selection:updated", vp), t.off("selection:cleared", bp);
};
let yp, wp, _p;
const Zx = (t) => {
  const { state: n } = t;
  yp = n.subscribeToActiveIds(({ activeIds: r }) => {
    if (r.length === 1) {
      const s = r[0], { trackItemIds: a, trackItemsMap: c } = n.getState();
      a.forEach((u) => {
        c[u].type;
      }), t.selectTrackItemByIds([s]);
    } else
      t.selectTrackItemByIds(r);
  }), wp = n.subscribeToHistory((r) => {
    const { tracks: s, trackItemsMap: a, trackItemIds: c, trackItemDetailsMap: u } = r;
    t.tracks = s, t.trackItemsMap = a, t.trackItemIds = c, t.trackItemDetailsMap = u, t.renderTracks(), t.updateTrackItemsToHistory(), t.alignItemsToTrack(), t.calcBounding(), t.updateTransitions(), t.duration = on(t.trackItemsMap);
  }), _p = n.subscribeToAddOrRemoveItems(() => {
    const r = t.getTrackItems().map((d) => d.id), { trackItemIds: s, trackItemsMap: a, trackItemDetailsMap: c } = n.getState(), u = [];
    r.forEach((d) => {
      s.includes(d) || u.push(d);
    }), t.deleteTrackItemById(u), t.tracks = n.getState().tracks, t.trackItemsMap = a, t.trackItemDetailsMap = c, s.forEach((d) => {
      if (!r.includes(d)) {
        const h = {
          ...a[d],
          details: {
            ...c[d].details
          }
        };
        t.addTrackItem(h);
      }
    }), t.renderTracks(), t.alignItemsToTrack(), s.forEach((d) => {
      t.updateTrackItemCoords(d);
    }), t.updateTransitions(), t.updateTrackCoords();
  });
}, Kx = (t) => {
  yp.unsubscribe(), wp.unsubscribe(), _p.unsubscribe();
};
function xp(t) {
  const {
    isSecondaryOverlapped: n,
    secondaryTracks: r,
    primaryTracks: s,
    primaryPositions: a
  } = t, { trackId: c, positions: u } = a, d = this.tracks.findIndex((C) => C.id === c), h = $h(
    Object.keys(r).map(
      (C) => r[C].objects.map((O) => O.id)
    )
  ), m = Js(this.tracks, [
    ...Object.keys(u),
    ...h
  ]);
  Object.keys(s).forEach((C) => {
    this.pauseEventListeners();
    const { objects: O } = s[C];
    O.forEach((E) => {
      const P = u[E.id];
      E.left = P.left;
    }), this.resumeEventListeners();
    const A = m.find((E) => E.id === c);
    A && A.items.push(...Object.keys(u)), this.tracks = m;
  });
  const b = this.tracks[d], _ = [];
  Object.keys(r).forEach((C) => {
    const { objects: O, index: A } = r[C], E = O.map((N) => N.id), [P] = E, M = this.trackItemsMap[P];
    if (n) {
      const N = {
        id: Ke(),
        items: E,
        type: M.type,
        accepts: this.acceptsMap?.[M.type],
        tempIndex: A
      };
      _.push(N);
    } else {
      const N = m[d + A];
      N && N.items.push(...E), this.tracks = m;
    }
  });
  const S = Vh(
    b,
    _
  );
  S.length && m.splice(d, 1, ...S), this.tracks = m, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
function Sp({
  trackItemIds: t,
  isOverlapped: n
}) {
  const [r] = t;
  if (r) {
    if (!this.getObjects("Transition").find(
      (s) => s.id === r
    )) {
      const s = this.tracks.find((a) => a.items.includes(r));
      if (n) {
        const a = qx(this.tracks, t), c = {
          id: Ke(),
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
function qx(t, n) {
  return t.map((r) => ({
    ...r,
    items: r.items.filter(
      (s) => !n.includes(s)
    )
  }));
}
function Ip(t) {
  const {
    secondaryTracks: n,
    primaryTracks: r,
    primaryPositions: s
  } = t, { positions: a, trackIndex: c } = s, u = c === -1 ? this.tracks.length : c, [d] = Object.keys(r), h = this.tracks.find((A) => A.id == d), m = r[d], b = {
    id: Ke(),
    items: m.objects.map((A) => A.id),
    type: h?.type,
    accepts: h?.accepts
  }, _ = $h(
    Object.keys(n).map(
      (A) => n[A].objects.map((E) => E.id)
    )
  ), S = Js(this.tracks, [
    ...Object.keys(a),
    ..._
  ]), C = [];
  Object.keys(n).forEach((A) => {
    const { objects: E, index: P } = n[A], M = this.tracks.find(
      (K) => K.id == A
    ), N = E.map((K) => K.id), z = {
      id: Ke(),
      items: N,
      type: M?.type,
      accepts: M?.accepts,
      tempIndex: P
    };
    C.push(z);
  });
  const O = Vh(b, C);
  O.length && S.splice(u, 0, ...O), this.tracks = S, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
const Jx = (t) => {
  t.on("track:create", Ip.bind(t)), t.on("track-items:resized", Sp.bind(t)), t.on("track-items:moved", xp.bind(t));
}, Qx = (t) => {
  t.off("track:create", Ip.bind(t)), t.off("track-items:resized", Sp.bind(t)), t.off("track-items:moved", xp.bind(t));
}, eS = (t) => {
  wx(t), Ex(t), Ox(t), Vx(t), Jx(t), Xx(t), y_(t), Zx(t);
}, tS = (t) => {
  _x(t), Ax(t), Mx(t), Gx(t), Qx(t), Yx(t), w_(t), Kx();
}, nS = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"]
}, rS = ["video", "image", "audio", "text"];
let el = class extends $2 {
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
    Xt.ownDefaults.borderColor = "transparent", Xt.ownDefaults.cornerColor = "white", Xt.ownDefaults.cornerStrokeColor = "transparent", Xt.ownDefaults.strokeWidth = 0, Xt.ownDefaults.borderOpacityWhenMoving = 1, Xt.ownDefaults.borderScaleFactor = 1, Xt.ownDefaults.cornerSize = 8, Xt.ownDefaults.cornerStyle = "rect", Xt.ownDefaults.centeredScaling = !1, Xt.ownDefaults.centeredRotation = !0, Xt.ownDefaults.transparentCorners = !1;
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
    s[4] = this.spacing.left, this.tScale = r.tScale || 1 / 300, this.store = r.store, this.state = r.state, this.scale = r.scale, this.onScroll = r.onScroll, this.acceptsMap = this.createAcceptsItemMap(r.acceptsMap), this.sizesMap = a_(r.sizesMap), this.setupFabricDefaults(), this.initEventListeners();
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
      activeIds: Se.cloneDeep(this.activeIds)
    }), me.dispatch(Oh, {
      payload: {
        activeIds: this.activeIds
      }
    }));
  }
  purge() {
    tS(this), this.dispose();
  }
  static registerItems(n) {
    Object.keys(n).forEach((r) => {
      ot.setClass(n[r], r);
    });
  }
  initEventListeners() {
    eS(this);
  }
  getUpdatedState() {
    const n = on(this.trackItemsMap);
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
    const n = on(this.trackItemsMap);
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
    this.bounding = n, me.dispatch(jh, {
      payload: { bounding: n }
    });
  }
  setScale(n) {
    this.pauseEventListeners(), this.tScale = n.zoom, this.scale = n;
    const r = this.getState();
    this.getObjects("Video", "Image", "Text", "Audio").forEach(
      (s) => {
        const a = r.trackItemsMap[s.id], { from: c, to: u } = a.display, d = Ve(c, this.tScale), h = Ve(
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
V3(el, [
  w3,
  h_,
  g_,
  b_
]);
function iS(t) {
  const n = me.subject.pipe(Sn(({ key: r }) => r.startsWith(B5))).subscribe((r) => {
    if (r.key === Dh) {
      const s = r.value;
      t.setScale(s?.payload.scale ?? void 0);
    }
  });
  return {
    unsubscribe: () => {
      n.unsubscribe();
    }
  };
}
el.registerItems({
  Text: qh,
  Image: u_,
  Video: l_,
  Audio: c_,
  Track: d_,
  Helper: f_
});
const sS = ({ stateManager: t }) => {
  const n = Yt(!1), [r, s] = it(0), a = Yt(null), c = Yt(null), u = Yt(null), d = Yt(null), h = Yt(null), [m, b] = it({
    width: 0,
    height: 0
  }), [_, S] = it({
    width: 0,
    height: 0
  }), {
    scale: C,
    playerRef: O,
    fps: A,
    setState: E,
    timeline: P
  } = In(), { setTimeline: M } = In(), N = Bc(O ?? void 0), z = (Y) => {
    h.current && d.current && (d.current.scrollTop = -Y.scrollTop, h.current.scrollLeft = -Y.scrollLeft, s(-Y.scrollLeft));
  };
  Ht(() => {
    const Y = Ve(N / A * 1e3, C.zoom), G = c.current?.getBoundingClientRect().x + c.current?.clientWidth;
    if (Y - r + 40 >= G) {
      const ne = h.current?.clientWidth, V = h.current?.scrollWidth, ae = h.current?.scrollLeft, Oe = (V - (ne + ae)) / ne;
      Oe >= 0 && (Oe > 1 ? h.current?.scrollTo({
        left: ae + ne
      }) : h.current?.scrollTo({
        left: V - ne
      }));
    }
  }, [N]), Ht(() => {
    const Y = c.current, G = a.current;
    if (!Y || !G) return;
    const te = G.clientWidth, ne = G.clientHeight, V = new el(Y, {
      width: te,
      height: ne,
      bounding: {
        width: te,
        height: 0
      },
      selectionColor: "rgba(0, 216, 214,0.1)",
      selectionBorderColor: "rgba(0, 216, 214,1.0)",
      onScroll: z,
      // tScale: scale.zoom,
      // store,
      state: t,
      scale: C,
      spacing: {
        left: Wc,
        right: Gd
      }
    }), ae = iS(V);
    u.current = V, b({
      width: te,
      height: ne
    }), S({
      width: te,
      height: 0
    }), M(V);
    const ye = t.subscribeToSize(
      (ie) => {
        E(ie);
      }
    ), Oe = t.subscribeToScale((ie) => {
      E(ie);
    }), _e = t.subscribeToTracks(
      (ie) => {
        E(ie);
      }
    ), Ee = t.subscribeToDuration(
      (ie) => {
        E(ie);
      }
    ), ke = t.subscribeToUpdateTrackItem(() => {
      const ie = t.getState();
      E({
        duration: ie.duration,
        trackItemsMap: ie.trackItemsMap
      });
    }), $e = t.subscribeToAddOrRemoveItems(
      () => {
        const ie = t.getState();
        E({
          trackItemDetailsMap: ie.trackItemDetailsMap,
          trackItemsMap: ie.trackItemsMap,
          trackItemIds: ie.trackItemIds,
          tracks: ie.tracks
        });
      }
    ), pt = t.subscribeToUpdateItemDetails(() => {
      const ie = t.getState();
      E({
        trackItemDetailsMap: ie.trackItemDetailsMap
      });
    });
    return () => {
      ae.unsubscribe(), V.purge(), Oe.unsubscribe(), _e.unsubscribe(), Ee.unsubscribe(), $e.unsubscribe(), ke.unsubscribe(), pt.unsubscribe(), ye.unsubscribe();
    };
  }, []), Ht(() => {
    const G = me.subject.pipe(
      Sn(({ key: te }) => te.startsWith(V5))
    ).subscribe((te) => {
      if (te.key === jh) {
        const ne = te.value?.payload?.bounding;
        ne && S({
          width: ne.width,
          height: ne.height
        });
      }
    });
    return () => {
      G.unsubscribe();
    };
  }, []);
  const K = (Y) => {
    const G = Y.currentTarget.scrollLeft;
    n.current && u.current.scrollTo({ scrollLeft: G }), s(G);
  }, Z = (Y) => {
    const G = Y.currentTarget.scrollTop;
    n.current && u.current.scrollTo({ scrollTop: G });
  };
  Ht(() => {
    const Y = h.current?.scrollWidth;
    if (!Y || !P) return;
    const G = P.width;
    Y < G + r && P.scrollTo({ scrollLeft: Y - G });
  }, [C]);
  const q = (Y) => {
    if (!u.current) return;
    const te = or(Y, C.zoom);
    O?.current?.seekTo(te * A / 1e3);
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
          Ks,
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
                lc,
                {
                  onScroll: K,
                  className: "ScrollAreaViewport",
                  id: "viewportH",
                  ref: h,
                  children: /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        width: _.width > m.width ? _.width + Gd : _.width
                      },
                      className: "pointer-events-none h-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(
                Nd,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "horizontal",
                  children: /* @__PURE__ */ v.jsx(
                    Fd,
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
          Ks,
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
                lc,
                {
                  onScroll: Z,
                  className: "ScrollAreaViewport",
                  ref: d,
                  children: /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        height: _.height > m.height ? _.height + 40 : m.height
                      },
                      className: "pointer-events-none w-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(
                Nd,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "vertical",
                  children: /* @__PURE__ */ v.jsx(
                    Fd,
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
function Tp(t, n, r = { cyclesFix: !0 }, s = []) {
  let a = [];
  const c = Array.isArray(t);
  for (const d in t) {
    const h = t[d], m = c ? +d : d;
    if (!(d in n)) {
      a.push({
        type: "REMOVE",
        path: [m],
        oldValue: t[d]
      });
      continue;
    }
    const b = n[d], _ = typeof h == "object" && typeof b == "object" && Array.isArray(h) === Array.isArray(b);
    h && b && _ && !oS[Object.getPrototypeOf(h)?.constructor?.name] && (!r.cyclesFix || !s.includes(h)) ? a.push.apply(a, Tp(h, b, r, r.cyclesFix ? s.concat([h]) : []).map((S) => (S.path.unshift(m), S))) : h !== b && // treat NaN values as equivalent
    !(Number.isNaN(h) && Number.isNaN(b)) && !(_ && (isNaN(h) ? h + "" == b + "" : +h == +b)) && a.push({
      path: [m],
      type: "CHANGE",
      value: b,
      oldValue: h
    });
  }
  const u = Array.isArray(n);
  for (const d in n)
    d in t || a.push({
      type: "CREATE",
      path: [u ? +d : d],
      value: n[d]
    });
  return a;
}
var tl = Symbol.for("immer-nothing"), Mi = Symbol.for("immer-draftable"), At = Symbol.for("immer-state"), Cp = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Ze(t, ...n) {
  if (process.env.NODE_ENV !== "production") {
    const r = Cp[t], s = typeof r == "function" ? r.apply(null, n) : r;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var lr = Object.getPrototypeOf;
function ur(t) {
  return !!t && !!t[At];
}
function Vn(t) {
  return t ? kp(t) || Array.isArray(t) || !!t[Mi] || !!t.constructor?.[Mi] || Xi(t) || Yi(t) : !1;
}
var aS = Object.prototype.constructor.toString();
function kp(t) {
  if (!t || typeof t != "object")
    return !1;
  const n = lr(t);
  if (n === null)
    return !0;
  const r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === aS;
}
function Ni(t, n) {
  dr(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    n(r, t[r], t);
  }) : t.forEach((r, s) => n(s, r, t));
}
function dr(t) {
  const n = t[At];
  return n ? n.type_ : Array.isArray(t) ? 1 : Xi(t) ? 2 : Yi(t) ? 3 : 0;
}
function Fi(t, n) {
  return dr(t) === 2 ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
}
function Qa(t, n) {
  return dr(t) === 2 ? t.get(n) : t[n];
}
function Ep(t, n, r) {
  const s = dr(t);
  s === 2 ? t.set(n, r) : s === 3 ? t.add(r) : t[n] = r;
}
function cS(t, n) {
  return t === n ? t !== 0 || 1 / t === 1 / n : t !== t && n !== n;
}
function Xi(t) {
  return t instanceof Map;
}
function Yi(t) {
  return t instanceof Set;
}
function sr(t) {
  return t.copy_ || t.base_;
}
function xc(t, n) {
  if (Xi(t))
    return new Map(t);
  if (Yi(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = kp(t);
  if (n === !0 || n === "class_only" && !r) {
    const s = Object.getOwnPropertyDescriptors(t);
    delete s[At];
    let a = Reflect.ownKeys(s);
    for (let c = 0; c < a.length; c++) {
      const u = a[c], d = s[u];
      d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (s[u] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: d.enumerable,
        value: t[u]
      });
    }
    return Object.create(lr(t), s);
  } else {
    const s = lr(t);
    if (s !== null && r)
      return { ...t };
    const a = Object.create(s);
    return Object.assign(a, t);
  }
}
function nl(t, n = !1) {
  return Io(t) || ur(t) || !Vn(t) || (dr(t) > 1 && (t.set = t.add = t.clear = t.delete = lS), Object.freeze(t), n && Object.entries(t).forEach(([r, s]) => nl(s, !0))), t;
}
function lS() {
  Ze(2);
}
function Io(t) {
  return Object.isFrozen(t);
}
var Sc = {};
function fr(t) {
  const n = Sc[t];
  return n || Ze(0, t), n;
}
function uS(t, n) {
  Sc[t] || (Sc[t] = n);
}
var zi;
function Ap() {
  return zi;
}
function dS(t, n) {
  return {
    drafts_: [],
    parent_: t,
    immer_: n,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ff(t, n) {
  n && (fr("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = n);
}
function Ic(t) {
  Tc(t), t.drafts_.forEach(fS), t.drafts_ = null;
}
function Tc(t) {
  t === zi && (zi = t.parent_);
}
function hf(t) {
  return zi = dS(zi, t);
}
function fS(t) {
  const n = t[At];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function pf(t, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const r = n.drafts_[0];
  return t !== void 0 && t !== r ? (r[At].modified_ && (Ic(n), Ze(4)), Vn(t) && (t = oo(n, t), n.parent_ || ao(n, t)), n.patches_ && fr("Patches").generateReplacementPatches_(
    r[At].base_,
    t,
    n.patches_,
    n.inversePatches_
  )) : t = oo(n, r, []), Ic(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), t !== tl ? t : void 0;
}
function oo(t, n, r) {
  if (Io(n))
    return n;
  const s = n[At];
  if (!s)
    return Ni(
      n,
      (a, c) => gf(t, s, n, a, c, r)
    ), n;
  if (s.scope_ !== t)
    return n;
  if (!s.modified_)
    return ao(t, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const a = s.copy_;
    let c = a, u = !1;
    s.type_ === 3 && (c = new Set(a), a.clear(), u = !0), Ni(
      c,
      (d, h) => gf(t, s, a, d, h, r, u)
    ), ao(t, a, !1), r && t.patches_ && fr("Patches").generatePatches_(
      s,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return s.copy_;
}
function gf(t, n, r, s, a, c, u) {
  if (process.env.NODE_ENV !== "production" && a === r && Ze(5), ur(a)) {
    const d = c && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Fi(n.assigned_, s) ? c.concat(s) : void 0, h = oo(t, a, d);
    if (Ep(r, s, h), ur(h))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else u && r.add(a);
  if (Vn(a) && !Io(a)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    oo(t, a), (!n || !n.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(r, s) && ao(t, a);
  }
}
function ao(t, n, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && nl(n, r);
}
function hS(t, n) {
  const r = Array.isArray(t), s = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : Ap(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: n,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = s, c = rl;
  r && (a = [s], c = Hi);
  const { revoke: u, proxy: d } = Proxy.revocable(a, c);
  return s.draft_ = d, s.revoke_ = u, d;
}
var rl = {
  get(t, n) {
    if (n === At)
      return t;
    const r = sr(t);
    if (!Fi(r, n))
      return pS(t, r, n);
    const s = r[n];
    return t.finalized_ || !Vn(s) ? s : s === ec(t.base_, n) ? (tc(t), t.copy_[n] = kc(s, t)) : s;
  },
  has(t, n) {
    return n in sr(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(sr(t));
  },
  set(t, n, r) {
    const s = Rp(sr(t), n);
    if (s?.set)
      return s.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const a = ec(sr(t), n), c = a?.[At];
      if (c && c.base_ === r)
        return t.copy_[n] = r, t.assigned_[n] = !1, !0;
      if (cS(r, a) && (r !== void 0 || Fi(t.base_, n)))
        return !0;
      tc(t), Cc(t);
    }
    return t.copy_[n] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || n in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[n]) || (t.copy_[n] = r, t.assigned_[n] = !0), !0;
  },
  deleteProperty(t, n) {
    return ec(t.base_, n) !== void 0 || n in t.base_ ? (t.assigned_[n] = !1, tc(t), Cc(t)) : delete t.assigned_[n], t.copy_ && delete t.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, n) {
    const r = sr(t), s = Reflect.getOwnPropertyDescriptor(r, n);
    return s && {
      writable: !0,
      configurable: t.type_ !== 1 || n !== "length",
      enumerable: s.enumerable,
      value: r[n]
    };
  },
  defineProperty() {
    Ze(11);
  },
  getPrototypeOf(t) {
    return lr(t.base_);
  },
  setPrototypeOf() {
    Ze(12);
  }
}, Hi = {};
Ni(rl, (t, n) => {
  Hi[t] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
Hi.deleteProperty = function(t, n) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(n)) && Ze(13), Hi.set.call(this, t, n, void 0);
};
Hi.set = function(t, n, r) {
  return process.env.NODE_ENV !== "production" && n !== "length" && isNaN(parseInt(n)) && Ze(14), rl.set.call(this, t[0], n, r, t[0]);
};
function ec(t, n) {
  const r = t[At];
  return (r ? sr(r) : t)[n];
}
function pS(t, n, r) {
  const s = Rp(n, r);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    s.get?.call(t.draft_)
  ) : void 0;
}
function Rp(t, n) {
  if (!(n in t))
    return;
  let r = lr(t);
  for (; r; ) {
    const s = Object.getOwnPropertyDescriptor(r, n);
    if (s)
      return s;
    r = lr(r);
  }
}
function Cc(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Cc(t.parent_));
}
function tc(t) {
  t.copy_ || (t.copy_ = xc(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var gS = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, r, s) => {
      if (typeof n == "function" && typeof r != "function") {
        const c = r;
        r = n;
        const u = this;
        return function(h = c, ...m) {
          return u.produce(h, (b) => r.call(this, b, ...m));
        };
      }
      typeof r != "function" && Ze(6), s !== void 0 && typeof s != "function" && Ze(7);
      let a;
      if (Vn(n)) {
        const c = hf(this), u = kc(n, void 0);
        let d = !0;
        try {
          a = r(u), d = !1;
        } finally {
          d ? Ic(c) : Tc(c);
        }
        return ff(c, s), pf(a, c);
      } else if (!n || typeof n != "object") {
        if (a = r(n), a === void 0 && (a = n), a === tl && (a = void 0), this.autoFreeze_ && nl(a, !0), s) {
          const c = [], u = [];
          fr("Patches").generateReplacementPatches_(n, a, c, u), s(c, u);
        }
        return a;
      } else
        Ze(1, n);
    }, this.produceWithPatches = (n, r) => {
      if (typeof n == "function")
        return (u, ...d) => this.produceWithPatches(u, (h) => n(h, ...d));
      let s, a;
      return [this.produce(n, r, (u, d) => {
        s = u, a = d;
      }), s, a];
    }, typeof t?.autoFreeze == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof t?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Vn(t) || Ze(8), ur(t) && (t = mS(t));
    const n = hf(this), r = kc(t, void 0);
    return r[At].isManual_ = !0, Tc(n), r;
  }
  finishDraft(t, n) {
    const r = t && t[At];
    (!r || !r.isManual_) && Ze(9);
    const { scope_: s } = r;
    return ff(s, n), pf(void 0, s);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, n) {
    let r;
    for (r = n.length - 1; r >= 0; r--) {
      const a = n[r];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    r > -1 && (n = n.slice(r + 1));
    const s = fr("Patches").applyPatches_;
    return ur(t) ? s(t, n) : this.produce(
      t,
      (a) => s(a, n)
    );
  }
};
function kc(t, n) {
  const r = Xi(t) ? fr("MapSet").proxyMap_(t, n) : Yi(t) ? fr("MapSet").proxySet_(t, n) : hS(t, n);
  return (n ? n.scope_ : Ap()).drafts_.push(r), r;
}
function mS(t) {
  return ur(t) || Ze(10, t), Op(t);
}
function Op(t) {
  if (!Vn(t) || Io(t))
    return t;
  const n = t[At];
  let r;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, r = xc(t, n.scope_.immer_.useStrictShallowCopy_);
  } else
    r = xc(t, !0);
  return Ni(r, (s, a) => {
    Ep(r, s, Op(a));
  }), n && (n.finalized_ = !1), r;
}
function mf() {
  process.env.NODE_ENV !== "production" && Cp.push(
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
  function a(S, C, O, A) {
    switch (S.type_) {
      case 0:
      case 2:
        return u(
          S,
          C,
          O,
          A
        );
      case 1:
        return c(S, C, O, A);
      case 3:
        return d(
          S,
          C,
          O,
          A
        );
    }
  }
  function c(S, C, O, A) {
    let { base_: E, assigned_: P } = S, M = S.copy_;
    M.length < E.length && ([E, M] = [M, E], [O, A] = [A, O]);
    for (let N = 0; N < E.length; N++)
      if (P[N] && M[N] !== E[N]) {
        const z = C.concat([N]);
        O.push({
          op: n,
          path: z,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: _(M[N])
        }), A.push({
          op: n,
          path: z,
          value: _(E[N])
        });
      }
    for (let N = E.length; N < M.length; N++) {
      const z = C.concat([N]);
      O.push({
        op: r,
        path: z,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: _(M[N])
      });
    }
    for (let N = M.length - 1; E.length <= N; --N) {
      const z = C.concat([N]);
      A.push({
        op: s,
        path: z
      });
    }
  }
  function u(S, C, O, A) {
    const { base_: E, copy_: P } = S;
    Ni(S.assigned_, (M, N) => {
      const z = Qa(E, M), K = Qa(P, M), Z = N ? Fi(E, M) ? n : r : s;
      if (z === K && Z === n)
        return;
      const q = C.concat(M);
      O.push(Z === s ? { op: Z, path: q } : { op: Z, path: q, value: K }), A.push(
        Z === r ? { op: s, path: q } : Z === s ? { op: r, path: q, value: _(z) } : { op: n, path: q, value: _(z) }
      );
    });
  }
  function d(S, C, O, A) {
    let { base_: E, copy_: P } = S, M = 0;
    E.forEach((N) => {
      if (!P.has(N)) {
        const z = C.concat([M]);
        O.push({
          op: s,
          path: z,
          value: N
        }), A.unshift({
          op: r,
          path: z,
          value: N
        });
      }
      M++;
    }), M = 0, P.forEach((N) => {
      if (!E.has(N)) {
        const z = C.concat([M]);
        O.push({
          op: r,
          path: z,
          value: N
        }), A.unshift({
          op: s,
          path: z,
          value: N
        });
      }
      M++;
    });
  }
  function h(S, C, O, A) {
    O.push({
      op: n,
      path: [],
      value: C === tl ? void 0 : C
    }), A.push({
      op: n,
      path: [],
      value: S
    });
  }
  function m(S, C) {
    return C.forEach((O) => {
      const { path: A, op: E } = O;
      let P = S;
      for (let K = 0; K < A.length - 1; K++) {
        const Z = dr(P);
        let q = A[K];
        typeof q != "string" && typeof q != "number" && (q = "" + q), (Z === 0 || Z === 1) && (q === "__proto__" || q === "constructor") && Ze(19), typeof P == "function" && q === "prototype" && Ze(19), P = Qa(P, q), typeof P != "object" && Ze(18, A.join("/"));
      }
      const M = dr(P), N = b(O.value), z = A[A.length - 1];
      switch (E) {
        case n:
          switch (M) {
            case 2:
              return P.set(z, N);
            case 3:
              Ze(16);
            default:
              return P[z] = N;
          }
        case r:
          switch (M) {
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
          switch (M) {
            case 1:
              return P.splice(z, 1);
            case 2:
              return P.delete(z);
            case 3:
              return P.delete(O.value);
            default:
              return delete P[z];
          }
        default:
          Ze(17, E);
      }
    }), S;
  }
  function b(S) {
    if (!Vn(S))
      return S;
    if (Array.isArray(S))
      return S.map(b);
    if (Xi(S))
      return new Map(
        Array.from(S.entries()).map(([O, A]) => [O, b(A)])
      );
    if (Yi(S))
      return new Set(Array.from(S).map(b));
    const C = Object.create(lr(S));
    for (const O in S)
      C[O] = b(S[O]);
    return Fi(S, Mi) && (C[Mi] = S[Mi]), C;
  }
  function _(S) {
    return ur(S) ? b(S) : S;
  }
  uS("Patches", {
    applyPatches_: m,
    generatePatches_: a,
    generateReplacementPatches_: h
  });
}
var Rt = new gS(), vS = Rt.produce;
Rt.produceWithPatches.bind(
  Rt
);
Rt.setAutoFreeze.bind(Rt);
Rt.setUseStrictShallowCopy.bind(Rt);
var bS = Rt.applyPatches.bind(Rt);
Rt.createDraft.bind(Rt);
Rt.finishDraft.bind(Rt);
function yS(t) {
  const n = t.value, r = [];
  if (n?.payload?.trackItemIds) {
    const s = n.payload.trackItemIds;
    r.push(s), this.updateState({ activeIds: r });
  }
  if (t.key === Eh) {
    const s = t.value?.payload.trackItemIds, a = Se.cloneDeep(this.getState()), c = s?.length ? s : a.activeIds, u = a.trackItemIds.filter(
      (_) => !c.includes(_)
    ), d = Object.fromEntries(
      Object.entries(a.trackItemDetailsMap).filter(
        ([_]) => !c.includes(_)
      )
    ), h = q3(a.tracks, c), m = Object.fromEntries(
      Object.entries(a.trackItemsMap).filter(
        ([_]) => !c.includes(_)
      )
    ), b = on(m);
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
  if (t.key === Ah) {
    const s = Se.cloneDeep(this.getState()), a = [], c = t.value?.payload.trackItemIds || s.activeIds;
    if (c.length === 0) return;
    c.forEach((d) => {
      const h = s.trackItemsMap[d], m = s.trackItemDetailsMap[d], b = Ke();
      a.push(b), s.trackItemsMap = {
        ...s.trackItemsMap,
        [b]: { ...Se.cloneDeep(h), id: b }
      }, s.trackItemDetailsMap = {
        ...s.trackItemDetailsMap,
        [b]: { ...Se.cloneDeep(m) }
      }, s.trackItemIds.push(b);
    });
    const u = s.tracks.map((d) => {
      const h = {
        ...d,
        id: Ke(),
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
  if (t.key === Rh) {
    const s = Se.cloneDeep(this.getState()), a = t.value?.options.time;
    if (s.activeIds.length !== 1) return;
    const c = s.activeIds[0], u = s.trackItemsMap[c];
    if (a <= u.display.from || a >= u.display.to)
      return;
    const d = Ke(), h = {
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
async function wS(t) {
  if (t.key === "scene:load") {
    const n = t.value?.payload, r = n.size, s = n.trackItemIds, a = n.trackItemsMap, c = n.trackItemDetailsMap;
    if (!s) return;
    const u = s?.map(async (h) => {
      try {
        const m = c[h], b = a[h];
        if (m.type === "text") {
          const _ = await Kh(
            { id: h, details: m.details, ...b },
            {
              size: r
            }
          ), { details: S, ...C } = _;
          c[h] = { type: "text", details: S }, a[h] = C;
        }
        return !0;
      } catch {
        return !1;
      }
    });
    await Promise.all(u);
    const d = on(a);
    this.updateState({
      ...n,
      trackItemsMap: a,
      duration: d
    });
  }
}
async function _S(t) {
  const n = Se.cloneDeep(this.getState()), r = t.value?.options?.trackId, s = t.value?.options?.trackIndex;
  let a = [], c;
  if (t.key === Wi) {
    c = "video";
    const d = await Q3(t.value?.payload, {
      size: n.size
    }), { details: h, ...m } = d;
    n.trackItemDetailsMap[m.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[m.id] = m, n.trackItemIds.push(m.id), a = [m.id];
  }
  if (t.key === $i) {
    c = "image";
    const d = await J3(t.value?.payload, {
      size: n.size
    }), { details: h, ...m } = d;
    n.trackItemDetailsMap[m.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[m.id] = m, n.trackItemIds.push(m.id), a = [m.id];
  }
  if (t.key === Bi) {
    c = "audio";
    const d = await e_(t.value?.payload), { details: h, ...m } = d;
    n.trackItemDetailsMap[m.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[m.id] = m, n.trackItemIds.push(m.id), a = [m.id];
  }
  if (t.key === Th) {
    c = "text";
    const { details: d, ...h } = await Kh(
      t.value?.payload ?? void 0,
      {
        size: n.size
      }
    );
    n.trackItemDetailsMap[h.id] = { type: c, details: d }, n.trackItemsMap[h.id] = h, n.trackItemIds.push(h.id), a.push(h.id);
  }
  const u = xS(
    a,
    n.tracks,
    n.trackItemsMap,
    r,
    s
  );
  if (u.trackId)
    n.tracks.find((h) => h.id === u.trackId)?.items.push(...a);
  else if (u.trackIndex !== void 0) {
    const d = vf(c, a);
    n.tracks.splice(u.trackIndex, 0, d);
  } else {
    const d = vf(c, a);
    n.tracks.unshift(d);
  }
  n.duration = on(n.trackItemsMap), this.updateState(
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
function vf(t, n) {
  return {
    id: Ke(),
    accepts: ["text", "audio", "helper", "video", "image"],
    type: t,
    items: n,
    magnetic: !1,
    static: !1
  };
}
const xS = (t, n, r, s, a) => {
  if (s === void 0 && a === void 0)
    return { trackId: void 0, trackIndex: void 0 };
  const c = a !== void 0 ? n[Math.max(0, Math.min(a, n.length - 1))] : n.find((h) => h.id === s);
  if (!c)
    return {
      trackId: void 0,
      trackIndex: a !== void 0 ? Math.max(0, Math.min(a, n.length - 1)) : void 0
    };
  const u = c.items.map((h) => r[h]), d = t.map((h) => r[h]);
  for (const h of u) {
    const m = h.display.from, b = h.display.to;
    for (const _ of d) {
      const S = _.display.from;
      if (!(_.display.to <= m || S >= b))
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
}, bf = [
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
    this.stateSubject = new $d(r), this.stateHistorySubject = new $d({
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
    const s = Se.pick(n, bf), a = Se.pick(this.getState(), bf), c = Tp(a, s);
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
    if (!Se.isEqual(s, a)) {
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
      Se.isEqual(r.size, this.prevState.size) || n({ size: r.size });
    });
  }
  subscribeToScale(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Se.isEqual(r.scale, this.prevState.scale) || n({ scale: r.scale });
    });
  }
  subscribeToUpdateTrackItem(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Se.isEqual(r.trackItemsMap, this.prevState.trackItemsMap) || n({ trackItemsMap: r.trackItemsMap });
    });
  }
  subscribeToUpdateItemDetails(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Se.isEqual(
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
      ) || !Se.isEqual(r.tracks, this.prevState.tracks)) && n({ trackItemIds: r.trackItemIds });
    });
  }
  subscribeToActiveIds(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Se.isEqual(r.activeIds, this.prevState.activeIds) || n({ activeIds: r.activeIds });
    });
  }
  subscribeToTracks(n) {
    return this.stateSubject.asObservable().subscribe((r) => {
      (!Se.isEqual(r.tracks, this.prevState.tracks) || !Se.isEqual(r.trackItemIds, this.prevState.trackItemIds) || !Se.isEqual(r.trackItemsMap, this.prevState.trackItemsMap) || !Se.isEqual(r.transitionIds, this.prevState.transitionIds) || !Se.isEqual(r.transitionsMap, this.prevState.transitionsMap) || !Se.isEqual(
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
    mf();
    const {
      trackItemDetailsMap: a,
      trackItemIds: c,
      tracks: u,
      transitionIds: d,
      transitionsMap: h,
      trackItemsMap: m
    } = this.getState(), b = Se.cloneDeep({
      trackItemDetailsMap: a,
      trackItemIds: c,
      tracks: u,
      transitionIds: d,
      transitionsMap: h,
      trackItemsMap: m
    }), _ = [], S = [], C = [], O = [], A = [], E = [];
    r.forEach((V) => {
      let ae;
      const ye = V.path.slice(1);
      V.type === "CREATE" ? ae = {
        path: ye,
        op: "remove",
        value: V.value
      } : V.type === "CHANGE" ? ae = {
        path: ye,
        op: "replace",
        value: V.oldValue
      } : ae = {
        path: ye,
        op: "add",
        value: V.oldValue
      }, V.path.includes("trackItemIds") ? C.push(ae) : V.path.includes("transitionIds") ? S.push(ae) : V.path.includes("trackItemsMap") ? A.push(ae) : V.path.includes("transitionsMap") ? O.push(ae) : V.path.includes("tracks") ? _.push(ae) : V.path.includes("trackItemDetailsMap") && E.push(ae);
    });
    const P = this.applyPatch(b.tracks, _), M = this.applyPatch(
      b.transitionIds,
      S
    ), N = this.applyPatch(
      b.trackItemIds,
      C
    ), z = this.applyPatch(
      b.transitionsMap,
      O
    ), K = this.applyPatch(
      b.trackItemsMap,
      A
    ), Z = this.applyPatch(
      b.trackItemDetailsMap,
      E
    ), q = Se.cloneDeep({
      tracks: P,
      transitionIds: M,
      trackItemIds: N,
      transitionsMap: z,
      trackItemsMap: K,
      trackItemDetailsMap: Z
    }), Y = Se.cloneDeep(this.getState()), G = { ...Y, ...q };
    this.prevState = Y;
    const te = { redos: r, type: s };
    this.redos.push(te);
    const ne = on(G.trackItemsMap);
    this.stateSubject.next({ ...G, duration: ne }), this.stateHistorySubject.next({ handleRedo: !1, handleUndo: !0 });
  }
  redo() {
    const n = this.redos.pop();
    if (!n?.redos || !n?.type) return;
    mf();
    const r = this.getState(), {
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: c,
      transitionIds: u,
      transitionsMap: d,
      trackItemsMap: h
    } = r, m = Se.cloneDeep({
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: c,
      transitionIds: u,
      transitionsMap: d,
      trackItemsMap: h
    }), b = [], _ = [], S = [], C = [], O = [], A = [];
    n.redos.forEach((z) => {
      const K = z.path.slice(1);
      let Z = {};
      switch (z.type) {
        case "CREATE":
          Z = {
            path: K,
            op: "add",
            value: z.value
          };
          break;
        case "CHANGE":
          Z = {
            path: K,
            op: "replace",
            value: z.value
          };
          break;
        case "REMOVE":
          Z = {
            path: K,
            op: "remove",
            value: z.oldValue
          };
          break;
        default:
          return null;
      }
      z.path.includes("trackItemIds") ? S.push(Z) : z.path.includes("transitionIds") ? _.push(Z) : z.path.includes("trackItemsMap") ? O.push(Z) : z.path.includes("transitionsMap") ? C.push(Z) : z.path.includes("trackItemDetailsMap") ? A.push(Z) : b.push(Z);
    });
    const E = {
      tracks: this.applyPatch(m.tracks, b),
      transitionIds: this.applyPatch(m.transitionIds, _),
      trackItemIds: this.applyPatch(m.trackItemIds, S),
      transitionsMap: this.applyPatch(m.transitionsMap, C),
      trackItemsMap: this.applyPatch(m.trackItemsMap, O),
      trackItemDetailsMap: this.applyPatch(m.trackItemDetailsMap, A)
    }, P = Se.cloneDeep(E), M = { ...Se.cloneDeep(r), ...P };
    this.prevState = r, this.undos.push({ undos: n.redos, type: n.type });
    const N = on(M.trackItemsMap);
    this.stateSubject.next({ ...M, duration: N }), this.stateHistorySubject.next({ handleRedo: !0, handleUndo: !1 });
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
function TS(t) {
  const n = me.subject.pipe(Sn(({ key: c }) => c.startsWith(W5))).subscribe((c) => {
    c.key === Mh && t.undo(), c.key === Ph && t.redo();
  }), r = me.subject.pipe(Sn(({ key: c, value: u }) => c.startsWith(L5))).subscribe((c) => {
    _S.bind(t)(c);
  }), s = me.subject.pipe(
    Sn(({ key: c, value: u }) => c.startsWith("scene"))
  ).subscribe(async (c) => {
    await wS.bind(t)(c);
  }), a = me.subject.pipe(Sn(({ key: c }) => c.startsWith(H5))).subscribe(async (c) => {
    yS.bind(t)(c);
  });
  return () => {
    n.unsubscribe(), r.unsubscribe(), a.unsubscribe(), s.unsubscribe();
  };
}
const CS = () => {
  const { playerRef: t, fps: n, timeline: r, setState: s } = In();
  Ht(() => {
    const c = me.subject.pipe(
      Sn(({ key: u }) => u.startsWith(j5))
    ).subscribe((u) => {
      if (u.key === N5) {
        const { time: d } = u.value?.payload;
        t?.current?.seekTo(d / 1e3 * n);
      } else if (u.key === Ch)
        t?.current?.play();
      else if (u.key === kh)
        t?.current?.pause();
      else if (u.key === z5)
        t?.current?.isPlaying() ? t.current.pause() : t?.current?.play();
      else if (u.key === F5) {
        const { frames: d } = u.value?.payload;
        t?.current?.seekTo(
          Math.round(t.current.getCurrentFrame()) + d
        );
      }
    });
    return () => {
      c.unsubscribe();
    };
  }, [t, n]), Ht(() => {
    const c = me.subject.pipe(
      Sn(({ key: u }) => u.startsWith(U5))
    ).subscribe((u) => {
      u.key === Oh && s({
        activeIds: u.value?.payload.activeIds
      });
    });
    return () => {
      c.unsubscribe();
    };
  }, [r]);
}, kS = new IS(), F7 = () => {
  const { playerRef: t } = In();
  CS();
  const [n, r] = it([]);
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
    /* @__PURE__ */ v.jsx("div", { className: "h-70 w-full ", children: t && /* @__PURE__ */ v.jsx(sS, { stateManager: kS }) })
  ] });
};
export {
  Ah as ACTIVE_CLONE,
  Eh as ACTIVE_DELETE,
  r6 as ACTIVE_PASTE,
  H5 as ACTIVE_PREFIX,
  n6 as ACTIVE_SET,
  Rh as ACTIVE_SPLIT,
  ZS as ADD_ANIMATION,
  Bi as ADD_AUDIO,
  $i as ADD_IMAGE,
  XS as ADD_MASK,
  GS as ADD_PLACEHOLDER,
  L5 as ADD_PREFIX,
  zS as ADD_SUFFIX,
  Th as ADD_TEXT,
  YS as ADD_TRANSITION,
  Wi as ADD_VIDEO,
  Zw as AUDIOS,
  F7 as AppComponent,
  c_ as Audio,
  Wn as AudioObject,
  k6 as BASE_TIMELINE_ELEMENT_DURATION_MS,
  Ne as Button,
  w3 as CanvasMixin,
  O6 as DEFAULT_AUDIO_BITRATE,
  R6 as DEFAULT_AUDIO_SAMPLE_RATE,
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
  Xd as DEFAULT_FONT,
  yw as DEFAULT_FRAMERATE,
  m7 as DEFAULT_MAX_BLUR,
  K6 as DEFAULT_MAX_BRIGHTNESS,
  c7 as DEFAULT_MAX_CONTRAST,
  z6 as DEFAULT_MAX_FADE,
  f7 as DEFAULT_MAX_OPACITY,
  $6 as DEFAULT_MAX_ROTATION,
  e7 as DEFAULT_MAX_SATURATION,
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
  Wh as DEFAULT_PREVIEW_SCALE,
  M6 as DEFAULT_PREVIEW_WIDTH,
  G6 as DEFAULT_ROTATION,
  V6 as DEFAULT_ROTATION_STEP,
  n7 as DEFAULT_SATURATION,
  t7 as DEFAULT_SATURATION_STEP,
  N6 as DEFAULT_SETTINGS_PANEL_WIDTH,
  x7 as DEFAULT_SPEED,
  _7 as DEFAULT_SPEED_STEP,
  o7 as DEFAULT_TEMPERATURE,
  s7 as DEFAULT_TEMPERATURE_STEP,
  bw as DEFAULT_VIDEO_HEIGHT,
  A6 as DEFAULT_VIDEO_MAX_BITRATE,
  E6 as DEFAULT_VIDEO_MIN_BITRATE,
  vw as DEFAULT_VIDEO_WIDTH,
  C7 as DEFAULT_VOLUME,
  T7 as DEFAULT_VOLUME_STEP,
  C6 as DEFAULT_WEIGHT,
  qs as DRAG_END,
  $5 as DRAG_PREFIX,
  Lh as DRAG_START,
  po as Draggable,
  pw as DroppableArea,
  qS as EDIT_OBJECT,
  KS as EDIT_PREFIX,
  QS as EDIT_SHAPE,
  JS as EDIT_TEXT,
  e6 as ENTER_EDIT_MODE,
  ww as FRAME_INTERVAL,
  y6 as GIANT_ICON_SIZE,
  W5 as HISTORY_PREFIX,
  Ph as HISTORY_REDO,
  v6 as HISTORY_RESET,
  Mh as HISTORY_UNDO,
  Xw as Header,
  f_ as Helper,
  Vi as HelperObject,
  Kw as IMAGES,
  u_ as Image,
  Vc as ImageObject,
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
  Oh as LAYER_SELECTION,
  c6 as LAYER_SEND_TO,
  p6 as LAYER_SPLIT,
  j6 as MAX_MEDIA_PANEL_WIDTH,
  D6 as MIN_MEDIA_PANEL_WIDTH,
  d3 as MenuItem,
  T6 as NORMAL_FONT_SIZE,
  _6 as NORMAL_ICON_SIZE,
  h3 as NavbarComponent,
  kh as PLAYER_PAUSE,
  Ch as PLAYER_PLAY,
  j5 as PLAYER_PREFIX,
  N5 as PLAYER_SEEK,
  F5 as PLAYER_SEEK_BY,
  t6 as PLAYER_SEEK_TO,
  z5 as PLAYER_TOGGLE_PLAY,
  vo as PREVIEW_FRAME_WIDTH,
  Li as Placeholder,
  m3 as Player,
  v3 as PlayheadComponent,
  ro as PreviewTrackItem,
  b3 as RulerComponent,
  mw as SECONDARY_FONT,
  gw as SMALL_FONT_SIZE,
  x6 as SMALL_ICON_SIZE,
  VS as STATE_CHANGED,
  $S as STATE_PREFIX,
  y3 as Scene,
  b6 as SceneBoard,
  Gr as ScrollArea,
  rh as ScrollBar,
  p3 as SequenceItem,
  t5 as Slider,
  IS as StateManager,
  jh as TIMELINE_BOUNDING_CHANGED,
  Wc as TIMELINE_OFFSET_CANVAS_LEFT,
  Gd as TIMELINE_OFFSET_CANVAS_RIGHT,
  yc as TIMELINE_OFFSET_X,
  V5 as TIMELINE_PREFIX,
  Dh as TIMELINE_SCALE_CHANGED,
  B5 as TIMELINE_SCALE_PREFIX,
  sn as TIMELINE_ZOOM_LEVELS,
  WS as TRACKS_CHANGED,
  BS as TRACK_ITEMS_CHANGED,
  US as TRACK_ITEMS_PREFIX,
  HS as TRACK_PREFIX,
  Jw as TRANSITIONS,
  D5 as Tabs,
  fc as TabsContent,
  Ih as TabsList,
  dc as TabsTrigger,
  qh as Text,
  Wr as TextObject,
  el as Timeline,
  sS as TimelineComponent,
  d_ as Track,
  h_ as TrackItemsMixin,
  ar as TrackObject,
  g_ as TracksMixin,
  Zt as Transition,
  no as TransitionGuide,
  b_ as TransitionsMixin,
  M7 as UPLOADS,
  qw as VIDEOS,
  l_ as Video,
  Yr as VideoObject,
  eS as addEventListeners,
  V3 as applyMixins,
  Ry as buttonVariants,
  K3 as calculateDisplayRange,
  on as calculateDuration,
  Gc as calculatePosition,
  Rw as calculateTimelineWidth,
  Z3 as calculateTrim,
  ut as cn,
  z3 as createAudioControls,
  $3 as createControls,
  L3 as createMediaControls,
  Yh as createResizeControls,
  yo as defaultColor,
  o_ as defaultSizes,
  q3 as filterAndCleanTracks,
  Bh as findIndex,
  LS as formatBytes,
  k7 as formatTimeToHumanReadable,
  _w as formatTimelineUnit,
  xw as frameToTimeString,
  Iw as getCurrentTime,
  E7 as getFitZoomLevel,
  L7 as getMovingState,
  kw as getNextZoom,
  Aw as getNextZoomIndex,
  Ew as getNextZoomLevel,
  ve as getOffset,
  Cw as getPreviousZoom,
  R7 as getPreviousZoomIndex,
  Tw as getPreviousZoomLevel,
  Xs as getTextHeight,
  A7 as getZoomByIndex,
  iS as handleEvents,
  eo as handleResize,
  G3 as loadAudio,
  e_ as loadAudioItem,
  n_ as loadAudioObject,
  Ow as loadFonts,
  X3 as loadImage,
  J3 as loadImageItem,
  r_ as loadImageObject,
  Kh as loadTextItem,
  s_ as loadTextObject,
  Y3 as loadVideo,
  Q3 as loadVideoItem,
  i_ as loadVideoObject,
  a_ as mergeSizes,
  $h as mergeTrackObjects,
  U as movingState,
  _3 as positionOffsets,
  O7 as randomInt,
  tS as removeEventListeners,
  Js as removeItemsFromTrack,
  Bn as renderControl,
  Vh as reorderTracksByIndex,
  TS as setupHistoryListeners,
  Ve as timeMsToUnits,
  Sw as timeToString,
  Be as transitionStore,
  or as unitsToTimeMs,
  j7 as updateMovingState,
  Bc as useCurrentPlayerFrame,
  bo as useIsDraggingOverTimeline,
  $c as useLayoutStore,
  In as useStore,
  CS as useTimelineEvents,
  Zh as wrapResizeWithAnchorPosition
};
