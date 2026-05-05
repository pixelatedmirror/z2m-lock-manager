var Dv = Object.defineProperty;
var Bv = (e, t, n) => t in e ? Dv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ko = (e, t, n) => (Bv(e, typeof t != "symbol" ? t + "" : t, n), n);
function Wv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function qp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function En(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Zp = { exports: {} }, ul = {}, Jp = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ei = Symbol.for("react.element"), Uv = Symbol.for("react.portal"), Hv = Symbol.for("react.fragment"), Vv = Symbol.for("react.strict_mode"), Kv = Symbol.for("react.profiler"), Gv = Symbol.for("react.provider"), Yv = Symbol.for("react.context"), Qv = Symbol.for("react.forward_ref"), Xv = Symbol.for("react.suspense"), qv = Symbol.for("react.memo"), Zv = Symbol.for("react.lazy"), Od = Symbol.iterator;
function Jv(e) {
  return e === null || typeof e != "object" ? null : (e = Od && e[Od] || e["@@iterator"], typeof e == "function" ? e : null);
}
var em = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, tm = Object.assign, nm = {};
function mo(e, t, n) {
  this.props = e, this.context = t, this.refs = nm, this.updater = n || em;
}
mo.prototype.isReactComponent = {};
mo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rm() {
}
rm.prototype = mo.prototype;
function lc(e, t, n) {
  this.props = e, this.context = t, this.refs = nm, this.updater = n || em;
}
var ac = lc.prototype = new rm();
ac.constructor = lc;
tm(ac, mo.prototype);
ac.isPureReactComponent = !0;
var Ld = Array.isArray, om = Object.prototype.hasOwnProperty, uc = { current: null }, im = { key: !0, ref: !0, __self: !0, __source: !0 };
function sm(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      om.call(t, r) && !im.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l)
      o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Ei, type: e, key: i, ref: s, props: o, _owner: uc.current };
}
function e0(e, t) {
  return { $$typeof: Ei, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ei;
}
function t0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zd = /\/+/g;
function fa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? t0("" + e.key) : t.toString(36);
}
function us(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null)
    s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ei:
          case Uv:
            s = !0;
        }
    }
  if (s)
    return s = e, o = o(s), e = r === "" ? "." + fa(s, 0) : r, Ld(o) ? (n = "", e != null && (n = e.replace(zd, "$&/") + "/"), us(o, t, n, "", function(u) {
      return u;
    })) : o != null && (cc(o) && (o = e0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(zd, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Ld(e))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + fa(i, l);
      s += us(i, t, n, a, o);
    }
  else if (a = Jv(e), typeof a == "function")
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      i = i.value, a = r + fa(i, l++), s += us(i, t, n, a, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Fi(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return us(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function n0(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var at = { current: null }, cs = { transition: null }, r0 = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: cs, ReactCurrentOwner: uc };
function lm() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: Fi, forEach: function(e, t, n) {
  Fi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Fi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Fi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cc(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = mo;
ie.Fragment = Hv;
ie.Profiler = Kv;
ie.PureComponent = lc;
ie.StrictMode = Vv;
ie.Suspense = Xv;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
ie.act = lm;
ie.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = tm({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = uc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (a in t)
      om.call(t, a) && !im.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ei, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ie.createContext = function(e) {
  return e = { $$typeof: Yv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Gv, _context: e }, e.Consumer = e;
};
ie.createElement = sm;
ie.createFactory = function(e) {
  var t = sm.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: Qv, render: e };
};
ie.isValidElement = cc;
ie.lazy = function(e) {
  return { $$typeof: Zv, _payload: { _status: -1, _result: e }, _init: n0 };
};
ie.memo = function(e, t) {
  return { $$typeof: qv, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
ie.unstable_act = lm;
ie.useCallback = function(e, t) {
  return at.current.useCallback(e, t);
};
ie.useContext = function(e) {
  return at.current.useContext(e);
};
ie.useDebugValue = function() {
};
ie.useDeferredValue = function(e) {
  return at.current.useDeferredValue(e);
};
ie.useEffect = function(e, t) {
  return at.current.useEffect(e, t);
};
ie.useId = function() {
  return at.current.useId();
};
ie.useImperativeHandle = function(e, t, n) {
  return at.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function(e, t) {
  return at.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function(e, t) {
  return at.current.useLayoutEffect(e, t);
};
ie.useMemo = function(e, t) {
  return at.current.useMemo(e, t);
};
ie.useReducer = function(e, t, n) {
  return at.current.useReducer(e, t, n);
};
ie.useRef = function(e) {
  return at.current.useRef(e);
};
ie.useState = function(e) {
  return at.current.useState(e);
};
ie.useSyncExternalStore = function(e, t, n) {
  return at.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function() {
  return at.current.useTransition();
};
ie.version = "18.3.1";
Jp.exports = ie;
var y = Jp.exports;
const it = /* @__PURE__ */ qp(y), Ja = /* @__PURE__ */ Wv({
  __proto__: null,
  default: it
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o0 = y, i0 = Symbol.for("react.element"), s0 = Symbol.for("react.fragment"), l0 = Object.prototype.hasOwnProperty, a0 = o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function am(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    l0.call(t, r) && !u0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: i0, type: e, key: i, ref: s, props: o, _owner: a0.current };
}
ul.Fragment = s0;
ul.jsx = am;
ul.jsxs = am;
Zp.exports = ul;
var w = Zp.exports, eu = {}, um = { exports: {} }, Pt = {}, cm = { exports: {} }, dm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, A) {
    var D = R.length;
    R.push(A);
    e:
      for (; 0 < D; ) {
        var Y = D - 1 >>> 1, ee = R[Y];
        if (0 < o(ee, A))
          R[Y] = A, R[D] = ee, D = Y;
        else
          break e;
      }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0)
      return null;
    var A = R[0], D = R.pop();
    if (D !== A) {
      R[0] = D;
      e:
        for (var Y = 0, ee = R.length, fe = ee >>> 1; Y < fe; ) {
          var Z = 2 * (Y + 1) - 1, ue = R[Z], se = Z + 1, Ne = R[se];
          if (0 > o(ue, D))
            se < ee && 0 > o(Ne, ue) ? (R[Y] = Ne, R[se] = D, Y = se) : (R[Y] = ue, R[Z] = D, Y = Z);
          else if (se < ee && 0 > o(Ne, D))
            R[Y] = Ne, R[se] = D, Y = se;
          else
            break e;
        }
    }
    return A;
  }
  function o(R, A) {
    var D = R.sortIndex - A.sortIndex;
    return D !== 0 ? D : R.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], c = 1, d = null, p = 3, C = !1, S = !1, x = !1, P = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null)
        r(u);
      else if (A.startTime <= R)
        r(u), A.sortIndex = A.expirationTime, t(a, A);
      else
        break;
      A = n(u);
    }
  }
  function v(R) {
    if (x = !1, m(R), !S)
      if (n(a) !== null)
        S = !0, j(E);
      else {
        var A = n(u);
        A !== null && B(v, A.startTime - R);
      }
  }
  function E(R, A) {
    S = !1, x && (x = !1, h($), $ = -1), C = !0;
    var D = p;
    try {
      for (m(A), d = n(a); d !== null && (!(d.expirationTime > A) || R && !F()); ) {
        var Y = d.callback;
        if (typeof Y == "function") {
          d.callback = null, p = d.priorityLevel;
          var ee = Y(d.expirationTime <= A);
          A = e.unstable_now(), typeof ee == "function" ? d.callback = ee : d === n(a) && r(a), m(A);
        } else
          r(a);
        d = n(a);
      }
      if (d !== null)
        var fe = !0;
      else {
        var Z = n(u);
        Z !== null && B(v, Z.startTime - A), fe = !1;
      }
      return fe;
    } finally {
      d = null, p = D, C = !1;
    }
  }
  var b = !1, k = null, $ = -1, M = 5, T = -1;
  function F() {
    return !(e.unstable_now() - T < M);
  }
  function L() {
    if (k !== null) {
      var R = e.unstable_now();
      T = R;
      var A = !0;
      try {
        A = k(!0, R);
      } finally {
        A ? I() : (b = !1, k = null);
      }
    } else
      b = !1;
  }
  var I;
  if (typeof f == "function")
    I = function() {
      f(L);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), z = N.port2;
    N.port1.onmessage = L, I = function() {
      z.postMessage(null);
    };
  } else
    I = function() {
      P(L, 0);
    };
  function j(R) {
    k = R, b || (b = !0, I());
  }
  function B(R, A) {
    $ = P(function() {
      R(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    S || C || (S = !0, j(E));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = p;
    }
    var D = p;
    p = A;
    try {
      return R();
    } finally {
      p = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, A) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var D = p;
    p = R;
    try {
      return A();
    } finally {
      p = D;
    }
  }, e.unstable_scheduleCallback = function(R, A, D) {
    var Y = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? Y + D : Y) : D = Y, R) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = D + ee, R = { id: c++, callback: A, priorityLevel: R, startTime: D, expirationTime: ee, sortIndex: -1 }, D > Y ? (R.sortIndex = D, t(u, R), n(a) === null && R === n(u) && (x ? (h($), $ = -1) : x = !0, B(v, D - Y))) : (R.sortIndex = ee, t(a, R), S || C || (S = !0, j(E))), R;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(R) {
    var A = p;
    return function() {
      var D = p;
      p = A;
      try {
        return R.apply(this, arguments);
      } finally {
        p = D;
      }
    };
  };
})(dm);
cm.exports = dm;
var c0 = cm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0 = y, Et = c0;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fm = /* @__PURE__ */ new Set(), ri = {};
function Cr(e, t) {
  eo(e, t), eo(e + "Capture", t);
}
function eo(e, t) {
  for (ri[e] = t, e = 0; e < t.length; e++)
    fm.add(t[e]);
}
var Cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tu = Object.prototype.hasOwnProperty, f0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ad = {}, Fd = {};
function p0(e) {
  return tu.call(Fd, e) ? !0 : tu.call(Ad, e) ? !1 : f0.test(e) ? Fd[e] = !0 : (Ad[e] = !0, !1);
}
function m0(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function h0(e, t, n, r) {
  if (t === null || typeof t > "u" || m0(e, t, n, r))
    return !0;
  if (r)
    return !1;
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
function ut(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Xe[e] = new ut(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Xe[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Xe[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Xe[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Xe[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Xe[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Xe[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Xe[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Xe[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var dc = /[\-:]([a-z])/g;
function fc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    dc,
    fc
  );
  Xe[t] = new ut(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(dc, fc);
  Xe[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(dc, fc);
  Xe[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new ut("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pc(e, t, n, r) {
  var o = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (h0(t, n, o, r) && (n = null), r || o === null ? p0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pn = d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ji = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Lr = Symbol.for("react.fragment"), mc = Symbol.for("react.strict_mode"), nu = Symbol.for("react.profiler"), pm = Symbol.for("react.provider"), mm = Symbol.for("react.context"), hc = Symbol.for("react.forward_ref"), ru = Symbol.for("react.suspense"), ou = Symbol.for("react.suspense_list"), gc = Symbol.for("react.memo"), Nn = Symbol.for("react.lazy"), hm = Symbol.for("react.offscreen"), jd = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object" ? null : (e = jd && e[jd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Te = Object.assign, pa;
function jo(e) {
  if (pa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pa = t && t[1] || "";
    }
  return `
` + pa + e;
}
var ma = !1;
function ha(e, t) {
  if (!e || ma)
    return "";
  ma = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
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
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if (s--, l--, 0 > l || o[s] !== i[l]) {
                var a = `
` + o[s].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ma = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? jo(e) : "";
}
function g0(e) {
  switch (e.tag) {
    case 5:
      return jo(e.type);
    case 16:
      return jo("Lazy");
    case 13:
      return jo("Suspense");
    case 19:
      return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ha(e.type, !1), e;
    case 11:
      return e = ha(e.type.render, !1), e;
    case 1:
      return e = ha(e.type, !0), e;
    default:
      return "";
  }
}
function iu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Or:
      return "Portal";
    case nu:
      return "Profiler";
    case mc:
      return "StrictMode";
    case ru:
      return "Suspense";
    case ou:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mm:
        return (e.displayName || "Context") + ".Consumer";
      case pm:
        return (e._context.displayName || "Context") + ".Provider";
      case hc:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case gc:
        return t = e.displayName || null, t !== null ? t : iu(e.type) || "Memo";
      case Nn:
        t = e._payload, e = e._init;
        try {
          return iu(e(t));
        } catch {
        }
    }
  return null;
}
function v0(e) {
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
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
      return iu(t);
    case 8:
      return t === mc ? "StrictMode" : "Mode";
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
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Yn(e) {
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
function gm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function y0(e) {
  var t = gm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Di(e) {
  e._valueTracker || (e._valueTracker = y0(e));
}
function vm(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = gm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Rs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function su(e, t) {
  var n = t.checked;
  return Te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Dd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Yn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ym(e, t) {
  t = t.checked, t != null && pc(e, "checked", t, !1);
}
function lu(e, t) {
  ym(e, t);
  var n = Yn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? au(e, t.type, n) : t.hasOwnProperty("defaultValue") && au(e, t.type, Yn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Bd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function au(e, t, n) {
  (t !== "number" || Rs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Do = Array.isArray;
function Kr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function uu(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return Te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Wd(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(O(92));
      if (Do(n)) {
        if (1 < n.length)
          throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Yn(n) };
}
function xm(e, t) {
  var n = Yn(t.value), r = Yn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ud(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Bi, Cm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Bi = Bi || document.createElement("div"), Bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Bi.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function oi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
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
  strokeWidth: !0
}, x0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function(e) {
  x0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vo[t] = Vo[e];
  });
});
function wm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vo.hasOwnProperty(e) && Vo[e] ? ("" + t).trim() : t + "px";
}
function bm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = wm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var S0 = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function du(e, t) {
  if (t) {
    if (S0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function fu(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
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
var pu = null;
function vc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var mu = null, Gr = null, Yr = null;
function Hd(e) {
  if (e = Ri(e)) {
    if (typeof mu != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = ml(t), mu(e.stateNode, e.type, t));
  }
}
function km(e) {
  Gr ? Yr ? Yr.push(e) : Yr = [e] : Gr = e;
}
function Em() {
  if (Gr) {
    var e = Gr, t = Yr;
    if (Yr = Gr = null, Hd(e), t)
      for (e = 0; e < t.length; e++)
        Hd(t[e]);
  }
}
function Pm(e, t) {
  return e(t);
}
function $m() {
}
var ga = !1;
function Rm(e, t, n) {
  if (ga)
    return e(t, n);
  ga = !0;
  try {
    return Pm(e, t, n);
  } finally {
    ga = !1, (Gr !== null || Yr !== null) && ($m(), Em());
  }
}
function ii(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ml(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(O(231, t, typeof n));
  return n;
}
var hu = !1;
if (Cn)
  try {
    var Po = {};
    Object.defineProperty(Po, "passive", { get: function() {
      hu = !0;
    } }), window.addEventListener("test", Po, Po), window.removeEventListener("test", Po, Po);
  } catch {
    hu = !1;
  }
function C0(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ko = !1, Ts = null, _s = !1, gu = null, w0 = { onError: function(e) {
  Ko = !0, Ts = e;
} };
function b0(e, t, n, r, o, i, s, l, a) {
  Ko = !1, Ts = null, C0.apply(w0, arguments);
}
function k0(e, t, n, r, o, i, s, l, a) {
  if (b0.apply(this, arguments), Ko) {
    if (Ko) {
      var u = Ts;
      Ko = !1, Ts = null;
    } else
      throw Error(O(198));
    _s || (_s = !0, gu = u);
  }
}
function wr(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Vd(e) {
  if (wr(e) !== e)
    throw Error(O(188));
}
function E0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wr(e), t === null)
      throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return Vd(o), e;
        if (i === r)
          return Vd(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (l === r) {
          s = !0, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (l === r) {
            s = !0, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s)
          throw Error(O(189));
      }
    }
    if (n.alternate !== r)
      throw Error(O(190));
  }
  if (n.tag !== 3)
    throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function _m(e) {
  return e = E0(e), e !== null ? Im(e) : null;
}
function Im(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Im(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Mm = Et.unstable_scheduleCallback, Kd = Et.unstable_cancelCallback, P0 = Et.unstable_shouldYield, $0 = Et.unstable_requestPaint, Oe = Et.unstable_now, R0 = Et.unstable_getCurrentPriorityLevel, yc = Et.unstable_ImmediatePriority, Nm = Et.unstable_UserBlockingPriority, Is = Et.unstable_NormalPriority, T0 = Et.unstable_LowPriority, Om = Et.unstable_IdlePriority, cl = null, ln = null;
function _0(e) {
  if (ln && typeof ln.onCommitFiberRoot == "function")
    try {
      ln.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Xt = Math.clz32 ? Math.clz32 : N0, I0 = Math.log, M0 = Math.LN2;
function N0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (I0(e) / M0 | 0) | 0;
}
var Wi = 64, Ui = 4194304;
function Bo(e) {
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
function Ms(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Bo(l) : (i &= s, i !== 0 && (r = Bo(i)));
  } else
    s = n & ~o, s !== 0 ? r = Bo(s) : i !== 0 && (r = Bo(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Xt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function O0(e, t) {
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
function L0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Xt(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = O0(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function vu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lm() {
  var e = Wi;
  return Wi <<= 1, !(Wi & 4194240) && (Wi = 64), e;
}
function va(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Pi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xt(t), e[t] = n;
}
function z0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function xc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var me = 0;
function zm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Am, Sc, Fm, jm, Dm, yu = !1, Hi = [], jn = null, Dn = null, Bn = null, si = /* @__PURE__ */ new Map(), li = /* @__PURE__ */ new Map(), Ln = [], A0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jn = null;
      break;
    case "dragenter":
    case "dragleave":
      Dn = null;
      break;
    case "mouseover":
    case "mouseout":
      Bn = null;
      break;
    case "pointerover":
    case "pointerout":
      si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      li.delete(t.pointerId);
  }
}
function $o(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ri(t), t !== null && Sc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function F0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return jn = $o(jn, e, t, n, r, o), !0;
    case "dragenter":
      return Dn = $o(Dn, e, t, n, r, o), !0;
    case "mouseover":
      return Bn = $o(Bn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return si.set(i, $o(si.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, li.set(i, $o(li.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Bm(e) {
  var t = sr(e.target);
  if (t !== null) {
    var n = wr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Tm(n), t !== null) {
          e.blockedOn = t, Dm(e.priority, function() {
            Fm(n);
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
function ds(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      pu = r, n.target.dispatchEvent(r), pu = null;
    } else
      return t = Ri(n), t !== null && Sc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Yd(e, t, n) {
  ds(e) && n.delete(t);
}
function j0() {
  yu = !1, jn !== null && ds(jn) && (jn = null), Dn !== null && ds(Dn) && (Dn = null), Bn !== null && ds(Bn) && (Bn = null), si.forEach(Yd), li.forEach(Yd);
}
function Ro(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yu || (yu = !0, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, j0)));
}
function ai(e) {
  function t(o) {
    return Ro(o, e);
  }
  if (0 < Hi.length) {
    Ro(Hi[0], e);
    for (var n = 1; n < Hi.length; n++) {
      var r = Hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (jn !== null && Ro(jn, e), Dn !== null && Ro(Dn, e), Bn !== null && Ro(Bn, e), si.forEach(t), li.forEach(t), n = 0; n < Ln.length; n++)
    r = Ln[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ln.length && (n = Ln[0], n.blockedOn === null); )
    Bm(n), n.blockedOn === null && Ln.shift();
}
var Qr = Pn.ReactCurrentBatchConfig, Ns = !0;
function D0(e, t, n, r) {
  var o = me, i = Qr.transition;
  Qr.transition = null;
  try {
    me = 1, Cc(e, t, n, r);
  } finally {
    me = o, Qr.transition = i;
  }
}
function B0(e, t, n, r) {
  var o = me, i = Qr.transition;
  Qr.transition = null;
  try {
    me = 4, Cc(e, t, n, r);
  } finally {
    me = o, Qr.transition = i;
  }
}
function Cc(e, t, n, r) {
  if (Ns) {
    var o = xu(e, t, n, r);
    if (o === null)
      $a(e, t, r, Os, n), Gd(e, r);
    else if (F0(o, e, t, n, r))
      r.stopPropagation();
    else if (Gd(e, r), t & 4 && -1 < A0.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ri(o);
        if (i !== null && Am(i), i = xu(e, t, n, r), i === null && $a(e, t, r, Os, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      $a(e, t, r, null, n);
  }
}
var Os = null;
function xu(e, t, n, r) {
  if (Os = null, e = vc(r), e = sr(e), e !== null)
    if (t = wr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Tm(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Os = e, null;
}
function Wm(e) {
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
      switch (R0()) {
        case yc:
          return 1;
        case Nm:
          return 4;
        case Is:
        case T0:
          return 16;
        case Om:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var An = null, wc = null, fs = null;
function Um() {
  if (fs)
    return fs;
  var e, t = wc, n = t.length, r, o = "value" in An ? An.value : An.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ;
  return fs = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ps(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Vi() {
  return !0;
}
function Qd() {
  return !1;
}
function $t(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Vi : Qd, this.isPropagationStopped = Qd, this;
  }
  return Te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vi);
  }, persist: function() {
  }, isPersistent: Vi }), t;
}
var ho = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bc = $t(ho), $i = Te({}, ho, { view: 0, detail: 0 }), W0 = $t($i), ya, xa, To, dl = Te({}, $i, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== To && (To && e.type === "mousemove" ? (ya = e.screenX - To.screenX, xa = e.screenY - To.screenY) : xa = ya = 0, To = e), ya);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xa;
} }), Xd = $t(dl), U0 = Te({}, dl, { dataTransfer: 0 }), H0 = $t(U0), V0 = Te({}, $i, { relatedTarget: 0 }), Sa = $t(V0), K0 = Te({}, ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), G0 = $t(K0), Y0 = Te({}, ho, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Q0 = $t(Y0), X0 = Te({}, ho, { data: 0 }), qd = $t(X0), q0 = {
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
  MozPrintableKey: "Unidentified"
}, Z0 = {
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
  224: "Meta"
}, J0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ey(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = J0[e]) ? !!t[e] : !1;
}
function kc() {
  return ey;
}
var ty = Te({}, $i, { key: function(e) {
  if (e.key) {
    var t = q0[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ps(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Z0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kc, charCode: function(e) {
  return e.type === "keypress" ? ps(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ps(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ny = $t(ty), ry = Te({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zd = $t(ry), oy = Te({}, $i, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kc }), iy = $t(oy), sy = Te({}, ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ly = $t(sy), ay = Te({}, dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), uy = $t(ay), cy = [9, 13, 27, 32], Ec = Cn && "CompositionEvent" in window, Go = null;
Cn && "documentMode" in document && (Go = document.documentMode);
var dy = Cn && "TextEvent" in window && !Go, Hm = Cn && (!Ec || Go && 8 < Go && 11 >= Go), Jd = String.fromCharCode(32), ef = !1;
function Vm(e, t) {
  switch (e) {
    case "keyup":
      return cy.indexOf(t.keyCode) !== -1;
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
function Km(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zr = !1;
function fy(e, t) {
  switch (e) {
    case "compositionend":
      return Km(t);
    case "keypress":
      return t.which !== 32 ? null : (ef = !0, Jd);
    case "textInput":
      return e = t.data, e === Jd && ef ? null : e;
    default:
      return null;
  }
}
function py(e, t) {
  if (zr)
    return e === "compositionend" || !Ec && Vm(e, t) ? (e = Um(), fs = wc = An = null, zr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Hm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var my = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!my[e.type] : t === "textarea";
}
function Gm(e, t, n, r) {
  km(r), t = Ls(t, "onChange"), 0 < t.length && (n = new bc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Yo = null, ui = null;
function hy(e) {
  oh(e, 0);
}
function fl(e) {
  var t = jr(e);
  if (vm(t))
    return e;
}
function gy(e, t) {
  if (e === "change")
    return t;
}
var Ym = !1;
if (Cn) {
  var Ca;
  if (Cn) {
    var wa = "oninput" in document;
    if (!wa) {
      var nf = document.createElement("div");
      nf.setAttribute("oninput", "return;"), wa = typeof nf.oninput == "function";
    }
    Ca = wa;
  } else
    Ca = !1;
  Ym = Ca && (!document.documentMode || 9 < document.documentMode);
}
function rf() {
  Yo && (Yo.detachEvent("onpropertychange", Qm), ui = Yo = null);
}
function Qm(e) {
  if (e.propertyName === "value" && fl(ui)) {
    var t = [];
    Gm(t, ui, e, vc(e)), Rm(hy, t);
  }
}
function vy(e, t, n) {
  e === "focusin" ? (rf(), Yo = t, ui = n, Yo.attachEvent("onpropertychange", Qm)) : e === "focusout" && rf();
}
function yy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(ui);
}
function xy(e, t) {
  if (e === "click")
    return fl(t);
}
function Sy(e, t) {
  if (e === "input" || e === "change")
    return fl(t);
}
function Cy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Zt = typeof Object.is == "function" ? Object.is : Cy;
function ci(e, t) {
  if (Zt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!tu.call(t, o) || !Zt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function of(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function sf(e, t) {
  var n = of(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
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
    n = of(n);
  }
}
function Xm(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qm() {
  for (var e = window, t = Rs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Rs(e.document);
  }
  return t;
}
function Pc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function wy(e) {
  var t = qm(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xm(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = sf(n, i);
        var s = sf(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var by = Cn && "documentMode" in document && 11 >= document.documentMode, Ar = null, Su = null, Qo = null, Cu = !1;
function lf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cu || Ar == null || Ar !== Rs(r) || (r = Ar, "selectionStart" in r && Pc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qo && ci(Qo, r) || (Qo = r, r = Ls(Su, "onSelect"), 0 < r.length && (t = new bc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
}
function Ki(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Fr = { animationend: Ki("Animation", "AnimationEnd"), animationiteration: Ki("Animation", "AnimationIteration"), animationstart: Ki("Animation", "AnimationStart"), transitionend: Ki("Transition", "TransitionEnd") }, ba = {}, Zm = {};
Cn && (Zm = document.createElement("div").style, "AnimationEvent" in window || (delete Fr.animationend.animation, delete Fr.animationiteration.animation, delete Fr.animationstart.animation), "TransitionEvent" in window || delete Fr.transitionend.transition);
function pl(e) {
  if (ba[e])
    return ba[e];
  if (!Fr[e])
    return e;
  var t = Fr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Zm)
      return ba[e] = t[n];
  return e;
}
var Jm = pl("animationend"), eh = pl("animationiteration"), th = pl("animationstart"), nh = pl("transitionend"), rh = /* @__PURE__ */ new Map(), af = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xn(e, t) {
  rh.set(e, t), Cr(t, [e]);
}
for (var ka = 0; ka < af.length; ka++) {
  var Ea = af[ka], ky = Ea.toLowerCase(), Ey = Ea[0].toUpperCase() + Ea.slice(1);
  Xn(ky, "on" + Ey);
}
Xn(Jm, "onAnimationEnd");
Xn(eh, "onAnimationIteration");
Xn(th, "onAnimationStart");
Xn("dblclick", "onDoubleClick");
Xn("focusin", "onFocus");
Xn("focusout", "onBlur");
Xn(nh, "onTransitionEnd");
eo("onMouseEnter", ["mouseout", "mouseover"]);
eo("onMouseLeave", ["mouseout", "mouseover"]);
eo("onPointerEnter", ["pointerout", "pointerover"]);
eo("onPointerLeave", ["pointerout", "pointerover"]);
Cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Py = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));
function uf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, k0(r, t, void 0, e), e.currentTarget = null;
}
function oh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s], a = l.instance, u = l.currentTarget;
          if (l = l.listener, a !== i && o.isPropagationStopped())
            break e;
          uf(o, l, u), i = a;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped())
            break e;
          uf(o, l, u), i = a;
        }
    }
  }
  if (_s)
    throw e = gu, _s = !1, gu = null, e;
}
function Se(e, t) {
  var n = t[Pu];
  n === void 0 && (n = t[Pu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ih(t, e, 2, !1), n.add(r));
}
function Pa(e, t, n) {
  var r = 0;
  t && (r |= 4), ih(n, e, r, t);
}
var Gi = "_reactListening" + Math.random().toString(36).slice(2);
function di(e) {
  if (!e[Gi]) {
    e[Gi] = !0, fm.forEach(function(n) {
      n !== "selectionchange" && (Py.has(n) || Pa(n, !1, e), Pa(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gi] || (t[Gi] = !0, Pa("selectionchange", !1, t));
  }
}
function ih(e, t, n, r) {
  switch (Wm(t)) {
    case 1:
      var o = D0;
      break;
    case 4:
      o = B0;
      break;
    default:
      o = Cc;
  }
  n = o.bind(null, t, n, e), o = void 0, !hu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function $a(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var l = r.stateNode.containerInfo;
          if (l === o || l.nodeType === 8 && l.parentNode === o)
            break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var a = s.tag;
              if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o))
                return;
              s = s.return;
            }
          for (; l !== null; ) {
            if (s = sr(l), s === null)
              return;
            if (a = s.tag, a === 5 || a === 6) {
              r = i = s;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
  Rm(function() {
    var u = i, c = vc(n), d = [];
    e: {
      var p = rh.get(e);
      if (p !== void 0) {
        var C = bc, S = e;
        switch (e) {
          case "keypress":
            if (ps(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            C = ny;
            break;
          case "focusin":
            S = "focus", C = Sa;
            break;
          case "focusout":
            S = "blur", C = Sa;
            break;
          case "beforeblur":
          case "afterblur":
            C = Sa;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Xd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = H0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = iy;
            break;
          case Jm:
          case eh:
          case th:
            C = G0;
            break;
          case nh:
            C = ly;
            break;
          case "scroll":
            C = W0;
            break;
          case "wheel":
            C = uy;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Q0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Zd;
        }
        var x = (t & 4) !== 0, P = !x && e === "scroll", h = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var v = m.stateNode;
          if (m.tag === 5 && v !== null && (m = v, h !== null && (v = ii(f, h), v != null && x.push(fi(f, v, m)))), P)
            break;
          f = f.return;
        }
        0 < x.length && (p = new C(p, S, null, n, c), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", p && n !== pu && (S = n.relatedTarget || n.fromElement) && (sr(S) || S[wn]))
          break e;
        if ((C || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, C ? (S = n.relatedTarget || n.toElement, C = u, S = S ? sr(S) : null, S !== null && (P = wr(S), S !== P || S.tag !== 5 && S.tag !== 6) && (S = null)) : (C = null, S = u), C !== S)) {
          if (x = Xd, v = "onMouseLeave", h = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (x = Zd, v = "onPointerLeave", h = "onPointerEnter", f = "pointer"), P = C == null ? p : jr(C), m = S == null ? p : jr(S), p = new x(v, f + "leave", C, n, c), p.target = P, p.relatedTarget = m, v = null, sr(c) === u && (x = new x(h, f + "enter", S, n, c), x.target = m, x.relatedTarget = P, v = x), P = v, C && S)
            t: {
              for (x = C, h = S, f = 0, m = x; m; m = kr(m))
                f++;
              for (m = 0, v = h; v; v = kr(v))
                m++;
              for (; 0 < f - m; )
                x = kr(x), f--;
              for (; 0 < m - f; )
                h = kr(h), m--;
              for (; f--; ) {
                if (x === h || h !== null && x === h.alternate)
                  break t;
                x = kr(x), h = kr(h);
              }
              x = null;
            }
          else
            x = null;
          C !== null && cf(d, p, C, x, !1), S !== null && P !== null && cf(d, P, S, x, !0);
        }
      }
      e: {
        if (p = u ? jr(u) : window, C = p.nodeName && p.nodeName.toLowerCase(), C === "select" || C === "input" && p.type === "file")
          var E = gy;
        else if (tf(p))
          if (Ym)
            E = Sy;
          else {
            E = yy;
            var b = vy;
          }
        else
          (C = p.nodeName) && C.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = xy);
        if (E && (E = E(e, u))) {
          Gm(d, E, n, c);
          break e;
        }
        b && b(e, p, u), e === "focusout" && (b = p._wrapperState) && b.controlled && p.type === "number" && au(p, "number", p.value);
      }
      switch (b = u ? jr(u) : window, e) {
        case "focusin":
          (tf(b) || b.contentEditable === "true") && (Ar = b, Su = u, Qo = null);
          break;
        case "focusout":
          Qo = Su = Ar = null;
          break;
        case "mousedown":
          Cu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Cu = !1, lf(d, n, c);
          break;
        case "selectionchange":
          if (by)
            break;
        case "keydown":
        case "keyup":
          lf(d, n, c);
      }
      var k;
      if (Ec)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        zr ? Vm(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (Hm && n.locale !== "ko" && (zr || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && zr && (k = Um()) : (An = c, wc = "value" in An ? An.value : An.textContent, zr = !0)), b = Ls(u, $), 0 < b.length && ($ = new qd($, e, null, n, c), d.push({ event: $, listeners: b }), k ? $.data = k : (k = Km(n), k !== null && ($.data = k)))), (k = dy ? fy(e, n) : py(e, n)) && (u = Ls(u, "onBeforeInput"), 0 < u.length && (c = new qd("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = k));
    }
    oh(d, t);
  });
}
function fi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ii(e, n), i != null && r.unshift(fi(e, i, o)), i = ii(e, t), i != null && r.push(fi(e, i, o))), e = e.return;
  }
  return r;
}
function kr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r)
      break;
    l.tag === 5 && u !== null && (l = u, o ? (a = ii(n, i), a != null && s.unshift(fi(n, a, l))) : o || (a = ii(n, i), a != null && s.push(fi(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var $y = /\r\n?/g, Ry = /\u0000|\uFFFD/g;
function df(e) {
  return (typeof e == "string" ? e : "" + e).replace($y, `
`).replace(Ry, "");
}
function Yi(e, t, n) {
  if (t = df(t), df(e) !== t && n)
    throw Error(O(425));
}
function zs() {
}
var wu = null, bu = null;
function ku(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Eu = typeof setTimeout == "function" ? setTimeout : void 0, Ty = typeof clearTimeout == "function" ? clearTimeout : void 0, ff = typeof Promise == "function" ? Promise : void 0, _y = typeof queueMicrotask == "function" ? queueMicrotask : typeof ff < "u" ? function(e) {
  return ff.resolve(null).then(e).catch(Iy);
} : Eu;
function Iy(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ra(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ai(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ai(t);
}
function Wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function pf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var go = Math.random().toString(36).slice(2), sn = "__reactFiber$" + go, pi = "__reactProps$" + go, wn = "__reactContainer$" + go, Pu = "__reactEvents$" + go, My = "__reactListeners$" + go, Ny = "__reactHandles$" + go;
function sr(e) {
  var t = e[sn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wn] || n[sn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = pf(e); e !== null; ) {
          if (n = e[sn])
            return n;
          e = pf(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ri(e) {
  return e = e[sn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function ml(e) {
  return e[pi] || null;
}
var $u = [], Dr = -1;
function qn(e) {
  return { current: e };
}
function Ce(e) {
  0 > Dr || (e.current = $u[Dr], $u[Dr] = null, Dr--);
}
function ye(e, t) {
  Dr++, $u[Dr] = e.current, e.current = t;
}
var Qn = {}, nt = qn(Qn), pt = qn(!1), pr = Qn;
function to(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Qn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function mt(e) {
  return e = e.childContextTypes, e != null;
}
function As() {
  Ce(pt), Ce(nt);
}
function mf(e, t, n) {
  if (nt.current !== Qn)
    throw Error(O(168));
  ye(nt, t), ye(pt, n);
}
function sh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(O(108, v0(e) || "Unknown", o));
  return Te({}, n, r);
}
function Fs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn, pr = nt.current, ye(nt, e), ye(pt, pt.current), !0;
}
function hf(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(O(169));
  n ? (e = sh(e, t, pr), r.__reactInternalMemoizedMergedChildContext = e, Ce(pt), Ce(nt), ye(nt, e)) : Ce(pt), ye(pt, n);
}
var gn = null, hl = !1, Ta = !1;
function lh(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function Oy(e) {
  hl = !0, lh(e);
}
function Zn() {
  if (!Ta && gn !== null) {
    Ta = !0;
    var e = 0, t = me;
    try {
      var n = gn;
      for (me = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gn = null, hl = !1;
    } catch (o) {
      throw gn !== null && (gn = gn.slice(e + 1)), Mm(yc, Zn), o;
    } finally {
      me = t, Ta = !1;
    }
  }
  return null;
}
var Br = [], Wr = 0, js = null, Ds = 0, Ot = [], Lt = 0, mr = null, yn = 1, xn = "";
function nr(e, t) {
  Br[Wr++] = Ds, Br[Wr++] = js, js = e, Ds = t;
}
function ah(e, t, n) {
  Ot[Lt++] = yn, Ot[Lt++] = xn, Ot[Lt++] = mr, mr = e;
  var r = yn;
  e = xn;
  var o = 32 - Xt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Xt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, yn = 1 << 32 - Xt(t) + o | n << o | r, xn = i + e;
  } else
    yn = 1 << i | n << o | r, xn = e;
}
function $c(e) {
  e.return !== null && (nr(e, 1), ah(e, 1, 0));
}
function Rc(e) {
  for (; e === js; )
    js = Br[--Wr], Br[Wr] = null, Ds = Br[--Wr], Br[Wr] = null;
  for (; e === mr; )
    mr = Ot[--Lt], Ot[Lt] = null, xn = Ot[--Lt], Ot[Lt] = null, yn = Ot[--Lt], Ot[Lt] = null;
}
var wt = null, St = null, Ee = !1, Qt = null;
function uh(e, t) {
  var n = At(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function gf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wt = e, St = Wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wt = e, St = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = mr !== null ? { id: yn, overflow: xn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = At(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wt = e, St = null, !0) : !1;
    default:
      return !1;
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tu(e) {
  if (Ee) {
    var t = St;
    if (t) {
      var n = t;
      if (!gf(e, t)) {
        if (Ru(e))
          throw Error(O(418));
        t = Wn(n.nextSibling);
        var r = wt;
        t && gf(e, t) ? uh(r, n) : (e.flags = e.flags & -4097 | 2, Ee = !1, wt = e);
      }
    } else {
      if (Ru(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, Ee = !1, wt = e;
    }
  }
}
function vf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function Qi(e) {
  if (e !== wt)
    return !1;
  if (!Ee)
    return vf(e), Ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps)), t && (t = St)) {
    if (Ru(e))
      throw ch(), Error(O(418));
    for (; t; )
      uh(e, t), t = Wn(t.nextSibling);
  }
  if (vf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              St = Wn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      St = null;
    }
  } else
    St = wt ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function ch() {
  for (var e = St; e; )
    e = Wn(e.nextSibling);
}
function no() {
  St = wt = null, Ee = !1;
}
function Tc(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
var Ly = Pn.ReactCurrentBatchConfig;
function _o(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(O(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!n._owner)
      throw Error(O(290, e));
  }
  return e;
}
function Xi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function yf(e) {
  var t = e._init;
  return t(e._payload);
}
function dh(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? (h.deletions = [f], h.flags |= 16) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e)
      return null;
    for (; f !== null; )
      t(h, f), f = f.sibling;
    return null;
  }
  function r(h, f) {
    for (h = /* @__PURE__ */ new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling;
    return h;
  }
  function o(h, f) {
    return h = Kn(h, f), h.index = 0, h.sibling = null, h;
  }
  function i(h, f, m) {
    return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < f ? (h.flags |= 2, f) : m) : (h.flags |= 2, f)) : (h.flags |= 1048576, f);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, f, m, v) {
    return f === null || f.tag !== 6 ? (f = za(m, h.mode, v), f.return = h, f) : (f = o(f, m), f.return = h, f);
  }
  function a(h, f, m, v) {
    var E = m.type;
    return E === Lr ? c(h, f, m.props.children, v, m.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Nn && yf(E) === f.type) ? (v = o(f, m.props), v.ref = _o(h, f, m), v.return = h, v) : (v = Ss(m.type, m.key, m.props, null, h.mode, v), v.ref = _o(h, f, m), v.return = h, v);
  }
  function u(h, f, m, v) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Aa(m, h.mode, v), f.return = h, f) : (f = o(f, m.children || []), f.return = h, f);
  }
  function c(h, f, m, v, E) {
    return f === null || f.tag !== 7 ? (f = fr(m, h.mode, v, E), f.return = h, f) : (f = o(f, m), f.return = h, f);
  }
  function d(h, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return f = za("" + f, h.mode, m), f.return = h, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ji:
          return m = Ss(f.type, f.key, f.props, null, h.mode, m), m.ref = _o(h, null, f), m.return = h, m;
        case Or:
          return f = Aa(f, h.mode, m), f.return = h, f;
        case Nn:
          var v = f._init;
          return d(h, v(f._payload), m);
      }
      if (Do(f) || Eo(f))
        return f = fr(f, h.mode, m, null), f.return = h, f;
      Xi(h, f);
    }
    return null;
  }
  function p(h, f, m, v) {
    var E = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return E !== null ? null : l(h, f, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ji:
          return m.key === E ? a(h, f, m, v) : null;
        case Or:
          return m.key === E ? u(h, f, m, v) : null;
        case Nn:
          return E = m._init, p(
            h,
            f,
            E(m._payload),
            v
          );
      }
      if (Do(m) || Eo(m))
        return E !== null ? null : c(h, f, m, v, null);
      Xi(h, m);
    }
    return null;
  }
  function C(h, f, m, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return h = h.get(m) || null, l(f, h, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ji:
          return h = h.get(v.key === null ? m : v.key) || null, a(f, h, v, E);
        case Or:
          return h = h.get(v.key === null ? m : v.key) || null, u(f, h, v, E);
        case Nn:
          var b = v._init;
          return C(h, f, m, b(v._payload), E);
      }
      if (Do(v) || Eo(v))
        return h = h.get(m) || null, c(f, h, v, E, null);
      Xi(f, v);
    }
    return null;
  }
  function S(h, f, m, v) {
    for (var E = null, b = null, k = f, $ = f = 0, M = null; k !== null && $ < m.length; $++) {
      k.index > $ ? (M = k, k = null) : M = k.sibling;
      var T = p(h, k, m[$], v);
      if (T === null) {
        k === null && (k = M);
        break;
      }
      e && k && T.alternate === null && t(h, k), f = i(T, f, $), b === null ? E = T : b.sibling = T, b = T, k = M;
    }
    if ($ === m.length)
      return n(h, k), Ee && nr(h, $), E;
    if (k === null) {
      for (; $ < m.length; $++)
        k = d(h, m[$], v), k !== null && (f = i(k, f, $), b === null ? E = k : b.sibling = k, b = k);
      return Ee && nr(h, $), E;
    }
    for (k = r(h, k); $ < m.length; $++)
      M = C(k, h, $, m[$], v), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? $ : M.key), f = i(M, f, $), b === null ? E = M : b.sibling = M, b = M);
    return e && k.forEach(function(F) {
      return t(h, F);
    }), Ee && nr(h, $), E;
  }
  function x(h, f, m, v) {
    var E = Eo(m);
    if (typeof E != "function")
      throw Error(O(150));
    if (m = E.call(m), m == null)
      throw Error(O(151));
    for (var b = E = null, k = f, $ = f = 0, M = null, T = m.next(); k !== null && !T.done; $++, T = m.next()) {
      k.index > $ ? (M = k, k = null) : M = k.sibling;
      var F = p(h, k, T.value, v);
      if (F === null) {
        k === null && (k = M);
        break;
      }
      e && k && F.alternate === null && t(h, k), f = i(F, f, $), b === null ? E = F : b.sibling = F, b = F, k = M;
    }
    if (T.done)
      return n(
        h,
        k
      ), Ee && nr(h, $), E;
    if (k === null) {
      for (; !T.done; $++, T = m.next())
        T = d(h, T.value, v), T !== null && (f = i(T, f, $), b === null ? E = T : b.sibling = T, b = T);
      return Ee && nr(h, $), E;
    }
    for (k = r(h, k); !T.done; $++, T = m.next())
      T = C(k, h, $, T.value, v), T !== null && (e && T.alternate !== null && k.delete(T.key === null ? $ : T.key), f = i(T, f, $), b === null ? E = T : b.sibling = T, b = T);
    return e && k.forEach(function(L) {
      return t(h, L);
    }), Ee && nr(h, $), E;
  }
  function P(h, f, m, v) {
    if (typeof m == "object" && m !== null && m.type === Lr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ji:
          e: {
            for (var E = m.key, b = f; b !== null; ) {
              if (b.key === E) {
                if (E = m.type, E === Lr) {
                  if (b.tag === 7) {
                    n(h, b.sibling), f = o(b, m.props.children), f.return = h, h = f;
                    break e;
                  }
                } else if (b.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Nn && yf(E) === b.type) {
                  n(h, b.sibling), f = o(b, m.props), f.ref = _o(h, b, m), f.return = h, h = f;
                  break e;
                }
                n(h, b);
                break;
              } else
                t(h, b);
              b = b.sibling;
            }
            m.type === Lr ? (f = fr(m.props.children, h.mode, v, m.key), f.return = h, h = f) : (v = Ss(m.type, m.key, m.props, null, h.mode, v), v.ref = _o(h, f, m), v.return = h, h = v);
          }
          return s(h);
        case Or:
          e: {
            for (b = m.key; f !== null; ) {
              if (f.key === b)
                if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                  n(h, f.sibling), f = o(f, m.children || []), f.return = h, h = f;
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else
                t(h, f);
              f = f.sibling;
            }
            f = Aa(m, h.mode, v), f.return = h, h = f;
          }
          return s(h);
        case Nn:
          return b = m._init, P(h, f, b(m._payload), v);
      }
      if (Do(m))
        return S(h, f, m, v);
      if (Eo(m))
        return x(h, f, m, v);
      Xi(h, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(h, f.sibling), f = o(f, m), f.return = h, h = f) : (n(h, f), f = za(m, h.mode, v), f.return = h, h = f), s(h)) : n(h, f);
  }
  return P;
}
var ro = dh(!0), fh = dh(!1), Bs = qn(null), Ws = null, Ur = null, _c = null;
function Ic() {
  _c = Ur = Ws = null;
}
function Mc(e) {
  var t = Bs.current;
  Ce(Bs), e._currentValue = t;
}
function _u(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Xr(e, t) {
  Ws = e, _c = Ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ft = !0), e.firstContext = null);
}
function jt(e) {
  var t = e._currentValue;
  if (_c !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ur === null) {
      if (Ws === null)
        throw Error(O(308));
      Ur = e, Ws.dependencies = { lanes: 0, firstContext: e };
    } else
      Ur = Ur.next = e;
  return t;
}
var lr = null;
function Nc(e) {
  lr === null ? lr = [e] : lr.push(e);
}
function ph(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Nc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, bn(e, r);
}
function bn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var On = !1;
function Oc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Sn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Un(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ae & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, bn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Nc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, bn(e, n);
}
function ms(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xc(e, n);
  }
}
function xf(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Us(e, t, n, r) {
  var o = e.updateQueue;
  On = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var d = o.baseState;
    s = 0, c = u = a = null, l = i;
    do {
      var p = l.lane, C = l.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: C,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var S = e, x = l;
          switch (p = t, C = n, x.tag) {
            case 1:
              if (S = x.payload, typeof S == "function") {
                d = S.call(C, d, p);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = x.payload, p = typeof S == "function" ? S.call(C, d, p) : S, p == null)
                break e;
              d = Te({}, d, p);
              break e;
            case 2:
              On = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [l] : p.push(l));
      } else
        C = { eventTime: C, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = C, a = d) : c = c.next = C, s |= p;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null)
          break;
        p = l, l = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (1);
    if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    gr |= s, e.lanes = s, e.memoizedState = d;
  }
}
function Sf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var Ti = {}, an = qn(Ti), mi = qn(Ti), hi = qn(Ti);
function ar(e) {
  if (e === Ti)
    throw Error(O(174));
  return e;
}
function Lc(e, t) {
  switch (ye(hi, t), ye(mi, e), ye(an, Ti), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cu(t, e);
  }
  Ce(an), ye(an, t);
}
function oo() {
  Ce(an), Ce(mi), Ce(hi);
}
function hh(e) {
  ar(hi.current);
  var t = ar(an.current), n = cu(t, e.type);
  t !== n && (ye(mi, e), ye(an, n));
}
function zc(e) {
  mi.current === e && (Ce(an), Ce(mi));
}
var $e = qn(0);
function Hs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var _a = [];
function Ac() {
  for (var e = 0; e < _a.length; e++)
    _a[e]._workInProgressVersionPrimary = null;
  _a.length = 0;
}
var hs = Pn.ReactCurrentDispatcher, Ia = Pn.ReactCurrentBatchConfig, hr = 0, Re = null, De = null, Ue = null, Vs = !1, Xo = !1, gi = 0, zy = 0;
function Ze() {
  throw Error(O(321));
}
function Fc(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zt(e[n], t[n]))
      return !1;
  return !0;
}
function jc(e, t, n, r, o, i) {
  if (hr = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hs.current = e === null || e.memoizedState === null ? Dy : By, e = n(r, o), Xo) {
    i = 0;
    do {
      if (Xo = !1, gi = 0, 25 <= i)
        throw Error(O(301));
      i += 1, Ue = De = null, t.updateQueue = null, hs.current = Wy, e = n(r, o);
    } while (Xo);
  }
  if (hs.current = Ks, t = De !== null && De.next !== null, hr = 0, Ue = De = Re = null, Vs = !1, t)
    throw Error(O(300));
  return e;
}
function Dc() {
  var e = gi !== 0;
  return gi = 0, e;
}
function nn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ue === null ? Re.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
}
function Dt() {
  if (De === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = De.next;
  var t = Ue === null ? Re.memoizedState : Ue.next;
  if (t !== null)
    Ue = t, De = e;
  else {
    if (e === null)
      throw Error(O(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Ue === null ? Re.memoizedState = Ue = e : Ue = Ue.next = e;
  }
  return Ue;
}
function vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ma(e) {
  var t = Dt(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = De, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((hr & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = d, s = r) : a = a.next = d, Re.lanes |= c, gr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Zt(r, t.memoizedState) || (ft = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Re.lanes |= i, gr |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Na(e) {
  var t = Dt(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Zt(i, t.memoizedState) || (ft = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function gh() {
}
function vh(e, t) {
  var n = Re, r = Dt(), o = t(), i = !Zt(r.memoizedState, o);
  if (i && (r.memoizedState = o, ft = !0), r = r.queue, Bc(Sh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ue !== null && Ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, yi(9, xh.bind(null, n, r, o, t), void 0, null), He === null)
      throw Error(O(349));
    hr & 30 || yh(n, t, o);
  }
  return o;
}
function yh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function xh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ch(t) && wh(e);
}
function Sh(e, t, n) {
  return n(function() {
    Ch(t) && wh(e);
  });
}
function Ch(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zt(e, n);
  } catch {
    return !0;
  }
}
function wh(e) {
  var t = bn(e, 1);
  t !== null && qt(t, e, 1, -1);
}
function Cf(e) {
  var t = nn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vi, lastRenderedState: e }, t.queue = e, e = e.dispatch = jy.bind(null, Re, e), [t.memoizedState, e];
}
function yi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function bh() {
  return Dt().memoizedState;
}
function gs(e, t, n, r) {
  var o = nn();
  Re.flags |= e, o.memoizedState = yi(1 | t, n, void 0, r === void 0 ? null : r);
}
function gl(e, t, n, r) {
  var o = Dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (i = s.destroy, r !== null && Fc(r, s.deps)) {
      o.memoizedState = yi(t, n, i, r);
      return;
    }
  }
  Re.flags |= e, o.memoizedState = yi(1 | t, n, i, r);
}
function wf(e, t) {
  return gs(8390656, 8, e, t);
}
function Bc(e, t) {
  return gl(2048, 8, e, t);
}
function kh(e, t) {
  return gl(4, 2, e, t);
}
function Eh(e, t) {
  return gl(4, 4, e, t);
}
function Ph(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function $h(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gl(4, 4, Ph.bind(null, t, e), n);
}
function Wc() {
}
function Rh(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Th(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _h(e, t, n) {
  return hr & 21 ? (Zt(n, t) || (n = Lm(), Re.lanes |= n, gr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ft = !0), e.memoizedState = n);
}
function Ay(e, t) {
  var n = me;
  me = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ia.transition;
  Ia.transition = {};
  try {
    e(!1), t();
  } finally {
    me = n, Ia.transition = r;
  }
}
function Ih() {
  return Dt().memoizedState;
}
function Fy(e, t, n) {
  var r = Vn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mh(e))
    Nh(t, n);
  else if (n = ph(e, t, n, r), n !== null) {
    var o = st();
    qt(n, e, r, o), Oh(n, t, r);
  }
}
function jy(e, t, n) {
  var r = Vn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mh(e))
    Nh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, l = i(s, n);
        if (o.hasEagerState = !0, o.eagerState = l, Zt(l, s)) {
          var a = t.interleaved;
          a === null ? (o.next = o, Nc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = ph(e, t, o, r), n !== null && (o = st(), qt(n, e, r, o), Oh(n, t, r));
  }
}
function Mh(e) {
  var t = e.alternate;
  return e === Re || t !== null && t === Re;
}
function Nh(e, t) {
  Xo = Vs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Oh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xc(e, n);
  }
}
var Ks = { readContext: jt, useCallback: Ze, useContext: Ze, useEffect: Ze, useImperativeHandle: Ze, useInsertionEffect: Ze, useLayoutEffect: Ze, useMemo: Ze, useReducer: Ze, useRef: Ze, useState: Ze, useDebugValue: Ze, useDeferredValue: Ze, useTransition: Ze, useMutableSource: Ze, useSyncExternalStore: Ze, useId: Ze, unstable_isNewReconciler: !1 }, Dy = { readContext: jt, useCallback: function(e, t) {
  return nn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: jt, useEffect: wf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gs(
    4194308,
    4,
    Ph.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return gs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return gs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fy.bind(null, Re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Cf, useDebugValue: Wc, useDeferredValue: function(e) {
  return nn().memoizedState = e;
}, useTransition: function() {
  var e = Cf(!1), t = e[0];
  return e = Ay.bind(null, e[1]), nn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Re, o = nn();
  if (Ee) {
    if (n === void 0)
      throw Error(O(407));
    n = n();
  } else {
    if (n = t(), He === null)
      throw Error(O(349));
    hr & 30 || yh(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, wf(Sh.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, yi(9, xh.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = nn(), t = He.identifierPrefix;
  if (Ee) {
    var n = xn, r = yn;
    n = (r & ~(1 << 32 - Xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = zy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, By = {
  readContext: jt,
  useCallback: Rh,
  useContext: jt,
  useEffect: Bc,
  useImperativeHandle: $h,
  useInsertionEffect: kh,
  useLayoutEffect: Eh,
  useMemo: Th,
  useReducer: Ma,
  useRef: bh,
  useState: function() {
    return Ma(vi);
  },
  useDebugValue: Wc,
  useDeferredValue: function(e) {
    var t = Dt();
    return _h(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = Ma(vi)[0], t = Dt().memoizedState;
    return [e, t];
  },
  useMutableSource: gh,
  useSyncExternalStore: vh,
  useId: Ih,
  unstable_isNewReconciler: !1
}, Wy = { readContext: jt, useCallback: Rh, useContext: jt, useEffect: Bc, useImperativeHandle: $h, useInsertionEffect: kh, useLayoutEffect: Eh, useMemo: Th, useReducer: Na, useRef: bh, useState: function() {
  return Na(vi);
}, useDebugValue: Wc, useDeferredValue: function(e) {
  var t = Dt();
  return De === null ? t.memoizedState = e : _h(t, De.memoizedState, e);
}, useTransition: function() {
  var e = Na(vi)[0], t = Dt().memoizedState;
  return [e, t];
}, useMutableSource: gh, useSyncExternalStore: vh, useId: Ih, unstable_isNewReconciler: !1 };
function Gt(e, t) {
  if (e && e.defaultProps) {
    t = Te({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Iu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? wr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = st(), o = Vn(e), i = Sn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Un(e, i, o), t !== null && (qt(t, e, o, r), ms(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = st(), o = Vn(e), i = Sn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Un(e, i, o), t !== null && (qt(t, e, o, r), ms(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = st(), r = Vn(e), o = Sn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Un(e, o, r), t !== null && (qt(t, e, r, n), ms(t, e, r));
} };
function bf(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ci(n, r) || !ci(o, i) : !0;
}
function Lh(e, t, n) {
  var r = !1, o = Qn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = jt(i) : (o = mt(t) ? pr : nt.current, r = t.contextTypes, i = (r = r != null) ? to(e, o) : Qn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function kf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
}
function Mu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Oc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = jt(i) : (i = mt(t) ? pr : nt.current, o.context = to(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Iu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && vl.enqueueReplaceState(o, o.state, null), Us(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function io(e, t) {
  try {
    var n = "", r = t;
    do
      n += g0(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Oa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Uy = typeof WeakMap == "function" ? WeakMap : Map;
function zh(e, t, n) {
  n = Sn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ys || (Ys = !0, Uu = r), Nu(e, t);
  }, n;
}
function Ah(e, t, n) {
  n = Sn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Nu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Nu(e, t), typeof r != "function" && (Hn === null ? Hn = /* @__PURE__ */ new Set([this]) : Hn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ef(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uy();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = r1.bind(null, e, t, n), t.then(e, e));
}
function Pf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $f(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Sn(-1, 1), t.tag = 2, Un(n, t, 1))), n.lanes |= 1), e);
}
var Hy = Pn.ReactCurrentOwner, ft = !1;
function ot(e, t, n, r) {
  t.child = e === null ? fh(t, null, n, r) : ro(t, e.child, n, r);
}
function Rf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Xr(t, o), r = jc(e, t, n, r, i, o), n = Dc(), e !== null && !ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kn(e, t, o)) : (Ee && n && $c(t), t.flags |= 1, ot(e, t, r, o), t.child);
}
function Tf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Xc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Fh(e, t, i, r, o)) : (e = Ss(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ci, n(s, r) && e.ref === t.ref)
      return kn(e, t, o);
  }
  return t.flags |= 1, e = Kn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Fh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ci(i, r) && e.ref === t.ref)
      if (ft = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (ft = !0);
      else
        return t.lanes = e.lanes, kn(e, t, o);
  }
  return Ou(e, t, n, r, o);
}
function jh(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Vr, yt), yt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Vr, yt), yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ye(Vr, yt), yt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ye(Vr, yt), yt |= r;
  return ot(e, t, o, n), t.child;
}
function Dh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ou(e, t, n, r, o) {
  var i = mt(n) ? pr : nt.current;
  return i = to(t, i), Xr(t, o), n = jc(e, t, n, r, i, o), r = Dc(), e !== null && !ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kn(e, t, o)) : (Ee && r && $c(t), t.flags |= 1, ot(e, t, n, o), t.child);
}
function _f(e, t, n, r, o) {
  if (mt(n)) {
    var i = !0;
    Fs(t);
  } else
    i = !1;
  if (Xr(t, o), t.stateNode === null)
    vs(e, t), Lh(t, n, r), Mu(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = jt(u) : (u = mt(n) ? pr : nt.current, u = to(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && kf(t, s, r, u), On = !1;
    var p = t.memoizedState;
    s.state = p, Us(t, r, s, o), a = t.memoizedState, l !== r || p !== a || pt.current || On ? (typeof c == "function" && (Iu(t, n, c, r), a = t.memoizedState), (l = On || bf(t, n, l, r, p, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, mh(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Gt(t.type, l), s.props = u, d = t.pendingProps, p = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = jt(a) : (a = mt(n) ? pr : nt.current, a = to(t, a));
    var C = n.getDerivedStateFromProps;
    (c = typeof C == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || p !== a) && kf(t, s, r, a), On = !1, p = t.memoizedState, s.state = p, Us(t, r, s, o);
    var S = t.memoizedState;
    l !== d || p !== S || pt.current || On ? (typeof C == "function" && (Iu(t, n, C, r), S = t.memoizedState), (u = On || bf(t, n, u, r, p, S, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Lu(e, t, n, r, i, o);
}
function Lu(e, t, n, r, o, i) {
  Dh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return o && hf(t, n, !1), kn(e, t, i);
  r = t.stateNode, Hy.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ro(t, e.child, null, i), t.child = ro(t, null, l, i)) : ot(e, t, l, i), t.memoizedState = r.state, o && hf(t, n, !0), t.child;
}
function Bh(e) {
  var t = e.stateNode;
  t.pendingContext ? mf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mf(e, t.context, !1), Lc(e, t.containerInfo);
}
function If(e, t, n, r, o) {
  return no(), Tc(o), t.flags |= 256, ot(e, t, n, r), t.child;
}
var zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Au(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wh(e, t, n) {
  var r = t.pendingProps, o = $e.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ye($e, o & 1), e === null)
    return Tu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Sl(s, r, 0, null), e = fr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Au(n), t.memoizedState = zu, e) : Uc(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null))
    return Vy(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Kn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Kn(l, i) : (i = fr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Au(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = zu, r;
  }
  return i = e.child, e = i.sibling, r = Kn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Uc(e, t) {
  return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qi(e, t, n, r) {
  return r !== null && Tc(r), ro(t, e.child, null, n), e = Uc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Vy(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Oa(Error(O(422))), qi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Sl({ mode: "visible", children: r.children }, o, 0, null), i = fr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ro(t, e.child, null, s), t.child.memoizedState = Au(s), t.memoizedState = zu, i);
  if (!(t.mode & 1))
    return qi(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var l = r.dgst;
    return r = l, i = Error(O(419)), r = Oa(i, r, void 0), qi(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, ft || l) {
    if (r = He, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, bn(e, o), qt(r, e, o, -1));
    }
    return Qc(), r = Oa(Error(O(421))), qi(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = o1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, St = Wn(o.nextSibling), wt = t, Ee = !0, Qt = null, e !== null && (Ot[Lt++] = yn, Ot[Lt++] = xn, Ot[Lt++] = mr, yn = e.id, xn = e.overflow, mr = t), t = Uc(t, r.children), t.flags |= 4096, t);
}
function Mf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _u(e.return, t, n);
}
function La(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Uh(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ot(e, t, r.children, n), r = $e.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Mf(e, n, t);
          else if (e.tag === 19)
            Mf(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ye($e, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Hs(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), La(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Hs(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        La(t, !0, n, null, i);
        break;
      case "together":
        La(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), gr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Kn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ky(e, t, n) {
  switch (t.tag) {
    case 3:
      Bh(t), no();
      break;
    case 5:
      hh(t);
      break;
    case 1:
      mt(t.type) && Fs(t);
      break;
    case 4:
      Lc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ye(Bs, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ye($e, $e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wh(e, t, n) : (ye($e, $e.current & 1), e = kn(e, t, n), e !== null ? e.sibling : null);
      ye($e, $e.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Uh(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ye($e, $e.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, jh(e, t, n);
  }
  return kn(e, t, n);
}
var Hh, Fu, Vh, Kh;
Hh = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Fu = function() {
};
Vh = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ar(an.current);
    var i = null;
    switch (n) {
      case "input":
        o = su(e, o), r = su(e, r), i = [];
        break;
      case "select":
        o = Te({}, o, { value: void 0 }), r = Te({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = uu(e, o), r = uu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zs);
    }
    du(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l)
            l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ri.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in a)
              a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ri.hasOwnProperty(u) ? (a != null && u === "onScroll" && Se("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Io(e, t) {
  if (!Ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Gy(e, t, n) {
  var r = t.pendingProps;
  switch (Rc(t), t.tag) {
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
      return Je(t), null;
    case 1:
      return mt(t.type) && As(), Je(t), null;
    case 3:
      return r = t.stateNode, oo(), Ce(pt), Ce(nt), Ac(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qt !== null && (Ku(Qt), Qt = null))), Fu(e, t), Je(t), null;
    case 5:
      zc(t);
      var o = ar(hi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Vh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(O(166));
          return Je(t), null;
        }
        if (e = ar(an.current), Qi(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[sn] = t, r[pi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Se("cancel", r), Se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Wo.length; o++)
                Se(Wo[o], r);
              break;
            case "source":
              Se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Se(
                "error",
                r
              ), Se("load", r);
              break;
            case "details":
              Se("toggle", r);
              break;
            case "input":
              Dd(r, i), Se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Se("invalid", r);
              break;
            case "textarea":
              Wd(r, i), Se("invalid", r);
          }
          du(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Yi(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Yi(
                r.textContent,
                l,
                e
              ), o = ["children", "" + l]) : ri.hasOwnProperty(s) && l != null && s === "onScroll" && Se("scroll", r);
            }
          switch (n) {
            case "input":
              Di(r), Bd(r, i, !0);
              break;
            case "textarea":
              Di(r), Ud(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = zs);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[sn] = t, e[pi] = r, Hh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = fu(n, r), n) {
              case "dialog":
                Se("cancel", e), Se("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Wo.length; o++)
                  Se(Wo[o], e);
                o = r;
                break;
              case "source":
                Se("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Se(
                  "error",
                  e
                ), Se("load", e), o = r;
                break;
              case "details":
                Se("toggle", e), o = r;
                break;
              case "input":
                Dd(e, r), o = su(e, r), Se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Te({}, r, { value: void 0 }), Se("invalid", e);
                break;
              case "textarea":
                Wd(e, r), o = uu(e, r), Se("invalid", e);
                break;
              default:
                o = r;
            }
            du(n, o), l = o;
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style" ? bm(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Cm(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && oi(e, a) : typeof a == "number" && oi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ri.hasOwnProperty(i) ? a != null && i === "onScroll" && Se("scroll", e) : a != null && pc(e, i, a, s));
              }
            switch (n) {
              case "input":
                Di(e), Bd(e, r, !1);
                break;
              case "textarea":
                Di(e), Ud(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Kr(e, !!r.multiple, i, !1) : r.defaultValue != null && Kr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zs);
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
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Je(t), null;
    case 6:
      if (e && t.stateNode != null)
        Kh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(O(166));
        if (n = ar(hi.current), ar(an.current), Qi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[sn] = t, (i = r.nodeValue !== n) && (e = wt, e !== null))
            switch (e.tag) {
              case 3:
                Yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[sn] = t, t.stateNode = r;
      }
      return Je(t), null;
    case 13:
      if (Ce($e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ee && St !== null && t.mode & 1 && !(t.flags & 128))
          ch(), no(), t.flags |= 98560, i = !1;
        else if (i = Qi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[sn] = t;
          } else
            no(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Je(t), i = !1;
        } else
          Qt !== null && (Ku(Qt), Qt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $e.current & 1 ? Be === 0 && (Be = 3) : Qc())), t.updateQueue !== null && (t.flags |= 4), Je(t), null);
    case 4:
      return oo(), Fu(e, t), e === null && di(t.stateNode.containerInfo), Je(t), null;
    case 10:
      return Mc(t.type._context), Je(t), null;
    case 17:
      return mt(t.type) && As(), Je(t), null;
    case 19:
      if (Ce($e), i = t.memoizedState, i === null)
        return Je(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r)
          Io(i, !1);
        else {
          if (Be !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = Hs(e), s !== null) {
                for (t.flags |= 128, Io(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ye($e, $e.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Oe() > so && (t.flags |= 128, r = !0, Io(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Hs(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Io(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ee)
              return Je(t), null;
          } else
            2 * Oe() - i.renderingStartTime > so && n !== 1073741824 && (t.flags |= 128, r = !0, Io(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Oe(), t.sibling = null, n = $e.current, ye($e, r ? n & 1 | 2 : n & 1), t) : (Je(t), null);
    case 22:
    case 23:
      return Yc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? yt & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Yy(e, t) {
  switch (Rc(t), t.tag) {
    case 1:
      return mt(t.type) && As(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return oo(), Ce(pt), Ce(nt), Ac(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zc(t), null;
    case 13:
      if (Ce($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        no();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ce($e), null;
    case 4:
      return oo(), null;
    case 10:
      return Mc(t.type._context), null;
    case 22:
    case 23:
      return Yc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zi = !1, tt = !1, Qy = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function Hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Me(e, t, r);
      }
    else
      n.current = null;
}
function ju(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var Nf = !1;
function Xy(e, t) {
  if (wu = Ns, e = qm(), Pc(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0, l = -1, a = -1, u = 0, c = 0, d = e, p = null;
          t:
            for (; ; ) {
              for (var C; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (C = d.firstChild) !== null; )
                p = d, d = C;
              for (; ; ) {
                if (d === e)
                  break t;
                if (p === n && ++u === o && (l = s), p === i && ++c === r && (a = s), (C = d.nextSibling) !== null)
                  break;
                d = p, p = d.parentNode;
              }
              d = C;
            }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (bu = { focusedElem: e, selectionRange: n }, Ns = !1, V = t; V !== null; )
    if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, V = e;
    else
      for (; V !== null; ) {
        t = V;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps, P = S.memoizedState, h = t.stateNode, f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Gt(t.type, x), P);
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (v) {
          Me(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, V = e;
          break;
        }
        V = t.return;
      }
  return S = Nf, Nf = !1, S;
}
function qo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && ju(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Du(e) {
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
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Gh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[sn], delete t[pi], delete t[Pu], delete t[My], delete t[Ny])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Yh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Of(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yh(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = zs));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Bu(e, t, n), e = e.sibling; e !== null; )
      Bu(e, t, n), e = e.sibling;
}
function Wu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Wu(e, t, n), e = e.sibling; e !== null; )
      Wu(e, t, n), e = e.sibling;
}
var Ge = null, Yt = !1;
function In(e, t, n) {
  for (n = n.child; n !== null; )
    Qh(e, t, n), n = n.sibling;
}
function Qh(e, t, n) {
  if (ln && typeof ln.onCommitFiberUnmount == "function")
    try {
      ln.onCommitFiberUnmount(cl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      tt || Hr(n, t);
    case 6:
      var r = Ge, o = Yt;
      Ge = null, In(e, t, n), Ge = r, Yt = o, Ge !== null && (Yt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ge.removeChild(n.stateNode));
      break;
    case 18:
      Ge !== null && (Yt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? Ra(e.parentNode, n) : e.nodeType === 1 && Ra(e, n), ai(e)) : Ra(Ge, n.stateNode));
      break;
    case 4:
      r = Ge, o = Yt, Ge = n.stateNode.containerInfo, Yt = !0, In(e, t, n), Ge = r, Yt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && ju(n, t, s), o = o.next;
        } while (o !== r);
      }
      In(e, t, n);
      break;
    case 1:
      if (!tt && (Hr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          Me(n, t, l);
        }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (tt = (r = tt) || n.memoizedState !== null, In(e, t, n), tt = r) : In(e, t, n);
      break;
    default:
      In(e, t, n);
  }
}
function Lf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qy()), t.forEach(function(r) {
      var o = i1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, s = t, l = s;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                Ge = l.stateNode, Yt = !1;
                break e;
              case 3:
                Ge = l.stateNode.containerInfo, Yt = !0;
                break e;
              case 4:
                Ge = l.stateNode.containerInfo, Yt = !0;
                break e;
            }
            l = l.return;
          }
        if (Ge === null)
          throw Error(O(160));
        Qh(i, s, o), Ge = null, Yt = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (u) {
        Me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Xh(t, e), t = t.sibling;
}
function Xh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Vt(t, e), tn(e), r & 4) {
        try {
          qo(3, e, e.return), yl(3, e);
        } catch (x) {
          Me(e, e.return, x);
        }
        try {
          qo(5, e, e.return);
        } catch (x) {
          Me(e, e.return, x);
        }
      }
      break;
    case 1:
      Vt(t, e), tn(e), r & 512 && n !== null && Hr(n, n.return);
      break;
    case 5:
      if (Vt(t, e), tn(e), r & 512 && n !== null && Hr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          oi(o, "");
        } catch (x) {
          Me(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            l === "input" && i.type === "radio" && i.name != null && ym(o, i), fu(l, s);
            var u = fu(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s], d = a[s + 1];
              c === "style" ? bm(o, d) : c === "dangerouslySetInnerHTML" ? Cm(o, d) : c === "children" ? oi(o, d) : pc(o, c, d, u);
            }
            switch (l) {
              case "input":
                lu(o, i);
                break;
              case "textarea":
                xm(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var C = i.value;
                C != null ? Kr(o, !!i.multiple, C, !1) : p !== !!i.multiple && (i.defaultValue != null ? Kr(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Kr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[pi] = i;
          } catch (x) {
            Me(e, e.return, x);
          }
      }
      break;
    case 6:
      if (Vt(t, e), tn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          Me(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Vt(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ai(t.containerInfo);
        } catch (x) {
          Me(e, e.return, x);
        }
      break;
    case 4:
      Vt(t, e), tn(e);
      break;
    case 13:
      Vt(t, e), tn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Kc = Oe())), r & 4 && Lf(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (tt = (u = tt) || c, Vt(t, e), tt = u) : Vt(t, e), tn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (p = V, C = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qo(4, p, p.return);
                  break;
                case 1:
                  Hr(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (x) {
                      Me(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Hr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Af(d);
                    continue;
                  }
              }
              C !== null ? (C.return = p, V = C) : Af(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, a = d.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = wm("display", s));
                } catch (x) {
                  Me(e, e.return, x);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (x) {
                  Me(e, e.return, x);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      Vt(t, e), tn(e), r & 4 && Lf(e);
      break;
    case 21:
      break;
    default:
      Vt(
        t,
        e
      ), tn(e);
  }
}
function tn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (oi(o, ""), r.flags &= -33);
          var i = Of(e);
          Wu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Of(e);
          Bu(e, l, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      Me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qy(e, t, n) {
  V = e, qh(e);
}
function qh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Zi;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || tt;
        l = Zi;
        var u = tt;
        if (Zi = s, (tt = a) && !u)
          for (V = o; V !== null; )
            s = V, a = s.child, s.tag === 22 && s.memoizedState !== null ? Ff(o) : a !== null ? (a.return = s, V = a) : Ff(o);
        for (; i !== null; )
          V = i, qh(i), i = i.sibling;
        V = o, Zi = l, tt = u;
      }
      zf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, V = i) : zf(e);
  }
}
function zf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              tt || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !tt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Sf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    var d = c.dehydrated;
                    d !== null && ai(d);
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
              throw Error(O(163));
          }
        tt || t.flags & 512 && Du(t);
      } catch (p) {
        Me(t, t.return, p);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Af(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Ff(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (a) {
            Me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Me(t, o, a);
            }
          }
          var i = t.return;
          try {
            Du(t);
          } catch (a) {
            Me(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Du(t);
          } catch (a) {
            Me(t, s, a);
          }
      }
    } catch (a) {
      Me(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, V = l;
      break;
    }
    V = t.return;
  }
}
var Zy = Math.ceil, Gs = Pn.ReactCurrentDispatcher, Hc = Pn.ReactCurrentOwner, Ft = Pn.ReactCurrentBatchConfig, ae = 0, He = null, Fe = null, Qe = 0, yt = 0, Vr = qn(0), Be = 0, xi = null, gr = 0, xl = 0, Vc = 0, Zo = null, dt = null, Kc = 0, so = 1 / 0, hn = null, Ys = !1, Uu = null, Hn = null, Ji = !1, Fn = null, Qs = 0, Jo = 0, Hu = null, ys = -1, xs = 0;
function st() {
  return ae & 6 ? Oe() : ys !== -1 ? ys : ys = Oe();
}
function Vn(e) {
  return e.mode & 1 ? ae & 2 && Qe !== 0 ? Qe & -Qe : Ly.transition !== null ? (xs === 0 && (xs = Lm()), xs) : (e = me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wm(e.type)), e) : 1;
}
function qt(e, t, n, r) {
  if (50 < Jo)
    throw Jo = 0, Hu = null, Error(O(185));
  Pi(e, n, r), (!(ae & 2) || e !== He) && (e === He && (!(ae & 2) && (xl |= n), Be === 4 && zn(e, Qe)), ht(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (so = Oe() + 500, hl && Zn()));
}
function ht(e, t) {
  var n = e.callbackNode;
  L0(e, t);
  var r = Ms(e, e === He ? Qe : 0);
  if (r === 0)
    n !== null && Kd(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Kd(n), t === 1)
      e.tag === 0 ? Oy(jf.bind(null, e)) : lh(jf.bind(null, e)), _y(function() {
        !(ae & 6) && Zn();
      }), n = null;
    else {
      switch (zm(r)) {
        case 1:
          n = yc;
          break;
        case 4:
          n = Nm;
          break;
        case 16:
          n = Is;
          break;
        case 536870912:
          n = Om;
          break;
        default:
          n = Is;
      }
      n = ig(n, Zh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zh(e, t) {
  if (ys = -1, xs = 0, ae & 6)
    throw Error(O(327));
  var n = e.callbackNode;
  if (qr() && e.callbackNode !== n)
    return null;
  var r = Ms(e, e === He ? Qe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Xs(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var i = eg();
    (He !== e || Qe !== t) && (hn = null, so = Oe() + 500, dr(e, t));
    do
      try {
        t1();
        break;
      } catch (l) {
        Jh(e, l);
      }
    while (1);
    Ic(), Gs.current = i, ae = o, Fe !== null ? t = 0 : (He = null, Qe = 0, t = Be);
  }
  if (t !== 0) {
    if (t === 2 && (o = vu(e), o !== 0 && (r = o, t = Vu(e, o))), t === 1)
      throw n = xi, dr(e, 0), zn(e, r), ht(e, Oe()), n;
    if (t === 6)
      zn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Jy(o) && (t = Xs(e, r), t === 2 && (i = vu(e), i !== 0 && (r = i, t = Vu(e, i))), t === 1))
        throw n = xi, dr(e, 0), zn(e, r), ht(e, Oe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          rr(e, dt, hn);
          break;
        case 3:
          if (zn(e, r), (r & 130023424) === r && (t = Kc + 500 - Oe(), 10 < t)) {
            if (Ms(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              st(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Eu(rr.bind(null, e, dt, hn), t);
            break;
          }
          rr(e, dt, hn);
          break;
        case 4:
          if (zn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Xt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Eu(rr.bind(null, e, dt, hn), r);
            break;
          }
          rr(e, dt, hn);
          break;
        case 5:
          rr(e, dt, hn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ht(e, Oe()), e.callbackNode === n ? Zh.bind(null, e) : null;
}
function Vu(e, t) {
  var n = Zo;
  return e.current.memoizedState.isDehydrated && (dr(e, t).flags |= 256), e = Xs(e, t), e !== 2 && (t = dt, dt = n, t !== null && Ku(t)), e;
}
function Ku(e) {
  dt === null ? dt = e : dt.push.apply(dt, e);
}
function Jy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Zt(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function zn(e, t) {
  for (t &= ~Vc, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function jf(e) {
  if (ae & 6)
    throw Error(O(327));
  qr();
  var t = Ms(e, 0);
  if (!(t & 1))
    return ht(e, Oe()), null;
  var n = Xs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vu(e);
    r !== 0 && (t = r, n = Vu(e, r));
  }
  if (n === 1)
    throw n = xi, dr(e, 0), zn(e, t), ht(e, Oe()), n;
  if (n === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rr(e, dt, hn), ht(e, Oe()), null;
}
function Gc(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (so = Oe() + 500, hl && Zn());
  }
}
function vr(e) {
  Fn !== null && Fn.tag === 0 && !(ae & 6) && qr();
  var t = ae;
  ae |= 1;
  var n = Ft.transition, r = me;
  try {
    if (Ft.transition = null, me = 1, e)
      return e();
  } finally {
    me = r, Ft.transition = n, ae = t, !(ae & 6) && Zn();
  }
}
function Yc() {
  yt = Vr.current, Ce(Vr);
}
function dr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ty(n)), Fe !== null)
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Rc(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && As();
          break;
        case 3:
          oo(), Ce(pt), Ce(nt), Ac();
          break;
        case 5:
          zc(r);
          break;
        case 4:
          oo();
          break;
        case 13:
          Ce($e);
          break;
        case 19:
          Ce($e);
          break;
        case 10:
          Mc(r.type._context);
          break;
        case 22:
        case 23:
          Yc();
      }
      n = n.return;
    }
  if (He = e, Fe = e = Kn(e.current, null), Qe = yt = t, Be = 0, xi = null, Vc = xl = gr = 0, dt = Zo = null, lr !== null) {
    for (t = 0; t < lr.length; t++)
      if (n = lr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s;
        }
        n.pending = r;
      }
    lr = null;
  }
  return e;
}
function Jh(e, t) {
  do {
    var n = Fe;
    try {
      if (Ic(), hs.current = Ks, Vs) {
        for (var r = Re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Vs = !1;
      }
      if (hr = 0, Ue = De = Re = null, Xo = !1, gi = 0, Hc.current = null, n === null || n.return === null) {
        Be = 1, xi = t, Fe = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Qe, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var C = Pf(s);
          if (C !== null) {
            C.flags &= -257, $f(C, s, l, i, t), C.mode & 1 && Ef(i, u, t), t = C, a = u;
            var S = t.updateQueue;
            if (S === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else
              S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ef(i, u, t), Qc();
              break e;
            }
            a = Error(O(426));
          }
        } else if (Ee && l.mode & 1) {
          var P = Pf(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), $f(P, s, l, i, t), Tc(io(a, l));
            break e;
          }
        }
        i = a = io(a, l), Be !== 4 && (Be = 2), Zo === null ? Zo = [i] : Zo.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = zh(i, a, t);
              xf(i, h);
              break e;
            case 1:
              l = a;
              var f = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hn === null || !Hn.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = Ah(i, l, t);
                xf(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ng(n);
    } catch (E) {
      t = E, Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eg() {
  var e = Gs.current;
  return Gs.current = Ks, e === null ? Ks : e;
}
function Qc() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4), He === null || !(gr & 268435455) && !(xl & 268435455) || zn(He, Qe);
}
function Xs(e, t) {
  var n = ae;
  ae |= 2;
  var r = eg();
  (He !== e || Qe !== t) && (hn = null, dr(e, t));
  do
    try {
      e1();
      break;
    } catch (o) {
      Jh(e, o);
    }
  while (1);
  if (Ic(), ae = n, Gs.current = r, Fe !== null)
    throw Error(O(261));
  return He = null, Qe = 0, Be;
}
function e1() {
  for (; Fe !== null; )
    tg(Fe);
}
function t1() {
  for (; Fe !== null && !P0(); )
    tg(Fe);
}
function tg(e) {
  var t = og(e.alternate, e, yt);
  e.memoizedProps = e.pendingProps, t === null ? ng(e) : Fe = t, Hc.current = null;
}
function ng(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Yy(n, t), n !== null) {
        n.flags &= 32767, Fe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Be = 6, Fe = null;
        return;
      }
    } else if (n = Gy(n, t, yt), n !== null) {
      Fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function rr(e, t, n) {
  var r = me, o = Ft.transition;
  try {
    Ft.transition = null, me = 1, n1(e, t, n, r);
  } finally {
    Ft.transition = o, me = r;
  }
  return null;
}
function n1(e, t, n, r) {
  do
    qr();
  while (Fn !== null);
  if (ae & 6)
    throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (z0(e, i), e === He && (Fe = He = null, Qe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ji || (Ji = !0, ig(Is, function() {
    return qr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ft.transition, Ft.transition = null;
    var s = me;
    me = 1;
    var l = ae;
    ae |= 4, Hc.current = null, Xy(e, n), Xh(n, e), wy(bu), Ns = !!wu, bu = wu = null, e.current = n, qy(n), $0(), ae = l, me = s, Ft.transition = i;
  } else
    e.current = n;
  if (Ji && (Ji = !1, Fn = e, Qs = o), i = e.pendingLanes, i === 0 && (Hn = null), _0(n.stateNode), ht(e, Oe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ys)
    throw Ys = !1, e = Uu, Uu = null, e;
  return Qs & 1 && e.tag !== 0 && qr(), i = e.pendingLanes, i & 1 ? e === Hu ? Jo++ : (Jo = 0, Hu = e) : Jo = 0, Zn(), null;
}
function qr() {
  if (Fn !== null) {
    var e = zm(Qs), t = Ft.transition, n = me;
    try {
      if (Ft.transition = null, me = 16 > e ? 16 : e, Fn === null)
        var r = !1;
      else {
        if (e = Fn, Fn = null, Qs = 0, ae & 6)
          throw Error(O(331));
        var o = ae;
        for (ae |= 4, V = e.current; V !== null; ) {
          var i = V, s = i.child;
          if (V.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, V = d;
                  else
                    for (; V !== null; ) {
                      c = V;
                      var p = c.sibling, C = c.return;
                      if (Gh(c), c === u) {
                        V = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = C, V = p;
                        break;
                      }
                      V = C;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var P = x.sibling;
                    x.sibling = null, x = P;
                  } while (x !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null)
            s.return = i, V = s;
          else
            e:
              for (; V !== null; ) {
                if (i = V, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qo(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, V = h;
                  break e;
                }
                V = i.return;
              }
        }
        var f = e.current;
        for (V = f; V !== null; ) {
          s = V;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null)
            m.return = s, V = m;
          else
            e:
              for (s = f; V !== null; ) {
                if (l = V, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yl(9, l);
                    }
                  } catch (E) {
                    Me(l, l.return, E);
                  }
                if (l === s) {
                  V = null;
                  break e;
                }
                var v = l.sibling;
                if (v !== null) {
                  v.return = l.return, V = v;
                  break e;
                }
                V = l.return;
              }
        }
        if (ae = o, Zn(), ln && typeof ln.onPostCommitFiberRoot == "function")
          try {
            ln.onPostCommitFiberRoot(cl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      me = n, Ft.transition = t;
    }
  }
  return !1;
}
function Df(e, t, n) {
  t = io(n, t), t = zh(e, t, 1), e = Un(e, t, 1), t = st(), e !== null && (Pi(e, 1, t), ht(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3)
    Df(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Df(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
          e = io(n, e), e = Ah(t, e, 1), t = Un(t, e, 1), e = st(), t !== null && (Pi(t, 1, e), ht(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function r1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = st(), e.pingedLanes |= e.suspendedLanes & n, He === e && (Qe & n) === n && (Be === 4 || Be === 3 && (Qe & 130023424) === Qe && 500 > Oe() - Kc ? dr(e, 0) : Vc |= n), ht(e, t);
}
function rg(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ui, Ui <<= 1, !(Ui & 130023424) && (Ui = 4194304)) : t = 1);
  var n = st();
  e = bn(e, t), e !== null && (Pi(e, t, n), ht(e, n));
}
function o1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rg(e, n);
}
function i1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), rg(e, n);
}
var og;
og = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pt.current)
      ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return ft = !1, Ky(e, t, n);
      ft = !!(e.flags & 131072);
    }
  else
    ft = !1, Ee && t.flags & 1048576 && ah(t, Ds, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      vs(e, t), e = t.pendingProps;
      var o = to(t, nt.current);
      Xr(t, n), o = jc(null, t, r, e, o, n);
      var i = Dc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mt(r) ? (i = !0, Fs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Oc(t), o.updater = vl, t.stateNode = o, o._reactInternals = t, Mu(t, r, e, n), t = Lu(null, t, r, !0, i, n)) : (t.tag = 0, Ee && i && $c(t), ot(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (vs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = l1(r), e = Gt(r, e), o) {
          case 0:
            t = Ou(null, t, r, e, n);
            break e;
          case 1:
            t = _f(null, t, r, e, n);
            break e;
          case 11:
            t = Rf(null, t, r, e, n);
            break e;
          case 14:
            t = Tf(null, t, r, Gt(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Ou(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), _f(e, t, r, o, n);
    case 3:
      e: {
        if (Bh(t), e === null)
          throw Error(O(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, mh(e, t), Us(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = io(Error(O(423)), t), t = If(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = io(Error(O(424)), t), t = If(e, t, r, n, o);
            break e;
          } else
            for (St = Wn(t.stateNode.containerInfo.firstChild), wt = t, Ee = !0, Qt = null, n = fh(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (no(), r === o) {
            t = kn(e, t, n);
            break e;
          }
          ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return hh(t), e === null && Tu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ku(r, o) ? s = null : i !== null && ku(r, i) && (t.flags |= 32), Dh(e, t), ot(e, t, s, n), t.child;
    case 6:
      return e === null && Tu(t), null;
    case 13:
      return Wh(e, t, n);
    case 4:
      return Lc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ro(t, null, r, n) : ot(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Rf(e, t, r, o, n);
    case 7:
      return ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ye(Bs, r._currentValue), r._currentValue = s, i !== null)
          if (Zt(i.value, s)) {
            if (i.children === o.children && !pt.current) {
              t = kn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      a = Sn(-1, n & -n), a.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), _u(
                      i.return,
                      n,
                      t
                    ), l.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10)
                s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (s = i.return, s === null)
                  throw Error(O(341));
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), _u(s, n, t), s = i.sibling;
              } else
                s = i.child;
              if (s !== null)
                s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (i = s.sibling, i !== null) {
                    i.return = s.return, s = i;
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        ot(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Xr(t, n), o = jt(o), r = r(o), t.flags |= 1, ot(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Gt(r, t.pendingProps), o = Gt(r.type, o), Tf(e, t, r, o, n);
    case 15:
      return Fh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), vs(e, t), t.tag = 1, mt(r) ? (e = !0, Fs(t)) : e = !1, Xr(t, n), Lh(t, r, o), Mu(t, r, o, n), Lu(null, t, r, !0, e, n);
    case 19:
      return Uh(e, t, n);
    case 22:
      return jh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function ig(e, t) {
  return Mm(e, t);
}
function s1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function At(e, t, n, r) {
  return new s1(e, t, n, r);
}
function Xc(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function l1(e) {
  if (typeof e == "function")
    return Xc(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hc)
      return 11;
    if (e === gc)
      return 14;
  }
  return 2;
}
function Kn(e, t) {
  var n = e.alternate;
  return n === null ? (n = At(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ss(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function")
    Xc(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Lr:
          return fr(n.children, o, i, t);
        case mc:
          s = 8, o |= 8;
          break;
        case nu:
          return e = At(12, n, t, o | 2), e.elementType = nu, e.lanes = i, e;
        case ru:
          return e = At(13, n, t, o), e.elementType = ru, e.lanes = i, e;
        case ou:
          return e = At(19, n, t, o), e.elementType = ou, e.lanes = i, e;
        case hm:
          return Sl(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case pm:
                s = 10;
                break e;
              case mm:
                s = 9;
                break e;
              case hc:
                s = 11;
                break e;
              case gc:
                s = 14;
                break e;
              case Nn:
                s = 16, r = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = At(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function fr(e, t, n, r) {
  return e = At(7, e, r, t), e.lanes = n, e;
}
function Sl(e, t, n, r) {
  return e = At(22, e, r, t), e.elementType = hm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function za(e, t, n) {
  return e = At(6, e, null, t), e.lanes = n, e;
}
function Aa(e, t, n) {
  return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function a1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = va(0), this.expirationTimes = va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = va(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function qc(e, t, n, r, o, i, s, l, a) {
  return e = new a1(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = At(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oc(i), e;
}
function u1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Or, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sg(e) {
  if (!e)
    return Qn;
  e = e._reactInternals;
  e: {
    if (wr(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mt(n))
      return sh(e, n, t);
  }
  return t;
}
function lg(e, t, n, r, o, i, s, l, a) {
  return e = qc(n, r, !0, e, o, i, s, l, a), e.context = sg(null), n = e.current, r = st(), o = Vn(n), i = Sn(r, o), i.callback = t ?? null, Un(n, i, o), e.current.lanes = o, Pi(e, o, r), ht(e, r), e;
}
function Cl(e, t, n, r) {
  var o = t.current, i = st(), s = Vn(o);
  return n = sg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Sn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Un(o, t, s), e !== null && (qt(e, o, s, i), ms(e, o, s)), s;
}
function qs(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zc(e, t) {
  Bf(e, t), (e = e.alternate) && Bf(e, t);
}
function c1() {
  return null;
}
var ag = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Jc(e) {
  this._internalRoot = e;
}
wl.prototype.render = Jc.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  Cl(e, t, null, null);
};
wl.prototype.unmount = Jc.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vr(function() {
      Cl(null, e, null, null);
    }), t[wn] = null;
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = jm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++)
      ;
    Ln.splice(n, 0, e), n === 0 && Bm(e);
  }
};
function ed(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wf() {
}
function d1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = qs(s);
        i.call(u);
      };
    }
    var s = lg(t, r, e, 0, null, !1, !1, "", Wf);
    return e._reactRootContainer = s, e[wn] = s.current, di(e.nodeType === 8 ? e.parentNode : e), vr(), s;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = qs(a);
      l.call(u);
    };
  }
  var a = qc(e, 0, !1, null, null, !1, !1, "", Wf);
  return e._reactRootContainer = a, e[wn] = a.current, di(e.nodeType === 8 ? e.parentNode : e), vr(function() {
    Cl(t, a, n, r);
  }), a;
}
function kl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = qs(s);
        l.call(a);
      };
    }
    Cl(t, s, e, o);
  } else
    s = d1(n, t, e, o, r);
  return qs(s);
}
Am = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bo(t.pendingLanes);
        n !== 0 && (xc(t, n | 1), ht(t, Oe()), !(ae & 6) && (so = Oe() + 500, Zn()));
      }
      break;
    case 13:
      vr(function() {
        var r = bn(e, 1);
        if (r !== null) {
          var o = st();
          qt(r, e, 1, o);
        }
      }), Zc(e, 1);
  }
};
Sc = function(e) {
  if (e.tag === 13) {
    var t = bn(e, 134217728);
    if (t !== null) {
      var n = st();
      qt(t, e, 134217728, n);
    }
    Zc(e, 134217728);
  }
};
Fm = function(e) {
  if (e.tag === 13) {
    var t = Vn(e), n = bn(e, t);
    if (n !== null) {
      var r = st();
      qt(n, e, t, r);
    }
    Zc(e, t);
  }
};
jm = function() {
  return me;
};
Dm = function(e, t) {
  var n = me;
  try {
    return me = e, t();
  } finally {
    me = n;
  }
};
mu = function(e, t, n) {
  switch (t) {
    case "input":
      if (lu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ml(r);
            if (!o)
              throw Error(O(90));
            vm(r), lu(r, o);
          }
        }
      }
      break;
    case "textarea":
      xm(e, n);
      break;
    case "select":
      t = n.value, t != null && Kr(e, !!n.multiple, t, !1);
  }
};
Pm = Gc;
$m = vr;
var f1 = { usingClientEntryPoint: !1, Events: [Ri, jr, ml, km, Em, Gc] }, Mo = { findFiberByHostInstance: sr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, p1 = { bundleType: Mo.bundleType, version: Mo.version, rendererPackageName: Mo.rendererPackageName, rendererConfig: Mo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _m(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mo.findFiberByHostInstance || c1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!es.isDisabled && es.supportsFiber)
    try {
      cl = es.inject(p1), ln = es;
    } catch {
    }
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f1;
Pt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ed(t))
    throw Error(O(200));
  return u1(e, t, null, n);
};
Pt.createRoot = function(e, t) {
  if (!ed(e))
    throw Error(O(299));
  var n = !1, r = "", o = ag;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qc(e, 1, !1, null, null, n, !1, r, o), e[wn] = t.current, di(e.nodeType === 8 ? e.parentNode : e), new Jc(t);
};
Pt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = _m(t), e = e === null ? null : e.stateNode, e;
};
Pt.flushSync = function(e) {
  return vr(e);
};
Pt.hydrate = function(e, t, n) {
  if (!bl(t))
    throw Error(O(200));
  return kl(null, e, t, !0, n);
};
Pt.hydrateRoot = function(e, t, n) {
  if (!ed(e))
    throw Error(O(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = ag;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = lg(t, null, e, 1, n ?? null, o, !1, i, s), e[wn] = t.current, di(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wl(t);
};
Pt.render = function(e, t, n) {
  if (!bl(t))
    throw Error(O(200));
  return kl(null, e, t, !1, n);
};
Pt.unmountComponentAtNode = function(e) {
  if (!bl(e))
    throw Error(O(40));
  return e._reactRootContainer ? (vr(function() {
    kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wn] = null;
    });
  }), !0) : !1;
};
Pt.unstable_batchedUpdates = Gc;
Pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bl(n))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return kl(e, t, n, !1, r);
};
Pt.version = "18.3.1-next-f1338f8080-20240426";
function ug() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug);
    } catch (e) {
      console.error(e);
    }
}
ug(), um.exports = Pt;
var td = um.exports;
const ts = /* @__PURE__ */ qp(td);
var Uf = td;
eu.createRoot = Uf.createRoot, eu.hydrateRoot = Uf.hydrateRoot;
const m1 = {
  black: "#000",
  white: "#fff"
}, Si = m1, h1 = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Er = h1, g1 = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Pr = g1, v1 = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, $r = v1, y1 = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Rr = y1, x1 = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Tr = x1, S1 = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, No = S1, C1 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, w1 = C1;
function yr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const b1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yr
}, Symbol.toStringTag, { value: "Module" })), lo = "$$material";
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, g.apply(null, arguments);
}
const k1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return g;
  }
}, Symbol.toStringTag, { value: "Module" }));
function U(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      n[r] = e[r];
    }
  return n;
}
var E1 = !1;
function P1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function $1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var R1 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !E1 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = P1(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), et = "-ms-", Zs = "-moz-", ce = "-webkit-", cg = "comm", nd = "rule", rd = "decl", T1 = "@import", dg = "@keyframes", _1 = "@layer", I1 = Math.abs, El = String.fromCharCode, M1 = Object.assign;
function N1(e, t) {
  return Ye(e, 0) ^ 45 ? (((t << 2 ^ Ye(e, 0)) << 2 ^ Ye(e, 1)) << 2 ^ Ye(e, 2)) << 2 ^ Ye(e, 3) : 0;
}
function fg(e) {
  return e.trim();
}
function O1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, n) {
  return e.replace(t, n);
}
function Gu(e, t) {
  return e.indexOf(t);
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ci(e, t, n) {
  return e.slice(t, n);
}
function rn(e) {
  return e.length;
}
function od(e) {
  return e.length;
}
function ns(e, t) {
  return t.push(e), e;
}
function L1(e, t) {
  return e.map(t).join("");
}
var Pl = 1, ao = 1, pg = 0, gt = 0, Ae = 0, vo = "";
function $l(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Pl, column: ao, length: s, return: "" };
}
function Oo(e, t) {
  return M1($l("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function z1() {
  return Ae;
}
function A1() {
  return Ae = gt > 0 ? Ye(vo, --gt) : 0, ao--, Ae === 10 && (ao = 1, Pl--), Ae;
}
function bt() {
  return Ae = gt < pg ? Ye(vo, gt++) : 0, ao++, Ae === 10 && (ao = 1, Pl++), Ae;
}
function un() {
  return Ye(vo, gt);
}
function Cs() {
  return gt;
}
function _i(e, t) {
  return Ci(vo, e, t);
}
function wi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function mg(e) {
  return Pl = ao = 1, pg = rn(vo = e), gt = 0, [];
}
function hg(e) {
  return vo = "", e;
}
function ws(e) {
  return fg(_i(gt - 1, Yu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function F1(e) {
  for (; (Ae = un()) && Ae < 33; )
    bt();
  return wi(e) > 2 || wi(Ae) > 3 ? "" : " ";
}
function j1(e, t) {
  for (; --t && bt() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return _i(e, Cs() + (t < 6 && un() == 32 && bt() == 32));
}
function Yu(e) {
  for (; bt(); )
    switch (Ae) {
      case e:
        return gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yu(Ae);
        break;
      case 40:
        e === 41 && Yu(e);
        break;
      case 92:
        bt();
        break;
    }
  return gt;
}
function D1(e, t) {
  for (; bt() && e + Ae !== 47 + 10; )
    if (e + Ae === 42 + 42 && un() === 47)
      break;
  return "/*" + _i(t, gt - 1) + "*" + El(e === 47 ? e : bt());
}
function B1(e) {
  for (; !wi(un()); )
    bt();
  return _i(e, gt);
}
function W1(e) {
  return hg(bs("", null, null, null, [""], e = mg(e), 0, [0], e));
}
function bs(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, c = 0, d = s, p = 0, C = 0, S = 0, x = 1, P = 1, h = 1, f = 0, m = "", v = o, E = i, b = r, k = m; P; )
    switch (S = f, f = bt()) {
      case 40:
        if (S != 108 && Ye(k, d - 1) == 58) {
          Gu(k += de(ws(f), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += ws(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += F1(S);
        break;
      case 92:
        k += j1(Cs() - 1, 7);
        continue;
      case 47:
        switch (un()) {
          case 42:
          case 47:
            ns(U1(D1(bt(), Cs()), t, n), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * x:
        l[u++] = rn(k) * h;
      case 125 * x:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            P = 0;
          case 59 + c:
            h == -1 && (k = de(k, /\f/g, "")), C > 0 && rn(k) - d && ns(C > 32 ? Vf(k + ";", r, n, d - 1) : Vf(de(k, " ", "") + ";", r, n, d - 2), a);
            break;
          case 59:
            k += ";";
          default:
            if (ns(b = Hf(k, t, n, u, c, o, l, m, v = [], E = [], d), i), f === 123)
              if (c === 0)
                bs(k, t, b, b, v, i, d, l, E);
              else
                switch (p === 99 && Ye(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bs(e, b, b, r && ns(Hf(e, b, b, 0, 0, o, l, m, o, v = [], d), E), o, E, d, l, r ? v : E);
                    break;
                  default:
                    bs(k, b, b, b, [""], E, 0, l, E);
                }
        }
        u = c = C = 0, x = h = 1, m = k = "", d = s;
        break;
      case 58:
        d = 1 + rn(k), C = S;
      default:
        if (x < 1) {
          if (f == 123)
            --x;
          else if (f == 125 && x++ == 0 && A1() == 125)
            continue;
        }
        switch (k += El(f), f * x) {
          case 38:
            h = c > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[u++] = (rn(k) - 1) * h, h = 1;
            break;
          case 64:
            un() === 45 && (k += ws(bt())), p = un(), c = d = rn(m = k += B1(Cs())), f++;
            break;
          case 45:
            S === 45 && rn(k) == 2 && (x = 0);
        }
    }
  return i;
}
function Hf(e, t, n, r, o, i, s, l, a, u, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], C = od(p), S = 0, x = 0, P = 0; S < r; ++S)
    for (var h = 0, f = Ci(e, d + 1, d = I1(x = s[S])), m = e; h < C; ++h)
      (m = fg(x > 0 ? p[h] + " " + f : de(f, /&\f/g, p[h]))) && (a[P++] = m);
  return $l(e, t, n, o === 0 ? nd : l, a, u, c);
}
function U1(e, t, n) {
  return $l(e, t, n, cg, El(z1()), Ci(e, 2, -2), 0);
}
function Vf(e, t, n, r) {
  return $l(e, t, n, rd, Ci(e, 0, r), Ci(e, r + 1, -1), r);
}
function Zr(e, t) {
  for (var n = "", r = od(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function H1(e, t, n, r) {
  switch (e.type) {
    case _1:
      if (e.children.length)
        break;
    case T1:
    case rd:
      return e.return = e.return || e.value;
    case cg:
      return "";
    case dg:
      return e.return = e.value + "{" + Zr(e.children, r) + "}";
    case nd:
      e.value = e.props.join(",");
  }
  return rn(n = Zr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function V1(e) {
  var t = od(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function K1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function gg(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var G1 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = un(), o === 38 && i === 12 && (n[r] = 1), !wi(i); )
    bt();
  return _i(t, gt);
}, Y1 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (wi(o)) {
      case 0:
        o === 38 && un() === 12 && (n[r] = 1), t[r] += G1(gt - 1, n, r);
        break;
      case 2:
        t[r] += ws(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = un() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += El(o);
    }
  while (o = bt());
  return t;
}, Q1 = function(t, n) {
  return hg(Y1(mg(t), n));
}, Kf = /* @__PURE__ */ new WeakMap(), X1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Kf.get(r)) && !o) {
      Kf.set(t, !0);
      for (var i = [], s = Q1(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var c = 0; c < l.length; c++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
    }
  }
}, q1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function vg(e, t) {
  switch (N1(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + Zs + e + et + e + e;
    case 6828:
    case 4268:
      return ce + e + et + e + e;
    case 6165:
      return ce + e + et + "flex-" + e + e;
    case 5187:
      return ce + e + de(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + et + "flex-$1$2") + e;
    case 5443:
      return ce + e + et + "flex-item-" + de(e, /flex-|-self/, "") + e;
    case 4675:
      return ce + e + et + "flex-line-pack" + de(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ce + e + et + de(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + et + de(e, "basis", "preferred-size") + e;
    case 6060:
      return ce + "box-" + de(e, "-grow", "") + ce + e + et + de(e, "grow", "positive") + e;
    case 4554:
      return ce + de(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return de(de(de(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return de(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return de(de(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (rn(e) - 1 - t > 6)
        switch (Ye(e, t + 1)) {
          case 109:
            if (Ye(e, t + 4) !== 45)
              break;
          case 102:
            return de(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + Zs + (Ye(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Gu(e, "stretch") ? vg(de(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ye(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ye(e, rn(e) - 3 - (~Gu(e, "!important") && 10))) {
        case 107:
          return de(e, ":", ":" + ce) + e;
        case 101:
          return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (Ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ye(e, t + 11)) {
        case 114:
          return ce + e + et + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + et + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + et + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + et + e + e;
  }
  return e;
}
var Z1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case rd:
        t.return = vg(t.value, t.length);
        break;
      case dg:
        return Zr([Oo(t, {
          value: de(t.value, "@", "@" + ce)
        })], o);
      case nd:
        if (t.length)
          return L1(t.props, function(i) {
            switch (O1(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Zr([Oo(t, {
                  props: [de(i, /:(read-\w+)/, ":" + Zs + "$1")]
                })], o);
              case "::placeholder":
                return Zr([Oo(t, {
                  props: [de(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), Oo(t, {
                  props: [de(i, /:(plac\w+)/, ":" + Zs + "$1")]
                }), Oo(t, {
                  props: [de(i, /:(plac\w+)/, et + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, J1 = [Z1], id = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(x) {
      var P = x.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || J1, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(x) {
      for (var P = x.getAttribute("data-emotion").split(" "), h = 1; h < P.length; h++)
        i[P[h]] = !0;
      l.push(x);
    }
  );
  var a, u = [X1, q1];
  {
    var c, d = [H1, K1(function(x) {
      c.insert(x);
    })], p = V1(u.concat(o, d)), C = function(P) {
      return Zr(W1(P), p);
    };
    a = function(P, h, f, m) {
      c = f, C(P ? P + "{" + h.styles + "}" : h.styles), m && (S.inserted[h.name] = !0);
    };
  }
  var S = {
    key: n,
    sheet: new R1({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: a
  };
  return S.sheet.hydrate(l), S;
}, yg = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = typeof Symbol == "function" && Symbol.for, sd = Ve ? Symbol.for("react.element") : 60103, ld = Ve ? Symbol.for("react.portal") : 60106, Rl = Ve ? Symbol.for("react.fragment") : 60107, Tl = Ve ? Symbol.for("react.strict_mode") : 60108, _l = Ve ? Symbol.for("react.profiler") : 60114, Il = Ve ? Symbol.for("react.provider") : 60109, Ml = Ve ? Symbol.for("react.context") : 60110, ad = Ve ? Symbol.for("react.async_mode") : 60111, Nl = Ve ? Symbol.for("react.concurrent_mode") : 60111, Ol = Ve ? Symbol.for("react.forward_ref") : 60112, Ll = Ve ? Symbol.for("react.suspense") : 60113, ex = Ve ? Symbol.for("react.suspense_list") : 60120, zl = Ve ? Symbol.for("react.memo") : 60115, Al = Ve ? Symbol.for("react.lazy") : 60116, tx = Ve ? Symbol.for("react.block") : 60121, nx = Ve ? Symbol.for("react.fundamental") : 60117, rx = Ve ? Symbol.for("react.responder") : 60118, ox = Ve ? Symbol.for("react.scope") : 60119;
function Rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sd:
        switch (e = e.type, e) {
          case ad:
          case Nl:
          case Rl:
          case _l:
          case Tl:
          case Ll:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ml:
              case Ol:
              case Al:
              case zl:
              case Il:
                return e;
              default:
                return t;
            }
        }
      case ld:
        return t;
    }
  }
}
function xg(e) {
  return Rt(e) === Nl;
}
he.AsyncMode = ad;
he.ConcurrentMode = Nl;
he.ContextConsumer = Ml;
he.ContextProvider = Il;
he.Element = sd;
he.ForwardRef = Ol;
he.Fragment = Rl;
he.Lazy = Al;
he.Memo = zl;
he.Portal = ld;
he.Profiler = _l;
he.StrictMode = Tl;
he.Suspense = Ll;
he.isAsyncMode = function(e) {
  return xg(e) || Rt(e) === ad;
};
he.isConcurrentMode = xg;
he.isContextConsumer = function(e) {
  return Rt(e) === Ml;
};
he.isContextProvider = function(e) {
  return Rt(e) === Il;
};
he.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sd;
};
he.isForwardRef = function(e) {
  return Rt(e) === Ol;
};
he.isFragment = function(e) {
  return Rt(e) === Rl;
};
he.isLazy = function(e) {
  return Rt(e) === Al;
};
he.isMemo = function(e) {
  return Rt(e) === zl;
};
he.isPortal = function(e) {
  return Rt(e) === ld;
};
he.isProfiler = function(e) {
  return Rt(e) === _l;
};
he.isStrictMode = function(e) {
  return Rt(e) === Tl;
};
he.isSuspense = function(e) {
  return Rt(e) === Ll;
};
he.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Rl || e === Nl || e === _l || e === Tl || e === Ll || e === ex || typeof e == "object" && e !== null && (e.$$typeof === Al || e.$$typeof === zl || e.$$typeof === Il || e.$$typeof === Ml || e.$$typeof === Ol || e.$$typeof === nx || e.$$typeof === rx || e.$$typeof === ox || e.$$typeof === tx);
};
he.typeOf = Rt;
yg.exports = he;
var ix = yg.exports, Sg = ix, sx = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lx = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cg = {};
Cg[Sg.ForwardRef] = sx;
Cg[Sg.Memo] = lx;
var ax = !0;
function wg(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ud = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ax === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, cd = function(t, n, r) {
  ud(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ux(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var cx = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, dx = !1, fx = /[A-Z]|^ms/g, px = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bg = function(t) {
  return t.charCodeAt(1) === 45;
}, Gf = function(t) {
  return t != null && typeof t != "boolean";
}, Fa = /* @__PURE__ */ gg(function(e) {
  return bg(e) ? e : e.replace(fx, "-$&").toLowerCase();
}), Yf = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(px, function(r, o, i) {
          return on = {
            name: o,
            styles: i,
            next: on
          }, o;
        });
  }
  return cx[t] !== 1 && !bg(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, mx = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function bi(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return on = {
          name: o.name,
          styles: o.styles,
          next: on
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            on = {
              name: s.name,
              styles: s.styles,
              next: on
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return hx(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = on, u = n(e);
        return on = a, bi(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function hx(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += bi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Gf(l) && (r += Fa(i) + ":" + Yf(i, l) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && dx)
          throw new Error(mx);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            Gf(s[a]) && (r += Fa(i) + ":" + Yf(i, s[a]) + ";");
        else {
          var u = bi(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Fa(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Qf = /label:\s*([^\s;{]+)\s*(;|$)/g, on;
function Ii(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  on = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += bi(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += bi(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  Qf.lastIndex = 0;
  for (var u = "", c; (c = Qf.exec(o)) !== null; )
    u += "-" + c[1];
  var d = ux(o) + u;
  return {
    name: d,
    styles: o,
    next: on
  };
}
var gx = function(t) {
  return t();
}, kg = Ja["useInsertionEffect"] ? Ja["useInsertionEffect"] : !1, Eg = kg || gx, Xf = kg || y.useLayoutEffect, vx = !1, Pg = /* @__PURE__ */ y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ id({
    key: "css"
  }) : null
), $g = Pg.Provider, dd = function(t) {
  return /* @__PURE__ */ y.forwardRef(function(n, r) {
    var o = y.useContext(Pg);
    return t(n, o, r);
  });
}, yo = /* @__PURE__ */ y.createContext({}), fd = {}.hasOwnProperty, Qu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", yx = function(t, n) {
  var r = {};
  for (var o in n)
    fd.call(n, o) && (r[o] = n[o]);
  return r[Qu] = t, r;
}, xx = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ud(n, r, o), Eg(function() {
    return cd(n, r, o);
  }), null;
}, Sx = /* @__PURE__ */ dd(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Qu], i = [r], s = "";
  typeof e.className == "string" ? s = wg(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = Ii(i, void 0, y.useContext(yo));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    fd.call(e, u) && u !== "css" && u !== Qu && !vx && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(xx, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ y.createElement(o, a));
}), Cx = Sx, qf = function(t, n) {
  var r = arguments;
  if (n == null || !fd.call(n, "css"))
    return y.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Cx, i[1] = yx(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return y.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(qf || (qf = {}));
var wx = /* @__PURE__ */ dd(function(e, t) {
  var n = e.styles, r = Ii([n], void 0, y.useContext(yo)), o = y.useRef();
  return Xf(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Xf(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && cd(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Rg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ii(t);
}
function Fl() {
  var e = Rg.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var bx = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, kx = /* @__PURE__ */ gg(
  function(e) {
    return bx.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ex = !1, Px = kx, $x = function(t) {
  return t !== "theme";
}, Zf = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Px : $x;
}, Jf = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Rx = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ud(n, r, o), Eg(function() {
    return cd(n, r, o);
  }), null;
}, Tx = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = Jf(t, n, r), a = l || Zf(o), u = !a("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var p = c[0];
      d.push(p[0]);
      for (var C = c.length, S = 1; S < C; S++)
        d.push(c[S], p[S]);
    }
    var x = dd(function(P, h, f) {
      var m = u && P.as || o, v = "", E = [], b = P;
      if (P.theme == null) {
        b = {};
        for (var k in P)
          b[k] = P[k];
        b.theme = y.useContext(yo);
      }
      typeof P.className == "string" ? v = wg(h.registered, E, P.className) : P.className != null && (v = P.className + " ");
      var $ = Ii(d.concat(E), h.registered, b);
      v += h.key + "-" + $.name, s !== void 0 && (v += " " + s);
      var M = u && l === void 0 ? Zf(m) : a, T = {};
      for (var F in P)
        u && F === "as" || M(F) && (T[F] = P[F]);
      return T.className = v, f && (T.ref = f), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(Rx, {
        cache: h,
        serialized: $,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ y.createElement(m, T));
    });
    return x.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = o, x.__emotion_styles = d, x.__emotion_forwardProp = l, Object.defineProperty(x, "toString", {
      value: function() {
        return s === void 0 && Ex ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), x.withComponent = function(P, h) {
      var f = e(P, g({}, n, h, {
        shouldForwardProp: Jf(x, h, !0)
      }));
      return f.apply(void 0, d);
    }, x;
  };
}, _x = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Xu = Tx.bind(null);
_x.forEach(function(e) {
  Xu[e] = Xu(e);
});
function Ix(e, t) {
  const n = id({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = n.insert;
    n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), r(...o));
  }
  return n;
}
const ja = /* @__PURE__ */ new Map();
function Mx(e) {
  const {
    injectFirst: t,
    enableCssLayer: n,
    children: r
  } = e, o = y.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && ja.has(i))
      return ja.get(i);
    const s = Ix(t, n);
    return ja.set(i, s), s;
  }, [t, n]);
  return t || n ? /* @__PURE__ */ w.jsx($g, {
    value: o,
    children: r
  }) : r;
}
function Nx(e) {
  return e == null || Object.keys(e).length === 0;
}
function Tg(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Nx(o) ? n : o) : t;
  return /* @__PURE__ */ w.jsx(wx, {
    styles: r
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function pd(e, t) {
  return Xu(e, t);
}
const _g = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ep = [];
function Js(e) {
  return ep[0] = e, Ii(ep);
}
const Ox = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Tg,
  StyledEngineProvider: Mx,
  ThemeContext: yo,
  css: Rg,
  default: pd,
  internal_processStyles: _g,
  internal_serializeStyles: Js,
  keyframes: Fl
}, Symbol.toStringTag, { value: "Module" }));
function vn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ig(e) {
  if (/* @__PURE__ */ y.isValidElement(e) || !vn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ig(e[n]);
  }), t;
}
function lt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? g({}, e) : e;
  return vn(e) && vn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ y.isValidElement(t[o]) ? r[o] = t[o] : vn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && vn(e[o]) ? r[o] = lt(e[o], t[o], n) : n.clone ? r[o] = vn(t[o]) ? Ig(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Lx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt,
  isPlainObject: vn
}, Symbol.toStringTag, { value: "Module" })), zx = ["values", "unit", "step"], Ax = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => g({}, n, {
    [r.key]: r.val
  }), {});
};
function Mg(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = U(e, zx), i = Ax(t), s = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function a(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, C) {
    const S = s.indexOf(C);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(S !== -1 && typeof t[s[S]] == "number" ? t[s[S]] : C) - r / 100}${n})`;
  }
  function c(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function d(p) {
    const C = s.indexOf(p);
    return C === 0 ? l(s[1]) : C === s.length - 1 ? a(s[C]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return g({
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: c,
    not: d,
    unit: n
  }, o);
}
const Fx = {
  borderRadius: 4
}, jx = Fx;
function ei(e, t) {
  return t ? lt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const md = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, tp = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${md[e]}px)`
};
function Jt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || tp;
    return t.reduce((s, l, a) => (s[i.up(i.keys[a])] = n(t[a]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || tp;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || md).indexOf(l) !== -1) {
        const a = i.up(l);
        s[a] = n(t[l], l);
      } else {
        const a = l;
        s[a] = t[a];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Ng(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function qu(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Dx(e, ...t) {
  const n = Ng(e), r = [n, ...t].reduce((o, i) => lt(o, i), {});
  return qu(Object.keys(n), r);
}
function Bx(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Da({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || Bx(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((s, l, a) => (Array.isArray(e) ? (s[l] = e[a] != null ? e[a] : e[i], i = a) : typeof e == "object" ? (s[l] = e[l] != null ? e[l] : e[i], i = l) : s[l] = e, s), {});
}
function H(e) {
  if (typeof e != "string")
    throw new Error(yr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Wx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H
}, Symbol.toStringTag, { value: "Module" }));
function jl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function el(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = jl(e, n) || r, t && (o = t(o, r, e)), o;
}
function Le(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = jl(a, r) || {};
    return Jt(s, l, (d) => {
      let p = el(u, o, d);
      return d === p && typeof d == "string" && (p = el(u, o, `${t}${d === "default" ? "" : H(d)}`, d)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Ux(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Hx = {
  m: "margin",
  p: "padding"
}, Vx = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, np = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Kx = Ux((e) => {
  if (e.length > 2)
    if (np[e])
      e = np[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Hx[t], o = Vx[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), hd = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], gd = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...hd, ...gd];
function Mi(e, t, n, r) {
  var o;
  const i = (o = jl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function vd(e) {
  return Mi(e, "spacing", 8);
}
function xr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Gx(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = xr(t, n), r), {});
}
function Yx(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Kx(n), i = Gx(o, r), s = e[n];
  return Jt(e, s, i);
}
function Og(e, t) {
  const n = vd(e.theme);
  return Object.keys(e).map((r) => Yx(e, t, r, n)).reduce(ei, {});
}
function _e(e) {
  return Og(e, hd);
}
_e.propTypes = {};
_e.filterProps = hd;
function Ie(e) {
  return Og(e, gd);
}
Ie.propTypes = {};
Ie.filterProps = gd;
function Qx(e = 8) {
  if (e.mui)
    return e;
  const t = vd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function Dl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ei(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function zt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Wt(e, t) {
  return Le({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Xx = Wt("border", zt), qx = Wt("borderTop", zt), Zx = Wt("borderRight", zt), Jx = Wt("borderBottom", zt), eS = Wt("borderLeft", zt), tS = Wt("borderColor"), nS = Wt("borderTopColor"), rS = Wt("borderRightColor"), oS = Wt("borderBottomColor"), iS = Wt("borderLeftColor"), sS = Wt("outline", zt), lS = Wt("outlineColor"), Bl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: xr(t, r)
    });
    return Jt(e, e.borderRadius, n);
  }
  return null;
};
Bl.propTypes = {};
Bl.filterProps = ["borderRadius"];
Dl(Xx, qx, Zx, Jx, eS, tS, nS, rS, oS, iS, Bl, sS, lS);
const Wl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mi(e.theme, "spacing", 8), n = (r) => ({
      gap: xr(t, r)
    });
    return Jt(e, e.gap, n);
  }
  return null;
};
Wl.propTypes = {};
Wl.filterProps = ["gap"];
const Ul = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Mi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: xr(t, r)
    });
    return Jt(e, e.columnGap, n);
  }
  return null;
};
Ul.propTypes = {};
Ul.filterProps = ["columnGap"];
const Hl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Mi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: xr(t, r)
    });
    return Jt(e, e.rowGap, n);
  }
  return null;
};
Hl.propTypes = {};
Hl.filterProps = ["rowGap"];
const aS = Le({
  prop: "gridColumn"
}), uS = Le({
  prop: "gridRow"
}), cS = Le({
  prop: "gridAutoFlow"
}), dS = Le({
  prop: "gridAutoColumns"
}), fS = Le({
  prop: "gridAutoRows"
}), pS = Le({
  prop: "gridTemplateColumns"
}), mS = Le({
  prop: "gridTemplateRows"
}), hS = Le({
  prop: "gridTemplateAreas"
}), gS = Le({
  prop: "gridArea"
});
Dl(Wl, Ul, Hl, aS, uS, cS, dS, fS, pS, mS, hS, gS);
function Jr(e, t) {
  return t === "grey" ? t : e;
}
const vS = Le({
  prop: "color",
  themeKey: "palette",
  transform: Jr
}), yS = Le({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Jr
}), xS = Le({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Jr
});
Dl(vS, yS, xS);
function xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const SS = Le({
  prop: "width",
  transform: xt
}), yd = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || md[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: xt(n)
      };
    };
    return Jt(e, e.maxWidth, t);
  }
  return null;
};
yd.filterProps = ["maxWidth"];
const CS = Le({
  prop: "minWidth",
  transform: xt
}), wS = Le({
  prop: "height",
  transform: xt
}), bS = Le({
  prop: "maxHeight",
  transform: xt
}), kS = Le({
  prop: "minHeight",
  transform: xt
});
Le({
  prop: "size",
  cssProperty: "width",
  transform: xt
});
Le({
  prop: "size",
  cssProperty: "height",
  transform: xt
});
const ES = Le({
  prop: "boxSizing"
});
Dl(SS, yd, CS, wS, bS, kS, ES);
const PS = {
  // borders
  border: {
    themeKey: "borders",
    transform: zt
  },
  borderTop: {
    themeKey: "borders",
    transform: zt
  },
  borderRight: {
    themeKey: "borders",
    transform: zt
  },
  borderBottom: {
    themeKey: "borders",
    transform: zt
  },
  borderLeft: {
    themeKey: "borders",
    transform: zt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: zt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Bl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Jr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Jr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Jr
  },
  // spacing
  p: {
    style: Ie
  },
  pt: {
    style: Ie
  },
  pr: {
    style: Ie
  },
  pb: {
    style: Ie
  },
  pl: {
    style: Ie
  },
  px: {
    style: Ie
  },
  py: {
    style: Ie
  },
  padding: {
    style: Ie
  },
  paddingTop: {
    style: Ie
  },
  paddingRight: {
    style: Ie
  },
  paddingBottom: {
    style: Ie
  },
  paddingLeft: {
    style: Ie
  },
  paddingX: {
    style: Ie
  },
  paddingY: {
    style: Ie
  },
  paddingInline: {
    style: Ie
  },
  paddingInlineStart: {
    style: Ie
  },
  paddingInlineEnd: {
    style: Ie
  },
  paddingBlock: {
    style: Ie
  },
  paddingBlockStart: {
    style: Ie
  },
  paddingBlockEnd: {
    style: Ie
  },
  m: {
    style: _e
  },
  mt: {
    style: _e
  },
  mr: {
    style: _e
  },
  mb: {
    style: _e
  },
  ml: {
    style: _e
  },
  mx: {
    style: _e
  },
  my: {
    style: _e
  },
  margin: {
    style: _e
  },
  marginTop: {
    style: _e
  },
  marginRight: {
    style: _e
  },
  marginBottom: {
    style: _e
  },
  marginLeft: {
    style: _e
  },
  marginX: {
    style: _e
  },
  marginY: {
    style: _e
  },
  marginInline: {
    style: _e
  },
  marginInlineStart: {
    style: _e
  },
  marginInlineEnd: {
    style: _e
  },
  marginBlock: {
    style: _e
  },
  marginBlockStart: {
    style: _e
  },
  marginBlockEnd: {
    style: _e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Wl
  },
  rowGap: {
    style: Hl
  },
  columnGap: {
    style: Ul
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: xt
  },
  maxWidth: {
    style: yd
  },
  minWidth: {
    transform: xt
  },
  height: {
    transform: xt
  },
  maxHeight: {
    transform: xt
  },
  minHeight: {
    transform: xt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Ni = PS;
function $S(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function RS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lg() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, l = i[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: a = n,
      themeKey: u,
      transform: c,
      style: d
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = jl(o, u) || {};
    return d ? d(s) : Jt(s, r, (S) => {
      let x = el(p, c, S);
      return S === x && typeof S == "string" && (x = el(p, c, `${n}${S === "default" ? "" : H(S)}`, S)), a === !1 ? x : {
        [a]: x
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {},
      nested: s
    } = n || {};
    if (!o)
      return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Ni;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const d = Ng(i.breakpoints), p = Object.keys(d);
      let C = d;
      return Object.keys(c).forEach((S) => {
        const x = RS(c[S], i);
        if (x != null)
          if (typeof x == "object")
            if (l[S])
              C = ei(C, e(S, x, i, l));
            else {
              const P = Jt({
                theme: i
              }, x, (h) => ({
                [S]: h
              }));
              $S(P, x) ? C[S] = t({
                sx: x,
                theme: i,
                nested: !0
              }) : C = ei(C, P);
            }
          else
            C = ei(C, e(S, x, i, l));
      }), !s && i.modularCssLayers ? {
        "@layer sx": qu(p, C)
      } : qu(p, C);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const zg = Lg();
zg.filterProps = ["sx"];
const Oi = zg;
function Ag(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const TS = ["breakpoints", "palette", "spacing", "shape"];
function xo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = U(e, TS), l = Mg(n), a = Qx(o);
  let u = lt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: g({
      mode: "light"
    }, r),
    spacing: a,
    shape: g({}, jx, i)
  }, s);
  return u.applyStyles = Ag, u = t.reduce((c, d) => lt(c, d), u), u.unstable_sxConfig = g({}, Ni, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return Oi({
      sx: d,
      theme: this
    });
  }, u;
}
const _S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo,
  private_createBreakpoints: Mg,
  unstable_applyStyles: Ag
}, Symbol.toStringTag, { value: "Module" }));
function IS(e) {
  return Object.keys(e).length === 0;
}
function xd(e = null) {
  const t = y.useContext(yo);
  return !t || IS(t) ? e : t;
}
const MS = xo();
function Vl(e = MS) {
  return xd(e);
}
function Ba(e) {
  const t = Js(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Fg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Vl(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Ba(typeof s == "function" ? s(o) : s)) : i = Ba(i)), /* @__PURE__ */ w.jsx(Tg, {
    styles: i
  });
}
const NS = ["sx"], OS = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Ni;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Kl(e) {
  const {
    sx: t
  } = e, n = U(e, NS), {
    systemProps: r,
    otherProps: o
  } = OS(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return vn(l) ? g({}, r, l) : r;
  } : i = g({}, r, t), g({}, o, {
    sx: i
  });
}
const LS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oi,
  extendSxProp: Kl,
  unstable_createStyleFunctionSx: Lg,
  unstable_defaultSxConfig: Ni
}, Symbol.toStringTag, { value: "Module" })), rp = (e) => e, zS = () => {
  let e = rp;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = rp;
    }
  };
}, AS = zS(), jg = AS;
function Dg(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Dg(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function K() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Dg(e)) && (r && (r += " "), r += t);
  return r;
}
const FS = ["className", "component"];
function jS(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = pd("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Oi);
  return /* @__PURE__ */ y.forwardRef(function(a, u) {
    const c = Vl(n), d = Kl(a), {
      className: p,
      component: C = "div"
    } = d, S = U(d, FS);
    return /* @__PURE__ */ w.jsx(i, g({
      as: C,
      ref: u,
      className: K(p, o ? o(r) : r),
      theme: t && c[t] || c
    }, S));
  });
}
const DS = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ne(e, t, n = "Mui") {
  const r = DS[t];
  return r ? `${n}-${r}` : `${jg.generate(e)}-${t}`;
}
function J(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ne(e, o, n);
  }), r;
}
var Bg = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd = Symbol.for("react.transitional.element"), Cd = Symbol.for("react.portal"), Gl = Symbol.for("react.fragment"), Yl = Symbol.for("react.strict_mode"), Ql = Symbol.for("react.profiler"), Xl = Symbol.for("react.consumer"), ql = Symbol.for("react.context"), Zl = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ea = Symbol.for("react.suspense_list"), ta = Symbol.for("react.memo"), na = Symbol.for("react.lazy"), BS = Symbol.for("react.view_transition"), WS = Symbol.for("react.client.reference");
function Ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Sd:
        switch (e = e.type, e) {
          case Gl:
          case Ql:
          case Yl:
          case Jl:
          case ea:
          case BS:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ql:
              case Zl:
              case na:
              case ta:
                return e;
              case Xl:
                return e;
              default:
                return t;
            }
        }
      case Cd:
        return t;
    }
  }
}
ge.ContextConsumer = Xl;
ge.ContextProvider = ql;
ge.Element = Sd;
ge.ForwardRef = Zl;
ge.Fragment = Gl;
ge.Lazy = na;
ge.Memo = ta;
ge.Portal = Cd;
ge.Profiler = Ql;
ge.StrictMode = Yl;
ge.Suspense = Jl;
ge.SuspenseList = ea;
ge.isContextConsumer = function(e) {
  return Ut(e) === Xl;
};
ge.isContextProvider = function(e) {
  return Ut(e) === ql;
};
ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sd;
};
ge.isForwardRef = function(e) {
  return Ut(e) === Zl;
};
ge.isFragment = function(e) {
  return Ut(e) === Gl;
};
ge.isLazy = function(e) {
  return Ut(e) === na;
};
ge.isMemo = function(e) {
  return Ut(e) === ta;
};
ge.isPortal = function(e) {
  return Ut(e) === Cd;
};
ge.isProfiler = function(e) {
  return Ut(e) === Ql;
};
ge.isStrictMode = function(e) {
  return Ut(e) === Yl;
};
ge.isSuspense = function(e) {
  return Ut(e) === Jl;
};
ge.isSuspenseList = function(e) {
  return Ut(e) === ea;
};
ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Gl || e === Ql || e === Yl || e === Jl || e === ea || typeof e == "object" && e !== null && (e.$$typeof === na || e.$$typeof === ta || e.$$typeof === ql || e.$$typeof === Xl || e.$$typeof === Zl || e.$$typeof === WS || e.getModuleId !== void 0);
};
ge.typeOf = Ut;
Bg.exports = ge;
var op = Bg.exports;
const US = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Wg(e) {
  const t = `${e}`.match(US);
  return t && t[1] || "";
}
function Ug(e, t = "") {
  return e.displayName || e.name || Wg(e) || t;
}
function ip(e, t, n) {
  const r = Ug(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function HS(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ug(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case op.ForwardRef:
          return ip(e, e.render, "ForwardRef");
        case op.Memo:
          return ip(e, e.type, "memo");
        default:
          return;
      }
  }
}
const VS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HS,
  getFunctionName: Wg
}, Symbol.toStringTag, { value: "Module" })), KS = ["ownerState"], GS = ["variants"], YS = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function QS(e) {
  return Object.keys(e).length === 0;
}
function XS(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Wa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function sp(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const qS = xo(), ZS = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function rs({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return QS(t) ? e : t[n] || t;
}
function JS(e) {
  return e ? (t, n) => n[e] : null;
}
function ks(e, t, n) {
  let {
    ownerState: r
  } = t, o = U(t, KS);
  const i = typeof e == "function" ? e(g({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => ks(s, g({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let a = U(i, GS);
    return s.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props(g({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style(g({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? sp(Js(d), n) : d);
      }
    }), a;
  }
  return n ? sp(Js(i), n) : i;
}
function eC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = qS,
    rootShouldForwardProp: r = Wa,
    slotShouldForwardProp: o = Wa
  } = e, i = (s) => Oi(g({}, s, {
    theme: rs(g({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    _g(s, (b) => b.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = JS(ZS(u))
    } = l, C = U(l, YS), S = a && a.startsWith("Mui") || u ? "components" : "custom", x = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), P = d || !1;
    let h, f = Wa;
    u === "Root" || u === "root" ? f = r : u ? f = o : XS(s) && (f = void 0);
    const m = pd(s, g({
      shouldForwardProp: f,
      label: h
    }, C)), v = (b) => typeof b == "function" && b.__emotion_real !== b || vn(b) ? (k) => {
      const $ = rs({
        theme: k.theme,
        defaultTheme: n,
        themeId: t
      });
      return ks(b, g({}, k, {
        theme: $
      }), $.modularCssLayers ? S : void 0);
    } : b, E = (b, ...k) => {
      let $ = v(b);
      const M = k ? k.map(v) : [];
      a && p && M.push((L) => {
        const I = rs(g({}, L, {
          defaultTheme: n,
          themeId: t
        }));
        if (!I.components || !I.components[a] || !I.components[a].styleOverrides)
          return null;
        const N = I.components[a].styleOverrides, z = {};
        return Object.entries(N).forEach(([j, B]) => {
          z[j] = ks(B, g({}, L, {
            theme: I
          }), I.modularCssLayers ? "theme" : void 0);
        }), p(L, z);
      }), a && !x && M.push((L) => {
        var I;
        const N = rs(g({}, L, {
          defaultTheme: n,
          themeId: t
        })), z = N == null || (I = N.components) == null || (I = I[a]) == null ? void 0 : I.variants;
        return ks({
          variants: z
        }, g({}, L, {
          theme: N
        }), N.modularCssLayers ? "theme" : void 0);
      }), P || M.push(i);
      const T = M.length - k.length;
      if (Array.isArray(b) && T > 0) {
        const L = new Array(T).fill("");
        $ = [...b, ...L], $.raw = [...b.raw, ...L];
      }
      const F = m($, ...M);
      return s.muiName && (F.muiName = s.muiName), F;
    };
    return m.withConfig && (E.withConfig = m.withConfig), E;
  };
}
const tC = eC(), Hg = tC;
function ki(e, t) {
  const n = g({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = g({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = g({}, i), Object.keys(o).forEach((s) => {
        n[r][s] = ki(o[s], i[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function nC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ki(t.components[n].defaultProps, r);
}
function Vg({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Vl(n);
  return r && (o = o[r] || o), nC({
    theme: o,
    name: t,
    props: e
  });
}
const rC = typeof window < "u" ? y.useLayoutEffect : y.useEffect, cn = rC;
function oC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const iC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oC
}, Symbol.toStringTag, { value: "Module" }));
function lp(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Kg(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Es(e, t) {
  var n, r;
  return /* @__PURE__ */ y.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function kt(e) {
  return e && e.ownerDocument || document;
}
function Sr(e) {
  return kt(e).defaultView || window;
}
function Zu(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let ap = 0;
function sC(e) {
  const [t, n] = y.useState(e), r = e || t;
  return y.useEffect(() => {
    t == null && (ap += 1, n(`mui-${ap}`));
  }, [t]), r;
}
const up = Ja["useId".toString()];
function ra(e) {
  if (up !== void 0) {
    const t = up();
    return e ?? t;
  }
  return sC(e);
}
function Ju({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = y.useRef(e !== void 0), [i, s] = y.useState(t), l = o ? e : i, a = y.useCallback((u) => {
    o || s(u);
  }, []);
  return [l, a];
}
function ur(e) {
  const t = y.useRef(e);
  return cn(() => {
    t.current = e;
  }), y.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function qe(...e) {
  return y.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Zu(n, t);
    });
  }, e);
}
const cp = {};
function lC(e, t) {
  const n = y.useRef(cp);
  return n.current === cp && (n.current = e(t)), n;
}
const aC = [];
function uC(e) {
  y.useEffect(e, aC);
}
class oa {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new oa();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Gg() {
  const e = lC(oa.create).current;
  return uC(e.disposeEffect), e;
}
let ia = !0, ec = !1;
const cC = new oa(), dC = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function fC(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && dC[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function pC(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ia = !0);
}
function Ua() {
  ia = !1;
}
function mC() {
  this.visibilityState === "hidden" && ec && (ia = !0);
}
function hC(e) {
  e.addEventListener("keydown", pC, !0), e.addEventListener("mousedown", Ua, !0), e.addEventListener("pointerdown", Ua, !0), e.addEventListener("touchstart", Ua, !0), e.addEventListener("visibilitychange", mC, !0);
}
function gC(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ia || fC(t);
}
function vC() {
  const e = y.useCallback((o) => {
    o != null && hC(o.ownerDocument);
  }, []), t = y.useRef(!1);
  function n() {
    return t.current ? (ec = !0, cC.start(100, () => {
      ec = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return gC(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Yg(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function re(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
function uo(e) {
  return typeof e == "string";
}
function Qg(e, t, n) {
  return e === void 0 || uo(e) ? t : g({}, t, {
    ownerState: g({}, t.ownerState, n)
  });
}
function Xg(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function dp(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function qg(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const C = K(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), S = g({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), x = g({}, n, o, r);
    return C.length > 0 && (x.className = C), Object.keys(S).length > 0 && (x.style = S), {
      props: x,
      internalRef: void 0
    };
  }
  const s = Xg(g({}, o, r)), l = dp(r), a = dp(o), u = t(s), c = K(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = g({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = g({}, u, n, a, l);
  return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: u.ref
  };
}
function Zg(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const yC = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function co(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = U(e, yC), l = i ? {} : Zg(r, o), {
    props: a,
    internalRef: u
  } = qg(g({}, s, {
    externalSlotProps: l
  })), c = qe(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Qg(n, g({}, a, {
    ref: c
  }), o);
}
function Li(e) {
  if (parseInt(y.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const xC = /* @__PURE__ */ y.createContext(null), Jg = xC;
function ev() {
  return y.useContext(Jg);
}
const SC = typeof Symbol == "function" && Symbol.for, CC = SC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function wC(e, t) {
  return typeof t == "function" ? t(e) : g({}, e, t);
}
function bC(e) {
  const {
    children: t,
    theme: n
  } = e, r = ev(), o = y.useMemo(() => {
    const i = r === null ? n : wC(r, n);
    return i != null && (i[CC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ w.jsx(Jg.Provider, {
    value: o,
    children: t
  });
}
const kC = ["value"], tv = /* @__PURE__ */ y.createContext();
function EC(e) {
  let {
    value: t
  } = e, n = U(e, kC);
  return /* @__PURE__ */ w.jsx(tv.Provider, g({
    value: t ?? !0
  }, n));
}
const PC = () => {
  const e = y.useContext(tv);
  return e ?? !1;
}, nv = /* @__PURE__ */ y.createContext(void 0);
function $C({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ w.jsx(nv.Provider, {
    value: e,
    children: t
  });
}
function RC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? ki(o.defaultProps, r) : !o.styleOverrides && !o.variants ? ki(o, r) : r;
}
function TC({
  props: e,
  name: t
}) {
  const n = y.useContext(nv);
  return RC({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function _C(e) {
  const t = xd(), n = ra() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, cn(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      var l;
      if (s && (l = s.hasAttribute) != null && l.call(s, "data-mui-layer-order") && s.getAttribute("data-mui-layer-order") === n)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", n), u.textContent = o, i.prepend(u);
    } else {
      var a;
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ w.jsx(Fg, {
    styles: o
  }) : null;
}
const fp = {};
function pp(e, t, n, r = !1) {
  return y.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? g({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? g({}, t, {
      [e]: n
    }) : g({}, t, n);
  }, [e, t, n, r]);
}
function IC(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = xd(fp), i = ev() || fp, s = pp(r, o, n), l = pp(r, i, n, !0), a = s.direction === "rtl", u = _C(s);
  return /* @__PURE__ */ w.jsx(bC, {
    theme: l,
    children: /* @__PURE__ */ w.jsx(yo.Provider, {
      value: s,
      children: /* @__PURE__ */ w.jsx(EC, {
        value: a,
        children: /* @__PURE__ */ w.jsxs($C, {
          value: s == null ? void 0 : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const MC = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], NC = xo(), OC = Hg("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${H(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), LC = (e) => Vg({
  props: e,
  name: "MuiContainer",
  defaultTheme: NC
}), zC = (e, t) => {
  const n = (a) => ne(t, a), {
    classes: r,
    fixed: o,
    disableGutters: i,
    maxWidth: s
  } = e, l = {
    root: ["root", s && `maxWidth${H(String(s))}`, o && "fixed", i && "disableGutters"]
  };
  return re(l, n, r);
};
function AC(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = OC,
    useThemeProps: n = LC,
    componentName: r = "MuiContainer"
  } = e, o = t(({
    theme: s,
    ownerState: l
  }) => g({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !l.disableGutters && {
    paddingLeft: s.spacing(2),
    paddingRight: s.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [s.breakpoints.up("sm")]: {
      paddingLeft: s.spacing(3),
      paddingRight: s.spacing(3)
    }
  }), ({
    theme: s,
    ownerState: l
  }) => l.fixed && Object.keys(s.breakpoints.values).reduce((a, u) => {
    const c = u, d = s.breakpoints.values[c];
    return d !== 0 && (a[s.breakpoints.up(c)] = {
      maxWidth: `${d}${s.breakpoints.unit}`
    }), a;
  }, {}), ({
    theme: s,
    ownerState: l
  }) => g({}, l.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [s.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(s.breakpoints.values.xs, 444)
    }
  }, l.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  l.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [s.breakpoints.up(l.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${s.breakpoints.values[l.maxWidth]}${s.breakpoints.unit}`
    }
  }));
  return /* @__PURE__ */ y.forwardRef(function(l, a) {
    const u = n(l), {
      className: c,
      component: d = "div",
      disableGutters: p = !1,
      fixed: C = !1,
      maxWidth: S = "lg"
    } = u, x = U(u, MC), P = g({}, u, {
      component: d,
      disableGutters: p,
      fixed: C,
      maxWidth: S
    }), h = zC(P, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ w.jsx(o, g({
        as: d,
        ownerState: P,
        className: K(h.root, c),
        ref: a
      }, x))
    );
  });
}
const FC = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], jC = xo(), DC = Hg("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function BC(e) {
  return Vg({
    props: e,
    name: "MuiStack",
    defaultTheme: jC
  });
}
function WC(e, t) {
  const n = y.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ y.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const UC = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], HC = ({
  ownerState: e,
  theme: t
}) => {
  let n = g({
    display: "flex",
    flexDirection: "column"
  }, Jt({
    theme: t
  }, Da({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = vd(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = Da({
      values: e.direction,
      base: o
    }), s = Da({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, c) => {
      if (!i[a]) {
        const p = u > 0 ? i[c[u - 1]] : "column";
        i[a] = p;
      }
    }), n = lt(n, Jt({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: xr(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${UC(u ? i[u] : e.direction)}`]: xr(r, a)
      }
    }));
  }
  return n = Dx(t.breakpoints, n), n;
};
function VC(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = DC,
    useThemeProps: n = BC,
    componentName: r = "MuiStack"
  } = e, o = () => re({
    root: ["root"]
  }, (a) => ne(r, a), {}), i = t(HC);
  return /* @__PURE__ */ y.forwardRef(function(a, u) {
    const c = n(a), d = Kl(c), {
      component: p = "div",
      direction: C = "column",
      spacing: S = 0,
      divider: x,
      children: P,
      className: h,
      useFlexGap: f = !1
    } = d, m = U(d, FC), v = {
      direction: C,
      spacing: S,
      useFlexGap: f
    }, E = o();
    return /* @__PURE__ */ w.jsx(i, g({
      as: p,
      ownerState: v,
      ref: u,
      className: K(E.root, h)
    }, m, {
      children: x ? WC(P, x) : P
    }));
  });
}
function KC(e, t) {
  return g({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ze = {}, rv = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(rv);
var ov = rv.exports;
const GC = /* @__PURE__ */ En(b1), YC = /* @__PURE__ */ En(iC);
var iv = ov;
Object.defineProperty(ze, "__esModule", {
  value: !0
});
var We = ze.alpha = uv;
ze.blend = iw;
ze.colorChannel = void 0;
var tl = ze.darken = bd;
ze.decomposeColor = Bt;
ze.emphasize = cv;
var QC = ze.getContrastRatio = ew;
ze.getLuminance = rl;
ze.hexToRgb = sv;
ze.hslToRgb = av;
var nl = ze.lighten = kd;
ze.private_safeAlpha = tw;
ze.private_safeColorChannel = void 0;
ze.private_safeDarken = nw;
ze.private_safeEmphasize = ow;
ze.private_safeLighten = rw;
ze.recomposeColor = So;
ze.rgbToHex = JC;
var mp = iv(GC), XC = iv(YC);
function wd(e, t = 0, n = 1) {
  return (0, XC.default)(e, t, n);
}
function sv(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qC(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Bt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Bt(sv(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, mp.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error((0, mp.default)(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const lv = (e) => {
  const t = Bt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
ze.colorChannel = lv;
const ZC = (e, t) => {
  try {
    return lv(e);
  } catch {
    return e;
  }
};
ze.private_safeColorChannel = ZC;
function So(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function JC(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Bt(e);
  return `#${t.map((n, r) => qC(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function av(e) {
  e = Bt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), So({
    type: l,
    values: a
  });
}
function rl(e) {
  e = Bt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Bt(av(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ew(e, t) {
  const n = rl(e), r = rl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function uv(e, t) {
  return e = Bt(e), t = wd(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, So(e);
}
function tw(e, t, n) {
  try {
    return uv(e, t);
  } catch {
    return e;
  }
}
function bd(e, t) {
  if (e = Bt(e), t = wd(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return So(e);
}
function nw(e, t, n) {
  try {
    return bd(e, t);
  } catch {
    return e;
  }
}
function kd(e, t) {
  if (e = Bt(e), t = wd(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return So(e);
}
function rw(e, t, n) {
  try {
    return kd(e, t);
  } catch {
    return e;
  }
}
function cv(e, t = 0.15) {
  return rl(e) > 0.5 ? bd(e, t) : kd(e, t);
}
function ow(e, t, n) {
  try {
    return cv(e, t);
  } catch {
    return e;
  }
}
function iw(e, t, n, r = 1) {
  const o = (a, u) => Math.round((a ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), i = Bt(e), s = Bt(t), l = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return So({
    type: "rgb",
    values: l
  });
}
const sw = ["mode", "contrastThreshold", "tonalOffset"], hp = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Si.white,
    default: Si.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ha = {
  text: {
    primary: Si.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Si.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function gp(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = nl(e.main, o) : t === "dark" && (e.dark = tl(e.main, i)));
}
function lw(e = "light") {
  return e === "dark" ? {
    main: $r[200],
    light: $r[50],
    dark: $r[400]
  } : {
    main: $r[700],
    light: $r[400],
    dark: $r[800]
  };
}
function aw(e = "light") {
  return e === "dark" ? {
    main: Pr[200],
    light: Pr[50],
    dark: Pr[400]
  } : {
    main: Pr[500],
    light: Pr[300],
    dark: Pr[700]
  };
}
function uw(e = "light") {
  return e === "dark" ? {
    main: Er[500],
    light: Er[300],
    dark: Er[700]
  } : {
    main: Er[700],
    light: Er[400],
    dark: Er[800]
  };
}
function cw(e = "light") {
  return e === "dark" ? {
    main: Rr[400],
    light: Rr[300],
    dark: Rr[700]
  } : {
    main: Rr[700],
    light: Rr[500],
    dark: Rr[900]
  };
}
function dw(e = "light") {
  return e === "dark" ? {
    main: Tr[400],
    light: Tr[300],
    dark: Tr[700]
  } : {
    main: Tr[800],
    light: Tr[500],
    dark: Tr[900]
  };
}
function fw(e = "light") {
  return e === "dark" ? {
    main: No[400],
    light: No[300],
    dark: No[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: No[500],
    dark: No[900]
  };
}
function pw(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = U(e, sw), i = e.primary || lw(t), s = e.secondary || aw(t), l = e.error || uw(t), a = e.info || cw(t), u = e.success || dw(t), c = e.warning || fw(t);
  function d(x) {
    return QC(x, Ha.text.primary) >= n ? Ha.text.primary : hp.text.primary;
  }
  const p = ({
    color: x,
    name: P,
    mainShade: h = 500,
    lightShade: f = 300,
    darkShade: m = 700
  }) => {
    if (x = g({}, x), !x.main && x[h] && (x.main = x[h]), !x.hasOwnProperty("main"))
      throw new Error(yr(11, P ? ` (${P})` : "", h));
    if (typeof x.main != "string")
      throw new Error(yr(12, P ? ` (${P})` : "", JSON.stringify(x.main)));
    return gp(x, "light", f, r), gp(x, "dark", m, r), x.contrastText || (x.contrastText = d(x.main)), x;
  }, C = {
    dark: Ha,
    light: hp
  };
  return lt(g({
    // A collection of common colors.
    common: g({}, Si),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: w1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, C[t]), o);
}
const mw = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function hw(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vp = {
  textTransform: "uppercase"
}, yp = '"Roboto", "Helvetica", "Arial", sans-serif';
function gw(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = yp,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: d
  } = n, p = U(n, mw), C = o / 14, S = d || ((h) => `${h / u * C}rem`), x = (h, f, m, v, E) => g({
    fontFamily: r,
    fontWeight: h,
    fontSize: S(f),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m
  }, r === yp ? {
    letterSpacing: `${hw(v / f)}em`
  } : {}, E, c), P = {
    h1: x(i, 96, 1.167, -1.5),
    h2: x(i, 60, 1.2, -0.5),
    h3: x(s, 48, 1.167, 0),
    h4: x(s, 34, 1.235, 0.25),
    h5: x(s, 24, 1.334, 0),
    h6: x(l, 20, 1.6, 0.15),
    subtitle1: x(s, 16, 1.75, 0.15),
    subtitle2: x(l, 14, 1.57, 0.1),
    body1: x(s, 16, 1.5, 0.15),
    body2: x(s, 14, 1.43, 0.15),
    button: x(l, 14, 1.75, 0.4, vp),
    caption: x(s, 12, 1.66, 0.4),
    overline: x(s, 12, 2.66, 1, vp),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return lt(g({
    htmlFontSize: u,
    pxToRem: S,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: a
  }, P), p, {
    clone: !1
    // No need to clone deep
  });
}
const vw = 0.2, yw = 0.14, xw = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vw})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yw})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xw})`].join(",");
}
const Sw = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Cw = Sw, ww = ["duration", "easing", "delay"], bw = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, kw = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function xp(e) {
  return `${Math.round(e)}ms`;
}
function Ew(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Pw(e) {
  const t = g({}, bw, e.easing), n = g({}, kw, e.duration);
  return g({
    getAutoHeightDuration: Ew,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: a = 0
      } = i;
      return U(i, ww), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof s == "string" ? s : xp(s)} ${l} ${typeof a == "string" ? a : xp(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const $w = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Rw = $w, Tw = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ed(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = U(e, Tw);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(yr(18));
  const l = pw(r), a = xo(e);
  let u = lt(a, {
    mixins: KC(a.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Cw.slice(),
    typography: gw(l, i),
    transitions: Pw(o),
    zIndex: g({}, Rw)
  });
  return u = lt(u, s), u = t.reduce((c, d) => lt(c, d), u), u.unstable_sxConfig = g({}, Ni, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return Oi({
      sx: d,
      theme: this
    });
  }, u;
}
const _w = Ed(), Pd = _w;
function $d() {
  const e = Vl(Pd);
  return e[lo] || e;
}
var zi = {};
const Iw = /* @__PURE__ */ En(k1);
var Va = { exports: {} }, Sp;
function Mw() {
  return Sp || (Sp = 1, function(e) {
    function t(n, r) {
      if (n == null)
        return {};
      var o = {};
      for (var i in n)
        if ({}.hasOwnProperty.call(n, i)) {
          if (r.indexOf(i) !== -1)
            continue;
          o[i] = n[i];
        }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Va)), Va.exports;
}
const Nw = /* @__PURE__ */ En(Ox), Ow = /* @__PURE__ */ En(Lx), Lw = /* @__PURE__ */ En(Wx), zw = /* @__PURE__ */ En(VS), Aw = /* @__PURE__ */ En(_S), Fw = /* @__PURE__ */ En(LS);
var Co = ov;
Object.defineProperty(zi, "__esModule", {
  value: !0
});
var jw = zi.default = Zw;
zi.shouldForwardProp = Ps;
zi.systemDefaultTheme = void 0;
var Mt = Co(Iw), tc = Co(Mw()), ol = Kw(Nw), Dw = Ow;
Co(Lw);
Co(zw);
var Bw = Co(Aw), Ww = Co(Fw);
const Uw = ["ownerState"], Hw = ["variants"], Vw = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function dv(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (dv = function(r) {
    return r ? n : t;
  })(e);
}
function Kw(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = dv(t);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Gw(e) {
  return Object.keys(e).length === 0;
}
function Yw(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ps(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Cp(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const Qw = zi.systemDefaultTheme = (0, Bw.default)(), Xw = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function os({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Gw(t) ? e : t[n] || t;
}
function qw(e) {
  return e ? (t, n) => n[e] : null;
}
function $s(e, t, n) {
  let {
    ownerState: r
  } = t, o = (0, tc.default)(t, Uw);
  const i = typeof e == "function" ? e((0, Mt.default)({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => $s(s, (0, Mt.default)({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let a = (0, tc.default)(i, Hw);
    return s.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props((0, Mt.default)({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style((0, Mt.default)({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? Cp((0, ol.internal_serializeStyles)(d), n) : d);
      }
    }), a;
  }
  return n ? Cp((0, ol.internal_serializeStyles)(i), n) : i;
}
function Zw(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Qw,
    rootShouldForwardProp: r = Ps,
    slotShouldForwardProp: o = Ps
  } = e, i = (s) => (0, Ww.default)((0, Mt.default)({}, s, {
    theme: os((0, Mt.default)({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    (0, ol.internal_processStyles)(s, (b) => b.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = qw(Xw(u))
    } = l, C = (0, tc.default)(l, Vw), S = a && a.startsWith("Mui") || u ? "components" : "custom", x = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), P = d || !1;
    let h, f = Ps;
    u === "Root" || u === "root" ? f = r : u ? f = o : Yw(s) && (f = void 0);
    const m = (0, ol.default)(s, (0, Mt.default)({
      shouldForwardProp: f,
      label: h
    }, C)), v = (b) => typeof b == "function" && b.__emotion_real !== b || (0, Dw.isPlainObject)(b) ? (k) => {
      const $ = os({
        theme: k.theme,
        defaultTheme: n,
        themeId: t
      });
      return $s(b, (0, Mt.default)({}, k, {
        theme: $
      }), $.modularCssLayers ? S : void 0);
    } : b, E = (b, ...k) => {
      let $ = v(b);
      const M = k ? k.map(v) : [];
      a && p && M.push((L) => {
        const I = os((0, Mt.default)({}, L, {
          defaultTheme: n,
          themeId: t
        }));
        if (!I.components || !I.components[a] || !I.components[a].styleOverrides)
          return null;
        const N = I.components[a].styleOverrides, z = {};
        return Object.entries(N).forEach(([j, B]) => {
          z[j] = $s(B, (0, Mt.default)({}, L, {
            theme: I
          }), I.modularCssLayers ? "theme" : void 0);
        }), p(L, z);
      }), a && !x && M.push((L) => {
        var I;
        const N = os((0, Mt.default)({}, L, {
          defaultTheme: n,
          themeId: t
        })), z = N == null || (I = N.components) == null || (I = I[a]) == null ? void 0 : I.variants;
        return $s({
          variants: z
        }, (0, Mt.default)({}, L, {
          theme: N
        }), N.modularCssLayers ? "theme" : void 0);
      }), P || M.push(i);
      const T = M.length - k.length;
      if (Array.isArray(b) && T > 0) {
        const L = new Array(T).fill("");
        $ = [...b, ...L], $.raw = [...b.raw, ...L];
      }
      const F = m($, ...M);
      return s.muiName && (F.muiName = s.muiName), F;
    };
    return m.withConfig && (E.withConfig = m.withConfig), E;
  };
}
function fv(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Jw = (e) => fv(e) && e !== "classes", vt = Jw, eb = jw({
  themeId: lo,
  defaultTheme: Pd,
  rootShouldForwardProp: vt
}), W = eb, tb = ["theme"];
function nb(e) {
  let {
    theme: t
  } = e, n = U(e, tb);
  const r = t[lo];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = g({}, r, {
    vars: null
  }) : t && !t.vars && (o = g({}, t, {
    vars: null
  }))), /* @__PURE__ */ w.jsx(IC, g({}, n, {
    themeId: r ? lo : void 0,
    theme: o
  }));
}
const rb = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, wp = rb;
function oe(e) {
  return TC(e);
}
function ob(e) {
  return ne("MuiSvgIcon", e);
}
J("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ib = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], sb = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${H(t)}`, `fontSize${H(n)}`]
  };
  return re(o, ob, r);
}, lb = W("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${H(n.color)}`], t[`fontSize${H(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, s, l, a, u, c, d, p, C, S;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (a = l.pxToRem) == null ? void 0 : a.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (d = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? d : {
      action: (C = (e.vars || e).palette) == null || (C = C.action) == null ? void 0 : C.active,
      disabled: (S = (e.vars || e).palette) == null || (S = S.action) == null ? void 0 : S.disabled,
      inherit: void 0
    }[t.color]
  };
}), pv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: d,
    viewBox: p = "0 0 24 24"
  } = r, C = U(r, ib), S = /* @__PURE__ */ y.isValidElement(o) && o.type === "svg", x = g({}, r, {
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: p,
    hasSvgAsChild: S
  }), P = {};
  c || (P.viewBox = p);
  const h = sb(x);
  return /* @__PURE__ */ w.jsxs(lb, g({
    as: l,
    className: K(h.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n
  }, P, C, S && o.props, {
    ownerState: x,
    children: [S ? o.props.children : o, d ? /* @__PURE__ */ w.jsx("title", {
      children: d
    }) : null]
  }));
});
pv.muiName = "SvgIcon";
const bp = pv;
function $n(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ w.jsx(bp, g({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = bp.muiName, /* @__PURE__ */ y.memo(/* @__PURE__ */ y.forwardRef(n));
}
function nc(e, t) {
  return nc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, nc(e, t);
}
function mv(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nc(e, t);
}
const kp = {
  disabled: !1
}, il = it.createContext(null);
var ab = function(t) {
  return t.scrollTop;
}, Uo = "unmounted", or = "exited", ir = "entering", Mr = "entered", rc = "exiting", Rn = /* @__PURE__ */ function(e) {
  mv(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, l = s && !s.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? l ? (a = or, i.appearStatus = ir) : a = Mr : r.unmountOnExit || r.mountOnEnter ? a = Uo : a = or, i.state = {
      status: a
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Uo ? {
      status: or
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ir && s !== Mr && (i = ir) : (s === ir || s === Mr) && (i = rc);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, l;
    return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === ir) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this);
          s && ab(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === or && this.setState({
        status: Uo
      });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [l] : [ts.findDOMNode(this), l], u = a[0], c = a[1], d = this.getTimeouts(), p = l ? d.appear : d.enter;
    if (!o && !s || kp.disabled) {
      this.safeSetState({
        status: Mr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: ir
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: Mr
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ts.findDOMNode(this);
    if (!i || kp.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: rc
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: or
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = a[0], c = a[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Uo)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = U(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ it.createElement(il.Provider, {
        value: null
      }, typeof s == "function" ? s(o, l) : it.cloneElement(it.Children.only(s), l))
    );
  }, t;
}(it.Component);
Rn.contextType = il;
Rn.propTypes = {};
function _r() {
}
Rn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _r,
  onEntering: _r,
  onEntered: _r,
  onExit: _r,
  onExiting: _r,
  onExited: _r
};
Rn.UNMOUNTED = Uo;
Rn.EXITED = or;
Rn.ENTERING = ir;
Rn.ENTERED = Mr;
Rn.EXITING = rc;
const hv = Rn;
function ub(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rd(e, t) {
  var n = function(i) {
    return t && y.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && y.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function cb(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var a in t) {
    if (r[a])
      for (s = 0; s < r[a].length; s++) {
        var u = r[a][s];
        l[r[a][s]] = n(u);
      }
    l[a] = n(a);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = n(o[s]);
  return l;
}
function cr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function db(e, t) {
  return Rd(e.children, function(n) {
    return y.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: cr(n, "appear", e),
      enter: cr(n, "enter", e),
      exit: cr(n, "exit", e)
    });
  });
}
function fb(e, t, n) {
  var r = Rd(e.children), o = cb(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (y.isValidElement(s)) {
      var l = i in t, a = i in r, u = t[i], c = y.isValidElement(u) && !u.props.in;
      a && (!l || c) ? o[i] = y.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: cr(s, "exit", e),
        enter: cr(s, "enter", e)
      }) : !a && l && !c ? o[i] = y.cloneElement(s, {
        in: !1
      }) : a && l && y.isValidElement(u) && (o[i] = y.cloneElement(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: cr(s, "exit", e),
        enter: cr(s, "enter", e)
      }));
    }
  }), o;
}
var pb = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, mb = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Td = /* @__PURE__ */ function(e) {
  mv(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(ub(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, a = i.firstRender;
    return {
      children: a ? db(o, l) : fb(o, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = Rd(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var a = g({}, l.children);
      return delete a[o.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = U(o, ["component", "childFactory"]), a = this.state.contextValue, u = pb(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ it.createElement(il.Provider, {
      value: a
    }, u) : /* @__PURE__ */ it.createElement(il.Provider, {
      value: a
    }, /* @__PURE__ */ it.createElement(i, l, u));
  }, t;
}(it.Component);
Td.propTypes = {};
Td.defaultProps = mb;
const hb = Td, gv = (e) => e.scrollTop;
function sl(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
function gb(e) {
  return ne("MuiPaper", e);
}
J("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const vb = ["className", "component", "elevation", "square", "variant"], yb = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return re(i, gb, o);
}, xb = W("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return g({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && g({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${We("#fff", wp(t.elevation))}, ${We("#fff", wp(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Sb = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: a = "elevation"
  } = r, u = U(r, vb), c = g({}, r, {
    component: i,
    elevation: s,
    square: l,
    variant: a
  }), d = yb(c);
  return /* @__PURE__ */ w.jsx(xb, g({
    as: i,
    ownerState: c,
    className: K(d.root, o),
    ref: n
  }, u));
}), fo = Sb, Cb = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], wb = ["component", "slots", "slotProps"], bb = ["component"];
function Ep(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: s,
    internalForwardedProps: l
  } = t, a = U(t, Cb), {
    component: u,
    slots: c = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    }
  } = i, p = U(i, wb), C = c[e] || r, S = Zg(d[e], o), x = qg(g({
    className: n
  }, a, {
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: S
  })), {
    props: {
      component: P
    },
    internalRef: h
  } = x, f = U(x.props, bb), m = qe(h, S == null ? void 0 : S.ref, t.ref), v = s ? s(f) : {}, E = g({}, o, v), b = e === "root" ? P || u : P, k = Qg(C, g({}, e === "root" && !u && !c[e] && l, e !== "root" && !c[e] && l, f, b && {
    as: b
  }, {
    ref: m
  }), E);
  return Object.keys(v).forEach(($) => {
    delete k[$];
  }), [C, k];
}
function kb(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: a,
    timeout: u
  } = e, [c, d] = y.useState(!1), p = K(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), C = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, S = K(n.child, c && n.childLeaving, r && n.childPulsate);
  return !l && !c && d(!0), y.useEffect(() => {
    if (!l && a != null) {
      const x = setTimeout(a, u);
      return () => {
        clearTimeout(x);
      };
    }
  }, [a, l, u]), /* @__PURE__ */ w.jsx("span", {
    className: p,
    style: C,
    children: /* @__PURE__ */ w.jsx("span", {
      className: S
    })
  });
}
const Eb = J("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Nt = Eb, Pb = ["center", "classes", "className"];
let sa = (e) => e, Pp, $p, Rp, Tp;
const oc = 550, $b = 80, Rb = Fl(Pp || (Pp = sa`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Tb = Fl($p || ($p = sa`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), _b = Fl(Rp || (Rp = sa`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Ib = W("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Mb = W(kb, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Tp || (Tp = sa`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Nt.rippleVisible, Rb, oc, ({
  theme: e
}) => e.transitions.easing.easeInOut, Nt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Nt.child, Nt.childLeaving, Tb, oc, ({
  theme: e
}) => e.transitions.easing.easeInOut, Nt.childPulsate, _b, ({
  theme: e
}) => e.transitions.easing.easeInOut), Nb = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = r, l = U(r, Pb), [a, u] = y.useState([]), c = y.useRef(0), d = y.useRef(null);
  y.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const p = y.useRef(!1), C = Gg(), S = y.useRef(null), x = y.useRef(null), P = y.useCallback((v) => {
    const {
      pulsate: E,
      rippleX: b,
      rippleY: k,
      rippleSize: $,
      cb: M
    } = v;
    u((T) => [...T, /* @__PURE__ */ w.jsx(Mb, {
      classes: {
        ripple: K(i.ripple, Nt.ripple),
        rippleVisible: K(i.rippleVisible, Nt.rippleVisible),
        ripplePulsate: K(i.ripplePulsate, Nt.ripplePulsate),
        child: K(i.child, Nt.child),
        childLeaving: K(i.childLeaving, Nt.childLeaving),
        childPulsate: K(i.childPulsate, Nt.childPulsate)
      },
      timeout: oc,
      pulsate: E,
      rippleX: b,
      rippleY: k,
      rippleSize: $
    }, c.current)]), c.current += 1, d.current = M;
  }, [i]), h = y.useCallback((v = {}, E = {}, b = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: $ = o || E.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = E;
    if ((v == null ? void 0 : v.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (p.current = !0);
    const T = M ? null : x.current, F = T ? T.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let L, I, N;
    if ($ || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      L = Math.round(F.width / 2), I = Math.round(F.height / 2);
    else {
      const {
        clientX: z,
        clientY: j
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      L = Math.round(z - F.left), I = Math.round(j - F.top);
    }
    if ($)
      N = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), N % 2 === 0 && (N += 1);
    else {
      const z = Math.max(Math.abs((T ? T.clientWidth : 0) - L), L) * 2 + 2, j = Math.max(Math.abs((T ? T.clientHeight : 0) - I), I) * 2 + 2;
      N = Math.sqrt(z ** 2 + j ** 2);
    }
    v != null && v.touches ? S.current === null && (S.current = () => {
      P({
        pulsate: k,
        rippleX: L,
        rippleY: I,
        rippleSize: N,
        cb: b
      });
    }, C.start($b, () => {
      S.current && (S.current(), S.current = null);
    })) : P({
      pulsate: k,
      rippleX: L,
      rippleY: I,
      rippleSize: N,
      cb: b
    });
  }, [o, P, C]), f = y.useCallback(() => {
    h({}, {
      pulsate: !0
    });
  }, [h]), m = y.useCallback((v, E) => {
    if (C.clear(), (v == null ? void 0 : v.type) === "touchend" && S.current) {
      S.current(), S.current = null, C.start(0, () => {
        m(v, E);
      });
      return;
    }
    S.current = null, u((b) => b.length > 0 ? b.slice(1) : b), d.current = E;
  }, [C]);
  return y.useImperativeHandle(n, () => ({
    pulsate: f,
    start: h,
    stop: m
  }), [f, h, m]), /* @__PURE__ */ w.jsx(Ib, g({
    className: K(Nt.root, i.root, s),
    ref: x
  }, l, {
    children: /* @__PURE__ */ w.jsx(hb, {
      component: null,
      exit: !0,
      children: a
    })
  }));
}), Ob = Nb;
function Lb(e) {
  return ne("MuiButtonBase", e);
}
const zb = J("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ab = zb, Fb = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], jb = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = re({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Lb, o);
  return n && r && (s.root += ` ${r}`), s;
}, Db = W("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Ab.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Bb = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: a = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: d = !1,
    focusRipple: p = !1,
    LinkComponent: C = "a",
    onBlur: S,
    onClick: x,
    onContextMenu: P,
    onDragLeave: h,
    onFocus: f,
    onFocusVisible: m,
    onKeyDown: v,
    onKeyUp: E,
    onMouseDown: b,
    onMouseLeave: k,
    onMouseUp: $,
    onTouchEnd: M,
    onTouchMove: T,
    onTouchStart: F,
    tabIndex: L = 0,
    TouchRippleProps: I,
    touchRippleRef: N,
    type: z
  } = r, j = U(r, Fb), B = y.useRef(null), R = y.useRef(null), A = qe(R, N), {
    isFocusVisibleRef: D,
    onFocus: Y,
    onBlur: ee,
    ref: fe
  } = vC(), [Z, ue] = y.useState(!1);
  u && Z && ue(!1), y.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ue(!0), B.current.focus();
    }
  }), []);
  const [se, Ne] = y.useState(!1);
  y.useEffect(() => {
    Ne(!0);
  }, []);
  const je = se && !c && !u;
  y.useEffect(() => {
    Z && p && !c && se && R.current.pulsate();
  }, [c, p, Z, se]);
  function _(X, mn, wo = d) {
    return ur((bo) => (mn && mn(bo), !wo && R.current && R.current[X](bo), !0));
  }
  const G = _("start", b), q = _("stop", P), pe = _("stop", h), te = _("stop", $), le = _("stop", (X) => {
    Z && X.preventDefault(), k && k(X);
  }), we = _("start", F), Tn = _("stop", M), Tt = _("stop", T), _t = _("stop", (X) => {
    ee(X), D.current === !1 && ue(!1), S && S(X);
  }, !1), Ht = ur((X) => {
    B.current || (B.current = X.currentTarget), Y(X), D.current === !0 && (ue(!0), m && m(X)), f && f(X);
  }), It = () => {
    const X = B.current;
    return a && a !== "button" && !(X.tagName === "A" && X.href);
  }, Pe = y.useRef(!1), fn = ur((X) => {
    p && !Pe.current && Z && R.current && X.key === " " && (Pe.current = !0, R.current.stop(X, () => {
      R.current.start(X);
    })), X.target === X.currentTarget && It() && X.key === " " && X.preventDefault(), v && v(X), X.target === X.currentTarget && It() && X.key === "Enter" && !u && (X.preventDefault(), x && x(X));
  }), ct = ur((X) => {
    p && X.key === " " && R.current && Z && !X.defaultPrevented && (Pe.current = !1, R.current.stop(X, () => {
      R.current.pulsate(X);
    })), E && E(X), x && X.target === X.currentTarget && It() && X.key === " " && !X.defaultPrevented && x(X);
  });
  let be = a;
  be === "button" && (j.href || j.to) && (be = C);
  const en = {};
  be === "button" ? (en.type = z === void 0 ? "button" : z, en.disabled = u) : (!j.href && !j.to && (en.role = "button"), u && (en["aria-disabled"] = u));
  const _n = qe(n, fe, B), pn = g({}, r, {
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: p,
    tabIndex: L,
    focusVisible: Z
  }), ve = jb(pn);
  return /* @__PURE__ */ w.jsxs(Db, g({
    as: be,
    className: K(ve.root, l),
    ownerState: pn,
    onBlur: _t,
    onClick: x,
    onContextMenu: q,
    onFocus: Ht,
    onKeyDown: fn,
    onKeyUp: ct,
    onMouseDown: G,
    onMouseLeave: le,
    onMouseUp: te,
    onDragLeave: pe,
    onTouchEnd: Tn,
    onTouchMove: Tt,
    onTouchStart: we,
    ref: _n,
    tabIndex: u ? -1 : L,
    type: z
  }, en, j, {
    children: [s, je ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ w.jsx(Ob, g({
        ref: A,
        center: i
      }, I))
    ) : null]
  }));
}), Ai = Bb;
function Wb(e) {
  return ne("MuiAlert", e);
}
const Ub = J("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), _p = Ub;
function Hb(e) {
  return ne("MuiIconButton", e);
}
const Vb = J("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Kb = Vb, Gb = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Yb = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${H(r)}`, o && `edge${H(o)}`, `size${H(i)}`]
  };
  return re(s, Hb, t);
}, Qb = W(Ai, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${H(n.color)}`], n.edge && t[`edge${H(n.edge)}`], t[`size${H(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return g({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && g({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": g({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Kb.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Xb = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    size: c = "medium"
  } = r, d = U(r, Gb), p = g({}, r, {
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    size: c
  }), C = Yb(p);
  return /* @__PURE__ */ w.jsx(Qb, g({
    className: K(C.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: a,
    ref: n
  }, d, {
    ownerState: p,
    children: i
  }));
}), vv = Xb, qb = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Zb = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), Jb = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), ek = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), tk = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), nk = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], rk = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${H(n || r)}`, `${t}${H(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return re(i, Wb, o);
}, ok = W(fo, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${H(n.color || n.severity)}`]];
  }
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? tl : nl, n = e.palette.mode === "light" ? nl : tl;
  return g({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(([, r]) => r.main && r.light).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${_p.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(([, r]) => r.main && r.light).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${_p.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(([, r]) => r.main && r.dark).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: g({
        fontWeight: e.typography.fontWeightMedium
      }, e.vars ? {
        color: e.vars.palette.Alert[`${r}FilledColor`],
        backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
      } : {
        backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
        color: e.palette.getContrastText(e.palette[r].main)
      })
    }))]
  });
}), ik = W("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), sk = W("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), Ip = W("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Mp = {
  success: /* @__PURE__ */ w.jsx(qb, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ w.jsx(Zb, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ w.jsx(Jb, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ w.jsx(ek, {
    fontSize: "inherit"
  })
}, lk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    components: u = {},
    componentsProps: c = {},
    icon: d,
    iconMapping: p = Mp,
    onClose: C,
    role: S = "alert",
    severity: x = "success",
    slotProps: P = {},
    slots: h = {},
    variant: f = "standard"
  } = r, m = U(r, nk), v = g({}, r, {
    color: a,
    severity: x,
    variant: f,
    colorSeverity: a || x
  }), E = rk(v), b = {
    slots: g({
      closeButton: u.CloseButton,
      closeIcon: u.CloseIcon
    }, h),
    slotProps: g({}, c, P)
  }, [k, $] = Ep("closeButton", {
    elementType: vv,
    externalForwardedProps: b,
    ownerState: v
  }), [M, T] = Ep("closeIcon", {
    elementType: tk,
    externalForwardedProps: b,
    ownerState: v
  });
  return /* @__PURE__ */ w.jsxs(ok, g({
    role: S,
    elevation: 0,
    ownerState: v,
    className: K(E.root, s),
    ref: n
  }, m, {
    children: [d !== !1 ? /* @__PURE__ */ w.jsx(ik, {
      ownerState: v,
      className: E.icon,
      children: d || p[x] || Mp[x]
    }) : null, /* @__PURE__ */ w.jsx(sk, {
      ownerState: v,
      className: E.message,
      children: i
    }), o != null ? /* @__PURE__ */ w.jsx(Ip, {
      ownerState: v,
      className: E.action,
      children: o
    }) : null, o == null && C ? /* @__PURE__ */ w.jsx(Ip, {
      ownerState: v,
      className: E.action,
      children: /* @__PURE__ */ w.jsx(k, g({
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: C
      }, $, {
        children: /* @__PURE__ */ w.jsx(M, g({
          fontSize: "small"
        }, T))
      }))
    }) : null]
  }));
}), ak = lk;
function uk(e) {
  return ne("MuiTypography", e);
}
J("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const ck = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], dk = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${H(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return re(l, uk, s);
}, fk = W("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${H(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Np = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, pk = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, mk = (e) => pk[e] || e, hk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiTypography"
  }), o = mk(r.color), i = Kl(g({}, r, {
    color: o
  })), {
    align: s = "inherit",
    className: l,
    component: a,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: d = !1,
    variant: p = "body1",
    variantMapping: C = Np
  } = i, S = U(i, ck), x = g({}, i, {
    align: s,
    color: o,
    className: l,
    component: a,
    gutterBottom: u,
    noWrap: c,
    paragraph: d,
    variant: p,
    variantMapping: C
  }), P = a || (d ? "p" : C[p] || Np[p]) || "span", h = dk(x);
  return /* @__PURE__ */ w.jsx(fk, g({
    as: P,
    ref: n,
    ownerState: x,
    className: K(h.root, l)
  }, S));
}), Ct = hk;
function gk(e) {
  return ne("MuiAlertTitle", e);
}
J("MuiAlertTitle", ["root"]);
const vk = ["className"], yk = (e) => {
  const {
    classes: t
  } = e;
  return re({
    root: ["root"]
  }, gk, t);
}, xk = W(Ct, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), Sk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: o
  } = r, i = U(r, vk), s = r, l = yk(s);
  return /* @__PURE__ */ w.jsx(xk, g({
    gutterBottom: !0,
    component: "div",
    ownerState: s,
    ref: n,
    className: K(l.root, o)
  }, i));
}), Ck = Sk;
function wk(e) {
  return typeof e == "function" ? e() : e;
}
const bk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = y.useState(null), a = qe(/* @__PURE__ */ y.isValidElement(r) ? Li(r) : null, n);
  if (cn(() => {
    i || l(wk(o) || document.body);
  }, [o, i]), cn(() => {
    if (s && !i)
      return Zu(n, s), () => {
        Zu(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ y.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ y.cloneElement(r, u);
    }
    return /* @__PURE__ */ w.jsx(y.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ w.jsx(y.Fragment, {
    children: s && /* @__PURE__ */ td.createPortal(r, s)
  });
}), kk = bk, Ek = ["onChange", "maxRows", "minRows", "style", "value"];
function is(e) {
  return parseInt(e, 10) || 0;
}
const Pk = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function $k(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Op(e) {
  return $k(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Rk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l
  } = t, a = U(t, Ek), {
    current: u
  } = y.useRef(l != null), c = y.useRef(null), d = qe(n, c), p = y.useRef(null), C = y.useRef(null), S = y.useCallback(() => {
    const m = c.current, v = C.current;
    if (!m || !v)
      return;
    const b = Sr(m).getComputedStyle(m);
    if (b.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    v.style.width = b.width, v.value = m.value || t.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
    const k = b.boxSizing, $ = is(b.paddingBottom) + is(b.paddingTop), M = is(b.borderBottomWidth) + is(b.borderTopWidth), T = v.scrollHeight;
    v.value = "x";
    const F = v.scrollHeight;
    let L = T;
    i && (L = Math.max(Number(i) * F, L)), o && (L = Math.min(Number(o) * F, L)), L = Math.max(L, F);
    const I = L + (k === "border-box" ? $ + M : 0), N = Math.abs(L - T) <= 1;
    return {
      outerHeightStyle: I,
      overflowing: N
    };
  }, [o, i, t.placeholder]), x = ur(() => {
    const m = c.current, v = S();
    if (!m || !v || Op(v))
      return !1;
    const E = v.outerHeightStyle;
    return p.current != null && p.current !== E;
  }), P = y.useCallback(() => {
    const m = c.current, v = S();
    if (!m || !v || Op(v))
      return;
    const E = v.outerHeightStyle;
    p.current !== E && (p.current = E, m.style.height = `${E}px`), m.style.overflow = v.overflowing ? "hidden" : "";
  }, [S]), h = y.useRef(-1);
  cn(() => {
    const m = Kg(P), v = c == null ? void 0 : c.current;
    if (!v)
      return;
    const E = Sr(v);
    E.addEventListener("resize", m);
    let b;
    return typeof ResizeObserver < "u" && (b = new ResizeObserver(() => {
      x() && (b.unobserve(v), cancelAnimationFrame(h.current), P(), h.current = requestAnimationFrame(() => {
        b.observe(v);
      }));
    }), b.observe(v)), () => {
      m.clear(), cancelAnimationFrame(h.current), E.removeEventListener("resize", m), b && b.disconnect();
    };
  }, [S, P, x]), cn(() => {
    P();
  });
  const f = (m) => {
    u || P(), r && r(m);
  };
  return /* @__PURE__ */ w.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ w.jsx("textarea", g({
      value: l,
      onChange: f,
      ref: d,
      rows: i,
      style: s
    }, a)), /* @__PURE__ */ w.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: C,
      tabIndex: -1,
      style: g({}, Pk.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
}), Tk = Rk;
function Jn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const _k = /* @__PURE__ */ y.createContext(void 0), la = _k;
function dn() {
  return y.useContext(la);
}
function Ik(e) {
  return /* @__PURE__ */ w.jsx(Fg, g({}, e, {
    defaultTheme: Pd,
    themeId: lo
  }));
}
function Lp(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ll(e, t = !1) {
  return e && (Lp(e.value) && e.value !== "" || t && Lp(e.defaultValue) && e.defaultValue !== "");
}
function Mk(e) {
  return e.startAdornment;
}
function Nk(e) {
  return ne("MuiInputBase", e);
}
const Ok = J("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), po = Ok, Lk = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], aa = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${H(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ua = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, zk = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: l,
    fullWidth: a,
    hiddenLabel: u,
    multiline: c,
    readOnly: d,
    size: p,
    startAdornment: C,
    type: S
  } = e, x = {
    root: ["root", `color${H(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", p && p !== "medium" && `size${H(p)}`, c && "multiline", C && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", S === "search" && "inputTypeSearch", c && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", C && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"]
  };
  return re(x, Nk, t);
}, ca = W("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: aa
})(({
  theme: e,
  ownerState: t
}) => g({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${po.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && g({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), da = W("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ua
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = g({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return g({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${po.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${po.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Ak = /* @__PURE__ */ w.jsx(Ik, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), Fk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r;
  const o = oe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: l,
    className: a,
    components: u = {},
    componentsProps: c = {},
    defaultValue: d,
    disabled: p,
    disableInjectingGlobalStyles: C,
    endAdornment: S,
    fullWidth: x = !1,
    id: P,
    inputComponent: h = "input",
    inputProps: f = {},
    inputRef: m,
    maxRows: v,
    minRows: E,
    multiline: b = !1,
    name: k,
    onBlur: $,
    onChange: M,
    onClick: T,
    onFocus: F,
    onKeyDown: L,
    onKeyUp: I,
    placeholder: N,
    readOnly: z,
    renderSuffix: j,
    rows: B,
    slotProps: R = {},
    slots: A = {},
    startAdornment: D,
    type: Y = "text",
    value: ee
  } = o, fe = U(o, Lk), Z = f.value != null ? f.value : ee, {
    current: ue
  } = y.useRef(Z != null), se = y.useRef(), Ne = y.useCallback((ve) => {
  }, []), je = qe(se, m, f.ref, Ne), [_, G] = y.useState(!1), q = dn(), pe = Jn({
    props: o,
    muiFormControl: q,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  pe.focused = q ? q.focused : _, y.useEffect(() => {
    !q && p && _ && (G(!1), $ && $());
  }, [q, p, _, $]);
  const te = q && q.onFilled, le = q && q.onEmpty, we = y.useCallback((ve) => {
    ll(ve) ? te && te() : le && le();
  }, [te, le]);
  cn(() => {
    ue && we({
      value: Z
    });
  }, [Z, we, ue]);
  const Tn = (ve) => {
    if (pe.disabled) {
      ve.stopPropagation();
      return;
    }
    F && F(ve), f.onFocus && f.onFocus(ve), q && q.onFocus ? q.onFocus(ve) : G(!0);
  }, Tt = (ve) => {
    $ && $(ve), f.onBlur && f.onBlur(ve), q && q.onBlur ? q.onBlur(ve) : G(!1);
  }, _t = (ve, ...X) => {
    if (!ue) {
      const mn = ve.target || se.current;
      if (mn == null)
        throw new Error(yr(1));
      we({
        value: mn.value
      });
    }
    f.onChange && f.onChange(ve, ...X), M && M(ve, ...X);
  };
  y.useEffect(() => {
    we(se.current);
  }, []);
  const Ht = (ve) => {
    se.current && ve.currentTarget === ve.target && se.current.focus(), T && T(ve);
  };
  let It = h, Pe = f;
  b && It === "input" && (B ? Pe = g({
    type: void 0,
    minRows: B,
    maxRows: B
  }, Pe) : Pe = g({
    type: void 0,
    maxRows: v,
    minRows: E
  }, Pe), It = Tk);
  const fn = (ve) => {
    we(ve.animationName === "mui-auto-fill-cancel" ? se.current : {
      value: "x"
    });
  };
  y.useEffect(() => {
    q && q.setAdornedStart(!!D);
  }, [q, D]);
  const ct = g({}, o, {
    color: pe.color || "primary",
    disabled: pe.disabled,
    endAdornment: S,
    error: pe.error,
    focused: pe.focused,
    formControl: q,
    fullWidth: x,
    hiddenLabel: pe.hiddenLabel,
    multiline: b,
    size: pe.size,
    startAdornment: D,
    type: Y
  }), be = zk(ct), en = A.root || u.Root || ca, _n = R.root || c.root || {}, pn = A.input || u.Input || da;
  return Pe = g({}, Pe, (r = R.input) != null ? r : c.input), /* @__PURE__ */ w.jsxs(y.Fragment, {
    children: [!C && Ak, /* @__PURE__ */ w.jsxs(en, g({}, _n, !uo(en) && {
      ownerState: g({}, ct, _n.ownerState)
    }, {
      ref: n,
      onClick: Ht
    }, fe, {
      className: K(be.root, _n.className, a, z && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ w.jsx(la.Provider, {
        value: null,
        children: /* @__PURE__ */ w.jsx(pn, g({
          ownerState: ct,
          "aria-invalid": pe.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: pe.disabled,
          id: P,
          onAnimationStart: fn,
          name: k,
          placeholder: N,
          readOnly: z,
          required: pe.required,
          rows: B,
          value: Z,
          onKeyDown: L,
          onKeyUp: I,
          type: Y
        }, Pe, !uo(pn) && {
          as: It,
          ownerState: g({}, ct, Pe.ownerState)
        }, {
          ref: je,
          className: K(be.input, Pe.className, z && "MuiInputBase-readOnly"),
          onBlur: Tt,
          onChange: _t,
          onFocus: Tn
        }))
      }), S, j ? j(g({}, pe, {
        startAdornment: D
      })) : null]
    }))]
  });
}), _d = Fk;
function jk(e) {
  return ne("MuiInput", e);
}
const Dk = g({}, po, J("MuiInput", ["root", "underline", "input"])), Lo = Dk;
function Bk(e) {
  return ne("MuiOutlinedInput", e);
}
const Wk = g({}, po, J("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Mn = Wk;
function Uk(e) {
  return ne("MuiFilledInput", e);
}
const Hk = g({}, po, J("MuiFilledInput", ["root", "underline", "input"])), er = Hk, Vk = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Kk = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Gk = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Yk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = $d(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: a,
    in: u,
    onEnter: c,
    onEntered: d,
    onEntering: p,
    onExit: C,
    onExited: S,
    onExiting: x,
    style: P,
    timeout: h = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = hv
  } = t, m = U(t, Kk), v = y.useRef(null), E = qe(v, Li(l), n), b = (N) => (z) => {
    if (N) {
      const j = v.current;
      z === void 0 ? N(j) : N(j, z);
    }
  }, k = b(p), $ = b((N, z) => {
    gv(N);
    const j = sl({
      style: P,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = r.transitions.create("opacity", j), N.style.transition = r.transitions.create("opacity", j), c && c(N, z);
  }), M = b(d), T = b(x), F = b((N) => {
    const z = sl({
      style: P,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = r.transitions.create("opacity", z), N.style.transition = r.transitions.create("opacity", z), C && C(N);
  }), L = b(S), I = (N) => {
    i && i(v.current, N);
  };
  return /* @__PURE__ */ w.jsx(f, g({
    appear: s,
    in: u,
    nodeRef: v,
    onEnter: $,
    onEntered: M,
    onEntering: k,
    onExit: F,
    onExited: L,
    onExiting: T,
    addEndListener: I,
    timeout: h
  }, m, {
    children: (N, z) => /* @__PURE__ */ y.cloneElement(l, g({
      style: g({
        opacity: 0,
        visibility: N === "exited" && !u ? "hidden" : void 0
      }, Gk[N], P, l.props.style),
      ref: E
    }, z))
  }));
}), yv = Yk;
function Qk(e) {
  return ne("MuiBackdrop", e);
}
J("MuiBackdrop", ["root", "invisible"]);
const Xk = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], qk = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return re({
    root: ["root", n && "invisible"]
  }, Qk, t);
}, Zk = W("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => g({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Jk = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o, i;
  const s = oe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: a,
    component: u = "div",
    components: c = {},
    componentsProps: d = {},
    invisible: p = !1,
    open: C,
    slotProps: S = {},
    slots: x = {},
    TransitionComponent: P = yv,
    transitionDuration: h
  } = s, f = U(s, Xk), m = g({}, s, {
    component: u,
    invisible: p
  }), v = qk(m), E = (r = S.root) != null ? r : d.root;
  return /* @__PURE__ */ w.jsx(P, g({
    in: C,
    timeout: h
  }, f, {
    children: /* @__PURE__ */ w.jsx(Zk, g({
      "aria-hidden": !0
    }, E, {
      as: (o = (i = x.root) != null ? i : c.Root) != null ? o : u,
      className: K(v.root, a, E == null ? void 0 : E.className),
      ownerState: g({}, m, E == null ? void 0 : E.ownerState),
      classes: v,
      ref: n,
      children: l
    }))
  }));
}), xv = Jk, e2 = J("MuiBox", ["root"]), t2 = e2, n2 = Ed(), r2 = jS({
  themeId: lo,
  defaultTheme: n2,
  defaultClassName: t2.root,
  generateClassName: jg.generate
}), Kt = r2;
function o2(e) {
  return ne("MuiButton", e);
}
const i2 = J("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ss = i2, s2 = /* @__PURE__ */ y.createContext({}), l2 = s2, a2 = /* @__PURE__ */ y.createContext(void 0), u2 = a2, c2 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], d2 = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, `${i}${H(t)}`, `size${H(o)}`, `${i}Size${H(o)}`, `color${H(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${H(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${H(o)}`]
  }, a = re(l, o2, s);
  return g({}, s, a);
}, Sv = (e) => g({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), f2 = W(Ai, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${H(n.color)}`], t[`size${H(n.size)}`], t[`${n.variant}Size${H(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return g({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": g({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": g({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${ss.focusVisible}`]: g({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${ss.disabled}`]: g({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${We(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${ss.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${ss.disabled}`]: {
    boxShadow: "none"
  }
}), p2 = W("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${H(n.size)}`]];
  }
})(({
  ownerState: e
}) => g({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Sv(e))), m2 = W("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${H(n.size)}`]];
  }
})(({
  ownerState: e
}) => g({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Sv(e))), h2 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = y.useContext(l2), o = y.useContext(u2), i = ki(r, t), s = oe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: p = !1,
    disableFocusRipple: C = !1,
    endIcon: S,
    focusVisibleClassName: x,
    fullWidth: P = !1,
    size: h = "medium",
    startIcon: f,
    type: m,
    variant: v = "text"
  } = s, E = U(s, c2), b = g({}, s, {
    color: a,
    component: u,
    disabled: d,
    disableElevation: p,
    disableFocusRipple: C,
    fullWidth: P,
    size: h,
    type: m,
    variant: v
  }), k = d2(b), $ = f && /* @__PURE__ */ w.jsx(p2, {
    className: k.startIcon,
    ownerState: b,
    children: f
  }), M = S && /* @__PURE__ */ w.jsx(m2, {
    className: k.endIcon,
    ownerState: b,
    children: S
  }), T = o || "";
  return /* @__PURE__ */ w.jsxs(f2, g({
    ownerState: b,
    className: K(r.className, k.root, c, T),
    component: u,
    disabled: d,
    focusRipple: !C,
    focusVisibleClassName: K(k.focusVisible, x),
    ref: n,
    type: m
  }, E, {
    classes: k,
    children: [$, l, M]
  }));
}), tr = h2;
function g2(e) {
  return ne("PrivateSwitchBase", e);
}
J("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const v2 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], y2 = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${H(o)}`],
    input: ["input"]
  };
  return re(i, g2, t);
}, x2 = W(Ai, {
  name: "MuiSwitchBase"
})(({
  ownerState: e
}) => g({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), S2 = W("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: vt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), C2 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: i,
    className: s,
    defaultChecked: l,
    disabled: a,
    disableFocusRipple: u = !1,
    edge: c = !1,
    icon: d,
    id: p,
    inputProps: C,
    inputRef: S,
    name: x,
    onBlur: P,
    onChange: h,
    onFocus: f,
    readOnly: m,
    required: v = !1,
    tabIndex: E,
    type: b,
    value: k
  } = t, $ = U(t, v2), [M, T] = Ju({
    controlled: o,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), F = dn(), L = (A) => {
    f && f(A), F && F.onFocus && F.onFocus(A);
  }, I = (A) => {
    P && P(A), F && F.onBlur && F.onBlur(A);
  }, N = (A) => {
    if (A.nativeEvent.defaultPrevented)
      return;
    const D = A.target.checked;
    T(D), h && h(A, D);
  };
  let z = a;
  F && typeof z > "u" && (z = F.disabled);
  const j = b === "checkbox" || b === "radio", B = g({}, t, {
    checked: M,
    disabled: z,
    disableFocusRipple: u,
    edge: c
  }), R = y2(B);
  return /* @__PURE__ */ w.jsxs(x2, g({
    component: "span",
    className: K(R.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: z,
    tabIndex: null,
    role: void 0,
    onFocus: L,
    onBlur: I,
    ownerState: B,
    ref: n
  }, $, {
    children: [/* @__PURE__ */ w.jsx(S2, g({
      autoFocus: r,
      checked: o,
      defaultChecked: l,
      className: R.input,
      disabled: z,
      id: j ? p : void 0,
      name: x,
      onChange: N,
      readOnly: m,
      ref: S,
      required: v,
      ownerState: B,
      tabIndex: E,
      type: b
    }, b === "checkbox" && k === void 0 ? {} : {
      value: k
    }, C)), M ? i : d]
  }));
}), Cv = C2, w2 = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), b2 = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), k2 = $n(/* @__PURE__ */ w.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function E2(e) {
  return ne("MuiCheckbox", e);
}
const P2 = J("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Ka = P2, $2 = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], R2 = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: o
  } = e, i = {
    root: ["root", n && "indeterminate", `color${H(r)}`, `size${H(o)}`]
  }, s = re(i, E2, t);
  return g({}, t, s);
}, T2 = W(Cv, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${H(n.size)}`], n.color !== "default" && t[`color${H(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  color: (e.vars || e).palette.text.secondary
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${t.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(t.color === "default" ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.color !== "default" && {
  [`&.${Ka.checked}, &.${Ka.indeterminate}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Ka.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), _2 = /* @__PURE__ */ w.jsx(b2, {}), I2 = /* @__PURE__ */ w.jsx(w2, {}), M2 = /* @__PURE__ */ w.jsx(k2, {}), N2 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o;
  const i = oe({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: s = _2,
    color: l = "primary",
    icon: a = I2,
    indeterminate: u = !1,
    indeterminateIcon: c = M2,
    inputProps: d,
    size: p = "medium",
    className: C
  } = i, S = U(i, $2), x = u ? c : a, P = u ? c : s, h = g({}, i, {
    color: l,
    indeterminate: u,
    size: p
  }), f = R2(h);
  return /* @__PURE__ */ w.jsx(T2, g({
    type: "checkbox",
    inputProps: g({
      "data-indeterminate": u
    }, d),
    icon: /* @__PURE__ */ y.cloneElement(x, {
      fontSize: (r = x.props.fontSize) != null ? r : p
    }),
    checkedIcon: /* @__PURE__ */ y.cloneElement(P, {
      fontSize: (o = P.props.fontSize) != null ? o : p
    }),
    ownerState: h,
    ref: n,
    className: K(f.root, C)
  }, S, {
    classes: f
  }));
}), O2 = N2, L2 = AC({
  createStyledComponent: W("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${H(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => oe({
    props: e,
    name: "MuiContainer"
  })
}), z2 = L2;
function A2(e) {
  const t = kt(e);
  return t.body === e ? Sr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ti(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function zp(e) {
  return parseInt(Sr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function F2(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Ap(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, a = !F2(s);
    l && a && ti(s, o);
  });
}
function Ga(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function j2(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (A2(r)) {
      const s = Yg(kt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${zp(r) + s}px`;
      const l = kt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${zp(a) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = kt(r).body;
    else {
      const s = r.parentElement, l = Sr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function D2(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class B2 {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ti(t.modalRef, !1);
    const o = D2(n);
    Ap(n, t.mount, t.modalRef, o, !0);
    const i = Ga(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Ga(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = j2(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Ga(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ti(t.modalRef, n), Ap(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ti(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const W2 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function U2(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function H2(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function V2(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || H2(e));
}
function K2(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(W2)).forEach((r, o) => {
    const i = U2(r);
    i === -1 || !V2(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function G2() {
  return !0;
}
function Y2(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = K2,
    isEnabled: s = G2,
    open: l
  } = e, a = y.useRef(!1), u = y.useRef(null), c = y.useRef(null), d = y.useRef(null), p = y.useRef(null), C = y.useRef(!1), S = y.useRef(null), x = qe(Li(t), S), P = y.useRef(null);
  y.useEffect(() => {
    !l || !S.current || (C.current = !n);
  }, [n, l]), y.useEffect(() => {
    if (!l || !S.current)
      return;
    const m = kt(S.current);
    return S.current.contains(m.activeElement) || (S.current.hasAttribute("tabIndex") || S.current.setAttribute("tabIndex", "-1"), C.current && S.current.focus()), () => {
      o || (d.current && d.current.focus && (a.current = !0, d.current.focus()), d.current = null);
    };
  }, [l]), y.useEffect(() => {
    if (!l || !S.current)
      return;
    const m = kt(S.current), v = (k) => {
      P.current = k, !(r || !s() || k.key !== "Tab") && m.activeElement === S.current && k.shiftKey && (a.current = !0, c.current && c.current.focus());
    }, E = () => {
      const k = S.current;
      if (k === null)
        return;
      if (!m.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (k.contains(m.activeElement) || r && m.activeElement !== u.current && m.activeElement !== c.current)
        return;
      if (m.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!C.current)
        return;
      let $ = [];
      if ((m.activeElement === u.current || m.activeElement === c.current) && ($ = i(S.current)), $.length > 0) {
        var M, T;
        const F = !!((M = P.current) != null && M.shiftKey && ((T = P.current) == null ? void 0 : T.key) === "Tab"), L = $[0], I = $[$.length - 1];
        typeof L != "string" && typeof I != "string" && (F ? I.focus() : L.focus());
      } else
        k.focus();
    };
    m.addEventListener("focusin", E), m.addEventListener("keydown", v, !0);
    const b = setInterval(() => {
      m.activeElement && m.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(b), m.removeEventListener("focusin", E), m.removeEventListener("keydown", v, !0);
    };
  }, [n, r, o, s, l, i]);
  const h = (m) => {
    d.current === null && (d.current = m.relatedTarget), C.current = !0, p.current = m.target;
    const v = t.props.onFocus;
    v && v(m);
  }, f = (m) => {
    d.current === null && (d.current = m.relatedTarget), C.current = !0;
  };
  return /* @__PURE__ */ w.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: f,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ y.cloneElement(t, {
      ref: x,
      onFocus: h
    }), /* @__PURE__ */ w.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: f,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function Q2(e) {
  return typeof e == "function" ? e() : e;
}
function X2(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const q2 = new B2();
function Z2(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = q2,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: l,
    children: a,
    onClose: u,
    open: c,
    rootRef: d
  } = e, p = y.useRef({}), C = y.useRef(null), S = y.useRef(null), x = qe(S, d), [P, h] = y.useState(!c), f = X2(a);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const v = () => kt(C.current), E = () => (p.current.modalRef = S.current, p.current.mount = C.current, p.current), b = () => {
    o.mount(E(), {
      disableScrollLock: r
    }), S.current && (S.current.scrollTop = 0);
  }, k = ur(() => {
    const j = Q2(t) || v().body;
    o.add(E(), j), S.current && b();
  }), $ = y.useCallback(() => o.isTopModal(E()), [o]), M = ur((j) => {
    C.current = j, j && (c && $() ? b() : S.current && ti(S.current, m));
  }), T = y.useCallback(() => {
    o.remove(E(), m);
  }, [m, o]);
  y.useEffect(() => () => {
    T();
  }, [T]), y.useEffect(() => {
    c ? k() : (!f || !i) && T();
  }, [c, T, f, i, k]);
  const F = (j) => (B) => {
    var R;
    (R = j.onKeyDown) == null || R.call(j, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !$()) && (n || (B.stopPropagation(), u && u(B, "escapeKeyDown")));
  }, L = (j) => (B) => {
    var R;
    (R = j.onClick) == null || R.call(j, B), B.target === B.currentTarget && u && u(B, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const B = Xg(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const R = g({}, B, j);
      return g({
        role: "presentation"
      }, R, {
        onKeyDown: F(R),
        ref: x
      });
    },
    getBackdropProps: (j = {}) => {
      const B = j;
      return g({
        "aria-hidden": !0
      }, B, {
        onClick: L(B),
        open: c
      });
    },
    getTransitionProps: () => {
      const j = () => {
        h(!1), s && s();
      }, B = () => {
        h(!0), l && l(), i && T();
      };
      return {
        onEnter: lp(j, a == null ? void 0 : a.props.onEnter),
        onExited: lp(B, a == null ? void 0 : a.props.onExited)
      };
    },
    rootRef: x,
    portalRef: M,
    isTopModal: $,
    exited: P,
    hasTransition: f
  };
}
function J2(e) {
  return ne("MuiModal", e);
}
J("MuiModal", ["root", "hidden", "backdrop"]);
const eE = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], tE = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return re({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, J2, r);
}, nE = W("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), rE = W(xv, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), oE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o, i, s, l, a;
  const u = oe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: c = rE,
    BackdropProps: d,
    className: p,
    closeAfterTransition: C = !1,
    children: S,
    container: x,
    component: P,
    components: h = {},
    componentsProps: f = {},
    disableAutoFocus: m = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: b = !1,
    disableRestoreFocus: k = !1,
    disableScrollLock: $ = !1,
    hideBackdrop: M = !1,
    keepMounted: T = !1,
    onBackdropClick: F,
    open: L,
    slotProps: I,
    slots: N
    // eslint-disable-next-line react/prop-types
  } = u, z = U(u, eE), j = g({}, u, {
    closeAfterTransition: C,
    disableAutoFocus: m,
    disableEnforceFocus: v,
    disableEscapeKeyDown: E,
    disablePortal: b,
    disableRestoreFocus: k,
    disableScrollLock: $,
    hideBackdrop: M,
    keepMounted: T
  }), {
    getRootProps: B,
    getBackdropProps: R,
    getTransitionProps: A,
    portalRef: D,
    isTopModal: Y,
    exited: ee,
    hasTransition: fe
  } = Z2(g({}, j, {
    rootRef: n
  })), Z = g({}, j, {
    exited: ee
  }), ue = tE(Z), se = {};
  if (S.props.tabIndex === void 0 && (se.tabIndex = "-1"), fe) {
    const {
      onEnter: te,
      onExited: le
    } = A();
    se.onEnter = te, se.onExited = le;
  }
  const Ne = (r = (o = N == null ? void 0 : N.root) != null ? o : h.Root) != null ? r : nE, je = (i = (s = N == null ? void 0 : N.backdrop) != null ? s : h.Backdrop) != null ? i : c, _ = (l = I == null ? void 0 : I.root) != null ? l : f.root, G = (a = I == null ? void 0 : I.backdrop) != null ? a : f.backdrop, q = co({
    elementType: Ne,
    externalSlotProps: _,
    externalForwardedProps: z,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: P
    },
    ownerState: Z,
    className: K(p, _ == null ? void 0 : _.className, ue == null ? void 0 : ue.root, !Z.open && Z.exited && (ue == null ? void 0 : ue.hidden))
  }), pe = co({
    elementType: je,
    externalSlotProps: G,
    additionalProps: d,
    getSlotProps: (te) => R(g({}, te, {
      onClick: (le) => {
        F && F(le), te != null && te.onClick && te.onClick(le);
      }
    })),
    className: K(G == null ? void 0 : G.className, d == null ? void 0 : d.className, ue == null ? void 0 : ue.backdrop),
    ownerState: Z
  });
  return !T && !L && (!fe || ee) ? null : /* @__PURE__ */ w.jsx(kk, {
    ref: D,
    container: x,
    disablePortal: b,
    children: /* @__PURE__ */ w.jsxs(Ne, g({}, q, {
      children: [!M && c ? /* @__PURE__ */ w.jsx(je, g({}, pe)) : null, /* @__PURE__ */ w.jsx(Y2, {
        disableEnforceFocus: v,
        disableAutoFocus: m,
        disableRestoreFocus: k,
        isEnabled: Y,
        open: L,
        children: /* @__PURE__ */ y.cloneElement(S, se)
      })]
    }))
  });
}), wv = oE;
function iE(e) {
  return ne("MuiDialog", e);
}
const sE = J("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ya = sE, lE = /* @__PURE__ */ y.createContext({}), bv = lE, aE = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], uE = W(xv, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), cE = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${H(n)}`],
    paper: ["paper", `paperScroll${H(n)}`, `paperWidth${H(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return re(s, iE, t);
}, dE = W(wv, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), fE = W("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${H(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => g({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), pE = W(fo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${H(n.scroll)}`], t[`paperWidth${H(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${Ya.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Ya.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Ya.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), mE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiDialog"
  }), o = $d(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    BackdropComponent: a,
    BackdropProps: u,
    children: c,
    className: d,
    disableEscapeKeyDown: p = !1,
    fullScreen: C = !1,
    fullWidth: S = !1,
    maxWidth: x = "sm",
    onBackdropClick: P,
    onClick: h,
    onClose: f,
    open: m,
    PaperComponent: v = fo,
    PaperProps: E = {},
    scroll: b = "paper",
    TransitionComponent: k = yv,
    transitionDuration: $ = i,
    TransitionProps: M
  } = r, T = U(r, aE), F = g({}, r, {
    disableEscapeKeyDown: p,
    fullScreen: C,
    fullWidth: S,
    maxWidth: x,
    scroll: b
  }), L = cE(F), I = y.useRef(), N = (R) => {
    I.current = R.target === R.currentTarget;
  }, z = (R) => {
    h && h(R), I.current && (I.current = null, P && P(R), f && f(R, "backdropClick"));
  }, j = ra(l), B = y.useMemo(() => ({
    titleId: j
  }), [j]);
  return /* @__PURE__ */ w.jsx(dE, g({
    className: K(L.root, d),
    closeAfterTransition: !0,
    components: {
      Backdrop: uE
    },
    componentsProps: {
      backdrop: g({
        transitionDuration: $,
        as: a
      }, u)
    },
    disableEscapeKeyDown: p,
    onClose: f,
    open: m,
    ref: n,
    onClick: z,
    ownerState: F
  }, T, {
    children: /* @__PURE__ */ w.jsx(k, g({
      appear: !0,
      in: m,
      timeout: $,
      role: "presentation"
    }, M, {
      children: /* @__PURE__ */ w.jsx(fE, {
        className: K(L.container),
        onMouseDown: N,
        ownerState: F,
        children: /* @__PURE__ */ w.jsx(pE, g({
          as: v,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": j
        }, E, {
          className: K(L.paper, E.className),
          ownerState: F,
          children: /* @__PURE__ */ w.jsx(bv.Provider, {
            value: B,
            children: c
          })
        }))
      })
    }))
  }));
}), hE = mE;
function gE(e) {
  return ne("MuiDialogActions", e);
}
J("MuiDialogActions", ["root", "spacing"]);
const vE = ["className", "disableSpacing"], yE = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return re({
    root: ["root", !n && "spacing"]
  }, gE, t);
}, xE = W("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => g({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), SE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1
  } = r, s = U(r, vE), l = g({}, r, {
    disableSpacing: i
  }), a = yE(l);
  return /* @__PURE__ */ w.jsx(xE, g({
    className: K(a.root, o),
    ownerState: l,
    ref: n
  }, s));
}), CE = SE;
function wE(e) {
  return ne("MuiDialogContent", e);
}
J("MuiDialogContent", ["root", "dividers"]);
function bE(e) {
  return ne("MuiDialogTitle", e);
}
const kE = J("MuiDialogTitle", ["root"]), EE = kE, PE = ["className", "dividers"], $E = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return re({
    root: ["root", n && "dividers"]
  }, wE, t);
}, RE = W("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${EE.root} + &`]: {
    paddingTop: 0
  }
})), TE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1
  } = r, s = U(r, PE), l = g({}, r, {
    dividers: i
  }), a = $E(l);
  return /* @__PURE__ */ w.jsx(RE, g({
    className: K(a.root, o),
    ownerState: l,
    ref: n
  }, s));
}), _E = TE, IE = ["className", "id"], ME = (e) => {
  const {
    classes: t
  } = e;
  return re({
    root: ["root"]
  }, bE, t);
}, NE = W(Ct, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), OE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i
  } = r, s = U(r, IE), l = r, a = ME(l), {
    titleId: u = i
  } = y.useContext(bv);
  return /* @__PURE__ */ w.jsx(NE, g({
    component: "h2",
    className: K(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u
  }, s));
}), LE = OE, zE = J("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Fp = zE, AE = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], FE = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = re({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Uk, t);
  return g({}, t, o);
}, jE = W(ca, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...aa(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return g({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${er.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${er.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${er.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${er.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${er.disabled}, .${er.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${er.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && g({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), DE = W(da, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ua
})(({
  theme: e,
  ownerState: t
}) => g({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), kv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o, i, s;
  const l = oe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: a = {},
    componentsProps: u,
    fullWidth: c = !1,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: p = !1,
    slotProps: C,
    slots: S = {},
    type: x = "text"
  } = l, P = U(l, AE), h = g({}, l, {
    fullWidth: c,
    inputComponent: d,
    multiline: p,
    type: x
  }), f = FE(l), m = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, v = C ?? u ? lt(m, C ?? u) : m, E = (r = (o = S.root) != null ? o : a.Root) != null ? r : jE, b = (i = (s = S.input) != null ? s : a.Input) != null ? i : DE;
  return /* @__PURE__ */ w.jsx(_d, g({
    slots: {
      root: E,
      input: b
    },
    componentsProps: v,
    fullWidth: c,
    inputComponent: d,
    multiline: p,
    ref: n,
    type: x
  }, P, {
    classes: f
  }));
});
kv.muiName = "Input";
const Ev = kv;
function BE(e) {
  return ne("MuiFormControl", e);
}
J("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const WE = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], UE = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${H(n)}`, r && "fullWidth"]
  };
  return re(o, BE, t);
}, HE = W("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => g({}, t.root, t[`margin${H(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => g({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), VE = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    error: u = !1,
    focused: c,
    fullWidth: d = !1,
    hiddenLabel: p = !1,
    margin: C = "none",
    required: S = !1,
    size: x = "medium",
    variant: P = "outlined"
  } = r, h = U(r, WE), f = g({}, r, {
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: d,
    hiddenLabel: p,
    margin: C,
    required: S,
    size: x,
    variant: P
  }), m = UE(f), [v, E] = y.useState(() => {
    let I = !1;
    return o && y.Children.forEach(o, (N) => {
      if (!Es(N, ["Input", "Select"]))
        return;
      const z = Es(N, ["Select"]) ? N.props.input : N;
      z && Mk(z.props) && (I = !0);
    }), I;
  }), [b, k] = y.useState(() => {
    let I = !1;
    return o && y.Children.forEach(o, (N) => {
      Es(N, ["Input", "Select"]) && (ll(N.props, !0) || ll(N.props.inputProps, !0)) && (I = !0);
    }), I;
  }), [$, M] = y.useState(!1);
  a && $ && M(!1);
  const T = c !== void 0 && !a ? c : $;
  let F;
  const L = y.useMemo(() => ({
    adornedStart: v,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: u,
    filled: b,
    focused: T,
    fullWidth: d,
    hiddenLabel: p,
    size: x,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: F,
    required: S,
    variant: P
  }), [v, s, a, u, b, T, d, p, F, S, x, P]);
  return /* @__PURE__ */ w.jsx(la.Provider, {
    value: L,
    children: /* @__PURE__ */ w.jsx(HE, g({
      as: l,
      ownerState: f,
      className: K(m.root, i),
      ref: n
    }, h, {
      children: o
    }))
  });
}), Pv = VE, KE = VC({
  createStyledComponent: W("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => oe({
    props: e,
    name: "MuiStack"
  })
}), GE = KE;
function YE(e) {
  return ne("MuiFormControlLabel", e);
}
const QE = J("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), Ho = QE, XE = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], qE = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${H(r)}`, o && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return re(s, YE, t);
}, ZE = W("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ho.label}`]: t.label
    }, t.root, t[`labelPlacement${H(n.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${Ho.disabled}`]: {
    cursor: "default"
  }
}, t.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, t.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, t.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${Ho.label}`]: {
    [`&.${Ho.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), JE = W("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Ho.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), eP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o;
  const i = oe({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: s,
    componentsProps: l = {},
    control: a,
    disabled: u,
    disableTypography: c,
    label: d,
    labelPlacement: p = "end",
    required: C,
    slotProps: S = {}
  } = i, x = U(i, XE), P = dn(), h = (r = u ?? a.props.disabled) != null ? r : P == null ? void 0 : P.disabled, f = C ?? a.props.required, m = {
    disabled: h,
    required: f
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((M) => {
    typeof a.props[M] > "u" && typeof i[M] < "u" && (m[M] = i[M]);
  });
  const v = Jn({
    props: i,
    muiFormControl: P,
    states: ["error"]
  }), E = g({}, i, {
    disabled: h,
    labelPlacement: p,
    required: f,
    error: v.error
  }), b = qE(E), k = (o = S.typography) != null ? o : l.typography;
  let $ = d;
  return $ != null && $.type !== Ct && !c && ($ = /* @__PURE__ */ w.jsx(Ct, g({
    component: "span"
  }, k, {
    className: K(b.label, k == null ? void 0 : k.className),
    children: $
  }))), /* @__PURE__ */ w.jsxs(ZE, g({
    className: K(b.root, s),
    ownerState: E,
    ref: n
  }, x, {
    children: [/* @__PURE__ */ y.cloneElement(a, m), f ? /* @__PURE__ */ w.jsxs(GE, {
      display: "block",
      children: [$, /* @__PURE__ */ w.jsxs(JE, {
        ownerState: E,
        "aria-hidden": !0,
        className: b.asterisk,
        children: [" ", "*"]
      })]
    }) : $]
  }));
}), tP = eP;
function nP(e) {
  return ne("MuiFormGroup", e);
}
J("MuiFormGroup", ["root", "row", "error"]);
const rP = ["className", "row"], oP = (e) => {
  const {
    classes: t,
    row: n,
    error: r
  } = e;
  return re({
    root: ["root", n && "row", r && "error"]
  }, nP, t);
}, iP = W("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.row && t.row];
  }
})(({
  ownerState: e
}) => g({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, e.row && {
  flexDirection: "row"
})), sP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: o,
    row: i = !1
  } = r, s = U(r, rP), l = dn(), a = Jn({
    props: r,
    muiFormControl: l,
    states: ["error"]
  }), u = g({}, r, {
    row: i,
    error: a.error
  }), c = oP(u);
  return /* @__PURE__ */ w.jsx(iP, g({
    className: K(c.root, o),
    ownerState: u,
    ref: n
  }, s));
}), lP = sP;
function aP(e) {
  return ne("MuiFormHelperText", e);
}
const uP = J("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), jp = uP;
var Dp;
const cP = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], dP = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: l,
    required: a
  } = e, u = {
    root: ["root", o && "disabled", i && "error", r && `size${H(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return re(u, aP, t);
}, fP = W("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${H(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${jp.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${jp.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), pP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p"
  } = r, l = U(r, cP), a = dn(), u = Jn({
    props: r,
    muiFormControl: a,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), c = g({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = dP(c);
  return /* @__PURE__ */ w.jsx(fP, g({
    as: s,
    ownerState: c,
    className: K(d.root, i),
    ref: n
  }, l, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Dp || (Dp = /* @__PURE__ */ w.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
}), mP = pP;
function hP(e) {
  return ne("MuiFormLabel", e);
}
const gP = J("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), ni = gP, vP = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], yP = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${H(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return re(a, hP, t);
}, xP = W("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => g({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => g({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${ni.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${ni.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ni.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), SP = W("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${ni.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), CP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    component: s = "label"
  } = r, l = U(r, vP), a = dn(), u = Jn({
    props: r,
    muiFormControl: a,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), c = g({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = yP(c);
  return /* @__PURE__ */ w.jsxs(xP, g({
    as: s,
    ownerState: c,
    className: K(d.root, i),
    ref: n
  }, l, {
    children: [o, u.required && /* @__PURE__ */ w.jsxs(SP, {
      ownerState: c,
      "aria-hidden": !0,
      className: d.asterisk,
      children: [" ", "*"]
    })]
  }));
}), wP = CP, bP = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ic(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kP = {
  entering: {
    opacity: 1,
    transform: ic(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Qa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), $v = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: l,
    onEnter: a,
    onEntered: u,
    onEntering: c,
    onExit: d,
    onExited: p,
    onExiting: C,
    style: S,
    timeout: x = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = hv
  } = t, h = U(t, bP), f = Gg(), m = y.useRef(), v = $d(), E = y.useRef(null), b = qe(E, Li(i), n), k = (z) => (j) => {
    if (z) {
      const B = E.current;
      j === void 0 ? z(B) : z(B, j);
    }
  }, $ = k(c), M = k((z, j) => {
    gv(z);
    const {
      duration: B,
      delay: R,
      easing: A
    } = sl({
      style: S,
      timeout: x,
      easing: s
    }, {
      mode: "enter"
    });
    let D;
    x === "auto" ? (D = v.transitions.getAutoHeightDuration(z.clientHeight), m.current = D) : D = B, z.style.transition = [v.transitions.create("opacity", {
      duration: D,
      delay: R
    }), v.transitions.create("transform", {
      duration: Qa ? D : D * 0.666,
      delay: R,
      easing: A
    })].join(","), a && a(z, j);
  }), T = k(u), F = k(C), L = k((z) => {
    const {
      duration: j,
      delay: B,
      easing: R
    } = sl({
      style: S,
      timeout: x,
      easing: s
    }, {
      mode: "exit"
    });
    let A;
    x === "auto" ? (A = v.transitions.getAutoHeightDuration(z.clientHeight), m.current = A) : A = j, z.style.transition = [v.transitions.create("opacity", {
      duration: A,
      delay: B
    }), v.transitions.create("transform", {
      duration: Qa ? A : A * 0.666,
      delay: Qa ? B : B || A * 0.333,
      easing: R
    })].join(","), z.style.opacity = 0, z.style.transform = ic(0.75), d && d(z);
  }), I = k(p), N = (z) => {
    x === "auto" && f.start(m.current || 0, z), r && r(E.current, z);
  };
  return /* @__PURE__ */ w.jsx(P, g({
    appear: o,
    in: l,
    nodeRef: E,
    onEnter: M,
    onEntered: T,
    onEntering: $,
    onExit: L,
    onExited: I,
    onExiting: F,
    addEndListener: N,
    timeout: x === "auto" ? null : x
  }, h, {
    children: (z, j) => /* @__PURE__ */ y.cloneElement(i, g({
      style: g({
        opacity: 0,
        transform: ic(0.75),
        visibility: z === "exited" && !l ? "hidden" : void 0
      }, kP[z], S, i.props.style),
      ref: b
    }, j))
  }));
});
$v.muiSupportAuto = !0;
const EP = $v, PP = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], $P = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = re({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, jk, t);
  return g({}, t, o);
}, RP = W(ca, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...aa(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), g({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Lo.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Lo.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Lo.disabled}, .${Lo.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Lo.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), TP = W(da, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ua
})({}), Rv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o, i, s;
  const l = oe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: a,
    components: u = {},
    componentsProps: c,
    fullWidth: d = !1,
    inputComponent: p = "input",
    multiline: C = !1,
    slotProps: S,
    slots: x = {},
    type: P = "text"
  } = l, h = U(l, PP), f = $P(l), v = {
    root: {
      ownerState: {
        disableUnderline: a
      }
    }
  }, E = S ?? c ? lt(S ?? c, v) : v, b = (r = (o = x.root) != null ? o : u.Root) != null ? r : RP, k = (i = (s = x.input) != null ? s : u.Input) != null ? i : TP;
  return /* @__PURE__ */ w.jsx(_d, g({
    slots: {
      root: b,
      input: k
    },
    slotProps: E,
    fullWidth: d,
    inputComponent: p,
    multiline: C,
    ref: n,
    type: P
  }, h, {
    classes: f
  }));
});
Rv.muiName = "Input";
const Tv = Rv;
function _P(e) {
  return ne("MuiInputAdornment", e);
}
const IP = J("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), Bp = IP;
var Wp;
const MP = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], NP = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${H(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, OP = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${H(o)}`, s, r && "hiddenLabel", i && `size${H(i)}`]
  };
  return re(l, _P, t);
}, LP = W("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: NP
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Bp.positionStart}&:not(.${Bp.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), zP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: u,
    variant: c
  } = r, d = U(r, MP), p = dn() || {};
  let C = c;
  c && p.variant, p && !C && (C = p.variant);
  const S = g({}, r, {
    hiddenLabel: p.hiddenLabel,
    size: p.size,
    disablePointerEvents: l,
    position: u,
    variant: C
  }), x = OP(S);
  return /* @__PURE__ */ w.jsx(la.Provider, {
    value: null,
    children: /* @__PURE__ */ w.jsx(LP, g({
      as: s,
      ownerState: S,
      className: K(x.root, i),
      ref: n
    }, d, {
      children: typeof o == "string" && !a ? /* @__PURE__ */ w.jsx(Ct, {
        color: "text.secondary",
        children: o
      }) : /* @__PURE__ */ w.jsxs(y.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Wp || (Wp = /* @__PURE__ */ w.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, o]
      })
    }))
  });
}), AP = zP;
function FP(e) {
  return ne("MuiInputLabel", e);
}
J("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const jP = ["disableAnimation", "margin", "shrink", "variant", "className"], DP = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${H(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = re(a, FP, t);
  return g({}, t, u);
}, BP = W(wP, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ni.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && g({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && g({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && g({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), WP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: i,
    className: s
  } = r, l = U(r, jP), a = dn();
  let u = i;
  typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
  const c = Jn({
    props: r,
    muiFormControl: a,
    states: ["size", "variant", "required", "focused"]
  }), d = g({}, r, {
    disableAnimation: o,
    formControl: a,
    shrink: u,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }), p = DP(d);
  return /* @__PURE__ */ w.jsx(BP, g({
    "data-shrink": u,
    ownerState: d,
    ref: n,
    className: K(p.root, s)
  }, l, {
    classes: p
  }));
}), _v = WP, UP = /* @__PURE__ */ y.createContext({}), Gn = UP;
function HP(e) {
  return ne("MuiList", e);
}
J("MuiList", ["root", "padding", "dense", "subheader"]);
const VP = ["children", "className", "component", "dense", "disablePadding", "subheader"], KP = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return re({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, HP, t);
}, GP = W("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => g({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), YP = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: u
  } = r, c = U(r, VP), d = y.useMemo(() => ({
    dense: l
  }), [l]), p = g({}, r, {
    component: s,
    dense: l,
    disablePadding: a
  }), C = KP(p);
  return /* @__PURE__ */ w.jsx(Gn.Provider, {
    value: d,
    children: /* @__PURE__ */ w.jsxs(GP, g({
      as: s,
      className: K(C.root, i),
      ref: n,
      ownerState: p
    }, c, {
      children: [u, o]
    }))
  });
}), sc = YP;
function QP(e) {
  return ne("MuiListItem", e);
}
const XP = J("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), Nr = XP, qP = J("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), ZP = qP;
function JP(e) {
  return ne("MuiListItemSecondaryAction", e);
}
J("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const e$ = ["className"], t$ = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return re({
    root: ["root", t && "disableGutters"]
  }, JP, n);
}, n$ = W("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => g({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Iv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: o
  } = r, i = U(r, e$), s = y.useContext(Gn), l = g({}, r, {
    disableGutters: s.disableGutters
  }), a = t$(l);
  return /* @__PURE__ */ w.jsx(n$, g({
    className: K(a.root, o),
    ownerState: l,
    ref: n
  }, i));
});
Iv.muiName = "ListItemSecondaryAction";
const r$ = Iv, o$ = ["className"], i$ = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], s$ = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, l$ = (e) => {
  const {
    alignItems: t,
    button: n,
    classes: r,
    dense: o,
    disabled: i,
    disableGutters: s,
    disablePadding: l,
    divider: a,
    hasSecondaryAction: u,
    selected: c
  } = e;
  return re({
    root: ["root", o && "dense", !s && "gutters", !l && "padding", a && "divider", i && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", c && "selected"],
    container: ["container"]
  }, QP, r);
}, a$ = W("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: s$
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && g({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${ZP.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${Nr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Nr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : We(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Nr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : We(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Nr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Nr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : We(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : We(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), u$ = W("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), c$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: o = "center",
    autoFocus: i = !1,
    button: s = !1,
    children: l,
    className: a,
    component: u,
    components: c = {},
    componentsProps: d = {},
    ContainerComponent: p = "li",
    ContainerProps: {
      className: C
    } = {},
    dense: S = !1,
    disabled: x = !1,
    disableGutters: P = !1,
    disablePadding: h = !1,
    divider: f = !1,
    focusVisibleClassName: m,
    secondaryAction: v,
    selected: E = !1,
    slotProps: b = {},
    slots: k = {}
  } = r, $ = U(r.ContainerProps, o$), M = U(r, i$), T = y.useContext(Gn), F = y.useMemo(() => ({
    dense: S || T.dense || !1,
    alignItems: o,
    disableGutters: P
  }), [o, T.dense, S, P]), L = y.useRef(null);
  cn(() => {
    i && L.current && L.current.focus();
  }, [i]);
  const I = y.Children.toArray(l), N = I.length && Es(I[I.length - 1], ["ListItemSecondaryAction"]), z = g({}, r, {
    alignItems: o,
    autoFocus: i,
    button: s,
    dense: F.dense,
    disabled: x,
    disableGutters: P,
    disablePadding: h,
    divider: f,
    hasSecondaryAction: N,
    selected: E
  }), j = l$(z), B = qe(L, n), R = k.root || c.Root || a$, A = b.root || d.root || {}, D = g({
    className: K(j.root, A.className, a),
    disabled: x
  }, M);
  let Y = u || "li";
  return s && (D.component = u || "div", D.focusVisibleClassName = K(Nr.focusVisible, m), Y = Ai), N ? (Y = !D.component && !u ? "div" : Y, p === "li" && (Y === "li" ? Y = "div" : D.component === "li" && (D.component = "div")), /* @__PURE__ */ w.jsx(Gn.Provider, {
    value: F,
    children: /* @__PURE__ */ w.jsxs(u$, g({
      as: p,
      className: K(j.container, C),
      ref: B,
      ownerState: z
    }, $, {
      children: [/* @__PURE__ */ w.jsx(R, g({}, A, !uo(R) && {
        as: Y,
        ownerState: g({}, z, A.ownerState)
      }, D, {
        children: I
      })), I.pop()]
    }))
  })) : /* @__PURE__ */ w.jsx(Gn.Provider, {
    value: F,
    children: /* @__PURE__ */ w.jsxs(R, g({}, A, {
      as: Y,
      ref: B
    }, !uo(R) && {
      ownerState: g({}, z, A.ownerState)
    }, D, {
      children: [I, v && /* @__PURE__ */ w.jsx(r$, {
        children: v
      })]
    }))
  });
}), ls = c$, d$ = J("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Up = d$;
function f$(e) {
  return ne("MuiListItemText", e);
}
const p$ = J("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), al = p$, m$ = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], h$ = (e) => {
  const {
    classes: t,
    inset: n,
    primary: r,
    secondary: o,
    dense: i
  } = e;
  return re({
    root: ["root", n && "inset", i && "dense", r && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, f$, t);
}, g$ = W("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${al.primary}`]: t.primary
    }, {
      [`& .${al.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})(({
  ownerState: e
}) => g({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), v$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiListItemText"
  }), {
    children: o,
    className: i,
    disableTypography: s = !1,
    inset: l = !1,
    primary: a,
    primaryTypographyProps: u,
    secondary: c,
    secondaryTypographyProps: d
  } = r, p = U(r, m$), {
    dense: C
  } = y.useContext(Gn);
  let S = a ?? o, x = c;
  const P = g({}, r, {
    disableTypography: s,
    inset: l,
    primary: !!S,
    secondary: !!x,
    dense: C
  }), h = h$(P);
  return S != null && S.type !== Ct && !s && (S = /* @__PURE__ */ w.jsx(Ct, g({
    variant: C ? "body2" : "body1",
    className: h.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: S
  }))), x != null && x.type !== Ct && !s && (x = /* @__PURE__ */ w.jsx(Ct, g({
    variant: "body2",
    className: h.secondary,
    color: "text.secondary",
    display: "block"
  }, d, {
    children: x
  }))), /* @__PURE__ */ w.jsxs(g$, g({
    className: K(h.root, i),
    ownerState: P,
    ref: n
  }, p, {
    children: [S, x]
  }));
}), as = v$, y$ = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Xa(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Hp(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Mv(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function zo(e, t, n, r, o, i) {
  let s = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const a = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Mv(l, i) || a)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const x$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: l,
    disabledItemsFocusable: a = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: d = "selectedMenu"
  } = t, p = U(t, y$), C = y.useRef(null), S = y.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  cn(() => {
    o && C.current.focus();
  }, [o]), y.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (m, {
      direction: v
    }) => {
      const E = !C.current.style.width;
      if (m.clientHeight < C.current.clientHeight && E) {
        const b = `${Yg(kt(m))}px`;
        C.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = b, C.current.style.width = `calc(100% + ${b})`;
      }
      return C.current;
    }
  }), []);
  const x = (m) => {
    const v = C.current, E = m.key, b = kt(v).activeElement;
    if (E === "ArrowDown")
      m.preventDefault(), zo(v, b, u, a, Xa);
    else if (E === "ArrowUp")
      m.preventDefault(), zo(v, b, u, a, Hp);
    else if (E === "Home")
      m.preventDefault(), zo(v, null, u, a, Xa);
    else if (E === "End")
      m.preventDefault(), zo(v, null, u, a, Hp);
    else if (E.length === 1) {
      const k = S.current, $ = E.toLowerCase(), M = performance.now();
      k.keys.length > 0 && (M - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && $ !== k.keys[0] && (k.repeating = !1)), k.lastTime = M, k.keys.push($);
      const T = b && !k.repeating && Mv(b, k);
      k.previousKeyMatched && (T || zo(v, b, !1, a, Xa, k)) ? m.preventDefault() : k.previousKeyMatched = !1;
    }
    c && c(m);
  }, P = qe(C, n);
  let h = -1;
  y.Children.forEach(s, (m, v) => {
    if (!/* @__PURE__ */ y.isValidElement(m)) {
      h === v && (h += 1, h >= s.length && (h = -1));
      return;
    }
    m.props.disabled || (d === "selectedMenu" && m.props.selected || h === -1) && (h = v), h === v && (m.props.disabled || m.props.muiSkipListHighlight || m.type.muiSkipListHighlight) && (h += 1, h >= s.length && (h = -1));
  });
  const f = y.Children.map(s, (m, v) => {
    if (v === h) {
      const E = {};
      return i && (E.autoFocus = !0), m.props.tabIndex === void 0 && d === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ y.cloneElement(m, E);
    }
    return m;
  });
  return /* @__PURE__ */ w.jsx(sc, g({
    role: "menu",
    ref: P,
    className: l,
    onKeyDown: x,
    tabIndex: o ? 0 : -1
  }, p, {
    children: f
  }));
}), S$ = x$;
function C$(e) {
  return ne("MuiPopover", e);
}
J("MuiPopover", ["root", "paper"]);
const w$ = ["onEntering"], b$ = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], k$ = ["slotProps"];
function Vp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Kp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Gp(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function qa(e) {
  return typeof e == "function" ? e() : e;
}
const E$ = (e) => {
  const {
    classes: t
  } = e;
  return re({
    root: ["root"],
    paper: ["paper"]
  }, C$, t);
}, P$ = W(wv, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Nv = W(fo, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), $$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o, i;
  const s = oe({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: a,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: d = "anchorEl",
    children: p,
    className: C,
    container: S,
    elevation: x = 8,
    marginThreshold: P = 16,
    open: h,
    PaperProps: f = {},
    slots: m,
    slotProps: v,
    transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: b = EP,
    transitionDuration: k = "auto",
    TransitionProps: {
      onEntering: $
    } = {},
    disableScrollLock: M = !1
  } = s, T = U(s.TransitionProps, w$), F = U(s, b$), L = (r = v == null ? void 0 : v.paper) != null ? r : f, I = y.useRef(), N = qe(I, L.ref), z = g({}, s, {
    anchorOrigin: u,
    anchorReference: d,
    elevation: x,
    marginThreshold: P,
    externalPaperSlotProps: L,
    transformOrigin: E,
    TransitionComponent: b,
    transitionDuration: k,
    TransitionProps: T
  }), j = E$(z), B = y.useCallback(() => {
    if (d === "anchorPosition")
      return c;
    const te = qa(a), we = (te && te.nodeType === 1 ? te : kt(I.current).body).getBoundingClientRect();
    return {
      top: we.top + Vp(we, u.vertical),
      left: we.left + Kp(we, u.horizontal)
    };
  }, [a, u.horizontal, u.vertical, c, d]), R = y.useCallback((te) => ({
    vertical: Vp(te, E.vertical),
    horizontal: Kp(te, E.horizontal)
  }), [E.horizontal, E.vertical]), A = y.useCallback((te) => {
    const le = {
      width: te.offsetWidth,
      height: te.offsetHeight
    }, we = R(le);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Gp(we)
      };
    const Tn = B();
    let Tt = Tn.top - we.vertical, _t = Tn.left - we.horizontal;
    const Ht = Tt + le.height, It = _t + le.width, Pe = Sr(qa(a)), fn = Pe.innerHeight - P, ct = Pe.innerWidth - P;
    if (P !== null && Tt < P) {
      const be = Tt - P;
      Tt -= be, we.vertical += be;
    } else if (P !== null && Ht > fn) {
      const be = Ht - fn;
      Tt -= be, we.vertical += be;
    }
    if (P !== null && _t < P) {
      const be = _t - P;
      _t -= be, we.horizontal += be;
    } else if (It > ct) {
      const be = It - ct;
      _t -= be, we.horizontal += be;
    }
    return {
      top: `${Math.round(Tt)}px`,
      left: `${Math.round(_t)}px`,
      transformOrigin: Gp(we)
    };
  }, [a, d, B, R, P]), [D, Y] = y.useState(h), ee = y.useCallback(() => {
    const te = I.current;
    if (!te)
      return;
    const le = A(te);
    le.top !== null && (te.style.top = le.top), le.left !== null && (te.style.left = le.left), te.style.transformOrigin = le.transformOrigin, Y(!0);
  }, [A]);
  y.useEffect(() => (M && window.addEventListener("scroll", ee), () => window.removeEventListener("scroll", ee)), [a, M, ee]);
  const fe = (te, le) => {
    $ && $(te, le), ee();
  }, Z = () => {
    Y(!1);
  };
  y.useEffect(() => {
    h && ee();
  }), y.useImperativeHandle(l, () => h ? {
    updatePosition: () => {
      ee();
    }
  } : null, [h, ee]), y.useEffect(() => {
    if (!h)
      return;
    const te = Kg(() => {
      ee();
    }), le = Sr(a);
    return le.addEventListener("resize", te), () => {
      te.clear(), le.removeEventListener("resize", te);
    };
  }, [a, h, ee]);
  let ue = k;
  k === "auto" && !b.muiSupportAuto && (ue = void 0);
  const se = S || (a ? kt(qa(a)).body : void 0), Ne = (o = m == null ? void 0 : m.root) != null ? o : P$, je = (i = m == null ? void 0 : m.paper) != null ? i : Nv, _ = co({
    elementType: je,
    externalSlotProps: g({}, L, {
      style: D ? L.style : g({}, L.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: x,
      ref: N
    },
    ownerState: z,
    className: K(j.paper, L == null ? void 0 : L.className)
  }), G = co({
    elementType: Ne,
    externalSlotProps: (v == null ? void 0 : v.root) || {},
    externalForwardedProps: F,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: se,
      open: h
    },
    ownerState: z,
    className: K(j.root, C)
  }), {
    slotProps: q
  } = G, pe = U(G, k$);
  return /* @__PURE__ */ w.jsx(Ne, g({}, pe, !uo(Ne) && {
    slotProps: q,
    disableScrollLock: M
  }, {
    children: /* @__PURE__ */ w.jsx(b, g({
      appear: !0,
      in: h,
      onEntering: fe,
      onExited: Z,
      timeout: ue
    }, T, {
      children: /* @__PURE__ */ w.jsx(je, g({}, _, {
        children: p
      }))
    }))
  }));
}), R$ = $$;
function T$(e) {
  return ne("MuiMenu", e);
}
J("MuiMenu", ["root", "paper", "list"]);
const _$ = ["onEntering"], I$ = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], M$ = {
  vertical: "top",
  horizontal: "right"
}, N$ = {
  vertical: "top",
  horizontal: "left"
}, O$ = (e) => {
  const {
    classes: t
  } = e;
  return re({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, T$, t);
}, L$ = W(R$, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), z$ = W(Nv, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), A$ = W(S$, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), F$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o;
  const i = oe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: l,
    className: a,
    disableAutoFocusItem: u = !1,
    MenuListProps: c = {},
    onClose: d,
    open: p,
    PaperProps: C = {},
    PopoverClasses: S,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: P
    } = {},
    variant: h = "selectedMenu",
    slots: f = {},
    slotProps: m = {}
  } = i, v = U(i.TransitionProps, _$), E = U(i, I$), b = PC(), k = g({}, i, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: c,
    onEntering: P,
    PaperProps: C,
    transitionDuration: x,
    TransitionProps: v,
    variant: h
  }), $ = O$(k), M = s && !u && p, T = y.useRef(null), F = (R, A) => {
    T.current && T.current.adjustStyleForScrollbar(R, {
      direction: b ? "rtl" : "ltr"
    }), P && P(R, A);
  }, L = (R) => {
    R.key === "Tab" && (R.preventDefault(), d && d(R, "tabKeyDown"));
  };
  let I = -1;
  y.Children.map(l, (R, A) => {
    /* @__PURE__ */ y.isValidElement(R) && (R.props.disabled || (h === "selectedMenu" && R.props.selected || I === -1) && (I = A));
  });
  const N = (r = f.paper) != null ? r : z$, z = (o = m.paper) != null ? o : C, j = co({
    elementType: f.root,
    externalSlotProps: m.root,
    ownerState: k,
    className: [$.root, a]
  }), B = co({
    elementType: N,
    externalSlotProps: z,
    ownerState: k,
    className: $.paper
  });
  return /* @__PURE__ */ w.jsx(L$, g({
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: b ? "right" : "left"
    },
    transformOrigin: b ? M$ : N$,
    slots: {
      paper: N,
      root: f.root
    },
    slotProps: {
      root: j,
      paper: B
    },
    open: p,
    ref: n,
    transitionDuration: x,
    TransitionProps: g({
      onEntering: F
    }, v),
    ownerState: k
  }, E, {
    classes: S,
    children: /* @__PURE__ */ w.jsx(A$, g({
      onKeyDown: L,
      actions: T,
      autoFocus: s && (I === -1 || u),
      autoFocusItem: M,
      variant: h
    }, c, {
      className: K($.list, c.className),
      children: l
    }))
  }));
}), j$ = F$;
function D$(e) {
  return ne("MuiMenuItem", e);
}
const B$ = J("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Ao = B$, W$ = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], U$ = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, H$ = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = re({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, D$, s);
  return g({}, s, a);
}, V$ = W(Ai, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: U$
})(({
  theme: e,
  ownerState: t
}) => g({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Ao.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : We(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Ao.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : We(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Ao.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : We(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : We(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Ao.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ao.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Fp.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Fp.inset}`]: {
    marginLeft: 52
  },
  [`& .${al.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${al.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Up.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && g({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Up.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), K$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: u,
    role: c = "menuitem",
    tabIndex: d,
    className: p
  } = r, C = U(r, W$), S = y.useContext(Gn), x = y.useMemo(() => ({
    dense: s || S.dense || !1,
    disableGutters: a
  }), [S.dense, s, a]), P = y.useRef(null);
  cn(() => {
    o && P.current && P.current.focus();
  }, [o]);
  const h = g({}, r, {
    dense: x.dense,
    divider: l,
    disableGutters: a
  }), f = H$(r), m = qe(P, n);
  let v;
  return r.disabled || (v = d !== void 0 ? d : -1), /* @__PURE__ */ w.jsx(Gn.Provider, {
    value: x,
    children: /* @__PURE__ */ w.jsx(V$, g({
      ref: m,
      role: c,
      tabIndex: v,
      component: i,
      focusVisibleClassName: K(f.focusVisible, u),
      className: K(f.root, p)
    }, C, {
      ownerState: h,
      classes: f
    }))
  });
}), Za = K$;
function G$(e) {
  return ne("MuiNativeSelect", e);
}
const Y$ = J("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Id = Y$, Q$ = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], X$ = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${H(n)}`, i && "iconOpen", r && "disabled"]
  };
  return re(l, G$, t);
}, Ov = ({
  ownerState: e,
  theme: t
}) => g({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": g({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Id.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), q$ = W("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: vt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Id.multiple}`]: t.multiple
    }];
  }
})(Ov), Lv = ({
  ownerState: e,
  theme: t
}) => g({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Id.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), Z$ = W("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${H(n.variant)}`], n.open && t.iconOpen];
  }
})(Lv), J$ = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard"
  } = t, u = U(t, Q$), c = g({}, t, {
    disabled: o,
    variant: a,
    error: i
  }), d = X$(c);
  return /* @__PURE__ */ w.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ w.jsx(q$, g({
      ownerState: c,
      className: K(d.select, r),
      disabled: o,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ w.jsx(Z$, {
      as: s,
      ownerState: c,
      className: d.icon
    })]
  });
}), eR = J$;
var Yp;
const tR = ["children", "classes", "className", "label", "notched"], nR = W("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: vt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), rR = W("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: vt
})(({
  ownerState: e,
  theme: t
}) => g({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && g({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function oR(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = U(e, tR), i = n != null && n !== "", s = g({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ w.jsx(nR, g({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, o, {
    children: /* @__PURE__ */ w.jsx(rR, {
      ownerState: s,
      children: i ? /* @__PURE__ */ w.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Yp || (Yp = /* @__PURE__ */ w.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const iR = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], sR = (e) => {
  const {
    classes: t
  } = e, r = re({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Bk, t);
  return g({}, t, r);
}, lR = W(ca, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: aa
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return g({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Mn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Mn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Mn.focused} .${Mn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Mn.error} .${Mn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Mn.disabled} .${Mn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && g({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), aR = W(oR, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), uR = W(da, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ua
})(({
  theme: e,
  ownerState: t
}) => g({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), zv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o, i, s, l;
  const a = oe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: c = !1,
    inputComponent: d = "input",
    label: p,
    multiline: C = !1,
    notched: S,
    slots: x = {},
    type: P = "text"
  } = a, h = U(a, iR), f = sR(a), m = dn(), v = Jn({
    props: a,
    muiFormControl: m,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = g({}, a, {
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: m,
    fullWidth: c,
    hiddenLabel: v.hiddenLabel,
    multiline: C,
    size: v.size,
    type: P
  }), b = (r = (o = x.root) != null ? o : u.Root) != null ? r : lR, k = (i = (s = x.input) != null ? s : u.Input) != null ? i : uR;
  return /* @__PURE__ */ w.jsx(_d, g({
    slots: {
      root: b,
      input: k
    },
    renderSuffix: ($) => /* @__PURE__ */ w.jsx(aR, {
      ownerState: E,
      className: f.notchedOutline,
      label: p != null && p !== "" && v.required ? l || (l = /* @__PURE__ */ w.jsxs(y.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof S < "u" ? S : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: c,
    inputComponent: d,
    multiline: C,
    ref: n,
    type: P
  }, h, {
    classes: g({}, f, {
      notchedOutline: null
    })
  }));
});
zv.muiName = "Input";
const Av = zv;
function cR(e) {
  return ne("MuiSelect", e);
}
const dR = J("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Fo = dR;
var Qp;
const fR = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], pR = W("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Fo.select}`]: t.select
      },
      {
        [`&.${Fo.select}`]: t[n.variant]
      },
      {
        [`&.${Fo.error}`]: t.error
      },
      {
        [`&.${Fo.multiple}`]: t.multiple
      }
    ];
  }
})(Ov, {
  // Win specificity over the input base
  [`&.${Fo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), mR = W("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${H(n.variant)}`], n.open && t.iconOpen];
  }
})(Lv), hR = W("input", {
  shouldForwardProp: (e) => fv(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Xp(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function gR(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const vR = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${H(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return re(l, cR, t);
}, yR = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: s,
    autoWidth: l,
    children: a,
    className: u,
    defaultOpen: c,
    defaultValue: d,
    disabled: p,
    displayEmpty: C,
    error: S = !1,
    IconComponent: x,
    inputRef: P,
    labelId: h,
    MenuProps: f = {},
    multiple: m,
    name: v,
    onBlur: E,
    onChange: b,
    onClose: k,
    onFocus: $,
    onOpen: M,
    open: T,
    readOnly: F,
    renderValue: L,
    SelectDisplayProps: I = {},
    tabIndex: N,
    value: z,
    variant: j = "standard"
  } = t, B = U(t, fR), [R, A] = Ju({
    controlled: z,
    default: d,
    name: "Select"
  }), [D, Y] = Ju({
    controlled: T,
    default: c,
    name: "Select"
  }), ee = y.useRef(null), fe = y.useRef(null), [Z, ue] = y.useState(null), {
    current: se
  } = y.useRef(T != null), [Ne, je] = y.useState(), _ = qe(n, P), G = y.useCallback((Q) => {
    fe.current = Q, Q && ue(Q);
  }, []), q = Z == null ? void 0 : Z.parentNode;
  y.useImperativeHandle(_, () => ({
    focus: () => {
      fe.current.focus();
    },
    node: ee.current,
    value: R
  }), [R]), y.useEffect(() => {
    c && D && Z && !se && (je(l ? null : q.clientWidth), fe.current.focus());
  }, [Z, l]), y.useEffect(() => {
    s && fe.current.focus();
  }, [s]), y.useEffect(() => {
    if (!h)
      return;
    const Q = kt(fe.current).getElementById(h);
    if (Q) {
      const xe = () => {
        getSelection().isCollapsed && fe.current.focus();
      };
      return Q.addEventListener("click", xe), () => {
        Q.removeEventListener("click", xe);
      };
    }
  }, [h]);
  const pe = (Q, xe) => {
    Q ? M && M(xe) : k && k(xe), se || (je(l ? null : q.clientWidth), Y(Q));
  }, te = (Q) => {
    Q.button === 0 && (Q.preventDefault(), fe.current.focus(), pe(!0, Q));
  }, le = (Q) => {
    pe(!1, Q);
  }, we = y.Children.toArray(a), Tn = (Q) => {
    const xe = we.find((Ke) => Ke.props.value === Q.target.value);
    xe !== void 0 && (A(xe.props.value), b && b(Q, xe));
  }, Tt = (Q) => (xe) => {
    let Ke;
    if (xe.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Ke = Array.isArray(R) ? R.slice() : [];
        const br = R.indexOf(Q.props.value);
        br === -1 ? Ke.push(Q.props.value) : Ke.splice(br, 1);
      } else
        Ke = Q.props.value;
      if (Q.props.onClick && Q.props.onClick(xe), R !== Ke && (A(Ke), b)) {
        const br = xe.nativeEvent || xe, Nd = new br.constructor(br.type, br);
        Object.defineProperty(Nd, "target", {
          writable: !0,
          value: {
            value: Ke,
            name: v
          }
        }), b(Nd, Q);
      }
      m || pe(!1, xe);
    }
  }, _t = (Q) => {
    F || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(Q.key) !== -1 && (Q.preventDefault(), pe(!0, Q));
  }, Ht = Z !== null && D, It = (Q) => {
    !Ht && E && (Object.defineProperty(Q, "target", {
      writable: !0,
      value: {
        value: R,
        name: v
      }
    }), E(Q));
  };
  delete B["aria-invalid"];
  let Pe, fn;
  const ct = [];
  let be = !1;
  (ll({
    value: R
  }) || C) && (L ? Pe = L(R) : be = !0);
  const en = we.map((Q) => {
    if (!/* @__PURE__ */ y.isValidElement(Q))
      return null;
    let xe;
    if (m) {
      if (!Array.isArray(R))
        throw new Error(yr(2));
      xe = R.some((Ke) => Xp(Ke, Q.props.value)), xe && be && ct.push(Q.props.children);
    } else
      xe = Xp(R, Q.props.value), xe && be && (fn = Q.props.children);
    return /* @__PURE__ */ y.cloneElement(Q, {
      "aria-selected": xe ? "true" : "false",
      onClick: Tt(Q),
      onKeyUp: (Ke) => {
        Ke.key === " " && Ke.preventDefault(), Q.props.onKeyUp && Q.props.onKeyUp(Ke);
      },
      role: "option",
      selected: xe,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  be && (m ? ct.length === 0 ? Pe = null : Pe = ct.reduce((Q, xe, Ke) => (Q.push(xe), Ke < ct.length - 1 && Q.push(", "), Q), []) : Pe = fn);
  let _n = Ne;
  !l && se && Z && (_n = q.clientWidth);
  let pn;
  typeof N < "u" ? pn = N : pn = p ? null : 0;
  const ve = I.id || (v ? `mui-component-select-${v}` : void 0), X = g({}, t, {
    variant: j,
    value: R,
    open: Ht,
    error: S
  }), mn = vR(X), wo = g({}, f.PaperProps, (r = f.slotProps) == null ? void 0 : r.paper), bo = ra();
  return /* @__PURE__ */ w.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ w.jsx(pR, g({
      ref: G,
      tabIndex: pn,
      role: "combobox",
      "aria-controls": bo,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Ht ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [h, ve].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: _t,
      onMouseDown: p || F ? null : te,
      onBlur: It,
      onFocus: $
    }, I, {
      ownerState: X,
      className: K(I.className, mn.select, u),
      id: ve,
      children: gR(Pe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Qp || (Qp = /* @__PURE__ */ w.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Pe
    })), /* @__PURE__ */ w.jsx(hR, g({
      "aria-invalid": S,
      value: Array.isArray(R) ? R.join(",") : R,
      name: v,
      ref: ee,
      "aria-hidden": !0,
      onChange: Tn,
      tabIndex: -1,
      disabled: p,
      className: mn.nativeInput,
      autoFocus: s,
      ownerState: X
    }, B)), /* @__PURE__ */ w.jsx(mR, {
      as: x,
      className: mn.icon,
      ownerState: X
    }), /* @__PURE__ */ w.jsx(j$, g({
      id: `menu-${v || ""}`,
      anchorEl: q,
      open: Ht,
      onClose: le,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, f, {
      MenuListProps: g({
        "aria-labelledby": h,
        role: "listbox",
        "aria-multiselectable": m ? "true" : void 0,
        disableListWrap: !0,
        id: bo
      }, f.MenuListProps),
      slotProps: g({}, f.slotProps, {
        paper: g({}, wo, {
          style: g({
            minWidth: _n
          }, wo != null ? wo.style : null)
        })
      }),
      children: en
    }))]
  });
}), xR = yR, SR = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], CR = ["root"], wR = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Md = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => vt(e) && e !== "variant",
  slot: "Root"
}, bR = W(Tv, Md)(""), kR = W(Av, Md)(""), ER = W(Ev, Md)(""), Fv = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = Vk,
    id: d,
    input: p,
    inputProps: C,
    label: S,
    labelId: x,
    MenuProps: P,
    multiple: h = !1,
    native: f = !1,
    onClose: m,
    onOpen: v,
    open: E,
    renderValue: b,
    SelectDisplayProps: k,
    variant: $ = "outlined"
  } = r, M = U(r, SR), T = f ? eR : xR, F = dn(), L = Jn({
    props: r,
    muiFormControl: F,
    states: ["variant", "error"]
  }), I = L.variant || $, N = g({}, r, {
    variant: I,
    classes: s
  }), z = wR(N), j = U(z, CR), B = p || {
    standard: /* @__PURE__ */ w.jsx(bR, {
      ownerState: N
    }),
    outlined: /* @__PURE__ */ w.jsx(kR, {
      label: S,
      ownerState: N
    }),
    filled: /* @__PURE__ */ w.jsx(ER, {
      ownerState: N
    })
  }[I], R = qe(n, Li(B));
  return /* @__PURE__ */ w.jsx(y.Fragment, {
    children: /* @__PURE__ */ y.cloneElement(B, g({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: T,
      inputProps: g({
        children: i,
        error: L.error,
        IconComponent: c,
        variant: I,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: h
      }, f ? {
        id: d
      } : {
        autoWidth: o,
        defaultOpen: a,
        displayEmpty: u,
        labelId: x,
        MenuProps: P,
        onClose: m,
        onOpen: v,
        open: E,
        renderValue: b,
        SelectDisplayProps: g({
          id: d
        }, k)
      }, C, {
        classes: C ? lt(j, C.classes) : j
      }, p ? p.props.inputProps : {})
    }, (h && f || u) && I === "outlined" ? {
      notched: !0
    } : {}, {
      ref: R,
      className: K(B.props.className, l, z.root)
    }, !p && {
      variant: I
    }, M))
  });
});
Fv.muiName = "Select";
const jv = Fv;
function PR(e) {
  return ne("MuiSwitch", e);
}
const $R = J("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), rt = $R, RR = ["className", "color", "edge", "size", "sx"], TR = (e) => {
  const {
    classes: t,
    edge: n,
    size: r,
    color: o,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${H(n)}`, `size${H(r)}`],
    switchBase: ["switchBase", `color${H(o)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, a = re(l, PR, t);
  return g({}, t, a);
}, _R = W("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${H(n.edge)}`], t[`size${H(n.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${rt.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${rt.switchBase}`]: {
        padding: 4,
        [`&.${rt.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), IR = W(Cv, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${rt.input}`]: t.input
    }, n.color !== "default" && t[`color${H(n.color)}`]];
  }
})(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${rt.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${rt.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${rt.checked} + .${rt.track}`]: {
    opacity: 0.5
  },
  [`&.${rt.disabled} + .${rt.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${rt.input}`]: {
    left: "-100%",
    width: "300%"
  }
}), ({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(([, t]) => t.main && t.light).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${rt.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${rt.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? nl(e.palette[t].main, 0.62) : tl(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${rt.checked} + .${rt.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
})), MR = W("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
})), NR = W("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})), OR = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiSwitch"
  }), {
    className: o,
    color: i = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: a
  } = r, u = U(r, RR), c = g({}, r, {
    color: i,
    edge: s,
    size: l
  }), d = TR(c), p = /* @__PURE__ */ w.jsx(NR, {
    className: d.thumb,
    ownerState: c
  });
  return /* @__PURE__ */ w.jsxs(_R, {
    className: K(d.root, o),
    sx: a,
    ownerState: c,
    children: [/* @__PURE__ */ w.jsx(IR, g({
      type: "checkbox",
      icon: p,
      checkedIcon: p,
      ref: n,
      ownerState: c
    }, u, {
      classes: g({}, d, {
        root: d.switchBase
      })
    })), /* @__PURE__ */ w.jsx(MR, {
      className: d.track,
      ownerState: c
    })]
  });
}), LR = OR;
function zR(e) {
  return ne("MuiTextField", e);
}
J("MuiTextField", ["root"]);
const AR = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], FR = {
  standard: Tv,
  filled: Ev,
  outlined: Av
}, jR = (e) => {
  const {
    classes: t
  } = e;
  return re({
    root: ["root"]
  }, zR, t);
}, DR = W(Pv, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), BR = /* @__PURE__ */ y.forwardRef(function(t, n) {
  const r = oe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: a = "primary",
    defaultValue: u,
    disabled: c = !1,
    error: d = !1,
    FormHelperTextProps: p,
    fullWidth: C = !1,
    helperText: S,
    id: x,
    InputLabelProps: P,
    inputProps: h,
    InputProps: f,
    inputRef: m,
    label: v,
    maxRows: E,
    minRows: b,
    multiline: k = !1,
    name: $,
    onBlur: M,
    onChange: T,
    onFocus: F,
    placeholder: L,
    required: I = !1,
    rows: N,
    select: z = !1,
    SelectProps: j,
    type: B,
    value: R,
    variant: A = "outlined"
  } = r, D = U(r, AR), Y = g({}, r, {
    autoFocus: i,
    color: a,
    disabled: c,
    error: d,
    fullWidth: C,
    multiline: k,
    required: I,
    select: z,
    variant: A
  }), ee = jR(Y), fe = {};
  A === "outlined" && (P && typeof P.shrink < "u" && (fe.notched = P.shrink), fe.label = v), z && ((!j || !j.native) && (fe.id = void 0), fe["aria-describedby"] = void 0);
  const Z = ra(x), ue = S && Z ? `${Z}-helper-text` : void 0, se = v && Z ? `${Z}-label` : void 0, Ne = FR[A], je = /* @__PURE__ */ w.jsx(Ne, g({
    "aria-describedby": ue,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: C,
    multiline: k,
    name: $,
    rows: N,
    maxRows: E,
    minRows: b,
    type: B,
    value: R,
    id: Z,
    inputRef: m,
    onBlur: M,
    onChange: T,
    onFocus: F,
    placeholder: L,
    inputProps: h
  }, fe, f));
  return /* @__PURE__ */ w.jsxs(DR, g({
    className: K(ee.root, l),
    disabled: c,
    error: d,
    fullWidth: C,
    ref: n,
    required: I,
    color: a,
    variant: A,
    ownerState: Y
  }, D, {
    children: [v != null && v !== "" && /* @__PURE__ */ w.jsx(_v, g({
      htmlFor: Z,
      id: se
    }, P, {
      children: v
    })), z ? /* @__PURE__ */ w.jsx(jv, g({
      "aria-describedby": ue,
      id: Z,
      labelId: se,
      value: R,
      input: je
    }, j, {
      children: s
    })) : je, S && /* @__PURE__ */ w.jsx(mP, g({
      id: ue
    }, p, {
      children: S
    }))]
  }));
}), Ir = BR, WR = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], UR = ({ hass: e, narrow: t }) => {
  const n = it.useRef(null);
  return y.useEffect(() => {
    n.current && (n.current.hass = e, n.current.narrow = t);
  }, [e, t]), it.createElement("ha-menu-button", { ref: n });
}, HR = ({ hass: e, narrow: t }) => {
  const [n, r] = y.useState({}), [o, i] = y.useState({}), [s, l] = y.useState([]), [a, u] = y.useState(null), [c, d] = y.useState(!1), [p, C] = y.useState(""), [S, x] = y.useState(""), [P, h] = y.useState("Always"), [f, m] = y.useState(""), [v, E] = y.useState(""), [b, k] = y.useState(""), [$, M] = y.useState(""), [T, F] = y.useState([]), [L, I] = y.useState(!1);
  y.useEffect(() => {
    if (e) {
      N(), z();
      const _ = setInterval(z, 3e4);
      let G;
      return e.connection.subscribeEvents(() => {
        N(), z();
      }, "z2m_lock_manager_updated").then((q) => {
        G = q;
      }), () => {
        clearInterval(_), G && G();
      };
    }
  }, [e]);
  const N = async () => {
    try {
      const _ = await e.callWS({ type: "z2m_lock_manager/get_slots" });
      r((_ == null ? void 0 : _.slots) || {}), i((_ == null ? void 0 : _.lock_state) || {});
    } catch (_) {
      console.error("Failed to fetch slots. Error details:", _);
    }
  }, z = async () => {
    try {
      const _ = await e.callWS({ type: "z2m_lock_manager/get_history" });
      l(_.history);
    } catch (_) {
      console.error("Failed to fetch history", _);
    }
  }, j = async (_, G) => {
    const q = { ...n };
    q[_] && (q[_].enabled = G), r(q), await e.callWS({
      type: "z2m_lock_manager/update_slot",
      slot_id: _,
      enabled: G
    }), N();
  }, B = async (_) => {
    await e.callWS({
      type: "z2m_lock_manager/import_from_lock",
      slot_id: _
    }), N();
  }, R = async (_) => {
    await e.callWS({
      type: "z2m_lock_manager/force_sync_to_lock",
      slot_id: _
    }), N();
  }, A = () => {
    d(!0), u(null), C(""), x(""), h("Always"), m(""), E(""), k(""), M(""), F([]);
  }, D = (_) => {
    const G = n[_];
    d(!1), u(_), C(G.name), x(G.code), h(G.access_mode || "Always"), m(G.start_date || ""), E(G.end_date || ""), k(G.daily_start_time || ""), M(G.daily_end_time || ""), F(G.weekdays || []);
  }, Y = () => {
    u(null), d(!1), I(!1);
  }, ee = async () => {
    const _ = {
      name: p,
      code: S,
      access_mode: P,
      start_date: f || null,
      end_date: v || null,
      daily_start_time: b || null,
      daily_end_time: $ || null,
      weekdays: T,
      enabled: c ? !0 : a ? n[a].enabled : !0
    };
    c ? await e.callWS({
      type: "z2m_lock_manager/add_user",
      ..._
    }) : a && await e.callWS({
      type: "z2m_lock_manager/update_slot",
      slot_id: a,
      ..._
    }), Y(), N();
  }, fe = async () => {
    a && confirm("Are you sure you want to delete this user? This will clear the code from the lock.") && (await e.callWS({
      type: "z2m_lock_manager/delete_user",
      slot_id: a
    }), Y(), N());
  }, Z = (_) => {
    T.includes(_) ? F(T.filter((G) => G !== _)) : F([...T, _].sort());
  }, ue = (_) => _ ? new Date(_).toLocaleString() : "Never", se = Object.entries(n || {}).filter(([_, G]) => G && G.code !== "" && G.code !== null), Ne = Object.keys(n || {}).length, je = it.useRef(null);
  return /* @__PURE__ */ w.jsxs("div", { ref: je, children: [
    /* @__PURE__ */ w.jsx("style", { children: `
                .header {
                    background-color: var(--app-header-background-color, var(--primary-color));
                    color: var(--app-header-text-color, white);
                    border-bottom: var(--app-header-border-bottom, none);
                }
                .toolbar {
                    height: var(--header-height, 56px);
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    padding: 0 16px;
                    font-weight: 400;
                    box-sizing: border-box;
                }
                .main-title {
                    margin: 0 0 0 24px;
                    line-height: 20px;
                    flex-grow: 1;
                }
            ` }),
    /* @__PURE__ */ w.jsx("div", { className: "header", children: /* @__PURE__ */ w.jsxs("div", { className: "toolbar", children: [
      /* @__PURE__ */ w.jsx(UR, { hass: e, narrow: t }),
      /* @__PURE__ */ w.jsx("div", { className: "main-title", children: "Lock Manager" })
    ] }) }),
    /* @__PURE__ */ w.jsxs(z2, { maxWidth: "md", style: { marginTop: "20px", minHeight: "100vh", padding: "20px" }, children: [
      /* @__PURE__ */ w.jsxs(Kt, { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, children: [
        /* @__PURE__ */ w.jsx(Ct, { variant: "h4", children: "Users" }),
        /* @__PURE__ */ w.jsx(tr, { variant: "contained", color: "primary", onClick: A, children: "Add User" })
      ] }),
      /* @__PURE__ */ w.jsxs(Kt, { mb: 4, children: [
        /* @__PURE__ */ w.jsxs(Ct, { variant: "subtitle1", gutterBottom: !0, children: [
          "Using ",
          se.length,
          " of ",
          Ne,
          " slots"
        ] }),
        /* @__PURE__ */ w.jsx(fo, { children: /* @__PURE__ */ w.jsxs(sc, { children: [
          se.length === 0 && /* @__PURE__ */ w.jsx(ls, { children: /* @__PURE__ */ w.jsx(as, { primary: "No users configured." }) }),
          se.map(([_, G]) => {
            var q, pe;
            return /* @__PURE__ */ w.jsxs(ls, { divider: !0, sx: { flexDirection: "column", alignItems: "stretch" }, children: [
              /* @__PURE__ */ w.jsxs(Kt, { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
                /* @__PURE__ */ w.jsx(
                  as,
                  {
                    primary: `${_}. ${G.name}`,
                    secondary: /* @__PURE__ */ w.jsxs("span", { children: [
                      "Status: ",
                      /* @__PURE__ */ w.jsxs("b", { children: [
                        G.status,
                        ":"
                      ] }),
                      " ",
                      G.sync_state,
                      " | Mode: ",
                      G.access_mode,
                      " ",
                      /* @__PURE__ */ w.jsx("br", {}),
                      "Last Used: ",
                      ue(G.last_used)
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsxs(Kt, { children: [
                  /* @__PURE__ */ w.jsx(tr, { onClick: () => D(_), children: "Edit" }),
                  /* @__PURE__ */ w.jsx(
                    LR,
                    {
                      edge: "end",
                      checked: !!(G != null && G.enabled),
                      onChange: (te) => j(_, te.target.checked)
                    }
                  )
                ] })
              ] }),
              G.sync_state === "mismatch" && /* @__PURE__ */ w.jsx(Kt, { mt: 1, mb: 1, children: /* @__PURE__ */ w.jsxs(ak, { severity: "warning", children: [
                /* @__PURE__ */ w.jsx(Ck, { children: "Sync Mismatch" }),
                "HA expected code: ",
                G.code || "None",
                " (",
                G.enabled ? "Enabled" : "Disabled",
                "). ",
                /* @__PURE__ */ w.jsx("br", {}),
                "Lock actual code: ",
                ((q = o[_]) == null ? void 0 : q.code) || "None",
                " (",
                (pe = o[_]) != null && pe.enabled ? "Enabled" : "Disabled",
                ").",
                /* @__PURE__ */ w.jsxs(Kt, { mt: 1, children: [
                  /* @__PURE__ */ w.jsx(tr, { variant: "outlined", color: "inherit", size: "small", sx: { mr: 1 }, onClick: () => B(_), children: "Import from Lock" }),
                  /* @__PURE__ */ w.jsx(tr, { variant: "contained", color: "warning", size: "small", onClick: () => R(_), children: "Write to Lock" })
                ] })
              ] }) })
            ] }, _);
          })
        ] }) })
      ] }),
      /* @__PURE__ */ w.jsxs(Kt, { children: [
        /* @__PURE__ */ w.jsx(Ct, { variant: "h6", gutterBottom: !0, children: "Activity Log" }),
        /* @__PURE__ */ w.jsx(fo, { style: { maxHeight: "300px", overflow: "auto" }, children: /* @__PURE__ */ w.jsxs(sc, { dense: !0, children: [
          s.length === 0 && /* @__PURE__ */ w.jsx(ls, { children: /* @__PURE__ */ w.jsx(as, { primary: "No recent activity" }) }),
          (s || []).map((_, G) => {
            var pe;
            let q = ((_ == null ? void 0 : _.action) || "unknown").toUpperCase().replace(/_/g, " ");
            if ((_ == null ? void 0 : _.user_id) !== null && (_ == null ? void 0 : _.user_id) !== void 0) {
              const te = String(_.user_id + 1), le = ((pe = n[te]) == null ? void 0 : pe.name) || `User ${_.user_id + 1}`;
              _.action === "pin_code_deleted" ? !n[te] || n[te].code === "" ? q = `${le} deleted` : q = `${le} PIN Disabled` : _.action === "pin_code_added" ? q = `${le} PIN Enabled` : q += ` by ${le}`;
            } else
              _ != null && _.source && (q += ` (${_.source})`);
            return /* @__PURE__ */ w.jsx(ls, { divider: !0, children: /* @__PURE__ */ w.jsx(
              as,
              {
                primary: q,
                secondary: ue(_.timestamp)
              }
            ) }, G);
          })
        ] }) })
      ] }),
      /* @__PURE__ */ w.jsxs(
        hE,
        {
          open: c || !!a,
          onClose: Y,
          fullWidth: !0,
          container: je.current,
          children: [
            /* @__PURE__ */ w.jsx(LE, { children: c ? "Add User" : `Edit Slot ${a}` }),
            /* @__PURE__ */ w.jsxs(_E, { dividers: !0, children: [
              /* @__PURE__ */ w.jsx(
                Ir,
                {
                  margin: "dense",
                  label: "Name",
                  fullWidth: !0,
                  value: p,
                  onChange: (_) => C(_.target.value)
                }
              ),
              /* @__PURE__ */ w.jsx(
                Ir,
                {
                  margin: "dense",
                  label: "Code",
                  fullWidth: !0,
                  type: L ? "text" : "password",
                  value: S,
                  onChange: (_) => x(_.target.value),
                  InputProps: {
                    endAdornment: /* @__PURE__ */ w.jsx(AP, { position: "end", children: /* @__PURE__ */ w.jsx(
                      vv,
                      {
                        "aria-label": "toggle password visibility",
                        onClick: () => I(!L),
                        edge: "end",
                        children: it.createElement("ha-icon", { icon: L ? "mdi:eye-off" : "mdi:eye" })
                      }
                    ) })
                  }
                }
              ),
              /* @__PURE__ */ w.jsx(Kt, { mt: 2, children: /* @__PURE__ */ w.jsxs(Pv, { fullWidth: !0, children: [
                /* @__PURE__ */ w.jsx(_v, { children: "Access Mode" }),
                /* @__PURE__ */ w.jsxs(
                  jv,
                  {
                    value: P,
                    label: "Access Mode",
                    onChange: (_) => h(_.target.value),
                    MenuProps: { container: je.current },
                    children: [
                      /* @__PURE__ */ w.jsx(Za, { value: "Always", children: "Always Active" }),
                      /* @__PURE__ */ w.jsx(Za, { value: "Recurring", children: "Recurring (Weekly)" }),
                      /* @__PURE__ */ w.jsx(Za, { value: "Temporary", children: "Temporary (Date Range)" })
                    ]
                  }
                )
              ] }) }),
              P === "Temporary" && /* @__PURE__ */ w.jsxs(Kt, { mt: 2, children: [
                /* @__PURE__ */ w.jsx(
                  Ir,
                  {
                    label: "Start Date",
                    type: "datetime-local",
                    fullWidth: !0,
                    margin: "dense",
                    InputLabelProps: { shrink: !0 },
                    value: f,
                    onChange: (_) => m(_.target.value)
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Ir,
                  {
                    label: "End Date",
                    type: "datetime-local",
                    fullWidth: !0,
                    margin: "dense",
                    InputLabelProps: { shrink: !0 },
                    value: v,
                    onChange: (_) => E(_.target.value)
                  }
                )
              ] }),
              P === "Recurring" && /* @__PURE__ */ w.jsxs(Kt, { mt: 2, children: [
                /* @__PURE__ */ w.jsx(Ct, { variant: "subtitle2", children: "Days of Week" }),
                /* @__PURE__ */ w.jsx(lP, { row: !0, children: WR.map((_, G) => /* @__PURE__ */ w.jsx(
                  tP,
                  {
                    control: /* @__PURE__ */ w.jsx(O2, { checked: T.includes(G), onChange: () => Z(G) }),
                    label: _
                  },
                  _
                )) }),
                /* @__PURE__ */ w.jsxs(Kt, { display: "flex", gap: 2, mt: 2, children: [
                  /* @__PURE__ */ w.jsx(
                    Ir,
                    {
                      label: "Start Time",
                      type: "time",
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0 },
                      value: b,
                      onChange: (_) => k(_.target.value)
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    Ir,
                    {
                      label: "End Time",
                      type: "time",
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0 },
                      value: $,
                      onChange: (_) => M(_.target.value)
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ w.jsxs(CE, { children: [
              !c && /* @__PURE__ */ w.jsx(tr, { onClick: fe, style: { marginRight: "auto", color: "red" }, children: "Delete" }),
              /* @__PURE__ */ w.jsx(tr, { onClick: Y, children: "Cancel" }),
              /* @__PURE__ */ w.jsx(tr, { onClick: ee, variant: "contained", color: "primary", children: "Save" })
            ] })
          ]
        }
      )
    ] })
  ] });
};
class VR extends it.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, n) {
    console.error("Lock Manager UI Error:", t, n);
  }
  render() {
    var t;
    return this.state.hasError ? /* @__PURE__ */ w.jsxs("div", { style: { padding: "20px", color: "red", backgroundColor: "#fee" }, children: [
      /* @__PURE__ */ w.jsx("h2", { children: "Something went wrong in Lock Manager UI." }),
      /* @__PURE__ */ w.jsx("pre", { children: (t = this.state.error) == null ? void 0 : t.toString() })
    ] }) : this.props.children;
  }
}
const KR = ({ hass: e, narrow: t }) => {
  var o;
  const n = ((o = e == null ? void 0 : e.themes) == null ? void 0 : o.darkMode) ?? !1, r = y.useMemo(() => Ed({
    palette: {
      mode: n ? "dark" : "light"
    }
  }), [n]);
  return /* @__PURE__ */ w.jsx(nb, { theme: r, children: /* @__PURE__ */ w.jsx(HR, { hass: e, narrow: t }) });
};
class GR extends HTMLElement {
  constructor() {
    super(...arguments);
    ko(this, "_hass");
    ko(this, "_narrow", !1);
    ko(this, "root", null);
    ko(this, "cache", null);
  }
  set hass(n) {
    this._hass = n, this.renderReact();
  }
  set narrow(n) {
    this._narrow = n, this.renderReact();
  }
  renderReact() {
    this.root && this.cache && this.root.render(
      /* @__PURE__ */ w.jsx($g, { value: this.cache, children: /* @__PURE__ */ w.jsx(VR, { children: /* @__PURE__ */ w.jsx(KR, { hass: this._hass, narrow: this._narrow }) }) })
    );
  }
  connectedCallback() {
    this.style.display = "block", this.cache = id({
      key: "z2m-lock",
      container: this
    }), this.root = eu.createRoot(this), this.renderReact();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.define("z2m-lock-manager", GR);
