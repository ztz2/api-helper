"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var v = function (l, h) { return function () { return (h || l((h = { exports: {} }).exports, h), h.exports); }; };
var he = v(function (qf, ii) { var Nt = function (l) { return l && l.Math == Math && l; }; ii.exports = Nt(typeof globalThis == "object" && globalThis) || Nt(typeof window == "object" && window) || Nt(typeof self == "object" && self) || Nt(typeof global == "object" && global) || function () { return this; }() || Function("return this")(); });
var ce = v(function (Uf, ai) { ai.exports = function (l) { try {
    return !!l();
}
catch (_b) {
    return !0;
} }; });
var ve = v(function ($f, ni) { var xh = ce(); ni.exports = !xh(function () { return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7; }); });
var kt = v(function (Hf, oi) { var gh = ce(); oi.exports = !gh(function () { var l = function () { }.bind(); return typeof l != "function" || l.hasOwnProperty("prototype"); }); });
var Ft = v(function (zf, li) { var Ph = kt(), Dt = Function.prototype.call; li.exports = Ph ? Dt.bind(Dt) : function () { return Dt.apply(Dt, arguments); }; });
var pi = v(function (ci) {
    "use strict";
    var hi = {}.propertyIsEnumerable, ui = Object.getOwnPropertyDescriptor, Ah = ui && !hi.call({ 1: 2 }, 1);
    ci.f = Ah ? function (h) { var f = ui(this, h); return !!f && f.enumerable; } : hi;
});
var Ps = v(function (Kf, fi) { fi.exports = function (l, h) { return { enumerable: !(l & 1), configurable: !(l & 2), writable: !(l & 4), value: h }; }; });
var pe = v(function (Wf, yi) { var di = kt(), mi = Function.prototype, As = mi.call, Th = di && mi.bind.bind(As, As); yi.exports = di ? Th : function (l) { return function () { return As.apply(l, arguments); }; }; });
var st = v(function (Gf, gi) { var xi = pe(), vh = xi({}.toString), Eh = xi("".slice); gi.exports = function (l) { return Eh(vh(l), 8, -1); }; });
var Ai = v(function (Jf, Pi) { var Ch = pe(), bh = ce(), Sh = st(), Ts = Object, wh = Ch("".split); Pi.exports = bh(function () { return !Ts("z").propertyIsEnumerable(0); }) ? function (l) { return Sh(l) == "String" ? wh(l, "") : Ts(l); } : Ts; });
var vs = v(function (Xf, Ti) { Ti.exports = function (l) { return l == null; }; });
var Es = v(function (Yf, vi) { var Ih = vs(), Nh = TypeError; vi.exports = function (l) { if (Ih(l))
    throw Nh("Can't call method on " + l); return l; }; });
var Lt = v(function (Qf, Ei) { var kh = Ai(), Dh = Es(); Ei.exports = function (l) { return kh(Dh(l)); }; });
var bs = v(function (Zf, Ci) { var Cs = typeof document == "object" && document.all, Fh = typeof Cs > "u" && Cs !== void 0; Ci.exports = { all: Cs, IS_HTMLDDA: Fh }; });
var ie = v(function (ed, Si) { var bi = bs(), Lh = bi.all; Si.exports = bi.IS_HTMLDDA ? function (l) { return typeof l == "function" || l === Lh; } : function (l) { return typeof l == "function"; }; });
var Oe = v(function (td, Ni) { var wi = ie(), Ii = bs(), Oh = Ii.all; Ni.exports = Ii.IS_HTMLDDA ? function (l) { return typeof l == "object" ? l !== null : wi(l) || l === Oh; } : function (l) { return typeof l == "object" ? l !== null : wi(l); }; });
var rt = v(function (sd, ki) { var Ss = he(), Bh = ie(), Mh = function (l) { return Bh(l) ? l : void 0; }; ki.exports = function (l, h) { return arguments.length < 2 ? Mh(Ss[l]) : Ss[l] && Ss[l][h]; }; });
var Fi = v(function (rd, Di) { var _h = pe(); Di.exports = _h({}.isPrototypeOf); });
var Oi = v(function (id, Li) { var Rh = rt(); Li.exports = Rh("navigator", "userAgent") || ""; });
var Ui = v(function (ad, qi) { var ji = he(), ws = Oi(), Bi = ji.process, Mi = ji.Deno, _i = Bi && Bi.versions || Mi && Mi.version, Ri = _i && _i.v8, fe, Ot; Ri && (fe = Ri.split("."), Ot = fe[0] > 0 && fe[0] < 4 ? 1 : +(fe[0] + fe[1])); !Ot && ws && (fe = ws.match(/Edge\/(\d+)/), (!fe || fe[1] >= 74) && (fe = ws.match(/Chrome\/(\d+)/), fe && (Ot = +fe[1]))); qi.exports = Ot; });
var Is = v(function (nd, Hi) { var $i = Ui(), jh = ce(); Hi.exports = !!Object.getOwnPropertySymbols && !jh(function () { var l = Symbol(); return !String(l) || !(Object(l) instanceof Symbol) || !Symbol.sham && $i && $i < 41; }); });
var Ns = v(function (od, zi) { var qh = Is(); zi.exports = qh && !Symbol.sham && typeof Symbol.iterator == "symbol"; });
var ks = v(function (ld, Vi) { var Uh = rt(), $h = ie(), Hh = Fi(), zh = Ns(), Vh = Object; Vi.exports = zh ? function (l) { return typeof l == "symbol"; } : function (l) { var h = Uh("Symbol"); return $h(h) && Hh(h.prototype, Vh(l)); }; });
var Wi = v(function (hd, Ki) { var Kh = String; Ki.exports = function (l) { try {
    return Kh(l);
}
catch (_b) {
    return "Object";
} }; });
var Bt = v(function (ud, Gi) { var Wh = ie(), Gh = Wi(), Jh = TypeError; Gi.exports = function (l) { if (Wh(l))
    return l; throw Jh(Gh(l) + " is not a function"); }; });
var Xi = v(function (cd, Ji) { var Xh = Bt(), Yh = vs(); Ji.exports = function (l, h) { var f = l[h]; return Yh(f) ? void 0 : Xh(f); }; });
var Qi = v(function (pd, Yi) { var Ds = Ft(), Fs = ie(), Ls = Oe(), Qh = TypeError; Yi.exports = function (l, h) { var f, d; if (h === "string" && Fs(f = l.toString) && !Ls(d = Ds(f, l)) || Fs(f = l.valueOf) && !Ls(d = Ds(f, l)) || h !== "string" && Fs(f = l.toString) && !Ls(d = Ds(f, l)))
    return d; throw Qh("Can't convert object to primitive value"); }; });
var ea = v(function (fd, Zi) { Zi.exports = !1; });
var Mt = v(function (dd, sa) { var ta = he(), Zh = Object.defineProperty; sa.exports = function (l, h) { try {
    Zh(ta, l, { value: h, configurable: !0, writable: !0 });
}
catch (_b) {
    ta[l] = h;
} return h; }; });
var _t = v(function (md, ia) { var eu = he(), tu = Mt(), ra = "__core-js_shared__", su = eu[ra] || tu(ra, {}); ia.exports = su; });
var Os = v(function (yd, na) { var ru = ea(), aa = _t(); (na.exports = function (l, h) { return aa[l] || (aa[l] = h !== void 0 ? h : {}); })("versions", []).push({ version: "3.26.1", mode: ru ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" }); });
var Bs = v(function (xd, oa) { var iu = Es(), au = Object; oa.exports = function (l) { return au(iu(l)); }; });
var Ie = v(function (gd, la) { var nu = pe(), ou = Bs(), lu = nu({}.hasOwnProperty); la.exports = Object.hasOwn || function (h, f) { return lu(ou(h), f); }; });
var Ms = v(function (Pd, ha) { var hu = pe(), uu = 0, cu = Math.random(), pu = hu(1..toString); ha.exports = function (l) { return "Symbol(" + (l === void 0 ? "" : l) + ")_" + pu(++uu + cu, 36); }; });
var it = v(function (Ad, da) { var fu = he(), du = Os(), ua = Ie(), mu = Ms(), ca = Is(), fa = Ns(), Ge = du("wks"), Be = fu.Symbol, pa = Be && Be.for, yu = fa ? Be : Be && Be.withoutSetter || mu; da.exports = function (l) { if (!ua(Ge, l) || !(ca || typeof Ge[l] == "string")) {
    var h = "Symbol." + l;
    ca && ua(Be, l) ? Ge[l] = Be[l] : fa && pa ? Ge[l] = pa(h) : Ge[l] = yu(h);
} return Ge[l]; }; });
var ga = v(function (Td, xa) { var xu = Ft(), ma = Oe(), ya = ks(), gu = Xi(), Pu = Qi(), Au = it(), Tu = TypeError, vu = Au("toPrimitive"); xa.exports = function (l, h) { if (!ma(l) || ya(l))
    return l; var f = gu(l, vu), d; if (f) {
    if (h === void 0 && (h = "default"), d = xu(f, l, h), !ma(d) || ya(d))
        return d;
    throw Tu("Can't convert object to primitive value");
} return h === void 0 && (h = "number"), Pu(l, h); }; });
var _s = v(function (vd, Pa) { var Eu = ga(), Cu = ks(); Pa.exports = function (l) { var h = Eu(l, "string"); return Cu(h) ? h : h + ""; }; });
var va = v(function (Ed, Ta) { var bu = he(), Aa = Oe(), Rs = bu.document, Su = Aa(Rs) && Aa(Rs.createElement); Ta.exports = function (l) { return Su ? Rs.createElement(l) : {}; }; });
var js = v(function (Cd, Ea) { var wu = ve(), Iu = ce(), Nu = va(); Ea.exports = !wu && !Iu(function () { return Object.defineProperty(Nu("div"), "a", { get: function () { return 7; } }).a != 7; }); });
var qs = v(function (ba) { var ku = ve(), Du = Ft(), Fu = pi(), Lu = Ps(), Ou = Lt(), Bu = _s(), Mu = Ie(), _u = js(), Ca = Object.getOwnPropertyDescriptor; ba.f = ku ? Ca : function (h, f) { if (h = Ou(h), f = Bu(f), _u)
    try {
        return Ca(h, f);
    }
    catch (_b) { } if (Mu(h, f))
    return Lu(!Du(Fu.f, h, f), h[f]); }; });
var wa = v(function (Sd, Sa) { var Ru = ve(), ju = ce(); Sa.exports = Ru && ju(function () { return Object.defineProperty(function () { }, "prototype", { value: 42, writable: !1 }).prototype != 42; }); });
var Rt = v(function (wd, Ia) { var qu = Oe(), Uu = String, $u = TypeError; Ia.exports = function (l) { if (qu(l))
    return l; throw $u(Uu(l) + " is not an object"); }; });
var at = v(function (ka) { var Hu = ve(), zu = js(), Vu = wa(), jt = Rt(), Na = _s(), Ku = TypeError, Us = Object.defineProperty, Wu = Object.getOwnPropertyDescriptor, $s = "enumerable", Hs = "configurable", zs = "writable"; ka.f = Hu ? Vu ? function (h, f, d) { if (jt(h), f = Na(f), jt(d), typeof h == "function" && f === "prototype" && "value" in d && zs in d && !d[zs]) {
    var x = Wu(h, f);
    x && x[zs] && (h[f] = d.value, d = { configurable: Hs in d ? d[Hs] : x[Hs], enumerable: $s in d ? d[$s] : x[$s], writable: !1 });
} return Us(h, f, d); } : Us : function (h, f, d) { if (jt(h), f = Na(f), jt(d), zu)
    try {
        return Us(h, f, d);
    }
    catch (_b) { } if ("get" in d || "set" in d)
    throw Ku("Accessors not supported"); return "value" in d && (h[f] = d.value), h; }; });
var Vs = v(function (Nd, Da) { var Gu = ve(), Ju = at(), Xu = Ps(); Da.exports = Gu ? function (l, h, f) { return Ju.f(l, h, Xu(1, f)); } : function (l, h, f) { return l[h] = f, l; }; });
var Oa = v(function (kd, La) { var Ks = ve(), Yu = Ie(), Fa = Function.prototype, Qu = Ks && Object.getOwnPropertyDescriptor, Ws = Yu(Fa, "name"), Zu = Ws && function () { }.name === "something", ec = Ws && (!Ks || Ks && Qu(Fa, "name").configurable); La.exports = { EXISTS: Ws, PROPER: Zu, CONFIGURABLE: ec }; });
var Js = v(function (Dd, Ba) { var tc = pe(), sc = ie(), Gs = _t(), rc = tc(Function.toString); sc(Gs.inspectSource) || (Gs.inspectSource = function (l) { return rc(l); }); Ba.exports = Gs.inspectSource; });
var Ra = v(function (Fd, _a) { var ic = he(), ac = ie(), Ma = ic.WeakMap; _a.exports = ac(Ma) && /native code/.test(String(Ma)); });
var Ua = v(function (Ld, qa) { var nc = Os(), oc = Ms(), ja = nc("keys"); qa.exports = function (l) { return ja[l] || (ja[l] = oc(l)); }; });
var Xs = v(function (Od, $a) { $a.exports = {}; });
var Ka = v(function (Bd, Va) { var lc = Ra(), za = he(), hc = Oe(), uc = Vs(), Ys = Ie(), Qs = _t(), cc = Ua(), pc = Xs(), Ha = "Object already initialized", Zs = za.TypeError, fc = za.WeakMap, qt, nt, Ut, dc = function (l) { return Ut(l) ? nt(l) : qt(l, {}); }, mc = function (l) { return function (h) { var f; if (!hc(h) || (f = nt(h)).type !== l)
    throw Zs("Incompatible receiver, " + l + " required"); return f; }; }; lc || Qs.state ? (de = Qs.state || (Qs.state = new fc), de.get = de.get, de.has = de.has, de.set = de.set, qt = function (l, h) { if (de.has(l))
    throw Zs(Ha); return h.facade = l, de.set(l, h), h; }, nt = function (l) { return de.get(l) || {}; }, Ut = function (l) { return de.has(l); }) : (Me = cc("state"), pc[Me] = !0, qt = function (l, h) { if (Ys(l, Me))
    throw Zs(Ha); return h.facade = l, uc(l, Me, h), h; }, nt = function (l) { return Ys(l, Me) ? l[Me] : {}; }, Ut = function (l) { return Ys(l, Me); }); var de, Me; Va.exports = { set: qt, get: nt, has: Ut, enforce: dc, getterFor: mc }; });
var tr = v(function (Md, Ga) { var yc = ce(), xc = ie(), $t = Ie(), er = ve(), gc = Oa().CONFIGURABLE, Pc = Js(), Wa = Ka(), Ac = Wa.enforce, Tc = Wa.get, Ht = Object.defineProperty, vc = er && !yc(function () { return Ht(function () { }, "length", { value: 8 }).length !== 8; }), Ec = String(String).split("String"), Cc = Ga.exports = function (l, h, f) { String(h).slice(0, 7) === "Symbol(" && (h = "[" + String(h).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), f && f.getter && (h = "get " + h), f && f.setter && (h = "set " + h), (!$t(l, "name") || gc && l.name !== h) && (er ? Ht(l, "name", { value: h, configurable: !0 }) : l.name = h), vc && f && $t(f, "arity") && l.length !== f.arity && Ht(l, "length", { value: f.arity }); try {
    f && $t(f, "constructor") && f.constructor ? er && Ht(l, "prototype", { writable: !1 }) : l.prototype && (l.prototype = void 0);
}
catch (_b) { } var d = Ac(l); return $t(d, "source") || (d.source = Ec.join(typeof h == "string" ? h : "")), l; }; Function.prototype.toString = Cc(function () { return xc(this) && Tc(this).source || Pc(this); }, "toString"); });
var Xa = v(function (_d, Ja) { var bc = ie(), Sc = at(), wc = tr(), Ic = Mt(); Ja.exports = function (l, h, f, d) { d || (d = {}); var x = d.enumerable, P = d.name !== void 0 ? d.name : h; if (bc(f) && wc(f, P, d), d.global)
    x ? l[h] = f : Ic(h, f);
else {
    try {
        d.unsafe ? l[h] && (x = !0) : delete l[h];
    }
    catch (_b) { }
    x ? l[h] = f : Sc.f(l, h, { value: f, enumerable: !1, configurable: !d.nonConfigurable, writable: !d.nonWritable });
} return l; }; });
var Qa = v(function (Rd, Ya) { var Nc = Math.ceil, kc = Math.floor; Ya.exports = Math.trunc || function (h) { var f = +h; return (f > 0 ? kc : Nc)(f); }; });
var sr = v(function (jd, Za) { var Dc = Qa(); Za.exports = function (l) { var h = +l; return h !== h || h === 0 ? 0 : Dc(h); }; });
var tn = v(function (qd, en) { var Fc = sr(), Lc = Math.max, Oc = Math.min; en.exports = function (l, h) { var f = Fc(l); return f < 0 ? Lc(f + h, 0) : Oc(f, h); }; });
var rn = v(function (Ud, sn) { var Bc = sr(), Mc = Math.min; sn.exports = function (l) { return l > 0 ? Mc(Bc(l), 9007199254740991) : 0; }; });
var zt = v(function ($d, an) { var _c = rn(); an.exports = function (l) { return _c(l.length); }; });
var ln = v(function (Hd, on) { var Rc = Lt(), jc = tn(), qc = zt(), nn = function (l) { return function (h, f, d) { var x = Rc(h), P = qc(x), m = jc(d, P), E; if (l && f != f) {
    for (; P > m;)
        if (E = x[m++], E != E)
            return !0;
}
else
    for (; P > m; m++)
        if ((l || m in x) && x[m] === f)
            return l || m || 0; return !l && -1; }; }; on.exports = { includes: nn(!0), indexOf: nn(!1) }; });
var cn = v(function (zd, un) { var Uc = pe(), rr = Ie(), $c = Lt(), Hc = ln().indexOf, zc = Xs(), hn = Uc([].push); un.exports = function (l, h) { var f = $c(l), d = 0, x = [], P; for (P in f)
    !rr(zc, P) && rr(f, P) && hn(x, P); for (; h.length > d;)
    rr(f, P = h[d++]) && (~Hc(x, P) || hn(x, P)); return x; }; });
var fn = v(function (Vd, pn) { pn.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]; });
var mn = v(function (dn) { var Vc = cn(), Kc = fn(), Wc = Kc.concat("length", "prototype"); dn.f = Object.getOwnPropertyNames || function (h) { return Vc(h, Wc); }; });
var xn = v(function (yn) { yn.f = Object.getOwnPropertySymbols; });
var Pn = v(function (Gd, gn) { var Gc = rt(), Jc = pe(), Xc = mn(), Yc = xn(), Qc = Rt(), Zc = Jc([].concat); gn.exports = Gc("Reflect", "ownKeys") || function (h) { var f = Xc.f(Qc(h)), d = Yc.f; return d ? Zc(f, d(h)) : f; }; });
var vn = v(function (Jd, Tn) { var An = Ie(), ep = Pn(), tp = qs(), sp = at(); Tn.exports = function (l, h, f) { for (var d = ep(h), x = sp.f, P = tp.f, m = 0; m < d.length; m++) {
    var E = d[m];
    !An(l, E) && !(f && An(f, E)) && x(l, E, P(h, E));
} }; });
var Cn = v(function (Xd, En) { var rp = ce(), ip = ie(), ap = /#|\.prototype\./, ot = function (l, h) { var f = op[np(l)]; return f == hp ? !0 : f == lp ? !1 : ip(h) ? rp(h) : !!h; }, np = ot.normalize = function (l) { return String(l).replace(ap, ".").toLowerCase(); }, op = ot.data = {}, lp = ot.NATIVE = "N", hp = ot.POLYFILL = "P"; En.exports = ot; });
var ar = v(function (Yd, bn) { var ir = he(), up = qs().f, cp = Vs(), pp = Xa(), fp = Mt(), dp = vn(), mp = Cn(); bn.exports = function (l, h) { var f = l.target, d = l.global, x = l.stat, P, m, E, S, k, L; if (d ? m = ir : x ? m = ir[f] || fp(f, {}) : m = (ir[f] || {}).prototype, m)
    for (E in h) {
        if (k = h[E], l.dontCallGetSet ? (L = up(m, E), S = L && L.value) : S = m[E], P = mp(d ? E : f + (x ? "." : "#") + E, l.forced), !P && S !== void 0) {
            if (typeof k == typeof S)
                continue;
            dp(k, S);
        }
        (l.sham || S && S.sham) && cp(k, "sham", !0), pp(m, E, k, l);
    } }; });
var Sn = v(function () { var yp = ar(), nr = he(); yp({ global: !0, forced: nr.globalThis !== nr }, { globalThis: nr }); });
var Nn = v(function (em, In) { var wn = tr(), xp = at(); In.exports = function (l, h, f) { return f.get && wn(f.get, h, { getter: !0 }), f.set && wn(f.set, h, { setter: !0 }), xp.f(l, h, f); }; });
var Dn = v(function (tm, kn) {
    "use strict";
    var gp = Rt();
    kn.exports = function () { var l = gp(this), h = ""; return l.hasIndices && (h += "d"), l.global && (h += "g"), l.ignoreCase && (h += "i"), l.multiline && (h += "m"), l.dotAll && (h += "s"), l.unicode && (h += "u"), l.unicodeSets && (h += "v"), l.sticky && (h += "y"), h; };
});
var or = v(function (sm, On) { var bp = st(); On.exports = Array.isArray || function (h) { return bp(h) == "Array"; }; });
var Mn = v(function (rm, Bn) { var Sp = TypeError, wp = 9007199254740991; Bn.exports = function (l) { if (l > wp)
    throw Sp("Maximum allowed index exceeded"); return l; }; });
var Rn = v(function (im, _n) { var Ip = st(), Np = pe(); _n.exports = function (l) { if (Ip(l) === "Function")
    return Np(l); }; });
var Un = v(function (am, qn) { var jn = Rn(), kp = Bt(), Dp = kt(), Fp = jn(jn.bind); qn.exports = function (l, h) { return kp(l), h === void 0 ? l : Dp ? Fp(l, h) : function () { return l.apply(h, arguments); }; }; });
var zn = v(function (nm, Hn) {
    "use strict";
    var Lp = or(), Op = zt(), Bp = Mn(), Mp = Un(), $n = function (l, h, f, d, x, P, m, E) { for (var S = x, k = 0, L = m ? Mp(m, E) : !1, N, O; k < d;)
        k in f && (N = L ? L(f[k], k, h) : f[k], P > 0 && Lp(N) ? (O = Op(N), S = $n(l, h, N, O, S, P - 1) - 1) : (Bp(S + 1), l[S] = N), S++), k++; return S; };
    Hn.exports = $n;
});
var Wn = v(function (om, Kn) { var _p = it(), Rp = _p("toStringTag"), Vn = {}; Vn[Rp] = "z"; Kn.exports = String(Vn) === "[object z]"; });
var Jn = v(function (lm, Gn) { var jp = Wn(), qp = ie(), Vt = st(), Up = it(), $p = Up("toStringTag"), Hp = Object, zp = Vt(function () { return arguments; }()) == "Arguments", Vp = function (l, h) { try {
    return l[h];
}
catch (_b) { } }; Gn.exports = jp ? Vt : function (l) { var h, f, d; return l === void 0 ? "Undefined" : l === null ? "Null" : typeof (f = Vp(h = Hp(l), $p)) == "string" ? f : zp ? Vt(h) : (d = Vt(h)) == "Object" && qp(h.callee) ? "Arguments" : d; }; });
var to = v(function (hm, eo) { var Kp = pe(), Wp = ce(), Xn = ie(), Gp = Jn(), Jp = rt(), Xp = Js(), Yn = function () { }, Yp = [], Qn = Jp("Reflect", "construct"), lr = /^\s*(?:class|function)\b/, Qp = Kp(lr.exec), Zp = !lr.exec(Yn), lt = function (h) { if (!Xn(h))
    return !1; try {
    return Qn(Yn, Yp, h), !0;
}
catch (_b) {
    return !1;
} }, Zn = function (h) { if (!Xn(h))
    return !1; switch (Gp(h)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction": return !1;
} try {
    return Zp || !!Qp(lr, Xp(h));
}
catch (_b) {
    return !0;
} }; Zn.sham = !0; eo.exports = !Qn || Wp(function () { var l; return lt(lt.call) || !lt(Object) || !lt(function () { l = !0; }) || l; }) ? Zn : lt; });
var ao = v(function (um, io) { var so = or(), ef = to(), tf = Oe(), sf = it(), rf = sf("species"), ro = Array; io.exports = function (l) { var h; return so(l) && (h = l.constructor, ef(h) && (h === ro || so(h.prototype)) ? h = void 0 : tf(h) && (h = h[rf], h === null && (h = void 0))), h === void 0 ? ro : h; }; });
var oo = v(function (cm, no) { var af = ao(); no.exports = function (l, h) { return new (af(l))(h === 0 ? 0 : h); }; });
Sn();
var Pp = he(), Ap = ve(), Tp = Nn(), vp = Dn(), Ep = ce(), Fn = Pp.RegExp, Ln = Fn.prototype, Cp = Ap && Ep(function () { var l = !0; try {
    Fn(".", "d");
}
catch (_b) {
    l = !1;
} var h = {}, f = "", d = l ? "dgimsy" : "gimsy", x = function (S, k) { Object.defineProperty(h, S, { get: function () { return f += k, !0; } }); }, P = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" }; l && (P.hasIndices = "d"); for (var m in P)
    x(m, P[m]); var E = Object.getOwnPropertyDescriptor(Ln, "flags").get.call(h); return E !== d || f !== d; });
Cp && Tp(Ln, "flags", { configurable: !0, get: vp });
var nf = ar(), of = zn(), lf = Bt(), hf = Bs(), uf = zt(), cf = oo();
nf({ target: "Array", proto: !0 }, { flatMap: function (h) { var f = hf(this), d = uf(f), x; return lf(h), x = cf(f, 0), x.length = of(x, f, f, d, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), x; } });
var pr = Object.defineProperty, pf = Object.getOwnPropertyDescriptor, fr = Object.getOwnPropertyNames, ff = Object.prototype.hasOwnProperty, lo = function (l, h) { return function () { return l && (h = (0, l[fr(l)[0]])(l = 0)), h; }; }, $ = function (l, h) { return function () { return h || (0, l[fr(l)[0]])((h = { exports: {} }).exports, h), h.exports; }; }, df = function (l, h) { for (var f in h)
    pr(l, f, { get: h[f], enumerable: !0 }); }, mf = function (l, h, f, d) {
    var e_1, _b;
    if (h && typeof h == "object" || typeof h == "function") {
        var _loop_1 = function (x) {
            !ff.call(l, x) && x !== f && pr(l, x, { get: function () { return h[x]; }, enumerable: !(d = pf(h, x)) || d.enumerable });
        };
        try {
            for (var _g = __values(fr(h)), _j = _g.next(); !_j.done; _j = _g.next()) {
                var x = _j.value;
                _loop_1(x);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return l;
}, yf = function (l) { return mf(pr({}, "__esModule", { value: !0 }), l); }, U = lo({ "<define:process>": function () { } }), xf = $({ "src/utils/try-combinations.js": function (l, h) {
        "use strict";
        U();
        function f() {
            var e_2, _b;
            var d;
            for (var x = arguments.length, P = new Array(x), m = 0; m < x; m++)
                P[m] = arguments[m];
            try {
                for (var _g = __values(P.entries()), _j = _g.next(); !_j.done; _j = _g.next()) {
                    var _k = __read(_j.value, 2), E = _k[0], S = _k[1];
                    try {
                        return { result: S() };
                    }
                    catch (k) {
                        E === 0 && (d = k);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return { error: d };
        }
        h.exports = f;
    } }), ho = $({ "src/language-js/utils/get-shebang.js": function (l, h) {
        "use strict";
        U();
        function f(d) {
            if (!d.startsWith("#!"))
                return "";
            var x = d.indexOf("\n");
            return x === -1 ? d : d.slice(0, x);
        }
        h.exports = f;
    } }), gf = $({ "src/utils/text/skip-inline-comment.js": function (l, h) {
        "use strict";
        U();
        function f(d, x) { if (x === !1)
            return !1; if (d.charAt(x) === "/" && d.charAt(x + 1) === "*") {
            for (var P = x + 2; P < d.length; ++P)
                if (d.charAt(P) === "*" && d.charAt(P + 1) === "/")
                    return P + 2;
        } return x; }
        h.exports = f;
    } }), Pf = $({ "src/utils/text/skip-newline.js": function (l, h) {
        "use strict";
        U();
        function f(d, x, P) {
            var m = P && P.backwards;
            if (x === !1)
                return !1;
            var E = d.charAt(x);
            if (m) {
                if (d.charAt(x - 1) === "\r" && E === "\n")
                    return x - 2;
                if (E === "\n" || E === "\r" || E === "\u2028" || E === "\u2029")
                    return x - 1;
            }
            else {
                if (E === "\r" && d.charAt(x + 1) === "\n")
                    return x + 2;
                if (E === "\n" || E === "\r" || E === "\u2028" || E === "\u2029")
                    return x + 1;
            }
            return x;
        }
        h.exports = f;
    } }), uo = $({ "src/utils/text/skip.js": function (l, h) {
        "use strict";
        U();
        function f(E) { return function (S, k, L) { var N = L && L.backwards; if (k === !1)
            return !1; var O = S.length, A = k; for (; A >= 0 && A < O;) {
            var _ = S.charAt(A);
            if (E instanceof RegExp) {
                if (!E.test(_))
                    return A;
            }
            else if (!E.includes(_))
                return A;
            N ? A-- : A++;
        } return A === -1 || A === O ? A : !1; }; }
        var d = f(/\s/), x = f(" 	"), P = f(",; 	"), m = f(/[^\n\r]/);
        h.exports = { skipWhitespace: d, skipSpaces: x, skipToLineEnd: P, skipEverythingButNewLine: m };
    } }), Af = $({ "src/utils/text/skip-trailing-comment.js": function (l, h) {
        "use strict";
        U();
        var f = uo().skipEverythingButNewLine;
        function d(x, P) { return P === !1 ? !1 : x.charAt(P) === "/" && x.charAt(P + 1) === "/" ? f(x, P) : P; }
        h.exports = d;
    } }), Tf = $({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js": function (l, h) {
        "use strict";
        U();
        var f = gf(), d = Pf(), x = Af(), P = uo().skipSpaces;
        function m(E, S) { var k = null, L = S; for (; L !== k;)
            k = L, L = P(E, L), L = f(E, L), L = x(E, L), L = d(E, L); return L; }
        h.exports = m;
    } }), co = {};
df(co, { EOL: function () { return cr; }, arch: function () { return vf; }, cpus: function () { return Po; }, default: function () { return Co; }, endianness: function () { return po; }, freemem: function () { return xo; }, getNetworkInterfaces: function () { return Eo; }, hostname: function () { return fo; }, loadavg: function () { return mo; }, networkInterfaces: function () { return vo; }, platform: function () { return Ef; }, release: function () { return To; }, tmpDir: function () { return hr; }, tmpdir: function () { return ur; }, totalmem: function () { return go; }, type: function () { return Ao; }, uptime: function () { return yo; } });
function po() { if (typeof Kt > "u") {
    var l = new ArrayBuffer(2), h = new Uint8Array(l), f = new Uint16Array(l);
    if (h[0] = 1, h[1] = 2, f[0] === 258)
        Kt = "BE";
    else if (f[0] === 513)
        Kt = "LE";
    else
        throw new Error("unable to figure out endianess");
} return Kt; }
function fo() { return typeof globalThis.location < "u" ? globalThis.location.hostname : ""; }
function mo() { return []; }
function yo() { return 0; }
function xo() { return Number.MAX_VALUE; }
function go() { return Number.MAX_VALUE; }
function Po() { return []; }
function Ao() { return "Browser"; }
function To() { return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : ""; }
function vo() { }
function Eo() { }
function vf() { return "javascript"; }
function Ef() { return "browser"; }
function hr() { return "/tmp"; }
var Kt, ur, cr, Co, Cf = lo({ "node-modules-polyfills:os": function () {
        U(), ur = hr, cr = "\n", Co = { EOL: cr, tmpdir: ur, tmpDir: hr, networkInterfaces: vo, getNetworkInterfaces: Eo, release: To, type: Ao, cpus: Po, totalmem: go, freemem: xo, uptime: yo, loadavg: mo, hostname: fo, endianness: po };
    } }), bf = $({ "node-modules-polyfills-commonjs:os": function (l, h) { U(); var f = (Cf(), yf(co)); if (f && f.default) {
        h.exports = f.default;
        for (var d in f)
            h.exports[d] = f[d];
    }
    else
        f && (h.exports = f); } }), Sf = $({ "node_modules/detect-newline/index.js": function (l, h) {
        "use strict";
        U();
        var f = function (d) {
            if (typeof d != "string")
                throw new TypeError("Expected a string");
            var x = d.match(/(?:\r?\n)/g) || [];
            if (x.length === 0)
                return;
            var P = x.filter(function (E) { return E === "\r\n"; }).length, m = x.length - P;
            return P > m ? "\r\n" : "\n";
        };
        h.exports = f, h.exports.graceful = function (d) { return typeof d == "string" && f(d) || "\n"; };
    } }), wf = $({ "node_modules/jest-docblock/build/index.js": function (l) {
        "use strict";
        U(), Object.defineProperty(l, "__esModule", { value: !0 }), l.extract = A, l.parse = W, l.parseWithComments = I, l.print = F, l.strip = _;
        function h() { var M = bf(); return h = function () { return M; }, M; }
        function f() { var M = d(Sf()); return f = function () { return M; }, M; }
        function d(M) { return M && M.__esModule ? M : { default: M }; }
        var x = /\*\/$/, P = /^\/\*\*?/, m = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, E = /(^|\s+)\/\/([^\r\n]*)/g, S = /^(\r?\n)+/, k = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, L = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, N = /(\r?\n|^) *\* ?/g, O = [];
        function A(M) { var V = M.match(m); return V ? V[0].trimLeft() : ""; }
        function _(M) { var V = M.match(m); return V && V[0] ? M.substring(V[0].length) : M; }
        function W(M) { return I(M).pragmas; }
        function I(M) { var V = (0, f().default)(M) || h().EOL; M = M.replace(P, "").replace(x, "").replace(N, "$1"); var ee = ""; for (; ee !== M;)
            ee = M, M = M.replace(k, "".concat(V, "$1 $2").concat(V)); M = M.replace(S, "").trimRight(); var b = Object.create(null), B = M.replace(L, "").replace(S, "").trimRight(), te; for (; te = L.exec(M);) {
            var R = te[2].replace(E, "");
            typeof b[te[1]] == "string" || Array.isArray(b[te[1]]) ? b[te[1]] = O.concat(b[te[1]], R) : b[te[1]] = R;
        } return { comments: B, pragmas: b }; }
        function F(M) { var _b = M.comments, V = _b === void 0 ? "" : _b, _g = M.pragmas, ee = _g === void 0 ? {} : _g, b = (0, f().default)(V) || h().EOL, B = "/**", te = " *", R = " */", ae = Object.keys(ee), se = ae.map(function (H) { return z(H, ee[H]); }).reduce(function (H, X) { return H.concat(X); }, []).map(function (H) { return "".concat(te, " ").concat(H).concat(b); }).join(""); if (!V) {
            if (ae.length === 0)
                return "";
            if (ae.length === 1 && !Array.isArray(ee[ae[0]])) {
                var H = ee[ae[0]];
                return "".concat(B, " ").concat(z(ae[0], H)[0]).concat(R);
            }
        } var _e = V.split(b).map(function (H) { return "".concat(te, " ").concat(H); }).join(b) + b; return B + b + (V ? _e : "") + (V && ae.length ? te + b : "") + se + R; }
        function z(M, V) { return O.concat(V).map(function (ee) { return "@".concat(M, " ").concat(ee).trim(); }); }
    } }), If = $({ "src/common/end-of-line.js": function (l, h) {
        "use strict";
        U();
        function f(m) {
            var E = m.indexOf("\r");
            return E >= 0 ? m.charAt(E + 1) === "\n" ? "crlf" : "cr" : "lf";
        }
        function d(m) {
            switch (m) {
                case "cr": return "\r";
                case "crlf": return "\r\n";
                default: return "\n";
            }
        }
        function x(m, E) {
            var S;
            switch (E) {
                case "\n":
                    S = /\n/g;
                    break;
                case "\r":
                    S = /\r/g;
                    break;
                case "\r\n":
                    S = /\r\n/g;
                    break;
                default: throw new Error("Unexpected \"eol\" ".concat(JSON.stringify(E), "."));
            }
            var k = m.match(S);
            return k ? k.length : 0;
        }
        function P(m) {
            return m.replace(/\r\n?/g, "\n");
        }
        h.exports = { guessEndOfLine: f, convertEndOfLineToChars: d, countEndOfLineChars: x, normalizeEndOfLine: P };
    } }), Nf = $({ "src/language-js/pragma.js": function (l, h) {
        "use strict";
        U();
        var _b = wf(), f = _b.parseWithComments, d = _b.strip, x = _b.extract, P = _b.print, m = If().normalizeEndOfLine, E = ho();
        function S(N) { var O = E(N); O && (N = N.slice(O.length + 1)); var A = x(N), _b = f(A), _ = _b.pragmas, W = _b.comments; return { shebang: O, text: N, pragmas: _, comments: W }; }
        function k(N) { var O = Object.keys(S(N).pragmas); return O.includes("prettier") || O.includes("format"); }
        function L(N) {
            var _b = S(N), O = _b.shebang, A = _b.text, _ = _b.pragmas, W = _b.comments, I = d(A), F = P({ pragmas: Object.assign({ format: "" }, _), comments: W.trimStart() });
            return (O ? "".concat(O, "\n") : "") + m(F) + (I.startsWith("\n") ? "\n" : "\n\n") + I;
        }
        h.exports = { hasPragma: k, insertPragma: L };
    } }), bo = $({ "src/utils/is-non-empty-array.js": function (l, h) {
        "use strict";
        U();
        function f(d) { return Array.isArray(d) && d.length > 0; }
        h.exports = f;
    } }), So = $({ "src/language-js/loc.js": function (l, h) {
        "use strict";
        U();
        var f = bo();
        function d(S) { var k, L; var N = S.range ? S.range[0] : S.start, O = (k = (L = S.declaration) === null || L === void 0 ? void 0 : L.decorators) !== null && k !== void 0 ? k : S.decorators; return f(O) ? Math.min(d(O[0]), N) : N; }
        function x(S) { return S.range ? S.range[1] : S.end; }
        function P(S, k) { var L = d(S); return Number.isInteger(L) && L === d(k); }
        function m(S, k) { var L = x(S); return Number.isInteger(L) && L === x(k); }
        function E(S, k) { return P(S, k) && m(S, k); }
        h.exports = { locStart: d, locEnd: x, hasSameLocStart: P, hasSameLoc: E };
    } }), wo = $({ "src/language-js/parse/utils/create-parser.js": function (l, h) {
        "use strict";
        U();
        var f = Nf().hasPragma, _b = So(), d = _b.locStart, x = _b.locEnd;
        function P(m) { return m = typeof m == "function" ? { parse: m } : m, Object.assign({ astFormat: "estree", hasPragma: f, locStart: d, locEnd: x }, m); }
        h.exports = P;
    } }), dr = $({ "src/common/parser-create-error.js": function (l, h) {
        "use strict";
        U();
        function f(d, x) { var P = new SyntaxError(d + " (" + x.start.line + ":" + x.start.column + ")"); return P.loc = x, P; }
        h.exports = f;
    } }), Io = $({ "src/language-js/parse/utils/create-babel-parse-error.js": function (l, h) {
        "use strict";
        U();
        var f = dr();
        function d(x) { var P = x.message, m = x.loc; return f(P.replace(/ \(.*\)/, ""), { start: { line: m ? m.line : 0, column: m ? m.column + 1 : 0 } }); }
        h.exports = d;
    } }), kf = $({ "src/language-js/utils/is-ts-keyword-type.js": function (l, h) {
        "use strict";
        U();
        function f(d) { var x = d.type; return x.startsWith("TS") && x.endsWith("Keyword"); }
        h.exports = f;
    } }), Df = $({ "src/language-js/utils/is-block-comment.js": function (l, h) {
        "use strict";
        U();
        var f = new Set(["Block", "CommentBlock", "MultiLine"]), d = function (x) { return f.has(x == null ? void 0 : x.type); };
        h.exports = d;
    } }), Ff = $({ "src/language-js/utils/is-type-cast-comment.js": function (l, h) {
        "use strict";
        U();
        var f = Df();
        function d(x) { return f(x) && x.value[0] === "*" && /@(?:type|satisfies)\b/.test(x.value); }
        h.exports = d;
    } }), Lf = $({ "src/utils/get-last.js": function (l, h) {
        "use strict";
        U();
        var f = function (d) { return d[d.length - 1]; };
        h.exports = f;
    } }), Of = $({ "src/language-js/parse/postprocess/visit-node.js": function (l, h) {
        "use strict";
        U();
        function f(d, x) { if (Array.isArray(d)) {
            for (var P = 0; P < d.length; P++)
                d[P] = f(d[P], x);
            return d;
        } if (d && typeof d == "object" && typeof d.type == "string") {
            var P = Object.keys(d);
            for (var m = 0; m < P.length; m++)
                d[P[m]] = f(d[P[m]], x);
            return x(d) || d;
        } return d; }
        h.exports = f;
    } }), Bf = $({ "src/language-js/parse/postprocess/throw-syntax-error.js": function (l, h) {
        "use strict";
        U();
        var f = dr();
        function d(x, P) { var _b = x.loc, m = _b.start, E = _b.end; throw f(P, { start: { line: m.line, column: m.column + 1 }, end: { line: E.line, column: E.column + 1 } }); }
        h.exports = d;
    } }), Mf = $({ "src/language-js/parse/postprocess/index.js": function (l, h) {
        "use strict";
        U();
        var _b = So(), f = _b.locStart, d = _b.locEnd, x = kf(), P = Ff(), m = Lf(), E = Of(), S = Bf();
        function k(A, _) { if (_.parser !== "typescript" && _.parser !== "flow" && _.parser !== "acorn" && _.parser !== "espree" && _.parser !== "meriyah") {
            var I_1 = new Set;
            A = E(A, function (F) { F.leadingComments && F.leadingComments.some(P) && I_1.add(f(F)); }), A = E(A, function (F) { if (F.type === "ParenthesizedExpression") {
                var z = F.expression;
                if (z.type === "TypeCastExpression")
                    return z.range = F.range, z;
                var M = f(F);
                if (!I_1.has(M))
                    return z.extra = Object.assign(Object.assign({}, z.extra), {}, { parenthesized: !0 }), z;
            } });
        } return A = E(A, function (I) { switch (I.type) {
            case "ChainExpression": return L(I.expression);
            case "LogicalExpression": {
                if (N(I))
                    return O(I);
                break;
            }
            case "VariableDeclaration": {
                var F = m(I.declarations);
                F && F.init && W(I, F);
                break;
            }
            case "TSParenthesizedType": return x(I.typeAnnotation) || I.typeAnnotation.type === "TSThisType" || (I.typeAnnotation.range = [f(I), d(I)]), I.typeAnnotation;
            case "TSTypeParameter":
                if (typeof I.name == "string") {
                    var F = f(I);
                    I.name = { type: "Identifier", name: I.name, range: [F, F + I.name.length] };
                }
                break;
            case "ObjectExpression":
                if (_.parser === "typescript") {
                    var F = I.properties.find(function (z) { return z.type === "Property" && z.value.type === "TSEmptyBodyFunctionExpression"; });
                    F && S(F.value, "Unexpected token.");
                }
                break;
            case "SequenceExpression": {
                var F = m(I.expressions);
                I.range = [f(I), Math.min(d(F), d(I))];
                break;
            }
            case "TopicReference":
                _.__isUsingHackPipeline = !0;
                break;
            case "ExportAllDeclaration": {
                var F = I.exported;
                if (_.parser === "meriyah" && F && F.type === "Identifier") {
                    var z = _.originalText.slice(f(F), d(F));
                    (z.startsWith('"') || z.startsWith("'")) && (I.exported = Object.assign(Object.assign({}, I.exported), {}, { type: "Literal", value: I.exported.name, raw: z }));
                }
                break;
            }
            case "PropertyDefinition":
                if (_.parser === "meriyah" && I.static && !I.computed && !I.key) {
                    var F = "static", z = f(I);
                    Object.assign(I, { static: !1, key: { type: "Identifier", name: F, range: [z, z + F.length] } });
                }
                break;
        } }), A; function W(I, F) { _.originalText[d(F)] !== ";" && (I.range = [f(I), d(F)]); } }
        function L(A) { switch (A.type) {
            case "CallExpression":
                A.type = "OptionalCallExpression", A.callee = L(A.callee);
                break;
            case "MemberExpression":
                A.type = "OptionalMemberExpression", A.object = L(A.object);
                break;
            case "TSNonNullExpression":
                A.expression = L(A.expression);
                break;
        } return A; }
        function N(A) { return A.type === "LogicalExpression" && A.right.type === "LogicalExpression" && A.operator === A.right.operator; }
        function O(A) { return N(A) ? O({ type: "LogicalExpression", operator: A.operator, left: O({ type: "LogicalExpression", operator: A.operator, left: A.left, right: A.right.left, range: [f(A.left), d(A.right.left)] }), right: A.right.right, range: [f(A), d(A)] }) : A; }
        h.exports = k;
    } }), No = $({ "node_modules/@babel/parser/lib/index.js": function (l) {
        "use strict";
        U(), Object.defineProperty(l, "__esModule", { value: !0 });
        var h = { sourceType: "script", sourceFilename: void 0, startColumn: 0, startLine: 1, allowAwaitOutsideFunction: !1, allowReturnOutsideFunction: !1, allowNewTargetOutsideFunction: !1, allowImportExportEverywhere: !1, allowSuperOutsideMethod: !1, allowUndeclaredExports: !1, plugins: [], strictMode: null, ranges: !1, tokens: !1, createParenthesizedExpressions: !1, errorRecovery: !1, attachComment: !0, annexB: !0 };
        function f(t) {
            var e_3, _b;
            if (t && t.annexB != null && t.annexB !== !1)
                throw new Error("The `annexB` option can only be set to `false`.");
            var r = {};
            try {
                for (var _g = __values(Object.keys(h)), _j = _g.next(); !_j.done; _j = _g.next()) {
                    var e = _j.value;
                    r[e] = t && t[e] != null ? t[e] : h[e];
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return r;
        }
        var d = /** @class */ (function () {
            function d(t, r) {
                this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!r;
            }
            return d;
        }()), x = { brace: new d("{"), j_oTag: new d("<tag"), j_cTag: new d("</tag"), j_expr: new d("<tag>...</tag>", !0) };
        x.template = new d("`", !0);
        var P = !0, m = !0, E = !0, S = !0, k = !0, L = !0, N = /** @class */ (function () {
            function N(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.rightAssociative = !!r.rightAssociative, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop != null ? r.binop : null, this.updateContext = null;
            }
            return N;
        }()), O = new Map;
        function A(t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; r.keyword = t; var e = b(t, r); return O.set(t, e), e; }
        function _(t, r) { return b(t, { beforeExpr: P, binop: r }); }
        var W = -1, I = [], F = [], z = [], M = [], V = [], ee = [];
        function b(t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; var e, s, i, a; return ++W, F.push(t), z.push((e = r.binop) != null ? e : -1), M.push((s = r.beforeExpr) != null ? s : !1), V.push((i = r.startsExpr) != null ? i : !1), ee.push((a = r.prefix) != null ? a : !1), I.push(new N(t, r)), W; }
        function B(t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; var e, s, i, a; return ++W, O.set(t, W), F.push(t), z.push((e = r.binop) != null ? e : -1), M.push((s = r.beforeExpr) != null ? s : !1), V.push((i = r.startsExpr) != null ? i : !1), ee.push((a = r.prefix) != null ? a : !1), I.push(new N("name", r)), W; }
        var te = { bracketL: b("[", { beforeExpr: P, startsExpr: m }), bracketHashL: b("#[", { beforeExpr: P, startsExpr: m }), bracketBarL: b("[|", { beforeExpr: P, startsExpr: m }), bracketR: b("]"), bracketBarR: b("|]"), braceL: b("{", { beforeExpr: P, startsExpr: m }), braceBarL: b("{|", { beforeExpr: P, startsExpr: m }), braceHashL: b("#{", { beforeExpr: P, startsExpr: m }), braceR: b("}"), braceBarR: b("|}"), parenL: b("(", { beforeExpr: P, startsExpr: m }), parenR: b(")"), comma: b(",", { beforeExpr: P }), semi: b(";", { beforeExpr: P }), colon: b(":", { beforeExpr: P }), doubleColon: b("::", { beforeExpr: P }), dot: b("."), question: b("?", { beforeExpr: P }), questionDot: b("?."), arrow: b("=>", { beforeExpr: P }), template: b("template"), ellipsis: b("...", { beforeExpr: P }), backQuote: b("`", { startsExpr: m }), dollarBraceL: b("${", { beforeExpr: P, startsExpr: m }), templateTail: b("...`", { startsExpr: m }), templateNonTail: b("...${", { beforeExpr: P, startsExpr: m }), at: b("@"), hash: b("#", { startsExpr: m }), interpreterDirective: b("#!..."), eq: b("=", { beforeExpr: P, isAssign: S }), assign: b("_=", { beforeExpr: P, isAssign: S }), slashAssign: b("_=", { beforeExpr: P, isAssign: S }), xorAssign: b("_=", { beforeExpr: P, isAssign: S }), moduloAssign: b("_=", { beforeExpr: P, isAssign: S }), incDec: b("++/--", { prefix: k, postfix: L, startsExpr: m }), bang: b("!", { beforeExpr: P, prefix: k, startsExpr: m }), tilde: b("~", { beforeExpr: P, prefix: k, startsExpr: m }), doubleCaret: b("^^", { startsExpr: m }), doubleAt: b("@@", { startsExpr: m }), pipeline: _("|>", 0), nullishCoalescing: _("??", 1), logicalOR: _("||", 1), logicalAND: _("&&", 2), bitwiseOR: _("|", 3), bitwiseXOR: _("^", 4), bitwiseAND: _("&", 5), equality: _("==/!=/===/!==", 6), lt: _("</>/<=/>=", 7), gt: _("</>/<=/>=", 7), relational: _("</>/<=/>=", 7), bitShift: _("<</>>/>>>", 8), bitShiftL: _("<</>>/>>>", 8), bitShiftR: _("<</>>/>>>", 8), plusMin: b("+/-", { beforeExpr: P, binop: 9, prefix: k, startsExpr: m }), modulo: b("%", { binop: 10, startsExpr: m }), star: b("*", { binop: 10 }), slash: _("/", 10), exponent: b("**", { beforeExpr: P, binop: 11, rightAssociative: !0 }), _in: A("in", { beforeExpr: P, binop: 7 }), _instanceof: A("instanceof", { beforeExpr: P, binop: 7 }), _break: A("break"), _case: A("case", { beforeExpr: P }), _catch: A("catch"), _continue: A("continue"), _debugger: A("debugger"), _default: A("default", { beforeExpr: P }), _else: A("else", { beforeExpr: P }), _finally: A("finally"), _function: A("function", { startsExpr: m }), _if: A("if"), _return: A("return", { beforeExpr: P }), _switch: A("switch"), _throw: A("throw", { beforeExpr: P, prefix: k, startsExpr: m }), _try: A("try"), _var: A("var"), _const: A("const"), _with: A("with"), _new: A("new", { beforeExpr: P, startsExpr: m }), _this: A("this", { startsExpr: m }), _super: A("super", { startsExpr: m }), _class: A("class", { startsExpr: m }), _extends: A("extends", { beforeExpr: P }), _export: A("export"), _import: A("import", { startsExpr: m }), _null: A("null", { startsExpr: m }), _true: A("true", { startsExpr: m }), _false: A("false", { startsExpr: m }), _typeof: A("typeof", { beforeExpr: P, prefix: k, startsExpr: m }), _void: A("void", { beforeExpr: P, prefix: k, startsExpr: m }), _delete: A("delete", { beforeExpr: P, prefix: k, startsExpr: m }), _do: A("do", { isLoop: E, beforeExpr: P }), _for: A("for", { isLoop: E }), _while: A("while", { isLoop: E }), _as: B("as", { startsExpr: m }), _assert: B("assert", { startsExpr: m }), _async: B("async", { startsExpr: m }), _await: B("await", { startsExpr: m }), _from: B("from", { startsExpr: m }), _get: B("get", { startsExpr: m }), _let: B("let", { startsExpr: m }), _meta: B("meta", { startsExpr: m }), _of: B("of", { startsExpr: m }), _sent: B("sent", { startsExpr: m }), _set: B("set", { startsExpr: m }), _static: B("static", { startsExpr: m }), _using: B("using", { startsExpr: m }), _yield: B("yield", { startsExpr: m }), _asserts: B("asserts", { startsExpr: m }), _checks: B("checks", { startsExpr: m }), _exports: B("exports", { startsExpr: m }), _global: B("global", { startsExpr: m }), _implements: B("implements", { startsExpr: m }), _intrinsic: B("intrinsic", { startsExpr: m }), _infer: B("infer", { startsExpr: m }), _is: B("is", { startsExpr: m }), _mixins: B("mixins", { startsExpr: m }), _proto: B("proto", { startsExpr: m }), _require: B("require", { startsExpr: m }), _satisfies: B("satisfies", { startsExpr: m }), _keyof: B("keyof", { startsExpr: m }), _readonly: B("readonly", { startsExpr: m }), _unique: B("unique", { startsExpr: m }), _abstract: B("abstract", { startsExpr: m }), _declare: B("declare", { startsExpr: m }), _enum: B("enum", { startsExpr: m }), _module: B("module", { startsExpr: m }), _namespace: B("namespace", { startsExpr: m }), _interface: B("interface", { startsExpr: m }), _type: B("type", { startsExpr: m }), _opaque: B("opaque", { startsExpr: m }), name: b("name", { startsExpr: m }), string: b("string", { startsExpr: m }), num: b("num", { startsExpr: m }), bigint: b("bigint", { startsExpr: m }), decimal: b("decimal", { startsExpr: m }), regexp: b("regexp", { startsExpr: m }), privateName: b("#name", { startsExpr: m }), eof: b("eof"), jsxName: b("jsxName"), jsxText: b("jsxText", { beforeExpr: !0 }), jsxTagStart: b("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: b("jsxTagEnd"), placeholder: b("%%", { startsExpr: !0 }) };
        function R(t) { return t >= 93 && t <= 130; }
        function ae(t) { return t <= 92; }
        function se(t) { return t >= 58 && t <= 130; }
        function _e(t) { return t >= 58 && t <= 134; }
        function H(t) { return M[t]; }
        function X(t) { return V[t]; }
        function ye(t) { return t >= 29 && t <= 33; }
        function ne(t) { return t >= 127 && t <= 129; }
        function oe(t) { return t >= 90 && t <= 92; }
        function Ee(t) { return t >= 58 && t <= 92; }
        function le(t) { return t >= 39 && t <= 59; }
        function ue(t) { return t === 34; }
        function ht(t) { return ee[t]; }
        function ut(t) { return t >= 119 && t <= 121; }
        function Wt(t) { return t >= 122 && t <= 128; }
        function Y(t) { return F[t]; }
        function Re(t) { return z[t]; }
        function Gt(t) { return t === 57; }
        function ct(t) { return t >= 24 && t <= 25; }
        function xe(t) { return I[t]; }
        I[8].updateContext = function (t) { t.pop(); }, I[5].updateContext = I[7].updateContext = I[23].updateContext = function (t) { t.push(x.brace); }, I[22].updateContext = function (t) { t[t.length - 1] === x.template ? t.pop() : t.push(x.template); }, I[140].updateContext = function (t) { t.push(x.j_expr, x.j_oTag); };
        function pt(t, r) { if (t == null)
            return {}; var e = {}, s = Object.keys(t), i, a; for (a = 0; a < s.length; a++)
            i = s[a], !(r.indexOf(i) >= 0) && (e[i] = t[i]); return e; }
        var Ce = /** @class */ (function () {
            function Ce(t, r, e) {
                this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = r, this.index = e;
            }
            return Ce;
        }()), ft = /** @class */ (function () {
            function ft(t, r) {
                this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = r;
            }
            return ft;
        }());
        function re(t, r) { var e = t.line, s = t.column, i = t.index; return new Ce(e, s + r, i + r); }
        var Jt = { SyntaxError: "BABEL_PARSER_SYNTAX_ERROR", SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" }, ko = function (t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.length - 1; return { get: function () { return t.reduce(function (e, s) { return e[s]; }, this); }, set: function (e) { t.reduce(function (s, i, a) { return a === r ? s[i] = e : s[i]; }, this); } }; }, Do = function (t, r, e) { return Object.keys(e).map(function (s) { return [s, e[s]]; }).filter(function (s) { var _b = __read(s, 2), i = _b[1]; return !!i; }).map(function (s) { var _b = __read(s, 2), i = _b[0], a = _b[1]; return [i, typeof a == "function" ? { value: a, enumerable: !1 } : typeof a.reflect == "string" ? Object.assign({}, a, ko(a.reflect.split("."))) : a]; }).reduce(function (s, i) { var _b = __read(i, 2), a = _b[0], n = _b[1]; return Object.defineProperty(s, a, Object.assign({ configurable: !0 }, n)); }, Object.assign(new t, r)); }, Fo = { ImportMetaOutsideModule: { message: "import.meta may appear only with 'sourceType: \"module\"'", code: Jt.SourceTypeModuleError }, ImportOutsideModule: { message: "'import' and 'export' may appear only with 'sourceType: \"module\"'", code: Jt.SourceTypeModuleError } }, mr = { ArrayPattern: "array destructuring pattern", AssignmentExpression: "assignment expression", AssignmentPattern: "assignment expression", ArrowFunctionExpression: "arrow function expression", ConditionalExpression: "conditional expression", CatchClause: "catch clause", ForOfStatement: "for-of statement", ForInStatement: "for-in statement", ForStatement: "for-loop", FormalParameters: "function parameter list", Identifier: "identifier", ImportSpecifier: "import specifier", ImportDefaultSpecifier: "import default specifier", ImportNamespaceSpecifier: "import namespace specifier", ObjectPattern: "object destructuring pattern", ParenthesizedExpression: "parenthesized expression", RestElement: "rest element", UpdateExpression: { true: "prefix operation", false: "postfix operation" }, VariableDeclarator: "variable declaration", YieldExpression: "yield expression" }, Xt = function (t) { var r = t.type, e = t.prefix; return r === "UpdateExpression" ? mr.UpdateExpression[String(e)] : mr[r]; }, Lo = { AccessorIsGenerator: function (t) { var r = t.kind; return "A ".concat(r, "ter cannot be a generator."); }, ArgumentsInClass: "'arguments' is only allowed in functions and class methods.", AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.", AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.", AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.", AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.", AwaitInUsingBinding: "'await' is not allowed to be used as a name in 'using' declarations.", AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.", AwaitNotInAsyncFunction: "'await' is only allowed within async functions.", BadGetterArity: "A 'get' accessor must not have any formal parameters.", BadSetterArity: "A 'set' accessor must have exactly one formal parameter.", BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.", ConstructorClassField: "Classes may not have a field named 'constructor'.", ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.", ConstructorIsAccessor: "Class constructor may not be an accessor.", ConstructorIsAsync: "Constructor can't be an async function.", ConstructorIsGenerator: "Constructor can't be a generator.", DeclarationMissingInitializer: function (t) { var r = t.kind; return "Missing initializer in ".concat(r, " declaration."); }, DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.", DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.", DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.", DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?", DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.", DecoratorSemicolon: "Decorators must not be followed by a semicolon.", DecoratorStaticBlock: "Decorators can't be used with a static block.", DeletePrivateField: "Deleting a private field is not allowed.", DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.", DuplicateConstructor: "Duplicate constructor in the same class.", DuplicateDefaultExport: "Only one default export allowed per module.", DuplicateExport: function (t) { var r = t.exportName; return "`".concat(r, "` has already been exported. Exported identifiers must be unique."); }, DuplicateProto: "Redefinition of __proto__ property.", DuplicateRegExpFlags: "Duplicate regular expression flag.", ElementAfterRest: "Rest element must be last element.", EscapedCharNotAnIdentifier: "Invalid Unicode escape.", ExportBindingIsString: function (t) {
                var r = t.localName, e = t.exportName;
                return "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '".concat(r, "' as '").concat(e, "' } from 'some-module'`?");
            }, ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.", ForInOfLoopInitializer: function (t) { var r = t.type; return "'".concat(r === "ForInStatement" ? "for-in" : "for-of", "' loop variable declaration may not have an initializer."); }, ForInUsing: "For-in loop may not start with 'using' declaration.", ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.", ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.", GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.", IllegalBreakContinue: function (t) { var r = t.type; return "Unsyntactic ".concat(r === "BreakStatement" ? "break" : "continue", "."); }, IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.", IllegalReturn: "'return' outside of function.", ImportBindingIsString: function (t) {
                var r = t.importName;
                return "A string literal cannot be used as an imported binding.\n- Did you mean `import { \"".concat(r, "\" as foo }`?");
            }, ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.", ImportCallArity: function (t) { var r = t.maxArgumentCount; return "`import()` requires exactly ".concat(r === 1 ? "one argument" : "one or two arguments", "."); }, ImportCallNotNewExpression: "Cannot use new with import(...).", ImportCallSpreadArgument: "`...` is not allowed in `import()`.", ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.", ImportReflectionHasAssertion: "`import module x` cannot have assertions.", ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.', IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.", InvalidBigIntLiteral: "Invalid BigIntLiteral.", InvalidCodePoint: "Code point out of bounds.", InvalidCoverInitializedName: "Invalid shorthand property initializer.", InvalidDecimal: "Invalid decimal.", InvalidDigit: function (t) { var r = t.radix; return "Expected number in radix ".concat(r, "."); }, InvalidEscapeSequence: "Bad character escape sequence.", InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.", InvalidEscapedReservedWord: function (t) { var r = t.reservedWord; return "Escape sequence in keyword ".concat(r, "."); }, InvalidIdentifier: function (t) { var r = t.identifierName; return "Invalid identifier ".concat(r, "."); }, InvalidLhs: function (t) { var r = t.ancestor; return "Invalid left-hand side in ".concat(Xt(r), "."); }, InvalidLhsBinding: function (t) { var r = t.ancestor; return "Binding invalid left-hand side in ".concat(Xt(r), "."); }, InvalidNumber: "Invalid number.", InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.", InvalidOrUnexpectedToken: function (t) { var r = t.unexpected; return "Unexpected character '".concat(r, "'."); }, InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.", InvalidPrivateFieldResolution: function (t) { var r = t.identifierName; return "Private name #".concat(r, " is not defined."); }, InvalidPropertyBindingPattern: "Binding member expression.", InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.", InvalidRestAssignmentPattern: "Invalid rest operator's argument.", LabelRedeclaration: function (t) { var r = t.labelName; return "Label '".concat(r, "' is already declared."); }, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.", LineTerminatorBeforeArrow: "No line break is allowed before '=>'.", MalformedRegExpFlags: "Invalid regular expression flag.", MissingClassName: "A class name is required.", MissingEqInAssignment: "Only '=' operator can be used for specifying default value.", MissingSemicolon: "Missing semicolon.", MissingPlugin: function (t) { var r = t.missingPlugin; return "This experimental syntax requires enabling the parser plugin: ".concat(r.map(function (e) { return JSON.stringify(e); }).join(", "), "."); }, MissingOneOfPlugins: function (t) { var r = t.missingPlugin; return "This experimental syntax requires enabling one of the following parser plugin(s): ".concat(r.map(function (e) { return JSON.stringify(e); }).join(", "), "."); }, MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.", MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.", ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.", ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.", ModuleAttributesWithDuplicateKeys: function (t) { var r = t.key; return "Duplicate key \"".concat(r, "\" is not allowed in module attributes."); }, ModuleExportNameHasLoneSurrogate: function (t) { var r = t.surrogateCharCode; return "An export name cannot include a lone surrogate, found '\\u".concat(r.toString(16), "'."); }, ModuleExportUndefined: function (t) { var r = t.localName; return "Export '".concat(r, "' is not defined."); }, MultipleDefaultsInSwitch: "Multiple default clauses.", NewlineAfterThrow: "Illegal newline after throw.", NoCatchOrFinally: "Missing catch or finally clause.", NumberIdentifier: "Identifier directly after number.", NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.", ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.", OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.", OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.", OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.", ParamDupe: "Argument name clash.", PatternHasAccessor: "Object pattern can't contain getter or setter.", PatternHasMethod: "Object pattern can't contain methods.", PrivateInExpectedIn: function (t) { var r = t.identifierName; return "Private names are only allowed in property accesses (`obj.#".concat(r, "`) or in `in` expressions (`#").concat(r, " in obj`)."); }, PrivateNameRedeclaration: function (t) { var r = t.identifierName; return "Duplicate private name #".concat(r, "."); }, RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", RecordNoProto: "'__proto__' is not allowed in Record expressions.", RestTrailingComma: "Unexpected trailing comma after rest element.", SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.", SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.", StaticPrototype: "Classes may not have static property named prototype.", SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?", SuperPrivateField: "Private fields can't be accessed on super.", TrailingDecorator: "Decorators must be attached to a class element.", TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.", UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.', UnexpectedDigitAfterHash: "Unexpected digit after hash token.", UnexpectedImportExport: "'import' and 'export' may only appear at the top level.", UnexpectedKeyword: function (t) { var r = t.keyword; return "Unexpected keyword '".concat(r, "'."); }, UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.", UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.", UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.", UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.", UnexpectedPrivateField: "Unexpected private name.", UnexpectedReservedWord: function (t) { var r = t.reservedWord; return "Unexpected reserved word '".concat(r, "'."); }, UnexpectedSuper: "'super' is only allowed in object methods and classes.", UnexpectedToken: function (t) { var r = t.expected, e = t.unexpected; return "Unexpected token".concat(e ? " '".concat(e, "'.") : "").concat(r ? ", expected \"".concat(r, "\"") : ""); }, UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.", UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.", UnsupportedBind: "Binding should be performed on object property.", UnsupportedDecoratorExport: "A decorated export must export a class declaration.", UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.", UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.", UnsupportedMetaProperty: function (t) { var r = t.target, e = t.onlyValidPropertyName; return "The only valid meta property for ".concat(r, " is ").concat(r, ".").concat(e, "."); }, UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.", UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.", UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).", UnterminatedComment: "Unterminated comment.", UnterminatedRegExp: "Unterminated regular expression.", UnterminatedString: "Unterminated string constant.", UnterminatedTemplate: "Unterminated template.", UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.", VarRedeclaration: function (t) { var r = t.identifierName; return "Identifier '".concat(r, "' has already been declared."); }, YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.", YieldInParameter: "Yield expression is not allowed in formal parameters.", ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0." }, Oo = { StrictDelete: "Deleting local variable in strict mode.", StrictEvalArguments: function (t) { var r = t.referenceName; return "Assigning to '".concat(r, "' in strict mode."); }, StrictEvalArgumentsBinding: function (t) { var r = t.bindingName; return "Binding '".concat(r, "' in strict mode."); }, StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.", StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.", StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.", StrictWith: "'with' in strict mode." }, Bo = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]), Mo = { PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.", PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.', PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.", PipeTopicUnconfiguredToken: function (t) { var r = t.token; return "Invalid topic token ".concat(r, ". In order to use ").concat(r, " as a topic reference, the pipelineOperator plugin must be configured with { \"proposal\": \"hack\", \"topicToken\": \"").concat(r, "\" }."); }, PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.", PipeUnparenthesizedBody: function (t) { var r = t.type; return "Hack-style pipe body cannot be an unparenthesized ".concat(Xt({ type: r }), "; please wrap it in parentheses."); }, PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.', PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.", PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.", PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.", PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.", PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.' }, _o = ["toMessage"], Ro = ["message"];
        function jo(t) { var r = t.toMessage, e = pt(t, _o); return function s(i) { var a = i.loc, n = i.details; return Do(SyntaxError, Object.assign({}, e, { loc: a }), { clone: function () { var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = o.loc || {}; return s({ loc: new Ce("line" in u ? u.line : this.loc.line, "column" in u ? u.column : this.loc.column, "index" in u ? u.index : this.loc.index), details: Object.assign({}, this.details, o.details) }); }, details: { value: n, enumerable: !1 }, message: { get: function () { return "".concat(r(this.details), " (").concat(this.loc.line, ":").concat(this.loc.column, ")"); }, set: function (o) { Object.defineProperty(this, "message", { value: o }); } }, pos: { reflect: "loc.index", enumerable: !0 }, missingPlugin: "missingPlugin" in n && { reflect: "details.missingPlugin", enumerable: !0 } }); }; }
        function ge(t, r) {
            var e_4, _b;
            if (Array.isArray(t))
                return function (s) { return ge(s, t[0]); };
            var e = {};
            var _loop_2 = function (s) {
                var i = t[s], a = typeof i == "string" ? { message: function () { return i; } } : typeof i == "function" ? { message: i } : i, n = a.message, o = pt(a, Ro), u = typeof n == "string" ? function () { return n; } : n;
                e[s] = jo(Object.assign({ code: Jt.SyntaxError, reasonCode: s, toMessage: u }, r ? { syntaxPlugin: r } : {}, o));
            };
            try {
                for (var _g = __values(Object.keys(t)), _j = _g.next(); !_j.done; _j = _g.next()) {
                    var s = _j.value;
                    _loop_2(s);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return e;
        }
        var p = Object.assign({}, ge(Fo), ge(Lo), ge(Oo), ge(templateObject_1 || (templateObject_1 = __makeTemplateObject(["pipelineOperator"], ["pipelineOperator"])))(Mo)), qo = Object.defineProperty, yr = function (t, r) { return qo(t, r, { enumerable: !1, value: t[r] }); };
        function Je(t) { return t.loc.start && yr(t.loc.start, "index"), t.loc.end && yr(t.loc.end, "index"), t; }
        var Uo = function (t) { return /** @class */ (function (_super_1) {
            __extends(class_1, _super_1);
            function class_1() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            class_1.prototype.parse = function () { var e = Je(_super_1.prototype.parse.call(this)); return this.options.tokens && (e.tokens = e.tokens.map(Je)), e; };
            class_1.prototype.parseRegExpLiteral = function (e) { var s = e.pattern, i = e.flags, a = null; try {
                a = new RegExp(s, i);
            }
            catch (_b) { } var n = this.estreeParseLiteral(a); return n.regex = { pattern: s, flags: i }, n; };
            class_1.prototype.parseBigIntLiteral = function (e) { var s; try {
                s = BigInt(e);
            }
            catch (_b) {
                s = null;
            } var i = this.estreeParseLiteral(s); return i.bigint = String(i.value || e), i; };
            class_1.prototype.parseDecimalLiteral = function (e) { var i = this.estreeParseLiteral(null); return i.decimal = String(i.value || e), i; };
            class_1.prototype.estreeParseLiteral = function (e) { return this.parseLiteral(e, "Literal"); };
            class_1.prototype.parseStringLiteral = function (e) { return this.estreeParseLiteral(e); };
            class_1.prototype.parseNumericLiteral = function (e) { return this.estreeParseLiteral(e); };
            class_1.prototype.parseNullLiteral = function () { return this.estreeParseLiteral(null); };
            class_1.prototype.parseBooleanLiteral = function (e) { return this.estreeParseLiteral(e); };
            class_1.prototype.directiveToStmt = function (e) { var s = e.value; delete e.value, s.type = "Literal", s.raw = s.extra.raw, s.value = s.extra.expressionValue; var i = e; return i.type = "ExpressionStatement", i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i; };
            class_1.prototype.initFunction = function (e, s) { _super_1.prototype.initFunction.call(this, e, s), e.expression = !1; };
            class_1.prototype.checkDeclaration = function (e) { e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : _super_1.prototype.checkDeclaration.call(this, e); };
            class_1.prototype.getObjectOrClassMethodParams = function (e) { return e.value.params; };
            class_1.prototype.isValidDirective = function (e) { var s; return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized); };
            class_1.prototype.parseBlockBody = function (e, s, i, a, n) {
                var _this_1 = this;
                _super_1.prototype.parseBlockBody.call(this, e, s, i, a, n);
                var o = e.directives.map(function (u) { return _this_1.directiveToStmt(u); });
                e.body = o.concat(e.body), delete e.directives;
            };
            class_1.prototype.pushClassMethod = function (e, s, i, a, n, o) { this.parseMethod(s, i, a, n, o, "ClassMethod", !0), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), e.body.push(s); };
            class_1.prototype.parsePrivateName = function () { var e = _super_1.prototype.parsePrivateName.call(this); return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e; };
            class_1.prototype.convertPrivateNameToPrivateIdentifier = function (e) { var s = _super_1.prototype.getPrivateNameSV.call(this, e); return e = e, delete e.id, e.name = s, e.type = "PrivateIdentifier", e; };
            class_1.prototype.isPrivateName = function (e) { return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : _super_1.prototype.isPrivateName.call(this, e); };
            class_1.prototype.getPrivateNameSV = function (e) { return this.getPluginOption("estree", "classFeatures") ? e.name : _super_1.prototype.getPrivateNameSV.call(this, e); };
            class_1.prototype.parseLiteral = function (e, s) { var i = _super_1.prototype.parseLiteral.call(this, e, s); return i.raw = i.extra.raw, delete i.extra, i; };
            class_1.prototype.parseFunctionBody = function (e, s) { var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; _super_1.prototype.parseFunctionBody.call(this, e, s, i), e.expression = e.body.type !== "BlockStatement"; };
            class_1.prototype.parseMethod = function (e, s, i, a, n, o) { var u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : !1, c = this.startNode(); return c.kind = e.kind, c = _super_1.prototype.parseMethod.call(this, c, s, i, a, n, o, u), c.type = "FunctionExpression", delete c.kind, e.value = c, o === "ClassPrivateMethod" && (e.computed = !1), this.finishNode(e, "MethodDefinition"); };
            class_1.prototype.parseClassProperty = function () { var e = _super_1.prototype.parseClassProperty.apply(this, __spreadArray([], __read(arguments), false)); return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"), e; };
            class_1.prototype.parseClassPrivateProperty = function () { var e = _super_1.prototype.parseClassPrivateProperty.apply(this, __spreadArray([], __read(arguments), false)); return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition", e.computed = !1), e; };
            class_1.prototype.parseObjectMethod = function (e, s, i, a, n) { var o = _super_1.prototype.parseObjectMethod.call(this, e, s, i, a, n); return o && (o.type = "Property", o.kind === "method" && (o.kind = "init"), o.shorthand = !1), o; };
            class_1.prototype.parseObjectProperty = function (e, s, i, a) { var n = _super_1.prototype.parseObjectProperty.call(this, e, s, i, a); return n && (n.kind = "init", n.type = "Property"), n; };
            class_1.prototype.isValidLVal = function (e, s, i) { return e === "Property" ? "value" : _super_1.prototype.isValidLVal.call(this, e, s, i); };
            class_1.prototype.isAssignable = function (e, s) { return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : _super_1.prototype.isAssignable.call(this, e, s); };
            class_1.prototype.toAssignable = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; if (e != null && this.isObjectProperty(e)) {
                var i = e.key, a = e.value;
                this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(a, s);
            }
            else
                _super_1.prototype.toAssignable.call(this, e, s); };
            class_1.prototype.toAssignableObjectExpressionProp = function (e, s, i) { e.kind === "get" || e.kind === "set" ? this.raise(p.PatternHasAccessor, { at: e.key }) : e.method ? this.raise(p.PatternHasMethod, { at: e.key }) : _super_1.prototype.toAssignableObjectExpressionProp.call(this, e, s, i); };
            class_1.prototype.finishCallExpression = function (e, s) { var i = _super_1.prototype.finishCallExpression.call(this, e, s); if (i.callee.type === "Import") {
                if (i.type = "ImportExpression", i.source = i.arguments[0], this.hasPlugin("importAssertions")) {
                    var a;
                    i.attributes = (a = i.arguments[1]) != null ? a : null;
                }
                delete i.arguments, delete i.callee;
            } return i; };
            class_1.prototype.toReferencedArguments = function (e) { e.type !== "ImportExpression" && _super_1.prototype.toReferencedArguments.call(this, e); };
            class_1.prototype.parseExport = function (e, s) { var i = this.state.lastTokStartLoc, a = _super_1.prototype.parseExport.call(this, e, s); switch (a.type) {
                case "ExportAllDeclaration":
                    a.exported = null;
                    break;
                case "ExportNamedDeclaration": a.specifiers.length === 1 && a.specifiers[0].type === "ExportNamespaceSpecifier" && (a.type = "ExportAllDeclaration", a.exported = a.specifiers[0].exported, delete a.specifiers);
                case "ExportDefaultDeclaration":
                    {
                        var n;
                        var o = a.declaration;
                        (o == null ? void 0 : o.type) === "ClassDeclaration" && ((n = o.decorators) == null ? void 0 : n.length) > 0 && o.start === a.start && this.resetStartLocation(a, i);
                    }
                    break;
            } return a; };
            class_1.prototype.parseSubscript = function (e, s, i, a) { var n = _super_1.prototype.parseSubscript.call(this, e, s, i, a); if (a.optionalChainMember) {
                if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), a.stop) {
                    var o = this.startNodeAtNode(n);
                    return o.expression = n, this.finishNode(o, "ChainExpression");
                }
            }
            else
                (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = !1); return n; };
            class_1.prototype.hasPropertyAsPrivateName = function (e) { return e.type === "ChainExpression" && (e = e.expression), _super_1.prototype.hasPropertyAsPrivateName.call(this, e); };
            class_1.prototype.isObjectProperty = function (e) { return e.type === "Property" && e.kind === "init" && !e.method; };
            class_1.prototype.isObjectMethod = function (e) { return e.method || e.kind === "get" || e.kind === "set"; };
            class_1.prototype.finishNodeAt = function (e, s, i) { return Je(_super_1.prototype.finishNodeAt.call(this, e, s, i)); };
            class_1.prototype.resetStartLocation = function (e, s) { _super_1.prototype.resetStartLocation.call(this, e, s), Je(e); };
            class_1.prototype.resetEndLocation = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc; _super_1.prototype.resetEndLocation.call(this, e, s), Je(e); };
            return class_1;
        }(t)); }, Yt = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", xr = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", $o = new RegExp("[" + Yt + "]"), Ho = new RegExp("[" + Yt + xr + "]");
        Yt = xr = null;
        var gr = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191], zo = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
        function Qt(t, r) { var e = 65536; for (var s = 0, i = r.length; s < i; s += 2) {
            if (e += r[s], e > t)
                return !1;
            if (e += r[s + 1], e >= t)
                return !0;
        } return !1; }
        function Pe(t) { return t < 65 ? t === 36 : t <= 90 ? !0 : t < 97 ? t === 95 : t <= 122 ? !0 : t <= 65535 ? t >= 170 && $o.test(String.fromCharCode(t)) : Qt(t, gr); }
        function je(t) { return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t <= 90 ? !0 : t < 97 ? t === 95 : t <= 122 ? !0 : t <= 65535 ? t >= 170 && Ho.test(String.fromCharCode(t)) : Qt(t, gr) || Qt(t, zo); }
        var Zt = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] }, Vo = new Set(Zt.keyword), Ko = new Set(Zt.strict), Wo = new Set(Zt.strictBind);
        function Pr(t, r) { return r && t === "await" || t === "enum"; }
        function Ar(t, r) { return Pr(t, r) || Ko.has(t); }
        function Tr(t) { return Wo.has(t); }
        function vr(t, r) { return Ar(t, r) || Tr(t); }
        function Go(t) { return Vo.has(t); }
        function Jo(t, r, e) { return t === 64 && r === 64 && Pe(e); }
        var Xo = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
        function Yo(t) { return Xo.has(t); }
        var qe = 0, Ue = 1, Ae = 2, es = 4, Er = 8, dt = 16, Cr = 32, Ne = 64, mt = 128, $e = 256, yt = Ue | Ae | mt | $e, me = 1, ke = 2, br = 4, De = 8, xt = 16, Sr = 64, gt = 128, ts = 256, ss = 512, rs = 1024, is = 2048, Xe = 4096, Pt = 8192, wr = me | ke | De | gt | Pt, He = me | 0 | De | Pt, Qo = me | 0 | De | 0, At = me | 0 | br | 0, Ir = me | 0 | xt | 0, Zo = 0 | ke | 0 | gt, el = 0 | ke | 0 | 0, Nr = me | ke | De | ts | Pt, kr = 0 | rs, be = 0 | Sr, tl = me | 0 | 0 | Sr, sl = Nr | ss, rl = 0 | rs, Dr = 0 | ke | 0 | Xe, il = is, Tt = 4, as = 2, ns = 1, os = as | ns, al = as | Tt, nl = ns | Tt, ol = as, ll = ns, ls = 0, hs = /** @class */ (function () {
            function hs(t) {
                this.var = new Set, this.lexical = new Set, this.functions = new Set, this.flags = t;
            }
            return hs;
        }()), us = /** @class */ (function () {
            function us(t, r) {
                this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = new Map, this.parser = t, this.inModule = r;
            }
            Object.defineProperty(us.prototype, "inTopLevel", {
                get: function () { return (this.currentScope().flags & Ue) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "inFunction", {
                get: function () { return (this.currentVarScopeFlags() & Ae) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "allowSuper", {
                get: function () { return (this.currentThisScopeFlags() & dt) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "allowDirectSuper", {
                get: function () { return (this.currentThisScopeFlags() & Cr) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "inClass", {
                get: function () { return (this.currentThisScopeFlags() & Ne) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "inClassAndNotInNonArrowFunction", {
                get: function () { var t = this.currentThisScopeFlags(); return (t & Ne) > 0 && (t & Ae) === 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "inStaticBlock", {
                get: function () { for (var t = this.scopeStack.length - 1;; t--) {
                    var r = this.scopeStack[t].flags;
                    if (r & mt)
                        return !0;
                    if (r & (yt | Ne))
                        return !1;
                } },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "inNonArrowFunction", {
                get: function () { return (this.currentThisScopeFlags() & Ae) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(us.prototype, "treatFunctionsAsVar", {
                get: function () { return this.treatFunctionsAsVarInScope(this.currentScope()); },
                enumerable: false,
                configurable: true
            });
            us.prototype.createScope = function (t) { return new hs(t); };
            us.prototype.enter = function (t) { this.scopeStack.push(this.createScope(t)); };
            us.prototype.exit = function () { return this.scopeStack.pop().flags; };
            us.prototype.treatFunctionsAsVarInScope = function (t) { return !!(t.flags & (Ae | mt) || !this.parser.inModule && t.flags & Ue); };
            us.prototype.declareName = function (t, r, e) { var s = this.currentScope(); if (r & De || r & xt)
                this.checkRedeclarationInScope(s, t, r, e), r & xt ? s.functions.add(t) : s.lexical.add(t), r & De && this.maybeExportDefined(s, t);
            else if (r & br)
                for (var i = this.scopeStack.length - 1; i >= 0 && (s = this.scopeStack[i], this.checkRedeclarationInScope(s, t, r, e), s.var.add(t), this.maybeExportDefined(s, t), !(s.flags & yt)); --i)
                    ; this.parser.inModule && s.flags & Ue && this.undefinedExports.delete(t); };
            us.prototype.maybeExportDefined = function (t, r) { this.parser.inModule && t.flags & Ue && this.undefinedExports.delete(r); };
            us.prototype.checkRedeclarationInScope = function (t, r, e, s) { this.isRedeclaredInScope(t, r, e) && this.parser.raise(p.VarRedeclaration, { at: s, identifierName: r }); };
            us.prototype.isRedeclaredInScope = function (t, r, e) { return e & me ? e & De ? t.lexical.has(r) || t.functions.has(r) || t.var.has(r) : e & xt ? t.lexical.has(r) || !this.treatFunctionsAsVarInScope(t) && t.var.has(r) : t.lexical.has(r) && !(t.flags & Er && t.lexical.values().next().value === r) || !this.treatFunctionsAsVarInScope(t) && t.functions.has(r) : !1; };
            us.prototype.checkLocalExport = function (t) { var r = t.name, e = this.scopeStack[0]; !e.lexical.has(r) && !e.var.has(r) && !e.functions.has(r) && this.undefinedExports.set(r, t.loc.start); };
            us.prototype.currentScope = function () { return this.scopeStack[this.scopeStack.length - 1]; };
            us.prototype.currentVarScopeFlags = function () { for (var t = this.scopeStack.length - 1;; t--) {
                var r = this.scopeStack[t].flags;
                if (r & yt)
                    return r;
            } };
            us.prototype.currentThisScopeFlags = function () { for (var t = this.scopeStack.length - 1;; t--) {
                var r = this.scopeStack[t].flags;
                if (r & (yt | Ne) && !(r & es))
                    return r;
            } };
            return us;
        }()), hl = /** @class */ (function (_super_1) {
            __extends(hl, _super_1);
            function hl() {
                var _this_1 = this;
                _this_1 = _super_1.apply(this, __spreadArray([], __read(arguments), false)) || this, _this_1.declareFunctions = new Set;
                return _this_1;
            }
            return hl;
        }(hs)), ul = /** @class */ (function (_super_1) {
            __extends(ul, _super_1);
            function ul() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            ul.prototype.createScope = function (t) { return new hl(t); };
            ul.prototype.declareName = function (t, r, e) { var s = this.currentScope(); if (r & is) {
                this.checkRedeclarationInScope(s, t, r, e), this.maybeExportDefined(s, t), s.declareFunctions.add(t);
                return;
            } _super_1.prototype.declareName.call(this, t, r, e); };
            ul.prototype.isRedeclaredInScope = function (t, r, e) { return _super_1.prototype.isRedeclaredInScope.call(this, t, r, e) ? !0 : e & is ? !t.declareFunctions.has(r) && (t.lexical.has(r) || t.functions.has(r)) : !1; };
            ul.prototype.checkLocalExport = function (t) { this.scopeStack[0].declareFunctions.has(t.name) || _super_1.prototype.checkLocalExport.call(this, t); };
            return ul;
        }(us)), cl = /** @class */ (function () {
            function cl() {
                this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
            }
            cl.prototype.hasPlugin = function (t) {
                var e_5, _b;
                if (typeof t == "string")
                    return this.plugins.has(t);
                {
                    var _g = __read(t, 2), r = _g[0], e = _g[1];
                    if (!this.hasPlugin(r))
                        return !1;
                    var s = this.plugins.get(r);
                    try {
                        for (var _j = __values(Object.keys(e)), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var i = _k.value;
                            if ((s == null ? void 0 : s[i]) !== e[i])
                                return !1;
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    return !0;
                }
            };
            cl.prototype.getPluginOption = function (t, r) { var e; return (e = this.plugins.get(t)) == null ? void 0 : e[r]; };
            return cl;
        }());
        function Fr(t, r) {
            var _b;
            t.trailingComments === void 0 ? t.trailingComments = r : (_b = t.trailingComments).unshift.apply(_b, __spreadArray([], __read(r), false));
        }
        function pl(t, r) {
            var _b;
            t.leadingComments === void 0 ? t.leadingComments = r : (_b = t.leadingComments).unshift.apply(_b, __spreadArray([], __read(r), false));
        }
        function Ye(t, r) {
            var _b;
            t.innerComments === void 0 ? t.innerComments = r : (_b = t.innerComments).unshift.apply(_b, __spreadArray([], __read(r), false));
        }
        function Qe(t, r, e) { var s = null, i = r.length; for (; s === null && i > 0;)
            s = r[--i]; s === null || s.start > e.start ? Ye(t, e.comments) : Fr(s, e.comments); }
        var fl = /** @class */ (function (_super_1) {
            __extends(fl, _super_1);
            function fl() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            fl.prototype.addComment = function (t) { this.filename && (t.loc.filename = this.filename), this.state.comments.push(t); };
            fl.prototype.processComment = function (t) { var r = this.state.commentStack, e = r.length; if (e === 0)
                return; var s = e - 1, i = r[s]; i.start === t.end && (i.leadingNode = t, s--); var a = t.start; for (; s >= 0; s--) {
                var n = r[s], o = n.end;
                if (o > a)
                    n.containingNode = t, this.finalizeComment(n), r.splice(s, 1);
                else {
                    o === a && (n.trailingNode = t);
                    break;
                }
            } };
            fl.prototype.finalizeComment = function (t) { var r = t.comments; if (t.leadingNode !== null || t.trailingNode !== null)
                t.leadingNode !== null && Fr(t.leadingNode, r), t.trailingNode !== null && pl(t.trailingNode, r);
            else {
                var e = t.containingNode, s = t.start;
                if (this.input.charCodeAt(s - 1) === 44)
                    switch (e.type) {
                        case "ObjectExpression":
                        case "ObjectPattern":
                        case "RecordExpression":
                            Qe(e, e.properties, t);
                            break;
                        case "CallExpression":
                        case "OptionalCallExpression":
                            Qe(e, e.arguments, t);
                            break;
                        case "FunctionDeclaration":
                        case "FunctionExpression":
                        case "ArrowFunctionExpression":
                        case "ObjectMethod":
                        case "ClassMethod":
                        case "ClassPrivateMethod":
                            Qe(e, e.params, t);
                            break;
                        case "ArrayExpression":
                        case "ArrayPattern":
                        case "TupleExpression":
                            Qe(e, e.elements, t);
                            break;
                        case "ExportNamedDeclaration":
                        case "ImportDeclaration":
                            Qe(e, e.specifiers, t);
                            break;
                        default: Ye(e, r);
                    }
                else
                    Ye(e, r);
            } };
            fl.prototype.finalizeRemainingComments = function () { var t = this.state.commentStack; for (var r = t.length - 1; r >= 0; r--)
                this.finalizeComment(t[r]); this.state.commentStack = []; };
            fl.prototype.resetPreviousNodeTrailingComments = function (t) { var r = this.state.commentStack, e = r.length; if (e === 0)
                return; var s = r[e - 1]; s.leadingNode === t && (s.leadingNode = null); };
            fl.prototype.takeSurroundingComments = function (t, r, e) { var s = this.state.commentStack, i = s.length; if (i === 0)
                return; var a = i - 1; for (; a >= 0; a--) {
                var n = s[a], o = n.end;
                if (n.start === e)
                    n.leadingNode = t;
                else if (o === r)
                    n.trailingNode = t;
                else if (o < r)
                    break;
            } };
            return fl;
        }(cl)), cs = /\r\n?|[\n\u2028\u2029]/, vt = new RegExp(cs.source, "g");
        function Ze(t) { switch (t) {
            case 10:
            case 13:
            case 8232:
            case 8233: return !0;
            default: return !1;
        } }
        var ps = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, dl = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y, Lr = new RegExp("(?=(" + dl.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
        function ml(t) { switch (t) {
            case 9:
            case 11:
            case 12:
            case 32:
            case 160:
            case 5760:
            case 8192:
            case 8193:
            case 8194:
            case 8195:
            case 8196:
            case 8197:
            case 8198:
            case 8199:
            case 8200:
            case 8201:
            case 8202:
            case 8239:
            case 8287:
            case 12288:
            case 65279: return !0;
            default: return !1;
        } }
        var Or = /** @class */ (function () {
            function Or() {
                this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = !1, this.inType = !1, this.noAnonFunctionType = !1, this.hasFlowComment = !1, this.isAmbientContext = !1, this.inAbstractClass = !1, this.inDisallowConditionalTypesContext = !1, this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }, this.soloAwait = !1, this.inFSharpPipelineDirectBody = !1, this.labels = [], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 137, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [x.brace], this.canStartJSXElement = !0, this.containsEsc = !1, this.firstInvalidTemplateEscapePos = null, this.strictErrors = new Map, this.tokensLength = 0;
            }
            Or.prototype.init = function (t) { var r = t.strictMode, e = t.sourceType, s = t.startLine, i = t.startColumn; this.strict = r === !1 ? !1 : r === !0 ? !0 : e === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new Ce(s, i, 0); };
            Or.prototype.curPosition = function () { return new Ce(this.curLine, this.pos - this.lineStart, this.pos); };
            Or.prototype.clone = function (t) { var r = new Or, e = Object.keys(this); for (var s = 0, i = e.length; s < i; s++) {
                var a = e[s], n = this[a];
                !t && Array.isArray(n) && (n = n.slice()), r[a] = n;
            } return r; };
            return Or;
        }()), yl = function (r) { return r >= 48 && r <= 57; }, Br = { decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]), hex: new Set([46, 88, 95, 120]) }, Et = { bin: function (t) { return t === 48 || t === 49; }, oct: function (t) { return t >= 48 && t <= 55; }, dec: function (t) { return t >= 48 && t <= 57; }, hex: function (t) { return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102; } };
        function Mr(t, r, e, s, i, a) {
            var n = e, o = s, u = i, c = "", y = null, g = e, T = r.length;
            for (;;) {
                if (e >= T) {
                    a.unterminated(n, o, u), c += r.slice(g, e);
                    break;
                }
                var C = r.charCodeAt(e);
                if (xl(t, C, r, e)) {
                    c += r.slice(g, e);
                    break;
                }
                if (C === 92) {
                    c += r.slice(g, e);
                    var j = gl(r, e, s, i, t === "template", a);
                    j.ch === null && !y ? y = { pos: e, lineStart: s, curLine: i } : c += j.ch, (e = j.pos, s = j.lineStart, i = j.curLine), g = e;
                }
                else
                    C === 8232 || C === 8233 ? (++e, ++i, s = e) : C === 10 || C === 13 ? t === "template" ? (c += r.slice(g, e) + "\n", ++e, C === 13 && r.charCodeAt(e) === 10 && ++e, ++i, g = s = e) : a.unterminated(n, o, u) : ++e;
            }
            return { pos: e, str: c, firstInvalidLoc: y, lineStart: s, curLine: i, containsInvalid: !!y };
        }
        function xl(t, r, e, s) { return t === "template" ? r === 96 || r === 36 && e.charCodeAt(s + 1) === 123 : r === (t === "double" ? 34 : 39); }
        function gl(t, r, e, s, i, a) {
            var _b, _g;
            var n = !i;
            r++;
            var o = function (c) { return ({ pos: r, ch: c, lineStart: e, curLine: s }); }, u = t.charCodeAt(r++);
            switch (u) {
                case 110: return o("\n");
                case 114: return o("\r");
                case 120: {
                    var c = void 0;
                    return _b = fs(t, r, e, s, 2, !1, n, a), c = _b.code, r = _b.pos, o(c === null ? null : String.fromCharCode(c));
                }
                case 117: {
                    var c = void 0;
                    return _g = Rr(t, r, e, s, n, a), c = _g.code, r = _g.pos, o(c === null ? null : String.fromCodePoint(c));
                }
                case 116: return o("	");
                case 98: return o("\b");
                case 118: return o("\v");
                case 102: return o("\f");
                case 13: t.charCodeAt(r) === 10 && ++r;
                case 10: e = r, ++s;
                case 8232:
                case 8233: return o("");
                case 56:
                case 57:
                    if (i)
                        return o(null);
                    a.strictNumericEscape(r - 1, e, s);
                default:
                    if (u >= 48 && u <= 55) {
                        var c = r - 1, g = t.slice(c, r + 2).match(/^[0-7]+/)[0], T = parseInt(g, 8);
                        T > 255 && (g = g.slice(0, -1), T = parseInt(g, 8)), r += g.length - 1;
                        var C = t.charCodeAt(r);
                        if (g !== "0" || C === 56 || C === 57) {
                            if (i)
                                return o(null);
                            a.strictNumericEscape(c, e, s);
                        }
                        return o(String.fromCharCode(T));
                    }
                    return o(String.fromCharCode(u));
            }
        }
        function fs(t, r, e, s, i, a, n, o) {
            var _b;
            var u = r, c;
            return _b = _r(t, r, e, s, 16, i, a, !1, o, !n), c = _b.n, r = _b.pos, c === null && (n ? o.invalidEscapeSequence(u, e, s) : r = u - 1), { code: c, pos: r };
        }
        function _r(t, r, e, s, i, a, n, o, u, c) { var y = r, g = i === 16 ? Br.hex : Br.decBinOct, T = i === 16 ? Et.hex : i === 10 ? Et.dec : i === 8 ? Et.oct : Et.bin, C = !1, j = 0; for (var q = 0, G = a == null ? 1 / 0 : a; q < G; ++q) {
            var J = t.charCodeAt(r), K = void 0;
            if (J === 95 && o !== "bail") {
                var Z = t.charCodeAt(r - 1), We = t.charCodeAt(r + 1);
                if (o) {
                    if (Number.isNaN(We) || !T(We) || g.has(Z) || g.has(We)) {
                        if (c)
                            return { n: null, pos: r };
                        u.unexpectedNumericSeparator(r, e, s);
                    }
                }
                else {
                    if (c)
                        return { n: null, pos: r };
                    u.numericSeparatorInEscapeSequence(r, e, s);
                }
                ++r;
                continue;
            }
            if (J >= 97 ? K = J - 97 + 10 : J >= 65 ? K = J - 65 + 10 : yl(J) ? K = J - 48 : K = 1 / 0, K >= i) {
                if (K <= 9 && c)
                    return { n: null, pos: r };
                if (K <= 9 && u.invalidDigit(r, e, s, i))
                    K = 0;
                else if (n)
                    K = 0, C = !0;
                else
                    break;
            }
            ++r, j = j * i + K;
        } return r === y || a != null && r - y !== a || C ? { n: null, pos: r } : { n: j, pos: r }; }
        function Rr(t, r, e, s, i, a) {
            var _b, _g;
            var n = t.charCodeAt(r), o;
            if (n === 123) {
                if (++r, (_b = fs(t, r, e, s, t.indexOf("}", r) - r, !0, i, a), o = _b.code, r = _b.pos), ++r, o !== null && o > 1114111)
                    if (i)
                        a.invalidCodePoint(r, e, s);
                    else
                        return { code: null, pos: r };
            }
            else
                (_g = fs(t, r, e, s, 4, !1, i, a), o = _g.code, r = _g.pos);
            return { code: o, pos: r };
        }
        var Pl = ["at"], Al = ["at"];
        function et(t, r, e) { return new Ce(e, t - r, t); }
        var Tl = new Set([103, 109, 115, 105, 121, 117, 100, 118]), Se = /** @class */ (function () {
            function Se(t) {
                this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new ft(t.startLoc, t.endLoc);
            }
            return Se;
        }()), vl = /** @class */ (function (_super_1) {
            __extends(vl, _super_1);
            function vl(t, r) {
                var _this_1 = this;
                _this_1 = _super_1.call(this) || this, _this_1.isLookahead = void 0, _this_1.tokens = [], _this_1.errorHandlers_readInt = { invalidDigit: function (e, s, i, a) { return _this_1.options.errorRecovery ? (_this_1.raise(p.InvalidDigit, { at: et(e, s, i), radix: a }), !0) : !1; }, numericSeparatorInEscapeSequence: _this_1.errorBuilder(p.NumericSeparatorInEscapeSequence), unexpectedNumericSeparator: _this_1.errorBuilder(p.UnexpectedNumericSeparator) }, _this_1.errorHandlers_readCodePoint = Object.assign({}, _this_1.errorHandlers_readInt, { invalidEscapeSequence: _this_1.errorBuilder(p.InvalidEscapeSequence), invalidCodePoint: _this_1.errorBuilder(p.InvalidCodePoint) }), _this_1.errorHandlers_readStringContents_string = Object.assign({}, _this_1.errorHandlers_readCodePoint, { strictNumericEscape: function (e, s, i) { _this_1.recordStrictModeErrors(p.StrictNumericEscape, { at: et(e, s, i) }); }, unterminated: function (e, s, i) { throw _this_1.raise(p.UnterminatedString, { at: et(e - 1, s, i) }); } }), _this_1.errorHandlers_readStringContents_template = Object.assign({}, _this_1.errorHandlers_readCodePoint, { strictNumericEscape: _this_1.errorBuilder(p.StrictNumericEscape), unterminated: function (e, s, i) { throw _this_1.raise(p.UnterminatedTemplate, { at: et(e, s, i) }); } }), _this_1.state = new Or, _this_1.state.init(t), _this_1.input = r, _this_1.length = r.length, _this_1.isLookahead = !1;
                return _this_1;
            }
            vl.prototype.pushToken = function (t) { this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength; };
            vl.prototype.next = function () { this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new Se(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken(); };
            vl.prototype.eat = function (t) { return this.match(t) ? (this.next(), !0) : !1; };
            vl.prototype.match = function (t) { return this.state.type === t; };
            vl.prototype.createLookaheadState = function (t) { return { pos: t.pos, value: null, type: t.type, start: t.start, end: t.end, context: [this.curContext()], inType: t.inType, startLoc: t.startLoc, lastTokEndLoc: t.lastTokEndLoc, curLine: t.curLine, lineStart: t.lineStart, curPosition: t.curPosition }; };
            vl.prototype.lookahead = function () { var t = this.state; this.state = this.createLookaheadState(t), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1; var r = this.state; return this.state = t, r; };
            vl.prototype.nextTokenStart = function () { return this.nextTokenStartSince(this.state.pos); };
            vl.prototype.nextTokenStartSince = function (t) { return ps.lastIndex = t, ps.test(this.input) ? ps.lastIndex : t; };
            vl.prototype.lookaheadCharCode = function () { return this.input.charCodeAt(this.nextTokenStart()); };
            vl.prototype.codePointAtPos = function (t) { var r = this.input.charCodeAt(t); if ((r & 64512) === 55296 && ++t < this.input.length) {
                var e = this.input.charCodeAt(t);
                (e & 64512) === 56320 && (r = 65536 + ((r & 1023) << 10) + (e & 1023));
            } return r; };
            vl.prototype.setStrict = function (t) {
                var _this_1 = this;
                this.state.strict = t, t && (this.state.strictErrors.forEach(function (r) { var _b = __read(r, 2), e = _b[0], s = _b[1]; return _this_1.raise(e, { at: s }); }), this.state.strictErrors.clear());
            };
            vl.prototype.curContext = function () { return this.state.context[this.state.context.length - 1]; };
            vl.prototype.nextToken = function () { if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
                this.finishToken(137);
                return;
            } this.getTokenFromCode(this.codePointAtPos(this.state.pos)); };
            vl.prototype.skipBlockComment = function (t) { var r; this.isLookahead || (r = this.state.curPosition()); var e = this.state.pos, s = this.input.indexOf(t, e + 2); if (s === -1)
                throw this.raise(p.UnterminatedComment, { at: this.state.curPosition() }); for (this.state.pos = s + t.length, vt.lastIndex = e + 2; vt.test(this.input) && vt.lastIndex <= s;)
                ++this.state.curLine, this.state.lineStart = vt.lastIndex; if (this.isLookahead)
                return; var i = { type: "CommentBlock", value: this.input.slice(e + 2, s), start: e, end: s + t.length, loc: new ft(r, this.state.curPosition()) }; return this.options.tokens && this.pushToken(i), i; };
            vl.prototype.skipLineComment = function (t) { var r = this.state.pos, e; this.isLookahead || (e = this.state.curPosition()); var s = this.input.charCodeAt(this.state.pos += t); if (this.state.pos < this.length)
                for (; !Ze(s) && ++this.state.pos < this.length;)
                    s = this.input.charCodeAt(this.state.pos); if (this.isLookahead)
                return; var i = this.state.pos, n = { type: "CommentLine", value: this.input.slice(r + t, i), start: r, end: i, loc: new ft(e, this.state.curPosition()) }; return this.options.tokens && this.pushToken(n), n; };
            vl.prototype.skipSpace = function () { var t = this.state.pos, r = []; e: for (; this.state.pos < this.length;) {
                var e = this.input.charCodeAt(this.state.pos);
                switch (e) {
                    case 32:
                    case 160:
                    case 9:
                        ++this.state.pos;
                        break;
                    case 13: this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
                    case 10:
                    case 8232:
                    case 8233:
                        ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                        break;
                    case 47:
                        switch (this.input.charCodeAt(this.state.pos + 1)) {
                            case 42: {
                                var s = this.skipBlockComment("*/");
                                s !== void 0 && (this.addComment(s), this.options.attachComment && r.push(s));
                                break;
                            }
                            case 47: {
                                var s = this.skipLineComment(2);
                                s !== void 0 && (this.addComment(s), this.options.attachComment && r.push(s));
                                break;
                            }
                            default: break e;
                        }
                        break;
                    default: if (ml(e))
                        ++this.state.pos;
                    else if (e === 45 && !this.inModule && this.options.annexB) {
                        var s = this.state.pos;
                        if (this.input.charCodeAt(s + 1) === 45 && this.input.charCodeAt(s + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                            var i = this.skipLineComment(3);
                            i !== void 0 && (this.addComment(i), this.options.attachComment && r.push(i));
                        }
                        else
                            break e;
                    }
                    else if (e === 60 && !this.inModule && this.options.annexB) {
                        var s = this.state.pos;
                        if (this.input.charCodeAt(s + 1) === 33 && this.input.charCodeAt(s + 2) === 45 && this.input.charCodeAt(s + 3) === 45) {
                            var i = this.skipLineComment(4);
                            i !== void 0 && (this.addComment(i), this.options.attachComment && r.push(i));
                        }
                        else
                            break e;
                    }
                    else
                        break e;
                }
            } if (r.length > 0) {
                var e = this.state.pos, s = { start: t, end: e, comments: r, leadingNode: null, trailingNode: null, containingNode: null };
                this.state.commentStack.push(s);
            } };
            vl.prototype.finishToken = function (t, r) { this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition(); var e = this.state.type; this.state.type = t, this.state.value = r, this.isLookahead || this.updateContext(e); };
            vl.prototype.replaceToken = function (t) { this.state.type = t, this.updateContext(); };
            vl.prototype.readToken_numberSign = function () { if (this.state.pos === 0 && this.readToken_interpreter())
                return; var t = this.state.pos + 1, r = this.codePointAtPos(t); if (r >= 48 && r <= 57)
                throw this.raise(p.UnexpectedDigitAfterHash, { at: this.state.curPosition() }); if (r === 123 || r === 91 && this.hasPlugin("recordAndTuple")) {
                if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
                    throw this.raise(r === 123 ? p.RecordExpressionHashIncorrectStartSyntaxType : p.TupleExpressionHashIncorrectStartSyntaxType, { at: this.state.curPosition() });
                this.state.pos += 2, r === 123 ? this.finishToken(7) : this.finishToken(1);
            }
            else
                Pe(r) ? (++this.state.pos, this.finishToken(136, this.readWord1(r))) : r === 92 ? (++this.state.pos, this.finishToken(136, this.readWord1())) : this.finishOp(27, 1); };
            vl.prototype.readToken_dot = function () { var t = this.input.charCodeAt(this.state.pos + 1); if (t >= 48 && t <= 57) {
                this.readNumber(!0);
                return;
            } t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16)); };
            vl.prototype.readToken_slash = function () { this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1); };
            vl.prototype.readToken_interpreter = function () { if (this.state.pos !== 0 || this.length < 2)
                return !1; var t = this.input.charCodeAt(this.state.pos + 1); if (t !== 33)
                return !1; var r = this.state.pos; for (this.state.pos += 1; !Ze(t) && ++this.state.pos < this.length;)
                t = this.input.charCodeAt(this.state.pos); var e = this.input.slice(r + 2, this.state.pos); return this.finishToken(28, e), !0; };
            vl.prototype.readToken_mult_modulo = function (t) { var r = t === 42 ? 55 : 54, e = 1, s = this.input.charCodeAt(this.state.pos + 1); t === 42 && s === 42 && (e++, s = this.input.charCodeAt(this.state.pos + 2), r = 57), s === 61 && !this.state.inType && (e++, r = t === 37 ? 33 : 30), this.finishOp(r, e); };
            vl.prototype.readToken_pipe_amp = function (t) { var r = this.input.charCodeAt(this.state.pos + 1); if (r === t) {
                this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
                return;
            } if (t === 124) {
                if (r === 62) {
                    this.finishOp(39, 2);
                    return;
                }
                if (this.hasPlugin("recordAndTuple") && r === 125) {
                    if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                        throw this.raise(p.RecordExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
                    this.state.pos += 2, this.finishToken(9);
                    return;
                }
                if (this.hasPlugin("recordAndTuple") && r === 93) {
                    if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                        throw this.raise(p.TupleExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
                    this.state.pos += 2, this.finishToken(4);
                    return;
                }
            } if (r === 61) {
                this.finishOp(30, 2);
                return;
            } this.finishOp(t === 124 ? 43 : 45, 1); };
            vl.prototype.readToken_caret = function () { var t = this.input.charCodeAt(this.state.pos + 1); t === 61 && !this.state.inType ? this.finishOp(32, 2) : t === 94 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "^^" }]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1); };
            vl.prototype.readToken_atSign = function () { this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "@@" }]) ? this.finishOp(38, 2) : this.finishOp(26, 1); };
            vl.prototype.readToken_plus_min = function (t) { var r = this.input.charCodeAt(this.state.pos + 1); if (r === t) {
                this.finishOp(34, 2);
                return;
            } r === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1); };
            vl.prototype.readToken_lt = function () { var t = this.state.pos, r = this.input.charCodeAt(t + 1); if (r === 60) {
                if (this.input.charCodeAt(t + 2) === 61) {
                    this.finishOp(30, 3);
                    return;
                }
                this.finishOp(51, 2);
                return;
            } if (r === 61) {
                this.finishOp(49, 2);
                return;
            } this.finishOp(47, 1); };
            vl.prototype.readToken_gt = function () { var t = this.state.pos, r = this.input.charCodeAt(t + 1); if (r === 62) {
                var e = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
                if (this.input.charCodeAt(t + e) === 61) {
                    this.finishOp(30, e + 1);
                    return;
                }
                this.finishOp(52, e);
                return;
            } if (r === 61) {
                this.finishOp(49, 2);
                return;
            } this.finishOp(48, 1); };
            vl.prototype.readToken_eq_excl = function (t) { var r = this.input.charCodeAt(this.state.pos + 1); if (r === 61) {
                this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
                return;
            } if (t === 61 && r === 62) {
                this.state.pos += 2, this.finishToken(19);
                return;
            } this.finishOp(t === 61 ? 29 : 35, 1); };
            vl.prototype.readToken_question = function () { var t = this.input.charCodeAt(this.state.pos + 1), r = this.input.charCodeAt(this.state.pos + 2); t === 63 ? r === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(r >= 48 && r <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17)); };
            vl.prototype.getTokenFromCode = function (t) { switch (t) {
                case 46:
                    this.readToken_dot();
                    return;
                case 40:
                    ++this.state.pos, this.finishToken(10);
                    return;
                case 41:
                    ++this.state.pos, this.finishToken(11);
                    return;
                case 59:
                    ++this.state.pos, this.finishToken(13);
                    return;
                case 44:
                    ++this.state.pos, this.finishToken(12);
                    return;
                case 91:
                    if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
                        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                            throw this.raise(p.TupleExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
                        this.state.pos += 2, this.finishToken(2);
                    }
                    else
                        ++this.state.pos, this.finishToken(0);
                    return;
                case 93:
                    ++this.state.pos, this.finishToken(3);
                    return;
                case 123:
                    if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
                        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                            throw this.raise(p.RecordExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
                        this.state.pos += 2, this.finishToken(6);
                    }
                    else
                        ++this.state.pos, this.finishToken(5);
                    return;
                case 125:
                    ++this.state.pos, this.finishToken(8);
                    return;
                case 58:
                    this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
                    return;
                case 63:
                    this.readToken_question();
                    return;
                case 96:
                    this.readTemplateToken();
                    return;
                case 48: {
                    var r = this.input.charCodeAt(this.state.pos + 1);
                    if (r === 120 || r === 88) {
                        this.readRadixNumber(16);
                        return;
                    }
                    if (r === 111 || r === 79) {
                        this.readRadixNumber(8);
                        return;
                    }
                    if (r === 98 || r === 66) {
                        this.readRadixNumber(2);
                        return;
                    }
                }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    this.readNumber(!1);
                    return;
                case 34:
                case 39:
                    this.readString(t);
                    return;
                case 47:
                    this.readToken_slash();
                    return;
                case 37:
                case 42:
                    this.readToken_mult_modulo(t);
                    return;
                case 124:
                case 38:
                    this.readToken_pipe_amp(t);
                    return;
                case 94:
                    this.readToken_caret();
                    return;
                case 43:
                case 45:
                    this.readToken_plus_min(t);
                    return;
                case 60:
                    this.readToken_lt();
                    return;
                case 62:
                    this.readToken_gt();
                    return;
                case 61:
                case 33:
                    this.readToken_eq_excl(t);
                    return;
                case 126:
                    this.finishOp(36, 1);
                    return;
                case 64:
                    this.readToken_atSign();
                    return;
                case 35:
                    this.readToken_numberSign();
                    return;
                case 92:
                    this.readWord();
                    return;
                default: if (Pe(t)) {
                    this.readWord(t);
                    return;
                }
            } throw this.raise(p.InvalidOrUnexpectedToken, { at: this.state.curPosition(), unexpected: String.fromCodePoint(t) }); };
            vl.prototype.finishOp = function (t, r) { var e = this.input.slice(this.state.pos, this.state.pos + r); this.state.pos += r, this.finishToken(t, e); };
            vl.prototype.readRegexp = function () { var t = this.state.startLoc, r = this.state.start + 1, e, s, i = this.state.pos; for (;; ++i) {
                if (i >= this.length)
                    throw this.raise(p.UnterminatedRegExp, { at: re(t, 1) });
                var u = this.input.charCodeAt(i);
                if (Ze(u))
                    throw this.raise(p.UnterminatedRegExp, { at: re(t, 1) });
                if (e)
                    e = !1;
                else {
                    if (u === 91)
                        s = !0;
                    else if (u === 93 && s)
                        s = !1;
                    else if (u === 47 && !s)
                        break;
                    e = u === 92;
                }
            } var a = this.input.slice(r, i); ++i; var n = "", o = function () { return re(t, i + 2 - r); }; for (; i < this.length;) {
                var u = this.codePointAtPos(i), c = String.fromCharCode(u);
                if (Tl.has(u))
                    u === 118 ? (this.expectPlugin("regexpUnicodeSets", o()), n.includes("u") && this.raise(p.IncompatibleRegExpUVFlags, { at: o() })) : u === 117 && n.includes("v") && this.raise(p.IncompatibleRegExpUVFlags, { at: o() }), n.includes(c) && this.raise(p.DuplicateRegExpFlags, { at: o() });
                else if (je(u) || u === 92)
                    this.raise(p.MalformedRegExpFlags, { at: o() });
                else
                    break;
                ++i, n += c;
            } this.state.pos = i, this.finishToken(135, { pattern: a, flags: n }); };
            vl.prototype.readInt = function (t, r) { var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, _b = _r(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, r, e, s, this.errorHandlers_readInt, !1), i = _b.n, a = _b.pos; return this.state.pos = a, i; };
            vl.prototype.readRadixNumber = function (t) { var r = this.state.curPosition(), e = !1; this.state.pos += 2; var s = this.readInt(t); s == null && this.raise(p.InvalidDigit, { at: re(r, 2), radix: t }); var i = this.input.charCodeAt(this.state.pos); if (i === 110)
                ++this.state.pos, e = !0;
            else if (i === 109)
                throw this.raise(p.InvalidDecimal, { at: r }); if (Pe(this.codePointAtPos(this.state.pos)))
                throw this.raise(p.NumberIdentifier, { at: this.state.curPosition() }); if (e) {
                var a = this.input.slice(r.index, this.state.pos).replace(/[_n]/g, "");
                this.finishToken(133, a);
                return;
            } this.finishToken(132, s); };
            vl.prototype.readNumber = function (t) { var r = this.state.pos, e = this.state.curPosition(), s = !1, i = !1, a = !1, n = !1, o = !1; !t && this.readInt(10) === null && this.raise(p.InvalidNumber, { at: this.state.curPosition() }); var u = this.state.pos - r >= 2 && this.input.charCodeAt(r) === 48; if (u) {
                var T = this.input.slice(r, this.state.pos);
                if (this.recordStrictModeErrors(p.StrictOctalLiteral, { at: e }), !this.state.strict) {
                    var C = T.indexOf("_");
                    C > 0 && this.raise(p.ZeroDigitNumericSeparator, { at: re(e, C) });
                }
                o = u && !/[89]/.test(T);
            } var c = this.input.charCodeAt(this.state.pos); if (c === 46 && !o && (++this.state.pos, this.readInt(10), s = !0, c = this.input.charCodeAt(this.state.pos)), (c === 69 || c === 101) && !o && (c = this.input.charCodeAt(++this.state.pos), (c === 43 || c === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(p.InvalidOrMissingExponent, { at: e }), s = !0, n = !0, c = this.input.charCodeAt(this.state.pos)), c === 110 && ((s || u) && this.raise(p.InvalidBigIntLiteral, { at: e }), ++this.state.pos, i = !0), c === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (n || u) && this.raise(p.InvalidDecimal, { at: e }), ++this.state.pos, a = !0), Pe(this.codePointAtPos(this.state.pos)))
                throw this.raise(p.NumberIdentifier, { at: this.state.curPosition() }); var y = this.input.slice(r, this.state.pos).replace(/[_mn]/g, ""); if (i) {
                this.finishToken(133, y);
                return;
            } if (a) {
                this.finishToken(134, y);
                return;
            } var g = o ? parseInt(y, 8) : parseFloat(y); this.finishToken(132, g); };
            vl.prototype.readCodePoint = function (t) { var _b = Rr(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint), r = _b.code, e = _b.pos; return this.state.pos = e, r; };
            vl.prototype.readString = function (t) { var _b = Mr(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string), r = _b.str, e = _b.pos, s = _b.curLine, i = _b.lineStart; this.state.pos = e + 1, this.state.lineStart = i, this.state.curLine = s, this.finishToken(131, r); };
            vl.prototype.readTemplateContinuation = function () { this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken(); };
            vl.prototype.readTemplateToken = function () { var t = this.input[this.state.pos], _b = Mr("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template), r = _b.str, e = _b.firstInvalidLoc, s = _b.pos, i = _b.curLine, a = _b.lineStart; this.state.pos = s + 1, this.state.lineStart = a, this.state.curLine = i, e && (this.state.firstInvalidTemplateEscapePos = new Ce(e.curLine, e.pos - e.lineStart, e.pos)), this.input.codePointAt(s) === 96 ? this.finishToken(24, e ? null : t + r + "`") : (this.state.pos++, this.finishToken(25, e ? null : t + r + "${")); };
            vl.prototype.recordStrictModeErrors = function (t, r) { var e = r.at, s = e.index; this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, { at: e }) : this.state.strictErrors.set(s, [t, e]); };
            vl.prototype.readWord1 = function (t) { this.state.containsEsc = !1; var r = "", e = this.state.pos, s = this.state.pos; for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length;) {
                var i = this.codePointAtPos(this.state.pos);
                if (je(i))
                    this.state.pos += i <= 65535 ? 1 : 2;
                else if (i === 92) {
                    this.state.containsEsc = !0, r += this.input.slice(s, this.state.pos);
                    var a = this.state.curPosition(), n = this.state.pos === e ? Pe : je;
                    if (this.input.charCodeAt(++this.state.pos) !== 117) {
                        this.raise(p.MissingUnicodeEscape, { at: this.state.curPosition() }), s = this.state.pos - 1;
                        continue;
                    }
                    ++this.state.pos;
                    var o = this.readCodePoint(!0);
                    o !== null && (n(o) || this.raise(p.EscapedCharNotAnIdentifier, { at: a }), r += String.fromCodePoint(o)), s = this.state.pos;
                }
                else
                    break;
            } return r + this.input.slice(s, this.state.pos); };
            vl.prototype.readWord = function (t) { var r = this.readWord1(t), e = O.get(r); e !== void 0 ? this.finishToken(e, Y(e)) : this.finishToken(130, r); };
            vl.prototype.checkKeywordEscapes = function () { var t = this.state.type; Ee(t) && this.state.containsEsc && this.raise(p.InvalidEscapedReservedWord, { at: this.state.startLoc, reservedWord: Y(t) }); };
            vl.prototype.raise = function (t, r) { var e = r.at, s = pt(r, Pl), i = e instanceof Ce ? e : e.loc.start, a = t({ loc: i, details: s }); if (!this.options.errorRecovery)
                throw a; return this.isLookahead || this.state.errors.push(a), a; };
            vl.prototype.raiseOverwrite = function (t, r) { var e = r.at, s = pt(r, Al), i = e instanceof Ce ? e : e.loc.start, a = i.index, n = this.state.errors; for (var o = n.length - 1; o >= 0; o--) {
                var u = n[o];
                if (u.loc.index === a)
                    return n[o] = t({ loc: i, details: s });
                if (u.loc.index < a)
                    break;
            } return this.raise(t, r); };
            vl.prototype.updateContext = function (t) { };
            vl.prototype.unexpected = function (t, r) { throw this.raise(p.UnexpectedToken, { expected: r ? Y(r) : null, at: t != null ? t : this.state.startLoc }); };
            vl.prototype.expectPlugin = function (t, r) { if (this.hasPlugin(t))
                return !0; throw this.raise(p.MissingPlugin, { at: r != null ? r : this.state.startLoc, missingPlugin: [t] }); };
            vl.prototype.expectOnePlugin = function (t) {
                var _this_1 = this;
                if (!t.some(function (r) { return _this_1.hasPlugin(r); }))
                    throw this.raise(p.MissingOneOfPlugins, { at: this.state.startLoc, missingPlugin: t });
            };
            vl.prototype.errorBuilder = function (t) {
                var _this_1 = this;
                return function (r, e, s) { _this_1.raise(t, { at: et(r, e, s) }); };
            };
            return vl;
        }(fl)), El = /** @class */ (function () {
            function El() {
                this.privateNames = new Set, this.loneAccessors = new Map, this.undefinedPrivateNames = new Map;
            }
            return El;
        }()), Cl = /** @class */ (function () {
            function Cl(t) {
                this.parser = void 0, this.stack = [], this.undefinedPrivateNames = new Map, this.parser = t;
            }
            Cl.prototype.current = function () { return this.stack[this.stack.length - 1]; };
            Cl.prototype.enter = function () { this.stack.push(new El); };
            Cl.prototype.exit = function () {
                var e_6, _b;
                var t = this.stack.pop(), r = this.current();
                try {
                    for (var _g = __values(Array.from(t.undefinedPrivateNames)), _j = _g.next(); !_j.done; _j = _g.next()) {
                        var _k = __read(_j.value, 2), e = _k[0], s = _k[1];
                        r ? r.undefinedPrivateNames.has(e) || r.undefinedPrivateNames.set(e, s) : this.parser.raise(p.InvalidPrivateFieldResolution, { at: s, identifierName: e });
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            };
            Cl.prototype.declarePrivateName = function (t, r, e) { var _b = this.current(), s = _b.privateNames, i = _b.loneAccessors, a = _b.undefinedPrivateNames, n = s.has(t); if (r & os) {
                var o = n && i.get(t);
                if (o) {
                    var u = o & Tt, c = r & Tt, y = o & os, g = r & os;
                    n = y === g || u !== c, n || i.delete(t);
                }
                else
                    n || i.set(t, r);
            } n && this.parser.raise(p.PrivateNameRedeclaration, { at: e, identifierName: t }), s.add(t), a.delete(t); };
            Cl.prototype.usePrivateName = function (t, r) {
                var e_7, _b;
                var e;
                try {
                    for (var _g = __values(this.stack), _j = _g.next(); !_j.done; _j = _g.next()) {
                        e = _j.value;
                        if (e.privateNames.has(t))
                            return;
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                e ? e.undefinedPrivateNames.set(t, r) : this.parser.raise(p.InvalidPrivateFieldResolution, { at: r, identifierName: t });
            };
            return Cl;
        }()), bl = 0, jr = 1, ds = 2, qr = 3, Ct = /** @class */ (function () {
            function Ct() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bl;
                this.type = void 0, this.type = t;
            }
            Ct.prototype.canBeArrowParameterDeclaration = function () { return this.type === ds || this.type === jr; };
            Ct.prototype.isCertainlyParameterDeclaration = function () { return this.type === qr; };
            return Ct;
        }()), Ur = /** @class */ (function (_super_1) {
            __extends(Ur, _super_1);
            function Ur(t) {
                var _this_1 = this;
                _this_1 = _super_1.call(this, t) || this, _this_1.declarationErrors = new Map;
                return _this_1;
            }
            Ur.prototype.recordDeclarationError = function (t, r) { var e = r.at, s = e.index; this.declarationErrors.set(s, [t, e]); };
            Ur.prototype.clearDeclarationError = function (t) { this.declarationErrors.delete(t); };
            Ur.prototype.iterateErrors = function (t) { this.declarationErrors.forEach(t); };
            return Ur;
        }(Ct)), Sl = /** @class */ (function () {
            function Sl(t) {
                this.parser = void 0, this.stack = [new Ct], this.parser = t;
            }
            Sl.prototype.enter = function (t) { this.stack.push(t); };
            Sl.prototype.exit = function () { this.stack.pop(); };
            Sl.prototype.recordParameterInitializerError = function (t, r) { var e = r.at, s = { at: e.loc.start }, i = this.stack, a = i.length - 1, n = i[a]; for (; !n.isCertainlyParameterDeclaration();) {
                if (n.canBeArrowParameterDeclaration())
                    n.recordDeclarationError(t, s);
                else
                    return;
                n = i[--a];
            } this.parser.raise(t, s); };
            Sl.prototype.recordArrowParameterBindingError = function (t, r) { var e = r.at, s = this.stack, i = s[s.length - 1], a = { at: e.loc.start }; if (i.isCertainlyParameterDeclaration())
                this.parser.raise(t, a);
            else if (i.canBeArrowParameterDeclaration())
                i.recordDeclarationError(t, a);
            else
                return; };
            Sl.prototype.recordAsyncArrowParametersError = function (t) { var r = t.at, e = this.stack, s = e.length - 1, i = e[s]; for (; i.canBeArrowParameterDeclaration();)
                i.type === ds && i.recordDeclarationError(p.AwaitBindingIdentifier, { at: r }), i = e[--s]; };
            Sl.prototype.validateAsPattern = function () {
                var _this_1 = this;
                var t = this.stack, r = t[t.length - 1];
                r.canBeArrowParameterDeclaration() && r.iterateErrors(function (e) { var _b = __read(e, 2), s = _b[0], i = _b[1]; _this_1.parser.raise(s, { at: i }); var a = t.length - 2, n = t[a]; for (; n.canBeArrowParameterDeclaration();)
                    n.clearDeclarationError(i.index), n = t[--a]; });
            };
            return Sl;
        }());
        function wl() { return new Ct(qr); }
        function Il() { return new Ur(jr); }
        function Nl() { return new Ur(ds); }
        function $r() { return new Ct; }
        var ze = 0, Hr = 1, bt = 2, zr = 4, Ve = 8, kl = /** @class */ (function () {
            function kl() {
                this.stacks = [];
            }
            kl.prototype.enter = function (t) { this.stacks.push(t); };
            kl.prototype.exit = function () { this.stacks.pop(); };
            kl.prototype.currentFlags = function () { return this.stacks[this.stacks.length - 1]; };
            Object.defineProperty(kl.prototype, "hasAwait", {
                get: function () { return (this.currentFlags() & bt) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(kl.prototype, "hasYield", {
                get: function () { return (this.currentFlags() & Hr) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(kl.prototype, "hasReturn", {
                get: function () { return (this.currentFlags() & zr) > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(kl.prototype, "hasIn", {
                get: function () { return (this.currentFlags() & Ve) > 0; },
                enumerable: false,
                configurable: true
            });
            return kl;
        }());
        function St(t, r) { return (t ? bt : 0) | (r ? Hr : 0); }
        var Dl = /** @class */ (function (_super_1) {
            __extends(Dl, _super_1);
            function Dl() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            Dl.prototype.addExtra = function (t, r, e) { var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0; if (!t)
                return; var i = t.extra = t.extra || {}; s ? i[r] = e : Object.defineProperty(i, r, { enumerable: s, value: e }); };
            Dl.prototype.isContextual = function (t) { return this.state.type === t && !this.state.containsEsc; };
            Dl.prototype.isUnparsedContextual = function (t, r) { var e = t + r.length; if (this.input.slice(t, e) === r) {
                var s = this.input.charCodeAt(e);
                return !(je(s) || (s & 64512) === 55296);
            } return !1; };
            Dl.prototype.isLookaheadContextual = function (t) { var r = this.nextTokenStart(); return this.isUnparsedContextual(r, t); };
            Dl.prototype.eatContextual = function (t) { return this.isContextual(t) ? (this.next(), !0) : !1; };
            Dl.prototype.expectContextual = function (t, r) { if (!this.eatContextual(t)) {
                if (r != null)
                    throw this.raise(r, { at: this.state.startLoc });
                this.unexpected(null, t);
            } };
            Dl.prototype.canInsertSemicolon = function () { return this.match(137) || this.match(8) || this.hasPrecedingLineBreak(); };
            Dl.prototype.hasPrecedingLineBreak = function () { return cs.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start)); };
            Dl.prototype.hasFollowingLineBreak = function () { return Lr.lastIndex = this.state.end, Lr.test(this.input); };
            Dl.prototype.isLineTerminator = function () { return this.eat(13) || this.canInsertSemicolon(); };
            Dl.prototype.semicolon = function () { ((arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0) ? this.isLineTerminator() : this.eat(13)) || this.raise(p.MissingSemicolon, { at: this.state.lastTokEndLoc }); };
            Dl.prototype.expect = function (t, r) { this.eat(t) || this.unexpected(r, t); };
            Dl.prototype.tryParse = function (t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.clone(), e = { node: null }; try {
                var s = t(function () { var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null; throw e.node = i, e; });
                if (this.state.errors.length > r.errors.length) {
                    var i = this.state;
                    return this.state = r, this.state.tokensLength = i.tokensLength, { node: s, error: i.errors[r.errors.length], thrown: !1, aborted: !1, failState: i };
                }
                return { node: s, error: null, thrown: !1, aborted: !1, failState: null };
            }
            catch (s) {
                var i = this.state;
                if (this.state = r, s instanceof SyntaxError)
                    return { node: null, error: s, thrown: !0, aborted: !1, failState: i };
                if (s === e)
                    return { node: e.node, error: null, thrown: !1, aborted: !0, failState: i };
                throw s;
            } };
            Dl.prototype.checkExpressionErrors = function (t, r) { if (!t)
                return !1; var e = t.shorthandAssignLoc, s = t.doubleProtoLoc, i = t.privateKeyLoc, a = t.optionalParametersLoc, n = !!e || !!s || !!a || !!i; if (!r)
                return n; e != null && this.raise(p.InvalidCoverInitializedName, { at: e }), s != null && this.raise(p.DuplicateProto, { at: s }), i != null && this.raise(p.UnexpectedPrivateField, { at: i }), a != null && this.unexpected(a); };
            Dl.prototype.isLiteralPropertyName = function () { return _e(this.state.type); };
            Dl.prototype.isPrivateName = function (t) { return t.type === "PrivateName"; };
            Dl.prototype.getPrivateNameSV = function (t) { return t.id.name; };
            Dl.prototype.hasPropertyAsPrivateName = function (t) { return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property); };
            Dl.prototype.isObjectProperty = function (t) { return t.type === "ObjectProperty"; };
            Dl.prototype.isObjectMethod = function (t) { return t.type === "ObjectMethod"; };
            Dl.prototype.initializeScopes = function () {
                var _this_1 = this;
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.sourceType === "module", r = this.state.labels;
                this.state.labels = [];
                var e = this.exportedIdentifiers;
                this.exportedIdentifiers = new Set;
                var s = this.inModule;
                this.inModule = t;
                var i = this.scope, a = this.getScopeHandler();
                this.scope = new a(this, t);
                var n = this.prodParam;
                this.prodParam = new kl;
                var o = this.classScope;
                this.classScope = new Cl(this);
                var u = this.expressionScope;
                return this.expressionScope = new Sl(this), function () { _this_1.state.labels = r, _this_1.exportedIdentifiers = e, _this_1.inModule = s, _this_1.scope = i, _this_1.prodParam = n, _this_1.classScope = o, _this_1.expressionScope = u; };
            };
            Dl.prototype.enterInitialScopes = function () { var t = ze; this.inModule && (t |= bt), this.scope.enter(Ue), this.prodParam.enter(t); };
            Dl.prototype.checkDestructuringPrivate = function (t) { var r = t.privateKeyLoc; r !== null && this.expectPlugin("destructuringPrivate", r); };
            return Dl;
        }(vl)), wt = /** @class */ (function () {
            function wt() {
                this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
            }
            return wt;
        }()), It = /** @class */ (function () {
            function It(t, r, e) {
                this.type = "", this.start = r, this.end = 0, this.loc = new ft(e), t != null && t.options.ranges && (this.range = [r, 0]), t != null && t.filename && (this.loc.filename = t.filename);
            }
            return It;
        }()), ms = It.prototype;
        ms.__clone = function () { var t = new It(void 0, this.start, this.loc.start), r = Object.keys(this); for (var e = 0, s = r.length; e < s; e++) {
            var i = r[e];
            i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (t[i] = this[i]);
        } return t; };
        function Fl(t) { return Te(t); }
        function Te(t) { var r = t.type, e = t.start, s = t.end, i = t.loc, a = t.range, n = t.extra, o = t.name, u = Object.create(ms); return u.type = r, u.start = e, u.end = s, u.loc = i, u.range = a, u.extra = n, u.name = o, r === "Placeholder" && (u.expectedNode = t.expectedNode), u; }
        function Ll(t) { var r = t.type, e = t.start, s = t.end, i = t.loc, a = t.range, n = t.extra; if (r === "Placeholder")
            return Fl(t); var o = Object.create(ms); return o.type = r, o.start = e, o.end = s, o.loc = i, o.range = a, t.raw !== void 0 ? o.raw = t.raw : o.extra = n, o.value = t.value, o; }
        var Ol = /** @class */ (function (_super_1) {
            __extends(Ol, _super_1);
            function Ol() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            Ol.prototype.startNode = function () { return new It(this, this.state.start, this.state.startLoc); };
            Ol.prototype.startNodeAt = function (t) { return new It(this, t.index, t); };
            Ol.prototype.startNodeAtNode = function (t) { return this.startNodeAt(t.loc.start); };
            Ol.prototype.finishNode = function (t, r) { return this.finishNodeAt(t, r, this.state.lastTokEndLoc); };
            Ol.prototype.finishNodeAt = function (t, r, e) { return t.type = r, t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index), this.options.attachComment && this.processComment(t), t; };
            Ol.prototype.resetStartLocation = function (t, r) { t.start = r.index, t.loc.start = r, this.options.ranges && (t.range[0] = r.index); };
            Ol.prototype.resetEndLocation = function (t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc; t.end = r.index, t.loc.end = r, this.options.ranges && (t.range[1] = r.index); };
            Ol.prototype.resetStartLocationFromNode = function (t, r) { this.resetStartLocation(t, r.loc.start); };
            return Ol;
        }(Dl)), Bl = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), D = ge(templateObject_2 || (templateObject_2 = __makeTemplateObject(["flow"], ["flow"])))({ AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.", AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.", AssignReservedType: function (t) { var r = t.reservedType; return "Cannot overwrite reserved type ".concat(r, "."); }, DeclareClassElement: "The `declare` modifier can only appear on class fields.", DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.", DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.", EnumBooleanMemberNotInitialized: function (t) { var r = t.memberName, e = t.enumName; return "Boolean enum members need to be initialized. Use either `".concat(r, " = true,` or `").concat(r, " = false,` in enum `").concat(e, "`."); }, EnumDuplicateMemberName: function (t) { var r = t.memberName, e = t.enumName; return "Enum member names need to be unique, but the name `".concat(r, "` has already been used before in enum `").concat(e, "`."); }, EnumInconsistentMemberValues: function (t) { var r = t.enumName; return "Enum `".concat(r, "` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers."); }, EnumInvalidExplicitType: function (t) { var r = t.invalidEnumType, e = t.enumName; return "Enum type `".concat(r, "` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `").concat(e, "`."); }, EnumInvalidExplicitTypeUnknownSupplied: function (t) { var r = t.enumName; return "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `".concat(r, "`."); }, EnumInvalidMemberInitializerPrimaryType: function (t) { var r = t.enumName, e = t.memberName, s = t.explicitType; return "Enum `".concat(r, "` has type `").concat(s, "`, so the initializer of `").concat(e, "` needs to be a ").concat(s, " literal."); }, EnumInvalidMemberInitializerSymbolType: function (t) { var r = t.enumName, e = t.memberName; return "Symbol enum members cannot be initialized. Use `".concat(e, ",` in enum `").concat(r, "`."); }, EnumInvalidMemberInitializerUnknownType: function (t) { var r = t.enumName, e = t.memberName; return "The enum member initializer for `".concat(e, "` needs to be a literal (either a boolean, number, or string) in enum `").concat(r, "`."); }, EnumInvalidMemberName: function (t) { var r = t.enumName, e = t.memberName, s = t.suggestion; return "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `".concat(e, "`, consider using `").concat(s, "`, in enum `").concat(r, "`."); }, EnumNumberMemberNotInitialized: function (t) { var r = t.enumName, e = t.memberName; return "Number enum members need to be initialized, e.g. `".concat(e, " = 1` in enum `").concat(r, "`."); }, EnumStringMemberInconsistentlyInitailized: function (t) { var r = t.enumName; return "String enum members need to consistently either all use initializers, or use no initializers, in enum `".concat(r, "`."); }, GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.", ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.", InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.", InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.", InexactVariance: "Explicit inexact syntax cannot have variance.", InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.", MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.", NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.", NestedFlowComment: "Cannot have a flow comment inside another flow comment.", PatternIsOptional: Object.assign({ message: "A binding pattern parameter cannot be optional in an implementation signature." }, { reasonCode: "OptionalBindingPattern" }), SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.", SpreadVariance: "Spread properties cannot have variance.", ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.", ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.", ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.", ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.", ThisParamNoDefault: "The `this` parameter may not have a default value.", TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.", UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.", UnexpectedReservedType: function (t) { var r = t.reservedType; return "Unexpected reserved type ".concat(r, "."); }, UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.", UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.", UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.", UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".', UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.", UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.", UnsupportedDeclareExportKind: function (t) { var r = t.unsupportedExportKind, e = t.suggestion; return "`declare export ".concat(r, "` is not supported. Use `").concat(e, "` instead."); }, UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.", UnterminatedFlowComment: "Unterminated flow-comment." });
        function Ml(t) { return t.type === "DeclareExportAllDeclaration" || t.type === "DeclareExportDeclaration" && (!t.declaration || t.declaration.type !== "TypeAlias" && t.declaration.type !== "InterfaceDeclaration"); }
        function ys(t) { return t.importKind === "type" || t.importKind === "typeof"; }
        function Vr(t) { return se(t) && t !== 97; }
        var _l = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" };
        function Rl(t, r) { var e = [], s = []; for (var i = 0; i < t.length; i++)
            (r(t[i], i, t) ? e : s).push(t[i]); return [e, s]; }
        var jl = /\*?\s*@((?:no)?flow)\b/, ql = function (t) { return /** @class */ (function (_super_1) {
            __extends(class_2, _super_1);
            function class_2() {
                var _this_1 = this;
                _this_1 = _super_1.apply(this, __spreadArray([], __read(arguments), false)) || this, _this_1.flowPragma = void 0;
                return _this_1;
            }
            class_2.prototype.getScopeHandler = function () { return ul; };
            class_2.prototype.shouldParseTypes = function () { return this.getPluginOption("flow", "all") || this.flowPragma === "flow"; };
            class_2.prototype.shouldParseEnums = function () { return !!this.getPluginOption("flow", "enums"); };
            class_2.prototype.finishToken = function (e, s) { e !== 131 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), _super_1.prototype.finishToken.call(this, e, s); };
            class_2.prototype.addComment = function (e) { if (this.flowPragma === void 0) {
                var s = jl.exec(e.value);
                if (s)
                    if (s[1] === "flow")
                        this.flowPragma = "flow";
                    else if (s[1] === "noflow")
                        this.flowPragma = "noflow";
                    else
                        throw new Error("Unexpected flow pragma");
            } _super_1.prototype.addComment.call(this, e); };
            class_2.prototype.flowParseTypeInitialiser = function (e) { var s = this.state.inType; this.state.inType = !0, this.expect(e || 14); var i = this.flowParseType(); return this.state.inType = s, i; };
            class_2.prototype.flowParsePredicate = function () { var e = this.startNode(), s = this.state.startLoc; return this.next(), this.expectContextual(108), this.state.lastTokStart > s.index + 1 && this.raise(D.UnexpectedSpaceBetweenModuloChecks, { at: s }), this.eat(10) ? (e.value = _super_1.prototype.parseExpression.call(this), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate"); };
            class_2.prototype.flowParseTypeAndPredicateInitialiser = function () { var e = this.state.inType; this.state.inType = !0, this.expect(14); var s = null, i = null; return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [s, i]; };
            class_2.prototype.flowParseDeclareClass = function (e) { return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass"); };
            class_2.prototype.flowParseDeclareFunction = function (e) {
                var _b;
                this.next();
                var s = e.id = this.parseIdentifier(), i = this.startNode(), a = this.startNode();
                this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
                var n = this.flowParseFunctionTypeParams();
                return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), (_b = __read(this.flowParseTypeAndPredicateInitialiser(), 2), i.returnType = _b[0], e.predicate = _b[1]), a.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(a, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, il, e.id.loc.start), this.finishNode(e, "DeclareFunction");
            };
            class_2.prototype.flowParseDeclare = function (e, s) { if (this.match(80))
                return this.flowParseDeclareClass(e); if (this.match(68))
                return this.flowParseDeclareFunction(e); if (this.match(74))
                return this.flowParseDeclareVariable(e); if (this.eatContextual(125))
                return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(D.NestedDeclareModule, { at: this.state.lastTokStartLoc }), this.flowParseDeclareModule(e)); if (this.isContextual(128))
                return this.flowParseDeclareTypeAlias(e); if (this.isContextual(129))
                return this.flowParseDeclareOpaqueType(e); if (this.isContextual(127))
                return this.flowParseDeclareInterface(e); if (this.match(82))
                return this.flowParseDeclareExportDeclaration(e, s); this.unexpected(); };
            class_2.prototype.flowParseDeclareVariable = function (e) { return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(e.id.name, At, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable"); };
            class_2.prototype.flowParseDeclareModule = function (e) {
                var _this_1 = this;
                this.scope.enter(qe), this.match(131) ? e.id = _super_1.prototype.parseExprAtom.call(this) : e.id = this.parseIdentifier();
                var s = e.body = this.startNode(), i = s.body = [];
                for (this.expect(5); !this.match(8);) {
                    var o = this.startNode();
                    this.match(83) ? (this.next(), !this.isContextual(128) && !this.match(87) && this.raise(D.InvalidNonTypeImportInDeclareModule, { at: this.state.lastTokStartLoc }), _super_1.prototype.parseImport.call(this, o)) : (this.expectContextual(123, D.UnsupportedStatementInDeclareModule), o = this.flowParseDeclare(o, !0)), i.push(o);
                }
                this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
                var a = null, n = !1;
                return i.forEach(function (o) { Ml(o) ? (a === "CommonJS" && _this_1.raise(D.AmbiguousDeclareModuleKind, { at: o }), a = "ES") : o.type === "DeclareModuleExports" && (n && _this_1.raise(D.DuplicateDeclareModuleExports, { at: o }), a === "ES" && _this_1.raise(D.AmbiguousDeclareModuleKind, { at: o }), a = "CommonJS", n = !0); }), e.kind = a || "CommonJS", this.finishNode(e, "DeclareModule");
            };
            class_2.prototype.flowParseDeclareExportDeclaration = function (e, s) { if (this.expect(82), this.eat(65))
                return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration"); if (this.match(75) || this.isLet() || (this.isContextual(128) || this.isContextual(127)) && !s) {
                var i = this.state.value;
                throw this.raise(D.UnsupportedDeclareExportKind, { at: this.state.startLoc, unsupportedExportKind: i, suggestion: _l[i] });
            } if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(129))
                return e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration"); if (this.match(55) || this.match(5) || this.isContextual(127) || this.isContextual(128) || this.isContextual(129))
                return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = !1, delete e.exportKind), e.type = "Declare" + e.type, e; this.unexpected(); };
            class_2.prototype.flowParseDeclareModuleExports = function (e) { return this.next(), this.expectContextual(109), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports"); };
            class_2.prototype.flowParseDeclareTypeAlias = function (e) { this.next(); var s = this.flowParseTypeAlias(e); return s.type = "DeclareTypeAlias", s; };
            class_2.prototype.flowParseDeclareOpaqueType = function (e) { this.next(); var s = this.flowParseOpaqueType(e, !0); return s.type = "DeclareOpaqueType", s; };
            class_2.prototype.flowParseDeclareInterface = function (e) { return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, "DeclareInterface"); };
            class_2.prototype.flowParseInterfaceish = function (e, s) { if (e.id = this.flowParseRestrictedIdentifier(!s, !0), this.scope.declareName(e.id.name, s ? Ir : He, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(81))
                do
                    e.extends.push(this.flowParseInterfaceExtends());
                while (!s && this.eat(12)); if (s) {
                if (this.eatContextual(115))
                    do
                        e.mixins.push(this.flowParseInterfaceExtends());
                    while (this.eat(12));
                if (this.eatContextual(111))
                    do
                        e.implements.push(this.flowParseInterfaceExtends());
                    while (this.eat(12));
            } e.body = this.flowParseObjectType({ allowStatic: s, allowExact: !1, allowSpread: !1, allowProto: s, allowInexact: !1 }); };
            class_2.prototype.flowParseInterfaceExtends = function () { var e = this.startNode(); return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends"); };
            class_2.prototype.flowParseInterface = function (e) { return this.flowParseInterfaceish(e, !1), this.finishNode(e, "InterfaceDeclaration"); };
            class_2.prototype.checkNotUnderscore = function (e) { e === "_" && this.raise(D.UnexpectedReservedUnderscore, { at: this.state.startLoc }); };
            class_2.prototype.checkReservedType = function (e, s, i) { Bl.has(e) && this.raise(i ? D.AssignReservedType : D.UnexpectedReservedType, { at: s, reservedType: e }); };
            class_2.prototype.flowParseRestrictedIdentifier = function (e, s) { return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(e); };
            class_2.prototype.flowParseTypeAlias = function (e) { return e.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(e.id.name, He, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias"); };
            class_2.prototype.flowParseOpaqueType = function (e, s) { return this.expectContextual(128), e.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(e.id.name, He, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType"); };
            class_2.prototype.flowParseTypeParameter = function () { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.state.startLoc, i = this.startNode(), a = this.flowParseVariance(), n = this.flowParseTypeAnnotatableIdentifier(); return i.name = n.name, i.variance = a, i.bound = n.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(D.MissingTypeParamDefault, { at: s }), this.finishNode(i, "TypeParameter"); };
            class_2.prototype.flowParseTypeParameterDeclaration = function () { var e = this.state.inType, s = this.startNode(); s.params = [], this.state.inType = !0, this.match(47) || this.match(140) ? this.next() : this.unexpected(); var i = !1; do {
                var a = this.flowParseTypeParameter(i);
                s.params.push(a), a.default && (i = !0), this.match(48) || this.expect(12);
            } while (!this.match(48)); return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration"); };
            class_2.prototype.flowParseTypeParameterInstantiation = function () { var e = this.startNode(), s = this.state.inType; e.params = [], this.state.inType = !0, this.expect(47); var i = this.state.noAnonFunctionType; for (this.state.noAnonFunctionType = !1; !this.match(48);)
                e.params.push(this.flowParseType()), this.match(48) || this.expect(12); return this.state.noAnonFunctionType = i, this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation"); };
            class_2.prototype.flowParseTypeParameterInstantiationCallOrNew = function () { var e = this.startNode(), s = this.state.inType; for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48);)
                e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12); return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation"); };
            class_2.prototype.flowParseInterfaceType = function () { var e = this.startNode(); if (this.expectContextual(127), e.extends = [], this.eat(81))
                do
                    e.extends.push(this.flowParseInterfaceExtends());
                while (this.eat(12)); return e.body = this.flowParseObjectType({ allowStatic: !1, allowExact: !1, allowSpread: !1, allowProto: !1, allowInexact: !1 }), this.finishNode(e, "InterfaceTypeAnnotation"); };
            class_2.prototype.flowParseObjectPropertyKey = function () { return this.match(132) || this.match(131) ? _super_1.prototype.parseExprAtom.call(this) : this.parseIdentifier(!0); };
            class_2.prototype.flowParseObjectTypeIndexer = function (e, s, i) { return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer"); };
            class_2.prototype.flowParseObjectTypeInternalSlot = function (e, s) { return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1, this.eat(17) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot"); };
            class_2.prototype.flowParseObjectTypeMethodish = function (e) { for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);)
                e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12); return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation"); };
            class_2.prototype.flowParseObjectTypeCallProperty = function (e, s) { var i = this.startNode(); return e.static = s, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty"); };
            class_2.prototype.flowParseObjectType = function (e) { var s = e.allowStatic, i = e.allowExact, a = e.allowSpread, n = e.allowProto, o = e.allowInexact, u = this.state.inType; this.state.inType = !0; var c = this.startNode(); c.callProperties = [], c.properties = [], c.indexers = [], c.internalSlots = []; var y, g, T = !1; for (i && this.match(6) ? (this.expect(6), y = 9, g = !0) : (this.expect(5), y = 8, g = !1), c.exact = g; !this.match(y);) {
                var j = !1, q = null, G = null, J = this.startNode();
                if (n && this.isContextual(116)) {
                    var Z = this.lookahead();
                    Z.type !== 14 && Z.type !== 17 && (this.next(), q = this.state.startLoc, s = !1);
                }
                if (s && this.isContextual(104)) {
                    var Z = this.lookahead();
                    Z.type !== 14 && Z.type !== 17 && (this.next(), j = !0);
                }
                var K = this.flowParseVariance();
                if (this.eat(0))
                    q != null && this.unexpected(q), this.eat(0) ? (K && this.unexpected(K.loc.start), c.internalSlots.push(this.flowParseObjectTypeInternalSlot(J, j))) : c.indexers.push(this.flowParseObjectTypeIndexer(J, j, K));
                else if (this.match(10) || this.match(47))
                    q != null && this.unexpected(q), K && this.unexpected(K.loc.start), c.callProperties.push(this.flowParseObjectTypeCallProperty(J, j));
                else {
                    var Z = "init";
                    if (this.isContextual(98) || this.isContextual(103)) {
                        var yh = this.lookahead();
                        _e(yh.type) && (Z = this.state.value, this.next());
                    }
                    var We = this.flowParseObjectTypeProperty(J, j, q, K, Z, a, o != null ? o : !g);
                    We === null ? (T = !0, G = this.state.lastTokStartLoc) : c.properties.push(We);
                }
                this.flowObjectTypeSemicolon(), G && !this.match(8) && !this.match(9) && this.raise(D.UnexpectedExplicitInexactInObject, { at: G });
            } this.expect(y), a && (c.inexact = T); var C = this.finishNode(c, "ObjectTypeAnnotation"); return this.state.inType = u, C; };
            class_2.prototype.flowParseObjectTypeProperty = function (e, s, i, a, n, o, u) { if (this.eat(21))
                return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? u || this.raise(D.InexactInsideExact, { at: this.state.lastTokStartLoc }) : this.raise(D.InexactInsideNonObject, { at: this.state.lastTokStartLoc }), a && this.raise(D.InexactVariance, { at: a }), null) : (o || this.raise(D.UnexpectedSpreadType, { at: this.state.lastTokStartLoc }), i != null && this.unexpected(i), a && this.raise(D.SpreadVariance, { at: a }), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty")); {
                e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
                var c = !1;
                return this.match(47) || this.match(10) ? (e.method = !0, i != null && this.unexpected(i), a && this.unexpected(a.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(D.ThisParamBannedInConstructor, { at: e.value.this })) : (n !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (c = !0), e.value = this.flowParseTypeInitialiser(), e.variance = a), e.optional = c, this.finishNode(e, "ObjectTypeProperty");
            } };
            class_2.prototype.flowCheckGetterSetterParams = function (e) { var s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0); e.value.this && this.raise(e.kind === "get" ? D.GetterMayNotHaveThisParam : D.SetterMayNotHaveThisParam, { at: e.value.this }), i !== s && this.raise(e.kind === "get" ? p.BadGetterArity : p.BadSetterArity, { at: e }), e.kind === "set" && e.value.rest && this.raise(p.BadSetterRestParameter, { at: e }); };
            class_2.prototype.flowObjectTypeSemicolon = function () { !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected(); };
            class_2.prototype.flowParseQualifiedTypeIdentifier = function (e, s) { var i; (i = e) != null || (e = this.state.startLoc); var a = s || this.flowParseRestrictedIdentifier(!0); for (; this.eat(16);) {
                var n = this.startNodeAt(e);
                n.qualification = a, n.id = this.flowParseRestrictedIdentifier(!0), a = this.finishNode(n, "QualifiedTypeIdentifier");
            } return a; };
            class_2.prototype.flowParseGenericType = function (e, s) { var i = this.startNodeAt(e); return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation"); };
            class_2.prototype.flowParseTypeofType = function () { var e = this.startNode(); return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation"); };
            class_2.prototype.flowParseTupleType = function () { var e = this.startNode(); for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3));)
                this.expect(12); return this.expect(3), this.finishNode(e, "TupleTypeAnnotation"); };
            class_2.prototype.flowParseFunctionTypeParam = function (e) { var s = null, i = !1, a = null, n = this.startNode(), o = this.lookahead(), u = this.state.type === 78; return o.type === 14 || o.type === 17 ? (u && !e && this.raise(D.ThisParamMustBeFirst, { at: n }), s = this.parseIdentifier(u), this.eat(17) && (i = !0, u && this.raise(D.ThisParamMayNotBeOptional, { at: n })), a = this.flowParseTypeInitialiser()) : a = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = a, this.finishNode(n, "FunctionTypeParam"); };
            class_2.prototype.reinterpretTypeAsFunctionTypeParam = function (e) { var s = this.startNodeAt(e.loc.start); return s.name = null, s.optional = !1, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam"); };
            class_2.prototype.flowParseFunctionTypeParams = function () { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = null, i = null; for (this.match(78) && (i = this.flowParseFunctionTypeParam(!0), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);)
                e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12); return this.eat(21) && (s = this.flowParseFunctionTypeParam(!1)), { params: e, rest: s, _this: i }; };
            class_2.prototype.flowIdentToTypeAnnotation = function (e, s, i) { switch (i.name) {
                case "any": return this.finishNode(s, "AnyTypeAnnotation");
                case "bool":
                case "boolean": return this.finishNode(s, "BooleanTypeAnnotation");
                case "mixed": return this.finishNode(s, "MixedTypeAnnotation");
                case "empty": return this.finishNode(s, "EmptyTypeAnnotation");
                case "number": return this.finishNode(s, "NumberTypeAnnotation");
                case "string": return this.finishNode(s, "StringTypeAnnotation");
                case "symbol": return this.finishNode(s, "SymbolTypeAnnotation");
                default: return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
            } };
            class_2.prototype.flowParsePrimaryType = function () { var e = this.state.startLoc, s = this.startNode(), i, a, n = !1, o = this.state.noAnonFunctionType; switch (this.state.type) {
                case 5: return this.flowParseObjectType({ allowStatic: !1, allowExact: !1, allowSpread: !0, allowProto: !1, allowInexact: !0 });
                case 6: return this.flowParseObjectType({ allowStatic: !1, allowExact: !0, allowSpread: !0, allowProto: !1, allowInexact: !1 });
                case 0: return this.state.noAnonFunctionType = !1, a = this.flowParseTupleType(), this.state.noAnonFunctionType = o, a;
                case 47: return s.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), this.finishNode(s, "FunctionTypeAnnotation");
                case 10:
                    if (this.next(), !this.match(11) && !this.match(21))
                        if (R(this.state.type) || this.match(78)) {
                            var u = this.lookahead().type;
                            n = u !== 17 && u !== 14;
                        }
                        else
                            n = !0;
                    if (n) {
                        if (this.state.noAnonFunctionType = !1, a = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
                            return this.expect(11), a;
                        this.eat(12);
                    }
                    return a ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(a)]) : i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
                case 131: return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
                case 85:
                case 86: return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
                case 53:
                    if (this.state.value === "-") {
                        if (this.next(), this.match(132))
                            return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
                        if (this.match(133))
                            return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
                        throw this.raise(D.UnexpectedSubtractionOperand, { at: this.state.startLoc });
                    }
                    this.unexpected();
                    return;
                case 132: return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
                case 133: return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
                case 88: return this.next(), this.finishNode(s, "VoidTypeAnnotation");
                case 84: return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
                case 78: return this.next(), this.finishNode(s, "ThisTypeAnnotation");
                case 55: return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
                case 87: return this.flowParseTypeofType();
                default: if (Ee(this.state.type)) {
                    var u = Y(this.state.type);
                    return this.next(), _super_1.prototype.createIdentifier.call(this, s, u);
                }
                else if (R(this.state.type))
                    return this.isContextual(127) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, this.parseIdentifier());
            } this.unexpected(); };
            class_2.prototype.flowParsePostfixType = function () { var e = this.state.startLoc, s = this.flowParsePrimaryType(), i = !1; for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon();) {
                var a = this.startNodeAt(e), n = this.eat(18);
                i = i || n, this.expect(0), !n && this.match(3) ? (a.elementType = s, this.next(), s = this.finishNode(a, "ArrayTypeAnnotation")) : (a.objectType = s, a.indexType = this.flowParseType(), this.expect(3), i ? (a.optional = n, s = this.finishNode(a, "OptionalIndexedAccessType")) : s = this.finishNode(a, "IndexedAccessType"));
            } return s; };
            class_2.prototype.flowParsePrefixType = function () { var e = this.startNode(); return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType(); };
            class_2.prototype.flowParseAnonFunctionWithoutParens = function () { var e = this.flowParsePrefixType(); if (!this.state.noAnonFunctionType && this.eat(19)) {
                var s = this.startNodeAt(e.loc.start);
                return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
            } return e; };
            class_2.prototype.flowParseIntersectionType = function () { var e = this.startNode(); this.eat(45); var s = this.flowParseAnonFunctionWithoutParens(); for (e.types = [s]; this.eat(45);)
                e.types.push(this.flowParseAnonFunctionWithoutParens()); return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation"); };
            class_2.prototype.flowParseUnionType = function () { var e = this.startNode(); this.eat(43); var s = this.flowParseIntersectionType(); for (e.types = [s]; this.eat(43);)
                e.types.push(this.flowParseIntersectionType()); return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation"); };
            class_2.prototype.flowParseType = function () { var e = this.state.inType; this.state.inType = !0; var s = this.flowParseUnionType(); return this.state.inType = e, s; };
            class_2.prototype.flowParseTypeOrImplicitInstantiation = function () { if (this.state.type === 130 && this.state.value === "_") {
                var e = this.state.startLoc, s = this.parseIdentifier();
                return this.flowParseGenericType(e, s);
            }
            else
                return this.flowParseType(); };
            class_2.prototype.flowParseTypeAnnotation = function () { var e = this.startNode(); return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation"); };
            class_2.prototype.flowParseTypeAnnotatableIdentifier = function (e) { var s = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier(); return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s; };
            class_2.prototype.typeCastToParameter = function (e) { return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression; };
            class_2.prototype.flowParseVariance = function () { var e = null; return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e; };
            class_2.prototype.parseFunctionBody = function (e, s) {
                var _this_1 = this;
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (s) {
                    this.forwardNoArrowParamsConversionAt(e, function () { return _super_1.prototype.parseFunctionBody.call(_this_1, e, !0, i); });
                    return;
                }
                _super_1.prototype.parseFunctionBody.call(this, e, !1, i);
            };
            class_2.prototype.parseFunctionBodyAndFinish = function (e, s) {
                var _b;
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (this.match(14)) {
                    var a = this.startNode();
                    _b = __read(this.flowParseTypeAndPredicateInitialiser(), 2), a.typeAnnotation = _b[0], e.predicate = _b[1], e.returnType = a.typeAnnotation ? this.finishNode(a, "TypeAnnotation") : null;
                }
                return _super_1.prototype.parseFunctionBodyAndFinish.call(this, e, s, i);
            };
            class_2.prototype.parseStatementLike = function (e) { if (this.state.strict && this.isContextual(127)) {
                var i = this.lookahead();
                if (se(i.type)) {
                    var a = this.startNode();
                    return this.next(), this.flowParseInterface(a);
                }
            }
            else if (this.shouldParseEnums() && this.isContextual(124)) {
                var i = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(i);
            } var s = _super_1.prototype.parseStatementLike.call(this, e); return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s; };
            class_2.prototype.parseExpressionStatement = function (e, s, i) { if (s.type === "Identifier") {
                if (s.name === "declare") {
                    if (this.match(80) || R(this.state.type) || this.match(68) || this.match(74) || this.match(82))
                        return this.flowParseDeclare(e);
                }
                else if (R(this.state.type)) {
                    if (s.name === "interface")
                        return this.flowParseInterface(e);
                    if (s.name === "type")
                        return this.flowParseTypeAlias(e);
                    if (s.name === "opaque")
                        return this.flowParseOpaqueType(e, !1);
                }
            } return _super_1.prototype.parseExpressionStatement.call(this, e, s, i); };
            class_2.prototype.shouldParseExportDeclaration = function () { var e = this.state.type; return ne(e) || this.shouldParseEnums() && e === 124 ? !this.state.containsEsc : _super_1.prototype.shouldParseExportDeclaration.call(this); };
            class_2.prototype.isExportDefaultSpecifier = function () { var e = this.state.type; return ne(e) || this.shouldParseEnums() && e === 124 ? this.state.containsEsc : _super_1.prototype.isExportDefaultSpecifier.call(this); };
            class_2.prototype.parseExportDefaultExpression = function () { if (this.shouldParseEnums() && this.isContextual(124)) {
                var e = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(e);
            } return _super_1.prototype.parseExportDefaultExpression.call(this); };
            class_2.prototype.parseConditional = function (e, s, i) {
                var _b, _g, _j;
                var _this_1 = this;
                if (!this.match(17))
                    return e;
                if (this.state.maybeInArrowParameters) {
                    var T = this.lookaheadCharCode();
                    if (T === 44 || T === 61 || T === 58 || T === 41)
                        return this.setOptionalParametersError(i), e;
                }
                this.expect(17);
                var a = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s), _k = this.tryParseConditionalConsequent(), u = _k.consequent, c = _k.failed, _m = __read(this.getArrowLikeExpressions(u), 2), y = _m[0], g = _m[1];
                if (c || g.length > 0) {
                    var T = __spreadArray([], __read(n), false);
                    if (g.length > 0) {
                        this.state = a, this.state.noArrowAt = T;
                        for (var C = 0; C < g.length; C++)
                            T.push(g[C].start);
                        (_b = this.tryParseConditionalConsequent(), u = _b.consequent, c = _b.failed), (_g = __read(this.getArrowLikeExpressions(u), 2), y = _g[0], g = _g[1]);
                    }
                    c && y.length > 1 && this.raise(D.AmbiguousConditionalArrow, { at: a.startLoc }), c && y.length === 1 && (this.state = a, T.push(y[0].start), this.state.noArrowAt = T, (_j = this.tryParseConditionalConsequent(), u = _j.consequent, c = _j.failed, _j));
                }
                return this.getArrowLikeExpressions(u, !0), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = u, o.alternate = this.forwardNoArrowParamsConversionAt(o, function () { return _this_1.parseMaybeAssign(void 0, void 0); }), this.finishNode(o, "ConditionalExpression");
            };
            class_2.prototype.tryParseConditionalConsequent = function () { this.state.noArrowParamsConversionAt.push(this.state.start); var e = this.parseMaybeAssignAllowIn(), s = !this.match(14); return this.state.noArrowParamsConversionAt.pop(), { consequent: e, failed: s }; };
            class_2.prototype.getArrowLikeExpressions = function (e, s) {
                var _this_1 = this;
                var i = [e], a = [];
                for (; i.length !== 0;) {
                    var n = i.pop();
                    n.type === "ArrowFunctionExpression" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : a.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
                }
                return s ? (a.forEach(function (n) { return _this_1.finishArrowValidation(n); }), [a, []]) : Rl(a, function (n) { return n.params.every(function (o) { return _this_1.isAssignable(o, !0); }); });
            };
            class_2.prototype.finishArrowValidation = function (e) { var s; this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, !1), this.scope.enter(Ae | es), _super_1.prototype.checkParams.call(this, e, !1, !0), this.scope.exit(); };
            class_2.prototype.forwardNoArrowParamsConversionAt = function (e, s) { var i; return this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i; };
            class_2.prototype.parseParenItem = function (e, s) { if (e = _super_1.prototype.parseParenItem.call(this, e, s), this.eat(17) && (e.optional = !0, this.resetEndLocation(e)), this.match(14)) {
                var i = this.startNodeAt(s);
                return i.expression = e, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
            } return e; };
            class_2.prototype.assertModuleNodeAllowed = function (e) { e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || _super_1.prototype.assertModuleNodeAllowed.call(this, e); };
            class_2.prototype.parseExport = function (e, s) { var i = _super_1.prototype.parseExport.call(this, e, s); return (i.type === "ExportNamedDeclaration" || i.type === "ExportAllDeclaration") && (i.exportKind = i.exportKind || "value"), i; };
            class_2.prototype.parseExportDeclaration = function (e) { if (this.isContextual(128)) {
                e.exportKind = "type";
                var s = this.startNode();
                return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), _super_1.prototype.parseExportFrom.call(this, e), null) : this.flowParseTypeAlias(s);
            }
            else if (this.isContextual(129)) {
                e.exportKind = "type";
                var s = this.startNode();
                return this.next(), this.flowParseOpaqueType(s, !1);
            }
            else if (this.isContextual(127)) {
                e.exportKind = "type";
                var s = this.startNode();
                return this.next(), this.flowParseInterface(s);
            }
            else if (this.shouldParseEnums() && this.isContextual(124)) {
                e.exportKind = "value";
                var s = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(s);
            }
            else
                return _super_1.prototype.parseExportDeclaration.call(this, e); };
            class_2.prototype.eatExportStar = function (e) { return _super_1.prototype.eatExportStar.call(this, e) ? !0 : this.isContextual(128) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), !0) : !1; };
            class_2.prototype.maybeParseExportNamespaceSpecifier = function (e) { var s = this.state.startLoc, i = _super_1.prototype.maybeParseExportNamespaceSpecifier.call(this, e); return i && e.exportKind === "type" && this.unexpected(s), i; };
            class_2.prototype.parseClassId = function (e, s, i) { _super_1.prototype.parseClassId.call(this, e, s, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()); };
            class_2.prototype.parseClassMember = function (e, s, i) { var a = this.state.startLoc; if (this.isContextual(123)) {
                if (_super_1.prototype.parseClassMemberFromModifier.call(this, e, s))
                    return;
                s.declare = !0;
            } _super_1.prototype.parseClassMember.call(this, e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(D.DeclareClassElement, { at: a }) : s.value && this.raise(D.DeclareClassFieldInitializer, { at: s.value })); };
            class_2.prototype.isIterator = function (e) { return e === "iterator" || e === "asyncIterator"; };
            class_2.prototype.readIterator = function () { var e = _super_1.prototype.readWord1.call(this), s = "@@" + e; (!this.isIterator(e) || !this.state.inType) && this.raise(p.InvalidIdentifier, { at: this.state.curPosition(), identifierName: s }), this.finishToken(130, s); };
            class_2.prototype.getTokenFromCode = function (e) { var s = this.input.charCodeAt(this.state.pos + 1); e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Jo(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : _super_1.prototype.getTokenFromCode.call(this, e); };
            class_2.prototype.isAssignable = function (e, s) { return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : _super_1.prototype.isAssignable.call(this, e, s); };
            class_2.prototype.toAssignable = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; !s && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), _super_1.prototype.toAssignable.call(this, e, s); };
            class_2.prototype.toAssignableList = function (e, s, i) { for (var a = 0; a < e.length; a++) {
                var n = e[a];
                (n == null ? void 0 : n.type) === "TypeCastExpression" && (e[a] = this.typeCastToParameter(n));
            } _super_1.prototype.toAssignableList.call(this, e, s, i); };
            class_2.prototype.toReferencedList = function (e, s) { for (var a = 0; a < e.length; a++) {
                var i;
                var n = e[a];
                n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(D.TypeCastInPattern, { at: n.typeAnnotation });
            } return e; };
            class_2.prototype.parseArrayLike = function (e, s, i, a) { var n = _super_1.prototype.parseArrayLike.call(this, e, s, i, a); return s && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n; };
            class_2.prototype.isValidLVal = function (e, s, i) { return e === "TypeCastExpression" || _super_1.prototype.isValidLVal.call(this, e, s, i); };
            class_2.prototype.parseClassProperty = function (e) { return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), _super_1.prototype.parseClassProperty.call(this, e); };
            class_2.prototype.parseClassPrivateProperty = function (e) { return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), _super_1.prototype.parseClassPrivateProperty.call(this, e); };
            class_2.prototype.isClassMethod = function () { return this.match(47) || _super_1.prototype.isClassMethod.call(this); };
            class_2.prototype.isClassProperty = function () { return this.match(14) || _super_1.prototype.isClassProperty.call(this); };
            class_2.prototype.isNonstaticConstructor = function (e) { return !this.match(14) && _super_1.prototype.isNonstaticConstructor.call(this, e); };
            class_2.prototype.pushClassMethod = function (e, s, i, a, n, o) { if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), _super_1.prototype.pushClassMethod.call(this, e, s, i, a, n, o), s.params && n) {
                var u = s.params;
                u.length > 0 && this.isThisParam(u[0]) && this.raise(D.ThisParamBannedInConstructor, { at: s });
            }
            else if (s.type === "MethodDefinition" && n && s.value.params) {
                var u = s.value.params;
                u.length > 0 && this.isThisParam(u[0]) && this.raise(D.ThisParamBannedInConstructor, { at: s });
            } };
            class_2.prototype.pushClassPrivateMethod = function (e, s, i, a) { s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), _super_1.prototype.pushClassPrivateMethod.call(this, e, s, i, a); };
            class_2.prototype.parseClassSuper = function (e) { if (_super_1.prototype.parseClassSuper.call(this, e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(111)) {
                this.next();
                var s = e.implements = [];
                do {
                    var i = this.startNode();
                    i.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
                } while (this.eat(12));
            } };
            class_2.prototype.checkGetterSetterParams = function (e) { _super_1.prototype.checkGetterSetterParams.call(this, e); var s = this.getObjectOrClassMethodParams(e); if (s.length > 0) {
                var i = s[0];
                this.isThisParam(i) && e.kind === "get" ? this.raise(D.GetterMayNotHaveThisParam, { at: i }) : this.isThisParam(i) && this.raise(D.SetterMayNotHaveThisParam, { at: i });
            } };
            class_2.prototype.parsePropertyNamePrefixOperator = function (e) { e.variance = this.flowParseVariance(); };
            class_2.prototype.parseObjPropValue = function (e, s, i, a, n, o, u) { e.variance && this.unexpected(e.variance.loc.start), delete e.variance; var c; this.match(47) && !o && (c = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected()); var y = _super_1.prototype.parseObjPropValue.call(this, e, s, i, a, n, o, u); return c && ((y.value || y).typeParameters = c), y; };
            class_2.prototype.parseAssignableListItemTypes = function (e) { return this.eat(17) && (e.type !== "Identifier" && this.raise(D.PatternIsOptional, { at: e }), this.isThisParam(e) && this.raise(D.ThisParamMayNotBeOptional, { at: e }), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(D.ThisParamAnnotationRequired, { at: e }), this.match(29) && this.isThisParam(e) && this.raise(D.ThisParamNoDefault, { at: e }), this.resetEndLocation(e), e; };
            class_2.prototype.parseMaybeDefault = function (e, s) { var i = _super_1.prototype.parseMaybeDefault.call(this, e, s); return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(D.TypeBeforeInitializer, { at: i.typeAnnotation }), i; };
            class_2.prototype.shouldParseDefaultImport = function (e) { return ys(e) ? Vr(this.state.type) : _super_1.prototype.shouldParseDefaultImport.call(this, e); };
            class_2.prototype.checkImportReflection = function (e) { _super_1.prototype.checkImportReflection.call(this, e), e.module && e.importKind !== "value" && this.raise(D.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start }); };
            class_2.prototype.parseImportSpecifierLocal = function (e, s, i) { s.local = ys(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i)); };
            class_2.prototype.maybeParseDefaultImportSpecifier = function (e) { e.importKind = "value"; var s = null; if (this.match(87) ? s = "typeof" : this.isContextual(128) && (s = "type"), s) {
                var i = this.lookahead(), a = i.type;
                s === "type" && a === 55 && this.unexpected(null, i.type), (Vr(a) || a === 5 || a === 55) && (this.next(), e.importKind = s);
            } return _super_1.prototype.maybeParseDefaultImportSpecifier.call(this, e); };
            class_2.prototype.parseImportSpecifier = function (e, s, i, a, n) { var o = e.imported, u = null; o.type === "Identifier" && (o.name === "type" ? u = "type" : o.name === "typeof" && (u = "typeof")); var c = !1; if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
                var g = this.parseIdentifier(!0);
                u !== null && !se(this.state.type) ? (e.imported = g, e.importKind = u, e.local = Te(g)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
            }
            else {
                if (u !== null && se(this.state.type))
                    e.imported = this.parseIdentifier(!0), e.importKind = u;
                else {
                    if (s)
                        throw this.raise(p.ImportBindingIsString, { at: e, importName: o.value });
                    e.imported = o, e.importKind = null;
                }
                this.eatContextual(93) ? e.local = this.parseIdentifier() : (c = !0, e.local = Te(e.imported));
            } var y = ys(e); return i && y && this.raise(D.ImportTypeShorthandOnlyInPureImport, { at: e }), (i || y) && this.checkReservedType(e.local.name, e.local.loc.start, !0), c && !i && !y && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier"); };
            class_2.prototype.parseBindingAtom = function () { switch (this.state.type) {
                case 78: return this.parseIdentifier(!0);
                default: return _super_1.prototype.parseBindingAtom.call(this);
            } };
            class_2.prototype.parseFunctionParams = function (e, s) { var i = e.kind; i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), _super_1.prototype.parseFunctionParams.call(this, e, s); };
            class_2.prototype.parseVarId = function (e, s) { _super_1.prototype.parseVarId.call(this, e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id)); };
            class_2.prototype.parseAsyncArrowFromCallExpression = function (e, s) { if (this.match(14)) {
                var i = this.state.noAnonFunctionType;
                this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
            } return _super_1.prototype.parseAsyncArrowFromCallExpression.call(this, e, s); };
            class_2.prototype.shouldParseAsyncArrow = function () { return this.match(14) || _super_1.prototype.shouldParseAsyncArrow.call(this); };
            class_2.prototype.parseMaybeAssign = function (e, s) {
                var _this_1 = this;
                var i;
                var a = null, n;
                if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                    if (a = this.state.clone(), n = this.tryParse(function () { return _super_1.prototype.parseMaybeAssign.call(_this_1, e, s); }, a), !n.error)
                        return n.node;
                    var c = this.state.context, y = c[c.length - 1];
                    (y === x.j_oTag || y === x.j_expr) && c.pop();
                }
                if ((i = n) != null && i.error || this.match(47)) {
                    var o, u;
                    a = a || this.state.clone();
                    var c_1, y = this.tryParse(function (T) { var C; c_1 = _this_1.flowParseTypeParameterDeclaration(); var j = _this_1.forwardNoArrowParamsConversionAt(c_1, function () { var G = _super_1.prototype.parseMaybeAssign.call(_this_1, e, s); return _this_1.resetStartLocationFromNode(G, c_1), G; }); (C = j.extra) != null && C.parenthesized && T(); var q = _this_1.maybeUnwrapTypeCastExpression(j); return q.type !== "ArrowFunctionExpression" && T(), q.typeParameters = c_1, _this_1.resetStartLocationFromNode(q, c_1), j; }, a), g = null;
                    if (y.node && this.maybeUnwrapTypeCastExpression(y.node).type === "ArrowFunctionExpression") {
                        if (!y.error && !y.aborted)
                            return y.node.async && this.raise(D.UnexpectedTypeParameterBeforeAsyncArrowFunction, { at: c_1 }), y.node;
                        g = y.node;
                    }
                    if ((o = n) != null && o.node)
                        return this.state = n.failState, n.node;
                    if (g)
                        return this.state = y.failState, g;
                    throw (u = n) != null && u.thrown ? n.error : y.thrown ? y.error : this.raise(D.UnexpectedTokenAfterTypeParameter, { at: c_1 });
                }
                return _super_1.prototype.parseMaybeAssign.call(this, e, s);
            };
            class_2.prototype.parseArrow = function (e) {
                var _this_1 = this;
                if (this.match(14)) {
                    var s = this.tryParse(function () {
                        var _b;
                        var i = _this_1.state.noAnonFunctionType;
                        _this_1.state.noAnonFunctionType = !0;
                        var a = _this_1.startNode();
                        return _b = __read(_this_1.flowParseTypeAndPredicateInitialiser(), 2), a.typeAnnotation = _b[0], e.predicate = _b[1], _this_1.state.noAnonFunctionType = i, _this_1.canInsertSemicolon() && _this_1.unexpected(), _this_1.match(19) || _this_1.unexpected(), a;
                    });
                    if (s.thrown)
                        return null;
                    s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
                }
                return _super_1.prototype.parseArrow.call(this, e);
            };
            class_2.prototype.shouldParseArrow = function (e) { return this.match(14) || _super_1.prototype.shouldParseArrow.call(this, e); };
            class_2.prototype.setArrowFunctionParameters = function (e, s) { this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? e.params = s : _super_1.prototype.setArrowFunctionParameters.call(this, e, s); };
            class_2.prototype.checkParams = function (e, s, i) { var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0; if (!(i && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)) {
                for (var n = 0; n < e.params.length; n++)
                    this.isThisParam(e.params[n]) && n > 0 && this.raise(D.ThisParamMustBeFirst, { at: e.params[n] });
                _super_1.prototype.checkParams.call(this, e, s, i, a);
            } };
            class_2.prototype.parseParenAndDistinguishExpression = function (e) { return _super_1.prototype.parseParenAndDistinguishExpression.call(this, e && this.state.noArrowAt.indexOf(this.state.start) === -1); };
            class_2.prototype.parseSubscripts = function (e, s, i) {
                var _this_1 = this;
                if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.indexOf(s.index) !== -1) {
                    this.next();
                    var a = this.startNodeAt(s);
                    a.callee = e, a.arguments = _super_1.prototype.parseCallExpressionArguments.call(this, 11, !1), e = this.finishNode(a, "CallExpression");
                }
                else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
                    var a = this.state.clone(), n = this.tryParse(function (u) { return _this_1.parseAsyncArrowWithTypeParameters(s) || u(); }, a);
                    if (!n.error && !n.aborted)
                        return n.node;
                    var o = this.tryParse(function () { return _super_1.prototype.parseSubscripts.call(_this_1, e, s, i); }, a);
                    if (o.node && !o.error)
                        return o.node;
                    if (n.node)
                        return this.state = n.failState, n.node;
                    if (o.node)
                        return this.state = o.failState, o.node;
                    throw n.error || o.error;
                }
                return _super_1.prototype.parseSubscripts.call(this, e, s, i);
            };
            class_2.prototype.parseSubscript = function (e, s, i, a) {
                var _this_1 = this;
                if (this.match(18) && this.isLookaheadToken_lt()) {
                    if (a.optionalChainMember = !0, i)
                        return a.stop = !0, e;
                    this.next();
                    var n = this.startNodeAt(s);
                    return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, !1), n.optional = !0, this.finishCallExpression(n, !0);
                }
                else if (!i && this.shouldParseTypes() && this.match(47)) {
                    var n_1 = this.startNodeAt(s);
                    n_1.callee = e;
                    var o = this.tryParse(function () { return (n_1.typeArguments = _this_1.flowParseTypeParameterInstantiationCallOrNew(), _this_1.expect(10), n_1.arguments = _super_1.prototype.parseCallExpressionArguments.call(_this_1, 11, !1), a.optionalChainMember && (n_1.optional = !1), _this_1.finishCallExpression(n_1, a.optionalChainMember)); });
                    if (o.node)
                        return o.error && (this.state = o.failState), o.node;
                }
                return _super_1.prototype.parseSubscript.call(this, e, s, i, a);
            };
            class_2.prototype.parseNewCallee = function (e) {
                var _this_1 = this;
                _super_1.prototype.parseNewCallee.call(this, e);
                var s = null;
                this.shouldParseTypes() && this.match(47) && (s = this.tryParse(function () { return _this_1.flowParseTypeParameterInstantiationCallOrNew(); }).node), e.typeArguments = s;
            };
            class_2.prototype.parseAsyncArrowWithTypeParameters = function (e) { var s = this.startNodeAt(e); if (this.parseFunctionParams(s, !1), !!this.parseArrow(s))
                return _super_1.prototype.parseArrowExpression.call(this, s, void 0, !0); };
            class_2.prototype.readToken_mult_modulo = function (e) { var s = this.input.charCodeAt(this.state.pos + 1); if (e === 42 && s === 47 && this.state.hasFlowComment) {
                this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
                return;
            } _super_1.prototype.readToken_mult_modulo.call(this, e); };
            class_2.prototype.readToken_pipe_amp = function (e) { var s = this.input.charCodeAt(this.state.pos + 1); if (e === 124 && s === 125) {
                this.finishOp(9, 2);
                return;
            } _super_1.prototype.readToken_pipe_amp.call(this, e); };
            class_2.prototype.parseTopLevel = function (e, s) { var i = _super_1.prototype.parseTopLevel.call(this, e, s); return this.state.hasFlowComment && this.raise(D.UnterminatedFlowComment, { at: this.state.curPosition() }), i; };
            class_2.prototype.skipBlockComment = function () { if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
                if (this.state.hasFlowComment)
                    throw this.raise(D.NestedFlowComment, { at: this.state.startLoc });
                this.hasFlowCommentCompletion();
                var e = this.skipFlowComment();
                e && (this.state.pos += e, this.state.hasFlowComment = !0);
                return;
            } return _super_1.prototype.skipBlockComment.call(this, this.state.hasFlowComment ? "*-/" : "*/"); };
            class_2.prototype.skipFlowComment = function () { var e = this.state.pos, s = 2; for (; [32, 9].includes(this.input.charCodeAt(e + s));)
                s++; var i = this.input.charCodeAt(s + e), a = this.input.charCodeAt(s + e + 1); return i === 58 && a === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : i === 58 && a !== 58 ? s : !1; };
            class_2.prototype.hasFlowCommentCompletion = function () { if (this.input.indexOf("*/", this.state.pos) === -1)
                throw this.raise(p.UnterminatedComment, { at: this.state.curPosition() }); };
            class_2.prototype.flowEnumErrorBooleanMemberNotInitialized = function (e, s) { var i = s.enumName, a = s.memberName; this.raise(D.EnumBooleanMemberNotInitialized, { at: e, memberName: a, enumName: i }); };
            class_2.prototype.flowEnumErrorInvalidMemberInitializer = function (e, s) { return this.raise(s.explicitType ? s.explicitType === "symbol" ? D.EnumInvalidMemberInitializerSymbolType : D.EnumInvalidMemberInitializerPrimaryType : D.EnumInvalidMemberInitializerUnknownType, Object.assign({ at: e }, s)); };
            class_2.prototype.flowEnumErrorNumberMemberNotInitialized = function (e, s) { var i = s.enumName, a = s.memberName; this.raise(D.EnumNumberMemberNotInitialized, { at: e, enumName: i, memberName: a }); };
            class_2.prototype.flowEnumErrorStringMemberInconsistentlyInitailized = function (e, s) { var i = s.enumName; this.raise(D.EnumStringMemberInconsistentlyInitailized, { at: e, enumName: i }); };
            class_2.prototype.flowEnumMemberInit = function () {
                var _this_1 = this;
                var e = this.state.startLoc, s = function () { return _this_1.match(12) || _this_1.match(8); };
                switch (this.state.type) {
                    case 132: {
                        var i = this.parseNumericLiteral(this.state.value);
                        return s() ? { type: "number", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
                    }
                    case 131: {
                        var i = this.parseStringLiteral(this.state.value);
                        return s() ? { type: "string", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
                    }
                    case 85:
                    case 86: {
                        var i = this.parseBooleanLiteral(this.match(85));
                        return s() ? { type: "boolean", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
                    }
                    default: return { type: "invalid", loc: e };
                }
            };
            class_2.prototype.flowEnumMemberRaw = function () { var e = this.state.startLoc, s = this.parseIdentifier(!0), i = this.eat(29) ? this.flowEnumMemberInit() : { type: "none", loc: e }; return { id: s, init: i }; };
            class_2.prototype.flowEnumCheckExplicitTypeMismatch = function (e, s, i) { var a = s.explicitType; a !== null && a !== i && this.flowEnumErrorInvalidMemberInitializer(e, s); };
            class_2.prototype.flowEnumMembers = function (e) { var s = e.enumName, i = e.explicitType, a = new Set, n = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] }, o = !1; for (; !this.match(8);) {
                if (this.eat(21)) {
                    o = !0;
                    break;
                }
                var u = this.startNode(), _b = this.flowEnumMemberRaw(), c = _b.id, y = _b.init, g = c.name;
                if (g === "")
                    continue;
                /^[a-z]/.test(g) && this.raise(D.EnumInvalidMemberName, { at: c, memberName: g, suggestion: g[0].toUpperCase() + g.slice(1), enumName: s }), a.has(g) && this.raise(D.EnumDuplicateMemberName, { at: c, memberName: g, enumName: s }), a.add(g);
                var T = { enumName: s, explicitType: i, memberName: g };
                switch (u.id = c, y.type) {
                    case "boolean": {
                        this.flowEnumCheckExplicitTypeMismatch(y.loc, T, "boolean"), u.init = y.value, n.booleanMembers.push(this.finishNode(u, "EnumBooleanMember"));
                        break;
                    }
                    case "number": {
                        this.flowEnumCheckExplicitTypeMismatch(y.loc, T, "number"), u.init = y.value, n.numberMembers.push(this.finishNode(u, "EnumNumberMember"));
                        break;
                    }
                    case "string": {
                        this.flowEnumCheckExplicitTypeMismatch(y.loc, T, "string"), u.init = y.value, n.stringMembers.push(this.finishNode(u, "EnumStringMember"));
                        break;
                    }
                    case "invalid": throw this.flowEnumErrorInvalidMemberInitializer(y.loc, T);
                    case "none": switch (i) {
                        case "boolean":
                            this.flowEnumErrorBooleanMemberNotInitialized(y.loc, T);
                            break;
                        case "number":
                            this.flowEnumErrorNumberMemberNotInitialized(y.loc, T);
                            break;
                        default: n.defaultedMembers.push(this.finishNode(u, "EnumDefaultedMember"));
                    }
                }
                this.match(8) || this.expect(12);
            } return { members: n, hasUnknownMembers: o }; };
            class_2.prototype.flowEnumStringMembers = function (e, s, i) {
                var e_8, _b, e_9, _g;
                var a = i.enumName;
                if (e.length === 0)
                    return s;
                if (s.length === 0)
                    return e;
                if (s.length > e.length) {
                    try {
                        for (var e_10 = __values(e), e_10_1 = e_10.next(); !e_10_1.done; e_10_1 = e_10.next()) {
                            var n = e_10_1.value;
                            this.flowEnumErrorStringMemberInconsistentlyInitailized(n, { enumName: a });
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (e_10_1 && !e_10_1.done && (_b = e_10.return)) _b.call(e_10);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                    return s;
                }
                else {
                    try {
                        for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
                            var n = s_1_1.value;
                            this.flowEnumErrorStringMemberInconsistentlyInitailized(n, { enumName: a });
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (s_1_1 && !s_1_1.done && (_g = s_1.return)) _g.call(s_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                    return e;
                }
            };
            class_2.prototype.flowEnumParseExplicitType = function (e) { var s = e.enumName; if (!this.eatContextual(101))
                return null; if (!R(this.state.type))
                throw this.raise(D.EnumInvalidExplicitTypeUnknownSupplied, { at: this.state.startLoc, enumName: s }); var i = this.state.value; return this.next(), i !== "boolean" && i !== "number" && i !== "string" && i !== "symbol" && this.raise(D.EnumInvalidExplicitType, { at: this.state.startLoc, enumName: s, invalidEnumType: i }), i; };
            class_2.prototype.flowEnumBody = function (e, s) {
                var e_11, _b, e_12, _g;
                var _this_1 = this;
                var i = s.name, a = s.loc.start, n = this.flowEnumParseExplicitType({ enumName: i });
                this.expect(5);
                var _j = this.flowEnumMembers({ enumName: i, explicitType: n }), o = _j.members, u = _j.hasUnknownMembers;
                switch ((e.hasUnknownMembers = u, n)) {
                    case "boolean": return e.explicitType = !0, e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
                    case "number": return e.explicitType = !0, e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
                    case "string": return e.explicitType = !0, e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
                    case "symbol": return e.members = o.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
                    default: {
                        var c = function () { return (e.members = [], _this_1.expect(8), _this_1.finishNode(e, "EnumStringBody")); };
                        e.explicitType = !1;
                        var y = o.booleanMembers.length, g = o.numberMembers.length, T = o.stringMembers.length, C = o.defaultedMembers.length;
                        if (!y && !g && !T && !C)
                            return c();
                        if (!y && !g)
                            return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
                        if (!g && !T && y >= C) {
                            try {
                                for (var _k = __values(o.defaultedMembers), _m = _k.next(); !_m.done; _m = _k.next()) {
                                    var j = _m.value;
                                    this.flowEnumErrorBooleanMemberNotInitialized(j.loc.start, { enumName: i, memberName: j.id.name });
                                }
                            }
                            catch (e_11_1) { e_11 = { error: e_11_1 }; }
                            finally {
                                try {
                                    if (_m && !_m.done && (_b = _k.return)) _b.call(_k);
                                }
                                finally { if (e_11) throw e_11.error; }
                            }
                            return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
                        }
                        else if (!y && !T && g >= C) {
                            try {
                                for (var _q = __values(o.defaultedMembers), _v = _q.next(); !_v.done; _v = _q.next()) {
                                    var j = _v.value;
                                    this.flowEnumErrorNumberMemberNotInitialized(j.loc.start, { enumName: i, memberName: j.id.name });
                                }
                            }
                            catch (e_12_1) { e_12 = { error: e_12_1 }; }
                            finally {
                                try {
                                    if (_v && !_v.done && (_g = _q.return)) _g.call(_q);
                                }
                                finally { if (e_12) throw e_12.error; }
                            }
                            return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
                        }
                        else
                            return this.raise(D.EnumInconsistentMemberValues, { at: a, enumName: i }), c();
                    }
                }
            };
            class_2.prototype.flowParseEnumDeclaration = function (e) { var s = this.parseIdentifier(); return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration"); };
            class_2.prototype.isLookaheadToken_lt = function () { var e = this.nextTokenStart(); if (this.input.charCodeAt(e) === 60) {
                var s = this.input.charCodeAt(e + 1);
                return s !== 60 && s !== 61;
            } return !1; };
            class_2.prototype.maybeUnwrapTypeCastExpression = function (e) { return e.type === "TypeCastExpression" ? e.expression : e; };
            return class_2;
        }(t)); }, Ul = { __proto__: null, quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: "\xA0", iexcl: "\xA1", cent: "\xA2", pound: "\xA3", curren: "\xA4", yen: "\xA5", brvbar: "\xA6", sect: "\xA7", uml: "\xA8", copy: "\xA9", ordf: "\xAA", laquo: "\xAB", not: "\xAC", shy: "\xAD", reg: "\xAE", macr: "\xAF", deg: "\xB0", plusmn: "\xB1", sup2: "\xB2", sup3: "\xB3", acute: "\xB4", micro: "\xB5", para: "\xB6", middot: "\xB7", cedil: "\xB8", sup1: "\xB9", ordm: "\xBA", raquo: "\xBB", frac14: "\xBC", frac12: "\xBD", frac34: "\xBE", iquest: "\xBF", Agrave: "\xC0", Aacute: "\xC1", Acirc: "\xC2", Atilde: "\xC3", Auml: "\xC4", Aring: "\xC5", AElig: "\xC6", Ccedil: "\xC7", Egrave: "\xC8", Eacute: "\xC9", Ecirc: "\xCA", Euml: "\xCB", Igrave: "\xCC", Iacute: "\xCD", Icirc: "\xCE", Iuml: "\xCF", ETH: "\xD0", Ntilde: "\xD1", Ograve: "\xD2", Oacute: "\xD3", Ocirc: "\xD4", Otilde: "\xD5", Ouml: "\xD6", times: "\xD7", Oslash: "\xD8", Ugrave: "\xD9", Uacute: "\xDA", Ucirc: "\xDB", Uuml: "\xDC", Yacute: "\xDD", THORN: "\xDE", szlig: "\xDF", agrave: "\xE0", aacute: "\xE1", acirc: "\xE2", atilde: "\xE3", auml: "\xE4", aring: "\xE5", aelig: "\xE6", ccedil: "\xE7", egrave: "\xE8", eacute: "\xE9", ecirc: "\xEA", euml: "\xEB", igrave: "\xEC", iacute: "\xED", icirc: "\xEE", iuml: "\xEF", eth: "\xF0", ntilde: "\xF1", ograve: "\xF2", oacute: "\xF3", ocirc: "\xF4", otilde: "\xF5", ouml: "\xF6", divide: "\xF7", oslash: "\xF8", ugrave: "\xF9", uacute: "\xFA", ucirc: "\xFB", uuml: "\xFC", yacute: "\xFD", thorn: "\xFE", yuml: "\xFF", OElig: "\u0152", oelig: "\u0153", Scaron: "\u0160", scaron: "\u0161", Yuml: "\u0178", fnof: "\u0192", circ: "\u02C6", tilde: "\u02DC", Alpha: "\u0391", Beta: "\u0392", Gamma: "\u0393", Delta: "\u0394", Epsilon: "\u0395", Zeta: "\u0396", Eta: "\u0397", Theta: "\u0398", Iota: "\u0399", Kappa: "\u039A", Lambda: "\u039B", Mu: "\u039C", Nu: "\u039D", Xi: "\u039E", Omicron: "\u039F", Pi: "\u03A0", Rho: "\u03A1", Sigma: "\u03A3", Tau: "\u03A4", Upsilon: "\u03A5", Phi: "\u03A6", Chi: "\u03A7", Psi: "\u03A8", Omega: "\u03A9", alpha: "\u03B1", beta: "\u03B2", gamma: "\u03B3", delta: "\u03B4", epsilon: "\u03B5", zeta: "\u03B6", eta: "\u03B7", theta: "\u03B8", iota: "\u03B9", kappa: "\u03BA", lambda: "\u03BB", mu: "\u03BC", nu: "\u03BD", xi: "\u03BE", omicron: "\u03BF", pi: "\u03C0", rho: "\u03C1", sigmaf: "\u03C2", sigma: "\u03C3", tau: "\u03C4", upsilon: "\u03C5", phi: "\u03C6", chi: "\u03C7", psi: "\u03C8", omega: "\u03C9", thetasym: "\u03D1", upsih: "\u03D2", piv: "\u03D6", ensp: "\u2002", emsp: "\u2003", thinsp: "\u2009", zwnj: "\u200C", zwj: "\u200D", lrm: "\u200E", rlm: "\u200F", ndash: "\u2013", mdash: "\u2014", lsquo: "\u2018", rsquo: "\u2019", sbquo: "\u201A", ldquo: "\u201C", rdquo: "\u201D", bdquo: "\u201E", dagger: "\u2020", Dagger: "\u2021", bull: "\u2022", hellip: "\u2026", permil: "\u2030", prime: "\u2032", Prime: "\u2033", lsaquo: "\u2039", rsaquo: "\u203A", oline: "\u203E", frasl: "\u2044", euro: "\u20AC", image: "\u2111", weierp: "\u2118", real: "\u211C", trade: "\u2122", alefsym: "\u2135", larr: "\u2190", uarr: "\u2191", rarr: "\u2192", darr: "\u2193", harr: "\u2194", crarr: "\u21B5", lArr: "\u21D0", uArr: "\u21D1", rArr: "\u21D2", dArr: "\u21D3", hArr: "\u21D4", forall: "\u2200", part: "\u2202", exist: "\u2203", empty: "\u2205", nabla: "\u2207", isin: "\u2208", notin: "\u2209", ni: "\u220B", prod: "\u220F", sum: "\u2211", minus: "\u2212", lowast: "\u2217", radic: "\u221A", prop: "\u221D", infin: "\u221E", ang: "\u2220", and: "\u2227", or: "\u2228", cap: "\u2229", cup: "\u222A", int: "\u222B", there4: "\u2234", sim: "\u223C", cong: "\u2245", asymp: "\u2248", ne: "\u2260", equiv: "\u2261", le: "\u2264", ge: "\u2265", sub: "\u2282", sup: "\u2283", nsub: "\u2284", sube: "\u2286", supe: "\u2287", oplus: "\u2295", otimes: "\u2297", perp: "\u22A5", sdot: "\u22C5", lceil: "\u2308", rceil: "\u2309", lfloor: "\u230A", rfloor: "\u230B", lang: "\u2329", rang: "\u232A", loz: "\u25CA", spades: "\u2660", clubs: "\u2663", hearts: "\u2665", diams: "\u2666" }, Fe = ge(templateObject_3 || (templateObject_3 = __makeTemplateObject(["jsx"], ["jsx"])))({ AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.", MissingClosingTagElement: function (t) { var r = t.openingTagName; return "Expected corresponding JSX closing tag for <".concat(r, ">."); }, MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.", UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?", UnexpectedToken: function (t) { var r = t.unexpected, e = t.HTMLEntity; return "Unexpected token `".concat(r, "`. Did you mean `").concat(e, "` or `{'").concat(r, "'}`?"); }, UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.", UnterminatedJsxContent: "Unterminated JSX contents.", UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?" });
        function we(t) { return t ? t.type === "JSXOpeningFragment" || t.type === "JSXClosingFragment" : !1; }
        function Ke(t) { if (t.type === "JSXIdentifier")
            return t.name; if (t.type === "JSXNamespacedName")
            return t.namespace.name + ":" + t.name.name; if (t.type === "JSXMemberExpression")
            return Ke(t.object) + "." + Ke(t.property); throw new Error("Node had unexpected type: " + t.type); }
        var $l = function (t) { return /** @class */ (function (_super_1) {
            __extends(class_3, _super_1);
            function class_3() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            class_3.prototype.jsxReadToken = function () { var e = "", s = this.state.pos; for (;;) {
                if (this.state.pos >= this.length)
                    throw this.raise(Fe.UnterminatedJsxContent, { at: this.state.startLoc });
                var i = this.input.charCodeAt(this.state.pos);
                switch (i) {
                    case 60:
                    case 123:
                        if (this.state.pos === this.state.start) {
                            i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(140)) : _super_1.prototype.getTokenFromCode.call(this, i);
                            return;
                        }
                        e += this.input.slice(s, this.state.pos), this.finishToken(139, e);
                        return;
                    case 38:
                        e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
                        break;
                    case 62:
                    case 125:
                    default: Ze(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!0), s = this.state.pos) : ++this.state.pos;
                }
            } };
            class_3.prototype.jsxReadNewLine = function (e) {
                var s = this.input.charCodeAt(this.state.pos), i;
                return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? "\n" : "\r\n") : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
            };
            class_3.prototype.jsxReadString = function (e) { var s = "", i = ++this.state.pos; for (;;) {
                if (this.state.pos >= this.length)
                    throw this.raise(p.UnterminatedString, { at: this.state.startLoc });
                var a = this.input.charCodeAt(this.state.pos);
                if (a === e)
                    break;
                a === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : Ze(a) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
            } s += this.input.slice(i, this.state.pos++), this.finishToken(131, s); };
            class_3.prototype.jsxReadEntity = function () { var e = ++this.state.pos; if (this.codePointAtPos(this.state.pos) === 35) {
                ++this.state.pos;
                var s = 10;
                this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
                var i = this.readInt(s, void 0, !1, "bail");
                if (i !== null && this.codePointAtPos(this.state.pos) === 59)
                    return ++this.state.pos, String.fromCodePoint(i);
            }
            else {
                var s = 0, i = !1;
                for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) == 59);)
                    ++this.state.pos;
                if (i) {
                    var a = this.input.slice(e, this.state.pos), n = Ul[a];
                    if (++this.state.pos, n)
                        return n;
                }
            } return this.state.pos = e, "&"; };
            class_3.prototype.jsxReadWord = function () { var e, s = this.state.pos; do
                e = this.input.charCodeAt(++this.state.pos);
            while (je(e) || e === 45); this.finishToken(138, this.input.slice(s, this.state.pos)); };
            class_3.prototype.jsxParseIdentifier = function () { var e = this.startNode(); return this.match(138) ? e.name = this.state.value : Ee(this.state.type) ? e.name = Y(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier"); };
            class_3.prototype.jsxParseNamespacedName = function () { var e = this.state.startLoc, s = this.jsxParseIdentifier(); if (!this.eat(14))
                return s; var i = this.startNodeAt(e); return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName"); };
            class_3.prototype.jsxParseElementName = function () { var e = this.state.startLoc, s = this.jsxParseNamespacedName(); if (s.type === "JSXNamespacedName")
                return s; for (; this.eat(16);) {
                var i = this.startNodeAt(e);
                i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
            } return s; };
            class_3.prototype.jsxParseAttributeValue = function () { var e; switch (this.state.type) {
                case 5: return e = this.startNode(), this.setContext(x.brace), this.next(), e = this.jsxParseExpressionContainer(e, x.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(Fe.AttributeIsEmpty, { at: e }), e;
                case 140:
                case 131: return this.parseExprAtom();
                default: throw this.raise(Fe.UnsupportedJsxValue, { at: this.state.startLoc });
            } };
            class_3.prototype.jsxParseEmptyExpression = function () { var e = this.startNodeAt(this.state.lastTokEndLoc); return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc); };
            class_3.prototype.jsxParseSpreadChild = function (e) { return this.next(), e.expression = this.parseExpression(), this.setContext(x.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild"); };
            class_3.prototype.jsxParseExpressionContainer = function (e, s) { if (this.match(8))
                e.expression = this.jsxParseEmptyExpression();
            else {
                var i = this.parseExpression();
                e.expression = i;
            } return this.setContext(s), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXExpressionContainer"); };
            class_3.prototype.jsxParseAttribute = function () { var e = this.startNode(); return this.match(5) ? (this.setContext(x.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(x.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute")); };
            class_3.prototype.jsxParseOpeningElementAt = function (e) { var s = this.startNodeAt(e); return this.eat(141) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s)); };
            class_3.prototype.jsxParseOpeningElementAfterName = function (e) { var s = []; for (; !this.match(56) && !this.match(141);)
                s.push(this.jsxParseAttribute()); return e.attributes = s, e.selfClosing = this.eat(56), this.expect(141), this.finishNode(e, "JSXOpeningElement"); };
            class_3.prototype.jsxParseClosingElementAt = function (e) { var s = this.startNodeAt(e); return this.eat(141) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(141), this.finishNode(s, "JSXClosingElement")); };
            class_3.prototype.jsxParseElementAt = function (e) { var s = this.startNodeAt(e), i = [], a = this.jsxParseOpeningElementAt(e), n = null; if (!a.selfClosing) {
                e: for (;;)
                    switch (this.state.type) {
                        case 140:
                            if (e = this.state.startLoc, this.next(), this.eat(56)) {
                                n = this.jsxParseClosingElementAt(e);
                                break e;
                            }
                            i.push(this.jsxParseElementAt(e));
                            break;
                        case 139:
                            i.push(this.parseExprAtom());
                            break;
                        case 5: {
                            var o = this.startNode();
                            this.setContext(x.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, x.j_expr));
                            break;
                        }
                        default: this.unexpected();
                    }
                we(a) && !we(n) && n !== null ? this.raise(Fe.MissingClosingTagFragment, { at: n }) : !we(a) && we(n) ? this.raise(Fe.MissingClosingTagElement, { at: n, openingTagName: Ke(a.name) }) : !we(a) && !we(n) && Ke(n.name) !== Ke(a.name) && this.raise(Fe.MissingClosingTagElement, { at: n, openingTagName: Ke(a.name) });
            } if (we(a) ? (s.openingFragment = a, s.closingFragment = n) : (s.openingElement = a, s.closingElement = n), s.children = i, this.match(47))
                throw this.raise(Fe.UnwrappedAdjacentJSXElements, { at: this.state.startLoc }); return we(a) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement"); };
            class_3.prototype.jsxParseElement = function () { var e = this.state.startLoc; return this.next(), this.jsxParseElementAt(e); };
            class_3.prototype.setContext = function (e) { var s = this.state.context; s[s.length - 1] = e; };
            class_3.prototype.parseExprAtom = function (e) { return this.match(139) ? this.parseLiteral(this.state.value, "JSXText") : this.match(140) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(140), this.jsxParseElement()) : _super_1.prototype.parseExprAtom.call(this, e); };
            class_3.prototype.skipSpace = function () { this.curContext().preserveSpace || _super_1.prototype.skipSpace.call(this); };
            class_3.prototype.getTokenFromCode = function (e) { var s = this.curContext(); if (s === x.j_expr) {
                this.jsxReadToken();
                return;
            } if (s === x.j_oTag || s === x.j_cTag) {
                if (Pe(e)) {
                    this.jsxReadWord();
                    return;
                }
                if (e === 62) {
                    ++this.state.pos, this.finishToken(141);
                    return;
                }
                if ((e === 34 || e === 39) && s === x.j_oTag) {
                    this.jsxReadString(e);
                    return;
                }
            } if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
                ++this.state.pos, this.finishToken(140);
                return;
            } _super_1.prototype.getTokenFromCode.call(this, e); };
            class_3.prototype.updateContext = function (e) { var _b = this.state, s = _b.context, i = _b.type; if (i === 56 && e === 140)
                s.splice(-2, 2, x.j_cTag), this.state.canStartJSXElement = !1;
            else if (i === 140)
                s.push(x.j_oTag);
            else if (i === 141) {
                var a = s[s.length - 1];
                a === x.j_oTag && e === 56 || a === x.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === x.j_expr) : (this.setContext(x.j_expr), this.state.canStartJSXElement = !0);
            }
            else
                this.state.canStartJSXElement = H(i); };
            return class_3;
        }(t)); }, Hl = /** @class */ (function (_super_1) {
            __extends(Hl, _super_1);
            function Hl() {
                var _this_1 = this;
                _this_1 = _super_1.apply(this, __spreadArray([], __read(arguments), false)) || this, _this_1.types = new Set, _this_1.enums = new Set, _this_1.constEnums = new Set, _this_1.classes = new Set, _this_1.exportOnlyBindings = new Set;
                return _this_1;
            }
            return Hl;
        }(hs)), zl = /** @class */ (function (_super_1) {
            __extends(zl, _super_1);
            function zl() {
                var _this_1 = this;
                _this_1 = _super_1.apply(this, __spreadArray([], __read(arguments), false)) || this, _this_1.importsStack = [];
                return _this_1;
            }
            zl.prototype.createScope = function (t) { return this.importsStack.push(new Set), new Hl(t); };
            zl.prototype.enter = function (t) { t == $e && this.importsStack.push(new Set), _super_1.prototype.enter.call(this, t); };
            zl.prototype.exit = function () { var t = _super_1.prototype.exit.call(this); return t == $e && this.importsStack.pop(), t; };
            zl.prototype.hasImport = function (t, r) { var e = this.importsStack.length; if (this.importsStack[e - 1].has(t))
                return !0; if (!r && e > 1) {
                for (var s = 0; s < e - 1; s++)
                    if (this.importsStack[s].has(t))
                        return !0;
            } return !1; };
            zl.prototype.declareName = function (t, r, e) { if (r & Xe) {
                this.hasImport(t, !0) && this.parser.raise(p.VarRedeclaration, { at: e, identifierName: t }), this.importsStack[this.importsStack.length - 1].add(t);
                return;
            } var s = this.currentScope(); if (r & rs) {
                this.maybeExportDefined(s, t), s.exportOnlyBindings.add(t);
                return;
            } _super_1.prototype.declareName.call(this, t, r, e), r & ke && (r & me || (this.checkRedeclarationInScope(s, t, r, e), this.maybeExportDefined(s, t)), s.types.add(t)), r & ts && s.enums.add(t), r & ss && s.constEnums.add(t), r & gt && s.classes.add(t); };
            zl.prototype.isRedeclaredInScope = function (t, r, e) { if (t.enums.has(r)) {
                if (e & ts) {
                    var s = !!(e & ss), i = t.constEnums.has(r);
                    return s !== i;
                }
                return !0;
            } return e & gt && t.classes.has(r) ? t.lexical.has(r) ? !!(e & me) : !1 : e & ke && t.types.has(r) ? !0 : _super_1.prototype.isRedeclaredInScope.call(this, t, r, e); };
            zl.prototype.checkLocalExport = function (t) { var r = t.name; if (this.hasImport(r))
                return; var e = this.scopeStack.length; for (var s = e - 1; s >= 0; s--) {
                var i = this.scopeStack[s];
                if (i.types.has(r) || i.exportOnlyBindings.has(r))
                    return;
            } _super_1.prototype.checkLocalExport.call(this, t); };
            return zl;
        }(us)), Vl = function (t, r) { return Object.hasOwnProperty.call(t, r) && t[r]; }, Kr = function (t) { return t.type === "ParenthesizedExpression" ? Kr(t.expression) : t; }, Kl = /** @class */ (function (_super_1) {
            __extends(Kl, _super_1);
            function Kl() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            Kl.prototype.toAssignable = function (t) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; var e, s; var i; switch (((t.type === "ParenthesizedExpression" || (e = t.extra) != null && e.parenthesized) && (i = Kr(t), r ? i.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(p.InvalidParenthesizedAssignment, { at: t }) : i.type !== "MemberExpression" && this.raise(p.InvalidParenthesizedAssignment, { at: t }) : this.raise(p.InvalidParenthesizedAssignment, { at: t })), t.type)) {
                case "Identifier":
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement": break;
                case "ObjectExpression":
                    t.type = "ObjectPattern";
                    for (var n = 0, o = t.properties.length, u = o - 1; n < o; n++) {
                        var a;
                        var c = t.properties[n], y = n === u;
                        this.toAssignableObjectExpressionProp(c, y, r), y && c.type === "RestElement" && (a = t.extra) != null && a.trailingCommaLoc && this.raise(p.RestTrailingComma, { at: t.extra.trailingCommaLoc });
                    }
                    break;
                case "ObjectProperty": {
                    var n = t.key, o = t.value;
                    this.isPrivateName(n) && this.classScope.usePrivateName(this.getPrivateNameSV(n), n.loc.start), this.toAssignable(o, r);
                    break;
                }
                case "SpreadElement": throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
                case "ArrayExpression":
                    t.type = "ArrayPattern", this.toAssignableList(t.elements, (s = t.extra) == null ? void 0 : s.trailingCommaLoc, r);
                    break;
                case "AssignmentExpression":
                    t.operator !== "=" && this.raise(p.MissingEqInAssignment, { at: t.left.loc.end }), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, r);
                    break;
                case "ParenthesizedExpression":
                    this.toAssignable(i, r);
                    break;
            } };
            Kl.prototype.toAssignableObjectExpressionProp = function (t, r, e) { if (t.type === "ObjectMethod")
                this.raise(t.kind === "get" || t.kind === "set" ? p.PatternHasAccessor : p.PatternHasMethod, { at: t.key });
            else if (t.type === "SpreadElement") {
                t.type = "RestElement";
                var s = t.argument;
                this.checkToRestConversion(s, !1), this.toAssignable(s, e), r || this.raise(p.RestTrailingComma, { at: t });
            }
            else
                this.toAssignable(t, e); };
            Kl.prototype.toAssignableList = function (t, r, e) { var s = t.length - 1; for (var i = 0; i <= s; i++) {
                var a = t[i];
                if (a) {
                    if (a.type === "SpreadElement") {
                        a.type = "RestElement";
                        var n = a.argument;
                        this.checkToRestConversion(n, !0), this.toAssignable(n, e);
                    }
                    else
                        this.toAssignable(a, e);
                    a.type === "RestElement" && (i < s ? this.raise(p.RestTrailingComma, { at: a }) : r && this.raise(p.RestTrailingComma, { at: r }));
                }
            } };
            Kl.prototype.isAssignable = function (t, r) {
                var _this_1 = this;
                switch (t.type) {
                    case "Identifier":
                    case "ObjectPattern":
                    case "ArrayPattern":
                    case "AssignmentPattern":
                    case "RestElement": return !0;
                    case "ObjectExpression": {
                        var e_13 = t.properties.length - 1;
                        return t.properties.every(function (s, i) { return s.type !== "ObjectMethod" && (i === e_13 || s.type !== "SpreadElement") && _this_1.isAssignable(s); });
                    }
                    case "ObjectProperty": return this.isAssignable(t.value);
                    case "SpreadElement": return this.isAssignable(t.argument);
                    case "ArrayExpression": return t.elements.every(function (e) { return e === null || _this_1.isAssignable(e); });
                    case "AssignmentExpression": return t.operator === "=";
                    case "ParenthesizedExpression": return this.isAssignable(t.expression);
                    case "MemberExpression":
                    case "OptionalMemberExpression": return !r;
                    default: return !1;
                }
            };
            Kl.prototype.toReferencedList = function (t, r) { return t; };
            Kl.prototype.toReferencedListDeep = function (t, r) {
                var e_14, _b;
                this.toReferencedList(t, r);
                try {
                    for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
                        var e = t_1_1.value;
                        (e == null ? void 0 : e.type) === "ArrayExpression" && this.toReferencedListDeep(e.elements);
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (t_1_1 && !t_1_1.done && (_b = t_1.return)) _b.call(t_1);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            };
            Kl.prototype.parseSpread = function (t) { var r = this.startNode(); return this.next(), r.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(r, "SpreadElement"); };
            Kl.prototype.parseRestBinding = function () { var t = this.startNode(); return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement"); };
            Kl.prototype.parseBindingAtom = function () { switch (this.state.type) {
                case 0: {
                    var t = this.startNode();
                    return this.next(), t.elements = this.parseBindingList(3, 93, 1), this.finishNode(t, "ArrayPattern");
                }
                case 5: return this.parseObjectLike(8, !0);
            } return this.parseIdentifier(); };
            Kl.prototype.parseBindingList = function (t, r, e) { var s = e & 1, i = [], a = !0; for (; !this.eat(t);)
                if (a ? a = !1 : this.expect(12), s && this.match(12))
                    i.push(null);
                else {
                    if (this.eat(t))
                        break;
                    if (this.match(21)) {
                        if (i.push(this.parseAssignableListItemTypes(this.parseRestBinding(), e)), !this.checkCommaAfterRest(r)) {
                            this.expect(t);
                            break;
                        }
                    }
                    else {
                        var n = [];
                        for (this.match(26) && this.hasPlugin("decorators") && this.raise(p.UnsupportedParameterDecorator, { at: this.state.startLoc }); this.match(26);)
                            n.push(this.parseDecorator());
                        i.push(this.parseAssignableListItem(e, n));
                    }
                } return i; };
            Kl.prototype.parseBindingRestProperty = function (t) { return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement"); };
            Kl.prototype.parseBindingProperty = function () { var t = this.startNode(), _b = this.state, r = _b.type, e = _b.startLoc; return r === 21 ? this.parseBindingRestProperty(t) : (r === 136 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), t.key = this.parsePrivateName()) : this.parsePropertyName(t), t.method = !1, this.parseObjPropValue(t, e, !1, !1, !0, !1)); };
            Kl.prototype.parseAssignableListItem = function (t, r) { var e = this.parseMaybeDefault(); this.parseAssignableListItemTypes(e, t); var s = this.parseMaybeDefault(e.loc.start, e); return r.length && (e.decorators = r), s; };
            Kl.prototype.parseAssignableListItemTypes = function (t, r) { return t; };
            Kl.prototype.parseMaybeDefault = function (t, r) { var e, s; if ((e = t) != null || (t = this.state.startLoc), r = (s = r) != null ? s : this.parseBindingAtom(), !this.eat(29))
                return r; var i = this.startNodeAt(t); return i.left = r, i.right = this.parseMaybeAssignAllowIn(), this.finishNode(i, "AssignmentPattern"); };
            Kl.prototype.isValidLVal = function (t, r, e) { return Vl({ AssignmentPattern: "left", RestElement: "argument", ObjectProperty: "value", ParenthesizedExpression: "expression", ArrayPattern: "elements", ObjectPattern: "properties" }, t); };
            Kl.prototype.checkLVal = function (t, r) {
                var e_15, _b;
                var e = r.in, _g = r.binding, s = _g === void 0 ? be : _g, _j = r.checkClashes, i = _j === void 0 ? !1 : _j, _k = r.strictModeChanged, a = _k === void 0 ? !1 : _k, _m = r.hasParenthesizedAncestor, n = _m === void 0 ? !1 : _m;
                var o;
                var u = t.type;
                if (this.isObjectMethod(t))
                    return;
                if (u === "MemberExpression") {
                    s !== be && this.raise(p.InvalidPropertyBindingPattern, { at: t });
                    return;
                }
                if (u === "Identifier") {
                    this.checkIdentifier(t, s, a);
                    var C = t.name;
                    i && (i.has(C) ? this.raise(p.ParamDupe, { at: t }) : i.add(C));
                    return;
                }
                var c = this.isValidLVal(u, !(n || (o = t.extra) != null && o.parenthesized) && e.type === "AssignmentExpression", s);
                if (c === !0)
                    return;
                if (c === !1) {
                    var C = s === be ? p.InvalidLhs : p.InvalidLhsBinding;
                    this.raise(C, { at: t, ancestor: e });
                    return;
                }
                var _q = __read(Array.isArray(c) ? c : [c, u === "ParenthesizedExpression"], 2), y = _q[0], g = _q[1], T = u === "ArrayPattern" || u === "ObjectPattern" || u === "ParenthesizedExpression" ? { type: u } : e;
                try {
                    for (var _v = __values([].concat(t[y])), _w = _v.next(); !_w.done; _w = _v.next()) {
                        var C = _w.value;
                        C && this.checkLVal(C, { in: T, binding: s, checkClashes: i, strictModeChanged: a, hasParenthesizedAncestor: g });
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (_w && !_w.done && (_b = _v.return)) _b.call(_v);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
            };
            Kl.prototype.checkIdentifier = function (t, r) { var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; this.state.strict && (e ? vr(t.name, this.inModule) : Tr(t.name)) && (r === be ? this.raise(p.StrictEvalArguments, { at: t, referenceName: t.name }) : this.raise(p.StrictEvalArgumentsBinding, { at: t, bindingName: t.name })), r & Pt && t.name === "let" && this.raise(p.LetInLexicalBinding, { at: t }), r & be || this.declareNameFromIdentifier(t, r); };
            Kl.prototype.declareNameFromIdentifier = function (t, r) { this.scope.declareName(t.name, r, t.loc.start); };
            Kl.prototype.checkToRestConversion = function (t, r) { switch (t.type) {
                case "ParenthesizedExpression":
                    this.checkToRestConversion(t.expression, r);
                    break;
                case "Identifier":
                case "MemberExpression": break;
                case "ArrayExpression":
                case "ObjectExpression": if (r)
                    break;
                default: this.raise(p.InvalidRestAssignmentPattern, { at: t });
            } };
            Kl.prototype.checkCommaAfterRest = function (t) { return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? p.RestTrailingComma : p.ElementAfterRest, { at: this.state.startLoc }), !0) : !1; };
            return Kl;
        }(Ol)), Wl = function (t, r) { return Object.hasOwnProperty.call(t, r) && t[r]; };
        function Gl(t) { if (t == null)
            throw new Error("Unexpected ".concat(t, " value.")); return t; }
        function Wr(t) { if (!t)
            throw new Error("Assert fail"); }
        var w = ge(templateObject_4 || (templateObject_4 = __makeTemplateObject(["typescript"], ["typescript"])))({ AbstractMethodHasImplementation: function (t) { var r = t.methodName; return "Method '".concat(r, "' cannot have an implementation because it is marked abstract."); }, AbstractPropertyHasInitializer: function (t) { var r = t.propertyName; return "Property '".concat(r, "' cannot have an initializer because it is marked abstract."); }, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.", ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: function (t) { var r = t.kind; return "'declare' is not allowed in ".concat(r, "ters."); }, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: function (t) { var r = t.modifier; return "Accessibility modifier already seen."; }, DuplicateModifier: function (t) { var r = t.modifier; return "Duplicate modifier: '".concat(r, "'."); }, EmptyHeritageClauseType: function (t) { var r = t.token; return "'".concat(r, "' list cannot be empty."); }, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier", IncompatibleModifiers: function (t) { var r = t.modifiers; return "'".concat(r[0], "' modifier cannot be used with '").concat(r[1], "' modifier."); }, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: function (t) { var r = t.modifier; return "Index signatures cannot have an accessibility modifier ('".concat(r, "')."); }, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: function (t) { var r = t.modifier; return "'".concat(r, "' modifier cannot appear on a type member."); }, InvalidModifierOnTypeParameter: function (t) { var r = t.modifier; return "'".concat(r, "' modifier cannot appear on a type parameter."); }, InvalidModifierOnTypeParameterPositions: function (t) { var r = t.modifier; return "'".concat(r, "' modifier can only appear on a type parameter of a class, interface or type alias."); }, InvalidModifiersOrder: function (t) { var r = t.orderedModifiers; return "'".concat(r[0], "' modifier must precede '").concat(r[1], "' modifier."); }, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: function (t) { var r = t.modifier; return "Private elements cannot have an accessibility modifier ('".concat(r, "')."); }, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: function (t) { var r = t.typeParameterName; return "Single type parameter ".concat(r, " should have a trailing comma. Example usage: <").concat(r, ",>."); }, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: function (t) { var r = t.type; return "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ".concat(r, "."); } });
        function Jl(t) { switch (t) {
            case "any": return "TSAnyKeyword";
            case "boolean": return "TSBooleanKeyword";
            case "bigint": return "TSBigIntKeyword";
            case "never": return "TSNeverKeyword";
            case "number": return "TSNumberKeyword";
            case "object": return "TSObjectKeyword";
            case "string": return "TSStringKeyword";
            case "symbol": return "TSSymbolKeyword";
            case "undefined": return "TSUndefinedKeyword";
            case "unknown": return "TSUnknownKeyword";
            default: return;
        } }
        function Gr(t) { return t === "private" || t === "public" || t === "protected"; }
        function Xl(t) { return t === "in" || t === "out"; }
        var Yl = function (t) { return /** @class */ (function (_super_1) {
            __extends(class_4, _super_1);
            function class_4() {
                var _this_1 = this;
                _this_1 = _super_1.apply(this, __spreadArray([], __read(arguments), false)) || this, _this_1.tsParseInOutModifiers = _this_1.tsParseModifiers.bind(_this_1, { allowedModifiers: ["in", "out"], disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: w.InvalidModifierOnTypeParameter }), _this_1.tsParseConstModifier = _this_1.tsParseModifiers.bind(_this_1, { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: w.InvalidModifierOnTypeParameterPositions }), _this_1.tsParseInOutConstModifiers = _this_1.tsParseModifiers.bind(_this_1, { allowedModifiers: ["in", "out", "const"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: w.InvalidModifierOnTypeParameter });
                return _this_1;
            }
            class_4.prototype.getScopeHandler = function () { return zl; };
            class_4.prototype.tsIsIdentifier = function () { return R(this.state.type); };
            class_4.prototype.tsTokenCanFollowModifier = function () { return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(136) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak(); };
            class_4.prototype.tsNextTokenCanFollowModifier = function () { return this.next(), this.tsTokenCanFollowModifier(); };
            class_4.prototype.tsParseModifier = function (e, s) { if (!R(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
                return; var i = this.state.value; if (e.indexOf(i) !== -1) {
                if (s && this.tsIsStartOfStaticBlocks())
                    return;
                if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
                    return i;
            } };
            class_4.prototype.tsParseModifiers = function (e, s) {
                var _this_1 = this;
                var i = e.allowedModifiers, a = e.disallowedModifiers, n = e.stopOnStartOfClassStaticBlock, _b = e.errorTemplate, o = _b === void 0 ? w.InvalidModifierOnTypeMember : _b, u = function (y, g, T, C) { g === T && s[C] && _this_1.raise(w.InvalidModifiersOrder, { at: y, orderedModifiers: [T, C] }); }, c = function (y, g, T, C) { (s[T] && g === C || s[C] && g === T) && _this_1.raise(w.IncompatibleModifiers, { at: y, modifiers: [T, C] }); };
                for (;;) {
                    var y = this.state.startLoc, g = this.tsParseModifier(i.concat(a != null ? a : []), n);
                    if (!g)
                        break;
                    Gr(g) ? s.accessibility ? this.raise(w.DuplicateAccessibilityModifier, { at: y, modifier: g }) : (u(y, g, g, "override"), u(y, g, g, "static"), u(y, g, g, "readonly"), s.accessibility = g) : Xl(g) ? (s[g] && this.raise(w.DuplicateModifier, { at: y, modifier: g }), s[g] = !0, u(y, g, "in", "out")) : (Object.hasOwnProperty.call(s, g) ? this.raise(w.DuplicateModifier, { at: y, modifier: g }) : (u(y, g, "static", "readonly"), u(y, g, "static", "override"), u(y, g, "override", "readonly"), u(y, g, "abstract", "override"), c(y, g, "declare", "override"), c(y, g, "static", "abstract")), s[g] = !0), a != null && a.includes(g) && this.raise(o, { at: y, modifier: g });
                }
            };
            class_4.prototype.tsIsListTerminator = function (e) { switch (e) {
                case "EnumMembers":
                case "TypeMembers": return this.match(8);
                case "HeritageClauseElement": return this.match(5);
                case "TupleElementTypes": return this.match(3);
                case "TypeParametersOrArguments": return this.match(48);
            } };
            class_4.prototype.tsParseList = function (e, s) { var i = []; for (; !this.tsIsListTerminator(e);)
                i.push(s()); return i; };
            class_4.prototype.tsParseDelimitedList = function (e, s, i) { return Gl(this.tsParseDelimitedListWorker(e, s, !0, i)); };
            class_4.prototype.tsParseDelimitedListWorker = function (e, s, i, a) { var n = [], o = -1; for (; !this.tsIsListTerminator(e);) {
                o = -1;
                var u = s();
                if (u == null)
                    return;
                if (n.push(u), this.eat(12)) {
                    o = this.state.lastTokStart;
                    continue;
                }
                if (this.tsIsListTerminator(e))
                    break;
                i && this.expect(12);
                return;
            } return a && (a.value = o), n; };
            class_4.prototype.tsParseBracketedList = function (e, s, i, a, n) { a || (i ? this.expect(0) : this.expect(47)); var o = this.tsParseDelimitedList(e, s, n); return i ? this.expect(3) : this.expect(48), o; };
            class_4.prototype.tsParseImportType = function () { var e = this.startNode(); return this.expect(83), this.expect(10), this.match(131) || this.raise(w.UnsupportedImportTypeArgument, { at: this.state.startLoc }), e.argument = _super_1.prototype.parseExprAtom.call(this), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType"); };
            class_4.prototype.tsParseEntityName = function () { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, s = this.parseIdentifier(e); for (; this.eat(16);) {
                var i = this.startNodeAtNode(s);
                i.left = s, i.right = this.parseIdentifier(e), s = this.finishNode(i, "TSQualifiedName");
            } return s; };
            class_4.prototype.tsParseTypeReference = function () { var e = this.startNode(); return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference"); };
            class_4.prototype.tsParseThisTypePredicate = function (e) { this.next(); var s = this.startNodeAtNode(e); return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(!1), s.asserts = !1, this.finishNode(s, "TSTypePredicate"); };
            class_4.prototype.tsParseThisTypeNode = function () { var e = this.startNode(); return this.next(), this.finishNode(e, "TSThisType"); };
            class_4.prototype.tsParseTypeQuery = function () { var e = this.startNode(); return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery"); };
            class_4.prototype.tsParseTypeParameter = function (e) { var s = this.startNode(); return e(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter"); };
            class_4.prototype.tsTryParseTypeParameters = function (e) { if (this.match(47))
                return this.tsParseTypeParameters(e); };
            class_4.prototype.tsParseTypeParameters = function (e) { var s = this.startNode(); this.match(47) || this.match(140) ? this.next() : this.unexpected(); var i = { value: -1 }; return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, i), s.params.length === 0 && this.raise(w.EmptyTypeParameters, { at: s }), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration"); };
            class_4.prototype.tsFillSignature = function (e, s) { var i = e === 19, a = "parameters", n = "typeAnnotation"; s.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), s[a] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e)); };
            class_4.prototype.tsParseBindingListForSignature = function () {
                var _this_1 = this;
                return _super_1.prototype.parseBindingList.call(this, 11, 41, 2).map(function (e) { return (e.type !== "Identifier" && e.type !== "RestElement" && e.type !== "ObjectPattern" && e.type !== "ArrayPattern" && _this_1.raise(w.UnsupportedSignatureParameterKind, { at: e, type: e.type }), e); });
            };
            class_4.prototype.tsParseTypeMemberSemicolon = function () { !this.eat(12) && !this.isLineTerminator() && this.expect(13); };
            class_4.prototype.tsParseSignatureMember = function (e, s) { return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e); };
            class_4.prototype.tsIsUnambiguouslyIndexSignature = function () { return this.next(), R(this.state.type) ? (this.next(), this.match(14)) : !1; };
            class_4.prototype.tsTryParseIndexSignature = function (e) { if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
                return; this.expect(0); var s = this.parseIdentifier(); s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s]; var i = this.tsTryParseTypeAnnotation(); return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature"); };
            class_4.prototype.tsParsePropertyOrMethodSignature = function (e, s) { this.eat(17) && (e.optional = !0); var i = e; if (this.match(10) || this.match(47)) {
                s && this.raise(w.ReadonlyForMethodSignature, { at: e });
                var a = i;
                a.kind && this.match(47) && this.raise(w.AccesorCannotHaveTypeParameters, { at: this.state.curPosition() }), this.tsFillSignature(14, a), this.tsParseTypeMemberSemicolon();
                var n = "parameters", o = "typeAnnotation";
                if (a.kind === "get")
                    a[n].length > 0 && (this.raise(p.BadGetterArity, { at: this.state.curPosition() }), this.isThisParam(a[n][0]) && this.raise(w.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }));
                else if (a.kind === "set") {
                    if (a[n].length !== 1)
                        this.raise(p.BadSetterArity, { at: this.state.curPosition() });
                    else {
                        var u = a[n][0];
                        this.isThisParam(u) && this.raise(w.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }), u.type === "Identifier" && u.optional && this.raise(w.SetAccesorCannotHaveOptionalParameter, { at: this.state.curPosition() }), u.type === "RestElement" && this.raise(w.SetAccesorCannotHaveRestParameter, { at: this.state.curPosition() });
                    }
                    a[o] && this.raise(w.SetAccesorCannotHaveReturnType, { at: a[o] });
                }
                else
                    a.kind = "method";
                return this.finishNode(a, "TSMethodSignature");
            }
            else {
                var a = i;
                s && (a.readonly = !0);
                var n = this.tsTryParseTypeAnnotation();
                return n && (a.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(a, "TSPropertySignature");
            } };
            class_4.prototype.tsParseTypeMember = function () { var e = this.startNode(); if (this.match(10) || this.match(47))
                return this.tsParseSignatureMember("TSCallSignatureDeclaration", e); if (this.match(77)) {
                var i = this.startNode();
                return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, !1));
            } this.tsParseModifiers({ allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }, e); var s = this.tsTryParseIndexSignature(e); return s || (_super_1.prototype.parsePropertyName.call(this, e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, _super_1.prototype.parsePropertyName.call(this, e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly)); };
            class_4.prototype.tsParseTypeLiteral = function () { var e = this.startNode(); return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral"); };
            class_4.prototype.tsParseObjectTypeMembers = function () { this.expect(5); var e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this)); return this.expect(8), e; };
            class_4.prototype.tsIsStartOfMappedType = function () { return this.next(), this.eat(53) ? this.isContextual(120) : (this.isContextual(120) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? !1 : (this.next(), this.match(58))); };
            class_4.prototype.tsParseMappedTypeParameter = function () { var e = this.startNode(); return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter"); };
            class_4.prototype.tsParseMappedType = function () { var e = this.startNode(); return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(120)) : this.eatContextual(120) && (e.readonly = !0), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType"); };
            class_4.prototype.tsParseTupleType = function () {
                var _this_1 = this;
                var e = this.startNode();
                e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
                var s = !1, i = null;
                return e.elementTypes.forEach(function (a) { var n; var o = a.type; s && o !== "TSRestType" && o !== "TSOptionalType" && !(o === "TSNamedTupleMember" && a.optional) && _this_1.raise(w.OptionalTypeBeforeRequired, { at: a }), s || (s = o === "TSNamedTupleMember" && a.optional || o === "TSOptionalType"); var u = o; o === "TSRestType" && (a = a.typeAnnotation, u = a.type); var c = u === "TSNamedTupleMember"; (n = i) != null || (i = c), i !== c && _this_1.raise(w.MixedLabeledAndUnlabeledElements, { at: a }); }), this.finishNode(e, "TSTupleType");
            };
            class_4.prototype.tsParseTupleElementType = function () { var e = this.state.startLoc, s = this.eat(21), i, a, n, o, c = se(this.state.type) ? this.lookaheadCharCode() : null; if (c === 58)
                i = !0, n = !1, a = this.parseIdentifier(!0), this.expect(14), o = this.tsParseType();
            else if (c === 63) {
                n = !0;
                var y = this.state.startLoc, g = this.state.value, T = this.tsParseNonArrayType();
                this.lookaheadCharCode() === 58 ? (i = !0, a = this.createIdentifier(this.startNodeAt(y), g), this.expect(17), this.expect(14), o = this.tsParseType()) : (i = !1, o = T, this.expect(17));
            }
            else
                o = this.tsParseType(), n = this.eat(17), i = this.eat(14); if (i) {
                var y = void 0;
                a ? (y = this.startNodeAtNode(a), y.optional = n, y.label = a, y.elementType = o, this.eat(17) && (y.optional = !0, this.raise(w.TupleOptionalAfterType, { at: this.state.lastTokStartLoc }))) : (y = this.startNodeAtNode(o), y.optional = n, this.raise(w.InvalidTupleMemberLabel, { at: o }), y.label = o, y.elementType = this.tsParseType()), o = this.finishNode(y, "TSNamedTupleMember");
            }
            else if (n) {
                var y = this.startNodeAtNode(o);
                y.typeAnnotation = o, o = this.finishNode(y, "TSOptionalType");
            } if (s) {
                var y = this.startNodeAt(e);
                y.typeAnnotation = o, o = this.finishNode(y, "TSRestType");
            } return o; };
            class_4.prototype.tsParseParenthesizedType = function () { var e = this.startNode(); return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType"); };
            class_4.prototype.tsParseFunctionOrConstructorType = function (e, s) {
                var _this_1 = this;
                var i = this.startNode();
                return e === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function () { return _this_1.tsFillSignature(19, i); }), this.finishNode(i, e);
            };
            class_4.prototype.tsParseLiteralTypeNode = function () {
                var _this_1 = this;
                var e = this.startNode();
                return e.literal = (function () { switch (_this_1.state.type) {
                    case 132:
                    case 133:
                    case 131:
                    case 85:
                    case 86: return _super_1.prototype.parseExprAtom.call(_this_1);
                    default: _this_1.unexpected();
                } })(), this.finishNode(e, "TSLiteralType");
            };
            class_4.prototype.tsParseTemplateLiteralType = function () { var e = this.startNode(); return e.literal = _super_1.prototype.parseTemplate.call(this, !1), this.finishNode(e, "TSLiteralType"); };
            class_4.prototype.parseTemplateSubstitution = function () { return this.state.inType ? this.tsParseType() : _super_1.prototype.parseTemplateSubstitution.call(this); };
            class_4.prototype.tsParseThisTypeOrThisTypePredicate = function () { var e = this.tsParseThisTypeNode(); return this.isContextual(114) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e; };
            class_4.prototype.tsParseNonArrayType = function () { switch (this.state.type) {
                case 131:
                case 132:
                case 133:
                case 85:
                case 86: return this.tsParseLiteralTypeNode();
                case 53:
                    if (this.state.value === "-") {
                        var e = this.startNode(), s = this.lookahead();
                        return s.type !== 132 && s.type !== 133 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
                    }
                    break;
                case 78: return this.tsParseThisTypeOrThisTypePredicate();
                case 87: return this.tsParseTypeQuery();
                case 83: return this.tsParseImportType();
                case 5: return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
                case 0: return this.tsParseTupleType();
                case 10: return this.tsParseParenthesizedType();
                case 25:
                case 24: return this.tsParseTemplateLiteralType();
                default: {
                    var e = this.state.type;
                    if (R(e) || e === 88 || e === 84) {
                        var s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Jl(this.state.value);
                        if (s !== void 0 && this.lookaheadCharCode() !== 46) {
                            var i = this.startNode();
                            return this.next(), this.finishNode(i, s);
                        }
                        return this.tsParseTypeReference();
                    }
                }
            } this.unexpected(); };
            class_4.prototype.tsParseArrayTypeOrHigher = function () { var e = this.tsParseNonArrayType(); for (; !this.hasPrecedingLineBreak() && this.eat(0);)
                if (this.match(3)) {
                    var s = this.startNodeAtNode(e);
                    s.elementType = e, this.expect(3), e = this.finishNode(s, "TSArrayType");
                }
                else {
                    var s = this.startNodeAtNode(e);
                    s.objectType = e, s.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(s, "TSIndexedAccessType");
                } return e; };
            class_4.prototype.tsParseTypeOperator = function () { var e = this.startNode(), s = this.state.value; return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator"); };
            class_4.prototype.tsCheckTypeAnnotationForReadOnly = function (e) { switch (e.typeAnnotation.type) {
                case "TSTupleType":
                case "TSArrayType": return;
                default: this.raise(w.UnexpectedReadonly, { at: e });
            } };
            class_4.prototype.tsParseInferType = function () {
                var _this_1 = this;
                var e = this.startNode();
                this.expectContextual(113);
                var s = this.startNode();
                return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(function () { return _this_1.tsParseConstraintForInferType(); }), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
            };
            class_4.prototype.tsParseConstraintForInferType = function () {
                var _this_1 = this;
                if (this.eat(81)) {
                    var e = this.tsInDisallowConditionalTypesContext(function () { return _this_1.tsParseType(); });
                    if (this.state.inDisallowConditionalTypesContext || !this.match(17))
                        return e;
                }
            };
            class_4.prototype.tsParseTypeOperatorOrHigher = function () {
                var _this_1 = this;
                return ut(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(113) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function () { return _this_1.tsParseArrayTypeOrHigher(); });
            };
            class_4.prototype.tsParseUnionOrIntersectionType = function (e, s, i) { var a = this.startNode(), n = this.eat(i), o = []; do
                o.push(s());
            while (this.eat(i)); return o.length === 1 && !n ? o[0] : (a.types = o, this.finishNode(a, e)); };
            class_4.prototype.tsParseIntersectionTypeOrHigher = function () { return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45); };
            class_4.prototype.tsParseUnionTypeOrHigher = function () { return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43); };
            class_4.prototype.tsIsStartOfFunctionType = function () { return this.match(47) ? !0 : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this)); };
            class_4.prototype.tsSkipParameterStart = function () { if (R(this.state.type) || this.match(78))
                return this.next(), !0; if (this.match(5)) {
                var e = this.state.errors, s = e.length;
                try {
                    return this.parseObjectLike(8, !0), e.length === s;
                }
                catch (_b) {
                    return !1;
                }
            } if (this.match(0)) {
                this.next();
                var e = this.state.errors, s = e.length;
                try {
                    return _super_1.prototype.parseBindingList.call(this, 3, 93, 1), e.length === s;
                }
                catch (_g) {
                    return !1;
                }
            } return !1; };
            class_4.prototype.tsIsUnambiguouslyStartOfFunctionType = function () { return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19)))); };
            class_4.prototype.tsParseTypeOrTypePredicateAnnotation = function (e) {
                var _this_1 = this;
                return this.tsInType(function () { var s = _this_1.startNode(); _this_1.expect(e); var i = _this_1.startNode(), a = !!_this_1.tsTryParse(_this_1.tsParseTypePredicateAsserts.bind(_this_1)); if (a && _this_1.match(78)) {
                    var u = _this_1.tsParseThisTypeOrThisTypePredicate();
                    return u.type === "TSThisType" ? (i.parameterName = u, i.asserts = !0, i.typeAnnotation = null, u = _this_1.finishNode(i, "TSTypePredicate")) : (_this_1.resetStartLocationFromNode(u, i), u.asserts = !0), s.typeAnnotation = u, _this_1.finishNode(s, "TSTypeAnnotation");
                } var n = _this_1.tsIsIdentifier() && _this_1.tsTryParse(_this_1.tsParseTypePredicatePrefix.bind(_this_1)); if (!n)
                    return a ? (i.parameterName = _this_1.parseIdentifier(), i.asserts = a, i.typeAnnotation = null, s.typeAnnotation = _this_1.finishNode(i, "TSTypePredicate"), _this_1.finishNode(s, "TSTypeAnnotation")) : _this_1.tsParseTypeAnnotation(!1, s); var o = _this_1.tsParseTypeAnnotation(!1); return i.parameterName = n, i.typeAnnotation = o, i.asserts = a, s.typeAnnotation = _this_1.finishNode(i, "TSTypePredicate"), _this_1.finishNode(s, "TSTypeAnnotation"); });
            };
            class_4.prototype.tsTryParseTypeOrTypePredicateAnnotation = function () { return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0; };
            class_4.prototype.tsTryParseTypeAnnotation = function () { return this.match(14) ? this.tsParseTypeAnnotation() : void 0; };
            class_4.prototype.tsTryParseType = function () { return this.tsEatThenParseType(14); };
            class_4.prototype.tsParseTypePredicatePrefix = function () { var e = this.parseIdentifier(); if (this.isContextual(114) && !this.hasPrecedingLineBreak())
                return this.next(), e; };
            class_4.prototype.tsParseTypePredicateAsserts = function () { if (this.state.type !== 107)
                return !1; var e = this.state.containsEsc; return this.next(), !R(this.state.type) && !this.match(78) ? !1 : (e && this.raise(p.InvalidEscapedReservedWord, { at: this.state.lastTokStartLoc, reservedWord: "asserts" }), !0); };
            class_4.prototype.tsParseTypeAnnotation = function () {
                var _this_1 = this;
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startNode();
                return this.tsInType(function () { e && _this_1.expect(14), s.typeAnnotation = _this_1.tsParseType(); }), this.finishNode(s, "TSTypeAnnotation");
            };
            class_4.prototype.tsParseType = function () {
                var _this_1 = this;
                Wr(this.state.inType);
                var e = this.tsParseNonConditionalType();
                if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
                    return e;
                var s = this.startNodeAtNode(e);
                return s.checkType = e, s.extendsType = this.tsInDisallowConditionalTypesContext(function () { return _this_1.tsParseNonConditionalType(); }), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(function () { return _this_1.tsParseType(); }), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(function () { return _this_1.tsParseType(); }), this.finishNode(s, "TSConditionalType");
            };
            class_4.prototype.isAbstractConstructorSignature = function () { return this.isContextual(122) && this.lookahead().type === 77; };
            class_4.prototype.tsParseNonConditionalType = function () { return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher(); };
            class_4.prototype.tsParseTypeAssertion = function () {
                var _this_1 = this;
                this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(w.ReservedTypeAssertion, { at: this.state.startLoc });
                var e = this.startNode();
                return e.typeAnnotation = this.tsInType(function () { return (_this_1.next(), _this_1.match(75) ? _this_1.tsParseTypeReference() : _this_1.tsParseType()); }), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
            };
            class_4.prototype.tsParseHeritageClause = function (e) {
                var _this_1 = this;
                var s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", function () { var a = _this_1.startNode(); return a.expression = _this_1.tsParseEntityName(), _this_1.match(47) && (a.typeParameters = _this_1.tsParseTypeArguments()), _this_1.finishNode(a, "TSExpressionWithTypeArguments"); });
                return i.length || this.raise(w.EmptyHeritageClauseType, { at: s, token: e }), i;
            };
            class_4.prototype.tsParseInterfaceDeclaration = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; if (this.hasFollowingLineBreak())
                return null; this.expectContextual(127), s.declare && (e.declare = !0), R(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Zo)) : (e.id = null, this.raise(w.MissingInterfaceName, { at: this.state.startLoc })), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends")); var i = this.startNode(); return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration"); };
            class_4.prototype.tsParseTypeAliasDeclaration = function (e) {
                var _this_1 = this;
                return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, el), e.typeAnnotation = this.tsInType(function () { if (e.typeParameters = _this_1.tsTryParseTypeParameters(_this_1.tsParseInOutModifiers), _this_1.expect(29), _this_1.isContextual(112) && _this_1.lookahead().type !== 16) {
                    var s = _this_1.startNode();
                    return _this_1.next(), _this_1.finishNode(s, "TSIntrinsicKeyword");
                } return _this_1.tsParseType(); }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
            };
            class_4.prototype.tsInNoContext = function (e) { var s = this.state.context; this.state.context = [s[0]]; try {
                return e();
            }
            finally {
                this.state.context = s;
            } };
            class_4.prototype.tsInType = function (e) { var s = this.state.inType; this.state.inType = !0; try {
                return e();
            }
            finally {
                this.state.inType = s;
            } };
            class_4.prototype.tsInDisallowConditionalTypesContext = function (e) { var s = this.state.inDisallowConditionalTypesContext; this.state.inDisallowConditionalTypesContext = !0; try {
                return e();
            }
            finally {
                this.state.inDisallowConditionalTypesContext = s;
            } };
            class_4.prototype.tsInAllowConditionalTypesContext = function (e) { var s = this.state.inDisallowConditionalTypesContext; this.state.inDisallowConditionalTypesContext = !1; try {
                return e();
            }
            finally {
                this.state.inDisallowConditionalTypesContext = s;
            } };
            class_4.prototype.tsEatThenParseType = function (e) { return this.match(e) ? this.tsNextThenParseType() : void 0; };
            class_4.prototype.tsExpectThenParseType = function (e) {
                var _this_1 = this;
                return this.tsDoThenParseType(function () { return _this_1.expect(e); });
            };
            class_4.prototype.tsNextThenParseType = function () {
                var _this_1 = this;
                return this.tsDoThenParseType(function () { return _this_1.next(); });
            };
            class_4.prototype.tsDoThenParseType = function (e) {
                var _this_1 = this;
                return this.tsInType(function () { return (e(), _this_1.tsParseType()); });
            };
            class_4.prototype.tsParseEnumMember = function () { var e = this.startNode(); return e.id = this.match(131) ? _super_1.prototype.parseStringLiteral.call(this, this.state.value) : this.parseIdentifier(!0), this.eat(29) && (e.initializer = _super_1.prototype.parseMaybeAssignAllowIn.call(this)), this.finishNode(e, "TSEnumMember"); };
            class_4.prototype.tsParseEnumDeclaration = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; return s.const && (e.const = !0), s.declare && (e.declare = !0), this.expectContextual(124), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? sl : Nr), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration"); };
            class_4.prototype.tsParseModuleBlock = function () { var e = this.startNode(); return this.scope.enter(qe), this.expect(5), _super_1.prototype.parseBlockOrModuleBlockBody.call(this, e.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock"); };
            class_4.prototype.tsParseModuleOrNamespaceDeclaration = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, rl), this.eat(16)) {
                var i = this.startNode();
                this.tsParseModuleOrNamespaceDeclaration(i, !0), e.body = i;
            }
            else
                this.scope.enter($e), this.prodParam.enter(ze), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit(); return this.finishNode(e, "TSModuleDeclaration"); };
            class_4.prototype.tsParseAmbientExternalModuleDeclaration = function (e) { return this.isContextual(110) ? (e.global = !0, e.id = this.parseIdentifier()) : this.match(131) ? e.id = _super_1.prototype.parseStringLiteral.call(this, this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter($e), this.prodParam.enter(ze), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration"); };
            class_4.prototype.tsParseImportEqualsDeclaration = function (e, s) { e.isExport = s || !1, e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Xe), this.expect(29); var i = this.tsParseModuleReference(); return e.importKind === "type" && i.type !== "TSExternalModuleReference" && this.raise(w.ImportAliasHasImportType, { at: i }), e.moduleReference = i, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration"); };
            class_4.prototype.tsIsExternalModuleReference = function () { return this.isContextual(117) && this.lookaheadCharCode() === 40; };
            class_4.prototype.tsParseModuleReference = function () { return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1); };
            class_4.prototype.tsParseExternalModuleReference = function () { var e = this.startNode(); return this.expectContextual(117), this.expect(10), this.match(131) || this.unexpected(), e.expression = _super_1.prototype.parseExprAtom.call(this), this.expect(11), this.finishNode(e, "TSExternalModuleReference"); };
            class_4.prototype.tsLookAhead = function (e) { var s = this.state.clone(), i = e(); return this.state = s, i; };
            class_4.prototype.tsTryParseAndCatch = function (e) { var s = this.tryParse(function (i) { return e() || i(); }); if (!(s.aborted || !s.node))
                return s.error && (this.state = s.failState), s.node; };
            class_4.prototype.tsTryParse = function (e) { var s = this.state.clone(), i = e(); if (i !== void 0 && i !== !1)
                return i; this.state = s; };
            class_4.prototype.tsTryParseDeclare = function (e) {
                var _this_1 = this;
                if (this.isLineTerminator())
                    return;
                var s = this.state.type, i;
                return this.isContextual(99) && (s = 74, i = "let"), this.tsInAmbientContext(function () { if (s === 68)
                    return e.declare = !0, _super_1.prototype.parseFunctionStatement.call(_this_1, e, !1, !1); if (s === 80)
                    return e.declare = !0, _this_1.parseClass(e, !0, !1); if (s === 124)
                    return _this_1.tsParseEnumDeclaration(e, { declare: !0 }); if (s === 110)
                    return _this_1.tsParseAmbientExternalModuleDeclaration(e); if (s === 75 || s === 74)
                    return !_this_1.match(75) || !_this_1.isLookaheadContextual("enum") ? (e.declare = !0, _this_1.parseVarStatement(e, i || _this_1.state.value, !0)) : (_this_1.expect(75), _this_1.tsParseEnumDeclaration(e, { const: !0, declare: !0 })); if (s === 127) {
                    var a = _this_1.tsParseInterfaceDeclaration(e, { declare: !0 });
                    if (a)
                        return a;
                } if (R(s))
                    return _this_1.tsParseDeclaration(e, _this_1.state.value, !0, null); });
            };
            class_4.prototype.tsTryParseExportDeclaration = function () { return this.tsParseDeclaration(this.startNode(), this.state.value, !0, null); };
            class_4.prototype.tsParseExpressionStatement = function (e, s, i) { switch (s.name) {
                case "declare": {
                    var a = this.tsTryParseDeclare(e);
                    if (a)
                        return a.declare = !0, a;
                    break;
                }
                case "global":
                    if (this.match(5)) {
                        this.scope.enter($e), this.prodParam.enter(ze);
                        var a = e;
                        return a.global = !0, a.id = s, a.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(a, "TSModuleDeclaration");
                    }
                    break;
                default: return this.tsParseDeclaration(e, s.name, !1, i);
            } };
            class_4.prototype.tsParseDeclaration = function (e, s, i, a) { switch (s) {
                case "abstract":
                    if (this.tsCheckLineTerminator(i) && (this.match(80) || R(this.state.type)))
                        return this.tsParseAbstractDeclaration(e, a);
                    break;
                case "module":
                    if (this.tsCheckLineTerminator(i)) {
                        if (this.match(131))
                            return this.tsParseAmbientExternalModuleDeclaration(e);
                        if (R(this.state.type))
                            return this.tsParseModuleOrNamespaceDeclaration(e);
                    }
                    break;
                case "namespace":
                    if (this.tsCheckLineTerminator(i) && R(this.state.type))
                        return this.tsParseModuleOrNamespaceDeclaration(e);
                    break;
                case "type":
                    if (this.tsCheckLineTerminator(i) && R(this.state.type))
                        return this.tsParseTypeAliasDeclaration(e);
                    break;
            } };
            class_4.prototype.tsCheckLineTerminator = function (e) { return e ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator(); };
            class_4.prototype.tsTryParseGenericAsyncArrowFunction = function (e) {
                var _this_1 = this;
                if (!this.match(47))
                    return;
                var s = this.state.maybeInArrowParameters;
                this.state.maybeInArrowParameters = !0;
                var i = this.tsTryParseAndCatch(function () { var a = _this_1.startNodeAt(e); return a.typeParameters = _this_1.tsParseTypeParameters(_this_1.tsParseConstModifier), _super_1.prototype.parseFunctionParams.call(_this_1, a), a.returnType = _this_1.tsTryParseTypeOrTypePredicateAnnotation(), _this_1.expect(19), a; });
                if (this.state.maybeInArrowParameters = s, !!i)
                    return _super_1.prototype.parseArrowExpression.call(this, i, null, !0);
            };
            class_4.prototype.tsParseTypeArgumentsInExpression = function () { if (this.reScan_lt() === 47)
                return this.tsParseTypeArguments(); };
            class_4.prototype.tsParseTypeArguments = function () {
                var _this_1 = this;
                var e = this.startNode();
                return e.params = this.tsInType(function () { return _this_1.tsInNoContext(function () { return (_this_1.expect(47), _this_1.tsParseDelimitedList("TypeParametersOrArguments", _this_1.tsParseType.bind(_this_1))); }); }), e.params.length === 0 && this.raise(w.EmptyTypeArguments, { at: e }), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
            };
            class_4.prototype.tsIsDeclarationStart = function () { return Wt(this.state.type); };
            class_4.prototype.isExportDefaultSpecifier = function () { return this.tsIsDeclarationStart() ? !1 : _super_1.prototype.isExportDefaultSpecifier.call(this); };
            class_4.prototype.parseAssignableListItem = function (e, s) { var i = this.state.startLoc, a = {}; this.tsParseModifiers({ allowedModifiers: ["public", "private", "protected", "override", "readonly"] }, a); var n = a.accessibility, o = a.override, u = a.readonly; !(e & 4) && (n || u || o) && this.raise(w.UnexpectedParameterModifier, { at: i }); var c = this.parseMaybeDefault(); this.parseAssignableListItemTypes(c, e); var y = this.parseMaybeDefault(c.loc.start, c); if (n || u || o) {
                var g = this.startNodeAt(i);
                return s.length && (g.decorators = s), n && (g.accessibility = n), u && (g.readonly = u), o && (g.override = o), y.type !== "Identifier" && y.type !== "AssignmentPattern" && this.raise(w.UnsupportedParameterPropertyKind, { at: g }), g.parameter = y, this.finishNode(g, "TSParameterProperty");
            } return s.length && (c.decorators = s), y; };
            class_4.prototype.isSimpleParameter = function (e) { return e.type === "TSParameterProperty" && _super_1.prototype.isSimpleParameter.call(this, e.parameter) || _super_1.prototype.isSimpleParameter.call(this, e); };
            class_4.prototype.tsDisallowOptionalPattern = function (e) {
                var e_16, _b;
                try {
                    for (var _g = __values(e.params), _j = _g.next(); !_j.done; _j = _g.next()) {
                        var s = _j.value;
                        s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(w.PatternIsOptional, { at: s });
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            };
            class_4.prototype.setArrowFunctionParameters = function (e, s, i) { _super_1.prototype.setArrowFunctionParameters.call(this, e, s, i), this.tsDisallowOptionalPattern(e); };
            class_4.prototype.parseFunctionBodyAndFinish = function (e, s) { var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14)); var a = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0; return a && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, a) : a === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(w.DeclareFunctionHasImplementation, { at: e }), e.declare) ? _super_1.prototype.parseFunctionBodyAndFinish.call(this, e, a, i) : (this.tsDisallowOptionalPattern(e), _super_1.prototype.parseFunctionBodyAndFinish.call(this, e, s, i)); };
            class_4.prototype.registerFunctionStatementId = function (e) { !e.body && e.id ? this.checkIdentifier(e.id, kr) : _super_1.prototype.registerFunctionStatementId.call(this, e); };
            class_4.prototype.tsCheckForInvalidTypeCasts = function (e) {
                var _this_1 = this;
                e.forEach(function (s) { (s == null ? void 0 : s.type) === "TSTypeCastExpression" && _this_1.raise(w.UnexpectedTypeAnnotation, { at: s.typeAnnotation }); });
            };
            class_4.prototype.toReferencedList = function (e, s) { return this.tsCheckForInvalidTypeCasts(e), e; };
            class_4.prototype.parseArrayLike = function (e, s, i, a) { var n = _super_1.prototype.parseArrayLike.call(this, e, s, i, a); return n.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(n.elements), n; };
            class_4.prototype.parseSubscript = function (e, s, i, a) {
                var _this_1 = this;
                if (!this.hasPrecedingLineBreak() && this.match(35)) {
                    this.state.canStartJSXElement = !1, this.next();
                    var o = this.startNodeAt(s);
                    return o.expression = e, this.finishNode(o, "TSNonNullExpression");
                }
                var n = !1;
                if (this.match(18) && this.lookaheadCharCode() === 60) {
                    if (i)
                        return a.stop = !0, e;
                    a.optionalChainMember = n = !0, this.next();
                }
                if (this.match(47) || this.match(51)) {
                    var o_1, u = this.tsTryParseAndCatch(function () { if (!i && _this_1.atPossibleAsyncArrow(e)) {
                        var T = _this_1.tsTryParseGenericAsyncArrowFunction(s);
                        if (T)
                            return T;
                    } var c = _this_1.tsParseTypeArgumentsInExpression(); if (!c)
                        return; if (n && !_this_1.match(10)) {
                        o_1 = _this_1.state.curPosition();
                        return;
                    } if (ct(_this_1.state.type)) {
                        var T = _super_1.prototype.parseTaggedTemplateExpression.call(_this_1, e, s, a);
                        return T.typeParameters = c, T;
                    } if (!i && _this_1.eat(10)) {
                        var T = _this_1.startNodeAt(s);
                        return T.callee = e, T.arguments = _this_1.parseCallExpressionArguments(11, !1), _this_1.tsCheckForInvalidTypeCasts(T.arguments), T.typeParameters = c, a.optionalChainMember && (T.optional = n), _this_1.finishCallExpression(T, a.optionalChainMember);
                    } var y = _this_1.state.type; if (y === 48 || y === 52 || y !== 10 && X(y) && !_this_1.hasPrecedingLineBreak())
                        return; var g = _this_1.startNodeAt(s); return g.expression = e, g.typeParameters = c, _this_1.finishNode(g, "TSInstantiationExpression"); });
                    if (o_1 && this.unexpected(o_1, 10), u)
                        return u.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(w.InvalidPropertyAccessAfterInstantiationExpression, { at: this.state.startLoc }), u;
                }
                return _super_1.prototype.parseSubscript.call(this, e, s, i, a);
            };
            class_4.prototype.parseNewCallee = function (e) { var s; _super_1.prototype.parseNewCallee.call(this, e); var i = e.callee; i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression); };
            class_4.prototype.parseExprOp = function (e, s, i) {
                var _this_1 = this;
                var a;
                if (Re(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (a = this.isContextual(118)))) {
                    var n = this.startNodeAt(s);
                    return n.expression = e, n.typeAnnotation = this.tsInType(function () { return (_this_1.next(), _this_1.match(75) ? (a && _this_1.raise(p.UnexpectedKeyword, { at: _this_1.state.startLoc, keyword: "const" }), _this_1.tsParseTypeReference()) : _this_1.tsParseType()); }), this.finishNode(n, a ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
                }
                return _super_1.prototype.parseExprOp.call(this, e, s, i);
            };
            class_4.prototype.checkReservedWord = function (e, s, i, a) { this.state.isAmbientContext || _super_1.prototype.checkReservedWord.call(this, e, s, i, a); };
            class_4.prototype.checkImportReflection = function (e) { _super_1.prototype.checkImportReflection.call(this, e), e.module && e.importKind !== "value" && this.raise(w.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start }); };
            class_4.prototype.checkDuplicateExports = function () { };
            class_4.prototype.parseImport = function (e) { if (e.importKind = "value", R(this.state.type) || this.match(55) || this.match(5)) {
                var i = this.lookahead();
                if (this.isContextual(128) && i.type !== 12 && i.type !== 97 && i.type !== 29 && (e.importKind = "type", this.next(), i = this.lookahead()), R(this.state.type) && i.type === 29)
                    return this.tsParseImportEqualsDeclaration(e);
            } var s = _super_1.prototype.parseImport.call(this, e); return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(w.TypeImportCannotSpecifyDefaultAndNamed, { at: s }), s; };
            class_4.prototype.parseExport = function (e, s) { if (this.match(83))
                return this.next(), this.isContextual(128) && this.lookaheadCharCode() !== 61 ? (e.importKind = "type", this.next()) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, !0); if (this.eat(29)) {
                var i = e;
                return i.expression = _super_1.prototype.parseExpression.call(this), this.semicolon(), this.finishNode(i, "TSExportAssignment");
            }
            else if (this.eatContextual(93)) {
                var i = e;
                return this.expectContextual(126), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
            }
            else {
                if (e.exportKind = "value", this.isContextual(128)) {
                    var i = this.lookaheadCharCode();
                    (i === 123 || i === 42) && (this.next(), e.exportKind = "type");
                }
                return _super_1.prototype.parseExport.call(this, e, s);
            } };
            class_4.prototype.isAbstractClass = function () { return this.isContextual(122) && this.lookahead().type === 80; };
            class_4.prototype.parseExportDefaultExpression = function () { if (this.isAbstractClass()) {
                var e = this.startNode();
                return this.next(), e.abstract = !0, this.parseClass(e, !0, !0);
            } if (this.match(127)) {
                var e = this.tsParseInterfaceDeclaration(this.startNode());
                if (e)
                    return e;
            } return _super_1.prototype.parseExportDefaultExpression.call(this); };
            class_4.prototype.parseVarStatement = function (e, s) {
                var e_17, _b;
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = this.state.isAmbientContext, n = _super_1.prototype.parseVarStatement.call(this, e, s, i || a);
                if (!a)
                    return n;
                try {
                    for (var _g = __values(n.declarations), _j = _g.next(); !_j.done; _j = _g.next()) {
                        var _k = _j.value, o = _k.id, u = _k.init;
                        u && (s !== "const" || o.typeAnnotation ? this.raise(w.InitializerNotAllowedInAmbientContext, { at: u }) : Zl(u, this.hasPlugin("estree")) || this.raise(w.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, { at: u }));
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
                return n;
            };
            class_4.prototype.parseStatementContent = function (e, s) { if (this.match(75) && this.isLookaheadContextual("enum")) {
                var i = this.startNode();
                return this.expect(75), this.tsParseEnumDeclaration(i, { const: !0 });
            } if (this.isContextual(124))
                return this.tsParseEnumDeclaration(this.startNode()); if (this.isContextual(127)) {
                var i = this.tsParseInterfaceDeclaration(this.startNode());
                if (i)
                    return i;
            } return _super_1.prototype.parseStatementContent.call(this, e, s); };
            class_4.prototype.parseAccessModifier = function () { return this.tsParseModifier(["public", "protected", "private"]); };
            class_4.prototype.tsHasSomeModifiers = function (e, s) { return s.some(function (i) { return Gr(i) ? e.accessibility === i : !!e[i]; }); };
            class_4.prototype.tsIsStartOfStaticBlocks = function () { return this.isContextual(104) && this.lookaheadCharCode() === 123; };
            class_4.prototype.parseClassMember = function (e, s, i) {
                var _this_1 = this;
                var a = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
                this.tsParseModifiers({ allowedModifiers: a, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: w.InvalidModifierOnTypeParameterPositions }, s);
                var n = function () { _this_1.tsIsStartOfStaticBlocks() ? (_this_1.next(), _this_1.next(), _this_1.tsHasSomeModifiers(s, a) && _this_1.raise(w.StaticBlockCannotHaveModifier, { at: _this_1.state.curPosition() }), _super_1.prototype.parseClassStaticBlock.call(_this_1, e, s)) : _this_1.parseClassMemberWithIsStatic(e, s, i, !!s.static); };
                s.declare ? this.tsInAmbientContext(n) : n();
            };
            class_4.prototype.parseClassMemberWithIsStatic = function (e, s, i, a) { var n = this.tsTryParseIndexSignature(s); if (n) {
                e.body.push(n), s.abstract && this.raise(w.IndexSignatureHasAbstract, { at: s }), s.accessibility && this.raise(w.IndexSignatureHasAccessibility, { at: s, modifier: s.accessibility }), s.declare && this.raise(w.IndexSignatureHasDeclare, { at: s }), s.override && this.raise(w.IndexSignatureHasOverride, { at: s });
                return;
            } !this.state.inAbstractClass && s.abstract && this.raise(w.NonAbstractClassHasAbstractMethod, { at: s }), s.override && (i.hadSuperClass || this.raise(w.OverrideNotInSubClass, { at: s })), _super_1.prototype.parseClassMemberWithIsStatic.call(this, e, s, i, a); };
            class_4.prototype.parsePostMemberNameModifiers = function (e) { this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(w.ClassMethodHasReadonly, { at: e }), e.declare && this.match(10) && this.raise(w.ClassMethodHasDeclare, { at: e }); };
            class_4.prototype.parseExpressionStatement = function (e, s, i) { return (s.type === "Identifier" ? this.tsParseExpressionStatement(e, s, i) : void 0) || _super_1.prototype.parseExpressionStatement.call(this, e, s, i); };
            class_4.prototype.shouldParseExportDeclaration = function () { return this.tsIsDeclarationStart() ? !0 : _super_1.prototype.shouldParseExportDeclaration.call(this); };
            class_4.prototype.parseConditional = function (e, s, i) {
                var _this_1 = this;
                if (!this.state.maybeInArrowParameters || !this.match(17))
                    return _super_1.prototype.parseConditional.call(this, e, s, i);
                var a = this.tryParse(function () { return _super_1.prototype.parseConditional.call(_this_1, e, s); });
                return a.node ? (a.error && (this.state = a.failState), a.node) : (a.error && _super_1.prototype.setOptionalParametersError.call(this, i, a.error), e);
            };
            class_4.prototype.parseParenItem = function (e, s) { if (e = _super_1.prototype.parseParenItem.call(this, e, s), this.eat(17) && (e.optional = !0, this.resetEndLocation(e)), this.match(14)) {
                var i = this.startNodeAt(s);
                return i.expression = e, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
            } return e; };
            class_4.prototype.parseExportDeclaration = function (e) {
                var _this_1 = this;
                if (!this.state.isAmbientContext && this.isContextual(123))
                    return this.tsInAmbientContext(function () { return _this_1.parseExportDeclaration(e); });
                var s = this.state.startLoc, i = this.eatContextual(123);
                if (i && (this.isContextual(123) || !this.shouldParseExportDeclaration()))
                    throw this.raise(w.ExpectedAmbientAfterExportDeclare, { at: this.state.startLoc });
                var n = R(this.state.type) && this.tsTryParseExportDeclaration() || _super_1.prototype.parseExportDeclaration.call(this, e);
                return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && (this.resetStartLocation(n, s), n.declare = !0), n) : null;
            };
            class_4.prototype.parseClassId = function (e, s, i, a) { if ((!s || i) && this.isContextual(111))
                return; _super_1.prototype.parseClassId.call(this, e, s, i, e.declare ? kr : wr); var n = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers); n && (e.typeParameters = n); };
            class_4.prototype.parseClassPropertyAnnotation = function (e) { e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0)); var s = this.tsTryParseTypeAnnotation(); s && (e.typeAnnotation = s); };
            class_4.prototype.parseClassProperty = function (e) { if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(w.DeclareClassFieldHasInitializer, { at: this.state.startLoc }), e.abstract && this.match(29)) {
                var s = e.key;
                this.raise(w.AbstractPropertyHasInitializer, { at: this.state.startLoc, propertyName: s.type === "Identifier" && !e.computed ? s.name : "[".concat(this.input.slice(s.start, s.end), "]") });
            } return _super_1.prototype.parseClassProperty.call(this, e); };
            class_4.prototype.parseClassPrivateProperty = function (e) { return e.abstract && this.raise(w.PrivateElementHasAbstract, { at: e }), e.accessibility && this.raise(w.PrivateElementHasAccessibility, { at: e, modifier: e.accessibility }), this.parseClassPropertyAnnotation(e), _super_1.prototype.parseClassPrivateProperty.call(this, e); };
            class_4.prototype.parseClassAccessorProperty = function (e) { return this.parseClassPropertyAnnotation(e), e.optional && this.raise(w.AccessorCannotBeOptional, { at: e }), _super_1.prototype.parseClassAccessorProperty.call(this, e); };
            class_4.prototype.pushClassMethod = function (e, s, i, a, n, o) { var u = this.tsTryParseTypeParameters(this.tsParseConstModifier); u && n && this.raise(w.ConstructorHasTypeParameters, { at: u }); var _b = s.declare, c = _b === void 0 ? !1 : _b, y = s.kind; c && (y === "get" || y === "set") && this.raise(w.DeclareAccessor, { at: s, kind: y }), u && (s.typeParameters = u), _super_1.prototype.pushClassMethod.call(this, e, s, i, a, n, o); };
            class_4.prototype.pushClassPrivateMethod = function (e, s, i, a) { var n = this.tsTryParseTypeParameters(this.tsParseConstModifier); n && (s.typeParameters = n), _super_1.prototype.pushClassPrivateMethod.call(this, e, s, i, a); };
            class_4.prototype.declareClassPrivateMethodInScope = function (e, s) { e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !e.value.body || _super_1.prototype.declareClassPrivateMethodInScope.call(this, e, s)); };
            class_4.prototype.parseClassSuper = function (e) { _super_1.prototype.parseClassSuper.call(this, e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(111) && (e.implements = this.tsParseHeritageClause("implements")); };
            class_4.prototype.parseObjPropValue = function (e, s, i, a, n, o, u) { var c = this.tsTryParseTypeParameters(this.tsParseConstModifier); return c && (e.typeParameters = c), _super_1.prototype.parseObjPropValue.call(this, e, s, i, a, n, o, u); };
            class_4.prototype.parseFunctionParams = function (e, s) { var i = this.tsTryParseTypeParameters(this.tsParseConstModifier); i && (e.typeParameters = i), _super_1.prototype.parseFunctionParams.call(this, e, s); };
            class_4.prototype.parseVarId = function (e, s) { _super_1.prototype.parseVarId.call(this, e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0); var i = this.tsTryParseTypeAnnotation(); i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id)); };
            class_4.prototype.parseAsyncArrowFromCallExpression = function (e, s) { return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), _super_1.prototype.parseAsyncArrowFromCallExpression.call(this, e, s); };
            class_4.prototype.parseMaybeAssign = function (e, s) {
                var _this_1 = this;
                var i, a, n, o, u, c, y;
                var g, T, C;
                if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                    if (g = this.state.clone(), T = this.tryParse(function () { return _super_1.prototype.parseMaybeAssign.call(_this_1, e, s); }, g), !T.error)
                        return T.node;
                    var G = this.state.context, J = G[G.length - 1];
                    (J === x.j_oTag || J === x.j_expr) && G.pop();
                }
                if (!((i = T) != null && i.error) && !this.match(47))
                    return _super_1.prototype.parseMaybeAssign.call(this, e, s);
                (!g || g === this.state) && (g = this.state.clone());
                var j, q = this.tryParse(function (G) { var J, K; j = _this_1.tsParseTypeParameters(_this_1.tsParseConstModifier); var Z = _super_1.prototype.parseMaybeAssign.call(_this_1, e, s); return (Z.type !== "ArrowFunctionExpression" || (J = Z.extra) != null && J.parenthesized) && G(), ((K = j) == null ? void 0 : K.params.length) !== 0 && _this_1.resetStartLocationFromNode(Z, j), Z.typeParameters = j, Z; }, g);
                if (!q.error && !q.aborted)
                    return j && this.reportReservedArrowTypeParam(j), q.node;
                if (!T && (Wr(!this.hasPlugin("jsx")), C = this.tryParse(function () { return _super_1.prototype.parseMaybeAssign.call(_this_1, e, s); }, g), !C.error))
                    return C.node;
                if ((a = T) != null && a.node)
                    return this.state = T.failState, T.node;
                if (q.node)
                    return this.state = q.failState, j && this.reportReservedArrowTypeParam(j), q.node;
                if ((n = C) != null && n.node)
                    return this.state = C.failState, C.node;
                throw (o = T) != null && o.thrown ? T.error : q.thrown ? q.error : (u = C) != null && u.thrown ? C.error : ((c = T) == null ? void 0 : c.error) || q.error || ((y = C) == null ? void 0 : y.error);
            };
            class_4.prototype.reportReservedArrowTypeParam = function (e) { var s; e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(w.ReservedArrowTypeParam, { at: e }); };
            class_4.prototype.parseMaybeUnary = function (e, s) { return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : _super_1.prototype.parseMaybeUnary.call(this, e, s); };
            class_4.prototype.parseArrow = function (e) {
                var _this_1 = this;
                if (this.match(14)) {
                    var s = this.tryParse(function (i) { var a = _this_1.tsParseTypeOrTypePredicateAnnotation(14); return (_this_1.canInsertSemicolon() || !_this_1.match(19)) && i(), a; });
                    if (s.aborted)
                        return;
                    s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
                }
                return _super_1.prototype.parseArrow.call(this, e);
            };
            class_4.prototype.parseAssignableListItemTypes = function (e, s) { if (!(s & 2))
                return e; this.eat(17) && (e.optional = !0); var i = this.tsTryParseTypeAnnotation(); return i && (e.typeAnnotation = i), this.resetEndLocation(e), e; };
            class_4.prototype.isAssignable = function (e, s) { switch (e.type) {
                case "TSTypeCastExpression": return this.isAssignable(e.expression, s);
                case "TSParameterProperty": return !0;
                default: return _super_1.prototype.isAssignable.call(this, e, s);
            } };
            class_4.prototype.toAssignable = function (e) { var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; switch (e.type) {
                case "ParenthesizedExpression":
                    this.toAssignableParenthesizedExpression(e, s);
                    break;
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "TSTypeAssertion":
                    s ? this.expressionScope.recordArrowParameterBindingError(w.UnexpectedTypeCastInParameter, { at: e }) : this.raise(w.UnexpectedTypeCastInParameter, { at: e }), this.toAssignable(e.expression, s);
                    break;
                case "AssignmentExpression": !s && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
                default: _super_1.prototype.toAssignable.call(this, e, s);
            } };
            class_4.prototype.toAssignableParenthesizedExpression = function (e, s) { switch (e.expression.type) {
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "TSTypeAssertion":
                case "ParenthesizedExpression":
                    this.toAssignable(e.expression, s);
                    break;
                default: _super_1.prototype.toAssignable.call(this, e, s);
            } };
            class_4.prototype.checkToRestConversion = function (e, s) { switch (e.type) {
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSTypeAssertion":
                case "TSNonNullExpression":
                    this.checkToRestConversion(e.expression, !1);
                    break;
                default: _super_1.prototype.checkToRestConversion.call(this, e, s);
            } };
            class_4.prototype.isValidLVal = function (e, s, i) { return Wl({ TSTypeCastExpression: !0, TSParameterProperty: "parameter", TSNonNullExpression: "expression", TSAsExpression: (i !== be || !s) && ["expression", !0], TSSatisfiesExpression: (i !== be || !s) && ["expression", !0], TSTypeAssertion: (i !== be || !s) && ["expression", !0] }, e) || _super_1.prototype.isValidLVal.call(this, e, s, i); };
            class_4.prototype.parseBindingAtom = function () { switch (this.state.type) {
                case 78: return this.parseIdentifier(!0);
                default: return _super_1.prototype.parseBindingAtom.call(this);
            } };
            class_4.prototype.parseMaybeDecoratorArguments = function (e) { if (this.match(47) || this.match(51)) {
                var s = this.tsParseTypeArgumentsInExpression();
                if (this.match(10)) {
                    var i = _super_1.prototype.parseMaybeDecoratorArguments.call(this, e);
                    return i.typeParameters = s, i;
                }
                this.unexpected(null, 10);
            } return _super_1.prototype.parseMaybeDecoratorArguments.call(this, e); };
            class_4.prototype.checkCommaAfterRest = function (e) { return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), !1) : _super_1.prototype.checkCommaAfterRest.call(this, e); };
            class_4.prototype.isClassMethod = function () { return this.match(47) || _super_1.prototype.isClassMethod.call(this); };
            class_4.prototype.isClassProperty = function () { return this.match(35) || this.match(14) || _super_1.prototype.isClassProperty.call(this); };
            class_4.prototype.parseMaybeDefault = function (e, s) { var i = _super_1.prototype.parseMaybeDefault.call(this, e, s); return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(w.TypeAnnotationAfterAssign, { at: i.typeAnnotation }), i; };
            class_4.prototype.getTokenFromCode = function (e) { if (this.state.inType) {
                if (e === 62) {
                    this.finishOp(48, 1);
                    return;
                }
                if (e === 60) {
                    this.finishOp(47, 1);
                    return;
                }
            } _super_1.prototype.getTokenFromCode.call(this, e); };
            class_4.prototype.reScan_lt_gt = function () { var e = this.state.type; e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt()); };
            class_4.prototype.reScan_lt = function () { var e = this.state.type; return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e; };
            class_4.prototype.toAssignableList = function (e, s, i) { for (var a = 0; a < e.length; a++) {
                var n = e[a];
                (n == null ? void 0 : n.type) === "TSTypeCastExpression" && (e[a] = this.typeCastToParameter(n));
            } _super_1.prototype.toAssignableList.call(this, e, s, i); };
            class_4.prototype.typeCastToParameter = function (e) { return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression; };
            class_4.prototype.shouldParseArrow = function (e) {
                var _this_1 = this;
                return this.match(14) ? e.every(function (s) { return _this_1.isAssignable(s, !0); }) : _super_1.prototype.shouldParseArrow.call(this, e);
            };
            class_4.prototype.shouldParseAsyncArrow = function () { return this.match(14) || _super_1.prototype.shouldParseAsyncArrow.call(this); };
            class_4.prototype.canHaveLeadingDecorator = function () { return _super_1.prototype.canHaveLeadingDecorator.call(this) || this.isAbstractClass(); };
            class_4.prototype.jsxParseOpeningElementAfterName = function (e) {
                var _this_1 = this;
                if (this.match(47) || this.match(51)) {
                    var s = this.tsTryParseAndCatch(function () { return _this_1.tsParseTypeArgumentsInExpression(); });
                    s && (e.typeParameters = s);
                }
                return _super_1.prototype.jsxParseOpeningElementAfterName.call(this, e);
            };
            class_4.prototype.getGetterSetterExpectedParamCount = function (e) { var s = _super_1.prototype.getGetterSetterExpectedParamCount.call(this, e), a = this.getObjectOrClassMethodParams(e)[0]; return a && this.isThisParam(a) ? s + 1 : s; };
            class_4.prototype.parseCatchClauseParam = function () { var e = _super_1.prototype.parseCatchClauseParam.call(this), s = this.tsTryParseTypeAnnotation(); return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e; };
            class_4.prototype.tsInAmbientContext = function (e) { var s = this.state.isAmbientContext; this.state.isAmbientContext = !0; try {
                return e();
            }
            finally {
                this.state.isAmbientContext = s;
            } };
            class_4.prototype.parseClass = function (e, s, i) { var a = this.state.inAbstractClass; this.state.inAbstractClass = !!e.abstract; try {
                return _super_1.prototype.parseClass.call(this, e, s, i);
            }
            finally {
                this.state.inAbstractClass = a;
            } };
            class_4.prototype.tsParseAbstractDeclaration = function (e, s) { if (this.match(80))
                return e.abstract = !0, this.maybeTakeDecorators(s, this.parseClass(e, !0, !1)); if (this.isContextual(127)) {
                if (!this.hasFollowingLineBreak())
                    return e.abstract = !0, this.raise(w.NonClassMethodPropertyHasAbstractModifer, { at: e }), this.tsParseInterfaceDeclaration(e);
            }
            else
                this.unexpected(null, 80); };
            class_4.prototype.parseMethod = function (e, s, i, a, n, o, u) { var c = _super_1.prototype.parseMethod.call(this, e, s, i, a, n, o, u); if (c.abstract && (this.hasPlugin("estree") ? !!c.value.body : !!c.body)) {
                var g = c.key;
                this.raise(w.AbstractMethodHasImplementation, { at: c, methodName: g.type === "Identifier" && !c.computed ? g.name : "[".concat(this.input.slice(g.start, g.end), "]") });
            } return c; };
            class_4.prototype.tsParseTypeParameterName = function () { return this.parseIdentifier().name; };
            class_4.prototype.shouldParseAsAmbientContext = function () { return !!this.getPluginOption("typescript", "dts"); };
            class_4.prototype.parse = function () { return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), _super_1.prototype.parse.call(this); };
            class_4.prototype.getExpression = function () { return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), _super_1.prototype.getExpression.call(this); };
            class_4.prototype.parseExportSpecifier = function (e, s, i, a) { return !s && a ? (this.parseTypeOnlyImportExportSpecifier(e, !1, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", _super_1.prototype.parseExportSpecifier.call(this, e, s, i, a)); };
            class_4.prototype.parseImportSpecifier = function (e, s, i, a, n) { return !s && a ? (this.parseTypeOnlyImportExportSpecifier(e, !0, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", _super_1.prototype.parseImportSpecifier.call(this, e, s, i, a, i ? Dr : Xe)); };
            class_4.prototype.parseTypeOnlyImportExportSpecifier = function (e, s, i) { var a = s ? "imported" : "local", n = s ? "local" : "exported", o = e[a], u, c = !1, y = !0, g = o.loc.start; if (this.isContextual(93)) {
                var C = this.parseIdentifier();
                if (this.isContextual(93)) {
                    var j = this.parseIdentifier();
                    se(this.state.type) ? (c = !0, o = C, u = s ? this.parseIdentifier() : this.parseModuleExportName(), y = !1) : (u = j, y = !1);
                }
                else
                    se(this.state.type) ? (y = !1, u = s ? this.parseIdentifier() : this.parseModuleExportName()) : (c = !0, o = C);
            }
            else
                se(this.state.type) && (c = !0, s ? (o = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, !0, !0)) : o = this.parseModuleExportName()); c && i && this.raise(s ? w.TypeModifierIsUsedInTypeImports : w.TypeModifierIsUsedInTypeExports, { at: g }), e[a] = o, e[n] = u; var T = s ? "importKind" : "exportKind"; e[T] = c ? "type" : "value", y && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = Te(e[a])), s && this.checkIdentifier(e[n], c ? Dr : Xe); };
            return class_4;
        }(t)); };
        function Ql(t) { if (t.type !== "MemberExpression")
            return !1; var r = t.computed, e = t.property; return r && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : Xr(t.object); }
        function Zl(t, r) { var e; var s = t.type; if ((e = t.extra) != null && e.parenthesized)
            return !1; if (r) {
            if (s === "Literal") {
                var i = t.value;
                if (typeof i == "string" || typeof i == "boolean")
                    return !0;
            }
        }
        else if (s === "StringLiteral" || s === "BooleanLiteral")
            return !0; return !!(Jr(t, r) || eh(t, r) || s === "TemplateLiteral" && t.expressions.length === 0 || Ql(t)); }
        function Jr(t, r) { return r ? t.type === "Literal" && (typeof t.value == "number" || "bigint" in t) : t.type === "NumericLiteral" || t.type === "BigIntLiteral"; }
        function eh(t, r) { if (t.type === "UnaryExpression") {
            var e = t.operator, s = t.argument;
            if (e === "-" && Jr(s, r))
                return !0;
        } return !1; }
        function Xr(t) { return t.type === "Identifier" ? !0 : t.type !== "MemberExpression" || t.computed ? !1 : Xr(t.object); }
        var Yr = ge(templateObject_5 || (templateObject_5 = __makeTemplateObject(["placeholders"], ["placeholders"])))({ ClassNameIsRequired: "A class name is required.", UnexpectedSpace: "Unexpected space in placeholder." }), th = function (t) { return /** @class */ (function (_super_1) {
            __extends(class_5, _super_1);
            function class_5() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            class_5.prototype.parsePlaceholder = function (e) { if (this.match(142)) {
                var s = this.startNode();
                return this.next(), this.assertNoSpace(), s.name = _super_1.prototype.parseIdentifier.call(this, !0), this.assertNoSpace(), this.expect(142), this.finishPlaceholder(s, e);
            } };
            class_5.prototype.finishPlaceholder = function (e, s) { var i = !!(e.expectedNode && e.type === "Placeholder"); return e.expectedNode = s, i ? e : this.finishNode(e, "Placeholder"); };
            class_5.prototype.getTokenFromCode = function (e) { e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(142, 2) : _super_1.prototype.getTokenFromCode.call(this, e); };
            class_5.prototype.parseExprAtom = function (e) { return this.parsePlaceholder("Expression") || _super_1.prototype.parseExprAtom.call(this, e); };
            class_5.prototype.parseIdentifier = function (e) { return this.parsePlaceholder("Identifier") || _super_1.prototype.parseIdentifier.call(this, e); };
            class_5.prototype.checkReservedWord = function (e, s, i, a) { e !== void 0 && _super_1.prototype.checkReservedWord.call(this, e, s, i, a); };
            class_5.prototype.parseBindingAtom = function () { return this.parsePlaceholder("Pattern") || _super_1.prototype.parseBindingAtom.call(this); };
            class_5.prototype.isValidLVal = function (e, s, i) { return e === "Placeholder" || _super_1.prototype.isValidLVal.call(this, e, s, i); };
            class_5.prototype.toAssignable = function (e, s) { e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : _super_1.prototype.toAssignable.call(this, e, s); };
            class_5.prototype.chStartsBindingIdentifier = function (e, s) { return !!(_super_1.prototype.chStartsBindingIdentifier.call(this, e, s) || this.lookahead().type === 142); };
            class_5.prototype.verifyBreakContinue = function (e, s) { e.label && e.label.type === "Placeholder" || _super_1.prototype.verifyBreakContinue.call(this, e, s); };
            class_5.prototype.parseExpressionStatement = function (e, s) { if (s.type !== "Placeholder" || s.extra && s.extra.parenthesized)
                return _super_1.prototype.parseExpressionStatement.call(this, e, s); if (this.match(14)) {
                var i = e;
                return i.label = this.finishPlaceholder(s, "Identifier"), this.next(), i.body = _super_1.prototype.parseStatementOrSloppyAnnexBFunctionDeclaration.call(this), this.finishNode(i, "LabeledStatement");
            } return this.semicolon(), e.name = s.name, this.finishPlaceholder(e, "Statement"); };
            class_5.prototype.parseBlock = function (e, s, i) { return this.parsePlaceholder("BlockStatement") || _super_1.prototype.parseBlock.call(this, e, s, i); };
            class_5.prototype.parseFunctionId = function (e) { return this.parsePlaceholder("Identifier") || _super_1.prototype.parseFunctionId.call(this, e); };
            class_5.prototype.parseClass = function (e, s, i) { var a = s ? "ClassDeclaration" : "ClassExpression"; this.next(); var n = this.state.strict, o = this.parsePlaceholder("Identifier"); if (o)
                if (this.match(81) || this.match(142) || this.match(5))
                    e.id = o;
                else {
                    if (i || !s)
                        return e.id = null, e.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(e, a);
                    throw this.raise(Yr.ClassNameIsRequired, { at: this.state.startLoc });
                }
            else
                this.parseClassId(e, s, i); return _super_1.prototype.parseClassSuper.call(this, e), e.body = this.parsePlaceholder("ClassBody") || _super_1.prototype.parseClassBody.call(this, !!e.superClass, n), this.finishNode(e, a); };
            class_5.prototype.parseExport = function (e, s) { var i = this.parsePlaceholder("Identifier"); if (!i)
                return _super_1.prototype.parseExport.call(this, e, s); if (!this.isContextual(97) && !this.match(12))
                return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(e, "ExportNamedDeclaration"); this.expectPlugin("exportDefaultFrom"); var a = this.startNode(); return a.exported = i, e.specifiers = [this.finishNode(a, "ExportDefaultSpecifier")], _super_1.prototype.parseExport.call(this, e, s); };
            class_5.prototype.isExportDefaultSpecifier = function () { if (this.match(65)) {
                var e = this.nextTokenStart();
                if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Y(142), this.nextTokenStartSince(e + 4)))
                    return !0;
            } return _super_1.prototype.isExportDefaultSpecifier.call(this); };
            class_5.prototype.maybeParseExportDefaultSpecifier = function (e) { return e.specifiers && e.specifiers.length > 0 ? !0 : _super_1.prototype.maybeParseExportDefaultSpecifier.call(this, e); };
            class_5.prototype.checkExport = function (e) { var s = e.specifiers; s != null && s.length && (e.specifiers = s.filter(function (i) { return i.exported.type === "Placeholder"; })), _super_1.prototype.checkExport.call(this, e), e.specifiers = s; };
            class_5.prototype.parseImport = function (e) { var s = this.parsePlaceholder("Identifier"); if (!s)
                return _super_1.prototype.parseImport.call(this, e); if (e.specifiers = [], !this.isContextual(97) && !this.match(12))
                return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration"); var i = this.startNodeAtNode(s); return i.local = s, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(97), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration"); };
            class_5.prototype.parseImportSource = function () { return this.parsePlaceholder("StringLiteral") || _super_1.prototype.parseImportSource.call(this); };
            class_5.prototype.assertNoSpace = function () { this.state.start > this.state.lastTokEndLoc.index && this.raise(Yr.UnexpectedSpace, { at: this.state.lastTokEndLoc }); };
            return class_5;
        }(t)); }, sh = function (t) { return /** @class */ (function (_super_1) {
            __extends(class_6, _super_1);
            function class_6() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            class_6.prototype.parseV8Intrinsic = function () { if (this.match(54)) {
                var e = this.state.startLoc, s = this.startNode();
                if (this.next(), R(this.state.type)) {
                    var i = this.parseIdentifierName(), a = this.createIdentifier(s, i);
                    if (a.type = "V8IntrinsicIdentifier", this.match(10))
                        return a;
                }
                this.unexpected(e);
            } };
            class_6.prototype.parseExprAtom = function (e) { return this.parseV8Intrinsic() || _super_1.prototype.parseExprAtom.call(this, e); };
            return class_6;
        }(t)); };
        function Q(t, r) { var _b = __read(typeof r == "string" ? [r, {}] : r, 2), e = _b[0], s = _b[1], i = Object.keys(s), a = i.length === 0; return t.some(function (n) {
            var e_18, _b;
            if (typeof n == "string")
                return a && n === e;
            {
                var _g = __read(n, 2), o = _g[0], u = _g[1];
                if (o !== e)
                    return !1;
                try {
                    for (var i_1 = __values(i), i_1_1 = i_1.next(); !i_1_1.done; i_1_1 = i_1.next()) {
                        var c = i_1_1.value;
                        if (u[c] !== s[c])
                            return !1;
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (i_1_1 && !i_1_1.done && (_b = i_1.return)) _b.call(i_1);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                return !0;
            }
        }); }
        function Le(t, r, e) { var s = t.find(function (i) { return Array.isArray(i) ? i[0] === r : i === r; }); return s && Array.isArray(s) && s.length > 1 ? s[1][e] : null; }
        var Qr = ["minimal", "fsharp", "hack", "smart"], Zr = ["^^", "@@", "^", "%", "#"], ei = ["hash", "bar"];
        function rh(t) { if (Q(t, "decorators")) {
            if (Q(t, "decorators-legacy"))
                throw new Error("Cannot use the decorators and decorators-legacy plugin together");
            var r = Le(t, "decorators", "decoratorsBeforeExport");
            if (r != null && typeof r != "boolean")
                throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
            var e = Le(t, "decorators", "allowCallParenthesized");
            if (e != null && typeof e != "boolean")
                throw new Error("'allowCallParenthesized' must be a boolean.");
        } if (Q(t, "flow") && Q(t, "typescript"))
            throw new Error("Cannot combine flow and typescript plugins."); if (Q(t, "placeholders") && Q(t, "v8intrinsic"))
            throw new Error("Cannot combine placeholders and v8intrinsic plugins."); if (Q(t, "pipelineOperator")) {
            var r = Le(t, "pipelineOperator", "proposal");
            if (!Qr.includes(r)) {
                var s = Qr.map(function (i) { return "\"".concat(i, "\""); }).join(", ");
                throw new Error("\"pipelineOperator\" requires \"proposal\" option whose value must be one of: ".concat(s, "."));
            }
            var e = Q(t, ["recordAndTuple", { syntaxType: "hash" }]);
            if (r === "hack") {
                if (Q(t, "placeholders"))
                    throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
                if (Q(t, "v8intrinsic"))
                    throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
                var s = Le(t, "pipelineOperator", "topicToken");
                if (!Zr.includes(s)) {
                    var i = Zr.map(function (a) { return "\"".concat(a, "\""); }).join(", ");
                    throw new Error("\"pipelineOperator\" in \"proposal\": \"hack\" mode also requires a \"topicToken\" option whose value must be one of: ".concat(i, "."));
                }
                if (s === "#" && e)
                    throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
            }
            else if (r === "smart" && e)
                throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
        } if (Q(t, "moduleAttributes")) {
            if (Q(t, "importAssertions"))
                throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
            if (Le(t, "moduleAttributes", "version") !== "may-2020")
                throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
        } if (Q(t, "recordAndTuple") && Le(t, "recordAndTuple", "syntaxType") != null && !ei.includes(Le(t, "recordAndTuple", "syntaxType")))
            throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + ei.map(function (r) { return "'".concat(r, "'"); }).join(", ")); if (Q(t, "asyncDoExpressions") && !Q(t, "doExpressions")) {
            var r = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
            throw r.missingPlugins = "doExpressions", r;
        } }
        var ti = { estree: Uo, jsx: $l, flow: ql, typescript: Yl, v8intrinsic: sh, placeholders: th }, ih = Object.keys(ti), ah = /** @class */ (function (_super_1) {
            __extends(ah, _super_1);
            function ah() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            ah.prototype.checkProto = function (t, r, e, s) { if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
                return; var i = t.key; if ((i.type === "Identifier" ? i.name : i.value) === "__proto__") {
                if (r) {
                    this.raise(p.RecordNoProto, { at: i });
                    return;
                }
                e.used && (s ? s.doubleProtoLoc === null && (s.doubleProtoLoc = i.loc.start) : this.raise(p.DuplicateProto, { at: i })), e.used = !0;
            } };
            ah.prototype.shouldExitDescending = function (t, r) { return t.type === "ArrowFunctionExpression" && t.start === r; };
            ah.prototype.getExpression = function () { this.enterInitialScopes(), this.nextToken(); var t = this.parseExpression(); return this.match(137) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.state.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t; };
            ah.prototype.parseExpression = function (t, r) {
                var _this_1 = this;
                return t ? this.disallowInAnd(function () { return _this_1.parseExpressionBase(r); }) : this.allowInAnd(function () { return _this_1.parseExpressionBase(r); });
            };
            ah.prototype.parseExpressionBase = function (t) { var r = this.state.startLoc, e = this.parseMaybeAssign(t); if (this.match(12)) {
                var s = this.startNodeAt(r);
                for (s.expressions = [e]; this.eat(12);)
                    s.expressions.push(this.parseMaybeAssign(t));
                return this.toReferencedList(s.expressions), this.finishNode(s, "SequenceExpression");
            } return e; };
            ah.prototype.parseMaybeAssignDisallowIn = function (t, r) {
                var _this_1 = this;
                return this.disallowInAnd(function () { return _this_1.parseMaybeAssign(t, r); });
            };
            ah.prototype.parseMaybeAssignAllowIn = function (t, r) {
                var _this_1 = this;
                return this.allowInAnd(function () { return _this_1.parseMaybeAssign(t, r); });
            };
            ah.prototype.setOptionalParametersError = function (t, r) { var e; t.optionalParametersLoc = (e = r == null ? void 0 : r.loc) != null ? e : this.state.startLoc; };
            ah.prototype.parseMaybeAssign = function (t, r) { var e = this.state.startLoc; if (this.isContextual(106) && this.prodParam.hasYield) {
                var n = this.parseYield();
                return r && (n = r.call(this, n, e)), n;
            } var s; t ? s = !1 : (t = new wt, s = !0); var i = this.state.type; (i === 10 || R(i)) && (this.state.potentialArrowAt = this.state.start); var a = this.parseMaybeConditional(t); if (r && (a = r.call(this, a, e)), ye(this.state.type)) {
                var n = this.startNodeAt(e), o = this.state.value;
                if (n.operator = o, this.match(29)) {
                    this.toAssignable(a, !0), n.left = a;
                    var u = e.index;
                    t.doubleProtoLoc != null && t.doubleProtoLoc.index >= u && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= u && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= u && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null);
                }
                else
                    n.left = a;
                return this.next(), n.right = this.parseMaybeAssign(), this.checkLVal(a, { in: this.finishNode(n, "AssignmentExpression") }), n;
            }
            else
                s && this.checkExpressionErrors(t, !0); return a; };
            ah.prototype.parseMaybeConditional = function (t) { var r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseExprOps(t); return this.shouldExitDescending(s, e) ? s : this.parseConditional(s, r, t); };
            ah.prototype.parseConditional = function (t, r, e) { if (this.eat(17)) {
                var s = this.startNodeAt(r);
                return s.test = t, s.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), s.alternate = this.parseMaybeAssign(), this.finishNode(s, "ConditionalExpression");
            } return t; };
            ah.prototype.parseMaybeUnaryOrPrivate = function (t) { return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(t); };
            ah.prototype.parseExprOps = function (t) { var r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseMaybeUnaryOrPrivate(t); return this.shouldExitDescending(s, e) ? s : this.parseExprOp(s, r, -1); };
            ah.prototype.parseExprOp = function (t, r, e) { if (this.isPrivateName(t)) {
                var i = this.getPrivateNameSV(t);
                (e >= Re(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(p.PrivateInExpectedIn, { at: t, identifierName: i }), this.classScope.usePrivateName(i, t.loc.start);
            } var s = this.state.type; if (le(s) && (this.prodParam.hasIn || !this.match(58))) {
                var i = Re(s);
                if (i > e) {
                    if (s === 39) {
                        if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
                            return t;
                        this.checkPipelineAtInfixOperator(t, r);
                    }
                    var a = this.startNodeAt(r);
                    a.left = t, a.operator = this.state.value;
                    var n = s === 41 || s === 42, o = s === 40;
                    if (o && (i = Re(42)), this.next(), s === 39 && this.hasPlugin(["pipelineOperator", { proposal: "minimal" }]) && this.state.type === 96 && this.prodParam.hasAwait)
                        throw this.raise(p.UnexpectedAwaitAfterPipelineBody, { at: this.state.startLoc });
                    a.right = this.parseExprOpRightExpr(s, i);
                    var u = this.finishNode(a, n || o ? "LogicalExpression" : "BinaryExpression"), c = this.state.type;
                    if (o && (c === 41 || c === 42) || n && c === 40)
                        throw this.raise(p.MixingCoalesceWithLogical, { at: this.state.startLoc });
                    return this.parseExprOp(u, r, e);
                }
            } return t; };
            ah.prototype.parseExprOpRightExpr = function (t, r) {
                var _this_1 = this;
                var e = this.state.startLoc;
                switch (t) {
                    case 39: switch (this.getPluginOption("pipelineOperator", "proposal")) {
                        case "hack": return this.withTopicBindingContext(function () { return _this_1.parseHackPipeBody(); });
                        case "smart": return this.withTopicBindingContext(function () { if (_this_1.prodParam.hasYield && _this_1.isContextual(106))
                            throw _this_1.raise(p.PipeBodyIsTighter, { at: _this_1.state.startLoc }); return _this_1.parseSmartPipelineBodyInStyle(_this_1.parseExprOpBaseRightExpr(t, r), e); });
                        case "fsharp": return this.withSoloAwaitPermittingContext(function () { return _this_1.parseFSharpPipelineBody(r); });
                    }
                    default: return this.parseExprOpBaseRightExpr(t, r);
                }
            };
            ah.prototype.parseExprOpBaseRightExpr = function (t, r) { var e = this.state.startLoc; return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, Gt(t) ? r - 1 : r); };
            ah.prototype.parseHackPipeBody = function () { var t; var r = this.state.startLoc, e = this.parseMaybeAssign(); return Bo.has(e.type) && !((t = e.extra) != null && t.parenthesized) && this.raise(p.PipeUnparenthesizedBody, { at: r, type: e.type }), this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipeTopicUnused, { at: r }), e; };
            ah.prototype.checkExponentialAfterUnary = function (t) { this.match(57) && this.raise(p.UnexpectedTokenUnaryExponentiation, { at: t.argument }); };
            ah.prototype.parseMaybeUnary = function (t, r) { var e = this.state.startLoc, s = this.isContextual(96); if (s && this.isAwaitAllowed()) {
                this.next();
                var o = this.parseAwait(e);
                return r || this.checkExponentialAfterUnary(o), o;
            } var i = this.match(34), a = this.startNode(); if (ht(this.state.type)) {
                a.operator = this.state.value, a.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
                var o = this.match(89);
                if (this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && o) {
                    var u = a.argument;
                    u.type === "Identifier" ? this.raise(p.StrictDelete, { at: a }) : this.hasPropertyAsPrivateName(u) && this.raise(p.DeletePrivateField, { at: a });
                }
                if (!i)
                    return r || this.checkExponentialAfterUnary(a), this.finishNode(a, "UnaryExpression");
            } var n = this.parseUpdate(a, i, t); if (s) {
                var o = this.state.type;
                if ((this.hasPlugin("v8intrinsic") ? X(o) : X(o) && !this.match(54)) && !this.isAmbiguousAwait())
                    return this.raiseOverwrite(p.AwaitNotInAsyncContext, { at: e }), this.parseAwait(e);
            } return n; };
            ah.prototype.parseUpdate = function (t, r, e) { if (r) {
                var a = t;
                return this.checkLVal(a.argument, { in: this.finishNode(a, "UpdateExpression") }), t;
            } var s = this.state.startLoc, i = this.parseExprSubscripts(e); if (this.checkExpressionErrors(e, !1))
                return i; for (; ue(this.state.type) && !this.canInsertSemicolon();) {
                var a = this.startNodeAt(s);
                a.operator = this.state.value, a.prefix = !1, a.argument = i, this.next(), this.checkLVal(i, { in: i = this.finishNode(a, "UpdateExpression") });
            } return i; };
            ah.prototype.parseExprSubscripts = function (t) { var r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseExprAtom(t); return this.shouldExitDescending(s, e) ? s : this.parseSubscripts(s, r); };
            ah.prototype.parseSubscripts = function (t, r, e) { var s = { optionalChainMember: !1, maybeAsyncArrow: this.atPossibleAsyncArrow(t), stop: !1 }; do
                t = this.parseSubscript(t, r, e, s), s.maybeAsyncArrow = !1;
            while (!s.stop); return t; };
            ah.prototype.parseSubscript = function (t, r, e, s) { var i = this.state.type; if (!e && i === 15)
                return this.parseBind(t, r, e, s); if (ct(i))
                return this.parseTaggedTemplateExpression(t, r, s); var a = !1; if (i === 18) {
                if (e && (this.raise(p.OptionalChainingNoNew, { at: this.state.startLoc }), this.lookaheadCharCode() === 40))
                    return s.stop = !0, t;
                s.optionalChainMember = a = !0, this.next();
            } if (!e && this.match(10))
                return this.parseCoverCallAndAsyncArrowHead(t, r, s, a); {
                var n = this.eat(0);
                return n || a || this.eat(16) ? this.parseMember(t, r, s, n, a) : (s.stop = !0, t);
            } };
            ah.prototype.parseMember = function (t, r, e, s, i) { var a = this.startNodeAt(r); return a.object = t, a.computed = s, s ? (a.property = this.parseExpression(), this.expect(3)) : this.match(136) ? (t.type === "Super" && this.raise(p.SuperPrivateField, { at: r }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), a.property = this.parsePrivateName()) : a.property = this.parseIdentifier(!0), e.optionalChainMember ? (a.optional = i, this.finishNode(a, "OptionalMemberExpression")) : this.finishNode(a, "MemberExpression"); };
            ah.prototype.parseBind = function (t, r, e, s) { var i = this.startNodeAt(r); return i.object = t, this.next(), i.callee = this.parseNoCallExpr(), s.stop = !0, this.parseSubscripts(this.finishNode(i, "BindExpression"), r, e); };
            ah.prototype.parseCoverCallAndAsyncArrowHead = function (t, r, e, s) { var i = this.state.maybeInArrowParameters, a = null; this.state.maybeInArrowParameters = !0, this.next(); var n = this.startNodeAt(r); n.callee = t; var o = e.maybeAsyncArrow, u = e.optionalChainMember; o && (this.expressionScope.enter(Nl()), a = new wt), u && (n.optional = s), s ? n.arguments = this.parseCallExpressionArguments(11) : n.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", n, a); var c = this.finishCallExpression(n, u); return o && this.shouldParseAsyncArrow() && !s ? (e.stop = !0, this.checkDestructuringPrivate(a), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), c = this.parseAsyncArrowFromCallExpression(this.startNodeAt(r), c)) : (o && (this.checkExpressionErrors(a, !0), this.expressionScope.exit()), this.toReferencedArguments(c)), this.state.maybeInArrowParameters = i, c; };
            ah.prototype.toReferencedArguments = function (t, r) { this.toReferencedListDeep(t.arguments, r); };
            ah.prototype.parseTaggedTemplateExpression = function (t, r, e) { var s = this.startNodeAt(r); return s.tag = t, s.quasi = this.parseTemplate(!0), e.optionalChainMember && this.raise(p.OptionalChainingNoTemplate, { at: r }), this.finishNode(s, "TaggedTemplateExpression"); };
            ah.prototype.atPossibleAsyncArrow = function (t) { return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt; };
            ah.prototype.finishCallExpression = function (t, r) {
                var e_19, _b;
                if (t.callee.type === "Import")
                    if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), t.arguments.length === 0 || t.arguments.length > 2)
                        this.raise(p.ImportCallArity, { at: t, maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1 });
                    else
                        try {
                            for (var _g = __values(t.arguments), _j = _g.next(); !_j.done; _j = _g.next()) {
                                var e = _j.value;
                                e.type === "SpreadElement" && this.raise(p.ImportCallSpreadArgument, { at: e });
                            }
                        }
                        catch (e_19_1) { e_19 = { error: e_19_1 }; }
                        finally {
                            try {
                                if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                            }
                            finally { if (e_19) throw e_19.error; }
                        }
                return this.finishNode(t, r ? "OptionalCallExpression" : "CallExpression");
            };
            ah.prototype.parseCallExpressionArguments = function (t, r, e, s, i) { var a = [], n = !0, o = this.state.inFSharpPipelineDirectBody; for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t);) {
                if (n)
                    n = !1;
                else if (this.expect(12), this.match(t)) {
                    r && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(p.ImportCallArgumentTrailingComma, { at: this.state.lastTokStartLoc }), s && this.addTrailingCommaExtraToNode(s), this.next();
                    break;
                }
                a.push(this.parseExprListItem(!1, i, e));
            } return this.state.inFSharpPipelineDirectBody = o, a; };
            ah.prototype.shouldParseAsyncArrow = function () { return this.match(19) && !this.canInsertSemicolon(); };
            ah.prototype.parseAsyncArrowFromCallExpression = function (t, r) { var e; return this.resetPreviousNodeTrailingComments(r), this.expect(19), this.parseArrowExpression(t, r.arguments, !0, (e = r.extra) == null ? void 0 : e.trailingCommaLoc), r.innerComments && Ye(t, r.innerComments), r.callee.trailingComments && Ye(t, r.callee.trailingComments), t; };
            ah.prototype.parseNoCallExpr = function () { var t = this.state.startLoc; return this.parseSubscripts(this.parseExprAtom(), t, !0); };
            ah.prototype.parseExprAtom = function (t) { var r, e = null, s = this.state.type; switch (s) {
                case 79: return this.parseSuper();
                case 83: return r = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(r) : (this.match(10) || this.raise(p.UnsupportedImport, { at: this.state.lastTokStartLoc }), this.finishNode(r, "Import"));
                case 78: return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
                case 90: return this.parseDo(this.startNode(), !1);
                case 56:
                case 31: return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
                case 132: return this.parseNumericLiteral(this.state.value);
                case 133: return this.parseBigIntLiteral(this.state.value);
                case 134: return this.parseDecimalLiteral(this.state.value);
                case 131: return this.parseStringLiteral(this.state.value);
                case 84: return this.parseNullLiteral();
                case 85: return this.parseBooleanLiteral(!0);
                case 86: return this.parseBooleanLiteral(!1);
                case 10: {
                    var i = this.state.potentialArrowAt === this.state.start;
                    return this.parseParenAndDistinguishExpression(i);
                }
                case 2:
                case 1: return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !1, !0);
                case 0: return this.parseArrayLike(3, !0, !1, t);
                case 6:
                case 7: return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
                case 5: return this.parseObjectLike(8, !1, !1, t);
                case 68: return this.parseFunctionOrFunctionSent();
                case 26: e = this.parseDecorators();
                case 80: return this.parseClass(this.maybeTakeDecorators(e, this.startNode()), !1);
                case 77: return this.parseNewOrNewTarget();
                case 25:
                case 24: return this.parseTemplate(!1);
                case 15: {
                    r = this.startNode(), this.next(), r.object = null;
                    var i = r.callee = this.parseNoCallExpr();
                    if (i.type === "MemberExpression")
                        return this.finishNode(r, "BindExpression");
                    throw this.raise(p.UnsupportedBind, { at: i });
                }
                case 136: return this.raise(p.PrivateInExpectedIn, { at: this.state.startLoc, identifierName: this.state.value }), this.parsePrivateName();
                case 33: return this.parseTopicReferenceThenEqualsSign(54, "%");
                case 32: return this.parseTopicReferenceThenEqualsSign(44, "^");
                case 37:
                case 38: return this.parseTopicReference("hack");
                case 44:
                case 54:
                case 27: {
                    var i = this.getPluginOption("pipelineOperator", "proposal");
                    if (i)
                        return this.parseTopicReference(i);
                    this.unexpected();
                    break;
                }
                case 47: {
                    var i = this.input.codePointAt(this.nextTokenStart());
                    Pe(i) || i === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
                    break;
                }
                default: if (R(s)) {
                    if (this.isContextual(125) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak())
                        return this.parseModuleExpression();
                    var i = this.state.potentialArrowAt === this.state.start, a = this.state.containsEsc, n = this.parseIdentifier();
                    if (!a && n.name === "async" && !this.canInsertSemicolon()) {
                        var o = this.state.type;
                        if (o === 68)
                            return this.resetPreviousNodeTrailingComments(n), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(n));
                        if (R(o))
                            return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(n)) : n;
                        if (o === 90)
                            return this.resetPreviousNodeTrailingComments(n), this.parseDo(this.startNodeAtNode(n), !0);
                    }
                    return i && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], !1)) : n;
                }
                else
                    this.unexpected();
            } };
            ah.prototype.parseTopicReferenceThenEqualsSign = function (t, r) { var e = this.getPluginOption("pipelineOperator", "proposal"); if (e)
                return this.state.type = t, this.state.value = r, this.state.pos--, this.state.end--, this.state.endLoc = re(this.state.endLoc, -1), this.parseTopicReference(e); this.unexpected(); };
            ah.prototype.parseTopicReference = function (t) { var r = this.startNode(), e = this.state.startLoc, s = this.state.type; return this.next(), this.finishTopicReference(r, e, t, s); };
            ah.prototype.finishTopicReference = function (t, r, e, s) { if (this.testTopicReferenceConfiguration(e, r, s)) {
                var i = e === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
                return this.topicReferenceIsAllowedInCurrentContext() || this.raise(e === "smart" ? p.PrimaryTopicNotAllowed : p.PipeTopicUnbound, { at: r }), this.registerTopicReference(), this.finishNode(t, i);
            }
            else
                throw this.raise(p.PipeTopicUnconfiguredToken, { at: r, token: Y(s) }); };
            ah.prototype.testTopicReferenceConfiguration = function (t, r, e) { switch (t) {
                case "hack": return this.hasPlugin(["pipelineOperator", { topicToken: Y(e) }]);
                case "smart": return e === 27;
                default: throw this.raise(p.PipeTopicRequiresHackPipes, { at: r });
            } };
            ah.prototype.parseAsyncArrowUnaryFunction = function (t) { this.prodParam.enter(St(!0, this.prodParam.hasYield)); var r = [this.parseIdentifier()]; return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(p.LineTerminatorBeforeArrow, { at: this.state.curPosition() }), this.expect(19), this.parseArrowExpression(t, r, !0); };
            ah.prototype.parseDo = function (t, r) { this.expectPlugin("doExpressions"), r && this.expectPlugin("asyncDoExpressions"), t.async = r, this.next(); var e = this.state.labels; return this.state.labels = [], r ? (this.prodParam.enter(bt), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = e, this.finishNode(t, "DoExpression"); };
            ah.prototype.parseSuper = function () { var t = this.startNode(); return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(p.SuperNotAllowed, { at: t }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(p.UnexpectedSuper, { at: t }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(p.UnsupportedSuper, { at: t }), this.finishNode(t, "Super"); };
            ah.prototype.parsePrivateName = function () { var t = this.startNode(), r = this.startNodeAt(re(this.state.startLoc, 1)), e = this.state.value; return this.next(), t.id = this.createIdentifier(r, e), this.finishNode(t, "PrivateName"); };
            ah.prototype.parseFunctionOrFunctionSent = function () { var t = this.startNode(); if (this.next(), this.prodParam.hasYield && this.match(16)) {
                var r = this.createIdentifier(this.startNodeAtNode(t), "function");
                return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, r, "sent");
            } return this.parseFunction(t); };
            ah.prototype.parseMetaProperty = function (t, r, e) { t.meta = r; var s = this.state.containsEsc; return t.property = this.parseIdentifier(!0), (t.property.name !== e || s) && this.raise(p.UnsupportedMetaProperty, { at: t.property, target: r.name, onlyValidPropertyName: e }), this.finishNode(t, "MetaProperty"); };
            ah.prototype.parseImportMetaProperty = function (t) { var r = this.createIdentifier(this.startNodeAtNode(t), "import"); return this.next(), this.isContextual(100) && (this.inModule || this.raise(p.ImportMetaOutsideModule, { at: r }), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, r, "meta"); };
            ah.prototype.parseLiteralAtNode = function (t, r, e) { return this.addExtra(e, "rawValue", t), this.addExtra(e, "raw", this.input.slice(e.start, this.state.end)), e.value = t, this.next(), this.finishNode(e, r); };
            ah.prototype.parseLiteral = function (t, r) { var e = this.startNode(); return this.parseLiteralAtNode(t, r, e); };
            ah.prototype.parseStringLiteral = function (t) { return this.parseLiteral(t, "StringLiteral"); };
            ah.prototype.parseNumericLiteral = function (t) { return this.parseLiteral(t, "NumericLiteral"); };
            ah.prototype.parseBigIntLiteral = function (t) { return this.parseLiteral(t, "BigIntLiteral"); };
            ah.prototype.parseDecimalLiteral = function (t) { return this.parseLiteral(t, "DecimalLiteral"); };
            ah.prototype.parseRegExpLiteral = function (t) { var r = this.parseLiteral(t.value, "RegExpLiteral"); return r.pattern = t.pattern, r.flags = t.flags, r; };
            ah.prototype.parseBooleanLiteral = function (t) { var r = this.startNode(); return r.value = t, this.next(), this.finishNode(r, "BooleanLiteral"); };
            ah.prototype.parseNullLiteral = function () { var t = this.startNode(); return this.next(), this.finishNode(t, "NullLiteral"); };
            ah.prototype.parseParenAndDistinguishExpression = function (t) { var r = this.state.startLoc, e; this.next(), this.expressionScope.enter(Il()); var s = this.state.maybeInArrowParameters, i = this.state.inFSharpPipelineDirectBody; this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1; var a = this.state.startLoc, n = [], o = new wt, u = !0, c, y; for (; !this.match(11);) {
                if (u)
                    u = !1;
                else if (this.expect(12, o.optionalParametersLoc === null ? null : o.optionalParametersLoc), this.match(11)) {
                    y = this.state.startLoc;
                    break;
                }
                if (this.match(21)) {
                    var C = this.state.startLoc;
                    if (c = this.state.startLoc, n.push(this.parseParenItem(this.parseRestBinding(), C)), !this.checkCommaAfterRest(41))
                        break;
                }
                else
                    n.push(this.parseMaybeAssignAllowIn(o, this.parseParenItem));
            } var g = this.state.lastTokEndLoc; this.expect(11), this.state.maybeInArrowParameters = s, this.state.inFSharpPipelineDirectBody = i; var T = this.startNodeAt(r); return t && this.shouldParseArrow(n) && (T = this.parseArrow(T)) ? (this.checkDestructuringPrivate(o), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(T, n, !1), T) : (this.expressionScope.exit(), n.length || this.unexpected(this.state.lastTokStartLoc), y && this.unexpected(y), c && this.unexpected(c), this.checkExpressionErrors(o, !0), this.toReferencedListDeep(n, !0), n.length > 1 ? (e = this.startNodeAt(a), e.expressions = n, this.finishNode(e, "SequenceExpression"), this.resetEndLocation(e, g)) : e = n[0], this.wrapParenthesis(r, e)); };
            ah.prototype.wrapParenthesis = function (t, r) { if (!this.options.createParenthesizedExpressions)
                return this.addExtra(r, "parenthesized", !0), this.addExtra(r, "parenStart", t.index), this.takeSurroundingComments(r, t.index, this.state.lastTokEndLoc.index), r; var e = this.startNodeAt(t); return e.expression = r, this.finishNode(e, "ParenthesizedExpression"); };
            ah.prototype.shouldParseArrow = function (t) { return !this.canInsertSemicolon(); };
            ah.prototype.parseArrow = function (t) { if (this.eat(19))
                return t; };
            ah.prototype.parseParenItem = function (t, r) { return t; };
            ah.prototype.parseNewOrNewTarget = function () { var t = this.startNode(); if (this.next(), this.match(16)) {
                var r = this.createIdentifier(this.startNodeAtNode(t), "new");
                this.next();
                var e = this.parseMetaProperty(t, r, "target");
                return !this.scope.inNonArrowFunction && !this.scope.inClass && !this.options.allowNewTargetOutsideFunction && this.raise(p.UnexpectedNewTarget, { at: e }), e;
            } return this.parseNew(t); };
            ah.prototype.parseNew = function (t) { if (this.parseNewCallee(t), this.eat(10)) {
                var r = this.parseExprList(11);
                this.toReferencedList(r), t.arguments = r;
            }
            else
                t.arguments = []; return this.finishNode(t, "NewExpression"); };
            ah.prototype.parseNewCallee = function (t) { t.callee = this.parseNoCallExpr(), t.callee.type === "Import" && this.raise(p.ImportCallNotNewExpression, { at: t.callee }); };
            ah.prototype.parseTemplateElement = function (t) {
                var _b = this.state, r = _b.start, e = _b.startLoc, s = _b.end, i = _b.value, a = r + 1, n = this.startNodeAt(re(e, 1));
                i === null && (t || this.raise(p.InvalidEscapeSequenceTemplate, { at: re(this.state.firstInvalidTemplateEscapePos, 1) }));
                var o = this.match(24), u = o ? -1 : -2, c = s + u;
                n.value = { raw: this.input.slice(a, c).replace(/\r\n?/g, "\n"), cooked: i === null ? null : i.slice(1, u) }, n.tail = o, this.next();
                var y = this.finishNode(n, "TemplateElement");
                return this.resetEndLocation(y, re(this.state.lastTokEndLoc, u)), y;
            };
            ah.prototype.parseTemplate = function (t) { var r = this.startNode(); r.expressions = []; var e = this.parseTemplateElement(t); for (r.quasis = [e]; !e.tail;)
                r.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), r.quasis.push(e = this.parseTemplateElement(t)); return this.finishNode(r, "TemplateLiteral"); };
            ah.prototype.parseTemplateSubstitution = function () { return this.parseExpression(); };
            ah.prototype.parseObjectLike = function (t, r, e, s) { e && this.expectPlugin("recordAndTuple"); var i = this.state.inFSharpPipelineDirectBody; this.state.inFSharpPipelineDirectBody = !1; var a = Object.create(null), n = !0, o = this.startNode(); for (o.properties = [], this.next(); !this.match(t);) {
                if (n)
                    n = !1;
                else if (this.expect(12), this.match(t)) {
                    this.addTrailingCommaExtraToNode(o);
                    break;
                }
                var c = void 0;
                r ? c = this.parseBindingProperty() : (c = this.parsePropertyDefinition(s), this.checkProto(c, e, a, s)), e && !this.isObjectProperty(c) && c.type !== "SpreadElement" && this.raise(p.InvalidRecordProperty, { at: c }), c.shorthand && this.addExtra(c, "shorthand", !0), o.properties.push(c);
            } this.next(), this.state.inFSharpPipelineDirectBody = i; var u = "ObjectExpression"; return r ? u = "ObjectPattern" : e && (u = "RecordExpression"), this.finishNode(o, u); };
            ah.prototype.addTrailingCommaExtraToNode = function (t) { this.addExtra(t, "trailingComma", this.state.lastTokStart), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, !1); };
            ah.prototype.maybeAsyncOrAccessorProp = function (t) { return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55)); };
            ah.prototype.parsePropertyDefinition = function (t) { var r = []; if (this.match(26))
                for (this.hasPlugin("decorators") && this.raise(p.UnsupportedPropertyDecorator, { at: this.state.startLoc }); this.match(26);)
                    r.push(this.parseDecorator()); var e = this.startNode(), s = !1, i = !1, a; if (this.match(21))
                return r.length && this.unexpected(), this.parseSpread(); r.length && (e.decorators = r, r = []), e.method = !1, t && (a = this.state.startLoc); var n = this.eat(55); this.parsePropertyNamePrefixOperator(e); var o = this.state.containsEsc, u = this.parsePropertyName(e, t); if (!n && !o && this.maybeAsyncOrAccessorProp(e)) {
                var c = u.name;
                c === "async" && !this.hasPrecedingLineBreak() && (s = !0, this.resetPreviousNodeTrailingComments(u), n = this.eat(55), this.parsePropertyName(e)), (c === "get" || c === "set") && (i = !0, this.resetPreviousNodeTrailingComments(u), e.kind = c, this.match(55) && (n = !0, this.raise(p.AccessorIsGenerator, { at: this.state.curPosition(), kind: c }), this.next()), this.parsePropertyName(e));
            } return this.parseObjPropValue(e, a, n, s, !1, i, t); };
            ah.prototype.getGetterSetterExpectedParamCount = function (t) { return t.kind === "get" ? 0 : 1; };
            ah.prototype.getObjectOrClassMethodParams = function (t) { return t.params; };
            ah.prototype.checkGetterSetterParams = function (t) { var r; var e = this.getGetterSetterExpectedParamCount(t), s = this.getObjectOrClassMethodParams(t); s.length !== e && this.raise(t.kind === "get" ? p.BadGetterArity : p.BadSetterArity, { at: t }), t.kind === "set" && ((r = s[s.length - 1]) == null ? void 0 : r.type) === "RestElement" && this.raise(p.BadSetterRestParameter, { at: t }); };
            ah.prototype.parseObjectMethod = function (t, r, e, s, i) { if (i) {
                var a = this.parseMethod(t, r, !1, !1, !1, "ObjectMethod");
                return this.checkGetterSetterParams(a), a;
            } if (e || r || this.match(10))
                return s && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, r, e, !1, !1, "ObjectMethod"); };
            ah.prototype.parseObjectProperty = function (t, r, e, s) { if (t.shorthand = !1, this.eat(14))
                return t.value = e ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(s), this.finishNode(t, "ObjectProperty"); if (!t.computed && t.key.type === "Identifier") {
                if (this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), e)
                    t.value = this.parseMaybeDefault(r, Te(t.key));
                else if (this.match(29)) {
                    var i = this.state.startLoc;
                    s != null ? s.shorthandAssignLoc === null && (s.shorthandAssignLoc = i) : this.raise(p.InvalidCoverInitializedName, { at: i }), t.value = this.parseMaybeDefault(r, Te(t.key));
                }
                else
                    t.value = Te(t.key);
                return t.shorthand = !0, this.finishNode(t, "ObjectProperty");
            } };
            ah.prototype.parseObjPropValue = function (t, r, e, s, i, a, n) { var o = this.parseObjectMethod(t, e, s, i, a) || this.parseObjectProperty(t, r, i, n); return o || this.unexpected(), o; };
            ah.prototype.parsePropertyName = function (t, r) { if (this.eat(0))
                t.computed = !0, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
            else {
                var _b = this.state, e = _b.type, s = _b.value, i = void 0;
                if (se(e))
                    i = this.parseIdentifier(!0);
                else
                    switch (e) {
                        case 132:
                            i = this.parseNumericLiteral(s);
                            break;
                        case 131:
                            i = this.parseStringLiteral(s);
                            break;
                        case 133:
                            i = this.parseBigIntLiteral(s);
                            break;
                        case 134:
                            i = this.parseDecimalLiteral(s);
                            break;
                        case 136: {
                            var a = this.state.startLoc;
                            r != null ? r.privateKeyLoc === null && (r.privateKeyLoc = a) : this.raise(p.UnexpectedPrivateField, { at: a }), i = this.parsePrivateName();
                            break;
                        }
                        default: this.unexpected();
                    }
                t.key = i, e !== 136 && (t.computed = !1);
            } return t.key; };
            ah.prototype.initFunction = function (t, r) { t.id = null, t.generator = !1, t.async = r; };
            ah.prototype.parseMethod = function (t, r, e, s, i, a) { var n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : !1; this.initFunction(t, e), t.generator = r, this.scope.enter(Ae | dt | (n ? Ne : 0) | (i ? Cr : 0)), this.prodParam.enter(St(e, t.generator)), this.parseFunctionParams(t, s); var o = this.parseFunctionBodyAndFinish(t, a, !0); return this.prodParam.exit(), this.scope.exit(), o; };
            ah.prototype.parseArrayLike = function (t, r, e, s) { e && this.expectPlugin("recordAndTuple"); var i = this.state.inFSharpPipelineDirectBody; this.state.inFSharpPipelineDirectBody = !1; var a = this.startNode(); return this.next(), a.elements = this.parseExprList(t, !e, s, a), this.state.inFSharpPipelineDirectBody = i, this.finishNode(a, e ? "TupleExpression" : "ArrayExpression"); };
            ah.prototype.parseArrowExpression = function (t, r, e, s) { this.scope.enter(Ae | es); var i = St(e, !1); !this.match(5) && this.prodParam.hasIn && (i |= Ve), this.prodParam.enter(i), this.initFunction(t, e); var a = this.state.maybeInArrowParameters; return r && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(t, r, s)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(t, "ArrowFunctionExpression"); };
            ah.prototype.setArrowFunctionParameters = function (t, r, e) { this.toAssignableList(r, e, !1), t.params = r; };
            ah.prototype.parseFunctionBodyAndFinish = function (t, r) { var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; return this.parseFunctionBody(t, !1, e), this.finishNode(t, r); };
            ah.prototype.parseFunctionBody = function (t, r) {
                var _this_1 = this;
                var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s = r && !this.match(5);
                if (this.expressionScope.enter($r()), s)
                    t.body = this.parseMaybeAssign(), this.checkParams(t, !1, r, !1);
                else {
                    var i_2 = this.state.strict, a = this.state.labels;
                    this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | zr), t.body = this.parseBlock(!0, !1, function (n) { var o = !_this_1.isSimpleParamList(t.params); n && o && _this_1.raise(p.IllegalLanguageModeDirective, { at: (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t }); var u = !i_2 && _this_1.state.strict; _this_1.checkParams(t, !_this_1.state.strict && !r && !e && !o, r, u), _this_1.state.strict && t.id && _this_1.checkIdentifier(t.id, tl, u); }), this.prodParam.exit(), this.state.labels = a;
                }
                this.expressionScope.exit();
            };
            ah.prototype.isSimpleParameter = function (t) { return t.type === "Identifier"; };
            ah.prototype.isSimpleParamList = function (t) { for (var r = 0, e = t.length; r < e; r++)
                if (!this.isSimpleParameter(t[r]))
                    return !1; return !0; };
            ah.prototype.checkParams = function (t, r, e) {
                var e_20, _b;
                var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = !r && new Set, a = { type: "FormalParameters" };
                try {
                    for (var _g = __values(t.params), _j = _g.next(); !_j.done; _j = _g.next()) {
                        var n = _j.value;
                        this.checkLVal(n, { in: a, binding: At, checkClashes: i, strictModeChanged: s });
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
            };
            ah.prototype.parseExprList = function (t, r, e, s) { var i = [], a = !0; for (; !this.eat(t);) {
                if (a)
                    a = !1;
                else if (this.expect(12), this.match(t)) {
                    s && this.addTrailingCommaExtraToNode(s), this.next();
                    break;
                }
                i.push(this.parseExprListItem(r, e));
            } return i; };
            ah.prototype.parseExprListItem = function (t, r, e) { var s; if (this.match(12))
                t || this.raise(p.UnexpectedToken, { at: this.state.curPosition(), unexpected: "," }), s = null;
            else if (this.match(21)) {
                var i = this.state.startLoc;
                s = this.parseParenItem(this.parseSpread(r), i);
            }
            else if (this.match(17)) {
                this.expectPlugin("partialApplication"), e || this.raise(p.UnexpectedArgumentPlaceholder, { at: this.state.startLoc });
                var i = this.startNode();
                this.next(), s = this.finishNode(i, "ArgumentPlaceholder");
            }
            else
                s = this.parseMaybeAssignAllowIn(r, this.parseParenItem); return s; };
            ah.prototype.parseIdentifier = function (t) { var r = this.startNode(), e = this.parseIdentifierName(t); return this.createIdentifier(r, e); };
            ah.prototype.createIdentifier = function (t, r) { return t.name = r, t.loc.identifierName = r, this.finishNode(t, "Identifier"); };
            ah.prototype.parseIdentifierName = function (t) { var r, _b = this.state, e = _b.startLoc, s = _b.type; se(s) ? r = this.state.value : this.unexpected(); var i = ae(s); return t ? i && this.replaceToken(130) : this.checkReservedWord(r, e, i, !1), this.next(), r; };
            ah.prototype.checkReservedWord = function (t, r, e, s) { if (t.length > 10 || !Yo(t))
                return; if (e && Go(t)) {
                this.raise(p.UnexpectedKeyword, { at: r, keyword: t });
                return;
            } if ((this.state.strict ? s ? vr : Ar : Pr)(t, this.inModule)) {
                this.raise(p.UnexpectedReservedWord, { at: r, reservedWord: t });
                return;
            }
            else if (t === "yield") {
                if (this.prodParam.hasYield) {
                    this.raise(p.YieldBindingIdentifier, { at: r });
                    return;
                }
            }
            else if (t === "await") {
                if (this.prodParam.hasAwait) {
                    this.raise(p.AwaitBindingIdentifier, { at: r });
                    return;
                }
                if (this.scope.inStaticBlock) {
                    this.raise(p.AwaitBindingIdentifierInStaticBlock, { at: r });
                    return;
                }
                this.expressionScope.recordAsyncArrowParametersError({ at: r });
            }
            else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
                this.raise(p.ArgumentsInClass, { at: r });
                return;
            } };
            ah.prototype.isAwaitAllowed = function () { return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction); };
            ah.prototype.parseAwait = function (t) { var r = this.startNodeAt(t); return this.expressionScope.recordParameterInitializerError(p.AwaitExpressionFormalParameter, { at: r }), this.eat(55) && this.raise(p.ObsoleteAwaitStar, { at: r }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (r.argument = this.parseMaybeUnary(null, !0)), this.finishNode(r, "AwaitExpression"); };
            ah.prototype.isAmbiguousAwait = function () { if (this.hasPrecedingLineBreak())
                return !0; var t = this.state.type; return t === 53 || t === 10 || t === 0 || ct(t) || t === 101 && !this.state.containsEsc || t === 135 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54; };
            ah.prototype.parseYield = function () { var t = this.startNode(); this.expressionScope.recordParameterInitializerError(p.YieldInParameter, { at: t }), this.next(); var r = !1, e = null; if (!this.hasPrecedingLineBreak())
                switch (r = this.eat(55), this.state.type) {
                    case 13:
                    case 137:
                    case 8:
                    case 11:
                    case 3:
                    case 9:
                    case 14:
                    case 12: if (!r)
                        break;
                    default: e = this.parseMaybeAssign();
                } return t.delegate = r, t.argument = e, this.finishNode(t, "YieldExpression"); };
            ah.prototype.checkPipelineAtInfixOperator = function (t, r) { this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) && t.type === "SequenceExpression" && this.raise(p.PipelineHeadSequenceExpression, { at: r }); };
            ah.prototype.parseSmartPipelineBodyInStyle = function (t, r) { if (this.isSimpleReference(t)) {
                var e = this.startNodeAt(r);
                return e.callee = t, this.finishNode(e, "PipelineBareFunction");
            }
            else {
                var e = this.startNodeAt(r);
                return this.checkSmartPipeTopicBodyEarlyErrors(r), e.expression = t, this.finishNode(e, "PipelineTopicExpression");
            } };
            ah.prototype.isSimpleReference = function (t) { switch (t.type) {
                case "MemberExpression": return !t.computed && this.isSimpleReference(t.object);
                case "Identifier": return !0;
                default: return !1;
            } };
            ah.prototype.checkSmartPipeTopicBodyEarlyErrors = function (t) { if (this.match(19))
                throw this.raise(p.PipelineBodyNoArrow, { at: this.state.startLoc }); this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipelineTopicUnused, { at: t }); };
            ah.prototype.withTopicBindingContext = function (t) { var r = this.state.topicContext; this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null }; try {
                return t();
            }
            finally {
                this.state.topicContext = r;
            } };
            ah.prototype.withSmartMixTopicForbiddingContext = function (t) { if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
                var r = this.state.topicContext;
                this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
                try {
                    return t();
                }
                finally {
                    this.state.topicContext = r;
                }
            }
            else
                return t(); };
            ah.prototype.withSoloAwaitPermittingContext = function (t) { var r = this.state.soloAwait; this.state.soloAwait = !0; try {
                return t();
            }
            finally {
                this.state.soloAwait = r;
            } };
            ah.prototype.allowInAnd = function (t) { var r = this.prodParam.currentFlags(); if (Ve & ~r) {
                this.prodParam.enter(r | Ve);
                try {
                    return t();
                }
                finally {
                    this.prodParam.exit();
                }
            } return t(); };
            ah.prototype.disallowInAnd = function (t) { var r = this.prodParam.currentFlags(); if (Ve & r) {
                this.prodParam.enter(r & ~Ve);
                try {
                    return t();
                }
                finally {
                    this.prodParam.exit();
                }
            } return t(); };
            ah.prototype.registerTopicReference = function () { this.state.topicContext.maxTopicIndex = 0; };
            ah.prototype.topicReferenceIsAllowedInCurrentContext = function () { return this.state.topicContext.maxNumOfResolvableTopics >= 1; };
            ah.prototype.topicReferenceWasUsedInCurrentContext = function () { return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0; };
            ah.prototype.parseFSharpPipelineBody = function (t) { var r = this.state.startLoc; this.state.potentialArrowAt = this.state.start; var e = this.state.inFSharpPipelineDirectBody; this.state.inFSharpPipelineDirectBody = !0; var s = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), r, t); return this.state.inFSharpPipelineDirectBody = e, s; };
            ah.prototype.parseModuleExpression = function () { this.expectPlugin("moduleBlocks"); var t = this.startNode(); this.next(), this.match(5) || this.unexpected(null, 5); var r = this.startNodeAt(this.state.endLoc); this.next(); var e = this.initializeScopes(!0); this.enterInitialScopes(); try {
                t.body = this.parseProgram(r, 8, "module");
            }
            finally {
                e();
            } return this.finishNode(t, "ModuleExpression"); };
            ah.prototype.parsePropertyNamePrefixOperator = function (t) { };
            return ah;
        }(Kl)), xs = { kind: "loop" }, nh = { kind: "switch" }, oh = /[\uD800-\uDFFF]/u, gs = /in(?:stanceof)?/y;
        function lh(t, r) { for (var e = 0; e < t.length; e++) {
            var s = t[e], i = s.type;
            if (typeof i == "number") {
                {
                    if (i === 136) {
                        var a = s.loc, n = s.start, o = s.value, u = s.end, c = n + 1, y = re(a.start, 1);
                        t.splice(e, 1, new Se({ type: xe(27), value: "#", start: n, end: c, startLoc: a.start, endLoc: y }), new Se({ type: xe(130), value: o, start: c, end: u, startLoc: y, endLoc: a.end })), e++;
                        continue;
                    }
                    if (ct(i)) {
                        var a = s.loc, n = s.start, o = s.value, u = s.end, c = n + 1, y = re(a.start, 1), g = void 0;
                        r.charCodeAt(n) === 96 ? g = new Se({ type: xe(22), value: "`", start: n, end: c, startLoc: a.start, endLoc: y }) : g = new Se({ type: xe(8), value: "}", start: n, end: c, startLoc: a.start, endLoc: y });
                        var T = void 0, C = void 0, j = void 0, q = void 0;
                        i === 24 ? (C = u - 1, j = re(a.end, -1), T = o === null ? null : o.slice(1, -1), q = new Se({ type: xe(22), value: "`", start: C, end: u, startLoc: j, endLoc: a.end })) : (C = u - 2, j = re(a.end, -2), T = o === null ? null : o.slice(1, -2), q = new Se({ type: xe(23), value: "${", start: C, end: u, startLoc: j, endLoc: a.end })), t.splice(e, 1, g, new Se({ type: xe(20), value: T, start: c, end: C, startLoc: y, endLoc: j }), q), e += 2;
                        continue;
                    }
                }
                s.type = xe(i);
            }
        } return t; }
        var hh = /** @class */ (function (_super_1) {
            __extends(hh, _super_1);
            function hh() {
                return _super_1 !== null && _super_1.apply(this, arguments) || this;
            }
            hh.prototype.parseTopLevel = function (t, r) { return t.program = this.parseProgram(r), t.comments = this.state.comments, this.options.tokens && (t.tokens = lh(this.tokens, this.input)), this.finishNode(t, "File"); };
            hh.prototype.parseProgram = function (t) {
                var e_21, _b;
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 137, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.options.sourceType;
                if (t.sourceType = e, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, r), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
                    try {
                        for (var _g = __values(Array.from(this.scope.undefinedExports)), _j = _g.next(); !_j.done; _j = _g.next()) {
                            var _k = __read(_j.value, 2), i = _k[0], a = _k[1];
                            this.raise(p.ModuleExportUndefined, { at: a, localName: i });
                        }
                    }
                    catch (e_21_1) { e_21 = { error: e_21_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                        }
                        finally { if (e_21) throw e_21.error; }
                    }
                var s;
                return r === 137 ? s = this.finishNode(t, "Program") : s = this.finishNodeAt(t, "Program", re(this.state.startLoc, -1)), s;
            };
            hh.prototype.stmtToDirective = function (t) { var r = t; r.type = "Directive", r.value = r.expression, delete r.expression; var e = r.value, s = e.value, i = this.input.slice(e.start, e.end), a = e.value = i.slice(1, -1); return this.addExtra(e, "raw", i), this.addExtra(e, "rawValue", a), this.addExtra(e, "expressionValue", s), e.type = "DirectiveLiteral", r; };
            hh.prototype.parseInterpreterDirective = function () { if (!this.match(28))
                return null; var t = this.startNode(); return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective"); };
            hh.prototype.isLet = function () { return this.isContextual(99) ? this.hasFollowingBindingAtom() : !1; };
            hh.prototype.chStartsBindingIdentifier = function (t, r) { if (Pe(t)) {
                if (gs.lastIndex = r, gs.test(this.input)) {
                    var e = this.codePointAtPos(gs.lastIndex);
                    if (!je(e) && e !== 92)
                        return !1;
                }
                return !0;
            }
            else
                return t === 92; };
            hh.prototype.chStartsBindingPattern = function (t) { return t === 91 || t === 123; };
            hh.prototype.hasFollowingBindingAtom = function () { var t = this.nextTokenStart(), r = this.codePointAtPos(t); return this.chStartsBindingPattern(r) || this.chStartsBindingIdentifier(r, t); };
            hh.prototype.hasFollowingBindingIdentifier = function () { var t = this.nextTokenStart(), r = this.codePointAtPos(t); return this.chStartsBindingIdentifier(r, t); };
            hh.prototype.startsUsingForOf = function () { var t = this.lookahead(); return t.type === 101 && !t.containsEsc ? !1 : (this.expectPlugin("explicitResourceManagement"), !0); };
            hh.prototype.parseModuleItem = function () { return this.parseStatementLike(15); };
            hh.prototype.parseStatementListItem = function () { return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8)); };
            hh.prototype.parseStatementOrSloppyAnnexBFunctionDeclaration = function () { var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = 0; return this.options.annexB && !this.state.strict && (r |= 4, t && (r |= 8)), this.parseStatementLike(r); };
            hh.prototype.parseStatement = function () { return this.parseStatementLike(0); };
            hh.prototype.parseStatementLike = function (t) { var r = null; return this.match(26) && (r = this.parseDecorators(!0)), this.parseStatementContent(t, r); };
            hh.prototype.parseStatementContent = function (t, r) { var e = this.state.type, s = this.startNode(), i = !!(t & 2), a = !!(t & 4), n = t & 1; switch (e) {
                case 60: return this.parseBreakContinueStatement(s, !0);
                case 63: return this.parseBreakContinueStatement(s, !1);
                case 64: return this.parseDebuggerStatement(s);
                case 90: return this.parseDoWhileStatement(s);
                case 91: return this.parseForStatement(s);
                case 68:
                    if (this.lookaheadCharCode() === 46)
                        break;
                    return a || this.raise(this.state.strict ? p.StrictFunction : this.options.annexB ? p.SloppyFunctionAnnexB : p.SloppyFunction, { at: this.state.startLoc }), this.parseFunctionStatement(s, !1, !i && a);
                case 80: return i || this.unexpected(), this.parseClass(this.maybeTakeDecorators(r, s), !0);
                case 69: return this.parseIfStatement(s);
                case 70: return this.parseReturnStatement(s);
                case 71: return this.parseSwitchStatement(s);
                case 72: return this.parseThrowStatement(s);
                case 73: return this.parseTryStatement(s);
                case 105:
                    if (this.hasFollowingLineBreak() || this.state.containsEsc || !this.hasFollowingBindingIdentifier())
                        break;
                    return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(p.UnexpectedUsingDeclaration, { at: this.state.startLoc }) : i || this.raise(p.UnexpectedLexicalDeclaration, { at: this.state.startLoc }), this.parseVarStatement(s, "using");
                case 99: {
                    if (this.state.containsEsc)
                        break;
                    var c = this.nextTokenStart(), y = this.codePointAtPos(c);
                    if (y !== 91 && (!i && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(y, c) && y !== 123))
                        break;
                }
                case 75: i || this.raise(p.UnexpectedLexicalDeclaration, { at: this.state.startLoc });
                case 74: {
                    var c = this.state.value;
                    return this.parseVarStatement(s, c);
                }
                case 92: return this.parseWhileStatement(s);
                case 76: return this.parseWithStatement(s);
                case 5: return this.parseBlock();
                case 13: return this.parseEmptyStatement(s);
                case 83: {
                    var c = this.lookaheadCharCode();
                    if (c === 40 || c === 46)
                        break;
                }
                case 82: {
                    !this.options.allowImportExportEverywhere && !n && this.raise(p.UnexpectedImportExport, { at: this.state.startLoc }), this.next();
                    var c = void 0;
                    return e === 83 ? (c = this.parseImport(s), c.type === "ImportDeclaration" && (!c.importKind || c.importKind === "value") && (this.sawUnambiguousESM = !0)) : (c = this.parseExport(s, r), (c.type === "ExportNamedDeclaration" && (!c.exportKind || c.exportKind === "value") || c.type === "ExportAllDeclaration" && (!c.exportKind || c.exportKind === "value") || c.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = !0)), this.assertModuleNodeAllowed(c), c;
                }
                default: if (this.isAsyncFunction())
                    return i || this.raise(p.AsyncFunctionInSingleStatementContext, { at: this.state.startLoc }), this.next(), this.parseFunctionStatement(s, !0, !i && a);
            } var o = this.state.value, u = this.parseExpression(); return R(e) && u.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(s, o, u, t) : this.parseExpressionStatement(s, u, r); };
            hh.prototype.assertModuleNodeAllowed = function (t) { !this.options.allowImportExportEverywhere && !this.inModule && this.raise(p.ImportOutsideModule, { at: t }); };
            hh.prototype.decoratorsEnabledBeforeExport = function () { return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1; };
            hh.prototype.maybeTakeDecorators = function (t, r, e) {
                var _b;
                return t && (r.decorators && r.decorators.length > 0 ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(p.DecoratorsBeforeAfterExport, { at: r.decorators[0] }), (_b = r.decorators).unshift.apply(_b, __spreadArray([], __read(t), false))) : r.decorators = t, this.resetStartLocationFromNode(r, t[0]), e && this.resetStartLocationFromNode(e, r)), r;
            };
            hh.prototype.canHaveLeadingDecorator = function () { return this.match(80); };
            hh.prototype.parseDecorators = function (t) { var r = []; do
                r.push(this.parseDecorator());
            while (this.match(26)); if (this.match(82))
                t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(p.DecoratorExportClass, { at: this.state.startLoc });
            else if (!this.canHaveLeadingDecorator())
                throw this.raise(p.UnexpectedLeadingDecorator, { at: this.state.startLoc }); return r; };
            hh.prototype.parseDecorator = function () { this.expectOnePlugin(["decorators", "decorators-legacy"]); var t = this.startNode(); if (this.next(), this.hasPlugin("decorators")) {
                var r = this.state.startLoc, e = void 0;
                if (this.match(10)) {
                    var s = this.state.startLoc;
                    this.next(), e = this.parseExpression(), this.expect(11), e = this.wrapParenthesis(s, e);
                    var i = this.state.startLoc;
                    t.expression = this.parseMaybeDecoratorArguments(e), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && t.expression !== e && this.raise(p.DecoratorArgumentsOutsideParentheses, { at: i });
                }
                else {
                    for (e = this.parseIdentifier(!1); this.eat(16);) {
                        var s = this.startNodeAt(r);
                        s.object = e, this.match(136) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), s.property = this.parsePrivateName()) : s.property = this.parseIdentifier(!0), s.computed = !1, e = this.finishNode(s, "MemberExpression");
                    }
                    t.expression = this.parseMaybeDecoratorArguments(e);
                }
            }
            else
                t.expression = this.parseExprSubscripts(); return this.finishNode(t, "Decorator"); };
            hh.prototype.parseMaybeDecoratorArguments = function (t) { if (this.eat(10)) {
                var r = this.startNodeAtNode(t);
                return r.callee = t, r.arguments = this.parseCallExpressionArguments(11, !1), this.toReferencedList(r.arguments), this.finishNode(r, "CallExpression");
            } return t; };
            hh.prototype.parseBreakContinueStatement = function (t, r) { return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, r), this.finishNode(t, r ? "BreakStatement" : "ContinueStatement"); };
            hh.prototype.verifyBreakContinue = function (t, r) { var e; for (e = 0; e < this.state.labels.length; ++e) {
                var s = this.state.labels[e];
                if ((t.label == null || s.name === t.label.name) && (s.kind != null && (r || s.kind === "loop") || t.label && r))
                    break;
            } if (e === this.state.labels.length) {
                var s = r ? "BreakStatement" : "ContinueStatement";
                this.raise(p.IllegalBreakContinue, { at: t, type: s });
            } };
            hh.prototype.parseDebuggerStatement = function (t) { return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement"); };
            hh.prototype.parseHeaderExpression = function () { this.expect(10); var t = this.parseExpression(); return this.expect(11), t; };
            hh.prototype.parseDoWhileStatement = function (t) {
                var _this_1 = this;
                return this.next(), this.state.labels.push(xs), t.body = this.withSmartMixTopicForbiddingContext(function () { return _this_1.parseStatement(); }), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
            };
            hh.prototype.parseForStatement = function (t) { this.next(), this.state.labels.push(xs); var r = null; if (this.isAwaitAllowed() && this.eatContextual(96) && (r = this.state.lastTokStartLoc), this.scope.enter(qe), this.expect(10), this.match(13))
                return r !== null && this.unexpected(r), this.parseFor(t, null); var e = this.isContextual(99), s = this.isContextual(105) && !this.hasFollowingLineBreak(), i = e && this.hasFollowingBindingAtom() || s && this.hasFollowingBindingIdentifier() && this.startsUsingForOf(); if (this.match(74) || this.match(75) || i) {
                var c = this.startNode(), y = this.state.value;
                this.next(), this.parseVar(c, !0, y);
                var g = this.finishNode(c, "VariableDeclaration"), T = this.match(58);
                return T && s && this.raise(p.ForInUsing, { at: g }), (T || this.isContextual(101)) && g.declarations.length === 1 ? this.parseForIn(t, g, r) : (r !== null && this.unexpected(r), this.parseFor(t, g));
            } var a = this.isContextual(95), n = new wt, o = this.parseExpression(!0, n), u = this.isContextual(101); if (u && (e && this.raise(p.ForOfLet, { at: o }), r === null && a && o.type === "Identifier" && this.raise(p.ForOfAsync, { at: o })), u || this.match(58)) {
                this.checkDestructuringPrivate(n), this.toAssignable(o, !0);
                var c = u ? "ForOfStatement" : "ForInStatement";
                return this.checkLVal(o, { in: { type: c } }), this.parseForIn(t, o, r);
            }
            else
                this.checkExpressionErrors(n, !0); return r !== null && this.unexpected(r), this.parseFor(t, o); };
            hh.prototype.parseFunctionStatement = function (t, r, e) { return this.next(), this.parseFunction(t, 1 | (e ? 2 : 0) | (r ? 8 : 0)); };
            hh.prototype.parseIfStatement = function (t) { return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), t.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(t, "IfStatement"); };
            hh.prototype.parseReturnStatement = function (t) { return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(p.IllegalReturn, { at: this.state.startLoc }), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement"); };
            hh.prototype.parseSwitchStatement = function (t) { this.next(), t.discriminant = this.parseHeaderExpression(); var r = t.cases = []; this.expect(5), this.state.labels.push(nh), this.scope.enter(qe); var e; for (var s = void 0; !this.match(8);)
                if (this.match(61) || this.match(65)) {
                    var i = this.match(61);
                    e && this.finishNode(e, "SwitchCase"), r.push(e = this.startNode()), e.consequent = [], this.next(), i ? e.test = this.parseExpression() : (s && this.raise(p.MultipleDefaultsInSwitch, { at: this.state.lastTokStartLoc }), s = !0, e.test = null), this.expect(14);
                }
                else
                    e ? e.consequent.push(this.parseStatementListItem()) : this.unexpected(); return this.scope.exit(), e && this.finishNode(e, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement"); };
            hh.prototype.parseThrowStatement = function (t) { return this.next(), this.hasPrecedingLineBreak() && this.raise(p.NewlineAfterThrow, { at: this.state.lastTokEndLoc }), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement"); };
            hh.prototype.parseCatchClauseParam = function () { var t = this.parseBindingAtom(); return this.scope.enter(this.options.annexB && t.type === "Identifier" ? Er : 0), this.checkLVal(t, { in: { type: "CatchClause" }, binding: Qo }), t; };
            hh.prototype.parseTryStatement = function (t) {
                var _this_1 = this;
                if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
                    var r = this.startNode();
                    this.next(), this.match(10) ? (this.expect(10), r.param = this.parseCatchClauseParam(), this.expect(11)) : (r.param = null, this.scope.enter(qe)), r.body = this.withSmartMixTopicForbiddingContext(function () { return _this_1.parseBlock(!1, !1); }), this.scope.exit(), t.handler = this.finishNode(r, "CatchClause");
                }
                return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(p.NoCatchOrFinally, { at: t }), this.finishNode(t, "TryStatement");
            };
            hh.prototype.parseVarStatement = function (t, r) { var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; return this.next(), this.parseVar(t, !1, r, e), this.semicolon(), this.finishNode(t, "VariableDeclaration"); };
            hh.prototype.parseWhileStatement = function (t) {
                var _this_1 = this;
                return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(xs), t.body = this.withSmartMixTopicForbiddingContext(function () { return _this_1.parseStatement(); }), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
            };
            hh.prototype.parseWithStatement = function (t) {
                var _this_1 = this;
                return this.state.strict && this.raise(p.StrictWith, { at: this.state.startLoc }), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(function () { return _this_1.parseStatement(); }), this.finishNode(t, "WithStatement");
            };
            hh.prototype.parseEmptyStatement = function (t) { return this.next(), this.finishNode(t, "EmptyStatement"); };
            hh.prototype.parseLabeledStatement = function (t, r, e, s) {
                var e_22, _b;
                try {
                    for (var _g = __values(this.state.labels), _j = _g.next(); !_j.done; _j = _g.next()) {
                        var a = _j.value;
                        a.name === r && this.raise(p.LabelRedeclaration, { at: e, labelName: r });
                    }
                }
                catch (e_22_1) { e_22 = { error: e_22_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_22) throw e_22.error; }
                }
                var i = oe(this.state.type) ? "loop" : this.match(71) ? "switch" : null;
                for (var a = this.state.labels.length - 1; a >= 0; a--) {
                    var n = this.state.labels[a];
                    if (n.statementStart === t.start)
                        n.statementStart = this.state.start, n.kind = i;
                    else
                        break;
                }
                return this.state.labels.push({ name: r, kind: i, statementStart: this.state.start }), t.body = s & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(), this.state.labels.pop(), t.label = e, this.finishNode(t, "LabeledStatement");
            };
            hh.prototype.parseExpressionStatement = function (t, r, e) { return t.expression = r, this.semicolon(), this.finishNode(t, "ExpressionStatement"); };
            hh.prototype.parseBlock = function () { var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, e = arguments.length > 2 ? arguments[2] : void 0, s = this.startNode(); return t && this.state.strictErrors.clear(), this.expect(5), r && this.scope.enter(qe), this.parseBlockBody(s, t, !1, 8, e), r && this.scope.exit(), this.finishNode(s, "BlockStatement"); };
            hh.prototype.isValidDirective = function (t) { return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized; };
            hh.prototype.parseBlockBody = function (t, r, e, s, i) { var a = t.body = [], n = t.directives = []; this.parseBlockOrModuleBlockBody(a, r ? n : void 0, e, s, i); };
            hh.prototype.parseBlockOrModuleBlockBody = function (t, r, e, s, i) { var a = this.state.strict, n = !1, o = !1; for (; !this.match(s);) {
                var u = e ? this.parseModuleItem() : this.parseStatementListItem();
                if (r && !o) {
                    if (this.isValidDirective(u)) {
                        var c = this.stmtToDirective(u);
                        r.push(c), !n && c.value.value === "use strict" && (n = !0, this.setStrict(!0));
                        continue;
                    }
                    o = !0, this.state.strictErrors.clear();
                }
                t.push(u);
            } i && i.call(this, n), a || this.setStrict(!1), this.next(); };
            hh.prototype.parseFor = function (t, r) {
                var _this_1 = this;
                return t.init = r, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(function () { return _this_1.parseStatement(); }), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
            };
            hh.prototype.parseForIn = function (t, r, e) {
                var _this_1 = this;
                var s = this.match(58);
                return this.next(), s ? e !== null && this.unexpected(e) : t.await = e !== null, r.type === "VariableDeclaration" && r.declarations[0].init != null && (!s || !this.options.annexB || this.state.strict || r.kind !== "var" || r.declarations[0].id.type !== "Identifier") && this.raise(p.ForInOfLoopInitializer, { at: r, type: s ? "ForInStatement" : "ForOfStatement" }), r.type === "AssignmentPattern" && this.raise(p.InvalidLhs, { at: r, ancestor: { type: "ForStatement" } }), t.left = r, t.right = s ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(function () { return _this_1.parseStatement(); }), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement");
            };
            hh.prototype.parseVar = function (t, r, e) { var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = t.declarations = []; for (t.kind = e;;) {
                var a = this.startNode();
                if (this.parseVarId(a, e), a.init = this.eat(29) ? r ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, a.init === null && !s && (a.id.type !== "Identifier" && !(r && (this.match(58) || this.isContextual(101))) ? this.raise(p.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "destructuring" }) : e === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(p.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "const" })), i.push(this.finishNode(a, "VariableDeclarator")), !this.eat(12))
                    break;
            } return t; };
            hh.prototype.parseVarId = function (t, r) { r === "using" && !this.inModule && this.match(96) && this.raise(p.AwaitInUsingBinding, { at: this.state.startLoc }); var e = this.parseBindingAtom(); this.checkLVal(e, { in: { type: "VariableDeclarator" }, binding: r === "var" ? At : He }), t.id = e; };
            hh.prototype.parseAsyncFunctionExpression = function (t) { return this.parseFunction(t, 8); };
            hh.prototype.parseFunction = function (t) {
                var _this_1 = this;
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = r & 2, s = !!(r & 1), i = s && !(r & 4), a = !!(r & 8);
                this.initFunction(t, a), this.match(55) && (e && this.raise(p.GeneratorInSingleStatementContext, { at: this.state.startLoc }), this.next(), t.generator = !0), s && (t.id = this.parseFunctionId(i));
                var n = this.state.maybeInArrowParameters;
                return this.state.maybeInArrowParameters = !1, this.scope.enter(Ae), this.prodParam.enter(St(a, t.generator)), s || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(function () { _this_1.parseFunctionBodyAndFinish(t, s ? "FunctionDeclaration" : "FunctionExpression"); }), this.prodParam.exit(), this.scope.exit(), s && !e && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = n, t;
            };
            hh.prototype.parseFunctionId = function (t) { return t || R(this.state.type) ? this.parseIdentifier() : null; };
            hh.prototype.parseFunctionParams = function (t, r) { this.expect(10), this.expressionScope.enter(wl()), t.params = this.parseBindingList(11, 41, 2 | (r ? 4 : 0)), this.expressionScope.exit(); };
            hh.prototype.registerFunctionStatementId = function (t) { t.id && this.scope.declareName(t.id.name, !this.options.annexB || this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? At : He : Ir, t.id.loc.start); };
            hh.prototype.parseClass = function (t, r, e) { this.next(); var s = this.state.strict; return this.state.strict = !0, this.parseClassId(t, r, e), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, s), this.finishNode(t, r ? "ClassDeclaration" : "ClassExpression"); };
            hh.prototype.isClassProperty = function () { return this.match(29) || this.match(13) || this.match(8); };
            hh.prototype.isClassMethod = function () { return this.match(10); };
            hh.prototype.isNonstaticConstructor = function (t) { return !t.computed && !t.static && (t.key.name === "constructor" || t.key.value === "constructor"); };
            hh.prototype.parseClassBody = function (t, r) {
                var _this_1 = this;
                this.classScope.enter();
                var e = { hadConstructor: !1, hadSuperClass: t }, s = [], i = this.startNode();
                if (i.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(function () { for (; !_this_1.match(8);) {
                    if (_this_1.eat(13)) {
                        if (s.length > 0)
                            throw _this_1.raise(p.DecoratorSemicolon, { at: _this_1.state.lastTokEndLoc });
                        continue;
                    }
                    if (_this_1.match(26)) {
                        s.push(_this_1.parseDecorator());
                        continue;
                    }
                    var a = _this_1.startNode();
                    s.length && (a.decorators = s, _this_1.resetStartLocationFromNode(a, s[0]), s = []), _this_1.parseClassMember(i, a, e), a.kind === "constructor" && a.decorators && a.decorators.length > 0 && _this_1.raise(p.DecoratorConstructor, { at: a });
                } }), this.state.strict = r, this.next(), s.length)
                    throw this.raise(p.TrailingDecorator, { at: this.state.startLoc });
                return this.classScope.exit(), this.finishNode(i, "ClassBody");
            };
            hh.prototype.parseClassMemberFromModifier = function (t, r) { var e = this.parseIdentifier(!0); if (this.isClassMethod()) {
                var s = r;
                return s.kind = "method", s.computed = !1, s.key = e, s.static = !1, this.pushClassMethod(t, s, !1, !1, !1, !1), !0;
            }
            else if (this.isClassProperty()) {
                var s = r;
                return s.computed = !1, s.key = e, s.static = !1, t.body.push(this.parseClassProperty(s)), !0;
            } return this.resetPreviousNodeTrailingComments(e), !1; };
            hh.prototype.parseClassMember = function (t, r, e) { var s = this.isContextual(104); if (s) {
                if (this.parseClassMemberFromModifier(t, r))
                    return;
                if (this.eat(5)) {
                    this.parseClassStaticBlock(t, r);
                    return;
                }
            } this.parseClassMemberWithIsStatic(t, r, e, s); };
            hh.prototype.parseClassMemberWithIsStatic = function (t, r, e, s) { var i = r, a = r, n = r, o = r, u = r, c = i, y = i; if (r.static = s, this.parsePropertyNamePrefixOperator(r), this.eat(55)) {
                c.kind = "method";
                var q = this.match(136);
                if (this.parseClassElementName(c), q) {
                    this.pushClassPrivateMethod(t, a, !0, !1);
                    return;
                }
                this.isNonstaticConstructor(i) && this.raise(p.ConstructorIsGenerator, { at: i.key }), this.pushClassMethod(t, i, !0, !1, !1, !1);
                return;
            } var g = R(this.state.type) && !this.state.containsEsc, T = this.match(136), C = this.parseClassElementName(r), j = this.state.startLoc; if (this.parsePostMemberNameModifiers(y), this.isClassMethod()) {
                if (c.kind = "method", T) {
                    this.pushClassPrivateMethod(t, a, !1, !1);
                    return;
                }
                var q = this.isNonstaticConstructor(i), G = !1;
                q && (i.kind = "constructor", e.hadConstructor && !this.hasPlugin("typescript") && this.raise(p.DuplicateConstructor, { at: C }), q && this.hasPlugin("typescript") && r.override && this.raise(p.OverrideOnConstructor, { at: C }), e.hadConstructor = !0, G = e.hadSuperClass), this.pushClassMethod(t, i, !1, !1, q, G);
            }
            else if (this.isClassProperty())
                T ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n);
            else if (g && C.name === "async" && !this.isLineTerminator()) {
                this.resetPreviousNodeTrailingComments(C);
                var q = this.eat(55);
                y.optional && this.unexpected(j), c.kind = "method";
                var G = this.match(136);
                this.parseClassElementName(c), this.parsePostMemberNameModifiers(y), G ? this.pushClassPrivateMethod(t, a, q, !0) : (this.isNonstaticConstructor(i) && this.raise(p.ConstructorIsAsync, { at: i.key }), this.pushClassMethod(t, i, q, !0, !1, !1));
            }
            else if (g && (C.name === "get" || C.name === "set") && !(this.match(55) && this.isLineTerminator())) {
                this.resetPreviousNodeTrailingComments(C), c.kind = C.name;
                var q = this.match(136);
                this.parseClassElementName(i), q ? this.pushClassPrivateMethod(t, a, !1, !1) : (this.isNonstaticConstructor(i) && this.raise(p.ConstructorIsAccessor, { at: i.key }), this.pushClassMethod(t, i, !1, !1, !1, !1)), this.checkGetterSetterParams(i);
            }
            else if (g && C.name === "accessor" && !this.isLineTerminator()) {
                this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(C);
                var q = this.match(136);
                this.parseClassElementName(n), this.pushClassAccessorProperty(t, u, q);
            }
            else
                this.isLineTerminator() ? T ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n) : this.unexpected(); };
            hh.prototype.parseClassElementName = function (t) { var _b = this.state, r = _b.type, e = _b.value; if ((r === 130 || r === 131) && t.static && e === "prototype" && this.raise(p.StaticPrototype, { at: this.state.startLoc }), r === 136) {
                e === "constructor" && this.raise(p.ConstructorClassPrivateField, { at: this.state.startLoc });
                var s = this.parsePrivateName();
                return t.key = s, s;
            } return this.parsePropertyName(t); };
            hh.prototype.parseClassStaticBlock = function (t, r) { var e; this.scope.enter(Ne | mt | dt); var s = this.state.labels; this.state.labels = [], this.prodParam.enter(ze); var i = r.body = []; this.parseBlockOrModuleBlockBody(i, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = s, t.body.push(this.finishNode(r, "StaticBlock")), (e = r.decorators) != null && e.length && this.raise(p.DecoratorStaticBlock, { at: r }); };
            hh.prototype.pushClassProperty = function (t, r) { !r.computed && (r.key.name === "constructor" || r.key.value === "constructor") && this.raise(p.ConstructorClassField, { at: r.key }), t.body.push(this.parseClassProperty(r)); };
            hh.prototype.pushClassPrivateProperty = function (t, r) { var e = this.parseClassPrivateProperty(r); t.body.push(e), this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), ls, e.key.loc.start); };
            hh.prototype.pushClassAccessorProperty = function (t, r, e) { if (!e && !r.computed) {
                var i = r.key;
                (i.name === "constructor" || i.value === "constructor") && this.raise(p.ConstructorClassField, { at: i });
            } var s = this.parseClassAccessorProperty(r); t.body.push(s), e && this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), ls, s.key.loc.start); };
            hh.prototype.pushClassMethod = function (t, r, e, s, i, a) { t.body.push(this.parseMethod(r, e, s, i, a, "ClassMethod", !0)); };
            hh.prototype.pushClassPrivateMethod = function (t, r, e, s) { var i = this.parseMethod(r, e, s, !1, !1, "ClassPrivateMethod", !0); t.body.push(i); var a = i.kind === "get" ? i.static ? al : ol : i.kind === "set" ? i.static ? nl : ll : ls; this.declareClassPrivateMethodInScope(i, a); };
            hh.prototype.declareClassPrivateMethodInScope = function (t, r) { this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), r, t.key.loc.start); };
            hh.prototype.parsePostMemberNameModifiers = function (t) { };
            hh.prototype.parseClassPrivateProperty = function (t) { return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty"); };
            hh.prototype.parseClassProperty = function (t) { return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty"); };
            hh.prototype.parseClassAccessorProperty = function (t) { return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty"); };
            hh.prototype.parseInitializer = function (t) { this.scope.enter(Ne | dt), this.expressionScope.enter($r()), this.prodParam.enter(ze), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit(); };
            hh.prototype.parseClassId = function (t, r, e) { var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : wr; if (R(this.state.type))
                t.id = this.parseIdentifier(), r && this.declareNameFromIdentifier(t.id, s);
            else if (e || !r)
                t.id = null;
            else
                throw this.raise(p.MissingClassName, { at: this.state.startLoc }); };
            hh.prototype.parseClassSuper = function (t) { t.superClass = this.eat(81) ? this.parseExprSubscripts() : null; };
            hh.prototype.parseExport = function (t, r) { var e = this.maybeParseExportDefaultSpecifier(t), s = !e || this.eat(12), i = s && this.eatExportStar(t), a = i && this.maybeParseExportNamespaceSpecifier(t), n = s && (!a || this.eat(12)), o = e || i; if (i && !a) {
                if (e && this.unexpected(), r)
                    throw this.raise(p.UnsupportedDecoratorExport, { at: t });
                return this.parseExportFrom(t, !0), this.finishNode(t, "ExportAllDeclaration");
            } var u = this.maybeParseExportNamedSpecifiers(t); e && s && !i && !u && this.unexpected(null, 5), a && n && this.unexpected(null, 97); var c; if (o || u) {
                if (c = !1, r)
                    throw this.raise(p.UnsupportedDecoratorExport, { at: t });
                this.parseExportFrom(t, o);
            }
            else
                c = this.maybeParseExportDeclaration(t); if (o || u || c) {
                var y;
                var g = t;
                if (this.checkExport(g, !0, !1, !!g.source), ((y = g.declaration) == null ? void 0 : y.type) === "ClassDeclaration")
                    this.maybeTakeDecorators(r, g.declaration, g);
                else if (r)
                    throw this.raise(p.UnsupportedDecoratorExport, { at: t });
                return this.finishNode(g, "ExportNamedDeclaration");
            } if (this.eat(65)) {
                var g = t, T = this.parseExportDefaultExpression();
                if (g.declaration = T, T.type === "ClassDeclaration")
                    this.maybeTakeDecorators(r, T, g);
                else if (r)
                    throw this.raise(p.UnsupportedDecoratorExport, { at: t });
                return this.checkExport(g, !0, !0), this.finishNode(g, "ExportDefaultDeclaration");
            } this.unexpected(null, 5); };
            hh.prototype.eatExportStar = function (t) { return this.eat(55); };
            hh.prototype.maybeParseExportDefaultSpecifier = function (t) { if (this.isExportDefaultSpecifier()) {
                this.expectPlugin("exportDefaultFrom");
                var r = this.startNode();
                return r.exported = this.parseIdentifier(!0), t.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], !0;
            } return !1; };
            hh.prototype.maybeParseExportNamespaceSpecifier = function (t) { if (this.isContextual(93)) {
                t.specifiers || (t.specifiers = []);
                var r = this.startNodeAt(this.state.lastTokStartLoc);
                return this.next(), r.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(r, "ExportNamespaceSpecifier")), !0;
            } return !1; };
            hh.prototype.maybeParseExportNamedSpecifiers = function (t) {
                var _b;
                if (this.match(5)) {
                    t.specifiers || (t.specifiers = []);
                    var r = t.exportKind === "type";
                    return (_b = t.specifiers).push.apply(_b, __spreadArray([], __read(this.parseExportSpecifiers(r)), false)), t.source = null, t.declaration = null, this.hasPlugin("importAssertions") && (t.assertions = []), !0;
                }
                return !1;
            };
            hh.prototype.maybeParseExportDeclaration = function (t) { return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), !0) : !1; };
            hh.prototype.isAsyncFunction = function () { if (!this.isContextual(95))
                return !1; var t = this.nextTokenStart(); return !cs.test(this.input.slice(this.state.pos, t)) && this.isUnparsedContextual(t, "function"); };
            hh.prototype.parseExportDefaultExpression = function () { var t = this.startNode(); if (this.match(68))
                return this.next(), this.parseFunction(t, 5); if (this.isAsyncFunction())
                return this.next(), this.next(), this.parseFunction(t, 13); if (this.match(80))
                return this.parseClass(t, !0, !0); if (this.match(26))
                return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0); if (this.match(75) || this.match(74) || this.isLet())
                throw this.raise(p.UnsupportedDefaultExport, { at: this.state.startLoc }); var r = this.parseMaybeAssignAllowIn(); return this.semicolon(), r; };
            hh.prototype.parseExportDeclaration = function (t) { return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem(); };
            hh.prototype.isExportDefaultSpecifier = function () { var t = this.state.type; if (R(t)) {
                if (t === 95 && !this.state.containsEsc || t === 99)
                    return !1;
                if ((t === 128 || t === 127) && !this.state.containsEsc) {
                    var s = this.lookahead().type;
                    if (R(s) && s !== 97 || s === 5)
                        return this.expectOnePlugin(["flow", "typescript"]), !1;
                }
            }
            else if (!this.match(65))
                return !1; var r = this.nextTokenStart(), e = this.isUnparsedContextual(r, "from"); if (this.input.charCodeAt(r) === 44 || R(this.state.type) && e)
                return !0; if (this.match(65) && e) {
                var s = this.input.charCodeAt(this.nextTokenStartSince(r + 4));
                return s === 34 || s === 39;
            } return !1; };
            hh.prototype.parseExportFrom = function (t, r) { if (this.eatContextual(97)) {
                t.source = this.parseImportSource(), this.checkExport(t);
                var e = this.maybeParseImportAssertions();
                e && (t.assertions = e, this.checkJSONModuleImport(t));
            }
            else
                r && this.unexpected(); this.semicolon(); };
            hh.prototype.shouldParseExportDeclaration = function () { var t = this.state.type; return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(p.DecoratorBeforeExport, { at: this.state.startLoc }), !0) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction(); };
            hh.prototype.checkExport = function (t, r, e, s) {
                var e_23, _b, e_24, _g;
                if (r) {
                    if (e) {
                        if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
                            var i;
                            var a = t.declaration;
                            a.type === "Identifier" && a.name === "from" && a.end - a.start === 4 && !((i = a.extra) != null && i.parenthesized) && this.raise(p.ExportDefaultFromAsIdentifier, { at: a });
                        }
                    }
                    else if (t.specifiers && t.specifiers.length)
                        try {
                            for (var _j = __values(t.specifiers), _k = _j.next(); !_k.done; _k = _j.next()) {
                                var a = _k.value;
                                var n = a.exported, o = n.type === "Identifier" ? n.name : n.value;
                                if (this.checkDuplicateExports(a, o), !s && a.local) {
                                    var u = a.local;
                                    u.type !== "Identifier" ? this.raise(p.ExportBindingIsString, { at: a, localName: u.value, exportName: o }) : (this.checkReservedWord(u.name, u.loc.start, !0, !1), this.scope.checkLocalExport(u));
                                }
                            }
                        }
                        catch (e_23_1) { e_23 = { error: e_23_1 }; }
                        finally {
                            try {
                                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                            }
                            finally { if (e_23) throw e_23.error; }
                        }
                    else if (t.declaration) {
                        if (t.declaration.type === "FunctionDeclaration" || t.declaration.type === "ClassDeclaration") {
                            var a = t.declaration.id;
                            if (!a)
                                throw new Error("Assertion failure");
                            this.checkDuplicateExports(t, a.name);
                        }
                        else if (t.declaration.type === "VariableDeclaration")
                            try {
                                for (var _m = __values(t.declaration.declarations), _q = _m.next(); !_q.done; _q = _m.next()) {
                                    var a = _q.value;
                                    this.checkDeclaration(a.id);
                                }
                            }
                            catch (e_24_1) { e_24 = { error: e_24_1 }; }
                            finally {
                                try {
                                    if (_q && !_q.done && (_g = _m.return)) _g.call(_m);
                                }
                                finally { if (e_24) throw e_24.error; }
                            }
                    }
                }
            };
            hh.prototype.checkDeclaration = function (t) {
                var e_25, _b, e_26, _g;
                if (t.type === "Identifier")
                    this.checkDuplicateExports(t, t.name);
                else if (t.type === "ObjectPattern")
                    try {
                        for (var _j = __values(t.properties), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var r = _k.value;
                            this.checkDeclaration(r);
                        }
                    }
                    catch (e_25_1) { e_25 = { error: e_25_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                        }
                        finally { if (e_25) throw e_25.error; }
                    }
                else if (t.type === "ArrayPattern")
                    try {
                        for (var _m = __values(t.elements), _q = _m.next(); !_q.done; _q = _m.next()) {
                            var r = _q.value;
                            r && this.checkDeclaration(r);
                        }
                    }
                    catch (e_26_1) { e_26 = { error: e_26_1 }; }
                    finally {
                        try {
                            if (_q && !_q.done && (_g = _m.return)) _g.call(_m);
                        }
                        finally { if (e_26) throw e_26.error; }
                    }
                else
                    t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
            };
            hh.prototype.checkDuplicateExports = function (t, r) { this.exportedIdentifiers.has(r) && (r === "default" ? this.raise(p.DuplicateDefaultExport, { at: t }) : this.raise(p.DuplicateExport, { at: t, exportName: r })), this.exportedIdentifiers.add(r); };
            hh.prototype.parseExportSpecifiers = function (t) { var r = [], e = !0; for (this.expect(5); !this.eat(8);) {
                if (e)
                    e = !1;
                else if (this.expect(12), this.eat(8))
                    break;
                var s = this.isContextual(128), i = this.match(131), a = this.startNode();
                a.local = this.parseModuleExportName(), r.push(this.parseExportSpecifier(a, i, t, s));
            } return r; };
            hh.prototype.parseExportSpecifier = function (t, r, e, s) { return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : r ? t.exported = Ll(t.local) : t.exported || (t.exported = Te(t.local)), this.finishNode(t, "ExportSpecifier"); };
            hh.prototype.parseModuleExportName = function () { if (this.match(131)) {
                var t = this.parseStringLiteral(this.state.value), r = t.value.match(oh);
                return r && this.raise(p.ModuleExportNameHasLoneSurrogate, { at: t, surrogateCharCode: r[0].charCodeAt(0) }), t;
            } return this.parseIdentifier(!0); };
            hh.prototype.isJSONModuleImport = function (t) { return t.assertions != null ? t.assertions.some(function (r) { var e = r.key, s = r.value; return s.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type"); }) : !1; };
            hh.prototype.checkImportReflection = function (t) { if (t.module) {
                var r;
                (t.specifiers.length !== 1 || t.specifiers[0].type !== "ImportDefaultSpecifier") && this.raise(p.ImportReflectionNotBinding, { at: t.specifiers[0].loc.start }), ((r = t.assertions) == null ? void 0 : r.length) > 0 && this.raise(p.ImportReflectionHasAssertion, { at: t.specifiers[0].loc.start });
            } };
            hh.prototype.checkJSONModuleImport = function (t) { if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
                var r = t.specifiers;
                if (r != null) {
                    var e = r.find(function (s) { var i; if (s.type === "ExportSpecifier" ? i = s.local : s.type === "ImportSpecifier" && (i = s.imported), i !== void 0)
                        return i.type === "Identifier" ? i.name !== "default" : i.value !== "default"; });
                    e !== void 0 && this.raise(p.ImportJSONBindingNotDefault, { at: e.loc.start });
                }
            } };
            hh.prototype.parseMaybeImportReflection = function (t) { var r = !1; if (this.isContextual(125)) {
                var e = this.lookahead(), s = e.type;
                R(s) ? (s !== 97 || this.input.charCodeAt(this.nextTokenStartSince(e.end)) === 102) && (r = !0) : s !== 12 && (r = !0);
            } r ? (this.expectPlugin("importReflection"), this.next(), t.module = !0) : this.hasPlugin("importReflection") && (t.module = !1); };
            hh.prototype.parseImport = function (t) { if (t.specifiers = [], !this.match(131)) {
                this.parseMaybeImportReflection(t);
                var s = !this.maybeParseDefaultImportSpecifier(t) || this.eat(12), i = s && this.maybeParseStarImportSpecifier(t);
                s && !i && this.parseNamedImportSpecifiers(t), this.expectContextual(97);
            } t.source = this.parseImportSource(); var r = this.maybeParseImportAssertions(); if (r)
                t.assertions = r;
            else {
                var e = this.maybeParseModuleAttributes();
                e && (t.attributes = e);
            } return this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.finishNode(t, "ImportDeclaration"); };
            hh.prototype.parseImportSource = function () { return this.match(131) || this.unexpected(), this.parseExprAtom(); };
            hh.prototype.shouldParseDefaultImport = function (t) { return R(this.state.type); };
            hh.prototype.parseImportSpecifierLocal = function (t, r, e) { r.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(r, e)); };
            hh.prototype.finishImportSpecifier = function (t, r) { var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : He; return this.checkLVal(t.local, { in: { type: r }, binding: e }), this.finishNode(t, r); };
            hh.prototype.parseAssertEntries = function () { var t = [], r = new Set; do {
                if (this.match(8))
                    break;
                var e = this.startNode(), s = this.state.value;
                if (r.has(s) && this.raise(p.ModuleAttributesWithDuplicateKeys, { at: this.state.startLoc, key: s }), r.add(s), this.match(131) ? e.key = this.parseStringLiteral(s) : e.key = this.parseIdentifier(!0), this.expect(14), !this.match(131))
                    throw this.raise(p.ModuleAttributeInvalidValue, { at: this.state.startLoc });
                e.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(e, "ImportAttribute"));
            } while (this.eat(12)); return t; };
            hh.prototype.maybeParseModuleAttributes = function () { if (this.match(76) && !this.hasPrecedingLineBreak())
                this.expectPlugin("moduleAttributes"), this.next();
            else
                return this.hasPlugin("moduleAttributes") ? [] : null; var t = [], r = new Set; do {
                var e = this.startNode();
                if (e.key = this.parseIdentifier(!0), e.key.name !== "type" && this.raise(p.ModuleAttributeDifferentFromType, { at: e.key }), r.has(e.key.name) && this.raise(p.ModuleAttributesWithDuplicateKeys, { at: e.key, key: e.key.name }), r.add(e.key.name), this.expect(14), !this.match(131))
                    throw this.raise(p.ModuleAttributeInvalidValue, { at: this.state.startLoc });
                e.value = this.parseStringLiteral(this.state.value), this.finishNode(e, "ImportAttribute"), t.push(e);
            } while (this.eat(12)); return t; };
            hh.prototype.maybeParseImportAssertions = function () { if (this.isContextual(94) && !this.hasPrecedingLineBreak())
                this.expectPlugin("importAssertions"), this.next();
            else
                return this.hasPlugin("importAssertions") ? [] : null; this.eat(5); var t = this.parseAssertEntries(); return this.eat(8), t; };
            hh.prototype.maybeParseDefaultImportSpecifier = function (t) { return this.shouldParseDefaultImport(t) ? (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), !0) : !1; };
            hh.prototype.maybeParseStarImportSpecifier = function (t) { if (this.match(55)) {
                var r = this.startNode();
                return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, r, "ImportNamespaceSpecifier"), !0;
            } return !1; };
            hh.prototype.parseNamedImportSpecifiers = function (t) { var r = !0; for (this.expect(5); !this.eat(8);) {
                if (r)
                    r = !1;
                else {
                    if (this.eat(14))
                        throw this.raise(p.DestructureNamedImport, { at: this.state.startLoc });
                    if (this.expect(12), this.eat(8))
                        break;
                }
                var e = this.startNode(), s = this.match(131), i = this.isContextual(128);
                e.imported = this.parseModuleExportName();
                var a = this.parseImportSpecifier(e, s, t.importKind === "type" || t.importKind === "typeof", i, void 0);
                t.specifiers.push(a);
            } };
            hh.prototype.parseImportSpecifier = function (t, r, e, s, i) { if (this.eatContextual(93))
                t.local = this.parseIdentifier();
            else {
                var a = t.imported;
                if (r)
                    throw this.raise(p.ImportBindingIsString, { at: t, importName: a.value });
                this.checkReservedWord(a.name, t.loc.start, !0, !0), t.local || (t.local = Te(a));
            } return this.finishImportSpecifier(t, "ImportSpecifier", i); };
            hh.prototype.isThisParam = function (t) { return t.type === "Identifier" && t.name === "this"; };
            return hh;
        }(ah)), si = /** @class */ (function (_super_1) {
            __extends(si, _super_1);
            function si(t, r) {
                var _this_1 = this;
                t = f(t), _this_1 = _super_1.call(this, t, r) || this, _this_1.options = t, _this_1.initializeScopes(), _this_1.plugins = uh(_this_1.options.plugins), _this_1.filename = t.sourceFilename;
                return _this_1;
            }
            si.prototype.getScopeHandler = function () { return us; };
            si.prototype.parse = function () { this.enterInitialScopes(); var t = this.startNode(), r = this.startNode(); return this.nextToken(), t.errors = null, this.parseTopLevel(t, r), t.errors = this.state.errors, t; };
            return si;
        }(hh));
        function uh(t) {
            var e_27, _b;
            var r = new Map;
            try {
                for (var t_2 = __values(t), t_2_1 = t_2.next(); !t_2_1.done; t_2_1 = t_2.next()) {
                    var e = t_2_1.value;
                    var _g = __read(Array.isArray(e) ? e : [e, {}], 2), s = _g[0], i = _g[1];
                    r.has(s) || r.set(s, i || {});
                }
            }
            catch (e_27_1) { e_27 = { error: e_27_1 }; }
            finally {
                try {
                    if (t_2_1 && !t_2_1.done && (_b = t_2.return)) _b.call(t_2);
                }
                finally { if (e_27) throw e_27.error; }
            }
            return r;
        }
        function ch(t, r) { var e; if (((e = r) == null ? void 0 : e.sourceType) === "unambiguous") {
            r = Object.assign({}, r);
            try {
                r.sourceType = "module";
                var s = tt(r, t), i = s.parse();
                if (s.sawUnambiguousESM)
                    return i;
                if (s.ambiguousScriptDifferentAst)
                    try {
                        return r.sourceType = "script", tt(r, t).parse();
                    }
                    catch (_b) { }
                else
                    i.program.sourceType = "script";
                return i;
            }
            catch (s) {
                try {
                    return r.sourceType = "script", tt(r, t).parse();
                }
                catch (_g) { }
                throw s;
            }
        }
        else
            return tt(r, t).parse(); }
        function ph(t, r) { var e = tt(r, t); return e.options.strictMode && (e.state.strict = !0), e.getExpression(); }
        function fh(t) {
            var e_28, _b;
            var r = {};
            try {
                for (var _g = __values(Object.keys(t)), _j = _g.next(); !_j.done; _j = _g.next()) {
                    var e = _j.value;
                    r[e] = xe(t[e]);
                }
            }
            catch (e_28_1) { e_28 = { error: e_28_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_28) throw e_28.error; }
            }
            return r;
        }
        var dh = fh(te);
        function tt(t, r) { var e = si; return t != null && t.plugins && (rh(t.plugins), e = mh(t.plugins)), new e(t, r); }
        var ri = {};
        function mh(t) {
            var e_29, _b;
            var r = ih.filter(function (i) { return Q(t, i); }), e = r.join("/"), s = ri[e];
            if (!s) {
                s = si;
                try {
                    for (var r_1 = __values(r), r_1_1 = r_1.next(); !r_1_1.done; r_1_1 = r_1.next()) {
                        var i = r_1_1.value;
                        s = ti[i](s);
                    }
                }
                catch (e_29_1) { e_29 = { error: e_29_1 }; }
                finally {
                    try {
                        if (r_1_1 && !r_1_1.done && (_b = r_1.return)) _b.call(r_1);
                    }
                    finally { if (e_29) throw e_29.error; }
                }
                ri[e] = s;
            }
            return s;
        }
        l.parse = ch, l.parseExpression = ph, l.tokTypes = dh;
    } }), _f = $({ "src/language-js/parse/json.js": function (l, h) {
        "use strict";
        U();
        var f = bo(), d = dr(), x = wo(), P = Io();
        function m() { var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _b = N.allowComments, O = _b === void 0 ? !0 : _b; return function (_) { var W = No().parseExpression, I; try {
            I = W(_, { tokens: !0, ranges: !0 });
        }
        catch (F) {
            throw P(F);
        } if (!O && f(I.comments))
            throw E(I.comments[0], "Comment"); return S(I), I; }; }
        function E(N, O) { var _b = __read([N.loc.start, N.loc.end].map(function (W) { var I = W.line, F = W.column; return { line: I, column: F + 1 }; }), 2), A = _b[0], _ = _b[1]; return d("".concat(O, " is not allowed in JSON."), { start: A, end: _ }); }
        function S(N) {
            var e_30, _b, e_31, _g, e_32, _j;
            switch (N.type) {
                case "ArrayExpression":
                    try {
                        for (var _k = __values(N.elements), _m = _k.next(); !_m.done; _m = _k.next()) {
                            var O = _m.value;
                            O !== null && S(O);
                        }
                    }
                    catch (e_30_1) { e_30 = { error: e_30_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_b = _k.return)) _b.call(_k);
                        }
                        finally { if (e_30) throw e_30.error; }
                    }
                    return;
                case "ObjectExpression":
                    try {
                        for (var _q = __values(N.properties), _v = _q.next(); !_v.done; _v = _q.next()) {
                            var O = _v.value;
                            S(O);
                        }
                    }
                    catch (e_31_1) { e_31 = { error: e_31_1 }; }
                    finally {
                        try {
                            if (_v && !_v.done && (_g = _q.return)) _g.call(_q);
                        }
                        finally { if (e_31) throw e_31.error; }
                    }
                    return;
                case "ObjectProperty":
                    if (N.computed)
                        throw E(N.key, "Computed key");
                    if (N.shorthand)
                        throw E(N.key, "Shorthand property");
                    N.key.type !== "Identifier" && S(N.key), S(N.value);
                    return;
                case "UnaryExpression": {
                    var O = N.operator, A = N.argument;
                    if (O !== "+" && O !== "-")
                        throw E(N, "Operator '".concat(N.operator, "'"));
                    if (A.type === "NumericLiteral" || A.type === "Identifier" && (A.name === "Infinity" || A.name === "NaN"))
                        return;
                    throw E(A, "Operator '".concat(O, "' before '").concat(A.type, "'"));
                }
                case "Identifier":
                    if (N.name !== "Infinity" && N.name !== "NaN" && N.name !== "undefined")
                        throw E(N, "Identifier '".concat(N.name, "'"));
                    return;
                case "TemplateLiteral":
                    if (f(N.expressions))
                        throw E(N.expressions[0], "'TemplateLiteral' with expression");
                    try {
                        for (var _w = __values(N.quasis), _x = _w.next(); !_x.done; _x = _w.next()) {
                            var O = _x.value;
                            S(O);
                        }
                    }
                    catch (e_32_1) { e_32 = { error: e_32_1 }; }
                    finally {
                        try {
                            if (_x && !_x.done && (_j = _w.return)) _j.call(_w);
                        }
                        finally { if (e_32) throw e_32.error; }
                    }
                    return;
                case "NullLiteral":
                case "BooleanLiteral":
                case "NumericLiteral":
                case "StringLiteral":
                case "TemplateElement": return;
                default: throw E(N, "'".concat(N.type, "'"));
            }
        }
        var k = m(), L = { json: x({ parse: k, hasPragma: function () { return !0; } }), json5: x(k), "json-stringify": x({ parse: m({ allowComments: !1 }), astFormat: "estree-json" }) };
        h.exports = L;
    } }), Rf = $({ "src/language-js/parse/babel.js": function (l, h) { U(); var f = xf(), d = ho(), x = Tf(), P = wo(), m = Io(), E = Mf(), S = _f(), k = { sourceType: "module", allowImportExportEverywhere: !0, allowReturnOutsideFunction: !0, allowSuperOutsideMethod: !0, allowUndeclaredExports: !0, errorRecovery: !0, createParenthesizedExpressions: !0, plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", { decoratorsBeforeExport: !1 }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors"], tokens: !0, ranges: !0 }, L = ["recordAndTuple", { syntaxType: "hash" }], N = "v8intrinsic", O = [["pipelineOperator", { proposal: "hack", topicToken: "%" }], ["pipelineOperator", { proposal: "minimal" }], ["pipelineOperator", { proposal: "fsharp" }]], A = function (H) { var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k; return Object.assign(Object.assign({}, X), {}, { plugins: __spreadArray(__spreadArray([], __read(X.plugins), false), __read(H), false) }); }, _ = /@(?:no)?flow\b/; function W(H, X) { if (X.filepath && X.filepath.endsWith(".js.flow"))
        return !0; var ye = d(H); ye && (H = H.slice(ye.length)); var ne = x(H, 0); return ne !== !1 && (H = H.slice(0, ne)), _.test(H); } function I(H, X, ye) { var ne = No()[H], oe = ne(X, ye), Ee = oe.errors.find(function (le) { return !te.has(le.reasonCode); }); if (Ee)
        throw Ee; return oe; } function F(H) { for (var X = arguments.length, ye = new Array(X > 1 ? X - 1 : 0), ne = 1; ne < X; ne++)
        ye[ne - 1] = arguments[ne]; return function (oe, Ee) { var le = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; if ((le.parser === "babel" || le.parser === "__babel_estree") && W(oe, le))
        return le.parser = "babel-flow", M(oe, Ee, le); var ue = ye; le.__babelSourceType === "script" && (ue = ue.map(function (Y) { return Object.assign(Object.assign({}, Y), {}, { sourceType: "script" }); })), /#[[{]/.test(oe) && (ue = ue.map(function (Y) { return A([L], Y); })); var ht = /%[A-Z]/.test(oe); oe.includes("|>") ? ue = (ht ? __spreadArray(__spreadArray([], __read(O), false), [N], false) : O).flatMap(function (Re) { return ue.map(function (Gt) { return A([Re], Gt); }); }) : ht && (ue = ue.map(function (Y) { return A([N], Y); })); var _b = f.apply(void 0, __spreadArray([], __read(ue.map(function (Y) { return function () { return I(H, oe, Y); }; })), false)), ut = _b.result, Wt = _b.error; if (!ut)
        throw m(Wt); return le.originalText = oe, E(ut, le); }; } var z = F("parse", A(["jsx", "flow"])), M = F("parse", A(["jsx", ["flow", { all: !0, enums: !0 }]])), V = F("parse", A(["jsx", "typescript"]), A(["typescript"])), ee = F("parse", A(["jsx", "flow", "estree"])), b = F("parseExpression", A(["jsx"])), B = F("parseExpression", A(["typescript"])), te = new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]), R = P(z), ae = P(V), se = P(b), _e = P(B); h.exports = { parsers: Object.assign(Object.assign({ babel: R, "babel-flow": P(M), "babel-ts": ae }, S), {}, { __js_expression: se, __vue_expression: se, __vue_ts_expression: _e, __vue_event_binding: R, __vue_ts_event_binding: ae, __babel_estree: P(ee) }) }; } }), Tm = Rf();
exports.default = Tm;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
