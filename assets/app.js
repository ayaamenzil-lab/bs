(function () {
  const j = document.createElement("link").relList;
  if (j && j.supports && j.supports("modulepreload")) return;
  for (const U of document.querySelectorAll('link[rel="modulepreload"]')) o(U);
  new MutationObserver((U) => {
    for (const B of U)
      if (B.type === "childList")
        for (const Z of B.addedNodes)
          Z.tagName === "LINK" && Z.rel === "modulepreload" && o(Z);
  }).observe(document, { childList: !0, subtree: !0 });
  function w(U) {
    const B = {};
    return (
      U.integrity && (B.integrity = U.integrity),
      U.referrerPolicy && (B.referrerPolicy = U.referrerPolicy),
      U.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : U.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function o(U) {
    if (U.ep) return;
    U.ep = !0;
    const B = w(U);
    fetch(U.href, B);
  }
})();
function Yd(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default")
    ? b.default
    : b;
}
var Sf = { exports: {} },
  Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function ah() {
  if (Ad) return Hn;
  Ad = 1;
  var b = Symbol.for("react.transitional.element"),
    j = Symbol.for("react.fragment");
  function w(o, U, B) {
    var Z = null;
    if (
      (B !== void 0 && (Z = "" + B),
      U.key !== void 0 && (Z = "" + U.key),
      "key" in U)
    ) {
      B = {};
      for (var F in U) F !== "key" && (B[F] = U[F]);
    } else B = U;
    return (
      (U = B.ref),
      { $$typeof: b, type: o, key: Z, ref: U !== void 0 ? U : null, props: B }
    );
  }
  return ((Hn.Fragment = j), (Hn.jsx = w), (Hn.jsxs = w), Hn);
}
var jd;
function nh() {
  return (jd || ((jd = 1), (Sf.exports = ah())), Sf.exports);
}
var s = nh(),
  Nf = { exports: {} },
  k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function uh() {
  if (Od) return k;
  Od = 1;
  var b = Symbol.for("react.transitional.element"),
    j = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    B = Symbol.for("react.consumer"),
    Z = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    H = Symbol.for("react.activity"),
    ie = Symbol.iterator;
  function te(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ie && c[ie]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var de = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _e = Object.assign,
    J = {};
  function fe(c, m, _) {
    ((this.props = c),
      (this.context = m),
      (this.refs = J),
      (this.updater = _ || de));
  }
  ((fe.prototype.isReactComponent = {}),
    (fe.prototype.setState = function (c, m) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, m, "setState");
    }),
    (fe.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function Oe() {}
  Oe.prototype = fe.prototype;
  function ze(c, m, _) {
    ((this.props = c),
      (this.context = m),
      (this.refs = J),
      (this.updater = _ || de));
  }
  var et = (ze.prototype = new Oe());
  ((et.constructor = ze), _e(et, fe.prototype), (et.isPureReactComponent = !0));
  var Xe = Array.isArray;
  function Qe() {}
  var ee = { H: null, A: null, T: null, S: null },
    Ve = Object.prototype.hasOwnProperty;
  function ct(c, m, _) {
    var A = _.ref;
    return {
      $$typeof: b,
      type: c,
      key: m,
      ref: A !== void 0 ? A : null,
      props: _,
    };
  }
  function Xt(c, m) {
    return ct(c.type, m, c.props);
  }
  function nt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === b;
  }
  function me(c) {
    var m = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (_) {
        return m[_];
      })
    );
  }
  var tt = /\/+/g;
  function we(c, m) {
    return typeof c == "object" && c !== null && c.key != null
      ? me("" + c.key)
      : m.toString(36);
  }
  function Ze(c) {
    switch (c.status) {
      case "fulfilled":
        return c.value;
      case "rejected":
        throw c.reason;
      default:
        switch (
          (typeof c.status == "string"
            ? c.then(Qe, Qe)
            : ((c.status = "pending"),
              c.then(
                function (m) {
                  c.status === "pending" &&
                    ((c.status = "fulfilled"), (c.value = m));
                },
                function (m) {
                  c.status === "pending" &&
                    ((c.status = "rejected"), (c.reason = m));
                },
              )),
          c.status)
        ) {
          case "fulfilled":
            return c.value;
          case "rejected":
            throw c.reason;
        }
    }
    throw c;
  }
  function S(c, m, _, A, C) {
    var R = typeof c;
    (R === "undefined" || R === "boolean") && (c = null);
    var D = !1;
    if (c === null) D = !0;
    else
      switch (R) {
        case "bigint":
        case "string":
        case "number":
          D = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case b:
            case j:
              D = !0;
              break;
            case q:
              return ((D = c._init), S(D(c._payload), m, _, A, C));
          }
      }
    if (D)
      return (
        (C = C(c)),
        (D = A === "" ? "." + we(c, 0) : A),
        Xe(C)
          ? ((_ = ""),
            D != null && (_ = D.replace(tt, "$&/") + "/"),
            S(C, m, _, "", function (pe) {
              return pe;
            }))
          : C != null &&
            (nt(C) &&
              (C = Xt(
                C,
                _ +
                  (C.key == null || (c && c.key === C.key)
                    ? ""
                    : ("" + C.key).replace(tt, "$&/") + "/") +
                  D,
              )),
            m.push(C)),
        1
      );
    D = 0;
    var Q = A === "" ? "." : A + ":";
    if (Xe(c))
      for (var K = 0; K < c.length; K++)
        ((A = c[K]), (R = Q + we(A, K)), (D += S(A, m, _, R, C)));
    else if (((K = te(c)), typeof K == "function"))
      for (c = K.call(c), K = 0; !(A = c.next()).done; )
        ((A = A.value), (R = Q + we(A, K++)), (D += S(A, m, _, R, C)));
    else if (R === "object") {
      if (typeof c.then == "function") return S(Ze(c), m, _, A, C);
      throw (
        (m = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (m === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : m) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return D;
  }
  function M(c, m, _) {
    if (c == null) return c;
    var A = [],
      C = 0;
    return (
      S(c, A, "", "", function (R) {
        return m.call(_, R, C++);
      }),
      A
    );
  }
  function X(c) {
    if (c._status === -1) {
      var m = c._result;
      ((m = m()),
        m.then(
          function (_) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = _));
          },
          function (_) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = _));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = m)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var se =
      typeof reportError == "function"
        ? reportError
        : function (c) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var m = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof c == "object" &&
                  c !== null &&
                  typeof c.message == "string"
                    ? String(c.message)
                    : String(c),
                error: c,
              });
              if (!window.dispatchEvent(m)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", c);
              return;
            }
            console.error(c);
          },
    g = {
      map: M,
      forEach: function (c, m, _) {
        M(
          c,
          function () {
            m.apply(this, arguments);
          },
          _,
        );
      },
      count: function (c) {
        var m = 0;
        return (
          M(c, function () {
            m++;
          }),
          m
        );
      },
      toArray: function (c) {
        return (
          M(c, function (m) {
            return m;
          }) || []
        );
      },
      only: function (c) {
        if (!nt(c))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return c;
      },
    };
  return (
    (k.Activity = H),
    (k.Children = g),
    (k.Component = fe),
    (k.Fragment = w),
    (k.Profiler = U),
    (k.PureComponent = ze),
    (k.StrictMode = o),
    (k.Suspense = O),
    (k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee),
    (k.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (c) {
        return ee.H.useMemoCache(c);
      },
    }),
    (k.cache = function (c) {
      return function () {
        return c.apply(null, arguments);
      };
    }),
    (k.cacheSignal = function () {
      return null;
    }),
    (k.cloneElement = function (c, m, _) {
      if (c == null)
        throw Error(
          "The argument must be a React element, but you passed " + c + ".",
        );
      var A = _e({}, c.props),
        C = c.key;
      if (m != null)
        for (R in (m.key !== void 0 && (C = "" + m.key), m))
          !Ve.call(m, R) ||
            R === "key" ||
            R === "__self" ||
            R === "__source" ||
            (R === "ref" && m.ref === void 0) ||
            (A[R] = m[R]);
      var R = arguments.length - 2;
      if (R === 1) A.children = _;
      else if (1 < R) {
        for (var D = Array(R), Q = 0; Q < R; Q++) D[Q] = arguments[Q + 2];
        A.children = D;
      }
      return ct(c.type, C, A);
    }),
    (k.createContext = function (c) {
      return (
        (c = {
          $$typeof: Z,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (c.Provider = c),
        (c.Consumer = { $$typeof: B, _context: c }),
        c
      );
    }),
    (k.createElement = function (c, m, _) {
      var A,
        C = {},
        R = null;
      if (m != null)
        for (A in (m.key !== void 0 && (R = "" + m.key), m))
          Ve.call(m, A) &&
            A !== "key" &&
            A !== "__self" &&
            A !== "__source" &&
            (C[A] = m[A]);
      var D = arguments.length - 2;
      if (D === 1) C.children = _;
      else if (1 < D) {
        for (var Q = Array(D), K = 0; K < D; K++) Q[K] = arguments[K + 2];
        C.children = Q;
      }
      if (c && c.defaultProps)
        for (A in ((D = c.defaultProps), D)) C[A] === void 0 && (C[A] = D[A]);
      return ct(c, R, C);
    }),
    (k.createRef = function () {
      return { current: null };
    }),
    (k.forwardRef = function (c) {
      return { $$typeof: F, render: c };
    }),
    (k.isValidElement = nt),
    (k.lazy = function (c) {
      return { $$typeof: q, _payload: { _status: -1, _result: c }, _init: X };
    }),
    (k.memo = function (c, m) {
      return { $$typeof: E, type: c, compare: m === void 0 ? null : m };
    }),
    (k.startTransition = function (c) {
      var m = ee.T,
        _ = {};
      ee.T = _;
      try {
        var A = c(),
          C = ee.S;
        (C !== null && C(_, A),
          typeof A == "object" &&
            A !== null &&
            typeof A.then == "function" &&
            A.then(Qe, se));
      } catch (R) {
        se(R);
      } finally {
        (m !== null && _.types !== null && (m.types = _.types), (ee.T = m));
      }
    }),
    (k.unstable_useCacheRefresh = function () {
      return ee.H.useCacheRefresh();
    }),
    (k.use = function (c) {
      return ee.H.use(c);
    }),
    (k.useActionState = function (c, m, _) {
      return ee.H.useActionState(c, m, _);
    }),
    (k.useCallback = function (c, m) {
      return ee.H.useCallback(c, m);
    }),
    (k.useContext = function (c) {
      return ee.H.useContext(c);
    }),
    (k.useDebugValue = function () {}),
    (k.useDeferredValue = function (c, m) {
      return ee.H.useDeferredValue(c, m);
    }),
    (k.useEffect = function (c, m) {
      return ee.H.useEffect(c, m);
    }),
    (k.useEffectEvent = function (c) {
      return ee.H.useEffectEvent(c);
    }),
    (k.useId = function () {
      return ee.H.useId();
    }),
    (k.useImperativeHandle = function (c, m, _) {
      return ee.H.useImperativeHandle(c, m, _);
    }),
    (k.useInsertionEffect = function (c, m) {
      return ee.H.useInsertionEffect(c, m);
    }),
    (k.useLayoutEffect = function (c, m) {
      return ee.H.useLayoutEffect(c, m);
    }),
    (k.useMemo = function (c, m) {
      return ee.H.useMemo(c, m);
    }),
    (k.useOptimistic = function (c, m) {
      return ee.H.useOptimistic(c, m);
    }),
    (k.useReducer = function (c, m, _) {
      return ee.H.useReducer(c, m, _);
    }),
    (k.useRef = function (c) {
      return ee.H.useRef(c);
    }),
    (k.useState = function (c) {
      return ee.H.useState(c);
    }),
    (k.useSyncExternalStore = function (c, m, _) {
      return ee.H.useSyncExternalStore(c, m, _);
    }),
    (k.useTransition = function () {
      return ee.H.useTransition();
    }),
    (k.version = "19.2.4"),
    k
  );
}
var wd;
function jf() {
  return (wd || ((wd = 1), (Nf.exports = uh())), Nf.exports);
}
var P = jf();
const ih = Yd(P);
var _f = { exports: {} },
  Ln = {},
  Ef = { exports: {} },
  zf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function ch() {
  return (
    Md ||
      ((Md = 1),
      (function (b) {
        function j(S, M) {
          var X = S.length;
          S.push(M);
          e: for (; 0 < X; ) {
            var se = (X - 1) >>> 1,
              g = S[se];
            if (0 < U(g, M)) ((S[se] = M), (S[X] = g), (X = se));
            else break e;
          }
        }
        function w(S) {
          return S.length === 0 ? null : S[0];
        }
        function o(S) {
          if (S.length === 0) return null;
          var M = S[0],
            X = S.pop();
          if (X !== M) {
            S[0] = X;
            e: for (var se = 0, g = S.length, c = g >>> 1; se < c; ) {
              var m = 2 * (se + 1) - 1,
                _ = S[m],
                A = m + 1,
                C = S[A];
              if (0 > U(_, X))
                A < g && 0 > U(C, _)
                  ? ((S[se] = C), (S[A] = X), (se = A))
                  : ((S[se] = _), (S[m] = X), (se = m));
              else if (A < g && 0 > U(C, X))
                ((S[se] = C), (S[A] = X), (se = A));
              else break e;
            }
          }
          return M;
        }
        function U(S, M) {
          var X = S.sortIndex - M.sortIndex;
          return X !== 0 ? X : S.id - M.id;
        }
        if (
          ((b.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var B = performance;
          b.unstable_now = function () {
            return B.now();
          };
        } else {
          var Z = Date,
            F = Z.now();
          b.unstable_now = function () {
            return Z.now() - F;
          };
        }
        var O = [],
          E = [],
          q = 1,
          H = null,
          ie = 3,
          te = !1,
          de = !1,
          _e = !1,
          J = !1,
          fe = typeof setTimeout == "function" ? setTimeout : null,
          Oe = typeof clearTimeout == "function" ? clearTimeout : null,
          ze = typeof setImmediate < "u" ? setImmediate : null;
        function et(S) {
          for (var M = w(E); M !== null; ) {
            if (M.callback === null) o(E);
            else if (M.startTime <= S)
              (o(E), (M.sortIndex = M.expirationTime), j(O, M));
            else break;
            M = w(E);
          }
        }
        function Xe(S) {
          if (((_e = !1), et(S), !de))
            if (w(O) !== null) ((de = !0), Qe || ((Qe = !0), me()));
            else {
              var M = w(E);
              M !== null && Ze(Xe, M.startTime - S);
            }
        }
        var Qe = !1,
          ee = -1,
          Ve = 5,
          ct = -1;
        function Xt() {
          return J ? !0 : !(b.unstable_now() - ct < Ve);
        }
        function nt() {
          if (((J = !1), Qe)) {
            var S = b.unstable_now();
            ct = S;
            var M = !0;
            try {
              e: {
                ((de = !1), _e && ((_e = !1), Oe(ee), (ee = -1)), (te = !0));
                var X = ie;
                try {
                  t: {
                    for (
                      et(S), H = w(O);
                      H !== null && !(H.expirationTime > S && Xt());
                    ) {
                      var se = H.callback;
                      if (typeof se == "function") {
                        ((H.callback = null), (ie = H.priorityLevel));
                        var g = se(H.expirationTime <= S);
                        if (((S = b.unstable_now()), typeof g == "function")) {
                          ((H.callback = g), et(S), (M = !0));
                          break t;
                        }
                        (H === w(O) && o(O), et(S));
                      } else o(O);
                      H = w(O);
                    }
                    if (H !== null) M = !0;
                    else {
                      var c = w(E);
                      (c !== null && Ze(Xe, c.startTime - S), (M = !1));
                    }
                  }
                  break e;
                } finally {
                  ((H = null), (ie = X), (te = !1));
                }
                M = void 0;
              }
            } finally {
              M ? me() : (Qe = !1);
            }
          }
        }
        var me;
        if (typeof ze == "function")
          me = function () {
            ze(nt);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            we = tt.port2;
          ((tt.port1.onmessage = nt),
            (me = function () {
              we.postMessage(null);
            }));
        } else
          me = function () {
            fe(nt, 0);
          };
        function Ze(S, M) {
          ee = fe(function () {
            S(b.unstable_now());
          }, M);
        }
        ((b.unstable_IdlePriority = 5),
          (b.unstable_ImmediatePriority = 1),
          (b.unstable_LowPriority = 4),
          (b.unstable_NormalPriority = 3),
          (b.unstable_Profiling = null),
          (b.unstable_UserBlockingPriority = 2),
          (b.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (b.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ve = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (b.unstable_getCurrentPriorityLevel = function () {
            return ie;
          }),
          (b.unstable_next = function (S) {
            switch (ie) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = ie;
            }
            var X = ie;
            ie = M;
            try {
              return S();
            } finally {
              ie = X;
            }
          }),
          (b.unstable_requestPaint = function () {
            J = !0;
          }),
          (b.unstable_runWithPriority = function (S, M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var X = ie;
            ie = S;
            try {
              return M();
            } finally {
              ie = X;
            }
          }),
          (b.unstable_scheduleCallback = function (S, M, X) {
            var se = b.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? se + X : se))
                : (X = se),
              S)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = X + g),
              (S = {
                id: q++,
                callback: M,
                priorityLevel: S,
                startTime: X,
                expirationTime: g,
                sortIndex: -1,
              }),
              X > se
                ? ((S.sortIndex = X),
                  j(E, S),
                  w(O) === null &&
                    S === w(E) &&
                    (_e ? (Oe(ee), (ee = -1)) : (_e = !0), Ze(Xe, X - se)))
                : ((S.sortIndex = g),
                  j(O, S),
                  de || te || ((de = !0), Qe || ((Qe = !0), me()))),
              S
            );
          }),
          (b.unstable_shouldYield = Xt),
          (b.unstable_wrapCallback = function (S) {
            var M = ie;
            return function () {
              var X = ie;
              ie = M;
              try {
                return S.apply(this, arguments);
              } finally {
                ie = X;
              }
            };
          }));
      })(zf)),
    zf
  );
}
var Cd;
function fh() {
  return (Cd || ((Cd = 1), (Ef.exports = ch())), Ef.exports);
}
var Tf = { exports: {} },
  at = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function sh() {
  if (Ud) return at;
  Ud = 1;
  var b = jf();
  function j(O) {
    var E = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        E += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return (
      "Minified React error #" +
      O +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function w() {}
  var o = {
      d: {
        f: w,
        r: function () {
          throw Error(j(522));
        },
        D: w,
        C: w,
        L: w,
        m: w,
        X: w,
        S: w,
        M: w,
      },
      p: 0,
      findDOMNode: null,
    },
    U = Symbol.for("react.portal");
  function B(O, E, q) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: H == null ? null : "" + H,
      children: O,
      containerInfo: E,
      implementation: q,
    };
  }
  var Z = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function F(O, E) {
    if (O === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (at.createPortal = function (O, E) {
      var q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(j(299));
      return B(O, E, null, q);
    }),
    (at.flushSync = function (O) {
      var E = Z.T,
        q = o.p;
      try {
        if (((Z.T = null), (o.p = 2), O)) return O();
      } finally {
        ((Z.T = E), (o.p = q), o.d.f());
      }
    }),
    (at.preconnect = function (O, E) {
      typeof O == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        o.d.C(O, E));
    }),
    (at.prefetchDNS = function (O) {
      typeof O == "string" && o.d.D(O);
    }),
    (at.preinit = function (O, E) {
      if (typeof O == "string" && E && typeof E.as == "string") {
        var q = E.as,
          H = F(q, E.crossOrigin),
          ie = typeof E.integrity == "string" ? E.integrity : void 0,
          te = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        q === "style"
          ? o.d.S(O, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: H,
              integrity: ie,
              fetchPriority: te,
            })
          : q === "script" &&
            o.d.X(O, {
              crossOrigin: H,
              integrity: ie,
              fetchPriority: te,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (at.preinitModule = function (O, E) {
      if (typeof O == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var q = F(E.as, E.crossOrigin);
            o.d.M(O, {
              crossOrigin: q,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && o.d.M(O);
    }),
    (at.preload = function (O, E) {
      if (
        typeof O == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var q = E.as,
          H = F(q, E.crossOrigin);
        o.d.L(O, q, {
          crossOrigin: H,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (at.preloadModule = function (O, E) {
      if (typeof O == "string")
        if (E) {
          var q = F(E.as, E.crossOrigin);
          o.d.m(O, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: q,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else o.d.m(O);
    }),
    (at.requestFormReset = function (O) {
      o.d.r(O);
    }),
    (at.unstable_batchedUpdates = function (O, E) {
      return O(E);
    }),
    (at.useFormState = function (O, E, q) {
      return Z.H.useFormState(O, E, q);
    }),
    (at.useFormStatus = function () {
      return Z.H.useHostTransitionStatus();
    }),
    (at.version = "19.2.4"),
    at
  );
}
var Dd;
function rh() {
  if (Dd) return Tf.exports;
  Dd = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (j) {
        console.error(j);
      }
  }
  return (b(), (Tf.exports = sh()), Tf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd;
function oh() {
  if (Rd) return Ln;
  Rd = 1;
  var b = fh(),
    j = jf(),
    w = rh();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function U(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function B(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function Z(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function F(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (B(e) !== e) throw Error(o(188));
  }
  function E(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = B(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (O(n), e);
          if (u === a) return (O(n), t);
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, f = n.child; f; ) {
          if (f === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (f === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (f === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function q(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = q(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var H = Object.assign,
    ie = Symbol.for("react.element"),
    te = Symbol.for("react.transitional.element"),
    de = Symbol.for("react.portal"),
    _e = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    fe = Symbol.for("react.profiler"),
    Oe = Symbol.for("react.consumer"),
    ze = Symbol.for("react.context"),
    et = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    Qe = Symbol.for("react.suspense_list"),
    ee = Symbol.for("react.memo"),
    Ve = Symbol.for("react.lazy"),
    ct = Symbol.for("react.activity"),
    Xt = Symbol.for("react.memo_cache_sentinel"),
    nt = Symbol.iterator;
  function me(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (nt && e[nt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var tt = Symbol.for("react.client.reference");
  function we(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === tt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _e:
        return "Fragment";
      case fe:
        return "Profiler";
      case J:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case Qe:
        return "SuspenseList";
      case ct:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case de:
          return "Portal";
        case ze:
          return e.displayName || "Context";
        case Oe:
          return (e._context.displayName || "Context") + ".Consumer";
        case et:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ee:
          return (
            (t = e.displayName || null),
            t !== null ? t : we(e.type) || "Memo"
          );
        case Ve:
          ((t = e._payload), (e = e._init));
          try {
            return we(e(t));
          } catch {}
      }
    return null;
  }
  var Ze = Array.isArray,
    S = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    se = [],
    g = -1;
  function c(e) {
    return { current: e };
  }
  function m(e) {
    0 > g || ((e.current = se[g]), (se[g] = null), g--);
  }
  function _(e, t) {
    (g++, (se[g] = e.current), (e.current = t));
  }
  var A = c(null),
    C = c(null),
    R = c(null),
    D = c(null);
  function Q(e, t) {
    switch ((_(R, t), _(C, e), _(A, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Fo(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Fo(t)), (e = $o(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (m(A), _(A, e));
  }
  function K() {
    (m(A), m(C), m(R));
  }
  function pe(e) {
    e.memoizedState !== null && _(D, e);
    var t = A.current,
      l = $o(t, e.type);
    t !== l && (_(C, e), _(A, l));
  }
  function ge(e) {
    (C.current === e && (m(A), m(C)),
      D.current === e && (m(D), (Un._currentValue = X)));
  }
  var Ee, Be;
  function $(e) {
    if (Ee === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Ee = (t && t[1]) || ""),
          (Be =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ee +
      e +
      Be
    );
  }
  var Ke = !1;
  function ut(e, t) {
    if (!e || Ke) return "";
    Ke = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (x) {
                  var p = x;
                }
                Reflect.construct(e, [], T);
              } else {
                try {
                  T.call();
                } catch (x) {
                  p = x;
                }
                e.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                p = x;
              }
              (T = e()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (x) {
            if (x && p && typeof x.stack == "string") return [x.stack, p.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        f = u[1];
      if (i && f) {
        var r = i.split(`
`),
          y = f.split(`
`);
        for (
          n = a = 0;
          a < r.length && !r[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === r.length || n === y.length)
          for (
            a = r.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && r[a] !== y[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || r[a] !== y[n])) {
                  var N =
                    `
` + r[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Ke = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? $(l) : "";
  }
  function vt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $(e.type);
      case 16:
        return $("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? $("Suspense Fallback")
          : $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 15:
        return ut(e.type, !1);
      case 11:
        return ut(e.type.render, !1);
      case 1:
        return ut(e.type, !0);
      case 31:
        return $("Activity");
      default:
        return "";
    }
  }
  function Tt(e) {
    try {
      var t = "",
        l = null;
      do ((t += vt(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Ht = Object.prototype.hasOwnProperty,
    ft = b.unstable_scheduleCallback,
    Ga = b.unstable_cancelCallback,
    ni = b.unstable_shouldYield,
    ui = b.unstable_requestPaint,
    lt = b.unstable_now,
    ii = b.unstable_getCurrentPriorityLevel,
    Xa = b.unstable_ImmediatePriority,
    Yn = b.unstable_UserBlockingPriority,
    la = b.unstable_NormalPriority,
    qn = b.unstable_LowPriority,
    Qa = b.unstable_IdlePriority,
    Va = b.log,
    ci = b.unstable_setDisableYieldValue,
    Hl = null,
    yt = null;
  function ol(e) {
    if (
      (typeof Va == "function" && ci(e),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode(Hl, e);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : Qd,
    Gd = Math.log,
    Xd = Math.LN2;
  function Qd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Gd(e) / Xd) | 0)) | 0);
  }
  var Gn = 256,
    Xn = 262144,
    Qn = 4194304;
  function Ll(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~u),
          a !== 0
            ? (n = Ll(a))
            : ((i &= f),
              i !== 0
                ? (n = Ll(i))
                : l || ((l = f & ~e), l !== 0 && (n = Ll(l)))))
        : ((f = a & ~u),
          f !== 0
            ? (n = Ll(f))
            : i !== 0
              ? (n = Ll(i))
              : l || ((l = a & ~e), l !== 0 && (n = Ll(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Za(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Vd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wf() {
    var e = Qn;
    return ((Qn <<= 1), (Qn & 62914560) === 0 && (Qn = 4194304), e);
  }
  function fi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ka(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Zd(e, t, l, a, n, u) {
    var i = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var f = e.entanglements,
      r = e.expirationTimes,
      y = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var N = 31 - pt(l),
        T = 1 << N;
      ((f[N] = 0), (r[N] = -1));
      var p = y[N];
      if (p !== null)
        for (y[N] = null, N = 0; N < p.length; N++) {
          var x = p[N];
          x !== null && (x.lane &= -536870913);
        }
      l &= ~T;
    }
    (a !== 0 && Mf(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t)));
  }
  function Mf(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - pt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Cf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - pt(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function Uf(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : si(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function si(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ri(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Df() {
    var e = M.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : xd(e.type));
  }
  function Rf(e, t) {
    var l = M.p;
    try {
      return ((M.p = e), t());
    } finally {
      M.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2),
    We = "__reactFiber$" + dl,
    st = "__reactProps$" + dl,
    aa = "__reactContainer$" + dl,
    oi = "__reactEvents$" + dl,
    Kd = "__reactListeners$" + dl,
    kd = "__reactHandles$" + dl,
    Bf = "__reactResources$" + dl,
    ka = "__reactMarker$" + dl;
  function di(e) {
    (delete e[We], delete e[st], delete e[oi], delete e[Kd], delete e[kd]);
  }
  function na(e) {
    var t = e[We];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[aa] || l[We])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = nd(e); e !== null; ) {
            if ((l = e[We])) return l;
            e = nd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function ua(e) {
    if ((e = e[We] || e[aa])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ja(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ia(e) {
    var t = e[Bf];
    return (
      t ||
        (t = e[Bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ke(e) {
    e[ka] = !0;
  }
  var Hf = new Set(),
    Lf = {};
  function Yl(e, t) {
    (ca(e, t), ca(e + "Capture", t));
  }
  function ca(e, t) {
    for (Lf[e] = t, e = 0; e < t.length; e++) Hf.add(t[e]);
  }
  var Jd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Yf = {},
    qf = {};
  function Wd(e) {
    return Ht.call(qf, e)
      ? !0
      : Ht.call(Yf, e)
        ? !1
        : Jd.test(e)
          ? (qf[e] = !0)
          : ((Yf[e] = !0), !1);
  }
  function Zn(e, t, l) {
    if (Wd(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Kn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function kt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function At(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Gf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Fd(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function mi(e) {
    if (!e._valueTracker) {
      var t = Gf(e) ? "checked" : "value";
      e._valueTracker = Fd(e, t, "" + e[t]);
    }
  }
  function Xf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = Gf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function kn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $d = /[\n"\\]/g;
  function jt(e) {
    return e.replace($d, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function hi(e, t, l, a, n, u, i, f) {
    ((e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + At(t))
          : e.value !== "" + At(t) && (e.value = "" + At(t))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      t != null
        ? gi(e, i, At(t))
        : l != null
          ? gi(e, i, At(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.name = "" + At(f))
        : e.removeAttribute("name"));
  }
  function Qf(e, t, l, a, n, u, i, f) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        mi(e);
        return;
      }
      ((l = l != null ? "" + At(l) : ""),
        (t = t != null ? "" + At(t) : l),
        f || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = f ? e.checked : !!a),
      (e.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i),
      mi(e));
  }
  function gi(e, t, l) {
    (t === "number" && kn(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function fa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + At(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vf(e, t, l) {
    if (
      t != null &&
      ((t = "" + At(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + At(l) : "";
  }
  function Zf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Ze(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = At(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      mi(e));
  }
  function sa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Id = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Kf(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Id.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function kf(e, t, l) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Kf(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Kf(e, u, t[u]);
  }
  function vi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    em =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jn(e) {
    return em.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Jt() {}
  var yi = null;
  function pi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ra = null,
    oa = null;
  function Jf(e) {
    var t = ua(e);
    if (t && (e = t.stateNode)) {
      var l = e[st] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (hi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + jt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[st] || null;
                if (!n) throw Error(o(90));
                hi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && Xf(a));
          }
          break e;
        case "textarea":
          Vf(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && fa(e, !!l.multiple, t, !1));
      }
    }
  }
  var bi = !1;
  function Wf(e, t, l) {
    if (bi) return e(t, l);
    bi = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((bi = !1),
        (ra !== null || oa !== null) &&
          (Ru(), ra && ((t = ra), (e = oa), (oa = ra = null), Jf(t), e)))
      )
        for (t = 0; t < e.length; t++) Jf(e[t]);
    }
  }
  function Wa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[st] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(o(231, t, typeof l));
    return l;
  }
  var Wt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    xi = !1;
  if (Wt)
    try {
      var Fa = {};
      (Object.defineProperty(Fa, "passive", {
        get: function () {
          xi = !0;
        },
      }),
        window.addEventListener("test", Fa, Fa),
        window.removeEventListener("test", Fa, Fa));
    } catch {
      xi = !1;
    }
  var ml = null,
    Si = null,
    Wn = null;
  function Ff() {
    if (Wn) return Wn;
    var e,
      t = Si,
      l = t.length,
      a,
      n = "value" in ml ? ml.value : ml.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var i = l - e;
    for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
    return (Wn = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Fn(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $n() {
    return !0;
  }
  function $f() {
    return !1;
  }
  function rt(e) {
    function t(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in e)
        e.hasOwnProperty(f) && ((l = e[f]), (this[f] = l ? l(u) : u[f]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $n
          : $f),
        (this.isPropagationStopped = $f),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = $n));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = $n));
        },
        persist: function () {},
        isPersistent: $n,
      }),
      t
    );
  }
  var ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    In = rt(ql),
    $a = H({}, ql, { view: 0, detail: 0 }),
    tm = rt($a),
    Ni,
    _i,
    Ia,
    Pn = H({}, $a, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ia &&
              (Ia && e.type === "mousemove"
                ? ((Ni = e.screenX - Ia.screenX), (_i = e.screenY - Ia.screenY))
                : (_i = Ni = 0),
              (Ia = e)),
            Ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : _i;
      },
    }),
    If = rt(Pn),
    lm = H({}, Pn, { dataTransfer: 0 }),
    am = rt(lm),
    nm = H({}, $a, { relatedTarget: 0 }),
    Ei = rt(nm),
    um = H({}, ql, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    im = rt(um),
    cm = H({}, ql, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fm = rt(cm),
    sm = H({}, ql, { data: 0 }),
    Pf = rt(sm),
    rm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    om = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    dm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = dm[e])
        ? !!t[e]
        : !1;
  }
  function zi() {
    return mm;
  }
  var hm = H({}, $a, {
      key: function (e) {
        if (e.key) {
          var t = rm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fn(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? om[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zi,
      charCode: function (e) {
        return e.type === "keypress" ? Fn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fn(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    gm = rt(hm),
    vm = H({}, Pn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    es = rt(vm),
    ym = H({}, $a, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zi,
    }),
    pm = rt(ym),
    bm = H({}, ql, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xm = rt(bm),
    Sm = H({}, Pn, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nm = rt(Sm),
    _m = H({}, ql, { newState: 0, oldState: 0 }),
    Em = rt(_m),
    zm = [9, 13, 27, 32],
    Ti = Wt && "CompositionEvent" in window,
    Pa = null;
  Wt && "documentMode" in document && (Pa = document.documentMode);
  var Tm = Wt && "TextEvent" in window && !Pa,
    ts = Wt && (!Ti || (Pa && 8 < Pa && 11 >= Pa)),
    ls = " ",
    as = !1;
  function ns(e, t) {
    switch (e) {
      case "keyup":
        return zm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function us(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var da = !1;
  function Am(e, t) {
    switch (e) {
      case "compositionend":
        return us(t);
      case "keypress":
        return t.which !== 32 ? null : ((as = !0), ls);
      case "textInput":
        return ((e = t.data), e === ls && as ? null : e);
      default:
        return null;
    }
  }
  function jm(e, t) {
    if (da)
      return e === "compositionend" || (!Ti && ns(e, t))
        ? ((e = Ff()), (Wn = Si = ml = null), (da = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ts && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Om = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function is(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Om[e.type] : t === "textarea";
  }
  function cs(e, t, l, a) {
    (ra ? (oa ? oa.push(a) : (oa = [a])) : (ra = a),
      (t = Xu(t, "onChange")),
      0 < t.length &&
        ((l = new In("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var en = null,
    tn = null;
  function wm(e) {
    Vo(e, 0);
  }
  function eu(e) {
    var t = Ja(e);
    if (Xf(t)) return e;
  }
  function fs(e, t) {
    if (e === "change") return t;
  }
  var ss = !1;
  if (Wt) {
    var Ai;
    if (Wt) {
      var ji = "oninput" in document;
      if (!ji) {
        var rs = document.createElement("div");
        (rs.setAttribute("oninput", "return;"),
          (ji = typeof rs.oninput == "function"));
      }
      Ai = ji;
    } else Ai = !1;
    ss = Ai && (!document.documentMode || 9 < document.documentMode);
  }
  function os() {
    en && (en.detachEvent("onpropertychange", ds), (tn = en = null));
  }
  function ds(e) {
    if (e.propertyName === "value" && eu(tn)) {
      var t = [];
      (cs(t, tn, e, pi(e)), Wf(wm, t));
    }
  }
  function Mm(e, t, l) {
    e === "focusin"
      ? (os(), (en = t), (tn = l), en.attachEvent("onpropertychange", ds))
      : e === "focusout" && os();
  }
  function Cm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return eu(tn);
  }
  function Um(e, t) {
    if (e === "click") return eu(t);
  }
  function Dm(e, t) {
    if (e === "input" || e === "change") return eu(t);
  }
  function Rm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var bt = typeof Object.is == "function" ? Object.is : Rm;
  function ln(e, t) {
    if (bt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ht.call(t, n) || !bt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function ms(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hs(e, t) {
    var l = ms(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ms(l);
    }
  }
  function gs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? gs(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function vs(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = kn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = kn(e.document);
    }
    return t;
  }
  function Oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Bm = Wt && "documentMode" in document && 11 >= document.documentMode,
    ma = null,
    wi = null,
    an = null,
    Mi = !1;
  function ys(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Mi ||
      ma == null ||
      ma !== kn(a) ||
      ((a = ma),
      "selectionStart" in a && Oi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (an && ln(an, a)) ||
        ((an = a),
        (a = Xu(wi, "onSelect")),
        0 < a.length &&
          ((t = new In("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ma))));
  }
  function Gl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ha = {
      animationend: Gl("Animation", "AnimationEnd"),
      animationiteration: Gl("Animation", "AnimationIteration"),
      animationstart: Gl("Animation", "AnimationStart"),
      transitionrun: Gl("Transition", "TransitionRun"),
      transitionstart: Gl("Transition", "TransitionStart"),
      transitioncancel: Gl("Transition", "TransitionCancel"),
      transitionend: Gl("Transition", "TransitionEnd"),
    },
    Ci = {},
    ps = {};
  Wt &&
    ((ps = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ha.animationend.animation,
      delete ha.animationiteration.animation,
      delete ha.animationstart.animation),
    "TransitionEvent" in window || delete ha.transitionend.transition);
  function Xl(e) {
    if (Ci[e]) return Ci[e];
    if (!ha[e]) return e;
    var t = ha[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in ps) return (Ci[e] = t[l]);
    return e;
  }
  var bs = Xl("animationend"),
    xs = Xl("animationiteration"),
    Ss = Xl("animationstart"),
    Hm = Xl("transitionrun"),
    Lm = Xl("transitionstart"),
    Ym = Xl("transitioncancel"),
    Ns = Xl("transitionend"),
    _s = new Map(),
    Ui =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ui.push("scrollEnd");
  function Lt(e, t) {
    (_s.set(e, t), Yl(t, [e]));
  }
  var tu =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Ot = [],
    ga = 0,
    Di = 0;
  function lu() {
    for (var e = ga, t = (Di = ga = 0); t < e; ) {
      var l = Ot[t];
      Ot[t++] = null;
      var a = Ot[t];
      Ot[t++] = null;
      var n = Ot[t];
      Ot[t++] = null;
      var u = Ot[t];
      if (((Ot[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && Es(l, n, u);
    }
  }
  function au(e, t, l, a) {
    ((Ot[ga++] = e),
      (Ot[ga++] = t),
      (Ot[ga++] = l),
      (Ot[ga++] = a),
      (Di |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Ri(e, t, l, a) {
    return (au(e, t, l, a), nu(e));
  }
  function Ql(e, t) {
    return (au(e, null, null, t), nu(e));
  }
  function Es(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - pt(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function nu(e) {
    if (50 < Tn) throw ((Tn = 0), (Vc = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var va = {};
  function qm(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function xt(e, t, l, a) {
    return new qm(e, t, l, a);
  }
  function Bi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ft(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = xt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function zs(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function uu(e, t, l, a, n, u) {
    var i = 0;
    if (((a = e), typeof e == "function")) Bi(e) && (i = 1);
    else if (typeof e == "string")
      i = Z0(e, l, A.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ct:
          return (
            (e = xt(31, l, t, n)),
            (e.elementType = ct),
            (e.lanes = u),
            e
          );
        case _e:
          return Vl(l.children, n, u, t);
        case J:
          ((i = 8), (n |= 24));
          break;
        case fe:
          return (
            (e = xt(12, l, t, n | 2)),
            (e.elementType = fe),
            (e.lanes = u),
            e
          );
        case Xe:
          return (
            (e = xt(13, l, t, n)),
            (e.elementType = Xe),
            (e.lanes = u),
            e
          );
        case Qe:
          return (
            (e = xt(19, l, t, n)),
            (e.elementType = Qe),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ze:
                i = 10;
                break e;
              case Oe:
                i = 9;
                break e;
              case et:
                i = 11;
                break e;
              case ee:
                i = 14;
                break e;
              case Ve:
                ((i = 16), (a = null));
                break e;
            }
          ((i = 29),
            (l = Error(o(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = xt(i, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function Vl(e, t, l, a) {
    return ((e = xt(7, e, a, t)), (e.lanes = l), e);
  }
  function Hi(e, t, l) {
    return ((e = xt(6, e, null, t)), (e.lanes = l), e);
  }
  function Ts(e) {
    var t = xt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Li(e, t, l) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var As = new WeakMap();
  function wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = As.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Tt(t) }), As.set(e, t), t);
    }
    return { value: e, source: t, stack: Tt(t) };
  }
  var ya = [],
    pa = 0,
    iu = null,
    nn = 0,
    Mt = [],
    Ct = 0,
    hl = null,
    Qt = 1,
    Vt = "";
  function $t(e, t) {
    ((ya[pa++] = nn), (ya[pa++] = iu), (iu = e), (nn = t));
  }
  function js(e, t, l) {
    ((Mt[Ct++] = Qt), (Mt[Ct++] = Vt), (Mt[Ct++] = hl), (hl = e));
    var a = Qt;
    e = Vt;
    var n = 32 - pt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - pt(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Qt = (1 << (32 - pt(t) + n)) | (l << n) | a),
        (Vt = u + e));
    } else ((Qt = (1 << u) | (l << n) | a), (Vt = e));
  }
  function Yi(e) {
    e.return !== null && ($t(e, 1), js(e, 1, 0));
  }
  function qi(e) {
    for (; e === iu; )
      ((iu = ya[--pa]), (ya[pa] = null), (nn = ya[--pa]), (ya[pa] = null));
    for (; e === hl; )
      ((hl = Mt[--Ct]),
        (Mt[Ct] = null),
        (Vt = Mt[--Ct]),
        (Mt[Ct] = null),
        (Qt = Mt[--Ct]),
        (Mt[Ct] = null));
  }
  function Os(e, t) {
    ((Mt[Ct++] = Qt),
      (Mt[Ct++] = Vt),
      (Mt[Ct++] = hl),
      (Qt = t.id),
      (Vt = t.overflow),
      (hl = e));
  }
  var Fe = null,
    Te = null,
    ce = !1,
    gl = null,
    Ut = !1,
    Gi = Error(o(519));
  function vl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (un(wt(t, e)), Gi);
  }
  function ws(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[We] = e), (t[st] = a), l)) {
      case "dialog":
        (ae("cancel", t), ae("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ae("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < jn.length; l++) ae(jn[l], t);
        break;
      case "source":
        ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ae("error", t), ae("load", t));
        break;
      case "details":
        ae("toggle", t);
        break;
      case "input":
        (ae("invalid", t),
          Qf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        ae("invalid", t);
        break;
      case "textarea":
        (ae("invalid", t), Zf(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Jo(t.textContent, l)
        ? (a.popover != null && (ae("beforetoggle", t), ae("toggle", t)),
          a.onScroll != null && ae("scroll", t),
          a.onScrollEnd != null && ae("scrollend", t),
          a.onClick != null && (t.onclick = Jt),
          (t = !0))
        : (t = !1),
      t || vl(e, !0));
  }
  function Ms(e) {
    for (Fe = e.return; Fe; )
      switch (Fe.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          Fe = Fe.return;
      }
  }
  function ba(e) {
    if (e !== Fe) return !1;
    if (!ce) return (Ms(e), (ce = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || uf(e.type, e.memoizedProps))),
        (l = !l)),
      l && Te && vl(e),
      Ms(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Te = ad(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Te = ad(e);
    } else
      t === 27
        ? ((t = Te), wl(e.type) ? ((e = of), (of = null), (Te = e)) : (Te = t))
        : (Te = Fe ? Rt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Zl() {
    ((Te = Fe = null), (ce = !1));
  }
  function Xi() {
    var e = gl;
    return (
      e !== null &&
        (ht === null ? (ht = e) : ht.push.apply(ht, e), (gl = null)),
      e
    );
  }
  function un(e) {
    gl === null ? (gl = [e]) : gl.push(e);
  }
  var Qi = c(null),
    Kl = null,
    It = null;
  function yl(e, t, l) {
    (_(Qi, t._currentValue), (t._currentValue = l));
  }
  function Pt(e) {
    ((e._currentValue = Qi.current), m(Qi));
  }
  function Vi(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Zi(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var r = 0; r < t.length; r++)
            if (f.context === t[r]) {
              ((u.lanes |= l),
                (f = u.alternate),
                f !== null && (f.lanes |= l),
                Vi(u.return, l, e),
                a || (i = null));
              break e;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(o(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Vi(i, l, e),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function xa(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(o(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = n.type;
          bt(n.pendingProps.value, i.value) ||
            (e !== null ? e.push(f) : (e = [f]));
        }
      } else if (n === D.current) {
        if (((i = n.alternate), i === null)) throw Error(o(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Un) : (e = [Un]));
      }
      n = n.return;
    }
    (e !== null && Zi(t, e, l, a), (t.flags |= 262144));
  }
  function cu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!bt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function kl(e) {
    ((Kl = e),
      (It = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function $e(e) {
    return Cs(Kl, e);
  }
  function fu(e, t) {
    return (Kl === null && kl(e), Cs(e, t));
  }
  function Cs(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), It === null)) {
      if (e === null) throw Error(o(308));
      ((It = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else It = It.next = t;
    return l;
  }
  var Gm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    Xm = b.unstable_scheduleCallback,
    Qm = b.unstable_NormalPriority,
    He = {
      $$typeof: ze,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ki() {
    return { controller: new Gm(), data: new Map(), refCount: 0 };
  }
  function cn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Xm(Qm, function () {
          e.controller.abort();
        }));
  }
  var fn = null,
    ki = 0,
    Sa = 0,
    Na = null;
  function Vm(e, t) {
    if (fn === null) {
      var l = (fn = []);
      ((ki = 0),
        (Sa = Fc()),
        (Na = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (ki++, t.then(Us, Us), t);
  }
  function Us() {
    if (--ki === 0 && fn !== null) {
      Na !== null && (Na.status = "fulfilled");
      var e = fn;
      ((fn = null), (Sa = 0), (Na = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Zm(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Ds = S.S;
  S.S = function (e, t) {
    ((po = lt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Vm(e, t),
      Ds !== null && Ds(e, t));
  };
  var Jl = c(null);
  function Ji() {
    var e = Jl.current;
    return e !== null ? e : Ne.pooledCache;
  }
  function su(e, t) {
    t === null ? _(Jl, Jl.current) : _(Jl, t.pool);
  }
  function Rs() {
    var e = Ji();
    return e === null ? null : { parent: He._currentValue, pool: e };
  }
  var _a = Error(o(460)),
    Wi = Error(o(474)),
    ru = Error(o(542)),
    ou = { then: function () {} };
  function Bs(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Hs(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Jt, Jt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ys(e), e);
      default:
        if (typeof t.status == "string") t.then(Jt, Jt);
        else {
          if (((e = Ne), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ys(e), e);
        }
        throw ((Fl = t), _a);
    }
  }
  function Wl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Fl = l), _a)
        : l;
    }
  }
  var Fl = null;
  function Ls() {
    if (Fl === null) throw Error(o(459));
    var e = Fl;
    return ((Fl = null), e);
  }
  function Ys(e) {
    if (e === _a || e === ru) throw Error(o(483));
  }
  var Ea = null,
    sn = 0;
  function du(e) {
    var t = sn;
    return ((sn += 1), Ea === null && (Ea = []), Hs(Ea, e, t));
  }
  function rn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function mu(e, t) {
    throw t.$$typeof === ie
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function qs(e) {
    function t(h, d) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [d]), (h.flags |= 16)) : v.push(d);
      }
    }
    function l(h, d) {
      if (!e) return null;
      for (; d !== null; ) (t(h, d), (d = d.sibling));
      return null;
    }
    function a(h) {
      for (var d = new Map(); h !== null; )
        (h.key !== null ? d.set(h.key, h) : d.set(h.index, h), (h = h.sibling));
      return d;
    }
    function n(h, d) {
      return ((h = Ft(h, d)), (h.index = 0), (h.sibling = null), h);
    }
    function u(h, d, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((h.flags |= 67108866), d) : v)
              : ((h.flags |= 67108866), d))
          : ((h.flags |= 1048576), d)
      );
    }
    function i(h) {
      return (e && h.alternate === null && (h.flags |= 67108866), h);
    }
    function f(h, d, v, z) {
      return d === null || d.tag !== 6
        ? ((d = Hi(v, h.mode, z)), (d.return = h), d)
        : ((d = n(d, v)), (d.return = h), d);
    }
    function r(h, d, v, z) {
      var G = v.type;
      return G === _e
        ? N(h, d, v.props.children, z, v.key)
        : d !== null &&
            (d.elementType === G ||
              (typeof G == "object" &&
                G !== null &&
                G.$$typeof === Ve &&
                Wl(G) === d.type))
          ? ((d = n(d, v.props)), rn(d, v), (d.return = h), d)
          : ((d = uu(v.type, v.key, v.props, null, h.mode, z)),
            rn(d, v),
            (d.return = h),
            d);
    }
    function y(h, d, v, z) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = Li(v, h.mode, z)), (d.return = h), d)
        : ((d = n(d, v.children || [])), (d.return = h), d);
    }
    function N(h, d, v, z, G) {
      return d === null || d.tag !== 7
        ? ((d = Vl(v, h.mode, z, G)), (d.return = h), d)
        : ((d = n(d, v)), (d.return = h), d);
    }
    function T(h, d, v) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Hi("" + d, h.mode, v)), (d.return = h), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case te:
            return (
              (v = uu(d.type, d.key, d.props, null, h.mode, v)),
              rn(v, d),
              (v.return = h),
              v
            );
          case de:
            return ((d = Li(d, h.mode, v)), (d.return = h), d);
          case Ve:
            return ((d = Wl(d)), T(h, d, v));
        }
        if (Ze(d) || me(d))
          return ((d = Vl(d, h.mode, v, null)), (d.return = h), d);
        if (typeof d.then == "function") return T(h, du(d), v);
        if (d.$$typeof === ze) return T(h, fu(h, d), v);
        mu(h, d);
      }
      return null;
    }
    function p(h, d, v, z) {
      var G = d !== null ? d.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return G !== null ? null : f(h, d, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case te:
            return v.key === G ? r(h, d, v, z) : null;
          case de:
            return v.key === G ? y(h, d, v, z) : null;
          case Ve:
            return ((v = Wl(v)), p(h, d, v, z));
        }
        if (Ze(v) || me(v)) return G !== null ? null : N(h, d, v, z, null);
        if (typeof v.then == "function") return p(h, d, du(v), z);
        if (v.$$typeof === ze) return p(h, d, fu(h, v), z);
        mu(h, v);
      }
      return null;
    }
    function x(h, d, v, z, G) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((h = h.get(v) || null), f(d, h, "" + z, G));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case te:
            return (
              (h = h.get(z.key === null ? v : z.key) || null),
              r(d, h, z, G)
            );
          case de:
            return (
              (h = h.get(z.key === null ? v : z.key) || null),
              y(d, h, z, G)
            );
          case Ve:
            return ((z = Wl(z)), x(h, d, v, z, G));
        }
        if (Ze(z) || me(z))
          return ((h = h.get(v) || null), N(d, h, z, G, null));
        if (typeof z.then == "function") return x(h, d, v, du(z), G);
        if (z.$$typeof === ze) return x(h, d, v, fu(d, z), G);
        mu(d, z);
      }
      return null;
    }
    function L(h, d, v, z) {
      for (
        var G = null, re = null, Y = d, I = (d = 0), ue = null;
        Y !== null && I < v.length;
        I++
      ) {
        Y.index > I ? ((ue = Y), (Y = null)) : (ue = Y.sibling);
        var oe = p(h, Y, v[I], z);
        if (oe === null) {
          Y === null && (Y = ue);
          break;
        }
        (e && Y && oe.alternate === null && t(h, Y),
          (d = u(oe, d, I)),
          re === null ? (G = oe) : (re.sibling = oe),
          (re = oe),
          (Y = ue));
      }
      if (I === v.length) return (l(h, Y), ce && $t(h, I), G);
      if (Y === null) {
        for (; I < v.length; I++)
          ((Y = T(h, v[I], z)),
            Y !== null &&
              ((d = u(Y, d, I)),
              re === null ? (G = Y) : (re.sibling = Y),
              (re = Y)));
        return (ce && $t(h, I), G);
      }
      for (Y = a(Y); I < v.length; I++)
        ((ue = x(Y, h, I, v[I], z)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              Y.delete(ue.key === null ? I : ue.key),
            (d = u(ue, d, I)),
            re === null ? (G = ue) : (re.sibling = ue),
            (re = ue)));
      return (
        e &&
          Y.forEach(function (Rl) {
            return t(h, Rl);
          }),
        ce && $t(h, I),
        G
      );
    }
    function V(h, d, v, z) {
      if (v == null) throw Error(o(151));
      for (
        var G = null, re = null, Y = d, I = (d = 0), ue = null, oe = v.next();
        Y !== null && !oe.done;
        I++, oe = v.next()
      ) {
        Y.index > I ? ((ue = Y), (Y = null)) : (ue = Y.sibling);
        var Rl = p(h, Y, oe.value, z);
        if (Rl === null) {
          Y === null && (Y = ue);
          break;
        }
        (e && Y && Rl.alternate === null && t(h, Y),
          (d = u(Rl, d, I)),
          re === null ? (G = Rl) : (re.sibling = Rl),
          (re = Rl),
          (Y = ue));
      }
      if (oe.done) return (l(h, Y), ce && $t(h, I), G);
      if (Y === null) {
        for (; !oe.done; I++, oe = v.next())
          ((oe = T(h, oe.value, z)),
            oe !== null &&
              ((d = u(oe, d, I)),
              re === null ? (G = oe) : (re.sibling = oe),
              (re = oe)));
        return (ce && $t(h, I), G);
      }
      for (Y = a(Y); !oe.done; I++, oe = v.next())
        ((oe = x(Y, h, I, oe.value, z)),
          oe !== null &&
            (e &&
              oe.alternate !== null &&
              Y.delete(oe.key === null ? I : oe.key),
            (d = u(oe, d, I)),
            re === null ? (G = oe) : (re.sibling = oe),
            (re = oe)));
      return (
        e &&
          Y.forEach(function (lh) {
            return t(h, lh);
          }),
        ce && $t(h, I),
        G
      );
    }
    function Se(h, d, v, z) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === _e &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case te:
            e: {
              for (var G = v.key; d !== null; ) {
                if (d.key === G) {
                  if (((G = v.type), G === _e)) {
                    if (d.tag === 7) {
                      (l(h, d.sibling),
                        (z = n(d, v.props.children)),
                        (z.return = h),
                        (h = z));
                      break e;
                    }
                  } else if (
                    d.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === Ve &&
                      Wl(G) === d.type)
                  ) {
                    (l(h, d.sibling),
                      (z = n(d, v.props)),
                      rn(z, v),
                      (z.return = h),
                      (h = z));
                    break e;
                  }
                  l(h, d);
                  break;
                } else t(h, d);
                d = d.sibling;
              }
              v.type === _e
                ? ((z = Vl(v.props.children, h.mode, z, v.key)),
                  (z.return = h),
                  (h = z))
                : ((z = uu(v.type, v.key, v.props, null, h.mode, z)),
                  rn(z, v),
                  (z.return = h),
                  (h = z));
            }
            return i(h);
          case de:
            e: {
              for (G = v.key; d !== null; ) {
                if (d.key === G)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    (l(h, d.sibling),
                      (z = n(d, v.children || [])),
                      (z.return = h),
                      (h = z));
                    break e;
                  } else {
                    l(h, d);
                    break;
                  }
                else t(h, d);
                d = d.sibling;
              }
              ((z = Li(v, h.mode, z)), (z.return = h), (h = z));
            }
            return i(h);
          case Ve:
            return ((v = Wl(v)), Se(h, d, v, z));
        }
        if (Ze(v)) return L(h, d, v, z);
        if (me(v)) {
          if (((G = me(v)), typeof G != "function")) throw Error(o(150));
          return ((v = G.call(v)), V(h, d, v, z));
        }
        if (typeof v.then == "function") return Se(h, d, du(v), z);
        if (v.$$typeof === ze) return Se(h, d, fu(h, v), z);
        mu(h, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (l(h, d.sibling), (z = n(d, v)), (z.return = h), (h = z))
            : (l(h, d), (z = Hi(v, h.mode, z)), (z.return = h), (h = z)),
          i(h))
        : l(h, d);
    }
    return function (h, d, v, z) {
      try {
        sn = 0;
        var G = Se(h, d, v, z);
        return ((Ea = null), G);
      } catch (Y) {
        if (Y === _a || Y === ru) throw Y;
        var re = xt(29, Y, null, h.mode);
        return ((re.lanes = z), (re.return = h), re);
      } finally {
      }
    };
  }
  var $l = qs(!0),
    Gs = qs(!1),
    pl = !1;
  function Fi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function $i(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function bl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function xl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (he & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = nu(e)),
        Es(e, null, l),
        t
      );
    }
    return (au(e, a, t, l), nu(e));
  }
  function on(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Cf(e, l));
    }
  }
  function Ii(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Pi = !1;
  function dn() {
    if (Pi) {
      var e = Na;
      if (e !== null) throw e;
    }
  }
  function mn(e, t, l, a) {
    Pi = !1;
    var n = e.updateQueue;
    pl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var r = f,
        y = r.next;
      ((r.next = null), i === null ? (u = y) : (i.next = y), (i = r));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (f = N.lastBaseUpdate),
        f !== i &&
          (f === null ? (N.firstBaseUpdate = y) : (f.next = y),
          (N.lastBaseUpdate = r)));
    }
    if (u !== null) {
      var T = n.baseState;
      ((i = 0), (N = y = r = null), (f = u));
      do {
        var p = f.lane & -536870913,
          x = p !== f.lane;
        if (x ? (ne & p) === p : (a & p) === p) {
          (p !== 0 && p === Sa && (Pi = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var L = e,
              V = f;
            p = t;
            var Se = l;
            switch (V.tag) {
              case 1:
                if (((L = V.payload), typeof L == "function")) {
                  T = L.call(Se, T, p);
                  break e;
                }
                T = L;
                break e;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = V.payload),
                  (p = typeof L == "function" ? L.call(Se, T, p) : L),
                  p == null)
                )
                  break e;
                T = H({}, T, p);
                break e;
              case 2:
                pl = !0;
            }
          }
          ((p = f.callback),
            p !== null &&
              ((e.flags |= 64),
              x && (e.flags |= 8192),
              (x = n.callbacks),
              x === null ? (n.callbacks = [p]) : x.push(p)));
        } else
          ((x = {
            lane: p,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            N === null ? ((y = N = x), (r = T)) : (N = N.next = x),
            (i |= p));
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          ((x = f),
            (f = x.next),
            (x.next = null),
            (n.lastBaseUpdate = x),
            (n.shared.pending = null));
        }
      } while (!0);
      (N === null && (r = T),
        (n.baseState = r),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = N),
        u === null && (n.shared.lanes = 0),
        (zl |= i),
        (e.lanes = i),
        (e.memoizedState = T));
    }
  }
  function Xs(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function Qs(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Xs(l[e], t);
  }
  var za = c(null),
    hu = c(0);
  function Vs(e, t) {
    ((e = fl), _(hu, e), _(za, t), (fl = e | t.baseLanes));
  }
  function ec() {
    (_(hu, fl), _(za, za.current));
  }
  function tc() {
    ((fl = hu.current), m(za), m(hu));
  }
  var St = c(null),
    Dt = null;
  function Sl(e) {
    var t = e.alternate;
    (_(De, De.current & 1),
      _(St, e),
      Dt === null &&
        (t === null || za.current !== null || t.memoizedState !== null) &&
        (Dt = e));
  }
  function lc(e) {
    (_(De, De.current), _(St, e), Dt === null && (Dt = e));
  }
  function Zs(e) {
    e.tag === 22
      ? (_(De, De.current), _(St, e), Dt === null && (Dt = e))
      : Nl();
  }
  function Nl() {
    (_(De, De.current), _(St, St.current));
  }
  function Nt(e) {
    (m(St), Dt === e && (Dt = null), m(De));
  }
  var De = c(0);
  function gu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || sf(l) || rf(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var el = 0,
    W = null,
    be = null,
    Le = null,
    vu = !1,
    Ta = !1,
    Il = !1,
    yu = 0,
    hn = 0,
    Aa = null,
    Km = 0;
  function Me() {
    throw Error(o(321));
  }
  function ac(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!bt(e[l], t[l])) return !1;
    return !0;
  }
  function nc(e, t, l, a, n, u) {
    return (
      (el = u),
      (W = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = e === null || e.memoizedState === null ? jr : bc),
      (Il = !1),
      (u = l(a, n)),
      (Il = !1),
      Ta && (u = ks(t, l, a, n)),
      Ks(e),
      u
    );
  }
  function Ks(e) {
    S.H = yn;
    var t = be !== null && be.next !== null;
    if (((el = 0), (Le = be = W = null), (vu = !1), (hn = 0), (Aa = null), t))
      throw Error(o(300));
    e === null ||
      Ye ||
      ((e = e.dependencies), e !== null && cu(e) && (Ye = !0));
  }
  function ks(e, t, l, a) {
    W = e;
    var n = 0;
    do {
      if ((Ta && (Aa = null), (hn = 0), (Ta = !1), 25 <= n))
        throw Error(o(301));
      if (((n += 1), (Le = be = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((S.H = Or), (u = t(l, a)));
    } while (Ta);
    return u;
  }
  function km() {
    var e = S.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? gn(t) : t),
      (e = e.useState()[0]),
      (be !== null ? be.memoizedState : null) !== e && (W.flags |= 1024),
      t
    );
  }
  function uc() {
    var e = yu !== 0;
    return ((yu = 0), e);
  }
  function ic(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function cc(e) {
    if (vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      vu = !1;
    }
    ((el = 0), (Le = be = W = null), (Ta = !1), (hn = yu = 0), (Aa = null));
  }
  function it() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Le === null ? (W.memoizedState = Le = e) : (Le = Le.next = e), Le);
  }
  function Re() {
    if (be === null) {
      var e = W.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = Le === null ? W.memoizedState : Le.next;
    if (t !== null) ((Le = t), (be = e));
    else {
      if (e === null)
        throw W.alternate === null ? Error(o(467)) : Error(o(310));
      ((be = e),
        (e = {
          memoizedState: be.memoizedState,
          baseState: be.baseState,
          baseQueue: be.baseQueue,
          queue: be.queue,
          next: null,
        }),
        Le === null ? (W.memoizedState = Le = e) : (Le = Le.next = e));
    }
    return Le;
  }
  function pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gn(e) {
    var t = hn;
    return (
      (hn += 1),
      Aa === null && (Aa = []),
      (e = Hs(Aa, e, t)),
      (t = W),
      (Le === null ? t.memoizedState : Le.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? jr : bc)),
      e
    );
  }
  function bu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return gn(e);
      if (e.$$typeof === ze) return $e(e);
    }
    throw Error(o(438, String(e)));
  }
  function fc(e) {
    var t = null,
      l = W.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = W.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = pu()), (W.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Xt;
    return (t.index++, l);
  }
  function tl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xu(e) {
    var t = Re();
    return sc(t, be, e);
  }
  function sc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var f = (i = null),
        r = null,
        y = t,
        N = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (ne & T) === T : (el & T) === T) {
          var p = y.revertLane;
          if (p === 0)
            (r !== null &&
              (r = r.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              T === Sa && (N = !0));
          else if ((el & p) === p) {
            ((y = y.next), p === Sa && (N = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              r === null ? ((f = r = T), (i = u)) : (r = r.next = T),
              (W.lanes |= p),
              (zl |= p));
          ((T = y.action),
            Il && l(u, T),
            (u = y.hasEagerState ? y.eagerState : l(u, T)));
        } else
          ((p = {
            lane: T,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            r === null ? ((f = r = p), (i = u)) : (r = r.next = p),
            (W.lanes |= T),
            (zl |= T));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (r === null ? (i = u) : (r.next = f),
        !bt(u, e.memoizedState) && ((Ye = !0), N && ((l = Na), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = i),
        (e.baseQueue = r),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function rc(e) {
    var t = Re(),
      l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== n);
      (bt(u, t.memoizedState) || (Ye = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Js(e, t, l) {
    var a = W,
      n = Re(),
      u = ce;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var i = !bt((be || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Ye = !0)),
      (n = n.queue),
      mc($s.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || i || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ja(9, { destroy: void 0 }, Fs.bind(null, a, n, l, t), null),
        Ne === null)
      )
        throw Error(o(349));
      u || (el & 127) !== 0 || Ws(a, t, l);
    }
    return l;
  }
  function Ws(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = W.updateQueue),
      t === null
        ? ((t = pu()), (W.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Fs(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Is(t) && Ps(e));
  }
  function $s(e, t, l) {
    return l(function () {
      Is(t) && Ps(e);
    });
  }
  function Is(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !bt(e, l);
    } catch {
      return !0;
    }
  }
  function Ps(e) {
    var t = Ql(e, 2);
    t !== null && gt(t, e, 2);
  }
  function oc(e) {
    var t = it();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Il)) {
        ol(!0);
        try {
          l();
        } finally {
          ol(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function er(e, t, l, a) {
    return ((e.baseState = l), sc(e, be, typeof a == "function" ? a : tl));
  }
  function Jm(e, t, l, a, n) {
    if (_u(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (S.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), tr(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function tr(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = S.T,
        i = {};
      S.T = i;
      try {
        var f = l(n, a),
          r = S.S;
        (r !== null && r(i, f), lr(e, t, f));
      } catch (y) {
        dc(e, t, y);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (S.T = u));
      }
    } else
      try {
        ((u = l(n, a)), lr(e, t, u));
      } catch (y) {
        dc(e, t, y);
      }
  }
  function lr(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            ar(e, t, a);
          },
          function (a) {
            return dc(e, t, a);
          },
        )
      : ar(e, t, l);
  }
  function ar(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      nr(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), tr(e, l))));
  }
  function dc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), nr(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function nr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ur(e, t) {
    return t;
  }
  function ir(e, t) {
    if (ce) {
      var l = Ne.formState;
      if (l !== null) {
        e: {
          var a = W;
          if (ce) {
            if (Te) {
              t: {
                for (var n = Te, u = Ut; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Rt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((Te = Rt(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            vl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = it()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ur,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = zr.bind(null, W, a)),
      (a.dispatch = l),
      (a = oc(!1)),
      (u = pc.bind(null, W, !1, a.queue)),
      (a = it()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Jm.bind(null, W, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function cr(e) {
    var t = Re();
    return fr(t, be, e);
  }
  function fr(e, t, l) {
    if (
      ((t = sc(e, t, ur)[0]),
      (e = xu(tl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = gn(t);
      } catch (i) {
        throw i === _a ? ru : i;
      }
    else a = t;
    t = Re();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((W.flags |= 2048),
        ja(9, { destroy: void 0 }, Wm.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function Wm(e, t) {
    e.action = t;
  }
  function sr(e) {
    var t = Re(),
      l = be;
    if (l !== null) return fr(t, l, e);
    (Re(), (t = t.memoizedState), (l = Re()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function ja(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = W.updateQueue),
      t === null && ((t = pu()), (W.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function rr() {
    return Re().memoizedState;
  }
  function Su(e, t, l, a) {
    var n = it();
    ((W.flags |= e),
      (n.memoizedState = ja(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Nu(e, t, l, a) {
    var n = Re();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    be !== null && a !== null && ac(a, be.memoizedState.deps)
      ? (n.memoizedState = ja(t, u, l, a))
      : ((W.flags |= e), (n.memoizedState = ja(1 | t, u, l, a)));
  }
  function or(e, t) {
    Su(8390656, 8, e, t);
  }
  function mc(e, t) {
    Nu(2048, 8, e, t);
  }
  function Fm(e) {
    W.flags |= 4;
    var t = W.updateQueue;
    if (t === null) ((t = pu()), (W.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function dr(e) {
    var t = Re().memoizedState;
    return (
      Fm({ ref: t, nextImpl: e }),
      function () {
        if ((he & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function mr(e, t) {
    return Nu(4, 2, e, t);
  }
  function hr(e, t) {
    return Nu(4, 4, e, t);
  }
  function gr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function vr(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Nu(4, 4, gr.bind(null, t, e), l));
  }
  function hc() {}
  function yr(e, t) {
    var l = Re();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && ac(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function pr(e, t) {
    var l = Re();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && ac(t, a[1])) return a[0];
    if (((a = e()), Il)) {
      ol(!0);
      try {
        e();
      } finally {
        ol(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function gc(e, t, l) {
    return l === void 0 || ((el & 1073741824) !== 0 && (ne & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = xo()), (W.lanes |= e), (zl |= e), l);
  }
  function br(e, t, l, a) {
    return bt(l, t)
      ? l
      : za.current !== null
        ? ((e = gc(e, l, a)), bt(e, t) || (Ye = !0), e)
        : (el & 42) === 0 || ((el & 1073741824) !== 0 && (ne & 261930) === 0)
          ? ((Ye = !0), (e.memoizedState = l))
          : ((e = xo()), (W.lanes |= e), (zl |= e), t);
  }
  function xr(e, t, l, a, n) {
    var u = M.p;
    M.p = u !== 0 && 8 > u ? u : 8;
    var i = S.T,
      f = {};
    ((S.T = f), pc(e, !1, t, l));
    try {
      var r = n(),
        y = S.S;
      if (
        (y !== null && y(f, r),
        r !== null && typeof r == "object" && typeof r.then == "function")
      ) {
        var N = Zm(r, a);
        vn(e, t, N, zt(e));
      } else vn(e, t, a, zt(e));
    } catch (T) {
      vn(e, t, { then: function () {}, status: "rejected", reason: T }, zt());
    } finally {
      ((M.p = u),
        i !== null && f.types !== null && (i.types = f.types),
        (S.T = i));
    }
  }
  function $m() {}
  function vc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Sr(e).queue;
    xr(
      e,
      n,
      t,
      X,
      l === null
        ? $m
        : function () {
            return (Nr(e), l(a));
          },
    );
  }
  function Sr(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: X,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Nr(e) {
    var t = Sr(e);
    (t.next === null && (t = e.alternate.memoizedState),
      vn(e, t.next.queue, {}, zt()));
  }
  function yc() {
    return $e(Un);
  }
  function _r() {
    return Re().memoizedState;
  }
  function Er() {
    return Re().memoizedState;
  }
  function Im(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = zt();
          e = bl(l);
          var a = xl(t, e, l);
          (a !== null && (gt(a, t, l), on(a, t, l)),
            (t = { cache: Ki() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Pm(e, t, l) {
    var a = zt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      _u(e)
        ? Tr(t, l)
        : ((l = Ri(e, t, l, a)), l !== null && (gt(l, e, a), Ar(l, t, a))));
  }
  function zr(e, t, l) {
    var a = zt();
    vn(e, t, l, a);
  }
  function vn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (_u(e)) Tr(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = f), bt(f, i)))
            return (au(e, t, n, 0), Ne === null && lu(), !1);
        } catch {
        } finally {
        }
      if (((l = Ri(e, t, n, a)), l !== null))
        return (gt(l, e, a), Ar(l, t, a), !0);
    }
    return !1;
  }
  function pc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Fc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      _u(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = Ri(e, l, a, 2)), t !== null && gt(t, e, 2));
  }
  function _u(e) {
    var t = e.alternate;
    return e === W || (t !== null && t === W);
  }
  function Tr(e, t) {
    Ta = vu = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Ar(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Cf(e, l));
    }
  }
  var yn = {
    readContext: $e,
    use: bu,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useLayoutEffect: Me,
    useInsertionEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useSyncExternalStore: Me,
    useId: Me,
    useHostTransitionStatus: Me,
    useFormState: Me,
    useActionState: Me,
    useOptimistic: Me,
    useMemoCache: Me,
    useCacheRefresh: Me,
  };
  yn.useEffectEvent = Me;
  var jr = {
      readContext: $e,
      use: bu,
      useCallback: function (e, t) {
        return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: $e,
      useEffect: or,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Su(4194308, 4, gr.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Su(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Su(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = it();
        t = t === void 0 ? null : t;
        var a = e();
        if (Il) {
          ol(!0);
          try {
            e();
          } finally {
            ol(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = it();
        if (l !== void 0) {
          var n = l(t);
          if (Il) {
            ol(!0);
            try {
              l(t);
            } finally {
              ol(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Pm.bind(null, W, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = it();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = oc(e);
        var t = e.queue,
          l = zr.bind(null, W, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = it();
        return gc(l, e, t);
      },
      useTransition: function () {
        var e = oc(!1);
        return (
          (e = xr.bind(null, W, e.queue, !0, !1)),
          (it().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = W,
          n = it();
        if (ce) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = t()), Ne === null)) throw Error(o(349));
          (ne & 127) !== 0 || Ws(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          or($s.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          ja(9, { destroy: void 0 }, Fs.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = it(),
          t = Ne.identifierPrefix;
        if (ce) {
          var l = Vt,
            a = Qt;
          ((l = (a & ~(1 << (32 - pt(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = yu++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = Km++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: yc,
      useFormState: ir,
      useActionState: ir,
      useOptimistic: function (e) {
        var t = it();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = pc.bind(null, W, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: fc,
      useCacheRefresh: function () {
        return (it().memoizedState = Im.bind(null, W));
      },
      useEffectEvent: function (e) {
        var t = it(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((he & 2) !== 0) throw Error(o(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    bc = {
      readContext: $e,
      use: bu,
      useCallback: yr,
      useContext: $e,
      useEffect: mc,
      useImperativeHandle: vr,
      useInsertionEffect: mr,
      useLayoutEffect: hr,
      useMemo: pr,
      useReducer: xu,
      useRef: rr,
      useState: function () {
        return xu(tl);
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = Re();
        return br(l, be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xu(tl)[0],
          t = Re().memoizedState;
        return [typeof e == "boolean" ? e : gn(e), t];
      },
      useSyncExternalStore: Js,
      useId: _r,
      useHostTransitionStatus: yc,
      useFormState: cr,
      useActionState: cr,
      useOptimistic: function (e, t) {
        var l = Re();
        return er(l, be, e, t);
      },
      useMemoCache: fc,
      useCacheRefresh: Er,
    };
  bc.useEffectEvent = dr;
  var Or = {
    readContext: $e,
    use: bu,
    useCallback: yr,
    useContext: $e,
    useEffect: mc,
    useImperativeHandle: vr,
    useInsertionEffect: mr,
    useLayoutEffect: hr,
    useMemo: pr,
    useReducer: rc,
    useRef: rr,
    useState: function () {
      return rc(tl);
    },
    useDebugValue: hc,
    useDeferredValue: function (e, t) {
      var l = Re();
      return be === null ? gc(l, e, t) : br(l, be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = rc(tl)[0],
        t = Re().memoizedState;
      return [typeof e == "boolean" ? e : gn(e), t];
    },
    useSyncExternalStore: Js,
    useId: _r,
    useHostTransitionStatus: yc,
    useFormState: sr,
    useActionState: sr,
    useOptimistic: function (e, t) {
      var l = Re();
      return be !== null
        ? er(l, be, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: fc,
    useCacheRefresh: Er,
  };
  Or.useEffectEvent = dr;
  function xc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : H({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Sc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = zt(),
        n = bl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = xl(e, n, a)),
        t !== null && (gt(t, e, a), on(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = zt(),
        n = bl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = xl(e, n, a)),
        t !== null && (gt(t, e, a), on(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = zt(),
        a = bl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = xl(e, a, l)),
        t !== null && (gt(t, e, l), on(t, e, l)));
    },
  };
  function wr(e, t, l, a, n, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ln(l, a) || !ln(n, u)
          : !0
    );
  }
  function Mr(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Sc.enqueueReplaceState(t, t.state, null));
  }
  function Pl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = H({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Cr(e) {
    tu(e);
  }
  function Ur(e) {
    console.error(e);
  }
  function Dr(e) {
    tu(e);
  }
  function Eu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Rr(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Nc(e, t, l) {
    return (
      (l = bl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Eu(e, t);
      }),
      l
    );
  }
  function Br(e) {
    return ((e = bl(e)), (e.tag = 3), e);
  }
  function Hr(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          Rr(t, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        (Rr(t, l, a),
          typeof n != "function" &&
            (Tl === null ? (Tl = new Set([this])) : Tl.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function e0(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && xa(t, l, n, !0),
        (l = St.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Dt === null ? Bu() : l.alternate === null && Ce === 0 && (Ce = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ou
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  kc(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ou
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  kc(e, a, n)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return (kc(e, a, n), Bu(), !1);
    }
    if (ce)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Gi && ((e = Error(o(422), { cause: a })), un(wt(e, l))))
          : (a !== Gi && ((t = Error(o(423), { cause: a })), un(wt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = wt(a, l)),
            (n = Nc(e.stateNode, a, n)),
            Ii(e, n),
            Ce !== 4 && (Ce = 2)),
        !1
      );
    var u = Error(o(520), { cause: a });
    if (
      ((u = wt(u, l)),
      zn === null ? (zn = [u]) : zn.push(u),
      Ce !== 4 && (Ce = 2),
      t === null)
    )
      return !0;
    ((a = wt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Nc(l.stateNode, a, e)),
            Ii(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Tl === null || !Tl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Br(n)),
              Hr(n, e, l, a),
              Ii(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var _c = Error(o(461)),
    Ye = !1;
  function Ie(e, t, l, a) {
    t.child = e === null ? Gs(t, null, l, a) : $l(t, e.child, l, a);
  }
  function Lr(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      kl(t),
      (a = nc(e, t, l, i, u, n)),
      (f = uc()),
      e !== null && !Ye
        ? (ic(e, t, n), ll(e, t, n))
        : (ce && f && Yi(t), (t.flags |= 1), Ie(e, t, a, n), t.child)
    );
  }
  function Yr(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Bi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), qr(e, t, u, a, n))
        : ((e = uu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Mc(e, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ln), l(i, a) && e.ref === t.ref)
      )
        return ll(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Ft(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function qr(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ln(u, a) && e.ref === t.ref)
        if (((Ye = !1), (t.pendingProps = a = u), Mc(e, n)))
          (e.flags & 131072) !== 0 && (Ye = !0);
        else return ((t.lanes = e.lanes), ll(e, t, n));
    }
    return Ec(e, t, l, a, n);
  }
  function Gr(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return Xr(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && su(t, u !== null ? u.cachePool : null),
          u !== null ? Vs(t, u) : ec(),
          Zs(t));
      else
        return (
          (a = t.lanes = 536870912),
          Xr(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (su(t, u.cachePool), Vs(t, u), Nl(), (t.memoizedState = null))
        : (e !== null && su(t, null), ec(), Nl());
    return (Ie(e, t, n, l), t.child);
  }
  function pn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Xr(e, t, l, a, n) {
    var u = Ji();
    return (
      (u = u === null ? null : { parent: He._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && su(t, null),
      ec(),
      Zs(t),
      e !== null && xa(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function zu(e, t) {
    return (
      (t = Au({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Qr(e, t, l) {
    return (
      $l(t, e.child, null, l),
      (e = zu(t, t.pendingProps)),
      (e.flags |= 2),
      Nt(t),
      (t.memoizedState = null),
      e
    );
  }
  function t0(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ce) {
        if (a.mode === "hidden")
          return ((e = zu(t, a)), (t.lanes = 536870912), pn(null, e));
        if (
          (lc(t),
          (e = Te)
            ? ((e = ld(e, Ut)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: hl !== null ? { id: Qt, overflow: Vt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ts(e)),
                (l.return = t),
                (t.child = l),
                (Fe = t),
                (Te = null)))
            : (e = null),
          e === null)
        )
          throw vl(t);
        return ((t.lanes = 536870912), null);
      }
      return zu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((lc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Qr(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Ye || xa(e, t, l, !1), (n = (l & e.childLanes) !== 0), Ye || n)
      ) {
        if (
          ((a = Ne),
          a !== null && ((i = Uf(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Ql(e, i), gt(a, e, i), _c);
        (Bu(), (t = Qr(e, t, l)));
      } else
        ((e = u.treeContext),
          (Te = Rt(i.nextSibling)),
          (Fe = t),
          (ce = !0),
          (gl = null),
          (Ut = !1),
          e !== null && Os(t, e),
          (t = zu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Ft(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Tu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Ec(e, t, l, a, n) {
    return (
      kl(t),
      (l = nc(e, t, l, a, void 0, n)),
      (a = uc()),
      e !== null && !Ye
        ? (ic(e, t, n), ll(e, t, n))
        : (ce && a && Yi(t), (t.flags |= 1), Ie(e, t, l, n), t.child)
    );
  }
  function Vr(e, t, l, a, n, u) {
    return (
      kl(t),
      (t.updateQueue = null),
      (l = ks(t, a, l, n)),
      Ks(e),
      (a = uc()),
      e !== null && !Ye
        ? (ic(e, t, u), ll(e, t, u))
        : (ce && a && Yi(t), (t.flags |= 1), Ie(e, t, l, u), t.child)
    );
  }
  function Zr(e, t, l, a, n) {
    if ((kl(t), t.stateNode === null)) {
      var u = va,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = $e(i)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Sc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Fi(t),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? $e(i) : va),
        (u.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (xc(t, l, i, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Sc.enqueueReplaceState(u, u.state, null),
          mn(t, a, u, n),
          dn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var f = t.memoizedProps,
        r = Pl(l, f);
      u.props = r;
      var y = u.context,
        N = l.contextType;
      ((i = va), typeof N == "object" && N !== null && (i = $e(N)));
      var T = l.getDerivedStateFromProps;
      ((N =
        typeof T == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f || y !== i) && Mr(t, u, a, i)),
        (pl = !1));
      var p = t.memoizedState;
      ((u.state = p),
        mn(t, a, u, n),
        dn(),
        (y = t.memoizedState),
        f || p !== y || pl
          ? (typeof T == "function" && (xc(t, l, T, a), (y = t.memoizedState)),
            (r = pl || wr(t, l, r, a, p, y, i))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = i),
            (a = r))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = t.stateNode),
        $i(e, t),
        (i = t.memoizedProps),
        (N = Pl(l, i)),
        (u.props = N),
        (T = t.pendingProps),
        (p = u.context),
        (y = l.contextType),
        (r = va),
        typeof y == "object" && y !== null && (r = $e(y)),
        (f = l.getDerivedStateFromProps),
        (y =
          typeof f == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== T || p !== r) && Mr(t, u, a, r)),
        (pl = !1),
        (p = t.memoizedState),
        (u.state = p),
        mn(t, a, u, n),
        dn());
      var x = t.memoizedState;
      i !== T ||
      p !== x ||
      pl ||
      (e !== null && e.dependencies !== null && cu(e.dependencies))
        ? (typeof f == "function" && (xc(t, l, f, a), (x = t.memoizedState)),
          (N =
            pl ||
            wr(t, l, N, a, p, x, r) ||
            (e !== null && e.dependencies !== null && cu(e.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, x, r),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, x, r)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = x)),
          (u.props = a),
          (u.state = x),
          (u.context = r),
          (a = N))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Tu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = $l(t, e.child, null, n)),
              (t.child = $l(t, null, l, n)))
            : Ie(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = ll(e, t, n)),
      e
    );
  }
  function Kr(e, t, l, a) {
    return (Zl(), (t.flags |= 256), Ie(e, t, l, a), t.child);
  }
  var zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Tc(e) {
    return { baseLanes: e, cachePool: Rs() };
  }
  function Ac(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Et), e);
  }
  function kr(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (De.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ce) {
        if (
          (n ? Sl(t) : Nl(),
          (e = Te)
            ? ((e = ld(e, Ut)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: hl !== null ? { id: Qt, overflow: Vt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ts(e)),
                (l.return = t),
                (t.child = l),
                (Fe = t),
                (Te = null)))
            : (e = null),
          e === null)
        )
          throw vl(t);
        return (rf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (Nl(),
            (n = t.mode),
            (f = Au({ mode: "hidden", children: f }, n)),
            (a = Vl(a, n, l, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (a = t.child),
            (a.memoizedState = Tc(l)),
            (a.childLanes = Ac(e, i, l)),
            (t.memoizedState = zc),
            pn(null, a))
          : (Sl(t), jc(t, f))
      );
    }
    var r = e.memoizedState;
    if (r !== null && ((f = r.dehydrated), f !== null)) {
      if (u)
        t.flags & 256
          ? (Sl(t), (t.flags &= -257), (t = Oc(e, t, l)))
          : t.memoizedState !== null
            ? (Nl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Nl(),
              (f = a.fallback),
              (n = t.mode),
              (a = Au({ mode: "visible", children: a.children }, n)),
              (f = Vl(f, n, l, null)),
              (f.flags |= 2),
              (a.return = t),
              (f.return = t),
              (a.sibling = f),
              (t.child = a),
              $l(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Tc(l)),
              (a.childLanes = Ac(e, i, l)),
              (t.memoizedState = zc),
              (t = pn(null, a)));
      else if ((Sl(t), rf(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var y = i.dgst;
        ((i = y),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = i),
          un({ value: a, source: null, stack: null }),
          (t = Oc(e, t, l)));
      } else if (
        (Ye || xa(e, t, l, !1), (i = (l & e.childLanes) !== 0), Ye || i)
      ) {
        if (
          ((i = Ne),
          i !== null && ((a = Uf(i, l)), a !== 0 && a !== r.retryLane))
        )
          throw ((r.retryLane = a), Ql(e, a), gt(i, e, a), _c);
        (sf(f) || Bu(), (t = Oc(e, t, l)));
      } else
        sf(f)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = r.treeContext),
            (Te = Rt(f.nextSibling)),
            (Fe = t),
            (ce = !0),
            (gl = null),
            (Ut = !1),
            e !== null && Os(t, e),
            (t = jc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (Nl(),
        (f = a.fallback),
        (n = t.mode),
        (r = e.child),
        (y = r.sibling),
        (a = Ft(r, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = r.subtreeFlags & 65011712),
        y !== null ? (f = Ft(y, f)) : ((f = Vl(f, n, l, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        pn(null, a),
        (a = t.child),
        (f = e.child.memoizedState),
        f === null
          ? (f = Tc(l))
          : ((n = f.cachePool),
            n !== null
              ? ((r = He._currentValue),
                (n = n.parent !== r ? { parent: r, pool: r } : n))
              : (n = Rs()),
            (f = { baseLanes: f.baseLanes | l, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = Ac(e, i, l)),
        (t.memoizedState = zc),
        pn(e.child, a))
      : (Sl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Ft(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function jc(e, t) {
    return (
      (t = Au({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Au(e, t) {
    return ((e = xt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Oc(e, t, l) {
    return (
      $l(t, e.child, null, l),
      (e = jc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Jr(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Vi(e.return, t, l));
  }
  function wc(e, t, l, a, n, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function Wr(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = De.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      _(De, i),
      Ie(e, t, a, l),
      (a = ce ? nn : 0),
      !f && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jr(e, l, t);
        else if (e.tag === 19) Jr(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && gu(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          wc(t, !1, n, l, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && gu(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        wc(t, !0, l, null, u, a);
        break;
      case "together":
        wc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ll(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (zl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((xa(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Ft(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Ft(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Mc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && cu(e)));
  }
  function l0(e, t, l) {
    switch (t.tag) {
      case 3:
        (Q(t, t.stateNode.containerInfo),
          yl(t, He, e.memoizedState.cache),
          Zl());
        break;
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        Q(t, t.stateNode.containerInfo);
        break;
      case 10:
        yl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), lc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Sl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? kr(e, t, l)
              : (Sl(t), (e = ll(e, t, l)), e !== null ? e.sibling : null);
        Sl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (xa(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Wr(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          _(De, De.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Gr(e, t, l, t.pendingProps));
      case 24:
        yl(t, He, e.memoizedState.cache);
    }
    return ll(e, t, l);
  }
  function Fr(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ye = !0;
      else {
        if (!Mc(e, l) && (t.flags & 128) === 0) return ((Ye = !1), l0(e, t, l));
        Ye = (e.flags & 131072) !== 0;
      }
    else ((Ye = !1), ce && (t.flags & 1048576) !== 0 && js(t, nn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Wl(t.elementType)), (t.type = e), typeof e == "function"))
            Bi(e)
              ? ((a = Pl(e, a)), (t.tag = 1), (t = Zr(null, t, e, a, l)))
              : ((t.tag = 0), (t = Ec(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === et) {
                ((t.tag = 11), (t = Lr(null, t, e, a, l)));
                break e;
              } else if (n === ee) {
                ((t.tag = 14), (t = Yr(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = we(e) || e), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ec(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Pl(a, t.pendingProps)), Zr(e, t, a, n, l));
      case 3:
        e: {
          if ((Q(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), $i(e, t), mn(t, a, null, l));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            yl(t, He, a),
            a !== u.cache && Zi(t, [He], l, !0),
            dn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Kr(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = wt(Error(o(424)), t)), un(n), (t = Kr(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Te = Rt(e.firstChild),
                  Fe = t,
                  ce = !0,
                  gl = null,
                  Ut = !0,
                  l = Gs(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Zl(), a === n)) {
              t = ll(e, t, l);
              break e;
            }
            Ie(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Tu(e, t),
          e === null
            ? (l = fd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ce ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Qu(R.current).createElement(l)),
                (a[We] = t),
                (a[st] = e),
                Pe(a, l, e),
                ke(a),
                (t.stateNode = a))
            : (t.memoizedState = fd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pe(t),
          e === null &&
            ce &&
            ((a = t.stateNode = ud(t.type, t.pendingProps, R.current)),
            (Fe = t),
            (Ut = !0),
            (n = Te),
            wl(t.type) ? ((of = n), (Te = Rt(a.firstChild))) : (Te = n)),
          Ie(e, t, t.pendingProps.children, l),
          Tu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ce &&
            ((n = a = Te) &&
              ((a = C0(a, t.type, t.pendingProps, Ut)),
              a !== null
                ? ((t.stateNode = a),
                  (Fe = t),
                  (Te = Rt(a.firstChild)),
                  (Ut = !1),
                  (n = !0))
                : (n = !1)),
            n || vl(t)),
          pe(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = u.children),
          uf(n, u) ? (a = null) : i !== null && uf(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = nc(e, t, km, null, null, l)), (Un._currentValue = n)),
          Tu(e, t),
          Ie(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ce &&
            ((e = l = Te) &&
              ((l = U0(l, t.pendingProps, Ut)),
              l !== null
                ? ((t.stateNode = l), (Fe = t), (Te = null), (e = !0))
                : (e = !1)),
            e || vl(t)),
          null
        );
      case 13:
        return kr(e, t, l);
      case 4:
        return (
          Q(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = $l(t, null, a, l)) : Ie(e, t, a, l),
          t.child
        );
      case 11:
        return Lr(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ie(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ie(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ie(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          yl(t, t.type, a.value),
          Ie(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          kl(t),
          (n = $e(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ie(e, t, a, l),
          t.child
        );
      case 14:
        return Yr(e, t, t.type, t.pendingProps, l);
      case 15:
        return qr(e, t, t.type, t.pendingProps, l);
      case 19:
        return Wr(e, t, l);
      case 31:
        return t0(e, t, l);
      case 22:
        return Gr(e, t, l, t.pendingProps);
      case 24:
        return (
          kl(t),
          (a = $e(He)),
          e === null
            ? ((n = Ji()),
              n === null &&
                ((n = Ne),
                (u = Ki()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Fi(t),
              yl(t, He, n))
            : ((e.lanes & l) !== 0 && ($i(e, t), mn(t, null, null, l), dn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  yl(t, He, a))
                : ((a = u.cache),
                  yl(t, He, a),
                  a !== n.cache && Zi(t, [He], l, !0))),
          Ie(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function al(e) {
    e.flags |= 4;
  }
  function Cc(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Eo()) e.flags |= 8192;
        else throw ((Fl = ou), Wi);
    } else e.flags &= -16777217;
  }
  function $r(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !md(t)))
      if (Eo()) e.flags |= 8192;
      else throw ((Fl = ou), Wi);
  }
  function ju(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? wf() : 536870912), (e.lanes |= t), (Ca |= t)));
  }
  function bn(e, t) {
    if (!ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function a0(e, t, l) {
    var a = t.pendingProps;
    switch ((qi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ae(t), null);
      case 1:
        return (Ae(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Pt(He),
          K(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ba(t)
              ? al(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xi())),
          Ae(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (al(t),
              u !== null ? (Ae(t), $r(t, u)) : (Ae(t), Cc(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (al(t), Ae(t), $r(t, u))
                : (Ae(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && al(t),
                Ae(t),
                Cc(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (ge(t),
          (l = R.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && al(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return (Ae(t), null);
          }
          ((e = A.current),
            ba(t) ? ws(t) : ((e = ud(n, a, l)), (t.stateNode = e), al(t)));
        }
        return (Ae(t), null);
      case 5:
        if ((ge(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && al(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return (Ae(t), null);
          }
          if (((u = A.current), ba(t))) ws(t);
          else {
            var i = Qu(R.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[We] = t), (u[st] = a));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            e: switch ((Pe(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && al(t);
          }
        }
        return (
          Ae(t),
          Cc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && al(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = R.current), ba(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Fe),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[We] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Jo(e.nodeValue, l)
              )),
              e || vl(t, !0));
          } else
            ((e = Qu(e).createTextNode(a)), (e[We] = t), (t.stateNode = e));
        }
        return (Ae(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ba(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[We] = t;
            } else
              (Zl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ae(t), (e = !1));
          } else
            ((l = Xi()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (Ae(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = ba(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317));
              n[We] = t;
            } else
              (Zl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ae(t), (n = !1));
          } else
            ((n = Xi()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
        }
        return (
          Nt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              ju(t, t.updateQueue),
              Ae(t),
              null)
        );
      case 4:
        return (K(), e === null && ef(t.stateNode.containerInfo), Ae(t), null);
      case 10:
        return (Pt(t.type), Ae(t), null);
      case 19:
        if ((m(De), (a = t.memoizedState), a === null)) return (Ae(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) bn(a, !1);
          else {
            if (Ce !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = gu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      bn(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      ju(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (zs(l, e), (l = l.sibling));
                  return (
                    _(De, (De.current & 1) | 2),
                    ce && $t(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              lt() > Uu &&
              ((t.flags |= 128), (n = !0), bn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = gu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ju(t, e),
                bn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !ce)
              )
                return (Ae(t), null);
            } else
              2 * lt() - a.renderingStartTime > Uu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), bn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = lt()),
            (e.sibling = null),
            (l = De.current),
            _(De, n ? (l & 1) | 2 : l & 1),
            ce && $t(t, a.treeForkCount),
            e)
          : (Ae(t), null);
      case 22:
      case 23:
        return (
          Nt(t),
          tc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ae(t),
          (l = t.updateQueue),
          l !== null && ju(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && m(Jl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Pt(He),
          Ae(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function n0(e, t) {
    switch ((qi(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pt(He),
          K(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ge(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Nt(t), t.alternate === null)) throw Error(o(340));
          Zl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Nt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Zl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (m(De), null);
      case 4:
        return (K(), null);
      case 10:
        return (Pt(t.type), null);
      case 22:
      case 23:
        return (
          Nt(t),
          tc(),
          e !== null && m(Jl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Pt(He), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ir(e, t) {
    switch ((qi(t), t.tag)) {
      case 3:
        (Pt(He), K());
        break;
      case 26:
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        K();
        break;
      case 31:
        t.memoizedState !== null && Nt(t);
        break;
      case 13:
        Nt(t);
        break;
      case 19:
        m(De);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        (Nt(t), tc(), e !== null && m(Jl));
        break;
      case 24:
        Pt(He);
    }
  }
  function xn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (f) {
      ye(t, t.return, f);
    }
  }
  function _l(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (n = t));
              var r = l,
                y = f;
              try {
                y();
              } catch (N) {
                ye(n, r, N);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      ye(t, t.return, N);
    }
  }
  function Pr(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Qs(t, l);
      } catch (a) {
        ye(e, e.return, a);
      }
    }
  }
  function eo(e, t, l) {
    ((l.props = Pl(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      ye(e, t, a);
    }
  }
  function Sn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      ye(e, t, n);
    }
  }
  function Zt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ye(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          ye(e, t, n);
        }
      else l.current = null;
  }
  function to(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function Uc(e, t, l) {
    try {
      var a = e.stateNode;
      (T0(a, e.type, l, t), (a[st] = t));
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function lo(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && wl(e.type)) ||
      e.tag === 4
    );
  }
  function Dc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lo(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && wl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Rc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Jt)));
    else if (
      a !== 4 &&
      (a === 27 && wl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Rc(e, t, l), e = e.sibling; e !== null; )
        (Rc(e, t, l), (e = e.sibling));
  }
  function Ou(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && wl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Ou(e, t, l), e = e.sibling; e !== null; )
        (Ou(e, t, l), (e = e.sibling));
  }
  function ao(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (Pe(t, a, l), (t[We] = e), (t[st] = l));
    } catch (u) {
      ye(e, e.return, u);
    }
  }
  var nl = !1,
    qe = !1,
    Bc = !1,
    no = typeof WeakSet == "function" ? WeakSet : Set,
    Je = null;
  function u0(e, t) {
    if (((e = e.containerInfo), (af = Fu), (e = vs(e)), Oi(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var i = 0,
              f = -1,
              r = -1,
              y = 0,
              N = 0,
              T = e,
              p = null;
            t: for (;;) {
              for (
                var x;
                T !== l || (n !== 0 && T.nodeType !== 3) || (f = i + n),
                  T !== u || (a !== 0 && T.nodeType !== 3) || (r = i + a),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (x = T.firstChild) !== null;
              )
                ((p = T), (T = x));
              for (;;) {
                if (T === e) break t;
                if (
                  (p === l && ++y === n && (f = i),
                  p === u && ++N === a && (r = i),
                  (x = T.nextSibling) !== null)
                )
                  break;
                ((T = p), (p = T.parentNode));
              }
              T = x;
            }
            l = f === -1 || r === -1 ? null : { start: f, end: r };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      nf = { focusedElem: e, selectionRange: l }, Fu = !1, Je = t;
      Je !== null;
    )
      if (
        ((t = Je), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Je = e));
      else
        for (; Je !== null; ) {
          switch (((t = Je), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var L = Pl(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(L, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (V) {
                  ye(l, l.return, V);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  ff(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Je = e));
            break;
          }
          Je = t.return;
        }
  }
  function uo(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (il(e, l), a & 4 && xn(5, l));
        break;
      case 1:
        if ((il(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              ye(l, l.return, i);
            }
          else {
            var n = Pl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ye(l, l.return, i);
            }
          }
        (a & 64 && Pr(l), a & 512 && Sn(l, l.return));
        break;
      case 3:
        if ((il(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Qs(e, t);
          } catch (i) {
            ye(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ao(l);
      case 26:
      case 5:
        (il(e, l), t === null && a & 4 && to(l), a & 512 && Sn(l, l.return));
        break;
      case 12:
        il(e, l);
        break;
      case 31:
        (il(e, l), a & 4 && fo(e, l));
        break;
      case 13:
        (il(e, l),
          a & 4 && so(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = h0.bind(null, l)), D0(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || nl), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || qe), (n = nl));
          var u = qe;
          ((nl = a),
            (qe = t) && !u ? cl(e, l, (l.subtreeFlags & 8772) !== 0) : il(e, l),
            (nl = n),
            (qe = u));
        }
        break;
      case 30:
        break;
      default:
        il(e, l);
    }
  }
  function io(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), io(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && di(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var je = null,
    ot = !1;
  function ul(e, t, l) {
    for (l = l.child; l !== null; ) (co(e, t, l), (l = l.sibling));
  }
  function co(e, t, l) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(Hl, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (qe || Zt(l, t),
          ul(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        qe || Zt(l, t);
        var a = je,
          n = ot;
        (wl(l.type) && ((je = l.stateNode), (ot = !1)),
          ul(e, t, l),
          wn(l.stateNode),
          (je = a),
          (ot = n));
        break;
      case 5:
        qe || Zt(l, t);
      case 6:
        if (
          ((a = je),
          (n = ot),
          (je = null),
          ul(e, t, l),
          (je = a),
          (ot = n),
          je !== null)
        )
          if (ot)
            try {
              (je.nodeType === 9
                ? je.body
                : je.nodeName === "HTML"
                  ? je.ownerDocument.body
                  : je
              ).removeChild(l.stateNode);
            } catch (u) {
              ye(l, t, u);
            }
          else
            try {
              je.removeChild(l.stateNode);
            } catch (u) {
              ye(l, t, u);
            }
        break;
      case 18:
        je !== null &&
          (ot
            ? ((e = je),
              ed(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              qa(e))
            : ed(je, l.stateNode));
        break;
      case 4:
        ((a = je),
          (n = ot),
          (je = l.stateNode.containerInfo),
          (ot = !0),
          ul(e, t, l),
          (je = a),
          (ot = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_l(2, l, t), qe || _l(4, l, t), ul(e, t, l));
        break;
      case 1:
        (qe ||
          (Zt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && eo(l, t, a)),
          ul(e, t, l));
        break;
      case 21:
        ul(e, t, l);
        break;
      case 22:
        ((qe = (a = qe) || l.memoizedState !== null), ul(e, t, l), (qe = a));
        break;
      default:
        ul(e, t, l);
    }
  }
  function fo(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        qa(e);
      } catch (l) {
        ye(t, t.return, l);
      }
    }
  }
  function so(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        qa(e);
      } catch (l) {
        ye(t, t.return, l);
      }
  }
  function i0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new no()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new no()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function wu(e, t) {
    var l = i0(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = g0.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function dt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          i = t,
          f = i;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (wl(f.type)) {
                ((je = f.stateNode), (ot = !1));
                break e;
              }
              break;
            case 5:
              ((je = f.stateNode), (ot = !1));
              break e;
            case 3:
            case 4:
              ((je = f.stateNode.containerInfo), (ot = !0));
              break e;
          }
          f = f.return;
        }
        if (je === null) throw Error(o(160));
        (co(u, i, n),
          (je = null),
          (ot = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (ro(t, e), (t = t.sibling));
  }
  var Yt = null;
  function ro(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (dt(t, e),
          mt(e),
          a & 4 && (_l(3, e, e.return), xn(3, e), _l(5, e, e.return)));
        break;
      case 1:
        (dt(t, e),
          mt(e),
          a & 512 && (qe || l === null || Zt(l, l.return)),
          a & 64 &&
            nl &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Yt;
        if (
          (dt(t, e),
          mt(e),
          a & 512 && (qe || l === null || Zt(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ka] ||
                          u[We] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Pe(u, a, l),
                        (u[We] = e),
                        ke(u),
                        (a = u));
                      break e;
                    case "link":
                      var i = od("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Pe(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = od("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Pe(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  ((u[We] = e), ke(u), (a = u));
                }
                e.stateNode = a;
              } else dd(n, e.type, e.stateNode);
            else e.stateNode = rd(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? dd(n, e.type, e.stateNode)
                  : rd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Uc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (dt(t, e),
          mt(e),
          a & 512 && (qe || l === null || Zt(l, l.return)),
          l !== null && a & 4 && Uc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (dt(t, e),
          mt(e),
          a & 512 && (qe || l === null || Zt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            sa(n, "");
          } catch (L) {
            ye(e, e.return, L);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Uc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Bc = !0));
        break;
      case 6:
        if ((dt(t, e), mt(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (L) {
            ye(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          ((Ku = null),
          (n = Yt),
          (Yt = Vu(t.containerInfo)),
          dt(t, e),
          (Yt = n),
          mt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            qa(t.containerInfo);
          } catch (L) {
            ye(e, e.return, L);
          }
        Bc && ((Bc = !1), oo(e));
        break;
      case 4:
        ((a = Yt),
          (Yt = Vu(e.stateNode.containerInfo)),
          dt(t, e),
          mt(e),
          (Yt = a));
        break;
      case 12:
        (dt(t, e), mt(e));
        break;
      case 31:
        (dt(t, e),
          mt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 13:
        (dt(t, e),
          mt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Cu = lt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var r = l !== null && l.memoizedState !== null,
          y = nl,
          N = qe;
        if (
          ((nl = y || n),
          (qe = N || r),
          dt(t, e),
          (qe = N),
          (nl = y),
          mt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || r || nl || qe || ea(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                r = l = t;
                try {
                  if (((u = r.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    f = r.stateNode;
                    var T = r.memoizedProps.style,
                      p =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    f.style.display =
                      p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (L) {
                  ye(r, r.return, L);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (L) {
                  ye(r, r.return, L);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                r = t;
                try {
                  var x = r.stateNode;
                  n ? td(x, !0) : td(r.stateNode, !1);
                } catch (L) {
                  ye(r, r.return, L);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), wu(e, l))));
        break;
      case 19:
        (dt(t, e),
          mt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), wu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (dt(t, e), mt(e));
    }
  }
  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (lo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Dc(e);
            Ou(e, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (sa(i, ""), (l.flags &= -33));
            var f = Dc(e);
            Ou(e, f, i);
            break;
          case 3:
          case 4:
            var r = l.stateNode.containerInfo,
              y = Dc(e);
            Rc(e, y, r);
            break;
          default:
            throw Error(o(161));
        }
      } catch (N) {
        ye(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function oo(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (oo(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function il(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (uo(e, t.alternate, t), (t = t.sibling));
  }
  function ea(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_l(4, t, t.return), ea(t));
          break;
        case 1:
          Zt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && eo(t, t.return, l),
            ea(t));
          break;
        case 27:
          wn(t.stateNode);
        case 26:
        case 5:
          (Zt(t, t.return), ea(t));
          break;
        case 22:
          t.memoizedState === null && ea(t);
          break;
        case 30:
          ea(t);
          break;
        default:
          ea(t);
      }
      e = e.sibling;
    }
  }
  function cl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (cl(n, u, l), xn(4, u));
          break;
        case 1:
          if (
            (cl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              ye(a, a.return, y);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Xs(r[n], f);
            } catch (y) {
              ye(a, a.return, y);
            }
          }
          (l && i & 64 && Pr(u), Sn(u, u.return));
          break;
        case 27:
          ao(u);
        case 26:
        case 5:
          (cl(n, u, l), l && a === null && i & 4 && to(u), Sn(u, u.return));
          break;
        case 12:
          cl(n, u, l);
          break;
        case 31:
          (cl(n, u, l), l && i & 4 && fo(n, u));
          break;
        case 13:
          (cl(n, u, l), l && i & 4 && so(n, u));
          break;
        case 22:
          (u.memoizedState === null && cl(n, u, l), Sn(u, u.return));
          break;
        case 30:
          break;
        default:
          cl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Hc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && cn(l)));
  }
  function Lc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && cn(e)));
  }
  function qt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (mo(e, t, l, a), (t = t.sibling));
  }
  function mo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (qt(e, t, l, a), n & 2048 && xn(9, t));
        break;
      case 1:
        qt(e, t, l, a);
        break;
      case 3:
        (qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && cn(e))));
        break;
      case 12:
        if (n & 2048) {
          (qt(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              i = u.id,
              f = u.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (r) {
            ye(t, t.return, r);
          }
        } else qt(e, t, l, a);
        break;
      case 31:
        qt(e, t, l, a);
        break;
      case 13:
        qt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? qt(e, t, l, a)
              : Nn(e, t)
            : u._visibility & 2
              ? qt(e, t, l, a)
              : ((u._visibility |= 2),
                Oa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Hc(i, t));
        break;
      case 24:
        (qt(e, t, l, a), n & 2048 && Lc(t.alternate, t));
        break;
      default:
        qt(e, t, l, a);
    }
  }
  function Oa(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        i = t,
        f = l,
        r = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Oa(u, i, f, r, n), xn(8, i));
          break;
        case 23:
          break;
        case 22:
          var N = i.stateNode;
          (i.memoizedState !== null
            ? N._visibility & 2
              ? Oa(u, i, f, r, n)
              : Nn(u, i)
            : ((N._visibility |= 2), Oa(u, i, f, r, n)),
            n && y & 2048 && Hc(i.alternate, i));
          break;
        case 24:
          (Oa(u, i, f, r, n), n && y & 2048 && Lc(i.alternate, i));
          break;
        default:
          Oa(u, i, f, r, n);
      }
      t = t.sibling;
    }
  }
  function Nn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Nn(l, a), n & 2048 && Hc(a.alternate, a));
            break;
          case 24:
            (Nn(l, a), n & 2048 && Lc(a.alternate, a));
            break;
          default:
            Nn(l, a);
        }
        t = t.sibling;
      }
  }
  var _n = 8192;
  function wa(e, t, l) {
    if (e.subtreeFlags & _n)
      for (e = e.child; e !== null; ) (ho(e, t, l), (e = e.sibling));
  }
  function ho(e, t, l) {
    switch (e.tag) {
      case 26:
        (wa(e, t, l),
          e.flags & _n &&
            e.memoizedState !== null &&
            K0(l, Yt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        wa(e, t, l);
        break;
      case 3:
      case 4:
        var a = Yt;
        ((Yt = Vu(e.stateNode.containerInfo)), wa(e, t, l), (Yt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = _n), (_n = 16777216), wa(e, t, l), (_n = a))
            : wa(e, t, l));
        break;
      default:
        wa(e, t, l);
    }
  }
  function go(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function En(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Je = a), yo(a, e));
        }
      go(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (vo(e), (e = e.sibling));
  }
  function vo(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (En(e), e.flags & 2048 && _l(9, e, e.return));
        break;
      case 3:
        En(e);
        break;
      case 12:
        En(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Mu(e))
          : En(e);
        break;
      default:
        En(e);
    }
  }
  function Mu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Je = a), yo(a, e));
        }
      go(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (_l(8, t, t.return), Mu(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Mu(t)));
          break;
        default:
          Mu(t);
      }
      e = e.sibling;
    }
  }
  function yo(e, t) {
    for (; Je !== null; ) {
      var l = Je;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Je = a));
      else
        e: for (l = e; Je !== null; ) {
          a = Je;
          var n = a.sibling,
            u = a.return;
          if ((io(a), a === l)) {
            Je = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Je = n));
            break e;
          }
          Je = u;
        }
    }
  }
  var c0 = {
      getCacheForType: function (e) {
        var t = $e(He),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return $e(He).controller.signal;
      },
    },
    f0 = typeof WeakMap == "function" ? WeakMap : Map,
    he = 0,
    Ne = null,
    le = null,
    ne = 0,
    ve = 0,
    _t = null,
    El = !1,
    Ma = !1,
    Yc = !1,
    fl = 0,
    Ce = 0,
    zl = 0,
    ta = 0,
    qc = 0,
    Et = 0,
    Ca = 0,
    zn = null,
    ht = null,
    Gc = !1,
    Cu = 0,
    po = 0,
    Uu = 1 / 0,
    Du = null,
    Tl = null,
    Ge = 0,
    Al = null,
    Ua = null,
    sl = 0,
    Xc = 0,
    Qc = null,
    bo = null,
    Tn = 0,
    Vc = null;
  function zt() {
    return (he & 2) !== 0 && ne !== 0 ? ne & -ne : S.T !== null ? Fc() : Df();
  }
  function xo() {
    if (Et === 0)
      if ((ne & 536870912) === 0 || ce) {
        var e = Xn;
        ((Xn <<= 1), (Xn & 3932160) === 0 && (Xn = 262144), (Et = e));
      } else Et = 536870912;
    return ((e = St.current), e !== null && (e.flags |= 32), Et);
  }
  function gt(e, t, l) {
    (((e === Ne && (ve === 2 || ve === 9)) || e.cancelPendingCommit !== null) &&
      (Da(e, 0), jl(e, ne, Et, !1)),
      Ka(e, l),
      ((he & 2) === 0 || e !== Ne) &&
        (e === Ne &&
          ((he & 2) === 0 && (ta |= l), Ce === 4 && jl(e, ne, Et, !1)),
        Kt(e)));
  }
  function So(e, t, l) {
    if ((he & 6) !== 0) throw Error(o(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Za(e, t),
      n = a ? o0(e, t) : Kc(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Ma && !a && jl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !s0(l))) {
          ((n = Kc(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            e: {
              var f = e;
              n = zn;
              var r = f.current.memoizedState.isDehydrated;
              if ((r && (Da(f, i).flags |= 256), (i = Kc(f, i, !1)), i !== 2)) {
                if (Yc && !r) {
                  ((f.errorRecoveryDisabledLanes |= u), (ta |= u), (n = 4));
                  break e;
                }
                ((u = ht),
                  (ht = n),
                  u !== null &&
                    (ht === null ? (ht = u) : ht.push.apply(ht, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Da(e, 0), jl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              jl(a, t, Et, !El);
              break e;
            case 2:
              ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((n = Cu + 300 - lt()), 10 < n)) {
            if ((jl(a, t, Et, !El), Vn(a, 0, !0) !== 0)) break e;
            ((sl = t),
              (a.timeoutHandle = Io(
                No.bind(
                  null,
                  a,
                  l,
                  ht,
                  Du,
                  Gc,
                  t,
                  Et,
                  ta,
                  Ca,
                  El,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          No(a, l, ht, Du, Gc, t, Et, ta, Ca, El, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Kt(e);
  }
  function No(e, t, l, a, n, u, i, f, r, y, N, T, p, x) {
    if (
      ((e.timeoutHandle = -1),
      (T = t.subtreeFlags),
      T & 8192 || (T & 16785408) === 16785408)
    ) {
      ((T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Jt,
      }),
        ho(t, u, T));
      var L =
        (u & 62914560) === u ? Cu - lt() : (u & 4194048) === u ? po - lt() : 0;
      if (((L = k0(T, L)), L !== null)) {
        ((sl = u),
          (e.cancelPendingCommit = L(
            wo.bind(null, e, t, u, l, a, n, i, f, r, N, T, null, p, x),
          )),
          jl(e, u, i, !y));
        return;
      }
    }
    wo(e, t, u, l, a, n, i, f, r);
  }
  function s0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!bt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function jl(e, t, l, a) {
    ((t &= ~qc),
      (t &= ~ta),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - pt(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && Mf(e, l, t);
  }
  function Ru() {
    return (he & 6) === 0 ? (An(0), !1) : !0;
  }
  function Zc() {
    if (le !== null) {
      if (ve === 0) var e = le.return;
      else ((e = le), (It = Kl = null), cc(e), (Ea = null), (sn = 0), (e = le));
      for (; e !== null; ) (Ir(e.alternate, e), (e = e.return));
      le = null;
    }
  }
  function Da(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), O0(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (sl = 0),
      Zc(),
      (Ne = e),
      (le = l = Ft(e.current, null)),
      (ne = t),
      (ve = 0),
      (_t = null),
      (El = !1),
      (Ma = Za(e, t)),
      (Yc = !1),
      (Ca = Et = qc = ta = zl = Ce = 0),
      (ht = zn = null),
      (Gc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - pt(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((fl = t), lu(), l);
  }
  function _o(e, t) {
    ((W = null),
      (S.H = yn),
      t === _a || t === ru
        ? ((t = Ls()), (ve = 3))
        : t === Wi
          ? ((t = Ls()), (ve = 4))
          : (ve =
              t === _c
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (_t = t),
      le === null && ((Ce = 1), Eu(e, wt(t, e.current))));
  }
  function Eo() {
    var e = St.current;
    return e === null
      ? !0
      : (ne & 4194048) === ne
        ? Dt === null
        : (ne & 62914560) === ne || (ne & 536870912) !== 0
          ? e === Dt
          : !1;
  }
  function zo() {
    var e = S.H;
    return ((S.H = yn), e === null ? yn : e);
  }
  function To() {
    var e = S.A;
    return ((S.A = c0), e);
  }
  function Bu() {
    ((Ce = 4),
      El || ((ne & 4194048) !== ne && St.current !== null) || (Ma = !0),
      ((zl & 134217727) === 0 && (ta & 134217727) === 0) ||
        Ne === null ||
        jl(Ne, ne, Et, !1));
  }
  function Kc(e, t, l) {
    var a = he;
    he |= 2;
    var n = zo(),
      u = To();
    ((Ne !== e || ne !== t) && ((Du = null), Da(e, t)), (t = !1));
    var i = Ce;
    e: do
      try {
        if (ve !== 0 && le !== null) {
          var f = le,
            r = _t;
          switch (ve) {
            case 8:
              (Zc(), (i = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var y = ve;
              if (((ve = 0), (_t = null), Ra(e, f, r, y), l && Ma)) {
                i = 0;
                break e;
              }
              break;
            default:
              ((y = ve), (ve = 0), (_t = null), Ra(e, f, r, y));
          }
        }
        (r0(), (i = Ce));
        break;
      } catch (N) {
        _o(e, N);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (It = Kl = null),
      (he = a),
      (S.H = n),
      (S.A = u),
      le === null && ((Ne = null), (ne = 0), lu()),
      i
    );
  }
  function r0() {
    for (; le !== null; ) Ao(le);
  }
  function o0(e, t) {
    var l = he;
    he |= 2;
    var a = zo(),
      n = To();
    Ne !== e || ne !== t
      ? ((Du = null), (Uu = lt() + 500), Da(e, t))
      : (Ma = Za(e, t));
    e: do
      try {
        if (ve !== 0 && le !== null) {
          t = le;
          var u = _t;
          t: switch (ve) {
            case 1:
              ((ve = 0), (_t = null), Ra(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Bs(u)) {
                ((ve = 0), (_t = null), jo(t));
                break;
              }
              ((t = function () {
                ((ve !== 2 && ve !== 9) || Ne !== e || (ve = 7), Kt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              ve = 7;
              break e;
            case 4:
              ve = 5;
              break e;
            case 7:
              Bs(u)
                ? ((ve = 0), (_t = null), jo(t))
                : ((ve = 0), (_t = null), Ra(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (le.tag) {
                case 26:
                  i = le.memoizedState;
                case 5:
                case 27:
                  var f = le;
                  if (i ? md(i) : f.stateNode.complete) {
                    ((ve = 0), (_t = null));
                    var r = f.sibling;
                    if (r !== null) le = r;
                    else {
                      var y = f.return;
                      y !== null ? ((le = y), Hu(y)) : (le = null);
                    }
                    break t;
                  }
              }
              ((ve = 0), (_t = null), Ra(e, t, u, 5));
              break;
            case 6:
              ((ve = 0), (_t = null), Ra(e, t, u, 6));
              break;
            case 8:
              (Zc(), (Ce = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        d0();
        break;
      } catch (N) {
        _o(e, N);
      }
    while (!0);
    return (
      (It = Kl = null),
      (S.H = a),
      (S.A = n),
      (he = l),
      le !== null ? 0 : ((Ne = null), (ne = 0), lu(), Ce)
    );
  }
  function d0() {
    for (; le !== null && !ni(); ) Ao(le);
  }
  function Ao(e) {
    var t = Fr(e.alternate, e, fl);
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (le = t));
  }
  function jo(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Vr(l, t, t.pendingProps, t.type, void 0, ne);
        break;
      case 11:
        t = Vr(l, t, t.pendingProps, t.type.render, t.ref, ne);
        break;
      case 5:
        cc(t);
      default:
        (Ir(l, t), (t = le = zs(t, fl)), (t = Fr(l, t, fl)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (le = t));
  }
  function Ra(e, t, l, a) {
    ((It = Kl = null), cc(t), (Ea = null), (sn = 0));
    var n = t.return;
    try {
      if (e0(e, n, t, l, ne)) {
        ((Ce = 1), Eu(e, wt(l, e.current)), (le = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((le = n), u);
      ((Ce = 1), Eu(e, wt(l, e.current)), (le = null));
      return;
    }
    t.flags & 32768
      ? (ce || a === 1
          ? (e = !0)
          : Ma || (ne & 536870912) !== 0
            ? (e = !1)
            : ((El = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = St.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Oo(t, e))
      : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Oo(t, El);
        return;
      }
      e = t.return;
      var l = a0(t.alternate, t, fl);
      if (l !== null) {
        le = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        le = t;
        return;
      }
      le = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function Oo(e, t) {
    do {
      var l = n0(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (le = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        le = e;
        return;
      }
      le = e = l;
    } while (e !== null);
    ((Ce = 6), (le = null));
  }
  function wo(e, t, l, a, n, u, i, f, r) {
    e.cancelPendingCommit = null;
    do Lu();
    while (Ge !== 0);
    if ((he & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Di),
        Zd(e, l, u, i, f, r),
        e === Ne && ((le = Ne = null), (ne = 0)),
        (Ua = t),
        (Al = e),
        (sl = l),
        (Xc = u),
        (Qc = n),
        (bo = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            v0(la, function () {
              return (Ro(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = S.T), (S.T = null), (n = M.p), (M.p = 2), (i = he), (he |= 4));
        try {
          u0(e, t, l);
        } finally {
          ((he = i), (M.p = n), (S.T = a));
        }
      }
      ((Ge = 1), Mo(), Co(), Uo());
    }
  }
  function Mo() {
    if (Ge === 1) {
      Ge = 0;
      var e = Al,
        t = Ua,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = S.T), (S.T = null));
        var a = M.p;
        M.p = 2;
        var n = he;
        he |= 4;
        try {
          ro(t, e);
          var u = nf,
            i = vs(e.containerInfo),
            f = u.focusedElem,
            r = u.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            gs(f.ownerDocument.documentElement, f)
          ) {
            if (r !== null && Oi(f)) {
              var y = r.start,
                N = r.end;
              if ((N === void 0 && (N = y), "selectionStart" in f))
                ((f.selectionStart = y),
                  (f.selectionEnd = Math.min(N, f.value.length)));
              else {
                var T = f.ownerDocument || document,
                  p = (T && T.defaultView) || window;
                if (p.getSelection) {
                  var x = p.getSelection(),
                    L = f.textContent.length,
                    V = Math.min(r.start, L),
                    Se = r.end === void 0 ? V : Math.min(r.end, L);
                  !x.extend && V > Se && ((i = Se), (Se = V), (V = i));
                  var h = hs(f, V),
                    d = hs(f, Se);
                  if (
                    h &&
                    d &&
                    (x.rangeCount !== 1 ||
                      x.anchorNode !== h.node ||
                      x.anchorOffset !== h.offset ||
                      x.focusNode !== d.node ||
                      x.focusOffset !== d.offset)
                  ) {
                    var v = T.createRange();
                    (v.setStart(h.node, h.offset),
                      x.removeAllRanges(),
                      V > Se
                        ? (x.addRange(v), x.extend(d.node, d.offset))
                        : (v.setEnd(d.node, d.offset), x.addRange(v)));
                  }
                }
              }
            }
            for (T = [], x = f; (x = x.parentNode); )
              x.nodeType === 1 &&
                T.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < T.length;
              f++
            ) {
              var z = T[f];
              ((z.element.scrollLeft = z.left), (z.element.scrollTop = z.top));
            }
          }
          ((Fu = !!af), (nf = af = null));
        } finally {
          ((he = n), (M.p = a), (S.T = l));
        }
      }
      ((e.current = t), (Ge = 2));
    }
  }
  function Co() {
    if (Ge === 2) {
      Ge = 0;
      var e = Al,
        t = Ua,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = S.T), (S.T = null));
        var a = M.p;
        M.p = 2;
        var n = he;
        he |= 4;
        try {
          uo(e, t.alternate, t);
        } finally {
          ((he = n), (M.p = a), (S.T = l));
        }
      }
      Ge = 3;
    }
  }
  function Uo() {
    if (Ge === 4 || Ge === 3) {
      ((Ge = 0), ui());
      var e = Al,
        t = Ua,
        l = sl,
        a = bo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ge = 5)
        : ((Ge = 0), (Ua = Al = null), Do(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Tl = null),
        ri(l),
        (t = t.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot(Hl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = S.T), (n = M.p), (M.p = 2), (S.T = null));
        try {
          for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          ((S.T = t), (M.p = n));
        }
      }
      ((sl & 3) !== 0 && Lu(),
        Kt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === Vc
            ? Tn++
            : ((Tn = 0), (Vc = e))
          : (Tn = 0),
        An(0));
    }
  }
  function Do(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), cn(t)));
  }
  function Lu() {
    return (Mo(), Co(), Uo(), Ro());
  }
  function Ro() {
    if (Ge !== 5) return !1;
    var e = Al,
      t = Xc;
    Xc = 0;
    var l = ri(sl),
      a = S.T,
      n = M.p;
    try {
      ((M.p = 32 > l ? 32 : l), (S.T = null), (l = Qc), (Qc = null));
      var u = Al,
        i = sl;
      if (((Ge = 0), (Ua = Al = null), (sl = 0), (he & 6) !== 0))
        throw Error(o(331));
      var f = he;
      if (
        ((he |= 4),
        vo(u.current),
        mo(u, u.current, i, l),
        (he = f),
        An(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot(Hl, u);
        } catch {}
      return !0;
    } finally {
      ((M.p = n), (S.T = a), Do(e, t));
    }
  }
  function Bo(e, t, l) {
    ((t = wt(l, t)),
      (t = Nc(e.stateNode, t, 2)),
      (e = xl(e, t, 2)),
      e !== null && (Ka(e, 2), Kt(e)));
  }
  function ye(e, t, l) {
    if (e.tag === 3) Bo(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bo(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Tl === null || !Tl.has(a)))
          ) {
            ((e = wt(l, e)),
              (l = Br(2)),
              (a = xl(t, l, 2)),
              a !== null && (Hr(l, a, t, e), Ka(a, 2), Kt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function kc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new f0();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Yc = !0), n.add(l), (e = m0.bind(null, e, t, l)), t.then(e, e));
  }
  function m0(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ne === e &&
        (ne & l) === l &&
        (Ce === 4 || (Ce === 3 && (ne & 62914560) === ne && 300 > lt() - Cu)
          ? (he & 2) === 0 && Da(e, 0)
          : (qc |= l),
        Ca === ne && (Ca = 0)),
      Kt(e));
  }
  function Ho(e, t) {
    (t === 0 && (t = wf()), (e = Ql(e, t)), e !== null && (Ka(e, t), Kt(e)));
  }
  function h0(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Ho(e, l));
  }
  function g0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (a !== null && a.delete(t), Ho(e, l));
  }
  function v0(e, t) {
    return ft(e, t);
  }
  var Yu = null,
    Ba = null,
    Jc = !1,
    qu = !1,
    Wc = !1,
    Ol = 0;
  function Kt(e) {
    (e !== Ba &&
      e.next === null &&
      (Ba === null ? (Yu = Ba = e) : (Ba = Ba.next = e)),
      (qu = !0),
      Jc || ((Jc = !0), p0()));
  }
  function An(e, t) {
    if (!Wc && qu) {
      Wc = !0;
      do
        for (var l = !1, a = Yu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((u = (1 << (31 - pt(42 | e) + 1)) - 1),
                (u &= n & ~(i & ~f)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), Go(a, u));
          } else
            ((u = ne),
              (u = Vn(
                a,
                a === Ne ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Za(a, u) || ((l = !0), Go(a, u)));
          a = a.next;
        }
      while (l);
      Wc = !1;
    }
  }
  function y0() {
    Lo();
  }
  function Lo() {
    qu = Jc = !1;
    var e = 0;
    Ol !== 0 && j0() && (e = Ol);
    for (var t = lt(), l = null, a = Yu; a !== null; ) {
      var n = a.next,
        u = Yo(a, t);
      (u === 0
        ? ((a.next = null),
          l === null ? (Yu = n) : (l.next = n),
          n === null && (Ba = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (qu = !0)),
        (a = n));
    }
    ((Ge !== 0 && Ge !== 5) || An(e), Ol !== 0 && (Ol = 0));
  }
  function Yo(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - pt(u),
        f = 1 << i,
        r = n[i];
      (r === -1
        ? ((f & l) === 0 || (f & a) !== 0) && (n[i] = Vd(f, t))
        : r <= t && (e.expiredLanes |= f),
        (u &= ~f));
    }
    if (
      ((t = Ne),
      (l = ne),
      (l = Vn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (ve === 2 || ve === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ga(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Za(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Ga(a), ri(l))) {
        case 2:
        case 8:
          l = Yn;
          break;
        case 32:
          l = la;
          break;
        case 268435456:
          l = Qa;
          break;
        default:
          l = la;
      }
      return (
        (a = qo.bind(null, e)),
        (l = ft(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Ga(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function qo(e, t) {
    if (Ge !== 0 && Ge !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Lu() && e.callbackNode !== l) return null;
    var a = ne;
    return (
      (a = Vn(
        e,
        e === Ne ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (So(e, a, t),
          Yo(e, lt()),
          e.callbackNode != null && e.callbackNode === l
            ? qo.bind(null, e)
            : null)
    );
  }
  function Go(e, t) {
    if (Lu()) return null;
    So(e, t, !0);
  }
  function p0() {
    w0(function () {
      (he & 6) !== 0 ? ft(Xa, y0) : Lo();
    });
  }
  function Fc() {
    if (Ol === 0) {
      var e = Sa;
      (e === 0 && ((e = Gn), (Gn <<= 1), (Gn & 261888) === 0 && (Gn = 256)),
        (Ol = e));
    }
    return Ol;
  }
  function Xo(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Jn("" + e);
  }
  function Qo(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function b0(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Xo((n[st] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[st] || null)
          ? Xo(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var f = new In("action", "action", null, a, n);
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ol !== 0) {
                  var r = i ? Qo(n, i) : new FormData(n);
                  vc(
                    l,
                    { pending: !0, data: r, method: n.method, action: u },
                    null,
                    r,
                  );
                }
              } else
                typeof u == "function" &&
                  (f.preventDefault(),
                  (r = i ? Qo(n, i) : new FormData(n)),
                  vc(
                    l,
                    { pending: !0, data: r, method: n.method, action: u },
                    u,
                    r,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var $c = 0; $c < Ui.length; $c++) {
    var Ic = Ui[$c],
      x0 = Ic.toLowerCase(),
      S0 = Ic[0].toUpperCase() + Ic.slice(1);
    Lt(x0, "on" + S0);
  }
  (Lt(bs, "onAnimationEnd"),
    Lt(xs, "onAnimationIteration"),
    Lt(Ss, "onAnimationStart"),
    Lt("dblclick", "onDoubleClick"),
    Lt("focusin", "onFocus"),
    Lt("focusout", "onBlur"),
    Lt(Hm, "onTransitionRun"),
    Lt(Lm, "onTransitionStart"),
    Lt(Ym, "onTransitionCancel"),
    Lt(Ns, "onTransitionEnd"),
    ca("onMouseEnter", ["mouseout", "mouseover"]),
    ca("onMouseLeave", ["mouseout", "mouseover"]),
    ca("onPointerEnter", ["pointerout", "pointerover"]),
    ca("onPointerLeave", ["pointerout", "pointerover"]),
    Yl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Yl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Yl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Yl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Yl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Yl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var jn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    N0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(jn),
    );
  function Vo(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              r = f.instance,
              y = f.currentTarget;
            if (((f = f.listener), r !== u && n.isPropagationStopped()))
              break e;
            ((u = f), (n.currentTarget = y));
            try {
              u(n);
            } catch (N) {
              tu(N);
            }
            ((n.currentTarget = null), (u = r));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (r = f.instance),
              (y = f.currentTarget),
              (f = f.listener),
              r !== u && n.isPropagationStopped())
            )
              break e;
            ((u = f), (n.currentTarget = y));
            try {
              u(n);
            } catch (N) {
              tu(N);
            }
            ((n.currentTarget = null), (u = r));
          }
      }
    }
  }
  function ae(e, t) {
    var l = t[oi];
    l === void 0 && (l = t[oi] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Zo(t, e, 2, !1), l.add(a));
  }
  function Pc(e, t, l) {
    var a = 0;
    (t && (a |= 4), Zo(l, e, a, t));
  }
  var Gu = "_reactListening" + Math.random().toString(36).slice(2);
  function ef(e) {
    if (!e[Gu]) {
      ((e[Gu] = !0),
        Hf.forEach(function (l) {
          l !== "selectionchange" && (N0.has(l) || Pc(l, !1, e), Pc(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gu] || ((t[Gu] = !0), Pc("selectionchange", !1, t));
    }
  }
  function Zo(e, t, l, a) {
    switch (xd(t)) {
      case 2:
        var n = F0;
        break;
      case 8:
        n = $0;
        break;
      default:
        n = vf;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !xi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function tf(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = na(f)), i === null)) return;
            if (((r = i.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
              a = u = i;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Wf(function () {
      var y = u,
        N = pi(l),
        T = [];
      e: {
        var p = _s.get(e);
        if (p !== void 0) {
          var x = In,
            L = e;
          switch (e) {
            case "keypress":
              if (Fn(l) === 0) break e;
            case "keydown":
            case "keyup":
              x = gm;
              break;
            case "focusin":
              ((L = "focus"), (x = Ei));
              break;
            case "focusout":
              ((L = "blur"), (x = Ei));
              break;
            case "beforeblur":
            case "afterblur":
              x = Ei;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = pm;
              break;
            case bs:
            case xs:
            case Ss:
              x = im;
              break;
            case Ns:
              x = xm;
              break;
            case "scroll":
            case "scrollend":
              x = tm;
              break;
            case "wheel":
              x = Nm;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = es;
              break;
            case "toggle":
            case "beforetoggle":
              x = Em;
          }
          var V = (t & 4) !== 0,
            Se = !V && (e === "scroll" || e === "scrollend"),
            h = V ? (p !== null ? p + "Capture" : null) : p;
          V = [];
          for (var d = y, v; d !== null; ) {
            var z = d;
            if (
              ((v = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                v === null ||
                h === null ||
                ((z = Wa(d, h)), z != null && V.push(On(d, z, v))),
              Se)
            )
              break;
            d = d.return;
          }
          0 < V.length &&
            ((p = new x(p, L, null, l, N)), T.push({ event: p, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (x = e === "mouseout" || e === "pointerout"),
            p &&
              l !== yi &&
              (L = l.relatedTarget || l.fromElement) &&
              (na(L) || L[aa]))
          )
            break e;
          if (
            (x || p) &&
            ((p =
              N.window === N
                ? N
                : (p = N.ownerDocument)
                  ? p.defaultView || p.parentWindow
                  : window),
            x
              ? ((L = l.relatedTarget || l.toElement),
                (x = y),
                (L = L ? na(L) : null),
                L !== null &&
                  ((Se = B(L)),
                  (V = L.tag),
                  L !== Se || (V !== 5 && V !== 27 && V !== 6)) &&
                  (L = null))
              : ((x = null), (L = y)),
            x !== L)
          ) {
            if (
              ((V = If),
              (z = "onMouseLeave"),
              (h = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((V = es),
                (z = "onPointerLeave"),
                (h = "onPointerEnter"),
                (d = "pointer")),
              (Se = x == null ? p : Ja(x)),
              (v = L == null ? p : Ja(L)),
              (p = new V(z, d + "leave", x, l, N)),
              (p.target = Se),
              (p.relatedTarget = v),
              (z = null),
              na(N) === y &&
                ((V = new V(h, d + "enter", L, l, N)),
                (V.target = v),
                (V.relatedTarget = Se),
                (z = V)),
              (Se = z),
              x && L)
            )
              t: {
                for (V = _0, h = x, d = L, v = 0, z = h; z; z = V(z)) v++;
                z = 0;
                for (var G = d; G; G = V(G)) z++;
                for (; 0 < v - z; ) ((h = V(h)), v--);
                for (; 0 < z - v; ) ((d = V(d)), z--);
                for (; v--; ) {
                  if (h === d || (d !== null && h === d.alternate)) {
                    V = h;
                    break t;
                  }
                  ((h = V(h)), (d = V(d)));
                }
                V = null;
              }
            else V = null;
            (x !== null && Ko(T, p, x, V, !1),
              L !== null && Se !== null && Ko(T, Se, L, V, !0));
          }
        }
        e: {
          if (
            ((p = y ? Ja(y) : window),
            (x = p.nodeName && p.nodeName.toLowerCase()),
            x === "select" || (x === "input" && p.type === "file"))
          )
            var re = fs;
          else if (is(p))
            if (ss) re = Dm;
            else {
              re = Cm;
              var Y = Mm;
            }
          else
            ((x = p.nodeName),
              !x ||
              x.toLowerCase() !== "input" ||
              (p.type !== "checkbox" && p.type !== "radio")
                ? y && vi(y.elementType) && (re = fs)
                : (re = Um));
          if (re && (re = re(e, y))) {
            cs(T, re, l, N);
            break e;
          }
          (Y && Y(e, p, y),
            e === "focusout" &&
              y &&
              p.type === "number" &&
              y.memoizedProps.value != null &&
              gi(p, "number", p.value));
        }
        switch (((Y = y ? Ja(y) : window), e)) {
          case "focusin":
            (is(Y) || Y.contentEditable === "true") &&
              ((ma = Y), (wi = y), (an = null));
            break;
          case "focusout":
            an = wi = ma = null;
            break;
          case "mousedown":
            Mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Mi = !1), ys(T, l, N));
            break;
          case "selectionchange":
            if (Bm) break;
          case "keydown":
          case "keyup":
            ys(T, l, N);
        }
        var I;
        if (Ti)
          e: {
            switch (e) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          da
            ? ns(e, l) && (ue = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (ue = "onCompositionStart");
        (ue &&
          (ts &&
            l.locale !== "ko" &&
            (da || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && da && (I = Ff())
              : ((ml = N),
                (Si = "value" in ml ? ml.value : ml.textContent),
                (da = !0))),
          (Y = Xu(y, ue)),
          0 < Y.length &&
            ((ue = new Pf(ue, e, null, l, N)),
            T.push({ event: ue, listeners: Y }),
            I ? (ue.data = I) : ((I = us(l)), I !== null && (ue.data = I)))),
          (I = Tm ? Am(e, l) : jm(e, l)) &&
            ((ue = Xu(y, "onBeforeInput")),
            0 < ue.length &&
              ((Y = new Pf("onBeforeInput", "beforeinput", null, l, N)),
              T.push({ event: Y, listeners: ue }),
              (Y.data = I))),
          b0(T, e, y, l, N));
      }
      Vo(T, t);
    });
  }
  function On(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Xu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Wa(e, l)),
          n != null && a.unshift(On(e, n, u)),
          (n = Wa(e, t)),
          n != null && a.push(On(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function _0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ko(e, t, l, a, n) {
    for (var u = t._reactName, i = []; l !== null && l !== a; ) {
      var f = l,
        r = f.alternate,
        y = f.stateNode;
      if (((f = f.tag), r !== null && r === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        y === null ||
        ((r = y),
        n
          ? ((y = Wa(l, u)), y != null && i.unshift(On(l, y, r)))
          : n || ((y = Wa(l, u)), y != null && i.push(On(l, y, r)))),
        (l = l.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var E0 = /\r\n?/g,
    z0 = /\u0000|\uFFFD/g;
  function ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        E0,
        `
`,
      )
      .replace(z0, "");
  }
  function Jo(e, t) {
    return ((t = ko(t)), ko(e) === t);
  }
  function xe(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || sa(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            sa(e, "" + a);
        break;
      case "className":
        Kn(e, "class", a);
        break;
      case "tabIndex":
        Kn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Kn(e, l, a);
        break;
      case "style":
        kf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Kn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = Jn("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && xe(e, t, "name", n.name, n, null),
                xe(e, t, "formEncType", n.formEncType, n, null),
                xe(e, t, "formMethod", n.formMethod, n, null),
                xe(e, t, "formTarget", n.formTarget, n, null))
              : (xe(e, t, "encType", n.encType, n, null),
                xe(e, t, "method", n.method, n, null),
                xe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = Jn("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = Jt);
        break;
      case "onScroll":
        a != null && ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = Jn("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (ae("beforetoggle", e), ae("toggle", e), Zn(e, "popover", a));
        break;
      case "xlinkActuate":
        kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        kt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        kt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        kt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        kt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Zn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Pd.get(l) || l), Zn(e, l, a));
    }
  }
  function lf(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        kf(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? sa(e, a)
          : (typeof a == "number" || typeof a == "bigint") && sa(e, "" + a);
        break;
      case "onScroll":
        a != null && ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ae("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Jt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Lf.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[st] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Zn(e, l, a);
          }
    }
  }
  function Pe(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ae("error", e), ae("load", e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  xe(e, t, u, i, l, null);
              }
          }
        (n && xe(e, t, "srcSet", l.srcSet, l, null),
          a && xe(e, t, "src", l.src, l, null));
        return;
      case "input":
        ae("invalid", e);
        var f = (u = i = n = null),
          r = null,
          y = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var N = l[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  i = N;
                  break;
                case "checked":
                  r = N;
                  break;
                case "defaultChecked":
                  y = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  f = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(o(137, t));
                  break;
                default:
                  xe(e, t, a, N, l, null);
              }
          }
        Qf(e, u, f, r, y, i, n, !1);
        return;
      case "select":
        (ae("invalid", e), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((f = l[n]), f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                xe(e, t, n, f, l, null);
            }
        ((t = u),
          (l = i),
          (e.multiple = !!a),
          t != null ? fa(e, !!a, t, !1) : l != null && fa(e, !!a, l, !0));
        return;
      case "textarea":
        (ae("invalid", e), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((f = l[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                xe(e, t, i, f, l, null);
            }
        Zf(e, a, n, u);
        return;
      case "option":
        for (r in l)
          if (l.hasOwnProperty(r) && ((a = l[r]), a != null))
            switch (r) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                xe(e, t, r, a, l, null);
            }
        return;
      case "dialog":
        (ae("beforetoggle", e),
          ae("toggle", e),
          ae("cancel", e),
          ae("close", e));
        break;
      case "iframe":
      case "object":
        ae("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < jn.length; a++) ae(jn[a], e);
        break;
      case "image":
        (ae("error", e), ae("load", e));
        break;
      case "details":
        ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ae("error", e), ae("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                xe(e, t, y, a, l, null);
            }
        return;
      default:
        if (vi(t)) {
          for (N in l)
            l.hasOwnProperty(N) &&
              ((a = l[N]), a !== void 0 && lf(e, t, N, a, l, void 0));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && ((a = l[f]), a != null && xe(e, t, f, a, l, null));
  }
  function T0(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          f = null,
          r = null,
          y = null,
          N = null;
        for (x in l) {
          var T = l[x];
          if (l.hasOwnProperty(x) && T != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = T;
              default:
                a.hasOwnProperty(x) || xe(e, t, x, null, a, T);
            }
        }
        for (var p in a) {
          var x = a[p];
          if (((T = l[p]), a.hasOwnProperty(p) && (x != null || T != null)))
            switch (p) {
              case "type":
                u = x;
                break;
              case "name":
                n = x;
                break;
              case "checked":
                y = x;
                break;
              case "defaultChecked":
                N = x;
                break;
              case "value":
                i = x;
                break;
              case "defaultValue":
                f = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(o(137, t));
                break;
              default:
                x !== T && xe(e, t, p, x, a, T);
            }
        }
        hi(e, i, f, r, y, N, u, n);
        return;
      case "select":
        x = i = f = p = null;
        for (u in l)
          if (((r = l[u]), l.hasOwnProperty(u) && r != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                x = r;
              default:
                a.hasOwnProperty(u) || xe(e, t, u, null, a, r);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (r = l[n]),
            a.hasOwnProperty(n) && (u != null || r != null))
          )
            switch (n) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== r && xe(e, t, n, u, a, r);
            }
        ((t = f),
          (l = i),
          (a = x),
          p != null
            ? fa(e, !!l, p, !1)
            : !!a != !!l &&
              (t != null ? fa(e, !!l, t, !0) : fa(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        x = p = null;
        for (f in l)
          if (
            ((n = l[f]),
            l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                xe(e, t, f, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                p = n;
                break;
              case "defaultValue":
                x = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && xe(e, t, i, n, a, u);
            }
        Vf(e, p, x);
        return;
      case "option":
        for (var L in l)
          if (
            ((p = l[L]),
            l.hasOwnProperty(L) && p != null && !a.hasOwnProperty(L))
          )
            switch (L) {
              case "selected":
                e.selected = !1;
                break;
              default:
                xe(e, t, L, null, a, p);
            }
        for (r in a)
          if (
            ((p = a[r]),
            (x = l[r]),
            a.hasOwnProperty(r) && p !== x && (p != null || x != null))
          )
            switch (r) {
              case "selected":
                e.selected =
                  p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                xe(e, t, r, p, a, x);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in l)
          ((p = l[V]),
            l.hasOwnProperty(V) &&
              p != null &&
              !a.hasOwnProperty(V) &&
              xe(e, t, V, null, a, p));
        for (y in a)
          if (
            ((p = a[y]),
            (x = l[y]),
            a.hasOwnProperty(y) && p !== x && (p != null || x != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(o(137, t));
                break;
              default:
                xe(e, t, y, p, a, x);
            }
        return;
      default:
        if (vi(t)) {
          for (var Se in l)
            ((p = l[Se]),
              l.hasOwnProperty(Se) &&
                p !== void 0 &&
                !a.hasOwnProperty(Se) &&
                lf(e, t, Se, void 0, a, p));
          for (N in a)
            ((p = a[N]),
              (x = l[N]),
              !a.hasOwnProperty(N) ||
                p === x ||
                (p === void 0 && x === void 0) ||
                lf(e, t, N, p, a, x));
          return;
        }
    }
    for (var h in l)
      ((p = l[h]),
        l.hasOwnProperty(h) &&
          p != null &&
          !a.hasOwnProperty(h) &&
          xe(e, t, h, null, a, p));
    for (T in a)
      ((p = a[T]),
        (x = l[T]),
        !a.hasOwnProperty(T) ||
          p === x ||
          (p == null && x == null) ||
          xe(e, t, T, p, a, x));
  }
  function Wo(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function A0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          f = n.duration;
        if (u && f && Wo(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
            var r = l[a],
              y = r.startTime;
            if (y > f) break;
            var N = r.transferSize,
              T = r.initiatorType;
            N &&
              Wo(T) &&
              ((r = r.responseEnd), (i += N * (r < f ? 1 : (f - y) / (r - y))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var af = null,
    nf = null;
  function Qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Fo(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $o(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function uf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cf = null;
  function j0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === cf
        ? !1
        : ((cf = e), !0)
      : ((cf = null), !1);
  }
  var Io = typeof setTimeout == "function" ? setTimeout : void 0,
    O0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Po = typeof Promise == "function" ? Promise : void 0,
    w0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Po < "u"
          ? function (e) {
              return Po.resolve(null).then(e).catch(M0);
            }
          : Io;
  function M0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wl(e) {
    return e === "head";
  }
  function ed(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(n), qa(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") wn(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), wn(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              f = u.nodeName;
            (u[ka] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && wn(e.ownerDocument.body);
      l = n;
    } while (l);
    qa(t);
  }
  function td(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function ff(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ff(l), di(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function C0(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[ka])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Rt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function U0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Rt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ld(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Rt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function sf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function rf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function D0(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Rt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var of = null;
  function ad(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Rt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function nd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ud(e, t, l) {
    switch (((t = Qu(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function wn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    di(e);
  }
  var Bt = new Map(),
    id = new Set();
  function Vu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var rl = M.d;
  M.d = { f: R0, r: B0, D: H0, C: L0, L: Y0, m: q0, X: X0, S: G0, M: Q0 };
  function R0() {
    var e = rl.f(),
      t = Ru();
    return e || t;
  }
  function B0(e) {
    var t = ua(e);
    t !== null && t.tag === 5 && t.type === "form" ? Nr(t) : rl.r(e);
  }
  var Ha = typeof document > "u" ? null : document;
  function cd(e, t, l) {
    var a = Ha;
    if (a && typeof t == "string" && t) {
      var n = jt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        id.has(n) ||
          (id.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Pe(t, "link", e),
            ke(t),
            a.head.appendChild(t))));
    }
  }
  function H0(e) {
    (rl.D(e), cd("dns-prefetch", e, null));
  }
  function L0(e, t) {
    (rl.C(e, t), cd("preconnect", e, t));
  }
  function Y0(e, t, l) {
    rl.L(e, t, l);
    var a = Ha;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + jt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + jt(l.imageSizes) + '"]'))
        : (n += '[href="' + jt(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = La(e);
          break;
        case "script":
          u = Ya(e);
      }
      Bt.has(u) ||
        ((e = H(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Bt.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Mn(u))) ||
          (t === "script" && a.querySelector(Cn(u))) ||
          ((t = a.createElement("link")),
          Pe(t, "link", e),
          ke(t),
          a.head.appendChild(t)));
    }
  }
  function q0(e, t) {
    rl.m(e, t);
    var l = Ha;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ya(e);
      }
      if (
        !Bt.has(u) &&
        ((e = H({ rel: "modulepreload", href: e }, t)),
        Bt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Cn(u))) return;
        }
        ((a = l.createElement("link")),
          Pe(a, "link", e),
          ke(a),
          l.head.appendChild(a));
      }
    }
  }
  function G0(e, t, l) {
    rl.S(e, t, l);
    var a = Ha;
    if (a && e) {
      var n = ia(a).hoistableStyles,
        u = La(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(Mn(u)))) f.loading = 5;
        else {
          ((e = H({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Bt.get(u)) && df(e, l));
          var r = (i = a.createElement("link"));
          (ke(r),
            Pe(r, "link", e),
            (r._p = new Promise(function (y, N) {
              ((r.onload = y), (r.onerror = N));
            })),
            r.addEventListener("load", function () {
              f.loading |= 1;
            }),
            r.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Zu(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }),
          n.set(u, i));
      }
    }
  }
  function X0(e, t) {
    rl.X(e, t);
    var l = Ha;
    if (l && e) {
      var a = ia(l).hoistableScripts,
        n = Ya(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Cn(n))),
        u ||
          ((e = H({ src: e, async: !0 }, t)),
          (t = Bt.get(n)) && mf(e, t),
          (u = l.createElement("script")),
          ke(u),
          Pe(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Q0(e, t) {
    rl.M(e, t);
    var l = Ha;
    if (l && e) {
      var a = ia(l).hoistableScripts,
        n = Ya(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Cn(n))),
        u ||
          ((e = H({ src: e, async: !0, type: "module" }, t)),
          (t = Bt.get(n)) && mf(e, t),
          (u = l.createElement("script")),
          ke(u),
          Pe(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function fd(e, t, l, a) {
    var n = (n = R.current) ? Vu(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = La(l.href)),
            (l = ia(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = La(l.href);
          var u = ia(n).hoistableStyles,
            i = u.get(e);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, i),
              (u = n.querySelector(Mn(e))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Bt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Bt.set(e, l),
                u || V0(n, e, l, i.state))),
            t && a === null)
          )
            throw Error(o(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ya(l)),
              (l = ia(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function La(e) {
    return 'href="' + jt(e) + '"';
  }
  function Mn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sd(e) {
    return H({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function V0(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Pe(t, "link", l),
        ke(t),
        e.head.appendChild(t));
  }
  function Ya(e) {
    return '[src="' + jt(e) + '"]';
  }
  function Cn(e) {
    return "script[async]" + e;
  }
  function rd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + jt(l.href) + '"]');
          if (a) return ((t.instance = a), ke(a), a);
          var n = H({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            ke(a),
            Pe(a, "style", n),
            Zu(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = La(l.href);
          var u = e.querySelector(Mn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ke(u), u);
          ((a = sd(l)),
            (n = Bt.get(n)) && df(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            ke(u));
          var i = u;
          return (
            (i._p = new Promise(function (f, r) {
              ((i.onload = f), (i.onerror = r));
            })),
            Pe(u, "link", a),
            (t.state.loading |= 4),
            Zu(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ya(l.src)),
            (n = e.querySelector(Cn(u)))
              ? ((t.instance = n), ke(n), n)
              : ((a = l),
                (n = Bt.get(u)) && ((a = H({}, l)), mf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                ke(n),
                Pe(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Zu(a, l.precedence, e));
    return t.instance;
  }
  function Zu(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === t) u = f;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function df(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function mf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ku = null;
  function od(e, t, l) {
    if (Ku === null) {
      var a = new Map(),
        n = (Ku = new Map());
      n.set(l, a);
    } else ((n = Ku), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[ka] ||
          u[We] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function dd(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Z0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function md(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function K0(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = La(a.href),
          u = t.querySelector(Mn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = ku.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            ke(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = sd(a)),
          (n = Bt.get(n)) && df(a, n),
          (u = u.createElement("link")),
          ke(u));
        var i = u;
        ((i._p = new Promise(function (f, r) {
          ((i.onload = f), (i.onerror = r));
        })),
          Pe(u, "link", a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = ku.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var hf = 0;
  function k0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Wu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Wu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && hf === 0 && (hf = 62500 * A0());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Wu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > hf ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function ku() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ju = null;
  function Wu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ju = new Map()),
        t.forEach(J0, e),
        (Ju = null),
        ku.call(e)));
  }
  function J0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ju.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Ju.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ku.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Un = {
    $$typeof: ze,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function W0(e, t, l, a, n, u, i, f, r) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = fi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fi(0)),
      (this.hiddenUpdates = fi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map()));
  }
  function hd(e, t, l, a, n, u, i, f, r, y, N, T) {
    return (
      (e = new W0(e, t, l, i, r, y, N, T, f)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = xt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Ki()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Fi(u),
      e
    );
  }
  function gd(e) {
    return e ? ((e = va), e) : va;
  }
  function vd(e, t, l, a, n, u) {
    ((n = gd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = bl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = xl(e, a, t)),
      l !== null && (gt(l, e, t), on(l, e, t)));
  }
  function yd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function gf(e, t) {
    (yd(e, t), (e = e.alternate) && yd(e, t));
  }
  function pd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ql(e, 67108864);
      (t !== null && gt(t, e, 67108864), gf(e, 67108864));
    }
  }
  function bd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = si(t);
      var l = Ql(e, t);
      (l !== null && gt(l, e, t), gf(e, t));
    }
  }
  var Fu = !0;
  function F0(e, t, l, a) {
    var n = S.T;
    S.T = null;
    var u = M.p;
    try {
      ((M.p = 2), vf(e, t, l, a));
    } finally {
      ((M.p = u), (S.T = n));
    }
  }
  function $0(e, t, l, a) {
    var n = S.T;
    S.T = null;
    var u = M.p;
    try {
      ((M.p = 8), vf(e, t, l, a));
    } finally {
      ((M.p = u), (S.T = n));
    }
  }
  function vf(e, t, l, a) {
    if (Fu) {
      var n = yf(a);
      if (n === null) (tf(e, t, a, $u, l), Sd(e, a));
      else if (P0(n, e, t, l, a)) a.stopPropagation();
      else if ((Sd(e, a), t & 4 && -1 < I0.indexOf(e))) {
        for (; n !== null; ) {
          var u = ua(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Ll(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var r = 1 << (31 - pt(i));
                      ((f.entanglements[1] |= r), (i &= ~r));
                    }
                    (Kt(u), (he & 6) === 0 && ((Uu = lt() + 500), An(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Ql(u, 2)), f !== null && gt(f, u, 2), Ru(), gf(u, 2));
            }
          if (((u = yf(a)), u === null && tf(e, t, a, $u, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else tf(e, t, a, null, l);
    }
  }
  function yf(e) {
    return ((e = pi(e)), pf(e));
  }
  var $u = null;
  function pf(e) {
    if ((($u = null), (e = na(e)), e !== null)) {
      var t = B(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = Z(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = F(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (($u = e), null);
  }
  function xd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ii()) {
          case Xa:
            return 2;
          case Yn:
            return 8;
          case la:
          case qn:
            return 32;
          case Qa:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1,
    Ml = null,
    Cl = null,
    Ul = null,
    Dn = new Map(),
    Rn = new Map(),
    Dl = [],
    I0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Sd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        Cl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Dn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(t.pointerId);
    }
  }
  function Bn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = ua(t)), t !== null && pd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function P0(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((Ml = Bn(Ml, e, t, l, a, n)), !0);
      case "dragenter":
        return ((Cl = Bn(Cl, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Ul = Bn(Ul, e, t, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Dn.set(u, Bn(Dn.get(u) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          Rn.set(u, Bn(Rn.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Nd(e) {
    var t = na(e.target);
    if (t !== null) {
      var l = B(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = Z(l)), t !== null)) {
            ((e.blockedOn = t),
              Rf(e.priority, function () {
                bd(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = F(l)), t !== null)) {
            ((e.blockedOn = t),
              Rf(e.priority, function () {
                bd(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Iu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = yf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((yi = a), l.target.dispatchEvent(a), (yi = null));
      } else return ((t = ua(l)), t !== null && pd(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function _d(e, t, l) {
    Iu(e) && l.delete(t);
  }
  function eh() {
    ((bf = !1),
      Ml !== null && Iu(Ml) && (Ml = null),
      Cl !== null && Iu(Cl) && (Cl = null),
      Ul !== null && Iu(Ul) && (Ul = null),
      Dn.forEach(_d),
      Rn.forEach(_d));
  }
  function Pu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bf ||
        ((bf = !0),
        b.unstable_scheduleCallback(b.unstable_NormalPriority, eh)));
  }
  var ei = null;
  function Ed(e) {
    ei !== e &&
      ((ei = e),
      b.unstable_scheduleCallback(b.unstable_NormalPriority, function () {
        ei === e && (ei = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (pf(a || l) === null) continue;
            break;
          }
          var u = ua(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            vc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function qa(e) {
    function t(r) {
      return Pu(r, e);
    }
    (Ml !== null && Pu(Ml, e),
      Cl !== null && Pu(Cl, e),
      Ul !== null && Pu(Ul, e),
      Dn.forEach(t),
      Rn.forEach(t));
    for (var l = 0; l < Dl.length; l++) {
      var a = Dl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Dl.length && ((l = Dl[0]), l.blockedOn === null); )
      (Nd(l), l.blockedOn === null && Dl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[st] || null;
        if (typeof u == "function") i || Ed(l);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[st] || null))) f = i.formAction;
            else if (pf(n) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (l[a + 1] = f) : (l.splice(a, 3), (a -= 3)),
            Ed(l));
        }
      }
  }
  function zd() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function xf(e) {
    this._internalRoot = e;
  }
  ((ti.prototype.render = xf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var l = t.current,
        a = zt();
      vd(l, a, e, t, null, null);
    }),
    (ti.prototype.unmount = xf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (vd(e.current, 2, null, e, null, null), Ru(), (t[aa] = null));
        }
      }));
  function ti(e) {
    this._internalRoot = e;
  }
  ti.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Df();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++);
      (Dl.splice(l, 0, e), l === 0 && Nd(e));
    }
  };
  var Td = j.version;
  if (Td !== "19.2.4") throw Error(o(527, Td, "19.2.4"));
  M.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = E(t)),
      (e = e !== null ? q(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var th = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        ((Hl = li.inject(th)), (yt = li));
      } catch {}
  }
  return (
    (Ln.createRoot = function (e, t) {
      if (!U(e)) throw Error(o(299));
      var l = !1,
        a = "",
        n = Cr,
        u = Ur,
        i = Dr;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = hd(e, 1, !1, null, null, l, a, null, n, u, i, zd)),
        (e[aa] = t.current),
        ef(e),
        new xf(t)
      );
    }),
    (Ln.hydrateRoot = function (e, t, l) {
      if (!U(e)) throw Error(o(299));
      var a = !1,
        n = "",
        u = Cr,
        i = Ur,
        f = Dr,
        r = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
          l.formState !== void 0 && (r = l.formState)),
        (t = hd(e, 1, !0, t, l ?? null, a, n, r, u, i, f, zd)),
        (t.context = gd(null)),
        (l = t.current),
        (a = zt()),
        (a = si(a)),
        (n = bl(a)),
        (n.callback = null),
        xl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Ka(t, l),
        Kt(t),
        (e[aa] = t.current),
        ef(e),
        new ti(t)
      );
    }),
    (Ln.version = "19.2.4"),
    Ln
  );
}
var Bd;
function dh() {
  if (Bd) return _f.exports;
  Bd = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (j) {
        console.error(j);
      }
  }
  return (b(), (_f.exports = oh()), _f.exports);
}
var mh = dh();
const hh = Yd(mh),
  Bl = {
    BACKGROUND_PATTERN:
      "assets/images/background-pattern.webp",
    LOGO: "assets/images/brawl-stars-logo.webp",
    INFO_ICON: "assets/images/info-icon.webp",
    AVATAR: "assets/images/default-avatar.webp",
    BACK_BUTTON: "assets/images/back-button.webp",
    ICON_TROPHY: "assets/images/trophy-icon.webp",
    ICON_LEVEL: "assets/images/level-icon.webp",
  },
  Ue = {
    CHAOS_DROPS: "assets/images/chaos-drop.webp",
    GEMS_2000: "assets/images/gems-2000.png",
    COFFIN_BOX: "assets/images/Coffin_Box.webp",
    COSMO_BRAWLER: "assets/images/cosmo-brawler.webp",
    COSMO_BOX: "assets/images/cosmo-box.webp",
    VINCE_BOX: "assets/images/vince-box.png",
    VINCE_BRAWLER: "assets/images/vince-brawler.webp",
    SIRIUS_BOX: "assets/images/sirius-box.png",
    KAZE: "assets/images/kaze.webp",
    BRAWL_PASS_PLUS: "assets/images/brawl-pass-plus.png",
    SIRIUS_BRAWLER: "assets/images/sirius-brawler.webp",
    ULTRA_TROPHY_BOX: "assets/images/ultra-trophy-box.png",
    BUFFIES: "assets/images/buffies.webp",
    NAJIA_BOX: "assets/images/najia-box.webp",
    NAJIA_BRAWLER_SKIN: "assets/images/najia-skin.webp",
    KEYS: "assets/images/keys.webp",
    MEGA_BOX: "assets/images/mega-box.png",
    STARR_NOVA_BOX: "assets/images/starr-nova-box.png",
    STARR_NOVA_SKIN: "assets/images/starr-nova-skin.webp",
    NOVA_DROP: "assets/images/nova-drop.png",
    DAMIAN_BOX: "assets/images/damian-box.webp",
    DAMIAN_SKIN: "assets/images/damian-skin.webp",
    BOLT_SKIN: "assets/images/bolt-skin.webp",
    BOLT_BOX: "assets/images/bolt-box.webp",
    EL_PRIMO_SKIN: "assets/images/el-primo-all-might-skin.webp",
    BAKUGO_EDGAR_SKIN: "assets/images/edgar-bakugo-skin.webp",
    TOMURA_SHIGARAKI_GUS_SKIN: "assets/images/gus-shigaraki-skin.webp",
    URAVITY_JANET_SKIN: "assets/images/janet-uravity-skin.webp",
    DEKU_FANG_SKIN: "assets/images/fang-deku-skin.webp",
    FREE_BLING: "assets/images/free-bling.webp",
    NORI_BOX: "assets/images/nori-box.png",
    WENDY_BOX: "assets/images/wendy-box.png",
    NANO_BOX: "assets/images/nano-box.webp",
  },
  Af = [
    "Connecting to Supercell secure gateway...",
    "Locating player account in matchmaking database...",
    "Unlocking reward drop payload...",
    "Verifying in-game delivery signature...",
    "Checking anti-cheat verification status...",
    "Ready to transfer! Final verification required...",
  ],
  bh = () =>
    s.jsx("footer", {
      className:
        "w-full bg-black text-white font-sans py-12 px-6 md:px-12 pointer-events-auto border-t border-white/5 relative z-20 mt-auto",
      children: s.jsxs("div", {
        className: "max-w-6xl mx-auto flex flex-col gap-8",
        children: [
          s.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-start gap-8",
            children: [
              s.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [
                  s.jsx("h3", {
                    className: "text-[15px] font-bold tracking-wide font-sans",
                    children: "Download our games from",
                  }),
                  s.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                      s.jsx("a", {
                        href: "https://apps.apple.com/us/developer/supercell/id488106216",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-90 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/app-store-badge.webp",
                          alt: "Download on the App Store",
                          className: "h-10 w-auto",
                        }),
                      }),
                      s.jsx("a", {
                        href: "https://apps.apple.com/us/developer/supercell/id6715068722362591614&hl=en",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-90 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/google-play-badge.webp",
                          alt: "Get it on Google Play",
                          className: "h-10 w-auto",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex flex-col gap-4 md:items-end",
                children: [
                  s.jsx("h3", {
                    className: "text-[15px] font-bold tracking-wide font-sans",
                    children: "Follow us on",
                  }),
                  s.jsxs("div", {
                    className:
                      "flex flex-wrap gap-3 items-center md:justify-end",
                    children: [
                      s.jsx("a", {
                        href: "https://www.youtube.com/supercell",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-70 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/social-youtube.webp",
                          alt: "YouTube",
                          className: "w-6 h-6 object-contain",
                        }),
                      }),
                      s.jsx("a", {
                        href: "https://web.facebook.com/supercell?_rdc=1&_rdr",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-70 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/social-facebook.webp",
                          alt: "Facebook",
                          className: "w-6 h-6 object-contain",
                        }),
                      }),
                      s.jsx("a", {
                        href: "https://www.instagram.com/supercell/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-70 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/social-instagram.webp",
                          alt: "Instagram",
                          className: "w-6 h-6 object-contain",
                        }),
                      }),
                      s.jsx("a", {
                        href: "https://x.com/supercell",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-70 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/social-x-twitter.webp",
                          alt: "X",
                          className: "w-6 h-6 object-contain",
                        }),
                      }),
                      s.jsx("a", {
                        href: "https://www.linkedin.com/company/supercell",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-70 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/social-linkedin.webp",
                          alt: "LinkedIn",
                          className: "w-6 h-6 object-contain",
                        }),
                      }),
                      s.jsx("a", {
                        href: "https://www.glassdoor.com/Overview/Working-at-Supercell-EI_IE511675.11,20.htm",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-70 transition-opacity",
                        children: s.jsx("img", {
                          src: "assets/images/social-glassdoor.webp",
                          alt: "Glassdoor",
                          className: "w-6 h-6 object-contain",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("hr", { className: "border-white/10" }),
          s.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-start gap-10 pt-2",
            children: [
              s.jsxs("ul", {
                className:
                  "flex flex-col gap-3 text-[13px] font-semibold text-white font-sans",
                children: [
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/terms-of-service/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Terms of Service",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/privacy-policy/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Privacy Policy",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/parents/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Parent's Guide",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/safe-and-fair-play/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Safe and Fair Play Policy",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/accessibility-statement-supercell-com/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Accessibility Statement",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/our-legal-documents/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Other Legal Docs",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/media-center/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Media Center",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "https://supercell.com/en/our-domains/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:underline hover:text-gray-200",
                      children: "Our Domains",
                    }),
                  }),
                  s.jsx("li", {
                    children: s.jsx("a", {
                      href: "#",
                      className: "hover:underline hover:text-gray-200",
                      children: "Manage Cookies",
                    }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "flex flex-col gap-6 items-start md:items-end md:text-right",
                children: [
                  s.jsxs("div", {
                    className:
                      "text-[11px] text-gray-400 leading-[1.6] font-medium font-sans",
                    children: [
                      s.jsx("p", { children: "Supercell Oy" }),
                      s.jsx("p", { children: "Jätkäsaarenlaituri 1" }),
                      s.jsx("p", { children: "00180 Helsinki" }),
                      s.jsx("p", { children: "Finland" }),
                    ],
                  }),
                  s.jsx("img", {
                    src: "assets/images/supercell-logo.webp",
                    alt: "Supercell",
                    className:
                      "w-28 opacity-80 hover:opacity-100 transition-opacity",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Hd = [
    "assets/images/buffies-icon.webp",
    "assets/images/chaos-drop.webp",
    "assets/images/keys-icon.webp",
    "assets/images/kaze-skin.webp",
    "assets/images/mega-box.png",
    "assets/images/omega-box.webp",
    "assets/images/cosmo-box.webp",
    "assets/images/cosmo-brawler.webp",
    "assets/images/vince-box.png",
    "assets/images/vince-brawler.webp",
    "assets/images/gems-2000.png",
    "assets/images/Coffin_Box.webp",
    "assets/images/brawl-pass-plus.png",
    "assets/images/starr-nova-box.png",
    "assets/images/starr-nova-skin.webp",
    "assets/images/damian-box.webp",
    "assets/images/bolt-box.webp",
    "assets/images/najia-box.webp",
    "assets/images/wendy-box.png",
    "assets/images/nano-box.webp",
    "assets/images/nori-box.png",
    "assets/images/free-bling.webp",
    "assets/images/nova-drop.png",
  ],
  Ld = [
    "assets/images/profile-icon-00.png",
    "assets/images/profile-icon-01.png",
    "assets/images/profile-icon-02.png",
    "assets/images/profile-icon-03.png",
    "assets/images/profile-icon-04.png",
    "assets/images/profile-icon-05.png",
    "assets/images/profile-icon-06.png",
    "assets/images/profile-icon-07.png",
    "assets/images/profile-icon-08.png",
    "assets/images/profile-icon-09.png",
    "assets/images/profile-icon-10.png",
    "assets/images/profile-icon-11.png",
    "assets/images/profile-icon-12.png",
    "assets/images/profile-icon-13.png",
    "assets/images/profile-icon-14.png",
    "assets/images/profile-icon-15.png",
  ],
  xh = () => {
    const [b, j] = P.useState(0),
      [w, o] = P.useState(0),
      [U, B] = P.useState(!0),
      [Z, F] = P.useState(!0),
      [O, E] = P.useState(3098),
      [q, H] = P.useState(1099);
    (P.useEffect(() => {
      const te = setInterval(() => {
        (B(!1),
          setTimeout(() => {
            (j((de) => (de + 1) % Hd.length), B(!0));
          }, 300));
      }, 4e3);
      return () => clearInterval(te);
    }, []),
      P.useEffect(() => {
        const te = setInterval(() => {
          (F(!1),
            setTimeout(() => {
              (o((de) => (de + 1) % Ld.length), F(!0));
            }, 300));
        }, 5e3);
        return () => clearInterval(te);
      }, []),
      P.useEffect(() => {
        const te = setInterval(() => {
          E((de) => de + Math.floor(Math.random() * 5) + 1);
        }, 2e3);
        return () => clearInterval(te);
      }, []),
      P.useEffect(() => {
        const te = setInterval(() => {
          H((de) => {
            const _e = Math.floor(Math.random() * 10) - 5;
            let J = de + _e;
            return (J < 800 && (J = 800), J > 2500 && (J = 2500), J);
          });
        }, 3e3);
        return () => clearInterval(te);
      }, []));
    const ie = (te) => te.toLocaleString("en-US");
    return s.jsxs("div", {
      className: "w-full max-w-[380px] mt-1.5 mb-2 z-20",
      style: { fontFamily: "'Lilita One', cursive" },
      children: [
        s.jsx("style", {
          children: `
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-2px) rotate(2deg); }
        }
        .animate-float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }
        @keyframes breathe-text {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        .animate-breathe {
            animation: breathe-text 2s ease-in-out infinite;
        }
      `,
        }),
        s.jsxs("div", {
          className:
            "w-full bg-[#0d2260]/85 backdrop-blur-md rounded-2xl p-2 border-2 border-yellow-400/50 shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex flex-col gap-1.5",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between px-1",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    s.jsxs("div", {
                      className:
                        "bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm shrink-0",
                      children: [
                        s.jsxs("div", {
                          className: "relative flex h-2 w-2",
                          children: [
                            s.jsx("span", {
                              className:
                                "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                            }),
                            s.jsx("span", {
                              className:
                                "relative inline-flex rounded-full h-2 w-2 bg-emerald-500",
                            }),
                          ],
                        }),
                        s.jsx("span", {
                          className:
                            "text-emerald-300 text-[9px] font-black tracking-wider uppercase",
                          children: "SERVER ONLINE",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("span", {
                  className:
                    "text-white/70 font-['Lilita_One'] text-[10px] uppercase tracking-wider text-stroke-sm",
                  children: ["⚡ LIVE DROPS ACTIVE"],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                s.jsxs("div", {
                  className:
                    "bg-[#081745]/70 border border-yellow-400/30 rounded-xl p-2 flex items-center gap-2.5 relative overflow-hidden group hover:border-yellow-400/60 transition-colors",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-11 h-11 shrink-0 flex items-center justify-center relative z-10",
                      children: s.jsx("img", {
                        src: Hd[b],
                        alt: "Reward",
                        className: `w-full h-full object-contain drop-shadow-md animate-float-icon transition-all duration-300 ${U ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
                      }),
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col min-w-0 z-10",
                      children: [
                        s.jsx("span", {
                          className:
                            "text-base sm:text-lg font-black text-yellow-300 drop-shadow-sm tabular-nums tracking-tight leading-none text-stroke-sm animate-breathe",
                          children: ie(O),
                        }),
                        s.jsx("span", {
                          className:
                            "text-[8px] font-black text-white/80 uppercase tracking-wider leading-tight mt-0.5 text-stroke-sm truncate",
                          children: "GIFTS CLAIMED",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-[#081745]/70 border border-blue-400/30 rounded-xl p-2 flex items-center gap-2.5 relative overflow-hidden group hover:border-blue-400/60 transition-colors",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-11 h-11 shrink-0 flex items-center justify-center relative z-10",
                      children: s.jsx("img", {
                        src: Ld[w],
                        alt: "Player",
                        className: `w-9 h-9 rounded-full object-cover border-2 border-white/60 shadow-sm transition-all duration-300 ${Z ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
                      }),
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col min-w-0 z-10",
                      children: [
                        s.jsx("span", {
                          className:
                            "text-base sm:text-lg font-black text-emerald-400 drop-shadow-sm tabular-nums tracking-tight leading-none text-stroke-sm animate-breathe",
                          children: ie(q),
                        }),
                        s.jsx("span", {
                          className:
                            "text-[8px] font-black text-white/80 uppercase tracking-wider leading-tight mt-0.5 text-stroke-sm truncate",
                          children: "PLAYERS ONLINE",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  REWARDS_DATA = [
    {
      id: "chaos_drops",
      title: "ULTRA CHAOS DROPS",
      img: Ue.CHAOS_DROPS,
      amount: 100,
      category: "boxes",
      originalPrice: "$2.99",
      freeCount: "x6",
    },
    {
      id: "2000_gems",
      title: "2000 GEMS",
      img: Ue.GEMS_2000,
      amount: 2000,
      category: "gems",
      originalPrice: "$19.99",
      freeCount: "x24",
    },
    {
      id: "coffin_box",
      title: "COFFIN BOX",
      img: Ue.COFFIN_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$9.99",
      freeCount: "x5",
    },
    {
      id: "ultra_box",
      title: "ULTRA BOX",
      img: Ue.ULTRA_TROPHY_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$9.99",
      freeCount: "x6",
      imageClassName: "scale-110 hover:scale-125 transition-transform",
    },
    {
      id: "pass_plus",
      title: "BRAWL PASS PLUS",
      img: Ue.BRAWL_PASS_PLUS,
      amount: 1,
      category: "gems",
      originalPrice: "$8.99",
      freeCount: "x1",
    },
    {
      id: "cosmo_brawler",
      title: "COSMO BRAWLER",
      img: Ue.COSMO_BRAWLER,
      amount: 1,
      category: "brawlers",
      originalPrice: "$19.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "cosmo_box",
      title: "COSMO BOX",
      img: Ue.COSMO_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$9.99",
      freeCount: "x10",
      imageClassName: "scale-125",
    },
    {
      id: "vince_box",
      title: "VINCE BOX",
      img: Ue.VINCE_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$9.99",
      freeCount: "x10",
      imageClassName: "scale-125",
    },
    {
      id: "vince_brawler",
      title: "VINCE BRAWLER",
      img: Ue.VINCE_BRAWLER,
      amount: 1,
      category: "brawlers",
      originalPrice: "$19.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "nori_box",
      title: "NORI BOX",
      img: Ue.NORI_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$125",
      freeCount: "x25",
      imageClassName: "scale-150",
    },
    {
      id: "wendy_box",
      title: "WENDY BOX",
      img: Ue.WENDY_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$49.9",
      freeCount: "x10",
      imageClassName: "scale-125",
    },
    {
      id: "nano_box",
      title: "NANO BOX",
      img: Ue.NANO_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$70",
      freeCount: "x150",
      imageClassName: "scale-125",
    },
    {
      id: "starr_nova_box",
      title: "STARR NOVA BOX",
      img: Ue.STARR_NOVA_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$24.99",
      freeCount: "x100",
    },
    {
      id: "starr_nova_skin",
      title: "STARR NOVA SKIN",
      img: Ue.STARR_NOVA_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$14.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "nova_drop",
      title: "NOVA DROP",
      img: Ue.NOVA_DROP,
      amount: 10,
      category: "boxes",
      originalPrice: "$1.99",
      freeCount: "x10",
    },
    {
      id: "damian_box",
      title: "DAMIAN BOX",
      img: Ue.DAMIAN_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$9.99",
      freeCount: "x1",
    },
    {
      id: "damian_skin",
      title: "DAMIAN SKIN",
      img: Ue.DAMIAN_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "bolt_skin",
      title: "BOLT SKIN",
      img: Ue.BOLT_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "bolt_box",
      title: "BOLT BOX",
      img: Ue.BOLT_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$9.99",
      freeCount: "x50",
    },
    {
      id: "el_primo_skin",
      title: "EL PRIMO SKIN",
      img: Ue.EL_PRIMO_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "bakugo_edgar_skin",
      title: "BAKUGO EDGAR SKIN",
      img: Ue.BAKUGO_EDGAR_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "tomura_shigaraki_gus_skin",
      title: "TOMURA SHIGARAKI GUS SKIN",
      img: Ue.TOMURA_SHIGARAKI_GUS_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "uravity_janet_skin",
      title: "URAVITY JANET SKIN",
      img: Ue.URAVITY_JANET_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "deku_fang_skin",
      title: "DEKU FANG SKIN",
      img: Ue.DEKU_FANG_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "free_bling",
      title: "FREE BLING",
      img: Ue.FREE_BLING,
      amount: 1000,
      category: "gems",
      originalPrice: "$9.99",
      freeCount: "x1",
    },
    {
      id: "mega_box",
      title: "MEGA BOX",
      img: Ue.MEGA_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$4.99",
      freeCount: "x10",
      imageClassName: "scale-150",
    },
    {
      id: "najia_box",
      title: "NAJIA BOX",
      img: Ue.NAJIA_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$2.99",
      freeCount: "x18",
    },
    {
      id: "najia_brawler_skin",
      title: "NAJIA BRAWLER SKIN",
      img: Ue.NAJIA_BRAWLER_SKIN,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "sirius_box",
      title: "SIRIUS BOX",
      img: Ue.SIRIUS_BOX,
      amount: 1,
      category: "boxes",
      originalPrice: "$2.99",
      freeCount: "x6",
    },
    {
      id: "kaze",
      title: "KAZE",
      subtitle: "ULTRA LEGENDARY BRAWLERS",
      img: Ue.KAZE,
      amount: 1,
      category: "brawlers",
      originalPrice: "$8.99",
      freeCount: "x1",
    },
    {
      id: "sirius_brawler",
      title: "SIRIUS BRAWLER",
      img: Ue.SIRIUS_BRAWLER,
      amount: 1,
      category: "brawlers",
      originalPrice: "$4.99",
      freeCount: "x1",
      imageClassName: "scale-150",
    },
    {
      id: "buffies",
      title: "BUFFIES",
      img: Ue.BUFFIES,
      amount: 30,
      category: "gems",
      originalPrice: "$2.99",
      freeCount: "x6",
    },
    {
      id: "keys",
      title: "KEYS",
      img: Ue.KEYS,
      amount: 170,
      category: "gems",
      originalPrice: "$2.99",
      freeCount: "x6",
    },
  ],
  CATEGORIES = [
    { id: "all", label: "ALL", icon: "⚡" },
    { id: "boxes", label: "BOXES", icon: "🎁" },
    { id: "brawlers", label: "BRAWLERS", icon: "🦸" },
    { id: "gems", label: "GEMS & PASS", icon: "💎" },
  ],
  Gt = ({
    title: b,
    subtitle: j,
    img: w,
    packId: o,
    amount: U,
    isActive: B,
    onClick: Z,
    className: F = "",
    imageClassName: O = "",
    originalPrice: E,
    freeCount: q,
    featured: ge = !1,
  }) =>
    s.jsxs("div", {
      className: `
        group relative cursor-default
        w-full h-full min-w-0
        min-h-[210px] sm:min-h-[235px]
        flex flex-col
        rounded-[1.35rem]
        overflow-hidden
        border-[3px] ${ge ? "border-[#ffd000] new-item-glow shadow-[0_0_16px_rgba(255,208,0,0.55)]" : "border-[#5b24b8] shadow-[0_4px_0_#411887]"}
        transition-all duration-200 cubic-bezier(0.34, 1.56, 0.64, 1)
        bg-[#6b21a8]
        select-none
        ${F}
      `,
      children: [
        s.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_center,#a855f7_0%,#7928ca_55%,#4c1d95_100%)] group-hover:brightness-110 transition-all duration-300",
        }),
        s.jsx("div", {
          className:
            "absolute inset-[-50%] opacity-15 md:group-hover:opacity-30 md:group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500 pointer-events-none",
          style: {
            background:
              "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.6) 0deg 25deg, transparent 25deg 50deg)",
          },
        }),
        s.jsx("div", {
          className:
            "absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.2s_ease-in-out] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-30",
        }),
        s.jsxs("div", {
          className: "relative z-10 h-full flex flex-col items-center p-3 pt-3",
          children: [
            s.jsxs("div", {
              className:
                "w-full shrink-0 z-20 flex flex-col items-center justify-center min-h-[3rem] mb-1",
              children: [
                s.jsx("h3", {
                  className:
                    "text-white font-['Lilita_One'] text-lg sm:text-xl uppercase leading-tight text-stroke-md text-center tracking-wide w-full drop-shadow-md line-clamp-2 overflow-hidden",
                  style: {
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  },
                  children: b,
                }),
                j &&
                  s.jsx("span", {
                    className:
                      "text-[0.65rem] sm:text-[0.7rem] text-white font-['Lilita_One'] uppercase leading-tight tracking-wider text-center max-w-[95%] block mt-0.5 text-stroke-sm opacity-90 truncate w-full",
                    children: j,
                  }),
              ],
            }),
            s.jsx("div", {
              className:
                "w-full h-[82px] sm:h-[96px] flex items-center justify-center relative z-10 my-1 group-hover:scale-110 transition-transform duration-300 ease-out",
              children: s.jsx("img", {
                src: w,
                alt: b,
                loading: "lazy",
                className: `max-w-full max-h-full object-contain drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)] filter contrast-110 saturate-110 ${O}`,
              }),
            }),
            s.jsxs("div", {
              className: "w-full text-center z-20 mb-1.5 flex items-center justify-center gap-1.5",
              children: [
                s.jsx("span", {
                  className:
                    "text-white/60 font-['Lilita_One'] text-xs sm:text-sm line-through decoration-2",
                  children: E,
                }),
                s.jsxs("span", {
                  className:
                    "text-[#fbbf24] font-['Lilita_One'] text-sm sm:text-base uppercase text-stroke-sm drop-shadow-sm font-bold",
                  children: [q, " FREE"],
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "w-full shrink-0 z-20 mt-auto pt-1",
              children: s.jsx("button", {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  Z(o, U);
                },
                style: {
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  transform: "translateZ(0)",
                },
                className:
                  "w-full bg-gradient-to-b from-[#00b4d8] to-[#0077b6] hover:from-[#48cae4] hover:to-[#0096c7] border-b-[4px] border-[#023e8a] text-white font-['Lilita_One'] text-base sm:text-lg py-1.5 sm:py-2 rounded-xl text-center shadow-md uppercase tracking-wider transition-transform duration-100 text-stroke flex items-center justify-center active:border-b-0 active:translate-y-1 cursor-pointer active:scale-95",
                children: s.jsx("span", { children: "CLAIM" }),
              }),
            }),
          ],
        }),
      ],
    }),
  Sh = ({ onRewardSelect: b }) => {
    const [selectedCat, setSelectedCat] = P.useState("all"),
      [query, setQuery] = P.useState("");

    const handleSelect = (w, o, U) => {
      b({ id: w, amount: o, img: U });
    };

    const catCounts = P.useMemo(() => {
      const counts = { all: REWARDS_DATA.length };
      REWARDS_DATA.forEach((r) => {
        counts[r.category] = (counts[r.category] || 0) + 1;
      });
      return counts;
    }, []);

    const filteredRewards = P.useMemo(() => {
      return REWARDS_DATA.filter((item) => {
        const matchesCat =
          selectedCat === "all" ? !0 : item.category === selectedCat;

        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          item.title.toLowerCase().includes(q) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
          item.category.toLowerCase().includes(q);

        return matchesCat && matchesQuery;
      });
    }, [selectedCat, query]);

    return s.jsx("div", {
      className: "w-full relative px-1 md:px-4 mb-4 md:mb-6 animate-fade-in-up",
      children: s.jsxs("div", {
        className:
          "relative rounded-[2.15rem] p-[3px] bg-gradient-to-b from-cyan-300/30 via-blue-400/20 to-black/40 shadow-[0_18px_0_rgba(0,0,0,0.25)]",
        children: [
          s.jsx("div", {
            className:
              "absolute -inset-1 rounded-[2.2rem] blur-xl bg-white/10 pointer-events-none",
          }),
          s.jsx("div", {
            className:
              "absolute -inset-2 rounded-[2.3rem] blur-2xl bg-[#00b4d8]/10 pointer-events-none",
          }),
          s.jsxs("div", {
            className:
              "relative rounded-[2rem] border-2 border-[#15347a] bg-[#0c1f54] overflow-hidden comic-dots",
            children: [
              s.jsx("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                  background:
                    "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 58%)",
                },
              }),
              s.jsx("div", {
                className:
                  "absolute -top-24 -left-24 w-56 h-56 rounded-full blur-2xl bg-cyan-400/10 pointer-events-none",
              }),
              s.jsx("div", {
                className:
                  "absolute -bottom-24 -right-24 w-56 h-56 rounded-full blur-2xl bg-purple-500/12 pointer-events-none",
              }),
              s.jsxs("div", {
                className: "relative p-3 md:p-5 pb-6 flex flex-col gap-3",
                children: [
                  s.jsx("div", {
                    className: "relative text-center mt-1 mb-2",
                    children: s.jsx("h2", {
                      className:
                        "relative text-white font-['Lilita_One'] text-2xl md:text-3xl text-stroke-lg tracking-wide drop-shadow-lg",
                      children: "CHOOSE YOUR REWARD",
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "w-full flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto py-1 px-1",
                    children: CATEGORIES.map((cat) => {
                      const isActive = selectedCat === cat.id;
                      const count = catCounts[cat.id] || 0;
                      return s.jsxs(
                        "button",
                        {
                          onClick: () => {
                            setSelectedCat(cat.id);
                          },
                          className: `
                            shrink-0 px-3 py-1.5 rounded-full font-['Lilita_One'] text-xs sm:text-sm uppercase tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer
                            ${
                              isActive
                                ? "tab-active bg-gradient-to-b from-[#ffd000] to-[#ff6a00] text-white border-2 border-[#fff37a] shadow-[0_4px_18px_rgba(255,106,0,0.55),inset_0_2px_4px_rgba(255,255,255,0.6)] font-bold scale-105"
                                : "bg-[#081745]/85 text-white/90 border border-blue-400/25 hover:bg-[#0f2a74] hover:text-white"
                            }
                          `,
                          children: [
                            s.jsx("span", { children: cat.icon }),
                            s.jsx("span", { className: isActive ? "text-white drop-shadow-sm" : "", children: cat.label }),
                            s.jsx("span", {
                              className: `text-[10px] px-1.5 py-0.2 rounded-full ${
                                isActive ? "bg-black/30 text-white font-bold" : "bg-white/10 text-white/70"
                              }`,
                              children: count,
                            }),
                          ],
                        },
                        cat.id,
                      );
                    }),
                  }),
                  s.jsxs("div", {
                    className: "w-full flex flex-col sm:flex-row items-center gap-2 px-1",
                    children: [
                      s.jsxs("div", {
                        className:
                          "relative w-full flex-1 bg-[#061234]/90 rounded-xl border border-blue-400/35 flex items-center px-3 py-2 shadow-inner focus-within:border-yellow-400 transition-colors",
                        children: [
                          s.jsx("span", {
                            className: "text-lg mr-2 text-white/60",
                            children: "🔍",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: query,
                            onChange: (e) => setQuery(e.target.value),
                            placeholder: "Search reward (e.g. Cosmo, Gems, Box...)",
                            className:
                              "w-full bg-transparent text-white placeholder-white/40 font-['Lilita_One'] text-sm sm:text-base outline-none tracking-wide uppercase pt-0.5",
                          }),
                          query &&
                            s.jsx("button", {
                              onClick: () => setQuery(""),
                              className:
                                "text-white/60 hover:text-white text-xs bg-white/10 hover:bg-white/20 rounded-full w-5 h-5 flex items-center justify-center font-bold cursor-pointer",
                              children: "✕",
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "shrink-0 bg-blue-900/60 border border-blue-400/20 rounded-lg px-3 py-1.5 flex items-center gap-1 text-white/80 font-['Lilita_One'] text-xs tracking-wide self-end sm:self-auto",
                        children: [
                          s.jsx("span", { className: "text-yellow-400", children: "🎁" }),
                          s.jsxs("span", {
                            children: [filteredRewards.length, " items"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  filteredRewards.length > 0
                    ? s.jsx("div", {
                        className:
                          "grid grid-cols-[repeat(2,minmax(140px,1fr))] md:grid-cols-[repeat(3,minmax(160px,1fr))] gap-3 sm:gap-4 px-0 pb-2 mt-1",
                        children: filteredRewards.map((item) =>
                          s.jsx(
                            Gt,
                            {
                              title: item.title,
                              subtitle: item.subtitle,
                              img: item.img,
                              packId: item.id,
                              amount: item.amount,
                              onClick: (w, o) => handleSelect(w, o, item.img),
                              originalPrice: item.originalPrice,
                              freeCount: item.freeCount,
                              imageClassName: item.imageClassName,
                              featured: item.featured,
                              className: item.className ? item.className + " h-full" : "h-full",
                            },
                            item.id,
                          ),
                        ),
                      })
                    : s.jsxs("div", {
                        className:
                          "w-full py-12 flex flex-col items-center justify-center text-center gap-3 bg-[#0d276b]/50 rounded-2xl border border-dashed border-blue-400/30 my-4",
                        children: [
                          s.jsx("span", {
                            className: "text-4xl animate-bounce",
                            children: "🔍",
                          }),
                          s.jsx("h4", {
                            className:
                              "text-white font-['Lilita_One'] text-xl uppercase text-stroke-sm",
                            children: "NO REWARDS FOUND",
                          }),
                          s.jsx("p", {
                            className: "text-blue-200 text-xs font-['Lilita_One'] max-w-xs",
                            children:
                              "Try typing a different keyword or reset your filter tabs.",
                          }),
                          s.jsx("button", {
                            onClick: () => {
                              setQuery("");
                              setSelectedCat("all");
                            },
                            className:
                              "bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-['Lilita_One'] text-sm px-4 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-md transition-transform active:scale-95 cursor-pointer",
                            children: "RESET FILTER",
                          }),
                        ],
                      }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Nh = ({ onClose: b }) =>
    s.jsx("div", {
      className:
        "fixed inset-0 bg-black/80 flex items-center justify-center z-[60] animate-fade-in",
      onClick: b,
      children: s.jsxs("div", {
        className:
          "relative bg-black p-2 rounded-lg w-11/12 max-w-2xl shadow-lg border border-white/20",
        onClick: (j) => j.stopPropagation(),
        children: [
          s.jsx("button", {
            onClick: b,
            className:
              "absolute -top-3 -right-3 bg-white rounded-full w-8 h-8 text-black font-bold text-xl flex items-center justify-center z-10 hover:scale-110 transition-transform",
            children: "X",
          }),
          s.jsx("video", {
            src: "assets/images/tutorial-video.mp4",
            controls: !0,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            className: "w-full h-auto rounded",
          }),
        ],
      }),
    }),
  Fh = () => {
    const [openIdx, setOpenIdx] = P.useState(null);
    const faqs = [
      {
        q: "HOW LONG DOES IN-GAME DELIVERY TAKE?",
        a: "Rewards are dispatched automatically through the server gateway. Once your account is verified, gifts typically arrive directly in your Brawl Stars mailbox or balance within 2 to 5 minutes.",
      },
      {
        q: "DO I NEED TO PROVIDE MY PASSWORD?",
        a: "Never! We only require your public player tag (#TAG) to identify your profile via the Supercell database. Your account credentials remain 100% safe and secure.",
      },
      {
        q: "HOW MANY REWARDS CAN I CLAIM?",
        a: "To ensure fair distribution for all players, each verified player account is eligible to claim 1 special seasonal gift package per drop event.",
      },
    ];

    return s.jsx("div", {
      className: "w-full max-w-lg md:max-w-4xl px-1 md:px-4 mt-2 mb-4 animate-fade-in-up",
      children: s.jsxs("div", {
        className:
          "w-full bg-[#0d2260]/90 backdrop-blur-md rounded-[1.8rem] border-2 border-yellow-400/40 p-4 sm:p-5 shadow-[0_12px_28px_rgba(0,0,0,0.4)] flex flex-col gap-3",
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-center gap-2 mb-1",
            children: [
              s.jsx("span", { className: "text-xl", children: "💬" }),
              s.jsx("h3", {
                className:
                  "text-lg sm:text-xl text-white font-['Lilita_One'] uppercase tracking-wide text-stroke-md drop-shadow-md text-center",
                children: "FREQUENTLY ASKED QUESTIONS",
              }),
            ],
          }),
          s.jsx("div", {
            className: "w-full flex flex-col gap-2",
            children: faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return s.jsxs(
                "div",
                {
                  className:
                    "w-full bg-[#081745]/80 border border-blue-400/25 rounded-2xl overflow-hidden transition-all duration-200",
                  children: [
                    s.jsxs("button", {
                      onClick: () => setOpenIdx(isOpen ? null : idx),
                      className:
                        "w-full p-3 sm:p-3.5 flex items-center justify-between text-left gap-2 cursor-pointer hover:bg-white/5 transition-colors",
                      children: [
                        s.jsx("span", {
                          className:
                            "text-white font-['Lilita_One'] text-xs sm:text-sm uppercase tracking-wide text-stroke-sm",
                          children: item.q,
                        }),
                        s.jsx("span", {
                          className: `text-yellow-400 font-bold text-xs transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`,
                          children: "▼",
                        }),
                      ],
                    }),
                    isOpen &&
                      s.jsx("div", {
                        className:
                          "px-3.5 pb-3 pt-1 text-blue-100 font-sans text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fade-in",
                        children: item.a,
                      }),
                  ],
                },
                idx,
              );
            }),
          }),
        ],
      }),
    });
  },
  _h = ({
    value: b,
    onChange: j,
    onSubmit: w,
    isLoading: o = !1,
    onBack: U,
    error: B,
    onClearError: Z,
  }) => {
    const [F, O] = P.useState(!1),
      [E, q] = P.useState(!1),
      [H, ie] = P.useState(!0),
      [te, de] = P.useState([]);
    (P.useEffect(() => {
      const fe = setTimeout(() => {
        ie(!1);
      }, 3e3);
      return () => clearTimeout(fe);
    }, []),
      P.useEffect(() => {
        try {
          const fe = localStorage.getItem("brawl_recent_tags");
          fe && de(JSON.parse(fe));
        } catch {}
      }, []),
      P.useEffect(() => {
        if (!o && !B && b && b.length > 2)
          try {
            const fe = localStorage.getItem("brawl_recent_tags"),
              Oe = fe ? JSON.parse(fe) : [];
            if (!Oe.includes(b)) {
              const ze = [b, ...Oe].slice(0, 5);
              (localStorage.setItem("brawl_recent_tags", JSON.stringify(ze)),
                de(ze));
            }
          } catch {}
      }, [o]));

    const _e = (fe) => {
        B && Z && Z();
        let Oe = fe.target.value.toUpperCase();
        ((Oe = Oe.replace(/[^A-Z0-9]/g, "")),
          Oe.length > 0 ? j("#" + Oe) : j(""));
      },
      J = b.startsWith("#") ? b.substring(1) : b;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className: "relative w-full max-w-md mx-auto z-30 px-2",
          children: s.jsx("div", {
            className:
              "relative w-full bg-gradient-to-b from-[#1d3d8a] to-[#0d1d4f] rounded-[2rem] border-[4px] border-[#0a173d] p-1 animate-fade-in-up shadow-[0_12px_45px_rgba(0,0,0,0.65)] overflow-visible",
            children: s.jsxs("div", {
              className:
                "relative w-full bg-[#0f2461] rounded-[1.7rem] border-2 border-[#2b59c7] p-5 sm:p-6 flex flex-col items-center gap-4 overflow-visible",
              children: [
                s.jsx("div", {
                  className: "absolute inset-0 pointer-events-none opacity-15",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 2px, transparent 2px)",
                    backgroundSize: "18px 18px",
                  },
                }),
                s.jsx("div", {
                  className:
                    "absolute top-3 left-3 w-3 h-3 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                s.jsx("div", {
                  className:
                    "absolute top-3 right-3 w-3 h-3 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                s.jsx("div", {
                  className:
                    "absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                s.jsx("div", {
                  className:
                    "absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                U &&
                  s.jsx("button", {
                    onClick: U,
                    className:
                      "absolute top-5 left-5 z-50 w-8 hover:scale-105 active:scale-95 transition-transform cursor-pointer",
                    children: s.jsx("img", {
                      src: Bl.BACK_BUTTON,
                      className: "w-full h-full object-contain",
                      alt: "Back",
                    }),
                  }),
                s.jsxs("div", {
                  className: "step-badge px-3 py-1 rounded-full flex items-center gap-1.5 mt-1",
                  children: [
                    s.jsx("span", {
                      className: "text-yellow-300 text-xs font-['Lilita_One'] tracking-wider",
                      children: "STEP 1 OF 3",
                    }),
                    s.jsx("span", { className: "text-white/40 text-xs", children: "•" }),
                    s.jsx("span", {
                      className: "text-white text-xs font-['Lilita_One'] uppercase tracking-wider text-stroke-sm",
                      children: "IDENTIFY ACCOUNT",
                    }),
                  ],
                }),
                s.jsx("h2", {
                  className:
                    "text-3xl sm:text-4xl text-center text-white font-['Lilita_One'] uppercase tracking-tight transform -rotate-1 drop-shadow-xl text-stroke-lg",
                  children: "ENTER PLAYER TAG",
                }),
                s.jsx("div", {
                  className: `w-full relative transition-all duration-300 ${E ? "scale-[1.02]" : "scale-100"}`,
                  children: s.jsxs("div", {
                    className: `
                                    w-full h-16 
                                    bg-[#06112d] 
                                    rounded-2xl 
                                    border-2 ${B ? "border-red-500 animate-shake" : E ? "border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.4)]" : "border-[#1e4296]"}
                                    shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]
                                    transition-all duration-200 
                                    flex items-center px-4 overflow-visible
                                `,
                    children: [
                      s.jsx("span", {
                        className: `text-2xl sm:text-3xl mr-1 pt-1 font-['Lilita_One'] select-none ${J ? "text-white" : "text-white/40"}`,
                        children: "#",
                      }),
                      s.jsx("input", {
                        type: "text",
                        value: J,
                        onChange: _e,
                        onFocus: () => q(!0),
                        onBlur: () => q(!1),
                        placeholder: "PLAYER TAG",
                        className:
                          "flex-1 bg-transparent border-none outline-none text-2xl md:text-3xl text-white placeholder-white/40 font-['Lilita_One'] pt-1 min-w-0 tracking-widest uppercase",
                        maxLength: 15,
                        disabled: o,
                        style: { caretColor: "#38bdf8" },
                      }),
                      s.jsxs("div", {
                        className: "relative ml-2 flex-shrink-0",
                        children: [
                          H &&
                            s.jsxs("div", {
                              className:
                                "absolute bottom-[calc(100%+12px)] right-[-20px] z-50 cursor-pointer",
                              onClick: () => O(!0),
                              children: [
                                s.jsxs("div", {
                                  className:
                                    "bg-white rounded-xl px-3 py-2 shadow-lg whitespace-nowrap",
                                  children: [
                                    s.jsx("p", {
                                      className:
                                        "text-black text-xs font-['Lilita_One'] text-center",
                                      children: "🔍 Can't find your tag?",
                                    }),
                                    s.jsx("p", {
                                      className:
                                        "text-[#345ffd] text-xs font-bold font-['Lilita_One'] text-center",
                                      children: "Tap to see how to get it!",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute -bottom-[6px] right-[20px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white",
                                }),
                              ],
                            }),
                          s.jsx("button", {
                            className:
                              "hover:scale-110 active:scale-95 transition-transform cursor-pointer",
                            disabled: o,
                            onClick: () => O(!0),
                            title: "Watch Tutorial",
                            children: s.jsx("img", {
                              src: Bl.INFO_ICON,
                              alt: "Info",
                              className:
                                "w-10 h-10 object-contain drop-shadow-md",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                te.length > 0 &&
                  !J &&
                  s.jsxs("div", {
                    className:
                      "w-full flex flex-col items-center gap-1.5 -mt-1 animate-fade-in",
                    children: [
                      s.jsx("span", {
                        className:
                          "text-[10px] text-white/70 font-['Lilita_One'] uppercase tracking-wider text-stroke-sm",
                        children: "RECENT TAGS",
                      }),
                      s.jsx("div", {
                        className: "flex flex-wrap justify-center gap-1.5",
                        children: te.map((fe, Oe) =>
                          s.jsxs(
                            "button",
                            {
                              onClick: () => {
                                j(fe);
                              },
                              className:
                                "bg-[#0b1b42]/85 border border-yellow-400/40 rounded-full px-3.5 py-1 text-yellow-300 text-xs sm:text-sm font-['Lilita_One'] uppercase tracking-wide hover:bg-[#132d6f] hover:border-yellow-400 hover:text-white active:scale-95 cursor-pointer transition-all duration-150 flex items-center gap-1.5 shadow-sm",
                              children: [
                                s.jsx("span", { children: "🏆" }),
                                s.jsx("span", { children: fe }),
                              ],
                            },
                            Oe,
                          ),
                        ),
                      }),
                    ],
                  }),
                B &&
                  s.jsx("div", {
                    className: "w-full text-center -mt-2 mb-1 animate-fade-in",
                    children: s.jsx("span", {
                      className:
                        "text-[#ff6b6b] text-sm font-['Lilita_One'] uppercase tracking-wide drop-shadow-sm",
                      children: B,
                    }),
                  }),
                s.jsxs("button", {
                  className: `
                                relative w-full h-[68px] sm:h-[72px]
                                rounded-2xl
                                bg-gradient-to-b from-[#ffcd05] to-[#f69e00]
                                flex items-center justify-center
                                border-b-[7px] border-[#d98b00]
                                shadow-[0_6px_12px_rgba(217,139,0,0.3)]
                                transition-all duration-150
                                group/btn
                                overflow-hidden
                                mt-0 cursor-pointer
                                ${o ? "opacity-80 cursor-wait" : "hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(217,139,0,0.4)] active:translate-y-[5px] active:border-b-0 active:shadow-none"}
                            `,
                  onClick: o ? void 0 : w,
                  disabled: o,
                  children: [
                    s.jsx("div", {
                      className:
                        "absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12",
                    }),
                    s.jsx("div", {
                      className:
                        "absolute top-1 left-1 right-1 h-[40%] rounded-t-[12px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none",
                    }),
                    s.jsx("span", {
                      className: `
                                    relative z-10
                                    text-white text-3xl sm:text-4xl
                                    font-['Lilita_One']
                                    tracking-wider
                                    drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]
                                    pointer-events-none select-none
                                    mt-1
                                    text-stroke-md
                                `,
                      children: o ? "LOADING..." : "LET'S GO!",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "w-full text-center mt-2 px-2 animate-fade-in",
                  style: { animationDelay: "0.2s" },
                  children: s.jsx("p", {
                    className:
                      "text-white/80 text-[10px] font-['Lilita_One'] uppercase tracking-wider leading-relaxed",
                    children:
                      "We use a real system to find your account. make sure you see your real username next !",
                  }),
                }),
              ],
            }),
          }),
        }),
        F && s.jsx(Nh, { onClose: () => O(!1) }),
      ],
    });
  },
  Eh = ({
    isOpen: b,
    onClose: j,
    onSubmit: w,
    isLoading: o,
    selectedReward: U,
    error: B,
    onClearError: Z,
  }) => {
    const [F, O] = P.useState("");
    return (
      P.useEffect(() => {
        const E = () => {};
        return (
          b && window.addEventListener("keydown", E),
          () => window.removeEventListener("keydown", E)
        );
      }, [b, j]),
      b
        ? s.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: s.jsx("div", {
              className: "relative z-10 w-full max-w-md animate-scale-in",
              style: { transform: "translateZ(0)" },
              children: s.jsx(_h, {
                value: F,
                onChange: O,
                onSubmit: () => w(F),
                isLoading: o,
                onBack: j,
                error: B,
                onClearError: Z,
              }),
            }),
          })
        : null
    );
  },
  ai = ({ title: b, value: j, icon: w }) =>
    s.jsxs("div", {
      className:
        "bg-[#06102e]/85 backdrop-blur-md rounded-xl p-1.5 sm:p-2 border border-white/15 shadow-sm flex flex-col items-center justify-center gap-0.5 min-h-[48px] sm:min-h-[54px]",
      children: [
        s.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            s.jsx("div", {
              className: "w-3.5 h-3.5 flex items-center justify-center shrink-0 opacity-90",
              children: w,
            }),
            s.jsx("span", {
              className:
                "text-sm sm:text-base text-white font-['Lilita_One'] leading-none drop-shadow-sm text-stroke",
              children: typeof j == "number" ? j.toLocaleString() : j,
            }),
          ],
        }),
        s.jsx("span", {
          className:
            "text-[7.5px] sm:text-[8.5px] text-white/70 font-['Lilita_One'] uppercase text-center leading-tight tracking-wide text-stroke-sm",
          children: b,
        }),
      ],
    }),
  zh = ({ brawler: b }) =>
    s.jsxs("div", {
      className:
        "bg-[#06102e]/85 backdrop-blur-md border border-white/15 rounded-xl p-1.5 flex flex-col items-center text-center shadow-sm overflow-hidden",
      children: [
        s.jsx("img", {
          src: b.image,
          alt: b.name,
          className: "w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black/30 object-cover mb-0.5",
        }),
        s.jsx("h4", {
          className:
            "text-[#fca503] text-xs sm:text-sm font-['Lilita_One'] uppercase drop-shadow-sm text-stroke truncate w-full leading-tight",
          children: b.name,
        }),
        s.jsxs("div", {
          className: "flex items-center justify-center gap-1 mt-0.5",
          children: [
            s.jsx("img", {
              src: Bl.ICON_TROPHY,
              className: "w-3 h-3 object-contain drop-shadow-sm",
              alt: "Trophy",
            }),
            s.jsx("span", {
              className:
                "text-white text-xs font-['Lilita_One'] text-stroke-sm leading-none",
              children: typeof b.trophies == "number" ? b.trophies.toLocaleString() : b.trophies,
            }),
          ],
        }),
      ],
    }),
  Th = ({ data: b, selectedReward: j, onBack: w, onConfirm: o }) => {
    const U = [...(b.brawlers || [])].sort((a, c) => (c.trophies || 0) - (a.trophies || 0));
    return s.jsx("div", {
      className: "relative w-full max-w-md mx-auto z-30 px-2 animate-fade-in-up",
      children: s.jsx("div", {
        className:
          "relative w-full bg-gradient-to-b from-[#1d3d8a] to-[#0d1d4f] rounded-[2.2rem] border-[4px] border-[#0a173d] p-1 shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-visible",
        children: s.jsxs("div", {
          className:
            "relative w-full bg-[#0f2461] rounded-[1.8rem] border-2 border-[#2b59c7] p-3.5 sm:p-4.5 flex flex-col gap-2.5 overflow-visible",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 pointer-events-none opacity-15 rounded-[1.8rem]",
              style: {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 2px, transparent 2px)",
                backgroundSize: "18px 18px",
              },
            }),
            s.jsxs("div", {
              className:
                "mx-auto step-badge px-3.5 py-1 rounded-full flex items-center justify-center gap-1.5 w-fit shadow-md relative z-10",
              children: [
                s.jsx("span", {
                  className: "text-yellow-300 text-xs font-['Lilita_One'] tracking-wider",
                  children: "STEP 2 OF 3",
                }),
                s.jsx("span", { className: "text-white/40 text-xs", children: "\u2022" }),
                s.jsx("span", {
                  className:
                    "text-white text-xs font-['Lilita_One'] uppercase tracking-wider text-stroke-sm",
                  children: "CONFIRM ACCOUNT STATS",
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "relative rounded-2xl overflow-hidden border border-white/20 bg-black/30 backdrop-blur-sm p-3 shadow-inner z-10",
              children: s.jsxs("div", {
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      s.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          s.jsx("button", {
                            onClick: w,
                            className:
                              "absolute -top-1.5 -left-1.5 z-50 w-7 hover:scale-105 active:scale-95 transition-transform cursor-pointer",
                            style: {
                              filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.5))",
                            },
                            children: s.jsx("img", {
                              src: Bl.BACK_BUTTON,
                              className: "w-full h-full object-contain",
                              alt: "Back",
                            }),
                          }),
                          s.jsx("div", {
                            className:
                              "relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center",
                            children: s.jsx("div", {
                              className:
                                "w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 overflow-hidden bg-black/30 shadow-md relative z-0",
                              children: s.jsx("img", {
                                src: b.iconUrl || Bl.AVATAR,
                                alt: "Avatar",
                                className: "w-full h-full object-cover",
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex flex-col min-w-0 flex-1",
                        children: [
                          s.jsx("h2", {
                            className:
                              "text-lg sm:text-xl text-white font-['Lilita_One'] uppercase leading-tight drop-shadow-sm text-stroke-md truncate",
                            children: b.name,
                          }),
                          s.jsx("span", {
                            className:
                              "text-yellow-400 font-['Lilita_One'] text-xs sm:text-sm uppercase tracking-wider text-stroke-sm",
                            children: b.tag,
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("div", { className: "w-full h-[1px] bg-white/10 my-2" }),
                  s.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      s.jsxs("div", {
                        className:
                          "flex-1 bg-black/30 rounded-xl border border-white/10 px-2.5 py-1.5 flex items-center gap-2 shadow-sm",
                        children: [
                          s.jsx("img", {
                            src: Bl.ICON_TROPHY,
                            className: "w-5 h-5 drop-shadow-sm shrink-0",
                          }),
                          s.jsxs("div", {
                            className: "leading-none",
                            children: [
                              s.jsx("span", {
                                className:
                                  "text-base sm:text-lg text-white font-['Lilita_One'] text-stroke",
                                children:
                                  typeof b.trophies == "number"
                                    ? b.trophies.toLocaleString()
                                    : b.trophies,
                              }),
                              s.jsx("span", {
                                className:
                                  "block text-[7.5px] text-white/60 font-['Lilita_One'] uppercase mt-[2px] text-stroke-sm",
                                children: "TROPHIES",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex-1 bg-black/30 rounded-xl border border-white/10 px-2.5 py-1.5 flex items-center gap-2 shadow-sm",
                        children: [
                          s.jsx("img", {
                            src: Bl.ICON_LEVEL,
                            className: "w-5 h-5 drop-shadow-sm shrink-0",
                          }),
                          s.jsxs("div", {
                            className: "leading-none",
                            children: [
                              s.jsx("span", {
                                className:
                                  "text-base sm:text-lg text-white font-['Lilita_One'] text-stroke",
                                children:
                                  typeof b.expLevel == "number"
                                    ? b.expLevel.toLocaleString()
                                    : b.expLevel,
                              }),
                              s.jsx("span", {
                                className:
                                  "block text-[7.5px] text-white/60 font-['Lilita_One'] uppercase mt-[2px] text-stroke-sm",
                                children: "LEVEL",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsxs("div", {
              className: "grid grid-cols-2 gap-1.5 sm:gap-2 z-10",
              children: [
                s.jsx(ai, {
                  title: "3V3 VICTORIES",
                  value: b.threeVsThreeVictories,
                  icon: s.jsx("img", {
                    src: "assets/images/victories-3v3-icon.webp",
                    className: "w-3.5 h-3.5",
                  }),
                }),
                s.jsx(ai, {
                  title: "SOLO VICTORIES",
                  value: b.soloVictories,
                  icon: s.jsx("img", {
                    src: "assets/images/victories-solo-icon.webp",
                    className: "w-3.5 h-3.5",
                  }),
                }),
                s.jsx(ai, {
                  title: "DUO VICTORIES",
                  value: b.duoVictories,
                  icon: s.jsx("img", {
                    src: "assets/images/victories-duo-icon.webp",
                    className: "w-3.5 h-3.5",
                  }),
                }),
                s.jsx(ai, {
                  title: "EXPERIENCE",
                  value: b.expPoints,
                  icon: s.jsx("img", {
                    src: "assets/images/experience-icon.png",
                    className: "w-3.5 h-3.5",
                  }),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex flex-col items-center z-10",
              children: [
                s.jsx("h3", {
                  className:
                    "text-xs sm:text-sm text-white font-['Lilita_One'] mb-1.5 uppercase tracking-wide drop-shadow-md text-stroke-sm",
                  children: "TOP BRAWLERS",
                }),
                s.jsxs("div", {
                  className: "w-full grid grid-cols-3 gap-1.5 sm:gap-2",
                  children: [
                    U.slice(0, 3).map((B, Z) =>
                      s.jsx(zh, { brawler: B }, B.name + Z),
                    ),
                    U.length === 0 &&
                      s.jsx("div", {
                        className:
                          "col-span-3 text-white/50 text-center text-xs font-['Lilita_One'] py-1",
                        children: "No brawlers found",
                      }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "mt-1 z-10",
              children: s.jsxs("button", {
                onClick: () => {
                  o();
                },
                className:
                  "relative w-full h-[54px] sm:h-[58px] rounded-2xl bg-gradient-to-b from-[#ffcd05] to-[#f69e00] flex items-center justify-center border-b-[6px] border-[#d98b00] shadow-[0_6px_14px_rgba(217,139,0,0.35)] transition-all duration-150 group/btn overflow-hidden hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(217,139,0,0.4)] active:translate-y-[4px] active:border-b-0 active:shadow-none cursor-pointer",
                children: [
                  s.jsx("div", {
                    className:
                      "absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute top-1 left-1 right-1 h-[40%] rounded-t-[12px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none",
                  }),
                  s.jsx("span", {
                    className:
                      "relative z-10 text-white text-xl sm:text-2xl font-['Lilita_One'] tracking-wider drop-shadow-[0_2px_0_rgba(0,0,0,0.2)] pointer-events-none select-none text-stroke-md uppercase",
                    children: "CONFIRM & CONTINUE",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Ah = ({
    isOpen: b,
    onClose: j,
    onBack: w,
    onConfirm: o,
    data: U,
    selectedReward: B,
  }) => (
    P.useEffect(() => {
      const Z = () => {};
      return (
        b
          ? (window.addEventListener("keydown", Z),
            (document.body.style.overflow = "hidden"))
          : (document.body.style.overflow = ""),
        () => {
          (window.removeEventListener("keydown", Z),
            (document.body.style.overflow = ""));
        }
      );
    }, [b, j]),
    b
      ? s.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-2 sm:p-4",
          children: s.jsx("div", {
            className: "relative z-10 w-full max-w-md my-auto animate-scale-in",
            style: { transform: "translateZ(0)" },
            children: s.jsx(Th, {
              data: U,
              selectedReward: B,
              onBack: w,
              onConfirm: o,
            }),
          }),
        })
      : null
  ),
  jh = ({
    playerName: b,
    rewardImageUrl: j,
    progress: w,
    line: o,
    isFinished: U,
    onClose: B,
    onContinue: Z,
  }) =>
    s.jsxs("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center px-4",
      children: [
        s.jsx("style", {
          children: `
          @keyframes spin-slow {
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          @keyframes float-item {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes progress-stripes {
            from { background-position: 1rem 0; }
            to { background-position: 0 0; }
          }
        `,
        }),
        s.jsx("div", {
          className:
            "relative w-full max-w-sm bg-[#2e3192] rounded-[2rem] border-[4px] border-[#1e1e64] shadow-[0_0_40px_rgba(0,0,0,0.6)] p-1 overflow-hidden animate-scale-in transform transition-all",
          style: { transform: "translateZ(0)" },
          children: s.jsxs("div", {
            className:
              "relative bg-gradient-to-b from-[#1a1c6b] to-[#0f1048] rounded-[1.7rem] p-6 flex flex-col items-center text-center overflow-hidden",
            children: [
              s.jsx("div", {
                className: "absolute inset-0 opacity-20 pointer-events-none",
                style: {
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 2px, transparent 2px)",
                  backgroundSize: "20px 20px",
                },
              }),
              s.jsxs("div", {
                className: "relative z-10 mb-6 mt-2",
                children: [
                  s.jsx("h2", {
                    className:
                      "text-3xl text-white font-['Lilita_One'] uppercase tracking-wider text-stroke-lg drop-shadow-xl",
                    children: U ? "ALMOST THERE!" : "GENERATING...",
                  }),
                  s.jsxs("p", {
                    className:
                      "text-blue-300 text-sm font-['Lilita_One'] uppercase tracking-widest text-stroke-sm mt-1",
                    children: ["For ", b],
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "relative w-48 h-48 mb-6 z-10 flex items-center justify-center",
                children: [
                  s.jsx("div", {
                    className:
                      "absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-[pulse-glow_2s_infinite]",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.3)_180deg,transparent_360deg)] animate-[spin-slow_4s_linear_infinite] rounded-full opacity-50",
                  }),
                  s.jsx("img", {
                    src: j,
                    alt: "Reward",
                    className: `
                            relative w-full h-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] 
                            transition-all duration-700
                            ${U ? "scale-110 rotate-3 saturate-125" : "scale-100 animate-[float-item_3s_ease-in-out_infinite]"}
                        `,
                  }),
                ],
              }),
              s.jsx("div", {
                className:
                  "w-full relative z-10 min-h-[80px] flex flex-col justify-end",
                children: U
                  ? s.jsx("div", {
                      className:
                        "w-full h-[64px] flex items-center justify-center animate-fade-in",
                      children: s.jsx("span", {
                        className:
                          "text-2xl text-white font-['Lilita_One'] uppercase tracking-wide text-stroke-md drop-shadow-md animate-pulse",
                        children: "Finalizing...",
                      }),
                    })
                  : s.jsxs("div", {
                      className: "w-full animate-fade-in",
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex justify-between items-end mb-1.5 px-1",
                          children: [
                            s.jsx("span", {
                              className:
                                "text-blue-200 text-xs font-['Lilita_One'] uppercase tracking-wide text-stroke-sm truncate mr-2",
                              children: o,
                            }),
                            s.jsxs("span", {
                              className:
                                "text-white text-sm font-['Lilita_One'] text-stroke-sm",
                              children: [w, "%"],
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className:
                            "w-full h-5 bg-black/50 rounded-full p-[3px] border border-white/10 shadow-inner",
                          children: s.jsx("div", {
                            className:
                              "w-full h-full rounded-full overflow-hidden relative bg-gray-900",
                            children: s.jsx("div", {
                              className:
                                "h-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] relative shadow-[0_0_10px_#fbbf24] transition-all duration-300 ease-out",
                              style: { width: `${w}%` },
                              children: s.jsx("div", {
                                className:
                                  "absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%,transparent)] bg-[length:12px_12px] animate-[progress-stripes_0.8s_linear_infinite]",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
              }),
            ],
          }),
        }),
      ],
    });
var Of = {};
(function b(j, w, o, U) {
  var B = !!(
      j.Worker &&
      j.Blob &&
      j.Promise &&
      j.OffscreenCanvas &&
      j.OffscreenCanvasRenderingContext2D &&
      j.HTMLCanvasElement &&
      j.HTMLCanvasElement.prototype.transferControlToOffscreen &&
      j.URL &&
      j.URL.createObjectURL
    ),
    Z = typeof Path2D == "function" && typeof DOMMatrix == "function",
    F = (function () {
      if (!j.OffscreenCanvas) return !1;
      try {
        var g = new OffscreenCanvas(1, 1),
          c = g.getContext("2d");
        c.fillRect(0, 0, 1, 1);
        var m = g.transferToImageBitmap();
        c.createPattern(m, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })();
  function O() {}
  function E(g) {
    var c = w.exports.Promise,
      m = c !== void 0 ? c : j.Promise;
    return typeof m == "function" ? new m(g) : (g(O, O), null);
  }
  var q = (function (g, c) {
      return {
        transform: function (m) {
          if (g) return m;
          if (c.has(m)) return c.get(m);
          var _ = new OffscreenCanvas(m.width, m.height),
            A = _.getContext("2d");
          return (A.drawImage(m, 0, 0), c.set(m, _), _);
        },
        clear: function () {
          c.clear();
        },
      };
    })(F, new Map()),
    H = (function () {
      var g = Math.floor(16.666666666666668),
        c,
        m,
        _ = {},
        A = 0;
      return (
        typeof requestAnimationFrame == "function" &&
        typeof cancelAnimationFrame == "function"
          ? ((c = function (C) {
              var R = Math.random();
              return (
                (_[R] = requestAnimationFrame(function D(Q) {
                  A === Q || A + g - 1 < Q
                    ? ((A = Q), delete _[R], C())
                    : (_[R] = requestAnimationFrame(D));
                })),
                R
              );
            }),
            (m = function (C) {
              _[C] && cancelAnimationFrame(_[C]);
            }))
          : ((c = function (C) {
              return setTimeout(C, g);
            }),
            (m = function (C) {
              return clearTimeout(C);
            })),
        { frame: c, cancel: m }
      );
    })(),
    ie = (function () {
      var g,
        c,
        m = {};
      function _(A) {
        function C(R, D) {
          A.postMessage({ options: R || {}, callback: D });
        }
        ((A.init = function (D) {
          var Q = D.transferControlToOffscreen();
          A.postMessage({ canvas: Q }, [Q]);
        }),
          (A.fire = function (D, Q, K) {
            if (c) return (C(D, null), c);
            var pe = Math.random().toString(36).slice(2);
            return (
              (c = E(function (ge) {
                function Ee(Be) {
                  Be.data.callback === pe &&
                    (delete m[pe],
                    A.removeEventListener("message", Ee),
                    (c = null),
                    q.clear(),
                    K(),
                    ge());
                }
                (A.addEventListener("message", Ee),
                  C(D, pe),
                  (m[pe] = Ee.bind(null, { data: { callback: pe } })));
              })),
              c
            );
          }),
          (A.reset = function () {
            A.postMessage({ reset: !0 });
            for (var D in m) (m[D](), delete m[D]);
          }));
      }
      return function () {
        if (g) return g;
        if (!o && B) {
          var A = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + b.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI && CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join(`
`);
          try {
            g = new Worker(URL.createObjectURL(new Blob([A])));
          } catch (C) {
            return (
              typeof console < "u" &&
                typeof console.warn == "function" &&
                console.warn("ðŸŽŠ Could not load worker", C),
              null
            );
          }
          _(g);
        }
        return g;
      };
    })(),
    te = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function de(g, c) {
    return c ? c(g) : g;
  }
  function _e(g) {
    return g != null;
  }
  function J(g, c, m) {
    return de(g && _e(g[c]) ? g[c] : te[c], m);
  }
  function fe(g) {
    return g < 0 ? 0 : Math.floor(g);
  }
  function Oe(g, c) {
    return Math.floor(Math.random() * (c - g)) + g;
  }
  function ze(g) {
    return parseInt(g, 16);
  }
  function et(g) {
    return g.map(Xe);
  }
  function Xe(g) {
    var c = String(g).replace(/[^0-9a-f]/gi, "");
    return (
      c.length < 6 && (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]),
      {
        r: ze(c.substring(0, 2)),
        g: ze(c.substring(2, 4)),
        b: ze(c.substring(4, 6)),
      }
    );
  }
  function Qe(g) {
    var c = J(g, "origin", Object);
    return ((c.x = J(c, "x", Number)), (c.y = J(c, "y", Number)), c);
  }
  function ee(g) {
    ((g.width = document.documentElement.clientWidth),
      (g.height = document.documentElement.clientHeight));
  }
  function Ve(g) {
    var c = g.getBoundingClientRect();
    ((g.width = c.width), (g.height = c.height));
  }
  function ct(g) {
    var c = document.createElement("canvas");
    return (
      (c.style.position = "fixed"),
      (c.style.top = "0px"),
      (c.style.left = "0px"),
      (c.style.pointerEvents = "none"),
      (c.style.zIndex = g),
      c
    );
  }
  function Xt(g, c, m, _, A, C, R, D, Q) {
    (g.save(),
      g.translate(c, m),
      g.rotate(C),
      g.scale(_, A),
      g.arc(0, 0, 1, R, D, Q),
      g.restore());
  }
  function nt(g) {
    var c = g.angle * (Math.PI / 180),
      m = g.spread * (Math.PI / 180);
    return {
      x: g.x,
      y: g.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: g.startVelocity * 0.5 + Math.random() * g.startVelocity,
      angle2D: -c + (0.5 * m - Math.random() * m),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: g.color,
      shape: g.shape,
      tick: 0,
      totalTicks: g.ticks,
      decay: g.decay,
      drift: g.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: g.gravity * 3,
      ovalScalar: 0.6,
      scalar: g.scalar,
      flat: g.flat,
    };
  }
  function me(g, c) {
    ((c.x += Math.cos(c.angle2D) * c.velocity + c.drift),
      (c.y += Math.sin(c.angle2D) * c.velocity + c.gravity),
      (c.velocity *= c.decay),
      c.flat
        ? ((c.wobble = 0),
          (c.wobbleX = c.x + 10 * c.scalar),
          (c.wobbleY = c.y + 10 * c.scalar),
          (c.tiltSin = 0),
          (c.tiltCos = 0),
          (c.random = 1))
        : ((c.wobble += c.wobbleSpeed),
          (c.wobbleX = c.x + 10 * c.scalar * Math.cos(c.wobble)),
          (c.wobbleY = c.y + 10 * c.scalar * Math.sin(c.wobble)),
          (c.tiltAngle += 0.1),
          (c.tiltSin = Math.sin(c.tiltAngle)),
          (c.tiltCos = Math.cos(c.tiltAngle)),
          (c.random = Math.random() + 2)));
    var m = c.tick++ / c.totalTicks,
      _ = c.x + c.random * c.tiltCos,
      A = c.y + c.random * c.tiltSin,
      C = c.wobbleX + c.random * c.tiltCos,
      R = c.wobbleY + c.random * c.tiltSin;
    if (
      ((g.fillStyle =
        "rgba(" +
        c.color.r +
        ", " +
        c.color.g +
        ", " +
        c.color.b +
        ", " +
        (1 - m) +
        ")"),
      g.beginPath(),
      Z &&
        c.shape.type === "path" &&
        typeof c.shape.path == "string" &&
        Array.isArray(c.shape.matrix))
    )
      g.fill(
        M(
          c.shape.path,
          c.shape.matrix,
          c.x,
          c.y,
          Math.abs(C - _) * 0.1,
          Math.abs(R - A) * 0.1,
          (Math.PI / 10) * c.wobble,
        ),
      );
    else if (c.shape.type === "bitmap") {
      var D = (Math.PI / 10) * c.wobble,
        Q = Math.abs(C - _) * 0.1,
        K = Math.abs(R - A) * 0.1,
        pe = c.shape.bitmap.width * c.scalar,
        ge = c.shape.bitmap.height * c.scalar,
        Ee = new DOMMatrix([
          Math.cos(D) * Q,
          Math.sin(D) * Q,
          -Math.sin(D) * K,
          Math.cos(D) * K,
          c.x,
          c.y,
        ]);
      Ee.multiplySelf(new DOMMatrix(c.shape.matrix));
      var Be = g.createPattern(q.transform(c.shape.bitmap), "no-repeat");
      (Be.setTransform(Ee),
        (g.globalAlpha = 1 - m),
        (g.fillStyle = Be),
        g.fillRect(c.x - pe / 2, c.y - ge / 2, pe, ge),
        (g.globalAlpha = 1));
    } else if (c.shape === "circle")
      g.ellipse
        ? g.ellipse(
            c.x,
            c.y,
            Math.abs(C - _) * c.ovalScalar,
            Math.abs(R - A) * c.ovalScalar,
            (Math.PI / 10) * c.wobble,
            0,
            2 * Math.PI,
          )
        : Xt(
            g,
            c.x,
            c.y,
            Math.abs(C - _) * c.ovalScalar,
            Math.abs(R - A) * c.ovalScalar,
            (Math.PI / 10) * c.wobble,
            0,
            2 * Math.PI,
          );
    else if (c.shape === "star")
      for (
        var $ = (Math.PI / 2) * 3,
          Ke = 4 * c.scalar,
          ut = 8 * c.scalar,
          vt = c.x,
          Tt = c.y,
          Ht = 5,
          ft = Math.PI / Ht;
        Ht--;
      )
        ((vt = c.x + Math.cos($) * ut),
          (Tt = c.y + Math.sin($) * ut),
          g.lineTo(vt, Tt),
          ($ += ft),
          (vt = c.x + Math.cos($) * Ke),
          (Tt = c.y + Math.sin($) * Ke),
          g.lineTo(vt, Tt),
          ($ += ft));
    else
      (g.moveTo(Math.floor(c.x), Math.floor(c.y)),
        g.lineTo(Math.floor(c.wobbleX), Math.floor(A)),
        g.lineTo(Math.floor(C), Math.floor(R)),
        g.lineTo(Math.floor(_), Math.floor(c.wobbleY)));
    return (g.closePath(), g.fill(), c.tick < c.totalTicks);
  }
  function tt(g, c, m, _, A) {
    var C = c.slice(),
      R = g.getContext("2d"),
      D,
      Q,
      K = E(function (pe) {
        function ge() {
          ((D = Q = null),
            R.clearRect(0, 0, _.width, _.height),
            q.clear(),
            A(),
            pe());
        }
        function Ee() {
          (o &&
            !(_.width === U.width && _.height === U.height) &&
            ((_.width = g.width = U.width), (_.height = g.height = U.height)),
            !_.width &&
              !_.height &&
              (m(g), (_.width = g.width), (_.height = g.height)),
            R.clearRect(0, 0, _.width, _.height),
            (C = C.filter(function (Be) {
              return me(R, Be);
            })),
            C.length ? (D = H.frame(Ee)) : ge());
        }
        ((D = H.frame(Ee)), (Q = ge));
      });
    return {
      addFettis: function (pe) {
        return ((C = C.concat(pe)), K);
      },
      canvas: g,
      promise: K,
      reset: function () {
        (D && H.cancel(D), Q && Q());
      },
    };
  }
  function we(g, c) {
    var m = !g,
      _ = !!J(c || {}, "resize"),
      A = !1,
      C = J(c, "disableForReducedMotion", Boolean),
      R = B && !!J(c || {}, "useWorker"),
      D = R ? ie() : null,
      Q = m ? ee : Ve,
      K = g && D ? !!g.__confetti_initialized : !1,
      pe =
        typeof matchMedia == "function" &&
        matchMedia("(prefers-reduced-motion)").matches,
      ge;
    function Ee($, Ke, ut) {
      for (
        var vt = J($, "particleCount", fe),
          Tt = J($, "angle", Number),
          Ht = J($, "spread", Number),
          ft = J($, "startVelocity", Number),
          Ga = J($, "decay", Number),
          ni = J($, "gravity", Number),
          ui = J($, "drift", Number),
          lt = J($, "colors", et),
          ii = J($, "ticks", Number),
          Xa = J($, "shapes"),
          Yn = J($, "scalar"),
          la = !!J($, "flat"),
          qn = Qe($),
          Qa = vt,
          Va = [],
          ci = g.width * qn.x,
          Hl = g.height * qn.y;
        Qa--;
      )
        Va.push(
          nt({
            x: ci,
            y: Hl,
            angle: Tt,
            spread: Ht,
            startVelocity: ft,
            color: lt[Qa % lt.length],
            shape: Xa[Oe(0, Xa.length)],
            ticks: ii,
            decay: Ga,
            gravity: ni,
            drift: ui,
            scalar: Yn,
            flat: la,
          }),
        );
      return ge ? ge.addFettis(Va) : ((ge = tt(g, Va, Q, Ke, ut)), ge.promise);
    }
    function Be($) {
      var Ke = C || J($, "disableForReducedMotion", Boolean),
        ut = J($, "zIndex", Number);
      if (Ke && pe)
        return E(function (ft) {
          ft();
        });
      (m && ge
        ? (g = ge.canvas)
        : m && !g && ((g = ct(ut)), document.body.appendChild(g)),
        _ && !K && Q(g));
      var vt = { width: g.width, height: g.height };
      (D && !K && D.init(g), (K = !0), D && (g.__confetti_initialized = !0));
      function Tt() {
        if (D) {
          var ft = {
            getBoundingClientRect: function () {
              if (!m) return g.getBoundingClientRect();
            },
          };
          (Q(ft),
            D.postMessage({ resize: { width: ft.width, height: ft.height } }));
          return;
        }
        vt.width = vt.height = null;
      }
      function Ht() {
        ((ge = null),
          _ && ((A = !1), j.removeEventListener("resize", Tt)),
          m &&
            g &&
            (document.body.contains(g) && document.body.removeChild(g),
            (g = null),
            (K = !1)));
      }
      return (
        _ && !A && ((A = !0), j.addEventListener("resize", Tt, !1)),
        D ? D.fire($, vt, Ht) : Ee($, vt, Ht)
      );
    }
    return (
      (Be.reset = function () {
        (D && D.reset(), ge && ge.reset());
      }),
      Be
    );
  }
  var Ze;
  function S() {
    return (Ze || (Ze = we(null, { useWorker: !0, resize: !0 })), Ze);
  }
  function M(g, c, m, _, A, C, R) {
    var D = new Path2D(g),
      Q = new Path2D();
    Q.addPath(D, new DOMMatrix(c));
    var K = new Path2D();
    return (
      K.addPath(
        Q,
        new DOMMatrix([
          Math.cos(R) * A,
          Math.sin(R) * A,
          -Math.sin(R) * C,
          Math.cos(R) * C,
          m,
          _,
        ]),
      ),
      K
    );
  }
  function X(g) {
    if (!Z) throw new Error("path confetti are not supported in this browser");
    var c, m;
    typeof g == "string" ? (c = g) : ((c = g.path), (m = g.matrix));
    var _ = new Path2D(c),
      A = document.createElement("canvas"),
      C = A.getContext("2d");
    if (!m) {
      for (
        var R = 1e3, D = R, Q = R, K = 0, pe = 0, ge, Ee, Be = 0;
        Be < R;
        Be += 2
      )
        for (var $ = 0; $ < R; $ += 2)
          C.isPointInPath(_, Be, $, "nonzero") &&
            ((D = Math.min(D, Be)),
            (Q = Math.min(Q, $)),
            (K = Math.max(K, Be)),
            (pe = Math.max(pe, $)));
      ((ge = K - D), (Ee = pe - Q));
      var Ke = 10,
        ut = Math.min(Ke / ge, Ke / Ee);
      m = [
        ut,
        0,
        0,
        ut,
        -Math.round(ge / 2 + D) * ut,
        -Math.round(Ee / 2 + Q) * ut,
      ];
    }
    return { type: "path", path: c, matrix: m };
  }
  function se(g) {
    var c,
      m = 1,
      _ = "#000000",
      A =
        '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof g == "string"
      ? (c = g)
      : ((c = g.text),
        (m = "scalar" in g ? g.scalar : m),
        (A = "fontFamily" in g ? g.fontFamily : A),
        (_ = "color" in g ? g.color : _));
    var C = 10 * m,
      R = "" + C + "px " + A,
      D = new OffscreenCanvas(C, C),
      Q = D.getContext("2d");
    Q.font = R;
    var K = Q.measureText(c),
      pe = Math.ceil(K.actualBoundingBoxRight + K.actualBoundingBoxLeft),
      ge = Math.ceil(K.actualBoundingBoxAscent + K.actualBoundingBoxDescent),
      Ee = 2,
      Be = K.actualBoundingBoxLeft + Ee,
      $ = K.actualBoundingBoxAscent + Ee;
    ((pe += Ee + Ee),
      (ge += Ee + Ee),
      (D = new OffscreenCanvas(pe, ge)),
      (Q = D.getContext("2d")),
      (Q.font = R),
      (Q.fillStyle = _),
      Q.fillText(c, Be, $));
    var Ke = 1 / m;
    return {
      type: "bitmap",
      bitmap: D.transferToImageBitmap(),
      matrix: [Ke, 0, 0, Ke, (-pe * Ke) / 2, (-ge * Ke) / 2],
    };
  }
  ((w.exports = function () {
    return S().apply(this, arguments);
  }),
    (w.exports.reset = function () {
      S().reset();
    }),
    (w.exports.create = we),
    (w.exports.shapeFromPath = X),
    (w.exports.shapeFromText = se));
})(
  (function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
  })(),
  Of,
  !1,
);
const Oh = Of.exports;
Of.exports.create;
const CPA_USER_ID = "514549",
    CPA_API_KEY = "a109981a1dd017f42e1c51d68c1e8abc",
    CPA_SUB1 = "brawlgifts";

const wh = ({
    isOpen: b,
    onClose: j,
    playerName: w,
    selectedReward: o,
    onContinue: U,
  }) => {
    const [B, Z] = P.useState(!1),
      [F, O] = P.useState(!1),
      [offers, setOffers] = P.useState([]),
      [offersLoading, setOffersLoading] = P.useState(!0),
      [offersError, setOffersError] = P.useState(null),
      [leadStatus, setLeadStatus] = P.useState("Waiting for task completion..."),
      [isCompleted, setIsCompleted] = P.useState(!1),
      [timerSec, setTimerSec] = P.useState(299);

    const checkIntervalRef = P.useRef(null);
    const timerIntervalRef = P.useRef(null);

    P.useEffect(() => {
      if (!b) {
        Z(!1);
        O(!1);
        setIsCompleted(!1);
        setLeadStatus("Waiting for task completion...");
        if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        return;
      }

      setTimerSec(299);
      timerIntervalRef.current = setInterval(() => {
        setTimerSec((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      setOffersLoading(!0);
      setOffersError(null);
      const feedUrl = `https://dtvpp42hfuyb2.cloudfront.net/public/offers/feed.php?user_id=${CPA_USER_ID}&api_key=${CPA_API_KEY}&s1=${CPA_SUB1}&s2=&callback=?`;

      const handleOffers = (data) => {
        setOffersLoading(!1);
        if (Array.isArray(data) && data.length > 0) {
          setOffers(data.slice(0, 2));
        } else {
          setOffers([]);
        }
      };

      if (window.$ && window.$.getJSON) {
        window.$.getJSON(feedUrl, handleOffers).fail(() => {
          setOffersLoading(!1);
          setOffersError("Could not load offers. Please try again.");
        });
      } else {
        const cb = "cpa_feed_" + Math.floor(Math.random() * 1000000);
        const script = document.createElement("script");
        window[cb] = (data) => {
          delete window[cb];
          script.remove();
          handleOffers(data);
        };
        script.onerror = () => {
          delete window[cb];
          script.remove();
          setOffersLoading(!1);
          setOffersError("Could not load offers. Please try again.");
        };
        script.src = feedUrl.replace("callback=?", "callback=" + cb);
        document.body.appendChild(script);
      }

      return () => {
        if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      };
    }, [b]);

    P.useEffect(() => {
      const q = () => {};
      if (b) {
        window.addEventListener("keydown", q);
        document.body.style.overflow = "hidden";
        const H = 200,
          ie = {
            origin: { y: 0.7 },
            zIndex: 100,
            shapes: ["square"],
            colors: [
              "#26ccff",
              "#a25afd",
              "#ff5e7e",
              "#88ff5a",
              "#fcff42",
              "#ffa62d",
              "#ff36ff",
            ],
          },
          te = (de, _e) => {
            Oh({ ...ie, ..._e, particleCount: Math.floor(H * de) });
          };
        te(0.25, { spread: 26, startVelocity: 55 });
        te(0.2, { spread: 60 });
        te(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        te(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        });
        te(0.1, { spread: 120, startVelocity: 45 });
      } else document.body.style.overflow = "";
      return () => {
        window.removeEventListener("keydown", q);
        document.body.style.overflow = "";
      };
    }, [b, j]);

    if (!b || !o) return null;

    const handleOfferClick = (offerUrl) => {
      window.open(offerUrl, "_blank", "noopener,noreferrer");
      setLeadStatus("Task opened! Checking for completion...");

      if (checkIntervalRef.current) return;

      const checkUrl = "https://dtvpp42hfuyb2.cloudfront.net/public/external/check2.php?testing=0&callback=?";
      const doCheck = (leads) => {
        if (leads && leads.length > 0) {
          setIsCompleted(!0);
          setLeadStatus("Verification Successful!");
          if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
          try {
            Oh({
              origin: { y: 0.5 },
              zIndex: 100,
              particleCount: 150,
              spread: 90,
            });
          } catch (e) {}
        }
      };

      checkIntervalRef.current = setInterval(() => {
        if (window.$ && window.$.getJSON) {
          window.$.getJSON(checkUrl, doCheck);
        } else {
          const cb = "cpa_chk_" + Math.floor(Math.random() * 1000000);
          const script = document.createElement("script");
          window[cb] = (leads) => {
            delete window[cb];
            script.remove();
            doCheck(leads);
          };
          script.onerror = () => {
            delete window[cb];
            script.remove();
          };
          script.src = checkUrl.replace("callback=?", "callback=" + cb);
          document.body.appendChild(script);
        }
      }, 15000);
    };

    const E = () => {
      O(!0);
      setTimeout(() => {
        O(!1);
        Z(!0);
      }, 2e3);
    };

    const minutes = Math.floor(timerSec / 60);
    const seconds = String(timerSec % 60).padStart(2, "0");

    return s.jsxs("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4",
      children: [
        s.jsx("div", {
        className: `relative z-10 w-full max-w-md animate-scale-in ${B ? "animate-shake" : ""}`,
        style: { transform: "translateZ(0)" },
        children: s.jsx("div", {
            className:
              "relative bg-gradient-to-b from-[#18367a] to-[#0c1c49] rounded-[2rem] border-[4px] border-[#0a173d] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.8)]",
            children: s.jsxs("div", {
              className:
                "relative bg-[#0c1f54] rounded-[1.7rem] border-2 border-[#1e4296] p-5 sm:p-6 flex flex-col items-center text-center overflow-visible min-h-[350px] justify-center",
              children: [
                s.jsx("div", {
                  className:
                    "absolute inset-0 opacity-10 pointer-events-none rounded-[1.7rem]",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 2px, transparent 2px)",
                    backgroundSize: "16px 16px",
                  },
                }),
                s.jsx("div", {
                  className:
                    "absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                s.jsx("div", {
                  className:
                    "absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                s.jsx("div", {
                  className:
                    "absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                s.jsx("div", {
                  className:
                    "absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-[#1c3d94] border border-[#3b72f2] z-10",
                }),
                F
                  ? s.jsxs("div", {
                      className:
                        "relative flex flex-col items-center justify-center w-full animate-fade-in py-6",
                      children: [
                        s.jsxs("div", {
                          className: "relative w-20 h-20 mb-6",
                          children: [
                            s.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full border-[6px] border-white/20 border-t-[#ffd000] border-r-[#ffd000] animate-spin",
                              style: { animationDuration: "1s" },
                            }),
                            s.jsx("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center animate-pulse",
                              children: s.jsx("span", {
                                className: "text-3xl",
                                children: "⭐",
                              }),
                            }),
                          ],
                        }),
                        [
                          { color: "#ffd000", top: "-20px", left: "0" },
                          { color: "#38bdf8", top: "10px", right: "-30px" },
                          { color: "#f87171", bottom: "-10px", right: "10px" },
                          { color: "#4ade80", bottom: "20px", left: "-20px" },
                          { color: "#c084fc", top: "40px", left: "-30px" },
                          { color: "#ffd000", top: "-10px", right: "-10px" },
                        ].map((q, H) =>
                          s.jsx(
                            "div",
                            {
                              className: "absolute w-2 h-2 rounded-full",
                              style: {
                                backgroundColor: q.color,
                                top: q.top,
                                left: q.left,
                                right: q.right,
                                bottom: q.bottom,
                                animation:
                                  "floatParticle 1.5s ease-in-out infinite",
                                animationDelay: `${H * 0.25}s`,
                              },
                            },
                            H,
                          ),
                        ),
                        s.jsx("h3", {
                          className:
                            "text-white text-lg font-['Lilita_One'] uppercase tracking-wider text-stroke-md animate-pulse mb-1",
                          children: "VERIFYING ACCOUNT...",
                        }),
                        s.jsxs("p", {
                          className:
                            "text-[#ffd000] text-sm font-['Lilita_One'] uppercase text-stroke-sm",
                          children: ["Please wait, ", w],
                        }),
                      ],
                    })
                  : !B
                    ? s.jsxs("div", {
                        className:
                          "w-full flex flex-col items-center animate-fade-in relative z-10",
                        children: [
                          s.jsx("h2", {
                            className:
                              "relative z-10 text-3xl text-white font-['Lilita_One'] uppercase tracking-wide text-stroke-lg drop-shadow-xl mb-2 leading-none",
                            children: "REWARD UNLOCKED!",
                          }),
                          s.jsxs("p", {
                            className:
                              "relative z-10 text-base sm:text-lg font-['Lilita_One'] uppercase tracking-wide text-stroke-sm mb-4",
                            children: [
                              s.jsx("span", {
                                className: "text-[#ffd000]",
                                children: "For ",
                              }),
                              s.jsx("span", {
                                className: "text-white",
                                children: w,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className:
                              "relative z-10 w-32 h-32 mb-4 animate-float-slow flex items-center justify-center",
                            children: [
                              s.jsx("div", {
                                className:
                                  "absolute inset-0 bg-[#ffd000]/25 blur-2xl rounded-full transform scale-75 pointer-events-none",
                              }),
                              s.jsx("img", {
                                src: o.img,
                                alt: "Reward",
                                className:
                                  "w-full h-full object-contain drop-shadow-2xl filter contrast-110",
                              }),
                            ],
                          }),
                          s.jsx("p", {
                            className:
                              "relative z-10 text-white text-xs sm:text-[13px] font-['Lilita_One'] uppercase tracking-wide text-stroke-sm mb-6 leading-tight max-w-[90%]",
                            children:
                              "You're just one step away from claiming your reward! Tap Continue to unlock your reward.",
                          }),
                          s.jsx("button", {
                            onClick: E,
                            className:
                              "relative z-10 w-full h-[58px] sm:h-[62px] bg-gradient-to-b from-[#ffd000] via-[#ffb700] to-[#ff8c00] rounded-2xl border-b-[6px] border-[#c45500] shadow-[0_8px_20px_rgba(255,140,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] flex items-center justify-center overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,140,0,0.5)] active:translate-y-1 active:border-b-0 active:shadow-none transition-all duration-150 cursor-pointer",
                            children: s.jsx("span", {
                              className:
                                "relative z-10 text-2xl sm:text-3xl text-white font-['Lilita_One'] uppercase tracking-widest text-stroke-md drop-shadow-md",
                              children: "CONTINUE",
                            }),
                          }),
                        ],
                      })
                    : s.jsxs("div", {
                        className:
                          "w-full flex flex-col items-center animate-fade-in relative z-10",
                        children: [
                          s.jsxs("div", {
                            className:
                              "relative z-20 bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#991b1b] border border-red-400/40 rounded-2xl px-4 py-2.5 mb-3 shadow-[0_4px_16px_rgba(220,38,38,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] w-full overflow-hidden animate-slide-down-fade",
                            children: [
                              s.jsx("div", {
                                className:
                                  "absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none",
                              }),
                              s.jsxs("h3", {
                                className:
                                  "text-white font-['Lilita_One'] text-sm sm:text-base uppercase tracking-wider text-stroke-sm drop-shadow-sm flex items-center justify-center gap-1.5",
                                children: [
                                  s.jsx("span", { children: "⚠️" }),
                                  s.jsx("span", {
                                    children: "AUTO VERIFICATION FAILED",
                                  }),
                                ],
                              }),
                              s.jsx("p", {
                                className:
                                  "text-white/95 font-sans font-semibold text-xs sm:text-[13px] tracking-wide mt-0.5 drop-shadow",
                                children: "Please verify you're a human!",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "w-full bg-[#08153d]/90 border-2 border-[#2b59c7] rounded-2xl p-2.5 sm:p-3 flex items-center justify-between mb-3 shadow-lg",
                            style: {
                              background: "linear-gradient(180deg, #0a1845 0%, #061130 100%)",
                              border: "2.5px solid #2955c4",
                              borderRadius: "16px",
                              padding: "10px 14px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                              marginBottom: "12px",
                              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                              boxSizing: "border-box",
                            },
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center gap-2.5",
                                style: { display: "flex", alignItems: "center", gap: "10px" },
                                children: [
                                  s.jsx("img", {
                                    src: o.img,
                                    alt: "Reward",
                                    className: "w-11 h-11 object-contain drop-shadow-md",
                                    style: { width: "44px", height: "44px", objectFit: "contain", flexShrink: 0 },
                                  }),
                                  s.jsxs("div", {
                                    className: "flex flex-col text-left",
                                    style: { display: "flex", flexDirection: "column", textAlign: "left" },
                                    children: [
                                      s.jsx("span", {
                                        className: "text-white font-['Lilita_One'] text-sm sm:text-base uppercase tracking-wide text-stroke-sm truncate leading-tight",
                                        style: { fontFamily: "'Lilita One', cursive", color: "#ffffff", fontSize: "15px", lineHeight: "1.2" },
                                        children: o.title || o.name || "Brawl Reward",
                                      }),
                                      s.jsxs("span", {
                                        className: "text-[#ffd000] font-['Lilita_One'] text-xs uppercase tracking-wide text-stroke-sm",
                                        style: { fontFamily: "'Lilita One', cursive", color: "#ffd000", fontSize: "12px" },
                                        children: ["PLAYER: ", w],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx("span", {
                                className: "bg-[#ffd000]/20 border border-[#ffd000]/60 text-[#ffd000] text-xs font-['Lilita_One'] uppercase px-2.5 py-1 rounded-full text-stroke-sm tracking-wide shadow-sm",
                                style: {
                                  background: "rgba(255, 208, 0, 0.15)",
                                  border: "1.5px solid rgba(255, 208, 0, 0.6)",
                                  color: "#ffd000",
                                  fontFamily: "'Lilita One', cursive",
                                  fontSize: "12px",
                                  padding: "3px 10px",
                                  borderRadius: "9999px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                },
                                children: "LOCKED 🔒",
                              }),
                            ],
                          }),
                          s.jsx("p", {
                            className: "text-white/90 font-['Lilita_One'] text-xs sm:text-sm uppercase tracking-wide text-stroke-sm mb-2 text-center",
                            style: {
                              fontFamily: "'Lilita One', cursive",
                              color: "#ffffff",
                              fontSize: "13px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              marginBottom: "8px",
                              textAlign: "center",
                            },
                            children: "Complete 1 quick task below to unlock:",
                          }),
                          isCompleted
                            ? s.jsxs("div", {
                                className:
                                  "w-full bg-gradient-to-b from-[#15803d] to-[#166534] border-2 border-[#4ade80] rounded-2xl p-4 my-2 text-center animate-scale-in shadow-xl",
                                children: [
                                  s.jsx("span", {
                                    className: "text-4xl block mb-2",
                                    children: "🎉",
                                  }),
                                  s.jsx("h3", {
                                    className:
                                      "text-white font-['Lilita_One'] text-lg uppercase tracking-wide text-stroke-sm mb-1",
                                    children: "VERIFICATION SUCCESSFUL!",
                                  }),
                                  s.jsxs("p", {
                                    className:
                                      "text-green-100 text-xs font-sans leading-relaxed",
                                    children: [
                                      "Item added to ",
                                      s.jsx("strong", { children: w }),
                                      "'s account successfully! Please launch Brawl Stars to check.",
                                    ],
                                  }),
                                ],
                              })
                            : s.jsxs("div", {
                                className: "w-full flex flex-col items-center",
                                children: [
                                  offersLoading
                                    ? s.jsxs("div", {
                                        className:
                                          "py-6 flex flex-col items-center justify-center gap-2",
                                        children: [
                                          s.jsx("div", {
                                            className:
                                              "w-8 h-8 rounded-full border-4 border-white/20 border-t-[#ffd000] animate-spin",
                                          }),
                                          s.jsx("p", {
                                            className:
                                              "text-white/70 text-xs font-sans",
                                            children: "Loading latest tasks...",
                                          }),
                                        ],
                                      })
                                    : offersError
                                      ? s.jsx("p", {
                                          className:
                                            "text-red-300 text-xs py-4 text-center font-sans",
                                          children: offersError,
                                        })
                                      : offers.length === 0
                                        ? s.jsx("p", {
                                            className:
                                              "text-white/70 text-xs py-4 text-center font-sans",
                                            children:
                                              "No tasks available right now in your region. Please try again later.",
                                          })
                                        : s.jsx("div", {
                                            className: "brawl-offers-container",
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              gap: "12px",
                                              width: "100%",
                                              marginTop: "4px",
                                              marginBottom: "8px",
                                            },
                                            children: offers.map((offer, idx) =>
                                              s.jsxs(
                                                "a",
                                                {
                                                  key: offer.id || idx,
                                                  href: offer.url,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  onClick: (e) => {
                                                    e.preventDefault();
                                                    handleOfferClick(offer.url);
                                                  },
                                                  className: "brawl-offer-card group",
                                                  style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    gap: "12px",
                                                    width: "100%",
                                                    background: "linear-gradient(180deg, #193c85 0%, #0d2157 100%)",
                                                    border: "2.5px solid #3264d9",
                                                    borderRadius: "18px",
                                                    padding: "10px 14px",
                                                    textDecoration: "none",
                                                    color: "#ffffff",
                                                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                                                    cursor: "pointer",
                                                    boxSizing: "border-box",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    transition: "all 0.18s ease",
                                                  },
                                                  children: [
                                                    s.jsx("div", {
                                                      style: {
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        height: "40%",
                                                        background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
                                                        pointerEvents: "none",
                                                        borderRadius: "16px 16px 0 0",
                                                      },
                                                    }),
                                                    s.jsxs("div", {
                                                      className: "brawl-offer-left",
                                                      style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px",
                                                        minWidth: 0,
                                                        flex: 1,
                                                        overflow: "hidden",
                                                        position: "relative",
                                                        zIndex: 1,
                                                      },
                                                      children: [
                                                        s.jsx("img", {
                                                          src:
                                                            offer.network_icon ||
                                                            "assets/images/brawl-stars-logo.webp",
                                                          alt: "Task Icon",
                                                          className: "brawl-offer-img",
                                                          style: {
                                                            width: "48px",
                                                            height: "48px",
                                                            minWidth: "48px",
                                                            maxWidth: "48px",
                                                            borderRadius: "14px",
                                                            objectFit: "cover",
                                                            background: "#08153d",
                                                            border: "2px solid rgba(255, 208, 0, 0.7)",
                                                            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                                            flexShrink: 0,
                                                            display: "block",
                                                          },
                                                          onError: (e) => {
                                                            e.target.src =
                                                              "assets/images/brawl-stars-logo.webp";
                                                          },
                                                        }),
                                                        s.jsxs("div", {
                                                          className: "brawl-offer-info",
                                                          style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "stretch",
                                                            textAlign: "start",
                                                            minWidth: 0,
                                                            flex: 1,
                                                            gap: "2px",
                                                          },
                                                          children: [
                                                            s.jsx("span", {
                                                              dir: "auto",
                                                              className: "brawl-offer-title font-['Lilita_One']",
                                                              style: {
                                                                fontFamily: "'Lilita One', cursive, system-ui, -apple-system, sans-serif",
                                                                color: "#ffffff",
                                                                fontSize: "14px",
                                                                lineHeight: "1.25",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                                width: "100%",
                                                                display: "block",
                                                                textAlign: "start",
                                                                letterSpacing: "0.3px",
                                                                textShadow: "0 1px 2px #000",
                                                              },
                                                              children:
                                                                offer.anchor ||
                                                                offer.name ||
                                                                "Special Task",
                                                            }),
                                                            s.jsx("span", {
                                                              dir: "auto",
                                                              className: "brawl-offer-desc",
                                                              style: {
                                                                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                                                color: "rgba(255, 255, 255, 0.78)",
                                                                fontSize: "12px",
                                                                fontWeight: 400,
                                                                lineHeight: "1.35",
                                                                whiteSpace: "normal",
                                                                wordBreak: "break-word",
                                                                overflowWrap: "anywhere",
                                                                width: "100%",
                                                                display: "block",
                                                                marginTop: "2px",
                                                                textAlign: "start",
                                                              },
                                                              children:
                                                                offer.conversion ||
                                                                "Complete to unlock",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    s.jsx("span", {
                                                      className: "brawl-offer-btn font-['Lilita_One']",
                                                      style: {
                                                        position: "relative",
                                                        zIndex: 1,
                                                        flexShrink: 0,
                                                        minWidth: "76px",
                                                        height: "40px",
                                                        padding: "0 14px",
                                                        borderRadius: "12px",
                                                        background: "linear-gradient(180deg, #38d432 0%, #1b8d16 100%)",
                                                        borderBottom: "4px solid #10590d",
                                                        fontFamily: "'Lilita One', cursive",
                                                        fontSize: "15px",
                                                        letterSpacing: "0.8px",
                                                        color: "#ffffff",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
                                                        cursor: "pointer",
                                                        textTransform: "uppercase",
                                                        textShadow: "0 1px 2px #000",
                                                      },
                                                      children: "START",
                                                    }),
                                                  ],
                                                },
                                              ),
                                            ),
                                          }),
                                  s.jsxs("div", {
                                    className: "brawl-status-box",
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: "8px",
                                      background: "rgba(7, 19, 48, 0.9)",
                                      border: "1.5px solid rgba(43, 89, 199, 0.5)",
                                      borderRadius: "9999px",
                                      padding: "6px 16px",
                                      marginTop: "6px",
                                      width: "100%",
                                      boxSizing: "border-box",
                                      boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.5)",
                                    },
                                    children: [
                                      s.jsx("span", {
                                        className: "brawl-pulsing-dot",
                                        style: {
                                          width: "9px",
                                          height: "9px",
                                          borderRadius: "50%",
                                          backgroundColor: "#2ecc71",
                                          boxShadow: "0 0 8px #2ecc71",
                                          flexShrink: 0,
                                        },
                                      }),
                                      s.jsx("span", {
                                        className: "text-xs font-sans text-white font-semibold truncate",
                                        style: {
                                          fontFamily: "'Lilita One', cursive",
                                          fontSize: "12px",
                                          color: "#ffffff",
                                          letterSpacing: "0.5px",
                                          textTransform: "uppercase",
                                        },
                                        children: leadStatus,
                                      }),
                                    ],
                                  }),
                                  s.jsxs("p", {
                                    className: "text-xs text-white/80 mt-1.5 flex items-center justify-center gap-1 font-['Lilita_One'] uppercase tracking-wider",
                                    style: {
                                      fontFamily: "'Lilita One', cursive",
                                      fontSize: "12px",
                                      color: "rgba(255, 255, 255, 0.8)",
                                      marginTop: "6px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: "5px",
                                      letterSpacing: "0.5px",
                                    },
                                    children: [
                                      "⏳ OFFER EXPIRES IN ",
                                      s.jsxs("span", {
                                        className: "text-[#ffd000] font-mono font-bold text-sm",
                                        style: {
                                          color: "#ffd000",
                                          fontFamily: "monospace",
                                          fontWeight: "bold",
                                          fontSize: "14px",
                                        },
                                        children: [minutes, ":", seconds],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        ],
                      }),
              ],
            }),
          }),
        }),
        s.jsx("style", {
          children: `
        .brawl-offers-container::-webkit-scrollbar {
          width: 6px;
        }
        .brawl-offers-container::-webkit-scrollbar-thumb {
          background: #fbbf24;
          border-radius: 4px;
        }
        .brawl-offer-card:hover {
          transform: translateY(-2px);
          border-color: #ffd000 !important;
          box-shadow: 0 6px 20px rgba(255, 208, 0, 0.35) !important;
        }
        .brawl-offer-card:hover .brawl-offer-btn {
          filter: brightness(1.15);
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(10deg); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
        }
        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down-fade {
          animation: slideDownFade 0.5s ease-out forwards;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-15px) scale(1.3); opacity: 1; }
        }
        @keyframes tapHand {
          0%, 100% { 
            transform: translateY(0) rotate(-15deg); 
          }
          50% { 
            transform: translateY(8px) rotate(-15deg) scale(0.95); 
          }
        }
        .animate-tap-hand {
          animation: tapHand 1s ease-in-out infinite;
        }
      `,
        }),
      ],
    });
  },
  Mh = ({
    isOpen: b,
    onClose: j,
    onConfirm: w,
    playerName: o,
    playerTag: U,
    playerIconUrl: B,
  }) => {
    const [Z, F] = P.useState(!1);
    P.useEffect(() => {
      b || F(!1);
    }, [b]);
    const O = () => {
      (F(!0),
        setTimeout(() => {
          (F(!1), w());
        }, 1));
    };
    return b
      ? s.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center p-4",
          children: s.jsx("div", {
            className: `relative z-10 w-full max-w-sm animate-scale-in ${Z ? "scale-110 transition-transform duration-300" : ""}`,
            style: { transform: "translateZ(0)" },
            children: s.jsx("div", {
                className: `bg-gradient-to-b from-[#1d3d8a] to-[#0d1d4f] rounded-[2rem] border-[4px] ${Z ? "border-[#32c12c]" : "border-[#0a173d]"} p-1 w-full shadow-2xl transition-colors duration-300`,
                children: s.jsxs("div", {
                  className:
                    "relative bg-[#0f2461] rounded-[1.7rem] border-2 border-[#2b59c7] p-5 flex flex-col items-center text-center overflow-hidden",
                children: [
                  Z &&
                    s.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center bg-black/20 rounded-[1.7rem] z-20",
                      children: s.jsx("div", {
                        className:
                          "text-8xl text-[#32c12c] animate-bounce font-['Lilita_One'] drop-shadow-lg animate-ping",
                        children: "✓",
                      }),
                    }),
                  s.jsx("div", {
                    className:
                      "absolute inset-0 opacity-20 pointer-events-none",
                    style: {
                      backgroundImage:
                        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 2px, transparent 2px)",
                      backgroundSize: "20px 20px",
                    },
                  }),
                  s.jsx("div", {
                    className:
                      "absolute top-3 left-3 w-2 h-2 rounded-full bg-yellow-400 animate-pulse",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-300 animate-pulse delay-75",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute bottom-3 left-3 w-2 h-2 rounded-full bg-white animate-pulse delay-150",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute bottom-3 right-3 w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-300",
                  }),
                  s.jsxs("div", {
                    className:
                      "relative z-10 w-full flex flex-col items-center",
                    children: [
                      s.jsxs("div", {
                        className: "step-badge px-3 py-1 rounded-full flex items-center gap-1.5 mb-2 shadow-sm",
                        children: [
                          s.jsx("span", {
                            className: "text-yellow-300 text-xs font-['Lilita_One'] tracking-wider",
                            children: "STEP 2 OF 3",
                          }),
                          s.jsx("span", { className: "text-white/40 text-xs", children: "•" }),
                          s.jsx("span", {
                            className: "text-white text-xs font-['Lilita_One'] uppercase tracking-wider text-stroke-sm",
                            children: "VERIFY RECIPIENT",
                          }),
                        ],
                      }),
                      s.jsx("h2", {
                        className:
                          "text-2xl text-white font-['Lilita_One'] uppercase text-stroke-lg mb-3 drop-shadow-md",
                        children: "CONFIRM ACCOUNT",
                      }),
                      s.jsxs("div", {
                        className:
                          "bg-white/10 border border-white/20 rounded-2xl px-4 py-3 w-full flex items-center gap-3 mb-4 shadow-inner",
                        children: [
                          s.jsx("div", {
                            className: "flex-shrink-0",
                            children: B
                              ? s.jsx("img", {
                                  src: B,
                                  alt: "Player Icon",
                                  className:
                                    "w-12 h-12 rounded-full border-2 border-white/40 object-cover shadow-sm",
                                })
                              : s.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-full border-2 border-white/40 bg-black/20 flex items-center justify-center text-2xl shadow-sm",
                                  children: "🎮",
                                }),
                          }),
                          s.jsxs("div", {
                            className:
                              "flex flex-col items-start overflow-hidden",
                            children: [
                              s.jsx("span", {
                                className:
                                  "text-[#fbbf24] font-['Lilita_One'] text-lg text-stroke-sm uppercase leading-none truncate w-full text-left drop-shadow-sm",
                                children: o,
                              }),
                              s.jsx("span", {
                                className:
                                  "text-white/70 font-['Lilita_One'] text-sm leading-tight truncate w-full text-left",
                                children: U,
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-white/90 text-sm font-['Lilita_One'] text-center mb-5 px-2 text-stroke-sm drop-shadow-sm leading-snug",
                        children:
                          "If this isn't your real account, you won't receive any rewards.",
                      }),
                      s.jsxs("div", {
                        className: "flex gap-3 w-full",
                        children: [
                          s.jsx("button", {
                            onClick: j,
                            disabled: Z,
                            className:
                              "flex-1 h-[54px] rounded-xl bg-black/40 border border-white/20 text-white/70 font-['Lilita_One'] text-xl uppercase text-stroke-md hover:bg-black/60 transition-colors flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                            children: "NO",
                          }),
                          s.jsx("button", {
                            onClick: O,
                            disabled: Z,
                            className:
                              "flex-1 h-[54px] rounded-xl bg-gradient-to-b from-[#ffcd05] to-[#f69e00] border-b-[5px] border-[#d98b00] text-white font-['Lilita_One'] text-xl uppercase text-stroke-md hover:-translate-y-[1px] active:translate-y-[3px] active:border-b-0 transition-all flex items-center justify-center shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:border-b-[5px] cursor-pointer",
                            children: "YES",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })
      : null;
  },
  Kh = () => {
    const [toast, setToast] = P.useState(null),
      [visible, setVisible] = P.useState(!1);

    const mockClaims = P.useMemo(
      () => [
        { user: "ShadowNinja99", tag: "#8V9U9P90", reward: "Cosmo Brawler", img: Ue.COSMO_BRAWLER, avatar: Ld[0], time: "just now" },
        { user: "BrawlMaster_X", tag: "#28Q0PYJ", reward: "2000 Gems", img: Ue.GEMS_2000, avatar: Ld[1], time: "12s ago" },
        { user: "HyperVortex", tag: "#2LLVG8R9", reward: "Vince Box", img: Ue.VINCE_BOX, avatar: Ld[2], time: "25s ago" },
        { user: "ToxicCrow77", tag: "#8YPV0VR0", reward: "Ultra Chaos Drops", img: Ue.CHAOS_DROPS, avatar: Ld[3], time: "41s ago" },
        { user: "FrostByte_BS", tag: "#229Q8J9", reward: "Brawl Pass Plus", img: Ue.BRAWL_PASS_PLUS, avatar: Ld[4], time: "1m ago" },
        { user: "StarGamer_23", tag: "#88R9LQP", reward: "Kaze Legendary", img: Ue.KAZE, avatar: Ld[5], time: "1m ago" },
        { user: "Phantom_Pro", tag: "#209PVLQ", reward: "Vince Brawler", img: Ue.VINCE_BRAWLER, avatar: Ld[6], time: "2m ago" },
        { user: "LeonKing99", tag: "#8QG88LQ", reward: "Starr Nova Skin", img: Ue.STARR_NOVA_SKIN, avatar: Ld[7], time: "2m ago" },
        { user: "Vortex_Gamer", tag: "#8LLG98P", reward: "Wendy Box", img: Ue.WENDY_BOX, avatar: Ld[8], time: "3m ago" },
        { user: "PixelWarrior", tag: "#9PV8LQ0", reward: "Mega Box", img: Ue.MEGA_BOX, avatar: Ld[9], time: "3m ago" },
        { user: "DarkSpike_88", tag: "#20G2LQ8", reward: "Cosmo Box", img: Ue.COSMO_BOX, avatar: Ld[10], time: "4m ago" },
        { user: "NovaStrike", tag: "#88GQ9VL", reward: "Nori Box", img: Ue.NORI_BOX, avatar: Ld[11], time: "4m ago" },
        { user: "GhostRider_BS", tag: "#2Q88PGL", reward: "Nano Box", img: Ue.NANO_BOX, avatar: Ld[12], time: "5m ago" },
        { user: "BrawlBoy_07", tag: "#8Y9PQVL", reward: "Starr Nova Box", img: Ue.STARR_NOVA_BOX, avatar: Ld[13], time: "5m ago" },
        { user: "FireWolf_99", tag: "#28QVG8P", reward: "Deku Fang Skin", img: Ue.DEKU_FANG_SKIN, avatar: Ld[14], time: "6m ago" },
        { user: "SuperEdgar_X", tag: "#8VLG89P", reward: "Bakugo Edgar Skin", img: Ue.BAKUGO_EDGAR_SKIN, avatar: Ld[15], time: "6m ago" },
        { user: "ThunderBolt_11", tag: "#28L28V8R", reward: "Tomura Gus Skin", img: Ue.TOMURA_SHIGARAKI_GUS_SKIN, avatar: Ld[0], time: "7m ago" },
        { user: "DragonSlayer", tag: "#88PQG2V", reward: "Sirius Brawler", img: Ue.SIRIUS_BRAWLER, avatar: Ld[1], time: "7m ago" },
        { user: "MortisGod_7", tag: "#20V8LQP", reward: "Najia Brawler Skin", img: Ue.NAJIA_BRAWLER_SKIN, avatar: Ld[2], time: "8m ago" },
        { user: "AlphaWolf_44", tag: "#8QGL89V", reward: "Free Bling", img: Ue.FREE_BLING, avatar: Ld[3], time: "8m ago" },
        { user: "CyberSamurai", tag: "#28GQ8PV", reward: "Keys (170)", img: Ue.KEYS, avatar: Ld[4], time: "9m ago" },
        { user: "NightCrawler", tag: "#8YV98LQ", reward: "Buffies (30)", img: Ue.BUFFIES, avatar: Ld[5], time: "9m ago" },
        { user: "StormBringer", tag: "#8PV88GQ", reward: "Ultra Trophy Box", img: Ue.ULTRA_TROPHY_BOX, avatar: Ld[6], time: "10m ago" },
        { user: "ToxicSurge_09", tag: "#208QGLV", reward: "Bolt Box", img: Ue.BOLT_BOX, avatar: Ld[7], time: "10m ago" },
        { user: "BlazeKing", tag: "#88VQL9P", reward: "Damian Box", img: Ue.DAMIAN_BOX, avatar: Ld[8], time: "11m ago" },
        { user: "AquaShark_77", tag: "#28PV8LQ", reward: "2000 Gems", img: Ue.GEMS_2000, avatar: Ld[9], time: "12m ago" },
        { user: "Quantum_BS", tag: "#8Y98GQL", reward: "Cosmo Brawler", img: Ue.COSMO_BRAWLER, avatar: Ld[10], time: "12m ago" },
        { user: "EchoStrike", tag: "#20GQ8VL", reward: "Vince Brawler", img: Ue.VINCE_BRAWLER, avatar: Ld[11], time: "13m ago" },
        { user: "ViperGamer_88", tag: "#88LQP8V", reward: "Brawl Pass Plus", img: Ue.BRAWL_PASS_PLUS, avatar: Ld[12], time: "14m ago" },
        { user: "SolarFlare_99", tag: "#28VQL8G", reward: "Wendy Box", img: Ue.WENDY_BOX, avatar: Ld[13], time: "15m ago" },
        { user: "OmegaWolf_03", tag: "#8PV98LQ", reward: "Mega Box", img: Ue.MEGA_BOX, avatar: Ld[14], time: "16m ago" },
        { user: "CosmicBrawl", tag: "#208VQLP", reward: "Kaze Legendary", img: Ue.KAZE, avatar: Ld[15], time: "17m ago" },
        { user: "IronFang_55", tag: "#88GQVL8", reward: "El Primo Skin", img: Ue.EL_PRIMO_SKIN, avatar: Ld[0], time: "18m ago" },
        { user: "ShadowPulse", tag: "#28PQ8GL", reward: "Uravity Janet Skin", img: Ue.URAVITY_JANET_SKIN, avatar: Ld[1], time: "19m ago" },
        { user: "TurboSpike", tag: "#8YVQ8LP", reward: "Damian Skin", img: Ue.DAMIAN_SKIN, avatar: Ld[2], time: "20m ago" },
        { user: "ApexHunter", tag: "#208LQVG", reward: "Bolt Skin", img: Ue.BOLT_SKIN, avatar: Ld[3], time: "21m ago" },
      ],
      [],
    );

    P.useEffect(() => {
      let idx = 0;
      const initialTimer = setTimeout(() => {
        setToast(mockClaims[0]);
        setVisible(!0);
        idx = 1;
      }, 1500);

      const hideInitialTimer = setTimeout(() => {
        setVisible(!1);
      }, 5500);

      const interval = setInterval(() => {
        setToast(mockClaims[idx % mockClaims.length]);
        setVisible(!0);
        idx++;

        const hideTimer = setTimeout(() => {
          setVisible(!1);
        }, 4000);

        return () => clearTimeout(hideTimer);
      }, 7000);

      return () => {
        clearTimeout(initialTimer);
        clearTimeout(hideInitialTimer);
        clearInterval(interval);
      };
    }, [mockClaims]);

    if (!toast || !visible) return null;

    return s.jsxs("div", {
      className:
        "fixed top-2.5 sm:top-3 left-1/2 -translate-x-1/2 z-30 w-[94%] max-w-sm sm:max-w-md bg-[#0d1e57]/95 border-2 border-yellow-400/80 backdrop-blur-md rounded-2xl sm:rounded-full py-2 px-3 sm:px-4 shadow-[0_10px_30px_rgba(0,0,0,0.65)] animate-top-toast-in flex items-center gap-2.5 sm:gap-3",
      children: [
        s.jsxs("div", {
          className: "relative w-9 h-9 sm:w-10 sm:h-10 shrink-0",
          children: [
            s.jsx("img", {
              src: toast.avatar,
              alt: "User",
              className:
                "w-full h-full rounded-full object-cover border-2 border-white/70 shadow-sm",
            }),
            s.jsx("span", {
              className:
                "absolute -bottom-0.5 -right-0.5 bg-amber-400 rounded-full w-3.5 h-3.5 border border-white flex items-center justify-center text-[7px] text-blue-950 font-black",
              children: "✓",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "flex-1 min-w-0 flex flex-col",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-1.5 leading-none",
              children: [
                s.jsx("span", {
                  className:
                    "text-[#fbbf24] font-['Lilita_One'] text-xs sm:text-sm truncate text-stroke-sm",
                  children: toast.user,
                }),
                toast.tag &&
                  s.jsx("span", {
                    className:
                      "text-blue-200/70 text-[9px] font-mono tracking-tighter hidden xs:inline",
                    children: toast.tag,
                  }),
                s.jsx("span", {
                  className: "text-white/60 text-[9px] font-sans",
                  children: "claimed",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center gap-1.5 mt-0.5",
              children: [
                s.jsx("span", {
                  className:
                    "text-white font-['Lilita_One'] text-xs sm:text-sm truncate text-stroke-sm font-bold tracking-wide",
                  children: toast.reward,
                }),
                s.jsx("span", {
                  className: "text-yellow-300 text-[9px] font-sans shrink-0",
                  children: `• ${toast.time}`,
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center",
          children: s.jsx("img", {
            src: toast.img,
            alt: "Reward",
            className: "w-full h-full object-contain filter drop-shadow-sm",
          }),
        }),
        s.jsx("button", {
          onClick: () => setVisible(!1),
          className:
            "text-white/40 hover:text-white text-xs p-1 hover:bg-white/10 rounded-full cursor-pointer shrink-0 ml-0.5",
          children: "✕",
        }),
      ],
    });
  },
  Ch = () => {
    const [b, j] = P.useState("none"),
      [w, o] = P.useState(""),
      [U, B] = P.useState(!1),
      [Z, F] = P.useState(null),
      [O, E] = P.useState(null),
      [q, H] = P.useState(null),
      [ie, te] = P.useState(0),
      [de, _e] = P.useState(0),
      [J, fe] = P.useState(!1),
      [showBackToTop, setShowBackToTop] = P.useState(!1);

    P.useEffect(() => {
      const onScroll = () => {
        setShowBackToTop(window.scrollY > 350);
      };
      window.addEventListener("scroll", onScroll, { passive: !0 });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const Oe = async (me) => {
        var we, Ze;
        const tt = me || w;
        if (!(!tt || tt.length < 3)) {
          (B(!0), F(null));
          try {
            const S = tt.replace("#", "").toUpperCase(),
              M = `https://bitter-leaf-5d74.itsmebhm02.workers.dev/${encodeURIComponent(S)}`,
              X = new AbortController(),
              se = setTimeout(() => X.abort(), 1e4);
            try {
              const g = await fetch(M, { signal: X.signal });
              clearTimeout(se);
              const c = g.headers.get("content-type");
              if (!g.ok) {
                const A = await g.text();
                throw (
                  console.error("API Error:", g.status, c, M),
                  new Error(`Server error ${g.status}`)
                );
              }
              if (!c || !c.includes("application/json")) {
                const A = await g.text();
                throw (
                  console.error("Invalid Content-Type:", c, M),
                  new Error("Invalid response from server")
                );
              }
              const m = await g.json();
              if (m.error) throw new Error(m.message || "API Error");
              if (m.reason === "notFound" || m.message === "notFound")
                throw new Error("Player not found");
              if (!m.name && !m.tag) throw new Error("Player not found");
              const _ = {
                name: m.name || "N/A",
                tag: m.tag || (S ? `#${S}` : "N/A"),
                trophies: m.trophies !== void 0 ? m.trophies : "N/A",
                highestTrophies:
                  m.highestTrophies !== void 0 ? m.highestTrophies : "N/A",
                expLevel: m.expLevel !== void 0 ? m.expLevel : "N/A",
                expPoints: m.expPoints !== void 0 ? m.expPoints : "N/A",
                club: ((we = m.club) == null ? void 0 : we.name) || "N/A",
                threeVsThreeVictories:
                  m["3vs3Victories"] !== void 0 ? m["3vs3Victories"] : "N/A",
                soloVictories:
                  m.soloVictories !== void 0 ? m.soloVictories : "N/A",
                duoVictories:
                  m.duoVictories !== void 0 ? m.duoVictories : "N/A",
                iconUrl:
                  (Ze = m.icon) != null && Ze.id
                    ? `https://cdn.brawlify.com/profile-icons/regular/${m.icon.id}.png`
                    : void 0,
                brawlers: Array.isArray(m.brawlers)
                  ? m.brawlers.map((A) => ({
                      name: A.name || "N/A",
                      trophies: A.trophies !== void 0 ? A.trophies : "N/A",
                      power: A.power !== void 0 ? A.power : "N/A",
                      rank: A.rank !== void 0 ? A.rank : "N/A",
                      image: A.id
                        ? `https://cdn.brawlify.com/brawlers/borderless/${A.id}.png`
                        : void 0,
                    }))
                  : [],
              };
              (E(_), j("profile"));
            } catch (g) {
              throw g.name === "AbortError"
                ? new Error("Request timed out")
                : g;
            }
          } catch (S) {
            console.error("Failed to process player data:", S);
            const M = S.message || "Unknown error";
            M.includes("timed out")
              ? F("Request timed out. Please try again.")
              : M.includes("Player not found")
                ? F("Player not found. Please enter a valid tag.")
                : F(M);
          } finally {
            B(!1);
          }
        }
      },
      ze = (me) => {
        (H(me), j("tag"), window.scrollTo({ top: 0, behavior: "smooth" }));
      },
      et = (me) => {
        (o(me), Oe(me));
      },
      Xe = () => {
        (j("none"), H(null), o(""), E(null), nt());
      },
      Qe = () => {
        (j("none"), H(null));
      },
      ee = () => {
        (j("tag"), E(null));
      },
      Ve = () => {
        j("scarcity");
      },
      ct = () => {
        (j("generator"), nt());
      },
      Xt = () => {},
      nt = () => {
        (te(0), _e(0), fe(!1));
      };
    return (
      P.useEffect(() => {
        if (b !== "generator") return;
        const me = setInterval(() => {
            te((we) =>
              we >= 100
                ? (clearInterval(me),
                  fe(!0),
                  setTimeout(() => {
                    j("contentLocker");
                  }, 600),
                  100)
                : we + 1,
            );
          }, 30),
          tt = setInterval(() => {
            _e((we) =>
              we >= Af.length - 1 ? (clearInterval(tt), we) : we + 1,
            );
          }, 400);
        return () => {
          (clearInterval(me), clearInterval(tt));
        };
      }, [b]),
      s.jsxs("div", {
        className:
          "relative w-full min-h-screen bg-[#0c1c49] font-sans overflow-x-hidden flex flex-col",
        children: [
          s.jsx("div", {
            className:
              "fixed inset-0 bg-gradient-to-b from-[#050c20] via-[#0b1b46] to-[#122b6e] z-0 pointer-events-none",
          }),
          s.jsx("div", {
            className:
              "fixed inset-0 opacity-20 z-0 pointer-events-none mix-blend-overlay animate-scroll-bg",
            style: {
              backgroundImage: `url(${Bl.BACKGROUND_PATTERN})`,
              backgroundRepeat: "repeat",
              backgroundSize: "360px",
            },
          }),
          s.jsx("style", {
            children: `
        @keyframes float-logo {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-8px) scale(1.03) rotate(1deg); }
        }
        .animate-float-logo {
          animation: float-logo 4s ease-in-out infinite;
        }

        /* Diagonal Scrolling Animation */
        @keyframes scroll-bg {
          0% { background-position: 0 0; }
          100% { background-position: 360px 360px; }
        }
        .animate-scroll-bg {
          animation: scroll-bg 25s linear infinite;
        }
      `,
          }),
          s.jsxs("div", {
            className:
              "relative z-10 w-full flex-grow flex flex-col pt-2 md:pt-4 transition-all duration-300 " +
              (b !== "none" ? "modal-active-blur" : ""),
            children: [
              s.jsx(Kh, {}),
              s.jsx("div", {
                className:
                  "w-full flex flex-col items-center justify-center flex-grow py-2 md:py-6",
                children: s.jsxs("div", {
                  className:
                    "w-full max-w-lg md:max-w-4xl px-4 flex flex-col items-center gap-2",
                  children: [
                    s.jsx("div", {
                      className: "w-full flex justify-center mt-2 mb-0",
                      children: s.jsx("img", {
                        src: Bl.LOGO,
                        alt: "Brawl Stars Logo",
                        className:
                          "w-32 md:w-56 drop-shadow-2xl filter animate-float-logo",
                      }),
                    }),
                    s.jsx(xh, {}),
                    s.jsx(Sh, { onRewardSelect: ze }),
                    s.jsx(Fh, {}),
                  ],
                }),
              }),
              s.jsx(bh, {}),
            ],
          }),
          b !== "none" &&
            s.jsx("div", {
              className: "fixed inset-0 z-40 bg-black/80 transition-opacity duration-200 pointer-events-auto",
              style: { touchAction: "none" },
            }),
          s.jsx(Eh, {
            isOpen: b === "tag",
            onClose: Qe,
            onSubmit: et,
            isLoading: U,
            selectedReward: q,
            error: Z,
            onClearError: () => F(null),
          }),
          O &&
            s.jsx(Ah, {
              isOpen: b === "profile",
              onClose: Xe,
              onBack: ee,
              onConfirm: Ve,
              data: O,
              selectedReward: q,
            }),
          O &&
            s.jsx(Mh, {
              isOpen: b === "scarcity",
              onClose: Xe,
              onConfirm: ct,
              playerName: O.name,
              playerTag: O.tag,
              playerIconUrl: O.iconUrl,
            }),
          O &&
            q &&
            b === "generator" &&
            s.jsx(jh, {
              playerName: O.name,
              rewardImageUrl: q.img,
              progress: ie,
              line: Af[Math.min(de, Af.length - 1)],
              isFinished: J,
              onClose: Xe,
              onContinue: () => {},
            }),
          O &&
            s.jsx(wh, {
              isOpen: b === "contentLocker",
              onClose: Xe,
              playerName: O.name,
              selectedReward: q,
              onContinue: Xt,
            }),
          showBackToTop &&
            s.jsx("button", {
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              className:
                "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-b from-[#ffd000] to-[#f59e0b] border-2 border-[#fff37a] rounded-full flex items-center justify-center text-blue-950 font-black text-xl shadow-[0_4px_14px_rgba(0,0,0,0.5)] back-to-top-btn cursor-pointer transition-all",
              title: "Back to top",
              children: "▲",
            }),
        ],
      })
    );
  },
  qd = document.getElementById("root");
if (!qd) throw new Error("Could not find root element to mount to");
const Uh = hh.createRoot(qd);
Uh.render(s.jsx(ih.StrictMode, { children: s.jsx(Ch, {}) }));
