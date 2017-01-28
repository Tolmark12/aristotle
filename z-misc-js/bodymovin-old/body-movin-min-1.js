!function(t) {
  function e() {}
  function i(t) {
    R = t ? Math.round : function(t) {
      return t
    }
  }
  function r(t) {
    t.style.userSelect = "none",
    t.style.MozUserSelect = "none",
    t.style.webkitUserSelect = "none",
    t.style.oUserSelect = "none"
  }
  function n(t, e, i, r) {
    this.type = t,
    this.currentTime = e,
    this.totalTime = i,
    this.direction = 0 > r ? -1 : 1
  }
  function s(t, e) {
    this.type = t,
    this.direction = 0 > e ? -1 : 1
  }
  function a(t, e, i, r) {
    this.type = t,
    this.currentLoop = e,
    this.totalLoops = i,
    this.direction = 0 > r ? -1 : 1
  }
  function o(t, e, i) {
    this.type = t,
    this.firstFrame = e,
    this.totalFrames = i
  }
  function l(t, e) {
    this._cbs[t] || (this._cbs[t] = []),
    this._cbs[t].push(e)
  }
  function h(t, e) {
    if (e) {
      if (this._cbs[t]) {
        for (var i = 0, r = this._cbs[t].length; r > i; )
          this._cbs[t][i] === e && (this._cbs[t].splice(i, 1),
          i -= 1,
          r -= 1),
          i += 1;
        this._cbs[t].length || (this._cbs[t] = null)
      }
    } else
      this._cbs[t] = null
  }
  function u(t, e) {
    if (this._cbs[t])
      for (var i = this._cbs[t].length, r = 0; i > r; r++)
        this._cbs[t][r](e)
  }
  function c(t, e) {
    void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
    var i, r = "";
    for (i = t; i > 0; --i)
      r += e[Math.round(Math.random() * (e.length - 1))];
    return r
  }
  function d(t, e, i) {
    if (!e) {
      var r = Object.create(t.prototype, i)
        , n = {};
      return r && "[object Function]" === n.toString.call(r.init) && r.init(),
      r
    }
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.prototype.parent = t.prototype
  }
  function f() {
    function t(t, e, i, r, n, s) {
      return O((i - t) * (s - e) - (n - t) * (r - e)) < 1e-5
    }
    function e(t, e, i, r, n) {
      if (n || (n = ("bez_" + t + "_" + e + "_" + i + "_" + r).replace(/\./g, "p")),
      l[n])
        return l[n];
      var s, a, o, h, u, c;
      return l[n] = function(n, l, d, f, p) {
        var m = l / p;
        n = m;
        for (var g, v = 0; ++v < 14 && (o = 3 * t,
        a = 3 * (i - t) - o,
        s = 1 - o - a,
        g = n * (o + n * (a + n * s)) - m,
        !(O(g) < .001)); )
          n -= g / (o + n * (2 * a + 3 * s * n));
        c = 3 * e,
        u = 3 * (r - e) - c,
        h = 1 - c - u;
        var y = n * (c + n * (u + n * h));
        return f * y + d
      }
      ,
      l[n]
    }
    function i(t) {
      this.segmentLength = 0,
      this.points = new Array(t)
    }
    function r(t, e) {
      this.partialLength = t,
      this.point = e
    }
    function n(e) {
      var n, s, a, o, l, h, u, c = e.s, d = e.e, f = e.to, p = e.ti, m = H, g = 0, v = null;
      (c[0] != d[0] || c[1] != d[1]) && t(c[0], c[1], d[0], d[1], c[0] + f[0], c[1] + f[1]) && t(c[0], c[1], d[0], d[1], d[0] + p[0], d[1] + p[1]) && (m = 2);
      var y = new i(m);
      for (a = f.length,
      n = 0; m > n; n += 1) {
        for (u = new Array(a),
        l = n / (m - 1),
        h = 0,
        s = 0; a > s; s += 1)
          o = F(1 - l, 3) * c[s] + 3 * F(1 - l, 2) * l * (c[s] + f[s]) + 3 * (1 - l) * F(l, 2) * (d[s] + p[s]) + F(l, 3) * d[s],
          u[s] = o,
          null !== v && (h += F(u[s] - v[s], 2));
        h = V(h),
        g += h,
        y.points[n] = new r(h,u),
        v = u
      }
      y.segmentLength = g,
      e.bezierData = y
    }
    function s(t, e) {
      var i = e.segments
        , r = i.length
        , n = B((r - 1) * t)
        , s = t * e.addedLength
        , a = 0;
      if (s == i[n].l)
        return i[n].p;
      for (var o = i[n].l > s ? -1 : 1, l = !0; l; )
        i[n].l <= s && i[n + 1].l > s ? (a = (s - i[n].l) / (i[n + 1].l - i[n].l),
        l = !1) : n += o,
        (0 > n || n >= r - 1) && (l = !1);
      return i[n].p + (i[n + 1].p - i[n].p) * a
    }
    function a() {
      this.pt1 = new Array(2),
      this.pt2 = new Array(2),
      this.pt3 = new Array(2),
      this.pt4 = new Array(2)
    }
    function o(t, e, i, r, n, o, l) {
      var h = new a;
      n = 0 > n ? 0 : n;
      var u = s(n, l);
      o = o > 1 ? 1 : o;
      var c, d = s(o, l), f = t.length, p = 1 - u, m = 1 - d;
      for (c = 0; f > c; c += 1)
        h.pt1[c] = p * p * p * t[c] + (u * p * p + p * u * p + p * p * u) * i[c] + (u * u * p + p * u * u + u * p * u) * r[c] + u * u * u * e[c],
        h.pt3[c] = p * p * m * t[c] + (u * p * m + p * u * m + p * p * d) * i[c] + (u * u * m + p * u * d + u * p * d) * r[c] + u * u * d * e[c],
        h.pt4[c] = p * m * m * t[c] + (u * m * m + p * d * m + p * m * d) * i[c] + (u * d * m + p * d * d + u * m * d) * r[c] + u * d * d * e[c],
        h.pt2[c] = m * m * m * t[c] + (d * m * m + m * d * m + m * m * d) * i[c] + (d * d * m + m * d * d + d * m * d) * r[c] + d * d * d * e[c];
      return h
    }
    var l = []
      , h = function() {
      var e = {};
      return function(i, r, n, s) {
        var a = (i.join("_") + "_" + r.join("_") + "_" + n.join("_") + "_" + s.join("_")).replace(/\./g, "p");
        if (e[a])
          return e[a];
        var o, l, h, u, c, d, f = H, p = 0, m = [], g = [], v = {
          addedLength: 0,
          segments: []
        };
        for ((i[0] != r[0] || i[1] != r[1]) && t(i[0], i[1], r[0], r[1], n[0], n[1]) && t(i[0], i[1], r[0], r[1], s[0], s[1]) && (f = 2),
        h = n.length,
        o = 0; f > o; o += 1) {
          for (c = o / (f - 1),
          d = 0,
          l = 0; h > l; l += 1)
            u = F(1 - c, 3) * i[l] + 3 * F(1 - c, 2) * c * n[l] + 3 * (1 - c) * F(c, 2) * s[l] + F(c, 3) * r[l],
            m[l] = u,
            null !== g[l] && (d += F(m[l] - g[l], 2)),
            g[l] = m[l];
          d && (d = V(d),
          p += d),
          v.segments.push({
            l: p,
            p: c
          })
        }
        return v.addedLength = p,
        e[a] = v,
        v
      }
    }();
    return {
      getEasingCurve: e,
      getBezierLength: h,
      getNewSegment: o,
      buildBezierData: n
    }
  }
  function p() {
    function t(n, s) {
      var a, o, l, h, u, c, d, f, p = n.length;
      for (h = 0; p > h; h += 1)
        if (a = n[h],
        "ks"in a && !a.completed) {
          if (a.completed = !0,
          a.tt && (n[h - 1].td = a.tt),
          o = [],
          l = -1,
          a.hasMask) {
            var m = a.masksProperties;
            for (c = m.length,
            u = 0; c > u; u += 1)
              if (m[u].pt.i)
                r(m[u].pt);
              else
                for (f = m[u].pt.length,
                d = 0; f > d; d += 1)
                  m[u].pt[d].s && r(m[u].pt[d].s[0]),
                  m[u].pt[d].e && r(m[u].pt[d].e[0])
          }
          0 === a.ty ? (a.layers = e(a.refId, s),
          t(a.layers, s)) : 4 === a.ty && i(a.shapes)
        }
    }
    function e(t, e) {
      for (var i = 0, r = e.length; r > i; ) {
        if (e[i].id === t)
          return JSON.parse(JSON.stringify(e[i].layers));
        i += 1
      }
    }
    function i(t, e) {
      var n, s, a, o = t.length, l = e ? e : !1;
      for (n = o - 1; n >= 0; n -= 1)
        if ("tm" == t[n].ty && (l = !0),
        "sh" == t[n].ty)
          if (t[n].trimmed = l,
          t[n].ks.i)
            r(t[n].ks);
          else
            for (a = t[n].ks.length,
            s = 0; a > s; s += 1)
              t[n].ks[s].s && r(t[n].ks[s].s[0]),
              t[n].ks[s].e && r(t[n].ks[s].e[0]);
        else
          "gr" == t[n].ty && i(t[n].it, l)
    }
    function r(t) {
      var e, i = t.i.length;
      for (e = 0; i > e; e += 1)
        t.i[e][0] += t.v[e][0],
        t.i[e][1] += t.v[e][1],
        t.o[e][0] += t.v[e][0],
        t.o[e][1] += t.v[e][1]
    }
    function n(e) {
      t(e.layers, e.assets)
    }
    var s = {};
    return s.completeData = n,
    s
  }
  function m(t) {
    this.animationItem = t,
    this.layers = null,
    this.lastFrame = -1,
    this.globalData = {
      frameNum: -1
    },
    this.elements = [],
    this.destroyed = !1
  }
  function g(i, r) {
    this.animationItem = i,
    this.renderConfig = {
      clearCanvas: r && r.clearCanvas || !0,
      context: r && r.context || null,
      scaleMode: r && r.scaleMode || "fit"
    },
    this.renderConfig.dpr = r && r.dpr || 1,
    this.animationItem.wrapper && (this.renderConfig.dpr = r && r.dpr || t.devicePixelRatio || 1),
    this.lastFrame = -1,
    this.globalData = {
      frameNum: -1
    },
    this.contextData = {
      saved: new Array(15),
      savedOp: new Array(15),
      cArrPos: 0,
      cTr: new e,
      cO: 1
    };
    var n, s = 15;
    for (n = 0; s > n; n += 1)
      this.contextData.saved[n] = new Array(6);
    this.elements = []
  }
  function v(t, e, i) {
    this.dynamicProperties = [],
    this.data = t,
    this.element = e,
    this.globalData = i,
    this.paths = [],
    this.masksProperties = this.data.masksProperties,
    this.viewData = new Array(this.masksProperties.length),
    this.maskElement = null,
    this.firstFrame = !0;
    var r, n, s, a, o, l = this.element.maskedElement, h = this.globalData.defs, u = this.masksProperties.length, d = this.data.masksProperties, f = 0, p = [], m = c(10), g = "clipPath", v = "clip-path";
    for (r = 0; u > r; r++)
      if (("a" !== d[r].mode && "n" !== d[r].mode || d[r].inv) && (g = "mask",
      v = "mask"),
      "s" != d[r].mode && "i" != d[r].mode || 0 != f || (o = document.createElementNS(M, "rect"),
      o.setAttribute("fill", "#ffffff"),
      o.setAttribute("x", "0"),
      o.setAttribute("y", "0"),
      o.setAttribute("width", "100%"),
      o.setAttribute("height", "100%"),
      p.push(o)),
      "n" != d[r].mode) {
        if (f += 1,
        n = document.createElementNS(M, "path"),
        d[r].cl ? "s" == d[r].mode ? n.setAttribute("fill", "#000000") : n.setAttribute("fill", "#ffffff") : (n.setAttribute("fill", "none"),
        "s" == d[r].mode ? n.setAttribute("fill", "#000000") : n.setAttribute("fill", "#ffffff"),
        n.setAttribute("stroke-width", "1"),
        n.setAttribute("stroke-miterlimit", "10")),
        n.setAttribute("clip-rule", "nonzero"),
        "i" == d[r].mode) {
          a = p.length;
          var y = document.createElementNS(M, "g");
          for (s = 0; a > s; s += 1)
            y.appendChild(p[s]);
          var b = document.createElementNS(M, "mask");
          b.setAttribute("mask-type", "alpha"),
          b.setAttribute("id", m + "_" + f),
          b.appendChild(n),
          h.appendChild(b),
          y.setAttribute("mask", "url(#" + m + "_" + f + ")"),
          p.length = 0,
          p.push(y)
        } else
          p.push(n);
        d[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
        this.viewData[r] = {
          elem: n,
          lastPath: "",
          prop: $.getShapeProp(this.data, d[r], 3, this.dynamicProperties)
        },
        this.viewData[r].prop.k || this.drawPath(d[r], this.viewData[r].prop.v, this.viewData[r])
      }
    for (this.maskElement = document.createElementNS(M, g),
    u = p.length,
    r = 0; u > r; r += 1)
      this.maskElement.appendChild(p[r]);
    this.maskElement.setAttribute("id", m),
    f > 0 && l.setAttribute(v, "url(#" + m + ")"),
    h.appendChild(this.maskElement)
  }
  function y() {}
  function b(t, e, i, r) {
    this.globalData = i,
    this.data = t,
    this.matteElement = null,
    this.parentContainer = e,
    this.layerId = r ? r.layerId : "ly_" + c(10),
    this.placeholder = r,
    this.init()
  }
  function x(t, e, i, r) {
    this.parent.constructor.call(this, t, e, i, r),
    this.layers = t.layers,
    this.data.tm && (this.tm = $.getProp(this.data, this.data.tm, 0, i.frameRate, this.dynamicProperties))
  }
  function _(t, e, i, r) {
    this.assetData = i.getAssetData(t.refId),
    this.path = i.getPath(),
    this.parent.constructor.call(this, t, e, i, r)
  }
  function w(t, e, i, r) {
    this.shapes = [],
    this.parent.constructor.call(this, t, e, i, r)
  }
  function E(t, e, i, n, s, a) {
    this.shape = e,
    this.parentContainer = i,
    this.placeholder = n,
    this.lcEnum = {
      1: "butt",
      2: "round",
      3: "butt"
    },
    this.ljEnum = {
      1: "miter",
      2: "round",
      3: "bevel"
    },
    this.stylesList = [],
    this.viewData = [],
    this.elemData = t,
    this.data = t.shapes,
    this.globalData = a,
    this.firstFrame = !0,
    this.searchShapes(this.data, this.viewData, s, []),
    r(this.shape)
  }
  function T(t, e, i, r) {
    this.parent.constructor.call(this, t, e, i, r)
  }
  function S(t, e, i, r) {
    this.parent.constructor.call(this, t, e, i, r)
  }
  function P(t, e) {
    this.globalData = e,
    this.data = t,
    this.canvasContext = e.canvasContext,
    this.init()
  }
  function C(t, e) {
    this.parent.constructor.call(this, t, e),
    this.layers = t.layers,
    this.data.tm && (this.tm = $.getProp(this.data, this.data.tm, 0, e.frameRate, this.dynamicProperties))
  }
  function A(t, e) {
    this.animationItem = e.renderer.animationItem,
    this.assetData = this.animationItem.getAssetData(t.refId),
    this.path = this.animationItem.getPath(),
    this.parent.constructor.call(this, t, e),
    this.animationItem.pendingElements += 1
  }
  function k(t, e) {
    this.shapes = [],
    this.parent.constructor.call(this, t, e)
  }
  function L(t, e, i) {
    this.lcEnum = {
      1: "butt",
      2: "round",
      3: "butt"
    },
    this.ljEnum = {
      1: "miter",
      2: "round",
      3: "bevel"
    },
    this.stylesList = [],
    this.viewData = [],
    this.elemData = t,
    this.data = t.shapes,
    this.globalData = i,
    this.firstFrame = !0,
    this.searchShapes(this.data, this.viewData, e, [])
  }
  function j(t, e) {
    this.parent.constructor.call(this, t, e)
  }
  function I(t, e) {
    this.parent.constructor.call(this, t, e)
  }
  function D(t, e, i) {
    this.data = t,
    this.element = e,
    this.globalData = i,
    this.dynamicProperties = [],
    this.masksProperties = this.data.masksProperties,
    this.totalMasks = this.masksProperties.length,
    this.ctx = this.element.canvasContext,
    this.viewData = new Array(this.masksProperties.length);
    var r, n = this.masksProperties.length;
    for (r = 0; n > r; r++)
      this.viewData[r] = $.getShapeProp(this.data, this.masksProperties[r], 3, this.dynamicProperties)
  }
  var M = "http://www.w3.org/2000/svg"
    , e = function() {
    function t() {
      return this.props[0] = 1,
      this.props[1] = 0,
      this.props[2] = 0,
      this.props[3] = 1,
      this.props[4] = 0,
      this.props[5] = 0,
      this
    }
    function e(t) {
      if (0 === t)
        return this;
      var e = Math.cos(t)
        , i = Math.sin(t);
      return this._t(e, i, -i, e, 0, 0)
    }
    function i(t, e) {
      return 1 == t && 1 == e ? this : this._t(t, 0, 0, e, 0, 0)
    }
    function r(t, e, i, r, n, s) {
      return this.props[0] = t,
      this.props[1] = e,
      this.props[2] = i,
      this.props[3] = r,
      this.props[4] = n,
      this.props[5] = s,
      this
    }
    function n(t, e) {
      return (0 !== t || 0 !== e) && (this.props[4] = this.props[0] * t + this.props[2] * e + this.props[4],
      this.props[5] = this.props[1] * t + this.props[3] * e + this.props[5]),
      this
    }
    function s(t, e, i, r, n, s) {
      var a = this.props[0]
        , o = this.props[1]
        , l = this.props[2]
        , h = this.props[3]
        , u = this.props[4]
        , c = this.props[5];
      return 1 === t && 0 === e && 0 === i && 1 === r ? ((0 !== n || 0 !== s) && (this.props[4] = this.props[0] * n + this.props[2] * s + this.props[4],
      this.props[5] = this.props[1] * n + this.props[3] * s + this.props[5]),
      this) : (this.props[0] = a * t + l * e,
      this.props[1] = o * t + h * e,
      this.props[2] = a * i + l * r,
      this.props[3] = o * i + h * r,
      this.props[4] = a * n + l * s + u,
      this.props[5] = o * n + h * s + c,
      this)
    }
    function a(t, e) {
      return {
        x: t * this.props[0] + e * this.props[2] + this.props[4],
        y: t * this.props[1] + e * this.props[3] + this.props[5]
      }
    }
    function o(t, e) {
      return [t * this.props[0] + e * this.props[2] + this.props[4], t * this.props[1] + e * this.props[3] + this.props[5]]
    }
    function l(t, e) {
      return R(t * this.props[0] + e * this.props[2] + this.props[4]) + "," + R(t * this.props[1] + e * this.props[3] + this.props[5])
    }
    function h() {
      return [this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5]]
    }
    function u() {
      return this.cssParts[1] = this.props.join(","),
      this.cssParts.join("")
    }
    function c() {
      return "" + this.toArray()
    }
    return function() {
      this.reset = t,
      this.rotate = e,
      this.scale = i,
      this.setTransform = r,
      this.translate = n,
      this.transform = s,
      this.applyToPoint = a,
      this.applyToPointArray = o,
      this.applyToPointStringified = l,
      this.toArray = h,
      this.toCSS = u,
      this.toString = c,
      this._t = this.transform,
      this.props = [1, 0, 0, 1, 0, 0],
      this.cssParts = ["matrix(", "", ")"]
    }
  }();
  !function() {
    for (var e = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !t.requestAnimationFrame; ++r)
      t.requestAnimationFrame = t[i[r] + "RequestAnimationFrame"],
      t.cancelAnimationFrame = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
    t.requestAnimationFrame || (t.requestAnimationFrame = function(i) {
      var r = (new Date).getTime()
        , n = Math.max(0, 16 - (r - e))
        , s = t.setTimeout(function() {
        i(r + n)
      }, n);
      return e = r + n,
      s
    }
    ),
    t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
      clearTimeout(t)
    }
    )
  }();
  var R, N = !0, F = (Math.round,
  Math.pow), V = Math.sqrt, O = Math.abs, B = Math.floor, q = Math.min, H = 50, X = Math.PI / 180;
  i(!1);
  var z = (function() {
    var t, e, i = [];
    for (t = 0; 256 > t; t += 1)
      e = t.toString(16),
      i[t] = 1 == e.length ? "0" + e : e;
    return function(t, e, r) {
      return 0 > t && (t = 0),
      0 > e && (e = 0),
      0 > r && (r = 0),
      "#" + i[t] + i[e] + i[r]
    }
  }(),
  function() {
    var t = [];
    return function(e, i) {
      return void 0 !== i && (e[3] = i),
      t[e[0]] || (t[e[0]] = {}),
      t[e[0]][e[1]] || (t[e[0]][e[1]] = {}),
      t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}),
      t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"),
      t[e[0]][e[1]][e[2]][e[3]]
    }
  }(),
  f())
    , U = p()
    , $ = function() {
    function t(t) {
      if (this.mdf = !1,
      this.lastFrame !== d && (this.lastFrame >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime || this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime))
        ;
      else {
        for (var e, i, r = 0, n = this.keyframes.length - 1, s = 1, a = !0; !(!a || (e = this.keyframes[r],
        i = this.keyframes[r + 1],
        r == n - 1 && t >= i.t - this.offsetTime) || i.t - this.offsetTime > t); )
          n - 1 > r ? r += s : a = !1;
        var o, l, h, u, c, f = 0;
        if (e.to) {
          e.bezierData || z.buildBezierData(e);
          var p = e.bezierData;
          if (t >= i.t - this.offsetTime || t < e.t - this.offsetTime) {
            var m = t >= i.t - this.offsetTime ? p.points.length - 1 : 0;
            for (l = p.points[m].point.length,
            o = 0; l > o; o += 1)
              this.v[o] = this.mult ? p.points[m].point[o] * this.mult : p.points[m].point[o],
              this.lastValue[o] !== this.v[o] && (this.mdf = !0,
              this.lastValue[o] = this.v[o])
          } else {
            e.__fnct ? c = e.__fnct : (c = z.getEasingCurve(e.o.x, e.o.y, e.i.x, e.i.y, e.n),
            e.__fnct = c),
            h = c("", t - (e.t - this.offsetTime), 0, 1, i.t - this.offsetTime - (e.t - this.offsetTime));
            var g, v = p.segmentLength * h, y = 0;
            for (s = 1,
            a = !0,
            u = p.points.length; a; ) {
              if (y += p.points[f].partialLength * s,
              0 === v || 0 === h || f == p.points.length - 1) {
                for (l = p.points[f].point.length,
                o = 0; l > o; o += 1)
                  this.v[o] = this.mult ? p.points[f].point[o] * this.mult : p.points[f].point[o],
                  this.lastValue[o] !== this.v[o] && (this.mdf = !0,
                  this.lastValue[o] = this.v[o]);
                break
              }
              if (v > y && v < y + p.points[f + 1].partialLength) {
                for (g = (v - y) / p.points[f + 1].partialLength,
                l = p.points[f].point.length,
                o = 0; l > o; o += 1)
                  this.v[o] = this.mult ? (p.points[f].point[o] + (p.points[f + 1].point[o] - p.points[f].point[o]) * g) * this.mult : p.points[f].point[o] + (p.points[f + 1].point[o] - p.points[f].point[o]) * g,
                  this.lastValue[o] !== this.v[o] && (this.mdf = !0,
                  this.lastValue[o] = this.v[o]);
                break
              }
              u - 1 > f && 1 == s || f > 0 && -1 == s ? f += s : a = !1
            }
          }
        } else {
          var b, x, _, w, E, T = !1;
          for (n = e.s.length,
          r = 0; n > r; r += 1)
            1 !== e.h && (e.o.x instanceof Array ? (T = !0,
            e.__fnct || (e.__fnct = []),
            e.__fnct[r] || (b = e.o.x[r] ? e.o.x[r] : e.o.x[0],
            x = e.o.y[r] ? e.o.y[r] : e.o.y[0],
            _ = e.i.x[r] ? e.i.x[r] : e.i.x[0],
            w = e.i.y[r] ? e.i.y[r] : e.i.y[0])) : (T = !1,
            e.__fnct || (b = e.o.x,
            x = e.o.y,
            _ = e.i.x,
            w = e.i.y)),
            T ? e.__fnct[r] ? c = e.__fnct[r] : (c = z.getEasingCurve(b, x, _, w),
            e.__fnct[r] = c) : e.__fnct ? c = e.__fnct : (c = z.getEasingCurve(b, x, _, w),
            e.__fnct = c),
            h = t >= i.t - this.offsetTime ? 1 : t < e.t - this.offsetTime ? 0 : c("", t - (e.t - this.offsetTime), 0, 1, i.t - this.offsetTime - (e.t - this.offsetTime))),
            E = 1 === e.h ? e.s[r] : e.s[r] + (e.e[r] - e.s[r]) * h,
            1 === n ? (this.v = this.mult ? E * this.mult : E,
            this.lastValue != this.v && (this.mdf = !0,
            this.lastValue = this.v)) : (this.v[r] = this.mult ? E * this.mult : E,
            this.lastValue[r] !== this.v[r] && (this.mdf = !0,
            this.lastValue[r] = this.v[r]))
        }
      }
      this.lastFrame = t
    }
    function i(t) {
      if (this.mdf = !1,
      this.lastFrame !== d && (this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime || this.lastFrame > this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime))
        ;
      else if (t < this.keyframes[0].t - this.offsetTime)
        this.mdf = !0,
        this.v = this.keyframes[0].s[0];
      else if (t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime)
        this.mdf = !0,
        this.v = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 2].s[0] : this.keyframes[this.keyframes.length - 2].e[0];
      else {
        this.mdf = !0;
        for (var e, i, r, n, s, a, o = 0, l = this.keyframes.length - 1, h = 1, u = !0; u && (e = this.keyframes[o],
        i = this.keyframes[o + 1],
        !(i.t - this.offsetTime > t && 1 == h)); )
          l - 1 > o && 1 == h || o > 0 && -1 == h ? o += h : u = !1;
        var c;
        if (1 !== e.h) {
          var f;
          e.__fnct ? f = e.__fnct : (f = z.getEasingCurve(e.o.x, e.o.y, e.i.x, e.i.y),
          e.__fnct = f),
          c = t >= i.t - this.offsetTime ? 1 : t < e.t - this.offsetTime ? 0 : f("", t - (e.t - this.offsetTime), 0, 1, i.t - this.offsetTime - (e.t - this.offsetTime))
        }
        for (n = this.shapeData.i.length,
        a = e.s[0].i[0].length,
        r = 0; n > r; r += 1)
          for (s = 0; a > s; s += 1)
            1 === e.h ? (this.shapeData.i[r][s] = e.s[0].i[r][s],
            this.shapeData.o[r][s] = e.s[0].o[r][s],
            this.shapeData.v[r][s] = e.s[0].v[r][s]) : (this.shapeData.i[r][s] = e.s[0].i[r][s] + (e.e[0].i[r][s] - e.s[0].i[r][s]) * c,
            this.shapeData.o[r][s] = e.s[0].o[r][s] + (e.e[0].o[r][s] - e.s[0].o[r][s]) * c,
            this.shapeData.v[r][s] = e.s[0].v[r][s] + (e.e[0].v[r][s] - e.s[0].v[r][s]) * c);
        this.v = this.shapeData
      }
      this.lastFrame = t
    }
    function r(t, e) {
      e = e ? e : 1,
      this.v = t * e,
      this.mdf = !1,
      this.k = !1
    }
    function n(t, e) {
      if (e) {
        var i, r = t.length;
        for (i = 0; r > i; i += 1)
          t[i] *= e
      }
      this.v = t,
      this.mdf = !1,
      this.k = !1
    }
    function s(e, i, r) {
      this.keyframes = i,
      this.offsetTime = e.st,
      this.lastValue = -99999,
      this.k = !0,
      this.mult = r,
      this.lastFrame = d,
      this.getInterpolatedValue = t
    }
    function a(e, i, r) {
      this.keyframes = i,
      this.offsetTime = e.st,
      this.k = !0,
      this.mult = r,
      this.getInterpolatedValue = t,
      this.v = new Array(i[0].s.length),
      this.lastValue = new Array(i[0].s.length),
      this.lastFrame = d
    }
    function o(t, e, i, o, l) {
      if (2 === i)
        return new f(t,e,l);
      if (7 === i)
        return new g(t,e,l);
      if (e.length) {
        if ("number" == typeof e[0])
          return new n(e,o);
        switch (i) {
        case 0:
          l.push(new s(t,e,o));
          break;
        case 1:
          l.push(new a(t,e,o))
        }
        return l[l.length - 1]
      }
      return new r(e,o)
    }
    function l(t, e) {
      this.k = !1,
      this.mdf = !1,
      this.closed = 3 === e ? t.cl : t.closed,
      this.shapeData = t.ks,
      this.v = 3 === e ? t.pt : t.ks
    }
    function h(t, e, r, n) {
      this.offsetTime = t.st,
      this.getInterpolatedValue = i,
      this.keyframes = 3 === n ? e.pt : e.ks,
      this.k = !0,
      this.closed = 3 === n ? e.cl : e.closed;
      var s, a = this.keyframes[0].s[0].i.length, o = this.keyframes[0].s[0].i[0].length;
      for (this.shapeData = {
        i: new Array(a),
        o: new Array(a),
        v: new Array(a)
      },
      s = 0; a > s; s += 1)
        this.shapeData.i[s] = new Array(o),
        this.shapeData.o[s] = new Array(o),
        this.shapeData.v[s] = new Array(o);
      this.lastFrame = d,
      r.push(this)
    }
    function u(t, e, i, r, n) {
      var s;
      if (3 === i || 4 === i) {
        var a = 3 === i ? e.pt : e.ks;
        s = a.length ? new h(t,e,r,i) : new l(e,i,r)
      } else
        5 === i ? s = new m(t,e,r) : 6 === i && (s = new p(t,e,r));
      var o = !1;
      if (n)
        for (var u = 0, c = n.length; c > u; ) {
          if (!n[u].closed) {
            o = !0;
            break
          }
          u += 1
        }
      return o ? new v(s,n,r) : s
    }
    function c(t, e, i, r) {
      return new y(t,e,i,r)
    }
    var d = -999999
      , f = function() {
      function t(t) {
        var e, i = this.dynamicProperties.length;
        for (this.mdf = !1,
        e = 0; i > e; e += 1)
          this.dynamicProperties[e].getInterpolatedValue(t),
          this.dynamicProperties[e].mdf && (this.mdf = !0);
        this.mdf && (this.data.p.s ? this.v.reset().translate(this.p.x.v, this.p.y.v).rotate(this.r.v).scale(this.s.v[0], this.s.v[1]).translate(-this.a.v[0], -this.a.v[1]) : this.v.reset().translate(this.p.v[0], this.p.v[1]).rotate(this.r.v).scale(this.s.v[0], this.s.v[1]).translate(-this.a.v[0], -this.a.v[1]))
      }
      return function(i, l, h) {
        this.dynamicProperties = [],
        this.mdf = !1,
        this.data = l,
        this.getInterpolatedValue = t,
        "number" == typeof l.a[0] ? this.a = new n(l.a) : (this.a = new a(i,l.a,0),
        this.dynamicProperties.push(this.a)),
        l.p.s ? this.p = {
          x: o(i, l.p.x, 0, 0, this.dynamicProperties),
          y: o(i, l.p.y, 0, 0, this.dynamicProperties)
        } : "number" == typeof l.p[0] ? this.p = new n(l.p) : (this.p = new a(i,l.p,0),
        this.dynamicProperties.push(this.p)),
        "number" == typeof l.s[0] ? this.s = new n(l.s,.01) : (this.s = new a(i,l.s,.01),
        this.dynamicProperties.push(this.s)),
        l.r.length ? (this.r = new s(i,l.r,X),
        this.dynamicProperties.push(this.r)) : this.r = new r(l.r,X),
        this.dynamicProperties.length ? (h.push(this),
        this.v = new e) : this.v = this.data.p.s ? (new e).translate(this.p.x.v, this.p.y.v).rotate(this.r.v).scale(this.s.v[0], this.s.v[1]).translate(-this.a.v[0], -this.a.v[1]) : (new e).translate(this.p.v[0], this.p.v[1]).rotate(this.r.v).scale(this.s.v[0], this.s.v[1]).translate(-this.a.v[0], -this.a.v[1])
      }
    }()
      , p = function() {
      function t() {
        var t = this.p.v[0]
          , e = this.p.v[1]
          , r = this.s.v[0] / 2
          , n = this.s.v[1] / 2;
        2 !== this.d && 3 !== this.d ? (this.v.v[0] = [t, e - n],
        this.v.i[0] = [t - r * i, e - n],
        this.v.o[0] = [t + r * i, e - n],
        this.v.v[1] = [t + r, e],
        this.v.i[1] = [t + r, e - n * i],
        this.v.o[1] = [t + r, e + n * i],
        this.v.v[2] = [t, e + n],
        this.v.i[2] = [t + r * i, e + n],
        this.v.o[2] = [t - r * i, e + n],
        this.v.v[3] = [t - r, e],
        this.v.i[3] = [t - r, e + n * i],
        this.v.o[3] = [t - r, e - n * i]) : (this.v.v[0] = [t, e - n],
        this.v.o[0] = [t - r * i, e - n],
        this.v.i[0] = [t + r * i, e - n],
        this.v.v[1] = [t - r, e],
        this.v.o[1] = [t - r, e + n * i],
        this.v.i[1] = [t - r, e - n * i],
        this.v.v[2] = [t, e + n],
        this.v.o[2] = [t + r * i, e + n],
        this.v.i[2] = [t - r * i, e + n],
        this.v.v[3] = [t + r, e],
        this.v.o[3] = [t + r, e - n * i],
        this.v.i[3] = [t + r, e + n * i])
      }
      function e(t) {
        var e, i = this.dynamicProperties.length;
        for (this.mdf = !1,
        e = 0; i > e; e += 1)
          this.dynamicProperties[e].getInterpolatedValue(t),
          this.dynamicProperties[e].mdf && (this.mdf = !0);
        this.mdf && this.convertEllToPath()
      }
      var i = .5519;
      return function(i, r, s) {
        this.v = {
          v: new Array(4),
          i: new Array(4),
          o: new Array(4),
          c: !0
        },
        this.d = r.d,
        this.dynamicProperties = [],
        r.closed = !0,
        this.closed = !0,
        this.mdf = !1,
        this.getInterpolatedValue = e,
        this.convertEllToPath = t,
        "number" == typeof r.p[0] ? this.p = new n(r.p) : (this.p = new a(i,r.p,0),
        this.dynamicProperties.push(this.p)),
        "number" == typeof r.s[0] ? this.s = new n(r.s) : (this.s = new a(i,r.s,0),
        this.dynamicProperties.push(this.s)),
        this.dynamicProperties.length ? s.push(this) : this.convertEllToPath()
      }
    }()
      , m = function() {
      function t(t) {
        var e, i = this.dynamicProperties.length;
        for (this.mdf = !1,
        e = 0; i > e; e += 1)
          this.dynamicProperties[e].getInterpolatedValue(t),
          this.dynamicProperties[e].mdf && (this.mdf = !0);
        this.mdf && this.convertRectToPath()
      }
      function e() {
        var t = this.p.v[0]
          , e = this.p.v[1]
          , i = this.s.v[0] / 2
          , r = this.s.v[1] / 2
          , n = q(i, r, this.r.v)
          , s = n * (1 - .5519);
        2 === this.d || 1 === this.d ? (this.v.v[0] = [t + i, e - r + n],
        this.v.o[0] = this.v.v[0],
        this.v.i[0] = [t + i, e - r + s],
        this.v.v[1] = [t + i, e + r - n],
        this.v.o[1] = [t + i, e + r - s],
        this.v.i[1] = this.v.v[1],
        this.v.v[2] = [t + i - n, e + r],
        this.v.o[2] = this.v.v[2],
        this.v.i[2] = [t + i - s, e + r],
        this.v.v[3] = [t - i + n, e + r],
        this.v.o[3] = [t - i + s, e + r],
        this.v.i[3] = this.v.v[3],
        this.v.v[4] = [t - i, e + r - n],
        this.v.o[4] = this.v.v[4],
        this.v.i[4] = [t - i, e + r - s],
        this.v.v[5] = [t - i, e - r + n],
        this.v.o[5] = [t - i, e - r + s],
        this.v.i[5] = this.v.v[5],
        this.v.v[6] = [t - i + n, e - r],
        this.v.o[6] = this.v.v[6],
        this.v.i[6] = [t - i + s, e - r],
        this.v.v[7] = [t + i - n, e - r],
        this.v.o[7] = [t + i - s, e - r],
        this.v.i[7] = this.v.v[7]) : (this.v.v[0] = [t + i, e - r + n],
        this.v.o[0] = [t + i, e - r + s],
        this.v.i[0] = this.v.v[0],
        this.v.v[1] = [t + i - n, e - r],
        this.v.o[1] = this.v.v[1],
        this.v.i[1] = [t + i - s, e - r],
        this.v.v[2] = [t - i + n, e - r],
        this.v.o[2] = [t - i + s, e - r],
        this.v.i[2] = this.v.v[2],
        this.v.v[3] = [t - i, e - r + n],
        this.v.o[3] = this.v.v[3],
        this.v.i[3] = [t - i, e - r + s],
        this.v.v[4] = [t - i, e + r - n],
        this.v.o[4] = [t - i, e + r - s],
        this.v.i[4] = this.v.v[4],
        this.v.v[5] = [t - i + n, e + r],
        this.v.o[5] = this.v.v[5],
        this.v.i[5] = [t - i + s, e + r],
        this.v.v[6] = [t + i - n, e + r],
        this.v.o[6] = [t + i - s, e + r],
        this.v.i[6] = this.v.v[6],
        this.v.v[7] = [t + i, e + r - n],
        this.v.o[7] = this.v.v[7],
        this.v.i[7] = [t + i, e + r - s])
      }
      return function(i, o, l) {
        this.v = {
          v: new Array(8),
          i: new Array(8),
          o: new Array(8),
          c: !0
        },
        this.d = o.d,
        this.dynamicProperties = [],
        this.mdf = !1,
        o.closed = !0,
        this.closed = !0,
        this.getInterpolatedValue = t,
        this.convertRectToPath = e,
        "number" == typeof o.p[0] ? this.p = new n(o.p) : (this.p = new a(i,o.p,0),
        this.dynamicProperties.push(this.p)),
        "number" == typeof o.s[0] ? this.s = new n(o.s) : (this.s = new a(i,o.s,0),
        this.dynamicProperties.push(this.s)),
        o.r.length ? (this.r = new s(i,o.r,0),
        this.dynamicProperties.push(this.r)) : this.r = new r(o.r,0),
        this.dynamicProperties.length ? l.push(this) : this.convertRectToPath()
      }
    }()
      , g = function() {
      function t(t, e) {
        var i, r = this.dynamicProperties.length;
        for (this.mdf = !1,
        i = 0; r > i; i += 1)
          this.dynamicProperties[i].getInterpolatedValue(t),
          this.dynamicProperties[i].mdf && (this.mdf = !0);
        if (this.mdf || e) {
          var n = this.o.v % 360 / 360;
          if (0 === n && 0 === this.s.v && 1 == this.e.v)
            return void (this.isTrimming = !1);
          this.isTrimming = !0,
          0 > n && (n += 1);
          var s = this.s.v + n
            , a = this.e.v + n;
          if (s > a) {
            var o = s;
            s = a,
            a = o
          }
          this.sValue = s,
          this.eValue = a,
          this.oValue = n
        }
      }
      return function(e, i, n) {
        this.dynamicProperties = [],
        this.sValue = 0,
        this.eValue = 0,
        this.oValue = 0,
        this.mdf = !1,
        this.getInterpolatedValue = t,
        this.k = !1,
        this.isTrimming = !1,
        i.s.length ? (this.s = new s(e,i.s,.01),
        this.dynamicProperties.push(this.s)) : this.s = new r(i.s,.01),
        i.e.length ? (this.e = new s(e,i.e,.01),
        this.dynamicProperties.push(this.e)) : this.e = new r(i.e,.01),
        i.o.length ? (this.o = new s(e,i.o,0),
        this.dynamicProperties.push(this.o)) : this.o = new r(i.o,0),
        this.dynamicProperties.length ? (n.push(this),
        this.k = !0) : this.getInterpolatedValue(0, !0)
      }
    }()
      , v = function() {
      function t(t, e) {
        this.totalLength = 0;
        var i, r = t.v, n = t.o, s = t.i, a = r.length;
        for (i = 0; a - 1 > i; i += 1)
          this.lengths[i] = z.getBezierLength(r[i], r[i + 1], n[i], s[i + 1]),
          this.totalLength += this.lengths[i].addedLength;
        e && (this.lengths[i] = z.getBezierLength(r[i], r[0], n[i], s[0]),
        this.totalLength += this.lengths[i].addedLength)
      }
      function e(t, e, i, r) {
        this.nextO[this.segmentCount] = e,
        this.nextI[this.segmentCount + 1] = i,
        this.nextV[this.segmentCount + 1] = r,
        this.pathStarted ? this.nextV[this.segmentCount] = t : (this.pathStarted = !0,
        this.v.s[this.segmentCount] = t),
        this.segmentCount += 1
      }
      function i(t, e) {
        this.mdf = e ? !0 : !1;
        var i = 0
          , r = this.trims.length;
        for (this.pathStarted = !1; r > i; ) {
          if (this.trims[i].mdf) {
            this.mdf = !0;
            break
          }
          i += 1
        }
        if (this.mdf = this.prop.mdf ? !0 : this.mdf,
        this.mdf) {
          this.nextO.length = 0,
          this.nextI.length = 0,
          this.nextV.length = 0,
          this.v.s.length = 0;
          var n = this.prop.closed;
          this.getSegmentsLength(this.prop.v, n);
          var s, a, o, l, h, u, c = this.prop.v, d = this.trims.length;
          for (s = 0; d > s; s += 1)
            if (this.trims[s].isTrimming) {
              if (a = this.trims[s].eValue,
              o = this.trims[s].sValue,
              l = this.trims[s].oValue,
              a === o)
                return this.v.v = this.nextV,
                this.v.o = this.nextO,
                void (this.v.i = this.nextI);
              1 >= a ? (this.segments[0].s = this.totalLength * o,
              this.segments[0].e = this.totalLength * a,
              this.segments[1].vl = !1) : o >= 1 ? (this.segments[0].s = this.totalLength * (o - 1),
              this.segments[0].e = this.totalLength * (a - 1),
              this.segments[1].vl = !1) : (this.segments[0].s = this.totalLength * o,
              this.segments[0].e = this.totalLength,
              this.segments[1].s = 0,
              this.segments[1].e = this.totalLength * (a - 1),
              this.segments[1].vl = !0),
              this.v.v = c.v,
              this.v.o = c.o,
              this.v.i = c.i,
              u = this.v.v.length;
              var f = 0
                , p = 0;
              r = this.segments[1].vl ? 2 : 1;
              var m;
              for (this.segmentCount = 0,
              i = 0; r > i; i += 1) {
                for (f = 0,
                h = 1; u > h; h++)
                  if (p = this.lengths[h - 1].addedLength,
                  f + p < this.segments[i].s)
                    f += p;
                  else {
                    if (f > this.segments[i].e)
                      break;
                    this.segments[i].s <= f && this.segments[i].e >= f + p ? this.addSegment(this.v.v[h - 1], this.v.o[h - 1], this.v.i[h], this.v.v[h], this.lengths[h - 1]) : (m = z.getNewSegment(this.v.v[h - 1], this.v.v[h], this.v.o[h - 1], this.v.i[h], (this.segments[i].s - f) / p, (this.segments[i].e - f) / p, this.lengths[h - 1]),
                    this.addSegment(m.pt1, m.pt3, m.pt4, m.pt2)),
                    f += p
                  }
                n !== !1 ? f <= this.segments[i].e && (p = this.lengths[h - 1].addedLength,
                this.segments[i].s <= f && this.segments[i].e >= f + p ? this.addSegment(this.v.v[h - 1], this.v.o[h - 1], this.v.i[0], this.v.v[0], this.lengths[h - 1]) : (m = z.getNewSegment(this.v.v[h - 1], this.v.v[0], this.v.o[h - 1], this.v.i[0], (this.segments[i].s - f) / p, (this.segments[i].e - f) / p, this.lengths[h - 1]),
                this.addSegment(m.pt1, m.pt3, m.pt4, m.pt2))) : this.pathStarted = !1
              }
              n = !1
            } else
              this.v.v = c.v,
              this.v.o = c.o,
              this.v.i = c.i;
          this.nextV.length ? (this.v.v = this.nextV,
          this.v.o = this.nextO,
          this.v.i = this.nextI) : this.v.s.length = 0,
          this.v.c = n
        }
      }
      return function(r, n, s) {
        this.trims = [],
        this.k = !1,
        this.mdf = !1,
        this.pathStarted = !1,
        this.segments = [{
          s: 0,
          e: 0,
          vl: !0
        }, {
          s: 0,
          e: 0,
          vl: !1
        }],
        this.nextO = [],
        this.nextV = [],
        this.nextI = [],
        this.v = {
          i: null,
          o: null,
          v: null,
          s: [],
          c: !1
        };
        var a, o = n.length;
        for (a = 0; o > a; a += 1)
          n[a].closed || (this.k = n[a].trimProp.k ? !0 : this.k,
          this.trims.push(n[a].trimProp));
        this.prop = r,
        o = this.prop.shapeData.v.length - 1,
        o += this.prop.closed ? 1 : 0,
        this.lengths = new Array(o),
        this.k = r.k ? !0 : this.k,
        this.totalLength = 0,
        this.getInterpolatedValue = i,
        this.addSegment = e,
        this.getSegmentsLength = t,
        this.k ? s.push(this) : this.getInterpolatedValue(0, !0)
      }
    }()
      , y = function() {
      function t(t, e) {
        var i = 0
          , r = this.dataProps.length;
        for (this.mdf = e ? !0 : !1; r > i; ) {
          if (this.dataProps[i].p.mdf) {
            this.mdf = !0;
            break
          }
          i += 1
        }
        if (this.mdf)
          for ("svg" === this.renderer && (this.dasharray = ""),
          i = 0; r > i; i += 1)
            "o" != this.dataProps[i].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[i].p.v : this.dasharray[i] = this.dataProps[i].p.v : this.dashoffset = this.dataProps[i].p.v
      }
      return function(e, i, r, n) {
        this.dataProps = new Array(i.length),
        this.renderer = r,
        this.mdf = !1,
        this.k = !1,
        this.dasharray = "svg" === this.renderer ? "" : new Array(i.length - 1),
        this.dashoffset = 0;
        var s, a, l = i.length;
        for (s = 0; l > s; s += 1)
          a = o(e, i[s].v, 0, 0, n),
          this.k = a.k ? !0 : this.k,
          this.dataProps[s] = {
            n: i[s].n,
            p: a
          };
        this.getInterpolatedValue = t,
        this.k ? n.push(this) : this.getInterpolatedValue(0, !0)
      }
    }()
      , b = {};
    return b.getProp = o,
    b.getShapeProp = u,
    b.getDashProp = c,
    b
  }();
  m.prototype.createItem = function(t, e, i) {
    switch (t.ty) {
    case 2:
      return this.createImage(t, e, i);
    case 0:
      return this.createComp(t, e, i);
    case 1:
      return this.createSolid(t, e, i);
    case 4:
      return this.createShape(t, e, i);
    case 5:
      return this.createText(t, e, i);
    case 99:
      return this.createPlaceHolder(t, e)
    }
    return this.createBase(t, e)
  }
  ,
  m.prototype.buildItems = function(t, e, i, r) {
    var n, s = t.length;
    i || (i = this.elements),
    e || (e = this.animationItem.container);
    var a;
    for (n = s - 1; n >= 0; n--)
      i[n] = this.createItem(t[n], e, r),
      0 === t[n].ty && (a = [],
      this.buildItems(t[n].layers, i[n].getDomElement(), a, r),
      i[n].setElements(a)),
      t[n].td && i[n + 1].setMatte(i[n].layerId)
  }
  ,
  m.prototype.includeLayers = function(t, e, i) {
    var r, n = t.length;
    i || (i = this.elements),
    e || (e = this.animationItem.container);
    var s, a, o, l = i.length;
    for (r = 0; n > r; r += 1)
      for (s = 0; l > s; ) {
        if (i[s].data.id == t[r].id) {
          o = i[s],
          i[s] = this.createItem(t[r], e, o),
          0 === t[r].ty && (a = [],
          this.buildItems(t[r].layers, i[s].getDomElement(), a, o),
          i[s].setElements(a));
          break
        }
        s += 1
      }
    for (r = 0; n > r; r += 1)
      t[r].td && i[r + 1].setMatte(i[r].layerId)
  }
  ,
  m.prototype.createBase = function(t, e, i) {
    return new b(t,e,this.globalData,i)
  }
  ,
  m.prototype.createPlaceHolder = function(t, e) {
    return new W(t,e,this.globalData)
  }
  ,
  m.prototype.createShape = function(t, e, i) {
    return new w(t,e,this.globalData,i)
  }
  ,
  m.prototype.createText = function(t, e, i) {
    return new S(t,e,this.globalData,i)
  }
  ,
  m.prototype.createImage = function(t, e, i) {
    return new _(t,e,this.globalData,i)
  }
  ,
  m.prototype.createComp = function(t, e, i) {
    return new x(t,e,this.globalData,i)
  }
  ,
  m.prototype.createSolid = function(t, e, i) {
    return new T(t,e,this.globalData,i)
  }
  ,
  m.prototype.configAnimation = function(t) {
    this.animationItem.container = document.createElementNS(M, "svg"),
    this.animationItem.container.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
    this.animationItem.container.setAttribute("width", t.w),
    this.animationItem.container.setAttribute("height", t.h),
    this.animationItem.container.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
    this.animationItem.container.setAttribute("preserveAspectRatio", "xMidYMid meet"),
    this.animationItem.container.style.width = "100%",
    this.animationItem.container.style.height = "100%",
    this.animationItem.container.style.transform = "translate3d(0,0,0)",
    this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px",
    this.animationItem.wrapper.appendChild(this.animationItem.container);
    var e = document.createElementNS(M, "defs");
    this.globalData.defs = e,
    this.animationItem.container.appendChild(e),
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
    this.globalData.getPath = this.animationItem.getPath.bind(this.animationItem),
    this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem),
    this.globalData.compSize = {
      w: t.w,
      h: t.h
    },
    this.globalData.frameRate = t.fr;
    var i = document.createElementNS(M, "clipPath")
      , r = document.createElementNS(M, "rect");
    r.setAttribute("width", t.w),
    r.setAttribute("height", t.h),
    r.setAttribute("x", 0),
    r.setAttribute("y", 0);
    var n = "animationMask_" + c(10);
    i.setAttribute("id", n),
    i.appendChild(r);
    var s = document.createElementNS(M, "g");
    s.setAttribute("clip-path", "url(#" + n + ")"),
    this.animationItem.container.appendChild(s),
    e.appendChild(i),
    this.animationItem.container = s,
    this.layers = t.layers
  }
  ,
  m.prototype.buildStage = function(t, e, i) {
    var r, n, s = e.length;
    for (i || (i = this.elements),
    r = s - 1; r >= 0; r--)
      n = e[r],
      void 0 !== n.parent && this.buildItemParenting(n, i[r], e, n.parent, i, !0),
      0 === n.ty && this.buildStage(i[r].getComposingElement(), n.layers, i[r].getElements())
  }
  ,
  m.prototype.buildItemParenting = function(t, e, i, r, n, s) {
    t.parents || (t.parents = []),
    s && e.resetHierarchy();
    for (var a = 0, o = i.length; o > a; )
      i[a].ind == r && (e.getHierarchy().push(n[a]),
      void 0 !== i[a].parent && this.buildItemParenting(t, e, i, i[a].parent, n, !1)),
      a += 1
  }
  ,
  m.prototype.destroy = function() {
    this.animationItem.wrapper.innerHTML = "",
    this.animationItem.container = null,
    this.globalData.defs = null;
    var t, e = this.layers.length;
    for (t = 0; e > t; t++)
      this.elements[t].destroy();
    this.elements.length = 0,
    this.destroyed = !0
  }
  ,
  m.prototype.updateContainerSize = function() {}
  ,
  m.prototype.renderFrame = function(t) {
    if (this.lastFrame != t && !this.destroyed) {
      null === t ? t = this.lastFrame : this.lastFrame = t,
      this.globalData.frameNum = t;
      var e, i = this.layers.length;
      for (e = 0; i > e; e++)
        this.elements[e].prepareFrame(t - this.layers[e].st);
      for (e = 0; i > e; e++)
        this.elements[e].renderFrame()
    }
  }
  ,
  g.prototype.createItem = function(t) {
    switch (t.ty) {
    case 0:
      return this.createComp(t);
    case 1:
      return this.createSolid(t);
    case 2:
      return this.createImage(t);
    case 4:
      return this.createShape(t);
    case 5:
      return this.createText(t);
    case 99:
      return this.createPlaceHolder(t);
    default:
      return this.createBase(t)
    }
    return this.createBase(t, parentContainer)
  }
  ,
  g.prototype.buildItems = function(t, e) {
    e || (e = this.elements);
    var i, r = t.length;
    for (i = 0; r > i; i++)
      if (e[i] = this.createItem(t[i]),
      0 === t[i].ty) {
        var n = [];
        this.buildItems(t[i].layers, n),
        e[e.length - 1].setElements(n)
      }
  }
  ,
  g.prototype.includeLayers = function(t, e, i) {
    var r, n = t.length;
    i || (i = this.elements);
    var s, a, o = i.length;
    for (r = 0; n > r; r += 1)
      for (s = 0; o > s; ) {
        if (i[s].data.id == t[r].id) {
          i[s] = this.createItem(t[r], e),
          0 === t[r].ty && (a = [],
          this.buildItems(t[r].layers, a),
          i[s].setElements(a));
          break
        }
        s += 1
      }
  }
  ,
  g.prototype.createBase = function(t) {
    return new P(t,this.globalData)
  }
  ,
  g.prototype.createShape = function(t) {
    return new k(t,this.globalData)
  }
  ,
  g.prototype.createText = function(t) {
    return new I(t,this.globalData)
  }
  ,
  g.prototype.createPlaceHolder = function(t) {
    return new W(t,null,this.globalData)
  }
  ,
  g.prototype.createImage = function(t) {
    return new A(t,this.globalData)
  }
  ,
  g.prototype.createComp = function(t) {
    return new C(t,this.globalData)
  }
  ,
  g.prototype.createSolid = function(t) {
    return new j(t,this.globalData)
  }
  ,
  g.prototype.ctxTransform = function(t) {
    if (!this.renderConfig.clearCanvas)
      return void this.canvasContext.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
    this.contextData.cTr.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
    var e = this.contextData.cTr.props;
    this.canvasContext.setTransform(e[0], e[1], e[2], e[3], e[4], e[5])
  }
  ,
  g.prototype.ctxOpacity = function(t) {
    return this.renderConfig.clearCanvas ? (this.contextData.cO *= 0 > t ? 0 : t,
    void (this.canvasContext.globalAlpha = this.contextData.cO)) : void (this.canvasContext.globalAlpha *= 0 > t ? 0 : t)
  }
  ,
  g.prototype.reset = function() {
    return this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0,
    this.contextData.cTr.reset(),
    void (this.contextData.cO = 1)) : void this.canvasContext.restore()
  }
  ,
  g.prototype.save = function(t) {
    if (!this.renderConfig.clearCanvas)
      return void this.canvasContext.save();
    t && this.canvasContext.save();
    var e = this.contextData.cTr.props;
    (null === this.contextData.saved[this.contextData.cArrPos] || void 0 === this.contextData.saved[this.contextData.cArrPos]) && (this.contextData.saved[this.contextData.cArrPos] = new Array(6));
    var i, r = 6, n = this.contextData.saved[this.contextData.cArrPos];
    for (i = 0; r > i; i += 1)
      n[i] = e[i];
    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
    this.contextData.cArrPos += 1
  }
  ,
  g.prototype.restore = function(t) {
    if (!this.renderConfig.clearCanvas)
      return void this.canvasContext.restore();
    t && this.canvasContext.restore(),
    this.contextData.cArrPos -= 1;
    var e, i = this.contextData.saved[this.contextData.cArrPos], r = 6, n = this.contextData.cTr.props;
    for (e = 0; r > e; e += 1)
      n[e] = i[e];
    this.canvasContext.setTransform(i[0], i[1], i[2], i[3], i[4], i[5]),
    i = this.contextData.savedOp[this.contextData.cArrPos],
    this.contextData.cO = i,
    this.canvasContext.globalAlpha = i
  }
  ,
  g.prototype.configAnimation = function(t) {
    this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"),
    this.animationItem.container.style.width = "100%",
    this.animationItem.container.style.height = "100%",
    this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px",
    this.animationItem.wrapper.appendChild(this.animationItem.container),
    this.canvasContext = this.animationItem.container.getContext("2d")) : this.canvasContext = this.renderConfig.context,
    this.globalData.canvasContext = this.canvasContext,
    this.globalData.renderer = this,
    this.globalData.isDashed = !1,
    this.globalData.totalFrames = Math.floor(t.tf),
    this.globalData.compWidth = t.w,
    this.globalData.compHeight = t.h,
    this.globalData.frameRate = t.fr,
    this.layers = t.layers,
    this.transformCanvas = {},
    this.transformCanvas.w = t.w,
    this.transformCanvas.h = t.h,
    this.updateContainerSize()
  }
  ,
  g.prototype.updateContainerSize = function() {
    var t, e;
    if (this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth,
    e = this.animationItem.wrapper.offsetHeight,
    this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr),
    this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr,
    e = this.canvasContext.canvas.height * this.renderConfig.dpr),
    "fit" == this.renderConfig.scaleMode) {
      var i = t / e
        , r = this.transformCanvas.w / this.transformCanvas.h;
      r > i ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
      this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr),
      this.transformCanvas.tx = 0,
      this.transformCanvas.ty = (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr),
      this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr),
      this.transformCanvas.tx = (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr,
      this.transformCanvas.ty = 0)
    } else
      this.transformCanvas.sx = this.renderConfig.dpr,
      this.transformCanvas.sy = this.renderConfig.dpr,
      this.transformCanvas.tx = 0,
      this.transformCanvas.ty = 0;
    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, this.transformCanvas.sy, this.transformCanvas.tx, this.transformCanvas.ty],
    this.globalData.cWidth = t,
    this.globalData.cHeight = e
  }
  ,
  g.prototype.buildStage = function(t, e, i) {
    i || (i = this.elements);
    var r, n, s = e.length;
    for (r = s - 1; r >= 0; r--)
      n = e[r],
      void 0 !== n.parent && this.buildItemHierarchy(n, i[r], e, n.parent, i, !0),
      0 == n.ty && this.buildStage(null, n.layers, i[r].getElements())
  }
  ,
  g.prototype.buildItemHierarchy = function(t, e, i, r, n, s) {
    var a = 0
      , o = i.length;
    for (s && e.resetHierarchy(); o > a; )
      i[a].ind === r && (e.getHierarchy().push(n[a]),
      void 0 !== i[a].parent && this.buildItemHierarchy(t, e, i, i[a].parent, n, !1)),
      a += 1
  }
  ,
  g.prototype.destroy = function() {
    this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
    var t, e = this.layers.length;
    for (t = e - 1; t >= 0; t -= 1)
      this.elements[t].destroy();
    this.elements.length = 0,
    this.globalData.canvasContext = null,
    this.animationItem.container = null,
    this.destroyed = !0
  }
  ,
  g.prototype.renderFrame = function(t) {
    if (!(this.lastFrame == t && this.renderConfig.clearCanvas === !0 || this.destroyed)) {
      this.lastFrame = t,
      this.globalData.frameNum = t - this.animationItem.firstFrame,
      this.renderConfig.clearCanvas === !0 ? (this.reset(),
      this.canvasContext.canvas.width = this.canvasContext.canvas.width) : this.save(),
      this.ctxTransform(this.transformCanvas.props),
      this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
      this.canvasContext.clip();
      var e, i = this.layers.length;
      for (e = 0; i > e; e++)
        this.elements[e].prepareFrame(t - this.layers[e].st);
      for (e = i - 1; e >= 0; e -= 1)
        this.elements[e].renderFrame();
      this.renderConfig.clearCanvas !== !0 && this.restore()
    }
  }
  ,
  v.prototype.prepareFrame = function(t) {
    var e, i = this.dynamicProperties.length;
    for (e = 0; i > e; e += 1)
      this.dynamicProperties[e].getInterpolatedValue(t)
  }
  ,
  v.prototype.renderFrame = function() {
    var t, e = this.data.masksProperties.length;
    for (t = 0; e > t; t++)
      "n" !== this.data.masksProperties[t].mode && (this.viewData[t].prop.mdf || this.firstFrame) && this.drawPath(this.data.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]);
    this.firstFrame = !1
  }
  ,
  v.prototype.getMaskelement = function() {
    return this.maskElement
  }
  ,
  v.prototype.createLayerSolidPath = function() {
    var t = "M0,0 ";
    return t += " h" + this.globalData.compSize.w,
    t += " v" + this.globalData.compSize.h,
    t += " h-" + this.globalData.compSize.w,
    t += " v-" + this.globalData.compSize.h + " "
  }
  ,
  v.prototype.drawPath = function(t, e, i) {
    var r, n, s = "";
    for (n = e.v.length,
    r = 1; n > r; r += 1)
      1 == r && (s += " M" + R(e.v[0][0]) + "," + R(e.v[0][1])),
      s += " C" + R(e.o[r - 1][0]) + "," + R(e.o[r - 1][1]) + " " + R(e.i[r][0]) + "," + R(e.i[r][1]) + " " + R(e.v[r][0]) + "," + R(e.v[r][1]);
    t.cl && (s += " C" + R(e.o[r - 1][0]) + "," + R(e.o[r - 1][1]) + " " + R(e.i[0][0]) + "," + R(e.i[0][1]) + " " + R(e.v[0][0]) + "," + R(e.v[0][1])),
    i.lastPath !== s && (t.inv ? i.elem.setAttribute("d", this.solidPath + s) : i.elem.setAttribute("d", s),
    i.lastPath = s)
  }
  ,
  v.prototype.destroy = function() {
    this.element = null,
    this.globalData = null,
    this.maskElement = null,
    this.data = null,
    this.paths = null,
    this.masksProperties = null
  }
  ,
  y.prototype.prepareFrame = function(t) {
    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isVisible !== !0 && (this.isVisible = !0,
    this.firstFrame = !0,
    this.data.hasMask && (this.maskManager.firstFrame = !0)) : this.isVisible !== !1 && (this.isVisible = !1);
    var e, i = this.dynamicProperties.length;
    for (e = 0; i > e; e += 1)
      this.dynamicProperties[e].getInterpolatedValue(t);
    this.data.hasMask && this.maskManager.prepareFrame(t),
    this.currentFrameNum = t
  }
  ,
  y.prototype.init = function() {
    this.hidden = !1,
    this.firstFrame = !0,
    this.isVisible = !1,
    this.dynamicProperties = [],
    this.currentFrameNum = -99999,
    this.lastNum = -99999,
    this.finalTransform = {
      op: $.getProp(this.data, this.data.ks.o, 0, .01, this.dynamicProperties),
      mProp: $.getProp(this.data, this.data.ks, 2, null, this.dynamicProperties),
      matMdf: !1,
      opMdf: !1,
      mat: new e,
      opacity: 1
    },
    this.createElements(),
    this.data.hasMask && this.addMasks(this.data)
  }
  ,
  y.prototype.getType = function() {
    return this.type
  }
  ,
  y.prototype.resetHierarchy = function() {
    this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = []
  }
  ,
  y.prototype.getHierarchy = function() {
    return this.hierarchy || (this.hierarchy = []),
    this.hierarchy
  }
  ,
  y.prototype.getLayerSize = function() {
    return 5 === this.data.ty ? {
      w: this.data.textData.width,
      h: this.data.textData.height
    } : {
      w: this.data.width,
      h: this.data.height
    }
  }
  ,
  d(y, b),
  b.prototype.appendNodeToParent = function(t) {
    if (this.placeholder) {
      var e = this.placeholder.phElement;
      e.parentNode.insertBefore(t, e)
    } else
      this.parentContainer.appendChild(t)
  }
  ,
  b.prototype.createElements = function() {
    if (this.data.td) {
      if (3 == this.data.td)
        this.layerElement = document.createElementNS(M, "mask"),
        this.layerElement.setAttribute("id", this.layerId),
        this.layerElement.setAttribute("mask-type", "luminance"),
        this.globalData.defs.appendChild(this.layerElement);
      else if (2 == this.data.td) {
        var t = document.createElementNS(M, "mask");
        t.setAttribute("id", this.layerId),
        t.setAttribute("mask-type", "alpha");
        var e = document.createElementNS(M, "g");
        t.appendChild(e),
        this.layerElement = document.createElementNS(M, "g");
        var i = document.createElementNS(M, "filter")
          , r = c(10);
        i.setAttribute("id", r),
        i.setAttribute("filterUnits", "objectBoundingBox"),
        i.setAttribute("x", "0%"),
        i.setAttribute("y", "0%"),
        i.setAttribute("width", "100%"),
        i.setAttribute("height", "100%");
        var n = document.createElementNS(M, "feComponentTransfer");
        n.setAttribute("in", "SourceGraphic"),
        i.appendChild(n);
        var s = document.createElementNS(M, "feFuncA");
        s.setAttribute("type", "table"),
        s.setAttribute("tableValues", "1.0 0.0"),
        n.appendChild(s),
        this.globalData.defs.appendChild(i);
        var a = document.createElementNS(M, "rect");
        a.setAttribute("width", "100%"),
        a.setAttribute("height", "100%"),
        a.setAttribute("x", "0"),
        a.setAttribute("y", "0"),
        a.setAttribute("fill", "#ffffff"),
        a.setAttribute("opacity", "0"),
        e.setAttribute("filter", "url(#" + r + ")"),
        e.appendChild(a),
        e.appendChild(this.layerElement),
        this.globalData.defs.appendChild(t)
      } else {
        this.layerElement = document.createElementNS(M, "g");
        var o = document.createElementNS(M, "mask");
        o.setAttribute("id", this.layerId),
        o.setAttribute("mask-type", "alpha"),
        o.appendChild(this.layerElement),
        this.globalData.defs.appendChild(o)
      }
      this.data.hasMask && (this.maskedElement = this.layerElement)
    } else
      this.data.hasMask ? (this.layerElement = document.createElementNS(M, "g"),
      this.data.tt ? (this.matteElement = document.createElementNS(M, "g"),
      this.matteElement.appendChild(this.layerElement),
      this.appendNodeToParent(this.matteElement)) : this.appendNodeToParent(this.layerElement),
      this.maskedElement = this.layerElement) : this.data.tt ? (this.matteElement = document.createElementNS(M, "g"),
      this.matteElement.setAttribute("id", this.layerId),
      this.appendNodeToParent(this.matteElement),
      this.layerElement = this.matteElement) : this.layerElement = this.parentContainer;
    !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(M, "g"),
    this.appendNodeToParent(this.layerElement)),
    this.layerElement.setAttribute("id", this.data.ln))
  }
  ,
  b.prototype.renderFrame = function(t) {
    if (3 === this.data.ty)
      return !1;
    if (this.currentFrameNum === this.lastNum || !this.isVisible)
      return this.isVisible;
    this.lastNum = this.currentFrameNum,
    this.data.hasMask && this.maskManager.renderFrame(),
    this.finalTransform.opMdf = this.finalTransform.op.mdf,
    this.finalTransform.matMdf = this.finalTransform.mProp.mdf,
    this.finalTransform.opacity = this.finalTransform.op.v,
    this.firstFrame && (this.finalTransform.opMdf = !0,
    this.finalTransform.matMdf = !0);
    var e, i = this.finalTransform.mat;
    if (t && (e = t.mat.props,
    i.reset().transform(e[0], e[1], e[2], e[3], e[4], e[5]),
    this.finalTransform.opacity *= t.opacity,
    this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf,
    this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf),
    this.hierarchy) {
      var r, n = this.hierarchy.length;
      for (t || i.reset(),
      r = n - 1; r >= 0; r -= 1)
        this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf,
        e = this.hierarchy[r].finalTransform.mProp.v.props,
        i.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
      e = this.finalTransform.mProp.v.props,
      i.transform(e[0], e[1], e[2], e[3], e[4], e[5])
    } else
      this.isVisible && (t ? (e = this.finalTransform.mProp.v.props,
      i.transform(e[0], e[1], e[2], e[3], e[4], e[5])) : (i.props[0] = this.finalTransform.mProp.v.props[0],
      i.props[1] = this.finalTransform.mProp.v.props[1],
      i.props[2] = this.finalTransform.mProp.v.props[2],
      i.props[3] = this.finalTransform.mProp.v.props[3],
      i.props[4] = this.finalTransform.mProp.v.props[4],
      i.props[5] = this.finalTransform.mProp.v.props[5]));
    return this.data.hasMask && (this.finalTransform.matMdf && this.layerElement.setAttribute("transform", "matrix(" + i.props.join(",") + ")"),
    this.finalTransform.opMdf && this.layerElement.setAttribute("opacity", this.finalTransform.opacity)),
    this.isVisible
  }
  ,
  b.prototype.destroy = function() {
    this.layerElement = null,
    this.parentContainer = null,
    this.matteElement && (this.matteElement = null),
    this.maskManager && this.maskManager.destroy()
  }
  ,
  b.prototype.getDomElement = function() {
    return this.layerElement
  }
  ,
  b.prototype.addMasks = function(t) {
    this.maskManager = new v(t,this,this.globalData)
  }
  ,
  b.prototype.setMatte = function(t) {
    this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")")
  }
  ,
  b.prototype.hide = function() {}
  ;
  var W = function(t, e, i) {
    if (this.data = t,
    this.globalData = i,
    e) {
      this.parentContainer = e;
      var r = document.createElementNS(M, "g");
      r.setAttribute("id", this.data.id),
      e.appendChild(r),
      this.phElement = r
    }
    this.layerId = "ly_" + c(10)
  };
  W.prototype.prepareFrame = function() {}
  ,
  W.prototype.renderFrame = function() {}
  ,
  W.prototype.draw = function() {}
  ,
  d(b, x),
  x.prototype.getComposingElement = function() {
    return this.layerElement
  }
  ,
  x.prototype.hide = function() {
    if (!this.hidden) {
      var t, e = this.elements.length;
      for (t = 0; e > t; t += 1)
        this.elements[t].hide();
      this.hidden = !0
    }
  }
  ,
  x.prototype.prepareFrame = function(t) {
    if (this.parent.prepareFrame.call(this, t),
    this.isVisible !== !1) {
      var e = t;
      this.tm && (e = this.tm.v,
      e === this.data.op && (e = this.data.op - 1));
      var i, r = this.elements.length;
      for (i = 0; r > i; i += 1)
        this.elements[i].prepareFrame(e - this.layers[i].st)
    }
  }
  ,
  x.prototype.renderFrame = function(t) {
    var e, i = this.parent.renderFrame.call(this, t), r = this.layers.length;
    if (i === !1)
      return void this.hide();
    for (this.hidden = !1,
    e = 0; r > e; e += 1)
      this.data.hasMask ? this.elements[e].renderFrame() : this.elements[e].renderFrame(this.finalTransform);
    this.firstFrame && (this.firstFrame = !1)
  }
  ,
  x.prototype.setElements = function(t) {
    this.elements = t
  }
  ,
  x.prototype.getElements = function() {
    return this.elements
  }
  ,
  x.prototype.destroy = function() {
    this.parent.destroy.call();
    var t, e = this.layers.length;
    for (t = 0; e > t; t += 1)
      this.elements[t].destroy()
  }
  ,
  d(b, _),
  _.prototype.createElements = function() {
    var t = this
      , e = function() {
      t.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.path + t.assetData.p),
      t.maskedElement = t.innerElem
    }
      , i = new Image;
    i.addEventListener("load", e, !1),
    i.addEventListener("error", e, !1),
    i.src = this.path + this.assetData.p,
    this.parent.createElements.call(this),
    this.innerElem = document.createElementNS(M, "image"),
    this.innerElem.setAttribute("width", this.assetData.w + "px"),
    this.innerElem.setAttribute("height", this.assetData.h + "px"),
    this.layerElement === this.parentContainer ? this.appendNodeToParent(this.innerElem) : this.layerElement.appendChild(this.innerElem),
    this.data.ln && this.innerElem.setAttribute("id", this.data.ln)
  }
  ,
  _.prototype.hide = function() {
    this.hidden || (this.innerElem.setAttribute("visibility", "hidden"),
    this.hidden = !0)
  }
  ,
  _.prototype.renderFrame = function(t) {
    var e = this.parent.renderFrame.call(this, t);
    return e === !1 ? void this.hide() : (this.hidden && (this.hidden = !1,
    this.innerElem.setAttribute("visibility", "visible")),
    this.data.hasMask || ((this.finalTransform.matMdf || this.firstFrame) && this.innerElem.setAttribute("transform", "matrix(" + this.finalTransform.mat.props.join(",") + ")"),
    (this.finalTransform.opMdf || this.firstFrame) && this.innerElem.setAttribute("opacity", this.finalTransform.opacity)),
    void (this.firstFrame && (this.firstFrame = !1)))
  }
  ,
  _.prototype.destroy = function() {
    this.parent.destroy.call(),
    this.innerElem = null
  }
  ,
  d(b, w),
  w.prototype.transformHelper = {
    opacity: 1,
    mat: new e,
    matMdf: !1,
    opMdf: !1
  },
  w.prototype.createElements = function() {
    this.parent.createElements.call(this),
    this.mainShape = new E(this.data,this.layerElement,this.parentContainer,this.placeholder,this.dynamicProperties,this.globalData)
  }
  ,
  w.prototype.renderFrame = function(t) {
    var e = this.parent.renderFrame.call(this, t);
    return e === !1 ? void this.hide() : (this.hidden = !1,
    this.firstFrame && (this.mainShape.firstFrame = !0,
    this.firstFrame = !1),
    void (this.data.hasMask ? this.mainShape.renderShape(this.transformHelper, null, null, !0) : this.mainShape.renderShape(this.finalTransform, null, null, !0)))
  }
  ,
  w.prototype.hide = function() {
    this.hidden || (this.mainShape.hideShape(),
    this.hidden = !0)
  }
  ,
  w.prototype.destroy = function() {
    this.parent.destroy.call(),
    this.mainShape.destroy()
  }
  ,
  E.prototype.appendNodeToParent = b.prototype.appendNodeToParent,
  E.prototype.searchShapes = function(t, i, r, n) {
    var s, a, o, l = t.length - 1, h = [], u = [];
    for (s = l; s >= 0; s -= 1)
      if ("fl" == t[s].ty || "st" == t[s].ty) {
        i[s] = {};
        var c;
        if (i[s].c = $.getProp(this.elemData, t[s].c, 1, null, r),
        i[s].o = $.getProp(this.elemData, t[s].o, 0, .01, r),
        "st" == t[s].ty) {
          if (c = document.createElementNS(M, "g"),
          c.style.strokeLinecap = this.lcEnum[t[s].lc] || "round",
          c.style.strokeLinejoin = this.ljEnum[t[s].lj] || "round",
          c.style.fillOpacity = 0,
          1 == t[s].lj && (c.style.strokeMiterlimit = t[s].ml),
          i[s].c.k || (c.style.stroke = "rgb(" + i[s].c.v[0] + "," + i[s].c.v[1] + "," + i[s].c.v[2] + ")"),
          i[s].o.k || (c.style.strokeOpacity = i[s].o.v),
          i[s].w = $.getProp(this.elemData, t[s].w, 0, null, r),
          i[s].w.k || (c.style.strokeWidth = i[s].w.v),
          t[s].d) {
            var d = $.getDashProp(this.elemData, t[s].d, "svg", r);
            d.k ? i[s].d = d : (c.style.strokeDasharray = d.dasharray,
            c.style.strokeDashoffset = d.dashoffset)
          }
        } else
          c = document.createElementNS(M, "path"),
          i[s].c.k || (c.style.fill = "rgb(" + i[s].c.v[0] + "," + i[s].c.v[1] + "," + i[s].c.v[2] + ")"),
          i[s].o.k || (c.style.fillOpacity = i[s].o.v);
        this.shape === this.parentContainer ? this.appendNodeToParent(c) : this.shape.appendChild(c),
        this.stylesList.push({
          pathElement: c,
          type: t[s].ty,
          d: "",
          ld: "",
          mdf: !1
        }),
        i[s].style = this.stylesList[this.stylesList.length - 1],
        h.push(i[s].style)
      } else if ("gr" == t[s].ty)
        i[s] = {
          it: []
        },
        this.searchShapes(t[s].it, i[s].it, r, n);
      else if ("tr" == t[s].ty)
        i[s] = {
          transform: {
            mat: new e,
            opacity: 1,
            matMdf: !1,
            opMdf: !1,
            op: $.getProp(this.elemData, t[s].o, 0, .01, r),
            mProps: $.getProp(this.elemData, t[s], 2, null, r)
          },
          elements: []
        };
      else if ("sh" == t[s].ty || "rc" == t[s].ty || "el" == t[s].ty) {
        i[s] = {
          elements: [],
          styles: [],
          lStr: ""
        };
        var f = 4;
        "rc" == t[s].ty ? f = 5 : "el" == t[s].ty && (f = 6),
        i[s].sh = $.getShapeProp(this.elemData, t[s], f, r, n),
        o = this.stylesList.length;
        var p, m = !1, g = !1;
        for (a = 0; o > a; a += 1)
          this.stylesList[a].closed || ("st" === this.stylesList[a].type ? (m = !0,
          p = document.createElementNS(M, "path"),
          this.stylesList[a].pathElement.appendChild(p),
          i[s].elements.push({
            ty: this.stylesList[a].type,
            el: p
          })) : (g = !0,
          i[s].elements.push({
            ty: this.stylesList[a].type,
            st: this.stylesList[a]
          })));
        i[s].st = m,
        i[s].fl = g
      } else if ("tm" == t[s].ty) {
        var v = {
          closed: !1,
          trimProp: $.getProp(this.elemData, t[s], 7, null, r)
        };
        n.push(v),
        u.push(v)
      }
    for (l = h.length,
    s = 0; l > s; s += 1)
      h[s].closed = !0;
    for (l = u.length,
    s = 0; l > s; s += 1)
      u[s].closed = !0
  }
  ,
  E.prototype.getElement = function() {
    return this.shape
  }
  ,
  E.prototype.hideShape = function() {
    var t, e = this.stylesList.length;
    for (t = e - 1; t >= 0; t -= 1)
      "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0",
      this.stylesList[t].pathElement.style.display = "none",
      this.stylesList[t].pathElement.parentNode && (this.stylesList[t].parent = this.stylesList[t].pathElement.parentNode))
  }
  ,
  E.prototype.renderShape = function(t, e, i, r) {
    var n, s;
    if (!e)
      for (e = this.data,
      s = this.stylesList.length,
      n = 0; s > n; n += 1)
        this.stylesList[n].d = "",
        this.stylesList[n].mdf = !1;
    i || (i = this.viewData),
    s = e.length - 1;
    var a, o;
    for (a = t,
    n = s; n >= 0; n -= 1)
      if ("tr" == e[n].ty) {
        a = i[n].transform;
        var l = i[n].transform.mProps.v.props;
        if (a.matMdf = a.mProps.mdf,
        a.opMdf = a.op.mdf,
        o = a.mat,
        o.reset(),
        t) {
          var h = t.mat.props;
          a.opacity = t.opacity,
          a.opacity *= i[n].transform.op.v,
          a.matMdf = t.matMdf ? !0 : a.matMdf,
          a.opMdf = t.opMdf ? !0 : a.opMdf,
          o.transform(h[0], h[1], h[2], h[3], h[4], h[5])
        } else
          a.opacity = a.op.o;
        o.transform(l[0], l[1], l[2], l[3], l[4], l[5])
      } else
        "sh" == e[n].ty || "el" == e[n].ty || "rc" == e[n].ty ? this.renderPath(e[n], i[n], a) : "fl" == e[n].ty ? this.renderFill(e[n], i[n], a) : "st" == e[n].ty ? this.renderStroke(e[n], i[n], a) : "gr" == e[n].ty ? this.renderShape(a, e[n].it, i[n].it) : "tm" == e[n].ty;
    if (r) {
      for (s = this.stylesList.length,
      n = 0; s > n; n += 1)
        "0" === this.stylesList[n].ld && (this.stylesList[n].ld = "1",
        this.stylesList[n].pathElement.style.display = "block"),
        "fl" === this.stylesList[n].type && (this.stylesList[n].mdf || this.firstFrame) && this.stylesList[n].pathElement.setAttribute("d", this.stylesList[n].d);
      this.firstFrame && (this.firstFrame = !1)
    }
  }
  ,
  E.prototype.renderPath = function(t, e, i) {
    var r, n, s = e.sh.v, a = "", o = "", l = "";
    if (s.v) {
      r = s.v.length;
      var h = i.matMdf || e.sh.mdf || this.firstFrame;
      if (h) {
        var u = s.s ? s.s : [];
        for (n = 1; r > n; n += 1)
          u[n - 1] ? (e.st && (l += " M" + u[n - 1][0] + "," + u[n - 1][1]),
          e.fl && (o += " M" + i.mat.applyToPointStringified(u[n - 1][0], u[n - 1][1]))) : 1 == n && (e.st && (l += " M" + s.v[0][0] + "," + s.v[0][1]),
          e.fl && (o += " M" + i.mat.applyToPointStringified(s.v[0][0], s.v[0][1]))),
          e.st && (l += " C" + s.o[n - 1][0] + "," + s.o[n - 1][1] + " " + s.i[n][0] + "," + s.i[n][1] + " " + s.v[n][0] + "," + s.v[n][1]),
          e.fl && (o += " C" + i.mat.applyToPointStringified(s.o[n - 1][0], s.o[n - 1][1]) + " " + i.mat.applyToPointStringified(s.i[n][0], s.i[n][1]) + " " + i.mat.applyToPointStringified(s.v[n][0], s.v[n][1]));
        1 == r && (u[0] ? (e.st && (l += " M" + u[0][0] + "," + u[0][1]),
        e.fl && (o += " M" + i.mat.applyToPointStringified(u[0][0], u[0][1]))) : (e.st && (l += " M" + s.v[0][0] + "," + s.v[0][1]),
        e.fl && (o += " M" + i.mat.applyToPointStringified(s.v[0][0], s.v[0][1])))),
        r && t.closed && (!t.trimmed || s.c) && (e.st && (l += " C" + s.o[n - 1][0] + "," + s.o[n - 1][1] + " " + s.i[0][0] + "," + s.i[0][1] + " " + s.v[0][0] + "," + s.v[0][1]),
        e.fl && (o += " C" + i.mat.applyToPointStringified(s.o[n - 1][0], s.o[n - 1][1]) + " " + i.mat.applyToPointStringified(s.i[0][0], s.i[0][1]) + " " + i.mat.applyToPointStringified(s.v[0][0], s.v[0][1]))),
        e.st && (a = "matrix(" + i.mat.props.join(",") + ")"),
        e.lStr = o
      } else
        o = e.lStr;
      for (r = e.elements.length,
      n = 0; r > n; n += 1)
        "st" === e.elements[n].ty ? ((e.sh.mdf || this.firstFrame) && e.elements[n].el.setAttribute("d", l),
        (i.matMdf || this.firstFrame) && e.elements[n].el.setAttribute("transform", a)) : (e.elements[n].st.mdf = h ? !0 : e.elements[n].st.mdf,
        e.elements[n].st.d += o)
    }
  }
  ,
  E.prototype.renderFill = function(t, e, i) {
    var r = e.style;
    (e.c.mdf || this.firstFrame) && (r.pathElement.style.fill = "rgb(" + B(e.c.v[0]) + "," + B(e.c.v[1]) + "," + B(e.c.v[2]) + ")"),
    (e.o.mdf || i.opMdf || this.firstFrame) && (r.pathElement.style.fillOpacity = e.o.v * i.opacity)
  }
  ,
  E.prototype.renderStroke = function(t, e, i) {
    var r = e.style
      , n = e.d;
    n && (n.mdf || this.firstFrame) && (r.pathElement.style.strokeDasharray = n.dasharray,
    r.pathElement.style.strokeDashoffset = n.dashoffset),
    (e.c.mdf || this.firstFrame) && (r.pathElement.style.stroke = "rgb(" + B(e.c.v[0]) + "," + B(e.c.v[1]) + "," + B(e.c.v[2]) + ")"),
    (e.o.mdf || i.opMdf || this.firstFrame) && (r.pathElement.style.strokeOpacity = e.o.v * i.opacity),
    (e.w.mdf || this.firstFrame) && (r.pathElement.style.strokeWidth = e.w.v)
  }
  ,
  E.prototype.destroy = function() {
    this.shape = null,
    this.data = null,
    this.viewData = null,
    this.parentContainer = null,
    this.placeholder = null
  }
  ,
  d(b, T),
  T.prototype.createElements = function() {
    this.parent.createElements.call(this);
    var t = document.createElementNS(M, "rect");
    t.setAttribute("width", this.data.sw),
    t.setAttribute("height", this.data.sh),
    t.setAttribute("fill", this.data.sc),
    this.layerElement === this.parentContainer ? this.appendNodeToParent(t) : this.layerElement.appendChild(t),
    this.data.ln && this.innerElem.setAttribute("id", this.data.ln),
    this.innerElem = t
  }
  ,
  T.prototype.hide = _.prototype.hide,
  T.prototype.renderFrame = _.prototype.renderFrame,
  T.prototype.destroy = _.prototype.destroy,
  d(b, S),
  S.prototype.createElements = function() {
    this.parent.createElements.call(this)
  }
  ,
  d(y, P),
  P.prototype.createElements = function() {}
  ,
  P.prototype.renderFrame = function(t) {
    if (3 === this.data.ty)
      return !1;
    if (!this.isVisible)
      return this.isVisible;
    this.finalTransform.opMdf = this.finalTransform.op.mdf,
    this.finalTransform.matMdf = this.finalTransform.mProp.mdf,
    this.finalTransform.opacity = this.finalTransform.op.v;
    var e, i = this.finalTransform.mat;
    if (t && (e = t.mat.props,
    i.reset().transform(e[0], e[1], e[2], e[3], e[4], e[5]),
    this.finalTransform.opacity *= t.opacity,
    this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf,
    this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf),
    this.hierarchy) {
      var r, n = this.hierarchy.length;
      for (t || i.reset(),
      r = n - 1; r >= 0; r -= 1)
        this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf,
        e = this.hierarchy[r].finalTransform.mProp.v.props,
        i.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
      e = this.finalTransform.mProp.v.props,
      i.transform(e[0], e[1], e[2], e[3], e[4], e[5])
    } else
      t ? (e = this.finalTransform.mProp.v.props,
      i.transform(e[0], e[1], e[2], e[3], e[4], e[5])) : (i.props[0] = this.finalTransform.mProp.v.props[0],
      i.props[1] = this.finalTransform.mProp.v.props[1],
      i.props[2] = this.finalTransform.mProp.v.props[2],
      i.props[3] = this.finalTransform.mProp.v.props[3],
      i.props[4] = this.finalTransform.mProp.v.props[4],
      i.props[5] = this.finalTransform.mProp.v.props[5]);
    return this.data.hasMask && (this.globalData.renderer.save(!0),
    this.maskManager.renderFrame(i)),
    this.isVisible
  }
  ,
  P.prototype.getCurrentAnimData = function() {
    return this.currentAnimData
  }
  ,
  P.prototype.addMasks = function(t) {
    this.maskManager = new D(t,this,this.globalData)
  }
  ,
  P.prototype.destroy = function() {
    this.canvasContext = null,
    this.data = null,
    this.globalData = null,
    this.maskManager && this.maskManager.destroy()
  }
  ,
  d(P, C),
  C.prototype.prepareFrame = function(t) {
    if (this.parent.prepareFrame.call(this, t),
    this.isVisible !== !1) {
      var e = t;
      this.tm && (e = this.tm.v,
      e === this.data.op && (e = this.data.op - 1));
      var i, r = this.elements.length;
      for (i = 0; r > i; i += 1)
        this.elements[i].prepareFrame(e - this.layers[i].st)
    }
  }
  ,
  C.prototype.renderFrame = function(t) {
    if (this.parent.renderFrame.call(this, t) !== !1) {
      var e, i = this.layers.length;
      for (e = i - 1; e >= 0; e -= 1)
        this.elements[e].renderFrame(this.finalTransform);
      this.data.hasMask && this.globalData.renderer.restore(!0),
      this.firstFrame && (this.firstFrame = !1)
    }
  }
  ,
  C.prototype.setElements = function(t) {
    this.elements = t
  }
  ,
  C.prototype.getElements = function() {
    return this.elements
  }
  ,
  C.prototype.destroy = function() {
    var t, e = this.layers.length;
    for (t = e - 1; t >= 0; t -= 1)
      this.elements[t].destroy();
    this.layers = null,
    this.elements = null,
    this.parent.destroy.call()
  }
  ,
  d(P, A),
  A.prototype.createElements = function() {
    var t = this
      , e = function() {
      t.animationItem.elementLoaded()
    }
      , i = function() {
      t.failed = !0,
      t.animationItem.elementLoaded()
    };
    this.img = new Image,
    this.img.addEventListener("load", e, !1),
    this.img.addEventListener("error", i, !1),
    this.img.src = this.path + this.assetData.p,
    this.parent.createElements.call(this)
  }
  ,
  A.prototype.renderFrame = function(t) {
    if (!this.failed && this.parent.renderFrame.call(this, t) !== !1) {
      var e = this.canvasContext;
      this.globalData.renderer.save();
      var i = this.finalTransform.mat.props;
      this.globalData.renderer.ctxTransform(i),
      this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),
      e.drawImage(this.img, 0, 0),
      this.globalData.renderer.restore(this.data.hasMask),
      this.firstFrame && (this.firstFrame = !1)
    }
  }
  ,
  A.prototype.destroy = function() {
    this.img = null,
    this.animationItem = null,
    this.parent.destroy.call()
  }
  ,
  d(P, k),
  k.prototype.createElements = function() {
    this.parent.createElements.call(this),
    this.mainShape = new L(this.data,this.dynamicProperties,this.globalData)
  }
  ,
  k.prototype.renderFrame = function(t) {
    this.parent.renderFrame.call(this, t) !== !1 && (this.firstFrame && (this.mainShape.firstFrame = !0,
    this.firstFrame = !1),
    this.mainShape.renderShape(this.finalTransform, null, null, !0),
    this.data.hasMask && this.globalData.renderer.restore(!0))
  }
  ,
  k.prototype.destroy = function() {
    this.mainShape.destroy(),
    this.parent.destroy.call()
  }
  ,
  L.prototype.dashResetter = [],
  L.prototype.searchShapes = function(t, i, r, n) {
    var s, a, o, l, h = t.length - 1, u = [], c = [];
    for (s = h; s >= 0; s -= 1)
      if ("fl" == t[s].ty || "st" == t[s].ty) {
        if (l = {
          type: t[s].ty,
          elements: []
        },
        i[s] = {},
        i[s].c = $.getProp(this.elemData, t[s].c, 1, null, r),
        i[s].c.k || (l.co = "rgb(" + B(i[s].c.v[0]) + "," + B(i[s].c.v[1]) + "," + B(i[s].c.v[2]) + ")"),
        i[s].o = $.getProp(this.elemData, t[s].o, 0, .01, r),
        "st" == t[s].ty && (l.lc = this.lcEnum[t[s].lc] || "round",
        l.lj = this.ljEnum[t[s].lj] || "round",
        1 == t[s].lj && (l.ml = t[s].ml),
        i[s].w = $.getProp(this.elemData, t[s].w, 0, null, r),
        i[s].w.k || (l.wi = i[s].w.v),
        t[s].d)) {
          var d = $.getDashProp(this.elemData, t[s].d, "canvas", r);
          i[s].d = d,
          i[s].d.k || (l.da = i[s].d.dasharray,
          l["do"] = i[s].d.dashoffset)
        }
        this.stylesList.push(l),
        i[s].style = l,
        u.push(i[s].style)
      } else if ("gr" == t[s].ty)
        i[s] = {
          it: []
        },
        this.searchShapes(t[s].it, i[s].it, r, n);
      else if ("tr" == t[s].ty)
        i[s] = {
          transform: {
            mat: new e,
            opacity: 1,
            matMdf: !1,
            opMdf: !1,
            op: $.getProp(this.elemData, t[s].o, 0, .01, r),
            mProps: $.getProp(this.elemData, t[s], 2, null, r)
          },
          elements: []
        };
      else if ("sh" == t[s].ty || "rc" == t[s].ty || "el" == t[s].ty) {
        i[s] = {
          nodes: [],
          trNodes: [],
          tr: [0, 0, 0, 0, 0, 0]
        };
        var f = 4;
        "rc" == t[s].ty ? f = 5 : "el" == t[s].ty && (f = 6),
        i[s].sh = $.getShapeProp(this.elemData, t[s], f, r, n),
        o = this.stylesList.length;
        var p = !1
          , m = !1;
        for (a = 0; o > a; a += 1)
          this.stylesList[a].closed || (this.stylesList[a].elements.push(i[s]),
          "st" === this.stylesList[a].type ? p = !0 : m = !0);
        i[s].st = p,
        i[s].fl = m
      } else if ("tm" == t[s].ty) {
        var g = {
          closed: !1,
          trimProp: $.getProp(this.elemData, t[s], 7, null, r)
        };
        n.push(g),
        c.push(g)
      }
    for (h = u.length,
    s = 0; h > s; s += 1)
      u[s].closed = !0;
    for (h = c.length,
    s = 0; h > s; s += 1)
      c[s].closed = !0
  }
  ,
  L.prototype.renderShape = function(t, e, i, r) {
    var n, s;
    if (!e)
      for (e = this.data,
      s = this.stylesList.length,
      n = 0; s > n; n += 1)
        this.stylesList[n].d = "",
        this.stylesList[n].mdf = !1;
    i || (i = this.viewData),
    s = e.length - 1;
    var a, o;
    for (a = t,
    n = s; n >= 0; n -= 1)
      if ("tr" == e[n].ty) {
        a = i[n].transform;
        var l = i[n].transform.mProps.v.props;
        if (a.matMdf = a.mProps.mdf,
        a.opMdf = a.op.mdf,
        o = a.mat,
        o.reset(),
        t) {
          var h = t.mat.props;
          a.opacity = t.opacity,
          a.opacity *= i[n].transform.op.v,
          a.matMdf = t.matMdf ? !0 : a.matMdf,
          a.opMdf = t.opMdf ? !0 : a.opMdf,
          o.transform(h[0], h[1], h[2], h[3], h[4], h[5])
        } else
          a.opacity = a.op.o;
        o.transform(l[0], l[1], l[2], l[3], l[4], l[5])
      } else
        "sh" == e[n].ty || "el" == e[n].ty || "rc" == e[n].ty ? this.renderPath(e[n], i[n], a) : "fl" == e[n].ty ? this.renderFill(e[n], i[n], a) : "st" == e[n].ty ? this.renderStroke(e[n], i[n], a) : "gr" == e[n].ty ? this.renderShape(a, e[n].it, i[n].it) : "tm" == e[n].ty;
    if (r) {
      s = this.stylesList.length;
      var u, c, d, f, p, m, g, v = this.globalData.renderer, y = this.globalData.canvasContext;
      for (n = 0; s > n; n += 1)
        if (g = this.stylesList[n].type,
        "st" !== g || 0 !== this.stylesList[n].wi) {
          for (v.save(),
          p = this.stylesList[n].elements,
          c = p.length,
          "st" === g ? (y.strokeStyle = this.stylesList[n].co,
          y.lineWidth = this.stylesList[n].wi,
          y.lineCap = this.stylesList[n].lc,
          y.lineJoin = this.stylesList[n].lj,
          y.miterLimit = this.stylesList[n].ml) : y.fillStyle = this.stylesList[n].co,
          v.ctxOpacity(this.stylesList[n].coOp),
          y.beginPath(),
          u = 0; c > u; u += 1) {
            for ("st" === g ? (v.save(),
            y.beginPath(),
            this.stylesList[n].da ? (y.setLineDash(this.stylesList[n].da),
            y.lineDashOffset = this.stylesList[n]["do"],
            this.globalData.isDashed = !0) : this.globalData.isDashed && (y.setLineDash(this.dashResetter),
            this.globalData.isDashed = !1),
            v.ctxTransform(p[u].tr),
            m = p[u].nodes) : m = p[u].trNodes,
            f = m.length,
            d = 0; f > d; d += 1)
              "m" == m[d].t ? y.moveTo(m[d].p[0], m[d].p[1]) : y.bezierCurveTo(m[d].p1[0], m[d].p1[1], m[d].p2[0], m[d].p2[1], m[d].p3[0], m[d].p3[1]);
            "st" === g && (y.stroke(),
            v.restore())
          }
          "st" !== g && y.fill(),
          v.restore()
        }
      this.firstFrame && (this.firstFrame = !1)
    }
  }
  ,
  L.prototype.renderPath = function(t, e, i) {
    var r, n, s = e.sh.v;
    if (s.v) {
      r = s.v.length;
      var a = i.matMdf || e.sh.mdf || this.firstFrame;
      if (a) {
        var o = e.trNodes
          , l = e.nodes;
        o.length = 0,
        l.length = 0;
        var h = s.s ? s.s : [];
        for (n = 1; r > n; n += 1)
          h[n - 1] ? (e.st && l.push({
            t: "m",
            p: h[n - 1]
          }),
          e.fl && o.push({
            t: "m",
            p: i.mat.applyToPointArray(h[n - 1][0], h[n - 1][1])
          })) : 1 == n && (e.st && l.push({
            t: "m",
            p: s.v[0]
          }),
          e.fl && o.push({
            t: "m",
            p: i.mat.applyToPointArray(s.v[0][0], s.v[0][1])
          })),
          e.st && l.push({
            t: "c",
            p1: s.o[n - 1],
            p2: s.i[n],
            p3: s.v[n]
          }),
          e.fl && o.push({
            t: "c",
            p1: i.mat.applyToPointArray(s.o[n - 1][0], s.o[n - 1][1]),
            p2: i.mat.applyToPointArray(s.i[n][0], s.i[n][1]),
            p3: i.mat.applyToPointArray(s.v[n][0], s.v[n][1])
          });
        1 == r && (h[0] ? (e.st && l.push({
          t: "m",
          p: h[0]
        }),
        e.fl && o.push({
          t: "m",
          p: i.mat.applyToPointArray(h[0][0], h[0][1])
        })) : (e.st && l.push({
          t: "m",
          p: s.v[0]
        }),
        e.fl && o.push({
          t: "m",
          p: i.mat.applyToPointArray(s.v[0][0], s.v[0][1])
        }))),
        r && t.closed && (!t.trimmed || s.c) && (e.st && l.push({
          t: "c",
          p1: s.o[n - 1],
          p2: s.i[0],
          p3: s.v[0]
        }),
        e.fl && o.push({
          t: "c",
          p1: i.mat.applyToPointArray(s.o[n - 1][0], s.o[n - 1][1]),
          p2: i.mat.applyToPointArray(s.i[0][0], s.i[0][1]),
          p3: i.mat.applyToPointArray(s.v[0][0], s.v[0][1])
        })),
        e.st && (e.tr[0] = i.mat.props[0],
        e.tr[1] = i.mat.props[1],
        e.tr[2] = i.mat.props[2],
        e.tr[3] = i.mat.props[3],
        e.tr[4] = i.mat.props[4],
        e.tr[5] = i.mat.props[5]),
        e.nodes = l,
        e.trNodes = o
      }
    }
  }
  ,
  L.prototype.renderFill = function(t, e, i) {
    var r = e.style;
    (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + B(e.c.v[0]) + "," + B(e.c.v[1]) + "," + B(e.c.v[2]) + ")"),
    (e.o.mdf || i.opMdf || this.firstFrame) && (r.coOp = e.o.v * i.opacity)
  }
  ,
  L.prototype.renderStroke = function(t, e, i) {
    var r = e.style
      , n = e.d;
    n && (n.mdf || this.firstFrame) && (r.da = n.dasharray,
    r["do"] = n.dashoffset),
    (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + B(e.c.v[0]) + "," + B(e.c.v[1]) + "," + B(e.c.v[2]) + ")"),
    (e.o.mdf || i.opMdf || this.firstFrame) && (r.coOp = e.o.v * i.opacity),
    (e.w.mdf || this.firstFrame) && (r.wi = e.w.v)
  }
  ,
  L.prototype.destroy = function() {
    this.data = null,
    this.globalData = null,
    this.canvasContext = null
  }
  ,
  d(P, j),
  j.prototype.renderFrame = function(t) {
    if (this.parent.renderFrame.call(this, t) !== !1) {
      var e = this.canvasContext;
      this.globalData.renderer.save();
      var i = this.finalTransform.mat.props;
      this.globalData.renderer.ctxTransform(i),
      this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),
      e.fillStyle = this.data.sc,
      e.fillRect(0, 0, this.data.sw, this.data.sh),
      this.globalData.renderer.restore(this.data.hasMask),
      this.firstFrame && (this.firstFrame = !1)
    }
  }
  ,
  d(P, I),
  I.prototype.createElements = function() {
    this.parent.createElements.call(this)
  }
  ,
  D.prototype.prepareFrame = function(t) {
    var e, i = this.dynamicProperties.length;
    for (e = 0; i > e; e += 1)
      this.dynamicProperties[e].getInterpolatedValue(t)
  }
  ,
  D.prototype.renderFrame = function(t) {
    var e, i, r, n, s, a = this.ctx, o = this.data.masksProperties.length, l = !1;
    for (e = 0; o > e; e++)
      if ("n" !== this.masksProperties[e].mode) {
        l === !1 && (a.beginPath(),
        l = !0),
        this.masksProperties[e].inv && (a.moveTo(0, 0),
        a.lineTo(this.globalData.compWidth, 0),
        a.lineTo(this.globalData.compWidth, this.globalData.compHeight),
        a.lineTo(0, this.globalData.compHeight),
        a.lineTo(0, 0)),
        s = this.viewData[e].v,
        i = t.applyToPointArray(s.v[0][0], s.v[0][1]),
        a.moveTo(i[0], i[1]);
        var h, u = s.v.length;
        for (h = 1; u > h; h++)
          i = t.applyToPointArray(s.o[h - 1][0], s.o[h - 1][1]),
          r = t.applyToPointArray(s.i[h][0], s.i[h][1]),
          n = t.applyToPointArray(s.v[h][0], s.v[h][1]),
          a.bezierCurveTo(i[0], i[1], r[0], r[1], n[0], n[1]);
        i = t.applyToPointArray(s.o[h - 1][0], s.o[h - 1][1]),
        r = t.applyToPointArray(s.i[0][0], s.i[0][1]),
        n = t.applyToPointArray(s.v[0][0], s.v[0][1]),
        a.bezierCurveTo(i[0], i[1], r[0], r[1], n[0], n[1])
      }
    l && a.clip()
  }
  ,
  D.prototype.destroy = function() {
    this.ctx = null
  }
  ;
  var G = function() {
    function t(t) {
      if (!t)
        return null;
      for (var e = 0; b > e; ) {
        if (g[e].elem == t && null !== g[e].elem)
          return g[e].animation;
        e += 1
      }
      var i = new J;
      return i.setData(t),
      g.push({
        elem: t,
        animation: i
      }),
      b += 1,
      i
    }
    function e(t) {
      var e = new J;
      return e.setParams(t),
      g.push({
        elem: null,
        animation: e
      }),
      b += 1,
      e
    }
    function i(t, e) {
      var i;
      for (i = 0; b > i; i += 1)
        g[i].animation.setSpeed(t, e)
    }
    function r(t, e) {
      var i;
      for (i = 0; b > i; i += 1)
        g[i].animation.setDirection(t, e)
    }
    function n(t) {
      var e;
      for (e = 0; b > e; e += 1)
        g[e].animation.play(t)
    }
    function s(t, e) {
      y = !1,
      v = Date.now();
      var i;
      for (i = 0; b > i; i += 1)
        g[i].animation.moveFrame(t, e)
    }
    function a() {
      var t, e = Date.now(), i = e - v;
      for (t = 0; b > t; t += 1)
        g[t].animation.renderer.destroyed ? (g.splice(t, 1),
        t -= 1,
        b -= 1) : g[t].animation.advanceTime(i);
      v = e,
      requestAnimationFrame(a)
    }
    function o(t) {
      var e;
      for (e = 0; b > e; e += 1)
        g[e].animation.pause(t)
    }
    function l(t, e, i) {
      var r;
      for (r = 0; b > r; r += 1)
        g[r].animation.goToAndStop(t, e, i)
    }
    function h(t) {
      var e;
      for (e = 0; b > e; e += 1)
        g[e].animation.stop(t)
    }
    function u(t) {
      var e;
      for (e = 0; b > e; e += 1)
        g[e].animation.togglePause(t)
    }
    function c(t) {
      var e;
      for (e = 0; b > e; e += 1)
        g[e].animation.destroy(t)
    }
    function d() {
      var e = document.getElementsByClassName("bodymovin");
      Array.prototype.forEach.call(e, t)
    }
    function f() {
      var t;
      for (t = 0; b > t; t += 1)
        g[t].animation.resize()
    }
    function p() {
      v = Date.now(),
      requestAnimationFrame(a)
    }
    var m = {}
      , g = []
      , v = 0
      , y = !0
      , b = 0;
    return setTimeout(p, 0),
    m.registerAnimation = t,
    m.loadAnimation = e,
    m.setSpeed = i,
    m.setDirection = r,
    m.play = n,
    m.moveFrame = s,
    m.pause = o,
    m.stop = h,
    m.togglePause = u,
    m.searchAnimations = d,
    m.resize = f,
    m.start = p,
    m.goToAndStop = l,
    m.destroy = c,
    m
  }()
    , J = function() {
    this._cbs = [],
    this.name = "",
    this.path = "",
    this.isLoaded = !1,
    this.currentFrame = 0,
    this.currentRawFrame = 0,
    this.totalFrames = 0,
    this.frameRate = 0,
    this.frameMult = 0,
    this.playSpeed = 1,
    this.playDirection = 1,
    this.pendingElements = 0,
    this.playCount = 0,
    this.prerenderFramesFlag = !0,
    this.repeat = "indefinite",
    this.animationData = {},
    this.layers = [],
    this.assets = [],
    this.isPaused = !0,
    this.isScrolling = !1,
    this.autoplay = !1,
    this.loop = !0,
    this.renderer = null,
    this.animationID = c(10),
    this.renderedFrameCount = 0,
    this.scaleMode = "fit",
    this.math = Math,
    this.removed = !1,
    this.timeCompleted = 0,
    this.segmentPos = 0,
    this.segments = []
  };
  J.prototype.setParams = function(t) {
    var e = this;
    t.context && (this.context = t.context),
    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
    var i = t.animType ? t.animType : t.renderer ? t.renderer : "canvas";
    switch (i) {
    case "canvas":
      this.renderer = new g(this,t.renderer);
      break;
    case "svg":
      this.renderer = new m(this,t.renderer)
    }
    if (this.animType = i,
    "" === t.loop || null === t.loop || (this.loop = t.loop === !1 ? !1 : t.loop === !0 ? !0 : parseInt(t.loop)),
    this.autoplay = "autoplay"in t ? t.autoplay : !0,
    this.name = t.name ? t.name : "",
    this.prerenderFramesFlag = "prerender"in t ? t.prerender : !0,
    t.animationData)
      e.configAnimation(t.animationData);
    else if (t.path) {
      "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"),
      t.path += "data.json");
      var r = new XMLHttpRequest;
      this.path = -1 != t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1),
      this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
      this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
      r.open("GET", t.path, !0),
      r.send(),
      r.onreadystatechange = function() {
        if (4 == r.readyState)
          if (200 == r.status)
            e.configAnimation(JSON.parse(r.responseText));
          else
            try {
              var t = JSON.parse(r.responseText);
              e.configAnimation(t)
            } catch (i) {}
      }
    }
  }
  ,
  J.prototype.setData = function(t) {
    var e = {
      wrapper: t
    }
      , i = t.attributes;
    e.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "",
    e.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : "canvas";
    var r = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
    "" === r || (e.loop = "false" === r ? !1 : "true" === r ? !0 : parseInt(r)),
    e.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
    var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
    "false" === n && (e.prerender = !1),
    this.setParams(e)
  }
  ,
  J.prototype.includeLayers = function(t) {
    var e, i, r = this.animationData.layers, n = r.length, s = t.layers, a = s.length;
    for (i = 0; a > i; i += 1)
      for (e = 0; n > e; ) {
        if (r[e].id == s[i].id) {
          r[e] = s[i];
          break
        }
        e += 1
      }
    if (t.assets)
      for (n = t.assets.length,
      e = 0; n > e; e += 1)
        this.animationData.assets.push(t.assets[e]);
    U.completeData(this.animationData),
    this.renderer.includeLayers(t.layers),
    this.renderer.buildStage(this.container, this.layers),
    this.renderer.renderFrame(null),
    this.loadNextSegment()
  }
  ,
  J.prototype.loadNextSegment = function() {
    var t = this.animationData.segments;
    if (!t || 0 === t.length)
      return this.trigger("data_ready"),
      void (this.timeCompleted = this.animationData.tf);
    var e = t.shift();
    this.timeCompleted = e.time * this.frameRate;
    var i = new XMLHttpRequest
      , r = this
      , n = this.path + this.fileName + "_" + this.segmentPos + ".json";
    this.segmentPos += 1,
    i.open("GET", n, !0),
    i.send(),
    i.onreadystatechange = function() {
      if (4 == i.readyState)
        if (200 == i.status)
          r.includeLayers(JSON.parse(i.responseText));
        else
          try {
            var t = JSON.parse(i.responseText);
            r.includeLayers(t)
          } catch (e) {}
    }
  }
  ,
  J.prototype.loadSegments = function() {
    var t = this.animationData.segments;
    t || (this.timeCompleted = this.animationData.tf),
    this.loadNextSegment()
  }
  ,
  J.prototype.configAnimation = function(t) {
    this.animationData = t,
    this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
    this.animationData.tf = this.totalFrames,
    this.renderer.configAnimation(t),
    t.assets || (t.assets = []),
    t.comps && (t.assets = t.assets.concat(t.comps),
    t.comps = null),
    this.animationData._id = this.animationID,
    this.animationData._animType = this.animType,
    this.layers = this.animationData.layers,
    this.assets = this.animationData.assets,
    this.frameRate = this.animationData.fr,
    this.firstFrame = Math.round(this.animationData.ip),
    this.frameMult = this.animationData.fr / 1e3,
    this.trigger("config_ready"),
    this.loadSegments(),
    U.completeData(this.animationData),
    this.renderer.buildItems(this.animationData.layers),
    this.updaFrameModifier(),
    this.checkLoaded()
  }
  ,
  J.prototype.elementLoaded = function() {
    this.pendingElements--,
    this.checkLoaded()
  }
  ,
  J.prototype.checkLoaded = function() {
    0 === this.pendingElements && (this.renderer.buildStage(this.container, this.layers),
    this.isLoaded = !0,
    this.gotoFrame(),
    this.autoplay && this.play())
  }
  ,
  J.prototype.resize = function() {
    this.renderer.updateContainerSize()
  }
  ,
  J.prototype.gotoFrame = function() {
    this.currentFrame = N ? this.currentRawFrame : this.math.floor(this.currentRawFrame),
    this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
    this.trigger("enterFrame"),
    this.renderFrame()
  }
  ,
  J.prototype.renderFrame = function() {
    this.isLoaded !== !1 && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
  }
  ,
  J.prototype.play = function(t) {
    t && this.name != t || this.isPaused === !0 && (this.isPaused = !1)
  }
  ,
  J.prototype.pause = function(t) {
    t && this.name != t || this.isPaused === !1 && (this.isPaused = !0)
  }
  ,
  J.prototype.togglePause = function(t) {
    t && this.name != t || (this.isPaused === !0 ? (this.isPaused = !1,
    this.play()) : (this.isPaused = !0,
    this.pause()))
  }
  ,
  J.prototype.stop = function(t) {
    t && this.name != t || (this.isPaused = !0,
    this.currentFrame = this.currentRawFrame = 0,
    this.playCount = 0,
    this.gotoFrame())
  }
  ,
  J.prototype.goToAndStop = function(t, e, i) {
    i && this.name != i || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier),
    this.isPaused = !0)
  }
  ,
  J.prototype.advanceTime = function(t) {
    this.isPaused !== !0 && this.isScrolling !== !0 && this.isLoaded !== !1 && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier)
  }
  ,
  J.prototype.updateAnimation = function(t) {
    this.setCurrentRawFrameValue(this.totalFrames * t)
  }
  ,
  J.prototype.moveFrame = function(t, e) {
    e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
  }
  ,
  J.prototype.adjustSegment = function(t) {
    this.totalFrames = t[1] - t[0],
    this.firstFrame = t[0],
    this.trigger("segmentStart")
  }
  ,
  J.prototype.playSegments = function(t, e) {
    if ("object" == typeof t[0]) {
      var i, r = t.length;
      for (i = 0; r > i; i += 1)
        this.segments.push(t[i])
    } else
      this.segments.push(t);
    e && (this.adjustSegment(this.segments.shift()),
    this.setCurrentRawFrameValue(0))
  }
  ,
  J.prototype.resetSegments = function(t) {
    this.segments.length = 0,
    this.segments.push([this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]),
    t && this.adjustSegment(this.segments.shift())
  }
  ,
  J.prototype.remove = function(t) {
    t && this.name != t || this.renderer.destroy()
  }
  ,
  J.prototype.destroy = function(t) {
    t && this.name != t || this.renderer && this.renderer.destroyed || this.renderer.destroy()
  }
  ,
  J.prototype.setCurrentRawFrameValue = function(t) {
    this.currentRawFrame = t;
    var e = !1;
    if (this.currentRawFrame >= this.totalFrames) {
      if (this.segments.length && (e = !0),
      this.loop === !1)
        return this.currentRawFrame = this.totalFrames - .01,
        this.gotoFrame(),
        this.pause(),
        void this.trigger("complete");
      if (this.trigger("loopComplete"),
      this.playCount += 1,
      this.loop !== !0 && this.playCount == this.loop)
        return this.currentRawFrame = this.totalFrames - .01,
        this.gotoFrame(),
        this.pause(),
        void this.trigger("complete")
    } else if (this.currentRawFrame < 0)
      return this.playCount -= 1,
      this.playCount < 0 && (this.playCount = 0),
      this.loop === !1 ? (this.currentRawFrame = 0,
      this.gotoFrame(),
      this.pause(),
      void this.trigger("complete")) : (this.trigger("loopComplete"),
      this.currentRawFrame = this.totalFrames + this.currentRawFrame,
      void this.gotoFrame());
    if (e) {
      var i = this.currentRawFrame % this.totalFrames;
      this.adjustSegment(this.segments.shift()),
      this.currentRawFrame = i
    } else
      this.currentRawFrame = this.currentRawFrame % this.totalFrames;
    this.gotoFrame()
  }
  ,
  J.prototype.setSpeed = function(t) {
    this.playSpeed = t,
    this.updaFrameModifier()
  }
  ,
  J.prototype.setDirection = function(t) {
    this.playDirection = 0 > t ? -1 : 1,
    this.updaFrameModifier()
  }
  ,
  J.prototype.updaFrameModifier = function() {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
  }
  ,
  J.prototype.getPath = function() {
    return this.path
  }
  ,
  J.prototype.getAssetData = function(t) {
    for (var e = 0, i = this.assets.length; i > e; ) {
      if (t == this.assets[e].id)
        return this.assets[e];
      e += 1
    }
  }
  ,
  J.prototype.getAssets = function() {
    return this.assets
  }
  ,
  J.prototype.trigger = function(t) {
    if (this._cbs[t])
      switch (t) {
      case "enterFrame":
        this.triggerEvent(t, new n(t,this.currentFrame,this.totalFrames,this.frameMult));
        break;
      case "loopComplete":
        this.triggerEvent(t, new a(t,this.loop,this.playCount,this.frameMult));
        break;
      case "complete":
        this.triggerEvent(t, new s(t,this.frameMult));
        break;
      case "segmentStart":
        this.triggerEvent(t, new o(t,this.firstFrame,this.totalFrames));
        break;
      default:
        this.triggerEvent(t)
      }
    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new n(t,this.currentFrame,this.totalFrames,this.frameMult)),
    "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new a(t,this.loop,this.playCount,this.frameMult)),
    "complete" === t && this.onComplete && this.onComplete.call(this, new s(t,this.frameMult)),
    "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new o(t,this.firstFrame,this.totalFrames))
  }
  ,
  J.prototype.addEventListener = l,
  J.prototype.removeEventListener = h,
  J.prototype.triggerEvent = u,
  function(t) {
    function e(t) {
      G.play(t)
    }
    function r(t) {
      G.pause(t)
    }
    function n(t) {
      G.togglePause(t)
    }
    function s(t, e) {
      G.setSpeed(t, e)
    }
    function a(t, e) {
      G.setDirection(t, e)
    }
    function o(t) {
      G.stop(t)
    }
    function l(t) {
      G.moveFrame(t)
    }
    function h() {
      G.searchAnimations()
    }
    function u(t) {
      return G.registerAnimation(t)
    }
    function c() {
      G.resize()
    }
    function d() {
      G.start()
    }
    function f(t, e, i) {
      G.goToAndStop(t, e, i)
    }
    function p(t) {
      N = t
    }
    function m(t) {
      return G.loadAnimation(t)
    }
    function g(t) {
      return G.destroy(t)
    }
    function v(t) {
      if ("string" == typeof t)
        switch (t) {
        case "high":
          H = 200;
          break;
        case "medium":
          H = 50;
          break;
        case "low":
          H = 10
        }
      else
        !isNaN(t) && t > 1 && (H = t);
      i(H >= 50 ? !1 : !0)
    }
    function y() {
      "complete" === document.readyState && (clearInterval(x),
      h())
    }
    var b = {};
    b.play = e,
    b.pause = r,
    b.togglePause = n,
    b.setSpeed = s,
    b.setDirection = a,
    b.stop = o,
    b.moveFrame = l,
    b.searchAnimations = h,
    b.registerAnimation = u,
    b.loadAnimation = m,
    b.setSubframeRendering = p,
    b.resize = c,
    b.start = d,
    b.goToAndStop = f,
    b.destroy = g,
    b.setQuality = v,
    b.version = "3.1.7",
    b.checkReady = y,
    t.bodymovin = b;
    var x = setInterval(y, 100)
  }(t)
}(window)
