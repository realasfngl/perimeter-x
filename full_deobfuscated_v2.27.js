// @license Copyright (C) 2014-2016 PerimeterX, Inc (www.perimeterx.com).  Content of this file can not be copied and/or distributed.
try {
    window._pxAppId = "PXAbo2Yc8X";
    (function (e) {
      "use strict";
  
      function t(e, t, n, r) {
        if (e && n) {
          if (e.addEventListener) {
            e.addEventListener(t, n, r || false);
            return true;
          }
          if (e.attachEvent) {
            return e.attachEvent("on" + t, n);
          }
        }
      }
      function n(e) {
        var t = {};
        for (var n in e) {
          if (n.indexOf("_px") === 0) {
            t[n] = e[n];
            try {
              if (n !== "_pxAppId" && n !== "_pxRootUrl") {
                delete e[n];
              }
            } catch (t) {
              e[n] = undefined;
            }
          }
        }
        return t;
      }
      function r(e) {
        var t = {};
        for (var n = 1; n <= 10; n++) {
          var r = e["_pxParam" + n];
          if (typeof r === "string") {
            t["p" + n] = r;
          }
        }
        return t;
      }
      function i(e) {
        if (e) {
          return function (e) {
            return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
              return String.fromCharCode("0x" + t);
            }));
          };
        } else {
          return function (e) {
            var t;
            var n;
            var r;
            var i;
            var o;
            var a;
            var c;
            var u;
            var f = 0;
            var l = 0;
            var p = [];
            if (!e) {
              return e;
            }
            e = unescape(encodeURIComponent(e));
            do {
              t = e.charCodeAt(f++);
              n = e.charCodeAt(f++);
              r = e.charCodeAt(f++);
              u = t << 16 | n << 8 | r;
              i = u >> 18 & 63;
              o = u >> 12 & 63;
              a = u >> 6 & 63;
              c = u & 63;
              p[l++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(o) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c);
            } while (f < e.length);
            var d = p.join("");
            var h = e.length % 3;
            return (h ? d.slice(0, h - 3) : d) + "===".slice(h || 3);
          };
        }
      }
      function a(e) {
        var t = z[e];
        if (t) {
          return t;
        } else {
          return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
        }
      }
      function c(e) {
        J.lastIndex = 0;
        return "\"" + (J.test(e) ? e.replace(J, a) : e) + "\"";
      }
      function u(e) {
        var t;
        var n;
        switch (typeof e === "undefined" ? "undefined" : M(e)) {
          case "undefined":
            return "null";
          case "boolean":
            return String(e);
          case "number":
            return String(e);
          case "string":
            return c(e);
        }
        if (e === null) {
          return "null";
        }
        if (e instanceof Date) {
          return ["\"", e.getFullYear(), "-", e.getMonth() + 1, "-", e.getDate(), "T", e.getHours(), ":", e.getMinutes(), ":", e.getSeconds(), ".", e.getMilliseconds(), "\""].join("");
        }
        if (e instanceof Array) {
          n = ["["];
          for (t = 0; t < e.length; t++) {
            n.push($(e[t]), ",");
          }
          n[n.length > 1 ? n.length - 1 : n.length] = "]";
          return n.join("");
        }
        n = ["{"];
        for (t in e) {
          if (e[t] !== undefined) {
            n.push(c(t), ":", $(e[t]), ",");
          }
        }
        n[n.length > 1 ? n.length - 1 : n.length] = "}";
        return n.join("");
      }
      function s(e) {
        var t;
        H = e;
        X = 0;
        E = " ";
        t = f();
        g();
        if (E) {
          m("Syntax error");
        }
        return t;
      }
      function f() {
        g();
        switch (E) {
          case "{":
            return l();
          case "[":
            return p();
          case "\"":
            return h();
          case "-":
            return d();
          default:
            if (E >= "0" && E <= "9") {
              return d();
            } else {
              return v();
            }
        }
      }
      function l() {
        var e;
        var t = {};
        if (E === "{") {
          y("{");
          g();
          if (E === "}") {
            y("}");
            return t;
          }
          while (E) {
            e = h();
            g();
            y(":");
            if (Object.hasOwnProperty.call(t, e)) {
              m("Duplicate key \"" + e + "\"");
            }
            t[e] = f();
            g();
            if (E === "}") {
              y("}");
              return t;
            }
            y(",");
            g();
          }
        }
        m("Bad object");
      }
      function p() {
        var e = [];
        if (E === "[") {
          y("[");
          g();
          if (E === "]") {
            y("]");
            return e;
          }
          while (E) {
            e.push(f());
            g();
            if (E === "]") {
              y("]");
              return e;
            }
            y(",");
            g();
          }
        }
        m("Bad array");
      }
      function d() {
        var e;
        var t = "";
        for (E === "-" && (t = "-", y("-")); E >= "0" && E <= "9";) {
          t += E;
          y();
        }
        if (E === ".") {
          for (t += "."; y() && E >= "0" && E <= "9";) {
            t += E;
          }
        }
        if (E === "e" || E === "E") {
          t += E;
          y();
          for (E !== "-" && E !== "+" || (t += E, y()); E >= "0" && E <= "9";) {
            t += E;
            y();
          }
        }
        e = +t;
        if (isFinite(e)) {
          return e;
        } else {
          m("Bad number");
          return;
        }
      }
      function h() {
        var e;
        var t;
        var n;
        var r = "";
        if (E === "\"") {
          while (y()) {
            if (E === "\"") {
              y();
              return r;
            }
            if (E === "\\") {
              y();
              if (E === "u") {
                n = 0;
                for (t = 0; t < 4 && (e = parseInt(y(), 16), isFinite(e)); t += 1) {
                  n = n * 16 + e;
                }
                r += String.fromCharCode(n);
              } else {
                if (typeof G[E] !== "string") {
                  break;
                }
                r += G[E];
              }
            } else {
              r += E;
            }
          }
        }
        m("Bad string");
      }
      function v() {
        switch (E) {
          case "t":
            y("t");
            y("r");
            y("u");
            y("e");
            return true;
          case "f":
            y("f");
            y("a");
            y("l");
            y("s");
            y("e");
            return false;
          case "n":
            y("n");
            y("u");
            y("l");
            y("l");
            return null;
        }
        m("Unexpected '" + E + "'");
      }
      function g() {
        while (E && E <= " ") {
          y();
        }
      }
      function y(e) {
        if (e && e !== E) {
          m("Expected '" + e + "' instead of '" + E + "'");
        }
        E = H.charAt(X);
        X += 1;
        return E;
      }
      function m(e) {
        throw {
          name: "SyntaxError",
          message: e,
          at: X,
          text: H
        };
      }
      function w(e, t) {
        var n = t || 0;
        return Q[e[n++]] + Q[e[n++]] + Q[e[n++]] + Q[e[n++]] + "-" + Q[e[n++]] + Q[e[n++]] + "-" + Q[e[n++]] + Q[e[n++]] + "-" + Q[e[n++]] + Q[e[n++]] + "-" + Q[e[n++]] + Q[e[n++]] + Q[e[n++]] + Q[e[n++]] + Q[e[n++]] + Q[e[n++]];
      }
      function x(e, t, n) {
        var r = t && n || 0;
        var i = t || [];
        e = e || {};
        var o = e.clockseq !== undefined ? e.clockseq : ne;
        var a = e.msecs !== undefined ? e.msecs : +new Date();
        var c = e.nsecs !== undefined ? e.nsecs : ie + 1;
        var u = a - re + (c - ie) / 10000;
        if (u < 0 && e.clockseq === undefined) {
          o = o + 1 & 16383;
        }
        if ((u < 0 || a > re) && e.nsecs === undefined) {
          c = 0;
        }
        if (c >= 10000) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        re = a;
        ie = c;
        ne = o;
        a += 12219292800000;
        var s = ((a & 268435455) * 10000 + c) % 4294967296;
        i[r++] = s >>> 24 & 255;
        i[r++] = s >>> 16 & 255;
        i[r++] = s >>> 8 & 255;
        i[r++] = s & 255;
        var f = a / 4294967296 * 10000 & 268435455;
        i[r++] = f >>> 8 & 255;
        i[r++] = f & 255;
        i[r++] = f >>> 24 & 15 | 16;
        i[r++] = f >>> 16 & 255;
        i[r++] = o >>> 8 | 128;
        i[r++] = o & 255;
        var l = e.node || te;
        for (var p = 0; p < 6; p++) {
          i[r + p] = l[p];
        }
        if (t) {
          return t;
        } else {
          return w(i);
        }
      }
      function b(e, t) {
        var n = {
          t: e,
          d: t
        };
        oe.push(n);
      }
      function S(e, t) {
        try {
          var n = new XMLHttpRequest();
          if (n && "withCredentials" in n) {
            n.open(e, t, true);
            n.withCredentials = true;
            if (n.setRequestHeader) {
              n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
          } else {
            if (typeof XDomainRequest === "undefined") {
              return null;
            }
            n = new XDomainRequest();
            n.open(e, t);
          }
          n.timeout = 15000;
          return n;
        } catch (e) {
          return null;
        }
      }
      function C(e, t) {
        var n = B($(t));
        var r = ["payload=" + n, "appId=" + e.appID, "tag=" + e.tag, "uuid=" + e.uuid];
        var i = e.getSid();
        if (i) {
          r.push("sid=" + i);
        }
        if (e.vid) {
          r.push("vid=" + e.vid);
        }
        var o = e.getCustomParams();
        if (o.length) {
          r.push.apply(r, o);
        }
        return r;
      }
      function A() {
        try {
          return window.navigator.sendBeacon && window.Blob;
        } catch (e) {
          return false;
        }
      }
      function R(e, t) {
        try {
          var n = new Blob([t], {
            type: "application/x-www-form-urlencoded"
          });
          return window.navigator.sendBeacon(e, n);
        } catch (e) {}
      }
      function I(e, t, n, r) {
        try {
          var i = new Date(Date.now() + t * 1000).toUTCString().replace(/GMT$/, "UTC");
          var o = e + "=" + n + "; expires=" + i + "; path=/";
          var a = (r === true || r === "true") && T();
          if (a) {
            o = o + "; domain=" + a;
          }
          document.cookie = o;
          return true;
        } catch (e) {
          return false;
        }
      }
      function _(e) {
        var t = undefined;
        var n = "; " + document.cookie;
        var r = n.split("; " + e + "=");
        if (r.length == 2) {
          t = r.pop().split(";").shift();
        }
        return t;
      }
      function T() {
        var e = window.location.hostname;
        if (!e) {
          return "";
        }
        var t = k(e);
        if (t) {
          return "." + t.domain + "." + t.type;
        } else {
          return "";
        }
      }
      function k(e) {
        var t = {};
        var n = new RegExp("([a-z-0-9]{2,63}).([a-z.]{2,6})$");
        var r = n.exec(e);
        if (r && r.length > 1) {
          t.domain = r[1];
          t.type = r[2];
          t.subdomain = e.replace(t.domain + "." + t.type, "").slice(0, -1);
          return t;
        } else {
          return null;
        }
      }
      function U(e, t, n, r) {
        if (de.appID === window._pxAppId) {
          try {
            var i;
            var o;
            var a = new Date(Date.now() + t * 1000).toUTCString();
            a = a.replace(/GMT$/, "UTC");
            if (typeof r !== "undefined" && (r === "true" || r === true)) {
              o = T();
            }
            i = o ? [e, "=", n, "; expires=", a, "; path=/", "; domain=", o] : [e, "=", n, "; expires=", a, "; path=/"];
            document.cookie = i.join("");
          } catch (e) {}
        }
        fe.trigger("risk", n, e);
      }
      function P(e) {
        try {
          if (window.sessionStorage) {
            window.sessionStorage.pxsid = e;
          }
        } catch (e) {}
      }
      function D(e) {
        var t;
        var n;
        while (t = e.shift()) {
          t = t.split("|");
          n = t.shift();
          if (typeof he[n] === "function") {
            try {
              he[n].apply({}, t);
            } catch (e) {}
          }
        }
      }
      function j(e) {
        if (e && e.length) {
          var t;
          try {
            t = V(e);
          } catch (e) {
            return;
          }
          if (t && (typeof t === "undefined" ? "undefined" : M(t)) == "object" && t.do && t.do.slice === [].slice) {
            D(t.do);
          }
        }
      }
      function L(e, t, n) {
        if (e) {
          t = t || 0;
          I("_pxvid", t, e, n);
          de.vid = e;
        }
      }
      function O() {
        var i = n(e);
        var o = r(i);
        var a = undefined;
        a = "PXAbo2Yc8X";
        e.PXAbo2Yc8X = le;
        if (i._pxAppId === "PXAbo2Yc8X") {
          e.PX = le;
        }
        if (i._pxRootUrl) {
          de.baseURL = i._pxRootUrl;
        } else if (i._pxPubHost == "collector.staging") {
          de.baseURL = "//collector.staging.pxi.pub";
        } else {
          de.baseURL = "https://collector-a.perimeterx.net".replace("collector-a", "collector-" + a);
        }
        de.uuid = se;
        de.appID = a;
        de.params = o;
        de.tag = "v2.27";
        var c = _("_pxvid");
        if (c) {
          de.vid = c;
        }
        de.on("xhrResponse", j);
        try {
          if (i._pxAppId === "PXAbo2Yc8X" && e.pxInit) {
            e.pxInit(le);
          } else {
            var u = e.PXAbo2Yc8X_asyncInit;
            if (typeof u === "function") {
              u(le);
            }
          }
        } catch (e) {}
        var s;
        var f = N.extend({
          bootstrap: function () {
            b("PX2", {});
            de.on("xhrSuccess", f.clientXHRSuccess);
            de.on("xhrFailure", f.clientXHRFailure);
            f.sendClientActivities();
            t("beforeunload", function () {
              de.abort();
              clearTimeout(s);
            });
          },
          sendClientActivities: function () {
            f.trigger("sendClientActivities", de.failures, de.retries);
            if (oe.length > 0) {
              f.assureLocationHrefInPayload(oe);
              if (de.failures < de.retries) {
                de.sendActivities();
              } else {
                f.startClientActivitiesTimer();
              }
            } else {
              f.startClientActivitiesTimer();
            }
          },
          assureLocationHrefInPayload: function (t) {
            if (!("PX96" in t[0].d)) {
              t[0].d.PX96 = e.location.href;
            }
          },
          startClientActivitiesTimer: function () {
            clearTimeout(s);
            s = setTimeout(f.sendClientActivities, 700);
          },
          clientXHRSuccess: function (e) {
            f.trigger("xhrSuccess", e);
            f.startClientActivitiesTimer();
          },
          clientXHRFailure: function (e) {
            f.trigger("xhrFailure", e);
            f.startClientActivitiesTimer();
          },
          abortClient: function () {
            clearTimeout(s);
            de.abort();
            f.trigger("xhrAbort");
          }
        }, F);
        f.bootstrap();
      }
      e = "default" in e ? e.default : e;
      var X;
      var E;
      var H;
      var q;
      var F = {
        on: function (e, t, n) {
          this.subscribe(e, t, n, false);
        },
        one: function (e, t, n) {
          this.subscribe(e, t, n, true);
        },
        off: function (e, t) {
          if (this.channels[e] !== undefined) {
            var n;
            var r;
            n = 0;
            for (r = this.channels[e].length; n < r; n++) {
              var i = this.channels[e][n].fn;
              if (i === t) {
                this.channels[e].splice(n, 1);
                break;
              }
            }
          }
        },
        subscribe: function (e, t, n, r) {
          if (this.channels === undefined) {
            this.channels = {};
          }
          this.channels[e] = this.channels[e] || [];
          this.channels[e].push({
            fn: t,
            ctx: n,
            once: r || false
          });
        },
        trigger: function (e) {
          if (this.channels && this.channels.hasOwnProperty(e)) {
            var t = Array.prototype.slice.call(arguments, 1);
            var n = [];
            while (this.channels[e].length > 0) {
              var r = this.channels[e].shift();
              if (typeof r.fn === "function") {
                r.fn.apply(r.ctx, t);
              }
              if (!r.once) {
                n.push(r);
              }
            }
            this.channels[e] = n;
          }
        }
      };
      var N = {
        cloneObject: function (e) {
          var t;
          var n = {};
          for (t in e) {
            n[t] = e[t];
          }
          return n;
        },
        extend: function (e, t) {
          var n;
          var r = N.cloneObject(t);
          for (n in r) {
            if (r.hasOwnProperty(n)) {
              e[n] = r[n];
            }
          }
          return e;
        }
      };
      var B = i(typeof btoa === "function");
      var M = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      };
      (function () {
        function e(e) {
          this.value = e;
        }
        function t(t) {
          function n(e, t) {
            return new Promise(function (n, i) {
              var c = {
                key: e,
                arg: t,
                resolve: n,
                reject: i,
                next: null
              };
              if (a) {
                a = a.next = c;
              } else {
                o = a = c;
                r(e, t);
              }
            });
          }
          function r(n, o) {
            try {
              var a = t[n](o);
              var c = a.value;
              if (c instanceof e) {
                Promise.resolve(c.value).then(function (e) {
                  r("next", e);
                }, function (e) {
                  r("throw", e);
                });
              } else {
                i(a.done ? "return" : "normal", a.value);
              }
            } catch (e) {
              i("throw", e);
            }
          }
          function i(e, t) {
            switch (e) {
              case "return":
                o.resolve({
                  value: t,
                  done: true
                });
                break;
              case "throw":
                o.reject(t);
                break;
              default:
                o.resolve({
                  value: t,
                  done: false
                });
            }
            o = o.next;
            if (o) {
              r(o.key, o.arg);
            } else {
              a = null;
            }
          }
          var o;
          var a;
          this._invoke = n;
          if (typeof t.return !== "function") {
            this.return = undefined;
          }
        }
        if (typeof Symbol === "function" && Symbol.asyncIterator) {
          t.prototype[Symbol.asyncIterator] = function () {
            return this;
          };
        }
        t.prototype.next = function (e) {
          return this._invoke("next", e);
        };
        t.prototype.throw = function (e) {
          return this._invoke("throw", e);
        };
        t.prototype.return = function (e) {
          return this._invoke("return", e);
        };
        return {
          wrap: function (e) {
            return function () {
              return new t(e.apply(this, arguments));
            };
          },
          await: function (t) {
            return new e(t);
          }
        };
      })();
      var J = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      var z = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "": "\\v",
        "\"": "\\\"",
        "\\": "\\\\"
      };
      var G = {
        "\"": "\"",
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
      };
      var V = typeof JSON !== "undefined" && typeof JSON.parse === "function" ? JSON.parse : s;
      var $ = typeof JSON !== "undefined" && typeof JSON.stringify === "function" ? JSON.stringify : u;
      if (typeof crypto !== "undefined" && crypto && crypto.getRandomValues) {
        var Y = new Uint8Array(16);
        q = function () {
          crypto.getRandomValues(Y);
          return Y;
        };
      }
      if (!q) {
        var K = new Array(16);
        q = function () {
          var e;
          for (var t = 0; t < 16; t++) {
            if ((t & 3) === 0) {
              e = Math.random() * 4294967296;
            }
            K[t] = e >>> ((t & 3) << 3) & 255;
          }
          return K;
        };
      }
      var Q = [];
      var W = {};
      for (var Z = 0; Z < 256; Z++) {
        Q[Z] = (Z + 256).toString(16).substr(1);
        W[Q[Z]] = Z;
      }
      var ee = q();
      var te = [ee[0] | 1, ee[1], ee[2], ee[3], ee[4], ee[5]];
      var ne = (ee[6] << 8 | ee[7]) & 16383;
      var re = 0;
      var ie = 0;
      var oe = [];
      var se = x();
      var fe = N.extend({}, F);
      var le = {
        Events: fe
      };
      var de = N.extend({
        baseURL: "",
        path: "/api/v1/collector",
        failures: 0,
        retries: 1,
        appID: "",
        tag: "",
        logReqTime: true,
        uuid: "",
        vid: "",
        sendActivities: function () {
          var e = oe.length > 10 ? 10 : oe.length;
          var t = oe.slice(0, e);
          var n = C(de, t);
          var r = de.baseURL + de.path;
          var i = n.join("&");
          de._postXhr(r, i, {
            response: function (e) {
              de.trigger("xhrResponse", e);
            },
            success: function (t) {
              de.cleanup();
              de.failures = 0;
              oe.splice(0, e);
              if (oe.length > 0) {
                de.sendActivities();
              } else {
                de.trigger("xhrSuccess", t);
              }
            },
            failure: function (e) {
              de.cleanup();
              de.failures += 1;
              de.trigger("xhrFailure", e);
            }
          });
        },
        _postXhr: function (e, t, n) {
          var r = de.xhr = S("POST", e);
          if (r) {
            r.onload = function () {
              var e = typeof r.status === "undefined" ? 200 : r.status;
              n.response(r.responseText);
              n[e == 200 ? "success" : "failure"](r.responseText);
            };
            r.onerror = function () {
              n.failure(r.responseText);
            };
            try {
              r.send(t);
            } catch (e) {
              n.failure(e + "");
            }
          } else {
            new Image().src = e + "/noCors?" + t;
            n.response("");
            n.success("");
          }
        },
        beaconActivities: function (e) {
          var t = C(de, e).join("&");
          if (A()) {
            var n = de.baseURL + de.path + "/beacon";
            R(n, t);
          } else {
            new Image().src = de.baseURL + de.path + "/noCors?" + t;
          }
        },
        abort: function () {
          if (de.xhr) {
            de.xhr.abort();
          }
        },
        cleanup: function () {
          delete de.xhr;
        },
        getSid: function () {
          try {
            if (typeof window.sessionStorage !== "undefined") {
              return window.sessionStorage.pxsid;
            } else {
              return null;
            }
          } catch (e) {
            return null;
          }
        },
        getCustomParams: function () {
          var e;
          var t = de.params || {};
          var n = [];
          for (e in t) {
            n.push(e + "=" + encodeURIComponent(t[e]));
          }
          return n;
        }
      }, F);
      var he = {
        bake: U,
        sid: P,
        vid: L
      };
      if (!e.PXAbo2Yc8X) {
        O();
      }
    })(window);
  } catch (e) {
    new Image().src = (window._pxRootUrl || "https://collector-a.perimeterx.net") + "/api/v1/collector/clientError?r=" + encodeURIComponent("{\"appId\":\"" + (window._pxAppId || "") + "\",\"tag\":\"undefined\",\"name\":\"" + e.name + "\",\"line\":\"" + (e.lineNumber || e.line) + "\",\"script\":\"" + (e.fileName || e.sourceURL || e.script) + "\",\"stack\":\"" + (e.stackTrace || e.stack || "") + "\",\"message\":\"" + e.message + "\"}");
  }