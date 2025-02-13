import * as k from "react";
import Et, { useState as it, useRef as Yt, cloneElement as Z2, useCallback as Ur, forwardRef as Rf, createElement as lc, useSyncExternalStore as K2, useEffect as Ht } from "react";
import { createPortal as q2 } from "react-dom";
import { create as Of } from "zustand";
import { Player as J2 } from "@remotion/player";
import { Sequence as Xs, AbsoluteFill as Ka, Audio as Q2, OffthreadVideo as ey, Img as ty } from "remotion";
import { ActiveSelection as Lc, controlsUtils as st, classRegistry as ot, Rect as an, Control as rn, util as Mf, Group as jc, Point as ny, Canvas as ry, FabricObject as Xt } from "fabric";
var Ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iy(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var uc = { exports: {} }, Ai = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd;
function sy() {
  if (Fd) return Ai;
  Fd = 1;
  var t = Et, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, h, g) {
    var b, x = {}, S = null, C = null;
    g !== void 0 && (S = "" + g), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (C = h.ref);
    for (b in h) s.call(h, b) && !c.hasOwnProperty(b) && (x[b] = h[b]);
    if (d && d.defaultProps) for (b in h = d.defaultProps, h) x[b] === void 0 && (x[b] = h[b]);
    return { $$typeof: n, type: d, key: S, ref: C, props: x, _owner: a.current };
  }
  return Ai.Fragment = r, Ai.jsx = u, Ai.jsxs = u, Ai;
}
var Ri = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd;
function oy() {
  return zd || (zd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Et, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
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
      return !!(typeof w == "string" || typeof w == "function" || w === s || w === c || Y || w === a || w === g || w === b || q || w === C || z || K || Z || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === x || w.$$typeof === u || w.$$typeof === d || w.$$typeof === h || // This needs to include all possible module reference object
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
        case g:
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
          case x:
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
    var ye = Object.assign, Oe = 0, xe, Ee, ke, $e, pt, ie, Gn;
    function mr() {
    }
    mr.__reactDisabledLog = !0;
    function Qr() {
      {
        if (Oe === 0) {
          xe = console.log, Ee = console.info, ke = console.warn, $e = console.error, pt = console.group, ie = console.groupCollapsed, Gn = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: mr,
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
              value: xe
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
    var Cn = P.ReactCurrentDispatcher, ei;
    function Kt(w, H, B) {
      {
        if (ei === void 0)
          try {
            throw Error();
          } catch (we) {
            var re = we.stack.trim().match(/\n( *(at )?)/);
            ei = re && re[1] || "";
          }
        return `
` + ei + w;
      }
    }
    var ln = !1, vr;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      vr = new br();
    }
    function Xn(w, H) {
      if (!w || ln)
        return "";
      {
        var B = vr.get(w);
        if (B !== void 0)
          return B;
      }
      var re;
      ln = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = Cn.current, Cn.current = null, Qr();
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
                    return w.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", w.displayName)), typeof w == "function" && vr.set(w, gt), gt;
                  }
                while (Le >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        ln = !1, Cn.current = Ie, Tn(), Error.prepareStackTrace = we;
      }
      var Wt = w ? w.displayName || w.name : "", dn = Wt ? Kt(Wt) : "";
      return typeof w == "function" && vr.set(w, dn), dn;
    }
    function es(w, H, B) {
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
        case g:
          return Kt("Suspense");
        case b:
          return Kt("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case h:
            return es(w.render);
          case x:
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
    var Yn = Object.prototype.hasOwnProperty, Ot = {}, ti = P.ReactDebugCurrentFrame;
    function yr(w) {
      if (w) {
        var H = w._owner, B = qt(w.type, w._source, H ? H.type : null);
        ti.setExtraStackFrame(B);
      } else
        ti.setExtraStackFrame(null);
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
            fe && !(fe instanceof Error) && (yr(we), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", B, pe, typeof fe), yr(null)), fe instanceof Error && !(fe.message in Ot) && (Ot[fe.message] = !0, yr(we), M("Failed %s type: %s", B, fe.message), yr(null));
          }
      }
    }
    var xt = Array.isArray;
    function un(w) {
      return xt(w);
    }
    function wr(w) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, B = H && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return B;
      }
    }
    function Ro(w) {
      try {
        return kn(w), !1;
      } catch {
        return !0;
      }
    }
    function kn(w) {
      return "" + w;
    }
    function ts(w) {
      if (Ro(w))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(w)), kn(w);
    }
    var En = P.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xr, _r;
    function ni(w) {
      if (Yn.call(w, "ref")) {
        var H = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function ri(w) {
      if (Yn.call(w, "key")) {
        var H = Object.getOwnPropertyDescriptor(w, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function ii(w, H) {
      typeof w.ref == "string" && En.current;
    }
    function si(w, H) {
      {
        var B = function() {
          xr || (xr = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        B.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function oi(w, H) {
      {
        var B = function() {
          _r || (_r = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        B.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var ai = function(w, H, B, re, we, Ie, pe) {
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
    function ci(w, H, B, re, we) {
      {
        var Ie, pe = {}, fe = null, Je = null;
        B !== void 0 && (ts(B), fe = "" + B), ri(H) && (ts(H.key), fe = "" + H.key), ni(H) && (Je = H.ref, ii(H, we));
        for (Ie in H)
          Yn.call(H, Ie) && !An.hasOwnProperty(Ie) && (pe[Ie] = H[Ie]);
        if (w && w.defaultProps) {
          var Le = w.defaultProps;
          for (Ie in Le)
            pe[Ie] === void 0 && (pe[Ie] = Le[Ie]);
        }
        if (fe || Je) {
          var Fe = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          fe && si(pe, Fe), Je && oi(pe, Fe);
        }
        return ai(w, fe, Je, we, re, En.current, pe);
      }
    }
    var li = P.ReactCurrentOwner, ns = P.ReactDebugCurrentFrame;
    function Rn(w) {
      if (w) {
        var H = w._owner, B = qt(w.type, w._source, H ? H.type : null);
        ns.setExtraStackFrame(B);
      } else
        ns.setExtraStackFrame(null);
    }
    var Sr;
    Sr = !1;
    function Ir(w) {
      return typeof w == "object" && w !== null && w.$$typeof === n;
    }
    function rs() {
      {
        if (li.current) {
          var w = ae(li.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function Oo(w) {
      return "";
    }
    var is = {};
    function Mo(w) {
      {
        var H = rs();
        if (!H) {
          var B = typeof w == "string" ? w : w.displayName || w.name;
          B && (H = `

Check the top-level render call using <` + B + ">.");
        }
        return H;
      }
    }
    function ui(w, H) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var B = Mo(H);
        if (is[B])
          return;
        is[B] = !0;
        var re = "";
        w && w._owner && w._owner !== li.current && (re = " It was passed a child from " + ae(w._owner.type) + "."), Rn(w), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, re), Rn(null);
      }
    }
    function ss(w, H) {
      {
        if (typeof w != "object")
          return;
        if (un(w))
          for (var B = 0; B < w.length; B++) {
            var re = w[B];
            Ir(re) && ui(re, H);
          }
        else if (Ir(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var we = E(w);
          if (typeof we == "function" && we !== w.entries)
            for (var Ie = we.call(w), pe; !(pe = Ie.next()).done; )
              Ir(pe.value) && ui(pe.value, H);
        }
      }
    }
    function Po(w) {
      {
        var H = w.type;
        if (H == null || typeof H == "string")
          return;
        var B;
        if (typeof H == "function")
          B = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === x))
          B = H.propTypes;
        else
          return;
        if (B) {
          var re = ae(H);
          Zn(B, w.props, "prop", re, w);
        } else if (H.PropTypes !== void 0 && !Sr) {
          Sr = !0;
          var we = ae(H);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Do(w) {
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
    var Tr = {};
    function os(w, H, B, re, we, Ie) {
      {
        var pe = te(w);
        if (!pe) {
          var fe = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Oo();
          Je ? fe += Je : fe += rs();
          var Le;
          w === null ? Le = "null" : un(w) ? Le = "array" : w !== void 0 && w.$$typeof === n ? (Le = "<" + (ae(w.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof w, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, fe);
        }
        var Fe = ci(w, H, B, we, Ie);
        if (Fe == null)
          return Fe;
        if (pe) {
          var gt = H.children;
          if (gt !== void 0)
            if (re)
              if (un(gt)) {
                for (var Wt = 0; Wt < gt.length; Wt++)
                  ss(gt[Wt], w);
                Object.freeze && Object.freeze(gt);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ss(gt, w);
        }
        if (Yn.call(H, "key")) {
          var dn = ae(w), Ge = Object.keys(H).filter(function(zo) {
            return zo !== "key";
          }), fi = Ge.length > 0 ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tr[dn + fi]) {
            var Fo = Ge.length > 0 ? "{" + Ge.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fi, dn, Fo, dn), Tr[dn + fi] = !0;
          }
        }
        return w === s ? Do(Fe) : Po(Fe), Fe;
      }
    }
    function di(w, H, B) {
      return os(w, H, B, !0);
    }
    function Lo(w, H, B) {
      return os(w, H, B, !1);
    }
    var jo = Lo, No = di;
    Ri.Fragment = s, Ri.jsx = jo, Ri.jsxs = No;
  }()), Ri;
}
process.env.NODE_ENV === "production" ? uc.exports = sy() : uc.exports = oy();
var v = uc.exports;
function Hd(t, n) {
  if (typeof t == "function")
    return t(n);
  t != null && (t.current = n);
}
function Pf(...t) {
  return (n) => {
    let r = !1;
    const s = t.map((a) => {
      const c = Hd(a, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const c = s[a];
          typeof c == "function" ? c() : Hd(t[a], null);
        }
      };
  };
}
function dt(...t) {
  return k.useCallback(Pf(...t), t);
}
var Br = k.forwardRef((t, n) => {
  const { children: r, ...s } = t, a = k.Children.toArray(r), c = a.find(cy);
  if (c) {
    const u = c.props.children, d = a.map((h) => h === c ? k.Children.count(u) > 1 ? k.Children.only(null) : k.isValidElement(u) ? u.props.children : null : h);
    return /* @__PURE__ */ v.jsx(dc, { ...s, ref: n, children: k.isValidElement(u) ? k.cloneElement(u, void 0, d) : null });
  }
  return /* @__PURE__ */ v.jsx(dc, { ...s, ref: n, children: r });
});
Br.displayName = "Slot";
var dc = k.forwardRef((t, n) => {
  const { children: r, ...s } = t;
  if (k.isValidElement(r)) {
    const a = uy(r), c = ly(s, r.props);
    return r.type !== k.Fragment && (c.ref = n ? Pf(n, a) : a), k.cloneElement(r, c);
  }
  return k.Children.count(r) > 1 ? k.Children.only(null) : null;
});
dc.displayName = "SlotClone";
var ay = ({ children: t }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: t });
function cy(t) {
  return k.isValidElement(t) && t.type === ay;
}
function ly(t, n) {
  const r = { ...n };
  for (const s in n) {
    const a = t[s], c = n[s];
    /^on[A-Z]/.test(s) ? a && c ? r[s] = (...d) => {
      c(...d), a(...d);
    } : a && (r[s] = a) : s === "style" ? r[s] = { ...a, ...c } : s === "className" && (r[s] = [a, c].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function uy(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? t.ref : (n = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
var dy = Br;
function Df(t) {
  var n, r, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (n = 0; n < a; n++) t[n] && (r = Df(t[n])) && (s && (s += " "), s += r);
  } else for (r in t) t[r] && (s && (s += " "), s += r);
  return s;
}
function Lf() {
  for (var t, n, r = 0, s = "", a = arguments.length; r < a; r++) (t = arguments[r]) && (n = Df(t)) && (s && (s += " "), s += n);
  return s;
}
const Ud = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Wd = Lf, fy = (t, n) => (r) => {
  var s;
  if (n?.variants == null) return Wd(t, r?.class, r?.className);
  const { variants: a, defaultVariants: c } = n, u = Object.keys(a).map((g) => {
    const b = r?.[g], x = c?.[g];
    if (b === null) return null;
    const S = Ud(b) || Ud(x);
    return a[g][S];
  }), d = r && Object.entries(r).reduce((g, b) => {
    let [x, S] = b;
    return S === void 0 || (g[x] = S), g;
  }, {}), h = n == null || (s = n.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((g, b) => {
    let { class: x, className: S, ...C } = b;
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
      ...g,
      x,
      S
    ] : g;
  }, []);
  return Wd(t, u, h, r?.class, r?.className);
}, Nc = "-", hy = (t) => {
  const n = gy(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = t;
  return {
    getClassGroupId: (u) => {
      const d = u.split(Nc);
      return d[0] === "" && d.length !== 1 && d.shift(), jf(d, n) || py(u);
    },
    getConflictingClassGroupIds: (u, d) => {
      const h = r[u] || [];
      return d && s[u] ? [...h, ...s[u]] : h;
    }
  };
}, jf = (t, n) => {
  if (t.length === 0)
    return n.classGroupId;
  const r = t[0], s = n.nextPart.get(r), a = s ? jf(t.slice(1), s) : void 0;
  if (a)
    return a;
  if (n.validators.length === 0)
    return;
  const c = t.join(Nc);
  return n.validators.find(({
    validator: u
  }) => u(c))?.classGroupId;
}, Bd = /^\[(.+)\]$/, py = (t) => {
  if (Bd.test(t)) {
    const n = Bd.exec(t)[1], r = n?.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, gy = (t) => {
  const {
    theme: n,
    prefix: r
  } = t, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vy(Object.entries(t.classGroups), r).forEach(([c, u]) => {
    fc(u, s, c, n);
  }), s;
}, fc = (t, n, r, s) => {
  t.forEach((a) => {
    if (typeof a == "string") {
      const c = a === "" ? n : $d(n, a);
      c.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (my(a)) {
        fc(a(s), n, r, s);
        return;
      }
      n.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([c, u]) => {
      fc(u, $d(n, c), r, s);
    });
  });
}, $d = (t, n) => {
  let r = t;
  return n.split(Nc).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, my = (t) => t.isThemeGetter, vy = (t, n) => n ? t.map(([r, s]) => {
  const a = s.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, d]) => [n + u, d])) : c);
  return [r, a];
}) : t, by = (t) => {
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
}, Nf = "!", yy = (t) => {
  const {
    separator: n,
    experimentalParseClassName: r
  } = t, s = n.length === 1, a = n[0], c = n.length, u = (d) => {
    const h = [];
    let g = 0, b = 0, x;
    for (let E = 0; E < d.length; E++) {
      let P = d[E];
      if (g === 0) {
        if (P === a && (s || d.slice(E, E + c) === n)) {
          h.push(d.slice(b, E)), b = E + c;
          continue;
        }
        if (P === "/") {
          x = E;
          continue;
        }
      }
      P === "[" ? g++ : P === "]" && g--;
    }
    const S = h.length === 0 ? d : d.substring(b), C = S.startsWith(Nf), O = C ? S.substring(1) : S, A = x && x > b ? x - b : void 0;
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
}, wy = (t) => {
  if (t.length <= 1)
    return t;
  const n = [];
  let r = [];
  return t.forEach((s) => {
    s[0] === "[" ? (n.push(...r.sort(), s), r = []) : r.push(s);
  }), n.push(...r.sort()), n;
}, xy = (t) => ({
  cache: by(t.cacheSize),
  parseClassName: yy(t),
  ...hy(t)
}), _y = /\s+/, Sy = (t, n) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: a
  } = n, c = [], u = t.trim().split(_y);
  let d = "";
  for (let h = u.length - 1; h >= 0; h -= 1) {
    const g = u[h], {
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: S,
      maybePostfixModifierPosition: C
    } = r(g);
    let O = !!C, A = s(O ? S.substring(0, C) : S);
    if (!A) {
      if (!O) {
        d = g + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (A = s(S), !A) {
        d = g + (d.length > 0 ? " " + d : d);
        continue;
      }
      O = !1;
    }
    const E = wy(b).join(":"), P = x ? E + Nf : E, M = P + A;
    if (c.includes(M))
      continue;
    c.push(M);
    const N = a(A, O);
    for (let z = 0; z < N.length; ++z) {
      const K = N[z];
      c.push(P + K);
    }
    d = g + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Iy() {
  let t = 0, n, r, s = "";
  for (; t < arguments.length; )
    (n = arguments[t++]) && (r = Ff(n)) && (s && (s += " "), s += r);
  return s;
}
const Ff = (t) => {
  if (typeof t == "string")
    return t;
  let n, r = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (n = Ff(t[s])) && (r && (r += " "), r += n);
  return r;
};
function Ty(t, ...n) {
  let r, s, a, c = u;
  function u(h) {
    const g = n.reduce((b, x) => x(b), t());
    return r = xy(g), s = r.cache.get, a = r.cache.set, c = d, d(h);
  }
  function d(h) {
    const g = s(h);
    if (g)
      return g;
    const b = Sy(h, r);
    return a(h, b), b;
  }
  return function() {
    return c(Iy.apply(null, arguments));
  };
}
const Pe = (t) => {
  const n = (r) => r[t] || [];
  return n.isThemeGetter = !0, n;
}, zf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cy = /^\d+\/\d+$/, ky = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ey = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ay = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ry = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Oy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, My = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xn = (t) => Wr(t) || ky.has(t) || Cy.test(t), Hn = (t) => Gr(t, "length", Hy), Wr = (t) => !!t && !Number.isNaN(Number(t)), qa = (t) => Gr(t, "number", Wr), Oi = (t) => !!t && Number.isInteger(Number(t)), Py = (t) => t.endsWith("%") && Wr(t.slice(0, -1)), le = (t) => zf.test(t), Un = (t) => Ey.test(t), Dy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ly = (t) => Gr(t, Dy, Hf), jy = (t) => Gr(t, "position", Hf), Ny = /* @__PURE__ */ new Set(["image", "url"]), Fy = (t) => Gr(t, Ny, Wy), zy = (t) => Gr(t, "", Uy), Mi = () => !0, Gr = (t, n, r) => {
  const s = zf.exec(t);
  return s ? s[1] ? typeof n == "string" ? s[1] === n : n.has(s[1]) : r(s[2]) : !1;
}, Hy = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ay.test(t) && !Ry.test(t)
), Hf = () => !1, Uy = (t) => Oy.test(t), Wy = (t) => My.test(t), By = () => {
  const t = Pe("colors"), n = Pe("spacing"), r = Pe("blur"), s = Pe("brightness"), a = Pe("borderColor"), c = Pe("borderRadius"), u = Pe("borderSpacing"), d = Pe("borderWidth"), h = Pe("contrast"), g = Pe("grayscale"), b = Pe("hueRotate"), x = Pe("invert"), S = Pe("gap"), C = Pe("gradientColorStops"), O = Pe("gradientColorStopPositions"), A = Pe("inset"), E = Pe("margin"), P = Pe("opacity"), M = Pe("padding"), N = Pe("saturate"), z = Pe("scale"), K = Pe("sepia"), Z = Pe("skew"), q = Pe("space"), Y = Pe("translate"), G = () => ["auto", "contain", "none"], te = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", le, n], V = () => [le, n], ae = () => ["", xn, Hn], ye = () => ["auto", Wr, le], Oe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], xe = () => ["solid", "dashed", "dotted", "double", "none"], Ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ke = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], $e = () => ["", "0", le], pt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [Wr, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mi],
      spacing: [xn, Hn],
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
      gradientColorStopPositions: [Py, Hn],
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
        z: ["auto", Oi, le]
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
        order: ["first", "last", "none", Oi, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Mi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Oi, le]
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
        "grid-rows": [Mi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Oi, le]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mi]
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
        "line-clamp": ["none", Wr, qa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xn, le]
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
        decoration: [...xe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xn, Hn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xn, le]
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
        bg: [...Oe(), jy]
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
        bg: ["auto", "cover", "contain", Ly]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Fy]
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
        border: [...xe(), "hidden"]
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
        divide: xe()
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
        outline: ["", ...xe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [xn, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xn, Hn]
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
        "ring-offset": [xn, Hn]
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
        shadow: ["", "inner", "none", Un, zy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Mi]
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
        grayscale: [g]
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
        "backdrop-grayscale": [g]
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
        rotate: [Oi, le]
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
        stroke: [xn, Hn, qa]
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
}, $y = /* @__PURE__ */ Ty(By);
function ut(...t) {
  return $y(Lf(t));
}
function y6(t, n = {}) {
  const { decimals: r = 0, sizeType: s = "normal" } = n, a = ["Bytes", "KB", "MB", "GB", "TB"], c = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (t === 0) return "0 Byte";
  const u = Math.floor(Math.log(t) / Math.log(1024));
  return `${(t / Math.pow(1024, u)).toFixed(r)} ${s === "accurate" ? c[u] ?? "Bytest" : a[u] ?? "Bytes"}`;
}
const Vy = fy(
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
    const u = s ? Br : "button";
    return /* @__PURE__ */ v.jsx(
      u,
      {
        className: ut(Vy({ variant: n, size: r, className: t })),
        ref: c,
        ...a
      }
    );
  }
);
Ne.displayName = "Button";
function Fc(t, [n, r]) {
  return Math.min(r, Math.max(n, t));
}
function He(t, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(a) {
    if (t?.(a), r === !1 || !a.defaultPrevented)
      return n?.(a);
  };
}
function Gi(t, n = []) {
  let r = [];
  function s(c, u) {
    const d = k.createContext(u), h = r.length;
    r = [...r, u];
    const g = (x) => {
      const { scope: S, children: C, ...O } = x, A = S?.[t]?.[h] || d, E = k.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ v.jsx(A.Provider, { value: E, children: C });
    };
    g.displayName = c + "Provider";
    function b(x, S) {
      const C = S?.[t]?.[h] || d, O = k.useContext(C);
      if (O) return O;
      if (u !== void 0) return u;
      throw new Error(`\`${x}\` must be used within \`${c}\``);
    }
    return [g, b];
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
  return a.scopeName = t, [s, Gy(a, ...n)];
}
function Gy(...t) {
  const n = t[0];
  if (t.length === 1) return n;
  const r = () => {
    const s = t.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(c) {
      const u = s.reduce((d, { useScope: h, scopeName: g }) => {
        const x = h(c)[`__scope${g}`];
        return { ...d, ...x };
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
function zc({
  prop: t,
  defaultProp: n,
  onChange: r = () => {
  }
}) {
  const [s, a] = Xy({ defaultProp: n, onChange: r }), c = t !== void 0, u = c ? t : s, d = tn(r), h = k.useCallback(
    (g) => {
      if (c) {
        const x = typeof g == "function" ? g(t) : g;
        x !== t && d(x);
      } else
        a(g);
    },
    [c, t, a, d]
  );
  return [u, h];
}
function Xy({
  defaultProp: t,
  onChange: n
}) {
  const r = k.useState(t), [s] = r, a = k.useRef(s), c = tn(n);
  return k.useEffect(() => {
    a.current !== s && (c(s), a.current = s);
  }, [s, a, c]), r;
}
var Yy = k.createContext(void 0);
function po(t) {
  const n = k.useContext(Yy);
  return t || n || "ltr";
}
function Zy(t) {
  const n = k.useRef({ value: t, previous: t });
  return k.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
var zi = globalThis?.document ? k.useLayoutEffect : () => {
};
function Ky(t) {
  const [n, r] = k.useState(void 0);
  return zi(() => {
    if (t) {
      r({ width: t.offsetWidth, height: t.offsetHeight });
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const c = a[0];
        let u, d;
        if ("borderBoxSize" in c) {
          const h = c.borderBoxSize, g = Array.isArray(h) ? h[0] : h;
          u = g.inlineSize, d = g.blockSize;
        } else
          u = t.offsetWidth, d = t.offsetHeight;
        r({ width: u, height: d });
      });
      return s.observe(t, { box: "border-box" }), () => s.unobserve(t);
    } else
      r(void 0);
  }, [t]), n;
}
var qy = [
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
], ft = qy.reduce((t, n) => {
  const r = k.forwardRef((s, a) => {
    const { asChild: c, ...u } = s, d = c ? Br : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(d, { ...u, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...t, [n]: r };
}, {});
function Uf(t) {
  const n = t + "CollectionProvider", [r, s] = Gi(n), [a, c] = r(
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
      return /* @__PURE__ */ v.jsx(Br, { ref: M, children: E });
    }
  );
  h.displayName = d;
  const g = t + "CollectionItemSlot", b = "data-radix-collection-item", x = Et.forwardRef(
    (C, O) => {
      const { scope: A, children: E, ...P } = C, M = Et.useRef(null), N = dt(O, M), z = c(g, A);
      return Et.useEffect(() => (z.itemMap.set(M, { ref: M, ...P }), () => void z.itemMap.delete(M))), /* @__PURE__ */ v.jsx(Br, { [b]: "", ref: N, children: E });
    }
  );
  x.displayName = g;
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
    { Provider: u, Slot: h, ItemSlot: x },
    S,
    s
  ];
}
var Wf = ["PageUp", "PageDown"], Bf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], $f = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Xr = "Slider", [hc, Jy, Qy] = Uf(Xr), [Vf, w6] = Gi(Xr, [
  Qy
]), [e5, go] = Vf(Xr), Gf = k.forwardRef(
  (t, n) => {
    const {
      name: r,
      min: s = 0,
      max: a = 100,
      step: c = 1,
      orientation: u = "horizontal",
      disabled: d = !1,
      minStepsBetweenThumbs: h = 0,
      defaultValue: g = [s],
      value: b,
      onValueChange: x = () => {
      },
      onValueCommit: S = () => {
      },
      inverted: C = !1,
      form: O,
      ...A
    } = t, E = k.useRef(/* @__PURE__ */ new Set()), P = k.useRef(0), N = u === "horizontal" ? t5 : n5, [z = [], K] = zc({
      prop: b,
      defaultProp: g,
      onChange: (ne) => {
        [...E.current][P.current]?.focus(), x(ne);
      }
    }), Z = k.useRef(z);
    function q(ne) {
      const V = a5(z, ne);
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
      const ye = d5(c), Oe = f5(Math.round((ne - s) / c) * c + s, ye), xe = Fc(Oe, [s, a]);
      K((Ee = []) => {
        const ke = s5(Ee, xe, V);
        if (u5(ke, h * c)) {
          P.current = ke.indexOf(xe);
          const $e = String(ke) !== String(Ee);
          return $e && ae && S(ke), $e ? ke : Ee;
        } else
          return Ee;
      });
    }
    return /* @__PURE__ */ v.jsx(
      e5,
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
        children: /* @__PURE__ */ v.jsx(hc.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(hc.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(
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
                const Oe = Wf.includes(ne.key) || ne.shiftKey && Bf.includes(ne.key) ? 10 : 1, xe = P.current, Ee = z[xe], ke = c * Oe * V;
                te(Ee + ke, xe, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Gf.displayName = Xr;
var [Xf, Yf] = Vf(Xr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), t5 = k.forwardRef(
  (t, n) => {
    const {
      min: r,
      max: s,
      dir: a,
      inverted: c,
      onSlideStart: u,
      onSlideMove: d,
      onSlideEnd: h,
      onStepKeyDown: g,
      ...b
    } = t, [x, S] = k.useState(null), C = dt(n, (N) => S(N)), O = k.useRef(void 0), A = po(a), E = A === "ltr", P = E && !c || !E && c;
    function M(N) {
      const z = O.current || x.getBoundingClientRect(), K = [0, z.width], q = Hc(K, P ? [r, s] : [s, r]);
      return O.current = z, q(N - z.left);
    }
    return /* @__PURE__ */ v.jsx(
      Xf,
      {
        scope: t.__scopeSlider,
        startEdge: P ? "left" : "right",
        endEdge: P ? "right" : "left",
        direction: P ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ v.jsx(
          Zf,
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
              const K = $f[P ? "from-left" : "from-right"].includes(N.key);
              g?.({ event: N, direction: K ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), n5 = k.forwardRef(
  (t, n) => {
    const {
      min: r,
      max: s,
      inverted: a,
      onSlideStart: c,
      onSlideMove: u,
      onSlideEnd: d,
      onStepKeyDown: h,
      ...g
    } = t, b = k.useRef(null), x = dt(n, b), S = k.useRef(void 0), C = !a;
    function O(A) {
      const E = S.current || b.current.getBoundingClientRect(), P = [0, E.height], N = Hc(P, C ? [s, r] : [r, s]);
      return S.current = E, N(A - E.top);
    }
    return /* @__PURE__ */ v.jsx(
      Xf,
      {
        scope: t.__scopeSlider,
        startEdge: C ? "bottom" : "top",
        endEdge: C ? "top" : "bottom",
        size: "height",
        direction: C ? 1 : -1,
        children: /* @__PURE__ */ v.jsx(
          Zf,
          {
            "data-orientation": "vertical",
            ...g,
            ref: x,
            style: {
              ...g.style,
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
              const P = $f[C ? "from-bottom" : "from-top"].includes(A.key);
              h?.({ event: A, direction: P ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Zf = k.forwardRef(
  (t, n) => {
    const {
      __scopeSlider: r,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: c,
      onHomeKeyDown: u,
      onEndKeyDown: d,
      onStepKeyDown: h,
      ...g
    } = t, b = go(Xr, r);
    return /* @__PURE__ */ v.jsx(
      ft.span,
      {
        ...g,
        ref: n,
        onKeyDown: He(t.onKeyDown, (x) => {
          x.key === "Home" ? (u(x), x.preventDefault()) : x.key === "End" ? (d(x), x.preventDefault()) : Wf.concat(Bf).includes(x.key) && (h(x), x.preventDefault());
        }),
        onPointerDown: He(t.onPointerDown, (x) => {
          const S = x.target;
          S.setPointerCapture(x.pointerId), x.preventDefault(), b.thumbs.has(S) ? S.focus() : s(x);
        }),
        onPointerMove: He(t.onPointerMove, (x) => {
          x.target.hasPointerCapture(x.pointerId) && a(x);
        }),
        onPointerUp: He(t.onPointerUp, (x) => {
          const S = x.target;
          S.hasPointerCapture(x.pointerId) && (S.releasePointerCapture(x.pointerId), c(x));
        })
      }
    );
  }
), Kf = "SliderTrack", qf = k.forwardRef(
  (t, n) => {
    const { __scopeSlider: r, ...s } = t, a = go(Kf, r);
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
qf.displayName = Kf;
var pc = "SliderRange", Jf = k.forwardRef(
  (t, n) => {
    const { __scopeSlider: r, ...s } = t, a = go(pc, r), c = Yf(pc, r), u = k.useRef(null), d = dt(n, u), h = a.values.length, g = a.values.map(
      (S) => eh(S, a.min, a.max)
    ), b = h > 1 ? Math.min(...g) : 0, x = 100 - Math.max(...g);
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
          [c.endEdge]: x + "%"
        }
      }
    );
  }
);
Jf.displayName = pc;
var gc = "SliderThumb", Qf = k.forwardRef(
  (t, n) => {
    const r = Jy(t.__scopeSlider), [s, a] = k.useState(null), c = dt(n, (d) => a(d)), u = k.useMemo(
      () => s ? r().findIndex((d) => d.ref.current === s) : -1,
      [r, s]
    );
    return /* @__PURE__ */ v.jsx(r5, { ...t, ref: c, index: u });
  }
), r5 = k.forwardRef(
  (t, n) => {
    const { __scopeSlider: r, index: s, name: a, ...c } = t, u = go(gc, r), d = Yf(gc, r), [h, g] = k.useState(null), b = dt(n, (M) => g(M)), x = h ? u.form || !!h.closest("form") : !0, S = Ky(h), C = u.values[s], O = C === void 0 ? 0 : eh(C, u.min, u.max), A = o5(s, u.values.length), E = S?.[d.size], P = E ? c5(E, O, d.direction) : 0;
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
          /* @__PURE__ */ v.jsx(hc.ItemSlot, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(
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
          x && /* @__PURE__ */ v.jsx(
            i5,
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
Qf.displayName = gc;
var i5 = (t) => {
  const { value: n, ...r } = t, s = k.useRef(null), a = Zy(n);
  return k.useEffect(() => {
    const c = s.current, u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
    if (a !== n && h) {
      const g = new Event("input", { bubbles: !0 });
      h.call(c, n), c.dispatchEvent(g);
    }
  }, [a, n]), /* @__PURE__ */ v.jsx("input", { style: { display: "none" }, ...r, ref: s, defaultValue: n });
};
function s5(t = [], n, r) {
  const s = [...t];
  return s[r] = n, s.sort((a, c) => a - c);
}
function eh(t, n, r) {
  const c = 100 / (r - n) * (t - n);
  return Fc(c, [0, 100]);
}
function o5(t, n) {
  return n > 2 ? `Value ${t + 1} of ${n}` : n === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function a5(t, n) {
  if (t.length === 1) return 0;
  const r = t.map((a) => Math.abs(a - n)), s = Math.min(...r);
  return r.indexOf(s);
}
function c5(t, n, r) {
  const s = t / 2, c = Hc([0, 50], [0, s]);
  return (s - c(n) * r) * r;
}
function l5(t) {
  return t.slice(0, -1).map((n, r) => t[r + 1] - n);
}
function u5(t, n) {
  if (n > 0) {
    const r = l5(t);
    return Math.min(...r) >= n;
  }
  return !0;
}
function Hc(t, n) {
  return (r) => {
    if (t[0] === t[1] || n[0] === n[1]) return n[0];
    const s = (n[1] - n[0]) / (t[1] - t[0]);
    return n[0] + s * (r - t[0]);
  };
}
function d5(t) {
  return (String(t).split(".")[1] || "").length;
}
function f5(t, n) {
  const r = Math.pow(10, n);
  return Math.round(t * r) / r;
}
var th = Gf, h5 = qf, p5 = Jf, g5 = Qf;
const m5 = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  th,
  {
    ref: r,
    className: ut(
      "relative flex w-full touch-none select-none items-center",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx(h5, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ v.jsx(p5, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ v.jsx(g5, { className: "block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
m5.displayName = th.displayName;
function v5(t, n) {
  return k.useReducer((r, s) => n[r][s] ?? r, t);
}
var Yr = (t) => {
  const { present: n, children: r } = t, s = b5(n), a = typeof r == "function" ? r({ present: s.isPresent }) : k.Children.only(r), c = dt(s.ref, y5(a));
  return typeof r == "function" || s.isPresent ? k.cloneElement(a, { ref: c }) : null;
};
Yr.displayName = "Presence";
function b5(t) {
  const [n, r] = k.useState(), s = k.useRef({}), a = k.useRef(t), c = k.useRef("none"), u = t ? "mounted" : "unmounted", [d, h] = v5(u, {
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
    const g = Ys(s.current);
    c.current = d === "mounted" ? g : "none";
  }, [d]), zi(() => {
    const g = s.current, b = a.current;
    if (b !== t) {
      const S = c.current, C = Ys(g);
      t ? h("MOUNT") : C === "none" || g?.display === "none" ? h("UNMOUNT") : h(b && S !== C ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
    }
  }, [t, h]), zi(() => {
    if (n) {
      let g;
      const b = n.ownerDocument.defaultView ?? window, x = (C) => {
        const A = Ys(s.current).includes(C.animationName);
        if (C.target === n && A && (h("ANIMATION_END"), !a.current)) {
          const E = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", g = b.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = E);
          });
        }
      }, S = (C) => {
        C.target === n && (c.current = Ys(s.current));
      };
      return n.addEventListener("animationstart", S), n.addEventListener("animationcancel", x), n.addEventListener("animationend", x), () => {
        b.clearTimeout(g), n.removeEventListener("animationstart", S), n.removeEventListener("animationcancel", x), n.removeEventListener("animationend", x);
      };
    } else
      h("ANIMATION_END");
  }, [n, h]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: k.useCallback((g) => {
      g && (s.current = getComputedStyle(g)), r(g);
    }, [])
  };
}
function Ys(t) {
  return t?.animationName || "none";
}
function y5(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? t.ref : (n = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
function w5(t, n) {
  return k.useReducer((r, s) => n[r][s] ?? r, t);
}
var Uc = "ScrollArea", [nh, x6] = Gi(Uc), [x5, Ut] = nh(Uc), rh = k.forwardRef(
  (t, n) => {
    const {
      __scopeScrollArea: r,
      type: s = "hover",
      dir: a,
      scrollHideDelay: c = 600,
      ...u
    } = t, [d, h] = k.useState(null), [g, b] = k.useState(null), [x, S] = k.useState(null), [C, O] = k.useState(null), [A, E] = k.useState(null), [P, M] = k.useState(0), [N, z] = k.useState(0), [K, Z] = k.useState(!1), [q, Y] = k.useState(!1), G = dt(n, (ne) => h(ne)), te = po(a);
    return /* @__PURE__ */ v.jsx(
      x5,
      {
        scope: r,
        type: s,
        dir: te,
        scrollHideDelay: c,
        scrollArea: d,
        viewport: g,
        onViewportChange: b,
        content: x,
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
rh.displayName = Uc;
var ih = "ScrollAreaViewport", sh = k.forwardRef(
  (t, n) => {
    const { __scopeScrollArea: r, children: s, nonce: a, ...c } = t, u = Ut(ih, r), d = k.useRef(null), h = dt(n, d, u.onViewportChange);
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
sh.displayName = ih;
var cn = "ScrollAreaScrollbar", mo = k.forwardRef(
  (t, n) => {
    const { forceMount: r, ...s } = t, a = Ut(cn, t.__scopeScrollArea), { onScrollbarXEnabledChange: c, onScrollbarYEnabledChange: u } = a, d = t.orientation === "horizontal";
    return k.useEffect(() => (d ? c(!0) : u(!0), () => {
      d ? c(!1) : u(!1);
    }), [d, c, u]), a.type === "hover" ? /* @__PURE__ */ v.jsx(_5, { ...s, ref: n, forceMount: r }) : a.type === "scroll" ? /* @__PURE__ */ v.jsx(S5, { ...s, ref: n, forceMount: r }) : a.type === "auto" ? /* @__PURE__ */ v.jsx(oh, { ...s, ref: n, forceMount: r }) : a.type === "always" ? /* @__PURE__ */ v.jsx(Wc, { ...s, ref: n }) : null;
  }
);
mo.displayName = cn;
var _5 = k.forwardRef((t, n) => {
  const { forceMount: r, ...s } = t, a = Ut(cn, t.__scopeScrollArea), [c, u] = k.useState(!1);
  return k.useEffect(() => {
    const d = a.scrollArea;
    let h = 0;
    if (d) {
      const g = () => {
        window.clearTimeout(h), u(!0);
      }, b = () => {
        h = window.setTimeout(() => u(!1), a.scrollHideDelay);
      };
      return d.addEventListener("pointerenter", g), d.addEventListener("pointerleave", b), () => {
        window.clearTimeout(h), d.removeEventListener("pointerenter", g), d.removeEventListener("pointerleave", b);
      };
    }
  }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ v.jsx(Yr, { present: r || c, children: /* @__PURE__ */ v.jsx(
    oh,
    {
      "data-state": c ? "visible" : "hidden",
      ...s,
      ref: n
    }
  ) });
}), S5 = k.forwardRef((t, n) => {
  const { forceMount: r, ...s } = t, a = Ut(cn, t.__scopeScrollArea), c = t.orientation === "horizontal", u = bo(() => h("SCROLL_END"), 100), [d, h] = w5("hidden", {
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
      const g = window.setTimeout(() => h("HIDE"), a.scrollHideDelay);
      return () => window.clearTimeout(g);
    }
  }, [d, a.scrollHideDelay, h]), k.useEffect(() => {
    const g = a.viewport, b = c ? "scrollLeft" : "scrollTop";
    if (g) {
      let x = g[b];
      const S = () => {
        const C = g[b];
        x !== C && (h("SCROLL"), u()), x = C;
      };
      return g.addEventListener("scroll", S), () => g.removeEventListener("scroll", S);
    }
  }, [a.viewport, c, h, u]), /* @__PURE__ */ v.jsx(Yr, { present: r || d !== "hidden", children: /* @__PURE__ */ v.jsx(
    Wc,
    {
      "data-state": d === "hidden" ? "hidden" : "visible",
      ...s,
      ref: n,
      onPointerEnter: He(t.onPointerEnter, () => h("POINTER_ENTER")),
      onPointerLeave: He(t.onPointerLeave, () => h("POINTER_LEAVE"))
    }
  ) });
}), oh = k.forwardRef((t, n) => {
  const r = Ut(cn, t.__scopeScrollArea), { forceMount: s, ...a } = t, [c, u] = k.useState(!1), d = t.orientation === "horizontal", h = bo(() => {
    if (r.viewport) {
      const g = r.viewport.offsetWidth < r.viewport.scrollWidth, b = r.viewport.offsetHeight < r.viewport.scrollHeight;
      u(d ? g : b);
    }
  }, 10);
  return $r(r.viewport, h), $r(r.content, h), /* @__PURE__ */ v.jsx(Yr, { present: s || c, children: /* @__PURE__ */ v.jsx(
    Wc,
    {
      "data-state": c ? "visible" : "hidden",
      ...a,
      ref: n
    }
  ) });
}), Wc = k.forwardRef((t, n) => {
  const { orientation: r = "vertical", ...s } = t, a = Ut(cn, t.__scopeScrollArea), c = k.useRef(null), u = k.useRef(0), [d, h] = k.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), g = uh(d.viewport, d.content), b = {
    ...s,
    sizes: d,
    onSizesChange: h,
    hasThumb: g > 0 && g < 1,
    onThumbChange: (S) => c.current = S,
    onThumbPointerUp: () => u.current = 0,
    onThumbPointerDown: (S) => u.current = S
  };
  function x(S, C) {
    return A5(S, u.current, d, C);
  }
  return r === "horizontal" ? /* @__PURE__ */ v.jsx(
    I5,
    {
      ...b,
      ref: n,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const S = a.viewport.scrollLeft, C = Vd(S, d, a.dir);
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
    T5,
    {
      ...b,
      ref: n,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const S = a.viewport.scrollTop, C = Vd(S, d);
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
}), I5 = k.forwardRef((t, n) => {
  const { sizes: r, onSizesChange: s, ...a } = t, c = Ut(cn, t.__scopeScrollArea), [u, d] = k.useState(), h = k.useRef(null), g = dt(n, h, c.onScrollbarXChange);
  return k.useEffect(() => {
    h.current && d(getComputedStyle(h.current));
  }, [h]), /* @__PURE__ */ v.jsx(
    ch,
    {
      "data-orientation": "horizontal",
      ...a,
      ref: g,
      sizes: r,
      style: {
        bottom: 0,
        left: c.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: c.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": vo(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (b) => t.onThumbPointerDown(b.x),
      onDragScroll: (b) => t.onDragScroll(b.x),
      onWheelScroll: (b, x) => {
        if (c.viewport) {
          const S = c.viewport.scrollLeft + b.deltaX;
          t.onWheelScroll(S), fh(S, x) && b.preventDefault();
        }
      },
      onResize: () => {
        h.current && c.viewport && u && s({
          content: c.viewport.scrollWidth,
          viewport: c.viewport.offsetWidth,
          scrollbar: {
            size: h.current.clientWidth,
            paddingStart: eo(u.paddingLeft),
            paddingEnd: eo(u.paddingRight)
          }
        });
      }
    }
  );
}), T5 = k.forwardRef((t, n) => {
  const { sizes: r, onSizesChange: s, ...a } = t, c = Ut(cn, t.__scopeScrollArea), [u, d] = k.useState(), h = k.useRef(null), g = dt(n, h, c.onScrollbarYChange);
  return k.useEffect(() => {
    h.current && d(getComputedStyle(h.current));
  }, [h]), /* @__PURE__ */ v.jsx(
    ch,
    {
      "data-orientation": "vertical",
      ...a,
      ref: g,
      sizes: r,
      style: {
        top: 0,
        right: c.dir === "ltr" ? 0 : void 0,
        left: c.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": vo(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (b) => t.onThumbPointerDown(b.y),
      onDragScroll: (b) => t.onDragScroll(b.y),
      onWheelScroll: (b, x) => {
        if (c.viewport) {
          const S = c.viewport.scrollTop + b.deltaY;
          t.onWheelScroll(S), fh(S, x) && b.preventDefault();
        }
      },
      onResize: () => {
        h.current && c.viewport && u && s({
          content: c.viewport.scrollHeight,
          viewport: c.viewport.offsetHeight,
          scrollbar: {
            size: h.current.clientHeight,
            paddingStart: eo(u.paddingTop),
            paddingEnd: eo(u.paddingBottom)
          }
        });
      }
    }
  );
}), [C5, ah] = nh(cn), ch = k.forwardRef((t, n) => {
  const {
    __scopeScrollArea: r,
    sizes: s,
    hasThumb: a,
    onThumbChange: c,
    onThumbPointerUp: u,
    onThumbPointerDown: d,
    onThumbPositionChange: h,
    onDragScroll: g,
    onWheelScroll: b,
    onResize: x,
    ...S
  } = t, C = Ut(cn, r), [O, A] = k.useState(null), E = dt(n, (G) => A(G)), P = k.useRef(null), M = k.useRef(""), N = C.viewport, z = s.content - s.viewport, K = tn(b), Z = tn(h), q = bo(x, 10);
  function Y(G) {
    if (P.current) {
      const te = G.clientX - P.current.left, ne = G.clientY - P.current.top;
      g({ x: te, y: ne });
    }
  }
  return k.useEffect(() => {
    const G = (te) => {
      const ne = te.target;
      O?.contains(ne) && K(te, z);
    };
    return document.addEventListener("wheel", G, { passive: !1 }), () => document.removeEventListener("wheel", G, { passive: !1 });
  }, [N, O, z, K]), k.useEffect(Z, [s, Z]), $r(O, q), $r(C.content, q), /* @__PURE__ */ v.jsx(
    C5,
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
}), Qs = "ScrollAreaThumb", Bc = k.forwardRef(
  (t, n) => {
    const { forceMount: r, ...s } = t, a = ah(Qs, t.__scopeScrollArea);
    return /* @__PURE__ */ v.jsx(Yr, { present: r || a.hasThumb, children: /* @__PURE__ */ v.jsx(k5, { ref: n, ...s }) });
  }
), k5 = k.forwardRef(
  (t, n) => {
    const { __scopeScrollArea: r, style: s, ...a } = t, c = Ut(Qs, r), u = ah(Qs, r), { onThumbPositionChange: d } = u, h = dt(
      n,
      (x) => u.onThumbChange(x)
    ), g = k.useRef(void 0), b = bo(() => {
      g.current && (g.current(), g.current = void 0);
    }, 100);
    return k.useEffect(() => {
      const x = c.viewport;
      if (x) {
        const S = () => {
          if (b(), !g.current) {
            const C = R5(x, d);
            g.current = C, d();
          }
        };
        return d(), x.addEventListener("scroll", S), () => x.removeEventListener("scroll", S);
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
        onPointerDownCapture: He(t.onPointerDownCapture, (x) => {
          const C = x.target.getBoundingClientRect(), O = x.clientX - C.left, A = x.clientY - C.top;
          u.onThumbPointerDown({ x: O, y: A });
        }),
        onPointerUp: He(t.onPointerUp, u.onThumbPointerUp)
      }
    );
  }
);
Bc.displayName = Qs;
var $c = "ScrollAreaCorner", lh = k.forwardRef(
  (t, n) => {
    const r = Ut($c, t.__scopeScrollArea), s = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && s ? /* @__PURE__ */ v.jsx(E5, { ...t, ref: n }) : null;
  }
);
lh.displayName = $c;
var E5 = k.forwardRef((t, n) => {
  const { __scopeScrollArea: r, ...s } = t, a = Ut($c, r), [c, u] = k.useState(0), [d, h] = k.useState(0), g = !!(c && d);
  return $r(a.scrollbarX, () => {
    const b = a.scrollbarX?.offsetHeight || 0;
    a.onCornerHeightChange(b), h(b);
  }), $r(a.scrollbarY, () => {
    const b = a.scrollbarY?.offsetWidth || 0;
    a.onCornerWidthChange(b), u(b);
  }), g ? /* @__PURE__ */ v.jsx(
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
function eo(t) {
  return t ? parseInt(t, 10) : 0;
}
function uh(t, n) {
  const r = t / n;
  return isNaN(r) ? 0 : r;
}
function vo(t) {
  const n = uh(t.viewport, t.content), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = (t.scrollbar.size - r) * n;
  return Math.max(s, 18);
}
function A5(t, n, r, s = "ltr") {
  const a = vo(r), c = a / 2, u = n || c, d = a - u, h = r.scrollbar.paddingStart + u, g = r.scrollbar.size - r.scrollbar.paddingEnd - d, b = r.content - r.viewport, x = s === "ltr" ? [0, b] : [b * -1, 0];
  return dh([h, g], x)(t);
}
function Vd(t, n, r = "ltr") {
  const s = vo(n), a = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, c = n.scrollbar.size - a, u = n.content - n.viewport, d = c - s, h = r === "ltr" ? [0, u] : [u * -1, 0], g = Fc(t, h);
  return dh([0, u], [0, d])(g);
}
function dh(t, n) {
  return (r) => {
    if (t[0] === t[1] || n[0] === n[1]) return n[0];
    const s = (n[1] - n[0]) / (t[1] - t[0]);
    return n[0] + s * (r - t[0]);
  };
}
function fh(t, n) {
  return t > 0 && t < n;
}
var R5 = (t, n = () => {
}) => {
  let r = { left: t.scrollLeft, top: t.scrollTop }, s = 0;
  return function a() {
    const c = { left: t.scrollLeft, top: t.scrollTop }, u = r.left !== c.left, d = r.top !== c.top;
    (u || d) && n(), r = c, s = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(s);
};
function bo(t, n) {
  const r = tn(t), s = k.useRef(0);
  return k.useEffect(() => () => window.clearTimeout(s.current), []), k.useCallback(() => {
    window.clearTimeout(s.current), s.current = window.setTimeout(r, n);
  }, [r, n]);
}
function $r(t, n) {
  const r = tn(n);
  zi(() => {
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
var to = rh, mc = sh, Gd = mo, Xd = Bc, O5 = lh;
const Zr = k.forwardRef(({ className: t, children: n, ...r }, s) => /* @__PURE__ */ v.jsxs(
  to,
  {
    ref: s,
    className: ut("relative overflow-hidden", t),
    ...r,
    children: [
      /* @__PURE__ */ v.jsx(mc, { className: "h-full w-full rounded-[inherit]", children: n }),
      /* @__PURE__ */ v.jsx(hh, {}),
      /* @__PURE__ */ v.jsx(O5, {})
    ]
  }
));
Zr.displayName = to.displayName;
const hh = k.forwardRef(({ className: t, orientation: n = "vertical", ...r }, s) => /* @__PURE__ */ v.jsx(
  mo,
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
    children: /* @__PURE__ */ v.jsx(Bc, { className: "relative flex-1 rounded-full bg-border" })
  }
));
hh.displayName = mo.displayName;
const yo = ({
  children: t,
  renderCustomPreview: n,
  data: r = {},
  shouldDisplayPreview: s = !0
}) => {
  const [a, c] = it(!1), [u, d] = it({ x: 0, y: 0 }), h = Yt(null), S = Z2(t, {
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
    a && s && n ? q2(
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
var M5 = k.useId || (() => {
}), P5 = 0;
function ph(t) {
  const [n, r] = k.useState(M5());
  return zi(() => {
    r((s) => s ?? String(P5++));
  }, [t]), n ? `radix-${n}` : "";
}
var Ja = "rovingFocusGroup.onEntryFocus", D5 = { bubbles: !1, cancelable: !0 }, wo = "RovingFocusGroup", [vc, gh, L5] = Uf(wo), [j5, mh] = Gi(
  wo,
  [L5]
), [N5, F5] = j5(wo), vh = k.forwardRef(
  (t, n) => /* @__PURE__ */ v.jsx(vc.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(vc.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(z5, { ...t, ref: n }) }) })
);
vh.displayName = wo;
var z5 = k.forwardRef((t, n) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: s,
    loop: a = !1,
    dir: c,
    currentTabStopId: u,
    defaultCurrentTabStopId: d,
    onCurrentTabStopIdChange: h,
    onEntryFocus: g,
    preventScrollOnEntryFocus: b = !1,
    ...x
  } = t, S = k.useRef(null), C = dt(n, S), O = po(c), [A = null, E] = zc({
    prop: u,
    defaultProp: d,
    onChange: h
  }), [P, M] = k.useState(!1), N = tn(g), z = gh(r), K = k.useRef(!1), [Z, q] = k.useState(0);
  return k.useEffect(() => {
    const Y = S.current;
    if (Y)
      return Y.addEventListener(Ja, N), () => Y.removeEventListener(Ja, N);
  }, [N]), /* @__PURE__ */ v.jsx(
    N5,
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
          ...x,
          ref: C,
          style: { outline: "none", ...t.style },
          onMouseDown: He(t.onMouseDown, () => {
            K.current = !0;
          }),
          onFocus: He(t.onFocus, (Y) => {
            const G = !K.current;
            if (Y.target === Y.currentTarget && G && !P) {
              const te = new CustomEvent(Ja, D5);
              if (Y.currentTarget.dispatchEvent(te), !te.defaultPrevented) {
                const ne = z().filter((xe) => xe.focusable), V = ne.find((xe) => xe.active), ae = ne.find((xe) => xe.id === A), Oe = [V, ae, ...ne].filter(
                  Boolean
                ).map((xe) => xe.ref.current);
                wh(Oe, b);
              }
            }
            K.current = !1;
          }),
          onBlur: He(t.onBlur, () => M(!1))
        }
      )
    }
  );
}), bh = "RovingFocusGroupItem", yh = k.forwardRef(
  (t, n) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: s = !0,
      active: a = !1,
      tabStopId: c,
      ...u
    } = t, d = ph(), h = c || d, g = F5(bh, r), b = g.currentTabStopId === h, x = gh(r), { onFocusableItemAdd: S, onFocusableItemRemove: C } = g;
    return k.useEffect(() => {
      if (s)
        return S(), () => C();
    }, [s, S, C]), /* @__PURE__ */ v.jsx(
      vc.ItemSlot,
      {
        scope: r,
        id: h,
        focusable: s,
        active: a,
        children: /* @__PURE__ */ v.jsx(
          ft.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": g.orientation,
            ...u,
            ref: n,
            onMouseDown: He(t.onMouseDown, (O) => {
              s ? g.onItemFocus(h) : O.preventDefault();
            }),
            onFocus: He(t.onFocus, () => g.onItemFocus(h)),
            onKeyDown: He(t.onKeyDown, (O) => {
              if (O.key === "Tab" && O.shiftKey) {
                g.onItemShiftTab();
                return;
              }
              if (O.target !== O.currentTarget) return;
              const A = W5(O, g.orientation, g.dir);
              if (A !== void 0) {
                if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
                O.preventDefault();
                let P = x().filter((M) => M.focusable).map((M) => M.ref.current);
                if (A === "last") P.reverse();
                else if (A === "prev" || A === "next") {
                  A === "prev" && P.reverse();
                  const M = P.indexOf(O.currentTarget);
                  P = g.loop ? B5(P, M + 1) : P.slice(M + 1);
                }
                setTimeout(() => wh(P));
              }
            })
          }
        )
      }
    );
  }
);
yh.displayName = bh;
var H5 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function U5(t, n) {
  return n !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function W5(t, n, r) {
  const s = U5(t.key, r);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s)))
    return H5[s];
}
function wh(t, n = !1) {
  const r = document.activeElement;
  for (const s of t)
    if (s === r || (s.focus({ preventScroll: n }), document.activeElement !== r)) return;
}
function B5(t, n) {
  return t.map((r, s) => t[(n + s) % t.length]);
}
var $5 = vh, V5 = yh, Vc = "Tabs", [G5, _6] = Gi(Vc, [
  mh
]), xh = mh(), [X5, Gc] = G5(Vc), _h = k.forwardRef(
  (t, n) => {
    const {
      __scopeTabs: r,
      value: s,
      onValueChange: a,
      defaultValue: c,
      orientation: u = "horizontal",
      dir: d,
      activationMode: h = "automatic",
      ...g
    } = t, b = po(d), [x, S] = zc({
      prop: s,
      onChange: a,
      defaultProp: c
    });
    return /* @__PURE__ */ v.jsx(
      X5,
      {
        scope: r,
        baseId: ph(),
        value: x,
        onValueChange: S,
        orientation: u,
        dir: b,
        activationMode: h,
        children: /* @__PURE__ */ v.jsx(
          ft.div,
          {
            dir: b,
            "data-orientation": u,
            ...g,
            ref: n
          }
        )
      }
    );
  }
);
_h.displayName = Vc;
var Sh = "TabsList", Ih = k.forwardRef(
  (t, n) => {
    const { __scopeTabs: r, loop: s = !0, ...a } = t, c = Gc(Sh, r), u = xh(r);
    return /* @__PURE__ */ v.jsx(
      $5,
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
Ih.displayName = Sh;
var Th = "TabsTrigger", Ch = k.forwardRef(
  (t, n) => {
    const { __scopeTabs: r, value: s, disabled: a = !1, ...c } = t, u = Gc(Th, r), d = xh(r), h = Ah(u.baseId, s), g = Rh(u.baseId, s), b = s === u.value;
    return /* @__PURE__ */ v.jsx(
      V5,
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
            "aria-controls": g,
            "data-state": b ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: h,
            ...c,
            ref: n,
            onMouseDown: He(t.onMouseDown, (x) => {
              !a && x.button === 0 && x.ctrlKey === !1 ? u.onValueChange(s) : x.preventDefault();
            }),
            onKeyDown: He(t.onKeyDown, (x) => {
              [" ", "Enter"].includes(x.key) && u.onValueChange(s);
            }),
            onFocus: He(t.onFocus, () => {
              const x = u.activationMode !== "manual";
              !b && !a && x && u.onValueChange(s);
            })
          }
        )
      }
    );
  }
);
Ch.displayName = Th;
var kh = "TabsContent", Eh = k.forwardRef(
  (t, n) => {
    const { __scopeTabs: r, value: s, forceMount: a, children: c, ...u } = t, d = Gc(kh, r), h = Ah(d.baseId, s), g = Rh(d.baseId, s), b = s === d.value, x = k.useRef(b);
    return k.useEffect(() => {
      const S = requestAnimationFrame(() => x.current = !1);
      return () => cancelAnimationFrame(S);
    }, []), /* @__PURE__ */ v.jsx(Yr, { present: a || b, children: ({ present: S }) => /* @__PURE__ */ v.jsx(
      ft.div,
      {
        "data-state": b ? "active" : "inactive",
        "data-orientation": d.orientation,
        role: "tabpanel",
        "aria-labelledby": h,
        hidden: !S,
        id: g,
        tabIndex: 0,
        ...u,
        ref: n,
        style: {
          ...t.style,
          animationDuration: x.current ? "0s" : void 0
        },
        children: S && c
      }
    ) });
  }
);
Eh.displayName = kh;
function Ah(t, n) {
  return `${t}-trigger-${n}`;
}
function Rh(t, n) {
  return `${t}-content-${n}`;
}
var Y5 = _h, Oh = Ih, Mh = Ch, Ph = Eh;
const Z5 = Y5, Dh = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Oh,
  {
    ref: r,
    className: ut(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...n
  }
));
Dh.displayName = Oh.displayName;
const bc = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Mh,
  {
    ref: r,
    className: ut(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...n
  }
));
bc.displayName = Mh.displayName;
const yc = k.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Ph,
  {
    ref: r,
    className: ut(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...n
  }
));
yc.displayName = Ph.displayName;
const S6 = "add", I6 = "track", T6 = "trackItems", C6 = "track:changed", k6 = "trackItems:changed", E6 = "state", A6 = "state:changed", K5 = "add", Lh = "add:text", Xi = "add:video", Yi = "add:audio", R6 = "add:placeholder", Zi = "add:image", O6 = "add:mask", M6 = "add:transition", P6 = "add:animation", D6 = "edit", L6 = "edit:object", j6 = "edit:text", N6 = "edit:shape", F6 = "enterEditMode", q5 = "player", jh = "player:play", Nh = "player:pause", J5 = "player:seek", z6 = "player:seekTo", Q5 = "player:seekBy", ew = "player:togglePlay", tw = "active", H6 = "active:set", Fh = "active:delete", U6 = "active:paste", zh = "active:clone", Hh = "active:split", nw = "layer", W6 = "layer:locked", B6 = "layer:hidden", $6 = "layer:move", V6 = "layer:select", Uh = "layer:selection", G6 = "layer:sendTo", X6 = "layer:rename", Y6 = "layer:editingName", Z6 = "layer:copy", K6 = "layer:paste", q6 = "layer:clone", J6 = "layer:split", Q6 = "layer:cut", e7 = "layer:delete", rw = "history", Wh = "history:undo", Bh = "history:redo", t7 = "history:reset", iw = "scale", $h = "scale:changed", sw = "drag", Vh = "drag:start", no = "drag:end", ow = "timeline", Gh = "timeline:boundingChanged";
var wc = function(t, n) {
  return wc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a]);
  }, wc(t, n);
};
function Kr(t, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  wc(t, n);
  function r() {
    this.constructor = t;
  }
  t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
function xc(t) {
  var n = typeof Symbol == "function" && Symbol.iterator, r = n && t[n], s = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && s >= t.length && (t = void 0), { value: t && t[s++], done: !t };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function _c(t, n) {
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
function Sc(t, n, r) {
  if (r || arguments.length === 2) for (var s = 0, a = n.length, c; s < a; s++)
    (c || !(s in n)) && (c || (c = Array.prototype.slice.call(n, 0, s)), c[s] = n[s]);
  return t.concat(c || Array.prototype.slice.call(n));
}
function nn(t) {
  return typeof t == "function";
}
function Xh(t) {
  var n = function(s) {
    Error.call(s), s.stack = new Error().stack;
  }, r = t(n);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Qa = Xh(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(s, a) {
      return a + 1 + ") " + s.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Ic(t, n) {
  if (t) {
    var r = t.indexOf(n);
    0 <= r && t.splice(r, 1);
  }
}
var xo = function() {
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
            for (var d = xc(u), h = d.next(); !h.done; h = d.next()) {
              var g = h.value;
              g.remove(this);
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
          c = A instanceof Qa ? A.errors : [A];
        }
      var x = this._finalizers;
      if (x) {
        this._finalizers = null;
        try {
          for (var S = xc(x), C = S.next(); !C.done; C = S.next()) {
            var O = C.value;
            try {
              Yd(O);
            } catch (A) {
              c = c ?? [], A instanceof Qa ? c = Sc(Sc([], _c(c)), _c(A.errors)) : c.push(A);
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
        throw new Qa(c);
    }
  }, t.prototype.add = function(n) {
    var r;
    if (n && n !== this)
      if (this.closed)
        Yd(n);
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
    r === n ? this._parentage = null : Array.isArray(r) && Ic(r, n);
  }, t.prototype.remove = function(n) {
    var r = this._finalizers;
    r && Ic(r, n), n instanceof t && n._removeParent(this);
  }, t.EMPTY = function() {
    var n = new t();
    return n.closed = !0, n;
  }(), t;
}(), Yh = xo.EMPTY;
function Zh(t) {
  return t instanceof xo || t && "closed" in t && nn(t.remove) && nn(t.add) && nn(t.unsubscribe);
}
function Yd(t) {
  nn(t) ? t() : t.unsubscribe();
}
var aw = {
  Promise: void 0
}, cw = {
  setTimeout: function(t, n) {
    for (var r = [], s = 2; s < arguments.length; s++)
      r[s - 2] = arguments[s];
    return setTimeout.apply(void 0, Sc([t, n], _c(r)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function lw(t) {
  cw.setTimeout(function() {
    throw t;
  });
}
function Zd() {
}
function qs(t) {
  t();
}
var Xc = function(t) {
  Kr(n, t);
  function n(r) {
    var s = t.call(this) || this;
    return s.isStopped = !1, r ? (s.destination = r, Zh(r) && r.add(s)) : s.destination = fw, s;
  }
  return n.create = function(r, s, a) {
    return new Tc(r, s, a);
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
}(xo), uw = function() {
  function t(n) {
    this.partialObserver = n;
  }
  return t.prototype.next = function(n) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(n);
      } catch (s) {
        Zs(s);
      }
  }, t.prototype.error = function(n) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(n);
      } catch (s) {
        Zs(s);
      }
    else
      Zs(n);
  }, t.prototype.complete = function() {
    var n = this.partialObserver;
    if (n.complete)
      try {
        n.complete();
      } catch (r) {
        Zs(r);
      }
  }, t;
}(), Tc = function(t) {
  Kr(n, t);
  function n(r, s, a) {
    var c = t.call(this) || this, u;
    return nn(r) || !r ? u = {
      next: r ?? void 0,
      error: s ?? void 0,
      complete: a ?? void 0
    } : u = r, c.destination = new uw(u), c;
  }
  return n;
}(Xc);
function Zs(t) {
  lw(t);
}
function dw(t) {
  throw t;
}
var fw = {
  closed: !0,
  next: Zd,
  error: dw,
  complete: Zd
}, hw = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function pw(t) {
  return t;
}
function gw(t) {
  return t.length === 0 ? pw : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(s, a) {
      return a(s);
    }, r);
  };
}
var Kd = function() {
  function t(n) {
    n && (this._subscribe = n);
  }
  return t.prototype.lift = function(n) {
    var r = new t();
    return r.source = this, r.operator = n, r;
  }, t.prototype.subscribe = function(n, r, s) {
    var a = this, c = vw(n) ? n : new Tc(n, r, s);
    return qs(function() {
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
    return r = qd(r), new r(function(a, c) {
      var u = new Tc({
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
  }, t.prototype[hw] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var n = [], r = 0; r < arguments.length; r++)
      n[r] = arguments[r];
    return gw(n)(this);
  }, t.prototype.toPromise = function(n) {
    var r = this;
    return n = qd(n), new n(function(s, a) {
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
function qd(t) {
  var n;
  return (n = t ?? aw.Promise) !== null && n !== void 0 ? n : Promise;
}
function mw(t) {
  return t && nn(t.next) && nn(t.error) && nn(t.complete);
}
function vw(t) {
  return t && t instanceof Xc || mw(t) && Zh(t);
}
function bw(t) {
  return nn(t?.lift);
}
function yw(t) {
  return function(n) {
    if (bw(n))
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
function ww(t, n, r, s, a) {
  return new xw(t, n, r, s, a);
}
var xw = function(t) {
  Kr(n, t);
  function n(r, s, a, c, u, d) {
    var h = t.call(this, r) || this;
    return h.onFinalize = u, h.shouldUnsubscribe = d, h._next = s ? function(g) {
      try {
        s(g);
      } catch (b) {
        r.error(b);
      }
    } : t.prototype._next, h._error = c ? function(g) {
      try {
        c(g);
      } catch (b) {
        r.error(b);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, h._complete = a ? function() {
      try {
        a();
      } catch (g) {
        r.error(g);
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
}(Xc), _w = Xh(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Yc = function(t) {
  Kr(n, t);
  function n() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return n.prototype.lift = function(r) {
    var s = new Jd(this, this);
    return s.operator = r, s;
  }, n.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new _w();
  }, n.prototype.next = function(r) {
    var s = this;
    qs(function() {
      var a, c;
      if (s._throwIfClosed(), !s.isStopped) {
        s.currentObservers || (s.currentObservers = Array.from(s.observers));
        try {
          for (var u = xc(s.currentObservers), d = u.next(); !d.done; d = u.next()) {
            var h = d.value;
            h.next(r);
          }
        } catch (g) {
          a = { error: g };
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
    qs(function() {
      if (s._throwIfClosed(), !s.isStopped) {
        s.hasError = s.isStopped = !0, s.thrownError = r;
        for (var a = s.observers; a.length; )
          a.shift().error(r);
      }
    });
  }, n.prototype.complete = function() {
    var r = this;
    qs(function() {
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
    return c || u ? Yh : (this.currentObservers = null, d.push(r), new xo(function() {
      s.currentObservers = null, Ic(d, r);
    }));
  }, n.prototype._checkFinalizedStatuses = function(r) {
    var s = this, a = s.hasError, c = s.thrownError, u = s.isStopped;
    a ? r.error(c) : u && r.complete();
  }, n.prototype.asObservable = function() {
    var r = new Kd();
    return r.source = this, r;
  }, n.create = function(r, s) {
    return new Jd(r, s);
  }, n;
}(Kd), Jd = function(t) {
  Kr(n, t);
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
    return (a = (s = this.source) === null || s === void 0 ? void 0 : s.subscribe(r)) !== null && a !== void 0 ? a : Yh;
  }, n;
}(Yc), Qd = function(t) {
  Kr(n, t);
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
}(Yc);
function Sn(t, n) {
  return yw(function(r, s) {
    var a = 0;
    r.subscribe(ww(s, function(c) {
      return t.call(n, c, a++) && s.next(c);
    }));
  });
}
const Kh = new Yc(), Sw = (t, n) => {
  Kh.next({ key: t, value: n });
}, me = {
  subject: Kh,
  dispatch: Sw
}, tt = [];
for (let t = 0; t < 256; ++t)
  tt.push((t + 256).toString(16).slice(1));
function Iw(t, n = 0) {
  return (tt[t[n + 0]] + tt[t[n + 1]] + tt[t[n + 2]] + tt[t[n + 3]] + "-" + tt[t[n + 4]] + tt[t[n + 5]] + "-" + tt[t[n + 6]] + tt[t[n + 7]] + "-" + tt[t[n + 8]] + tt[t[n + 9]] + "-" + tt[t[n + 10]] + tt[t[n + 11]] + tt[t[n + 12]] + tt[t[n + 13]] + tt[t[n + 14]] + tt[t[n + 15]]).toLowerCase();
}
let ec;
const Tw = new Uint8Array(16);
function Cw() {
  if (!ec) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ec = crypto.getRandomValues.bind(crypto);
  }
  return ec(Tw);
}
const kw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ef = { randomUUID: kw };
function Ke(t, n, r) {
  if (ef.randomUUID && !t)
    return ef.randomUUID();
  t = t || {};
  const s = t.random ?? t.rng?.() ?? Cw();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Iw(s);
}
var qh = /* @__PURE__ */ ((t) => (t.IMAGE = "image", t.VIDEO = "video", t.AUDIO = "audio", t))(qh || {});
const Ew = (t) => {
  const [n, r] = it(!1), [s, a] = it(!1), c = Ur((b) => {
    const x = { ...b, id: Ke() };
    switch (b.type) {
      case "image":
        me.dispatch(Zi, { payload: x });
        break;
      case "video":
        me.dispatch(Xi, { payload: x });
        break;
      case "audio":
        me.dispatch(Yi, { payload: x });
        break;
    }
  }, []), u = Ur(
    (b) => {
      b.preventDefault();
      try {
        const x = b.dataTransfer?.types[0], S = JSON.parse(x);
        if (!Object.values(qh).includes(S.type))
          return;
        a(!0), r(!0), t?.(!0);
      } catch (x) {
        console.error("Error parsing dragged data:", x);
      }
    },
    [t]
  ), d = Ur(
    (b) => {
      b.preventDefault(), n && (a(!0), t?.(!0));
    },
    [n, t]
  ), h = Ur(
    (b) => {
      if (s) {
        b.preventDefault(), a(!1), t?.(!1);
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
    [s, t, c]
  ), g = Ur(
    (b) => {
      b.preventDefault(), b.currentTarget.contains(b.relatedTarget) || (a(!1), r(!1), t?.(!1));
    },
    [t]
  );
  return { onDragEnter: u, onDragOver: d, onDrop: h, onDragLeave: g, isDraggingOver: s };
}, Aw = ({
  children: t,
  className: n,
  style: r,
  onDragStateChange: s,
  id: a
}) => {
  const { onDragEnter: c, onDragOver: u, onDrop: d, onDragLeave: h } = Ew(s);
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
}, n7 = ({
  size: t,
  children: n
}) => {
  const [r, s] = it(!1);
  return /* @__PURE__ */ v.jsxs(
    Aw,
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
}, r7 = 100, i7 = 30, s7 = 18, o7 = 14, a7 = 30, c7 = 24, l7 = 16, Rw = 12, u7 = "Regular", Ow = "sans-serif", _o = 188, Cc = 40, d7 = 4e3, Mw = 1920, Pw = 1080, Dw = 60, Lw = 1e3 / Dw, f7 = 2e6, h7 = 1e7, p7 = 48e3, g7 = 192e3, Jh = 2.3, m7 = Mw / Jh, v7 = Pw / Jh, b7 = 184, y7 = 348, w7 = 512, x7 = 300, _7 = 0, S7 = 5e3, I7 = 1, T7 = 0, C7 = 0, k7 = 0, E7 = 359, A7 = 1, R7 = 0, O7 = !1, M7 = !1, P7 = 0, D7 = 2, L7 = 0.01, j7 = 1, N7 = 0, F7 = 3, z7 = 0.01, H7 = 1, U7 = 0, W7 = 1, B7 = 0.01, $7 = 0.5, V7 = -1e3, G7 = 1e3, X7 = 1, Y7 = 1, Z7 = 0, K7 = 1, q7 = 0.01, J7 = 1, Q7 = 0, e8 = 1, t8 = 0.01, n8 = 0, r8 = 0.5, i8 = 10, s8 = 0.01, o8 = 1, a8 = 0, c8 = 1, l8 = 0.01, u8 = 1, Zc = 16, tf = 80;
function jw(t) {
  if (!t) return "0";
  const n = t / _o, r = Math.trunc(n) % 60, s = Math.trunc(n / 60) % 60, a = Math.trunc(n / 3600) % 60, u = [
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
function d8(t, n = !1) {
  if (!t) return "00:00";
  const s = 1e3 / 60;
  if (t < 1e3)
    return n ? `${Math.floor(t / s)}f` : `${(t / 1e3).toFixed(1)}s`;
  const a = Math.floor(t / 1e3);
  if (a < 60)
    return `${a}s`;
  const c = Math.floor(a / 60);
  if (c < 60) {
    const g = a % 60;
    return `${c.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
  }
  const u = Math.floor(c / 60), d = c % 60, h = a % 60;
  return `${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`;
}
function ro(t, n) {
  return t.map((r) => ({
    ...r,
    items: r.items.filter((s) => !n.includes(s))
  }));
}
const Nw = ({ frame: t }, { fps: n }) => {
  const r = t / n, s = Math.floor(r / 3600), a = r % 3600, c = Math.floor(a / 60), u = Math.floor(a % 60), d = Math.floor(
    (a - Math.floor(a)) * 100
  );
  return s > 0 ? `${s}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}` : `${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
}, Fw = ({ time: t }) => {
  const n = t / 1e3, r = Math.floor(n / 3600), s = n % 3600, a = Math.floor(s / 60), c = Math.floor(s % 60), u = Math.floor(
    (s - Math.floor(s)) * 100
  );
  return r > 0 ? `${r}:${a.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}` : `${a.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
}, zw = () => {
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
function Qh(t, n) {
  let r = -1, s = t.length - 1;
  for (; 1 + r < s; ) {
    const a = r + (s - r >> 1);
    n(t[a], a, t) ? s = a : r = a;
  }
  return s;
}
function f8(t, n = 1) {
  const r = () => {
    const h = Math.max(0, Cc), b = document.getElementById(
      "designcombo-timeline-canvas"
    )?.offsetWidth ?? document.body.offsetWidth;
    return Math.max(1, b - h);
  }, s = () => typeof t == "number" ? Ve(t, n) : Vw(t, n), a = r() / s(), c = n * a;
  return {
    segments: 5,
    index: Qh(sn, (d) => d.zoom > c),
    zoom: c,
    unit: 1 / c
  };
}
function h8(t) {
  return sn[t];
}
function Hw(t) {
  return Uw(t) || sn[0];
}
const Uw = (t) => {
  const n = sn.filter(
    (s) => s.zoom < t.zoom
  );
  return n.length === 0 ? null : n.reduce(
    (s, a) => a.zoom > s.zoom ? a : s
  );
}, Ww = (t) => {
  const n = sn.filter(
    (s) => s.zoom > t.zoom
  );
  return n.length === 0 ? null : n.reduce(
    (s, a) => a.zoom < s.zoom ? a : s
  );
};
function Bw(t) {
  return Ww(t) || sn[sn.length - 1];
}
function p8(t) {
  const n = sn.at(-1), r = t === n, a = $w(t) - (r ? 1 : 2);
  return Math.max(0, a);
}
function $w(t) {
  const n = Qh(sn, (r) => r.zoom > t.zoom);
  return Math.min(sn.length - 1, n);
}
function Ve(t, n = 1, r = 1) {
  const s = _o * n;
  return t * (60 / 1e3) * s / r;
}
function cr(t, n = 1) {
  const r = _o * n;
  return t / r * Lw;
}
function Vw(t, n = 1) {
  return Ve(t, n);
}
const g8 = Math.floor(Math.random() * 1e3) + 1;
function ep(t, n = 1) {
  const r = [], s = Math.floor(n), a = (c, u) => {
    for (const d of c)
      Array.isArray(d) && u < s ? a(d, u + 1) : r.push(d);
  };
  return a(t, 0), r;
}
function tp(t, n) {
  const r = n.sort((a, c) => a.tempIndex - c.tempIndex), s = [];
  for (const a of r)
    a.tempIndex < 0 && s.push(a);
  s.push(t);
  for (const a of r)
    a.tempIndex >= 0 && s.push(a);
  return s;
}
const nf = {
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
}, Gw = (t) => {
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
}, In = Of((t) => ({
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
const Xw = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), np = (...t) => t.filter((n, r, s) => !!n && n.trim() !== "" && s.indexOf(n) === r).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yw = {
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
const Zw = Rf(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: a = "",
    children: c,
    iconNode: u,
    ...d
  }, h) => lc(
    "svg",
    {
      ref: h,
      ...Yw,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: s ? Number(r) * 24 / Number(n) : r,
      className: np("lucide", a),
      ...d
    },
    [
      ...u.map(([g, b]) => lc(g, b)),
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
  const r = Rf(
    ({ className: s, ...a }, c) => lc(Zw, {
      ref: c,
      iconNode: n,
      className: np(`lucide-${Xw(t)}`, s),
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
const Kw = ht("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qw = ht("Image", [
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
const rp = ht("Music", [
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
const Jw = ht("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qw = ht("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e3 = ht("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t3 = ht("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = ht("SquareSplitHorizontal", [
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
const n3 = ht("Trash", [
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
const r3 = ht("Type", [
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
const sf = ht("Upload", [
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
const i3 = ht("Video", [
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
const s3 = ht("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o3 = ht("ZoomIn", [
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
const a3 = ht("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), Kc = (t) => {
  const n = Ur(
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
  return K2(
    n,
    () => t?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
}, So = () => {
  const [t, n] = it(!1);
  return Ht(() => {
    const s = me.subject.pipe(
      Sn(({ key: a }) => a.startsWith(sw))
    ).subscribe((a) => {
      a.key === Vh ? n(!0) : a.key === no && n(!1);
    });
    return () => s.unsubscribe();
  }, []), t;
}, c3 = () => {
  const [t, n] = it(!1), { duration: r, fps: s, scale: a, playerRef: c, activeIds: u } = In(), d = Kc(c), h = () => {
    me.dispatch(Fh);
  }, g = () => {
    me.dispatch(Hh, {
      payload: {},
      options: {
        time: zw()
      }
    });
  }, b = (C) => {
    me.dispatch($h, {
      payload: {
        scale: C
      }
    });
  }, x = () => {
    me.dispatch(jh);
  }, S = () => {
    me.dispatch(Nh);
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
                        /* @__PURE__ */ v.jsx(n3, { size: 14 }),
                        " Delete"
                      ]
                    }
                  ),
                  /* @__PURE__ */ v.jsxs(
                    Ne,
                    {
                      disabled: !u.length,
                      onClick: g,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(rf, { size: 15 }),
                        " Split"
                      ]
                    }
                  ),
                  /* @__PURE__ */ v.jsxs(
                    Ne,
                    {
                      disabled: !u.length,
                      onClick: () => {
                        me.dispatch(zh);
                      },
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ v.jsx(rf, { size: 15 }),
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
                        children: /* @__PURE__ */ v.jsx(e3, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Ne,
                      {
                        onClick: () => {
                          if (t)
                            return S();
                          x();
                        },
                        variant: "ghost",
                        size: "icon",
                        children: t ? /* @__PURE__ */ v.jsx(Jw, { size: 14 }) : /* @__PURE__ */ v.jsx(Qw, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Ne,
                      {
                        onClick: g,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ v.jsx(t3, { size: 14 })
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
                            children: Nw({ frame: d }, { fps: s })
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
                            children: Fw({ time: r })
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx(
                  l3,
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
}, l3 = ({
  scale: t,
  onChangeTimelineScale: n,
  duration: r
}) => {
  const s = () => {
    const c = Hw(t);
    n(c);
  }, a = () => {
    const c = Bw(t);
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
        children: /* @__PURE__ */ v.jsx(a3, { size: 16 })
      }
    ),
    /* @__PURE__ */ v.jsx(
      Ne,
      {
        size: "icon",
        variant: "ghost",
        onClick: a,
        disabled: t.index === 20,
        children: /* @__PURE__ */ v.jsx(o3, { size: 16 })
      }
    )
  ] }) });
}, u3 = [
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
], d3 = [
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
], f3 = [
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
], h3 = [
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
], m8 = [
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
], p3 = () => {
  const t = So();
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col overflow-auto", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Transitions" }),
    /* @__PURE__ */ v.jsx(Zr, { children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-3 gap-2 px-4", children: h3.map((n, r) => /* @__PURE__ */ v.jsx(
      g3,
      {
        transition: n,
        shouldDisplayPreview: !t
      },
      r
    )) }) })
  ] });
}, g3 = ({
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
    yo,
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
}, m3 = () => {
  const t = () => {
    me.dispatch(Lh, {
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
          fontUrl: nf.url,
          fontFamily: nf.postScriptName,
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
}, v3 = () => {
  const t = Yt(null), n = (s) => {
    r(s);
  }, r = async (s) => {
    const a = s[0].type;
    a.includes("audio") && me.dispatch(Yi, {
      payload: {
        id: Ke(),
        details: {
          src: URL.createObjectURL(s[0]),
          volume: 50
        }
      }
    }), a.includes("video") && me.dispatch(Xi, {
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
    }), a.includes("image") && me.dispatch(Zi, {
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
      Z5,
      {
        defaultValue: "projects",
        className: "w-full",
        children: [
          /* @__PURE__ */ v.jsxs(Dh, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ v.jsx(bc, { value: "projects", children: "Project" }),
            /* @__PURE__ */ v.jsx(bc, { value: "workspace", children: "Workspace" })
          ] }),
          /* @__PURE__ */ v.jsxs(yc, { value: "projects", children: [
            /* @__PURE__ */ v.jsxs(
              Ne,
              {
                onClick: () => {
                  t.current?.click();
                },
                className: "flex w-full gap-2",
                variant: "secondary",
                children: [
                  /* @__PURE__ */ v.jsx(sf, { size: 16 }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ v.jsx("div", {})
          ] }),
          /* @__PURE__ */ v.jsx(yc, { value: "workspace", children: /* @__PURE__ */ v.jsxs(
            Ne,
            {
              onClick: () => {
                t.current?.click();
              },
              className: "flex w-full gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ v.jsx(sf, { size: 16 }),
                " Upload"
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ v.jsx(Zr, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4" }) })
  ] });
}, b3 = () => {
  const t = So(), n = (r) => {
    me.dispatch(Yi, {
      payload: r,
      options: {}
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audios" }),
    /* @__PURE__ */ v.jsx(Zr, { children: /* @__PURE__ */ v.jsx("div", { className: "flex flex-col px-2", children: u3.map((r, s) => /* @__PURE__ */ v.jsx(
      y3,
      {
        shouldDisplayPreview: !t,
        handleAddAudio: n,
        audio: r
      },
      s
    )) }) })
  ] });
}, y3 = ({
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
    yo,
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
            /* @__PURE__ */ v.jsx("div", { className: "flex h-12 items-center justify-center bg-zinc-800", children: /* @__PURE__ */ v.jsx(rp, { width: 16 }) }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ v.jsx("div", { children: n.name }),
              /* @__PURE__ */ v.jsx("div", { className: "text-zinc-400", children: n.metadata?.author })
            ] })
          ]
        }
      )
    }
  );
}, w3 = () => {
  const t = So(), n = (r) => {
    me.dispatch(Zi, {
      payload: r,
      options: {
        trackId: "main"
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Photos" }),
    /* @__PURE__ */ v.jsx(Zr, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4", children: d3.map((r, s) => /* @__PURE__ */ v.jsx(
      x3,
      {
        image: r,
        shouldDisplayPreview: !t,
        handleAddImage: n
      },
      s
    )) }) })
  ] });
}, x3 = ({
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
    yo,
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
}, _3 = () => {
  const t = So(), n = (r) => {
    me.dispatch(Xi, {
      payload: r,
      options: {
        resourceId: "main"
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ v.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Videos" }),
    /* @__PURE__ */ v.jsx(Zr, { children: /* @__PURE__ */ v.jsx("div", { className: "masonry-sm px-4", children: f3.map((r, s) => /* @__PURE__ */ v.jsx(
      S3,
      {
        video: r,
        shouldDisplayPreview: !t,
        handleAddVideo: n
      },
      s
    )) }) })
  ] });
}, S3 = ({
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
    yo,
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
}, qc = Of((t) => ({
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
})), I3 = ({ children: t }) => {
  const { showMenuItem: n, setShowMenuItem: r } = qc(), s = () => {
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
                s3,
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
}, T3 = () => {
  const { activeMenuItem: t } = qc();
  return t === "transitions" ? /* @__PURE__ */ v.jsx(p3, {}) : t === "texts" ? /* @__PURE__ */ v.jsx(m3, {}) : t === "videos" ? /* @__PURE__ */ v.jsx(_3, {}) : t === "audios" ? /* @__PURE__ */ v.jsx(b3, {}) : t === "images" ? /* @__PURE__ */ v.jsx(w3, {}) : t === "uploads" ? /* @__PURE__ */ v.jsx(v3, {}) : null;
}, C3 = () => /* @__PURE__ */ v.jsx(I3, { children: /* @__PURE__ */ v.jsx(T3, {}) }), _n = {
  audio: rp,
  captions: Kw,
  image: qw,
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
  type: r3,
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
  video: i3
};
function k3() {
  const { setActiveMenuItem: t, setShowMenuItem: n, activeMenuItem: r, showMenuItem: s } = qc();
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
            children: /* @__PURE__ */ v.jsx(_n.upload, { width: 20 })
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
            children: /* @__PURE__ */ v.jsx(_n.type, { width: 20 })
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
            children: /* @__PURE__ */ v.jsx(_n.video, { width: 20 })
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
            children: /* @__PURE__ */ v.jsx(_n.captions, { width: 20 })
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
            children: /* @__PURE__ */ v.jsx(_n.image, { width: 20 })
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
            children: /* @__PURE__ */ v.jsx(_n.shapes, { width: 20 })
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
            children: /* @__PURE__ */ v.jsx(_n.audio, { width: 20 })
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
function E3() {
  const t = () => {
    me.dispatch(Wh);
  }, n = () => {
    me.dispatch(Bh);
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
              children: /* @__PURE__ */ v.jsx(_n.undo, { width: 20 })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Ne,
            {
              onClick: n,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ v.jsx(_n.redo, { width: 20 })
            }
          )
        ] })
      ] })
    }
  );
}
const Ks = (t, n) => {
  const r = t.from / 1e3 * n, s = t.to / 1e3 * n - r;
  return { from: r, durationInFrames: s };
}, A3 = {
  text: (t, n) => {
    const { fps: r, height: s, width: a } = n, { from: c, durationInFrames: u } = Ks(t.display, r);
    return /* @__PURE__ */ v.jsx(
      Xs,
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
    const { fps: r } = n, { from: s, durationInFrames: a } = Ks(t.display, r);
    return /* @__PURE__ */ v.jsx(
      Xs,
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
        children: /* @__PURE__ */ v.jsx(Ka, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ v.jsx(
          ty,
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
    const { fps: r } = n, { from: s, durationInFrames: a } = Ks(t.display, r), c = t.trim, u = t.details.crop || {
      x: 0,
      y: 0,
      width: t.details.width,
      height: t.details.height
    };
    return c ? /* @__PURE__ */ v.jsx(
      Xs,
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
          Ka,
          {
            style: {
              pointerEvents: "none",
              width: t.details.width,
              height: t.details.height,
              top: -u.y,
              left: -u.x
            },
            children: /* @__PURE__ */ v.jsx(
              ey,
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
    const { fps: r } = n, { from: s, durationInFrames: a } = Ks(t.display, r), c = t.trim;
    return c ? /* @__PURE__ */ v.jsx(
      Xs,
      {
        className: `moonshine-scene-item id-${t.id} moonshine-scene-item-type-${t.type}`,
        from: s,
        durationInFrames: a,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ v.jsx(Ka, { children: /* @__PURE__ */ v.jsx(
          Q2,
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
var io = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
io.exports;
(function(t, n) {
  (function() {
    var r, s = "4.17.21", a = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", d = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", g = 500, b = "__lodash_placeholder__", x = 1, S = 2, C = 4, O = 1, A = 2, E = 1, P = 2, M = 4, N = 8, z = 16, K = 32, Z = 64, q = 128, Y = 256, G = 512, te = 30, ne = "...", V = 800, ae = 16, ye = 1, Oe = 2, xe = 3, Ee = 1 / 0, ke = 9007199254740991, $e = 17976931348623157e292, pt = NaN, ie = 4294967295, Gn = ie - 1, mr = ie >>> 1, Qr = [
      ["ary", q],
      ["bind", E],
      ["bindKey", P],
      ["curry", N],
      ["curryRight", z],
      ["flip", G],
      ["partial", K],
      ["partialRight", Z],
      ["rearg", Y]
    ], Tn = "[object Arguments]", Cn = "[object Array]", ei = "[object AsyncFunction]", Kt = "[object Boolean]", ln = "[object Date]", vr = "[object DOMException]", br = "[object Error]", Xn = "[object Function]", es = "[object GeneratorFunction]", wt = "[object Map]", qt = "[object Number]", Yn = "[object Null]", Ot = "[object Object]", ti = "[object Promise]", yr = "[object Proxy]", Zn = "[object RegExp]", xt = "[object Set]", un = "[object String]", wr = "[object Symbol]", Ro = "[object Undefined]", kn = "[object WeakMap]", ts = "[object WeakSet]", En = "[object ArrayBuffer]", An = "[object DataView]", xr = "[object Float32Array]", _r = "[object Float64Array]", ni = "[object Int8Array]", ri = "[object Int16Array]", ii = "[object Int32Array]", si = "[object Uint8Array]", oi = "[object Uint8ClampedArray]", ai = "[object Uint16Array]", ci = "[object Uint32Array]", li = /\b__p \+= '';/g, ns = /\b(__p \+=) '' \+/g, Rn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sr = /&(?:amp|lt|gt|quot|#39);/g, Ir = /[&<>"']/g, rs = RegExp(Sr.source), Oo = RegExp(Ir.source), is = /<%-([\s\S]+?)%>/g, Mo = /<%([\s\S]+?)%>/g, ui = /<%=([\s\S]+?)%>/g, ss = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Po = /^\w*$/, Do = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tr = /[\\^$.*+?()[\]{}|]/g, os = RegExp(Tr.source), di = /^\s+/, Lo = /\s/, jo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, No = /\{\n\/\* \[wrapped with (.+)\] \*/, w = /,? & /, H = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, B = /[()=,{}\[\]\/\s]/, re = /\\(\\)?/g, we = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ie = /\w*$/, pe = /^[-+]0x[0-9a-f]+$/i, fe = /^0b[01]+$/i, Je = /^\[object .+?Constructor\]$/, Le = /^0o[0-7]+$/i, Fe = /^(?:0|[1-9]\d*)$/, gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Wt = /($^)/, dn = /['\n\r\u2028\u2029\\]/g, Ge = "\\ud800-\\udfff", fi = "\\u0300-\\u036f", Fo = "\\ufe20-\\ufe2f", zo = "\\u20d0-\\u20ff", hl = fi + Fo + zo, pl = "\\u2700-\\u27bf", gl = "a-z\\xdf-\\xf6\\xf8-\\xff", Vp = "\\xac\\xb1\\xd7\\xf7", Gp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Xp = "\\u2000-\\u206f", Yp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ml = "A-Z\\xc0-\\xd6\\xd8-\\xde", vl = "\\ufe0e\\ufe0f", bl = Vp + Gp + Xp + Yp, Ho = "['’]", Zp = "[" + Ge + "]", yl = "[" + bl + "]", as = "[" + hl + "]", wl = "\\d+", Kp = "[" + pl + "]", xl = "[" + gl + "]", _l = "[^" + Ge + bl + wl + pl + gl + ml + "]", Uo = "\\ud83c[\\udffb-\\udfff]", qp = "(?:" + as + "|" + Uo + ")", Sl = "[^" + Ge + "]", Wo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Bo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Cr = "[" + ml + "]", Il = "\\u200d", Tl = "(?:" + xl + "|" + _l + ")", Jp = "(?:" + Cr + "|" + _l + ")", Cl = "(?:" + Ho + "(?:d|ll|m|re|s|t|ve))?", kl = "(?:" + Ho + "(?:D|LL|M|RE|S|T|VE))?", El = qp + "?", Al = "[" + vl + "]?", Qp = "(?:" + Il + "(?:" + [Sl, Wo, Bo].join("|") + ")" + Al + El + ")*", e1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", t1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Rl = Al + El + Qp, n1 = "(?:" + [Kp, Wo, Bo].join("|") + ")" + Rl, r1 = "(?:" + [Sl + as + "?", as, Wo, Bo, Zp].join("|") + ")", i1 = RegExp(Ho, "g"), s1 = RegExp(as, "g"), $o = RegExp(Uo + "(?=" + Uo + ")|" + r1 + Rl, "g"), o1 = RegExp([
      Cr + "?" + xl + "+" + Cl + "(?=" + [yl, Cr, "$"].join("|") + ")",
      Jp + "+" + kl + "(?=" + [yl, Cr + Tl, "$"].join("|") + ")",
      Cr + "?" + Tl + "+" + Cl,
      Cr + "+" + kl,
      t1,
      e1,
      wl,
      n1
    ].join("|"), "g"), a1 = RegExp("[" + Il + Ge + hl + vl + "]"), c1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, l1 = [
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
    ], u1 = -1, Me = {};
    Me[xr] = Me[_r] = Me[ni] = Me[ri] = Me[ii] = Me[si] = Me[oi] = Me[ai] = Me[ci] = !0, Me[Tn] = Me[Cn] = Me[En] = Me[Kt] = Me[An] = Me[ln] = Me[br] = Me[Xn] = Me[wt] = Me[qt] = Me[Ot] = Me[Zn] = Me[xt] = Me[un] = Me[kn] = !1;
    var Re = {};
    Re[Tn] = Re[Cn] = Re[En] = Re[An] = Re[Kt] = Re[ln] = Re[xr] = Re[_r] = Re[ni] = Re[ri] = Re[ii] = Re[wt] = Re[qt] = Re[Ot] = Re[Zn] = Re[xt] = Re[un] = Re[wr] = Re[si] = Re[oi] = Re[ai] = Re[ci] = !0, Re[br] = Re[Xn] = Re[kn] = !1;
    var d1 = {
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
    }, f1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, h1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, p1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, g1 = parseFloat, m1 = parseInt, Ol = typeof Ei == "object" && Ei && Ei.Object === Object && Ei, v1 = typeof self == "object" && self && self.Object === Object && self, Qe = Ol || v1 || Function("return this")(), Vo = n && !n.nodeType && n, Kn = Vo && !0 && t && !t.nodeType && t, Ml = Kn && Kn.exports === Vo, Go = Ml && Ol.process, Mt = function() {
      try {
        var I = Kn && Kn.require && Kn.require("util").types;
        return I || Go && Go.binding && Go.binding("util");
      } catch {
      }
    }(), Pl = Mt && Mt.isArrayBuffer, Dl = Mt && Mt.isDate, Ll = Mt && Mt.isMap, jl = Mt && Mt.isRegExp, Nl = Mt && Mt.isSet, Fl = Mt && Mt.isTypedArray;
    function _t(I, D, R) {
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
    function b1(I, D, R, $) {
      for (var se = -1, _e = I == null ? 0 : I.length; ++se < _e; ) {
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
    function y1(I, D) {
      for (var R = I == null ? 0 : I.length; R-- && D(I[R], R, I) !== !1; )
        ;
      return I;
    }
    function zl(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length; ++R < $; )
        if (!D(I[R], R, I))
          return !1;
      return !0;
    }
    function On(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length, se = 0, _e = []; ++R < $; ) {
        var Xe = I[R];
        D(Xe, R, I) && (_e[se++] = Xe);
      }
      return _e;
    }
    function cs(I, D) {
      var R = I == null ? 0 : I.length;
      return !!R && kr(I, D, 0) > -1;
    }
    function Xo(I, D, R) {
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
    function Yo(I, D, R, $) {
      var se = -1, _e = I == null ? 0 : I.length;
      for ($ && _e && (R = I[++se]); ++se < _e; )
        R = D(R, I[se], se, I);
      return R;
    }
    function w1(I, D, R, $) {
      var se = I == null ? 0 : I.length;
      for ($ && se && (R = I[--se]); se--; )
        R = D(R, I[se], se, I);
      return R;
    }
    function Zo(I, D) {
      for (var R = -1, $ = I == null ? 0 : I.length; ++R < $; )
        if (D(I[R], R, I))
          return !0;
      return !1;
    }
    var x1 = Ko("length");
    function _1(I) {
      return I.split("");
    }
    function S1(I) {
      return I.match(H) || [];
    }
    function Hl(I, D, R) {
      var $;
      return R(I, function(se, _e, Xe) {
        if (D(se, _e, Xe))
          return $ = _e, !1;
      }), $;
    }
    function ls(I, D, R, $) {
      for (var se = I.length, _e = R + ($ ? 1 : -1); $ ? _e-- : ++_e < se; )
        if (D(I[_e], _e, I))
          return _e;
      return -1;
    }
    function kr(I, D, R) {
      return D === D ? L1(I, D, R) : ls(I, Ul, R);
    }
    function I1(I, D, R, $) {
      for (var se = R - 1, _e = I.length; ++se < _e; )
        if ($(I[se], D))
          return se;
      return -1;
    }
    function Ul(I) {
      return I !== I;
    }
    function Wl(I, D) {
      var R = I == null ? 0 : I.length;
      return R ? Jo(I, D) / R : pt;
    }
    function Ko(I) {
      return function(D) {
        return D == null ? r : D[I];
      };
    }
    function qo(I) {
      return function(D) {
        return I == null ? r : I[D];
      };
    }
    function Bl(I, D, R, $, se) {
      return se(I, function(_e, Xe, Ae) {
        R = $ ? ($ = !1, _e) : D(R, _e, Xe, Ae);
      }), R;
    }
    function T1(I, D) {
      var R = I.length;
      for (I.sort(D); R--; )
        I[R] = I[R].value;
      return I;
    }
    function Jo(I, D) {
      for (var R, $ = -1, se = I.length; ++$ < se; ) {
        var _e = D(I[$]);
        _e !== r && (R = R === r ? _e : R + _e);
      }
      return R;
    }
    function Qo(I, D) {
      for (var R = -1, $ = Array(I); ++R < I; )
        $[R] = D(R);
      return $;
    }
    function C1(I, D) {
      return De(D, function(R) {
        return [R, I[R]];
      });
    }
    function $l(I) {
      return I && I.slice(0, Yl(I) + 1).replace(di, "");
    }
    function St(I) {
      return function(D) {
        return I(D);
      };
    }
    function ea(I, D) {
      return De(D, function(R) {
        return I[R];
      });
    }
    function hi(I, D) {
      return I.has(D);
    }
    function Vl(I, D) {
      for (var R = -1, $ = I.length; ++R < $ && kr(D, I[R], 0) > -1; )
        ;
      return R;
    }
    function Gl(I, D) {
      for (var R = I.length; R-- && kr(D, I[R], 0) > -1; )
        ;
      return R;
    }
    function k1(I, D) {
      for (var R = I.length, $ = 0; R--; )
        I[R] === D && ++$;
      return $;
    }
    var E1 = qo(d1), A1 = qo(f1);
    function R1(I) {
      return "\\" + p1[I];
    }
    function O1(I, D) {
      return I == null ? r : I[D];
    }
    function Er(I) {
      return a1.test(I);
    }
    function M1(I) {
      return c1.test(I);
    }
    function P1(I) {
      for (var D, R = []; !(D = I.next()).done; )
        R.push(D.value);
      return R;
    }
    function ta(I) {
      var D = -1, R = Array(I.size);
      return I.forEach(function($, se) {
        R[++D] = [se, $];
      }), R;
    }
    function Xl(I, D) {
      return function(R) {
        return I(D(R));
      };
    }
    function Pn(I, D) {
      for (var R = -1, $ = I.length, se = 0, _e = []; ++R < $; ) {
        var Xe = I[R];
        (Xe === D || Xe === b) && (I[R] = b, _e[se++] = R);
      }
      return _e;
    }
    function us(I) {
      var D = -1, R = Array(I.size);
      return I.forEach(function($) {
        R[++D] = $;
      }), R;
    }
    function D1(I) {
      var D = -1, R = Array(I.size);
      return I.forEach(function($) {
        R[++D] = [$, $];
      }), R;
    }
    function L1(I, D, R) {
      for (var $ = R - 1, se = I.length; ++$ < se; )
        if (I[$] === D)
          return $;
      return -1;
    }
    function j1(I, D, R) {
      for (var $ = R + 1; $--; )
        if (I[$] === D)
          return $;
      return $;
    }
    function Ar(I) {
      return Er(I) ? F1(I) : x1(I);
    }
    function Bt(I) {
      return Er(I) ? z1(I) : _1(I);
    }
    function Yl(I) {
      for (var D = I.length; D-- && Lo.test(I.charAt(D)); )
        ;
      return D;
    }
    var N1 = qo(h1);
    function F1(I) {
      for (var D = $o.lastIndex = 0; $o.test(I); )
        ++D;
      return D;
    }
    function z1(I) {
      return I.match($o) || [];
    }
    function H1(I) {
      return I.match(o1) || [];
    }
    var U1 = function I(D) {
      D = D == null ? Qe : Rr.defaults(Qe.Object(), D, Rr.pick(Qe, l1));
      var R = D.Array, $ = D.Date, se = D.Error, _e = D.Function, Xe = D.Math, Ae = D.Object, na = D.RegExp, W1 = D.String, Dt = D.TypeError, ds = R.prototype, B1 = _e.prototype, Or = Ae.prototype, fs = D["__core-js_shared__"], hs = B1.toString, Ce = Or.hasOwnProperty, $1 = 0, Zl = function() {
        var e = /[^.]+$/.exec(fs && fs.keys && fs.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ps = Or.toString, V1 = hs.call(Ae), G1 = Qe._, X1 = na(
        "^" + hs.call(Ce).replace(Tr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), gs = Ml ? D.Buffer : r, Dn = D.Symbol, ms = D.Uint8Array, Kl = gs ? gs.allocUnsafe : r, vs = Xl(Ae.getPrototypeOf, Ae), ql = Ae.create, Jl = Or.propertyIsEnumerable, bs = ds.splice, Ql = Dn ? Dn.isConcatSpreadable : r, pi = Dn ? Dn.iterator : r, qn = Dn ? Dn.toStringTag : r, ys = function() {
        try {
          var e = nr(Ae, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Y1 = D.clearTimeout !== Qe.clearTimeout && D.clearTimeout, Z1 = $ && $.now !== Qe.Date.now && $.now, K1 = D.setTimeout !== Qe.setTimeout && D.setTimeout, ws = Xe.ceil, xs = Xe.floor, ra = Ae.getOwnPropertySymbols, q1 = gs ? gs.isBuffer : r, eu = D.isFinite, J1 = ds.join, Q1 = Xl(Ae.keys, Ae), Ye = Xe.max, nt = Xe.min, eg = $.now, tg = D.parseInt, tu = Xe.random, ng = ds.reverse, ia = nr(D, "DataView"), gi = nr(D, "Map"), sa = nr(D, "Promise"), Mr = nr(D, "Set"), mi = nr(D, "WeakMap"), vi = nr(Ae, "create"), _s = mi && new mi(), Pr = {}, rg = rr(ia), ig = rr(gi), sg = rr(sa), og = rr(Mr), ag = rr(mi), Ss = Dn ? Dn.prototype : r, bi = Ss ? Ss.valueOf : r, nu = Ss ? Ss.toString : r;
      function p(e) {
        if (ze(e) && !oe(e) && !(e instanceof ge)) {
          if (e instanceof Lt)
            return e;
          if (Ce.call(e, "__wrapped__"))
            return rd(e);
        }
        return new Lt(e);
      }
      var Dr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(i) {
          if (!je(i))
            return {};
          if (ql)
            return ql(i);
          e.prototype = i;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function Is() {
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
        escape: is,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Mo,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ui,
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
      }, p.prototype = Is.prototype, p.prototype.constructor = p, Lt.prototype = Dr(Is.prototype), Lt.prototype.constructor = Lt;
      function ge(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ie, this.__views__ = [];
      }
      function cg() {
        var e = new ge(this.__wrapped__);
        return e.__actions__ = mt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = mt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = mt(this.__views__), e;
      }
      function lg() {
        if (this.__filtered__) {
          var e = new ge(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function ug() {
        var e = this.__wrapped__.value(), i = this.__dir__, o = oe(e), l = i < 0, f = o ? e.length : 0, m = _m(0, f, this.__views__), y = m.start, _ = m.end, T = _ - y, L = l ? _ : y - 1, j = this.__iteratees__, F = j.length, W = 0, X = nt(T, this.__takeCount__);
        if (!o || !l && f == T && X == T)
          return Cu(e, this.__actions__);
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
      ge.prototype = Dr(Is.prototype), ge.prototype.constructor = ge;
      function Jn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var l = e[i];
          this.set(l[0], l[1]);
        }
      }
      function dg() {
        this.__data__ = vi ? vi(null) : {}, this.size = 0;
      }
      function fg(e) {
        var i = this.has(e) && delete this.__data__[e];
        return this.size -= i ? 1 : 0, i;
      }
      function hg(e) {
        var i = this.__data__;
        if (vi) {
          var o = i[e];
          return o === h ? r : o;
        }
        return Ce.call(i, e) ? i[e] : r;
      }
      function pg(e) {
        var i = this.__data__;
        return vi ? i[e] !== r : Ce.call(i, e);
      }
      function gg(e, i) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = vi && i === r ? h : i, this;
      }
      Jn.prototype.clear = dg, Jn.prototype.delete = fg, Jn.prototype.get = hg, Jn.prototype.has = pg, Jn.prototype.set = gg;
      function fn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var l = e[i];
          this.set(l[0], l[1]);
        }
      }
      function mg() {
        this.__data__ = [], this.size = 0;
      }
      function vg(e) {
        var i = this.__data__, o = Ts(i, e);
        if (o < 0)
          return !1;
        var l = i.length - 1;
        return o == l ? i.pop() : bs.call(i, o, 1), --this.size, !0;
      }
      function bg(e) {
        var i = this.__data__, o = Ts(i, e);
        return o < 0 ? r : i[o][1];
      }
      function yg(e) {
        return Ts(this.__data__, e) > -1;
      }
      function wg(e, i) {
        var o = this.__data__, l = Ts(o, e);
        return l < 0 ? (++this.size, o.push([e, i])) : o[l][1] = i, this;
      }
      fn.prototype.clear = mg, fn.prototype.delete = vg, fn.prototype.get = bg, fn.prototype.has = yg, fn.prototype.set = wg;
      function hn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var l = e[i];
          this.set(l[0], l[1]);
        }
      }
      function xg() {
        this.size = 0, this.__data__ = {
          hash: new Jn(),
          map: new (gi || fn)(),
          string: new Jn()
        };
      }
      function _g(e) {
        var i = Ns(this, e).delete(e);
        return this.size -= i ? 1 : 0, i;
      }
      function Sg(e) {
        return Ns(this, e).get(e);
      }
      function Ig(e) {
        return Ns(this, e).has(e);
      }
      function Tg(e, i) {
        var o = Ns(this, e), l = o.size;
        return o.set(e, i), this.size += o.size == l ? 0 : 1, this;
      }
      hn.prototype.clear = xg, hn.prototype.delete = _g, hn.prototype.get = Sg, hn.prototype.has = Ig, hn.prototype.set = Tg;
      function Qn(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new hn(); ++i < o; )
          this.add(e[i]);
      }
      function Cg(e) {
        return this.__data__.set(e, h), this;
      }
      function kg(e) {
        return this.__data__.has(e);
      }
      Qn.prototype.add = Qn.prototype.push = Cg, Qn.prototype.has = kg;
      function $t(e) {
        var i = this.__data__ = new fn(e);
        this.size = i.size;
      }
      function Eg() {
        this.__data__ = new fn(), this.size = 0;
      }
      function Ag(e) {
        var i = this.__data__, o = i.delete(e);
        return this.size = i.size, o;
      }
      function Rg(e) {
        return this.__data__.get(e);
      }
      function Og(e) {
        return this.__data__.has(e);
      }
      function Mg(e, i) {
        var o = this.__data__;
        if (o instanceof fn) {
          var l = o.__data__;
          if (!gi || l.length < a - 1)
            return l.push([e, i]), this.size = ++o.size, this;
          o = this.__data__ = new hn(l);
        }
        return o.set(e, i), this.size = o.size, this;
      }
      $t.prototype.clear = Eg, $t.prototype.delete = Ag, $t.prototype.get = Rg, $t.prototype.has = Og, $t.prototype.set = Mg;
      function ru(e, i) {
        var o = oe(e), l = !o && ir(e), f = !o && !l && zn(e), m = !o && !l && !f && Fr(e), y = o || l || f || m, _ = y ? Qo(e.length, W1) : [], T = _.length;
        for (var L in e)
          (i || Ce.call(e, L)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
          (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          m && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
          vn(L, T))) && _.push(L);
        return _;
      }
      function iu(e) {
        var i = e.length;
        return i ? e[ma(0, i - 1)] : r;
      }
      function Pg(e, i) {
        return Fs(mt(e), er(i, 0, e.length));
      }
      function Dg(e) {
        return Fs(mt(e));
      }
      function oa(e, i, o) {
        (o !== r && !Vt(e[i], o) || o === r && !(i in e)) && pn(e, i, o);
      }
      function yi(e, i, o) {
        var l = e[i];
        (!(Ce.call(e, i) && Vt(l, o)) || o === r && !(i in e)) && pn(e, i, o);
      }
      function Ts(e, i) {
        for (var o = e.length; o--; )
          if (Vt(e[o][0], i))
            return o;
        return -1;
      }
      function Lg(e, i, o, l) {
        return Ln(e, function(f, m, y) {
          i(l, f, o(f), y);
        }), l;
      }
      function su(e, i) {
        return e && Qt(i, qe(i), e);
      }
      function jg(e, i) {
        return e && Qt(i, bt(i), e);
      }
      function pn(e, i, o) {
        i == "__proto__" && ys ? ys(e, i, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[i] = o;
      }
      function aa(e, i) {
        for (var o = -1, l = i.length, f = R(l), m = e == null; ++o < l; )
          f[o] = m ? r : Ua(e, i[o]);
        return f;
      }
      function er(e, i, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e;
      }
      function jt(e, i, o, l, f, m) {
        var y, _ = i & x, T = i & S, L = i & C;
        if (o && (y = f ? o(e, l, f, m) : o(e)), y !== r)
          return y;
        if (!je(e))
          return e;
        var j = oe(e);
        if (j) {
          if (y = Im(e), !_)
            return mt(e, y);
        } else {
          var F = rt(e), W = F == Xn || F == es;
          if (zn(e))
            return Au(e, _);
          if (F == Ot || F == Tn || W && !f) {
            if (y = T || W ? {} : Yu(e), !_)
              return T ? hm(e, jg(y, e)) : fm(e, su(y, e));
          } else {
            if (!Re[F])
              return f ? e : {};
            y = Tm(e, F, _);
          }
        }
        m || (m = new $t());
        var X = m.get(e);
        if (X)
          return X;
        m.set(e, y), Sd(e) ? e.forEach(function(ee) {
          y.add(jt(ee, i, o, ee, e, m));
        }) : xd(e) && e.forEach(function(ee, he) {
          y.set(he, jt(ee, i, o, he, e, m));
        });
        var Q = L ? T ? ka : Ca : T ? bt : qe, ue = j ? r : Q(e);
        return Pt(ue || e, function(ee, he) {
          ue && (he = ee, ee = e[he]), yi(y, he, jt(ee, i, o, he, e, m));
        }), y;
      }
      function Ng(e) {
        var i = qe(e);
        return function(o) {
          return ou(o, e, i);
        };
      }
      function ou(e, i, o) {
        var l = o.length;
        if (e == null)
          return !l;
        for (e = Ae(e); l--; ) {
          var f = o[l], m = i[f], y = e[f];
          if (y === r && !(f in e) || !m(y))
            return !1;
        }
        return !0;
      }
      function au(e, i, o) {
        if (typeof e != "function")
          throw new Dt(u);
        return Ci(function() {
          e.apply(r, o);
        }, i);
      }
      function wi(e, i, o, l) {
        var f = -1, m = cs, y = !0, _ = e.length, T = [], L = i.length;
        if (!_)
          return T;
        o && (i = De(i, St(o))), l ? (m = Xo, y = !1) : i.length >= a && (m = hi, y = !1, i = new Qn(i));
        e:
          for (; ++f < _; ) {
            var j = e[f], F = o == null ? j : o(j);
            if (j = l || j !== 0 ? j : 0, y && F === F) {
              for (var W = L; W--; )
                if (i[W] === F)
                  continue e;
              T.push(j);
            } else m(i, F, l) || T.push(j);
          }
        return T;
      }
      var Ln = Du(Jt), cu = Du(la, !0);
      function Fg(e, i) {
        var o = !0;
        return Ln(e, function(l, f, m) {
          return o = !!i(l, f, m), o;
        }), o;
      }
      function Cs(e, i, o) {
        for (var l = -1, f = e.length; ++l < f; ) {
          var m = e[l], y = i(m);
          if (y != null && (_ === r ? y === y && !Tt(y) : o(y, _)))
            var _ = y, T = m;
        }
        return T;
      }
      function zg(e, i, o, l) {
        var f = e.length;
        for (o = ce(o), o < 0 && (o = -o > f ? 0 : f + o), l = l === r || l > f ? f : ce(l), l < 0 && (l += f), l = o > l ? 0 : Td(l); o < l; )
          e[o++] = i;
        return e;
      }
      function lu(e, i) {
        var o = [];
        return Ln(e, function(l, f, m) {
          i(l, f, m) && o.push(l);
        }), o;
      }
      function et(e, i, o, l, f) {
        var m = -1, y = e.length;
        for (o || (o = km), f || (f = []); ++m < y; ) {
          var _ = e[m];
          i > 0 && o(_) ? i > 1 ? et(_, i - 1, o, l, f) : Mn(f, _) : l || (f[f.length] = _);
        }
        return f;
      }
      var ca = Lu(), uu = Lu(!0);
      function Jt(e, i) {
        return e && ca(e, i, qe);
      }
      function la(e, i) {
        return e && uu(e, i, qe);
      }
      function ks(e, i) {
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
      function du(e, i, o) {
        var l = i(e);
        return oe(e) ? l : Mn(l, o(e));
      }
      function at(e) {
        return e == null ? e === r ? Ro : Yn : qn && qn in Ae(e) ? xm(e) : Dm(e);
      }
      function ua(e, i) {
        return e > i;
      }
      function Hg(e, i) {
        return e != null && Ce.call(e, i);
      }
      function Ug(e, i) {
        return e != null && i in Ae(e);
      }
      function Wg(e, i, o) {
        return e >= nt(i, o) && e < Ye(i, o);
      }
      function da(e, i, o) {
        for (var l = o ? Xo : cs, f = e[0].length, m = e.length, y = m, _ = R(m), T = 1 / 0, L = []; y--; ) {
          var j = e[y];
          y && i && (j = De(j, St(i))), T = nt(j.length, T), _[y] = !o && (i || f >= 120 && j.length >= 120) ? new Qn(y && j) : r;
        }
        j = e[0];
        var F = -1, W = _[0];
        e:
          for (; ++F < f && L.length < T; ) {
            var X = j[F], Q = i ? i(X) : X;
            if (X = o || X !== 0 ? X : 0, !(W ? hi(W, Q) : l(L, Q, o))) {
              for (y = m; --y; ) {
                var ue = _[y];
                if (!(ue ? hi(ue, Q) : l(e[y], Q, o)))
                  continue e;
              }
              W && W.push(Q), L.push(X);
            }
          }
        return L;
      }
      function Bg(e, i, o, l) {
        return Jt(e, function(f, m, y) {
          i(l, o(f), m, y);
        }), l;
      }
      function xi(e, i, o) {
        i = Nn(i, e), e = Ju(e, i);
        var l = e == null ? e : e[en(Ft(i))];
        return l == null ? r : _t(l, e, o);
      }
      function fu(e) {
        return ze(e) && at(e) == Tn;
      }
      function $g(e) {
        return ze(e) && at(e) == En;
      }
      function Vg(e) {
        return ze(e) && at(e) == ln;
      }
      function _i(e, i, o, l, f) {
        return e === i ? !0 : e == null || i == null || !ze(e) && !ze(i) ? e !== e && i !== i : Gg(e, i, o, l, _i, f);
      }
      function Gg(e, i, o, l, f, m) {
        var y = oe(e), _ = oe(i), T = y ? Cn : rt(e), L = _ ? Cn : rt(i);
        T = T == Tn ? Ot : T, L = L == Tn ? Ot : L;
        var j = T == Ot, F = L == Ot, W = T == L;
        if (W && zn(e)) {
          if (!zn(i))
            return !1;
          y = !0, j = !1;
        }
        if (W && !j)
          return m || (m = new $t()), y || Fr(e) ? Vu(e, i, o, l, f, m) : ym(e, i, T, o, l, f, m);
        if (!(o & O)) {
          var X = j && Ce.call(e, "__wrapped__"), Q = F && Ce.call(i, "__wrapped__");
          if (X || Q) {
            var ue = X ? e.value() : e, ee = Q ? i.value() : i;
            return m || (m = new $t()), f(ue, ee, o, l, m);
          }
        }
        return W ? (m || (m = new $t()), wm(e, i, o, l, f, m)) : !1;
      }
      function Xg(e) {
        return ze(e) && rt(e) == wt;
      }
      function fa(e, i, o, l) {
        var f = o.length, m = f, y = !l;
        if (e == null)
          return !m;
        for (e = Ae(e); f--; ) {
          var _ = o[f];
          if (y && _[2] ? _[1] !== e[_[0]] : !(_[0] in e))
            return !1;
        }
        for (; ++f < m; ) {
          _ = o[f];
          var T = _[0], L = e[T], j = _[1];
          if (y && _[2]) {
            if (L === r && !(T in e))
              return !1;
          } else {
            var F = new $t();
            if (l)
              var W = l(L, j, T, e, i, F);
            if (!(W === r ? _i(j, L, O | A, l, F) : W))
              return !1;
          }
        }
        return !0;
      }
      function hu(e) {
        if (!je(e) || Am(e))
          return !1;
        var i = bn(e) ? X1 : Je;
        return i.test(rr(e));
      }
      function Yg(e) {
        return ze(e) && at(e) == Zn;
      }
      function Zg(e) {
        return ze(e) && rt(e) == xt;
      }
      function Kg(e) {
        return ze(e) && $s(e.length) && !!Me[at(e)];
      }
      function pu(e) {
        return typeof e == "function" ? e : e == null ? yt : typeof e == "object" ? oe(e) ? vu(e[0], e[1]) : mu(e) : jd(e);
      }
      function ha(e) {
        if (!Ti(e))
          return Q1(e);
        var i = [];
        for (var o in Ae(e))
          Ce.call(e, o) && o != "constructor" && i.push(o);
        return i;
      }
      function qg(e) {
        if (!je(e))
          return Pm(e);
        var i = Ti(e), o = [];
        for (var l in e)
          l == "constructor" && (i || !Ce.call(e, l)) || o.push(l);
        return o;
      }
      function pa(e, i) {
        return e < i;
      }
      function gu(e, i) {
        var o = -1, l = vt(e) ? R(e.length) : [];
        return Ln(e, function(f, m, y) {
          l[++o] = i(f, m, y);
        }), l;
      }
      function mu(e) {
        var i = Aa(e);
        return i.length == 1 && i[0][2] ? Ku(i[0][0], i[0][1]) : function(o) {
          return o === e || fa(o, e, i);
        };
      }
      function vu(e, i) {
        return Oa(e) && Zu(i) ? Ku(en(e), i) : function(o) {
          var l = Ua(o, e);
          return l === r && l === i ? Wa(o, e) : _i(i, l, O | A);
        };
      }
      function Es(e, i, o, l, f) {
        e !== i && ca(i, function(m, y) {
          if (f || (f = new $t()), je(m))
            Jg(e, i, y, o, Es, l, f);
          else {
            var _ = l ? l(Pa(e, y), m, y + "", e, i, f) : r;
            _ === r && (_ = m), oa(e, y, _);
          }
        }, bt);
      }
      function Jg(e, i, o, l, f, m, y) {
        var _ = Pa(e, o), T = Pa(i, o), L = y.get(T);
        if (L) {
          oa(e, o, L);
          return;
        }
        var j = m ? m(_, T, o + "", e, i, y) : r, F = j === r;
        if (F) {
          var W = oe(T), X = !W && zn(T), Q = !W && !X && Fr(T);
          j = T, W || X || Q ? oe(_) ? j = _ : Ue(_) ? j = mt(_) : X ? (F = !1, j = Au(T, !0)) : Q ? (F = !1, j = Ru(T, !0)) : j = [] : ki(T) || ir(T) ? (j = _, ir(_) ? j = Cd(_) : (!je(_) || bn(_)) && (j = Yu(T))) : F = !1;
        }
        F && (y.set(T, j), f(j, T, l, m, y), y.delete(T)), oa(e, o, j);
      }
      function bu(e, i) {
        var o = e.length;
        if (o)
          return i += i < 0 ? o : 0, vn(i, o) ? e[i] : r;
      }
      function yu(e, i, o) {
        i.length ? i = De(i, function(m) {
          return oe(m) ? function(y) {
            return tr(y, m.length === 1 ? m[0] : m);
          } : m;
        }) : i = [yt];
        var l = -1;
        i = De(i, St(J()));
        var f = gu(e, function(m, y, _) {
          var T = De(i, function(L) {
            return L(m);
          });
          return { criteria: T, index: ++l, value: m };
        });
        return T1(f, function(m, y) {
          return dm(m, y, o);
        });
      }
      function Qg(e, i) {
        return wu(e, i, function(o, l) {
          return Wa(e, l);
        });
      }
      function wu(e, i, o) {
        for (var l = -1, f = i.length, m = {}; ++l < f; ) {
          var y = i[l], _ = tr(e, y);
          o(_, y) && Si(m, Nn(y, e), _);
        }
        return m;
      }
      function em(e) {
        return function(i) {
          return tr(i, e);
        };
      }
      function ga(e, i, o, l) {
        var f = l ? I1 : kr, m = -1, y = i.length, _ = e;
        for (e === i && (i = mt(i)), o && (_ = De(e, St(o))); ++m < y; )
          for (var T = 0, L = i[m], j = o ? o(L) : L; (T = f(_, j, T, l)) > -1; )
            _ !== e && bs.call(_, T, 1), bs.call(e, T, 1);
        return e;
      }
      function xu(e, i) {
        for (var o = e ? i.length : 0, l = o - 1; o--; ) {
          var f = i[o];
          if (o == l || f !== m) {
            var m = f;
            vn(f) ? bs.call(e, f, 1) : ya(e, f);
          }
        }
        return e;
      }
      function ma(e, i) {
        return e + xs(tu() * (i - e + 1));
      }
      function tm(e, i, o, l) {
        for (var f = -1, m = Ye(ws((i - e) / (o || 1)), 0), y = R(m); m--; )
          y[l ? m : ++f] = e, e += o;
        return y;
      }
      function va(e, i) {
        var o = "";
        if (!e || i < 1 || i > ke)
          return o;
        do
          i % 2 && (o += e), i = xs(i / 2), i && (e += e);
        while (i);
        return o;
      }
      function de(e, i) {
        return Da(qu(e, i, yt), e + "");
      }
      function nm(e) {
        return iu(zr(e));
      }
      function rm(e, i) {
        var o = zr(e);
        return Fs(o, er(i, 0, o.length));
      }
      function Si(e, i, o, l) {
        if (!je(e))
          return e;
        i = Nn(i, e);
        for (var f = -1, m = i.length, y = m - 1, _ = e; _ != null && ++f < m; ) {
          var T = en(i[f]), L = o;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return e;
          if (f != y) {
            var j = _[T];
            L = l ? l(j, T, _) : r, L === r && (L = je(j) ? j : vn(i[f + 1]) ? [] : {});
          }
          yi(_, T, L), _ = _[T];
        }
        return e;
      }
      var _u = _s ? function(e, i) {
        return _s.set(e, i), e;
      } : yt, im = ys ? function(e, i) {
        return ys(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: $a(i),
          writable: !0
        });
      } : yt;
      function sm(e) {
        return Fs(zr(e));
      }
      function Nt(e, i, o) {
        var l = -1, f = e.length;
        i < 0 && (i = -i > f ? 0 : f + i), o = o > f ? f : o, o < 0 && (o += f), f = i > o ? 0 : o - i >>> 0, i >>>= 0;
        for (var m = R(f); ++l < f; )
          m[l] = e[l + i];
        return m;
      }
      function om(e, i) {
        var o;
        return Ln(e, function(l, f, m) {
          return o = i(l, f, m), !o;
        }), !!o;
      }
      function As(e, i, o) {
        var l = 0, f = e == null ? l : e.length;
        if (typeof i == "number" && i === i && f <= mr) {
          for (; l < f; ) {
            var m = l + f >>> 1, y = e[m];
            y !== null && !Tt(y) && (o ? y <= i : y < i) ? l = m + 1 : f = m;
          }
          return f;
        }
        return ba(e, i, yt, o);
      }
      function ba(e, i, o, l) {
        var f = 0, m = e == null ? 0 : e.length;
        if (m === 0)
          return 0;
        i = o(i);
        for (var y = i !== i, _ = i === null, T = Tt(i), L = i === r; f < m; ) {
          var j = xs((f + m) / 2), F = o(e[j]), W = F !== r, X = F === null, Q = F === F, ue = Tt(F);
          if (y)
            var ee = l || Q;
          else L ? ee = Q && (l || W) : _ ? ee = Q && W && (l || !X) : T ? ee = Q && W && !X && (l || !ue) : X || ue ? ee = !1 : ee = l ? F <= i : F < i;
          ee ? f = j + 1 : m = j;
        }
        return nt(m, Gn);
      }
      function Su(e, i) {
        for (var o = -1, l = e.length, f = 0, m = []; ++o < l; ) {
          var y = e[o], _ = i ? i(y) : y;
          if (!o || !Vt(_, T)) {
            var T = _;
            m[f++] = y === 0 ? 0 : y;
          }
        }
        return m;
      }
      function Iu(e) {
        return typeof e == "number" ? e : Tt(e) ? pt : +e;
      }
      function It(e) {
        if (typeof e == "string")
          return e;
        if (oe(e))
          return De(e, It) + "";
        if (Tt(e))
          return nu ? nu.call(e) : "";
        var i = e + "";
        return i == "0" && 1 / e == -1 / 0 ? "-0" : i;
      }
      function jn(e, i, o) {
        var l = -1, f = cs, m = e.length, y = !0, _ = [], T = _;
        if (o)
          y = !1, f = Xo;
        else if (m >= a) {
          var L = i ? null : vm(e);
          if (L)
            return us(L);
          y = !1, f = hi, T = new Qn();
        } else
          T = i ? [] : _;
        e:
          for (; ++l < m; ) {
            var j = e[l], F = i ? i(j) : j;
            if (j = o || j !== 0 ? j : 0, y && F === F) {
              for (var W = T.length; W--; )
                if (T[W] === F)
                  continue e;
              i && T.push(F), _.push(j);
            } else f(T, F, o) || (T !== _ && T.push(F), _.push(j));
          }
        return _;
      }
      function ya(e, i) {
        return i = Nn(i, e), e = Ju(e, i), e == null || delete e[en(Ft(i))];
      }
      function Tu(e, i, o, l) {
        return Si(e, i, o(tr(e, i)), l);
      }
      function Rs(e, i, o, l) {
        for (var f = e.length, m = l ? f : -1; (l ? m-- : ++m < f) && i(e[m], m, e); )
          ;
        return o ? Nt(e, l ? 0 : m, l ? m + 1 : f) : Nt(e, l ? m + 1 : 0, l ? f : m);
      }
      function Cu(e, i) {
        var o = e;
        return o instanceof ge && (o = o.value()), Yo(i, function(l, f) {
          return f.func.apply(f.thisArg, Mn([l], f.args));
        }, o);
      }
      function wa(e, i, o) {
        var l = e.length;
        if (l < 2)
          return l ? jn(e[0]) : [];
        for (var f = -1, m = R(l); ++f < l; )
          for (var y = e[f], _ = -1; ++_ < l; )
            _ != f && (m[f] = wi(m[f] || y, e[_], i, o));
        return jn(et(m, 1), i, o);
      }
      function ku(e, i, o) {
        for (var l = -1, f = e.length, m = i.length, y = {}; ++l < f; ) {
          var _ = l < m ? i[l] : r;
          o(y, e[l], _);
        }
        return y;
      }
      function xa(e) {
        return Ue(e) ? e : [];
      }
      function _a(e) {
        return typeof e == "function" ? e : yt;
      }
      function Nn(e, i) {
        return oe(e) ? e : Oa(e, i) ? [e] : nd(Te(e));
      }
      var am = de;
      function Fn(e, i, o) {
        var l = e.length;
        return o = o === r ? l : o, !i && o >= l ? e : Nt(e, i, o);
      }
      var Eu = Y1 || function(e) {
        return Qe.clearTimeout(e);
      };
      function Au(e, i) {
        if (i)
          return e.slice();
        var o = e.length, l = Kl ? Kl(o) : new e.constructor(o);
        return e.copy(l), l;
      }
      function Sa(e) {
        var i = new e.constructor(e.byteLength);
        return new ms(i).set(new ms(e)), i;
      }
      function cm(e, i) {
        var o = i ? Sa(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function lm(e) {
        var i = new e.constructor(e.source, Ie.exec(e));
        return i.lastIndex = e.lastIndex, i;
      }
      function um(e) {
        return bi ? Ae(bi.call(e)) : {};
      }
      function Ru(e, i) {
        var o = i ? Sa(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function Ou(e, i) {
        if (e !== i) {
          var o = e !== r, l = e === null, f = e === e, m = Tt(e), y = i !== r, _ = i === null, T = i === i, L = Tt(i);
          if (!_ && !L && !m && e > i || m && y && T && !_ && !L || l && y && T || !o && T || !f)
            return 1;
          if (!l && !m && !L && e < i || L && o && f && !l && !m || _ && o && f || !y && f || !T)
            return -1;
        }
        return 0;
      }
      function dm(e, i, o) {
        for (var l = -1, f = e.criteria, m = i.criteria, y = f.length, _ = o.length; ++l < y; ) {
          var T = Ou(f[l], m[l]);
          if (T) {
            if (l >= _)
              return T;
            var L = o[l];
            return T * (L == "desc" ? -1 : 1);
          }
        }
        return e.index - i.index;
      }
      function Mu(e, i, o, l) {
        for (var f = -1, m = e.length, y = o.length, _ = -1, T = i.length, L = Ye(m - y, 0), j = R(T + L), F = !l; ++_ < T; )
          j[_] = i[_];
        for (; ++f < y; )
          (F || f < m) && (j[o[f]] = e[f]);
        for (; L--; )
          j[_++] = e[f++];
        return j;
      }
      function Pu(e, i, o, l) {
        for (var f = -1, m = e.length, y = -1, _ = o.length, T = -1, L = i.length, j = Ye(m - _, 0), F = R(j + L), W = !l; ++f < j; )
          F[f] = e[f];
        for (var X = f; ++T < L; )
          F[X + T] = i[T];
        for (; ++y < _; )
          (W || f < m) && (F[X + o[y]] = e[f++]);
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
        for (var m = -1, y = i.length; ++m < y; ) {
          var _ = i[m], T = l ? l(o[_], e[_], _, o, e) : r;
          T === r && (T = e[_]), f ? pn(o, _, T) : yi(o, _, T);
        }
        return o;
      }
      function fm(e, i) {
        return Qt(e, Ra(e), i);
      }
      function hm(e, i) {
        return Qt(e, Gu(e), i);
      }
      function Os(e, i) {
        return function(o, l) {
          var f = oe(o) ? b1 : Lg, m = i ? i() : {};
          return f(o, e, J(l, 2), m);
        };
      }
      function Lr(e) {
        return de(function(i, o) {
          var l = -1, f = o.length, m = f > 1 ? o[f - 1] : r, y = f > 2 ? o[2] : r;
          for (m = e.length > 3 && typeof m == "function" ? (f--, m) : r, y && ct(o[0], o[1], y) && (m = f < 3 ? r : m, f = 1), i = Ae(i); ++l < f; ) {
            var _ = o[l];
            _ && e(i, _, l, m);
          }
          return i;
        });
      }
      function Du(e, i) {
        return function(o, l) {
          if (o == null)
            return o;
          if (!vt(o))
            return e(o, l);
          for (var f = o.length, m = i ? f : -1, y = Ae(o); (i ? m-- : ++m < f) && l(y[m], m, y) !== !1; )
            ;
          return o;
        };
      }
      function Lu(e) {
        return function(i, o, l) {
          for (var f = -1, m = Ae(i), y = l(i), _ = y.length; _--; ) {
            var T = y[e ? _ : ++f];
            if (o(m[T], T, m) === !1)
              break;
          }
          return i;
        };
      }
      function pm(e, i, o) {
        var l = i & E, f = Ii(e);
        function m() {
          var y = this && this !== Qe && this instanceof m ? f : e;
          return y.apply(l ? o : this, arguments);
        }
        return m;
      }
      function ju(e) {
        return function(i) {
          i = Te(i);
          var o = Er(i) ? Bt(i) : r, l = o ? o[0] : i.charAt(0), f = o ? Fn(o, 1).join("") : i.slice(1);
          return l[e]() + f;
        };
      }
      function jr(e) {
        return function(i) {
          return Yo(Dd(Pd(i).replace(i1, "")), e, "");
        };
      }
      function Ii(e) {
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
          var o = Dr(e.prototype), l = e.apply(o, i);
          return je(l) ? l : o;
        };
      }
      function gm(e, i, o) {
        var l = Ii(e);
        function f() {
          for (var m = arguments.length, y = R(m), _ = m, T = Nr(f); _--; )
            y[_] = arguments[_];
          var L = m < 3 && y[0] !== T && y[m - 1] !== T ? [] : Pn(y, T);
          if (m -= L.length, m < o)
            return Uu(
              e,
              i,
              Ms,
              f.placeholder,
              r,
              y,
              L,
              r,
              r,
              o - m
            );
          var j = this && this !== Qe && this instanceof f ? l : e;
          return _t(j, this, y);
        }
        return f;
      }
      function Nu(e) {
        return function(i, o, l) {
          var f = Ae(i);
          if (!vt(i)) {
            var m = J(o, 3);
            i = qe(i), o = function(_) {
              return m(f[_], _, f);
            };
          }
          var y = e(i, o, l);
          return y > -1 ? f[m ? i[y] : y] : r;
        };
      }
      function Fu(e) {
        return mn(function(i) {
          var o = i.length, l = o, f = Lt.prototype.thru;
          for (e && i.reverse(); l--; ) {
            var m = i[l];
            if (typeof m != "function")
              throw new Dt(u);
            if (f && !y && js(m) == "wrapper")
              var y = new Lt([], !0);
          }
          for (l = y ? l : o; ++l < o; ) {
            m = i[l];
            var _ = js(m), T = _ == "wrapper" ? Ea(m) : r;
            T && Ma(T[0]) && T[1] == (q | N | K | Y) && !T[4].length && T[9] == 1 ? y = y[js(T[0])].apply(y, T[3]) : y = m.length == 1 && Ma(m) ? y[_]() : y.thru(m);
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
      function Ms(e, i, o, l, f, m, y, _, T, L) {
        var j = i & q, F = i & E, W = i & P, X = i & (N | z), Q = i & G, ue = W ? r : Ii(e);
        function ee() {
          for (var he = arguments.length, be = R(he), Ct = he; Ct--; )
            be[Ct] = arguments[Ct];
          if (X)
            var lt = Nr(ee), kt = k1(be, lt);
          if (l && (be = Mu(be, l, f, X)), m && (be = Pu(be, m, y, X)), he -= kt, X && he < L) {
            var We = Pn(be, lt);
            return Uu(
              e,
              i,
              Ms,
              ee.placeholder,
              o,
              be,
              We,
              _,
              T,
              L - he
            );
          }
          var Gt = F ? o : this, wn = W ? Gt[e] : e;
          return he = be.length, _ ? be = Lm(be, _) : Q && he > 1 && be.reverse(), j && T < he && (be.length = T), this && this !== Qe && this instanceof ee && (wn = ue || Ii(wn)), wn.apply(Gt, be);
        }
        return ee;
      }
      function zu(e, i) {
        return function(o, l) {
          return Bg(o, e, i(l), {});
        };
      }
      function Ps(e, i) {
        return function(o, l) {
          var f;
          if (o === r && l === r)
            return i;
          if (o !== r && (f = o), l !== r) {
            if (f === r)
              return l;
            typeof o == "string" || typeof l == "string" ? (o = It(o), l = It(l)) : (o = Iu(o), l = Iu(l)), f = e(o, l);
          }
          return f;
        };
      }
      function Ia(e) {
        return mn(function(i) {
          return i = De(i, St(J())), de(function(o) {
            var l = this;
            return e(i, function(f) {
              return _t(f, l, o);
            });
          });
        });
      }
      function Ds(e, i) {
        i = i === r ? " " : It(i);
        var o = i.length;
        if (o < 2)
          return o ? va(i, e) : i;
        var l = va(i, ws(e / Ar(i)));
        return Er(i) ? Fn(Bt(l), 0, e).join("") : l.slice(0, e);
      }
      function mm(e, i, o, l) {
        var f = i & E, m = Ii(e);
        function y() {
          for (var _ = -1, T = arguments.length, L = -1, j = l.length, F = R(j + T), W = this && this !== Qe && this instanceof y ? m : e; ++L < j; )
            F[L] = l[L];
          for (; T--; )
            F[L++] = arguments[++_];
          return _t(W, f ? o : this, F);
        }
        return y;
      }
      function Hu(e) {
        return function(i, o, l) {
          return l && typeof l != "number" && ct(i, o, l) && (o = l = r), i = yn(i), o === r ? (o = i, i = 0) : o = yn(o), l = l === r ? i < o ? 1 : -1 : yn(l), tm(i, o, l, e);
        };
      }
      function Ls(e) {
        return function(i, o) {
          return typeof i == "string" && typeof o == "string" || (i = zt(i), o = zt(o)), e(i, o);
        };
      }
      function Uu(e, i, o, l, f, m, y, _, T, L) {
        var j = i & N, F = j ? y : r, W = j ? r : y, X = j ? m : r, Q = j ? r : m;
        i |= j ? K : Z, i &= ~(j ? Z : K), i & M || (i &= -4);
        var ue = [
          e,
          i,
          f,
          X,
          F,
          Q,
          W,
          _,
          T,
          L
        ], ee = o.apply(r, ue);
        return Ma(e) && Qu(ee, ue), ee.placeholder = l, ed(ee, e, i);
      }
      function Ta(e) {
        var i = Xe[e];
        return function(o, l) {
          if (o = zt(o), l = l == null ? 0 : nt(ce(l), 292), l && eu(o)) {
            var f = (Te(o) + "e").split("e"), m = i(f[0] + "e" + (+f[1] + l));
            return f = (Te(m) + "e").split("e"), +(f[0] + "e" + (+f[1] - l));
          }
          return i(o);
        };
      }
      var vm = Mr && 1 / us(new Mr([, -0]))[1] == Ee ? function(e) {
        return new Mr(e);
      } : Xa;
      function Wu(e) {
        return function(i) {
          var o = rt(i);
          return o == wt ? ta(i) : o == xt ? D1(i) : C1(i, e(i));
        };
      }
      function gn(e, i, o, l, f, m, y, _) {
        var T = i & P;
        if (!T && typeof e != "function")
          throw new Dt(u);
        var L = l ? l.length : 0;
        if (L || (i &= -97, l = f = r), y = y === r ? y : Ye(ce(y), 0), _ = _ === r ? _ : ce(_), L -= f ? f.length : 0, i & Z) {
          var j = l, F = f;
          l = f = r;
        }
        var W = T ? r : Ea(e), X = [
          e,
          i,
          o,
          l,
          f,
          j,
          F,
          m,
          y,
          _
        ];
        if (W && Mm(X, W), e = X[0], i = X[1], o = X[2], l = X[3], f = X[4], _ = X[9] = X[9] === r ? T ? 0 : e.length : Ye(X[9] - L, 0), !_ && i & (N | z) && (i &= -25), !i || i == E)
          var Q = pm(e, i, o);
        else i == N || i == z ? Q = gm(e, i, _) : (i == K || i == (E | K)) && !f.length ? Q = mm(e, i, o, l) : Q = Ms.apply(r, X);
        var ue = W ? _u : Qu;
        return ed(ue(Q, X), e, i);
      }
      function Bu(e, i, o, l) {
        return e === r || Vt(e, Or[o]) && !Ce.call(l, o) ? i : e;
      }
      function $u(e, i, o, l, f, m) {
        return je(e) && je(i) && (m.set(i, e), Es(e, i, r, $u, m), m.delete(i)), e;
      }
      function bm(e) {
        return ki(e) ? r : e;
      }
      function Vu(e, i, o, l, f, m) {
        var y = o & O, _ = e.length, T = i.length;
        if (_ != T && !(y && T > _))
          return !1;
        var L = m.get(e), j = m.get(i);
        if (L && j)
          return L == i && j == e;
        var F = -1, W = !0, X = o & A ? new Qn() : r;
        for (m.set(e, i), m.set(i, e); ++F < _; ) {
          var Q = e[F], ue = i[F];
          if (l)
            var ee = y ? l(ue, Q, F, i, e, m) : l(Q, ue, F, e, i, m);
          if (ee !== r) {
            if (ee)
              continue;
            W = !1;
            break;
          }
          if (X) {
            if (!Zo(i, function(he, be) {
              if (!hi(X, be) && (Q === he || f(Q, he, o, l, m)))
                return X.push(be);
            })) {
              W = !1;
              break;
            }
          } else if (!(Q === ue || f(Q, ue, o, l, m))) {
            W = !1;
            break;
          }
        }
        return m.delete(e), m.delete(i), W;
      }
      function ym(e, i, o, l, f, m, y) {
        switch (o) {
          case An:
            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
              return !1;
            e = e.buffer, i = i.buffer;
          case En:
            return !(e.byteLength != i.byteLength || !m(new ms(e), new ms(i)));
          case Kt:
          case ln:
          case qt:
            return Vt(+e, +i);
          case br:
            return e.name == i.name && e.message == i.message;
          case Zn:
          case un:
            return e == i + "";
          case wt:
            var _ = ta;
          case xt:
            var T = l & O;
            if (_ || (_ = us), e.size != i.size && !T)
              return !1;
            var L = y.get(e);
            if (L)
              return L == i;
            l |= A, y.set(e, i);
            var j = Vu(_(e), _(i), l, f, m, y);
            return y.delete(e), j;
          case wr:
            if (bi)
              return bi.call(e) == bi.call(i);
        }
        return !1;
      }
      function wm(e, i, o, l, f, m) {
        var y = o & O, _ = Ca(e), T = _.length, L = Ca(i), j = L.length;
        if (T != j && !y)
          return !1;
        for (var F = T; F--; ) {
          var W = _[F];
          if (!(y ? W in i : Ce.call(i, W)))
            return !1;
        }
        var X = m.get(e), Q = m.get(i);
        if (X && Q)
          return X == i && Q == e;
        var ue = !0;
        m.set(e, i), m.set(i, e);
        for (var ee = y; ++F < T; ) {
          W = _[F];
          var he = e[W], be = i[W];
          if (l)
            var Ct = y ? l(be, he, W, i, e, m) : l(he, be, W, e, i, m);
          if (!(Ct === r ? he === be || f(he, be, o, l, m) : Ct)) {
            ue = !1;
            break;
          }
          ee || (ee = W == "constructor");
        }
        if (ue && !ee) {
          var lt = e.constructor, kt = i.constructor;
          lt != kt && "constructor" in e && "constructor" in i && !(typeof lt == "function" && lt instanceof lt && typeof kt == "function" && kt instanceof kt) && (ue = !1);
        }
        return m.delete(e), m.delete(i), ue;
      }
      function mn(e) {
        return Da(qu(e, r, od), e + "");
      }
      function Ca(e) {
        return du(e, qe, Ra);
      }
      function ka(e) {
        return du(e, bt, Gu);
      }
      var Ea = _s ? function(e) {
        return _s.get(e);
      } : Xa;
      function js(e) {
        for (var i = e.name + "", o = Pr[i], l = Ce.call(Pr, i) ? o.length : 0; l--; ) {
          var f = o[l], m = f.func;
          if (m == null || m == e)
            return f.name;
        }
        return i;
      }
      function Nr(e) {
        var i = Ce.call(p, "placeholder") ? p : e;
        return i.placeholder;
      }
      function J() {
        var e = p.iteratee || Va;
        return e = e === Va ? pu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ns(e, i) {
        var o = e.__data__;
        return Em(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
      }
      function Aa(e) {
        for (var i = qe(e), o = i.length; o--; ) {
          var l = i[o], f = e[l];
          i[o] = [l, f, Zu(f)];
        }
        return i;
      }
      function nr(e, i) {
        var o = O1(e, i);
        return hu(o) ? o : r;
      }
      function xm(e) {
        var i = Ce.call(e, qn), o = e[qn];
        try {
          e[qn] = r;
          var l = !0;
        } catch {
        }
        var f = ps.call(e);
        return l && (i ? e[qn] = o : delete e[qn]), f;
      }
      var Ra = ra ? function(e) {
        return e == null ? [] : (e = Ae(e), On(ra(e), function(i) {
          return Jl.call(e, i);
        }));
      } : Ya, Gu = ra ? function(e) {
        for (var i = []; e; )
          Mn(i, Ra(e)), e = vs(e);
        return i;
      } : Ya, rt = at;
      (ia && rt(new ia(new ArrayBuffer(1))) != An || gi && rt(new gi()) != wt || sa && rt(sa.resolve()) != ti || Mr && rt(new Mr()) != xt || mi && rt(new mi()) != kn) && (rt = function(e) {
        var i = at(e), o = i == Ot ? e.constructor : r, l = o ? rr(o) : "";
        if (l)
          switch (l) {
            case rg:
              return An;
            case ig:
              return wt;
            case sg:
              return ti;
            case og:
              return xt;
            case ag:
              return kn;
          }
        return i;
      });
      function _m(e, i, o) {
        for (var l = -1, f = o.length; ++l < f; ) {
          var m = o[l], y = m.size;
          switch (m.type) {
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
      function Sm(e) {
        var i = e.match(No);
        return i ? i[1].split(w) : [];
      }
      function Xu(e, i, o) {
        i = Nn(i, e);
        for (var l = -1, f = i.length, m = !1; ++l < f; ) {
          var y = en(i[l]);
          if (!(m = e != null && o(e, y)))
            break;
          e = e[y];
        }
        return m || ++l != f ? m : (f = e == null ? 0 : e.length, !!f && $s(f) && vn(y, f) && (oe(e) || ir(e)));
      }
      function Im(e) {
        var i = e.length, o = new e.constructor(i);
        return i && typeof e[0] == "string" && Ce.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Yu(e) {
        return typeof e.constructor == "function" && !Ti(e) ? Dr(vs(e)) : {};
      }
      function Tm(e, i, o) {
        var l = e.constructor;
        switch (i) {
          case En:
            return Sa(e);
          case Kt:
          case ln:
            return new l(+e);
          case An:
            return cm(e, o);
          case xr:
          case _r:
          case ni:
          case ri:
          case ii:
          case si:
          case oi:
          case ai:
          case ci:
            return Ru(e, o);
          case wt:
            return new l();
          case qt:
          case un:
            return new l(e);
          case Zn:
            return lm(e);
          case xt:
            return new l();
          case wr:
            return um(e);
        }
      }
      function Cm(e, i) {
        var o = i.length;
        if (!o)
          return e;
        var l = o - 1;
        return i[l] = (o > 1 ? "& " : "") + i[l], i = i.join(o > 2 ? ", " : " "), e.replace(jo, `{
/* [wrapped with ` + i + `] */
`);
      }
      function km(e) {
        return oe(e) || ir(e) || !!(Ql && e && e[Ql]);
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
      function Oa(e, i) {
        if (oe(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || Tt(e) ? !0 : Po.test(e) || !ss.test(e) || i != null && e in Ae(i);
      }
      function Em(e) {
        var i = typeof e;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ma(e) {
        var i = js(e), o = p[i];
        if (typeof o != "function" || !(i in ge.prototype))
          return !1;
        if (e === o)
          return !0;
        var l = Ea(o);
        return !!l && e === l[0];
      }
      function Am(e) {
        return !!Zl && Zl in e;
      }
      var Rm = fs ? bn : Za;
      function Ti(e) {
        var i = e && e.constructor, o = typeof i == "function" && i.prototype || Or;
        return e === o;
      }
      function Zu(e) {
        return e === e && !je(e);
      }
      function Ku(e, i) {
        return function(o) {
          return o == null ? !1 : o[e] === i && (i !== r || e in Ae(o));
        };
      }
      function Om(e) {
        var i = Ws(e, function(l) {
          return o.size === g && o.clear(), l;
        }), o = i.cache;
        return i;
      }
      function Mm(e, i) {
        var o = e[1], l = i[1], f = o | l, m = f < (E | P | q), y = l == q && o == N || l == q && o == Y && e[7].length <= i[8] || l == (q | Y) && i[7].length <= i[8] && o == N;
        if (!(m || y))
          return e;
        l & E && (e[2] = i[2], f |= o & E ? 0 : M);
        var _ = i[3];
        if (_) {
          var T = e[3];
          e[3] = T ? Mu(T, _, i[4]) : _, e[4] = T ? Pn(e[3], b) : i[4];
        }
        return _ = i[5], _ && (T = e[5], e[5] = T ? Pu(T, _, i[6]) : _, e[6] = T ? Pn(e[5], b) : i[6]), _ = i[7], _ && (e[7] = _), l & q && (e[8] = e[8] == null ? i[8] : nt(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = f, e;
      }
      function Pm(e) {
        var i = [];
        if (e != null)
          for (var o in Ae(e))
            i.push(o);
        return i;
      }
      function Dm(e) {
        return ps.call(e);
      }
      function qu(e, i, o) {
        return i = Ye(i === r ? e.length - 1 : i, 0), function() {
          for (var l = arguments, f = -1, m = Ye(l.length - i, 0), y = R(m); ++f < m; )
            y[f] = l[i + f];
          f = -1;
          for (var _ = R(i + 1); ++f < i; )
            _[f] = l[f];
          return _[i] = o(y), _t(e, this, _);
        };
      }
      function Ju(e, i) {
        return i.length < 2 ? e : tr(e, Nt(i, 0, -1));
      }
      function Lm(e, i) {
        for (var o = e.length, l = nt(i.length, o), f = mt(e); l--; ) {
          var m = i[l];
          e[l] = vn(m, o) ? f[m] : r;
        }
        return e;
      }
      function Pa(e, i) {
        if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__")
          return e[i];
      }
      var Qu = td(_u), Ci = K1 || function(e, i) {
        return Qe.setTimeout(e, i);
      }, Da = td(im);
      function ed(e, i, o) {
        var l = i + "";
        return Da(e, Cm(l, jm(Sm(l), o)));
      }
      function td(e) {
        var i = 0, o = 0;
        return function() {
          var l = eg(), f = ae - (l - o);
          if (o = l, f > 0) {
            if (++i >= V)
              return arguments[0];
          } else
            i = 0;
          return e.apply(r, arguments);
        };
      }
      function Fs(e, i) {
        var o = -1, l = e.length, f = l - 1;
        for (i = i === r ? l : i; ++o < i; ) {
          var m = ma(o, f), y = e[m];
          e[m] = e[o], e[o] = y;
        }
        return e.length = i, e;
      }
      var nd = Om(function(e) {
        var i = [];
        return e.charCodeAt(0) === 46 && i.push(""), e.replace(Do, function(o, l, f, m) {
          i.push(f ? m.replace(re, "$1") : l || o);
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
            return hs.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function jm(e, i) {
        return Pt(Qr, function(o) {
          var l = "_." + o[0];
          i & o[1] && !cs(e, l) && e.push(l);
        }), e.sort();
      }
      function rd(e) {
        if (e instanceof ge)
          return e.clone();
        var i = new Lt(e.__wrapped__, e.__chain__);
        return i.__actions__ = mt(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i;
      }
      function Nm(e, i, o) {
        (o ? ct(e, i, o) : i === r) ? i = 1 : i = Ye(ce(i), 0);
        var l = e == null ? 0 : e.length;
        if (!l || i < 1)
          return [];
        for (var f = 0, m = 0, y = R(ws(l / i)); f < l; )
          y[m++] = Nt(e, f, f += i);
        return y;
      }
      function Fm(e) {
        for (var i = -1, o = e == null ? 0 : e.length, l = 0, f = []; ++i < o; ) {
          var m = e[i];
          m && (f[l++] = m);
        }
        return f;
      }
      function zm() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var i = R(e - 1), o = arguments[0], l = e; l--; )
          i[l - 1] = arguments[l];
        return Mn(oe(o) ? mt(o) : [o], et(i, 1));
      }
      var Hm = de(function(e, i) {
        return Ue(e) ? wi(e, et(i, 1, Ue, !0)) : [];
      }), Um = de(function(e, i) {
        var o = Ft(i);
        return Ue(o) && (o = r), Ue(e) ? wi(e, et(i, 1, Ue, !0), J(o, 2)) : [];
      }), Wm = de(function(e, i) {
        var o = Ft(i);
        return Ue(o) && (o = r), Ue(e) ? wi(e, et(i, 1, Ue, !0), r, o) : [];
      });
      function Bm(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (i = o || i === r ? 1 : ce(i), Nt(e, i < 0 ? 0 : i, l)) : [];
      }
      function $m(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (i = o || i === r ? 1 : ce(i), i = l - i, Nt(e, 0, i < 0 ? 0 : i)) : [];
      }
      function Vm(e, i) {
        return e && e.length ? Rs(e, J(i, 3), !0, !0) : [];
      }
      function Gm(e, i) {
        return e && e.length ? Rs(e, J(i, 3), !0) : [];
      }
      function Xm(e, i, o, l) {
        var f = e == null ? 0 : e.length;
        return f ? (o && typeof o != "number" && ct(e, i, o) && (o = 0, l = f), zg(e, i, o, l)) : [];
      }
      function id(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = o == null ? 0 : ce(o);
        return f < 0 && (f = Ye(l + f, 0)), ls(e, J(i, 3), f);
      }
      function sd(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = l - 1;
        return o !== r && (f = ce(o), f = o < 0 ? Ye(l + f, 0) : nt(f, l - 1)), ls(e, J(i, 3), f, !0);
      }
      function od(e) {
        var i = e == null ? 0 : e.length;
        return i ? et(e, 1) : [];
      }
      function Ym(e) {
        var i = e == null ? 0 : e.length;
        return i ? et(e, Ee) : [];
      }
      function Zm(e, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i = i === r ? 1 : ce(i), et(e, i)) : [];
      }
      function Km(e) {
        for (var i = -1, o = e == null ? 0 : e.length, l = {}; ++i < o; ) {
          var f = e[i];
          l[f[0]] = f[1];
        }
        return l;
      }
      function ad(e) {
        return e && e.length ? e[0] : r;
      }
      function qm(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = o == null ? 0 : ce(o);
        return f < 0 && (f = Ye(l + f, 0)), kr(e, i, f);
      }
      function Jm(e) {
        var i = e == null ? 0 : e.length;
        return i ? Nt(e, 0, -1) : [];
      }
      var Qm = de(function(e) {
        var i = De(e, xa);
        return i.length && i[0] === e[0] ? da(i) : [];
      }), e0 = de(function(e) {
        var i = Ft(e), o = De(e, xa);
        return i === Ft(o) ? i = r : o.pop(), o.length && o[0] === e[0] ? da(o, J(i, 2)) : [];
      }), t0 = de(function(e) {
        var i = Ft(e), o = De(e, xa);
        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === e[0] ? da(o, r, i) : [];
      });
      function n0(e, i) {
        return e == null ? "" : J1.call(e, i);
      }
      function Ft(e) {
        var i = e == null ? 0 : e.length;
        return i ? e[i - 1] : r;
      }
      function r0(e, i, o) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var f = l;
        return o !== r && (f = ce(o), f = f < 0 ? Ye(l + f, 0) : nt(f, l - 1)), i === i ? j1(e, i, f) : ls(e, Ul, f, !0);
      }
      function i0(e, i) {
        return e && e.length ? bu(e, ce(i)) : r;
      }
      var s0 = de(cd);
      function cd(e, i) {
        return e && e.length && i && i.length ? ga(e, i) : e;
      }
      function o0(e, i, o) {
        return e && e.length && i && i.length ? ga(e, i, J(o, 2)) : e;
      }
      function a0(e, i, o) {
        return e && e.length && i && i.length ? ga(e, i, r, o) : e;
      }
      var c0 = mn(function(e, i) {
        var o = e == null ? 0 : e.length, l = aa(e, i);
        return xu(e, De(i, function(f) {
          return vn(f, o) ? +f : f;
        }).sort(Ou)), l;
      });
      function l0(e, i) {
        var o = [];
        if (!(e && e.length))
          return o;
        var l = -1, f = [], m = e.length;
        for (i = J(i, 3); ++l < m; ) {
          var y = e[l];
          i(y, l, e) && (o.push(y), f.push(l));
        }
        return xu(e, f), o;
      }
      function La(e) {
        return e == null ? e : ng.call(e);
      }
      function u0(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (o && typeof o != "number" && ct(e, i, o) ? (i = 0, o = l) : (i = i == null ? 0 : ce(i), o = o === r ? l : ce(o)), Nt(e, i, o)) : [];
      }
      function d0(e, i) {
        return As(e, i);
      }
      function f0(e, i, o) {
        return ba(e, i, J(o, 2));
      }
      function h0(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var l = As(e, i);
          if (l < o && Vt(e[l], i))
            return l;
        }
        return -1;
      }
      function p0(e, i) {
        return As(e, i, !0);
      }
      function g0(e, i, o) {
        return ba(e, i, J(o, 2), !0);
      }
      function m0(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var l = As(e, i, !0) - 1;
          if (Vt(e[l], i))
            return l;
        }
        return -1;
      }
      function v0(e) {
        return e && e.length ? Su(e) : [];
      }
      function b0(e, i) {
        return e && e.length ? Su(e, J(i, 2)) : [];
      }
      function y0(e) {
        var i = e == null ? 0 : e.length;
        return i ? Nt(e, 1, i) : [];
      }
      function w0(e, i, o) {
        return e && e.length ? (i = o || i === r ? 1 : ce(i), Nt(e, 0, i < 0 ? 0 : i)) : [];
      }
      function x0(e, i, o) {
        var l = e == null ? 0 : e.length;
        return l ? (i = o || i === r ? 1 : ce(i), i = l - i, Nt(e, i < 0 ? 0 : i, l)) : [];
      }
      function _0(e, i) {
        return e && e.length ? Rs(e, J(i, 3), !1, !0) : [];
      }
      function S0(e, i) {
        return e && e.length ? Rs(e, J(i, 3)) : [];
      }
      var I0 = de(function(e) {
        return jn(et(e, 1, Ue, !0));
      }), T0 = de(function(e) {
        var i = Ft(e);
        return Ue(i) && (i = r), jn(et(e, 1, Ue, !0), J(i, 2));
      }), C0 = de(function(e) {
        var i = Ft(e);
        return i = typeof i == "function" ? i : r, jn(et(e, 1, Ue, !0), r, i);
      });
      function k0(e) {
        return e && e.length ? jn(e) : [];
      }
      function E0(e, i) {
        return e && e.length ? jn(e, J(i, 2)) : [];
      }
      function A0(e, i) {
        return i = typeof i == "function" ? i : r, e && e.length ? jn(e, r, i) : [];
      }
      function ja(e) {
        if (!(e && e.length))
          return [];
        var i = 0;
        return e = On(e, function(o) {
          if (Ue(o))
            return i = Ye(o.length, i), !0;
        }), Qo(i, function(o) {
          return De(e, Ko(o));
        });
      }
      function ld(e, i) {
        if (!(e && e.length))
          return [];
        var o = ja(e);
        return i == null ? o : De(o, function(l) {
          return _t(i, r, l);
        });
      }
      var R0 = de(function(e, i) {
        return Ue(e) ? wi(e, i) : [];
      }), O0 = de(function(e) {
        return wa(On(e, Ue));
      }), M0 = de(function(e) {
        var i = Ft(e);
        return Ue(i) && (i = r), wa(On(e, Ue), J(i, 2));
      }), P0 = de(function(e) {
        var i = Ft(e);
        return i = typeof i == "function" ? i : r, wa(On(e, Ue), r, i);
      }), D0 = de(ja);
      function L0(e, i) {
        return ku(e || [], i || [], yi);
      }
      function j0(e, i) {
        return ku(e || [], i || [], Si);
      }
      var N0 = de(function(e) {
        var i = e.length, o = i > 1 ? e[i - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, ld(e, o);
      });
      function ud(e) {
        var i = p(e);
        return i.__chain__ = !0, i;
      }
      function F0(e, i) {
        return i(e), e;
      }
      function zs(e, i) {
        return i(e);
      }
      var z0 = mn(function(e) {
        var i = e.length, o = i ? e[0] : 0, l = this.__wrapped__, f = function(m) {
          return aa(m, e);
        };
        return i > 1 || this.__actions__.length || !(l instanceof ge) || !vn(o) ? this.thru(f) : (l = l.slice(o, +o + (i ? 1 : 0)), l.__actions__.push({
          func: zs,
          args: [f],
          thisArg: r
        }), new Lt(l, this.__chain__).thru(function(m) {
          return i && !m.length && m.push(r), m;
        }));
      });
      function H0() {
        return ud(this);
      }
      function U0() {
        return new Lt(this.value(), this.__chain__);
      }
      function W0() {
        this.__values__ === r && (this.__values__ = Id(this.value()));
        var e = this.__index__ >= this.__values__.length, i = e ? r : this.__values__[this.__index__++];
        return { done: e, value: i };
      }
      function B0() {
        return this;
      }
      function $0(e) {
        for (var i, o = this; o instanceof Is; ) {
          var l = rd(o);
          l.__index__ = 0, l.__values__ = r, i ? f.__wrapped__ = l : i = l;
          var f = l;
          o = o.__wrapped__;
        }
        return f.__wrapped__ = e, i;
      }
      function V0() {
        var e = this.__wrapped__;
        if (e instanceof ge) {
          var i = e;
          return this.__actions__.length && (i = new ge(this)), i = i.reverse(), i.__actions__.push({
            func: zs,
            args: [La],
            thisArg: r
          }), new Lt(i, this.__chain__);
        }
        return this.thru(La);
      }
      function G0() {
        return Cu(this.__wrapped__, this.__actions__);
      }
      var X0 = Os(function(e, i, o) {
        Ce.call(e, o) ? ++e[o] : pn(e, o, 1);
      });
      function Y0(e, i, o) {
        var l = oe(e) ? zl : Fg;
        return o && ct(e, i, o) && (i = r), l(e, J(i, 3));
      }
      function Z0(e, i) {
        var o = oe(e) ? On : lu;
        return o(e, J(i, 3));
      }
      var K0 = Nu(id), q0 = Nu(sd);
      function J0(e, i) {
        return et(Hs(e, i), 1);
      }
      function Q0(e, i) {
        return et(Hs(e, i), Ee);
      }
      function ev(e, i, o) {
        return o = o === r ? 1 : ce(o), et(Hs(e, i), o);
      }
      function dd(e, i) {
        var o = oe(e) ? Pt : Ln;
        return o(e, J(i, 3));
      }
      function fd(e, i) {
        var o = oe(e) ? y1 : cu;
        return o(e, J(i, 3));
      }
      var tv = Os(function(e, i, o) {
        Ce.call(e, o) ? e[o].push(i) : pn(e, o, [i]);
      });
      function nv(e, i, o, l) {
        e = vt(e) ? e : zr(e), o = o && !l ? ce(o) : 0;
        var f = e.length;
        return o < 0 && (o = Ye(f + o, 0)), Vs(e) ? o <= f && e.indexOf(i, o) > -1 : !!f && kr(e, i, o) > -1;
      }
      var rv = de(function(e, i, o) {
        var l = -1, f = typeof i == "function", m = vt(e) ? R(e.length) : [];
        return Ln(e, function(y) {
          m[++l] = f ? _t(i, y, o) : xi(y, i, o);
        }), m;
      }), iv = Os(function(e, i, o) {
        pn(e, o, i);
      });
      function Hs(e, i) {
        var o = oe(e) ? De : gu;
        return o(e, J(i, 3));
      }
      function sv(e, i, o, l) {
        return e == null ? [] : (oe(i) || (i = i == null ? [] : [i]), o = l ? r : o, oe(o) || (o = o == null ? [] : [o]), yu(e, i, o));
      }
      var ov = Os(function(e, i, o) {
        e[o ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function av(e, i, o) {
        var l = oe(e) ? Yo : Bl, f = arguments.length < 3;
        return l(e, J(i, 4), o, f, Ln);
      }
      function cv(e, i, o) {
        var l = oe(e) ? w1 : Bl, f = arguments.length < 3;
        return l(e, J(i, 4), o, f, cu);
      }
      function lv(e, i) {
        var o = oe(e) ? On : lu;
        return o(e, Bs(J(i, 3)));
      }
      function uv(e) {
        var i = oe(e) ? iu : nm;
        return i(e);
      }
      function dv(e, i, o) {
        (o ? ct(e, i, o) : i === r) ? i = 1 : i = ce(i);
        var l = oe(e) ? Pg : rm;
        return l(e, i);
      }
      function fv(e) {
        var i = oe(e) ? Dg : sm;
        return i(e);
      }
      function hv(e) {
        if (e == null)
          return 0;
        if (vt(e))
          return Vs(e) ? Ar(e) : e.length;
        var i = rt(e);
        return i == wt || i == xt ? e.size : ha(e).length;
      }
      function pv(e, i, o) {
        var l = oe(e) ? Zo : om;
        return o && ct(e, i, o) && (i = r), l(e, J(i, 3));
      }
      var gv = de(function(e, i) {
        if (e == null)
          return [];
        var o = i.length;
        return o > 1 && ct(e, i[0], i[1]) ? i = [] : o > 2 && ct(i[0], i[1], i[2]) && (i = [i[0]]), yu(e, et(i, 1), []);
      }), Us = Z1 || function() {
        return Qe.Date.now();
      };
      function mv(e, i) {
        if (typeof i != "function")
          throw new Dt(u);
        return e = ce(e), function() {
          if (--e < 1)
            return i.apply(this, arguments);
        };
      }
      function hd(e, i, o) {
        return i = o ? r : i, i = e && i == null ? e.length : i, gn(e, q, r, r, r, r, i);
      }
      function pd(e, i) {
        var o;
        if (typeof i != "function")
          throw new Dt(u);
        return e = ce(e), function() {
          return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o;
        };
      }
      var Na = de(function(e, i, o) {
        var l = E;
        if (o.length) {
          var f = Pn(o, Nr(Na));
          l |= K;
        }
        return gn(e, l, i, o, f);
      }), gd = de(function(e, i, o) {
        var l = E | P;
        if (o.length) {
          var f = Pn(o, Nr(gd));
          l |= K;
        }
        return gn(i, l, e, o, f);
      });
      function md(e, i, o) {
        i = o ? r : i;
        var l = gn(e, N, r, r, r, r, r, i);
        return l.placeholder = md.placeholder, l;
      }
      function vd(e, i, o) {
        i = o ? r : i;
        var l = gn(e, z, r, r, r, r, r, i);
        return l.placeholder = vd.placeholder, l;
      }
      function bd(e, i, o) {
        var l, f, m, y, _, T, L = 0, j = !1, F = !1, W = !0;
        if (typeof e != "function")
          throw new Dt(u);
        i = zt(i) || 0, je(o) && (j = !!o.leading, F = "maxWait" in o, m = F ? Ye(zt(o.maxWait) || 0, i) : m, W = "trailing" in o ? !!o.trailing : W);
        function X(We) {
          var Gt = l, wn = f;
          return l = f = r, L = We, y = e.apply(wn, Gt), y;
        }
        function Q(We) {
          return L = We, _ = Ci(he, i), j ? X(We) : y;
        }
        function ue(We) {
          var Gt = We - T, wn = We - L, Nd = i - Gt;
          return F ? nt(Nd, m - wn) : Nd;
        }
        function ee(We) {
          var Gt = We - T, wn = We - L;
          return T === r || Gt >= i || Gt < 0 || F && wn >= m;
        }
        function he() {
          var We = Us();
          if (ee(We))
            return be(We);
          _ = Ci(he, ue(We));
        }
        function be(We) {
          return _ = r, W && l ? X(We) : (l = f = r, y);
        }
        function Ct() {
          _ !== r && Eu(_), L = 0, l = T = f = _ = r;
        }
        function lt() {
          return _ === r ? y : be(Us());
        }
        function kt() {
          var We = Us(), Gt = ee(We);
          if (l = arguments, f = this, T = We, Gt) {
            if (_ === r)
              return Q(T);
            if (F)
              return Eu(_), _ = Ci(he, i), X(T);
          }
          return _ === r && (_ = Ci(he, i)), y;
        }
        return kt.cancel = Ct, kt.flush = lt, kt;
      }
      var vv = de(function(e, i) {
        return au(e, 1, i);
      }), bv = de(function(e, i, o) {
        return au(e, zt(i) || 0, o);
      });
      function yv(e) {
        return gn(e, G);
      }
      function Ws(e, i) {
        if (typeof e != "function" || i != null && typeof i != "function")
          throw new Dt(u);
        var o = function() {
          var l = arguments, f = i ? i.apply(this, l) : l[0], m = o.cache;
          if (m.has(f))
            return m.get(f);
          var y = e.apply(this, l);
          return o.cache = m.set(f, y) || m, y;
        };
        return o.cache = new (Ws.Cache || hn)(), o;
      }
      Ws.Cache = hn;
      function Bs(e) {
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
      function wv(e) {
        return pd(2, e);
      }
      var xv = am(function(e, i) {
        i = i.length == 1 && oe(i[0]) ? De(i[0], St(J())) : De(et(i, 1), St(J()));
        var o = i.length;
        return de(function(l) {
          for (var f = -1, m = nt(l.length, o); ++f < m; )
            l[f] = i[f].call(this, l[f]);
          return _t(e, this, l);
        });
      }), Fa = de(function(e, i) {
        var o = Pn(i, Nr(Fa));
        return gn(e, K, r, i, o);
      }), yd = de(function(e, i) {
        var o = Pn(i, Nr(yd));
        return gn(e, Z, r, i, o);
      }), _v = mn(function(e, i) {
        return gn(e, Y, r, r, r, i);
      });
      function Sv(e, i) {
        if (typeof e != "function")
          throw new Dt(u);
        return i = i === r ? i : ce(i), de(e, i);
      }
      function Iv(e, i) {
        if (typeof e != "function")
          throw new Dt(u);
        return i = i == null ? 0 : Ye(ce(i), 0), de(function(o) {
          var l = o[i], f = Fn(o, 0, i);
          return l && Mn(f, l), _t(e, this, f);
        });
      }
      function Tv(e, i, o) {
        var l = !0, f = !0;
        if (typeof e != "function")
          throw new Dt(u);
        return je(o) && (l = "leading" in o ? !!o.leading : l, f = "trailing" in o ? !!o.trailing : f), bd(e, i, {
          leading: l,
          maxWait: i,
          trailing: f
        });
      }
      function Cv(e) {
        return hd(e, 1);
      }
      function kv(e, i) {
        return Fa(_a(i), e);
      }
      function Ev() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function Av(e) {
        return jt(e, C);
      }
      function Rv(e, i) {
        return i = typeof i == "function" ? i : r, jt(e, C, i);
      }
      function Ov(e) {
        return jt(e, x | C);
      }
      function Mv(e, i) {
        return i = typeof i == "function" ? i : r, jt(e, x | C, i);
      }
      function Pv(e, i) {
        return i == null || ou(e, i, qe(i));
      }
      function Vt(e, i) {
        return e === i || e !== e && i !== i;
      }
      var Dv = Ls(ua), Lv = Ls(function(e, i) {
        return e >= i;
      }), ir = fu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? fu : function(e) {
        return ze(e) && Ce.call(e, "callee") && !Jl.call(e, "callee");
      }, oe = R.isArray, jv = Pl ? St(Pl) : $g;
      function vt(e) {
        return e != null && $s(e.length) && !bn(e);
      }
      function Ue(e) {
        return ze(e) && vt(e);
      }
      function Nv(e) {
        return e === !0 || e === !1 || ze(e) && at(e) == Kt;
      }
      var zn = q1 || Za, Fv = Dl ? St(Dl) : Vg;
      function zv(e) {
        return ze(e) && e.nodeType === 1 && !ki(e);
      }
      function Hv(e) {
        if (e == null)
          return !0;
        if (vt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || zn(e) || Fr(e) || ir(e)))
          return !e.length;
        var i = rt(e);
        if (i == wt || i == xt)
          return !e.size;
        if (Ti(e))
          return !ha(e).length;
        for (var o in e)
          if (Ce.call(e, o))
            return !1;
        return !0;
      }
      function Uv(e, i) {
        return _i(e, i);
      }
      function Wv(e, i, o) {
        o = typeof o == "function" ? o : r;
        var l = o ? o(e, i) : r;
        return l === r ? _i(e, i, r, o) : !!l;
      }
      function za(e) {
        if (!ze(e))
          return !1;
        var i = at(e);
        return i == br || i == vr || typeof e.message == "string" && typeof e.name == "string" && !ki(e);
      }
      function Bv(e) {
        return typeof e == "number" && eu(e);
      }
      function bn(e) {
        if (!je(e))
          return !1;
        var i = at(e);
        return i == Xn || i == es || i == ei || i == yr;
      }
      function wd(e) {
        return typeof e == "number" && e == ce(e);
      }
      function $s(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ke;
      }
      function je(e) {
        var i = typeof e;
        return e != null && (i == "object" || i == "function");
      }
      function ze(e) {
        return e != null && typeof e == "object";
      }
      var xd = Ll ? St(Ll) : Xg;
      function $v(e, i) {
        return e === i || fa(e, i, Aa(i));
      }
      function Vv(e, i, o) {
        return o = typeof o == "function" ? o : r, fa(e, i, Aa(i), o);
      }
      function Gv(e) {
        return _d(e) && e != +e;
      }
      function Xv(e) {
        if (Rm(e))
          throw new se(c);
        return hu(e);
      }
      function Yv(e) {
        return e === null;
      }
      function Zv(e) {
        return e == null;
      }
      function _d(e) {
        return typeof e == "number" || ze(e) && at(e) == qt;
      }
      function ki(e) {
        if (!ze(e) || at(e) != Ot)
          return !1;
        var i = vs(e);
        if (i === null)
          return !0;
        var o = Ce.call(i, "constructor") && i.constructor;
        return typeof o == "function" && o instanceof o && hs.call(o) == V1;
      }
      var Ha = jl ? St(jl) : Yg;
      function Kv(e) {
        return wd(e) && e >= -9007199254740991 && e <= ke;
      }
      var Sd = Nl ? St(Nl) : Zg;
      function Vs(e) {
        return typeof e == "string" || !oe(e) && ze(e) && at(e) == un;
      }
      function Tt(e) {
        return typeof e == "symbol" || ze(e) && at(e) == wr;
      }
      var Fr = Fl ? St(Fl) : Kg;
      function qv(e) {
        return e === r;
      }
      function Jv(e) {
        return ze(e) && rt(e) == kn;
      }
      function Qv(e) {
        return ze(e) && at(e) == ts;
      }
      var eb = Ls(pa), tb = Ls(function(e, i) {
        return e <= i;
      });
      function Id(e) {
        if (!e)
          return [];
        if (vt(e))
          return Vs(e) ? Bt(e) : mt(e);
        if (pi && e[pi])
          return P1(e[pi]());
        var i = rt(e), o = i == wt ? ta : i == xt ? us : zr;
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
      function Td(e) {
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
        e = $l(e);
        var o = fe.test(e);
        return o || Le.test(e) ? m1(e.slice(2), o ? 2 : 8) : pe.test(e) ? pt : +e;
      }
      function Cd(e) {
        return Qt(e, bt(e));
      }
      function nb(e) {
        return e ? er(ce(e), -9007199254740991, ke) : e === 0 ? e : 0;
      }
      function Te(e) {
        return e == null ? "" : It(e);
      }
      var rb = Lr(function(e, i) {
        if (Ti(i) || vt(i)) {
          Qt(i, qe(i), e);
          return;
        }
        for (var o in i)
          Ce.call(i, o) && yi(e, o, i[o]);
      }), kd = Lr(function(e, i) {
        Qt(i, bt(i), e);
      }), Gs = Lr(function(e, i, o, l) {
        Qt(i, bt(i), e, l);
      }), ib = Lr(function(e, i, o, l) {
        Qt(i, qe(i), e, l);
      }), sb = mn(aa);
      function ob(e, i) {
        var o = Dr(e);
        return i == null ? o : su(o, i);
      }
      var ab = de(function(e, i) {
        e = Ae(e);
        var o = -1, l = i.length, f = l > 2 ? i[2] : r;
        for (f && ct(i[0], i[1], f) && (l = 1); ++o < l; )
          for (var m = i[o], y = bt(m), _ = -1, T = y.length; ++_ < T; ) {
            var L = y[_], j = e[L];
            (j === r || Vt(j, Or[L]) && !Ce.call(e, L)) && (e[L] = m[L]);
          }
        return e;
      }), cb = de(function(e) {
        return e.push(r, $u), _t(Ed, r, e);
      });
      function lb(e, i) {
        return Hl(e, J(i, 3), Jt);
      }
      function ub(e, i) {
        return Hl(e, J(i, 3), la);
      }
      function db(e, i) {
        return e == null ? e : ca(e, J(i, 3), bt);
      }
      function fb(e, i) {
        return e == null ? e : uu(e, J(i, 3), bt);
      }
      function hb(e, i) {
        return e && Jt(e, J(i, 3));
      }
      function pb(e, i) {
        return e && la(e, J(i, 3));
      }
      function gb(e) {
        return e == null ? [] : ks(e, qe(e));
      }
      function mb(e) {
        return e == null ? [] : ks(e, bt(e));
      }
      function Ua(e, i, o) {
        var l = e == null ? r : tr(e, i);
        return l === r ? o : l;
      }
      function vb(e, i) {
        return e != null && Xu(e, i, Hg);
      }
      function Wa(e, i) {
        return e != null && Xu(e, i, Ug);
      }
      var bb = zu(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = ps.call(i)), e[i] = o;
      }, $a(yt)), yb = zu(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = ps.call(i)), Ce.call(e, i) ? e[i].push(o) : e[i] = [o];
      }, J), wb = de(xi);
      function qe(e) {
        return vt(e) ? ru(e) : ha(e);
      }
      function bt(e) {
        return vt(e) ? ru(e, !0) : qg(e);
      }
      function xb(e, i) {
        var o = {};
        return i = J(i, 3), Jt(e, function(l, f, m) {
          pn(o, i(l, f, m), l);
        }), o;
      }
      function _b(e, i) {
        var o = {};
        return i = J(i, 3), Jt(e, function(l, f, m) {
          pn(o, f, i(l, f, m));
        }), o;
      }
      var Sb = Lr(function(e, i, o) {
        Es(e, i, o);
      }), Ed = Lr(function(e, i, o, l) {
        Es(e, i, o, l);
      }), Ib = mn(function(e, i) {
        var o = {};
        if (e == null)
          return o;
        var l = !1;
        i = De(i, function(m) {
          return m = Nn(m, e), l || (l = m.length > 1), m;
        }), Qt(e, ka(e), o), l && (o = jt(o, x | S | C, bm));
        for (var f = i.length; f--; )
          ya(o, i[f]);
        return o;
      });
      function Tb(e, i) {
        return Ad(e, Bs(J(i)));
      }
      var Cb = mn(function(e, i) {
        return e == null ? {} : Qg(e, i);
      });
      function Ad(e, i) {
        if (e == null)
          return {};
        var o = De(ka(e), function(l) {
          return [l];
        });
        return i = J(i), wu(e, o, function(l, f) {
          return i(l, f[0]);
        });
      }
      function kb(e, i, o) {
        i = Nn(i, e);
        var l = -1, f = i.length;
        for (f || (f = 1, e = r); ++l < f; ) {
          var m = e == null ? r : e[en(i[l])];
          m === r && (l = f, m = o), e = bn(m) ? m.call(e) : m;
        }
        return e;
      }
      function Eb(e, i, o) {
        return e == null ? e : Si(e, i, o);
      }
      function Ab(e, i, o, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Si(e, i, o, l);
      }
      var Rd = Wu(qe), Od = Wu(bt);
      function Rb(e, i, o) {
        var l = oe(e), f = l || zn(e) || Fr(e);
        if (i = J(i, 4), o == null) {
          var m = e && e.constructor;
          f ? o = l ? new m() : [] : je(e) ? o = bn(m) ? Dr(vs(e)) : {} : o = {};
        }
        return (f ? Pt : Jt)(e, function(y, _, T) {
          return i(o, y, _, T);
        }), o;
      }
      function Ob(e, i) {
        return e == null ? !0 : ya(e, i);
      }
      function Mb(e, i, o) {
        return e == null ? e : Tu(e, i, _a(o));
      }
      function Pb(e, i, o, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Tu(e, i, _a(o), l);
      }
      function zr(e) {
        return e == null ? [] : ea(e, qe(e));
      }
      function Db(e) {
        return e == null ? [] : ea(e, bt(e));
      }
      function Lb(e, i, o) {
        return o === r && (o = i, i = r), o !== r && (o = zt(o), o = o === o ? o : 0), i !== r && (i = zt(i), i = i === i ? i : 0), er(zt(e), i, o);
      }
      function jb(e, i, o) {
        return i = yn(i), o === r ? (o = i, i = 0) : o = yn(o), e = zt(e), Wg(e, i, o);
      }
      function Nb(e, i, o) {
        if (o && typeof o != "boolean" && ct(e, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof e == "boolean" && (o = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = yn(e), i === r ? (i = e, e = 0) : i = yn(i)), e > i) {
          var l = e;
          e = i, i = l;
        }
        if (o || e % 1 || i % 1) {
          var f = tu();
          return nt(e + f * (i - e + g1("1e-" + ((f + "").length - 1))), i);
        }
        return ma(e, i);
      }
      var Fb = jr(function(e, i, o) {
        return i = i.toLowerCase(), e + (o ? Md(i) : i);
      });
      function Md(e) {
        return Ba(Te(e).toLowerCase());
      }
      function Pd(e) {
        return e = Te(e), e && e.replace(gt, E1).replace(s1, "");
      }
      function zb(e, i, o) {
        e = Te(e), i = It(i);
        var l = e.length;
        o = o === r ? l : er(ce(o), 0, l);
        var f = o;
        return o -= i.length, o >= 0 && e.slice(o, f) == i;
      }
      function Hb(e) {
        return e = Te(e), e && Oo.test(e) ? e.replace(Ir, A1) : e;
      }
      function Ub(e) {
        return e = Te(e), e && os.test(e) ? e.replace(Tr, "\\$&") : e;
      }
      var Wb = jr(function(e, i, o) {
        return e + (o ? "-" : "") + i.toLowerCase();
      }), Bb = jr(function(e, i, o) {
        return e + (o ? " " : "") + i.toLowerCase();
      }), $b = ju("toLowerCase");
      function Vb(e, i, o) {
        e = Te(e), i = ce(i);
        var l = i ? Ar(e) : 0;
        if (!i || l >= i)
          return e;
        var f = (i - l) / 2;
        return Ds(xs(f), o) + e + Ds(ws(f), o);
      }
      function Gb(e, i, o) {
        e = Te(e), i = ce(i);
        var l = i ? Ar(e) : 0;
        return i && l < i ? e + Ds(i - l, o) : e;
      }
      function Xb(e, i, o) {
        e = Te(e), i = ce(i);
        var l = i ? Ar(e) : 0;
        return i && l < i ? Ds(i - l, o) + e : e;
      }
      function Yb(e, i, o) {
        return o || i == null ? i = 0 : i && (i = +i), tg(Te(e).replace(di, ""), i || 0);
      }
      function Zb(e, i, o) {
        return (o ? ct(e, i, o) : i === r) ? i = 1 : i = ce(i), va(Te(e), i);
      }
      function Kb() {
        var e = arguments, i = Te(e[0]);
        return e.length < 3 ? i : i.replace(e[1], e[2]);
      }
      var qb = jr(function(e, i, o) {
        return e + (o ? "_" : "") + i.toLowerCase();
      });
      function Jb(e, i, o) {
        return o && typeof o != "number" && ct(e, i, o) && (i = o = r), o = o === r ? ie : o >>> 0, o ? (e = Te(e), e && (typeof i == "string" || i != null && !Ha(i)) && (i = It(i), !i && Er(e)) ? Fn(Bt(e), 0, o) : e.split(i, o)) : [];
      }
      var Qb = jr(function(e, i, o) {
        return e + (o ? " " : "") + Ba(i);
      });
      function e2(e, i, o) {
        return e = Te(e), o = o == null ? 0 : er(ce(o), 0, e.length), i = It(i), e.slice(o, o + i.length) == i;
      }
      function t2(e, i, o) {
        var l = p.templateSettings;
        o && ct(e, i, o) && (i = r), e = Te(e), i = Gs({}, i, l, Bu);
        var f = Gs({}, i.imports, l.imports, Bu), m = qe(f), y = ea(f, m), _, T, L = 0, j = i.interpolate || Wt, F = "__p += '", W = na(
          (i.escape || Wt).source + "|" + j.source + "|" + (j === ui ? we : Wt).source + "|" + (i.evaluate || Wt).source + "|$",
          "g"
        ), X = "//# sourceURL=" + (Ce.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++u1 + "]") + `
`;
        e.replace(W, function(ee, he, be, Ct, lt, kt) {
          return be || (be = Ct), F += e.slice(L, kt).replace(dn, R1), he && (_ = !0, F += `' +
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
        F = (T ? F.replace(li, "") : F).replace(ns, "$1").replace(Rn, "$1;"), F = "function(" + (Q || "obj") + `) {
` + (Q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var ue = Ld(function() {
          return _e(m, X + "return " + F).apply(r, y);
        });
        if (ue.source = F, za(ue))
          throw ue;
        return ue;
      }
      function n2(e) {
        return Te(e).toLowerCase();
      }
      function r2(e) {
        return Te(e).toUpperCase();
      }
      function i2(e, i, o) {
        if (e = Te(e), e && (o || i === r))
          return $l(e);
        if (!e || !(i = It(i)))
          return e;
        var l = Bt(e), f = Bt(i), m = Vl(l, f), y = Gl(l, f) + 1;
        return Fn(l, m, y).join("");
      }
      function s2(e, i, o) {
        if (e = Te(e), e && (o || i === r))
          return e.slice(0, Yl(e) + 1);
        if (!e || !(i = It(i)))
          return e;
        var l = Bt(e), f = Gl(l, Bt(i)) + 1;
        return Fn(l, 0, f).join("");
      }
      function o2(e, i, o) {
        if (e = Te(e), e && (o || i === r))
          return e.replace(di, "");
        if (!e || !(i = It(i)))
          return e;
        var l = Bt(e), f = Vl(l, Bt(i));
        return Fn(l, f).join("");
      }
      function a2(e, i) {
        var o = te, l = ne;
        if (je(i)) {
          var f = "separator" in i ? i.separator : f;
          o = "length" in i ? ce(i.length) : o, l = "omission" in i ? It(i.omission) : l;
        }
        e = Te(e);
        var m = e.length;
        if (Er(e)) {
          var y = Bt(e);
          m = y.length;
        }
        if (o >= m)
          return e;
        var _ = o - Ar(l);
        if (_ < 1)
          return l;
        var T = y ? Fn(y, 0, _).join("") : e.slice(0, _);
        if (f === r)
          return T + l;
        if (y && (_ += T.length - _), Ha(f)) {
          if (e.slice(_).search(f)) {
            var L, j = T;
            for (f.global || (f = na(f.source, Te(Ie.exec(f)) + "g")), f.lastIndex = 0; L = f.exec(j); )
              var F = L.index;
            T = T.slice(0, F === r ? _ : F);
          }
        } else if (e.indexOf(It(f), _) != _) {
          var W = T.lastIndexOf(f);
          W > -1 && (T = T.slice(0, W));
        }
        return T + l;
      }
      function c2(e) {
        return e = Te(e), e && rs.test(e) ? e.replace(Sr, N1) : e;
      }
      var l2 = jr(function(e, i, o) {
        return e + (o ? " " : "") + i.toUpperCase();
      }), Ba = ju("toUpperCase");
      function Dd(e, i, o) {
        return e = Te(e), i = o ? r : i, i === r ? M1(e) ? H1(e) : S1(e) : e.match(i) || [];
      }
      var Ld = de(function(e, i) {
        try {
          return _t(e, r, i);
        } catch (o) {
          return za(o) ? o : new se(o);
        }
      }), u2 = mn(function(e, i) {
        return Pt(i, function(o) {
          o = en(o), pn(e, o, Na(e[o], e));
        }), e;
      });
      function d2(e) {
        var i = e == null ? 0 : e.length, o = J();
        return e = i ? De(e, function(l) {
          if (typeof l[1] != "function")
            throw new Dt(u);
          return [o(l[0]), l[1]];
        }) : [], de(function(l) {
          for (var f = -1; ++f < i; ) {
            var m = e[f];
            if (_t(m[0], this, l))
              return _t(m[1], this, l);
          }
        });
      }
      function f2(e) {
        return Ng(jt(e, x));
      }
      function $a(e) {
        return function() {
          return e;
        };
      }
      function h2(e, i) {
        return e == null || e !== e ? i : e;
      }
      var p2 = Fu(), g2 = Fu(!0);
      function yt(e) {
        return e;
      }
      function Va(e) {
        return pu(typeof e == "function" ? e : jt(e, x));
      }
      function m2(e) {
        return mu(jt(e, x));
      }
      function v2(e, i) {
        return vu(e, jt(i, x));
      }
      var b2 = de(function(e, i) {
        return function(o) {
          return xi(o, e, i);
        };
      }), y2 = de(function(e, i) {
        return function(o) {
          return xi(e, o, i);
        };
      });
      function Ga(e, i, o) {
        var l = qe(i), f = ks(i, l);
        o == null && !(je(i) && (f.length || !l.length)) && (o = i, i = e, e = this, f = ks(i, qe(i)));
        var m = !(je(o) && "chain" in o) || !!o.chain, y = bn(e);
        return Pt(f, function(_) {
          var T = i[_];
          e[_] = T, y && (e.prototype[_] = function() {
            var L = this.__chain__;
            if (m || L) {
              var j = e(this.__wrapped__), F = j.__actions__ = mt(this.__actions__);
              return F.push({ func: T, args: arguments, thisArg: e }), j.__chain__ = L, j;
            }
            return T.apply(e, Mn([this.value()], arguments));
          });
        }), e;
      }
      function w2() {
        return Qe._ === this && (Qe._ = G1), this;
      }
      function Xa() {
      }
      function x2(e) {
        return e = ce(e), de(function(i) {
          return bu(i, e);
        });
      }
      var _2 = Ia(De), S2 = Ia(zl), I2 = Ia(Zo);
      function jd(e) {
        return Oa(e) ? Ko(en(e)) : em(e);
      }
      function T2(e) {
        return function(i) {
          return e == null ? r : tr(e, i);
        };
      }
      var C2 = Hu(), k2 = Hu(!0);
      function Ya() {
        return [];
      }
      function Za() {
        return !1;
      }
      function E2() {
        return {};
      }
      function A2() {
        return "";
      }
      function R2() {
        return !0;
      }
      function O2(e, i) {
        if (e = ce(e), e < 1 || e > ke)
          return [];
        var o = ie, l = nt(e, ie);
        i = J(i), e -= ie;
        for (var f = Qo(l, i); ++o < e; )
          i(o);
        return f;
      }
      function M2(e) {
        return oe(e) ? De(e, en) : Tt(e) ? [e] : mt(nd(Te(e)));
      }
      function P2(e) {
        var i = ++$1;
        return Te(e) + i;
      }
      var D2 = Ps(function(e, i) {
        return e + i;
      }, 0), L2 = Ta("ceil"), j2 = Ps(function(e, i) {
        return e / i;
      }, 1), N2 = Ta("floor");
      function F2(e) {
        return e && e.length ? Cs(e, yt, ua) : r;
      }
      function z2(e, i) {
        return e && e.length ? Cs(e, J(i, 2), ua) : r;
      }
      function H2(e) {
        return Wl(e, yt);
      }
      function U2(e, i) {
        return Wl(e, J(i, 2));
      }
      function W2(e) {
        return e && e.length ? Cs(e, yt, pa) : r;
      }
      function B2(e, i) {
        return e && e.length ? Cs(e, J(i, 2), pa) : r;
      }
      var $2 = Ps(function(e, i) {
        return e * i;
      }, 1), V2 = Ta("round"), G2 = Ps(function(e, i) {
        return e - i;
      }, 0);
      function X2(e) {
        return e && e.length ? Jo(e, yt) : 0;
      }
      function Y2(e, i) {
        return e && e.length ? Jo(e, J(i, 2)) : 0;
      }
      return p.after = mv, p.ary = hd, p.assign = rb, p.assignIn = kd, p.assignInWith = Gs, p.assignWith = ib, p.at = sb, p.before = pd, p.bind = Na, p.bindAll = u2, p.bindKey = gd, p.castArray = Ev, p.chain = ud, p.chunk = Nm, p.compact = Fm, p.concat = zm, p.cond = d2, p.conforms = f2, p.constant = $a, p.countBy = X0, p.create = ob, p.curry = md, p.curryRight = vd, p.debounce = bd, p.defaults = ab, p.defaultsDeep = cb, p.defer = vv, p.delay = bv, p.difference = Hm, p.differenceBy = Um, p.differenceWith = Wm, p.drop = Bm, p.dropRight = $m, p.dropRightWhile = Vm, p.dropWhile = Gm, p.fill = Xm, p.filter = Z0, p.flatMap = J0, p.flatMapDeep = Q0, p.flatMapDepth = ev, p.flatten = od, p.flattenDeep = Ym, p.flattenDepth = Zm, p.flip = yv, p.flow = p2, p.flowRight = g2, p.fromPairs = Km, p.functions = gb, p.functionsIn = mb, p.groupBy = tv, p.initial = Jm, p.intersection = Qm, p.intersectionBy = e0, p.intersectionWith = t0, p.invert = bb, p.invertBy = yb, p.invokeMap = rv, p.iteratee = Va, p.keyBy = iv, p.keys = qe, p.keysIn = bt, p.map = Hs, p.mapKeys = xb, p.mapValues = _b, p.matches = m2, p.matchesProperty = v2, p.memoize = Ws, p.merge = Sb, p.mergeWith = Ed, p.method = b2, p.methodOf = y2, p.mixin = Ga, p.negate = Bs, p.nthArg = x2, p.omit = Ib, p.omitBy = Tb, p.once = wv, p.orderBy = sv, p.over = _2, p.overArgs = xv, p.overEvery = S2, p.overSome = I2, p.partial = Fa, p.partialRight = yd, p.partition = ov, p.pick = Cb, p.pickBy = Ad, p.property = jd, p.propertyOf = T2, p.pull = s0, p.pullAll = cd, p.pullAllBy = o0, p.pullAllWith = a0, p.pullAt = c0, p.range = C2, p.rangeRight = k2, p.rearg = _v, p.reject = lv, p.remove = l0, p.rest = Sv, p.reverse = La, p.sampleSize = dv, p.set = Eb, p.setWith = Ab, p.shuffle = fv, p.slice = u0, p.sortBy = gv, p.sortedUniq = v0, p.sortedUniqBy = b0, p.split = Jb, p.spread = Iv, p.tail = y0, p.take = w0, p.takeRight = x0, p.takeRightWhile = _0, p.takeWhile = S0, p.tap = F0, p.throttle = Tv, p.thru = zs, p.toArray = Id, p.toPairs = Rd, p.toPairsIn = Od, p.toPath = M2, p.toPlainObject = Cd, p.transform = Rb, p.unary = Cv, p.union = I0, p.unionBy = T0, p.unionWith = C0, p.uniq = k0, p.uniqBy = E0, p.uniqWith = A0, p.unset = Ob, p.unzip = ja, p.unzipWith = ld, p.update = Mb, p.updateWith = Pb, p.values = zr, p.valuesIn = Db, p.without = R0, p.words = Dd, p.wrap = kv, p.xor = O0, p.xorBy = M0, p.xorWith = P0, p.zip = D0, p.zipObject = L0, p.zipObjectDeep = j0, p.zipWith = N0, p.entries = Rd, p.entriesIn = Od, p.extend = kd, p.extendWith = Gs, Ga(p, p), p.add = D2, p.attempt = Ld, p.camelCase = Fb, p.capitalize = Md, p.ceil = L2, p.clamp = Lb, p.clone = Av, p.cloneDeep = Ov, p.cloneDeepWith = Mv, p.cloneWith = Rv, p.conformsTo = Pv, p.deburr = Pd, p.defaultTo = h2, p.divide = j2, p.endsWith = zb, p.eq = Vt, p.escape = Hb, p.escapeRegExp = Ub, p.every = Y0, p.find = K0, p.findIndex = id, p.findKey = lb, p.findLast = q0, p.findLastIndex = sd, p.findLastKey = ub, p.floor = N2, p.forEach = dd, p.forEachRight = fd, p.forIn = db, p.forInRight = fb, p.forOwn = hb, p.forOwnRight = pb, p.get = Ua, p.gt = Dv, p.gte = Lv, p.has = vb, p.hasIn = Wa, p.head = ad, p.identity = yt, p.includes = nv, p.indexOf = qm, p.inRange = jb, p.invoke = wb, p.isArguments = ir, p.isArray = oe, p.isArrayBuffer = jv, p.isArrayLike = vt, p.isArrayLikeObject = Ue, p.isBoolean = Nv, p.isBuffer = zn, p.isDate = Fv, p.isElement = zv, p.isEmpty = Hv, p.isEqual = Uv, p.isEqualWith = Wv, p.isError = za, p.isFinite = Bv, p.isFunction = bn, p.isInteger = wd, p.isLength = $s, p.isMap = xd, p.isMatch = $v, p.isMatchWith = Vv, p.isNaN = Gv, p.isNative = Xv, p.isNil = Zv, p.isNull = Yv, p.isNumber = _d, p.isObject = je, p.isObjectLike = ze, p.isPlainObject = ki, p.isRegExp = Ha, p.isSafeInteger = Kv, p.isSet = Sd, p.isString = Vs, p.isSymbol = Tt, p.isTypedArray = Fr, p.isUndefined = qv, p.isWeakMap = Jv, p.isWeakSet = Qv, p.join = n0, p.kebabCase = Wb, p.last = Ft, p.lastIndexOf = r0, p.lowerCase = Bb, p.lowerFirst = $b, p.lt = eb, p.lte = tb, p.max = F2, p.maxBy = z2, p.mean = H2, p.meanBy = U2, p.min = W2, p.minBy = B2, p.stubArray = Ya, p.stubFalse = Za, p.stubObject = E2, p.stubString = A2, p.stubTrue = R2, p.multiply = $2, p.nth = i0, p.noConflict = w2, p.noop = Xa, p.now = Us, p.pad = Vb, p.padEnd = Gb, p.padStart = Xb, p.parseInt = Yb, p.random = Nb, p.reduce = av, p.reduceRight = cv, p.repeat = Zb, p.replace = Kb, p.result = kb, p.round = V2, p.runInContext = I, p.sample = uv, p.size = hv, p.snakeCase = qb, p.some = pv, p.sortedIndex = d0, p.sortedIndexBy = f0, p.sortedIndexOf = h0, p.sortedLastIndex = p0, p.sortedLastIndexBy = g0, p.sortedLastIndexOf = m0, p.startCase = Qb, p.startsWith = e2, p.subtract = G2, p.sum = X2, p.sumBy = Y2, p.template = t2, p.times = O2, p.toFinite = yn, p.toInteger = ce, p.toLength = Td, p.toLower = n2, p.toNumber = zt, p.toSafeInteger = nb, p.toString = Te, p.toUpper = r2, p.trim = i2, p.trimEnd = s2, p.trimStart = o2, p.truncate = a2, p.unescape = c2, p.uniqueId = P2, p.upperCase = l2, p.upperFirst = Ba, p.each = dd, p.eachRight = fd, p.first = ad, Ga(p, function() {
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
        var o = i + 1, l = o == ye || o == xe;
        ge.prototype[e] = function(f) {
          var m = this.clone();
          return m.__iteratees__.push({
            iteratee: J(f, 3),
            type: o
          }), m.__filtered__ = m.__filtered__ || l, m;
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
          return xi(o, e, i);
        });
      }), ge.prototype.reject = function(e) {
        return this.filter(Bs(J(e)));
      }, ge.prototype.slice = function(e, i) {
        e = ce(e);
        var o = this;
        return o.__filtered__ && (e > 0 || i < 0) ? new ge(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), i !== r && (i = ce(i), o = i < 0 ? o.dropRight(-i) : o.take(i - e)), o);
      }, ge.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ge.prototype.toArray = function() {
        return this.take(ie);
      }, Jt(ge.prototype, function(e, i) {
        var o = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), f = p[l ? "take" + (i == "last" ? "Right" : "") : i], m = l || /^find/.test(i);
        f && (p.prototype[i] = function() {
          var y = this.__wrapped__, _ = l ? [1] : arguments, T = y instanceof ge, L = _[0], j = T || oe(y), F = function(he) {
            var be = f.apply(p, Mn([he], _));
            return l && W ? be[0] : be;
          };
          j && o && typeof L == "function" && L.length != 1 && (T = j = !1);
          var W = this.__chain__, X = !!this.__actions__.length, Q = m && !W, ue = T && !X;
          if (!m && j) {
            y = ue ? y : new ge(this);
            var ee = e.apply(y, _);
            return ee.__actions__.push({ func: zs, args: [F], thisArg: r }), new Lt(ee, W);
          }
          return Q && ue ? e.apply(this, _) : (ee = this.thru(F), Q ? l ? ee.value()[0] : ee.value() : ee);
        });
      }), Pt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var i = ds[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var f = arguments;
          if (l && !this.__chain__) {
            var m = this.value();
            return i.apply(oe(m) ? m : [], f);
          }
          return this[o](function(y) {
            return i.apply(oe(y) ? y : [], f);
          });
        };
      }), Jt(ge.prototype, function(e, i) {
        var o = p[i];
        if (o) {
          var l = o.name + "";
          Ce.call(Pr, l) || (Pr[l] = []), Pr[l].push({ name: i, func: o });
        }
      }), Pr[Ms(r, P).name] = [{
        name: "wrapper",
        func: r
      }], ge.prototype.clone = cg, ge.prototype.reverse = lg, ge.prototype.value = ug, p.prototype.at = z0, p.prototype.chain = H0, p.prototype.commit = U0, p.prototype.next = W0, p.prototype.plant = $0, p.prototype.reverse = V0, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = G0, p.prototype.first = p.prototype.head, pi && (p.prototype[pi] = B0), p;
    }, Rr = U1();
    Kn ? ((Kn.exports = Rr)._ = Rr, Vo._ = Rr) : Qe._ = Rr;
  }).call(Ei);
})(io, io.exports);
var Se = io.exports;
const R3 = () => {
  const { trackItemIds: t, trackItemsMap: n, fps: r, trackItemDetailsMap: s } = In(), a = Se.merge(n, s);
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: t.map((c) => {
    const u = a[c];
    return A3[u.type](u, {
      fps: r
    });
  }) });
};
var ip = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function r() {
      for (var c = "", u = 0; u < arguments.length; u++) {
        var d = arguments[u];
        d && (c = a(c, s(d)));
      }
      return c;
    }
    function s(c) {
      if (typeof c == "string" || typeof c == "number")
        return c;
      if (typeof c != "object")
        return "";
      if (Array.isArray(c))
        return r.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
        return c.toString();
      var u = "";
      for (var d in c)
        n.call(c, d) && c[d] && (u = a(u, d));
      return u;
    }
    function a(c, u) {
      return u ? c ? c + " " + u : c + u : c;
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
})(ip);
var O3 = ip.exports;
const Li = /* @__PURE__ */ iy(O3), M3 = { asChild: { type: "boolean" } }, P3 = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, D3 = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Jc = ["initial", "xs", "sm", "md", "lg", "xl"];
function sp(t, n) {
  return Object.prototype.hasOwnProperty.call(t, n);
}
function ji(t) {
  return typeof t == "object" && Object.keys(t).some((n) => Jc.includes(n));
}
function L3({ className: t, customProperties: n, ...r }) {
  const s = op({ allowArbitraryValues: !0, className: t, ...r }), a = j3({ customProperties: n, ...r });
  return [s, a];
}
function op({ allowArbitraryValues: t, value: n, className: r, propValues: s, parseValue: a = (c) => c }) {
  const c = [];
  if (n) {
    if (typeof n == "string" && s.includes(n)) return of(r, n, a);
    if (ji(n)) {
      const u = n;
      for (const d in u) {
        if (!sp(u, d) || !Jc.includes(d)) continue;
        const h = u[d];
        if (h !== void 0) {
          if (s.includes(h)) {
            const g = of(r, h, a), b = d === "initial" ? g : `${d}:${g}`;
            c.push(b);
          } else if (t) {
            const g = d === "initial" ? r : `${d}:${r}`;
            c.push(g);
          }
        }
      }
      return c.join(" ");
    }
    if (t) return r;
  }
}
function of(t, n, r) {
  const s = t ? "-" : "", a = r(n), c = a?.startsWith("-"), u = c ? "-" : "", d = c ? a?.substring(1) : a;
  return `${u}${t}${s}${d}`;
}
function j3({ customProperties: t, value: n, propValues: r, parseValue: s = (a) => a }) {
  let a = {};
  if (!(!n || typeof n == "string" && r.includes(n))) {
    if (typeof n == "string" && (a = Object.fromEntries(t.map((c) => [c, n]))), ji(n)) {
      const c = n;
      for (const u in c) {
        if (!sp(c, u) || !Jc.includes(u)) continue;
        const d = c[u];
        if (!r.includes(d)) for (const h of t) a = { [u === "initial" ? h : `${h}-${u}`]: d, ...a };
      }
    }
    for (const c in a) {
      const u = a[c];
      u !== void 0 && (a[c] = s(u));
    }
    return a;
  }
}
function af(...t) {
  let n = {};
  for (const r of t) r && (n = { ...n, ...r });
  return Object.keys(n).length ? n : void 0;
}
function N3(...t) {
  return Object.assign({}, ...t);
}
function F3(t, ...n) {
  let r, s;
  const a = { ...t }, c = N3(...n);
  for (const u in c) {
    let d = a[u];
    const h = c[u];
    if (h.default !== void 0 && d === void 0 && (d = h.default), h.type === "enum" && ![h.default, ...h.values].includes(d) && !ji(d) && (d = h.default), a[u] = d, "className" in h && h.className) {
      delete a[u];
      const g = "responsive" in h;
      if (!d || ji(d) && !g) continue;
      if (ji(d) && (h.default !== void 0 && d.initial === void 0 && (d.initial = h.default), h.type === "enum" && ([h.default, ...h.values].includes(d.initial) || (d.initial = h.default))), h.type === "enum") {
        const b = op({ allowArbitraryValues: !1, value: d, className: h.className, propValues: h.values, parseValue: h.parseValue });
        r = Li(r, b);
        continue;
      }
      if (h.type === "string" || h.type === "enum | string") {
        const b = h.type === "string" ? [] : h.values, [x, S] = L3({ className: h.className, customProperties: h.customProperties, propValues: b, parseValue: h.parseValue, value: d });
        s = af(s, S), r = Li(r, x);
        continue;
      }
      if (h.type === "boolean" && d) {
        r = Li(r, h.className);
        continue;
      }
    }
  }
  return a.className = Li(r, t.className), a.style = af(s, t.style), a;
}
const sr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], z3 = { m: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: sr, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } }, H3 = dy, or = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], U3 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: or, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: or, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: or, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: or, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: or, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: or, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: or, responsive: !0 } }, tc = ["visible", "hidden", "clip", "scroll", "auto"], W3 = ["static", "relative", "absolute", "fixed", "sticky"], Pi = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], B3 = ["0", "1"], $3 = ["0", "1"], V3 = { ...U3, ...P3, ...D3, position: { type: "enum", className: "rt-r-position", values: W3, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: Pi, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: Pi, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: Pi, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: Pi, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: Pi, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: tc, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: tc, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: tc, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: B3, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: $3, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 } }, nc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], G3 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: nc, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: nc, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: nc, responsive: !0 } }, X3 = ["div", "span"], Y3 = ["none", "inline-flex", "flex"], Z3 = ["row", "column", "row-reverse", "column-reverse"], K3 = ["start", "center", "end", "baseline", "stretch"], q3 = ["start", "center", "end", "between"], J3 = ["nowrap", "wrap", "wrap-reverse"], Q3 = { as: { type: "enum", values: X3, default: "div" }, ...M3, display: { type: "enum", className: "rt-r-display", values: Y3, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: Z3, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: K3, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: q3, parseValue: ex, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: J3, responsive: !0 }, ...G3 };
function ex(t) {
  return t === "between" ? "space-between" : t;
}
const Qc = k.forwardRef((t, n) => {
  const { className: r, asChild: s, as: a = "div", ...c } = F3(t, Q3, V3, z3);
  return k.createElement(s ? H3 : a, { ...c, ref: n, className: Li("rt-Flex", r) });
});
Qc.displayName = "Flex";
const tx = () => {
  const t = Yt(null), { setPlayerRef: n, duration: r, fps: s, size: a } = In();
  return Ht(() => {
    n(t);
  }, []), /* @__PURE__ */ v.jsx(Qc, { className: "size-full", children: /* @__PURE__ */ v.jsx(
    J2,
    {
      ref: t,
      component: R3,
      durationInFrames: Math.round(r / 1e3 * s) || 5 * 30,
      compositionWidth: 1920,
      compositionHeight: 1080,
      style: { width: "100%", height: "100%" },
      inputProps: {},
      fps: s,
      controls: !0
    }
  ) });
}, nx = ({ scrollLeft: t }) => {
  const n = Yt(null), { playerRef: r, fps: s, scale: a } = In(), c = Kc(r ?? void 0), u = Ve(c / s * 1e3, a.zoom) - t, [d, h] = it(!1), [g, b] = it(0), [x, S] = it(u), C = () => {
    h(!1);
  }, O = (E) => {
    h(!0);
    const P = "touches" in E ? E.touches[0].clientX : E.clientX;
    b(P), S(u);
  }, A = (E) => {
    if (d) {
      const M = ("touches" in E ? E.touches[0].clientX : E.clientX) - g, N = x + M, z = cr(N, a.zoom);
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
        left: 40 + Zc + u,
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
}, rx = (t) => {
  const {
    height: n = 40,
    // Increased height to give space for the text
    longLineSize: r = 8,
    shortLineSize: s = 6,
    offsetX: a = Cc + Zc,
    textOffsetY: c = 12,
    // Place the text above the lines but inside the canvas
    textFormat: u = jw,
    scrollLeft: d = 0,
    onClick: h
  } = t, { scale: g } = In(), b = Yt(null), [x, S] = it(null), [C, O] = it({
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
    x && A(b.current, x, d);
  }, [x, d, g]);
  const A = (M, N, z) => {
    if (!M || !N) return;
    const Z = M.offsetParent.offsetWidth ?? M.offsetWidth, q = C.height;
    M.width = Z, M.height = q, E(N, z, Z, q), O({ width: Z, height: q });
  }, E = (M, N, z, K) => {
    const Z = g.zoom, q = g.unit, Y = g.segments;
    M.clearRect(0, 0, z, K), M.save(), M.strokeStyle = "#71717a", M.fillStyle = "#71717a", M.lineWidth = 1, M.font = `${Rw}px ${Ow}`, M.textBaseline = "top", M.translate(0.5, 0), M.beginPath();
    const G = q * Z * _o, te = Math.floor(N / G), V = Math.ceil((N + z) / G) - te;
    for (let ae = 0; ae <= V; ++ae) {
      const ye = ae + te;
      if (ye < 0) continue;
      const Oe = ye * G / Z, xe = (Oe - N / Z) * Z;
      if (xe < -G || xe >= z + G) continue;
      const Ee = u(Oe), $e = -M.measureText(Ee).width / 2;
      M.fillText(Ee, xe + $e + a, c);
    }
    for (let ae = 0; ae <= V; ++ae) {
      const ye = ae + te;
      if (ye < 0) continue;
      const xe = ye * G - N + a;
      for (let Ee = 0; Ee < Y; ++Ee) {
        const ke = xe + Ee / Y * G;
        if (ke < 0 || ke >= z) continue;
        const $e = Ee % Y ? s : r;
        $e === s ? M.strokeStyle = "#a1a1aa" : M.strokeStyle = "#d4d4d8";
        const pt = 32, [ie, Gn] = [ke, pt], [mr, Qr] = [ie, Gn + $e];
        M.beginPath(), M.moveTo(ie, Gn), M.lineTo(mr, Qr), M.stroke();
      }
    }
    M.restore();
  }, P = (M) => {
    const N = b.current;
    if (!N) return;
    const z = N.getBoundingClientRect(), Z = M.clientX - z.left + d - Cc;
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
}, ix = () => /* @__PURE__ */ v.jsx(
  Qc,
  {
    flexGrow: "1",
    justify: "center",
    width: "100%",
    height: "100%",
    className: "bg-scene py-3",
    children: /* @__PURE__ */ v.jsx("div", { className: "max-w-3xl flex-1  w-full h-full flex relative", children: /* @__PURE__ */ v.jsx(tx, {}) })
  }
);
class sx {
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
      const r = new Lc(n);
      this.setActiveObject(r);
    }
    this.requestRenderAll();
  }
}
class Vr extends an {
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
    super(n), Object.assign(this, Vr.ownDefaults), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.text = n.text || "", this.backgroundColor = n.backgroundColor || "transparent";
  }
  static createControls() {
    return {
      controls: ap()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Vr.ownDefaults
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
  t.save(), t.translate(n, r), t.rotate(Mf.degreesToRadians(90 + a.angle)), t.beginPath(), t.lineWidth = 4, t.lineCap = "round", t.strokeStyle = "#dfe2e8", t.moveTo(-6, 0), t.lineTo(6, 0), t.stroke(), t.restore();
}
function ap() {
  return {
    mr: new rn({
      x: 0.5,
      y: 0,
      actionHandler: so,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Bn
    }),
    ml: new rn({
      x: -0.5,
      y: 0,
      actionHandler: so,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Bn
    })
  };
}
const so = st.wrapWithFireEvent(
  "resizing",
  st.wrapWithFixedAnchor((t, n, r, s) => {
    const a = st.getLocalPoint(
      n,
      n.originX,
      n.originY,
      r,
      s
    );
    if (ax(n.originX) || lx(n.originX) && a.x < 0 || cx(n.originX) && a.x > 0) {
      const c = n.target, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = ux(n) ? 2 : 1, h = c.width, g = Math.ceil(
        Math.abs(a.x * d / c.scaleX) - u
      );
      if (n.corner === "ml") {
        const x = h - g;
        if (c.left + x < 0)
          return c.set("width", c.width + c.left), !0;
      }
      return c.set("width", Math.max(g, 0)), h !== c.width;
    }
    return !1;
  })
), ox = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
}, ve = (t) => typeof t == "string" ? ox[t] : t - 0.5, ax = (t) => ve(t) === ve("center"), cx = (t) => ve(t) === ve("left"), lx = (t) => ve(t) === ve("right");
function ux(t) {
  return ve(t.originX) === ve("center") && ve(t.originY) === ve("center");
}
ot.setClass(Vr, "Text");
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
      controls: dx()
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
const dx = () => ({
  mr: new rn({
    x: 0.5,
    y: 0,
    actionHandler: cf,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: Bn
  }),
  ml: new rn({
    x: -0.5,
    y: 0,
    actionHandler: cf,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: Bn
  })
});
ot.setClass(Zt, "Transition");
const { wrapWithFireEvent: fx, getLocalPoint: hx } = st, kc = "center", px = "left", gx = "right";
function mx(t) {
  return (n, r, s, a) => {
    const { target: c, originX: u, originY: d } = r, h = c.getRelativeCenterPoint(), g = c.translateToOriginPoint(
      h,
      u,
      d
    ), b = t(n, r, s, a);
    return c.setPositionByOrigin(g, u, d), b;
  };
}
const vx = (t, n, r, s) => {
  const a = hx(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (ve(n.originX) === ve(kc) || ve(n.originX) === ve(gx) && a.x < 0 || ve(n.originX) === ve(px) && a.x > 0) {
    const { target: c } = n, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = bx(n) ? 2 : 1, h = c.width, g = Math.ceil(
      Math.abs(a.x * d / c.scaleX) - u
    ), b = cr(g, c.tScale);
    return b >= 1500 || b < 500 ? !1 : (c.set("width", Math.max(g, 0)), c.set("duration", b), c.setCoords(), c.canvas && c.canvas.renderAll(), h !== c.width);
  }
  return !1;
};
function bx(t) {
  return ve(t.originX) === ve(kc) && ve(t.originY) === ve(kc);
}
const cf = fx(
  "resizing",
  mx(vx)
);
class Hi extends an {
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
    super(n), this.id = n.id, this.for = n.for, Object.assign(this, Hi.ownDefaults);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Hi.ownDefaults
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
ot.setClass(Hi, "Placeholder");
const yx = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 }
}, Io = "rgba(0, 216, 214, 1.0)", rc = (t, n, r) => new an({
  top: t,
  left: 0,
  strokeWidth: 0,
  fill: "transparent",
  selectable: !0,
  height: r,
  width: n
});
class Ni extends jc {
  static type = "Helper";
  static defaultSettings = {
    selectable: !1,
    evented: !1
  };
  static ownDefaults = { ...Ni.defaultSettings };
  guide;
  topGuide;
  bottomGuide;
  id;
  metadata = {};
  tScale;
  kind;
  constructor(n) {
    const r = yx[n.kind], s = rc(0, n.width, r.top), a = rc(r.top, n.width, r.guideHeight), c = rc(
      r.top + r.guideHeight,
      n.width,
      r.bottom
    );
    super([s, a, c], {
      ...Ni.defaultSettings,
      ...n
    }), this.topGuide = s, this.guide = a, this.bottomGuide = c, this.id = n.id, this.metadata = n.metadata ?? {}, this.tScale = n.tScale, this.kind = n.kind;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Ni.defaultSettings
    };
  }
  updateCoords(n) {
    this.scaleToWidth(n), this.set("scaleY", 1);
  }
  setSelected(n) {
    this.guide.set("fill", n ? Io : "transparent");
  }
}
const Ki = Ni;
ot.setClass(Ki, "Helper");
class lr extends an {
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
    super(n), Object.assign(this, lr.ownDefaults), this.id = n.id, this.accepts = n.accepts || ["audio", "video", "image", "text"], this.items = n.items || [], this.metadata = n.metadata;
  }
  static getDefaults() {
    return { ...super.getDefaults(), ...lr.ownDefaults };
  }
  updateCoords(n) {
    this.width = n;
  }
}
ot.setClass(lr, "Track");
class oo extends an {
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
    super(n), this.itemType = "image", this.isSelected = !1, Object.assign(this, oo.ownDefaults), this.id = n.id, this.src = n.src, this.display = n.display, this.tScale = n.tScale;
  }
  static createControls() {
    return {
      controls: ap()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...oo.ownDefaults
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
    ), n.lineWidth = 2, n.strokeStyle = Io, n.stroke(), n.restore());
  }
}
const el = oo;
ot.setClass(el, "Image");
class qr extends an {
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
    super(Object.assign({}, qr.defaultProps, n)), this.id = n.id, this.tScale = n.tScale, this.display = n.display, this.trim = n.trim;
  }
  static createControls() {
    return { controls: wx() };
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
    ), n.lineWidth = 2, n.strokeStyle = Io, n.stroke(), n.restore());
  }
}
ot.setClass(qr, "Video");
const wx = () => ({
  mr: new rn({
    x: 0.5,
    y: 0,
    render: Bn,
    actionHandler: lf,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new rn({
    x: -0.5,
    y: 0,
    render: Bn,
    actionHandler: lf,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: xx, getLocalPoint: _x } = st, Sx = (t, n, r, s) => {
  const a = _x(
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
function cp(t) {
  return (n, r, s, a) => {
    const { target: c, originX: u, originY: d } = r, h = c.getRelativeCenterPoint(), g = c.translateToOriginPoint(
      h,
      u,
      d
    ), b = t(n, r, s, a);
    return c.setPositionByOrigin(g, u, d), b;
  };
}
const lf = xx(
  "resizing",
  cp(Sx)
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
    return { controls: Ix() };
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
    ), n.lineWidth = 2, n.strokeStyle = Io, n.stroke(), n.restore());
  }
}
ot.setClass(Wn, "Audio");
const Ix = () => ({
  mr: new rn({
    x: 0.5,
    y: 0,
    render: Bn,
    actionHandler: uf,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new rn({
    x: -0.5,
    y: 0,
    render: Bn,
    actionHandler: uf,
    cursorStyleHandler: st.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: Tx, getLocalPoint: Cx } = st, kx = (t, n, r, s) => {
  const a = Cx(
    n,
    n.originX,
    n.originY,
    r,
    s
  );
  if (ve(n.originX) === ve("center") || ve(n.originX) === ve("right") && a.x < 0 || ve(n.originX) === ve("left") && a.x > 0) {
    const { target: c } = n, u = c.strokeWidth / (c.strokeUniform ? c.scaleX : 1), d = Ex(n) ? 2 : 1, h = c.width, g = Math.ceil(
      Math.abs(a.x * d / c.scaleX) - u
    );
    if (n.corner === "mr") {
      const b = c.trim.to, x = g - h, S = cr(x, c.tScale), C = b + S;
      if (C > c.duration) return !1;
      c.set("width", Math.max(g, 0)), c.trim.to = C;
    } else {
      if (c.left < 0) return !1;
      const b = h - g;
      if (c.left + b < 0)
        return c.set("width", c.width + c.left), !0;
      const x = g - h, S = c.trim.from, C = cr(x, c.tScale), O = S - C;
      if (O < 0) return !1;
      c.set("width", Math.max(g, 0)), c.trim.from = O;
    }
    return h !== c.width;
  }
  return !1;
};
function Ex(t) {
  return ve(t.originX) === ve("center") && ve(t.originY) === ve("center");
}
const uf = Tx(
  "resizing",
  cp(kx)
);
class ao extends an {
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
    super(n), Object.assign(this, ao.ownDefaults), this.id = n.id;
  }
  static createControls() {
    return {
      controls: Ax()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ao.ownDefaults
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
function Ax() {
  return {
    mr: new rn({
      x: 0.5,
      y: 0,
      actionHandler: so,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: df
    }),
    ml: new rn({
      x: -0.5,
      y: 0,
      actionHandler: so,
      cursorStyleHandler: st.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: df
    })
  };
}
function df(t, n, r, s, a) {
  t.save(), t.translate(n, r), t.rotate(Mf.degreesToRadians(90 + a.angle)), t.lineWidth = 6, t.lineCap = "round", t.strokeStyle = "white", t.beginPath(), t.moveTo(-6, 0), t.lineTo(6, 0), t.stroke(), t.lineWidth = 4, t.strokeStyle = "black", t.beginPath(), t.moveTo(-6, 0), t.lineTo(6, 0), t.stroke(), t.restore();
}
class co extends an {
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
    super(n), Object.assign(this, co.ownDefaults), this.id = n.id, this.name = n.name || "item", this.durationString = "00:05", this.fill = "#27272a";
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...co.ownDefaults
    };
  }
  _render(n) {
    n.save(), super._render(n), n.beginPath(), n.rect(-this.width / 2, -this.height / 2, this.width, this.height), n.clip(), this.drawTextIdentity(n), n.restore();
  }
  drawTextIdentity(n) {
    n.font = "600 12px 'Geist variable'", n.textAlign = "left";
    const h = n.measureText(this.name).width, g = n.measureText(this.durationString).width, b = -this.height / 2 + 4, x = -this.width / 2, S = x + h + 8 * 2 + 4, C = h + 8 * 2;
    this.drawRoundedRect(
      n,
      x,
      b,
      C,
      20,
      4
    ), n.fillStyle = "#f4f4f5", n.fillText(this.name, x + 8, b + 12 + 2);
    const O = g + 8 * 2;
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
function Rx(t, n) {
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
const tl = (t, n) => {
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
}, Ox = (t) => new Promise((n, r) => {
  const s = new Audio();
  s.preload = "auto", s.addEventListener("loadedmetadata", () => {
    const a = s.duration * 1e3;
    n({
      duration: a
    });
  }), s.addEventListener("error", (a) => {
    r(a);
  }), s.src = t, s.crossOrigin = "anonymous", s.load();
}), Mx = (t) => new Promise((n, r) => {
  const s = new Image();
  console.warn("Consider updating CDN config for CORS issues?"), s.onload = () => {
    const a = s.width, c = s.height;
    n({ width: a, height: c });
  }, s.onerror = (a) => {
    r(a);
  }, s.crossOrigin = "anonymous", s.src = t;
}), Px = (t) => new Promise((n, r) => {
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
}), Js = (t, n) => {
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
}, 0), Dx = (t, n) => {
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
}, Lx = (t, n) => {
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
function jx(t, n) {
  return t.map((r) => {
    const s = r.items.filter(
      (a) => !n.includes(a)
    );
    return { ...r, items: s };
  }).filter((r) => r.items.length > 0);
}
const Nx = async (t, n) => {
  const r = t.details, s = await Mx(r.src), a = tl(n, s);
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
}, Fx = async (t, n) => {
  const r = t.details.src, s = await Px(r), a = tl(n, {
    ...s
  }), c = Dx(t.trim, { duration: s.duration }), u = {
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
    display: Lx(t?.display, {
      duration: s.duration,
      trim: c
    })
  };
}, zx = async (t) => {
  const n = t.details, r = (await Ox(n.src)).duration, s = t?.display?.from ?? 0;
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
}, Hx = 5e3, lp = async (t, n) => {
  const r = t.id;
  await Gw([
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
  }, a = Js(t.details.text ?? "", s), c = tl(n, {
    width: s.width ?? 0,
    height: a
  });
  return {
    id: r,
    name: "",
    type: "text",
    display: {
      from: 0,
      to: Hx
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
}, Ux = (t, n) => {
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
}, Wx = (t, n) => {
  const r = Ve(t.display.from, n.tScale), s = Ve(t.details.duration || 5e3, n.tScale), a = ot.getClass("Image") || el;
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
}, Bx = (t, n) => {
  const r = Ve(t.trim.from, n.tScale), s = Ve(t.trim.to - t.trim.from, n.tScale), a = ot.getClass("Video") || qr;
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
}, $x = (t, n) => {
  const r = t.display, s = Ve(r.from, n.tScale), a = Ve(r.to - r.from, n.tScale), c = ot.getClass("Text") || Vr;
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
}, Vx = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42
}, Gx = (t = {}) => {
  const n = { ...Vx, ...t };
  return Object.fromEntries(
    Object.entries(n).filter(([, r]) => typeof r == "number")
  );
};
let Xx = class extends Wn {
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
class Yx extends qr {
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
class up extends Vr {
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
let Zx = class extends el {
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
class Kx extends lr {
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
class qx extends Ki {
  static type = "Helper";
  constructor(n) {
    n.activeGuideFill = "#ffffff", super(n);
  }
}
class Jx {
  addTrackItem(n) {
    const r = n.id, s = ic(n, {
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
      const { id: a, left: c, width: u } = s, d = this.trackItemsMap[a], h = cr(c, this.tScale), g = h + cr(u, this.tScale), b = { from: h, to: g }, x = {
        ...d,
        display: b,
        trim: s instanceof qr || s instanceof Wn ? s.trim : void 0
      };
      s.display = b, r[a] = x;
    }), this.trackItemsMap = r, this.resumeEventListeners();
  }
  deleteActiveTrackItem() {
    const n = this.getActiveObjects();
    if (!n.length) return !1;
    const r = n.map((a) => a.id), s = ro(this.tracks, r);
    this.trackItemsMap = Object.keys(this.trackItemsMap).reduce((a, c) => (r.includes(c) || (a[c] = this.trackItemsMap[c]), a), {}), this.trackItemIds = this.trackItemIds.filter(
      (a) => !r.includes(a)
    ), this.tracks = s, this.discardActiveObject(), this.remove(...n), this.setActiveIds([]), this.renderTracks(), this.alignItemsToTrack(), this.updateState({ updateHistory: !0, kind: "remove" });
  }
  updateTrackItemsToHistory() {
    this.pauseEventListeners();
    const n = this.getObjects();
    this.trackItemIds.forEach((r) => {
      const s = this.tracks.find(
        (g) => g.items.includes(r)
      ), a = n.find(
        (g) => g.id === s?.id
      )?.top;
      if (!a) {
        console.warn(`Track top not found for trackItemId: ${r}`);
        return;
      }
      const c = this.trackItemsMap[r], u = n.find((g) => g.id === r);
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
    const d = ic(a, {
      tScale: this.tScale
    });
    d && this.add(d);
    const { audioData: h, ...g } = a.metadata || {};
    a.metadata = g, this.trackItemsMap[a.id] = a, this.trackItemIds.push(a.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
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
    const g = ic(u, {
      tScale: this.tScale
    });
    g && this.add(g), this.trackItemsMap[u.id] = u, this.trackItemsMap[r] = c, this.trackItemIds.push(u.id), this.updateTrackItemCoords(c.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
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
    ("fontSize" in c || "lineHeight" in c) && (c.height = Js(
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
      u instanceof up && (u.text = n.details.text, this.requestRenderAll());
    }
    ("fontSize" in c || "lineHeight" in c) && (c.height = Js(
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
      ("fontSize" in u || "lineHeight" in u) && (u.height = Js(
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
    return this.getObjects(...Qx);
  }
  setActiveTrackItemCoords() {
    this.getActiveObjects().forEach((n) => n.setCoords());
  }
  deleteTrackItemById(n) {
    const r = this.getObjects().filter(
      (s) => n.includes(s.id)
    );
    this.tracks = ro(this.tracks, n), this.trackItemsMap = Object.keys(this.trackItemsMap).filter((s) => !n.includes(s)).reduce((s, a) => (s[a] = this.trackItemsMap[a], s), {}), this.trackItemIds = this.trackItemIds.filter((s) => !n.includes(s)), this.discardActiveObject(), this.remove(...r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = on(this.trackItemsMap);
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
      const a = new Lc(s);
      this.setActiveObject(a);
    }
    this.requestRenderAll();
  }
}
const Qx = ["Image", "Text", "Video", "Audio", "Caption", "Template"], ic = (t, n) => {
  const s = {
    text: $x,
    video: Bx,
    image: Wx,
    audio: Ux
  }[t.type];
  return s(t, n);
}, Hr = {
  text: 32,
  image: 40,
  video: 40,
  audio: 32,
  main: 40
}, ff = (t) => {
  switch (t) {
    case "text":
      return Hr.text;
    case "image":
      return Hr.image;
    case "video":
      return Hr.video;
    case "audio":
      return Hr.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return Hr.main;
    default:
      return Hr.text;
  }
};
class e_ {
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
    const a = ot.getClass("Helper") || Ki, c = new a({
      id: "helperLineTop",
      top: s,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: n,
      kind: "top",
      metadata: {}
    });
    s += ff("helperTop"), this.insertAt(0, c), r.forEach((d, h) => {
      if (d.type === "helper") {
        const g = ff("helperCenter"), b = new a({
          id: d.id,
          top: s,
          tScale: this.tScale,
          width: n,
          height: g,
          metadata: { order: (h + 1) / 2 },
          kind: "center"
        });
        s += g, this.insertAt(0, b);
      } else {
        const g = ot.getClass("Track") || lr, b = new g({
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
const t_ = 60, n_ = 188;
function hf(t, n = 1, r = 1) {
  const s = n_ * n;
  return t * (t_ / 1e3) * s / r;
}
class r_ {
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
      const h = hf(r.duration, this.tScale), g = u.left + u.width - h / 2, b = u.height, x = new Zt({
        id: r.id,
        left: g,
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
      if (r instanceof Zt) {
        const s = this.getObjects().find(
          (u) => u.id === r.fromId
        );
        if (!s) return;
        const a = hf(r.duration, this.tScale), c = s.left + s.width - a / 2;
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
      const d = s.filter((h) => u.items.includes(h.id)).sort((h, g) => h.left - g.left);
      for (let h = 0; h < d.length - 1; h++) {
        const g = d[h], b = d[h + 1];
        if (Math.abs(g.left + g.width - b.left) <= 1) {
          const x = `${g.id}-${b.id}`;
          if (this.transitionIds.includes(x))
            a[x] = this.transitionsMap[x];
          else {
            const S = {
              id: x,
              duration: 1500,
              fromId: g.id,
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
}, y8 = () => U, w8 = (t) => {
  Object.assign(U, t);
}, i_ = (t) => {
  t.on("before:transform", dp.bind(t));
}, s_ = (t) => {
  t.off("before:transform", dp.bind(t));
};
function dp(t) {
  U.canvas = this, U.activeTrackToItemsMap = {}, U.primaryTracks = {}, U.secondaryTracks = {}, U.trackTops = [], U.trackToItemsMap = {}, U.activeObjects = [], U.trackTopToIdMap = {}, U.canvas.trackIdAfterTransform = "", U.canvas.positionAfterTransform = {};
  const n = U.canvas.getActiveObject();
  if (!n) return;
  U.activeObjects = n instanceof Lc ? n.getObjects() : [n];
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
      (g) => g.items.includes(u.id)
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
      const g = Ec(
        U.trackTops,
        U.originTrack.top,
        d
      );
      if (typeof g != "number") return;
      U.primaryTracks[h] = { objects: [u], index: g };
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
      const g = Ec(
        U.trackTops,
        U.originTrack.top,
        d
      );
      if (typeof g != "number") return;
      U.secondaryTracks[h] = { objects: [u], index: g };
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
      const h = new Hi({
        id: `${u.id}-placeholder`,
        left: d.left,
        top: d.top,
        width: d.width,
        height: d.height,
        for: o_[u.type]
      });
      return h.draggedObject = u, h;
    }
  ), U.canvas.add(...U.placeholderMovingObjects));
}
function Ec(t, n, r) {
  const s = t.indexOf(n), a = t.indexOf(r);
  return s === -1 || a === -1 ? null : a - s;
}
const o_ = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text"
};
function fp(t) {
  if (!Be.guide) return !1;
  t.e.preventDefault();
  const n = this, r = n.getViewportPoint(t.e);
  Be.guide.set({
    left: r.x - 16,
    top: r.y - Be.guide.height / 2
  });
  const s = a_(
    r,
    Be.objects
  );
  s && (Be.object = s, s.strokeDashArray = [5, 1], s.setSelected(!0)), Be.objects.forEach((a) => {
    a !== s && a.setSelected(!1);
  }), n.requestRenderAll();
}
function a_(t, n) {
  let r = 1 / 0, s = null;
  const a = new ny(t.x, t.y);
  return n.forEach((c) => {
    const u = c_(c, a);
    u < r && (r = u, s = c);
  }), s;
}
function c_(t, n) {
  return Math.sqrt(
    Math.pow(t.left - n.x, 2) + Math.pow(t.top - n.y, 2)
  );
}
const l_ = [
  "transition",
  "image",
  "video",
  "audio",
  "caption",
  "text"
];
function hp(t) {
  const n = t.e.dataTransfer?.types[0];
  if (!n) return;
  const r = JSON.parse(n), { type: s, duration: a = 5e3 } = r;
  if (!l_.includes(s)) return;
  const c = this;
  c.discardActiveObject();
  const u = Ve(a, c.tScale);
  Be.guide = u_({
    width: u,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type: s
  }), c.add(Be.guide), s === "transition" && (Be.objects = c.getObjects("Transition"), Be.objects.forEach((d) => {
    d.visible = !0;
  })), me.dispatch(Vh);
}
function u_({ width: t, height: n, id: r, left: s, top: a, type: c }) {
  return c === "transition" ? new ao({
    top: 0,
    left: 0,
    height: 48,
    width: 48,
    id: "TransitionGuide"
  }) : new co({
    top: a,
    left: s,
    height: n,
    width: t,
    id: r,
    name: "Rivers in the mountains"
  });
}
function pp() {
  if (!Be.guide) return;
  me.dispatch(no);
  const t = this;
  d_(Be.objects), t.remove(Be.guide);
}
function d_(t) {
  t.forEach((n) => {
    n.strokeDashArray = [], n.setSelected(!1), n.kind === "none" && (n.visible = !1);
  });
}
var f_ = typeof global == "object" && global && global.Object === Object && global, h_ = typeof self == "object" && self && self.Object === Object && self, nl = f_ || h_ || Function("return this")(), $n = nl.Symbol, gp = Object.prototype, p_ = gp.hasOwnProperty, g_ = gp.toString, Di = $n ? $n.toStringTag : void 0;
function m_(t) {
  var n = p_.call(t, Di), r = t[Di];
  try {
    t[Di] = void 0;
    var s = !0;
  } catch {
  }
  var a = g_.call(t);
  return s && (n ? t[Di] = r : delete t[Di]), a;
}
var v_ = Object.prototype, b_ = v_.toString;
function y_(t) {
  return b_.call(t);
}
var w_ = "[object Null]", x_ = "[object Undefined]", pf = $n ? $n.toStringTag : void 0;
function rl(t) {
  return t == null ? t === void 0 ? x_ : w_ : pf && pf in Object(t) ? m_(t) : y_(t);
}
function il(t) {
  return t != null && typeof t == "object";
}
var __ = "[object Symbol]";
function sl(t) {
  return typeof t == "symbol" || il(t) && rl(t) == __;
}
function S_(t, n) {
  for (var r = -1, s = t == null ? 0 : t.length, a = Array(s); ++r < s; )
    a[r] = n(t[r], r, t);
  return a;
}
var qi = Array.isArray, gf = $n ? $n.prototype : void 0, mf = gf ? gf.toString : void 0;
function mp(t) {
  if (typeof t == "string")
    return t;
  if (qi(t))
    return S_(t, mp) + "";
  if (sl(t))
    return mf ? mf.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function lo(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
function I_(t) {
  return t;
}
var T_ = "[object AsyncFunction]", C_ = "[object Function]", k_ = "[object GeneratorFunction]", E_ = "[object Proxy]";
function A_(t) {
  if (!lo(t))
    return !1;
  var n = rl(t);
  return n == C_ || n == k_ || n == T_ || n == E_;
}
var sc = nl["__core-js_shared__"], vf = function() {
  var t = /[^.]+$/.exec(sc && sc.keys && sc.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function R_(t) {
  return !!vf && vf in t;
}
var O_ = Function.prototype, M_ = O_.toString;
function P_(t) {
  if (t != null) {
    try {
      return M_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var D_ = /[\\^$.*+?()[\]{}|]/g, L_ = /^\[object .+?Constructor\]$/, j_ = Function.prototype, N_ = Object.prototype, F_ = j_.toString, z_ = N_.hasOwnProperty, H_ = RegExp(
  "^" + F_.call(z_).replace(D_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function U_(t) {
  if (!lo(t) || R_(t))
    return !1;
  var n = A_(t) ? H_ : L_;
  return n.test(P_(t));
}
function W_(t, n) {
  return t?.[n];
}
function ol(t, n) {
  var r = W_(t, n);
  return U_(r) ? r : void 0;
}
function B_(t, n, r) {
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
var $_ = 800, V_ = 16, G_ = Date.now;
function X_(t) {
  var n = 0, r = 0;
  return function() {
    var s = G_(), a = V_ - (s - r);
    if (r = s, a > 0) {
      if (++n >= $_)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Y_(t) {
  return function() {
    return t;
  };
}
var uo = function() {
  try {
    var t = ol(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Z_ = uo ? function(t, n) {
  return uo(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Y_(n),
    writable: !0
  });
} : I_, K_ = X_(Z_), q_ = 9007199254740991, J_ = /^(?:0|[1-9]\d*)$/;
function vp(t, n) {
  var r = typeof t;
  return n = n ?? q_, !!n && (r == "number" || r != "symbol" && J_.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Q_(t, n, r) {
  n == "__proto__" && uo ? uo(t, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[n] = r;
}
function bp(t, n) {
  return t === n || t !== t && n !== n;
}
var e4 = Object.prototype, t4 = e4.hasOwnProperty;
function n4(t, n, r) {
  var s = t[n];
  (!(t4.call(t, n) && bp(s, r)) || r === void 0 && !(n in t)) && Q_(t, n, r);
}
var bf = Math.max;
function r4(t, n, r) {
  return n = bf(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var s = arguments, a = -1, c = bf(s.length - n, 0), u = Array(c); ++a < c; )
      u[a] = s[n + a];
    a = -1;
    for (var d = Array(n + 1); ++a < n; )
      d[a] = s[a];
    return d[n] = r(u), B_(t, this, d);
  };
}
var i4 = 9007199254740991;
function s4(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= i4;
}
var o4 = "[object Arguments]";
function yf(t) {
  return il(t) && rl(t) == o4;
}
var yp = Object.prototype, a4 = yp.hasOwnProperty, c4 = yp.propertyIsEnumerable, wp = yf(/* @__PURE__ */ function() {
  return arguments;
}()) ? yf : function(t) {
  return il(t) && a4.call(t, "callee") && !c4.call(t, "callee");
}, l4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u4 = /^\w*$/;
function d4(t, n) {
  if (qi(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || sl(t) ? !0 : u4.test(t) || !l4.test(t) || n != null && t in Object(n);
}
var Ui = ol(Object, "create");
function f4() {
  this.__data__ = Ui ? Ui(null) : {}, this.size = 0;
}
function h4(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var p4 = "__lodash_hash_undefined__", g4 = Object.prototype, m4 = g4.hasOwnProperty;
function v4(t) {
  var n = this.__data__;
  if (Ui) {
    var r = n[t];
    return r === p4 ? void 0 : r;
  }
  return m4.call(n, t) ? n[t] : void 0;
}
var b4 = Object.prototype, y4 = b4.hasOwnProperty;
function w4(t) {
  var n = this.__data__;
  return Ui ? n[t] !== void 0 : y4.call(n, t);
}
var x4 = "__lodash_hash_undefined__";
function _4(t, n) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = Ui && n === void 0 ? x4 : n, this;
}
function ur(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
ur.prototype.clear = f4;
ur.prototype.delete = h4;
ur.prototype.get = v4;
ur.prototype.has = w4;
ur.prototype.set = _4;
function S4() {
  this.__data__ = [], this.size = 0;
}
function To(t, n) {
  for (var r = t.length; r--; )
    if (bp(t[r][0], n))
      return r;
  return -1;
}
var I4 = Array.prototype, T4 = I4.splice;
function C4(t) {
  var n = this.__data__, r = To(n, t);
  if (r < 0)
    return !1;
  var s = n.length - 1;
  return r == s ? n.pop() : T4.call(n, r, 1), --this.size, !0;
}
function k4(t) {
  var n = this.__data__, r = To(n, t);
  return r < 0 ? void 0 : n[r][1];
}
function E4(t) {
  return To(this.__data__, t) > -1;
}
function A4(t, n) {
  var r = this.__data__, s = To(r, t);
  return s < 0 ? (++this.size, r.push([t, n])) : r[s][1] = n, this;
}
function Jr(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
Jr.prototype.clear = S4;
Jr.prototype.delete = C4;
Jr.prototype.get = k4;
Jr.prototype.has = E4;
Jr.prototype.set = A4;
var R4 = ol(nl, "Map");
function O4() {
  this.size = 0, this.__data__ = {
    hash: new ur(),
    map: new (R4 || Jr)(),
    string: new ur()
  };
}
function M4(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Co(t, n) {
  var r = t.__data__;
  return M4(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function P4(t) {
  var n = Co(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function D4(t) {
  return Co(this, t).get(t);
}
function L4(t) {
  return Co(this, t).has(t);
}
function j4(t, n) {
  var r = Co(this, t), s = r.size;
  return r.set(t, n), this.size += r.size == s ? 0 : 1, this;
}
function gr(t) {
  var n = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++n < r; ) {
    var s = t[n];
    this.set(s[0], s[1]);
  }
}
gr.prototype.clear = O4;
gr.prototype.delete = P4;
gr.prototype.get = D4;
gr.prototype.has = L4;
gr.prototype.set = j4;
var N4 = "Expected a function";
function al(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(N4);
  var r = function() {
    var s = arguments, a = n ? n.apply(this, s) : s[0], c = r.cache;
    if (c.has(a))
      return c.get(a);
    var u = t.apply(this, s);
    return r.cache = c.set(a, u) || c, u;
  };
  return r.cache = new (al.Cache || gr)(), r;
}
al.Cache = gr;
var F4 = 500;
function z4(t) {
  var n = al(t, function(s) {
    return r.size === F4 && r.clear(), s;
  }), r = n.cache;
  return n;
}
var H4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, U4 = /\\(\\)?/g, W4 = z4(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(H4, function(r, s, a, c) {
    n.push(a ? c.replace(U4, "$1") : s || r);
  }), n;
});
function B4(t) {
  return t == null ? "" : mp(t);
}
function ko(t, n) {
  return qi(t) ? t : d4(t, n) ? [t] : W4(B4(t));
}
function cl(t) {
  if (typeof t == "string" || sl(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function $4(t, n) {
  n = ko(n, t);
  for (var r = 0, s = n.length; t != null && r < s; )
    t = t[cl(n[r++])];
  return r && r == s ? t : void 0;
}
function V4(t, n) {
  for (var r = -1, s = n.length, a = t.length; ++r < s; )
    t[a + r] = n[r];
  return t;
}
var wf = $n ? $n.isConcatSpreadable : void 0;
function G4(t) {
  return qi(t) || wp(t) || !!(wf && t && t[wf]);
}
function X4(t, n, r, s, a) {
  var c = -1, u = t.length;
  for (r || (r = G4), a || (a = []); ++c < u; ) {
    var d = t[c];
    r(d) ? V4(a, d) : a[a.length] = d;
  }
  return a;
}
function Y4(t) {
  var n = t == null ? 0 : t.length;
  return n ? X4(t) : [];
}
function Z4(t) {
  return K_(r4(t, void 0, Y4), t + "");
}
function K4(t, n) {
  return t != null && n in Object(t);
}
function q4(t, n, r) {
  n = ko(n, t);
  for (var s = -1, a = n.length, c = !1; ++s < a; ) {
    var u = cl(n[s]);
    if (!(c = t != null && r(t, u)))
      break;
    t = t[u];
  }
  return c || ++s != a ? c : (a = t == null ? 0 : t.length, !!a && s4(a) && vp(u, a) && (qi(t) || wp(t)));
}
function J4(t, n) {
  return t != null && q4(t, n, K4);
}
function Q4(t, n, r, s) {
  if (!lo(t))
    return t;
  n = ko(n, t);
  for (var a = -1, c = n.length, u = c - 1, d = t; d != null && ++a < c; ) {
    var h = cl(n[a]), g = r;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return t;
    if (a != u) {
      var b = d[h];
      g = void 0, g === void 0 && (g = lo(b) ? b : vp(n[a + 1]) ? [] : {});
    }
    n4(d, h, g), d = d[h];
  }
  return t;
}
function eS(t, n, r) {
  for (var s = -1, a = n.length, c = {}; ++s < a; ) {
    var u = n[s], d = $4(t, u);
    r(d, u) && Q4(c, ko(u, t), d);
  }
  return c;
}
function tS(t, n) {
  return eS(t, n, function(r, s) {
    return J4(t, s);
  });
}
var nS = Z4(function(t, n) {
  return t == null ? {} : tS(t, n);
});
function xp(t) {
  const n = t.e.dataTransfer?.types[0];
  if (!n) return;
  const r = JSON.parse(
    t.e.dataTransfer.getData(n)
  ), s = this;
  if (r.type !== "transition") {
    rS(r), s.remove(Be.guide), s.requestRenderAll(), me.dispatch(no);
    return;
  }
  Be.guide && (Be.object && iS(r, s), Be.objects.forEach((a) => {
    a.strokeDashArray = [], a.setSelected(!1), a.kind === "none" && (a.visible = !1);
  }), s.remove(Be.guide), s.requestRenderAll(), me.dispatch(no));
}
function rS(t) {
  const n = { ...t, id: Ke() };
  switch (t.type) {
    case "image":
      me.dispatch(Zi, { payload: n });
      break;
    case "video":
      me.dispatch(Xi, { payload: n });
      break;
    case "audio":
      me.dispatch(Yi, { payload: n });
      break;
  }
}
function iS(t, n) {
  const r = Be.object?.id, s = nS(t, ["kind", "direction"]);
  Object.entries(s).forEach(([a, c]) => {
    a === "kind" ? Be.object.kind = c : Be.object[a] = c;
  }), n.transitionsMap[r] = {
    ...n.transitionsMap[r],
    ...s
  }, n.updateState();
}
const sS = (t) => {
  t.on("dragover", fp), t.on("dragenter", hp), t.on("dragleave", pp), t.on("drop", xp);
}, oS = (t) => {
  t.off("dragover", fp), t.off("dragenter", hp), t.off("dragleave", pp), t.off("drop", xp);
}, _p = (t) => {
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
  n && (aS(n, n.getObjects()), cS(n.getObjects("Helper")), U.isPointerOverHelperTrack = !1, U.draggingOverTrack = null);
}, aS = (t, n) => {
  n.forEach((r) => {
    r.isAlignmentAuxiliary && t.remove(r);
  });
}, cS = (t) => {
  t.forEach((n) => n.setSelected(!1));
};
function Sp(t) {
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
    const u = Eo(
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
  if (a instanceof Ki) {
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
    fS(u);
  } else if (a instanceof lr) {
    const c = {
      isSecondaryOverlapped: uS(),
      secondaryTracks: U.secondaryTracks,
      primaryTracks: U.primaryTracks,
      primaryPositions: {
        trackId: n.trackIdAfterTransform,
        positions: n.positionAfterTransform
      }
    };
    lS(c);
  }
}
const lS = (t) => {
  U.canvas && U.canvas.fire("track-items:moved", t);
};
function uS() {
  const t = dS();
  return Object.keys(t).some((n) => {
    const r = U.trackToItemsMap[n], s = t[n].objects;
    return r?.length ? r.filter((a) => !s.includes(a)).some(
      (a) => Eo(s, a.getBoundingRect())
    ) : !0;
  });
}
function dS() {
  const [t] = U.primaryMovingObjects, n = t.id, s = U.canvas.positionAfterTransform[n].top - t.getBoundingRect().top, a = {};
  return U.secondaryMovingObjects.forEach((c) => {
    const u = c.getBoundingRect().top + s, d = U.trackTopToIdMap[u], h = Ec(
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
const fS = (t) => {
  U.canvas && U.canvas.fire("track:create", t);
};
function Eo(t, n) {
  return t.find((r) => {
    const s = r.getBoundingRect();
    return n.left < s.left + s.width && n.left + n.width > s.left && n.top < s.top + s.height && n.top + n.height > s.top;
  });
}
const hS = (t) => {
  t.on("object:modified", _p), t.on("object:modified", Sp);
}, pS = (t) => {
  t.off("object:modified", _p), t.off("object:modified", Sp);
};
function gS(t, n) {
  t.remove(...n), n.length = 0;
}
function Ip() {
  gS(this, U.placeholderMovingObjects);
}
function Tp(t) {
  const n = this.height < this.bounding.height, r = this.width < this.bounding.width;
  if (!n && !r) return;
  const s = this.viewportTransform;
  let a = s[4], c = s[5];
  const u = 2;
  t.e.shiftKey ? a = s[4] - t.e.deltaY * u : (n && (c = s[5] - t.e.deltaY * u), a = s[4] - t.e.deltaX * u), this.setViewportPos(a, c);
}
const mS = (t) => {
  t.on("mouse:wheel", Tp), t.on("mouse:up", Ip.bind(t));
}, vS = (t) => {
  t.off("mouse:wheel", Tp), t.off("mouse:up", Ip.bind(t));
};
function Cp(t) {
  const n = this;
  if (!n) return;
  const r = n.getScenePoint(t.e), s = n.getObjects("Helper", "Track");
  U.draggingOverTrack = s.find((g) => {
    const b = g.getBoundingRect();
    return r.x >= b.left && r.x <= b.left + b.width && r.y >= b.top && r.y <= b.top + b.height;
  }) ?? null, s.forEach((g) => {
    if (_f(g)) {
      const b = U.draggingOverTrack;
      g.setSelected(g === b);
    }
  }), U.isPointerOverHelperTrack = _f(
    U.draggingOverTrack
  ), n.getObjects();
  const a = t.target;
  a.getBoundingRect(), a.setCoords();
  const c = [
    a,
    ...n.getActiveObjects(),
    ...n.getObjects("Track", "Helper", "Transition", "Placeholder")
  ], u = bS(c, n), d = wS(a);
  yS(
    u,
    d
  ).forEach((g) => {
    g.orientation === "V" ? a.left = g.lineGuide + g.offset : a.top = g.lineGuide + g.offset;
  });
}
const bS = (t, n) => {
  const r = [], s = [];
  return n.getObjects().filter((a) => a.visible).forEach((a) => {
    if (t.some(
      (d) => d.id === a.id
    ) || a.isAlignmentAuxiliary) return;
    const u = a.getBoundingRect();
    r.push(
      xf(
        u.left,
        u.width,
        u.top,
        u.height
      )
    ), s.push(
      xf(
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
}, xf = (t, n, r, s) => [t, t + n].map((a) => ({
  val: a,
  start: r,
  end: r + s
})), yS = (t, n) => {
  const r = [], s = [];
  t.vertical.forEach((h) => {
    n.vertical.forEach((g) => {
      const b = Math.abs(h.val - g.guide);
      b < 10 && r.push({
        lineGuide: h.val,
        diff: b,
        orientation: "V",
        snap: g.snap,
        offset: g.offset,
        targetDim: {
          start: h.start,
          end: h.end
        }
      });
    });
  }), t.horizontal.forEach((h) => {
    n.horizontal.forEach((g) => {
      const b = Math.abs(h.val - g.guide);
      b < 10 && s.push({
        lineGuide: h.val,
        diff: b,
        orientation: "H",
        snap: g.snap,
        offset: g.offset,
        targetDim: {
          start: h.start,
          end: h.end
        }
      });
    });
  });
  const c = [], u = r.sort(
    (h, g) => h.diff - g.diff
  )[0], d = s.sort(
    (h, g) => h.diff - g.diff
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
}, wS = (t) => {
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
}, _f = (t) => t instanceof Ki;
function xS(t) {
  t.opacity = U.isPointerOverHelperTrack ? 0 : 1;
}
const kp = ES((t) => {
  const n = t.target.canvas;
  if (AS(t), !U.draggingOverTrack) return;
  const r = U.placeholderMovingObjects.map(
    (c) => c.draggedObject
  ), s = (U.trackToItemsMap[U.draggingOverTrack.id] || []).filter((c) => !r.includes(c)), a = s.find(
    (c) => Eo(r, c.getBoundingRect())
  );
  U.placeholderMovingObjects.forEach((c) => {
    const u = c.draggedObject;
    u?.setCoords(), xS(c);
    const d = _S(
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
}, 5), _S = (t, n, r, s) => !SS(t) || s && r ? Ep(t) : r ? IS(t, r, n) : kS(t), SS = (t) => U.draggingOverTrack ? U.draggingOverTrack.accepts?.includes(t.type) ?? !1 : !1, Ep = (t) => ({
  top: U.objectInitialPositions[t.id].top,
  left: U.objectInitialPositions[t.id].left
}), IS = (t, n, r) => {
  const s = TS(t, n);
  return !CS(r, t, s) || U.activeObjects.length !== 1 ? Ep(t) : {
    left: s,
    top: n.top
  };
}, TS = (t, n) => {
  const r = t.left + t.width / 2, s = n.left + n.width / 2;
  return r < s ? n.left - t.width : n.left + n.width;
}, CS = (t, n, r) => !(r < 0 || Eo(t, {
  ...n.getBoundingRect(),
  left: r
})), kS = (t) => ({
  left: t.getBoundingRect().left,
  top: U.draggingOverTrack?.top ?? 0
});
function ES(t, n) {
  let r = null;
  return function(...s) {
    const a = Date.now();
    (r === null || a - r >= n) && (r = a, t(...s));
  };
}
function AS(t) {
  const n = t.target, r = n.canvas, s = n.top, a = -n.height * 0.75, c = r.height + n.height * 0.75;
  n.top = Math.min(Math.max(s, a), c - n.height);
  const u = n.left;
  n.left = Math.max(u, 0);
}
const RS = (t) => {
  t.on("object:moving", Cp.bind(t)), t.on("object:moving", kp);
}, OS = (t) => {
  t.off("object:moving", Cp.bind(t)), t.off("object:moving", kp);
};
function Ap() {
  const t = this, n = t.getActiveObject(), r = t.getActiveObjects().map((s) => s.id);
  n instanceof jc ? (n.borderColor = "rgba(0, 216, 214, 0.75)", n.hasControls = !1, n.hoverCursor = "default", n.borderScaleFactor = 1, n.padding = 0, n.getObjects().forEach((s) => {
    s.setSelected(!0);
  })) : n?.setSelected(!0), this.setActiveIds(r);
}
function Rp(t) {
  const n = this, r = n.getActiveObject();
  r instanceof jc && (r.borderColor = "transparent", r.hasControls = !1, r.hoverCursor = "default"), t.selected.forEach((a) => {
    a.setSelected(!0);
  }), t.deselected.forEach((a) => {
    a.setSelected(!1);
  });
  const s = n.getActiveObjects().map((a) => a.id);
  this.setActiveIds(s);
}
function Op(t) {
  this.getObjects().forEach((r) => {
    r.isSelected && (r.isSelected = !1);
  }), t.deselected.forEach((r) => {
    r.setSelected(!1);
  });
  const n = this.getActiveObjects().map((r) => r.id);
  this.setActiveIds(n);
}
const MS = (t) => {
  t.on("selection:created", Ap), t.on("selection:updated", Rp), t.on("selection:cleared", Op);
}, PS = (t) => {
  t.off("selection:created", Ap), t.off("selection:updated", Rp), t.off("selection:cleared", Op);
};
let Mp, Pp, Dp;
const DS = (t) => {
  const { state: n } = t;
  Mp = n.subscribeToActiveIds(({ activeIds: r }) => {
    if (r.length === 1) {
      const s = r[0], { trackItemIds: a, trackItemsMap: c } = n.getState();
      a.forEach((u) => {
        c[u].type;
      }), t.selectTrackItemByIds([s]);
    } else
      t.selectTrackItemByIds(r);
  }), Pp = n.subscribeToHistory((r) => {
    const { tracks: s, trackItemsMap: a, trackItemIds: c, trackItemDetailsMap: u } = r;
    t.tracks = s, t.trackItemsMap = a, t.trackItemIds = c, t.trackItemDetailsMap = u, t.renderTracks(), t.updateTrackItemsToHistory(), t.alignItemsToTrack(), t.calcBounding(), t.updateTransitions(), t.duration = on(t.trackItemsMap);
  }), Dp = n.subscribeToAddOrRemoveItems(() => {
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
}, LS = (t) => {
  Mp.unsubscribe(), Pp.unsubscribe(), Dp.unsubscribe();
};
function Lp(t) {
  const {
    isSecondaryOverlapped: n,
    secondaryTracks: r,
    primaryTracks: s,
    primaryPositions: a
  } = t, { trackId: c, positions: u } = a, d = this.tracks.findIndex((C) => C.id === c), h = ep(
    Object.keys(r).map(
      (C) => r[C].objects.map((O) => O.id)
    )
  ), g = ro(this.tracks, [
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
    const A = g.find((E) => E.id === c);
    A && A.items.push(...Object.keys(u)), this.tracks = g;
  });
  const b = this.tracks[d], x = [];
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
      x.push(N);
    } else {
      const N = g[d + A];
      N && N.items.push(...E), this.tracks = g;
    }
  });
  const S = tp(
    b,
    x
  );
  S.length && g.splice(d, 1, ...S), this.tracks = g, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
function jp({
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
        const a = jS(this.tracks, t), c = {
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
function jS(t, n) {
  return t.map((r) => ({
    ...r,
    items: r.items.filter(
      (s) => !n.includes(s)
    )
  }));
}
function Np(t) {
  const {
    secondaryTracks: n,
    primaryTracks: r,
    primaryPositions: s
  } = t, { positions: a, trackIndex: c } = s, u = c === -1 ? this.tracks.length : c, [d] = Object.keys(r), h = this.tracks.find((A) => A.id == d), g = r[d], b = {
    id: Ke(),
    items: g.objects.map((A) => A.id),
    type: h?.type,
    accepts: h?.accepts
  }, x = ep(
    Object.keys(n).map(
      (A) => n[A].objects.map((E) => E.id)
    )
  ), S = ro(this.tracks, [
    ...Object.keys(a),
    ...x
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
  const O = tp(b, C);
  O.length && S.splice(u, 0, ...O), this.tracks = S, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
const NS = (t) => {
  t.on("track:create", Np.bind(t)), t.on("track-items:resized", jp.bind(t)), t.on("track-items:moved", Lp.bind(t));
}, FS = (t) => {
  t.off("track:create", Np.bind(t)), t.off("track-items:resized", jp.bind(t)), t.off("track-items:moved", Lp.bind(t));
}, zS = (t) => {
  sS(t), hS(t), mS(t), RS(t), NS(t), MS(t), i_(t), DS(t);
}, HS = (t) => {
  oS(t), pS(t), vS(t), OS(t), FS(t), PS(t), s_(t), LS();
}, US = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"]
}, WS = ["video", "image", "audio", "text"];
let ll = class extends ry {
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
    s[4] = this.spacing.left, this.tScale = r.tScale || 1 / 300, this.store = r.store, this.state = r.state, this.scale = r.scale, this.onScroll = r.onScroll, this.acceptsMap = this.createAcceptsItemMap(r.acceptsMap), this.sizesMap = Gx(r.sizesMap), this.setupFabricDefaults(), this.initEventListeners();
  }
  createAcceptsItemMap(n = US) {
    const r = {};
    return Object.keys(n).forEach((s) => {
      const a = n[s];
      r[s] = a.includes("*") ? WS : a;
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
    }), me.dispatch(Uh, {
      payload: {
        activeIds: this.activeIds
      }
    }));
  }
  purge() {
    HS(this), this.dispose();
  }
  static registerItems(n) {
    Object.keys(n).forEach((r) => {
      ot.setClass(n[r], r);
    });
  }
  initEventListeners() {
    zS(this);
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
    this.bounding = n, me.dispatch(Gh, {
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
Rx(ll, [
  sx,
  Jx,
  e_,
  r_
]);
function BS(t) {
  const n = me.subject.pipe(Sn(({ key: r }) => r.startsWith(iw))).subscribe((r) => {
    if (r.key === $h) {
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
ll.registerItems({
  Text: up,
  Image: Zx,
  Video: Yx,
  Audio: Xx,
  Track: Kx,
  Helper: qx
});
const $S = ({ stateManager: t }) => {
  const n = Yt(!1), [r, s] = it(0), a = Yt(null), c = Yt(null), u = Yt(null), d = Yt(null), h = Yt(null), [g, b] = it({
    width: 0,
    height: 0
  }), [x, S] = it({
    width: 0,
    height: 0
  }), {
    scale: C,
    playerRef: O,
    fps: A,
    setState: E,
    timeline: P
  } = In(), { setTimeline: M } = In(), N = Kc(O ?? void 0), z = (Y) => {
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
    const te = G.clientWidth, ne = G.clientHeight, V = new ll(Y, {
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
        left: Zc,
        right: tf
      }
    }), ae = BS(V);
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
    }), xe = t.subscribeToTracks(
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
      ae.unsubscribe(), V.purge(), Oe.unsubscribe(), xe.unsubscribe(), Ee.unsubscribe(), $e.unsubscribe(), ke.unsubscribe(), pt.unsubscribe(), ye.unsubscribe();
    };
  }, []), Ht(() => {
    const G = me.subject.pipe(
      Sn(({ key: te }) => te.startsWith(ow))
    ).subscribe((te) => {
      if (te.key === Gh) {
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
    const te = cr(Y, C.zoom);
    O?.current?.seekTo(te * A / 1e3);
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "relative overflow-hidden h-80 w-full", children: [
    /* @__PURE__ */ v.jsx(c3, {}),
    /* @__PURE__ */ v.jsx(
      rx,
      {
        onClick: q,
        scrollLeft: r
      }
    ),
    /* @__PURE__ */ v.jsx(nx, { scrollLeft: r }),
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
          to,
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
                mc,
                {
                  onScroll: K,
                  className: "ScrollAreaViewport",
                  id: "viewportH",
                  ref: h,
                  children: /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        width: x.width > g.width ? x.width + tf : x.width
                      },
                      className: "pointer-events-none h-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(
                Gd,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "horizontal",
                  children: /* @__PURE__ */ v.jsx(
                    Xd,
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
          to,
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
                mc,
                {
                  onScroll: Z,
                  className: "ScrollAreaViewport",
                  ref: d,
                  children: /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        height: x.height > g.height ? x.height + 40 : g.height
                      },
                      className: "pointer-events-none w-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(
                Gd,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "vertical",
                  children: /* @__PURE__ */ v.jsx(
                    Xd,
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
}, VS = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Fp(t, n, r = { cyclesFix: !0 }, s = []) {
  let a = [];
  const c = Array.isArray(t);
  for (const d in t) {
    const h = t[d], g = c ? +d : d;
    if (!(d in n)) {
      a.push({
        type: "REMOVE",
        path: [g],
        oldValue: t[d]
      });
      continue;
    }
    const b = n[d], x = typeof h == "object" && typeof b == "object" && Array.isArray(h) === Array.isArray(b);
    h && b && x && !VS[Object.getPrototypeOf(h)?.constructor?.name] && (!r.cyclesFix || !s.includes(h)) ? a.push.apply(a, Fp(h, b, r, r.cyclesFix ? s.concat([h]) : []).map((S) => (S.path.unshift(g), S))) : h !== b && // treat NaN values as equivalent
    !(Number.isNaN(h) && Number.isNaN(b)) && !(x && (isNaN(h) ? h + "" == b + "" : +h == +b)) && a.push({
      path: [g],
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
var ul = Symbol.for("immer-nothing"), Fi = Symbol.for("immer-draftable"), At = Symbol.for("immer-state"), zp = process.env.NODE_ENV !== "production" ? [
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
    const r = zp[t], s = typeof r == "function" ? r.apply(null, n) : r;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var dr = Object.getPrototypeOf;
function fr(t) {
  return !!t && !!t[At];
}
function Vn(t) {
  return t ? Hp(t) || Array.isArray(t) || !!t[Fi] || !!t.constructor?.[Fi] || Ji(t) || Qi(t) : !1;
}
var GS = Object.prototype.constructor.toString();
function Hp(t) {
  if (!t || typeof t != "object")
    return !1;
  const n = dr(t);
  if (n === null)
    return !0;
  const r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === GS;
}
function Wi(t, n) {
  hr(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    n(r, t[r], t);
  }) : t.forEach((r, s) => n(s, r, t));
}
function hr(t) {
  const n = t[At];
  return n ? n.type_ : Array.isArray(t) ? 1 : Ji(t) ? 2 : Qi(t) ? 3 : 0;
}
function Bi(t, n) {
  return hr(t) === 2 ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
}
function oc(t, n) {
  return hr(t) === 2 ? t.get(n) : t[n];
}
function Up(t, n, r) {
  const s = hr(t);
  s === 2 ? t.set(n, r) : s === 3 ? t.add(r) : t[n] = r;
}
function XS(t, n) {
  return t === n ? t !== 0 || 1 / t === 1 / n : t !== t && n !== n;
}
function Ji(t) {
  return t instanceof Map;
}
function Qi(t) {
  return t instanceof Set;
}
function ar(t) {
  return t.copy_ || t.base_;
}
function Ac(t, n) {
  if (Ji(t))
    return new Map(t);
  if (Qi(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = Hp(t);
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
    return Object.create(dr(t), s);
  } else {
    const s = dr(t);
    if (s !== null && r)
      return { ...t };
    const a = Object.create(s);
    return Object.assign(a, t);
  }
}
function dl(t, n = !1) {
  return Ao(t) || fr(t) || !Vn(t) || (hr(t) > 1 && (t.set = t.add = t.clear = t.delete = YS), Object.freeze(t), n && Object.entries(t).forEach(([r, s]) => dl(s, !0))), t;
}
function YS() {
  Ze(2);
}
function Ao(t) {
  return Object.isFrozen(t);
}
var Rc = {};
function pr(t) {
  const n = Rc[t];
  return n || Ze(0, t), n;
}
function ZS(t, n) {
  Rc[t] || (Rc[t] = n);
}
var $i;
function Wp() {
  return $i;
}
function KS(t, n) {
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
function Sf(t, n) {
  n && (pr("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = n);
}
function Oc(t) {
  Mc(t), t.drafts_.forEach(qS), t.drafts_ = null;
}
function Mc(t) {
  t === $i && ($i = t.parent_);
}
function If(t) {
  return $i = KS($i, t);
}
function qS(t) {
  const n = t[At];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function Tf(t, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const r = n.drafts_[0];
  return t !== void 0 && t !== r ? (r[At].modified_ && (Oc(n), Ze(4)), Vn(t) && (t = fo(n, t), n.parent_ || ho(n, t)), n.patches_ && pr("Patches").generateReplacementPatches_(
    r[At].base_,
    t,
    n.patches_,
    n.inversePatches_
  )) : t = fo(n, r, []), Oc(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), t !== ul ? t : void 0;
}
function fo(t, n, r) {
  if (Ao(n))
    return n;
  const s = n[At];
  if (!s)
    return Wi(
      n,
      (a, c) => Cf(t, s, n, a, c, r)
    ), n;
  if (s.scope_ !== t)
    return n;
  if (!s.modified_)
    return ho(t, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const a = s.copy_;
    let c = a, u = !1;
    s.type_ === 3 && (c = new Set(a), a.clear(), u = !0), Wi(
      c,
      (d, h) => Cf(t, s, a, d, h, r, u)
    ), ho(t, a, !1), r && t.patches_ && pr("Patches").generatePatches_(
      s,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return s.copy_;
}
function Cf(t, n, r, s, a, c, u) {
  if (process.env.NODE_ENV !== "production" && a === r && Ze(5), fr(a)) {
    const d = c && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Bi(n.assigned_, s) ? c.concat(s) : void 0, h = fo(t, a, d);
    if (Up(r, s, h), fr(h))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else u && r.add(a);
  if (Vn(a) && !Ao(a)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    fo(t, a), (!n || !n.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(r, s) && ho(t, a);
  }
}
function ho(t, n, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && dl(n, r);
}
function JS(t, n) {
  const r = Array.isArray(t), s = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : Wp(),
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
  let a = s, c = fl;
  r && (a = [s], c = Vi);
  const { revoke: u, proxy: d } = Proxy.revocable(a, c);
  return s.draft_ = d, s.revoke_ = u, d;
}
var fl = {
  get(t, n) {
    if (n === At)
      return t;
    const r = ar(t);
    if (!Bi(r, n))
      return QS(t, r, n);
    const s = r[n];
    return t.finalized_ || !Vn(s) ? s : s === ac(t.base_, n) ? (cc(t), t.copy_[n] = Dc(s, t)) : s;
  },
  has(t, n) {
    return n in ar(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(ar(t));
  },
  set(t, n, r) {
    const s = Bp(ar(t), n);
    if (s?.set)
      return s.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const a = ac(ar(t), n), c = a?.[At];
      if (c && c.base_ === r)
        return t.copy_[n] = r, t.assigned_[n] = !1, !0;
      if (XS(r, a) && (r !== void 0 || Bi(t.base_, n)))
        return !0;
      cc(t), Pc(t);
    }
    return t.copy_[n] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || n in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[n]) || (t.copy_[n] = r, t.assigned_[n] = !0), !0;
  },
  deleteProperty(t, n) {
    return ac(t.base_, n) !== void 0 || n in t.base_ ? (t.assigned_[n] = !1, cc(t), Pc(t)) : delete t.assigned_[n], t.copy_ && delete t.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, n) {
    const r = ar(t), s = Reflect.getOwnPropertyDescriptor(r, n);
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
    return dr(t.base_);
  },
  setPrototypeOf() {
    Ze(12);
  }
}, Vi = {};
Wi(fl, (t, n) => {
  Vi[t] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
Vi.deleteProperty = function(t, n) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(n)) && Ze(13), Vi.set.call(this, t, n, void 0);
};
Vi.set = function(t, n, r) {
  return process.env.NODE_ENV !== "production" && n !== "length" && isNaN(parseInt(n)) && Ze(14), fl.set.call(this, t[0], n, r, t[0]);
};
function ac(t, n) {
  const r = t[At];
  return (r ? ar(r) : t)[n];
}
function QS(t, n, r) {
  const s = Bp(n, r);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    s.get?.call(t.draft_)
  ) : void 0;
}
function Bp(t, n) {
  if (!(n in t))
    return;
  let r = dr(t);
  for (; r; ) {
    const s = Object.getOwnPropertyDescriptor(r, n);
    if (s)
      return s;
    r = dr(r);
  }
}
function Pc(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Pc(t.parent_));
}
function cc(t) {
  t.copy_ || (t.copy_ = Ac(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var e6 = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, r, s) => {
      if (typeof n == "function" && typeof r != "function") {
        const c = r;
        r = n;
        const u = this;
        return function(h = c, ...g) {
          return u.produce(h, (b) => r.call(this, b, ...g));
        };
      }
      typeof r != "function" && Ze(6), s !== void 0 && typeof s != "function" && Ze(7);
      let a;
      if (Vn(n)) {
        const c = If(this), u = Dc(n, void 0);
        let d = !0;
        try {
          a = r(u), d = !1;
        } finally {
          d ? Oc(c) : Mc(c);
        }
        return Sf(c, s), Tf(a, c);
      } else if (!n || typeof n != "object") {
        if (a = r(n), a === void 0 && (a = n), a === ul && (a = void 0), this.autoFreeze_ && dl(a, !0), s) {
          const c = [], u = [];
          pr("Patches").generateReplacementPatches_(n, a, c, u), s(c, u);
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
    Vn(t) || Ze(8), fr(t) && (t = t6(t));
    const n = If(this), r = Dc(t, void 0);
    return r[At].isManual_ = !0, Mc(n), r;
  }
  finishDraft(t, n) {
    const r = t && t[At];
    (!r || !r.isManual_) && Ze(9);
    const { scope_: s } = r;
    return Sf(s, n), Tf(void 0, s);
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
    const s = pr("Patches").applyPatches_;
    return fr(t) ? s(t, n) : this.produce(
      t,
      (a) => s(a, n)
    );
  }
};
function Dc(t, n) {
  const r = Ji(t) ? pr("MapSet").proxyMap_(t, n) : Qi(t) ? pr("MapSet").proxySet_(t, n) : JS(t, n);
  return (n ? n.scope_ : Wp()).drafts_.push(r), r;
}
function t6(t) {
  return fr(t) || Ze(10, t), $p(t);
}
function $p(t) {
  if (!Vn(t) || Ao(t))
    return t;
  const n = t[At];
  let r;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, r = Ac(t, n.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Ac(t, !0);
  return Wi(r, (s, a) => {
    Up(r, s, $p(a));
  }), n && (n.finalized_ = !1), r;
}
function kf() {
  process.env.NODE_ENV !== "production" && zp.push(
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
          value: x(M[N])
        }), A.push({
          op: n,
          path: z,
          value: x(E[N])
        });
      }
    for (let N = E.length; N < M.length; N++) {
      const z = C.concat([N]);
      O.push({
        op: r,
        path: z,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: x(M[N])
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
    Wi(S.assigned_, (M, N) => {
      const z = oc(E, M), K = oc(P, M), Z = N ? Bi(E, M) ? n : r : s;
      if (z === K && Z === n)
        return;
      const q = C.concat(M);
      O.push(Z === s ? { op: Z, path: q } : { op: Z, path: q, value: K }), A.push(
        Z === r ? { op: s, path: q } : Z === s ? { op: r, path: q, value: x(z) } : { op: n, path: q, value: x(z) }
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
      value: C === ul ? void 0 : C
    }), A.push({
      op: n,
      path: [],
      value: S
    });
  }
  function g(S, C) {
    return C.forEach((O) => {
      const { path: A, op: E } = O;
      let P = S;
      for (let K = 0; K < A.length - 1; K++) {
        const Z = hr(P);
        let q = A[K];
        typeof q != "string" && typeof q != "number" && (q = "" + q), (Z === 0 || Z === 1) && (q === "__proto__" || q === "constructor") && Ze(19), typeof P == "function" && q === "prototype" && Ze(19), P = oc(P, q), typeof P != "object" && Ze(18, A.join("/"));
      }
      const M = hr(P), N = b(O.value), z = A[A.length - 1];
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
    if (Ji(S))
      return new Map(
        Array.from(S.entries()).map(([O, A]) => [O, b(A)])
      );
    if (Qi(S))
      return new Set(Array.from(S).map(b));
    const C = Object.create(dr(S));
    for (const O in S)
      C[O] = b(S[O]);
    return Bi(S, Fi) && (C[Fi] = S[Fi]), C;
  }
  function x(S) {
    return fr(S) ? b(S) : S;
  }
  ZS("Patches", {
    applyPatches_: g,
    generatePatches_: a,
    generateReplacementPatches_: h
  });
}
var Rt = new e6(), n6 = Rt.produce;
Rt.produceWithPatches.bind(
  Rt
);
Rt.setAutoFreeze.bind(Rt);
Rt.setUseStrictShallowCopy.bind(Rt);
var r6 = Rt.applyPatches.bind(Rt);
Rt.createDraft.bind(Rt);
Rt.finishDraft.bind(Rt);
function i6(t) {
  const n = t.value, r = [];
  if (n?.payload?.trackItemIds) {
    const s = n.payload.trackItemIds;
    r.push(s), this.updateState({ activeIds: r });
  }
  if (t.key === Fh) {
    const s = t.value?.payload.trackItemIds, a = Se.cloneDeep(this.getState()), c = s?.length ? s : a.activeIds, u = a.trackItemIds.filter(
      (x) => !c.includes(x)
    ), d = Object.fromEntries(
      Object.entries(a.trackItemDetailsMap).filter(
        ([x]) => !c.includes(x)
      )
    ), h = jx(a.tracks, c), g = Object.fromEntries(
      Object.entries(a.trackItemsMap).filter(
        ([x]) => !c.includes(x)
      )
    ), b = on(g);
    this.updateState(
      {
        trackItemIds: u,
        trackItemDetailsMap: d,
        activeIds: [],
        trackItemsMap: g,
        tracks: h,
        duration: b
      },
      { updateHistory: !0, kind: "remove" }
    );
  }
  if (t.key === zh) {
    const s = Se.cloneDeep(this.getState()), a = [], c = t.value?.payload.trackItemIds || s.activeIds;
    if (c.length === 0) return;
    c.forEach((d) => {
      const h = s.trackItemsMap[d], g = s.trackItemDetailsMap[d], b = Ke();
      a.push(b), s.trackItemsMap = {
        ...s.trackItemsMap,
        [b]: { ...Se.cloneDeep(h), id: b }
      }, s.trackItemDetailsMap = {
        ...s.trackItemDetailsMap,
        [b]: { ...Se.cloneDeep(g) }
      }, s.trackItemIds.push(b);
    });
    const u = s.tracks.map((d) => {
      const h = {
        ...d,
        id: Ke(),
        items: d.items.filter((g) => c.includes(g)).map((g) => {
          const b = c.indexOf(g);
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
  if (t.key === Hh) {
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
    s.trackItemsMap[c].display.to = a, s.trackItemsMap[d] = h, s.trackItemDetailsMap[d] = s.trackItemDetailsMap[c], s.trackItemIds.push(d), s.tracks.forEach((g) => {
      g.items.includes(c) && g.items.push(d);
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
async function s6(t) {
  if (t.key === "scene:load") {
    const n = t.value?.payload, r = n.size, s = n.trackItemIds, a = n.trackItemsMap, c = n.trackItemDetailsMap;
    if (!s) return;
    const u = s?.map(async (h) => {
      try {
        const g = c[h], b = a[h];
        if (g.type === "text") {
          const x = await lp(
            { id: h, details: g.details, ...b },
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
    const d = on(a);
    this.updateState({
      ...n,
      trackItemsMap: a,
      duration: d
    });
  }
}
async function o6(t) {
  const n = Se.cloneDeep(this.getState()), r = t.value?.options?.trackId, s = t.value?.options?.trackIndex;
  let a = [], c;
  if (t.key === Xi) {
    c = "video";
    const d = await Fx(t.value?.payload, {
      size: n.size
    }), { details: h, ...g } = d;
    n.trackItemDetailsMap[g.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[g.id] = g, n.trackItemIds.push(g.id), a = [g.id];
  }
  if (t.key === Zi) {
    c = "image";
    const d = await Nx(t.value?.payload, {
      size: n.size
    }), { details: h, ...g } = d;
    n.trackItemDetailsMap[g.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[g.id] = g, n.trackItemIds.push(g.id), a = [g.id];
  }
  if (t.key === Yi) {
    c = "audio";
    const d = await zx(t.value?.payload), { details: h, ...g } = d;
    n.trackItemDetailsMap[g.id] = {
      type: c,
      details: h
    }, n.trackItemsMap[g.id] = g, n.trackItemIds.push(g.id), a = [g.id];
  }
  if (t.key === Lh) {
    c = "text";
    const { details: d, ...h } = await lp(
      t.value?.payload ?? void 0,
      {
        size: n.size
      }
    );
    n.trackItemDetailsMap[h.id] = { type: c, details: d }, n.trackItemsMap[h.id] = h, n.trackItemIds.push(h.id), a.push(h.id);
  }
  const u = a6(
    a,
    n.tracks,
    n.trackItemsMap,
    r,
    s
  );
  if (u.trackId)
    n.tracks.find((h) => h.id === u.trackId)?.items.push(...a);
  else if (u.trackIndex !== void 0) {
    const d = Ef(c, a);
    n.tracks.splice(u.trackIndex, 0, d);
  } else {
    const d = Ef(c, a);
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
function Ef(t, n) {
  return {
    id: Ke(),
    accepts: ["text", "audio", "helper", "video", "image"],
    type: t,
    items: n,
    magnetic: !1,
    static: !1
  };
}
const a6 = (t, n, r, s, a) => {
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
    const g = h.display.from, b = h.display.to;
    for (const x of d) {
      const S = x.display.from;
      if (!(x.display.to <= g || S >= b))
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
}, Af = [
  "tracks",
  "trackItemsMap",
  "trackItemDetailsMap",
  "transitionIds",
  "transitionsMap",
  "trackItemIds"
], c6 = {
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
class l6 {
  stateSubject;
  stateHistorySubject;
  prevState;
  undos;
  redos;
  listener;
  constructor(n) {
    this.stateSubject = null, this.stateHistorySubject = null, this.prevState = null, this.undos = [], this.redos = [], this.listener = null;
    const r = n || c6;
    this.stateSubject = new Qd(r), this.stateHistorySubject = new Qd({
      handleRedo: !1,
      handleUndo: !1
    }), this.prevState = r, this.initListeners();
  }
  initListeners() {
    u6(this);
  }
  destroyListeners() {
    this.listener && this.listener.unsubscribe();
  }
  purge() {
    this.destroyListeners();
  }
  updateHistory(n, r) {
    const s = Se.pick(n, Af), a = Se.pick(this.getState(), Af), c = Fp(a, s);
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
    kf();
    const {
      trackItemDetailsMap: a,
      trackItemIds: c,
      tracks: u,
      transitionIds: d,
      transitionsMap: h,
      trackItemsMap: g
    } = this.getState(), b = Se.cloneDeep({
      trackItemDetailsMap: a,
      trackItemIds: c,
      tracks: u,
      transitionIds: d,
      transitionsMap: h,
      trackItemsMap: g
    }), x = [], S = [], C = [], O = [], A = [], E = [];
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
      }, V.path.includes("trackItemIds") ? C.push(ae) : V.path.includes("transitionIds") ? S.push(ae) : V.path.includes("trackItemsMap") ? A.push(ae) : V.path.includes("transitionsMap") ? O.push(ae) : V.path.includes("tracks") ? x.push(ae) : V.path.includes("trackItemDetailsMap") && E.push(ae);
    });
    const P = this.applyPatch(b.tracks, x), M = this.applyPatch(
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
    kf();
    const r = this.getState(), {
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: c,
      transitionIds: u,
      transitionsMap: d,
      trackItemsMap: h
    } = r, g = Se.cloneDeep({
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: c,
      transitionIds: u,
      transitionsMap: d,
      trackItemsMap: h
    }), b = [], x = [], S = [], C = [], O = [], A = [];
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
      z.path.includes("trackItemIds") ? S.push(Z) : z.path.includes("transitionIds") ? x.push(Z) : z.path.includes("trackItemsMap") ? O.push(Z) : z.path.includes("transitionsMap") ? C.push(Z) : z.path.includes("trackItemDetailsMap") ? A.push(Z) : b.push(Z);
    });
    const E = {
      tracks: this.applyPatch(g.tracks, b),
      transitionIds: this.applyPatch(g.transitionIds, x),
      trackItemIds: this.applyPatch(g.trackItemIds, S),
      transitionsMap: this.applyPatch(g.transitionsMap, C),
      trackItemsMap: this.applyPatch(g.trackItemsMap, O),
      trackItemDetailsMap: this.applyPatch(g.trackItemDetailsMap, A)
    }, P = Se.cloneDeep(E), M = { ...Se.cloneDeep(r), ...P };
    this.prevState = r, this.undos.push({ undos: n.redos, type: n.type });
    const N = on(M.trackItemsMap);
    this.stateSubject.next({ ...M, duration: N }), this.stateHistorySubject.next({ handleRedo: !0, handleUndo: !1 });
  }
  applyPatch(n, r) {
    return r.reverse().reduce(
      (s, a) => n6(s, (c) => {
        r6(c, [a]);
      }),
      n
    );
  }
}
function u6(t) {
  const n = me.subject.pipe(Sn(({ key: c }) => c.startsWith(rw))).subscribe((c) => {
    c.key === Wh && t.undo(), c.key === Bh && t.redo();
  }), r = me.subject.pipe(Sn(({ key: c, value: u }) => c.startsWith(K5))).subscribe((c) => {
    o6.bind(t)(c);
  }), s = me.subject.pipe(
    Sn(({ key: c, value: u }) => c.startsWith("scene"))
  ).subscribe(async (c) => {
    await s6.bind(t)(c);
  }), a = me.subject.pipe(Sn(({ key: c }) => c.startsWith(tw))).subscribe(async (c) => {
    i6.bind(t)(c);
  });
  return () => {
    n.unsubscribe(), r.unsubscribe(), a.unsubscribe(), s.unsubscribe();
  };
}
const d6 = () => {
  const { playerRef: t, fps: n, timeline: r, setState: s } = In();
  Ht(() => {
    const c = me.subject.pipe(
      Sn(({ key: u }) => u.startsWith(q5))
    ).subscribe((u) => {
      if (u.key === J5) {
        const { time: d } = u.value?.payload;
        t?.current?.seekTo(d / 1e3 * n);
      } else if (u.key === jh)
        t?.current?.play();
      else if (u.key === Nh)
        t?.current?.pause();
      else if (u.key === ew)
        t?.current?.isPlaying() ? t.current.pause() : t?.current?.play();
      else if (u.key === Q5) {
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
      Sn(({ key: u }) => u.startsWith(nw))
    ).subscribe((u) => {
      u.key === Uh && s({
        activeIds: u.value?.payload.activeIds
      });
    });
    return () => {
      c.unsubscribe();
    };
  }, [r]);
}, f6 = new l6(), _8 = () => {
  const { playerRef: t } = In();
  d6();
  const [n, r] = it([]);
  return /* @__PURE__ */ v.jsxs("div", { className: "relative flex h-screen w-screen flex-col bg-background ", children: [
    /* @__PURE__ */ v.jsx(E3, {}),
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
          /* @__PURE__ */ v.jsx(k3, {}),
          /* @__PURE__ */ v.jsx(C3, {}),
          /* @__PURE__ */ v.jsx(ix, {})
        ]
      }
    ),
    /* @__PURE__ */ v.jsx("div", { className: "h-70 w-full ", children: t && /* @__PURE__ */ v.jsx($S, { stateManager: f6 }) })
  ] });
};
export {
  zh as ACTIVE_CLONE,
  Fh as ACTIVE_DELETE,
  U6 as ACTIVE_PASTE,
  tw as ACTIVE_PREFIX,
  H6 as ACTIVE_SET,
  Hh as ACTIVE_SPLIT,
  P6 as ADD_ANIMATION,
  Yi as ADD_AUDIO,
  Zi as ADD_IMAGE,
  O6 as ADD_MASK,
  R6 as ADD_PLACEHOLDER,
  K5 as ADD_PREFIX,
  S6 as ADD_SUFFIX,
  Lh as ADD_TEXT,
  M6 as ADD_TRANSITION,
  Xi as ADD_VIDEO,
  u3 as AUDIOS,
  _8 as AppComponent,
  Xx as Audio,
  Wn as AudioObject,
  d7 as BASE_TIMELINE_ELEMENT_DURATION_MS,
  Ne as Button,
  sx as CanvasMixin,
  g7 as DEFAULT_AUDIO_BITRATE,
  p7 as DEFAULT_AUDIO_SAMPLE_RATE,
  n8 as DEFAULT_BLUR,
  t8 as DEFAULT_BLUR_STEP,
  j7 as DEFAULT_BRIGHTNESS,
  L7 as DEFAULT_BRIGHTNESS_STEP,
  Y7 as DEFAULT_CONTRAST,
  X7 as DEFAULT_CONTRAST_STEP,
  T7 as DEFAULT_FADE_IN,
  C7 as DEFAULT_FADE_OUT,
  I7 as DEFAULT_FADE_STEP,
  O7 as DEFAULT_FLIP_X,
  M7 as DEFAULT_FLIP_Y,
  nf as DEFAULT_FONT,
  Dw as DEFAULT_FRAMERATE,
  e8 as DEFAULT_MAX_BLUR,
  D7 as DEFAULT_MAX_BRIGHTNESS,
  G7 as DEFAULT_MAX_CONTRAST,
  S7 as DEFAULT_MAX_FADE,
  K7 as DEFAULT_MAX_OPACITY,
  E7 as DEFAULT_MAX_ROTATION,
  F7 as DEFAULT_MAX_SATURATION,
  i8 as DEFAULT_MAX_SPEED,
  W7 as DEFAULT_MAX_TEMPERATURE,
  c8 as DEFAULT_MAX_VOLUME,
  y7 as DEFAULT_MEDIA_PANEL_WIDTH,
  Q7 as DEFAULT_MIN_BLUR,
  P7 as DEFAULT_MIN_BRIGHTNESS,
  V7 as DEFAULT_MIN_CONTRAST,
  _7 as DEFAULT_MIN_FADE,
  Z7 as DEFAULT_MIN_OPACITY,
  k7 as DEFAULT_MIN_ROTATION,
  N7 as DEFAULT_MIN_SATURATION,
  r8 as DEFAULT_MIN_SPEED,
  U7 as DEFAULT_MIN_TEMPERATURE,
  a8 as DEFAULT_MIN_VOLUME,
  J7 as DEFAULT_OPACITY,
  q7 as DEFAULT_OPACITY_STEP,
  v7 as DEFAULT_PREVIEW_HEIGHT,
  Jh as DEFAULT_PREVIEW_SCALE,
  m7 as DEFAULT_PREVIEW_WIDTH,
  R7 as DEFAULT_ROTATION,
  A7 as DEFAULT_ROTATION_STEP,
  H7 as DEFAULT_SATURATION,
  z7 as DEFAULT_SATURATION_STEP,
  x7 as DEFAULT_SETTINGS_PANEL_WIDTH,
  o8 as DEFAULT_SPEED,
  s8 as DEFAULT_SPEED_STEP,
  $7 as DEFAULT_TEMPERATURE,
  B7 as DEFAULT_TEMPERATURE_STEP,
  Pw as DEFAULT_VIDEO_HEIGHT,
  h7 as DEFAULT_VIDEO_MAX_BITRATE,
  f7 as DEFAULT_VIDEO_MIN_BITRATE,
  Mw as DEFAULT_VIDEO_WIDTH,
  u8 as DEFAULT_VOLUME,
  l8 as DEFAULT_VOLUME_STEP,
  u7 as DEFAULT_WEIGHT,
  no as DRAG_END,
  sw as DRAG_PREFIX,
  Vh as DRAG_START,
  yo as Draggable,
  Aw as DroppableArea,
  L6 as EDIT_OBJECT,
  D6 as EDIT_PREFIX,
  N6 as EDIT_SHAPE,
  j6 as EDIT_TEXT,
  F6 as ENTER_EDIT_MODE,
  Lw as FRAME_INTERVAL,
  r7 as GIANT_ICON_SIZE,
  rw as HISTORY_PREFIX,
  Bh as HISTORY_REDO,
  t7 as HISTORY_RESET,
  Wh as HISTORY_UNDO,
  c3 as Header,
  qx as Helper,
  Ki as HelperObject,
  d3 as IMAGES,
  Zx as Image,
  el as ImageObject,
  a7 as LARGER_FONT_SIZE,
  c7 as LARGE_FONT_SIZE,
  i7 as LARGE_ICON_SIZE,
  q6 as LAYER_CLONE,
  Z6 as LAYER_COPY,
  Q6 as LAYER_CUT,
  e7 as LAYER_DELETE,
  Y6 as LAYER_EDITING_NAME,
  B6 as LAYER_HIDDEN,
  W6 as LAYER_LOCKED,
  $6 as LAYER_MOVE,
  K6 as LAYER_PASTE,
  nw as LAYER_PREFIX,
  X6 as LAYER_RENAME,
  V6 as LAYER_SELECT,
  Uh as LAYER_SELECTION,
  G6 as LAYER_SEND_TO,
  J6 as LAYER_SPLIT,
  w7 as MAX_MEDIA_PANEL_WIDTH,
  b7 as MIN_MEDIA_PANEL_WIDTH,
  C3 as MenuItem,
  l7 as NORMAL_FONT_SIZE,
  s7 as NORMAL_ICON_SIZE,
  E3 as NavbarComponent,
  Nh as PLAYER_PAUSE,
  jh as PLAYER_PLAY,
  q5 as PLAYER_PREFIX,
  J5 as PLAYER_SEEK,
  Q5 as PLAYER_SEEK_BY,
  z6 as PLAYER_SEEK_TO,
  ew as PLAYER_TOGGLE_PLAY,
  _o as PREVIEW_FRAME_WIDTH,
  Hi as Placeholder,
  tx as Player,
  nx as PlayheadComponent,
  co as PreviewTrackItem,
  rx as RulerComponent,
  Ow as SECONDARY_FONT,
  Rw as SMALL_FONT_SIZE,
  o7 as SMALL_ICON_SIZE,
  A6 as STATE_CHANGED,
  E6 as STATE_PREFIX,
  ix as Scene,
  n7 as SceneBoard,
  Zr as ScrollArea,
  hh as ScrollBar,
  A3 as SequenceItem,
  m5 as Slider,
  l6 as StateManager,
  Gh as TIMELINE_BOUNDING_CHANGED,
  Zc as TIMELINE_OFFSET_CANVAS_LEFT,
  tf as TIMELINE_OFFSET_CANVAS_RIGHT,
  Cc as TIMELINE_OFFSET_X,
  ow as TIMELINE_PREFIX,
  $h as TIMELINE_SCALE_CHANGED,
  iw as TIMELINE_SCALE_PREFIX,
  sn as TIMELINE_ZOOM_LEVELS,
  C6 as TRACKS_CHANGED,
  k6 as TRACK_ITEMS_CHANGED,
  T6 as TRACK_ITEMS_PREFIX,
  I6 as TRACK_PREFIX,
  h3 as TRANSITIONS,
  Z5 as Tabs,
  yc as TabsContent,
  Dh as TabsList,
  bc as TabsTrigger,
  up as Text,
  Vr as TextObject,
  ll as Timeline,
  $S as TimelineComponent,
  Kx as Track,
  Jx as TrackItemsMixin,
  lr as TrackObject,
  e_ as TracksMixin,
  Zt as Transition,
  ao as TransitionGuide,
  r_ as TransitionsMixin,
  m8 as UPLOADS,
  f3 as VIDEOS,
  Yx as Video,
  qr as VideoObject,
  zS as addEventListeners,
  Rx as applyMixins,
  Vy as buttonVariants,
  Lx as calculateDisplayRange,
  on as calculateDuration,
  tl as calculatePosition,
  Vw as calculateTimelineWidth,
  Dx as calculateTrim,
  ut as cn,
  Ix as createAudioControls,
  Ax as createControls,
  wx as createMediaControls,
  ap as createResizeControls,
  Io as defaultColor,
  Vx as defaultSizes,
  me as eventBus,
  jx as filterAndCleanTracks,
  Qh as findIndex,
  y6 as formatBytes,
  d8 as formatTimeToHumanReadable,
  jw as formatTimelineUnit,
  Nw as frameToTimeString,
  zw as getCurrentTime,
  f8 as getFitZoomLevel,
  y8 as getMovingState,
  Ww as getNextZoom,
  $w as getNextZoomIndex,
  Bw as getNextZoomLevel,
  ve as getOffset,
  Uw as getPreviousZoom,
  p8 as getPreviousZoomIndex,
  Hw as getPreviousZoomLevel,
  Js as getTextHeight,
  h8 as getZoomByIndex,
  BS as handleEvents,
  so as handleResize,
  Ox as loadAudio,
  zx as loadAudioItem,
  Ux as loadAudioObject,
  Gw as loadFonts,
  Mx as loadImage,
  Nx as loadImageItem,
  Wx as loadImageObject,
  lp as loadTextItem,
  $x as loadTextObject,
  Px as loadVideo,
  Fx as loadVideoItem,
  Bx as loadVideoObject,
  Gx as mergeSizes,
  ep as mergeTrackObjects,
  U as movingState,
  ox as positionOffsets,
  g8 as randomInt,
  HS as removeEventListeners,
  ro as removeItemsFromTrack,
  Bn as renderControl,
  tp as reorderTracksByIndex,
  u6 as setupHistoryListeners,
  Ve as timeMsToUnits,
  Fw as timeToString,
  Be as transitionStore,
  cr as unitsToTimeMs,
  w8 as updateMovingState,
  Kc as useCurrentPlayerFrame,
  So as useIsDraggingOverTimeline,
  qc as useLayoutStore,
  In as useStore,
  d6 as useTimelineEvents,
  cp as wrapResizeWithAnchorPosition
};
