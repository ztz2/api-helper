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
var y = function (e, r) { return function () { return (r || e((r = { exports: {} }).exports, r), r.exports); }; };
var ue = y(function (Gl, Wr) { var qe = function (e) { return e && e.Math == Math && e; }; Wr.exports = qe(typeof globalThis == "object" && globalThis) || qe(typeof window == "object" && window) || qe(typeof self == "object" && self) || qe(typeof global == "object" && global) || function () { return this; }() || Function("return this")(); });
var ae = y(function (Vl, Yr) { Yr.exports = function (e) { try {
    return !!e();
}
catch (_b) {
    return !0;
} }; });
var De = y(function (Xl, Qr) { var vs = ae(); Qr.exports = !vs(function () { return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7; }); });
var Ie = y(function (Hl, Kr) { var _s = ae(); Kr.exports = !_s(function () { var e = function () { }.bind(); return typeof e != "function" || e.hasOwnProperty("prototype"); }); });
var ce = y(function (zl, Jr) { var Ss = Ie(), Re = Function.prototype.call; Jr.exports = Ss ? Re.bind(Re) : function () { return Re.apply(Re, arguments); }; });
var uu = y(function (ru) {
    "use strict";
    var Zr = {}.propertyIsEnumerable, eu = Object.getOwnPropertyDescriptor, ys = eu && !Zr.call({ 1: 2 }, 1);
    ru.f = ys ? function (r) { var u = eu(this, r); return !!u && u.enumerable; } : Zr;
});
var xe = y(function (Yl, tu) { tu.exports = function (e, r) { return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r }; }; });
var te = y(function (Ql, iu) { var nu = Ie(), su = Function.prototype, rr = su.call, Ts = nu && su.bind.bind(rr, rr); iu.exports = nu ? Ts : function (e) { return function () { return rr.apply(e, arguments); }; }; });
var Ae = y(function (Kl, ou) { var au = te(), Bs = au({}.toString), bs = au("".slice); ou.exports = function (e) { return bs(Bs(e), 8, -1); }; });
var lu = y(function (Jl, Du) { var ws = te(), Ns = ae(), Os = Ae(), ur = Object, qs = ws("".split); Du.exports = Ns(function () { return !ur("z").propertyIsEnumerable(0); }) ? function (e) { return Os(e) == "String" ? qs(e, "") : ur(e); } : ur; });
var Pe = y(function (Zl, cu) { cu.exports = function (e) { return e == null; }; });
var tr = y(function (ec, hu) { var Is = Pe(), Rs = TypeError; hu.exports = function (e) { if (Is(e))
    throw Rs("Can't call method on " + e); return e; }; });
var ke = y(function (rc, pu) { var xs = lu(), Ps = tr(); pu.exports = function (e) { return xs(Ps(e)); }; });
var sr = y(function (uc, fu) { var nr = typeof document == "object" && document.all, ks = typeof nr > "u" && nr !== void 0; fu.exports = { all: nr, IS_HTMLDDA: ks }; });
var ee = y(function (tc, Eu) { var du = sr(), Ls = du.all; Eu.exports = du.IS_HTMLDDA ? function (e) { return typeof e == "function" || e === Ls; } : function (e) { return typeof e == "function"; }; });
var he = y(function (nc, gu) { var Cu = ee(), mu = sr(), $s = mu.all; gu.exports = mu.IS_HTMLDDA ? function (e) { return typeof e == "object" ? e !== null : Cu(e) || e === $s; } : function (e) { return typeof e == "object" ? e !== null : Cu(e); }; });
var ve = y(function (sc, Fu) { var ir = ue(), Ms = ee(), js = function (e) { return Ms(e) ? e : void 0; }; Fu.exports = function (e, r) { return arguments.length < 2 ? js(ir[e]) : ir[e] && ir[e][r]; }; });
var ar = y(function (ic, Au) { var Us = te(); Au.exports = Us({}.isPrototypeOf); });
var _u = y(function (ac, vu) { var Gs = ve(); vu.exports = Gs("navigator", "userAgent") || ""; });
var Nu = y(function (oc, wu) { var bu = ue(), or = _u(), Su = bu.process, yu = bu.Deno, Tu = Su && Su.versions || yu && yu.version, Bu = Tu && Tu.v8, ne, Le; Bu && (ne = Bu.split("."), Le = ne[0] > 0 && ne[0] < 4 ? 1 : +(ne[0] + ne[1])); !Le && or && (ne = or.match(/Edge\/(\d+)/), (!ne || ne[1] >= 74) && (ne = or.match(/Chrome\/(\d+)/), ne && (Le = +ne[1]))); wu.exports = Le; });
var Dr = y(function (Dc, qu) { var Ou = Nu(), Vs = ae(); qu.exports = !!Object.getOwnPropertySymbols && !Vs(function () { var e = Symbol(); return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ou && Ou < 41; }); });
var lr = y(function (lc, Iu) { var Xs = Dr(); Iu.exports = Xs && !Symbol.sham && typeof Symbol.iterator == "symbol"; });
var cr = y(function (cc, Ru) { var Hs = ve(), zs = ee(), Ws = ar(), Ys = lr(), Qs = Object; Ru.exports = Ys ? function (e) { return typeof e == "symbol"; } : function (e) { var r = Hs("Symbol"); return zs(r) && Ws(r.prototype, Qs(e)); }; });
var $e = y(function (hc, xu) { var Ks = String; xu.exports = function (e) { try {
    return Ks(e);
}
catch (_b) {
    return "Object";
} }; });
var _e = y(function (pc, Pu) { var Js = ee(), Zs = $e(), ei = TypeError; Pu.exports = function (e) { if (Js(e))
    return e; throw ei(Zs(e) + " is not a function"); }; });
var Me = y(function (fc, ku) { var ri = _e(), ui = Pe(); ku.exports = function (e, r) { var u = e[r]; return ui(u) ? void 0 : ri(u); }; });
var $u = y(function (dc, Lu) { var hr = ce(), pr = ee(), fr = he(), ti = TypeError; Lu.exports = function (e, r) { var u, n; if (r === "string" && pr(u = e.toString) && !fr(n = hr(u, e)) || pr(u = e.valueOf) && !fr(n = hr(u, e)) || r !== "string" && pr(u = e.toString) && !fr(n = hr(u, e)))
    return n; throw ti("Can't convert object to primitive value"); }; });
var ju = y(function (Ec, Mu) { Mu.exports = !1; });
var je = y(function (Cc, Gu) { var Uu = ue(), ni = Object.defineProperty; Gu.exports = function (e, r) { try {
    ni(Uu, e, { value: r, configurable: !0, writable: !0 });
}
catch (_b) {
    Uu[e] = r;
} return r; }; });
var Ue = y(function (mc, Xu) { var si = ue(), ii = je(), Vu = "__core-js_shared__", ai = si[Vu] || ii(Vu, {}); Xu.exports = ai; });
var dr = y(function (gc, zu) { var oi = ju(), Hu = Ue(); (zu.exports = function (e, r) { return Hu[e] || (Hu[e] = r !== void 0 ? r : {}); })("versions", []).push({ version: "3.26.1", mode: oi ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" }); });
var Er = y(function (Fc, Wu) { var Di = tr(), li = Object; Wu.exports = function (e) { return li(Di(e)); }; });
var le = y(function (Ac, Yu) { var ci = te(), hi = Er(), pi = ci({}.hasOwnProperty); Yu.exports = Object.hasOwn || function (r, u) { return pi(hi(r), u); }; });
var Cr = y(function (vc, Qu) { var fi = te(), di = 0, Ei = Math.random(), Ci = fi(1..toString); Qu.exports = function (e) { return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Ci(++di + Ei, 36); }; });
var fe = y(function (_c, rt) { var mi = ue(), gi = dr(), Ku = le(), Fi = Cr(), Ju = Dr(), et = lr(), Ce = gi("wks"), pe = mi.Symbol, Zu = pe && pe.for, Ai = et ? pe : pe && pe.withoutSetter || Fi; rt.exports = function (e) { if (!Ku(Ce, e) || !(Ju || typeof Ce[e] == "string")) {
    var r = "Symbol." + e;
    Ju && Ku(pe, e) ? Ce[e] = pe[e] : et && Zu ? Ce[e] = Zu(r) : Ce[e] = Ai(r);
} return Ce[e]; }; });
var st = y(function (Sc, nt) { var vi = ce(), ut = he(), tt = cr(), _i = Me(), Si = $u(), yi = fe(), Ti = TypeError, Bi = yi("toPrimitive"); nt.exports = function (e, r) { if (!ut(e) || tt(e))
    return e; var u = _i(e, Bi), n; if (u) {
    if (r === void 0 && (r = "default"), n = vi(u, e, r), !ut(n) || tt(n))
        return n;
    throw Ti("Can't convert object to primitive value");
} return r === void 0 && (r = "number"), Si(e, r); }; });
var Ge = y(function (yc, it) { var bi = st(), wi = cr(); it.exports = function (e) { var r = bi(e, "string"); return wi(r) ? r : r + ""; }; });
var Dt = y(function (Tc, ot) { var Ni = ue(), at = he(), mr = Ni.document, Oi = at(mr) && at(mr.createElement); ot.exports = function (e) { return Oi ? mr.createElement(e) : {}; }; });
var gr = y(function (Bc, lt) { var qi = De(), Ii = ae(), Ri = Dt(); lt.exports = !qi && !Ii(function () { return Object.defineProperty(Ri("div"), "a", { get: function () { return 7; } }).a != 7; }); });
var Fr = y(function (ht) { var xi = De(), Pi = ce(), ki = uu(), Li = xe(), $i = ke(), Mi = Ge(), ji = le(), Ui = gr(), ct = Object.getOwnPropertyDescriptor; ht.f = xi ? ct : function (r, u) { if (r = $i(r), u = Mi(u), Ui)
    try {
        return ct(r, u);
    }
    catch (_b) { } if (ji(r, u))
    return Li(!Pi(ki.f, r, u), r[u]); }; });
var ft = y(function (wc, pt) { var Gi = De(), Vi = ae(); pt.exports = Gi && Vi(function () { return Object.defineProperty(function () { }, "prototype", { value: 42, writable: !1 }).prototype != 42; }); });
var me = y(function (Nc, dt) { var Xi = he(), Hi = String, zi = TypeError; dt.exports = function (e) { if (Xi(e))
    return e; throw zi(Hi(e) + " is not an object"); }; });
var Se = y(function (Ct) { var Wi = De(), Yi = gr(), Qi = ft(), Ve = me(), Et = Ge(), Ki = TypeError, Ar = Object.defineProperty, Ji = Object.getOwnPropertyDescriptor, vr = "enumerable", _r = "configurable", Sr = "writable"; Ct.f = Wi ? Qi ? function (r, u, n) { if (Ve(r), u = Et(u), Ve(n), typeof r == "function" && u === "prototype" && "value" in n && Sr in n && !n[Sr]) {
    var D = Ji(r, u);
    D && D[Sr] && (r[u] = n.value, n = { configurable: _r in n ? n[_r] : D[_r], enumerable: vr in n ? n[vr] : D[vr], writable: !1 });
} return Ar(r, u, n); } : Ar : function (r, u, n) { if (Ve(r), u = Et(u), Ve(n), Yi)
    try {
        return Ar(r, u, n);
    }
    catch (_b) { } if ("get" in n || "set" in n)
    throw Ki("Accessors not supported"); return "value" in n && (r[u] = n.value), r; }; });
var yr = y(function (qc, mt) { var Zi = De(), ea = Se(), ra = xe(); mt.exports = Zi ? function (e, r, u) { return ea.f(e, r, ra(1, u)); } : function (e, r, u) { return e[r] = u, e; }; });
var At = y(function (Ic, Ft) { var Tr = De(), ua = le(), gt = Function.prototype, ta = Tr && Object.getOwnPropertyDescriptor, Br = ua(gt, "name"), na = Br && function () { }.name === "something", sa = Br && (!Tr || Tr && ta(gt, "name").configurable); Ft.exports = { EXISTS: Br, PROPER: na, CONFIGURABLE: sa }; });
var wr = y(function (Rc, vt) { var ia = te(), aa = ee(), br = Ue(), oa = ia(Function.toString); aa(br.inspectSource) || (br.inspectSource = function (e) { return oa(e); }); vt.exports = br.inspectSource; });
var yt = y(function (xc, St) { var Da = ue(), la = ee(), _t = Da.WeakMap; St.exports = la(_t) && /native code/.test(String(_t)); });
var bt = y(function (Pc, Bt) { var ca = dr(), ha = Cr(), Tt = ca("keys"); Bt.exports = function (e) { return Tt[e] || (Tt[e] = ha(e)); }; });
var Nr = y(function (kc, wt) { wt.exports = {}; });
var It = y(function (Lc, qt) { var pa = yt(), Ot = ue(), fa = he(), da = yr(), Or = le(), qr = Ue(), Ea = bt(), Ca = Nr(), Nt = "Object already initialized", Ir = Ot.TypeError, ma = Ot.WeakMap, Xe, ye, He, ga = function (e) { return He(e) ? ye(e) : Xe(e, {}); }, Fa = function (e) { return function (r) { var u; if (!fa(r) || (u = ye(r)).type !== e)
    throw Ir("Incompatible receiver, " + e + " required"); return u; }; }; pa || qr.state ? (se = qr.state || (qr.state = new ma), se.get = se.get, se.has = se.has, se.set = se.set, Xe = function (e, r) { if (se.has(e))
    throw Ir(Nt); return r.facade = e, se.set(e, r), r; }, ye = function (e) { return se.get(e) || {}; }, He = function (e) { return se.has(e); }) : (de = Ea("state"), Ca[de] = !0, Xe = function (e, r) { if (Or(e, de))
    throw Ir(Nt); return r.facade = e, da(e, de, r), r; }, ye = function (e) { return Or(e, de) ? e[de] : {}; }, He = function (e) { return Or(e, de); }); var se, de; qt.exports = { set: Xe, get: ye, has: He, enforce: ga, getterFor: Fa }; });
var Pt = y(function ($c, xt) { var Aa = ae(), va = ee(), ze = le(), Rr = De(), _a = At().CONFIGURABLE, Sa = wr(), Rt = It(), ya = Rt.enforce, Ta = Rt.get, We = Object.defineProperty, Ba = Rr && !Aa(function () { return We(function () { }, "length", { value: 8 }).length !== 8; }), ba = String(String).split("String"), wa = xt.exports = function (e, r, u) { String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), u && u.getter && (r = "get " + r), u && u.setter && (r = "set " + r), (!ze(e, "name") || _a && e.name !== r) && (Rr ? We(e, "name", { value: r, configurable: !0 }) : e.name = r), Ba && u && ze(u, "arity") && e.length !== u.arity && We(e, "length", { value: u.arity }); try {
    u && ze(u, "constructor") && u.constructor ? Rr && We(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
}
catch (_b) { } var n = ya(e); return ze(n, "source") || (n.source = ba.join(typeof r == "string" ? r : "")), e; }; Function.prototype.toString = wa(function () { return va(this) && Ta(this).source || Sa(this); }, "toString"); });
var Lt = y(function (Mc, kt) { var Na = ee(), Oa = Se(), qa = Pt(), Ia = je(); kt.exports = function (e, r, u, n) { n || (n = {}); var D = n.enumerable, s = n.name !== void 0 ? n.name : r; if (Na(u) && qa(u, s, n), n.global)
    D ? e[r] = u : Ia(r, u);
else {
    try {
        n.unsafe ? e[r] && (D = !0) : delete e[r];
    }
    catch (_b) { }
    D ? e[r] = u : Oa.f(e, r, { value: u, enumerable: !1, configurable: !n.nonConfigurable, writable: !n.nonWritable });
} return e; }; });
var Mt = y(function (jc, $t) { var Ra = Math.ceil, xa = Math.floor; $t.exports = Math.trunc || function (r) { var u = +r; return (u > 0 ? xa : Ra)(u); }; });
var xr = y(function (Uc, jt) { var Pa = Mt(); jt.exports = function (e) { var r = +e; return r !== r || r === 0 ? 0 : Pa(r); }; });
var Gt = y(function (Gc, Ut) { var ka = xr(), La = Math.max, $a = Math.min; Ut.exports = function (e, r) { var u = ka(e); return u < 0 ? La(u + r, 0) : $a(u, r); }; });
var Xt = y(function (Vc, Vt) { var Ma = xr(), ja = Math.min; Vt.exports = function (e) { return e > 0 ? ja(Ma(e), 9007199254740991) : 0; }; });
var Te = y(function (Xc, Ht) { var Ua = Xt(); Ht.exports = function (e) { return Ua(e.length); }; });
var Yt = y(function (Hc, Wt) { var Ga = ke(), Va = Gt(), Xa = Te(), zt = function (e) { return function (r, u, n) { var D = Ga(r), s = Xa(D), a = Va(n, s), f; if (e && u != u) {
    for (; s > a;)
        if (f = D[a++], f != f)
            return !0;
}
else
    for (; s > a; a++)
        if ((e || a in D) && D[a] === u)
            return e || a || 0; return !e && -1; }; }; Wt.exports = { includes: zt(!0), indexOf: zt(!1) }; });
var Jt = y(function (zc, Kt) { var Ha = te(), Pr = le(), za = ke(), Wa = Yt().indexOf, Ya = Nr(), Qt = Ha([].push); Kt.exports = function (e, r) { var u = za(e), n = 0, D = [], s; for (s in u)
    !Pr(Ya, s) && Pr(u, s) && Qt(D, s); for (; r.length > n;)
    Pr(u, s = r[n++]) && (~Wa(D, s) || Qt(D, s)); return D; }; });
var en = y(function (Wc, Zt) { Zt.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]; });
var un = y(function (rn) { var Qa = Jt(), Ka = en(), Ja = Ka.concat("length", "prototype"); rn.f = Object.getOwnPropertyNames || function (r) { return Qa(r, Ja); }; });
var nn = y(function (tn) { tn.f = Object.getOwnPropertySymbols; });
var an = y(function (Kc, sn) { var Za = ve(), eo = te(), ro = un(), uo = nn(), to = me(), no = eo([].concat); sn.exports = Za("Reflect", "ownKeys") || function (r) { var u = ro.f(to(r)), n = uo.f; return n ? no(u, n(r)) : u; }; });
var ln = y(function (Jc, Dn) { var on = le(), so = an(), io = Fr(), ao = Se(); Dn.exports = function (e, r, u) { for (var n = so(r), D = ao.f, s = io.f, a = 0; a < n.length; a++) {
    var f = n[a];
    !on(e, f) && !(u && on(u, f)) && D(e, f, s(r, f));
} }; });
var hn = y(function (Zc, cn) { var oo = ae(), Do = ee(), lo = /#|\.prototype\./, Be = function (e, r) { var u = ho[co(e)]; return u == fo ? !0 : u == po ? !1 : Do(r) ? oo(r) : !!r; }, co = Be.normalize = function (e) { return String(e).replace(lo, ".").toLowerCase(); }, ho = Be.data = {}, po = Be.NATIVE = "N", fo = Be.POLYFILL = "P"; cn.exports = Be; });
var Ye = y(function (e2, pn) { var kr = ue(), Eo = Fr().f, Co = yr(), mo = Lt(), go = je(), Fo = ln(), Ao = hn(); pn.exports = function (e, r) { var u = e.target, n = e.global, D = e.stat, s, a, f, c, v, i; if (n ? a = kr : D ? a = kr[u] || go(u, {}) : a = (kr[u] || {}).prototype, a)
    for (f in r) {
        if (v = r[f], e.dontCallGetSet ? (i = Eo(a, f), c = i && i.value) : c = a[f], s = Ao(n ? f : u + (D ? "." : "#") + f, e.forced), !s && c !== void 0) {
            if (typeof v == typeof c)
                continue;
            Fo(v, c);
        }
        (e.sham || c && c.sham) && Co(v, "sham", !0), mo(a, f, v, e);
    } }; });
var fn = y(function () { var vo = Ye(), Lr = ue(); vo({ global: !0, forced: Lr.globalThis !== Lr }, { globalThis: Lr }); });
var $r = y(function (t2, dn) { var _o = Ae(); dn.exports = Array.isArray || function (r) { return _o(r) == "Array"; }; });
var Cn = y(function (n2, En) { var So = TypeError, yo = 9007199254740991; En.exports = function (e) { if (e > yo)
    throw So("Maximum allowed index exceeded"); return e; }; });
var gn = y(function (s2, mn) { var To = Ae(), Bo = te(); mn.exports = function (e) { if (To(e) === "Function")
    return Bo(e); }; });
var Mr = y(function (i2, An) { var Fn = gn(), bo = _e(), wo = Ie(), No = Fn(Fn.bind); An.exports = function (e, r) { return bo(e), r === void 0 ? e : wo ? No(e, r) : function () { return e.apply(r, arguments); }; }; });
var Sn = y(function (a2, _n) {
    "use strict";
    var Oo = $r(), qo = Te(), Io = Cn(), Ro = Mr(), vn = function (e, r, u, n, D, s, a, f) { for (var c = D, v = 0, i = a ? Ro(a, f) : !1, l, p; v < n;)
        v in u && (l = i ? i(u[v], v, r) : u[v], s > 0 && Oo(l) ? (p = qo(l), c = vn(e, r, l, p, c, s - 1) - 1) : (Io(c + 1), e[c] = l), c++), v++; return c; };
    _n.exports = vn;
});
var Bn = y(function (o2, Tn) { var xo = fe(), Po = xo("toStringTag"), yn = {}; yn[Po] = "z"; Tn.exports = String(yn) === "[object z]"; });
var jr = y(function (D2, bn) { var ko = Bn(), Lo = ee(), Qe = Ae(), $o = fe(), Mo = $o("toStringTag"), jo = Object, Uo = Qe(function () { return arguments; }()) == "Arguments", Go = function (e, r) { try {
    return e[r];
}
catch (_b) { } }; bn.exports = ko ? Qe : function (e) { var r, u, n; return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (u = Go(r = jo(e), Mo)) == "string" ? u : Uo ? Qe(r) : (n = Qe(r)) == "Object" && Lo(r.callee) ? "Arguments" : n; }; });
var Rn = y(function (l2, In) { var Vo = te(), Xo = ae(), wn = ee(), Ho = jr(), zo = ve(), Wo = wr(), Nn = function () { }, Yo = [], On = zo("Reflect", "construct"), Ur = /^\s*(?:class|function)\b/, Qo = Vo(Ur.exec), Ko = !Ur.exec(Nn), be = function (r) { if (!wn(r))
    return !1; try {
    return On(Nn, Yo, r), !0;
}
catch (_b) {
    return !1;
} }, qn = function (r) { if (!wn(r))
    return !1; switch (Ho(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction": return !1;
} try {
    return Ko || !!Qo(Ur, Wo(r));
}
catch (_b) {
    return !0;
} }; qn.sham = !0; In.exports = !On || Xo(function () { var e; return be(be.call) || !be(Object) || !be(function () { e = !0; }) || e; }) ? qn : be; });
var Ln = y(function (c2, kn) { var xn = $r(), Jo = Rn(), Zo = he(), eD = fe(), rD = eD("species"), Pn = Array; kn.exports = function (e) { var r; return xn(e) && (r = e.constructor, Jo(r) && (r === Pn || xn(r.prototype)) ? r = void 0 : Zo(r) && (r = r[rD], r === null && (r = void 0))), r === void 0 ? Pn : r; }; });
var Mn = y(function (h2, $n) { var uD = Ln(); $n.exports = function (e, r) { return new (uD(e))(r === 0 ? 0 : r); }; });
var Gr = y(function (p2, jn) { jn.exports = {}; });
var Gn = y(function (f2, Un) { var DD = fe(), lD = Gr(), cD = DD("iterator"), hD = Array.prototype; Un.exports = function (e) { return e !== void 0 && (lD.Array === e || hD[cD] === e); }; });
var Vr = y(function (d2, Xn) { var pD = jr(), Vn = Me(), fD = Pe(), dD = Gr(), ED = fe(), CD = ED("iterator"); Xn.exports = function (e) { if (!fD(e))
    return Vn(e, CD) || Vn(e, "@@iterator") || dD[pD(e)]; }; });
var zn = y(function (E2, Hn) { var mD = ce(), gD = _e(), FD = me(), AD = $e(), vD = Vr(), _D = TypeError; Hn.exports = function (e, r) { var u = arguments.length < 2 ? vD(e) : r; if (gD(u))
    return FD(mD(u, e)); throw _D(AD(e) + " is not iterable"); }; });
var Qn = y(function (C2, Yn) { var SD = ce(), Wn = me(), yD = Me(); Yn.exports = function (e, r, u) { var n, D; Wn(e); try {
    if (n = yD(e, "return"), !n) {
        if (r === "throw")
            throw u;
        return u;
    }
    n = SD(n, e);
}
catch (s) {
    D = !0, n = s;
} if (r === "throw")
    throw u; if (D)
    throw n; return Wn(n), u; }; });
var rs = y(function (m2, es) { var TD = Mr(), BD = ce(), bD = me(), wD = $e(), ND = Gn(), OD = Te(), Kn = ar(), qD = zn(), ID = Vr(), Jn = Qn(), RD = TypeError, Ke = function (e, r) { this.stopped = e, this.result = r; }, Zn = Ke.prototype; es.exports = function (e, r, u) { var n = u && u.that, D = !!(u && u.AS_ENTRIES), s = !!(u && u.IS_RECORD), a = !!(u && u.IS_ITERATOR), f = !!(u && u.INTERRUPTED), c = TD(r, n), v, i, l, p, m, C, g, B = function (F) { return v && Jn(v, "normal", F), new Ke(!0, F); }, O = function (F) { return D ? (bD(F), f ? c(F[0], F[1], B) : c(F[0], F[1])) : f ? c(F, B) : c(F); }; if (s)
    v = e.iterator;
else if (a)
    v = e;
else {
    if (i = ID(e), !i)
        throw RD(wD(e) + " is not iterable");
    if (ND(i)) {
        for (l = 0, p = OD(e); p > l; l++)
            if (m = O(e[l]), m && Kn(Zn, m))
                return m;
        return new Ke(!1);
    }
    v = qD(e, i);
} for (C = s ? e.next : v.next; !(g = BD(C, v)).done;) {
    try {
        m = O(g.value);
    }
    catch (F) {
        Jn(v, "throw", F);
    }
    if (typeof m == "object" && m && Kn(Zn, m))
        return m;
} return new Ke(!1); }; });
var ts = y(function (g2, us) {
    "use strict";
    var xD = Ge(), PD = Se(), kD = xe();
    us.exports = function (e, r, u) { var n = xD(r); n in e ? PD.f(e, n, kD(0, u)) : e[n] = u; };
});
fn();
var tD = Ye(), nD = Sn(), sD = _e(), iD = Er(), aD = Te(), oD = Mn();
tD({ target: "Array", proto: !0 }, { flatMap: function (r) { var u = iD(this), n = aD(u), D; return sD(r), D = oD(u, 0), D.length = nD(D, u, u, n, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D; } });
var LD = Ye(), $D = rs(), MD = ts();
LD({ target: "Object", stat: !0 }, { fromEntries: function (r) { var u = {}; return $D(r, function (n, D) { MD(u, n, D); }, { AS_ENTRIES: !0 }), u; } });
var jD = ["cliName", "cliCategory", "cliDescription"];
function UD(e, r) { if (e == null)
    return {}; var u = GD(e, r), n, D; if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (D = 0; D < s.length; D++)
        n = s[D], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]);
} return u; }
function GD(e, r) { if (e == null)
    return {}; var u = {}, n = Object.keys(e), D, s; for (s = 0; s < n.length; s++)
    D = n[s], !(r.indexOf(D) >= 0) && (u[D] = e[D]); return u; }
var VD = Object.create, Je = Object.defineProperty, XD = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyNames, HD = Object.getPrototypeOf, zD = Object.prototype.hasOwnProperty, ge = function (e, r) { return function () { return e && (r = (0, e[Xr(e)[0]])(e = 0)), r; }; }, I = function (e, r) { return function () { return r || (0, e[Xr(e)[0]])((r = { exports: {} }).exports, r), r.exports; }; }, is = function (e, r) { for (var u in r)
    Je(e, u, { get: r[u], enumerable: !0 }); }, as = function (e, r, u, n) {
    var e_1, _b;
    if (r && typeof r == "object" || typeof r == "function") {
        var _loop_1 = function (D) {
            !zD.call(e, D) && D !== u && Je(e, D, { get: function () { return r[D]; }, enumerable: !(n = XD(r, D)) || n.enumerable });
        };
        try {
            for (var _d = __values(Xr(r)), _f = _d.next(); !_f.done; _f = _d.next()) {
                var D = _f.value;
                _loop_1(D);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return e;
}, WD = function (e, r, u) { return (u = e != null ? VD(HD(e)) : {}, as(r || !e || !e.__esModule ? Je(u, "default", { value: e, enumerable: !0 }) : u, e)); }, os = function (e) { return as(Je({}, "__esModule", { value: !0 }), e); }, we, N = ge({ "<define:process>": function () { we = { env: {}, argv: [] }; } }), Ds = I({ "node_modules/angular-html-parser/lib/compiler/src/chars.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(f) { return f >= e.$TAB && f <= e.$SPACE || f == e.$NBSP; }
        e.isWhitespace = r;
        function u(f) { return e.$0 <= f && f <= e.$9; }
        e.isDigit = u;
        function n(f) { return f >= e.$a && f <= e.$z || f >= e.$A && f <= e.$Z; }
        e.isAsciiLetter = n;
        function D(f) { return f >= e.$a && f <= e.$f || f >= e.$A && f <= e.$F || u(f); }
        e.isAsciiHexDigit = D;
        function s(f) { return f === e.$LF || f === e.$CR; }
        e.isNewLine = s;
        function a(f) { return e.$0 <= f && f <= e.$7; }
        e.isOctalDigit = a;
    } }), YD = I({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = /** @class */ (function () {
            function r(n, D, s) {
                this.filePath = n, this.name = D, this.members = s;
            }
            r.prototype.assertNoMembers = function () { if (this.members.length)
                throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), ".")); };
            return r;
        }());
        e.StaticSymbol = r;
        var u = /** @class */ (function () {
            function u() {
                this.cache = new Map;
            }
            u.prototype.get = function (n, D, s) { s = s || []; var a = s.length ? ".".concat(s.join(".")) : "", f = "\"".concat(n, "\".").concat(D).concat(a), c = this.cache.get(f); return c || (c = new r(n, D, s), this.cache.set(f, c)), c; };
            return u;
        }());
        e.StaticSymbolCache = u;
    } }), QD = I({ "node_modules/angular-html-parser/lib/compiler/src/util.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = /-+([a-z0-9])/g;
        function u(o) { return o.replace(r, function () { for (var d = arguments.length, h = new Array(d), A = 0; A < d; A++)
            h[A] = arguments[A]; return h[1].toUpperCase(); }); }
        e.dashCaseToCamelCase = u;
        function n(o, d) { return s(o, ":", d); }
        e.splitAtColon = n;
        function D(o, d) { return s(o, ".", d); }
        e.splitAtPeriod = D;
        function s(o, d, h) { var A = o.indexOf(d); return A == -1 ? h : [o.slice(0, A).trim(), o.slice(A + 1).trim()]; }
        function a(o, d, h) { return Array.isArray(o) ? d.visitArray(o, h) : F(o) ? d.visitStringMap(o, h) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? d.visitPrimitive(o, h) : d.visitOther(o, h); }
        e.visitValue = a;
        function f(o) { return o != null; }
        e.isDefined = f;
        function c(o) { return o === void 0 ? null : o; }
        e.noUndefined = c;
        var v = /** @class */ (function () {
            function v() {
            }
            v.prototype.visitArray = function (o, d) {
                var _this = this;
                return o.map(function (h) { return a(h, _this, d); });
            };
            v.prototype.visitStringMap = function (o, d) {
                var _this = this;
                var h = {};
                return Object.keys(o).forEach(function (A) { h[A] = a(o[A], _this, d); }), h;
            };
            v.prototype.visitPrimitive = function (o, d) { return o; };
            v.prototype.visitOther = function (o, d) { return o; };
            return v;
        }());
        e.ValueTransformer = v, e.SyncAsync = { assertSync: function (o) { if (R(o))
                throw new Error("Illegal state: value cannot be a promise"); return o; }, then: function (o, d) { return R(o) ? o.then(d) : d(o); }, all: function (o) { return o.some(R) ? Promise.all(o) : o; } };
        function i(o) { throw new Error("Internal Error: ".concat(o)); }
        e.error = i;
        function l(o, d) { var h = Error(o); return h[p] = !0, d && (h[m] = d), h; }
        e.syntaxError = l;
        var p = "ngSyntaxError", m = "ngParseErrors";
        function C(o) { return o[p]; }
        e.isSyntaxError = C;
        function g(o) { return o[m] || []; }
        e.getParseErrors = g;
        function B(o) { return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); }
        e.escapeRegExp = B;
        var O = Object.getPrototypeOf({});
        function F(o) { return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === O; }
        function w(o) { var d = ""; for (var h = 0; h < o.length; h++) {
            var A = o.charCodeAt(h);
            if (A >= 55296 && A <= 56319 && o.length > h + 1) {
                var q = o.charCodeAt(h + 1);
                q >= 56320 && q <= 57343 && (h++, A = (A - 55296 << 10) + q - 56320 + 65536);
            }
            A <= 127 ? d += String.fromCharCode(A) : A <= 2047 ? d += String.fromCharCode(A >> 6 & 31 | 192, A & 63 | 128) : A <= 65535 ? d += String.fromCharCode(A >> 12 | 224, A >> 6 & 63 | 128, A & 63 | 128) : A <= 2097151 && (d += String.fromCharCode(A >> 18 & 7 | 240, A >> 12 & 63 | 128, A >> 6 & 63 | 128, A & 63 | 128));
        } return d; }
        e.utf8Encode = w;
        function b(o) {
            if (typeof o == "string")
                return o;
            if (o instanceof Array)
                return "[" + o.map(b).join(", ") + "]";
            if (o == null)
                return "" + o;
            if (o.overriddenName)
                return "".concat(o.overriddenName);
            if (o.name)
                return "".concat(o.name);
            if (!o.toString)
                return "object";
            var d = o.toString();
            if (d == null)
                return "" + d;
            var h = d.indexOf("\n");
            return h === -1 ? d : d.substring(0, h);
        }
        e.stringify = b;
        function M(o) { return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o; }
        e.resolveForwardRef = M;
        function R(o) { return !!o && typeof o.then == "function"; }
        e.isPromise = R;
        var U = /** @class */ (function () {
            function U(o) {
                this.full = o;
                var d = o.split(".");
                this.major = d[0], this.minor = d[1], this.patch = d.slice(2).join(".");
            }
            return U;
        }());
        e.Version = U;
        var k = typeof window < "u" && window, j = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, L = typeof globalThis < "u" && globalThis, t = L || k || j;
        e.global = t;
    } }), KD = I({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = YD(), u = QD(), n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function D(h) { return h.replace(/\W/g, "_"); }
        e.sanitizeIdentifier = D;
        var s = 0;
        function a(h) { if (!h || !h.reference)
            return null; var A = h.reference; if (A instanceof r.StaticSymbol)
            return A.name; if (A.__anonymousType)
            return A.__anonymousType; var q = u.stringify(A); return q.indexOf("(") >= 0 ? (q = "anonymous_".concat(s++), A.__anonymousType = q) : q = D(q), q; }
        e.identifierName = a;
        function f(h) { var A = h.reference; return A instanceof r.StaticSymbol ? A.filePath : "./".concat(u.stringify(A)); }
        e.identifierModuleUrl = f;
        function c(h, A) { return "View_".concat(a({ reference: h }), "_").concat(A); }
        e.viewClassName = c;
        function v(h) { return "RenderType_".concat(a({ reference: h })); }
        e.rendererTypeName = v;
        function i(h) { return "HostView_".concat(a({ reference: h })); }
        e.hostViewClassName = i;
        function l(h) { return "".concat(a({ reference: h }), "NgFactory"); }
        e.componentFactoryName = l;
        var p;
        (function (h) { h[h.Pipe = 0] = "Pipe", h[h.Directive = 1] = "Directive", h[h.NgModule = 2] = "NgModule", h[h.Injectable = 3] = "Injectable"; })(p = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function m(h) { return h.value != null ? D(h.value) : a(h.identifier); }
        e.tokenName = m;
        function C(h) { return h.identifier != null ? h.identifier.reference : h.value; }
        e.tokenReference = C;
        var g = /** @class */ (function () {
            function g() {
                var _b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = _b.moduleUrl, A = _b.styles, q = _b.styleUrls;
                this.moduleUrl = h || null, this.styles = R(A), this.styleUrls = R(q);
            }
            return g;
        }());
        e.CompileStylesheetMetadata = g;
        var B = /** @class */ (function () {
            function B(h) {
                var A = h.encapsulation, q = h.template, P = h.templateUrl, G = h.htmlAst, X = h.styles, Q = h.styleUrls, H = h.externalStylesheets, W = h.animations, K = h.ngContentSelectors, J = h.interpolation, S = h.isInline, E = h.preserveWhitespaces;
                if (this.encapsulation = A, this.template = q, this.templateUrl = P, this.htmlAst = G, this.styles = R(X), this.styleUrls = R(Q), this.externalStylesheets = R(H), this.animations = W ? k(W) : [], this.ngContentSelectors = K || [], J && J.length != 2)
                    throw new Error("'interpolation' should have a start and an end symbol.");
                this.interpolation = J, this.isInline = S, this.preserveWhitespaces = E;
            }
            B.prototype.toSummary = function () { return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations }; };
            return B;
        }());
        e.CompileTemplateMetadata = B;
        var O = /** @class */ (function () {
            function O(h) {
                var A = h.isHost, q = h.type, P = h.isComponent, G = h.selector, X = h.exportAs, Q = h.changeDetection, H = h.inputs, W = h.outputs, K = h.hostListeners, J = h.hostProperties, S = h.hostAttributes, E = h.providers, _ = h.viewProviders, T = h.queries, x = h.guards, $ = h.viewQueries, V = h.entryComponents, z = h.template, Y = h.componentViewType, ie = h.rendererType, Ee = h.componentFactory;
                this.isHost = !!A, this.type = q, this.isComponent = P, this.selector = G, this.exportAs = X, this.changeDetection = Q, this.inputs = H, this.outputs = W, this.hostListeners = K, this.hostProperties = J, this.hostAttributes = S, this.providers = R(E), this.viewProviders = R(_), this.queries = R(T), this.guards = x, this.viewQueries = R($), this.entryComponents = R(V), this.template = z, this.componentViewType = Y, this.rendererType = ie, this.componentFactory = Ee;
            }
            O.create = function (h) { var A = h.isHost, q = h.type, P = h.isComponent, G = h.selector, X = h.exportAs, Q = h.changeDetection, H = h.inputs, W = h.outputs, K = h.host, J = h.providers, S = h.viewProviders, E = h.queries, _ = h.guards, T = h.viewQueries, x = h.entryComponents, $ = h.template, V = h.componentViewType, z = h.rendererType, Y = h.componentFactory, ie = {}, Ee = {}, er = {}; K != null && Object.keys(K).forEach(function (Z) { var re = K[Z], oe = Z.match(n); oe === null ? er[Z] = re : oe[1] != null ? Ee[oe[1]] = re : oe[2] != null && (ie[oe[2]] = re); }); var Fe = {}; H != null && H.forEach(function (Z) { var re = u.splitAtColon(Z, [Z, Z]); Fe[re[0]] = re[1]; }); var Oe = {}; return W != null && W.forEach(function (Z) { var re = u.splitAtColon(Z, [Z, Z]); Oe[re[0]] = re[1]; }), new O({ isHost: A, type: q, isComponent: !!P, selector: G, exportAs: X, changeDetection: Q, inputs: Fe, outputs: Oe, hostListeners: ie, hostProperties: Ee, hostAttributes: er, providers: J, viewProviders: S, queries: E, guards: _, viewQueries: T, entryComponents: x, template: $, componentViewType: V, rendererType: z, componentFactory: Y }); };
            O.prototype.toSummary = function () { return { summaryKind: p.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory }; };
            return O;
        }());
        e.CompileDirectiveMetadata = O;
        var F = /** @class */ (function () {
            function F(h) {
                var A = h.type, q = h.name, P = h.pure;
                this.type = A, this.name = q, this.pure = !!P;
            }
            F.prototype.toSummary = function () { return { summaryKind: p.Pipe, type: this.type, name: this.name, pure: this.pure }; };
            return F;
        }());
        e.CompilePipeMetadata = F;
        var w = /** @class */ (function () {
            function w() {
            }
            return w;
        }());
        e.CompileShallowModuleMetadata = w;
        var b = /** @class */ (function () {
            function b(h) {
                var A = h.type, q = h.providers, P = h.declaredDirectives, G = h.exportedDirectives, X = h.declaredPipes, Q = h.exportedPipes, H = h.entryComponents, W = h.bootstrapComponents, K = h.importedModules, J = h.exportedModules, S = h.schemas, E = h.transitiveModule, _ = h.id;
                this.type = A || null, this.declaredDirectives = R(P), this.exportedDirectives = R(G), this.declaredPipes = R(X), this.exportedPipes = R(Q), this.providers = R(q), this.entryComponents = R(H), this.bootstrapComponents = R(W), this.importedModules = R(K), this.exportedModules = R(J), this.schemas = R(S), this.id = _ || null, this.transitiveModule = E || null;
            }
            b.prototype.toSummary = function () { var h = this.transitiveModule; return { summaryKind: p.NgModule, type: this.type, entryComponents: h.entryComponents, providers: h.providers, modules: h.modules, exportedDirectives: h.exportedDirectives, exportedPipes: h.exportedPipes }; };
            return b;
        }());
        e.CompileNgModuleMetadata = b;
        var M = /** @class */ (function () {
            function M() {
                this.directivesSet = new Set, this.directives = [], this.exportedDirectivesSet = new Set, this.exportedDirectives = [], this.pipesSet = new Set, this.pipes = [], this.exportedPipesSet = new Set, this.exportedPipes = [], this.modulesSet = new Set, this.modules = [], this.entryComponentsSet = new Set, this.entryComponents = [], this.providers = [];
            }
            M.prototype.addProvider = function (h, A) { this.providers.push({ provider: h, module: A }); };
            M.prototype.addDirective = function (h) { this.directivesSet.has(h.reference) || (this.directivesSet.add(h.reference), this.directives.push(h)); };
            M.prototype.addExportedDirective = function (h) { this.exportedDirectivesSet.has(h.reference) || (this.exportedDirectivesSet.add(h.reference), this.exportedDirectives.push(h)); };
            M.prototype.addPipe = function (h) { this.pipesSet.has(h.reference) || (this.pipesSet.add(h.reference), this.pipes.push(h)); };
            M.prototype.addExportedPipe = function (h) { this.exportedPipesSet.has(h.reference) || (this.exportedPipesSet.add(h.reference), this.exportedPipes.push(h)); };
            M.prototype.addModule = function (h) { this.modulesSet.has(h.reference) || (this.modulesSet.add(h.reference), this.modules.push(h)); };
            M.prototype.addEntryComponent = function (h) { this.entryComponentsSet.has(h.componentType) || (this.entryComponentsSet.add(h.componentType), this.entryComponents.push(h)); };
            return M;
        }());
        e.TransitiveCompileNgModuleMetadata = M;
        function R(h) { return h || []; }
        var U = /** @class */ (function () {
            function U(h, A) {
                var q = A.useClass, P = A.useValue, G = A.useExisting, X = A.useFactory, Q = A.deps, H = A.multi;
                this.token = h, this.useClass = q || null, this.useValue = P, this.useExisting = G, this.useFactory = X || null, this.dependencies = Q || null, this.multi = !!H;
            }
            return U;
        }());
        e.ProviderMeta = U;
        function k(h) { return h.reduce(function (A, q) { var P = Array.isArray(q) ? k(q) : q; return A.concat(P); }, []); }
        e.flatten = k;
        function j(h) { return h.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///"); }
        function L(h, A, q) { var P; return q.isInline ? A.type.reference instanceof r.StaticSymbol ? P = "".concat(A.type.reference.filePath, ".").concat(A.type.reference.name, ".html") : P = "".concat(a(h), "/").concat(a(A.type), ".html") : P = q.templateUrl, A.type.reference instanceof r.StaticSymbol ? P : j(P); }
        e.templateSourceUrl = L;
        function t(h, A) { var q = h.moduleUrl.split(/\/\\/g), P = q[q.length - 1]; return j("css/".concat(A).concat(P, ".ngstyle.js")); }
        e.sharedStylesheetJitUrl = t;
        function o(h) { return j("".concat(a(h.type), "/module.ngfactory.js")); }
        e.ngModuleJitUrl = o;
        function d(h, A) { return j("".concat(a(h), "/").concat(a(A.type), ".ngfactory.js")); }
        e.templateJitUrl = d;
    } }), Ne = I({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ds(), u = KD(), n = /** @class */ (function () {
            function n(i, l, p, m) {
                this.file = i, this.offset = l, this.line = p, this.col = m;
            }
            n.prototype.toString = function () { return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url; };
            n.prototype.moveBy = function (i) { var l = this.file.content, p = l.length, m = this.offset, C = this.line, g = this.col; for (; m > 0 && i < 0;)
                if (m--, i++, l.charCodeAt(m) == r.$LF) {
                    C--;
                    var O = l.substr(0, m - 1).lastIndexOf(String.fromCharCode(r.$LF));
                    g = O > 0 ? m - O : m;
                }
                else
                    g--; for (; m < p && i > 0;) {
                var B = l.charCodeAt(m);
                m++, i--, B == r.$LF ? (C++, g = 0) : g++;
            } return new n(this.file, m, C, g); };
            n.prototype.getContext = function (i, l) {
                var p = this.file.content, m = this.offset;
                if (m != null) {
                    m > p.length - 1 && (m = p.length - 1);
                    var C = m, g = 0, B = 0;
                    for (; g < i && m > 0 && (m--, g++, !(p[m] == "\n" && ++B == l));)
                        ;
                    for (g = 0, B = 0; g < i && C < p.length - 1 && (C++, g++, !(p[C] == "\n" && ++B == l));)
                        ;
                    return { before: p.substring(m, this.offset), after: p.substring(this.offset, C + 1) };
                }
                return null;
            };
            return n;
        }());
        e.ParseLocation = n;
        var D = /** @class */ (function () {
            function D(i, l) {
                this.content = i, this.url = l;
            }
            return D;
        }());
        e.ParseSourceFile = D;
        var s = /** @class */ (function () {
            function s(i, l) {
                var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                this.start = i, this.end = l, this.details = p;
            }
            s.prototype.toString = function () { return this.start.file.content.substring(this.start.offset, this.end.offset); };
            return s;
        }());
        e.ParseSourceSpan = s, e.EMPTY_PARSE_LOCATION = new n(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new s(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var a;
        (function (i) { i[i.WARNING = 0] = "WARNING", i[i.ERROR = 1] = "ERROR"; })(a = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var f = /** @class */ (function () {
            function f(i, l) {
                var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.ERROR;
                this.span = i, this.msg = l, this.level = p;
            }
            f.prototype.contextualMessage = function () { var i = this.span.start.getContext(100, 3); return i ? "".concat(this.msg, " (\"").concat(i.before, "[").concat(a[this.level], " ->]").concat(i.after, "\")") : this.msg; };
            f.prototype.toString = function () { var i = this.span.details ? ", ".concat(this.span.details) : ""; return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(i); };
            return f;
        }());
        e.ParseError = f;
        function c(i, l) { var p = u.identifierModuleUrl(l), m = p != null ? "in ".concat(i, " ").concat(u.identifierName(l), " in ").concat(p) : "in ".concat(i, " ").concat(u.identifierName(l)), C = new D("", m); return new s(new n(C, -1, -1, -1), new n(C, -1, -1, -1)); }
        e.typeSourceSpan = c;
        function v(i, l, p) { var m = "in ".concat(i, " ").concat(l, " in ").concat(p), C = new D("", m); return new s(new n(C, -1, -1, -1), new n(C, -1, -1, -1)); }
        e.r3JitTypeSourceSpan = v;
    } }), JD = I({ "src/utils/front-matter/parse.js": function (e, r) {
        "use strict";
        N();
        var u = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function n(D) { var s = D.match(u); if (!s)
            return { content: D }; var _b = s.groups, a = _b.startDelimiter, f = _b.language, _d = _b.value, c = _d === void 0 ? "" : _d, v = _b.endDelimiter, i = f.trim() || "yaml"; if (a === "+++" && (i = "toml"), i !== "yaml" && a !== v)
            return { content: D }; var _f = __read(s, 1), l = _f[0]; return { frontMatter: { type: "front-matter", lang: i, value: c, startDelimiter: a, endDelimiter: v, raw: l.replace(/\n$/, "") }, content: l.replace(/[^\n]/g, " ") + D.slice(l.length) }; }
        r.exports = n;
    } }), ls = I({ "src/utils/get-last.js": function (e, r) {
        "use strict";
        N();
        var u = function (n) { return n[n.length - 1]; };
        r.exports = u;
    } }), ZD = I({ "src/common/parser-create-error.js": function (e, r) {
        "use strict";
        N();
        function u(n, D) { var s = new SyntaxError(n + " (" + D.start.line + ":" + D.start.column + ")"); return s.loc = D, s; }
        r.exports = u;
    } }), cs = {};
is(cs, { default: function () { return el; } });
function el(e) { if (typeof e != "string")
    throw new TypeError("Expected a string"); return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"); }
var rl = ge({ "node_modules/escape-string-regexp/index.js": function () { N(); } }), hs = I({ "node_modules/semver/internal/debug.js": function (e, r) { N(); var u = typeof we == "object" && we.env && we.env.NODE_DEBUG && /\bsemver\b/i.test(we.env.NODE_DEBUG) ? function () { for (var n = arguments.length, D = new Array(n), s = 0; s < n; s++)
        D[s] = arguments[s]; return console.error.apply(console, __spreadArray(["SEMVER"], __read(D), false)); } : function () { }; r.exports = u; } }), ps = I({ "node_modules/semver/internal/constants.js": function (e, r) { N(); var u = "2.0.0", n = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, s = 16; r.exports = { SEMVER_SPEC_VERSION: u, MAX_LENGTH: n, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: s }; } }), ul = I({ "node_modules/semver/internal/re.js": function (e, r) { N(); var u = ps().MAX_SAFE_COMPONENT_LENGTH, n = hs(); e = r.exports = {}; var D = e.re = [], s = e.src = [], a = e.t = {}, f = 0, c = function (v, i, l) { var p = f++; n(v, p, i), a[v] = p, s[p] = i, D[p] = new RegExp(i, l ? "g" : void 0); }; c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", "(".concat(s[a.NUMERICIDENTIFIER], ")\\.(").concat(s[a.NUMERICIDENTIFIER], ")\\.(").concat(s[a.NUMERICIDENTIFIER], ")")), c("MAINVERSIONLOOSE", "(".concat(s[a.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(s[a.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(s[a.NUMERICIDENTIFIERLOOSE], ")")), c("PRERELEASEIDENTIFIER", "(?:".concat(s[a.NUMERICIDENTIFIER], "|").concat(s[a.NONNUMERICIDENTIFIER], ")")), c("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(s[a.NUMERICIDENTIFIERLOOSE], "|").concat(s[a.NONNUMERICIDENTIFIER], ")")), c("PRERELEASE", "(?:-(".concat(s[a.PRERELEASEIDENTIFIER], "(?:\\.").concat(s[a.PRERELEASEIDENTIFIER], ")*))")), c("PRERELEASELOOSE", "(?:-?(".concat(s[a.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(s[a.PRERELEASEIDENTIFIERLOOSE], ")*))")), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", "(?:\\+(".concat(s[a.BUILDIDENTIFIER], "(?:\\.").concat(s[a.BUILDIDENTIFIER], ")*))")), c("FULLPLAIN", "v?".concat(s[a.MAINVERSION]).concat(s[a.PRERELEASE], "?").concat(s[a.BUILD], "?")), c("FULL", "^".concat(s[a.FULLPLAIN], "$")), c("LOOSEPLAIN", "[v=\\s]*".concat(s[a.MAINVERSIONLOOSE]).concat(s[a.PRERELEASELOOSE], "?").concat(s[a.BUILD], "?")), c("LOOSE", "^".concat(s[a.LOOSEPLAIN], "$")), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", "".concat(s[a.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), c("XRANGEIDENTIFIER", "".concat(s[a.NUMERICIDENTIFIER], "|x|X|\\*")), c("XRANGEPLAIN", "[v=\\s]*(".concat(s[a.XRANGEIDENTIFIER], ")(?:\\.(").concat(s[a.XRANGEIDENTIFIER], ")(?:\\.(").concat(s[a.XRANGEIDENTIFIER], ")(?:").concat(s[a.PRERELEASE], ")?").concat(s[a.BUILD], "?)?)?")), c("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(s[a.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(s[a.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(s[a.XRANGEIDENTIFIERLOOSE], ")(?:").concat(s[a.PRERELEASELOOSE], ")?").concat(s[a.BUILD], "?)?)?")), c("XRANGE", "^".concat(s[a.GTLT], "\\s*").concat(s[a.XRANGEPLAIN], "$")), c("XRANGELOOSE", "^".concat(s[a.GTLT], "\\s*").concat(s[a.XRANGEPLAINLOOSE], "$")), c("COERCE", "(^|[^\\d])(\\d{1,".concat(u, "})(?:\\.(\\d{1,").concat(u, "}))?(?:\\.(\\d{1,").concat(u, "}))?(?:$|[^\\d])")), c("COERCERTL", s[a.COERCE], !0), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", "(\\s*)".concat(s[a.LONETILDE], "\\s+"), !0), e.tildeTrimReplace = "$1~", c("TILDE", "^".concat(s[a.LONETILDE]).concat(s[a.XRANGEPLAIN], "$")), c("TILDELOOSE", "^".concat(s[a.LONETILDE]).concat(s[a.XRANGEPLAINLOOSE], "$")), c("LONECARET", "(?:\\^)"), c("CARETTRIM", "(\\s*)".concat(s[a.LONECARET], "\\s+"), !0), e.caretTrimReplace = "$1^", c("CARET", "^".concat(s[a.LONECARET]).concat(s[a.XRANGEPLAIN], "$")), c("CARETLOOSE", "^".concat(s[a.LONECARET]).concat(s[a.XRANGEPLAINLOOSE], "$")), c("COMPARATORLOOSE", "^".concat(s[a.GTLT], "\\s*(").concat(s[a.LOOSEPLAIN], ")$|^$")), c("COMPARATOR", "^".concat(s[a.GTLT], "\\s*(").concat(s[a.FULLPLAIN], ")$|^$")), c("COMPARATORTRIM", "(\\s*)".concat(s[a.GTLT], "\\s*(").concat(s[a.LOOSEPLAIN], "|").concat(s[a.XRANGEPLAIN], ")"), !0), e.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", "^\\s*(".concat(s[a.XRANGEPLAIN], ")\\s+-\\s+(").concat(s[a.XRANGEPLAIN], ")\\s*$")), c("HYPHENRANGELOOSE", "^\\s*(".concat(s[a.XRANGEPLAINLOOSE], ")\\s+-\\s+(").concat(s[a.XRANGEPLAINLOOSE], ")\\s*$")), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$"); } }), tl = I({ "node_modules/semver/internal/parse-options.js": function (e, r) { N(); var u = ["includePrerelease", "loose", "rtl"], n = function (D) { return D ? typeof D != "object" ? { loose: !0 } : u.filter(function (s) { return D[s]; }).reduce(function (s, a) { return (s[a] = !0, s); }, {}) : {}; }; r.exports = n; } }), nl = I({ "node_modules/semver/internal/identifiers.js": function (e, r) { N(); var u = /^[0-9]+$/, n = function (s, a) { var f = u.test(s), c = u.test(a); return f && c && (s = +s, a = +a), s === a ? 0 : f && !c ? -1 : c && !f ? 1 : s < a ? -1 : 1; }, D = function (s, a) { return n(a, s); }; r.exports = { compareIdentifiers: n, rcompareIdentifiers: D }; } }), sl = I({ "node_modules/semver/classes/semver.js": function (e, r) { N(); var u = hs(), _b = ps(), n = _b.MAX_LENGTH, D = _b.MAX_SAFE_INTEGER, _d = ul(), s = _d.re, a = _d.t, f = tl(), c = nl().compareIdentifiers, v = /** @class */ (function () {
        function v(i, l) {
            if (l = f(l), i instanceof v) {
                if (i.loose === !!l.loose && i.includePrerelease === !!l.includePrerelease)
                    return i;
                i = i.version;
            }
            else if (typeof i != "string")
                throw new TypeError("Invalid Version: ".concat(i));
            if (i.length > n)
                throw new TypeError("version is longer than ".concat(n, " characters"));
            u("SemVer", i, l), this.options = l, this.loose = !!l.loose, this.includePrerelease = !!l.includePrerelease;
            var p = i.trim().match(l.loose ? s[a.LOOSE] : s[a.FULL]);
            if (!p)
                throw new TypeError("Invalid Version: ".concat(i));
            if (this.raw = i, this.major = +p[1], this.minor = +p[2], this.patch = +p[3], this.major > D || this.major < 0)
                throw new TypeError("Invalid major version");
            if (this.minor > D || this.minor < 0)
                throw new TypeError("Invalid minor version");
            if (this.patch > D || this.patch < 0)
                throw new TypeError("Invalid patch version");
            p[4] ? this.prerelease = p[4].split(".").map(function (m) { if (/^[0-9]+$/.test(m)) {
                var C = +m;
                if (C >= 0 && C < D)
                    return C;
            } return m; }) : this.prerelease = [], this.build = p[5] ? p[5].split(".") : [], this.format();
        }
        v.prototype.format = function () { return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version; };
        v.prototype.toString = function () { return this.version; };
        v.prototype.compare = function (i) { if (u("SemVer.compare", this.version, this.options, i), !(i instanceof v)) {
            if (typeof i == "string" && i === this.version)
                return 0;
            i = new v(i, this.options);
        } return i.version === this.version ? 0 : this.compareMain(i) || this.comparePre(i); };
        v.prototype.compareMain = function (i) { return i instanceof v || (i = new v(i, this.options)), c(this.major, i.major) || c(this.minor, i.minor) || c(this.patch, i.patch); };
        v.prototype.comparePre = function (i) { if (i instanceof v || (i = new v(i, this.options)), this.prerelease.length && !i.prerelease.length)
            return -1; if (!this.prerelease.length && i.prerelease.length)
            return 1; if (!this.prerelease.length && !i.prerelease.length)
            return 0; var l = 0; do {
            var p = this.prerelease[l], m = i.prerelease[l];
            if (u("prerelease compare", l, p, m), p === void 0 && m === void 0)
                return 0;
            if (m === void 0)
                return 1;
            if (p === void 0)
                return -1;
            if (p === m)
                continue;
            return c(p, m);
        } while (++l); };
        v.prototype.compareBuild = function (i) { i instanceof v || (i = new v(i, this.options)); var l = 0; do {
            var p = this.build[l], m = i.build[l];
            if (u("prerelease compare", l, p, m), p === void 0 && m === void 0)
                return 0;
            if (m === void 0)
                return 1;
            if (p === void 0)
                return -1;
            if (p === m)
                continue;
            return c(p, m);
        } while (++l); };
        v.prototype.inc = function (i, l) { switch (i) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", l);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", l);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", l), this.inc("pre", l);
                break;
            case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", l), this.inc("pre", l);
                break;
            case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
            case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
            case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
            case "pre":
                if (this.prerelease.length === 0)
                    this.prerelease = [0];
                else {
                    var p = this.prerelease.length;
                    for (; --p >= 0;)
                        typeof this.prerelease[p] == "number" && (this.prerelease[p]++, p = -2);
                    p === -1 && this.prerelease.push(0);
                }
                l && (c(this.prerelease[0], l) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [l, 0]) : this.prerelease = [l, 0]);
                break;
            default: throw new Error("invalid increment argument: ".concat(i));
        } return this.format(), this.raw = this.version, this; };
        return v;
    }()); r.exports = v; } }), Hr = I({ "node_modules/semver/functions/compare.js": function (e, r) { N(); var u = sl(), n = function (D, s, a) { return new u(D, a).compare(new u(s, a)); }; r.exports = n; } }), il = I({ "node_modules/semver/functions/lt.js": function (e, r) { N(); var u = Hr(), n = function (D, s, a) { return u(D, s, a) < 0; }; r.exports = n; } }), al = I({ "node_modules/semver/functions/gte.js": function (e, r) { N(); var u = Hr(), n = function (D, s, a) { return u(D, s, a) >= 0; }; r.exports = n; } }), ol = I({ "src/utils/arrayify.js": function (e, r) {
        "use strict";
        N(), r.exports = function (u, n) { return Object.entries(u).map(function (D) {
            var _b;
            var _d = __read(D, 2), s = _d[0], a = _d[1];
            return Object.assign((_b = {}, _b[n] = s, _b), a);
        }); };
    } }), Dl = I({ "package.json": function (e, r) { r.exports = { version: "2.8.8" }; } }), ll = I({ "node_modules/outdent/lib/index.js": function (e, r) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 }), e.outdent = void 0;
        function u() { for (var F = [], w = 0; w < arguments.length; w++)
            F[w] = arguments[w]; }
        function n() { return typeof WeakMap < "u" ? new WeakMap : D(); }
        function D() { return { add: u, delete: u, get: u, set: u, has: function (F) { return !1; } }; }
        var s = Object.prototype.hasOwnProperty, a = function (F, w) { return s.call(F, w); };
        function f(F, w) { for (var b in w)
            a(w, b) && (F[b] = w[b]); return F; }
        var c = /^[ \t]*(?:\r\n|\r|\n)/, v = /(?:\r\n|\r|\n)[ \t]*$/, i = /^(?:[\r\n]|$)/, l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function m(F, w, b) { var M = 0, R = F[0].match(l); R && (M = R[1].length); var U = "(\\r\\n|\\r|\\n).{0," + M + "}", k = new RegExp(U, "g"); w && (F = F.slice(1)); var j = b.newline, L = b.trimLeadingNewline, t = b.trimTrailingNewline, o = typeof j == "string", d = F.length, h = F.map(function (A, q) { return A = A.replace(k, "$1"), q === 0 && L && (A = A.replace(c, "")), q === d - 1 && t && (A = A.replace(v, "")), o && (A = A.replace(/\r\n|\n|\r/g, function (P) { return j; })), A; }); return h; }
        function C(F, w) { for (var b = "", M = 0, R = F.length; M < R; M++)
            b += F[M], M < R - 1 && (b += w[M]); return b; }
        function g(F) { return a(F, "raw") && a(F, "length"); }
        function B(F) { var w = n(), b = n(); function M(U) { for (var k = [], j = 1; j < arguments.length; j++)
            k[j - 1] = arguments[j]; if (g(U)) {
            var L = U, t = (k[0] === M || k[0] === O) && p.test(L[0]) && i.test(L[1]), o = t ? b : w, d = o.get(L);
            if (d || (d = m(L, t, F), o.set(L, d)), k.length === 0)
                return d[0];
            var h = C(d, t ? k.slice(1) : k);
            return h;
        }
        else
            return B(f(f({}, F), U || {})); } var R = f(M, { string: function (U) { return m([U], !1, F)[0]; } }); return R; }
        var O = B({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (e.outdent = O, e.default = O, typeof r < "u")
            try {
                r.exports = O, Object.defineProperty(O, "__esModule", { value: !0 }), O.default = O, O.outdent = O;
            }
            catch (_b) { }
    } }), cl = I({ "src/main/core-options.js": function (e, r) {
        "use strict";
        N();
        var u = ll().outdent, n = "Config", D = "Editor", s = "Format", a = "Other", f = "Output", c = "Global", v = "Special", i = { cursorOffset: { since: "1.4.0", category: v, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: u(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "], ["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]))), cliCategory: D }, endOfLine: { since: "1.15.0", category: c, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: u(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "], ["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]))) }] }, filepath: { since: "1.4.0", category: v, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: a, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: v, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: a }, parser: { since: "0.0.10", category: c, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: function (l) { return typeof l == "string" || typeof l == "function"; }, choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: c, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: function (l) { return typeof l == "string" || typeof l == "object"; }, cliName: "plugin", cliCategory: n }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: c, description: u(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "], ["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]))), exception: function (l) { return typeof l == "string" || typeof l == "object"; }, cliName: "plugin-search-dir", cliCategory: n }, printWidth: { since: "0.0.0", category: c, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: v, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "], ["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: D }, rangeStart: { since: "1.4.0", category: v, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "], ["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: D }, requirePragma: { since: "1.7.0", category: v, type: "boolean", default: !1, description: u(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "], ["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]))), cliCategory: a }, tabWidth: { type: "int", category: c, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: c, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: c, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: n, CATEGORY_EDITOR: D, CATEGORY_FORMAT: s, CATEGORY_OTHER: a, CATEGORY_OUTPUT: f, CATEGORY_GLOBAL: c, CATEGORY_SPECIAL: v, options: i };
    } }), hl = I({ "src/main/support.js": function (e, r) {
        "use strict";
        N();
        var u = { compare: Hr(), lt: il(), gte: al() }, n = ol(), D = Dl().version, s = cl().options;
        function a() { var _b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _d = _b.plugins, c = _d === void 0 ? [] : _d, _f = _b.showUnreleased, v = _f === void 0 ? !1 : _f, _g = _b.showDeprecated, i = _g === void 0 ? !1 : _g, _h = _b.showInternal, l = _h === void 0 ? !1 : _h, p = D.split("-", 1)[0], m = c.flatMap(function (F) { return F.languages || []; }).filter(g), C = n(Object.assign.apply(Object, __spreadArray(__spreadArray([{}], __read(c.map(function (F) { var w = F.options; return w; })), false), [s], false)), "name").filter(function (F) { return g(F) && B(F); }).sort(function (F, w) { return F.name === w.name ? 0 : F.name < w.name ? -1 : 1; }).map(O).map(function (F) { F = Object.assign({}, F), Array.isArray(F.default) && (F.default = F.default.length === 1 ? F.default[0].value : F.default.filter(g).sort(function (b, M) { return u.compare(M.since, b.since); })[0].value), Array.isArray(F.choices) && (F.choices = F.choices.filter(function (b) { return g(b) && B(b); }), F.name === "parser" && f(F, m, c)); var w = Object.fromEntries(c.filter(function (b) { return b.defaultOptions && b.defaultOptions[F.name] !== void 0; }).map(function (b) { return [b.name, b.defaultOptions[F.name]]; })); return Object.assign(Object.assign({}, F), {}, { pluginDefaults: w }); }); return { languages: m, options: C }; function g(F) { return v || !("since" in F) || F.since && u.gte(p, F.since); } function B(F) { return i || !("deprecated" in F) || F.deprecated && u.lt(p, F.deprecated); } function O(F) { if (l)
            return F; var w = F.cliName, b = F.cliCategory, M = F.cliDescription; return UD(F, jD); } }
        function f(c, v, i) {
            var e_2, _b, e_3, _d;
            var l = new Set(c.choices.map(function (p) { return p.value; }));
            try {
                for (var v_1 = __values(v), v_1_1 = v_1.next(); !v_1_1.done; v_1_1 = v_1.next()) {
                    var p = v_1_1.value;
                    if (p.parsers) {
                        var _loop_2 = function (m) {
                            if (!l.has(m)) {
                                l.add(m);
                                var C = i.find(function (B) { return B.parsers && B.parsers[m]; }), g = p.name;
                                C && C.name && (g += " (plugin: ".concat(C.name, ")")), c.choices.push({ value: m, description: g });
                            }
                        };
                        try {
                            for (var _f = (e_3 = void 0, __values(p.parsers)), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var m = _g.value;
                                _loop_2(m);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_d = _f.return)) _d.call(_f);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (v_1_1 && !v_1_1.done && (_b = v_1.return)) _b.call(v_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        r.exports = { getSupportInfo: a };
    } }), pl = I({ "src/utils/is-non-empty-array.js": function (e, r) {
        "use strict";
        N();
        function u(n) { return Array.isArray(n) && n.length > 0; }
        r.exports = u;
    } });
function fl() { var _b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).onlyFirst, e = _b === void 0 ? !1 : _b, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|"); return new RegExp(r, e ? void 0 : "g"); }
var dl = ge({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js": function () { N(); } });
function El(e) { if (typeof e != "string")
    throw new TypeError("Expected a `string`, got `".concat(typeof e, "`")); return e.replace(fl(), ""); }
var Cl = ge({ "node_modules/strip-ansi/index.js": function () { N(), dl(); } });
function ml(e) { return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : !1; }
var gl = ge({ "node_modules/is-fullwidth-code-point/index.js": function () { N(); } }), Fl = I({ "node_modules/emoji-regex/index.js": function (e, r) {
        "use strict";
        N(), r.exports = function () { return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g; };
    } }), fs = {};
is(fs, { default: function () { return Al; } });
function Al(e) { if (typeof e != "string" || e.length === 0 || (e = El(e), e.length === 0))
    return 0; e = e.replace((0, ds.default)(), "  "); var r = 0; for (var u = 0; u < e.length; u++) {
    var n = e.codePointAt(u);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (n > 65535 && u++, r += ml(n) ? 2 : 1);
} return r; }
var ds, vl = ge({ "node_modules/string-width/index.js": function () { N(), Cl(), gl(), ds = WD(Fl()); } }), _l = I({ "src/utils/get-string-width.js": function (e, r) {
        "use strict";
        N();
        var u = (vl(), os(fs)).default, n = /[^\x20-\x7F]/;
        function D(s) { return s ? n.test(s) ? u(s) : s.length : 0; }
        r.exports = D;
    } }), zr = I({ "src/utils/text/skip.js": function (e, r) {
        "use strict";
        N();
        function u(f) { return function (c, v, i) { var l = i && i.backwards; if (v === !1)
            return !1; var p = c.length, m = v; for (; m >= 0 && m < p;) {
            var C = c.charAt(m);
            if (f instanceof RegExp) {
                if (!f.test(C))
                    return m;
            }
            else if (!f.includes(C))
                return m;
            l ? m-- : m++;
        } return m === -1 || m === p ? m : !1; }; }
        var n = u(/\s/), D = u(" 	"), s = u(",; 	"), a = u(/[^\n\r]/);
        r.exports = { skipWhitespace: n, skipSpaces: D, skipToLineEnd: s, skipEverythingButNewLine: a };
    } }), Es = I({ "src/utils/text/skip-inline-comment.js": function (e, r) {
        "use strict";
        N();
        function u(n, D) { if (D === !1)
            return !1; if (n.charAt(D) === "/" && n.charAt(D + 1) === "*") {
            for (var s = D + 2; s < n.length; ++s)
                if (n.charAt(s) === "*" && n.charAt(s + 1) === "/")
                    return s + 2;
        } return D; }
        r.exports = u;
    } }), Cs = I({ "src/utils/text/skip-trailing-comment.js": function (e, r) {
        "use strict";
        N();
        var u = zr().skipEverythingButNewLine;
        function n(D, s) { return s === !1 ? !1 : D.charAt(s) === "/" && D.charAt(s + 1) === "/" ? u(D, s) : s; }
        r.exports = n;
    } }), ms = I({ "src/utils/text/skip-newline.js": function (e, r) {
        "use strict";
        N();
        function u(n, D, s) {
            var a = s && s.backwards;
            if (D === !1)
                return !1;
            var f = n.charAt(D);
            if (a) {
                if (n.charAt(D - 1) === "\r" && f === "\n")
                    return D - 2;
                if (f === "\n" || f === "\r" || f === "\u2028" || f === "\u2029")
                    return D - 1;
            }
            else {
                if (f === "\r" && n.charAt(D + 1) === "\n")
                    return D + 2;
                if (f === "\n" || f === "\r" || f === "\u2028" || f === "\u2029")
                    return D + 1;
            }
            return D;
        }
        r.exports = u;
    } }), Sl = I({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js": function (e, r) {
        "use strict";
        N();
        var u = Es(), n = ms(), D = Cs(), s = zr().skipSpaces;
        function a(f, c) { var v = null, i = c; for (; i !== v;)
            v = i, i = s(f, i), i = u(f, i), i = D(f, i), i = n(f, i); return i; }
        r.exports = a;
    } }), yl = I({ "src/common/util.js": function (e, r) {
        "use strict";
        N();
        var u = (rl(), os(cs)).default, n = ls(), D = hl().getSupportInfo, s = pl(), a = _l(), _b = zr(), f = _b.skipWhitespace, c = _b.skipSpaces, v = _b.skipToLineEnd, i = _b.skipEverythingButNewLine, l = Es(), p = Cs(), m = ms(), C = Sl(), g = function (S) { return S[S.length - 2]; };
        function B(S) { return function (E, _, T) { var x = T && T.backwards; if (_ === !1)
            return !1; var $ = E.length, V = _; for (; V >= 0 && V < $;) {
            var z = E.charAt(V);
            if (S instanceof RegExp) {
                if (!S.test(z))
                    return V;
            }
            else if (!S.includes(z))
                return V;
            x ? V-- : V++;
        } return V === -1 || V === $ ? V : !1; }; }
        function O(S, E) { var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, T = c(S, _.backwards ? E - 1 : E, _), x = m(S, T, _); return T !== x; }
        function F(S, E, _) {
            for (var T = E; T < _; ++T)
                if (S.charAt(T) === "\n")
                    return !0;
            return !1;
        }
        function w(S, E, _) { var T = _(E) - 1; T = c(S, T, { backwards: !0 }), T = m(S, T, { backwards: !0 }), T = c(S, T, { backwards: !0 }); var x = m(S, T, { backwards: !0 }); return T !== x; }
        function b(S, E) { var _ = null, T = E; for (; T !== _;)
            _ = T, T = v(S, T), T = l(S, T), T = c(S, T); return T = p(S, T), T = m(S, T), T !== !1 && O(S, T); }
        function M(S, E, _) { return b(S, _(E)); }
        function R(S, E, _) { return C(S, _(E)); }
        function U(S, E, _) { return S.charAt(R(S, E, _)); }
        function k(S, E) { var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return c(S, _.backwards ? E - 1 : E, _) !== E; }
        function j(S, E) { var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, T = 0; for (var x = _; x < S.length; ++x)
            S[x] === "	" ? T = T + E - T % E : T++; return T; }
        function L(S, E) {
            var _ = S.lastIndexOf("\n");
            return _ === -1 ? 0 : j(S.slice(_ + 1).match(/^[\t ]*/)[0], E);
        }
        function t(S, E) { var _ = { quote: '"', regex: /"/g, escaped: "&quot;" }, T = { quote: "'", regex: /'/g, escaped: "&apos;" }, x = E === "'" ? T : _, $ = x === T ? _ : T, V = x; if (S.includes(x.quote) || S.includes($.quote)) {
            var z = (S.match(x.regex) || []).length, Y = (S.match($.regex) || []).length;
            V = z > Y ? $ : x;
        } return V; }
        function o(S, E) { var _ = S.slice(1, -1), T = E.parser === "json" || E.parser === "json5" && E.quoteProps === "preserve" && !E.singleQuote ? '"' : E.__isInHtmlAttribute ? "'" : t(_, E.singleQuote ? "'" : '"').quote; return d(_, T, !(E.parser === "css" || E.parser === "less" || E.parser === "scss" || E.__embeddedInHtml)); }
        function d(S, E, _) { var T = E === '"' ? "'" : '"', x = /\\(.)|(["'])/gs, $ = S.replace(x, function (V, z, Y) { return z === T ? z : Y === E ? "\\" + Y : Y || (_ && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(z) ? z : "\\" + z); }); return E + $ + E; }
        function h(S) { return S.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, ""); }
        function A(S, E) { var _ = S.match(new RegExp("(".concat(u(E), ")+"), "g")); return _ === null ? 0 : _.reduce(function (T, x) { return Math.max(T, x.length / E.length); }, 0); }
        function q(S, E) {
            var e_4, _b;
            var _ = S.match(new RegExp("(".concat(u(E), ")+"), "g"));
            if (_ === null)
                return 0;
            var T = new Map, x = 0;
            try {
                for (var _1 = __values(_), _1_1 = _1.next(); !_1_1.done; _1_1 = _1.next()) {
                    var $ = _1_1.value;
                    var V = $.length / E.length;
                    T.set(V, !0), V > x && (x = V);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_1_1 && !_1_1.done && (_b = _1.return)) _b.call(_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            for (var $ = 1; $ < x; $++)
                if (!T.get($))
                    return $;
            return x + 1;
        }
        function P(S, E) { (S.comments || (S.comments = [])).push(E), E.printed = !1, E.nodeDescription = J(S); }
        function G(S, E) { E.leading = !0, E.trailing = !1, P(S, E); }
        function X(S, E, _) { E.leading = !1, E.trailing = !1, _ && (E.marker = _), P(S, E); }
        function Q(S, E) { E.leading = !1, E.trailing = !0, P(S, E); }
        function H(S, E) { var _ = D({ plugins: E.plugins }).languages, T = _.find(function (x) { var $ = x.name; return $.toLowerCase() === S; }) || _.find(function (x) { var $ = x.aliases; return Array.isArray($) && $.includes(S); }) || _.find(function (x) { var $ = x.extensions; return Array.isArray($) && $.includes(".".concat(S)); }); return T && T.parsers[0]; }
        function W(S) { return S && S.type === "front-matter"; }
        function K(S) { var E = new WeakMap; return function (_) { return E.has(_) || E.set(_, Symbol(S)), E.get(_); }; }
        function J(S) { var E = S.type || S.kind || "(unknown type)", _ = String(S.name || S.id && (typeof S.id == "object" ? S.id.name : S.id) || S.key && (typeof S.key == "object" ? S.key.name : S.key) || S.value && (typeof S.value == "object" ? "" : String(S.value)) || S.operator || ""); return _.length > 20 && (_ = _.slice(0, 19) + "\u2026"), E + (_ ? " " + _ : ""); }
        r.exports = { inferParserByLanguage: H, getStringWidth: a, getMaxContinuousCount: A, getMinNotPresentContinuousCount: q, getPenultimate: g, getLast: n, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: C, getNextNonSpaceNonCommentCharacterIndex: R, getNextNonSpaceNonCommentCharacter: U, skip: B, skipWhitespace: f, skipSpaces: c, skipToLineEnd: v, skipEverythingButNewLine: i, skipInlineComment: l, skipTrailingComment: p, skipNewline: m, isNextLineEmptyAfterIndex: b, isNextLineEmpty: M, isPreviousLineEmpty: w, hasNewline: O, hasNewlineInRange: F, hasSpaces: k, getAlignmentSize: j, getIndentSize: L, getPreferredQuote: t, printString: o, printNumber: h, makeString: d, addLeadingComment: G, addDanglingComment: X, addTrailingComment: Q, isFrontMatterNode: W, isNonEmptyArray: s, createGroupIdMapper: K };
    } }), Tl = I({ "vendors/html-tag-names.json": function (e, r) { r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] }; } }), gs = I({ "src/language-html/utils/array-to-map.js": function (e, r) {
        "use strict";
        N();
        function u(n) {
            var e_5, _b;
            var D = Object.create(null);
            try {
                for (var n_1 = __values(n), n_1_1 = n_1.next(); !n_1_1.done; n_1_1 = n_1.next()) {
                    var s = n_1_1.value;
                    D[s] = !0;
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (n_1_1 && !n_1_1.done && (_b = n_1.return)) _b.call(n_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return D;
        }
        r.exports = u;
    } }), Bl = I({ "src/language-html/utils/html-tag-names.js": function (e, r) {
        "use strict";
        N();
        var u = Tl().htmlTagNames, n = gs(), D = n(u);
        r.exports = D;
    } }), bl = I({ "vendors/html-element-attributes.json": function (e, r) { r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } }; } }), wl = I({ "src/language-html/utils/map-object.js": function (e, r) {
        "use strict";
        N();
        function u(n, D) {
            var e_6, _b;
            var s = Object.create(null);
            try {
                for (var _d = __values(Object.entries(n)), _f = _d.next(); !_f.done; _f = _d.next()) {
                    var _g = __read(_f.value, 2), a = _g[0], f = _g[1];
                    s[a] = D(f, a);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return s;
        }
        r.exports = u;
    } }), Nl = I({ "src/language-html/utils/html-elements-attributes.js": function (e, r) {
        "use strict";
        N();
        var u = bl().htmlElementAttributes, n = wl(), D = gs(), s = n(u, D);
        r.exports = s;
    } }), Ol = I({ "src/language-html/utils/is-unknown-namespace.js": function (e, r) {
        "use strict";
        N();
        function u(n) { return n.type === "element" && !n.hasExplicitNamespace && !["html", "svg"].includes(n.namespace); }
        r.exports = u;
    } }), ql = I({ "src/language-html/pragma.js": function (e, r) {
        "use strict";
        N();
        function u(D) { return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D); }
        function n(D) {
            return "<!-- @format -->\n\n" + D.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: u, insertPragma: n };
    } }), Il = I({ "src/language-html/ast.js": function (e, r) {
        "use strict";
        N();
        var u = { attrs: !0, children: !0 }, n = new Set(["parent"]), D = /** @class */ (function () {
            function D() {
                var e_7, _b;
                var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                try {
                    for (var _d = __values(new Set(__spreadArray(__spreadArray([], __read(n), false), __read(Object.keys(a)), false))), _f = _d.next(); !_f.done; _f = _d.next()) {
                        var f = _f.value;
                        this.setProperty(f, a[f]);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            D.prototype.setProperty = function (a, f) {
                var _this = this;
                if (this[a] !== f) {
                    if (a in u && (f = f.map(function (c) { return _this.createChild(c); })), !n.has(a)) {
                        this[a] = f;
                        return;
                    }
                    Object.defineProperty(this, a, { value: f, enumerable: !1, configurable: !0 });
                }
            };
            D.prototype.map = function (a) { var f; for (var c in u) {
                var v = this[c];
                if (v) {
                    var i = s(v, function (l) { return l.map(a); });
                    f !== v && (f || (f = new D({ parent: this.parent })), f.setProperty(c, i));
                }
            } if (f)
                for (var c in this)
                    c in u || (f[c] = this[c]); return a(f || this); };
            D.prototype.walk = function (a) { for (var f in u) {
                var c = this[f];
                if (c)
                    for (var v = 0; v < c.length; v++)
                        c[v].walk(a);
            } a(this); };
            D.prototype.createChild = function (a) { var f = a instanceof D ? a.clone() : new D(a); return f.setProperty("parent", this), f; };
            D.prototype.insertChildBefore = function (a, f) { this.children.splice(this.children.indexOf(a), 0, this.createChild(f)); };
            D.prototype.removeChild = function (a) { this.children.splice(this.children.indexOf(a), 1); };
            D.prototype.replaceChild = function (a, f) { this.children[this.children.indexOf(a)] = this.createChild(f); };
            D.prototype.clone = function () { return new D(this); };
            Object.defineProperty(D.prototype, "firstChild", {
                get: function () { var a; return (a = this.children) === null || a === void 0 ? void 0 : a[0]; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(D.prototype, "lastChild", {
                get: function () { var a; return (a = this.children) === null || a === void 0 ? void 0 : a[this.children.length - 1]; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(D.prototype, "prev", {
                get: function () { var a; return (a = this.parent) === null || a === void 0 ? void 0 : a.children[this.parent.children.indexOf(this) - 1]; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(D.prototype, "next", {
                get: function () { var a; return (a = this.parent) === null || a === void 0 ? void 0 : a.children[this.parent.children.indexOf(this) + 1]; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(D.prototype, "rawName", {
                get: function () { return this.hasExplicitNamespace ? this.fullName : this.name; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(D.prototype, "fullName", {
                get: function () { return this.namespace ? this.namespace + ":" + this.name : this.name; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(D.prototype, "attrMap", {
                get: function () { return Object.fromEntries(this.attrs.map(function (a) { return [a.fullName, a.value]; })); },
                enumerable: false,
                configurable: true
            });
            return D;
        }());
        function s(a, f) { var c = a.map(f); return c.some(function (v, i) { return v !== a[i]; }) ? c : a; }
        r.exports = { Node: D };
    } }), Rl = I({ "src/language-html/conditional-comment.js": function (e, r) {
        "use strict";
        N();
        var u = Ne().ParseSourceSpan, n = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: s }, { regex: /^\[if([^\]]*)]><!$/, parse: a }, { regex: /^<!\s*\[endif]$/, parse: f }];
        function D(c, v) {
            var e_8, _b;
            if (c.value)
                try {
                    for (var n_2 = __values(n), n_2_1 = n_2.next(); !n_2_1.done; n_2_1 = n_2.next()) {
                        var _d = n_2_1.value, i = _d.regex, l = _d.parse;
                        var p = c.value.match(i);
                        if (p)
                            return l(c, v, p);
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (n_2_1 && !n_2_1.done && (_b = n_2.return)) _b.call(n_2);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            return null;
        }
        function s(c, v, i) { var _b = __read(i, 4), l = _b[1], p = _b[2], m = _b[3], C = 4 + l.length, g = c.sourceSpan.start.moveBy(C), B = g.moveBy(m.length), _d = __read((function () { try {
            return [!0, v(m, g).children];
        }
        catch (_b) {
            return [!1, [{ type: "text", value: m, sourceSpan: new u(g, B) }]];
        } })(), 2), O = _d[0], F = _d[1]; return { type: "ieConditionalComment", complete: O, children: F, condition: p.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan, startSourceSpan: new u(c.sourceSpan.start, g), endSourceSpan: new u(B, c.sourceSpan.end) }; }
        function a(c, v, i) { var _b = __read(i, 2), l = _b[1]; return { type: "ieConditionalStartComment", condition: l.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan }; }
        function f(c) { return { type: "ieConditionalEndComment", sourceSpan: c.sourceSpan }; }
        r.exports = { parseIeConditionalComment: D };
    } }), xl = I({ "src/language-html/loc.js": function (e, r) {
        "use strict";
        N();
        function u(D) { return D.sourceSpan.start.offset; }
        function n(D) { return D.sourceSpan.end.offset; }
        r.exports = { locStart: u, locEnd: n };
    } }), Ze = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r;
        (function (c) { c[c.RAW_TEXT = 0] = "RAW_TEXT", c[c.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", c[c.PARSABLE_DATA = 2] = "PARSABLE_DATA"; })(r = e.TagContentType || (e.TagContentType = {}));
        function u(c) { if (c[0] != ":")
            return [null, c]; var v = c.indexOf(":", 1); if (v == -1)
            throw new Error("Unsupported format \"".concat(c, "\" expecting \":namespace:name\"")); return [c.slice(1, v), c.slice(v + 1)]; }
        e.splitNsName = u;
        function n(c) { return u(c)[1] === "ng-container"; }
        e.isNgContainer = n;
        function D(c) { return u(c)[1] === "ng-content"; }
        e.isNgContent = D;
        function s(c) { return u(c)[1] === "ng-template"; }
        e.isNgTemplate = s;
        function a(c) { return c === null ? null : u(c)[0]; }
        e.getNsPrefix = a;
        function f(c, v) { return c ? ":".concat(c, ":").concat(v) : v; }
        e.mergeNsAndName = f, e.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\uD835\uDD04", afr: "\uD835\uDD1E", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\uD835\uDD38", aopf: "\uD835\uDD52", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\uD835\uDC9C", ascr: "\uD835\uDCB6", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\uD835\uDD05", bfr: "\uD835\uDD1F", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\uD835\uDD39", bopf: "\uD835\uDD53", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\uD835\uDCB7", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\uD835\uDD20", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\uD835\uDD54", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\uD835\uDC9E", cscr: "\uD835\uDCB8", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\uD835\uDD07", dfr: "\uD835\uDD21", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\uD835\uDD3B", dopf: "\uD835\uDD55", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\uD835\uDC9F", dscr: "\uD835\uDCB9", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\uD835\uDD08", efr: "\uD835\uDD22", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\uD835\uDD3C", eopf: "\uD835\uDD56", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\uD835\uDD09", ffr: "\uD835\uDD23", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\uD835\uDD3D", fopf: "\uD835\uDD57", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\uD835\uDCBB", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\uD835\uDD0A", gfr: "\uD835\uDD24", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\uD835\uDD3E", gopf: "\uD835\uDD58", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\uD835\uDCA2", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\uD835\uDD25", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\uD835\uDD59", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\uD835\uDCBD", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\uD835\uDD26", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\uD835\uDD40", iopf: "\uD835\uDD5A", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\uD835\uDCBE", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\uD835\uDD0D", jfr: "\uD835\uDD27", jmath: "\u0237", Jopf: "\uD835\uDD41", jopf: "\uD835\uDD5B", Jscr: "\uD835\uDCA5", jscr: "\uD835\uDCBF", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\uD835\uDD0E", kfr: "\uD835\uDD28", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\uD835\uDD42", kopf: "\uD835\uDD5C", Kscr: "\uD835\uDCA6", kscr: "\uD835\uDCC0", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\uD835\uDD0F", lfr: "\uD835\uDD29", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\uD835\uDD43", lopf: "\uD835\uDD5D", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\uD835\uDCC1", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\uD835\uDD10", mfr: "\uD835\uDD2A", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\uD835\uDD44", mopf: "\uD835\uDD5E", mp: "\u2213", Mscr: "\u2133", mscr: "\uD835\uDCC2", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\uD835\uDD11", nfr: "\uD835\uDD2B", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\uD835\uDD5F", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\uD835\uDCA9", nscr: "\uD835\uDCC3", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\uD835\uDD12", ofr: "\uD835\uDD2C", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\uD835\uDD46", oopf: "\uD835\uDD60", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\uD835\uDCAA", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\uD835\uDD13", pfr: "\uD835\uDD2D", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\uD835\uDD61", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\uD835\uDCAB", pscr: "\uD835\uDCC5", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\uD835\uDD14", qfr: "\uD835\uDD2E", qint: "\u2A0C", Qopf: "\u211A", qopf: "\uD835\uDD62", qprime: "\u2057", Qscr: "\uD835\uDCAC", qscr: "\uD835\uDCC6", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\uD835\uDD2F", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\uD835\uDD63", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\uD835\uDCC7", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\uD835\uDD16", sfr: "\uD835\uDD30", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\uD835\uDD4A", sopf: "\uD835\uDD64", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\uD835\uDCAE", sscr: "\uD835\uDCC8", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\uD835\uDD17", tfr: "\uD835\uDD31", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\uD835\uDD4B", topf: "\uD835\uDD65", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\uD835\uDCAF", tscr: "\uD835\uDCC9", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\uD835\uDD18", ufr: "\uD835\uDD32", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\uD835\uDD4C", uopf: "\uD835\uDD66", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\uD835\uDCB0", uscr: "\uD835\uDCCA", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\uD835\uDD19", vfr: "\uD835\uDD33", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\uD835\uDD4D", vopf: "\uD835\uDD67", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\uD835\uDCB1", vscr: "\uD835\uDCCB", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\uD835\uDD1A", wfr: "\uD835\uDD34", Wopf: "\uD835\uDD4E", wopf: "\uD835\uDD68", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\uD835\uDCB2", wscr: "\uD835\uDCCC", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\uD835\uDD1B", xfr: "\uD835\uDD35", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\uD835\uDD4F", xopf: "\uD835\uDD69", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\uD835\uDCB3", xscr: "\uD835\uDCCD", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\uD835\uDD1C", yfr: "\uD835\uDD36", YIcy: "\u0407", yicy: "\u0457", Yopf: "\uD835\uDD50", yopf: "\uD835\uDD6A", Yscr: "\uD835\uDCB4", yscr: "\uD835\uDCCE", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\uD835\uDD37", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\uD835\uDD6B", Zscr: "\uD835\uDCB5", zscr: "\uD835\uDCCF", zwj: "\u200D", zwnj: "\u200C" }, e.NGSP_UNICODE = "\uE500", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
    } }), Fs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ze(), u = /** @class */ (function () {
            function u() {
                var _this = this;
                var _b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = _b.closedByChildren, f = _b.implicitNamespacePrefix, _d = _b.contentType, c = _d === void 0 ? r.TagContentType.PARSABLE_DATA : _d, _f = _b.closedByParent, v = _f === void 0 ? !1 : _f, _g = _b.isVoid, i = _g === void 0 ? !1 : _g, _h = _b.ignoreFirstLf, l = _h === void 0 ? !1 : _h;
                this.closedByChildren = {}, this.closedByParent = !1, this.canSelfClose = !1, a && a.length > 0 && a.forEach(function (p) { return _this.closedByChildren[p] = !0; }), this.isVoid = i, this.closedByParent = v || i, this.implicitNamespacePrefix = f || null, this.contentType = c, this.ignoreFirstLf = l;
            }
            u.prototype.isClosedByChild = function (a) { return this.isVoid || a.toLowerCase() in this.closedByChildren; };
            return u;
        }());
        e.HtmlTagDefinition = u;
        var n, D;
        function s(a) { return D || (n = new u, D = { base: new u({ isVoid: !0 }), meta: new u({ isVoid: !0 }), area: new u({ isVoid: !0 }), embed: new u({ isVoid: !0 }), link: new u({ isVoid: !0 }), img: new u({ isVoid: !0 }), input: new u({ isVoid: !0 }), param: new u({ isVoid: !0 }), hr: new u({ isVoid: !0 }), br: new u({ isVoid: !0 }), source: new u({ isVoid: !0 }), track: new u({ isVoid: !0 }), wbr: new u({ isVoid: !0 }), p: new u({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new u({ closedByChildren: ["tbody", "tfoot"] }), tbody: new u({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new u({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new u({ closedByChildren: ["tr"], closedByParent: !0 }), td: new u({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new u({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new u({ isVoid: !0 }), svg: new u({ implicitNamespacePrefix: "svg" }), math: new u({ implicitNamespacePrefix: "math" }), li: new u({ closedByChildren: ["li"], closedByParent: !0 }), dt: new u({ closedByChildren: ["dt", "dd"] }), dd: new u({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new u({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new u({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new u({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new u({ ignoreFirstLf: !0 }), listing: new u({ ignoreFirstLf: !0 }), style: new u({ contentType: r.TagContentType.RAW_TEXT }), script: new u({ contentType: r.TagContentType.RAW_TEXT }), title: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), D[a] || n; }
        e.getHtmlTagDefinition = s;
    } }), Pl = I({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = /** @class */ (function () {
            function r(u) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
                this.path = u, this.position = n;
            }
            Object.defineProperty(r.prototype, "empty", {
                get: function () { return !this.path || !this.path.length; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(r.prototype, "head", {
                get: function () { return this.path[0]; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(r.prototype, "tail", {
                get: function () { return this.path[this.path.length - 1]; },
                enumerable: false,
                configurable: true
            });
            r.prototype.parentOf = function (u) { return u && this.path[this.path.indexOf(u) - 1]; };
            r.prototype.childOf = function (u) { return this.path[this.path.indexOf(u) + 1]; };
            r.prototype.first = function (u) { for (var n = this.path.length - 1; n >= 0; n--) {
                var D = this.path[n];
                if (D instanceof u)
                    return D;
            } };
            r.prototype.push = function (u) { this.path.push(u); };
            r.prototype.pop = function () { return this.path.pop(); };
            return r;
        }());
        e.AstPath = r;
    } }), As = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Pl(), u = /** @class */ (function () {
            function u(C, g, B) {
                this.value = C, this.sourceSpan = g, this.i18n = B, this.type = "text";
            }
            u.prototype.visit = function (C, g) { return C.visitText(this, g); };
            return u;
        }());
        e.Text = u;
        var n = /** @class */ (function () {
            function n(C, g) {
                this.value = C, this.sourceSpan = g, this.type = "cdata";
            }
            n.prototype.visit = function (C, g) { return C.visitCdata(this, g); };
            return n;
        }());
        e.CDATA = n;
        var D = /** @class */ (function () {
            function D(C, g, B, O, F, w) {
                this.switchValue = C, this.type = g, this.cases = B, this.sourceSpan = O, this.switchValueSourceSpan = F, this.i18n = w;
            }
            D.prototype.visit = function (C, g) { return C.visitExpansion(this, g); };
            return D;
        }());
        e.Expansion = D;
        var s = /** @class */ (function () {
            function s(C, g, B, O, F) {
                this.value = C, this.expression = g, this.sourceSpan = B, this.valueSourceSpan = O, this.expSourceSpan = F;
            }
            s.prototype.visit = function (C, g) { return C.visitExpansionCase(this, g); };
            return s;
        }());
        e.ExpansionCase = s;
        var a = /** @class */ (function () {
            function a(C, g, B) {
                var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, w = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
                this.name = C, this.value = g, this.sourceSpan = B, this.valueSpan = O, this.nameSpan = F, this.i18n = w, this.type = "attribute";
            }
            a.prototype.visit = function (C, g) { return C.visitAttribute(this, g); };
            return a;
        }());
        e.Attribute = a;
        var f = /** @class */ (function () {
            function f(C, g, B, O) {
                var F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, w = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, b = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, M = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
                this.name = C, this.attrs = g, this.children = B, this.sourceSpan = O, this.startSourceSpan = F, this.endSourceSpan = w, this.nameSpan = b, this.i18n = M, this.type = "element";
            }
            f.prototype.visit = function (C, g) { return C.visitElement(this, g); };
            return f;
        }());
        e.Element = f;
        var c = /** @class */ (function () {
            function c(C, g) {
                this.value = C, this.sourceSpan = g, this.type = "comment";
            }
            c.prototype.visit = function (C, g) { return C.visitComment(this, g); };
            return c;
        }());
        e.Comment = c;
        var v = /** @class */ (function () {
            function v(C, g) {
                this.value = C, this.sourceSpan = g, this.type = "docType";
            }
            v.prototype.visit = function (C, g) { return C.visitDocType(this, g); };
            return v;
        }());
        e.DocType = v;
        function i(C, g) { var B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, O = [], F = C.visit ? function (w) { return C.visit(w, B) || w.visit(C, B); } : function (w) { return w.visit(C, B); }; return g.forEach(function (w) { var b = F(w); b && O.push(b); }), O; }
        e.visitAll = i;
        var l = /** @class */ (function () {
            function l() {
            }
            l.prototype.visitElement = function (C, g) { this.visitChildren(g, function (B) { B(C.attrs), B(C.children); }); };
            l.prototype.visitAttribute = function (C, g) { };
            l.prototype.visitText = function (C, g) { };
            l.prototype.visitCdata = function (C, g) { };
            l.prototype.visitComment = function (C, g) { };
            l.prototype.visitDocType = function (C, g) { };
            l.prototype.visitExpansion = function (C, g) { return this.visitChildren(g, function (B) { B(C.cases); }); };
            l.prototype.visitExpansionCase = function (C, g) { };
            l.prototype.visitChildren = function (C, g) { var B = [], O = this; function F(w) { w && B.push(i(O, w, C)); } return g(F), Array.prototype.concat.apply([], B); };
            return l;
        }());
        e.RecursiveVisitor = l;
        function p(C) { var g = C.sourceSpan.start.offset, B = C.sourceSpan.end.offset; return C instanceof f && (C.endSourceSpan ? B = C.endSourceSpan.end.offset : C.children && C.children.length && (B = p(C.children[C.children.length - 1]).end)), { start: g, end: B }; }
        function m(C, g) { var B = [], O = new /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visit = function (F, w) { var b = p(F); if (b.start <= g && g < b.end)
                B.push(F);
            else
                return !0; };
            return class_1;
        }(l)); return i(O, C), new r.AstPath(B, g); }
        e.findNode = m;
    } }), kl = I({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        function r(D, s) { if (s != null) {
            if (!Array.isArray(s))
                throw new Error("Expected '".concat(D, "' to be an array of strings."));
            for (var a = 0; a < s.length; a += 1)
                if (typeof s[a] != "string")
                    throw new Error("Expected '".concat(D, "' to be an array of strings."));
        } }
        e.assertArrayOfStrings = r;
        var u = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function n(D, s) { if (s != null && !(Array.isArray(s) && s.length == 2))
            throw new Error("Expected '".concat(D, "' to be an array, [start, end].")); if (s != null) {
            var a_1 = s[0], f_1 = s[1];
            u.forEach(function (c) { if (c.test(a_1) || c.test(f_1))
                throw new Error("['".concat(a_1, "', '").concat(f_1, "'] contains unusable interpolation symbol.")); });
        } }
        e.assertInterpolationSymbols = n;
    } }), Ll = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = kl(), u = /** @class */ (function () {
            function u(n, D) {
                this.start = n, this.end = D;
            }
            u.fromArray = function (n) { return n ? (r.assertInterpolationSymbols("interpolation", n), new u(n[0], n[1])) : e.DEFAULT_INTERPOLATION_CONFIG; };
            return u;
        }());
        e.InterpolationConfig = u, e.DEFAULT_INTERPOLATION_CONFIG = new u("{{", "}}");
    } }), $l = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ds(), u = Ne(), n = Ll(), D = Ze(), s;
        (function (t) { t[t.TAG_OPEN_START = 0] = "TAG_OPEN_START", t[t.TAG_OPEN_END = 1] = "TAG_OPEN_END", t[t.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", t[t.TAG_CLOSE = 3] = "TAG_CLOSE", t[t.TEXT = 4] = "TEXT", t[t.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", t[t.RAW_TEXT = 6] = "RAW_TEXT", t[t.COMMENT_START = 7] = "COMMENT_START", t[t.COMMENT_END = 8] = "COMMENT_END", t[t.CDATA_START = 9] = "CDATA_START", t[t.CDATA_END = 10] = "CDATA_END", t[t.ATTR_NAME = 11] = "ATTR_NAME", t[t.ATTR_QUOTE = 12] = "ATTR_QUOTE", t[t.ATTR_VALUE = 13] = "ATTR_VALUE", t[t.DOC_TYPE_START = 14] = "DOC_TYPE_START", t[t.DOC_TYPE_END = 15] = "DOC_TYPE_END", t[t.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", t[t.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", t[t.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", t[t.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", t[t.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", t[t.EOF = 21] = "EOF"; })(s = e.TokenType || (e.TokenType = {}));
        var a = /** @class */ (function () {
            function a(t, o, d) {
                this.type = t, this.parts = o, this.sourceSpan = d;
            }
            return a;
        }());
        e.Token = a;
        var f = /** @class */ (function (_super) {
            __extends(f, _super);
            function f(t, o, d) {
                var _this = this;
                _this = _super.call(this, d, t) || this, _this.tokenType = o;
                return _this;
            }
            return f;
        }(u.ParseError));
        e.TokenError = f;
        var c = /** @class */ (function () {
            function c(t, o) {
                this.tokens = t, this.errors = o;
            }
            return c;
        }());
        e.TokenizeResult = c;
        function v(t, o, d) { var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; return new C(new u.ParseSourceFile(t, o), d, h).tokenize(); }
        e.tokenize = v;
        var i = /\r\n?/g;
        function l(t) { return "Unexpected character \"".concat(t === r.$EOF ? "EOF" : String.fromCharCode(t), "\""); }
        function p(t) { return "Unknown entity \"".concat(t, "\" - use the \"&#<decimal>;\" or  \"&#x<hex>;\" syntax"); }
        var m = /** @class */ (function () {
            function m(t) {
                this.error = t;
            }
            return m;
        }()), C = /** @class */ (function () {
            function class_2(t, o, d) {
                this._getTagContentType = o, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = d.tokenizeExpansionForms || !1, this._interpolationConfig = d.interpolationConfig || n.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = d.leadingTriviaChars && d.leadingTriviaChars.map(function (A) { return A.codePointAt(0) || 0; }), this._canSelfClose = d.canSelfClose || !1, this._allowHtmComponentClosingTags = d.allowHtmComponentClosingTags || !1;
                var h = d.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
                this._cursor = d.escapedString ? new j(t, h) : new k(t, h);
                try {
                    this._cursor.init();
                }
                catch (A) {
                    this.handleError(A);
                }
            }
            class_2.prototype._processCarriageReturns = function (t) {
                return t.replace(i, "\n");
            };
            class_2.prototype.tokenize = function () { for (; this._cursor.peek() !== r.$EOF;) {
                var t = this._cursor.clone();
                try {
                    if (this._attemptCharCode(r.$LT))
                        if (this._attemptCharCode(r.$BANG))
                            this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr("--") ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(t);
                        else if (this._attemptCharCode(r.$SLASH))
                            this._consumeTagClose(t);
                        else {
                            var o = this._cursor.clone();
                            this._attemptCharCode(r.$QUESTION) ? (this._cursor = o, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
                        }
                    else
                        this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
                }
                catch (o) {
                    this.handleError(o);
                }
            } return this._beginToken(s.EOF), this._endToken([]), new c(U(this.tokens), this.errors); };
            class_2.prototype._tokenizeExpansionForm = function () { if (this.isExpansionFormStart())
                return this._consumeExpansionFormStart(), !0; if (b(this._cursor.peek()) && this._isInExpansionForm())
                return this._consumeExpansionCaseStart(), !0; if (this._cursor.peek() === r.$RBRACE) {
                if (this._isInExpansionCase())
                    return this._consumeExpansionCaseEnd(), !0;
                if (this._isInExpansionForm())
                    return this._consumeExpansionFormEnd(), !0;
            } return !1; };
            class_2.prototype._beginToken = function (t) { var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone(); this._currentTokenStart = o, this._currentTokenType = t; };
            class_2.prototype._endToken = function (t) { var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone(); if (this._currentTokenStart === null)
                throw new f("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(o)); if (this._currentTokenType === null)
                throw new f("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart)); var d = new a(this._currentTokenType, t, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints)); return this.tokens.push(d), this._currentTokenStart = null, this._currentTokenType = null, d; };
            class_2.prototype._createError = function (t, o) { this._isInExpansionForm() && (t += " (Do you have an unescaped \"{\" in your template? Use \"{{ '{' }}\") to escape it.)"); var d = new f(t, this._currentTokenType, o); return this._currentTokenStart = null, this._currentTokenType = null, new m(d); };
            class_2.prototype.handleError = function (t) { if (t instanceof L && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof m)
                this.errors.push(t.error);
            else
                throw t; };
            class_2.prototype._attemptCharCode = function (t) { return this._cursor.peek() === t ? (this._cursor.advance(), !0) : !1; };
            class_2.prototype._attemptCharCodeCaseInsensitive = function (t) { return M(this._cursor.peek(), t) ? (this._cursor.advance(), !0) : !1; };
            class_2.prototype._requireCharCode = function (t) { var o = this._cursor.clone(); if (!this._attemptCharCode(t))
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o)); };
            class_2.prototype._attemptStr = function (t) { var o = t.length; if (this._cursor.charsLeft() < o)
                return !1; var d = this._cursor.clone(); for (var h = 0; h < o; h++)
                if (!this._attemptCharCode(t.charCodeAt(h)))
                    return this._cursor = d, !1; return !0; };
            class_2.prototype._attemptStrCaseInsensitive = function (t) { for (var o = 0; o < t.length; o++)
                if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(o)))
                    return !1; return !0; };
            class_2.prototype._requireStr = function (t) { var o = this._cursor.clone(); if (!this._attemptStr(t))
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o)); };
            class_2.prototype._requireStrCaseInsensitive = function (t) { var o = this._cursor.clone(); if (!this._attemptStrCaseInsensitive(t))
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o)); };
            class_2.prototype._attemptCharCodeUntilFn = function (t) { for (; !t(this._cursor.peek());)
                this._cursor.advance(); };
            class_2.prototype._requireCharCodeUntilFn = function (t, o) { var d = this._cursor.clone(); if (this._attemptCharCodeUntilFn(t), this._cursor.clone().diff(d) < o)
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(d)); };
            class_2.prototype._attemptUntilChar = function (t) { for (; this._cursor.peek() !== t;)
                this._cursor.advance(); };
            class_2.prototype._readChar = function (t) { if (t && this._cursor.peek() === r.$AMPERSAND)
                return this._decodeEntity(); {
                var o = String.fromCodePoint(this._cursor.peek());
                return this._cursor.advance(), o;
            } };
            class_2.prototype._decodeEntity = function () { var t = this._cursor.clone(); if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
                var o = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), d = this._cursor.clone();
                if (this._attemptCharCodeUntilFn(F), this._cursor.peek() != r.$SEMICOLON)
                    throw this._createError(l(this._cursor.peek()), this._cursor.getSpan());
                var h = this._cursor.getChars(d);
                this._cursor.advance();
                try {
                    var A = parseInt(h, o ? 16 : 10);
                    return String.fromCharCode(A);
                }
                catch (_b) {
                    throw this._createError(p(this._cursor.getChars(t)), this._cursor.getSpan());
                }
            }
            else {
                var o = this._cursor.clone();
                if (this._attemptCharCodeUntilFn(w), this._cursor.peek() != r.$SEMICOLON)
                    return this._cursor = o, "&";
                var d = this._cursor.getChars(o);
                this._cursor.advance();
                var h = D.NAMED_ENTITIES[d];
                if (!h)
                    throw this._createError(p(d), this._cursor.getSpan(t));
                return h;
            } };
            class_2.prototype._consumeRawText = function (t, o) { this._beginToken(t ? s.ESCAPABLE_RAW_TEXT : s.RAW_TEXT); var d = []; for (;;) {
                var h = this._cursor.clone(), A = o();
                if (this._cursor = h, A)
                    break;
                d.push(this._readChar(t));
            } return this._endToken([this._processCarriageReturns(d.join(""))]); };
            class_2.prototype._consumeComment = function (t) {
                var _this = this;
                this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(!1, function () { return _this._attemptStr("-->"); }), this._beginToken(s.COMMENT_END), this._requireStr("-->"), this._endToken([]);
            };
            class_2.prototype._consumeBogusComment = function (t) {
                var _this = this;
                this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(!1, function () { return _this._cursor.peek() === r.$GT; }), this._beginToken(s.COMMENT_END), this._cursor.advance(), this._endToken([]);
            };
            class_2.prototype._consumeCdata = function (t) {
                var _this = this;
                this._beginToken(s.CDATA_START, t), this._endToken([]), this._consumeRawText(!1, function () { return _this._attemptStr("]]>"); }), this._beginToken(s.CDATA_END), this._requireStr("]]>"), this._endToken([]);
            };
            class_2.prototype._consumeDocType = function (t) {
                var _this = this;
                this._beginToken(s.DOC_TYPE_START, t), this._endToken([]), this._consumeRawText(!1, function () { return _this._cursor.peek() === r.$GT; }), this._beginToken(s.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
            };
            class_2.prototype._consumePrefixAndName = function () { var t = this._cursor.clone(), o = ""; for (; this._cursor.peek() !== r.$COLON && !O(this._cursor.peek());)
                this._cursor.advance(); var d; this._cursor.peek() === r.$COLON ? (o = this._cursor.getChars(t), this._cursor.advance(), d = this._cursor.clone()) : d = t, this._requireCharCodeUntilFn(B, o === "" ? 0 : 1); var h = this._cursor.getChars(d); return [o, h]; };
            class_2.prototype._consumeTagOpen = function (t) { var o, d, h, A = this.tokens.length, q = this._cursor.clone(), P = []; try {
                if (!r.isAsciiLetter(this._cursor.peek()))
                    throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(t));
                for (h = this._consumeTagOpenStart(t), d = h.parts[0], o = h.parts[1], this._attemptCharCodeUntilFn(g); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT;) {
                    var _b = __read(this._consumeAttributeName(), 2), X = _b[0], Q = _b[1];
                    if (this._attemptCharCodeUntilFn(g), this._attemptCharCode(r.$EQ)) {
                        this._attemptCharCodeUntilFn(g);
                        var H = this._consumeAttributeValue();
                        P.push({ prefix: X, name: Q, value: H });
                    }
                    else
                        P.push({ prefix: X, name: Q });
                    this._attemptCharCodeUntilFn(g);
                }
                this._consumeTagOpenEnd();
            }
            catch (X) {
                if (X instanceof m) {
                    this._cursor = q, h && (this.tokens.length = A), this._beginToken(s.TEXT, t), this._endToken(["<"]);
                    return;
                }
                throw X;
            } if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === s.TAG_OPEN_END_VOID)
                return; var G = this._getTagContentType(o, d, this._fullNameStack.length > 0, P); this._handleFullNameStackForTagOpen(d, o), G === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(d, o, !1) : G === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(d, o, !0); };
            class_2.prototype._consumeRawTextWithTagClose = function (t, o, d) {
                var _this = this;
                var h = this._consumeRawText(d, function () { return !_this._attemptCharCode(r.$LT) || !_this._attemptCharCode(r.$SLASH) || (_this._attemptCharCodeUntilFn(g), !_this._attemptStrCaseInsensitive(t ? "".concat(t, ":").concat(o) : o)) ? !1 : (_this._attemptCharCodeUntilFn(g), _this._attemptCharCode(r.$GT)); });
                this._beginToken(s.TAG_CLOSE), this._requireCharCodeUntilFn(function (A) { return A === r.$GT; }, 3), this._cursor.advance(), this._endToken([t, o]), this._handleFullNameStackForTagClose(t, o);
            };
            class_2.prototype._consumeTagOpenStart = function (t) { this._beginToken(s.TAG_OPEN_START, t); var o = this._consumePrefixAndName(); return this._endToken(o); };
            class_2.prototype._consumeAttributeName = function () { var t = this._cursor.peek(); if (t === r.$SQ || t === r.$DQ)
                throw this._createError(l(t), this._cursor.getSpan()); this._beginToken(s.ATTR_NAME); var o = this._consumePrefixAndName(); return this._endToken(o), o; };
            class_2.prototype._consumeAttributeValue = function () { var t; if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
                this._beginToken(s.ATTR_QUOTE);
                var o = this._cursor.peek();
                this._cursor.advance(), this._endToken([String.fromCodePoint(o)]), this._beginToken(s.ATTR_VALUE);
                var d = [];
                for (; this._cursor.peek() !== o;)
                    d.push(this._readChar(!0));
                t = this._processCarriageReturns(d.join("")), this._endToken([t]), this._beginToken(s.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(o)]);
            }
            else {
                this._beginToken(s.ATTR_VALUE);
                var o = this._cursor.clone();
                this._requireCharCodeUntilFn(B, 1), t = this._processCarriageReturns(this._cursor.getChars(o)), this._endToken([t]);
            } return t; };
            class_2.prototype._consumeTagOpenEnd = function () { var t = this._attemptCharCode(r.$SLASH) ? s.TAG_OPEN_END_VOID : s.TAG_OPEN_END; this._beginToken(t), this._requireCharCode(r.$GT), this._endToken([]); };
            class_2.prototype._consumeTagClose = function (t) { if (this._beginToken(s.TAG_CLOSE, t), this._attemptCharCodeUntilFn(g), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
                this._attemptCharCodeUntilFn(g), this._requireCharCode(r.$GT), this._endToken([]);
            else {
                var _b = __read(this._consumePrefixAndName(), 2), o = _b[0], d = _b[1];
                this._attemptCharCodeUntilFn(g), this._requireCharCode(r.$GT), this._endToken([o, d]), this._handleFullNameStackForTagClose(o, d);
            } };
            class_2.prototype._consumeExpansionFormStart = function () { this._beginToken(s.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(s.EXPANSION_FORM_START), this._beginToken(s.RAW_TEXT); var t = this._readUntil(r.$COMMA); this._endToken([t]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(g), this._beginToken(s.RAW_TEXT); var o = this._readUntil(r.$COMMA); this._endToken([o]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(g); };
            class_2.prototype._consumeExpansionCaseStart = function () { this._beginToken(s.EXPANSION_CASE_VALUE); var t = this._readUntil(r.$LBRACE).trim(); this._endToken([t]), this._attemptCharCodeUntilFn(g), this._beginToken(s.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(g), this._expansionCaseStack.push(s.EXPANSION_CASE_EXP_START); };
            class_2.prototype._consumeExpansionCaseEnd = function () { this._beginToken(s.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(g), this._expansionCaseStack.pop(); };
            class_2.prototype._consumeExpansionFormEnd = function () { this._beginToken(s.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop(); };
            class_2.prototype._consumeText = function () { var t = this._cursor.clone(); this._beginToken(s.TEXT, t); var o = []; do
                this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (o.push(this._interpolationConfig.start), this._inInterpolation = !0) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (o.push(this._interpolationConfig.end), this._inInterpolation = !1) : o.push(this._readChar(!0));
            while (!this._isTextEnd()); this._endToken([this._processCarriageReturns(o.join(""))]); };
            class_2.prototype._isTextEnd = function () { return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase())); };
            class_2.prototype._readUntil = function (t) { var o = this._cursor.clone(); return this._attemptUntilChar(t), this._cursor.getChars(o); };
            class_2.prototype._isInExpansionCase = function () { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_CASE_EXP_START; };
            class_2.prototype._isInExpansionForm = function () { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_FORM_START; };
            class_2.prototype.isExpansionFormStart = function () { if (this._cursor.peek() !== r.$LBRACE)
                return !1; if (this._interpolationConfig) {
                var t = this._cursor.clone(), o = this._attemptStr(this._interpolationConfig.start);
                return this._cursor = t, !o;
            } return !0; };
            class_2.prototype._handleFullNameStackForTagOpen = function (t, o) { var d = D.mergeNsAndName(t, o); (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === d) && this._fullNameStack.push(d); };
            class_2.prototype._handleFullNameStackForTagClose = function (t, o) { var d = D.mergeNsAndName(t, o); this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === d && this._fullNameStack.pop(); };
            return class_2;
        }());
        function g(t) { return !r.isWhitespace(t) || t === r.$EOF; }
        function B(t) { return r.isWhitespace(t) || t === r.$GT || t === r.$SLASH || t === r.$SQ || t === r.$DQ || t === r.$EQ; }
        function O(t) { return (t < r.$a || r.$z < t) && (t < r.$A || r.$Z < t) && (t < r.$0 || t > r.$9); }
        function F(t) { return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiHexDigit(t); }
        function w(t) { return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiLetter(t); }
        function b(t) { return t === r.$EQ || r.isAsciiLetter(t) || r.isDigit(t); }
        function M(t, o) { return R(t) == R(o); }
        function R(t) { return t >= r.$a && t <= r.$z ? t - r.$a + r.$A : t; }
        function U(t) { var o = [], d; for (var h = 0; h < t.length; h++) {
            var A = t[h];
            d && d.type == s.TEXT && A.type == s.TEXT ? (d.parts[0] += A.parts[0], d.sourceSpan.end = A.sourceSpan.end) : (d = A, o.push(d));
        } return o; }
        var k = /** @class */ (function () {
            function k(t, o) {
                if (t instanceof k)
                    this.file = t.file, this.input = t.input, this.end = t.end, this.state = Object.assign({}, t.state);
                else {
                    if (!o)
                        throw new Error("Programming error: the range argument must be provided with a file argument.");
                    this.file = t, this.input = t.content, this.end = o.endPos, this.state = { peek: -1, offset: o.startPos, line: o.startLine, column: o.startCol };
                }
            }
            k.prototype.clone = function () { return new k(this); };
            k.prototype.peek = function () { return this.state.peek; };
            k.prototype.charsLeft = function () { return this.end - this.state.offset; };
            k.prototype.diff = function (t) { return this.state.offset - t.state.offset; };
            k.prototype.advance = function () { this.advanceState(this.state); };
            k.prototype.init = function () { this.updatePeek(this.state); };
            k.prototype.getSpan = function (t, o) { if (t = t || this, o)
                for (t = t.clone(); this.diff(t) > 0 && o.indexOf(t.peek()) !== -1;)
                    t.advance(); return new u.ParseSourceSpan(new u.ParseLocation(t.file, t.state.offset, t.state.line, t.state.column), new u.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column)); };
            k.prototype.getChars = function (t) { return this.input.substring(t.state.offset, this.state.offset); };
            k.prototype.charAt = function (t) { return this.input.charCodeAt(t); };
            k.prototype.advanceState = function (t) { if (t.offset >= this.end)
                throw this.state = t, new L('Unexpected character "EOF"', this); var o = this.charAt(t.offset); o === r.$LF ? (t.line++, t.column = 0) : r.isNewLine(o) || t.column++, t.offset++, this.updatePeek(t); };
            k.prototype.updatePeek = function (t) { t.peek = t.offset >= this.end ? r.$EOF : this.charAt(t.offset); };
            return k;
        }()), j = /** @class */ (function (_super) {
            __extends(j, _super);
            function j(t, o) {
                var _this = this;
                t instanceof j ? (_this = _super.call(this, t) || this, _this.internalState = Object.assign({}, t.internalState)) : (_this = _super.call(this, t, o) || this, _this.internalState = _this.state);
                return _this;
            }
            j.prototype.advance = function () { this.state = this.internalState, _super.prototype.advance.call(this), this.processEscapeSequence(); };
            j.prototype.init = function () { _super.prototype.init.call(this), this.processEscapeSequence(); };
            j.prototype.clone = function () { return new j(this); };
            j.prototype.getChars = function (t) { var o = t.clone(), d = ""; for (; o.internalState.offset < this.internalState.offset;)
                d += String.fromCodePoint(o.peek()), o.advance(); return d; };
            j.prototype.processEscapeSequence = function () {
                var _this = this;
                var t = function () { return _this.internalState.peek; };
                if (t() === r.$BACKSLASH)
                    if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), t() === r.$n)
                        this.state.peek = r.$LF;
                    else if (t() === r.$r)
                        this.state.peek = r.$CR;
                    else if (t() === r.$v)
                        this.state.peek = r.$VTAB;
                    else if (t() === r.$t)
                        this.state.peek = r.$TAB;
                    else if (t() === r.$b)
                        this.state.peek = r.$BSPACE;
                    else if (t() === r.$f)
                        this.state.peek = r.$FF;
                    else if (t() === r.$u)
                        if (this.advanceState(this.internalState), t() === r.$LBRACE) {
                            this.advanceState(this.internalState);
                            var o = this.clone(), d = 0;
                            for (; t() !== r.$RBRACE;)
                                this.advanceState(this.internalState), d++;
                            this.state.peek = this.decodeHexDigits(o, d);
                        }
                        else {
                            var o = this.clone();
                            this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 4);
                        }
                    else if (t() === r.$x) {
                        this.advanceState(this.internalState);
                        var o = this.clone();
                        this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 2);
                    }
                    else if (r.isOctalDigit(t())) {
                        var o = "", d = 0, h = this.clone();
                        for (; r.isOctalDigit(t()) && d < 3;)
                            h = this.clone(), o += String.fromCodePoint(t()), this.advanceState(this.internalState), d++;
                        this.state.peek = parseInt(o, 8), this.internalState = h.internalState;
                    }
                    else
                        r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
            };
            j.prototype.decodeHexDigits = function (t, o) { var d = this.input.substr(t.internalState.offset, o), h = parseInt(d, 16); if (isNaN(h))
                throw t.state = t.internalState, new L("Invalid hexadecimal escape sequence", t); return h; };
            return j;
        }(k)), L = /** @class */ (function () {
            function L(t, o) {
                this.msg = t, this.cursor = o;
            }
            return L;
        }());
        e.CursorError = L;
    } }), ns = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ne(), u = As(), n = $l(), D = Ze(), s = /** @class */ (function (_super) {
            __extends(s, _super);
            function s(i, l, p) {
                var _this = this;
                _this = _super.call(this, l, p) || this, _this.elementName = i;
                return _this;
            }
            s.create = function (i, l, p) { return new s(i, l, p); };
            return s;
        }(r.ParseError));
        e.TreeError = s;
        var a = /** @class */ (function () {
            function a(i, l) {
                this.rootNodes = i, this.errors = l;
            }
            return a;
        }());
        e.ParseTreeResult = a;
        var f = /** @class */ (function () {
            function f(i) {
                this.getTagDefinition = i;
            }
            f.prototype.parse = function (i, l, p) { var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, C = arguments.length > 4 ? arguments[4] : void 0, g = function (k) { return function (j) { for (var L = arguments.length, t = new Array(L > 1 ? L - 1 : 0), o = 1; o < L; o++)
                t[o - 1] = arguments[o]; return k.apply(void 0, __spreadArray([j.toLowerCase()], __read(t), false)); }; }, B = m ? this.getTagDefinition : g(this.getTagDefinition), O = function (k) { return B(k).contentType; }, F = m ? C : g(C), w = C ? function (k, j, L, t) { var o = F(k, j, L, t); return o !== void 0 ? o : O(k); } : O, b = n.tokenize(i, l, w, p), M = p && p.canSelfClose || !1, R = p && p.allowHtmComponentClosingTags || !1, U = new c(b.tokens, B, M, R, m).build(); return new a(U.rootNodes, b.errors.concat(U.errors)); };
            return f;
        }());
        e.Parser = f;
        var c = /** @class */ (function () {
            function c(i, l, p, m, C) {
                this.tokens = i, this.getTagDefinition = l, this.canSelfClose = p, this.allowHtmComponentClosingTags = m, this.isTagNameCaseSensitive = C, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
            }
            c.prototype.build = function () { for (; this._peek.type !== n.TokenType.EOF;)
                this._peek.type === n.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === n.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === n.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === n.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === n.TokenType.TEXT || this._peek.type === n.TokenType.RAW_TEXT || this._peek.type === n.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === n.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === n.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance(); return new a(this._rootNodes, this._errors); };
            c.prototype._advance = function () { var i = this._peek; return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], i; };
            c.prototype._advanceIf = function (i) { return this._peek.type === i ? this._advance() : null; };
            c.prototype._consumeCdata = function (i) { var l = this._advance(), p = this._getText(l), m = this._advanceIf(n.TokenType.CDATA_END); this._addToParent(new u.CDATA(p, new r.ParseSourceSpan(i.sourceSpan.start, (m || l).sourceSpan.end))); };
            c.prototype._consumeComment = function (i) { var l = this._advanceIf(n.TokenType.RAW_TEXT), p = this._advanceIf(n.TokenType.COMMENT_END), m = l != null ? l.parts[0].trim() : null, C = new r.ParseSourceSpan(i.sourceSpan.start, (p || l || i).sourceSpan.end); this._addToParent(new u.Comment(m, C)); };
            c.prototype._consumeDocType = function (i) { var l = this._advanceIf(n.TokenType.RAW_TEXT), p = this._advanceIf(n.TokenType.DOC_TYPE_END), m = l != null ? l.parts[0].trim() : null, C = new r.ParseSourceSpan(i.sourceSpan.start, (p || l || i).sourceSpan.end); this._addToParent(new u.DocType(m, C)); };
            c.prototype._consumeExpansion = function (i) { var l = this._advance(), p = this._advance(), m = []; for (; this._peek.type === n.TokenType.EXPANSION_CASE_VALUE;) {
                var g = this._parseExpansionCase();
                if (!g)
                    return;
                m.push(g);
            } if (this._peek.type !== n.TokenType.EXPANSION_FORM_END) {
                this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
                return;
            } var C = new r.ParseSourceSpan(i.sourceSpan.start, this._peek.sourceSpan.end); this._addToParent(new u.Expansion(l.parts[0], p.parts[0], m, C, l.sourceSpan)), this._advance(); };
            c.prototype._parseExpansionCase = function () { var i = this._advance(); if (this._peek.type !== n.TokenType.EXPANSION_CASE_EXP_START)
                return this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null; var l = this._advance(), p = this._collectExpansionExpTokens(l); if (!p)
                return null; var m = this._advance(); p.push(new n.Token(n.TokenType.EOF, [], m.sourceSpan)); var C = new c(p, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build(); if (C.errors.length > 0)
                return this._errors = this._errors.concat(C.errors), null; var g = new r.ParseSourceSpan(i.sourceSpan.start, m.sourceSpan.end), B = new r.ParseSourceSpan(l.sourceSpan.start, m.sourceSpan.end); return new u.ExpansionCase(i.parts[0], C.rootNodes, g, i.sourceSpan, B); };
            c.prototype._collectExpansionExpTokens = function (i) { var l = [], p = [n.TokenType.EXPANSION_CASE_EXP_START]; for (;;) {
                if ((this._peek.type === n.TokenType.EXPANSION_FORM_START || this._peek.type === n.TokenType.EXPANSION_CASE_EXP_START) && p.push(this._peek.type), this._peek.type === n.TokenType.EXPANSION_CASE_EXP_END)
                    if (v(p, n.TokenType.EXPANSION_CASE_EXP_START)) {
                        if (p.pop(), p.length == 0)
                            return l;
                    }
                    else
                        return this._errors.push(s.create(null, i.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                if (this._peek.type === n.TokenType.EXPANSION_FORM_END)
                    if (v(p, n.TokenType.EXPANSION_FORM_START))
                        p.pop();
                    else
                        return this._errors.push(s.create(null, i.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                if (this._peek.type === n.TokenType.EOF)
                    return this._errors.push(s.create(null, i.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                l.push(this._advance());
            } };
            c.prototype._getText = function (i) {
                var l = i.parts[0];
                if (l.length > 0 && l[0] == "\n") {
                    var p = this._getParentElement();
                    p != null && p.children.length == 0 && this.getTagDefinition(p.name).ignoreFirstLf && (l = l.substring(1));
                }
                return l;
            };
            c.prototype._consumeText = function (i) { var l = this._getText(i); l.length > 0 && this._addToParent(new u.Text(l, i.sourceSpan)); };
            c.prototype._closeVoidElement = function () { var i = this._getParentElement(); i && this.getTagDefinition(i.name).isVoid && this._elementStack.pop(); };
            c.prototype._consumeStartTag = function (i) { var l = i.parts[0], p = i.parts[1], m = []; for (; this._peek.type === n.TokenType.ATTR_NAME;)
                m.push(this._consumeAttr(this._advance())); var C = this._getElementFullName(l, p, this._getParentElement()), g = !1; if (this._peek.type === n.TokenType.TAG_OPEN_END_VOID) {
                this._advance(), g = !0;
                var b = this.getTagDefinition(C);
                this.canSelfClose || b.canSelfClose || D.getNsPrefix(C) !== null || b.isVoid || this._errors.push(s.create(C, i.sourceSpan, "Only void and foreign elements can be self closed \"".concat(i.parts[1], "\"")));
            }
            else
                this._peek.type === n.TokenType.TAG_OPEN_END && (this._advance(), g = !1); var B = this._peek.sourceSpan.start, O = new r.ParseSourceSpan(i.sourceSpan.start, B), F = new r.ParseSourceSpan(i.sourceSpan.start.moveBy(1), i.sourceSpan.end), w = new u.Element(C, m, [], O, O, void 0, F); this._pushElement(w), g && (this._popElement(C), w.endSourceSpan = O); };
            c.prototype._pushElement = function (i) { var l = this._getParentElement(); l && this.getTagDefinition(l.name).isClosedByChild(i.name) && this._elementStack.pop(), this._addToParent(i), this._elementStack.push(i); };
            c.prototype._consumeEndTag = function (i) { var l = this.allowHtmComponentClosingTags && i.parts.length === 0 ? null : this._getElementFullName(i.parts[0], i.parts[1], this._getParentElement()); if (this._getParentElement() && (this._getParentElement().endSourceSpan = i.sourceSpan), l && this.getTagDefinition(l).isVoid)
                this._errors.push(s.create(l, i.sourceSpan, "Void elements do not have end tags \"".concat(i.parts[1], "\"")));
            else if (!this._popElement(l)) {
                var p = "Unexpected closing tag \"".concat(l, "\". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags");
                this._errors.push(s.create(l, i.sourceSpan, p));
            } };
            c.prototype._popElement = function (i) { for (var l = this._elementStack.length - 1; l >= 0; l--) {
                var p = this._elementStack[l];
                if (!i || (D.getNsPrefix(p.name) ? p.name == i : p.name.toLowerCase() == i.toLowerCase()))
                    return this._elementStack.splice(l, this._elementStack.length - l), !0;
                if (!this.getTagDefinition(p.name).closedByParent)
                    return !1;
            } return !1; };
            c.prototype._consumeAttr = function (i) { var l = D.mergeNsAndName(i.parts[0], i.parts[1]), p = i.sourceSpan.end, m = "", C, g; if (this._peek.type === n.TokenType.ATTR_QUOTE && (g = this._advance().sourceSpan.start), this._peek.type === n.TokenType.ATTR_VALUE) {
                var B = this._advance();
                m = B.parts[0], p = B.sourceSpan.end, C = B.sourceSpan;
            } return this._peek.type === n.TokenType.ATTR_QUOTE && (p = this._advance().sourceSpan.end, C = new r.ParseSourceSpan(g, p)), new u.Attribute(l, m, new r.ParseSourceSpan(i.sourceSpan.start, p), C, i.sourceSpan); };
            c.prototype._getParentElement = function () { return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null; };
            c.prototype._getParentElementSkippingContainers = function () { var i = null; for (var l = this._elementStack.length - 1; l >= 0; l--) {
                if (!D.isNgContainer(this._elementStack[l].name))
                    return { parent: this._elementStack[l], container: i };
                i = this._elementStack[l];
            } return { parent: null, container: i }; };
            c.prototype._addToParent = function (i) { var l = this._getParentElement(); l != null ? l.children.push(i) : this._rootNodes.push(i); };
            c.prototype._insertBeforeContainer = function (i, l, p) { if (!l)
                this._addToParent(p), this._elementStack.push(p);
            else {
                if (i) {
                    var m = i.children.indexOf(l);
                    i.children[m] = p;
                }
                else
                    this._rootNodes.push(p);
                p.children.push(l), this._elementStack.splice(this._elementStack.indexOf(l), 0, p);
            } };
            c.prototype._getElementFullName = function (i, l, p) { return i === "" && (i = this.getTagDefinition(l).implicitNamespacePrefix || "", i === "" && p != null && (i = D.getNsPrefix(p.name))), D.mergeNsAndName(i, l); };
            return c;
        }());
        function v(i, l) { return i.length > 0 && i[i.length - 1] === l; }
    } }), Ml = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Fs(), u = ns(), n = ns();
        e.ParseTreeResult = n.ParseTreeResult, e.TreeError = n.TreeError;
        var D = /** @class */ (function (_super) {
            __extends(D, _super);
            function D() {
                return _super.call(this, r.getHtmlTagDefinition) || this;
            }
            D.prototype.parse = function (s, a, f) { var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, v = arguments.length > 4 ? arguments[4] : void 0; return _super.prototype.parse.call(this, s, a, f, c, v); };
            return D;
        }(u.Parser));
        e.HtmlParser = D;
    } }), ss = I({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js": function (e) {
        "use strict";
        N(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ml(), u = Ze();
        e.TagContentType = u.TagContentType;
        var n = null, D = function () { return (n || (n = new r.HtmlParser), n); };
        function s(a) { var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _b = f.canSelfClose, c = _b === void 0 ? !1 : _b, _d = f.allowHtmComponentClosingTags, v = _d === void 0 ? !1 : _d, _f = f.isTagNameCaseSensitive, i = _f === void 0 ? !1 : _f, l = f.getTagContentType; return D().parse(a, "angular-html-parser", { tokenizeExpansionForms: !1, interpolationConfig: void 0, canSelfClose: c, allowHtmComponentClosingTags: v }, i, l); }
        e.parse = s;
    } }), jl = I({ "src/language-html/parser-html.js": function (e, r) { N(); var _b = Ne(), u = _b.ParseSourceSpan, n = _b.ParseLocation, D = _b.ParseSourceFile, s = JD(), a = ls(), f = ZD(), c = yl().inferParserByLanguage, v = Bl(), i = Nl(), l = Ol(), p = ql().hasPragma, m = Il().Node, C = Rl().parseIeConditionalComment, _d = xl(), g = _d.locStart, B = _d.locEnd; function O(b, M, R) {
        var e_9, _b;
        var U = M.canSelfClose, k = M.normalizeTagName, j = M.normalizeAttributeName, L = M.allowHtmComponentClosingTags, t = M.isTagNameCaseSensitive, o = M.getTagContentType, d = ss(), _d = As(), h = _d.RecursiveVisitor, A = _d.visitAll, q = Ne().ParseSourceSpan, P = Fs().getHtmlTagDefinition, _f = d.parse(b, { canSelfClose: U, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t, getTagContentType: o }), G = _f.rootNodes, X = _f.errors;
        if (R.parser === "vue")
            if (G.some(function (_) { return _.type === "docType" && _.value === "html" || _.type === "element" && _.name.toLowerCase() === "html"; })) {
                U = !0, k = !0, j = !0, L = !0, t = !1;
                var _3 = d.parse(b, { canSelfClose: U, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t });
                G = _3.rootNodes, X = _3.errors;
            }
            else {
                var _4 = function (T) { if (!T || T.type !== "element" || T.name !== "template")
                    return !1; var x = T.attrs.find(function (V) { return V.name === "lang"; }), $ = x && x.value; return !$ || c($, R) === "html"; };
                if (G.some(_4)) {
                    var T_1, x_1 = function () { return d.parse(b, { canSelfClose: U, allowHtmComponentClosingTags: L, isTagNameCaseSensitive: t }); }, $_1 = function () { return T_1 || (T_1 = x_1()); }, V = function (z) { return $_1().rootNodes.find(function (Y) { var ie = Y.startSourceSpan; return ie && ie.start.offset === z.startSourceSpan.start.offset; }); };
                    for (var z = 0; z < G.length; z++) {
                        var Y = G[z], ie = Y.endSourceSpan, Ee = Y.startSourceSpan;
                        if (ie === null)
                            X = $_1().errors, G[z] = V(Y) || Y;
                        else if (_4(Y)) {
                            var Fe = $_1(), Oe = Ee.end.offset, Z = ie.start.offset;
                            try {
                                for (var _g = (e_9 = void 0, __values(Fe.errors)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                    var re = _h.value;
                                    var oe = re.span.start.offset;
                                    if (Oe < oe && oe < Z) {
                                        X = [re];
                                        break;
                                    }
                                }
                            }
                            catch (e_9_1) { e_9 = { error: e_9_1 }; }
                            finally {
                                try {
                                    if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                                }
                                finally { if (e_9) throw e_9.error; }
                            }
                            G[z] = V(Y) || Y;
                        }
                    }
                }
            }
        if (X.length > 0) {
            var _j = X[0], E = _j.msg, _k = _j.span, _5 = _k.start, T = _k.end;
            throw f(E, { start: { line: _5.line + 1, column: _5.col + 1 }, end: { line: T.line + 1, column: T.col + 1 } });
        }
        var Q = function (E) { var _ = E.name.startsWith(":") ? E.name.slice(1).split(":")[0] : null, T = E.nameSpan.toString(), x = _ !== null && T.startsWith("".concat(_, ":")), $ = x ? T.slice(_.length + 1) : T; E.name = $, E.namespace = _, E.hasExplicitNamespace = x; }, H = function (E) {
            var e_10, _b;
            switch (E.type) {
                case "element":
                    Q(E);
                    try {
                        for (var _d = __values(E.attrs), _f = _d.next(); !_f.done; _f = _d.next()) {
                            var _6 = _f.value;
                            Q(_6), _6.valueSpan ? (_6.value = _6.valueSpan.toString(), /["']/.test(_6.value[0]) && (_6.value = _6.value.slice(1, -1))) : _6.value = null;
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
                        }
                        finally { if (e_10) throw e_10.error; }
                    }
                    break;
                case "comment":
                    E.value = E.sourceSpan.toString().slice(4, -3);
                    break;
                case "text":
                    E.value = E.sourceSpan.toString();
                    break;
            }
        }, W = function (E, _) { var T = E.toLowerCase(); return _(T) ? T : E; }, K = function (E) {
            var e_11, _b;
            if (E.type === "element" && (k && (!E.namespace || E.namespace === E.tagDefinition.implicitNamespacePrefix || l(E)) && (E.name = W(E.name, function (_) { return _ in v; })), j)) {
                var _7 = i[E.name] || Object.create(null);
                try {
                    for (var _d = __values(E.attrs), _f = _d.next(); !_f.done; _f = _d.next()) {
                        var T = _f.value;
                        T.namespace || (T.name = W(T.name, function (x) { return E.name in i && (x in i["*"] || x in _7); }));
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        }, J = function (E) { E.sourceSpan && E.endSourceSpan && (E.sourceSpan = new q(E.sourceSpan.start, E.endSourceSpan.end)); }, S = function (E) { if (E.type === "element") {
            var _8 = P(t ? E.name : E.name.toLowerCase());
            !E.namespace || E.namespace === _8.implicitNamespacePrefix || l(E) ? E.tagDefinition = _8 : E.tagDefinition = P("");
        } };
        return A(new /** @class */ (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_3.prototype.visit = function (E) { H(E), S(E), K(E), J(E); };
            return class_3;
        }(h)), G), G;
    } function F(b, M, R) { var U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, _b = U ? s(b) : { frontMatter: null, content: b }, k = _b.frontMatter, j = _b.content, L = new D(b, M.filepath), t = new n(L, 0, 0, 0), o = t.moveBy(b.length), d = { type: "root", sourceSpan: new u(t, o), children: O(j, R, M) }; if (k) {
        var q = new n(L, 0, 0, 0), P = q.moveBy(k.raw.length);
        k.sourceSpan = new u(q, P), d.children.unshift(k);
    } var h = new m(d), A = function (q, P) { var G = P.offset, X = b.slice(0, G).replace(/[^\n\r]/g, " "), H = F(X + q, M, R, !1); H.sourceSpan = new u(P, a(H.children).sourceSpan.end); var W = H.children[0]; return W.length === G ? H.children.shift() : (W.sourceSpan = new u(W.sourceSpan.start.moveBy(G), W.sourceSpan.end), W.value = W.value.slice(G)), H; }; return h.walk(function (q) { if (q.type === "comment") {
        var P = C(q, A);
        P && q.parent.replaceChild(q, P);
    } }), h; } function w() { var _b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = _b.name, _d = _b.canSelfClose, M = _d === void 0 ? !1 : _d, _f = _b.normalizeTagName, R = _f === void 0 ? !1 : _f, _g = _b.normalizeAttributeName, U = _g === void 0 ? !1 : _g, _h = _b.allowHtmComponentClosingTags, k = _h === void 0 ? !1 : _h, _j = _b.isTagNameCaseSensitive, j = _j === void 0 ? !1 : _j, L = _b.getTagContentType; return { parse: function (t, o, d) { return F(t, Object.assign({ parser: b }, d), { canSelfClose: M, normalizeTagName: R, normalizeAttributeName: U, allowHtmComponentClosingTags: k, isTagNameCaseSensitive: j, getTagContentType: L }); }, hasPragma: p, astFormat: "html", locStart: g, locEnd: B }; } r.exports = { parsers: { html: w({ name: "html", canSelfClose: !0, normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 }), angular: w({ name: "angular", canSelfClose: !0 }), vue: w({ name: "vue", canSelfClose: !0, isTagNameCaseSensitive: !0, getTagContentType: function (b, M, R, U) { if (b.toLowerCase() !== "html" && !R && (b !== "template" || U.some(function (k) { var j = k.name, L = k.value; return j === "lang" && L !== "html" && L !== "" && L !== void 0; })))
                    return ss().TagContentType.RAW_TEXT; } }), lwc: w({ name: "lwc" }) } }; } }), _2 = jl();
export { _2 as default };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
