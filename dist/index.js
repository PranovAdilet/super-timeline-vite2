import { ActiveSelection as qu, controlsUtils as Ht, classRegistry as Wt, Rect as Gr, Control as Wr, util as zh, Group as Xu, Point as aE, Canvas as cE, FabricObject as Or } from "fabric";
function uE(e, t) {
  for (var r = 0; r < t.length; r++) {
    const o = t[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(o, s);
          a && Object.defineProperty(e, s, a.get ? a : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Uh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var au = { exports: {} }, mi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function lE() {
  if (vp) return mi;
  vp = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, s, a) {
    var u = null;
    if (a !== void 0 && (u = "" + a), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      a = {};
      for (var l in s)
        l !== "key" && (a[l] = s[l]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: o,
      key: u,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return mi.Fragment = t, mi.jsx = r, mi.jsxs = r, mi;
}
var gi = {}, cu = { exports: {} }, Oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function dE() {
  if (yp) return Oe;
  yp = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.iterator;
  function v(R) {
    return R === null || typeof R != "object" ? null : (R = g && R[g] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _ = Object.assign, T = {};
  function C(R, L, ie) {
    this.props = R, this.context = L, this.refs = T, this.updater = ie || S;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(R, L) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, L, "setState");
  }, C.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function A() {
  }
  A.prototype = C.prototype;
  function k(R, L, ie) {
    this.props = R, this.context = L, this.refs = T, this.updater = ie || S;
  }
  var O = k.prototype = new A();
  O.constructor = k, _(O, C.prototype), O.isPureReactComponent = !0;
  var N = Array.isArray, $ = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function G(R, L, ie, le, ve, de) {
    return ie = de.ref, {
      $$typeof: e,
      type: R,
      key: L,
      ref: ie !== void 0 ? ie : null,
      props: de
    };
  }
  function U(R, L) {
    return G(
      R.type,
      L,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function Y(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }
  function H(R) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ie) {
      return L[ie];
    });
  }
  var Z = /\/+/g;
  function W(R, L) {
    return typeof R == "object" && R !== null && R.key != null ? H("" + R.key) : L.toString(36);
  }
  function Q() {
  }
  function ue(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(Q, Q) : (R.status = "pending", R.then(
          function(L) {
            R.status === "pending" && (R.status = "fulfilled", R.value = L);
          },
          function(L) {
            R.status === "pending" && (R.status = "rejected", R.reason = L);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function ye(R, L, ie, le, ve) {
    var de = typeof R;
    (de === "undefined" || de === "boolean") && (R = null);
    var ce = !1;
    if (R === null) ce = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case e:
            case t:
              ce = !0;
              break;
            case m:
              return ce = R._init, ye(
                ce(R._payload),
                L,
                ie,
                le,
                ve
              );
          }
      }
    if (ce)
      return ve = ve(R), ce = le === "" ? "." + W(R, 0) : le, N(ve) ? (ie = "", ce != null && (ie = ce.replace(Z, "$&/") + "/"), ye(ve, L, ie, "", function(wt) {
        return wt;
      })) : ve != null && (Y(ve) && (ve = U(
        ve,
        ie + (ve.key == null || R && R.key === ve.key ? "" : ("" + ve.key).replace(
          Z,
          "$&/"
        ) + "/") + ce
      )), L.push(ve)), 1;
    ce = 0;
    var et = le === "" ? "." : le + ":";
    if (N(R))
      for (var Fe = 0; Fe < R.length; Fe++)
        le = R[Fe], de = et + W(le, Fe), ce += ye(
          le,
          L,
          ie,
          de,
          ve
        );
    else if (Fe = v(R), typeof Fe == "function")
      for (R = Fe.call(R), Fe = 0; !(le = R.next()).done; )
        le = le.value, de = et + W(le, Fe++), ce += ye(
          le,
          L,
          ie,
          de,
          ve
        );
    else if (de === "object") {
      if (typeof R.then == "function")
        return ye(
          ue(R),
          L,
          ie,
          le,
          ve
        );
      throw L = String(R), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function ee(R, L, ie) {
    if (R == null) return R;
    var le = [], ve = 0;
    return ye(R, le, "", "", function(de) {
      return L.call(ie, de, ve++);
    }), le;
  }
  function me(R) {
    if (R._status === -1) {
      var L = R._result;
      L = L(), L.then(
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ie);
        },
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ie);
        }
      ), R._status === -1 && (R._status = 0, R._result = L);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var xe = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function re() {
  }
  return Oe.Children = {
    map: ee,
    forEach: function(R, L, ie) {
      ee(
        R,
        function() {
          L.apply(this, arguments);
        },
        ie
      );
    },
    count: function(R) {
      var L = 0;
      return ee(R, function() {
        L++;
      }), L;
    },
    toArray: function(R) {
      return ee(R, function(L) {
        return L;
      }) || [];
    },
    only: function(R) {
      if (!Y(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, Oe.Component = C, Oe.Fragment = r, Oe.Profiler = s, Oe.PureComponent = k, Oe.StrictMode = o, Oe.Suspense = d, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, Oe.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Oe.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, Oe.cloneElement = function(R, L, ie) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var le = _({}, R.props), ve = R.key, de = void 0;
    if (L != null)
      for (ce in L.ref !== void 0 && (de = void 0), L.key !== void 0 && (ve = "" + L.key), L)
        !V.call(L, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && L.ref === void 0 || (le[ce] = L[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) le.children = ie;
    else if (1 < ce) {
      for (var et = Array(ce), Fe = 0; Fe < ce; Fe++)
        et[Fe] = arguments[Fe + 2];
      le.children = et;
    }
    return G(R.type, ve, void 0, void 0, de, le);
  }, Oe.createContext = function(R) {
    return R = {
      $$typeof: u,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: a,
      _context: R
    }, R;
  }, Oe.createElement = function(R, L, ie) {
    var le, ve = {}, de = null;
    if (L != null)
      for (le in L.key !== void 0 && (de = "" + L.key), L)
        V.call(L, le) && le !== "key" && le !== "__self" && le !== "__source" && (ve[le] = L[le]);
    var ce = arguments.length - 2;
    if (ce === 1) ve.children = ie;
    else if (1 < ce) {
      for (var et = Array(ce), Fe = 0; Fe < ce; Fe++)
        et[Fe] = arguments[Fe + 2];
      ve.children = et;
    }
    if (R && R.defaultProps)
      for (le in ce = R.defaultProps, ce)
        ve[le] === void 0 && (ve[le] = ce[le]);
    return G(R, de, void 0, void 0, null, ve);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(R) {
    return { $$typeof: l, render: R };
  }, Oe.isValidElement = Y, Oe.lazy = function(R) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: R },
      _init: me
    };
  }, Oe.memo = function(R, L) {
    return {
      $$typeof: p,
      type: R,
      compare: L === void 0 ? null : L
    };
  }, Oe.startTransition = function(R) {
    var L = $.T, ie = {};
    $.T = ie;
    try {
      var le = R(), ve = $.S;
      ve !== null && ve(ie, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(re, xe);
    } catch (de) {
      xe(de);
    } finally {
      $.T = L;
    }
  }, Oe.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, Oe.use = function(R) {
    return $.H.use(R);
  }, Oe.useActionState = function(R, L, ie) {
    return $.H.useActionState(R, L, ie);
  }, Oe.useCallback = function(R, L) {
    return $.H.useCallback(R, L);
  }, Oe.useContext = function(R) {
    return $.H.useContext(R);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(R, L) {
    return $.H.useDeferredValue(R, L);
  }, Oe.useEffect = function(R, L) {
    return $.H.useEffect(R, L);
  }, Oe.useId = function() {
    return $.H.useId();
  }, Oe.useImperativeHandle = function(R, L, ie) {
    return $.H.useImperativeHandle(R, L, ie);
  }, Oe.useInsertionEffect = function(R, L) {
    return $.H.useInsertionEffect(R, L);
  }, Oe.useLayoutEffect = function(R, L) {
    return $.H.useLayoutEffect(R, L);
  }, Oe.useMemo = function(R, L) {
    return $.H.useMemo(R, L);
  }, Oe.useOptimistic = function(R, L) {
    return $.H.useOptimistic(R, L);
  }, Oe.useReducer = function(R, L, ie) {
    return $.H.useReducer(R, L, ie);
  }, Oe.useRef = function(R) {
    return $.H.useRef(R);
  }, Oe.useState = function(R) {
    return $.H.useState(R);
  }, Oe.useSyncExternalStore = function(R, L, ie) {
    return $.H.useSyncExternalStore(
      R,
      L,
      ie
    );
  }, Oe.useTransition = function() {
    return $.H.useTransition();
  }, Oe.version = "19.0.0", Oe;
}
var xi = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
xi.exports;
var bp;
function fE() {
  return bp || (bp = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      function r(b, j) {
        Object.defineProperty(a.prototype, b, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              j[0],
              j[1]
            );
          }
        });
      }
      function o(b) {
        return b === null || typeof b != "object" ? null : (b = yr && b[yr] || b["@@iterator"], typeof b == "function" ? b : null);
      }
      function s(b, j) {
        b = (b = b.constructor) && (b.displayName || b.name) || "ReactClass";
        var X = b + "." + j;
        Lt[X] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          j,
          b
        ), Lt[X] = !0);
      }
      function a(b, j, X) {
        this.props = b, this.context = j, this.refs = se, this.updater = X || P;
      }
      function u() {
      }
      function l(b, j, X) {
        this.props = b, this.context = j, this.refs = se, this.updater = X || P;
      }
      function d(b) {
        return "" + b;
      }
      function p(b) {
        try {
          d(b);
          var j = !1;
        } catch {
          j = !0;
        }
        if (j) {
          j = console;
          var X = j.error, ne = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
          return X.call(
            j,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ne
          ), d(b);
        }
      }
      function m(b) {
        if (b == null) return null;
        if (typeof b == "function")
          return b.$$typeof === Ee ? null : b.displayName || b.name || null;
        if (typeof b == "string") return b;
        switch (b) {
          case Fe:
            return "Fragment";
          case et:
            return "Portal";
          case er:
            return "Profiler";
          case wt:
            return "StrictMode";
          case Je:
            return "Suspense";
          case lt:
            return "SuspenseList";
        }
        if (typeof b == "object")
          switch (typeof b.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), b.$$typeof) {
            case be:
              return (b.displayName || "Context") + ".Provider";
            case St:
              return (b._context.displayName || "Context") + ".Consumer";
            case kt:
              var j = b.render;
              return b = b.displayName, b || (b = j.displayName || j.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
            case tr:
              return j = b.displayName || null, j !== null ? j : m(b.type) || "Memo";
            case qe:
              j = b._payload, b = b._init;
              try {
                return m(b(j));
              } catch {
              }
          }
        return null;
      }
      function g(b) {
        return typeof b == "string" || typeof b == "function" || b === Fe || b === er || b === wt || b === Je || b === lt || b === ht || typeof b == "object" && b !== null && (b.$$typeof === qe || b.$$typeof === tr || b.$$typeof === be || b.$$typeof === St || b.$$typeof === kt || b.$$typeof === ct || b.getModuleId !== void 0);
      }
      function v() {
      }
      function S() {
        if (Et === 0) {
          rr = console.log, Mt = console.info, cr = console.warn, At = console.error, un = console.group, ln = console.groupCollapsed, Xr = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: v,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        Et++;
      }
      function _() {
        if (Et--, Et === 0) {
          var b = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: oe({}, b, { value: rr }),
            info: oe({}, b, { value: Mt }),
            warn: oe({}, b, { value: cr }),
            error: oe({}, b, { value: At }),
            group: oe({}, b, { value: un }),
            groupCollapsed: oe({}, b, { value: ln }),
            groupEnd: oe({}, b, { value: Xr })
          });
        }
        0 > Et && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function T(b) {
        if (Lr === void 0)
          try {
            throw Error();
          } catch (X) {
            var j = X.stack.trim().match(/\n( *(at )?)/);
            Lr = j && j[1] || "", co = -1 < X.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < X.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Lr + b + co;
      }
      function C(b, j) {
        if (!b || dn) return "";
        var X = kr.get(b);
        if (X !== void 0) return X;
        dn = !0, X = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var ne = null;
        ne = pe.H, pe.H = null, S();
        try {
          var he = {
            DetermineComponentFrameRoot: function() {
              try {
                if (j) {
                  var Gt = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Gt.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Gt, []);
                    } catch (nr) {
                      var po = nr;
                    }
                    Reflect.construct(b, [], Gt);
                  } else {
                    try {
                      Gt.call();
                    } catch (nr) {
                      po = nr;
                    }
                    b.call(Gt.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (nr) {
                    po = nr;
                  }
                  (Gt = b()) && typeof Gt.catch == "function" && Gt.catch(function() {
                  });
                }
              } catch (nr) {
                if (nr && po && typeof nr.stack == "string")
                  return [nr.stack, po.stack];
              }
              return [null, null];
            }
          };
          he.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var Se = Object.getOwnPropertyDescriptor(
            he.DetermineComponentFrameRoot,
            "name"
          );
          Se && Se.configurable && Object.defineProperty(
            he.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var ge = he.DetermineComponentFrameRoot(), Xe = ge[0], Ge = ge[1];
          if (Xe && Ge) {
            var st = Xe.split(`
`), Ft = Ge.split(`
`);
            for (ge = Se = 0; Se < st.length && !st[Se].includes(
              "DetermineComponentFrameRoot"
            ); )
              Se++;
            for (; ge < Ft.length && !Ft[ge].includes(
              "DetermineComponentFrameRoot"
            ); )
              ge++;
            if (Se === st.length || ge === Ft.length)
              for (Se = st.length - 1, ge = Ft.length - 1; 1 <= Se && 0 <= ge && st[Se] !== Ft[ge]; )
                ge--;
            for (; 1 <= Se && 0 <= ge; Se--, ge--)
              if (st[Se] !== Ft[ge]) {
                if (Se !== 1 || ge !== 1)
                  do
                    if (Se--, ge--, 0 > ge || st[Se] !== Ft[ge]) {
                      var Kr = `
` + st[Se].replace(
                        " at new ",
                        " at "
                      );
                      return b.displayName && Kr.includes("<anonymous>") && (Kr = Kr.replace("<anonymous>", b.displayName)), typeof b == "function" && kr.set(b, Kr), Kr;
                    }
                  while (1 <= Se && 0 <= ge);
                break;
              }
          }
        } finally {
          dn = !1, pe.H = ne, _(), Error.prepareStackTrace = X;
        }
        return st = (st = b ? b.displayName || b.name : "") ? T(st) : "", typeof b == "function" && kr.set(b, st), st;
      }
      function A(b) {
        if (b == null) return "";
        if (typeof b == "function") {
          var j = b.prototype;
          return C(
            b,
            !(!j || !j.isReactComponent)
          );
        }
        if (typeof b == "string") return T(b);
        switch (b) {
          case Je:
            return T("Suspense");
          case lt:
            return T("SuspenseList");
        }
        if (typeof b == "object")
          switch (b.$$typeof) {
            case kt:
              return b = C(b.render, !1), b;
            case tr:
              return A(b.type);
            case qe:
              j = b._payload, b = b._init;
              try {
                return A(b(j));
              } catch {
              }
          }
        return "";
      }
      function k() {
        var b = pe.A;
        return b === null ? null : b.getOwner();
      }
      function O(b) {
        if (xt.call(b, "key")) {
          var j = Object.getOwnPropertyDescriptor(b, "key").get;
          if (j && j.isReactWarning) return !1;
        }
        return b.key !== void 0;
      }
      function N(b, j) {
        function X() {
          Xo || (Xo = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            j
          ));
        }
        X.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: X,
          configurable: !0
        });
      }
      function $() {
        var b = m(this.type);
        return Zo[b] || (Zo[b] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), b = this.props.ref, b !== void 0 ? b : null;
      }
      function V(b, j, X, ne, he, Se) {
        return X = Se.ref, b = {
          $$typeof: ce,
          type: b,
          key: j,
          props: Se,
          _owner: he
        }, (X !== void 0 ? X : null) !== null ? Object.defineProperty(b, "ref", {
          enumerable: !1,
          get: $
        }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(b, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
      }
      function G(b, j) {
        return j = V(
          b.type,
          j,
          void 0,
          void 0,
          b._owner,
          b.props
        ), j._store.validated = b._store.validated, j;
      }
      function U(b, j) {
        if (typeof b == "object" && b && b.$$typeof !== uo) {
          if (Ue(b))
            for (var X = 0; X < b.length; X++) {
              var ne = b[X];
              Y(ne) && H(ne, j);
            }
          else if (Y(b))
            b._store && (b._store.validated = 1);
          else if (X = o(b), typeof X == "function" && X !== b.entries && (X = X.call(b), X !== b))
            for (; !(b = X.next()).done; )
              Y(b.value) && H(b.value, j);
        }
      }
      function Y(b) {
        return typeof b == "object" && b !== null && b.$$typeof === ce;
      }
      function H(b, j) {
        if (b._store && !b._store.validated && b.key == null && (b._store.validated = 1, j = Z(j), !lo[j])) {
          lo[j] = !0;
          var X = "";
          b && b._owner != null && b._owner !== k() && (X = null, typeof b._owner.tag == "number" ? X = m(b._owner.type) : typeof b._owner.name == "string" && (X = b._owner.name), X = " It was passed a child from " + X + ".");
          var ne = pe.getCurrentStack;
          pe.getCurrentStack = function() {
            var he = A(b.type);
            return ne && (he += ne() || ""), he;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            j,
            X
          ), pe.getCurrentStack = ne;
        }
      }
      function Z(b) {
        var j = "", X = k();
        return X && (X = m(X.type)) && (j = `

Check the render method of \`` + X + "`."), j || (b = m(b)) && (j = `

Check the top-level render call using <` + b + ">."), j;
      }
      function W(b) {
        var j = { "=": "=0", ":": "=2" };
        return "$" + b.replace(/[=:]/g, function(X) {
          return j[X];
        });
      }
      function Q(b, j) {
        return typeof b == "object" && b !== null && b.key != null ? (p(b.key), W("" + b.key)) : j.toString(36);
      }
      function ue() {
      }
      function ye(b) {
        switch (b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
          default:
            switch (typeof b.status == "string" ? b.then(ue, ue) : (b.status = "pending", b.then(
              function(j) {
                b.status === "pending" && (b.status = "fulfilled", b.value = j);
              },
              function(j) {
                b.status === "pending" && (b.status = "rejected", b.reason = j);
              }
            )), b.status) {
              case "fulfilled":
                return b.value;
              case "rejected":
                throw b.reason;
            }
        }
        throw b;
      }
      function ee(b, j, X, ne, he) {
        var Se = typeof b;
        (Se === "undefined" || Se === "boolean") && (b = null);
        var ge = !1;
        if (b === null) ge = !0;
        else
          switch (Se) {
            case "bigint":
            case "string":
            case "number":
              ge = !0;
              break;
            case "object":
              switch (b.$$typeof) {
                case ce:
                case et:
                  ge = !0;
                  break;
                case qe:
                  return ge = b._init, ee(
                    ge(b._payload),
                    j,
                    X,
                    ne,
                    he
                  );
              }
          }
        if (ge) {
          ge = b, he = he(ge);
          var Xe = ne === "" ? "." + Q(ge, 0) : ne;
          return Ue(he) ? (X = "", Xe != null && (X = Xe.replace(Pn, "$&/") + "/"), ee(he, j, X, "", function(st) {
            return st;
          })) : he != null && (Y(he) && (he.key != null && (ge && ge.key === he.key || p(he.key)), X = G(
            he,
            X + (he.key == null || ge && ge.key === he.key ? "" : ("" + he.key).replace(
              Pn,
              "$&/"
            ) + "/") + Xe
          ), ne !== "" && ge != null && Y(ge) && ge.key == null && ge._store && !ge._store.validated && (X._store.validated = 2), he = X), j.push(he)), 1;
        }
        if (ge = 0, Xe = ne === "" ? "." : ne + ":", Ue(b))
          for (var Ge = 0; Ge < b.length; Ge++)
            ne = b[Ge], Se = Xe + Q(ne, Ge), ge += ee(
              ne,
              j,
              X,
              Se,
              he
            );
        else if (Ge = o(b), typeof Ge == "function")
          for (Ge === b.entries && (fo || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), fo = !0), b = Ge.call(b), Ge = 0; !(ne = b.next()).done; )
            ne = ne.value, Se = Xe + Q(ne, Ge++), ge += ee(
              ne,
              j,
              X,
              Se,
              he
            );
        else if (Se === "object") {
          if (typeof b.then == "function")
            return ee(
              ye(b),
              j,
              X,
              ne,
              he
            );
          throw j = String(b), Error(
            "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ge;
      }
      function me(b, j, X) {
        if (b == null) return b;
        var ne = [], he = 0;
        return ee(b, ne, "", "", function(Se) {
          return j.call(X, Se, he++);
        }), ne;
      }
      function xe(b) {
        if (b._status === -1) {
          var j = b._result;
          j = j(), j.then(
            function(X) {
              (b._status === 0 || b._status === -1) && (b._status = 1, b._result = X);
            },
            function(X) {
              (b._status === 0 || b._status === -1) && (b._status = 2, b._result = X);
            }
          ), b._status === -1 && (b._status = 0, b._result = j);
        }
        if (b._status === 1)
          return j = b._result, j === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            j
          ), "default" in j || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            j
          ), j.default;
        throw b._result;
      }
      function re() {
        var b = pe.H;
        return b === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), b;
      }
      function R() {
      }
      function L(b) {
        if (Rt === null)
          try {
            var j = ("require" + Math.random()).slice(0, 7);
            Rt = (e && e[j]).call(
              e,
              "timers"
            ).setImmediate;
          } catch {
            Rt = function(ne) {
              $e === !1 && ($e = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var he = new MessageChannel();
              he.port1.onmessage = ne, he.port2.postMessage(void 0);
            };
          }
        return Rt(b);
      }
      function ie(b) {
        return 1 < b.length && typeof AggregateError == "function" ? new AggregateError(b) : b[0];
      }
      function le(b, j) {
        j !== Yt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Yt = j;
      }
      function ve(b, j, X) {
        var ne = pe.actQueue;
        if (ne !== null)
          if (ne.length !== 0)
            try {
              de(ne), L(function() {
                return ve(b, j, X);
              });
              return;
            } catch (he) {
              pe.thrownErrors.push(he);
            }
          else pe.actQueue = null;
        0 < pe.thrownErrors.length ? (ne = ie(pe.thrownErrors), pe.thrownErrors.length = 0, X(ne)) : j(b);
      }
      function de(b) {
        if (!Jo) {
          Jo = !0;
          var j = 0;
          try {
            for (; j < b.length; j++) {
              var X = b[j];
              do {
                pe.didUsePromise = !1;
                var ne = X(!1);
                if (ne !== null) {
                  if (pe.didUsePromise) {
                    b[j] = X, b.splice(0, j);
                    return;
                  }
                  X = ne;
                } else break;
              } while (!0);
            }
            b.length = 0;
          } catch (he) {
            b.splice(0, j + 1), pe.thrownErrors.push(he);
          } finally {
            Jo = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ce = Symbol.for("react.transitional.element"), et = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), wt = Symbol.for("react.strict_mode"), er = Symbol.for("react.profiler"), St = Symbol.for("react.consumer"), be = Symbol.for("react.context"), kt = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), lt = Symbol.for("react.suspense_list"), tr = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), ht = Symbol.for("react.offscreen"), yr = Symbol.iterator, Lt = {}, P = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(b) {
          s(b, "forceUpdate");
        },
        enqueueReplaceState: function(b) {
          s(b, "replaceState");
        },
        enqueueSetState: function(b) {
          s(b, "setState");
        }
      }, oe = Object.assign, se = {};
      Object.freeze(se), a.prototype.isReactComponent = {}, a.prototype.setState = function(b, j) {
        if (typeof b != "object" && typeof b != "function" && b != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, b, j, "setState");
      }, a.prototype.forceUpdate = function(b) {
        this.updater.enqueueForceUpdate(this, b, "forceUpdate");
      };
      var Ae = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Ye;
      for (Ye in Ae)
        Ae.hasOwnProperty(Ye) && r(Ye, Ae[Ye]);
      u.prototype = a.prototype, Ae = l.prototype = new u(), Ae.constructor = l, oe(Ae, a.prototype), Ae.isPureReactComponent = !0;
      var Ue = Array.isArray, Ee = Symbol.for("react.client.reference"), pe = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, xt = Object.prototype.hasOwnProperty, ct = Symbol.for("react.client.reference"), Et = 0, rr, Mt, cr, At, un, ln, Xr;
      v.__reactDisabledLog = !0;
      var Lr, co, dn = !1, kr = new (typeof WeakMap == "function" ? WeakMap : Map)(), uo = Symbol.for("react.client.reference"), Xo, Ko, Zo = {}, lo = {}, fo = !1, Pn = /\/+/g, He = typeof reportError == "function" ? reportError : function(b) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var j = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
            error: b
          });
          if (!window.dispatchEvent(j)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", b);
          return;
        }
        console.error(b);
      }, $e = !1, Rt = null, Yt = 0, Mn = !1, Jo = !1, qi = typeof queueMicrotask == "function" ? function(b) {
        queueMicrotask(function() {
          return queueMicrotask(b);
        });
      } : L;
      t.Children = {
        map: me,
        forEach: function(b, j, X) {
          me(
            b,
            function() {
              j.apply(this, arguments);
            },
            X
          );
        },
        count: function(b) {
          var j = 0;
          return me(b, function() {
            j++;
          }), j;
        },
        toArray: function(b) {
          return me(b, function(j) {
            return j;
          }) || [];
        },
        only: function(b) {
          if (!Y(b))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return b;
        }
      }, t.Component = a, t.Fragment = Fe, t.Profiler = er, t.PureComponent = l, t.StrictMode = wt, t.Suspense = Je, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pe, t.act = function(b) {
        var j = pe.actQueue, X = Yt;
        Yt++;
        var ne = pe.actQueue = j !== null ? j : [], he = !1;
        try {
          var Se = b();
        } catch (Ge) {
          pe.thrownErrors.push(Ge);
        }
        if (0 < pe.thrownErrors.length)
          throw le(j, X), b = ie(pe.thrownErrors), pe.thrownErrors.length = 0, b;
        if (Se !== null && typeof Se == "object" && typeof Se.then == "function") {
          var ge = Se;
          return qi(function() {
            he || Mn || (Mn = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ge, st) {
              he = !0, ge.then(
                function(Ft) {
                  if (le(j, X), X === 0) {
                    try {
                      de(ne), L(function() {
                        return ve(
                          Ft,
                          Ge,
                          st
                        );
                      });
                    } catch (Gt) {
                      pe.thrownErrors.push(Gt);
                    }
                    if (0 < pe.thrownErrors.length) {
                      var Kr = ie(
                        pe.thrownErrors
                      );
                      pe.thrownErrors.length = 0, st(Kr);
                    }
                  } else Ge(Ft);
                },
                function(Ft) {
                  le(j, X), 0 < pe.thrownErrors.length && (Ft = ie(
                    pe.thrownErrors
                  ), pe.thrownErrors.length = 0), st(Ft);
                }
              );
            }
          };
        }
        var Xe = Se;
        if (le(j, X), X === 0 && (de(ne), ne.length !== 0 && qi(function() {
          he || Mn || (Mn = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), pe.actQueue = null), 0 < pe.thrownErrors.length)
          throw b = ie(pe.thrownErrors), pe.thrownErrors.length = 0, b;
        return {
          then: function(Ge, st) {
            he = !0, X === 0 ? (pe.actQueue = ne, L(function() {
              return ve(
                Xe,
                Ge,
                st
              );
            })) : Ge(Xe);
          }
        };
      }, t.cache = function(b) {
        return function() {
          return b.apply(null, arguments);
        };
      }, t.cloneElement = function(b, j, X) {
        if (b == null)
          throw Error(
            "The argument must be a React element, but you passed " + b + "."
          );
        var ne = oe({}, b.props), he = b.key, Se = b._owner;
        if (j != null) {
          var ge;
          e: {
            if (xt.call(j, "ref") && (ge = Object.getOwnPropertyDescriptor(
              j,
              "ref"
            ).get) && ge.isReactWarning) {
              ge = !1;
              break e;
            }
            ge = j.ref !== void 0;
          }
          ge && (Se = k()), O(j) && (p(j.key), he = "" + j.key);
          for (Xe in j)
            !xt.call(j, Xe) || Xe === "key" || Xe === "__self" || Xe === "__source" || Xe === "ref" && j.ref === void 0 || (ne[Xe] = j[Xe]);
        }
        var Xe = arguments.length - 2;
        if (Xe === 1) ne.children = X;
        else if (1 < Xe) {
          ge = Array(Xe);
          for (var Ge = 0; Ge < Xe; Ge++)
            ge[Ge] = arguments[Ge + 2];
          ne.children = ge;
        }
        for (ne = V(b.type, he, void 0, void 0, Se, ne), he = 2; he < arguments.length; he++)
          U(arguments[he], ne.type);
        return ne;
      }, t.createContext = function(b) {
        return b = {
          $$typeof: be,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, b.Provider = b, b.Consumer = {
          $$typeof: St,
          _context: b
        }, b._currentRenderer = null, b._currentRenderer2 = null, b;
      }, t.createElement = function(b, j, X) {
        if (g(b))
          for (var ne = 2; ne < arguments.length; ne++)
            U(arguments[ne], b);
        else {
          if (ne = "", (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), b === null) var he = "null";
          else
            Ue(b) ? he = "array" : b !== void 0 && b.$$typeof === ce ? (he = "<" + (m(b.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : he = typeof b;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            he,
            ne
          );
        }
        var Se;
        if (ne = {}, he = null, j != null)
          for (Se in Ko || !("__self" in j) || "key" in j || (Ko = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), O(j) && (p(j.key), he = "" + j.key), j)
            xt.call(j, Se) && Se !== "key" && Se !== "__self" && Se !== "__source" && (ne[Se] = j[Se]);
        var ge = arguments.length - 2;
        if (ge === 1) ne.children = X;
        else if (1 < ge) {
          for (var Xe = Array(ge), Ge = 0; Ge < ge; Ge++)
            Xe[Ge] = arguments[Ge + 2];
          Object.freeze && Object.freeze(Xe), ne.children = Xe;
        }
        if (b && b.defaultProps)
          for (Se in ge = b.defaultProps, ge)
            ne[Se] === void 0 && (ne[Se] = ge[Se]);
        return he && N(
          ne,
          typeof b == "function" ? b.displayName || b.name || "Unknown" : b
        ), V(b, he, void 0, void 0, k(), ne);
      }, t.createRef = function() {
        var b = { current: null };
        return Object.seal(b), b;
      }, t.forwardRef = function(b) {
        b != null && b.$$typeof === tr ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof b != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          b === null ? "null" : typeof b
        ) : b.length !== 0 && b.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          b.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), b != null && b.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var j = { $$typeof: kt, render: b }, X;
        return Object.defineProperty(j, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return X;
          },
          set: function(ne) {
            X = ne, b.name || b.displayName || (Object.defineProperty(b, "name", { value: ne }), b.displayName = ne);
          }
        }), j;
      }, t.isValidElement = Y, t.lazy = function(b) {
        return {
          $$typeof: qe,
          _payload: { _status: -1, _result: b },
          _init: xe
        };
      }, t.memo = function(b, j) {
        g(b) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          b === null ? "null" : typeof b
        ), j = {
          $$typeof: tr,
          type: b,
          compare: j === void 0 ? null : j
        };
        var X;
        return Object.defineProperty(j, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return X;
          },
          set: function(ne) {
            X = ne, b.name || b.displayName || (Object.defineProperty(b, "name", { value: ne }), b.displayName = ne);
          }
        }), j;
      }, t.startTransition = function(b) {
        var j = pe.T, X = {};
        pe.T = X, X._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var ne = b(), he = pe.S;
          he !== null && he(X, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(R, He);
        } catch (Se) {
          He(Se);
        } finally {
          j === null && X._updatedFibers && (b = X._updatedFibers.size, X._updatedFibers.clear(), 10 < b && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), pe.T = j;
        }
      }, t.unstable_useCacheRefresh = function() {
        return re().useCacheRefresh();
      }, t.use = function(b) {
        return re().use(b);
      }, t.useActionState = function(b, j, X) {
        return re().useActionState(
          b,
          j,
          X
        );
      }, t.useCallback = function(b, j) {
        return re().useCallback(b, j);
      }, t.useContext = function(b) {
        var j = re();
        return b.$$typeof === St && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), j.useContext(b);
      }, t.useDebugValue = function(b, j) {
        return re().useDebugValue(b, j);
      }, t.useDeferredValue = function(b, j) {
        return re().useDeferredValue(b, j);
      }, t.useEffect = function(b, j) {
        return re().useEffect(b, j);
      }, t.useId = function() {
        return re().useId();
      }, t.useImperativeHandle = function(b, j, X) {
        return re().useImperativeHandle(b, j, X);
      }, t.useInsertionEffect = function(b, j) {
        return re().useInsertionEffect(b, j);
      }, t.useLayoutEffect = function(b, j) {
        return re().useLayoutEffect(b, j);
      }, t.useMemo = function(b, j) {
        return re().useMemo(b, j);
      }, t.useOptimistic = function(b, j) {
        return re().useOptimistic(b, j);
      }, t.useReducer = function(b, j, X) {
        return re().useReducer(b, j, X);
      }, t.useRef = function(b) {
        return re().useRef(b);
      }, t.useState = function(b) {
        return re().useState(b);
      }, t.useSyncExternalStore = function(b, j, X) {
        return re().useSyncExternalStore(
          b,
          j,
          X
        );
      }, t.useTransition = function() {
        return re().useTransition();
      }, t.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(xi, xi.exports)), xi.exports;
}
process.env.NODE_ENV === "production" ? cu.exports = dE() : cu.exports = fE();
var f = cu.exports;
const Ie = /* @__PURE__ */ Uh(f), pE = /* @__PURE__ */ uE({
  __proto__: null,
  default: Ie
}, [f]);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp;
function hE() {
  return wp || (wp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(P) {
      if (P == null) return null;
      if (typeof P == "function")
        return P.$$typeof === xe ? null : P.displayName || P.name || null;
      if (typeof P == "string") return P;
      switch (P) {
        case V:
          return "Fragment";
        case $:
          return "Portal";
        case U:
          return "Profiler";
        case G:
          return "StrictMode";
        case W:
          return "Suspense";
        case Q:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (typeof P.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), P.$$typeof) {
          case H:
            return (P.displayName || "Context") + ".Provider";
          case Y:
            return (P._context.displayName || "Context") + ".Consumer";
          case Z:
            var oe = P.render;
            return P = P.displayName, P || (P = oe.displayName || oe.name || "", P = P !== "" ? "ForwardRef(" + P + ")" : "ForwardRef"), P;
          case ue:
            return oe = P.displayName || null, oe !== null ? oe : e(P.type) || "Memo";
          case ye:
            oe = P._payload, P = P._init;
            try {
              return e(P(oe));
            } catch {
            }
        }
      return null;
    }
    function t(P) {
      return "" + P;
    }
    function r(P) {
      try {
        t(P);
        var oe = !1;
      } catch {
        oe = !0;
      }
      if (oe) {
        oe = console;
        var se = oe.error, Ae = typeof Symbol == "function" && Symbol.toStringTag && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return se.call(
          oe,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Ae
        ), t(P);
      }
    }
    function o() {
    }
    function s() {
      if (ve === 0) {
        de = console.log, ce = console.info, et = console.warn, Fe = console.error, wt = console.group, er = console.groupCollapsed, St = console.groupEnd;
        var P = {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        };
        Object.defineProperties(console, {
          info: P,
          log: P,
          warn: P,
          error: P,
          group: P,
          groupCollapsed: P,
          groupEnd: P
        });
      }
      ve++;
    }
    function a() {
      if (ve--, ve === 0) {
        var P = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, P, { value: de }),
          info: L({}, P, { value: ce }),
          warn: L({}, P, { value: et }),
          error: L({}, P, { value: Fe }),
          group: L({}, P, { value: wt }),
          groupCollapsed: L({}, P, { value: er }),
          groupEnd: L({}, P, { value: St })
        });
      }
      0 > ve && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function u(P) {
      if (be === void 0)
        try {
          throw Error();
        } catch (se) {
          var oe = se.stack.trim().match(/\n( *(at )?)/);
          be = oe && oe[1] || "", kt = -1 < se.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < se.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + be + P + kt;
    }
    function l(P, oe) {
      if (!P || Je) return "";
      var se = lt.get(P);
      if (se !== void 0) return se;
      Je = !0, se = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Ae = null;
      Ae = re.H, re.H = null, s();
      try {
        var Ye = {
          DetermineComponentFrameRoot: function() {
            try {
              if (oe) {
                var Mt = function() {
                  throw Error();
                };
                if (Object.defineProperty(Mt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Mt, []);
                  } catch (At) {
                    var cr = At;
                  }
                  Reflect.construct(P, [], Mt);
                } else {
                  try {
                    Mt.call();
                  } catch (At) {
                    cr = At;
                  }
                  P.call(Mt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (At) {
                  cr = At;
                }
                (Mt = P()) && typeof Mt.catch == "function" && Mt.catch(function() {
                });
              }
            } catch (At) {
              if (At && cr && typeof At.stack == "string")
                return [At.stack, cr.stack];
            }
            return [null, null];
          }
        };
        Ye.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var Ue = Object.getOwnPropertyDescriptor(
          Ye.DetermineComponentFrameRoot,
          "name"
        );
        Ue && Ue.configurable && Object.defineProperty(
          Ye.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Ee = Ye.DetermineComponentFrameRoot(), pe = Ee[0], xt = Ee[1];
        if (pe && xt) {
          var ct = pe.split(`
`), Et = xt.split(`
`);
          for (Ee = Ue = 0; Ue < ct.length && !ct[Ue].includes(
            "DetermineComponentFrameRoot"
          ); )
            Ue++;
          for (; Ee < Et.length && !Et[Ee].includes(
            "DetermineComponentFrameRoot"
          ); )
            Ee++;
          if (Ue === ct.length || Ee === Et.length)
            for (Ue = ct.length - 1, Ee = Et.length - 1; 1 <= Ue && 0 <= Ee && ct[Ue] !== Et[Ee]; )
              Ee--;
          for (; 1 <= Ue && 0 <= Ee; Ue--, Ee--)
            if (ct[Ue] !== Et[Ee]) {
              if (Ue !== 1 || Ee !== 1)
                do
                  if (Ue--, Ee--, 0 > Ee || ct[Ue] !== Et[Ee]) {
                    var rr = `
` + ct[Ue].replace(
                      " at new ",
                      " at "
                    );
                    return P.displayName && rr.includes("<anonymous>") && (rr = rr.replace("<anonymous>", P.displayName)), typeof P == "function" && lt.set(P, rr), rr;
                  }
                while (1 <= Ue && 0 <= Ee);
              break;
            }
        }
      } finally {
        Je = !1, re.H = Ae, a(), Error.prepareStackTrace = se;
      }
      return ct = (ct = P ? P.displayName || P.name : "") ? u(ct) : "", typeof P == "function" && lt.set(P, ct), ct;
    }
    function d(P) {
      if (P == null) return "";
      if (typeof P == "function") {
        var oe = P.prototype;
        return l(
          P,
          !(!oe || !oe.isReactComponent)
        );
      }
      if (typeof P == "string") return u(P);
      switch (P) {
        case W:
          return u("Suspense");
        case Q:
          return u("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case Z:
            return P = l(P.render, !1), P;
          case ue:
            return d(P.type);
          case ye:
            oe = P._payload, P = P._init;
            try {
              return d(P(oe));
            } catch {
            }
        }
      return "";
    }
    function p() {
      var P = re.A;
      return P === null ? null : P.getOwner();
    }
    function m(P) {
      if (R.call(P, "key")) {
        var oe = Object.getOwnPropertyDescriptor(P, "key").get;
        if (oe && oe.isReactWarning) return !1;
      }
      return P.key !== void 0;
    }
    function g(P, oe) {
      function se() {
        qe || (qe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          oe
        ));
      }
      se.isReactWarning = !0, Object.defineProperty(P, "key", {
        get: se,
        configurable: !0
      });
    }
    function v() {
      var P = e(this.type);
      return ht[P] || (ht[P] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), P = this.props.ref, P !== void 0 ? P : null;
    }
    function S(P, oe, se, Ae, Ye, Ue) {
      return se = Ue.ref, P = {
        $$typeof: N,
        type: P,
        key: oe,
        props: Ue,
        _owner: Ye
      }, (se !== void 0 ? se : null) !== null ? Object.defineProperty(P, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(P, "ref", { enumerable: !1, value: null }), P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(P, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    }
    function _(P, oe, se, Ae, Ye, Ue) {
      if (typeof P == "string" || typeof P == "function" || P === V || P === U || P === G || P === W || P === Q || P === ee || typeof P == "object" && P !== null && (P.$$typeof === ye || P.$$typeof === ue || P.$$typeof === H || P.$$typeof === Y || P.$$typeof === Z || P.$$typeof === ie || P.getModuleId !== void 0)) {
        var Ee = oe.children;
        if (Ee !== void 0)
          if (Ae)
            if (le(Ee)) {
              for (Ae = 0; Ae < Ee.length; Ae++)
                T(Ee[Ae], P);
              Object.freeze && Object.freeze(Ee);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else T(Ee, P);
      } else
        Ee = "", (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), P === null ? Ae = "null" : le(P) ? Ae = "array" : P !== void 0 && P.$$typeof === N ? (Ae = "<" + (e(P.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof P, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          Ae,
          Ee
        );
      if (R.call(oe, "key")) {
        Ee = e(P);
        var pe = Object.keys(oe).filter(function(ct) {
          return ct !== "key";
        });
        Ae = 0 < pe.length ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}", yr[Ee + Ae] || (pe = 0 < pe.length ? "{" + pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Ae,
          Ee,
          pe,
          Ee
        ), yr[Ee + Ae] = !0);
      }
      if (Ee = null, se !== void 0 && (r(se), Ee = "" + se), m(oe) && (r(oe.key), Ee = "" + oe.key), "key" in oe) {
        se = {};
        for (var xt in oe)
          xt !== "key" && (se[xt] = oe[xt]);
      } else se = oe;
      return Ee && g(
        se,
        typeof P == "function" ? P.displayName || P.name || "Unknown" : P
      ), S(P, Ee, Ue, Ye, p(), se);
    }
    function T(P, oe) {
      if (typeof P == "object" && P && P.$$typeof !== tr) {
        if (le(P))
          for (var se = 0; se < P.length; se++) {
            var Ae = P[se];
            C(Ae) && A(Ae, oe);
          }
        else if (C(P))
          P._store && (P._store.validated = 1);
        else if (P === null || typeof P != "object" ? se = null : (se = me && P[me] || P["@@iterator"], se = typeof se == "function" ? se : null), typeof se == "function" && se !== P.entries && (se = se.call(P), se !== P))
          for (; !(P = se.next()).done; )
            C(P.value) && A(P.value, oe);
      }
    }
    function C(P) {
      return typeof P == "object" && P !== null && P.$$typeof === N;
    }
    function A(P, oe) {
      if (P._store && !P._store.validated && P.key == null && (P._store.validated = 1, oe = k(oe), !Lt[oe])) {
        Lt[oe] = !0;
        var se = "";
        P && P._owner != null && P._owner !== p() && (se = null, typeof P._owner.tag == "number" ? se = e(P._owner.type) : typeof P._owner.name == "string" && (se = P._owner.name), se = " It was passed a child from " + se + ".");
        var Ae = re.getCurrentStack;
        re.getCurrentStack = function() {
          var Ye = d(P.type);
          return Ae && (Ye += Ae() || ""), Ye;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          oe,
          se
        ), re.getCurrentStack = Ae;
      }
    }
    function k(P) {
      var oe = "", se = p();
      return se && (se = e(se.type)) && (oe = `

Check the render method of \`` + se + "`."), oe || (P = e(P)) && (oe = `

Check the top-level render call using <` + P + ">."), oe;
    }
    var O = f, N = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), H = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), me = Symbol.iterator, xe = Symbol.for("react.client.reference"), re = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, L = Object.assign, ie = Symbol.for("react.client.reference"), le = Array.isArray, ve = 0, de, ce, et, Fe, wt, er, St;
    o.__reactDisabledLog = !0;
    var be, kt, Je = !1, lt = new (typeof WeakMap == "function" ? WeakMap : Map)(), tr = Symbol.for("react.client.reference"), qe, ht = {}, yr = {}, Lt = {};
    gi.Fragment = V, gi.jsx = function(P, oe, se, Ae, Ye) {
      return _(P, oe, se, !1, Ae, Ye);
    }, gi.jsxs = function(P, oe, se, Ae, Ye) {
      return _(P, oe, se, !0, Ae, Ye);
    };
  }()), gi;
}
process.env.NODE_ENV === "production" ? au.exports = lE() : au.exports = hE();
var y = au.exports;
function Sp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Hh(...e) {
  return (t) => {
    let r = !1;
    const o = e.map((s) => {
      const a = Sp(s, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : Sp(e[s], null);
        }
      };
  };
}
function Jt(...e) {
  return f.useCallback(Hh(...e), e);
}
var Mo = f.forwardRef((e, t) => {
  const { children: r, ...o } = e, s = f.Children.toArray(r), a = s.find(gE);
  if (a) {
    const u = a.props.children, l = s.map((d) => d === a ? f.Children.count(u) > 1 ? f.Children.only(null) : f.isValidElement(u) ? u.props.children : null : d);
    return /* @__PURE__ */ y.jsx(uu, { ...o, ref: t, children: f.isValidElement(u) ? f.cloneElement(u, void 0, l) : null });
  }
  return /* @__PURE__ */ y.jsx(uu, { ...o, ref: t, children: r });
});
Mo.displayName = "Slot";
var uu = f.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  if (f.isValidElement(r)) {
    const s = yE(r), a = vE(o, r.props);
    return r.type !== f.Fragment && (a.ref = t ? Hh(t, s) : s), f.cloneElement(r, a);
  }
  return f.Children.count(r) > 1 ? f.Children.only(null) : null;
});
uu.displayName = "SlotClone";
var mE = ({ children: e }) => /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
function gE(e) {
  return f.isValidElement(e) && e.type === mE;
}
function vE(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? r[o] = (...l) => {
      a(...l), s(...l);
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...a } : o === "className" && (r[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function yE(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var bE = Mo;
function Wh(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Wh(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Bh() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Wh(e)) && (o && (o += " "), o += t);
  return o;
}
const xp = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ep = Bh, wE = (e, t) => (r) => {
  var o;
  if (t?.variants == null) return Ep(e, r?.class, r?.className);
  const { variants: s, defaultVariants: a } = t, u = Object.keys(s).map((p) => {
    const m = r?.[p], g = a?.[p];
    if (m === null) return null;
    const v = xp(m) || xp(g);
    return s[p][v];
  }), l = r && Object.entries(r).reduce((p, m) => {
    let [g, v] = m;
    return v === void 0 || (p[g] = v), p;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, m) => {
    let { class: g, className: v, ...S } = m;
    return Object.entries(S).every((_) => {
      let [T, C] = _;
      return Array.isArray(C) ? C.includes({
        ...a,
        ...l
      }[T]) : {
        ...a,
        ...l
      }[T] === C;
    }) ? [
      ...p,
      g,
      v
    ] : p;
  }, []);
  return Ep(e, u, d, r?.class, r?.className);
}, Ku = "-", SE = (e) => {
  const t = EE(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Ku);
      return l[0] === "" && l.length !== 1 && l.shift(), Yh(l, t) || xE(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const d = r[u] || [];
      return l && o[u] ? [...d, ...o[u]] : d;
    }
  };
}, Yh = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? Yh(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const a = e.join(Ku);
  return t.validators.find(({
    validator: u
  }) => u(a))?.classGroupId;
}, _p = /^\[(.+)\]$/, xE = (e) => {
  if (_p.test(e)) {
    const t = _p.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, EE = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return CE(Object.entries(e.classGroups), r).forEach(([a, u]) => {
    lu(u, o, a, t);
  }), o;
}, lu = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? t : Cp(t, s);
      a.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (_E(s)) {
        lu(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([a, u]) => {
      lu(u, Cp(t, a), r, o);
    });
  });
}, Cp = (e, t) => {
  let r = e;
  return t.split(Ku).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, _E = (e) => e.isThemeGetter, CE = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([u, l]) => [t + u, l])) : a);
  return [r, s];
}) : e, TE = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (a, u) => {
    r.set(a, u), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let u = r.get(a);
      if (u !== void 0)
        return u;
      if ((u = o.get(a)) !== void 0)
        return s(a, u), u;
    },
    set(a, u) {
      r.has(a) ? r.set(a, u) : s(a, u);
    }
  };
}, Gh = "!", IE = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, s = t[0], a = t.length, u = (l) => {
    const d = [];
    let p = 0, m = 0, g;
    for (let C = 0; C < l.length; C++) {
      let A = l[C];
      if (p === 0) {
        if (A === s && (o || l.slice(C, C + a) === t)) {
          d.push(l.slice(m, C)), m = C + a;
          continue;
        }
        if (A === "/") {
          g = C;
          continue;
        }
      }
      A === "[" ? p++ : A === "]" && p--;
    }
    const v = d.length === 0 ? l : l.substring(m), S = v.startsWith(Gh), _ = S ? v.substring(1) : v, T = g && g > m ? g - m : void 0;
    return {
      modifiers: d,
      hasImportantModifier: S,
      baseClassName: _,
      maybePostfixModifierPosition: T
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: u
  }) : u;
}, kE = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, AE = (e) => ({
  cache: TE(e.cacheSize),
  parseClassName: IE(e),
  ...SE(e)
}), RE = /\s+/, PE = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, a = [], u = e.trim().split(RE);
  let l = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const p = u[d], {
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: S
    } = r(p);
    let _ = !!S, T = o(_ ? v.substring(0, S) : v);
    if (!T) {
      if (!_) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (T = o(v), !T) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      _ = !1;
    }
    const C = kE(m).join(":"), A = g ? C + Gh : C, k = A + T;
    if (a.includes(k))
      continue;
    a.push(k);
    const O = s(T, _);
    for (let N = 0; N < O.length; ++N) {
      const $ = O[N];
      a.push(A + $);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ME() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = qh(t)) && (o && (o += " "), o += r);
  return o;
}
const qh = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = qh(e[o])) && (r && (r += " "), r += t);
  return r;
};
function OE(e, ...t) {
  let r, o, s, a = u;
  function u(d) {
    const p = t.reduce((m, g) => g(m), e());
    return r = AE(p), o = r.cache.get, s = r.cache.set, a = l, l(d);
  }
  function l(d) {
    const p = o(d);
    if (p)
      return p;
    const m = PE(d, r);
    return s(d, m), m;
  }
  return function() {
    return a(ME.apply(null, arguments));
  };
}
const it = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Xh = /^\[(?:([a-z-]+):)?(.+)\]$/i, NE = /^\d+\/\d+$/, jE = /* @__PURE__ */ new Set(["px", "full", "screen"]), DE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, LE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, FE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, $E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, VE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, an = (e) => Po(e) || jE.has(e) || NE.test(e), Sn = (e) => jo(e, "length", qE), Po = (e) => !!e && !Number.isNaN(Number(e)), Wc = (e) => jo(e, "number", Po), vi = (e) => !!e && Number.isInteger(Number(e)), zE = (e) => e.endsWith("%") && Po(e.slice(0, -1)), Ne = (e) => Xh.test(e), xn = (e) => DE.test(e), UE = /* @__PURE__ */ new Set(["length", "size", "percentage"]), HE = (e) => jo(e, UE, Kh), WE = (e) => jo(e, "position", Kh), BE = /* @__PURE__ */ new Set(["image", "url"]), YE = (e) => jo(e, BE, KE), GE = (e) => jo(e, "", XE), yi = () => !0, jo = (e, t, r) => {
  const o = Xh.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, qE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  LE.test(e) && !FE.test(e)
), Kh = () => !1, XE = (e) => $E.test(e), KE = (e) => VE.test(e), ZE = () => {
  const e = it("colors"), t = it("spacing"), r = it("blur"), o = it("brightness"), s = it("borderColor"), a = it("borderRadius"), u = it("borderSpacing"), l = it("borderWidth"), d = it("contrast"), p = it("grayscale"), m = it("hueRotate"), g = it("invert"), v = it("gap"), S = it("gradientColorStops"), _ = it("gradientColorStopPositions"), T = it("inset"), C = it("margin"), A = it("opacity"), k = it("padding"), O = it("saturate"), N = it("scale"), $ = it("sepia"), V = it("skew"), G = it("space"), U = it("translate"), Y = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", Ne, t], W = () => [Ne, t], Q = () => ["", an, Sn], ue = () => ["auto", Po, Ne], ye = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], xe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], re = () => ["", "0", Ne], R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [Po, Ne];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [yi],
      spacing: [an, Sn],
      blur: ["none", "", xn, Ne],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", xn, Ne],
      borderSpacing: W(),
      borderWidth: Q(),
      contrast: L(),
      grayscale: re(),
      hueRotate: L(),
      invert: re(),
      gap: W(),
      gradientColorStops: [e],
      gradientColorStopPositions: [zE, Sn],
      inset: Z(),
      margin: Z(),
      opacity: L(),
      padding: W(),
      saturate: L(),
      scale: L(),
      sepia: re(),
      skew: L(),
      space: W(),
      translate: W()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ne]
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
        columns: [xn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
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
        object: [...ye(), Ne]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
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
        inset: [T]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [T]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [T]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [T]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [T]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [T]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [T]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [T]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [T]
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
        z: ["auto", vi, Ne]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Z()
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
        flex: ["1", "auto", "initial", "none", Ne]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", vi, Ne]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [yi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", vi, Ne]
        }, Ne]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [yi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [vi, Ne]
        }, Ne]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
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
        "auto-cols": ["auto", "min", "max", "fr", Ne]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ne]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...xe()]
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
        content: ["normal", ...xe(), "baseline"]
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
        "place-content": [...xe(), "baseline"]
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [G]
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
        "space-y": [G]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ne, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ne, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ne, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [xn]
        }, xn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ne, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ne, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", xn, Sn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yi]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ne]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Po, Wc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, Ne]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ne]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ne]
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
        "placeholder-opacity": [A]
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
        "text-opacity": [A]
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", an, Sn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", an, Ne]
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
        indent: W()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ne]
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
        content: ["none", Ne]
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
        "bg-opacity": [A]
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
        bg: [...ye(), WE]
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
        bg: ["auto", "cover", "contain", HE]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, YE]
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
        from: [_]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [_]
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
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ee(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ee()
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
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [an, Ne]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [an, Sn]
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
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [an, Sn]
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
        shadow: ["", "inner", "none", xn, GE]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [yi]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...me(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": me()
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
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", xn, Ne]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
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
        invert: [g]
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
        sepia: [$]
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
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
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
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
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
        "backdrop-sepia": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ne]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: L()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ne]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: L()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ne]
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
        scale: [N]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [N]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [N]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [vi, Ne]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ne]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ne]
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
        "scroll-m": W()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": W()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": W()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": W()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": W()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": W()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": W()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": W()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": W()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": W()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": W()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": W()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": W()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": W()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": W()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": W()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": W()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": W()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ne]
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
        stroke: [an, Sn, Wc]
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
}, JE = /* @__PURE__ */ OE(ZE);
function ro(...e) {
  return JE(Bh(e));
}
function kA(e, t = {}) {
  const { decimals: r = 0, sizeType: o = "normal" } = t, s = ["Bytes", "KB", "MB", "GB", "TB"], a = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (e === 0) return "0 Byte";
  const u = Math.floor(Math.log(e) / Math.log(1024));
  return `${(e / Math.pow(1024, u)).toFixed(r)} ${o === "accurate" ? a[u] ?? "Bytest" : s[u] ?? "Bytes"}`;
}
const QE = wE(
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
), Zt = f.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...s }, a) => {
    const u = o ? Mo : "button";
    return /* @__PURE__ */ y.jsx(
      u,
      {
        className: ro(QE({ variant: t, size: r, className: e })),
        ref: a,
        ...s
      }
    );
  }
);
Zt.displayName = "Button";
function Zu(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function pt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e?.(s), r === !1 || !s.defaultPrevented)
      return t?.(s);
  };
}
function Li(e, t = []) {
  let r = [];
  function o(a, u) {
    const l = f.createContext(u), d = r.length;
    r = [...r, u];
    const p = (g) => {
      const { scope: v, children: S, ..._ } = g, T = v?.[e]?.[d] || l, C = f.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ y.jsx(T.Provider, { value: C, children: S });
    };
    p.displayName = a + "Provider";
    function m(g, v) {
      const S = v?.[e]?.[d] || l, _ = f.useContext(S);
      if (_) return _;
      if (u !== void 0) return u;
      throw new Error(`\`${g}\` must be used within \`${a}\``);
    }
    return [p, m];
  }
  const s = () => {
    const a = r.map((u) => f.createContext(u));
    return function(l) {
      const d = l?.[e] || a;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: d } }),
        [l, d]
      );
    };
  };
  return s.scopeName = e, [o, e_(s, ...t)];
}
function e_(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const u = o.reduce((l, { useScope: d, scopeName: p }) => {
        const g = d(a)[`__scope${p}`];
        return { ...l, ...g };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function zr(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...r) => t.current?.(...r), []);
}
function Ju({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [o, s] = t_({ defaultProp: t, onChange: r }), a = e !== void 0, u = a ? e : o, l = zr(r), d = f.useCallback(
    (p) => {
      if (a) {
        const g = typeof p == "function" ? p(e) : p;
        g !== e && l(g);
      } else
        s(p);
    },
    [a, e, s, l]
  );
  return [u, d];
}
function t_({
  defaultProp: e,
  onChange: t
}) {
  const r = f.useState(e), [o] = r, s = f.useRef(o), a = zr(t);
  return f.useEffect(() => {
    s.current !== o && (a(o), s.current = o);
  }, [o, s, a]), r;
}
var r_ = f.createContext(void 0);
function aa(e) {
  const t = f.useContext(r_);
  return e || t || "ltr";
}
function n_(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ai = globalThis?.document ? f.useLayoutEffect : () => {
};
function o_(e) {
  const [t, r] = f.useState(void 0);
  return Ai(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let u, l;
        if ("borderBoxSize" in a) {
          const d = a.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          u = p.inlineSize, l = p.blockSize;
        } else
          u = e.offsetWidth, l = e.offsetHeight;
        r({ width: u, height: l });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var du = { exports: {} }, zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tp;
function i_() {
  if (Tp) return zt;
  Tp = 1;
  var e = f;
  function t(d) {
    var p = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        p += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + d + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
    d: {
      f: r,
      r: function() {
        throw Error(t(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function a(d, p, m) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: g == null ? null : "" + g,
      children: d,
      containerInfo: p,
      implementation: m
    };
  }
  var u = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function l(d, p) {
    if (d === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, zt.createPortal = function(d, p) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(t(299));
    return a(d, p, null, m);
  }, zt.flushSync = function(d) {
    var p = u.T, m = o.p;
    try {
      if (u.T = null, o.p = 2, d) return d();
    } finally {
      u.T = p, o.p = m, o.d.f();
    }
  }, zt.preconnect = function(d, p) {
    typeof d == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(d, p));
  }, zt.prefetchDNS = function(d) {
    typeof d == "string" && o.d.D(d);
  }, zt.preinit = function(d, p) {
    if (typeof d == "string" && p && typeof p.as == "string") {
      var m = p.as, g = l(m, p.crossOrigin), v = typeof p.integrity == "string" ? p.integrity : void 0, S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      m === "style" ? o.d.S(
        d,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: g,
          integrity: v,
          fetchPriority: S
        }
      ) : m === "script" && o.d.X(d, {
        crossOrigin: g,
        integrity: v,
        fetchPriority: S,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, zt.preinitModule = function(d, p) {
    if (typeof d == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var m = l(
            p.as,
            p.crossOrigin
          );
          o.d.M(d, {
            crossOrigin: m,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(d);
  }, zt.preload = function(d, p) {
    if (typeof d == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var m = p.as, g = l(m, p.crossOrigin);
      o.d.L(d, m, {
        crossOrigin: g,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, zt.preloadModule = function(d, p) {
    if (typeof d == "string")
      if (p) {
        var m = l(p.as, p.crossOrigin);
        o.d.m(d, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: m,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(d);
  }, zt.requestFormReset = function(d) {
    o.d.r(d);
  }, zt.unstable_batchedUpdates = function(d, p) {
    return d(p);
  }, zt.useFormState = function(d, p, m) {
    return u.H.useFormState(d, p, m);
  }, zt.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, zt.version = "19.0.0", zt;
}
var Ut = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function s_() {
  return Ip || (Ip = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(g) {
      return "" + g;
    }
    function r(g, v, S) {
      var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(_);
        var T = !1;
      } catch {
        T = !0;
      }
      return T && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object"
      ), t(_)), {
        $$typeof: p,
        key: _ == null ? null : "" + _,
        children: g,
        containerInfo: v,
        implementation: S
      };
    }
    function o(g, v) {
      if (g === "font") return "";
      if (typeof v == "string")
        return v === "use-credentials" ? v : "";
    }
    function s(g) {
      return g === null ? "`null`" : g === void 0 ? "`undefined`" : g === "" ? "an empty string" : 'something with type "' + typeof g + '"';
    }
    function a(g) {
      return g === null ? "`null`" : g === void 0 ? "`undefined`" : g === "" ? "an empty string" : typeof g == "string" ? JSON.stringify(g) : typeof g == "number" ? "`" + g + "`" : 'something with type "' + typeof g + '"';
    }
    function u() {
      var g = m.H;
      return g === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), g;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var l = f, d = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, p = Symbol.for("react.portal"), m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Ut.createPortal = function(g, v) {
      var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return r(g, v, null, S);
    }, Ut.flushSync = function(g) {
      var v = m.T, S = d.p;
      try {
        if (m.T = null, d.p = 2, g)
          return g();
      } finally {
        m.T = v, d.p = S, d.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ut.preconnect = function(g, v) {
      typeof g == "string" && g ? v != null && typeof v != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        a(v)
      ) : v != null && typeof v.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        s(v.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        s(g)
      ), typeof g == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, d.d.C(g, v));
    }, Ut.prefetchDNS = function(g) {
      if (typeof g != "string" || !g)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          s(g)
        );
      else if (1 < arguments.length) {
        var v = arguments[1];
        typeof v == "object" && v.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(v)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(v)
        );
      }
      typeof g == "string" && d.d.D(g);
    }, Ut.preinit = function(g, v) {
      if (typeof g == "string" && g ? v == null || typeof v != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        a(v)
      ) : v.as !== "style" && v.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        a(v.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        s(g)
      ), typeof g == "string" && v && typeof v.as == "string") {
        var S = v.as, _ = o(S, v.crossOrigin), T = typeof v.integrity == "string" ? v.integrity : void 0, C = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        S === "style" ? d.d.S(
          g,
          typeof v.precedence == "string" ? v.precedence : void 0,
          {
            crossOrigin: _,
            integrity: T,
            fetchPriority: C
          }
        ) : S === "script" && d.d.X(g, {
          crossOrigin: _,
          integrity: T,
          fetchPriority: C,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0
        });
      }
    }, Ut.preinitModule = function(g, v) {
      var S = "";
      if (typeof g == "string" && g || (S += " The `href` argument encountered was " + s(g) + "."), v !== void 0 && typeof v != "object" ? S += " The `options` argument encountered was " + s(v) + "." : v && "as" in v && v.as !== "script" && (S += " The `as` option encountered was " + a(v.as) + "."), S)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          S
        );
      else
        switch (S = v && typeof v.as == "string" ? v.as : "script", S) {
          case "script":
            break;
          default:
            S = a(S), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              S,
              g
            );
        }
      typeof g == "string" && (typeof v == "object" && v !== null ? (v.as == null || v.as === "script") && (S = o(
        v.as,
        v.crossOrigin
      ), d.d.M(g, {
        crossOrigin: S,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      })) : v == null && d.d.M(g));
    }, Ut.preload = function(g, v) {
      var S = "";
      if (typeof g == "string" && g || (S += " The `href` argument encountered was " + s(g) + "."), v == null || typeof v != "object" ? S += " The `options` argument encountered was " + s(v) + "." : typeof v.as == "string" && v.as || (S += " The `as` option encountered was " + s(v.as) + "."), S && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        S
      ), typeof g == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
        S = v.as;
        var _ = o(
          S,
          v.crossOrigin
        );
        d.d.L(g, S, {
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0
        });
      }
    }, Ut.preloadModule = function(g, v) {
      var S = "";
      typeof g == "string" && g || (S += " The `href` argument encountered was " + s(g) + "."), v !== void 0 && typeof v != "object" ? S += " The `options` argument encountered was " + s(v) + "." : v && "as" in v && typeof v.as != "string" && (S += " The `as` option encountered was " + s(v.as) + "."), S && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        S
      ), typeof g == "string" && (v ? (S = o(
        v.as,
        v.crossOrigin
      ), d.d.m(g, {
        as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
        crossOrigin: S,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0
      })) : d.d.m(g));
    }, Ut.requestFormReset = function(g) {
      d.d.r(g);
    }, Ut.unstable_batchedUpdates = function(g, v) {
      return g(v);
    }, Ut.useFormState = function(g, v, S) {
      return u().useFormState(g, v, S);
    }, Ut.useFormStatus = function() {
      return u().useHostTransitionStatus();
    }, Ut.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ut;
}
function Zh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zh);
    } catch (e) {
      console.error(e);
    }
  }
}
process.env.NODE_ENV === "production" ? (Zh(), du.exports = i_()) : du.exports = s_();
var fu = du.exports, a_ = [
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
], Qt = a_.reduce((e, t) => {
  const r = f.forwardRef((o, s) => {
    const { asChild: a, ...u } = o, l = a ? Mo : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(l, { ...u, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Jh(e) {
  const t = e + "CollectionProvider", [r, o] = Li(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), u = (S) => {
    const { scope: _, children: T } = S, C = Ie.useRef(null), A = Ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y.jsx(s, { scope: _, itemMap: A, collectionRef: C, children: T });
  };
  u.displayName = t;
  const l = e + "CollectionSlot", d = Ie.forwardRef(
    (S, _) => {
      const { scope: T, children: C } = S, A = a(l, T), k = Jt(_, A.collectionRef);
      return /* @__PURE__ */ y.jsx(Mo, { ref: k, children: C });
    }
  );
  d.displayName = l;
  const p = e + "CollectionItemSlot", m = "data-radix-collection-item", g = Ie.forwardRef(
    (S, _) => {
      const { scope: T, children: C, ...A } = S, k = Ie.useRef(null), O = Jt(_, k), N = a(p, T);
      return Ie.useEffect(() => (N.itemMap.set(k, { ref: k, ...A }), () => void N.itemMap.delete(k))), /* @__PURE__ */ y.jsx(Mo, { [m]: "", ref: O, children: C });
    }
  );
  g.displayName = p;
  function v(S) {
    const _ = a(e + "CollectionConsumer", S);
    return Ie.useCallback(() => {
      const C = _.collectionRef.current;
      if (!C) return [];
      const A = Array.from(C.querySelectorAll(`[${m}]`));
      return Array.from(_.itemMap.values()).sort(
        (N, $) => A.indexOf(N.ref.current) - A.indexOf($.ref.current)
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [
    { Provider: u, Slot: d, ItemSlot: g },
    v,
    o
  ];
}
var Qh = ["PageUp", "PageDown"], em = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], tm = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Do = "Slider", [pu, c_, u_] = Jh(Do), [rm, AA] = Li(Do, [
  u_
]), [l_, ca] = rm(Do), nm = f.forwardRef(
  (e, t) => {
    const {
      name: r,
      min: o = 0,
      max: s = 100,
      step: a = 1,
      orientation: u = "horizontal",
      disabled: l = !1,
      minStepsBetweenThumbs: d = 0,
      defaultValue: p = [o],
      value: m,
      onValueChange: g = () => {
      },
      onValueCommit: v = () => {
      },
      inverted: S = !1,
      form: _,
      ...T
    } = e, C = f.useRef(/* @__PURE__ */ new Set()), A = f.useRef(0), O = u === "horizontal" ? d_ : f_, [N = [], $] = Ju({
      prop: m,
      defaultProp: p,
      onChange: (Z) => {
        [...C.current][A.current]?.focus(), g(Z);
      }
    }), V = f.useRef(N);
    function G(Z) {
      const W = v_(N, Z);
      H(Z, W);
    }
    function U(Z) {
      H(Z, A.current);
    }
    function Y() {
      const Z = V.current[A.current];
      N[A.current] !== Z && v(N);
    }
    function H(Z, W, { commit: Q } = { commit: !1 }) {
      const ue = S_(a), ye = x_(Math.round((Z - o) / a) * a + o, ue), ee = Zu(ye, [o, s]);
      $((me = []) => {
        const xe = m_(me, ee, W);
        if (w_(xe, d * a)) {
          A.current = xe.indexOf(ee);
          const re = String(xe) !== String(me);
          return re && Q && v(xe), re ? xe : me;
        } else
          return me;
      });
    }
    return /* @__PURE__ */ y.jsx(
      l_,
      {
        scope: e.__scopeSlider,
        name: r,
        disabled: l,
        min: o,
        max: s,
        valueIndexToChangeRef: A,
        thumbs: C.current,
        values: N,
        orientation: u,
        form: _,
        children: /* @__PURE__ */ y.jsx(pu.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ y.jsx(pu.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ y.jsx(
          O,
          {
            "aria-disabled": l,
            "data-disabled": l ? "" : void 0,
            ...T,
            ref: t,
            onPointerDown: pt(T.onPointerDown, () => {
              l || (V.current = N);
            }),
            min: o,
            max: s,
            inverted: S,
            onSlideStart: l ? void 0 : G,
            onSlideMove: l ? void 0 : U,
            onSlideEnd: l ? void 0 : Y,
            onHomeKeyDown: () => !l && H(o, 0, { commit: !0 }),
            onEndKeyDown: () => !l && H(s, N.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: Z, direction: W }) => {
              if (!l) {
                const ye = Qh.includes(Z.key) || Z.shiftKey && em.includes(Z.key) ? 10 : 1, ee = A.current, me = N[ee], xe = a * ye * W;
                H(me + xe, ee, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
nm.displayName = Do;
var [om, im] = rm(Do, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), d_ = f.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: o,
      dir: s,
      inverted: a,
      onSlideStart: u,
      onSlideMove: l,
      onSlideEnd: d,
      onStepKeyDown: p,
      ...m
    } = e, [g, v] = f.useState(null), S = Jt(t, (O) => v(O)), _ = f.useRef(void 0), T = aa(s), C = T === "ltr", A = C && !a || !C && a;
    function k(O) {
      const N = _.current || g.getBoundingClientRect(), $ = [0, N.width], G = Qu($, A ? [r, o] : [o, r]);
      return _.current = N, G(O - N.left);
    }
    return /* @__PURE__ */ y.jsx(
      om,
      {
        scope: e.__scopeSlider,
        startEdge: A ? "left" : "right",
        endEdge: A ? "right" : "left",
        direction: A ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ y.jsx(
          sm,
          {
            dir: T,
            "data-orientation": "horizontal",
            ...m,
            ref: S,
            style: {
              ...m.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (O) => {
              const N = k(O.clientX);
              u?.(N);
            },
            onSlideMove: (O) => {
              const N = k(O.clientX);
              l?.(N);
            },
            onSlideEnd: () => {
              _.current = void 0, d?.();
            },
            onStepKeyDown: (O) => {
              const $ = tm[A ? "from-left" : "from-right"].includes(O.key);
              p?.({ event: O, direction: $ ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), f_ = f.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: o,
      inverted: s,
      onSlideStart: a,
      onSlideMove: u,
      onSlideEnd: l,
      onStepKeyDown: d,
      ...p
    } = e, m = f.useRef(null), g = Jt(t, m), v = f.useRef(void 0), S = !s;
    function _(T) {
      const C = v.current || m.current.getBoundingClientRect(), A = [0, C.height], O = Qu(A, S ? [o, r] : [r, o]);
      return v.current = C, O(T - C.top);
    }
    return /* @__PURE__ */ y.jsx(
      om,
      {
        scope: e.__scopeSlider,
        startEdge: S ? "bottom" : "top",
        endEdge: S ? "top" : "bottom",
        size: "height",
        direction: S ? 1 : -1,
        children: /* @__PURE__ */ y.jsx(
          sm,
          {
            "data-orientation": "vertical",
            ...p,
            ref: g,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (T) => {
              const C = _(T.clientY);
              a?.(C);
            },
            onSlideMove: (T) => {
              const C = _(T.clientY);
              u?.(C);
            },
            onSlideEnd: () => {
              v.current = void 0, l?.();
            },
            onStepKeyDown: (T) => {
              const A = tm[S ? "from-bottom" : "from-top"].includes(T.key);
              d?.({ event: T, direction: A ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), sm = f.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: r,
      onSlideStart: o,
      onSlideMove: s,
      onSlideEnd: a,
      onHomeKeyDown: u,
      onEndKeyDown: l,
      onStepKeyDown: d,
      ...p
    } = e, m = ca(Do, r);
    return /* @__PURE__ */ y.jsx(
      Qt.span,
      {
        ...p,
        ref: t,
        onKeyDown: pt(e.onKeyDown, (g) => {
          g.key === "Home" ? (u(g), g.preventDefault()) : g.key === "End" ? (l(g), g.preventDefault()) : Qh.concat(em).includes(g.key) && (d(g), g.preventDefault());
        }),
        onPointerDown: pt(e.onPointerDown, (g) => {
          const v = g.target;
          v.setPointerCapture(g.pointerId), g.preventDefault(), m.thumbs.has(v) ? v.focus() : o(g);
        }),
        onPointerMove: pt(e.onPointerMove, (g) => {
          g.target.hasPointerCapture(g.pointerId) && s(g);
        }),
        onPointerUp: pt(e.onPointerUp, (g) => {
          const v = g.target;
          v.hasPointerCapture(g.pointerId) && (v.releasePointerCapture(g.pointerId), a(g));
        })
      }
    );
  }
), am = "SliderTrack", cm = f.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...o } = e, s = ca(am, r);
    return /* @__PURE__ */ y.jsx(
      Qt.span,
      {
        "data-disabled": s.disabled ? "" : void 0,
        "data-orientation": s.orientation,
        ...o,
        ref: t
      }
    );
  }
);
cm.displayName = am;
var hu = "SliderRange", um = f.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...o } = e, s = ca(hu, r), a = im(hu, r), u = f.useRef(null), l = Jt(t, u), d = s.values.length, p = s.values.map(
      (v) => dm(v, s.min, s.max)
    ), m = d > 1 ? Math.min(...p) : 0, g = 100 - Math.max(...p);
    return /* @__PURE__ */ y.jsx(
      Qt.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: l,
        style: {
          ...e.style,
          [a.startEdge]: m + "%",
          [a.endEdge]: g + "%"
        }
      }
    );
  }
);
um.displayName = hu;
var mu = "SliderThumb", lm = f.forwardRef(
  (e, t) => {
    const r = c_(e.__scopeSlider), [o, s] = f.useState(null), a = Jt(t, (l) => s(l)), u = f.useMemo(
      () => o ? r().findIndex((l) => l.ref.current === o) : -1,
      [r, o]
    );
    return /* @__PURE__ */ y.jsx(p_, { ...e, ref: a, index: u });
  }
), p_ = f.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, index: o, name: s, ...a } = e, u = ca(mu, r), l = im(mu, r), [d, p] = f.useState(null), m = Jt(t, (k) => p(k)), g = d ? u.form || !!d.closest("form") : !0, v = o_(d), S = u.values[o], _ = S === void 0 ? 0 : dm(S, u.min, u.max), T = g_(o, u.values.length), C = v?.[l.size], A = C ? y_(C, _, l.direction) : 0;
    return f.useEffect(() => {
      if (d)
        return u.thumbs.add(d), () => {
          u.thumbs.delete(d);
        };
    }, [d, u.thumbs]), /* @__PURE__ */ y.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [l.startEdge]: `calc(${_}% + ${A}px)`
        },
        children: [
          /* @__PURE__ */ y.jsx(pu.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ y.jsx(
            Qt.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || T,
              "aria-valuemin": u.min,
              "aria-valuenow": S,
              "aria-valuemax": u.max,
              "aria-orientation": u.orientation,
              "data-orientation": u.orientation,
              "data-disabled": u.disabled ? "" : void 0,
              tabIndex: u.disabled ? void 0 : 0,
              ...a,
              ref: m,
              style: S === void 0 ? { display: "none" } : e.style,
              onFocus: pt(e.onFocus, () => {
                u.valueIndexToChangeRef.current = o;
              })
            }
          ) }),
          g && /* @__PURE__ */ y.jsx(
            h_,
            {
              name: s ?? (u.name ? u.name + (u.values.length > 1 ? "[]" : "") : void 0),
              form: u.form,
              value: S
            },
            o
          )
        ]
      }
    );
  }
);
lm.displayName = mu;
var h_ = (e) => {
  const { value: t, ...r } = e, o = f.useRef(null), s = n_(t);
  return f.useEffect(() => {
    const a = o.current, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
    if (s !== t && d) {
      const p = new Event("input", { bubbles: !0 });
      d.call(a, t), a.dispatchEvent(p);
    }
  }, [s, t]), /* @__PURE__ */ y.jsx("input", { style: { display: "none" }, ...r, ref: o, defaultValue: t });
};
function m_(e = [], t, r) {
  const o = [...e];
  return o[r] = t, o.sort((s, a) => s - a);
}
function dm(e, t, r) {
  const a = 100 / (r - t) * (e - t);
  return Zu(a, [0, 100]);
}
function g_(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function v_(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((s) => Math.abs(s - t)), o = Math.min(...r);
  return r.indexOf(o);
}
function y_(e, t, r) {
  const o = e / 2, a = Qu([0, 50], [0, o]);
  return (o - a(t) * r) * r;
}
function b_(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function w_(e, t) {
  if (t > 0) {
    const r = b_(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function Qu(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (r - e[0]);
  };
}
function S_(e) {
  return (String(e).split(".")[1] || "").length;
}
function x_(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var fm = nm, E_ = cm, __ = um, C_ = lm;
const T_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsxs(
  fm,
  {
    ref: r,
    className: ro(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ y.jsx(E_, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ y.jsx(__, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ y.jsx(C_, { className: "block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
T_.displayName = fm.displayName;
function I_(e, t) {
  return f.useReducer((r, o) => t[r][o] ?? r, e);
}
var Lo = (e) => {
  const { present: t, children: r } = e, o = k_(t), s = typeof r == "function" ? r({ present: o.isPresent }) : f.Children.only(r), a = Jt(o.ref, A_(s));
  return typeof r == "function" || o.isPresent ? f.cloneElement(s, { ref: a }) : null;
};
Lo.displayName = "Presence";
function k_(e) {
  const [t, r] = f.useState(), o = f.useRef({}), s = f.useRef(e), a = f.useRef("none"), u = e ? "mounted" : "unmounted", [l, d] = I_(u, {
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
  return f.useEffect(() => {
    const p = js(o.current);
    a.current = l === "mounted" ? p : "none";
  }, [l]), Ai(() => {
    const p = o.current, m = s.current;
    if (m !== e) {
      const v = a.current, S = js(p);
      e ? d("MOUNT") : S === "none" || p?.display === "none" ? d("UNMOUNT") : d(m && v !== S ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, d]), Ai(() => {
    if (t) {
      let p;
      const m = t.ownerDocument.defaultView ?? window, g = (S) => {
        const T = js(o.current).includes(S.animationName);
        if (S.target === t && T && (d("ANIMATION_END"), !s.current)) {
          const C = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", p = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = C);
          });
        }
      }, v = (S) => {
        S.target === t && (a.current = js(o.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        m.clearTimeout(p), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: f.useCallback((p) => {
      p && (o.current = getComputedStyle(p)), r(p);
    }, [])
  };
}
function js(e) {
  return e?.animationName || "none";
}
function A_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function R_(e, t) {
  return f.useReducer((r, o) => t[r][o] ?? r, e);
}
var el = "ScrollArea", [pm, RA] = Li(el), [P_, Ir] = pm(el), hm = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: o = "hover",
      dir: s,
      scrollHideDelay: a = 600,
      ...u
    } = e, [l, d] = f.useState(null), [p, m] = f.useState(null), [g, v] = f.useState(null), [S, _] = f.useState(null), [T, C] = f.useState(null), [A, k] = f.useState(0), [O, N] = f.useState(0), [$, V] = f.useState(!1), [G, U] = f.useState(!1), Y = Jt(t, (Z) => d(Z)), H = aa(s);
    return /* @__PURE__ */ y.jsx(
      P_,
      {
        scope: r,
        type: o,
        dir: H,
        scrollHideDelay: a,
        scrollArea: l,
        viewport: p,
        onViewportChange: m,
        content: g,
        onContentChange: v,
        scrollbarX: S,
        onScrollbarXChange: _,
        scrollbarXEnabled: $,
        onScrollbarXEnabledChange: V,
        scrollbarY: T,
        onScrollbarYChange: C,
        scrollbarYEnabled: G,
        onScrollbarYEnabledChange: U,
        onCornerWidthChange: k,
        onCornerHeightChange: N,
        children: /* @__PURE__ */ y.jsx(
          Qt.div,
          {
            dir: H,
            ...u,
            ref: Y,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": A + "px",
              "--radix-scroll-area-corner-height": O + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
hm.displayName = el;
var mm = "ScrollAreaViewport", gm = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: o, nonce: s, ...a } = e, u = Ir(mm, r), l = f.useRef(null), d = Jt(t, l, u.onViewportChange);
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ y.jsx(
        Qt.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: d,
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
          children: /* @__PURE__ */ y.jsx("div", { ref: u.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
gm.displayName = mm;
var qr = "ScrollAreaScrollbar", ua = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...o } = e, s = Ir(qr, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: u } = s, l = e.orientation === "horizontal";
    return f.useEffect(() => (l ? a(!0) : u(!0), () => {
      l ? a(!1) : u(!1);
    }), [l, a, u]), s.type === "hover" ? /* @__PURE__ */ y.jsx(M_, { ...o, ref: t, forceMount: r }) : s.type === "scroll" ? /* @__PURE__ */ y.jsx(O_, { ...o, ref: t, forceMount: r }) : s.type === "auto" ? /* @__PURE__ */ y.jsx(vm, { ...o, ref: t, forceMount: r }) : s.type === "always" ? /* @__PURE__ */ y.jsx(tl, { ...o, ref: t }) : null;
  }
);
ua.displayName = qr;
var M_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...o } = e, s = Ir(qr, e.__scopeScrollArea), [a, u] = f.useState(!1);
  return f.useEffect(() => {
    const l = s.scrollArea;
    let d = 0;
    if (l) {
      const p = () => {
        window.clearTimeout(d), u(!0);
      }, m = () => {
        d = window.setTimeout(() => u(!1), s.scrollHideDelay);
      };
      return l.addEventListener("pointerenter", p), l.addEventListener("pointerleave", m), () => {
        window.clearTimeout(d), l.removeEventListener("pointerenter", p), l.removeEventListener("pointerleave", m);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ y.jsx(Lo, { present: r || a, children: /* @__PURE__ */ y.jsx(
    vm,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), O_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...o } = e, s = Ir(qr, e.__scopeScrollArea), a = e.orientation === "horizontal", u = da(() => d("SCROLL_END"), 100), [l, d] = R_("hidden", {
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
  return f.useEffect(() => {
    if (l === "idle") {
      const p = window.setTimeout(() => d("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(p);
    }
  }, [l, s.scrollHideDelay, d]), f.useEffect(() => {
    const p = s.viewport, m = a ? "scrollLeft" : "scrollTop";
    if (p) {
      let g = p[m];
      const v = () => {
        const S = p[m];
        g !== S && (d("SCROLL"), u()), g = S;
      };
      return p.addEventListener("scroll", v), () => p.removeEventListener("scroll", v);
    }
  }, [s.viewport, a, d, u]), /* @__PURE__ */ y.jsx(Lo, { present: r || l !== "hidden", children: /* @__PURE__ */ y.jsx(
    tl,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: pt(e.onPointerEnter, () => d("POINTER_ENTER")),
      onPointerLeave: pt(e.onPointerLeave, () => d("POINTER_LEAVE"))
    }
  ) });
}), vm = f.forwardRef((e, t) => {
  const r = Ir(qr, e.__scopeScrollArea), { forceMount: o, ...s } = e, [a, u] = f.useState(!1), l = e.orientation === "horizontal", d = da(() => {
    if (r.viewport) {
      const p = r.viewport.offsetWidth < r.viewport.scrollWidth, m = r.viewport.offsetHeight < r.viewport.scrollHeight;
      u(l ? p : m);
    }
  }, 10);
  return Oo(r.viewport, d), Oo(r.content, d), /* @__PURE__ */ y.jsx(Lo, { present: o || a, children: /* @__PURE__ */ y.jsx(
    tl,
    {
      "data-state": a ? "visible" : "hidden",
      ...s,
      ref: t
    }
  ) });
}), tl = f.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...o } = e, s = Ir(qr, e.__scopeScrollArea), a = f.useRef(null), u = f.useRef(0), [l, d] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), p = Sm(l.viewport, l.content), m = {
    ...o,
    sizes: l,
    onSizesChange: d,
    hasThumb: p > 0 && p < 1,
    onThumbChange: (v) => a.current = v,
    onThumbPointerUp: () => u.current = 0,
    onThumbPointerDown: (v) => u.current = v
  };
  function g(v, S) {
    return $_(v, u.current, l, S);
  }
  return r === "horizontal" ? /* @__PURE__ */ y.jsx(
    N_,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const v = s.viewport.scrollLeft, S = kp(v, l, s.dir);
          a.current.style.transform = `translate3d(${S}px, 0, 0)`;
        }
      },
      onWheelScroll: (v) => {
        s.viewport && (s.viewport.scrollLeft = v);
      },
      onDragScroll: (v) => {
        s.viewport && (s.viewport.scrollLeft = g(v, s.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ y.jsx(
    j_,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const v = s.viewport.scrollTop, S = kp(v, l);
          a.current.style.transform = `translate3d(0, ${S}px, 0)`;
        }
      },
      onWheelScroll: (v) => {
        s.viewport && (s.viewport.scrollTop = v);
      },
      onDragScroll: (v) => {
        s.viewport && (s.viewport.scrollTop = g(v));
      }
    }
  ) : null;
}), N_ = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: o, ...s } = e, a = Ir(qr, e.__scopeScrollArea), [u, l] = f.useState(), d = f.useRef(null), p = Jt(t, d, a.onScrollbarXChange);
  return f.useEffect(() => {
    d.current && l(getComputedStyle(d.current));
  }, [d]), /* @__PURE__ */ y.jsx(
    bm,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: p,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": la(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.x),
      onDragScroll: (m) => e.onDragScroll(m.x),
      onWheelScroll: (m, g) => {
        if (a.viewport) {
          const v = a.viewport.scrollLeft + m.deltaX;
          e.onWheelScroll(v), Em(v, g) && m.preventDefault();
        }
      },
      onResize: () => {
        d.current && a.viewport && u && o({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: d.current.clientWidth,
            paddingStart: Bs(u.paddingLeft),
            paddingEnd: Bs(u.paddingRight)
          }
        });
      }
    }
  );
}), j_ = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: o, ...s } = e, a = Ir(qr, e.__scopeScrollArea), [u, l] = f.useState(), d = f.useRef(null), p = Jt(t, d, a.onScrollbarYChange);
  return f.useEffect(() => {
    d.current && l(getComputedStyle(d.current));
  }, [d]), /* @__PURE__ */ y.jsx(
    bm,
    {
      "data-orientation": "vertical",
      ...s,
      ref: p,
      sizes: r,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": la(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.y),
      onDragScroll: (m) => e.onDragScroll(m.y),
      onWheelScroll: (m, g) => {
        if (a.viewport) {
          const v = a.viewport.scrollTop + m.deltaY;
          e.onWheelScroll(v), Em(v, g) && m.preventDefault();
        }
      },
      onResize: () => {
        d.current && a.viewport && u && o({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: d.current.clientHeight,
            paddingStart: Bs(u.paddingTop),
            paddingEnd: Bs(u.paddingBottom)
          }
        });
      }
    }
  );
}), [D_, ym] = pm(qr), bm = f.forwardRef((e, t) => {
  const {
    __scopeScrollArea: r,
    sizes: o,
    hasThumb: s,
    onThumbChange: a,
    onThumbPointerUp: u,
    onThumbPointerDown: l,
    onThumbPositionChange: d,
    onDragScroll: p,
    onWheelScroll: m,
    onResize: g,
    ...v
  } = e, S = Ir(qr, r), [_, T] = f.useState(null), C = Jt(t, (Y) => T(Y)), A = f.useRef(null), k = f.useRef(""), O = S.viewport, N = o.content - o.viewport, $ = zr(m), V = zr(d), G = da(g, 10);
  function U(Y) {
    if (A.current) {
      const H = Y.clientX - A.current.left, Z = Y.clientY - A.current.top;
      p({ x: H, y: Z });
    }
  }
  return f.useEffect(() => {
    const Y = (H) => {
      const Z = H.target;
      _?.contains(Z) && $(H, N);
    };
    return document.addEventListener("wheel", Y, { passive: !1 }), () => document.removeEventListener("wheel", Y, { passive: !1 });
  }, [O, _, N, $]), f.useEffect(V, [o, V]), Oo(_, G), Oo(S.content, G), /* @__PURE__ */ y.jsx(
    D_,
    {
      scope: r,
      scrollbar: _,
      hasThumb: s,
      onThumbChange: zr(a),
      onThumbPointerUp: zr(u),
      onThumbPositionChange: V,
      onThumbPointerDown: zr(l),
      children: /* @__PURE__ */ y.jsx(
        Qt.div,
        {
          ...v,
          ref: C,
          style: { position: "absolute", ...v.style },
          onPointerDown: pt(e.onPointerDown, (Y) => {
            Y.button === 0 && (Y.target.setPointerCapture(Y.pointerId), A.current = _.getBoundingClientRect(), k.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S.viewport && (S.viewport.style.scrollBehavior = "auto"), U(Y));
          }),
          onPointerMove: pt(e.onPointerMove, U),
          onPointerUp: pt(e.onPointerUp, (Y) => {
            const H = Y.target;
            H.hasPointerCapture(Y.pointerId) && H.releasePointerCapture(Y.pointerId), document.body.style.webkitUserSelect = k.current, S.viewport && (S.viewport.style.scrollBehavior = ""), A.current = null;
          })
        }
      )
    }
  );
}), Ws = "ScrollAreaThumb", rl = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...o } = e, s = ym(Ws, e.__scopeScrollArea);
    return /* @__PURE__ */ y.jsx(Lo, { present: r || s.hasThumb, children: /* @__PURE__ */ y.jsx(L_, { ref: t, ...o }) });
  }
), L_ = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: o, ...s } = e, a = Ir(Ws, r), u = ym(Ws, r), { onThumbPositionChange: l } = u, d = Jt(
      t,
      (g) => u.onThumbChange(g)
    ), p = f.useRef(void 0), m = da(() => {
      p.current && (p.current(), p.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const g = a.viewport;
      if (g) {
        const v = () => {
          if (m(), !p.current) {
            const S = V_(g, l);
            p.current = S, l();
          }
        };
        return l(), g.addEventListener("scroll", v), () => g.removeEventListener("scroll", v);
      }
    }, [a.viewport, m, l]), /* @__PURE__ */ y.jsx(
      Qt.div,
      {
        "data-state": u.hasThumb ? "visible" : "hidden",
        ...s,
        ref: d,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: pt(e.onPointerDownCapture, (g) => {
          const S = g.target.getBoundingClientRect(), _ = g.clientX - S.left, T = g.clientY - S.top;
          u.onThumbPointerDown({ x: _, y: T });
        }),
        onPointerUp: pt(e.onPointerUp, u.onThumbPointerUp)
      }
    );
  }
);
rl.displayName = Ws;
var nl = "ScrollAreaCorner", wm = f.forwardRef(
  (e, t) => {
    const r = Ir(nl, e.__scopeScrollArea), o = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && o ? /* @__PURE__ */ y.jsx(F_, { ...e, ref: t }) : null;
  }
);
wm.displayName = nl;
var F_ = f.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...o } = e, s = Ir(nl, r), [a, u] = f.useState(0), [l, d] = f.useState(0), p = !!(a && l);
  return Oo(s.scrollbarX, () => {
    const m = s.scrollbarX?.offsetHeight || 0;
    s.onCornerHeightChange(m), d(m);
  }), Oo(s.scrollbarY, () => {
    const m = s.scrollbarY?.offsetWidth || 0;
    s.onCornerWidthChange(m), u(m);
  }), p ? /* @__PURE__ */ y.jsx(
    Qt.div,
    {
      ...o,
      ref: t,
      style: {
        width: a,
        height: l,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Bs(e) {
  return e ? parseInt(e, 10) : 0;
}
function Sm(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function la(e) {
  const t = Sm(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - r) * t;
  return Math.max(o, 18);
}
function $_(e, t, r, o = "ltr") {
  const s = la(r), a = s / 2, u = t || a, l = s - u, d = r.scrollbar.paddingStart + u, p = r.scrollbar.size - r.scrollbar.paddingEnd - l, m = r.content - r.viewport, g = o === "ltr" ? [0, m] : [m * -1, 0];
  return xm([d, p], g)(e);
}
function kp(e, t, r = "ltr") {
  const o = la(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - s, u = t.content - t.viewport, l = a - o, d = r === "ltr" ? [0, u] : [u * -1, 0], p = Zu(e, d);
  return xm([0, u], [0, l])(p);
}
function xm(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (r - e[0]);
  };
}
function Em(e, t) {
  return e > 0 && e < t;
}
var V_ = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return function s() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, u = r.left !== a.left, l = r.top !== a.top;
    (u || l) && t(), r = a, o = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(o);
};
function da(e, t) {
  const r = zr(e), o = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(o.current), []), f.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Oo(e, t) {
  const r = zr(t);
  Ai(() => {
    let o = 0;
    if (e) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(r);
      });
      return s.observe(e), () => {
        window.cancelAnimationFrame(o), s.unobserve(e);
      };
    }
  }, [e, r]);
}
var Ys = hm, gu = gm, Ap = ua, Rp = rl, z_ = wm;
const Fo = f.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ y.jsxs(
  Ys,
  {
    ref: o,
    className: ro("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ y.jsx(gu, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ y.jsx(_m, {}),
      /* @__PURE__ */ y.jsx(z_, {})
    ]
  }
));
Fo.displayName = Ys.displayName;
const _m = f.forwardRef(({ className: e, orientation: t = "vertical", ...r }, o) => /* @__PURE__ */ y.jsx(
  ua,
  {
    ref: o,
    orientation: t,
    className: ro(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ y.jsx(rl, { className: "relative flex-1 rounded-full bg-border" })
  }
));
_m.displayName = ua.displayName;
const fa = ({
  children: e,
  renderCustomPreview: t,
  data: r = {},
  shouldDisplayPreview: o = !0
}) => {
  const [s, a] = f.useState(!1), [u, l] = f.useState({ x: 0, y: 0 }), d = f.useRef(null), p = (S) => {
    a(!0), S.dataTransfer.setDragImage(new Image(), 0, 0), S.dataTransfer.setData(JSON.stringify(r), JSON.stringify(r)), l({
      x: S.clientX,
      y: S.clientY
    });
  }, m = () => {
    a(!1);
  }, g = (S) => {
    s && l({
      x: S.clientX,
      y: S.clientY
    });
  }, v = f.cloneElement(e, {
    draggable: !0,
    onDragStart: p,
    onDragEnd: m,
    onDrag: g,
    style: {
      ...e.props.style
    }
  });
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    v,
    s && o && t ? fu.createPortal(
      /* @__PURE__ */ y.jsx(
        "div",
        {
          ref: d,
          style: {
            position: "fixed",
            left: u.x,
            top: u.y,
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
var U_ = pE.useId || (() => {
}), H_ = 0;
function Cm(e) {
  const [t, r] = f.useState(U_());
  return Ai(() => {
    r((o) => o ?? String(H_++));
  }, [e]), t ? `radix-${t}` : "";
}
var Bc = "rovingFocusGroup.onEntryFocus", W_ = { bubbles: !1, cancelable: !0 }, pa = "RovingFocusGroup", [vu, Tm, B_] = Jh(pa), [Y_, Im] = Li(
  pa,
  [B_]
), [G_, q_] = Y_(pa), km = f.forwardRef(
  (e, t) => /* @__PURE__ */ y.jsx(vu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(vu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(X_, { ...e, ref: t }) }) })
);
km.displayName = pa;
var X_ = f.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: o,
    loop: s = !1,
    dir: a,
    currentTabStopId: u,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: d,
    onEntryFocus: p,
    preventScrollOnEntryFocus: m = !1,
    ...g
  } = e, v = f.useRef(null), S = Jt(t, v), _ = aa(a), [T = null, C] = Ju({
    prop: u,
    defaultProp: l,
    onChange: d
  }), [A, k] = f.useState(!1), O = zr(p), N = Tm(r), $ = f.useRef(!1), [V, G] = f.useState(0);
  return f.useEffect(() => {
    const U = v.current;
    if (U)
      return U.addEventListener(Bc, O), () => U.removeEventListener(Bc, O);
  }, [O]), /* @__PURE__ */ y.jsx(
    G_,
    {
      scope: r,
      orientation: o,
      dir: _,
      loop: s,
      currentTabStopId: T,
      onItemFocus: f.useCallback(
        (U) => C(U),
        [C]
      ),
      onItemShiftTab: f.useCallback(() => k(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => G((U) => U + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => G((U) => U - 1),
        []
      ),
      children: /* @__PURE__ */ y.jsx(
        Qt.div,
        {
          tabIndex: A || V === 0 ? -1 : 0,
          "data-orientation": o,
          ...g,
          ref: S,
          style: { outline: "none", ...e.style },
          onMouseDown: pt(e.onMouseDown, () => {
            $.current = !0;
          }),
          onFocus: pt(e.onFocus, (U) => {
            const Y = !$.current;
            if (U.target === U.currentTarget && Y && !A) {
              const H = new CustomEvent(Bc, W_);
              if (U.currentTarget.dispatchEvent(H), !H.defaultPrevented) {
                const Z = N().filter((ee) => ee.focusable), W = Z.find((ee) => ee.active), Q = Z.find((ee) => ee.id === T), ye = [W, Q, ...Z].filter(
                  Boolean
                ).map((ee) => ee.ref.current);
                Pm(ye, m);
              }
            }
            $.current = !1;
          }),
          onBlur: pt(e.onBlur, () => k(!1))
        }
      )
    }
  );
}), Am = "RovingFocusGroupItem", Rm = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: s = !1,
      tabStopId: a,
      ...u
    } = e, l = Cm(), d = a || l, p = q_(Am, r), m = p.currentTabStopId === d, g = Tm(r), { onFocusableItemAdd: v, onFocusableItemRemove: S } = p;
    return f.useEffect(() => {
      if (o)
        return v(), () => S();
    }, [o, v, S]), /* @__PURE__ */ y.jsx(
      vu.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ y.jsx(
          Qt.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": p.orientation,
            ...u,
            ref: t,
            onMouseDown: pt(e.onMouseDown, (_) => {
              o ? p.onItemFocus(d) : _.preventDefault();
            }),
            onFocus: pt(e.onFocus, () => p.onItemFocus(d)),
            onKeyDown: pt(e.onKeyDown, (_) => {
              if (_.key === "Tab" && _.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (_.target !== _.currentTarget) return;
              const T = J_(_, p.orientation, p.dir);
              if (T !== void 0) {
                if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                _.preventDefault();
                let A = g().filter((k) => k.focusable).map((k) => k.ref.current);
                if (T === "last") A.reverse();
                else if (T === "prev" || T === "next") {
                  T === "prev" && A.reverse();
                  const k = A.indexOf(_.currentTarget);
                  A = p.loop ? Q_(A, k + 1) : A.slice(k + 1);
                }
                setTimeout(() => Pm(A));
              }
            })
          }
        )
      }
    );
  }
);
Rm.displayName = Am;
var K_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Z_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function J_(e, t, r) {
  const o = Z_(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return K_[o];
}
function Pm(e, t = !1) {
  const r = document.activeElement;
  for (const o of e)
    if (o === r || (o.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Q_(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var e2 = km, t2 = Rm, ol = "Tabs", [r2, PA] = Li(ol, [
  Im
]), Mm = Im(), [n2, il] = r2(ol), Om = f.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: o,
      onValueChange: s,
      defaultValue: a,
      orientation: u = "horizontal",
      dir: l,
      activationMode: d = "automatic",
      ...p
    } = e, m = aa(l), [g, v] = Ju({
      prop: o,
      onChange: s,
      defaultProp: a
    });
    return /* @__PURE__ */ y.jsx(
      n2,
      {
        scope: r,
        baseId: Cm(),
        value: g,
        onValueChange: v,
        orientation: u,
        dir: m,
        activationMode: d,
        children: /* @__PURE__ */ y.jsx(
          Qt.div,
          {
            dir: m,
            "data-orientation": u,
            ...p,
            ref: t
          }
        )
      }
    );
  }
);
Om.displayName = ol;
var Nm = "TabsList", jm = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: o = !0, ...s } = e, a = il(Nm, r), u = Mm(r);
    return /* @__PURE__ */ y.jsx(
      e2,
      {
        asChild: !0,
        ...u,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: /* @__PURE__ */ y.jsx(
          Qt.div,
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
jm.displayName = Nm;
var Dm = "TabsTrigger", Lm = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: o, disabled: s = !1, ...a } = e, u = il(Dm, r), l = Mm(r), d = Vm(u.baseId, o), p = zm(u.baseId, o), m = o === u.value;
    return /* @__PURE__ */ y.jsx(
      t2,
      {
        asChild: !0,
        ...l,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ y.jsx(
          Qt.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": p,
            "data-state": m ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: d,
            ...a,
            ref: t,
            onMouseDown: pt(e.onMouseDown, (g) => {
              !s && g.button === 0 && g.ctrlKey === !1 ? u.onValueChange(o) : g.preventDefault();
            }),
            onKeyDown: pt(e.onKeyDown, (g) => {
              [" ", "Enter"].includes(g.key) && u.onValueChange(o);
            }),
            onFocus: pt(e.onFocus, () => {
              const g = u.activationMode !== "manual";
              !m && !s && g && u.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Lm.displayName = Dm;
var Fm = "TabsContent", $m = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: o, forceMount: s, children: a, ...u } = e, l = il(Fm, r), d = Vm(l.baseId, o), p = zm(l.baseId, o), m = o === l.value, g = f.useRef(m);
    return f.useEffect(() => {
      const v = requestAnimationFrame(() => g.current = !1);
      return () => cancelAnimationFrame(v);
    }, []), /* @__PURE__ */ y.jsx(Lo, { present: s || m, children: ({ present: v }) => /* @__PURE__ */ y.jsx(
      Qt.div,
      {
        "data-state": m ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": d,
        hidden: !v,
        id: p,
        tabIndex: 0,
        ...u,
        ref: t,
        style: {
          ...e.style,
          animationDuration: g.current ? "0s" : void 0
        },
        children: v && a
      }
    ) });
  }
);
$m.displayName = Fm;
function Vm(e, t) {
  return `${e}-trigger-${t}`;
}
function zm(e, t) {
  return `${e}-content-${t}`;
}
var o2 = Om, Um = jm, Hm = Lm, Wm = $m;
const i2 = o2, Bm = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Um,
  {
    ref: r,
    className: ro(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Bm.displayName = Um.displayName;
const yu = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Hm,
  {
    ref: r,
    className: ro(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
yu.displayName = Hm.displayName;
const bu = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Wm,
  {
    ref: r,
    className: ro(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
bu.displayName = Wm.displayName;
const MA = "add", OA = "track", NA = "trackItems", jA = "track:changed", DA = "trackItems:changed", LA = "state", FA = "state:changed", s2 = "add", Ym = "add:text", Fi = "add:video", $i = "add:audio", $A = "add:placeholder", Vi = "add:image", VA = "add:mask", zA = "add:transition", UA = "add:animation", HA = "edit", WA = "edit:object", BA = "edit:text", YA = "edit:shape", GA = "enterEditMode", qA = "player", a2 = "player:play", c2 = "player:pause", XA = "player:seek", KA = "player:seekTo", ZA = "player:seekBy", JA = "player:togglePlay", u2 = "active", QA = "active:set", Gm = "active:delete", eR = "active:paste", qm = "active:clone", Xm = "active:split", tR = "layer", rR = "layer:locked", nR = "layer:hidden", oR = "layer:move", iR = "layer:select", l2 = "layer:selection", sR = "layer:sendTo", aR = "layer:rename", cR = "layer:editingName", uR = "layer:copy", lR = "layer:paste", dR = "layer:clone", fR = "layer:split", pR = "layer:cut", hR = "layer:delete", d2 = "history", Km = "history:undo", Zm = "history:redo", mR = "history:reset", f2 = "scale", Jm = "scale:changed", p2 = "drag", Qm = "drag:start", Gs = "drag:end", h2 = "timeline", eg = "timeline:boundingChanged";
var wu = function(e, t) {
  return wu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
    r.__proto__ = o;
  } || function(r, o) {
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
  }, wu(e, t);
};
function $o(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  wu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Su(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function xu(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), s, a = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; ) a.push(s.value);
  } catch (l) {
    u = { error: l };
  } finally {
    try {
      s && !s.done && (r = o.return) && r.call(o);
    } finally {
      if (u) throw u.error;
    }
  }
  return a;
}
function Eu(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Hr(e) {
  return typeof e == "function";
}
function tg(e) {
  var t = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Yc = tg(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(o, s) {
      return s + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function _u(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var ha = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, o, s, a;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var l = Su(u), d = l.next(); !d.done; d = l.next()) {
              var p = d.value;
              p.remove(this);
            }
          } catch (T) {
            t = { error: T };
          } finally {
            try {
              d && !d.done && (r = l.return) && r.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          u.remove(this);
      var m = this.initialTeardown;
      if (Hr(m))
        try {
          m();
        } catch (T) {
          a = T instanceof Yc ? T.errors : [T];
        }
      var g = this._finalizers;
      if (g) {
        this._finalizers = null;
        try {
          for (var v = Su(g), S = v.next(); !S.done; S = v.next()) {
            var _ = S.value;
            try {
              Pp(_);
            } catch (T) {
              a = a ?? [], T instanceof Yc ? a = Eu(Eu([], xu(a)), xu(T.errors)) : a.push(T);
            }
          }
        } catch (T) {
          o = { error: T };
        } finally {
          try {
            S && !S.done && (s = v.return) && s.call(v);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (a)
        throw new Yc(a);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        Pp(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && _u(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && _u(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), rg = ha.EMPTY;
function ng(e) {
  return e instanceof ha || e && "closed" in e && Hr(e.remove) && Hr(e.add) && Hr(e.unsubscribe);
}
function Pp(e) {
  Hr(e) ? e() : e.unsubscribe();
}
var m2 = {
  Promise: void 0
}, g2 = {
  setTimeout: function(e, t) {
    for (var r = [], o = 2; o < arguments.length; o++)
      r[o - 2] = arguments[o];
    return setTimeout.apply(void 0, Eu([e, t], xu(r)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function v2(e) {
  g2.setTimeout(function() {
    throw e;
  });
}
function Mp() {
}
function Vs(e) {
  e();
}
var sl = function(e) {
  $o(t, e);
  function t(r) {
    var o = e.call(this) || this;
    return o.isStopped = !1, r ? (o.destination = r, ng(r) && r.add(o)) : o.destination = w2, o;
  }
  return t.create = function(r, o, s) {
    return new Cu(r, o, s);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
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
}(ha), y2 = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (o) {
        Ds(o);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (o) {
        Ds(o);
      }
    else
      Ds(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        Ds(r);
      }
  }, e;
}(), Cu = function(e) {
  $o(t, e);
  function t(r, o, s) {
    var a = e.call(this) || this, u;
    return Hr(r) || !r ? u = {
      next: r ?? void 0,
      error: o ?? void 0,
      complete: s ?? void 0
    } : u = r, a.destination = new y2(u), a;
  }
  return t;
}(sl);
function Ds(e) {
  v2(e);
}
function b2(e) {
  throw e;
}
var w2 = {
  closed: !0,
  next: Mp,
  error: b2,
  complete: Mp
}, S2 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function x2(e) {
  return e;
}
function E2(e) {
  return e.length === 0 ? x2 : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(o, s) {
      return s(o);
    }, r);
  };
}
var Op = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, o) {
    var s = this, a = C2(t) ? t : new Cu(t, r, o);
    return Vs(function() {
      var u = s, l = u.operator, d = u.source;
      a.add(l ? l.call(a, d) : d ? s._subscribe(a) : s._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var o = this;
    return r = Np(r), new r(function(s, a) {
      var u = new Cu({
        next: function(l) {
          try {
            t(l);
          } catch (d) {
            a(d), u.unsubscribe();
          }
        },
        error: a,
        complete: s
      });
      o.subscribe(u);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[S2] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return E2(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = Np(t), new t(function(o, s) {
      var a;
      r.subscribe(function(u) {
        return a = u;
      }, function(u) {
        return s(u);
      }, function() {
        return o(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Np(e) {
  var t;
  return (t = e ?? m2.Promise) !== null && t !== void 0 ? t : Promise;
}
function _2(e) {
  return e && Hr(e.next) && Hr(e.error) && Hr(e.complete);
}
function C2(e) {
  return e && e instanceof sl || _2(e) && ng(e);
}
function T2(e) {
  return Hr(e?.lift);
}
function I2(e) {
  return function(t) {
    if (T2(t))
      return t.lift(function(r) {
        try {
          return e(r, this);
        } catch (o) {
          this.error(o);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function k2(e, t, r, o, s) {
  return new A2(e, t, r, o, s);
}
var A2 = function(e) {
  $o(t, e);
  function t(r, o, s, a, u, l) {
    var d = e.call(this, r) || this;
    return d.onFinalize = u, d.shouldUnsubscribe = l, d._next = o ? function(p) {
      try {
        o(p);
      } catch (m) {
        r.error(m);
      }
    } : e.prototype._next, d._error = a ? function(p) {
      try {
        a(p);
      } catch (m) {
        r.error(m);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, d._complete = s ? function() {
      try {
        s();
      } catch (p) {
        r.error(p);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, d;
  }
  return t.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var o = this.closed;
      e.prototype.unsubscribe.call(this), !o && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, t;
}(sl), R2 = tg(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), al = function(e) {
  $o(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var o = new jp(this, this);
    return o.operator = r, o;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new R2();
  }, t.prototype.next = function(r) {
    var o = this;
    Vs(function() {
      var s, a;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var u = Su(o.currentObservers), l = u.next(); !l.done; l = u.next()) {
            var d = l.value;
            d.next(r);
          }
        } catch (p) {
          s = { error: p };
        } finally {
          try {
            l && !l.done && (a = u.return) && a.call(u);
          } finally {
            if (s) throw s.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var o = this;
    Vs(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = !0, o.thrownError = r;
        for (var s = o.observers; s.length; )
          s.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    Vs(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var o = r.observers; o.length; )
          o.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var o = this, s = this, a = s.hasError, u = s.isStopped, l = s.observers;
    return a || u ? rg : (this.currentObservers = null, l.push(r), new ha(function() {
      o.currentObservers = null, _u(l, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var o = this, s = o.hasError, a = o.thrownError, u = o.isStopped;
    s ? r.error(a) : u && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new Op();
    return r.source = this, r;
  }, t.create = function(r, o) {
    return new jp(r, o);
  }, t;
}(Op), jp = function(e) {
  $o(t, e);
  function t(r, o) {
    var s = e.call(this) || this;
    return s.destination = r, s.source = o, s;
  }
  return t.prototype.next = function(r) {
    var o, s;
    (s = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || s === void 0 || s.call(o, r);
  }, t.prototype.error = function(r) {
    var o, s;
    (s = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || s === void 0 || s.call(o, r);
  }, t.prototype.complete = function() {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || o === void 0 || o.call(r);
  }, t.prototype._subscribe = function(r) {
    var o, s;
    return (s = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(r)) !== null && s !== void 0 ? s : rg;
  }, t;
}(al), Dp = function(e) {
  $o(t, e);
  function t(r) {
    var o = e.call(this) || this;
    return o._value = r, o;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(r) {
    var o = e.prototype._subscribe.call(this, r);
    return !o.closed && r.next(this._value), o;
  }, t.prototype.getValue = function() {
    var r = this, o = r.hasError, s = r.thrownError, a = r._value;
    if (o)
      throw s;
    return this._throwIfClosed(), a;
  }, t.prototype.next = function(r) {
    e.prototype.next.call(this, this._value = r);
  }, t;
}(al);
function Yn(e, t) {
  return I2(function(r, o) {
    var s = 0;
    r.subscribe(k2(o, function(a) {
      return e.call(t, a, s++) && o.next(a);
    }));
  });
}
const og = new al(), P2 = (e, t) => {
  og.next({ key: e, value: t });
}, Be = {
  subject: og,
  dispatch: P2
}, jt = [];
for (let e = 0; e < 256; ++e)
  jt.push((e + 256).toString(16).slice(1));
function M2(e, t = 0) {
  return (jt[e[t + 0]] + jt[e[t + 1]] + jt[e[t + 2]] + jt[e[t + 3]] + "-" + jt[e[t + 4]] + jt[e[t + 5]] + "-" + jt[e[t + 6]] + jt[e[t + 7]] + "-" + jt[e[t + 8]] + jt[e[t + 9]] + "-" + jt[e[t + 10]] + jt[e[t + 11]] + jt[e[t + 12]] + jt[e[t + 13]] + jt[e[t + 14]] + jt[e[t + 15]]).toLowerCase();
}
let Gc;
const O2 = new Uint8Array(16);
function N2() {
  if (!Gc) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Gc = crypto.getRandomValues.bind(crypto);
  }
  return Gc(O2);
}
const j2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Lp = { randomUUID: j2 };
function It(e, t, r) {
  if (Lp.randomUUID && !e)
    return Lp.randomUUID();
  e = e || {};
  const o = e.random ?? e.rng?.() ?? N2();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, M2(o);
}
var ig = /* @__PURE__ */ ((e) => (e.IMAGE = "image", e.VIDEO = "video", e.AUDIO = "audio", e))(ig || {});
const D2 = (e) => {
  const [t, r] = f.useState(!1), [o, s] = f.useState(!1), a = f.useCallback((m) => {
    const g = { ...m, id: It() };
    switch (m.type) {
      case "image":
        Be.dispatch(Vi, { payload: g });
        break;
      case "video":
        Be.dispatch(Fi, { payload: g });
        break;
      case "audio":
        Be.dispatch($i, { payload: g });
        break;
    }
  }, []), u = f.useCallback(
    (m) => {
      m.preventDefault();
      try {
        const g = m.dataTransfer?.types[0], v = JSON.parse(g);
        if (!Object.values(ig).includes(v.type))
          return;
        s(!0), r(!0), e?.(!0);
      } catch (g) {
        console.error("Error parsing dragged data:", g);
      }
    },
    [e]
  ), l = f.useCallback(
    (m) => {
      m.preventDefault(), t && (s(!0), e?.(!0));
    },
    [t, e]
  ), d = f.useCallback(
    (m) => {
      if (o) {
        m.preventDefault(), s(!1), e?.(!1);
        try {
          const g = m.dataTransfer?.types[0], v = JSON.parse(
            m.dataTransfer.getData(g)
          );
          a(v);
        } catch (g) {
          console.error("Error parsing dropped data:", g);
        }
      }
    },
    [o, e, a]
  ), p = f.useCallback(
    (m) => {
      m.preventDefault(), m.currentTarget.contains(m.relatedTarget) || (s(!1), r(!1), e?.(!1));
    },
    [e]
  );
  return { onDragEnter: u, onDragOver: l, onDrop: d, onDragLeave: p, isDraggingOver: o };
}, L2 = ({
  children: e,
  className: t,
  style: r,
  onDragStateChange: o,
  id: s
}) => {
  const { onDragEnter: a, onDragOver: u, onDrop: l, onDragLeave: d } = D2(o);
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      id: s,
      onDragEnter: a,
      onDrop: l,
      onDragOver: u,
      onDragLeave: d,
      className: t,
      style: r,
      role: "region",
      "aria-label": "Droppable area for images, videos, and audio",
      children: e
    }
  );
}, gR = ({
  size: e,
  children: t
}) => {
  const [r, o] = f.useState(!1);
  return /* @__PURE__ */ y.jsxs(
    L2,
    {
      id: "artboard",
      onDragStateChange: o,
      style: {
        width: e.width,
        height: e.height
      },
      className: "designcombo_scene pointer-events-auto mt-3.5 bg-black",
      children: [
        /* @__PURE__ */ y.jsx(
          "div",
          {
            style: {
              width: e.width,
              height: e.height
            },
            className: `pointer-events-none absolute z-50 mt-3.5 transition-colors duration-200 ease-in-out ${r ? "border-4 border-dashed border-white bg-white/[0.075]" : "bg-transparent"} shadow-[0_0_0_5000px_#1D1D1F]`
          }
        ),
        t
      ]
    }
  );
}, vR = 100, yR = 30, bR = 18, wR = 14, SR = 30, xR = 24, ER = 16, F2 = 12, _R = "Regular", $2 = "sans-serif", ma = 188, Tu = 40, CR = 4e3, V2 = 1920, z2 = 1080, U2 = 60, H2 = 1e3 / U2, TR = 2e6, IR = 1e7, kR = 48e3, AR = 192e3, sg = 2.3, RR = V2 / sg, PR = z2 / sg, MR = 184, OR = 348, NR = 512, jR = 300, DR = 0, LR = 5e3, FR = 1, $R = 0, VR = 0, zR = 0, UR = 359, HR = 1, WR = 0, BR = !1, YR = !1, GR = 0, qR = 2, XR = 0.01, KR = 1, ZR = 0, JR = 3, QR = 0.01, e8 = 1, t8 = 0, r8 = 1, n8 = 0.01, o8 = 0.5, i8 = -1e3, s8 = 1e3, a8 = 1, c8 = 1, u8 = 0, l8 = 1, d8 = 0.01, f8 = 1, p8 = 0, h8 = 1, m8 = 0.01, g8 = 0, v8 = 0.5, y8 = 10, b8 = 0.01, w8 = 1, S8 = 0, x8 = 1, E8 = 0.01, _8 = 1, cl = 16, Fp = 80;
function W2(e) {
  if (!e) return "0";
  const t = e / ma, r = Math.trunc(t) % 60, o = Math.trunc(t / 60) % 60, s = Math.trunc(t / 3600) % 60, u = [
    Math.trunc(t / 216e3).toString(),
    s.toString(),
    o.toString(),
    r.toString()
  ];
  return t < 60 ? `${u[3].padStart(2, "0")}f` : t < 3600 ? `${u[2].padStart(1, "0")}s` : t < 216e3 ? `${u[1].padStart(2, "0")}:${u[2].padStart(
    2,
    "0"
  )}` : `${u[0].padStart(2, "0")}:${u[1].padStart(
    2,
    "0"
  )}:${u[2].padStart(2, "0")}`;
}
function C8(e, t = !1) {
  if (!e) return "00:00";
  const o = 1e3 / 60;
  if (e < 1e3)
    return t ? `${Math.floor(e / o)}f` : `${(e / 1e3).toFixed(1)}s`;
  const s = Math.floor(e / 1e3);
  if (s < 60)
    return `${s}s`;
  const a = Math.floor(s / 60);
  if (a < 60) {
    const p = s % 60;
    return `${a.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
  }
  const u = Math.floor(a / 60), l = a % 60, d = s % 60;
  return `${u.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`;
}
function qs(e, t) {
  return e.map((r) => ({
    ...r,
    items: r.items.filter((o) => !t.includes(o))
  }));
}
const B2 = ({ frame: e }, { fps: t }) => {
  const r = e / t, o = Math.floor(r / 3600), s = r % 3600, a = Math.floor(s / 60), u = Math.floor(s % 60), l = Math.floor(
    (s - Math.floor(s)) * 100
  );
  return o > 0 ? `${o}:${a.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}` : `${a.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
}, Y2 = ({ time: e }) => {
  const t = e / 1e3, r = Math.floor(t / 3600), o = t % 3600, s = Math.floor(o / 60), a = Math.floor(o % 60), u = Math.floor(
    (o - Math.floor(o)) * 100
  );
  return r > 0 ? `${r}:${s.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}` : `${s.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
}, G2 = () => {
  const e = document.getElementById("video-current-time");
  return (e ? parseFloat(e.getAttribute("data-current-time") ?? "") : 0) * 1e3;
}, Br = [
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
function ag(e, t) {
  let r = -1, o = e.length - 1;
  for (; 1 + r < o; ) {
    const s = r + (o - r >> 1);
    t(e[s], s, e) ? o = s : r = s;
  }
  return o;
}
function T8(e, t = 1) {
  const r = () => {
    const d = Math.max(0, Tu), m = document.getElementById(
      "designcombo-timeline-canvas"
    )?.offsetWidth ?? document.body.offsetWidth;
    return Math.max(1, m - d);
  }, o = () => typeof e == "number" ? yt(e, t) : Q2(e, t), s = r() / o(), a = t * s;
  return {
    segments: 5,
    index: ag(Br, (l) => l.zoom > a),
    zoom: a,
    unit: 1 / a
  };
}
function I8(e) {
  return Br[e];
}
function q2(e) {
  return X2(e) || Br[0];
}
const X2 = (e) => {
  const t = Br.filter(
    (o) => o.zoom < e.zoom
  );
  return t.length === 0 ? null : t.reduce(
    (o, s) => s.zoom > o.zoom ? s : o
  );
}, K2 = (e) => {
  const t = Br.filter(
    (o) => o.zoom > e.zoom
  );
  return t.length === 0 ? null : t.reduce(
    (o, s) => s.zoom < o.zoom ? s : o
  );
};
function Z2(e) {
  return K2(e) || Br[Br.length - 1];
}
function k8(e) {
  const t = Br.at(-1), r = e === t, s = J2(e) - (r ? 1 : 2);
  return Math.max(0, s);
}
function J2(e) {
  const t = ag(Br, (r) => r.zoom > e.zoom);
  return Math.min(Br.length - 1, t);
}
function yt(e, t = 1, r = 1) {
  const o = ma * t;
  return e * (60 / 1e3) * o / r;
}
function qn(e, t = 1) {
  const r = ma * t;
  return e / r * H2;
}
function Q2(e, t = 1) {
  return yt(e, t);
}
const A8 = Math.floor(Math.random() * 1e3) + 1;
function cg(e, t = 1) {
  const r = [], o = Math.floor(t), s = (a, u) => {
    for (const l of a)
      Array.isArray(l) && u < o ? s(l, u + 1) : r.push(l);
  };
  return s(e, 0), r;
}
function ug(e, t) {
  const r = t.sort((s, a) => s.tempIndex - a.tempIndex), o = [];
  for (const s of r)
    s.tempIndex < 0 && o.push(s);
  o.push(e);
  for (const s of r)
    s.tempIndex >= 0 && o.push(s);
  return o;
}
const $p = {
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
}, eC = (e) => {
  const t = e.map(
    (r) => new FontFace(r.fontFamily, `url(${r.fontUrl})`).load()
    // .catch((error: unknown) => error),
  );
  return t.length === 0 ? Promise.resolve(!0) : new Promise((r, o) => {
    Promise.all(t).then((s) => {
      s.forEach((a) => {
        a instanceof FontFace && a.family && (document.fonts.add(a), r(!0));
      });
    }).catch((s) => {
      o(s);
    });
  });
}, Vp = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (p, m) => {
    const g = typeof p == "function" ? p(t) : p;
    if (!Object.is(g, t)) {
      const v = t;
      t = m ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), r.forEach((S) => S(t, v));
    }
  }, s = () => t, l = { setState: o, getState: s, getInitialState: () => d, subscribe: (p) => (r.add(p), () => r.delete(p)) }, d = t = e(o, s, l);
  return l;
}, tC = (e) => e ? Vp(e) : Vp, rC = (e) => e;
function nC(e, t = rC) {
  const r = Ie.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Ie.useDebugValue(r), r;
}
const zp = (e) => {
  const t = tC(e), r = (o) => nC(t, o);
  return Object.assign(r, t), r;
}, lg = (e) => e ? zp(e) : zp, Xn = lg((e) => ({
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
const oC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), dg = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var iC = {
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
const sC = f.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: u,
    ...l
  }, d) => f.createElement(
    "svg",
    {
      ref: d,
      ...iC,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: dg("lucide", s),
      ...l
    },
    [
      ...u.map(([p, m]) => f.createElement(p, m)),
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
const Dr = (e, t) => {
  const r = f.forwardRef(
    ({ className: o, ...s }, a) => f.createElement(sC, {
      ref: a,
      iconNode: t,
      className: dg(`lucide-${oC(e)}`, o),
      ...s
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
const aC = Dr("Music", [
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
const cC = Dr("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = Dr("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lC = Dr("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dC = Dr("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = Dr("SquareSplitHorizontal", [
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
const fC = Dr("Trash", [
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
const Hp = Dr("Upload", [
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
const pC = Dr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hC = Dr("ZoomIn", [
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
const mC = Dr("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]), ul = (e) => {
  const t = f.useCallback(
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
  return f.useSyncExternalStore(
    t,
    () => e?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
}, ga = () => {
  const [e, t] = f.useState(!1);
  return f.useEffect(() => {
    const o = Be.subject.pipe(
      Yn(({ key: s }) => s.startsWith(p2))
    ).subscribe((s) => {
      s.key === Qm ? t(!0) : s.key === Gs && t(!1);
    });
    return () => o.unsubscribe();
  }, []), e;
}, gC = () => {
  const [e, t] = f.useState(!1), { duration: r, fps: o, scale: s, playerRef: a, activeIds: u } = Xn(), l = ul(a), d = () => {
    Be.dispatch(Gm);
  }, p = () => {
    Be.dispatch(Xm, {
      payload: {},
      options: {
        time: G2()
      }
    });
  }, m = (S) => {
    Be.dispatch(Jm, {
      payload: {
        scale: S
      }
    });
  }, g = () => {
    Be.dispatch(a2);
  }, v = () => {
    Be.dispatch(c2);
  };
  return f.useEffect(() => (a?.current?.addEventListener("play", () => {
    t(!0);
  }), a?.current?.addEventListener("pause", () => {
    t(!1);
  }), () => {
    a?.current?.removeEventListener("play", () => {
      t(!0);
    }), a?.current?.removeEventListener("pause", () => {
      t(!1);
    });
  }), [a]), /* @__PURE__ */ y.jsx(
    "div",
    {
      style: {
        position: "relative",
        height: "50px",
        boxShadow: "inset 0 1px 0 0 #27272a",
        flex: "none"
      },
      className: "bg-background",
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          style: {
            position: "absolute",
            height: 50,
            width: "100%",
            display: "flex",
            alignItems: "center"
          },
          children: /* @__PURE__ */ y.jsxs(
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
                /* @__PURE__ */ y.jsxs("div", { className: "flex px-2", children: [
                  /* @__PURE__ */ y.jsxs(
                    Zt,
                    {
                      disabled: !u.length,
                      onClick: d,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ y.jsx(fC, { size: 14 }),
                        " Delete"
                      ]
                    }
                  ),
                  /* @__PURE__ */ y.jsxs(
                    Zt,
                    {
                      disabled: !u.length,
                      onClick: p,
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ y.jsx(Up, { size: 15 }),
                        " Split"
                      ]
                    }
                  ),
                  /* @__PURE__ */ y.jsxs(
                    Zt,
                    {
                      disabled: !u.length,
                      onClick: () => {
                        Be.dispatch(qm);
                      },
                      variant: "ghost",
                      size: "sm",
                      className: "flex items-center gap-1 px-2",
                      children: [
                        /* @__PURE__ */ y.jsx(Up, { size: 15 }),
                        " Clone"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-center", children: [
                  /* @__PURE__ */ y.jsxs("div", { children: [
                    /* @__PURE__ */ y.jsx(
                      Zt,
                      {
                        onClick: d,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ y.jsx(lC, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      Zt,
                      {
                        onClick: () => {
                          if (e)
                            return v();
                          g();
                        },
                        variant: "ghost",
                        size: "icon",
                        children: e ? /* @__PURE__ */ y.jsx(cC, { size: 14 }) : /* @__PURE__ */ y.jsx(uC, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      Zt,
                      {
                        onClick: p,
                        variant: "ghost",
                        size: "icon",
                        children: /* @__PURE__ */ y.jsx(dC, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ y.jsxs(
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
                        /* @__PURE__ */ y.jsx(
                          "div",
                          {
                            className: "font-medium text-zinc-200",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            "data-current-time": l / o,
                            id: "video-current-time",
                            children: B2({ frame: l }, { fps: o })
                          }
                        ),
                        /* @__PURE__ */ y.jsx("span", { children: "/" }),
                        /* @__PURE__ */ y.jsx(
                          "div",
                          {
                            className: "text-muted-foreground",
                            style: {
                              display: "flex",
                              justifyContent: "center"
                            },
                            children: Y2({ time: r })
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ y.jsx(
                  vC,
                  {
                    scale: s,
                    onChangeTimelineScale: m,
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
}, vC = ({
  scale: e,
  onChangeTimelineScale: t,
  duration: r
}) => {
  const o = () => {
    const a = q2(e);
    t(a);
  }, s = () => {
    const a = Z2(e);
    t(a);
  };
  return /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ y.jsxs("div", { className: "flex border-l border-border pl-4 pr-2", children: [
    /* @__PURE__ */ y.jsx(
      Zt,
      {
        size: "icon",
        variant: "ghost",
        onClick: o,
        disabled: e.index === 0,
        children: /* @__PURE__ */ y.jsx(mC, { size: 16 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      Zt,
      {
        size: "icon",
        variant: "ghost",
        onClick: s,
        disabled: e.index === 20,
        children: /* @__PURE__ */ y.jsx(hC, { size: 16 })
      }
    )
  ] }) });
}, yC = [
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
], bC = [
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
], wC = [
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
], R8 = [
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
  const e = ga();
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-1 flex-col overflow-auto", children: [
    /* @__PURE__ */ y.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Transitions" }),
    /* @__PURE__ */ y.jsx(Fo, { children: /* @__PURE__ */ y.jsx("div", { className: "grid grid-cols-3 gap-2 px-4", children: SC.map((t, r) => /* @__PURE__ */ y.jsx(
      EC,
      {
        transition: t,
        shouldDisplayPreview: !e
      },
      r
    )) }) })
  ] });
}, EC = ({
  transition: e,
  shouldDisplayPreview: t
}) => {
  const r = Ie.useMemo(
    () => ({
      backgroundImage: `url(${e.preview})`,
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    [e.preview]
  );
  return /* @__PURE__ */ y.jsx(
    fa,
    {
      data: e,
      renderCustomPreview: /* @__PURE__ */ y.jsx("div", { style: r }),
      shouldDisplayPreview: t,
      children: /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx(
          "div",
          {
            style: r,
            draggable: !1
          }
        ) }),
        /* @__PURE__ */ y.jsx("div", { className: "flex h-6 items-center overflow-ellipsis text-nowrap text-[12px] capitalize text-muted-foreground", children: e.name || e.type })
      ] })
    }
  );
}, _C = () => {
  const e = () => {
    Be.dispatch(Ym, {
      payload: {
        id: It(),
        display: {
          from: 0,
          to: 5e3
        },
        details: {
          text: "Heading and some body",
          fontSize: 120,
          width: 600,
          fontUrl: $p.url,
          fontFamily: $p.postScriptName,
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
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ y.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Text" }),
    /* @__PURE__ */ y.jsx("div", { className: "flex flex-col gap-2 px-4", children: /* @__PURE__ */ y.jsx(
      Zt,
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
  const e = f.useRef(null), t = (o) => {
    r(o);
  }, r = async (o) => {
    const s = o[0].type;
    s.includes("audio") && Be.dispatch($i, {
      payload: {
        id: It(),
        details: {
          src: URL.createObjectURL(o[0]),
          volume: 50
        }
      }
    }), s.includes("video") && Be.dispatch(Fi, {
      payload: {
        id: It(),
        display: {
          from: 2e3,
          to: 7e3
        },
        details: {
          src: URL.createObjectURL(o[0]),
          name: o[0].name
        }
      }
    }), s.includes("image") && Be.dispatch(Vi, {
      payload: {
        id: It(),
        details: {
          src: URL.createObjectURL(o[0])
        }
      }
    });
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ y.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Your media" }),
    /* @__PURE__ */ y.jsx(
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
    /* @__PURE__ */ y.jsx("div", { className: "px-4 py-2", children: /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsxs(
      i2,
      {
        defaultValue: "projects",
        className: "w-full",
        children: [
          /* @__PURE__ */ y.jsxs(Bm, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ y.jsx(yu, { value: "projects", children: "Project" }),
            /* @__PURE__ */ y.jsx(yu, { value: "workspace", children: "Workspace" })
          ] }),
          /* @__PURE__ */ y.jsxs(bu, { value: "projects", children: [
            /* @__PURE__ */ y.jsxs(
              Zt,
              {
                onClick: () => {
                  e.current?.click();
                },
                className: "flex w-full gap-2",
                variant: "secondary",
                children: [
                  /* @__PURE__ */ y.jsx(Hp, { size: 16 }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ y.jsx("div", {})
          ] }),
          /* @__PURE__ */ y.jsx(bu, { value: "workspace", children: /* @__PURE__ */ y.jsxs(
            Zt,
            {
              onClick: () => {
                e.current?.click();
              },
              className: "flex w-full gap-2",
              variant: "secondary",
              children: [
                /* @__PURE__ */ y.jsx(Hp, { size: 16 }),
                " Upload"
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ y.jsx(Fo, { children: /* @__PURE__ */ y.jsx("div", { className: "masonry-sm px-4" }) })
  ] });
}, TC = () => {
  const e = ga(), t = (r) => {
    Be.dispatch($i, {
      payload: r,
      options: {}
    });
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ y.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Audios" }),
    /* @__PURE__ */ y.jsx(Fo, { children: /* @__PURE__ */ y.jsx("div", { className: "flex flex-col px-2", children: yC.map((r, o) => /* @__PURE__ */ y.jsx(
      IC,
      {
        shouldDisplayPreview: !e,
        handleAddAudio: t,
        audio: r
      },
      o
    )) }) })
  ] });
}, IC = ({
  handleAddAudio: e,
  audio: t,
  shouldDisplayPreview: r
}) => {
  const o = Ie.useMemo(
    () => ({
      backgroundImage: "url(https://cdn.designcombo.dev/thumbnails/music-preview.png)",
      backgroundSize: "cover",
      width: "70px",
      height: "70px"
    }),
    []
  );
  return /* @__PURE__ */ y.jsx(
    fa,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ y.jsx("div", { style: o }),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ y.jsxs(
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
            /* @__PURE__ */ y.jsx("div", { className: "flex h-12 items-center justify-center bg-zinc-800", children: /* @__PURE__ */ y.jsx(aC, { width: 16 }) }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ y.jsx("div", { children: t.name }),
              /* @__PURE__ */ y.jsx("div", { className: "text-zinc-400", children: t.metadata?.author })
            ] })
          ]
        }
      )
    }
  );
}, kC = () => {
  const e = ga(), t = (r) => {
    Be.dispatch(Vi, {
      payload: r,
      options: {
        trackId: "main"
      }
    });
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ y.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Photos" }),
    /* @__PURE__ */ y.jsx(Fo, { children: /* @__PURE__ */ y.jsx("div", { className: "masonry-sm px-4", children: bC.map((r, o) => /* @__PURE__ */ y.jsx(
      AC,
      {
        image: r,
        shouldDisplayPreview: !e,
        handleAddImage: t
      },
      o
    )) }) })
  ] });
}, AC = ({
  handleAddImage: e,
  image: t,
  shouldDisplayPreview: r
}) => {
  const o = Ie.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ y.jsx(
    fa,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ y.jsx("div", { style: o }),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          onClick: () => e({
            id: It(),
            details: {
              src: t.details.src
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ y.jsx(
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
}, RC = () => {
  const e = ga(), t = (r) => {
    Be.dispatch(Fi, {
      payload: r,
      options: {
        resourceId: "main"
      }
    });
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ y.jsx("div", { className: "text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium", children: "Videos" }),
    /* @__PURE__ */ y.jsx(Fo, { children: /* @__PURE__ */ y.jsx("div", { className: "masonry-sm px-4", children: wC.map((r, o) => /* @__PURE__ */ y.jsx(
      PC,
      {
        video: r,
        shouldDisplayPreview: !e,
        handleAddVideo: t
      },
      o
    )) }) })
  ] });
}, PC = ({
  handleAddVideo: e,
  video: t,
  shouldDisplayPreview: r
}) => {
  const o = Ie.useMemo(
    () => ({
      backgroundImage: `url(${t.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }),
    [t.preview]
  );
  return /* @__PURE__ */ y.jsx(
    fa,
    {
      data: t,
      renderCustomPreview: /* @__PURE__ */ y.jsx(
        "div",
        {
          style: o,
          className: "draggable"
        }
      ),
      shouldDisplayPreview: r,
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          onClick: () => e({
            ...t,
            id: It(),
            details: {
              src: t.details.src,
              ...t.details
            }
          }),
          className: "flex w-full items-center justify-center overflow-hidden bg-background pb-2",
          children: /* @__PURE__ */ y.jsx(
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
}, fg = lg((e) => ({
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
})), MC = ({ children: e }) => {
  const { showMenuItem: t, setShowMenuItem: r } = fg(), o = () => {
    r(!1);
  };
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      style: {
        left: t ? "0" : "-100%",
        transition: "left 0.25s ease-in-out",
        zIndex: 200
      },
      className: "absolute top-1/2 mt-6 flex h-[calc(100%-32px-64px)] w-[340px] -translate-y-1/2 rounded-lg shadow-lg",
      children: [
        /* @__PURE__ */ y.jsx("div", { className: "w-[74px]" }),
        /* @__PURE__ */ y.jsxs("div", { className: "relative flex flex-1 bg-background/80 backdrop-blur-lg backdrop-filter", children: [
          /* @__PURE__ */ y.jsx(
            Zt,
            {
              variant: "ghost",
              className: "absolute right-2 top-2 h-8 w-8 text-muted-foreground",
              size: "icon",
              children: /* @__PURE__ */ y.jsx(
                pC,
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
  const { activeMenuItem: e } = fg();
  return e === "transitions" ? /* @__PURE__ */ y.jsx(xC, {}) : e === "texts" ? /* @__PURE__ */ y.jsx(_C, {}) : e === "videos" ? /* @__PURE__ */ y.jsx(RC, {}) : e === "audios" ? /* @__PURE__ */ y.jsx(TC, {}) : e === "images" ? /* @__PURE__ */ y.jsx(kC, {}) : e === "uploads" ? /* @__PURE__ */ y.jsx(CC, {}) : null;
}, P8 = () => /* @__PURE__ */ y.jsx(MC, { children: /* @__PURE__ */ y.jsx(OC, {}) }), Wp = {
  redo: ({ ...e }) => /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ y.jsx(
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
  undo: ({ ...e }) => /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.60387 4.30711C9.99439 3.91659 9.99439 3.28342 9.60387 2.8929C9.21334 2.50238 8.58018 2.50237 8.18965 2.8929L2.8925 8.19004C2.70497 8.37758 2.59961 8.63193 2.59961 8.89715C2.59961 9.16237 2.70497 9.41672 2.8925 9.60426L8.18965 14.9014C8.58018 15.2919 9.21334 15.2919 9.60387 14.9014C9.99439 14.5109 9.99439 13.8777 9.60387 13.4872L5.86478 9.7481H15.1044C15.7383 9.7481 16.366 9.87295 16.9516 10.1155C17.5372 10.3581 18.0693 10.7136 18.5176 11.1619C18.9658 11.6101 19.3213 12.1422 19.5639 12.7278C19.8065 13.3134 19.9313 13.9411 19.9313 14.575C19.9313 15.2088 19.8065 15.8365 19.5639 16.4221C19.3213 17.0077 18.9658 17.5398 18.5176 17.9881C18.0693 18.4363 17.5372 18.7918 16.9516 19.0344C16.366 19.277 15.7383 19.4018 15.1044 19.4018H11.3964C10.8442 19.4018 10.3964 19.8495 10.3964 20.4018C10.3964 20.9541 10.8442 21.4018 11.3964 21.4018H15.1044C16.001 21.4018 16.8887 21.2252 17.717 20.8822C18.5452 20.5391 19.2978 20.0362 19.9318 19.4023C20.5657 18.7683 21.0686 18.0158 21.4116 17.1875C21.7547 16.3592 21.9313 15.4715 21.9313 14.575C21.9313 13.6784 21.7547 12.7907 21.4116 11.9624C21.0686 11.1342 20.5657 10.3816 19.9318 9.74764C19.2978 9.11371 18.5452 8.61085 17.717 8.26777C16.8887 7.92469 16.001 7.7481 15.1044 7.7481H6.16287L9.60387 4.30711Z",
          fill: "currentColor"
        }
      )
    }
  )
};
function M8() {
  const e = () => {
    Be.dispatch(Km);
  }, t = () => {
    Be.dispatch(Zm);
  };
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px"
      },
      className: "pointer-events-none absolute left-0 right-0 top-0 z-[205] flex h-[72px] items-center px-2",
      children: /* @__PURE__ */ y.jsxs("div", { className: "pointer-events-auto flex h-14 items-center gap-2", children: [
        /* @__PURE__ */ y.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-md bg-background" }),
        /* @__PURE__ */ y.jsxs("div", { className: "flex h-12 items-center bg-background px-1.5", children: [
          /* @__PURE__ */ y.jsx(
            Zt,
            {
              onClick: e,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ y.jsx(Wp.undo, { width: 20 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            Zt,
            {
              onClick: t,
              className: "text-muted-foreground",
              variant: "ghost",
              size: "icon",
              children: /* @__PURE__ */ y.jsx(Wp.redo, { width: 20 })
            }
          )
        ] })
      ] })
    }
  );
}
var NC = Object.defineProperty, pg = (e, t) => {
  for (var r in t)
    NC(e, r, {
      get: t[r],
      enumerable: !0,
      configurable: !0,
      set: (o) => t[r] = () => o
    });
};
if (typeof f.createContext != "function") {
  const e = [
    'Remotion requires React.createContext, but it is "undefined".',
    'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
    "",
    "Before:",
    '  import {useCurrentFrame} from "remotion";',
    "",
    "After:",
    '  "use client";',
    '  import {useCurrentFrame} from "remotion";'
  ];
  throw new Error(e.join(`
`));
}
function Bp() {
  return ["NOD", "E_EN", "V"].join("");
}
var Yp = () => ["e", "nv"].join(""), bt = () => {
  const e = typeof window < "u" && window.remotion_isPlayer, t = typeof window < "u" && typeof window.process < "u" && typeof window.process.env < "u" && (window.process[Yp()][Bp()] === "test" || window.process[Yp()][Bp()] === "production" && typeof window < "u" && typeof window.remotion_puppeteerTimeout < "u");
  return {
    isStudio: typeof window < "u" && window.remotion_isStudio,
    isRendering: t,
    isPlayer: e
  };
}, jC = Ie.createElement, hg = [], mg = () => {
  if (!bt().isStudio)
    return;
  const e = new Proxy(jC, {
    apply(t, r, o) {
      if (hg.includes(o[0])) {
        const [s, a, ...u] = o, l = {
          ...a ?? {},
          stack: new Error().stack
        };
        return Reflect.apply(t, r, [s, l, ...u]);
      }
      return Reflect.apply(t, r, o);
    }
  });
  Ie.createElement = e;
}, zi = (e) => {
  hg.push(e), mg();
}, gg = f.createContext(!1), DC = ({
  children: e
}) => /* @__PURE__ */ y.jsx(gg.Provider, {
  value: !0,
  children: e
}), ll = () => f.useContext(gg);
function va(e) {
  return !!e;
}
var Ls = "4.0.229", LC = () => {
  if (typeof globalThis > "u")
    return;
  const e = globalThis.remotion_imported || typeof window < "u" && window.remotion_imported;
  if (e) {
    if (e === Ls)
      return;
    throw new TypeError(`🚨 Multiple versions of Remotion detected: ${[
      Ls,
      typeof e == "string" ? e : "an older version"
    ].filter(va).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
  }
  globalThis.remotion_imported = Ls, typeof window < "u" && (window.remotion_imported = Ls);
}, FC = (e, t) => {
  const { style: r, ...o } = e, s = f.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    ...r
  }), [r]);
  return /* @__PURE__ */ y.jsx("div", {
    ref: t,
    style: s,
    ...o
  });
}, _i = f.forwardRef(FC), Bt = f.createContext(null), Vo = Ie.createContext({
  registerSequence: () => {
    throw new Error("SequenceManagerContext not initialized");
  },
  unregisterSequence: () => {
    throw new Error("SequenceManagerContext not initialized");
  },
  sequences: []
}), Ui = Ie.createContext({
  hidden: {},
  setHidden: () => {
    throw new Error("SequenceVisibilityToggle not initialized");
  }
}), $C = ({ children: e }) => {
  const [t, r] = f.useState([]), [o, s] = f.useState({}), a = f.useCallback((p) => {
    r((m) => [...m, p]);
  }, []), u = f.useCallback((p) => {
    r((m) => m.filter((g) => g.id !== p));
  }, []), l = f.useMemo(() => ({
    registerSequence: a,
    sequences: t,
    unregisterSequence: u
  }), [a, t, u]), d = f.useMemo(() => ({
    hidden: o,
    setHidden: s
  }), [o]);
  return /* @__PURE__ */ y.jsx(Vo.Provider, {
    value: l,
    children: /* @__PURE__ */ y.jsx(Ui.Provider, {
      value: d,
      children: e
    })
  });
}, zo = f.createContext({
  getNonce: () => 0,
  fastRefreshes: 0
}), dl = () => {
  const e = f.useContext(zo), [t, r] = f.useState(() => e.getNonce()), o = f.useRef(e);
  return f.useEffect(() => {
    o.current !== e && (o.current = e, r(e.getNonce));
  }, [e]), t;
}, vg = {};
pg(vg, {
  useTimelineSetFrame: () => Rg,
  useTimelinePosition: () => no,
  usePlayingState: () => ml,
  persistCurrentFrame: () => Ig,
  getInitialFrameState: () => kg,
  getFrameForComposition: () => Ag,
  TimelineContext: () => Nr,
  SetTimelineContext: () => Uo
});
var kn = f.createContext({
  compositions: [],
  registerComposition: () => {
  },
  unregisterComposition: () => {
  },
  registerFolder: () => {
  },
  unregisterFolder: () => {
  },
  setCurrentCompositionMetadata: () => {
  },
  updateCompositionDefaultProps: () => {
  },
  folders: [],
  currentCompositionMetadata: null,
  canvasContent: null,
  setCanvasContent: () => {
  }
}), ya = f.createContext({
  props: {},
  updateProps: () => {
    throw new Error("Not implemented");
  },
  resetUnsaved: () => {
    throw new Error("Not implemented");
  }
}), yg = Ie.createRef(), bg = ({ children: e }) => {
  const [t, r] = Ie.useState({}), o = f.useCallback(({
    defaultProps: u,
    id: l,
    newProps: d
  }) => {
    r((p) => ({
      ...p,
      [l]: typeof d == "function" ? d(p[l] ?? u) : d
    }));
  }, []), s = f.useCallback(() => {
    r({});
  }, []);
  f.useImperativeHandle(yg, () => ({
    getProps: () => t,
    setProps: r
  }), [t]);
  const a = f.useMemo(() => ({ props: t, updateProps: o, resetUnsaved: s }), [t, s, o]);
  return /* @__PURE__ */ y.jsx(ya.Provider, {
    value: a,
    children: e
  });
}, VC = {
  "%3A": ":",
  "%2F": "/",
  "%3F": "?",
  "%23": "#",
  "%5B": "[",
  "%5D": "]",
  "%40": "@",
  "%21": "!",
  "%24": "$",
  "%26": "&",
  "%27": "'",
  "%28": "(",
  "%29": ")",
  "%2A": "*",
  "%2B": "+",
  "%2C": ",",
  "%3B": ";"
}, Gp = {}, zC = (e) => {
  Gp[e] || (console.warn(e), Gp[e] = !0);
}, UC = (e) => {
  for (const t of Object.keys(VC))
    if (e.includes(t))
      return { containsHex: !0, hexCode: t };
  return { containsHex: !1 };
}, Iu = (e) => e.startsWith("/") ? Iu(e.substring(1)) : e, HC = (e) => {
  if (typeof window < "u" && window.remotion_staticBase) {
    if (e.startsWith(window.remotion_staticBase))
      throw new Error(`The value "${e}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);
    return `${window.remotion_staticBase}/${Iu(e)}`;
  }
  return `/${Iu(e)}`;
}, WC = (e) => e.split("/").map((s) => encodeURIComponent(s)).join("/"), BC = (e) => {
  if (e === null)
    throw new TypeError("null was passed to staticFile()");
  if (typeof e > "u")
    throw new TypeError("undefined was passed to staticFile()");
  if (e.startsWith("http://") || e.startsWith("https://"))
    throw new TypeError(`staticFile() does not support remote URLs - got "${e}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);
  if (e.startsWith("..") || e.startsWith("./"))
    throw new TypeError(`staticFile() does not support relative paths - got "${e}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);
  if (e.startsWith("/Users") || e.startsWith("/home") || e.startsWith("/tmp") || e.startsWith("/etc") || e.startsWith("/opt") || e.startsWith("/var") || e.startsWith("C:") || e.startsWith("D:") || e.startsWith("E:"))
    throw new TypeError(`staticFile() does not support absolute paths - got "${e}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);
  if (e.startsWith("public/"))
    throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${e}". See: https://remotion.dev/docs/staticfile-relative-paths`);
  const t = UC(e);
  t.containsHex && zC(`WARNING: You seem to pass an already encoded path (path contains ${t.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);
  const r = WC(e), o = HC(r);
  return o.startsWith("/") ? o : `/${o}`;
}, ku = "remotion-date:", Au = "remotion-file:", YC = ({
  data: e,
  indent: t,
  staticBase: r
}) => {
  let o = !1, s = !1, a = !1, u = !1;
  try {
    return { serializedString: JSON.stringify(e, function(d, p) {
      const m = this[d];
      return m instanceof Date ? (o = !0, `${ku}${m.toISOString()}`) : m instanceof Map ? (a = !0, p) : m instanceof Set ? (u = !0, p) : typeof m == "string" && r !== null && m.startsWith(r) ? (s = !0, `${Au}${m.replace(r + "/", "")}`) : p;
    }, t), customDateUsed: o, customFileUsed: s, mapUsed: a, setUsed: u };
  } catch (l) {
    throw new Error("Could not serialize the passed input props to JSON: " + l.message);
  }
}, wg = (e) => JSON.parse(e, (t, r) => typeof r == "string" && r.startsWith(ku) ? new Date(r.replace(ku, "")) : typeof r == "string" && r.startsWith(Au) ? BC(r.replace(Au, "")) : r), Wn = (e) => bt().isStudio ? wg(YC({
  data: e,
  indent: 2,
  staticBase: window.remotion_staticBase
}).serializedString) : e, qp = !1, GC = () => {
  qp || (qp = !0, console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object."), console.warn("To hide this warning, don't call this function on the server:"), console.warn("  typeof window === 'undefined' ? {} : getInputProps()"));
}, Sg = () => {
  if (typeof window > "u")
    return GC(), {};
  if (bt().isPlayer)
    throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
  const e = window.remotion_inputProps;
  return e ? wg(e) : {};
}, Xp = [
  "h264",
  "h265",
  "vp8",
  "vp9",
  "mp3",
  "aac",
  "wav",
  "prores",
  "h264-mkv",
  "h264-ts",
  "gif"
];
function qC(e, t) {
  if (!(typeof e > "u")) {
    if (typeof e != "string")
      throw new TypeError(`The "defaultCodec" prop ${t} must be a string, but you passed a value of type ${typeof e}.`);
    if (!Xp.includes(e))
      throw new Error(`The "defaultCodec" prop ${t} must be one of ${Xp.join(", ")}, but you passed ${e}.`);
  }
}
function Xs(e, t, r) {
  if (typeof e != "number")
    throw new Error(`The "${t}" prop ${r} must be a number, but you passed a value of type ${typeof e}`);
  if (isNaN(e))
    throw new TypeError(`The "${t}" prop ${r} must not be NaN, but is NaN.`);
  if (!Number.isFinite(e))
    throw new TypeError(`The "${t}" prop ${r} must be finite, but is ${e}.`);
  if (e % 1 !== 0)
    throw new TypeError(`The "${t}" prop ${r} must be an integer, but is ${e}.`);
  if (e <= 0)
    throw new TypeError(`The "${t}" prop ${r} must be positive, but got ${e}.`);
}
function fl(e, t) {
  const { allowFloats: r, component: o } = t;
  if (typeof e > "u")
    throw new Error(`The "durationInFrames" prop ${o} is missing.`);
  if (typeof e != "number")
    throw new Error(`The "durationInFrames" prop ${o} must be a number, but you passed a value of type ${typeof e}`);
  if (e <= 0)
    throw new TypeError(`The "durationInFrames" prop ${o} must be positive, but got ${e}.`);
  if (!r && e % 1 !== 0)
    throw new TypeError(`The "durationInFrames" prop ${o} must be an integer, but got ${e}.`);
  if (!Number.isFinite(e))
    throw new TypeError(`The "durationInFrames" prop ${o} must be finite, but got ${e}.`);
}
function xg(e, t, r) {
  if (typeof e != "number")
    throw new Error(`"fps" must be a number, but you passed a value of type ${typeof e} ${t}`);
  if (!Number.isFinite(e))
    throw new Error(`"fps" must be a finite, but you passed ${e} ${t}`);
  if (isNaN(e))
    throw new Error(`"fps" must not be NaN, but got ${e} ${t}`);
  if (e <= 0)
    throw new TypeError(`"fps" must be positive, but got ${e} ${t}`);
}
var Kp = ({
  calculated: e,
  compositionId: t,
  compositionFps: r,
  compositionHeight: o,
  compositionWidth: s,
  compositionDurationInFrames: a
}) => {
  const u = `calculated by calculateMetadata() for the composition "${t}"`, l = `of the "<Composition />" component with the id "${t}"`, d = e?.width ?? s ?? void 0;
  Xs(d, "width", e?.width ? u : l);
  const p = e?.height ?? o ?? void 0;
  Xs(p, "height", e?.height ? u : l);
  const m = e?.fps ?? r ?? null;
  xg(m, e?.fps ? u : l);
  const g = e?.durationInFrames ?? a ?? null;
  fl(g, {
    allowFloats: !1,
    component: `of the "<Composition />" component with the id "${t}"`
  });
  const v = e?.defaultCodec;
  return qC(v, u), { width: d, height: p, fps: m, durationInFrames: g, defaultCodec: v };
}, Eg = ({
  calculateMetadata: e,
  signal: t,
  defaultProps: r,
  originalProps: o,
  compositionId: s,
  compositionDurationInFrames: a,
  compositionFps: u,
  compositionHeight: l,
  compositionWidth: d
}) => {
  const p = e ? e({
    defaultProps: r,
    props: o,
    abortSignal: t,
    compositionId: s
  }) : null;
  if (p !== null && typeof p == "object" && "then" in p)
    return p.then((g) => {
      const { height: v, width: S, durationInFrames: _, fps: T, defaultCodec: C } = Kp({
        calculated: g,
        compositionDurationInFrames: a,
        compositionFps: u,
        compositionHeight: l,
        compositionWidth: d,
        compositionId: s
      });
      return {
        width: S,
        height: v,
        fps: T,
        durationInFrames: _,
        id: s,
        defaultProps: Wn(r),
        props: Wn(g.props ?? o),
        defaultCodec: C ?? null
      };
    });
  const m = Kp({
    calculated: p,
    compositionDurationInFrames: a,
    compositionFps: u,
    compositionHeight: l,
    compositionWidth: d,
    compositionId: s
  });
  return p === null ? {
    ...m,
    id: s,
    defaultProps: Wn(r ?? {}),
    props: Wn(o),
    defaultCodec: null
  } : {
    ...m,
    id: s,
    defaultProps: Wn(r ?? {}),
    props: Wn(p.props ?? o),
    defaultCodec: p.defaultCodec ?? null
  };
}, XC = (e) => {
  try {
    return {
      type: "success",
      result: Eg(e)
    };
  } catch (t) {
    return {
      type: "error",
      error: t
    };
  }
}, ba = f.createContext(null), _g = f.createRef(), Cg = (e) => !!e.calculateMetadata, KC = "remotion.propsUpdatedExternally", Tg = ({ children: e }) => {
  const [t, r] = f.useState(null), { compositions: o, canvasContent: s, currentCompositionMetadata: a } = f.useContext(kn), { fastRefreshes: u } = f.useContext(zo), l = f.useMemo(() => o.find((U) => s && s.type === "composition" && s.compositionId === U.id), [s, o]), d = o.find((U) => U.id === t), { props: p } = f.useContext(ya), m = f.useMemo(() => typeof window > "u" || bt().isPlayer ? {} : Sg() ?? {}, []), [g, v] = f.useState({}), S = f.useMemo(() => l ? p[l.id] ?? {} : {}, [p, l]), _ = f.useMemo(() => d ? p[d.id] ?? {} : {}, [p, d]), T = !!a, C = f.useCallback(({
    calculateMetadata: U,
    combinedProps: Y,
    compositionDurationInFrames: H,
    compositionFps: Z,
    compositionHeight: W,
    compositionId: Q,
    compositionWidth: ue,
    defaultProps: ye
  }) => {
    const ee = new AbortController();
    if (T)
      return ee;
    const { signal: me } = ee, xe = XC({
      compositionId: Q,
      calculateMetadata: U,
      originalProps: Y,
      signal: me,
      defaultProps: ye,
      compositionDurationInFrames: H,
      compositionFps: Z,
      compositionHeight: W,
      compositionWidth: ue
    });
    if (xe.type === "error")
      return v((R) => ({
        ...R,
        [Q]: {
          type: "error",
          error: xe.error
        }
      })), ee;
    const re = xe.result;
    return typeof re == "object" && "then" in re ? (v((R) => {
      const L = R[Q];
      return L?.type === "success" || L?.type === "success-and-refreshing" ? {
        ...R,
        [Q]: {
          type: "success-and-refreshing",
          result: L.result
        }
      } : {
        ...R,
        [Q]: {
          type: "loading"
        }
      };
    }), re.then((R) => {
      ee.signal.aborted || v((L) => ({
        ...L,
        [Q]: {
          type: "success",
          result: R
        }
      }));
    }).catch((R) => {
      ee.signal.aborted || v((L) => ({
        ...L,
        [Q]: {
          type: "error",
          error: R
        }
      }));
    })) : v((R) => ({
      ...R,
      [Q]: {
        type: "success",
        result: re
      }
    })), ee;
  }, [T]), A = s?.type === "composition" ? s.compositionId : null;
  f.useImperativeHandle(_g, () => ({
    setCurrentRenderModalComposition: (U) => {
      r(U);
    },
    reloadCurrentlySelectedComposition: () => {
      if (!A)
        return;
      const U = o.find((W) => W.id === A);
      if (!U)
        throw new Error(`Could not find composition with id ${A}`);
      const Y = p[A] ?? {}, H = {
        ...U.defaultProps ?? {},
        ...Y ?? {}
      }, Z = {
        ...H,
        ...m ?? {}
      };
      C({
        defaultProps: H,
        calculateMetadata: U.calculateMetadata,
        combinedProps: Z,
        compositionDurationInFrames: U.durationInFrames ?? null,
        compositionFps: U.fps ?? null,
        compositionHeight: U.height ?? null,
        compositionWidth: U.width ?? null,
        compositionId: U.id
      });
    }
  }), [
    p,
    o,
    A,
    C,
    m
  ]);
  const k = l?.id === d?.id, O = f.useMemo(() => ({
    ...l?.defaultProps ?? {},
    ...S ?? {}
  }), [l?.defaultProps, S]), N = f.useMemo(() => ({
    ...O,
    ...m ?? {}
  }), [O, m]), $ = l && Cg(l), V = typeof window < "u" && window.remotion_ignoreFastRefreshUpdate && u <= window.remotion_ignoreFastRefreshUpdate;
  f.useEffect(() => {
    if (!V && $) {
      const U = C({
        calculateMetadata: l.calculateMetadata,
        combinedProps: N,
        compositionDurationInFrames: l.durationInFrames ?? null,
        compositionFps: l.fps ?? null,
        compositionHeight: l.height ?? null,
        compositionWidth: l.width ?? null,
        defaultProps: O,
        compositionId: l.id
      });
      return () => {
        U.abort();
      };
    }
  }, [
    $,
    O,
    C,
    N,
    l?.calculateMetadata,
    l?.durationInFrames,
    l?.fps,
    l?.height,
    l?.id,
    l?.width,
    V
  ]), f.useEffect(() => {
    V || window.dispatchEvent(new CustomEvent("remotion.propsUpdatedExternally"));
  }, [u]), f.useEffect(() => {
    if (d && !k) {
      const U = {
        ...d.defaultProps ?? {},
        ..._ ?? {},
        ...m ?? {}
      }, Y = C({
        calculateMetadata: d.calculateMetadata,
        compositionDurationInFrames: d.durationInFrames ?? null,
        compositionFps: d.fps ?? null,
        compositionHeight: d.height ?? null,
        compositionId: d.id,
        compositionWidth: d.width ?? null,
        defaultProps: O,
        combinedProps: U
      });
      return () => {
        Y.abort();
      };
    }
  }, [
    O,
    C,
    m,
    k,
    d,
    _
  ]);
  const G = f.useMemo(() => {
    const U = o.filter((Y) => Y.calculateMetadata === null);
    return {
      ...g,
      ...U.reduce((Y, H) => ({
        ...Y,
        [H.id]: {
          type: "success",
          result: { ...H, defaultProps: H.defaultProps ?? {} }
        }
      }), {})
    };
  }, [o, g]);
  return /* @__PURE__ */ y.jsx(ba.Provider, {
    value: G,
    children: e
  });
}, pl = (e) => {
  const t = f.useContext(ba), { props: r } = f.useContext(ya), { compositions: o, canvasContent: s, currentCompositionMetadata: a } = f.useContext(kn), u = s?.type === "composition" ? s.compositionId : null, l = e ?? u, d = o.find((m) => m.id === l), p = f.useMemo(() => d ? r[d.id] ?? {} : {}, [r, d]);
  return f.useMemo(() => d ? a ? {
    type: "success",
    result: {
      ...a,
      id: d.id,
      props: a.props,
      defaultProps: d.defaultProps ?? {},
      defaultCodec: a.defaultCodec
    }
  } : Cg(d) ? t[d.id] ? t[d.id] : null : (fl(d.durationInFrames, {
    allowFloats: !1,
    component: `in <Composition id="${d.id}">`
  }), xg(d.fps, `in <Composition id="${d.id}">`), Xs(d.width, "width", `in <Composition id="${d.id}">`), Xs(d.height, "height", `in <Composition id="${d.id}">`), {
    type: "success",
    result: {
      width: d.width,
      height: d.height,
      fps: d.fps,
      id: d.id,
      durationInFrames: d.durationInFrames,
      defaultProps: d.defaultProps ?? {},
      props: {
        ...d.defaultProps ?? {},
        ...p ?? {},
        ...typeof window > "u" || bt().isPlayer ? {} : Sg() ?? {}
      },
      defaultCodec: null
    }
  }) : null, [d, t, a, p]);
}, wa = () => {
  const { canvasContent: e, compositions: t, currentCompositionMetadata: r } = f.useContext(kn), o = t.find((a) => e?.type === "composition" && a.id === e.compositionId), s = pl(o?.id ?? null);
  return f.useMemo(() => !s || s.type === "error" || s.type === "loading" || !o ? null : {
    ...s.result,
    defaultProps: o.defaultProps ?? {},
    id: o.id,
    ...r ?? {},
    component: o.component
  }, [r, s, o]);
}, Nr = f.createContext({
  frame: {},
  playing: !1,
  playbackRate: 1,
  rootId: "",
  imperativePlaying: {
    current: !1
  },
  setPlaybackRate: () => {
    throw new Error("default");
  },
  audioAndVideoTags: { current: [] }
}), Uo = f.createContext({
  setFrame: () => {
    throw new Error("default");
  },
  setPlaying: () => {
    throw new Error("default");
  }
}), hl = () => "remotion.time-all", Ig = (e) => {
  localStorage.setItem(hl(), JSON.stringify(e));
}, kg = () => {
  const e = localStorage.getItem(hl()) ?? "{}";
  return JSON.parse(e);
}, Ag = (e) => {
  const t = localStorage.getItem(hl()) ?? "{}", r = JSON.parse(t);
  return r[e] !== void 0 ? Number(r[e]) : typeof window > "u" ? 0 : window.remotion_initialFrame ?? 0;
}, no = () => {
  const e = wa(), t = f.useContext(Nr);
  if (!e)
    return typeof window > "u" ? 0 : window.remotion_initialFrame ?? 0;
  const r = t.frame[e.id] ?? (bt().isPlayer ? 0 : Ag(e.id));
  return Math.min(e.durationInFrames - 1, r);
}, Rg = () => {
  const { setFrame: e } = f.useContext(Uo);
  return e;
}, ml = () => {
  const { playing: e, imperativePlaying: t } = f.useContext(Nr), { setPlaying: r } = f.useContext(Uo);
  return f.useMemo(() => [e, r, t], [t, e, r]);
}, oo = f.createContext(!1), Ru = ({ children: e }) => /* @__PURE__ */ y.jsx(oo.Provider, {
  value: !0,
  children: e
}), Sa = () => {
  const e = f.useContext(Bt), t = e?.width ?? null, r = e?.height ?? null, o = e?.durationInFrames ?? null, s = wa();
  return f.useMemo(() => {
    if (!s)
      return null;
    const {
      id: a,
      durationInFrames: u,
      fps: l,
      height: d,
      width: p,
      defaultProps: m,
      props: g,
      defaultCodec: v
    } = s;
    return {
      id: a,
      width: t ?? p,
      height: r ?? d,
      fps: l,
      durationInFrames: o ?? u,
      defaultProps: m,
      props: g,
      defaultCodec: v
    };
  }, [o, r, t, s]);
}, An = () => {
  const e = Sa(), t = f.useContext(oo), r = ll();
  if (!e)
    throw typeof window < "u" && window.remotion_isPlayer || r ? new Error([
      "No video config found. Likely reasons:",
      "- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
      "- You have multiple versions of Remotion installed which causes the React context to get lost."
    ].join("-")) : new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
  if (!t)
    throw new Error("Called useVideoConfig() outside a Remotion composition.");
  return e;
}, Rn = () => {
  if (!f.useContext(oo))
    throw bt().isPlayer ? new Error("useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples") : new Error("useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions");
  const t = no(), r = f.useContext(Bt), o = r ? r.cumulatedFrom + r.relativeFrom : 0;
  return t - o;
}, ZC = ({
  frame: e,
  children: t,
  active: r = !0
}) => {
  const o = Rn(), s = An();
  if (typeof e > "u")
    throw new Error("The <Freeze /> component requires a 'frame' prop, but none was passed.");
  if (typeof e != "number")
    throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof e}`);
  if (Number.isNaN(e))
    throw new Error("The 'frame' prop of <Freeze /> must be a real number, but it is NaN.");
  if (!Number.isFinite(e))
    throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${e}.`);
  const a = f.useMemo(() => {
    if (typeof r == "boolean")
      return r;
    if (typeof r == "function")
      return r(o);
  }, [r, o]), u = f.useContext(Nr), d = f.useContext(Bt)?.relativeFrom ?? 0, p = f.useMemo(() => a ? {
    ...u,
    playing: !1,
    imperativePlaying: {
      current: !1
    },
    frame: {
      [s.id]: e + d
    }
  } : u, [a, u, s.id, e, d]);
  return /* @__PURE__ */ y.jsx(Nr.Provider, {
    value: p,
    children: t
  });
}, JC = ({
  from: e = 0,
  durationInFrames: t = 1 / 0,
  children: r,
  name: o,
  height: s,
  width: a,
  showInTimeline: u = !0,
  _remotionInternalLoopDisplay: l,
  _remotionInternalStack: d,
  _remotionInternalPremountDisplay: p,
  ...m
}, g) => {
  const { layout: v = "absolute-fill" } = m, [S] = f.useState(() => String(Math.random())), _ = f.useContext(Bt), { rootId: T } = f.useContext(Nr), C = _ ? _.cumulatedFrom + _.relativeFrom : 0, A = dl();
  if (v !== "absolute-fill" && v !== "none")
    throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${v}`);
  if (v === "none" && typeof m.style < "u")
    throw new TypeError('If layout="none", you may not pass a style.');
  if (typeof t != "number")
    throw new TypeError(`You passed to durationInFrames an argument of type ${typeof t}, but it must be a number.`);
  if (t <= 0)
    throw new TypeError(`durationInFrames must be positive, but got ${t}`);
  if (typeof e != "number")
    throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof e}, but it must be a number.`);
  if (!Number.isFinite(e))
    throw new TypeError(`The "from" prop of a sequence must be finite, but got ${e}.`);
  const k = no(), O = An(), N = _ ? Math.min(_.durationInFrames - e, t) : t, $ = Math.max(0, Math.min(O.durationInFrames - e, N)), { registerSequence: V, unregisterSequence: G } = f.useContext(Vo), { hidden: U } = f.useContext(Ui), Y = f.useMemo(() => _?.premounting ?? !!m._remotionInternalIsPremounting, [m._remotionInternalIsPremounting, _?.premounting]), H = f.useMemo(() => ({
    cumulatedFrom: C,
    relativeFrom: e,
    durationInFrames: $,
    parentFrom: _?.relativeFrom ?? 0,
    id: S,
    height: s ?? _?.height ?? null,
    width: a ?? _?.width ?? null,
    premounting: Y
  }), [
    C,
    e,
    $,
    _,
    S,
    s,
    a,
    Y
  ]), Z = f.useMemo(() => o ?? "", [o]);
  f.useEffect(() => {
    if (bt().isStudio)
      return V({
        from: e,
        duration: $,
        id: S,
        displayName: Z,
        parent: _?.id ?? null,
        type: "sequence",
        rootId: T,
        showInTimeline: u,
        nonce: A,
        loopDisplay: l,
        stack: d ?? null,
        premountDisplay: p ?? null
      }), () => {
        G(S);
      };
  }, [
    t,
    S,
    o,
    V,
    Z,
    G,
    _?.id,
    $,
    T,
    e,
    u,
    A,
    l,
    d,
    p
  ]);
  const W = Math.ceil(C + e + t - 1), Q = k < C + e || k > W ? null : r, ue = m.layout === "none" ? void 0 : m.style, ye = f.useMemo(() => ({
    flexDirection: void 0,
    ...a ? { width: a } : {},
    ...s ? { height: s } : {},
    ...ue ?? {}
  }), [s, ue, a]);
  if (g !== null && v === "none")
    throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
  return U[S] ?? !1 ? null : /* @__PURE__ */ y.jsx(Bt.Provider, {
    value: H,
    children: Q === null ? null : m.layout === "none" ? Q : /* @__PURE__ */ y.jsx(_i, {
      ref: g,
      style: ye,
      className: m.className,
      children: Q
    })
  });
}, QC = f.forwardRef(JC), eT = (e, t) => {
  const r = Rn();
  if (e.layout === "none")
    throw new Error('`<Sequence>` with `premountFor` prop does not support layout="none"');
  const { style: o, from: s = 0, premountFor: a = 0, ...u } = e, l = r < s && r >= s - a, d = f.useMemo(() => ({
    ...o,
    opacity: l ? 0 : 1,
    pointerEvents: l ? "none" : o?.pointerEvents ?? void 0
  }), [l, o]);
  return /* @__PURE__ */ y.jsx(ZC, {
    frame: s,
    active: l,
    children: /* @__PURE__ */ y.jsx(Ur, {
      ref: t,
      from: s,
      style: d,
      _remotionInternalPremountDisplay: a,
      _remotionInternalIsPremounting: l,
      ...u
    })
  });
}, tT = f.forwardRef(eT), rT = (e, t) => e.layout !== "none" && e.premountFor && !bt().isRendering ? /* @__PURE__ */ y.jsx(tT, {
  ...e,
  ref: t
}) : /* @__PURE__ */ y.jsx(QC, {
  ...e,
  ref: t
}), Ur = f.forwardRef(rT), nT = (e) => {
  if (typeof e != "string")
    throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof e}`);
  if (e.trim() === "")
    throw new Error("The `filename` must not be empty");
  if (!e.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g))
    throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
}, oT = (e) => {
  if (typeof e != "string" && !(e instanceof Uint8Array))
    throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof e}`);
  if (typeof e == "string" && e.trim() === "")
    throw new Error("The `content` must not be empty");
}, Pg = (e) => {
  e.type === "artifact" && (nT(e.filename), oT(e.content));
}, io = f.createContext({
  registerRenderAsset: () => {
  },
  unregisterRenderAsset: () => {
  },
  renderAssets: []
}), iT = ({ children: e }) => {
  const [t, r] = f.useState([]), o = f.useCallback((u) => {
    Pg(u), r((l) => [...l, u]);
  }, []), s = f.useCallback((u) => {
    r((l) => l.filter((d) => d.id !== u));
  }, []);
  f.useLayoutEffect(() => {
    typeof window < "u" && (window.remotion_collectAssets = () => (r([]), t));
  }, [t]);
  const a = f.useMemo(() => ({
    registerRenderAsset: o,
    unregisterRenderAsset: s,
    renderAssets: t
  }), [t, o, s]);
  return /* @__PURE__ */ y.jsx(io.Provider, {
    value: a,
    children: e
  });
}, cn = (e) => typeof window > "u" ? e : new URL(e, window.origin).href, Mg = ({
  endAt: e,
  mediaDuration: t,
  playbackRate: r,
  startFrom: o
}) => {
  let s = t;
  typeof e < "u" && (s = e), typeof o < "u" && (s -= o);
  const a = s / r;
  return Math.floor(a);
};
function Ri(e) {
  let t;
  throw sT(e) ? (t = e, t.stack || (t.stack = new Error(t.message).stack)) : typeof e == "string" ? t = Error(e) : t = Error("Rendering was cancelled"), window.remotion_cancelledError = t.stack, t;
}
var sT = (e) => e instanceof Error ? !0 : !(e === null || typeof e != "object" || !("stack" in e) || typeof e.stack != "string" || !("message" in e) || typeof e.message != "string"), Og = f.createContext(null), aT = () => Ie.useContext(Og), xa = ({ durationInFrames: e, times: t = 1 / 0, children: r, name: o, ...s }) => {
  const a = Rn(), { durationInFrames: u } = An();
  if (fl(e, {
    component: "of the <Loop /> component",
    allowFloats: !0
  }), typeof t != "number")
    throw new TypeError(`You passed to "times" an argument of type ${typeof t}, but it must be a number.`);
  if (t !== 1 / 0 && t % 1 !== 0)
    throw new TypeError(`The "times" prop of a loop must be an integer, but got ${t}.`);
  if (t < 0)
    throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${t}`);
  const l = Math.ceil(u / e), d = Math.min(l, t), p = s.layout === "none" ? void 0 : s.style, m = e * (d - 1), v = Math.floor(a / e) * e, S = Math.min(v, m), _ = f.useMemo(() => ({
    numberOfTimes: d,
    startOffset: -S,
    durationInFrames: e
  }), [d, e, S]), T = f.useMemo(() => ({
    iteration: Math.floor(a / e),
    durationInFrames: e
  }), [a, e]);
  return /* @__PURE__ */ y.jsx(Og.Provider, {
    value: T,
    children: /* @__PURE__ */ y.jsx(Ur, {
      durationInFrames: e,
      from: S,
      name: o ?? "<Loop>",
      _remotionInternalLoopDisplay: _,
      layout: s.layout,
      style: p,
      children: r
    })
  });
};
xa.useLoop = aT;
var Ea = f.createContext({}), Zp = {}, qc = [], Ng = ({ children: e }) => {
  const [t, r] = f.useState(() => Zp);
  return f.useEffect(() => {
    const o = () => {
      r(Zp);
    };
    return qc.push(o), () => {
      qc = qc.filter((s) => s !== o);
    };
  }, []), /* @__PURE__ */ y.jsx(Ea.Provider, {
    value: t,
    children: e
  });
}, Ho = (e) => f.useContext(Ea)[e] ?? e, gl = (e, t) => {
  if (typeof e.volume != "number" && typeof e.volume != "function" && typeof e.volume < "u")
    throw new TypeError(`You have passed a volume of type ${typeof e.volume} to your <${t} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
  if (typeof e.volume == "number" && e.volume < 0)
    throw new TypeError(`You have passed a volume below 0 to your <${t} /> component. Volume must be between 0 and 1`);
  if (typeof e.playbackRate != "number" && typeof e.playbackRate < "u")
    throw new TypeError(`You have passed a playbackRate of type ${typeof e.playbackRate} to your <${t} /> component. Playback rate must a real number or undefined.`);
  if (typeof e.playbackRate == "number" && (isNaN(e.playbackRate) || !Number.isFinite(e.playbackRate) || e.playbackRate <= 0))
    throw new TypeError(`You have passed a playbackRate of ${e.playbackRate} to your <${t} /> component. Playback rate must be a real number above 0.`);
}, vl = (e, t) => {
  if (typeof e < "u") {
    if (typeof e != "number")
      throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof e}.`);
    if (isNaN(e) || e === 1 / 0)
      throw new TypeError("startFrom prop can not be NaN or Infinity.");
    if (e < 0)
      throw new TypeError(`startFrom must be greater than equal to 0 instead got ${e}.`);
  }
  if (typeof t < "u") {
    if (typeof t != "number")
      throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof t}.`);
    if (isNaN(t))
      throw new TypeError("endAt prop can not be NaN.");
    if (t <= 0)
      throw new TypeError(`endAt must be a positive number, instead got ${t}.`);
  }
  if (t < e)
    throw new TypeError("endAt prop must be greater than startFrom prop.");
}, cT = (e, t) => {
  switch (t.type) {
    case "got-duration": {
      const r = cn(t.src);
      return e[r] === t.durationInSeconds ? e : {
        ...e,
        [r]: t.durationInSeconds
      };
    }
    default:
      return e;
  }
}, yl = f.createContext({
  durations: {},
  setDurations: () => {
    throw new Error("context missing");
  }
}), jg = ({ children: e }) => {
  const [t, r] = f.useReducer(cT, {}), o = f.useMemo(() => ({
    durations: t,
    setDurations: r
  }), [t]);
  return /* @__PURE__ */ y.jsx(yl.Provider, {
    value: o,
    children: e
  });
};
function Jp(e) {
  let t = e + 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function uT(e) {
  let t = 0, r = 0, o = 0;
  for (t = 0; t < e.length; t++)
    r = e.charCodeAt(t), o = (o << 5) - o + r, o |= 0;
  return o;
}
var so = (e, t) => {
  if (e === null)
    return Math.random();
  if (typeof e == "string")
    return Jp(uT(e));
  if (typeof e == "number")
    return Jp(e * 1e10);
  throw new Error("random() argument must be a number or a string");
}, Wo = () => {
  const e = f.useContext(Bt);
  return Math.min(0, e?.relativeFrom ?? 0);
}, Hi = (e) => {
  const t = xa.useLoop(), r = Rn(), o = Wo();
  return e === "repeat" || t === null ? r + o : r + o + t.durationInFrames * t.iteration;
}, lT = (e) => {
  if (/data:|blob:/.test(e.substring(0, 5)))
    return "Data URL";
  const t = e.split("/").map((r) => r.split("\\")).flat(1);
  return t[t.length - 1];
}, Ks = (e, t, r) => {
  const { current: o } = e;
  if (!o)
    return;
  const s = o.play();
  s.catch && s.catch((a) => {
    if (o && !a.message.includes("request was interrupted by a call to pause") && !a.message.includes("The operation was aborted.") && !a.message.includes("The fetching process for the media resource was aborted by the user agent") && !a.message.includes("request was interrupted by a new load request") && !a.message.includes("because the media was removed from the document") && !(a.message.includes("user didn't interact with the document") && o.muted) && (console.log(`Could not play ${t} due to following error: `, a), !o.muted)) {
      if (r) {
        r();
        return;
      }
      console.log("The video will be muted and we'll retry playing it."), t === "video" && bt().isPlayer && console.log("Use onAutoPlayError() to handle this error yourself."), o.muted = !0, o.play();
    }
  });
}, Bo = ({
  frame: e,
  volume: t,
  mediaVolume: r = 1,
  allowAmplificationDuringRender: o
}) => {
  const s = o ? 1 / 0 : 1;
  if (typeof t == "number")
    return Math.min(s, t * r);
  if (typeof t > "u")
    return Number(r);
  const a = t(e) * r;
  if (typeof a != "number")
    throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof a} for frame ${e}`);
  if (Number.isNaN(a))
    throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${e}.`);
  if (!Number.isFinite(a))
    throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${e}.`);
  return Math.max(0, Math.min(s, a));
}, Qp = {}, dT = (e) => {
  Qp[e] || (console.warn(e), Qp[e] = !0);
}, Dg = ({
  volume: e,
  mediaVolume: t,
  mediaRef: r,
  src: o,
  mediaType: s,
  playbackRate: a,
  displayName: u,
  id: l,
  stack: d,
  showInTimeline: p,
  premountDisplay: m,
  onAutoPlayError: g
}) => {
  const v = An(), { rootId: S, audioAndVideoTags: _ } = f.useContext(Nr), T = f.useContext(Bt), C = T ? T.relativeFrom + T.cumulatedFrom : 0, [A] = ml(), k = Wo(), { registerSequence: O, unregisterSequence: N } = f.useContext(Vo), [$] = f.useState(() => e), V = dl(), G = T ? Math.min(T.durationInFrames, v.durationInFrames) : v.durationInFrames, U = typeof e == "function", Y = f.useMemo(() => typeof e == "number" ? e : new Array(Math.floor(Math.max(0, G + k))).fill(!0).map((H, Z) => Bo({
    frame: Z + k,
    volume: e,
    mediaVolume: t,
    allowAmplificationDuringRender: !1
  })).join(","), [G, k, e, t]);
  f.useEffect(() => {
    typeof e == "number" && e !== $ && dT(`Remotion: The ${s} with src ${o} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/using-audio/#controlling-volume`);
  }, [$, s, o, e]), f.useEffect(() => {
    if (r.current) {
      if (!o)
        throw new Error("No src passed");
      if (!(!bt().isStudio && window.process?.env?.NODE_ENV !== "test") && p)
        return O({
          type: s,
          src: o,
          id: l,
          duration: G,
          from: 0,
          parent: T?.id ?? null,
          displayName: u ?? lT(o),
          rootId: S,
          volume: Y,
          showInTimeline: !0,
          nonce: V,
          startMediaFrom: 0 - k,
          doesVolumeChange: U,
          loopDisplay: void 0,
          playbackRate: a,
          stack: d,
          premountDisplay: m
        }), () => {
          N(l);
        };
    }
  }, [
    C,
    G,
    l,
    T,
    o,
    O,
    S,
    N,
    v,
    Y,
    U,
    V,
    r,
    s,
    k,
    a,
    u,
    d,
    p,
    m
  ]), f.useEffect(() => {
    const H = {
      id: l,
      play: () => {
        if (A)
          return Ks(r, s, g);
      }
    };
    return _.current.push(H), () => {
      _.current = _.current.filter((Z) => Z.id !== l);
    };
  }, [_, l, r, s, g, A]);
}, fT = () => {
  const [e, t] = f.useState([]), [r, o] = f.useState([]), [s, a] = f.useState([]), u = f.useRef(!1), l = f.useCallback((m) => (t((g) => [...g, m]), {
    unblock: () => {
      t((g) => {
        const v = g.filter((S) => S !== m);
        return v.length === g.length ? g : v;
      });
    }
  }), []), d = f.useCallback((m) => (o((g) => [...g, m]), {
    remove: () => {
      o((g) => g.filter((v) => v !== m));
    }
  }), []), p = f.useCallback((m) => (a((g) => [...g, m]), {
    remove: () => {
      a((g) => g.filter((v) => v !== m));
    }
  }), []);
  return f.useEffect(() => {
    e.length > 0 && r.forEach((m) => m());
  }, [e]), f.useEffect(() => {
    e.length === 0 && s.forEach((m) => m());
  }, [e]), f.useMemo(() => ({ addBlock: l, listenForBuffering: d, listenForResume: p, buffering: u }), [l, u, d, p]);
}, Yo = Ie.createContext(null), Lg = ({ children: e }) => {
  const t = fT();
  return /* @__PURE__ */ y.jsx(Yo.Provider, {
    value: t,
    children: e
  });
}, pT = (e) => {
  const [t, r] = f.useState(e.buffering.current);
  return f.useEffect(() => {
    const o = () => {
      r(!0);
    }, s = () => {
      r(!1);
    };
    return e.listenForBuffering(o), e.listenForResume(s), () => {
      e.listenForBuffering(() => {
      }), e.listenForResume(() => {
      });
    };
  }, [e]), t;
}, bl = () => {
  const e = f.useContext(Yo), t = e ? e.addBlock : null;
  return f.useMemo(() => ({
    delayPlayback: () => {
      if (!t)
        throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
      const { unblock: r } = t({
        id: String(Math.random())
      });
      return { unblock: r };
    }
  }), [t]);
}, hT = ({
  mediaRef: e,
  mediaType: t,
  onVariableFpsVideoDetected: r,
  pauseWhenBuffering: o
}) => {
  const s = f.useRef(!1), { delayPlayback: a } = bl(), u = f.useCallback((l) => {
    if (t !== "video" || !o)
      return;
    const d = e.current;
    if (!d || !d.requestVideoFrameCallback)
      return;
    s.current = !0;
    const p = a(), m = () => {
      p.unblock(), d.removeEventListener("ended", m, {
        once: !0
      }), d.removeEventListener("pause", m, {
        once: !0
      }), s.current = !1;
    }, g = () => {
      m();
    };
    d.requestVideoFrameCallback((v, S) => {
      Math.abs(S.mediaTime - l) > 0.5 && r(), m();
    }), d.addEventListener("ended", g, { once: !0 }), d.addEventListener("pause", g, { once: !0 }), d.addEventListener("canplay", g, {
      once: !0
    });
  }, [
    a,
    e,
    t,
    r,
    o
  ]);
  return f.useMemo(() => ({
    isBuffering: () => s.current,
    bufferUntilFirstFrame: u
  }), [u]);
}, mT = ({
  element: e,
  shouldBuffer: t,
  isPremounting: r
}) => {
  const o = bl(), [s, a] = f.useState(!1);
  return f.useEffect(() => {
    let u = [];
    const { current: l } = e;
    if (!l || !t || r)
      return;
    const d = () => {
      u.forEach((g) => g()), u = [], a(!1);
    }, p = () => {
      a(!0);
      const { unblock: g } = o.delayPlayback(), v = () => {
        d(), m();
      }, S = () => {
        d(), m();
      };
      l.addEventListener("canplay", v, {
        once: !0
      }), u.push(() => {
        l.removeEventListener("canplay", v);
      }), l.addEventListener("error", S, {
        once: !0
      }), u.push(() => {
        l.removeEventListener("error", S);
      }), u.push(() => {
        g();
      });
    }, m = () => {
      l.readyState < l.HAVE_FUTURE_DATA ? (p(), navigator.userAgent.includes("Firefox/") || l.load()) : (l.addEventListener("waiting", p), u.push(() => {
        l.removeEventListener("waiting", p);
      }));
    };
    return m(), () => {
      d();
    };
  }, [o, e, r, t]), s;
}, gT = ({
  mediaRef: e,
  mediaType: t,
  lastSeek: r,
  onVariableFpsVideoDetected: o
}) => {
  const s = f.useRef(null);
  return f.useEffect(() => {
    const { current: a } = e;
    if (a)
      s.current = a.currentTime;
    else {
      s.current = null;
      return;
    }
    if (t !== "video") {
      s.current = null;
      return;
    }
    const u = a;
    if (!u.requestVideoFrameCallback)
      return;
    let l = () => {
    };
    const d = () => {
      if (!u)
        return;
      const p = u.requestVideoFrameCallback((m, g) => {
        if (s.current !== null) {
          const v = Math.abs(s.current - g.mediaTime), S = Math.abs(r.current === null ? 1 / 0 : g.mediaTime - r.current);
          v > 0.5 && S > 0.5 && g.mediaTime > s.current && o();
        }
        s.current = g.mediaTime, d();
      });
      l = () => {
        u.cancelVideoFrameCallback(p), l = () => {
        };
      };
    };
    return d(), () => {
      l();
    };
  }, [r, e, t, o]), s;
};
function vT(e, t, r, o) {
  const { extrapolateLeft: s, extrapolateRight: a, easing: u } = o;
  let l = e;
  const [d, p] = t, [m, g] = r;
  if (l < d) {
    if (s === "identity")
      return l;
    if (s === "clamp")
      l = d;
    else if (s === "wrap") {
      const v = p - d;
      l = ((l - d) % v + v) % v + d;
    }
  }
  if (l > p) {
    if (a === "identity")
      return l;
    if (a === "clamp")
      l = p;
    else if (a === "wrap") {
      const v = p - d;
      l = ((l - d) % v + v) % v + d;
    }
  }
  return m === g ? m : (l = (l - d) / (p - d), l = u(l), l = l * (g - m) + m, l);
}
function yT(e, t) {
  let r;
  for (r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
function bT(e) {
  for (let t = 1; t < e.length; ++t)
    if (!(e[t] > e[t - 1]))
      throw new Error(`inputRange must be strictly monotonically increasing but got [${e.join(",")}]`);
}
function eh(e, t) {
  if (t.length < 2)
    throw new Error(e + " must have at least 2 elements");
  for (const r of t) {
    if (typeof r != "number")
      throw new Error(`${e} must contain only numbers`);
    if (!Number.isFinite(r))
      throw new Error(`${e} must contain only finite numbers, but got [${t.join(",")}]`);
  }
}
function Fg(e, t, r, o) {
  if (typeof e > "u")
    throw new Error("input can not be undefined");
  if (typeof t > "u")
    throw new Error("inputRange can not be undefined");
  if (typeof r > "u")
    throw new Error("outputRange can not be undefined");
  if (t.length !== r.length)
    throw new Error("inputRange (" + t.length + ") and outputRange (" + r.length + ") must have the same length");
  eh("inputRange", t), eh("outputRange", r), bT(t);
  const s = o?.easing ?? ((d) => d);
  let a = "extend";
  o?.extrapolateLeft !== void 0 && (a = o.extrapolateLeft);
  let u = "extend";
  if (o?.extrapolateRight !== void 0 && (u = o.extrapolateRight), typeof e != "number")
    throw new TypeError("Cannot interpolate an input which is not a number");
  const l = yT(e, t);
  return vT(e, [t[l], t[l + 1]], [r[l], r[l + 1]], {
    easing: s,
    extrapolateLeft: a,
    extrapolateRight: u
  });
}
var $g = ({
  frame: e,
  playbackRate: t,
  startFrom: r
}) => Fg(e, [-1, r, r + 1], [-1, r, r + t]), Vg = ({
  fps: e,
  frame: t,
  playbackRate: r,
  startFrom: o
}) => {
  const s = $g({
    frame: t,
    playbackRate: r,
    startFrom: o
  }), a = 1e3 / e;
  return s * a / 1e3;
}, zg = (e, t) => Math.round(e / t * 100) / 100, _a = () => {
  if (typeof window > "u")
    return !1;
  const e = /iP(ad|od|hone)/i.test(window.navigator.userAgent), t = /AppleWebKit/.test(window.navigator.userAgent);
  return e && t;
}, wT = (e) => _a() && e.startsWith("blob:"), Pu = ({
  actualFrom: e,
  fps: t
}) => zg(Math.max(0, -e), t), Mu = ({
  duration: e,
  fps: t
}) => zg(e, t), ST = ({
  actualSrc: e,
  actualFrom: t,
  duration: r,
  fps: o
}) => {
  if (wT(e) || e.startsWith("data:") || !!new URL(e, (typeof window > "u" ? null : window.location.href) ?? "http://localhost:3000").hash || !Number.isFinite(t))
    return e;
  const a = `${e}#t=${Pu({ actualFrom: t, fps: o })}`;
  return Number.isFinite(r) ? `${a},${Mu({ duration: r, fps: o })}` : a;
}, xT = ({
  prevStartFrom: e,
  newStartFrom: t,
  prevDuration: r,
  newDuration: o,
  fps: s
}) => {
  const a = Pu({ actualFrom: e, fps: s }), u = Pu({ actualFrom: t, fps: s }), l = Mu({ duration: r, fps: s }), d = Mu({ duration: o, fps: s });
  return !(u < a || d > l);
}, ET = ({
  actualSrc: e,
  actualFrom: t,
  duration: r,
  fps: o
}) => {
  const s = f.useRef(t), a = f.useRef(r), u = f.useRef(e);
  return (!xT({
    prevStartFrom: s.current,
    newStartFrom: t,
    prevDuration: a.current,
    newDuration: r,
    fps: o
  }) || e !== u.current) && (s.current = t, a.current = r, u.current = e), ST({
    actualSrc: u.current,
    actualFrom: s.current,
    duration: a.current,
    fps: o
  });
}, th = {}, _T = (e, t) => {
  if (e === null || e.seekable.length === 0 || e.seekable.length > 1 || th[e.src])
    return;
  const r = { start: e.seekable.start(0), end: e.seekable.end(0) };
  if (r.start === 0 && r.end === 0) {
    const o = [
      `The media ${e.src} cannot be seeked. This could be one of few reasons:`,
      "1) The media resource was replaced while the video is playing but it was not loaded yet.",
      "2) The media does not support seeking.",
      "3) The media was loaded with security headers prventing it from being included.",
      "Please see https://remotion.dev/docs/non-seekable-media for assistance."
    ].join(`
`);
    if (t === "console-error")
      console.error(o);
    else if (t === "console-warning")
      console.warn(`The media ${e.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
    else
      throw new Error(o);
    th[e.src] = !0;
  }
}, wl = 0.45, Xc = (e, t) => {
  if (!e.current)
    return;
  const r = _a() ? Number(t.toFixed(1)) : t;
  e.current.currentTime = r;
}, Ug = ({
  mediaRef: e,
  src: t,
  mediaType: r,
  playbackRate: o,
  onlyWarnForMediaSeekingError: s,
  acceptableTimeshift: a,
  pauseWhenBuffering: u,
  isPremounting: l,
  debugSeeking: d,
  onAutoPlayError: p
}) => {
  const { playbackRate: m } = f.useContext(Nr), g = Rn(), v = no(), [S] = ml(), _ = f.useContext(Yo), { fps: T } = An(), C = Wo(), A = f.useRef(null), k = f.useRef(null);
  if (!_)
    throw new Error("useMediaPlayback must be used inside a <BufferingContext>");
  const O = f.useRef({}), N = f.useCallback(() => {
    t && (d && console.log(`Detected ${t} as a variable FPS video. Disabling buffering while seeking.`), O.current[t] = !0);
  }, [d, t]), $ = gT({
    mediaRef: e,
    mediaType: r,
    lastSeek: k,
    onVariableFpsVideoDetected: N
  }), V = Vg({
    frame: g,
    playbackRate: o,
    startFrom: -C,
    fps: T
  }), G = mT({
    element: e,
    shouldBuffer: u,
    isPremounting: l
  }), { bufferUntilFirstFrame: U, isBuffering: Y } = hT({
    mediaRef: e,
    mediaType: r,
    onVariableFpsVideoDetected: N,
    pauseWhenBuffering: u
  }), H = o * m, Z = e.current?.duration ? Math.min(e.current.duration, a ?? wl) : a, W = pT(_);
  f.useEffect(() => {
    if (!S) {
      e.current?.pause();
      return;
    }
    const Q = G || Y();
    W && !Q && e.current?.pause();
  }, [Y, G, W, e, S]), f.useEffect(() => {
    const Q = r === "audio" ? "<Audio>" : "<Video>";
    if (!e.current)
      throw new Error(`No ${r} ref found`);
    if (!t)
      throw new Error(`No 'src' attribute was passed to the ${Q} element.`);
    const ue = Math.max(0, H);
    e.current.playbackRate !== ue && (e.current.playbackRate = ue);
    const { duration: ye } = e.current, ee = !Number.isNaN(ye) && Number.isFinite(ye) ? Math.min(ye, V) : V, me = e.current.currentTime, xe = $.current ?? null, re = O.current[t], R = Math.abs(ee - me), L = xe ? Math.abs(ee - xe) : null, ie = L && !re ? L : R;
    if (d && console.log({
      mediaTagTime: me,
      rvcTime: xe,
      shouldBeTime: ee,
      state: e.current.readyState,
      playing: !e.current.paused,
      isVariableFpsVideo: re
    }), ie > Z && A.current !== ee) {
      d && console.log("Seeking", {
        shouldBeTime: ee,
        isTime: me,
        rvcTime: xe,
        timeShift: ie,
        isVariableFpsVideo: re
      }), Xc(e, ee), k.current = ee, A.current = ee, S && !re && (H > 0 && U(ee), e.current.paused && Ks(e, r, p)), s || _T(e.current, s ? "console-warning" : "console-error");
      return;
    }
    const le = S ? 0.15 : 1e-5, ve = Math.abs(e.current.currentTime - ee) > le, de = G || Y(), ce = _.buffering.current && !de;
    if (!S || ce) {
      ve && (Xc(e, ee), k.current = ee);
      return;
    }
    (e.current.paused && !e.current.ended || v === 0) && (ve && (Xc(e, ee), k.current = ee), Ks(e, r, p), re || H > 0 && U(ee));
  }, [
    v,
    Z,
    U,
    _.buffering,
    $,
    d,
    V,
    Y,
    G,
    e,
    r,
    s,
    H,
    S,
    t,
    p
  ]);
}, Hg = (e) => {
  const [t, r] = f.useState(1);
  return f.useEffect(() => {
    const o = e.current;
    if (!o)
      return;
    const s = () => {
      r(o.volume);
    };
    return o.addEventListener("volumechange", s), () => o.removeEventListener("volumechange", s);
  }, [e]), f.useEffect(() => {
    const o = e.current;
    o && o.volume !== t && r(o.volume);
  }, [t, e]), t;
}, CT = 1e-5, Sl = (e, t) => Math.abs(e - t) < CT, Wg = ({
  volumePropFrame: e,
  actualVolume: t,
  volume: r,
  mediaVolume: o,
  mediaRef: s
}) => {
  f.useEffect(() => {
    const a = Bo({
      frame: e,
      volume: r,
      mediaVolume: o,
      allowAmplificationDuringRender: !1
    });
    !Sl(a, t) && s.current && (s.current.volume = a);
  }, [t, e, s, r, o]);
}, xl = f.createContext({
  mediaMuted: !1,
  mediaVolume: 1
}), El = f.createContext({
  setMediaMuted: () => {
    throw new Error("default");
  },
  setMediaVolume: () => {
    throw new Error("default");
  }
}), _l = () => {
  const { mediaVolume: e } = f.useContext(xl), { setMediaVolume: t } = f.useContext(El);
  return f.useMemo(() => [e, t], [e, t]);
}, Cl = () => {
  const { mediaMuted: e } = f.useContext(xl), { setMediaMuted: t } = f.useContext(El);
  return f.useMemo(() => [e, t], [e, t]);
}, rh = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", TT = (e, t) => {
  const r = Object.keys(e).sort(), o = Object.keys(t).sort();
  if (r.length !== o.length)
    return !1;
  for (let s = 0; s < r.length; s++)
    if (r[s] !== o[s] || e[r[s]] !== t[o[s]])
      return !1;
  return !0;
}, IT = (e, t, r) => e === "src" && !r.startsWith("data:") && !t.startsWith("data:") ? new URL(r, window.origin).toString() !== new URL(t, window.origin).toString() : r !== t, Ca = f.createContext(null), Bg = ({ children: e, numberOfAudioTags: t, component: r }) => {
  const o = f.useRef([]), [s] = f.useState(t);
  if (t !== s)
    throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
  const a = f.useMemo(() => new Array(t).fill(!0).map(() => ({ id: Math.random(), ref: f.createRef() })), [t]), u = f.useRef(new Array(t).fill(!1)), l = f.useCallback(() => {
    a.forEach(({ ref: _, id: T }) => {
      const C = o.current?.find((k) => k.id === T), { current: A } = _;
      if (A) {
        if (C === void 0) {
          A.src = rh;
          return;
        }
        if (!C)
          throw new TypeError("Expected audio data to be there");
        Object.keys(C.props).forEach((k) => {
          IT(k, C.props[k], A[k]) && (A[k] = C.props[k]);
        });
      }
    });
  }, [a]), d = f.useCallback((_, T) => {
    const C = o.current?.find((V) => V.audioId === T);
    if (C)
      return C;
    const A = u.current.findIndex((V) => V === !1);
    if (A === -1)
      throw new Error(`Tried to simultaneously mount ${t + 1} <Audio /> tags at the same time. With the current settings, the maximum amount of <Audio /> tags is limited to ${t} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#use-the-numberofsharedaudiotags-property for more information on how to increase this limit.`);
    const { id: k, ref: O } = a[A], N = [...u.current];
    N[A] = k, u.current = N;
    const $ = {
      props: _,
      id: k,
      el: O,
      audioId: T
    };
    return o.current?.push($), l(), $;
  }, [t, a, l]), p = f.useCallback((_) => {
    const T = [...u.current], C = a.findIndex((A) => A.id === _);
    if (C === -1)
      throw new TypeError("Error occured in ");
    T[C] = !1, u.current = T, o.current = o.current?.filter((A) => A.id !== _), l();
  }, [a, l]), m = f.useCallback(({
    aud: _,
    audioId: T,
    id: C
  }) => {
    let A = !1;
    o.current = o.current?.map((k) => k.id === C ? TT(_, k.props) ? k : (A = !0, {
      ...k,
      props: _,
      audioId: T
    }) : k), A && l();
  }, [l]), g = f.useCallback(() => {
    a.forEach((_) => {
      Ks(_.ref, "audio", null);
    });
  }, [a]), v = f.useMemo(() => ({
    registerAudio: d,
    unregisterAudio: p,
    updateAudio: m,
    playAllAudios: g,
    numberOfAudioTags: t
  }), [
    t,
    g,
    d,
    p,
    m
  ]), S = f.useCallback(() => {
    u.current = new Array(t).fill(!1), o.current = [], l();
  }, [t, l]);
  return f.useEffect(() => () => {
    S();
  }, [r, S]), /* @__PURE__ */ y.jsxs(Ca.Provider, {
    value: v,
    children: [
      a.map(({ id: _, ref: T }) => /* @__PURE__ */ y.jsx("audio", {
        ref: T,
        preload: "metadata",
        src: rh
      }, _)),
      e
    ]
  });
}, kT = (e, t) => {
  const r = f.useContext(Ca), [o] = f.useState(() => r && r.numberOfAudioTags > 0 ? r.registerAudio(e, t) : {
    el: Ie.createRef(),
    id: Math.random(),
    props: e,
    audioId: t
  }), s = Ie.useInsertionEffect ?? Ie.useLayoutEffect;
  return typeof document < "u" && (s(() => {
    r && r.numberOfAudioTags > 0 && r.updateAudio({ id: o.id, aud: e, audioId: t });
  }, [e, r, o.id, t]), s(() => () => {
    r && r.numberOfAudioTags > 0 && r.unregisterAudio(o.id);
  }, [r, o.id])), o;
}, AT = (e, t) => {
  const [r] = f.useState(e.shouldPreMountAudioTags);
  if (e.shouldPreMountAudioTags !== r)
    throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
  const {
    volume: o,
    muted: s,
    playbackRate: a,
    shouldPreMountAudioTags: u,
    src: l,
    onDuration: d,
    acceptableTimeShiftInSeconds: p,
    _remotionInternalNeedsDurationCalculation: m,
    _remotionInternalNativeLoopPassed: g,
    _remotionInternalStack: v,
    _remotionDebugSeeking: S,
    allowAmplificationDuringRender: _,
    name: T,
    pauseWhenBuffering: C,
    showInTimeline: A,
    loopVolumeCurveBehavior: k,
    stack: O,
    ...N
  } = e, [$] = _l(), [V] = Cl(), G = Hi(k ?? "repeat"), { hidden: U } = f.useContext(Ui);
  if (!l)
    throw new TypeError("No 'src' was passed to <Audio>.");
  const Y = Ho(l), H = f.useContext(Bt), [Z] = f.useState(() => String(Math.random())), W = U[Z] ?? !1, Q = Bo({
    frame: G,
    volume: o,
    mediaVolume: $,
    allowAmplificationDuringRender: !1
  }), ue = f.useMemo(() => ({
    muted: s || V || W || Q <= 0,
    src: Y,
    loop: g,
    ...N
  }), [
    g,
    W,
    V,
    s,
    N,
    Y,
    Q
  ]), ye = f.useMemo(() => `audio-${so(l ?? "")}-${H?.relativeFrom}-${H?.cumulatedFrom}-${H?.durationInFrames}-muted:${e.muted}-loop:${e.loop}`, [
    l,
    H?.relativeFrom,
    H?.cumulatedFrom,
    H?.durationInFrames,
    e.muted,
    e.loop
  ]), ee = kT(ue, ye).el, me = Hg(ee);
  Wg({
    volumePropFrame: G,
    actualVolume: me,
    volume: o,
    mediaVolume: $,
    mediaRef: ee
  }), Dg({
    volume: o,
    mediaVolume: $,
    mediaRef: ee,
    src: l,
    mediaType: "audio",
    playbackRate: a ?? 1,
    displayName: T ?? null,
    id: Z,
    stack: v,
    showInTimeline: A,
    premountDisplay: null,
    onAutoPlayError: null
  }), Ug({
    mediaRef: ee,
    src: l,
    mediaType: "audio",
    playbackRate: a ?? 1,
    onlyWarnForMediaSeekingError: !1,
    acceptableTimeshift: p ?? wl,
    isPremounting: !!H?.premounting,
    pauseWhenBuffering: C,
    debugSeeking: S,
    onAutoPlayError: null
  }), f.useImperativeHandle(t, () => ee.current, [ee]);
  const xe = f.useRef();
  return xe.current = d, f.useEffect(() => {
    const { current: re } = ee;
    if (!re)
      return;
    if (re.duration) {
      xe.current?.(re.src, re.duration);
      return;
    }
    const R = () => {
      xe.current?.(re.src, re.duration);
    };
    return re.addEventListener("loadedmetadata", R), () => {
      re.removeEventListener("loadedmetadata", R);
    };
  }, [ee, l]), r ? null : /* @__PURE__ */ y.jsx("audio", {
    ref: ee,
    preload: "metadata",
    ...ue
  });
}, RT = f.forwardRef(AT);
typeof window < "u" && (window.remotion_renderReady = !1);
var zs = [];
typeof window < "u" && (window.remotion_delayRenderTimeouts = {});
var PT = "The delayRender was called:", MT = "Retries left: ", OT = "- Rendering the frame will be retried.", nh = 3e4, _n = (e, t) => {
  if (typeof e != "string" && typeof e < "u")
    throw new Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(e));
  const r = Math.random();
  zs.push(r);
  const o = Error().stack?.replace(/^Error/g, "") ?? "";
  if (bt().isRendering) {
    const s = (t?.timeoutInMilliseconds ?? (typeof window > "u" ? nh : window.remotion_puppeteerTimeout ?? nh)) - 2e3;
    if (typeof window < "u") {
      const a = (t?.retries ?? 0) - (window.remotion_attempt - 1);
      window.remotion_delayRenderTimeouts[r] = {
        label: e ?? null,
        timeout: setTimeout(() => {
          const u = [
            "A delayRender()",
            e ? `"${e}"` : null,
            `was called but not cleared after ${s}ms. See https://remotion.dev/docs/timeout for help.`,
            a > 0 ? MT + a : null,
            a > 0 ? OT : null,
            PT,
            o
          ].filter(va).join(" ");
          Ri(Error(u));
        }, s)
      };
    }
  }
  return typeof window < "u" && (window.remotion_renderReady = !1), r;
}, ft = (e) => {
  if (typeof e > "u")
    throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
  if (typeof e != "number")
    throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(e));
  zs = zs.filter((t) => t === e ? (bt().isRendering && (clearTimeout(window.remotion_delayRenderTimeouts[e].timeout), delete window.remotion_delayRenderTimeouts[e]), !1) : !0), zs.length === 0 && typeof window < "u" && (window.remotion_renderReady = !0);
}, NT = (e, t) => {
  const r = f.useRef(null), {
    volume: o,
    playbackRate: s,
    allowAmplificationDuringRender: a,
    onDuration: u,
    toneFrequency: l,
    _remotionInternalNeedsDurationCalculation: d,
    _remotionInternalNativeLoopPassed: p,
    acceptableTimeShiftInSeconds: m,
    name: g,
    onError: v,
    delayRenderRetries: S,
    delayRenderTimeoutInMilliseconds: _,
    loopVolumeCurveBehavior: T,
    pauseWhenBuffering: C,
    ...A
  } = e, k = no(), O = Hi(T ?? "repeat"), N = Rn(), $ = f.useContext(Bt), { registerRenderAsset: V, unregisterRenderAsset: G } = f.useContext(io), U = f.useMemo(() => `audio-${so(e.src ?? "")}-${$?.relativeFrom}-${$?.cumulatedFrom}-${$?.durationInFrames}`, [
    e.src,
    $?.relativeFrom,
    $?.cumulatedFrom,
    $?.durationInFrames
  ]), Y = Bo({
    volume: o,
    frame: O,
    mediaVolume: 1,
    allowAmplificationDuringRender: a ?? !1
  });
  f.useImperativeHandle(t, () => r.current, []), f.useEffect(() => {
    if (!e.src)
      throw new Error("No src passed");
    if (window.remotion_audioEnabled && !e.muted && !(Y <= 0))
      return V({
        type: "audio",
        src: cn(e.src),
        id: U,
        frame: k,
        volume: Y,
        mediaFrame: N,
        playbackRate: e.playbackRate ?? 1,
        allowAmplificationDuringRender: a ?? !1,
        toneFrequency: l ?? null,
        audioStartFrame: Math.max(0, -($?.relativeFrom ?? 0))
      }), () => G(U);
  }, [
    e.muted,
    e.src,
    V,
    k,
    U,
    G,
    Y,
    O,
    N,
    s,
    e.playbackRate,
    a,
    l,
    $?.relativeFrom
  ]);
  const { src: H } = e, Z = t || d;
  return f.useLayoutEffect(() => {
    if (window.process?.env?.NODE_ENV === "test" || !Z)
      return;
    const W = _n("Loading <Audio> duration with src=" + H, {
      retries: S ?? void 0,
      timeoutInMilliseconds: _ ?? void 0
    }), { current: Q } = r, ue = () => {
      Q?.duration && u(Q.src, Q.duration), ft(W);
    };
    return Q?.duration ? (u(Q.src, Q.duration), ft(W)) : Q?.addEventListener("loadedmetadata", ue, { once: !0 }), () => {
      Q?.removeEventListener("loadedmetadata", ue), ft(W);
    };
  }, [
    H,
    u,
    Z,
    S,
    _
  ]), Z ? /* @__PURE__ */ y.jsx("audio", {
    ref: r,
    ...A
  }) : null;
}, jT = f.forwardRef(NT), DT = (e, t) => {
  const r = f.useContext(Ca), {
    startFrom: o,
    endAt: s,
    name: a,
    stack: u,
    pauseWhenBuffering: l,
    showInTimeline: d,
    _remotionDebugSeeking: p,
    ...m
  } = e, { loop: g, ...v } = e, { fps: S } = An(), _ = bt(), { durations: T, setDurations: C } = f.useContext(yl);
  if (typeof e.src != "string")
    throw new TypeError(`The \`<Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(e.src)} instead.`);
  const A = Ho(e.src), k = f.useCallback(($) => {
    console.log($.currentTarget.error);
    const V = `Could not play audio with src ${A}: ${$.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
    g ? Ri(new Error(V)) : console.warn(V);
  }, [g, A]), O = f.useCallback(($, V) => {
    C({ type: "got-duration", durationInSeconds: V, src: $ });
  }, [C]), N = T[cn(A)] ?? T[cn(e.src)];
  if (g && N !== void 0) {
    if (!Number.isFinite(N))
      return /* @__PURE__ */ y.jsx(Ci, {
        ...v,
        ref: t,
        _remotionInternalNativeLoopPassed: !0
      });
    const $ = N * S;
    return /* @__PURE__ */ y.jsx(xa, {
      layout: "none",
      durationInFrames: Mg({
        endAt: s,
        mediaDuration: $,
        playbackRate: e.playbackRate ?? 1,
        startFrom: o
      }),
      children: /* @__PURE__ */ y.jsx(Ci, {
        ...v,
        ref: t,
        _remotionInternalNativeLoopPassed: !0
      })
    });
  }
  if (typeof o < "u" || typeof s < "u") {
    vl(o, s);
    const $ = o ?? 0, V = s ?? 1 / 0;
    return /* @__PURE__ */ y.jsx(Ur, {
      layout: "none",
      from: 0 - $,
      showInTimeline: !1,
      durationInFrames: V,
      name: a,
      children: /* @__PURE__ */ y.jsx(Ci, {
        _remotionInternalNeedsDurationCalculation: !!g,
        pauseWhenBuffering: l ?? !1,
        ...m,
        ref: t
      })
    });
  }
  return gl(e, "Audio"), _.isRendering ? /* @__PURE__ */ y.jsx(jT, {
    onDuration: O,
    ...e,
    ref: t,
    onError: k,
    _remotionInternalNeedsDurationCalculation: !!g
  }) : /* @__PURE__ */ y.jsx(RT, {
    _remotionInternalNativeLoopPassed: e._remotionInternalNativeLoopPassed ?? !1,
    _remotionDebugSeeking: p ?? !1,
    _remotionInternalStack: u ?? null,
    shouldPreMountAudioTags: r !== null && r.numberOfAudioTags > 0,
    ...e,
    ref: t,
    onError: k,
    onDuration: O,
    pauseWhenBuffering: l ?? !1,
    _remotionInternalNeedsDurationCalculation: !!g,
    showInTimeline: d ?? !0
  });
}, Ci = f.forwardRef(DT);
zi(Ci);
var LT = f.createContext({
  folderName: null,
  parentName: null
}), FT = {
  transform: "rotate(90deg)"
}, oh = 40, $T = {
  color: "white",
  fontSize: 14,
  fontFamily: "sans-serif"
}, VT = {
  justifyContent: "center",
  alignItems: "center"
}, zT = () => /* @__PURE__ */ y.jsxs(_i, {
  style: VT,
  id: "remotion-comp-loading",
  children: [
    /* @__PURE__ */ y.jsx("style", {
      type: "text/css",
      children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			`
    }),
    /* @__PURE__ */ y.jsx("svg", {
      width: oh,
      height: oh,
      viewBox: "-100 -100 400 400",
      style: FT,
      children: /* @__PURE__ */ y.jsx("path", {
        fill: "#555",
        stroke: "#555",
        strokeWidth: "100",
        strokeLinejoin: "round",
        d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
      })
    }),
    /* @__PURE__ */ y.jsxs("p", {
      style: $T,
      children: [
        "Resolving ",
        "<Suspense>",
        "..."
      ]
    })
  ]
}), mr = null, Ou = () => {
  if (!mr) {
    if (typeof document > "u")
      throw new Error("Tried to call an API that only works in the browser from outside the browser");
    mr = document.createElement("div"), mr.style.position = "absolute", mr.style.top = "0px", mr.style.left = "0px", mr.style.right = "0px", mr.style.bottom = "0px", mr.style.width = "100%", mr.style.height = "100%", mr.style.display = "flex", mr.style.flexDirection = "column";
    const e = document.createElement("div");
    e.style.position = "fixed", e.style.top = "-999999px", e.appendChild(mr), document.body.appendChild(e);
  }
  return mr;
}, Yg = (e) => f.useMemo(() => {
  if ("lazyComponent" in e && typeof e.lazyComponent < "u")
    return Ie.lazy(e.lazyComponent);
  if ("component" in e)
    return typeof document > "u" ? e.component : Ie.lazy(() => Promise.resolve({ default: e.component }));
  throw new Error("You must pass either 'component' or 'lazyComponent'");
}, [e.component, e.lazyComponent]), Gg = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g, qg = (e) => e.match(Gg()), UT = (e) => {
  if (!qg(e))
    throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${e}`);
}, HT = `Composition ID must match ${String(Gg())}`, WT = (e, t, r) => {
  if (e) {
    if (typeof e != "object")
      throw new Error(`"${t}" must be an object, but you passed a value of type ${typeof e}`);
    if (Array.isArray(e))
      throw new Error(`"${t}" must be an object, an array was passed ${r ? `for composition "${r}"` : ""}`);
  }
}, BT = () => (f.useEffect(() => {
  const e = _n("Waiting for Root component to unsuspend");
  return () => ft(e);
}, []), null), ih = ({
  width: e,
  height: t,
  fps: r,
  durationInFrames: o,
  id: s,
  defaultProps: a,
  schema: u,
  ...l
}) => {
  const { registerComposition: d, unregisterComposition: p } = f.useContext(kn), m = wa(), g = Yg(l), v = dl(), S = ll(), _ = bt();
  if (f.useContext(oo))
    throw S ? new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.") : new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
  const { folderName: C, parentName: A } = f.useContext(LT);
  f.useEffect(() => {
    if (!s)
      throw new Error("No id for composition passed.");
    return UT(s), WT(a, "defaultProps", s), d({
      durationInFrames: o ?? void 0,
      fps: r ?? void 0,
      height: t ?? void 0,
      width: e ?? void 0,
      id: s,
      folderName: C,
      component: g,
      defaultProps: Wn(a ?? {}),
      nonce: v,
      parentFolderName: A,
      schema: u ?? null,
      calculateMetadata: l.calculateMetadata ?? null
    }), () => {
      p(s);
    };
  }, [
    o,
    r,
    t,
    g,
    s,
    C,
    a,
    d,
    p,
    e,
    v,
    A,
    u,
    l.calculateMetadata
  ]);
  const k = pl(s);
  if (_.isStudio && m && m.component === g) {
    const O = g;
    return k === null || k.type !== "success" ? null : fu.createPortal(/* @__PURE__ */ y.jsx(Ru, {
      children: /* @__PURE__ */ y.jsx(f.Suspense, {
        fallback: /* @__PURE__ */ y.jsx(zT, {}),
        children: /* @__PURE__ */ y.jsx(O, {
          ...k.result.props ?? {}
        })
      })
    }), Ou());
  }
  if (_.isRendering && m && m.component === g) {
    const O = g;
    return k === null || k.type !== "success" ? null : fu.createPortal(/* @__PURE__ */ y.jsx(Ru, {
      children: /* @__PURE__ */ y.jsx(f.Suspense, {
        fallback: /* @__PURE__ */ y.jsx(BT, {}),
        children: /* @__PURE__ */ y.jsx(O, {
          ...k.result.props ?? {}
        })
      })
    }), Ou());
  }
  return null;
}, Xg = Ie.createRef(), YT = ({ children: e, numberOfAudioTags: t }) => {
  const [r, o] = f.useState([]), s = f.useRef(r), [a, u] = f.useState([]), [l, d] = f.useState(null), [p, m] = f.useState(null), g = f.useCallback((O) => {
    o((N) => {
      const $ = O(N);
      return s.current = $, $;
    });
  }, []), v = f.useCallback((O) => {
    g((N) => {
      if (N.find((V) => V.id === O.id))
        throw new Error(`Multiple composition with id ${O.id} are registered.`);
      return [...N, O].slice().sort((V, G) => V.nonce - G.nonce);
    });
  }, [g]), S = f.useCallback((O) => {
    o((N) => N.filter(($) => $.id !== O));
  }, []), _ = f.useCallback((O, N) => {
    u(($) => [
      ...$,
      {
        name: O,
        parent: N
      }
    ]);
  }, []), T = f.useCallback((O, N) => {
    u(($) => $.filter((V) => !(V.name === O && V.parent === N)));
  }, []);
  f.useImperativeHandle(Xg, () => ({
    getCompositions: () => s.current
  }), []);
  const C = r.find((O) => l?.type === "composition" ? O.id === l.compositionId : null), A = f.useCallback((O, N) => {
    o(($) => $.map((G) => G.id === O ? {
      ...G,
      defaultProps: N
    } : G));
  }, []), k = f.useMemo(() => ({
    compositions: r,
    registerComposition: v,
    unregisterComposition: S,
    folders: a,
    registerFolder: _,
    unregisterFolder: T,
    currentCompositionMetadata: p,
    setCurrentCompositionMetadata: m,
    canvasContent: l,
    setCanvasContent: d,
    updateCompositionDefaultProps: A
  }), [
    r,
    v,
    S,
    a,
    _,
    T,
    p,
    l,
    A
  ]);
  return /* @__PURE__ */ y.jsx(kn.Provider, {
    value: k,
    children: /* @__PURE__ */ y.jsx($C, {
      children: /* @__PURE__ */ y.jsx(iT, {
        children: /* @__PURE__ */ y.jsx(Tg, {
          children: /* @__PURE__ */ y.jsx(Bg, {
            numberOfAudioTags: t,
            component: C?.component ?? null,
            children: e
          })
        })
      })
    })
  });
}, GT = ({
  onLoad: e,
  onError: t,
  delayRenderRetries: r,
  delayRenderTimeoutInMilliseconds: o,
  ...s
}, a) => {
  const [u] = f.useState(() => _n(`Loading <IFrame> with source ${s.src}`, {
    retries: r ?? void 0,
    timeoutInMilliseconds: o ?? void 0
  })), l = f.useCallback((p) => {
    ft(u), e?.(p);
  }, [u, e]), d = f.useCallback((p) => {
    ft(u), t ? t(p) : console.error("Error loading iframe:", p, "Handle the event using the onError() prop to make this message disappear.");
  }, [u, t]);
  return /* @__PURE__ */ y.jsx("iframe", {
    ...s,
    ref: a,
    onError: d,
    onLoad: l
  });
};
f.forwardRef(GT);
function qT(e) {
  return 1e3 * 2 ** (e - 1);
}
var XT = ({
  onError: e,
  maxRetries: t = 2,
  src: r,
  pauseWhenLoading: o,
  delayRenderRetries: s,
  delayRenderTimeoutInMilliseconds: a,
  onImageFrame: u,
  ...l
}, d) => {
  const p = f.useRef(null), m = f.useRef({}), { delayPlayback: g } = bl(), v = f.useContext(Bt);
  if (!r)
    throw new Error('No "src" prop was passed to <Img>.');
  f.useImperativeHandle(d, () => p.current, []);
  const S = Ho(r), _ = f.useCallback((C) => {
    if (!p.current)
      return;
    const A = p.current.src;
    setTimeout(() => {
      if (!p.current)
        return;
      const k = p.current?.src;
      k === A && (p.current.removeAttribute("src"), p.current.setAttribute("src", k));
    }, C);
  }, []), T = f.useCallback((C) => {
    if (m.current) {
      if (m.current[p.current?.src] = (m.current[p.current?.src] ?? 0) + 1, e && (m.current[p.current?.src] ?? 0) > t) {
        e(C);
        return;
      }
      if ((m.current[p.current?.src] ?? 0) <= t) {
        const A = qT(m.current[p.current?.src] ?? 0);
        console.warn(`Could not load image with source ${p.current?.src}, retrying again in ${A}ms`), _(A);
        return;
      }
      Ri("Error loading image with src: " + p.current?.src);
    }
  }, [t, e, _]);
  if (typeof window < "u") {
    const C = !!v?.premounting;
    f.useLayoutEffect(() => {
      if (window.process?.env?.NODE_ENV === "test") {
        p.current && (p.current.src = S);
        return;
      }
      const A = _n("Loading <Img> with src=" + S, {
        retries: s ?? void 0,
        timeoutInMilliseconds: a ?? void 0
      }), k = o && !C ? g().unblock : () => {
      }, { current: O } = p;
      let N = !1;
      const $ = () => {
        N || ((m.current[p.current?.src] ?? 0) > 0 && (delete m.current[p.current?.src], console.info(`Retry successful - ${p.current?.src} is now loaded`)), O && (O.src = S, u?.(O)), k(), ft(A));
      }, V = new Image();
      return V.src = S, V.decode().then($).catch((G) => {
        console.warn(G), V.complete ? $() : V.addEventListener("load", $);
      }), () => {
        N = !0, V.removeEventListener("load", $), k(), ft(A);
      };
    }, [
      S,
      g,
      s,
      a,
      o,
      C,
      u
    ]);
  }
  return /* @__PURE__ */ y.jsx("img", {
    ...l,
    ref: p,
    onError: T
  });
}, Kg = f.forwardRef(XT), Zg = {};
pg(Zg, {
  makeDefaultPreviewCSS: () => ZT,
  injectCSS: () => KT,
  OFFTHREAD_VIDEO_CLASS_NAME: () => Zs
});
var sh = {}, KT = (e) => {
  if (typeof document > "u" || sh[e])
    return;
  const t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.appendChild(document.createTextNode(e)), t.prepend(r), sh[e] = !0;
}, Zs = "__remotion_offthreadvideo", ZT = (e, t) => e ? `
    ${e} * {
      box-sizing: border-box;
    }
    ${e} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${e} .${Zs} {
      object-fit: contain;
    }
  ` : `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${t};
    }
    .${Zs} {
      object-fit: contain;
    }
    `, Jg = "__remotion-studio-container", JT = () => document.getElementById(Jg), QT = null, Kc = [], eI = () => QT, tI = (e) => (Kc.push(e), () => {
  Kc = Kc.filter((t) => t !== e);
}), rI = ({ children: e, numberOfAudioTags: t }) => {
  const [r] = f.useState(() => String(so(null))), [o, s] = f.useState(() => kg()), [a, u] = f.useState(!1), l = f.useRef(!1), [d, p] = f.useState(0), [m, g] = f.useState(1), v = f.useRef([]);
  typeof window < "u" && f.useLayoutEffect(() => {
    window.remotion_setFrame = (C, A, k) => {
      window.remotion_attempt = k;
      const O = _n(`Setting the current frame to ${C}`);
      let N = !0;
      s(($) => ($[A] ?? window.remotion_initialFrame) === C ? (N = !1, $) : {
        ...$,
        [A]: C
      }), N ? requestAnimationFrame(() => ft(O)) : ft(O);
    }, window.remotion_isPlayer = !1;
  }, []);
  const S = f.useMemo(() => ({
    frame: o,
    playing: a,
    imperativePlaying: l,
    rootId: r,
    playbackRate: m,
    setPlaybackRate: g,
    audioAndVideoTags: v
  }), [o, m, a, r]), _ = f.useMemo(() => ({
    setFrame: s,
    setPlaying: u
  }), []), T = f.useMemo(() => {
    let C = 0;
    return {
      getNonce: () => C++,
      fastRefreshes: d
    };
  }, [d]);
  return f.useEffect(() => {
    typeof __webpack_module__ < "u" && __webpack_module__.hot && __webpack_module__.hot.addStatusHandler((C) => {
      C === "idle" && p((A) => A + 1);
    });
  }, []), /* @__PURE__ */ y.jsx(zo.Provider, {
    value: T,
    children: /* @__PURE__ */ y.jsx(Nr.Provider, {
      value: S,
      children: /* @__PURE__ */ y.jsx(Uo.Provider, {
        value: _,
        children: /* @__PURE__ */ y.jsx(bg, {
          children: /* @__PURE__ */ y.jsx(Ng, {
            children: /* @__PURE__ */ y.jsx(YT, {
              numberOfAudioTags: t,
              children: /* @__PURE__ */ y.jsx(jg, {
                children: /* @__PURE__ */ y.jsx(Lg, {
                  children: e
                })
              })
            })
          })
        })
      })
    })
  });
}, nI = () => {
  if (bt().isRendering) {
    const e = window.remotion_envVariables;
    return e ? { ...JSON.parse(e), NODE_ENV: "production" } : {};
  }
  return {
    NODE_ENV: "production"
  };
}, oI = () => {
  const e = nI();
  window.process || (window.process = {}), window.process.env || (window.process.env = {}), Object.keys(e).forEach((t) => {
    window.process.env[t] = e[t];
  });
}, iI = Ie.createContext(null), sI = f.createContext({
  setSize: () => {
  },
  size: { size: "auto", translation: { x: 0, y: 0 } }
}), aI = ({
  canvasSize: e,
  compositionHeight: t,
  compositionWidth: r,
  previewSize: o
}) => {
  const s = e.height / t, a = e.width / r, u = Math.min(s, a);
  return o === "auto" ? u : Number(o);
}, cI = "remotion_staticFilesChanged";
function uI() {
  const e = Ie.useContext(kn), t = Ie.useContext(Nr), r = Ie.useContext(Uo), o = Ie.useContext(Bt), s = Ie.useContext(zo), a = Ie.useContext(oo), u = Ie.useContext(Ea), l = Ie.useContext(ba), d = Ie.useContext(io), p = Ie.useContext(Vo), m = Ie.useContext(Yo);
  return f.useMemo(() => ({
    compositionManagerCtx: e,
    timelineContext: t,
    setTimelineContext: r,
    sequenceContext: o,
    nonceContext: s,
    canUseRemotionHooksContext: a,
    preloadContext: u,
    resolveCompositionContext: l,
    renderAssetManagerContext: d,
    sequenceManagerContext: p,
    bufferManagerContext: m
  }), [
    e,
    s,
    o,
    r,
    t,
    a,
    u,
    l,
    d,
    p,
    m
  ]);
}
var lI = (e) => {
  const { children: t, contexts: r } = e;
  return /* @__PURE__ */ y.jsx(oo.Provider, {
    value: r.canUseRemotionHooksContext,
    children: /* @__PURE__ */ y.jsx(zo.Provider, {
      value: r.nonceContext,
      children: /* @__PURE__ */ y.jsx(Ea.Provider, {
        value: r.preloadContext,
        children: /* @__PURE__ */ y.jsx(kn.Provider, {
          value: r.compositionManagerCtx,
          children: /* @__PURE__ */ y.jsx(Vo.Provider, {
            value: r.sequenceManagerContext,
            children: /* @__PURE__ */ y.jsx(io.Provider, {
              value: r.renderAssetManagerContext,
              children: /* @__PURE__ */ y.jsx(ba.Provider, {
                value: r.resolveCompositionContext,
                children: /* @__PURE__ */ y.jsx(Nr.Provider, {
                  value: r.timelineContext,
                  children: /* @__PURE__ */ y.jsx(Uo.Provider, {
                    value: r.setTimelineContext,
                    children: /* @__PURE__ */ y.jsx(Bt.Provider, {
                      value: r.sequenceContext,
                      children: /* @__PURE__ */ y.jsx(Yo.Provider, {
                        value: r.bufferManagerContext,
                        children: t
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
}, ke = {
  useUnsafeVideoConfig: Sa,
  Timeline: vg,
  CompositionManager: kn,
  SequenceManager: Vo,
  SequenceVisibilityToggleContext: Ui,
  RemotionRoot: rI,
  useVideo: wa,
  getRoot: eI,
  useMediaVolumeState: _l,
  useMediaMutedState: Cl,
  useLazyComponent: Yg,
  truthy: va,
  SequenceContext: Bt,
  useRemotionContexts: uI,
  RemotionContextProvider: lI,
  CSSUtils: Zg,
  setupEnvVariables: oI,
  MediaVolumeContext: xl,
  SetMediaVolumeContext: El,
  getRemotionEnvironment: bt,
  SharedAudioContext: Ca,
  SharedAudioContextProvider: Bg,
  invalidCompositionErrorMessage: HT,
  isCompositionIdValid: qg,
  getPreviewDomElement: JT,
  compositionsRef: Xg,
  portalNode: Ou,
  waitForRoot: tI,
  CanUseRemotionHooksProvider: Ru,
  CanUseRemotionHooks: oo,
  PrefetchProvider: Ng,
  DurationsContextProvider: jg,
  IsPlayerContextProvider: DC,
  useIsPlayer: ll,
  EditorPropsProvider: bg,
  EditorPropsContext: ya,
  usePreload: Ho,
  NonceContext: zo,
  resolveVideoConfig: Eg,
  useResolvedVideoConfig: pl,
  resolveCompositionsRef: _g,
  ResolveCompositionConfig: Tg,
  REMOTION_STUDIO_CONTAINER_ELEMENT: Jg,
  RenderAssetManager: io,
  persistCurrentFrame: Ig,
  useTimelineSetFrame: Rg,
  isIosSafari: _a,
  WATCH_REMOTION_STATIC_FILES: cI,
  addSequenceStackTraces: zi,
  useMediaStartsAt: Wo,
  BufferingProvider: Lg,
  BufferingContextReact: Yo,
  enableSequenceStackTraces: mg,
  CurrentScaleContext: iI,
  PreviewSizeContext: sI,
  calculateScale: aI,
  editorPropsProviderRef: yg,
  PROPS_UPDATED_EXTERNALLY: KC,
  validateRenderAsset: Pg
}, dI = ({
  src: e,
  transparent: t,
  currentTime: r,
  toneMapped: o
}) => `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(cn(e))}&time=${encodeURIComponent(r)}&transparent=${String(t)}&toneMapped=${String(o)}`, Qg = f.createContext(!1), fI = ({ children: e }) => /* @__PURE__ */ y.jsx(Qg.Provider, {
  value: !1,
  children: e
}), pI = () => {
  if (!Ie.useContext(Qg))
    throw new Error("This component must be inside a <Series /> component.");
}, hI = ({ children: e }, t) => (pI(), /* @__PURE__ */ y.jsx(fI, {
  children: e
})), mI = f.forwardRef(hI);
zi(mI);
var gI = ({
  onError: e,
  volume: t,
  playbackRate: r,
  src: o,
  muted: s,
  allowAmplificationDuringRender: a,
  transparent: u = !1,
  toneMapped: l = !0,
  toneFrequency: d,
  name: p,
  loopVolumeCurveBehavior: m,
  delayRenderRetries: g,
  delayRenderTimeoutInMilliseconds: v,
  onVideoFrame: S,
  ..._
}) => {
  const T = no(), C = Rn(), A = Hi(m ?? "repeat"), k = Sa(), O = f.useContext(Bt), N = Wo(), { registerRenderAsset: $, unregisterRenderAsset: V } = f.useContext(io);
  if (!o)
    throw new TypeError("No `src` was passed to <OffthreadVideo>.");
  const G = f.useMemo(() => `offthreadvideo-${so(o ?? "")}-${O?.cumulatedFrom}-${O?.relativeFrom}-${O?.durationInFrames}`, [
    o,
    O?.cumulatedFrom,
    O?.relativeFrom,
    O?.durationInFrames
  ]);
  if (!k)
    throw new Error("No video config found");
  const U = Bo({
    volume: t,
    frame: A,
    mediaVolume: 1,
    allowAmplificationDuringRender: a ?? !1
  });
  f.useEffect(() => {
    if (!o)
      throw new Error("No src passed");
    if (window.remotion_audioEnabled && !s && !(U <= 0))
      return $({
        type: "video",
        src: cn(o),
        id: G,
        frame: T,
        volume: U,
        mediaFrame: C,
        playbackRate: r ?? 1,
        allowAmplificationDuringRender: a ?? !1,
        toneFrequency: d ?? null,
        audioStartFrame: Math.max(0, -(O?.relativeFrom ?? 0))
      }), () => V(G);
  }, [
    s,
    o,
    $,
    G,
    V,
    U,
    C,
    T,
    r,
    a,
    d,
    O?.relativeFrom
  ]);
  const Y = f.useMemo(() => $g({
    frame: C,
    playbackRate: r || 1,
    startFrom: -N
  }) / k.fps, [C, N, r, k.fps]), H = f.useMemo(() => dI({
    src: o,
    currentTime: Y,
    transparent: u,
    toneMapped: l
  }), [l, Y, o, u]), [Z, W] = f.useState(null);
  f.useLayoutEffect(() => {
    if (!window.remotion_videoEnabled)
      return;
    const ee = [];
    W(null);
    const me = new AbortController(), xe = _n(`Fetching ${H} from server`, {
      retries: g ?? void 0,
      timeoutInMilliseconds: v ?? void 0
    });
    return (async () => {
      try {
        const R = await fetch(H, {
          signal: me.signal
        });
        if (R.status !== 200) {
          if (R.status === 500) {
            const le = await R.json();
            if (le.error) {
              const ve = le.error.replace(/^Error: /, "");
              throw new Error(ve);
            }
          }
          throw new Error(`Server returned status ${R.status} while fetching ${H}`);
        }
        const L = await R.blob(), ie = URL.createObjectURL(L);
        ee.push(() => URL.revokeObjectURL(ie)), W({
          src: ie,
          handle: xe
        });
      } catch (R) {
        if (R.message.includes("aborted")) {
          ft(xe);
          return;
        }
        if (me.signal.aborted) {
          ft(xe);
          return;
        }
        R.message.includes("Failed to fetch") && (R = new Error(`Failed to fetch ${H}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: R })), e ? e(R) : Ri(R);
      }
    })(), ee.push(() => {
      me.signal.aborted || me.abort();
    }), () => {
      ee.forEach((R) => R());
    };
  }, [
    H,
    g,
    v,
    e
  ]);
  const Q = f.useCallback(() => {
    e ? e?.(new Error("Failed to load image with src " + Z)) : Ri("Failed to load image with src " + Z);
  }, [Z, e]), ue = f.useMemo(() => [Zs, _.className].filter(va).join(" "), [_.className]), ye = f.useCallback((ee) => {
    S && S(ee);
  }, [S]);
  return !Z || !window.remotion_videoEnabled ? null : (ft(Z.handle), /* @__PURE__ */ y.jsx(Kg, {
    src: Z.src,
    className: ue,
    delayRenderRetries: g,
    delayRenderTimeoutInMilliseconds: v,
    onImageFrame: ye,
    ..._,
    onError: Q
  }));
}, vI = ({
  ref: e,
  onVideoFrame: t
}) => {
  f.useEffect(() => {
    const { current: r } = e;
    if (!r || !t)
      return;
    let o = 0;
    const s = () => {
      e.current && (t(e.current), o = e.current.requestVideoFrameCallback(s));
    };
    return s(), () => {
      r.cancelVideoFrameCallback(o);
    };
  }, [t, e]);
}, yI = (e, t) => {
  const r = f.useRef(null), {
    volume: o,
    muted: s,
    playbackRate: a,
    onlyWarnForMediaSeekingError: u,
    src: l,
    onDuration: d,
    acceptableTimeShift: p,
    acceptableTimeShiftInSeconds: m,
    toneFrequency: g,
    name: v,
    _remotionInternalNativeLoopPassed: S,
    _remotionInternalStack: _,
    _remotionDebugSeeking: T,
    style: C,
    pauseWhenBuffering: A,
    showInTimeline: k,
    loopVolumeCurveBehavior: O,
    onError: N,
    onAutoPlayError: $,
    onVideoFrame: V,
    crossOrigin: G,
    ...U
  } = e, Y = Hi(O ?? "repeat"), { fps: H, durationInFrames: Z } = An(), W = f.useContext(Bt), { hidden: Q } = f.useContext(Ui), [ue] = f.useState(() => String(Math.random())), ye = Q[ue] ?? !1;
  if (typeof p < "u")
    throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
  const ee = Hg(r), [me] = _l(), [xe] = Cl();
  Dg({
    mediaRef: r,
    volume: o,
    mediaVolume: me,
    mediaType: "video",
    src: l,
    playbackRate: e.playbackRate ?? 1,
    displayName: v ?? null,
    id: ue,
    stack: _,
    showInTimeline: k,
    premountDisplay: null,
    onAutoPlayError: $ ?? null
  }), Wg({
    volumePropFrame: Y,
    actualVolume: ee,
    volume: o,
    mediaVolume: me,
    mediaRef: r
  }), Ug({
    mediaRef: r,
    src: l,
    mediaType: "video",
    playbackRate: e.playbackRate ?? 1,
    onlyWarnForMediaSeekingError: u,
    acceptableTimeshift: m ?? wl,
    isPremounting: !!W?.premounting,
    pauseWhenBuffering: A,
    debugSeeking: T,
    onAutoPlayError: $ ?? null
  });
  const re = W ? W.relativeFrom : 0, R = W ? Math.min(W.durationInFrames, Z) : Z, L = ET({
    actualSrc: Ho(l),
    actualFrom: re,
    duration: R,
    fps: H
  });
  f.useImperativeHandle(t, () => r.current, []), f.useEffect(() => {
    const { current: de } = r;
    if (!de)
      return;
    const ce = () => {
      if (de.error) {
        if (console.error("Error occurred in video", de?.error), N) {
          const et = new Error(`Code ${de.error.code}: ${de.error.message}`);
          N(et);
          return;
        }
        throw new Error(`The browser threw an error while playing the video ${l}: Code ${de.error.code} - ${de?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
      } else {
        if (N) {
          const et = new Error(`The browser threw an error while playing the video ${l}`);
          N(et);
          return;
        }
        throw new Error("The browser threw an error while playing the video");
      }
    };
    return de.addEventListener("error", ce, { once: !0 }), () => {
      de.removeEventListener("error", ce);
    };
  }, [N, l]);
  const ie = f.useRef();
  ie.current = d, vI({ ref: r, onVideoFrame: V }), f.useEffect(() => {
    const { current: de } = r;
    if (!de)
      return;
    if (de.duration) {
      ie.current?.(l, de.duration);
      return;
    }
    const ce = () => {
      ie.current?.(l, de.duration);
    };
    return de.addEventListener("loadedmetadata", ce), () => {
      de.removeEventListener("loadedmetadata", ce);
    };
  }, [l]), f.useEffect(() => {
    const { current: de } = r;
    de && (_a() ? de.preload = "metadata" : de.preload = "auto");
  }, []);
  const le = f.useMemo(() => ({
    ...C,
    opacity: ye ? 0 : C?.opacity ?? 1
  }), [ye, C]), ve = G ?? (V ? "anonymous" : void 0);
  return /* @__PURE__ */ y.jsx("video", {
    ref: r,
    muted: s || xe,
    playsInline: !0,
    src: L,
    loop: S,
    style: le,
    disableRemotePlayback: !0,
    crossOrigin: ve,
    ...U
  });
}, ev = f.forwardRef(yI), tv = (e) => {
  const {
    startFrom: t,
    endAt: r,
    name: o,
    pauseWhenBuffering: s,
    stack: a,
    showInTimeline: u,
    ...l
  } = e, d = bt(), p = f.useCallback(() => {
  }, []);
  if (typeof e.src != "string")
    throw new TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(e.src)} instead.`);
  if (e.imageFormat)
    throw new TypeError("The `<OffthreadVideo>` tag does no longer accept `imageFormat`. Use the `transparent` prop if you want to render a transparent video.");
  if (typeof t < "u" || typeof r < "u") {
    vl(t, r);
    const A = t ?? 0, k = r ?? 1 / 0;
    return /* @__PURE__ */ y.jsx(Ur, {
      layout: "none",
      from: 0 - A,
      showInTimeline: !1,
      durationInFrames: k,
      name: o,
      children: /* @__PURE__ */ y.jsx(tv, {
        pauseWhenBuffering: s ?? !1,
        ...l
      })
    });
  }
  if (gl(e, "Video"), d.isRendering)
    return /* @__PURE__ */ y.jsx(gI, {
      ...l
    });
  const {
    transparent: m,
    toneMapped: g,
    _remotionDebugSeeking: v,
    onAutoPlayError: S,
    onVideoFrame: _,
    crossOrigin: T,
    ...C
  } = l;
  return /* @__PURE__ */ y.jsx(ev, {
    _remotionInternalStack: a ?? null,
    _remotionInternalNativeLoopPassed: !1,
    _remotionDebugSeeking: v ?? !1,
    onDuration: p,
    onlyWarnForMediaSeekingError: !0,
    pauseWhenBuffering: s ?? !1,
    showInTimeline: u ?? !0,
    onAutoPlayError: S ?? void 0,
    onVideoFrame: _ ?? null,
    crossOrigin: T,
    ...C
  });
}, ah = (e) => Math.round(e * 1e5) / 1e5, Zc = (e, t) => {
  if (Sl(e.currentTime, t))
    return {
      wait: Promise.resolve(t),
      cancel: () => {
      }
    };
  e.currentTime = t;
  let r, o = null;
  const s = new Promise((u) => {
    r = e.requestVideoFrameCallback((l, d) => {
      const p = d.expectedDisplayTime - l;
      if (p <= 0) {
        u(d.mediaTime);
        return;
      }
      setTimeout(() => {
        u(d.mediaTime);
      }, p + 150);
    });
  }), a = new Promise((u) => {
    const l = () => {
      u();
    };
    e.addEventListener("seeked", l, {
      once: !0
    }), o = () => {
      e.removeEventListener("seeked", l);
    };
  });
  return {
    wait: Promise.all([s, a]).then(([u]) => u),
    cancel: () => {
      o?.(), e.cancelVideoFrameCallback(r);
    }
  };
}, bI = (e, t, r) => {
  const o = 1 / r / 2;
  let s = () => {
  };
  return Number.isFinite(e.duration) && e.currentTime >= e.duration && t >= e.duration ? {
    prom: Promise.resolve(),
    cancel: () => {
    }
  } : {
    prom: new Promise((u, l) => {
      const d = Zc(e, t + o);
      d.wait.then((p) => {
        if (Math.abs(t - p) <= o)
          return u();
        const g = t > p ? 1 : -1, v = Zc(e, p + o * g);
        s = v.cancel, v.wait.then((S) => {
          const _ = Math.abs(t - S);
          if (ah(_) <= ah(o))
            return u();
          const T = Zc(e, t + o);
          return s = T.cancel, T.wait.then(() => {
            u();
          }).catch((C) => {
            l(C);
          });
        }).catch((S) => {
          l(S);
        });
      }), s = d.cancel;
    }),
    cancel: () => {
      s();
    }
  };
}, wI = ({
  onError: e,
  volume: t,
  allowAmplificationDuringRender: r,
  playbackRate: o,
  onDuration: s,
  toneFrequency: a,
  name: u,
  acceptableTimeShiftInSeconds: l,
  delayRenderRetries: d,
  delayRenderTimeoutInMilliseconds: p,
  loopVolumeCurveBehavior: m,
  ...g
}, v) => {
  const S = no(), _ = Rn(), T = Hi(m ?? "repeat"), C = Sa(), A = f.useRef(null), k = f.useContext(Bt), O = Wo(), N = bt(), { registerRenderAsset: $, unregisterRenderAsset: V } = f.useContext(io), G = f.useMemo(() => `video-${so(g.src ?? "")}-${k?.cumulatedFrom}-${k?.relativeFrom}-${k?.durationInFrames}`, [
    g.src,
    k?.cumulatedFrom,
    k?.relativeFrom,
    k?.durationInFrames
  ]);
  if (!C)
    throw new Error("No video config found");
  const U = Bo({
    volume: t,
    frame: T,
    mediaVolume: 1,
    allowAmplificationDuringRender: r ?? !1
  });
  f.useEffect(() => {
    if (!g.src)
      throw new Error("No src passed");
    if (!g.muted && !(U <= 0) && window.remotion_audioEnabled)
      return $({
        type: "video",
        src: cn(g.src),
        id: G,
        frame: S,
        volume: U,
        mediaFrame: _,
        playbackRate: o ?? 1,
        allowAmplificationDuringRender: r ?? !1,
        toneFrequency: a ?? null,
        audioStartFrame: Math.max(0, -(k?.relativeFrom ?? 0))
      }), () => V(G);
  }, [
    g.muted,
    g.src,
    $,
    G,
    V,
    U,
    _,
    S,
    o,
    r,
    a,
    k?.relativeFrom
  ]), f.useImperativeHandle(v, () => A.current, []), f.useEffect(() => {
    if (!window.remotion_videoEnabled)
      return;
    const { current: H } = A;
    if (!H)
      return;
    const Z = Vg({
      frame: _,
      playbackRate: o || 1,
      startFrom: -O,
      fps: C.fps
    }), W = _n(`Rendering <Video /> with src="${g.src}" at time ${Z}`, {
      retries: d ?? void 0,
      timeoutInMilliseconds: p ?? void 0
    });
    if (window.process?.env?.NODE_ENV === "test") {
      ft(W);
      return;
    }
    if (Sl(H.currentTime, Z)) {
      if (H.readyState >= 2) {
        ft(W);
        return;
      }
      const ee = () => {
        ft(W);
      };
      return H.addEventListener("loadeddata", ee, { once: !0 }), () => {
        H.removeEventListener("loadeddata", ee);
      };
    }
    const Q = () => {
      ft(W);
    }, ue = bI(H, Z, C.fps);
    ue.prom.then(() => {
      ft(W);
    }), H.addEventListener("ended", Q, { once: !0 });
    const ye = () => {
      if (H?.error) {
        if (console.error("Error occurred in video", H?.error), e)
          return;
        throw new Error(`The browser threw an error while playing the video ${g.src}: Code ${H.error.code} - ${H?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
      } else
        throw new Error("The browser threw an error");
    };
    return H.addEventListener("error", ye, { once: !0 }), () => {
      ue.cancel(), H.removeEventListener("ended", Q), H.removeEventListener("error", ye), ft(W);
    };
  }, [
    T,
    g.src,
    o,
    C.fps,
    _,
    O,
    e,
    d,
    p
  ]);
  const { src: Y } = g;
  return N.isRendering && f.useLayoutEffect(() => {
    if (window.process?.env?.NODE_ENV === "test")
      return;
    const H = _n("Loading <Video> duration with src=" + Y, {
      retries: d ?? void 0,
      timeoutInMilliseconds: p ?? void 0
    }), { current: Z } = A, W = () => {
      Z?.duration && s(Y, Z.duration), ft(H);
    };
    return Z?.duration ? (s(Y, Z.duration), ft(H)) : Z?.addEventListener("loadedmetadata", W, { once: !0 }), () => {
      Z?.removeEventListener("loadedmetadata", W), ft(H);
    };
  }, [Y, s, d, p]), /* @__PURE__ */ y.jsx("video", {
    ref: A,
    disableRemotePlayback: !0,
    ...g
  });
}, SI = f.forwardRef(wI), xI = (e, t) => {
  const {
    startFrom: r,
    endAt: o,
    name: s,
    pauseWhenBuffering: a,
    stack: u,
    _remotionInternalNativeLoopPassed: l,
    showInTimeline: d,
    onAutoPlayError: p,
    ...m
  } = e, { loop: g, _remotionDebugSeeking: v, ...S } = e, { fps: _ } = An(), T = bt(), { durations: C, setDurations: A } = f.useContext(yl);
  if (typeof t == "string")
    throw new Error("string refs are not supported");
  if (typeof e.src != "string")
    throw new TypeError(`The \`<Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(e.src)} instead.`);
  const k = Ho(e.src), O = f.useCallback((V, G) => {
    A({ type: "got-duration", durationInSeconds: G, src: V });
  }, [A]), N = f.useCallback(() => {
  }, []), $ = C[cn(k)] ?? C[cn(e.src)];
  if (g && $ !== void 0) {
    if (!Number.isFinite($))
      return /* @__PURE__ */ y.jsx(Us, {
        ...S,
        ref: t,
        _remotionInternalNativeLoopPassed: !0
      });
    const V = $ * _;
    return /* @__PURE__ */ y.jsx(xa, {
      durationInFrames: Mg({
        endAt: o,
        mediaDuration: V,
        playbackRate: e.playbackRate ?? 1,
        startFrom: r
      }),
      layout: "none",
      name: s,
      children: /* @__PURE__ */ y.jsx(Us, {
        ...S,
        ref: t,
        _remotionInternalNativeLoopPassed: !0
      })
    });
  }
  if (typeof r < "u" || typeof o < "u") {
    vl(r, o);
    const V = r ?? 0, G = o ?? 1 / 0;
    return /* @__PURE__ */ y.jsx(Ur, {
      layout: "none",
      from: 0 - V,
      showInTimeline: !1,
      durationInFrames: G,
      name: s,
      children: /* @__PURE__ */ y.jsx(Us, {
        pauseWhenBuffering: a ?? !1,
        ...m,
        ref: t
      })
    });
  }
  return gl(e, "Video"), T.isRendering ? /* @__PURE__ */ y.jsx(SI, {
    onDuration: O,
    onVideoFrame: N ?? null,
    ...m,
    ref: t
  }) : /* @__PURE__ */ y.jsx(ev, {
    onlyWarnForMediaSeekingError: !1,
    ...m,
    ref: t,
    onVideoFrame: null,
    pauseWhenBuffering: a ?? !1,
    onDuration: O,
    _remotionInternalStack: u ?? null,
    _remotionInternalNativeLoopPassed: l ?? !1,
    _remotionDebugSeeking: v ?? !1,
    showInTimeline: d ?? !0,
    onAutoPlayError: p ?? void 0
  });
}, Us = f.forwardRef(xI);
zi(Us);
LC();
var EI = {}, _I = new Proxy(EI, {
  get(e, t) {
    return t === "Bundling" || t === "Rendering" || t === "Log" || t === "Puppeteer" || t === "Output" ? _I : () => {
      console.warn("⚠️  The CLI configuration has been extracted from Remotion Core."), console.warn("Update the import from the config file:"), console.warn(), console.warn("- Delete:"), console.warn('import {Config} from "remotion";'), console.warn("+ Replace:"), console.warn('import {Config} from "@remotion/cli/config";'), console.warn(), console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration."), process.exit(1);
    };
  }
});
zi(Ur);
typeof window < "u" && (window.remotion_renderReady = !1);
typeof window < "u" && (window.remotion_delayRenderTimeouts = {});
var CI = (e, t, r) => {
  if (e) {
    if (typeof e != "object")
      throw new Error(`"${t}" must be an object, but you passed a value of type ${typeof e}`);
    if (Array.isArray(e))
      throw new Error(`"${t}" must be an object, an array was passed ${r ? `for composition "${r}"` : ""}`);
  }
};
function TI(e, t, r) {
  if (typeof e != "number")
    throw new Error(`The "${t}" prop ${r} must be a number, but you passed a value of type ${typeof e}`);
  if (isNaN(e))
    throw new TypeError(`The "${t}" prop ${r} must not be NaN, but is NaN.`);
  if (!Number.isFinite(e))
    throw new TypeError(`The "${t}" prop ${r} must be finite, but is ${e}.`);
  if (e % 1 !== 0)
    throw new TypeError(`The "${t}" prop ${r} must be an integer, but is ${e}.`);
  if (e <= 0)
    throw new TypeError(`The "${t}" prop ${r} must be positive, but got ${e}.`);
}
function II(e, t) {
  const { allowFloats: r, component: o } = t;
  if (typeof e > "u")
    throw new Error(`The "durationInFrames" prop ${o} is missing.`);
  if (typeof e != "number")
    throw new Error(`The "durationInFrames" prop ${o} must be a number, but you passed a value of type ${typeof e}`);
  if (e <= 0)
    throw new TypeError(`The "durationInFrames" prop ${o} must be positive, but got ${e}.`);
  if (!r && e % 1 !== 0)
    throw new TypeError(`The "durationInFrames" prop ${o} must be an integer, but got ${e}.`);
  if (!Number.isFinite(e))
    throw new TypeError(`The "durationInFrames" prop ${o} must be finite, but got ${e}.`);
}
function kI(e, t, r) {
  if (typeof e != "number")
    throw new Error(`"fps" must be a number, but you passed a value of type ${typeof e} ${t}`);
  if (!Number.isFinite(e))
    throw new Error(`"fps" must be a finite, but you passed ${e} ${t}`);
  if (isNaN(e))
    throw new Error(`"fps" must not be NaN, but got ${e} ${t}`);
  if (e <= 0)
    throw new TypeError(`"fps" must be positive, but got ${e} ${t}`);
  if (r && e > 50)
    throw new TypeError("The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif");
}
var Ta = {
  validateFps: kI,
  validateDimension: TI,
  validateDurationInFrames: II,
  validateDefaultAndInputProps: CI
}, Dt = 25, Nu = 16, AI = () => /* @__PURE__ */ y.jsx("svg", {
  width: Dt,
  height: Dt,
  viewBox: "0 0 25 25",
  fill: "none",
  children: /* @__PURE__ */ y.jsx("path", {
    d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "6.25",
    strokeLinejoin: "round"
  })
}), RI = () => /* @__PURE__ */ y.jsxs("svg", {
  viewBox: "0 0 100 100",
  width: Dt,
  height: Dt,
  children: [
    /* @__PURE__ */ y.jsx("rect", {
      x: "25",
      y: "20",
      width: "20",
      height: "60",
      fill: "#fff",
      ry: "5",
      rx: "5"
    }),
    /* @__PURE__ */ y.jsx("rect", {
      x: "55",
      y: "20",
      width: "20",
      height: "60",
      fill: "#fff",
      ry: "5",
      rx: "5"
    })
  ]
}), PI = ({
  isFullscreen: e
}) => {
  const o = e ? 0 : 3, s = e ? 6 * 1.6 : 6 / 2, a = e ? 6 * 1.6 : 6 * 2;
  return /* @__PURE__ */ y.jsxs("svg", {
    viewBox: "0 0 32 32",
    height: Nu,
    width: Nu,
    children: [
      /* @__PURE__ */ y.jsx("path", {
        d: `
				M ${o} ${a}
				L ${s} ${s}
				L ${a} ${o}
				`,
        stroke: "#fff",
        strokeWidth: 6,
        fill: "none"
      }),
      /* @__PURE__ */ y.jsx("path", {
        d: `
				M ${32 - o} ${a}
				L ${32 - s} ${s}
				L ${32 - a} ${o}
				`,
        stroke: "#fff",
        strokeWidth: 6,
        fill: "none"
      }),
      /* @__PURE__ */ y.jsx("path", {
        d: `
				M ${o} ${32 - a}
				L ${s} ${32 - s}
				L ${a} ${32 - o}
				`,
        stroke: "#fff",
        strokeWidth: 6,
        fill: "none"
      }),
      /* @__PURE__ */ y.jsx("path", {
        d: `
				M ${32 - o} ${32 - a}
				L ${32 - s} ${32 - s}
				L ${32 - a} ${32 - o}
				`,
        stroke: "#fff",
        strokeWidth: 6,
        fill: "none"
      })
    ]
  });
}, MI = () => /* @__PURE__ */ y.jsx("svg", {
  width: Dt,
  height: Dt,
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ y.jsx("path", {
    d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
    fill: "#fff"
  })
}), OI = () => /* @__PURE__ */ y.jsx("svg", {
  width: Dt,
  height: Dt,
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ y.jsx("path", {
    d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
    fill: "#fff"
  })
}), ch = "__remotion_buffering_indicator", uh = "__remotion_buffering_animation", NI = {
  width: Dt,
  height: Dt,
  overflow: "hidden",
  lineHeight: "normal",
  fontSize: "inherit"
}, jI = {
  width: 14,
  height: 14,
  overflow: "hidden",
  lineHeight: "normal",
  fontSize: "inherit"
}, DI = ({ type: e }) => {
  const t = e === "player" ? NI : jI;
  return /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [
      /* @__PURE__ */ y.jsx("style", {
        type: "text/css",
        children: `
				@keyframes ${uh} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${ch} {
            animation: ${uh} 1s linear infinite;
        }        
			`
      }),
      /* @__PURE__ */ y.jsx("div", {
        style: t,
        children: /* @__PURE__ */ y.jsx("svg", {
          viewBox: e === "player" ? "0 0 22 22" : "0 0 18 18",
          style: t,
          className: ch,
          children: /* @__PURE__ */ y.jsx("path", {
            d: e === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
            stroke: "white",
            strokeLinecap: "round",
            fill: "none",
            strokeWidth: 3
          })
        })
      })
    ]
  });
}, LI = ({
  currentSize: e,
  width: t,
  height: r,
  compositionWidth: o,
  compositionHeight: s
}) => t !== void 0 && r === void 0 ? {
  aspectRatio: [o, s].join("/")
} : r !== void 0 && t === void 0 ? {
  aspectRatio: [o, s].join("/")
} : e ? {
  width: o,
  height: s
} : {
  width: o,
  height: s
}, rv = ({
  previewSize: e,
  compositionWidth: t,
  compositionHeight: r,
  canvasSize: o
}) => {
  const s = ke.calculateScale({
    canvasSize: o,
    compositionHeight: r,
    compositionWidth: t,
    previewSize: e
  }), a = 0 - (1 - s) / 2, u = a * t, l = a * r, d = t * s, p = r * s, m = o.width / 2 - d / 2, g = o.height / 2 - p / 2;
  return {
    centerX: m,
    centerY: g,
    xCorrection: u,
    yCorrection: l,
    scale: s
  };
}, nv = ({
  config: e,
  style: t,
  canvasSize: r,
  overflowVisible: o,
  layout: s
}) => e ? {
  position: "relative",
  overflow: o ? "visible" : "hidden",
  ...LI({
    compositionHeight: e.height,
    compositionWidth: e.width,
    currentSize: r,
    height: t?.height,
    width: t?.width
  }),
  opacity: s ? 1 : 0,
  ...t
} : {}, ov = ({
  config: e,
  canvasSize: t,
  layout: r,
  scale: o,
  overflowVisible: s
}) => !e || !t || !r ? {} : {
  position: "absolute",
  width: e.width,
  height: e.height,
  display: "flex",
  transform: `scale(${o})`,
  marginLeft: r.xCorrection,
  marginTop: r.yCorrection,
  overflow: s ? "visible" : "hidden"
}, iv = ({
  layout: e,
  scale: t,
  config: r,
  overflowVisible: o
}) => {
  if (!e || !r)
    return {};
  const { centerX: s, centerY: a } = e;
  return {
    width: r.width * t,
    height: r.height * t,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: s,
    top: a,
    overflow: o ? "visible" : "hidden"
  };
}, sv = Ie.createContext(void 0), av = Ie.createContext(void 0);
class FI {
  listeners = {
    ended: [],
    error: [],
    pause: [],
    play: [],
    ratechange: [],
    scalechange: [],
    seeked: [],
    timeupdate: [],
    frameupdate: [],
    fullscreenchange: [],
    volumechange: [],
    mutechange: [],
    waiting: [],
    resume: []
  };
  addEventListener(t, r) {
    this.listeners[t].push(r);
  }
  removeEventListener(t, r) {
    this.listeners[t] = this.listeners[t].filter((o) => o !== r);
  }
  dispatchEvent(t, r) {
    this.listeners[t].forEach((o) => {
      o({ detail: r });
    });
  }
  dispatchSeek(t) {
    this.dispatchEvent("seeked", {
      frame: t
    });
  }
  dispatchVolumeChange(t) {
    this.dispatchEvent("volumechange", {
      volume: t
    });
  }
  dispatchPause() {
    this.dispatchEvent("pause", void 0);
  }
  dispatchPlay() {
    this.dispatchEvent("play", void 0);
  }
  dispatchEnded() {
    this.dispatchEvent("ended", void 0);
  }
  dispatchRateChange(t) {
    this.dispatchEvent("ratechange", {
      playbackRate: t
    });
  }
  dispatchScaleChange(t) {
    this.dispatchEvent("scalechange", {
      scale: t
    });
  }
  dispatchError(t) {
    this.dispatchEvent("error", {
      error: t
    });
  }
  dispatchTimeUpdate(t) {
    this.dispatchEvent("timeupdate", t);
  }
  dispatchFrameUpdate(t) {
    this.dispatchEvent("frameupdate", t);
  }
  dispatchFullscreenChange(t) {
    this.dispatchEvent("fullscreenchange", t);
  }
  dispatchMuteChange(t) {
    this.dispatchEvent("mutechange", t);
  }
  dispatchWaiting(t) {
    this.dispatchEvent("waiting", t);
  }
  dispatchResume(t) {
    this.dispatchEvent("resume", t);
  }
}
class $I {
  listeners = {
    error: [],
    waiting: [],
    resume: []
  };
  addEventListener(t, r) {
    this.listeners[t].push(r);
  }
  removeEventListener(t, r) {
    this.listeners[t] = this.listeners[t].filter((o) => o !== r);
  }
  dispatchEvent(t, r) {
    this.listeners[t].forEach((o) => {
      o({ detail: r });
    });
  }
  dispatchError(t) {
    this.dispatchEvent("error", {
      error: t
    });
  }
  dispatchWaiting(t) {
    this.dispatchEvent("waiting", t);
  }
  dispatchResume(t) {
    this.dispatchEvent("resume", t);
  }
}
var cv = (e) => {
  const t = f.useContext(ke.BufferingContextReact);
  if (!t)
    throw new Error("BufferingContextReact not found");
  f.useEffect(() => {
    const r = t.listenForBuffering(() => {
      t.buffering.current = !0, e.dispatchWaiting({});
    }), o = t.listenForResume(() => {
      t.buffering.current = !1, e.dispatchResume({});
    });
    return () => {
      r.remove(), o.remove();
    };
  }, [t, e]);
}, VI = ({ children: e, currentPlaybackRate: t }) => {
  const [r] = f.useState(() => new FI());
  if (!f.useContext(ke.BufferingContextReact))
    throw new Error("BufferingContextReact not found");
  return f.useEffect(() => {
    t && r.dispatchRateChange(t);
  }, [r, t]), cv(r), /* @__PURE__ */ y.jsx(sv.Provider, {
    value: r,
    children: e
  });
}, Tl = (e, t) => {
  const [r, o] = f.useState(!1);
  return f.useEffect(() => {
    const { current: s } = e;
    if (!s)
      return;
    let a;
    const u = () => {
      t && (clearTimeout(a), a = setTimeout(() => {
        o(!1);
      }, t === !0 ? 3e3 : t));
    }, l = () => {
      o(!0), u();
    }, d = () => {
      o(!1), clearTimeout(a);
    }, p = () => {
      o(!0), u();
    };
    return s.addEventListener("mouseenter", l), s.addEventListener("mouseleave", d), s.addEventListener("mousemove", p), () => {
      s.removeEventListener("mouseenter", l), s.removeEventListener("mouseleave", d), s.removeEventListener("mousemove", p), clearTimeout(a);
    };
  }, [t, e]), r;
}, Ia = () => {
  const [e, t, r] = ke.Timeline.usePlayingState(), [o, s] = f.useState(!1), a = ke.Timeline.useTimelinePosition(), u = f.useRef(a), l = ke.Timeline.useTimelineSetFrame(), d = ke.Timeline.useTimelineSetFrame(), p = f.useContext(ke.SharedAudioContext), { audioAndVideoTags: m } = f.useContext(ke.Timeline.TimelineContext), g = f.useRef(a);
  g.current = a;
  const v = ke.useVideo(), S = ke.useUnsafeVideoConfig(), _ = f.useContext(sv), T = (S?.durationInFrames ?? 1) - 1, C = a === T, A = a === 0;
  if (!_)
    throw new TypeError("Expected Player event emitter context");
  const k = f.useContext(ke.BufferingContextReact);
  if (!k)
    throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
  const { buffering: O } = k, N = f.useCallback((W) => {
    v?.id && d((Q) => ({ ...Q, [v.id]: W })), g.current = W, _.dispatchSeek(W);
  }, [_, d, v?.id]), $ = f.useCallback((W) => {
    r.current || (s(!0), C && N(0), p && p.numberOfAudioTags > 0 && W && p.playAllAudios(), m.current.forEach((Q) => Q.play()), r.current = !0, t(!0), u.current = g.current, _.dispatchPlay());
  }, [
    r,
    C,
    p,
    t,
    _,
    N,
    m
  ]), V = f.useCallback(() => {
    r.current && (r.current = !1, t(!1), _.dispatchPause());
  }, [_, r, t]), G = f.useCallback(() => {
    r.current && (r.current = !1, g.current = u.current, S && (d((W) => ({
      ...W,
      [S.id]: u.current
    })), t(!1), _.dispatchPause()));
  }, [S, _, r, t, d]), U = v?.id, Y = f.useCallback((W) => {
    if (!U)
      return null;
    r.current || l((Q) => {
      const ue = Q[U] ?? window.remotion_initialFrame ?? 0;
      return {
        ...Q,
        [U]: Math.max(0, ue - W)
      };
    });
  }, [r, l, U]), H = f.useCallback((W) => {
    if (!U)
      return null;
    r.current || l((Q) => {
      const ue = Q[U] ?? window.remotion_initialFrame ?? 0;
      return {
        ...Q,
        [U]: Math.min(T, ue + W)
      };
    });
  }, [U, r, T, l]);
  return f.useMemo(() => ({
    frameBack: Y,
    frameForward: H,
    isLastFrame: C,
    emitter: _,
    playing: e,
    play: $,
    pause: V,
    seek: N,
    isFirstFrame: A,
    getCurrentFrame: () => g.current,
    isPlaying: () => r.current,
    isBuffering: () => O.current,
    pauseAndReturnToPlayStart: G,
    hasPlayed: o,
    remotionInternal_currentFrameRef: g
  }), [
    Y,
    H,
    C,
    _,
    e,
    $,
    V,
    N,
    A,
    G,
    o,
    r,
    O
  ]);
}, zI = ({
  browserMediaControlsBehavior: e,
  videoConfig: t,
  playbackRate: r
}) => {
  const { playing: o, pause: s, play: a, emitter: u, getCurrentFrame: l, seek: d } = Ia();
  f.useEffect(() => {
    navigator.mediaSession && e.mode !== "do-nothing" && (o ? navigator.mediaSession.playbackState = "playing" : navigator.mediaSession.playbackState = "paused");
  }, [e.mode, o]), f.useEffect(() => {
    if (!navigator.mediaSession || e.mode === "do-nothing")
      return;
    const p = () => {
      t && navigator.mediaSession && navigator.mediaSession.setPositionState({
        duration: t.durationInFrames / t.fps,
        playbackRate: r,
        position: l() / t.fps
      });
    };
    return u.addEventListener("timeupdate", p), () => {
      u.removeEventListener("timeupdate", p);
    };
  }, [
    e.mode,
    u,
    l,
    r,
    t
  ]), f.useEffect(() => {
    if (navigator.mediaSession && e.mode !== "do-nothing")
      return navigator.mediaSession.setActionHandler("play", () => {
        e.mode === "register-media-session" && a();
      }), navigator.mediaSession.setActionHandler("pause", () => {
        e.mode === "register-media-session" && s();
      }), navigator.mediaSession.setActionHandler("seekto", (p) => {
        e.mode === "register-media-session" && p.seekTime !== void 0 && t && d(Math.round(p.seekTime * t.fps));
      }), navigator.mediaSession.setActionHandler("seekbackward", () => {
        e.mode === "register-media-session" && t && d(Math.max(0, Math.round((l() - 10) * t.fps)));
      }), navigator.mediaSession.setActionHandler("seekforward", () => {
        e.mode === "register-media-session" && t && d(Math.max(t.durationInFrames - 1, Math.round((l() + 10) * t.fps)));
      }), navigator.mediaSession.setActionHandler("previoustrack", () => {
        e.mode === "register-media-session" && d(0);
      }), () => {
        navigator.mediaSession.metadata = null, navigator.mediaSession.setActionHandler("play", null), navigator.mediaSession.setActionHandler("pause", null), navigator.mediaSession.setActionHandler("seekto", null), navigator.mediaSession.setActionHandler("seekbackward", null), navigator.mediaSession.setActionHandler("seekforward", null), navigator.mediaSession.setActionHandler("previoustrack", null);
      };
  }, [
    e.mode,
    l,
    s,
    a,
    d,
    t
  ]);
}, UI = ({
  time: e,
  currentFrame: t,
  playbackSpeed: r,
  fps: o,
  actualLastFrame: s,
  actualFirstFrame: a,
  framesAdvanced: u,
  shouldLoop: l
}) => {
  const p = (r < 0 ? Math.ceil : Math.floor)(e * r / (1e3 / o)) - u, m = p + t, g = t > s || t < a, v = m > s || m < a, S = !l && v && !g;
  return r > 0 ? v ? {
    nextFrame: a,
    framesToAdvance: p,
    hasEnded: S
  } : { nextFrame: m, framesToAdvance: p, hasEnded: S } : v ? { nextFrame: s, framesToAdvance: p, hasEnded: S } : { nextFrame: m, framesToAdvance: p, hasEnded: S };
}, lh = () => typeof document > "u" ? !1 : document.visibilityState === "hidden", HI = () => {
  const e = f.useRef(lh());
  return f.useEffect(() => {
    const t = () => {
      e.current = lh();
    };
    return document.addEventListener("visibilitychange", t), () => {
      document.removeEventListener("visibilitychange", t);
    };
  }, []), e;
}, WI = ({
  loop: e,
  playbackRate: t,
  moveToBeginningWhenEnded: r,
  inFrame: o,
  outFrame: s,
  frameRef: a,
  browserMediaControlsBehavior: u
}) => {
  const l = ke.useUnsafeVideoConfig(), d = ke.Timeline.useTimelinePosition(), { playing: p, pause: m, emitter: g } = Ia(), v = ke.Timeline.useTimelineSetFrame(), S = f.useRef(null), _ = HI(), T = f.useRef(null), C = f.useContext(ke.BufferingContextReact);
  if (!C)
    throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
  zI({
    browserMediaControlsBehavior: u,
    playbackRate: t,
    videoConfig: l
  }), f.useEffect(() => {
    const A = C.listenForBuffering(() => {
      S.current = performance.now();
    }), k = C.listenForResume(() => {
      S.current = null;
    });
    return () => {
      A.remove(), k.remove();
    };
  }, [C]), f.useEffect(() => {
    if (!l || !p)
      return;
    let A = !1, k = null, O = performance.now(), N = 0;
    const $ = () => {
      k !== null && (k.type === "raf" ? cancelAnimationFrame(k.id) : clearTimeout(k.id));
    }, V = () => {
      A = !0, $();
    }, G = () => {
      const H = performance.now() - O, Z = s ?? l.durationInFrames - 1, W = o ?? 0, Q = a.current, { nextFrame: ue, framesToAdvance: ye, hasEnded: ee } = UI({
        time: H,
        currentFrame: Q,
        playbackSpeed: t,
        fps: l.fps,
        actualFirstFrame: W,
        actualLastFrame: Z,
        framesAdvanced: N,
        shouldLoop: e
      });
      if (N += ye, ue !== a.current && (!ee || r) && v((me) => ({ ...me, [l.id]: ue })), ee) {
        V(), m(), g.dispatchEnded();
        return;
      }
      A || U();
    }, U = () => {
      if (S.current) {
        const H = C.listenForResume(() => {
          H.remove(), !A && (O = performance.now(), N = 0, G());
        });
        return;
      }
      _.current ? k = {
        type: "timeout",
        id: setTimeout(G, 1e3 / l.fps)
      } : k = { type: "raf", id: requestAnimationFrame(G) };
    };
    U();
    const Y = () => {
      document.visibilityState !== "visible" && ($(), G());
    };
    return window.addEventListener("visibilitychange", Y), () => {
      window.removeEventListener("visibilitychange", Y), V();
    };
  }, [
    l,
    e,
    m,
    p,
    v,
    g,
    t,
    o,
    s,
    r,
    _,
    a,
    S,
    C
  ]), f.useEffect(() => {
    const A = setInterval(() => {
      T.current !== a.current && (g.dispatchTimeUpdate({ frame: a.current }), T.current = a.current);
    }, 250);
    return () => clearInterval(A);
  }, [g, a]), f.useEffect(() => {
    g.dispatchFrameUpdate({ frame: d });
  }, [g, d]);
}, Jc = [], Il = (e, t) => {
  const [r, o] = f.useState(() => {
    if (!e.current)
      return null;
    const u = e.current.getClientRects();
    return u[0] ? {
      width: u[0].width,
      height: u[0].height,
      left: u[0].x,
      top: u[0].y,
      windowSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    } : null;
  }), s = f.useMemo(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((u) => {
    const { contentRect: l, target: d } = u[0], p = d.getClientRects();
    if (!p?.[0]) {
      o(null);
      return;
    }
    const m = l.width === 0 ? 1 : p[0].width / l.width, g = t.shouldApplyCssTransforms ? p[0].width : p[0].width * (1 / m), v = t.shouldApplyCssTransforms ? p[0].height : p[0].height * (1 / m);
    o({
      width: g,
      height: v,
      left: p[0].x,
      top: p[0].y,
      windowSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  }), [t.shouldApplyCssTransforms]), a = f.useCallback(() => {
    if (!e.current)
      return;
    const u = e.current.getClientRects();
    if (!u[0]) {
      o(null);
      return;
    }
    o((l) => l && l.width === u[0].width && l.height === u[0].height && l.left === u[0].x && l.top === u[0].y && l.windowSize.height === window.innerHeight && l.windowSize.width === window.innerWidth ? l : {
      width: u[0].width,
      height: u[0].height,
      left: u[0].x,
      top: u[0].y,
      windowSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  }, [e]);
  return f.useEffect(() => {
    if (!s)
      return;
    const { current: u } = e;
    return u && s.observe(u), () => {
      u && s.unobserve(u);
    };
  }, [s, e, a]), f.useEffect(() => {
    if (t.triggerOnWindowResize)
      return window.addEventListener("resize", a), () => {
        window.removeEventListener("resize", a);
      };
  }, [t.triggerOnWindowResize, a]), f.useEffect(() => (Jc.push(a), () => {
    Jc = Jc.filter((u) => u !== a);
  }), [a]), f.useMemo(() => r ? { ...r, refresh: a } : null, [r, a]);
}, dh = ({ playing: e, buffering: t }) => e && t ? /* @__PURE__ */ y.jsx(DI, {
  type: "player"
}) : e ? /* @__PURE__ */ y.jsx(RI, {}) : /* @__PURE__ */ y.jsx(AI, {}), ko = 12, fh = 5, BI = ({
  volume: e,
  isVertical: t,
  onBlur: r,
  inputRef: o,
  setVolume: s
}) => {
  const a = f.useMemo(() => {
    const v = {
      paddingLeft: 5,
      height: Dt,
      width: Gn,
      display: "inline-flex",
      alignItems: "center"
    };
    return t ? {
      ...v,
      position: "absolute",
      transform: `rotate(-90deg) translateX(${Gn / 2 + Dt / 2}px)`
    } : {
      ...v
    };
  }, [t]), u = typeof Ie.useId > "u" ? "volume-slider" : Ie.useId(), [l] = f.useState(() => `__remotion-volume-slider-${so(u)}`.replace(".", "")), d = f.useCallback((g) => {
    s(parseFloat(g.target.value));
  }, [s]), p = f.useMemo(() => {
    const g = {
      WebkitAppearance: "none",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: fh / 2,
      cursor: "pointer",
      height: fh,
      width: Gn,
      backgroundImage: `linear-gradient(
				to right,
				white ${e * 100}%, rgba(255, 255, 255, 0) ${e * 100}%
			)`
    };
    return t ? {
      ...g,
      bottom: Dt + Gn / 2
    } : g;
  }, [t, e]), m = `
	.${l}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${ko / 2}px;
		box-shadow: 0 0 2px black;
		height: ${ko}px;
		width: ${ko}px;
	}

	.${l}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${ko / 2}px;
		box-shadow: 0 0 2px black;
		height: ${ko}px;
		width: ${ko}px;
	}
`;
  return /* @__PURE__ */ y.jsxs("div", {
    style: a,
    children: [
      /* @__PURE__ */ y.jsx("style", {
        dangerouslySetInnerHTML: {
          __html: m
        }
      }),
      /* @__PURE__ */ y.jsx("input", {
        ref: o,
        "aria-label": "Change volume",
        className: l,
        max: 1,
        min: 0,
        onBlur: r,
        onChange: d,
        step: 0.01,
        type: "range",
        value: e,
        style: p
      })
    ]
  });
}, YI = (e) => /* @__PURE__ */ y.jsx(BI, {
  ...e
}), Gn = 100, GI = ({ displayVerticalVolumeSlider: e, renderMuteButton: t, renderVolumeSlider: r }) => {
  const [o, s] = ke.useMediaMutedState(), [a, u] = ke.useMediaVolumeState(), [l, d] = f.useState(!1), p = f.useRef(null), m = f.useRef(null), g = Tl(p, !1), v = f.useCallback(() => {
    setTimeout(() => {
      m.current && document.activeElement !== m.current && d(!1);
    }, 10);
  }, []), S = a === 0, _ = f.useCallback(() => {
    if (S) {
      u(1), s(!1);
      return;
    }
    s((N) => !N);
  }, [S, s, u]), T = f.useMemo(() => ({
    display: "inline-flex",
    background: "none",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
    touchAction: "none",
    ...e && { position: "relative" }
  }), [e]), C = f.useMemo(() => ({
    display: "inline",
    width: Dt,
    height: Dt,
    cursor: "pointer",
    appearance: "none",
    background: "none",
    border: "none",
    padding: 0
  }), []), A = f.useCallback(({ muted: N, volume: $ }) => {
    const V = N || $ === 0;
    return /* @__PURE__ */ y.jsx("button", {
      "aria-label": V ? "Unmute sound" : "Mute sound",
      title: V ? "Unmute sound" : "Mute sound",
      onClick: _,
      onBlur: v,
      onFocus: () => d(!0),
      style: C,
      type: "button",
      children: V ? /* @__PURE__ */ y.jsx(MI, {}) : /* @__PURE__ */ y.jsx(OI, {})
    });
  }, [v, _, C]), k = f.useMemo(() => t ? t({ muted: o, volume: a }) : A({ muted: o, volume: a }), [o, a, A, t]), O = f.useMemo(() => (l || g) && !o && !ke.isIosSafari() ? (r ?? YI)({
    isVertical: e,
    volume: a,
    onBlur: () => d(!1),
    inputRef: m,
    setVolume: u
  }) : null, [
    e,
    l,
    g,
    o,
    a,
    r,
    u
  ]);
  return /* @__PURE__ */ y.jsxs("div", {
    ref: p,
    style: T,
    children: [
      k,
      O
    ]
  });
};
function qI(e) {
  const [t, r] = f.useState(e), o = f.useRef(null);
  return f.useEffect(() => {
    const s = (a) => {
      o.current && !o.current.contains(a.target) && r(!1);
    };
    return document.addEventListener("pointerup", s, !0), () => {
      document.removeEventListener("pointerup", s, !0);
    };
  }, []), { ref: o, isComponentVisible: t, setIsComponentVisible: r };
}
var XI = 35, KI = 70, ZI = {
  height: 30,
  paddingRight: 15,
  paddingLeft: 12,
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
}, JI = {
  width: 22,
  display: "flex",
  alignItems: "center"
}, QI = {
  width: 14,
  height: 14,
  color: "black"
}, ek = () => /* @__PURE__ */ y.jsx("svg", {
  viewBox: "0 0 512 512",
  style: QI,
  children: /* @__PURE__ */ y.jsx("path", {
    fill: "currentColor",
    d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
  })
}), tk = ({ rate: e, onSelect: t, selectedRate: r, keyboardSelectedRate: o }) => {
  const s = f.useCallback((g) => {
    g.stopPropagation(), g.preventDefault(), t(e);
  }, [t, e]), [a, u] = f.useState(!1), l = f.useCallback(() => {
    u(!0);
  }, []), d = f.useCallback(() => {
    u(!1);
  }, []), p = o === e, m = f.useMemo(() => ({
    ...ZI,
    backgroundColor: a || p ? "#eee" : "transparent"
  }), [a, p]);
  return /* @__PURE__ */ y.jsxs("div", {
    onMouseEnter: l,
    onMouseLeave: d,
    tabIndex: 0,
    style: m,
    onClick: s,
    children: [
      /* @__PURE__ */ y.jsx("div", {
        style: JI,
        children: e === r ? /* @__PURE__ */ y.jsx(ek, {}) : null
      }),
      e.toFixed(1),
      "x"
    ]
  }, e);
}, rk = ({ setIsComponentVisible: e, playbackRates: t, canvasSize: r }) => {
  const { setPlaybackRate: o, playbackRate: s } = f.useContext(ke.Timeline.TimelineContext), [a, u] = f.useState(s);
  f.useEffect(() => {
    const p = (m) => {
      if (m.preventDefault(), m.key === "ArrowUp") {
        const g = t.findIndex((v) => v === a);
        if (g === 0)
          return;
        u(g === -1 ? t[0] : t[g - 1]);
      } else if (m.key === "ArrowDown") {
        const g = t.findIndex((v) => v === a);
        if (g === t.length - 1)
          return;
        u(g === -1 ? t[t.length - 1] : t[g + 1]);
      } else m.key === "Enter" && (o(a), e(!1));
    };
    return window.addEventListener("keydown", p), () => {
      window.removeEventListener("keydown", p);
    };
  }, [
    t,
    a,
    o,
    e
  ]);
  const l = f.useCallback((p) => {
    o(p), e(!1);
  }, [e, o]), d = f.useMemo(() => ({
    position: "absolute",
    right: 0,
    width: 125,
    maxHeight: r.height - KI - XI,
    bottom: 35,
    background: "#fff",
    borderRadius: 4,
    overflow: "auto",
    color: "black",
    textAlign: "left"
  }), [r.height]);
  return /* @__PURE__ */ y.jsx("div", {
    style: d,
    children: t.map((p) => /* @__PURE__ */ y.jsx(tk, {
      selectedRate: s,
      onSelect: l,
      rate: p,
      keyboardSelectedRate: a
    }, p))
  });
}, nk = {
  fontSize: 13,
  fontWeight: "bold",
  color: "white",
  border: "2px solid white",
  borderRadius: 20,
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 2,
  paddingBottom: 2
}, ju = {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 6,
  paddingBottom: 6,
  height: 37,
  display: "inline-flex",
  marginBottom: 0,
  marginTop: 0,
  alignItems: "center"
}, ok = {
  ...ju,
  position: "relative"
}, ik = ({ playbackRates: e, canvasSize: t }) => {
  const { ref: r, isComponentVisible: o, setIsComponentVisible: s } = qI(!1), { playbackRate: a } = f.useContext(ke.Timeline.TimelineContext), u = f.useCallback((l) => {
    l.stopPropagation(), l.preventDefault(), s((d) => !d);
  }, [s]);
  return /* @__PURE__ */ y.jsx("div", {
    ref: r,
    children: /* @__PURE__ */ y.jsxs("button", {
      type: "button",
      "aria-label": "Change playback rate",
      style: ok,
      onClick: u,
      children: [
        /* @__PURE__ */ y.jsxs("div", {
          style: nk,
          children: [
            a,
            "x"
          ]
        }),
        o && /* @__PURE__ */ y.jsx(rk, {
          canvasSize: t,
          playbackRates: e,
          setIsComponentVisible: s
        })
      ]
    })
  });
}, ph = (e, t, r) => Math.round(Fg(e, [0, r], [0, t - 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp"
})), Ro = 5, bi = 12, Du = 4, sk = {
  userSelect: "none",
  WebkitUserSelect: "none",
  paddingTop: Du,
  paddingBottom: Du,
  boxSizing: "border-box",
  cursor: "pointer",
  position: "relative",
  touchAction: "none"
}, ak = {
  height: Ro,
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  width: "100%",
  borderRadius: Ro / 2
}, ck = (e) => {
  let t = e;
  for (; t.parentElement; )
    t = t.parentElement;
  return t;
}, uk = ({ durationInFrames: e, onSeekEnd: t, onSeekStart: r, inFrame: o, outFrame: s }) => {
  const a = f.useRef(null), u = Tl(a, !1), l = Il(a, {
    triggerOnWindowResize: !0,
    shouldApplyCssTransforms: !0
  }), { seek: d, play: p, pause: m, playing: g } = Ia(), v = ke.Timeline.useTimelinePosition(), [S, _] = f.useState({
    dragging: !1
  }), T = l?.width ?? 0, C = f.useCallback((V) => {
    if (V.button !== 0)
      return;
    const G = a.current?.getBoundingClientRect().left, U = ph(V.clientX - G, e, T);
    m(), d(U), _({
      dragging: !0,
      wasPlaying: g
    }), r();
  }, [e, T, m, d, g, r]), A = f.useCallback((V) => {
    if (!l)
      throw new Error("Player has no size");
    if (!S.dragging)
      return;
    const G = a.current?.getBoundingClientRect().left, U = ph(V.clientX - G, e, l.width);
    d(U);
  }, [S.dragging, e, d, l]), k = f.useCallback(() => {
    _({
      dragging: !1
    }), S.dragging && (S.wasPlaying ? p() : m(), t());
  }, [S, t, m, p]);
  f.useEffect(() => {
    if (!S.dragging)
      return;
    const V = ck(a.current);
    return V.addEventListener("pointermove", A), V.addEventListener("pointerup", k), () => {
      V.removeEventListener("pointermove", A), V.removeEventListener("pointerup", k);
    };
  }, [S.dragging, A, k]);
  const O = f.useMemo(() => ({
    height: bi,
    width: bi,
    borderRadius: bi / 2,
    position: "absolute",
    top: Du - bi / 2 + 5 / 2,
    backgroundColor: "white",
    left: Math.max(0, v / Math.max(1, e - 1) * T - bi / 2),
    boxShadow: "0 0 2px black",
    opacity: Number(u)
  }), [u, e, v, T]), N = f.useMemo(() => ({
    height: Ro,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: (v - (o ?? 0)) / (e - 1) * 100 + "%",
    marginLeft: (o ?? 0) / (e - 1) * 100 + "%",
    borderRadius: Ro / 2
  }), [e, v, o]), $ = f.useMemo(() => ({
    height: Ro,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: ((s ?? e - 1) - (o ?? 0)) / (e - 1) * 100 + "%",
    marginLeft: (o ?? 0) / (e - 1) * 100 + "%",
    borderRadius: Ro / 2,
    position: "absolute"
  }), [e, o, s]);
  return /* @__PURE__ */ y.jsxs("div", {
    ref: a,
    onPointerDown: C,
    style: sk,
    children: [
      /* @__PURE__ */ y.jsxs("div", {
        style: ak,
        children: [
          /* @__PURE__ */ y.jsx("div", {
            style: $
          }),
          /* @__PURE__ */ y.jsx("div", {
            style: N
          })
        ]
      }),
      /* @__PURE__ */ y.jsx("div", {
        style: O
      })
    ]
  });
}, hh = (e) => {
  const t = Math.floor(e / 60), r = Math.floor(e - t * 60);
  return `${String(t)}:${String(r).padStart(2, "0")}`;
}, lk = 10, Lu = 12, dk = ({
  allowFullscreen: e,
  playerWidth: t
}) => f.useMemo(() => {
  const o = Dt, s = Dt, a = e ? Nu : 0, u = s + o + a + Lu * 2 + lk * 2, l = t - u, d = Math.max(l, 0), p = d - Gn, g = (p < Gn ? d : p) + u + Gn, v = t < g;
  return {
    maxTimeLabelWidth: d === 0 ? null : d,
    displayVerticalVolumeSlider: v
  };
}, [e, t]), fk = [
  0,
  0.013,
  0.049,
  0.104,
  0.175,
  0.259,
  0.352,
  0.45,
  0.55,
  0.648,
  0.741,
  0.825,
  0.896,
  0.951,
  0.987
], pk = [
  0,
  8.1,
  15.5,
  22.5,
  29,
  35.3,
  41.2,
  47.1,
  52.9,
  58.8,
  64.7,
  71,
  77.5,
  84.5,
  91.9
], hk = 1 / 0.7, mk = {
  boxSizing: "border-box",
  position: "absolute",
  bottom: 0,
  width: "100%",
  paddingTop: 40,
  paddingBottom: 10,
  backgroundImage: `linear-gradient(to bottom,${fk.map((e, t) => `hsla(0, 0%, 0%, ${e}) ${pk[t] * hk}%`).join(", ")}, hsl(0, 0%, 0%) 100%)`,
  backgroundSize: "auto 145px",
  display: "flex",
  paddingRight: Lu,
  paddingLeft: Lu,
  flexDirection: "column",
  transition: "opacity 0.3s"
}, gk = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  WebkitUserSelect: "none"
}, vk = {
  display: "flex",
  flexDirection: "row",
  userSelect: "none",
  WebkitUserSelect: "none",
  alignItems: "center"
}, Fs = {
  width: 12
}, yk = {
  height: 8
}, bk = {
  flex: 1
}, wk = {}, Sk = ({
  durationInFrames: e,
  isFullscreen: t,
  fps: r,
  player: o,
  showVolumeControls: s,
  onFullscreenButtonClick: a,
  allowFullscreen: u,
  onExitFullscreenButtonClick: l,
  spaceKeyToPlayOrPause: d,
  onSeekEnd: p,
  onSeekStart: m,
  inFrame: g,
  outFrame: v,
  initiallyShowControls: S,
  canvasSize: _,
  renderPlayPauseButton: T,
  renderFullscreenButton: C,
  alwaysShowControls: A,
  showPlaybackRateControl: k,
  containerRef: O,
  buffering: N,
  hideControlsWhenPointerDoesntMove: $,
  onPointerDown: V,
  onDoubleClick: G,
  renderMuteButton: U,
  renderVolumeSlider: Y
}) => {
  const H = f.useRef(null), Z = ke.Timeline.useTimelinePosition(), [W, Q] = f.useState(!1), ue = Tl(O, $), { maxTimeLabelWidth: ye, displayVerticalVolumeSlider: ee } = dk({
    allowFullscreen: u,
    playerWidth: _?.width ?? 0
  }), [me, xe] = f.useState(() => {
    if (typeof S == "boolean")
      return S;
    if (typeof S == "number") {
      if (S % 1 !== 0)
        throw new Error("initiallyShowControls must be an integer or a boolean");
      if (Number.isNaN(S))
        throw new Error("initiallyShowControls must not be NaN");
      if (!Number.isFinite(S))
        throw new Error("initiallyShowControls must be finite");
      if (S <= 0)
        throw new Error("initiallyShowControls must be a positive integer");
      return S;
    }
    throw new TypeError("initiallyShowControls must be a number or a boolean");
  }), re = f.useMemo(() => {
    const ce = ue || !o.playing || me || A;
    return {
      ...mk,
      opacity: Number(ce)
    };
  }, [ue, me, o.playing, A]);
  f.useEffect(() => {
    H.current && d && H.current.focus({
      preventScroll: !0
    });
  }, [o.playing, d]), f.useEffect(() => {
    Q((typeof document < "u" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? !1);
  }, []), f.useEffect(() => {
    if (me === !1)
      return;
    const et = setTimeout(() => {
      xe(!1);
    }, me === !0 ? 2e3 : me);
    return () => {
      clearInterval(et);
    };
  }, [me]);
  const R = f.useMemo(() => ({
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 14,
    maxWidth: ye === null ? void 0 : ye,
    overflow: "hidden",
    textOverflow: "ellipsis"
  }), [ye]), L = f.useMemo(() => {
    if (k === !0)
      return [0.5, 0.8, 1, 1.2, 1.5, 1.8, 2, 2.5, 3];
    if (Array.isArray(k)) {
      for (const ce of k) {
        if (typeof ce != "number")
          throw new Error("Every item in showPlaybackRateControl must be a number");
        if (ce <= 0)
          throw new Error("Every item in showPlaybackRateControl must be positive");
      }
      return k;
    }
    return null;
  }, [k]), ie = f.useRef(null), le = f.useRef(null), ve = f.useCallback((ce) => {
    (ce.target === ie.current || ce.target === le.current) && V?.(ce);
  }, [V]), de = f.useCallback((ce) => {
    (ce.target === ie.current || ce.target === le.current) && G?.(ce);
  }, [G]);
  return /* @__PURE__ */ y.jsxs("div", {
    ref: ie,
    style: re,
    onPointerDown: ve,
    onDoubleClick: de,
    children: [
      /* @__PURE__ */ y.jsxs("div", {
        ref: le,
        style: gk,
        children: [
          /* @__PURE__ */ y.jsxs("div", {
            style: vk,
            children: [
              /* @__PURE__ */ y.jsx("button", {
                ref: H,
                type: "button",
                style: ju,
                onClick: o.playing ? o.pause : o.play,
                "aria-label": o.playing ? "Pause video" : "Play video",
                title: o.playing ? "Pause video" : "Play video",
                children: T === null ? /* @__PURE__ */ y.jsx(dh, {
                  buffering: N,
                  playing: o.playing
                }) : T({
                  playing: o.playing,
                  isBuffering: N
                }) ?? /* @__PURE__ */ y.jsx(dh, {
                  buffering: N,
                  playing: o.playing
                })
              }),
              s ? /* @__PURE__ */ y.jsxs(y.Fragment, {
                children: [
                  /* @__PURE__ */ y.jsx("div", {
                    style: Fs
                  }),
                  /* @__PURE__ */ y.jsx(GI, {
                    renderMuteButton: U,
                    renderVolumeSlider: Y,
                    displayVerticalVolumeSlider: ee
                  })
                ]
              }) : null,
              /* @__PURE__ */ y.jsx("div", {
                style: Fs
              }),
              /* @__PURE__ */ y.jsxs("div", {
                style: R,
                children: [
                  hh(Z / r),
                  " / ",
                  hh(e / r)
                ]
              }),
              /* @__PURE__ */ y.jsx("div", {
                style: Fs
              })
            ]
          }),
          /* @__PURE__ */ y.jsx("div", {
            style: bk
          }),
          L && _ && /* @__PURE__ */ y.jsx(ik, {
            canvasSize: _,
            playbackRates: L
          }),
          L && W && u ? /* @__PURE__ */ y.jsx("div", {
            style: Fs
          }) : null,
          /* @__PURE__ */ y.jsx("div", {
            style: wk,
            children: W && u ? /* @__PURE__ */ y.jsx("button", {
              type: "button",
              "aria-label": t ? "Exit fullscreen" : "Enter Fullscreen",
              title: t ? "Exit fullscreen" : "Enter Fullscreen",
              style: ju,
              onClick: t ? l : a,
              children: C === null ? /* @__PURE__ */ y.jsx(PI, {
                isFullscreen: t
              }) : C({ isFullscreen: t })
            }) : null
          })
        ]
      }),
      /* @__PURE__ */ y.jsx("div", {
        style: yk
      }),
      /* @__PURE__ */ y.jsx(uk, {
        onSeekEnd: p,
        onSeekStart: m,
        durationInFrames: e,
        inFrame: g,
        outFrame: v
      })
    ]
  });
}, xk = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  height: "100%",
  width: "100%"
};
class uv extends Ie.Component {
  state = { hasError: null };
  static getDerivedStateFromError(t) {
    return { hasError: t };
  }
  componentDidCatch(t) {
    this.props.onError(t);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ y.jsx("div", {
      style: xk,
      children: this.props.errorFallback({
        error: this.state.hasError
      })
    }) : this.props.children;
  }
}
var kl = "__remotion-player", lv = typeof document > "u", Ek = (e) => {
  let t = !1;
  return {
    promise: new Promise((o, s) => {
      e.then((a) => {
        if (t) {
          s({ isCanceled: t, value: a });
          return;
        }
        o(a);
      }).catch((a) => {
        s({ isCanceled: t, error: a });
      });
    }),
    cancel: () => {
      t = !0;
    }
  };
}, _k = (e) => new Promise((t) => setTimeout(t, e)), Ck = () => {
  const e = f.useRef([]), t = f.useCallback((a) => {
    e.current = [...e.current, a];
  }, []), r = f.useCallback((a) => {
    e.current = e.current.filter((u) => u !== a);
  }, []), o = f.useCallback(() => e.current.map((a) => a.cancel()), []);
  return f.useMemo(() => ({
    appendPendingPromise: t,
    removePendingPromise: r,
    clearPendingPromises: o
  }), [t, o, r]);
}, Tk = (e, t, r) => {
  const o = Ck(), s = f.useCallback(async (d) => {
    if (d instanceof PointerEvent ? d.pointerType === "touch" : d.nativeEvent.pointerType === "touch") {
      e(d);
      return;
    }
    o.clearPendingPromises();
    const p = Ek(_k(200));
    o.appendPendingPromise(p);
    try {
      await p.promise, o.removePendingPromise(p), e(d);
    } catch (m) {
      const g = m;
      if (o.removePendingPromise(p), !g.isCanceled)
        throw g.error;
    }
  }, [o, e]), a = f.useCallback(() => {
    document.addEventListener("pointerup", (d) => {
      s(d);
    }, {
      once: !0
    });
  }, [s]), u = f.useCallback(() => {
    o.clearPendingPromises(), t();
  }, [o, t]);
  return f.useMemo(() => r ? { handlePointerDown: a, handleDoubleClick: u } : { handlePointerDown: e, handleDoubleClick: () => {
  } }, [r, u, a, e]);
}, Fu = Ie.version.split(".")[0];
if (Fu === "0")
  throw new Error(`Version ${Fu} of "react" is not supported by Remotion`);
var Ik = parseInt(Fu, 10) >= 18, kk = ({
  controls: e,
  style: t,
  loop: r,
  autoPlay: o,
  allowFullscreen: s,
  inputProps: a,
  clickToPlay: u,
  showVolumeControls: l,
  doubleClickToFullscreen: d,
  spaceKeyToPlayOrPause: p,
  errorFallback: m,
  playbackRate: g,
  renderLoading: v,
  renderPoster: S,
  className: _,
  moveToBeginningWhenEnded: T,
  showPosterWhenUnplayed: C,
  showPosterWhenEnded: A,
  showPosterWhenPaused: k,
  showPosterWhenBuffering: O,
  inFrame: N,
  outFrame: $,
  initiallyShowControls: V,
  renderFullscreen: G,
  renderPlayPauseButton: U,
  renderMuteButton: Y,
  renderVolumeSlider: H,
  alwaysShowControls: Z,
  showPlaybackRateControl: W,
  posterFillMode: Q,
  bufferStateDelayInMilliseconds: ue,
  hideControlsWhenPointerDoesntMove: ye,
  overflowVisible: ee,
  browserMediaControlsBehavior: me
}, xe) => {
  const re = ke.useUnsafeVideoConfig(), R = ke.useVideo(), L = f.useRef(null), ie = Il(L, {
    triggerOnWindowResize: !1,
    shouldApplyCssTransforms: !1
  }), [le, ve] = f.useState(!1), [de, ce] = f.useState(o), [et, Fe] = f.useState(() => !1), [wt, er] = f.useState(!1), St = f.useMemo(() => typeof document > "u" ? !1 : !!(document.fullscreenEnabled || document.webkitFullscreenEnabled), []), be = Ia();
  WI({
    loop: r,
    playbackRate: g,
    moveToBeginningWhenEnded: T,
    inFrame: N,
    outFrame: $,
    frameRef: be.remotionInternal_currentFrameRef,
    browserMediaControlsBehavior: me
  }), f.useEffect(() => {
    le && !be.playing && (ve(!1), be.play());
  }, [le, be]), f.useEffect(() => {
    const { current: He } = L;
    if (!He)
      return;
    const $e = () => {
      const Rt = document.fullscreenElement === He || document.webkitFullscreenElement === He;
      Fe(Rt);
    };
    return document.addEventListener("fullscreenchange", $e), document.addEventListener("webkitfullscreenchange", $e), () => {
      document.removeEventListener("fullscreenchange", $e), document.removeEventListener("webkitfullscreenchange", $e);
    };
  }, []);
  const kt = f.useCallback((He) => {
    be.isPlaying() ? be.pause() : be.play(He);
  }, [be]), Je = f.useCallback(() => {
    if (!s)
      throw new Error("allowFullscreen is false");
    if (!St)
      throw new Error("Browser doesnt support fullscreen");
    if (!L.current)
      throw new Error("No player ref found");
    L.current.webkitRequestFullScreen ? L.current.webkitRequestFullScreen() : L.current.requestFullscreen();
  }, [s, St]), lt = f.useCallback(() => {
    document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.exitFullscreen();
  }, []);
  f.useEffect(() => {
    const { current: He } = L;
    if (!He)
      return;
    const $e = () => {
      const Rt = document.webkitFullscreenElement ?? document.fullscreenElement;
      Rt && Rt === L.current ? be.emitter.dispatchFullscreenChange({
        isFullscreen: !0
      }) : be.emitter.dispatchFullscreenChange({
        isFullscreen: !1
      });
    };
    return He.addEventListener("webkitfullscreenchange", $e), He.addEventListener("fullscreenchange", $e), () => {
      He.removeEventListener("webkitfullscreenchange", $e), He.removeEventListener("fullscreenchange", $e);
    };
  }, [be.emitter]);
  const tr = re?.durationInFrames ?? 1, qe = f.useMemo(() => !re || !ie ? null : rv({
    canvasSize: ie,
    compositionHeight: re.height,
    compositionWidth: re.width,
    previewSize: "auto"
  }), [ie, re]), ht = qe?.scale ?? 1, yr = f.useRef(!1);
  f.useEffect(() => {
    if (!yr.current) {
      yr.current = !0;
      return;
    }
    be.emitter.dispatchScaleChange(ht);
  }, [be.emitter, ht]);
  const { setMediaVolume: Lt, setMediaMuted: P } = f.useContext(ke.SetMediaVolumeContext), { mediaMuted: oe, mediaVolume: se } = f.useContext(ke.MediaVolumeContext);
  f.useEffect(() => {
    be.emitter.dispatchVolumeChange(se);
  }, [be.emitter, se]);
  const Ae = oe || se === 0;
  f.useEffect(() => {
    be.emitter.dispatchMuteChange({
      isMuted: Ae
    });
  }, [be.emitter, Ae]);
  const [Ye, Ue] = f.useState(!1);
  f.useEffect(() => {
    let He = null, $e = !1;
    const Rt = () => {
      $e = !1, requestAnimationFrame(() => {
        ue === 0 ? Ue(!0) : He = setTimeout(() => {
          $e || Ue(!0);
        }, ue);
      });
    }, Yt = () => {
      requestAnimationFrame(() => {
        $e = !0, Ue(!1), He && clearTimeout(He);
      });
    };
    return be.emitter.addEventListener("waiting", Rt), be.emitter.addEventListener("resume", Yt), () => {
      be.emitter.removeEventListener("waiting", Rt), be.emitter.removeEventListener("resume", Yt), Ue(!1), He && clearTimeout(He), $e = !0;
    };
  }, [ue, be.emitter]), f.useImperativeHandle(xe, () => {
    const He = {
      play: be.play,
      pause: () => {
        ve(!1), be.pause();
      },
      toggle: kt,
      getContainerNode: () => L.current,
      getCurrentFrame: be.getCurrentFrame,
      isPlaying: be.isPlaying,
      seekTo: ($e) => {
        const Rt = tr - 1, Yt = Math.max(0, Math.min(Rt, $e));
        be.isPlaying() && (ve(Yt !== Rt || r), be.pause()), Yt === Rt && !r && be.emitter.dispatchEnded(), be.seek(Yt);
      },
      isFullscreen: () => {
        const { current: $e } = L;
        return $e ? document.fullscreenElement === $e || document.webkitFullscreenElement === $e : !1;
      },
      requestFullscreen: Je,
      exitFullscreen: lt,
      getVolume: () => oe ? 0 : se,
      setVolume: ($e) => {
        if (typeof $e != "number")
          throw new TypeError(`setVolume() takes a number, got value of type ${typeof $e}`);
        if (isNaN($e))
          throw new TypeError("setVolume() got a number that is NaN. Volume must be between 0 and 1.");
        if ($e < 0 || $e > 1)
          throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${typeof $e}`);
        Lt($e);
      },
      isMuted: () => Ae,
      mute: () => {
        P(!0);
      },
      unmute: () => {
        P(!1);
      },
      getScale: () => ht,
      pauseAndReturnToPlayStart: () => {
        be.pauseAndReturnToPlayStart();
      }
    };
    return Object.assign(be.emitter, He);
  }, [
    tr,
    lt,
    r,
    oe,
    Ae,
    se,
    be,
    Je,
    P,
    Lt,
    kt,
    ht
  ]);
  const Ee = R ? R.component : null, pe = f.useMemo(() => nv({
    canvasSize: ie,
    config: re,
    style: t,
    overflowVisible: ee,
    layout: qe
  }), [ie, re, qe, ee, t]), xt = f.useMemo(() => iv({ config: re, layout: qe, scale: ht, overflowVisible: ee }), [re, qe, ee, ht]), ct = f.useMemo(() => ov({
    canvasSize: ie,
    config: re,
    layout: qe,
    scale: ht,
    overflowVisible: ee
  }), [ie, re, qe, ee, ht]), Et = f.useCallback((He) => {
    be.pause(), be.emitter.dispatchError(He);
  }, [be]), rr = f.useCallback((He) => {
    He.stopPropagation(), Je();
  }, [Je]), Mt = f.useCallback((He) => {
    He.stopPropagation(), lt();
  }, [lt]), cr = f.useCallback((He) => {
    (He instanceof MouseEvent ? He.button === 2 : He.nativeEvent.button) || kt(He);
  }, [kt]), At = f.useCallback(() => {
    er(!0);
  }, []), un = f.useCallback(() => {
    er(!1);
  }, []), ln = f.useCallback(() => {
    et ? lt() : Je();
  }, [lt, et, Je]), { handlePointerDown: Xr, handleDoubleClick: Lr } = Tk(cr, ln, d && s && St);
  f.useEffect(() => {
    de && (be.play(), ce(!1));
  }, [de, be]);
  const co = f.useMemo(() => v ? v({
    height: pe.height,
    width: pe.width,
    isBuffering: Ye
  }) : null, [pe.height, pe.width, v, Ye]), dn = f.useMemo(() => ({
    type: "scale",
    scale: ht
  }), [ht]);
  if (!re)
    return null;
  const kr = S ? S({
    height: Q === "player-size" ? pe.height : re.height,
    width: Q === "player-size" ? pe.width : re.width,
    isBuffering: Ye
  }) : null;
  if (kr === void 0)
    throw new TypeError("renderPoster() must return a React element, but undefined was returned");
  const uo = kr && [
    k && !be.isPlaying() && !wt,
    A && be.isLastFrame && !be.isPlaying(),
    C && !be.hasPlayed && !be.isPlaying(),
    O && Ye && be.isPlaying()
  ].some(Boolean), { left: Xo, top: Ko, width: Zo, height: lo, ...fo } = xt, Pn = /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [
      /* @__PURE__ */ y.jsx("div", {
        style: xt,
        onPointerDown: u ? Xr : void 0,
        onDoubleClick: d ? Lr : void 0,
        children: /* @__PURE__ */ y.jsxs("div", {
          style: ct,
          className: kl,
          children: [
            Ee ? /* @__PURE__ */ y.jsx(uv, {
              onError: Et,
              errorFallback: m,
              children: /* @__PURE__ */ y.jsx(ke.CurrentScaleContext.Provider, {
                value: dn,
                children: /* @__PURE__ */ y.jsx(Ee, {
                  ...R?.props ?? {},
                  ...a ?? {}
                })
              })
            }) : null,
            uo && Q === "composition-size" ? /* @__PURE__ */ y.jsx("div", {
              style: {
                ...fo,
                width: re.width,
                height: re.height
              },
              onPointerDown: u ? Xr : void 0,
              onDoubleClick: d ? Lr : void 0,
              children: kr
            }) : null
          ]
        })
      }),
      uo && Q === "player-size" ? /* @__PURE__ */ y.jsx("div", {
        style: xt,
        onPointerDown: u ? Xr : void 0,
        onDoubleClick: d ? Lr : void 0,
        children: kr
      }) : null,
      e ? /* @__PURE__ */ y.jsx(Sk, {
        fps: re.fps,
        durationInFrames: re.durationInFrames,
        player: be,
        containerRef: L,
        onFullscreenButtonClick: rr,
        isFullscreen: et,
        allowFullscreen: s,
        showVolumeControls: l,
        onExitFullscreenButtonClick: Mt,
        spaceKeyToPlayOrPause: p,
        onSeekEnd: un,
        onSeekStart: At,
        inFrame: N,
        outFrame: $,
        initiallyShowControls: V,
        canvasSize: ie,
        renderFullscreenButton: G,
        renderPlayPauseButton: U,
        alwaysShowControls: Z,
        showPlaybackRateControl: W,
        buffering: Ye,
        hideControlsWhenPointerDoesntMove: ye,
        onDoubleClick: d ? Lr : void 0,
        onPointerDown: u ? Xr : void 0,
        renderMuteButton: Y,
        renderVolumeSlider: H
      }) : null
    ]
  });
  return lv && !Ik ? /* @__PURE__ */ y.jsx("div", {
    ref: L,
    style: pe,
    className: _,
    children: Pn
  }) : /* @__PURE__ */ y.jsx("div", {
    ref: L,
    style: pe,
    className: _,
    children: /* @__PURE__ */ y.jsx(f.Suspense, {
      fallback: co,
      children: Pn
    })
  });
}, Ak = f.forwardRef(kk), dv = "remotion.volumePreference", Rk = (e) => {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(dv, String(e));
    } catch (t) {
      console.log("Could not persist volume", t);
    }
}, Pk = () => {
  if (typeof window > "u")
    return 1;
  try {
    const e = window.localStorage.getItem(dv);
    return e ? Number(e) : 1;
  } catch {
    return 1;
  }
}, Al = "player-comp", fv = ({
  children: e,
  timelineContext: t,
  fps: r,
  compositionHeight: o,
  compositionWidth: s,
  durationInFrames: a,
  component: u,
  numberOfSharedAudioTags: l,
  initiallyMuted: d
}) => {
  const p = f.useMemo(() => ({
    compositions: [
      {
        component: u,
        durationInFrames: a,
        height: o,
        width: s,
        fps: r,
        id: Al,
        nonce: 777,
        folderName: null,
        parentFolderName: null,
        schema: null,
        calculateMetadata: null
      }
    ],
    folders: [],
    registerFolder: () => {
    },
    unregisterFolder: () => {
    },
    registerComposition: () => {
    },
    unregisterComposition: () => {
    },
    currentCompositionMetadata: null,
    setCurrentCompositionMetadata: () => {
    },
    canvasContent: { type: "composition", compositionId: "player-comp" },
    setCanvasContent: () => {
    },
    updateCompositionDefaultProps: () => {
    }
  }), [u, a, o, s, r]), [m, g] = f.useState(() => d), [v, S] = f.useState(() => Pk()), _ = f.useMemo(() => ({
    mediaMuted: m,
    mediaVolume: v
  }), [m, v]), T = f.useCallback((A) => {
    S(A), Rk(A);
  }, []), C = f.useMemo(() => ({
    setMediaMuted: g,
    setMediaVolume: T
  }), [T]);
  return /* @__PURE__ */ y.jsx(ke.CanUseRemotionHooksProvider, {
    children: /* @__PURE__ */ y.jsx(ke.Timeline.TimelineContext.Provider, {
      value: t,
      children: /* @__PURE__ */ y.jsx(ke.CompositionManager.Provider, {
        value: p,
        children: /* @__PURE__ */ y.jsx(ke.ResolveCompositionConfig, {
          children: /* @__PURE__ */ y.jsx(ke.PrefetchProvider, {
            children: /* @__PURE__ */ y.jsx(ke.DurationsContextProvider, {
              children: /* @__PURE__ */ y.jsx(ke.MediaVolumeContext.Provider, {
                value: _,
                children: /* @__PURE__ */ y.jsx(ke.SetMediaVolumeContext.Provider, {
                  value: C,
                  children: /* @__PURE__ */ y.jsx(ke.SharedAudioContextProvider, {
                    numberOfAudioTags: l,
                    component: u,
                    children: /* @__PURE__ */ y.jsx(ke.BufferingProvider, {
                      children: e
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
}, mh = (e, t) => {
  if (typeof e > "u" || e === null)
    return e ?? null;
  if (typeof e != "number")
    throw new TypeError(`"${t}" must be a number, but is ${JSON.stringify(e)}`);
  if (Number.isNaN(e))
    throw new TypeError(`"${t}" must not be NaN, but is ${JSON.stringify(e)}`);
  if (!Number.isFinite(e))
    throw new TypeError(`"${t}" must be finite, but is ${JSON.stringify(e)}`);
  if (e % 1 !== 0)
    throw new TypeError(`"${t}" must be an integer, but is ${JSON.stringify(e)}`);
  return e;
}, Mk = ({
  inFrame: e,
  durationInFrames: t,
  outFrame: r
}) => {
  const o = mh(e, "inFrame"), s = mh(r, "outFrame");
  if (!(o === null && s === null)) {
    if (o !== null && o > t - 1)
      throw new Error("inFrame must be less than (durationInFrames - 1), but is " + o);
    if (s !== null && s > t - 1)
      throw new Error("outFrame must be less than (durationInFrames - 1), but is " + s);
    if (o !== null && o < 0)
      throw new Error("inFrame must be greater than 0, but is " + o);
    if (s !== null && s <= 0)
      throw new Error(`outFrame must be greater than 0, but is ${s}. If you want to render a single frame, use <Thumbnail /> instead.`);
    if (s !== null && o !== null && s <= o)
      throw new Error("outFrame must be greater than inFrame, but is " + s + " <= " + o);
  }
}, Ok = ({
  initialFrame: e,
  durationInFrames: t
}) => {
  if (typeof t != "number")
    throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(t)}`);
  if (!(typeof e > "u")) {
    if (typeof e != "number")
      throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(e)}`);
    if (Number.isNaN(e))
      throw new Error("`initialFrame` must be a number, but is NaN");
    if (!Number.isFinite(e))
      throw new Error("`initialFrame` must be a number, but is Infinity");
    if (e % 1 !== 0)
      throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(e)}`);
    if (e > t - 1)
      throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(e)}`);
  }
}, Nk = (e) => {
  if (e !== void 0) {
    if (e > 4)
      throw new Error(`The highest possible playback rate is 4. You passed: ${e}`);
    if (e < -4)
      throw new Error(`The lowest possible playback rate is -4. You passed: ${e}`);
    if (e === 0)
      throw new Error("A playback rate of 0 is not supported.");
  }
}, jk = Ta.validateFps, gh = Ta.validateDimension, Dk = Ta.validateDurationInFrames, Lk = Ta.validateDefaultAndInputProps, Fk = (e) => "component" in e ? e.component : null, $k = ({
  durationInFrames: e,
  compositionHeight: t,
  compositionWidth: r,
  fps: o,
  inputProps: s,
  style: a,
  controls: u = !1,
  loop: l = !1,
  autoPlay: d = !1,
  showVolumeControls: p = !0,
  allowFullscreen: m = !0,
  clickToPlay: g,
  doubleClickToFullscreen: v = !1,
  spaceKeyToPlayOrPause: S = !0,
  moveToBeginningWhenEnded: _ = !0,
  numberOfSharedAudioTags: T = 5,
  errorFallback: C = () => "⚠️",
  playbackRate: A = 1,
  renderLoading: k,
  className: O,
  showPosterWhenUnplayed: N,
  showPosterWhenEnded: $,
  showPosterWhenPaused: V,
  showPosterWhenBuffering: G,
  initialFrame: U,
  renderPoster: Y,
  inFrame: H,
  outFrame: Z,
  initiallyShowControls: W,
  renderFullscreenButton: Q,
  renderPlayPauseButton: ue,
  renderVolumeSlider: ye,
  alwaysShowControls: ee = !1,
  initiallyMuted: me = !1,
  showPlaybackRateControl: xe = !1,
  posterFillMode: re = "player-size",
  bufferStateDelayInMilliseconds: R,
  hideControlsWhenPointerDoesntMove: L = !0,
  overflowVisible: ie = !1,
  renderMuteButton: le,
  browserMediaControlsBehavior: ve,
  ...de
}, ce) => {
  if (typeof window < "u" && f.useLayoutEffect(() => {
    window.remotion_isPlayer = !0;
  }, []), de.defaultProps !== void 0)
    throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
  const et = Fk(de);
  if (et?.type === ih)
    throw new TypeError("'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");
  if (et === ih)
    throw new TypeError("'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");
  const Fe = ke.useLazyComponent(de);
  Ok({ initialFrame: U, durationInFrames: e });
  const [wt, er] = f.useState(() => ({
    [Al]: U ?? 0
  })), [St, be] = f.useState(!1), [kt] = f.useState("player-comp"), Je = f.useRef(null), lt = f.useRef([]), tr = f.useRef(!1), [qe, ht] = f.useState(A);
  if (typeof t != "number")
    throw new TypeError(`'compositionHeight' must be a number but got '${typeof t}' instead`);
  if (typeof r != "number")
    throw new TypeError(`'compositionWidth' must be a number but got '${typeof r}' instead`);
  if (gh(t, "compositionHeight", "of the <Player /> component"), gh(r, "compositionWidth", "of the <Player /> component"), Dk(e, {
    component: "of the <Player/> component",
    allowFloats: !1
  }), jk(o, "as a prop of the <Player/> component", !1), Lk(s, "inputProps", null), Mk({
    durationInFrames: e,
    inFrame: H,
    outFrame: Z
  }), typeof u != "boolean" && typeof u < "u")
    throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof u}' instead`);
  if (typeof d != "boolean" && typeof d < "u")
    throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof d}' instead`);
  if (typeof l != "boolean" && typeof l < "u")
    throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof l}' instead`);
  if (typeof v != "boolean" && typeof v < "u")
    throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof v}' instead`);
  if (typeof p != "boolean" && typeof p < "u")
    throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof p}' instead`);
  if (typeof m != "boolean" && typeof m < "u")
    throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof m}' instead`);
  if (typeof g != "boolean" && typeof g < "u")
    throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof g}' instead`);
  if (typeof S != "boolean" && typeof S < "u")
    throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof S}' instead`);
  if (typeof T != "number" || T % 1 !== 0 || !Number.isFinite(T) || Number.isNaN(T) || T < 0)
    throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${T}' instead`);
  Nk(qe), f.useEffect(() => {
    ht(A);
  }, [A]), f.useImperativeHandle(ce, () => Je.current, []);
  const yr = f.useMemo(() => ({
    frame: wt,
    playing: St,
    rootId: kt,
    playbackRate: qe,
    imperativePlaying: tr,
    setPlaybackRate: (se) => {
      ht(se);
    },
    audioAndVideoTags: lt
  }), [wt, qe, St, kt]), Lt = f.useMemo(() => ({
    setFrame: er,
    setPlaying: be
  }), [er]);
  typeof window < "u" && f.useLayoutEffect(() => {
    ke.CSSUtils.injectCSS(ke.CSSUtils.makeDefaultPreviewCSS(`.${kl}`, "#fff"));
  }, []);
  const P = f.useMemo(() => s ?? {}, [s]), oe = f.useMemo(() => ve ?? {
    mode: "prevent-media-session"
  }, [ve]);
  return /* @__PURE__ */ y.jsx(ke.IsPlayerContextProvider, {
    children: /* @__PURE__ */ y.jsx(fv, {
      timelineContext: yr,
      component: Fe,
      compositionHeight: t,
      compositionWidth: r,
      durationInFrames: e,
      fps: o,
      numberOfSharedAudioTags: T,
      initiallyMuted: me,
      children: /* @__PURE__ */ y.jsx(ke.Timeline.SetTimelineContext.Provider, {
        value: Lt,
        children: /* @__PURE__ */ y.jsx(VI, {
          currentPlaybackRate: qe,
          children: /* @__PURE__ */ y.jsx(Ak, {
            ref: Je,
            posterFillMode: re,
            renderLoading: k,
            autoPlay: !!d,
            loop: !!l,
            controls: !!u,
            errorFallback: C,
            style: a,
            inputProps: P,
            allowFullscreen: !!m,
            moveToBeginningWhenEnded: !!_,
            clickToPlay: typeof g == "boolean" ? g : !!u,
            showVolumeControls: !!p,
            doubleClickToFullscreen: !!v,
            spaceKeyToPlayOrPause: !!S,
            playbackRate: qe,
            className: O ?? void 0,
            showPosterWhenUnplayed: !!N,
            showPosterWhenEnded: !!$,
            showPosterWhenPaused: !!V,
            showPosterWhenBuffering: !!G,
            renderPoster: Y,
            inFrame: H ?? null,
            outFrame: Z ?? null,
            initiallyShowControls: W ?? !0,
            renderFullscreen: Q ?? null,
            renderPlayPauseButton: ue ?? null,
            renderMuteButton: le ?? null,
            renderVolumeSlider: ye ?? null,
            alwaysShowControls: ee,
            showPlaybackRateControl: xe,
            bufferStateDelayInMilliseconds: R ?? 300,
            hideControlsWhenPointerDoesntMove: L,
            overflowVisible: ie,
            browserMediaControlsBehavior: oe
          })
        })
      })
    })
  });
}, Vk = f.forwardRef, zk = Vk($k), Uk = () => {
  const e = f.useContext(av);
  if (!e)
    throw new TypeError("Expected Player event emitter context");
  return f.useMemo(() => ({
    emitter: e
  }), [e]);
}, $u = Ie.version.split(".")[0];
if ($u === "0")
  throw new Error(`Version ${$u} of "react" is not supported by Remotion`);
var Hk = parseInt($u, 10) >= 18, Wk = ({ style: e, inputProps: t, errorFallback: r, renderLoading: o, className: s, overflowVisible: a }, u) => {
  const l = ke.useUnsafeVideoConfig(), d = ke.useVideo(), p = f.useRef(null), m = Il(p, {
    triggerOnWindowResize: !1,
    shouldApplyCssTransforms: !1
  }), g = f.useMemo(() => !l || !m ? null : rv({
    canvasSize: m,
    compositionHeight: l.height,
    compositionWidth: l.width,
    previewSize: "auto"
  }), [m, l]), v = g?.scale ?? 1, S = Uk();
  cv(S.emitter), f.useImperativeHandle(u, () => {
    const V = {
      getContainerNode: () => p.current,
      getScale: () => v
    };
    return Object.assign(S.emitter, V);
  }, [v, S.emitter]);
  const _ = d ? d.component : null, T = f.useMemo(() => nv({
    config: l,
    style: e,
    canvasSize: m,
    overflowVisible: a,
    layout: g
  }), [m, l, g, a, e]), C = f.useMemo(() => iv({ config: l, layout: g, scale: v, overflowVisible: a }), [l, g, a, v]), A = f.useMemo(() => ov({
    canvasSize: m,
    config: l,
    layout: g,
    scale: v,
    overflowVisible: a
  }), [m, l, g, a, v]), k = f.useCallback((V) => {
    S.emitter.dispatchError(V);
  }, [S.emitter]), O = f.useMemo(() => o ? o({
    height: T.height,
    width: T.width,
    isBuffering: !1
  }) : null, [T.height, T.width, o]), N = f.useMemo(() => ({
    type: "scale",
    scale: v
  }), [v]);
  if (!l)
    return null;
  const $ = /* @__PURE__ */ y.jsx("div", {
    style: C,
    children: /* @__PURE__ */ y.jsx("div", {
      style: A,
      className: kl,
      children: _ ? /* @__PURE__ */ y.jsx(uv, {
        onError: k,
        errorFallback: r,
        children: /* @__PURE__ */ y.jsx(ke.CurrentScaleContext.Provider, {
          value: N,
          children: /* @__PURE__ */ y.jsx(_, {
            ...d?.props ?? {},
            ...t ?? {}
          })
        })
      }) : null
    })
  });
  return lv && !Hk ? /* @__PURE__ */ y.jsx("div", {
    ref: p,
    style: T,
    className: s,
    children: $
  }) : /* @__PURE__ */ y.jsx("div", {
    ref: p,
    style: T,
    className: s,
    children: /* @__PURE__ */ y.jsx(f.Suspense, {
      fallback: O,
      children: $
    })
  });
}, Bk = f.forwardRef(Wk), Yk = ({
  frameToDisplay: e,
  style: t,
  inputProps: r,
  compositionHeight: o,
  compositionWidth: s,
  durationInFrames: a,
  fps: u,
  className: l,
  errorFallback: d = () => "⚠️",
  renderLoading: p,
  overflowVisible: m = !1,
  ...g
}, v) => {
  typeof window < "u" && f.useLayoutEffect(() => {
    window.remotion_isPlayer = !0;
  }, []);
  const [S] = f.useState(() => String(so(null))), _ = f.useRef(null), T = f.useMemo(() => ({
    playing: !1,
    frame: {
      [Al]: e
    },
    rootId: S,
    imperativePlaying: {
      current: !1
    },
    playbackRate: 1,
    setPlaybackRate: () => {
      throw new Error("thumbnail");
    },
    audioAndVideoTags: { current: [] }
  }), [e, S]);
  f.useImperativeHandle(v, () => _.current, []);
  const C = ke.useLazyComponent(g), [A] = f.useState(() => new $I()), k = f.useMemo(() => r ?? {}, [r]);
  return /* @__PURE__ */ y.jsx(ke.IsPlayerContextProvider, {
    children: /* @__PURE__ */ y.jsx(fv, {
      timelineContext: T,
      component: C,
      compositionHeight: o,
      compositionWidth: s,
      durationInFrames: a,
      fps: u,
      numberOfSharedAudioTags: 0,
      initiallyMuted: !0,
      children: /* @__PURE__ */ y.jsx(av.Provider, {
        value: A,
        children: /* @__PURE__ */ y.jsx(Bk, {
          ref: _,
          className: l,
          errorFallback: d,
          inputProps: k,
          renderLoading: p,
          style: t,
          overflowVisible: m
        })
      })
    })
  });
}, Gk = f.forwardRef;
Gk(Yk);
const $s = (e, t) => {
  const r = e.from / 1e3 * t, o = e.to / 1e3 * t - r;
  return { from: r, durationInFrames: o };
}, qk = {
  text: (e, t) => {
    const { fps: r, height: o, width: s } = t, { from: a, durationInFrames: u } = $s(e.display, r);
    return /* @__PURE__ */ y.jsx(
      Ur,
      {
        from: a,
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
        children: /* @__PURE__ */ y.jsx("div", { children: e.details.text })
      },
      e.id
    );
  },
  image: (e, t) => {
    const { fps: r } = t, { from: o, durationInFrames: s } = $s(e.display, r);
    return /* @__PURE__ */ y.jsx(
      Ur,
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
        children: /* @__PURE__ */ y.jsx(_i, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ y.jsx(
          Kg,
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
    const { fps: r } = t, { from: o, durationInFrames: s } = $s(e.display, r), a = e.trim, u = e.details.crop || {
      x: 0,
      y: 0,
      width: e.details.width,
      height: e.details.height
    };
    return a ? /* @__PURE__ */ y.jsx(
      Ur,
      {
        premountFor: 30 * 5,
        from: o,
        durationInFrames: s,
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
        children: /* @__PURE__ */ y.jsx(
          _i,
          {
            style: {
              pointerEvents: "none",
              width: e.details.width,
              height: e.details.height,
              top: -u.y,
              left: -u.x
            },
            children: /* @__PURE__ */ y.jsx(
              tv,
              {
                startFrom: a.from / 1e3 * r,
                endAt: a.to / 1e3 * r,
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
    ) : /* @__PURE__ */ y.jsx(y.Fragment, {});
  },
  audio: (e, t) => {
    const { fps: r } = t, { from: o, durationInFrames: s } = $s(e.display, r), a = e.trim;
    return a ? /* @__PURE__ */ y.jsx(
      Ur,
      {
        className: `moonshine-scene-item id-${e.id} moonshine-scene-item-type-${e.type}`,
        from: o,
        durationInFrames: s,
        style: {
          userSelect: "none",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ y.jsx(_i, { children: /* @__PURE__ */ y.jsx(
          Ci,
          {
            startFrom: a.from / 1e3 * r,
            endAt: a.to / 1e3 * r,
            src: e.details.src,
            volume: (e.details.volume ?? 100) / 100
          }
        ) })
      },
      e.id
    ) : /* @__PURE__ */ y.jsx(y.Fragment, {});
  }
};
var Js = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Js.exports;
(function(e, t) {
  (function() {
    var r, o = "4.17.21", s = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", l = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", p = 500, m = "__lodash_placeholder__", g = 1, v = 2, S = 4, _ = 1, T = 2, C = 1, A = 2, k = 4, O = 8, N = 16, $ = 32, V = 64, G = 128, U = 256, Y = 512, H = 30, Z = "...", W = 800, Q = 16, ue = 1, ye = 2, ee = 3, me = 1 / 0, xe = 9007199254740991, re = 17976931348623157e292, R = NaN, L = 4294967295, ie = L - 1, le = L >>> 1, ve = [
      ["ary", G],
      ["bind", C],
      ["bindKey", A],
      ["curry", O],
      ["curryRight", N],
      ["flip", Y],
      ["partial", $],
      ["partialRight", V],
      ["rearg", U]
    ], de = "[object Arguments]", ce = "[object Array]", et = "[object AsyncFunction]", Fe = "[object Boolean]", wt = "[object Date]", er = "[object DOMException]", St = "[object Error]", be = "[object Function]", kt = "[object GeneratorFunction]", Je = "[object Map]", lt = "[object Number]", tr = "[object Null]", qe = "[object Object]", ht = "[object Promise]", yr = "[object Proxy]", Lt = "[object RegExp]", P = "[object Set]", oe = "[object String]", se = "[object Symbol]", Ae = "[object Undefined]", Ye = "[object WeakMap]", Ue = "[object WeakSet]", Ee = "[object ArrayBuffer]", pe = "[object DataView]", xt = "[object Float32Array]", ct = "[object Float64Array]", Et = "[object Int8Array]", rr = "[object Int16Array]", Mt = "[object Int32Array]", cr = "[object Uint8Array]", At = "[object Uint8ClampedArray]", un = "[object Uint16Array]", ln = "[object Uint32Array]", Xr = /\b__p \+= '';/g, Lr = /\b(__p \+=) '' \+/g, co = /(__e\(.*?\)|\b__t\)) \+\n'';/g, dn = /&(?:amp|lt|gt|quot|#39);/g, kr = /[&<>"']/g, uo = RegExp(dn.source), Xo = RegExp(kr.source), Ko = /<%-([\s\S]+?)%>/g, Zo = /<%([\s\S]+?)%>/g, lo = /<%=([\s\S]+?)%>/g, fo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pn = /^\w*$/, He = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $e = /[\\^$.*+?()[\]{}|]/g, Rt = RegExp($e.source), Yt = /^\s+/, Mn = /\s/, Jo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, qi = /\{\n\/\* \[wrapped with (.+)\] \*/, b = /,? & /, j = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, X = /[()=,{}\[\]\/\s]/, ne = /\\(\\)?/g, he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Se = /\w*$/, ge = /^[-+]0x[0-9a-f]+$/i, Xe = /^0b[01]+$/i, Ge = /^\[object .+?Constructor\]$/, st = /^0o[0-7]+$/i, Ft = /^(?:0|[1-9]\d*)$/, Kr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Gt = /($^)/, po = /['\n\r\u2028\u2029\\]/g, nr = "\\ud800-\\udfff", e1 = "\\u0300-\\u036f", t1 = "\\ufe20-\\ufe2f", r1 = "\\u20d0-\\u20ff", Bl = e1 + t1 + r1, Yl = "\\u2700-\\u27bf", Gl = "a-z\\xdf-\\xf6\\xf8-\\xff", n1 = "\\xac\\xb1\\xd7\\xf7", o1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", i1 = "\\u2000-\\u206f", s1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ql = "A-Z\\xc0-\\xd6\\xd8-\\xde", Xl = "\\ufe0e\\ufe0f", Kl = n1 + o1 + i1 + s1, Na = "['’]", a1 = "[" + nr + "]", Zl = "[" + Kl + "]", Xi = "[" + Bl + "]", Jl = "\\d+", c1 = "[" + Yl + "]", Ql = "[" + Gl + "]", ed = "[^" + nr + Kl + Jl + Yl + Gl + ql + "]", ja = "\\ud83c[\\udffb-\\udfff]", u1 = "(?:" + Xi + "|" + ja + ")", td = "[^" + nr + "]", Da = "(?:\\ud83c[\\udde6-\\uddff]){2}", La = "[\\ud800-\\udbff][\\udc00-\\udfff]", ho = "[" + ql + "]", rd = "\\u200d", nd = "(?:" + Ql + "|" + ed + ")", l1 = "(?:" + ho + "|" + ed + ")", od = "(?:" + Na + "(?:d|ll|m|re|s|t|ve))?", id = "(?:" + Na + "(?:D|LL|M|RE|S|T|VE))?", sd = u1 + "?", ad = "[" + Xl + "]?", d1 = "(?:" + rd + "(?:" + [td, Da, La].join("|") + ")" + ad + sd + ")*", f1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", p1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cd = ad + sd + d1, h1 = "(?:" + [c1, Da, La].join("|") + ")" + cd, m1 = "(?:" + [td + Xi + "?", Xi, Da, La, a1].join("|") + ")", g1 = RegExp(Na, "g"), v1 = RegExp(Xi, "g"), Fa = RegExp(ja + "(?=" + ja + ")|" + m1 + cd, "g"), y1 = RegExp([
      ho + "?" + Ql + "+" + od + "(?=" + [Zl, ho, "$"].join("|") + ")",
      l1 + "+" + id + "(?=" + [Zl, ho + nd, "$"].join("|") + ")",
      ho + "?" + nd + "+" + od,
      ho + "+" + id,
      p1,
      f1,
      Jl,
      h1
    ].join("|"), "g"), b1 = RegExp("[" + rd + nr + Bl + Xl + "]"), w1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, S1 = [
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
    ], x1 = -1, ot = {};
    ot[xt] = ot[ct] = ot[Et] = ot[rr] = ot[Mt] = ot[cr] = ot[At] = ot[un] = ot[ln] = !0, ot[de] = ot[ce] = ot[Ee] = ot[Fe] = ot[pe] = ot[wt] = ot[St] = ot[be] = ot[Je] = ot[lt] = ot[qe] = ot[Lt] = ot[P] = ot[oe] = ot[Ye] = !1;
    var nt = {};
    nt[de] = nt[ce] = nt[Ee] = nt[pe] = nt[Fe] = nt[wt] = nt[xt] = nt[ct] = nt[Et] = nt[rr] = nt[Mt] = nt[Je] = nt[lt] = nt[qe] = nt[Lt] = nt[P] = nt[oe] = nt[se] = nt[cr] = nt[At] = nt[un] = nt[ln] = !0, nt[St] = nt[be] = nt[Ye] = !1;
    var E1 = {
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
    }, _1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, C1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, T1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, I1 = parseFloat, k1 = parseInt, ud = typeof hi == "object" && hi && hi.Object === Object && hi, A1 = typeof self == "object" && self && self.Object === Object && self, Ot = ud || A1 || Function("return this")(), $a = t && !t.nodeType && t, On = $a && !0 && e && !e.nodeType && e, ld = On && On.exports === $a, Va = ld && ud.process, br = function() {
      try {
        var D = On && On.require && On.require("util").types;
        return D || Va && Va.binding && Va.binding("util");
      } catch {
      }
    }(), dd = br && br.isArrayBuffer, fd = br && br.isDate, pd = br && br.isMap, hd = br && br.isRegExp, md = br && br.isSet, gd = br && br.isTypedArray;
    function ur(D, B, z) {
      switch (z.length) {
        case 0:
          return D.call(B);
        case 1:
          return D.call(B, z[0]);
        case 2:
          return D.call(B, z[0], z[1]);
        case 3:
          return D.call(B, z[0], z[1], z[2]);
      }
      return D.apply(B, z);
    }
    function R1(D, B, z, fe) {
      for (var Re = -1, Ke = D == null ? 0 : D.length; ++Re < Ke; ) {
        var _t = D[Re];
        B(fe, _t, z(_t), D);
      }
      return fe;
    }
    function wr(D, B) {
      for (var z = -1, fe = D == null ? 0 : D.length; ++z < fe && B(D[z], z, D) !== !1; )
        ;
      return D;
    }
    function P1(D, B) {
      for (var z = D == null ? 0 : D.length; z-- && B(D[z], z, D) !== !1; )
        ;
      return D;
    }
    function vd(D, B) {
      for (var z = -1, fe = D == null ? 0 : D.length; ++z < fe; )
        if (!B(D[z], z, D))
          return !1;
      return !0;
    }
    function fn(D, B) {
      for (var z = -1, fe = D == null ? 0 : D.length, Re = 0, Ke = []; ++z < fe; ) {
        var _t = D[z];
        B(_t, z, D) && (Ke[Re++] = _t);
      }
      return Ke;
    }
    function Ki(D, B) {
      var z = D == null ? 0 : D.length;
      return !!z && mo(D, B, 0) > -1;
    }
    function za(D, B, z) {
      for (var fe = -1, Re = D == null ? 0 : D.length; ++fe < Re; )
        if (z(B, D[fe]))
          return !0;
      return !1;
    }
    function at(D, B) {
      for (var z = -1, fe = D == null ? 0 : D.length, Re = Array(fe); ++z < fe; )
        Re[z] = B(D[z], z, D);
      return Re;
    }
    function pn(D, B) {
      for (var z = -1, fe = B.length, Re = D.length; ++z < fe; )
        D[Re + z] = B[z];
      return D;
    }
    function Ua(D, B, z, fe) {
      var Re = -1, Ke = D == null ? 0 : D.length;
      for (fe && Ke && (z = D[++Re]); ++Re < Ke; )
        z = B(z, D[Re], Re, D);
      return z;
    }
    function M1(D, B, z, fe) {
      var Re = D == null ? 0 : D.length;
      for (fe && Re && (z = D[--Re]); Re--; )
        z = B(z, D[Re], Re, D);
      return z;
    }
    function Ha(D, B) {
      for (var z = -1, fe = D == null ? 0 : D.length; ++z < fe; )
        if (B(D[z], z, D))
          return !0;
      return !1;
    }
    var O1 = Wa("length");
    function N1(D) {
      return D.split("");
    }
    function j1(D) {
      return D.match(j) || [];
    }
    function yd(D, B, z) {
      var fe;
      return z(D, function(Re, Ke, _t) {
        if (B(Re, Ke, _t))
          return fe = Ke, !1;
      }), fe;
    }
    function Zi(D, B, z, fe) {
      for (var Re = D.length, Ke = z + (fe ? 1 : -1); fe ? Ke-- : ++Ke < Re; )
        if (B(D[Ke], Ke, D))
          return Ke;
      return -1;
    }
    function mo(D, B, z) {
      return B === B ? G1(D, B, z) : Zi(D, bd, z);
    }
    function D1(D, B, z, fe) {
      for (var Re = z - 1, Ke = D.length; ++Re < Ke; )
        if (fe(D[Re], B))
          return Re;
      return -1;
    }
    function bd(D) {
      return D !== D;
    }
    function wd(D, B) {
      var z = D == null ? 0 : D.length;
      return z ? Ya(D, B) / z : R;
    }
    function Wa(D) {
      return function(B) {
        return B == null ? r : B[D];
      };
    }
    function Ba(D) {
      return function(B) {
        return D == null ? r : D[B];
      };
    }
    function Sd(D, B, z, fe, Re) {
      return Re(D, function(Ke, _t, rt) {
        z = fe ? (fe = !1, Ke) : B(z, Ke, _t, rt);
      }), z;
    }
    function L1(D, B) {
      var z = D.length;
      for (D.sort(B); z--; )
        D[z] = D[z].value;
      return D;
    }
    function Ya(D, B) {
      for (var z, fe = -1, Re = D.length; ++fe < Re; ) {
        var Ke = B(D[fe]);
        Ke !== r && (z = z === r ? Ke : z + Ke);
      }
      return z;
    }
    function Ga(D, B) {
      for (var z = -1, fe = Array(D); ++z < D; )
        fe[z] = B(z);
      return fe;
    }
    function F1(D, B) {
      return at(B, function(z) {
        return [z, D[z]];
      });
    }
    function xd(D) {
      return D && D.slice(0, Td(D) + 1).replace(Yt, "");
    }
    function lr(D) {
      return function(B) {
        return D(B);
      };
    }
    function qa(D, B) {
      return at(B, function(z) {
        return D[z];
      });
    }
    function Qo(D, B) {
      return D.has(B);
    }
    function Ed(D, B) {
      for (var z = -1, fe = D.length; ++z < fe && mo(B, D[z], 0) > -1; )
        ;
      return z;
    }
    function _d(D, B) {
      for (var z = D.length; z-- && mo(B, D[z], 0) > -1; )
        ;
      return z;
    }
    function $1(D, B) {
      for (var z = D.length, fe = 0; z--; )
        D[z] === B && ++fe;
      return fe;
    }
    var V1 = Ba(E1), z1 = Ba(_1);
    function U1(D) {
      return "\\" + T1[D];
    }
    function H1(D, B) {
      return D == null ? r : D[B];
    }
    function go(D) {
      return b1.test(D);
    }
    function W1(D) {
      return w1.test(D);
    }
    function B1(D) {
      for (var B, z = []; !(B = D.next()).done; )
        z.push(B.value);
      return z;
    }
    function Xa(D) {
      var B = -1, z = Array(D.size);
      return D.forEach(function(fe, Re) {
        z[++B] = [Re, fe];
      }), z;
    }
    function Cd(D, B) {
      return function(z) {
        return D(B(z));
      };
    }
    function hn(D, B) {
      for (var z = -1, fe = D.length, Re = 0, Ke = []; ++z < fe; ) {
        var _t = D[z];
        (_t === B || _t === m) && (D[z] = m, Ke[Re++] = z);
      }
      return Ke;
    }
    function Ji(D) {
      var B = -1, z = Array(D.size);
      return D.forEach(function(fe) {
        z[++B] = fe;
      }), z;
    }
    function Y1(D) {
      var B = -1, z = Array(D.size);
      return D.forEach(function(fe) {
        z[++B] = [fe, fe];
      }), z;
    }
    function G1(D, B, z) {
      for (var fe = z - 1, Re = D.length; ++fe < Re; )
        if (D[fe] === B)
          return fe;
      return -1;
    }
    function q1(D, B, z) {
      for (var fe = z + 1; fe--; )
        if (D[fe] === B)
          return fe;
      return fe;
    }
    function vo(D) {
      return go(D) ? K1(D) : O1(D);
    }
    function Ar(D) {
      return go(D) ? Z1(D) : N1(D);
    }
    function Td(D) {
      for (var B = D.length; B-- && Mn.test(D.charAt(B)); )
        ;
      return B;
    }
    var X1 = Ba(C1);
    function K1(D) {
      for (var B = Fa.lastIndex = 0; Fa.test(D); )
        ++B;
      return B;
    }
    function Z1(D) {
      return D.match(Fa) || [];
    }
    function J1(D) {
      return D.match(y1) || [];
    }
    var Q1 = function D(B) {
      B = B == null ? Ot : yo.defaults(Ot.Object(), B, yo.pick(Ot, S1));
      var z = B.Array, fe = B.Date, Re = B.Error, Ke = B.Function, _t = B.Math, rt = B.Object, Ka = B.RegExp, ey = B.String, Sr = B.TypeError, Qi = z.prototype, ty = Ke.prototype, bo = rt.prototype, es = B["__core-js_shared__"], ts = ty.toString, tt = bo.hasOwnProperty, ry = 0, Id = function() {
        var n = /[^.]+$/.exec(es && es.keys && es.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), rs = bo.toString, ny = ts.call(rt), oy = Ot._, iy = Ka(
        "^" + ts.call(tt).replace($e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ns = ld ? B.Buffer : r, mn = B.Symbol, os = B.Uint8Array, kd = ns ? ns.allocUnsafe : r, is = Cd(rt.getPrototypeOf, rt), Ad = rt.create, Rd = bo.propertyIsEnumerable, ss = Qi.splice, Pd = mn ? mn.isConcatSpreadable : r, ei = mn ? mn.iterator : r, Nn = mn ? mn.toStringTag : r, as = function() {
        try {
          var n = $n(rt, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), sy = B.clearTimeout !== Ot.clearTimeout && B.clearTimeout, ay = fe && fe.now !== Ot.Date.now && fe.now, cy = B.setTimeout !== Ot.setTimeout && B.setTimeout, cs = _t.ceil, us = _t.floor, Za = rt.getOwnPropertySymbols, uy = ns ? ns.isBuffer : r, Md = B.isFinite, ly = Qi.join, dy = Cd(rt.keys, rt), Ct = _t.max, $t = _t.min, fy = fe.now, py = B.parseInt, Od = _t.random, hy = Qi.reverse, Ja = $n(B, "DataView"), ti = $n(B, "Map"), Qa = $n(B, "Promise"), wo = $n(B, "Set"), ri = $n(B, "WeakMap"), ni = $n(rt, "create"), ls = ri && new ri(), So = {}, my = Vn(Ja), gy = Vn(ti), vy = Vn(Qa), yy = Vn(wo), by = Vn(ri), ds = mn ? mn.prototype : r, oi = ds ? ds.valueOf : r, Nd = ds ? ds.toString : r;
      function x(n) {
        if (dt(n) && !Pe(n) && !(n instanceof Ve)) {
          if (n instanceof xr)
            return n;
          if (tt.call(n, "__wrapped__"))
            return Df(n);
        }
        return new xr(n);
      }
      var xo = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!ut(i))
            return {};
          if (Ad)
            return Ad(i);
          n.prototype = i;
          var c = new n();
          return n.prototype = r, c;
        };
      }();
      function fs() {
      }
      function xr(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      x.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Ko,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Zo,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: lo,
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
          _: x
        }
      }, x.prototype = fs.prototype, x.prototype.constructor = x, xr.prototype = xo(fs.prototype), xr.prototype.constructor = xr;
      function Ve(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = L, this.__views__ = [];
      }
      function wy() {
        var n = new Ve(this.__wrapped__);
        return n.__actions__ = or(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = or(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = or(this.__views__), n;
      }
      function Sy() {
        if (this.__filtered__) {
          var n = new Ve(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function xy() {
        var n = this.__wrapped__.value(), i = this.__dir__, c = Pe(n), h = i < 0, w = c ? n.length : 0, E = N0(0, w, this.__views__), I = E.start, M = E.end, F = M - I, q = h ? M : I - 1, K = this.__iteratees__, J = K.length, ae = 0, we = $t(F, this.__takeCount__);
        if (!c || !h && w == F && we == F)
          return of(n, this.__actions__);
        var Ce = [];
        e:
          for (; F-- && ae < we; ) {
            q += i;
            for (var je = -1, Te = n[q]; ++je < J; ) {
              var Le = K[je], We = Le.iteratee, pr = Le.type, Kt = We(Te);
              if (pr == ye)
                Te = Kt;
              else if (!Kt) {
                if (pr == ue)
                  continue e;
                break e;
              }
            }
            Ce[ae++] = Te;
          }
        return Ce;
      }
      Ve.prototype = xo(fs.prototype), Ve.prototype.constructor = Ve;
      function jn(n) {
        var i = -1, c = n == null ? 0 : n.length;
        for (this.clear(); ++i < c; ) {
          var h = n[i];
          this.set(h[0], h[1]);
        }
      }
      function Ey() {
        this.__data__ = ni ? ni(null) : {}, this.size = 0;
      }
      function _y(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function Cy(n) {
        var i = this.__data__;
        if (ni) {
          var c = i[n];
          return c === d ? r : c;
        }
        return tt.call(i, n) ? i[n] : r;
      }
      function Ty(n) {
        var i = this.__data__;
        return ni ? i[n] !== r : tt.call(i, n);
      }
      function Iy(n, i) {
        var c = this.__data__;
        return this.size += this.has(n) ? 0 : 1, c[n] = ni && i === r ? d : i, this;
      }
      jn.prototype.clear = Ey, jn.prototype.delete = _y, jn.prototype.get = Cy, jn.prototype.has = Ty, jn.prototype.set = Iy;
      function Zr(n) {
        var i = -1, c = n == null ? 0 : n.length;
        for (this.clear(); ++i < c; ) {
          var h = n[i];
          this.set(h[0], h[1]);
        }
      }
      function ky() {
        this.__data__ = [], this.size = 0;
      }
      function Ay(n) {
        var i = this.__data__, c = ps(i, n);
        if (c < 0)
          return !1;
        var h = i.length - 1;
        return c == h ? i.pop() : ss.call(i, c, 1), --this.size, !0;
      }
      function Ry(n) {
        var i = this.__data__, c = ps(i, n);
        return c < 0 ? r : i[c][1];
      }
      function Py(n) {
        return ps(this.__data__, n) > -1;
      }
      function My(n, i) {
        var c = this.__data__, h = ps(c, n);
        return h < 0 ? (++this.size, c.push([n, i])) : c[h][1] = i, this;
      }
      Zr.prototype.clear = ky, Zr.prototype.delete = Ay, Zr.prototype.get = Ry, Zr.prototype.has = Py, Zr.prototype.set = My;
      function Jr(n) {
        var i = -1, c = n == null ? 0 : n.length;
        for (this.clear(); ++i < c; ) {
          var h = n[i];
          this.set(h[0], h[1]);
        }
      }
      function Oy() {
        this.size = 0, this.__data__ = {
          hash: new jn(),
          map: new (ti || Zr)(),
          string: new jn()
        };
      }
      function Ny(n) {
        var i = Cs(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function jy(n) {
        return Cs(this, n).get(n);
      }
      function Dy(n) {
        return Cs(this, n).has(n);
      }
      function Ly(n, i) {
        var c = Cs(this, n), h = c.size;
        return c.set(n, i), this.size += c.size == h ? 0 : 1, this;
      }
      Jr.prototype.clear = Oy, Jr.prototype.delete = Ny, Jr.prototype.get = jy, Jr.prototype.has = Dy, Jr.prototype.set = Ly;
      function Dn(n) {
        var i = -1, c = n == null ? 0 : n.length;
        for (this.__data__ = new Jr(); ++i < c; )
          this.add(n[i]);
      }
      function Fy(n) {
        return this.__data__.set(n, d), this;
      }
      function $y(n) {
        return this.__data__.has(n);
      }
      Dn.prototype.add = Dn.prototype.push = Fy, Dn.prototype.has = $y;
      function Rr(n) {
        var i = this.__data__ = new Zr(n);
        this.size = i.size;
      }
      function Vy() {
        this.__data__ = new Zr(), this.size = 0;
      }
      function zy(n) {
        var i = this.__data__, c = i.delete(n);
        return this.size = i.size, c;
      }
      function Uy(n) {
        return this.__data__.get(n);
      }
      function Hy(n) {
        return this.__data__.has(n);
      }
      function Wy(n, i) {
        var c = this.__data__;
        if (c instanceof Zr) {
          var h = c.__data__;
          if (!ti || h.length < s - 1)
            return h.push([n, i]), this.size = ++c.size, this;
          c = this.__data__ = new Jr(h);
        }
        return c.set(n, i), this.size = c.size, this;
      }
      Rr.prototype.clear = Vy, Rr.prototype.delete = zy, Rr.prototype.get = Uy, Rr.prototype.has = Hy, Rr.prototype.set = Wy;
      function jd(n, i) {
        var c = Pe(n), h = !c && zn(n), w = !c && !h && wn(n), E = !c && !h && !w && To(n), I = c || h || w || E, M = I ? Ga(n.length, ey) : [], F = M.length;
        for (var q in n)
          (i || tt.call(n, q)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          w && (q == "offset" || q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          E && (q == "buffer" || q == "byteLength" || q == "byteOffset") || // Skip index properties.
          rn(q, F))) && M.push(q);
        return M;
      }
      function Dd(n) {
        var i = n.length;
        return i ? n[lc(0, i - 1)] : r;
      }
      function By(n, i) {
        return Ts(or(n), Ln(i, 0, n.length));
      }
      function Yy(n) {
        return Ts(or(n));
      }
      function ec(n, i, c) {
        (c !== r && !Pr(n[i], c) || c === r && !(i in n)) && Qr(n, i, c);
      }
      function ii(n, i, c) {
        var h = n[i];
        (!(tt.call(n, i) && Pr(h, c)) || c === r && !(i in n)) && Qr(n, i, c);
      }
      function ps(n, i) {
        for (var c = n.length; c--; )
          if (Pr(n[c][0], i))
            return c;
        return -1;
      }
      function Gy(n, i, c, h) {
        return gn(n, function(w, E, I) {
          i(h, w, c(w), I);
        }), h;
      }
      function Ld(n, i) {
        return n && $r(i, Pt(i), n);
      }
      function qy(n, i) {
        return n && $r(i, sr(i), n);
      }
      function Qr(n, i, c) {
        i == "__proto__" && as ? as(n, i, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : n[i] = c;
      }
      function tc(n, i) {
        for (var c = -1, h = i.length, w = z(h), E = n == null; ++c < h; )
          w[c] = E ? r : jc(n, i[c]);
        return w;
      }
      function Ln(n, i, c) {
        return n === n && (c !== r && (n = n <= c ? n : c), i !== r && (n = n >= i ? n : i)), n;
      }
      function Er(n, i, c, h, w, E) {
        var I, M = i & g, F = i & v, q = i & S;
        if (c && (I = w ? c(n, h, w, E) : c(n)), I !== r)
          return I;
        if (!ut(n))
          return n;
        var K = Pe(n);
        if (K) {
          if (I = D0(n), !M)
            return or(n, I);
        } else {
          var J = Vt(n), ae = J == be || J == kt;
          if (wn(n))
            return cf(n, M);
          if (J == qe || J == de || ae && !w) {
            if (I = F || ae ? {} : If(n), !M)
              return F ? C0(n, qy(I, n)) : _0(n, Ld(I, n));
          } else {
            if (!nt[J])
              return w ? n : {};
            I = L0(n, J, M);
          }
        }
        E || (E = new Rr());
        var we = E.get(n);
        if (we)
          return we;
        E.set(n, I), rp(n) ? n.forEach(function(Te) {
          I.add(Er(Te, i, c, Te, n, E));
        }) : ep(n) && n.forEach(function(Te, Le) {
          I.set(Le, Er(Te, i, c, Le, n, E));
        });
        var Ce = q ? F ? Sc : wc : F ? sr : Pt, je = K ? r : Ce(n);
        return wr(je || n, function(Te, Le) {
          je && (Le = Te, Te = n[Le]), ii(I, Le, Er(Te, i, c, Le, n, E));
        }), I;
      }
      function Xy(n) {
        var i = Pt(n);
        return function(c) {
          return Fd(c, n, i);
        };
      }
      function Fd(n, i, c) {
        var h = c.length;
        if (n == null)
          return !h;
        for (n = rt(n); h--; ) {
          var w = c[h], E = i[w], I = n[w];
          if (I === r && !(w in n) || !E(I))
            return !1;
        }
        return !0;
      }
      function $d(n, i, c) {
        if (typeof n != "function")
          throw new Sr(u);
        return fi(function() {
          n.apply(r, c);
        }, i);
      }
      function si(n, i, c, h) {
        var w = -1, E = Ki, I = !0, M = n.length, F = [], q = i.length;
        if (!M)
          return F;
        c && (i = at(i, lr(c))), h ? (E = za, I = !1) : i.length >= s && (E = Qo, I = !1, i = new Dn(i));
        e:
          for (; ++w < M; ) {
            var K = n[w], J = c == null ? K : c(K);
            if (K = h || K !== 0 ? K : 0, I && J === J) {
              for (var ae = q; ae--; )
                if (i[ae] === J)
                  continue e;
              F.push(K);
            } else E(i, J, h) || F.push(K);
          }
        return F;
      }
      var gn = pf(Fr), Vd = pf(nc, !0);
      function Ky(n, i) {
        var c = !0;
        return gn(n, function(h, w, E) {
          return c = !!i(h, w, E), c;
        }), c;
      }
      function hs(n, i, c) {
        for (var h = -1, w = n.length; ++h < w; ) {
          var E = n[h], I = i(E);
          if (I != null && (M === r ? I === I && !fr(I) : c(I, M)))
            var M = I, F = E;
        }
        return F;
      }
      function Zy(n, i, c, h) {
        var w = n.length;
        for (c = Me(c), c < 0 && (c = -c > w ? 0 : w + c), h = h === r || h > w ? w : Me(h), h < 0 && (h += w), h = c > h ? 0 : op(h); c < h; )
          n[c++] = i;
        return n;
      }
      function zd(n, i) {
        var c = [];
        return gn(n, function(h, w, E) {
          i(h, w, E) && c.push(h);
        }), c;
      }
      function Nt(n, i, c, h, w) {
        var E = -1, I = n.length;
        for (c || (c = $0), w || (w = []); ++E < I; ) {
          var M = n[E];
          i > 0 && c(M) ? i > 1 ? Nt(M, i - 1, c, h, w) : pn(w, M) : h || (w[w.length] = M);
        }
        return w;
      }
      var rc = hf(), Ud = hf(!0);
      function Fr(n, i) {
        return n && rc(n, i, Pt);
      }
      function nc(n, i) {
        return n && Ud(n, i, Pt);
      }
      function ms(n, i) {
        return fn(i, function(c) {
          return nn(n[c]);
        });
      }
      function Fn(n, i) {
        i = yn(i, n);
        for (var c = 0, h = i.length; n != null && c < h; )
          n = n[Vr(i[c++])];
        return c && c == h ? n : r;
      }
      function Hd(n, i, c) {
        var h = i(n);
        return Pe(n) ? h : pn(h, c(n));
      }
      function qt(n) {
        return n == null ? n === r ? Ae : tr : Nn && Nn in rt(n) ? O0(n) : Y0(n);
      }
      function oc(n, i) {
        return n > i;
      }
      function Jy(n, i) {
        return n != null && tt.call(n, i);
      }
      function Qy(n, i) {
        return n != null && i in rt(n);
      }
      function e0(n, i, c) {
        return n >= $t(i, c) && n < Ct(i, c);
      }
      function ic(n, i, c) {
        for (var h = c ? za : Ki, w = n[0].length, E = n.length, I = E, M = z(E), F = 1 / 0, q = []; I--; ) {
          var K = n[I];
          I && i && (K = at(K, lr(i))), F = $t(K.length, F), M[I] = !c && (i || w >= 120 && K.length >= 120) ? new Dn(I && K) : r;
        }
        K = n[0];
        var J = -1, ae = M[0];
        e:
          for (; ++J < w && q.length < F; ) {
            var we = K[J], Ce = i ? i(we) : we;
            if (we = c || we !== 0 ? we : 0, !(ae ? Qo(ae, Ce) : h(q, Ce, c))) {
              for (I = E; --I; ) {
                var je = M[I];
                if (!(je ? Qo(je, Ce) : h(n[I], Ce, c)))
                  continue e;
              }
              ae && ae.push(Ce), q.push(we);
            }
          }
        return q;
      }
      function t0(n, i, c, h) {
        return Fr(n, function(w, E, I) {
          i(h, c(w), E, I);
        }), h;
      }
      function ai(n, i, c) {
        i = yn(i, n), n = Pf(n, i);
        var h = n == null ? n : n[Vr(Cr(i))];
        return h == null ? r : ur(h, n, c);
      }
      function Wd(n) {
        return dt(n) && qt(n) == de;
      }
      function r0(n) {
        return dt(n) && qt(n) == Ee;
      }
      function n0(n) {
        return dt(n) && qt(n) == wt;
      }
      function ci(n, i, c, h, w) {
        return n === i ? !0 : n == null || i == null || !dt(n) && !dt(i) ? n !== n && i !== i : o0(n, i, c, h, ci, w);
      }
      function o0(n, i, c, h, w, E) {
        var I = Pe(n), M = Pe(i), F = I ? ce : Vt(n), q = M ? ce : Vt(i);
        F = F == de ? qe : F, q = q == de ? qe : q;
        var K = F == qe, J = q == qe, ae = F == q;
        if (ae && wn(n)) {
          if (!wn(i))
            return !1;
          I = !0, K = !1;
        }
        if (ae && !K)
          return E || (E = new Rr()), I || To(n) ? _f(n, i, c, h, w, E) : P0(n, i, F, c, h, w, E);
        if (!(c & _)) {
          var we = K && tt.call(n, "__wrapped__"), Ce = J && tt.call(i, "__wrapped__");
          if (we || Ce) {
            var je = we ? n.value() : n, Te = Ce ? i.value() : i;
            return E || (E = new Rr()), w(je, Te, c, h, E);
          }
        }
        return ae ? (E || (E = new Rr()), M0(n, i, c, h, w, E)) : !1;
      }
      function i0(n) {
        return dt(n) && Vt(n) == Je;
      }
      function sc(n, i, c, h) {
        var w = c.length, E = w, I = !h;
        if (n == null)
          return !E;
        for (n = rt(n); w--; ) {
          var M = c[w];
          if (I && M[2] ? M[1] !== n[M[0]] : !(M[0] in n))
            return !1;
        }
        for (; ++w < E; ) {
          M = c[w];
          var F = M[0], q = n[F], K = M[1];
          if (I && M[2]) {
            if (q === r && !(F in n))
              return !1;
          } else {
            var J = new Rr();
            if (h)
              var ae = h(q, K, F, n, i, J);
            if (!(ae === r ? ci(K, q, _ | T, h, J) : ae))
              return !1;
          }
        }
        return !0;
      }
      function Bd(n) {
        if (!ut(n) || z0(n))
          return !1;
        var i = nn(n) ? iy : Ge;
        return i.test(Vn(n));
      }
      function s0(n) {
        return dt(n) && qt(n) == Lt;
      }
      function a0(n) {
        return dt(n) && Vt(n) == P;
      }
      function c0(n) {
        return dt(n) && Ms(n.length) && !!ot[qt(n)];
      }
      function Yd(n) {
        return typeof n == "function" ? n : n == null ? ar : typeof n == "object" ? Pe(n) ? Xd(n[0], n[1]) : qd(n) : mp(n);
      }
      function ac(n) {
        if (!di(n))
          return dy(n);
        var i = [];
        for (var c in rt(n))
          tt.call(n, c) && c != "constructor" && i.push(c);
        return i;
      }
      function u0(n) {
        if (!ut(n))
          return B0(n);
        var i = di(n), c = [];
        for (var h in n)
          h == "constructor" && (i || !tt.call(n, h)) || c.push(h);
        return c;
      }
      function cc(n, i) {
        return n < i;
      }
      function Gd(n, i) {
        var c = -1, h = ir(n) ? z(n.length) : [];
        return gn(n, function(w, E, I) {
          h[++c] = i(w, E, I);
        }), h;
      }
      function qd(n) {
        var i = Ec(n);
        return i.length == 1 && i[0][2] ? Af(i[0][0], i[0][1]) : function(c) {
          return c === n || sc(c, n, i);
        };
      }
      function Xd(n, i) {
        return Cc(n) && kf(i) ? Af(Vr(n), i) : function(c) {
          var h = jc(c, n);
          return h === r && h === i ? Dc(c, n) : ci(i, h, _ | T);
        };
      }
      function gs(n, i, c, h, w) {
        n !== i && rc(i, function(E, I) {
          if (w || (w = new Rr()), ut(E))
            l0(n, i, I, c, gs, h, w);
          else {
            var M = h ? h(Ic(n, I), E, I + "", n, i, w) : r;
            M === r && (M = E), ec(n, I, M);
          }
        }, sr);
      }
      function l0(n, i, c, h, w, E, I) {
        var M = Ic(n, c), F = Ic(i, c), q = I.get(F);
        if (q) {
          ec(n, c, q);
          return;
        }
        var K = E ? E(M, F, c + "", n, i, I) : r, J = K === r;
        if (J) {
          var ae = Pe(F), we = !ae && wn(F), Ce = !ae && !we && To(F);
          K = F, ae || we || Ce ? Pe(M) ? K = M : mt(M) ? K = or(M) : we ? (J = !1, K = cf(F, !0)) : Ce ? (J = !1, K = uf(F, !0)) : K = [] : pi(F) || zn(F) ? (K = M, zn(M) ? K = ip(M) : (!ut(M) || nn(M)) && (K = If(F))) : J = !1;
        }
        J && (I.set(F, K), w(K, F, h, E, I), I.delete(F)), ec(n, c, K);
      }
      function Kd(n, i) {
        var c = n.length;
        if (c)
          return i += i < 0 ? c : 0, rn(i, c) ? n[i] : r;
      }
      function Zd(n, i, c) {
        i.length ? i = at(i, function(E) {
          return Pe(E) ? function(I) {
            return Fn(I, E.length === 1 ? E[0] : E);
          } : E;
        }) : i = [ar];
        var h = -1;
        i = at(i, lr(_e()));
        var w = Gd(n, function(E, I, M) {
          var F = at(i, function(q) {
            return q(E);
          });
          return { criteria: F, index: ++h, value: E };
        });
        return L1(w, function(E, I) {
          return E0(E, I, c);
        });
      }
      function d0(n, i) {
        return Jd(n, i, function(c, h) {
          return Dc(n, h);
        });
      }
      function Jd(n, i, c) {
        for (var h = -1, w = i.length, E = {}; ++h < w; ) {
          var I = i[h], M = Fn(n, I);
          c(M, I) && ui(E, yn(I, n), M);
        }
        return E;
      }
      function f0(n) {
        return function(i) {
          return Fn(i, n);
        };
      }
      function uc(n, i, c, h) {
        var w = h ? D1 : mo, E = -1, I = i.length, M = n;
        for (n === i && (i = or(i)), c && (M = at(n, lr(c))); ++E < I; )
          for (var F = 0, q = i[E], K = c ? c(q) : q; (F = w(M, K, F, h)) > -1; )
            M !== n && ss.call(M, F, 1), ss.call(n, F, 1);
        return n;
      }
      function Qd(n, i) {
        for (var c = n ? i.length : 0, h = c - 1; c--; ) {
          var w = i[c];
          if (c == h || w !== E) {
            var E = w;
            rn(w) ? ss.call(n, w, 1) : pc(n, w);
          }
        }
        return n;
      }
      function lc(n, i) {
        return n + us(Od() * (i - n + 1));
      }
      function p0(n, i, c, h) {
        for (var w = -1, E = Ct(cs((i - n) / (c || 1)), 0), I = z(E); E--; )
          I[h ? E : ++w] = n, n += c;
        return I;
      }
      function dc(n, i) {
        var c = "";
        if (!n || i < 1 || i > xe)
          return c;
        do
          i % 2 && (c += n), i = us(i / 2), i && (n += n);
        while (i);
        return c;
      }
      function De(n, i) {
        return kc(Rf(n, i, ar), n + "");
      }
      function h0(n) {
        return Dd(Io(n));
      }
      function m0(n, i) {
        var c = Io(n);
        return Ts(c, Ln(i, 0, c.length));
      }
      function ui(n, i, c, h) {
        if (!ut(n))
          return n;
        i = yn(i, n);
        for (var w = -1, E = i.length, I = E - 1, M = n; M != null && ++w < E; ) {
          var F = Vr(i[w]), q = c;
          if (F === "__proto__" || F === "constructor" || F === "prototype")
            return n;
          if (w != I) {
            var K = M[F];
            q = h ? h(K, F, M) : r, q === r && (q = ut(K) ? K : rn(i[w + 1]) ? [] : {});
          }
          ii(M, F, q), M = M[F];
        }
        return n;
      }
      var ef = ls ? function(n, i) {
        return ls.set(n, i), n;
      } : ar, g0 = as ? function(n, i) {
        return as(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Fc(i),
          writable: !0
        });
      } : ar;
      function v0(n) {
        return Ts(Io(n));
      }
      function _r(n, i, c) {
        var h = -1, w = n.length;
        i < 0 && (i = -i > w ? 0 : w + i), c = c > w ? w : c, c < 0 && (c += w), w = i > c ? 0 : c - i >>> 0, i >>>= 0;
        for (var E = z(w); ++h < w; )
          E[h] = n[h + i];
        return E;
      }
      function y0(n, i) {
        var c;
        return gn(n, function(h, w, E) {
          return c = i(h, w, E), !c;
        }), !!c;
      }
      function vs(n, i, c) {
        var h = 0, w = n == null ? h : n.length;
        if (typeof i == "number" && i === i && w <= le) {
          for (; h < w; ) {
            var E = h + w >>> 1, I = n[E];
            I !== null && !fr(I) && (c ? I <= i : I < i) ? h = E + 1 : w = E;
          }
          return w;
        }
        return fc(n, i, ar, c);
      }
      function fc(n, i, c, h) {
        var w = 0, E = n == null ? 0 : n.length;
        if (E === 0)
          return 0;
        i = c(i);
        for (var I = i !== i, M = i === null, F = fr(i), q = i === r; w < E; ) {
          var K = us((w + E) / 2), J = c(n[K]), ae = J !== r, we = J === null, Ce = J === J, je = fr(J);
          if (I)
            var Te = h || Ce;
          else q ? Te = Ce && (h || ae) : M ? Te = Ce && ae && (h || !we) : F ? Te = Ce && ae && !we && (h || !je) : we || je ? Te = !1 : Te = h ? J <= i : J < i;
          Te ? w = K + 1 : E = K;
        }
        return $t(E, ie);
      }
      function tf(n, i) {
        for (var c = -1, h = n.length, w = 0, E = []; ++c < h; ) {
          var I = n[c], M = i ? i(I) : I;
          if (!c || !Pr(M, F)) {
            var F = M;
            E[w++] = I === 0 ? 0 : I;
          }
        }
        return E;
      }
      function rf(n) {
        return typeof n == "number" ? n : fr(n) ? R : +n;
      }
      function dr(n) {
        if (typeof n == "string")
          return n;
        if (Pe(n))
          return at(n, dr) + "";
        if (fr(n))
          return Nd ? Nd.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function vn(n, i, c) {
        var h = -1, w = Ki, E = n.length, I = !0, M = [], F = M;
        if (c)
          I = !1, w = za;
        else if (E >= s) {
          var q = i ? null : A0(n);
          if (q)
            return Ji(q);
          I = !1, w = Qo, F = new Dn();
        } else
          F = i ? [] : M;
        e:
          for (; ++h < E; ) {
            var K = n[h], J = i ? i(K) : K;
            if (K = c || K !== 0 ? K : 0, I && J === J) {
              for (var ae = F.length; ae--; )
                if (F[ae] === J)
                  continue e;
              i && F.push(J), M.push(K);
            } else w(F, J, c) || (F !== M && F.push(J), M.push(K));
          }
        return M;
      }
      function pc(n, i) {
        return i = yn(i, n), n = Pf(n, i), n == null || delete n[Vr(Cr(i))];
      }
      function nf(n, i, c, h) {
        return ui(n, i, c(Fn(n, i)), h);
      }
      function ys(n, i, c, h) {
        for (var w = n.length, E = h ? w : -1; (h ? E-- : ++E < w) && i(n[E], E, n); )
          ;
        return c ? _r(n, h ? 0 : E, h ? E + 1 : w) : _r(n, h ? E + 1 : 0, h ? w : E);
      }
      function of(n, i) {
        var c = n;
        return c instanceof Ve && (c = c.value()), Ua(i, function(h, w) {
          return w.func.apply(w.thisArg, pn([h], w.args));
        }, c);
      }
      function hc(n, i, c) {
        var h = n.length;
        if (h < 2)
          return h ? vn(n[0]) : [];
        for (var w = -1, E = z(h); ++w < h; )
          for (var I = n[w], M = -1; ++M < h; )
            M != w && (E[w] = si(E[w] || I, n[M], i, c));
        return vn(Nt(E, 1), i, c);
      }
      function sf(n, i, c) {
        for (var h = -1, w = n.length, E = i.length, I = {}; ++h < w; ) {
          var M = h < E ? i[h] : r;
          c(I, n[h], M);
        }
        return I;
      }
      function mc(n) {
        return mt(n) ? n : [];
      }
      function gc(n) {
        return typeof n == "function" ? n : ar;
      }
      function yn(n, i) {
        return Pe(n) ? n : Cc(n, i) ? [n] : jf(Qe(n));
      }
      var b0 = De;
      function bn(n, i, c) {
        var h = n.length;
        return c = c === r ? h : c, !i && c >= h ? n : _r(n, i, c);
      }
      var af = sy || function(n) {
        return Ot.clearTimeout(n);
      };
      function cf(n, i) {
        if (i)
          return n.slice();
        var c = n.length, h = kd ? kd(c) : new n.constructor(c);
        return n.copy(h), h;
      }
      function vc(n) {
        var i = new n.constructor(n.byteLength);
        return new os(i).set(new os(n)), i;
      }
      function w0(n, i) {
        var c = i ? vc(n.buffer) : n.buffer;
        return new n.constructor(c, n.byteOffset, n.byteLength);
      }
      function S0(n) {
        var i = new n.constructor(n.source, Se.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function x0(n) {
        return oi ? rt(oi.call(n)) : {};
      }
      function uf(n, i) {
        var c = i ? vc(n.buffer) : n.buffer;
        return new n.constructor(c, n.byteOffset, n.length);
      }
      function lf(n, i) {
        if (n !== i) {
          var c = n !== r, h = n === null, w = n === n, E = fr(n), I = i !== r, M = i === null, F = i === i, q = fr(i);
          if (!M && !q && !E && n > i || E && I && F && !M && !q || h && I && F || !c && F || !w)
            return 1;
          if (!h && !E && !q && n < i || q && c && w && !h && !E || M && c && w || !I && w || !F)
            return -1;
        }
        return 0;
      }
      function E0(n, i, c) {
        for (var h = -1, w = n.criteria, E = i.criteria, I = w.length, M = c.length; ++h < I; ) {
          var F = lf(w[h], E[h]);
          if (F) {
            if (h >= M)
              return F;
            var q = c[h];
            return F * (q == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function df(n, i, c, h) {
        for (var w = -1, E = n.length, I = c.length, M = -1, F = i.length, q = Ct(E - I, 0), K = z(F + q), J = !h; ++M < F; )
          K[M] = i[M];
        for (; ++w < I; )
          (J || w < E) && (K[c[w]] = n[w]);
        for (; q--; )
          K[M++] = n[w++];
        return K;
      }
      function ff(n, i, c, h) {
        for (var w = -1, E = n.length, I = -1, M = c.length, F = -1, q = i.length, K = Ct(E - M, 0), J = z(K + q), ae = !h; ++w < K; )
          J[w] = n[w];
        for (var we = w; ++F < q; )
          J[we + F] = i[F];
        for (; ++I < M; )
          (ae || w < E) && (J[we + c[I]] = n[w++]);
        return J;
      }
      function or(n, i) {
        var c = -1, h = n.length;
        for (i || (i = z(h)); ++c < h; )
          i[c] = n[c];
        return i;
      }
      function $r(n, i, c, h) {
        var w = !c;
        c || (c = {});
        for (var E = -1, I = i.length; ++E < I; ) {
          var M = i[E], F = h ? h(c[M], n[M], M, c, n) : r;
          F === r && (F = n[M]), w ? Qr(c, M, F) : ii(c, M, F);
        }
        return c;
      }
      function _0(n, i) {
        return $r(n, _c(n), i);
      }
      function C0(n, i) {
        return $r(n, Cf(n), i);
      }
      function bs(n, i) {
        return function(c, h) {
          var w = Pe(c) ? R1 : Gy, E = i ? i() : {};
          return w(c, n, _e(h, 2), E);
        };
      }
      function Eo(n) {
        return De(function(i, c) {
          var h = -1, w = c.length, E = w > 1 ? c[w - 1] : r, I = w > 2 ? c[2] : r;
          for (E = n.length > 3 && typeof E == "function" ? (w--, E) : r, I && Xt(c[0], c[1], I) && (E = w < 3 ? r : E, w = 1), i = rt(i); ++h < w; ) {
            var M = c[h];
            M && n(i, M, h, E);
          }
          return i;
        });
      }
      function pf(n, i) {
        return function(c, h) {
          if (c == null)
            return c;
          if (!ir(c))
            return n(c, h);
          for (var w = c.length, E = i ? w : -1, I = rt(c); (i ? E-- : ++E < w) && h(I[E], E, I) !== !1; )
            ;
          return c;
        };
      }
      function hf(n) {
        return function(i, c, h) {
          for (var w = -1, E = rt(i), I = h(i), M = I.length; M--; ) {
            var F = I[n ? M : ++w];
            if (c(E[F], F, E) === !1)
              break;
          }
          return i;
        };
      }
      function T0(n, i, c) {
        var h = i & C, w = li(n);
        function E() {
          var I = this && this !== Ot && this instanceof E ? w : n;
          return I.apply(h ? c : this, arguments);
        }
        return E;
      }
      function mf(n) {
        return function(i) {
          i = Qe(i);
          var c = go(i) ? Ar(i) : r, h = c ? c[0] : i.charAt(0), w = c ? bn(c, 1).join("") : i.slice(1);
          return h[n]() + w;
        };
      }
      function _o(n) {
        return function(i) {
          return Ua(pp(fp(i).replace(g1, "")), n, "");
        };
      }
      function li(n) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new n();
            case 1:
              return new n(i[0]);
            case 2:
              return new n(i[0], i[1]);
            case 3:
              return new n(i[0], i[1], i[2]);
            case 4:
              return new n(i[0], i[1], i[2], i[3]);
            case 5:
              return new n(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var c = xo(n.prototype), h = n.apply(c, i);
          return ut(h) ? h : c;
        };
      }
      function I0(n, i, c) {
        var h = li(n);
        function w() {
          for (var E = arguments.length, I = z(E), M = E, F = Co(w); M--; )
            I[M] = arguments[M];
          var q = E < 3 && I[0] !== F && I[E - 1] !== F ? [] : hn(I, F);
          if (E -= q.length, E < c)
            return wf(
              n,
              i,
              ws,
              w.placeholder,
              r,
              I,
              q,
              r,
              r,
              c - E
            );
          var K = this && this !== Ot && this instanceof w ? h : n;
          return ur(K, this, I);
        }
        return w;
      }
      function gf(n) {
        return function(i, c, h) {
          var w = rt(i);
          if (!ir(i)) {
            var E = _e(c, 3);
            i = Pt(i), c = function(M) {
              return E(w[M], M, w);
            };
          }
          var I = n(i, c, h);
          return I > -1 ? w[E ? i[I] : I] : r;
        };
      }
      function vf(n) {
        return tn(function(i) {
          var c = i.length, h = c, w = xr.prototype.thru;
          for (n && i.reverse(); h--; ) {
            var E = i[h];
            if (typeof E != "function")
              throw new Sr(u);
            if (w && !I && _s(E) == "wrapper")
              var I = new xr([], !0);
          }
          for (h = I ? h : c; ++h < c; ) {
            E = i[h];
            var M = _s(E), F = M == "wrapper" ? xc(E) : r;
            F && Tc(F[0]) && F[1] == (G | O | $ | U) && !F[4].length && F[9] == 1 ? I = I[_s(F[0])].apply(I, F[3]) : I = E.length == 1 && Tc(E) ? I[M]() : I.thru(E);
          }
          return function() {
            var q = arguments, K = q[0];
            if (I && q.length == 1 && Pe(K))
              return I.plant(K).value();
            for (var J = 0, ae = c ? i[J].apply(this, q) : K; ++J < c; )
              ae = i[J].call(this, ae);
            return ae;
          };
        });
      }
      function ws(n, i, c, h, w, E, I, M, F, q) {
        var K = i & G, J = i & C, ae = i & A, we = i & (O | N), Ce = i & Y, je = ae ? r : li(n);
        function Te() {
          for (var Le = arguments.length, We = z(Le), pr = Le; pr--; )
            We[pr] = arguments[pr];
          if (we)
            var Kt = Co(Te), hr = $1(We, Kt);
          if (h && (We = df(We, h, w, we)), E && (We = ff(We, E, I, we)), Le -= hr, we && Le < q) {
            var gt = hn(We, Kt);
            return wf(
              n,
              i,
              ws,
              Te.placeholder,
              c,
              We,
              gt,
              M,
              F,
              q - Le
            );
          }
          var Mr = J ? c : this, sn = ae ? Mr[n] : n;
          return Le = We.length, M ? We = G0(We, M) : Ce && Le > 1 && We.reverse(), K && F < Le && (We.length = F), this && this !== Ot && this instanceof Te && (sn = je || li(sn)), sn.apply(Mr, We);
        }
        return Te;
      }
      function yf(n, i) {
        return function(c, h) {
          return t0(c, n, i(h), {});
        };
      }
      function Ss(n, i) {
        return function(c, h) {
          var w;
          if (c === r && h === r)
            return i;
          if (c !== r && (w = c), h !== r) {
            if (w === r)
              return h;
            typeof c == "string" || typeof h == "string" ? (c = dr(c), h = dr(h)) : (c = rf(c), h = rf(h)), w = n(c, h);
          }
          return w;
        };
      }
      function yc(n) {
        return tn(function(i) {
          return i = at(i, lr(_e())), De(function(c) {
            var h = this;
            return n(i, function(w) {
              return ur(w, h, c);
            });
          });
        });
      }
      function xs(n, i) {
        i = i === r ? " " : dr(i);
        var c = i.length;
        if (c < 2)
          return c ? dc(i, n) : i;
        var h = dc(i, cs(n / vo(i)));
        return go(i) ? bn(Ar(h), 0, n).join("") : h.slice(0, n);
      }
      function k0(n, i, c, h) {
        var w = i & C, E = li(n);
        function I() {
          for (var M = -1, F = arguments.length, q = -1, K = h.length, J = z(K + F), ae = this && this !== Ot && this instanceof I ? E : n; ++q < K; )
            J[q] = h[q];
          for (; F--; )
            J[q++] = arguments[++M];
          return ur(ae, w ? c : this, J);
        }
        return I;
      }
      function bf(n) {
        return function(i, c, h) {
          return h && typeof h != "number" && Xt(i, c, h) && (c = h = r), i = on(i), c === r ? (c = i, i = 0) : c = on(c), h = h === r ? i < c ? 1 : -1 : on(h), p0(i, c, h, n);
        };
      }
      function Es(n) {
        return function(i, c) {
          return typeof i == "string" && typeof c == "string" || (i = Tr(i), c = Tr(c)), n(i, c);
        };
      }
      function wf(n, i, c, h, w, E, I, M, F, q) {
        var K = i & O, J = K ? I : r, ae = K ? r : I, we = K ? E : r, Ce = K ? r : E;
        i |= K ? $ : V, i &= ~(K ? V : $), i & k || (i &= -4);
        var je = [
          n,
          i,
          w,
          we,
          J,
          Ce,
          ae,
          M,
          F,
          q
        ], Te = c.apply(r, je);
        return Tc(n) && Mf(Te, je), Te.placeholder = h, Of(Te, n, i);
      }
      function bc(n) {
        var i = _t[n];
        return function(c, h) {
          if (c = Tr(c), h = h == null ? 0 : $t(Me(h), 292), h && Md(c)) {
            var w = (Qe(c) + "e").split("e"), E = i(w[0] + "e" + (+w[1] + h));
            return w = (Qe(E) + "e").split("e"), +(w[0] + "e" + (+w[1] - h));
          }
          return i(c);
        };
      }
      var A0 = wo && 1 / Ji(new wo([, -0]))[1] == me ? function(n) {
        return new wo(n);
      } : zc;
      function Sf(n) {
        return function(i) {
          var c = Vt(i);
          return c == Je ? Xa(i) : c == P ? Y1(i) : F1(i, n(i));
        };
      }
      function en(n, i, c, h, w, E, I, M) {
        var F = i & A;
        if (!F && typeof n != "function")
          throw new Sr(u);
        var q = h ? h.length : 0;
        if (q || (i &= -97, h = w = r), I = I === r ? I : Ct(Me(I), 0), M = M === r ? M : Me(M), q -= w ? w.length : 0, i & V) {
          var K = h, J = w;
          h = w = r;
        }
        var ae = F ? r : xc(n), we = [
          n,
          i,
          c,
          h,
          w,
          K,
          J,
          E,
          I,
          M
        ];
        if (ae && W0(we, ae), n = we[0], i = we[1], c = we[2], h = we[3], w = we[4], M = we[9] = we[9] === r ? F ? 0 : n.length : Ct(we[9] - q, 0), !M && i & (O | N) && (i &= -25), !i || i == C)
          var Ce = T0(n, i, c);
        else i == O || i == N ? Ce = I0(n, i, M) : (i == $ || i == (C | $)) && !w.length ? Ce = k0(n, i, c, h) : Ce = ws.apply(r, we);
        var je = ae ? ef : Mf;
        return Of(je(Ce, we), n, i);
      }
      function xf(n, i, c, h) {
        return n === r || Pr(n, bo[c]) && !tt.call(h, c) ? i : n;
      }
      function Ef(n, i, c, h, w, E) {
        return ut(n) && ut(i) && (E.set(i, n), gs(n, i, r, Ef, E), E.delete(i)), n;
      }
      function R0(n) {
        return pi(n) ? r : n;
      }
      function _f(n, i, c, h, w, E) {
        var I = c & _, M = n.length, F = i.length;
        if (M != F && !(I && F > M))
          return !1;
        var q = E.get(n), K = E.get(i);
        if (q && K)
          return q == i && K == n;
        var J = -1, ae = !0, we = c & T ? new Dn() : r;
        for (E.set(n, i), E.set(i, n); ++J < M; ) {
          var Ce = n[J], je = i[J];
          if (h)
            var Te = I ? h(je, Ce, J, i, n, E) : h(Ce, je, J, n, i, E);
          if (Te !== r) {
            if (Te)
              continue;
            ae = !1;
            break;
          }
          if (we) {
            if (!Ha(i, function(Le, We) {
              if (!Qo(we, We) && (Ce === Le || w(Ce, Le, c, h, E)))
                return we.push(We);
            })) {
              ae = !1;
              break;
            }
          } else if (!(Ce === je || w(Ce, je, c, h, E))) {
            ae = !1;
            break;
          }
        }
        return E.delete(n), E.delete(i), ae;
      }
      function P0(n, i, c, h, w, E, I) {
        switch (c) {
          case pe:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Ee:
            return !(n.byteLength != i.byteLength || !E(new os(n), new os(i)));
          case Fe:
          case wt:
          case lt:
            return Pr(+n, +i);
          case St:
            return n.name == i.name && n.message == i.message;
          case Lt:
          case oe:
            return n == i + "";
          case Je:
            var M = Xa;
          case P:
            var F = h & _;
            if (M || (M = Ji), n.size != i.size && !F)
              return !1;
            var q = I.get(n);
            if (q)
              return q == i;
            h |= T, I.set(n, i);
            var K = _f(M(n), M(i), h, w, E, I);
            return I.delete(n), K;
          case se:
            if (oi)
              return oi.call(n) == oi.call(i);
        }
        return !1;
      }
      function M0(n, i, c, h, w, E) {
        var I = c & _, M = wc(n), F = M.length, q = wc(i), K = q.length;
        if (F != K && !I)
          return !1;
        for (var J = F; J--; ) {
          var ae = M[J];
          if (!(I ? ae in i : tt.call(i, ae)))
            return !1;
        }
        var we = E.get(n), Ce = E.get(i);
        if (we && Ce)
          return we == i && Ce == n;
        var je = !0;
        E.set(n, i), E.set(i, n);
        for (var Te = I; ++J < F; ) {
          ae = M[J];
          var Le = n[ae], We = i[ae];
          if (h)
            var pr = I ? h(We, Le, ae, i, n, E) : h(Le, We, ae, n, i, E);
          if (!(pr === r ? Le === We || w(Le, We, c, h, E) : pr)) {
            je = !1;
            break;
          }
          Te || (Te = ae == "constructor");
        }
        if (je && !Te) {
          var Kt = n.constructor, hr = i.constructor;
          Kt != hr && "constructor" in n && "constructor" in i && !(typeof Kt == "function" && Kt instanceof Kt && typeof hr == "function" && hr instanceof hr) && (je = !1);
        }
        return E.delete(n), E.delete(i), je;
      }
      function tn(n) {
        return kc(Rf(n, r, $f), n + "");
      }
      function wc(n) {
        return Hd(n, Pt, _c);
      }
      function Sc(n) {
        return Hd(n, sr, Cf);
      }
      var xc = ls ? function(n) {
        return ls.get(n);
      } : zc;
      function _s(n) {
        for (var i = n.name + "", c = So[i], h = tt.call(So, i) ? c.length : 0; h--; ) {
          var w = c[h], E = w.func;
          if (E == null || E == n)
            return w.name;
        }
        return i;
      }
      function Co(n) {
        var i = tt.call(x, "placeholder") ? x : n;
        return i.placeholder;
      }
      function _e() {
        var n = x.iteratee || $c;
        return n = n === $c ? Yd : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Cs(n, i) {
        var c = n.__data__;
        return V0(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
      }
      function Ec(n) {
        for (var i = Pt(n), c = i.length; c--; ) {
          var h = i[c], w = n[h];
          i[c] = [h, w, kf(w)];
        }
        return i;
      }
      function $n(n, i) {
        var c = H1(n, i);
        return Bd(c) ? c : r;
      }
      function O0(n) {
        var i = tt.call(n, Nn), c = n[Nn];
        try {
          n[Nn] = r;
          var h = !0;
        } catch {
        }
        var w = rs.call(n);
        return h && (i ? n[Nn] = c : delete n[Nn]), w;
      }
      var _c = Za ? function(n) {
        return n == null ? [] : (n = rt(n), fn(Za(n), function(i) {
          return Rd.call(n, i);
        }));
      } : Uc, Cf = Za ? function(n) {
        for (var i = []; n; )
          pn(i, _c(n)), n = is(n);
        return i;
      } : Uc, Vt = qt;
      (Ja && Vt(new Ja(new ArrayBuffer(1))) != pe || ti && Vt(new ti()) != Je || Qa && Vt(Qa.resolve()) != ht || wo && Vt(new wo()) != P || ri && Vt(new ri()) != Ye) && (Vt = function(n) {
        var i = qt(n), c = i == qe ? n.constructor : r, h = c ? Vn(c) : "";
        if (h)
          switch (h) {
            case my:
              return pe;
            case gy:
              return Je;
            case vy:
              return ht;
            case yy:
              return P;
            case by:
              return Ye;
          }
        return i;
      });
      function N0(n, i, c) {
        for (var h = -1, w = c.length; ++h < w; ) {
          var E = c[h], I = E.size;
          switch (E.type) {
            case "drop":
              n += I;
              break;
            case "dropRight":
              i -= I;
              break;
            case "take":
              i = $t(i, n + I);
              break;
            case "takeRight":
              n = Ct(n, i - I);
              break;
          }
        }
        return { start: n, end: i };
      }
      function j0(n) {
        var i = n.match(qi);
        return i ? i[1].split(b) : [];
      }
      function Tf(n, i, c) {
        i = yn(i, n);
        for (var h = -1, w = i.length, E = !1; ++h < w; ) {
          var I = Vr(i[h]);
          if (!(E = n != null && c(n, I)))
            break;
          n = n[I];
        }
        return E || ++h != w ? E : (w = n == null ? 0 : n.length, !!w && Ms(w) && rn(I, w) && (Pe(n) || zn(n)));
      }
      function D0(n) {
        var i = n.length, c = new n.constructor(i);
        return i && typeof n[0] == "string" && tt.call(n, "index") && (c.index = n.index, c.input = n.input), c;
      }
      function If(n) {
        return typeof n.constructor == "function" && !di(n) ? xo(is(n)) : {};
      }
      function L0(n, i, c) {
        var h = n.constructor;
        switch (i) {
          case Ee:
            return vc(n);
          case Fe:
          case wt:
            return new h(+n);
          case pe:
            return w0(n, c);
          case xt:
          case ct:
          case Et:
          case rr:
          case Mt:
          case cr:
          case At:
          case un:
          case ln:
            return uf(n, c);
          case Je:
            return new h();
          case lt:
          case oe:
            return new h(n);
          case Lt:
            return S0(n);
          case P:
            return new h();
          case se:
            return x0(n);
        }
      }
      function F0(n, i) {
        var c = i.length;
        if (!c)
          return n;
        var h = c - 1;
        return i[h] = (c > 1 ? "& " : "") + i[h], i = i.join(c > 2 ? ", " : " "), n.replace(Jo, `{
/* [wrapped with ` + i + `] */
`);
      }
      function $0(n) {
        return Pe(n) || zn(n) || !!(Pd && n && n[Pd]);
      }
      function rn(n, i) {
        var c = typeof n;
        return i = i ?? xe, !!i && (c == "number" || c != "symbol" && Ft.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function Xt(n, i, c) {
        if (!ut(c))
          return !1;
        var h = typeof i;
        return (h == "number" ? ir(c) && rn(i, c.length) : h == "string" && i in c) ? Pr(c[i], n) : !1;
      }
      function Cc(n, i) {
        if (Pe(n))
          return !1;
        var c = typeof n;
        return c == "number" || c == "symbol" || c == "boolean" || n == null || fr(n) ? !0 : Pn.test(n) || !fo.test(n) || i != null && n in rt(i);
      }
      function V0(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function Tc(n) {
        var i = _s(n), c = x[i];
        if (typeof c != "function" || !(i in Ve.prototype))
          return !1;
        if (n === c)
          return !0;
        var h = xc(c);
        return !!h && n === h[0];
      }
      function z0(n) {
        return !!Id && Id in n;
      }
      var U0 = es ? nn : Hc;
      function di(n) {
        var i = n && n.constructor, c = typeof i == "function" && i.prototype || bo;
        return n === c;
      }
      function kf(n) {
        return n === n && !ut(n);
      }
      function Af(n, i) {
        return function(c) {
          return c == null ? !1 : c[n] === i && (i !== r || n in rt(c));
        };
      }
      function H0(n) {
        var i = Rs(n, function(h) {
          return c.size === p && c.clear(), h;
        }), c = i.cache;
        return i;
      }
      function W0(n, i) {
        var c = n[1], h = i[1], w = c | h, E = w < (C | A | G), I = h == G && c == O || h == G && c == U && n[7].length <= i[8] || h == (G | U) && i[7].length <= i[8] && c == O;
        if (!(E || I))
          return n;
        h & C && (n[2] = i[2], w |= c & C ? 0 : k);
        var M = i[3];
        if (M) {
          var F = n[3];
          n[3] = F ? df(F, M, i[4]) : M, n[4] = F ? hn(n[3], m) : i[4];
        }
        return M = i[5], M && (F = n[5], n[5] = F ? ff(F, M, i[6]) : M, n[6] = F ? hn(n[5], m) : i[6]), M = i[7], M && (n[7] = M), h & G && (n[8] = n[8] == null ? i[8] : $t(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = w, n;
      }
      function B0(n) {
        var i = [];
        if (n != null)
          for (var c in rt(n))
            i.push(c);
        return i;
      }
      function Y0(n) {
        return rs.call(n);
      }
      function Rf(n, i, c) {
        return i = Ct(i === r ? n.length - 1 : i, 0), function() {
          for (var h = arguments, w = -1, E = Ct(h.length - i, 0), I = z(E); ++w < E; )
            I[w] = h[i + w];
          w = -1;
          for (var M = z(i + 1); ++w < i; )
            M[w] = h[w];
          return M[i] = c(I), ur(n, this, M);
        };
      }
      function Pf(n, i) {
        return i.length < 2 ? n : Fn(n, _r(i, 0, -1));
      }
      function G0(n, i) {
        for (var c = n.length, h = $t(i.length, c), w = or(n); h--; ) {
          var E = i[h];
          n[h] = rn(E, c) ? w[E] : r;
        }
        return n;
      }
      function Ic(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var Mf = Nf(ef), fi = cy || function(n, i) {
        return Ot.setTimeout(n, i);
      }, kc = Nf(g0);
      function Of(n, i, c) {
        var h = i + "";
        return kc(n, F0(h, q0(j0(h), c)));
      }
      function Nf(n) {
        var i = 0, c = 0;
        return function() {
          var h = fy(), w = Q - (h - c);
          if (c = h, w > 0) {
            if (++i >= W)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function Ts(n, i) {
        var c = -1, h = n.length, w = h - 1;
        for (i = i === r ? h : i; ++c < i; ) {
          var E = lc(c, w), I = n[E];
          n[E] = n[c], n[c] = I;
        }
        return n.length = i, n;
      }
      var jf = H0(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(He, function(c, h, w, E) {
          i.push(w ? E.replace(ne, "$1") : h || c);
        }), i;
      });
      function Vr(n) {
        if (typeof n == "string" || fr(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function Vn(n) {
        if (n != null) {
          try {
            return ts.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function q0(n, i) {
        return wr(ve, function(c) {
          var h = "_." + c[0];
          i & c[1] && !Ki(n, h) && n.push(h);
        }), n.sort();
      }
      function Df(n) {
        if (n instanceof Ve)
          return n.clone();
        var i = new xr(n.__wrapped__, n.__chain__);
        return i.__actions__ = or(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function X0(n, i, c) {
        (c ? Xt(n, i, c) : i === r) ? i = 1 : i = Ct(Me(i), 0);
        var h = n == null ? 0 : n.length;
        if (!h || i < 1)
          return [];
        for (var w = 0, E = 0, I = z(cs(h / i)); w < h; )
          I[E++] = _r(n, w, w += i);
        return I;
      }
      function K0(n) {
        for (var i = -1, c = n == null ? 0 : n.length, h = 0, w = []; ++i < c; ) {
          var E = n[i];
          E && (w[h++] = E);
        }
        return w;
      }
      function Z0() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = z(n - 1), c = arguments[0], h = n; h--; )
          i[h - 1] = arguments[h];
        return pn(Pe(c) ? or(c) : [c], Nt(i, 1));
      }
      var J0 = De(function(n, i) {
        return mt(n) ? si(n, Nt(i, 1, mt, !0)) : [];
      }), Q0 = De(function(n, i) {
        var c = Cr(i);
        return mt(c) && (c = r), mt(n) ? si(n, Nt(i, 1, mt, !0), _e(c, 2)) : [];
      }), eb = De(function(n, i) {
        var c = Cr(i);
        return mt(c) && (c = r), mt(n) ? si(n, Nt(i, 1, mt, !0), r, c) : [];
      });
      function tb(n, i, c) {
        var h = n == null ? 0 : n.length;
        return h ? (i = c || i === r ? 1 : Me(i), _r(n, i < 0 ? 0 : i, h)) : [];
      }
      function rb(n, i, c) {
        var h = n == null ? 0 : n.length;
        return h ? (i = c || i === r ? 1 : Me(i), i = h - i, _r(n, 0, i < 0 ? 0 : i)) : [];
      }
      function nb(n, i) {
        return n && n.length ? ys(n, _e(i, 3), !0, !0) : [];
      }
      function ob(n, i) {
        return n && n.length ? ys(n, _e(i, 3), !0) : [];
      }
      function ib(n, i, c, h) {
        var w = n == null ? 0 : n.length;
        return w ? (c && typeof c != "number" && Xt(n, i, c) && (c = 0, h = w), Zy(n, i, c, h)) : [];
      }
      function Lf(n, i, c) {
        var h = n == null ? 0 : n.length;
        if (!h)
          return -1;
        var w = c == null ? 0 : Me(c);
        return w < 0 && (w = Ct(h + w, 0)), Zi(n, _e(i, 3), w);
      }
      function Ff(n, i, c) {
        var h = n == null ? 0 : n.length;
        if (!h)
          return -1;
        var w = h - 1;
        return c !== r && (w = Me(c), w = c < 0 ? Ct(h + w, 0) : $t(w, h - 1)), Zi(n, _e(i, 3), w, !0);
      }
      function $f(n) {
        var i = n == null ? 0 : n.length;
        return i ? Nt(n, 1) : [];
      }
      function sb(n) {
        var i = n == null ? 0 : n.length;
        return i ? Nt(n, me) : [];
      }
      function ab(n, i) {
        var c = n == null ? 0 : n.length;
        return c ? (i = i === r ? 1 : Me(i), Nt(n, i)) : [];
      }
      function cb(n) {
        for (var i = -1, c = n == null ? 0 : n.length, h = {}; ++i < c; ) {
          var w = n[i];
          h[w[0]] = w[1];
        }
        return h;
      }
      function Vf(n) {
        return n && n.length ? n[0] : r;
      }
      function ub(n, i, c) {
        var h = n == null ? 0 : n.length;
        if (!h)
          return -1;
        var w = c == null ? 0 : Me(c);
        return w < 0 && (w = Ct(h + w, 0)), mo(n, i, w);
      }
      function lb(n) {
        var i = n == null ? 0 : n.length;
        return i ? _r(n, 0, -1) : [];
      }
      var db = De(function(n) {
        var i = at(n, mc);
        return i.length && i[0] === n[0] ? ic(i) : [];
      }), fb = De(function(n) {
        var i = Cr(n), c = at(n, mc);
        return i === Cr(c) ? i = r : c.pop(), c.length && c[0] === n[0] ? ic(c, _e(i, 2)) : [];
      }), pb = De(function(n) {
        var i = Cr(n), c = at(n, mc);
        return i = typeof i == "function" ? i : r, i && c.pop(), c.length && c[0] === n[0] ? ic(c, r, i) : [];
      });
      function hb(n, i) {
        return n == null ? "" : ly.call(n, i);
      }
      function Cr(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function mb(n, i, c) {
        var h = n == null ? 0 : n.length;
        if (!h)
          return -1;
        var w = h;
        return c !== r && (w = Me(c), w = w < 0 ? Ct(h + w, 0) : $t(w, h - 1)), i === i ? q1(n, i, w) : Zi(n, bd, w, !0);
      }
      function gb(n, i) {
        return n && n.length ? Kd(n, Me(i)) : r;
      }
      var vb = De(zf);
      function zf(n, i) {
        return n && n.length && i && i.length ? uc(n, i) : n;
      }
      function yb(n, i, c) {
        return n && n.length && i && i.length ? uc(n, i, _e(c, 2)) : n;
      }
      function bb(n, i, c) {
        return n && n.length && i && i.length ? uc(n, i, r, c) : n;
      }
      var wb = tn(function(n, i) {
        var c = n == null ? 0 : n.length, h = tc(n, i);
        return Qd(n, at(i, function(w) {
          return rn(w, c) ? +w : w;
        }).sort(lf)), h;
      });
      function Sb(n, i) {
        var c = [];
        if (!(n && n.length))
          return c;
        var h = -1, w = [], E = n.length;
        for (i = _e(i, 3); ++h < E; ) {
          var I = n[h];
          i(I, h, n) && (c.push(I), w.push(h));
        }
        return Qd(n, w), c;
      }
      function Ac(n) {
        return n == null ? n : hy.call(n);
      }
      function xb(n, i, c) {
        var h = n == null ? 0 : n.length;
        return h ? (c && typeof c != "number" && Xt(n, i, c) ? (i = 0, c = h) : (i = i == null ? 0 : Me(i), c = c === r ? h : Me(c)), _r(n, i, c)) : [];
      }
      function Eb(n, i) {
        return vs(n, i);
      }
      function _b(n, i, c) {
        return fc(n, i, _e(c, 2));
      }
      function Cb(n, i) {
        var c = n == null ? 0 : n.length;
        if (c) {
          var h = vs(n, i);
          if (h < c && Pr(n[h], i))
            return h;
        }
        return -1;
      }
      function Tb(n, i) {
        return vs(n, i, !0);
      }
      function Ib(n, i, c) {
        return fc(n, i, _e(c, 2), !0);
      }
      function kb(n, i) {
        var c = n == null ? 0 : n.length;
        if (c) {
          var h = vs(n, i, !0) - 1;
          if (Pr(n[h], i))
            return h;
        }
        return -1;
      }
      function Ab(n) {
        return n && n.length ? tf(n) : [];
      }
      function Rb(n, i) {
        return n && n.length ? tf(n, _e(i, 2)) : [];
      }
      function Pb(n) {
        var i = n == null ? 0 : n.length;
        return i ? _r(n, 1, i) : [];
      }
      function Mb(n, i, c) {
        return n && n.length ? (i = c || i === r ? 1 : Me(i), _r(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Ob(n, i, c) {
        var h = n == null ? 0 : n.length;
        return h ? (i = c || i === r ? 1 : Me(i), i = h - i, _r(n, i < 0 ? 0 : i, h)) : [];
      }
      function Nb(n, i) {
        return n && n.length ? ys(n, _e(i, 3), !1, !0) : [];
      }
      function jb(n, i) {
        return n && n.length ? ys(n, _e(i, 3)) : [];
      }
      var Db = De(function(n) {
        return vn(Nt(n, 1, mt, !0));
      }), Lb = De(function(n) {
        var i = Cr(n);
        return mt(i) && (i = r), vn(Nt(n, 1, mt, !0), _e(i, 2));
      }), Fb = De(function(n) {
        var i = Cr(n);
        return i = typeof i == "function" ? i : r, vn(Nt(n, 1, mt, !0), r, i);
      });
      function $b(n) {
        return n && n.length ? vn(n) : [];
      }
      function Vb(n, i) {
        return n && n.length ? vn(n, _e(i, 2)) : [];
      }
      function zb(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? vn(n, r, i) : [];
      }
      function Rc(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = fn(n, function(c) {
          if (mt(c))
            return i = Ct(c.length, i), !0;
        }), Ga(i, function(c) {
          return at(n, Wa(c));
        });
      }
      function Uf(n, i) {
        if (!(n && n.length))
          return [];
        var c = Rc(n);
        return i == null ? c : at(c, function(h) {
          return ur(i, r, h);
        });
      }
      var Ub = De(function(n, i) {
        return mt(n) ? si(n, i) : [];
      }), Hb = De(function(n) {
        return hc(fn(n, mt));
      }), Wb = De(function(n) {
        var i = Cr(n);
        return mt(i) && (i = r), hc(fn(n, mt), _e(i, 2));
      }), Bb = De(function(n) {
        var i = Cr(n);
        return i = typeof i == "function" ? i : r, hc(fn(n, mt), r, i);
      }), Yb = De(Rc);
      function Gb(n, i) {
        return sf(n || [], i || [], ii);
      }
      function qb(n, i) {
        return sf(n || [], i || [], ui);
      }
      var Xb = De(function(n) {
        var i = n.length, c = i > 1 ? n[i - 1] : r;
        return c = typeof c == "function" ? (n.pop(), c) : r, Uf(n, c);
      });
      function Hf(n) {
        var i = x(n);
        return i.__chain__ = !0, i;
      }
      function Kb(n, i) {
        return i(n), n;
      }
      function Is(n, i) {
        return i(n);
      }
      var Zb = tn(function(n) {
        var i = n.length, c = i ? n[0] : 0, h = this.__wrapped__, w = function(E) {
          return tc(E, n);
        };
        return i > 1 || this.__actions__.length || !(h instanceof Ve) || !rn(c) ? this.thru(w) : (h = h.slice(c, +c + (i ? 1 : 0)), h.__actions__.push({
          func: Is,
          args: [w],
          thisArg: r
        }), new xr(h, this.__chain__).thru(function(E) {
          return i && !E.length && E.push(r), E;
        }));
      });
      function Jb() {
        return Hf(this);
      }
      function Qb() {
        return new xr(this.value(), this.__chain__);
      }
      function ew() {
        this.__values__ === r && (this.__values__ = np(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function tw() {
        return this;
      }
      function rw(n) {
        for (var i, c = this; c instanceof fs; ) {
          var h = Df(c);
          h.__index__ = 0, h.__values__ = r, i ? w.__wrapped__ = h : i = h;
          var w = h;
          c = c.__wrapped__;
        }
        return w.__wrapped__ = n, i;
      }
      function nw() {
        var n = this.__wrapped__;
        if (n instanceof Ve) {
          var i = n;
          return this.__actions__.length && (i = new Ve(this)), i = i.reverse(), i.__actions__.push({
            func: Is,
            args: [Ac],
            thisArg: r
          }), new xr(i, this.__chain__);
        }
        return this.thru(Ac);
      }
      function ow() {
        return of(this.__wrapped__, this.__actions__);
      }
      var iw = bs(function(n, i, c) {
        tt.call(n, c) ? ++n[c] : Qr(n, c, 1);
      });
      function sw(n, i, c) {
        var h = Pe(n) ? vd : Ky;
        return c && Xt(n, i, c) && (i = r), h(n, _e(i, 3));
      }
      function aw(n, i) {
        var c = Pe(n) ? fn : zd;
        return c(n, _e(i, 3));
      }
      var cw = gf(Lf), uw = gf(Ff);
      function lw(n, i) {
        return Nt(ks(n, i), 1);
      }
      function dw(n, i) {
        return Nt(ks(n, i), me);
      }
      function fw(n, i, c) {
        return c = c === r ? 1 : Me(c), Nt(ks(n, i), c);
      }
      function Wf(n, i) {
        var c = Pe(n) ? wr : gn;
        return c(n, _e(i, 3));
      }
      function Bf(n, i) {
        var c = Pe(n) ? P1 : Vd;
        return c(n, _e(i, 3));
      }
      var pw = bs(function(n, i, c) {
        tt.call(n, c) ? n[c].push(i) : Qr(n, c, [i]);
      });
      function hw(n, i, c, h) {
        n = ir(n) ? n : Io(n), c = c && !h ? Me(c) : 0;
        var w = n.length;
        return c < 0 && (c = Ct(w + c, 0)), Os(n) ? c <= w && n.indexOf(i, c) > -1 : !!w && mo(n, i, c) > -1;
      }
      var mw = De(function(n, i, c) {
        var h = -1, w = typeof i == "function", E = ir(n) ? z(n.length) : [];
        return gn(n, function(I) {
          E[++h] = w ? ur(i, I, c) : ai(I, i, c);
        }), E;
      }), gw = bs(function(n, i, c) {
        Qr(n, c, i);
      });
      function ks(n, i) {
        var c = Pe(n) ? at : Gd;
        return c(n, _e(i, 3));
      }
      function vw(n, i, c, h) {
        return n == null ? [] : (Pe(i) || (i = i == null ? [] : [i]), c = h ? r : c, Pe(c) || (c = c == null ? [] : [c]), Zd(n, i, c));
      }
      var yw = bs(function(n, i, c) {
        n[c ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function bw(n, i, c) {
        var h = Pe(n) ? Ua : Sd, w = arguments.length < 3;
        return h(n, _e(i, 4), c, w, gn);
      }
      function ww(n, i, c) {
        var h = Pe(n) ? M1 : Sd, w = arguments.length < 3;
        return h(n, _e(i, 4), c, w, Vd);
      }
      function Sw(n, i) {
        var c = Pe(n) ? fn : zd;
        return c(n, Ps(_e(i, 3)));
      }
      function xw(n) {
        var i = Pe(n) ? Dd : h0;
        return i(n);
      }
      function Ew(n, i, c) {
        (c ? Xt(n, i, c) : i === r) ? i = 1 : i = Me(i);
        var h = Pe(n) ? By : m0;
        return h(n, i);
      }
      function _w(n) {
        var i = Pe(n) ? Yy : v0;
        return i(n);
      }
      function Cw(n) {
        if (n == null)
          return 0;
        if (ir(n))
          return Os(n) ? vo(n) : n.length;
        var i = Vt(n);
        return i == Je || i == P ? n.size : ac(n).length;
      }
      function Tw(n, i, c) {
        var h = Pe(n) ? Ha : y0;
        return c && Xt(n, i, c) && (i = r), h(n, _e(i, 3));
      }
      var Iw = De(function(n, i) {
        if (n == null)
          return [];
        var c = i.length;
        return c > 1 && Xt(n, i[0], i[1]) ? i = [] : c > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]), Zd(n, Nt(i, 1), []);
      }), As = ay || function() {
        return Ot.Date.now();
      };
      function kw(n, i) {
        if (typeof i != "function")
          throw new Sr(u);
        return n = Me(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function Yf(n, i, c) {
        return i = c ? r : i, i = n && i == null ? n.length : i, en(n, G, r, r, r, r, i);
      }
      function Gf(n, i) {
        var c;
        if (typeof i != "function")
          throw new Sr(u);
        return n = Me(n), function() {
          return --n > 0 && (c = i.apply(this, arguments)), n <= 1 && (i = r), c;
        };
      }
      var Pc = De(function(n, i, c) {
        var h = C;
        if (c.length) {
          var w = hn(c, Co(Pc));
          h |= $;
        }
        return en(n, h, i, c, w);
      }), qf = De(function(n, i, c) {
        var h = C | A;
        if (c.length) {
          var w = hn(c, Co(qf));
          h |= $;
        }
        return en(i, h, n, c, w);
      });
      function Xf(n, i, c) {
        i = c ? r : i;
        var h = en(n, O, r, r, r, r, r, i);
        return h.placeholder = Xf.placeholder, h;
      }
      function Kf(n, i, c) {
        i = c ? r : i;
        var h = en(n, N, r, r, r, r, r, i);
        return h.placeholder = Kf.placeholder, h;
      }
      function Zf(n, i, c) {
        var h, w, E, I, M, F, q = 0, K = !1, J = !1, ae = !0;
        if (typeof n != "function")
          throw new Sr(u);
        i = Tr(i) || 0, ut(c) && (K = !!c.leading, J = "maxWait" in c, E = J ? Ct(Tr(c.maxWait) || 0, i) : E, ae = "trailing" in c ? !!c.trailing : ae);
        function we(gt) {
          var Mr = h, sn = w;
          return h = w = r, q = gt, I = n.apply(sn, Mr), I;
        }
        function Ce(gt) {
          return q = gt, M = fi(Le, i), K ? we(gt) : I;
        }
        function je(gt) {
          var Mr = gt - F, sn = gt - q, gp = i - Mr;
          return J ? $t(gp, E - sn) : gp;
        }
        function Te(gt) {
          var Mr = gt - F, sn = gt - q;
          return F === r || Mr >= i || Mr < 0 || J && sn >= E;
        }
        function Le() {
          var gt = As();
          if (Te(gt))
            return We(gt);
          M = fi(Le, je(gt));
        }
        function We(gt) {
          return M = r, ae && h ? we(gt) : (h = w = r, I);
        }
        function pr() {
          M !== r && af(M), q = 0, h = F = w = M = r;
        }
        function Kt() {
          return M === r ? I : We(As());
        }
        function hr() {
          var gt = As(), Mr = Te(gt);
          if (h = arguments, w = this, F = gt, Mr) {
            if (M === r)
              return Ce(F);
            if (J)
              return af(M), M = fi(Le, i), we(F);
          }
          return M === r && (M = fi(Le, i)), I;
        }
        return hr.cancel = pr, hr.flush = Kt, hr;
      }
      var Aw = De(function(n, i) {
        return $d(n, 1, i);
      }), Rw = De(function(n, i, c) {
        return $d(n, Tr(i) || 0, c);
      });
      function Pw(n) {
        return en(n, Y);
      }
      function Rs(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new Sr(u);
        var c = function() {
          var h = arguments, w = i ? i.apply(this, h) : h[0], E = c.cache;
          if (E.has(w))
            return E.get(w);
          var I = n.apply(this, h);
          return c.cache = E.set(w, I) || E, I;
        };
        return c.cache = new (Rs.Cache || Jr)(), c;
      }
      Rs.Cache = Jr;
      function Ps(n) {
        if (typeof n != "function")
          throw new Sr(u);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, i[0]);
            case 2:
              return !n.call(this, i[0], i[1]);
            case 3:
              return !n.call(this, i[0], i[1], i[2]);
          }
          return !n.apply(this, i);
        };
      }
      function Mw(n) {
        return Gf(2, n);
      }
      var Ow = b0(function(n, i) {
        i = i.length == 1 && Pe(i[0]) ? at(i[0], lr(_e())) : at(Nt(i, 1), lr(_e()));
        var c = i.length;
        return De(function(h) {
          for (var w = -1, E = $t(h.length, c); ++w < E; )
            h[w] = i[w].call(this, h[w]);
          return ur(n, this, h);
        });
      }), Mc = De(function(n, i) {
        var c = hn(i, Co(Mc));
        return en(n, $, r, i, c);
      }), Jf = De(function(n, i) {
        var c = hn(i, Co(Jf));
        return en(n, V, r, i, c);
      }), Nw = tn(function(n, i) {
        return en(n, U, r, r, r, i);
      });
      function jw(n, i) {
        if (typeof n != "function")
          throw new Sr(u);
        return i = i === r ? i : Me(i), De(n, i);
      }
      function Dw(n, i) {
        if (typeof n != "function")
          throw new Sr(u);
        return i = i == null ? 0 : Ct(Me(i), 0), De(function(c) {
          var h = c[i], w = bn(c, 0, i);
          return h && pn(w, h), ur(n, this, w);
        });
      }
      function Lw(n, i, c) {
        var h = !0, w = !0;
        if (typeof n != "function")
          throw new Sr(u);
        return ut(c) && (h = "leading" in c ? !!c.leading : h, w = "trailing" in c ? !!c.trailing : w), Zf(n, i, {
          leading: h,
          maxWait: i,
          trailing: w
        });
      }
      function Fw(n) {
        return Yf(n, 1);
      }
      function $w(n, i) {
        return Mc(gc(i), n);
      }
      function Vw() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return Pe(n) ? n : [n];
      }
      function zw(n) {
        return Er(n, S);
      }
      function Uw(n, i) {
        return i = typeof i == "function" ? i : r, Er(n, S, i);
      }
      function Hw(n) {
        return Er(n, g | S);
      }
      function Ww(n, i) {
        return i = typeof i == "function" ? i : r, Er(n, g | S, i);
      }
      function Bw(n, i) {
        return i == null || Fd(n, i, Pt(i));
      }
      function Pr(n, i) {
        return n === i || n !== n && i !== i;
      }
      var Yw = Es(oc), Gw = Es(function(n, i) {
        return n >= i;
      }), zn = Wd(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Wd : function(n) {
        return dt(n) && tt.call(n, "callee") && !Rd.call(n, "callee");
      }, Pe = z.isArray, qw = dd ? lr(dd) : r0;
      function ir(n) {
        return n != null && Ms(n.length) && !nn(n);
      }
      function mt(n) {
        return dt(n) && ir(n);
      }
      function Xw(n) {
        return n === !0 || n === !1 || dt(n) && qt(n) == Fe;
      }
      var wn = uy || Hc, Kw = fd ? lr(fd) : n0;
      function Zw(n) {
        return dt(n) && n.nodeType === 1 && !pi(n);
      }
      function Jw(n) {
        if (n == null)
          return !0;
        if (ir(n) && (Pe(n) || typeof n == "string" || typeof n.splice == "function" || wn(n) || To(n) || zn(n)))
          return !n.length;
        var i = Vt(n);
        if (i == Je || i == P)
          return !n.size;
        if (di(n))
          return !ac(n).length;
        for (var c in n)
          if (tt.call(n, c))
            return !1;
        return !0;
      }
      function Qw(n, i) {
        return ci(n, i);
      }
      function eS(n, i, c) {
        c = typeof c == "function" ? c : r;
        var h = c ? c(n, i) : r;
        return h === r ? ci(n, i, r, c) : !!h;
      }
      function Oc(n) {
        if (!dt(n))
          return !1;
        var i = qt(n);
        return i == St || i == er || typeof n.message == "string" && typeof n.name == "string" && !pi(n);
      }
      function tS(n) {
        return typeof n == "number" && Md(n);
      }
      function nn(n) {
        if (!ut(n))
          return !1;
        var i = qt(n);
        return i == be || i == kt || i == et || i == yr;
      }
      function Qf(n) {
        return typeof n == "number" && n == Me(n);
      }
      function Ms(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= xe;
      }
      function ut(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function dt(n) {
        return n != null && typeof n == "object";
      }
      var ep = pd ? lr(pd) : i0;
      function rS(n, i) {
        return n === i || sc(n, i, Ec(i));
      }
      function nS(n, i, c) {
        return c = typeof c == "function" ? c : r, sc(n, i, Ec(i), c);
      }
      function oS(n) {
        return tp(n) && n != +n;
      }
      function iS(n) {
        if (U0(n))
          throw new Re(a);
        return Bd(n);
      }
      function sS(n) {
        return n === null;
      }
      function aS(n) {
        return n == null;
      }
      function tp(n) {
        return typeof n == "number" || dt(n) && qt(n) == lt;
      }
      function pi(n) {
        if (!dt(n) || qt(n) != qe)
          return !1;
        var i = is(n);
        if (i === null)
          return !0;
        var c = tt.call(i, "constructor") && i.constructor;
        return typeof c == "function" && c instanceof c && ts.call(c) == ny;
      }
      var Nc = hd ? lr(hd) : s0;
      function cS(n) {
        return Qf(n) && n >= -9007199254740991 && n <= xe;
      }
      var rp = md ? lr(md) : a0;
      function Os(n) {
        return typeof n == "string" || !Pe(n) && dt(n) && qt(n) == oe;
      }
      function fr(n) {
        return typeof n == "symbol" || dt(n) && qt(n) == se;
      }
      var To = gd ? lr(gd) : c0;
      function uS(n) {
        return n === r;
      }
      function lS(n) {
        return dt(n) && Vt(n) == Ye;
      }
      function dS(n) {
        return dt(n) && qt(n) == Ue;
      }
      var fS = Es(cc), pS = Es(function(n, i) {
        return n <= i;
      });
      function np(n) {
        if (!n)
          return [];
        if (ir(n))
          return Os(n) ? Ar(n) : or(n);
        if (ei && n[ei])
          return B1(n[ei]());
        var i = Vt(n), c = i == Je ? Xa : i == P ? Ji : Io;
        return c(n);
      }
      function on(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Tr(n), n === me || n === -1 / 0) {
          var i = n < 0 ? -1 : 1;
          return i * re;
        }
        return n === n ? n : 0;
      }
      function Me(n) {
        var i = on(n), c = i % 1;
        return i === i ? c ? i - c : i : 0;
      }
      function op(n) {
        return n ? Ln(Me(n), 0, L) : 0;
      }
      function Tr(n) {
        if (typeof n == "number")
          return n;
        if (fr(n))
          return R;
        if (ut(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = ut(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = xd(n);
        var c = Xe.test(n);
        return c || st.test(n) ? k1(n.slice(2), c ? 2 : 8) : ge.test(n) ? R : +n;
      }
      function ip(n) {
        return $r(n, sr(n));
      }
      function hS(n) {
        return n ? Ln(Me(n), -9007199254740991, xe) : n === 0 ? n : 0;
      }
      function Qe(n) {
        return n == null ? "" : dr(n);
      }
      var mS = Eo(function(n, i) {
        if (di(i) || ir(i)) {
          $r(i, Pt(i), n);
          return;
        }
        for (var c in i)
          tt.call(i, c) && ii(n, c, i[c]);
      }), sp = Eo(function(n, i) {
        $r(i, sr(i), n);
      }), Ns = Eo(function(n, i, c, h) {
        $r(i, sr(i), n, h);
      }), gS = Eo(function(n, i, c, h) {
        $r(i, Pt(i), n, h);
      }), vS = tn(tc);
      function yS(n, i) {
        var c = xo(n);
        return i == null ? c : Ld(c, i);
      }
      var bS = De(function(n, i) {
        n = rt(n);
        var c = -1, h = i.length, w = h > 2 ? i[2] : r;
        for (w && Xt(i[0], i[1], w) && (h = 1); ++c < h; )
          for (var E = i[c], I = sr(E), M = -1, F = I.length; ++M < F; ) {
            var q = I[M], K = n[q];
            (K === r || Pr(K, bo[q]) && !tt.call(n, q)) && (n[q] = E[q]);
          }
        return n;
      }), wS = De(function(n) {
        return n.push(r, Ef), ur(ap, r, n);
      });
      function SS(n, i) {
        return yd(n, _e(i, 3), Fr);
      }
      function xS(n, i) {
        return yd(n, _e(i, 3), nc);
      }
      function ES(n, i) {
        return n == null ? n : rc(n, _e(i, 3), sr);
      }
      function _S(n, i) {
        return n == null ? n : Ud(n, _e(i, 3), sr);
      }
      function CS(n, i) {
        return n && Fr(n, _e(i, 3));
      }
      function TS(n, i) {
        return n && nc(n, _e(i, 3));
      }
      function IS(n) {
        return n == null ? [] : ms(n, Pt(n));
      }
      function kS(n) {
        return n == null ? [] : ms(n, sr(n));
      }
      function jc(n, i, c) {
        var h = n == null ? r : Fn(n, i);
        return h === r ? c : h;
      }
      function AS(n, i) {
        return n != null && Tf(n, i, Jy);
      }
      function Dc(n, i) {
        return n != null && Tf(n, i, Qy);
      }
      var RS = yf(function(n, i, c) {
        i != null && typeof i.toString != "function" && (i = rs.call(i)), n[i] = c;
      }, Fc(ar)), PS = yf(function(n, i, c) {
        i != null && typeof i.toString != "function" && (i = rs.call(i)), tt.call(n, i) ? n[i].push(c) : n[i] = [c];
      }, _e), MS = De(ai);
      function Pt(n) {
        return ir(n) ? jd(n) : ac(n);
      }
      function sr(n) {
        return ir(n) ? jd(n, !0) : u0(n);
      }
      function OS(n, i) {
        var c = {};
        return i = _e(i, 3), Fr(n, function(h, w, E) {
          Qr(c, i(h, w, E), h);
        }), c;
      }
      function NS(n, i) {
        var c = {};
        return i = _e(i, 3), Fr(n, function(h, w, E) {
          Qr(c, w, i(h, w, E));
        }), c;
      }
      var jS = Eo(function(n, i, c) {
        gs(n, i, c);
      }), ap = Eo(function(n, i, c, h) {
        gs(n, i, c, h);
      }), DS = tn(function(n, i) {
        var c = {};
        if (n == null)
          return c;
        var h = !1;
        i = at(i, function(E) {
          return E = yn(E, n), h || (h = E.length > 1), E;
        }), $r(n, Sc(n), c), h && (c = Er(c, g | v | S, R0));
        for (var w = i.length; w--; )
          pc(c, i[w]);
        return c;
      });
      function LS(n, i) {
        return cp(n, Ps(_e(i)));
      }
      var FS = tn(function(n, i) {
        return n == null ? {} : d0(n, i);
      });
      function cp(n, i) {
        if (n == null)
          return {};
        var c = at(Sc(n), function(h) {
          return [h];
        });
        return i = _e(i), Jd(n, c, function(h, w) {
          return i(h, w[0]);
        });
      }
      function $S(n, i, c) {
        i = yn(i, n);
        var h = -1, w = i.length;
        for (w || (w = 1, n = r); ++h < w; ) {
          var E = n == null ? r : n[Vr(i[h])];
          E === r && (h = w, E = c), n = nn(E) ? E.call(n) : E;
        }
        return n;
      }
      function VS(n, i, c) {
        return n == null ? n : ui(n, i, c);
      }
      function zS(n, i, c, h) {
        return h = typeof h == "function" ? h : r, n == null ? n : ui(n, i, c, h);
      }
      var up = Sf(Pt), lp = Sf(sr);
      function US(n, i, c) {
        var h = Pe(n), w = h || wn(n) || To(n);
        if (i = _e(i, 4), c == null) {
          var E = n && n.constructor;
          w ? c = h ? new E() : [] : ut(n) ? c = nn(E) ? xo(is(n)) : {} : c = {};
        }
        return (w ? wr : Fr)(n, function(I, M, F) {
          return i(c, I, M, F);
        }), c;
      }
      function HS(n, i) {
        return n == null ? !0 : pc(n, i);
      }
      function WS(n, i, c) {
        return n == null ? n : nf(n, i, gc(c));
      }
      function BS(n, i, c, h) {
        return h = typeof h == "function" ? h : r, n == null ? n : nf(n, i, gc(c), h);
      }
      function Io(n) {
        return n == null ? [] : qa(n, Pt(n));
      }
      function YS(n) {
        return n == null ? [] : qa(n, sr(n));
      }
      function GS(n, i, c) {
        return c === r && (c = i, i = r), c !== r && (c = Tr(c), c = c === c ? c : 0), i !== r && (i = Tr(i), i = i === i ? i : 0), Ln(Tr(n), i, c);
      }
      function qS(n, i, c) {
        return i = on(i), c === r ? (c = i, i = 0) : c = on(c), n = Tr(n), e0(n, i, c);
      }
      function XS(n, i, c) {
        if (c && typeof c != "boolean" && Xt(n, i, c) && (i = c = r), c === r && (typeof i == "boolean" ? (c = i, i = r) : typeof n == "boolean" && (c = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = on(n), i === r ? (i = n, n = 0) : i = on(i)), n > i) {
          var h = n;
          n = i, i = h;
        }
        if (c || n % 1 || i % 1) {
          var w = Od();
          return $t(n + w * (i - n + I1("1e-" + ((w + "").length - 1))), i);
        }
        return lc(n, i);
      }
      var KS = _o(function(n, i, c) {
        return i = i.toLowerCase(), n + (c ? dp(i) : i);
      });
      function dp(n) {
        return Lc(Qe(n).toLowerCase());
      }
      function fp(n) {
        return n = Qe(n), n && n.replace(Kr, V1).replace(v1, "");
      }
      function ZS(n, i, c) {
        n = Qe(n), i = dr(i);
        var h = n.length;
        c = c === r ? h : Ln(Me(c), 0, h);
        var w = c;
        return c -= i.length, c >= 0 && n.slice(c, w) == i;
      }
      function JS(n) {
        return n = Qe(n), n && Xo.test(n) ? n.replace(kr, z1) : n;
      }
      function QS(n) {
        return n = Qe(n), n && Rt.test(n) ? n.replace($e, "\\$&") : n;
      }
      var ex = _o(function(n, i, c) {
        return n + (c ? "-" : "") + i.toLowerCase();
      }), tx = _o(function(n, i, c) {
        return n + (c ? " " : "") + i.toLowerCase();
      }), rx = mf("toLowerCase");
      function nx(n, i, c) {
        n = Qe(n), i = Me(i);
        var h = i ? vo(n) : 0;
        if (!i || h >= i)
          return n;
        var w = (i - h) / 2;
        return xs(us(w), c) + n + xs(cs(w), c);
      }
      function ox(n, i, c) {
        n = Qe(n), i = Me(i);
        var h = i ? vo(n) : 0;
        return i && h < i ? n + xs(i - h, c) : n;
      }
      function ix(n, i, c) {
        n = Qe(n), i = Me(i);
        var h = i ? vo(n) : 0;
        return i && h < i ? xs(i - h, c) + n : n;
      }
      function sx(n, i, c) {
        return c || i == null ? i = 0 : i && (i = +i), py(Qe(n).replace(Yt, ""), i || 0);
      }
      function ax(n, i, c) {
        return (c ? Xt(n, i, c) : i === r) ? i = 1 : i = Me(i), dc(Qe(n), i);
      }
      function cx() {
        var n = arguments, i = Qe(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var ux = _o(function(n, i, c) {
        return n + (c ? "_" : "") + i.toLowerCase();
      });
      function lx(n, i, c) {
        return c && typeof c != "number" && Xt(n, i, c) && (i = c = r), c = c === r ? L : c >>> 0, c ? (n = Qe(n), n && (typeof i == "string" || i != null && !Nc(i)) && (i = dr(i), !i && go(n)) ? bn(Ar(n), 0, c) : n.split(i, c)) : [];
      }
      var dx = _o(function(n, i, c) {
        return n + (c ? " " : "") + Lc(i);
      });
      function fx(n, i, c) {
        return n = Qe(n), c = c == null ? 0 : Ln(Me(c), 0, n.length), i = dr(i), n.slice(c, c + i.length) == i;
      }
      function px(n, i, c) {
        var h = x.templateSettings;
        c && Xt(n, i, c) && (i = r), n = Qe(n), i = Ns({}, i, h, xf);
        var w = Ns({}, i.imports, h.imports, xf), E = Pt(w), I = qa(w, E), M, F, q = 0, K = i.interpolate || Gt, J = "__p += '", ae = Ka(
          (i.escape || Gt).source + "|" + K.source + "|" + (K === lo ? he : Gt).source + "|" + (i.evaluate || Gt).source + "|$",
          "g"
        ), we = "//# sourceURL=" + (tt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++x1 + "]") + `
`;
        n.replace(ae, function(Te, Le, We, pr, Kt, hr) {
          return We || (We = pr), J += n.slice(q, hr).replace(po, U1), Le && (M = !0, J += `' +
__e(` + Le + `) +
'`), Kt && (F = !0, J += `';
` + Kt + `;
__p += '`), We && (J += `' +
((__t = (` + We + `)) == null ? '' : __t) +
'`), q = hr + Te.length, Te;
        }), J += `';
`;
        var Ce = tt.call(i, "variable") && i.variable;
        if (!Ce)
          J = `with (obj) {
` + J + `
}
`;
        else if (X.test(Ce))
          throw new Re(l);
        J = (F ? J.replace(Xr, "") : J).replace(Lr, "$1").replace(co, "$1;"), J = "function(" + (Ce || "obj") + `) {
` + (Ce ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (M ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var je = hp(function() {
          return Ke(E, we + "return " + J).apply(r, I);
        });
        if (je.source = J, Oc(je))
          throw je;
        return je;
      }
      function hx(n) {
        return Qe(n).toLowerCase();
      }
      function mx(n) {
        return Qe(n).toUpperCase();
      }
      function gx(n, i, c) {
        if (n = Qe(n), n && (c || i === r))
          return xd(n);
        if (!n || !(i = dr(i)))
          return n;
        var h = Ar(n), w = Ar(i), E = Ed(h, w), I = _d(h, w) + 1;
        return bn(h, E, I).join("");
      }
      function vx(n, i, c) {
        if (n = Qe(n), n && (c || i === r))
          return n.slice(0, Td(n) + 1);
        if (!n || !(i = dr(i)))
          return n;
        var h = Ar(n), w = _d(h, Ar(i)) + 1;
        return bn(h, 0, w).join("");
      }
      function yx(n, i, c) {
        if (n = Qe(n), n && (c || i === r))
          return n.replace(Yt, "");
        if (!n || !(i = dr(i)))
          return n;
        var h = Ar(n), w = Ed(h, Ar(i));
        return bn(h, w).join("");
      }
      function bx(n, i) {
        var c = H, h = Z;
        if (ut(i)) {
          var w = "separator" in i ? i.separator : w;
          c = "length" in i ? Me(i.length) : c, h = "omission" in i ? dr(i.omission) : h;
        }
        n = Qe(n);
        var E = n.length;
        if (go(n)) {
          var I = Ar(n);
          E = I.length;
        }
        if (c >= E)
          return n;
        var M = c - vo(h);
        if (M < 1)
          return h;
        var F = I ? bn(I, 0, M).join("") : n.slice(0, M);
        if (w === r)
          return F + h;
        if (I && (M += F.length - M), Nc(w)) {
          if (n.slice(M).search(w)) {
            var q, K = F;
            for (w.global || (w = Ka(w.source, Qe(Se.exec(w)) + "g")), w.lastIndex = 0; q = w.exec(K); )
              var J = q.index;
            F = F.slice(0, J === r ? M : J);
          }
        } else if (n.indexOf(dr(w), M) != M) {
          var ae = F.lastIndexOf(w);
          ae > -1 && (F = F.slice(0, ae));
        }
        return F + h;
      }
      function wx(n) {
        return n = Qe(n), n && uo.test(n) ? n.replace(dn, X1) : n;
      }
      var Sx = _o(function(n, i, c) {
        return n + (c ? " " : "") + i.toUpperCase();
      }), Lc = mf("toUpperCase");
      function pp(n, i, c) {
        return n = Qe(n), i = c ? r : i, i === r ? W1(n) ? J1(n) : j1(n) : n.match(i) || [];
      }
      var hp = De(function(n, i) {
        try {
          return ur(n, r, i);
        } catch (c) {
          return Oc(c) ? c : new Re(c);
        }
      }), xx = tn(function(n, i) {
        return wr(i, function(c) {
          c = Vr(c), Qr(n, c, Pc(n[c], n));
        }), n;
      });
      function Ex(n) {
        var i = n == null ? 0 : n.length, c = _e();
        return n = i ? at(n, function(h) {
          if (typeof h[1] != "function")
            throw new Sr(u);
          return [c(h[0]), h[1]];
        }) : [], De(function(h) {
          for (var w = -1; ++w < i; ) {
            var E = n[w];
            if (ur(E[0], this, h))
              return ur(E[1], this, h);
          }
        });
      }
      function _x(n) {
        return Xy(Er(n, g));
      }
      function Fc(n) {
        return function() {
          return n;
        };
      }
      function Cx(n, i) {
        return n == null || n !== n ? i : n;
      }
      var Tx = vf(), Ix = vf(!0);
      function ar(n) {
        return n;
      }
      function $c(n) {
        return Yd(typeof n == "function" ? n : Er(n, g));
      }
      function kx(n) {
        return qd(Er(n, g));
      }
      function Ax(n, i) {
        return Xd(n, Er(i, g));
      }
      var Rx = De(function(n, i) {
        return function(c) {
          return ai(c, n, i);
        };
      }), Px = De(function(n, i) {
        return function(c) {
          return ai(n, c, i);
        };
      });
      function Vc(n, i, c) {
        var h = Pt(i), w = ms(i, h);
        c == null && !(ut(i) && (w.length || !h.length)) && (c = i, i = n, n = this, w = ms(i, Pt(i)));
        var E = !(ut(c) && "chain" in c) || !!c.chain, I = nn(n);
        return wr(w, function(M) {
          var F = i[M];
          n[M] = F, I && (n.prototype[M] = function() {
            var q = this.__chain__;
            if (E || q) {
              var K = n(this.__wrapped__), J = K.__actions__ = or(this.__actions__);
              return J.push({ func: F, args: arguments, thisArg: n }), K.__chain__ = q, K;
            }
            return F.apply(n, pn([this.value()], arguments));
          });
        }), n;
      }
      function Mx() {
        return Ot._ === this && (Ot._ = oy), this;
      }
      function zc() {
      }
      function Ox(n) {
        return n = Me(n), De(function(i) {
          return Kd(i, n);
        });
      }
      var Nx = yc(at), jx = yc(vd), Dx = yc(Ha);
      function mp(n) {
        return Cc(n) ? Wa(Vr(n)) : f0(n);
      }
      function Lx(n) {
        return function(i) {
          return n == null ? r : Fn(n, i);
        };
      }
      var Fx = bf(), $x = bf(!0);
      function Uc() {
        return [];
      }
      function Hc() {
        return !1;
      }
      function Vx() {
        return {};
      }
      function zx() {
        return "";
      }
      function Ux() {
        return !0;
      }
      function Hx(n, i) {
        if (n = Me(n), n < 1 || n > xe)
          return [];
        var c = L, h = $t(n, L);
        i = _e(i), n -= L;
        for (var w = Ga(h, i); ++c < n; )
          i(c);
        return w;
      }
      function Wx(n) {
        return Pe(n) ? at(n, Vr) : fr(n) ? [n] : or(jf(Qe(n)));
      }
      function Bx(n) {
        var i = ++ry;
        return Qe(n) + i;
      }
      var Yx = Ss(function(n, i) {
        return n + i;
      }, 0), Gx = bc("ceil"), qx = Ss(function(n, i) {
        return n / i;
      }, 1), Xx = bc("floor");
      function Kx(n) {
        return n && n.length ? hs(n, ar, oc) : r;
      }
      function Zx(n, i) {
        return n && n.length ? hs(n, _e(i, 2), oc) : r;
      }
      function Jx(n) {
        return wd(n, ar);
      }
      function Qx(n, i) {
        return wd(n, _e(i, 2));
      }
      function eE(n) {
        return n && n.length ? hs(n, ar, cc) : r;
      }
      function tE(n, i) {
        return n && n.length ? hs(n, _e(i, 2), cc) : r;
      }
      var rE = Ss(function(n, i) {
        return n * i;
      }, 1), nE = bc("round"), oE = Ss(function(n, i) {
        return n - i;
      }, 0);
      function iE(n) {
        return n && n.length ? Ya(n, ar) : 0;
      }
      function sE(n, i) {
        return n && n.length ? Ya(n, _e(i, 2)) : 0;
      }
      return x.after = kw, x.ary = Yf, x.assign = mS, x.assignIn = sp, x.assignInWith = Ns, x.assignWith = gS, x.at = vS, x.before = Gf, x.bind = Pc, x.bindAll = xx, x.bindKey = qf, x.castArray = Vw, x.chain = Hf, x.chunk = X0, x.compact = K0, x.concat = Z0, x.cond = Ex, x.conforms = _x, x.constant = Fc, x.countBy = iw, x.create = yS, x.curry = Xf, x.curryRight = Kf, x.debounce = Zf, x.defaults = bS, x.defaultsDeep = wS, x.defer = Aw, x.delay = Rw, x.difference = J0, x.differenceBy = Q0, x.differenceWith = eb, x.drop = tb, x.dropRight = rb, x.dropRightWhile = nb, x.dropWhile = ob, x.fill = ib, x.filter = aw, x.flatMap = lw, x.flatMapDeep = dw, x.flatMapDepth = fw, x.flatten = $f, x.flattenDeep = sb, x.flattenDepth = ab, x.flip = Pw, x.flow = Tx, x.flowRight = Ix, x.fromPairs = cb, x.functions = IS, x.functionsIn = kS, x.groupBy = pw, x.initial = lb, x.intersection = db, x.intersectionBy = fb, x.intersectionWith = pb, x.invert = RS, x.invertBy = PS, x.invokeMap = mw, x.iteratee = $c, x.keyBy = gw, x.keys = Pt, x.keysIn = sr, x.map = ks, x.mapKeys = OS, x.mapValues = NS, x.matches = kx, x.matchesProperty = Ax, x.memoize = Rs, x.merge = jS, x.mergeWith = ap, x.method = Rx, x.methodOf = Px, x.mixin = Vc, x.negate = Ps, x.nthArg = Ox, x.omit = DS, x.omitBy = LS, x.once = Mw, x.orderBy = vw, x.over = Nx, x.overArgs = Ow, x.overEvery = jx, x.overSome = Dx, x.partial = Mc, x.partialRight = Jf, x.partition = yw, x.pick = FS, x.pickBy = cp, x.property = mp, x.propertyOf = Lx, x.pull = vb, x.pullAll = zf, x.pullAllBy = yb, x.pullAllWith = bb, x.pullAt = wb, x.range = Fx, x.rangeRight = $x, x.rearg = Nw, x.reject = Sw, x.remove = Sb, x.rest = jw, x.reverse = Ac, x.sampleSize = Ew, x.set = VS, x.setWith = zS, x.shuffle = _w, x.slice = xb, x.sortBy = Iw, x.sortedUniq = Ab, x.sortedUniqBy = Rb, x.split = lx, x.spread = Dw, x.tail = Pb, x.take = Mb, x.takeRight = Ob, x.takeRightWhile = Nb, x.takeWhile = jb, x.tap = Kb, x.throttle = Lw, x.thru = Is, x.toArray = np, x.toPairs = up, x.toPairsIn = lp, x.toPath = Wx, x.toPlainObject = ip, x.transform = US, x.unary = Fw, x.union = Db, x.unionBy = Lb, x.unionWith = Fb, x.uniq = $b, x.uniqBy = Vb, x.uniqWith = zb, x.unset = HS, x.unzip = Rc, x.unzipWith = Uf, x.update = WS, x.updateWith = BS, x.values = Io, x.valuesIn = YS, x.without = Ub, x.words = pp, x.wrap = $w, x.xor = Hb, x.xorBy = Wb, x.xorWith = Bb, x.zip = Yb, x.zipObject = Gb, x.zipObjectDeep = qb, x.zipWith = Xb, x.entries = up, x.entriesIn = lp, x.extend = sp, x.extendWith = Ns, Vc(x, x), x.add = Yx, x.attempt = hp, x.camelCase = KS, x.capitalize = dp, x.ceil = Gx, x.clamp = GS, x.clone = zw, x.cloneDeep = Hw, x.cloneDeepWith = Ww, x.cloneWith = Uw, x.conformsTo = Bw, x.deburr = fp, x.defaultTo = Cx, x.divide = qx, x.endsWith = ZS, x.eq = Pr, x.escape = JS, x.escapeRegExp = QS, x.every = sw, x.find = cw, x.findIndex = Lf, x.findKey = SS, x.findLast = uw, x.findLastIndex = Ff, x.findLastKey = xS, x.floor = Xx, x.forEach = Wf, x.forEachRight = Bf, x.forIn = ES, x.forInRight = _S, x.forOwn = CS, x.forOwnRight = TS, x.get = jc, x.gt = Yw, x.gte = Gw, x.has = AS, x.hasIn = Dc, x.head = Vf, x.identity = ar, x.includes = hw, x.indexOf = ub, x.inRange = qS, x.invoke = MS, x.isArguments = zn, x.isArray = Pe, x.isArrayBuffer = qw, x.isArrayLike = ir, x.isArrayLikeObject = mt, x.isBoolean = Xw, x.isBuffer = wn, x.isDate = Kw, x.isElement = Zw, x.isEmpty = Jw, x.isEqual = Qw, x.isEqualWith = eS, x.isError = Oc, x.isFinite = tS, x.isFunction = nn, x.isInteger = Qf, x.isLength = Ms, x.isMap = ep, x.isMatch = rS, x.isMatchWith = nS, x.isNaN = oS, x.isNative = iS, x.isNil = aS, x.isNull = sS, x.isNumber = tp, x.isObject = ut, x.isObjectLike = dt, x.isPlainObject = pi, x.isRegExp = Nc, x.isSafeInteger = cS, x.isSet = rp, x.isString = Os, x.isSymbol = fr, x.isTypedArray = To, x.isUndefined = uS, x.isWeakMap = lS, x.isWeakSet = dS, x.join = hb, x.kebabCase = ex, x.last = Cr, x.lastIndexOf = mb, x.lowerCase = tx, x.lowerFirst = rx, x.lt = fS, x.lte = pS, x.max = Kx, x.maxBy = Zx, x.mean = Jx, x.meanBy = Qx, x.min = eE, x.minBy = tE, x.stubArray = Uc, x.stubFalse = Hc, x.stubObject = Vx, x.stubString = zx, x.stubTrue = Ux, x.multiply = rE, x.nth = gb, x.noConflict = Mx, x.noop = zc, x.now = As, x.pad = nx, x.padEnd = ox, x.padStart = ix, x.parseInt = sx, x.random = XS, x.reduce = bw, x.reduceRight = ww, x.repeat = ax, x.replace = cx, x.result = $S, x.round = nE, x.runInContext = D, x.sample = xw, x.size = Cw, x.snakeCase = ux, x.some = Tw, x.sortedIndex = Eb, x.sortedIndexBy = _b, x.sortedIndexOf = Cb, x.sortedLastIndex = Tb, x.sortedLastIndexBy = Ib, x.sortedLastIndexOf = kb, x.startCase = dx, x.startsWith = fx, x.subtract = oE, x.sum = iE, x.sumBy = sE, x.template = px, x.times = Hx, x.toFinite = on, x.toInteger = Me, x.toLength = op, x.toLower = hx, x.toNumber = Tr, x.toSafeInteger = hS, x.toString = Qe, x.toUpper = mx, x.trim = gx, x.trimEnd = vx, x.trimStart = yx, x.truncate = bx, x.unescape = wx, x.uniqueId = Bx, x.upperCase = Sx, x.upperFirst = Lc, x.each = Wf, x.eachRight = Bf, x.first = Vf, Vc(x, function() {
        var n = {};
        return Fr(x, function(i, c) {
          tt.call(x.prototype, c) || (n[c] = i);
        }), n;
      }(), { chain: !1 }), x.VERSION = o, wr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        x[n].placeholder = x;
      }), wr(["drop", "take"], function(n, i) {
        Ve.prototype[n] = function(c) {
          c = c === r ? 1 : Ct(Me(c), 0);
          var h = this.__filtered__ && !i ? new Ve(this) : this.clone();
          return h.__filtered__ ? h.__takeCount__ = $t(c, h.__takeCount__) : h.__views__.push({
            size: $t(c, L),
            type: n + (h.__dir__ < 0 ? "Right" : "")
          }), h;
        }, Ve.prototype[n + "Right"] = function(c) {
          return this.reverse()[n](c).reverse();
        };
      }), wr(["filter", "map", "takeWhile"], function(n, i) {
        var c = i + 1, h = c == ue || c == ee;
        Ve.prototype[n] = function(w) {
          var E = this.clone();
          return E.__iteratees__.push({
            iteratee: _e(w, 3),
            type: c
          }), E.__filtered__ = E.__filtered__ || h, E;
        };
      }), wr(["head", "last"], function(n, i) {
        var c = "take" + (i ? "Right" : "");
        Ve.prototype[n] = function() {
          return this[c](1).value()[0];
        };
      }), wr(["initial", "tail"], function(n, i) {
        var c = "drop" + (i ? "" : "Right");
        Ve.prototype[n] = function() {
          return this.__filtered__ ? new Ve(this) : this[c](1);
        };
      }), Ve.prototype.compact = function() {
        return this.filter(ar);
      }, Ve.prototype.find = function(n) {
        return this.filter(n).head();
      }, Ve.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Ve.prototype.invokeMap = De(function(n, i) {
        return typeof n == "function" ? new Ve(this) : this.map(function(c) {
          return ai(c, n, i);
        });
      }), Ve.prototype.reject = function(n) {
        return this.filter(Ps(_e(n)));
      }, Ve.prototype.slice = function(n, i) {
        n = Me(n);
        var c = this;
        return c.__filtered__ && (n > 0 || i < 0) ? new Ve(c) : (n < 0 ? c = c.takeRight(-n) : n && (c = c.drop(n)), i !== r && (i = Me(i), c = i < 0 ? c.dropRight(-i) : c.take(i - n)), c);
      }, Ve.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Ve.prototype.toArray = function() {
        return this.take(L);
      }, Fr(Ve.prototype, function(n, i) {
        var c = /^(?:filter|find|map|reject)|While$/.test(i), h = /^(?:head|last)$/.test(i), w = x[h ? "take" + (i == "last" ? "Right" : "") : i], E = h || /^find/.test(i);
        w && (x.prototype[i] = function() {
          var I = this.__wrapped__, M = h ? [1] : arguments, F = I instanceof Ve, q = M[0], K = F || Pe(I), J = function(Le) {
            var We = w.apply(x, pn([Le], M));
            return h && ae ? We[0] : We;
          };
          K && c && typeof q == "function" && q.length != 1 && (F = K = !1);
          var ae = this.__chain__, we = !!this.__actions__.length, Ce = E && !ae, je = F && !we;
          if (!E && K) {
            I = je ? I : new Ve(this);
            var Te = n.apply(I, M);
            return Te.__actions__.push({ func: Is, args: [J], thisArg: r }), new xr(Te, ae);
          }
          return Ce && je ? n.apply(this, M) : (Te = this.thru(J), Ce ? h ? Te.value()[0] : Te.value() : Te);
        });
      }), wr(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Qi[n], c = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(n);
        x.prototype[n] = function() {
          var w = arguments;
          if (h && !this.__chain__) {
            var E = this.value();
            return i.apply(Pe(E) ? E : [], w);
          }
          return this[c](function(I) {
            return i.apply(Pe(I) ? I : [], w);
          });
        };
      }), Fr(Ve.prototype, function(n, i) {
        var c = x[i];
        if (c) {
          var h = c.name + "";
          tt.call(So, h) || (So[h] = []), So[h].push({ name: i, func: c });
        }
      }), So[ws(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Ve.prototype.clone = wy, Ve.prototype.reverse = Sy, Ve.prototype.value = xy, x.prototype.at = Zb, x.prototype.chain = Jb, x.prototype.commit = Qb, x.prototype.next = ew, x.prototype.plant = rw, x.prototype.reverse = nw, x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = ow, x.prototype.first = x.prototype.head, ei && (x.prototype[ei] = tw), x;
    }, yo = Q1();
    On ? ((On.exports = yo)._ = yo, $a._ = yo) : Ot._ = yo;
  }).call(hi);
})(Js, Js.exports);
var Ze = Js.exports;
const Xk = () => {
  const { trackItemIds: e, trackItemsMap: t, fps: r, trackItemDetailsMap: o } = Xn(), s = Ze.merge(t, o);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: e.map((a) => {
    const u = s[a];
    return qk[u.type](u, {
      fps: r
    });
  }) });
};
var pv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", u = 0; u < arguments.length; u++) {
        var l = arguments[u];
        l && (a = s(a, o(l)));
      }
      return a;
    }
    function o(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var u = "";
      for (var l in a)
        t.call(a, l) && a[l] && (u = s(u, l));
      return u;
    }
    function s(a, u) {
      return u ? a ? a + " " + u : a + u : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(pv);
var Kk = pv.exports;
const Ei = /* @__PURE__ */ Uh(Kk), Zk = { asChild: { type: "boolean" } }, Jk = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, Qk = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Rl = ["initial", "xs", "sm", "md", "lg", "xl"];
function hv(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ti(e) {
  return typeof e == "object" && Object.keys(e).some((t) => Rl.includes(t));
}
function e5({ className: e, customProperties: t, ...r }) {
  const o = mv({ allowArbitraryValues: !0, className: e, ...r }), s = t5({ customProperties: t, ...r });
  return [o, s];
}
function mv({ allowArbitraryValues: e, value: t, className: r, propValues: o, parseValue: s = (a) => a }) {
  const a = [];
  if (t) {
    if (typeof t == "string" && o.includes(t)) return vh(r, t, s);
    if (Ti(t)) {
      const u = t;
      for (const l in u) {
        if (!hv(u, l) || !Rl.includes(l)) continue;
        const d = u[l];
        if (d !== void 0) {
          if (o.includes(d)) {
            const p = vh(r, d, s), m = l === "initial" ? p : `${l}:${p}`;
            a.push(m);
          } else if (e) {
            const p = l === "initial" ? r : `${l}:${r}`;
            a.push(p);
          }
        }
      }
      return a.join(" ");
    }
    if (e) return r;
  }
}
function vh(e, t, r) {
  const o = e ? "-" : "", s = r(t), a = s?.startsWith("-"), u = a ? "-" : "", l = a ? s?.substring(1) : s;
  return `${u}${e}${o}${l}`;
}
function t5({ customProperties: e, value: t, propValues: r, parseValue: o = (s) => s }) {
  let s = {};
  if (!(!t || typeof t == "string" && r.includes(t))) {
    if (typeof t == "string" && (s = Object.fromEntries(e.map((a) => [a, t]))), Ti(t)) {
      const a = t;
      for (const u in a) {
        if (!hv(a, u) || !Rl.includes(u)) continue;
        const l = a[u];
        if (!r.includes(l)) for (const d of e) s = { [u === "initial" ? d : `${d}-${u}`]: l, ...s };
      }
    }
    for (const a in s) {
      const u = s[a];
      u !== void 0 && (s[a] = o(u));
    }
    return s;
  }
}
function yh(...e) {
  let t = {};
  for (const r of e) r && (t = { ...t, ...r });
  return Object.keys(t).length ? t : void 0;
}
function r5(...e) {
  return Object.assign({}, ...e);
}
function n5(e, ...t) {
  let r, o;
  const s = { ...e }, a = r5(...t);
  for (const u in a) {
    let l = s[u];
    const d = a[u];
    if (d.default !== void 0 && l === void 0 && (l = d.default), d.type === "enum" && ![d.default, ...d.values].includes(l) && !Ti(l) && (l = d.default), s[u] = l, "className" in d && d.className) {
      delete s[u];
      const p = "responsive" in d;
      if (!l || Ti(l) && !p) continue;
      if (Ti(l) && (d.default !== void 0 && l.initial === void 0 && (l.initial = d.default), d.type === "enum" && ([d.default, ...d.values].includes(l.initial) || (l.initial = d.default))), d.type === "enum") {
        const m = mv({ allowArbitraryValues: !1, value: l, className: d.className, propValues: d.values, parseValue: d.parseValue });
        r = Ei(r, m);
        continue;
      }
      if (d.type === "string" || d.type === "enum | string") {
        const m = d.type === "string" ? [] : d.values, [g, v] = e5({ className: d.className, customProperties: d.customProperties, propValues: m, parseValue: d.parseValue, value: l });
        o = yh(o, v), r = Ei(r, g);
        continue;
      }
      if (d.type === "boolean" && l) {
        r = Ei(r, d.className);
        continue;
      }
    }
  }
  return s.className = Ei(r, e.className), s.style = yh(o, e.style), s;
}
const Un = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], o5 = { m: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: Un, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } }, i5 = bE, Hn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], s5 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: Hn, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: Hn, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: Hn, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: Hn, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: Hn, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: Hn, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: Hn, responsive: !0 } }, Qc = ["visible", "hidden", "clip", "scroll", "auto"], a5 = ["static", "relative", "absolute", "fixed", "sticky"], wi = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], c5 = ["0", "1"], u5 = ["0", "1"], l5 = { ...s5, ...Jk, ...Qk, position: { type: "enum", className: "rt-r-position", values: a5, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: wi, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: wi, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: wi, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: wi, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: wi, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: Qc, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: Qc, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: Qc, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: c5, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: u5, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 } }, eu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], d5 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: eu, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: eu, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: eu, responsive: !0 } }, f5 = ["div", "span"], p5 = ["none", "inline-flex", "flex"], h5 = ["row", "column", "row-reverse", "column-reverse"], m5 = ["start", "center", "end", "baseline", "stretch"], g5 = ["start", "center", "end", "between"], v5 = ["nowrap", "wrap", "wrap-reverse"], y5 = { as: { type: "enum", values: f5, default: "div" }, ...Zk, display: { type: "enum", className: "rt-r-display", values: p5, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: h5, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: m5, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: g5, parseValue: b5, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: v5, responsive: !0 }, ...d5 };
function b5(e) {
  return e === "between" ? "space-between" : e;
}
const Pl = f.forwardRef((e, t) => {
  const { className: r, asChild: o, as: s = "div", ...a } = n5(e, y5, l5, o5);
  return f.createElement(o ? i5 : s, { ...a, ref: t, className: Ei("rt-Flex", r) });
});
Pl.displayName = "Flex";
const w5 = () => {
  const e = f.useRef(null), { setPlayerRef: t, duration: r, fps: o, size: s } = Xn();
  return f.useEffect(() => {
    t(e);
  }, []), /* @__PURE__ */ y.jsx(Pl, { className: "size-full", children: /* @__PURE__ */ y.jsx(
    zk,
    {
      ref: e,
      component: Xk,
      durationInFrames: Math.round(r / 1e3 * o) || 5 * 30,
      compositionWidth: 1920,
      compositionHeight: 1080,
      style: { width: "100%", height: "100%" },
      inputProps: {},
      fps: o,
      controls: !0
    }
  ) });
}, S5 = ({ scrollLeft: e }) => {
  const t = f.useRef(null), { playerRef: r, fps: o, scale: s } = Xn(), a = ul(r ?? void 0), u = yt(a / o * 1e3, s.zoom) - e, [l, d] = f.useState(!1), [p, m] = f.useState(0), [g, v] = f.useState(u), S = () => {
    d(!1);
  }, _ = (C) => {
    d(!0);
    const A = "touches" in C ? C.touches[0].clientX : C.clientX;
    m(A), v(u);
  }, T = (C) => {
    if (l) {
      const k = ("touches" in C ? C.touches[0].clientX : C.clientX) - p, O = g + k, N = qn(O, s.zoom);
      r?.current?.seekTo(N * o / 1e3);
    }
  };
  return f.useEffect(() => {
    const C = (A) => {
      A.preventDefault();
    };
    return l ? (document.addEventListener("mousemove", T), document.addEventListener("mouseup", S), document.addEventListener("touchmove", T), document.addEventListener("touchend", S), document.addEventListener("dragstart", C)) : (document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", T), document.removeEventListener("touchend", S)), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", T), document.removeEventListener("touchend", S), document.removeEventListener("dragstart", C);
    };
  }, [l, T, S]), /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: t,
      role: "button",
      tabIndex: 0,
      onMouseDown: (C) => {
        _(C);
      },
      onTouchStart: (C) => {
        _(C);
      },
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && _(C);
      },
      style: {
        position: "absolute",
        left: 40 + cl + u,
        top: 80,
        width: 1,
        height: "calc(100% - 80px)",
        background: "#d4d4d8",
        zIndex: 10,
        cursor: "pointer"
      },
      children: /* @__PURE__ */ y.jsxs("div", { className: "relative h-full", children: [
        /* @__PURE__ */ y.jsx("div", { className: "absolute top-0  h-full w-3 -translate-x-1/2" }),
        /* @__PURE__ */ y.jsx("div", { className: "absolute top-0  h-full w-0.5 -translate-x-1/2 bg-white/50" }),
        /* @__PURE__ */ y.jsx(
          "div",
          {
            style: {
              borderRadius: "0 0 20px 20px"
            },
            className: "absolute h-3 -translate-x-1/2 px-1.5",
            children: /* @__PURE__ */ y.jsx(
              "svg",
              {
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                children: /* @__PURE__ */ y.jsx(
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
}, x5 = (e) => {
  const {
    height: t = 40,
    // Increased height to give space for the text
    longLineSize: r = 8,
    shortLineSize: o = 6,
    offsetX: s = Tu + cl,
    textOffsetY: a = 12,
    // Place the text above the lines but inside the canvas
    textFormat: u = W2,
    scrollLeft: l = 0,
    onClick: d
  } = e, { scale: p } = Xn(), m = f.useRef(null), [g, v] = f.useState(null), [S, _] = f.useState({
    width: 0,
    height: t
    // Increased height for text space
  });
  f.useEffect(() => {
    const k = m.current;
    if (k) {
      const O = k.getContext("2d");
      v(O), T(k, O, l);
    }
  }, []), f.useEffect(() => {
    g && T(m.current, g, l);
  }, [g, l, p]);
  const T = (k, O, N) => {
    if (!k || !O) return;
    const V = k.offsetParent.offsetWidth ?? k.offsetWidth, G = S.height;
    k.width = V, k.height = G, C(O, N, V, G), _({ width: V, height: G });
  }, C = (k, O, N, $) => {
    const V = p.zoom, G = p.unit, U = p.segments;
    k.clearRect(0, 0, N, $), k.save(), k.strokeStyle = "#71717a", k.fillStyle = "#71717a", k.lineWidth = 1, k.font = `${F2}px ${$2}`, k.textBaseline = "top", k.translate(0.5, 0), k.beginPath();
    const Y = G * V * ma, H = Math.floor(O / Y), W = Math.ceil((O + N) / Y) - H;
    for (let Q = 0; Q <= W; ++Q) {
      const ue = Q + H;
      if (ue < 0) continue;
      const ye = ue * Y / V, ee = (ye - O / V) * V;
      if (ee < -Y || ee >= N + Y) continue;
      const me = u(ye), re = -k.measureText(me).width / 2;
      k.fillText(me, ee + re + s, a);
    }
    for (let Q = 0; Q <= W; ++Q) {
      const ue = Q + H;
      if (ue < 0) continue;
      const ee = ue * Y - O + s;
      for (let me = 0; me < U; ++me) {
        const xe = ee + me / U * Y;
        if (xe < 0 || xe >= N) continue;
        const re = me % U ? o : r;
        re === o ? k.strokeStyle = "#a1a1aa" : k.strokeStyle = "#d4d4d8";
        const R = 32, [L, ie] = [xe, R], [le, ve] = [L, ie + re];
        k.beginPath(), k.moveTo(L, ie), k.lineTo(le, ve), k.stroke();
      }
    }
    k.restore();
  }, A = (k) => {
    const O = m.current;
    if (!O) return;
    const N = O.getBoundingClientRect(), V = k.clientX - N.left + l - Tu;
    d?.(V);
  };
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      className: "border-border border-t",
      style: {
        position: "relative",
        width: "100%",
        height: `${S.height}px`,
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ y.jsx(
        "canvas",
        {
          onClick: A,
          ref: m,
          height: S.height
        }
      )
    }
  );
}, O8 = () => /* @__PURE__ */ y.jsx(
  Pl,
  {
    flexGrow: "1",
    justify: "center",
    width: "100%",
    height: "100%",
    className: "bg-scene py-3",
    children: /* @__PURE__ */ y.jsx("div", { className: "max-w-3xl flex-1  w-full h-full flex relative", children: /* @__PURE__ */ y.jsx(w5, {}) })
  }
);
class E5 {
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
      const r = new qu(t);
      this.setActiveObject(r);
    }
    this.requestRenderAll();
  }
}
class No extends Gr {
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
    super(t), Object.assign(this, No.ownDefaults), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.text = t.text || "", this.backgroundColor = t.backgroundColor || "transparent";
  }
  static createControls() {
    return {
      controls: gv()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...No.ownDefaults
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
function Cn(e, t, r, o, s) {
  e.save(), e.translate(t, r), e.rotate(zh.degreesToRadians(90 + s.angle)), e.beginPath(), e.lineWidth = 4, e.lineCap = "round", e.strokeStyle = "#dfe2e8", e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
function gv() {
  return {
    mr: new Wr({
      x: 0.5,
      y: 0,
      actionHandler: Qs,
      cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Cn
    }),
    ml: new Wr({
      x: -0.5,
      y: 0,
      actionHandler: Qs,
      cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: Cn
    })
  };
}
const Qs = Ht.wrapWithFireEvent(
  "resizing",
  Ht.wrapWithFixedAnchor((e, t, r, o) => {
    const s = Ht.getLocalPoint(
      t,
      t.originX,
      t.originY,
      r,
      o
    );
    if (C5(t.originX) || I5(t.originX) && s.x < 0 || T5(t.originX) && s.x > 0) {
      const a = t.target, u = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), l = k5(t) ? 2 : 1, d = a.width, p = Math.ceil(
        Math.abs(s.x * l / a.scaleX) - u
      );
      if (t.corner === "ml") {
        const g = d - p;
        if (a.left + g < 0)
          return a.set("width", a.width + a.left), !0;
      }
      return a.set("width", Math.max(p, 0)), d !== a.width;
    }
    return !1;
  })
), _5 = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
}, ze = (e) => typeof e == "string" ? _5[e] : e - 0.5, C5 = (e) => ze(e) === ze("center"), T5 = (e) => ze(e) === ze("left"), I5 = (e) => ze(e) === ze("right");
function k5(e) {
  return ze(e.originX) === ze("center") && ze(e.originY) === ze("center");
}
Wt.setClass(No, "Text");
class jr extends Gr {
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
    }), Object.assign(this, jr.ownDefaults);
  }
  static createControls() {
    return {
      controls: A5()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...jr.ownDefaults
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
Wt.setClass(jr, "Transition");
const A5 = () => ({
  mr: new Wr({
    x: 0.5,
    y: 0,
    actionHandler: bh,
    cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: Cn
  }),
  ml: new Wr({
    x: -0.5,
    y: 0,
    actionHandler: bh,
    cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: Cn
  })
});
Wt.setClass(jr, "Transition");
const { wrapWithFireEvent: R5, getLocalPoint: P5 } = Ht, Vu = "center", M5 = "left", O5 = "right";
function N5(e) {
  return (t, r, o, s) => {
    const { target: a, originX: u, originY: l } = r, d = a.getRelativeCenterPoint(), p = a.translateToOriginPoint(
      d,
      u,
      l
    ), m = e(t, r, o, s);
    return a.setPositionByOrigin(p, u, l), m;
  };
}
const j5 = (e, t, r, o) => {
  const s = P5(
    t,
    t.originX,
    t.originY,
    r,
    o
  );
  if (ze(t.originX) === ze(Vu) || ze(t.originX) === ze(O5) && s.x < 0 || ze(t.originX) === ze(M5) && s.x > 0) {
    const { target: a } = t, u = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), l = D5(t) ? 2 : 1, d = a.width, p = Math.ceil(
      Math.abs(s.x * l / a.scaleX) - u
    ), m = qn(p, a.tScale);
    return m >= 1500 || m < 500 ? !1 : (a.set("width", Math.max(p, 0)), a.set("duration", m), a.setCoords(), a.canvas && a.canvas.renderAll(), d !== a.width);
  }
  return !1;
};
function D5(e) {
  return ze(e.originX) === ze(Vu) && ze(e.originY) === ze(Vu);
}
const bh = R5(
  "resizing",
  N5(j5)
);
class Pi extends Gr {
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
    super(t), this.id = t.id, this.for = t.for, Object.assign(this, Pi.ownDefaults);
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Pi.ownDefaults
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
Wt.setClass(Pi, "Placeholder");
const L5 = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 }
}, ka = "rgba(0, 216, 214, 1.0)", tu = (e, t, r) => new Gr({
  top: e,
  left: 0,
  strokeWidth: 0,
  fill: "transparent",
  selectable: !0,
  height: r,
  width: t
});
class Ii extends Xu {
  static type = "Helper";
  static defaultSettings = {
    selectable: !1,
    evented: !1
  };
  static ownDefaults = { ...Ii.defaultSettings };
  guide;
  topGuide;
  bottomGuide;
  id;
  metadata = {};
  tScale;
  kind;
  constructor(t) {
    const r = L5[t.kind], o = tu(0, t.width, r.top), s = tu(r.top, t.width, r.guideHeight), a = tu(
      r.top + r.guideHeight,
      t.width,
      r.bottom
    );
    super([o, s, a], {
      ...Ii.defaultSettings,
      ...t
    }), this.topGuide = o, this.guide = s, this.bottomGuide = a, this.id = t.id, this.metadata = t.metadata ?? {}, this.tScale = t.tScale, this.kind = t.kind;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Ii.defaultSettings
    };
  }
  updateCoords(t) {
    this.scaleToWidth(t), this.set("scaleY", 1);
  }
  setSelected(t) {
    this.guide.set("fill", t ? ka : "transparent");
  }
}
const Wi = Ii;
Wt.setClass(Wi, "Helper");
class Kn extends Gr {
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
    super(t), Object.assign(this, Kn.ownDefaults), this.id = t.id, this.accepts = t.accepts || ["audio", "video", "image", "text"], this.items = t.items || [], this.metadata = t.metadata;
  }
  static getDefaults() {
    return { ...super.getDefaults(), ...Kn.ownDefaults };
  }
  updateCoords(t) {
    this.width = t;
  }
}
Wt.setClass(Kn, "Track");
class ea extends Gr {
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
    super(t), this.itemType = "image", this.isSelected = !1, Object.assign(this, ea.ownDefaults), this.id = t.id, this.src = t.src, this.display = t.display, this.tScale = t.tScale;
  }
  static createControls() {
    return {
      controls: gv()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ea.ownDefaults
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
const Ml = ea;
Wt.setClass(Ml, "Image");
class Go extends Gr {
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
    super(Object.assign({}, Go.defaultProps, t)), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.trim = t.trim;
  }
  static createControls() {
    return { controls: F5() };
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
Wt.setClass(Go, "Video");
const F5 = () => ({
  mr: new Wr({
    x: 0.5,
    y: 0,
    render: Cn,
    actionHandler: wh,
    cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new Wr({
    x: -0.5,
    y: 0,
    render: Cn,
    actionHandler: wh,
    cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: $5, getLocalPoint: V5 } = Ht, z5 = (e, t, r, o) => {
  const s = V5(
    t,
    t.originX,
    t.originY,
    r,
    o
  );
  if (ze(t.originX) === ze("center") || ze(t.originX) === ze("right") && s.x < 0 || ze(t.originX) === ze("left") && s.x > 0) {
    const { target: a } = t;
    return a.width !== a.width;
  }
  return !1;
};
function vv(e) {
  return (t, r, o, s) => {
    const { target: a, originX: u, originY: l } = r, d = a.getRelativeCenterPoint(), p = a.translateToOriginPoint(
      d,
      u,
      l
    ), m = e(t, r, o, s);
    return a.setPositionByOrigin(p, u, l), m;
  };
}
const wh = $5(
  "resizing",
  vv(z5)
);
class En extends Gr {
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
      ...En.getDefaults(),
      ...t
    }), this.id = t.id, this.tScale = t.tScale, this.display = t.display, this.trim = t.trim, this.src = t.src;
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...En.ownDefaults
    };
  }
  static createControls() {
    return { controls: U5() };
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
      En.ownDefaults.rx
    ), t.lineWidth = 2, t.strokeStyle = ka, t.stroke(), t.restore());
  }
}
Wt.setClass(En, "Audio");
const U5 = () => ({
  mr: new Wr({
    x: 0.5,
    y: 0,
    render: Cn,
    actionHandler: Sh,
    cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  }),
  ml: new Wr({
    x: -0.5,
    y: 0,
    render: Cn,
    actionHandler: Sh,
    cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
    actionName: "resizing"
  })
}), { wrapWithFireEvent: H5, getLocalPoint: W5 } = Ht, B5 = (e, t, r, o) => {
  const s = W5(
    t,
    t.originX,
    t.originY,
    r,
    o
  );
  if (ze(t.originX) === ze("center") || ze(t.originX) === ze("right") && s.x < 0 || ze(t.originX) === ze("left") && s.x > 0) {
    const { target: a } = t, u = a.strokeWidth / (a.strokeUniform ? a.scaleX : 1), l = Y5(t) ? 2 : 1, d = a.width, p = Math.ceil(
      Math.abs(s.x * l / a.scaleX) - u
    );
    if (t.corner === "mr") {
      const m = a.trim.to, g = p - d, v = qn(g, a.tScale), S = m + v;
      if (S > a.duration) return !1;
      a.set("width", Math.max(p, 0)), a.trim.to = S;
    } else {
      if (a.left < 0) return !1;
      const m = d - p;
      if (a.left + m < 0)
        return a.set("width", a.width + a.left), !0;
      const g = p - d, v = a.trim.from, S = qn(g, a.tScale), _ = v - S;
      if (_ < 0) return !1;
      a.set("width", Math.max(p, 0)), a.trim.from = _;
    }
    return d !== a.width;
  }
  return !1;
};
function Y5(e) {
  return ze(e.originX) === ze("center") && ze(e.originY) === ze("center");
}
const Sh = H5(
  "resizing",
  vv(B5)
);
class ta extends Gr {
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
    super(t), Object.assign(this, ta.ownDefaults), this.id = t.id;
  }
  static createControls() {
    return {
      controls: G5()
    };
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ta.ownDefaults
    };
  }
  updateCoords() {
    const t = this.canvas;
    if (!t) return;
    const r = t.getObjects().find((a) => a.id === this.fromId);
    if (!r) return;
    const o = yt(this.duration, this.tScale), s = r.left + r.width - o / 2;
    this.set({
      width: o,
      left: s
    });
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const r = new Path2D(
      "M3 5.30359C3 3.93159 4.659 3.24359 5.629 4.21359L11.997 10.5826L10.583 11.9966L5 6.41359V17.5856L10.586 11.9996L10.583 11.9966L11.997 10.5826L12 10.5856L18.371 4.21459C19.341 3.24459 21 3.93159 21 5.30359V18.6956C21 20.0676 19.341 20.7556 18.371 19.7856L12 13.5L13.414 11.9996L19 17.5866V6.41359L13.414 11.9996L13.421 12.0056L12.006 13.4206L12 13.4136L5.629 19.7846C4.659 20.7546 3 20.0676 3 18.6956V5.30359Z"
    );
    t.save(), t.translate(-12, -12), t.fillStyle = "#ffffff", t.fill(r), t.restore();
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
function G5() {
  return {
    mr: new Wr({
      x: 0.5,
      y: 0,
      actionHandler: Qs,
      cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: xh
    }),
    ml: new Wr({
      x: -0.5,
      y: 0,
      actionHandler: Qs,
      cursorStyleHandler: Ht.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: xh
    })
  };
}
function xh(e, t, r, o, s) {
  e.save(), e.translate(t, r), e.rotate(zh.degreesToRadians(90 + s.angle)), e.lineWidth = 6, e.lineCap = "round", e.strokeStyle = "white", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.lineWidth = 4, e.strokeStyle = "black", e.beginPath(), e.moveTo(-6, 0), e.lineTo(6, 0), e.stroke(), e.restore();
}
class ra extends Gr {
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
    super(t), Object.assign(this, ra.ownDefaults), this.id = t.id, this.name = t.name || "item", this.durationString = "00:05", this.fill = "#27272a";
  }
  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ra.ownDefaults
    };
  }
  _render(t) {
    t.save(), super._render(t), t.beginPath(), t.rect(-this.width / 2, -this.height / 2, this.width, this.height), t.clip(), this.drawTextIdentity(t), t.restore();
  }
  drawTextIdentity(t) {
    t.font = "600 12px 'Geist variable'", t.textAlign = "left";
    const d = t.measureText(this.name).width, p = t.measureText(this.durationString).width, m = -this.height / 2 + 4, g = -this.width / 2, v = g + d + 8 * 2 + 4, S = d + 8 * 2;
    this.drawRoundedRect(
      t,
      g,
      m,
      S,
      20,
      4
    ), t.fillStyle = "#f4f4f5", t.fillText(this.name, g + 8, m + 12 + 2);
    const _ = p + 8 * 2;
    this.drawRoundedRect(
      t,
      v,
      m,
      _,
      20,
      4
    ), t.fillStyle = "#f4f4f5", t.fillText(
      this.durationString,
      v + 8,
      m + 12 + 2
    );
  }
  drawRoundedRect(t, r, o, s, a, u) {
    t.fillStyle = "rgba(0, 0, 0, 0.5)", t.roundRect ? (t.beginPath(), t.roundRect(r, o, s, a, u), t.fill()) : t.fillRect(r, o, s, a);
  }
}
function q5(e, t) {
  t.forEach((r) => {
    Object.getOwnPropertyNames(r.prototype).forEach((o) => {
      if (o !== "constructor") {
        const s = Object.getOwnPropertyDescriptor(
          r.prototype,
          o
        );
        s && Object.defineProperty(e.prototype, o, s);
      }
    });
  });
}
const Ol = (e, t) => {
  const r = {
    x: e.size.width / 2,
    y: e.size.height / 2
  }, o = {
    x: t.width / 2,
    y: t.height / 2
  }, s = r.x - o.x, a = r.y - o.y, u = Math.min(
    e.size.width / t.width,
    e.size.height / t.height
  );
  return {
    top: `${a}px`,
    left: `${s}px`,
    transform: `scale(${u})`
  };
}, X5 = (e) => new Promise((t, r) => {
  const o = new Audio();
  o.preload = "auto", o.addEventListener("loadedmetadata", () => {
    const s = o.duration * 1e3;
    t({
      duration: s
    });
  }), o.addEventListener("error", (s) => {
    r(s);
  }), o.src = e, o.crossOrigin = "anonymous", o.load();
}), K5 = (e) => new Promise((t, r) => {
  const o = new Image();
  console.warn("Consider updating CDN config for CORS issues?"), o.onload = () => {
    const s = o.width, a = o.height;
    t({ width: s, height: a });
  }, o.onerror = (s) => {
    r(s);
  }, o.crossOrigin = "anonymous", o.src = e;
}), Z5 = (e) => new Promise((t, r) => {
  const o = document.createElement("video");
  o.preload = "auto", o.addEventListener("loadedmetadata", () => {
    const s = o.duration * 1e3, a = o.videoWidth, u = o.videoHeight;
    t({
      duration: s,
      width: a,
      height: u
    });
  }), o.addEventListener("error", (s) => {
    r(s);
  }), o.src = e, o.load();
}), Hs = (e, t) => {
  const r = document.createElement("div");
  Object.keys(t).forEach((s) => {
    s !== "height" && (r.style[s] = t[s]);
  }), document.body.appendChild(r), r.textContent = e, r.style.width = `${t.width}px`, r.style.fontSize = `${t.fontSize}px`;
  const o = getComputedStyle(r).height;
  return document.body.removeChild(r), parseFloat(o);
}, Yr = (e) => Object.keys(e).reduce((t, r) => {
  const {
    display: { to: o }
  } = e[r];
  return Math.max(t, o);
}, 0), J5 = (e, t) => {
  if (!e)
    return {
      from: 0,
      to: t.duration
    };
  const { from: r, to: o } = e;
  return {
    from: r ?? 0,
    to: o ?? t.duration
  };
}, Q5 = (e, t) => {
  const { duration: r, trim: o } = t, s = o ? o.to - o.from : r || 5e3, a = {
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
function e4(e, t) {
  return e.map((r) => {
    const o = r.items.filter(
      (s) => !t.includes(s)
    );
    return { ...r, items: o };
  }).filter((r) => r.items.length > 0);
}
const t4 = async (e, t) => {
  const r = e.details, o = await K5(r.src), s = Ol(t, o);
  return {
    id: e.id,
    type: "image",
    name: "",
    display: {
      from: t.origin || 0,
      to: (t.origin || 5e3) + 5e3
    },
    details: {
      src: r.src || "",
      width: r.width || o.width || 100,
      height: r.height || o.height || 100,
      opacity: r.opacity ?? 100,
      transform: s.transform,
      border: r.border || "none",
      borderRadius: r.borderRadius || "0",
      boxShadow: r.boxShadow || "none",
      top: s.top || "0px",
      left: s.left || "0px"
    },
    metadata: e.metadata || {}
  };
}, r4 = async (e, t) => {
  const r = e.details.src, o = await Z5(r), s = Ol(t, {
    ...o
  }), a = J5(e.trim, { duration: o.duration }), u = {
    width: o.width,
    height: o.height,
    duration: o.duration,
    src: r,
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
    details: u,
    display: Q5(e?.display, {
      duration: o.duration,
      trim: a
    })
  };
}, n4 = async (e) => {
  const t = e.details, r = (await X5(t.src)).duration, o = e?.display?.from ?? 0;
  return {
    id: e.id,
    name: "",
    type: "audio",
    display: {
      from: o,
      to: o + r
    },
    trim: {
      from: 0,
      to: r
    },
    details: {
      src: t.src,
      duration: r,
      volume: t.volume ?? 100,
      text: t.text
      // Default volume
    },
    metadata: {
      ...e.metadata
    }
  };
}, o4 = 5e3, yv = async (e, t) => {
  const r = e.id;
  await eC([
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
  }, s = Hs(e.details.text ?? "", o), a = Ol(t, {
    width: o.width ?? 0,
    height: s
  });
  return {
    id: r,
    name: "",
    type: "text",
    display: {
      from: 0,
      to: o4
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
}, i4 = (e, t) => {
  const r = e.display, o = yt(r.from, t.tScale), s = yt(r.to - r.from, t.tScale), a = Wt.getClass("Audio") || En;
  return new a({
    width: s,
    height: 42,
    top: 10,
    left: o,
    id: e.id,
    display: r,
    text: e.details.text,
    trim: e.trim || {
      from: 0,
      to: e.details.duration
    },
    duration: e.details.duration,
    src: e.details.src,
    tScale: t.tScale
  });
}, s4 = (e, t) => {
  const r = yt(e.display.from, t.tScale), o = yt(e.details.duration || 5e3, t.tScale), s = Wt.getClass("Image") || Ml;
  return new s({
    width: o,
    height: 42,
    id: e.id,
    src: e.details.src,
    tScale: t.tScale,
    top: 10,
    left: r,
    display: e.display
  });
}, a4 = (e, t) => {
  const r = yt(e.trim.from, t.tScale), o = yt(e.trim.to - e.trim.from, t.tScale), s = Wt.getClass("Video") || Go;
  return new s({
    width: o,
    height: 42,
    id: e.id,
    tScale: t.tScale,
    fill: "#333333",
    top: 10,
    left: r,
    display: e.trim,
    trim: e.trim,
    text: e.details.text
  });
}, c4 = (e, t) => {
  const r = e.display, o = yt(r.from, t.tScale), s = yt(r.to - r.from, t.tScale), a = Wt.getClass("Text") || No;
  return new a({
    width: s,
    height: 42,
    id: e.id,
    display: r,
    top: 10,
    left: o,
    text: e.details.text,
    tScale: t.tScale
  });
}, u4 = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42
}, l4 = (e = {}) => {
  const t = { ...u4, ...e };
  return Object.fromEntries(
    Object.entries(t).filter(([, r]) => typeof r == "number")
  );
};
let d4 = class extends En {
  static type = "Audio";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Audio";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const r = new Path2D(
      "M8.24092 0C8.24092 2.51565 10.2795 4.55419 12.7951 4.55419C12.9677 4.55419 13.1331 4.62274 13.2552 4.74475C13.3772 4.86676 13.4457 5.03224 13.4457 5.20479C13.4457 5.37734 13.3772 5.54282 13.2552 5.66483C13.1331 5.78685 12.9677 5.85539 12.7951 5.85539C11.9218 5.85605 11.0594 5.66105 10.2713 5.28471C9.48319 4.90838 8.78942 4.36027 8.24092 3.68066V13.8794C8.24094 14.8271 7.91431 15.7458 7.31606 16.4808C6.71781 17.2157 5.88451 17.722 4.95657 17.9143C4.02863 18.1066 3.06276 17.9731 2.22172 17.5364C1.38067 17.0997 0.715856 16.3865 0.339286 15.5169C-0.0372842 14.6473 -0.10259 13.6744 0.154372 12.7622C0.411334 11.8501 0.974857 11.0544 1.74999 10.5092C2.52512 9.96403 3.46449 9.7027 4.40981 9.76924C5.35512 9.83579 6.24861 10.2261 6.93972 10.8745V0H8.24092ZM6.93972 13.8794C6.93972 13.1317 6.6427 12.4146 6.11398 11.8859C5.58527 11.3572 4.86818 11.0602 4.12046 11.0602C3.37275 11.0602 2.65566 11.3572 2.12694 11.8859C1.59823 12.4146 1.3012 13.1317 1.3012 13.8794C1.3012 14.6272 1.59823 15.3443 2.12694 15.873C2.65566 16.4017 3.37275 16.6987 4.12046 16.6987C4.86818 16.6987 5.58527 16.4017 6.11398 15.873C6.6427 15.3443 6.93972 14.6272 6.93972 13.8794Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 10), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 14), t.translate(10, 1), t.fillStyle = "#f4f4f5", t.fill(r), t.restore();
  }
};
class f4 extends Go {
  static type = "Video";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Video";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const r = new Path2D(
      "M16.5625 0.925L12.5 3.275V0.625L11.875 0H0.625L0 0.625V9.375L0.625 10H11.875L12.5 9.375V6.875L16.5625 9.2125L17.5 8.625V1.475L16.5625 0.925ZM11.25 8.75H1.25V1.25H11.25V8.75ZM16.25 7.5L12.5 5.375V4.725L16.25 2.5V7.5Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 14), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 10), t.translate(8, 1), t.fillStyle = "#f4f4f5", t.fill(r), t.restore();
  }
}
class bv extends No {
  static type = "Text";
  constructor(t) {
    super(t), this.fill = "#303030";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const r = new Path2D(
      "M6.23982 0.361968C6.18894 0.253743 6.10832 0.162234 6.00736 0.0981357C5.9064 0.034038 5.78929 0 5.6697 0C5.55012 0 5.433 0.034038 5.33204 0.0981357C5.23109 0.162234 5.15046 0.253743 5.09959 0.361968L0.0599035 11.0713C0.0246926 11.1462 0.00457285 11.2272 0.000693114 11.3099C-0.00318662 11.3925 0.00924959 11.4751 0.0372917 11.553C0.0939253 11.7102 0.210687 11.8384 0.361891 11.9095C0.513095 11.9806 0.686354 11.9888 0.843555 11.9322C1.00076 11.8755 1.12902 11.7588 1.20013 11.6075L2.51202 8.81998H8.82738L10.1393 11.6075C10.1745 11.6824 10.2241 11.7496 10.2853 11.8053C10.3465 11.861 10.418 11.9041 10.4958 11.9322C10.5737 11.9602 10.6563 11.9726 10.7389 11.9687C10.8216 11.9649 10.9026 11.9447 10.9775 11.9095C11.0524 11.8743 11.1196 11.8247 11.1753 11.7635C11.231 11.7023 11.2741 11.6308 11.3021 11.553C11.3302 11.4751 11.3426 11.3925 11.3387 11.3099C11.3348 11.2272 11.3147 11.1462 11.2795 11.0713L6.23982 0.361968ZM3.10498 7.56005L5.6697 2.11011L8.23443 7.56005H3.10498ZM15.1191 3.78029C14.1143 3.78029 13.3292 4.05354 12.7859 4.59294C12.6721 4.71153 12.6092 4.86987 12.6106 5.03419C12.6119 5.19851 12.6774 5.3558 12.7931 5.4725C12.9088 5.58921 13.0655 5.6561 13.2298 5.6589C13.3941 5.6617 13.553 5.60018 13.6726 5.48748C13.9718 5.19062 14.46 5.04021 15.1191 5.04021C16.1609 5.04021 17.009 5.74892 17.009 6.61511V6.86867C16.45 6.49465 15.7917 6.29663 15.1191 6.30013C13.382 6.30013 11.9693 7.57187 11.9693 9.13495C11.9693 10.698 13.382 11.9698 15.1191 11.9698C15.792 11.9727 16.4503 11.7739 17.009 11.3989C17.0168 11.566 17.0907 11.7231 17.2144 11.8357C17.3381 11.9483 17.5014 12.0071 17.6685 11.9993C17.8356 11.9915 17.9927 11.9176 18.1053 11.7939C18.2179 11.6702 18.2767 11.5069 18.2689 11.3398V6.61511C18.2689 5.05202 16.8562 3.78029 15.1191 3.78029ZM15.1191 10.7099C14.0773 10.7099 13.2292 10.0012 13.2292 9.13495C13.2292 8.26876 14.0773 7.56005 15.1191 7.56005C16.1609 7.56005 17.009 8.26876 17.009 9.13495C17.009 10.0012 16.1609 10.7099 15.1191 10.7099Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 12), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 12), t.translate(8, 1), t.fillStyle = "#f4f4f5", t.fill(r), t.restore();
  }
}
let p4 = class extends Ml {
  static type = "Image";
  text;
  constructor(t) {
    super(t), this.text = t.text ?? "Image";
  }
  _render(t) {
    super._render(t), this.drawTextIdentity(t), this.updateSelected(t);
  }
  drawTextIdentity(t) {
    const r = new Path2D(
      "M1.55556 0H14.4444C15.3031 0 16 0.696889 16 1.55556V14.4444C16 14.857 15.8361 15.2527 15.5444 15.5444C15.2527 15.8361 14.857 16 14.4444 16H1.55556C1.143 16 0.747335 15.8361 0.455612 15.5444C0.163889 15.2527 0 14.857 0 14.4444V1.55556C0 0.696889 0.696889 0 1.55556 0ZM14.4444 1.33333H1.55556C1.49662 1.33333 1.4401 1.35675 1.39842 1.39842C1.35675 1.4401 1.33333 1.49662 1.33333 1.55556V14.4444C1.33333 14.5671 1.43289 14.6667 1.55556 14.6667H1.72444L10.456 5.93511C10.6004 5.79065 10.7719 5.67605 10.9607 5.59787C11.1494 5.51968 11.3517 5.47944 11.556 5.47944C11.7603 5.47944 11.9626 5.51968 12.1513 5.59787C12.3401 5.67605 12.5116 5.79065 12.656 5.93511L14.6667 7.94578V1.55556C14.6667 1.49662 14.6433 1.4401 14.6016 1.39842C14.5599 1.35675 14.5034 1.33333 14.4444 1.33333ZM14.6667 9.83111L11.7129 6.87733C11.6922 6.85664 11.6677 6.84022 11.6407 6.82902C11.6137 6.81781 11.5848 6.81205 11.5556 6.81205C11.5263 6.81205 11.4974 6.81781 11.4704 6.82902C11.4434 6.84022 11.4189 6.85664 11.3982 6.87733L3.60978 14.6667H14.4444C14.5034 14.6667 14.5599 14.6433 14.6016 14.6016C14.6433 14.5599 14.6667 14.5034 14.6667 14.4444V9.83111ZM4.88889 7.11111C4.29952 7.11111 3.73429 6.87699 3.31754 6.46024C2.90079 6.04349 2.66667 5.47826 2.66667 4.88889C2.66667 4.29952 2.90079 3.73429 3.31754 3.31754C3.73429 2.90079 4.29952 2.66667 4.88889 2.66667C5.47826 2.66667 6.04349 2.90079 6.46024 3.31754C6.87699 3.73429 7.11111 4.29952 7.11111 4.88889C7.11111 5.47826 6.87699 6.04349 6.46024 6.46024C6.04349 6.87699 5.47826 7.11111 4.88889 7.11111ZM4.88889 5.77778C5.12464 5.77778 5.35073 5.68413 5.51743 5.51743C5.68413 5.35073 5.77778 5.12464 5.77778 4.88889C5.77778 4.65314 5.68413 4.42705 5.51743 4.26035C5.35073 4.09365 5.12464 4 4.88889 4C4.65314 4 4.42705 4.09365 4.26035 4.26035C4.09365 4.42705 4 4.65314 4 4.88889C4 5.12464 4.09365 5.35073 4.26035 5.51743C4.42705 5.68413 4.65314 5.77778 4.88889 5.77778Z"
    );
    t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 12), t.font = "600 12px 'Geist variable'", t.fillStyle = "#f4f4f5", t.textAlign = "left", t.clip(), t.fillText(this.text, 36, 12), t.translate(8, 1), t.fillStyle = "#f4f4f5", t.fill(r), t.restore();
  }
};
class h4 extends Kn {
  static type = "Track";
  constructor(t) {
    super(t), this.fill = "#18181b";
  }
  _render(t) {
    super._render(t);
    const r = new Path2D(
      "M14.4444 13.3263H11.0667C12.5384 12.3991 13.6259 10.9716 14.1289 9.30644C14.632 7.64131 14.5169 5.85051 13.8048 4.26348C13.0927 2.67645 11.8314 1.39993 10.2531 0.668736C8.67478 -0.0624548 6.8855 -0.199136 5.21442 0.283835C3.54334 0.766806 2.10285 1.83695 1.15794 3.2974C0.213035 4.75785 -0.172743 6.51038 0.0715766 8.23261C0.315896 9.95484 1.17388 11.5309 2.4877 12.671C3.80151 13.811 5.4828 14.4383 7.22227 14.4374H14.4444C14.5918 14.4374 14.7331 14.3789 14.8373 14.2747C14.9415 14.1705 15 14.0292 15 13.8819C15 13.7345 14.9415 13.5932 14.8373 13.489C14.7331 13.3848 14.5918 13.3263 14.4444 13.3263ZM1.1112 7.21523C1.1112 6.00658 1.46961 4.82506 2.14111 3.8201C2.8126 2.81514 3.76702 2.03187 4.88367 1.56934C6.00032 1.10681 7.22905 0.985789 8.41449 1.22159C9.59992 1.45738 10.6888 2.03941 11.5435 2.89405C12.3981 3.7487 12.9801 4.83759 13.2159 6.02302C13.4517 7.20845 13.3307 8.43719 12.8682 9.55384C12.4056 10.6705 11.6224 11.6249 10.6174 12.2964C9.61244 12.9679 8.43093 13.3263 7.22227 13.3263C5.60208 13.3245 4.04878 12.68 2.90313 11.5344C1.75748 10.3887 1.11304 8.83542 1.1112 7.21523ZM7.22227 5.54858C7.55191 5.54858 7.87414 5.45083 8.14822 5.2677C8.4223 5.08456 8.63592 4.82426 8.76206 4.51972C8.88821 4.21518 8.92121 3.88007 8.85691 3.55677C8.7926 3.23347 8.63386 2.9365 8.40078 2.70342C8.16769 2.47033 7.87072 2.3116 7.54742 2.24729C7.22412 2.18298 6.88901 2.21599 6.58447 2.34213C6.27993 2.46828 6.01964 2.6819 5.8365 2.95598C5.65337 3.23006 5.55562 3.55229 5.55562 3.88192C5.55562 4.32395 5.73121 4.74787 6.04377 5.06043C6.35633 5.37298 6.78025 5.54858 7.22227 5.54858ZM7.22227 3.32637C7.33215 3.32637 7.43956 3.35895 7.53092 3.42C7.62228 3.48104 7.69349 3.56781 7.73554 3.66932C7.77759 3.77084 7.78859 3.88254 7.76715 3.9903C7.74572 4.09807 7.6928 4.19706 7.61511 4.27476C7.53741 4.35245 7.43842 4.40536 7.33066 4.4268C7.22289 4.44824 7.11119 4.43723 7.00967 4.39519C6.90816 4.35314 6.82139 4.28193 6.76035 4.19057C6.69931 4.09921 6.66672 3.9918 6.66672 3.88192C6.66672 3.73458 6.72525 3.59327 6.82944 3.48909C6.93363 3.3849 7.07493 3.32637 7.22227 3.32637ZM8.88893 10.5485C8.88893 10.2189 8.79118 9.89668 8.60805 9.6226C8.42491 9.34852 8.16462 9.1349 7.86008 9.00875C7.55553 8.88261 7.22043 8.8496 6.89713 8.91391C6.57383 8.97822 6.27686 9.13695 6.04377 9.37004C5.81069 9.60313 5.65195 9.9001 5.58764 10.2234C5.52334 10.5467 5.55634 10.8818 5.68249 11.1863C5.80863 11.4909 6.02225 11.7512 6.29633 11.9343C6.57041 12.1175 6.89264 12.2152 7.22227 12.2152C7.6643 12.2152 8.08822 12.0396 8.40078 11.727C8.71334 11.4145 8.88893 10.9906 8.88893 10.5485ZM6.66672 10.5485C6.66672 10.4387 6.69931 10.3313 6.76035 10.2399C6.82139 10.1485 6.90816 10.0773 7.00967 10.0353C7.11119 9.99323 7.22289 9.98223 7.33066 10.0037C7.43842 10.0251 7.53741 10.078 7.61511 10.1557C7.6928 10.2334 7.74572 10.3324 7.76715 10.4402C7.78859 10.5479 7.77759 10.6596 7.73554 10.7611C7.69349 10.8627 7.62228 10.9494 7.53092 11.0105C7.43956 11.0715 7.33215 11.1041 7.22227 11.1041C7.07493 11.1041 6.93363 11.0456 6.82944 10.9414C6.72525 10.8372 6.66672 10.6959 6.66672 10.5485ZM10.5556 8.88189C10.8852 8.88189 11.2074 8.78414 11.4815 8.60101C11.7556 8.41787 11.9692 8.15758 12.0954 7.85303C12.2215 7.54849 12.2545 7.21338 12.1902 6.89008C12.1259 6.56678 11.9672 6.26982 11.7341 6.03673C11.501 5.80364 11.204 5.64491 10.8807 5.5806C10.5574 5.51629 10.2223 5.5493 9.91778 5.67544C9.61324 5.80159 9.35295 6.01521 9.16981 6.28929C8.98668 6.56337 8.88893 6.8856 8.88893 7.21523C8.88893 7.65726 9.06452 8.08118 9.37708 8.39374C9.68964 8.70629 10.1136 8.88189 10.5556 8.88189ZM10.5556 6.65968C10.6655 6.65968 10.7729 6.69226 10.8642 6.75331C10.9556 6.81435 11.0268 6.90112 11.0688 7.00263C11.1109 7.10415 11.1219 7.21585 11.1005 7.32362C11.079 7.43138 11.0261 7.53037 10.9484 7.60807C10.8707 7.68576 10.7717 7.73867 10.664 7.76011C10.5562 7.78155 10.4445 7.77054 10.343 7.7285C10.2415 7.68645 10.1547 7.61524 10.0937 7.52388C10.0326 7.43252 10 7.32511 10 7.21523C10 7.06789 10.0586 6.92658 10.1628 6.8224C10.2669 6.71821 10.4082 6.65968 10.5556 6.65968ZM3.88896 5.54858C3.55933 5.54858 3.2371 5.64633 2.96302 5.82946C2.68894 6.01259 2.47532 6.27289 2.34918 6.57743C2.22303 6.88197 2.19002 7.21708 2.25433 7.54038C2.31864 7.86368 2.47737 8.16065 2.71046 8.39374C2.94355 8.62682 3.24052 8.78556 3.56382 8.84986C3.88711 8.91417 4.22222 8.88117 4.52677 8.75502C4.83131 8.62888 5.0916 8.41526 5.27474 8.14118C5.45787 7.8671 5.55562 7.54487 5.55562 7.21523C5.55562 6.77321 5.38003 6.34929 5.06747 6.03673C4.75491 5.72417 4.33099 5.54858 3.88896 5.54858ZM3.88896 7.77078C3.77909 7.77078 3.67168 7.7382 3.58032 7.67716C3.48896 7.61611 3.41775 7.52935 3.3757 7.42783C3.33365 7.32632 3.32265 7.21462 3.34409 7.10685C3.36552 6.99908 3.41843 6.90009 3.49613 6.8224C3.57382 6.7447 3.67281 6.69179 3.78058 6.67036C3.88835 6.64892 4.00005 6.65992 4.10156 6.70197C4.20308 6.74402 4.28984 6.81522 4.35089 6.90658C4.41193 6.99794 4.44452 7.10535 4.44452 7.21523C4.44452 7.36257 4.38598 7.50388 4.2818 7.60807C4.17761 7.71225 4.03631 7.77078 3.88896 7.77078Z"
    );
    this.items.length || (t.save(), t.translate(-this.width / 2, -this.height / 2), t.translate(0, 12), t.font = "600 12px 'Geist variable'", t.fillStyle = "#A0A4A2", t.textAlign = "left", t.clip(), t.fillText("Drag and drop media here", 32, 12), t.translate(8, 1), t.fillStyle = "#A0A4A2", t.fill(r), t.restore());
  }
}
class m4 extends Wi {
  static type = "Helper";
  constructor(t) {
    t.activeGuideFill = "#ffffff", super(t);
  }
}
class g4 {
  addTrackItem(t) {
    const r = t.id, o = ru(t, {
      tScale: this.tScale,
      sizesMap: this.sizesMap
    });
    this.add(o), this.trackItemIds.push(r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = Yr(this.trackItemsMap);
  }
  alignItemsToTrack() {
    this.pauseEventListeners();
    const t = new Map(
      this.getObjects("Track").map((o) => [o.id, o])
    ), r = this.getObjects("Image", "Video", "Text", "Audio");
    this.trackItemIds.forEach((o) => {
      const s = this.tracks.find((l) => l.items.includes(o));
      if (!s) return;
      const a = t.get(s.id);
      this.duration;
      const u = this.getObjects().find((l) => l.id === o);
      u && a && (u.isMain = !1, this.trackItemsMap[o].isMain = !1, u.set({ top: a.top }), u.setCoords());
    }), t.forEach((o) => {
      o.items = r.filter((s) => s.top === o.top).map((s) => s.id);
    }), this.resumeEventListeners();
  }
  updateTrackItemsPosition() {
    const t = this.getObjects("Image", "Text", "Video", "Audio");
    t.sort((r, o) => r.top - o.top), this.trackItemIds = t.map((r) => r.id).reverse();
  }
  restoreTrackItemPositions() {
  }
  updateTrackItemsState() {
    this.pauseEventListeners();
    const t = this.getObjects("Image", "Video", "Text", "Audio"), r = {};
    t.forEach((o) => {
      const { id: s, left: a, width: u } = o, l = this.trackItemsMap[s], d = qn(a, this.tScale), p = d + qn(u, this.tScale), m = { from: d, to: p }, g = {
        ...l,
        display: m,
        trim: o instanceof Go || o instanceof En ? o.trim : void 0
      };
      o.display = m, r[s] = g;
    }), this.trackItemsMap = r, this.resumeEventListeners();
  }
  deleteActiveTrackItem() {
    const t = this.getActiveObjects();
    if (!t.length) return !1;
    const r = t.map((s) => s.id), o = qs(this.tracks, r);
    this.trackItemsMap = Object.keys(this.trackItemsMap).reduce((s, a) => (r.includes(a) || (s[a] = this.trackItemsMap[a]), s), {}), this.trackItemIds = this.trackItemIds.filter(
      (s) => !r.includes(s)
    ), this.tracks = o, this.discardActiveObject(), this.remove(...t), this.setActiveIds([]), this.renderTracks(), this.alignItemsToTrack(), this.updateState({ updateHistory: !0, kind: "remove" });
  }
  updateTrackItemsToHistory() {
    this.pauseEventListeners();
    const t = this.getObjects();
    this.trackItemIds.forEach((r) => {
      const o = this.tracks.find(
        (p) => p.items.includes(r)
      ), s = t.find(
        (p) => p.id === o?.id
      )?.top;
      if (!s) {
        console.warn(`Track top not found for trackItemId: ${r}`);
        return;
      }
      const a = this.trackItemsMap[r], u = t.find((p) => p.id === r);
      if (!u) {
        console.warn(`Object not found for trackItemId: ${r}`);
        return;
      }
      const l = yt(a.display.from, this.tScale), d = yt(
        a.display.to - a.display.from,
        this.tScale
      );
      u.set({ left: l, width: d, top: s }), u.setCoords();
    }), this.requestRenderAll(), this.resumeEventListeners();
  }
  cloneActiveTrackItem(t) {
    const r = t?.trackItemId || this.activeIds[0];
    if (!r) return !1;
    const s = {
      ...this.trackItemsMap[r],
      id: It()
    }, a = this.tracks.find(
      (m) => m.items.includes(r)
    ), u = this.tracks.findIndex((m) => m.id === a?.id) + 1;
    this.findOrCreateTrack(s, { trackIndex: u });
    const l = ru(s, {
      tScale: this.tScale
    });
    l && this.add(l);
    const { audioData: d, ...p } = s.metadata || {};
    s.metadata = p, this.trackItemsMap[s.id] = s, this.trackItemIds.push(s.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  splitActiveTrackItem(t) {
    const r = t.trackItemId ?? this.activeIds[0];
    if (!r || this.activeIds.length > 1) return !1;
    const o = this.trackItemsMap[r], s = t.time;
    if (o.display.from >= s || o.display.to <= s)
      return !1;
    const a = {
      ...o,
      display: { from: o.display.from, to: s }
    }, u = {
      ...o,
      display: { from: s, to: o.display.to },
      id: It()
    };
    if (o.type === "video" || o.type === "audio") {
      const m = s - a.display.from;
      a.trim = {
        from: o.trim.from,
        to: o.trim.from + m
      }, u.trim = {
        from: a.trim.to,
        to: o.trim.to
      };
    }
    const l = this.getObjects().find(
      (m) => m.id === r
    );
    l.display = a.display, this.tracks.find(
      (m) => m.items.includes(r)
    )?.items.push(u.id);
    const p = ru(u, {
      tScale: this.tScale
    });
    p && this.add(p), this.trackItemsMap[u.id] = u, this.trackItemsMap[r] = a, this.trackItemIds.push(u.id), this.updateTrackItemCoords(a.id), this.alignItemsToTrack(), this.updateTransitions(), this.updateState();
  }
  updateTrackItemCoords(t) {
    const r = this.getObjects().find((u) => u.id === t), o = this.trackItemsMap[t], s = yt(o.display.from, this.tScale), a = yt(
      o.display.to - o.display.from,
      this.tScale
    );
    r?.set({ left: s, width: a }), r?.setCoords();
  }
  updateTrackItemDetails(t, r) {
    const o = r?.trackItemId;
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
  updateTrackItem(t, r) {
    const o = r.trackItemId;
    if (!o) return !1;
    const s = this.trackItemsMap[o], a = { ...s.details, ...t.details };
    if (s.type === "text" && t.details.text) {
      const u = this.getObjects("Text").find(
        (l) => l.id === o
      );
      u instanceof bv && (u.text = t.details.text, this.requestRenderAll());
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
  updateTrackItemsDetails(t, r) {
    r?.trackItemIds?.forEach((o, s) => {
      const a = this.trackItemsMap[o], u = {
        ...a.details,
        ...t[s].details
      };
      ("fontSize" in u || "lineHeight" in u) && (u.height = Hs(
        u.text,
        u
      )), this.trackItemsMap[o] = {
        ...a,
        ...t[s],
        details: u
      };
    }), this.updateState();
  }
  getTrackItems() {
    return this.getObjects(...v4);
  }
  setActiveTrackItemCoords() {
    this.getActiveObjects().forEach((t) => t.setCoords());
  }
  deleteTrackItemById(t) {
    const r = this.getObjects().filter(
      (o) => t.includes(o.id)
    );
    this.tracks = qs(this.tracks, t), this.trackItemsMap = Object.keys(this.trackItemsMap).filter((o) => !t.includes(o)).reduce((o, s) => (o[s] = this.trackItemsMap[s], o), {}), this.trackItemIds = this.trackItemIds.filter((o) => !t.includes(o)), this.discardActiveObject(), this.remove(...r), this.renderTracks(), this.alignItemsToTrack(), this.calcBounding(), this.duration = Yr(this.trackItemsMap);
  }
  selectTrackItemByIds(t) {
    const r = this.getActiveObjects().map((s) => s.id);
    if (Ze.isEqual(r, t)) return;
    const o = this.getTrackItems().filter(
      (s) => t.includes(s.id)
    );
    if (o.length === 0)
      this.discardActiveObject();
    else if (o.length === 1)
      this.setActiveObject(o[0]);
    else {
      const s = new qu(o);
      this.setActiveObject(s);
    }
    this.requestRenderAll();
  }
}
const v4 = ["Image", "Text", "Video", "Audio", "Caption", "Template"], ru = (e, t) => {
  const o = {
    text: c4,
    video: a4,
    image: s4,
    audio: i4
  }[e.type];
  return o(e, t);
}, Ao = {
  text: 32,
  image: 40,
  video: 40,
  audio: 32,
  main: 40
}, Eh = (e) => {
  switch (e) {
    case "text":
      return Ao.text;
    case "image":
      return Ao.image;
    case "video":
      return Ao.video;
    case "audio":
      return Ao.audio;
    case "helperTop":
      return 40;
    case "helperBottom":
      return 40;
    case "helperCenter":
      return 8;
    case "main":
      return Ao.main;
    default:
      return Ao.text;
  }
};
class y4 {
  // Метод для нахождения или создания нового трека
  findOrCreateTrack(t, { trackId: r, trackIndex: o }) {
    const s = r;
    if (s) {
      const u = this.tracks.find((l) => l.id === s);
      if (u)
        return u.items.push(t.id), s;
    }
    const a = {
      id: It(),
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
    const t = this.width, r = this.tracks.flatMap((l) => [
      l,
      {
        id: `after-${l.id}`,
        type: "helper",
        items: [],
        accepts: []
      }
    ]).slice(0, -1);
    let o = 0;
    const s = Wt.getClass("Helper") || Wi, a = new s({
      id: "helperLineTop",
      top: o,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: t,
      kind: "top",
      metadata: {}
    });
    o += Eh("helperTop"), this.insertAt(0, a), r.forEach((l, d) => {
      if (l.type === "helper") {
        const p = Eh("helperCenter"), m = new s({
          id: l.id,
          top: o,
          tScale: this.tScale,
          width: t,
          height: p,
          metadata: { order: (d + 1) / 2 },
          kind: "center"
        });
        o += p, this.insertAt(0, m);
      } else {
        const p = Wt.getClass("Track") || Kn, m = new p({
          id: l.id,
          top: o,
          left: 0,
          fill: "#18181b",
          height: 42,
          width: t,
          tScale: this.tScale,
          accepts: this.acceptsMap?.[l.type] || [],
          items: l.items
        });
        o += 42, this.insertAt(0, m);
      }
    });
    const u = new s({
      id: "helperLineBottom",
      top: o,
      selectable: !1,
      evented: !1,
      tScale: this.tScale,
      width: t,
      kind: "bottom",
      metadata: {}
    });
    this.insertAt(0, u);
  }
  // Метод для обновления состояния треков
  updateTracksState() {
    const t = this.tracks.filter(
      (o) => o.items.length || o.type === "main"
    ), r = /* @__PURE__ */ new Map();
    t.forEach((o) => r.set(o.id, o)), this.tracks = Array.from(r.values());
  }
  // Метод для обновления координат треков
  updateTrackCoords() {
    const t = this.bounding.width + this.spacing.right;
    this.getObjects("Track", "Helper").forEach((r) => {
      r.updateCoords(t), r.setCoords();
    });
  }
}
const b4 = 60, w4 = 188;
function _h(e, t = 1, r = 1) {
  const o = w4 * t;
  return e * (b4 / 1e3) * o / r;
}
class S4 {
  // Удаление всех переходов
  removeTransitions() {
    const t = this.getObjects("Transition");
    this.remove(...t);
  }
  // Рендеринг переходов
  renderTransitions() {
    this.removeTransitions(), this.transitionIds.forEach((t) => {
      const r = this.transitionsMap[t], o = r.fromId, s = r.toId, a = this.getObjects(), u = a.find((v) => v.id === o), l = a.find((v) => v.id === s);
      if (!u || !l) return;
      const d = _h(r.duration, this.tScale), p = u.left + u.width - d / 2, m = u.height, g = new jr({
        id: r.id,
        left: p,
        top: u.top,
        height: m,
        width: d,
        tScale: this.tScale,
        duration: r.duration,
        fromId: u.id,
        toId: l.id,
        kind: r.kind
      });
      r.kind === "none" && (g.visible = !1), this.add(g);
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
      const r = this.getObjects("Transition").find(
        (o) => o.id === t
      );
      if (r instanceof jr) {
        const o = this.getObjects().find(
          (u) => u.id === r.fromId
        );
        if (!o) return;
        const s = _h(r.duration, this.tScale), a = o.left + o.width - s / 2;
        r.set({ left: a, top: o.top }), r.setCoords();
      }
    }), this.resumeEventListeners();
  }
  // Обновление переходов
  updateTransitions(t = !0) {
    t && this.pauseEventListeners();
    const r = this.getObjects("Track"), o = this.getObjects("Video", "Image");
    this.removeTransitions();
    const s = {}, a = [];
    r.forEach((u) => {
      const l = o.filter((d) => u.items.includes(d.id)).sort((d, p) => d.left - p.left);
      for (let d = 0; d < l.length - 1; d++) {
        const p = l[d], m = l[d + 1];
        if (Math.abs(p.left + p.width - m.left) <= 1) {
          const g = `${p.id}-${m.id}`;
          if (this.transitionIds.includes(g))
            s[g] = this.transitionsMap[g];
          else {
            const v = {
              id: g,
              duration: 1500,
              fromId: p.id,
              toId: m.id,
              kind: "none",
              trackId: u.id,
              type: "transition"
            };
            s[g] = v;
          }
          a.push(g);
        }
      }
    }), this.transitionIds = a, this.transitionsMap = s, this.renderTransitions(), t && this.resumeEventListeners();
  }
}
const te = {
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
}, vt = {
  guide: null,
  object: null,
  objects: []
}, D8 = () => te, L8 = (e) => {
  Object.assign(te, e);
}, x4 = (e) => {
  e.on("before:transform", wv.bind(e));
}, E4 = (e) => {
  e.off("before:transform", wv.bind(e));
};
function wv(e) {
  te.canvas = this, te.activeTrackToItemsMap = {}, te.primaryTracks = {}, te.secondaryTracks = {}, te.trackTops = [], te.trackToItemsMap = {}, te.activeObjects = [], te.trackTopToIdMap = {}, te.canvas.trackIdAfterTransform = "", te.canvas.positionAfterTransform = {};
  const t = te.canvas.getActiveObject();
  if (!t) return;
  te.activeObjects = t instanceof qu ? t.getObjects() : [t];
  const r = te.canvas.getScenePoint(e.e), o = te.canvas.getObjects("Track");
  te.originTrack = o.find((u) => {
    const l = u.getBoundingRect();
    return r.x >= l.left && r.x <= l.left + l.width && r.y >= l.top && r.y <= l.top + l.height;
  }) ?? {};
  const s = te.canvas.getObjects(
    "Video",
    "Image",
    "Audio",
    "Text",
    "Element"
  );
  o.forEach((u) => {
    const l = s.filter(
      (d) => u.items.includes(d.id)
    );
    te.trackToItemsMap[u.id] = l, te.trackTopToIdMap[u.top] = u.id, te.trackTops.push(u.top);
  }), te.trackTops.sort((u, l) => u - l), te.activeObjects.forEach((u) => {
    const l = o?.find(
      (p) => p.items.includes(u.id)
    );
    if (!l) return;
    const d = l.id;
    te.activeTrackToItemsMap[d] ? te.activeTrackToItemsMap[d].push(u) : te.activeTrackToItemsMap[d] = [u];
  }), te.primaryMovingObjects = te.activeObjects.filter(
    (u) => {
      const l = u.getBoundingRect();
      return r.y >= l.top && r.y <= l.top + l.height && !(u instanceof jr);
    }
  ), te.primaryMovingObjects.forEach((u) => {
    const l = u.getBoundingRect().top, d = te.trackTopToIdMap[l];
    if (te.primaryTracks[d])
      te.primaryTracks[d].objects.push(u);
    else {
      const p = zu(
        te.trackTops,
        te.originTrack.top,
        l
      );
      if (typeof p != "number") return;
      te.primaryTracks[d] = { objects: [u], index: p };
    }
  }), te.primaryMovingObjects = te.primaryMovingObjects.sort(
    (u, l) => u.left - l.left
  ), te.secondaryMovingObjects = te.activeObjects.filter(
    (u) => !te.primaryMovingObjects.includes(u) && !(u instanceof jr)
  ), te.secondaryMovingObjects.forEach((u) => {
    const l = u.getBoundingRect().top, d = te.trackTopToIdMap[u.getBoundingRect().top];
    if (te.secondaryTracks[d])
      te.secondaryTracks[d].objects.push(u);
    else {
      const p = zu(
        te.trackTops,
        te.originTrack.top,
        l
      );
      if (typeof p != "number") return;
      te.secondaryTracks[d] = { objects: [u], index: p };
    }
  }), te.originTrack && (te.canvas.trackOriginBeforeTransform = te.originTrack.id), t && (te.canvas.positionBeforeTransform = {
    top: t.top,
    left: t.left
  }), ("transform" in e ? e.transform : {}).action === "drag" && (te.placeholderMovingObjects = te.primaryMovingObjects.map(
    (u) => {
      const l = u.getBoundingRect();
      te.objectInitialPositions[u.id] = {
        top: l.top,
        left: l.left
      };
      const d = new Pi({
        id: `${u.id}-placeholder`,
        left: l.left,
        top: l.top,
        width: l.width,
        height: l.height,
        for: _4[u.type]
      });
      return d.draggedObject = u, d;
    }
  ), te.canvas.add(...te.placeholderMovingObjects));
}
function zu(e, t, r) {
  const o = e.indexOf(t), s = e.indexOf(r);
  return o === -1 || s === -1 ? null : s - o;
}
const _4 = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text"
};
function Sv(e) {
  if (!vt.guide) return !1;
  e.e.preventDefault();
  const t = this, r = t.getViewportPoint(e.e);
  vt.guide.set({
    left: r.x - 16,
    top: r.y - vt.guide.height / 2
  });
  const o = C4(
    r,
    vt.objects
  );
  o && (vt.object = o, o.strokeDashArray = [5, 1], o.setSelected(!0)), vt.objects.forEach((s) => {
    s !== o && s.setSelected(!1);
  }), t.requestRenderAll();
}
function C4(e, t) {
  let r = 1 / 0, o = null;
  const s = new aE(e.x, e.y);
  return t.forEach((a) => {
    const u = T4(a, s);
    u < r && (r = u, o = a);
  }), o;
}
function T4(e, t) {
  return Math.sqrt(
    Math.pow(e.left - t.x, 2) + Math.pow(e.top - t.y, 2)
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
function xv(e) {
  const t = e.e.dataTransfer?.types[0];
  if (!t) return;
  const r = JSON.parse(t), { type: o, duration: s = 5e3 } = r;
  if (!I4.includes(o)) return;
  const a = this;
  a.discardActiveObject();
  const u = yt(s, a.tScale);
  vt.guide = k4({
    width: u,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type: o
  }), a.add(vt.guide), o === "transition" && (vt.objects = a.getObjects("Transition"), vt.objects.forEach((l) => {
    l.visible = !0;
  })), Be.dispatch(Qm);
}
function k4({ width: e, height: t, id: r, left: o, top: s, type: a }) {
  return a === "transition" ? new ta({
    top: 0,
    left: 0,
    height: 48,
    width: 48,
    id: "TransitionGuide"
  }) : new ra({
    top: s,
    left: o,
    height: t,
    width: e,
    id: r,
    name: "Rivers in the mountains"
  });
}
function Ev() {
  if (!vt.guide) return;
  Be.dispatch(Gs);
  const e = this;
  A4(vt.objects), e.remove(vt.guide);
}
function A4(e) {
  e.forEach((t) => {
    t.strokeDashArray = [], t.setSelected(!1), t.kind === "none" && (t.visible = !1);
  });
}
var R4 = typeof global == "object" && global && global.Object === Object && global, P4 = typeof self == "object" && self && self.Object === Object && self, Nl = R4 || P4 || Function("return this")(), Tn = Nl.Symbol, _v = Object.prototype, M4 = _v.hasOwnProperty, O4 = _v.toString, Si = Tn ? Tn.toStringTag : void 0;
function N4(e) {
  var t = M4.call(e, Si), r = e[Si];
  try {
    e[Si] = void 0;
    var o = !0;
  } catch {
  }
  var s = O4.call(e);
  return o && (t ? e[Si] = r : delete e[Si]), s;
}
var j4 = Object.prototype, D4 = j4.toString;
function L4(e) {
  return D4.call(e);
}
var F4 = "[object Null]", $4 = "[object Undefined]", Ch = Tn ? Tn.toStringTag : void 0;
function jl(e) {
  return e == null ? e === void 0 ? $4 : F4 : Ch && Ch in Object(e) ? N4(e) : L4(e);
}
function Dl(e) {
  return e != null && typeof e == "object";
}
var V4 = "[object Symbol]";
function Ll(e) {
  return typeof e == "symbol" || Dl(e) && jl(e) == V4;
}
function z4(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, s = Array(o); ++r < o; )
    s[r] = t(e[r], r, e);
  return s;
}
var Bi = Array.isArray, Th = Tn ? Tn.prototype : void 0, Ih = Th ? Th.toString : void 0;
function Cv(e) {
  if (typeof e == "string")
    return e;
  if (Bi(e))
    return z4(e, Cv) + "";
  if (Ll(e))
    return Ih ? Ih.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function na(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function U4(e) {
  return e;
}
var H4 = "[object AsyncFunction]", W4 = "[object Function]", B4 = "[object GeneratorFunction]", Y4 = "[object Proxy]";
function G4(e) {
  if (!na(e))
    return !1;
  var t = jl(e);
  return t == W4 || t == B4 || t == H4 || t == Y4;
}
var nu = Nl["__core-js_shared__"], kh = function() {
  var e = /[^.]+$/.exec(nu && nu.keys && nu.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function q4(e) {
  return !!kh && kh in e;
}
var X4 = Function.prototype, K4 = X4.toString;
function Z4(e) {
  if (e != null) {
    try {
      return K4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var J4 = /[\\^$.*+?()[\]{}|]/g, Q4 = /^\[object .+?Constructor\]$/, e3 = Function.prototype, t3 = Object.prototype, r3 = e3.toString, n3 = t3.hasOwnProperty, o3 = RegExp(
  "^" + r3.call(n3).replace(J4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function i3(e) {
  if (!na(e) || q4(e))
    return !1;
  var t = G4(e) ? o3 : Q4;
  return t.test(Z4(e));
}
function s3(e, t) {
  return e?.[t];
}
function Fl(e, t) {
  var r = s3(e, t);
  return i3(r) ? r : void 0;
}
function a3(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var c3 = 800, u3 = 16, l3 = Date.now;
function d3(e) {
  var t = 0, r = 0;
  return function() {
    var o = l3(), s = u3 - (o - r);
    if (r = o, s > 0) {
      if (++t >= c3)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function f3(e) {
  return function() {
    return e;
  };
}
var oa = function() {
  try {
    var e = Fl(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), p3 = oa ? function(e, t) {
  return oa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: f3(t),
    writable: !0
  });
} : U4, h3 = d3(p3), m3 = 9007199254740991, g3 = /^(?:0|[1-9]\d*)$/;
function Tv(e, t) {
  var r = typeof e;
  return t = t ?? m3, !!t && (r == "number" || r != "symbol" && g3.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function v3(e, t, r) {
  t == "__proto__" && oa ? oa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Iv(e, t) {
  return e === t || e !== e && t !== t;
}
var y3 = Object.prototype, b3 = y3.hasOwnProperty;
function w3(e, t, r) {
  var o = e[t];
  (!(b3.call(e, t) && Iv(o, r)) || r === void 0 && !(t in e)) && v3(e, t, r);
}
var Ah = Math.max;
function S3(e, t, r) {
  return t = Ah(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, a = Ah(o.length - t, 0), u = Array(a); ++s < a; )
      u[s] = o[t + s];
    s = -1;
    for (var l = Array(t + 1); ++s < t; )
      l[s] = o[s];
    return l[t] = r(u), a3(e, this, l);
  };
}
var x3 = 9007199254740991;
function E3(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= x3;
}
var _3 = "[object Arguments]";
function Rh(e) {
  return Dl(e) && jl(e) == _3;
}
var kv = Object.prototype, C3 = kv.hasOwnProperty, T3 = kv.propertyIsEnumerable, Av = Rh(/* @__PURE__ */ function() {
  return arguments;
}()) ? Rh : function(e) {
  return Dl(e) && C3.call(e, "callee") && !T3.call(e, "callee");
}, I3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, k3 = /^\w*$/;
function A3(e, t) {
  if (Bi(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ll(e) ? !0 : k3.test(e) || !I3.test(e) || t != null && e in Object(t);
}
var Mi = Fl(Object, "create");
function R3() {
  this.__data__ = Mi ? Mi(null) : {}, this.size = 0;
}
function P3(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var M3 = "__lodash_hash_undefined__", O3 = Object.prototype, N3 = O3.hasOwnProperty;
function j3(e) {
  var t = this.__data__;
  if (Mi) {
    var r = t[e];
    return r === M3 ? void 0 : r;
  }
  return N3.call(t, e) ? t[e] : void 0;
}
var D3 = Object.prototype, L3 = D3.hasOwnProperty;
function F3(e) {
  var t = this.__data__;
  return Mi ? t[e] !== void 0 : L3.call(t, e);
}
var $3 = "__lodash_hash_undefined__";
function V3(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Mi && t === void 0 ? $3 : t, this;
}
function Zn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Zn.prototype.clear = R3;
Zn.prototype.delete = P3;
Zn.prototype.get = j3;
Zn.prototype.has = F3;
Zn.prototype.set = V3;
function z3() {
  this.__data__ = [], this.size = 0;
}
function Aa(e, t) {
  for (var r = e.length; r--; )
    if (Iv(e[r][0], t))
      return r;
  return -1;
}
var U3 = Array.prototype, H3 = U3.splice;
function W3(e) {
  var t = this.__data__, r = Aa(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : H3.call(t, r, 1), --this.size, !0;
}
function B3(e) {
  var t = this.__data__, r = Aa(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Y3(e) {
  return Aa(this.__data__, e) > -1;
}
function G3(e, t) {
  var r = this.__data__, o = Aa(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function qo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
qo.prototype.clear = z3;
qo.prototype.delete = W3;
qo.prototype.get = B3;
qo.prototype.has = Y3;
qo.prototype.set = G3;
var q3 = Fl(Nl, "Map");
function X3() {
  this.size = 0, this.__data__ = {
    hash: new Zn(),
    map: new (q3 || qo)(),
    string: new Zn()
  };
}
function K3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ra(e, t) {
  var r = e.__data__;
  return K3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Z3(e) {
  var t = Ra(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function J3(e) {
  return Ra(this, e).get(e);
}
function Q3(e) {
  return Ra(this, e).has(e);
}
function e6(e, t) {
  var r = Ra(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function ao(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ao.prototype.clear = X3;
ao.prototype.delete = Z3;
ao.prototype.get = J3;
ao.prototype.has = Q3;
ao.prototype.set = e6;
var t6 = "Expected a function";
function $l(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(t6);
  var r = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(s))
      return a.get(s);
    var u = e.apply(this, o);
    return r.cache = a.set(s, u) || a, u;
  };
  return r.cache = new ($l.Cache || ao)(), r;
}
$l.Cache = ao;
var r6 = 500;
function n6(e) {
  var t = $l(e, function(o) {
    return r.size === r6 && r.clear(), o;
  }), r = t.cache;
  return t;
}
var o6 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i6 = /\\(\\)?/g, s6 = n6(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(o6, function(r, o, s, a) {
    t.push(s ? a.replace(i6, "$1") : o || r);
  }), t;
});
function a6(e) {
  return e == null ? "" : Cv(e);
}
function Pa(e, t) {
  return Bi(e) ? e : A3(e, t) ? [e] : s6(a6(e));
}
function Vl(e) {
  if (typeof e == "string" || Ll(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function c6(e, t) {
  t = Pa(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[Vl(t[r++])];
  return r && r == o ? e : void 0;
}
function u6(e, t) {
  for (var r = -1, o = t.length, s = e.length; ++r < o; )
    e[s + r] = t[r];
  return e;
}
var Ph = Tn ? Tn.isConcatSpreadable : void 0;
function l6(e) {
  return Bi(e) || Av(e) || !!(Ph && e && e[Ph]);
}
function d6(e, t, r, o, s) {
  var a = -1, u = e.length;
  for (r || (r = l6), s || (s = []); ++a < u; ) {
    var l = e[a];
    r(l) ? u6(s, l) : s[s.length] = l;
  }
  return s;
}
function f6(e) {
  var t = e == null ? 0 : e.length;
  return t ? d6(e) : [];
}
function p6(e) {
  return h3(S3(e, void 0, f6), e + "");
}
function h6(e, t) {
  return e != null && t in Object(e);
}
function m6(e, t, r) {
  t = Pa(t, e);
  for (var o = -1, s = t.length, a = !1; ++o < s; ) {
    var u = Vl(t[o]);
    if (!(a = e != null && r(e, u)))
      break;
    e = e[u];
  }
  return a || ++o != s ? a : (s = e == null ? 0 : e.length, !!s && E3(s) && Tv(u, s) && (Bi(e) || Av(e)));
}
function g6(e, t) {
  return e != null && m6(e, t, h6);
}
function v6(e, t, r, o) {
  if (!na(e))
    return e;
  t = Pa(t, e);
  for (var s = -1, a = t.length, u = a - 1, l = e; l != null && ++s < a; ) {
    var d = Vl(t[s]), p = r;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (s != u) {
      var m = l[d];
      p = void 0, p === void 0 && (p = na(m) ? m : Tv(t[s + 1]) ? [] : {});
    }
    w3(l, d, p), l = l[d];
  }
  return e;
}
function y6(e, t, r) {
  for (var o = -1, s = t.length, a = {}; ++o < s; ) {
    var u = t[o], l = c6(e, u);
    r(l, u) && v6(a, Pa(u, e), l);
  }
  return a;
}
function b6(e, t) {
  return y6(e, t, function(r, o) {
    return g6(e, o);
  });
}
var w6 = p6(function(e, t) {
  return e == null ? {} : b6(e, t);
});
function Rv(e) {
  const t = e.e.dataTransfer?.types[0];
  if (!t) return;
  const r = JSON.parse(
    e.e.dataTransfer.getData(t)
  ), o = this;
  if (r.type !== "transition") {
    S6(r), o.remove(vt.guide), o.requestRenderAll(), Be.dispatch(Gs);
    return;
  }
  vt.guide && (vt.object && x6(r, o), vt.objects.forEach((s) => {
    s.strokeDashArray = [], s.setSelected(!1), s.kind === "none" && (s.visible = !1);
  }), o.remove(vt.guide), o.requestRenderAll(), Be.dispatch(Gs));
}
function S6(e) {
  const t = { ...e, id: It() };
  switch (e.type) {
    case "image":
      Be.dispatch(Vi, { payload: t });
      break;
    case "video":
      Be.dispatch(Fi, { payload: t });
      break;
    case "audio":
      Be.dispatch($i, { payload: t });
      break;
  }
}
function x6(e, t) {
  const r = vt.object?.id, o = w6(e, ["kind", "direction"]);
  Object.entries(o).forEach(([s, a]) => {
    s === "kind" ? vt.object.kind = a : vt.object[s] = a;
  }), t.transitionsMap[r] = {
    ...t.transitionsMap[r],
    ...o
  }, t.updateState();
}
const E6 = (e) => {
  e.on("dragover", Sv), e.on("dragenter", xv), e.on("dragleave", Ev), e.on("drop", Rv);
}, _6 = (e) => {
  e.off("dragover", Sv), e.off("dragenter", xv), e.off("dragleave", Ev), e.off("drop", Rv);
}, Pv = (e) => {
  const t = e.target.canvas, r = e.target;
  if (e.action === "resizing" && r instanceof jr && t) {
    const o = r.id, s = t.getObjects("Transition").find((a) => a.id === o);
    if (s && s instanceof jr) {
      const a = Ze.cloneDeep(t.transitionsMap), u = {
        ...a,
        [o]: {
          ...a[o],
          width: s.width,
          duration: s.duration
        }
      };
      t.transitionsMap = u, t.updateState();
    }
  }
  t && (C6(t, t.getObjects()), T6(t.getObjects("Helper")), te.isPointerOverHelperTrack = !1, te.draggingOverTrack = null);
}, C6 = (e, t) => {
  t.forEach((r) => {
    r.isAlignmentAuxiliary && e.remove(r);
  });
}, T6 = (e) => {
  e.forEach((t) => t.setSelected(!1));
};
function Mv(e) {
  const t = e.target.canvas;
  if (!t) return;
  const r = t.getActiveObject();
  if (!r || !t.positionBeforeTransform) return;
  const o = t.getScenePoint(e.e), s = t.getObjects("Track", "Helper").find((a) => {
    const u = a.getBoundingRect();
    return o.x >= u.left && o.x <= u.left + u.width && o.y >= u.top && o.y <= u.top + u.height;
  });
  if (e.action === "resizing") {
    const a = (te.trackToItemsMap[te.originTrack.id] || []).filter((l) => l !== r);
    r.setCoords();
    const u = Ma(
      a,
      r.getBoundingRect()
    );
    return t.fire("track-items:resized", {
      trackId: te.originTrack.id,
      trackItemIds: [r.id],
      isOverlapped: !!u
    }), !1;
  }
  if (!s)
    return r && (r?.set(t.positionBeforeTransform), r?.setCoords()), !1;
  if (s instanceof Wi) {
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
    const u = {
      isSecondaryOverlapped: !1,
      secondaryTracks: te.secondaryTracks,
      primaryTracks: te.primaryTracks,
      primaryPositions: {
        trackIndex: a,
        trackId: t.trackIdAfterTransform,
        positions: t.positionAfterTransform
      }
    };
    R6(u);
  } else if (s instanceof Kn) {
    const a = {
      isSecondaryOverlapped: k6(),
      secondaryTracks: te.secondaryTracks,
      primaryTracks: te.primaryTracks,
      primaryPositions: {
        trackId: t.trackIdAfterTransform,
        positions: t.positionAfterTransform
      }
    };
    I6(a);
  }
}
const I6 = (e) => {
  te.canvas && te.canvas.fire("track-items:moved", e);
};
function k6() {
  const e = A6();
  return Object.keys(e).some((t) => {
    const r = te.trackToItemsMap[t], o = e[t].objects;
    return r?.length ? r.filter((s) => !o.includes(s)).some(
      (s) => Ma(o, s.getBoundingRect())
    ) : !0;
  });
}
function A6() {
  const [e] = te.primaryMovingObjects, t = e.id, o = te.canvas.positionAfterTransform[t].top - e.getBoundingRect().top, s = {};
  return te.secondaryMovingObjects.forEach((a) => {
    const u = a.getBoundingRect().top + o, l = te.trackTopToIdMap[u], d = zu(
      te.trackTops,
      te.originTrack.top,
      u
    );
    s[l] ? s[l].objects.push(a) : s[l] = {
      objects: [a],
      index: d
    };
  }), s;
}
const R6 = (e) => {
  te.canvas && te.canvas.fire("track:create", e);
};
function Ma(e, t) {
  return e.find((r) => {
    const o = r.getBoundingRect();
    return t.left < o.left + o.width && t.left + t.width > o.left && t.top < o.top + o.height && t.top + t.height > o.top;
  });
}
const P6 = (e) => {
  e.on("object:modified", Pv), e.on("object:modified", Mv);
}, M6 = (e) => {
  e.off("object:modified", Pv), e.off("object:modified", Mv);
};
function O6(e, t) {
  e.remove(...t), t.length = 0;
}
function Ov() {
  O6(this, te.placeholderMovingObjects);
}
function Nv(e) {
  const t = this.height < this.bounding.height, r = this.width < this.bounding.width;
  if (!t && !r) return;
  const o = this.viewportTransform;
  let s = o[4], a = o[5];
  const u = 2;
  e.e.shiftKey ? s = o[4] - e.e.deltaY * u : (t && (a = o[5] - e.e.deltaY * u), s = o[4] - e.e.deltaX * u), this.setViewportPos(s, a);
}
const N6 = (e) => {
  e.on("mouse:wheel", Nv), e.on("mouse:up", Ov.bind(e));
}, j6 = (e) => {
  e.off("mouse:wheel", Nv), e.off("mouse:up", Ov.bind(e));
};
function jv(e) {
  const t = this;
  if (!t) return;
  const r = t.getScenePoint(e.e), o = t.getObjects("Helper", "Track");
  te.draggingOverTrack = o.find((p) => {
    const m = p.getBoundingRect();
    return r.x >= m.left && r.x <= m.left + m.width && r.y >= m.top && r.y <= m.top + m.height;
  }) ?? null, o.forEach((p) => {
    if (Oh(p)) {
      const m = te.draggingOverTrack;
      p.setSelected(p === m);
    }
  }), te.isPointerOverHelperTrack = Oh(
    te.draggingOverTrack
  ), t.getObjects();
  const s = e.target;
  s.getBoundingRect(), s.setCoords();
  const a = [
    s,
    ...t.getActiveObjects(),
    ...t.getObjects("Track", "Helper", "Transition", "Placeholder")
  ], u = D6(a, t), l = F6(s);
  L6(
    u,
    l
  ).forEach((p) => {
    p.orientation === "V" ? s.left = p.lineGuide + p.offset : s.top = p.lineGuide + p.offset;
  });
}
const D6 = (e, t) => {
  const r = [], o = [];
  return t.getObjects().filter((s) => s.visible).forEach((s) => {
    if (e.some(
      (l) => l.id === s.id
    ) || s.isAlignmentAuxiliary) return;
    const u = s.getBoundingRect();
    r.push(
      Mh(
        u.left,
        u.width,
        u.top,
        u.height
      )
    ), o.push(
      Mh(
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
}, Mh = (e, t, r, o) => [e, e + t].map((s) => ({
  val: s,
  start: r,
  end: r + o
})), L6 = (e, t) => {
  const r = [], o = [];
  e.vertical.forEach((d) => {
    t.vertical.forEach((p) => {
      const m = Math.abs(d.val - p.guide);
      m < 10 && r.push({
        lineGuide: d.val,
        diff: m,
        orientation: "V",
        snap: p.snap,
        offset: p.offset,
        targetDim: {
          start: d.start,
          end: d.end
        }
      });
    });
  }), e.horizontal.forEach((d) => {
    t.horizontal.forEach((p) => {
      const m = Math.abs(d.val - p.guide);
      m < 10 && o.push({
        lineGuide: d.val,
        diff: m,
        orientation: "H",
        snap: p.snap,
        offset: p.offset,
        targetDim: {
          start: d.start,
          end: d.end
        }
      });
    });
  });
  const a = [], u = r.sort(
    (d, p) => d.diff - p.diff
  )[0], l = o.sort(
    (d, p) => d.diff - p.diff
  )[0];
  return u && a.push({
    lineGuide: u.lineGuide,
    offset: u.offset,
    orientation: "V",
    snap: u.snap,
    targetDim: u.targetDim
  }), l && a.push({
    lineGuide: l.lineGuide,
    offset: l.offset,
    orientation: "H",
    snap: l.snap,
    targetDim: l.targetDim
  }), a;
}, F6 = (e) => {
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
}, Oh = (e) => e instanceof Wi;
function $6(e) {
  e.opacity = te.isPointerOverHelperTrack ? 0 : 1;
}
const Dv = Y6((e) => {
  const t = e.target.canvas;
  if (G6(e), !te.draggingOverTrack) return;
  const r = te.placeholderMovingObjects.map(
    (a) => a.draggedObject
  ), o = (te.trackToItemsMap[te.draggingOverTrack.id] || []).filter((a) => !r.includes(a)), s = o.find(
    (a) => Ma(r, a.getBoundingRect())
  );
  te.placeholderMovingObjects.forEach((a) => {
    const u = a.draggedObject;
    u?.setCoords(), $6(a);
    const l = V6(
      u,
      o,
      s,
      te.placeholderMovingObjects.length > 1
    );
    t.trackIdAfterTransform = te.trackTopToIdMap[l.top], t.positionAfterTransform[u?.id] = {
      top: l.top,
      left: l.left
    }, a.left = l.left, a.top = l.top;
  });
}, 5), V6 = (e, t, r, o) => !z6(e) || o && r ? Lv(e) : r ? U6(e, r, t) : B6(e), z6 = (e) => te.draggingOverTrack ? te.draggingOverTrack.accepts?.includes(e.type) ?? !1 : !1, Lv = (e) => ({
  top: te.objectInitialPositions[e.id].top,
  left: te.objectInitialPositions[e.id].left
}), U6 = (e, t, r) => {
  const o = H6(e, t);
  return !W6(r, e, o) || te.activeObjects.length !== 1 ? Lv(e) : {
    left: o,
    top: t.top
  };
}, H6 = (e, t) => {
  const r = e.left + e.width / 2, o = t.left + t.width / 2;
  return r < o ? t.left - e.width : t.left + t.width;
}, W6 = (e, t, r) => !(r < 0 || Ma(e, {
  ...t.getBoundingRect(),
  left: r
})), B6 = (e) => ({
  left: e.getBoundingRect().left,
  top: te.draggingOverTrack?.top ?? 0
});
function Y6(e, t) {
  let r = null;
  return function(...o) {
    const s = Date.now();
    (r === null || s - r >= t) && (r = s, e(...o));
  };
}
function G6(e) {
  const t = e.target, r = t.canvas, o = t.top, s = -t.height * 0.75, a = r.height + t.height * 0.75;
  t.top = Math.min(Math.max(o, s), a - t.height);
  const u = t.left;
  t.left = Math.max(u, 0);
}
const q6 = (e) => {
  e.on("object:moving", jv.bind(e)), e.on("object:moving", Dv);
}, X6 = (e) => {
  e.off("object:moving", jv.bind(e)), e.off("object:moving", Dv);
};
function Fv() {
  const e = this, t = e.getActiveObject(), r = e.getActiveObjects().map((o) => o.id);
  t instanceof Xu ? (t.borderColor = "rgba(0, 216, 214, 0.75)", t.hasControls = !1, t.hoverCursor = "default", t.borderScaleFactor = 1, t.padding = 0, t.getObjects().forEach((o) => {
    o.setSelected(!0);
  })) : t?.setSelected(!0), this.setActiveIds(r);
}
function $v(e) {
  const t = this, r = t.getActiveObject();
  r instanceof Xu && (r.borderColor = "transparent", r.hasControls = !1, r.hoverCursor = "default"), e.selected.forEach((s) => {
    s.setSelected(!0);
  }), e.deselected.forEach((s) => {
    s.setSelected(!1);
  });
  const o = t.getActiveObjects().map((s) => s.id);
  this.setActiveIds(o);
}
function Vv(e) {
  this.getObjects().forEach((r) => {
    r.isSelected && (r.isSelected = !1);
  }), e.deselected.forEach((r) => {
    r.setSelected(!1);
  });
  const t = this.getActiveObjects().map((r) => r.id);
  this.setActiveIds(t);
}
const K6 = (e) => {
  e.on("selection:created", Fv), e.on("selection:updated", $v), e.on("selection:cleared", Vv);
}, Z6 = (e) => {
  e.off("selection:created", Fv), e.off("selection:updated", $v), e.off("selection:cleared", Vv);
};
let zv, Uv, Hv;
const J6 = (e) => {
  const { state: t } = e;
  zv = t.subscribeToActiveIds(({ activeIds: r }) => {
    if (r.length === 1) {
      const o = r[0], { trackItemIds: s, trackItemsMap: a } = t.getState();
      s.forEach((u) => {
        a[u].type;
      }), e.selectTrackItemByIds([o]);
    } else
      e.selectTrackItemByIds(r);
  }), Uv = t.subscribeToHistory((r) => {
    const { tracks: o, trackItemsMap: s, trackItemIds: a, trackItemDetailsMap: u } = r;
    e.tracks = o, e.trackItemsMap = s, e.trackItemIds = a, e.trackItemDetailsMap = u, e.renderTracks(), e.updateTrackItemsToHistory(), e.alignItemsToTrack(), e.calcBounding(), e.updateTransitions(), e.duration = Yr(e.trackItemsMap);
  }), Hv = t.subscribeToAddOrRemoveItems(() => {
    const r = e.getTrackItems().map((l) => l.id), { trackItemIds: o, trackItemsMap: s, trackItemDetailsMap: a } = t.getState(), u = [];
    r.forEach((l) => {
      o.includes(l) || u.push(l);
    }), e.deleteTrackItemById(u), e.tracks = t.getState().tracks, e.trackItemsMap = s, e.trackItemDetailsMap = a, o.forEach((l) => {
      if (!r.includes(l)) {
        const d = {
          ...s[l],
          details: {
            ...a[l].details
          }
        };
        e.addTrackItem(d);
      }
    }), e.renderTracks(), e.alignItemsToTrack(), o.forEach((l) => {
      e.updateTrackItemCoords(l);
    }), e.updateTransitions(), e.updateTrackCoords();
  });
}, Q6 = (e) => {
  zv.unsubscribe(), Uv.unsubscribe(), Hv.unsubscribe();
};
function Wv(e) {
  const {
    isSecondaryOverlapped: t,
    secondaryTracks: r,
    primaryTracks: o,
    primaryPositions: s
  } = e, { trackId: a, positions: u } = s, l = this.tracks.findIndex((S) => S.id === a), d = cg(
    Object.keys(r).map(
      (S) => r[S].objects.map((_) => _.id)
    )
  ), p = qs(this.tracks, [
    ...Object.keys(u),
    ...d
  ]);
  Object.keys(o).forEach((S) => {
    this.pauseEventListeners();
    const { objects: _ } = o[S];
    _.forEach((C) => {
      const A = u[C.id];
      C.left = A.left;
    }), this.resumeEventListeners();
    const T = p.find((C) => C.id === a);
    T && T.items.push(...Object.keys(u)), this.tracks = p;
  });
  const m = this.tracks[l], g = [];
  Object.keys(r).forEach((S) => {
    const { objects: _, index: T } = r[S], C = _.map((O) => O.id), [A] = C, k = this.trackItemsMap[A];
    if (t) {
      const O = {
        id: It(),
        items: C,
        type: k.type,
        accepts: this.acceptsMap?.[k.type],
        tempIndex: T
      };
      g.push(O);
    } else {
      const O = p[l + T];
      O && O.items.push(...C), this.tracks = p;
    }
  });
  const v = ug(
    m,
    g
  );
  v.length && p.splice(l, 1, ...v), this.tracks = p, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
function Bv({
  trackItemIds: e,
  isOverlapped: t
}) {
  const [r] = e;
  if (r) {
    if (!this.getObjects("Transition").find(
      (o) => o.id === r
    )) {
      const o = this.tracks.find((s) => s.items.includes(r));
      if (t) {
        const s = eA(this.tracks, e), a = {
          id: It(),
          items: [r],
          type: o?.type,
          accepts: o?.accepts
        }, u = this.tracks.findIndex((l) => l.id === o?.id);
        s.splice(u, 0, a), this.tracks = s;
      }
    }
    this.renderTracks(), this.alignItemsToTrack(), this.alignTransitionsToTrack(), this.updateTransitions(), this.updateTrackItemsPosition(), this.updateState({ updateHistory: !0, kind: "update" });
  }
}
function eA(e, t) {
  return e.map((r) => ({
    ...r,
    items: r.items.filter(
      (o) => !t.includes(o)
    )
  }));
}
function Yv(e) {
  const {
    secondaryTracks: t,
    primaryTracks: r,
    primaryPositions: o
  } = e, { positions: s, trackIndex: a } = o, u = a === -1 ? this.tracks.length : a, [l] = Object.keys(r), d = this.tracks.find((T) => T.id == l), p = r[l], m = {
    id: It(),
    items: p.objects.map((T) => T.id),
    type: d?.type,
    accepts: d?.accepts
  }, g = cg(
    Object.keys(t).map(
      (T) => t[T].objects.map((C) => C.id)
    )
  ), v = qs(this.tracks, [
    ...Object.keys(s),
    ...g
  ]), S = [];
  Object.keys(t).forEach((T) => {
    const { objects: C, index: A } = t[T], k = this.tracks.find(
      ($) => $.id == T
    ), O = C.map(($) => $.id), N = {
      id: It(),
      items: O,
      type: k?.type,
      accepts: k?.accepts,
      tempIndex: A
    };
    S.push(N);
  });
  const _ = ug(m, S);
  _.length && v.splice(u, 0, ..._), this.tracks = v, this.renderTracks(), this.alignItemsToTrack(), this.updateTrackItemsPosition(), this.updateTransitions(), this.updateState({ updateHistory: !0, kind: "update" });
}
const tA = (e) => {
  e.on("track:create", Yv.bind(e)), e.on("track-items:resized", Bv.bind(e)), e.on("track-items:moved", Wv.bind(e));
}, rA = (e) => {
  e.off("track:create", Yv.bind(e)), e.off("track-items:resized", Bv.bind(e)), e.off("track-items:moved", Wv.bind(e));
}, nA = (e) => {
  E6(e), P6(e), N6(e), q6(e), tA(e), K6(e), x4(e), J6(e);
}, oA = (e) => {
  _6(e), M6(e), j6(e), X6(e), rA(e), Z6(e), E4(e), Q6();
}, iA = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"]
}, sA = ["video", "image", "audio", "text"];
let zl = class extends cE {
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
    Or.ownDefaults.borderColor = "transparent", Or.ownDefaults.cornerColor = "white", Or.ownDefaults.cornerStrokeColor = "transparent", Or.ownDefaults.strokeWidth = 0, Or.ownDefaults.borderOpacityWhenMoving = 1, Or.ownDefaults.borderScaleFactor = 1, Or.ownDefaults.cornerSize = 8, Or.ownDefaults.cornerStyle = "rect", Or.ownDefaults.centeredScaling = !1, Or.ownDefaults.centeredRotation = !0, Or.ownDefaults.transparentCorners = !1;
  }
  constructor(t, r) {
    super(t, r), this.bounding = r.bounding || {
      width: r.width || 0,
      height: r.height || 0
    }, this.spacing = {
      left: 16,
      right: 80,
      ...r.spacing
    };
    const o = this.viewportTransform;
    o[4] = this.spacing.left, this.tScale = r.tScale || 1 / 300, this.store = r.store, this.state = r.state, this.scale = r.scale, this.onScroll = r.onScroll, this.acceptsMap = this.createAcceptsItemMap(r.acceptsMap), this.sizesMap = l4(r.sizesMap), this.setupFabricDefaults(), this.initEventListeners();
  }
  createAcceptsItemMap(t = iA) {
    const r = {};
    return Object.keys(t).forEach((o) => {
      const s = t[o];
      r[o] = s.includes("*") ? sA : s;
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
  setActiveIds(t) {
    this.activeIds = t, this.getObjects("Transition").some(
      (o) => t.includes(o.id)
    ) || (this.state?.updateState({
      activeIds: Ze.cloneDeep(this.activeIds)
    }), Be.dispatch(l2, {
      payload: {
        activeIds: this.activeIds
      }
    }));
  }
  purge() {
    oA(this), this.dispose();
  }
  static registerItems(t) {
    Object.keys(t).forEach((r) => {
      Wt.setClass(t[r], r);
    });
  }
  initEventListeners() {
    nA(this);
  }
  getUpdatedState() {
    const t = Yr(this.trackItemsMap);
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
    const t = Yr(this.trackItemsMap);
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
    const r = this.getUpdatedState();
    this.state.updateState(r, t);
  }
  updateState(t) {
    this.updateTracksState(), this.updateTrackItemsState(), this.requestRenderAll(), this.calcBounding(), this.updateTrackCoords();
    const r = this.getUpdatedState();
    this.state.updateState(r, t);
  }
  scrollTo({
    scrollLeft: t,
    scrollTop: r
  }) {
    const o = [...this.viewportTransform];
    let s = !1;
    if (typeof t == "number" && (o[4] = -t + this.spacing.left, s = !0), typeof r == "number" && (o[5] = -r, s = !0), s) {
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
      (r, o) => {
        const { left: s, top: a, width: u, height: l } = o.getBoundingRect();
        return {
          left: Math.min(r.left, s),
          top: Math.min(r.top, a),
          width: Math.max(r.width, s + u),
          height: Math.max(r.height, a + l)
        };
      },
      { left: 1 / 0, top: 1 / 0, width: this.width, height: 0 }
    );
    this.bounding = t, Be.dispatch(eg, {
      payload: { bounding: t }
    });
  }
  setScale(t) {
    this.pauseEventListeners(), this.tScale = t.zoom, this.scale = t;
    const r = this.getState();
    this.getObjects("Video", "Image", "Text", "Audio").forEach(
      (o) => {
        const s = r.trackItemsMap[o.id], { from: a, to: u } = s.display, l = yt(a, this.tScale), d = yt(
          u - a,
          this.tScale,
          o.playbackRate
        );
        o.set({ left: l, width: d, tScale: t.zoom }), o.setCoords();
      }
    ), this.requestRenderAll(), this.calcBounding(), this.updateTrackCoords(), this.updateTransitions(!1), this.resumeEventListeners(), this.notify();
  }
  setViewportPos(t, r) {
    const o = this.getViewportPos(t, r), s = this.viewportTransform;
    s[4] = o.x, s[5] = o.y, this.requestRenderAll(), this.setActiveTrackItemCoords();
    const a = this.onScroll;
    a && a.call(this, {
      scrollTop: o.y,
      scrollLeft: o.x - this.spacing.left
    });
  }
  getViewportPos(t, r) {
    const o = this.bounding.width - 100 >= this.width ? this.spacing.right : 0, s = this.width - this.bounding.width - o, a = this.spacing.left, u = Math.max(s, Math.min(t, a));
    if (this.bounding.height < this.height) return { x: u, y: 0 };
    const l = this.height - this.bounding.height - 40, d = Math.max(l, Math.min(r, 0));
    return { x: u, y: d };
  }
};
q5(zl, [
  E5,
  g4,
  y4,
  S4
]);
function aA(e) {
  const t = Be.subject.pipe(Yn(({ key: r }) => r.startsWith(f2))).subscribe((r) => {
    if (r.key === Jm) {
      const o = r.value;
      e.setScale(o?.payload.scale ?? void 0);
    }
  });
  return {
    unsubscribe: () => {
      t.unsubscribe();
    }
  };
}
zl.registerItems({
  Text: bv,
  Image: p4,
  Video: f4,
  Audio: d4,
  Track: h4,
  Helper: m4
});
const $8 = ({ stateManager: e }) => {
  const t = f.useRef(!1), [r, o] = f.useState(0), s = f.useRef(null), a = f.useRef(null), u = f.useRef(null), l = f.useRef(null), d = f.useRef(null), [p, m] = f.useState({
    width: 0,
    height: 0
  }), [g, v] = f.useState({
    width: 0,
    height: 0
  }), {
    scale: S,
    playerRef: _,
    fps: T,
    setState: C,
    timeline: A
  } = Xn(), { setTimeline: k } = Xn(), O = ul(_ ?? void 0), N = (U) => {
    d.current && l.current && (l.current.scrollTop = -U.scrollTop, d.current.scrollLeft = -U.scrollLeft, o(-U.scrollLeft));
  };
  f.useEffect(() => {
    const U = yt(O / T * 1e3, S.zoom), Y = a.current?.getBoundingClientRect().x + a.current?.clientWidth;
    if (U - r + 40 >= Y) {
      const Z = d.current?.clientWidth, W = d.current?.scrollWidth, Q = d.current?.scrollLeft, ye = (W - (Z + Q)) / Z;
      ye >= 0 && (ye > 1 ? d.current?.scrollTo({
        left: Q + Z
      }) : d.current?.scrollTo({
        left: W - Z
      }));
    }
  }, [O]), f.useEffect(() => {
    const U = a.current, Y = s.current;
    if (!U || !Y) return;
    const H = Y.clientWidth, Z = Y.clientHeight, W = new zl(U, {
      width: H,
      height: Z,
      bounding: {
        width: H,
        height: 0
      },
      selectionColor: "rgba(0, 216, 214,0.1)",
      selectionBorderColor: "rgba(0, 216, 214,1.0)",
      onScroll: N,
      // tScale: scale.zoom,
      // store,
      state: e,
      scale: S,
      spacing: {
        left: cl,
        right: Fp
      }
    }), Q = aA(W);
    u.current = W, m({
      width: H,
      height: Z
    }), v({
      width: H,
      height: 0
    }), k(W);
    const ue = e.subscribeToSize(
      (L) => {
        C(L);
      }
    ), ye = e.subscribeToScale((L) => {
      C(L);
    }), ee = e.subscribeToTracks(
      (L) => {
        C(L);
      }
    ), me = e.subscribeToDuration(
      (L) => {
        C(L);
      }
    ), xe = e.subscribeToUpdateTrackItem(() => {
      const L = e.getState();
      C({
        duration: L.duration,
        trackItemsMap: L.trackItemsMap
      });
    }), re = e.subscribeToAddOrRemoveItems(
      () => {
        const L = e.getState();
        C({
          trackItemDetailsMap: L.trackItemDetailsMap,
          trackItemsMap: L.trackItemsMap,
          trackItemIds: L.trackItemIds,
          tracks: L.tracks
        });
      }
    ), R = e.subscribeToUpdateItemDetails(() => {
      const L = e.getState();
      C({
        trackItemDetailsMap: L.trackItemDetailsMap
      });
    });
    return () => {
      Q.unsubscribe(), W.purge(), ye.unsubscribe(), ee.unsubscribe(), me.unsubscribe(), re.unsubscribe(), xe.unsubscribe(), R.unsubscribe(), ue.unsubscribe();
    };
  }, []), f.useEffect(() => {
    const Y = Be.subject.pipe(
      Yn(({ key: H }) => H.startsWith(h2))
    ).subscribe((H) => {
      if (H.key === eg) {
        const Z = H.value?.payload?.bounding;
        Z && v({
          width: Z.width,
          height: Z.height
        });
      }
    });
    return () => {
      Y.unsubscribe();
    };
  }, []);
  const $ = (U) => {
    const Y = U.currentTarget.scrollLeft;
    t.current && u.current.scrollTo({ scrollLeft: Y }), o(Y);
  }, V = (U) => {
    const Y = U.currentTarget.scrollTop;
    t.current && u.current.scrollTo({ scrollTop: Y });
  };
  f.useEffect(() => {
    const U = d.current?.scrollWidth;
    if (!U || !A) return;
    const Y = A.width;
    U < Y + r && A.scrollTo({ scrollLeft: U - Y });
  }, [S]);
  const G = (U) => {
    if (!u.current) return;
    const H = qn(U, S.zoom);
    _?.current?.seekTo(H * T / 1e3);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "relative overflow-hidden h-80 w-full", children: [
    /* @__PURE__ */ y.jsx(gC, {}),
    /* @__PURE__ */ y.jsx(
      x5,
      {
        onClick: G,
        scrollLeft: r
      }
    ),
    /* @__PURE__ */ y.jsx(S5, { scrollLeft: r }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ y.jsx("div", { className: "relative w-10 flex-none" }),
      /* @__PURE__ */ y.jsxs("div", { className: "relative h-[230px] flex-1", children: [
        /* @__PURE__ */ y.jsx(
          "div",
          {
            ref: s,
            className: "absolute top-0 h-[230px] w-full text-sm text-white ",
            children: /* @__PURE__ */ y.jsx(
              "canvas",
              {
                ref: a,
                id: "designcombo-timeline-canvas"
              }
            )
          }
        ),
        /* @__PURE__ */ y.jsxs(
          Ys,
          {
            type: "always",
            style: {
              position: "absolute",
              width: "calc(100vw - 40px)",
              height: "10px"
            },
            className: "ScrollAreaRootH",
            children: [
              /* @__PURE__ */ y.jsx(
                gu,
                {
                  onScroll: $,
                  className: "ScrollAreaViewport",
                  id: "viewportH",
                  ref: d,
                  children: /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      style: {
                        width: g.width > p.width ? g.width + Fp : g.width
                      },
                      className: "pointer-events-none h-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ y.jsx(
                Ap,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "horizontal",
                  children: /* @__PURE__ */ y.jsx(
                    Rp,
                    {
                      className: "ScrollAreaThumb",
                      onMouseDown: () => {
                        t.current = !0;
                      },
                      onMouseUp: () => {
                        t.current = !1;
                      }
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ y.jsxs(
          Ys,
          {
            type: "always",
            style: {
              position: "absolute",
              height: "230px",
              width: "10px"
            },
            className: "ScrollAreaRootV",
            children: [
              /* @__PURE__ */ y.jsx(
                gu,
                {
                  onScroll: V,
                  className: "ScrollAreaViewport",
                  ref: l,
                  children: /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      style: {
                        height: g.height > p.height ? g.height + 40 : p.height
                      },
                      className: "pointer-events-none w-[10px]"
                    }
                  )
                }
              ),
              /* @__PURE__ */ y.jsx(
                Ap,
                {
                  className: "ScrollAreaScrollbar",
                  orientation: "vertical",
                  children: /* @__PURE__ */ y.jsx(
                    Rp,
                    {
                      className: "ScrollAreaThumb",
                      onMouseDown: () => {
                        t.current = !0;
                      },
                      onMouseUp: () => {
                        t.current = !1;
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
}, cA = { Date: !0, RegExp: !0, String: !0, Number: !0 };
function Gv(e, t, r = { cyclesFix: !0 }, o = []) {
  let s = [];
  const a = Array.isArray(e);
  for (const l in e) {
    const d = e[l], p = a ? +l : l;
    if (!(l in t)) {
      s.push({
        type: "REMOVE",
        path: [p],
        oldValue: e[l]
      });
      continue;
    }
    const m = t[l], g = typeof d == "object" && typeof m == "object" && Array.isArray(d) === Array.isArray(m);
    d && m && g && !cA[Object.getPrototypeOf(d)?.constructor?.name] && (!r.cyclesFix || !o.includes(d)) ? s.push.apply(s, Gv(d, m, r, r.cyclesFix ? o.concat([d]) : []).map((v) => (v.path.unshift(p), v))) : d !== m && // treat NaN values as equivalent
    !(Number.isNaN(d) && Number.isNaN(m)) && !(g && (isNaN(d) ? d + "" == m + "" : +d == +m)) && s.push({
      path: [p],
      type: "CHANGE",
      value: m,
      oldValue: d
    });
  }
  const u = Array.isArray(t);
  for (const l in t)
    l in e || s.push({
      type: "CREATE",
      path: [u ? +l : l],
      value: t[l]
    });
  return s;
}
var Ul = Symbol.for("immer-nothing"), ki = Symbol.for("immer-draftable"), gr = Symbol.for("immer-state"), qv = process.env.NODE_ENV !== "production" ? [
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
function Tt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = qv[e], o = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Jn = Object.getPrototypeOf;
function Qn(e) {
  return !!e && !!e[gr];
}
function In(e) {
  return e ? Xv(e) || Array.isArray(e) || !!e[ki] || !!e.constructor?.[ki] || Yi(e) || Gi(e) : !1;
}
var uA = Object.prototype.constructor.toString();
function Xv(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Jn(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === uA;
}
function Oi(e, t) {
  eo(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, o) => t(o, r, e));
}
function eo(e) {
  const t = e[gr];
  return t ? t.type_ : Array.isArray(e) ? 1 : Yi(e) ? 2 : Gi(e) ? 3 : 0;
}
function Ni(e, t) {
  return eo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ou(e, t) {
  return eo(e) === 2 ? e.get(t) : e[t];
}
function Kv(e, t, r) {
  const o = eo(e);
  o === 2 ? e.set(t, r) : o === 3 ? e.add(r) : e[t] = r;
}
function lA(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yi(e) {
  return e instanceof Map;
}
function Gi(e) {
  return e instanceof Set;
}
function Bn(e) {
  return e.copy_ || e.base_;
}
function Uu(e, t) {
  if (Yi(e))
    return new Map(e);
  if (Gi(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Xv(e);
  if (t === !0 || t === "class_only" && !r) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[gr];
    let s = Reflect.ownKeys(o);
    for (let a = 0; a < s.length; a++) {
      const u = s[a], l = o[u];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (o[u] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[u]
      });
    }
    return Object.create(Jn(e), o);
  } else {
    const o = Jn(e);
    if (o !== null && r)
      return { ...e };
    const s = Object.create(o);
    return Object.assign(s, e);
  }
}
function Hl(e, t = !1) {
  return Oa(e) || Qn(e) || !In(e) || (eo(e) > 1 && (e.set = e.add = e.clear = e.delete = dA), Object.freeze(e), t && Object.entries(e).forEach(([r, o]) => Hl(o, !0))), e;
}
function dA() {
  Tt(2);
}
function Oa(e) {
  return Object.isFrozen(e);
}
var Hu = {};
function to(e) {
  const t = Hu[e];
  return t || Tt(0, e), t;
}
function fA(e, t) {
  Hu[e] || (Hu[e] = t);
}
var ji;
function Zv() {
  return ji;
}
function pA(e, t) {
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
function Nh(e, t) {
  t && (to("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Wu(e) {
  Bu(e), e.drafts_.forEach(hA), e.drafts_ = null;
}
function Bu(e) {
  e === ji && (ji = e.parent_);
}
function jh(e) {
  return ji = pA(ji, e);
}
function hA(e) {
  const t = e[gr];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Dh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[gr].modified_ && (Wu(t), Tt(4)), In(e) && (e = ia(t, e), t.parent_ || sa(t, e)), t.patches_ && to("Patches").generateReplacementPatches_(
    r[gr].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ia(t, r, []), Wu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ul ? e : void 0;
}
function ia(e, t, r) {
  if (Oa(t))
    return t;
  const o = t[gr];
  if (!o)
    return Oi(
      t,
      (s, a) => Lh(e, o, t, s, a, r)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return sa(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const s = o.copy_;
    let a = s, u = !1;
    o.type_ === 3 && (a = new Set(s), s.clear(), u = !0), Oi(
      a,
      (l, d) => Lh(e, o, s, l, d, r, u)
    ), sa(e, s, !1), r && e.patches_ && to("Patches").generatePatches_(
      o,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Lh(e, t, r, o, s, a, u) {
  if (process.env.NODE_ENV !== "production" && s === r && Tt(5), Qn(s)) {
    const l = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ni(t.assigned_, o) ? a.concat(o) : void 0, d = ia(e, s, l);
    if (Kv(r, o, d), Qn(d))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else u && r.add(s);
  if (In(s) && !Oa(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ia(e, s), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(r, o) && sa(e, s);
  }
}
function sa(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Hl(t, r);
}
function mA(e, t) {
  const r = Array.isArray(e), o = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Zv(),
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
  let s = o, a = Wl;
  r && (s = [o], a = Di);
  const { revoke: u, proxy: l } = Proxy.revocable(s, a);
  return o.draft_ = l, o.revoke_ = u, l;
}
var Wl = {
  get(e, t) {
    if (t === gr)
      return e;
    const r = Bn(e);
    if (!Ni(r, t))
      return gA(e, r, t);
    const o = r[t];
    return e.finalized_ || !In(o) ? o : o === iu(e.base_, t) ? (su(e), e.copy_[t] = Gu(o, e)) : o;
  },
  has(e, t) {
    return t in Bn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Bn(e));
  },
  set(e, t, r) {
    const o = Jv(Bn(e), t);
    if (o?.set)
      return o.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const s = iu(Bn(e), t), a = s?.[gr];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (lA(r, s) && (r !== void 0 || Ni(e.base_, t)))
        return !0;
      su(e), Yu(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return iu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, su(e), Yu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Bn(e), o = Reflect.getOwnPropertyDescriptor(r, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Tt(11);
  },
  getPrototypeOf(e) {
    return Jn(e.base_);
  },
  setPrototypeOf() {
    Tt(12);
  }
}, Di = {};
Oi(Wl, (e, t) => {
  Di[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Di.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Tt(13), Di.set.call(this, e, t, void 0);
};
Di.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Tt(14), Wl.set.call(this, e[0], t, r, e[0]);
};
function iu(e, t) {
  const r = e[gr];
  return (r ? Bn(r) : e)[t];
}
function gA(e, t, r) {
  const o = Jv(t, r);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    o.get?.call(e.draft_)
  ) : void 0;
}
function Jv(e, t) {
  if (!(t in e))
    return;
  let r = Jn(e);
  for (; r; ) {
    const o = Object.getOwnPropertyDescriptor(r, t);
    if (o)
      return o;
    r = Jn(r);
  }
}
function Yu(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Yu(e.parent_));
}
function su(e) {
  e.copy_ || (e.copy_ = Uu(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var vA = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, o) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const u = this;
        return function(d = a, ...p) {
          return u.produce(d, (m) => r.call(this, m, ...p));
        };
      }
      typeof r != "function" && Tt(6), o !== void 0 && typeof o != "function" && Tt(7);
      let s;
      if (In(t)) {
        const a = jh(this), u = Gu(t, void 0);
        let l = !0;
        try {
          s = r(u), l = !1;
        } finally {
          l ? Wu(a) : Bu(a);
        }
        return Nh(a, o), Dh(s, a);
      } else if (!t || typeof t != "object") {
        if (s = r(t), s === void 0 && (s = t), s === Ul && (s = void 0), this.autoFreeze_ && Hl(s, !0), o) {
          const a = [], u = [];
          to("Patches").generateReplacementPatches_(t, s, a, u), o(a, u);
        }
        return s;
      } else
        Tt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (u, ...l) => this.produceWithPatches(u, (d) => t(d, ...l));
      let o, s;
      return [this.produce(t, r, (u, l) => {
        o = u, s = l;
      }), o, s];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    In(e) || Tt(8), Qn(e) && (e = yA(e));
    const t = jh(this), r = Gu(e, void 0);
    return r[gr].isManual_ = !0, Bu(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[gr];
    (!r || !r.isManual_) && Tt(9);
    const { scope_: o } = r;
    return Nh(o, t), Dh(void 0, o);
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
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const s = t[r];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const o = to("Patches").applyPatches_;
    return Qn(e) ? o(e, t) : this.produce(
      e,
      (s) => o(s, t)
    );
  }
};
function Gu(e, t) {
  const r = Yi(e) ? to("MapSet").proxyMap_(e, t) : Gi(e) ? to("MapSet").proxySet_(e, t) : mA(e, t);
  return (t ? t.scope_ : Zv()).drafts_.push(r), r;
}
function yA(e) {
  return Qn(e) || Tt(10, e), Qv(e);
}
function Qv(e) {
  if (!In(e) || Oa(e))
    return e;
  const t = e[gr];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Uu(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Uu(e, !0);
  return Oi(r, (o, s) => {
    Kv(r, o, Qv(s));
  }), t && (t.finalized_ = !1), r;
}
function Fh() {
  process.env.NODE_ENV !== "production" && qv.push(
    'Sets cannot have "replace" patches.',
    function(v) {
      return "Unsupported patch operation: " + v;
    },
    function(v) {
      return "Cannot apply patch, path doesn't resolve: " + v;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", r = "add", o = "remove";
  function s(v, S, _, T) {
    switch (v.type_) {
      case 0:
      case 2:
        return u(
          v,
          S,
          _,
          T
        );
      case 1:
        return a(v, S, _, T);
      case 3:
        return l(
          v,
          S,
          _,
          T
        );
    }
  }
  function a(v, S, _, T) {
    let { base_: C, assigned_: A } = v, k = v.copy_;
    k.length < C.length && ([C, k] = [k, C], [_, T] = [T, _]);
    for (let O = 0; O < C.length; O++)
      if (A[O] && k[O] !== C[O]) {
        const N = S.concat([O]);
        _.push({
          op: t,
          path: N,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: g(k[O])
        }), T.push({
          op: t,
          path: N,
          value: g(C[O])
        });
      }
    for (let O = C.length; O < k.length; O++) {
      const N = S.concat([O]);
      _.push({
        op: r,
        path: N,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: g(k[O])
      });
    }
    for (let O = k.length - 1; C.length <= O; --O) {
      const N = S.concat([O]);
      T.push({
        op: o,
        path: N
      });
    }
  }
  function u(v, S, _, T) {
    const { base_: C, copy_: A } = v;
    Oi(v.assigned_, (k, O) => {
      const N = ou(C, k), $ = ou(A, k), V = O ? Ni(C, k) ? t : r : o;
      if (N === $ && V === t)
        return;
      const G = S.concat(k);
      _.push(V === o ? { op: V, path: G } : { op: V, path: G, value: $ }), T.push(
        V === r ? { op: o, path: G } : V === o ? { op: r, path: G, value: g(N) } : { op: t, path: G, value: g(N) }
      );
    });
  }
  function l(v, S, _, T) {
    let { base_: C, copy_: A } = v, k = 0;
    C.forEach((O) => {
      if (!A.has(O)) {
        const N = S.concat([k]);
        _.push({
          op: o,
          path: N,
          value: O
        }), T.unshift({
          op: r,
          path: N,
          value: O
        });
      }
      k++;
    }), k = 0, A.forEach((O) => {
      if (!C.has(O)) {
        const N = S.concat([k]);
        _.push({
          op: r,
          path: N,
          value: O
        }), T.unshift({
          op: o,
          path: N,
          value: O
        });
      }
      k++;
    });
  }
  function d(v, S, _, T) {
    _.push({
      op: t,
      path: [],
      value: S === Ul ? void 0 : S
    }), T.push({
      op: t,
      path: [],
      value: v
    });
  }
  function p(v, S) {
    return S.forEach((_) => {
      const { path: T, op: C } = _;
      let A = v;
      for (let $ = 0; $ < T.length - 1; $++) {
        const V = eo(A);
        let G = T[$];
        typeof G != "string" && typeof G != "number" && (G = "" + G), (V === 0 || V === 1) && (G === "__proto__" || G === "constructor") && Tt(19), typeof A == "function" && G === "prototype" && Tt(19), A = ou(A, G), typeof A != "object" && Tt(18, T.join("/"));
      }
      const k = eo(A), O = m(_.value), N = T[T.length - 1];
      switch (C) {
        case t:
          switch (k) {
            case 2:
              return A.set(N, O);
            case 3:
              Tt(16);
            default:
              return A[N] = O;
          }
        case r:
          switch (k) {
            case 1:
              return N === "-" ? A.push(O) : A.splice(N, 0, O);
            case 2:
              return A.set(N, O);
            case 3:
              return A.add(O);
            default:
              return A[N] = O;
          }
        case o:
          switch (k) {
            case 1:
              return A.splice(N, 1);
            case 2:
              return A.delete(N);
            case 3:
              return A.delete(_.value);
            default:
              return delete A[N];
          }
        default:
          Tt(17, C);
      }
    }), v;
  }
  function m(v) {
    if (!In(v))
      return v;
    if (Array.isArray(v))
      return v.map(m);
    if (Yi(v))
      return new Map(
        Array.from(v.entries()).map(([_, T]) => [_, m(T)])
      );
    if (Gi(v))
      return new Set(Array.from(v).map(m));
    const S = Object.create(Jn(v));
    for (const _ in v)
      S[_] = m(v[_]);
    return Ni(v, ki) && (S[ki] = v[ki]), S;
  }
  function g(v) {
    return Qn(v) ? m(v) : v;
  }
  fA("Patches", {
    applyPatches_: p,
    generatePatches_: s,
    generateReplacementPatches_: d
  });
}
var vr = new vA(), bA = vr.produce;
vr.produceWithPatches.bind(
  vr
);
vr.setAutoFreeze.bind(vr);
vr.setUseStrictShallowCopy.bind(vr);
var wA = vr.applyPatches.bind(vr);
vr.createDraft.bind(vr);
vr.finishDraft.bind(vr);
function SA(e) {
  const t = e.value, r = [];
  if (t?.payload?.trackItemIds) {
    const o = t.payload.trackItemIds;
    r.push(o), this.updateState({ activeIds: r });
  }
  if (e.key === Gm) {
    const o = e.value?.payload.trackItemIds, s = Ze.cloneDeep(this.getState()), a = o?.length ? o : s.activeIds, u = s.trackItemIds.filter(
      (g) => !a.includes(g)
    ), l = Object.fromEntries(
      Object.entries(s.trackItemDetailsMap).filter(
        ([g]) => !a.includes(g)
      )
    ), d = e4(s.tracks, a), p = Object.fromEntries(
      Object.entries(s.trackItemsMap).filter(
        ([g]) => !a.includes(g)
      )
    ), m = Yr(p);
    this.updateState(
      {
        trackItemIds: u,
        trackItemDetailsMap: l,
        activeIds: [],
        trackItemsMap: p,
        tracks: d,
        duration: m
      },
      { updateHistory: !0, kind: "remove" }
    );
  }
  if (e.key === qm) {
    const o = Ze.cloneDeep(this.getState()), s = [], a = e.value?.payload.trackItemIds || o.activeIds;
    if (a.length === 0) return;
    a.forEach((l) => {
      const d = o.trackItemsMap[l], p = o.trackItemDetailsMap[l], m = It();
      s.push(m), o.trackItemsMap = {
        ...o.trackItemsMap,
        [m]: { ...Ze.cloneDeep(d), id: m }
      }, o.trackItemDetailsMap = {
        ...o.trackItemDetailsMap,
        [m]: { ...Ze.cloneDeep(p) }
      }, o.trackItemIds.push(m);
    });
    const u = o.tracks.map((l) => {
      const d = {
        ...l,
        id: It(),
        items: l.items.filter((p) => a.includes(p)).map((p) => {
          const m = a.indexOf(p);
          return s[m];
        })
      };
      return d.items.length ? d : null;
    }).filter(Boolean);
    o.tracks.unshift(...u), this.updateState(
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
  if (e.key === Xm) {
    const o = Ze.cloneDeep(this.getState()), s = e.value?.options.time;
    if (o.activeIds.length !== 1) return;
    const a = o.activeIds[0], u = o.trackItemsMap[a];
    if (s <= u.display.from || s >= u.display.to)
      return;
    const l = It(), d = {
      ...u,
      id: l,
      display: { from: s, to: u.display.to },
      trim: { from: s, to: u.display.to }
    };
    o.trackItemsMap[a].display.to = s, o.trackItemsMap[l] = d, o.trackItemDetailsMap[l] = o.trackItemDetailsMap[a], o.trackItemIds.push(l), o.tracks.forEach((p) => {
      p.items.includes(a) && p.items.push(l);
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
async function xA(e) {
  if (e.key === "scene:load") {
    const t = e.value?.payload, r = t.size, o = t.trackItemIds, s = t.trackItemsMap, a = t.trackItemDetailsMap;
    if (!o) return;
    const u = o?.map(async (d) => {
      try {
        const p = a[d], m = s[d];
        if (p.type === "text") {
          const g = await yv(
            { id: d, details: p.details, ...m },
            {
              size: r
            }
          ), { details: v, ...S } = g;
          a[d] = { type: "text", details: v }, s[d] = S;
        }
        return !0;
      } catch {
        return !1;
      }
    });
    await Promise.all(u);
    const l = Yr(s);
    this.updateState({
      ...t,
      trackItemsMap: s,
      duration: l
    });
  }
}
async function EA(e) {
  const t = Ze.cloneDeep(this.getState()), r = e.value?.options?.trackId, o = e.value?.options?.trackIndex;
  let s = [], a;
  if (e.key === Fi) {
    a = "video";
    const l = await r4(e.value?.payload, {
      size: t.size
    }), { details: d, ...p } = l;
    t.trackItemDetailsMap[p.id] = {
      type: a,
      details: d
    }, t.trackItemsMap[p.id] = p, t.trackItemIds.push(p.id), s = [p.id];
  }
  if (e.key === Vi) {
    a = "image";
    const l = await t4(e.value?.payload, {
      size: t.size
    }), { details: d, ...p } = l;
    t.trackItemDetailsMap[p.id] = {
      type: a,
      details: d
    }, t.trackItemsMap[p.id] = p, t.trackItemIds.push(p.id), s = [p.id];
  }
  if (e.key === $i) {
    a = "audio";
    const l = await n4(e.value?.payload), { details: d, ...p } = l;
    t.trackItemDetailsMap[p.id] = {
      type: a,
      details: d
    }, t.trackItemsMap[p.id] = p, t.trackItemIds.push(p.id), s = [p.id];
  }
  if (e.key === Ym) {
    a = "text";
    const { details: l, ...d } = await yv(
      e.value?.payload ?? void 0,
      {
        size: t.size
      }
    );
    t.trackItemDetailsMap[d.id] = { type: a, details: l }, t.trackItemsMap[d.id] = d, t.trackItemIds.push(d.id), s.push(d.id);
  }
  const u = _A(
    s,
    t.tracks,
    t.trackItemsMap,
    r,
    o
  );
  if (u.trackId)
    t.tracks.find((d) => d.id === u.trackId)?.items.push(...s);
  else if (u.trackIndex !== void 0) {
    const l = $h(a, s);
    t.tracks.splice(u.trackIndex, 0, l);
  } else {
    const l = $h(a, s);
    t.tracks.unshift(l);
  }
  t.duration = Yr(t.trackItemsMap), this.updateState(
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
function $h(e, t) {
  return {
    id: It(),
    accepts: ["text", "audio", "helper", "video", "image"],
    type: e,
    items: t,
    magnetic: !1,
    static: !1
  };
}
const _A = (e, t, r, o, s) => {
  if (o === void 0 && s === void 0)
    return { trackId: void 0, trackIndex: void 0 };
  const a = s !== void 0 ? t[Math.max(0, Math.min(s, t.length - 1))] : t.find((d) => d.id === o);
  if (!a)
    return {
      trackId: void 0,
      trackIndex: s !== void 0 ? Math.max(0, Math.min(s, t.length - 1)) : void 0
    };
  const u = a.items.map((d) => r[d]), l = e.map((d) => r[d]);
  for (const d of u) {
    const p = d.display.from, m = d.display.to;
    for (const g of l) {
      const v = g.display.from;
      if (!(g.display.to <= p || v >= m))
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
}, Vh = [
  "tracks",
  "trackItemsMap",
  "trackItemDetailsMap",
  "transitionIds",
  "transitionsMap",
  "trackItemIds"
], CA = {
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
class V8 {
  stateSubject;
  stateHistorySubject;
  prevState;
  undos;
  redos;
  listener;
  constructor(t) {
    this.stateSubject = null, this.stateHistorySubject = null, this.prevState = null, this.undos = [], this.redos = [], this.listener = null;
    const r = t || CA;
    this.stateSubject = new Dp(r), this.stateHistorySubject = new Dp({
      handleRedo: !1,
      handleUndo: !1
    }), this.prevState = r, this.initListeners();
  }
  initListeners() {
    TA(this);
  }
  destroyListeners() {
    this.listener && this.listener.unsubscribe();
  }
  purge() {
    this.destroyListeners();
  }
  updateHistory(t, r) {
    const o = Ze.pick(t, Vh), s = Ze.pick(this.getState(), Vh), a = Gv(s, o);
    a.length && (this.undos.push({ undos: a, type: r }), this.redos = []);
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
  updateState(t, r = { updateHistory: !1, kind: void 0 }) {
    const o = this.getState(), s = { ...o, ...t };
    if (!Ze.isEqual(o, s)) {
      r.updateHistory && this.updateHistory(s, r.kind);
      const { duration: a, trackItemsMap: u, ...l } = o;
      this.prevState = {
        ...l,
        duration: this.prevState.duration,
        trackItemsMap: this.prevState.trackItemsMap
      }, this.stateSubject.next(s);
    }
  }
  subscribeToSize(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Ze.isEqual(r.size, this.prevState.size) || t({ size: r.size });
    });
  }
  subscribeToScale(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Ze.isEqual(r.scale, this.prevState.scale) || t({ scale: r.scale });
    });
  }
  subscribeToUpdateTrackItem(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Ze.isEqual(r.trackItemsMap, this.prevState.trackItemsMap) || t({ trackItemsMap: r.trackItemsMap });
    });
  }
  subscribeToUpdateItemDetails(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Ze.isEqual(
        r.trackItemDetailsMap,
        this.prevState.trackItemDetailsMap
      ) || t({ trackItemDetailsMap: r.trackItemDetailsMap });
    });
  }
  subscribeToDuration(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      r.duration !== this.prevState.duration && t({ duration: r.duration });
    });
  }
  subscribeToHistory(t) {
    return this.stateHistorySubject.asObservable().subscribe((r) => {
      if (r.handleRedo) {
        const o = this.undos[this.undos.length - 1]?.type;
        o === "update" && t({ ...this.getState(), type: o }), this.stateHistorySubject.next({
          handleRedo: !1,
          handleUndo: !1
        });
      }
      if (r.handleUndo) {
        const o = this.redos[this.redos.length - 1]?.type;
        o === "update" && t({ ...this.getState(), type: o }), this.stateHistorySubject.next({
          handleRedo: !1,
          handleUndo: !1
        });
      }
    });
  }
  subscribeToAddOrRemoveItems(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      (!r.trackItemIds?.every(
        (o) => this.prevState.trackItemIds?.includes(o)
      ) || !Ze.isEqual(r.tracks, this.prevState.tracks)) && t({ trackItemIds: r.trackItemIds });
    });
  }
  subscribeToActiveIds(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      Ze.isEqual(r.activeIds, this.prevState.activeIds) || t({ activeIds: r.activeIds });
    });
  }
  subscribeToTracks(t) {
    return this.stateSubject.asObservable().subscribe((r) => {
      (!Ze.isEqual(r.tracks, this.prevState.tracks) || !Ze.isEqual(r.trackItemIds, this.prevState.trackItemIds) || !Ze.isEqual(r.trackItemsMap, this.prevState.trackItemsMap) || !Ze.isEqual(r.transitionIds, this.prevState.transitionIds) || !Ze.isEqual(r.transitionsMap, this.prevState.transitionsMap) || !Ze.isEqual(
        r.trackItemDetailsMap,
        this.prevState.trackItemDetailsMap
      )) && t({
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
    const t = this.undos.pop(), r = t?.undos, o = t?.type;
    if (!r || !o) return;
    Fh();
    const {
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: u,
      transitionIds: l,
      transitionsMap: d,
      trackItemsMap: p
    } = this.getState(), m = Ze.cloneDeep({
      trackItemDetailsMap: s,
      trackItemIds: a,
      tracks: u,
      transitionIds: l,
      transitionsMap: d,
      trackItemsMap: p
    }), g = [], v = [], S = [], _ = [], T = [], C = [];
    r.forEach((W) => {
      let Q;
      const ue = W.path.slice(1);
      W.type === "CREATE" ? Q = {
        path: ue,
        op: "remove",
        value: W.value
      } : W.type === "CHANGE" ? Q = {
        path: ue,
        op: "replace",
        value: W.oldValue
      } : Q = {
        path: ue,
        op: "add",
        value: W.oldValue
      }, W.path.includes("trackItemIds") ? S.push(Q) : W.path.includes("transitionIds") ? v.push(Q) : W.path.includes("trackItemsMap") ? T.push(Q) : W.path.includes("transitionsMap") ? _.push(Q) : W.path.includes("tracks") ? g.push(Q) : W.path.includes("trackItemDetailsMap") && C.push(Q);
    });
    const A = this.applyPatch(m.tracks, g), k = this.applyPatch(
      m.transitionIds,
      v
    ), O = this.applyPatch(
      m.trackItemIds,
      S
    ), N = this.applyPatch(
      m.transitionsMap,
      _
    ), $ = this.applyPatch(
      m.trackItemsMap,
      T
    ), V = this.applyPatch(
      m.trackItemDetailsMap,
      C
    ), G = Ze.cloneDeep({
      tracks: A,
      transitionIds: k,
      trackItemIds: O,
      transitionsMap: N,
      trackItemsMap: $,
      trackItemDetailsMap: V
    }), U = Ze.cloneDeep(this.getState()), Y = { ...U, ...G };
    this.prevState = U;
    const H = { redos: r, type: o };
    this.redos.push(H);
    const Z = Yr(Y.trackItemsMap);
    this.stateSubject.next({ ...Y, duration: Z }), this.stateHistorySubject.next({ handleRedo: !1, handleUndo: !0 });
  }
  redo() {
    const t = this.redos.pop();
    if (!t?.redos || !t?.type) return;
    Fh();
    const r = this.getState(), {
      trackItemDetailsMap: o,
      trackItemIds: s,
      tracks: a,
      transitionIds: u,
      transitionsMap: l,
      trackItemsMap: d
    } = r, p = Ze.cloneDeep({
      trackItemDetailsMap: o,
      trackItemIds: s,
      tracks: a,
      transitionIds: u,
      transitionsMap: l,
      trackItemsMap: d
    }), m = [], g = [], v = [], S = [], _ = [], T = [];
    t.redos.forEach((N) => {
      const $ = N.path.slice(1);
      let V = {};
      switch (N.type) {
        case "CREATE":
          V = {
            path: $,
            op: "add",
            value: N.value
          };
          break;
        case "CHANGE":
          V = {
            path: $,
            op: "replace",
            value: N.value
          };
          break;
        case "REMOVE":
          V = {
            path: $,
            op: "remove",
            value: N.oldValue
          };
          break;
        default:
          return null;
      }
      N.path.includes("trackItemIds") ? v.push(V) : N.path.includes("transitionIds") ? g.push(V) : N.path.includes("trackItemsMap") ? _.push(V) : N.path.includes("transitionsMap") ? S.push(V) : N.path.includes("trackItemDetailsMap") ? T.push(V) : m.push(V);
    });
    const C = {
      tracks: this.applyPatch(p.tracks, m),
      transitionIds: this.applyPatch(p.transitionIds, g),
      trackItemIds: this.applyPatch(p.trackItemIds, v),
      transitionsMap: this.applyPatch(p.transitionsMap, S),
      trackItemsMap: this.applyPatch(p.trackItemsMap, _),
      trackItemDetailsMap: this.applyPatch(p.trackItemDetailsMap, T)
    }, A = Ze.cloneDeep(C), k = { ...Ze.cloneDeep(r), ...A };
    this.prevState = r, this.undos.push({ undos: t.redos, type: t.type });
    const O = Yr(k.trackItemsMap);
    this.stateSubject.next({ ...k, duration: O }), this.stateHistorySubject.next({ handleRedo: !0, handleUndo: !1 });
  }
  applyPatch(t, r) {
    return r.reverse().reduce(
      (o, s) => bA(o, (a) => {
        wA(a, [s]);
      }),
      t
    );
  }
}
function TA(e) {
  const t = Be.subject.pipe(Yn(({ key: a }) => a.startsWith(d2))).subscribe((a) => {
    a.key === Km && e.undo(), a.key === Zm && e.redo();
  }), r = Be.subject.pipe(Yn(({ key: a, value: u }) => a.startsWith(s2))).subscribe((a) => {
    EA.bind(e)(a);
  }), o = Be.subject.pipe(
    Yn(({ key: a, value: u }) => a.startsWith("scene"))
  ).subscribe(async (a) => {
    await xA.bind(e)(a);
  }), s = Be.subject.pipe(Yn(({ key: a }) => a.startsWith(u2))).subscribe(async (a) => {
    SA.bind(e)(a);
  });
  return () => {
    t.unsubscribe(), r.unsubscribe(), s.unsubscribe(), o.unsubscribe();
  };
}
export {
  qm as ACTIVE_CLONE,
  Gm as ACTIVE_DELETE,
  eR as ACTIVE_PASTE,
  u2 as ACTIVE_PREFIX,
  QA as ACTIVE_SET,
  Xm as ACTIVE_SPLIT,
  UA as ADD_ANIMATION,
  $i as ADD_AUDIO,
  Vi as ADD_IMAGE,
  VA as ADD_MASK,
  $A as ADD_PLACEHOLDER,
  s2 as ADD_PREFIX,
  MA as ADD_SUFFIX,
  Ym as ADD_TEXT,
  zA as ADD_TRANSITION,
  Fi as ADD_VIDEO,
  yC as AUDIOS,
  d4 as Audio,
  En as AudioObject,
  CR as BASE_TIMELINE_ELEMENT_DURATION_MS,
  Zt as Button,
  E5 as CanvasMixin,
  AR as DEFAULT_AUDIO_BITRATE,
  kR as DEFAULT_AUDIO_SAMPLE_RATE,
  g8 as DEFAULT_BLUR,
  m8 as DEFAULT_BLUR_STEP,
  KR as DEFAULT_BRIGHTNESS,
  XR as DEFAULT_BRIGHTNESS_STEP,
  c8 as DEFAULT_CONTRAST,
  a8 as DEFAULT_CONTRAST_STEP,
  $R as DEFAULT_FADE_IN,
  VR as DEFAULT_FADE_OUT,
  FR as DEFAULT_FADE_STEP,
  BR as DEFAULT_FLIP_X,
  YR as DEFAULT_FLIP_Y,
  $p as DEFAULT_FONT,
  U2 as DEFAULT_FRAMERATE,
  h8 as DEFAULT_MAX_BLUR,
  qR as DEFAULT_MAX_BRIGHTNESS,
  s8 as DEFAULT_MAX_CONTRAST,
  LR as DEFAULT_MAX_FADE,
  l8 as DEFAULT_MAX_OPACITY,
  UR as DEFAULT_MAX_ROTATION,
  JR as DEFAULT_MAX_SATURATION,
  y8 as DEFAULT_MAX_SPEED,
  r8 as DEFAULT_MAX_TEMPERATURE,
  x8 as DEFAULT_MAX_VOLUME,
  OR as DEFAULT_MEDIA_PANEL_WIDTH,
  p8 as DEFAULT_MIN_BLUR,
  GR as DEFAULT_MIN_BRIGHTNESS,
  i8 as DEFAULT_MIN_CONTRAST,
  DR as DEFAULT_MIN_FADE,
  u8 as DEFAULT_MIN_OPACITY,
  zR as DEFAULT_MIN_ROTATION,
  ZR as DEFAULT_MIN_SATURATION,
  v8 as DEFAULT_MIN_SPEED,
  t8 as DEFAULT_MIN_TEMPERATURE,
  S8 as DEFAULT_MIN_VOLUME,
  f8 as DEFAULT_OPACITY,
  d8 as DEFAULT_OPACITY_STEP,
  PR as DEFAULT_PREVIEW_HEIGHT,
  sg as DEFAULT_PREVIEW_SCALE,
  RR as DEFAULT_PREVIEW_WIDTH,
  WR as DEFAULT_ROTATION,
  HR as DEFAULT_ROTATION_STEP,
  e8 as DEFAULT_SATURATION,
  QR as DEFAULT_SATURATION_STEP,
  jR as DEFAULT_SETTINGS_PANEL_WIDTH,
  w8 as DEFAULT_SPEED,
  b8 as DEFAULT_SPEED_STEP,
  o8 as DEFAULT_TEMPERATURE,
  n8 as DEFAULT_TEMPERATURE_STEP,
  z2 as DEFAULT_VIDEO_HEIGHT,
  IR as DEFAULT_VIDEO_MAX_BITRATE,
  TR as DEFAULT_VIDEO_MIN_BITRATE,
  V2 as DEFAULT_VIDEO_WIDTH,
  _8 as DEFAULT_VOLUME,
  E8 as DEFAULT_VOLUME_STEP,
  _R as DEFAULT_WEIGHT,
  Gs as DRAG_END,
  p2 as DRAG_PREFIX,
  Qm as DRAG_START,
  fa as Draggable,
  L2 as DroppableArea,
  WA as EDIT_OBJECT,
  HA as EDIT_PREFIX,
  YA as EDIT_SHAPE,
  BA as EDIT_TEXT,
  GA as ENTER_EDIT_MODE,
  H2 as FRAME_INTERVAL,
  vR as GIANT_ICON_SIZE,
  d2 as HISTORY_PREFIX,
  Zm as HISTORY_REDO,
  mR as HISTORY_RESET,
  Km as HISTORY_UNDO,
  gC as Header,
  m4 as Helper,
  Wi as HelperObject,
  bC as IMAGES,
  p4 as Image,
  Ml as ImageObject,
  SR as LARGER_FONT_SIZE,
  xR as LARGE_FONT_SIZE,
  yR as LARGE_ICON_SIZE,
  dR as LAYER_CLONE,
  uR as LAYER_COPY,
  pR as LAYER_CUT,
  hR as LAYER_DELETE,
  cR as LAYER_EDITING_NAME,
  nR as LAYER_HIDDEN,
  rR as LAYER_LOCKED,
  oR as LAYER_MOVE,
  lR as LAYER_PASTE,
  tR as LAYER_PREFIX,
  aR as LAYER_RENAME,
  iR as LAYER_SELECT,
  l2 as LAYER_SELECTION,
  sR as LAYER_SEND_TO,
  fR as LAYER_SPLIT,
  NR as MAX_MEDIA_PANEL_WIDTH,
  MR as MIN_MEDIA_PANEL_WIDTH,
  P8 as MenuItem,
  ER as NORMAL_FONT_SIZE,
  bR as NORMAL_ICON_SIZE,
  M8 as NavbarComponent,
  c2 as PLAYER_PAUSE,
  a2 as PLAYER_PLAY,
  qA as PLAYER_PREFIX,
  XA as PLAYER_SEEK,
  ZA as PLAYER_SEEK_BY,
  KA as PLAYER_SEEK_TO,
  JA as PLAYER_TOGGLE_PLAY,
  ma as PREVIEW_FRAME_WIDTH,
  Pi as Placeholder,
  w5 as Player,
  S5 as PlayheadComponent,
  ra as PreviewTrackItem,
  x5 as RulerComponent,
  $2 as SECONDARY_FONT,
  F2 as SMALL_FONT_SIZE,
  wR as SMALL_ICON_SIZE,
  FA as STATE_CHANGED,
  LA as STATE_PREFIX,
  O8 as Scene,
  gR as SceneBoard,
  Fo as ScrollArea,
  _m as ScrollBar,
  qk as SequenceItem,
  T_ as Slider,
  V8 as StateManager,
  eg as TIMELINE_BOUNDING_CHANGED,
  cl as TIMELINE_OFFSET_CANVAS_LEFT,
  Fp as TIMELINE_OFFSET_CANVAS_RIGHT,
  Tu as TIMELINE_OFFSET_X,
  h2 as TIMELINE_PREFIX,
  Jm as TIMELINE_SCALE_CHANGED,
  f2 as TIMELINE_SCALE_PREFIX,
  Br as TIMELINE_ZOOM_LEVELS,
  jA as TRACKS_CHANGED,
  DA as TRACK_ITEMS_CHANGED,
  NA as TRACK_ITEMS_PREFIX,
  OA as TRACK_PREFIX,
  SC as TRANSITIONS,
  i2 as Tabs,
  bu as TabsContent,
  Bm as TabsList,
  yu as TabsTrigger,
  bv as Text,
  No as TextObject,
  zl as Timeline,
  $8 as TimelineComponent,
  h4 as Track,
  g4 as TrackItemsMixin,
  Kn as TrackObject,
  y4 as TracksMixin,
  jr as Transition,
  ta as TransitionGuide,
  S4 as TransitionsMixin,
  R8 as UPLOADS,
  wC as VIDEOS,
  f4 as Video,
  Go as VideoObject,
  nA as addEventListeners,
  q5 as applyMixins,
  QE as buttonVariants,
  Q5 as calculateDisplayRange,
  Yr as calculateDuration,
  Ol as calculatePosition,
  Q2 as calculateTimelineWidth,
  J5 as calculateTrim,
  ro as cn,
  U5 as createAudioControls,
  G5 as createControls,
  F5 as createMediaControls,
  gv as createResizeControls,
  ka as defaultColor,
  u4 as defaultSizes,
  e4 as filterAndCleanTracks,
  ag as findIndex,
  kA as formatBytes,
  C8 as formatTimeToHumanReadable,
  W2 as formatTimelineUnit,
  B2 as frameToTimeString,
  G2 as getCurrentTime,
  T8 as getFitZoomLevel,
  D8 as getMovingState,
  K2 as getNextZoom,
  J2 as getNextZoomIndex,
  Z2 as getNextZoomLevel,
  ze as getOffset,
  X2 as getPreviousZoom,
  k8 as getPreviousZoomIndex,
  q2 as getPreviousZoomLevel,
  Hs as getTextHeight,
  I8 as getZoomByIndex,
  aA as handleEvents,
  Qs as handleResize,
  X5 as loadAudio,
  n4 as loadAudioItem,
  i4 as loadAudioObject,
  eC as loadFonts,
  K5 as loadImage,
  t4 as loadImageItem,
  s4 as loadImageObject,
  yv as loadTextItem,
  c4 as loadTextObject,
  Z5 as loadVideo,
  r4 as loadVideoItem,
  a4 as loadVideoObject,
  l4 as mergeSizes,
  cg as mergeTrackObjects,
  te as movingState,
  _5 as positionOffsets,
  A8 as randomInt,
  oA as removeEventListeners,
  qs as removeItemsFromTrack,
  Cn as renderControl,
  ug as reorderTracksByIndex,
  TA as setupHistoryListeners,
  yt as timeMsToUnits,
  Y2 as timeToString,
  vt as transitionStore,
  qn as unitsToTimeMs,
  L8 as updateMovingState,
  ul as useCurrentPlayerFrame,
  ga as useIsDraggingOverTimeline,
  fg as useLayoutStore,
  Xn as useStore,
  vv as wrapResizeWithAnchorPosition
};
