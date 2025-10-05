const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BSxP9onF.js",
      "assets/useNoRefRedirect-CYdgCLTW.js",
      "assets/MainButton-C1R7PPfM.js",
      "assets/MainButton-CGgs3d4p.css",
      "assets/SectionWrapper-Drd3hGIe.js",
      "assets/SectionWrapper-CdhYYsr6.css",
      "assets/bars-CE7l5pMj.js",
      "assets/bitcoin-B_NPvEmV.js",
      "assets/AccordionCard-CzKI8inz.js",
      "assets/AccordionCard-QEEY7iGF.css",
      "assets/gold-BREShX3Z.js",
      "assets/gold-DHBATib1.css",
      "assets/useWindowWidth-BHeSHYBk.js",
      "assets/CTA-Db2QDku6.js",
      "assets/CTA-8IR3FZCi.css",
      "assets/proxy-DG8c-KMX.js",
      "assets/bitcoin-PbM30oEE.js",
      "assets/CustomHelmet-mqlsN33b.js",
      "assets/index-YSouItNU.css",
      "assets/index-BjqnpYd6.js",
      "assets/index-DbRCHio_.css",
      "assets/index-Dj81i5us.js",
      "assets/CustomLink-DiQI51qp.js",
      "assets/CustomLink-n0Jgm_k8.css",
      "assets/index-CU0HeUx4.css",
      "assets/index-oR3vETIF.js",
      "assets/index.esm-CDenUBn6.js",
      "assets/index-B3pke0Ks.css",
      "assets/NotRobot-DVcYafmm.js",
      "assets/index-C768ksZ2.js",
      "assets/NotRobot-cib3giLa.css",
      "assets/useAuthRedirect-DAD2nTd5.js",
      "assets/index-BJhTo6dk.css",
      "assets/index-DhQQOVCZ.js",
      "assets/index-BxPYhmK5.css",
      "assets/index-Bz9wfyib.js",
      "assets/index-C9fZCtFW.css",
      "assets/index-DSb2W5xF.js",
      "assets/InstructionModal-hIUmvAYI.js",
      "assets/InstructionModal-DNmkMxU9.css",
      "assets/index-Cc-BqkYI.js",
      "assets/index-BQYV5rIg.css",
      "assets/index-DczBZ0pR.js",
      "assets/index-stidFHKd.css",
      "assets/index-LNfzLU1r.js",
      "assets/react-toastify.esm-dAsH2ndc.js",
      "assets/index-DHYTcBUa.css",
      "assets/index-DLMXvuTP.js",
      "assets/index-CfL994Vn.css",
      "assets/index-B8D_fJdp.js",
      "assets/useNoAuthRedirect-B2KqvuNi.js",
      "assets/index-BvLHYaTR.js",
      "assets/index-Cby00meS.css",
      "assets/index-DGf8g4Sc.js",
      "assets/InfiniteLoader-Dao877E_.js",
      "assets/InfiniteLoader-D1E4-LrJ.css",
      "assets/index-DPE4yMVk.css",
      "assets/index-DzTJ0usA.js",
      "assets/index-DVyvEdOj.css",
      "assets/index-CW7BNmWA.js",
      "assets/index-Ca3eLbeZ.css",
      "assets/index-BHdHaLp1.js",
      "assets/index-rO_X4leR.css",
    ])
) => i.map((i) => d[i]);
var s0 = Object.defineProperty;
var a0 = (e, t, n) =>
  t in e
    ? s0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ft = (e, t, n) => a0(e, typeof t != "symbol" ? t + "" : t, n);
function Vg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var l0 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function f8(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Hg = { exports: {} },
  Ml = {},
  Wg = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bs = Symbol.for("react.element"),
  u0 = Symbol.for("react.portal"),
  c0 = Symbol.for("react.fragment"),
  f0 = Symbol.for("react.strict_mode"),
  d0 = Symbol.for("react.profiler"),
  p0 = Symbol.for("react.provider"),
  h0 = Symbol.for("react.context"),
  g0 = Symbol.for("react.forward_ref"),
  m0 = Symbol.for("react.suspense"),
  y0 = Symbol.for("react.memo"),
  v0 = Symbol.for("react.lazy"),
  ip = Symbol.iterator;
function w0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ip && e[ip]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kg = Object.assign,
  Gg = {};
function So(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gg),
    (this.updater = n || qg);
}
So.prototype.isReactComponent = {};
So.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
So.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yg() {}
Yg.prototype = So.prototype;
function Hf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gg),
    (this.updater = n || qg);
}
var Wf = (Hf.prototype = new Yg());
Wf.constructor = Hf;
Kg(Wf, So.prototype);
Wf.isPureReactComponent = !0;
var op = Array.isArray,
  Qg = Object.prototype.hasOwnProperty,
  qf = { current: null },
  Jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qg.call(t, r) && !Jg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Bs,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: qf.current,
  };
}
function S0(e, t) {
  return {
    $$typeof: Bs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Kf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bs;
}
function _0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sp = /\/+/g;
function Cu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _0("" + e.key)
    : t.toString(36);
}
function Ra(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bs:
          case u0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Cu(s, 0) : r),
      op(i)
        ? ((n = ""),
          e != null && (n = e.replace(sp, "$&/") + "/"),
          Ra(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Kf(i) &&
            (i = S0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(sp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), op(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Cu(o, a);
      s += Ra(o, t, n, l, i);
    }
  else if (((l = w0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Cu(o, a++)), (s += Ra(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function sa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ra(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function b0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ot = { current: null },
  Aa = { transition: null },
  x0 = {
    ReactCurrentDispatcher: Ot,
    ReactCurrentBatchConfig: Aa,
    ReactCurrentOwner: qf,
  };
function Zg() {
  throw Error("act(...) is not supported in production builds of React.");
}
fe.Children = {
  map: sa,
  forEach: function (e, t, n) {
    sa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      sa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      sa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Kf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
fe.Component = So;
fe.Fragment = c0;
fe.Profiler = d0;
fe.PureComponent = Hf;
fe.StrictMode = f0;
fe.Suspense = m0;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x0;
fe.act = Zg;
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Kg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = qf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Qg.call(t, l) &&
        !Jg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Bs, type: e.type, key: i, ref: o, props: r, _owner: s };
};
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: h0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: p0, _context: e }),
    (e.Consumer = e)
  );
};
fe.createElement = Xg;
fe.createFactory = function (e) {
  var t = Xg.bind(null, e);
  return (t.type = e), t;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (e) {
  return { $$typeof: g0, render: e };
};
fe.isValidElement = Kf;
fe.lazy = function (e) {
  return { $$typeof: v0, _payload: { _status: -1, _result: e }, _init: b0 };
};
fe.memo = function (e, t) {
  return { $$typeof: y0, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
  var t = Aa.transition;
  Aa.transition = {};
  try {
    e();
  } finally {
    Aa.transition = t;
  }
};
fe.unstable_act = Zg;
fe.useCallback = function (e, t) {
  return Ot.current.useCallback(e, t);
};
fe.useContext = function (e) {
  return Ot.current.useContext(e);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (e) {
  return Ot.current.useDeferredValue(e);
};
fe.useEffect = function (e, t) {
  return Ot.current.useEffect(e, t);
};
fe.useId = function () {
  return Ot.current.useId();
};
fe.useImperativeHandle = function (e, t, n) {
  return Ot.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function (e, t) {
  return Ot.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function (e, t) {
  return Ot.current.useLayoutEffect(e, t);
};
fe.useMemo = function (e, t) {
  return Ot.current.useMemo(e, t);
};
fe.useReducer = function (e, t, n) {
  return Ot.current.useReducer(e, t, n);
};
fe.useRef = function (e) {
  return Ot.current.useRef(e);
};
fe.useState = function (e) {
  return Ot.current.useState(e);
};
fe.useSyncExternalStore = function (e, t, n) {
  return Ot.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function () {
  return Ot.current.useTransition();
};
fe.version = "18.3.1";
Wg.exports = fe;
var p = Wg.exports;
const _n = Si(p),
  k0 = Vg({ __proto__: null, default: _n }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var E0 = p,
  T0 = Symbol.for("react.element"),
  O0 = Symbol.for("react.fragment"),
  C0 = Object.prototype.hasOwnProperty,
  R0 = E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  A0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function em(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) C0.call(t, r) && !A0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: T0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: R0.current,
  };
}
Ml.Fragment = O0;
Ml.jsx = em;
Ml.jsxs = em;
Hg.exports = Ml;
var b = Hg.exports,
  tm = { exports: {} },
  Gt = {},
  nm = { exports: {} },
  rm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(B, H) {
    var ee = B.length;
    B.push(H);
    e: for (; 0 < ee; ) {
      var re = (ee - 1) >>> 1,
        we = B[re];
      if (0 < i(we, H)) (B[re] = H), (B[ee] = we), (ee = re);
      else break e;
    }
  }
  function n(B) {
    return B.length === 0 ? null : B[0];
  }
  function r(B) {
    if (B.length === 0) return null;
    var H = B[0],
      ee = B.pop();
    if (ee !== H) {
      B[0] = ee;
      e: for (var re = 0, we = B.length, We = we >>> 1; re < We; ) {
        var ge = 2 * (re + 1) - 1,
          Rt = B[ge],
          it = ge + 1,
          Jt = B[it];
        if (0 > i(Rt, ee))
          it < we && 0 > i(Jt, Rt)
            ? ((B[re] = Jt), (B[it] = ee), (re = it))
            : ((B[re] = Rt), (B[ge] = ee), (re = ge));
        else if (it < we && 0 > i(Jt, ee))
          (B[re] = Jt), (B[it] = ee), (re = it);
        else break e;
      }
    }
    return H;
  }
  function i(B, H) {
    var ee = B.sortIndex - H.sortIndex;
    return ee !== 0 ? ee : B.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(B) {
    for (var H = n(u); H !== null; ) {
      if (H.callback === null) r(u);
      else if (H.startTime <= B)
        r(u), (H.sortIndex = H.expirationTime), t(l, H);
      else break;
      H = n(u);
    }
  }
  function E(B) {
    if (((y = !1), w(B), !v))
      if (n(l) !== null) (v = !0), Xe(R);
      else {
        var H = n(u);
        H !== null && xe(E, H.startTime - B);
      }
  }
  function R(B, H) {
    (v = !1), y && ((y = !1), m(O), (O = -1)), (g = !0);
    var ee = d;
    try {
      for (
        w(H), f = n(l);
        f !== null && (!(f.expirationTime > H) || (B && !ie()));

      ) {
        var re = f.callback;
        if (typeof re == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var we = re(f.expirationTime <= H);
          (H = e.unstable_now()),
            typeof we == "function" ? (f.callback = we) : f === n(l) && r(l),
            w(H);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var We = !0;
      else {
        var ge = n(u);
        ge !== null && xe(E, ge.startTime - H), (We = !1);
      }
      return We;
    } finally {
      (f = null), (d = ee), (g = !1);
    }
  }
  var S = !1,
    $ = null,
    O = -1,
    W = 5,
    q = -1;
  function ie() {
    return !(e.unstable_now() - q < W);
  }
  function pe() {
    if ($ !== null) {
      var B = e.unstable_now();
      q = B;
      var H = !0;
      try {
        H = $(!0, B);
      } finally {
        H ? be() : ((S = !1), ($ = null));
      }
    } else S = !1;
  }
  var be;
  if (typeof h == "function")
    be = function () {
      h(pe);
    };
  else if (typeof MessageChannel < "u") {
    var he = new MessageChannel(),
      Ke = he.port2;
    (he.port1.onmessage = pe),
      (be = function () {
        Ke.postMessage(null);
      });
  } else
    be = function () {
      x(pe, 0);
    };
  function Xe(B) {
    ($ = B), S || ((S = !0), be());
  }
  function xe(B, H) {
    O = x(function () {
      B(e.unstable_now());
    }, H);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (B) {
      B.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Xe(R));
    }),
    (e.unstable_forceFrameRate = function (B) {
      0 > B || 125 < B
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < B ? Math.floor(1e3 / B) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (B) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = d;
      }
      var ee = d;
      d = H;
      try {
        return B();
      } finally {
        d = ee;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (B, H) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var ee = d;
      d = B;
      try {
        return H();
      } finally {
        d = ee;
      }
    }),
    (e.unstable_scheduleCallback = function (B, H, ee) {
      var re = e.unstable_now();
      switch (
        (typeof ee == "object" && ee !== null
          ? ((ee = ee.delay),
            (ee = typeof ee == "number" && 0 < ee ? re + ee : re))
          : (ee = re),
        B)
      ) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return (
        (we = ee + we),
        (B = {
          id: c++,
          callback: H,
          priorityLevel: B,
          startTime: ee,
          expirationTime: we,
          sortIndex: -1,
        }),
        ee > re
          ? ((B.sortIndex = ee),
            t(u, B),
            n(l) === null &&
              B === n(u) &&
              (y ? (m(O), (O = -1)) : (y = !0), xe(E, ee - re)))
          : ((B.sortIndex = we), t(l, B), v || g || ((v = !0), Xe(R))),
        B
      );
    }),
    (e.unstable_shouldYield = ie),
    (e.unstable_wrapCallback = function (B) {
      var H = d;
      return function () {
        var ee = d;
        d = H;
        try {
          return B.apply(this, arguments);
        } finally {
          d = ee;
        }
      };
    });
})(rm);
nm.exports = rm;
var P0 = nm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L0 = p,
  Kt = P0;
function U(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var im = new Set(),
  ms = {};
function _i(e, t) {
  lo(e, t), lo(e + "Capture", t);
}
function lo(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) im.add(t[e]);
}
var cr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bc = Object.prototype.hasOwnProperty,
  I0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ap = {},
  lp = {};
function D0(e) {
  return bc.call(lp, e)
    ? !0
    : bc.call(ap, e)
    ? !1
    : I0.test(e)
    ? (lp[e] = !0)
    : ((ap[e] = !0), !1);
}
function N0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function j0(e, t, n, r) {
  if (t === null || typeof t > "u" || N0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ct(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var gt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    gt[e] = new Ct(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  gt[t] = new Ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  gt[e] = new Ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  gt[e] = new Ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    gt[e] = new Ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  gt[e] = new Ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  gt[e] = new Ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  gt[e] = new Ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  gt[e] = new Ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gf = /[\-:]([a-z])/g;
function Yf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gf, Yf);
    gt[t] = new Ct(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gf, Yf);
    gt[t] = new Ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gf, Yf);
  gt[t] = new Ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  gt[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
gt.xlinkHref = new Ct(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  gt[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qf(e, t, n, r) {
  var i = gt.hasOwnProperty(t) ? gt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (j0(t, n, i, r) && (n = null),
    r || i === null
      ? D0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mr = L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  aa = Symbol.for("react.element"),
  Fi = Symbol.for("react.portal"),
  Ui = Symbol.for("react.fragment"),
  Jf = Symbol.for("react.strict_mode"),
  xc = Symbol.for("react.profiler"),
  om = Symbol.for("react.provider"),
  sm = Symbol.for("react.context"),
  Xf = Symbol.for("react.forward_ref"),
  kc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.suspense_list"),
  Zf = Symbol.for("react.memo"),
  _r = Symbol.for("react.lazy"),
  am = Symbol.for("react.offscreen"),
  up = Symbol.iterator;
function No(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (up && e[up]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fe = Object.assign,
  Ru;
function Zo(e) {
  if (Ru === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ru = (t && t[1]) || "";
    }
  return (
    `
` +
    Ru +
    e
  );
}
var Au = !1;
function Pu(e, t) {
  if (!e || Au) return "";
  Au = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Au = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Zo(e) : "";
}
function $0(e) {
  switch (e.tag) {
    case 5:
      return Zo(e.type);
    case 16:
      return Zo("Lazy");
    case 13:
      return Zo("Suspense");
    case 19:
      return Zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Pu(e.type, !1)), e;
    case 11:
      return (e = Pu(e.type.render, !1)), e;
    case 1:
      return (e = Pu(e.type, !0)), e;
    default:
      return "";
  }
}
function Tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ui:
      return "Fragment";
    case Fi:
      return "Portal";
    case xc:
      return "Profiler";
    case Jf:
      return "StrictMode";
    case kc:
      return "Suspense";
    case Ec:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sm:
        return (e.displayName || "Context") + ".Consumer";
      case om:
        return (e._context.displayName || "Context") + ".Provider";
      case Xf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zf:
        return (
          (t = e.displayName || null), t !== null ? t : Tc(e.type) || "Memo"
        );
      case _r:
        (t = e._payload), (e = e._init);
        try {
          return Tc(e(t));
        } catch {}
    }
  return null;
}
function M0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Tc(t);
    case 8:
      return t === Jf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $r(e) {
  switch (typeof e) {
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
function lm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function F0(e) {
  var t = lm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function la(e) {
  e._valueTracker || (e._valueTracker = F0(e));
}
function um(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = lm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oc(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $r(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cm(e, t) {
  (t = t.checked), t != null && Qf(e, "checked", t, !1);
}
function Cc(e, t) {
  cm(e, t);
  var n = $r(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Rc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Rc(e, t.type, $r(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Rc(e, t, n) {
  (t !== "number" || Qa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var es = Array.isArray;
function eo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $r(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ac(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function dp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92));
      if (es(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $r(n) };
}
function fm(e, t) {
  var n = $r(t.value),
    r = $r(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ua,
  pm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ua = ua || document.createElement("div"),
          ua.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ua.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ys(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var is = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  U0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(is).forEach(function (e) {
  U0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (is[t] = is[e]);
  });
});
function hm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (is.hasOwnProperty(e) && is[e])
    ? ("" + t).trim()
    : t + "px";
}
function gm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = hm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var B0 = Fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lc(e, t) {
  if (t) {
    if (B0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function Ic(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Dc = null;
function ed(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nc = null,
  to = null,
  no = null;
function hp(e) {
  if ((e = Hs(e))) {
    if (typeof Nc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = Vl(t)), Nc(e.stateNode, e.type, t));
  }
}
function mm(e) {
  to ? (no ? no.push(e) : (no = [e])) : (to = e);
}
function ym() {
  if (to) {
    var e = to,
      t = no;
    if (((no = to = null), hp(e), t)) for (e = 0; e < t.length; e++) hp(t[e]);
  }
}
function vm(e, t) {
  return e(t);
}
function wm() {}
var Lu = !1;
function Sm(e, t, n) {
  if (Lu) return e(t, n);
  Lu = !0;
  try {
    return vm(e, t, n);
  } finally {
    (Lu = !1), (to !== null || no !== null) && (wm(), ym());
  }
}
function vs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var jc = !1;
if (cr)
  try {
    var jo = {};
    Object.defineProperty(jo, "passive", {
      get: function () {
        jc = !0;
      },
    }),
      window.addEventListener("test", jo, jo),
      window.removeEventListener("test", jo, jo);
  } catch {
    jc = !1;
  }
function z0(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var os = !1,
  Ja = null,
  Xa = !1,
  $c = null,
  V0 = {
    onError: function (e) {
      (os = !0), (Ja = e);
    },
  };
function H0(e, t, n, r, i, o, s, a, l) {
  (os = !1), (Ja = null), z0.apply(V0, arguments);
}
function W0(e, t, n, r, i, o, s, a, l) {
  if ((H0.apply(this, arguments), os)) {
    if (os) {
      var u = Ja;
      (os = !1), (Ja = null);
    } else throw Error(U(198));
    Xa || ((Xa = !0), ($c = u));
  }
}
function bi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _m(e) {
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
function gp(e) {
  if (bi(e) !== e) throw Error(U(188));
}
function q0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = bi(e)), t === null)) throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return gp(i), e;
        if (o === r) return gp(i), t;
        o = o.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function bm(e) {
  return (e = q0(e)), e !== null ? xm(e) : null;
}
function xm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var km = Kt.unstable_scheduleCallback,
  mp = Kt.unstable_cancelCallback,
  K0 = Kt.unstable_shouldYield,
  G0 = Kt.unstable_requestPaint,
  qe = Kt.unstable_now,
  Y0 = Kt.unstable_getCurrentPriorityLevel,
  td = Kt.unstable_ImmediatePriority,
  Em = Kt.unstable_UserBlockingPriority,
  Za = Kt.unstable_NormalPriority,
  Q0 = Kt.unstable_LowPriority,
  Tm = Kt.unstable_IdlePriority,
  Fl = null,
  Hn = null;
function J0(e) {
  if (Hn && typeof Hn.onCommitFiberRoot == "function")
    try {
      Hn.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xn = Math.clz32 ? Math.clz32 : ew,
  X0 = Math.log,
  Z0 = Math.LN2;
function ew(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((X0(e) / Z0) | 0)) | 0;
}
var ca = 64,
  fa = 4194304;
function ts(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = ts(a)) : ((o &= s), o !== 0 && (r = ts(o)));
  } else (s = n & ~i), s !== 0 ? (r = ts(s)) : o !== 0 && (r = ts(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function tw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - xn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = tw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Mc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Om() {
  var e = ca;
  return (ca <<= 1), !(ca & 4194240) && (ca = 64), e;
}
function Iu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xn(t)),
    (e[t] = n);
}
function rw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - xn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function nd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Ee = 0;
function Cm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rm,
  rd,
  Am,
  Pm,
  Lm,
  Fc = !1,
  da = [],
  Rr = null,
  Ar = null,
  Pr = null,
  ws = new Map(),
  Ss = new Map(),
  xr = [],
  iw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function yp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rr = null;
      break;
    case "dragenter":
    case "dragleave":
      Ar = null;
      break;
    case "mouseover":
    case "mouseout":
      Pr = null;
      break;
    case "pointerover":
    case "pointerout":
      ws.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ss.delete(t.pointerId);
  }
}
function $o(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Hs(t)), t !== null && rd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ow(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Rr = $o(Rr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ar = $o(Ar, e, t, n, r, i)), !0;
    case "mouseover":
      return (Pr = $o(Pr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ws.set(o, $o(ws.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ss.set(o, $o(Ss.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Im(e) {
  var t = Xr(e.target);
  if (t !== null) {
    var n = bi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _m(n)), t !== null)) {
          (e.blockedOn = t),
            Lm(e.priority, function () {
              Am(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Dc = r), n.target.dispatchEvent(r), (Dc = null);
    } else return (t = Hs(n)), t !== null && rd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vp(e, t, n) {
  Pa(e) && n.delete(t);
}
function sw() {
  (Fc = !1),
    Rr !== null && Pa(Rr) && (Rr = null),
    Ar !== null && Pa(Ar) && (Ar = null),
    Pr !== null && Pa(Pr) && (Pr = null),
    ws.forEach(vp),
    Ss.forEach(vp);
}
function Mo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fc ||
      ((Fc = !0),
      Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority, sw)));
}
function _s(e) {
  function t(i) {
    return Mo(i, e);
  }
  if (0 < da.length) {
    Mo(da[0], e);
    for (var n = 1; n < da.length; n++) {
      var r = da[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rr !== null && Mo(Rr, e),
      Ar !== null && Mo(Ar, e),
      Pr !== null && Mo(Pr, e),
      ws.forEach(t),
      Ss.forEach(t),
      n = 0;
    n < xr.length;
    n++
  )
    (r = xr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xr.length && ((n = xr[0]), n.blockedOn === null); )
    Im(n), n.blockedOn === null && xr.shift();
}
var ro = mr.ReactCurrentBatchConfig,
  tl = !0;
function aw(e, t, n, r) {
  var i = Ee,
    o = ro.transition;
  ro.transition = null;
  try {
    (Ee = 1), id(e, t, n, r);
  } finally {
    (Ee = i), (ro.transition = o);
  }
}
function lw(e, t, n, r) {
  var i = Ee,
    o = ro.transition;
  ro.transition = null;
  try {
    (Ee = 4), id(e, t, n, r);
  } finally {
    (Ee = i), (ro.transition = o);
  }
}
function id(e, t, n, r) {
  if (tl) {
    var i = Uc(e, t, n, r);
    if (i === null) Vu(e, t, r, nl, n), yp(e, r);
    else if (ow(i, e, t, n, r)) r.stopPropagation();
    else if ((yp(e, r), t & 4 && -1 < iw.indexOf(e))) {
      for (; i !== null; ) {
        var o = Hs(i);
        if (
          (o !== null && Rm(o),
          (o = Uc(e, t, n, r)),
          o === null && Vu(e, t, r, nl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Vu(e, t, r, null, n);
  }
}
var nl = null;
function Uc(e, t, n, r) {
  if (((nl = null), (e = ed(r)), (e = Xr(e)), e !== null))
    if (((t = bi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _m(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function Dm(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Y0()) {
        case td:
          return 1;
        case Em:
          return 4;
        case Za:
        case Q0:
          return 16;
        case Tm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Er = null,
  od = null,
  La = null;
function Nm() {
  if (La) return La;
  var e,
    t = od,
    n = t.length,
    r,
    i = "value" in Er ? Er.value : Er.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (La = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ia(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pa() {
  return !0;
}
function wp() {
  return !1;
}
function Yt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pa
        : wp),
      (this.isPropagationStopped = wp),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pa));
      },
      persist: function () {},
      isPersistent: pa,
    }),
    t
  );
}
var _o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sd = Yt(_o),
  Vs = Fe({}, _o, { view: 0, detail: 0 }),
  uw = Yt(Vs),
  Du,
  Nu,
  Fo,
  Ul = Fe({}, Vs, {
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
    getModifierState: ad,
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
        : (e !== Fo &&
            (Fo && e.type === "mousemove"
              ? ((Du = e.screenX - Fo.screenX), (Nu = e.screenY - Fo.screenY))
              : (Nu = Du = 0),
            (Fo = e)),
          Du);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nu;
    },
  }),
  Sp = Yt(Ul),
  cw = Fe({}, Ul, { dataTransfer: 0 }),
  fw = Yt(cw),
  dw = Fe({}, Vs, { relatedTarget: 0 }),
  ju = Yt(dw),
  pw = Fe({}, _o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hw = Yt(pw),
  gw = Fe({}, _o, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mw = Yt(gw),
  yw = Fe({}, _o, { data: 0 }),
  _p = Yt(yw),
  vw = {
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
  ww = {
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
  Sw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _w(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sw[e]) ? !!t[e] : !1;
}
function ad() {
  return _w;
}
var bw = Fe({}, Vs, {
    key: function (e) {
      if (e.key) {
        var t = vw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ia(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ww[e.keyCode] || "Unidentified"
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
    getModifierState: ad,
    charCode: function (e) {
      return e.type === "keypress" ? Ia(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ia(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xw = Yt(bw),
  kw = Fe({}, Ul, {
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
  bp = Yt(kw),
  Ew = Fe({}, Vs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ad,
  }),
  Tw = Yt(Ew),
  Ow = Fe({}, _o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cw = Yt(Ow),
  Rw = Fe({}, Ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Aw = Yt(Rw),
  Pw = [9, 13, 27, 32],
  ld = cr && "CompositionEvent" in window,
  ss = null;
cr && "documentMode" in document && (ss = document.documentMode);
var Lw = cr && "TextEvent" in window && !ss,
  jm = cr && (!ld || (ss && 8 < ss && 11 >= ss)),
  xp = " ",
  kp = !1;
function $m(e, t) {
  switch (e) {
    case "keyup":
      return Pw.indexOf(t.keyCode) !== -1;
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
function Mm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bi = !1;
function Iw(e, t) {
  switch (e) {
    case "compositionend":
      return Mm(t);
    case "keypress":
      return t.which !== 32 ? null : ((kp = !0), xp);
    case "textInput":
      return (e = t.data), e === xp && kp ? null : e;
    default:
      return null;
  }
}
function Dw(e, t) {
  if (Bi)
    return e === "compositionend" || (!ld && $m(e, t))
      ? ((e = Nm()), (La = od = Er = null), (Bi = !1), e)
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
      return jm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nw = {
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
function Ep(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nw[e.type] : t === "textarea";
}
function Fm(e, t, n, r) {
  mm(r),
    (t = rl(t, "onChange")),
    0 < t.length &&
      ((n = new sd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var as = null,
  bs = null;
function jw(e) {
  Qm(e, 0);
}
function Bl(e) {
  var t = Hi(e);
  if (um(t)) return e;
}
function $w(e, t) {
  if (e === "change") return t;
}
var Um = !1;
if (cr) {
  var $u;
  if (cr) {
    var Mu = "oninput" in document;
    if (!Mu) {
      var Tp = document.createElement("div");
      Tp.setAttribute("oninput", "return;"),
        (Mu = typeof Tp.oninput == "function");
    }
    $u = Mu;
  } else $u = !1;
  Um = $u && (!document.documentMode || 9 < document.documentMode);
}
function Op() {
  as && (as.detachEvent("onpropertychange", Bm), (bs = as = null));
}
function Bm(e) {
  if (e.propertyName === "value" && Bl(bs)) {
    var t = [];
    Fm(t, bs, e, ed(e)), Sm(jw, t);
  }
}
function Mw(e, t, n) {
  e === "focusin"
    ? (Op(), (as = t), (bs = n), as.attachEvent("onpropertychange", Bm))
    : e === "focusout" && Op();
}
function Fw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bl(bs);
}
function Uw(e, t) {
  if (e === "click") return Bl(t);
}
function Bw(e, t) {
  if (e === "input" || e === "change") return Bl(t);
}
function zw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var On = typeof Object.is == "function" ? Object.is : zw;
function xs(e, t) {
  if (On(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!bc.call(t, i) || !On(e[i], t[i])) return !1;
  }
  return !0;
}
function Cp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rp(e, t) {
  var n = Cp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cp(n);
  }
}
function zm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vm() {
  for (var e = window, t = Qa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qa(e.document);
  }
  return t;
}
function ud(e) {
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
function Vw(e) {
  var t = Vm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ud(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Rp(n, o));
        var s = Rp(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hw = cr && "documentMode" in document && 11 >= document.documentMode,
  zi = null,
  Bc = null,
  ls = null,
  zc = !1;
function Ap(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zc ||
    zi == null ||
    zi !== Qa(r) ||
    ((r = zi),
    "selectionStart" in r && ud(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ls && xs(ls, r)) ||
      ((ls = r),
      (r = rl(Bc, "onSelect")),
      0 < r.length &&
        ((t = new sd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zi))));
}
function ha(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vi = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionend: ha("Transition", "TransitionEnd"),
  },
  Fu = {},
  Hm = {};
cr &&
  ((Hm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vi.animationend.animation,
    delete Vi.animationiteration.animation,
    delete Vi.animationstart.animation),
  "TransitionEvent" in window || delete Vi.transitionend.transition);
function zl(e) {
  if (Fu[e]) return Fu[e];
  if (!Vi[e]) return e;
  var t = Vi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hm) return (Fu[e] = t[n]);
  return e;
}
var Wm = zl("animationend"),
  qm = zl("animationiteration"),
  Km = zl("animationstart"),
  Gm = zl("transitionend"),
  Ym = new Map(),
  Pp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Fr(e, t) {
  Ym.set(e, t), _i(t, [e]);
}
for (var Uu = 0; Uu < Pp.length; Uu++) {
  var Bu = Pp[Uu],
    Ww = Bu.toLowerCase(),
    qw = Bu[0].toUpperCase() + Bu.slice(1);
  Fr(Ww, "on" + qw);
}
Fr(Wm, "onAnimationEnd");
Fr(qm, "onAnimationIteration");
Fr(Km, "onAnimationStart");
Fr("dblclick", "onDoubleClick");
Fr("focusin", "onFocus");
Fr("focusout", "onBlur");
Fr(Gm, "onTransitionEnd");
lo("onMouseEnter", ["mouseout", "mouseover"]);
lo("onMouseLeave", ["mouseout", "mouseover"]);
lo("onPointerEnter", ["pointerout", "pointerover"]);
lo("onPointerLeave", ["pointerout", "pointerover"]);
_i(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_i(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_i("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_i(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_i(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_i(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ns =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
function Lp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), W0(r, t, void 0, e), (e.currentTarget = null);
}
function Qm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Lp(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Lp(i, a, u), (o = l);
        }
    }
  }
  if (Xa) throw ((e = $c), (Xa = !1), ($c = null), e);
}
function Pe(e, t) {
  var n = t[Kc];
  n === void 0 && (n = t[Kc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Jm(t, e, 2, !1), n.add(r));
}
function zu(e, t, n) {
  var r = 0;
  t && (r |= 4), Jm(n, e, r, t);
}
var ga = "_reactListening" + Math.random().toString(36).slice(2);
function ks(e) {
  if (!e[ga]) {
    (e[ga] = !0),
      im.forEach(function (n) {
        n !== "selectionchange" && (Kw.has(n) || zu(n, !1, e), zu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ga] || ((t[ga] = !0), zu("selectionchange", !1, t));
  }
}
function Jm(e, t, n, r) {
  switch (Dm(t)) {
    case 1:
      var i = aw;
      break;
    case 4:
      i = lw;
      break;
    default:
      i = id;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !jc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Vu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Xr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Sm(function () {
    var u = o,
      c = ed(n),
      f = [];
    e: {
      var d = Ym.get(e);
      if (d !== void 0) {
        var g = sd,
          v = e;
        switch (e) {
          case "keypress":
            if (Ia(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = xw;
            break;
          case "focusin":
            (v = "focus"), (g = ju);
            break;
          case "focusout":
            (v = "blur"), (g = ju);
            break;
          case "beforeblur":
          case "afterblur":
            g = ju;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Sp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = fw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Tw;
            break;
          case Wm:
          case qm:
          case Km:
            g = hw;
            break;
          case Gm:
            g = Cw;
            break;
          case "scroll":
            g = uw;
            break;
          case "wheel":
            g = Aw;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = mw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bp;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          m = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, w; h !== null; ) {
          w = h;
          var E = w.stateNode;
          if (
            (w.tag === 5 &&
              E !== null &&
              ((w = E),
              m !== null && ((E = vs(h, m)), E != null && y.push(Es(h, E, w)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Dc &&
            (v = n.relatedTarget || n.fromElement) &&
            (Xr(v) || v[fr]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? Xr(v) : null),
              v !== null &&
                ((x = bi(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Sp),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = bp),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (x = g == null ? d : Hi(g)),
            (w = v == null ? d : Hi(v)),
            (d = new y(E, h + "leave", g, n, c)),
            (d.target = x),
            (d.relatedTarget = w),
            (E = null),
            Xr(c) === u &&
              ((y = new y(m, h + "enter", v, n, c)),
              (y.target = w),
              (y.relatedTarget = x),
              (E = y)),
            (x = E),
            g && v)
          )
            t: {
              for (y = g, m = v, h = 0, w = y; w; w = Li(w)) h++;
              for (w = 0, E = m; E; E = Li(E)) w++;
              for (; 0 < h - w; ) (y = Li(y)), h--;
              for (; 0 < w - h; ) (m = Li(m)), w--;
              for (; h--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Li(y)), (m = Li(m));
              }
              y = null;
            }
          else y = null;
          g !== null && Ip(f, d, g, y, !1),
            v !== null && x !== null && Ip(f, x, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Hi(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var R = $w;
        else if (Ep(d))
          if (Um) R = Bw;
          else {
            R = Fw;
            var S = Mw;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (R = Uw);
        if (R && (R = R(e, u))) {
          Fm(f, R, n, c);
          break e;
        }
        S && S(e, d, u),
          e === "focusout" &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === "number" &&
            Rc(d, "number", d.value);
      }
      switch (((S = u ? Hi(u) : window), e)) {
        case "focusin":
          (Ep(S) || S.contentEditable === "true") &&
            ((zi = S), (Bc = u), (ls = null));
          break;
        case "focusout":
          ls = Bc = zi = null;
          break;
        case "mousedown":
          zc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zc = !1), Ap(f, n, c);
          break;
        case "selectionchange":
          if (Hw) break;
        case "keydown":
        case "keyup":
          Ap(f, n, c);
      }
      var $;
      if (ld)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Bi
          ? $m(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (jm &&
          n.locale !== "ko" &&
          (Bi || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Bi && ($ = Nm())
            : ((Er = c),
              (od = "value" in Er ? Er.value : Er.textContent),
              (Bi = !0))),
        (S = rl(u, O)),
        0 < S.length &&
          ((O = new _p(O, e, null, n, c)),
          f.push({ event: O, listeners: S }),
          $ ? (O.data = $) : (($ = Mm(n)), $ !== null && (O.data = $)))),
        ($ = Lw ? Iw(e, n) : Dw(e, n)) &&
          ((u = rl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new _p("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = $)));
    }
    Qm(f, t);
  });
}
function Es(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = vs(e, n)),
      o != null && r.unshift(Es(e, o, i)),
      (o = vs(e, t)),
      o != null && r.push(Es(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Li(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ip(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = vs(n, o)), l != null && s.unshift(Es(n, l, a)))
        : i || ((l = vs(n, o)), l != null && s.push(Es(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gw = /\r\n?/g,
  Yw = /\u0000|\uFFFD/g;
function Dp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gw,
      `
`
    )
    .replace(Yw, "");
}
function ma(e, t, n) {
  if (((t = Dp(t)), Dp(e) !== t && n)) throw Error(U(425));
}
function il() {}
var Vc = null,
  Hc = null;
function Wc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qc = typeof setTimeout == "function" ? setTimeout : void 0,
  Qw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Np = typeof Promise == "function" ? Promise : void 0,
  Jw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Np < "u"
      ? function (e) {
          return Np.resolve(null).then(e).catch(Xw);
        }
      : qc;
function Xw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), _s(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  _s(t);
}
function Lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function jp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bo = Math.random().toString(36).slice(2),
  Un = "__reactFiber$" + bo,
  Ts = "__reactProps$" + bo,
  fr = "__reactContainer$" + bo,
  Kc = "__reactEvents$" + bo,
  Zw = "__reactListeners$" + bo,
  e2 = "__reactHandles$" + bo;
function Xr(e) {
  var t = e[Un];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[fr] || n[Un])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = jp(e); e !== null; ) {
          if ((n = e[Un])) return n;
          e = jp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Hs(e) {
  return (
    (e = e[Un] || e[fr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function Vl(e) {
  return e[Ts] || null;
}
var Gc = [],
  Wi = -1;
function Ur(e) {
  return { current: e };
}
function Le(e) {
  0 > Wi || ((e.current = Gc[Wi]), (Gc[Wi] = null), Wi--);
}
function Re(e, t) {
  Wi++, (Gc[Wi] = e.current), (e.current = t);
}
var Mr = {},
  _t = Ur(Mr),
  It = Ur(!1),
  ui = Mr;
function uo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Dt(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  Le(It), Le(_t);
}
function $p(e, t, n) {
  if (_t.current !== Mr) throw Error(U(168));
  Re(_t, t), Re(It, n);
}
function Xm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(U(108, M0(e) || "Unknown", i));
  return Fe({}, n, r);
}
function sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mr),
    (ui = _t.current),
    Re(_t, e),
    Re(It, It.current),
    !0
  );
}
function Mp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n
    ? ((e = Xm(e, t, ui)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Le(It),
      Le(_t),
      Re(_t, e))
    : Le(It),
    Re(It, n);
}
var tr = null,
  Hl = !1,
  Wu = !1;
function Zm(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
function t2(e) {
  (Hl = !0), Zm(e);
}
function Br() {
  if (!Wu && tr !== null) {
    Wu = !0;
    var e = 0,
      t = Ee;
    try {
      var n = tr;
      for (Ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tr = null), (Hl = !1);
    } catch (i) {
      throw (tr !== null && (tr = tr.slice(e + 1)), km(td, Br), i);
    } finally {
      (Ee = t), (Wu = !1);
    }
  }
  return null;
}
var qi = [],
  Ki = 0,
  al = null,
  ll = 0,
  rn = [],
  on = 0,
  ci = null,
  ir = 1,
  or = "";
function Gr(e, t) {
  (qi[Ki++] = ll), (qi[Ki++] = al), (al = e), (ll = t);
}
function ey(e, t, n) {
  (rn[on++] = ir), (rn[on++] = or), (rn[on++] = ci), (ci = e);
  var r = ir;
  e = or;
  var i = 32 - xn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - xn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ir = (1 << (32 - xn(t) + i)) | (n << i) | r),
      (or = o + e);
  } else (ir = (1 << o) | (n << i) | r), (or = e);
}
function cd(e) {
  e.return !== null && (Gr(e, 1), ey(e, 1, 0));
}
function fd(e) {
  for (; e === al; )
    (al = qi[--Ki]), (qi[Ki] = null), (ll = qi[--Ki]), (qi[Ki] = null);
  for (; e === ci; )
    (ci = rn[--on]),
      (rn[on] = null),
      (or = rn[--on]),
      (rn[on] = null),
      (ir = rn[--on]),
      (rn[on] = null);
}
var Wt = null,
  Ht = null,
  je = !1,
  Sn = null;
function ty(e, t) {
  var n = ln(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Wt = e), (Ht = Lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Wt = e), (Ht = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ci !== null ? { id: ir, overflow: or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ln(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Wt = e),
            (Ht = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qc(e) {
  if (je) {
    var t = Ht;
    if (t) {
      var n = t;
      if (!Fp(e, t)) {
        if (Yc(e)) throw Error(U(418));
        t = Lr(n.nextSibling);
        var r = Wt;
        t && Fp(e, t)
          ? ty(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (je = !1), (Wt = e));
      }
    } else {
      if (Yc(e)) throw Error(U(418));
      (e.flags = (e.flags & -4097) | 2), (je = !1), (Wt = e);
    }
  }
}
function Up(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Wt = e;
}
function ya(e) {
  if (e !== Wt) return !1;
  if (!je) return Up(e), (je = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wc(e.type, e.memoizedProps))),
    t && (t = Ht))
  ) {
    if (Yc(e)) throw (ny(), Error(U(418)));
    for (; t; ) ty(e, t), (t = Lr(t.nextSibling));
  }
  if ((Up(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ht = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ht = null;
    }
  } else Ht = Wt ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function ny() {
  for (var e = Ht; e; ) e = Lr(e.nextSibling);
}
function co() {
  (Ht = Wt = null), (je = !1);
}
function dd(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
var n2 = mr.ReactCurrentBatchConfig;
function Uo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function va(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bp(e) {
  var t = e._init;
  return t(e._payload);
}
function ry(e) {
  function t(m, h) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [h]), (m.flags |= 16)) : w.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = jr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < h ? ((m.flags |= 2), h) : w)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, w, E) {
    return h === null || h.tag !== 6
      ? ((h = Xu(w, m.mode, E)), (h.return = m), h)
      : ((h = i(h, w)), (h.return = m), h);
  }
  function l(m, h, w, E) {
    var R = w.type;
    return R === Ui
      ? c(m, h, w.props.children, E, w.key)
      : h !== null &&
        (h.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === _r &&
            Bp(R) === h.type))
      ? ((E = i(h, w.props)), (E.ref = Uo(m, h, w)), (E.return = m), E)
      : ((E = Ua(w.type, w.key, w.props, null, m.mode, E)),
        (E.ref = Uo(m, h, w)),
        (E.return = m),
        E);
  }
  function u(m, h, w, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== w.containerInfo ||
      h.stateNode.implementation !== w.implementation
      ? ((h = Zu(w, m.mode, E)), (h.return = m), h)
      : ((h = i(h, w.children || [])), (h.return = m), h);
  }
  function c(m, h, w, E, R) {
    return h === null || h.tag !== 7
      ? ((h = oi(w, m.mode, E, R)), (h.return = m), h)
      : ((h = i(h, w)), (h.return = m), h);
  }
  function f(m, h, w) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Xu("" + h, m.mode, w)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case aa:
          return (
            (w = Ua(h.type, h.key, h.props, null, m.mode, w)),
            (w.ref = Uo(m, null, h)),
            (w.return = m),
            w
          );
        case Fi:
          return (h = Zu(h, m.mode, w)), (h.return = m), h;
        case _r:
          var E = h._init;
          return f(m, E(h._payload), w);
      }
      if (es(h) || No(h))
        return (h = oi(h, m.mode, w, null)), (h.return = m), h;
      va(m, h);
    }
    return null;
  }
  function d(m, h, w, E) {
    var R = h !== null ? h.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return R !== null ? null : a(m, h, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case aa:
          return w.key === R ? l(m, h, w, E) : null;
        case Fi:
          return w.key === R ? u(m, h, w, E) : null;
        case _r:
          return (R = w._init), d(m, h, R(w._payload), E);
      }
      if (es(w) || No(w)) return R !== null ? null : c(m, h, w, E, null);
      va(m, w);
    }
    return null;
  }
  function g(m, h, w, E, R) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(w) || null), a(h, m, "" + E, R);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case aa:
          return (m = m.get(E.key === null ? w : E.key) || null), l(h, m, E, R);
        case Fi:
          return (m = m.get(E.key === null ? w : E.key) || null), u(h, m, E, R);
        case _r:
          var S = E._init;
          return g(m, h, w, S(E._payload), R);
      }
      if (es(E) || No(E)) return (m = m.get(w) || null), c(h, m, E, R, null);
      va(h, E);
    }
    return null;
  }
  function v(m, h, w, E) {
    for (
      var R = null, S = null, $ = h, O = (h = 0), W = null;
      $ !== null && O < w.length;
      O++
    ) {
      $.index > O ? ((W = $), ($ = null)) : (W = $.sibling);
      var q = d(m, $, w[O], E);
      if (q === null) {
        $ === null && ($ = W);
        break;
      }
      e && $ && q.alternate === null && t(m, $),
        (h = o(q, h, O)),
        S === null ? (R = q) : (S.sibling = q),
        (S = q),
        ($ = W);
    }
    if (O === w.length) return n(m, $), je && Gr(m, O), R;
    if ($ === null) {
      for (; O < w.length; O++)
        ($ = f(m, w[O], E)),
          $ !== null &&
            ((h = o($, h, O)), S === null ? (R = $) : (S.sibling = $), (S = $));
      return je && Gr(m, O), R;
    }
    for ($ = r(m, $); O < w.length; O++)
      (W = g($, m, O, w[O], E)),
        W !== null &&
          (e && W.alternate !== null && $.delete(W.key === null ? O : W.key),
          (h = o(W, h, O)),
          S === null ? (R = W) : (S.sibling = W),
          (S = W));
    return (
      e &&
        $.forEach(function (ie) {
          return t(m, ie);
        }),
      je && Gr(m, O),
      R
    );
  }
  function y(m, h, w, E) {
    var R = No(w);
    if (typeof R != "function") throw Error(U(150));
    if (((w = R.call(w)), w == null)) throw Error(U(151));
    for (
      var S = (R = null), $ = h, O = (h = 0), W = null, q = w.next();
      $ !== null && !q.done;
      O++, q = w.next()
    ) {
      $.index > O ? ((W = $), ($ = null)) : (W = $.sibling);
      var ie = d(m, $, q.value, E);
      if (ie === null) {
        $ === null && ($ = W);
        break;
      }
      e && $ && ie.alternate === null && t(m, $),
        (h = o(ie, h, O)),
        S === null ? (R = ie) : (S.sibling = ie),
        (S = ie),
        ($ = W);
    }
    if (q.done) return n(m, $), je && Gr(m, O), R;
    if ($ === null) {
      for (; !q.done; O++, q = w.next())
        (q = f(m, q.value, E)),
          q !== null &&
            ((h = o(q, h, O)), S === null ? (R = q) : (S.sibling = q), (S = q));
      return je && Gr(m, O), R;
    }
    for ($ = r(m, $); !q.done; O++, q = w.next())
      (q = g($, m, O, q.value, E)),
        q !== null &&
          (e && q.alternate !== null && $.delete(q.key === null ? O : q.key),
          (h = o(q, h, O)),
          S === null ? (R = q) : (S.sibling = q),
          (S = q));
    return (
      e &&
        $.forEach(function (pe) {
          return t(m, pe);
        }),
      je && Gr(m, O),
      R
    );
  }
  function x(m, h, w, E) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Ui &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case aa:
          e: {
            for (var R = w.key, S = h; S !== null; ) {
              if (S.key === R) {
                if (((R = w.type), R === Ui)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (h = i(S, w.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  S.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === _r &&
                    Bp(R) === S.type)
                ) {
                  n(m, S.sibling),
                    (h = i(S, w.props)),
                    (h.ref = Uo(m, S, w)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            w.type === Ui
              ? ((h = oi(w.props.children, m.mode, E, w.key)),
                (h.return = m),
                (m = h))
              : ((E = Ua(w.type, w.key, w.props, null, m.mode, E)),
                (E.ref = Uo(m, h, w)),
                (E.return = m),
                (m = E));
          }
          return s(m);
        case Fi:
          e: {
            for (S = w.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === w.containerInfo &&
                  h.stateNode.implementation === w.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, w.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Zu(w, m.mode, E)), (h.return = m), (m = h);
          }
          return s(m);
        case _r:
          return (S = w._init), x(m, h, S(w._payload), E);
      }
      if (es(w)) return v(m, h, w, E);
      if (No(w)) return y(m, h, w, E);
      va(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, w)), (h.return = m), (m = h))
          : (n(m, h), (h = Xu(w, m.mode, E)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return x;
}
var fo = ry(!0),
  iy = ry(!1),
  ul = Ur(null),
  cl = null,
  Gi = null,
  pd = null;
function hd() {
  pd = Gi = cl = null;
}
function gd(e) {
  var t = ul.current;
  Le(ul), (e._currentValue = t);
}
function Jc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function io(e, t) {
  (cl = e),
    (pd = Gi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Lt = !0), (e.firstContext = null));
}
function dn(e) {
  var t = e._currentValue;
  if (pd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gi === null)) {
      if (cl === null) throw Error(U(308));
      (Gi = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else Gi = Gi.next = e;
  return t;
}
var Zr = null;
function md(e) {
  Zr === null ? (Zr = [e]) : Zr.push(e);
}
function oy(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), md(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    dr(e, r)
  );
}
function dr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var br = !1;
function yd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function sr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ir(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ye & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      dr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), md(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    dr(e, n)
  );
}
function Da(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nd(e, n);
  }
}
function zp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fl(e, t, n, r) {
  var i = e.updateQueue;
  br = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((d = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(g, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(g, f, d) : v),
                d == null)
              )
                break e;
              f = Fe({}, f, d);
              break e;
            case 2:
              br = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (di |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Vp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(U(191, i));
        i.call(r);
      }
    }
}
var Ws = {},
  Wn = Ur(Ws),
  Os = Ur(Ws),
  Cs = Ur(Ws);
function ei(e) {
  if (e === Ws) throw Error(U(174));
  return e;
}
function vd(e, t) {
  switch ((Re(Cs, t), Re(Os, e), Re(Wn, Ws), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pc(t, e));
  }
  Le(Wn), Re(Wn, t);
}
function po() {
  Le(Wn), Le(Os), Le(Cs);
}
function ay(e) {
  ei(Cs.current);
  var t = ei(Wn.current),
    n = Pc(t, e.type);
  t !== n && (Re(Os, e), Re(Wn, n));
}
function wd(e) {
  Os.current === e && (Le(Wn), Le(Os));
}
var $e = Ur(0);
function dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qu = [];
function Sd() {
  for (var e = 0; e < qu.length; e++)
    qu[e]._workInProgressVersionPrimary = null;
  qu.length = 0;
}
var Na = mr.ReactCurrentDispatcher,
  Ku = mr.ReactCurrentBatchConfig,
  fi = 0,
  Me = null,
  tt = null,
  ut = null,
  pl = !1,
  us = !1,
  Rs = 0,
  r2 = 0;
function yt() {
  throw Error(U(321));
}
function _d(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!On(e[n], t[n])) return !1;
  return !0;
}
function bd(e, t, n, r, i, o) {
  if (
    ((fi = o),
    (Me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Na.current = e === null || e.memoizedState === null ? a2 : l2),
    (e = n(r, i)),
    us)
  ) {
    o = 0;
    do {
      if (((us = !1), (Rs = 0), 25 <= o)) throw Error(U(301));
      (o += 1),
        (ut = tt = null),
        (t.updateQueue = null),
        (Na.current = u2),
        (e = n(r, i));
    } while (us);
  }
  if (
    ((Na.current = hl),
    (t = tt !== null && tt.next !== null),
    (fi = 0),
    (ut = tt = Me = null),
    (pl = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function xd() {
  var e = Rs !== 0;
  return (Rs = 0), e;
}
function Fn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ut === null ? (Me.memoizedState = ut = e) : (ut = ut.next = e), ut;
}
function pn() {
  if (tt === null) {
    var e = Me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = tt.next;
  var t = ut === null ? Me.memoizedState : ut.next;
  if (t !== null) (ut = t), (tt = e);
  else {
    if (e === null) throw Error(U(310));
    (tt = e),
      (e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null,
      }),
      ut === null ? (Me.memoizedState = ut = e) : (ut = ut.next = e);
  }
  return ut;
}
function As(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gu(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = tt,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((fi & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Me.lanes |= c),
          (di |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      On(r, t.memoizedState) || (Lt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Me.lanes |= o), (di |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yu(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    On(o, t.memoizedState) || (Lt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ly() {}
function uy(e, t) {
  var n = Me,
    r = pn(),
    i = t(),
    o = !On(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Lt = !0)),
    (r = r.queue),
    kd(dy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ut !== null && ut.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ps(9, fy.bind(null, n, r, i, t), void 0, null),
      ct === null)
    )
      throw Error(U(349));
    fi & 30 || cy(n, t, i);
  }
  return i;
}
function cy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), py(t) && hy(e);
}
function dy(e, t, n) {
  return n(function () {
    py(t) && hy(e);
  });
}
function py(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !On(e, n);
  } catch {
    return !0;
  }
}
function hy(e) {
  var t = dr(e, 1);
  t !== null && kn(t, e, 1, -1);
}
function Hp(e) {
  var t = Fn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: As,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = s2.bind(null, Me, e)),
    [t.memoizedState, e]
  );
}
function Ps(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gy() {
  return pn().memoizedState;
}
function ja(e, t, n, r) {
  var i = Fn();
  (Me.flags |= e),
    (i.memoizedState = Ps(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wl(e, t, n, r) {
  var i = pn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (tt !== null) {
    var s = tt.memoizedState;
    if (((o = s.destroy), r !== null && _d(r, s.deps))) {
      i.memoizedState = Ps(t, n, o, r);
      return;
    }
  }
  (Me.flags |= e), (i.memoizedState = Ps(1 | t, n, o, r));
}
function Wp(e, t) {
  return ja(8390656, 8, e, t);
}
function kd(e, t) {
  return Wl(2048, 8, e, t);
}
function my(e, t) {
  return Wl(4, 2, e, t);
}
function yy(e, t) {
  return Wl(4, 4, e, t);
}
function vy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wl(4, 4, vy.bind(null, t, e), n)
  );
}
function Ed() {}
function Sy(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _d(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _y(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _d(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function by(e, t, n) {
  return fi & 21
    ? (On(n, t) || ((n = Om()), (Me.lanes |= n), (di |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Lt = !0)), (e.memoizedState = n));
}
function i2(e, t) {
  var n = Ee;
  (Ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ku.transition;
  Ku.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ee = n), (Ku.transition = r);
  }
}
function xy() {
  return pn().memoizedState;
}
function o2(e, t, n) {
  var r = Nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ky(e))
  )
    Ey(t, n);
  else if (((n = oy(e, t, n, r)), n !== null)) {
    var i = Tt();
    kn(n, e, r, i), Ty(n, t, r);
  }
}
function s2(e, t, n) {
  var r = Nr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ky(e)) Ey(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), On(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), md(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = oy(e, t, i, r)),
      n !== null && ((i = Tt()), kn(n, e, r, i), Ty(n, t, r));
  }
}
function ky(e) {
  var t = e.alternate;
  return e === Me || (t !== null && t === Me);
}
function Ey(e, t) {
  us = pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ty(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nd(e, n);
  }
}
var hl = {
    readContext: dn,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useInsertionEffect: yt,
    useLayoutEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useMutableSource: yt,
    useSyncExternalStore: yt,
    useId: yt,
    unstable_isNewReconciler: !1,
  },
  a2 = {
    readContext: dn,
    useCallback: function (e, t) {
      return (Fn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dn,
    useEffect: Wp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ja(4194308, 4, vy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ja(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ja(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = o2.bind(null, Me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hp,
    useDebugValue: Ed,
    useDeferredValue: function (e) {
      return (Fn().memoizedState = e);
    },
    useTransition: function () {
      var e = Hp(!1),
        t = e[0];
      return (e = i2.bind(null, e[1])), (Fn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Me,
        i = Fn();
      if (je) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = t()), ct === null)) throw Error(U(349));
        fi & 30 || cy(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Wp(dy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ps(9, fy.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fn(),
        t = ct.identifierPrefix;
      if (je) {
        var n = or,
          r = ir;
        (n = (r & ~(1 << (32 - xn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Rs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = r2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  l2 = {
    readContext: dn,
    useCallback: Sy,
    useContext: dn,
    useEffect: kd,
    useImperativeHandle: wy,
    useInsertionEffect: my,
    useLayoutEffect: yy,
    useMemo: _y,
    useReducer: Gu,
    useRef: gy,
    useState: function () {
      return Gu(As);
    },
    useDebugValue: Ed,
    useDeferredValue: function (e) {
      var t = pn();
      return by(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = Gu(As)[0],
        t = pn().memoizedState;
      return [e, t];
    },
    useMutableSource: ly,
    useSyncExternalStore: uy,
    useId: xy,
    unstable_isNewReconciler: !1,
  },
  u2 = {
    readContext: dn,
    useCallback: Sy,
    useContext: dn,
    useEffect: kd,
    useImperativeHandle: wy,
    useInsertionEffect: my,
    useLayoutEffect: yy,
    useMemo: _y,
    useReducer: Yu,
    useRef: gy,
    useState: function () {
      return Yu(As);
    },
    useDebugValue: Ed,
    useDeferredValue: function (e) {
      var t = pn();
      return tt === null ? (t.memoizedState = e) : by(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = Yu(As)[0],
        t = pn().memoizedState;
      return [e, t];
    },
    useMutableSource: ly,
    useSyncExternalStore: uy,
    useId: xy,
    unstable_isNewReconciler: !1,
  };
function yn(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      i = Nr(e),
      o = sr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ir(e, o, i)),
      t !== null && (kn(t, e, i, r), Da(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      i = Nr(e),
      o = sr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ir(e, o, i)),
      t !== null && (kn(t, e, i, r), Da(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Tt(),
      r = Nr(e),
      i = sr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ir(e, i, r)),
      t !== null && (kn(t, e, r, n), Da(t, e, r));
  },
};
function qp(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xs(n, r) || !xs(i, o)
      : !0
  );
}
function Oy(e, t, n) {
  var r = !1,
    i = Mr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dn(o))
      : ((i = Dt(t) ? ui : _t.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? uo(e, i) : Mr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Kp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ql.enqueueReplaceState(t, t.state, null);
}
function Zc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), yd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = dn(o))
    : ((o = Dt(t) ? ui : _t.current), (i.context = uo(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Xc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ql.enqueueReplaceState(i, i.state, null),
      fl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Qu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ef(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var c2 = typeof WeakMap == "function" ? WeakMap : Map;
function Cy(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ml || ((ml = !0), (ff = r)), ef(e, t);
    }),
    n
  );
}
function Ry(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ef(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ef(e, t),
          typeof r != "function" &&
            (Dr === null ? (Dr = new Set([this])) : Dr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new c2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = k2.bind(null, e, t, n)), t.then(e, e));
}
function Yp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = sr(-1, 1)), (t.tag = 2), Ir(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var f2 = mr.ReactCurrentOwner,
  Lt = !1;
function kt(e, t, n, r) {
  t.child = e === null ? iy(t, null, n, r) : fo(t, e.child, n, r);
}
function Jp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    io(t, i),
    (r = bd(e, t, n, r, o, i)),
    (n = xd()),
    e !== null && !Lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pr(e, t, i))
      : (je && n && cd(t), (t.flags |= 1), kt(e, t, r, i), t.child)
  );
}
function Xp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Id(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ay(e, t, o, r, i))
      : ((e = Ua(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xs), n(s, r) && e.ref === t.ref)
    )
      return pr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = jr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ay(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xs(o, r) && e.ref === t.ref)
      if (((Lt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Lt = !0);
      else return (t.lanes = e.lanes), pr(e, t, i);
  }
  return tf(e, t, n, r, i);
}
function Py(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(Qi, Ut),
        (Ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(Qi, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Re(Qi, Ut),
        (Ut |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Re(Qi, Ut),
      (Ut |= r);
  return kt(e, t, i, n), t.child;
}
function Ly(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tf(e, t, n, r, i) {
  var o = Dt(n) ? ui : _t.current;
  return (
    (o = uo(t, o)),
    io(t, i),
    (n = bd(e, t, n, r, o, i)),
    (r = xd()),
    e !== null && !Lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pr(e, t, i))
      : (je && r && cd(t), (t.flags |= 1), kt(e, t, n, i), t.child)
  );
}
function Zp(e, t, n, r, i) {
  if (Dt(n)) {
    var o = !0;
    sl(t);
  } else o = !1;
  if ((io(t, i), t.stateNode === null))
    $a(e, t), Oy(t, n, r), Zc(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dn(u))
      : ((u = Dt(n) ? ui : _t.current), (u = uo(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Kp(t, s, r, u)),
      (br = !1);
    var d = t.memoizedState;
    (s.state = d),
      fl(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || It.current || br
        ? (typeof c == "function" && (Xc(t, n, c, r), (l = t.memoizedState)),
          (a = br || qp(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      sy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : yn(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = dn(l))
        : ((l = Dt(n) ? ui : _t.current), (l = uo(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Kp(t, s, r, l)),
      (br = !1),
      (d = t.memoizedState),
      (s.state = d),
      fl(t, r, s, i);
    var v = t.memoizedState;
    a !== f || d !== v || It.current || br
      ? (typeof g == "function" && (Xc(t, n, g, r), (v = t.memoizedState)),
        (u = br || qp(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nf(e, t, n, r, o, i);
}
function nf(e, t, n, r, i, o) {
  Ly(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Mp(t, n, !1), pr(e, t, o);
  (r = t.stateNode), (f2.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = fo(t, e.child, null, o)), (t.child = fo(t, null, a, o)))
      : kt(e, t, a, o),
    (t.memoizedState = r.state),
    i && Mp(t, n, !0),
    t.child
  );
}
function Iy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $p(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $p(e, t.context, !1),
    vd(e, t.containerInfo);
}
function eh(e, t, n, r, i) {
  return co(), dd(i), (t.flags |= 256), kt(e, t, n, r), t.child;
}
var rf = { dehydrated: null, treeContext: null, retryLane: 0 };
function of(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dy(e, t, n) {
  var r = t.pendingProps,
    i = $e.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Re($e, i & 1),
    e === null)
  )
    return (
      Qc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Yl(s, r, 0, null)),
              (e = oi(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = of(n)),
              (t.memoizedState = rf),
              e)
            : Td(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return d2(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = jr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = jr(a, o)) : ((o = oi(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? of(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = rf),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = jr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Td(e, t) {
  return (
    (t = Yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wa(e, t, n, r) {
  return (
    r !== null && dd(r),
    fo(t, e.child, null, n),
    (e = Td(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function d2(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qu(Error(U(422)))), wa(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Yl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = oi(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fo(t, e.child, null, s),
        (t.child.memoizedState = of(s)),
        (t.memoizedState = rf),
        o);
  if (!(t.mode & 1)) return wa(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(U(419))), (r = Qu(o, r, void 0)), wa(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Lt || a)) {
    if (((r = ct), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), dr(e, i), kn(r, e, i, -1));
    }
    return Ld(), (r = Qu(Error(U(421)))), wa(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = E2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ht = Lr(i.nextSibling)),
      (Wt = t),
      (je = !0),
      (Sn = null),
      e !== null &&
        ((rn[on++] = ir),
        (rn[on++] = or),
        (rn[on++] = ci),
        (ir = e.id),
        (or = e.overflow),
        (ci = t)),
      (t = Td(t, r.children)),
      (t.flags |= 4096),
      t);
}
function th(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jc(e.return, t, n);
}
function Ju(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ny(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((kt(e, t, r.children, n), (r = $e.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && th(e, n, t);
        else if (e.tag === 19) th(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Re($e, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && dl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ju(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && dl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ju(t, !0, n, null, o);
        break;
      case "together":
        Ju(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $a(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (di |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function p2(e, t, n) {
  switch (t.tag) {
    case 3:
      Iy(t), co();
      break;
    case 5:
      ay(t);
      break;
    case 1:
      Dt(t.type) && sl(t);
      break;
    case 4:
      vd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Re(ul, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Re($e, $e.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dy(e, t, n)
          : (Re($e, $e.current & 1),
            (e = pr(e, t, n)),
            e !== null ? e.sibling : null);
      Re($e, $e.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ny(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Re($e, $e.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Py(e, t, n);
  }
  return pr(e, t, n);
}
var jy, sf, $y, My;
jy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
sf = function () {};
$y = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ei(Wn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Oc(e, i)), (r = Oc(e, r)), (o = []);
        break;
      case "select":
        (i = Fe({}, i, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ac(e, i)), (r = Ac(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = il);
    }
    Lc(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ms.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ms.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Pe("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
My = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bo(e, t) {
  if (!je)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function h2(e, t, n) {
  var r = t.pendingProps;
  switch ((fd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return vt(t), null;
    case 1:
      return Dt(t.type) && ol(), vt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        po(),
        Le(It),
        Le(_t),
        Sd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ya(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Sn !== null && (hf(Sn), (Sn = null)))),
        sf(e, t),
        vt(t),
        null
      );
    case 5:
      wd(t);
      var i = ei(Cs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $y(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return vt(t), null;
        }
        if (((e = ei(Wn.current)), ya(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Un] = t), (r[Ts] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Pe("cancel", r), Pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ns.length; i++) Pe(ns[i], r);
              break;
            case "source":
              Pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Pe("error", r), Pe("load", r);
              break;
            case "details":
              Pe("toggle", r);
              break;
            case "input":
              cp(r, o), Pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Pe("invalid", r);
              break;
            case "textarea":
              dp(r, o), Pe("invalid", r);
          }
          Lc(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      ma(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      ma(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ms.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Pe("scroll", r);
            }
          switch (n) {
            case "input":
              la(r), fp(r, o, !0);
              break;
            case "textarea":
              la(r), pp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = il);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Un] = t),
            (e[Ts] = r),
            jy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ic(n, r)), n)) {
              case "dialog":
                Pe("cancel", e), Pe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ns.length; i++) Pe(ns[i], e);
                i = r;
                break;
              case "source":
                Pe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", e), Pe("load", e), (i = r);
                break;
              case "details":
                Pe("toggle", e), (i = r);
                break;
              case "input":
                cp(e, r), (i = Oc(e, r)), Pe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Fe({}, r, { value: void 0 })),
                  Pe("invalid", e);
                break;
              case "textarea":
                dp(e, r), (i = Ac(e, r)), Pe("invalid", e);
                break;
              default:
                i = r;
            }
            Lc(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? gm(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && pm(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ys(e, l)
                    : typeof l == "number" && ys(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ms.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Pe("scroll", e)
                      : l != null && Qf(e, o, l, s));
              }
            switch (n) {
              case "input":
                la(e), fp(e, r, !1);
                break;
              case "textarea":
                la(e), pp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $r(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? eo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      eo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = il);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return vt(t), null;
    case 6:
      if (e && t.stateNode != null) My(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (((n = ei(Cs.current)), ei(Wn.current), ya(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Un] = t),
            (o = r.nodeValue !== n) && ((e = Wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ma(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ma(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Un] = t),
            (t.stateNode = r);
      }
      return vt(t), null;
    case 13:
      if (
        (Le($e),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (je && Ht !== null && t.mode & 1 && !(t.flags & 128))
          ny(), co(), (t.flags |= 98560), (o = !1);
        else if (((o = ya(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(U(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(U(317));
            o[Un] = t;
          } else
            co(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          vt(t), (o = !1);
        } else Sn !== null && (hf(Sn), (Sn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $e.current & 1 ? nt === 0 && (nt = 3) : Ld())),
          t.updateQueue !== null && (t.flags |= 4),
          vt(t),
          null);
    case 4:
      return (
        po(), sf(e, t), e === null && ks(t.stateNode.containerInfo), vt(t), null
      );
    case 10:
      return gd(t.type._context), vt(t), null;
    case 17:
      return Dt(t.type) && ol(), vt(t), null;
    case 19:
      if ((Le($e), (o = t.memoizedState), o === null)) return vt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Bo(o, !1);
        else {
          if (nt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = dl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Bo(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Re($e, ($e.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            qe() > go &&
            ((t.flags |= 128), (r = !0), Bo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !je)
            )
              return vt(t), null;
          } else
            2 * qe() - o.renderingStartTime > go &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = qe()),
          (t.sibling = null),
          (n = $e.current),
          Re($e, r ? (n & 1) | 2 : n & 1),
          t)
        : (vt(t), null);
    case 22:
    case 23:
      return (
        Pd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ut & 1073741824 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : vt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function g2(e, t) {
  switch ((fd(t), t.tag)) {
    case 1:
      return (
        Dt(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        po(),
        Le(It),
        Le(_t),
        Sd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wd(t), null;
    case 13:
      if (
        (Le($e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        co();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Le($e), null;
    case 4:
      return po(), null;
    case 10:
      return gd(t.type._context), null;
    case 22:
    case 23:
      return Pd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sa = !1,
  wt = !1,
  m2 = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;
function Yi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        He(e, t, r);
      }
    else n.current = null;
}
function af(e, t, n) {
  try {
    n();
  } catch (r) {
    He(e, t, r);
  }
}
var nh = !1;
function y2(e, t) {
  if (((Vc = tl), (e = Vm()), ud(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hc = { focusedElem: e, selectionRange: n }, tl = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e);
    else
      for (; G !== null; ) {
        t = G;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    x = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : yn(t.type, y),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (E) {
          He(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (G = e);
          break;
        }
        G = t.return;
      }
  return (v = nh), (nh = !1), v;
}
function cs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && af(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Kl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Un], delete t[Ts], delete t[Kc], delete t[Zw], delete t[e2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function uf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = il));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uf(e, t, n), e = e.sibling; e !== null; ) uf(e, t, n), (e = e.sibling);
}
function cf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cf(e, t, n), e = e.sibling; e !== null; ) cf(e, t, n), (e = e.sibling);
}
var dt = null,
  vn = !1;
function vr(e, t, n) {
  for (n = n.child; n !== null; ) By(e, t, n), (n = n.sibling);
}
function By(e, t, n) {
  if (Hn && typeof Hn.onCommitFiberUnmount == "function")
    try {
      Hn.onCommitFiberUnmount(Fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      wt || Yi(n, t);
    case 6:
      var r = dt,
        i = vn;
      (dt = null),
        vr(e, t, n),
        (dt = r),
        (vn = i),
        dt !== null &&
          (vn
            ? ((e = dt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null &&
        (vn
          ? ((e = dt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hu(e.parentNode, n)
              : e.nodeType === 1 && Hu(e, n),
            _s(e))
          : Hu(dt, n.stateNode));
      break;
    case 4:
      (r = dt),
        (i = vn),
        (dt = n.stateNode.containerInfo),
        (vn = !0),
        vr(e, t, n),
        (dt = r),
        (vn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !wt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && af(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      vr(e, t, n);
      break;
    case 1:
      if (
        !wt &&
        (Yi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          He(n, t, a);
        }
      vr(e, t, n);
      break;
    case 21:
      vr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((wt = (r = wt) || n.memoizedState !== null), vr(e, t, n), (wt = r))
        : vr(e, t, n);
      break;
    default:
      vr(e, t, n);
  }
}
function ih(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new m2()),
      t.forEach(function (r) {
        var i = T2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (dt = a.stateNode), (vn = !1);
              break e;
            case 3:
              (dt = a.stateNode.containerInfo), (vn = !0);
              break e;
            case 4:
              (dt = a.stateNode.containerInfo), (vn = !0);
              break e;
          }
          a = a.return;
        }
        if (dt === null) throw Error(U(160));
        By(o, s, i), (dt = null), (vn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        He(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zy(t, e), (t = t.sibling);
}
function zy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mn(t, e), $n(e), r & 4)) {
        try {
          cs(3, e, e.return), Kl(3, e);
        } catch (y) {
          He(e, e.return, y);
        }
        try {
          cs(5, e, e.return);
        } catch (y) {
          He(e, e.return, y);
        }
      }
      break;
    case 1:
      mn(t, e), $n(e), r & 512 && n !== null && Yi(n, n.return);
      break;
    case 5:
      if (
        (mn(t, e),
        $n(e),
        r & 512 && n !== null && Yi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ys(i, "");
        } catch (y) {
          He(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && cm(i, o),
              Ic(a, s);
            var u = Ic(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? gm(i, f)
                : c === "dangerouslySetInnerHTML"
                ? pm(i, f)
                : c === "children"
                ? ys(i, f)
                : Qf(i, c, f, u);
            }
            switch (a) {
              case "input":
                Cc(i, o);
                break;
              case "textarea":
                fm(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? eo(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? eo(i, !!o.multiple, o.defaultValue, !0)
                      : eo(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ts] = o;
          } catch (y) {
            He(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((mn(t, e), $n(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          He(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (mn(t, e), $n(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _s(t.containerInfo);
        } catch (y) {
          He(e, e.return, y);
        }
      break;
    case 4:
      mn(t, e), $n(e);
      break;
    case 13:
      mn(t, e),
        $n(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Rd = qe())),
        r & 4 && ih(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((wt = (u = wt) || c), mn(t, e), (wt = u)) : mn(t, e),
        $n(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (G = e, c = e.child; c !== null; ) {
            for (f = G = c; G !== null; ) {
              switch (((d = G), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  cs(4, d, d.return);
                  break;
                case 1:
                  Yi(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      He(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Yi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    sh(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (G = g)) : sh(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = hm("display", s)));
              } catch (y) {
                He(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                He(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      mn(t, e), $n(e), r & 4 && ih(e);
      break;
    case 21:
      break;
    default:
      mn(t, e), $n(e);
  }
}
function $n(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ys(i, ""), (r.flags &= -33));
          var o = rh(e);
          cf(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = rh(e);
          uf(e, a, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (l) {
      He(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function v2(e, t, n) {
  (G = e), Vy(e);
}
function Vy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var i = G,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Sa;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || wt;
        a = Sa;
        var u = wt;
        if (((Sa = s), (wt = l) && !u))
          for (G = i; G !== null; )
            (s = G),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ah(i)
                : l !== null
                ? ((l.return = s), (G = l))
                : ah(i);
        for (; o !== null; ) (G = o), Vy(o), (o = o.sibling);
        (G = i), (Sa = a), (wt = u);
      }
      oh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (G = o)) : oh(e);
  }
}
function oh(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              wt || Kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !wt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Vp(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && _s(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        wt || (t.flags & 512 && lf(t));
      } catch (d) {
        He(t, t.return, d);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function sh(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function ah(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Kl(4, t);
          } catch (l) {
            He(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              He(t, i, l);
            }
          }
          var o = t.return;
          try {
            lf(t);
          } catch (l) {
            He(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            lf(t);
          } catch (l) {
            He(t, s, l);
          }
      }
    } catch (l) {
      He(t, t.return, l);
    }
    if (t === e) {
      G = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (G = a);
      break;
    }
    G = t.return;
  }
}
var w2 = Math.ceil,
  gl = mr.ReactCurrentDispatcher,
  Od = mr.ReactCurrentOwner,
  fn = mr.ReactCurrentBatchConfig,
  ye = 0,
  ct = null,
  Je = null,
  ht = 0,
  Ut = 0,
  Qi = Ur(0),
  nt = 0,
  Ls = null,
  di = 0,
  Gl = 0,
  Cd = 0,
  fs = null,
  Pt = null,
  Rd = 0,
  go = 1 / 0,
  er = null,
  ml = !1,
  ff = null,
  Dr = null,
  _a = !1,
  Tr = null,
  yl = 0,
  ds = 0,
  df = null,
  Ma = -1,
  Fa = 0;
function Tt() {
  return ye & 6 ? qe() : Ma !== -1 ? Ma : (Ma = qe());
}
function Nr(e) {
  return e.mode & 1
    ? ye & 2 && ht !== 0
      ? ht & -ht
      : n2.transition !== null
      ? (Fa === 0 && (Fa = Om()), Fa)
      : ((e = Ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dm(e.type))),
        e)
    : 1;
}
function kn(e, t, n, r) {
  if (50 < ds) throw ((ds = 0), (df = null), Error(U(185)));
  zs(e, n, r),
    (!(ye & 2) || e !== ct) &&
      (e === ct && (!(ye & 2) && (Gl |= n), nt === 4 && kr(e, ht)),
      Nt(e, r),
      n === 1 && ye === 0 && !(t.mode & 1) && ((go = qe() + 500), Hl && Br()));
}
function Nt(e, t) {
  var n = e.callbackNode;
  nw(e, t);
  var r = el(e, e === ct ? ht : 0);
  if (r === 0)
    n !== null && mp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && mp(n), t === 1))
      e.tag === 0 ? t2(lh.bind(null, e)) : Zm(lh.bind(null, e)),
        Jw(function () {
          !(ye & 6) && Br();
        }),
        (n = null);
    else {
      switch (Cm(r)) {
        case 1:
          n = td;
          break;
        case 4:
          n = Em;
          break;
        case 16:
          n = Za;
          break;
        case 536870912:
          n = Tm;
          break;
        default:
          n = Za;
      }
      n = Jy(n, Hy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hy(e, t) {
  if (((Ma = -1), (Fa = 0), ye & 6)) throw Error(U(327));
  var n = e.callbackNode;
  if (oo() && e.callbackNode !== n) return null;
  var r = el(e, e === ct ? ht : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var i = ye;
    ye |= 2;
    var o = qy();
    (ct !== e || ht !== t) && ((er = null), (go = qe() + 500), ii(e, t));
    do
      try {
        b2();
        break;
      } catch (a) {
        Wy(e, a);
      }
    while (!0);
    hd(),
      (gl.current = o),
      (ye = i),
      Je !== null ? (t = 0) : ((ct = null), (ht = 0), (t = nt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Mc(e)), i !== 0 && ((r = i), (t = pf(e, i)))), t === 1)
    )
      throw ((n = Ls), ii(e, 0), kr(e, r), Nt(e, qe()), n);
    if (t === 6) kr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !S2(i) &&
          ((t = vl(e, r)),
          t === 2 && ((o = Mc(e)), o !== 0 && ((r = o), (t = pf(e, o)))),
          t === 1))
      )
        throw ((n = Ls), ii(e, 0), kr(e, r), Nt(e, qe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Yr(e, Pt, er);
          break;
        case 3:
          if (
            (kr(e, r), (r & 130023424) === r && ((t = Rd + 500 - qe()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Tt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qc(Yr.bind(null, e, Pt, er), t);
            break;
          }
          Yr(e, Pt, er);
          break;
        case 4:
          if ((kr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - xn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = qe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * w2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qc(Yr.bind(null, e, Pt, er), r);
            break;
          }
          Yr(e, Pt, er);
          break;
        case 5:
          Yr(e, Pt, er);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Nt(e, qe()), e.callbackNode === n ? Hy.bind(null, e) : null;
}
function pf(e, t) {
  var n = fs;
  return (
    e.current.memoizedState.isDehydrated && (ii(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = Pt), (Pt = n), t !== null && hf(t)),
    e
  );
}
function hf(e) {
  Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
}
function S2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!On(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function kr(e, t) {
  for (
    t &= ~Cd,
      t &= ~Gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lh(e) {
  if (ye & 6) throw Error(U(327));
  oo();
  var t = el(e, 0);
  if (!(t & 1)) return Nt(e, qe()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mc(e);
    r !== 0 && ((t = r), (n = pf(e, r)));
  }
  if (n === 1) throw ((n = Ls), ii(e, 0), kr(e, t), Nt(e, qe()), n);
  if (n === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yr(e, Pt, er),
    Nt(e, qe()),
    null
  );
}
function Ad(e, t) {
  var n = ye;
  ye |= 1;
  try {
    return e(t);
  } finally {
    (ye = n), ye === 0 && ((go = qe() + 500), Hl && Br());
  }
}
function pi(e) {
  Tr !== null && Tr.tag === 0 && !(ye & 6) && oo();
  var t = ye;
  ye |= 1;
  var n = fn.transition,
    r = Ee;
  try {
    if (((fn.transition = null), (Ee = 1), e)) return e();
  } finally {
    (Ee = r), (fn.transition = n), (ye = t), !(ye & 6) && Br();
  }
}
function Pd() {
  (Ut = Qi.current), Le(Qi);
}
function ii(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qw(n)), Je !== null))
    for (n = Je.return; n !== null; ) {
      var r = n;
      switch ((fd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          po(), Le(It), Le(_t), Sd();
          break;
        case 5:
          wd(r);
          break;
        case 4:
          po();
          break;
        case 13:
          Le($e);
          break;
        case 19:
          Le($e);
          break;
        case 10:
          gd(r.type._context);
          break;
        case 22:
        case 23:
          Pd();
      }
      n = n.return;
    }
  if (
    ((ct = e),
    (Je = e = jr(e.current, null)),
    (ht = Ut = t),
    (nt = 0),
    (Ls = null),
    (Cd = Gl = di = 0),
    (Pt = fs = null),
    Zr !== null)
  ) {
    for (t = 0; t < Zr.length; t++)
      if (((n = Zr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Zr = null;
  }
  return e;
}
function Wy(e, t) {
  do {
    var n = Je;
    try {
      if ((hd(), (Na.current = hl), pl)) {
        for (var r = Me.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        pl = !1;
      }
      if (
        ((fi = 0),
        (ut = tt = Me = null),
        (us = !1),
        (Rs = 0),
        (Od.current = null),
        n === null || n.return === null)
      ) {
        (nt = 1), (Ls = t), (Je = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ht),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Yp(s);
          if (g !== null) {
            (g.flags &= -257),
              Qp(g, s, a, o, t),
              g.mode & 1 && Gp(o, u, t),
              (t = g),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Gp(o, u, t), Ld();
              break e;
            }
            l = Error(U(426));
          }
        } else if (je && a.mode & 1) {
          var x = Yp(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Qp(x, s, a, o, t),
              dd(ho(l, a));
            break e;
          }
        }
        (o = l = ho(l, a)),
          nt !== 4 && (nt = 2),
          fs === null ? (fs = [o]) : fs.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Cy(o, l, t);
              zp(o, m);
              break e;
            case 1:
              a = l;
              var h = o.type,
                w = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Dr === null || !Dr.has(w))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = Ry(o, a, t);
                zp(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Gy(n);
    } catch (R) {
      (t = R), Je === n && n !== null && (Je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qy() {
  var e = gl.current;
  return (gl.current = hl), e === null ? hl : e;
}
function Ld() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
    ct === null || (!(di & 268435455) && !(Gl & 268435455)) || kr(ct, ht);
}
function vl(e, t) {
  var n = ye;
  ye |= 2;
  var r = qy();
  (ct !== e || ht !== t) && ((er = null), ii(e, t));
  do
    try {
      _2();
      break;
    } catch (i) {
      Wy(e, i);
    }
  while (!0);
  if ((hd(), (ye = n), (gl.current = r), Je !== null)) throw Error(U(261));
  return (ct = null), (ht = 0), nt;
}
function _2() {
  for (; Je !== null; ) Ky(Je);
}
function b2() {
  for (; Je !== null && !K0(); ) Ky(Je);
}
function Ky(e) {
  var t = Qy(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gy(e) : (Je = t),
    (Od.current = null);
}
function Gy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = g2(n, t)), n !== null)) {
        (n.flags &= 32767), (Je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (nt = 6), (Je = null);
        return;
      }
    } else if (((n = h2(n, t, Ut)), n !== null)) {
      Je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Je = t;
      return;
    }
    Je = t = e;
  } while (t !== null);
  nt === 0 && (nt = 5);
}
function Yr(e, t, n) {
  var r = Ee,
    i = fn.transition;
  try {
    (fn.transition = null), (Ee = 1), x2(e, t, n, r);
  } finally {
    (fn.transition = i), (Ee = r);
  }
  return null;
}
function x2(e, t, n, r) {
  do oo();
  while (Tr !== null);
  if (ye & 6) throw Error(U(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (rw(e, o),
    e === ct && ((Je = ct = null), (ht = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _a ||
      ((_a = !0),
      Jy(Za, function () {
        return oo(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = fn.transition), (fn.transition = null);
    var s = Ee;
    Ee = 1;
    var a = ye;
    (ye |= 4),
      (Od.current = null),
      y2(e, n),
      zy(n, e),
      Vw(Hc),
      (tl = !!Vc),
      (Hc = Vc = null),
      (e.current = n),
      v2(n),
      G0(),
      (ye = a),
      (Ee = s),
      (fn.transition = o);
  } else e.current = n;
  if (
    (_a && ((_a = !1), (Tr = e), (yl = i)),
    (o = e.pendingLanes),
    o === 0 && (Dr = null),
    J0(n.stateNode),
    Nt(e, qe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ml) throw ((ml = !1), (e = ff), (ff = null), e);
  return (
    yl & 1 && e.tag !== 0 && oo(),
    (o = e.pendingLanes),
    o & 1 ? (e === df ? ds++ : ((ds = 0), (df = e))) : (ds = 0),
    Br(),
    null
  );
}
function oo() {
  if (Tr !== null) {
    var e = Cm(yl),
      t = fn.transition,
      n = Ee;
    try {
      if (((fn.transition = null), (Ee = 16 > e ? 16 : e), Tr === null))
        var r = !1;
      else {
        if (((e = Tr), (Tr = null), (yl = 0), ye & 6)) throw Error(U(331));
        var i = ye;
        for (ye |= 4, G = e.current; G !== null; ) {
          var o = G,
            s = o.child;
          if (G.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (G = u; G !== null; ) {
                  var c = G;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cs(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (G = f);
                  else
                    for (; G !== null; ) {
                      c = G;
                      var d = c.sibling,
                        g = c.return;
                      if ((Fy(c), c === u)) {
                        G = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (G = d);
                        break;
                      }
                      G = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              G = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (G = s);
          else
            e: for (; G !== null; ) {
              if (((o = G), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    cs(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (G = m);
                break e;
              }
              G = o.return;
            }
        }
        var h = e.current;
        for (G = h; G !== null; ) {
          s = G;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) (w.return = s), (G = w);
          else
            e: for (s = h; G !== null; ) {
              if (((a = G), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl(9, a);
                  }
                } catch (R) {
                  He(a, a.return, R);
                }
              if (a === s) {
                G = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (G = E);
                break e;
              }
              G = a.return;
            }
        }
        if (
          ((ye = i), Br(), Hn && typeof Hn.onPostCommitFiberRoot == "function")
        )
          try {
            Hn.onPostCommitFiberRoot(Fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ee = n), (fn.transition = t);
    }
  }
  return !1;
}
function uh(e, t, n) {
  (t = ho(n, t)),
    (t = Cy(e, t, 1)),
    (e = Ir(e, t, 1)),
    (t = Tt()),
    e !== null && (zs(e, 1, t), Nt(e, t));
}
function He(e, t, n) {
  if (e.tag === 3) uh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Dr === null || !Dr.has(r)))
        ) {
          (e = ho(n, e)),
            (e = Ry(t, e, 1)),
            (t = Ir(t, e, 1)),
            (e = Tt()),
            t !== null && (zs(t, 1, e), Nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function k2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ct === e &&
      (ht & n) === n &&
      (nt === 4 || (nt === 3 && (ht & 130023424) === ht && 500 > qe() - Rd)
        ? ii(e, 0)
        : (Cd |= n)),
    Nt(e, t);
}
function Yy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fa), (fa <<= 1), !(fa & 130023424) && (fa = 4194304))
      : (t = 1));
  var n = Tt();
  (e = dr(e, t)), e !== null && (zs(e, t, n), Nt(e, n));
}
function E2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Yy(e, n);
}
function T2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  r !== null && r.delete(t), Yy(e, n);
}
var Qy;
Qy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || It.current) Lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Lt = !1), p2(e, t, n);
      Lt = !!(e.flags & 131072);
    }
  else (Lt = !1), je && t.flags & 1048576 && ey(t, ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $a(e, t), (e = t.pendingProps);
      var i = uo(t, _t.current);
      io(t, n), (i = bd(null, t, r, e, i, n));
      var o = xd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Dt(r) ? ((o = !0), sl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            yd(t),
            (i.updater = ql),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zc(t, r, e, n),
            (t = nf(null, t, r, !0, o, n)))
          : ((t.tag = 0), je && o && cd(t), kt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($a(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = C2(r)),
          (e = yn(r, e)),
          i)
        ) {
          case 0:
            t = tf(null, t, r, e, n);
            break e;
          case 1:
            t = Zp(null, t, r, e, n);
            break e;
          case 11:
            t = Jp(null, t, r, e, n);
            break e;
          case 14:
            t = Xp(null, t, r, yn(r.type, e), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        tf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        Zp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Iy(t), e === null)) throw Error(U(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          sy(e, t),
          fl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ho(Error(U(423)), t)), (t = eh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ho(Error(U(424)), t)), (t = eh(e, t, r, n, i));
            break e;
          } else
            for (
              Ht = Lr(t.stateNode.containerInfo.firstChild),
                Wt = t,
                je = !0,
                Sn = null,
                n = iy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((co(), r === i)) {
            t = pr(e, t, n);
            break e;
          }
          kt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ay(t),
        e === null && Qc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Wc(r, i) ? (s = null) : o !== null && Wc(r, o) && (t.flags |= 32),
        Ly(e, t),
        kt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Qc(t), null;
    case 13:
      return Dy(e, t, n);
    case 4:
      return (
        vd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fo(t, null, r, n)) : kt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        Jp(e, t, r, i, n)
      );
    case 7:
      return kt(e, t, t.pendingProps, n), t.child;
    case 8:
      return kt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return kt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Re(ul, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (On(o.value, s)) {
            if (o.children === i.children && !It.current) {
              t = pr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = sr(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Jc(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(U(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Jc(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        kt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        io(t, n),
        (i = dn(i)),
        (r = r(i)),
        (t.flags |= 1),
        kt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = yn(r, t.pendingProps)),
        (i = yn(r.type, i)),
        Xp(e, t, r, i, n)
      );
    case 15:
      return Ay(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        $a(e, t),
        (t.tag = 1),
        Dt(r) ? ((e = !0), sl(t)) : (e = !1),
        io(t, n),
        Oy(t, r, i),
        Zc(t, r, i, n),
        nf(null, t, r, !0, e, n)
      );
    case 19:
      return Ny(e, t, n);
    case 22:
      return Py(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function Jy(e, t) {
  return km(e, t);
}
function O2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ln(e, t, n, r) {
  return new O2(e, t, n, r);
}
function Id(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function C2(e) {
  if (typeof e == "function") return Id(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xf)) return 11;
    if (e === Zf) return 14;
  }
  return 2;
}
function jr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ln(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ua(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Id(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ui:
        return oi(n.children, i, o, t);
      case Jf:
        (s = 8), (i |= 8);
        break;
      case xc:
        return (
          (e = ln(12, n, t, i | 2)), (e.elementType = xc), (e.lanes = o), e
        );
      case kc:
        return (e = ln(13, n, t, i)), (e.elementType = kc), (e.lanes = o), e;
      case Ec:
        return (e = ln(19, n, t, i)), (e.elementType = Ec), (e.lanes = o), e;
      case am:
        return Yl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case om:
              s = 10;
              break e;
            case sm:
              s = 9;
              break e;
            case Xf:
              s = 11;
              break e;
            case Zf:
              s = 14;
              break e;
            case _r:
              (s = 16), (r = null);
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ln(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function oi(e, t, n, r) {
  return (e = ln(7, e, r, t)), (e.lanes = n), e;
}
function Yl(e, t, n, r) {
  return (
    (e = ln(22, e, r, t)),
    (e.elementType = am),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xu(e, t, n) {
  return (e = ln(6, e, null, t)), (e.lanes = n), e;
}
function Zu(e, t, n) {
  return (
    (t = ln(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function R2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Iu(0)),
    (this.expirationTimes = Iu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Iu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Dd(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new R2(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ln(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yd(o),
    e
  );
}
function A2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xy(e) {
  if (!e) return Mr;
  e = e._reactInternals;
  e: {
    if (bi(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Dt(n)) return Xm(e, n, t);
  }
  return t;
}
function Zy(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Dd(n, r, !0, e, i, o, s, a, l)),
    (e.context = Xy(null)),
    (n = e.current),
    (r = Tt()),
    (i = Nr(n)),
    (o = sr(r, i)),
    (o.callback = t ?? null),
    Ir(n, o, i),
    (e.current.lanes = i),
    zs(e, i, r),
    Nt(e, r),
    e
  );
}
function Ql(e, t, n, r) {
  var i = t.current,
    o = Tt(),
    s = Nr(i);
  return (
    (n = Xy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ir(i, t, s)),
    e !== null && (kn(e, i, s, o), Da(e, i, s)),
    s
  );
}
function wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ch(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nd(e, t) {
  ch(e, t), (e = e.alternate) && ch(e, t);
}
function P2() {
  return null;
}
var ev =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function jd(e) {
  this._internalRoot = e;
}
Jl.prototype.render = jd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  Ql(e, t, null, null);
};
Jl.prototype.unmount = jd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pi(function () {
      Ql(null, e, null, null);
    }),
      (t[fr] = null);
  }
};
function Jl(e) {
  this._internalRoot = e;
}
Jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xr.length && t !== 0 && t < xr[n].priority; n++);
    xr.splice(n, 0, e), n === 0 && Im(e);
  }
};
function $d(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fh() {}
function L2(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = wl(s);
        o.call(u);
      };
    }
    var s = Zy(t, r, e, 0, null, !1, !1, "", fh);
    return (
      (e._reactRootContainer = s),
      (e[fr] = s.current),
      ks(e.nodeType === 8 ? e.parentNode : e),
      pi(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = wl(l);
      a.call(u);
    };
  }
  var l = Dd(e, 0, !1, null, null, !1, !1, "", fh);
  return (
    (e._reactRootContainer = l),
    (e[fr] = l.current),
    ks(e.nodeType === 8 ? e.parentNode : e),
    pi(function () {
      Ql(t, l, n, r);
    }),
    l
  );
}
function Zl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = wl(s);
        a.call(l);
      };
    }
    Ql(t, s, e, i);
  } else s = L2(n, t, e, i, r);
  return wl(s);
}
Rm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ts(t.pendingLanes);
        n !== 0 &&
          (nd(t, n | 1), Nt(t, qe()), !(ye & 6) && ((go = qe() + 500), Br()));
      }
      break;
    case 13:
      pi(function () {
        var r = dr(e, 1);
        if (r !== null) {
          var i = Tt();
          kn(r, e, 1, i);
        }
      }),
        Nd(e, 1);
  }
};
rd = function (e) {
  if (e.tag === 13) {
    var t = dr(e, 134217728);
    if (t !== null) {
      var n = Tt();
      kn(t, e, 134217728, n);
    }
    Nd(e, 134217728);
  }
};
Am = function (e) {
  if (e.tag === 13) {
    var t = Nr(e),
      n = dr(e, t);
    if (n !== null) {
      var r = Tt();
      kn(n, e, t, r);
    }
    Nd(e, t);
  }
};
Pm = function () {
  return Ee;
};
Lm = function (e, t) {
  var n = Ee;
  try {
    return (Ee = e), t();
  } finally {
    Ee = n;
  }
};
Nc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Vl(r);
            if (!i) throw Error(U(90));
            um(r), Cc(r, i);
          }
        }
      }
      break;
    case "textarea":
      fm(e, n);
      break;
    case "select":
      (t = n.value), t != null && eo(e, !!n.multiple, t, !1);
  }
};
vm = Ad;
wm = pi;
var I2 = { usingClientEntryPoint: !1, Events: [Hs, Hi, Vl, mm, ym, Ad] },
  zo = {
    findFiberByHostInstance: Xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  D2 = {
    bundleType: zo.bundleType,
    version: zo.version,
    rendererPackageName: zo.rendererPackageName,
    rendererConfig: zo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zo.findFiberByHostInstance || P2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ba.isDisabled && ba.supportsFiber)
    try {
      (Fl = ba.inject(D2)), (Hn = ba);
    } catch {}
}
Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I2;
Gt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$d(t)) throw Error(U(200));
  return A2(e, t, null, n);
};
Gt.createRoot = function (e, t) {
  if (!$d(e)) throw Error(U(299));
  var n = !1,
    r = "",
    i = ev;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Dd(e, 1, !1, null, null, n, !1, r, i)),
    (e[fr] = t.current),
    ks(e.nodeType === 8 ? e.parentNode : e),
    new jd(t)
  );
};
Gt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return (e = bm(t)), (e = e === null ? null : e.stateNode), e;
};
Gt.flushSync = function (e) {
  return pi(e);
};
Gt.hydrate = function (e, t, n) {
  if (!Xl(t)) throw Error(U(200));
  return Zl(null, e, t, !0, n);
};
Gt.hydrateRoot = function (e, t, n) {
  if (!$d(e)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = ev;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Zy(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[fr] = t.current),
    ks(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Jl(t);
};
Gt.render = function (e, t, n) {
  if (!Xl(t)) throw Error(U(200));
  return Zl(null, e, t, !1, n);
};
Gt.unmountComponentAtNode = function (e) {
  if (!Xl(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (pi(function () {
        Zl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fr] = null);
        });
      }),
      !0)
    : !1;
};
Gt.unstable_batchedUpdates = Ad;
Gt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xl(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Zl(e, t, n, !1, r);
};
Gt.version = "18.3.1-next-f1338f8080-20240426";
function tv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv);
    } catch (e) {
      console.error(e);
    }
}
tv(), (tm.exports = Gt);
var eu = tm.exports;
const N2 = Si(eu),
  j2 = Vg({ __proto__: null, default: N2 }, [eu]);
var nv,
  dh = eu;
(nv = dh.createRoot), dh.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ne() {
  return (
    (Ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ne.apply(this, arguments)
  );
}
var Qe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Qe || (Qe = {}));
const ph = "popstate";
function $2(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Is(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : hi(i);
  }
  return F2(t, n, null, e);
}
function ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function mo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function M2() {
  return Math.random().toString(36).substr(2, 8);
}
function hh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Is(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ne(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? zr(t) : t,
      { state: n, key: (t && t.key) || r || M2() }
    )
  );
}
function hi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function zr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function F2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Qe.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ne({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Qe.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: y.location, delta: m });
  }
  function d(x, m) {
    a = Qe.Push;
    let h = Is(y.location, x, m);
    u = c() + 1;
    let w = hh(h, u),
      E = y.createHref(h);
    try {
      s.pushState(w, "", E);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      i.location.assign(E);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function g(x, m) {
    a = Qe.Replace;
    let h = Is(y.location, x, m);
    u = c();
    let w = hh(h, u),
      E = y.createHref(h);
    s.replaceState(w, "", E),
      o && l && l({ action: a, location: y.location, delta: 0 });
  }
  function v(x) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof x == "string" ? x : hi(x);
    return (
      (h = h.replace(/ $/, "%20")),
      ce(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ph, f),
        (l = x),
        () => {
          i.removeEventListener(ph, f), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let m = v(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: g,
    go(x) {
      return s.go(x);
    },
  };
  return y;
}
var Oe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Oe || (Oe = {}));
const U2 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function B2(e) {
  return e.index === !0;
}
function Sl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let s = [...n, String(o)],
        a = typeof i.id == "string" ? i.id : s.join("-");
      if (
        (ce(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ce(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        B2(i))
      ) {
        let l = Ne({}, i, t(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = Ne({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = l), i.children && (l.children = Sl(i.children, t, s, r)), l
        );
      }
    })
  );
}
function Qr(e, t, n) {
  return n === void 0 && (n = "/"), Ba(e, t, n, !1);
}
function Ba(e, t, n, r) {
  let i = typeof t == "string" ? zr(t) : t,
    o = xo(i.pathname || "/", n);
  if (o == null) return null;
  let s = rv(e);
  V2(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = eS(o);
    a = X2(s[l], u, r);
  }
  return a;
}
function z2(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function rv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (ce(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = ar([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (ce(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      rv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Q2(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of iv(o.path)) i(o, s, l);
    }),
    t
  );
}
function iv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = iv(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function V2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : J2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const H2 = /^:[\w-]+$/,
  W2 = 3,
  q2 = 2,
  K2 = 1,
  G2 = 10,
  Y2 = -2,
  gh = (e) => e === "*";
function Q2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(gh) && (r += Y2),
    t && (r += q2),
    n
      .filter((i) => !gh(i))
      .reduce((i, o) => i + (H2.test(o) ? W2 : o === "" ? K2 : G2), r)
  );
}
function J2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function X2(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = mh(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = mh(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: ar([o, f.pathname]),
        pathnameBase: rS(ar([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (o = ar([o, f.pathnameBase]));
  }
  return s;
}
function mh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Z2(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let y = a[f] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        g && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Z2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function eS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      mo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function xo(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function tS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? zr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : nS(n, t)) : t,
    search: iS(r),
    hash: oS(i),
  };
}
function nS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ec(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ov(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function tu(e, t) {
  let n = ov(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function nu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = zr(e))
    : ((i = Ne({}, e)),
      ce(
        !i.pathname || !i.pathname.includes("?"),
        ec("?", "pathname", "search", i)
      ),
      ce(
        !i.pathname || !i.pathname.includes("#"),
        ec("#", "pathname", "hash", i)
      ),
      ce(!i.search || !i.search.includes("#"), ec("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = tS(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const ar = (e) => e.join("/").replace(/\/\/+/g, "/"),
  rS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  iS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  oS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class _l {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function ru(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const sv = ["post", "put", "patch", "delete"],
  sS = new Set(sv),
  aS = ["get", ...sv],
  lS = new Set(aS),
  uS = new Set([301, 302, 303, 307, 308]),
  cS = new Set([307, 308]),
  tc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  fS = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Vo = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Md = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dS = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  av = "remix-router-transitions";
function pS(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ce(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let _ = e.detectErrorBoundary;
    i = (T) => ({ hasErrorBoundary: _(T) });
  } else i = dS;
  let o = {},
    s = Sl(e.routes, i, void 0, o),
    a,
    l = e.basename || "/",
    u = e.dataStrategy || yS,
    c = e.patchRoutesOnNavigation,
    f = Ne(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    g = new Set(),
    v = null,
    y = null,
    x = null,
    m = e.hydrationData != null,
    h = Qr(s, e.history.location, l),
    w = null;
  if (h == null && !c) {
    let _ = At(404, { pathname: e.history.location.pathname }),
      { matches: T, route: C } = Oh(s);
    (h = T), (w = { [C.id]: _ });
  }
  h &&
    !e.hydrationData &&
    $t(h, s, e.history.location.pathname).active &&
    (h = null);
  let E;
  if (h)
    if (h.some((_) => _.route.lazy)) E = !1;
    else if (!h.some((_) => _.route.loader)) E = !0;
    else if (f.v7_partialHydration) {
      let _ = e.hydrationData ? e.hydrationData.loaderData : null,
        T = e.hydrationData ? e.hydrationData.errors : null;
      if (T) {
        let C = h.findIndex((F) => T[F.route.id] !== void 0);
        E = h.slice(0, C + 1).every((F) => !mf(F.route, _, T));
      } else E = h.every((C) => !mf(C.route, _, T));
    } else E = e.hydrationData != null;
  else if (((E = !1), (h = []), f.v7_partialHydration)) {
    let _ = $t(null, s, e.history.location.pathname);
    _.active && _.matches && (h = _.matches);
  }
  let R,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: E,
      navigation: tc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || w,
      fetchers: new Map(),
      blockers: new Map(),
    },
    $ = Qe.Pop,
    O = !1,
    W,
    q = !1,
    ie = new Map(),
    pe = null,
    be = !1,
    he = !1,
    Ke = [],
    Xe = new Set(),
    xe = new Map(),
    B = 0,
    H = -1,
    ee = new Map(),
    re = new Set(),
    we = new Map(),
    We = new Map(),
    ge = new Set(),
    Rt = new Map(),
    it = new Map(),
    Jt;
  function na() {
    if (
      ((d = e.history.listen((_) => {
        let { action: T, location: C, delta: F } = _;
        if (Jt) {
          Jt(), (Jt = void 0);
          return;
        }
        mo(
          it.size === 0 || F != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let Y = N({
          currentLocation: S.location,
          nextLocation: C,
          historyAction: T,
        });
        if (Y && F != null) {
          let te = new Promise((le) => {
            Jt = le;
          });
          e.history.go(F * -1),
            L(Y, {
              state: "blocked",
              location: C,
              proceed() {
                L(Y, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  te.then(() => e.history.go(F));
              },
              reset() {
                let le = new Map(S.blockers);
                le.set(Y, Vo), ot({ blockers: le });
              },
            });
          return;
        }
        return Ie(T, C);
      })),
      n)
    ) {
      PS(t, ie);
      let _ = () => LS(t, ie);
      t.addEventListener("pagehide", _),
        (pe = () => t.removeEventListener("pagehide", _));
    }
    return S.initialized || Ie(Qe.Pop, S.location, { initialHydration: !0 }), R;
  }
  function xu() {
    d && d(),
      pe && pe(),
      g.clear(),
      W && W.abort(),
      S.fetchers.forEach((_, T) => gn(T)),
      S.blockers.forEach((_, T) => oe(T));
  }
  function ku(_) {
    return g.add(_), () => g.delete(_);
  }
  function ot(_, T) {
    T === void 0 && (T = {}), (S = Ne({}, S, _));
    let C = [],
      F = [];
    f.v7_fetcherPersist &&
      S.fetchers.forEach((Y, te) => {
        Y.state === "idle" && (ge.has(te) ? F.push(te) : C.push(te));
      }),
      [...g].forEach((Y) =>
        Y(S, {
          deletedFetchers: F,
          viewTransitionOpts: T.viewTransitionOpts,
          flushSync: T.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist &&
        (C.forEach((Y) => S.fetchers.delete(Y)), F.forEach((Y) => gn(Y)));
  }
  function Xt(_, T, C) {
    var F, Y;
    let { flushSync: te } = C === void 0 ? {} : C,
      le =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        wn(S.navigation.formMethod) &&
        S.navigation.state === "loading" &&
        ((F = _.state) == null ? void 0 : F._isRedirect) !== !0,
      J;
    T.actionData
      ? Object.keys(T.actionData).length > 0
        ? (J = T.actionData)
        : (J = null)
      : le
      ? (J = S.actionData)
      : (J = null);
    let Z = T.loaderData
        ? Eh(S.loaderData, T.loaderData, T.matches || [], T.errors)
        : S.loaderData,
      Q = S.blockers;
    Q.size > 0 && ((Q = new Map(Q)), Q.forEach((me, ft) => Q.set(ft, Vo)));
    let ne =
      O === !0 ||
      (S.navigation.formMethod != null &&
        wn(S.navigation.formMethod) &&
        ((Y = _.state) == null ? void 0 : Y._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      be ||
        $ === Qe.Pop ||
        ($ === Qe.Push
          ? e.history.push(_, _.state)
          : $ === Qe.Replace && e.history.replace(_, _.state));
    let de;
    if ($ === Qe.Pop) {
      let me = ie.get(S.location.pathname);
      me && me.has(_.pathname)
        ? (de = { currentLocation: S.location, nextLocation: _ })
        : ie.has(_.pathname) &&
          (de = { currentLocation: _, nextLocation: S.location });
    } else if (q) {
      let me = ie.get(S.location.pathname);
      me
        ? me.add(_.pathname)
        : ((me = new Set([_.pathname])), ie.set(S.location.pathname, me)),
        (de = { currentLocation: S.location, nextLocation: _ });
    }
    ot(
      Ne({}, T, {
        actionData: J,
        loaderData: Z,
        historyAction: $,
        location: _,
        initialized: !0,
        navigation: tc,
        revalidation: "idle",
        restoreScrollPosition: Jn(_, T.matches || S.matches),
        preventScrollReset: ne,
        blockers: Q,
      }),
      { viewTransitionOpts: de, flushSync: te === !0 }
    ),
      ($ = Qe.Pop),
      (O = !1),
      (q = !1),
      (be = !1),
      (he = !1),
      (Ke = []);
  }
  async function Ro(_, T) {
    if (typeof _ == "number") {
      e.history.go(_);
      return;
    }
    let C = gf(
        S.location,
        S.matches,
        l,
        f.v7_prependBasename,
        _,
        f.v7_relativeSplatPath,
        T == null ? void 0 : T.fromRouteId,
        T == null ? void 0 : T.relative
      ),
      {
        path: F,
        submission: Y,
        error: te,
      } = yh(f.v7_normalizeFormMethod, !1, C, T),
      le = S.location,
      J = Is(S.location, F, T && T.state);
    J = Ne({}, J, e.history.encodeLocation(J));
    let Z = T && T.replace != null ? T.replace : void 0,
      Q = Qe.Push;
    Z === !0
      ? (Q = Qe.Replace)
      : Z === !1 ||
        (Y != null &&
          wn(Y.formMethod) &&
          Y.formAction === S.location.pathname + S.location.search &&
          (Q = Qe.Replace));
    let ne =
        T && "preventScrollReset" in T ? T.preventScrollReset === !0 : void 0,
      de = (T && T.flushSync) === !0,
      me = N({ currentLocation: le, nextLocation: J, historyAction: Q });
    if (me) {
      L(me, {
        state: "blocked",
        location: J,
        proceed() {
          L(me, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: J,
          }),
            Ro(_, T);
        },
        reset() {
          let ft = new Map(S.blockers);
          ft.set(me, Vo), ot({ blockers: ft });
        },
      });
      return;
    }
    return await Ie(Q, J, {
      submission: Y,
      pendingError: te,
      preventScrollReset: ne,
      replace: T && T.replace,
      enableViewTransition: T && T.viewTransition,
      flushSync: de,
    });
  }
  function Ci() {
    if (
      (Ao(),
      ot({ revalidation: "loading" }),
      S.navigation.state !== "submitting")
    ) {
      if (S.navigation.state === "idle") {
        Ie(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ie($ || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
        enableViewTransition: q === !0,
      });
    }
  }
  async function Ie(_, T, C) {
    W && W.abort(),
      (W = null),
      ($ = _),
      (be = (C && C.startUninterruptedRevalidation) === !0),
      Nn(S.location, S.matches),
      (O = (C && C.preventScrollReset) === !0),
      (q = (C && C.enableViewTransition) === !0);
    let F = a || s,
      Y = C && C.overrideNavigation,
      te = Qr(F, T, l),
      le = (C && C.flushSync) === !0,
      J = $t(te, F, T.pathname);
    if ((J.active && J.matches && (te = J.matches), !te)) {
      let { error: Ce, notFoundMatches: ke, route: Be } = M(T.pathname);
      Xt(
        T,
        { matches: ke, loaderData: {}, errors: { [Be.id]: Ce } },
        { flushSync: le }
      );
      return;
    }
    if (
      S.initialized &&
      !he &&
      xS(S.location, T) &&
      !(C && C.submission && wn(C.submission.formMethod))
    ) {
      Xt(T, { matches: te }, { flushSync: le });
      return;
    }
    W = new AbortController();
    let Z = Ii(e.history, T, W.signal, C && C.submission),
      Q;
    if (C && C.pendingError)
      Q = [Jr(te).route.id, { type: Oe.error, error: C.pendingError }];
    else if (C && C.submission && wn(C.submission.formMethod)) {
      let Ce = await st(Z, T, C.submission, te, J.active, {
        replace: C.replace,
        flushSync: le,
      });
      if (Ce.shortCircuited) return;
      if (Ce.pendingActionResult) {
        let [ke, Be] = Ce.pendingActionResult;
        if (Bt(Be) && ru(Be.error) && Be.error.status === 404) {
          (W = null),
            Xt(T, {
              matches: Ce.matches,
              loaderData: {},
              errors: { [ke]: Be.error },
            });
          return;
        }
      }
      (te = Ce.matches || te),
        (Q = Ce.pendingActionResult),
        (Y = nc(T, C.submission)),
        (le = !1),
        (J.active = !1),
        (Z = Ii(e.history, Z.url, Z.signal));
    }
    let {
      shortCircuited: ne,
      matches: de,
      loaderData: me,
      errors: ft,
    } = await at(
      Z,
      T,
      te,
      J.active,
      Y,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      le,
      Q
    );
    ne ||
      ((W = null),
      Xt(T, Ne({ matches: de || te }, Th(Q), { loaderData: me, errors: ft })));
  }
  async function st(_, T, C, F, Y, te) {
    te === void 0 && (te = {}), Ao();
    let le = RS(T, C);
    if ((ot({ navigation: le }, { flushSync: te.flushSync === !0 }), Y)) {
      let Q = await Mt(F, T.pathname, _.signal);
      if (Q.type === "aborted") return { shortCircuited: !0 };
      if (Q.type === "error") {
        let ne = Jr(Q.partialMatches).route.id;
        return {
          matches: Q.partialMatches,
          pendingActionResult: [ne, { type: Oe.error, error: Q.error }],
        };
      } else if (Q.matches) F = Q.matches;
      else {
        let { notFoundMatches: ne, error: de, route: me } = M(T.pathname);
        return {
          matches: ne,
          pendingActionResult: [me.id, { type: Oe.error, error: de }],
        };
      }
    }
    let J,
      Z = rs(F, T);
    if (!Z.route.action && !Z.route.lazy)
      J = {
        type: Oe.error,
        error: At(405, {
          method: _.method,
          pathname: T.pathname,
          routeId: Z.route.id,
        }),
      };
    else if (
      ((J = (await bt("action", S, _, [Z], F, null))[Z.route.id]),
      _.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (ti(J)) {
      let Q;
      return (
        te && te.replace != null
          ? (Q = te.replace)
          : (Q =
              bh(J.response.headers.get("Location"), new URL(_.url), l) ===
              S.location.pathname + S.location.search),
        await In(_, J, !0, { submission: C, replace: Q }),
        { shortCircuited: !0 }
      );
    }
    if (Or(J)) throw At(400, { type: "defer-action" });
    if (Bt(J)) {
      let Q = Jr(F, Z.route.id);
      return (
        (te && te.replace) !== !0 && ($ = Qe.Push),
        { matches: F, pendingActionResult: [Q.route.id, J] }
      );
    }
    return { matches: F, pendingActionResult: [Z.route.id, J] };
  }
  async function at(_, T, C, F, Y, te, le, J, Z, Q, ne) {
    let de = Y || nc(T, te),
      me = te || le || Rh(de),
      ft = !be && (!f.v7_partialHydration || !Z);
    if (F) {
      if (ft) {
        let ze = Ze(ne);
        ot(Ne({ navigation: de }, ze !== void 0 ? { actionData: ze } : {}), {
          flushSync: Q,
        });
      }
      let Se = await Mt(C, T.pathname, _.signal);
      if (Se.type === "aborted") return { shortCircuited: !0 };
      if (Se.type === "error") {
        let ze = Jr(Se.partialMatches).route.id;
        return {
          matches: Se.partialMatches,
          loaderData: {},
          errors: { [ze]: Se.error },
        };
      } else if (Se.matches) C = Se.matches;
      else {
        let { error: ze, notFoundMatches: Ai, route: Do } = M(T.pathname);
        return { matches: Ai, loaderData: {}, errors: { [Do.id]: ze } };
      }
    }
    let Ce = a || s,
      [ke, Be] = wh(
        e.history,
        S,
        C,
        me,
        T,
        f.v7_partialHydration && Z === !0,
        f.v7_skipActionErrorRevalidation,
        he,
        Ke,
        Xe,
        ge,
        we,
        re,
        Ce,
        l,
        ne
      );
    if (
      (j(
        (Se) =>
          !(C && C.some((ze) => ze.route.id === Se)) ||
          (ke && ke.some((ze) => ze.route.id === Se))
      ),
      (H = ++B),
      ke.length === 0 && Be.length === 0)
    ) {
      let Se = V();
      return (
        Xt(
          T,
          Ne(
            {
              matches: C,
              loaderData: {},
              errors: ne && Bt(ne[1]) ? { [ne[0]]: ne[1].error } : null,
            },
            Th(ne),
            Se ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: Q }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ft) {
      let Se = {};
      if (!F) {
        Se.navigation = de;
        let ze = Ze(ne);
        ze !== void 0 && (Se.actionData = ze);
      }
      Be.length > 0 && (Se.fetchers = Ln(Be)), ot(Se, { flushSync: Q });
    }
    Be.forEach((Se) => {
      k(Se.key), Se.controller && xe.set(Se.key, Se.controller);
    });
    let Ri = () => Be.forEach((Se) => k(Se.key));
    W && W.signal.addEventListener("abort", Ri);
    let { loaderResults: Lo, fetcherResults: Xn } = await ra(S, C, ke, Be, _);
    if (_.signal.aborted) return { shortCircuited: !0 };
    W && W.signal.removeEventListener("abort", Ri),
      Be.forEach((Se) => xe.delete(Se.key));
    let jn = xa(Lo);
    if (jn)
      return await In(_, jn.result, !0, { replace: J }), { shortCircuited: !0 };
    if (((jn = xa(Xn)), jn))
      return (
        re.add(jn.key),
        await In(_, jn.result, !0, { replace: J }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ou, errors: Io } = kh(S, C, Lo, ne, Be, Xn, Rt);
    Rt.forEach((Se, ze) => {
      Se.subscribe((Ai) => {
        (Ai || Se.done) && Rt.delete(ze);
      });
    }),
      f.v7_partialHydration && Z && S.errors && (Io = Ne({}, S.errors, Io));
    let qr = V(),
      ia = X(H),
      oa = qr || ia || Be.length > 0;
    return Ne(
      { matches: C, loaderData: Ou, errors: Io },
      oa ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function Ze(_) {
    if (_ && !Bt(_[1])) return { [_[0]]: _[1].data };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function Ln(_) {
    return (
      _.forEach((T) => {
        let C = S.fetchers.get(T.key),
          F = Ho(void 0, C ? C.data : void 0);
        S.fetchers.set(T.key, F);
      }),
      new Map(S.fetchers)
    );
  }
  function De(_, T, C, F) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    k(_);
    let Y = (F && F.flushSync) === !0,
      te = a || s,
      le = gf(
        S.location,
        S.matches,
        l,
        f.v7_prependBasename,
        C,
        f.v7_relativeSplatPath,
        T,
        F == null ? void 0 : F.relative
      ),
      J = Qr(te, le, l),
      Z = $t(J, te, le);
    if ((Z.active && Z.matches && (J = Z.matches), !J)) {
      hn(_, T, At(404, { pathname: le }), { flushSync: Y });
      return;
    }
    let {
      path: Q,
      submission: ne,
      error: de,
    } = yh(f.v7_normalizeFormMethod, !0, le, F);
    if (de) {
      hn(_, T, de, { flushSync: Y });
      return;
    }
    let me = rs(J, Q),
      ft = (F && F.preventScrollReset) === !0;
    if (ne && wn(ne.formMethod)) {
      Eu(_, T, Q, me, J, Z.active, Y, ft, ne);
      return;
    }
    we.set(_, { routeId: T, path: Q }), Tu(_, T, Q, me, J, Z.active, Y, ft, ne);
  }
  async function Eu(_, T, C, F, Y, te, le, J, Z) {
    Ao(), we.delete(_);
    function Q(Ge) {
      if (!Ge.route.action && !Ge.route.lazy) {
        let Pi = At(405, { method: Z.formMethod, pathname: C, routeId: T });
        return hn(_, T, Pi, { flushSync: le }), !0;
      }
      return !1;
    }
    if (!te && Q(F)) return;
    let ne = S.fetchers.get(_);
    Dn(_, AS(Z, ne), { flushSync: le });
    let de = new AbortController(),
      me = Ii(e.history, C, de.signal, Z);
    if (te) {
      let Ge = await Mt(Y, C, me.signal);
      if (Ge.type === "aborted") return;
      if (Ge.type === "error") {
        hn(_, T, Ge.error, { flushSync: le });
        return;
      } else if (Ge.matches) {
        if (((Y = Ge.matches), (F = rs(Y, C)), Q(F))) return;
      } else {
        hn(_, T, At(404, { pathname: C }), { flushSync: le });
        return;
      }
    }
    xe.set(_, de);
    let ft = B,
      ke = (await bt("action", S, me, [F], Y, _))[F.route.id];
    if (me.signal.aborted) {
      xe.get(_) === de && xe.delete(_);
      return;
    }
    if (f.v7_fetcherPersist && ge.has(_)) {
      if (ti(ke) || Bt(ke)) {
        Dn(_, Sr(void 0));
        return;
      }
    } else {
      if (ti(ke))
        if ((xe.delete(_), H > ft)) {
          Dn(_, Sr(void 0));
          return;
        } else
          return (
            re.add(_),
            Dn(_, Ho(Z)),
            In(me, ke, !1, { fetcherSubmission: Z, preventScrollReset: J })
          );
      if (Bt(ke)) {
        hn(_, T, ke.error);
        return;
      }
    }
    if (Or(ke)) throw At(400, { type: "defer-action" });
    let Be = S.navigation.location || S.location,
      Ri = Ii(e.history, Be, de.signal),
      Lo = a || s,
      Xn =
        S.navigation.state !== "idle"
          ? Qr(Lo, S.navigation.location, l)
          : S.matches;
    ce(Xn, "Didn't find any matches after fetcher action");
    let jn = ++B;
    ee.set(_, jn);
    let Ou = Ho(Z, ke.data);
    S.fetchers.set(_, Ou);
    let [Io, qr] = wh(
      e.history,
      S,
      Xn,
      Z,
      Be,
      !1,
      f.v7_skipActionErrorRevalidation,
      he,
      Ke,
      Xe,
      ge,
      we,
      re,
      Lo,
      l,
      [F.route.id, ke]
    );
    qr
      .filter((Ge) => Ge.key !== _)
      .forEach((Ge) => {
        let Pi = Ge.key,
          rp = S.fetchers.get(Pi),
          o0 = Ho(void 0, rp ? rp.data : void 0);
        S.fetchers.set(Pi, o0),
          k(Pi),
          Ge.controller && xe.set(Pi, Ge.controller);
      }),
      ot({ fetchers: new Map(S.fetchers) });
    let ia = () => qr.forEach((Ge) => k(Ge.key));
    de.signal.addEventListener("abort", ia);
    let { loaderResults: oa, fetcherResults: Se } = await ra(S, Xn, Io, qr, Ri);
    if (de.signal.aborted) return;
    de.signal.removeEventListener("abort", ia),
      ee.delete(_),
      xe.delete(_),
      qr.forEach((Ge) => xe.delete(Ge.key));
    let ze = xa(oa);
    if (ze) return In(Ri, ze.result, !1, { preventScrollReset: J });
    if (((ze = xa(Se)), ze))
      return re.add(ze.key), In(Ri, ze.result, !1, { preventScrollReset: J });
    let { loaderData: Ai, errors: Do } = kh(S, Xn, oa, void 0, qr, Se, Rt);
    if (S.fetchers.has(_)) {
      let Ge = Sr(ke.data);
      S.fetchers.set(_, Ge);
    }
    X(jn),
      S.navigation.state === "loading" && jn > H
        ? (ce($, "Expected pending action"),
          W && W.abort(),
          Xt(S.navigation.location, {
            matches: Xn,
            loaderData: Ai,
            errors: Do,
            fetchers: new Map(S.fetchers),
          }))
        : (ot({
            errors: Do,
            loaderData: Eh(S.loaderData, Ai, Xn, Do),
            fetchers: new Map(S.fetchers),
          }),
          (he = !1));
  }
  async function Tu(_, T, C, F, Y, te, le, J, Z) {
    let Q = S.fetchers.get(_);
    Dn(_, Ho(Z, Q ? Q.data : void 0), { flushSync: le });
    let ne = new AbortController(),
      de = Ii(e.history, C, ne.signal);
    if (te) {
      let ke = await Mt(Y, C, de.signal);
      if (ke.type === "aborted") return;
      if (ke.type === "error") {
        hn(_, T, ke.error, { flushSync: le });
        return;
      } else if (ke.matches) (Y = ke.matches), (F = rs(Y, C));
      else {
        hn(_, T, At(404, { pathname: C }), { flushSync: le });
        return;
      }
    }
    xe.set(_, ne);
    let me = B,
      Ce = (await bt("loader", S, de, [F], Y, _))[F.route.id];
    if (
      (Or(Ce) && (Ce = (await Fd(Ce, de.signal, !0)) || Ce),
      xe.get(_) === ne && xe.delete(_),
      !de.signal.aborted)
    ) {
      if (ge.has(_)) {
        Dn(_, Sr(void 0));
        return;
      }
      if (ti(Ce))
        if (H > me) {
          Dn(_, Sr(void 0));
          return;
        } else {
          re.add(_), await In(de, Ce, !1, { preventScrollReset: J });
          return;
        }
      if (Bt(Ce)) {
        hn(_, T, Ce.error);
        return;
      }
      ce(!Or(Ce), "Unhandled fetcher deferred data"), Dn(_, Sr(Ce.data));
    }
  }
  async function In(_, T, C, F) {
    let {
      submission: Y,
      fetcherSubmission: te,
      preventScrollReset: le,
      replace: J,
    } = F === void 0 ? {} : F;
    T.response.headers.has("X-Remix-Revalidate") && (he = !0);
    let Z = T.response.headers.get("Location");
    ce(Z, "Expected a Location header on the redirect Response"),
      (Z = bh(Z, new URL(_.url), l));
    let Q = Is(S.location, Z, { _isRedirect: !0 });
    if (n) {
      let ke = !1;
      if (T.response.headers.has("X-Remix-Reload-Document")) ke = !0;
      else if (Md.test(Z)) {
        const Be = e.history.createURL(Z);
        ke = Be.origin !== t.location.origin || xo(Be.pathname, l) == null;
      }
      if (ke) {
        J ? t.location.replace(Z) : t.location.assign(Z);
        return;
      }
    }
    W = null;
    let ne =
        J === !0 || T.response.headers.has("X-Remix-Replace")
          ? Qe.Replace
          : Qe.Push,
      { formMethod: de, formAction: me, formEncType: ft } = S.navigation;
    !Y && !te && de && me && ft && (Y = Rh(S.navigation));
    let Ce = Y || te;
    if (cS.has(T.response.status) && Ce && wn(Ce.formMethod))
      await Ie(ne, Q, {
        submission: Ne({}, Ce, { formAction: Z }),
        preventScrollReset: le || O,
        enableViewTransition: C ? q : void 0,
      });
    else {
      let ke = nc(Q, Y);
      await Ie(ne, Q, {
        overrideNavigation: ke,
        fetcherSubmission: te,
        preventScrollReset: le || O,
        enableViewTransition: C ? q : void 0,
      });
    }
  }
  async function bt(_, T, C, F, Y, te) {
    let le,
      J = {};
    try {
      le = await vS(u, _, T, C, F, Y, te, o, i);
    } catch (Z) {
      return (
        F.forEach((Q) => {
          J[Q.route.id] = { type: Oe.error, error: Z };
        }),
        J
      );
    }
    for (let [Z, Q] of Object.entries(le))
      if (kS(Q)) {
        let ne = Q.result;
        J[Z] = {
          type: Oe.redirect,
          response: _S(ne, C, Z, Y, l, f.v7_relativeSplatPath),
        };
      } else J[Z] = await SS(Q);
    return J;
  }
  async function ra(_, T, C, F, Y) {
    let te = _.matches,
      le = bt("loader", _, Y, C, T, null),
      J = Promise.all(
        F.map(async (ne) => {
          if (ne.matches && ne.match && ne.controller) {
            let me = (
              await bt(
                "loader",
                _,
                Ii(e.history, ne.path, ne.controller.signal),
                [ne.match],
                ne.matches,
                ne.key
              )
            )[ne.match.route.id];
            return { [ne.key]: me };
          } else
            return Promise.resolve({
              [ne.key]: {
                type: Oe.error,
                error: At(404, { pathname: ne.path }),
              },
            });
        })
      ),
      Z = await le,
      Q = (await J).reduce((ne, de) => Object.assign(ne, de), {});
    return (
      await Promise.all([OS(T, Z, Y.signal, te, _.loaderData), CS(T, Q, F)]),
      { loaderResults: Z, fetcherResults: Q }
    );
  }
  function Ao() {
    (he = !0),
      Ke.push(...j()),
      we.forEach((_, T) => {
        xe.has(T) && Xe.add(T), k(T);
      });
  }
  function Dn(_, T, C) {
    C === void 0 && (C = {}),
      S.fetchers.set(_, T),
      ot(
        { fetchers: new Map(S.fetchers) },
        { flushSync: (C && C.flushSync) === !0 }
      );
  }
  function hn(_, T, C, F) {
    F === void 0 && (F = {});
    let Y = Jr(S.matches, T);
    gn(_),
      ot(
        { errors: { [Y.route.id]: C }, fetchers: new Map(S.fetchers) },
        { flushSync: (F && F.flushSync) === !0 }
      );
  }
  function Po(_) {
    return (
      f.v7_fetcherPersist &&
        (We.set(_, (We.get(_) || 0) + 1), ge.has(_) && ge.delete(_)),
      S.fetchers.get(_) || fS
    );
  }
  function gn(_) {
    let T = S.fetchers.get(_);
    xe.has(_) && !(T && T.state === "loading" && ee.has(_)) && k(_),
      we.delete(_),
      ee.delete(_),
      re.delete(_),
      ge.delete(_),
      Xe.delete(_),
      S.fetchers.delete(_);
  }
  function A(_) {
    if (f.v7_fetcherPersist) {
      let T = (We.get(_) || 0) - 1;
      T <= 0 ? (We.delete(_), ge.add(_)) : We.set(_, T);
    } else gn(_);
    ot({ fetchers: new Map(S.fetchers) });
  }
  function k(_) {
    let T = xe.get(_);
    T && (T.abort(), xe.delete(_));
  }
  function I(_) {
    for (let T of _) {
      let C = Po(T),
        F = Sr(C.data);
      S.fetchers.set(T, F);
    }
  }
  function V() {
    let _ = [],
      T = !1;
    for (let C of re) {
      let F = S.fetchers.get(C);
      ce(F, "Expected fetcher: " + C),
        F.state === "loading" && (re.delete(C), _.push(C), (T = !0));
    }
    return I(_), T;
  }
  function X(_) {
    let T = [];
    for (let [C, F] of ee)
      if (F < _) {
        let Y = S.fetchers.get(C);
        ce(Y, "Expected fetcher: " + C),
          Y.state === "loading" && (k(C), ee.delete(C), T.push(C));
      }
    return I(T), T.length > 0;
  }
  function D(_, T) {
    let C = S.blockers.get(_) || Vo;
    return it.get(_) !== T && it.set(_, T), C;
  }
  function oe(_) {
    S.blockers.delete(_), it.delete(_);
  }
  function L(_, T) {
    let C = S.blockers.get(_) || Vo;
    ce(
      (C.state === "unblocked" && T.state === "blocked") ||
        (C.state === "blocked" && T.state === "blocked") ||
        (C.state === "blocked" && T.state === "proceeding") ||
        (C.state === "blocked" && T.state === "unblocked") ||
        (C.state === "proceeding" && T.state === "unblocked"),
      "Invalid blocker state transition: " + C.state + " -> " + T.state
    );
    let F = new Map(S.blockers);
    F.set(_, T), ot({ blockers: F });
  }
  function N(_) {
    let { currentLocation: T, nextLocation: C, historyAction: F } = _;
    if (it.size === 0) return;
    it.size > 1 && mo(!1, "A router only supports one blocker at a time");
    let Y = Array.from(it.entries()),
      [te, le] = Y[Y.length - 1],
      J = S.blockers.get(te);
    if (
      !(J && J.state === "proceeding") &&
      le({ currentLocation: T, nextLocation: C, historyAction: F })
    )
      return te;
  }
  function M(_) {
    let T = At(404, { pathname: _ }),
      C = a || s,
      { matches: F, route: Y } = Oh(C);
    return j(), { notFoundMatches: F, route: Y, error: T };
  }
  function j(_) {
    let T = [];
    return (
      Rt.forEach((C, F) => {
        (!_ || _(F)) && (C.cancel(), T.push(F), Rt.delete(F));
      }),
      T
    );
  }
  function z(_, T, C) {
    if (((v = _), (x = T), (y = C || null), !m && S.navigation === tc)) {
      m = !0;
      let F = Jn(S.location, S.matches);
      F != null && ot({ restoreScrollPosition: F });
    }
    return () => {
      (v = null), (x = null), (y = null);
    };
  }
  function Qn(_, T) {
    return (
      (y &&
        y(
          _,
          T.map((F) => z2(F, S.loaderData))
        )) ||
      _.key
    );
  }
  function Nn(_, T) {
    if (v && x) {
      let C = Qn(_, T);
      v[C] = x();
    }
  }
  function Jn(_, T) {
    if (v) {
      let C = Qn(_, T),
        F = v[C];
      if (typeof F == "number") return F;
    }
    return null;
  }
  function $t(_, T, C) {
    if (c)
      if (_) {
        if (Object.keys(_[0].params).length > 0)
          return { active: !0, matches: Ba(T, C, l, !0) };
      } else return { active: !0, matches: Ba(T, C, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Mt(_, T, C) {
    if (!c) return { type: "success", matches: _ };
    let F = _;
    for (;;) {
      let Y = a == null,
        te = a || s,
        le = o;
      try {
        await c({
          path: T,
          matches: F,
          patch: (Q, ne) => {
            C.aborted || _h(Q, ne, te, le, i);
          },
        });
      } catch (Q) {
        return { type: "error", error: Q, partialMatches: F };
      } finally {
        Y && !C.aborted && (s = [...s]);
      }
      if (C.aborted) return { type: "aborted" };
      let J = Qr(te, T, l);
      if (J) return { type: "success", matches: J };
      let Z = Ba(te, T, l, !0);
      if (
        !Z ||
        (F.length === Z.length &&
          F.every((Q, ne) => Q.route.id === Z[ne].route.id))
      )
        return { type: "success", matches: null };
      F = Z;
    }
  }
  function r0(_) {
    (o = {}), (a = Sl(_, i, void 0, o));
  }
  function i0(_, T) {
    let C = a == null;
    _h(_, T, a || s, o, i), C && ((s = [...s]), ot({}));
  }
  return (
    (R = {
      get basename() {
        return l;
      },
      get future() {
        return f;
      },
      get state() {
        return S;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: na,
      subscribe: ku,
      enableScrollRestoration: z,
      navigate: Ro,
      fetch: De,
      revalidate: Ci,
      createHref: (_) => e.history.createHref(_),
      encodeLocation: (_) => e.history.encodeLocation(_),
      getFetcher: Po,
      deleteFetcher: A,
      dispose: xu,
      getBlocker: D,
      deleteBlocker: oe,
      patchRoutes: i0,
      _internalFetchControllers: xe,
      _internalActiveDeferreds: Rt,
      _internalSetRoutes: r0,
    }),
    R
  );
}
function hS(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function gf(e, t, n, r, i, o, s, a) {
  let l, u;
  if (s) {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === s)) {
        u = f;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = nu(i || ".", tu(l, o), xo(e.pathname, n) || e.pathname, a === "path");
  if (
    (i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") && u)
  ) {
    let f = Ud(c.search);
    if (u.route.index && !f)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && f) {
      let d = new URLSearchParams(c.search),
        g = d.getAll("index");
      d.delete("index"),
        g.filter((y) => y).forEach((y) => d.append("index", y));
      let v = d.toString();
      c.search = v ? "?" + v : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : ar([n, c.pathname])),
    hi(c)
  );
}
function yh(e, t, n, r) {
  if (!r || !hS(r)) return { path: n };
  if (r.formMethod && !TS(r.formMethod))
    return { path: n, error: At(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: At(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    s = e ? o.toUpperCase() : o.toLowerCase(),
    a = cv(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!wn(s)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, v) => {
              let [y, x] = v;
              return (
                "" +
                g +
                y +
                "=" +
                x +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!wn(s)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ce(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (r.formData) (l = yf(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = yf(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = xh(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = xh(l));
    } catch {
      return i();
    }
  let c = {
    formMethod: s,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (wn(c.formMethod)) return { path: n, submission: c };
  let f = zr(n);
  return (
    t && f.search && Ud(f.search) && l.append("index", ""),
    (f.search = "?" + l),
    { path: hi(f), submission: c }
  );
}
function vh(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((i) => i.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function wh(e, t, n, r, i, o, s, a, l, u, c, f, d, g, v, y) {
  let x = y ? (Bt(y[1]) ? y[1].error : y[1].data) : void 0,
    m = e.createURL(t.location),
    h = e.createURL(i),
    w = n;
  o && t.errors
    ? (w = vh(n, Object.keys(t.errors)[0], !0))
    : y && Bt(y[1]) && (w = vh(n, y[0]));
  let E = y ? y[1].statusCode : void 0,
    R = s && E && E >= 400,
    S = w.filter((O, W) => {
      let { route: q } = O;
      if (q.lazy) return !0;
      if (q.loader == null) return !1;
      if (o) return mf(q, t.loaderData, t.errors);
      if (
        gS(t.loaderData, t.matches[W], O) ||
        l.some((be) => be === O.route.id)
      )
        return !0;
      let ie = t.matches[W],
        pe = O;
      return Sh(
        O,
        Ne(
          {
            currentUrl: m,
            currentParams: ie.params,
            nextUrl: h,
            nextParams: pe.params,
          },
          r,
          {
            actionResult: x,
            actionStatus: E,
            defaultShouldRevalidate: R
              ? !1
              : a ||
                m.pathname + m.search === h.pathname + h.search ||
                m.search !== h.search ||
                lv(ie, pe),
          }
        )
      );
    }),
    $ = [];
  return (
    f.forEach((O, W) => {
      if (o || !n.some((he) => he.route.id === O.routeId) || c.has(W)) return;
      let q = Qr(g, O.path, v);
      if (!q) {
        $.push({
          key: W,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ie = t.fetchers.get(W),
        pe = rs(q, O.path),
        be = !1;
      d.has(W)
        ? (be = !1)
        : u.has(W)
        ? (u.delete(W), (be = !0))
        : ie && ie.state !== "idle" && ie.data === void 0
        ? (be = a)
        : (be = Sh(
            pe,
            Ne(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: x,
                actionStatus: E,
                defaultShouldRevalidate: R ? !1 : a,
              }
            )
          )),
        be &&
          $.push({
            key: W,
            routeId: O.routeId,
            path: O.path,
            matches: q,
            match: pe,
            controller: new AbortController(),
          });
    }),
    [S, $]
  );
}
function mf(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    i = n != null && n[e.id] !== void 0;
  return !r && i
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !r && !i;
}
function gS(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function lv(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Sh(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function _h(e, t, n, r, i) {
  var o;
  let s;
  if (e) {
    let u = r[e];
    ce(u, "No route found to patch children into: routeId = " + e),
      u.children || (u.children = []),
      (s = u.children);
  } else s = n;
  let a = t.filter((u) => !s.some((c) => uv(u, c))),
    l = Sl(
      a,
      i,
      [e || "_", "patch", String(((o = s) == null ? void 0 : o.length) || "0")],
      r
    );
  s.push(...l);
}
function uv(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, r) => {
          var i;
          return (i = t.children) == null ? void 0 : i.some((o) => uv(n, o));
        })
    : !1;
}
async function mS(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ce(i, "No route found in manifest");
  let o = {};
  for (let s in r) {
    let l = i[s] !== void 0 && s !== "hasErrorBoundary";
    mo(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !U2.has(s) && (o[s] = r[s]);
  }
  Object.assign(i, o), Object.assign(i, Ne({}, t(i), { lazy: void 0 }));
}
async function yS(e) {
  let { matches: t } = e,
    n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, o, s) => Object.assign(i, { [n[s].route.id]: o }),
    {}
  );
}
async function vS(e, t, n, r, i, o, s, a, l, u) {
  let c = o.map((g) => (g.route.lazy ? mS(g.route, l, a) : void 0)),
    f = o.map((g, v) => {
      let y = c[v],
        x = i.some((h) => h.route.id === g.route.id);
      return Ne({}, g, {
        shouldLoad: x,
        resolve: async (h) => (
          h &&
            r.method === "GET" &&
            (g.route.lazy || g.route.loader) &&
            (x = !0),
          x
            ? wS(t, r, g, y, h, u)
            : Promise.resolve({ type: Oe.data, result: void 0 })
        ),
      });
    }),
    d = await e({
      matches: f,
      request: r,
      params: o[0].params,
      fetcherKey: s,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return d;
}
async function wS(e, t, n, r, i, o) {
  let s,
    a,
    l = (u) => {
      let c,
        f = new Promise((v, y) => (c = y));
      (a = () => c()), t.signal.addEventListener("abort", a);
      let d = (v) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : u(
                { request: t, params: n.params, context: o },
                ...(v !== void 0 ? [v] : [])
              ),
        g = (async () => {
          try {
            return { type: "data", result: await (i ? i((y) => d(y)) : d()) };
          } catch (v) {
            return { type: "error", result: v };
          }
        })();
      return Promise.race([g, f]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [f] = await Promise.all([
            l(u).catch((d) => {
              c = d;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        s = f;
      } else if ((await r, (u = n.route[e]), u)) s = await l(u);
      else if (e === "action") {
        let c = new URL(t.url),
          f = c.pathname + c.search;
        throw At(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: Oe.data, result: void 0 };
    else if (u) s = await l(u);
    else {
      let c = new URL(t.url),
        f = c.pathname + c.search;
      throw At(404, { pathname: f });
    }
    ce(
      s.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (u) {
    return { type: Oe.error, result: u };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return s;
}
async function SS(e) {
  let { result: t, type: n } = e;
  if (fv(t)) {
    let u;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (c) {
      return { type: Oe.error, error: c };
    }
    return n === Oe.error
      ? {
          type: Oe.error,
          error: new _l(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Oe.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === Oe.error) {
    if (Ch(t)) {
      var r;
      if (t.data instanceof Error) {
        var i;
        return {
          type: Oe.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
        };
      }
      t = new _l(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: Oe.error, error: t, statusCode: ru(t) ? t.status : void 0 };
  }
  if (ES(t)) {
    var o, s;
    return {
      type: Oe.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Ch(t)) {
    var a, l;
    return {
      type: Oe.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (l = t.init) != null && l.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: Oe.data, data: t };
}
function _S(e, t, n, r, i, o) {
  let s = e.headers.get("Location");
  if (
    (ce(
      s,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Md.test(s))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (s = gf(new URL(t.url), a, i, !0, s, o)), e.headers.set("Location", s);
  }
  return e;
}
function bh(e, t, n) {
  if (Md.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = xo(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Ii(e, t, n, r) {
  let i = e.createURL(cv(t)).toString(),
    o = { signal: n };
  if (r && wn(r.formMethod)) {
    let { formMethod: s, formEncType: a } = r;
    (o.method = s.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = yf(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function yf(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function xh(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function bS(e, t, n, r, i) {
  let o = {},
    s = null,
    a,
    l = !1,
    u = {},
    c = n && Bt(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let d = f.route.id,
        g = t[d];
      if (
        (ce(!ti(g), "Cannot handle redirect results in processLoaderData"),
        Bt(g))
      ) {
        let v = g.error;
        c !== void 0 && ((v = c), (c = void 0)), (s = s || {});
        {
          let y = Jr(e, d);
          s[y.route.id] == null && (s[y.route.id] = v);
        }
        (o[d] = void 0),
          l || ((l = !0), (a = ru(g.error) ? g.error.status : 500)),
          g.headers && (u[d] = g.headers);
      } else
        Or(g)
          ? (r.set(d, g.deferredData),
            (o[d] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !l &&
              (a = g.statusCode),
            g.headers && (u[d] = g.headers))
          : ((o[d] = g.data),
            g.statusCode && g.statusCode !== 200 && !l && (a = g.statusCode),
            g.headers && (u[d] = g.headers));
    }),
    c !== void 0 && n && ((s = { [n[0]]: c }), (o[n[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: u }
  );
}
function kh(e, t, n, r, i, o, s) {
  let { loaderData: a, errors: l } = bS(t, n, r, s);
  return (
    i.forEach((u) => {
      let { key: c, match: f, controller: d } = u,
        g = o[c];
      if (
        (ce(g, "Did not find corresponding fetcher result"),
        !(d && d.signal.aborted))
      )
        if (Bt(g)) {
          let v = Jr(e.matches, f == null ? void 0 : f.route.id);
          (l && l[v.route.id]) || (l = Ne({}, l, { [v.route.id]: g.error })),
            e.fetchers.delete(c);
        } else if (ti(g)) ce(!1, "Unhandled fetcher revalidation redirect");
        else if (Or(g)) ce(!1, "Unhandled fetcher deferred data");
        else {
          let v = Sr(g.data);
          e.fetchers.set(c, v);
        }
    }),
    { loaderData: a, errors: l }
  );
}
function Eh(e, t, n, r) {
  let i = Ne({}, t);
  for (let o of n) {
    let s = o.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (i[s] = t[s])
        : e[s] !== void 0 && o.route.loader && (i[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return i;
}
function Th(e) {
  return e
    ? Bt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Jr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Oh(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function At(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: o,
      message: s,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (l = "defer() is not supported in actions")
          : o === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new _l(e || 500, a, new Error(l), !0)
  );
}
function xa(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (ti(i)) return { key: r, result: i };
  }
}
function cv(e) {
  let t = typeof e == "string" ? zr(e) : e;
  return hi(Ne({}, t, { hash: "" }));
}
function xS(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function kS(e) {
  return fv(e.result) && uS.has(e.result.status);
}
function Or(e) {
  return e.type === Oe.deferred;
}
function Bt(e) {
  return e.type === Oe.error;
}
function ti(e) {
  return (e && e.type) === Oe.redirect;
}
function Ch(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function ES(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function fv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function TS(e) {
  return lS.has(e.toLowerCase());
}
function wn(e) {
  return sS.has(e.toLowerCase());
}
async function OS(e, t, n, r, i) {
  let o = Object.entries(t);
  for (let s = 0; s < o.length; s++) {
    let [a, l] = o[s],
      u = e.find((d) => (d == null ? void 0 : d.route.id) === a);
    if (!u) continue;
    let c = r.find((d) => d.route.id === u.route.id),
      f = c != null && !lv(c, u) && (i && i[u.route.id]) !== void 0;
    Or(l) &&
      f &&
      (await Fd(l, n, !1).then((d) => {
        d && (t[a] = d);
      }));
  }
}
async function CS(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: o, controller: s } = n[r],
      a = t[i];
    e.find((u) => (u == null ? void 0 : u.route.id) === o) &&
      Or(a) &&
      (ce(
        s,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await Fd(a, s.signal, !0).then((u) => {
        u && (t[i] = u);
      }));
  }
}
async function Fd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Oe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Oe.error, error: i };
      }
    return { type: Oe.data, data: e.deferredData.data };
  }
}
function Ud(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function rs(e, t) {
  let n = typeof t == "string" ? zr(t).search : t.search;
  if (e[e.length - 1].route.index && Ud(n || "")) return e[e.length - 1];
  let r = ov(e);
  return r[r.length - 1];
}
function Rh(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function nc(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function RS(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ho(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function AS(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Sr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function PS(e, t) {
  try {
    let n = e.sessionStorage.getItem(av);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function LS(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(av, JSON.stringify(n));
    } catch (r) {
      mo(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bl.apply(this, arguments)
  );
}
const iu = p.createContext(null),
  dv = p.createContext(null),
  Vr = p.createContext(null),
  Bd = p.createContext(null),
  Yn = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pv = p.createContext(null);
function IS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ko() || ce(!1);
  let { basename: r, navigator: i } = p.useContext(Vr),
    { hash: o, pathname: s, search: a } = gv(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : ar([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function ko() {
  return p.useContext(Bd) != null;
}
function yr() {
  return ko() || ce(!1), p.useContext(Bd).location;
}
function hv(e) {
  p.useContext(Vr).static || p.useLayoutEffect(e);
}
function qs() {
  let { isDataRoute: e } = p.useContext(Yn);
  return e ? KS() : DS();
}
function DS() {
  ko() || ce(!1);
  let e = p.useContext(iu),
    { basename: t, future: n, navigator: r } = p.useContext(Vr),
    { matches: i } = p.useContext(Yn),
    { pathname: o } = yr(),
    s = JSON.stringify(tu(i, n.v7_relativeSplatPath)),
    a = p.useRef(!1);
  return (
    hv(() => {
      a.current = !0;
    }),
    p.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = nu(u, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : ar([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
const NS = p.createContext(null);
function jS(e) {
  let t = p.useContext(Yn).outlet;
  return t && p.createElement(NS.Provider, { value: e }, t);
}
function zd() {
  let { matches: e } = p.useContext(Yn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function gv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(Vr),
    { matches: i } = p.useContext(Yn),
    { pathname: o } = yr(),
    s = JSON.stringify(tu(i, r.v7_relativeSplatPath));
  return p.useMemo(() => nu(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function $S(e, t, n, r) {
  ko() || ce(!1);
  let { navigator: i } = p.useContext(Vr),
    { matches: o } = p.useContext(Yn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = yr(),
    c;
  c = u;
  let f = c.pathname || "/",
    d = f;
  if (l !== "/") {
    let y = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let g = Qr(e, { pathname: d });
  return zS(
    g &&
      g.map((y) =>
        Object.assign({}, y, {
          params: Object.assign({}, a, y.params),
          pathname: ar([
            l,
            i.encodeLocation
              ? i.encodeLocation(y.pathname).pathname
              : y.pathname,
          ]),
          pathnameBase:
            y.pathnameBase === "/"
              ? l
              : ar([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(y.pathnameBase).pathname
                    : y.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function MS() {
  let e = qS(),
    t = ru(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? p.createElement("pre", { style: i }, n) : null,
    null
  );
}
const FS = p.createElement(MS, null);
class US extends p.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          Yn.Provider,
          { value: this.props.routeContext },
          p.createElement(pv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function BS(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = p.useContext(iu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(Yn.Provider, { value: t }, r)
  );
}
function zS(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || ce(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          v =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let g,
      v = !1,
      y = null,
      x = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || FS),
      l &&
        (u < 0 && d === 0
          ? (GS("route-fallback"), (v = !0), (x = null))
          : u === d &&
            ((v = !0), (x = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, d + 1)),
      h = () => {
        let w;
        return (
          g
            ? (w = y)
            : v
            ? (w = x)
            : f.route.Component
            ? (w = p.createElement(f.route.Component, null))
            : f.route.element
            ? (w = f.route.element)
            : (w = c),
          p.createElement(BS, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? p.createElement(US, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var mv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(mv || {}),
  yv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(yv || {});
function VS(e) {
  let t = p.useContext(iu);
  return t || ce(!1), t;
}
function HS(e) {
  let t = p.useContext(dv);
  return t || ce(!1), t;
}
function WS(e) {
  let t = p.useContext(Yn);
  return t || ce(!1), t;
}
function vv(e) {
  let t = WS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function qS() {
  var e;
  let t = p.useContext(pv),
    n = HS(),
    r = vv();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function KS() {
  let { router: e } = VS(mv.UseNavigateStable),
    t = vv(yv.UseNavigateStable),
    n = p.useRef(!1);
  return (
    hv(() => {
      n.current = !0;
    }),
    p.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, bl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Ah = {};
function GS(e, t, n) {
  Ah[e] || (Ah[e] = !0);
}
const Ph = {};
function YS(e, t) {
  Ph[t] || ((Ph[t] = !0), console.warn(t));
}
const Di = (e, t, n) =>
  YS(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function QS(e, t) {
  (e != null && e.v7_startTransition) ||
    Di(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      (!t || !t.v7_relativeSplatPath) &&
      Di(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      ),
    t &&
      (t.v7_fetcherPersist ||
        Di(
          "v7_fetcherPersist",
          "The persistence behavior of fetchers is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
        ),
      t.v7_normalizeFormMethod ||
        Di(
          "v7_normalizeFormMethod",
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
        ),
      t.v7_partialHydration ||
        Di(
          "v7_partialHydration",
          "`RouterProvider` hydration behavior is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
        ),
      t.v7_skipActionErrorRevalidation ||
        Di(
          "v7_skipActionErrorRevalidation",
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
        ));
}
function JS(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  ko() || ce(!1);
  let { future: o, static: s } = p.useContext(Vr),
    { matches: a } = p.useContext(Yn),
    { pathname: l } = yr(),
    u = qs(),
    c = nu(t, tu(a, o.v7_relativeSplatPath), l, i === "path"),
    f = JSON.stringify(c);
  return (
    p.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: i }),
      [u, f, i, n, r]
    ),
    null
  );
}
function Vd(e) {
  return jS(e.context);
}
function XS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Qe.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  ko() && ce(!1);
  let l = t.replace(/^\/*/, "/"),
    u = p.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: bl({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = zr(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: g = null,
      key: v = "default",
    } = r,
    y = p.useMemo(() => {
      let x = xo(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: d, state: g, key: v },
            navigationType: i,
          };
    }, [l, c, f, d, g, v, i]);
  return y == null
    ? null
    : p.createElement(
        Vr.Provider,
        { value: u },
        p.createElement(Bd.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function ZS(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: p.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: p.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: p.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ds() {
  return (
    (Ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ds.apply(this, arguments)
  );
}
function e_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function t_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function n_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !t_(e);
}
const r_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  i_ = "6";
try {
  window.__reactRouterVersion = i_;
} catch {}
function o_(e, t) {
  return pS({
    basename: void 0,
    future: Ds({}, void 0, { v7_prependBasename: !0 }),
    history: $2({ window: void 0 }),
    hydrationData: s_(),
    routes: e,
    mapRouteProperties: ZS,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function s_() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ds({}, t, { errors: a_(t.errors) })), t;
}
function a_(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new _l(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let s = new o(i.message);
            (s.stack = ""), (n[r] = s);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const l_ = p.createContext({ isTransitioning: !1 }),
  u_ = p.createContext(new Map()),
  c_ = "startTransition",
  Lh = k0[c_],
  f_ = "flushSync",
  Ih = j2[f_];
function d_(e) {
  Lh ? Lh(e) : e();
}
function Wo(e) {
  Ih ? Ih(e) : e();
}
class p_ {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function h_(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = p.useState(n.state),
    [s, a] = p.useState(),
    [l, u] = p.useState({ isTransitioning: !1 }),
    [c, f] = p.useState(),
    [d, g] = p.useState(),
    [v, y] = p.useState(),
    x = p.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    h = p.useCallback(
      (O) => {
        m ? d_(O) : O();
      },
      [m]
    ),
    w = p.useCallback(
      (O, W) => {
        let { deletedFetchers: q, flushSync: ie, viewTransitionOpts: pe } = W;
        q.forEach((he) => x.current.delete(he)),
          O.fetchers.forEach((he, Ke) => {
            he.data !== void 0 && x.current.set(Ke, he.data);
          });
        let be =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!pe || be) {
          ie ? Wo(() => o(O)) : h(() => o(O));
          return;
        }
        if (ie) {
          Wo(() => {
            d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: pe.currentLocation,
                nextLocation: pe.nextLocation,
              });
          });
          let he = n.window.document.startViewTransition(() => {
            Wo(() => o(O));
          });
          he.finished.finally(() => {
            Wo(() => {
              f(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Wo(() => g(he));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            y({
              state: O,
              currentLocation: pe.currentLocation,
              nextLocation: pe.nextLocation,
            }))
          : (a(O),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: pe.currentLocation,
              nextLocation: pe.nextLocation,
            }));
      },
      [n.window, d, c, x, h]
    );
  p.useLayoutEffect(() => n.subscribe(w), [n, w]),
    p.useEffect(() => {
      l.isTransitioning && !l.flushSync && f(new p_());
    }, [l]),
    p.useEffect(() => {
      if (c && s && n.window) {
        let O = s,
          W = c.promise,
          q = n.window.document.startViewTransition(async () => {
            h(() => o(O)), await W;
          });
        q.finished.finally(() => {
          f(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(q);
      }
    }, [h, s, c, n.window]),
    p.useEffect(() => {
      c && s && i.location.key === s.location.key && c.resolve();
    }, [c, d, i.location, s]),
    p.useEffect(() => {
      !l.isTransitioning &&
        v &&
        (a(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        y(void 0));
    }, [l.isTransitioning, v]),
    p.useEffect(() => {}, []);
  let E = p.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (O) => n.navigate(O),
        push: (O, W, q) =>
          n.navigate(O, {
            state: W,
            preventScrollReset: q == null ? void 0 : q.preventScrollReset,
          }),
        replace: (O, W, q) =>
          n.navigate(O, {
            replace: !0,
            state: W,
            preventScrollReset: q == null ? void 0 : q.preventScrollReset,
          }),
      }),
      [n]
    ),
    R = n.basename || "/",
    S = p.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: R }),
      [n, E, R]
    ),
    $ = p.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return (
    p.useEffect(() => QS(r, n.future), [r, n.future]),
    p.createElement(
      p.Fragment,
      null,
      p.createElement(
        iu.Provider,
        { value: S },
        p.createElement(
          dv.Provider,
          { value: i },
          p.createElement(
            u_.Provider,
            { value: x.current },
            p.createElement(
              l_.Provider,
              { value: l },
              p.createElement(
                XS,
                {
                  basename: R,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: E,
                  future: $,
                },
                i.initialized || n.future.v7_partialHydration
                  ? p.createElement(g_, {
                      routes: n.routes,
                      future: n.future,
                      state: i,
                    })
                  : t
              )
            )
          )
        )
      ),
      null
    )
  );
}
const g_ = p.memo(m_);
function m_(e) {
  let { routes: t, future: n, state: r } = e;
  return $S(t, void 0, r, n);
}
const y_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  v_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Et = p.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = e_(t, r_),
      { basename: g } = p.useContext(Vr),
      v,
      y = !1;
    if (typeof u == "string" && v_.test(u) && ((v = u), y_))
      try {
        let w = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          R = xo(E.pathname, g);
        E.origin === w.origin && R != null
          ? (u = R + E.search + E.hash)
          : (y = !0);
      } catch {}
    let x = IS(u, { relative: i }),
      m = w_(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function h(w) {
      r && r(w), w.defaultPrevented || m(w);
    }
    return p.createElement(
      "a",
      Ds({}, d, { href: v || x, onClick: y || o ? r : h, ref: n, target: l })
    );
  });
var Dh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Dh || (Dh = {}));
var Nh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Nh || (Nh = {}));
function w_(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = qs(),
    u = yr(),
    c = gv(e, { relative: s });
  return p.useCallback(
    (f) => {
      if (n_(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : hi(u) === hi(c);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, o, s, a]
  );
}
const S_ = "modulepreload",
  __ = function (e) {
    return "/" + e;
  },
  jh = {},
  rt = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        a =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = __(l)), l in jh)) return;
          jh[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : S_),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, g) => {
              f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    function o(s) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
        throw s;
    }
    return i.then((s) => {
      for (const a of s || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  },
  b_ = "_wrapper_dltkq_1",
  x_ = "_container_dltkq_13",
  k_ = "_burger_dltkq_22",
  E_ = "_open_dltkq_56",
  T_ = "_menuWrapper_dltkq_64",
  O_ = "_auth_dltkq_81",
  C_ = "_navbarMenu_dltkq_95",
  R_ = "_right_dltkq_103",
  A_ = "_navLink_dltkq_111",
  P_ = "_active_dltkq_119",
  L_ = "_accountWrapper_dltkq_123",
  I_ = "_authLinksWrapper_dltkq_138",
  D_ = "_authLoginLinkWrapper_dltkq_139",
  N_ = "_or_dltkq_145",
  j_ = "_supportLink_dltkq_152",
  $_ = "_account_dltkq_123",
  Te = {
    wrapper: b_,
    container: x_,
    burger: k_,
    open: E_,
    menuWrapper: T_,
    auth: O_,
    navbarMenu: C_,
    right: R_,
    navLink: A_,
    active: P_,
    accountWrapper: L_,
    authLinksWrapper: I_,
    authLoginLinkWrapper: D_,
    or: N_,
    supportLink: j_,
    account: $_,
  },
  M_ = (...e) => {
    console != null &&
      console.warn &&
      (si(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  $h = {},
  vf = (...e) => {
    (si(e[0]) && $h[e[0]]) || (si(e[0]) && ($h[e[0]] = new Date()), M_(...e));
  },
  wv = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  wf = (e, t, n) => {
    e.loadNamespaces(t, wv(e, n));
  },
  Mh = (e, t, n, r) => {
    if (
      (si(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return wf(e, n, r);
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
      e.loadLanguages(t, wv(e, r));
  },
  F_ = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (vf("i18n.languages were undefined or empty", t.languages), !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, i) => {
            var o;
            if (
              ((o = n.bindI18n) == null
                ? void 0
                : o.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !i(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  si = (e) => typeof e == "string",
  U_ = (e) => typeof e == "object" && e !== null,
  B_ =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  z_ = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  V_ = (e) => z_[e],
  H_ = (e) => e.replace(B_, V_);
let Sf = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: H_,
};
const W_ = (e = {}) => {
    Sf = { ...Sf, ...e };
  },
  q_ = () => Sf;
let Sv;
const K_ = (e) => {
    Sv = e;
  },
  G_ = () => Sv,
  Y_ = {
    type: "3rdParty",
    init(e) {
      W_(e.options.react), K_(e);
    },
  },
  Q_ = p.createContext();
class J_ {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const X_ = (e, t) => {
    const n = p.useRef();
    return (
      p.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  _v = (e, t, n, r) => e.getFixedT(t, n, r),
  Z_ = (e, t, n, r) => p.useCallback(_v(e, t, n, r), [e, t, n, r]),
  ou = (e, t = {}) => {
    var E, R, S, $;
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = p.useContext(Q_) || {},
      o = n || r || G_();
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new J_()), !o)) {
      vf(
        "You will need to pass in an i18next instance by using initReactI18next"
      );
      const O = (q, ie) =>
          si(ie)
            ? ie
            : U_(ie) && si(ie.defaultValue)
            ? ie.defaultValue
            : Array.isArray(q)
            ? q[q.length - 1]
            : q,
        W = [O, {}, !1];
      return (W.t = O), (W.i18n = {}), (W.ready = !1), W;
    }
    (E = o.options.react) != null &&
      E.wait &&
      vf(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const s = { ...q_(), ...o.options.react, ...t },
      { useSuspense: a, keyPrefix: l } = s;
    let u = e || i || ((R = o.options) == null ? void 0 : R.defaultNS);
    (u = si(u) ? [u] : u || ["translation"]),
      ($ = (S = o.reportNamespaces).addUsedNamespaces) == null || $.call(S, u);
    const c =
        (o.isInitialized || o.initializedStoreOnce) &&
        u.every((O) => F_(O, o, s)),
      f = Z_(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l),
      d = () => f,
      g = () => _v(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l),
      [v, y] = p.useState(d);
    let x = u.join();
    t.lng && (x = `${t.lng}${x}`);
    const m = X_(x),
      h = p.useRef(!0);
    p.useEffect(() => {
      const { bindI18n: O, bindI18nStore: W } = s;
      (h.current = !0),
        !c &&
          !a &&
          (t.lng
            ? Mh(o, t.lng, u, () => {
                h.current && y(g);
              })
            : wf(o, u, () => {
                h.current && y(g);
              })),
        c && m && m !== x && h.current && y(g);
      const q = () => {
        h.current && y(g);
      };
      return (
        O && (o == null || o.on(O, q)),
        W && (o == null || o.store.on(W, q)),
        () => {
          (h.current = !1),
            o && (O == null || O.split(" ").forEach((ie) => o.off(ie, q))),
            W && o && W.split(" ").forEach((ie) => o.store.off(ie, q));
        }
      );
    }, [o, x]),
      p.useEffect(() => {
        h.current && c && y(d);
      }, [o, l, c]);
    const w = [v, o, c];
    if (((w.t = v), (w.i18n = o), (w.ready = c), c || (!c && !a))) return w;
    throw new Promise((O) => {
      t.lng ? Mh(o, t.lng, u, () => O()) : wf(o, u, () => O());
    });
  },
  eb = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: 26,
        height: 26,
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("path", {
        d: "M12.9985 11.7587C16.1658 11.7587 18.7334 9.35025 18.7334 6.37933C18.7334 3.40841 16.1658 1 12.9985 1C9.83126 1 7.26367 3.40841 7.26367 6.37933C7.26367 9.35025 9.83126 11.7587 12.9985 11.7587Z",
        stroke: "#FBFBFB",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement("path", {
        d: "M3.90803 25.0002H22.092C24.1069 25.0002 25.659 23.375 24.7182 21.7038C23.3339 19.2453 20.1783 16.3105 13 16.3105C5.82173 16.3105 2.66607 19.2453 1.28189 21.7038C0.340893 23.375 1.89303 25.0002 3.90803 25.0002Z",
        stroke: "#FBFBFB",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    ),
  tb = p.forwardRef(eb);
var bv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var s = "";
      for (var a in o) t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? (o ? o + " " + s : o + s) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(bv);
var nb = bv.exports;
const en = Si(nb),
  rb = "_button_1wisi_1",
  ib = "_blueShadow_1wisi_12",
  Fh = { button: rb, blueShadow: ib },
  Uh = ({ icon: e, className: t, category: n = "blue" }) =>
    b.jsx("button", {
      className: en(Fh.button, Fh[n], t),
      children: b.jsx(e, {}),
    }),
  ob = "_wrapper_1xdl1_1",
  sb = "_button_1xdl1_5",
  ab = "_container_1xdl1_9",
  lb = "_langButton_1xdl1_17",
  ub = "_active_1xdl1_26",
  cb = "_open_1xdl1_41",
  fb = "_currLang_1xdl1_41",
  db = "_dropdown_1xdl1_56",
  Zn = {
    wrapper: ob,
    button: sb,
    container: ab,
    langButton: lb,
    active: ub,
    open: cb,
    currLang: fb,
    dropdown: db,
  },
  pb = ({ callback: e }) => {
    const t = p.useRef(null),
      n = p.useRef(null);
    return (
      p.useEffect(() => {
        const r = (i) => {
          if (t.current && !t.current.contains(i.target)) {
            if (n.current && n.current.contains(i.target)) return;
            e();
          }
        };
        return (
          document.addEventListener("click", r, !0),
          () => {
            document.removeEventListener("click", r, !0);
          }
        );
      }, []),
      { closeRef: t, openerRef: n }
    );
  },
  ae = (e) => typeof e == "string",
  qo = () => {
    let e, t;
    const n = new Promise((r, i) => {
      (e = r), (t = i);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  Bh = (e) => (e == null ? "" : "" + e),
  hb = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  gb = /###/g,
  zh = (e) => (e && e.indexOf("###") > -1 ? e.replace(gb, ".") : e),
  Vh = (e) => !e || ae(e),
  ps = (e, t, n) => {
    const r = ae(t) ? t.split(".") : t;
    let i = 0;
    for (; i < r.length - 1; ) {
      if (Vh(e)) return {};
      const o = zh(r[i]);
      !e[o] && n && (e[o] = new n()),
        Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {}),
        ++i;
    }
    return Vh(e) ? {} : { obj: e, k: zh(r[i]) };
  },
  Hh = (e, t, n) => {
    const { obj: r, k: i } = ps(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[i] = n;
      return;
    }
    let o = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      a = ps(e, s, Object);
    for (; a.obj === void 0 && s.length; )
      (o = `${s[s.length - 1]}.${o}`),
        (s = s.slice(0, s.length - 1)),
        (a = ps(e, s, Object)),
        a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${o}`] = n;
  },
  mb = (e, t, n, r) => {
    const { obj: i, k: o } = ps(e, t, Object);
    (i[o] = i[o] || []), i[o].push(n);
  },
  xl = (e, t) => {
    const { obj: n, k: r } = ps(e, t);
    if (n) return n[r];
  },
  yb = (e, t, n) => {
    const r = xl(e, n);
    return r !== void 0 ? r : xl(t, n);
  },
  xv = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? ae(e[r]) ||
            e[r] instanceof String ||
            ae(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : xv(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  Ni = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var vb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const wb = (e) => (ae(e) ? e.replace(/[&<>"'\/]/g, (t) => vb[t]) : e);
class Sb {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const _b = [" ", ",", "?", "!", ";"],
  bb = new Sb(20),
  xb = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = _b.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0) return !0;
    const i = bb.getRegExp(
      `(${r.map((s) => (s === "?" ? "\\?" : s)).join("|")})`
    );
    let o = !i.test(e);
    if (!o) {
      const s = e.indexOf(n);
      s > 0 && !i.test(e.substring(0, s)) && (o = !0);
    }
    return o;
  },
  _f = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let i = e;
    for (let o = 0; o < r.length; ) {
      if (!i || typeof i != "object") return;
      let s,
        a = "";
      for (let l = o; l < r.length; ++l)
        if ((l !== o && (a += n), (a += r[l]), (s = i[a]), s !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof s) > -1 &&
            l < r.length - 1
          )
            continue;
          o += l - o + 1;
          break;
        }
      i = s;
    }
    return i;
  },
  kl = (e) => e && e.replace("_", "-"),
  kb = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class El {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || kb),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (ae(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new El(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new El(this.logger, t)
    );
  }
}
var zn = new El();
class su {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [a, l] = s;
        for (let u = 0; u < l; u++) a(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((s) => {
          let [a, l] = s;
          for (let u = 0; u < l; u++) a.apply(a, [t, ...r]);
        });
  }
}
class Wh extends su {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      s =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1
      ? (a = t.split("."))
      : ((a = [t, n]),
        r &&
          (Array.isArray(r)
            ? a.push(...r)
            : ae(r) && o
            ? a.push(...r.split(o))
            : a.push(r)));
    const l = xl(this.data, a);
    return (
      !l &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = a[0]), (n = a[1]), (r = a.slice(2).join("."))),
      l || !s || !ae(r)
        ? l
        : _f(this.data && this.data[t] && this.data[t][n], r, o)
    );
  }
  addResource(t, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)),
      t.indexOf(".") > -1 && ((a = t.split(".")), (i = n), (n = a[1])),
      this.addNamespaces(n),
      Hh(this.data, a, i),
      o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in r)
      (ae(r[o]) || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      a = [t, n];
    t.indexOf(".") > -1 && ((a = t.split(".")), (i = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let l = xl(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? xv(l, r, o) : (l = { ...l, ...r }),
      Hh(this.data, a, l),
      s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var kv = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, i));
      }),
      t
    );
  },
};
const qh = {};
class Tl extends su {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      hb(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = zn.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !xb(t, r, i);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: ae(o) ? [o] : o };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i));
    }
    return { key: t, namespaces: ae(o) ? [o] : o };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      l = a[a.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const E = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${E}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${E}${s}`;
      }
      return i
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const f = this.resolve(t, n);
    let d = f && f.res;
    const g = (f && f.usedKey) || s,
      v = (f && f.exactUsedKey) || s,
      y = Object.prototype.toString.apply(d),
      x = ["[object Number]", "[object Function]", "[object RegExp]"],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject,
      w = !ae(d) && typeof d != "boolean" && typeof d != "number";
    if (h && d && w && x.indexOf(y) < 0 && !(ae(m) && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const E = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, d, { ...n, ns: a })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return i
          ? ((f.res = E), (f.usedParams = this.getUsedParamsDetails(n)), f)
          : E;
      }
      if (o) {
        const E = Array.isArray(d),
          R = E ? [] : {},
          S = E ? v : g;
        for (const $ in d)
          if (Object.prototype.hasOwnProperty.call(d, $)) {
            const O = `${S}${o}${$}`;
            (R[$] = this.translate(O, { ...n, joinArrays: !1, ns: a })),
              R[$] === O && (R[$] = d[$]);
          }
        d = R;
      }
    } else if (h && ae(m) && Array.isArray(d))
      (d = d.join(m)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let E = !1,
        R = !1;
      const S = n.count !== void 0 && !ae(n.count),
        $ = Tl.hasDefaultValue(n),
        O = S ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        W =
          n.ordinal && S
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        q =
          S &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        ie =
          (q && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${O}`] ||
          n[`defaultValue${W}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && $ && ((E = !0), (d = ie)),
        this.isValidLookup(d) || ((R = !0), (d = s));
      const be =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          R
            ? void 0
            : d,
        he = $ && ie !== d && this.options.updateMissing;
      if (R || E || he) {
        if (
          (this.logger.log(
            he ? "updateKey" : "missingKey",
            u,
            l,
            s,
            he ? ie : d
          ),
          o)
        ) {
          const B = this.resolve(s, { ...n, keySeparator: !1 });
          B &&
            B.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let Ke = [];
        const Xe = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && Xe && Xe[0])
          for (let B = 0; B < Xe.length; B++) Ke.push(Xe[B]);
        else
          this.options.saveMissingTo === "all"
            ? (Ke = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Ke.push(n.lng || this.language);
        const xe = (B, H, ee) => {
          const re = $ && ee !== d ? ee : be;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(B, l, H, re, he, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(B, l, H, re, he, n),
            this.emit("missingKey", B, l, H, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && S
            ? Ke.forEach((B) => {
                const H = this.pluralResolver.getSuffixes(B, n);
                q &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  H.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  H.push(`${this.options.pluralSeparator}zero`),
                  H.forEach((ee) => {
                    xe([B], s + ee, n[`defaultValue${ee}`] || ie);
                  });
              })
            : xe(Ke, s, ie));
      }
      (d = this.extendTranslation(d, t, n, f, r)),
        R &&
          d === s &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${l}:${s}`),
        (R || E) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s,
                E ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return i
      ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(n)), f)
      : d;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        ae(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && !ae(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(
          t,
          f,
          r.lng || this.language || i.usedLng,
          r
        )),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          g = d && d.length;
        c < g && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, g = new Array(d), v = 0;
                v < d;
                v++
              )
                g[v] = arguments[v];
              return o && o[0] === g[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...g, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = ae(a) ? [a] : a;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = kv.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      s,
      a;
    return (
      ae(t) && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        i = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && !ae(n.count),
          g =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (ae(n.context) || typeof n.context == "number") &&
            n.context !== "",
          y = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        f.forEach((x) => {
          this.isValidLookup(r) ||
            ((a = x),
            !qh[`${y[0]}-${x}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((qh[`${y[0]}-${x}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${y.join(
                  ", "
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            y.forEach((m) => {
              if (this.isValidLookup(r)) return;
              s = m;
              const h = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, m, x, n);
              else {
                let E;
                d && (E = this.pluralResolver.getSuffix(m, n.count, n));
                const R = `${this.options.pluralSeparator}zero`,
                  S = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (h.push(c + E),
                    n.ordinal &&
                      E.indexOf(S) === 0 &&
                      h.push(c + E.replace(S, this.options.pluralSeparator)),
                    g && h.push(c + R)),
                  v)
                ) {
                  const $ = `${c}${this.options.contextSeparator}${n.context}`;
                  h.push($),
                    d &&
                      (h.push($ + E),
                      n.ordinal &&
                        E.indexOf(S) === 0 &&
                        h.push($ + E.replace(S, this.options.pluralSeparator)),
                      g && h.push($ + R));
                }
              }
              let w;
              for (; (w = h.pop()); )
                this.isValidLookup(r) ||
                  ((o = w), (r = this.getResource(m, x, w, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: s, usedNS: a }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && !ae(t.replace);
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const o of n) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const rc = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class Kh {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = zn.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = kl(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = kl(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (ae(t) && t.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let i = Intl.getCanonicalLocales(t)[0];
          if ((i && this.options.lowerCaseLng && (i = i.toLowerCase()), i))
            return i;
        } catch {}
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = rc(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = rc(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = rc(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o;
            if (
              !(o.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                i.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      ae(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      o = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? i.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      ae(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(t)))
        : ae(t) && o(this.formatLanguageCode(t)),
      r.forEach((s) => {
        i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
      }),
      i
    );
  }
}
let Eb = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Tb = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const Ob = ["v1", "v2", "v3"],
  Cb = ["v4"],
  Gh = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Rb = () => {
    const e = {};
    return (
      Eb.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: Tb[t.fc] };
        });
      }),
      e
    );
  };
class Ab {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = zn.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        Cb.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = Rb()),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const r = kl(t === "dev" ? "en" : t),
        i = n.ordinal ? "ordinal" : "cardinal",
        o = JSON.stringify({ cleanedCode: r, type: i });
      if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
      let s;
      try {
        s = new Intl.PluralRules(r, { type: i });
      } catch {
        if (!t.match(/-|_/)) return;
        const l = this.languageUtils.getLanguagePartFromCode(t);
        s = this.getRule(l, n);
      }
      return (this.pluralRulesCache[o] = s), s;
    }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => Gh[i] - Gh[o])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
        ? `_plural_${i.toString()}`
        : o()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? o()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !Ob.includes(this.options.compatibilityJSON);
  }
}
const Yh = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = yb(e, t, n);
    return (
      !o &&
        i &&
        ae(n) &&
        ((o = _f(e, n, r)), o === void 0 && (o = _f(t, n, r))),
      o
    );
  },
  ic = (e) => e.replace(/\$/g, "$$$$");
class Pb {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = zn.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: g,
      nestingSuffix: v,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: x,
      maxReplaces: m,
      alwaysFormat: h,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : wb),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? Ni(o) : s || "{{"),
      (this.suffix = a ? Ni(a) : l || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = c ? "" : f || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
      (this.nestingPrefix = d ? Ni(d) : g || Ni("$t(")),
      (this.nestingSuffix = v ? Ni(v) : y || Ni(")")),
      (this.nestingOptionsSeparator = x || ","),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = h !== void 0 ? h : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, i) {
    let o, s, a;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (g) => {
        if (g.indexOf(this.formatSeparator) < 0) {
          const m = Yh(
            n,
            l,
            g,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(m, void 0, r, { ...i, ...n, interpolationkey: g })
            : m;
        }
        const v = g.split(this.formatSeparator),
          y = v.shift().trim(),
          x = v.join(this.formatSeparator).trim();
        return this.format(
          Yh(
            n,
            l,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          x,
          r,
          { ...i, ...n, interpolationkey: y }
        );
      };
    this.resetRegExp();
    const c =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (g) => ic(g) },
        {
          regex: this.regexp,
          safeValue: (g) => (this.escapeValue ? ic(this.escape(g)) : ic(g)),
        },
      ].forEach((g) => {
        for (a = 0; (o = g.regex.exec(t)); ) {
          const v = o[1].trim();
          if (((s = u(v)), s === void 0))
            if (typeof c == "function") {
              const x = c(t, o, i);
              s = ae(x) ? x : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, v)) s = "";
            else if (f) {
              s = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`
              ),
                (s = "");
          else !ae(s) && !this.useRawValueToEscape && (s = Bh(s));
          const y = g.safeValue(s);
          if (
            ((t = t.replace(o[0], y)),
            f
              ? ((g.regex.lastIndex += s.length),
                (g.regex.lastIndex -= o[0].length))
              : (g.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      s;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      (l = f[0]), (d = this.interpolate(d, s));
      const g = d.match(/'/g),
        v = d.match(/"/g);
      ((g && g.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (s = JSON.parse(d)), u && (s = { ...u, ...s });
      } catch (y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            y
          ),
          `${l}${c}${d}`
        );
      }
      return (
        s.defaultValue &&
          s.defaultValue.indexOf(this.prefix) > -1 &&
          delete s.defaultValue,
        l
      );
    };
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (s = { ...r }),
        (s = s.replace && !ae(s.replace) ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((f) => f.trim());
        (i[1] = c.shift()), (l = c), (u = !0);
      }
      if (((o = n(a.call(this, i[1].trim(), s), s)), o && i[0] === t && !ae(o)))
        return o;
      ae(o) || (o = Bh(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = "")),
        u &&
          (o = l.reduce(
            (c, f) =>
              this.format(c, f, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const Lb = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const i = r[1].substring(0, r[1].length - 1);
      t === "currency" && i.indexOf(":") < 0
        ? n.currency || (n.currency = i.trim())
        : t === "relativetime" && i.indexOf(":") < 0
        ? n.range || (n.range = i.trim())
        : i.split(";").forEach((s) => {
            if (s) {
              const [a, ...l] = s.split(":"),
                u = l
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                c = a.trim();
              n[c] || (n[c] = u),
                u === "false" && (n[c] = !1),
                u === "true" && (n[c] = !0),
                isNaN(u) || (n[c] = parseInt(u, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  ji = (e) => {
    const t = {};
    return (n, r, i) => {
      let o = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (o = { ...o, [i.interpolationkey]: void 0 });
      const s = r + JSON.stringify(o);
      let a = t[s];
      return a || ((a = e(kl(r), i)), (t[s] = a)), a(n);
    };
  };
class Ib {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = zn.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: ji((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        currency: ji((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (o) => i.format(o);
        }),
        datetime: ji((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        relativetime: ji((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (o) => i.format(o, r.range || "day");
        }),
        list: ji((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (o) => i.format(o);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = ji(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = n.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf("(") > 1 &&
      o[0].indexOf(")") < 0 &&
      o.find((a) => a.indexOf(")") > -1)
    ) {
      const a = o.findIndex((l) => l.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, l) => {
      const { formatName: u, formatOptions: c } = Lb(l);
      if (this.formats[u]) {
        let f = a;
        try {
          const d =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            g = d.locale || d.lng || i.locale || i.lng || r;
          f = this.formats[u](a, g, { ...c, ...i, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
const Db = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Nb extends su {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = zn.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {},
      s = {},
      a = {},
      l = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((f) => {
          const d = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? s[d] === void 0 && (s[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  s[d] === void 0 && (s[d] = !0),
                  o[d] === void 0 && (o[d] = !0),
                  l[f] === void 0 && (l[f] = !0)));
        }),
          c || (a[u] = !0);
      }),
      (Object.keys(o).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split("|"),
      o = i[0],
      s = i[1];
    n && this.emit("failedLoading", o, s, n),
      !n &&
        r &&
        this.store.addResourceBundle(o, s, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((l) => {
      mb(l.loaded, [o], s),
        Db(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            a[u] || (a[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((f) => {
                a[u][f] === void 0 && (a[u][f] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, s);
          }, o);
          return;
        }
        s(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => a(null, c)).catch(a)
          : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        i && i()
      );
    ae(t) && (t = this.languageUtils.toResolveHierarchy(t)), ae(n) && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length) return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      i = r[0],
      o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, a) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          s
        ),
        !s &&
          a &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a),
        this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = { ...s, isUpdate: o },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, i, l)) : (c = u(t, n, r, i)),
              c && typeof c.then == "function"
                ? c.then((f) => a(null, f)).catch(a)
                : a(null, c);
          } catch (c) {
            a(c);
          }
        else u(t, n, r, i, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
const Qh = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        ae(e[1]) && (t.defaultValue = e[1]),
        ae(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  Jh = (e) => (
    ae(e.ns) && (e.ns = [e.ns]),
    ae(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    ae(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  ka = () => {},
  jb = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class Ns extends su {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Jh(t)),
      (this.services = {}),
      (this.logger = zn),
      (this.modules = { external: [] }),
      jb(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (ae(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = Qh();
    (this.options = { ...i, ...this.options, ...Jh(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const o = (c) => (c ? (typeof c == "function" ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? zn.init(o(this.modules.logger), this.options)
        : zn.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = Ib);
      const f = new Kh(this.options);
      this.store = new Wh(this.options.resources, this.options);
      const d = this.services;
      (d.logger = zn),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new Ab(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((d.formatter = o(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new Pb(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new Nb(
          o(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on("*", function (g) {
          for (
            var v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), x = 1;
            x < v;
            x++
          )
            y[x - 1] = arguments[x];
          t.emit(g, ...y);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = o(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = o(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Tl(this.services, this.options)),
        this.translator.on("*", function (g) {
          for (
            var v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), x = 1;
            x < v;
            x++
          )
            y[x - 1] = arguments[x];
          t.emit(g, ...y);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ka),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const l = qo(),
      u = () => {
        const c = (f, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            l.resolve(d),
            r(f, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ka;
    const i = ae(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const o = [],
        s = (a) => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
            u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
          });
        };
      i
        ? s(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => s(l)),
        this.options.preload && this.options.preload.forEach((a) => s(a)),
        this.services.backendConnector.load(o, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = qo();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = ka),
      this.services.backendConnector.reload(t, n, (o) => {
        i.resolve(), r(o);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && kv.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = qo();
    this.emit("languageChanging", t);
    const o = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      s = (l, u) => {
        u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      a = (l) => {
        !t && !l && this.services.languageDetector && (l = []);
        const u = ae(l)
          ? l
          : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            s(c, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function (s, a) {
      let l;
      if (typeof a != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2;
          f < u;
          f++
        )
          c[f - 2] = arguments[f];
        l = i.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else l = { ...a };
      (l.lng = l.lng || o.lng),
        (l.lngs = l.lngs || o.lngs),
        (l.ns = l.ns || o.ns),
        l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const d = i.options.keySeparator || ".";
      let g;
      return (
        l.keyPrefix && Array.isArray(s)
          ? (g = s.map((v) => `${l.keyPrefix}${d}${v}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s),
        i.t(g, l)
      );
    };
    return ae(t) ? (o.lng = t) : (o.lngs = t), (o.ns = n), (o.keyPrefix = r), o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!i || s(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = qo();
    return this.options.ns
      ? (ae(t) && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = qo();
    ae(t) && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter(
        (s) =>
          i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s)
      );
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new Kh(Qh());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Ns(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ka;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new Ns(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ["store", "services", "language"].forEach((a) => {
        o[a] = this[a];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new Wh(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Tl(o.services, i)),
      o.translator.on("*", function (a) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c];
        o.emit(a, ...u);
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const mt = Ns.createInstance();
mt.createInstance = Ns.createInstance;
mt.createInstance;
mt.dir;
mt.init;
mt.loadResources;
mt.reloadResources;
mt.use;
mt.changeLanguage;
mt.getFixedT;
mt.t;
mt.exists;
mt.setDefaultNamespace;
mt.hasLoadedNamespace;
mt.loadNamespaces;
mt.loadLanguages;
const $b = () => {
    const e = qs(),
      { lang: t } = zd(),
      { store: n } = p.useContext(Oi),
      r = yr();
    return {
      changeLanguage: (o) => {
        mt.changeLanguage(o), n.setLang(o);
        const s = r.pathname.replace(`/${t}`, `/${o}`);
        e(s);
      },
    };
  },
  Xh = { uk: "UA", en: "EN", ru: "RU" },
  Mb = () => {
    const [e, t] = p.useState(!1),
      { closeRef: n, openerRef: r } = pb({ callback: () => t(!1) }),
      { i18n: i } = ou(),
      o = Xh[i.language],
      { changeLanguage: s } = $b();
    return b.jsxs("div", {
      className: Zn.wrapper,
      children: [
        b.jsx("button", {
          ref: r,
          className: en(Zn.button, e && Zn.open),
          onClick: () => t(!e),
          children: b.jsx("span", { className: Zn.currLang, children: o }),
        }),
        b.jsx("div", {
          ref: n,
          className: en(Zn.dropdown, e && Zn.open),
          children: b.jsx("div", {
            className: Zn.container,
            children: Object.entries(Xh).map(([a, l]) =>
              b.jsx(
                "button",
                {
                  className: en(Zn.langButton, o === l && Zn.active),
                  onClick: () => {
                    s(a), t(!1);
                  },
                  children: l,
                },
                a
              )
            ),
          }),
        }),
      ],
    });
  },
  Fb = "_link_18p1q_1",
  Ub = { link: Fb },
  Hd = () => {
    const { lang: e } = zd();
    return (t) => `/${e}${t}`;
  },
  Ev = () => {
    const e = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
      },
      t = Hd();
    return b.jsx(Et, {
      to: t("/"),
      onClick: e,
      className: Ub.link,
      children: "TRADESIGNAL",
    });
  };
function ve(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (n.length ? " " + n.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e
  );
}
var Bb = {};
function au() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : Bb;
}
var Tv = Object.assign,
  Ol = Object.getOwnPropertyDescriptor,
  qn = Object.defineProperty,
  lu = Object.prototype,
  bf = [];
Object.freeze(bf);
var Ov = {};
Object.freeze(Ov);
var zb = typeof Proxy < "u",
  Vb = Object.toString();
function Cv() {
  zb || ve("Proxy not available");
}
function Rv(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var Ji = function () {};
function Cn(e) {
  return typeof e == "function";
}
function gi(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function uu(e) {
  return e !== null && typeof e == "object";
}
function hr(e) {
  if (!uu(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === Vb;
}
function Av(e) {
  var t = e == null ? void 0 : e.constructor;
  return t
    ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction"
    : !1;
}
function Ks(e, t, n) {
  qn(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Pv(e, t, n) {
  qn(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function xi(e, t) {
  var n = "isMobX" + e;
  return (
    (t.prototype[n] = !0),
    function (r) {
      return uu(r) && r[n] === !0;
    }
  );
}
function Eo(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Hb(e) {
  var t = Object.getPrototypeOf(e),
    n = Object.getPrototypeOf(t),
    r = Object.getPrototypeOf(n);
  return r === null;
}
function nr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Lv = typeof Object.getOwnPropertySymbols < "u";
function Wb(e) {
  var t = Object.keys(e);
  if (!Lv) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (r) {
          return lu.propertyIsEnumerable.call(e, r);
        })
      )
    : t;
}
var yo =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Lv
    ? function (e) {
        return Object.getOwnPropertyNames(e).concat(
          Object.getOwnPropertySymbols(e)
        );
      }
    : Object.getOwnPropertyNames;
function Iv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function lr(e, t) {
  return lu.hasOwnProperty.call(e, t);
}
var qb =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var n = {};
    return (
      yo(t).forEach(function (r) {
        n[r] = Ol(t, r);
      }),
      n
    );
  };
function zt(e, t) {
  return !!(e & t);
}
function Vt(e, t, n) {
  return n ? (e |= t) : (e &= ~t), e;
}
function Zh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Kb(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Yb(r.key), r);
  }
}
function To(e, t, n) {
  return (
    t && Kb(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Xi(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Qb(e)) || t) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(null, arguments)
  );
}
function Dv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    xf(e, t);
}
function xf(e, t) {
  return (
    (xf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    xf(e, t)
  );
}
function Gb(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Yb(e) {
  var t = Gb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qb(e, t) {
  if (e) {
    if (typeof e == "string") return Zh(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? Zh(e, t)
        : void 0
    );
  }
}
var Vn = Symbol("mobx-stored-annotations");
function Kn(e) {
  function t(n, r) {
    if (Ys(r)) return e.decorate_20223_(n, r);
    Gs(n, r, e);
  }
  return Object.assign(t, e);
}
function Gs(e, t, n) {
  lr(e, Vn) || Ks(e, Vn, mi({}, e[Vn])), rx(n) || (e[Vn][t] = n);
}
function Jb(e) {
  return lr(e, Vn) || Ks(e, Vn, mi({}, e[Vn])), e[Vn];
}
function Ys(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var se = Symbol("mobx administration"),
  Hr = (function () {
    function e(n) {
      n === void 0 && (n = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _e.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = n);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.reportObserved = function () {
        return Qv(this);
      }),
      (t.reportChanged = function () {
        un(), Jv(this), cn();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      To(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return zt(this.flags_, e.isBeingObservedMask_);
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.isBeingObservedMask_, r);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return zt(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.isPendingUnobservationMask_, r);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return zt(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.diffValueMask_, r === 1);
          },
        },
      ])
    );
  })();
Hr.isBeingObservedMask_ = 1;
Hr.isPendingUnobservationMask_ = 2;
Hr.diffValueMask_ = 4;
var Wd = xi("Atom", Hr);
function Nv(e, t, n) {
  t === void 0 && (t = Ji), n === void 0 && (n = Ji);
  var r = new Hr(e);
  return t !== Ji && a3(r, t), n !== Ji && n1(r, n), r;
}
function Xb(e, t) {
  return g1(e, t);
}
function Zb(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
    ? e !== 0 || 1 / e === 1 / t
    : e !== e && t !== t;
}
var Cl = { structural: Xb, default: Zb };
function yi(e, t, n) {
  return a1(e)
    ? e
    : Array.isArray(e)
    ? pt.array(e, { name: n })
    : hr(e)
    ? pt.object(e, void 0, { name: n })
    : Eo(e)
    ? pt.map(e, { name: n })
    : nr(e)
    ? pt.set(e, { name: n })
    : typeof e == "function" && !$s(e) && !Ms(e)
    ? Av(e)
      ? vo(e)
      : js(n, e)
    : e;
}
function ex(e, t, n) {
  if (e == null || gu(e) || hu(e) || Ei(e) || Bn(e)) return e;
  if (Array.isArray(e)) return pt.array(e, { name: n, deep: !1 });
  if (hr(e)) return pt.object(e, void 0, { name: n, deep: !1 });
  if (Eo(e)) return pt.map(e, { name: n, deep: !1 });
  if (nr(e)) return pt.set(e, { name: n, deep: !1 });
}
function cu(e) {
  return e;
}
function tx(e, t) {
  return g1(e, t) ? t : e;
}
var nx = "override";
function rx(e) {
  return e.annotationType_ === nx;
}
function Qs(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ix,
    extend_: ox,
    decorate_20223_: sx,
  };
}
function ix(e, t, n, r) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if ($s(n.value)) return 1;
  var o = jv(e, this, t, n, !1);
  return qn(r, t, o), 2;
}
function ox(e, t, n, r) {
  var i = jv(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function sx(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    o = this,
    s = function (u) {
      var c, f, d, g;
      return vi(
        (c = (f = o.options_) == null ? void 0 : f.name) != null
          ? c
          : r.toString(),
        u,
        (d = (g = o.options_) == null ? void 0 : g.autoAction) != null ? d : !1
      );
    };
  if (n == "field")
    return function (l) {
      var u,
        c = l;
      return (
        $s(c) || (c = s(c)),
        (u = o.options_) != null &&
          u.bound &&
          ((c = c.bind(this)), (c.isMobxAction = !0)),
        c
      );
    };
  if (n == "method") {
    var a;
    return (
      $s(e) || (e = s(e)),
      (a = this.options_) != null &&
        a.bound &&
        i(function () {
          var l = this,
            u = l[r].bind(l);
          (u.isMobxAction = !0), (l[r] = u);
        }),
      e
    );
  }
  ve(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(r) +
      "' (kind: " +
      n +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value.")
  );
}
function ax(e, t, n, r) {
  t.annotationType_, r.value;
}
function jv(e, t, n, r, i) {
  var o, s, a, l, u, c, f;
  i === void 0 && (i = K.safeDescriptors), ax(e, t, n, r);
  var d = r.value;
  if ((o = t.options_) != null && o.bound) {
    var g;
    d = d.bind((g = e.proxy_) != null ? g : e.target_);
  }
  return {
    value: vi(
      (s = (a = t.options_) == null ? void 0 : a.name) != null
        ? s
        : n.toString(),
      d,
      (l = (u = t.options_) == null ? void 0 : u.autoAction) != null ? l : !1,
      (c = t.options_) != null && c.bound
        ? (f = e.proxy_) != null
          ? f
          : e.target_
        : void 0
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function $v(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: lx,
    extend_: ux,
    decorate_20223_: cx,
  };
}
function lx(e, t, n, r) {
  var i;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!lr(e.target_, t) || !Ms(e.target_[t])) &&
    this.extend_(e, t, n, !1) === null
  )
    return 0;
  if (Ms(n.value)) return 1;
  var o = Mv(e, this, t, n, !1, !1);
  return qn(r, t, o), 2;
}
function ux(e, t, n, r) {
  var i,
    o = Mv(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, r);
}
function cx(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    Ms(e) || (e = vo(e)),
    (n = this.options_) != null &&
      n.bound &&
      i(function () {
        var o = this,
          s = o[r].bind(o);
        (s.isMobXFlow = !0), (o[r] = s);
      }),
    e
  );
}
function fx(e, t, n, r) {
  t.annotationType_, r.value;
}
function Mv(e, t, n, r, i, o) {
  o === void 0 && (o = K.safeDescriptors), fx(e, t, n, r);
  var s = r.value;
  if ((Ms(s) || (s = vo(s)), i)) {
    var a;
    (s = s.bind((a = e.proxy_) != null ? a : e.target_)), (s.isMobXFlow = !0);
  }
  return {
    value: s,
    configurable: o ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !o,
  };
}
function qd(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: dx,
    extend_: px,
    decorate_20223_: hx,
  };
}
function dx(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function px(e, t, n, r) {
  return (
    gx(e, this, t, n),
    e.defineComputedProperty_(
      t,
      mi({}, this.options_, { get: n.get, set: n.set }),
      r
    )
  );
}
function hx(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var o = Ti(this)[se],
        s = mi({}, n.options_, { get: e, context: this });
      s.name || (s.name = "ObservableObject." + r.toString()),
        o.values_.set(r, new Rn(s));
    }),
    function () {
      return this[se].getObservablePropValue_(r);
    }
  );
}
function gx(e, t, n, r) {
  t.annotationType_, r.get;
}
function fu(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: mx,
    extend_: yx,
    decorate_20223_: vx,
  };
}
function mx(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function yx(e, t, n, r) {
  var i, o;
  return (
    wx(e, this),
    e.defineObservableProperty_(
      t,
      n.value,
      (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : yi,
      r
    )
  );
}
function vx(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    o = new WeakSet();
  function s(a, l) {
    var u,
      c,
      f = Ti(a)[se],
      d = new ai(
        l,
        (u = (c = n.options_) == null ? void 0 : c.enhancer) != null ? u : yi,
        "ObservableObject." + i.toString(),
        !1
      );
    f.values_.set(i, d), o.add(a);
  }
  if (r == "accessor")
    return {
      get: function () {
        return (
          o.has(this) || s(this, e.get.call(this)),
          this[se].getObservablePropValue_(i)
        );
      },
      set: function (l) {
        return (
          o.has(this) || s(this, l), this[se].setObservablePropValue_(i, l)
        );
      },
      init: function (l) {
        return o.has(this) || s(this, l), l;
      },
    };
}
function wx(e, t, n, r) {
  t.annotationType_;
}
var Sx = "true",
  _x = Fv();
function Fv(e) {
  return {
    annotationType_: Sx,
    options_: e,
    make_: bx,
    extend_: xx,
    decorate_20223_: kx,
  };
}
function bx(e, t, n, r) {
  var i, o;
  if (n.get) return du.make_(e, t, n, r);
  if (n.set) {
    var s = vi(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: K.safeDescriptors ? e.isPlainObject_ : !0,
          set: s,
        }) === null
        ? 0
        : 2
      : (qn(r, t, { configurable: !0, set: s }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var a;
    if (Av(n.value)) {
      var l,
        u = (l = this.options_) != null && l.autoBind ? vo.bound : vo;
      return u.make_(e, t, n, r);
    }
    var c = (a = this.options_) != null && a.autoBind ? js.bound : js;
    return c.make_(e, t, n, r);
  }
  var f = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? pt.ref : pt;
  if (
    typeof n.value == "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var d;
    n.value = n.value.bind((d = e.proxy_) != null ? d : e.target_);
  }
  return f.make_(e, t, n, r);
}
function xx(e, t, n, r) {
  var i, o;
  if (n.get) return du.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(
      t,
      {
        configurable: K.safeDescriptors ? e.isPlainObject_ : !0,
        set: vi(t.toString(), n.set),
      },
      r
    );
  if (
    typeof n.value == "function" &&
    (i = this.options_) != null &&
    i.autoBind
  ) {
    var s;
    n.value = n.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? pt.ref : pt;
  return a.extend_(e, t, n, r);
}
function kx(e, t) {
  ve("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Ex = "observable",
  Tx = "observable.ref",
  Ox = "observable.shallow",
  Cx = "observable.struct",
  Uv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Uv);
function Ea(e) {
  return e || Uv;
}
var kf = fu(Ex),
  Rx = fu(Tx, { enhancer: cu }),
  Ax = fu(Ox, { enhancer: ex }),
  Px = fu(Cx, { enhancer: tx }),
  Bv = Kn(kf);
function Ta(e) {
  return e.deep === !0 ? yi : e.deep === !1 ? cu : Ix(e.defaultDecorator);
}
function Lx(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Fv(e)) : void 0;
}
function Ix(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null
    ? t
    : yi;
}
function zv(e, t, n) {
  if (Ys(t)) return kf.decorate_20223_(e, t);
  if (gi(t)) {
    Gs(e, t, kf);
    return;
  }
  return a1(e)
    ? e
    : hr(e)
    ? pt.object(e, t, n)
    : Array.isArray(e)
    ? pt.array(e, t)
    : Eo(e)
    ? pt.map(e, t)
    : nr(e)
    ? pt.set(e, t)
    : typeof e == "object" && e !== null
    ? e
    : pt.box(e, t);
}
Tv(zv, Bv);
var Dx = {
    box: function (t, n) {
      var r = Ea(n);
      return new ai(t, Ta(r), r.name, !0, r.equals);
    },
    array: function (t, n) {
      var r = Ea(n);
      return (K.useProxies === !1 || r.proxy === !1 ? L3 : b3)(
        t,
        Ta(r),
        r.name
      );
    },
    map: function (t, n) {
      var r = Ea(n);
      return new u1(t, Ta(r), r.name);
    },
    set: function (t, n) {
      var r = Ea(n);
      return new c1(t, Ta(r), r.name);
    },
    object: function (t, n, r) {
      return Wr(function () {
        return i1(
          K.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1
            ? Ti({}, r)
            : y3({}, r),
          t,
          n
        );
      });
    },
    ref: Kn(Rx),
    shallow: Kn(Ax),
    deep: Bv,
    struct: Kn(Px),
  },
  pt = Tv(zv, Dx),
  Vv = "computed",
  Nx = "computed.struct",
  Ef = qd(Vv),
  jx = qd(Nx, { equals: Cl.structural }),
  du = function (t, n) {
    if (Ys(n)) return Ef.decorate_20223_(t, n);
    if (gi(n)) return Gs(t, n, Ef);
    if (hr(t)) return Kn(qd(Vv, t));
    var r = hr(n) ? n : {};
    return (r.get = t), r.name || (r.name = t.name || ""), new Rn(r);
  };
Object.assign(du, Ef);
du.struct = Kn(jx);
var eg,
  tg,
  Rl = 0,
  $x = 1,
  Mx =
    (eg =
      (tg = Ol(function () {}, "name")) == null ? void 0 : tg.configurable) !=
    null
      ? eg
      : !1,
  ng = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function vi(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return Fx(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Mx && ((ng.value = e), qn(i, "name", ng)),
    i
  );
}
function Fx(e, t, n, r, i) {
  var o = Ux(e, t);
  try {
    return n.apply(r, i);
  } catch (s) {
    throw ((o.error_ = s), s);
  } finally {
    Bx(o);
  }
}
function Ux(e, t, n, r) {
  var i = !1,
    o = 0,
    s = K.trackingDerivation,
    a = !t || !s;
  un();
  var l = K.allowStateChanges;
  a && (ki(), (l = Kd(!0)));
  var u = Yd(!0),
    c = {
      runAsAction_: a,
      prevDerivation_: s,
      prevAllowStateChanges_: l,
      prevAllowStateReads_: u,
      notifySpy_: i,
      startTime_: o,
      actionId_: $x++,
      parentActionId_: Rl,
    };
  return (Rl = c.actionId_), c;
}
function Bx(e) {
  Rl !== e.actionId_ && ve(30),
    (Rl = e.parentActionId_),
    e.error_ !== void 0 && (K.suppressReactionErrors = !0),
    Gd(e.prevAllowStateChanges_),
    hs(e.prevAllowStateReads_),
    cn(),
    e.runAsAction_ && ur(e.prevDerivation_),
    (K.suppressReactionErrors = !1);
}
function Kd(e) {
  var t = K.allowStateChanges;
  return (K.allowStateChanges = e), t;
}
function Gd(e) {
  K.allowStateChanges = e;
}
var ai = (function (e) {
    function t(r, i, o, s, a) {
      var l;
      return (
        o === void 0 && (o = "ObservableValue"),
        a === void 0 && (a = Cl.default),
        (l = e.call(this, o) || this),
        (l.enhancer = void 0),
        (l.name_ = void 0),
        (l.equals = void 0),
        (l.hasUnreportedChange_ = !1),
        (l.interceptors_ = void 0),
        (l.changeListeners_ = void 0),
        (l.value_ = void 0),
        (l.dehancer = void 0),
        (l.enhancer = i),
        (l.name_ = o),
        (l.equals = a),
        (l.value_ = i(r, void 0, o)),
        l
      );
    }
    Dv(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (n.set = function (i) {
        this.value_,
          (i = this.prepareNewValue_(i)),
          i !== K.UNCHANGED && this.setNewValue_(i);
      }),
      (n.prepareNewValue_ = function (i) {
        if (sn(this)) {
          var o = an(this, { object: this, type: Gn, newValue: i });
          if (!o) return K.UNCHANGED;
          i = o.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? K.UNCHANGED : i
        );
      }),
      (n.setNewValue_ = function (i) {
        var o = this.value_;
        (this.value_ = i),
          this.reportChanged(),
          En(this) &&
            Tn(this, { type: Gn, object: this, newValue: i, oldValue: o });
      }),
      (n.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (n.intercept_ = function (i) {
        return Js(this, i);
      }),
      (n.observe_ = function (i, o) {
        return (
          o &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Gn,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Xs(this, i)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (n.valueOf = function () {
        return Iv(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Hr),
  Rn = (function () {
    function e(n) {
      (this.dependenciesState_ = _e.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _e.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Pl(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Al.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        n.get || ve(31),
        (this.derivation = n.get),
        (this.name_ = n.name || "ComputedValue"),
        n.set && (this.setter_ = vi("ComputedValue-setter", n.set)),
        (this.equals_ =
          n.equals ||
          (n.compareStructural || n.struct ? Cl.structural : Cl.default)),
        (this.scope_ = n.context),
        (this.requiresReaction_ = n.requiresReaction),
        (this.keepAlive_ = !!n.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        qx(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && ve(32, this.name_, this.derivation),
          K.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Tf(this) &&
            (this.warnAboutUntrackedRead_(),
            un(),
            (this.value_ = this.computeValue_(!1)),
            cn());
        else if ((Qv(this), Tf(this))) {
          var r = K.trackingContext;
          this.keepAlive_ && !r && (K.trackingContext = this),
            this.trackAndCompute() && Wx(this),
            (K.trackingContext = r);
        }
        var i = this.value_;
        if (za(i)) throw i.cause;
        return i;
      }),
      (t.set = function (r) {
        if (this.setter_) {
          this.isRunningSetter && ve(33, this.name_),
            (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, r);
          } finally {
            this.isRunningSetter = !1;
          }
        } else ve(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var r = this.value_,
          i = this.dependenciesState_ === _e.NOT_TRACKING_,
          o = this.computeValue_(!0),
          s = i || za(r) || za(o) || !this.equals_(r, o);
        return s && (this.value_ = o), s;
      }),
      (t.computeValue_ = function (r) {
        this.isComputing = !0;
        var i = Kd(!1),
          o;
        if (r) o = Hv(this, this.derivation, this.scope_);
        else if (K.disableErrorBoundaries === !0)
          o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (s) {
            o = new Pl(s);
          }
        return Gd(i), (this.isComputing = !1), o;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Of(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (r, i) {
        var o = this,
          s = !0,
          a = void 0;
        return n3(function () {
          var l = o.get();
          if (!s || i) {
            var u = ki();
            r({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Gn,
              object: o,
              newValue: l,
              oldValue: a,
            }),
              ur(u);
          }
          (s = !1), (a = l);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Iv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      To(e, [
        {
          key: "isComputing",
          get: function () {
            return zt(this.flags_, e.isComputingMask_);
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.isComputingMask_, r);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return zt(this.flags_, e.isRunningSetterMask_);
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.isRunningSetterMask_, r);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return zt(this.flags_, e.isBeingObservedMask_);
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.isBeingObservedMask_, r);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return zt(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.isPendingUnobservationMask_, r);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return zt(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (r) {
            this.flags_ = Vt(this.flags_, e.diffValueMask_, r === 1);
          },
        },
      ])
    );
  })();
Rn.isComputingMask_ = 1;
Rn.isRunningSetterMask_ = 2;
Rn.isBeingObservedMask_ = 4;
Rn.isPendingUnobservationMask_ = 8;
Rn.diffValueMask_ = 16;
var pu = xi("ComputedValue", Rn),
  _e;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(_e || (_e = {}));
var Al;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LOG = 1)] = "LOG"),
    (e[(e.BREAK = 2)] = "BREAK");
})(Al || (Al = {}));
var Pl = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function za(e) {
  return e instanceof Pl;
}
function Tf(e) {
  switch (e.dependenciesState_) {
    case _e.UP_TO_DATE_:
      return !1;
    case _e.NOT_TRACKING_:
    case _e.STALE_:
      return !0;
    case _e.POSSIBLY_STALE_: {
      for (
        var t = Yd(!0), n = ki(), r = e.observing_, i = r.length, o = 0;
        o < i;
        o++
      ) {
        var s = r[o];
        if (pu(s)) {
          if (K.disableErrorBoundaries) s.get();
          else
            try {
              s.get();
            } catch {
              return ur(n), hs(t), !0;
            }
          if (e.dependenciesState_ === _e.STALE_) return ur(n), hs(t), !0;
        }
      }
      return qv(e), ur(n), hs(t), !1;
    }
  }
}
function Hv(e, t, n) {
  var r = Yd(!0);
  qv(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++K.runId);
  var i = K.trackingDerivation;
  (K.trackingDerivation = e), K.inBatch++;
  var o;
  if (K.disableErrorBoundaries === !0) o = t.call(n);
  else
    try {
      o = t.call(n);
    } catch (s) {
      o = new Pl(s);
    }
  return K.inBatch--, (K.trackingDerivation = i), zx(e), hs(r), o;
}
function zx(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = _e.UP_TO_DATE_,
      i = 0,
      o = e.unboundDepsCount_,
      s = 0;
    s < o;
    s++
  ) {
    var a = n[s];
    a.diffValue === 0 && ((a.diffValue = 1), i !== s && (n[i] = a), i++),
      a.dependenciesState_ > r && (r = a.dependenciesState_);
  }
  for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var l = t[o];
    l.diffValue === 0 && Gv(l, e), (l.diffValue = 0);
  }
  for (; i--; ) {
    var u = n[i];
    u.diffValue === 1 && ((u.diffValue = 0), Hx(u, e));
  }
  r !== _e.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function Of(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) Gv(t[n], e);
  e.dependenciesState_ = _e.NOT_TRACKING_;
}
function Wv(e) {
  var t = ki();
  try {
    return e();
  } finally {
    ur(t);
  }
}
function ki() {
  var e = K.trackingDerivation;
  return (K.trackingDerivation = null), e;
}
function ur(e) {
  K.trackingDerivation = e;
}
function Yd(e) {
  var t = K.allowStateReads;
  return (K.allowStateReads = e), t;
}
function hs(e) {
  K.allowStateReads = e;
}
function qv(e) {
  if (e.dependenciesState_ !== _e.UP_TO_DATE_) {
    e.dependenciesState_ = _e.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; )
      t[n].lowestObserverState_ = _e.UP_TO_DATE_;
  }
}
var Va = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  Ha = !0,
  Kv = !1,
  K = (function () {
    var e = au();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ha = !1),
      e.__mobxGlobals &&
        e.__mobxGlobals.version !== new Va().version &&
        (Ha = !1),
      Ha
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Va()))
        : (setTimeout(function () {
            Kv || ve(35);
          }, 1),
          new Va())
    );
  })();
function Vx() {
  if (
    ((K.pendingReactions.length || K.inBatch || K.isRunningReactions) && ve(36),
    (Kv = !0),
    Ha)
  ) {
    var e = au();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (K = new Va());
  }
}
function Hx(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Gv(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Yv(e);
}
function Yv(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), K.pendingUnobservations.push(e));
}
function un() {
  K.inBatch++;
}
function cn() {
  if (--K.inBatch === 0) {
    Xv();
    for (var e = K.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      (n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof Rn && n.suspend_());
    }
    K.pendingUnobservations = [];
  }
}
function Qv(e) {
  var t = K.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved &&
          K.trackingContext &&
          ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && K.inBatch > 0 && Yv(e), !1);
}
function Jv(e) {
  e.lowestObserverState_ !== _e.STALE_ &&
    ((e.lowestObserverState_ = _e.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _e.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = _e.STALE_);
    }));
}
function Wx(e) {
  e.lowestObserverState_ !== _e.STALE_ &&
    ((e.lowestObserverState_ = _e.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _e.POSSIBLY_STALE_
        ? (t.dependenciesState_ = _e.STALE_)
        : t.dependenciesState_ === _e.UP_TO_DATE_ &&
          (e.lowestObserverState_ = _e.UP_TO_DATE_);
    }));
}
function qx(e) {
  e.lowestObserverState_ === _e.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = _e.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _e.UP_TO_DATE_ &&
        ((t.dependenciesState_ = _e.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var gr = (function () {
  function e(n, r, i, o) {
    n === void 0 && (n = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = _e.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Al.NONE),
      (this.name_ = n),
      (this.onInvalidate_ = r),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = o);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0), K.pendingReactions.push(this), Xv());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        un(), (this.isScheduled = !1);
        var r = K.trackingContext;
        if (((K.trackingContext = this), Tf(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        (K.trackingContext = r), cn();
      }
    }),
    (t.track = function (r) {
      if (!this.isDisposed) {
        un(), (this.isRunning = !0);
        var i = K.trackingContext;
        K.trackingContext = this;
        var o = Hv(this, r, void 0);
        (K.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Of(this),
          za(o) && this.reportExceptionInDerivation_(o.cause),
          cn();
      }
    }),
    (t.reportExceptionInDerivation_ = function (r) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(r, this);
        return;
      }
      if (K.disableErrorBoundaries) throw r;
      var o = "[mobx] uncaught error in '" + this + "'";
      K.suppressReactionErrors || console.error(o, r),
        K.globalReactionErrorHandlers.forEach(function (s) {
          return s(r, i);
        });
    }),
    (t.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0), this.isRunning || (un(), Of(this), cn()));
    }),
    (t.getDisposer_ = function (r) {
      var i = this,
        o = function s() {
          i.dispose(),
            r == null ||
              r.removeEventListener == null ||
              r.removeEventListener("abort", s);
        };
      return (
        r == null ||
          r.addEventListener == null ||
          r.addEventListener("abort", o),
        (o[se] = this),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (r) {}),
    To(e, [
      {
        key: "isDisposed",
        get: function () {
          return zt(this.flags_, e.isDisposedMask_);
        },
        set: function (r) {
          this.flags_ = Vt(this.flags_, e.isDisposedMask_, r);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return zt(this.flags_, e.isScheduledMask_);
        },
        set: function (r) {
          this.flags_ = Vt(this.flags_, e.isScheduledMask_, r);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return zt(this.flags_, e.isTrackPendingMask_);
        },
        set: function (r) {
          this.flags_ = Vt(this.flags_, e.isTrackPendingMask_, r);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return zt(this.flags_, e.isRunningMask_);
        },
        set: function (r) {
          this.flags_ = Vt(this.flags_, e.isRunningMask_, r);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return zt(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (r) {
          this.flags_ = Vt(this.flags_, e.diffValueMask_, r === 1);
        },
      },
    ])
  );
})();
gr.isDisposedMask_ = 1;
gr.isScheduledMask_ = 2;
gr.isTrackPendingMask_ = 4;
gr.isRunningMask_ = 8;
gr.diffValueMask_ = 16;
var Kx = 100,
  Cf = function (t) {
    return t();
  };
function Xv() {
  K.inBatch > 0 || K.isRunningReactions || Cf(Gx);
}
function Gx() {
  K.isRunningReactions = !0;
  for (var e = K.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Kx &&
      (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
      n[r].runReaction_();
  }
  K.isRunningReactions = !1;
}
var Ll = xi("Reaction", gr);
function Yx(e) {
  var t = Cf;
  Cf = function (r) {
    return e(function () {
      return t(r);
    });
  };
}
function gs() {
  return !1;
}
function Qx(e) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var Zv = "action",
  Jx = "action.bound",
  e1 = "autoAction",
  Xx = "autoAction.bound",
  Zx = "<unnamed action>",
  Rf = Qs(Zv),
  e3 = Qs(Jx, { bound: !0 }),
  Af = Qs(e1, { autoAction: !0 }),
  t3 = Qs(Xx, { autoAction: !0, bound: !0 });
function t1(e) {
  var t = function (r, i) {
    if (Cn(r)) return vi(r.name || Zx, r, e);
    if (Cn(i)) return vi(r, i, e);
    if (Ys(i)) return (e ? Af : Rf).decorate_20223_(r, i);
    if (gi(i)) return Gs(r, i, e ? Af : Rf);
    if (gi(r)) return Kn(Qs(e ? e1 : Zv, { name: r, autoAction: e }));
  };
  return t;
}
var Zi = t1(!1);
Object.assign(Zi, Rf);
var js = t1(!0);
Object.assign(js, Af);
Zi.bound = Kn(e3);
js.bound = Kn(t3);
function $s(e) {
  return Cn(e) && e.isMobxAction === !0;
}
function n3(e, t) {
  var n, r, i, o;
  t === void 0 && (t = Ov);
  var s = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
    a = !t.scheduler && !t.delay,
    l;
  if (a)
    l = new gr(
      s,
      function () {
        this.track(f);
      },
      t.onError,
      t.requiresObservable
    );
  else {
    var u = i3(t),
      c = !1;
    l = new gr(
      s,
      function () {
        c ||
          ((c = !0),
          u(function () {
            (c = !1), l.isDisposed || l.track(f);
          }));
      },
      t.onError,
      t.requiresObservable
    );
  }
  function f() {
    e(l);
  }
  return (
    ((i = t) != null && (i = i.signal) != null && i.aborted) || l.schedule_(),
    l.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var r3 = function (t) {
  return t();
};
function i3(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
    ? function (t) {
        return setTimeout(t, e.delay);
      }
    : r3;
}
var o3 = "onBO",
  s3 = "onBUO";
function a3(e, t, n) {
  return r1(o3, e, t, n);
}
function n1(e, t, n) {
  return r1(s3, e, t, n);
}
function r1(e, t, n, r) {
  var i = Nl(t),
    o = Cn(r) ? r : n,
    s = e + "L";
  return (
    i[s] ? i[s].add(o) : (i[s] = new Set([o])),
    function () {
      var a = i[s];
      a && (a.delete(o), a.size === 0 && delete i[s]);
    }
  );
}
var l3 = "never",
  Oa = "always",
  u3 = "observed";
function c3(e) {
  e.isolateGlobalState === !0 && Vx();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 &&
      (K.useProxies = t === Oa ? !0 : t === l3 ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (K.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === Oa ? Oa : n === u3;
    (K.enforceActions = r), (K.allowStateChanges = !(r === !0 || r === Oa));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (K[i] = !!e[i]);
  }),
    (K.allowStateReads = !K.observableRequiresReaction),
    e.reactionScheduler && Yx(e.reactionScheduler);
}
function i1(e, t, n, r) {
  var i = qb(t);
  return (
    Wr(function () {
      var o = Ti(e, r)[se];
      yo(i).forEach(function (s) {
        o.extend_(s, i[s], n && s in n ? n[s] : !0);
      });
    }),
    e
  );
}
function f3(e, t) {
  return o1(Nl(e, t));
}
function o1(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = d3(e.observing_).map(o1)),
    t
  );
}
function d3(e) {
  return Array.from(new Set(e));
}
var p3 = 0;
function s1() {
  this.message = "FLOW_CANCELLED";
}
s1.prototype = Object.create(Error.prototype);
var oc = $v("flow"),
  h3 = $v("flow.bound", { bound: !0 }),
  vo = Object.assign(function (t, n) {
    if (Ys(n)) return oc.decorate_20223_(t, n);
    if (gi(n)) return Gs(t, n, oc);
    var r = t,
      i = r.name || "<unnamed flow>",
      o = function () {
        var a = this,
          l = arguments,
          u = ++p3,
          c = Zi(i + " - runid: " + u + " - init", r).apply(a, l),
          f,
          d = void 0,
          g = new Promise(function (v, y) {
            var x = 0;
            f = y;
            function m(E) {
              d = void 0;
              var R;
              try {
                R = Zi(i + " - runid: " + u + " - yield " + x++, c.next).call(
                  c,
                  E
                );
              } catch (S) {
                return y(S);
              }
              w(R);
            }
            function h(E) {
              d = void 0;
              var R;
              try {
                R = Zi(i + " - runid: " + u + " - yield " + x++, c.throw).call(
                  c,
                  E
                );
              } catch (S) {
                return y(S);
              }
              w(R);
            }
            function w(E) {
              if (Cn(E == null ? void 0 : E.then)) {
                E.then(w, y);
                return;
              }
              return E.done
                ? v(E.value)
                : ((d = Promise.resolve(E.value)), d.then(m, h));
            }
            m(void 0);
          });
        return (
          (g.cancel = Zi(i + " - runid: " + u + " - cancel", function () {
            try {
              d && rg(d);
              var v = c.return(void 0),
                y = Promise.resolve(v.value);
              y.then(Ji, Ji), rg(y), f(new s1());
            } catch (x) {
              f(x);
            }
          })),
          g
        );
      };
    return (o.isMobXFlow = !0), o;
  }, oc);
vo.bound = Kn(h3);
function rg(e) {
  Cn(e.cancel) && e.cancel();
}
function Ms(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function g3(e, t) {
  return e ? gu(e) || !!e[se] || Wd(e) || Ll(e) || pu(e) : !1;
}
function a1(e) {
  return g3(e);
}
function rr(e, t) {
  t === void 0 && (t = void 0), un();
  try {
    return e.apply(t);
  } finally {
    cn();
  }
}
function $i(e) {
  return e[se];
}
var m3 = {
  has: function (t, n) {
    return $i(t).has_(n);
  },
  get: function (t, n) {
    return $i(t).get_(n);
  },
  set: function (t, n, r) {
    var i;
    return gi(n) ? ((i = $i(t).set_(n, r, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, n) {
    var r;
    return gi(n) ? ((r = $i(t).delete_(n, !0)) != null ? r : !0) : !1;
  },
  defineProperty: function (t, n, r) {
    var i;
    return (i = $i(t).defineProperty_(n, r)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return $i(t).ownKeys_();
  },
  preventExtensions: function (t) {
    ve(13);
  },
};
function y3(e, t) {
  var n, r;
  return (
    Cv(),
    (e = Ti(e, t)),
    (r = (n = e[se]).proxy_) != null ? r : (n.proxy_ = new Proxy(e, m3))
  );
}
function sn(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Js(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return (
    n.push(t),
    Rv(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function an(e, t) {
  var n = ki();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
      i < o && ((t = r[i](t)), t && !t.type && ve(14), !!t);
      i++
    );
    return t;
  } finally {
    ur(n);
  }
}
function En(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Xs(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    n.push(t),
    Rv(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function Tn(e, t) {
  var n = ki(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, o = r.length; i < o; i++) r[i](t);
    ur(n);
  }
}
function v3(e, t, n) {
  return (
    Wr(function () {
      var r,
        i = Ti(e, n)[se];
      (r = t) != null || (t = Jb(e)),
        yo(t).forEach(function (o) {
          return i.make_(o, t[o]);
        });
    }),
    e
  );
}
var sc = Symbol("mobx-keys");
function w3(e, t, n) {
  return hr(e)
    ? i1(e, e, t, n)
    : (Wr(function () {
        var r = Ti(e, n)[se];
        if (!e[sc]) {
          var i = Object.getPrototypeOf(e),
            o = new Set([].concat(yo(e), yo(i)));
          o.delete("constructor"), o.delete(se), Ks(i, sc, o);
        }
        e[sc].forEach(function (s) {
          return r.make_(s, t && s in t ? t[s] : !0);
        });
      }),
      e);
}
var ig = "splice",
  Gn = "update",
  S3 = 1e4,
  _3 = {
    get: function (t, n) {
      var r = t[se];
      return n === se
        ? r
        : n === "length"
        ? r.getArrayLength_()
        : typeof n == "string" && !isNaN(n)
        ? r.get_(parseInt(n))
        : lr(Il, n)
        ? Il[n]
        : t[n];
    },
    set: function (t, n, r) {
      var i = t[se];
      return (
        n === "length" && i.setArrayLength_(r),
        typeof n == "symbol" || isNaN(n) ? (t[n] = r) : i.set_(parseInt(n), r),
        !0
      );
    },
    preventExtensions: function () {
      ve(15);
    },
  },
  Qd = (function () {
    function e(n, r, i, o) {
      n === void 0 && (n = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = i),
        (this.legacyMode_ = o),
        (this.atom_ = new Hr(n)),
        (this.enhancer_ = function (s, a) {
          return r(s, a, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.dehanceValues_ = function (r) {
        return this.dehancer !== void 0 && r.length > 0
          ? r.map(this.dehancer)
          : r;
      }),
      (t.intercept_ = function (r) {
        return Js(this, r);
      }),
      (t.observe_ = function (r, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            r({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Xs(this, r)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (r) {
        (typeof r != "number" || isNaN(r) || r < 0) && ve("Out of range: " + r);
        var i = this.values_.length;
        if (r !== i)
          if (r > i) {
            for (var o = new Array(r - i), s = 0; s < r - i; s++) o[s] = void 0;
            this.spliceWithArray_(i, 0, o);
          } else this.spliceWithArray_(r, i - r);
      }),
      (t.updateArrayLength_ = function (r, i) {
        r !== this.lastKnownLength_ && ve(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && h1(r + i + 1);
      }),
      (t.spliceWithArray_ = function (r, i, o) {
        var s = this;
        this.atom_;
        var a = this.values_.length;
        if (
          (r === void 0
            ? (r = 0)
            : r > a
            ? (r = a)
            : r < 0 && (r = Math.max(0, a + r)),
          arguments.length === 1
            ? (i = a - r)
            : i == null
            ? (i = 0)
            : (i = Math.max(0, Math.min(i, a - r))),
          o === void 0 && (o = bf),
          sn(this))
        ) {
          var l = an(this, {
            object: this.proxy_,
            type: ig,
            index: r,
            removedCount: i,
            added: o,
          });
          if (!l) return bf;
          (i = l.removedCount), (o = l.added);
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (f) {
                  return s.enhancer_(f, void 0);
                })),
          this.legacyMode_)
        ) {
          var u = o.length - i;
          this.updateArrayLength_(a, u);
        }
        var c = this.spliceItemsIntoValues_(r, i, o);
        return (
          (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, c),
          this.dehanceValues_(c)
        );
      }),
      (t.spliceItemsIntoValues_ = function (r, i, o) {
        if (o.length < S3) {
          var s;
          return (s = this.values_).splice.apply(s, [r, i].concat(o));
        } else {
          var a = this.values_.slice(r, r + i),
            l = this.values_.slice(r + i);
          this.values_.length += o.length - i;
          for (var u = 0; u < o.length; u++) this.values_[r + u] = o[u];
          for (var c = 0; c < l.length; c++)
            this.values_[r + o.length + c] = l[c];
          return a;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (r, i, o) {
        var s = !this.owned_ && gs(),
          a = En(this),
          l =
            a || s
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Gn,
                  debugObjectName: this.atom_.name_,
                  index: r,
                  newValue: i,
                  oldValue: o,
                }
              : null;
        this.atom_.reportChanged(), a && Tn(this, l);
      }),
      (t.notifyArraySplice_ = function (r, i, o) {
        var s = !this.owned_ && gs(),
          a = En(this),
          l =
            a || s
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: ig,
                  index: r,
                  removed: o,
                  added: i,
                  removedCount: o.length,
                  addedCount: i.length,
                }
              : null;
        this.atom_.reportChanged(), a && Tn(this, l);
      }),
      (t.get_ = function (r) {
        if (this.legacyMode_ && r >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + r);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
      }),
      (t.set_ = function (r, i) {
        var o = this.values_;
        if (
          (this.legacyMode_ && r > o.length && ve(17, r, o.length),
          r < o.length)
        ) {
          this.atom_;
          var s = o[r];
          if (sn(this)) {
            var a = an(this, {
              type: Gn,
              object: this.proxy_,
              index: r,
              newValue: i,
            });
            if (!a) return;
            i = a.newValue;
          }
          i = this.enhancer_(i, s);
          var l = i !== s;
          l && ((o[r] = i), this.notifyArrayChildUpdate_(r, i, s));
        } else {
          for (
            var u = new Array(r + 1 - o.length), c = 0;
            c < u.length - 1;
            c++
          )
            u[c] = void 0;
          (u[u.length - 1] = i), this.spliceWithArray_(o.length, 0, u);
        }
      }),
      e
    );
  })();
function b3(e, t, n, r) {
  return (
    n === void 0 && (n = "ObservableArray"),
    r === void 0 && (r = !1),
    Cv(),
    Wr(function () {
      var i = new Qd(n, t, r, !1);
      Pv(i.values_, se, i);
      var o = new Proxy(i.values_, _3);
      return (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o;
    })
  );
}
var Il = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var n = this[se];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, n) {
    for (
      var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2;
      o < r;
      o++
    )
      i[o - 2] = arguments[o];
    var s = this[se];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return s.spliceWithArray_(t);
      case 2:
        return s.spliceWithArray_(t, n);
    }
    return s.spliceWithArray_(t, n, i);
  },
  spliceWithArray: function (t, n, r) {
    return this[se].spliceWithArray_(t, n, r);
  },
  push: function () {
    for (
      var t = this[se], n = arguments.length, r = new Array(n), i = 0;
      i < n;
      i++
    )
      r[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[se].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var t = this[se], n = arguments.length, r = new Array(n), i = 0;
      i < n;
      i++
    )
      r[i] = arguments[i];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function () {
    return (
      K.trackingDerivation && ve(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    K.trackingDerivation && ve(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var n = this[se],
      r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  },
};
Ae("at", Qt);
Ae("concat", Qt);
Ae("flat", Qt);
Ae("includes", Qt);
Ae("indexOf", Qt);
Ae("join", Qt);
Ae("lastIndexOf", Qt);
Ae("slice", Qt);
Ae("toString", Qt);
Ae("toLocaleString", Qt);
Ae("toSorted", Qt);
Ae("toSpliced", Qt);
Ae("with", Qt);
Ae("every", An);
Ae("filter", An);
Ae("find", An);
Ae("findIndex", An);
Ae("findLast", An);
Ae("findLastIndex", An);
Ae("flatMap", An);
Ae("forEach", An);
Ae("map", An);
Ae("some", An);
Ae("toReversed", An);
Ae("reduce", l1);
Ae("reduceRight", l1);
function Ae(e, t) {
  typeof Array.prototype[e] == "function" && (Il[e] = t(e));
}
function Qt(e) {
  return function () {
    var t = this[se];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function An(e) {
  return function (t, n) {
    var r = this,
      i = this[se];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function (s, a) {
      return t.call(n, s, a, r);
    });
  };
}
function l1(e) {
  return function () {
    var t = this,
      n = this[se];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (o, s, a) {
        return i(o, s, a, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var x3 = xi("ObservableArrayAdministration", Qd);
function hu(e) {
  return uu(e) && x3(e[se]);
}
var k3 = {},
  Cr = "add",
  Dl = "delete",
  u1 = (function () {
    function e(n, r, i) {
      var o = this;
      r === void 0 && (r = yi),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[se] = k3),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = r),
        (this.name_ = i),
        Cn(Map) || ve(18),
        Wr(function () {
          (o.keysAtom_ = Nv("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            n && o.merge(n);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (r) {
        return this.data_.has(r);
      }),
      (t.has = function (r) {
        var i = this;
        if (!K.trackingDerivation) return this.has_(r);
        var o = this.hasMap_.get(r);
        if (!o) {
          var s = (o = new ai(this.has_(r), cu, "ObservableMap.key?", !1));
          this.hasMap_.set(r, s),
            n1(s, function () {
              return i.hasMap_.delete(r);
            });
        }
        return o.get();
      }),
      (t.set = function (r, i) {
        var o = this.has_(r);
        if (sn(this)) {
          var s = an(this, {
            type: o ? Gn : Cr,
            object: this,
            newValue: i,
            name: r,
          });
          if (!s) return this;
          i = s.newValue;
        }
        return o ? this.updateValue_(r, i) : this.addValue_(r, i), this;
      }),
      (t.delete = function (r) {
        var i = this;
        if ((this.keysAtom_, sn(this))) {
          var o = an(this, { type: Dl, object: this, name: r });
          if (!o) return !1;
        }
        if (this.has_(r)) {
          var s = gs(),
            a = En(this),
            l =
              a || s
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Dl,
                    object: this,
                    oldValue: this.data_.get(r).value_,
                    name: r,
                  }
                : null;
          return (
            rr(function () {
              var u;
              i.keysAtom_.reportChanged(),
                (u = i.hasMap_.get(r)) == null || u.setNewValue_(!1);
              var c = i.data_.get(r);
              c.setNewValue_(void 0), i.data_.delete(r);
            }),
            a && Tn(this, l),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (r, i) {
        var o = this.data_.get(r);
        if (((i = o.prepareNewValue_(i)), i !== K.UNCHANGED)) {
          var s = gs(),
            a = En(this),
            l =
              a || s
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Gn,
                    object: this,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), a && Tn(this, l);
        }
      }),
      (t.addValue_ = function (r, i) {
        var o = this;
        this.keysAtom_,
          rr(function () {
            var u,
              c = new ai(i, o.enhancer_, "ObservableMap.key", !1);
            o.data_.set(r, c),
              (i = c.value_),
              (u = o.hasMap_.get(r)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged();
          });
        var s = gs(),
          a = En(this),
          l =
            a || s
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Cr,
                  object: this,
                  name: r,
                  newValue: i,
                }
              : null;
        a && Tn(this, l);
      }),
      (t.get = function (r) {
        return this.has(r)
          ? this.dehanceValue_(this.data_.get(r).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var r = this,
          i = this.keys();
        return og({
          next: function () {
            var s = i.next(),
              a = s.done,
              l = s.value;
            return { done: a, value: a ? void 0 : r.get(l) };
          },
        });
      }),
      (t.entries = function () {
        var r = this,
          i = this.keys();
        return og({
          next: function () {
            var s = i.next(),
              a = s.done,
              l = s.value;
            return { done: a, value: a ? void 0 : [l, r.get(l)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (r, i) {
        for (var o = Xi(this), s; !(s = o()).done; ) {
          var a = s.value,
            l = a[0],
            u = a[1];
          r.call(i, u, l, this);
        }
      }),
      (t.merge = function (r) {
        var i = this;
        return (
          Ei(r) && (r = new Map(r)),
          rr(function () {
            hr(r)
              ? Wb(r).forEach(function (o) {
                  return i.set(o, r[o]);
                })
              : Array.isArray(r)
              ? r.forEach(function (o) {
                  var s = o[0],
                    a = o[1];
                  return i.set(s, a);
                })
              : Eo(r)
              ? (Hb(r) || ve(19, r),
                r.forEach(function (o, s) {
                  return i.set(s, o);
                }))
              : r != null && ve(20, r);
          }),
          this
        );
      }),
      (t.clear = function () {
        var r = this;
        rr(function () {
          Wv(function () {
            for (var i = Xi(r.keys()), o; !(o = i()).done; ) {
              var s = o.value;
              r.delete(s);
            }
          });
        });
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          rr(function () {
            for (
              var o = E3(r), s = new Map(), a = !1, l = Xi(i.data_.keys()), u;
              !(u = l()).done;

            ) {
              var c = u.value;
              if (!o.has(c)) {
                var f = i.delete(c);
                if (f) a = !0;
                else {
                  var d = i.data_.get(c);
                  s.set(c, d);
                }
              }
            }
            for (var g = Xi(o.entries()), v; !(v = g()).done; ) {
              var y = v.value,
                x = y[0],
                m = y[1],
                h = i.data_.has(x);
              if ((i.set(x, m), i.data_.has(x))) {
                var w = i.data_.get(x);
                s.set(x, w), h || (a = !0);
              }
            }
            if (!a)
              if (i.data_.size !== s.size) i.keysAtom_.reportChanged();
              else
                for (
                  var E = i.data_.keys(),
                    R = s.keys(),
                    S = E.next(),
                    $ = R.next();
                  !S.done;

                ) {
                  if (S.value !== $.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  (S = E.next()), ($ = R.next());
                }
            i.data_ = s;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (r, i) {
        return Xs(this, r);
      }),
      (t.intercept_ = function (r) {
        return Js(this, r);
      }),
      To(e, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  Ei = xi("ObservableMap", u1);
function og(e) {
  return (e[Symbol.toStringTag] = "MapIterator"), Xd(e);
}
function E3(e) {
  if (Eo(e) || Ei(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (hr(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return ve(21, e);
}
var T3 = {},
  c1 = (function () {
    function e(n, r, i) {
      var o = this;
      r === void 0 && (r = yi),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[se] = T3),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        Cn(Set) || ve(22),
        (this.enhancer_ = function (s, a) {
          return r(s, a, i);
        }),
        Wr(function () {
          (o.atom_ = Nv(o.name_)), n && o.replace(n);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.clear = function () {
        var r = this;
        rr(function () {
          Wv(function () {
            for (var i = Xi(r.data_.values()), o; !(o = i()).done; ) {
              var s = o.value;
              r.delete(s);
            }
          });
        });
      }),
      (t.forEach = function (r, i) {
        for (var o = Xi(this), s; !(s = o()).done; ) {
          var a = s.value;
          r.call(i, a, a, this);
        }
      }),
      (t.add = function (r) {
        var i = this;
        if ((this.atom_, sn(this))) {
          var o = an(this, { type: Cr, object: this, newValue: r });
          if (!o) return this;
        }
        if (!this.has(r)) {
          rr(function () {
            i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged();
          });
          var s = !1,
            a = En(this),
            l =
              a || s
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Cr,
                    object: this,
                    newValue: r,
                  }
                : null;
          a && Tn(this, l);
        }
        return this;
      }),
      (t.delete = function (r) {
        var i = this;
        if (sn(this)) {
          var o = an(this, { type: Dl, object: this, oldValue: r });
          if (!o) return !1;
        }
        if (this.has(r)) {
          var s = !1,
            a = En(this),
            l =
              a || s
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Dl,
                    object: this,
                    oldValue: r,
                  }
                : null;
          return (
            rr(function () {
              i.atom_.reportChanged(), i.data_.delete(r);
            }),
            a && Tn(this, l),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (r) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r))
        );
      }),
      (t.entries = function () {
        var r = 0,
          i = Array.from(this.keys()),
          o = Array.from(this.values());
        return sg({
          next: function () {
            var a = r;
            return (
              (r += 1),
              a < o.length
                ? { value: [i[a], o[a]], done: !1 }
                : { value: void 0, done: !0 }
            );
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var r = this,
          i = 0,
          o = Array.from(this.data_.values());
        return sg({
          next: function () {
            return i < o.length
              ? { value: r.dehanceValue_(o[i++]), done: !1 }
              : { value: void 0, done: !0 };
          },
        });
      }),
      (t.intersection = function (r) {
        if (nr(r) && !Bn(r)) return r.intersection(this);
        var i = new Set(this);
        return i.intersection(r);
      }),
      (t.union = function (r) {
        if (nr(r) && !Bn(r)) return r.union(this);
        var i = new Set(this);
        return i.union(r);
      }),
      (t.difference = function (r) {
        return new Set(this).difference(r);
      }),
      (t.symmetricDifference = function (r) {
        if (nr(r) && !Bn(r)) return r.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(r);
      }),
      (t.isSubsetOf = function (r) {
        return new Set(this).isSubsetOf(r);
      }),
      (t.isSupersetOf = function (r) {
        return new Set(this).isSupersetOf(r);
      }),
      (t.isDisjointFrom = function (r) {
        if (nr(r) && !Bn(r)) return r.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(r);
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          Bn(r) && (r = new Set(r)),
          rr(function () {
            Array.isArray(r)
              ? (i.clear(),
                r.forEach(function (o) {
                  return i.add(o);
                }))
              : nr(r)
              ? (i.clear(),
                r.forEach(function (o) {
                  return i.add(o);
                }))
              : r != null && ve("Cannot initialize set from " + r);
          }),
          this
        );
      }),
      (t.observe_ = function (r, i) {
        return Xs(this, r);
      }),
      (t.intercept_ = function (r) {
        return Js(this, r);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      To(e, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  Bn = xi("ObservableSet", c1);
function sg(e) {
  return (e[Symbol.toStringTag] = "SetIterator"), Xd(e);
}
var ag = Object.create(null),
  lg = "remove",
  f1 = (function () {
    function e(n, r, i, o) {
      r === void 0 && (r = new Map()),
        o === void 0 && (o = _x),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = n),
        (this.values_ = r),
        (this.name_ = i),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new Hr("ObservableObject.keys")),
        (this.isPlainObject_ = hr(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (r) {
        return this.values_.get(r).get();
      }),
      (t.setObservablePropValue_ = function (r, i) {
        var o = this.values_.get(r);
        if (o instanceof Rn) return o.set(i), !0;
        if (sn(this)) {
          var s = an(this, {
            type: Gn,
            object: this.proxy_ || this.target_,
            name: r,
            newValue: i,
          });
          if (!s) return null;
          i = s.newValue;
        }
        if (((i = o.prepareNewValue_(i)), i !== K.UNCHANGED)) {
          var a = En(this),
            l = !1,
            u =
              a || l
                ? {
                    type: Gn,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), a && Tn(this, u);
        }
        return !0;
      }),
      (t.get_ = function (r) {
        return (
          K.trackingDerivation && !lr(this.target_, r) && this.has_(r),
          this.target_[r]
        );
      }),
      (t.set_ = function (r, i, o) {
        return (
          o === void 0 && (o = !1),
          lr(this.target_, r)
            ? this.values_.has(r)
              ? this.setObservablePropValue_(r, i)
              : o
              ? Reflect.set(this.target_, r, i)
              : ((this.target_[r] = i), !0)
            : this.extend_(
                r,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o
              )
        );
      }),
      (t.has_ = function (r) {
        if (!K.trackingDerivation) return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(r);
        return (
          i ||
            ((i = new ai(r in this.target_, cu, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(r, i)),
          i.get()
        );
      }),
      (t.make_ = function (r, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(r in this.target_)) {
            var o;
            if ((o = this.target_[Vn]) != null && o[r]) return;
            ve(1, i.annotationType_, this.name_ + "." + r.toString());
          }
          for (var s = this.target_; s && s !== lu; ) {
            var a = Ol(s, r);
            if (a) {
              var l = i.make_(this, r, a, s);
              if (l === 0) return;
              if (l === 1) break;
            }
            s = Object.getPrototypeOf(s);
          }
          cg(this, i, r);
        }
      }),
      (t.extend_ = function (r, i, o, s) {
        if (
          (s === void 0 && (s = !1),
          o === !0 && (o = this.defaultAnnotation_),
          o === !1)
        )
          return this.defineProperty_(r, i, s);
        var a = o.extend_(this, r, i, s);
        return a && cg(this, o, r), a;
      }),
      (t.defineProperty_ = function (r, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          un();
          var s = this.delete_(r);
          if (!s) return s;
          if (sn(this)) {
            var a = an(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: Cr,
              newValue: i.value,
            });
            if (!a) return null;
            var l = a.newValue;
            i.value !== l && (i = mi({}, i, { value: l }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, i)) return !1;
          } else qn(this.target_, r, i);
          this.notifyPropertyAddition_(r, i.value);
        } finally {
          cn();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (r, i, o, s) {
        s === void 0 && (s = !1), this.keysAtom_;
        try {
          un();
          var a = this.delete_(r);
          if (!a) return a;
          if (sn(this)) {
            var l = an(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: Cr,
              newValue: i,
            });
            if (!l) return null;
            i = l.newValue;
          }
          var u = ug(r),
            c = {
              configurable: K.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (s) {
            if (!Reflect.defineProperty(this.target_, r, c)) return !1;
          } else qn(this.target_, r, c);
          var f = new ai(i, o, "ObservableObject.key", !1);
          this.values_.set(r, f), this.notifyPropertyAddition_(r, f.value_);
        } finally {
          cn();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (r, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          un();
          var s = this.delete_(r);
          if (!s) return s;
          if (sn(this)) {
            var a = an(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: Cr,
              newValue: void 0,
            });
            if (!a) return null;
          }
          i.name || (i.name = "ObservableObject.key"),
            (i.context = this.proxy_ || this.target_);
          var l = ug(r),
            u = {
              configurable: K.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: l.get,
              set: l.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, u)) return !1;
          } else qn(this.target_, r, u);
          this.values_.set(r, new Rn(i)),
            this.notifyPropertyAddition_(r, void 0);
        } finally {
          cn();
        }
        return !0;
      }),
      (t.delete_ = function (r, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !lr(this.target_, r)))
          return !0;
        if (sn(this)) {
          var o = an(this, {
            object: this.proxy_ || this.target_,
            name: r,
            type: lg,
          });
          if (!o) return null;
        }
        try {
          var s;
          un();
          var a = En(this),
            l = !1,
            u = this.values_.get(r),
            c = void 0;
          if (!u && (a || l)) {
            var f;
            c = (f = Ol(this.target_, r)) == null ? void 0 : f.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, r)) return !1;
          } else delete this.target_[r];
          if (
            (u &&
              (this.values_.delete(r),
              u instanceof ai && (c = u.value_),
              Jv(u)),
            this.keysAtom_.reportChanged(),
            (s = this.pendingKeys_) == null ||
              (s = s.get(r)) == null ||
              s.set(r in this.target_),
            a || l)
          ) {
            var d = {
              type: lg,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: c,
              name: r,
            };
            a && Tn(this, d);
          }
        } finally {
          cn();
        }
        return !0;
      }),
      (t.observe_ = function (r, i) {
        return Xs(this, r);
      }),
      (t.intercept_ = function (r) {
        return Js(this, r);
      }),
      (t.notifyPropertyAddition_ = function (r, i) {
        var o,
          s = En(this),
          a = !1;
        if (s || a) {
          var l =
            s || a
              ? {
                  type: Cr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: r,
                  newValue: i,
                }
              : null;
          s && Tn(this, l);
        }
        (o = this.pendingKeys_) == null || (o = o.get(r)) == null || o.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), yo(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function Ti(e, t) {
  var n;
  if (lr(e, se)) return e;
  var r = (n = t == null ? void 0 : t.name) != null ? n : "ObservableObject",
    i = new f1(e, new Map(), String(r), Lx(t));
  return Ks(e, se, i), e;
}
var O3 = xi("ObservableObjectAdministration", f1);
function ug(e) {
  return (
    ag[e] ||
    (ag[e] = {
      get: function () {
        return this[se].getObservablePropValue_(e);
      },
      set: function (n) {
        return this[se].setObservablePropValue_(e, n);
      },
    })
  );
}
function gu(e) {
  return uu(e) ? O3(e[se]) : !1;
}
function cg(e, t, n) {
  var r;
  (r = e.target_[Vn]) == null || delete r[n];
}
var C3 = p1(0),
  R3 = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  ac = 0,
  d1 = function () {};
function A3(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
    ? (e.prototype.__proto__ = t)
    : (e.prototype = t);
}
A3(d1, Array.prototype);
var Jd = (function (e) {
  function t(r, i, o, s) {
    var a;
    return (
      o === void 0 && (o = "ObservableArray"),
      s === void 0 && (s = !1),
      (a = e.call(this) || this),
      Wr(function () {
        var l = new Qd(o, i, s, !0);
        (l.proxy_ = a),
          Pv(a, se, l),
          r && r.length && a.spliceWithArray(0, 0, r),
          R3 && Object.defineProperty(a, "0", C3);
      }),
      a
    );
  }
  Dv(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[se].atom_.reportObserved();
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (a) {
          return hu(a) ? a.slice() : a;
        })
      );
    }),
    (n[Symbol.iterator] = function () {
      var r = this,
        i = 0;
      return Xd({
        next: function () {
          return i < r.length
            ? { value: r[i++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    To(t, [
      {
        key: "length",
        get: function () {
          return this[se].getArrayLength_();
        },
        set: function (i) {
          this[se].setArrayLength_(i);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(d1);
Object.entries(Il).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== "concat" && Ks(Jd.prototype, t, n);
});
function p1(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[se].get_(e);
    },
    set: function (n) {
      this[se].set_(e, n);
    },
  };
}
function P3(e) {
  qn(Jd.prototype, "" + e, p1(e));
}
function h1(e) {
  if (e > ac) {
    for (var t = ac; t < e + 100; t++) P3(t);
    ac = e;
  }
}
h1(1e3);
function L3(e, t, n) {
  return new Jd(e, t, n);
}
function Nl(e, t) {
  if (typeof e == "object" && e !== null) {
    if (hu(e)) return t !== void 0 && ve(23), e[se].atom_;
    if (Bn(e)) return e.atom_;
    if (Ei(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || ve(25, t, Pf(e)), n;
    }
    if (gu(e)) {
      if (!t) return ve(26);
      var r = e[se].values_.get(t);
      return r || ve(27, t, Pf(e)), r;
    }
    if (Wd(e) || pu(e) || Ll(e)) return e;
  } else if (Cn(e) && Ll(e[se])) return e[se];
  ve(28);
}
function I3(e, t) {
  if ((e || ve(29), Wd(e) || pu(e) || Ll(e) || Ei(e) || Bn(e))) return e;
  if (e[se]) return e[se];
  ve(24, e);
}
function Pf(e, t) {
  var n;
  if (t !== void 0) n = Nl(e, t);
  else {
    if ($s(e)) return e.name;
    gu(e) || Ei(e) || Bn(e) ? (n = I3(e)) : (n = Nl(e));
  }
  return n.name_;
}
function Wr(e) {
  var t = ki(),
    n = Kd(!0);
  un();
  try {
    return e();
  } finally {
    cn(), Gd(n), ur(t);
  }
}
var fg = lu.toString;
function g1(e, t, n) {
  return n === void 0 && (n = -1), Lf(e, t, n);
}
function Lf(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var s = fg.call(e);
  if (s !== fg.call(t)) return !1;
  switch (s) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
      );
    case "[object Map]":
    case "[object Set]":
      n >= 0 && n++;
      break;
  }
  (e = dg(e)), (t = dg(t));
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var l = e.constructor,
      u = t.constructor;
    if (
      l !== u &&
      !(Cn(l) && l instanceof l && Cn(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (n === 0) return !1;
  n < 0 && (n = -1), (r = r || []), (i = i || []);
  for (var c = r.length; c--; ) if (r[c] === e) return i[c] === t;
  if ((r.push(e), i.push(t), a)) {
    if (((c = e.length), c !== t.length)) return !1;
    for (; c--; ) if (!Lf(e[c], t[c], n - 1, r, i)) return !1;
  } else {
    var f = Object.keys(e),
      d;
    if (((c = f.length), Object.keys(t).length !== c)) return !1;
    for (; c--; )
      if (((d = f[c]), !(lr(t, d) && Lf(e[d], t[d], n - 1, r, i)))) return !1;
  }
  return r.pop(), i.pop(), !0;
}
function dg(e) {
  return hu(e)
    ? e.slice()
    : Eo(e) || Ei(e) || nr(e) || Bn(e)
    ? Array.from(e.entries())
    : e;
}
var pg,
  D3 = ((pg = au().Iterator) == null ? void 0 : pg.prototype) || {};
function Xd(e) {
  return (e[Symbol.iterator] = N3), Object.assign(Object.create(D3), e);
}
function N3() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = au();
  typeof t[e] > "u" &&
    ve("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Qx,
    extras: { getDebugName: Pf },
    $mobx: se,
  });
if (!p.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!v3)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available"
  );
function j3(e) {
  e();
}
function $3(e) {
  e || (e = j3), c3({ reactionScheduler: e });
}
function M3(e) {
  return f3(e);
}
var F3 = 1e4,
  U3 = 1e4,
  B3 = (function () {
    function e(t) {
      var n = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (r) {
            r === void 0 && (r = F3),
              clearTimeout(n.sweepTimeout),
              (n.sweepTimeout = void 0);
            var i = Date.now();
            n.registrations.forEach(function (o, s) {
              i - o.registeredAt >= r &&
                (n.finalize(o.value), n.registrations.delete(s));
            }),
              n.registrations.size > 0 && n.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            n.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, n, r) {
          this.registrations.set(r, { value: n, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, U3));
        },
      }),
      e
    );
  })(),
  z3 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : B3,
  If = new z3(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(),
      (e.reaction = null);
  }),
  m1 = { exports: {} },
  y1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wo = p;
function V3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var H3 = typeof Object.is == "function" ? Object.is : V3,
  W3 = wo.useState,
  q3 = wo.useEffect,
  K3 = wo.useLayoutEffect,
  G3 = wo.useDebugValue;
function Y3(e, t) {
  var n = t(),
    r = W3({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    K3(
      function () {
        (i.value = n), (i.getSnapshot = t), lc(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    q3(
      function () {
        return (
          lc(i) && o({ inst: i }),
          e(function () {
            lc(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    G3(n),
    n
  );
}
function lc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !H3(e, n);
  } catch {
    return !0;
  }
}
function Q3(e, t) {
  return t();
}
var J3 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Q3
    : Y3;
y1.useSyncExternalStore =
  wo.useSyncExternalStore !== void 0 ? wo.useSyncExternalStore : J3;
m1.exports = y1;
var X3 = m1.exports;
function hg(e) {
  e.reaction = new gr("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function Z3(e, t) {
  t === void 0 && (t = "observed");
  var n = _n.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (a) {
        return (
          If.unregister(r),
          (r.onStoreChange = a),
          r.reaction || (hg(r), (r.stateVersion = Symbol())),
          function () {
            var l;
            (r.onStoreChange = null),
              (l = r.reaction) === null || l === void 0 || l.dispose(),
              (r.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  i.reaction || (hg(i), If.register(n, i, i)),
    _n.useDebugValue(i.reaction, M3),
    X3.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
  var o, s;
  if (
    (i.reaction.track(function () {
      try {
        o = e();
      } catch (a) {
        s = a;
      }
    }),
    s)
  )
    throw s;
  return o;
}
var uc,
  cc,
  v1 = typeof Symbol == "function" && Symbol.for,
  ek =
    (cc =
      (uc = Object.getOwnPropertyDescriptor(function () {}, "name")) === null ||
      uc === void 0
        ? void 0
        : uc.configurable) !== null && cc !== void 0
      ? cc
      : !1,
  gg = v1
    ? Symbol.for("react.forward_ref")
    : typeof p.forwardRef == "function" &&
      p.forwardRef(function (e) {
        return null;
      }).$$typeof,
  mg = v1
    ? Symbol.for("react.memo")
    : typeof p.memo == "function" &&
      p.memo(function (e) {
        return null;
      }).$$typeof;
function Zs(e, t) {
  var n;
  if (mg && e.$$typeof === mg)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
    );
  var r = (n = void 0) !== null && n !== void 0 ? n : !1,
    i = e,
    o = e.displayName || e.name;
  if (
    gg &&
    e.$$typeof === gg &&
    ((r = !0), (i = e.render), typeof i != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function"
    );
  var s = function (a, l) {
    return Z3(function () {
      return i(a, l);
    }, o);
  };
  return (
    (s.displayName = e.displayName),
    ek &&
      Object.defineProperty(s, "name", {
        value: e.name,
        writable: !0,
        configurable: !0,
      }),
    e.contextTypes && (s.contextTypes = e.contextTypes),
    r && (s = p.forwardRef(s)),
    (s = p.memo(s)),
    nk(e, s),
    s
  );
}
var tk = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function nk(e, t) {
  Object.keys(e).forEach(function (n) {
    tk[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
var fc;
$3(eu.unstable_batchedUpdates);
fc = If.finalizeAllImmediately;
const rk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: 24,
        height: 23,
        viewBox: "0 0 24 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("path", {
        d: "M22.6178 0.999438L0.929461 9.84276C0.809084 9.89363 0.706371 9.97891 0.634166 10.0879C0.561949 10.1967 0.523438 10.3246 0.523438 10.4553C0.523438 10.5859 0.561949 10.7138 0.634166 10.8226C0.706371 10.9316 0.809084 11.0169 0.929461 11.0678L6.21446 13.1444L8.26779 20.0744C8.29477 20.1744 8.34642 20.2661 8.41803 20.3409C8.48963 20.4158 8.57889 20.4714 8.6776 20.5027C8.77632 20.5341 8.88133 20.5402 8.983 20.5203C9.08466 20.5006 9.17973 20.4556 9.25946 20.3894L12.1994 17.8578C12.3503 17.7326 12.5401 17.664 12.7361 17.664C12.9321 17.664 13.122 17.7326 13.2728 17.8578L18.5928 21.9178C18.6769 21.9819 18.7763 22.0229 18.8812 22.0368C18.986 22.0505 19.0927 22.0368 19.1906 21.9966C19.2884 21.9566 19.3741 21.8916 19.4391 21.8082C19.504 21.7248 19.5462 21.6257 19.5611 21.5211L23.4578 1.7811C23.4912 1.66682 23.4923 1.54547 23.4608 1.43065C23.4292 1.31581 23.3663 1.21203 23.2791 1.1309C23.192 1.04978 23.084 0.994515 22.9672 0.971298C22.8503 0.948081 22.7294 0.957823 22.6178 0.999438ZM18.4878 5.66611L9.95942 14.0078C9.65757 14.3053 9.46446 14.6956 9.41113 15.1161L9.11946 17.4494C9.11946 17.5176 9.09242 17.5828 9.04428 17.631C8.99615 17.679 8.93087 17.7061 8.86279 17.7061C8.79472 17.7061 8.72943 17.679 8.68131 17.631C8.63317 17.5828 8.60613 17.5176 8.60613 17.4494L7.43946 13.3194C7.38184 13.0915 7.39445 12.8514 7.47565 12.6307C7.55684 12.41 7.70282 12.219 7.89446 12.0828L18.2194 5.3861C18.4061 5.26944 18.5928 5.53777 18.4411 5.68944L18.4878 5.66611Z",
        fill: "#FEFEFE",
      })
    ),
  w1 = p.forwardRef(rk),
  ik = Zs(() => {
    var f, d;
    const { t: e } = ou("common"),
      { store: t } = p.useContext(Oi),
      n = yr(),
      [r, i] = p.useState(!1),
      [o, s] = p.useState(!1),
      [a, l] = p.useState("/"),
      u = Hd();
    p.useEffect(() => {
      i(t.isAuth);
    }, [t.isAuth]),
      p.useEffect(() => {
        o
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto");
      }, [o]),
      p.useEffect(() => {
        const g = n.pathname;
        l(g);
      }, [n]);
    const c = (g) => {
      if (g.target.tagName === "A") {
        s(!1);
        return;
      }
    };
    return b.jsx("div", {
      className: Te.wrapper,
      children: b.jsxs("div", {
        className: Te.container,
        children: [
          b.jsx("div", {
            onClick: () => s(!1),
            className: Te.logo,
            children: b.jsx(Ev, {}),
          }),
          b.jsx("div", {
            className: en(Te.burger, o && Te.open),
            onClick: () => s((g) => !g),
          }),
          b.jsxs("div", {
            className: en(Te.menuWrapper, o && Te.open, r && Te.auth),
            onClick: c,
            children: [
              b.jsxs("nav", {
                className: Te.navbarMenu,
                children: [
                  b.jsx(Et, {
                    to: u("/about-us"),
                    className: en(
                      Te.navLink,
                      a.includes("about-us") && Te.active
                    ),
                    children: e("navMenu.aboutUs"),
                  }),
                  ((f = t == null ? void 0 : t.user) == null
                    ? void 0
                    : f.referralId) &&
                    b.jsx(Et, {
                      to: u("/signal"),
                      className: en(
                        Te.navLink,
                        a.includes("signal") && Te.active
                      ),
                      children: e("navMenu.signal"),
                    }),
                  ((d = t == null ? void 0 : t.user) == null
                    ? void 0
                    : d.referralId) &&
                    b.jsx(Et, {
                      to: u("/history"),
                      className: en(
                        Te.navLink,
                        a.includes("history") && Te.active
                      ),
                      children: e("navMenu.history"),
                    }),
                  b.jsx(Et, {
                    to: u("/instruction"),
                    className: en(
                      Te.navLink,
                      a.includes("instruction") && Te.active
                    ),
                    children: e("navMenu.instruction"),
                  }),
                  b.jsx(Et, {
                    to: u("/wiki"),
                    className: en(Te.navLink, a.includes("wiki") && Te.active),
                    children: e("navMenu.wiki"),
                  }),
                ],
              }),
              b.jsxs("div", {
                className: Te.right,
                children: [
                  b.jsx(Mb, {}),
                  b.jsxs(Et, {
                    to: "https://t.me/+rYXlRUG-wkUwMmQy",
                    className: Te.supportLink,
                    children: [
                      b.jsx(Uh, { icon: w1, category: "blueShadow" }),
                      b.jsx("span", { children: e("supportLink") }),
                    ],
                  }),
                  b.jsxs("div", {
                    className: Te.authLinksWrapper,
                    children: [
                      b.jsxs(Et, {
                        className: Te.accountWrapper,
                        to: u(r ? "/account" : "/register"),
                        onClick: () => s(!1),
                        children: [
                          b.jsx(Uh, {
                            icon: tb,
                            category: "blueShadow",
                            className: en(
                              Te.account,
                              a.includes("account") && Te.active
                            ),
                          }),
                          b.jsx("p", {
                            children: e(r ? "navMenu.account" : "register"),
                          }),
                        ],
                      }),
                      b.jsx("div", {
                        className: Te.authLoginLinkWrapper,
                        children: r
                          ? null
                          : b.jsxs(b.Fragment, {
                              children: [
                                b.jsx("p", {
                                  className: Te.or,
                                  children: e("or"),
                                }),
                                b.jsx(Et, {
                                  className: Te.accountWrapper,
                                  to: u("/login"),
                                  onClick: () => s(!1),
                                  children: b.jsx("p", {
                                    children: e("login", { ns: "auth" }),
                                  }),
                                }),
                              ],
                            }),
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
  }),
  ok = "_wrapper_7z5zm_1",
  sk = "_container_7z5zm_9",
  ak = "_marqueeContainer_7z5zm_19",
  lk = "_topBorderContainer_7z5zm_27",
  uk = "_topContainer_7z5zm_33",
  ck = "_socials_7z5zm_43",
  fk = "_info_7z5zm_54",
  dk = "_copyright_7z5zm_62",
  pk = "_links_7z5zm_71",
  hk = "_link_7z5zm_71",
  gk = "_separator_7z5zm_80",
  xt = {
    wrapper: ok,
    container: sk,
    marqueeContainer: ak,
    topBorderContainer: lk,
    topContainer: uk,
    socials: ck,
    info: fk,
    copyright: dk,
    links: pk,
    link: hk,
    separator: gk,
  },
  mk = "_marqueeContainer_v1xye_1",
  yk = "_text_v1xye_14",
  Ye = { marqueeContainer: mk, text: yk };
var S1 = {};
function vk(e) {
  if (typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(S1, "__esModule", { value: !0 });
var Ve = p;
function wk(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var wr = wk(Ve);
vk(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const Sk = Ve.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: r = !1,
    play: i = !0,
    pauseOnHover: o = !1,
    pauseOnClick: s = !1,
    direction: a = "left",
    speed: l = 50,
    delay: u = 0,
    loop: c = 0,
    gradient: f = !1,
    gradientColor: d = "white",
    gradientWidth: g = 200,
    onFinish: v,
    onCycleComplete: y,
    onMount: x,
    children: m,
  },
  h
) {
  const [w, E] = Ve.useState(0),
    [R, S] = Ve.useState(0),
    [$, O] = Ve.useState(1),
    [W, q] = Ve.useState(!1),
    ie = Ve.useRef(null),
    pe = h || ie,
    be = Ve.useRef(null),
    he = Ve.useCallback(() => {
      if (be.current && pe.current) {
        const re = pe.current.getBoundingClientRect(),
          we = be.current.getBoundingClientRect();
        let We = re.width,
          ge = we.width;
        (a === "up" || a === "down") && ((We = re.height), (ge = we.height)),
          O(r && We && ge && ge < We ? Math.ceil(We / ge) : 1),
          E(We),
          S(ge);
      }
    }, [r, pe, a]);
  Ve.useEffect(() => {
    if (W && (he(), be.current && pe.current)) {
      const re = new ResizeObserver(() => he());
      return (
        re.observe(pe.current),
        re.observe(be.current),
        () => {
          re && re.disconnect();
        }
      );
    }
  }, [he, pe, W]),
    Ve.useEffect(() => {
      he();
    }, [he, m]),
    Ve.useEffect(() => {
      q(!0);
    }, []),
    Ve.useEffect(() => {
      typeof x == "function" && x();
    }, []);
  const Ke = Ve.useMemo(
      () => (r ? (R * $) / l : R < w ? w / l : R / l),
      [r, w, R, $, l]
    ),
    Xe = Ve.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          "--pause-on-hover": !i || o ? "paused" : "running",
          "--pause-on-click": !i || (o && !s) || s ? "paused" : "running",
          "--width": a === "up" || a === "down" ? "100vh" : "100%",
          "--transform":
            a === "up"
              ? "rotate(-90deg)"
              : a === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, i, o, s, a]
    ),
    xe = Ve.useMemo(
      () => ({
        "--gradient-color": d,
        "--gradient-width": typeof g == "number" ? `${g}px` : g,
      }),
      [d, g]
    ),
    B = Ve.useMemo(
      () => ({
        "--play": i ? "running" : "paused",
        "--direction": a === "left" ? "normal" : "reverse",
        "--duration": `${Ke}s`,
        "--delay": `${u}s`,
        "--iteration-count": c ? `${c}` : "infinite",
        "--min-width": r ? "auto" : "100%",
      }),
      [i, a, Ke, u, c, r]
    ),
    H = Ve.useMemo(
      () => ({
        "--transform":
          a === "up"
            ? "rotate(90deg)"
            : a === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [a]
    ),
    ee = Ve.useCallback(
      (re) =>
        [...Array(Number.isFinite(re) && re >= 0 ? re : 0)].map((we, We) =>
          wr.default.createElement(
            Ve.Fragment,
            { key: We },
            Ve.Children.map(m, (ge) =>
              wr.default.createElement(
                "div",
                { style: H, className: "rfm-child" },
                ge
              )
            )
          )
        ),
      [H, m]
    );
  return W
    ? wr.default.createElement(
        "div",
        { ref: pe, style: Xe, className: "rfm-marquee-container " + n },
        f &&
          wr.default.createElement("div", {
            style: xe,
            className: "rfm-overlay",
          }),
        wr.default.createElement(
          "div",
          {
            className: "rfm-marquee",
            style: B,
            onAnimationIteration: y,
            onAnimationEnd: v,
          },
          wr.default.createElement(
            "div",
            { className: "rfm-initial-child-container", ref: be },
            Ve.Children.map(m, (re) =>
              wr.default.createElement(
                "div",
                { style: H, className: "rfm-child" },
                re
              )
            )
          ),
          ee($ - 1)
        ),
        wr.default.createElement(
          "div",
          { className: "rfm-marquee", style: B },
          ee($)
        )
      )
    : null;
});
var yg = (S1.default = Sk);
const _k = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: 11,
        height: 11,
        viewBox: "0 0 11 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("path", {
        d: "M4.25813 1.0516C4.28247 0.840874 4.63619 0.780546 4.72712 0.972261C5.15501 1.87104 5.89673 3.19913 6.79809 3.84316C7.69959 4.48527 9.19857 4.75575 10.1872 4.86709C10.398 4.89142 10.4564 5.24501 10.2647 5.33594C9.36588 5.76383 8.03971 6.50569 7.39568 7.40705C6.75165 8.30842 6.4831 9.80753 6.37175 10.7962C6.34742 11.0069 5.99191 11.0652 5.90291 10.8736C5.47501 9.97484 4.73316 8.64867 3.82987 8.0045C2.92851 7.36047 1.42939 7.09192 0.442641 6.98071C0.231918 6.95638 0.171721 6.60073 0.363302 6.51173C1.26208 6.08384 2.59018 5.34212 3.23434 4.43883C3.87645 3.53733 4.14693 2.03835 4.25813 1.0516Z",
        fill: "black",
      })
    ),
  lt = p.forwardRef(_k),
  bk = () =>
    b.jsxs("div", {
      children: [
        b.jsxs(yg, {
          className: Ye.marqueeContainer,
          direction: "right",
          children: [
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
          ],
        }),
        b.jsxs(yg, {
          className: Ye.marqueeContainer,
          children: [
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
            b.jsxs("p", {
              className: Ye.text,
              children: ["TRADESIGNAL ", b.jsx(lt, {})],
            }),
          ],
        }),
      ],
    }),
  xk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        height: "800px",
        width: "800px",
        id: "_x32_",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 512 512",
        xmlSpace: "preserve",
        fill: "#ffffff",
        stroke: "#ffffff",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement("style", { type: "text/css" }, " .st0{fill:#fff;} "),
        p.createElement(
          "g",
          null,
          p.createElement("path", {
            className: "st0",
            d: "M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345 c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345 C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203 c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958 c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064 c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571 c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637 L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136 C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435 C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959 l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959 C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8 V385.92z",
          })
        )
      )
    ),
  kk = p.forwardRef(xk),
  Ek = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        fill: "#000000",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement("title", null, "ic_fluent_bot_24_filled"),
        p.createElement("desc", null, "Created with Sketch."),
        p.createElement(
          "g",
          {
            id: "\\uD83D\\uDD0D-Product-Icons",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
          },
          p.createElement(
            "g",
            {
              id: "ic_fluent_bot_24_filled",
              fill: "#ffffff",
              fillRule: "nonzero",
            },
            p.createElement("path", {
              d: "M17.7530511,13.999921 C18.9956918,13.999921 20.0030511,15.0072804 20.0030511,16.249921 L20.0030511,17.1550008 C20.0030511,18.2486786 19.5255957,19.2878579 18.6957793,20.0002733 C17.1303315,21.344244 14.8899962,22.0010712 12,22.0010712 C9.11050247,22.0010712 6.87168436,21.3444691 5.30881727,20.0007885 C4.48019625,19.2883988 4.00354153,18.2500002 4.00354153,17.1572408 L4.00354153,16.249921 C4.00354153,15.0072804 5.01090084,13.999921 6.25354153,13.999921 L17.7530511,13.999921 Z M11.8985607,2.00734093 L12.0003312,2.00049432 C12.380027,2.00049432 12.6938222,2.2826482 12.7434846,2.64872376 L12.7503312,2.75049432 L12.7495415,3.49949432 L16.25,3.5 C17.4926407,3.5 18.5,4.50735931 18.5,5.75 L18.5,10.254591 C18.5,11.4972317 17.4926407,12.504591 16.25,12.504591 L7.75,12.504591 C6.50735931,12.504591 5.5,11.4972317 5.5,10.254591 L5.5,5.75 C5.5,4.50735931 6.50735931,3.5 7.75,3.5 L11.2495415,3.49949432 L11.2503312,2.75049432 C11.2503312,2.37079855 11.5324851,2.05700336 11.8985607,2.00734093 L12.0003312,2.00049432 L11.8985607,2.00734093 Z M9.74928905,6.5 C9.05932576,6.5 8.5,7.05932576 8.5,7.74928905 C8.5,8.43925235 9.05932576,8.99857811 9.74928905,8.99857811 C10.4392523,8.99857811 10.9985781,8.43925235 10.9985781,7.74928905 C10.9985781,7.05932576 10.4392523,6.5 9.74928905,6.5 Z M14.2420255,6.5 C13.5520622,6.5 12.9927364,7.05932576 12.9927364,7.74928905 C12.9927364,8.43925235 13.5520622,8.99857811 14.2420255,8.99857811 C14.9319888,8.99857811 15.4913145,8.43925235 15.4913145,7.74928905 C15.4913145,7.05932576 14.9319888,6.5 14.2420255,6.5 Z",
              id: "\\uD83C\\uDFA8-Color",
            })
          )
        )
      )
    ),
  Tk = p.forwardRef(Ek),
  Ok = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#000000",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement(
          "defs",
          null,
          p.createElement(
            "style",
            null,
            ".cls-1{fill:#ffffff;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#ffffff;}"
          )
        ),
        p.createElement("title", null, "Icon_24px_MLEngine_Color"),
        p.createElement(
          "g",
          { "data-name": "Product Icons" },
          p.createElement(
            "g",
            null,
            p.createElement("polygon", {
              className: "cls-1",
              points:
                "16.64 15.13 17.38 13.88 20.91 13.88 22 12 19.82 8.25 16.75 8.25 15.69 6.39 14.5 6.39 14.5 5.13 16.44 5.13 17.5 7 19.09 7 16.9 3.25 12.63 3.25 12.63 8.25 14.36 8.25 15.09 9.5 12.63 9.5 12.63 12 14.89 12 15.94 10.13 18.75 10.13 19.47 11.38 16.67 11.38 15.62 13.25 12.63 13.25 12.63 17.63 16.03 17.63 15.31 18.88 12.63 18.88 12.63 20.75 16.9 20.75 20.18 15.13 18.09 15.13 17.36 16.38 14.5 16.38 14.5 15.13 16.64 15.13",
            }),
            p.createElement("polygon", {
              className: "cls-2",
              points:
                "7.36 15.13 6.62 13.88 3.09 13.88 2 12 4.18 8.25 7.25 8.25 8.31 6.39 9.5 6.39 9.5 5.13 7.56 5.13 6.5 7 4.91 7 7.1 3.25 11.38 3.25 11.38 8.25 9.64 8.25 8.91 9.5 11.38 9.5 11.38 12 9.11 12 8.06 10.13 5.25 10.13 4.53 11.38 7.33 11.38 8.38 13.25 11.38 13.25 11.38 17.63 7.97 17.63 8.69 18.88 11.38 18.88 11.38 20.75 7.1 20.75 3.82 15.13 5.91 15.13 6.64 16.38 9.5 16.38 9.5 15.13 7.36 15.13",
            })
          )
        )
      )
    ),
  Ck = p.forwardRef(Ok),
  Rk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#000000",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement(
          "defs",
          null,
          p.createElement(
            "style",
            null,
            ".cls-1{fill:#ffffff;}.cls-2{fill:#ffffff;}.cls-3{fill:#ffffff;}"
          )
        ),
        p.createElement("title", null, "Icon_24px_CloudBuild_Color"),
        p.createElement(
          "g",
          { "data-name": "Product Icons" },
          p.createElement(
            "g",
            null,
            p.createElement(
              "g",
              null,
              p.createElement(
                "g",
                null,
                p.createElement("polygon", {
                  className: "cls-1",
                  points:
                    "12.15 16.24 15.67 14.21 15.67 10.15 14.49 9.46 10.97 15.56 12.15 16.24",
                }),
                p.createElement("polygon", {
                  className: "cls-2",
                  points:
                    "8.63 10.15 8.63 14.21 9.81 14.89 13.34 8.8 12.15 8.11 8.63 10.15",
                })
              )
            )
          ),
          p.createElement("polygon", {
            className: "cls-3",
            points:
              "11.46 17.45 7.24 15.01 7.24 10.15 3.49 7.98 3.49 17.18 11.46 21.78 11.46 17.45",
          }),
          p.createElement("polygon", {
            className: "cls-3",
            points:
              "7.93 8.95 12.15 6.51 16.37 8.95 20.13 6.78 12.15 2.17 4.17 6.78 7.93 8.95",
          }),
          p.createElement("polygon", {
            className: "cls-3",
            points:
              "17.06 15.01 12.84 17.45 12.84 21.78 20.82 17.18 20.82 7.98 17.06 10.15 17.06 15.01",
          })
        )
      )
    ),
  Ak = p.forwardRef(Rk),
  Pk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#000000",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement(
          "defs",
          null,
          p.createElement(
            "style",
            null,
            ".cls-1,.cls-3{fill:#ffffff;}.cls-2{fill:#ffffff;}.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-4{fill:#ffffff;}"
          )
        ),
        p.createElement("title", null, "Icon_24px_DeployManage_Color"),
        p.createElement(
          "g",
          { "data-name": "Product Icons" },
          p.createElement(
            "g",
            null,
            p.createElement("rect", {
              className: "cls-1",
              x: 10,
              y: 17,
              width: 4,
              height: 4,
            }),
            p.createElement("polygon", {
              className: "cls-2",
              points: "19 10.84 14.66 6.51 13.65 7.52 19 12.85 19 10.84",
            }),
            p.createElement("polygon", {
              className: "cls-3",
              points: "15.67 9.53 13.65 7.52 14.66 6.51 15.67 7.52 15.67 9.53",
            }),
            p.createElement("polygon", {
              className: "cls-4",
              points:
                "10.94 12.24 9.93 11.23 14.66 6.51 15.67 7.52 10.94 12.24",
            }),
            p.createElement("polygon", {
              className: "cls-2",
              points: "10.94 12.24 8.08 9.39 9.1 8.38 11.95 11.23 10.94 12.24",
            }),
            p.createElement("polygon", {
              className: "cls-3",
              points: "10.08 11.38 8.08 9.39 9.1 8.38 10.08 9.36 10.08 11.38",
            }),
            p.createElement("polygon", {
              className: "cls-4",
              points:
                "5.44 13.99 10.08 9.36 9.07 8.35 5 12.41 5 13.99 5.44 13.99",
            }),
            p.createElement("path", {
              className: "cls-2",
              d: "M22,4.05a1.24,1.24,0,0,0-1-1H3a1.24,1.24,0,0,0-1,1V17a1.19,1.19,0,0,0,1,1H21a1.19,1.19,0,0,0,1-1V4.05ZM20,16H4V5H20Z",
            }),
            p.createElement("path", {
              className: "cls-2",
              d: "M8,22c0-.69.31-1,1-1h6c.69,0,1,.31,1,1Z",
            })
          )
        )
      )
    ),
  Lk = p.forwardRef(Pk),
  Ik = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#000000",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement(
          "defs",
          null,
          p.createElement(
            "style",
            null,
            ".cls-1{fill:#ffffff;}.cls-2{fill:#ffffff;}.cls-3{fill:#ffffff;}"
          )
        ),
        p.createElement("title", null, "Icon_24px_CloudAPIs_Color"),
        p.createElement(
          "g",
          { "data-name": "Product Icons" },
          p.createElement("path", {
            className: "cls-1",
            d: "M16.49,12,12,16.49,7.51,12,12,7.51ZM12,14.91,14.91,12,12,9.09,9.09,12Z",
          }),
          p.createElement("polygon", {
            className: "cls-2",
            points: "16.33 15.02 18.98 15.02 22 12 19.35 12 16.33 15.02",
          }),
          p.createElement("polygon", {
            className: "cls-3",
            points: "16.33 8.98 19.35 12 22 12 18.98 8.98 16.33 8.98",
          }),
          p.createElement("polygon", {
            className: "cls-3",
            points: "7.67 8.98 5.02 8.98 2 12 4.65 12 7.67 8.98",
          }),
          p.createElement("polygon", {
            className: "cls-2",
            points: "2 12 5.02 15.02 7.67 15.02 4.65 12 2 12",
          }),
          p.createElement("polygon", {
            className: "cls-3",
            points: "8.98 5.02 8.98 7.67 12 4.65 12 2 8.98 5.02",
          }),
          p.createElement("polygon", {
            className: "cls-2",
            points: "12 2 12 4.65 15.02 7.67 15.02 5.02 12 2",
          }),
          p.createElement("polygon", {
            className: "cls-3",
            points: "8.98 16.33 8.98 18.98 12 22 12 19.35 8.98 16.33",
          }),
          p.createElement("polygon", {
            className: "cls-2",
            points: "12 19.35 12 22 15.02 18.98 15.02 16.33 12 19.35",
          })
        )
      )
    ),
  Dk = p.forwardRef(Ik),
  Nk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        fill: "#ffffff",
        stroke: "#ffffff",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
      p.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement(
        "g",
        { id: "SVGRepo_iconCarrier" },
        p.createElement("title", null, "VIP_2_line"),
        p.createElement(
          "g",
          {
            id: "\\u9875\\u9762-1",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
          },
          p.createElement(
            "g",
            {
              id: "Business",
              transform: "translate(-192.000000, -192.000000)",
            },
            p.createElement(
              "g",
              {
                id: "VIP_2_line",
                transform: "translate(192.000000, 192.000000)",
              },
              p.createElement("path", {
                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                id: "MingCute",
                fillRule: "nonzero",
              }),
              p.createElement("path", {
                d: "M12.9873,5.73973 C13.5921,5.39576 14,4.74552 14,4 C14,2.89543 13.1046,2 12,2 C10.8954,2 10,2.89543 10,4 C10,4.74719 10.4097,5.39868 11.0168,5.74204 L11.0078,5.7603 C10.3521,7.1269 9.44232,9.08472 8.03664,9.81971 C6.88336,10.4227 5.22628,10.1194 3.99634,9.89437 C3.94213,9.11523 3.29291,8.5 2.5,8.5 C1.67157,8.5 1,9.17157 1,10 C1,10.7347 1.52816,11.346 2.22549,11.4749 L5.17264,19.0836 C5.62005,20.2387 6.7314,21 7.97011,21 L16.0299,21 C17.2686,21 18.3799,20.2387 18.8274,19.0836 L21.7745,11.4749 C22.4718,11.346 23,10.7347 23,10 C23,9.17157 22.3284,8.5 21.5,8.5 C20.7223,8.5 20.0828,9.09184 20.0074,9.8497 C18.7483,10.013 17.1251,10.2213 15.9634,9.61383 C14.5859,8.89361 13.6634,7.07075 12.9873,5.73973 Z M12.0254,8.10728 C12.7931,9.35273 13.7136,10.6944 15.0366,11.3862 C16.3643,12.0804 17.9971,12.0451 19.4573,11.9201 L16.9624,18.3612 C16.8132,18.7462 16.4428,19 16.0299,19 L7.97011,19 C7.5572,19 7.18676,18.7462 7.03762,18.3612 L4.57675,12.008 C6.01588,12.1916 7.64394,12.2819 8.96336,11.5921 C10.3405,10.872 11.263,9.42043 12.0254,8.10728 Z",
                id: "\\u5F62\\u72B6",
                fill: "#fff",
              })
            )
          )
        )
      )
    ),
  jk = p.forwardRef(Nk),
  $k = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className:
          "icon icon-tabler icons-tabler-outline icon-tabler-number-13-small",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none",
      }),
      p.createElement("path", { d: "M8 8h1v8" }),
      p.createElement("path", {
        d: "M13 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5",
      })
    ),
  Mk = p.forwardRef($k),
  Fk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: "800px",
        height: "800px",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement("rect", {
        width: 48,
        height: 48,
        fill: "white",
        fillOpacity: 0.01,
      }),
      p.createElement("path", {
        d: "M11 44V15C11 12.7909 12.7909 11 15 11C17.2091 11 19 12.7909 19 15V35L42 40V44",
        stroke: "#ffffff",
        strokeWidth: 4,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      p.createElement("path", {
        d: "M11 25.2501V25.2501C6.90264 23.65 4 19.664 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15C26 19.664 23.0974 23.65 19 25.2501",
        stroke: "#ffffff",
        strokeWidth: 4,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    ),
  Uk = p.forwardRef(Fk),
  d8 = "https://t.me/clients_TRADESIGNAL_support",
  Bk = "clients.TRADESIGNAL@gmail.com",
  p8 = [3, 5, 7, 10],
  h8 = [
    { name: "ChatGPT 4o", key: "chatgpt_4o", img: Tk },
    { name: "TRADESIGNAL AI v1", key: "TRADESIGNAL_ai_v1", img: Ck },
    { name: "VIP Indicator", key: "vip", img: jk },
    { name: "13% SQUAD", key: "13_squad", img: Mk },
    { name: "TRADESIGNAL AI v2", key: "TRADESIGNAL_ai_v2", img: Ak },
    {
      name: "Indicators + ChatGPT 3.5",
      key: "indicators_chatgpt_3.5",
      img: Lk,
    },
    { name: "36Trade AI PLUS", key: "36trade_ai_plus", img: Dk },
    { name: "MANUAL AI", key: "manual", img: Uk },
  ],
  zk = () => {
    const { t: e } = ou("common");
    return b.jsx("div", {
      className: xt.wrapper,
      children: b.jsxs("div", {
        className: xt.container,
        children: [
          b.jsx("div", {
            className: xt.marqueeContainer,
            children: b.jsx(bk, {}),
          }),
          b.jsx("div", {
            className: xt.topBorderContainer,
            children: b.jsxs("div", {
              className: xt.topContainer,
              children: [
                b.jsx(Ev, {}),
                b.jsxs("div", {
                  className: xt.socials,
                  children: [
                    b.jsx(Et, {
                      to: "https://t.me/+rYXlRUG-wkUwMmQy",
                      children: b.jsx(w1, {}),
                    }),
                    b.jsx(Et, { to: `mailto:${Bk}`, children: b.jsx(kk, {}) }),
                  ],
                }),
              ],
            }),
          }),
          b.jsxs("div", {
            className: xt.info,
            children: [
              b.jsx("div", {
                className: xt.infoTop,
                children: b.jsx("div", {
                  className: xt.copyright,
                  children: e("copyright", { year: new Date().getFullYear() }),
                }),
              }),
              b.jsxs("div", {
                className: xt.links,
                children: [
                  b.jsx(Et, {
                    to: "/terms",
                    target: "_blank",
                    children: b.jsx("div", {
                      className: xt.link,
                      children: e("termsAndConditions"),
                    }),
                  }),
                  b.jsx("div", { className: xt.separator, children: "|" }),
                  b.jsx(Et, {
                    to: "/privacy-policy",
                    target: "_blank",
                    children: b.jsx("div", {
                      className: xt.link,
                      children: e("privacyPolicy"),
                    }),
                  }),
                  b.jsx("div", { className: xt.separator, children: "|" }),
                  b.jsx(Et, {
                    to: "/cookie-policy",
                    target: "_blank",
                    children: b.jsx("div", {
                      className: xt.link,
                      children: e("cookiePolicy"),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Vk = () => {
    const e = yr();
    return (
      p.useEffect(() => {
        window.scrollTo({ top: 0 });
      }, [e.pathname]),
      b.jsxs(b.Fragment, {
        children: [b.jsx(ik, {}), b.jsx(Vd, {}), b.jsx(zk, {})],
      })
    );
  },
  Hk = Zs(() => {
    const { lang: e } = zd(),
      { i18n: t } = ou(),
      { store: n } = p.useContext(Oi),
      r = qs(),
      i = yr();
    return (
      p.useEffect(() => {
        if (!e || !["ru", "en", "uk"].includes(e)) {
          const s = t.language;
          t.changeLanguage(s),
            n.setLang(s),
            r(`/${s}${i.pathname}${i.search}`, { replace: !0 });
        } else t.language !== e && (n.setLang(e), t.changeLanguage(e));
        n.setLang(t.language);
      }, [e, t, r, i]),
      null
    );
  }),
  Wk = () => b.jsxs(b.Fragment, { children: [b.jsx(Hk, {}), b.jsx(Vd, {})] }),
  qk = "_wrapper_16p5b_1",
  Kk = "_cross_16p5b_7",
  vg = { wrapper: qk, cross: Kk },
  Gk = ({ title: e, titleId: t, ...n }, r) =>
    p.createElement(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: r,
        "aria-labelledby": t,
        ...n,
      },
      e ? p.createElement("title", { id: t }, e) : null,
      p.createElement(
        "g",
        { clipPath: "url(#clip0_575_13601)" },
        p.createElement(
          "g",
          { filter: "url(#filter0_d_575_13601)" },
          p.createElement("path", {
            d: "M5.85967 34.1397C3.94947 32.2947 2.42582 30.0878 1.37764 27.6478C0.329462 25.2077 -0.222262 22.5833 -0.245339 19.9277C-0.268415 17.2721 0.237619 14.6385 1.24324 12.1806C2.24885 9.72266 3.73392 7.48962 5.61177 5.61177C7.48962 3.73392 9.72266 2.24885 12.1806 1.24324C14.6385 0.237619 17.2721 -0.268415 19.9277 -0.245339C22.5833 -0.222262 25.2077 0.329462 27.6478 1.37764C30.0878 2.42582 32.2947 3.94947 34.1397 5.85967C37.7828 9.63171 39.7987 14.6838 39.7532 19.9277C39.7076 25.1716 37.6042 30.1879 33.896 33.896C30.1879 37.6042 25.1716 39.7076 19.9277 39.7532C14.6838 39.7987 9.63171 37.7828 5.85967 34.1397ZM22.7997 19.9997L28.4597 14.3397L25.6397 11.5197L19.9997 17.1797L14.3397 11.5197L11.5197 14.3397L17.1797 19.9997L11.5197 25.6597L14.3397 28.4797L19.9997 22.8197L25.6597 28.4797L28.4797 25.6597L22.8197 19.9997H22.7997Z",
            fill: "#2B8EF3",
          })
        )
      ),
      p.createElement(
        "defs",
        null,
        p.createElement(
          "filter",
          {
            id: "filter0_d_575_13601",
            x: -20.2461,
            y: -20.2461,
            width: 80,
            height: 80,
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
          },
          p.createElement("feFlood", {
            floodOpacity: 0,
            result: "BackgroundImageFix",
          }),
          p.createElement("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          }),
          p.createElement("feOffset", null),
          p.createElement("feGaussianBlur", { stdDeviation: 10 }),
          p.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
          p.createElement("feColorMatrix", {
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
          }),
          p.createElement("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_575_13601",
          }),
          p.createElement("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_575_13601",
            result: "shape",
          })
        ),
        p.createElement(
          "clipPath",
          { id: "clip0_575_13601" },
          p.createElement("rect", { width: 40, height: 40, fill: "white" })
        )
      )
    ),
  Yk = p.forwardRef(Gk),
  Qk = Zs(() => {
    const { store: e } = p.useContext(Oi),
      t = qs(),
      n = Hd(),
      r = async (o) => {
        o.preventDefault(), await e.logout(), t(n("/"));
      },
      i =
        location.pathname.includes("/enter-id") ||
        location.pathname.includes("/confirm-email");
    return b.jsxs("div", {
      className: vg.wrapper,
      children: [
        b.jsx(Et, {
          to: "/",
          className: vg.cross,
          id: "cross",
          onClick: i ? r : void 0,
          children: b.jsx(Yk, {}),
        }),
        b.jsx(Vd, {}),
      ],
    });
  }),
  Jk = "_loaderContainer_h0rgt_1",
  Xk = "_loaderDots_h0rgt_20",
  Zk = "_dot_h0rgt_28",
  Ko = { loaderContainer: Jk, loaderDots: Xk, dot: Zk },
  et = () =>
    b.jsx("div", {
      className: Ko.loaderContainer,
      children: b.jsxs("div", {
        className: Ko.loaderDots,
        children: [
          b.jsx("span", { className: Ko.dot }),
          b.jsx("span", { className: Ko.dot }),
          b.jsx("span", { className: Ko.dot }),
        ],
      }),
    }),
  eE = p.lazy(() =>
    rt(
      () => import("./index-BSxP9onF.js"),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ])
    )
  ),
  tE = p.lazy(() =>
    rt(
      () => import("./index-BjqnpYd6.js"),
      __vite__mapDeps([19, 10, 11, 12, 13, 2, 3, 4, 5, 14, 7, 6, 17, 20])
    )
  ),
  nE = p.lazy(() =>
    rt(
      () => import("./index-Dj81i5us.js"),
      __vite__mapDeps([21, 17, 4, 5, 22, 23, 13, 2, 3, 14, 24])
    )
  ),
  rE = p.lazy(() =>
    rt(
      () => import("./index-oR3vETIF.js"),
      __vite__mapDeps([
        25, 26, 27, 28, 29, 30, 2, 3, 22, 23, 17, 31, 7, 16, 6, 32,
      ])
    )
  ),
  iE = p.lazy(() =>
    rt(
      () => import("./index-DhQQOVCZ.js"),
      __vite__mapDeps([
        33, 26, 27, 31, 2, 3, 28, 29, 30, 22, 23, 7, 16, 6, 17, 34,
      ])
    )
  ),
  oE = p.lazy(() =>
    rt(
      () => import("./index-Bz9wfyib.js"),
      __vite__mapDeps([35, 26, 27, 31, 2, 3, 36])
    )
  ),
  sE = p.lazy(() =>
    rt(
      () => import("./index-DSb2W5xF.js"),
      __vite__mapDeps([37, 26, 27, 12, 2, 3, 38, 15, 39, 16, 6, 40, 41])
    )
  ),
  aE = p.lazy(() =>
    rt(() => import("./index-DczBZ0pR.js"), __vite__mapDeps([42, 2, 3, 43]))
  ),
  lE = p.lazy(() =>
    rt(() => import("./index-LNfzLU1r.js"), __vite__mapDeps([44, 45, 2, 3, 46]))
  ),
  uE = p.lazy(() =>
    rt(
      () => import("./index-DLMXvuTP.js"),
      __vite__mapDeps([47, 26, 27, 2, 3, 22, 23, 48])
    )
  ),
  cE = p.lazy(() =>
    rt(
      () => import("./index-B8D_fJdp.js"),
      __vite__mapDeps([49, 45, 50, 1, 51, 4, 5, 2, 3, 52])
    )
  ),
  fE = p.lazy(() =>
    rt(
      () => import("./index-DGf8g4Sc.js"),
      __vite__mapDeps([
        53, 45, 50, 1, 4, 5, 2, 3, 38, 15, 39, 8, 9, 40, 54, 55, 7, 56,
      ])
    )
  ),
  dE = p.lazy(() =>
    rt(
      () => import("./index-DzTJ0usA.js"),
      __vite__mapDeps([57, 50, 4, 5, 54, 55, 38, 15, 39, 2, 3, 51, 58])
    )
  ),
  pE = p.lazy(() => rt(() => import("./index-DO1DYDFu.js"), [])),
  hE = p.lazy(() => rt(() => import("./index-Wbwmu4bI.js"), [])),
  gE = p.lazy(() => rt(() => import("./index-EHMEf9eN.js"), [])),
  mE = p.lazy(() => rt(() => import("./index-BTw4VewM.js"), [])),
  yE = p.lazy(() =>
    rt(
      () => import("./index-CW7BNmWA.js").then((e) => e.i),
      __vite__mapDeps([59, 29, 13, 2, 3, 4, 5, 14, 17, 60])
    )
  ),
  vE = p.lazy(() =>
    rt(
      () => import("./index-BHdHaLp1.js"),
      __vite__mapDeps([61, 22, 23, 4, 5, 38, 15, 39, 2, 3, 17, 62])
    )
  ),
  wE = () => localStorage.getItem("i18nextLng") || "uk",
  SE = o_([
    {
      path: "/:lang",
      element: b.jsx(Wk, {}),
      children: [
        {
          element: b.jsx(Qk, {}),
          children: [
            {
              path: "login",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(rE, {}),
              }),
            },
            {
              path: "register",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(iE, {}),
              }),
            },
            {
              path: "enter-id",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(sE, {}),
              }),
            },
            {
              path: "forgot-password",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(oE, {}),
              }),
            },
            {
              path: "reset-password",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(uE, {}),
              }),
            },
            {
              path: "confirm-email",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(lE, {}),
              }),
            },
          ],
        },
        {
          element: b.jsx(Vk, {}),
          children: [
            {
              path: "",
              index: !0,
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(eE, {}),
              }),
            },
            {
              path: "about-us",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(tE, {}),
              }),
            },
            {
              path: "signal",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(fE, {}),
              }),
            },
            {
              path: "account",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(cE, {}),
              }),
            },
            {
              path: "history",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(dE, {}),
              }),
            },
            {
              path: "instruction",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(yE, {}),
              }),
            },
            {
              path: "wiki",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(nE, {}),
              }),
            },
            {
              path: "wiki/:slug",
              element: b.jsx(p.Suspense, {
                fallback: b.jsx(et, {}),
                children: b.jsx(vE, {}),
              }),
            },
          ],
        },
        {
          path: "activated-email",
          element: b.jsx(p.Suspense, {
            fallback: b.jsx(et, {}),
            children: b.jsx(aE, {}),
          }),
        },
        {
          path: "privacy-policy",
          element: b.jsx(p.Suspense, {
            fallback: b.jsx(et, {}),
            children: b.jsx(pE, {}),
          }),
        },
        {
          path: "terms",
          element: b.jsx(p.Suspense, {
            fallback: b.jsx(et, {}),
            children: b.jsx(hE, {}),
          }),
        },
        {
          path: "cookie-policy",
          element: b.jsx(p.Suspense, {
            fallback: b.jsx(et, {}),
            children: b.jsx(gE, {}),
          }),
        },
        {
          path: "*",
          element: b.jsx(p.Suspense, {
            fallback: b.jsx(et, {}),
            children: b.jsx(mE, {}),
          }),
        },
      ],
    },
    { path: "/", element: b.jsx(JS, { to: `/${wE()}`, replace: !0 }) },
  ]),
  { slice: _E, forEach: bE } = [];
function xE(e) {
  return (
    bE.call(_E.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
const wg = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  kE = (e, t, n) => {
    const r = n || {};
    r.path = r.path || "/";
    const i = encodeURIComponent(t);
    let o = `${e}=${i}`;
    if (r.maxAge > 0) {
      const s = r.maxAge - 0;
      if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
      o += `; Max-Age=${Math.floor(s)}`;
    }
    if (r.domain) {
      if (!wg.test(r.domain)) throw new TypeError("option domain is invalid");
      o += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!wg.test(r.path)) throw new TypeError("option path is invalid");
      o += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      o += `; Expires=${r.expires.toUTCString()}`;
    }
    if (
      (r.httpOnly && (o += "; HttpOnly"),
      r.secure && (o += "; Secure"),
      r.sameSite)
    )
      switch (
        typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
          o += "; SameSite=Strict";
          break;
        case "lax":
          o += "; SameSite=Lax";
          break;
        case "strict":
          o += "; SameSite=Strict";
          break;
        case "none":
          o += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return o;
  },
  Sg = {
    create(e, t, n, r) {
      let i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      n &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)),
        r && (i.domain = r),
        (document.cookie = kE(e, encodeURIComponent(t), i));
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(";");
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
      }
      return null;
    },
    remove(e) {
      this.create(e, "", -1);
    },
  };
var EE = {
    name: "cookie",
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < "u") return Sg.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: i,
        cookieOptions: o,
      } = t;
      n && typeof document < "u" && Sg.create(n, e, r, i, o);
    },
  },
  TE = {
    name: "querystring",
    lookup(e) {
      var r;
      let { lookupQuerystring: t } = e,
        n;
      if (typeof window < "u") {
        let { search: i } = window.location;
        !window.location.search &&
          ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 &&
          (i = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        const s = i.substring(1).split("&");
        for (let a = 0; a < s.length; a++) {
          const l = s[a].indexOf("=");
          l > 0 && s[a].substring(0, l) === t && (n = s[a].substring(l + 1));
        }
      }
      return n;
    },
  };
let Go = null;
const _g = () => {
  if (Go !== null) return Go;
  try {
    Go = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    Go = !1;
  }
  return Go;
};
var OE = {
  name: "localStorage",
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && _g()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t;
    n && _g() && window.localStorage.setItem(n, e);
  },
};
let Yo = null;
const bg = () => {
  if (Yo !== null) return Yo;
  try {
    Yo = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"),
      window.sessionStorage.removeItem(e);
  } catch {
    Yo = !1;
  }
  return Yo;
};
var CE = {
    name: "sessionStorage",
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && bg()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && bg() && window.sessionStorage.setItem(n, e);
    },
  },
  RE = {
    name: "navigator",
    lookup(e) {
      const t = [];
      if (typeof navigator < "u") {
        const { languages: n, userLanguage: r, language: i } = navigator;
        if (n) for (let o = 0; o < n.length; o++) t.push(n[o]);
        r && t.push(r), i && t.push(i);
      }
      return t.length > 0 ? t : void 0;
    },
  },
  AE = {
    name: "htmlTag",
    lookup(e) {
      let { htmlTag: t } = e,
        n;
      const r = t || (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  PE = {
    name: "path",
    lookup(e) {
      var i;
      let { lookupFromPathIndex: t } = e;
      if (typeof window > "u") return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n)
        ? (i = n[typeof t == "number" ? t : 0]) == null
          ? void 0
          : i.replace("/", "")
        : void 0;
    },
  },
  LE = {
    name: "subdomain",
    lookup(e) {
      var i, o;
      let { lookupFromSubdomainIndex: t } = e;
      const n = typeof t == "number" ? t + 1 : 1,
        r =
          typeof window < "u" &&
          ((o = (i = window.location) == null ? void 0 : i.hostname) == null
            ? void 0
            : o.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
              ));
      if (r) return r[n];
    },
  };
function IE() {
  return {
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
    ],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: (e) => e,
  };
}
class _1 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = "languageDetector"), (this.detectors = {}), this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = t || { languageUtils: {} }),
      (this.options = xE(n, this.options || {}, IE())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(EE),
      this.addDetector(TE),
      this.addDetector(OE),
      this.addDetector(CE),
      this.addDetector(RE),
      this.addDetector(AE),
      this.addDetector(PE),
      this.addDetector(LE);
  }
  addDetector(t) {
    return (this.detectors[t.name] = t), this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return (
      t.forEach((r) => {
        if (this.detectors[r]) {
          let i = this.detectors[r].lookup(this.options);
          i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
        }
      }),
      (n = n.map((r) => this.options.convertDetectedLanguage(r))),
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
        ? n[0]
        : null
    );
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches),
      n &&
        ((this.options.excludeCacheFor &&
          this.options.excludeCacheFor.indexOf(t) > -1) ||
          n.forEach((r) => {
            this.detectors[r] &&
              this.detectors[r].cacheUserLanguage(t, this.options);
          }));
  }
}
_1.type = "languageDetector";
const DE = {
    title: "TRADESIGNAL | Головна",
    pageTitle:
      "Безкоштовні сигнали для бінарних опціонів Pocket Option — TRADESIGNAL",
    description:
      "Отримуй найкращі сигнали для бінарних опціонів безкоштовно. Просто зареєструйся у брокера та почни заробляти з нами.",
    keywords: ["сигнали для бінарних опціонів", "pocket option сигнали"],
  },
  NE = {
    description:
      "Сучасні інструменти відкриють шлях до успіху. Ми створені для того, щоб зробити трейдинг доступним, зрозумілим і вигідним для всіх. Отримуйте безкоштовні сигнали для бінарних опціонів за допомогою нашої платформи.",
  },
  jE = {
    title: "Що ми пропонуємо?",
    cards: [
      {
        title: "Інтуїтивний інтерфейс",
        text: "Зручний інтерфейс для легкого доступу та швидких операцій з будь-якого пристрою.",
      },
      {
        title: "Швидкий старт",
        text: "Миттєво почніть торгівлю — реєстрація займає кілька хвилин, і ви готові до ринку",
      },
      {
        title: "Точні торгові сигнали",
        text: "Отримуйте актуальні сигнали для обґрунтованих рішень у реальному часі.",
      },
    ],
  },
  $E = {
    title: "Як це працює?",
    cards: [
      {
        title: "Реєстрація",
        text: "Зареєструйтесь на нашій платформі та почніть використовувати всі її можливості.",
      },
      {
        title: "Поповнення рахунку",
        text: "Використовуйте надійні методи для швидкого поповнення рахунку на брокерській платформі.",
      },
      {
        title: "Починайте торгівлю",
        text: "Скористайтеся потужними інструментами нашої платформи для успішної торгівлі.",
      },
    ],
  },
  ME = {
    title: "Інструменти успіху",
    cards: [
      {
        title: "Аналітичні графіки",
        text: "Дані створюють тренди, а графіки - їхні історії. Уявіть інструмент, що розкриває потенціал ринку через зручну та зрозумілу візуалізацію, дозволяючи вам діяти впевнено та швидко…",
      },
      {
        title: "торгові сигнали",
        text: "Чіткі сигнали у вирі ринкових змін. Уявіть джерело, що допомагає приймати важливі рішення, спираючись на перевірені дані, а не на інтуїцію. Знайдіть ідеальні моменти для дій.",
      },
      {
        title: "сучасний підхід",
        text: "Штучний інтелект змінює правила гри. Уявіть систему, що аналізує ринок у реальному часі, розпізнає приховані закономірності та надає точні торгові сигнали. Менше здогадок – більше обґрунтованих рішень.",
      },
    ],
  },
  FE = {
    title: "FaQ",
    list: [
      {
        title: "Як почати торгівлю на вашій платформі?",
        description:
          "Щоб розпочати торгівлю, зареєструйте акаунт і поповніть баланс на брокері Pocket Option. Після цього ви готові зробити свій перший крок у трейдингу.",
      },
      {
        title: "Чи потрібно платити за сигнали?",
        description:
          "Ні! Сигнали від TRADESIGNAL абсолютно безкоштовні, але для отримання доступу потрібно бути нашим рефералом на Pocket Option та поповнити рахунок на $10.",
      },
      {
        title: "Чи потрібен досвід для торгівлі?",
        description:
          "Наша платформа розроблена як для початківців, так і для професіоналів, тому почати може кожен.",
      },
      {
        title: "Що таке торгові сигнали і як ними користуватися?",
        description:
          "Торгові сигнали — це рекомендації, що допомагають приймати рішення про купівлю чи продаж активів на основі аналізу ринку. Використовуйте їх для підвищення точності угод.",
      },
      {
        title: "Які методи поповнення рахунку доступні?",
        description:
          "Поповнення рахунку здійснюється на стороні платформи Pocket Option.",
      },
      {
        title: "Чи є підтримка 24/7?",
        description:
          "Так, якщо у вас виникнуть запитання, ви можете звернутися до нашої команди через Telegram.",
      },
    ],
  },
  UE = {
    title: "Будьте в курсі всіх трендів трейдингу!",
    description:
      "Реєструйтесь та отримуйте доступ до аналітики, ексклюзивних стратегій.",
  },
  BE = {
    helmet: DE,
    hero: NE,
    proposal: jE,
    howItWork: $E,
    tools: ME,
    questions: FE,
    cta: UE,
  },
  zE = "Реєстрація",
  VE = "Авторизація",
  HE = "Copyright © {{year}} TRADESIGNAL | All Rights Reserved ",
  WE = "Умови використання",
  qE = "Політика конфіденційності",
  KE = "Політика файлів cookie",
  GE = "Ми використовуємо файли cookie",
  YE =
    "Продовжуючи використовувати сайт ви автоматично погоджуєтесь з політикою сайту та файлів cookie.",
  QE = "Прийняти",
  JE = "Отримати сигнал",
  XE = "Закрити",
  ZE = "або",
  eT = "Підтримка",
  tT = {
    online: "Онлайн відвідувачі",
    plus: "Успішні сигнали",
    minus: "Невдалі сигнали",
  },
  nT = {
    aboutUs: "Про нас",
    history: "Історія угод",
    instruction: "Інструкція",
    signal: "Сигнал",
    account: "Мій кабинет",
    wiki: "Вікі",
  },
  rT = {
    register: zE,
    authorization: VE,
    copyright: HE,
    termsAndConditions: WE,
    privacyPolicy: qE,
    cookiePolicy: KE,
    cookieNoticeMessage: GE,
    cookieAgreement: YE,
    cookieAccept: QE,
    getSignalBtn: JE,
    close: XE,
    or: ZE,
    supportLink: eT,
    stats: tT,
    navMenu: nT,
  },
  iT = {
    getSignal: "Отримати новий сигнал",
    getSignalLoading: "Пошук сигналу...",
    passability: "Прохідність {{value}}%",
    anotherSignal: "Інший сигнал",
    back: "Повернутися назад",
    getSignalMartingale: "Догнати результат",
    toMain: "На головну",
    resetSignal: "Скинути сигнал",
    searchSignalText: "Пошук сигналу",
    pendingPriceText: "Бот заходить в угоду...",
    timeTo: "Час на угоду до",
    resultAfter: "Результат через",
    buy: "Вгору",
    sell: "Вниз",
    signalSetting: "Налаштування сигналу",
    signalInfo: "Інформація",
    otcWarning:
      "Якщо валютна пара на брокері відображається як OTC, натисніть «Скинути сигнал», щоб отримати новий.",
    vipFreeUntil: "VIP-алгоритм доступний до:",
  },
  oT = { title: "Пара" },
  sT = {
    helmet: {
      title: "TRADESIGNAL | Інструкція",
      pageTitle:
        "Інструкція з отримання безкоштовних торгових сигналів на TRADESIGNAL",
      description:
        "Ми підготували для вас детальне відео, яке крок за кроком пояснить, як користуватися нашим сайтом і ефективно використовувати всі його функції.",
      keywords: [
        "інструкція сигнали",
        "як отримати сигнали",
        "безкоштовні сигнали",
      ],
    },
  },
  aT = {
    chatgpt_4o:
      "Передова модель штучного інтелекту від OpenAI, яка використовує глибоке навчання для аналізу ринкових даних. Вона обробляє величезну кількість інформації в реальному часі, виявляючи потенційні сигнали з високою точністю. Алгоритм враховує не лише технічні дані, а й фундаментальні фактори, новини та поведінковий аналіз ринку.",
    "TRADESIGNAL_ai_v1":
      "Перша версія нашого власного алгоритму, розробленого на основі машинного навчання. Він аналізує історичні тренди, виявляє закономірності у ринкових рухах і використовує їх для прогнозування майбутніх змін. Алгоритм навчений на даних за кілька років і здатний знаходити сигнали на основі класичних технічних індикаторів і статистичного аналізу.",
    vip: "VIP-алгоритм — це ексклюзивна модель аналізу, розроблена для професійних трейдерів, які прагнуть максимальної точності та ефективності. Цей алгоритм використовує передові технології машинного навчання, аналізує величезні обсяги даних у реальному часі та враховує унікальні ринкові патерни. VIP-алгоритм інтегрує фундаментальний аналіз, технічні індикатори та поведінкові дані, щоб надавати сигнали з високим рівнем надійності. Зверніть увагу: він доступний лише користувачам із балансом від $1000.",
    "13_squad":
      "13 Squad — це унікальний аналітичний індикатор, створений у співпраці з закритою спільнотою трейдерів. Він враховує авторські патерни, сигнали від досвідчених учасників та нестандартні підходи до ринкового аналізу. Хоча індикатор доступний для всіх користувачів, найвищу ефективність він демонструє у зв’язці з рекомендаціями та стратегіями спільноти. Приєднатися до спільноти можна через Telegram-бота: <0>@squad_13_bot</0>.",
    "TRADESIGNAL_ai_v2":
      "Покращена версія TRADESIGNAL AI, у якій додані складніші моделі машинного навчання. Вона використовує додаткові параметри ринку, такі як обсяг торгів, кореляції між активами та часові патерни. Покращена оптимізація алгоритмів дозволяє підвищити точність прогнозів, зменшити кількість хибних сигналів і враховувати більше ринкових умов при аналізі.",
    "indicators_chatgpt_3.5":
      "Комбінований метод аналізу, що використовує популярні технічні індикатори (наприклад, RSI, MACD, Bollinger Bands) у поєднанні зі штучним інтелектом ChatGPT 3.5. AI аналізує показники індикаторів, визначає можливі точки входу і виходу, а також інтерпретує дані для отримання найбільш ймовірних сценаріїв розвитку ринку. Метод підходить для коротко- та середньострокової торгівлі.",
    "36trade_ai_plus":
      "Ексклюзивна система аналізу, що поєднує машинне навчання, технічні індикатори та авторські алгоритми прогнозування трендів. 36Trade AI Plus враховує не лише класичні методи аналізу, а й дані про активність великих гравців, ліквідність ринку та структуру ордерів. Це дозволяє формувати найбільш точні прогнози, знижуючи ризик і підвищуючи ефективність торгівлі.",
    manual:
      "Метод Manual надає користувачу можливість самостійно обирати валютну пару для аналізу. Штучний інтелект підключається до процесу та зосереджується саме на тому активі, який вказав трейдер. Такий підхід дозволяє гнучко адаптувати аналіз під індивідуальні стратегії та вподобання. На відміну від повністю автоматичних алгоритмів, тут ключова роль належить вибору користувача, а AI забезпечує глибоку обробку даних по вибраному інструменту, виявляючи можливі сигнали та сценарії розвитку ринку.",
  },
  lT = "Інструкція з отримання сигналів",
  uT =
    "Все, що потрібно для отримання наших безкоштовних торгових сигналів, це пройти кілька простих кроків. Реєстрація на платформі Pocket Option, поповнення рахунку на суму від $10 та підключення до нашого сигналу. У нашій інструкції ми детально покажемо, як це зробити — швидко і без зайвих питань.",
  cT = { result: "Результат", open: "Ціна відкриття", close: "Ціна закриття" },
  fT = [
    "Ризикуй не більше 2% депозиту на одну угоду – захищай свій капітал.",
    "Тренд – твій союзник! Торгуй за напрямком ринку, а не проти нього.",
    "Стоп-лосс – твій рятувальний круг. Завжди став обмеження втрат.",
    "Не пересиджуй збиткові угоди. Визнай помилку і закрий позицію.",
    "Торгівля – це гра ймовірностей. Жодна стратегія не дає 100% успіху.",
    "Контролюй емоції. Паніка та жадібність руйнують рахунок.",
    "Веди торговий журнал. Аналізуй свої помилки та успіхи.",
    "Стеж за економічним календарем. Важливі новини впливають на ринок.",
    "Не намагайся відігратися після втрати. Помста ринку – шлях до зливу.",
    "Регулярно вдосконалюй свою стратегію. Ринок змінюється – змінюйся і ти.",
    "Менше угод – більше прибутку. Фільтруй ринок, не лови кожен сигнал.",
    "Головна зброя трейдера – терпіння. Не поспішай, чекай кращої можливості.",
    "Ринок не винен у твоїх збитках. Відповідальність завжди на тобі.",
    "Виходь з угоди так само логічно, як і входиш. Емоції тут не місце.",
    "Тестуй стратегію на демо перед реальним рахунком. Експерименти коштують грошей.",
    "Профіт любить дисципліну. Слідуй правилам, а не емоціям.",
    "Коли сумніваєшся – не входь у ринок. Очікування краще за невпевнений трейд.",
    "Головна мета – вижити в трейдингу, а не зірвати куш. Тримай ризики під контролем.",
    "Фінансові ринки завжди праві. А твоя думка – лише гіпотеза.",
    "Навчання – безперервний процес. Ринок змінюється, вчися разом з ним.",
  ],
  dT = {
    title: "Поширені запитання",
    description: "Все, що вам потрібно знати для успішного старту",
    card1Title: "Як розпочати торгівлю на вашій платформі?",
    card1Description:
      "Щоб розпочати, зареєструйте акаунт, поповніть свій рахунок та виберіть інструменти для торгівлі. Після цього ви готові до перших угод.",
    card2Title: "Чи потрібно мати досвід для торгівлі?",
    card2Description:
      "Ні, наша платформа підходить як для новачків, так і для досвідчених трейдерів.",
    card3Title: "Що таке торгові сигнали і як ними користуватись?",
    card3Description:
      "Торгові сигнали — це рекомендації щодо покупки або продажу активів на основі аналізу ринку. Ви можете використовувати їх для прийняття обґрунтованих рішень при торгівлі.",
    card4Title: "Які методи поповнення рахунку доступні?",
    card4Description:
      "Поповнення рахунку відбувається на стороні платформи Pocket Option.",
    card5Title: "Чи є підтримка 24/7?",
    card5Description:
      "Так, якщо у вас будуть виникати питання, ви можете звернутись до нашої команди через телеграм -",
  },
  pT = "На данний момент сигналів немає, спробуйте ще раз через хвилину!",
  hT = "Наступний сигнал через:",
  gT = {
    title: "Аналітика",
    techAnalysisBuyTitle: "Технічний аналіз на покупку",
    techAnalysisSellTitle: "Технічний аналіз на продаж",
    movingAverages: "Середні значення",
    trendPower: "Сила тренда",
    movePotential: "Потенціал руху",
    volumeAnalysisBuyTitle: "Об'ємний аналіз на покупку",
    volumeAnalysisSellTitle: "Об'ємний аналіз на продаж",
    sellerStrength: "Сила продавця",
    volumeProfile: "Об'ємний профіль",
    crowdSentiment: "Настрої натовпу",
    topSecret: "Поки що дуже секретна інформація",
  },
  mT = {
    title: "Ринки зараз відпочивають 💤",
    workingTimeText:
      "Ми працюємо лише з понеділка по п'ятницю з {{from}}:00 - {{to}}:00, тож заходьте в робочі дні, і ми допоможемо підкорити фінансові вершини! 🚀",
  },
  yT = {
    title: "Упс!",
    text: "На рахунку недостатньо коштів для сигналів. 💳 Мінімальна торгова сума - ${{minBalance}}. Поповніть баланс 💸 — і вперед до успіху! 🚀",
    currentBalance: "Ваш поточний баланс",
    checkBalanceBtn: "Перевірити баланс",
    checkBalanceBtnLoading: "Перевіряємо баланс...",
    instructionBtn: "Як поповнити баланс",
    loadingText:
      "Відбувається перевірка вашого балансу на брокері Pocket Option. В залежності від навантаження, перевірка може тривати від декількох секунд до години. Дякуємо за ваше терпіння!",
    checkingError:
      "На жаль, ваш баланс менше ${{minBalance}}, якщо це не так, спробуйте зробити перевірку пізніше.",
    checkingSuccess: "Ваш баланс ${{balance}} підтверджено!",
    noTraderId:
      "Схоже що ми не можемо знайти ваше ID, перезавантажте сторінку та спробуйте ще раз!",
    vipBalanceCheck:
      "Щоб використовувати цей індикатор, ваш баланс має перевищувати $1000. Ваш поточний баланс — ${{balance}}.",
    faq: {
      title: "Відповідаємо на ваші питання",
      info: {
        title: "Звідки у вас ця інформація?",
        modalText1:
          "Ми співпрацюємо з брокером Pocket Option у рамках реферальної програми. Відповідно до наших домовленостей, брокер виплачує нам відсоток від вашого торгового обороту раз на рік. Хочемо підкреслити, що з вас не стягуються жодні додаткові платежі чи комісії — усі умови стосуються виключно нашої угоди з брокером.",
        modalText2:
          "Якщо ваш баланс дорівнює нулю, ми не отримуємо жодного прибутку від вашої активності. Саме з цієї причини ми не можемо надати доступ до нашого ресурсу, оскільки наш дохід безпосередньо залежить від вашого обороту.",
        modalText3:
          "Додатково хочемо зазначити, що право на доступ до інформації про ваш баланс надано нам самим брокером. Це необхідно для забезпечення прозорості наших відносин і виконання умов реферальної програми.",
        modalText4:
          "Якщо у вас виникнуть додаткові запитання, ми завжди готові відповісти й пояснити всі деталі!",
      },
      balance: {
        title: "Сайт не бачить баланс?",
        attention: "Зверніть увагу:",
        modalText1:
          "якщо ви щойно поповнили баланс, але сайт все ще повідомляє про недостатність коштів, будь ласка, зачекайте кілька хвилин.",
        modalText2:
          "Нам потрібен час для отримання актуальної інформації про ваш баланс від брокера. Також зверніть увагу, що бонусні кошти не враховуються як частина доступного балансу.",
      },
    },
  },
  vT = {
    hero: iT,
    currencySelector: oT,
    instruction: sT,
    analysis_methods: aT,
    instructionTitle: lT,
    instructionSubtitle: uT,
    result: cT,
    tradingTips: fT,
    questions: dT,
    getSignalError: pT,
    automaticSignalText: hT,
    statistics: gT,
    workingTime: mT,
    checkBalance: yT,
  },
  wT = "Електронна пошта",
  ST = "Пароль",
  _T = "Повторіть пароль",
  bT = "Реєстрація",
  xT = "Реєстрація в системі TRADESIGNAL",
  kT = "Вхід",
  ET = "Вхід в систему TRADESIGNAL",
  TT = "Забули пароль?",
  OT = "Оновлення паролю",
  CT = "назад",
  RT = "Відправити запит",
  AT = "Введіть свій Email",
  PT =
    "Щоб оновити пароль, введіть свій Email, який міг використовуватись у системі",
  LT =
    "Ми надіслали лист на вашу електронну адресу. Перевірте пошту та натисніть на посилання в листі, щоб скинути пароль до аккаунту.",
  IT = "Ви зможете повторно надіслати лист через:",
  DT = "Майже готово!",
  NT =
    "Для завершення реєстрації та отримання сигналів зареєструйте акаунт за посиланням нижче та надішліть свій ID",
  jT = "Реєстрація на Pocket Option",
  $T = "Де знайти ID?",
  MT = "Важливо!",
  FT =
    "Якщо у вас вже є акаунт, спочатку вийдіть із нього (або видаліть), а потім зареєструйтеся за цим посиланням. Інакше ми не отримаємо ваш ID.",
  UT = "Введіть свій ID Акаунта",
  BT = "Підтвердьте, що ви не робот",
  zT = "Вже маєте обліковий запис?",
  VT = "Не маєте ще акаунта?",
  HT = "Введіть новий пароль",
  WT = "Встановити пароль",
  qT =
    "Пароль оновлено успішно, для продовження вам потрібно знову увійти в акаунт",
  KT = "Повернутись до входу",
  GT = "Або",
  YT = "Створити обліковий запиc",
  QT = "Please verify that you are not a robot",
  JT = "Введіть адресу елетронної пошти",
  XT =
    "Пароль має містити щонайменше 8 символів, включати хоча б одну малу літеру, одну велику літеру, одну цифру та один спеціальний символ",
  ZT = "Пароль введено неправильно",
  e4 = "Введіть правильний ID",
  t4 = {
    email: wT,
    password: ST,
    repeatPassword: _T,
    registration: bT,
    registrationDescription: xT,
    login: kT,
    loginDescription: ET,
    forgotPassword: TT,
    updatePasswordTitle: OT,
    back: CT,
    forgotPasswordButton: RT,
    forgotPasswordTitle: AT,
    forgotPasswordSubtitle: PT,
    forgotPasswordText: LT,
    forgotPasswordremainigText: IT,
    almostDone: DT,
    almostDoneDescription: NT,
    getRegister: jT,
    findAnId: $T,
    warningWord: MT,
    registerWarningText: FT,
    enterAccountId: UT,
    notARobotError: BT,
    alreadyHaveAnAccount: zT,
    dontHaveAnAccountYet: VT,
    newPassword: HT,
    newPasswordButton: WT,
    resetPasswordSuccessText: qT,
    backToLogin: KT,
    or: GT,
    createAnAccount: YT,
    pleaseVerify: QT,
    enterEmailAddress: JT,
    enterValidPassword: XT,
    incorrectlyPassword: ZT,
    enterId: e4,
  },
  n4 = "Підтвердіть свою електронну пошту",
  r4 = "Щоб увійти, активуйте свій акаунт через email",
  i4 =
    "Ми надіслали лист на вашу електронну адресу. Перевірте пошту та натисніть на посилання в листі, щоб активувати свій акаунт. Якщо не можете знайти лист, перевірте вкладку спам.",
  o4 = "Відправити лист знову",
  s4 = "Ви зможете повторно надіслати лист через:",
  a4 = "Лист надіслано повторно!",
  l4 = {
    title: "Вашу пошту активовано!",
    subtitle: "Залишилось ще трошки :)",
    button: "До наступного кроку",
  },
  u4 = {
    title: n4,
    subtitle: r4,
    text: i4,
    button: o4,
    remainigText: s4,
    sendText: a4,
    activated: l4,
  },
  c4 = "Особиста інформація",
  f4 = "Безпека",
  d4 = "Для підвищення безпеки оновити пароль можна тільки через пошту",
  p4 = "Змінити пароль",
  h4 = "Лист для зміни паролю надіслано",
  g4 = {
    privateInfo: c4,
    security: f4,
    passwordText: d4,
    resetPasswordBtn: p4,
    sendText: h4,
  },
  m4 =
    "Щоб отримати ваш ID, потрібно зареєструватися у брокера. Після реєстрації ви зможете знайти свій ID у особистому кабінеті",
  y4 = `Ми співпрацюємо з брокером за реферальною системою, щоб надавати сигнали безкоштовно для користувачів.
Наш дохід формується за рахунок реферальної програми брокера Pocket Option, який виплачує нам 2% від річного обороту успішних угод користувачів.
При цьому користувачі нічого не втрачають — комісія нараховується зі сторони брокера, а не з коштів користувачів. Такий підхід дозволяє нам зберігати сервіс безкоштовним та підтримувати його якість на високому рівні.`,
  v4 =
    "Якщо Ви вже маєте акаунт на брокері Pocket Option без реферальної системи - Вам потрібно створити новий за нашим посиланням, інакше Ви не зможете користуватись цим сервісом.",
  w4 = "Де знайти ID?",
  S4 = "Навіщо вам мій ID?",
  _4 = "В мене вже є акаунт на брокері",
  b4 = {
    whereIsId: m4,
    idDescription: y4,
    alreadyHaveAccount: v4,
    whereIsIdText: w4,
    idDescriptionText: S4,
    alreadyHaveAccountText: _4,
  },
  x4 = "Ваш ID перевіряється",
  k4 =
    "Ми перевіряємо Вашу інформацію. Це може зайняти кілька хвилин. Дякуємо за Ваше терпіння!",
  E4 = "Поки ви чекаєте, можете пограти в гру!",
  T4 = "Ваше айді не знайдено",
  O4 = "Якщо ви впевнені в правильності айді - спробуйте ще раз.",
  C4 =
    "Ваше айді підтверджено! За пару секунд вас буде направлено на сторінку сигналів.",
  R4 = "Назад",
  A4 = "Вас вибило з аккаунту...",
  P4 = "Повторіть вхід та спробуйте ще раз!",
  L4 = "Увійти",
  I4 = {
    title: x4,
    subtitle: k4,
    waitingGameText: E4,
    errorTitle: T4,
    errorSubtitle: O4,
    successMessage: C4,
    backBtn: R4,
    unauthorizedErrorTitle: A4,
    unauthorizedErrorSubtitle: P4,
    unauthorizedErrorBtn: L4,
  },
  D4 = {
    title: "Історія угод",
    cards: {
      total: "Всього сигналів",
      win: "Успішні сигнали",
      neutral: "Нейтральні сигнали",
      loss: "Неуспішні сигнали",
    },
    recommendations: {
      infoBtn: "Погана статистика?",
      disclaimerText:
        "У разі, якщо негативних сигналів буде більше, ніж позитивних, рекомендуємо обрати інший час для торгівлі.",
      list: {
        title: "Рекомендації",
        listContent: [
          "Перевіряйте економічний календар.",
          "Аналізуйте ринок і дотримуйтесь тренду.",
          "Використовуйте ризик-менеджмент.",
          "Уникайте торгівлі під час нестабільності.",
          "Проводьте аналіз своїх угод для покращення стратегії.",
        ],
        comingSoon: "Інструкції до всіх пунктів зʼявляться скоро.",
      },
    },
  },
  N4 = {
    title: "Cтатистика",
    filtersTitle: "Фільтри",
    resetBtn: "Скинути",
    tableHead: {
      symbol: "Валютна пара",
      date: "Дата",
      aiModel: "ШІ",
      time: "Час",
      duration: "Тривалість",
      result: "Результат",
    },
    tableBody: {
      2: "хвилини",
      3: "хвилини",
      5: "хвилин",
      7: "хвилин",
      10: "хвилин",
      noDataRow: "Ви ще не отримували сигнали",
      scrollDown: "Листайте вниз щоб побачити більше",
    },
  },
  j4 = { stats: D4, history: N4 },
  $4 = {
    title: "TRADESIGNAL | Про нас",
    pageTitle: "TRADESIGNAL — хто ми і як допомагаємо заробляти",
    description:
      "Дізнайтесь більше про команду TRADESIGNAL та нашу місію надавати безкоштовні торгові сигнали.",
    keywords: ["TRADESIGNAL", "сигнали бінарні опціони"],
  },
  M4 = "Ми аналізуємо",
  F4 = "Створюємо стратегії",
  U4 = "Досягаємо успіху",
  B4 = {
    title: "Хто ми?",
    text1:
      "Ми змінюємо трейдинг, роблячи його простим, зрозумілим і доступним. Ви ставите цілі, а ми забезпечуємо інструменти, які ведуть до успіху.",
    text2:
      "Технології та аналітика працюють на вас. Ми створюємо рішення, які знижують ризики та максимізують прибуток у кожній угоді.",
    text3:
      "Трейдинг – це ваша історія, і ми робимо її яскравішою. Зручний інтерфейс, передова аналітика та повна підтримка на кожному етапі – все це допомагає вам досягати вершин.",
  },
  z4 = {
    title: "Наша команда",
    members: [
      { name: "23", position: "Засновник та CEO" },
      {
        name: "Марія 'Підтримка'",
        position:
          "Марія допомагає нашим клієнтам залишатись задоволеними нашими послугами.",
      },
      {
        name: "Іван  'Підприємець'",
        position:
          "Іван шукає нові можливості, створивши платформу для новачків, що допомогла тисячам почати трейдинг.",
      },
      {
        name: "Алекс  'Інноватор'",
        position:
          "Алекс використовує новітні інструменти, розробивши алгоритм для зниження ризиків на волатильних ринках.",
      },
      {
        name: "Оля  'Аналітик'",
        position:
          "Оля знаходить закономірності в даних, створюючи точні аналітичні звіти для трейдерів.",
      },
    ],
  },
  V4 = {
    title: "Відгуки",
    cards: [
      {
        name: "Марія",
        feedback:
          "Я перепробувала багато платформ, але ця – найкраща. Інструменти для аналізу ринку настільки точні, що я змогла суттєво зменшити свої ризики. А ще подобається, що тут все продумано до дрібниць, навіть для новачків. Відчувається, що платформа створена з турботою про користувачів.",
        date: "10.11.2024",
      },
      {
        name: "Катерина",
        feedback:
          "Ця платформа – справжня знахідка! Особливо вразила функція зниження ризиків завдяки розумним рекомендаціям. За кілька місяців я не лише навчилася ефективно інвестувати, а й побудувала стабільний дохід. Дякую за таку сучасну та надійну платформу!",
        date: "15.10.2024",
      },
      {
        name: "Дмитро",
        feedback:
          "Торгівля стала для мене простішою і доступнішою. Платформа об'єднала інноваційні технології та легкість використання. Найбільше подобаються інтерактивні графіки і можливість налаштувати все під свої потреби. Тепер я відчуваю впевненість у кожній угоді.",
        date: "19.01.2025",
      },
      {
        name: "Назар",
        feedback:
          "Раніше трейдинг здавався мені складним і незрозумілим, але завдяки цій платформі все стало інтуїтивним і прозорим. Передова аналітика та зручний інтерфейс дозволяють приймати обґрунтовані рішення, а підтримка команди завжди на висоті! Завдяки платформі я вийшов на новий рівень прибутковості.",
        date: "02.02.2025",
      },
    ],
  },
  H4 = {
    helmet: $4,
    title1: M4,
    title2: F4,
    title3: U4,
    who: B4,
    team: z4,
    feedbacks: V4,
  },
  W4 = "Челендж до Нового Року:",
  q4 = "Виконай 10 угод та вигравай призи!",
  K4 = {
    title: "Як взяти участь?",
    accentWord: "участь",
    steps: [
      "Виконай 10 угод на реальному балансі за сигналами з AI.BOOST",
      "Мінімальна сума однієї угоди — 10$",
      "Усі угоди повинні бути завершені до 10 січня",
      "Розіграш відбудеться 10 січня",
      "Якщо ви станете одним із переможців, вам необхідно буде надати скріншоти своїх угод для підтвердження.",
    ],
    resultstitle:
      "У розіграші буде обрано 5 щасливих переможців абсолютно випадковим чином!",
    resultsSubtitle:
      "Повідомлення про виграш ви отримаєте на вашу електронну пошту. Бажаємо успіху!",
    auth: "Для участі необхідно авторизуватись",
    join: "Прийняти участь!",
    joined: "Ви вже приймєте участь в конкурсі",
    joinedMsg: "Ваша пошта {{email}} була доданий в список учасників!",
  },
  G4 = { title: "Наші призи для переможців!", accentWord: "переможців" },
  Y4 = {
    title: "Переможці нашого конкурсу",
    accentWord: "Переможці",
    tradersTitle: "ТОП ТРЕЙДЕРІВ",
  },
  Q4 = {
    title: "Не втрать шанс виграти авто!",
    subtitle: "Виконуй угоди зараз!",
  },
  J4 = {
    title: W4,
    subtitle: q4,
    instruction: K4,
    prizes: G4,
    winners: Y4,
    present: Q4,
  },
  X4 = {
    title: "TRADESIGNAL | Вікі",
    pageTitle:
      "Wiki з Бінарних Опціонів — Стратегії, Гайди та Поради | TRADESIGNAL",
    description:
      "Вивчай найкращу колекцію статей про трейдинг на бінарних опціонах. Освой стратегії, уникай помилок та ставай розумнішим разом із TRADESIGNAL Wiki.",
    keywords: [
      "бінарні опціони",
      "торгівля бінарними опціонами",
      "стратегії бінарних опціонів",
      "гайди з трейдингу",
      "поради з трейдингу",
      "керування ризиками",
      "аналіз ринку",
      "помилки бінарних опціонів",
      "як торгувати бінарними опціонами",
    ],
  },
  Z4 = {
    readMoreBtn: "Читати",
    readingTimeText: "хв",
    backWikiLinkText: "Назад до списку статей",
    articleNotFound: "Статтю не знайдено",
    modal: {
      title: "Готові почати торгувати?",
      text: "Зареєструйтесь на **TRADESIGNAL** і отримайте доступ до точних торгових сигналів, інструкцій та стратегій.",
      link: "Як це працює?",
    },
  },
  eO = {
    main: {
      title: "Вивчай Наші Статті про Бінарні Опціони",
      description:
        "Занурюйся в нашу колекцію корисних статей та покращуй свої знання у трейдингу.",
      libraryTitle: "Бібліотека",
      articles: [
        {
          title: "Повний посібник з бінарних опціонів",
          description:
            "Глибокий гід по бінарних опціонах: як вони працюють, чим відрізняються від інших інструментів, їх ризики та стратегії. Розвінчання міфів про казино та покрокове розуміння механіки трейдингу.",
          slug: "understanding-binary-options",
          readingTime: 10,
          helmet: {
            pageTitle:
              "Повний посібник з бінарних опціонів | Фінансовий трейдинг",
            pageDescription:
              "Що таке бінарні опціони? Повний гід для початківців: визначення, механіка, регулювання, ризики та стратегії. Навчіться відрізняти трейдинг від азартних ігор.",
            keywords: [
              "бінарні опціони",
              "трейдинг",
              "фінансові інструменти",
              "інвестиції",
              "що таке бінарні опціони",
              "стратегії бінарних опціонів",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "Графік бінарних опціонів у реальному часі",
          },
          blocks: [
            {
              type: "section",
              title: "Визначення бінарних опціонів",
              text: "Бінарні опціони — це тип фінансового контракту, який дає трейдеру два можливі результати: фіксований прибуток або повну втрату. Це робить їх простим, але потужним інструментом. На відміну від азартних ігор, бінарний опціон базується на ринковому аналізі та прогнозуванні руху ціни активу за фіксований період часу.",
              image: {
                src: "section-1.jpg",
                alt: "Діаграма: як працює бінарний опціон",
              },
            },
            {
              type: "section",
              title: "Як працює бінарний опціон?",
              text: `Трейдер обирає актив (наприклад, EUR/USD), прогнозує напрямок ціни (вище або нижче), вказує термін експірації (від 30 секунд до кількох годин) та суму угоди.

Якщо після закінчення часу ціна виявилась у напрямку прогнозу — виплата становить до 90% прибутку. Якщо ні — трейдер втрачає вкладену суму.

Приклад: якщо ви вважаєте, що ціна біткоїна зросте протягом 5 хвилин, ви купуєте опціон «Вище». Якщо прогноз справдиться — ви отримаєте фіксований прибуток.`,
              image: {
                src: "section-2.jpg",
                alt: "Сценарій бінарної торгівлі",
              },
            },
            {
              type: "section",
              title: "Бінарні опціони — не казино",
              text: `Багато хто плутає бінарні опціони з азартними іграми. Однак трейдинг вимагає аналізу, управління ризиками та стратегічного підходу. Різниця між казино і бінарною торгівлею — в тому, що трейдер використовує технічний і фундаментальний аналіз, а не покладається на удачу.

Професійні платформи пропонують демо-рахунки, графіки, індикатори та навчальні матеріали, недоступні в азартних іграх.`,
              image: {
                src: "section-3.jpg",
                alt: "Порівняння: трейдинг vs казино",
              },
            },
            {
              type: "list",
              title: "Переваги бінарних опціонів",
              items: [
                "Простий та зрозумілий інтерфейс",
                "Фіксований ризик і дохідність",
                "Швидкі угоди (прибуток за хвилини)",
                "Не потребує володіння активом",
                "Доступний старт з мінімальним капіталом",
              ],
            },
            {
              type: "list",
              title: "Ризики та недоліки",
              items: [
                "Висока волатильність може призвести до збитків",
                "Неліцензовані брокери та шахраї",
                "Не підходить для довгострокових інвестицій",
                "Потребує самоконтролю та стратегії",
              ],
            },
            {
              type: "section",
              title: "Де торгувати: надійні платформи",
              text: `Важливо обирати лише регульованих брокерів. Ось кілька надійних платформ з гарною репутацією:

- [Pocket Option](https://pocketoption.com) — популярний брокер з демо-рахунком і ліцензією IFMRRC
- [IQ Option](https://iqoption.com) — просунутий інтерфейс та мобільний застосунок
- [Deriv](https://deriv.com) — регулювання та різноманіття активів
- [Binarium](https://binarium.com) — російськомовна платформа, орієнтована на СНД, з швидким введенням/виведенням і простим інтерфейсом

Перед початком торгівлі переконайтесь у наявності ліцензії (наприклад, CySEC, IFMRRC, ASIC). Також корисно протестувати платформу на демо-рахунку та ознайомитись з відгуками користувачів.`,
              image: {
                src: "section-4.jpg",
                alt: "Список ліцензованих брокерів",
              },
            },
            {
              type: "quote",
              text: "Надійний брокер — це не гарантія прибутку, але перший крок до його можливості.",
            },
            {
              type: "section",
              title: "Рекомендовані стратегії",
              text: `Деякі популярні стратегії для бінарної торгівлі:

- **Стратегія за трендом:** торгівля в напрямку домінуючого тренду
- **Рівні підтримки/опору:** вхід при відскоку від ключових рівнів
- **Індикатори RSI та MACD:** виявлення перекупленості або перепроданості.`,
            },
            {
              type: "section",
              title: "Висновок",
              text: "Бінарні опціони — це легітимний інструмент короткострокового трейдингу, за умови використання надійного брокера та свідомого підходу трейдера. Це не спосіб швидко розбагатіти, а інструмент заробітку для дисциплінованого і навченого трейдера.",
            },
          ],
        },
        {
          title: "Стратегії успішної торгівлі",
          description:
            "Вивчайте перевірені стратегії, які допоможуть стабільно заробляти на бінарних опціонах. Підходить для трейдерів усіх рівнів.",
          slug: "successful-trading-strategies",
          readingTime: 8,
          helmet: {
            pageTitle: "Ефективні стратегії бінарної торгівлі",
            pageDescription:
              "Повний гайд зі стратегій: мартингейл, рівні, RSI + SMA та інші. Підвищіть рівень торгівлі бінарними опціонами за допомогою перевірених методів і сигналів.",
            keywords: [
              "стратегії бінарних опціонів",
              "ефективна торгівля",
              "мартингейл",
              "рівні підтримки і спротиву",
              "RSI",
              "Price Action",
              "новинний трейдинг",
              "торгові сигнали",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Фінансова стратегія на графіку" },
          blocks: [
            {
              type: "section",
              title: "Чому стратегія важлива?",
              text: "Торгівля бінарними опціонами — це не азарт, а система. Кожна успішна угода — результат розрахунку, аналізу і вибраної методики. Стратегія дозволяє виключити емоції і будувати стабільне зростання капіталу.",
            },
            {
              type: "quote",
              text: "Стратегія — це компас в океані ринку. Без неї ви лише дрейфуєте.",
            },
            {
              type: "section",
              title: "Популярні стратегії",
              text: "Розглянемо найефективніші стратегії, які використовують як новачки, так і професіонали. Кожна має свої особливості і підходить під різні ринкові умови.",
              image: {
                src: "section-1.jpg",
                alt: "Популярні стратегії бінарних опціонів",
              },
            },
            {
              type: "list",
              title: "Топ-стратегії",
              items: [
                "[**Price Action**](https://ru.tradingview.com/chart/XAUUSD/OYk6OIpF-price-action-vs-smart-money-chto-vybratb-dlya-uspeshnoj-torgovli/) — аналіз чистого графіка без індикаторів. Заснований на свічкових патернах і рівнях. Потребує досвіду та уважності до деталей.",
                "[**Мартингейл**](/wiki/martingale-strategy) — стратегія подвоєння ставки після кожного збитку. Працює на стабільних, маловолатильних ринках. Важливо контролювати депозит і не використовувати її без обмежень.",
                "[**Стратегія рівнів**](/wiki/support-resistance-strategy) — робота на відбій або пробій рівнів підтримки і спротиву. Добре поєднується з об’ємами та свічковим аналізом.",
                "[**RSI + SMA**](/wiki/rsi-sma-strategy) — комбінований підхід, де RSI визначає перекупленість/перепроданість, а SMA підтверджує напрямок тренду.",
                "[**Новинний трейдинг**](https://ru.tradingview.com/news/) — торгівля на різких рухах під час виходу новин. Потребує швидкої реакції і вміння працювати з економічним календарем.",
              ],
            },
            {
              type: "section",
              title: "Розбір: стратегія Мартингейл",
              text: `Мартингейл — метод управління капіталом, при якому ви подвоюєте ставку після кожної збиткової угоди. Мета — перекриття попередніх збитків одним виграшем. Приклад:

1. Ви ставите $10 і програєте.
2. Наступна ставка — $20.
3. Якщо знову програш — $40.
4. Після виграшу ви повертаєте все і отримуєте прибуток.

**Ризики**: швидке злиття депозиту, особливо без обмежень.

**Підходить для**: стабільних ринків і коротких таймфреймів.

**Не підходить для**: волатильності під час новин.`,
            },
            {
              type: "section",
              title: "Коли використовувати рівні?",
              text: `Рівні спротиву і підтримки — базовий елемент технічного аналізу. Стратегія працює за принципом:

- Ціна підходить до рівня → шукаємо сигнал на відбій
- Ціна пробиває рівень → шукаємо вхід у напрямку пробою

Поєднується з RSI, свічковими патернами, обсягами.`,
            },
            {
              type: "section",
              title: "Поради з використання стратегій",
              text: `🔹 Тестуйте на демо-рахунку до впевненості

🔹 Не перемикайтесь між стратегіями занадто часто

🔹 Записуйте угоди і ведіть трейдинг-щоденник

🔹 Комбінуйте методи: рівні + індикатори + поведінка ціни`,
            },
            {
              type: "section",
              title: "Сигнали як частина стратегії",
              text: "Якщо ви не готові самостійно аналізувати ринок — підключайте сигнали. Платформа [TRADESIGNAL](https://TRADESIGNAL.com/register) надає сигнали, засновані на алгоритмах і ручній перевірці. Це не замінить вашу стратегію, але підсилить її.",
            },
            {
              type: "quote",
              text: "Сигнал — це не заміна стратегії. Це її посилення.",
            },
            {
              type: "section",
              title: "Як обирати сигнали?",
              text: `- Перевіряйте статистику (успішні угоди за останні дні)
- Переконайтесь, що стиль сигналів збігається з вашою стратегією
- Уникайте торгівлі вночі — високий спред і хибні рухи
- Використовуйте сигнали в рамках своєї системи, а не замість неї`,
            },
            {
              type: "section",
              title: "Підсумки",
              text: "Вибір стратегії — це шлях до дисципліни і системної торгівлі. Не існує «святого Граалю», але існує підхід, який працює саме для вас. Вивчайте, тестуйте, адаптуйте — і результат з’явиться. І не забувайте: **гроші люблять порядок**.",
            },
          ],
        },
        {
          title: "Методи управління ризиками",
          description:
            "Відкрийте для себе перевірені стратегії управління ризиками у трейдингу бінарними опціонами. Навчіться захищати свій капітал та ефективно використовувати сигнали нашої платформи.",
          slug: "risk-management-methods",
          readingTime: 7,
          helmet: {
            pageTitle:
              "Методи управління ризиками у трейдингу | Торгівля бінарними опціонами",
            pageDescription:
              "Практичні методи управління ризиками, що допомагають трейдерам зберігати капітал та торгувати свідомо. Рекомендації, підходи та платформа з торговими сигналами.",
            keywords: [
              "управління ризиками",
              "трейдинг",
              "бінарні опціони",
              "сигнали для трейдингу",
              "капітал",
              "фінансова стратегія",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Графік управління ризиками" },
          blocks: [
            {
              type: "section",
              title: "Що таке управління ризиками?",
              text: "Управління ризиками — це сукупність стратегій і правил, спрямованих на мінімізацію втрат під час торгівлі. У трейдингу бінарними опціонами це особливо важливо, адже кожен контракт може завершитися або прибутком, або повною втратою інвестиції. Без чіткого підходу до ризику трейдер швидко втрачає капітал, навіть якщо стратегія здається вигідною на перший погляд.",
              image: {
                src: "section-1.jpg",
                alt: "Фінансовий ризик і управління",
              },
            },
            {
              type: "quote",
              text: "Ключ до виживання в трейдингу — не в тому, щоб бути завжди правим, а в тому, щоб втратити якнайменше, коли ти помиляєшся.",
            },
            {
              type: "section",
              title: "Основні методи управління ризиками",
              text: "Існує безліч підходів, що дозволяють зменшити вплив збиткових угод на загальний результат. Ось найбільш важливі:",
            },
            {
              type: "list",
              title: "Популярні методи",
              items: [
                "Фіксований відсоток від депозиту на угоду (1-5%)",
                "Використання демо-рахунку для тестування стратегій",
                "Встановлення денного ліміту збитків",
                "Переривання торгівлі після 2-3 збиткових угод підряд",
                "Диверсифікація активів та часових інтервалів",
              ],
            },
            {
              type: "section",
              title: "Роль психології в управлінні ризиками",
              text: "Психологічна стійкість критично важлива. Емоції — головний ворог трейдера. Після серії невдач не варто подвоювати ставки в надії відігратися. Управління ризиками — це також дисципліна. Встановіть правила та не відступайте від них. Ведіть щоденник угод і аналізуйте помилки.",
            },
            {
              type: "section",
              title: "Як допомагає наша платформа сигналів",
              text: `Наша інтелектуальна система сигналів аналізує ринок у реальному часі та надає точні рекомендації щодо відкриття позицій. Завдяки вбудованим фільтрам волатильності та алгоритмам розрахунку ймовірностей, ви можете:

- Отримувати сигнали з високою точністю
- Керувати ризиком, використовуючи лише найбільш надійні входи
- Підвищувати стабільність своїх результатів, не витрачаючи години на аналіз

[Спробуйте сигнали безкоштовно](https://TRADESIGNAL.com/register) та включіть у свою стратегію безпечну торгівлю з нами.`,
              image: {
                src: "section-2.png",
                alt: "Платформа з торговими сигналами",
              },
            },
            {
              type: "section",
              title: "Висновки",
              text: "Грамотне управління ризиками — це не доповнення, а основа успішної торгівлі. Навіть найприбутковіша стратегія може бути зруйнована однією емоцією або однією помилкою. Використовуйте чіткі правила, автоматизовані сигнали та здоровий глузд, щоб побудувати сталу торгівлю в довгостроковій перспективі.",
            },
          ],
        },
        {
          title: "Стратегія Мартингейл у бінарних опціонах",
          description:
            "Покроковий посібник з застосування стратегії Мартингейл у трейдингу бінарними опціонами. Принципи, приклади, ризики та поради щодо управління капіталом.",
          slug: "martingale-strategy",
          readingTime: 6,
          helmet: {
            pageTitle: "Стратегія Мартингейл для бінарних опціонів",
            pageDescription:
              "Дізнайтесь, як працює стратегія Мартингейл: принципи подвійного ставки, управління ризиками та коли застосовувати цей метод у трейдингу бінарними опціонами.",
            keywords: [
              "мартингейл",
              "стратегія мартингейл",
              "управління капіталом",
              "бінарні опціони",
              "трейдинг",
              "риск-менеджмент",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "Графік з подвійним ставками за стратегією Мартингейл",
          },
          blocks: [
            {
              type: "section",
              title: "Що таке стратегія Мартингейл?",
              text: `Мартингейл — це стратегія управління капіталом, що базується на подвоєнні ставки після кожної програшної угоди. Мета — компенсувати всі втрати одним успішним трейдом та отримати прибуток.

Спочатку використовувалася в азартних іграх, а потім була адаптована для трейдингу. При правильному застосуванні може бути ефективним інструментом у бінарних опціонах.`,
            },
            {
              type: "quote",
              text: "Мартингейл не про ринок. Він про психологію та дисципліну.",
            },
            {
              type: "section",
              title: "Як працює стратегія?",
              text: `Принцип простий:

1. Зробіть угоду на мінімальну ставку, наприклад $10.
2. Якщо програли — наступна угода $20.
3. Знову програш — $40, і так далі.
4. Один виграш компенсує всі втрати + прибуток.

**Важливо:**
- Ставка завжди подвоюється
- Після виграшу ви повертаєтесь до початкової ставки`,
            },
            {
              type: "image",
              src: "martingale-scheme.jpg",
              alt: "Схема стратегії Мартингейл",
            },
            {
              type: "section",
              title: "Приклад торгівлі з Мартингейл",
              text: `**Сценарій:**
- Угода 1: $10 — програш (-$10)
- Угода 2: $20 — програш (-$30 загалом)
- Угода 3: $40 — прибуток (+$36)

**Результат:** +$6 чистого прибутку за цикл

Чим вища ставка — тим швидше ви ризикуєте вичерпати депозит. Але якщо ринок стабільний — шанси на успіх високі.`,
            },
            {
              type: "section",
              title: "Ризики стратегії",
              text: `- Швидке вичерпання депозиту
- Хибні сигнали та серії програшів
- Емоційне вигорання
- Обмеження платформ щодо максимальної ставки

Тому Мартингейл **не рекомендується використовувати без обмежень на кількість етапів (колін).**`,
            },
            {
              type: "section",
              title: "Коли застосовувати?",
              text: `✅ На спокійних, передбачуваних ринках

✅ У періоди низької волатильності

✅ При наявності точних сигналів (наприклад, від [TRADESIGNAL](https://TRADESIGNAL.com/register))

✅ Якщо ви строго обмежуєте кількість подвоєнь

❌ Не використовувати під час новин та сильних рухів ринку`,
            },
            {
              type: "section",
              title: "Альтернативи та посилення",
              text: `- Обмежений Мартингейл (до 3-4 колін)
- Комбінування з рівнями та індикаторами
- Використання сигналів платформи [TRADESIGNAL](https://TRADESIGNAL.com/register) для вибору точок входу
- Стратегія [RSI + SMA](/wiki/rsi-sma-strategy) як фільтр`,
            },
            {
              type: "section",
              title: "Висновок",
              text: "Мартингейл — потужний інструмент, але як меч з двома лезами. Його сила в простоті, але слабкість — в жадності. Якщо використовувати з розумом та обмеженнями, він може стати частиною прибуткової системи. Але лише в поєднанні з аналітикою та контролем емоцій.",
            },
          ],
        },
        {
          title: "Індикаторна стратегія RSI + SMA",
          description:
            "Розбір стратегії, яка базується на поєднанні індикаторів RSI та ковзної середньої SMA. Ідеальний баланс між трендовим і осциляційним підходом для бінарних опціонів.",
          slug: "rsi-sma-strategy",
          readingTime: 7,
          helmet: {
            pageTitle: "Стратегія RSI + SMA — потужний індикаторний підхід",
            pageDescription:
              "Дізнайтесь, як використовувати стратегію RSI + SMA в бінарних опціонах. Торгівля за сигналами осцилятора та ковзної середньої. Найкраще поєднання індикаторів для входу на ринок.",
            keywords: [
              "RSI",
              "SMA",
              "індикатори",
              "технічний аналіз",
              "бінарні опціони",
              "торгова стратегія",
              "трейдинг",
            ],
          },
          hero: { src: "hero-bg.png", alt: "Графік з накладеними RSI та SMA" },
          blocks: [
            {
              type: "section",
              title: "Що таке стратегія RSI + SMA?",
              text: `Ця стратегія поєднує силу двох популярних індикаторів: осцилятора RSI та ковзної середньої SMA. Вона підходить як для виявлення трендів, так і для пошуку точок входу при відкатах.

**RSI (Relative Strength Index)** показує силу поточного імпульсу, а **SMA (Simple Moving Average)** допомагає відстежити загальний напрямок ринку. Разом вони дають більш чисті сигнали для входу.`,
            },
            {
              type: "quote",
              text: "Один індикатор — сигнал. Два — стратегія. Три — шум.",
            },
            {
              type: "section",
              title: "Як налаштувати RSI + SMA?",
              text: `1. Встановіть RSI з періодом 14. Рівні 30 (перепроданість) і 70 (перекупленість).
2. Додайте SMA з періодом 50 або 100 на графік ціни.
3. Виберіть актив з вираженим рухом або регулярними відкатами.`,
            },
            {
              type: "image",
              src: "rsi-sma-settings.jpg",
              alt: "Налаштування RSI та SMA на графіку",
            },
            {
              type: "section",
              title: "Сигнали для входу",
              text: `- **Покупка опціону 'Вище':**
  - Ціна вище SMA
  - RSI знаходиться нижче 30 і починає рости

- **Покупка опціону 'Нижче':**
  - Ціна нижче SMA
  - RSI вище 70 і починає знижуватися`,
            },
            {
              type: "list",
              title: "Переваги стратегії",
              items: [
                "Фільтрація хибних сигналів одного індикатора іншим",
                "Працює на різних таймфреймах",
                "Підходить як для початківців, так і для досвідчених трейдерів",
                "Легко тестується на історії",
              ],
            },
            {
              type: "section",
              title: "Недоліки та обмеження",
              text: `- Не ефективна під час [флета](https://xdirect.ua/study/knowledge-base/lesson-03/market-phases-trend-flat-correction)
- Затримка сигналу від SMA
- Можливі хибні сигнали RSI при високій волатильності

Рекомендується використовувати в парі з сигналами або Price Action.`,
            },
            {
              type: "section",
              title: "Як посилити стратегію?",
              text: `- Додати рівні підтримки та опору ([читайте статтю](/wiki/support-resistance-strategy))
- Використовувати сигнали від платформи [TRADESIGNAL](https://TRADESIGNAL.com/register)
- Встановлювати ліміт на кількість угод на день
- Поєднувати з Мартингейлом, але обмежувати число колін`,
            },
            {
              type: "section",
              title: "Висновок",
              text: "RSI + SMA — це збалансована стратегія, яка може стати чудовою основою для системної торгівлі. Вона особливо добре працює на трендових ринках і може бути легко адаптована під вашу торгову психологію.",
            },
          ],
        },
        {
          title: "Торгівля від рівнів підтримки та опору",
          description:
            "Стратегія, що базується на аналізі ключових рівнів ринку. Ідеальна для бінарних опціонів завдяки високій точності точок входу.",
          slug: "support-resistance-strategy",
          readingTime: 6,
          helmet: {
            pageTitle: "Рівні підтримки та опору — основа технічного аналізу",
            pageDescription:
              "Дізнайтесь, як ефективно використовувати рівні підтримки та опору в бінарних опціонах. Проста і надійна стратегія для початківців і профі.",
            keywords: [
              "підтримка та опір",
              "технічний аналіз",
              "торгові рівні",
              "бінарні опціони",
              "торгова стратегія",
              "трейдинг",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "Графік з рівнями підтримки та опору",
          },
          blocks: [
            {
              type: "section",
              title: "Що таке рівні підтримки та опору?",
              text: "Рівні підтримки та опору — це горизонтальні зони на графіку, від яких ціна часто відскакує. Підтримка — це зона, де попит перевищує пропозицію і ціна розвертається вгору. Опір — навпаки, де продавці перемогли покупців і ціна йде вниз.",
            },
            {
              type: "quote",
              text: "Ціна завжди пам'ятає, де вона зупинялася раніше.",
            },
            {
              type: "section",
              title: "Як знаходити рівні?",
              text: `- Шукайте ділянки на графіку, де ціна мінімум 2–3 рази відскакувала
- Використовуйте таймфрейми від 1H до 4H для надійних рівнів
- Комбінуйте з тінями свічок і тілами закриття`,
            },
            {
              type: "image",
              src: "levels-example.jpg",
              alt: "Приклад рівнів на графіку",
            },
            {
              type: "section",
              title: "Коли входити в угоду?",
              text: `- **Опціон 'Вище':** Ціна підходить до рівня підтримки і показує ознаки розвороту (молот, бичаче поглинання)
- **Опціон 'Нижче':** Ціна торкається опору і починає знижуватися (повішений, ведмеже поглинання)

Для посилення сигналу використовуйте RSI або SMA (див. [стратегію RSI + SMA](/wiki/rsi-sma-strategy))`,
            },
            {
              type: "list",
              title: "Переваги",
              items: [
                "Висока точність входу",
                "Простота візуального аналізу",
                "Підходить для будь-якої платформи",
                "Працює на всіх таймфреймах",
              ],
            },
            {
              type: "section",
              title: "Що варто врахувати?",
              text: `- Рівні — це не лінії, а зони
- Ринок може «пробити» рівень хибним імпульсом
- Не входьте відразу — дочекайтесь підтвердження свічкою або об'ємом`,
            },
            {
              type: "section",
              title: "Порада від TRADESIGNAL",
              text: "Ми часто будуємо рівні в рамках автоматичних сигналів. Приєднуйтесь до [платформи TRADESIGNAL](https://TRADESIGNAL.com/register), щоб отримати доступ до точних рівнів і підтверджених входів.",
            },
            {
              type: "quote",
              text: "Добре побудований рівень — це як фортеця. Він тримає ціну, поки ринок не вирішить почати війну.",
            },
            {
              type: "section",
              title: "Висновок",
              text: "Рівні підтримки та опору — це фундаментальна техніка, на основі якої будуються десятки стратегій. Їх легко освоїти та ефективно застосовувати в бінарних опціонах, особливо в поєднанні з сигналами та індикаторами.",
            },
          ],
        },
        {
          title: "Вибір підходящего брокера",
          description:
            "Дізнайтесь, як вибрати найкращого брокера для торгівлі бінарними опціонами.",
          slug: "choose-broker",
          readingTime: 6,
          helmet: {
            pageTitle: "Як вибрати брокера для бінарних опціонів — інструкція",
            pageDescription:
              "Вибираємо надійного брокера: ліцензії, умови торгівлі, виведення коштів, відгуки та підтримка. Детальний посібник для трейдерів.",
            keywords: [
              "найкращий брокер бінарних опціонів",
              "як вибрати брокера",
              "брокер для трейдингу",
              "бінарні опціони",
              "надійний брокер",
              "торгова платформа",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Пошук брокера через монітор" },
          blocks: [
            {
              type: "section",
              title: "Чому вибір брокера критичний?",
              text: "Брокер — це ваш міст до ринку. Від його умов залежить, наскільки комфортно та безпечно ви зможете торгувати. Невірний вибір призведе до проблем з виведенням коштів, неадекватними котируваннями та навіть шахрайству.",
            },
            {
              type: "quote",
              text: "Добрий брокер не заважає торгувати. Він допомагає вам рости.",
            },
            {
              type: "section",
              title: "Ключові критерії вибору",
              text: "Перед тим, як почати торгувати, перевірте брокера за наступними параметрами:",
            },
            {
              type: "list",
              title: "На що звернути увагу",
              items: [
                "**Ліцензія та регулювання** — наявність сертифікатів від регулюючих органів (наприклад, CySEC, IFMRRC).",
                "**Відгуки користувачів** — шукайте думки на форумах та незалежних сайтах, а не лише в рекламі.",
                "**Умови торгівлі** — мінімальний депозит, комісії, доступні активи.",
                "**Платформа** — зручність інтерфейсу, швидкість виконання, наявність мобільної версії.",
                "**Виведення коштів** — швидкість, комісії, ліміти на виведення.",
                "**Підтримка** — наявність служби підтримки, оперативність відповідей.",
              ],
            },
            {
              type: "section",
              title: "Чого варто уникати?",
              text: `- Обіцянки гарантованого прибутку
- Платформи без ліцензій
- Неадекватно високі бонуси з жорсткими умовами відіграшу
- Складнощі при виведенні коштів
- Агресивні менеджери, які нав'язують угоди`,
            },
            {
              type: "section",
              title: "Рекомендовані платформи",
              text: `Для старту ми рекомендуємо використовувати перевірені платформи, такі як:

- **[Pocket Option](https://pocketoption.com)** — проста реєстрація, безліч активів, демо-рахунок.
- **[Quotex](https://quotex.io)** — ліцензія IFMRRC, зручний інтерфейс і швидкі виплати
- **[Binarium](https://binarium.com)** — російськомовна платформа, орієнтована на СНД, з швидким введенням/виведенням і простим інтерфейсом
- **[TRADESIGNAL](https://TRADESIGNAL.com/register)** — наша система надає сигнали, сумісні з великими брокерами.`,
            },
            {
              type: "section",
              title: "Висновок",
              text: "Вибір брокера — це як вибір партнера по бізнесу. Ви повинні йому довіряти, але при цьому розуміти ризики. Не поспішайте. Порівняйте умови, протестуйте на демо-рахунку і лише потім інвестуйте реальні кошти.",
            },
          ],
        },
      ],
    },
  },
  tO = { helmet: X4, common: Z4, pages: eO },
  nO = {
    title: "TRADESIGNAL | Main",
    pageTitle: "Free Signals for Binary Options Pocket Option — TRADESIGNAL",
    description:
      "Get the best binary options signals for free. Just register with the broker and start earning with us.",
    keywords: ["binary options signals", "pocket option signals"],
  },
  rO = {
    description:
      "Modern tools will open the path to success. We are created to make trading accessible, understandable, and profitable for everyone. Get free binary options signals with our platform.",
  },
  iO = {
    title: "What do we offer?",
    cards: [
      {
        title: "Intuitive Interface",
        text: "A user-friendly interface for easy access and fast operations from any device.",
      },
      {
        title: "Quick Start",
        text: "Start trading instantly—registration takes just a few minutes, and you're ready for the market.",
      },
      {
        title: "Accurate Trading Signals",
        text: "Receive real-time signals for well-informed decision-making.",
      },
    ],
  },
  oO = {
    title: "How does it work?",
    cards: [
      {
        title: "Registration",
        text: "Sign up on our platform and start using all its features.",
      },
      {
        title: "Account Funding",
        text: "Use reliable methods to quickly fund your account on the broker's platform.",
      },
      {
        title: "Start Trading",
        text: "Take advantage of our platform’s powerful tools for successful trading.",
      },
    ],
  },
  sO = {
    title: "Success Tools",
    cards: [
      {
        title: "Analytical Charts",
        text: "Data creates trends, and charts tell their stories. Imagine a tool that reveals market potential through clear and convenient visualization, allowing you to act confidently and quickly…",
      },
      {
        title: "Trading Signals",
        text: "Clear signals in the whirlwind of market changes. Imagine a source that helps you make crucial decisions based on proven data rather than intuition. Find the perfect moments to act.",
      },
      {
        title: "Modern Approach",
        text: "Artificial intelligence is changing the game. Imagine a system that analyzes the market in real time, detects hidden patterns, and provides precise trading signals. Less guessing – more well-founded decisions.",
      },
    ],
  },
  aO = {
    title: "FAQ",
    list: [
      {
        title: "How to start trading on your platform?",
        description:
          "To start trading, register an account and fund your balance with the Pocket Option broker. After that, you're ready to take your first step in trading.",
      },
      {
        title: "Do You Need to Pay for Signals?",
        description:
          "No! The signals from TRADESIGNAL are completely free, but to gain access, you need to be our referral on Pocket Option and deposit $10.",
      },
      {
        title: "Do I need experience to trade?",
        description:
          "Our platform is designed for both beginners and professionals, so anyone can start.",
      },
      {
        title: "What are trading signals and how to use them?",
        description:
          "Trading signals are recommendations that help make decisions on buying or selling assets based on market analysis. Use them to increase trade accuracy.",
      },
      {
        title: "What funding methods are available?",
        description: "Account funding is done on the Pocket Option platform.",
      },
      {
        title: "Is 24/7 support available?",
        description:
          "Yes, if you have any questions, you can contact our team via Telegram.",
      },
    ],
  },
  lO = {
    title: "Stay up to date with all trading trends!",
    description:
      "Register and get access to analytics and exclusive strategies.",
  },
  uO = {
    helmet: nO,
    hero: rO,
    proposal: iO,
    howItWork: oO,
    tools: sO,
    questions: aO,
    cta: lO,
  },
  cO = "Registration",
  fO = "Authorization",
  dO = "Copyright © {{year}} TRADESIGNAL | All Rights Reserved",
  pO = "Terms and Conditions",
  hO = "Privacy Policy",
  gO = "Cookie Policy",
  mO = "We use cookies",
  yO =
    "By continuing to use the site, you automatically agree to the site's policy and cookies.",
  vO = "Accept",
  wO = "Get Signal",
  SO = "Close",
  _O = "or",
  bO = "Support",
  xO = {
    online: "Online Visitors",
    plus: "Successful Signals",
    minus: "Unsuccessful Signals",
  },
  kO = {
    aboutUs: "About Us",
    history: "Trade History",
    instruction: "Instruction",
    signal: "Signal",
    account: "My Account",
    wiki: "Wiki",
  },
  EO = {
    register: cO,
    authorization: fO,
    copyright: dO,
    termsAndConditions: pO,
    privacyPolicy: hO,
    cookiePolicy: gO,
    cookieNoticeMessage: mO,
    cookieAgreement: yO,
    cookieAccept: vO,
    getSignalBtn: wO,
    close: SO,
    or: _O,
    supportLink: bO,
    stats: xO,
    navMenu: kO,
  },
  TO = {
    getSignal: "Get new signal",
    passability: "Passability {{value}}%",
    anotherSignal: "Another Signal",
    back: "Go Back",
    getSignalMartingale: "Chase the outcome",
    toMain: "Back to main",
    resetSignal: "Reset signal",
    searchSignalText: "Search for signal",
    pendingPriceText: "The bot is entering the trade...",
    getSignalLoading: "Search for signal...",
    timeTo: "Time to",
    resultAfter: "Result after",
    buy: "UP",
    sell: "DOWN",
    signalSetting: "Signal setting",
    signalInfo: "Info",
    otcWarning:
      "If the currency pair is displayed as OTC on the broker, click 'Reset Signal' to get a new one.",
    vipFreeUntil: "VIP algorithm available until:",
  },
  OO = { title: "Pair" },
  CO = {
    helmet: {
      title: "TRADESIGNAL | Instruction",
      pageTitle: "Instructions for Receiving Free Trading Signals on TRADESIGNAL",
      description:
        "A simple step-by-step process for receiving free trading signals. Make sure to follow all the steps and start earning!",
      keywords: ["instruction signals", "how to get signals", "free signals"],
    },
  },
  RO = {
    chatgpt_4o:
      "An advanced artificial intelligence model from OpenAI that utilizes deep learning to analyze market data. It processes vast amounts of information in real-time, identifying potential signals with high accuracy. The algorithm considers not only technical data but also fundamental factors, news, and behavioral market analysis.",
    "TRADESIGNAL_ai_v1":
      "The first version of our proprietary algorithm, developed based on machine learning. It analyzes historical trends, identifies patterns in market movements, and uses them to predict future changes. The algorithm has been trained on multiple years of data and can detect signals based on classical technical indicators and statistical analysis.",
    vip: "The VIP algorithm is an exclusive analysis model designed for professional traders seeking maximum accuracy and efficiency. This algorithm leverages advanced machine learning technologies, analyzes vast amounts of data in real-time, and accounts for unique market patterns. The VIP algorithm integrates fundamental analysis, technical indicators, and behavioral data to provide highly reliable signals. Note: only available to users with a balance of $1000 or more.",
    "13_squad":
      "13 Squad is a unique analytical indicator developed in collaboration with a closed community of traders. It incorporates proprietary patterns, signals from experienced members, and unconventional market analysis approaches. While the indicator is available to all users, it shows the greatest effectiveness when used alongside the community’s recommendations and strategies. You can join the community via the Telegram bot: <0>@squad_13_bot</0>.",
    "TRADESIGNAL_ai_v2":
      "An improved version of TRADESIGNAL AI that incorporates more advanced machine learning models. It utilizes additional market parameters such as trading volume, asset correlations, and time-based patterns. Enhanced algorithm optimization increases forecast accuracy, reduces false signals, and takes into account more market conditions during analysis.",
    "indicators_chatgpt_3.5":
      "A combined analysis method that uses popular technical indicators (such as RSI, MACD, Bollinger Bands) in conjunction with ChatGPT 3.5 AI. The AI analyzes indicator readings, determines potential entry and exit points, and interprets data to generate the most probable market scenarios. This method is suitable for short- and medium-term trading.",
    "36trade_ai_plus":
      "An exclusive analysis system that combines machine learning, technical indicators, and proprietary trend prediction algorithms. 36Trade AI Plus considers not only classical analysis methods but also data on major players' activity, market liquidity, and order structure. This enables the formation of the most accurate forecasts, reducing risk and improving trading efficiency.",
    manual:
      "The Manual method allows the user to independently select a currency pair for analysis. Artificial intelligence then engages in the process, focusing specifically on the asset chosen by the trader. This approach enables flexible adaptation of analysis to individual strategies and preferences. Unlike fully automated algorithms, the key role here belongs to the user’s choice, while AI provides in-depth data processing on the selected instrument, identifying potential signals and market development scenarios.",
  },
  AO = "Instructions for Receiving Signals",
  PO =
    "All you need to receive our free trading signals is to follow a few simple steps. Register on the Pocket Option platform, deposit at least $10, and connect to our signal. In our instructions, we will show you in detail how to do this — quickly and without unnecessary questions.",
  LO = { result: "Result", open: "Opening Price", close: "Closing Price" },
  IO = [
    "Risk no more than 2% of your deposit per trade – protect your capital.",
    "The trend is your ally! Trade with the market direction, not against it.",
    "Stop-loss is your lifeline. Always set a loss limit.",
    "Don’t hold onto losing trades for too long. Admit mistakes and close positions.",
    "Trading is a game of probabilities. No strategy guarantees 100% success.",
    "Control your emotions. Panic and greed destroy accounts.",
    "Keep a trading journal. Analyze your mistakes and successes.",
    "Follow the economic calendar. Major news impacts the market.",
    "Don’t try to recover losses in revenge trading. It leads to ruin.",
    "Continuously improve your strategy. The market evolves – so should you.",
    "Fewer trades – more profit. Filter the market, don’t chase every signal.",
    "A trader’s main weapon is patience. Don’t rush, wait for the best opportunity.",
    "The market is not responsible for your losses. The responsibility is always on you.",
    "Exit a trade as logically as you enter. Emotions have no place here.",
    "Test your strategy on a demo before going live. Experiments cost money.",
    "Profit loves discipline. Follow rules, not emotions.",
    "If in doubt, stay out. Waiting is better than an uncertain trade.",
    "The main goal is to survive in trading, not to hit the jackpot. Keep risks under control.",
    "Financial markets are always right. Your opinion is just a hypothesis.",
    "Learning is a continuous process. The market changes, so keep learning.",
  ],
  DO = {
    title: "Frequently Asked Questions",
    description: "Everything you need to know for a successful start",
    card1Title: "How to start trading on your platform?",
    card1Description:
      "To start, register an account, top up your balance, and choose the trading tools. After that, you are ready for your first trades.",
    card2Title: "Do I need experience to trade?",
    card2Description:
      "No, our platform is suitable for both beginners and experienced traders.",
    card3Title: "What are trading signals and how to use them?",
    card3Description:
      "Trading signals are recommendations to buy or sell assets based on market analysis. You can use them to make informed trading decisions.",
    card4Title: "What deposit methods are available?",
    card4Description: "Deposits are processed on the Pocket Option platform.",
    card5Title: "Is there 24/7 support?",
    card5Description:
      "Yes, if you have any questions, you can contact our team via telegram -",
  },
  NO =
    "There are no signals available at the moment, please try again in a minute!",
  jO = "Next signal in",
  $O = {
    title: "Analytics",
    techAnalysisBuyTitle: "Technical analysis for buying",
    techAnalysisSellTitle: "Technical analysis for selling",
    movingAverages: "Moving averages",
    trendPower: "Trend strength",
    movePotential: "Movement potential",
    volumeAnalysisBuyTitle: "Volume analysis for buying",
    volumeAnalysisSellTitle: "Volume analysis for selling",
    sellerStrength: "Seller strength",
    volumeProfile: "Volume profile",
    crowdSentiment: "Crowd sentiment",
    topSecret: "For now, highly confidential information",
  },
  MO = {
    title: "Markets are currently resting 💤",
    workingTimeText:
      "We operate only from Monday to Friday, from {{from}}:00 - {{to}}:00, so visit us on working days, and we'll help you conquer financial heights! 🚀",
  },
  FO = {
    title: "Oops!",
    text: "Insufficient funds on the account for signals. 💳 The minimum trading amount is ${{minBalance}}. Top up your balance 💸 — and move forward to success! 🚀",
    currentBalance: "Your current balance",
    checkBalanceBtn: "Check balance",
    checkBalanceBtnLoading: "Checking balance...",
    instructionBtn: "How to top up balance",
    loadingText:
      "Checking your balance on the Pocket Option broker is in progress. Depending on the load, the check may take from a few seconds to an hour. Thank you for your patience!",
    checkingError:
      "Unfortunately, your balance is less than ${{minBalance}}. If this is not the case, please try checking again later.",
    checkingSuccess: "Your balance ${{balance}} has been verified!",
    noTraderId:
      "It seems we cannot find your ID. Please reload the page and try again!",
    vipBalanceCheck:
      "To use this indicator, your balance must be over $1000. Your current balance is ${{balance}}.",
    faq: {
      title: "Answering your questions",
      info: {
        title: "Where did you get this information?",
        modalText1:
          "We collaborate with the Pocket Option broker as part of a referral program. According to our agreements, the broker pays us a percentage of your trading turnover once a year. We want to emphasize that you are not charged any additional fees or commissions — all terms pertain solely to our agreement with the broker.",
        modalText2:
          "If your balance is zero, we do not receive any profit from your activity. For this reason, we cannot grant access to our resource since our income directly depends on your turnover.",
        modalText3:
          "Additionally, we want to point out that the right to access information about your balance has been provided to us by the broker. This is necessary to ensure transparency in our relationship and fulfill the terms of the referral program.",
        modalText4:
          "If you have any additional questions, we are always ready to answer and clarify all the details!",
      },
      balance: {
        title: "The site doesn't see your balance?",
        attention: "Please note:",
        modalText1:
          "if you have just topped up your balance but the site still reports insufficient funds, please wait a few minutes.",
        modalText2:
          "We need time to receive up-to-date information about your balance from the broker. Also, note that bonus funds are not counted as part of the available balance.",
      },
    },
  },
  UO = {
    hero: TO,
    currencySelector: OO,
    instruction: CO,
    analysis_methods: RO,
    instructionTitle: AO,
    instructionSubtitle: PO,
    result: LO,
    tradingTips: IO,
    questions: DO,
    getSignalError: NO,
    automaticSignalText: jO,
    statistics: $O,
    workingTime: MO,
    checkBalance: FO,
  },
  BO = "Email",
  zO = "Password",
  VO = "Repeat password",
  HO = "Registration",
  WO = "Login",
  qO = "Login to the TRADESIGNAL system",
  KO = "Registration in the TRADESIGNAL system",
  GO = "Forgot password?",
  YO = "Password update",
  QO = "Back",
  JO = "Send request",
  XO = "Enter your Email",
  ZO =
    "To update your password, enter your Email that may have been used in the system",
  eC =
    "We have sent an email to your address. Check your inbox and click the link in the email to reset your account password.",
  tC = "You will be able to resend the email in:",
  nC = "Almost done!",
  rC =
    "To complete the registration and receive signals, register an account via the link below and send your ID",
  iC = "Register on Pocket Option",
  oC = "Where to find ID?",
  sC = "Important!",
  aC =
    "If you already have an account, please log out (or delete it) first, then register using this link. Otherwise, we won't receive your ID.",
  lC = "Enter your Account ID",
  uC = "Confirm that you are not a robot",
  cC = "Already have an account?",
  fC = "Don't have an account yet?",
  dC = "Enter a new password",
  pC = "Set password",
  hC = "Password successfully updated, you need to log in again to continue",
  gC = "Back to login",
  mC = "Or",
  yC = "Create an account",
  vC = "Please verify that you are not a robot",
  wC = "Enter your email address",
  SC =
    "The password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character",
  _C = "Incorrect password entered",
  bC = "Enter a valid ID",
  xC = {
    email: BO,
    password: zO,
    repeatPassword: VO,
    registration: HO,
    login: WO,
    loginDescription: qO,
    registrationDescription: KO,
    forgotPassword: GO,
    updatePasswordTitle: YO,
    back: QO,
    forgotPasswordButton: JO,
    forgotPasswordTitle: XO,
    forgotPasswordSubtitle: ZO,
    forgotPasswordText: eC,
    forgotPasswordremainigText: tC,
    almostDone: nC,
    almostDoneDescription: rC,
    getRegister: iC,
    findAnId: oC,
    warningWord: sC,
    registerWarningText: aC,
    enterAccountId: lC,
    notARobotError: uC,
    alreadyHaveAnAccount: cC,
    dontHaveAnAccountYet: fC,
    newPassword: dC,
    newPasswordButton: pC,
    resetPasswordSuccessText: hC,
    backToLogin: gC,
    or: mC,
    createAnAccount: yC,
    pleaseVerify: vC,
    enterEmailAddress: wC,
    enterValidPassword: SC,
    incorrectlyPassword: _C,
    enterId: bC,
  },
  kC = "Confirm your email",
  EC = "To log in, activate your account via email",
  TC =
    "We have sent an email to your address. Please check your inbox and click the link in the email to activate your account. If you can't find the email, please check your spam folder.",
  OC = "Send email again",
  CC = "You will be able to resend the email in:",
  RC = "The email has been resent!",
  AC = {
    title: "Your email has been activated!",
    subtitle: "Just a little more to go :)",
    button: "To the next step",
  },
  PC = {
    title: kC,
    subtitle: EC,
    text: TC,
    button: OC,
    remainigText: CC,
    sendText: RC,
    activated: AC,
  },
  LC = "Personal information",
  IC = "Security",
  DC = "To enhance security, the password can only be updated via email",
  NC = "Change password",
  jC = "Password reset email has been sent",
  $C = {
    privateInfo: LC,
    security: IC,
    passwordText: DC,
    resetPasswordBtn: NC,
    sendText: jC,
  },
  MC =
    "To get your ID, you need to register with the broker. After registration, you can find your ID in your personal account.",
  FC = `We cooperate with the broker through a referral system to provide signals for free to users.
Our income is generated through the Pocket Option broker's referral program, which pays us 2% of the annual turnover of users' successful trades.
At the same time, users lose nothing — the commission is charged by the broker, not from users' funds. This approach allows us to keep the service free and maintain its quality at a high level.`,
  UC =
    "If you already have an account with the Pocket Option broker without a referral system, you need to create a new one using our link, otherwise, you will not be able to use this service.",
  BC = "Where to find ID?",
  zC = "Why do you need my ID?",
  VC = "I already have an account with the broker",
  HC = {
    whereIsId: MC,
    idDescription: FC,
    alreadyHaveAccount: UC,
    whereIsIdText: BC,
    idDescriptionText: zC,
    alreadyHaveAccountText: VC,
  },
  WC = "Your ID is being verified",
  qC =
    "We are checking your information. This may take a few minutes. Thank you for your patience!",
  KC = "While you wait, you can play a game!",
  GC = "Your ID was not found",
  YC = "If you are sure your ID is correct, please try again.",
  QC =
    "Your ID has been confirmed! You will be redirected to the signals page in a few seconds.",
  JC = "Back",
  XC = "You have been logged out...",
  ZC = "Please log in again and try once more!",
  eR = "Log in",
  tR = {
    title: WC,
    subtitle: qC,
    waitingGameText: KC,
    errorTitle: GC,
    errorSubtitle: YC,
    successMessage: QC,
    backBtn: JC,
    unauthorizedErrorTitle: XC,
    unauthorizedErrorSubtitle: ZC,
    unauthorizedErrorBtn: eR,
  },
  nR = {
    title: "Transaction History",
    cards: {
      total: "Total Signals",
      win: "Successful Signals",
      neutral: "Neutral Signals",
      loss: "Unsuccessful Signals",
    },
    recommendations: {
      infoBtn: "Bad statistics?",
      disclaimerText:
        "If there are more negative signals than positive ones, we recommend choosing a different time for trading.",
      list: {
        title: "Recommendations",
        listContent: [
          "Check the economic calendar.",
          "Analyze the market and follow the trend.",
          "Use risk management.",
          "Avoid trading during instability.",
          "Analyze your trades to improve your strategy.",
        ],
        comingSoon: "Instructions for all points will be available soon.",
      },
    },
  },
  rR = {
    title: "Statistics",
    filtersTitle: "Filters",
    resetBtn: "Reset",
    tableHead: {
      symbol: "Currency Pair",
      date: "Date",
      aiModel: "AI",
      time: "Time",
      duration: "Duration",
      result: "Result",
    },
    tableBody: {
      2: "minutes",
      3: "minutes",
      5: "minutes",
      7: "minutes",
      10: "minutes",
      noDataRow: "You haven't received any signals yet",
      scrollDown: "Scroll down to see more",
    },
  },
  iR = { stats: nR, history: rR },
  oR = {
    title: "TRADESIGNAL | About us",
    pageTitle: "TRADESIGNAL — Who We Are and How We Help You Earn",
    description:
      "Learn more about the TRADESIGNAL team and our mission to provide free trading signals.",
    keywords: ["TRADESIGNAL", "binary options signals"],
  },
  sR = "We Analyze",
  aR = "We Create Strategies",
  lR = "We Achieve Success",
  uR = {
    title: "Who Are We?",
    text1:
      "We are transforming trading by making it simple, clear, and accessible. You set goals, and we provide the tools that lead to success.",
    text2:
      "Technology and analytics work for you. We create solutions that reduce risks and maximize profits in every trade.",
    text3:
      "Trading is your story, and we make it brighter. A user-friendly interface, advanced analytics, and full support at every stage – all this helps you reach new heights.",
  },
  cR = {
    title: "Our Team",
    members: [
      { name: "23", position: "Founder & CEO" },
      {
        name: "Maria 'Support'",
        position: "Maria helps our clients stay satisfied with our services.",
      },
      {
        name: "Ivan 'Entrepreneur'",
        position:
          "Ivan seeks new opportunities, having created a platform for beginners that has helped thousands start trading.",
      },
      {
        name: "Alex 'Innovator'",
        position:
          "Alex utilizes the latest tools, developing an algorithm to reduce risks in volatile markets.",
      },
      {
        name: "Olga 'Analyst'",
        position:
          "Olga identifies patterns in data, creating precise analytical reports for traders.",
      },
    ],
  },
  fR = {
    title: "Reviews",
    cards: [
      {
        name: "Maria",
        feedback:
          "I have tried many platforms, but this one is the best. The market analysis tools are so accurate that I have been able to significantly reduce my risks. I also love how everything is well thought out, even for beginners. You can feel that this platform was created with users in mind.",
        date: "10.11.2024",
      },
      {
        name: "Catherine",
        feedback:
          "This platform is a real gem! The risk reduction feature with smart recommendations impressed me the most. In just a few months, I not only learned how to invest effectively but also built a stable income. Thank you for such a modern and reliable platform!",
        date: "15.10.2024",
      },
      {
        name: "Dmitry",
        feedback:
          "Trading has become easier and more accessible for me. The platform combines innovative technology with ease of use. I especially love the interactive charts and the ability to customize everything to my needs. Now I feel confident in every trade.",
        date: "19.01.2025",
      },
      {
        name: "Nazar",
        feedback:
          "I used to find trading complex and confusing, but thanks to this platform, everything has become intuitive and transparent. Advanced analytics and a user-friendly interface allow me to make well-informed decisions, and the team’s support is always top-notch! Thanks to the platform, I have reached a new level of profitability.",
        date: "02.02.2025",
      },
    ],
  },
  dR = {
    helmet: oR,
    title1: sR,
    title2: aR,
    title3: lR,
    who: uR,
    team: cR,
    feedbacks: fR,
  },
  pR = "Challenge Until New Year:",
  hR = "Complete 10 trades and win prizes!",
  gR = {
    title: "How to participate?",
    accentWord: "participate",
    steps: [
      "Complete 10 trades on a real balance using AI.BOOST signals",
      "The minimum amount per trade is $10",
      "All trades must be completed by January 10, inclusive",
      "The draw will take place on January 10",
      "If you become one of the winners, you will need to provide screenshots of your trades for verification.",
    ],
    resultstitle: "5 lucky winners will be chosen randomly in the draw!",
    resultsSubtitle:
      "You will receive a winning notification via email. Good luck!",
    auth: "You need to log in to participate",
    join: "Join now!",
    joined: "You are already participating in the contest",
    joinedMsg: "Your email {{email}} has been added to the participant list!",
  },
  mR = { title: "Our prizes for the winners!", accentWord: "winners" },
  yR = {
    title: "Winners of our contest",
    accentWord: "Winners",
    tradersTitle: "TOP TRADERS",
  },
  vR = {
    title: "Don't miss the chance to win a car!",
    subtitle: "Start trading now!",
  },
  wR = {
    title: pR,
    subtitle: hR,
    instruction: gR,
    prizes: mR,
    winners: yR,
    present: vR,
  },
  SR = {
    title: "TRADESIGNAL | Wiki",
    pageTitle: "Binary Options Wiki — Strategies, Guides & Tips | TRADESIGNAL",
    description:
      "Explore the ultimate collection of articles on binary options trading. Learn strategies, avoid mistakes, and become a smarter trader with TRADESIGNAL Wiki.",
    keywords: [
      "binary options",
      "binary options trading",
      "binary options strategies",
      "trading guides",
      "trading tips",
      "risk management",
      "market analysis",
      "binary options mistakes",
      "how to trade binary options",
    ],
  },
  _R = {
    readMoreBtn: "Read more",
    readingTimeText: "min",
    backWikiLinkText: "Back to articles",
    articleNotFound: "Article not found",
    modal: {
      title: "Ready to start trading?",
      text: "Sign up on **TRADESIGNAL** and get access to accurate trading signals, guides, and strategies.",
      link: "How does it work?",
    },
  },
  bR = {
    main: {
      title: "Explore Our Articles on Binary Options",
      description:
        "Dive into our collection of informative articles to enhance your trading knowledge.",
      libraryTitle: "Library",
      articles: [
        {
          title: "Complete Guide to Binary Options",
          description:
            "An in-depth guide to binary options: how they work, how they differ from other instruments, their risks and strategies. Debunking gambling myths and step-by-step understanding of trading mechanics.",
          slug: "understanding-binary-options",
          readingTime: 10,
          helmet: {
            pageTitle: "Complete Guide to Binary Options | Financial Trading",
            pageDescription:
              "What are binary options? A complete guide for beginners: definitions, mechanics, regulation, risks, and strategies. Learn how to distinguish trading from gambling.",
            keywords: [
              "binary options",
              "trading",
              "financial instruments",
              "investing",
              "what are binary options",
              "binary options strategies",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Real-time binary options chart" },
          blocks: [
            {
              type: "section",
              title: "Definition of Binary Options",
              text: "Binary options are a type of financial contract that offers traders two possible outcomes: a fixed profit or a total loss. This makes them a simple yet powerful tool. Unlike gambling, binary options are based on market analysis and price prediction over a fixed time period.",
              image: {
                src: "section-1.jpg",
                alt: "Diagram: how a binary option works",
              },
            },
            {
              type: "section",
              title: "How Do Binary Options Work?",
              text: `A trader selects an asset (e.g., EUR/USD), predicts the price direction (up or down), sets the expiry time (from 30 seconds to several hours), and enters the trade amount.

If the price is in the predicted direction at expiry — the payout can be up to 90% profit. If not — the invested amount is lost.

Example: if you believe Bitcoin’s price will rise in the next 5 minutes, you buy a “Call” option. If your forecast is correct — you receive a fixed profit.`,
              image: { src: "section-2.jpg", alt: "Binary trading scenario" },
            },
            {
              type: "section",
              title: "Binary Options Are Not Gambling",
              text: `Many confuse binary options with gambling. However, trading requires analysis, risk management, and strategic thinking. The difference is that traders use technical and fundamental analysis instead of relying on luck.

Professional platforms offer demo accounts, charts, indicators, and educational materials — features unavailable in gambling.`,
              image: {
                src: "section-3.jpg",
                alt: "Comparison: trading vs gambling",
              },
            },
            {
              type: "list",
              title: "Advantages of Binary Options",
              items: [
                "Simple and user-friendly interface",
                "Fixed risk and return",
                "Quick trades (profits in minutes)",
                "No need to own the asset",
                "Accessible with low starting capital",
              ],
            },
            {
              type: "list",
              title: "Risks and Disadvantages",
              items: [
                "High volatility can lead to losses",
                "Unlicensed brokers and scams",
                "Not suitable for long-term investments",
                "Requires self-control and strategy",
              ],
            },
            {
              type: "section",
              title: "Where to Trade: Trusted Platforms",
              text: `It’s important to choose only regulated brokers. Here are some reputable platforms:

- [Pocket Option](https://pocketoption.com) — popular broker with demo account and IFMRRC license
- [IQ Option](https://iqoption.com) — advanced interface and mobile app
- [Deriv](https://deriv.com) — regulation and asset diversity
- [Binarium](https://binarium.com) — CIS-oriented platform with fast transactions and simple UI

Before trading, check for licenses (e.g., CySEC, IFMRRC, ASIC). It's also wise to test the platform with a demo account and read user reviews.`,
              image: { src: "section-4.jpg", alt: "List of licensed brokers" },
            },
            {
              type: "quote",
              text: "A reliable broker is not a guarantee of profit, but the first step toward the possibility of it.",
            },
            {
              type: "section",
              title: "Recommended Strategies",
              text: `Popular binary trading strategies include:

- **Trend Strategy:** trading in the direction of the prevailing trend
- **Support/Resistance Levels:** entry on bounce from key levels
- **RSI and MACD Indicators:** identifying overbought or oversold conditions.`,
            },
            {
              type: "section",
              title: "Conclusion",
              text: "Binary options are a legitimate short-term trading tool — when used with a reliable broker and a conscious trading approach. It's not a get-rich-quick scheme, but a way for disciplined, trained traders to earn profit.",
            },
          ],
        },
        {
          title: "Successful Trading Strategies",
          description:
            "Explore proven strategies that can help you earn consistently with binary options. Suitable for traders of all levels.",
          slug: "successful-trading-strategies",
          readingTime: 8,
          helmet: {
            pageTitle: "Effective Binary Trading Strategies",
            pageDescription:
              "A complete guide to strategies: Martingale, levels, RSI + SMA, and more. Level up your binary trading with reliable methods and signals.",
            keywords: [
              "binary options strategies",
              "effective trading",
              "martingale",
              "support and resistance levels",
              "RSI",
              "Price Action",
              "news trading",
              "trading signals",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Financial strategy on a chart" },
          blocks: [
            {
              type: "section",
              title: "Why Strategy Matters",
              text: "Binary options trading isn’t gambling — it’s a system. Every successful trade is the result of calculation, analysis, and a chosen method. A strategy helps eliminate emotions and build steady capital growth.",
            },
            {
              type: "quote",
              text: "A strategy is a compass in the ocean of the market. Without it, you’re just drifting.",
            },
            {
              type: "section",
              title: "Popular Strategies",
              text: "Let’s take a look at the most effective strategies used by both beginners and professionals. Each one has its own features and fits different market conditions.",
              image: {
                src: "section-1.jpg",
                alt: "Popular binary options strategies",
              },
            },
            {
              type: "list",
              title: "Top Strategies",
              items: [
                "[**Price Action**](https://en.tradingview.com/chart/XAUUSD/OYk6OIpF-price-action-vs-smart-money-chto-vybratb-dlya-uspeshnoj-torgovli/) — analysis of the pure chart without indicators. Based on candlestick patterns and price levels. Requires experience and attention to detail.",
                "[**Martingale**](/wiki/martingale-strategy) — a strategy where you double your stake after each loss. Works best in stable, low-volatility markets. Deposit management is crucial, and overuse is dangerous.",
                "[**Support/Resistance Levels**](/wiki/support-resistance-strategy) — trading on a bounce or breakout from key levels. Works well when combined with volume indicators and candlestick analysis.",
                "[**RSI + SMA**](/wiki/rsi-sma-strategy) — a combo approach where RSI identifies overbought/oversold zones, and the SMA confirms the trend direction.",
                "[**News Trading**](https://en.tradingview.com/news/) — trading on sharp price movements during economic news releases. Requires quick reaction and familiarity with the economic calendar.",
              ],
            },
            {
              type: "section",
              title: "Deep Dive: Martingale Strategy",
              text: `Martingale is a money management method where you double your trade amount after each loss. The goal is to recover all losses with one win. Example:

1. You bet $10 and lose.
2. Next bet — $20.
3. If you lose again — $40.
4. Once you win, you recover everything and make a profit.

**Risks**: quick loss of your entire deposit, especially without strict limits.

**Best for**: stable markets and short timeframes.

**Avoid during**: high volatility (e.g., news events).`,
            },
            {
              type: "section",
              title: "When to Use Levels?",
              text: `Support and resistance levels are fundamental to technical analysis. This strategy works as follows:

- Price reaches a level → look for a reversal signal
- Price breaks a level → look to enter in the breakout direction

Can be combined with RSI, candlestick patterns, and volume indicators.`,
            },
            {
              type: "section",
              title: "Tips for Using Strategies",
              text: `🔹 Test strategies on a demo account until confident

🔹 Avoid switching strategies too often

🔹 Keep a trading journal to record your trades

🔹 Combine methods: levels + indicators + price behavior`,
            },
            {
              type: "section",
              title: "Signals as Part of Strategy",
              text: "If you’re not ready to analyze the market on your own, use trading signals. The platform [TRADESIGNAL](https://TRADESIGNAL.com/register) offers signals based on algorithms and manual verification. Signals won’t replace your strategy, but they can strengthen it.",
            },
            {
              type: "quote",
              text: "A signal is not a substitute for a strategy. It’s a reinforcement.",
            },
            {
              type: "section",
              title: "How to Choose Signals",
              text: `- Check performance stats (success rate in recent days)
- Make sure the signal style matches your strategy
- Avoid late-night trading — high spreads and false movements
- Use signals within your system, not instead of it`,
            },
            {
              type: "section",
              title: "Conclusion",
              text: "Choosing a strategy leads to discipline and systematic trading. There’s no holy grail — but there is a method that works for you. Study, test, adapt — and the results will follow. And remember: **money loves order**.",
            },
          ],
        },
        {
          title: "Risk Management Methods",
          description:
            "Discover proven risk management strategies for binary options trading. Learn how to protect your capital and use our platform's signals effectively.",
          slug: "risk-management-methods",
          readingTime: 7,
          helmet: {
            pageTitle:
              "Risk Management Methods in Trading | Binary Options Trading",
            pageDescription:
              "Practical risk management methods that help traders preserve capital and trade consciously. Tips, approaches, and a platform with trading signals.",
            keywords: [
              "risk management",
              "trading",
              "binary options",
              "trading signals",
              "capital",
              "financial strategy",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Risk management chart" },
          blocks: [
            {
              type: "section",
              title: "What is Risk Management?",
              text: "Risk management is a set of strategies and rules aimed at minimizing losses while trading. In binary options, this is especially important since each contract can either result in profit or a complete loss of the investment. Without a clear approach to risk, a trader can quickly lose capital, even if the strategy seems profitable at first glance.",
              image: {
                src: "section-1.jpg",
                alt: "Financial risk and management",
              },
            },
            {
              type: "quote",
              text: "The key to survival in trading isn’t being right all the time, but losing as little as possible when you’re wrong.",
            },
            {
              type: "section",
              title: "Main Risk Management Methods",
              text: "There are many approaches that can reduce the impact of losing trades on your overall result. Here are the most important ones:",
            },
            {
              type: "list",
              title: "Popular Methods",
              items: [
                "Fixed percentage of the deposit per trade (1-5%)",
                "Using a demo account to test strategies",
                "Setting a daily loss limit",
                "Stopping trading after 2-3 consecutive losing trades",
                "Diversifying assets and timeframes",
              ],
            },
            {
              type: "section",
              title: "The Role of Psychology in Risk Management",
              text: "Psychological resilience is critical. Emotions are a trader’s biggest enemy. After a series of losses, don’t double your bets hoping to recover. Risk management is also about discipline. Set rules and stick to them. Keep a trading journal and analyze your mistakes.",
            },
            {
              type: "section",
              title: "How Our Signals Platform Helps",
              text: `Our intelligent signal system analyzes the market in real-time and provides accurate position opening recommendations. Thanks to built-in volatility filters and probability calculation algorithms, you can:

- Receive signals with high accuracy
- Manage risk by using only the most reliable entries
- Improve the stability of your results without spending hours on analysis

[Try the signals for free](https://TRADESIGNAL.com/register) and integrate safe trading into your strategy with us.`,
              image: { src: "section-2.png", alt: "Trading signals platform" },
            },
            {
              type: "section",
              title: "Conclusion",
              text: "Proper risk management is not an addition, but the foundation of successful trading. Even the most profitable strategy can be destroyed by one emotion or one mistake. Use clear rules, automated signals, and common sense to build sustainable long-term trading.",
            },
          ],
        },
        {
          title: "Martingale Strategy in Binary Options",
          description:
            "A step-by-step guide to applying the Martingale strategy in binary options trading. Principles, examples, risks, and tips for managing capital.",
          slug: "martingale-strategy",
          readingTime: 6,
          helmet: {
            pageTitle: "Martingale Strategy for Binary Options",
            pageDescription:
              "Learn how the Martingale strategy works: the principles of doubling the stake, risk management, and when to apply this method in binary options trading.",
            keywords: [
              "martingale",
              "martingale strategy",
              "capital management",
              "binary options",
              "trading",
              "risk management",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "Chart showing Martingale strategy doubling stakes",
          },
          blocks: [
            {
              type: "section",
              title: "What is the Martingale Strategy?",
              text: `Martingale is a capital management strategy based on doubling the stake after every losing trade. The goal is to recover all losses with one successful trade and make a profit.

Originally used in gambling, it was later adapted for trading. When applied correctly, it can be an effective tool in binary options.`,
            },
            {
              type: "quote",
              text: "Martingale is not about the market. It's about psychology and discipline.",
            },
            {
              type: "section",
              title: "How Does the Strategy Work?",
              text: `The principle is simple:

1. Make a trade with the minimum stake, e.g., $10.
2. If you lose, the next trade is $20.
3. Another loss means $40, and so on.
4. A win recovers all losses + profit.

**Important:**
- The stake always doubles.
- After a win, you return to the original stake.`,
            },
            {
              type: "image",
              src: "martingale-scheme.jpg",
              alt: "Martingale strategy diagram",
            },
            {
              type: "section",
              title: "Martingale Trading Example",
              text: `**Scenario:**
- Trade 1: $10 — loss (-$10)
- Trade 2: $20 — loss (-$30 total)
- Trade 3: $40 — profit (+$36)

**Result:** +$6 net profit for the cycle

The higher the stake, the faster you risk depleting your deposit. However, if the market is stable, the chances of success are high.`,
            },
            {
              type: "section",
              title: "Strategy Risks",
              text: `- Rapid depletion of the deposit
- False signals and losing streaks
- Emotional burnout
- Platform limits on maximum stake

Therefore, Martingale **is not recommended to be used without limits on the number of stages (steps)**.`,
            },
            {
              type: "section",
              title: "When to Apply?",
              text: `✅ In calm, predictable markets

✅ During periods of low volatility

✅ When there are accurate signals (e.g., from [TRADESIGNAL](https://TRADESIGNAL.com/register))

✅ If you strictly limit the number of doublings

❌ Do not use during news releases and strong market movements`,
            },
            {
              type: "section",
              title: "Alternatives and Enhancements",
              text: `- Limited Martingale (up to 3-4 steps)
- Combining with levels and indicators
- Using a signal platform like [TRADESIGNAL](https://TRADESIGNAL.com/register) to select entry points
- RSI + SMA strategy as a filter`,
            },
            {
              type: "section",
              title: "Conclusion",
              text: "Martingale is a powerful tool, but like a double-edged sword. Its strength lies in its simplicity, but its weakness lies in greed. If used wisely and with limits, it can become part of a profitable system. But only in combination with analytics and emotional control.",
            },
          ],
        },
        {
          title: "RSI + SMA Indicator Strategy",
          description:
            "An analysis of the strategy based on the combination of RSI and SMA indicators. The perfect balance between trend-following and oscillatory approaches for binary options.",
          slug: "rsi-sma-strategy",
          readingTime: 7,
          helmet: {
            pageTitle: "RSI + SMA Strategy — Powerful Indicator Approach",
            pageDescription:
              "Learn how to use the RSI + SMA strategy in binary options. Trading based on the oscillator and moving average signals. The best combination of indicators for market entry.",
            keywords: [
              "RSI",
              "SMA",
              "indicators",
              "technical analysis",
              "binary options",
              "trading strategy",
              "trading",
            ],
          },
          hero: { src: "hero-bg.png", alt: "Chart with RSI and SMA overlaid" },
          blocks: [
            {
              type: "section",
              title: "What is the RSI + SMA strategy?",
              text: `This strategy combines the power of two popular indicators: the RSI oscillator and the SMA moving average. It is suitable for both trend identification and finding entry points during pullbacks.

**RSI (Relative Strength Index)** shows the strength of the current momentum, while **SMA (Simple Moving Average)** helps track the overall market direction. Together, they provide cleaner entry signals.`,
            },
            {
              type: "quote",
              text: "One indicator — signal. Two — strategy. Three — noise.",
            },
            {
              type: "section",
              title: "How to set up RSI + SMA?",
              text: `1. Set RSI with a period of 14. Levels 30 (oversold) and 70 (overbought).
2. Add SMA with a period of 50 or 100 to the price chart.
3. Choose an asset with strong movements or regular pullbacks.`,
            },
            {
              type: "image",
              src: "rsi-sma-settings.jpg",
              alt: "RSI and SMA settings on the chart",
            },
            {
              type: "section",
              title: "Entry signals",
              text: `- **Buy 'Up' option:**
  - Price is above SMA
  - RSI is below 30 and starting to rise

- **Buy 'Down' option:**
  - Price is below SMA
  - RSI is above 70 and starting to decline`,
            },
            {
              type: "list",
              title: "Advantages of the strategy",
              items: [
                "Filters false signals from one indicator with the other",
                "Works on different timeframes",
                "Suitable for both beginners and experienced traders",
                "Easy to backtest",
              ],
            },
            {
              type: "section",
              title: "Disadvantages and limitations",
              text: `- Ineffective during [flat markets](https://www.investopedia.com/terms/f/flat.asp)
- Signal lag from SMA
- Possible false signals from RSI during high volatility

It is recommended to use with signals or Price Action.`,
            },
            {
              type: "section",
              title: "How to enhance the strategy?",
              text: `- Add support and resistance levels ([read the article](/wiki/support-resistance-strategy))
- Use signals from the [TRADESIGNAL](https://TRADESIGNAL.com/register) platform
- Set a limit on the number of trades per day
- Combine with Martingale, but limit the number of steps`,
            },
            {
              type: "section",
              title: "Conclusion",
              text: "RSI + SMA is a balanced strategy that can serve as a great foundation for systematic trading. It works particularly well in trending markets and can be easily adapted to your trading psychology.",
            },
          ],
        },
        {
          title: "Support and Resistance Trading",
          description:
            "A strategy based on analyzing key market levels. Ideal for binary options due to its high accuracy in entry points.",
          slug: "support-resistance-strategy",
          readingTime: 6,
          helmet: {
            pageTitle:
              "Support and Resistance Levels — The Foundation of Technical Analysis",
            pageDescription:
              "Learn how to effectively use support and resistance levels in binary options. A simple and reliable strategy for beginners and pros.",
            keywords: [
              "support and resistance",
              "technical analysis",
              "trading levels",
              "binary options",
              "trading strategy",
              "trading",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "Chart with support and resistance levels",
          },
          blocks: [
            {
              type: "section",
              title: "What are support and resistance levels?",
              text: "Support and resistance levels are horizontal zones on the chart where price often bounces. Support is the zone where demand exceeds supply, causing the price to reverse upward. Resistance is the opposite, where sellers overpower buyers and the price moves downward.",
            },
            {
              type: "quote",
              text: "Price always remembers where it stopped before.",
            },
            {
              type: "section",
              title: "How to find levels?",
              text: `- Look for areas on the chart where the price has bounced at least 2–3 times
- Use timeframes from 1H to 4H for reliable levels
- Combine with candlestick shadows and closing bodies`,
            },
            {
              type: "image",
              src: "levels-example.jpg",
              alt: "Example of levels on a chart",
            },
            {
              type: "section",
              title: "When to enter a trade?",
              text: `- **'Up' option:** Price approaches the support level and shows signs of reversal (hammer, bullish engulfing)
- **'Down' option:** Price touches resistance and starts declining (hanging man, bearish engulfing)

For stronger signals, use RSI or SMA (see [RSI + SMA strategy](/wiki/rsi-sma-strategy))`,
            },
            {
              type: "list",
              title: "Advantages",
              items: [
                "High entry accuracy",
                "Easy visual analysis",
                "Works on any platform",
                "Effective across all timeframes",
              ],
            },
            {
              type: "section",
              title: "What to keep in mind?",
              text: `- Levels are zones, not lines
- The market can 'break' a level with a false impulse
- Don't enter immediately — wait for confirmation with a candlestick or volume`,
            },
            {
              type: "section",
              title: "Tip from TRADESIGNAL",
              text: "We often build levels as part of automatic signals. Join the [TRADESIGNAL platform](https://TRADESIGNAL.com/register) to access accurate levels and confirmed entries.",
            },
            {
              type: "quote",
              text: "A well-built level is like a fortress. It holds the price until the market decides to start a war.",
            },
            {
              type: "section",
              title: "Conclusion",
              text: "Support and resistance levels are a fundamental technique on which dozens of strategies are built. They are easy to master and can be effectively applied in binary options, especially when combined with signals and indicators.",
            },
          ],
        },
        {
          title: "Choosing the Right Broker",
          description:
            "Learn how to choose the best broker for trading binary options.",
          slug: "choose-broker",
          readingTime: 6,
          helmet: {
            pageTitle: "How to Choose a Broker for Binary Options — A Guide",
            pageDescription:
              "Choosing a reliable broker: licenses, trading conditions, withdrawals, reviews, and support. A detailed guide for traders.",
            keywords: [
              "best binary options broker",
              "how to choose a broker",
              "broker for trading",
              "binary options",
              "reliable broker",
              "trading platform",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "Searching for a broker through a monitor",
          },
          blocks: [
            {
              type: "section",
              title: "Why is Choosing a Broker Critical?",
              text: "A broker is your bridge to the market. The conditions they offer determine how comfortable and safe your trading experience will be. Choosing the wrong broker can lead to issues with withdrawals, inaccurate quotes, or even fraud.",
            },
            {
              type: "quote",
              text: "A good broker doesn't hinder your trading. They help you grow.",
            },
            {
              type: "section",
              title: "Key Criteria for Choosing a Broker",
              text: "Before you start trading, check the broker against the following criteria:",
            },
            {
              type: "list",
              title: "What to Pay Attention To",
              items: [
                "**License and Regulation** — look for certifications from regulatory bodies (e.g., CySEC, IFMRRC).",
                "**User Reviews** — seek opinions on forums and independent websites, not just in ads.",
                "**Trading Conditions** — minimum deposit, commissions, available assets.",
                "**Platform** — interface ease of use, execution speed, mobile version availability.",
                "**Withdrawals** — speed, commissions, withdrawal limits.",
                "**Support** — availability of customer support, responsiveness.",
              ],
            },
            {
              type: "section",
              title: "What to Avoid?",
              text: `- Promises of guaranteed profits
- Platforms without licenses
- Unreasonably high bonuses with strict wagering requirements
- Withdrawal difficulties
- Aggressive managers pushing deals`,
            },
            {
              type: "section",
              title: "Recommended Platforms",
              text: `For starting, we recommend using trusted platforms such as:

- **[Pocket Option](https://pocketoption.com)** — easy registration, many assets, demo account.
- **[Quotex](https://quotex.io)** — IFMRRC license, user-friendly interface, fast payouts
- **[Binarium](https://binarium.com)** — Russian-speaking platform, focused on the CIS, with fast deposits/withdrawals and a simple interface
- **[TRADESIGNAL](https://TRADESIGNAL.com/register)** — our system provides signals compatible with major brokers.`,
            },
            {
              type: "section",
              title: "Conclusion",
              text: "Choosing a broker is like choosing a business partner. You need to trust them but also understand the risks. Don't rush. Compare the conditions, test on a demo account, and only then invest real money.",
            },
          ],
        },
      ],
    },
  },
  xR = { helmet: SR, common: _R, pages: bR },
  kR = {
    title: "TRADESIGNAL | Главная",
    pageTitle:
      "Бесплатные сигналы для бинарных опционов Pocket Option — TRADESIGNAL",
    description:
      "Получай лучшие сигналы на бинарные опционы бесплатно. Просто зарегистрируйся у брокера и начни зарабатывать с нами.",
    keywords: ["сигналы на бинарные опционы", "pocket option сигналы"],
  },
  ER = {
    description:
      "Современные инструменты откроют путь к успеху. Мы созданы для того, чтобы сделать трейдинг доступным, понятным и выгодным для всех. Получайте бесплатные сигналы на бинарные опционы с помощью нашей платформы.",
  },
  TR = {
    title: "Что мы предлагаем?",
    cards: [
      {
        title: "Интуитивный интерфейс",
        text: "Удобный интерфейс для легкого доступа и быстрых операций с любого устройства.",
      },
      {
        title: "Быстрый старт",
        text: "Мгновенно начните торговлю — регистрация занимает всего несколько минут, и вы готовы к рынку.",
      },
      {
        title: "Точные торговые сигналы",
        text: "Получайте актуальные сигналы для обоснованных решений в режиме реального времени.",
      },
    ],
  },
  OR = {
    title: "Как это работает?",
    cards: [
      {
        title: "Регистрация",
        text: "Зарегистрируйтесь на нашей платформе и начните использовать все её возможности.",
      },
      {
        title: "Пополнение счёта",
        text: "Используйте надёжные методы для быстрого пополнения счёта на брокерской платформе.",
      },
      {
        title: "Начинайте торговлю",
        text: "Используйте мощные инструменты нашей платформы для успешной торговли.",
      },
    ],
  },
  CR = {
    title: "Инструменты успеха",
    cards: [
      {
        title: "Аналитические графики",
        text: "Данные создают тренды, а графики — их истории. Представьте инструмент, раскрывающий потенциал рынка через удобную и понятную визуализацию, позволяя вам действовать уверенно и быстро…",
      },
      {
        title: "Торговые сигналы",
        text: "Чёткие сигналы в вихре рыночных изменений. Представьте источник, который помогает принимать важные решения, опираясь на проверенные данные, а не на интуицию. Найдите идеальные моменты для действий.",
      },
      {
        title: "Современный подход",
        text: "Искусственный интеллект меняет правила игры. Представьте систему, которая анализирует рынок в реальном времени, распознаёт скрытые закономерности и предоставляет точные торговые сигналы. Меньше догадок – больше обоснованных решений.",
      },
    ],
  },
  RR = {
    title: "FAQ",
    list: [
      {
        title: "Как начать торговлю на вашей платформе?",
        description:
          "Чтобы начать торговлю, зарегистрируйте аккаунт и пополните баланс у брокера Pocket Option. После этого вы готовы сделать свой первый шаг в трейдинге.",
      },
      {
        title: "Нужно ли платить за сигналы?",
        description:
          "Нет! Сигналы от TRADESIGNAL абсолютно бесплатные, но чтобы получить доступ, нужно быть нашим рефералом на Pocket Option и пополнить счёт на $10.",
      },
      {
        title: "Нужен ли опыт для торговли?",
        description:
          "Наша платформа разработана как для новичков, так и для профессионалов, поэтому начать может каждый.",
      },
      {
        title: "Что такое торговые сигналы и как ими пользоваться?",
        description:
          "Торговые сигналы — это рекомендации, которые помогают принимать решения о покупке или продаже активов на основе анализа рынка. Используйте их для повышения точности сделок.",
      },
      {
        title: "Какие методы пополнения счёта доступны?",
        description:
          "Пополнение счёта осуществляется на стороне платформы Pocket Option.",
      },
      {
        title: "Есть ли поддержка 24/7?",
        description:
          "Да, если у вас возникнут вопросы, вы можете обратиться к нашей команде через Telegram.",
      },
    ],
  },
  AR = {
    title: "Будьте в курсе всех трендов трейдинга!",
    description:
      "Регистрируйтесь и получайте доступ к аналитике, эксклюзивным стратегиям.",
  },
  PR = {
    helmet: kR,
    hero: ER,
    proposal: TR,
    howItWork: OR,
    tools: CR,
    questions: RR,
    cta: AR,
  },
  LR = "Регистрация",
  IR = "Авторизация",
  DR = "Copyright © {{year}} TRADESIGNAL | Все права защищены",
  NR = "Условия использования",
  jR = "Политика конфиденциальности",
  $R = "Политика файлов cookie",
  MR = "Мы используем файлы cookie",
  FR =
    "Продолжая использовать сайт, вы автоматически соглашаетесь с политикой сайта и файлами cookie.",
  UR = "Принять",
  BR = "Получить сигнал",
  zR = "Закрыть",
  VR = "или",
  HR = "Поддержка",
  WR = {
    online: "Онлайн посетители",
    plus: "Успешные сигналы",
    minus: "Неудачные сигналы",
  },
  qR = {
    aboutUs: "О нас",
    history: "История сделок",
    instruction: "Инструкция",
    signal: "Сигнал",
    account: "Мой кабинет",
    wiki: "Вики",
  },
  KR = {
    register: LR,
    authorization: IR,
    copyright: DR,
    termsAndConditions: NR,
    privacyPolicy: jR,
    cookiePolicy: $R,
    cookieNoticeMessage: MR,
    cookieAgreement: FR,
    cookieAccept: UR,
    getSignalBtn: BR,
    close: zR,
    or: VR,
    supportLink: HR,
    stats: WR,
    navMenu: qR,
  },
  GR = {
    getSignal: "Получить новый сигнал",
    passability: "Проходимость {{value}}%",
    anotherSignal: "Другой сигнал",
    back: "Вернуться назад",
    getSignalMartingale: "Догнать результат",
    toMain: "На главную",
    resetSignal: "Сбросить сигнал",
    searchSignalText: "Поиск сигнала",
    pendingPriceText: "Бот входит в сделку...",
    getSignalLoading: "Поиск сигнала...",
    timeTo: "Время на сделку до",
    resultAfter: "Результат через",
    buy: "Вверх",
    sell: "Вниз",
    signalSetting: "Настройки сигнала",
    signalInfo: "Информация",
    otcWarning:
      "Если валютная пара на брокере отображается как OTC, нажмите «Сбросить сигнал», чтобы получить новый.",
    vipFreeUntil: "VIP-алгоритм доступен до:",
  },
  YR = { title: "Пара" },
  QR = {
    helmet: {
      title: "TRADESIGNAL | Инструкция",
      pageTitle:
        "Инструкция по получению бесплатных торговых сигналов на TRADESIGNAL",
      description:
        "Простой пошаговый процесс для получения бесплатных торговых сигналов. Убедитесь, что вы следуете всем этапам и начинайте зарабатывать!",
      keywords: [
        "инструкция сигналы",
        "как получить сигналы",
        "бесплатные сигналы",
      ],
    },
  },
  JR = {
    chatgpt_4o:
      "Передовая модель искусственного интеллекта от OpenAI, использующая глубокое обучение для анализа рыночных данных. Она обрабатывает огромное количество информации в реальном времени, выявляя потенциальные сигналы с высокой точностью. Алгоритм учитывает не только технические данные, но и фундаментальные факторы, новости и поведенческий анализ рынка.",
    "TRADESIGNAL_ai_v1":
      "Первая версия нашего собственного алгоритма, разработанного на основе машинного обучения. Он анализирует исторические тренды, выявляет закономерности в рыночных движениях и использует их для прогнозирования будущих изменений. Алгоритм обучен на данных за несколько лет и способен находить сигналы на основе классических технических индикаторов и статистического анализа.",
    vip: "VIP-алгоритм — это эксклюзивная модель анализа, разработанная для профессиональных трейдеров, стремящихся к максимальной точности и эффективности. Этот алгоритм использует передовые технологии машинного обучения, анализирует огромные объемы данных в реальном времени и учитывает уникальные рыночные паттерны. VIP-алгоритм интегрирует фундаментальный анализ, технические индикаторы и поведенческие данные, чтобы предоставлять сигналы с высокой степенью надежности. Обратите внимание: он будет только пользователям с балансом от $1000.",
    "13_squad":
      "13 Squad — это уникальный аналитический индикатор, созданный в сотрудничестве с закрытым сообществом трейдеров. Он учитывает авторские паттерны, сигналы от опытных участников и нестандартные подходы к анализу рынка. Хотя он открыт для всех пользователей, наибольшую эффективность показывает в связке с рекомендациями и стратегиями сообщества. Присоединиться к сообществу можно через Telegram-бота: <0>@squad_13_bot</0>.",
    "TRADESIGNAL_ai_v2":
      "Улучшенная версия TRADESIGNAL AI, в которой добавлены более сложные модели машинного обучения. Она использует дополнительные параметры рынка, такие как объем торгов, корреляции между активами и временные паттерны. Улучшенная оптимизация алгоритмов позволяет повысить точность прогнозов, снизить количество ложных сигналов и учитывать больше рыночных условий при анализе.",
    "indicators_chatgpt_3.5":
      "Комбинированный метод анализа, использующий популярные технические индикаторы (например, RSI, MACD, Bollinger Bands) в сочетании с искусственным интеллектом ChatGPT 3.5. AI анализирует показания индикаторов, определяет возможные точки входа и выхода, а также интерпретирует данные для получения наиболее вероятных сценариев развития рынка. Метод подходит для краткосрочной и среднесрочной торговли.",
    "36trade_ai_plus":
      "Эксклюзивная система анализа, объединяющая машинное обучение, технические индикаторы и авторские алгоритмы предсказания трендов. 36Trade AI Plus учитывает не только классические методы анализа, но и данные об активности крупных игроков, ликвидность рынка и структуру ордеров. Это позволяет формировать наиболее точные прогнозы, снижая риск и повышая эффективность торговли.",
    manual:
      "Метод Manual предоставляет пользователю возможность самостоятельно выбирать валютную пару для анализа. Искусственный интеллект подключается к процессу и фокусируется именно на том активе, который указал трейдер. Такой подход позволяет гибко адаптировать анализ под индивидуальные стратегии и предпочтения. В отличие от полностью автоматических алгоритмов, здесь ключевая роль отводится выбору пользователя, а AI обеспечивает глубокую обработку данных по выбранному инструменту, выявляя возможные сигналы и сценарии развития рынка.",
  },
  XR = "Инструкция по получению сигналов",
  ZR =
    "Всё, что нужно для получения наших бесплатных торговых сигналов, это пройти несколько простых шагов. Регистрация на платформе Pocket Option, пополнение счёта на сумму от $10 и подключение к нашему сигналу. В нашей инструкции мы подробно покажем, как это сделать — быстро и без лишних вопросов.",
  e5 = [
    "Рискуй не более 2% депозита на одну сделку – защищай свой капитал.",
    "Тренд – твой союзник! Торгуй по направлению рынка, а не против него.",
    "Стоп-лосс – твой спасательный круг. Всегда ставь ограничение убытков.",
    "Не пересиживай убыточные сделки. Признай ошибку и закрой позицию.",
    "Трейдинг – это игра вероятностей. Ни одна стратегия не дает 100% успеха.",
    "Контролируй эмоции. Паника и жадность разрушают счет.",
    "Веди торговый журнал. Анализируй свои ошибки и успехи.",
    "Следи за экономическим календарем. Важные новости влияют на рынок.",
    "Не пытайся отыграться после потери. Месть рынку – путь к сливу.",
    "Регулярно совершенствуй свою стратегию. Рынок меняется – меняйся и ты.",
    "Меньше сделок – больше прибыли. Фильтруй рынок, не лови каждый сигнал.",
    "Главное оружие трейдера – терпение. Не спеши, жди лучшей возможности.",
    "Рынок не виноват в твоих убытках. Ответственность всегда на тебе.",
    "Выходи из сделки так же логично, как и входишь. Эмоциям тут не место.",
    "Тестируй стратегию на демо перед реальным счетом. Эксперименты стоят денег.",
    "Профит любит дисциплину. Следуй правилам, а не эмоциям.",
    "Если сомневаешься – не входи в рынок. Ожидание лучше неуверенной сделки.",
    "Главная цель – выжить в трейдинге, а не сорвать куш. Держи риски под контролем.",
    "Финансовые рынки всегда правы. А твое мнение – лишь гипотеза.",
    "Обучение – непрерывный процесс. Рынок меняется, учись вместе с ним.",
  ],
  t5 = { result: "Результат", open: "Цена открытия", close: "Цена закрытия" },
  n5 = {
    title: "Часто задаваемые вопросы",
    description: "Все, что вам нужно знать для успешного старта",
    card1Title: "Как начать торговлю на вашей платформе?",
    card1Description:
      "Чтобы начать, зарегистрируйте аккаунт, пополните свой счет и выберите инструменты для торговли. После этого вы готовы к первым сделкам.",
    card2Title: "Нужно ли иметь опыт для торговли?",
    card2Description:
      "Нет, наша платформа подходит как для новичков, так и для опытных трейдеров.",
    card3Title: "Что такое торговые сигналы и как ими пользоваться?",
    card3Description:
      "Торговые сигналы — это рекомендации по покупке или продаже активов на основе анализа рынка. Вы можете использовать их для принятия обоснованных решений при торговле.",
    card4Title: "Какие методы пополнения счета доступны?",
    card4Description:
      "Пополнение счета происходит на стороне платформы Pocket Option.",
    card5Title: "Есть ли поддержка 24/7?",
    card5Description:
      "Да, если у вас возникнут вопросы, вы можете обратиться к нашей команде через телеграм -",
  },
  r5 = "В данный момент сигналов нет, попробуйте еще раз через минуту!",
  i5 = "Догон через",
  o5 = {
    title: "Аналитика",
    techAnalysisBuyTitle: "Технический анализ на покупку",
    techAnalysisSellTitle: "Технический анализ на продажу",
    movingAverages: "Скользящие средние",
    trendPower: "Сила тренда",
    movePotential: "Потенциал движения",
    volumeAnalysisBuyTitle: "Объёмный анализ на покупку",
    volumeAnalysisSellTitle: "Объёмный анализ на продажу",
    sellerStrength: "Сила продавца",
    volumeProfile: "Объёмный профиль",
    crowdSentiment: "Настроение толпы",
    topSecret: "Пока что очень секретная информация",
  },
  s5 = {
    title: "Рынки сейчас отдыхают 💤",
    workingTimeText:
      "Мы работаем только с понедельника по пятницу с {{from}}:00 - {{to}}:00, так что заходите в рабочие дни, и мы поможем покорить финансовые вершины! 🚀",
  },
  a5 = {
    title: "Упс!",
    text: "На счете недостаточно средств для сигналов. 💳 Минимальная торговая сумма — ${{minBalance}}. Пополните баланс 💸 — и вперед к успеху! 🚀",
    currentBalance: "Ваш текущий баланс",
    checkBalanceBtn: "Проверить баланс",
    checkBalanceBtnLoading: "Проверяем баланс...",
    instructionBtn: "Как пополнить счет",
    loadingText:
      "Проверка вашего баланса у брокера Pocket Option в процессе. В зависимости от нагрузки проверка может занять от нескольких секунд до часа. Спасибо за ваше терпение!",
    checkingError:
      "К сожалению, ваш баланс меньше ${{minBalance}}. Если это не так, попробуйте выполнить проверку позже.",
    checkingSuccess: "Ваш баланс ${{balance}} подтвержден!",
    noTraderId:
      "Похоже, мы не можем найти ваш ID. Перезагрузите страницу и попробуйте снова!",
    vipBalanceCheck:
      "Для использования этого индикатора ваш баланс должен быть больше $1000. Ваш текущий баланс ${{balance}}.",
    faq: {
      title: "Отвечаем на ваши вопросы",
      info: {
        title: "Откуда у вас эта информация?",
        modalText1:
          "Мы сотрудничаем с брокером Pocket Option в рамках реферальной программы. Согласно нашим договоренностям, брокер выплачивает нам процент от вашего торгового оборота раз в год. Хотим подчеркнуть, что с вас не взимаются никакие дополнительные платежи или комиссии — все условия касаются исключительно нашего соглашения с брокером.",
        modalText2:
          "Если ваш баланс равен нулю, мы не получаем никакой прибыли от вашей активности. Именно по этой причине мы не можем предоставить доступ к нашему ресурсу, так как наш доход напрямую зависит от вашего оборота.",
        modalText3:
          "Дополнительно хотим отметить, что право на доступ к информации о вашем балансе предоставлено нам самим брокером. Это необходимо для обеспечения прозрачности наших отношений и выполнения условий реферальной программы.",
        modalText4:
          "Если у вас возникнут дополнительные вопросы, мы всегда готовы ответить и объяснить все детали!",
      },
      balance: {
        title: "Сайт не видит баланс?",
        attention: "Обратите внимание:",
        modalText1:
          "если вы только что пополнили баланс, но сайт все еще сообщает о недостатке средств, пожалуйста, подождите несколько минут.",
        modalText2:
          "Нам нужно время для получения актуальной информации о вашем балансе от брокера. Также обратите внимание, что бонусные средства не учитываются как часть доступного баланса.",
      },
    },
  },
  l5 = {
    hero: GR,
    currencySelector: YR,
    instruction: QR,
    analysis_methods: JR,
    instructionTitle: XR,
    instructionSubtitle: ZR,
    tradingTips: e5,
    result: t5,
    questions: n5,
    getSignalError: r5,
    automaticSignalText: i5,
    statistics: o5,
    workingTime: s5,
    checkBalance: a5,
  },
  u5 = "Электронная почта",
  c5 = "Пароль",
  f5 = "Повторите пароль",
  d5 = "Регистрация",
  p5 = "Регистрация в системе TRADESIGNAL",
  h5 = "Вход",
  g5 = "Вход в систему TRADESIGNAL",
  m5 = "Забыли пароль?",
  y5 = "Обновление пароля",
  v5 = "Назад",
  w5 = "Отправить запрос",
  S5 = "Введите свой Email",
  _5 =
    "Чтобы обновить пароль, введите свой Email, который мог использоваться в системе",
  b5 =
    "Мы отправили письмо на ваш электронный адрес. Проверьте почту и нажмите на ссылку в письме, чтобы сбросить пароль к аккаунту.",
  x5 = "Вы сможете повторно отправить письмо через:",
  k5 = "Почти готово!",
  E5 =
    "Для завершения регистрации и получения сигналов зарегистрируйте аккаунт по ссылке ниже и отправьте свой ID",
  T5 = "Регистрация на Pocket Option",
  O5 = "Где найти ID?",
  C5 = "Введите свой ID аккаунта",
  R5 = "Важно!",
  A5 =
    "Если у вас уже есть аккаунт, сначала выйдите из него (или удалите), а затем зарегистрируйтесь по этой ссылке. Иначе мы не получим ваш ID.",
  P5 = "Подтвердите, что вы не робот",
  L5 = "Уже есть аккаунт?",
  I5 = "Еще нет аккаунта?",
  D5 = "Введите новый пароль",
  N5 = "Установить пароль",
  j5 =
    "Пароль успешно обновлён, для продолжения вам нужно снова войти в аккаунт",
  $5 = "Вернуться ко входу",
  M5 = "Или",
  F5 = "Создать аккаунт",
  U5 = "Пожалуйста, подтвердите, что вы не робот",
  B5 = "Введите адрес электронной почты",
  z5 =
    "Пароль должен содержать минимум 8 символов, включать хотя бы одну строчную букву, одну заглавную букву, одну цифру и один специальный символ",
  V5 = "Пароль введён неправильно",
  H5 = "Введите правильный ID",
  W5 = {
    email: u5,
    password: c5,
    repeatPassword: f5,
    registration: d5,
    registrationDescription: p5,
    login: h5,
    loginDescription: g5,
    forgotPassword: m5,
    updatePasswordTitle: y5,
    back: v5,
    forgotPasswordButton: w5,
    forgotPasswordTitle: S5,
    forgotPasswordSubtitle: _5,
    forgotPasswordText: b5,
    forgotPasswordremainigText: x5,
    almostDone: k5,
    almostDoneDescription: E5,
    getRegister: T5,
    findAnId: O5,
    enterAccountId: C5,
    warningWord: R5,
    registerWarningText: A5,
    notARobotError: P5,
    alreadyHaveAnAccount: L5,
    dontHaveAnAccountYet: I5,
    newPassword: D5,
    newPasswordButton: N5,
    resetPasswordSuccessText: j5,
    backToLogin: $5,
    or: M5,
    createAnAccount: F5,
    pleaseVerify: U5,
    enterEmailAddress: B5,
    enterValidPassword: z5,
    incorrectlyPassword: V5,
    enterId: H5,
  },
  q5 = "Подтвердите свой email",
  K5 = "Чтобы войти, активируйте свой аккаунт через email",
  G5 =
    "Мы отправили письмо на ваш электронный адрес. Проверьте почту и нажмите на ссылку в письме, чтобы активировать свой аккаунт. Если не можете найти письмо, проверьте вкладку спам.",
  Y5 = "Отправить письмо снова",
  Q5 = "Вы сможете повторно отправить письмо через:",
  J5 = "Письмо повторно отправлено!",
  X5 = {
    title: "Вашу почту активировано!",
    subtitle: "Осталось совсем немного :)",
    button: "К следующему шагу",
  },
  Z5 = {
    title: q5,
    subtitle: K5,
    text: G5,
    button: Y5,
    remainigText: Q5,
    sendText: J5,
    activated: X5,
  },
  eA = "Личная информация",
  tA = "Безопасность",
  nA = "Для повышения безопасности обновить пароль можно только через почту",
  rA = "Изменить пароль",
  iA = "Письмо для смены пароля отправлено",
  oA = {
    privateInfo: eA,
    security: tA,
    passwordText: nA,
    resetPasswordBtn: rA,
    sendText: iA,
  },
  sA =
    "Чтобы получить ваш ID, необходимо зарегистрироваться у брокера. После регистрации вы сможете найти свой ID в личном кабинете.",
  aA = `Мы сотрудничаем с брокером по реферальной системе, чтобы предоставлять сигналы бесплатно для пользователей.
Наш доход формируется за счет реферальной программы брокера Pocket Option, который выплачивает нам 2% от годового оборота успешных сделок пользователей.
При этом пользователи ничего не теряют — комиссия начисляется со стороны брокера, а не с средств пользователей. Такой подход позволяет нам сохранять сервис бесплатным и поддерживать его качество на высоком уровне.`,
  lA =
    "Если у вас уже есть аккаунт у брокера Pocket Option без реферальной системы – вам нужно создать новый по нашей ссылке, иначе вы не сможете пользоваться этим сервисом.",
  uA = "Где найти ID?",
  cA = "Зачем вам мой ID?",
  fA = "У меня уже есть аккаунт у брокера",
  dA = {
    whereIsId: sA,
    idDescription: aA,
    alreadyHaveAccount: lA,
    whereIsIdText: uA,
    idDescriptionText: cA,
    alreadyHaveAccountText: fA,
  },
  pA = "Ваш ID проверяется",
  hA =
    "Мы проверяем вашу информацию. Это может занять несколько минут. Спасибо за ваше терпение!",
  gA = "Пока вы ждете, можете поиграть в игру!",
  mA = "Ваш ID не найден",
  yA = "Если вы уверены в правильности ID, попробуйте еще раз.",
  vA =
    "Ваш ID подтвержден! Через несколько секунд вас перенаправят на страницу сигналов.",
  wA = "Назад",
  SA = "Вас выбило из аккаунта...",
  _A = "Повторите вход и попробуйте снова!",
  bA = "Войти",
  xA = {
    title: pA,
    subtitle: hA,
    waitingGameText: gA,
    errorTitle: mA,
    errorSubtitle: yA,
    successMessage: vA,
    backBtn: wA,
    unauthorizedErrorTitle: SA,
    unauthorizedErrorSubtitle: _A,
    unauthorizedErrorBtn: bA,
  },
  kA = {
    title: "История сделок",
    cards: {
      total: "Всего сигналов",
      win: "Успешные сигналы",
      neutral: "Нейтральные сигналы",
      loss: "Неуспешные сигналы",
    },
    recommendations: {
      infoBtn: "Плохая статистика?",
      disclaimerText:
        "В случае, если негативных сигналов будет больше, чем позитивных, рекомендуем выбрать другое время для торговли.",
      list: {
        title: "Рекомендации",
        listContent: [
          "Проверяйте экономический календарь.",
          "Анализируйте рынок и следуйте тренду.",
          "Используйте риск-менеджмент.",
          "Избегайте торговли во время нестабильности.",
          "Анализируйте свои сделки для улучшения стратегии.",
        ],
        comingSoon: "Инструкции ко всем пунктам появятся скоро.",
      },
    },
  },
  EA = {
    title: "Cтатистика",
    filtersTitle: "Фильтры",
    resetBtn: "Сбросить",
    tableHead: {
      symbol: "Валютная пара",
      date: "Дата",
      aiModel: "ИИ",
      time: "Время",
      duration: "Продолжительность",
      result: "Результат",
    },
    tableBody: {
      2: "минуты",
      3: "минуты",
      5: "минут",
      7: "минут",
      10: "минут",
      noDataRow: "Вы еще не получали сигналы",
      scrollDown: "Листайте вниз чтобы увидеть больше",
    },
  },
  TA = { stats: kA, history: EA },
  OA = {
    title: "TRADESIGNAL | О нас",
    pageTitle: "TRADESIGNAL — кто мы и как помогаем зарабатывать",
    description:
      "Узнайте больше о команде TRADESIGNAL и нашей миссии по предоставлению бесплатных торговых сигналов.",
    keywords: ["TRADESIGNAL", "сигналы бинарные опционы"],
  },
  CA = "Мы анализируем",
  RA = "Создаем стратегии",
  AA = "Достигаем успеха",
  PA = {
    title: "Кто мы?",
    text1:
      "Мы меняем трейдинг, делая его простым, понятным и доступным. Вы ставите цели, а мы предоставляем инструменты, которые ведут к успеху.",
    text2:
      "Технологии и аналитика работают на вас. Мы создаем решения, которые снижают риски и максимизируют прибыль в каждой сделке.",
    text3:
      "Трейдинг – это ваша история, и мы делаем ее ярче. Удобный интерфейс, передовая аналитика и полная поддержка на каждом этапе – все это помогает вам достигать вершин.",
  },
  LA = {
    title: "Наша команда",
    members: [
      { name: "23", position: "Основатель и CEO" },
      {
        name: "Мария 'Поддержка'",
        position:
          "Мария помогает нашим клиентам оставаться довольными нашими услугами.",
      },
      {
        name: "Иван 'Предприниматель'",
        position:
          "Иван ищет новые возможности, создав платформу для новичков, которая помогла тысячам начать трейдинг.",
      },
      {
        name: "Алекс 'Инноватор'",
        position:
          "Алекс использует новейшие инструменты, разработав алгоритм для снижения рисков на волатильных рынках.",
      },
      {
        name: "Оля 'Аналитик'",
        position:
          "Оля находит закономерности в данных, создавая точные аналитические отчеты для трейдеров.",
      },
    ],
  },
  IA = {
    title: "Отзывы",
    cards: [
      {
        name: "Мария",
        feedback:
          "Я перепробовала много платформ, но эта – лучшая. Инструменты для анализа рынка настолько точны, что я смогла значительно снизить свои риски. А еще нравится, что здесь все продумано до мелочей, даже для новичков. Чувствуется, что платформа создана с заботой о пользователях.",
        date: "10.11.2024",
      },
      {
        name: "Екатерина",
        feedback:
          "Эта платформа – настоящая находка! Особенно впечатлила функция снижения рисков благодаря умным рекомендациям. За несколько месяцев я не только научилась эффективно инвестировать, но и построила стабильный доход. Спасибо за такую современную и надежную платформу!",
        date: "15.10.2024",
      },
      {
        name: "Дмитрий",
        feedback:
          "Торговля стала для меня проще и доступнее. Платформа объединила инновационные технологии и удобство использования. Больше всего нравятся интерактивные графики и возможность настроить все под свои нужды. Теперь я чувствую уверенность в каждой сделке.",
        date: "19.01.2025",
      },
      {
        name: "Назар",
        feedback:
          "Раньше трейдинг казался мне сложным и непонятным, но благодаря этой платформе все стало интуитивным и прозрачным. Передовая аналитика и удобный интерфейс позволяют принимать обоснованные решения, а поддержка команды всегда на высоте! Благодаря платформе я вышел на новый уровень прибыльности.",
        date: "02.02.2025",
      },
    ],
  },
  DA = {
    helmet: OA,
    title1: CA,
    title2: RA,
    title3: AA,
    who: PA,
    team: LA,
    feedbacks: IA,
  },
  NA = "Челлендж до Нового Года:",
  jA = "Совершите 10 сделок и выиграйте призы!",
  $A = {
    title: "Как принять участие?",
    accentWord: "участие",
    steps: [
      "Совершите 10 сделок на реальном балансе по сигналам AI.BOOST",
      "Минимальная сумма одной сделки — $10",
      "Все сделки должны быть завершены до 10 января включительно",
      "Розыгрыш состоится 10 января",
      "Если вы станете одним из победителей, вам нужно будет предоставить скриншоты своих сделок для подтверждения.",
    ],
    resultstitle:
      "В розыгрыше случайным образом будет выбрано 5 счастливчиков!",
    resultsSubtitle:
      "Уведомление о выигрыше вы получите на вашу электронную почту. Желаем удачи!",
    auth: "Для участия необходимо авторизоваться",
    join: "Принять участие!",
    joined: "Вы уже участвуете в конкурсе",
    joinedMsg: "Ваш email {{email}} был добавлен в список участников!",
  },
  MA = { title: "Наши призы для победителей!", accentWord: "победителей" },
  FA = {
    title: "Победители нашего конкурса",
    accentWord: "Победители",
    tradersTitle: "ТОП ТРЕЙДЕРОВ",
  },
  UA = {
    title: "Не упустите шанс выиграть автомобиль!",
    subtitle: "Начинайте торговать прямо сейчас!",
  },
  BA = {
    title: NA,
    subtitle: jA,
    instruction: $A,
    prizes: MA,
    winners: FA,
    present: UA,
  },
  zA = {
    title: "TRADESIGNAL | Вики",
    pageTitle:
      "Wiki по Бинарным Опционам — Стратегии, Гайды и Советы | TRADESIGNAL",
    description:
      "Изучи лучшую коллекцию статей по трейдингу на бинарных опционах. Освой стратегии, избегай ошибок и стань умнее вместе с TRADESIGNAL Wiki.",
    keywords: [
      "бинарные опционы",
      "торговля бинарными опционами",
      "стратегии бинарных опционов",
      "гайды по трейдингу",
      "советы по трейдингу",
      "управление рисками",
      "анализ рынка",
      "ошибки бинарных опционов",
      "как торговать бинарными опционами",
    ],
  },
  VA = {
    readMoreBtn: "Читать",
    readingTimeText: "мин",
    backWikiLinkText: "Назад к статьям",
    articleNotFound: "Статья не найдена",
    modal: {
      title: "Готовы начать торговать?",
      text: "Зарегистрируйтесь на **TRADESIGNAL** и получите доступ к точным торговым сигналам, инструкциям и стратегиям.",
      link: "Как это работает?",
    },
  },
  HA = {
    main: {
      title: "Изучи Наши Статьи по Бинарным Опционам",
      description:
        "Погрузись в нашу коллекцию полезных статей и прокачай свои знания в трейдинге.",
      libraryTitle: "Библиотека",
      articles: [
        {
          title: "Полное руководство по бинарным опционам",
          description:
            "Углублённый гид по бинарным опционам: как они работают, чем отличаются от других инструментов, их риски и стратегии. Разоблачение мифов о казино и пошаговое понимание механики трейдинга.",
          slug: "understanding-binary-options",
          readingTime: 10,
          helmet: {
            pageTitle:
              "Полное руководство по бинарным опционам | Финансовый трейдинг",
            pageDescription:
              "Что такое бинарные опционы? Полный гид для начинающих: определение, механика, регулирование, риски и стратегии. Научитесь отличать трейдинг от азартных игр.",
            keywords: [
              "бинарные опционы",
              "трейдинг",
              "финансовые инструменты",
              "инвестиции",
              "что такое бинарные опционы",
              "стратегии бинарных опционов",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "График бинарных опционов в реальном времени",
          },
          blocks: [
            {
              type: "section",
              title: "Определение бинарных опционов",
              text: "Бинарные опционы — это тип финансового контракта, который предоставляет трейдеру два возможных исхода: фиксированную прибыль или полный убыток. Это делает их простым, но мощным инструментом. В отличие от азартных игр, бинарный опцион основывается на рыночном анализе и прогнозировании движения цены актива за фиксированный период времени.",
              image: {
                src: "section-1.jpg",
                alt: "Диаграмма: как работает бинарный опцион",
              },
            },
            {
              type: "section",
              title: "Как работает бинарный опцион?",
              text: `Трейдер выбирает актив (например, EUR/USD), прогнозирует направление цены (выше или ниже), указывает срок экспирации (от 30 секунд до нескольких часов) и сумму сделки. 

Если по истечении времени цена оказалась в направлении прогноза — выплата составляет до 90% прибыли. Если нет — трейдер теряет вложенную сумму. 

Пример: если вы считаете, что цена биткоина поднимется в течение 5 минут, вы покупаете опцион «Выше». Если прогноз сбудется — вы получаете фиксированную прибыль.`,
              image: {
                src: "section-2.jpg",
                alt: "Сценарий бинарной торговли",
              },
            },
            {
              type: "section",
              title: "Бинарные опционы — не казино",
              text: `Многие путают бинарные опционы с азартными играми. Однако трейдинг требует анализа, управления рисками и стратегического подхода. Разница между казино и бинарной торговлей — в том, что трейдер использует технический и фундаментальный анализ, а не полагается на удачу. 

Профессиональные платформы предлагают демо-счета, графики, индикаторы и обучающий материал, недоступный в азартных играх.`,
              image: {
                src: "section-3.jpg",
                alt: "Сравнение: трейдинг vs казино",
              },
            },
            {
              type: "list",
              title: "Преимущества бинарных опционов",
              items: [
                "Простой и понятный интерфейс",
                "Фиксированный риск и доходность",
                "Быстрые сделки (доход за минуты)",
                "Не требуется владение активом",
                "Доступен старт с минимальным капиталом",
              ],
            },
            {
              type: "list",
              title: "Риски и недостатки",
              items: [
                "Высокая волатильность может привести к убыткам",
                "Нелицензированные брокеры и мошенники",
                "Не подходит для долгосрочных инвестиций",
                "Требует самоконтроля и стратегии",
              ],
            },
            {
              type: "section",
              title: "Где торговать: надёжные платформы",
              text: `Важно выбирать только регулируемых брокеров. Вот несколько надёжных платформ с хорошей репутацией:

- [Pocket Option](https://pocketoption.com) — популярный брокер с демо-счётом и лицензией IFMRRC
- [IQ Option](https://iqoption.com) — продвинутый интерфейс и мобильное приложение
- [Deriv](https://deriv.com) — регулирование и разнообразие активов
- [Binarium](https://binarium.com) — русскоязычная платформа, ориентированная на СНГ, с быстрым вводом/выводом и простым интерфейсом

Перед началом торговли убедитесь в наличии лицензии (например, CySEC, IFMRRC, ASIC). Также полезно протестировать платформу на демо-счёте и изучить пользовательские отзывы.`,
              image: {
                src: "section-4.jpg",
                alt: "Список лицензированных брокеров",
              },
            },
            {
              type: "quote",
              text: "Надёжный брокер — это не гарантия прибыли, но первый шаг к её возможности.",
            },
            {
              type: "section",
              title: "Рекомендованные стратегии",
              text: `Некоторые популярные стратегии для бинарной торговли:

- **Стратегия по тренду:** торговля в направлении доминирующего тренда
- **Уровни поддержки/сопротивления:** вход при отскоке от ключевых уровней
- **Индикаторы RSI и MACD:** выявление перекупленности или перепроданности.`,
            },
            {
              type: "section",
              title: "Заключение",
              text: "Бинарные опционы — это легитимный инструмент краткосрочного трейдинга, при условии, что используется надёжный брокер и трейдер действует осознанно. Это не способ быстро разбогатеть, а способ заработка для дисциплинированного, обученного трейдера.",
            },
          ],
        },
        {
          title: "Стратегии успешной торговли",
          description:
            "Изучите проверенные стратегии, которые помогут вам стабильно зарабатывать на бинарных опционах. Подходит для трейдеров всех уровней.",
          slug: "successful-trading-strategies",
          readingTime: 8,
          helmet: {
            pageTitle: "Эффективные стратегии бинарной торговли",
            pageDescription:
              "Полное руководство по стратегиям: мартингейл, уровни, RSI + SMA и другие. Повысьте свой уровень в бинарном трейдинге с помощью проверенных методов и сигналов.",
            keywords: [
              "стратегии бинарных опционов",
              "эффективная торговля",
              "мартингейл",
              "уровни поддержки и сопротивления",
              "RSI",
              "Price Action",
              "новостной трейдинг",
              "торговые сигналы",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Финансовая стратегия на графике" },
          blocks: [
            {
              type: "section",
              title: "Почему стратегия важна?",
              text: "Торговля бинарными опционами — это не азарт, а система. Каждая успешная сделка — результат расчёта, анализа и выбранной методики. Стратегия позволяет исключить эмоции и строить стабильный рост капитала.",
            },
            {
              type: "quote",
              text: "Стратегия — это компас в океане рынка. Без неё вы лишь дрейфуете.",
            },
            {
              type: "section",
              title: "Популярные стратегии",
              text: "Рассмотрим самые эффективные стратегии, которые используют как новички, так и профессионалы. Каждая из них имеет свои особенности и подходит под разные рыночные условия.",
              image: {
                src: "section-1.jpg",
                alt: "Популярные стратегии бинарных опционов",
              },
            },
            {
              type: "list",
              title: "Топ-стратегии",
              items: [
                "[**Price Action**](https://ru.tradingview.com/chart/XAUUSD/OYk6OIpF-price-action-vs-smart-money-chto-vybratb-dlya-uspeshnoj-torgovli/) — анализ чистого графика без индикаторов. Основывается на свечных паттернах и уровнях. Требует опыта и внимания к деталям.",
                "[**Мартингейл**](/wiki/martingale-strategy) — стратегия удвоения ставки после каждого убытка. Работает на стабильных, маловолатильных рынках. Важно контролировать депозит и не использовать её без ограничений.",
                "[**Стратегия уровней**](/wiki/support-resistance-strategy) — работа на отбой или пробой уровней поддержки и сопротивления. Хорошо сочетается с индикаторами объема и свечным анализом.",
                "[**RSI + SMA**](/wiki/rsi-sma-strategy) — комбинированный подход, где индикатор RSI определяет перекупленность/перепроданность, а SMA подтверждает направление тренда.",
                "[**Новостной трейдинг**](https://ru.tradingview.com/news/) — торговля на резких движениях во время публикации новостей. Требует быстрой реакции и умения работать с экономическим календарём.",
              ],
            },
            {
              type: "section",
              title: "Разбор: стратегия Мартингейл",
              text: `Мартингейл — метод управления капиталом, при котором вы удваиваете ставку после каждой убыточной сделки. Цель — перекрытие предыдущих убытков одним выигрышем. Пример:

1. Вы ставите $10 и теряете.
2. Следующая ставка — $20.
3. Если снова проигрыш — $40.
4. После выигрыша вы возвращаете всё и получаете прибыль.

**Риски**: быстрый слив депозита, особенно без ограничений.

**Подходит для**: стабильных рынков и коротких таймфреймов.

**Не подходит для**: новостной волатильности.`,
            },
            {
              type: "section",
              title: "Когда использовать уровни?",
              text: `Уровни сопротивления и поддержки — базовый элемент технического анализа. Стратегия работает по принципу:

- Цена подходит к уровню → ищем сигнал на отбой
- Цена пробивает уровень → ищем вход в направлении пробоя

Комбинируется с RSI, свечными паттернами, объёмом.`,
            },
            {
              type: "section",
              title: "Советы по использованию стратегий",
              text: `🔹 Тестируйте на демо-счёте до уверенности

🔹 Не переключайтесь между стратегиями слишком часто

🔹 Записывайте сделки и ведите трейдинг-дневник

🔹 Комбинируйте методы: уровни + индикаторы + поведение цены`,
            },
            {
              type: "section",
              title: "Сигналы как часть стратегии",
              text: "Если вы не готовы самостоятельно анализировать рынок — подключите сигналы. Платформа [TRADESIGNAL](https://TRADESIGNAL.com/register) предоставляет сигналы, основанные на алгоритмах и проверке вручную. Это не заменит вашу стратегию, но усилит её.",
            },
            {
              type: "quote",
              text: "Сигнал — это не замена стратегии. Это её усиление.",
            },
            {
              type: "section",
              title: "Как выбрать сигналы?",
              text: `- Проверяйте статистику (успешные сделки за последние дни)
- Убедитесь, что стиль сигналов совпадает с вашей стратегией
- Избегайте торговли ночью — высокий спред и ложные движения
- Используйте сигналы в рамках своей системы, а не вместо неё`,
            },
            {
              type: "section",
              title: "Итоги",
              text: "Выбор стратегии — это путь к дисциплине и системному трейдингу. Не существует 'святого Грааля', но существует подход, который работает лично для вас. Изучайте, тестируйте, адаптируйте — и результат придёт. И не забывайте: **деньги любят порядок**.",
            },
          ],
        },
        {
          title: "Методы управления рисками",
          description:
            "Откройте для себя проверенные стратегии управления рисками в трейдинге бинарными опционами. Научитесь защищать свой капитал и использовать сигналы нашей платформы эффективно.",
          slug: "risk-management-methods",
          readingTime: 7,
          helmet: {
            pageTitle:
              "Методы управления рисками в трейдинге | Торговля бинарными опционами",
            pageDescription:
              "Практические методы управления рисками, которые помогают трейдерам сохранять капитал и торговать осознанно. Рекомендации, подходы, платформа с торговыми сигналами.",
            keywords: [
              "управление рисками",
              "трейдинг",
              "бинарные опционы",
              "сигналы для трейдинга",
              "капитал",
              "финансовая стратегия",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "График управления рисками" },
          blocks: [
            {
              type: "section",
              title: "Что такое управление рисками?",
              text: "Управление рисками — это совокупность стратегий и правил, направленных на минимизацию потерь при торговле. В трейдинге бинарными опционами это особенно важно, ведь каждый контракт может закончиться либо прибылью, либо полной потерей инвестиции. Без чёткого подхода к риску трейдер быстро теряет капитал, даже если стратегия кажется выигрышной на первый взгляд.",
              image: {
                src: "section-1.jpg",
                alt: "Финансовый риск и управление",
              },
            },
            {
              type: "quote",
              text: "Ключ к выживанию в трейдинге — не в том, чтобы быть всегда правым, а в том, чтобы потерять как можно меньше, когда ты ошибаешься.",
            },
            {
              type: "section",
              title: "Основные методы управления рисками",
              text: "Существует множество подходов, которые позволяют снизить влияние убыточных сделок на общий результат. Вот самые важные:",
            },
            {
              type: "list",
              title: "Популярные методы",
              items: [
                "Фиксированный процент от депозита на сделку (1–5%)",
                "Использование демо-счёта для тестирования стратегий",
                "Установка дневного лимита убытков",
                "Прекращение торговли после 2–3 убыточных сделок подряд",
                "Диверсификация активов и временных интервалов",
              ],
            },
            {
              type: "section",
              title: "Роль психологии в управлении рисками",
              text: "Психологическая устойчивость критически важна. Эмоции — главный враг трейдера. После серии неудач не стоит удваивать ставки в надежде отыграться. Управление рисками — это и про дисциплину. Установите правила и не отступайте от них. Ведите дневник сделок и анализируйте ошибки.",
            },
            {
              type: "section",
              title: "Как помогает наша платформа сигналов",
              text: `Наша интеллектуальная система сигналов анализирует рынок в реальном времени и предоставляет точные рекомендации по открытию позиций. Благодаря встроенным фильтрам волатильности и алгоритмам расчёта вероятностей, вы можете:

- Получать сигналы с высокой точностью
- Управлять риском, используя только самые надёжные входы
- Повышать стабильность своих результатов, не тратя часы на анализ

[Попробуйте сигналы бесплатно](https://TRADESIGNAL.com/register) и включите в свою стратегию безопасную торговлю с нами.`,
              image: {
                src: "section-2.png",
                alt: "Платформа с торговыми сигналами",
              },
            },
            {
              type: "section",
              title: "Выводы",
              text: "Грамотное управление рисками — это не дополнение, а основа успешной торговли. Даже самая прибыльная стратегия может быть уничтожена одной эмоцией или одной ошибкой. Используйте чёткие правила, автоматизированные сигналы и здравый смысл, чтобы построить устойчивую торговлю в долгосрочной перспективе.",
            },
          ],
        },
        {
          title: "Стратегия Мартингейл в бинарных опционах",
          description:
            "Пошаговое руководство по применению стратегии Мартингейл в трейдинге бинарными опционами. Принципы, примеры, риски и советы по управлению капиталом.",
          slug: "martingale-strategy",
          readingTime: 6,
          helmet: {
            pageTitle: "Мартингейл стратегия для бинарных опционов",
            pageDescription:
              "Узнайте, как работает стратегия Мартингейл: принципы удвоения ставки, управление рисками и когда стоит применять этот метод в трейдинге бинарными опционами.",
            keywords: [
              "мартингейл",
              "стратегия мартингейл",
              "управление капиталом",
              "бинарные опционы",
              "трейдинг",
              "риск-менеджмент",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "График с удвоением ставок по стратегии Мартингейл",
          },
          blocks: [
            {
              type: "section",
              title: "Что такое стратегия Мартингейл?",
              text: `Мартингейл — это стратегия управления капиталом, основанная на удвоении ставки после каждой убыточной сделки. Цель — компенсировать все убытки одним успешным трейдом и получить прибыль.

Изначально использовалась в азартных играх, но затем была адаптирована под трейдинг. При правильном применении может быть эффективным инструментом в бинарных опционах.`,
            },
            {
              type: "quote",
              text: "Мартингейл не про рынок. Он про психологию и дисциплину.",
            },
            {
              type: "section",
              title: "Как работает стратегия?",
              text: `Принцип прост:

1. Совершаете сделку на минимальную ставку, например $10.
2. Если проигрыш — следующая сделка $20.
3. Снова проигрыш — $40, и так далее.
4. Один выигрыш возвращает все потери + прибыль.

**Важно:**
- Ставка всегда удваивается
- После выигрыша вы возвращаетесь к первоначальной ставке`,
            },
            {
              type: "image",
              src: "martingale-scheme.jpg",
              alt: "Схема стратегии Мартингейл",
            },
            {
              type: "section",
              title: "Пример торговли с Мартингейл",
              text: `**Сценарий:**
- Сделка 1: $10 — убыток (-$10)
- Сделка 2: $20 — убыток (-$30 суммарно)
- Сделка 3: $40 — прибыль (+$36)

**Итог:** +$6 чистой прибыли за цикл

Чем выше ставка — тем быстрее вы рискуете слить депозит. Но если рынок стабилен — шансы на успех велики.`,
            },
            {
              type: "section",
              title: "Риски стратегии",
              text: `- Быстрое истощение депозита
- Ложные сигналы и серии убытков
- Эмоциональное выгорание
- Ограничения платформ по максимальной ставке

Поэтому Мартингейл **не рекомендуется использовать без ограничений по количеству колен (этапов)**.`,
            },
            {
              type: "section",
              title: "Когда применять?",
              text: `✅ На спокойных, предсказуемых рынках

✅ В периоды невысокой волатильности

✅ При наличии точных сигналов (например, от [TRADESIGNAL](https://TRADESIGNAL.com/register))

✅ Если вы строго ограничиваете количество удвоений

❌ Не использовать во время выхода новостей и сильных движений`,
            },
            {
              type: "section",
              title: "Альтернативы и усиления",
              text: `- Ограниченный Мартингейл (до 3-4 колен)
- Комбинирование с уровнями и индикаторами
- Использование сигнальной платформы [TRADESIGNAL](https://TRADESIGNAL.com/register) для отбора точек входа
- Стратегия [RSI + SMA](/wiki/rsi-sma-strategy) как фильтр`,
            },
            {
              type: "section",
              title: "Заключение",
              text: "Мартингейл — мощный инструмент, но как меч с двумя лезвиями. Его сила в простоте, но слабость — в жадности. Если использовать с умом и ограничениями, он может стать частью прибыльной системы. Но только в сочетании с аналитикой и контролем эмоций.",
            },
          ],
        },
        {
          title: "Индикаторная стратегия RSI + SMA",
          description:
            "Разбор стратегии, основанной на сочетании индикаторов RSI и скользящей средней SMA. Идеальный баланс между трендовым и осцилляторным подходом для бинарных опционов.",
          slug: "rsi-sma-strategy",
          readingTime: 7,
          helmet: {
            pageTitle: "Стратегия RSI + SMA — мощный индикаторный подход",
            pageDescription:
              "Узнайте, как использовать стратегию RSI + SMA в бинарных опционах. Торговля по сигналам осциллятора и скользящей средней. Лучшее сочетание индикаторов для входа в рынок.",
            keywords: [
              "RSI",
              "SMA",
              "индикаторы",
              "технический анализ",
              "бинарные опционы",
              "торговая стратегия",
              "трейдинг",
            ],
          },
          hero: { src: "hero-bg.png", alt: "График с наложенными RSI и SMA" },
          blocks: [
            {
              type: "section",
              title: "Что такое стратегия RSI + SMA?",
              text: `Эта стратегия сочетает силу двух популярных индикаторов: осциллятора RSI и скользящей средней SMA. Она подходит как для выявления трендов, так и для поиска точек входа при откатах.

**RSI (Relative Strength Index)** показывает силу текущего импульса, а **SMA (Simple Moving Average)** помогает отследить общее направление рынка. Вместе они дают более чистые сигналы для входа.`,
            },
            {
              type: "quote",
              text: "Один индикатор — сигнал. Два — стратегия. Три — шум.",
            },
            {
              type: "section",
              title: "Как настроить RSI + SMA?",
              text: `1. Установите RSI с периодом 14. Уровни 30 (перепроданность) и 70 (перекупленность).
2. Добавьте SMA с периодом 50 или 100 на график цены.
3. Выберите актив с выраженным движением или регулярными откатами.`,
            },
            {
              type: "image",
              src: "rsi-sma-settings.jpg",
              alt: "Настройки RSI и SMA на графике",
            },
            {
              type: "section",
              title: "Сигналы на вход",
              text: `- **Покупка опциона 'Выше':**
  - Цена выше SMA
  - RSI находится ниже 30 и начинает расти

- **Покупка опциона 'Ниже':**
  - Цена ниже SMA
  - RSI выше 70 и начинает снижаться`,
            },
            {
              type: "list",
              title: "Преимущества стратегии",
              items: [
                "Фильтрация ложных сигналов одного индикатора другим",
                "Работает на разных таймфреймах",
                "Подходит как для начинающих, так и для опытных трейдеров",
                "Легко тестируется на истории",
              ],
            },
            {
              type: "section",
              title: "Недостатки и ограничения",
              text: `- Неэффективна во время [флэта](https://gerchik.com/azbuka-trejdera/flat)
- Задержка сигнала от SMA
- Возможны ложные сигналы RSI при высокой волатильности

Рекомендуется использовать в связке с сигналами или Price Action.`,
            },
            {
              type: "section",
              title: "Как усилить стратегию?",
              text: `- Добавить уровни поддержки и сопротивления ([читай статью](/wiki/support-resistance-strategy))
- Использовать сигналы от платформы [TRADESIGNAL](https://TRADESIGNAL.com/register)
- Ставить лимит на количество сделок в день
- Комбинировать с Мартингейл, но ограничивать число колен`,
            },
            {
              type: "section",
              title: "Заключение",
              text: "RSI + SMA — это сбалансированная стратегия, которая может стать отличной основой для системной торговли. Она особенно хорошо работает на трендовых рынках и может быть легко адаптирована под вашу торговую психологию.",
            },
          ],
        },
        {
          title: "Торговля от уровней поддержки и сопротивления",
          description:
            "Стратегия, основанная на анализе ключевых уровней рынка. Идеальна для бинарных опционов благодаря высокой точности точек входа.",
          slug: "support-resistance-strategy",
          readingTime: 6,
          helmet: {
            pageTitle:
              "Уровни поддержки и сопротивления — основа технического анализа",
            pageDescription:
              "Узнайте, как эффективно использовать уровни поддержки и сопротивления в бинарных опционах. Простая и надёжная стратегия для начинающих и профи.",
            keywords: [
              "поддержка и сопротивление",
              "технический анализ",
              "торговые уровни",
              "бинарные опционы",
              "стратегия торговли",
              "трейдинг",
            ],
          },
          hero: {
            src: "hero-bg.jpg",
            alt: "График с уровнями поддержки и сопротивления",
          },
          blocks: [
            {
              type: "section",
              title: "Что такое уровни поддержки и сопротивления?",
              text: "Уровни поддержки и сопротивления — это горизонтальные зоны на графике, от которых цена часто отскакивает. Поддержка — это зона, где спрос превышает предложение и цена разворачивается вверх. Сопротивление — наоборот, где продавцы побеждают покупателей и цена уходит вниз.",
            },
            {
              type: "quote",
              text: "Цена всегда помнит, где она останавливалась раньше.",
            },
            {
              type: "section",
              title: "Как находить уровни?",
              text: `- Ищите участки на графике, где цена минимум 2–3 раза отскакивала
- Используйте таймфреймы от 1H до 4H для надёжных уровней
- Комбинируйте с тенями свечей и телами закрытия`,
            },
            {
              type: "image",
              src: "levels-example.jpg",
              alt: "Пример уровней на графике",
            },
            {
              type: "section",
              title: "Когда входить в сделку?",
              text: `- **Опцион 'Выше':** Цена подходит к уровню поддержки и показывает признаки разворота (молот, бычье поглощение)
- **Опцион 'Ниже':** Цена касается сопротивления и начинает снижаться (повешенный, медвежье поглощение)

Для усиления сигнала используйте RSI или SMA (см. [стратегию RSI + SMA](/wiki/rsi-sma-strategy))`,
            },
            {
              type: "list",
              title: "Преимущества",
              items: [
                "Высокая точность входа",
                "Простота визуального анализа",
                "Подходит для любой платформы",
                "Работает на всех таймфреймах",
              ],
            },
            {
              type: "section",
              title: "Что стоит учитывать?",
              text: `- Уровни — это не линии, а зоны
- Рынок может «пробить» уровень ложным импульсом
- Не входите сразу — дождитесь подтверждения свечой или объёмом`,
            },
            {
              type: "section",
              title: "Совет от TRADESIGNAL",
              text: "Мы часто строим уровни в рамках автоматических сигналов. Присоединяйтесь к [платформе TRADESIGNAL](https://TRADESIGNAL.com/register), чтобы получить доступ к точным уровням и подтверждённым входам.",
            },
            {
              type: "quote",
              text: "Хорошо построенный уровень — это как крепость. Он держит цену, пока рынок не решит начать войну.",
            },
            {
              type: "section",
              title: "Вывод",
              text: "Уровни поддержки и сопротивления — это фундаментальная техника, на которой строятся десятки стратегий. Их легко освоить и эффективно применять в бинарных опционах, особенно в сочетании с сигналами и индикаторами.",
            },
          ],
        },
        {
          title: "Выбор подходящего брокера",
          description:
            "Узнайте, как выбрать лучшего брокера для торговли бинарными опционами.",
          slug: "choose-broker",
          readingTime: 6,
          helmet: {
            pageTitle: "Как выбрать брокера для бинарных опционов — инструкция",
            pageDescription:
              "Выбираем надёжного брокера: лицензии, условия торговли, вывод средств, отзывы и поддержка. Подробное руководство для трейдеров.",
            keywords: [
              "лучший брокер бинарных опционов",
              "как выбрать брокера",
              "брокер для трейдинга",
              "бинарные опционы",
              "надежный брокер",
              "торговая платформа",
            ],
          },
          hero: { src: "hero-bg.jpg", alt: "Поиск брокера через монитор" },
          blocks: [
            {
              type: "section",
              title: "Почему выбор брокера критичен?",
              text: "Брокер — это ваш мост к рынку. От его условий зависит, насколько комфортно и безопасно вы сможете торговать. Неправильный выбор приведёт к проблемам с выводом средств, неадекватными котировками и даже мошенничеству.",
            },
            {
              type: "quote",
              text: "Хороший брокер не мешает торговать. Он помогает вам расти.",
            },
            {
              type: "section",
              title: "Ключевые критерии выбора",
              text: "Прежде чем начать торговать, проверьте брокера по следующим параметрам:",
            },
            {
              type: "list",
              title: "На что обратить внимание",
              items: [
                "**Лицензия и регулирование** — наличие сертификатов от регулирующих органов (например, CySEC, IFMRRC).",
                "**Отзывы пользователей** — ищите мнения на форумах и независимых сайтах, а не только в рекламе.",
                "**Условия торговли** — минимальный депозит, комиссии, доступные активы.",
                "**Платформа** — удобство интерфейса, скорость исполнения, наличие мобильной версии.",
                "**Вывод средств** — скорость, комиссии, лимиты на вывод.",
                "**Поддержка** — наличие службы поддержки, оперативность ответов.",
              ],
            },
            {
              type: "section",
              title: "Чего стоит избегать?",
              text: `- Обещания гарантированной прибыли
- Платформы без лицензий
- Неадекватно высокие бонусы с жёсткими условиями отработки
- Сложности при выводе средств
- Агрессивные менеджеры, которые навязывают сделки`,
            },
            {
              type: "section",
              title: "Рекомендуемые платформы",
              text: `Для старта мы рекомендуем использовать проверенные платформы, такие как:

- **[Pocket Option](https://pocketoption.com)** — простая регистрация, множество активов, демо-счёт.
- **[Quotex](https://quotex.io)** — лицензия IFMRRC, удобный интерфейс и быстрые выплаты
- **[Binarium](https://binarium.com)** — русскоязычная платформа, ориентированная на СНГ, с быстрым вводом/выводом и простым интерфейсом
- **[TRADESIGNAL](https://TRADESIGNAL.com/register)** — наша система предоставляет сигналы, совместимые с крупными брокерами.`,
            },
            {
              type: "section",
              title: "Заключение",
              text: "Выбор брокера — это как выбор партнёра по бизнесу. Вы должны ему доверять, но при этом понимать риски. Не спешите. Сравните условия, потестируйте на демо-счёте, и только потом инвестируйте реальные средства.",
            },
          ],
        },
      ],
    },
  },
  WA = { helmet: zA, common: VA, pages: HA };
mt.use(Y_)
  .use(_1)
  .init({
    resources: {
      uk: {
        common: rT,
        home: BE,
        signal: vT,
        auth: t4,
        activation: u4,
        account: g4,
        idInstruction: b4,
        checkId: I4,
        history: j4,
        aboutUs: H4,
        contest: J4,
        wiki: tO,
      },
      en: {
        common: EO,
        home: uO,
        signal: UO,
        auth: xC,
        activation: PC,
        account: $C,
        idInstruction: HC,
        checkId: tR,
        history: iR,
        aboutUs: dR,
        contest: wR,
        wiki: xR,
      },
      ru: {
        common: KR,
        home: PR,
        signal: l5,
        auth: W5,
        activation: Z5,
        account: oA,
        idInstruction: dA,
        checkId: xA,
        history: TA,
        aboutUs: DA,
        contest: BA,
        wiki: WA,
      },
    },
    ns: [
      "common",
      "home",
      "signal",
      "auth",
      "account",
      "activation",
      "idInstruction",
      "checkId",
      "history",
      "aboutUs",
      "contest",
      "wiki",
    ],
    interpolation: { escapeValue: !1 },
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    defaultNS: "common",
    fallbackLng: "uk",
    supportedLngs: ["en", "uk", "ru"],
  });
const qA = "_loaderOverlay_12gzw_1",
  KA = "_loader_12gzw_1",
  xg = { loaderOverlay: qA, loader: KA },
  GA = Zs(() => {
    const { store: e } = p.useContext(Oi);
    return e.isLoading
      ? b.jsx("div", {
          className: xg.loaderOverlay,
          children: b.jsx("div", { className: xg.loader }),
        })
      : null;
  });
var b1 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(l0, function () {
    function n(A) {
      return (n =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (k) {
              return typeof k;
            }
          : function (k) {
              return k &&
                typeof Symbol == "function" &&
                k.constructor === Symbol &&
                k !== Symbol.prototype
                ? "symbol"
                : typeof k;
            })(A);
    }
    function r(A, k) {
      if (!(A instanceof k))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(A, k) {
      for (var I = 0; I < k.length; I++) {
        var V = k[I];
        (V.enumerable = V.enumerable || !1),
          (V.configurable = !0),
          "value" in V && (V.writable = !0),
          Object.defineProperty(A, V.key, V);
      }
    }
    function o(A, k, I) {
      k && i(A.prototype, k),
        I && i(A, I),
        Object.defineProperty(A, "prototype", { writable: !1 });
    }
    function s(A, k, I) {
      k in A
        ? Object.defineProperty(A, k, {
            value: I,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (A[k] = I);
    }
    function a(A, k) {
      if (typeof k != "function" && k !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (A.prototype = Object.create(k && k.prototype, {
        constructor: { value: A, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(A, "prototype", { writable: !1 }),
        k && u(A, k);
    }
    function l(A) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (k) {
            return k.__proto__ || Object.getPrototypeOf(k);
          })(A);
    }
    function u(A, k) {
      return (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (I, V) {
            return (I.__proto__ = V), I;
          })(A, k);
    }
    function c(A, k) {
      if (k && (typeof k == "object" || typeof k == "function")) return k;
      if (k !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      if (((k = A), k === void 0))
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return k;
    }
    function f(A) {
      var k = (function () {
        if (
          typeof Reflect > "u" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch {
          return !1;
        }
      })();
      return function () {
        var I,
          V = l(A);
        return c(
          this,
          k
            ? ((I = l(this).constructor), Reflect.construct(V, arguments, I))
            : V.apply(this, arguments)
        );
      };
    }
    function d(A, k) {
      (k == null || k > A.length) && (k = A.length);
      for (var I = 0, V = new Array(k); I < k; I++) V[I] = A[I];
      return V;
    }
    function g(A, k) {
      var I,
        V = (typeof Symbol < "u" && A[Symbol.iterator]) || A["@@iterator"];
      if (!V) {
        if (
          Array.isArray(A) ||
          (V = (function (L, N) {
            if (L) {
              if (typeof L == "string") return d(L, N);
              var M = Object.prototype.toString.call(L).slice(8, -1);
              return (M =
                M === "Object" && L.constructor ? L.constructor.name : M) ===
                "Map" || M === "Set"
                ? Array.from(L)
                : M === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
                ? d(L, N)
                : void 0;
            }
          })(A)) ||
          (k && A && typeof A.length == "number")
        )
          return (
            V && (A = V),
            (I = 0),
            {
              s: (k = function () {}),
              n: function () {
                return I >= A.length
                  ? { done: !0 }
                  : { done: !1, value: A[I++] };
              },
              e: function (L) {
                throw L;
              },
              f: k,
            }
          );
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var X,
        D = !0,
        oe = !1;
      return {
        s: function () {
          V = V.call(A);
        },
        n: function () {
          var L = V.next();
          return (D = L.done), L;
        },
        e: function (L) {
          (oe = !0), (X = L);
        },
        f: function () {
          try {
            D || V.return == null || V.return();
          } finally {
            if (oe) throw X;
          }
        },
      };
    }
    function v() {
      if (y.url) window.location.href = y.url;
      else if (y.rewriteHTML)
        try {
          document.documentElement.innerHTML = y.rewriteHTML;
        } catch {
          document.documentElement.innerText = y.rewriteHTML;
        }
      else {
        try {
          (window.opener = null),
            window.open("", "_self"),
            window.close(),
            window.history.back();
        } catch (A) {
          console.log(A);
        }
        setTimeout(function () {
          window.location.href =
            y.timeOutUrl ||
            "https://theajack.github.io/disable-devtool/404.html?h=".concat(
              encodeURIComponent(location.host)
            );
        }, 500);
      }
    }
    var y = {
        md5: "",
        ondevtoolopen: v,
        ondevtoolclose: null,
        url: "",
        timeOutUrl: "",
        tkName: "ddtk",
        interval: 500,
        disableMenu: !0,
        stopIntervalTime: 5e3,
        clearIntervalWhenDevOpenTrigger: !1,
        detectors: [0, 1, 3, 4, 5, 6, 7],
        clearLog: !0,
        disableSelect: !1,
        disableCopy: !1,
        disableCut: !1,
        disablePaste: !1,
        ignore: null,
        disableIframeParents: !0,
        seo: !0,
        rewriteHTML: "",
      },
      x = ["detectors", "ondevtoolclose", "ignore"];
    function m(A) {
      var k,
        I = 0 < arguments.length && A !== void 0 ? A : {};
      for (k in y) {
        var V = k;
        I[V] === void 0 ||
          (n(y[V]) !== n(I[V]) && x.indexOf(V) === -1) ||
          (y[V] = I[V]);
      }
      typeof y.ondevtoolclose == "function" &&
        y.clearIntervalWhenDevOpenTrigger === !0 &&
        ((y.clearIntervalWhenDevOpenTrigger = !1),
        console.warn(
          "【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"
        ));
    }
    function h() {
      return new Date().getTime();
    }
    function w(A) {
      var k = h();
      return A(), h() - k;
    }
    function E(A, k) {
      function I(oe) {
        return function () {
          A && A();
          var L = oe.apply(void 0, arguments);
          return k && k(), L;
        };
      }
      var V = window.alert,
        X = window.confirm,
        D = window.prompt;
      try {
        (window.alert = I(V)), (window.confirm = I(X)), (window.prompt = I(D));
      } catch {}
    }
    var R,
      S,
      $,
      O = {
        iframe: !1,
        pc: !1,
        qqBrowser: !1,
        firefox: !1,
        macos: !1,
        edge: !1,
        oldEdge: !1,
        ie: !1,
        iosChrome: !1,
        iosEdge: !1,
        chrome: !1,
        seoBot: !1,
        mobile: !1,
      };
    function W() {
      function A($t) {
        return k.indexOf($t) !== -1;
      }
      var k = navigator.userAgent.toLowerCase(),
        I = (function () {
          var Mt = navigator,
            $t = Mt.platform,
            Mt = Mt.maxTouchPoints;
          if (typeof Mt == "number") return 1 < Mt;
          if (typeof $t == "string") {
            if (((Mt = $t.toLowerCase()), /(mac|win)/i.test(Mt))) return !1;
            if (/(android|iphone|ipad|ipod|arch)/i.test(Mt)) return !0;
          }
          return /(iphone|ipad|ipod|ios|android)/i.test(
            navigator.userAgent.toLowerCase()
          );
        })(),
        V = !!window.top && window !== window.top,
        X = !I,
        D = A("qqbrowser"),
        oe = A("firefox"),
        L = A("macintosh"),
        N = A("edge"),
        M = N && !A("chrome"),
        j = M || A("trident") || A("msie"),
        z = A("crios"),
        Qn = A("edgios"),
        Nn = A("chrome") || z,
        Jn =
          !I &&
          /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(
            k
          );
      Object.assign(O, {
        iframe: V,
        pc: X,
        qqBrowser: D,
        firefox: oe,
        macos: L,
        edge: N,
        oldEdge: M,
        ie: j,
        iosChrome: z,
        iosEdge: Qn,
        chrome: Nn,
        seoBot: Jn,
        mobile: I,
      });
    }
    function q() {
      for (
        var A = (function () {
            for (var V = {}, X = 0; X < 500; X++)
              V["".concat(X)] = "".concat(X);
            return V;
          })(),
          k = [],
          I = 0;
        I < 50;
        I++
      )
        k.push(A);
      return k;
    }
    // function ie() {
    //   y.clearLog && $();
    // }
    var pe = "",
      be = !1;
    function he() {
      var A = y.ignore;
      if (A) {
        if (typeof A == "function") return A();
        if (A.length !== 0) {
          var k = location.href;
          if (pe === k) return be;
          pe = k;
          var I,
            V = !1,
            X = g(A);
          try {
            for (X.s(); !(I = X.n()).done; ) {
              var D = I.value;
              if (typeof D == "string") {
                if (k.indexOf(D) !== -1) {
                  V = !0;
                  break;
                }
              } else if (D.test(k)) {
                V = !0;
                break;
              }
            }
          } catch (oe) {
            X.e(oe);
          } finally {
            X.f();
          }
          return (be = V);
        }
      }
    }
    var Ke = function () {
      return !1;
    };
    function Xe(A) {
      var k,
        I,
        V = 74,
        X = 73,
        D = 85,
        oe = 83,
        L = 123,
        N = O.macos
          ? function (j, z) {
              return j.metaKey && j.altKey && (z === X || z === V);
            }
          : function (j, z) {
              return j.ctrlKey && j.shiftKey && (z === X || z === V);
            },
        M = O.macos
          ? function (j, z) {
              return (
                (j.metaKey && j.altKey && z === D) || (j.metaKey && z === oe)
              );
            }
          : function (j, z) {
              return j.ctrlKey && (z === oe || z === D);
            };
      A.addEventListener(
        "keydown",
        function (j) {
          var z = (j = j || A.event).keyCode || j.which;
          if (z === L || N(j, z) || M(j, z)) return B(A, j);
        },
        !0
      ),
        (k = A),
        y.disableMenu &&
          k.addEventListener("contextmenu", function (j) {
            if (j.pointerType !== "touch") return B(k, j);
          }),
        (I = A),
        y.disableSelect && xe(I, "selectstart"),
        (I = A),
        y.disableCopy && xe(I, "copy"),
        (I = A),
        y.disableCut && xe(I, "cut"),
        (I = A),
        y.disablePaste && xe(I, "paste");
    }
    function xe(A, k) {
      A.addEventListener(k, function (I) {
        return B(A, I);
      });
    }
    function B(A, k) {
      if (!he() && !Ke())
        return ((k = k || A.event).returnValue = !1), k.preventDefault(), !1;
    }
    var H,
      ee = !1,
      re = {};
    function we(A) {
      re[A] = !1;
    }
    function We() {
      for (var A in re) if (re[A]) return (ee = !0);
      return (ee = !1);
    }
    ((De = H = H || {})[(De.Unknown = -1)] = "Unknown"),
      (De[(De.RegToString = 0)] = "RegToString"),
      (De[(De.DefineId = 1)] = "DefineId"),
      (De[(De.Size = 2)] = "Size"),
      (De[(De.DateToString = 3)] = "DateToString"),
      (De[(De.FuncToString = 4)] = "FuncToString"),
      (De[(De.Debugger = 5)] = "Debugger"),
      (De[(De.Performance = 6)] = "Performance"),
      (De[(De.DebugLib = 7)] = "DebugLib");
    var ge = (function () {
        function A(V) {
          var I = V.type,
            V = V.enabled,
            V = V === void 0 || V;
          r(this, A),
            (this.type = H.Unknown),
            (this.enabled = !0),
            (this.type = I),
            (this.enabled = V),
            this.enabled && ((I = this), na.push(I), this.init());
        }
        return (
          o(A, [
            {
              key: "onDevToolOpen",
              value: function () {
                var k;
                console.warn(
                  "You don't have permission to use DEVTOOL!【type = ".concat(
                    this.type,
                    "】"
                  )
                ),
                  y.clearIntervalWhenDevOpenTrigger && ot(),
                  window.clearTimeout(Jt),
                  y.ondevtoolopen(this.type, v),
                  (k = this.type),
                  (re[k] = !0);
              },
            },
            { key: "init", value: function () {} },
          ]),
          A
        );
      })(),
      Rt = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return r(this, k), A.call(this, { type: H.DebugLib });
        }
        return (
          o(
            k,
            [
              { key: "init", value: function () {} },
              {
                key: "detect",
                value: function () {
                  var I;
                  (((I = (I = window.eruda) == null ? void 0 : I._devTools) ==
                  null
                    ? void 0
                    : I._isShow) === !0 ||
                    (window._vcOrigConsole &&
                      window.document.querySelector(
                        "#__vconsole.vc-toggle"
                      ))) &&
                    this.onDevToolOpen();
                },
              },
            ],
            [
              {
                key: "isUsing",
                value: function () {
                  return !!window.eruda || !!window._vcOrigConsole;
                },
              },
            ]
          ),
          k
        );
      })(),
      it = 0,
      Jt = 0,
      na = [],
      xu = 0;
    function ku(A) {
      function k() {
        M = !0;
      }
      function I() {
        M = !1;
      }
      var V,
        X,
        D,
        oe,
        L,
        N,
        M = !1;
      function j() {
        (N[oe] === D ? X : V)();
      }
      E(k, I),
        (V = I),
        (X = k),
        (N = document).hidden !== void 0
          ? ((D = "hidden"), (L = "visibilitychange"), (oe = "visibilityState"))
          : N.mozHidden !== void 0
          ? ((D = "mozHidden"),
            (L = "mozvisibilitychange"),
            (oe = "mozVisibilityState"))
          : N.msHidden !== void 0
          ? ((D = "msHidden"),
            (L = "msvisibilitychange"),
            (oe = "msVisibilityState"))
          : N.webkitHidden !== void 0 &&
            ((D = "webkitHidden"),
            (L = "webkitvisibilitychange"),
            (oe = "webkitVisibilityState")),
        N.removeEventListener(L, j, !1),
        N.addEventListener(L, j, !1),
        (it = window.setInterval(function () {
          if (!(A.isSuspend || M || he())) {
            var z,
              Qn,
              Nn = g(na);
            try {
              for (Nn.s(); !(z = Nn.n()).done; ) {
                var Jn = z.value;
                we(Jn.type), Jn.detect(xu++);
              }
            } catch ($t) {
              Nn.e($t);
            } finally {
              Nn.f();
            }
            ie(),
              typeof y.ondevtoolclose == "function" &&
                ((Qn = ee), !We() && Qn && y.ondevtoolclose());
          }
        }, y.interval)),
        (Jt = setTimeout(function () {
          O.pc || Rt.isUsing() || ot();
        }, y.stopIntervalTime));
    }
    function ot() {
      window.clearInterval(it);
    }
    var Xt = 8;
    function Ro(A) {
      for (
        var k = (function (D, oe) {
            (D[oe >> 5] |= 128 << oe % 32),
              (D[14 + (((oe + 64) >>> 9) << 4)] = oe);
            for (
              var L = 1732584193,
                N = -271733879,
                M = -1732584194,
                j = 271733878,
                z = 0;
              z < D.length;
              z += 16
            ) {
              var Qn = L,
                Nn = N,
                Jn = M,
                $t = j;
              (L = Ie(L, N, M, j, D[z + 0], 7, -680876936)),
                (j = Ie(j, L, N, M, D[z + 1], 12, -389564586)),
                (M = Ie(M, j, L, N, D[z + 2], 17, 606105819)),
                (N = Ie(N, M, j, L, D[z + 3], 22, -1044525330)),
                (L = Ie(L, N, M, j, D[z + 4], 7, -176418897)),
                (j = Ie(j, L, N, M, D[z + 5], 12, 1200080426)),
                (M = Ie(M, j, L, N, D[z + 6], 17, -1473231341)),
                (N = Ie(N, M, j, L, D[z + 7], 22, -45705983)),
                (L = Ie(L, N, M, j, D[z + 8], 7, 1770035416)),
                (j = Ie(j, L, N, M, D[z + 9], 12, -1958414417)),
                (M = Ie(M, j, L, N, D[z + 10], 17, -42063)),
                (N = Ie(N, M, j, L, D[z + 11], 22, -1990404162)),
                (L = Ie(L, N, M, j, D[z + 12], 7, 1804603682)),
                (j = Ie(j, L, N, M, D[z + 13], 12, -40341101)),
                (M = Ie(M, j, L, N, D[z + 14], 17, -1502002290)),
                (N = Ie(N, M, j, L, D[z + 15], 22, 1236535329)),
                (L = st(L, N, M, j, D[z + 1], 5, -165796510)),
                (j = st(j, L, N, M, D[z + 6], 9, -1069501632)),
                (M = st(M, j, L, N, D[z + 11], 14, 643717713)),
                (N = st(N, M, j, L, D[z + 0], 20, -373897302)),
                (L = st(L, N, M, j, D[z + 5], 5, -701558691)),
                (j = st(j, L, N, M, D[z + 10], 9, 38016083)),
                (M = st(M, j, L, N, D[z + 15], 14, -660478335)),
                (N = st(N, M, j, L, D[z + 4], 20, -405537848)),
                (L = st(L, N, M, j, D[z + 9], 5, 568446438)),
                (j = st(j, L, N, M, D[z + 14], 9, -1019803690)),
                (M = st(M, j, L, N, D[z + 3], 14, -187363961)),
                (N = st(N, M, j, L, D[z + 8], 20, 1163531501)),
                (L = st(L, N, M, j, D[z + 13], 5, -1444681467)),
                (j = st(j, L, N, M, D[z + 2], 9, -51403784)),
                (M = st(M, j, L, N, D[z + 7], 14, 1735328473)),
                (N = st(N, M, j, L, D[z + 12], 20, -1926607734)),
                (L = at(L, N, M, j, D[z + 5], 4, -378558)),
                (j = at(j, L, N, M, D[z + 8], 11, -2022574463)),
                (M = at(M, j, L, N, D[z + 11], 16, 1839030562)),
                (N = at(N, M, j, L, D[z + 14], 23, -35309556)),
                (L = at(L, N, M, j, D[z + 1], 4, -1530992060)),
                (j = at(j, L, N, M, D[z + 4], 11, 1272893353)),
                (M = at(M, j, L, N, D[z + 7], 16, -155497632)),
                (N = at(N, M, j, L, D[z + 10], 23, -1094730640)),
                (L = at(L, N, M, j, D[z + 13], 4, 681279174)),
                (j = at(j, L, N, M, D[z + 0], 11, -358537222)),
                (M = at(M, j, L, N, D[z + 3], 16, -722521979)),
                (N = at(N, M, j, L, D[z + 6], 23, 76029189)),
                (L = at(L, N, M, j, D[z + 9], 4, -640364487)),
                (j = at(j, L, N, M, D[z + 12], 11, -421815835)),
                (M = at(M, j, L, N, D[z + 15], 16, 530742520)),
                (N = at(N, M, j, L, D[z + 2], 23, -995338651)),
                (L = Ze(L, N, M, j, D[z + 0], 6, -198630844)),
                (j = Ze(j, L, N, M, D[z + 7], 10, 1126891415)),
                (M = Ze(M, j, L, N, D[z + 14], 15, -1416354905)),
                (N = Ze(N, M, j, L, D[z + 5], 21, -57434055)),
                (L = Ze(L, N, M, j, D[z + 12], 6, 1700485571)),
                (j = Ze(j, L, N, M, D[z + 3], 10, -1894986606)),
                (M = Ze(M, j, L, N, D[z + 10], 15, -1051523)),
                (N = Ze(N, M, j, L, D[z + 1], 21, -2054922799)),
                (L = Ze(L, N, M, j, D[z + 8], 6, 1873313359)),
                (j = Ze(j, L, N, M, D[z + 15], 10, -30611744)),
                (M = Ze(M, j, L, N, D[z + 6], 15, -1560198380)),
                (N = Ze(N, M, j, L, D[z + 13], 21, 1309151649)),
                (L = Ze(L, N, M, j, D[z + 4], 6, -145523070)),
                (j = Ze(j, L, N, M, D[z + 11], 10, -1120210379)),
                (M = Ze(M, j, L, N, D[z + 2], 15, 718787259)),
                (N = Ze(N, M, j, L, D[z + 9], 21, -343485551)),
                (L = Ln(L, Qn)),
                (N = Ln(N, Nn)),
                (M = Ln(M, Jn)),
                (j = Ln(j, $t));
            }
            return Array(L, N, M, j);
          })(
            (function (D) {
              for (
                var oe = Array(), L = (1 << Xt) - 1, N = 0;
                N < D.length * Xt;
                N += Xt
              )
                oe[N >> 5] |= (D.charCodeAt(N / Xt) & L) << N % 32;
              return oe;
            })(A),
            A.length * Xt
          ),
          I = "0123456789abcdef",
          V = "",
          X = 0;
        X < 4 * k.length;
        X++
      )
        V +=
          I.charAt((k[X >> 2] >> ((X % 4) * 8 + 4)) & 15) +
          I.charAt((k[X >> 2] >> ((X % 4) * 8)) & 15);
      return V;
    }
    function Ci(A, k, I, V, X, D) {
      return Ln(((k = Ln(Ln(k, A), Ln(V, D))) << X) | (k >>> (32 - X)), I);
    }
    function Ie(A, k, I, V, X, D, oe) {
      return Ci((k & I) | (~k & V), A, k, X, D, oe);
    }
    function st(A, k, I, V, X, D, oe) {
      return Ci((k & V) | (I & ~V), A, k, X, D, oe);
    }
    function at(A, k, I, V, X, D, oe) {
      return Ci(k ^ I ^ V, A, k, X, D, oe);
    }
    function Ze(A, k, I, V, X, D, oe) {
      return Ci(I ^ (k | ~V), A, k, X, D, oe);
    }
    function Ln(A, k) {
      var I = (65535 & A) + (65535 & k);
      return (((A >> 16) + (k >> 16) + (I >> 16)) << 16) | (65535 & I);
    }
    var De = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return (
            r(this, k),
            A.call(this, {
              type: H.RegToString,
              enabled: O.qqBrowser || O.firefox,
            })
          );
        }
        return (
          o(k, [
            {
              key: "init",
              value: function () {
                var I = this;
                (this.lastTime = 0),
                  (this.reg = /./),
                  R(this.reg),
                  (this.reg.toString = function () {
                    var V;
                    return (
                      O.qqBrowser
                        ? ((V = new Date().getTime()),
                          I.lastTime && V - I.lastTime < 100
                            ? I.onDevToolOpen()
                            : (I.lastTime = V))
                        : O.firefox && I.onDevToolOpen(),
                      ""
                    );
                  });
              },
            },
            {
              key: "detect",
              value: function () {
                R(this.reg);
              },
            },
          ]),
          k
        );
      })(),
      Eu = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return r(this, k), A.call(this, { type: H.DefineId });
        }
        return (
          o(k, [
            {
              key: "init",
              value: function () {
                var I = this;
                (this.div = document.createElement("div")),
                  this.div.__defineGetter__("id", function () {
                    I.onDevToolOpen();
                  }),
                  Object.defineProperty(this.div, "id", {
                    get: function () {
                      I.onDevToolOpen();
                    },
                  });
              },
            },
            {
              key: "detect",
              value: function () {
                R(this.div);
              },
            },
          ]),
          k
        );
      })(),
      Tu = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return (
            r(this, k),
            A.call(this, { type: H.Size, enabled: !O.iframe && !O.edge })
          );
        }
        return (
          o(k, [
            {
              key: "init",
              value: function () {
                var I = this;
                this.checkWindowSizeUneven(),
                  window.addEventListener(
                    "resize",
                    function () {
                      setTimeout(function () {
                        I.checkWindowSizeUneven();
                      }, 100);
                    },
                    !0
                  );
              },
            },
            { key: "detect", value: function () {} },
            {
              key: "checkWindowSizeUneven",
              value: function () {
                var I = (function () {
                  if (In(window.devicePixelRatio))
                    return window.devicePixelRatio;
                  var X = window.screen;
                  return (
                    !(In(X) || !X.deviceXDPI || !X.logicalXDPI) &&
                    X.deviceXDPI / X.logicalXDPI
                  );
                })();
                if (I !== !1) {
                  var V = 200 < window.outerWidth - window.innerWidth * I,
                    I = 300 < window.outerHeight - window.innerHeight * I;
                  if (V || I) return this.onDevToolOpen(), !1;
                  we(this.type);
                }
                return !0;
              },
            },
          ]),
          k
        );
      })();
    function In(A) {
      return A != null;
    }
    var bt,
      ra = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return (
            r(this, k),
            A.call(this, {
              type: H.DateToString,
              enabled: !O.iosChrome && !O.iosEdge,
            })
          );
        }
        return (
          o(k, [
            {
              key: "init",
              value: function () {
                var I = this;
                (this.count = 0),
                  (this.date = new Date()),
                  (this.date.toString = function () {
                    return I.count++, "";
                  });
              },
            },
            {
              key: "detect",
              value: function () {
                (this.count = 0),
                  R(this.date),
                  ie(),
                  2 <= this.count && this.onDevToolOpen();
              },
            },
          ]),
          k
        );
      })(),
      Ao = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return (
            r(this, k),
            A.call(this, {
              type: H.FuncToString,
              enabled: !O.iosChrome && !O.iosEdge,
            })
          );
        }
        return (
          o(k, [
            {
              key: "init",
              value: function () {
                var I = this;
                (this.count = 0),
                  (this.func = function () {}),
                  (this.func.toString = function () {
                    return I.count++, "";
                  });
              },
            },
            {
              key: "detect",
              value: function () {
                (this.count = 0),
                  R(this.func),
                  ie(),
                  2 <= this.count && this.onDevToolOpen();
              },
            },
          ]),
          k
        );
      })(),
      Dn = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return (
            r(this, k),
            A.call(this, {
              type: H.Debugger,
              enabled: O.iosChrome || O.iosEdge,
            })
          );
        }
        return (
          o(k, [
            {
              key: "detect",
              value: function () {
                var I = h();
                100 < h() - I && this.onDevToolOpen();
              },
            },
          ]),
          k
        );
      })(),
      hn = (function () {
        a(k, ge);
        var A = f(k);
        function k() {
          return (
            r(this, k),
            A.call(this, {
              type: H.Performance,
              enabled: O.chrome || !O.mobile,
            })
          );
        }
        return (
          o(k, [
            {
              key: "init",
              value: function () {
                (this.maxPrintTime = 0), (this.largeObjectArray = q());
              },
            },
            {
              key: "detect",
              value: function () {
                var I = this,
                  V = w(function () {
                    S(I.largeObjectArray);
                  }),
                  X = w(function () {
                    R(I.largeObjectArray);
                  });
                if (
                  ((this.maxPrintTime = Math.max(this.maxPrintTime, X)),
                  ie(),
                  V === 0 || this.maxPrintTime === 0)
                )
                  return !1;
                V > 10 * this.maxPrintTime && this.onDevToolOpen();
              },
            },
          ]),
          k
        );
      })(),
      Po =
        (s((bt = {}), H.RegToString, De),
        s(bt, H.DefineId, Eu),
        s(bt, H.Size, Tu),
        s(bt, H.DateToString, ra),
        s(bt, H.FuncToString, Ao),
        s(bt, H.Debugger, Dn),
        s(bt, H.Performance, hn),
        s(bt, H.DebugLib, Rt),
        bt),
      gn = Object.assign(
        function (A) {
          function k() {
            var oe =
              0 < arguments.length && arguments[0] !== void 0
                ? arguments[0]
                : "";
            return { success: !oe, reason: oe };
          }
          var I;
          if (gn.isRunning) return k("already running");
          if (
            (W(),
            (I = window.console || {
              log: function () {},
              table: function () {},
              clear: function () {},
            }),
            ($ = O.ie
              ? ((R = function () {
                  return I.log.apply(I, arguments);
                }),
                (S = function () {
                  return I.table.apply(I, arguments);
                }),
                function () {
                  return I.clear();
                })
              : ((R = I.log), (S = I.table), I.clear)),
            m(A),
            y.md5 &&
              Ro(
                (function (oe) {
                  var L = window.location.search,
                    N = window.location.hash;
                  return (L =
                    L === "" && N !== "" ? "?".concat(N.split("?")[1]) : L) !==
                    "" &&
                    L !== void 0 &&
                    ((N = new RegExp("(^|&)" + oe + "=([^&]*)(&|$)", "i")),
                    (oe = L.substr(1).match(N)),
                    oe != null)
                    ? unescape(oe[2])
                    : "";
                })(y.tkName)
              ) === y.md5)
          )
            return k("token passed");
          if (y.seo && O.seoBot) return k("seobot");
          (gn.isRunning = !0), ku(gn);
          var V = gn,
            X =
              ((Ke = function () {
                return V.isSuspend;
              }),
              window.top),
            D = window.parent;
          if ((Xe(window), y.disableIframeParents && X && D && X !== window)) {
            for (; D !== X; ) Xe(D), (D = D.parent);
            Xe(X);
          }
          return (
            (y.detectors === "all" ? Object.keys(Po) : y.detectors).forEach(
              function (oe) {
                new Po[oe]();
              }
            ),
            k()
          );
        },
        {
          isRunning: !1,
          isSuspend: !1,
          md5: Ro,
          version: "0.3.8",
          DetectorType: H,
          isDevToolOpened: We,
        }
      );
    return (
      (De = (function () {
        if (typeof window > "u" || !window.document) return null;
        var A = document.querySelector("[disable-devtool-auto]");
        if (!A) return null;
        var k = [
            "disable-menu",
            "disable-select",
            "disable-copy",
            "disable-cut",
            "disable-paste",
            "clear-log",
          ],
          I = ["interval"],
          V = {};
        return (
          ["md5", "url", "tk-name", "detectors"]
            .concat(k, I)
            .forEach(function (X) {
              var D = A.getAttribute(X);
              D !== null &&
                (I.indexOf(X) !== -1
                  ? (D = parseInt(D))
                  : k.indexOf(X) !== -1
                  ? (D = D !== "false")
                  : X === "detector" && D !== "all" && (D = D.split(" ")),
                (V[
                  (function (oe) {
                    if (oe.indexOf("-") === -1) return oe;
                    var L = !1;
                    return oe
                      .split("")
                      .map(function (N) {
                        return N === "-"
                          ? ((L = !0), "")
                          : L
                          ? ((L = !1), N.toUpperCase())
                          : N;
                      })
                      .join("");
                  })(X)
                ] = D));
            }),
          V
        );
      })()),
      De && gn(De),
      gn
    );
  });
})(b1);
var YA = b1.exports;
const QA = Si(YA),
  JA = [
    "dev@TRADESIGNAL.com",
    "livelive100091@gmail.com",
    "tanyaseredenk@gmail.com",
    "vejiv35265@avulos.com",
    "baryshevmaksim13@gmail.com",
    "liemik807@gmail.com",
    "gucalenkq777@gmail.com",
    "tigacak501@deenur.com",
    "kornienkovlad8@gmail.com",
    "bojkovlad07@gmail.com",
    "aobtir8@gmail.com",
    "gucalenkq@gmail.com",
  ];
function XA(e) {
  return JA.includes(e);
}
const ZA = () =>
    navigator.webdriver ||
    /HeadlessChrome/.test(navigator.userAgent) ||
    /Googlebot/.test(navigator.userAgent),
  eP = Zs(() => {
    const { store: e } = p.useContext(Oi);
    return (
      p.useEffect(() => {
        localStorage.getItem("token")
          ? e.checkAuth()
          : (e.setAuth(!1), e.setLoading(!1));
      }, [e]),
      p.useEffect(() => {
        QA({ ignore: () => XA(e.user.email) || ZA() });
      }, [e.user.email]),
      p.useEffect(() => {
        const n = new URLSearchParams(window.location.search).get("campaign");
        n && e.setCampaign(n);
      }, [e]),
      b.jsxs(b.Fragment, {
        children: [b.jsx(GA, {}), b.jsx(h_, { router: SE })],
      })
    );
  });
function x1(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: tP } = Object.prototype,
  { getPrototypeOf: Zd } = Object,
  mu = ((e) => (t) => {
    const n = tP.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Pn = (e) => ((e = e.toLowerCase()), (t) => mu(t) === e),
  yu = (e) => (t) => typeof t === e,
  { isArray: Oo } = Array,
  Fs = yu("undefined");
function nP(e) {
  return (
    e !== null &&
    !Fs(e) &&
    e.constructor !== null &&
    !Fs(e.constructor) &&
    qt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const k1 = Pn("ArrayBuffer");
function rP(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && k1(e.buffer)),
    t
  );
}
const iP = yu("string"),
  qt = yu("function"),
  E1 = yu("number"),
  vu = (e) => e !== null && typeof e == "object",
  oP = (e) => e === !0 || e === !1,
  Wa = (e) => {
    if (mu(e) !== "object") return !1;
    const t = Zd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  sP = Pn("Date"),
  aP = Pn("File"),
  lP = Pn("Blob"),
  uP = Pn("FileList"),
  cP = (e) => vu(e) && qt(e.pipe),
  fP = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (qt(e.append) &&
          ((t = mu(e)) === "formdata" ||
            (t === "object" &&
              qt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  dP = Pn("URLSearchParams"),
  [pP, hP, gP, mP] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Pn
  ),
  yP = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ea(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Oo(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let a;
    for (r = 0; r < s; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function T1(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const ni =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  O1 = (e) => !Fs(e) && e !== ni;
function Df() {
  const { caseless: e } = (O1(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && T1(t, i)) || i;
      Wa(t[o]) && Wa(r)
        ? (t[o] = Df(t[o], r))
        : Wa(r)
        ? (t[o] = Df({}, r))
        : Oo(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && ea(arguments[r], n);
  return t;
}
const vP = (e, t, n, { allOwnKeys: r } = {}) => (
    ea(
      t,
      (i, o) => {
        n && qt(i) ? (e[o] = x1(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  wP = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  SP = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  _P = (e, t, n, r) => {
    let i, o, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Zd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  bP = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  xP = (e) => {
    if (!e) return null;
    if (Oo(e)) return e;
    let t = e.length;
    if (!E1(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  kP = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Zd(Uint8Array)),
  EP = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  TP = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  OP = Pn("HTMLFormElement"),
  CP = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  kg = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  RP = Pn("RegExp"),
  C1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ea(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  AP = (e) => {
    C1(e, (t, n) => {
      if (qt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (qt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  PP = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Oo(e) ? r(e) : r(String(e).split(t)), n;
  },
  LP = () => {},
  IP = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  dc = "abcdefghijklmnopqrstuvwxyz",
  Eg = "0123456789",
  R1 = { DIGIT: Eg, ALPHA: dc, ALPHA_DIGIT: dc + dc.toUpperCase() + Eg },
  DP = (e = 16, t = R1.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function NP(e) {
  return !!(
    e &&
    qt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const jP = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (vu(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Oo(r) ? [] : {};
            return (
              ea(r, (s, a) => {
                const l = n(s, i + 1);
                !Fs(l) && (o[a] = l);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  $P = Pn("AsyncFunction"),
  MP = (e) => e && (vu(e) || qt(e)) && qt(e.then) && qt(e.catch),
  A1 = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          ni.addEventListener(
            "message",
            ({ source: i, data: o }) => {
              i === ni && o === n && r.length && r.shift()();
            },
            !1
          ),
          (i) => {
            r.push(i), ni.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    qt(ni.postMessage)
  ),
  FP =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(ni)
      : (typeof process < "u" && process.nextTick) || A1,
  P = {
    isArray: Oo,
    isArrayBuffer: k1,
    isBuffer: nP,
    isFormData: fP,
    isArrayBufferView: rP,
    isString: iP,
    isNumber: E1,
    isBoolean: oP,
    isObject: vu,
    isPlainObject: Wa,
    isReadableStream: pP,
    isRequest: hP,
    isResponse: gP,
    isHeaders: mP,
    isUndefined: Fs,
    isDate: sP,
    isFile: aP,
    isBlob: lP,
    isRegExp: RP,
    isFunction: qt,
    isStream: cP,
    isURLSearchParams: dP,
    isTypedArray: kP,
    isFileList: uP,
    forEach: ea,
    merge: Df,
    extend: vP,
    trim: yP,
    stripBOM: wP,
    inherits: SP,
    toFlatObject: _P,
    kindOf: mu,
    kindOfTest: Pn,
    endsWith: bP,
    toArray: xP,
    forEachEntry: EP,
    matchAll: TP,
    isHTMLForm: OP,
    hasOwnProperty: kg,
    hasOwnProp: kg,
    reduceDescriptors: C1,
    freezeMethods: AP,
    toObjectSet: PP,
    toCamelCase: CP,
    noop: LP,
    toFiniteNumber: IP,
    findKey: T1,
    global: ni,
    isContextDefined: O1,
    ALPHABET: R1,
    generateString: DP,
    isSpecCompliantForm: NP,
    toJSONObject: jP,
    isAsyncFn: $P,
    isThenable: MP,
    setImmediate: A1,
    asap: FP,
  };
function ue(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
P.inherits(ue, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const P1 = ue.prototype,
  L1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  L1[e] = { value: e };
});
Object.defineProperties(ue, L1);
Object.defineProperty(P1, "isAxiosError", { value: !0 });
ue.from = (e, t, n, r, i, o) => {
  const s = Object.create(P1);
  return (
    P.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    ue.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const UP = null;
function Nf(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function I1(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tg(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = I1(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function BP(e) {
  return P.isArray(e) && !e.some(Nf);
}
const zP = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function wu(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, x) {
        return !P.isUndefined(x[y]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (P.isDate(v)) return v.toISOString();
    if (!l && P.isBlob(v))
      throw new ue("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(v) || P.isTypedArray(v)
      ? l && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, y, x) {
    let m = v;
    if (v && !x && typeof v == "object") {
      if (P.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (P.isArray(v) && BP(v)) ||
        ((P.isFileList(v) || P.endsWith(y, "[]")) && (m = P.toArray(v)))
      )
        return (
          (y = I1(y)),
          m.forEach(function (w, E) {
            !(P.isUndefined(w) || w === null) &&
              t.append(
                s === !0 ? Tg([y], E, o) : s === null ? y : y + "[]",
                u(w)
              );
          }),
          !1
        );
    }
    return Nf(v) ? !0 : (t.append(Tg(x, y, o), u(v)), !1);
  }
  const f = [],
    d = Object.assign(zP, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Nf,
    });
  function g(v, y) {
    if (!P.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(v),
        P.forEach(v, function (m, h) {
          (!(P.isUndefined(m) || m === null) &&
            i.call(t, m, P.isString(h) ? h.trim() : h, y, d)) === !0 &&
            g(m, y ? y.concat(h) : [h]);
        }),
        f.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function Og(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ep(e, t) {
  (this._pairs = []), e && wu(e, this, t);
}
const D1 = ep.prototype;
D1.append = function (t, n) {
  this._pairs.push([t, n]);
};
D1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Og);
      }
    : Og;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function VP(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function N1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || VP;
  P.isFunction(n) && (n = { serialize: n });
  const i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = P.isURLSearchParams(t) ? t.toString() : new ep(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Cg {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const j1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  HP = typeof URLSearchParams < "u" ? URLSearchParams : ep,
  WP = typeof FormData < "u" ? FormData : null,
  qP = typeof Blob < "u" ? Blob : null,
  KP = {
    isBrowser: !0,
    classes: { URLSearchParams: HP, FormData: WP, Blob: qP },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  tp = typeof window < "u" && typeof document < "u",
  jf = (typeof navigator == "object" && navigator) || void 0,
  GP =
    tp &&
    (!jf || ["ReactNative", "NativeScript", "NS"].indexOf(jf.product) < 0),
  YP =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  QP = (tp && window.location.href) || "http://localhost",
  JP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: tp,
        hasStandardBrowserEnv: GP,
        hasStandardBrowserWebWorkerEnv: YP,
        navigator: jf,
        origin: QP,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  St = { ...JP, ...KP };
function XP(e, t) {
  return wu(
    e,
    new St.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return St.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ZP(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function e6(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function $1(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = o >= n.length;
    return (
      (s = !s && P.isArray(i) ? i.length : s),
      l
        ? (P.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !a)
        : ((!i[s] || !P.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && P.isArray(i[s]) && (i[s] = e6(i[s])),
          !a)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, i) => {
        t(ZP(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function t6(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ta = {
  transitional: j1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = P.isObject(t);
      if ((o && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return i ? JSON.stringify($1(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t) ||
        P.isReadableStream(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return XP(t, this.formSerializer).toString();
        if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return wu(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), t6(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ta.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t)) return t;
      if (t && P.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? ue.from(a, ue.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: St.classes.FormData, Blob: St.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ta.headers[e] = {};
});
const n6 = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  r6 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && n6[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Rg = Symbol("internals");
function Qo(e) {
  return e && String(e).trim().toLowerCase();
}
function qa(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(qa) : String(e);
}
function i6(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const o6 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pc(e, t, n, r, i) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function s6(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function a6(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
let jt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, l, u) {
      const c = Qo(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = P.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || l] = qa(a));
    }
    const s = (a, l) => P.forEach(a, (u, c) => o(u, c, l));
    if (P.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (P.isString(t) && (t = t.trim()) && !o6(t)) s(r6(t), n);
    else if (P.isHeaders(t)) for (const [a, l] of t.entries()) o(l, a, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Qo(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return i6(i);
        if (P.isFunction(n)) return n.call(this, i, r);
        if (P.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Qo(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = Qo(s)), s)) {
        const a = P.findKey(r, s);
        a && (!n || pc(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return P.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || pc(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (i, o) => {
        const s = P.findKey(r, o);
        if (s) {
          (n[s] = qa(i)), delete n[o];
          return;
        }
        const a = t ? s6(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = qa(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Rg] = this[Rg] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const a = Qo(s);
      r[a] || (a6(i, s), (r[a] = !0));
    }
    return P.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
jt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(jt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(jt);
function hc(e, t) {
  const n = this || ta,
    r = t || n,
    i = jt.from(r.headers);
  let o = r.data;
  return (
    P.forEach(e, function (a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function M1(e) {
  return !!(e && e.__CANCEL__);
}
function Co(e, t, n) {
  ue.call(this, e ?? "canceled", ue.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(Co, ue, { __CANCEL__: !0 });
function F1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ue(
          "Request failed with status code " + n.status,
          [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function l6(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function u6(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[o];
      s || (s = u), (n[i] = l), (r[i] = u);
      let f = o,
        d = 0;
      for (; f !== i; ) (d += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - s < t)) return;
      const g = c && u - c;
      return g ? Math.round((d * 1e3) / g) : void 0;
    }
  );
}
function c6(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    o;
  const s = (u, c = Date.now()) => {
    (n = c), (i = null), o && (clearTimeout(o), (o = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? s(u, c)
        : ((i = u),
          o ||
            (o = setTimeout(() => {
              (o = null), s(i);
            }, r - f)));
    },
    () => i && s(i),
  ];
}
const jl = (e, t, n = 3) => {
    let r = 0;
    const i = u6(50, 250);
    return c6((o) => {
      const s = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        l = s - r,
        u = i(l),
        c = s <= a;
      r = s;
      const f = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && c ? (a - s) / u : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Ag = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Pg =
    (e) =>
    (...t) =>
      P.asap(() => e(...t)),
  f6 = St.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, St.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(St.origin),
        St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)
      )
    : () => !0,
  d6 = St.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const s = [e + "=" + encodeURIComponent(t)];
          P.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            P.isString(r) && s.push("path=" + r),
            P.isString(i) && s.push("domain=" + i),
            o === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function p6(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function h6(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function U1(e, t) {
  return e && !p6(t) ? h6(e, t) : t;
}
const Lg = (e) => (e instanceof jt ? { ...e } : e);
function wi(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, d) {
    return P.isPlainObject(u) && P.isPlainObject(c)
      ? P.merge.call({ caseless: d }, u, c)
      : P.isPlainObject(c)
      ? P.merge({}, c)
      : P.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, f, d) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u, f, d);
    } else return r(u, c, f, d);
  }
  function o(u, c) {
    if (!P.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c, f) => i(Lg(u), Lg(c), f, !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = l[c] || i,
        d = f(e[c], t[c], c);
      (P.isUndefined(d) && f !== a) || (n[c] = d);
    }),
    n
  );
}
const B1 = (e) => {
    const t = wi({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = jt.from(s)),
      (t.url = N1(U1(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (P.isFormData(n)) {
      if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      St.hasStandardBrowserEnv &&
      (r && P.isFunction(r) && (r = r(t)), r || (r !== !1 && f6(t.url)))
    ) {
      const u = i && o && d6.read(o);
      u && s.set(i, u);
    }
    return t;
  },
  g6 = typeof XMLHttpRequest < "u",
  m6 =
    g6 &&
    function (e) {
      return new Promise(function (n, r) {
        const i = B1(e);
        let o = i.data;
        const s = jt.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = i,
          c,
          f,
          d,
          g,
          v;
        function y() {
          g && g(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c);
        }
        let x = new XMLHttpRequest();
        x.open(i.method.toUpperCase(), i.url, !0), (x.timeout = i.timeout);
        function m() {
          if (!x) return;
          const w = jt.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders()
            ),
            R = {
              data:
                !a || a === "text" || a === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: w,
              config: e,
              request: x,
            };
          F1(
            function ($) {
              n($), y();
            },
            function ($) {
              r($), y();
            },
            R
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = m)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (x.onabort = function () {
            x &&
              (r(new ue("Request aborted", ue.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function () {
            r(new ue("Network Error", ue.ERR_NETWORK, e, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let E = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const R = i.transitional || j1;
            i.timeoutErrorMessage && (E = i.timeoutErrorMessage),
              r(
                new ue(
                  E,
                  R.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
                  e,
                  x
                )
              ),
              (x = null);
          }),
          o === void 0 && s.setContentType(null),
          "setRequestHeader" in x &&
            P.forEach(s.toJSON(), function (E, R) {
              x.setRequestHeader(R, E);
            }),
          P.isUndefined(i.withCredentials) ||
            (x.withCredentials = !!i.withCredentials),
          a && a !== "json" && (x.responseType = i.responseType),
          u && (([d, v] = jl(u, !0)), x.addEventListener("progress", d)),
          l &&
            x.upload &&
            (([f, g] = jl(l)),
            x.upload.addEventListener("progress", f),
            x.upload.addEventListener("loadend", g)),
          (i.cancelToken || i.signal) &&
            ((c = (w) => {
              x &&
                (r(!w || w.type ? new Co(null, e, x) : w),
                x.abort(),
                (x = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const h = l6(i.url);
        if (h && St.protocols.indexOf(h) === -1) {
          r(new ue("Unsupported protocol " + h + ":", ue.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(o || null);
      });
    },
  y6 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const o = function (u) {
        if (!i) {
          (i = !0), a();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof ue ? c : new Co(c instanceof Error ? c.message : c)
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), o(new ue(`timeout ${t} of ms exceeded`, ue.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(o)
              : u.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", o));
      const { signal: l } = r;
      return (l.unsubscribe = () => P.asap(a)), l;
    }
  },
  v6 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  w6 = async function* (e, t) {
    for await (const n of S6(e)) yield* v6(n, t);
  },
  S6 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Ig = (e, t, n, r) => {
    const i = w6(e, t);
    let o = 0,
      s,
      a = (l) => {
        s || ((s = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: c } = await i.next();
            if (u) {
              a(), l.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let d = (o += f);
              n(d);
            }
            l.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Su =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  z1 = Su && typeof ReadableStream == "function",
  _6 =
    Su &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  V1 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  b6 =
    z1 &&
    V1(() => {
      let e = !1;
      const t = new Request(St.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Dg = 64 * 1024,
  $f = z1 && V1(() => P.isReadableStream(new Response("").body)),
  $l = { stream: $f && ((e) => e.body) };
Su &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !$l[t] &&
        ($l[t] = P.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ue(
                `Response type '${t}' is not supported`,
                ue.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const x6 = async (e) => {
    if (e == null) return 0;
    if (P.isBlob(e)) return e.size;
    if (P.isSpecCompliantForm(e))
      return (
        await new Request(St.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (P.isArrayBufferView(e) || P.isArrayBuffer(e)) return e.byteLength;
    if ((P.isURLSearchParams(e) && (e = e + ""), P.isString(e)))
      return (await _6(e)).byteLength;
  },
  k6 = async (e, t) => {
    const n = P.toFiniteNumber(e.getContentLength());
    return n ?? x6(t);
  },
  E6 =
    Su &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: d,
      } = B1(e);
      u = u ? (u + "").toLowerCase() : "text";
      let g = y6([i, o && o.toAbortSignal()], s),
        v;
      const y =
        g &&
        g.unsubscribe &&
        (() => {
          g.unsubscribe();
        });
      let x;
      try {
        if (
          l &&
          b6 &&
          n !== "get" &&
          n !== "head" &&
          (x = await k6(c, r)) !== 0
        ) {
          let R = new Request(t, { method: "POST", body: r, duplex: "half" }),
            S;
          if (
            (P.isFormData(r) &&
              (S = R.headers.get("content-type")) &&
              c.setContentType(S),
            R.body)
          ) {
            const [$, O] = Ag(x, jl(Pg(l)));
            r = Ig(R.body, Dg, $, O);
          }
        }
        P.isString(f) || (f = f ? "include" : "omit");
        const m = "credentials" in Request.prototype;
        v = new Request(t, {
          ...d,
          signal: g,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: m ? f : void 0,
        });
        let h = await fetch(v);
        const w = $f && (u === "stream" || u === "response");
        if ($f && (a || (w && y))) {
          const R = {};
          ["status", "statusText", "headers"].forEach((W) => {
            R[W] = h[W];
          });
          const S = P.toFiniteNumber(h.headers.get("content-length")),
            [$, O] = (a && Ag(S, jl(Pg(a), !0))) || [];
          h = new Response(
            Ig(h.body, Dg, $, () => {
              O && O(), y && y();
            }),
            R
          );
        }
        u = u || "text";
        let E = await $l[P.findKey($l, u) || "text"](h, e);
        return (
          !w && y && y(),
          await new Promise((R, S) => {
            F1(R, S, {
              data: E,
              headers: jt.from(h.headers),
              status: h.status,
              statusText: h.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (m) {
        throw (
          (y && y(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new ue("Network Error", ue.ERR_NETWORK, e, v), {
                cause: m.cause || m,
              })
            : ue.from(m, m && m.code, e, v))
        );
      }
    }),
  Mf = { http: UP, xhr: m6, fetch: E6 };
P.forEach(Mf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ng = (e) => `- ${e}`,
  T6 = (e) => P.isFunction(e) || e === null || e === !1,
  H1 = {
    getAdapter: (e) => {
      e = P.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (
          ((r = n),
          !T6(n) && ((r = Mf[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ue(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ng).join(`
`)
            : " " + Ng(o[0])
          : "as no adapter specified";
        throw new ue(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Mf,
  };
function gc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Co(null, e);
}
function jg(e) {
  return (
    gc(e),
    (e.headers = jt.from(e.headers)),
    (e.data = hc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    H1.getAdapter(e.adapter || ta.adapter)(e).then(
      function (r) {
        return (
          gc(e),
          (r.data = hc.call(e, e.transformResponse, r)),
          (r.headers = jt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          M1(r) ||
            (gc(e),
            r &&
              r.response &&
              ((r.response.data = hc.call(e, e.transformResponse, r.response)),
              (r.response.headers = jt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const W1 = "1.7.8",
  _u = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    _u[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const $g = {};
_u.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      W1 +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, a) => {
    if (t === !1)
      throw new ue(
        i(s, " has been removed" + (n ? " in " + n : "")),
        ue.ERR_DEPRECATED
      );
    return (
      n &&
        !$g[s] &&
        (($g[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, a) : !0
    );
  };
};
_u.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function O6(e, t, n) {
  if (typeof e != "object")
    throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const a = e[o],
        l = a === void 0 || s(a, o, e);
      if (l !== !0)
        throw new ue("option " + o + " must be " + l, ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ue("Unknown option " + o, ue.ERR_BAD_OPTION);
  }
}
const Ka = { assertOptions: O6, validators: _u },
  Mn = Ka.validators;
let li = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Cg(), response: new Cg() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = wi(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Ka.assertOptions(
        r,
        {
          silentJSONParsing: Mn.transitional(Mn.boolean),
          forcedJSONParsing: Mn.transitional(Mn.boolean),
          clarifyTimeoutError: Mn.transitional(Mn.boolean),
        },
        !1
      ),
      i != null &&
        (P.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Ka.assertOptions(
              i,
              { encode: Mn.function, serialize: Mn.function },
              !0
            )),
      Ka.assertOptions(
        n,
        {
          baseUrl: Mn.spelling("baseURL"),
          withXsrfToken: Mn.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && P.merge(o.common, o[n.method]);
    o &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete o[v];
        }
      ),
      (n.headers = jt.concat(s, o));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const v = [jg.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, u),
          d = v.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(v[f++], v[f++]);
      return c;
    }
    d = a.length;
    let g = n;
    for (f = 0; f < d; ) {
      const v = a[f++],
        y = a[f++];
      try {
        g = v(g);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      c = jg.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = wi(this.defaults, t);
    const n = U1(t.baseURL, t.url);
    return N1(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function (t) {
  li.prototype[t] = function (n, r) {
    return this.request(
      wi(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, a) {
      return this.request(
        wi(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (li.prototype[t] = n()), (li.prototype[t + "Form"] = n(!0));
});
let C6 = class q1 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, a) {
        r.reason || ((r.reason = new Co(o, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new q1(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function R6(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function A6(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Ff = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ff).forEach(([e, t]) => {
  Ff[t] = e;
});
function K1(e) {
  const t = new li(e),
    n = x1(li.prototype.request, t);
  return (
    P.extend(n, li.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return K1(wi(e, i));
    }),
    n
  );
}
const Ue = K1(ta);
Ue.Axios = li;
Ue.CanceledError = Co;
Ue.CancelToken = C6;
Ue.isCancel = M1;
Ue.VERSION = W1;
Ue.toFormData = wu;
Ue.AxiosError = ue;
Ue.Cancel = Ue.CanceledError;
Ue.all = function (t) {
  return Promise.all(t);
};
Ue.spread = R6;
Ue.isAxiosError = A6;
Ue.mergeConfig = wi;
Ue.AxiosHeaders = jt;
Ue.formToJSON = (e) => $1(P.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = H1.getAdapter;
Ue.HttpStatusCode = Ff;
Ue.default = Ue;
const {
    Axios: y8,
    AxiosError: v8,
    CanceledError: w8,
    isCancel: S8,
    CancelToken: _8,
    VERSION: b8,
    all: x8,
    Cancel: k8,
    isAxiosError: E8,
    spread: T8,
    toFormData: O8,
    AxiosHeaders: C8,
    HttpStatusCode: R8,
    formToJSON: A8,
    getAdapter: P8,
    mergeConfig: L8,
  } = Ue,
  G1 = "https://TRADESIGNAL.com/api",
  tn = Ue.create({ withCredentials: !0, baseURL: G1 });
tn.interceptors.request.use(
  (e) => (
    (e.headers.Authorization = `Bearer ${localStorage.getItem("token")}`), e
  )
);
const nn = {
  AUTH: {
    LOGIN: "auth/login",
    REGISTER: "auth/registration",
    LOGOUT: "auth/logout",
    REFRESH: "auth/refresh",
    REFERRAL_ID: "auth/referralId",
    FORGOT_PASSWORD: "auth/forgotPassword",
    RESET_PASSWORD: "auth/resetPassword",
    ACTIVATE: "auth/activate",
    RESEND_ACTIVATION_EMAIL: "auth/resendActivationEmail",
  },
  SIGNAL: {
    START: "signal/start",
    STOP: "signal/stop",
    USER: "signal/user",
    USER_STATS: "signal/user/stats",
    USER_HISTORY: "signal/user/history",
    STATS: "signal/workingStats",
    DELETE_SIGNAL: "signal/user/admin/deleteSignal",
  },
  TRADER: { INFO: "trader/info" },
  USER: { JOIN_CONTEST: "user/joinContest" },
};
class Kr {
  static async login(t, n) {
    return tn.post(nn.AUTH.LOGIN, { email: t, password: n });
  }
  static async registration(t, n, r, i) {
    return tn.post(nn.AUTH.REGISTER, {
      email: t,
      password: n,
      lang: r,
      campaign: i,
    });
  }
  static async logout() {
    return tn.post(nn.AUTH.LOGOUT);
  }
  static async resendActivationEmail(t) {
    return tn.post(nn.AUTH.RESEND_ACTIVATION_EMAIL, { lang: t });
  }
  static async setReferralId(t) {
    return tn.post(nn.AUTH.REFERRAL_ID, { referralId: t });
  }
  static async forgotPassword(t, n) {
    return tn.post(nn.AUTH.FORGOT_PASSWORD, { email: t, lang: n });
  }
  static async resetPassword({ password: t, resetLink: n }) {
    return tn.post(`${nn.AUTH.RESET_PASSWORD}/${n}`, { newPassword: t });
  }
}
class mc {
  static async saveSignal(t, n) {
    return tn.post(`${nn.SIGNAL.USER}/${t}`, n);
  }
  static async deleteSignal(t) {
    tn.delete(`${nn.SIGNAL.DELETE_SIGNAL}/${t}`);
  }
  static async getSignals(t) {
    return tn.get(`${nn.SIGNAL.USER}/${t}`);
  }
  static async getStats() {
    return tn.get(nn.SIGNAL.STATS);
  }
}
const Us = {
    signal: "signal",
    prevSignal: "prevSignal",
    balance: "traderBalance",
    balanceCheckDate: "balanceCheckDate",
    signalInterval: "signalInterval",
    aiModel: "aiModel",
  },
  yc = () => {
    localStorage.removeItem(Us.signal);
  },
  P6 = () => {
    localStorage.removeItem(Us.balance),
      localStorage.removeItem(Us.balanceCheckDate);
  },
  L6 = "https://TRADESIGNAL.com/python_api",
  bu = Ue.create({ baseURL: L6 });
async function I6(e) {
  try {
    const { data: t } = await bu.get(`/signal${e ? "/" + e : ""}`),
      n = localStorage.getItem(Us.prevSignal);
    let r = null;
    if (n) {
      if (((r = JSON.parse(n)), Date.now() > (r == null ? void 0 : r.ttl))) {
        const i = { symbol: t.symbol, ttl: Date.now() + 12e5 };
        localStorage.setItem(Us.prevSignal, JSON.stringify(i));
      }
      if (
        (r == null ? void 0 : r.symbol) === t.symbol &&
        Date.now() < (r == null ? void 0 : r.ttl)
      )
        return I6(null);
    }
    return t;
  } catch (t) {
    return console.log(t), null;
  }
}
async function I8() {
  try {
    const { data: e } = await bu.get("/signal/vip");
    return e;
  } catch (e) {
    return console.log(e), null;
  }
}
async function D8(e, t) {
  try {
    const { data: n } = await bu.get(`/signal/M2/${e}`);
    return t && (n.signal = t), n;
  } catch (n) {
    return console.log(n), null;
  }
}
async function D6(e) {
  try {
    const { data: t } = await bu.get(`/price/${e}`);
    return t;
  } catch (t) {
    return console.log(t), null;
  }
}
async function N8({ openPrice: e, signal: t, symbol: n }) {
  const r = (await D6(n)).price,
    i = { openPrice: e, closePrice: r, isWinner: null };
  if (r === e) return i;
  switch (t) {
    case "BUY": {
      i.isWinner = r > e;
      break;
    }
    case "SELL": {
      i.isWinner = r < e;
      break;
    }
  }
  return i;
}
function j8({ symbol: e, signal: t, currentInterval: n }) {
  const r = e == null ? void 0 : e.slice(0, 3),
    i = e == null ? void 0 : e.slice(3);
  return {
    pair: `${r}/${i}`,
    signal: t,
    currentInterval: `${Math.ceil(n || 5)} MIN`,
  };
}
class N6 {
  constructor() {
    Ft(this, "user", {});
    Ft(this, "isAuth", !1);
    Ft(this, "isLoading", !1);
    Ft(this, "lang", "uk");
    w3(this);
  }
  setAuth(t) {
    this.isAuth = t;
  }
  setUser(t) {
    this.user = t;
  }
  setUserReferralID(t) {
    this.user = { ...this.user, referralId: t };
  }
  setLoading(t) {
    this.isLoading = t;
  }
  setLang(t) {
    this.lang = t;
  }
  setCampaign(t) {
    localStorage.setItem("campaign", t),
      (this.user = { ...this.user, campaign: t });
  }
  getCampaign() {
    return localStorage.getItem("campaign") || this.user.campaign || null;
  }
  async login(t, n) {
    var r, i, o;
    try {
      yc(), this.setLoading(!0);
      const s = await Kr.login(t, n);
      localStorage.setItem("token", s.data.accessToken),
        this.setAuth(!0),
        this.setUser(s.data.user);
    } catch (s) {
      return (
        console.log(
          (i = (r = s.response) == null ? void 0 : r.data) == null
            ? void 0
            : i.message
        ),
        (o = s.response) == null ? void 0 : o.data
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async registration(t, n) {
    var r, i, o;
    try {
      yc(), this.setLoading(!0);
      const s = await Kr.registration(t, n, this.lang, this.getCampaign());
      localStorage.setItem("token", s.data.accessToken),
        this.setAuth(!0),
        this.setUser(s.data.user);
    } catch (s) {
      return (
        console.log(
          (i = (r = s.response) == null ? void 0 : r.data) == null
            ? void 0
            : i.message
        ),
        (o = s.response) == null ? void 0 : o.data
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async logout() {
    var t, n;
    try {
      yc(),
        P6(),
        this.setLoading(!0),
        await Kr.logout(),
        localStorage.removeItem("token"),
        this.setAuth(!1),
        this.setUser({});
    } catch (r) {
      console.log(
        (n = (t = r.response) == null ? void 0 : t.data) == null
          ? void 0
          : n.message
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async checkAuth({ setLoading: t = !0 } = { setLoading: !0 }) {
    var n, r;
    this.setLoading(t);
    try {
      const i = await Ue.get(`${G1}/${nn.AUTH.REFRESH}`, {
        withCredentials: !0,
      });
      localStorage.setItem("token", i.data.accessToken),
        this.setAuth(!0),
        this.setUser(i.data.user);
    } catch (i) {
      return (
        console.log(
          (r = (n = i.response) == null ? void 0 : n.data) == null
            ? void 0
            : r.message
        ),
        !1
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async resendActivationEmail() {
    var t, n;
    this.setLoading(!0);
    try {
      await Kr.resendActivationEmail(this.lang);
    } catch (r) {
      console.log(
        (n = (t = r.response) == null ? void 0 : t.data) == null
          ? void 0
          : n.message
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async setReferralId(t) {
    var n, r, i, o;
    this.setLoading(!0);
    try {
      await Kr.setReferralId(t), this.setUserReferralID(t);
    } catch (s) {
      return (
        console.log(
          (r = (n = s.response) == null ? void 0 : n.data) == null
            ? void 0
            : r.message
        ),
        (o = (i = s.response) == null ? void 0 : i.data) == null
          ? void 0
          : o.message
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async forgotPassword(t) {
    var n, r, i, o;
    this.setLoading(!0);
    try {
      await Kr.forgotPassword(t, this.lang);
    } catch (s) {
      return (
        console.log(
          (r = (n = s.response) == null ? void 0 : n.data) == null
            ? void 0
            : r.message
        ),
        (o = (i = s.response) == null ? void 0 : i.data) == null
          ? void 0
          : o.message
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async resetPassword({ password: t, resetLink: n }) {
    var r, i, o, s;
    this.setLoading(!0);
    try {
      await Kr.resetPassword({ password: t, resetLink: n });
    } catch (a) {
      return (
        console.log(
          (i = (r = a.response) == null ? void 0 : r.data) == null
            ? void 0
            : i.message
        ),
        (s = (o = a.response) == null ? void 0 : o.data) == null
          ? void 0
          : s.message
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async saveSignal(t, n) {
    var r, i, o, s;
    try {
      await mc.saveSignal(t, n);
    } catch (a) {
      return (
        console.log(
          (i = (r = a.response) == null ? void 0 : r.data) == null
            ? void 0
            : i.message
        ),
        (s = (o = a.response) == null ? void 0 : o.data) == null
          ? void 0
          : s.message
      );
    }
  }
  async deleteSignal(t) {
    var n, r, i, o;
    this.setLoading(!0);
    try {
      await mc.deleteSignal(t);
    } catch (s) {
      return (
        console.log(
          (r = (n = s.response) == null ? void 0 : n.data) == null
            ? void 0
            : r.message
        ),
        (o = (i = s.response) == null ? void 0 : i.data) == null
          ? void 0
          : o.message
      );
    } finally {
      this.setLoading(!1);
    }
  }
  async getStats() {
    var t, n, r, i;
    try {
      return (await mc.getStats()).data;
    } catch (o) {
      return (
        console.log(
          (n = (t = o.response) == null ? void 0 : t.data) == null
            ? void 0
            : n.message
        ),
        (i = (r = o.response) == null ? void 0 : r.data) == null
          ? void 0
          : i.message
      );
    }
  }
}
var j6 = typeof Element < "u",
  $6 = typeof Map == "function",
  M6 = typeof Set == "function",
  F6 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ga(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ga(e[r], t[r])) return !1;
      return !0;
    }
    var o;
    if ($6 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!Ga(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (M6 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (F6 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (j6 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !Ga(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var U6 = function (t, n) {
  try {
    return Ga(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const B6 = Si(U6);
var z6 = function (e, t, n, r, i, o, s, a) {
    if (!e) {
      var l;
      if (t === void 0)
        l = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var u = [n, r, i, o, s, a],
          c = 0;
        (l = new Error(
          t.replace(/%s/g, function () {
            return u[c++];
          })
        )),
          (l.name = "Invariant Violation");
      }
      throw ((l.framesToPop = 1), l);
    }
  },
  V6 = z6;
const Mg = Si(V6);
var H6 = function (t, n, r, i) {
  var o = r ? r.call(i, t, n) : void 0;
  if (o !== void 0) return !!o;
  if (t === n) return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
  var s = Object.keys(t),
    a = Object.keys(n);
  if (s.length !== a.length) return !1;
  for (
    var l = Object.prototype.hasOwnProperty.bind(n), u = 0;
    u < s.length;
    u++
  ) {
    var c = s[u];
    if (!l(c)) return !1;
    var f = t[c],
      d = n[c];
    if (
      ((o = r ? r.call(i, f, d, c) : void 0),
      o === !1 || (o === void 0 && f !== d))
    )
      return !1;
  }
  return !0;
};
const W6 = Si(H6);
var Y1 = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(Y1 || {}),
  vc = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  Fg = Object.values(Y1),
  np = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  q6 = Object.entries(np).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  bn = "data-rh",
  so = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  ao = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  K6 = (e) => {
    let t = ao(e, "title");
    const n = ao(e, so.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), n && t))
      return n.replace(/%s/g, () => t);
    const r = ao(e, so.DEFAULT_TITLE);
    return t || r || void 0;
  },
  G6 = (e) => ao(e, so.ON_CHANGE_CLIENT_STATE) || (() => {}),
  wc = (e, t) =>
    t
      .filter((n) => typeof n[e] < "u")
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  Y6 = (e, t) =>
    t
      .filter((n) => typeof n.base < "u")
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const i = Object.keys(r);
          for (let o = 0; o < i.length; o += 1) {
            const a = i[o].toLowerCase();
            if (e.indexOf(a) !== -1 && r[a]) return n.concat(r);
          }
        }
        return n;
      }, []),
  Q6 = (e) => console && typeof console.warn == "function" && console.warn(e),
  Jo = (e, t, n) => {
    const r = {};
    return n
      .filter((i) =>
        Array.isArray(i[e])
          ? !0
          : (typeof i[e] < "u" &&
              Q6(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof i[
                  e
                ]}"`
              ),
            !1)
      )
      .map((i) => i[e])
      .reverse()
      .reduce((i, o) => {
        const s = {};
        o.filter((l) => {
          let u;
          const c = Object.keys(l);
          for (let d = 0; d < c.length; d += 1) {
            const g = c[d],
              v = g.toLowerCase();
            t.indexOf(v) !== -1 &&
              !(u === "rel" && l[u].toLowerCase() === "canonical") &&
              !(v === "rel" && l[v].toLowerCase() === "stylesheet") &&
              (u = v),
              t.indexOf(g) !== -1 &&
                (g === "innerHTML" || g === "cssText" || g === "itemprop") &&
                (u = g);
          }
          if (!u || !l[u]) return !1;
          const f = l[u].toLowerCase();
          return (
            r[u] || (r[u] = {}),
            s[u] || (s[u] = {}),
            r[u][f] ? !1 : ((s[u][f] = !0), !0)
          );
        })
          .reverse()
          .forEach((l) => i.push(l));
        const a = Object.keys(s);
        for (let l = 0; l < a.length; l += 1) {
          const u = a[l],
            c = { ...r[u], ...s[u] };
          r[u] = c;
        }
        return i;
      }, [])
      .reverse();
  },
  J6 = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  X6 = (e) => ({
    baseTag: Y6(["href"], e),
    bodyAttributes: wc("bodyAttributes", e),
    defer: ao(e, so.DEFER),
    encode: ao(e, so.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: wc("htmlAttributes", e),
    linkTags: Jo("link", ["rel", "href"], e),
    metaTags: Jo(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e
    ),
    noscriptTags: Jo("noscript", ["innerHTML"], e),
    onChangeClientState: G6(e),
    scriptTags: Jo("script", ["src", "innerHTML"], e),
    styleTags: Jo("style", ["cssText"], e),
    title: K6(e),
    titleAttributes: wc("titleAttributes", e),
    prioritizeSeoTags: J6(e, so.PRIORITIZE_SEO_TAGS),
  }),
  Q1 = (e) => (Array.isArray(e) ? e.join("") : e),
  Z6 = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  Sc = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (n, r) => (Z6(r, t) ? n.priority.push(r) : n.default.push(r), n),
          { priority: [], default: [] }
        )
      : { default: e, priority: [] },
  Ug = (e, t) => ({ ...e, [t]: void 0 }),
  e8 = ["noscript", "script", "style"],
  Uf = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  J1 = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ""),
  t8 = (e, t, n, r) => {
    const i = J1(n),
      o = Q1(t);
    return i
      ? `<${e} ${bn}="true" ${i}>${Uf(o, r)}</${e}>`
      : `<${e} ${bn}="true">${Uf(o, r)}</${e}>`;
  },
  n8 = (e, t, n = !0) =>
    t.reduce((r, i) => {
      const o = i,
        s = Object.keys(o)
          .filter((u) => !(u === "innerHTML" || u === "cssText"))
          .reduce((u, c) => {
            const f = typeof o[c] > "u" ? c : `${c}="${Uf(o[c], n)}"`;
            return u ? `${u} ${f}` : f;
          }, ""),
        a = o.innerHTML || o.cssText || "",
        l = e8.indexOf(e) === -1;
      return `${r}<${e} ${bn}="true" ${s}${l ? "/>" : `>${a}</${e}>`}`;
    }, ""),
  X1 = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const i = np[r];
      return (n[i || r] = e[r]), n;
    }, t),
  r8 = (e, t, n) => {
    const r = { key: t, [bn]: !0 },
      i = X1(n, r);
    return [_n.createElement("title", i, t)];
  },
  Ya = (e, t) =>
    t.map((n, r) => {
      const i = { key: r, [bn]: !0 };
      return (
        Object.keys(n).forEach((o) => {
          const a = np[o] || o;
          if (a === "innerHTML" || a === "cssText") {
            const l = n.innerHTML || n.cssText;
            i.dangerouslySetInnerHTML = { __html: l };
          } else i[a] = n[o];
        }),
        _n.createElement(e, i)
      );
    }),
  Zt = (e, t, n = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => r8(e, t.title, t.titleAttributes),
          toString: () => t8(e, t.title, t.titleAttributes, n),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => X1(t), toString: () => J1(t) };
      default:
        return { toComponent: () => Ya(e, t), toString: () => n8(e, t, n) };
    }
  },
  i8 = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const i = Sc(e, vc.meta),
      o = Sc(t, vc.link),
      s = Sc(n, vc.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...Ya("meta", i.priority),
          ...Ya("link", o.priority),
          ...Ya("script", s.priority),
        ],
        toString: () =>
          `${Zt("meta", i.priority, r)} ${Zt("link", o.priority, r)} ${Zt(
            "script",
            s.priority,
            r
          )}`,
      },
      metaTags: i.default,
      linkTags: o.default,
      scriptTags: s.default,
    };
  },
  o8 = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: i,
      noscriptTags: o,
      styleTags: s,
      title: a = "",
      titleAttributes: l,
      prioritizeSeoTags: u,
    } = e;
    let { linkTags: c, metaTags: f, scriptTags: d } = e,
      g = { toComponent: () => {}, toString: () => "" };
    return (
      u &&
        ({
          priorityMethods: g,
          linkTags: c,
          metaTags: f,
          scriptTags: d,
        } = i8(e)),
      {
        priority: g,
        base: Zt("base", t, r),
        bodyAttributes: Zt("bodyAttributes", n, r),
        htmlAttributes: Zt("htmlAttributes", i, r),
        link: Zt("link", c, r),
        meta: Zt("meta", f, r),
        noscript: Zt("noscript", o, r),
        script: Zt("script", d, r),
        style: Zt("style", s, r),
        title: Zt("title", { title: a, titleAttributes: l }, r),
      }
    );
  },
  Bf = o8,
  Ca = [],
  Z1 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  zf = class {
    constructor(e, t) {
      Ft(this, "instances", []);
      Ft(this, "canUseDOM", Z1);
      Ft(this, "context");
      Ft(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Ca : this.instances),
          add: (e) => {
            (this.canUseDOM ? Ca : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? Ca : this.instances).indexOf(e);
            (this.canUseDOM ? Ca : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = Bf({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  s8 = {},
  e0 = _n.createContext(s8),
  ri,
  t0 =
    ((ri = class extends p.Component {
      constructor(n) {
        super(n);
        Ft(this, "helmetData");
        this.helmetData = new zf(this.props.context || {}, ri.canUseDOM);
      }
      render() {
        return _n.createElement(
          e0.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    Ft(ri, "canUseDOM", Z1),
    ri),
  Mi = (e, t) => {
    const n = document.head || document.querySelector("head"),
      r = n.querySelectorAll(`${e}[${bn}]`),
      i = [].slice.call(r),
      o = [];
    let s;
    return (
      t &&
        t.length &&
        t.forEach((a) => {
          const l = document.createElement(e);
          for (const u in a)
            if (Object.prototype.hasOwnProperty.call(a, u))
              if (u === "innerHTML") l.innerHTML = a.innerHTML;
              else if (u === "cssText")
                l.styleSheet
                  ? (l.styleSheet.cssText = a.cssText)
                  : l.appendChild(document.createTextNode(a.cssText));
              else {
                const c = u,
                  f = typeof a[c] > "u" ? "" : a[c];
                l.setAttribute(u, f);
              }
          l.setAttribute(bn, "true"),
            i.some((u, c) => ((s = c), l.isEqualNode(u)))
              ? i.splice(s, 1)
              : o.push(l);
        }),
      i.forEach((a) => {
        var l;
        return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
      }),
      o.forEach((a) => n.appendChild(a)),
      { oldTags: i, newTags: o }
    );
  },
  Vf = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(bn),
      i = r ? r.split(",") : [],
      o = [...i],
      s = Object.keys(t);
    for (const a of s) {
      const l = t[a] || "";
      n.getAttribute(a) !== l && n.setAttribute(a, l),
        i.indexOf(a) === -1 && i.push(a);
      const u = o.indexOf(a);
      u !== -1 && o.splice(u, 1);
    }
    for (let a = o.length - 1; a >= 0; a -= 1) n.removeAttribute(o[a]);
    i.length === o.length
      ? n.removeAttribute(bn)
      : n.getAttribute(bn) !== s.join(",") && n.setAttribute(bn, s.join(","));
  },
  a8 = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = Q1(e)),
      Vf("title", t);
  },
  Bg = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: i,
      linkTags: o,
      metaTags: s,
      noscriptTags: a,
      onChangeClientState: l,
      scriptTags: u,
      styleTags: c,
      title: f,
      titleAttributes: d,
    } = e;
    Vf("body", r), Vf("html", i), a8(f, d);
    const g = {
        baseTag: Mi("base", n),
        linkTags: Mi("link", o),
        metaTags: Mi("meta", s),
        noscriptTags: Mi("noscript", a),
        scriptTags: Mi("script", u),
        styleTags: Mi("style", c),
      },
      v = {},
      y = {};
    Object.keys(g).forEach((x) => {
      const { newTags: m, oldTags: h } = g[x];
      m.length && (v[x] = m), h.length && (y[x] = g[x].oldTags);
    }),
      t && t(),
      l(e, v, y);
  },
  Xo = null,
  l8 = (e) => {
    Xo && cancelAnimationFrame(Xo),
      e.defer
        ? (Xo = requestAnimationFrame(() => {
            Bg(e, () => {
              Xo = null;
            });
          }))
        : (Bg(e), (Xo = null));
  },
  u8 = l8,
  zg = class extends p.Component {
    constructor() {
      super(...arguments);
      Ft(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !W6(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const i = X6(
        t.get().map((o) => {
          const s = { ...o.props };
          return delete s.context, s;
        })
      );
      t0.canUseDOM ? u8(i) : Bf && (r = Bf(i)), n(r);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  _c,
  $8 =
    ((_c = class extends p.Component {
      shouldComponentUpdate(e) {
        return !B6(Ug(this.props, "helmetData"), Ug(e, "helmetData"));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...n, ...this.mapNestedChildrenToProps(e, r) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case "body":
            return { ...t, bodyAttributes: { ...n } };
          case "html":
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          Mg(
            Fg.some((n) => e.type === n),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Fg.join(
                  ", "
                )} are allowed. Helmet does not support rendering <${
                  e.type
                }> elements. Refer to our API for more information.`
          ),
          Mg(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((n) => typeof n != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          _n.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: i, ...o } = r.props,
              s = Object.keys(o).reduce(
                (l, u) => ((l[q6[u] || u] = o[u]), l),
                {}
              );
            let { type: a } = r;
            switch (
              (typeof a == "symbol"
                ? (a = a.toString())
                : this.warnOnInvalidChildren(r, i),
              a)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(i, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                n = this.flattenArrayTypeChildren(r, n, s, i);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, s, i);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if (
          (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof zf))
        ) {
          const i = r;
          (r = new zf(i.context, !0)), delete n.helmetData;
        }
        return r
          ? _n.createElement(zg, { ...n, context: r.value })
          : _n.createElement(e0.Consumer, null, (i) =>
              _n.createElement(zg, { ...n, context: i })
            );
      }
    }),
    Ft(_c, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    _c);
const n0 = new N6(),
  Oi = p.createContext({ store: n0 });
nv(document.getElementById("root")).render(
  b.jsx(p.StrictMode, {
    children: b.jsx(Oi.Provider, {
      value: { store: n0 },
      children: b.jsx(t0, { children: b.jsx(eP, {}) }),
    }),
  })
);
export {
  v8 as A,
  I8 as B,
  Oi as C,
  I6 as D,
  nn as E,
  Yk as F,
  D6 as G,
  XA as H,
  Q_ as I,
  rt as J,
  U6 as K,
  Et as L,
  bk as M,
  zd as N,
  $8 as O,
  N2 as R,
  p8 as T,
  yg as _,
  _n as a,
  qs as b,
  en as c,
  Hd as d,
  yr as e,
  G_ as f,
  Si as g,
  q_ as h,
  si as i,
  b as j,
  M_ as k,
  U_ as l,
  Us as m,
  l0 as n,
  Zs as o,
  f8 as p,
  h8 as q,
  p as r,
  d8 as s,
  pb as t,
  ou as u,
  N8 as v,
  vf as w,
  j8 as x,
  tn as y,
  D8 as z,
};
