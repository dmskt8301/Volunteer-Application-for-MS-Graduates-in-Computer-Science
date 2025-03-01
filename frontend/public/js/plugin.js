!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var h = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            (s = e.getAttribute("id"))
              ? (s = s.replace(re, ie))
              : e.setAttribute("id", (s = k)),
              (o = (l = h(t)).length);
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  var T = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof k ? t[0] : t),
          k.merge(
            this,
            k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          D.test(r[1]) && k.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(k)
      : k.makeArray(e, this);
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = k.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith)
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(k(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(R) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || k.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              J.set(this, n);
            })
          : _(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = J.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  J.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
      );
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && k.find.matchesSelector(ie, i),
          n.guid || (n.guid = k.guid++),
          (u = v.events) || (u = v.events = {}),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(R) || [""]).length);
        while (l--)
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = k.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        (a = k.event.handlers.call(this, s, l)), (t = 0);
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          (s.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      k.event.special[e] = {
        setup: function () {
          return De(this, e, Ne), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
              while (n--) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function () {
            var e = dt(this, k.extend({}, t), o);
            (i || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, xt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = k(this)), (r = bt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(wt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r);
            t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
            t
              ? Q.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          },
        };
      });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Pt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Ut[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === k.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});

(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = e.ownerDocument.defaultView,
      n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function o(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }
  function p(e) {
    if (!e) return document.documentElement;
    for (
      var o = r(10) ? document.body : null, n = e.offsetParent || null;
      n === o && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === t(n, "position")
        ? p(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function s(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
  }
  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }
  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }
  function l(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      o = "top" === t ? "scrollTop" : "scrollLeft",
      n = e.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }
    return e[o];
  }
  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = l(t, "top"),
      i = l(t, "left"),
      r = o ? -1 : 1;
    return (
      (e.top += n * r),
      (e.bottom += n * r),
      (e.left += i * r),
      (e.right += i * r),
      e
    );
  }
  function m(e, t) {
    var o = "x" === t ? "Left" : "Top",
      n = "Left" == o ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + o + "Width"], 10) +
      parseFloat(e["border" + n + "Width"], 10)
    );
  }
  function h(e, t, o, n) {
    return ee(
      t["offset" + e],
      t["scroll" + e],
      o["client" + e],
      o["offset" + e],
      o["scroll" + e],
      r(10)
        ? parseInt(o["offset" + e]) +
            parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) +
            parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")])
        : 0
    );
  }
  function c(e) {
    var t = e.body,
      o = e.documentElement,
      n = r(10) && getComputedStyle(o);
    return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
  }
  function g(e) {
    return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, "top"),
          i = l(e, "left");
        (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
      } else o = e.getBoundingClientRect();
    } catch (t) {}
    var p = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
      d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top,
      f = e.offsetWidth - d,
      h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
    }
    return g(p);
  }
  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      p = r(10),
      s = "HTML" === o.nodeName,
      d = u(e),
      a = u(o),
      l = n(e),
      m = t(o),
      h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height,
    });
    if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
      var w = parseFloat(m.marginTop, 10),
        y = parseFloat(m.marginLeft, 10);
      (b.top -= h - w),
        (b.bottom -= h - w),
        (b.left -= c - y),
        (b.right -= c - y),
        (b.marginTop = w),
        (b.marginLeft = y);
    }
    return (
      (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) &&
        (b = f(b, o)),
      b
    );
  }
  function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = b(e, o),
      i = ee(o.clientWidth, window.innerWidth || 0),
      r = ee(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o),
      s = t ? 0 : l(o, "left"),
      d = {
        top: p - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: i,
        height: r,
      };
    return g(d);
  }
  function y(e) {
    var n = e.nodeName;
    if ("BODY" === n || "HTML" === n) return !1;
    if ("fixed" === t(e, "position")) return !0;
    var i = o(e);
    return !!i && y(i);
  }
  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && "none" === t(o, "transform"); )
      o = o.parentElement;
    return o || document.documentElement;
  }
  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = { top: 0, left: 0 },
      d = p ? E(e) : a(e, t);
    if ("viewport" === r) s = w(d, p);
    else {
      var l;
      "scrollParent" === r
        ? ((l = n(o(t))),
          "BODY" === l.nodeName && (l = e.ownerDocument.documentElement))
        : "window" === r
        ? (l = e.ownerDocument.documentElement)
        : (l = r);
      var f = b(l, d, p);
      if ("HTML" === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
          h = m.height,
          g = m.width;
        (s.top += f.top - f.marginTop),
          (s.bottom = h + f.top),
          (s.left += f.left - f.marginLeft),
          (s.right = g + f.left);
      } else s = f;
    }
    i = i || 0;
    var u = "number" == typeof i;
    return (
      (s.left += u ? i : i.left || 0),
      (s.top += u ? i : i.top || 0),
      (s.right -= u ? i : i.right || 0),
      (s.bottom -= u ? i : i.bottom || 0),
      s
    );
  }
  function x(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var p = v(o, n, r, i),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return fe({ key: e }, s[e], { area: x(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= o.clientWidth && n >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split("-")[1];
    return l + (f ? "-" + f : "");
  }
  function L(e, t, o) {
    var n =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }
  function S(e) {
    var t = e.ownerDocument.defaultView,
      o = t.getComputedStyle(e),
      n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
      i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
      r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
    return r;
  }
  function T(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function D(e, t, o) {
    o = o.split("-")[0];
    var n = S(e),
      i = { width: n.width, height: n.height },
      r = -1 !== ["right", "left"].indexOf(o),
      p = r ? "top" : "left",
      s = r ? "left" : "top",
      d = r ? "height" : "width",
      a = r ? "width" : "height";
    return (
      (i[p] = t[p] + t[d] / 2 - n[d] / 2),
      (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
      i
    );
  }
  function C(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o;
      });
    var n = C(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }
  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
    return (
      i.forEach(function (t) {
        t["function"] &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t["function"] || t.fn;
        t.enabled &&
          e(n) &&
          ((o.offsets.popper = g(o.offsets.popper)),
          (o.offsets.reference = g(o.offsets.reference)),
          (o = n(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = L(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (e.placement = O(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = D(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (e = P(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        n = e.enabled;
      return n && o === t;
    });
  }
  function H(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length;
      n++
    ) {
      var i = t[n],
        r = i ? "" + i + o : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function B() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[H("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function M(e, t, o, i) {
    var r = "BODY" === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, { passive: !0 }),
      r || M(n(p.parentNode), t, o, i),
      i.push(p);
  }
  function F(e, t, o, i) {
    (o.updateBound = i),
      A(e).addEventListener("resize", o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      M(r, "scroll", o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function I() {
    this.state.eventsEnabled ||
      (this.state = F(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function R(e, t) {
    return (
      A(e).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function U() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = R(this.reference, this.state)));
  }
  function Y(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
        Y(t[o]) &&
        (n = "px"),
        (e.style[o] = t[o] + n);
    });
  }
  function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function q(e, t) {
    var o = e.offsets,
      n = o.popper,
      i = o.reference,
      r = $,
      p = function (e) {
        return e;
      },
      s = r(i.width),
      d = r(n.width),
      a = -1 !== ["left", "right"].indexOf(e.placement),
      l = -1 !== e.placement.indexOf("-"),
      f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
      m = t ? r : p;
    return {
      left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
      top: m(n.top),
      bottom: m(n.bottom),
      right: f(n.right),
    };
  }
  function K(e, t, o) {
    var n = C(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      i =
        !!n &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < n.order;
        });
    if (!i) {
      var r = "`" + t + "`";
      console.warn(
        "`" +
          o +
          "`" +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return i;
  }
  function z(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ce.indexOf(e),
      n = ce.slice(o + 1).concat(ce.slice(0, o));
    return t ? n.reverse() : n;
  }
  function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2];
    if (!r) return e;
    if (0 === p.indexOf("%")) {
      var s;
      switch (p) {
        case "%p":
          s = o;
          break;
        case "%":
        case "%r":
        default:
          s = n;
      }
      var d = g(s);
      return (d[t] / 100) * r;
    }
    if ("vh" === p || "vw" === p) {
      var a;
      return (
        (a =
          "vh" === p
            ? ee(document.documentElement.clientHeight, window.innerHeight || 0)
            : ee(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function X(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ["right", "left"].indexOf(n),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(
        C(p, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ];
    return (
      (a = a.map(function (e, n) {
        var i = (1 === n ? !r : r) ? "height" : "width",
          p = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return _(e, i, t, o);
          });
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, n) {
          Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
        });
      }),
      i
    );
  }
  function J(e, t) {
    var o,
      n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split("-")[0];
    return (
      (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
      "left" === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : "right" === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : "top" === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var Q = Math.min,
      Z = Math.floor,
      $ = Math.round,
      ee = Math.max,
      te = "undefined" != typeof window && "undefined" != typeof document,
      oe = ["Edge", "Trident", "Firefox"],
      ne = 0,
      ie = 0;
    ie < oe.length;
    ie += 1
  )
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;
      break;
    }
  var i = te && window.Promise,
    re = i
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, ne));
          };
        },
    pe = te && !!(window.MSInputMethodContext && document.documentMode),
    se = te && /MSIE 10/.test(navigator.userAgent),
    de = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    ae = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    })(),
    le = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    fe =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var n in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      },
    me = te && /Firefox/i.test(navigator.userAgent),
    he = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    ce = he.slice(3),
    ge = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    ue = (function () {
      function t(o, n) {
        var i = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        de(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = re(this.update.bind(this))),
          (this.options = fe({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o && o.jquery ? o[0] : o),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = fe(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return fe({ name: e }, i.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        ae(t, [
          {
            key: "update",
            value: function () {
              return k.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return B.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return I.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return U.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (ue.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (ue.placements = he),
    (ue.Defaults = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              n = t.split("-")[1];
            if (n) {
              var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ["bottom", "top"].indexOf(o),
                d = s ? "left" : "top",
                a = s ? "width" : "height",
                l = {
                  start: le({}, d, r[d]),
                  end: le({}, d, r[d] + r[a] - p[a]),
                };
              e.offsets.popper = fe({}, p, l[n]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: J, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || p(e.instance.popper);
            e.instance.reference === o && (o = p(o));
            var n = H("transform"),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
            (i.top = ""), (i.left = ""), (i[n] = "");
            var a = v(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              o,
              e.positionFixed
            );
            (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
            var l = t.priority,
              f = e.offsets.popper,
              m = {
                primary: function (e) {
                  var o = f[e];
                  return (
                    f[e] < a[e] &&
                      !t.escapeWithReference &&
                      (o = ee(f[e], a[e])),
                    le({}, e, o)
                  );
                },
                secondary: function (e) {
                  var o = "right" === e ? "left" : "top",
                    n = f[o];
                  return (
                    f[e] > a[e] &&
                      !t.escapeWithReference &&
                      (n = Q(
                        f[o],
                        a[e] - ("right" === e ? f.width : f.height)
                      )),
                    le({}, o, n)
                  );
                },
              };
            return (
              l.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                f = fe({}, f, m[t](e));
              }),
              (e.offsets.popper = f),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split("-")[0],
              r = Z,
              p = -1 !== ["top", "bottom"].indexOf(i),
              s = p ? "right" : "bottom",
              d = p ? "left" : "top",
              a = p ? "width" : "height";
            return (
              o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
              o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, o) {
            var n;
            if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = o.element;
            if ("string" == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var r = e.placement.split("-")[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ["left", "right"].indexOf(r),
              l = a ? "height" : "width",
              f = a ? "Top" : "Left",
              m = f.toLowerCase(),
              h = a ? "left" : "top",
              c = a ? "bottom" : "right",
              u = S(i)[l];
            d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
              d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
              (e.offsets.popper = g(e.offsets.popper));
            var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w["margin" + f], 10),
              E = parseFloat(w["border" + f + "Width"], 10),
              v = b - e.offsets.popper[m] - y - E;
            return (
              (v = ee(Q(s[l] - u, v), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = ((n = {}), le(n, m, $(v)), le(n, h, ""), n)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (W(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = v(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement,
                e.positionFixed
              ),
              n = e.placement.split("-")[0],
              i = T(n),
              r = e.placement.split("-")[1] || "",
              p = [];
            switch (t.behavior) {
              case ge.FLIP:
                p = [n, i];
                break;
              case ge.CLOCKWISE:
                p = G(n);
                break;
              case ge.COUNTERCLOCKWISE:
                p = G(n, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function (s, d) {
                if (n !== s || p.length === d + 1) return e;
                (n = e.placement.split("-")[0]), (i = T(n));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = Z,
                  m =
                    ("left" === n && f(a.right) > f(l.left)) ||
                    ("right" === n && f(a.left) < f(l.right)) ||
                    ("top" === n && f(a.bottom) > f(l.top)) ||
                    ("bottom" === n && f(a.top) < f(l.bottom)),
                  h = f(a.left) < f(o.left),
                  c = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ("left" === n && h) ||
                    ("right" === n && c) ||
                    ("top" === n && g) ||
                    ("bottom" === n && u),
                  w = -1 !== ["top", "bottom"].indexOf(n),
                  y =
                    !!t.flipVariations &&
                    ((w && "start" === r && h) ||
                      (w && "end" === r && c) ||
                      (!w && "start" === r && g) ||
                      (!w && "end" === r && u));
                (m || b || y) &&
                  ((e.flipped = !0),
                  (m || b) && (n = p[d + 1]),
                  y && (r = z(r)),
                  (e.placement = n + (r ? "-" + r : "")),
                  (e.offsets.popper = fe(
                    {},
                    e.offsets.popper,
                    D(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = P(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ["left", "right"].indexOf(o),
              s = -1 === ["top", "left"].indexOf(o);
            return (
              (i[p ? "left" : "top"] =
                r[o] - (s ? i[p ? "width" : "height"] : 0)),
              (e.placement = T(t)),
              (e.offsets.popper = g(i)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              o = C(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = C(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = "bottom" === o ? "top" : "bottom",
              g = "right" === n ? "left" : "right",
              b = H("transform");
            if (
              ((d =
                "bottom" == c
                  ? "HTML" === l.nodeName
                    ? -l.clientHeight + h.bottom
                    : -f.height + h.bottom
                  : h.top),
              (s =
                "right" == g
                  ? "HTML" === l.nodeName
                    ? -l.clientWidth + h.right
                    : -f.width + h.right
                  : h.left),
              a && b)
            )
              (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                (m[c] = 0),
                (m[g] = 0),
                (m.willChange = "transform");
            else {
              var w = "bottom" == c ? -1 : 1,
                y = "right" == g ? -1 : 1;
              (m[c] = d * w), (m[g] = s * y), (m.willChange = c + ", " + g);
            }
            var E = { "x-placement": e.placement };
            return (
              (e.attributes = fe({}, E, e.attributes)),
              (e.styles = fe({}, m, e.styles)),
              (e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              j(e.instance.popper, e.styles),
              V(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                j(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, o, n, i) {
            var r = L(i, t, e, o.positionFixed),
              p = O(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", p),
              j(t, { position: o.positionFixed ? "fixed" : "absolute" }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    ue
  );
});

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function s(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function r(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function a(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? r(Object(n), !0).forEach(function (e) {
            s(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  (e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e),
    (n =
      n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n);
  function l(t) {
    var n = this,
      i = !1;
    return (
      e(this).one(c.TRANSITION_END, function () {
        i = !0;
      }),
      setTimeout(function () {
        i || c.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  var c = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var n = e(t).css("transition-duration"),
        i = e(t).css("transition-delay"),
        o = parseFloat(n),
        s = parseFloat(i);
      return o || s
        ? ((n = n.split(",")[0]),
          (i = i.split(",")[0]),
          1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      e(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            s = e[i],
            r =
              s && c.isElement(s)
                ? "element"
                : null === (a = s) || "undefined" == typeof a
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(r))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                r +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? c.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  c.jQueryDetection(),
    (e.fn.emulateTransitionEnd = l),
    (e.event.special[c.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var h = "alert",
    u = e.fn[h],
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.alert"), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var n = c.getSelectorFromElement(t),
            i = !1;
          return (
            n && (i = document.querySelector(n)),
            i || (i = e(t).closest(".alert")[0]),
            i
          );
        }),
        (n._triggerCloseEvent = function (t) {
          var n = e.Event("close.bs.alert");
          return e(t).trigger(n), n;
        }),
        (n._removeElement = function (t) {
          var n = this;
          if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
            var i = c.getTransitionDurationFromElement(t);
            e(t)
              .one(c.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(i);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          e(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.alert");
            o || ((o = new t(this)), i.data("bs.alert", o)),
              "close" === n && o[n](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.alert.data-api",
    '[data-dismiss="alert"]',
    d._handleDismiss(new d())
  ),
    (e.fn[h] = d._jQueryInterface),
    (e.fn[h].Constructor = d),
    (e.fn[h].noConflict = function () {
      return (e.fn[h] = u), d._jQueryInterface;
    });
  var f = e.fn.button,
    g = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          var t = !0,
            n = !0,
            i = e(this._element).closest('[data-toggle="buttons"]')[0];
          if (i) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var s = i.querySelector(".active");
                  s && e(s).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                e(o).trigger("change")),
                o.focus(),
                (n = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (n &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && e(this._element).toggleClass("active"));
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.button"), (this._element = null);
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.button");
            i || ((i = new t(this)), e(this).data("bs.button", i)),
              "toggle" === n && i[n]();
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var n = t.target,
        i = n;
      if (
        (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]),
        !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = n.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        "LABEL" === i.tagName &&
          o &&
          "checkbox" === o.type &&
          t.preventDefault(),
          g._jQueryInterface.call(e(n), "toggle");
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    e(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var s = 0,
          r = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        s < r;
        s++
      ) {
        var a = t[s];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add("active")
          : a.classList.remove("active");
      }
    }),
    (e.fn.button = g._jQueryInterface),
    (e.fn.button.Constructor = g),
    (e.fn.button.noConflict = function () {
      return (e.fn.button = f), g._jQueryInterface;
    });
  var m = "carousel",
    p = ".bs.carousel",
    _ = e.fn[m],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    b = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    y = { TOUCH: "touch", PEN: "pen" },
    E = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide("next");
        }),
        (n.nextWhenVisible = function () {
          !document.hidden &&
            e(this._element).is(":visible") &&
            "hidden" !== e(this._element).css("visibility") &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (n.to = function (t) {
          var n = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              e(this._element).one("slid.bs.carousel", function () {
                return n.to(t);
              });
            else {
              if (i === t) return this.pause(), void this.cycle();
              var o = t > i ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (n.dispose = function () {
          e(this._element).off(p),
            e.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = a(a({}, v), t)), c.typeCheckConfig(m, t, b), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (n._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            e(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              e(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && y[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  y[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            e(this._element.querySelectorAll(".carousel-item img")).on(
              "dragstart.bs.carousel",
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("pointerup.bs.carousel", function (t) {
                    return i(t);
                  }),
                  this._element.classList.add("pointer-event"))
                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("touchmove.bs.carousel", function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      e.originalEvent.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  e(this._element).on("touchend.bs.carousel", function (t) {
                    return i(t);
                  }));
          }
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            s = this._items.length - 1;
          if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
            return e;
          var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === r
            ? this._items[this._items.length - 1]
            : this._items[r];
        }),
        (n._triggerSlideEvent = function (t, n) {
          var i = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            s = e.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: n,
              from: o,
              to: i,
            });
          return e(this._element).trigger(s), s;
        }),
        (n._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var n = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            e(n).removeClass("active");
            var i = this._indicatorsElement.children[this._getItemIndex(t)];
            i && e(i).addClass("active");
          }
        }),
        (n._slide = function (t, n) {
          var i,
            o,
            s,
            r = this,
            a = this._element.querySelector(".active.carousel-item"),
            l = this._getItemIndex(a),
            h = n || (a && this._getItemByDirection(t, a)),
            u = this._getItemIndex(h),
            d = Boolean(this._interval);
          if (
            ("next" === t
              ? ((i = "carousel-item-left"),
                (o = "carousel-item-next"),
                (s = "left"))
              : ((i = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (s = "right")),
            h && e(h).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(h, s).isDefaultPrevented() &&
            a &&
            h
          ) {
            (this._isSliding = !0),
              d && this.pause(),
              this._setActiveIndicatorElement(h);
            var f = e.Event("slid.bs.carousel", {
              relatedTarget: h,
              direction: s,
              from: l,
              to: u,
            });
            if (e(this._element).hasClass("slide")) {
              e(h).addClass(o), c.reflow(h), e(a).addClass(i), e(h).addClass(i);
              var g = parseInt(h.getAttribute("data-interval"), 10);
              g
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = g))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = c.getTransitionDurationFromElement(a);
              e(a)
                .one(c.TRANSITION_END, function () {
                  e(h)
                    .removeClass(i + " " + o)
                    .addClass("active"),
                    e(a).removeClass("active " + o + " " + i),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return e(r._element).trigger(f);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              e(a).removeClass("active"),
                e(h).addClass("active"),
                (this._isSliding = !1),
                e(this._element).trigger(f);
            d && this.cycle();
          }
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.carousel"),
              o = a(a({}, v), e(this).data());
            "object" == typeof n && (o = a(a({}, o), n));
            var s = "string" == typeof n ? n : o.slide;
            if (
              (i || ((i = new t(this, o)), e(this).data("bs.carousel", i)),
              "number" == typeof n)
            )
              i.to(n);
            else if ("string" == typeof s) {
              if ("undefined" == typeof i[s])
                throw new TypeError('No method named "' + s + '"');
              i[s]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var i = c.getSelectorFromElement(this);
          if (i) {
            var o = e(i)[0];
            if (o && e(o).hasClass("carousel")) {
              var s = a(a({}, e(o).data()), e(this).data()),
                r = this.getAttribute("data-slide-to");
              r && (s.interval = !1),
                t._jQueryInterface.call(e(o), s),
                r && e(o).data("bs.carousel").to(r),
                n.preventDefault();
            }
          }
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    E._dataApiClickHandler
  ),
    e(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          n = 0,
          i = t.length;
        n < i;
        n++
      ) {
        var o = e(t[n]);
        E._jQueryInterface.call(o, o.data());
      }
    }),
    (e.fn[m] = E._jQueryInterface),
    (e.fn[m].Constructor = E),
    (e.fn[m].noConflict = function () {
      return (e.fn[m] = _), E._jQueryInterface;
    });
  var w = "collapse",
    T = e.fn[w],
    C = { toggle: !0, parent: "" },
    S = { toggle: "boolean", parent: "(string|element)" },
    D = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var s = n[i],
            r = c.getSelectorFromElement(s),
            a = [].slice
              .call(document.querySelectorAll(r))
              .filter(function (e) {
                return e === t;
              });
          null !== r &&
            a.length > 0 &&
            ((this._selector = r), this._triggerArray.push(s));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          e(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (n.show = function () {
          var n,
            i,
            o = this;
          if (
            !this._isTransitioning &&
            !e(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (n = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (n = null),
            !(
              n &&
              (i = e(n).not(this._selector).data("bs.collapse")) &&
              i._isTransitioning
            ))
          ) {
            var s = e.Event("show.bs.collapse");
            if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
              n &&
                (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                i || e(n).data("bs.collapse", null));
              var r = this._getDimension();
              e(this._element).removeClass("collapse").addClass("collapsing"),
                (this._element.style[r] = 0),
                this._triggerArray.length &&
                  e(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  e(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[r] = ""),
                    o.setTransitioning(!1),
                    e(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(l),
                (this._element.style[r] = this._element[a] + "px");
            }
          }
        }),
        (n.hide = function () {
          var t = this;
          if (!this._isTransitioning && e(this._element).hasClass("show")) {
            var n = e.Event("hide.bs.collapse");
            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
              var i = this._getDimension();
              (this._element.style[i] =
                this._element.getBoundingClientRect()[i] + "px"),
                c.reflow(this._element),
                e(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var s = 0; s < o; s++) {
                  var r = this._triggerArray[s],
                    a = c.getSelectorFromElement(r);
                  if (null !== a)
                    e([].slice.call(document.querySelectorAll(a))).hasClass(
                      "show"
                    ) || e(r).addClass("collapsed").attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[i] = "";
              var l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    e(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = a(a({}, C), t)).toggle = Boolean(t.toggle)),
            c.typeCheckConfig(w, t, S),
            t
          );
        }),
        (n._getDimension = function () {
          return e(this._element).hasClass("width") ? "width" : "height";
        }),
        (n._getParent = function () {
          var n,
            i = this;
          c.isElement(this._config.parent)
            ? ((n = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (n = this._config.parent[0]))
            : (n = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            s = [].slice.call(n.querySelectorAll(o));
          return (
            e(s).each(function (e, n) {
              i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, n) {
          var i = e(t).hasClass("show");
          n.length &&
            e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
        }),
        (t._getTargetFromElement = function (t) {
          var e = c.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.collapse"),
              s = a(a(a({}, C), i.data()), "object" == typeof n && n ? n : {});
            if (
              (!o &&
                s.toggle &&
                "string" == typeof n &&
                /show|hide/.test(n) &&
                (s.toggle = !1),
              o || ((o = new t(this, s)), i.data("bs.collapse", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return C;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = e(this),
        i = c.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      e(o).each(function () {
        var t = e(this),
          i = t.data("bs.collapse") ? "toggle" : n.data();
        D._jQueryInterface.call(t, i);
      });
    }
  ),
    (e.fn[w] = D._jQueryInterface),
    (e.fn[w].Constructor = D),
    (e.fn[w].noConflict = function () {
      return (e.fn[w] = T), D._jQueryInterface;
    });
  var k = "dropdown",
    N = e.fn[k],
    A = new RegExp("38|40|27"),
    I = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    O = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    j = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var i = t.prototype;
      return (
        (i.toggle = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled")
          ) {
            var n = e(this._menu).hasClass("show");
            t._clearMenus(), n || this.show(!0);
          }
        }),
        (i.show = function (i) {
          if (
            (void 0 === i && (i = !1),
            !(
              this._element.disabled ||
              e(this._element).hasClass("disabled") ||
              e(this._menu).hasClass("show")
            ))
          ) {
            var o = { relatedTarget: this._element },
              s = e.Event("show.bs.dropdown", o),
              r = t._getParentFromElement(this._element);
            if ((e(r).trigger(s), !s.isDefaultPrevented())) {
              if (!this._inNavbar && i) {
                if ("undefined" == typeof n)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var a = this._element;
                "parent" === this._config.reference
                  ? (a = r)
                  : c.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    e(r).addClass("position-static"),
                  (this._popper = new n(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === e(r).closest(".navbar-nav").length &&
                e(document.body).children().on("mouseover", null, e.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                e(this._menu).toggleClass("show"),
                e(r)
                  .toggleClass("show")
                  .trigger(e.Event("shown.bs.dropdown", o));
            }
          }
        }),
        (i.hide = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled") &&
            e(this._menu).hasClass("show")
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event("hide.bs.dropdown", n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                e(this._menu).toggleClass("show"),
                e(o)
                  .toggleClass("show")
                  .trigger(e.Event("hidden.bs.dropdown", n)));
          }
        }),
        (i.dispose = function () {
          e.removeData(this._element, "bs.dropdown"),
            e(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (i.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i._addEventListeners = function () {
          var t = this;
          e(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (i._getConfig = function (t) {
          return (
            (t = a(
              a(a({}, this.constructor.Default), e(this._element).data()),
              t
            )),
            c.typeCheckConfig(k, t, this.constructor.DefaultType),
            t
          );
        }),
        (i._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (i._getPlacement = function () {
          var t = e(this._element.parentNode),
            n = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (n = e(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (n = "right-start")
              : t.hasClass("dropleft")
              ? (n = "left-start")
              : e(this._menu).hasClass("dropdown-menu-right") &&
                (n = "bottom-end"),
            n
          );
        }),
        (i._detectNavbar = function () {
          return e(this._element).closest(".navbar").length > 0;
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      a({}, e.offsets),
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (i._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a(a({}, t), this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.dropdown");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n ? n : null)),
                e(this).data("bs.dropdown", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        (t._clearMenus = function (n) {
          if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
            for (
              var i = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                s = i.length;
              o < s;
              o++
            ) {
              var r = t._getParentFromElement(i[o]),
                a = e(i[o]).data("bs.dropdown"),
                l = { relatedTarget: i[o] };
              if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                var c = a._menu;
                if (
                  e(r).hasClass("show") &&
                  !(
                    n &&
                    (("click" === n.type &&
                      /input|textarea/i.test(n.target.tagName)) ||
                      ("keyup" === n.type && 9 === n.which)) &&
                    e.contains(r, n.target)
                  )
                ) {
                  var h = e.Event("hide.bs.dropdown", l);
                  e(r).trigger(h),
                    h.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .off("mouseover", null, e.noop),
                      i[o].setAttribute("aria-expanded", "false"),
                      a._popper && a._popper.destroy(),
                      e(c).removeClass("show"),
                      e(r)
                        .removeClass("show")
                        .trigger(e.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = c.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (n) {
          if (
            !(/input|textarea/i.test(n.target.tagName)
              ? 32 === n.which ||
                (27 !== n.which &&
                  ((40 !== n.which && 38 !== n.which) ||
                    e(n.target).closest(".dropdown-menu").length))
              : !A.test(n.which)) &&
            !this.disabled &&
            !e(this).hasClass("disabled")
          ) {
            var i = t._getParentFromElement(this),
              o = e(i).hasClass("show");
            if (o || 27 !== n.which) {
              if (
                (n.preventDefault(),
                n.stopPropagation(),
                !o || (o && (27 === n.which || 32 === n.which)))
              )
                return (
                  27 === n.which &&
                    e(i.querySelector('[data-toggle="dropdown"]')).trigger(
                      "focus"
                    ),
                  void e(this).trigger("click")
                );
              var s = [].slice
                .call(
                  i.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return e(t).is(":visible");
                });
              if (0 !== s.length) {
                var r = s.indexOf(n.target);
                38 === n.which && r > 0 && r--,
                  40 === n.which && r < s.length - 1 && r++,
                  r < 0 && (r = 0),
                  s[r].focus();
              }
            }
          }
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return I;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return O;
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      j._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      j._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        j._jQueryInterface.call(e(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (e.fn[k] = j._jQueryInterface),
    (e.fn[k].Constructor = j),
    (e.fn[k].noConflict = function () {
      return (e.fn[k] = N), j._jQueryInterface;
    });
  var P = e.fn.modal,
    x = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    L = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    R = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var n = t.prototype;
      return (
        (n.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (n.show = function (t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            e(this._element).hasClass("fade") && (this._isTransitioning = !0);
            var i = e.Event("show.bs.modal", { relatedTarget: t });
            e(this._element).trigger(i),
              this._isShown ||
                i.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  function (t) {
                    return n.hide(t);
                  }
                ),
                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                  e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                }));
          }
        }),
        (n.hide = function (t) {
          var n = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var i = e.Event("hide.bs.modal");
            if (
              (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = e(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off("focusin.bs.modal"),
                e(this._element).removeClass("show"),
                e(this._element).off("click.dismiss.bs.modal"),
                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var s = c.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(c.TRANSITION_END, function (t) {
                    return n._hideModal(t);
                  })
                  .emulateTransitionEnd(s);
              } else this._hideModal();
            }
          }
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return e(t).off(".bs.modal");
          }),
            e(document).off("focusin.bs.modal"),
            e.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = a(a({}, x), t)), c.typeCheckConfig("modal", t, L), t;
        }),
        (n._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var n = e.Event("hidePrevented.bs.modal");
            if ((e(this._element).trigger(n), n.defaultPrevented)) return;
            this._element.classList.add("modal-static");
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(c.TRANSITION_END, function () {
                t._element.classList.remove("modal-static");
              })
              .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (n._showElement = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            e(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            i && c.reflow(this._element),
            e(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var s = e.Event("shown.bs.modal", { relatedTarget: t }),
            r = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                e(n._element).trigger(s);
            };
          if (i) {
            var a = c.getTransitionDurationFromElement(this._dialog);
            e(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
          } else r();
        }),
        (n._enforceFocus = function () {
          var t = this;
          e(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (n) {
              document !== n.target &&
                t._element !== n.target &&
                0 === e(t._element).has(n.target).length &&
                t._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
        }),
        (n._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? e(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : e(window).off("resize.bs.modal");
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              e(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger("hidden.bs.modal");
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (e(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on("click.dismiss.bs.modal", function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    n._triggerBackdropTransition();
              }),
              i && c.reflow(this._backdrop),
              e(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!i) return void t();
            var o = c.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            e(this._backdrop).removeClass("show");
            var s = function () {
              n._removeBackdrop(), t && t();
            };
            if (e(this._element).hasClass("fade")) {
              var r = c.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop)
                .one(c.TRANSITION_END, s)
                .emulateTransitionEnd(r);
            } else s();
          } else t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              i = [].slice.call(document.querySelectorAll(".sticky-top"));
            e(n).each(function (n, i) {
              var o = i.style.paddingRight,
                s = e(i).css("padding-right");
              e(i)
                .data("padding-right", o)
                .css("padding-right", parseFloat(s) + t._scrollbarWidth + "px");
            }),
              e(i).each(function (n, i) {
                var o = i.style.marginRight,
                  s = e(i).css("margin-right");
                e(i)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(s) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              s = e(document.body).css("padding-right");
            e(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(s) + this._scrollbarWidth + "px"
              );
          }
          e(document.body).addClass("modal-open");
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          e(t).each(function (t, n) {
            var i = e(n).data("padding-right");
            e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
          });
          var n = [].slice.call(document.querySelectorAll(".sticky-top"));
          e(n).each(function (t, n) {
            var i = e(n).data("margin-right");
            "undefined" != typeof i &&
              e(n).css("margin-right", i).removeData("margin-right");
          });
          var i = e(document.body).data("padding-right");
          e(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = i || "");
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (n, i) {
          return this.each(function () {
            var o = e(this).data("bs.modal"),
              s = a(
                a(a({}, x), e(this).data()),
                "object" == typeof n && n ? n : {}
              );
            if (
              (o || ((o = new t(this, s)), e(this).data("bs.modal", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](i);
            } else s.show && o.show(i);
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return x;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (t) {
      var n,
        i = this,
        o = c.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var s = e(n).data("bs.modal")
        ? "toggle"
        : a(a({}, e(n).data()), e(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var r = e(n).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          r.one("hidden.bs.modal", function () {
            e(i).is(":visible") && i.focus();
          });
      });
      R._jQueryInterface.call(e(n), s, this);
    }
  ),
    (e.fn.modal = R._jQueryInterface),
    (e.fn.modal.Constructor = R),
    (e.fn.modal.noConflict = function () {
      return (e.fn.modal = P), R._jQueryInterface;
    });
  var q = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    F = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Q = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    B =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function H(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        s = [].slice.call(i.body.querySelectorAll("*")),
        r = function (t, n) {
          var i = s[t],
            r = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[r] || []);
          a.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === q.indexOf(n) ||
                  Boolean(t.nodeValue.match(Q) || t.nodeValue.match(B))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  s = i.length;
                o < s;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = s.length;
      a < l;
      a++
    )
      r(a);
    return i.body.innerHTML;
  }
  var U = "tooltip",
    M = e.fn[U],
    W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    V = ["sanitize", "whiteList", "sanitizeFn"],
    z = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    K = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    X = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: F,
      popperConfig: null,
    },
    Y = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    $ = (function () {
      function t(t, e) {
        if ("undefined" == typeof n)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var i = t.prototype;
      return (
        (i.enable = function () {
          this._isEnabled = !0;
        }),
        (i.disable = function () {
          this._isEnabled = !1;
        }),
        (i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (i.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var n = this.constructor.DATA_KEY,
                i = e(t.currentTarget).data(n);
              i ||
                ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(n, i)),
                (i._activeTrigger.click = !i._activeTrigger.click),
                i._isWithActiveTrigger()
                  ? i._enter(null, i)
                  : i._leave(null, i);
            } else {
              if (e(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (i.dispose = function () {
          clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && e(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (i.show = function () {
          var t = this;
          if ("none" === e(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var i = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            e(this.element).trigger(i);
            var o = c.findShadowRoot(this.element),
              s = e.contains(
                null !== o ? o : this.element.ownerDocument.documentElement,
                this.element
              );
            if (i.isDefaultPrevented() || !s) return;
            var r = this.getTipElement(),
              a = c.getUID(this.constructor.NAME);
            r.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && e(r).addClass("fade");
            var l =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              h = this._getAttachment(l);
            this.addAttachmentClass(h);
            var u = this._getContainer();
            e(r).data(this.constructor.DATA_KEY, this),
              e.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || e(r).appendTo(u),
              e(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new n(this.element, r, this._getPopperConfig(h))),
              e(r).addClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().on("mouseover", null, e.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              (t._hoverState = null),
                e(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === n && t._leave(null, t);
            };
            if (e(this.tip).hasClass("fade")) {
              var f = c.getTransitionDurationFromElement(this.tip);
              e(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(f);
            } else d();
          }
        }),
        (i.hide = function (t) {
          var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            s = function () {
              "show" !== n._hoverState &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            };
          if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (e(i).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().off("mouseover", null, e.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              e(this.tip).hasClass("fade"))
            ) {
              var r = c.getTransitionDurationFromElement(i);
              e(i).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
            } else s();
            this._hoverState = "";
          }
        }),
        (i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (i.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (i.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (i.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            e(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            e(t).removeClass("fade show");
        }),
        (i.setElementContent = function (t, n) {
          "object" != typeof n || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = H(n, this.config.whiteList, this.config.sanitizeFn)),
                t.html(n))
              : t.text(n)
            : this.config.html
            ? e(n).parent().is(t) || t.empty().append(n)
            : t.text(e(n).text());
        }),
        (i.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (i._getPopperConfig = function (t) {
          var e = this;
          return a(
            a(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              }
            ),
            this.config.popperConfig
          );
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      a({}, e.offsets),
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (i._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : c.isElement(this.config.container)
            ? e(this.config.container)
            : e(document).find(this.config.container);
        }),
        (i._getAttachment = function (t) {
          return K[t.toUpperCase()];
        }),
        (i._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (n) {
            if ("click" === n)
              e(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== n) {
              var i =
                  "hover" === n
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === n
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              e(t.element)
                .on(i, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            e(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = a(
                  a({}, this.config),
                  {},
                  { trigger: "manual", selector: "" }
                ))
              : this._fixTitle();
        }),
        (i._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (i._enter = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
              ? (n._hoverState = "show")
              : (clearTimeout(n._timeout),
                (n._hoverState = "show"),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      "show" === n._hoverState && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (i._leave = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = "out"),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (i._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (i._getConfig = function (t) {
          var n = e(this.element).data();
          return (
            Object.keys(n).forEach(function (t) {
              -1 !== V.indexOf(t) && delete n[t];
            }),
            "number" ==
              typeof (t = a(
                a(a({}, this.constructor.Default), n),
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            c.typeCheckConfig(U, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = H(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (i._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (i._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(W);
          null !== n && n.length && t.removeClass(n.join(""));
        }),
        (i._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (i._fixTransition = function () {
          var t = this.getTipElement(),
            n = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (e(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.tooltip"),
              o = "object" == typeof n && n;
            if (
              (i || !/dispose|hide/.test(n)) &&
              (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return X;
            },
          },
          {
            key: "NAME",
            get: function () {
              return U;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Y;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return z;
            },
          },
        ]),
        t
      );
    })();
  (e.fn[U] = $._jQueryInterface),
    (e.fn[U].Constructor = $),
    (e.fn[U].noConflict = function () {
      return (e.fn[U] = M), $._jQueryInterface;
    });
  var J = "popover",
    G = e.fn[J],
    Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    tt = a(
      a({}, $.Default),
      {},
      {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }
    ),
    et = a(a({}, $.DefaultType), {}, { content: "(string|element|function)" }),
    nt = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    it = (function (t) {
      var n, i;
      function s() {
        return t.apply(this, arguments) || this;
      }
      (i = t),
        ((n = s).prototype = Object.create(i.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = i);
      var r = s.prototype;
      return (
        (r.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (r.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (r.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (r.setContent = function () {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(".popover-body"), n),
            t.removeClass("fade show");
        }),
        (r._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (r._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(Z);
          null !== n && n.length > 0 && t.removeClass(n.join(""));
        }),
        (s._jQueryInterface = function (t) {
          return this.each(function () {
            var n = e(this).data("bs.popover"),
              i = "object" == typeof t ? t : null;
            if (
              (n || !/dispose|hide/.test(t)) &&
              (n || ((n = new s(this, i)), e(this).data("bs.popover", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        o(s, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return tt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return J;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return nt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return et;
            },
          },
        ]),
        s
      );
    })($);
  (e.fn[J] = it._jQueryInterface),
    (e.fn[J].Constructor = it),
    (e.fn[J].noConflict = function () {
      return (e.fn[J] = G), it._jQueryInterface;
    });
  var ot = "scrollspy",
    st = e.fn[ot],
    rt = { offset: 10, method: "auto", target: "" },
    at = { offset: "number", method: "string", target: "(string|element)" },
    lt = (function () {
      function t(t, n) {
        var i = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
            return i._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var t = this,
            n =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            i = "auto" === this._config.method ? n : this._config.method,
            o = "position" === i ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var n,
                  s = c.getSelectorFromElement(t);
                if ((s && (n = document.querySelector(s)), n)) {
                  var r = n.getBoundingClientRect();
                  if (r.width || r.height) return [e(n)[i]().top + o, s];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.scrollspy"),
            e(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = a(a({}, rt), "object" == typeof t && t ? t : {}))
                .target &&
            c.isElement(t.target)
          ) {
            var n = e(t.target).attr("id");
            n || ((n = c.getUID(ot)), e(t.target).attr("id", n)),
              (t.target = "#" + n);
          }
          return c.typeCheckConfig(ot, t, at), t;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (n._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var n = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            i = e([].slice.call(document.querySelectorAll(n.join(","))));
          i.hasClass("dropdown-item")
            ? (i
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              i.addClass("active"))
            : (i.addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            e(this._scrollElement).trigger("activate.bs.scrollspy", {
              relatedTarget: t,
            });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.scrollspy");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n && n)),
                e(this).data("bs.scrollspy", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return rt;
            },
          },
        ]),
        t
      );
    })();
  e(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        n = t.length;
      n--;

    ) {
      var i = e(t[n]);
      lt._jQueryInterface.call(i, i.data());
    }
  }),
    (e.fn[ot] = lt._jQueryInterface),
    (e.fn[ot].Constructor = lt),
    (e.fn[ot].noConflict = function () {
      return (e.fn[ot] = st), lt._jQueryInterface;
    });
  var ct = e.fn.tab,
    ht = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                e(this._element).hasClass("active")) ||
              e(this._element).hasClass("disabled")
            )
          ) {
            var n,
              i,
              o = e(this._element).closest(".nav, .list-group")[0],
              s = c.getSelectorFromElement(this._element);
            if (o) {
              var r =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              i = (i = e.makeArray(e(o).find(r)))[i.length - 1];
            }
            var a = e.Event("hide.bs.tab", { relatedTarget: this._element }),
              l = e.Event("show.bs.tab", { relatedTarget: i });
            if (
              (i && e(i).trigger(a),
              e(this._element).trigger(l),
              !l.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              s && (n = document.querySelector(s)),
                this._activate(this._element, o);
              var h = function () {
                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                  o = e.Event("shown.bs.tab", { relatedTarget: i });
                e(i).trigger(n), e(t._element).trigger(o);
              };
              n ? this._activate(n, n.parentNode, h) : h();
            }
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (n._activate = function (t, n, i) {
          var o = this,
            s = (
              !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                ? e(n).children(".active")
                : e(n).find("> li > .active")
            )[0],
            r = i && s && e(s).hasClass("fade"),
            a = function () {
              return o._transitionComplete(t, s, i);
            };
          if (s && r) {
            var l = c.getTransitionDurationFromElement(s);
            e(s)
              .removeClass("show")
              .one(c.TRANSITION_END, a)
              .emulateTransitionEnd(l);
          } else a();
        }),
        (n._transitionComplete = function (t, n, i) {
          if (n) {
            e(n).removeClass("active");
            var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
            o && e(o).removeClass("active"),
              "tab" === n.getAttribute("role") &&
                n.setAttribute("aria-selected", !1);
          }
          if (
            (e(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            c.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var s = e(t).closest(".dropdown")[0];
            if (s) {
              var r = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
              e(r).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          i && i();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.tab");
            if (
              (o || ((o = new t(this)), i.data("bs.tab", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.tab.data-api",
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), ht._jQueryInterface.call(e(this), "show");
    }
  ),
    (e.fn.tab = ht._jQueryInterface),
    (e.fn.tab.Constructor = ht),
    (e.fn.tab.noConflict = function () {
      return (e.fn.tab = ct), ht._jQueryInterface;
    });
  var ut = e.fn.toast,
    dt = { animation: "boolean", autohide: "boolean", delay: "number" },
    ft = { animation: !0, autohide: !0, delay: 500 },
    gt = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this,
            n = e.Event("show.bs.toast");
          if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add("fade");
            var i = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                e(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              c.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = c.getTransitionDurationFromElement(this._element);
              e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o);
            } else i();
          }
        }),
        (n.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = e.Event("hide.bs.toast");
            e(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            e(this._element).off("click.dismiss.bs.toast"),
            e.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = a(
              a(a({}, ft), e(this._element).data()),
              "object" == typeof t && t ? t : {}
            )),
            c.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          e(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (n._close = function () {
          var t = this,
            n = function () {
              t._element.classList.add("hide"),
                e(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof n && n)),
                i.data("bs.toast", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](this);
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return dt;
            },
          },
          {
            key: "Default",
            get: function () {
              return ft;
            },
          },
        ]),
        t
      );
    })();
  (e.fn.toast = gt._jQueryInterface),
    (e.fn.toast.Constructor = gt),
    (e.fn.toast.noConflict = function () {
      return (e.fn.toast = ut), gt._jQueryInterface;
    }),
    (t.Alert = d),
    (t.Button = g),
    (t.Carousel = E),
    (t.Collapse = D),
    (t.Dropdown = j),
    (t.Modal = R),
    (t.Popover = it),
    (t.Scrollspy = lt),
    (t.Tab = ht),
    (t.Toast = gt),
    (t.Tooltip = $),
    (t.Util = c),
    Object.defineProperty(t, "__esModule", { value: !0 });
});

!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        (a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, "<", i) &&
                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src") ||
                  f.attr("data-srcset");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : f.is("source")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" === a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? "width:" + c.width + "px;height:" + c.height + "px;"
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")",
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr(
                "src",
                "//www.youtube.com/embed/" +
                  f.id +
                  "?autoplay=1&rel=0&v=" +
                  f.id
              )
            : "vimeo" === f.type
            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
            : "vzaar" === f.type &&
              c.attr(
                "src",
                "//view.vzaar.com/" + f.id + "/player?autoplay=true"
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer
            ? this._controls[b].html("")
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

(function (f) {
  "function" === typeof define && define.amd
    ? define(["jquery"], f)
    : "object" === typeof exports
    ? (module.exports = f(require("jquery")))
    : f(jQuery);
})(function (f) {
  var B = !1,
    F = !1,
    O = 0,
    P = 2e3,
    A = 0,
    J = ["webkit", "ms", "moz", "o"],
    v = window.requestAnimationFrame || !1,
    w = window.cancelAnimationFrame || !1;
  if (!v)
    for (var Q in J) {
      var G = J[Q];
      if ((v = window[G + "RequestAnimationFrame"])) {
        w =
          window[G + "CancelAnimationFrame"] ||
          window[G + "CancelRequestAnimationFrame"];
        break;
      }
    }
  var x = window.MutationObserver || window.WebKitMutationObserver || !1,
    K = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 60,
      mousescrollstep: 24,
      touchbehavior: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: (function () {
        var f = document.getElementsByTagName("script"),
          f = f.length ? f[f.length - 1].src.split("?")[0] : "";
        return 0 < f.split("/").length
          ? f.split("/").slice(0, -1).join("/") + "/"
          : "";
      })(),
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1,
    },
    H = !1,
    R = function () {
      if (H) return H;
      var f = document.createElement("DIV"),
        c = f.style,
        k = navigator.userAgent,
        l = navigator.platform,
        d = {
          haspointerlock:
            "pointerLockElement" in document ||
            "webkitPointerLockElement" in document ||
            "mozPointerLockElement" in document,
        };
      d.isopera = "opera" in window;
      d.isopera12 = d.isopera && "getUserMedia" in navigator;
      d.isoperamini =
        "[object OperaMini]" ===
        Object.prototype.toString.call(window.operamini);
      d.isie = "all" in document && "attachEvent" in f && !d.isopera;
      d.isieold = d.isie && !("msInterpolationMode" in c);
      d.isie7 =
        d.isie &&
        !d.isieold &&
        (!("documentMode" in document) || 7 == document.documentMode);
      d.isie8 =
        d.isie && "documentMode" in document && 8 == document.documentMode;
      d.isie9 = d.isie && "performance" in window && 9 == document.documentMode;
      d.isie10 =
        d.isie && "performance" in window && 10 == document.documentMode;
      d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode;
      d.isieedge12 = navigator.userAgent.match(/Edge\/12\./);
      d.isieedge = "msOverflowStyle" in f;
      d.ismodernie = d.isie11 || d.isieedge;
      d.isie9mobile = /iemobile.9/i.test(k);
      d.isie9mobile && (d.isie9 = !1);
      d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(k);
      d.ismozilla = "MozAppearance" in c;
      d.iswebkit = "WebkitAppearance" in c;
      d.ischrome = "chrome" in window;
      d.ischrome38 = d.ischrome && "touchAction" in c;
      d.ischrome22 = !d.ischrome38 && d.ischrome && d.haspointerlock;
      d.ischrome26 = !d.ischrome38 && d.ischrome && "transition" in c;
      d.cantouch =
        "ontouchstart" in document.documentElement || "ontouchstart" in window;
      d.hasw3ctouch =
        (window.PointerEvent || !1) &&
        (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints);
      d.hasmstouch = !d.hasw3ctouch && (window.MSPointerEvent || !1);
      d.ismac = /^mac$/i.test(l);
      d.isios = d.cantouch && /iphone|ipad|ipod/i.test(l);
      d.isios4 = d.isios && !("seal" in Object);
      d.isios7 = d.isios && "webkitHidden" in document;
      d.isios8 = d.isios && "hidden" in document;
      d.isandroid = /android/i.test(k);
      d.haseventlistener = "addEventListener" in f;
      d.trstyle = !1;
      d.hastransform = !1;
      d.hastranslate3d = !1;
      d.transitionstyle = !1;
      d.hastransition = !1;
      d.transitionend = !1;
      l = [
        "transform",
        "msTransform",
        "webkitTransform",
        "MozTransform",
        "OTransform",
      ];
      for (k = 0; k < l.length; k++)
        if (void 0 !== c[l[k]]) {
          d.trstyle = l[k];
          break;
        }
      d.hastransform = !!d.trstyle;
      d.hastransform &&
        ((c[d.trstyle] = "translate3d(1px,2px,3px)"),
        (d.hastranslate3d = /translate3d/.test(c[d.trstyle])));
      d.transitionstyle = !1;
      d.prefixstyle = "";
      d.transitionend = !1;
      for (
        var l =
            "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(
              " "
            ),
          q = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "),
          t =
            "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(
              " "
            ),
          k = 0;
        k < l.length;
        k++
      )
        if (l[k] in c) {
          d.transitionstyle = l[k];
          d.prefixstyle = q[k];
          d.transitionend = t[k];
          break;
        }
      d.ischrome26 && (d.prefixstyle = q[1]);
      d.hastransition = d.transitionstyle;
      a: {
        k = ["grab", "-webkit-grab", "-moz-grab"];
        if ((d.ischrome && !d.ischrome38) || d.isie) k = [];
        for (l = 0; l < k.length; l++)
          if (((q = k[l]), (c.cursor = q), c.cursor == q)) {
            c = q;
            break a;
          }
        c =
          "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize";
      }
      d.cursorgrabvalue = c;
      d.hasmousecapture = "setCapture" in f;
      d.hasMutationObserver = !1 !== x;
      return (H = d);
    },
    S = function (h, c) {
      function k() {
        var b = a.doc.css(e.trstyle);
        return b && "matrix" == b.substr(0, 6)
          ? b
              .replace(/^.*\((.*)\)$/g, "$1")
              .replace(/px/g, "")
              .split(/, +/)
          : !1;
      }
      function l() {
        var b = a.win;
        if ("zIndex" in b) return b.zIndex();
        for (; 0 < b.length && 9 != b[0].nodeType; ) {
          var g = b.css("zIndex");
          if (!isNaN(g) && 0 != g) return parseInt(g);
          b = b.parent();
        }
        return !1;
      }
      function d(b, g, u) {
        g = b.css(g);
        b = parseFloat(g);
        return isNaN(b)
          ? ((b = z[g] || 0),
            (u =
              3 == b
                ? u
                  ? a.win.outerHeight() - a.win.innerHeight()
                  : a.win.outerWidth() - a.win.innerWidth()
                : 1),
            a.isie8 && b && (b += 1),
            u ? b : 0)
          : b;
      }
      function q(b, g, u, c) {
        a._bind(
          b,
          g,
          function (a) {
            a = a ? a : window.event;
            var c = {
              original: a,
              target: a.target || a.srcElement,
              type: "wheel",
              deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function () {
                a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
                return !1;
              },
              stopImmediatePropagation: function () {
                a.stopImmediatePropagation
                  ? a.stopImmediatePropagation()
                  : (a.cancelBubble = !0);
              },
            };
            "mousewheel" == g
              ? (a.wheelDeltaX && (c.deltaX = -0.025 * a.wheelDeltaX),
                a.wheelDeltaY && (c.deltaY = -0.025 * a.wheelDeltaY),
                c.deltaY || c.deltaX || (c.deltaY = -0.025 * a.wheelDelta))
              : (c.deltaY = a.detail);
            return u.call(b, c);
          },
          c
        );
      }
      function t(b, g, c) {
        var d, e;
        0 == b.deltaMode
          ? ((d = -Math.floor((a.opt.mousescrollstep / 54) * b.deltaX)),
            (e = -Math.floor((a.opt.mousescrollstep / 54) * b.deltaY)))
          : 1 == b.deltaMode &&
            ((d = -Math.floor(b.deltaX * a.opt.mousescrollstep)),
            (e = -Math.floor(b.deltaY * a.opt.mousescrollstep)));
        g &&
          a.opt.oneaxismousemode &&
          0 == d &&
          e &&
          ((d = e),
          (e = 0),
          c &&
            (0 > d
              ? a.getScrollLeft() >= a.page.maxw
              : 0 >= a.getScrollLeft()) &&
            ((e = d), (d = 0)));
        a.isrtlmode && (d = -d);
        d &&
          (a.scrollmom && a.scrollmom.stop(),
          (a.lastdeltax += d),
          a.debounced(
            "mousewheelx",
            function () {
              var b = a.lastdeltax;
              a.lastdeltax = 0;
              a.rail.drag || a.doScrollLeftBy(b);
            },
            15
          ));
        if (e) {
          if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive)
            if (0 > e) {
              if (a.getScrollTop() >= a.page.maxh) return !0;
            } else if (0 >= a.getScrollTop()) return !0;
          a.scrollmom && a.scrollmom.stop();
          a.lastdeltay += e;
          a.synched(
            "mousewheely",
            function () {
              var b = a.lastdeltay;
              a.lastdeltay = 0;
              a.rail.drag || a.doScrollBy(b);
            },
            15
          );
        }
        b.stopImmediatePropagation();
        return b.preventDefault();
      }
      var a = this;
      this.version = "3.6.8";
      this.name = "nicescroll";
      this.me = c;
      this.opt = { doc: f("body"), win: !1 };
      f.extend(this.opt, K);
      this.opt.snapbackspeed = 80;
      if (h) for (var r in a.opt) void 0 !== h[r] && (a.opt[r] = h[r]);
      a.opt.disablemutationobserver && (x = !1);
      this.iddoc =
        (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
      this.ispage = /^BODY|HTML/.test(
        a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName
      );
      this.haswrapper = !1 !== a.opt.win;
      this.win = a.opt.win || (this.ispage ? f(window) : this.doc);
      this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win;
      this.body = f("body");
      this.iframe = this.isfixed = this.viewport = !1;
      this.isiframe =
        "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
      this.istextarea = "TEXTAREA" == this.win[0].nodeName;
      this.forcescreen = !1;
      this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
      this.page =
        this.view =
        this.onzoomout =
        this.onzoomin =
        this.onscrollcancel =
        this.onscrollend =
        this.onscrollstart =
        this.onclick =
        this.ongesturezoom =
        this.onkeypress =
        this.onmousewheel =
        this.onmousemove =
        this.onmouseup =
        this.onmousedown =
          !1;
      this.scroll = { x: 0, y: 0 };
      this.scrollratio = { x: 0, y: 0 };
      this.cursorheight = 20;
      this.scrollvaluemax = 0;
      if ("auto" == this.opt.rtlmode) {
        r = this.win[0] == window ? this.body : this.win;
        var p =
          r.css("writing-mode") ||
          r.css("-webkit-writing-mode") ||
          r.css("-ms-writing-mode") ||
          r.css("-moz-writing-mode");
        "horizontal-tb" == p || "lr-tb" == p || "" == p
          ? ((this.isrtlmode = "rtl" == r.css("direction")),
            (this.isvertical = !1))
          : ((this.isrtlmode =
              "vertical-rl" == p || "tb" == p || "tb-rl" == p || "rl-tb" == p),
            (this.isvertical =
              "vertical-rl" == p || "tb" == p || "tb-rl" == p));
      } else (this.isrtlmode = !0 === this.opt.rtlmode), (this.isvertical = !1);
      this.observerbody =
        this.observerremover =
        this.observer =
        this.scrollmom =
        this.scrollrunning =
          !1;
      do this.id = "ascrail" + P++;
      while (document.getElementById(this.id));
      this.hasmousefocus =
        this.hasfocus =
        this.zoomactive =
        this.zoom =
        this.selectiondrag =
        this.cursorfreezed =
        this.cursor =
        this.rail =
          !1;
      this.visibility = !0;
      this.hidden = this.locked = this.railslocked = !1;
      this.cursoractive = !0;
      this.wheelprevented = !1;
      this.overflowx = a.opt.overflowx;
      this.overflowy = a.opt.overflowy;
      this.nativescrollingarea = !1;
      this.checkarea = 0;
      this.events = [];
      this.saved = {};
      this.delaylist = {};
      this.synclist = {};
      this.lastdeltay = this.lastdeltax = 0;
      this.detected = R();
      var e = f.extend({}, this.detected);
      this.ishwscroll =
        (this.canhwscroll = e.hastransform && a.opt.hwacceleration) &&
        a.haswrapper;
      this.hasreversehr = this.isrtlmode
        ? this.isvertical
          ? !(e.iswebkit || e.isie || e.isie11)
          : !(e.iswebkit || (e.isie && !e.isie10 && !e.isie11))
        : !1;
      this.istouchcapable = !1;
      e.cantouch || (!e.hasw3ctouch && !e.hasmstouch)
        ? !e.cantouch ||
          e.isios ||
          e.isandroid ||
          (!e.iswebkit && !e.ismozilla) ||
          (this.istouchcapable = !0)
        : (this.istouchcapable = !0);
      a.opt.enablemouselockapi ||
        ((e.hasmousecapture = !1), (e.haspointerlock = !1));
      this.debounced = function (b, g, c) {
        a &&
          (a.delaylist[b] ||
            (g.call(a),
            (a.delaylist[b] = {
              h: v(function () {
                a.delaylist[b].fn.call(a);
                a.delaylist[b] = !1;
              }, c),
            })),
          (a.delaylist[b].fn = g));
      };
      var I = !1;
      this.synched = function (b, g) {
        a.synclist[b] = g;
        (function () {
          I ||
            (v(function () {
              if (a) {
                I = !1;
                for (var b in a.synclist) {
                  var g = a.synclist[b];
                  g && g.call(a);
                  a.synclist[b] = !1;
                }
              }
            }),
            (I = !0));
        })();
        return b;
      };
      this.unsynched = function (b) {
        a.synclist[b] && (a.synclist[b] = !1);
      };
      this.css = function (b, g) {
        for (var c in g) a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c]);
      };
      this.scrollTop = function (b) {
        return void 0 === b ? a.getScrollTop() : a.setScrollTop(b);
      };
      this.scrollLeft = function (b) {
        return void 0 === b ? a.getScrollLeft() : a.setScrollLeft(b);
      };
      var D = function (a, g, c, d, e, f, k) {
        this.st = a;
        this.ed = g;
        this.spd = c;
        this.p1 = d || 0;
        this.p2 = e || 1;
        this.p3 = f || 0;
        this.p4 = k || 1;
        this.ts = new Date().getTime();
        this.df = this.ed - this.st;
      };
      D.prototype = {
        B2: function (a) {
          return 3 * a * a * (1 - a);
        },
        B3: function (a) {
          return 3 * a * (1 - a) * (1 - a);
        },
        B4: function (a) {
          return (1 - a) * (1 - a) * (1 - a);
        },
        getNow: function () {
          var a = 1 - (new Date().getTime() - this.ts) / this.spd,
            g = this.B2(a) + this.B3(a) + this.B4(a);
          return 0 > a ? this.ed : this.st + Math.round(this.df * g);
        },
        update: function (a, g) {
          this.st = this.getNow();
          this.ed = a;
          this.spd = g;
          this.ts = new Date().getTime();
          this.df = this.ed - this.st;
          return this;
        },
      };
      if (this.ishwscroll) {
        this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" };
        e.hastranslate3d &&
          e.isios &&
          this.doc.css("-webkit-backface-visibility", "hidden");
        this.getScrollTop = function (b) {
          if (!b) {
            if ((b = k())) return 16 == b.length ? -b[13] : -b[5];
            if (a.timerscroll && a.timerscroll.bz)
              return a.timerscroll.bz.getNow();
          }
          return a.doc.translate.y;
        };
        this.getScrollLeft = function (b) {
          if (!b) {
            if ((b = k())) return 16 == b.length ? -b[12] : -b[4];
            if (a.timerscroll && a.timerscroll.bh)
              return a.timerscroll.bh.getNow();
          }
          return a.doc.translate.x;
        };
        this.notifyScrollEvent = function (a) {
          var g = document.createEvent("UIEvents");
          g.initUIEvent("scroll", !1, !0, window, 1);
          g.niceevent = !0;
          a.dispatchEvent(g);
        };
        var y = this.isrtlmode ? 1 : -1;
        e.hastranslate3d && a.opt.enabletranslate3d
          ? ((this.setScrollTop = function (b, g) {
              a.doc.translate.y = b;
              a.doc.translate.ty = -1 * b + "px";
              a.doc.css(
                e.trstyle,
                "translate3d(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ",0px)"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }),
            (this.setScrollLeft = function (b, g) {
              a.doc.translate.x = b;
              a.doc.translate.tx = b * y + "px";
              a.doc.css(
                e.trstyle,
                "translate3d(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ",0px)"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }))
          : ((this.setScrollTop = function (b, g) {
              a.doc.translate.y = b;
              a.doc.translate.ty = -1 * b + "px";
              a.doc.css(
                e.trstyle,
                "translate(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ")"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }),
            (this.setScrollLeft = function (b, g) {
              a.doc.translate.x = b;
              a.doc.translate.tx = b * y + "px";
              a.doc.css(
                e.trstyle,
                "translate(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ")"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }));
      } else
        (this.getScrollTop = function () {
          return a.docscroll.scrollTop();
        }),
          (this.setScrollTop = function (b) {
            return setTimeout(function () {
              a && a.docscroll.scrollTop(b);
            }, 1);
          }),
          (this.getScrollLeft = function () {
            return a.hasreversehr
              ? a.detected.ismozilla
                ? a.page.maxw - Math.abs(a.docscroll.scrollLeft())
                : a.page.maxw - a.docscroll.scrollLeft()
              : a.docscroll.scrollLeft();
          }),
          (this.setScrollLeft = function (b) {
            return setTimeout(function () {
              if (a)
                return (
                  a.hasreversehr &&
                    (b = a.detected.ismozilla
                      ? -(a.page.maxw - b)
                      : a.page.maxw - b),
                  a.docscroll.scrollLeft(b)
                );
            }, 1);
          });
      this.getTarget = function (a) {
        return a
          ? a.target
            ? a.target
            : a.srcElement
            ? a.srcElement
            : !1
          : !1;
      };
      this.hasParent = function (a, g) {
        if (!a) return !1;
        for (var c = a.target || a.srcElement || a || !1; c && c.id != g; )
          c = c.parentNode || !1;
        return !1 !== c;
      };
      var z = { thin: 1, medium: 3, thick: 5 };
      this.getDocumentScrollOffset = function () {
        return {
          top: window.pageYOffset || document.documentElement.scrollTop,
          left: window.pageXOffset || document.documentElement.scrollLeft,
        };
      };
      this.getOffset = function () {
        if (a.isfixed) {
          var b = a.win.offset(),
            g = a.getDocumentScrollOffset();
          b.top -= g.top;
          b.left -= g.left;
          return b;
        }
        b = a.win.offset();
        if (!a.viewport) return b;
        g = a.viewport.offset();
        return { top: b.top - g.top, left: b.left - g.left };
      };
      this.updateScrollBar = function (b) {
        var g, c, e;
        if (a.ishwscroll)
          a.rail.css({
            height:
              a.win.innerHeight() -
              (a.opt.railpadding.top + a.opt.railpadding.bottom),
          }),
            a.railh &&
              a.railh.css({
                width:
                  a.win.innerWidth() -
                  (a.opt.railpadding.left + a.opt.railpadding.right),
              });
        else {
          var f = a.getOffset();
          g = f.top;
          c = f.left - (a.opt.railpadding.left + a.opt.railpadding.right);
          g += d(a.win, "border-top-width", !0);
          c += a.rail.align
            ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width
            : d(a.win, "border-left-width");
          if ((e = a.opt.railoffset))
            e.top && (g += e.top), e.left && (c += e.left);
          a.railslocked ||
            a.rail.css({
              top: g,
              left: c,
              height:
                (b ? b.h : a.win.innerHeight()) -
                (a.opt.railpadding.top + a.opt.railpadding.bottom),
            });
          a.zoom &&
            a.zoom.css({
              top: g + 1,
              left: 1 == a.rail.align ? c - 20 : c + a.rail.width + 4,
            });
          if (a.railh && !a.railslocked) {
            g = f.top;
            c = f.left;
            if ((e = a.opt.railhoffset))
              e.top && (g += e.top), e.left && (c += e.left);
            b = a.railh.align
              ? g +
                d(a.win, "border-top-width", !0) +
                a.win.innerHeight() -
                a.railh.height
              : g + d(a.win, "border-top-width", !0);
            c += d(a.win, "border-left-width");
            a.railh.css({
              top: b - (a.opt.railpadding.top + a.opt.railpadding.bottom),
              left: c,
              width: a.railh.width,
            });
          }
        }
      };
      this.doRailClick = function (b, g, c) {
        var d;
        a.railslocked ||
          (a.cancelEvent(b),
          g
            ? ((g = c ? a.doScrollLeft : a.doScrollTop),
              (d = c
                ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) *
                  a.scrollratio.x
                : (b.pageY - a.rail.offset().top - a.cursorheight / 2) *
                  a.scrollratio.y),
              g(d))
            : ((g = c ? a.doScrollLeftBy : a.doScrollBy),
              (d = c ? a.scroll.x : a.scroll.y),
              (b = c
                ? b.pageX - a.railh.offset().left
                : b.pageY - a.rail.offset().top),
              (c = c ? a.view.w : a.view.h),
              g(d >= b ? c : -c)));
      };
      a.hasanimationframe = v;
      a.hascancelanimationframe = w;
      a.hasanimationframe
        ? a.hascancelanimationframe ||
          (w = function () {
            a.cancelAnimationFrame = !0;
          })
        : ((v = function (a) {
            return setTimeout(a, 15 - (Math.floor(+new Date() / 1e3) % 16));
          }),
          (w = clearTimeout));
      this.init = function () {
        a.saved.css = [];
        if (e.isie7mobile || e.isoperamini) return !0;
        e.hasmstouch &&
          a.css(a.ispage ? f("html") : a.win, { _touchaction: "none" });
        var b =
          e.ismodernie || e.isie10
            ? { "-ms-overflow-style": "none" }
            : { "overflow-y": "hidden" };
        a.zindex = "auto";
        a.zindex =
          a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : l() || "auto";
        !a.ispage && "auto" != a.zindex && a.zindex > A && (A = a.zindex);
        a.isie &&
          0 == a.zindex &&
          "auto" == a.opt.zindex &&
          (a.zindex = "auto");
        if (!a.ispage || (!e.cantouch && !e.isieold && !e.isie9mobile)) {
          var c = a.docscroll;
          a.ispage && (c = a.haswrapper ? a.win : a.doc);
          e.isie9mobile || a.css(c, b);
          a.ispage &&
            e.isie7 &&
            ("BODY" == a.doc[0].nodeName
              ? a.css(f("html"), { "overflow-y": "hidden" })
              : "HTML" == a.doc[0].nodeName && a.css(f("body"), b));
          !e.isios ||
            a.ispage ||
            a.haswrapper ||
            a.css(f("body"), { "-webkit-overflow-scrolling": "touch" });
          var d = f(document.createElement("div"));
          d.css({
            position: "relative",
            top: 0,
            float: "right",
            width: a.opt.cursorwidth,
            height: 0,
            "background-color": a.opt.cursorcolor,
            border: a.opt.cursorborder,
            "background-clip": "padding-box",
            "-webkit-border-radius": a.opt.cursorborderradius,
            "-moz-border-radius": a.opt.cursorborderradius,
            "border-radius": a.opt.cursorborderradius,
          });
          d.hborder = parseFloat(d.outerHeight() - d.innerHeight());
          d.addClass("nicescroll-cursors");
          a.cursor = d;
          var m = f(document.createElement("div"));
          m.attr("id", a.id);
          m.addClass("nicescroll-rails nicescroll-rails-vr");
          var k,
            h,
            p = ["left", "right", "top", "bottom"],
            L;
          for (L in p)
            (h = p[L]),
              (k = a.opt.railpadding[h])
                ? m.css("padding-" + h, k + "px")
                : (a.opt.railpadding[h] = 0);
          m.append(d);
          m.width = Math.max(parseFloat(a.opt.cursorwidth), d.outerWidth());
          m.css({
            width: m.width + "px",
            zIndex: a.zindex,
            background: a.opt.background,
            cursor: "default",
          });
          m.visibility = !0;
          m.scrollable = !0;
          m.align = "left" == a.opt.railalign ? 0 : 1;
          a.rail = m;
          d = a.rail.drag = !1;
          !a.opt.boxzoom ||
            a.ispage ||
            e.isieold ||
            ((d = document.createElement("div")),
            a.bind(d, "click", a.doZoom),
            a.bind(d, "mouseenter", function () {
              a.zoom.css("opacity", a.opt.cursoropacitymax);
            }),
            a.bind(d, "mouseleave", function () {
              a.zoom.css("opacity", a.opt.cursoropacitymin);
            }),
            (a.zoom = f(d)),
            a.zoom.css({
              cursor: "pointer",
              zIndex: a.zindex,
              backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
              height: 18,
              width: 18,
              backgroundPosition: "0px 0px",
            }),
            a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom),
            e.cantouch &&
              a.opt.gesturezoom &&
              ((a.ongesturezoom = function (b) {
                1.5 < b.scale && a.doZoomIn(b);
                0.8 > b.scale && a.doZoomOut(b);
                return a.cancelEvent(b);
              }),
              a.bind(a.win, "gestureend", a.ongesturezoom)));
          a.railh = !1;
          var n;
          a.opt.horizrailenabled &&
            (a.css(c, { overflowX: "hidden" }),
            (d = f(document.createElement("div"))),
            d.css({
              position: "absolute",
              top: 0,
              height: a.opt.cursorwidth,
              width: 0,
              backgroundColor: a.opt.cursorcolor,
              border: a.opt.cursorborder,
              backgroundClip: "padding-box",
              "-webkit-border-radius": a.opt.cursorborderradius,
              "-moz-border-radius": a.opt.cursorborderradius,
              "border-radius": a.opt.cursorborderradius,
            }),
            e.isieold && d.css("overflow", "hidden"),
            (d.wborder = parseFloat(d.outerWidth() - d.innerWidth())),
            d.addClass("nicescroll-cursors"),
            (a.cursorh = d),
            (n = f(document.createElement("div"))),
            n.attr("id", a.id + "-hr"),
            n.addClass("nicescroll-rails nicescroll-rails-hr"),
            (n.height = Math.max(
              parseFloat(a.opt.cursorwidth),
              d.outerHeight()
            )),
            n.css({
              height: n.height + "px",
              zIndex: a.zindex,
              background: a.opt.background,
            }),
            n.append(d),
            (n.visibility = !0),
            (n.scrollable = !0),
            (n.align = "top" == a.opt.railvalign ? 0 : 1),
            (a.railh = n),
            (a.railh.drag = !1));
          a.ispage
            ? (m.css({ position: "fixed", top: 0, height: "100%" }),
              m.align ? m.css({ right: 0 }) : m.css({ left: 0 }),
              a.body.append(m),
              a.railh &&
                (n.css({ position: "fixed", left: 0, width: "100%" }),
                n.align ? n.css({ bottom: 0 }) : n.css({ top: 0 }),
                a.body.append(n)))
            : (a.ishwscroll
                ? ("static" == a.win.css("position") &&
                    a.css(a.win, { position: "relative" }),
                  (c = "HTML" == a.win[0].nodeName ? a.body : a.win),
                  f(c).scrollTop(0).scrollLeft(0),
                  a.zoom &&
                    (a.zoom.css({
                      position: "absolute",
                      top: 1,
                      right: 0,
                      "margin-right": m.width + 4,
                    }),
                    c.append(a.zoom)),
                  m.css({ position: "absolute", top: 0 }),
                  m.align ? m.css({ right: 0 }) : m.css({ left: 0 }),
                  c.append(m),
                  n &&
                    (n.css({ position: "absolute", left: 0, bottom: 0 }),
                    n.align ? n.css({ bottom: 0 }) : n.css({ top: 0 }),
                    c.append(n)))
                : ((a.isfixed = "fixed" == a.win.css("position")),
                  (c = a.isfixed ? "fixed" : "absolute"),
                  a.isfixed || (a.viewport = a.getViewport(a.win[0])),
                  a.viewport &&
                    ((a.body = a.viewport),
                    0 == /fixed|absolute/.test(a.viewport.css("position")) &&
                      a.css(a.viewport, { position: "relative" })),
                  m.css({ position: c }),
                  a.zoom && a.zoom.css({ position: c }),
                  a.updateScrollBar(),
                  a.body.append(m),
                  a.zoom && a.body.append(a.zoom),
                  a.railh && (n.css({ position: c }), a.body.append(n))),
              e.isios &&
                a.css(a.win, {
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  "-webkit-touch-callout": "none",
                }),
              e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"),
              e.iswebkit &&
                a.opt.disableoutline &&
                a.win.css("outline", "none"));
          !1 === a.opt.autohidemode
            ? ((a.autohidedom = !1),
              a.rail.css({ opacity: a.opt.cursoropacitymax }),
              a.railh && a.railh.css({ opacity: a.opt.cursoropacitymax }))
            : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode
            ? ((a.autohidedom = f().add(a.rail)),
              e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)),
              a.railh && (a.autohidedom = a.autohidedom.add(a.railh)),
              a.railh &&
                e.isie8 &&
                (a.autohidedom = a.autohidedom.add(a.cursorh)))
            : "scroll" == a.opt.autohidemode
            ? ((a.autohidedom = f().add(a.rail)),
              a.railh && (a.autohidedom = a.autohidedom.add(a.railh)))
            : "cursor" == a.opt.autohidemode
            ? ((a.autohidedom = f().add(a.cursor)),
              a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh)))
            : "hidden" == a.opt.autohidemode &&
              ((a.autohidedom = !1), a.hide(), (a.railslocked = !1));
          if (e.isie9mobile)
            (a.scrollmom = new M(a)),
              (a.onmangotouch = function () {
                var b = a.getScrollTop(),
                  c = a.getScrollLeft();
                if (
                  b == a.scrollmom.lastscrolly &&
                  c == a.scrollmom.lastscrollx
                )
                  return !0;
                var g = b - a.mangotouch.sy,
                  d = c - a.mangotouch.sx;
                if (
                  0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(g, 2)))
                ) {
                  var e = 0 > g ? -1 : 1,
                    f = 0 > d ? -1 : 1,
                    u = +new Date();
                  a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                  80 < u - a.mangotouch.tm ||
                  a.mangotouch.dry != e ||
                  a.mangotouch.drx != f
                    ? (a.scrollmom.stop(),
                      a.scrollmom.reset(c, b),
                      (a.mangotouch.sy = b),
                      (a.mangotouch.ly = b),
                      (a.mangotouch.sx = c),
                      (a.mangotouch.lx = c),
                      (a.mangotouch.dry = e),
                      (a.mangotouch.drx = f),
                      (a.mangotouch.tm = u))
                    : (a.scrollmom.stop(),
                      a.scrollmom.update(
                        a.mangotouch.sx - d,
                        a.mangotouch.sy - g
                      ),
                      (a.mangotouch.tm = u),
                      (g = Math.max(
                        Math.abs(a.mangotouch.ly - b),
                        Math.abs(a.mangotouch.lx - c)
                      )),
                      (a.mangotouch.ly = b),
                      (a.mangotouch.lx = c),
                      2 < g &&
                        (a.mangotouch.lazy = setTimeout(function () {
                          a.mangotouch.lazy = !1;
                          a.mangotouch.dry = 0;
                          a.mangotouch.drx = 0;
                          a.mangotouch.tm = 0;
                          a.scrollmom.doMomentum(30);
                        }, 100)));
                }
              }),
              (m = a.getScrollTop()),
              (n = a.getScrollLeft()),
              (a.mangotouch = {
                sy: m,
                ly: m,
                dry: 0,
                sx: n,
                lx: n,
                drx: 0,
                lazy: !1,
                tm: 0,
              }),
              a.bind(a.docscroll, "scroll", a.onmangotouch);
          else {
            if (
              e.cantouch ||
              a.istouchcapable ||
              a.opt.touchbehavior ||
              e.hasmstouch
            ) {
              a.scrollmom = new M(a);
              a.ontouchstart = function (b) {
                if (
                  b.pointerType &&
                  2 != b.pointerType &&
                  "touch" != b.pointerType
                )
                  return !1;
                a.hasmoving = !1;
                if (!a.railslocked) {
                  var c;
                  if (e.hasmstouch)
                    for (c = b.target ? b.target : !1; c; ) {
                      var g = f(c).getNiceScroll();
                      if (0 < g.length && g[0].me == a.me) break;
                      if (0 < g.length) return !1;
                      if ("DIV" == c.nodeName && c.id == a.id) break;
                      c = c.parentNode ? c.parentNode : !1;
                    }
                  a.cancelScroll();
                  if (
                    (c = a.getTarget(b)) &&
                    /INPUT/i.test(c.nodeName) &&
                    /range/i.test(c.type)
                  )
                    return a.stopPropagation(b);
                  !("clientX" in b) &&
                    "changedTouches" in b &&
                    ((b.clientX = b.changedTouches[0].clientX),
                    (b.clientY = b.changedTouches[0].clientY));
                  a.forcescreen &&
                    ((g = b),
                    (b = { original: b.original ? b.original : b }),
                    (b.clientX = g.screenX),
                    (b.clientY = g.screenY));
                  a.rail.drag = {
                    x: b.clientX,
                    y: b.clientY,
                    sx: a.scroll.x,
                    sy: a.scroll.y,
                    st: a.getScrollTop(),
                    sl: a.getScrollLeft(),
                    pt: 2,
                    dl: !1,
                  };
                  if (a.ispage || !a.opt.directionlockdeadzone)
                    a.rail.drag.dl = "f";
                  else {
                    var g = f(window).width(),
                      d = f(window).height(),
                      d = Math.max(
                        0,
                        Math.max(
                          document.body.scrollHeight,
                          document.documentElement.scrollHeight
                        ) - d
                      ),
                      g = Math.max(
                        0,
                        Math.max(
                          document.body.scrollWidth,
                          document.documentElement.scrollWidth
                        ) - g
                      );
                    a.rail.drag.ck =
                      !a.rail.scrollable && a.railh.scrollable
                        ? 0 < d
                          ? "v"
                          : !1
                        : a.rail.scrollable && !a.railh.scrollable
                        ? 0 < g
                          ? "h"
                          : !1
                        : !1;
                    a.rail.drag.ck || (a.rail.drag.dl = "f");
                  }
                  a.opt.touchbehavior &&
                    a.isiframe &&
                    e.isie &&
                    ((g = a.win.position()),
                    (a.rail.drag.x += g.left),
                    (a.rail.drag.y += g.top));
                  a.hasmoving = !1;
                  a.lastmouseup = !1;
                  a.scrollmom.reset(b.clientX, b.clientY);
                  if (!e.cantouch && !this.istouchcapable && !b.pointerType) {
                    if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))
                      return (
                        !a.ispage && e.hasmousecapture && c.setCapture(),
                        a.opt.touchbehavior
                          ? (c.onclick &&
                              !c._onclick &&
                              ((c._onclick = c.onclick),
                              (c.onclick = function (b) {
                                if (a.hasmoving) return !1;
                                c._onclick.call(this, b);
                              })),
                            a.cancelEvent(b))
                          : a.stopPropagation(b)
                      );
                    /SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) &&
                      ((pc = { tg: c, click: !1 }), (a.preventclick = pc));
                  }
                }
              };
              a.ontouchend = function (b) {
                if (!a.rail.drag) return !0;
                if (2 == a.rail.drag.pt) {
                  if (
                    b.pointerType &&
                    2 != b.pointerType &&
                    "touch" != b.pointerType
                  )
                    return !1;
                  a.scrollmom.doMomentum();
                  a.rail.drag = !1;
                  if (
                    a.hasmoving &&
                    ((a.lastmouseup = !0),
                    a.hideCursor(),
                    e.hasmousecapture && document.releaseCapture(),
                    !e.cantouch)
                  )
                    return a.cancelEvent(b);
                } else if (1 == a.rail.drag.pt) return a.onmouseup(b);
              };
              var q = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture;
              a.ontouchmove = function (b, c) {
                if (
                  !a.rail.drag ||
                  (b.targetTouches &&
                    a.opt.preventmultitouchscrolling &&
                    1 < b.targetTouches.length) ||
                  (b.pointerType &&
                    2 != b.pointerType &&
                    "touch" != b.pointerType)
                )
                  return !1;
                if (2 == a.rail.drag.pt) {
                  if (e.cantouch && e.isios && void 0 === b.original) return !0;
                  a.hasmoving = !0;
                  a.preventclick &&
                    !a.preventclick.click &&
                    ((a.preventclick.click = a.preventclick.tg.onclick || !1),
                    (a.preventclick.tg.onclick = a.onpreventclick));
                  b = f.extend({ original: b }, b);
                  "changedTouches" in b &&
                    ((b.clientX = b.changedTouches[0].clientX),
                    (b.clientY = b.changedTouches[0].clientY));
                  if (a.forcescreen) {
                    var g = b;
                    b = { original: b.original ? b.original : b };
                    b.clientX = g.screenX;
                    b.clientY = g.screenY;
                  }
                  var d,
                    g = (d = 0);
                  q &&
                    !c &&
                    ((d = a.win.position()), (g = -d.left), (d = -d.top));
                  var u = b.clientY + d;
                  d = u - a.rail.drag.y;
                  var m = b.clientX + g,
                    k = m - a.rail.drag.x,
                    h = a.rail.drag.st - d;
                  a.ishwscroll && a.opt.bouncescroll
                    ? 0 > h
                      ? (h = Math.round(h / 2))
                      : h > a.page.maxh &&
                        (h = a.page.maxh + Math.round((h - a.page.maxh) / 2))
                    : (0 > h && (u = h = 0),
                      h > a.page.maxh && ((h = a.page.maxh), (u = 0)));
                  var l;
                  a.railh &&
                    a.railh.scrollable &&
                    ((l = a.isrtlmode
                      ? k - a.rail.drag.sl
                      : a.rail.drag.sl - k),
                    a.ishwscroll && a.opt.bouncescroll
                      ? 0 > l
                        ? (l = Math.round(l / 2))
                        : l > a.page.maxw &&
                          (l = a.page.maxw + Math.round((l - a.page.maxw) / 2))
                      : (0 > l && (m = l = 0),
                        l > a.page.maxw && ((l = a.page.maxw), (m = 0))));
                  g = !1;
                  if (a.rail.drag.dl)
                    (g = !0),
                      "v" == a.rail.drag.dl
                        ? (l = a.rail.drag.sl)
                        : "h" == a.rail.drag.dl && (h = a.rail.drag.st);
                  else {
                    d = Math.abs(d);
                    var k = Math.abs(k),
                      C = a.opt.directionlockdeadzone;
                    if ("v" == a.rail.drag.ck) {
                      if (d > C && k <= 0.3 * d) return (a.rail.drag = !1), !0;
                      k > C &&
                        ((a.rail.drag.dl = "f"),
                        f("body").scrollTop(f("body").scrollTop()));
                    } else if ("h" == a.rail.drag.ck) {
                      if (k > C && d <= 0.3 * k) return (a.rail.drag = !1), !0;
                      d > C &&
                        ((a.rail.drag.dl = "f"),
                        f("body").scrollLeft(f("body").scrollLeft()));
                    }
                  }
                  a.synched("touchmove", function () {
                    a.rail.drag &&
                      2 == a.rail.drag.pt &&
                      (a.prepareTransition && a.prepareTransition(0),
                      a.rail.scrollable && a.setScrollTop(h),
                      a.scrollmom.update(m, u),
                      a.railh && a.railh.scrollable
                        ? (a.setScrollLeft(l), a.showCursor(h, l))
                        : a.showCursor(h),
                      e.isie10 && document.selection.clear());
                  });
                  e.ischrome && a.istouchcapable && (g = !1);
                  if (g) return a.cancelEvent(b);
                } else if (1 == a.rail.drag.pt) return a.onmousemove(b);
              };
            }
            a.onmousedown = function (b, c) {
              if (!a.rail.drag || 1 == a.rail.drag.pt) {
                if (a.railslocked) return a.cancelEvent(b);
                a.cancelScroll();
                a.rail.drag = {
                  x: b.clientX,
                  y: b.clientY,
                  sx: a.scroll.x,
                  sy: a.scroll.y,
                  pt: 1,
                  hr: !!c,
                };
                var g = a.getTarget(b);
                !a.ispage && e.hasmousecapture && g.setCapture();
                a.isiframe &&
                  !e.hasmousecapture &&
                  ((a.saved.csspointerevents = a.doc.css("pointer-events")),
                  a.css(a.doc, { "pointer-events": "none" }));
                a.hasmoving = !1;
                return a.cancelEvent(b);
              }
            };
            a.onmouseup = function (b) {
              if (a.rail.drag) {
                if (1 != a.rail.drag.pt) return !0;
                e.hasmousecapture && document.releaseCapture();
                a.isiframe &&
                  !e.hasmousecapture &&
                  a.doc.css("pointer-events", a.saved.csspointerevents);
                a.rail.drag = !1;
                a.hasmoving && a.triggerScrollEnd();
                return a.cancelEvent(b);
              }
            };
            a.onmousemove = function (b) {
              if (a.rail.drag) {
                if (1 == a.rail.drag.pt) {
                  if (e.ischrome && 0 == b.which) return a.onmouseup(b);
                  a.cursorfreezed = !0;
                  a.hasmoving = !0;
                  if (a.rail.drag.hr) {
                    a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
                    0 > a.scroll.x && (a.scroll.x = 0);
                    var c = a.scrollvaluemaxw;
                    a.scroll.x > c && (a.scroll.x = c);
                  } else
                    (a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y)),
                      0 > a.scroll.y && (a.scroll.y = 0),
                      (c = a.scrollvaluemax),
                      a.scroll.y > c && (a.scroll.y = c);
                  a.synched("mousemove", function () {
                    a.rail.drag &&
                      1 == a.rail.drag.pt &&
                      (a.showCursor(),
                      a.rail.drag.hr
                        ? a.hasreversehr
                          ? a.doScrollLeft(
                              a.scrollvaluemaxw -
                                Math.round(a.scroll.x * a.scrollratio.x),
                              a.opt.cursordragspeed
                            )
                          : a.doScrollLeft(
                              Math.round(a.scroll.x * a.scrollratio.x),
                              a.opt.cursordragspeed
                            )
                        : a.doScrollTop(
                            Math.round(a.scroll.y * a.scrollratio.y),
                            a.opt.cursordragspeed
                          ));
                  });
                  return a.cancelEvent(b);
                }
              } else a.checkarea = 0;
            };
            if (e.cantouch || a.opt.touchbehavior)
              (a.onpreventclick = function (b) {
                if (a.preventclick)
                  return (
                    (a.preventclick.tg.onclick = a.preventclick.click),
                    (a.preventclick = !1),
                    a.cancelEvent(b)
                  );
              }),
                a.bind(a.win, "mousedown", a.ontouchstart),
                (a.onclick = e.isios
                  ? !1
                  : function (b) {
                      return a.lastmouseup
                        ? ((a.lastmouseup = !1), a.cancelEvent(b))
                        : !0;
                    }),
                a.opt.grabcursorenabled &&
                  e.cursorgrabvalue &&
                  (a.css(a.ispage ? a.doc : a.win, {
                    cursor: e.cursorgrabvalue,
                  }),
                  a.css(a.rail, { cursor: e.cursorgrabvalue }));
            else {
              var r = function (b) {
                if (a.selectiondrag) {
                  if (b) {
                    var c = a.win.outerHeight();
                    b = b.pageY - a.selectiondrag.top;
                    0 < b && b < c && (b = 0);
                    b >= c && (b -= c);
                    a.selectiondrag.df = b;
                  }
                  0 != a.selectiondrag.df &&
                    (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)),
                    a.debounced(
                      "doselectionscroll",
                      function () {
                        r();
                      },
                      50
                    ));
                }
              };
              a.hasTextSelected =
                "getSelection" in document
                  ? function () {
                      return 0 < document.getSelection().rangeCount;
                    }
                  : "selection" in document
                  ? function () {
                      return "None" != document.selection.type;
                    }
                  : function () {
                      return !1;
                    };
              a.onselectionstart = function (b) {
                a.ispage || (a.selectiondrag = a.win.offset());
              };
              a.onselectionend = function (b) {
                a.selectiondrag = !1;
              };
              a.onselectiondrag = function (b) {
                a.selectiondrag &&
                  a.hasTextSelected() &&
                  a.debounced(
                    "selectionscroll",
                    function () {
                      r(b);
                    },
                    250
                  );
              };
            }
            e.hasw3ctouch
              ? (a.css(a.rail, { "touch-action": "none" }),
                a.css(a.cursor, { "touch-action": "none" }),
                a.bind(a.win, "pointerdown", a.ontouchstart),
                a.bind(document, "pointerup", a.ontouchend),
                a.bind(document, "pointermove", a.ontouchmove))
              : e.hasmstouch
              ? (a.css(a.rail, { "-ms-touch-action": "none" }),
                a.css(a.cursor, { "-ms-touch-action": "none" }),
                a.bind(a.win, "MSPointerDown", a.ontouchstart),
                a.bind(document, "MSPointerUp", a.ontouchend),
                a.bind(document, "MSPointerMove", a.ontouchmove),
                a.bind(a.cursor, "MSGestureHold", function (a) {
                  a.preventDefault();
                }),
                a.bind(a.cursor, "contextmenu", function (a) {
                  a.preventDefault();
                }))
              : this.istouchcapable &&
                (a.bind(a.win, "touchstart", a.ontouchstart),
                a.bind(document, "touchend", a.ontouchend),
                a.bind(document, "touchcancel", a.ontouchend),
                a.bind(document, "touchmove", a.ontouchmove));
            if (
              a.opt.cursordragontouch ||
              (!e.cantouch && !a.opt.touchbehavior)
            )
              a.rail.css({ cursor: "default" }),
                a.railh && a.railh.css({ cursor: "default" }),
                a.jqbind(a.rail, "mouseenter", function () {
                  if (!a.ispage && !a.win.is(":visible")) return !1;
                  a.canshowonmouseevent && a.showCursor();
                  a.rail.active = !0;
                }),
                a.jqbind(a.rail, "mouseleave", function () {
                  a.rail.active = !1;
                  a.rail.drag || a.hideCursor();
                }),
                a.opt.sensitiverail &&
                  (a.bind(a.rail, "click", function (b) {
                    a.doRailClick(b, !1, !1);
                  }),
                  a.bind(a.rail, "dblclick", function (b) {
                    a.doRailClick(b, !0, !1);
                  }),
                  a.bind(a.cursor, "click", function (b) {
                    a.cancelEvent(b);
                  }),
                  a.bind(a.cursor, "dblclick", function (b) {
                    a.cancelEvent(b);
                  })),
                a.railh &&
                  (a.jqbind(a.railh, "mouseenter", function () {
                    if (!a.ispage && !a.win.is(":visible")) return !1;
                    a.canshowonmouseevent && a.showCursor();
                    a.rail.active = !0;
                  }),
                  a.jqbind(a.railh, "mouseleave", function () {
                    a.rail.active = !1;
                    a.rail.drag || a.hideCursor();
                  }),
                  a.opt.sensitiverail &&
                    (a.bind(a.railh, "click", function (b) {
                      a.doRailClick(b, !1, !0);
                    }),
                    a.bind(a.railh, "dblclick", function (b) {
                      a.doRailClick(b, !0, !0);
                    }),
                    a.bind(a.cursorh, "click", function (b) {
                      a.cancelEvent(b);
                    }),
                    a.bind(a.cursorh, "dblclick", function (b) {
                      a.cancelEvent(b);
                    })));
            e.cantouch || a.opt.touchbehavior
              ? (a.bind(
                  e.hasmousecapture ? a.win : document,
                  "mouseup",
                  a.ontouchend
                ),
                a.bind(document, "mousemove", a.ontouchmove),
                a.onclick && a.bind(document, "click", a.onclick),
                a.opt.cursordragontouch
                  ? (a.bind(a.cursor, "mousedown", a.onmousedown),
                    a.bind(a.cursor, "mouseup", a.onmouseup),
                    a.cursorh &&
                      a.bind(a.cursorh, "mousedown", function (b) {
                        a.onmousedown(b, !0);
                      }),
                    a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup))
                  : (a.bind(a.rail, "mousedown", function (a) {
                      a.preventDefault();
                    }),
                    a.railh &&
                      a.bind(a.railh, "mousedown", function (a) {
                        a.preventDefault();
                      })))
              : (a.bind(
                  e.hasmousecapture ? a.win : document,
                  "mouseup",
                  a.onmouseup
                ),
                a.bind(document, "mousemove", a.onmousemove),
                a.onclick && a.bind(document, "click", a.onclick),
                a.bind(a.cursor, "mousedown", a.onmousedown),
                a.bind(a.cursor, "mouseup", a.onmouseup),
                a.railh &&
                  (a.bind(a.cursorh, "mousedown", function (b) {
                    a.onmousedown(b, !0);
                  }),
                  a.bind(a.cursorh, "mouseup", a.onmouseup)),
                !a.ispage &&
                  a.opt.enablescrollonselection &&
                  (a.bind(a.win[0], "mousedown", a.onselectionstart),
                  a.bind(document, "mouseup", a.onselectionend),
                  a.bind(a.cursor, "mouseup", a.onselectionend),
                  a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend),
                  a.bind(document, "mousemove", a.onselectiondrag)),
                a.zoom &&
                  (a.jqbind(a.zoom, "mouseenter", function () {
                    a.canshowonmouseevent && a.showCursor();
                    a.rail.active = !0;
                  }),
                  a.jqbind(a.zoom, "mouseleave", function () {
                    a.rail.active = !1;
                    a.rail.drag || a.hideCursor();
                  })));
            a.opt.enablemousewheel &&
              (a.isiframe ||
                a.mousewheel(
                  e.isie && a.ispage ? document : a.win,
                  a.onmousewheel
                ),
              a.mousewheel(a.rail, a.onmousewheel),
              a.railh && a.mousewheel(a.railh, a.onmousewheelhr));
            a.ispage ||
              e.cantouch ||
              /HTML|^BODY/.test(a.win[0].nodeName) ||
              (a.win.attr("tabindex") || a.win.attr({ tabindex: O++ }),
              a.jqbind(a.win, "focus", function (b) {
                B = a.getTarget(b).id || !0;
                a.hasfocus = !0;
                a.canshowonmouseevent && a.noticeCursor();
              }),
              a.jqbind(a.win, "blur", function (b) {
                B = !1;
                a.hasfocus = !1;
              }),
              a.jqbind(a.win, "mouseenter", function (b) {
                F = a.getTarget(b).id || !0;
                a.hasmousefocus = !0;
                a.canshowonmouseevent && a.noticeCursor();
              }),
              a.jqbind(a.win, "mouseleave", function () {
                F = !1;
                a.hasmousefocus = !1;
                a.rail.drag || a.hideCursor();
              }));
          }
          a.onkeypress = function (b) {
            if (a.railslocked && 0 == a.page.maxh) return !0;
            b = b ? b : window.e;
            var c = a.getTarget(b);
            if (
              (c &&
                /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) &&
                ((!c.getAttribute("type") && !c.type) ||
                  !/submit|button|cancel/i.tp)) ||
              f(c).attr("contenteditable")
            )
              return !0;
            if (
              a.hasfocus ||
              (a.hasmousefocus && !B) ||
              (a.ispage && !B && !F)
            ) {
              c = b.keyCode;
              if (a.railslocked && 27 != c) return a.cancelEvent(b);
              var g = b.ctrlKey || !1,
                d = b.shiftKey || !1,
                e = !1;
              switch (c) {
                case 38:
                case 63233:
                  a.doScrollBy(72);
                  e = !0;
                  break;
                case 40:
                case 63235:
                  a.doScrollBy(-72);
                  e = !0;
                  break;
                case 37:
                case 63232:
                  a.railh &&
                    (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), (e = !0));
                  break;
                case 39:
                case 63234:
                  a.railh &&
                    (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72),
                    (e = !0));
                  break;
                case 33:
                case 63276:
                  a.doScrollBy(a.view.h);
                  e = !0;
                  break;
                case 34:
                case 63277:
                  a.doScrollBy(-a.view.h);
                  e = !0;
                  break;
                case 36:
                case 63273:
                  a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                  e = !0;
                  break;
                case 35:
                case 63275:
                  a.railh && g
                    ? a.doScrollPos(a.page.maxw, a.page.maxh)
                    : a.doScrollTo(a.page.maxh);
                  e = !0;
                  break;
                case 32:
                  a.opt.spacebarenabled &&
                    (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h),
                    (e = !0));
                  break;
                case 27:
                  a.zoomactive && (a.doZoom(), (e = !0));
              }
              if (e) return a.cancelEvent(b);
            }
          };
          a.opt.enablekeyboard &&
            a.bind(
              document,
              e.isopera && !e.isopera12 ? "keypress" : "keydown",
              a.onkeypress
            );
          a.bind(document, "keydown", function (b) {
            b.ctrlKey && (a.wheelprevented = !0);
          });
          a.bind(document, "keyup", function (b) {
            b.ctrlKey || (a.wheelprevented = !1);
          });
          a.bind(window, "blur", function (b) {
            a.wheelprevented = !1;
          });
          a.bind(window, "resize", a.lazyResize);
          a.bind(window, "orientationchange", a.lazyResize);
          a.bind(window, "load", a.lazyResize);
          if (e.ischrome && !a.ispage && !a.haswrapper) {
            var t = a.win.attr("style"),
              m = parseFloat(a.win.css("width")) + 1;
            a.win.css("width", m);
            a.synched("chromefix", function () {
              a.win.attr("style", t);
            });
          }
          a.onAttributeChange = function (b) {
            a.lazyResize(a.isieold ? 250 : 30);
          };
          a.isie11 ||
            !1 === x ||
            ((a.observerbody = new x(function (b) {
              b.forEach(function (b) {
                if ("attributes" == b.type)
                  return f("body").hasClass("modal-open") &&
                    f("body").hasClass("modal-dialog") &&
                    !f.contains(f(".modal-dialog")[0], a.doc[0])
                    ? a.hide()
                    : a.show();
              });
              if (document.body.scrollHeight != a.page.maxh)
                return a.lazyResize(30);
            })),
            a.observerbody.observe(document.body, {
              childList: !0,
              subtree: !0,
              characterData: !1,
              attributes: !0,
              attributeFilter: ["class"],
            }));
          a.ispage ||
            a.haswrapper ||
            (!1 !== x
              ? ((a.observer = new x(function (b) {
                  b.forEach(a.onAttributeChange);
                })),
                a.observer.observe(a.win[0], {
                  childList: !0,
                  characterData: !1,
                  attributes: !0,
                  subtree: !1,
                }),
                (a.observerremover = new x(function (b) {
                  b.forEach(function (b) {
                    if (0 < b.removedNodes.length)
                      for (var c in b.removedNodes)
                        if (a && b.removedNodes[c] == a.win[0])
                          return a.remove();
                  });
                })),
                a.observerremover.observe(a.win[0].parentNode, {
                  childList: !0,
                  characterData: !1,
                  attributes: !1,
                  subtree: !1,
                }))
              : (a.bind(
                  a.win,
                  e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified",
                  a.onAttributeChange
                ),
                e.isie9 &&
                  a.win[0].attachEvent("onpropertychange", a.onAttributeChange),
                a.bind(a.win, "DOMNodeRemoved", function (b) {
                  b.target == a.win[0] && a.remove();
                })));
          !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
          a.istextarea &&
            (a.bind(a.win, "keydown", a.lazyResize),
            a.bind(a.win, "mouseup", a.lazyResize));
          a.lazyResize(30);
        }
        if ("IFRAME" == this.doc[0].nodeName) {
          var N = function () {
            a.iframexd = !1;
            var c;
            try {
              c =
                "contentDocument" in this
                  ? this.contentDocument
                  : this.contentWindow.document;
            } catch (g) {
              (a.iframexd = !0), (c = !1);
            }
            if (a.iframexd)
              return (
                "console" in window &&
                  console.log("NiceScroll error: policy restriced iframe"),
                !0
              );
            a.forcescreen = !0;
            a.isiframe &&
              ((a.iframe = {
                doc: f(c),
                html: a.doc.contents().find("html")[0],
                body: a.doc.contents().find("body")[0],
              }),
              (a.getContentSize = function () {
                return {
                  w: Math.max(
                    a.iframe.html.scrollWidth,
                    a.iframe.body.scrollWidth
                  ),
                  h: Math.max(
                    a.iframe.html.scrollHeight,
                    a.iframe.body.scrollHeight
                  ),
                };
              }),
              (a.docscroll = f(a.iframe.body)));
            if (!e.isios && a.opt.iframeautoresize && !a.isiframe) {
              a.win.scrollTop(0);
              a.doc.height("");
              var d = Math.max(
                c.getElementsByTagName("html")[0].scrollHeight,
                c.body.scrollHeight
              );
              a.doc.height(d);
            }
            a.lazyResize(30);
            e.isie7 && a.css(f(a.iframe.html), b);
            a.css(f(a.iframe.body), b);
            e.isios &&
              a.haswrapper &&
              a.css(f(c.body), { "-webkit-transform": "translate3d(0,0,0)" });
            "contentWindow" in this
              ? a.bind(this.contentWindow, "scroll", a.onscroll)
              : a.bind(c, "scroll", a.onscroll);
            a.opt.enablemousewheel && a.mousewheel(c, a.onmousewheel);
            a.opt.enablekeyboard &&
              a.bind(c, e.isopera ? "keypress" : "keydown", a.onkeypress);
            if (e.cantouch || a.opt.touchbehavior)
              a.bind(c, "mousedown", a.ontouchstart),
                a.bind(c, "mousemove", function (b) {
                  return a.ontouchmove(b, !0);
                }),
                a.opt.grabcursorenabled &&
                  e.cursorgrabvalue &&
                  a.css(f(c.body), { cursor: e.cursorgrabvalue });
            a.bind(c, "mouseup", a.ontouchend);
            a.zoom &&
              (a.opt.dblclickzoom && a.bind(c, "dblclick", a.doZoom),
              a.ongesturezoom && a.bind(c, "gestureend", a.ongesturezoom));
          };
          this.doc[0].readyState &&
            "complete" == this.doc[0].readyState &&
            setTimeout(function () {
              N.call(a.doc[0], !1);
            }, 500);
          a.bind(this.doc, "load", N);
        }
      };
      this.showCursor = function (b, c) {
        a.cursortimeout &&
          (clearTimeout(a.cursortimeout), (a.cursortimeout = 0));
        if (a.rail) {
          a.autohidedom &&
            (a.autohidedom.stop().css({ opacity: a.opt.cursoropacitymax }),
            (a.cursoractive = !0));
          (a.rail.drag && 1 == a.rail.drag.pt) ||
            (void 0 !== b &&
              !1 !== b &&
              (a.scroll.y = Math.round((1 * b) / a.scrollratio.y)),
            void 0 !== c &&
              (a.scroll.x = Math.round((1 * c) / a.scrollratio.x)));
          a.cursor.css({ height: a.cursorheight, top: a.scroll.y });
          if (a.cursorh) {
            var d = a.hasreversehr
              ? a.scrollvaluemaxw - a.scroll.x
              : a.scroll.x;
            !a.rail.align && a.rail.visibility
              ? a.cursorh.css({ width: a.cursorwidth, left: d + a.rail.width })
              : a.cursorh.css({ width: a.cursorwidth, left: d });
            a.cursoractive = !0;
          }
          a.zoom && a.zoom.stop().css({ opacity: a.opt.cursoropacitymax });
        }
      };
      this.hideCursor = function (b) {
        a.cursortimeout ||
          !a.rail ||
          !a.autohidedom ||
          (a.hasmousefocus && "leave" == a.opt.autohidemode) ||
          (a.cursortimeout = setTimeout(function () {
            (a.rail.active && a.showonmouseevent) ||
              (a.autohidedom
                .stop()
                .animate({ opacity: a.opt.cursoropacitymin }),
              a.zoom &&
                a.zoom.stop().animate({ opacity: a.opt.cursoropacitymin }),
              (a.cursoractive = !1));
            a.cursortimeout = 0;
          }, b || a.opt.hidecursordelay));
      };
      this.noticeCursor = function (b, c, d) {
        a.showCursor(c, d);
        a.rail.active || a.hideCursor(b);
      };
      this.getContentSize = a.ispage
        ? function () {
            return {
              w: Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth
              ),
              h: Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              ),
            };
          }
        : a.haswrapper
        ? function () {
            return {
              w:
                a.doc.outerWidth() +
                parseInt(a.win.css("paddingLeft")) +
                parseInt(a.win.css("paddingRight")),
              h:
                a.doc.outerHeight() +
                parseInt(a.win.css("paddingTop")) +
                parseInt(a.win.css("paddingBottom")),
            };
          }
        : function () {
            return {
              w: a.docscroll[0].scrollWidth,
              h: a.docscroll[0].scrollHeight,
            };
          };
      this.onResize = function (b, c) {
        if (!a || !a.win) return !1;
        if (!a.haswrapper && !a.ispage) {
          if ("none" == a.win.css("display"))
            return a.visibility && a.hideRail().hideRailHr(), !1;
          a.hidden || a.visibility || a.showRail().showRailHr();
        }
        var d = a.page.maxh,
          e = a.page.maxw,
          f = a.view.h,
          k = a.view.w;
        a.view = {
          w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
          h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight),
        };
        a.page = c ? c : a.getContentSize();
        a.page.maxh = Math.max(0, a.page.h - a.view.h);
        a.page.maxw = Math.max(0, a.page.w - a.view.w);
        if (
          a.page.maxh == d &&
          a.page.maxw == e &&
          a.view.w == k &&
          a.view.h == f
        ) {
          if (a.ispage) return a;
          d = a.win.offset();
          if (
            a.lastposition &&
            ((e = a.lastposition), e.top == d.top && e.left == d.left)
          )
            return a;
          a.lastposition = d;
        }
        0 == a.page.maxh
          ? (a.hideRail(),
            (a.scrollvaluemax = 0),
            (a.scroll.y = 0),
            (a.scrollratio.y = 0),
            (a.cursorheight = 0),
            a.setScrollTop(0),
            a.rail && (a.rail.scrollable = !1))
          : ((a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom),
            (a.rail.scrollable = !0));
        0 == a.page.maxw
          ? (a.hideRailHr(),
            (a.scrollvaluemaxw = 0),
            (a.scroll.x = 0),
            (a.scrollratio.x = 0),
            (a.cursorwidth = 0),
            a.setScrollLeft(0),
            a.railh && (a.railh.scrollable = !1))
          : ((a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right),
            a.railh && (a.railh.scrollable = a.opt.horizrailenabled));
        a.railslocked = a.locked || (0 == a.page.maxh && 0 == a.page.maxw);
        if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1;
        a.hidden || a.visibility
          ? !a.railh || a.hidden || a.railh.visibility || a.showRailHr()
          : a.showRail().showRailHr();
        a.istextarea &&
          a.win.css("resize") &&
          "none" != a.win.css("resize") &&
          (a.view.h -= 20);
        a.cursorheight = Math.min(
          a.view.h,
          Math.round((a.view.h / a.page.h) * a.view.h)
        );
        a.cursorheight = a.opt.cursorfixedheight
          ? a.opt.cursorfixedheight
          : Math.max(a.opt.cursorminheight, a.cursorheight);
        a.cursorwidth = Math.min(
          a.view.w,
          Math.round((a.view.w / a.page.w) * a.view.w)
        );
        a.cursorwidth = a.opt.cursorfixedheight
          ? a.opt.cursorfixedheight
          : Math.max(a.opt.cursorminheight, a.cursorwidth);
        a.scrollvaluemax =
          a.view.h -
          a.cursorheight -
          a.cursor.hborder -
          (a.opt.railpadding.top + a.opt.railpadding.bottom);
        a.railh &&
          ((a.railh.width =
            0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w),
          (a.scrollvaluemaxw =
            a.railh.width -
            a.cursorwidth -
            a.cursorh.wborder -
            (a.opt.railpadding.left + a.opt.railpadding.right)));
        a.ispage || a.updateScrollBar(a.view);
        a.scrollratio = {
          x: a.page.maxw / a.scrollvaluemaxw,
          y: a.page.maxh / a.scrollvaluemax,
        };
        a.getScrollTop() > a.page.maxh
          ? a.doScrollTop(a.page.maxh)
          : ((a.scroll.y = Math.round(
              a.getScrollTop() * (1 / a.scrollratio.y)
            )),
            (a.scroll.x = Math.round(
              a.getScrollLeft() * (1 / a.scrollratio.x)
            )),
            a.cursoractive && a.noticeCursor());
        a.scroll.y &&
          0 == a.getScrollTop() &&
          a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
        return a;
      };
      this.resize = a.onResize;
      this.hlazyresize = 0;
      this.lazyResize = function (b) {
        a.haswrapper || a.hide();
        a.hlazyresize && clearTimeout(a.hlazyresize);
        a.hlazyresize = setTimeout(function () {
          a && a.show().resize();
        }, 240);
        return a;
      };
      this.jqbind = function (b, c, d) {
        a.events.push({ e: b, n: c, f: d, q: !0 });
        f(b).bind(c, d);
      };
      this.mousewheel = function (b, c, d) {
        b = "jquery" in b ? b[0] : b;
        if ("onwheel" in document.createElement("div"))
          a._bind(b, "wheel", c, d || !1);
        else {
          var e =
            void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
          q(b, e, c, d || !1);
          "DOMMouseScroll" == e && q(b, "MozMousePixelScroll", c, d || !1);
        }
      };
      e.haseventlistener
        ? ((this.bind = function (b, c, d, e) {
            a._bind("jquery" in b ? b[0] : b, c, d, e || !1);
          }),
          (this._bind = function (b, c, d, e) {
            a.events.push({ e: b, n: c, f: d, b: e, q: !1 });
            b.addEventListener(c, d, e || !1);
          }),
          (this.cancelEvent = function (a) {
            if (!a) return !1;
            a = a.original ? a.original : a;
            a.cancelable && a.preventDefault();
            a.stopPropagation();
            a.preventManipulation && a.preventManipulation();
            return !1;
          }),
          (this.stopPropagation = function (a) {
            if (!a) return !1;
            a = a.original ? a.original : a;
            a.stopPropagation();
            return !1;
          }),
          (this._unbind = function (a, c, d, e) {
            a.removeEventListener(c, d, e);
          }))
        : ((this.bind = function (b, c, d, e) {
            var f = "jquery" in b ? b[0] : b;
            a._bind(f, c, function (b) {
              (b = b || window.event || !1) &&
                b.srcElement &&
                (b.target = b.srcElement);
              "pageY" in b ||
                ((b.pageX = b.clientX + document.documentElement.scrollLeft),
                (b.pageY = b.clientY + document.documentElement.scrollTop));
              return !1 === d.call(f, b) || !1 === e ? a.cancelEvent(b) : !0;
            });
          }),
          (this._bind = function (b, c, d, e) {
            a.events.push({ e: b, n: c, f: d, b: e, q: !1 });
            b.attachEvent ? b.attachEvent("on" + c, d) : (b["on" + c] = d);
          }),
          (this.cancelEvent = function (a) {
            a = window.event || !1;
            if (!a) return !1;
            a.cancelBubble = !0;
            a.cancel = !0;
            return (a.returnValue = !1);
          }),
          (this.stopPropagation = function (a) {
            a = window.event || !1;
            if (!a) return !1;
            a.cancelBubble = !0;
            return !1;
          }),
          (this._unbind = function (a, c, d, e) {
            a.detachEvent ? a.detachEvent("on" + c, d) : (a["on" + c] = !1);
          }));
      this.unbindAll = function () {
        for (var b = 0; b < a.events.length; b++) {
          var c = a.events[b];
          c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b);
        }
      };
      this.showRail = function () {
        0 == a.page.maxh ||
          (!a.ispage && "none" == a.win.css("display")) ||
          ((a.visibility = !0),
          (a.rail.visibility = !0),
          a.rail.css("display", "block"));
        return a;
      };
      this.showRailHr = function () {
        if (!a.railh) return a;
        0 == a.page.maxw ||
          (!a.ispage && "none" == a.win.css("display")) ||
          ((a.railh.visibility = !0), a.railh.css("display", "block"));
        return a;
      };
      this.hideRail = function () {
        a.visibility = !1;
        a.rail.visibility = !1;
        a.rail.css("display", "none");
        return a;
      };
      this.hideRailHr = function () {
        if (!a.railh) return a;
        a.railh.visibility = !1;
        a.railh.css("display", "none");
        return a;
      };
      this.show = function () {
        a.hidden = !1;
        a.railslocked = !1;
        return a.showRail().showRailHr();
      };
      this.hide = function () {
        a.hidden = !0;
        a.railslocked = !0;
        return a.hideRail().hideRailHr();
      };
      this.toggle = function () {
        return a.hidden ? a.show() : a.hide();
      };
      this.remove = function () {
        a.stop();
        a.cursortimeout && clearTimeout(a.cursortimeout);
        for (var b in a.delaylist) a.delaylist[b] && w(a.delaylist[b].h);
        a.doZoomOut();
        a.unbindAll();
        e.isie9 &&
          a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
        !1 !== a.observer && a.observer.disconnect();
        !1 !== a.observerremover && a.observerremover.disconnect();
        !1 !== a.observerbody && a.observerbody.disconnect();
        a.events = null;
        a.cursor && a.cursor.remove();
        a.cursorh && a.cursorh.remove();
        a.rail && a.rail.remove();
        a.railh && a.railh.remove();
        a.zoom && a.zoom.remove();
        for (b = 0; b < a.saved.css.length; b++) {
          var c = a.saved.css[b];
          c[0].css(c[1], void 0 === c[2] ? "" : c[2]);
        }
        a.saved = !1;
        a.me.data("__nicescroll", "");
        var d = f.nicescroll;
        d.each(function (b) {
          if (this && this.id === a.id) {
            delete d[b];
            for (var c = ++b; c < d.length; c++, b++) d[b] = d[c];
            d.length--;
            d.length && delete d[d.length];
          }
        });
        for (var k in a) (a[k] = null), delete a[k];
        a = null;
      };
      this.scrollstart = function (b) {
        this.onscrollstart = b;
        return a;
      };
      this.scrollend = function (b) {
        this.onscrollend = b;
        return a;
      };
      this.scrollcancel = function (b) {
        this.onscrollcancel = b;
        return a;
      };
      this.zoomin = function (b) {
        this.onzoomin = b;
        return a;
      };
      this.zoomout = function (b) {
        this.onzoomout = b;
        return a;
      };
      this.isScrollable = function (a) {
        a = a.target ? a.target : a;
        if ("OPTION" == a.nodeName) return !0;
        for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName); ) {
          var c = f(a),
            c =
              c.css("overflowY") ||
              c.css("overflowX") ||
              c.css("overflow") ||
              "";
          if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight;
          a = a.parentNode ? a.parentNode : !1;
        }
        return !1;
      };
      this.getViewport = function (a) {
        for (
          a = a && a.parentNode ? a.parentNode : !1;
          a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);

        ) {
          var c = f(a);
          if (/fixed|absolute/.test(c.css("position"))) return c;
          var d =
            c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
          if (
            (/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight) ||
            0 < c.getNiceScroll().length
          )
            return c;
          a = a.parentNode ? a.parentNode : !1;
        }
        return !1;
      };
      this.triggerScrollEnd = function () {
        if (a.onscrollend) {
          var b = a.getScrollLeft(),
            c = a.getScrollTop();
          a.onscrollend.call(a, {
            type: "scrollend",
            current: { x: b, y: c },
            end: { x: b, y: c },
          });
        }
      };
      this.onmousewheel = function (b) {
        if (!a.wheelprevented) {
          if (a.railslocked)
            return a.debounced("checkunlock", a.resize, 250), !0;
          if (a.rail.drag) return a.cancelEvent(b);
          "auto" == a.opt.oneaxismousemode &&
            0 != b.deltaX &&
            (a.opt.oneaxismousemode = !1);
          if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable)
            return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) : !0;
          var c = +new Date(),
            d = !1;
          a.opt.preservenativescrolling &&
            a.checkarea + 600 < c &&
            ((a.nativescrollingarea = a.isScrollable(b)), (d = !0));
          a.checkarea = c;
          if (a.nativescrollingarea) return !0;
          if ((b = t(b, !1, d))) a.checkarea = 0;
          return b;
        }
      };
      this.onmousewheelhr = function (b) {
        if (!a.wheelprevented) {
          if (a.railslocked || !a.railh.scrollable) return !0;
          if (a.rail.drag) return a.cancelEvent(b);
          var c = +new Date(),
            d = !1;
          a.opt.preservenativescrolling &&
            a.checkarea + 600 < c &&
            ((a.nativescrollingarea = a.isScrollable(b)), (d = !0));
          a.checkarea = c;
          return a.nativescrollingarea
            ? !0
            : a.railslocked
            ? a.cancelEvent(b)
            : t(b, !0, d);
        }
      };
      this.stop = function () {
        a.cancelScroll();
        a.scrollmon && a.scrollmon.stop();
        a.cursorfreezed = !1;
        a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
        a.noticeCursor();
        return a;
      };
      this.getTransitionSpeed = function (b) {
        b = Math.min(
          Math.round(10 * a.opt.scrollspeed),
          Math.round((b / 20) * a.opt.scrollspeed)
        );
        return 20 < b ? b : 0;
      };
      a.opt.smoothscroll
        ? a.ishwscroll &&
          e.hastransition &&
          a.opt.usetransition &&
          a.opt.smoothscroll
          ? ((this.prepareTransition = function (b, c) {
              var d = c ? (20 < b ? b : 0) : a.getTransitionSpeed(b),
                f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : "";
              (a.lasttransitionstyle && a.lasttransitionstyle == f) ||
                ((a.lasttransitionstyle = f), a.doc.css(e.transitionstyle, f));
              return d;
            }),
            (this.doScrollLeft = function (b, c) {
              var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
              a.doScrollPos(b, d, c);
            }),
            (this.doScrollTop = function (b, c) {
              var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
              a.doScrollPos(d, b, c);
            }),
            (this.doScrollPos = function (b, c, d) {
              var f = a.getScrollTop(),
                k = a.getScrollLeft();
              (0 > (a.newscrolly - f) * (c - f) ||
                0 > (a.newscrollx - k) * (b - k)) &&
                a.cancelScroll();
              0 == a.opt.bouncescroll &&
                (0 > c ? (c = 0) : c > a.page.maxh && (c = a.page.maxh),
                0 > b ? (b = 0) : b > a.page.maxw && (b = a.page.maxw));
              if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly)
                return !1;
              a.newscrolly = c;
              a.newscrollx = b;
              a.newscrollspeed = d || !1;
              if (a.timer) return !1;
              a.timer = setTimeout(function () {
                var d = a.getScrollTop(),
                  f = a.getScrollLeft(),
                  k = Math.round(
                    Math.sqrt(Math.pow(b - f, 2) + Math.pow(c - d, 2))
                  ),
                  k =
                    a.newscrollspeed && 1 < a.newscrollspeed
                      ? a.newscrollspeed
                      : a.getTransitionSpeed(k);
                a.newscrollspeed &&
                  1 >= a.newscrollspeed &&
                  (k *= a.newscrollspeed);
                a.prepareTransition(k, !0);
                a.timerscroll &&
                  a.timerscroll.tm &&
                  clearInterval(a.timerscroll.tm);
                0 < k &&
                  (!a.scrollrunning &&
                    a.onscrollstart &&
                    a.onscrollstart.call(a, {
                      type: "scrollstart",
                      current: { x: f, y: d },
                      request: { x: b, y: c },
                      end: { x: a.newscrollx, y: a.newscrolly },
                      speed: k,
                    }),
                  e.transitionend
                    ? a.scrollendtrapped ||
                      ((a.scrollendtrapped = !0),
                      a.bind(
                        a.doc,
                        e.transitionend,
                        a.onScrollTransitionEnd,
                        !1
                      ))
                    : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped),
                      (a.scrollendtrapped = setTimeout(
                        a.onScrollTransitionEnd,
                        k
                      ))),
                  (a.timerscroll = {
                    bz: new D(d, a.newscrolly, k, 0, 0, 0.58, 1),
                    bh: new D(f, a.newscrollx, k, 0, 0, 0.58, 1),
                  }),
                  a.cursorfreezed ||
                    (a.timerscroll.tm = setInterval(function () {
                      a.showCursor(a.getScrollTop(), a.getScrollLeft());
                    }, 60)));
                a.synched("doScroll-set", function () {
                  a.timer = 0;
                  a.scrollendtrapped && (a.scrollrunning = !0);
                  a.setScrollTop(a.newscrolly);
                  a.setScrollLeft(a.newscrollx);
                  if (!a.scrollendtrapped) a.onScrollTransitionEnd();
                });
              }, 50);
            }),
            (this.cancelScroll = function () {
              if (!a.scrollendtrapped) return !0;
              var b = a.getScrollTop(),
                c = a.getScrollLeft();
              a.scrollrunning = !1;
              e.transitionend || clearTimeout(e.transitionend);
              a.scrollendtrapped = !1;
              a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
              a.prepareTransition(0);
              a.setScrollTop(b);
              a.railh && a.setScrollLeft(c);
              a.timerscroll &&
                a.timerscroll.tm &&
                clearInterval(a.timerscroll.tm);
              a.timerscroll = !1;
              a.cursorfreezed = !1;
              a.showCursor(b, c);
              return a;
            }),
            (this.onScrollTransitionEnd = function () {
              a.scrollendtrapped &&
                a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
              a.scrollendtrapped = !1;
              a.prepareTransition(0);
              a.timerscroll &&
                a.timerscroll.tm &&
                clearInterval(a.timerscroll.tm);
              a.timerscroll = !1;
              var b = a.getScrollTop(),
                c = a.getScrollLeft();
              a.setScrollTop(b);
              a.railh && a.setScrollLeft(c);
              a.noticeCursor(!1, b, c);
              a.cursorfreezed = !1;
              0 > b ? (b = 0) : b > a.page.maxh && (b = a.page.maxh);
              0 > c ? (c = 0) : c > a.page.maxw && (c = a.page.maxw);
              if (b != a.newscrolly || c != a.newscrollx)
                return a.doScrollPos(c, b, a.opt.snapbackspeed);
              a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
              a.scrollrunning = !1;
            }))
          : ((this.doScrollLeft = function (b, c) {
              var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
              a.doScrollPos(b, d, c);
            }),
            (this.doScrollTop = function (b, c) {
              var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
              a.doScrollPos(d, b, c);
            }),
            (this.doScrollPos = function (b, c, d) {
              function e() {
                if (a.cancelAnimationFrame) return !0;
                a.scrollrunning = !0;
                if ((p = 1 - p)) return (a.timer = v(e) || 1);
                var b = 0,
                  c,
                  d,
                  f = (d = a.getScrollTop());
                if (a.dst.ay) {
                  f = a.bzscroll
                    ? a.dst.py + a.bzscroll.getNow() * a.dst.ay
                    : a.newscrolly;
                  c = f - d;
                  if (
                    (0 > c && f < a.newscrolly) ||
                    (0 < c && f > a.newscrolly)
                  )
                    f = a.newscrolly;
                  a.setScrollTop(f);
                  f == a.newscrolly && (b = 1);
                } else b = 1;
                d = c = a.getScrollLeft();
                if (a.dst.ax) {
                  d = a.bzscroll
                    ? a.dst.px + a.bzscroll.getNow() * a.dst.ax
                    : a.newscrollx;
                  c = d - c;
                  if (
                    (0 > c && d < a.newscrollx) ||
                    (0 < c && d > a.newscrollx)
                  )
                    d = a.newscrollx;
                  a.setScrollLeft(d);
                  d == a.newscrollx && (b += 1);
                } else b += 1;
                2 == b
                  ? ((a.timer = 0),
                    (a.cursorfreezed = !1),
                    (a.bzscroll = !1),
                    (a.scrollrunning = !1),
                    0 > f
                      ? (f = 0)
                      : f > a.page.maxh && (f = Math.max(0, a.page.maxh)),
                    0 > d ? (d = 0) : d > a.page.maxw && (d = a.page.maxw),
                    d != a.newscrollx || f != a.newscrolly
                      ? a.doScrollPos(d, f)
                      : a.onscrollend && a.triggerScrollEnd())
                  : (a.timer = v(e) || 1);
              }
              c = void 0 === c || !1 === c ? a.getScrollTop(!0) : c;
              if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0;
              a.timer && w(a.timer);
              a.timer = 0;
              var f = a.getScrollTop(),
                k = a.getScrollLeft();
              (0 > (a.newscrolly - f) * (c - f) ||
                0 > (a.newscrollx - k) * (b - k)) &&
                a.cancelScroll();
              a.newscrolly = c;
              a.newscrollx = b;
              (a.bouncescroll && a.rail.visibility) ||
                (0 > a.newscrolly
                  ? (a.newscrolly = 0)
                  : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
              (a.bouncescroll && a.railh.visibility) ||
                (0 > a.newscrollx
                  ? (a.newscrollx = 0)
                  : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw));
              a.dst = {};
              a.dst.x = b - k;
              a.dst.y = c - f;
              a.dst.px = k;
              a.dst.py = f;
              var h = Math.round(
                Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2))
              );
              a.dst.ax = a.dst.x / h;
              a.dst.ay = a.dst.y / h;
              var l = 0,
                n = h;
              0 == a.dst.x
                ? ((l = f), (n = c), (a.dst.ay = 1), (a.dst.py = 0))
                : 0 == a.dst.y &&
                  ((l = k), (n = b), (a.dst.ax = 1), (a.dst.px = 0));
              h = a.getTransitionSpeed(h);
              d && 1 >= d && (h *= d);
              a.bzscroll =
                0 < h
                  ? a.bzscroll
                    ? a.bzscroll.update(n, h)
                    : new D(l, n, h, 0, 1, 0, 1)
                  : !1;
              if (!a.timer) {
                ((f == a.page.maxh && c >= a.page.maxh) ||
                  (k == a.page.maxw && b >= a.page.maxw)) &&
                  a.checkContentSize();
                var p = 1;
                a.cancelAnimationFrame = !1;
                a.timer = 1;
                a.onscrollstart &&
                  !a.scrollrunning &&
                  a.onscrollstart.call(a, {
                    type: "scrollstart",
                    current: { x: k, y: f },
                    request: { x: b, y: c },
                    end: { x: a.newscrollx, y: a.newscrolly },
                    speed: h,
                  });
                e();
                ((f == a.page.maxh && c >= f) ||
                  (k == a.page.maxw && b >= k)) &&
                  a.checkContentSize();
                a.noticeCursor();
              }
            }),
            (this.cancelScroll = function () {
              a.timer && w(a.timer);
              a.timer = 0;
              a.bzscroll = !1;
              a.scrollrunning = !1;
              return a;
            }))
        : ((this.doScrollLeft = function (b, c) {
            var d = a.getScrollTop();
            a.doScrollPos(b, d, c);
          }),
          (this.doScrollTop = function (b, c) {
            var d = a.getScrollLeft();
            a.doScrollPos(d, b, c);
          }),
          (this.doScrollPos = function (b, c, d) {
            var e = b > a.page.maxw ? a.page.maxw : b;
            0 > e && (e = 0);
            var f = c > a.page.maxh ? a.page.maxh : c;
            0 > f && (f = 0);
            a.synched("scroll", function () {
              a.setScrollTop(f);
              a.setScrollLeft(e);
            });
          }),
          (this.cancelScroll = function () {}));
      this.doScrollBy = function (b, c) {
        var d = 0,
          d = c
            ? Math.floor((a.scroll.y - b) * a.scrollratio.y)
            : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
        if (a.bouncescroll) {
          var e = Math.round(a.view.h / 2);
          d < -e ? (d = -e) : d > a.page.maxh + e && (d = a.page.maxh + e);
        }
        a.cursorfreezed = !1;
        e = a.getScrollTop(!0);
        if (0 > d && 0 >= e) return a.noticeCursor();
        if (d > a.page.maxh && e >= a.page.maxh)
          return a.checkContentSize(), a.noticeCursor();
        a.doScrollTop(d);
      };
      this.doScrollLeftBy = function (b, c) {
        var d = 0,
          d = c
            ? Math.floor((a.scroll.x - b) * a.scrollratio.x)
            : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
        if (a.bouncescroll) {
          var e = Math.round(a.view.w / 2);
          d < -e ? (d = -e) : d > a.page.maxw + e && (d = a.page.maxw + e);
        }
        a.cursorfreezed = !1;
        e = a.getScrollLeft(!0);
        if ((0 > d && 0 >= e) || (d > a.page.maxw && e >= a.page.maxw))
          return a.noticeCursor();
        a.doScrollLeft(d);
      };
      this.doScrollTo = function (b, c) {
        a.cursorfreezed = !1;
        a.doScrollTop(b);
      };
      this.checkContentSize = function () {
        var b = a.getContentSize();
        (b.h == a.page.h && b.w == a.page.w) || a.resize(!1, b);
      };
      a.onscroll = function (b) {
        a.rail.drag ||
          a.cursorfreezed ||
          a.synched("scroll", function () {
            a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
            a.railh &&
              (a.scroll.x = Math.round(
                a.getScrollLeft() * (1 / a.scrollratio.x)
              ));
            a.noticeCursor();
          });
      };
      a.bind(a.docscroll, "scroll", a.onscroll);
      this.doZoomIn = function (b) {
        if (!a.zoomactive) {
          a.zoomactive = !0;
          a.zoomrestore = { style: {} };
          var c =
              "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(
                " "
              ),
            d = a.win[0].style,
            k;
          for (k in c) {
            var h = c[k];
            a.zoomrestore.style[h] = void 0 !== d[h] ? d[h] : "";
          }
          a.zoomrestore.style.width = a.win.css("width");
          a.zoomrestore.style.height = a.win.css("height");
          a.zoomrestore.padding = {
            w: a.win.outerWidth() - a.win.width(),
            h: a.win.outerHeight() - a.win.height(),
          };
          e.isios4 &&
            ((a.zoomrestore.scrollTop = f(window).scrollTop()),
            f(window).scrollTop(0));
          a.win.css({
            position: e.isios4 ? "absolute" : "fixed",
            top: 0,
            left: 0,
            zIndex: A + 100,
            margin: 0,
          });
          c = a.win.css("backgroundColor");
          ("" == c ||
            /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) &&
            a.win.css("backgroundColor", "#fff");
          a.rail.css({ zIndex: A + 101 });
          a.zoom.css({ zIndex: A + 102 });
          a.zoom.css("backgroundPosition", "0px -18px");
          a.resizeZoom();
          a.onzoomin && a.onzoomin.call(a);
          return a.cancelEvent(b);
        }
      };
      this.doZoomOut = function (b) {
        if (a.zoomactive)
          return (
            (a.zoomactive = !1),
            a.win.css("margin", ""),
            a.win.css(a.zoomrestore.style),
            e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop),
            a.rail.css({ "z-index": a.zindex }),
            a.zoom.css({ "z-index": a.zindex }),
            (a.zoomrestore = !1),
            a.zoom.css("backgroundPosition", "0px 0px"),
            a.onResize(),
            a.onzoomout && a.onzoomout.call(a),
            a.cancelEvent(b)
          );
      };
      this.doZoom = function (b) {
        return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b);
      };
      this.resizeZoom = function () {
        if (a.zoomactive) {
          var b = a.getScrollTop();
          a.win.css({
            width: f(window).width() - a.zoomrestore.padding.w + "px",
            height: f(window).height() - a.zoomrestore.padding.h + "px",
          });
          a.onResize();
          a.setScrollTop(Math.min(a.page.maxh, b));
        }
      };
      this.init();
      f.nicescroll.push(this);
    },
    M = function (f) {
      var c = this;
      this.nc = f;
      this.steptime =
        this.lasttime =
        this.speedy =
        this.speedx =
        this.lasty =
        this.lastx =
          0;
      this.snapy = this.snapx = !1;
      this.demuly = this.demulx = 0;
      this.lastscrolly = this.lastscrollx = -1;
      this.timer = this.chky = this.chkx = 0;
      this.time = function () {
        return +new Date();
      };
      this.reset = function (f, h) {
        c.stop();
        var d = c.time();
        c.steptime = 0;
        c.lasttime = d;
        c.speedx = 0;
        c.speedy = 0;
        c.lastx = f;
        c.lasty = h;
        c.lastscrollx = -1;
        c.lastscrolly = -1;
      };
      this.update = function (f, h) {
        var d = c.time();
        c.steptime = d - c.lasttime;
        c.lasttime = d;
        var d = h - c.lasty,
          q = f - c.lastx,
          t = c.nc.getScrollTop(),
          a = c.nc.getScrollLeft(),
          t = t + d,
          a = a + q;
        c.snapx = 0 > a || a > c.nc.page.maxw;
        c.snapy = 0 > t || t > c.nc.page.maxh;
        c.speedx = q;
        c.speedy = d;
        c.lastx = f;
        c.lasty = h;
      };
      this.stop = function () {
        c.nc.unsynched("domomentum2d");
        c.timer && clearTimeout(c.timer);
        c.timer = 0;
        c.lastscrollx = -1;
        c.lastscrolly = -1;
      };
      this.doSnapy = function (f, h) {
        var d = !1;
        0 > h
          ? ((h = 0), (d = !0))
          : h > c.nc.page.maxh && ((h = c.nc.page.maxh), (d = !0));
        0 > f
          ? ((f = 0), (d = !0))
          : f > c.nc.page.maxw && ((f = c.nc.page.maxw), (d = !0));
        d
          ? c.nc.doScrollPos(f, h, c.nc.opt.snapbackspeed)
          : c.nc.triggerScrollEnd();
      };
      this.doMomentum = function (f) {
        var h = c.time(),
          d = f ? h + f : c.lasttime;
        f = c.nc.getScrollLeft();
        var q = c.nc.getScrollTop(),
          t = c.nc.page.maxh,
          a = c.nc.page.maxw;
        c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
        c.speedy = 0 < t ? Math.min(60, c.speedy) : 0;
        d = d && 60 >= h - d;
        if (0 > q || q > t || 0 > f || f > a) d = !1;
        f = c.speedx && d ? c.speedx : !1;
        if ((c.speedy && d && c.speedy) || f) {
          var r = Math.max(16, c.steptime);
          50 < r && ((f = r / 50), (c.speedx *= f), (c.speedy *= f), (r = 50));
          c.demulxy = 0;
          c.lastscrollx = c.nc.getScrollLeft();
          c.chkx = c.lastscrollx;
          c.lastscrolly = c.nc.getScrollTop();
          c.chky = c.lastscrolly;
          var p = c.lastscrollx,
            e = c.lastscrolly,
            v = function () {
              var d = 600 < c.time() - h ? 0.04 : 0.02;
              c.speedx &&
                ((p = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy))),
                (c.lastscrollx = p),
                0 > p || p > a) &&
                (d = 0.1);
              c.speedy &&
                ((e = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy))),
                (c.lastscrolly = e),
                0 > e || e > t) &&
                (d = 0.1);
              c.demulxy = Math.min(1, c.demulxy + d);
              c.nc.synched("domomentum2d", function () {
                c.speedx &&
                  (c.nc.getScrollLeft(), (c.chkx = p), c.nc.setScrollLeft(p));
                c.speedy &&
                  (c.nc.getScrollTop(), (c.chky = e), c.nc.setScrollTop(e));
                c.timer || (c.nc.hideCursor(), c.doSnapy(p, e));
              });
              1 > c.demulxy
                ? (c.timer = setTimeout(v, r))
                : (c.stop(), c.nc.hideCursor(), c.doSnapy(p, e));
            };
          v();
        } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
      };
    },
    y = f.fn.scrollTop;
  f.cssHooks.pageYOffset = {
    get: function (h, c, k) {
      return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll
        ? c.getScrollTop()
        : y.call(h);
    },
    set: function (h, c) {
      var k = f.data(h, "__nicescroll") || !1;
      k && k.ishwscroll ? k.setScrollTop(parseInt(c)) : y.call(h, c);
      return this;
    },
  };
  f.fn.scrollTop = function (h) {
    if (void 0 === h) {
      var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
      return c && c.ishwscroll ? c.getScrollTop() : y.call(this);
    }
    return this.each(function () {
      var c = f.data(this, "__nicescroll") || !1;
      c && c.ishwscroll ? c.setScrollTop(parseInt(h)) : y.call(f(this), h);
    });
  };
  var z = f.fn.scrollLeft;
  f.cssHooks.pageXOffset = {
    get: function (h, c, k) {
      return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll
        ? c.getScrollLeft()
        : z.call(h);
    },
    set: function (h, c) {
      var k = f.data(h, "__nicescroll") || !1;
      k && k.ishwscroll ? k.setScrollLeft(parseInt(c)) : z.call(h, c);
      return this;
    },
  };
  f.fn.scrollLeft = function (h) {
    if (void 0 === h) {
      var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
      return c && c.ishwscroll ? c.getScrollLeft() : z.call(this);
    }
    return this.each(function () {
      var c = f.data(this, "__nicescroll") || !1;
      c && c.ishwscroll ? c.setScrollLeft(parseInt(h)) : z.call(f(this), h);
    });
  };
  var E = function (h) {
    var c = this;
    this.length = 0;
    this.name = "nicescrollarray";
    this.each = function (d) {
      f.each(c, d);
      return c;
    };
    this.push = function (d) {
      c[c.length] = d;
      c.length++;
    };
    this.eq = function (d) {
      return c[d];
    };
    if (h)
      for (var k = 0; k < h.length; k++) {
        var l = f.data(h[k], "__nicescroll") || !1;
        l && ((this[this.length] = l), this.length++);
      }
    return this;
  };
  (function (f, c, k) {
    for (var l = 0; l < c.length; l++) k(f, c[l]);
  })(
    E.prototype,
    "show hide toggle onResize resize remove stop doScrollPos".split(" "),
    function (f, c) {
      f[c] = function () {
        var f = arguments;
        return this.each(function () {
          this[c].apply(this, f);
        });
      };
    }
  );
  f.fn.getNiceScroll = function (h) {
    return void 0 === h
      ? new E(this)
      : (this[h] && f.data(this[h], "__nicescroll")) || !1;
  };
  f.expr[":"].nicescroll = function (h) {
    return void 0 !== f.data(h, "__nicescroll");
  };
  f.fn.niceScroll = function (h, c) {
    void 0 !== c ||
      "object" != typeof h ||
      "jquery" in h ||
      ((c = h), (h = !1));
    c = f.extend({}, c);
    var k = new E();
    void 0 === c && (c = {});
    h && ((c.doc = f(h)), (c.win = f(this)));
    var l = !("doc" in c);
    l || "win" in c || (c.win = f(this));
    this.each(function () {
      var d = f(this).data("__nicescroll") || !1;
      d ||
        ((c.doc = l ? f(this) : c.doc),
        (d = new S(c, f(this))),
        f(this).data("__nicescroll", d));
      k.push(d);
    });
    return 1 == k.length ? k[0] : k;
  };
  window.NiceScroll = {
    getjQuery: function () {
      return f;
    },
  };
  f.nicescroll || ((f.nicescroll = new E()), (f.nicescroll.options = K));
});
