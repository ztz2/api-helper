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
var Te = function (e, r) { return function () { return (r || e((r = { exports: {} }).exports, r), r.exports); }; };
var pt = Te(function (Vg, ou) { var ur = function (e) { return e && e.Math == Math && e; }; ou.exports = ur(typeof globalThis == "object" && globalThis) || ur(typeof window == "object" && window) || ur(typeof self == "object" && self) || ur(typeof global == "object" && global) || function () { return this; }() || Function("return this")(); });
var Dt = Te(function (Wg, lu) { lu.exports = function (e) { try {
    return !!e();
}
catch (_b) {
    return !0;
} }; });
var yt = Te(function (Hg, cu) { var wo = Dt(); cu.exports = !wo(function () { return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7; }); });
var sr = Te(function (Gg, pu) { var _o = Dt(); pu.exports = !_o(function () { var e = function () { }.bind(); return typeof e != "function" || e.hasOwnProperty("prototype"); }); });
var At = Te(function (Ug, fu) { var Po = sr(), ir = Function.prototype.call; fu.exports = Po ? ir.bind(ir) : function () { return ir.apply(ir, arguments); }; });
var gu = Te(function (du) {
    "use strict";
    var Du = {}.propertyIsEnumerable, mu = Object.getOwnPropertyDescriptor, Io = mu && !Du.call({ 1: 2 }, 1);
    du.f = Io ? function (r) { var t = mu(this, r); return !!t && t.enumerable; } : Du;
});
var ar = Te(function (zg, yu) { yu.exports = function (e, r) { return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r }; }; });
var mt = Te(function (Xg, Cu) { var hu = sr(), vu = Function.prototype, $r = vu.call, ko = hu && vu.bind.bind($r, $r); Cu.exports = hu ? ko : function (e) { return function () { return $r.apply(e, arguments); }; }; });
var Rt = Te(function (Kg, Fu) { var Eu = mt(), Lo = Eu({}.toString), Oo = Eu("".slice); Fu.exports = function (e) { return Oo(Lo(e), 8, -1); }; });
var Su = Te(function (Yg, Au) { var jo = mt(), qo = Dt(), Mo = Rt(), Vr = Object, Ro = jo("".split); Au.exports = qo(function () { return !Vr("z").propertyIsEnumerable(0); }) ? function (e) { return Mo(e) == "String" ? Ro(e, "") : Vr(e); } : Vr; });
var or = Te(function (Qg, xu) { xu.exports = function (e) { return e == null; }; });
var Wr = Te(function (Zg, bu) { var $o = or(), Vo = TypeError; bu.exports = function (e) { if ($o(e))
    throw Vo("Can't call method on " + e); return e; }; });
var lr = Te(function (e0, Tu) { var Wo = Su(), Ho = Wr(); Tu.exports = function (e) { return Wo(Ho(e)); }; });
var Gr = Te(function (t0, Bu) { var Hr = typeof document == "object" && document.all, Go = typeof Hr > "u" && Hr !== void 0; Bu.exports = { all: Hr, IS_HTMLDDA: Go }; });
var ot = Te(function (r0, wu) { var Nu = Gr(), Uo = Nu.all; wu.exports = Nu.IS_HTMLDDA ? function (e) { return typeof e == "function" || e === Uo; } : function (e) { return typeof e == "function"; }; });
var St = Te(function (n0, Iu) { var _u = ot(), Pu = Gr(), Jo = Pu.all; Iu.exports = Pu.IS_HTMLDDA ? function (e) { return typeof e == "object" ? e !== null : _u(e) || e === Jo; } : function (e) { return typeof e == "object" ? e !== null : _u(e); }; });
var $t = Te(function (u0, ku) { var Ur = pt(), zo = ot(), Xo = function (e) { return zo(e) ? e : void 0; }; ku.exports = function (e, r) { return arguments.length < 2 ? Xo(Ur[e]) : Ur[e] && Ur[e][r]; }; });
var Jr = Te(function (s0, Lu) { var Ko = mt(); Lu.exports = Ko({}.isPrototypeOf); });
var ju = Te(function (i0, Ou) { var Yo = $t(); Ou.exports = Yo("navigator", "userAgent") || ""; });
var Hu = Te(function (a0, Wu) { var Vu = pt(), zr = ju(), qu = Vu.process, Mu = Vu.Deno, Ru = qu && qu.versions || Mu && Mu.version, $u = Ru && Ru.v8, dt, cr; $u && (dt = $u.split("."), cr = dt[0] > 0 && dt[0] < 4 ? 1 : +(dt[0] + dt[1])); !cr && zr && (dt = zr.match(/Edge\/(\d+)/), (!dt || dt[1] >= 74) && (dt = zr.match(/Chrome\/(\d+)/), dt && (cr = +dt[1]))); Wu.exports = cr; });
var Xr = Te(function (o0, Uu) { var Gu = Hu(), Qo = Dt(); Uu.exports = !!Object.getOwnPropertySymbols && !Qo(function () { var e = Symbol(); return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Gu && Gu < 41; }); });
var Kr = Te(function (l0, Ju) { var Zo = Xr(); Ju.exports = Zo && !Symbol.sham && typeof Symbol.iterator == "symbol"; });
var Yr = Te(function (c0, zu) { var el = $t(), tl = ot(), rl = Jr(), nl = Kr(), ul = Object; zu.exports = nl ? function (e) { return typeof e == "symbol"; } : function (e) { var r = el("Symbol"); return tl(r) && rl(r.prototype, ul(e)); }; });
var pr = Te(function (p0, Xu) { var sl = String; Xu.exports = function (e) { try {
    return sl(e);
}
catch (_b) {
    return "Object";
} }; });
var Vt = Te(function (f0, Ku) { var il = ot(), al = pr(), ol = TypeError; Ku.exports = function (e) { if (il(e))
    return e; throw ol(al(e) + " is not a function"); }; });
var fr = Te(function (D0, Yu) { var ll = Vt(), cl = or(); Yu.exports = function (e, r) { var t = e[r]; return cl(t) ? void 0 : ll(t); }; });
var Zu = Te(function (m0, Qu) { var Qr = At(), Zr = ot(), en = St(), pl = TypeError; Qu.exports = function (e, r) { var t, s; if (r === "string" && Zr(t = e.toString) && !en(s = Qr(t, e)) || Zr(t = e.valueOf) && !en(s = Qr(t, e)) || r !== "string" && Zr(t = e.toString) && !en(s = Qr(t, e)))
    return s; throw pl("Can't convert object to primitive value"); }; });
var ts = Te(function (d0, es) { es.exports = !1; });
var Dr = Te(function (g0, ns) { var rs = pt(), fl = Object.defineProperty; ns.exports = function (e, r) { try {
    fl(rs, e, { value: r, configurable: !0, writable: !0 });
}
catch (_b) {
    rs[e] = r;
} return r; }; });
var mr = Te(function (y0, ss) { var Dl = pt(), ml = Dr(), us = "__core-js_shared__", dl = Dl[us] || ml(us, {}); ss.exports = dl; });
var tn = Te(function (h0, as) { var gl = ts(), is = mr(); (as.exports = function (e, r) { return is[e] || (is[e] = r !== void 0 ? r : {}); })("versions", []).push({ version: "3.26.1", mode: gl ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" }); });
var dr = Te(function (v0, os) { var yl = Wr(), hl = Object; os.exports = function (e) { return hl(yl(e)); }; });
var Ct = Te(function (C0, ls) { var vl = mt(), Cl = dr(), El = vl({}.hasOwnProperty); ls.exports = Object.hasOwn || function (r, t) { return El(Cl(r), t); }; });
var rn = Te(function (E0, cs) { var Fl = mt(), Al = 0, Sl = Math.random(), xl = Fl(1..toString); cs.exports = function (e) { return "Symbol(" + (e === void 0 ? "" : e) + ")_" + xl(++Al + Sl, 36); }; });
var bt = Te(function (F0, ds) { var bl = pt(), Tl = tn(), ps = Ct(), Bl = rn(), fs = Xr(), ms = Kr(), Pt = Tl("wks"), xt = bl.Symbol, Ds = xt && xt.for, Nl = ms ? xt : xt && xt.withoutSetter || Bl; ds.exports = function (e) { if (!ps(Pt, e) || !(fs || typeof Pt[e] == "string")) {
    var r = "Symbol." + e;
    fs && ps(xt, e) ? Pt[e] = xt[e] : ms && Ds ? Pt[e] = Ds(r) : Pt[e] = Nl(r);
} return Pt[e]; }; });
var vs = Te(function (A0, hs) { var wl = At(), gs = St(), ys = Yr(), _l = fr(), Pl = Zu(), Il = bt(), kl = TypeError, Ll = Il("toPrimitive"); hs.exports = function (e, r) { if (!gs(e) || ys(e))
    return e; var t = _l(e, Ll), s; if (t) {
    if (r === void 0 && (r = "default"), s = wl(t, e, r), !gs(s) || ys(s))
        return s;
    throw kl("Can't convert object to primitive value");
} return r === void 0 && (r = "number"), Pl(e, r); }; });
var gr = Te(function (S0, Cs) { var Ol = vs(), jl = Yr(); Cs.exports = function (e) { var r = Ol(e, "string"); return jl(r) ? r : r + ""; }; });
var As = Te(function (x0, Fs) { var ql = pt(), Es = St(), nn = ql.document, Ml = Es(nn) && Es(nn.createElement); Fs.exports = function (e) { return Ml ? nn.createElement(e) : {}; }; });
var un = Te(function (b0, Ss) { var Rl = yt(), $l = Dt(), Vl = As(); Ss.exports = !Rl && !$l(function () { return Object.defineProperty(Vl("div"), "a", { get: function () { return 7; } }).a != 7; }); });
var sn = Te(function (bs) { var Wl = yt(), Hl = At(), Gl = gu(), Ul = ar(), Jl = lr(), zl = gr(), Xl = Ct(), Kl = un(), xs = Object.getOwnPropertyDescriptor; bs.f = Wl ? xs : function (r, t) { if (r = Jl(r), t = zl(t), Kl)
    try {
        return xs(r, t);
    }
    catch (_b) { } if (Xl(r, t))
    return Ul(!Hl(Gl.f, r, t), r[t]); }; });
var Bs = Te(function (B0, Ts) { var Yl = yt(), Ql = Dt(); Ts.exports = Yl && Ql(function () { return Object.defineProperty(function () { }, "prototype", { value: 42, writable: !1 }).prototype != 42; }); });
var Tt = Te(function (N0, Ns) { var Zl = St(), ec = String, tc = TypeError; Ns.exports = function (e) { if (Zl(e))
    return e; throw tc(ec(e) + " is not an object"); }; });
var It = Te(function (_s) { var rc = yt(), nc = un(), uc = Bs(), yr = Tt(), ws = gr(), sc = TypeError, an = Object.defineProperty, ic = Object.getOwnPropertyDescriptor, on = "enumerable", ln = "configurable", cn = "writable"; _s.f = rc ? uc ? function (r, t, s) { if (yr(r), t = ws(t), yr(s), typeof r == "function" && t === "prototype" && "value" in s && cn in s && !s[cn]) {
    var a = ic(r, t);
    a && a[cn] && (r[t] = s.value, s = { configurable: ln in s ? s[ln] : a[ln], enumerable: on in s ? s[on] : a[on], writable: !1 });
} return an(r, t, s); } : an : function (r, t, s) { if (yr(r), t = ws(t), yr(s), nc)
    try {
        return an(r, t, s);
    }
    catch (_b) { } if ("get" in s || "set" in s)
    throw sc("Accessors not supported"); return "value" in s && (r[t] = s.value), r; }; });
var pn = Te(function (_0, Ps) { var ac = yt(), oc = It(), lc = ar(); Ps.exports = ac ? function (e, r, t) { return oc.f(e, r, lc(1, t)); } : function (e, r, t) { return e[r] = t, e; }; });
var Ls = Te(function (P0, ks) { var fn = yt(), cc = Ct(), Is = Function.prototype, pc = fn && Object.getOwnPropertyDescriptor, Dn = cc(Is, "name"), fc = Dn && function () { }.name === "something", Dc = Dn && (!fn || fn && pc(Is, "name").configurable); ks.exports = { EXISTS: Dn, PROPER: fc, CONFIGURABLE: Dc }; });
var dn = Te(function (I0, Os) { var mc = mt(), dc = ot(), mn = mr(), gc = mc(Function.toString); dc(mn.inspectSource) || (mn.inspectSource = function (e) { return gc(e); }); Os.exports = mn.inspectSource; });
var Ms = Te(function (k0, qs) { var yc = pt(), hc = ot(), js = yc.WeakMap; qs.exports = hc(js) && /native code/.test(String(js)); });
var Vs = Te(function (L0, $s) { var vc = tn(), Cc = rn(), Rs = vc("keys"); $s.exports = function (e) { return Rs[e] || (Rs[e] = Cc(e)); }; });
var gn = Te(function (O0, Ws) { Ws.exports = {}; });
var Js = Te(function (j0, Us) { var Ec = Ms(), Gs = pt(), Fc = St(), Ac = pn(), yn = Ct(), hn = mr(), Sc = Vs(), xc = gn(), Hs = "Object already initialized", vn = Gs.TypeError, bc = Gs.WeakMap, hr, Wt, vr, Tc = function (e) { return vr(e) ? Wt(e) : hr(e, {}); }, Bc = function (e) { return function (r) { var t; if (!Fc(r) || (t = Wt(r)).type !== e)
    throw vn("Incompatible receiver, " + e + " required"); return t; }; }; Ec || hn.state ? (gt = hn.state || (hn.state = new bc), gt.get = gt.get, gt.has = gt.has, gt.set = gt.set, hr = function (e, r) { if (gt.has(e))
    throw vn(Hs); return r.facade = e, gt.set(e, r), r; }, Wt = function (e) { return gt.get(e) || {}; }, vr = function (e) { return gt.has(e); }) : (Bt = Sc("state"), xc[Bt] = !0, hr = function (e, r) { if (yn(e, Bt))
    throw vn(Hs); return r.facade = e, Ac(e, Bt, r), r; }, Wt = function (e) { return yn(e, Bt) ? e[Bt] : {}; }, vr = function (e) { return yn(e, Bt); }); var gt, Bt; Us.exports = { set: hr, get: Wt, has: vr, enforce: Tc, getterFor: Bc }; });
var En = Te(function (q0, Xs) { var Nc = Dt(), wc = ot(), Cr = Ct(), Cn = yt(), _c = Ls().CONFIGURABLE, Pc = dn(), zs = Js(), Ic = zs.enforce, kc = zs.get, Er = Object.defineProperty, Lc = Cn && !Nc(function () { return Er(function () { }, "length", { value: 8 }).length !== 8; }), Oc = String(String).split("String"), jc = Xs.exports = function (e, r, t) { String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!Cr(e, "name") || _c && e.name !== r) && (Cn ? Er(e, "name", { value: r, configurable: !0 }) : e.name = r), Lc && t && Cr(t, "arity") && e.length !== t.arity && Er(e, "length", { value: t.arity }); try {
    t && Cr(t, "constructor") && t.constructor ? Cn && Er(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
}
catch (_b) { } var s = Ic(e); return Cr(s, "source") || (s.source = Oc.join(typeof r == "string" ? r : "")), e; }; Function.prototype.toString = jc(function () { return wc(this) && kc(this).source || Pc(this); }, "toString"); });
var Ys = Te(function (M0, Ks) { var qc = ot(), Mc = It(), Rc = En(), $c = Dr(); Ks.exports = function (e, r, t, s) { s || (s = {}); var a = s.enumerable, n = s.name !== void 0 ? s.name : r; if (qc(t) && Rc(t, n, s), s.global)
    a ? e[r] = t : $c(r, t);
else {
    try {
        s.unsafe ? e[r] && (a = !0) : delete e[r];
    }
    catch (_b) { }
    a ? e[r] = t : Mc.f(e, r, { value: t, enumerable: !1, configurable: !s.nonConfigurable, writable: !s.nonWritable });
} return e; }; });
var Zs = Te(function (R0, Qs) { var Vc = Math.ceil, Wc = Math.floor; Qs.exports = Math.trunc || function (r) { var t = +r; return (t > 0 ? Wc : Vc)(t); }; });
var Fr = Te(function ($0, ei) { var Hc = Zs(); ei.exports = function (e) { var r = +e; return r !== r || r === 0 ? 0 : Hc(r); }; });
var ri = Te(function (V0, ti) { var Gc = Fr(), Uc = Math.max, Jc = Math.min; ti.exports = function (e, r) { var t = Gc(e); return t < 0 ? Uc(t + r, 0) : Jc(t, r); }; });
var ui = Te(function (W0, ni) { var zc = Fr(), Xc = Math.min; ni.exports = function (e) { return e > 0 ? Xc(zc(e), 9007199254740991) : 0; }; });
var kt = Te(function (H0, si) { var Kc = ui(); si.exports = function (e) { return Kc(e.length); }; });
var oi = Te(function (G0, ai) { var Yc = lr(), Qc = ri(), Zc = kt(), ii = function (e) { return function (r, t, s) { var a = Yc(r), n = Zc(a), u = Qc(s, n), i; if (e && t != t) {
    for (; n > u;)
        if (i = a[u++], i != i)
            return !0;
}
else
    for (; n > u; u++)
        if ((e || u in a) && a[u] === t)
            return e || u || 0; return !e && -1; }; }; ai.exports = { includes: ii(!0), indexOf: ii(!1) }; });
var pi = Te(function (U0, ci) { var ep = mt(), Fn = Ct(), tp = lr(), rp = oi().indexOf, np = gn(), li = ep([].push); ci.exports = function (e, r) { var t = tp(e), s = 0, a = [], n; for (n in t)
    !Fn(np, n) && Fn(t, n) && li(a, n); for (; r.length > s;)
    Fn(t, n = r[s++]) && (~rp(a, n) || li(a, n)); return a; }; });
var Di = Te(function (J0, fi) { fi.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]; });
var di = Te(function (mi) { var up = pi(), sp = Di(), ip = sp.concat("length", "prototype"); mi.f = Object.getOwnPropertyNames || function (r) { return up(r, ip); }; });
var yi = Te(function (gi) { gi.f = Object.getOwnPropertySymbols; });
var vi = Te(function (K0, hi) { var ap = $t(), op = mt(), lp = di(), cp = yi(), pp = Tt(), fp = op([].concat); hi.exports = ap("Reflect", "ownKeys") || function (r) { var t = lp.f(pp(r)), s = cp.f; return s ? fp(t, s(r)) : t; }; });
var Fi = Te(function (Y0, Ei) { var Ci = Ct(), Dp = vi(), mp = sn(), dp = It(); Ei.exports = function (e, r, t) { for (var s = Dp(r), a = dp.f, n = mp.f, u = 0; u < s.length; u++) {
    var i = s[u];
    !Ci(e, i) && !(t && Ci(t, i)) && a(e, i, n(r, i));
} }; });
var Si = Te(function (Q0, Ai) { var gp = Dt(), yp = ot(), hp = /#|\.prototype\./, Ht = function (e, r) { var t = Cp[vp(e)]; return t == Fp ? !0 : t == Ep ? !1 : yp(r) ? gp(r) : !!r; }, vp = Ht.normalize = function (e) { return String(e).replace(hp, ".").toLowerCase(); }, Cp = Ht.data = {}, Ep = Ht.NATIVE = "N", Fp = Ht.POLYFILL = "P"; Ai.exports = Ht; });
var Gt = Te(function (Z0, xi) { var An = pt(), Ap = sn().f, Sp = pn(), xp = Ys(), bp = Dr(), Tp = Fi(), Bp = Si(); xi.exports = function (e, r) { var t = e.target, s = e.global, a = e.stat, n, u, i, l, p, d; if (s ? u = An : a ? u = An[t] || bp(t, {}) : u = (An[t] || {}).prototype, u)
    for (i in r) {
        if (p = r[i], e.dontCallGetSet ? (d = Ap(u, i), l = d && d.value) : l = u[i], n = Bp(s ? i : t + (a ? "." : "#") + i, e.forced), !n && l !== void 0) {
            if (typeof p == typeof l)
                continue;
            Tp(p, l);
        }
        (e.sham || l && l.sham) && Sp(p, "sham", !0), xp(u, i, p, e);
    } }; });
var Sn = Te(function (ey, bi) { var Np = Rt(); bi.exports = Array.isArray || function (r) { return Np(r) == "Array"; }; });
var Bi = Te(function (ty, Ti) { var wp = TypeError, _p = 9007199254740991; Ti.exports = function (e) { if (e > _p)
    throw wp("Maximum allowed index exceeded"); return e; }; });
var wi = Te(function (ry, Ni) { var Pp = Rt(), Ip = mt(); Ni.exports = function (e) { if (Pp(e) === "Function")
    return Ip(e); }; });
var xn = Te(function (ny, Pi) { var _i = wi(), kp = Vt(), Lp = sr(), Op = _i(_i.bind); Pi.exports = function (e, r) { return kp(e), r === void 0 ? e : Lp ? Op(e, r) : function () { return e.apply(r, arguments); }; }; });
var bn = Te(function (uy, ki) {
    "use strict";
    var jp = Sn(), qp = kt(), Mp = Bi(), Rp = xn(), Ii = function (e, r, t, s, a, n, u, i) { for (var l = a, p = 0, d = u ? Rp(u, i) : !1, y, g; p < s;)
        p in t && (y = d ? d(t[p], p, r) : t[p], n > 0 && jp(y) ? (g = qp(y), l = Ii(e, r, y, g, l, n - 1) - 1) : (Mp(l + 1), e[l] = y), l++), p++; return l; };
    ki.exports = Ii;
});
var ji = Te(function (sy, Oi) { var $p = bt(), Vp = $p("toStringTag"), Li = {}; Li[Vp] = "z"; Oi.exports = String(Li) === "[object z]"; });
var Tn = Te(function (iy, qi) { var Wp = ji(), Hp = ot(), Ar = Rt(), Gp = bt(), Up = Gp("toStringTag"), Jp = Object, zp = Ar(function () { return arguments; }()) == "Arguments", Xp = function (e, r) { try {
    return e[r];
}
catch (_b) { } }; qi.exports = Wp ? Ar : function (e) { var r, t, s; return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Xp(r = Jp(e), Up)) == "string" ? t : zp ? Ar(r) : (s = Ar(r)) == "Object" && Hp(r.callee) ? "Arguments" : s; }; });
var Hi = Te(function (ay, Wi) { var Kp = mt(), Yp = Dt(), Mi = ot(), Qp = Tn(), Zp = $t(), ef = dn(), Ri = function () { }, tf = [], $i = Zp("Reflect", "construct"), Bn = /^\s*(?:class|function)\b/, rf = Kp(Bn.exec), nf = !Bn.exec(Ri), Ut = function (r) { if (!Mi(r))
    return !1; try {
    return $i(Ri, tf, r), !0;
}
catch (_b) {
    return !1;
} }, Vi = function (r) { if (!Mi(r))
    return !1; switch (Qp(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction": return !1;
} try {
    return nf || !!rf(Bn, ef(r));
}
catch (_b) {
    return !0;
} }; Vi.sham = !0; Wi.exports = !$i || Yp(function () { var e; return Ut(Ut.call) || !Ut(Object) || !Ut(function () { e = !0; }) || e; }) ? Vi : Ut; });
var zi = Te(function (oy, Ji) { var Gi = Sn(), uf = Hi(), sf = St(), af = bt(), of = af("species"), Ui = Array; Ji.exports = function (e) { var r; return Gi(e) && (r = e.constructor, uf(r) && (r === Ui || Gi(r.prototype)) ? r = void 0 : sf(r) && (r = r[of], r === null && (r = void 0))), r === void 0 ? Ui : r; }; });
var Nn = Te(function (ly, Xi) { var lf = zi(); Xi.exports = function (e, r) { return new (lf(e))(r === 0 ? 0 : r); }; });
var wn = Te(function (cy, Ki) { Ki.exports = {}; });
var Qi = Te(function (py, Yi) { var gf = bt(), yf = wn(), hf = gf("iterator"), vf = Array.prototype; Yi.exports = function (e) { return e !== void 0 && (yf.Array === e || vf[hf] === e); }; });
var _n = Te(function (fy, ea) { var Cf = Tn(), Zi = fr(), Ef = or(), Ff = wn(), Af = bt(), Sf = Af("iterator"); ea.exports = function (e) { if (!Ef(e))
    return Zi(e, Sf) || Zi(e, "@@iterator") || Ff[Cf(e)]; }; });
var ra = Te(function (Dy, ta) { var xf = At(), bf = Vt(), Tf = Tt(), Bf = pr(), Nf = _n(), wf = TypeError; ta.exports = function (e, r) { var t = arguments.length < 2 ? Nf(e) : r; if (bf(t))
    return Tf(xf(t, e)); throw wf(Bf(e) + " is not iterable"); }; });
var sa = Te(function (my, ua) { var _f = At(), na = Tt(), Pf = fr(); ua.exports = function (e, r, t) { var s, a; na(e); try {
    if (s = Pf(e, "return"), !s) {
        if (r === "throw")
            throw t;
        return t;
    }
    s = _f(s, e);
}
catch (n) {
    a = !0, s = n;
} if (r === "throw")
    throw t; if (a)
    throw s; return na(s), t; }; });
var ca = Te(function (dy, la) { var If = xn(), kf = At(), Lf = Tt(), Of = pr(), jf = Qi(), qf = kt(), ia = Jr(), Mf = ra(), Rf = _n(), aa = sa(), $f = TypeError, Sr = function (e, r) { this.stopped = e, this.result = r; }, oa = Sr.prototype; la.exports = function (e, r, t) { var s = t && t.that, a = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_RECORD), u = !!(t && t.IS_ITERATOR), i = !!(t && t.INTERRUPTED), l = If(r, s), p, d, y, g, c, f, E, _ = function (F) { return p && aa(p, "normal", F), new Sr(!0, F); }, w = function (F) { return a ? (Lf(F), i ? l(F[0], F[1], _) : l(F[0], F[1])) : i ? l(F, _) : l(F); }; if (n)
    p = e.iterator;
else if (u)
    p = e;
else {
    if (d = Rf(e), !d)
        throw $f(Of(e) + " is not iterable");
    if (jf(d)) {
        for (y = 0, g = qf(e); g > y; y++)
            if (c = w(e[y]), c && ia(oa, c))
                return c;
        return new Sr(!1);
    }
    p = Mf(e, d);
} for (f = n ? e.next : p.next; !(E = kf(f, p)).done;) {
    try {
        c = w(E.value);
    }
    catch (F) {
        aa(p, "throw", F);
    }
    if (typeof c == "object" && c && ia(oa, c))
        return c;
} return new Sr(!1); }; });
var fa = Te(function (gy, pa) {
    "use strict";
    var Vf = gr(), Wf = It(), Hf = ar();
    pa.exports = function (e, r, t) { var s = Vf(r); s in e ? Wf.f(e, s, Hf(0, t)) : e[s] = t; };
});
var da = Te(function (yy, ma) { var Da = En(), zf = It(); ma.exports = function (e, r, t) { return t.get && Da(t.get, r, { getter: !0 }), t.set && Da(t.set, r, { setter: !0 }), zf.f(e, r, t); }; });
var ya = Te(function (hy, ga) {
    "use strict";
    var Xf = Tt();
    ga.exports = function () { var e = Xf(this), r = ""; return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r; };
});
var Ca = Te(function () { var rD = Gt(), Pn = pt(); rD({ global: !0, forced: Pn.globalThis !== Pn }, { globalThis: Pn }); });
var cf = Gt(), pf = bn(), ff = Vt(), Df = dr(), mf = kt(), df = Nn();
cf({ target: "Array", proto: !0 }, { flatMap: function (r) { var t = Df(this), s = mf(t), a; return ff(r), a = df(t, 0), a.length = pf(a, t, t, s, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), a; } });
var Gf = Gt(), Uf = ca(), Jf = fa();
Gf({ target: "Object", stat: !0 }, { fromEntries: function (r) { var t = {}; return Uf(r, function (s, a) { Jf(t, s, a); }, { AS_ENTRIES: !0 }), t; } });
var Kf = pt(), Yf = yt(), Qf = da(), Zf = ya(), eD = Dt(), ha = Kf.RegExp, va = ha.prototype, tD = Yf && eD(function () { var e = !0; try {
    ha(".", "d");
}
catch (_b) {
    e = !1;
} var r = {}, t = "", s = e ? "dgimsy" : "gimsy", a = function (l, p) { Object.defineProperty(r, l, { get: function () { return t += p, !0; } }); }, n = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" }; e && (n.hasIndices = "d"); for (var u in n)
    a(u, n[u]); var i = Object.getOwnPropertyDescriptor(va, "flags").get.call(r); return i !== s || t !== s; });
tD && Qf(va, "flags", { configurable: !0, get: Zf });
Ca();
var nD = Gt(), uD = bn(), sD = dr(), iD = kt(), aD = Fr(), oD = Nn();
nD({ target: "Array", proto: !0 }, { flat: function () { var r = arguments.length ? arguments[0] : void 0, t = sD(this), s = iD(t), a = oD(t, 0); return a.length = uD(a, t, t, s, 0, r === void 0 ? 1 : aD(r)), a; } });
var lD = ["cliName", "cliCategory", "cliDescription"], cD = ["_"], pD = ["languageId"];
function $n(e, r) { if (e == null)
    return {}; var t = fD(e, r), s, a; if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (a = 0; a < n.length; a++)
        s = n[a], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (t[s] = e[s]);
} return t; }
function fD(e, r) { if (e == null)
    return {}; var t = {}, s = Object.keys(e), a, n; for (n = 0; n < s.length; n++)
    a = s[n], !(r.indexOf(a) >= 0) && (t[a] = e[a]); return t; }
var DD = Object.create, Nr = Object.defineProperty, mD = Object.getOwnPropertyDescriptor, Vn = Object.getOwnPropertyNames, dD = Object.getPrototypeOf, gD = Object.prototype.hasOwnProperty, ht = function (e, r) { return function () { return e && (r = (0, e[Vn(e)[0]])(e = 0)), r; }; }, te = function (e, r) { return function () { return r || (0, e[Vn(e)[0]])((r = { exports: {} }).exports, r), r.exports; }; }, zt = function (e, r) { for (var t in r)
    Nr(e, t, { get: r[t], enumerable: !0 }); }, Sa = function (e, r, t, s) {
    var e_1, _b;
    if (r && typeof r == "object" || typeof r == "function") {
        var _loop_1 = function (a) {
            !gD.call(e, a) && a !== t && Nr(e, a, { get: function () { return r[a]; }, enumerable: !(s = mD(r, a)) || s.enumerable });
        };
        try {
            for (var _h = __values(Vn(r)), _j = _h.next(); !_j.done; _j = _h.next()) {
                var a = _j.value;
                _loop_1(a);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return e;
}, yD = function (e, r, t) { return (t = e != null ? DD(dD(e)) : {}, Sa(r || !e || !e.__esModule ? Nr(t, "default", { value: e, enumerable: !0 }) : t, e)); }, ft = function (e) { return Sa(Nr({}, "__esModule", { value: !0 }), e); }, Nt, ne = ht({ "<define:process>": function () { Nt = { env: {}, argv: [] }; } }), xa = te({ "package.json": function (e, r) { r.exports = { version: "2.8.8" }; } }), hD = te({ "node_modules/diff/lib/diff/base.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
        function r() { }
        r.prototype = { diff: function (n, u) { var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = i.callback; typeof i == "function" && (l = i, i = {}), this.options = i; var p = this; function d(N) { return l ? (setTimeout(function () { l(void 0, N); }, 0), !0) : N; } n = this.castInput(n), u = this.castInput(u), n = this.removeEmpty(this.tokenize(n)), u = this.removeEmpty(this.tokenize(u)); var y = u.length, g = n.length, c = 1, f = y + g, E = [{ newPos: -1, components: [] }], _ = this.extractCommon(E[0], u, n, 0); if (E[0].newPos + 1 >= y && _ + 1 >= g)
                return d([{ value: this.join(u), count: u.length }]); function w() { for (var N = -1 * c; N <= c; N += 2) {
                var x = void 0, I = E[N - 1], P = E[N + 1], $ = (P ? P.newPos : 0) - N;
                I && (E[N - 1] = void 0);
                var D = I && I.newPos + 1 < y, T = P && 0 <= $ && $ < g;
                if (!D && !T) {
                    E[N] = void 0;
                    continue;
                }
                if (!D || T && I.newPos < P.newPos ? (x = s(P), p.pushComponent(x.components, void 0, !0)) : (x = I, x.newPos++, p.pushComponent(x.components, !0, void 0)), $ = p.extractCommon(x, u, n, N), x.newPos + 1 >= y && $ + 1 >= g)
                    return d(t(p, x.components, u, n, p.useLongestToken));
                E[N] = x;
            } c++; } if (l)
                (function N() { setTimeout(function () { if (c > f)
                    return l(); w() || N(); }, 0); })();
            else
                for (; c <= f;) {
                    var F = w();
                    if (F)
                        return F;
                } }, pushComponent: function (n, u, i) { var l = n[n.length - 1]; l && l.added === u && l.removed === i ? n[n.length - 1] = { count: l.count + 1, added: u, removed: i } : n.push({ count: 1, added: u, removed: i }); }, extractCommon: function (n, u, i, l) { for (var p = u.length, d = i.length, y = n.newPos, g = y - l, c = 0; y + 1 < p && g + 1 < d && this.equals(u[y + 1], i[g + 1]);)
                y++, g++, c++; return c && n.components.push({ count: c }), n.newPos = y, g; }, equals: function (n, u) { return this.options.comparator ? this.options.comparator(n, u) : n === u || this.options.ignoreCase && n.toLowerCase() === u.toLowerCase(); }, removeEmpty: function (n) { for (var u = [], i = 0; i < n.length; i++)
                n[i] && u.push(n[i]); return u; }, castInput: function (n) { return n; }, tokenize: function (n) { return n.split(""); }, join: function (n) { return n.join(""); } };
        function t(a, n, u, i, l) { for (var p = 0, d = n.length, y = 0, g = 0; p < d; p++) {
            var c = n[p];
            if (c.removed) {
                if (c.value = a.join(i.slice(g, g + c.count)), g += c.count, p && n[p - 1].added) {
                    var E = n[p - 1];
                    n[p - 1] = n[p], n[p] = E;
                }
            }
            else {
                if (!c.added && l) {
                    var f = u.slice(y, y + c.count);
                    f = f.map(function (w, F) { var N = i[g + F]; return N.length > w.length ? N : w; }), c.value = a.join(f);
                }
                else
                    c.value = a.join(u.slice(y, y + c.count));
                y += c.count, c.added || (g += c.count);
            }
        } var _ = n[d - 1]; return d > 1 && typeof _.value == "string" && (_.added || _.removed) && a.equals("", _.value) && (n[d - 2].value += _.value, n.pop()), n; }
        function s(a) { return { newPos: a.newPos, components: a.components.slice(0) }; }
    } }), vD = te({ "node_modules/diff/lib/diff/array.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.diffArrays = a, e.arrayDiff = void 0;
        var r = t(hD());
        function t(n) { return n && n.__esModule ? n : { default: n }; }
        var s = new r.default;
        e.arrayDiff = s, s.tokenize = function (n) { return n.slice(); }, s.join = s.removeEmpty = function (n) { return n; };
        function a(n, u, i) { return s.diff(n, u, i); }
    } }), Wn = te({ "src/document/doc-builders.js": function (e, r) {
        "use strict";
        ne();
        function t(C) { return { type: "concat", parts: C }; }
        function s(C) { return { type: "indent", contents: C }; }
        function a(C, o) { return { type: "align", contents: o, n: C }; }
        function n(C) { var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; return { type: "group", id: o.id, contents: C, break: Boolean(o.shouldBreak), expandedStates: o.expandedStates }; }
        function u(C) { return a(Number.NEGATIVE_INFINITY, C); }
        function i(C) { return a({ type: "root" }, C); }
        function l(C) { return a(-1, C); }
        function p(C, o) { return n(C[0], Object.assign(Object.assign({}, o), {}, { expandedStates: C })); }
        function d(C) { return { type: "fill", parts: C }; }
        function y(C, o) { var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return { type: "if-break", breakContents: C, flatContents: o, groupId: h.groupId }; }
        function g(C, o) { return { type: "indent-if-break", contents: C, groupId: o.groupId, negate: o.negate }; }
        function c(C) { return { type: "line-suffix", contents: C }; }
        var f = { type: "line-suffix-boundary" }, E = { type: "break-parent" }, _ = { type: "trim" }, w = { type: "line", hard: !0 }, F = { type: "line", hard: !0, literal: !0 }, N = { type: "line" }, x = { type: "line", soft: !0 }, I = t([w, E]), P = t([F, E]), $ = { type: "cursor", placeholder: Symbol("cursor") };
        function D(C, o) { var h = []; for (var v = 0; v < o.length; v++)
            v !== 0 && h.push(C), h.push(o[v]); return t(h); }
        function T(C, o, h) { var v = C; if (o > 0) {
            for (var S = 0; S < Math.floor(o / h); ++S)
                v = s(v);
            v = a(o % h, v), v = a(Number.NEGATIVE_INFINITY, v);
        } return v; }
        function m(C, o) { return { type: "label", label: C, contents: o }; }
        r.exports = { concat: t, join: D, line: N, softline: x, hardline: I, literalline: P, group: n, conditionalGroup: p, fill: d, lineSuffix: c, lineSuffixBoundary: f, cursor: $, breakParent: E, ifBreak: y, trim: _, indent: s, indentIfBreak: g, align: a, addAlignmentToDoc: T, markAsRoot: i, dedentToRoot: u, dedent: l, hardlineWithoutBreakParent: w, literallineWithoutBreakParent: F, label: m };
    } }), Hn = te({ "src/common/end-of-line.js": function (e, r) {
        "use strict";
        ne();
        function t(u) {
            var i = u.indexOf("\r");
            return i >= 0 ? u.charAt(i + 1) === "\n" ? "crlf" : "cr" : "lf";
        }
        function s(u) {
            switch (u) {
                case "cr": return "\r";
                case "crlf": return "\r\n";
                default: return "\n";
            }
        }
        function a(u, i) {
            var l;
            switch (i) {
                case "\n":
                    l = /\n/g;
                    break;
                case "\r":
                    l = /\r/g;
                    break;
                case "\r\n":
                    l = /\r\n/g;
                    break;
                default: throw new Error("Unexpected \"eol\" ".concat(JSON.stringify(i), "."));
            }
            var p = u.match(l);
            return p ? p.length : 0;
        }
        function n(u) {
            return u.replace(/\r\n?/g, "\n");
        }
        r.exports = { guessEndOfLine: t, convertEndOfLineToChars: s, countEndOfLineChars: a, normalizeEndOfLine: n };
    } }), lt = te({ "src/utils/get-last.js": function (e, r) {
        "use strict";
        ne();
        var t = function (s) { return s[s.length - 1]; };
        r.exports = t;
    } });
function CD() { var _b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).onlyFirst, e = _b === void 0 ? !1 : _b, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|"); return new RegExp(r, e ? void 0 : "g"); }
var ED = ht({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js": function () { ne(); } });
function FD(e) { if (typeof e != "string")
    throw new TypeError("Expected a `string`, got `".concat(typeof e, "`")); return e.replace(CD(), ""); }
var AD = ht({ "node_modules/strip-ansi/index.js": function () { ne(), ED(); } });
function SD(e) { return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : !1; }
var xD = ht({ "node_modules/is-fullwidth-code-point/index.js": function () { ne(); } }), bD = te({ "node_modules/emoji-regex/index.js": function (e, r) {
        "use strict";
        ne(), r.exports = function () { return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g; };
    } }), ba = {};
zt(ba, { default: function () { return TD; } });
function TD(e) { if (typeof e != "string" || e.length === 0 || (e = FD(e), e.length === 0))
    return 0; e = e.replace((0, Ta.default)(), "  "); var r = 0; for (var t = 0; t < e.length; t++) {
    var s = e.codePointAt(t);
    s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && t++, r += SD(s) ? 2 : 1);
} return r; }
var Ta, BD = ht({ "node_modules/string-width/index.js": function () { ne(), AD(), xD(), Ta = yD(bD()); } }), Ba = te({ "src/utils/get-string-width.js": function (e, r) {
        "use strict";
        ne();
        var t = (BD(), ft(ba)).default, s = /[^\x20-\x7F]/;
        function a(n) { return n ? s.test(n) ? t(n) : n.length : 0; }
        r.exports = a;
    } }), Xt = te({ "src/document/doc-utils.js": function (e, r) {
        "use strict";
        ne();
        var t = lt(), _b = Wn(), s = _b.literalline, a = _b.join, n = function (o) { return Array.isArray(o) || o && o.type === "concat"; }, u = function (o) { if (Array.isArray(o))
            return o; if (o.type !== "concat" && o.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`."); return o.parts; }, i = {};
        function l(o, h, v, S) { var b = [o]; for (; b.length > 0;) {
            var B = b.pop();
            if (B === i) {
                v(b.pop());
                continue;
            }
            if (v && b.push(B, i), !h || h(B) !== !1)
                if (n(B) || B.type === "fill") {
                    var k = u(B);
                    for (var M = k.length, R = M - 1; R >= 0; --R)
                        b.push(k[R]);
                }
                else if (B.type === "if-break")
                    B.flatContents && b.push(B.flatContents), B.breakContents && b.push(B.breakContents);
                else if (B.type === "group" && B.expandedStates)
                    if (S)
                        for (var k = B.expandedStates.length, M = k - 1; M >= 0; --M)
                            b.push(B.expandedStates[M]);
                    else
                        b.push(B.contents);
                else
                    B.contents && b.push(B.contents);
        } }
        function p(o, h) { var v = new Map; return S(o); function S(B) { if (v.has(B))
            return v.get(B); var k = b(B); return v.set(B, k), k; } function b(B) { if (Array.isArray(B))
            return h(B.map(S)); if (B.type === "concat" || B.type === "fill") {
            var k = B.parts.map(S);
            return h(Object.assign(Object.assign({}, B), {}, { parts: k }));
        } if (B.type === "if-break") {
            var k = B.breakContents && S(B.breakContents), M = B.flatContents && S(B.flatContents);
            return h(Object.assign(Object.assign({}, B), {}, { breakContents: k, flatContents: M }));
        } if (B.type === "group" && B.expandedStates) {
            var k = B.expandedStates.map(S), M = k[0];
            return h(Object.assign(Object.assign({}, B), {}, { contents: M, expandedStates: k }));
        } if (B.contents) {
            var k = S(B.contents);
            return h(Object.assign(Object.assign({}, B), {}, { contents: k }));
        } return h(B); } }
        function d(o, h, v) { var S = v, b = !1; function B(k) { var M = h(k); if (M !== void 0 && (b = !0, S = M), b)
            return !1; } return l(o, B), S; }
        function y(o) { if (o.type === "group" && o.break || o.type === "line" && o.hard || o.type === "break-parent")
            return !0; }
        function g(o) { return d(o, y, !1); }
        function c(o) { if (o.length > 0) {
            var h = t(o);
            !h.expandedStates && !h.break && (h.break = "propagated");
        } return null; }
        function f(o) { var h = new Set, v = []; function S(B) { if (B.type === "break-parent" && c(v), B.type === "group") {
            if (v.push(B), h.has(B))
                return !1;
            h.add(B);
        } } function b(B) { B.type === "group" && v.pop().break && c(v); } l(o, S, b, !0); }
        function E(o) { return o.type === "line" && !o.hard ? o.soft ? "" : " " : o.type === "if-break" ? o.flatContents || "" : o; }
        function _(o) { return p(o, E); }
        var w = function (o, h) { return o && o.type === "line" && o.hard && h && h.type === "break-parent"; };
        function F(o) { if (!o)
            return o; if (n(o) || o.type === "fill") {
            var h = u(o);
            for (; h.length > 1 && w.apply(void 0, __spreadArray([], __read(h.slice(-2)), false));)
                h.length -= 2;
            if (h.length > 0) {
                var v = F(t(h));
                h[h.length - 1] = v;
            }
            return Array.isArray(o) ? h : Object.assign(Object.assign({}, o), {}, { parts: h });
        } switch (o.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
                var h = F(o.contents);
                return Object.assign(Object.assign({}, o), {}, { contents: h });
            }
            case "if-break": {
                var h = F(o.breakContents), v = F(o.flatContents);
                return Object.assign(Object.assign({}, o), {}, { breakContents: h, flatContents: v });
            }
        } return o; }
        function N(o) { return F(I(o)); }
        function x(o) {
            var e_2, _b;
            switch (o.type) {
                case "fill":
                    if (o.parts.every(function (v) { return v === ""; }))
                        return "";
                    break;
                case "group":
                    if (!o.contents && !o.id && !o.break && !o.expandedStates)
                        return "";
                    if (o.contents.type === "group" && o.contents.id === o.id && o.contents.break === o.break && o.contents.expandedStates === o.expandedStates)
                        return o.contents;
                    break;
                case "align":
                case "indent":
                case "indent-if-break":
                case "line-suffix":
                    if (!o.contents)
                        return "";
                    break;
                case "if-break":
                    if (!o.flatContents && !o.breakContents)
                        return "";
                    break;
            }
            if (!n(o))
                return o;
            var h = [];
            try {
                for (var _h = __values(u(o)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var v = _j.value;
                    if (!v)
                        continue;
                    var _k = __read(n(v) ? u(v) : [v]), S = _k[0], b = _k.slice(1);
                    typeof S == "string" && typeof t(h) == "string" ? h[h.length - 1] += S : h.push(S), h.push.apply(h, __spreadArray([], __read(b), false));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return h.length === 0 ? "" : h.length === 1 ? h[0] : Array.isArray(o) ? h : Object.assign(Object.assign({}, o), {}, { parts: h });
        }
        function I(o) { return p(o, function (h) { return x(h); }); }
        function P(o) { var h = [], v = o.filter(Boolean); for (; v.length > 0;) {
            var S = v.shift();
            if (S) {
                if (n(S)) {
                    v.unshift.apply(v, __spreadArray([], __read(u(S)), false));
                    continue;
                }
                if (h.length > 0 && typeof t(h) == "string" && typeof S == "string") {
                    h[h.length - 1] += S;
                    continue;
                }
                h.push(S);
            }
        } return h; }
        function $(o) { return p(o, function (h) { return Array.isArray(h) ? P(h) : h.parts ? Object.assign(Object.assign({}, h), {}, { parts: P(h.parts) }) : h; }); }
        function D(o) {
            return p(o, function (h) { return typeof h == "string" && h.includes("\n") ? T(h) : h; });
        }
        function T(o) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
            return a(h, o.split("\n")).parts;
        }
        function m(o) { if (o.type === "line")
            return !0; }
        function C(o) { return d(o, m, !1); }
        r.exports = { isConcat: n, getDocParts: u, willBreak: g, traverseDoc: l, findInDoc: d, mapDoc: p, propagateBreaks: f, removeLines: _, stripTrailingHardline: N, normalizeParts: P, normalizeDoc: $, cleanDoc: I, replaceTextEndOfLine: T, replaceEndOfLine: D, canBreak: C };
    } }), ND = te({ "src/document/doc-printer.js": function (e, r) {
        "use strict";
        ne();
        var t = Hn().convertEndOfLineToChars, s = lt(), a = Ba(), _b = Wn(), n = _b.fill, u = _b.cursor, i = _b.indent, _h = Xt(), l = _h.isConcat, p = _h.getDocParts, d, y = 1, g = 2;
        function c() { return { value: "", length: 0, queue: [] }; }
        function f(x, I) { return _(x, { type: "indent" }, I); }
        function E(x, I, P) { return I === Number.NEGATIVE_INFINITY ? x.root || c() : I < 0 ? _(x, { type: "dedent" }, P) : I ? I.type === "root" ? Object.assign(Object.assign({}, x), {}, { root: x }) : _(x, { type: typeof I == "string" ? "stringAlign" : "numberAlign", n: I }, P) : x; }
        function _(x, I, P) {
            var e_3, _b;
            var $ = I.type === "dedent" ? x.queue.slice(0, -1) : __spreadArray(__spreadArray([], __read(x.queue), false), [I], false), D = "", T = 0, m = 0, C = 0;
            try {
                for (var $_1 = __values($), $_1_1 = $_1.next(); !$_1_1.done; $_1_1 = $_1.next()) {
                    var k = $_1_1.value;
                    switch (k.type) {
                        case "indent":
                            v(), P.useTabs ? o(1) : h(P.tabWidth);
                            break;
                        case "stringAlign":
                            v(), D += k.n, T += k.n.length;
                            break;
                        case "numberAlign":
                            m += 1, C += k.n;
                            break;
                        default: throw new Error("Unexpected type '".concat(k.type, "'"));
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if ($_1_1 && !$_1_1.done && (_b = $_1.return)) _b.call($_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return b(), Object.assign(Object.assign({}, x), {}, { value: D, length: T, queue: $ });
            function o(k) { D += "	".repeat(k), T += P.tabWidth * k; }
            function h(k) { D += " ".repeat(k), T += k; }
            function v() { P.useTabs ? S() : b(); }
            function S() { m > 0 && o(m), B(); }
            function b() { C > 0 && h(C), B(); }
            function B() { m = 0, C = 0; }
        }
        function w(x) { if (x.length === 0)
            return 0; var I = 0; for (; x.length > 0 && typeof s(x) == "string" && /^[\t ]*$/.test(s(x));)
            I += x.pop().length; if (x.length > 0 && typeof s(x) == "string") {
            var P = s(x).replace(/[\t ]*$/, "");
            I += s(x).length - P.length, x[x.length - 1] = P;
        } return I; }
        function F(x, I, P, $, D) { var T = I.length, m = [x], C = []; for (; P >= 0;) {
            if (m.length === 0) {
                if (T === 0)
                    return !0;
                m.push(I[--T]);
                continue;
            }
            var _b = m.pop(), o = _b.mode, h = _b.doc;
            if (typeof h == "string")
                C.push(h), P -= a(h);
            else if (l(h) || h.type === "fill") {
                var v = p(h);
                for (var S = v.length - 1; S >= 0; S--)
                    m.push({ mode: o, doc: v[S] });
            }
            else
                switch (h.type) {
                    case "indent":
                    case "align":
                    case "indent-if-break":
                    case "label":
                        m.push({ mode: o, doc: h.contents });
                        break;
                    case "trim":
                        P += w(C);
                        break;
                    case "group": {
                        if (D && h.break)
                            return !1;
                        var v = h.break ? y : o, S = h.expandedStates && v === y ? s(h.expandedStates) : h.contents;
                        m.push({ mode: v, doc: S });
                        break;
                    }
                    case "if-break": {
                        var S = (h.groupId ? d[h.groupId] || g : o) === y ? h.breakContents : h.flatContents;
                        S && m.push({ mode: o, doc: S });
                        break;
                    }
                    case "line":
                        if (o === y || h.hard)
                            return !0;
                        h.soft || (C.push(" "), P--);
                        break;
                    case "line-suffix":
                        $ = !0;
                        break;
                    case "line-suffix-boundary":
                        if ($)
                            return !1;
                        break;
                }
        } return !1; }
        function N(x, I) {
            d = {};
            var P = I.printWidth, $ = t(I.endOfLine), D = 0, T = [{ ind: c(), mode: y, doc: x }], m = [], C = !1, o = [];
            for (; T.length > 0;) {
                var _b = T.pop(), v = _b.ind, S = _b.mode, b = _b.doc;
                if (typeof b == "string") {
                    var B = $ !== "\n" ? b.replace(/\n/g, $) : b;
                    m.push(B), D += a(B);
                }
                else if (l(b)) {
                    var B = p(b);
                    for (var k = B.length - 1; k >= 0; k--)
                        T.push({ ind: v, mode: S, doc: B[k] });
                }
                else
                    switch (b.type) {
                        case "cursor":
                            m.push(u.placeholder);
                            break;
                        case "indent":
                            T.push({ ind: f(v, I), mode: S, doc: b.contents });
                            break;
                        case "align":
                            T.push({ ind: E(v, b.n, I), mode: S, doc: b.contents });
                            break;
                        case "trim":
                            D -= w(m);
                            break;
                        case "group":
                            switch (S) {
                                case g: if (!C) {
                                    T.push({ ind: v, mode: b.break ? y : g, doc: b.contents });
                                    break;
                                }
                                case y: {
                                    C = !1;
                                    var B = { ind: v, mode: g, doc: b.contents }, k = P - D, M = o.length > 0;
                                    if (!b.break && F(B, T, k, M))
                                        T.push(B);
                                    else if (b.expandedStates) {
                                        var R = s(b.expandedStates);
                                        if (b.break) {
                                            T.push({ ind: v, mode: y, doc: R });
                                            break;
                                        }
                                        else
                                            for (var q = 1; q < b.expandedStates.length + 1; q++)
                                                if (q >= b.expandedStates.length) {
                                                    T.push({ ind: v, mode: y, doc: R });
                                                    break;
                                                }
                                                else {
                                                    var J = b.expandedStates[q], L = { ind: v, mode: g, doc: J };
                                                    if (F(L, T, k, M)) {
                                                        T.push(L);
                                                        break;
                                                    }
                                                }
                                    }
                                    else
                                        T.push({ ind: v, mode: y, doc: b.contents });
                                    break;
                                }
                            }
                            b.id && (d[b.id] = s(T).mode);
                            break;
                        case "fill": {
                            var B = P - D, k = b.parts;
                            if (k.length === 0)
                                break;
                            var _h = __read(k, 2), M = _h[0], R = _h[1], q = { ind: v, mode: g, doc: M }, J = { ind: v, mode: y, doc: M }, L = F(q, [], B, o.length > 0, !0);
                            if (k.length === 1) {
                                L ? T.push(q) : T.push(J);
                                break;
                            }
                            var Q = { ind: v, mode: g, doc: R }, V = { ind: v, mode: y, doc: R };
                            if (k.length === 2) {
                                L ? T.push(Q, q) : T.push(V, J);
                                break;
                            }
                            k.splice(0, 2);
                            var j = { ind: v, mode: S, doc: n(k) }, Y = k[0];
                            F({ ind: v, mode: g, doc: [M, R, Y] }, [], B, o.length > 0, !0) ? T.push(j, Q, q) : L ? T.push(j, V, q) : T.push(j, V, J);
                            break;
                        }
                        case "if-break":
                        case "indent-if-break": {
                            var B = b.groupId ? d[b.groupId] : S;
                            if (B === y) {
                                var k = b.type === "if-break" ? b.breakContents : b.negate ? b.contents : i(b.contents);
                                k && T.push({ ind: v, mode: S, doc: k });
                            }
                            if (B === g) {
                                var k = b.type === "if-break" ? b.flatContents : b.negate ? i(b.contents) : b.contents;
                                k && T.push({ ind: v, mode: S, doc: k });
                            }
                            break;
                        }
                        case "line-suffix":
                            o.push({ ind: v, mode: S, doc: b.contents });
                            break;
                        case "line-suffix-boundary":
                            o.length > 0 && T.push({ ind: v, mode: S, doc: { type: "line", hard: !0 } });
                            break;
                        case "line":
                            switch (S) {
                                case g: if (b.hard)
                                    C = !0;
                                else {
                                    b.soft || (m.push(" "), D += 1);
                                    break;
                                }
                                case y:
                                    if (o.length > 0) {
                                        T.push.apply(T, __spreadArray([{ ind: v, mode: S, doc: b }], __read(o.reverse()), false)), o.length = 0;
                                        break;
                                    }
                                    b.literal ? v.root ? (m.push($, v.root.value), D = v.root.length) : (m.push($), D = 0) : (D -= w(m), m.push($ + v.value), D = v.length);
                                    break;
                            }
                            break;
                        case "label":
                            T.push({ ind: v, mode: S, doc: b.contents });
                            break;
                        default:
                    }
                T.length === 0 && o.length > 0 && (T.push.apply(T, __spreadArray([], __read(o.reverse()), false)), o.length = 0);
            }
            var h = m.indexOf(u.placeholder);
            if (h !== -1) {
                var v = m.indexOf(u.placeholder, h + 1), S = m.slice(0, h).join(""), b = m.slice(h + 1, v).join(""), B = m.slice(v + 1).join("");
                return { formatted: S + b + B, cursorNodeStart: S.length, cursorNodeText: b };
            }
            return { formatted: m.join("") };
        }
        r.exports = { printDocToString: N };
    } }), wD = te({ "src/document/doc-debug.js": function (e, r) {
        "use strict";
        ne();
        var _b = Xt(), t = _b.isConcat, s = _b.getDocParts;
        function a(u) {
            var e_4, _b;
            if (!u)
                return "";
            if (t(u)) {
                var i = [];
                try {
                    for (var _h = __values(s(u)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var l = _j.value;
                        if (t(l))
                            i.push.apply(i, __spreadArray([], __read(a(l).parts), false));
                        else {
                            var p = a(l);
                            p !== "" && i.push(p);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return { type: "concat", parts: i };
            }
            return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, { breakContents: a(u.breakContents), flatContents: a(u.flatContents) }) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents), expandedStates: u.expandedStates && u.expandedStates.map(a) }) : u.type === "fill" ? { type: "fill", parts: u.parts.map(a) } : u.contents ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents) }) : u;
        }
        function n(u) { var i = Object.create(null), l = new Set; return p(a(u)); function p(y, g, c) { if (typeof y == "string")
            return JSON.stringify(y); if (t(y)) {
            var f = s(y).map(p).filter(Boolean);
            return f.length === 1 ? f[0] : "[".concat(f.join(", "), "]");
        } if (y.type === "line") {
            var f = Array.isArray(c) && c[g + 1] && c[g + 1].type === "break-parent";
            return y.literal ? f ? "literalline" : "literallineWithoutBreakParent" : y.hard ? f ? "hardline" : "hardlineWithoutBreakParent" : y.soft ? "softline" : "line";
        } if (y.type === "break-parent")
            return Array.isArray(c) && c[g - 1] && c[g - 1].type === "line" && c[g - 1].hard ? void 0 : "breakParent"; if (y.type === "trim")
            return "trim"; if (y.type === "indent")
            return "indent(" + p(y.contents) + ")"; if (y.type === "align")
            return y.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + p(y.contents) + ")" : y.n < 0 ? "dedent(" + p(y.contents) + ")" : y.n.type === "root" ? "markAsRoot(" + p(y.contents) + ")" : "align(" + JSON.stringify(y.n) + ", " + p(y.contents) + ")"; if (y.type === "if-break")
            return "ifBreak(" + p(y.breakContents) + (y.flatContents ? ", " + p(y.flatContents) : "") + (y.groupId ? (y.flatContents ? "" : ', ""') + ", { groupId: ".concat(d(y.groupId), " }") : "") + ")"; if (y.type === "indent-if-break") {
            var f = [];
            y.negate && f.push("negate: true"), y.groupId && f.push("groupId: ".concat(d(y.groupId)));
            var E = f.length > 0 ? ", { ".concat(f.join(", "), " }") : "";
            return "indentIfBreak(".concat(p(y.contents)).concat(E, ")");
        } if (y.type === "group") {
            var f = [];
            y.break && y.break !== "propagated" && f.push("shouldBreak: true"), y.id && f.push("id: ".concat(d(y.id)));
            var E = f.length > 0 ? ", { ".concat(f.join(", "), " }") : "";
            return y.expandedStates ? "conditionalGroup([".concat(y.expandedStates.map(function (_) { return p(_); }).join(","), "]").concat(E, ")") : "group(".concat(p(y.contents)).concat(E, ")");
        } if (y.type === "fill")
            return "fill([".concat(y.parts.map(function (f) { return p(f); }).join(", "), "])"); if (y.type === "line-suffix")
            return "lineSuffix(" + p(y.contents) + ")"; if (y.type === "line-suffix-boundary")
            return "lineSuffixBoundary"; if (y.type === "label")
            return "label(".concat(JSON.stringify(y.label), ", ").concat(p(y.contents), ")"); throw new Error("Unknown doc type " + y.type); } function d(y) { if (typeof y != "symbol")
            return JSON.stringify(String(y)); if (y in i)
            return i[y]; var g = String(y).slice(7, -1) || "symbol"; for (var c = 0;; c++) {
            var f = g + (c > 0 ? " #".concat(c) : "");
            if (!l.has(f))
                return l.add(f), i[y] = "Symbol.for(".concat(JSON.stringify(f), ")");
        } } }
        r.exports = { printDocToDebug: n };
    } }), qe = te({ "src/document/index.js": function (e, r) {
        "use strict";
        ne(), r.exports = { builders: Wn(), printer: ND(), utils: Xt(), debug: wD() };
    } }), Na = {};
zt(Na, { default: function () { return _D; } });
function _D(e) { if (typeof e != "string")
    throw new TypeError("Expected a string"); return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"); }
var PD = ht({ "node_modules/escape-string-regexp/index.js": function () { ne(); } }), wa = te({ "node_modules/semver/internal/debug.js": function (e, r) { ne(); var t = typeof Nt == "object" && Nt.env && Nt.env.NODE_DEBUG && /\bsemver\b/i.test(Nt.env.NODE_DEBUG) ? function () { for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++)
        a[n] = arguments[n]; return console.error.apply(console, __spreadArray(["SEMVER"], __read(a), false)); } : function () { }; r.exports = t; } }), _a = te({ "node_modules/semver/internal/constants.js": function (e, r) { ne(); var t = "2.0.0", s = 256, a = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16; r.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: s, MAX_SAFE_INTEGER: a, MAX_SAFE_COMPONENT_LENGTH: n }; } }), ID = te({ "node_modules/semver/internal/re.js": function (e, r) { ne(); var t = _a().MAX_SAFE_COMPONENT_LENGTH, s = wa(); e = r.exports = {}; var a = e.re = [], n = e.src = [], u = e.t = {}, i = 0, l = function (p, d, y) { var g = i++; s(p, g, d), u[p] = g, n[g] = d, a[g] = new RegExp(d, y ? "g" : void 0); }; l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", "(".concat(n[u.NUMERICIDENTIFIER], ")\\.(").concat(n[u.NUMERICIDENTIFIER], ")\\.(").concat(n[u.NUMERICIDENTIFIER], ")")), l("MAINVERSIONLOOSE", "(".concat(n[u.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(n[u.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(n[u.NUMERICIDENTIFIERLOOSE], ")")), l("PRERELEASEIDENTIFIER", "(?:".concat(n[u.NUMERICIDENTIFIER], "|").concat(n[u.NONNUMERICIDENTIFIER], ")")), l("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(n[u.NUMERICIDENTIFIERLOOSE], "|").concat(n[u.NONNUMERICIDENTIFIER], ")")), l("PRERELEASE", "(?:-(".concat(n[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(n[u.PRERELEASEIDENTIFIER], ")*))")), l("PRERELEASELOOSE", "(?:-?(".concat(n[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(n[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", "(?:\\+(".concat(n[u.BUILDIDENTIFIER], "(?:\\.").concat(n[u.BUILDIDENTIFIER], ")*))")), l("FULLPLAIN", "v?".concat(n[u.MAINVERSION]).concat(n[u.PRERELEASE], "?").concat(n[u.BUILD], "?")), l("FULL", "^".concat(n[u.FULLPLAIN], "$")), l("LOOSEPLAIN", "[v=\\s]*".concat(n[u.MAINVERSIONLOOSE]).concat(n[u.PRERELEASELOOSE], "?").concat(n[u.BUILD], "?")), l("LOOSE", "^".concat(n[u.LOOSEPLAIN], "$")), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", "".concat(n[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), l("XRANGEIDENTIFIER", "".concat(n[u.NUMERICIDENTIFIER], "|x|X|\\*")), l("XRANGEPLAIN", "[v=\\s]*(".concat(n[u.XRANGEIDENTIFIER], ")(?:\\.(").concat(n[u.XRANGEIDENTIFIER], ")(?:\\.(").concat(n[u.XRANGEIDENTIFIER], ")(?:").concat(n[u.PRERELEASE], ")?").concat(n[u.BUILD], "?)?)?")), l("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(n[u.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(n[u.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(n[u.XRANGEIDENTIFIERLOOSE], ")(?:").concat(n[u.PRERELEASELOOSE], ")?").concat(n[u.BUILD], "?)?)?")), l("XRANGE", "^".concat(n[u.GTLT], "\\s*").concat(n[u.XRANGEPLAIN], "$")), l("XRANGELOOSE", "^".concat(n[u.GTLT], "\\s*").concat(n[u.XRANGEPLAINLOOSE], "$")), l("COERCE", "(^|[^\\d])(\\d{1,".concat(t, "})(?:\\.(\\d{1,").concat(t, "}))?(?:\\.(\\d{1,").concat(t, "}))?(?:$|[^\\d])")), l("COERCERTL", n[u.COERCE], !0), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", "(\\s*)".concat(n[u.LONETILDE], "\\s+"), !0), e.tildeTrimReplace = "$1~", l("TILDE", "^".concat(n[u.LONETILDE]).concat(n[u.XRANGEPLAIN], "$")), l("TILDELOOSE", "^".concat(n[u.LONETILDE]).concat(n[u.XRANGEPLAINLOOSE], "$")), l("LONECARET", "(?:\\^)"), l("CARETTRIM", "(\\s*)".concat(n[u.LONECARET], "\\s+"), !0), e.caretTrimReplace = "$1^", l("CARET", "^".concat(n[u.LONECARET]).concat(n[u.XRANGEPLAIN], "$")), l("CARETLOOSE", "^".concat(n[u.LONECARET]).concat(n[u.XRANGEPLAINLOOSE], "$")), l("COMPARATORLOOSE", "^".concat(n[u.GTLT], "\\s*(").concat(n[u.LOOSEPLAIN], ")$|^$")), l("COMPARATOR", "^".concat(n[u.GTLT], "\\s*(").concat(n[u.FULLPLAIN], ")$|^$")), l("COMPARATORTRIM", "(\\s*)".concat(n[u.GTLT], "\\s*(").concat(n[u.LOOSEPLAIN], "|").concat(n[u.XRANGEPLAIN], ")"), !0), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", "^\\s*(".concat(n[u.XRANGEPLAIN], ")\\s+-\\s+(").concat(n[u.XRANGEPLAIN], ")\\s*$")), l("HYPHENRANGELOOSE", "^\\s*(".concat(n[u.XRANGEPLAINLOOSE], ")\\s+-\\s+(").concat(n[u.XRANGEPLAINLOOSE], ")\\s*$")), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$"); } }), kD = te({ "node_modules/semver/internal/parse-options.js": function (e, r) { ne(); var t = ["includePrerelease", "loose", "rtl"], s = function (a) { return a ? typeof a != "object" ? { loose: !0 } : t.filter(function (n) { return a[n]; }).reduce(function (n, u) { return (n[u] = !0, n); }, {}) : {}; }; r.exports = s; } }), LD = te({ "node_modules/semver/internal/identifiers.js": function (e, r) { ne(); var t = /^[0-9]+$/, s = function (n, u) { var i = t.test(n), l = t.test(u); return i && l && (n = +n, u = +u), n === u ? 0 : i && !l ? -1 : l && !i ? 1 : n < u ? -1 : 1; }, a = function (n, u) { return s(u, n); }; r.exports = { compareIdentifiers: s, rcompareIdentifiers: a }; } }), OD = te({ "node_modules/semver/classes/semver.js": function (e, r) { ne(); var t = wa(), _b = _a(), s = _b.MAX_LENGTH, a = _b.MAX_SAFE_INTEGER, _h = ID(), n = _h.re, u = _h.t, i = kD(), l = LD().compareIdentifiers, p = /** @class */ (function () {
        function p(d, y) {
            if (y = i(y), d instanceof p) {
                if (d.loose === !!y.loose && d.includePrerelease === !!y.includePrerelease)
                    return d;
                d = d.version;
            }
            else if (typeof d != "string")
                throw new TypeError("Invalid Version: ".concat(d));
            if (d.length > s)
                throw new TypeError("version is longer than ".concat(s, " characters"));
            t("SemVer", d, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
            var g = d.trim().match(y.loose ? n[u.LOOSE] : n[u.FULL]);
            if (!g)
                throw new TypeError("Invalid Version: ".concat(d));
            if (this.raw = d, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > a || this.major < 0)
                throw new TypeError("Invalid major version");
            if (this.minor > a || this.minor < 0)
                throw new TypeError("Invalid minor version");
            if (this.patch > a || this.patch < 0)
                throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map(function (c) { if (/^[0-9]+$/.test(c)) {
                var f = +c;
                if (f >= 0 && f < a)
                    return f;
            } return c; }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
        }
        p.prototype.format = function () { return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version; };
        p.prototype.toString = function () { return this.version; };
        p.prototype.compare = function (d) { if (t("SemVer.compare", this.version, this.options, d), !(d instanceof p)) {
            if (typeof d == "string" && d === this.version)
                return 0;
            d = new p(d, this.options);
        } return d.version === this.version ? 0 : this.compareMain(d) || this.comparePre(d); };
        p.prototype.compareMain = function (d) { return d instanceof p || (d = new p(d, this.options)), l(this.major, d.major) || l(this.minor, d.minor) || l(this.patch, d.patch); };
        p.prototype.comparePre = function (d) { if (d instanceof p || (d = new p(d, this.options)), this.prerelease.length && !d.prerelease.length)
            return -1; if (!this.prerelease.length && d.prerelease.length)
            return 1; if (!this.prerelease.length && !d.prerelease.length)
            return 0; var y = 0; do {
            var g = this.prerelease[y], c = d.prerelease[y];
            if (t("prerelease compare", y, g, c), g === void 0 && c === void 0)
                return 0;
            if (c === void 0)
                return 1;
            if (g === void 0)
                return -1;
            if (g === c)
                continue;
            return l(g, c);
        } while (++y); };
        p.prototype.compareBuild = function (d) { d instanceof p || (d = new p(d, this.options)); var y = 0; do {
            var g = this.build[y], c = d.build[y];
            if (t("prerelease compare", y, g, c), g === void 0 && c === void 0)
                return 0;
            if (c === void 0)
                return 1;
            if (g === void 0)
                return -1;
            if (g === c)
                continue;
            return l(g, c);
        } while (++y); };
        p.prototype.inc = function (d, y) { switch (d) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", y), this.inc("pre", y);
                break;
            case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", y), this.inc("pre", y);
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
                    var g = this.prerelease.length;
                    for (; --g >= 0;)
                        typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                    g === -1 && this.prerelease.push(0);
                }
                y && (l(this.prerelease[0], y) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [y, 0]) : this.prerelease = [y, 0]);
                break;
            default: throw new Error("invalid increment argument: ".concat(d));
        } return this.format(), this.raw = this.version, this; };
        return p;
    }()); r.exports = p; } }), Gn = te({ "node_modules/semver/functions/compare.js": function (e, r) { ne(); var t = OD(), s = function (a, n, u) { return new t(a, u).compare(new t(n, u)); }; r.exports = s; } }), jD = te({ "node_modules/semver/functions/lt.js": function (e, r) { ne(); var t = Gn(), s = function (a, n, u) { return t(a, n, u) < 0; }; r.exports = s; } }), qD = te({ "node_modules/semver/functions/gte.js": function (e, r) { ne(); var t = Gn(), s = function (a, n, u) { return t(a, n, u) >= 0; }; r.exports = s; } }), MD = te({ "src/utils/arrayify.js": function (e, r) {
        "use strict";
        ne(), r.exports = function (t, s) { return Object.entries(t).map(function (a) {
            var _b;
            var _h = __read(a, 2), n = _h[0], u = _h[1];
            return Object.assign((_b = {}, _b[s] = n, _b), u);
        }); };
    } }), RD = te({ "node_modules/outdent/lib/index.js": function (e, r) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.outdent = void 0;
        function t() { for (var F = [], N = 0; N < arguments.length; N++)
            F[N] = arguments[N]; }
        function s() { return typeof WeakMap < "u" ? new WeakMap : a(); }
        function a() { return { add: t, delete: t, get: t, set: t, has: function (F) { return !1; } }; }
        var n = Object.prototype.hasOwnProperty, u = function (F, N) { return n.call(F, N); };
        function i(F, N) { for (var x in N)
            u(N, x) && (F[x] = N[x]); return F; }
        var l = /^[ \t]*(?:\r\n|\r|\n)/, p = /(?:\r\n|\r|\n)[ \t]*$/, d = /^(?:[\r\n]|$)/, y = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function c(F, N, x) { var I = 0, P = F[0].match(y); P && (I = P[1].length); var $ = "(\\r\\n|\\r|\\n).{0," + I + "}", D = new RegExp($, "g"); N && (F = F.slice(1)); var T = x.newline, m = x.trimLeadingNewline, C = x.trimTrailingNewline, o = typeof T == "string", h = F.length, v = F.map(function (S, b) { return S = S.replace(D, "$1"), b === 0 && m && (S = S.replace(l, "")), b === h - 1 && C && (S = S.replace(p, "")), o && (S = S.replace(/\r\n|\n|\r/g, function (B) { return T; })), S; }); return v; }
        function f(F, N) { for (var x = "", I = 0, P = F.length; I < P; I++)
            x += F[I], I < P - 1 && (x += N[I]); return x; }
        function E(F) { return u(F, "raw") && u(F, "length"); }
        function _(F) { var N = s(), x = s(); function I($) { for (var D = [], T = 1; T < arguments.length; T++)
            D[T - 1] = arguments[T]; if (E($)) {
            var m = $, C = (D[0] === I || D[0] === w) && g.test(m[0]) && d.test(m[1]), o = C ? x : N, h = o.get(m);
            if (h || (h = c(m, C, F), o.set(m, h)), D.length === 0)
                return h[0];
            var v = f(h, C ? D.slice(1) : D);
            return v;
        }
        else
            return _(i(i({}, F), $ || {})); } var P = i(I, { string: function ($) { return c([$], !1, F)[0]; } }); return P; }
        var w = _({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (e.outdent = w, e.default = w, typeof r < "u")
            try {
                r.exports = w, Object.defineProperty(w, "__esModule", { value: !0 }), w.default = w, w.outdent = w;
            }
            catch (_b) { }
    } }), $D = te({ "src/main/core-options.js": function (e, r) {
        "use strict";
        ne();
        var t = RD().outdent, s = "Config", a = "Editor", n = "Format", u = "Other", i = "Output", l = "Global", p = "Special", d = { cursorOffset: { since: "1.4.0", category: p, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "], ["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]))), cliCategory: a }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "], ["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]))) }] }, filepath: { since: "1.4.0", category: p, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: u, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: p, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: u }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: function (y) { return typeof y == "string" || typeof y == "function"; }, choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: function (y) { return typeof y == "string" || typeof y == "object"; }, cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: l, description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "], ["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]))), exception: function (y) { return typeof y == "string" || typeof y == "object"; }, cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: p, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "], ["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: a }, rangeStart: { since: "1.4.0", category: p, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "], ["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: a }, requirePragma: { since: "1.7.0", category: p, type: "boolean", default: !1, description: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "], ["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]))), cliCategory: u }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: a, CATEGORY_FORMAT: n, CATEGORY_OTHER: u, CATEGORY_OUTPUT: i, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: p, options: d };
    } }), Un = te({ "src/main/support.js": function (e, r) {
        "use strict";
        ne();
        var t = { compare: Gn(), lt: jD(), gte: qD() }, s = MD(), a = xa().version, n = $D().options;
        function u() { var _b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _h = _b.plugins, l = _h === void 0 ? [] : _h, _j = _b.showUnreleased, p = _j === void 0 ? !1 : _j, _k = _b.showDeprecated, d = _k === void 0 ? !1 : _k, _q = _b.showInternal, y = _q === void 0 ? !1 : _q, g = a.split("-", 1)[0], c = l.flatMap(function (F) { return F.languages || []; }).filter(E), f = s(Object.assign.apply(Object, __spreadArray(__spreadArray([{}], __read(l.map(function (F) { var N = F.options; return N; })), false), [n], false)), "name").filter(function (F) { return E(F) && _(F); }).sort(function (F, N) { return F.name === N.name ? 0 : F.name < N.name ? -1 : 1; }).map(w).map(function (F) { F = Object.assign({}, F), Array.isArray(F.default) && (F.default = F.default.length === 1 ? F.default[0].value : F.default.filter(E).sort(function (x, I) { return t.compare(I.since, x.since); })[0].value), Array.isArray(F.choices) && (F.choices = F.choices.filter(function (x) { return E(x) && _(x); }), F.name === "parser" && i(F, c, l)); var N = Object.fromEntries(l.filter(function (x) { return x.defaultOptions && x.defaultOptions[F.name] !== void 0; }).map(function (x) { return [x.name, x.defaultOptions[F.name]]; })); return Object.assign(Object.assign({}, F), {}, { pluginDefaults: N }); }); return { languages: c, options: f }; function E(F) { return p || !("since" in F) || F.since && t.gte(g, F.since); } function _(F) { return d || !("deprecated" in F) || F.deprecated && t.lt(g, F.deprecated); } function w(F) { if (y)
            return F; var N = F.cliName, x = F.cliCategory, I = F.cliDescription; return $n(F, lD); } }
        function i(l, p, d) {
            var e_5, _b, e_6, _h;
            var y = new Set(l.choices.map(function (g) { return g.value; }));
            try {
                for (var p_1 = __values(p), p_1_1 = p_1.next(); !p_1_1.done; p_1_1 = p_1.next()) {
                    var g = p_1_1.value;
                    if (g.parsers) {
                        var _loop_2 = function (c) {
                            if (!y.has(c)) {
                                y.add(c);
                                var f = d.find(function (_) { return _.parsers && _.parsers[c]; }), E = g.name;
                                f && f.name && (E += " (plugin: ".concat(f.name, ")")), l.choices.push({ value: c, description: E });
                            }
                        };
                        try {
                            for (var _j = (e_6 = void 0, __values(g.parsers)), _k = _j.next(); !_k.done; _k = _j.next()) {
                                var c = _k.value;
                                _loop_2(c);
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (p_1_1 && !p_1_1.done && (_b = p_1.return)) _b.call(p_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        r.exports = { getSupportInfo: u };
    } }), Jn = te({ "src/utils/is-non-empty-array.js": function (e, r) {
        "use strict";
        ne();
        function t(s) { return Array.isArray(s) && s.length > 0; }
        r.exports = t;
    } }), wr = te({ "src/utils/text/skip.js": function (e, r) {
        "use strict";
        ne();
        function t(i) { return function (l, p, d) { var y = d && d.backwards; if (p === !1)
            return !1; var g = l.length, c = p; for (; c >= 0 && c < g;) {
            var f = l.charAt(c);
            if (i instanceof RegExp) {
                if (!i.test(f))
                    return c;
            }
            else if (!i.includes(f))
                return c;
            y ? c-- : c++;
        } return c === -1 || c === g ? c : !1; }; }
        var s = t(/\s/), a = t(" 	"), n = t(",; 	"), u = t(/[^\n\r]/);
        r.exports = { skipWhitespace: s, skipSpaces: a, skipToLineEnd: n, skipEverythingButNewLine: u };
    } }), Pa = te({ "src/utils/text/skip-inline-comment.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a) { if (a === !1)
            return !1; if (s.charAt(a) === "/" && s.charAt(a + 1) === "*") {
            for (var n = a + 2; n < s.length; ++n)
                if (s.charAt(n) === "*" && s.charAt(n + 1) === "/")
                    return n + 2;
        } return a; }
        r.exports = t;
    } }), Ia = te({ "src/utils/text/skip-trailing-comment.js": function (e, r) {
        "use strict";
        ne();
        var t = wr().skipEverythingButNewLine;
        function s(a, n) { return n === !1 ? !1 : a.charAt(n) === "/" && a.charAt(n + 1) === "/" ? t(a, n) : n; }
        r.exports = s;
    } }), ka = te({ "src/utils/text/skip-newline.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a, n) {
            var u = n && n.backwards;
            if (a === !1)
                return !1;
            var i = s.charAt(a);
            if (u) {
                if (s.charAt(a - 1) === "\r" && i === "\n")
                    return a - 2;
                if (i === "\n" || i === "\r" || i === "\u2028" || i === "\u2029")
                    return a - 1;
            }
            else {
                if (i === "\r" && s.charAt(a + 1) === "\n")
                    return a + 2;
                if (i === "\n" || i === "\r" || i === "\u2028" || i === "\u2029")
                    return a + 1;
            }
            return a;
        }
        r.exports = t;
    } }), VD = te({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js": function (e, r) {
        "use strict";
        ne();
        var t = Pa(), s = ka(), a = Ia(), n = wr().skipSpaces;
        function u(i, l) { var p = null, d = l; for (; d !== p;)
            p = d, d = n(i, d), d = t(i, d), d = a(i, d), d = s(i, d); return d; }
        r.exports = u;
    } }), Ue = te({ "src/common/util.js": function (e, r) {
        "use strict";
        ne();
        var t = (PD(), ft(Na)).default, s = lt(), a = Un().getSupportInfo, n = Jn(), u = Ba(), _b = wr(), i = _b.skipWhitespace, l = _b.skipSpaces, p = _b.skipToLineEnd, d = _b.skipEverythingButNewLine, y = Pa(), g = Ia(), c = ka(), f = VD(), E = function (V) { return V[V.length - 2]; };
        function _(V) { return function (j, Y, ie) { var ee = ie && ie.backwards; if (Y === !1)
            return !1; var ce = j.length, W = Y; for (; W >= 0 && W < ce;) {
            var K = j.charAt(W);
            if (V instanceof RegExp) {
                if (!V.test(K))
                    return W;
            }
            else if (!V.includes(K))
                return W;
            ee ? W-- : W++;
        } return W === -1 || W === ce ? W : !1; }; }
        function w(V, j) { var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ie = l(V, Y.backwards ? j - 1 : j, Y), ee = c(V, ie, Y); return ie !== ee; }
        function F(V, j, Y) {
            for (var ie = j; ie < Y; ++ie)
                if (V.charAt(ie) === "\n")
                    return !0;
            return !1;
        }
        function N(V, j, Y) { var ie = Y(j) - 1; ie = l(V, ie, { backwards: !0 }), ie = c(V, ie, { backwards: !0 }), ie = l(V, ie, { backwards: !0 }); var ee = c(V, ie, { backwards: !0 }); return ie !== ee; }
        function x(V, j) { var Y = null, ie = j; for (; ie !== Y;)
            Y = ie, ie = p(V, ie), ie = y(V, ie), ie = l(V, ie); return ie = g(V, ie), ie = c(V, ie), ie !== !1 && w(V, ie); }
        function I(V, j, Y) { return x(V, Y(j)); }
        function P(V, j, Y) { return f(V, Y(j)); }
        function $(V, j, Y) { return V.charAt(P(V, j, Y)); }
        function D(V, j) { var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; return l(V, Y.backwards ? j - 1 : j, Y) !== j; }
        function T(V, j) { var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, ie = 0; for (var ee = Y; ee < V.length; ++ee)
            V[ee] === "	" ? ie = ie + j - ie % j : ie++; return ie; }
        function m(V, j) {
            var Y = V.lastIndexOf("\n");
            return Y === -1 ? 0 : T(V.slice(Y + 1).match(/^[\t ]*/)[0], j);
        }
        function C(V, j) { var Y = { quote: '"', regex: /"/g, escaped: "&quot;" }, ie = { quote: "'", regex: /'/g, escaped: "&apos;" }, ee = j === "'" ? ie : Y, ce = ee === ie ? Y : ie, W = ee; if (V.includes(ee.quote) || V.includes(ce.quote)) {
            var K = (V.match(ee.regex) || []).length, de = (V.match(ce.regex) || []).length;
            W = K > de ? ce : ee;
        } return W; }
        function o(V, j) { var Y = V.slice(1, -1), ie = j.parser === "json" || j.parser === "json5" && j.quoteProps === "preserve" && !j.singleQuote ? '"' : j.__isInHtmlAttribute ? "'" : C(Y, j.singleQuote ? "'" : '"').quote; return h(Y, ie, !(j.parser === "css" || j.parser === "less" || j.parser === "scss" || j.__embeddedInHtml)); }
        function h(V, j, Y) { var ie = j === '"' ? "'" : '"', ee = /\\(.)|(["'])/gs, ce = V.replace(ee, function (W, K, de) { return K === ie ? K : de === j ? "\\" + de : de || (Y && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(K) ? K : "\\" + K); }); return j + ce + j; }
        function v(V) { return V.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, ""); }
        function S(V, j) { var Y = V.match(new RegExp("(".concat(t(j), ")+"), "g")); return Y === null ? 0 : Y.reduce(function (ie, ee) { return Math.max(ie, ee.length / j.length); }, 0); }
        function b(V, j) {
            var e_7, _b;
            var Y = V.match(new RegExp("(".concat(t(j), ")+"), "g"));
            if (Y === null)
                return 0;
            var ie = new Map, ee = 0;
            try {
                for (var Y_1 = __values(Y), Y_1_1 = Y_1.next(); !Y_1_1.done; Y_1_1 = Y_1.next()) {
                    var ce = Y_1_1.value;
                    var W = ce.length / j.length;
                    ie.set(W, !0), W > ee && (ee = W);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (Y_1_1 && !Y_1_1.done && (_b = Y_1.return)) _b.call(Y_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
            for (var ce = 1; ce < ee; ce++)
                if (!ie.get(ce))
                    return ce;
            return ee + 1;
        }
        function B(V, j) { (V.comments || (V.comments = [])).push(j), j.printed = !1, j.nodeDescription = Q(V); }
        function k(V, j) { j.leading = !0, j.trailing = !1, B(V, j); }
        function M(V, j, Y) { j.leading = !1, j.trailing = !1, Y && (j.marker = Y), B(V, j); }
        function R(V, j) { j.leading = !1, j.trailing = !0, B(V, j); }
        function q(V, j) { var Y = a({ plugins: j.plugins }).languages, ie = Y.find(function (ee) { var ce = ee.name; return ce.toLowerCase() === V; }) || Y.find(function (ee) { var ce = ee.aliases; return Array.isArray(ce) && ce.includes(V); }) || Y.find(function (ee) { var ce = ee.extensions; return Array.isArray(ce) && ce.includes(".".concat(V)); }); return ie && ie.parsers[0]; }
        function J(V) { return V && V.type === "front-matter"; }
        function L(V) { var j = new WeakMap; return function (Y) { return j.has(Y) || j.set(Y, Symbol(V)), j.get(Y); }; }
        function Q(V) { var j = V.type || V.kind || "(unknown type)", Y = String(V.name || V.id && (typeof V.id == "object" ? V.id.name : V.id) || V.key && (typeof V.key == "object" ? V.key.name : V.key) || V.value && (typeof V.value == "object" ? "" : String(V.value)) || V.operator || ""); return Y.length > 20 && (Y = Y.slice(0, 19) + "\u2026"), j + (Y ? " " + Y : ""); }
        r.exports = { inferParserByLanguage: q, getStringWidth: u, getMaxContinuousCount: S, getMinNotPresentContinuousCount: b, getPenultimate: E, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f, getNextNonSpaceNonCommentCharacterIndex: P, getNextNonSpaceNonCommentCharacter: $, skip: _, skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: d, skipInlineComment: y, skipTrailingComment: g, skipNewline: c, isNextLineEmptyAfterIndex: x, isNextLineEmpty: I, isPreviousLineEmpty: N, hasNewline: w, hasNewlineInRange: F, hasSpaces: D, getAlignmentSize: T, getIndentSize: m, getPreferredQuote: C, printString: o, printNumber: v, makeString: h, addLeadingComment: k, addDanglingComment: M, addTrailingComment: R, isFrontMatterNode: J, isNonEmptyArray: n, createGroupIdMapper: L };
    } }), La = {};
zt(La, { basename: function () { return Ra; }, default: function () { return Va; }, delimiter: function () { return On; }, dirname: function () { return Ma; }, extname: function () { return $a; }, isAbsolute: function () { return Xn; }, join: function () { return ja; }, normalize: function () { return zn; }, relative: function () { return qa; }, resolve: function () { return Br; }, sep: function () { return Ln; } });
function Oa(e, r) { for (var t = 0, s = e.length - 1; s >= 0; s--) {
    var a = e[s];
    a === "." ? e.splice(s, 1) : a === ".." ? (e.splice(s, 1), t++) : t && (e.splice(s, 1), t--);
} if (r)
    for (; t--; t)
        e.unshift(".."); return e; }
function Br() { for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
    var s = t >= 0 ? arguments[t] : "/";
    if (typeof s != "string")
        throw new TypeError("Arguments to path.resolve must be strings");
    if (!s)
        continue;
    e = s + "/" + e, r = s.charAt(0) === "/";
} return e = Oa(Kn(e.split("/"), function (a) { return !!a; }), !r).join("/"), (r ? "/" : "") + e || "."; }
function zn(e) { var r = Xn(e), t = Wa(e, -1) === "/"; return e = Oa(Kn(e.split("/"), function (s) { return !!s; }), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e; }
function Xn(e) { return e.charAt(0) === "/"; }
function ja() { var e = Array.prototype.slice.call(arguments, 0); return zn(Kn(e, function (r, t) { if (typeof r != "string")
    throw new TypeError("Arguments to path.join must be strings"); return r; }).join("/")); }
function qa(e, r) { e = Br(e).substr(1), r = Br(r).substr(1); function t(p) { for (var d = 0; d < p.length && p[d] === ""; d++)
    ; for (var y = p.length - 1; y >= 0 && p[y] === ""; y--)
    ; return d > y ? [] : p.slice(d, y - d + 1); } for (var s = t(e.split("/")), a = t(r.split("/")), n = Math.min(s.length, a.length), u = n, i = 0; i < n; i++)
    if (s[i] !== a[i]) {
        u = i;
        break;
    } for (var l = [], i = u; i < s.length; i++)
    l.push(".."); return l = l.concat(a.slice(u)), l.join("/"); }
function Ma(e) { var r = _r(e), t = r[0], s = r[1]; return !t && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t + s); }
function Ra(e, r) { var t = _r(e)[2]; return r && t.substr(-1 * r.length) === r && (t = t.substr(0, t.length - r.length)), t; }
function $a(e) { return _r(e)[3]; }
function Kn(e, r) { if (e.filter)
    return e.filter(r); for (var t = [], s = 0; s < e.length; s++)
    r(e[s], s, e) && t.push(e[s]); return t; }
var Ea, _r, Ln, On, Va, Wa, WD = ht({ "node-modules-polyfills:path": function () { ne(), Ea = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, _r = function (e) { return Ea.exec(e).slice(1); }, Ln = "/", On = ":", Va = { extname: $a, basename: Ra, dirname: Ma, sep: Ln, delimiter: On, relative: qa, join: ja, isAbsolute: Xn, normalize: zn, resolve: Br }, Wa = "ab".substr(-1) === "b" ? function (e, r, t) { return e.substr(r, t); } : function (e, r, t) { return r < 0 && (r = e.length + r), e.substr(r, t); }; } }), HD = te({ "node-modules-polyfills-commonjs:path": function (e, r) { ne(); var t = (WD(), ft(La)); if (t && t.default) {
        r.exports = t.default;
        for (var s in t)
            r.exports[s] = t[s];
    }
    else
        t && (r.exports = t); } }), Kt = te({ "src/common/errors.js": function (e, r) {
        "use strict";
        ne();
        var t = /** @class */ (function (_super) {
            __extends(t, _super);
            function t() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return t;
        }(Error)), s = /** @class */ (function (_super) {
            __extends(s, _super);
            function s() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return s;
        }(Error)), a = /** @class */ (function (_super) {
            __extends(a, _super);
            function a() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return a;
        }(Error)), n = /** @class */ (function (_super) {
            __extends(n, _super);
            function n() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return n;
        }(Error));
        r.exports = { ConfigError: t, DebugError: s, UndefinedParserError: a, ArgExpansionBailout: n };
    } }), vt = {};
zt(vt, { __assign: function () { return Tr; }, __asyncDelegator: function () { return nm; }, __asyncGenerator: function () { return rm; }, __asyncValues: function () { return um; }, __await: function () { return Jt; }, __awaiter: function () { return KD; }, __classPrivateFieldGet: function () { return om; }, __classPrivateFieldSet: function () { return lm; }, __createBinding: function () { return QD; }, __decorate: function () { return JD; }, __exportStar: function () { return ZD; }, __extends: function () { return GD; }, __generator: function () { return YD; }, __importDefault: function () { return am; }, __importStar: function () { return im; }, __makeTemplateObject: function () { return sm; }, __metadata: function () { return XD; }, __param: function () { return zD; }, __read: function () { return Ha; }, __rest: function () { return UD; }, __spread: function () { return em; }, __spreadArrays: function () { return tm; }, __values: function () { return jn; } });
function GD(e, r) { br(e, r); function t() { this.constructor = e; } e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t); }
function UD(e, r) { var t = {}; for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (t[s] = e[s]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
        r.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t[s[a]] = e[s[a]]); return t; }
function JD(e, r, t, s) { var a = arguments.length, n = a < 3 ? r : s === null ? s = Object.getOwnPropertyDescriptor(r, t) : s, u; if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, r, t, s);
else
    for (var i = e.length - 1; i >= 0; i--)
        (u = e[i]) && (n = (a < 3 ? u(n) : a > 3 ? u(r, t, n) : u(r, t)) || n); return a > 3 && n && Object.defineProperty(r, t, n), n; }
function zD(e, r) { return function (t, s) { r(t, s, e); }; }
function XD(e, r) { if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r); }
function KD(e, r, t, s) { function a(n) { return n instanceof t ? n : new t(function (u) { u(n); }); } return new (t || (t = Promise))(function (n, u) { function i(d) { try {
    p(s.next(d));
}
catch (y) {
    u(y);
} } function l(d) { try {
    p(s.throw(d));
}
catch (y) {
    u(y);
} } function p(d) { d.done ? n(d.value) : a(d.value).then(i, l); } p((s = s.apply(e, r || [])).next()); }); }
function YD(e, r) { var t = { label: 0, sent: function () { if (n[0] & 1)
        throw n[1]; return n[1]; }, trys: [], ops: [] }, s, a, n, u; return u = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function () { return this; }), u; function i(p) { return function (d) { return l([p, d]); }; } function l(p) { if (s)
    throw new TypeError("Generator is already executing."); for (; t;)
    try {
        if (s = 1, a && (n = p[0] & 2 ? a.return : p[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, p[1])).done)
            return n;
        switch (a = 0, n && (p = [p[0] & 2, n.value]), p[0]) {
            case 0:
            case 1:
                n = p;
                break;
            case 4: return t.label++, { value: p[1], done: !1 };
            case 5:
                t.label++, a = p[1], p = [0];
                continue;
            case 7:
                p = t.ops.pop(), t.trys.pop();
                continue;
            default:
                if (n = t.trys, !(n = n.length > 0 && n[n.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                    t = 0;
                    continue;
                }
                if (p[0] === 3 && (!n || p[1] > n[0] && p[1] < n[3])) {
                    t.label = p[1];
                    break;
                }
                if (p[0] === 6 && t.label < n[1]) {
                    t.label = n[1], n = p;
                    break;
                }
                if (n && t.label < n[2]) {
                    t.label = n[2], t.ops.push(p);
                    break;
                }
                n[2] && t.ops.pop(), t.trys.pop();
                continue;
        }
        p = r.call(e, t);
    }
    catch (d) {
        p = [6, d], a = 0;
    }
    finally {
        s = n = 0;
    } if (p[0] & 5)
    throw p[1]; return { value: p[0] ? p[1] : void 0, done: !0 }; } }
function QD(e, r, t, s) { s === void 0 && (s = t), e[s] = r[t]; }
function ZD(e, r) { for (var t in e)
    t !== "default" && !r.hasOwnProperty(t) && (r[t] = e[t]); }
function jn(e) { var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], s = 0; if (t)
    return t.call(e); if (e && typeof e.length == "number")
    return { next: function () { return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e }; } }; throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function Ha(e, r) { var t = typeof Symbol == "function" && e[Symbol.iterator]; if (!t)
    return e; var s = t.call(e), a, n = [], u; try {
    for (; (r === void 0 || r-- > 0) && !(a = s.next()).done;)
        n.push(a.value);
}
catch (i) {
    u = { error: i };
}
finally {
    try {
        a && !a.done && (t = s.return) && t.call(s);
    }
    finally {
        if (u)
            throw u.error;
    }
} return n; }
function em() { for (var e = [], r = 0; r < arguments.length; r++)
    e = e.concat(Ha(arguments[r])); return e; }
function tm() { for (var e = 0, r = 0, t = arguments.length; r < t; r++)
    e += arguments[r].length; for (var s = Array(e), a = 0, r = 0; r < t; r++)
    for (var n = arguments[r], u = 0, i = n.length; u < i; u++, a++)
        s[a] = n[u]; return s; }
function Jt(e) { return this instanceof Jt ? (this.v = e, this) : new Jt(e); }
function rm(e, r, t) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var s = t.apply(e, r || []), a, n = []; return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function () { return this; }, a; function u(g) { s[g] && (a[g] = function (c) { return new Promise(function (f, E) { n.push([g, c, f, E]) > 1 || i(g, c); }); }); } function i(g, c) { try {
    l(s[g](c));
}
catch (f) {
    y(n[0][3], f);
} } function l(g) { g.value instanceof Jt ? Promise.resolve(g.value.v).then(p, d) : y(n[0][2], g); } function p(g) { i("next", g); } function d(g) { i("throw", g); } function y(g, c) { g(c), n.shift(), n.length && i(n[0][0], n[0][1]); } }
function nm(e) { var r, t; return r = {}, s("next"), s("throw", function (a) { throw a; }), s("return"), r[Symbol.iterator] = function () { return this; }, r; function s(a, n) { r[a] = e[a] ? function (u) { return (t = !t) ? { value: Jt(e[a](u)), done: a === "return" } : n ? n(u) : u; } : n; } }
function um(e) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var r = e[Symbol.asyncIterator], t; return r ? r.call(e) : (e = typeof jn == "function" ? jn(e) : e[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function () { return this; }, t); function s(n) { t[n] = e[n] && function (u) { return new Promise(function (i, l) { u = e[n](u), a(i, l, u.done, u.value); }); }; } function a(n, u, i, l) { Promise.resolve(l).then(function (p) { n({ value: p, done: i }); }, u); } }
function sm(e, r) { return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e; }
function im(e) { if (e && e.__esModule)
    return e; var r = {}; if (e != null)
    for (var t in e)
        Object.hasOwnProperty.call(e, t) && (r[t] = e[t]); return r.default = e, r; }
function am(e) { return e && e.__esModule ? e : { default: e }; }
function om(e, r) { if (!r.has(e))
    throw new TypeError("attempted to get private field on non-instance"); return r.get(e); }
function lm(e, r, t) { if (!r.has(e))
    throw new TypeError("attempted to set private field on non-instance"); return r.set(e, t), t; }
var br, Tr, Et = ht({ "node_modules/tslib/tslib.es6.js": function () { ne(), br = function (e, r) { return br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, s) { t.__proto__ = s; } || function (t, s) { for (var a in s)
        s.hasOwnProperty(a) && (t[a] = s[a]); }, br(e, r); }, Tr = function () { return Tr = Object.assign || function (r) { for (var t, s = 1, a = arguments.length; s < a; s++) {
        t = arguments[s];
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    } return r; }, Tr.apply(this, arguments); }; } }), Ga = te({ "node_modules/vnopts/lib/descriptors/api.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.apiDescriptor = { key: function (r) { return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(r) ? r : JSON.stringify(r); }, value: function (r) { if (r === null || typeof r != "object")
                return JSON.stringify(r); if (Array.isArray(r))
                return "[".concat(r.map(function (s) { return e.apiDescriptor.value(s); }).join(", "), "]"); var t = Object.keys(r); return t.length === 0 ? "{}" : "{ ".concat(t.map(function (s) { return "".concat(e.apiDescriptor.key(s), ": ").concat(e.apiDescriptor.value(r[s])); }).join(", "), " }"); }, pair: function (r) {
                var _b;
                var t = r.key, s = r.value;
                return e.apiDescriptor.value((_b = {}, _b[t] = s, _b));
            } };
    } }), cm = te({ "node_modules/vnopts/lib/descriptors/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(Ga(), e);
    } }), Pr = te({ "scripts/build/shims/chalk.cjs": function (e, r) {
        "use strict";
        ne();
        var t = function (s) { return s; };
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, r.exports = t;
    } }), Ua = te({ "node_modules/vnopts/lib/handlers/deprecated/common.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Pr();
        e.commonDeprecatedHandler = function (t, s, a) { var n = a.descriptor, u = ["".concat(r.default.yellow(typeof t == "string" ? n.key(t) : n.pair(t)), " is deprecated")]; return s && u.push("we now treat it as ".concat(r.default.blue(typeof s == "string" ? n.key(s) : n.pair(s)))), u.join("; ") + "."; };
    } }), pm = te({ "node_modules/vnopts/lib/handlers/deprecated/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(Ua(), e);
    } }), fm = te({ "node_modules/vnopts/lib/handlers/invalid/common.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Pr();
        e.commonInvalidHandler = function (t, s, a) { return ["Invalid ".concat(r.default.red(a.descriptor.key(t)), " value."), "Expected ".concat(r.default.blue(a.schemas[t].expected(a)), ","), "but received ".concat(r.default.red(a.descriptor.value(s)), ".")].join(" "); };
    } }), Ja = te({ "node_modules/vnopts/lib/handlers/invalid/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(fm(), e);
    } }), Dm = te({ "node_modules/vnopts/node_modules/leven/index.js": function (e, r) {
        "use strict";
        ne();
        var t = [], s = [];
        r.exports = function (a, n) { if (a === n)
            return 0; var u = a; a.length > n.length && (a = n, n = u); var i = a.length, l = n.length; if (i === 0)
            return l; if (l === 0)
            return i; for (; i > 0 && a.charCodeAt(~-i) === n.charCodeAt(~-l);)
            i--, l--; if (i === 0)
            return l; for (var p = 0; p < i && a.charCodeAt(p) === n.charCodeAt(p);)
            p++; if (i -= p, l -= p, i === 0)
            return l; for (var d, y, g, c, f = 0, E = 0; f < i;)
            s[p + f] = a.charCodeAt(p + f), t[f] = ++f; for (; E < l;)
            for (d = n.charCodeAt(p + E), g = E++, y = E, f = 0; f < i; f++)
                c = d === s[p + f] ? g : g + 1, g = t[f], y = t[f] = g > y ? c > y ? y + 1 : c : c > g ? g + 1 : c; return y; };
    } }), za = te({ "node_modules/vnopts/lib/handlers/unknown/leven.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Pr(), t = Dm();
        e.levenUnknownHandler = function (s, a, n) { var u = n.descriptor, i = n.logger, l = n.schemas, p = ["Ignored unknown option ".concat(r.default.yellow(u.pair({ key: s, value: a })), ".")], d = Object.keys(l).sort().find(function (y) { return t(s, y) < 3; }); d && p.push("Did you mean ".concat(r.default.blue(u.key(d)), "?")), i.warn(p.join(" ")); };
    } }), mm = te({ "node_modules/vnopts/lib/handlers/unknown/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(za(), e);
    } }), dm = te({ "node_modules/vnopts/lib/handlers/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(pm(), e), r.__exportStar(Ja(), e), r.__exportStar(mm(), e);
    } }), Ft = te({ "node_modules/vnopts/lib/schema.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(n, u) {
            var e_8, _b;
            var i = new n(u), l = Object.create(i);
            try {
                for (var r_1 = __values(r), r_1_1 = r_1.next(); !r_1_1.done; r_1_1 = r_1.next()) {
                    var p = r_1_1.value;
                    p in u && (l[p] = a(u[p], i, s.prototype[p].length));
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (r_1_1 && !r_1_1.done && (_b = r_1.return)) _b.call(r_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
            return l;
        }
        e.createSchema = t;
        var s = /** @class */ (function () {
            function s(n) {
                this.name = n.name;
            }
            s.create = function (n) { return t(this, n); };
            s.prototype.default = function (n) { };
            s.prototype.expected = function (n) { return "nothing"; };
            s.prototype.validate = function (n, u) { return !1; };
            s.prototype.deprecated = function (n, u) { return !1; };
            s.prototype.forward = function (n, u) { };
            s.prototype.redirect = function (n, u) { };
            s.prototype.overlap = function (n, u, i) { return n; };
            s.prototype.preprocess = function (n, u) { return n; };
            s.prototype.postprocess = function (n, u) { return n; };
            return s;
        }());
        e.Schema = s;
        function a(n, u, i) { return typeof n == "function" ? function () { for (var l = arguments.length, p = new Array(l), d = 0; d < l; d++)
            p[d] = arguments[d]; return n.apply(void 0, __spreadArray(__spreadArray(__spreadArray([], __read(p.slice(0, i - 1)), false), [u], false), __read(p.slice(i - 1)), false)); } : function () { return n; }; }
    } }), gm = te({ "node_modules/vnopts/lib/schemas/alias.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ft(), t = /** @class */ (function (_super) {
            __extends(t, _super);
            function t(s) {
                var _this = this;
                _this = _super.call(this, s) || this, _this._sourceName = s.sourceName;
                return _this;
            }
            t.prototype.expected = function (s) { return s.schemas[this._sourceName].expected(s); };
            t.prototype.validate = function (s, a) { return a.schemas[this._sourceName].validate(s, a); };
            t.prototype.redirect = function (s, a) { return this._sourceName; };
            return t;
        }(r.Schema));
        e.AliasSchema = t;
    } }), ym = te({ "node_modules/vnopts/lib/schemas/any.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ft(), t = /** @class */ (function (_super) {
            __extends(t, _super);
            function t() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            t.prototype.expected = function () { return "anything"; };
            t.prototype.validate = function () { return !0; };
            return t;
        }(r.Schema));
        e.AnySchema = t;
    } }), hm = te({ "node_modules/vnopts/lib/schemas/array.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt)), t = Ft(), s = /** @class */ (function (_super) {
            __extends(s, _super);
            function s(n) {
                var _this = this;
                var u = n.valueSchema, _b = n.name, i = _b === void 0 ? u.name : _b, l = r.__rest(n, ["valueSchema", "name"]);
                _this = _super.call(this, Object.assign({}, l, { name: i })) || this, _this._valueSchema = u;
                return _this;
            }
            s.prototype.expected = function (n) { return "an array of ".concat(this._valueSchema.expected(n)); };
            s.prototype.validate = function (n, u) {
                var e_9, _b;
                if (!Array.isArray(n))
                    return !1;
                var i = [];
                try {
                    for (var n_1 = __values(n), n_1_1 = n_1.next(); !n_1_1.done; n_1_1 = n_1.next()) {
                        var l = n_1_1.value;
                        var p = u.normalizeValidateResult(this._valueSchema.validate(l, u), l);
                        p !== !0 && i.push(p.value);
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (n_1_1 && !n_1_1.done && (_b = n_1.return)) _b.call(n_1);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                return i.length === 0 ? !0 : { value: i };
            };
            s.prototype.deprecated = function (n, u) {
                var e_10, _b;
                var i = [];
                try {
                    for (var n_2 = __values(n), n_2_1 = n_2.next(); !n_2_1.done; n_2_1 = n_2.next()) {
                        var l = n_2_1.value;
                        var p = u.normalizeDeprecatedResult(this._valueSchema.deprecated(l, u), l);
                        p !== !1 && i.push.apply(i, __spreadArray([], __read(p.map(function (d) { var y = d.value; return { value: [y] }; })), false));
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (n_2_1 && !n_2_1.done && (_b = n_2.return)) _b.call(n_2);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
                return i;
            };
            s.prototype.forward = function (n, u) {
                var e_11, _b;
                var i = [];
                try {
                    for (var n_3 = __values(n), n_3_1 = n_3.next(); !n_3_1.done; n_3_1 = n_3.next()) {
                        var l = n_3_1.value;
                        var p = u.normalizeForwardResult(this._valueSchema.forward(l, u), l);
                        i.push.apply(i, __spreadArray([], __read(p.map(a)), false));
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (n_3_1 && !n_3_1.done && (_b = n_3.return)) _b.call(n_3);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
                return i;
            };
            s.prototype.redirect = function (n, u) {
                var e_12, _b;
                var i = [], l = [];
                try {
                    for (var n_4 = __values(n), n_4_1 = n_4.next(); !n_4_1.done; n_4_1 = n_4.next()) {
                        var p = n_4_1.value;
                        var d = u.normalizeRedirectResult(this._valueSchema.redirect(p, u), p);
                        "remain" in d && i.push(d.remain), l.push.apply(l, __spreadArray([], __read(d.redirect.map(a)), false));
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (n_4_1 && !n_4_1.done && (_b = n_4.return)) _b.call(n_4);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                return i.length === 0 ? { redirect: l } : { redirect: l, remain: i };
            };
            s.prototype.overlap = function (n, u) { return n.concat(u); };
            return s;
        }(t.Schema));
        e.ArraySchema = s;
        function a(n) { var u = n.from, i = n.to; return { from: [u], to: i }; }
    } }), vm = te({ "node_modules/vnopts/lib/schemas/boolean.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ft(), t = /** @class */ (function (_super) {
            __extends(t, _super);
            function t() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            t.prototype.expected = function () { return "true or false"; };
            t.prototype.validate = function (s) { return typeof s == "boolean"; };
            return t;
        }(r.Schema));
        e.BooleanSchema = t;
    } }), Yn = te({ "node_modules/vnopts/lib/utils.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        function r(c, f) {
            var e_13, _b;
            var E = Object.create(null);
            try {
                for (var c_1 = __values(c), c_1_1 = c_1.next(); !c_1_1.done; c_1_1 = c_1.next()) {
                    var _ = c_1_1.value;
                    var w = _[f];
                    if (E[w])
                        throw new Error("Duplicate ".concat(f, " ").concat(JSON.stringify(w)));
                    E[w] = _;
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (c_1_1 && !c_1_1.done && (_b = c_1.return)) _b.call(c_1);
                }
                finally { if (e_13) throw e_13.error; }
            }
            return E;
        }
        e.recordFromArray = r;
        function t(c, f) {
            var e_14, _b;
            var E = new Map;
            try {
                for (var c_2 = __values(c), c_2_1 = c_2.next(); !c_2_1.done; c_2_1 = c_2.next()) {
                    var _ = c_2_1.value;
                    var w = _[f];
                    if (E.has(w))
                        throw new Error("Duplicate ".concat(f, " ").concat(JSON.stringify(w)));
                    E.set(w, _);
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (c_2_1 && !c_2_1.done && (_b = c_2.return)) _b.call(c_2);
                }
                finally { if (e_14) throw e_14.error; }
            }
            return E;
        }
        e.mapFromArray = t;
        function s() { var c = Object.create(null); return function (f) { var E = JSON.stringify(f); return c[E] ? !0 : (c[E] = !0, !1); }; }
        e.createAutoChecklist = s;
        function a(c, f) {
            var e_15, _b;
            var E = [], _ = [];
            try {
                for (var c_3 = __values(c), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                    var w = c_3_1.value;
                    f(w) ? E.push(w) : _.push(w);
                }
            }
            catch (e_15_1) { e_15 = { error: e_15_1 }; }
            finally {
                try {
                    if (c_3_1 && !c_3_1.done && (_b = c_3.return)) _b.call(c_3);
                }
                finally { if (e_15) throw e_15.error; }
            }
            return [E, _];
        }
        e.partition = a;
        function n(c) { return c === Math.floor(c); }
        e.isInt = n;
        function u(c, f) { if (c === f)
            return 0; var E = typeof c, _ = typeof f, w = ["undefined", "object", "boolean", "number", "string"]; return E !== _ ? w.indexOf(E) - w.indexOf(_) : E !== "string" ? Number(c) - Number(f) : c.localeCompare(f); }
        e.comparePrimitive = u;
        function i(c) { return c === void 0 ? {} : c; }
        e.normalizeDefaultResult = i;
        function l(c, f) { return c === !0 ? !0 : c === !1 ? { value: f } : c; }
        e.normalizeValidateResult = l;
        function p(c, f) { var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1; return c === !1 ? !1 : c === !0 ? E ? !0 : [{ value: f }] : "value" in c ? [c] : c.length === 0 ? !1 : c; }
        e.normalizeDeprecatedResult = p;
        function d(c, f) { return typeof c == "string" || "key" in c ? { from: f, to: c } : "from" in c ? { from: c.from, to: c.to } : { from: f, to: c.to }; }
        e.normalizeTransferResult = d;
        function y(c, f) { return c === void 0 ? [] : Array.isArray(c) ? c.map(function (E) { return d(E, f); }) : [d(c, f)]; }
        e.normalizeForwardResult = y;
        function g(c, f) { var E = y(typeof c == "object" && "redirect" in c ? c.redirect : c, f); return E.length === 0 ? { remain: f, redirect: E } : typeof c == "object" && "remain" in c ? { remain: c.remain, redirect: E } : { redirect: E }; }
        e.normalizeRedirectResult = g;
    } }), Cm = te({ "node_modules/vnopts/lib/schemas/choice.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ft(), t = Yn(), s = /** @class */ (function (_super) {
            __extends(s, _super);
            function s(a) {
                var _this = this;
                _this = _super.call(this, a) || this, _this._choices = t.mapFromArray(a.choices.map(function (n) { return n && typeof n == "object" ? n : { value: n }; }), "value");
                return _this;
            }
            s.prototype.expected = function (a) {
                var _this = this;
                var n = a.descriptor, u = Array.from(this._choices.keys()).map(function (p) { return _this._choices.get(p); }).filter(function (p) { return !p.deprecated; }).map(function (p) { return p.value; }).sort(t.comparePrimitive).map(n.value), i = u.slice(0, -2), l = u.slice(-2);
                return i.concat(l.join(" or ")).join(", ");
            };
            s.prototype.validate = function (a) { return this._choices.has(a); };
            s.prototype.deprecated = function (a) { var n = this._choices.get(a); return n && n.deprecated ? { value: a } : !1; };
            s.prototype.forward = function (a) { var n = this._choices.get(a); return n ? n.forward : void 0; };
            s.prototype.redirect = function (a) { var n = this._choices.get(a); return n ? n.redirect : void 0; };
            return s;
        }(r.Schema));
        e.ChoiceSchema = s;
    } }), Xa = te({ "node_modules/vnopts/lib/schemas/number.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ft(), t = /** @class */ (function (_super) {
            __extends(t, _super);
            function t() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            t.prototype.expected = function () { return "a number"; };
            t.prototype.validate = function (s, a) { return typeof s == "number"; };
            return t;
        }(r.Schema));
        e.NumberSchema = t;
    } }), Em = te({ "node_modules/vnopts/lib/schemas/integer.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Yn(), t = Xa(), s = /** @class */ (function (_super) {
            __extends(s, _super);
            function s() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            s.prototype.expected = function () { return "an integer"; };
            s.prototype.validate = function (a, n) { return n.normalizeValidateResult(_super.prototype.validate.call(this, a, n), a) === !0 && r.isInt(a); };
            return s;
        }(t.NumberSchema));
        e.IntegerSchema = s;
    } }), Fm = te({ "node_modules/vnopts/lib/schemas/string.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ft(), t = /** @class */ (function (_super) {
            __extends(t, _super);
            function t() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            t.prototype.expected = function () { return "a string"; };
            t.prototype.validate = function (s) { return typeof s == "string"; };
            return t;
        }(r.Schema));
        e.StringSchema = t;
    } }), Am = te({ "node_modules/vnopts/lib/schemas/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(gm(), e), r.__exportStar(ym(), e), r.__exportStar(hm(), e), r.__exportStar(vm(), e), r.__exportStar(Cm(), e), r.__exportStar(Em(), e), r.__exportStar(Xa(), e), r.__exportStar(Fm(), e);
    } }), Sm = te({ "node_modules/vnopts/lib/defaults.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Ga(), t = Ua(), s = Ja(), a = za();
        e.defaultDescriptor = r.apiDescriptor, e.defaultUnknownHandler = a.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t.commonDeprecatedHandler;
    } }), xm = te({ "node_modules/vnopts/lib/normalize.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Sm(), t = Yn();
        e.normalize = function (a, n, u) { return new s(n, u).normalize(a); };
        var s = /** @class */ (function () {
            function s(a, n) {
                var _b = n || {}, _h = _b.logger, u = _h === void 0 ? console : _h, _j = _b.descriptor, i = _j === void 0 ? r.defaultDescriptor : _j, _k = _b.unknown, l = _k === void 0 ? r.defaultUnknownHandler : _k, _q = _b.invalid, p = _q === void 0 ? r.defaultInvalidHandler : _q, _v = _b.deprecated, d = _v === void 0 ? r.defaultDeprecatedHandler : _v;
                this._utils = { descriptor: i, logger: u || { warn: function () { } }, schemas: t.recordFromArray(a, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult }, this._unknownHandler = l, this._invalidHandler = p, this._deprecatedHandler = d, this.cleanHistory();
            }
            s.prototype.cleanHistory = function () { this._hasDeprecationWarned = t.createAutoChecklist(); };
            s.prototype.normalize = function (a) {
                var e_16, _b, _h, e_17, _j;
                var _this = this;
                var n = {}, u = [a], i = function () { for (; u.length !== 0;) {
                    var l = u.shift(), p = _this._applyNormalization(l, n);
                    u.push.apply(u, __spreadArray([], __read(p), false));
                } };
                i();
                try {
                    for (var _k = __values(Object.keys(this._utils.schemas)), _q = _k.next(); !_q.done; _q = _k.next()) {
                        var l = _q.value;
                        var p = this._utils.schemas[l];
                        if (!(l in n)) {
                            var d = t.normalizeDefaultResult(p.default(this._utils));
                            "value" in d && u.push((_h = {}, _h[l] = d.value, _h));
                        }
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_q && !_q.done && (_b = _k.return)) _b.call(_k);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                i();
                try {
                    for (var _v = __values(Object.keys(this._utils.schemas)), _w = _v.next(); !_w.done; _w = _v.next()) {
                        var l = _w.value;
                        var p = this._utils.schemas[l];
                        l in n && (n[l] = p.postprocess(n[l], this._utils));
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_w && !_w.done && (_j = _v.return)) _j.call(_v);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
                return n;
            };
            s.prototype._applyNormalization = function (a, n) {
                var e_18, _b, e_19, _h, e_20, _j, _k;
                var _this = this;
                var u = [], _q = __read(t.partition(Object.keys(a), function (p) { return p in _this._utils.schemas; }), 2), i = _q[0], l = _q[1];
                var _loop_3 = function (p) {
                    var e_21, _x;
                    var d = this_1._utils.schemas[p], y = d.preprocess(a[p], this_1._utils), g = t.normalizeValidateResult(d.validate(y, this_1._utils), y);
                    if (g !== !0) {
                        var w = g.value, F = this_1._invalidHandler(p, w, this_1._utils);
                        throw typeof F == "string" ? new Error(F) : F;
                    }
                    var c = function (w) {
                        var _b, _h;
                        var F = w.from, N = w.to;
                        u.push(typeof N == "string" ? (_b = {}, _b[N] = F, _b) : (_h = {}, _h[N.key] = N.value, _h));
                    }, f = function (w) {
                        var e_22, _b;
                        var F = w.value, N = w.redirectTo, x = t.normalizeDeprecatedResult(d.deprecated(F, _this._utils), y, !0);
                        if (x !== !1)
                            if (x === !0)
                                _this._hasDeprecationWarned(p) || _this._utils.logger.warn(_this._deprecatedHandler(p, N, _this._utils));
                            else
                                try {
                                    for (var x_1 = (e_22 = void 0, __values(x)), x_1_1 = x_1.next(); !x_1_1.done; x_1_1 = x_1.next()) {
                                        var I = x_1_1.value.value;
                                        var P = { key: p, value: I };
                                        if (!_this._hasDeprecationWarned(P)) {
                                            var $ = typeof N == "string" ? { key: N, value: I } : N;
                                            _this._utils.logger.warn(_this._deprecatedHandler(P, $, _this._utils));
                                        }
                                    }
                                }
                                catch (e_22_1) { e_22 = { error: e_22_1 }; }
                                finally {
                                    try {
                                        if (x_1_1 && !x_1_1.done && (_b = x_1.return)) _b.call(x_1);
                                    }
                                    finally { if (e_22) throw e_22.error; }
                                }
                    };
                    t.normalizeForwardResult(d.forward(y, this_1._utils), y).forEach(c);
                    var _ = t.normalizeRedirectResult(d.redirect(y, this_1._utils), y);
                    if (_.redirect.forEach(c), "remain" in _) {
                        var w = _.remain;
                        n[p] = p in n ? d.overlap(n[p], w, this_1._utils) : w, f({ value: w });
                    }
                    try {
                        for (var _y = (e_21 = void 0, __values(_.redirect)), _z = _y.next(); !_z.done; _z = _y.next()) {
                            var _1 = _z.value, w = _1.from, F = _1.to;
                            f({ value: w, redirectTo: F });
                        }
                    }
                    catch (e_21_1) { e_21 = { error: e_21_1 }; }
                    finally {
                        try {
                            if (_z && !_z.done && (_x = _y.return)) _x.call(_y);
                        }
                        finally { if (e_21) throw e_21.error; }
                    }
                };
                var this_1 = this;
                try {
                    for (var i_1 = __values(i), i_1_1 = i_1.next(); !i_1_1.done; i_1_1 = i_1.next()) {
                        var p = i_1_1.value;
                        _loop_3(p);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (i_1_1 && !i_1_1.done && (_b = i_1.return)) _b.call(i_1);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                try {
                    for (var l_1 = __values(l), l_1_1 = l_1.next(); !l_1_1.done; l_1_1 = l_1.next()) {
                        var p = l_1_1.value;
                        var d = a[p], y = this._unknownHandler(p, d, this._utils);
                        if (y)
                            try {
                                for (var _v = (e_20 = void 0, __values(Object.keys(y))), _w = _v.next(); !_w.done; _w = _v.next()) {
                                    var g = _w.value;
                                    var c = (_k = {}, _k[g] = y[g], _k);
                                    g in this._utils.schemas ? u.push(c) : Object.assign(n, c);
                                }
                            }
                            catch (e_20_1) { e_20 = { error: e_20_1 }; }
                            finally {
                                try {
                                    if (_w && !_w.done && (_j = _v.return)) _j.call(_v);
                                }
                                finally { if (e_20) throw e_20.error; }
                            }
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (l_1_1 && !l_1_1.done && (_h = l_1.return)) _h.call(l_1);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
                return u;
            };
            return s;
        }());
        e.Normalizer = s;
    } }), bm = te({ "node_modules/vnopts/lib/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (Et(), ft(vt));
        r.__exportStar(cm(), e), r.__exportStar(dm(), e), r.__exportStar(Am(), e), r.__exportStar(xm(), e), r.__exportStar(Ft(), e);
    } }), Tm = te({ "src/main/options-normalizer.js": function (e, r) {
        "use strict";
        ne();
        var t = bm(), s = lt(), a = { key: function (g) { return g.length === 1 ? "-".concat(g) : "--".concat(g); }, value: function (g) { return t.apiDescriptor.value(g); }, pair: function (g) { var c = g.key, f = g.value; return f === !1 ? "--no-".concat(c) : f === !0 ? a.key(c) : f === "" ? "".concat(a.key(c), " without an argument") : "".concat(a.key(c), "=").concat(f); } }, n = function (g) { var c = g.colorsModule, f = g.levenshteinDistance; return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(_) {
                var _this = this;
                var w = _.name, F = _.flags;
                _this = _super.call(this, { name: w, choices: F }) || this, _this._flags = __spreadArray([], __read(F), false).sort();
                return _this;
            }
            class_1.prototype.preprocess = function (_, w) { if (typeof _ == "string" && _.length > 0 && !this._flags.includes(_)) {
                var F = this._flags.find(function (N) { return f(N, _) < 3; });
                if (F)
                    return w.logger.warn(["Unknown flag ".concat(c.yellow(w.descriptor.value(_)), ","), "did you mean ".concat(c.blue(w.descriptor.value(F)), "?")].join(" ")), F;
            } return _; };
            class_1.prototype.expected = function () { return "a flag"; };
            return class_1;
        }(t.ChoiceSchema)); }, u;
        function i(g, c) { var _b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _h = _b.logger, f = _h === void 0 ? !1 : _h, _j = _b.isCLI, E = _j === void 0 ? !1 : _j, _k = _b.passThrough, _ = _k === void 0 ? !1 : _k, _q = _b.colorsModule, w = _q === void 0 ? null : _q, _v = _b.levenshteinDistance, F = _v === void 0 ? null : _v, N = _ ? Array.isArray(_) ? function (T, m) {
            var _b;
            return _.includes(T) ? (_b = {}, _b[T] = m, _b) : void 0;
        } : function (T, m) {
            var _b;
            return (_b = {}, _b[T] = m, _b);
        } : function (T, m, C) { var o = C.schemas, h = o._, v = $n(o, cD); return t.levenUnknownHandler(T, m, Object.assign(Object.assign({}, C), {}, { schemas: v })); }, x = E ? a : t.apiDescriptor, I = l(c, { isCLI: E, colorsModule: w, levenshteinDistance: F }), P = new t.Normalizer(I, { logger: f, unknown: N, descriptor: x }), $ = f !== !1; $ && u && (P._hasDeprecationWarned = u); var D = P.normalize(g); return $ && (u = P._hasDeprecationWarned), E && D["plugin-search"] === !1 && (D["plugin-search-dir"] = !1), D; }
        function l(g, c) {
            var e_23, _b;
            var f = c.isCLI, E = c.colorsModule, _ = c.levenshteinDistance, w = [];
            f && w.push(t.AnySchema.create({ name: "_" }));
            try {
                for (var g_1 = __values(g), g_1_1 = g_1.next(); !g_1_1.done; g_1_1 = g_1.next()) {
                    var F = g_1_1.value;
                    w.push(p(F, { isCLI: f, optionInfos: g, colorsModule: E, levenshteinDistance: _ })), F.alias && f && w.push(t.AliasSchema.create({ name: F.alias, sourceName: F.name }));
                }
            }
            catch (e_23_1) { e_23 = { error: e_23_1 }; }
            finally {
                try {
                    if (g_1_1 && !g_1_1.done && (_b = g_1.return)) _b.call(g_1);
                }
                finally { if (e_23) throw e_23.error; }
            }
            return w;
        }
        function p(g, c) { var f = c.isCLI, E = c.optionInfos, _ = c.colorsModule, w = c.levenshteinDistance, F = g.name; if (F === "plugin-search-dir" || F === "pluginSearchDirs")
            return t.AnySchema.create({ name: F, preprocess: function (P) { return P === !1 || (P = Array.isArray(P) ? P : [P]), P; }, validate: function (P) { return P === !1 ? !0 : P.every(function ($) { return typeof $ == "string"; }); }, expected: function () { return "false or paths to plugin search dir"; } }); var N = { name: F }, x, I = {}; switch (g.type) {
            case "int":
                x = t.IntegerSchema, f && (N.preprocess = Number);
                break;
            case "string":
                x = t.StringSchema;
                break;
            case "choice":
                x = t.ChoiceSchema, N.choices = g.choices.map(function (P) { return typeof P == "object" && P.redirect ? Object.assign(Object.assign({}, P), {}, { redirect: { to: { key: g.name, value: P.redirect } } }) : P; });
                break;
            case "boolean":
                x = t.BooleanSchema;
                break;
            case "flag":
                x = n({ colorsModule: _, levenshteinDistance: w }), N.flags = E.flatMap(function (P) { return [P.alias, P.description && P.name, P.oppositeDescription && "no-".concat(P.name)].filter(Boolean); });
                break;
            case "path":
                x = t.StringSchema;
                break;
            default: throw new Error("Unexpected type ".concat(g.type));
        } if (g.exception ? N.validate = function (P, $, D) { return g.exception(P) || $.validate(P, D); } : N.validate = function (P, $, D) { return P === void 0 || $.validate(P, D); }, g.redirect && (I.redirect = function (P) { return P ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0; }), g.deprecated && (I.deprecated = !0), f && !g.array) {
            var P_1 = N.preprocess || (function ($) { return $; });
            N.preprocess = function ($, D, T) { return D.preprocess(P_1(Array.isArray($) ? s($) : $), T); };
        } return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, f ? { preprocess: function (P) { return Array.isArray(P) ? P : [P]; } } : {}), I), {}, { valueSchema: x.create(N) })) : x.create(Object.assign(Object.assign({}, N), I)); }
        function d(g, c, f) { return i(g, c, f); }
        function y(g, c, f) { return i(g, c, Object.assign({ isCLI: !0 }, f)); }
        r.exports = { normalizeApiOptions: d, normalizeCliOptions: y };
    } }), ut = te({ "src/language-js/loc.js": function (e, r) {
        "use strict";
        ne();
        var t = Jn();
        function s(l) { var p, d; var y = l.range ? l.range[0] : l.start, g = (p = (d = l.declaration) === null || d === void 0 ? void 0 : d.decorators) !== null && p !== void 0 ? p : l.decorators; return t(g) ? Math.min(s(g[0]), y) : y; }
        function a(l) { return l.range ? l.range[1] : l.end; }
        function n(l, p) { var d = s(l); return Number.isInteger(d) && d === s(p); }
        function u(l, p) { var d = a(l); return Number.isInteger(d) && d === a(p); }
        function i(l, p) { return n(l, p) && u(l, p); }
        r.exports = { locStart: s, locEnd: a, hasSameLocStart: n, hasSameLoc: i };
    } }), Bm = te({ "src/main/load-parser.js": function (e, r) { ne(), r.exports = function () { }; } }), Nm = te({ "scripts/build/shims/babel-highlight.cjs": function (e, r) {
        "use strict";
        ne();
        var t = Pr(), s = { shouldHighlight: function () { return !1; }, getChalk: function () { return t; } };
        r.exports = s;
    } }), wm = te({ "node_modules/@babel/code-frame/lib/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = u, e.default = i;
        var r = Nm(), t = !1;
        function s(l) { return { gutter: l.grey, marker: l.red.bold, message: l.red.bold }; }
        var a = /\r\n|[\n\r\u2028\u2029]/;
        function n(l, p, d) { var y = Object.assign({ column: 0, line: -1 }, l.start), g = Object.assign({}, y, l.end), _b = d || {}, _h = _b.linesAbove, c = _h === void 0 ? 2 : _h, _j = _b.linesBelow, f = _j === void 0 ? 3 : _j, E = y.line, _ = y.column, w = g.line, F = g.column, N = Math.max(E - (c + 1), 0), x = Math.min(p.length, w + f); E === -1 && (N = 0), w === -1 && (x = p.length); var I = w - E, P = {}; if (I)
            for (var $ = 0; $ <= I; $++) {
                var D = $ + E;
                if (!_)
                    P[D] = !0;
                else if ($ === 0) {
                    var T = p[D - 1].length;
                    P[D] = [_, T - _ + 1];
                }
                else if ($ === I)
                    P[D] = [0, F];
                else {
                    var T = p[D - $].length;
                    P[D] = [0, T];
                }
            }
        else
            _ === F ? _ ? P[E] = [_, 0] : P[E] = !0 : P[E] = [_, F - _]; return { start: N, end: x, markerLines: P }; }
        function u(l, p) {
            var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = (d.highlightCode || d.forceColor) && (0, r.shouldHighlight)(d), g = (0, r.getChalk)(d), c = s(g), f = function ($, D) { return y ? $(D) : D; }, E = l.split(a), _b = n(p, E, d), _ = _b.start, w = _b.end, F = _b.markerLines, N = p.start && typeof p.start.column == "number", x = String(w).length, P = (y ? (0, r.default)(l, d) : l).split(a, w).slice(_, w).map(function ($, D) {
                var T = _ + 1 + D, C = " ".concat(" ".concat(T).slice(-x), " |"), o = F[T], h = !F[T + 1];
                if (o) {
                    var v = "";
                    if (Array.isArray(o)) {
                        var S = $.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "), b = o[1] || 1;
                        v = ["\n ", f(c.gutter, C.replace(/\d/g, " ")), " ", S, f(c.marker, "^").repeat(b)].join(""), h && d.message && (v += " " + f(c.message, d.message));
                    }
                    return [f(c.marker, ">"), f(c.gutter, C), $.length > 0 ? " ".concat($) : "", v].join("");
                }
                else
                    return " ".concat(f(c.gutter, C)).concat($.length > 0 ? " ".concat($) : "");
            }).join("\n");
            return d.message && !N && (P = "".concat(" ".repeat(x + 1)).concat(d.message, "\n").concat(P)), y ? g.reset(P) : P;
        }
        function i(l, p, d) { var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; if (!t) {
            t = !0;
            var c = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (Nt.emitWarning)
                Nt.emitWarning(c, "DeprecationWarning");
            else {
                var f = new Error(c);
                f.name = "DeprecationWarning", console.warn(new Error(c));
            }
        } return d = Math.max(d, 0), u(l, { start: { column: d, line: p } }, y); }
    } }), Qn = te({ "src/main/parser.js": function (e, r) {
        "use strict";
        ne();
        var t = Kt().ConfigError, s = ut(), a = Bm(), n = s.locStart, u = s.locEnd, i = Object.getOwnPropertyNames, l = Object.getOwnPropertyDescriptor;
        function p(g) {
            var e_24, _b, e_25, _h;
            var c = {};
            try {
                for (var _j = __values(g.plugins), _k = _j.next(); !_k.done; _k = _j.next()) {
                    var f = _k.value;
                    if (f.parsers)
                        try {
                            for (var _q = (e_25 = void 0, __values(i(f.parsers))), _v = _q.next(); !_v.done; _v = _q.next()) {
                                var E = _v.value;
                                Object.defineProperty(c, E, l(f.parsers, E));
                            }
                        }
                        catch (e_25_1) { e_25 = { error: e_25_1 }; }
                        finally {
                            try {
                                if (_v && !_v.done && (_h = _q.return)) _h.call(_q);
                            }
                            finally { if (e_25) throw e_25.error; }
                        }
                }
            }
            catch (e_24_1) { e_24 = { error: e_24_1 }; }
            finally {
                try {
                    if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                }
                finally { if (e_24) throw e_24.error; }
            }
            return c;
        }
        function d(g) { var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p(g); if (typeof g.parser == "function")
            return { parse: g.parser, astFormat: "estree", locStart: n, locEnd: u }; if (typeof g.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(c, g.parser))
                return c[g.parser];
            throw new t("Couldn't resolve parser \"".concat(g.parser, "\". Parsers must be explicitly added to the standalone bundle."));
        } }
        function y(g, c) {
            var f = p(c), E = Object.defineProperties({}, Object.fromEntries(Object.keys(f).map(function (w) { return [w, { enumerable: !0, get: function () { return f[w].parse; } }]; }))), _ = d(c, f);
            try {
                return _.preprocess && (g = _.preprocess(g, c)), { text: g, ast: _.parse(g, E, c) };
            }
            catch (w) {
                var F = w.loc;
                if (F) {
                    var N = wm().codeFrameColumns;
                    throw w.codeFrame = N(g, F, { highlightCode: !0 }), w.message += "\n" + w.codeFrame, w;
                }
                throw w;
            }
        }
        r.exports = { parse: y, resolveParser: d };
    } }), Ka = te({ "src/main/options.js": function (e, r) {
        "use strict";
        ne();
        var t = HD(), s = Kt().UndefinedParserError, a = Un().getSupportInfo, n = Tm(), u = Qn().resolveParser, i = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function l(y) {
            var e_26, _b;
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = Object.assign({}, y), f = a({ plugins: y.plugins, showUnreleased: !0, showDeprecated: !0 }).options, E = Object.assign(Object.assign({}, i), Object.fromEntries(f.filter(function (x) { return x.default !== void 0; }).map(function (x) { return [x.name, x.default]; })));
            if (!c.parser) {
                if (!c.filepath)
                    (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), c.parser = "babel";
                else if (c.parser = d(c.filepath, c.plugins), !c.parser)
                    throw new s("No parser could be inferred for file: ".concat(c.filepath));
            }
            var _ = u(n.normalizeApiOptions(c, [f.find(function (x) { return x.name === "parser"; })], { passThrough: !0, logger: !1 }));
            c.astFormat = _.astFormat, c.locEnd = _.locEnd, c.locStart = _.locStart;
            var w = p(c);
            c.printer = w.printers[c.astFormat];
            var F = Object.fromEntries(f.filter(function (x) { return x.pluginDefaults && x.pluginDefaults[w.name] !== void 0; }).map(function (x) { return [x.name, x.pluginDefaults[w.name]]; })), N = Object.assign(Object.assign({}, E), F);
            try {
                for (var _h = __values(Object.entries(N)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), x = _k[0], I = _k[1];
                    (c[x] === null || c[x] === void 0) && (c[x] = I);
                }
            }
            catch (e_26_1) { e_26 = { error: e_26_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_26) throw e_26.error; }
            }
            return c.parser === "json" && (c.trailingComma = "none"), n.normalizeApiOptions(c, f, Object.assign({ passThrough: Object.keys(i) }, g));
        }
        function p(y) { var g = y.astFormat; if (!g)
            throw new Error("getPlugin() requires astFormat to be set"); var c = y.plugins.find(function (f) { return f.printers && f.printers[g]; }); if (!c)
            throw new Error("Couldn't find plugin for AST format \"".concat(g, "\"")); return c; }
        function d(y, g) { var c = t.basename(y).toLowerCase(), E = a({ plugins: g }).languages.filter(function (_) { return _.since !== null; }).find(function (_) { return _.extensions && _.extensions.some(function (w) { return c.endsWith(w); }) || _.filenames && _.filenames.some(function (w) { return w.toLowerCase() === c; }); }); return E && E.parsers[0]; }
        r.exports = { normalize: l, hiddenDefaults: i, inferParser: d };
    } }), _m = te({ "src/main/massage-ast.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a, n) {
            var e_27, _b;
            if (Array.isArray(s))
                return s.map(function (p) { return t(p, a, n); }).filter(Boolean);
            if (!s || typeof s != "object")
                return s;
            var u = a.printer.massageAstNode, i;
            u && u.ignoredProperties ? i = u.ignoredProperties : i = new Set;
            var l = {};
            try {
                for (var _h = __values(Object.entries(s)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), p = _k[0], d = _k[1];
                    !i.has(p) && typeof d != "function" && (l[p] = t(d, a, s));
                }
            }
            catch (e_27_1) { e_27 = { error: e_27_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_27) throw e_27.error; }
            }
            if (u) {
                var p = u(s, l, n);
                if (p === null)
                    return;
                if (p)
                    return p;
            }
            return l;
        }
        r.exports = t;
    } }), Yt = te({ "scripts/build/shims/assert.cjs": function (e, r) {
        "use strict";
        ne();
        var t = function () { };
        t.ok = t, t.strictEqual = t, r.exports = t;
    } }), et = te({ "src/main/comments.js": function (e, r) {
        "use strict";
        ne();
        var t = Yt(), _b = qe().builders, s = _b.line, a = _b.hardline, n = _b.breakParent, u = _b.indent, i = _b.lineSuffix, l = _b.join, p = _b.cursor, _h = Ue(), d = _h.hasNewline, y = _h.skipNewline, g = _h.skipSpaces, c = _h.isPreviousLineEmpty, f = _h.addLeadingComment, E = _h.addDanglingComment, _ = _h.addTrailingComment, w = new WeakMap;
        function F(k, M, R) {
            var e_28, _b;
            if (!k)
                return;
            var q = M.printer, J = M.locStart, L = M.locEnd;
            if (R) {
                if (q.canAttachComment && q.canAttachComment(k)) {
                    var V = void 0;
                    for (V = R.length - 1; V >= 0 && !(J(R[V]) <= J(k) && L(R[V]) <= L(k)); --V)
                        ;
                    R.splice(V + 1, 0, k);
                    return;
                }
            }
            else if (w.has(k))
                return w.get(k);
            var Q = q.getCommentChildNodes && q.getCommentChildNodes(k, M) || typeof k == "object" && Object.entries(k).filter(function (V) { var _b = __read(V, 1), j = _b[0]; return j !== "enclosingNode" && j !== "precedingNode" && j !== "followingNode" && j !== "tokens" && j !== "comments" && j !== "parent"; }).map(function (V) { var _b = __read(V, 2), j = _b[1]; return j; });
            if (Q) {
                R || (R = [], w.set(k, R));
                try {
                    for (var Q_1 = __values(Q), Q_1_1 = Q_1.next(); !Q_1_1.done; Q_1_1 = Q_1.next()) {
                        var V = Q_1_1.value;
                        F(V, M, R);
                    }
                }
                catch (e_28_1) { e_28 = { error: e_28_1 }; }
                finally {
                    try {
                        if (Q_1_1 && !Q_1_1.done && (_b = Q_1.return)) _b.call(Q_1);
                    }
                    finally { if (e_28) throw e_28.error; }
                }
                return R;
            }
        }
        function N(k, M, R, q) { var J = R.locStart, L = R.locEnd, Q = J(M), V = L(M), j = F(k, R), Y, ie, ee = 0, ce = j.length; for (; ee < ce;) {
            var W = ee + ce >> 1, K = j[W], de = J(K), ue = L(K);
            if (de <= Q && V <= ue)
                return N(K, M, R, K);
            if (ue <= Q) {
                Y = K, ee = W + 1;
                continue;
            }
            if (V <= de) {
                ie = K, ce = W;
                continue;
            }
            throw new Error("Comment location overlaps with node location");
        } if (q && q.type === "TemplateLiteral") {
            var W = q.quasis, K = C(W, M, R);
            Y && C(W, Y, R) !== K && (Y = null), ie && C(W, ie, R) !== K && (ie = null);
        } return { enclosingNode: q, precedingNode: Y, followingNode: ie }; }
        var x = function () { return !1; };
        function I(k, M, R, q) {
            var e_29, _b, e_30, _h;
            if (!Array.isArray(k))
                return;
            var J = [], L = q.locStart, Q = q.locEnd, _j = q.printer.handleComments, V = _j === void 0 ? {} : _j, j = V.avoidAstMutation, _k = V.ownLine, Y = _k === void 0 ? x : _k, _q = V.endOfLine, ie = _q === void 0 ? x : _q, _v = V.remaining, ee = _v === void 0 ? x : _v, ce = k.map(function (W, K) { return Object.assign(Object.assign({}, N(M, W, q)), {}, { comment: W, text: R, options: q, ast: M, isLastComment: k.length - 1 === K }); });
            try {
                for (var _w = __values(ce.entries()), _x = _w.next(); !_x.done; _x = _w.next()) {
                    var _y = __read(_x.value, 2), W = _y[0], K = _y[1];
                    var de = K.comment, ue = K.precedingNode, Fe = K.enclosingNode, z = K.followingNode, U = K.text, Z = K.options, se = K.ast, fe = K.isLastComment;
                    if (Z.parser === "json" || Z.parser === "json5" || Z.parser === "__js_expression" || Z.parser === "__vue_expression" || Z.parser === "__vue_ts_expression") {
                        if (L(de) - L(se) <= 0) {
                            f(se, de);
                            continue;
                        }
                        if (Q(de) - Q(se) >= 0) {
                            _(se, de);
                            continue;
                        }
                    }
                    var ge = void 0;
                    if (j ? ge = [K] : (de.enclosingNode = Fe, de.precedingNode = ue, de.followingNode = z, ge = [de, U, Z, se, fe]), $(U, Z, ce, W))
                        de.placement = "ownLine", Y.apply(void 0, __spreadArray([], __read(ge), false)) || (z ? f(z, de) : ue ? _(ue, de) : E(Fe || se, de));
                    else if (D(U, Z, ce, W))
                        de.placement = "endOfLine", ie.apply(void 0, __spreadArray([], __read(ge), false)) || (ue ? _(ue, de) : z ? f(z, de) : E(Fe || se, de));
                    else if (de.placement = "remaining", !ee.apply(void 0, __spreadArray([], __read(ge), false)))
                        if (ue && z) {
                            var he = J.length;
                            he > 0 && J[he - 1].followingNode !== z && T(J, U, Z), J.push(K);
                        }
                        else
                            ue ? _(ue, de) : z ? f(z, de) : E(Fe || se, de);
                }
            }
            catch (e_29_1) { e_29 = { error: e_29_1 }; }
            finally {
                try {
                    if (_x && !_x.done && (_b = _w.return)) _b.call(_w);
                }
                finally { if (e_29) throw e_29.error; }
            }
            if (T(J, R, q), !j)
                try {
                    for (var k_1 = __values(k), k_1_1 = k_1.next(); !k_1_1.done; k_1_1 = k_1.next()) {
                        var W = k_1_1.value;
                        delete W.precedingNode, delete W.enclosingNode, delete W.followingNode;
                    }
                }
                catch (e_30_1) { e_30 = { error: e_30_1 }; }
                finally {
                    try {
                        if (k_1_1 && !k_1_1.done && (_h = k_1.return)) _h.call(k_1);
                    }
                    finally { if (e_30) throw e_30.error; }
                }
        }
        var P = function (k) { return !/[\S\n\u2028\u2029]/.test(k); };
        function $(k, M, R, q) { var _b = R[q], J = _b.comment, L = _b.precedingNode, Q = M.locStart, V = M.locEnd, j = Q(J); if (L)
            for (var Y = q - 1; Y >= 0; Y--) {
                var _h = R[Y], ie = _h.comment, ee = _h.precedingNode;
                if (ee !== L || !P(k.slice(V(ie), j)))
                    break;
                j = Q(ie);
            } return d(k, j, { backwards: !0 }); }
        function D(k, M, R, q) { var _b = R[q], J = _b.comment, L = _b.followingNode, Q = M.locStart, V = M.locEnd, j = V(J); if (L)
            for (var Y = q + 1; Y < R.length; Y++) {
                var _h = R[Y], ie = _h.comment, ee = _h.followingNode;
                if (ee !== L || !P(k.slice(j, Q(ie))))
                    break;
                j = V(ie);
            } return d(k, j); }
        function T(k, M, R) {
            var e_31, _b, e_32, _h;
            var q = k.length;
            if (q === 0)
                return;
            var _j = k[0], J = _j.precedingNode, L = _j.followingNode, Q = _j.enclosingNode, V = R.printer.getGapRegex && R.printer.getGapRegex(Q) || /^[\s(]*$/, j = R.locStart(L), Y;
            for (Y = q; Y > 0; --Y) {
                var _k = k[Y - 1], ie = _k.comment, ee = _k.precedingNode, ce = _k.followingNode;
                t.strictEqual(ee, J), t.strictEqual(ce, L);
                var W = M.slice(R.locEnd(ie), j);
                if (V.test(W))
                    j = R.locStart(ie);
                else
                    break;
            }
            try {
                for (var _q = __values(k.entries()), _v = _q.next(); !_v.done; _v = _q.next()) {
                    var _w = __read(_v.value, 2), ie = _w[0], ee = _w[1].comment;
                    ie < Y ? _(J, ee) : f(L, ee);
                }
            }
            catch (e_31_1) { e_31 = { error: e_31_1 }; }
            finally {
                try {
                    if (_v && !_v.done && (_b = _q.return)) _b.call(_q);
                }
                finally { if (e_31) throw e_31.error; }
            }
            try {
                for (var _x = __values([J, L]), _y = _x.next(); !_y.done; _y = _x.next()) {
                    var ie = _y.value;
                    ie.comments && ie.comments.length > 1 && ie.comments.sort(function (ee, ce) { return R.locStart(ee) - R.locStart(ce); });
                }
            }
            catch (e_32_1) { e_32 = { error: e_32_1 }; }
            finally {
                try {
                    if (_y && !_y.done && (_h = _x.return)) _h.call(_x);
                }
                finally { if (e_32) throw e_32.error; }
            }
            k.length = 0;
        }
        function m(k, M) { var R = k.getValue(); return R.printed = !0, M.printer.printComment(k, M); }
        function C(k, M, R) { var q = R.locStart(M) - 1; for (var J = 1; J < k.length; ++J)
            if (q < R.locStart(k[J]))
                return J - 1; return 0; }
        function o(k, M) { var R = k.getValue(), q = [m(k, M)], J = M.printer, L = M.originalText, Q = M.locStart, V = M.locEnd; if (J.isBlockComment && J.isBlockComment(R)) {
            var ie = d(L, V(R)) ? d(L, Q(R), { backwards: !0 }) ? a : s : " ";
            q.push(ie);
        }
        else
            q.push(a); var Y = y(L, g(L, V(R))); return Y !== !1 && d(L, Y) && q.push(a), q; }
        function h(k, M) { var R = k.getValue(), q = m(k, M), J = M.printer, L = M.originalText, Q = M.locStart, V = J.isBlockComment && J.isBlockComment(R); if (d(L, Q(R), { backwards: !0 })) {
            var Y = c(L, R, Q);
            return i([a, Y ? a : "", q]);
        } var j = [" ", q]; return V || (j = [i(j), n]), j; }
        function v(k, M, R, q) { var J = [], L = k.getValue(); return !L || !L.comments || (k.each(function () { var Q = k.getValue(); !Q.leading && !Q.trailing && (!q || q(Q)) && J.push(m(k, M)); }, "comments"), J.length === 0) ? "" : R ? l(a, J) : u([a, l(a, J)]); }
        function S(k, M, R) { var q = k.getValue(); if (!q)
            return {}; var J = q.comments || []; R && (J = J.filter(function (j) { return !R.has(j); })); var L = q === M.cursorNode; if (J.length === 0) {
            var j = L ? p : "";
            return { leading: j, trailing: j };
        } var Q = [], V = []; return k.each(function () { var j = k.getValue(); if (R && R.has(j))
            return; var Y = j.leading, ie = j.trailing; Y ? Q.push(o(k, M)) : ie && V.push(h(k, M)); }, "comments"), L && (Q.unshift(p), V.push(p)), { leading: Q, trailing: V }; }
        function b(k, M, R, q) { var _b = S(k, R, q), J = _b.leading, L = _b.trailing; return !J && !L ? M : [J, M, L]; }
        function B(k) {
            var e_33, _b;
            if (k)
                try {
                    for (var k_2 = __values(k), k_2_1 = k_2.next(); !k_2_1.done; k_2_1 = k_2.next()) {
                        var M = k_2_1.value;
                        if (!M.printed)
                            throw new Error('Comment "' + M.value.trim() + '" was not printed. Please report this error!');
                        delete M.printed;
                    }
                }
                catch (e_33_1) { e_33 = { error: e_33_1 }; }
                finally {
                    try {
                        if (k_2_1 && !k_2_1.done && (_b = k_2.return)) _b.call(k_2);
                    }
                    finally { if (e_33) throw e_33.error; }
                }
        }
        r.exports = { attach: I, printComments: b, printCommentsSeparately: S, printDanglingComments: v, getSortedChildNodes: F, ensureAllCommentsPrinted: B };
    } }), Pm = te({ "src/common/ast-path.js": function (e, r) {
        "use strict";
        ne();
        var t = lt();
        function s(u, i) { var l = a(u.stack, i); return l === -1 ? null : u.stack[l]; }
        function a(u, i) { for (var l = u.length - 1; l >= 0; l -= 2) {
            var p = u[l];
            if (p && !Array.isArray(p) && --i < 0)
                return l;
        } return -1; }
        var n = /** @class */ (function () {
            function n(u) {
                this.stack = [u];
            }
            n.prototype.getName = function () { var u = this.stack, i = u.length; return i > 1 ? u[i - 2] : null; };
            n.prototype.getValue = function () { return t(this.stack); };
            n.prototype.getNode = function () { var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0; return s(this, u); };
            n.prototype.getParentNode = function () { var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0; return s(this, u + 1); };
            n.prototype.call = function (u) {
                var e_34, _b;
                var i = this.stack, l = i.length, p = t(i);
                for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
                    y[g - 1] = arguments[g];
                try {
                    for (var y_1 = __values(y), y_1_1 = y_1.next(); !y_1_1.done; y_1_1 = y_1.next()) {
                        var f = y_1_1.value;
                        p = p[f], i.push(f, p);
                    }
                }
                catch (e_34_1) { e_34 = { error: e_34_1 }; }
                finally {
                    try {
                        if (y_1_1 && !y_1_1.done && (_b = y_1.return)) _b.call(y_1);
                    }
                    finally { if (e_34) throw e_34.error; }
                }
                var c = u(this);
                return i.length = l, c;
            };
            n.prototype.callParent = function (u) {
                var _b;
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = a(this.stack, i + 1), p = this.stack.splice(l + 1), d = u(this);
                return (_b = this.stack).push.apply(_b, __spreadArray([], __read(p), false)), d;
            };
            n.prototype.each = function (u) {
                var e_35, _b;
                var i = this.stack, l = i.length, p = t(i);
                for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
                    y[g - 1] = arguments[g];
                try {
                    for (var y_2 = __values(y), y_2_1 = y_2.next(); !y_2_1.done; y_2_1 = y_2.next()) {
                        var c = y_2_1.value;
                        p = p[c], i.push(c, p);
                    }
                }
                catch (e_35_1) { e_35 = { error: e_35_1 }; }
                finally {
                    try {
                        if (y_2_1 && !y_2_1.done && (_b = y_2.return)) _b.call(y_2);
                    }
                    finally { if (e_35) throw e_35.error; }
                }
                for (var c = 0; c < p.length; ++c)
                    i.push(c, p[c]), u(this, c, p), i.length -= 2;
                i.length = l;
            };
            n.prototype.map = function (u) { var i = []; for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
                p[d - 1] = arguments[d]; return this.each.apply(this, __spreadArray([function (y, g, c) { i[g] = u(y, g, c); }], __read(p), false)), i; };
            n.prototype.try = function (u) { var i = this.stack, l = __spreadArray([], __read(i), false); try {
                return u();
            }
            finally {
                i.length = 0, i.push.apply(i, __spreadArray([], __read(l), false));
            } };
            n.prototype.match = function () {
                var e_36, _b;
                var u = this.stack.length - 1, i = null, l = this.stack[u--];
                for (var p = arguments.length, d = new Array(p), y = 0; y < p; y++)
                    d[y] = arguments[y];
                try {
                    for (var d_1 = __values(d), d_1_1 = d_1.next(); !d_1_1.done; d_1_1 = d_1.next()) {
                        var g = d_1_1.value;
                        if (l === void 0)
                            return !1;
                        var c = null;
                        if (typeof i == "number" && (c = i, i = this.stack[u--], l = this.stack[u--]), g && !g(l, i, c))
                            return !1;
                        i = this.stack[u--], l = this.stack[u--];
                    }
                }
                catch (e_36_1) { e_36 = { error: e_36_1 }; }
                finally {
                    try {
                        if (d_1_1 && !d_1_1.done && (_b = d_1.return)) _b.call(d_1);
                    }
                    finally { if (e_36) throw e_36.error; }
                }
                return !0;
            };
            n.prototype.findAncestor = function (u) { var i = this.stack.length - 1, l = null, p = this.stack[i--]; for (; p;) {
                var d = null;
                if (typeof l == "number" && (d = l, l = this.stack[i--], p = this.stack[i--]), l !== null && u(p, l, d))
                    return p;
                l = this.stack[i--], p = this.stack[i--];
            } };
            return n;
        }());
        r.exports = n;
    } }), Im = te({ "src/main/multiparser.js": function (e, r) {
        "use strict";
        ne();
        var t = qe().utils.stripTrailingHardline, s = Ka().normalize, a = et();
        function n(i, l, p, d) { if (p.printer.embed && p.embeddedLanguageFormatting === "auto")
            return p.printer.embed(i, l, function (y, g, c) { return u(y, g, p, d, c); }, p); }
        function u(i, l, p, d) { var _b = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}).stripTrailingHardline, y = _b === void 0 ? !1 : _b, g = s(Object.assign(Object.assign(Object.assign({}, p), l), {}, { parentParser: p.parser, originalText: i }), { passThrough: !0 }), c = Qn().parse(i, g), f = c.ast; i = c.text; var E = f.comments; delete f.comments, a.attach(E, f, i, g), g[Symbol.for("comments")] = E || [], g[Symbol.for("tokens")] = f.tokens || []; var _ = d(f, g); return a.ensureAllCommentsPrinted(E), y ? typeof _ == "string" ? _.replace(/(?:\r?\n)*$/, "") : t(_) : _; }
        r.exports = { printSubtree: n };
    } }), km = te({ "src/main/ast-to-doc.js": function (e, r) {
        "use strict";
        ne();
        var t = Pm(), _b = qe(), _h = _b.builders, s = _h.hardline, a = _h.addAlignmentToDoc, n = _b.utils.propagateBreaks, u = et().printComments, i = Im();
        function l(y, g) { var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, f = g.printer; f.preprocess && (y = f.preprocess(y, g)); var E = new Map, _ = new t(y), w = F(); return c > 0 && (w = a([s, w], c, g.tabWidth)), n(w), w; function F(x, I) { return x === void 0 || x === _ ? N(I) : Array.isArray(x) ? _.call.apply(_, __spreadArray([function () { return N(I); }], __read(x), false)) : _.call(function () { return N(I); }, x); } function N(x) { var I = _.getValue(), P = I && typeof I == "object" && x === void 0; if (P && E.has(I))
            return E.get(I); var $ = d(_, g, F, x); return P && E.set(I, $), $; } }
        function p(y, g) {
            var e_37, _b;
            var _h = g, c = _h.originalText, _j = Symbol.for("comments"), f = _h[_j], E = _h.locStart, _ = _h.locEnd, w = E(y), F = _(y), N = new Set;
            try {
                for (var f_1 = __values(f), f_1_1 = f_1.next(); !f_1_1.done; f_1_1 = f_1.next()) {
                    var x = f_1_1.value;
                    E(x) >= w && _(x) <= F && (x.printed = !0, N.add(x));
                }
            }
            catch (e_37_1) { e_37 = { error: e_37_1 }; }
            finally {
                try {
                    if (f_1_1 && !f_1_1.done && (_b = f_1.return)) _b.call(f_1);
                }
                finally { if (e_37) throw e_37.error; }
            }
            return { doc: c.slice(w, F), printedComments: N };
        }
        function d(y, g, c, f) {
            var _b;
            var E = y.getValue(), _ = g.printer, w, F;
            if (_.hasPrettierIgnore && _.hasPrettierIgnore(y))
                (_b = p(E, g), w = _b.doc, F = _b.printedComments);
            else {
                if (E)
                    try {
                        w = i.printSubtree(y, c, g, l);
                    }
                    catch (N) {
                        if (globalThis.PRETTIER_DEBUG)
                            throw N;
                    }
                w || (w = _.print(y, g, c, f));
            }
            return (!_.willPrintOwnComments || !_.willPrintOwnComments(y, g)) && (w = u(y, w, g, F)), w;
        }
        r.exports = l;
    } }), Lm = te({ "src/main/range-util.js": function (e, r) {
        "use strict";
        ne();
        var t = Yt(), s = et(), a = function (f) { var E = f.parser; return E === "json" || E === "json5" || E === "json-stringify"; };
        function n(f, E) { var _ = __spreadArray([f.node], __read(f.parentNodes), false), w = new Set(__spreadArray([E.node], __read(E.parentNodes), false)); return _.find(function (F) { return d.has(F.type) && w.has(F); }); }
        function u(f) { var E = f.length - 1; for (;;) {
            var _ = f[E];
            if (_ && (_.type === "Program" || _.type === "File"))
                E--;
            else
                break;
        } return f.slice(0, E + 1); }
        function i(f, E, _) {
            var e_38, _b, e_39, _h;
            var w = _.locStart, F = _.locEnd, N = f.node, x = E.node;
            if (N === x)
                return { startNode: N, endNode: x };
            var I = w(f.node);
            try {
                for (var _j = __values(u(E.parentNodes)), _k = _j.next(); !_k.done; _k = _j.next()) {
                    var $ = _k.value;
                    if (w($) >= I)
                        x = $;
                    else
                        break;
                }
            }
            catch (e_38_1) { e_38 = { error: e_38_1 }; }
            finally {
                try {
                    if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                }
                finally { if (e_38) throw e_38.error; }
            }
            var P = F(E.node);
            try {
                for (var _q = __values(u(f.parentNodes)), _v = _q.next(); !_v.done; _v = _q.next()) {
                    var $ = _v.value;
                    if (F($) <= P)
                        N = $;
                    else
                        break;
                    if (N === x)
                        break;
                }
            }
            catch (e_39_1) { e_39 = { error: e_39_1 }; }
            finally {
                try {
                    if (_v && !_v.done && (_h = _q.return)) _h.call(_q);
                }
                finally { if (e_39) throw e_39.error; }
            }
            return { startNode: N, endNode: x };
        }
        function l(f, E, _, w) {
            var e_40, _b;
            var F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], N = arguments.length > 5 ? arguments[5] : void 0, x = _.locStart, I = _.locEnd, P = x(f), $ = I(f);
            if (!(E > $ || E < P || N === "rangeEnd" && E === P || N === "rangeStart" && E === $)) {
                try {
                    for (var _h = __values(s.getSortedChildNodes(f, _)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var D = _j.value;
                        var T = l(D, E, _, w, __spreadArray([f], __read(F), false), N);
                        if (T)
                            return T;
                    }
                }
                catch (e_40_1) { e_40 = { error: e_40_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                    }
                    finally { if (e_40) throw e_40.error; }
                }
                if (!w || w(f, F[0]))
                    return { node: f, parentNodes: F };
            }
        }
        function p(f, E) { return E !== "DeclareExportDeclaration" && f !== "TypeParameterDeclaration" && (f === "Directive" || f === "TypeAlias" || f === "TSExportAssignment" || f.startsWith("Declare") || f.startsWith("TSDeclare") || f.endsWith("Statement") || f.endsWith("Declaration")); }
        var d = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), y = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function g(f, E, _) { if (!E)
            return !1; switch (f.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree": return p(E.type, _ && _.type);
            case "json":
            case "json5":
            case "json-stringify": return d.has(E.type);
            case "graphql": return y.has(E.kind);
            case "vue": return E.tag !== "root";
        } return !1; }
        function c(f, E, _) {
            var _b;
            var w = E.rangeStart, F = E.rangeEnd, N = E.locStart, x = E.locEnd;
            t.ok(F > w);
            var I = f.slice(w, F).search(/\S/), P = I === -1;
            if (!P)
                for (w += I; F > w && !/\S/.test(f[F - 1]); --F)
                    ;
            var $ = l(_, w, E, function (C, o) { return g(E, C, o); }, [], "rangeStart"), D = P ? $ : l(_, F, E, function (C) { return g(E, C); }, [], "rangeEnd");
            if (!$ || !D)
                return { rangeStart: 0, rangeEnd: 0 };
            var T, m;
            if (a(E)) {
                var C = n($, D);
                T = C, m = C;
            }
            else
                (_b = i($, D, E), T = _b.startNode, m = _b.endNode);
            return { rangeStart: Math.min(N(T), N(m)), rangeEnd: Math.max(x(T), x(m)) };
        }
        r.exports = { calculateRange: c, findNodeAtOffset: l };
    } }), Om = te({ "src/main/core.js": function (e, r) {
        "use strict";
        ne();
        var t = vD().diffArrays, _b = qe(), s = _b.printer.printDocToString, a = _b.debug.printDocToDebug, n = Ue().getAlignmentSize, _h = Hn(), u = _h.guessEndOfLine, i = _h.convertEndOfLineToChars, l = _h.countEndOfLineChars, p = _h.normalizeEndOfLine, d = Ka().normalize, y = _m(), g = et(), c = Qn(), f = km(), E = Lm(), _ = "\uFEFF", w = Symbol("cursor");
        function F(m, C, o) { var h = C.comments; return h && (delete C.comments, g.attach(h, C, m, o)), o[Symbol.for("comments")] = h || [], o[Symbol.for("tokens")] = C.tokens || [], o.originalText = m, h; }
        function N(m, C) {
            var e_41, _b;
            var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            if (!m || m.trim().length === 0)
                return { formatted: "", cursorOffset: -1, comments: [] };
            var _h = c.parse(m, C), h = _h.ast, v = _h.text;
            if (C.cursorOffset >= 0) {
                var k = E.findNodeAtOffset(h, C.cursorOffset, C);
                k && k.node && (C.cursorNode = k.node);
            }
            var S = F(v, h, C), b = f(h, C, o), B = s(b, C);
            if (g.ensureAllCommentsPrinted(S), o > 0) {
                var k = B.formatted.trim();
                B.cursorNodeStart !== void 0 && (B.cursorNodeStart -= B.formatted.indexOf(k)), B.formatted = k + i(C.endOfLine);
            }
            if (C.cursorOffset >= 0) {
                var k = void 0, M = void 0, R = void 0, q = void 0, J = void 0;
                if (C.cursorNode && B.cursorNodeText ? (k = C.locStart(C.cursorNode), M = v.slice(k, C.locEnd(C.cursorNode)), R = C.cursorOffset - k, q = B.cursorNodeStart, J = B.cursorNodeText) : (k = 0, M = v, R = C.cursorOffset, q = 0, J = B.formatted), M === J)
                    return { formatted: B.formatted, cursorOffset: q + R, comments: S };
                var L = __spreadArray([], __read(M), false);
                L.splice(R, 0, w);
                var Q = __spreadArray([], __read(J), false), V = t(L, Q), j = q;
                try {
                    for (var V_1 = __values(V), V_1_1 = V_1.next(); !V_1_1.done; V_1_1 = V_1.next()) {
                        var Y = V_1_1.value;
                        if (Y.removed) {
                            if (Y.value.includes(w))
                                break;
                        }
                        else
                            j += Y.count;
                    }
                }
                catch (e_41_1) { e_41 = { error: e_41_1 }; }
                finally {
                    try {
                        if (V_1_1 && !V_1_1.done && (_b = V_1.return)) _b.call(V_1);
                    }
                    finally { if (e_41) throw e_41.error; }
                }
                return { formatted: B.formatted, cursorOffset: j, comments: S };
            }
            return { formatted: B.formatted, cursorOffset: -1, comments: S };
        }
        function x(m, C) {
            var _b = c.parse(m, C), o = _b.ast, h = _b.text, _h = E.calculateRange(h, C, o), v = _h.rangeStart, S = _h.rangeEnd, b = h.slice(v, S), B = Math.min(v, h.lastIndexOf("\n", v) + 1), k = h.slice(B, v).match(/^\s*/)[0], M = n(k, C.tabWidth), R = N(b, Object.assign(Object.assign({}, C), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: C.cursorOffset > v && C.cursorOffset <= S ? C.cursorOffset - v : -1, endOfLine: "lf" }), M), q = R.formatted.trimEnd(), J = C.cursorOffset;
            J > S ? J += q.length - b.length : R.cursorOffset >= 0 && (J = R.cursorOffset + v);
            var L = h.slice(0, v) + q + h.slice(S);
            if (C.endOfLine !== "lf") {
                var Q = i(C.endOfLine);
                J >= 0 && Q === "\r\n" && (J += l(L.slice(0, J), "\n")), L = L.replace(/\n/g, Q);
            }
            return { formatted: L, cursorOffset: J, comments: R.comments };
        }
        function I(m, C, o) { return typeof C != "number" || Number.isNaN(C) || C < 0 || C > m.length ? o : C; }
        function P(m, C) { var o = C.cursorOffset, h = C.rangeStart, v = C.rangeEnd; return o = I(m, o, -1), h = I(m, h, 0), v = I(m, v, m.length), Object.assign(Object.assign({}, C), {}, { cursorOffset: o, rangeStart: h, rangeEnd: v }); }
        function $(m, C) {
            var _b = P(m, C), o = _b.cursorOffset, h = _b.rangeStart, v = _b.rangeEnd, S = _b.endOfLine, b = m.charAt(0) === _;
            if (b && (m = m.slice(1), o--, h--, v--), S === "auto" && (S = u(m)), m.includes("\r")) {
                var B = function (k) { return l(m.slice(0, Math.max(k, 0)), "\r\n"); };
                o -= B(o), h -= B(h), v -= B(v), m = p(m);
            }
            return { hasBOM: b, text: m, options: P(m, Object.assign(Object.assign({}, C), {}, { cursorOffset: o, rangeStart: h, rangeEnd: v, endOfLine: S })) };
        }
        function D(m, C) { var o = c.resolveParser(C); return !o.hasPragma || o.hasPragma(m); }
        function T(m, C) { var _b = $(m, d(C)), o = _b.hasBOM, h = _b.text, v = _b.options; if (v.rangeStart >= v.rangeEnd && h !== "" || v.requirePragma && !D(h, v))
            return { formatted: m, cursorOffset: C.cursorOffset, comments: [] }; var S; return v.rangeStart > 0 || v.rangeEnd < h.length ? S = x(h, v) : (!v.requirePragma && v.insertPragma && v.printer.insertPragma && !D(h, v) && (h = v.printer.insertPragma(h)), S = N(h, v)), o && (S.formatted = _ + S.formatted, S.cursorOffset >= 0 && S.cursorOffset++), S; }
        r.exports = { formatWithCursor: T, parse: function (m, C, o) { var _b = $(m, d(C)), h = _b.text, v = _b.options, S = c.parse(h, v); return o && (S.ast = y(S.ast, v)), S; }, formatAST: function (m, C) { C = d(C); var o = f(m, C); return s(o, C); }, formatDoc: function (m, C) { return T(a(m), Object.assign(Object.assign({}, C), {}, { parser: "__js_expression" })).formatted; }, printToDoc: function (m, C) { C = d(C); var _b = c.parse(m, C), o = _b.ast, h = _b.text; return F(h, o, C), f(o, C); }, printDocToString: function (m, C) { return s(m, d(C)); } };
    } }), jm = te({ "src/common/util-shared.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.getMaxContinuousCount, s = _b.getStringWidth, a = _b.getAlignmentSize, n = _b.getIndentSize, u = _b.skip, i = _b.skipWhitespace, l = _b.skipSpaces, p = _b.skipNewline, d = _b.skipToLineEnd, y = _b.skipEverythingButNewLine, g = _b.skipInlineComment, c = _b.skipTrailingComment, f = _b.hasNewline, E = _b.hasNewlineInRange, _ = _b.hasSpaces, w = _b.isNextLineEmpty, F = _b.isNextLineEmptyAfterIndex, N = _b.isPreviousLineEmpty, x = _b.getNextNonSpaceNonCommentCharacterIndex, I = _b.makeString, P = _b.addLeadingComment, $ = _b.addDanglingComment, D = _b.addTrailingComment;
        r.exports = { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: d, skipEverythingButNewLine: y, skipInlineComment: g, skipTrailingComment: c, hasNewline: f, hasNewlineInRange: E, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: F, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: I, addLeadingComment: P, addDanglingComment: $, addTrailingComment: D };
    } }), wt = te({ "src/utils/create-language.js": function (e, r) {
        "use strict";
        ne(), r.exports = function (t, s) { var a = t.languageId, n = $n(t, pD); return Object.assign(Object.assign({ linguistLanguageId: a }, n), s(t)); };
    } }), qm = te({ "node_modules/esutils/lib/ast.js": function (e, r) { ne(), function () {
        "use strict";
        function t(l) { if (l == null)
            return !1; switch (l.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression": return !0;
        } return !1; }
        function s(l) { if (l == null)
            return !1; switch (l.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement": return !0;
        } return !1; }
        function a(l) { if (l == null)
            return !1; switch (l.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement": return !0;
        } return !1; }
        function n(l) { return a(l) || l != null && l.type === "FunctionDeclaration"; }
        function u(l) { switch (l.type) {
            case "IfStatement": return l.alternate != null ? l.alternate : l.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement": return l.body;
        } return null; }
        function i(l) { var p; if (l.type !== "IfStatement" || l.alternate == null)
            return !1; p = l.consequent; do {
            if (p.type === "IfStatement" && p.alternate == null)
                return !0;
            p = u(p);
        } while (p); return !1; }
        r.exports = { isExpression: t, isStatement: a, isIterationStatement: s, isSourceElement: n, isProblematicIfStatement: i, trailingStatement: u };
    }(); } }), Ya = te({ "node_modules/esutils/lib/code.js": function (e, r) { ne(), function () {
        "use strict";
        var t, s, a, n, u, i;
        s = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
        function l(F) { return 48 <= F && F <= 57; }
        function p(F) { return 48 <= F && F <= 57 || 97 <= F && F <= 102 || 65 <= F && F <= 70; }
        function d(F) { return F >= 48 && F <= 55; }
        a = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
        function y(F) { return F === 32 || F === 9 || F === 11 || F === 12 || F === 160 || F >= 5760 && a.indexOf(F) >= 0; }
        function g(F) { return F === 10 || F === 13 || F === 8232 || F === 8233; }
        function c(F) { if (F <= 65535)
            return String.fromCharCode(F); var N = String.fromCharCode(Math.floor((F - 65536) / 1024) + 55296), x = String.fromCharCode((F - 65536) % 1024 + 56320); return N + x; }
        for (n = new Array(128), i = 0; i < 128; ++i)
            n[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
        for (u = new Array(128), i = 0; i < 128; ++i)
            u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
        function f(F) { return F < 128 ? n[F] : s.NonAsciiIdentifierStart.test(c(F)); }
        function E(F) { return F < 128 ? u[F] : s.NonAsciiIdentifierPart.test(c(F)); }
        function _(F) { return F < 128 ? n[F] : t.NonAsciiIdentifierStart.test(c(F)); }
        function w(F) { return F < 128 ? u[F] : t.NonAsciiIdentifierPart.test(c(F)); }
        r.exports = { isDecimalDigit: l, isHexDigit: p, isOctalDigit: d, isWhiteSpace: y, isLineTerminator: g, isIdentifierStartES5: f, isIdentifierPartES5: E, isIdentifierStartES6: _, isIdentifierPartES6: w };
    }(); } }), Mm = te({ "node_modules/esutils/lib/keyword.js": function (e, r) { ne(), function () {
        "use strict";
        var t = Ya();
        function s(f) { switch (f) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let": return !0;
            default: return !1;
        } }
        function a(f, E) { return !E && f === "yield" ? !1 : n(f, E); }
        function n(f, E) { if (E && s(f))
            return !0; switch (f.length) {
            case 2: return f === "if" || f === "in" || f === "do";
            case 3: return f === "var" || f === "for" || f === "new" || f === "try";
            case 4: return f === "this" || f === "else" || f === "case" || f === "void" || f === "with" || f === "enum";
            case 5: return f === "while" || f === "break" || f === "catch" || f === "throw" || f === "const" || f === "yield" || f === "class" || f === "super";
            case 6: return f === "return" || f === "typeof" || f === "delete" || f === "switch" || f === "export" || f === "import";
            case 7: return f === "default" || f === "finally" || f === "extends";
            case 8: return f === "function" || f === "continue" || f === "debugger";
            case 10: return f === "instanceof";
            default: return !1;
        } }
        function u(f, E) { return f === "null" || f === "true" || f === "false" || a(f, E); }
        function i(f, E) { return f === "null" || f === "true" || f === "false" || n(f, E); }
        function l(f) { return f === "eval" || f === "arguments"; }
        function p(f) { var E, _, w; if (f.length === 0 || (w = f.charCodeAt(0), !t.isIdentifierStartES5(w)))
            return !1; for (E = 1, _ = f.length; E < _; ++E)
            if (w = f.charCodeAt(E), !t.isIdentifierPartES5(w))
                return !1; return !0; }
        function d(f, E) { return (f - 55296) * 1024 + (E - 56320) + 65536; }
        function y(f) { var E, _, w, F, N; if (f.length === 0)
            return !1; for (N = t.isIdentifierStartES6, E = 0, _ = f.length; E < _; ++E) {
            if (w = f.charCodeAt(E), 55296 <= w && w <= 56319) {
                if (++E, E >= _ || (F = f.charCodeAt(E), !(56320 <= F && F <= 57343)))
                    return !1;
                w = d(w, F);
            }
            if (!N(w))
                return !1;
            N = t.isIdentifierPartES6;
        } return !0; }
        function g(f, E) { return p(f) && !u(f, E); }
        function c(f, E) { return y(f) && !i(f, E); }
        r.exports = { isKeywordES5: a, isKeywordES6: n, isReservedWordES5: u, isReservedWordES6: i, isRestrictedWord: l, isIdentifierNameES5: p, isIdentifierNameES6: y, isIdentifierES5: g, isIdentifierES6: c };
    }(); } }), Rm = te({ "node_modules/esutils/lib/utils.js": function (e) { ne(), function () {
        "use strict";
        e.ast = qm(), e.code = Ya(), e.keyword = Mm();
    }(); } }), _t = te({ "src/language-js/utils/is-block-comment.js": function (e, r) {
        "use strict";
        ne();
        var t = new Set(["Block", "CommentBlock", "MultiLine"]), s = function (a) { return t.has(a == null ? void 0 : a.type); };
        r.exports = s;
    } }), $m = te({ "src/language-js/utils/is-node-matches.js": function (e, r) {
        "use strict";
        ne();
        function t(a, n) { var u = n.split("."); for (var i = u.length - 1; i >= 0; i--) {
            var l = u[i];
            if (i === 0)
                return a.type === "Identifier" && a.name === l;
            if (a.type !== "MemberExpression" || a.optional || a.computed || a.property.type !== "Identifier" || a.property.name !== l)
                return !1;
            a = a.object;
        } }
        function s(a, n) { return n.some(function (u) { return t(a, u); }); }
        r.exports = s;
    } }), Ke = te({ "src/language-js/utils/index.js": function (e, r) {
        "use strict";
        ne();
        var t = Rm().keyword.isIdentifierNameES5, _b = Ue(), s = _b.getLast, a = _b.hasNewline, n = _b.skipWhitespace, u = _b.isNonEmptyArray, i = _b.isNextLineEmptyAfterIndex, l = _b.getStringWidth, _h = ut(), p = _h.locStart, d = _h.locEnd, y = _h.hasSameLocStart, g = _t(), c = $m(), f = "(?:(?=.)\\s)", E = new RegExp("^".concat(f, "*:")), _ = new RegExp("^".concat(f, "*::"));
        function w(O) { var me, _e; return ((me = O.extra) === null || me === void 0 ? void 0 : me.parenthesized) && g((_e = O.trailingComments) === null || _e === void 0 ? void 0 : _e[0]) && E.test(O.trailingComments[0].value); }
        function F(O) { var me = O == null ? void 0 : O[0]; return g(me) && _.test(me.value); }
        function N(O, me) { if (!O || typeof O != "object")
            return !1; if (Array.isArray(O))
            return O.some(function (He) { return N(He, me); }); var _e = me(O); return typeof _e == "boolean" ? _e : Object.values(O).some(function (He) { return N(He, me); }); }
        function x(O) { return O.type === "AssignmentExpression" || O.type === "BinaryExpression" || O.type === "LogicalExpression" || O.type === "NGPipeExpression" || O.type === "ConditionalExpression" || de(O) || ue(O) || O.type === "SequenceExpression" || O.type === "TaggedTemplateExpression" || O.type === "BindExpression" || O.type === "UpdateExpression" && !O.prefix || st(O) || O.type === "TSNonNullExpression"; }
        function I(O) { var me, _e, He, Ge, it, Qe; return O.expressions ? O.expressions[0] : (me = (_e = (He = (Ge = (it = (Qe = O.left) !== null && Qe !== void 0 ? Qe : O.test) !== null && it !== void 0 ? it : O.callee) !== null && Ge !== void 0 ? Ge : O.object) !== null && He !== void 0 ? He : O.tag) !== null && _e !== void 0 ? _e : O.argument) !== null && me !== void 0 ? me : O.expression; }
        function P(O, me) { if (me.expressions)
            return ["expressions", 0]; if (me.left)
            return ["left"]; if (me.test)
            return ["test"]; if (me.object)
            return ["object"]; if (me.callee)
            return ["callee"]; if (me.tag)
            return ["tag"]; if (me.argument)
            return ["argument"]; if (me.expression)
            return ["expression"]; throw new Error("Unexpected node has no left side."); }
        function $(O) { return O = new Set(O), function (me) { return O.has(me == null ? void 0 : me.type); }; }
        var D = $(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), T = $(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function m(O) { var me = O.getParentNode(); return O.getName() === "declaration" && T(me) ? me : null; }
        var C = $(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function o(O) { return O.type === "NumericLiteral" || O.type === "Literal" && typeof O.value == "number"; }
        function h(O) { return O.type === "UnaryExpression" && (O.operator === "+" || O.operator === "-") && o(O.argument); }
        function v(O) { return O.type === "StringLiteral" || O.type === "Literal" && typeof O.value == "string"; }
        var S = $(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), b = $(["FunctionExpression", "ArrowFunctionExpression"]);
        function B(O) { return O.type === "FunctionExpression" || O.type === "ArrowFunctionExpression" && O.body.type === "BlockStatement"; }
        function k(O) { return de(O) && O.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(O.callee.name); }
        var M = $(["JSXElement", "JSXFragment"]);
        function R(O, me) { if (O.parentParser !== "markdown" && O.parentParser !== "mdx")
            return !1; var _e = me.getNode(); if (!_e.expression || !M(_e.expression))
            return !1; var He = me.getParentNode(); return He.type === "Program" && He.body.length === 1; }
        function q(O) { return O.kind === "get" || O.kind === "set"; }
        function J(O) { return q(O) || y(O, O.value); }
        function L(O) { return (O.type === "ObjectTypeProperty" || O.type === "ObjectTypeInternalSlot") && O.value.type === "FunctionTypeAnnotation" && !O.static && !J(O); }
        function Q(O) { return (O.type === "TypeAnnotation" || O.type === "TSTypeAnnotation") && O.typeAnnotation.type === "FunctionTypeAnnotation" && !O.static && !y(O, O.typeAnnotation); }
        var V = $(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function j(O) { return ue(O) || O.type === "BindExpression" && Boolean(O.object); }
        var Y = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function ie(O) { return O ? !!((O.type === "GenericTypeAnnotation" || O.type === "TSTypeReference") && !O.typeParameters || Y.has(O.type)) : !1; }
        function ee(O) { var me = /^(?:before|after)(?:Each|All)$/; return O.callee.type === "Identifier" && me.test(O.callee.name) && O.arguments.length === 1; }
        var ce = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function W(O) { return c(O, ce); }
        function K(O, me) { if (O.type !== "CallExpression")
            return !1; if (O.arguments.length === 1) {
            if (k(O) && me && K(me))
                return b(O.arguments[0]);
            if (ee(O))
                return k(O.arguments[0]);
        }
        else if ((O.arguments.length === 2 || O.arguments.length === 3) && (O.arguments[0].type === "TemplateLiteral" || v(O.arguments[0])) && W(O.callee))
            return O.arguments[2] && !o(O.arguments[2]) ? !1 : (O.arguments.length === 2 ? b(O.arguments[1]) : B(O.arguments[1]) && ve(O.arguments[1]).length <= 1) || k(O.arguments[1]); return !1; }
        var de = $(["CallExpression", "OptionalCallExpression"]), ue = $(["MemberExpression", "OptionalMemberExpression"]);
        function Fe(O) { var me = "expressions"; O.type === "TSTemplateLiteralType" && (me = "types"); var _e = O[me]; return _e.length === 0 ? !1 : _e.every(function (He) { if (Me(He))
            return !1; if (He.type === "Identifier" || He.type === "ThisExpression")
            return !0; if (ue(He)) {
            var Ge = He;
            for (; ue(Ge);)
                if (Ge.property.type !== "Identifier" && Ge.property.type !== "Literal" && Ge.property.type !== "StringLiteral" && Ge.property.type !== "NumericLiteral" || (Ge = Ge.object, Me(Ge)))
                    return !1;
            return Ge.type === "Identifier" || Ge.type === "ThisExpression";
        } return !1; }); }
        function z(O, me) { return O === "+" || O === "-" ? O + me : me; }
        function U(O, me) { var _e = p(me), He = n(O, d(me)); return He !== !1 && O.slice(_e, _e + 2) === "/*" && O.slice(He, He + 2) === "*/"; }
        function Z(O, me) { return M(me) ? Oe(me) : Me(me, be.Leading, function (_e) { return a(O, d(_e)); }); }
        function se(O, me) { return me.parser !== "json" && v(O.key) && oe(O.key).slice(1, -1) === O.key.value && (t(O.key.value) && !(me.parser === "babel-ts" && O.type === "ClassProperty" || me.parser === "typescript" && O.type === "PropertyDefinition") || fe(O.key.value) && String(Number(O.key.value)) === O.key.value && (me.parser === "babel" || me.parser === "acorn" || me.parser === "espree" || me.parser === "meriyah" || me.parser === "__babel_estree")); }
        function fe(O) { return /^(?:\d+|\d+\.\d+)$/.test(O); }
        function ge(O, me) { var _e = /^[fx]?(?:describe|it|test)$/; return me.type === "TaggedTemplateExpression" && me.quasi === O && me.tag.type === "MemberExpression" && me.tag.property.type === "Identifier" && me.tag.property.name === "each" && (me.tag.object.type === "Identifier" && _e.test(me.tag.object.name) || me.tag.object.type === "MemberExpression" && me.tag.object.property.type === "Identifier" && (me.tag.object.property.name === "only" || me.tag.object.property.name === "skip") && me.tag.object.object.type === "Identifier" && _e.test(me.tag.object.object.name)); }
        function he(O) {
            return O.quasis.some(function (me) { return me.value.raw.includes("\n"); });
        }
        function we(O, me) { return (O.type === "TemplateLiteral" && he(O) || O.type === "TaggedTemplateExpression" && he(O.quasi)) && !a(me, p(O), { backwards: !0 }); }
        function ke(O) { if (!Me(O))
            return !1; var me = s(ae(O, be.Dangling)); return me && !g(me); }
        function Re(O) {
            var e_42, _b, e_43, _h;
            if (O.length <= 1)
                return !1;
            var me = 0;
            try {
                for (var O_1 = __values(O), O_1_1 = O_1.next(); !O_1_1.done; O_1_1 = O_1.next()) {
                    var _e = O_1_1.value;
                    if (b(_e)) {
                        if (me += 1, me > 1)
                            return !0;
                    }
                    else if (de(_e)) {
                        try {
                            for (var _j = (e_43 = void 0, __values(_e.arguments)), _k = _j.next(); !_k.done; _k = _j.next()) {
                                var He = _k.value;
                                if (b(He))
                                    return !0;
                            }
                        }
                        catch (e_43_1) { e_43 = { error: e_43_1 }; }
                        finally {
                            try {
                                if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                            }
                            finally { if (e_43) throw e_43.error; }
                        }
                    }
                }
            }
            catch (e_42_1) { e_42 = { error: e_42_1 }; }
            finally {
                try {
                    if (O_1_1 && !O_1_1.done && (_b = O_1.return)) _b.call(O_1);
                }
                finally { if (e_42) throw e_42.error; }
            }
            return !1;
        }
        function Ne(O) { var me = O.getValue(), _e = O.getParentNode(); return de(me) && de(_e) && _e.callee === me && me.arguments.length > _e.arguments.length && _e.arguments.length > 0; }
        function Pe(O, me) {
            if (me >= 2)
                return !1;
            var _e = function (Qe) { return Pe(Qe, me + 1); }, He = O.type === "Literal" && "regex" in O && O.regex.pattern || O.type === "RegExpLiteral" && O.pattern;
            if (He && l(He) > 5)
                return !1;
            if (O.type === "Literal" || O.type === "BigIntLiteral" || O.type === "DecimalLiteral" || O.type === "BooleanLiteral" || O.type === "NullLiteral" || O.type === "NumericLiteral" || O.type === "RegExpLiteral" || O.type === "StringLiteral" || O.type === "Identifier" || O.type === "ThisExpression" || O.type === "Super" || O.type === "PrivateName" || O.type === "PrivateIdentifier" || O.type === "ArgumentPlaceholder" || O.type === "Import")
                return !0;
            if (O.type === "TemplateLiteral")
                return O.quasis.every(function (Qe) { return !Qe.value.raw.includes("\n"); }) && O.expressions.every(_e);
            if (O.type === "ObjectExpression")
                return O.properties.every(function (Qe) { return !Qe.computed && (Qe.shorthand || Qe.value && _e(Qe.value)); });
            if (O.type === "ArrayExpression")
                return O.elements.every(function (Qe) { return Qe === null || _e(Qe); });
            if (tt(O))
                return (O.type === "ImportExpression" || Pe(O.callee, me)) && Ye(O).every(_e);
            if (ue(O))
                return Pe(O.object, me) && Pe(O.property, me);
            var Ge = { "!": !0, "-": !0, "+": !0, "~": !0 };
            if (O.type === "UnaryExpression" && Ge[O.operator])
                return Pe(O.argument, me);
            var it = { "++": !0, "--": !0 };
            return O.type === "UpdateExpression" && it[O.operator] ? Pe(O.argument, me) : O.type === "TSNonNullExpression" ? Pe(O.expression, me) : !1;
        }
        function oe(O) { var me, _e; return (me = (_e = O.extra) === null || _e === void 0 ? void 0 : _e.raw) !== null && me !== void 0 ? me : O.raw; }
        function H(O) { return O; }
        function pe(O) { return O.filepath && /\.tsx$/i.test(O.filepath); }
        function X(O) { var me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5"; return O.trailingComma === "es5" && me === "es5" || O.trailingComma === "all" && (me === "all" || me === "es5"); }
        function le(O, me) { switch (O.type) {
            case "BinaryExpression":
            case "LogicalExpression":
            case "AssignmentExpression":
            case "NGPipeExpression": return le(O.left, me);
            case "MemberExpression":
            case "OptionalMemberExpression": return le(O.object, me);
            case "TaggedTemplateExpression": return O.tag.type === "FunctionExpression" ? !1 : le(O.tag, me);
            case "CallExpression":
            case "OptionalCallExpression": return O.callee.type === "FunctionExpression" ? !1 : le(O.callee, me);
            case "ConditionalExpression": return le(O.test, me);
            case "UpdateExpression": return !O.prefix && le(O.argument, me);
            case "BindExpression": return O.object && le(O.object, me);
            case "SequenceExpression": return le(O.expressions[0], me);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression": return le(O.expression, me);
            default: return me(O);
        } }
        var Ae = { "==": !0, "!=": !0, "===": !0, "!==": !0 }, Ee = { "*": !0, "/": !0, "%": !0 }, De = { ">>": !0, ">>>": !0, "<<": !0 };
        function A(O, me) { return !(re(me) !== re(O) || O === "**" || Ae[O] && Ae[me] || me === "%" && Ee[O] || O === "%" && Ee[me] || me !== O && Ee[me] && Ee[O] || De[O] && De[me]); }
        var G = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap(function (O, me) { return O.map(function (_e) { return [_e, me]; }); }));
        function re(O) { return G.get(O); }
        function ye(O) { return Boolean(De[O]) || O === "|" || O === "^" || O === "&"; }
        function Ce(O) { var me; if (O.rest)
            return !0; var _e = ve(O); return ((me = s(_e)) === null || me === void 0 ? void 0 : me.type) === "RestElement"; }
        var Be = new WeakMap;
        function ve(O) { if (Be.has(O))
            return Be.get(O); var me = []; return O.this && me.push(O.this), Array.isArray(O.parameters) ? me.push.apply(me, __spreadArray([], __read(O.parameters), false)) : Array.isArray(O.params) && me.push.apply(me, __spreadArray([], __read(O.params), false)), O.rest && me.push(O.rest), Be.set(O, me), me; }
        function ze(O, me) { var _e = O.getValue(), He = 0, Ge = function (it) { return me(it, He++); }; _e.this && O.call(Ge, "this"), Array.isArray(_e.parameters) ? O.each(Ge, "parameters") : Array.isArray(_e.params) && O.each(Ge, "params"), _e.rest && O.call(Ge, "rest"); }
        var xe = new WeakMap;
        function Ye(O) { if (xe.has(O))
            return xe.get(O); var me = O.arguments; return O.type === "ImportExpression" && (me = [O.source], O.attributes && me.push(O.attributes)), xe.set(O, me), me; }
        function Se(O, me) { var _e = O.getValue(); _e.type === "ImportExpression" ? (O.call(function (He) { return me(He, 0); }, "source"), _e.attributes && O.call(function (He) { return me(He, 1); }, "attributes")) : O.each(me, "arguments"); }
        function Ie(O) { return O.value.trim() === "prettier-ignore" && !O.unignore; }
        function Oe(O) { return O && (O.prettierIgnore || Me(O, be.PrettierIgnore)); }
        function Je(O) { var me = O.getValue(); return Oe(me); }
        var be = { Leading: 1 << 1, Trailing: 1 << 2, Dangling: 1 << 3, Block: 1 << 4, Line: 1 << 5, PrettierIgnore: 1 << 6, First: 1 << 7, Last: 1 << 8 }, je = function (O, me) { if (typeof O == "function" && (me = O, O = 0), O || me)
            return function (_e, He, Ge) { return !(O & be.Leading && !_e.leading || O & be.Trailing && !_e.trailing || O & be.Dangling && (_e.leading || _e.trailing) || O & be.Block && !g(_e) || O & be.Line && !D(_e) || O & be.First && He !== 0 || O & be.Last && He !== Ge.length - 1 || O & be.PrettierIgnore && !Ie(_e) || me && !me(_e)); }; };
        function Me(O, me, _e) { if (!u(O == null ? void 0 : O.comments))
            return !1; var He = je(me, _e); return He ? O.comments.some(He) : !0; }
        function ae(O, me, _e) { if (!Array.isArray(O == null ? void 0 : O.comments))
            return []; var He = je(me, _e); return He ? O.comments.filter(He) : O.comments; }
        var nt = function (O, me) { var _e = me.originalText; return i(_e, d(O)); };
        function tt(O) { return de(O) || O.type === "NewExpression" || O.type === "ImportExpression"; }
        function Ve(O) { return O && (O.type === "ObjectProperty" || O.type === "Property" && !O.method && O.kind === "init"); }
        function We(O) { return Boolean(O.__isUsingHackPipeline); }
        var Xe = Symbol("ifWithoutBlockAndSameLineComment");
        function st(O) { return O.type === "TSAsExpression" || O.type === "TSSatisfiesExpression"; }
        r.exports = { getFunctionParameters: ve, iterateFunctionParametersPath: ze, getCallArguments: Ye, iterateCallArgumentsPath: Se, hasRestParameter: Ce, getLeftSide: I, getLeftSidePathName: P, getParentExportDeclaration: m, getTypeScriptMappedTypeModifier: z, hasFlowAnnotationComment: F, hasFlowShorthandAnnotationComment: w, hasLeadingOwnLineComment: Z, hasNakedLeftSide: x, hasNode: N, hasIgnoreComment: Je, hasNodeIgnoreComment: Oe, identity: H, isBinaryish: V, isCallLikeExpression: tt, isEnabledHackPipeline: We, isLineComment: D, isPrettierIgnoreComment: Ie, isCallExpression: de, isMemberExpression: ue, isExportDeclaration: T, isFlowAnnotationComment: U, isFunctionCompositionArgs: Re, isFunctionNotation: J, isFunctionOrArrowExpression: b, isGetterOrSetter: q, isJestEachTemplateLiteral: ge, isJsxNode: M, isLiteral: C, isLongCurriedCallExpression: Ne, isSimpleCallArgument: Pe, isMemberish: j, isNumericLiteral: o, isSignedNumericLiteral: h, isObjectProperty: Ve, isObjectType: S, isObjectTypePropertyAFunction: L, isSimpleType: ie, isSimpleNumber: fe, isSimpleTemplateLiteral: Fe, isStringLiteral: v, isStringPropSafeToUnquote: se, isTemplateOnItsOwnLine: we, isTestCall: K, isTheOnlyJsxElementInMarkdown: R, isTSXFile: pe, isTypeAnnotationAFunction: Q, isNextLineEmpty: nt, needsHardlineAfterDanglingComment: ke, rawText: oe, shouldPrintComma: X, isBitwiseOperator: ye, shouldFlatten: A, startsWithNoLookaheadToken: le, getPrecedence: re, hasComment: Me, getComments: ae, CommentCheckFlags: be, markerForIfWithoutBlockAndSameLineComment: Xe, isTSTypeExpression: st };
    } }), Lt = te({ "src/language-js/print/template-literal.js": function (e, r) {
        "use strict";
        ne();
        var t = lt(), _b = Ue(), s = _b.getStringWidth, a = _b.getIndentSize, _h = qe(), _j = _h.builders, n = _j.join, u = _j.hardline, i = _j.softline, l = _j.group, p = _j.indent, d = _j.align, y = _j.lineSuffixBoundary, g = _j.addAlignmentToDoc, c = _h.printer.printDocToString, f = _h.utils.mapDoc, _k = Ke(), E = _k.isBinaryish, _ = _k.isJestEachTemplateLiteral, w = _k.isSimpleTemplateLiteral, F = _k.hasComment, N = _k.isMemberExpression, x = _k.isTSTypeExpression;
        function I(C, o, h) {
            var v = C.getValue();
            if (v.type === "TemplateLiteral" && _(v, C.getParentNode())) {
                var R = P(C, h, o);
                if (R)
                    return R;
            }
            var b = "expressions";
            v.type === "TSTemplateLiteralType" && (b = "types");
            var B = [], k = C.map(o, b), M = w(v);
            return M && (k = k.map(function (R) { return c(R, Object.assign(Object.assign({}, h), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted; })), B.push(y, "`"), C.each(function (R) {
                var q = R.getName();
                if (B.push(o()), q < k.length) {
                    var J = h.tabWidth, L = R.getValue(), Q = a(L.value.raw, J), V = k[q];
                    if (!M) {
                        var Y = v[b][q];
                        (F(Y) || N(Y) || Y.type === "ConditionalExpression" || Y.type === "SequenceExpression" || x(Y) || E(Y)) && (V = [p([i, V]), i]);
                    }
                    var j = Q === 0 && L.value.raw.endsWith("\n") ? d(Number.NEGATIVE_INFINITY, V) : g(V, Q, J);
                    B.push(l(["${", j, y, "}"]));
                }
            }, "quasis"), B.push("`"), B;
        }
        function P(C, o, h) {
            var e_44, _b, e_45, _h;
            var v = C.getNode(), S = v.quasis[0].value.raw.trim().split(/\s*\|\s*/);
            if (S.length > 1 || S.some(function (b) { return b.length > 0; })) {
                o.__inJestEach = !0;
                var b = C.map(h, "expressions");
                o.__inJestEach = !1;
                var B = [], k = b.map(function (L) { return "${" + c(L, Object.assign(Object.assign({}, o), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"; }), M = [{ hasLineBreak: !1, cells: [] }];
                for (var L = 1; L < v.quasis.length; L++) {
                    var Q = t(M), V = k[L - 1];
                    Q.cells.push(V), V.includes("\n") && (Q.hasLineBreak = !0), v.quasis[L].value.raw.includes("\n") && M.push({ hasLineBreak: !1, cells: [] });
                }
                var R = Math.max.apply(Math, __spreadArray([S.length], __read(M.map(function (L) { return L.cells.length; })), false)), q_1 = Array.from({ length: R }).fill(0), J = __spreadArray([{ cells: S }], __read(M.filter(function (L) { return L.cells.length > 0; })), false);
                try {
                    for (var _j = __values(J.filter(function (Q) { return !Q.hasLineBreak; })), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var L = _k.value.cells;
                        try {
                            for (var _q = (e_45 = void 0, __values(L.entries())), _v = _q.next(); !_v.done; _v = _q.next()) {
                                var _w = __read(_v.value, 2), Q = _w[0], V = _w[1];
                                q_1[Q] = Math.max(q_1[Q], s(V));
                            }
                        }
                        catch (e_45_1) { e_45 = { error: e_45_1 }; }
                        finally {
                            try {
                                if (_v && !_v.done && (_h = _q.return)) _h.call(_q);
                            }
                            finally { if (e_45) throw e_45.error; }
                        }
                    }
                }
                catch (e_44_1) { e_44 = { error: e_44_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                    }
                    finally { if (e_44) throw e_44.error; }
                }
                return B.push(y, "`", p([u, n(u, J.map(function (L) { return n(" | ", L.cells.map(function (Q, V) { return L.hasLineBreak ? Q : Q + " ".repeat(q_1[V] - s(Q)); })); }))]), u, "`"), B;
            }
        }
        function $(C, o) { var h = C.getValue(), v = o(); return F(h) && (v = l([p([i, v]), i])), ["${", v, y, "}"]; }
        function D(C, o) { return C.map(function (h) { return $(h, o); }, "expressions"); }
        function T(C, o) { return f(C, function (h) { return typeof h == "string" ? o ? h.replace(/(\\*)`/g, "$1$1\\`") : m(h) : h; }); }
        function m(C) { return C.replace(/([\\`]|\${)/g, "\\$1"); }
        r.exports = { printTemplateLiteral: I, printTemplateExpressions: D, escapeTemplateCharacters: T, uncookTemplateElementValue: m };
    } }), Vm = te({ "src/language-js/embed/markdown.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.indent, s = _b.softline, a = _b.literalline, n = _b.dedentToRoot, u = Lt().escapeTemplateCharacters;
        function i(p, d, y) { var c = p.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function (w, F) { return "\\".repeat(F.length / 2) + "`"; }), f = l(c), E = f !== ""; E && (c = c.replace(new RegExp("^".concat(f), "gm"), "")); var _ = u(y(c, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0); return ["`", E ? t([s, _]) : [a, n(_)], s, "`"]; }
        function l(p) { var d = p.match(/^([^\S\n]*)\S/m); return d === null ? "" : d[1]; }
        r.exports = i;
    } }), Wm = te({ "src/language-js/embed/css.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().isNonEmptyArray, _b = qe(), _h = _b.builders, s = _h.indent, a = _h.hardline, n = _h.softline, _j = _b.utils, u = _j.mapDoc, i = _j.replaceEndOfLine, l = _j.cleanDoc, p = Lt().printTemplateExpressions;
        function d(c, f, E) { var _ = c.getValue(), w = _.quasis.map(function (P) { return P.value.raw; }), F = 0, N = w.reduce(function (P, $, D) { return D === 0 ? $ : P + "@prettier-placeholder-" + F++ + "-id" + $; }, ""), x = E(N, { parser: "scss" }, { stripTrailingHardline: !0 }), I = p(c, f); return y(x, _, I); }
        function y(c, f, E) { if (f.quasis.length === 1 && !f.quasis[0].value.raw.trim())
            return "``"; var w = g(c, E); if (!w)
            throw new Error("Couldn't insert all the expressions"); return ["`", s([a, w]), n, "`"]; }
        function g(c, f) { if (!t(f))
            return c; var E = 0, _ = u(l(c), function (w) { return typeof w != "string" || !w.includes("@prettier-placeholder") ? w : w.split(/@prettier-placeholder-(\d+)-id/).map(function (F, N) { return N % 2 === 0 ? i(F) : (E++, f[F]); }); }); return f.length === E ? _ : null; }
        r.exports = d;
    } }), Hm = te({ "src/language-js/embed/graphql.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.indent, s = _b.join, a = _b.hardline, _h = Lt(), n = _h.escapeTemplateCharacters, u = _h.printTemplateExpressions;
        function i(p, d, y) {
            var g = p.getValue(), c = g.quasis.length;
            if (c === 1 && g.quasis[0].value.raw.trim() === "")
                return "``";
            var f = u(p, d), E = [];
            for (var _ = 0; _ < c; _++) {
                var w = g.quasis[_], F = _ === 0, N = _ === c - 1, x = w.value.cooked, I = x.split("\n"), P = I.length, $ = f[_], D = P > 2 && I[0].trim() === "" && I[1].trim() === "", T = P > 2 && I[P - 1].trim() === "" && I[P - 2].trim() === "", m = I.every(function (o) { return /^\s*(?:#[^\n\r]*)?$/.test(o); });
                if (!N && /#[^\n\r]*$/.test(I[P - 1]))
                    return null;
                var C = null;
                m ? C = l(I) : C = y(x, { parser: "graphql" }, { stripTrailingHardline: !0 }), C ? (C = n(C, !1), !F && D && E.push(""), E.push(C), !N && T && E.push("")) : !F && !N && D && E.push(""), $ && E.push($);
            }
            return ["`", t([a, s(a, E)]), a, "`"];
        }
        function l(p) {
            var e_46, _b;
            var d = [], y = !1, g = p.map(function (c) { return c.trim(); });
            try {
                for (var _h = __values(g.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), c = _k[0], f = _k[1];
                    f !== "" && (g[c - 1] === "" && y ? d.push([a, f]) : d.push(f), y = !0);
                }
            }
            catch (e_46_1) { e_46 = { error: e_46_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_46) throw e_46.error; }
            }
            return d.length === 0 ? null : s(a, d);
        }
        r.exports = i;
    } }), Gm = te({ "src/language-js/embed/html.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.indent, s = _h.line, a = _h.hardline, n = _h.group, u = _b.utils.mapDoc, _j = Lt(), i = _j.printTemplateExpressions, l = _j.uncookTemplateElementValue, p = 0;
        function d(y, g, c, f, E) { var _ = E.parser, w = y.getValue(), F = p; p = p + 1 >>> 0; var N = function (h) { return "PRETTIER_HTML_PLACEHOLDER_".concat(h, "_").concat(F, "_IN_JS"); }, x = w.quasis.map(function (h, v, S) { return v === S.length - 1 ? h.value.cooked : h.value.cooked + N(v); }).join(""), I = i(y, g); if (I.length === 0 && x.trim().length === 0)
            return "``"; var P = new RegExp(N("(\\d+)"), "g"), $ = 0, D = c(x, { parser: _, __onHtmlRoot: function (h) { $ = h.children.length; } }, { stripTrailingHardline: !0 }), T = u(D, function (h) { if (typeof h != "string")
            return h; var v = [], S = h.split(P); for (var b = 0; b < S.length; b++) {
            var B = S[b];
            if (b % 2 === 0) {
                B && (B = l(B), f.__embeddedInHtml && (B = B.replace(/<\/(script)\b/gi, "<\\/$1")), v.push(B));
                continue;
            }
            var k = Number(B);
            v.push(I[k]);
        } return v; }), m = /^\s/.test(x) ? " " : "", C = /\s$/.test(x) ? " " : "", o = f.htmlWhitespaceSensitivity === "ignore" ? a : m && C ? s : null; return n(o ? ["`", t([o, n(T)]), o, "`"] : ["`", m, $ > 1 ? t(n(T)) : n(T), C, "`"]); }
        r.exports = d;
    } }), Um = te({ "src/language-js/embed.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ke(), t = _b.hasComment, s = _b.CommentCheckFlags, a = _b.isObjectProperty, n = Vm(), u = Wm(), i = Hm(), l = Gm();
        function p(D) { if (g(D) || _(D) || w(D) || c(D))
            return "css"; if (x(D))
            return "graphql"; if (P(D))
            return "html"; if (f(D))
            return "angular"; if (y(D))
            return "markdown"; }
        function d(D, T, m, C) { var o = D.getValue(); if (o.type !== "TemplateLiteral" || $(o))
            return; var h = p(D); if (h) {
            if (h === "markdown")
                return n(D, T, m);
            if (h === "css")
                return u(D, T, m);
            if (h === "graphql")
                return i(D, T, m);
            if (h === "html" || h === "angular")
                return l(D, T, m, C, { parser: h });
        } }
        function y(D) { var T = D.getValue(), m = D.getParentNode(); return m && m.type === "TaggedTemplateExpression" && T.quasis.length === 1 && m.tag.type === "Identifier" && (m.tag.name === "md" || m.tag.name === "markdown"); }
        function g(D) { var T = D.getValue(), m = D.getParentNode(), C = D.getParentNode(1); return C && T.quasis && m.type === "JSXExpressionContainer" && C.type === "JSXElement" && C.openingElement.name.name === "style" && C.openingElement.attributes.some(function (o) { return o.name.name === "jsx"; }) || m && m.type === "TaggedTemplateExpression" && m.tag.type === "Identifier" && m.tag.name === "css" || m && m.type === "TaggedTemplateExpression" && m.tag.type === "MemberExpression" && m.tag.object.name === "css" && (m.tag.property.name === "global" || m.tag.property.name === "resolve"); }
        function c(D) { return D.match.apply(D, __spreadArray([function (T) { return T.type === "TemplateLiteral"; }, function (T, m) { return T.type === "ArrayExpression" && m === "elements"; }, function (T, m) { return a(T) && T.key.type === "Identifier" && T.key.name === "styles" && m === "value"; }], __read(E), false)); }
        function f(D) { return D.match.apply(D, __spreadArray([function (T) { return T.type === "TemplateLiteral"; }, function (T, m) { return a(T) && T.key.type === "Identifier" && T.key.name === "template" && m === "value"; }], __read(E), false)); }
        var E = [function (D, T) { return D.type === "ObjectExpression" && T === "properties"; }, function (D, T) { return D.type === "CallExpression" && D.callee.type === "Identifier" && D.callee.name === "Component" && T === "arguments"; }, function (D, T) { return D.type === "Decorator" && T === "expression"; }];
        function _(D) { var T = D.getParentNode(); if (!T || T.type !== "TaggedTemplateExpression")
            return !1; var m = T.tag.type === "ParenthesizedExpression" ? T.tag.expression : T.tag; switch (m.type) {
            case "MemberExpression": return F(m.object) || N(m);
            case "CallExpression": return F(m.callee) || m.callee.type === "MemberExpression" && (m.callee.object.type === "MemberExpression" && (F(m.callee.object.object) || N(m.callee.object)) || m.callee.object.type === "CallExpression" && F(m.callee.object.callee));
            case "Identifier": return m.name === "css";
            default: return !1;
        } }
        function w(D) { var T = D.getParentNode(), m = D.getParentNode(1); return m && T.type === "JSXExpressionContainer" && m.type === "JSXAttribute" && m.name.type === "JSXIdentifier" && m.name.name === "css"; }
        function F(D) { return D.type === "Identifier" && D.name === "styled"; }
        function N(D) { return /^[A-Z]/.test(D.object.name) && D.property.name === "extend"; }
        function x(D) { var T = D.getValue(), m = D.getParentNode(); return I(T, "GraphQL") || m && (m.type === "TaggedTemplateExpression" && (m.tag.type === "MemberExpression" && m.tag.object.name === "graphql" && m.tag.property.name === "experimental" || m.tag.type === "Identifier" && (m.tag.name === "gql" || m.tag.name === "graphql")) || m.type === "CallExpression" && m.callee.type === "Identifier" && m.callee.name === "graphql"); }
        function I(D, T) { return t(D, s.Block | s.Leading, function (m) { var C = m.value; return C === " ".concat(T, " "); }); }
        function P(D) { return I(D.getValue(), "HTML") || D.match(function (T) { return T.type === "TemplateLiteral"; }, function (T, m) { return T.type === "TaggedTemplateExpression" && T.tag.type === "Identifier" && T.tag.name === "html" && m === "quasi"; }); }
        function $(D) { var T = D.quasis; return T.some(function (m) { var C = m.value.cooked; return C === null; }); }
        r.exports = d;
    } }), Jm = te({ "src/language-js/clean.js": function (e, r) {
        "use strict";
        ne();
        var t = _t(), s = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), a = function (u) {
            var e_47, _b;
            try {
                for (var _h = __values(u.quasis), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var i = _j.value;
                    delete i.value;
                }
            }
            catch (e_47_1) { e_47 = { error: e_47_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_47) throw e_47.error; }
            }
        };
        function n(u, i, l) {
            var e_48, _b, e_49, _h;
            if (u.type === "Program" && delete i.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && i.value && (i.value = i.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && i.bigint && (i.bigint = i.bigint.toLowerCase()), u.type === "DecimalLiteral" && (i.value = Number(i.value)), u.type === "Literal" && i.decimal && (i.decimal = Number(i.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ")
                return null;
            if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && typeof u.key == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete i.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some(function (y) { return y.name.name === "jsx"; }))
                try {
                    for (var _j = __values(i.children), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var _q = _k.value, y = _q.type, g = _q.expression;
                        y === "JSXExpressionContainer" && g.type === "TemplateLiteral" && a(g);
                    }
                }
                catch (e_48_1) { e_48 = { error: e_48_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                    }
                    finally { if (e_48) throw e_48.error; }
                }
            u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && a(i.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (i.value.value = i.value.value.replace(/["']|&quot;|&apos;/g, '"'));
            var p = u.expression || u.callee;
            if (u.type === "Decorator" && p.type === "CallExpression" && p.callee.name === "Component" && p.arguments.length === 1) {
                var y = u.expression.arguments[0].properties;
                try {
                    for (var _v = __values(i.expression.arguments[0].properties.entries()), _w = _v.next(); !_w.done; _w = _v.next()) {
                        var _x = __read(_w.value, 2), g = _x[0], c = _x[1];
                        switch (y[g].key.name) {
                            case "styles":
                                c.value.type === "ArrayExpression" && a(c.value.elements[0]);
                                break;
                            case "template":
                                c.value.type === "TemplateLiteral" && a(c.value);
                                break;
                        }
                    }
                }
                catch (e_49_1) { e_49 = { error: e_49_1 }; }
                finally {
                    try {
                        if (_w && !_w.done && (_h = _v.return)) _h.call(_v);
                    }
                    finally { if (e_49) throw e_49.error; }
                }
            }
            if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && a(i.quasi), u.type === "TemplateLiteral") {
                var d;
                (((d = u.leadingComments) === null || d === void 0 ? void 0 : d.some(function (g) { return t(g) && ["GraphQL", "HTML"].some(function (c) { return g.value === " ".concat(c, " "); }); })) || l.type === "CallExpression" && l.callee.name === "graphql" || !u.leadingComments) && a(i);
            }
            if (u.type === "InterpreterDirective" && (i.value = i.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1)
                return i.types[0];
        }
        n.ignoredProperties = s, r.exports = n;
    } }), Qa = {};
zt(Qa, { EOL: function () { return Rn; }, arch: function () { return zm; }, cpus: function () { return so; }, default: function () { return co; }, endianness: function () { return Za; }, freemem: function () { return no; }, getNetworkInterfaces: function () { return lo; }, hostname: function () { return eo; }, loadavg: function () { return to; }, networkInterfaces: function () { return oo; }, platform: function () { return Xm; }, release: function () { return ao; }, tmpDir: function () { return qn; }, tmpdir: function () { return Mn; }, totalmem: function () { return uo; }, type: function () { return io; }, uptime: function () { return ro; } });
function Za() { if (typeof xr > "u") {
    var e = new ArrayBuffer(2), r = new Uint8Array(e), t = new Uint16Array(e);
    if (r[0] = 1, r[1] = 2, t[0] === 258)
        xr = "BE";
    else if (t[0] === 513)
        xr = "LE";
    else
        throw new Error("unable to figure out endianess");
} return xr; }
function eo() { return typeof globalThis.location < "u" ? globalThis.location.hostname : ""; }
function to() { return []; }
function ro() { return 0; }
function no() { return Number.MAX_VALUE; }
function uo() { return Number.MAX_VALUE; }
function so() { return []; }
function io() { return "Browser"; }
function ao() { return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : ""; }
function oo() { }
function lo() { }
function zm() { return "javascript"; }
function Xm() { return "browser"; }
function qn() { return "/tmp"; }
var xr, Mn, Rn, co, Km = ht({ "node-modules-polyfills:os": function () {
        ne(), Mn = qn, Rn = "\n", co = { EOL: Rn, tmpdir: Mn, tmpDir: qn, networkInterfaces: oo, getNetworkInterfaces: lo, release: ao, type: io, cpus: so, totalmem: uo, freemem: no, uptime: ro, loadavg: to, hostname: eo, endianness: Za };
    } }), Ym = te({ "node-modules-polyfills-commonjs:os": function (e, r) { ne(); var t = (Km(), ft(Qa)); if (t && t.default) {
        r.exports = t.default;
        for (var s in t)
            r.exports[s] = t[s];
    }
    else
        t && (r.exports = t); } }), Qm = te({ "node_modules/detect-newline/index.js": function (e, r) {
        "use strict";
        ne();
        var t = function (s) {
            if (typeof s != "string")
                throw new TypeError("Expected a string");
            var a = s.match(/(?:\r?\n)/g) || [];
            if (a.length === 0)
                return;
            var n = a.filter(function (i) { return i === "\r\n"; }).length, u = a.length - n;
            return n > u ? "\r\n" : "\n";
        };
        r.exports = t, r.exports.graceful = function (s) { return typeof s == "string" && t(s) || "\n"; };
    } }), Zm = te({ "node_modules/jest-docblock/build/index.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.extract = c, e.parse = E, e.parseWithComments = _, e.print = w, e.strip = f;
        function r() { var N = Ym(); return r = function () { return N; }, N; }
        function t() { var N = s(Qm()); return t = function () { return N; }, N; }
        function s(N) { return N && N.__esModule ? N : { default: N }; }
        var a = /\*\/$/, n = /^\/\*\*?/, u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, i = /(^|\s+)\/\/([^\r\n]*)/g, l = /^(\r?\n)+/, p = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, d = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, y = /(\r?\n|^) *\* ?/g, g = [];
        function c(N) { var x = N.match(u); return x ? x[0].trimLeft() : ""; }
        function f(N) { var x = N.match(u); return x && x[0] ? N.substring(x[0].length) : N; }
        function E(N) { return _(N).pragmas; }
        function _(N) { var x = (0, t().default)(N) || r().EOL; N = N.replace(n, "").replace(a, "").replace(y, "$1"); var I = ""; for (; I !== N;)
            I = N, N = N.replace(p, "".concat(x, "$1 $2").concat(x)); N = N.replace(l, "").trimRight(); var P = Object.create(null), $ = N.replace(d, "").replace(l, "").trimRight(), D; for (; D = d.exec(N);) {
            var T = D[2].replace(i, "");
            typeof P[D[1]] == "string" || Array.isArray(P[D[1]]) ? P[D[1]] = g.concat(P[D[1]], T) : P[D[1]] = T;
        } return { comments: $, pragmas: P }; }
        function w(N) { var _b = N.comments, x = _b === void 0 ? "" : _b, _h = N.pragmas, I = _h === void 0 ? {} : _h, P = (0, t().default)(x) || r().EOL, $ = "/**", D = " *", T = " */", m = Object.keys(I), C = m.map(function (h) { return F(h, I[h]); }).reduce(function (h, v) { return h.concat(v); }, []).map(function (h) { return "".concat(D, " ").concat(h).concat(P); }).join(""); if (!x) {
            if (m.length === 0)
                return "";
            if (m.length === 1 && !Array.isArray(I[m[0]])) {
                var h = I[m[0]];
                return "".concat($, " ").concat(F(m[0], h)[0]).concat(T);
            }
        } var o = x.split(P).map(function (h) { return "".concat(D, " ").concat(h); }).join(P) + P; return $ + P + (x ? o : "") + (x && m.length ? D + P : "") + C + T; }
        function F(N, x) { return g.concat(x).map(function (I) { return "@".concat(N, " ").concat(I).trim(); }); }
    } }), ed = te({ "src/language-js/utils/get-shebang.js": function (e, r) {
        "use strict";
        ne();
        function t(s) {
            if (!s.startsWith("#!"))
                return "";
            var a = s.indexOf("\n");
            return a === -1 ? s : s.slice(0, a);
        }
        r.exports = t;
    } }), po = te({ "src/language-js/pragma.js": function (e, r) {
        "use strict";
        ne();
        var _b = Zm(), t = _b.parseWithComments, s = _b.strip, a = _b.extract, n = _b.print, u = Hn().normalizeEndOfLine, i = ed();
        function l(y) { var g = i(y); g && (y = y.slice(g.length + 1)); var c = a(y), _b = t(c), f = _b.pragmas, E = _b.comments; return { shebang: g, text: y, pragmas: f, comments: E }; }
        function p(y) { var g = Object.keys(l(y).pragmas); return g.includes("prettier") || g.includes("format"); }
        function d(y) {
            var _b = l(y), g = _b.shebang, c = _b.text, f = _b.pragmas, E = _b.comments, _ = s(c), w = n({ pragmas: Object.assign({ format: "" }, f), comments: E.trimStart() });
            return (g ? "".concat(g, "\n") : "") + u(w) + (_.startsWith("\n") ? "\n" : "\n\n") + _;
        }
        r.exports = { hasPragma: p, insertPragma: d };
    } }), td = te({ "src/language-js/utils/is-type-cast-comment.js": function (e, r) {
        "use strict";
        ne();
        var t = _t();
        function s(a) { return t(a) && a.value[0] === "*" && /@(?:type|satisfies)\b/.test(a.value); }
        r.exports = s;
    } }), fo = te({ "src/language-js/comments.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.getLast, s = _b.hasNewline, a = _b.getNextNonSpaceNonCommentCharacterIndexWithStartIndex, n = _b.getNextNonSpaceNonCommentCharacter, u = _b.hasNewlineInRange, i = _b.addLeadingComment, l = _b.addTrailingComment, p = _b.addDanglingComment, d = _b.getNextNonSpaceNonCommentCharacterIndex, y = _b.isNonEmptyArray, _h = Ke(), g = _h.getFunctionParameters, c = _h.isPrettierIgnoreComment, f = _h.isJsxNode, E = _h.hasFlowShorthandAnnotationComment, _ = _h.hasFlowAnnotationComment, w = _h.hasIgnoreComment, F = _h.isCallLikeExpression, N = _h.getCallArguments, x = _h.isCallExpression, I = _h.isMemberExpression, P = _h.isObjectProperty, $ = _h.isLineComment, D = _h.getComments, T = _h.CommentCheckFlags, m = _h.markerForIfWithoutBlockAndSameLineComment, _j = ut(), C = _j.locStart, o = _j.locEnd, h = _t(), v = td();
        function S(De) { return [H, Fe, Q, q, J, L, ie, he, se, ge, we, ke, ce, z, U].some(function (A) { return A(De); }); }
        function b(De) { return [R, Fe, V, we, q, J, L, ie, z, Z, fe, ge, Pe, U, X].some(function (A) { return A(De); }); }
        function B(De) { return [H, q, J, j, ue, ce, ge, de, K, pe, U, oe].some(function (A) { return A(De); }); }
        function k(De, A) { var G = (De.body || De.properties).find(function (re) { var ye = re.type; return ye !== "EmptyStatement"; }); G ? i(G, A) : p(De, A); }
        function M(De, A) { De.type === "BlockStatement" ? k(De, A) : i(De, A); }
        function R(De) { var A = De.comment, G = De.followingNode; return G && v(A) ? (i(G, A), !0) : !1; }
        function q(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode, Ce = De.text; if ((re == null ? void 0 : re.type) !== "IfStatement" || !ye)
            return !1; if (n(Ce, A, o) === ")")
            return l(G, A), !0; if (G === re.consequent && ye === re.alternate) {
            if (G.type === "BlockStatement")
                l(G, A);
            else {
                var ve = A.type === "SingleLine" || A.loc.start.line === A.loc.end.line, ze = A.loc.start.line === G.loc.start.line;
                ve && ze ? p(G, A, m) : p(re, A);
            }
            return !0;
        } return ye.type === "BlockStatement" ? (k(ye, A), !0) : ye.type === "IfStatement" ? (M(ye.consequent, A), !0) : re.consequent === ye ? (i(ye, A), !0) : !1; }
        function J(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode, Ce = De.text; return (re == null ? void 0 : re.type) !== "WhileStatement" || !ye ? !1 : n(Ce, A, o) === ")" ? (l(G, A), !0) : ye.type === "BlockStatement" ? (k(ye, A), !0) : re.body === ye ? (i(ye, A), !0) : !1; }
        function L(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode; return (re == null ? void 0 : re.type) !== "TryStatement" && (re == null ? void 0 : re.type) !== "CatchClause" || !ye ? !1 : re.type === "CatchClause" && G ? (l(G, A), !0) : ye.type === "BlockStatement" ? (k(ye, A), !0) : ye.type === "TryStatement" ? (M(ye.finalizer, A), !0) : ye.type === "CatchClause" ? (M(ye.body, A), !0) : !1; }
        function Q(De) { var A = De.comment, G = De.enclosingNode, re = De.followingNode; return I(G) && (re == null ? void 0 : re.type) === "Identifier" ? (i(G, A), !0) : !1; }
        function V(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode, Ce = De.text, Be = G && !u(Ce, o(G), C(A)); return (!G || !Be) && ((re == null ? void 0 : re.type) === "ConditionalExpression" || (re == null ? void 0 : re.type) === "TSConditionalType") && ye ? (i(ye, A), !0) : !1; }
        function j(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode; return P(re) && re.shorthand && re.key === G && re.value.type === "AssignmentPattern" ? (l(re.value.left, A), !0) : !1; }
        var Y = new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function ie(De) {
            var e_50, _b;
            var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode;
            if (Y.has(re == null ? void 0 : re.type)) {
                if (y(re.decorators) && !(ye && ye.type === "Decorator"))
                    return l(t(re.decorators), A), !0;
                if (re.body && ye === re.body)
                    return k(re.body, A), !0;
                if (ye) {
                    if (re.superClass && ye === re.superClass && G && (G === re.id || G === re.typeParameters))
                        return l(G, A), !0;
                    try {
                        for (var _h = __values(["implements", "extends", "mixins"]), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var Ce = _j.value;
                            if (re[Ce] && ye === re[Ce][0])
                                return G && (G === re.id || G === re.typeParameters || G === re.superClass) ? l(G, A) : p(re, A, Ce), !0;
                        }
                    }
                    catch (e_50_1) { e_50 = { error: e_50_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                        }
                        finally { if (e_50) throw e_50.error; }
                    }
                }
            }
            return !1;
        }
        var ee = new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
        function ce(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.text; return re && G && n(ye, A, o) === "(" && (re.type === "Property" || re.type === "TSDeclareMethod" || re.type === "TSAbstractMethodDefinition") && G.type === "Identifier" && re.key === G && n(ye, G, o) !== ":" || (G == null ? void 0 : G.type) === "Decorator" && ee.has(re == null ? void 0 : re.type) ? (l(G, A), !0) : !1; }
        var W = new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function K(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.text; return n(ye, A, o) !== "(" ? !1 : G && W.has(re == null ? void 0 : re.type) ? (l(G, A), !0) : !1; }
        function de(De) { var A = De.comment, G = De.enclosingNode, re = De.text; if ((G == null ? void 0 : G.type) !== "ArrowFunctionExpression")
            return !1; var ye = d(re, A, o); return ye !== !1 && re.slice(ye, ye + 2) === "=>" ? (p(G, A), !0) : !1; }
        function ue(De) { var A = De.comment, G = De.enclosingNode, re = De.text; return n(re, A, o) !== ")" ? !1 : G && (le(G) && g(G).length === 0 || F(G) && N(G).length === 0) ? (p(G, A), !0) : ((G == null ? void 0 : G.type) === "MethodDefinition" || (G == null ? void 0 : G.type) === "TSAbstractMethodDefinition") && g(G.value).length === 0 ? (p(G.value, A), !0) : !1; }
        function Fe(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode, Ce = De.text; if ((G == null ? void 0 : G.type) === "FunctionTypeParam" && (re == null ? void 0 : re.type) === "FunctionTypeAnnotation" && (ye == null ? void 0 : ye.type) !== "FunctionTypeParam" || ((G == null ? void 0 : G.type) === "Identifier" || (G == null ? void 0 : G.type) === "AssignmentPattern") && re && le(re) && n(Ce, A, o) === ")")
            return l(G, A), !0; if ((re == null ? void 0 : re.type) === "FunctionDeclaration" && (ye == null ? void 0 : ye.type) === "BlockStatement") {
            var Be = (function () { var ve = g(re); if (ve.length > 0)
                return a(Ce, o(t(ve))); var ze = a(Ce, o(re.id)); return ze !== !1 && a(Ce, ze + 1); })();
            if (C(A) > Be)
                return k(ye, A), !0;
        } return !1; }
        function z(De) { var A = De.comment, G = De.enclosingNode; return (G == null ? void 0 : G.type) === "LabeledStatement" ? (i(G, A), !0) : !1; }
        function U(De) { var A = De.comment, G = De.enclosingNode; return ((G == null ? void 0 : G.type) === "ContinueStatement" || (G == null ? void 0 : G.type) === "BreakStatement") && !G.label ? (l(G, A), !0) : !1; }
        function Z(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode; return x(re) && G && re.callee === G && re.arguments.length > 0 ? (i(re.arguments[0], A), !0) : !1; }
        function se(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode; return (re == null ? void 0 : re.type) === "UnionTypeAnnotation" || (re == null ? void 0 : re.type) === "TSUnionType" ? (c(A) && (ye.prettierIgnore = !0, A.unignore = !0), G ? (l(G, A), !0) : !1) : (((ye == null ? void 0 : ye.type) === "UnionTypeAnnotation" || (ye == null ? void 0 : ye.type) === "TSUnionType") && c(A) && (ye.types[0].prettierIgnore = !0, A.unignore = !0), !1); }
        function fe(De) { var A = De.comment, G = De.enclosingNode; return P(G) ? (i(G, A), !0) : !1; }
        function ge(De) { var A = De.comment, G = De.enclosingNode, re = De.followingNode, ye = De.ast, Ce = De.isLastComment; return ye && ye.body && ye.body.length === 0 ? (Ce ? p(ye, A) : i(ye, A), !0) : (G == null ? void 0 : G.type) === "Program" && (G == null ? void 0 : G.body.length) === 0 && !y(G.directives) ? (Ce ? p(G, A) : i(G, A), !0) : (re == null ? void 0 : re.type) === "Program" && (re == null ? void 0 : re.body.length) === 0 && (G == null ? void 0 : G.type) === "ModuleExpression" ? (p(re, A), !0) : !1; }
        function he(De) { var A = De.comment, G = De.enclosingNode; return (G == null ? void 0 : G.type) === "ForInStatement" || (G == null ? void 0 : G.type) === "ForOfStatement" ? (i(G, A), !0) : !1; }
        function we(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.text; if ((re == null ? void 0 : re.type) === "ImportSpecifier" || (re == null ? void 0 : re.type) === "ExportSpecifier")
            return i(re, A), !0; var Ce = (G == null ? void 0 : G.type) === "ImportSpecifier" && (re == null ? void 0 : re.type) === "ImportDeclaration", Be = (G == null ? void 0 : G.type) === "ExportSpecifier" && (re == null ? void 0 : re.type) === "ExportNamedDeclaration"; return (Ce || Be) && s(ye, o(A)) ? (l(G, A), !0) : !1; }
        function ke(De) { var A = De.comment, G = De.enclosingNode; return (G == null ? void 0 : G.type) === "AssignmentPattern" ? (i(G, A), !0) : !1; }
        var Re = new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), Ne = new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function Pe(De) { var A = De.comment, G = De.enclosingNode, re = De.followingNode; return Re.has(G == null ? void 0 : G.type) && re && (Ne.has(re.type) || h(A)) ? (i(re, A), !0) : !1; }
        function oe(De) { var A = De.comment, G = De.enclosingNode, re = De.followingNode, ye = De.text; return !re && ((G == null ? void 0 : G.type) === "TSMethodSignature" || (G == null ? void 0 : G.type) === "TSDeclareFunction" || (G == null ? void 0 : G.type) === "TSAbstractMethodDefinition") && n(ye, A, o) === ";" ? (l(G, A), !0) : !1; }
        function H(De) { var A = De.comment, G = De.enclosingNode, re = De.followingNode; if (c(A) && (G == null ? void 0 : G.type) === "TSMappedType" && (re == null ? void 0 : re.type) === "TSTypeParameter" && re.constraint)
            return G.prettierIgnore = !0, A.unignore = !0, !0; }
        function pe(De) { var A = De.comment, G = De.precedingNode, re = De.enclosingNode, ye = De.followingNode; return (re == null ? void 0 : re.type) !== "TSMappedType" ? !1 : (ye == null ? void 0 : ye.type) === "TSTypeParameter" && ye.name ? (i(ye.name, A), !0) : (G == null ? void 0 : G.type) === "TSTypeParameter" && G.constraint ? (l(G.constraint, A), !0) : !1; }
        function X(De) { var A = De.comment, G = De.enclosingNode, re = De.followingNode; return !G || G.type !== "SwitchCase" || G.test || !re || re !== G.consequent[0] ? !1 : (re.type === "BlockStatement" && $(A) ? k(re, A) : p(G, A), !0); }
        function le(De) { return De.type === "ArrowFunctionExpression" || De.type === "FunctionExpression" || De.type === "FunctionDeclaration" || De.type === "ObjectMethod" || De.type === "ClassMethod" || De.type === "TSDeclareFunction" || De.type === "TSCallSignatureDeclaration" || De.type === "TSConstructSignatureDeclaration" || De.type === "TSMethodSignature" || De.type === "TSConstructorType" || De.type === "TSFunctionType" || De.type === "TSDeclareMethod"; }
        function Ae(De, A) { if ((A.parser === "typescript" || A.parser === "flow" || A.parser === "acorn" || A.parser === "espree" || A.parser === "meriyah" || A.parser === "__babel_estree") && De.type === "MethodDefinition" && De.value && De.value.type === "FunctionExpression" && g(De.value).length === 0 && !De.value.returnType && !y(De.value.typeParameters) && De.value.body)
            return __spreadArray(__spreadArray([], __read(De.decorators || []), false), [De.key, De.value.body], false); }
        function Ee(De) { var A = De.getValue(), G = De.getParentNode(), re = function (ye) { return _(D(ye, T.Leading)) || _(D(ye, T.Trailing)); }; return (A && (f(A) || E(A) || x(G) && re(A)) || G && (G.type === "JSXSpreadAttribute" || G.type === "JSXSpreadChild" || G.type === "UnionTypeAnnotation" || G.type === "TSUnionType" || (G.type === "ClassDeclaration" || G.type === "ClassExpression") && G.superClass === A)) && (!w(De) || G.type === "UnionTypeAnnotation" || G.type === "TSUnionType"); }
        r.exports = { handleOwnLineComment: S, handleEndOfLineComment: b, handleRemainingComment: B, getCommentChildNodes: Ae, willPrintOwnComments: Ee };
    } }), Ot = te({ "src/language-js/needs-parens.js": function (e, r) {
        "use strict";
        ne();
        var t = lt(), s = Jn(), _b = Ke(), a = _b.getFunctionParameters, n = _b.getLeftSidePathName, u = _b.hasFlowShorthandAnnotationComment, i = _b.hasNakedLeftSide, l = _b.hasNode, p = _b.isBitwiseOperator, d = _b.startsWithNoLookaheadToken, y = _b.shouldFlatten, g = _b.getPrecedence, c = _b.isCallExpression, f = _b.isMemberExpression, E = _b.isObjectProperty, _ = _b.isTSTypeExpression;
        function w(D, T) { var m = D.getParentNode(); if (!m)
            return !1; var C = D.getName(), o = D.getNode(); if (T.__isInHtmlInterpolation && !T.bracketSpacing && I(o) && P(D))
            return !0; if (F(o))
            return !1; if (T.parser !== "flow" && u(D.getValue()))
            return !0; if (o.type === "Identifier") {
            if (o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name) || C === "left" && (o.name === "async" && !m.await || o.name === "let") && m.type === "ForOfStatement")
                return !0;
            if (o.name === "let") {
                var h;
                var S = (h = D.findAncestor(function (b) { return b.type === "ForOfStatement"; })) === null || h === void 0 ? void 0 : h.left;
                if (S && d(S, function (b) { return b === o; }))
                    return !0;
            }
            if (C === "object" && o.name === "let" && m.type === "MemberExpression" && m.computed && !m.optional) {
                var S = D.findAncestor(function (B) { return B.type === "ExpressionStatement" || B.type === "ForStatement" || B.type === "ForInStatement"; }), b = S ? S.type === "ExpressionStatement" ? S.expression : S.type === "ForStatement" ? S.init : S.left : void 0;
                if (b && d(b, function (B) { return B === o; }))
                    return !0;
            }
            return !1;
        } if (o.type === "ObjectExpression" || o.type === "FunctionExpression" || o.type === "ClassExpression" || o.type === "DoExpression") {
            var v;
            var S = (v = D.findAncestor(function (b) { return b.type === "ExpressionStatement"; })) === null || v === void 0 ? void 0 : v.expression;
            if (S && d(S, function (b) { return b === o; }))
                return !0;
        } switch (m.type) {
            case "ParenthesizedExpression": return !1;
            case "ClassDeclaration":
            case "ClassExpression": {
                if (C === "superClass" && (o.type === "ArrowFunctionExpression" || o.type === "AssignmentExpression" || o.type === "AwaitExpression" || o.type === "BinaryExpression" || o.type === "ConditionalExpression" || o.type === "LogicalExpression" || o.type === "NewExpression" || o.type === "ObjectExpression" || o.type === "SequenceExpression" || o.type === "TaggedTemplateExpression" || o.type === "UnaryExpression" || o.type === "UpdateExpression" || o.type === "YieldExpression" || o.type === "TSNonNullExpression"))
                    return !0;
                break;
            }
            case "ExportDefaultDeclaration": return $(D, T) || o.type === "SequenceExpression";
            case "Decorator": {
                if (C === "expression") {
                    if (f(o) && o.computed)
                        return !0;
                    var S = !1, b = !1, B = o;
                    for (; B;)
                        switch (B.type) {
                            case "MemberExpression":
                                b = !0, B = B.object;
                                break;
                            case "CallExpression":
                                if (b || S)
                                    return T.parser !== "typescript";
                                S = !0, B = B.callee;
                                break;
                            case "Identifier": return !1;
                            case "TaggedTemplateExpression": return T.parser !== "typescript";
                            default: return !0;
                        }
                    return !0;
                }
                break;
            }
            case "ArrowFunctionExpression": {
                if (C === "body" && o.type !== "SequenceExpression" && d(o, function (S) { return S.type === "ObjectExpression"; }))
                    return !0;
                break;
            }
        } switch (o.type) {
            case "UpdateExpression": if (m.type === "UnaryExpression")
                return o.prefix && (o.operator === "++" && m.operator === "+" || o.operator === "--" && m.operator === "-");
            case "UnaryExpression": switch (m.type) {
                case "UnaryExpression": return o.operator === m.operator && (o.operator === "+" || o.operator === "-");
                case "BindExpression": return !0;
                case "MemberExpression":
                case "OptionalMemberExpression": return C === "object";
                case "TaggedTemplateExpression": return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression": return C === "callee";
                case "BinaryExpression": return C === "left" && m.operator === "**";
                case "TSNonNullExpression": return !0;
                default: return !1;
            }
            case "BinaryExpression": {
                if (m.type === "UpdateExpression" || o.operator === "in" && N(D))
                    return !0;
                if (o.operator === "|>" && o.extra && o.extra.parenthesized) {
                    var S = D.getParentNode(1);
                    if (S.type === "BinaryExpression" && S.operator === "|>")
                        return !0;
                }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression": switch (m.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression": return !_(o);
                case "ConditionalExpression": return _(o);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression": return C === "callee";
                case "ClassExpression":
                case "ClassDeclaration": return C === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression": return !0;
                case "MemberExpression":
                case "OptionalMemberExpression": return C === "object";
                case "AssignmentExpression":
                case "AssignmentPattern": return C === "left" && (o.type === "TSTypeAssertion" || _(o));
                case "LogicalExpression": if (o.type === "LogicalExpression")
                    return m.operator !== o.operator;
                case "BinaryExpression": {
                    var S = o.operator, b = o.type;
                    if (!S && b !== "TSTypeAssertion")
                        return !0;
                    var B = g(S), k = m.operator, M = g(k);
                    return M > B || C === "right" && M === B || M === B && !y(k, S) ? !0 : M < B && S === "%" ? k === "+" || k === "-" : !!p(k);
                }
                default: return !1;
            }
            case "SequenceExpression": switch (m.type) {
                case "ReturnStatement": return !1;
                case "ForStatement": return !1;
                case "ExpressionStatement": return C !== "expression";
                case "ArrowFunctionExpression": return C !== "body";
                default: return !0;
            }
            case "YieldExpression": if (m.type === "UnaryExpression" || m.type === "AwaitExpression" || _(m) || m.type === "TSNonNullExpression")
                return !0;
            case "AwaitExpression": switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression": return !0;
                case "MemberExpression":
                case "OptionalMemberExpression": return C === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression": return C === "callee";
                case "ConditionalExpression": return C === "test";
                case "BinaryExpression": return !(!o.argument && m.operator === "|>");
                default: return !1;
            }
            case "TSConditionalType":
            case "TSFunctionType":
            case "TSConstructorType":
                if (C === "extendsType" && m.type === "TSConditionalType") {
                    if (o.type === "TSConditionalType")
                        return !0;
                    var S = (o.returnType || o.typeAnnotation).typeAnnotation;
                    if (S.type === "TSTypePredicate" && S.typeAnnotation && (S = S.typeAnnotation.typeAnnotation), S.type === "TSInferType" && S.typeParameter.constraint)
                        return !0;
                }
                if (C === "checkType" && m.type === "TSConditionalType")
                    return !0;
            case "TSUnionType":
            case "TSIntersectionType": if ((m.type === "TSUnionType" || m.type === "TSIntersectionType") && m.types.length > 1 && (!o.types || o.types.length > 1))
                return !0;
            case "TSInferType": if (o.type === "TSInferType" && m.type === "TSRestType")
                return !1;
            case "TSTypeOperator": return m.type === "TSArrayType" || m.type === "TSOptionalType" || m.type === "TSRestType" || C === "objectType" && m.type === "TSIndexedAccessType" || m.type === "TSTypeOperator" || m.type === "TSTypeAnnotation" && D.getParentNode(1).type.startsWith("TSJSDoc");
            case "TSTypeQuery": return C === "objectType" && m.type === "TSIndexedAccessType" || C === "elementType" && m.type === "TSArrayType";
            case "TypeofTypeAnnotation": return C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType") || C === "elementType" && m.type === "ArrayTypeAnnotation";
            case "ArrayTypeAnnotation": return m.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation": return m.type === "ArrayTypeAnnotation" || m.type === "NullableTypeAnnotation" || m.type === "IntersectionTypeAnnotation" || m.type === "UnionTypeAnnotation" || C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation": return m.type === "ArrayTypeAnnotation" || C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
                var S = m.type === "NullableTypeAnnotation" ? D.getParentNode(1) : m;
                return S.type === "UnionTypeAnnotation" || S.type === "IntersectionTypeAnnotation" || S.type === "ArrayTypeAnnotation" || C === "objectType" && (S.type === "IndexedAccessType" || S.type === "OptionalIndexedAccessType") || S.type === "NullableTypeAnnotation" || m.type === "FunctionTypeParam" && m.name === null && a(o).some(function (b) { return b.typeAnnotation && b.typeAnnotation.type === "NullableTypeAnnotation"; });
            }
            case "OptionalIndexedAccessType": return C === "objectType" && m.type === "IndexedAccessType";
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
                if (typeof o.value == "string" && m.type === "ExpressionStatement" && !m.directive) {
                    var S = D.getParentNode(1);
                    return S.type === "Program" || S.type === "BlockStatement";
                }
                return C === "object" && m.type === "MemberExpression" && typeof o.value == "number";
            case "AssignmentExpression": {
                var S = D.getParentNode(1);
                return C === "body" && m.type === "ArrowFunctionExpression" ? !0 : C === "key" && (m.type === "ClassProperty" || m.type === "PropertyDefinition") && m.computed || (C === "init" || C === "update") && m.type === "ForStatement" ? !1 : m.type === "ExpressionStatement" ? o.left.type === "ObjectPattern" : !(C === "key" && m.type === "TSPropertySignature" || m.type === "AssignmentExpression" || m.type === "SequenceExpression" && S && S.type === "ForStatement" && (S.init === m || S.update === m) || C === "value" && m.type === "Property" && S && S.type === "ObjectPattern" && S.properties.includes(m) || m.type === "NGChainedExpression");
            }
            case "ConditionalExpression": switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression": return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression": return C === "callee";
                case "ConditionalExpression": return C === "test";
                case "MemberExpression":
                case "OptionalMemberExpression": return C === "object";
                default: return !1;
            }
            case "FunctionExpression": switch (m.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression": return C === "callee";
                case "TaggedTemplateExpression": return !0;
                default: return !1;
            }
            case "ArrowFunctionExpression": switch (m.type) {
                case "BinaryExpression": return m.operator !== "|>" || o.extra && o.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression": return C === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression": return C === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion": return !0;
                case "ConditionalExpression": return C === "test";
                default: return !1;
            }
            case "ClassExpression":
                if (s(o.decorators))
                    return !0;
                switch (m.type) {
                    case "NewExpression": return C === "callee";
                    default: return !1;
                }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
                var S = D.getParentNode(1);
                if (C === "object" && m.type === "MemberExpression" || C === "callee" && (m.type === "CallExpression" || m.type === "NewExpression") || m.type === "TSNonNullExpression" && S.type === "MemberExpression" && S.object === m)
                    return !0;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
                if (C === "callee" && (m.type === "BindExpression" || m.type === "NewExpression")) {
                    var S = o;
                    for (; S;)
                        switch (S.type) {
                            case "CallExpression":
                            case "OptionalCallExpression": return !0;
                            case "MemberExpression":
                            case "OptionalMemberExpression":
                            case "BindExpression":
                                S = S.object;
                                break;
                            case "TaggedTemplateExpression":
                                S = S.tag;
                                break;
                            case "TSNonNullExpression":
                                S = S.expression;
                                break;
                            default: return !1;
                        }
                }
                return !1;
            case "BindExpression": return C === "callee" && (m.type === "BindExpression" || m.type === "NewExpression") || C === "object" && f(m);
            case "NGPipeExpression": return !(m.type === "NGRoot" || m.type === "NGMicrosyntaxExpression" || m.type === "ObjectProperty" && !(o.extra && o.extra.parenthesized) || m.type === "ArrayExpression" || c(m) && m.arguments[C] === o || C === "right" && m.type === "NGPipeExpression" || C === "property" && m.type === "MemberExpression" || m.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement": return C === "callee" || C === "left" && m.type === "BinaryExpression" && m.operator === "<" || m.type !== "ArrayExpression" && m.type !== "ArrowFunctionExpression" && m.type !== "AssignmentExpression" && m.type !== "AssignmentPattern" && m.type !== "BinaryExpression" && m.type !== "NewExpression" && m.type !== "ConditionalExpression" && m.type !== "ExpressionStatement" && m.type !== "JsExpressionRoot" && m.type !== "JSXAttribute" && m.type !== "JSXElement" && m.type !== "JSXExpressionContainer" && m.type !== "JSXFragment" && m.type !== "LogicalExpression" && !c(m) && !E(m) && m.type !== "ReturnStatement" && m.type !== "ThrowStatement" && m.type !== "TypeCastExpression" && m.type !== "VariableDeclarator" && m.type !== "YieldExpression";
            case "TypeAnnotation": return C === "returnType" && m.type === "ArrowFunctionExpression" && x(o);
        } return !1; }
        function F(D) { return D.type === "BlockStatement" || D.type === "BreakStatement" || D.type === "ClassBody" || D.type === "ClassDeclaration" || D.type === "ClassMethod" || D.type === "ClassProperty" || D.type === "PropertyDefinition" || D.type === "ClassPrivateProperty" || D.type === "ContinueStatement" || D.type === "DebuggerStatement" || D.type === "DeclareClass" || D.type === "DeclareExportAllDeclaration" || D.type === "DeclareExportDeclaration" || D.type === "DeclareFunction" || D.type === "DeclareInterface" || D.type === "DeclareModule" || D.type === "DeclareModuleExports" || D.type === "DeclareVariable" || D.type === "DoWhileStatement" || D.type === "EnumDeclaration" || D.type === "ExportAllDeclaration" || D.type === "ExportDefaultDeclaration" || D.type === "ExportNamedDeclaration" || D.type === "ExpressionStatement" || D.type === "ForInStatement" || D.type === "ForOfStatement" || D.type === "ForStatement" || D.type === "FunctionDeclaration" || D.type === "IfStatement" || D.type === "ImportDeclaration" || D.type === "InterfaceDeclaration" || D.type === "LabeledStatement" || D.type === "MethodDefinition" || D.type === "ReturnStatement" || D.type === "SwitchStatement" || D.type === "ThrowStatement" || D.type === "TryStatement" || D.type === "TSDeclareFunction" || D.type === "TSEnumDeclaration" || D.type === "TSImportEqualsDeclaration" || D.type === "TSInterfaceDeclaration" || D.type === "TSModuleDeclaration" || D.type === "TSNamespaceExportDeclaration" || D.type === "TypeAlias" || D.type === "VariableDeclaration" || D.type === "WhileStatement" || D.type === "WithStatement"; }
        function N(D) { var T = 0, m = D.getValue(); for (; m;) {
            var C = D.getParentNode(T++);
            if (C && C.type === "ForStatement" && C.init === m)
                return !0;
            m = C;
        } return !1; }
        function x(D) { return l(D, function (T) { return T.type === "ObjectTypeAnnotation" && l(T, function (m) { return m.type === "FunctionTypeAnnotation" || void 0; }) || void 0; }); }
        function I(D) { switch (D.type) {
            case "ObjectExpression": return !0;
            default: return !1;
        } }
        function P(D) { var T = D.getValue(), m = D.getParentNode(), C = D.getName(); switch (m.type) {
            case "NGPipeExpression":
                if (typeof C == "number" && m.arguments[C] === T && m.arguments.length - 1 === C)
                    return D.callParent(P);
                break;
            case "ObjectProperty":
                if (C === "value") {
                    var o = D.getParentNode(1);
                    return t(o.properties) === m;
                }
                break;
            case "BinaryExpression":
            case "LogicalExpression":
                if (C === "right")
                    return D.callParent(P);
                break;
            case "ConditionalExpression":
                if (C === "alternate")
                    return D.callParent(P);
                break;
            case "UnaryExpression":
                if (m.prefix)
                    return D.callParent(P);
                break;
        } return !1; }
        function $(D, T) { var m = D.getValue(), C = D.getParentNode(); return m.type === "FunctionExpression" || m.type === "ClassExpression" ? C.type === "ExportDefaultDeclaration" || !w(D, T) : !i(m) || C.type !== "ExportDefaultDeclaration" && w(D, T) ? !1 : D.call.apply(D, __spreadArray([function (o) { return $(o, T); }], __read(n(D, m)), false)); }
        r.exports = w;
    } }), Do = te({ "src/language-js/print-preprocess.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a) { switch (a.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression": return Object.assign(Object.assign({}, s), {}, { type: a.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: s, comments: [], rootMarker: a.rootMarker });
            default: return s;
        } }
        r.exports = t;
    } }), rd = te({ "src/language-js/print/html-binding.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.join, s = _b.line, a = _b.group, n = _b.softline, u = _b.indent;
        function i(p, d, y) { var g = p.getValue(); if (d.__onHtmlBindingRoot && p.getName() === null && d.__onHtmlBindingRoot(g, d), g.type === "File") {
            if (d.__isVueForBindingLeft)
                return p.call(function (c) { var f = t([",", s], c.map(y, "params")), E = c.getValue().params; return E.length === 1 ? f : ["(", u([n, a(f)]), n, ")"]; }, "program", "body", 0);
            if (d.__isVueBindings)
                return p.call(function (c) { return t([",", s], c.map(y, "params")); }, "program", "body", 0);
        } }
        function l(p) { switch (p.type) {
            case "MemberExpression":
                switch (p.property.type) {
                    case "Identifier":
                    case "NumericLiteral":
                    case "StringLiteral": return l(p.object);
                }
                return !1;
            case "Identifier": return !0;
            default: return !1;
        } }
        r.exports = { isVueEventBindingExpression: l, printHtmlBinding: i };
    } }), Zn = te({ "src/language-js/print/binaryish.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printComments, s = Ue().getLast, _b = qe(), _h = _b.builders, a = _h.join, n = _h.line, u = _h.softline, i = _h.group, l = _h.indent, p = _h.align, d = _h.indentIfBreak, _j = _b.utils, y = _j.cleanDoc, g = _j.getDocParts, c = _j.isConcat, _k = Ke(), f = _k.hasLeadingOwnLineComment, E = _k.isBinaryish, _ = _k.isJsxNode, w = _k.shouldFlatten, F = _k.hasComment, N = _k.CommentCheckFlags, x = _k.isCallExpression, I = _k.isMemberExpression, P = _k.isObjectProperty, $ = _k.isEnabledHackPipeline, D = 0;
        function T(o, h, v) { var S = o.getValue(), b = o.getParentNode(), B = o.getParentNode(1), k = S !== b.body && (b.type === "IfStatement" || b.type === "WhileStatement" || b.type === "SwitchStatement" || b.type === "DoWhileStatement"), M = $(h) && S.operator === "|>", R = m(o, v, h, !1, k); if (k)
            return R; if (M)
            return i(R); if (x(b) && b.callee === S || b.type === "UnaryExpression" || I(b) && !b.computed)
            return i([l(__spreadArray([u], __read(R), false)), u]); var q = b.type === "ReturnStatement" || b.type === "ThrowStatement" || b.type === "JSXExpressionContainer" && B.type === "JSXAttribute" || S.operator !== "|" && b.type === "JsExpressionRoot" || S.type !== "NGPipeExpression" && (b.type === "NGRoot" && h.parser === "__ng_binding" || b.type === "NGMicrosyntaxExpression" && B.type === "NGMicrosyntax" && B.body.length === 1) || S === b.body && b.type === "ArrowFunctionExpression" || S !== b.body && b.type === "ForStatement" || b.type === "ConditionalExpression" && B.type !== "ReturnStatement" && B.type !== "ThrowStatement" && !x(B) || b.type === "TemplateLiteral", J = b.type === "AssignmentExpression" || b.type === "VariableDeclarator" || b.type === "ClassProperty" || b.type === "PropertyDefinition" || b.type === "TSAbstractPropertyDefinition" || b.type === "ClassPrivateProperty" || P(b), L = E(S.left) && w(S.operator, S.left.operator); if (q || C(S) && !L || !C(S) && J)
            return i(R); if (R.length === 0)
            return ""; var Q = _(S.right), V = R.findIndex(function (W) { return typeof W != "string" && !Array.isArray(W) && W.type === "group"; }), j = R.slice(0, V === -1 ? 1 : V + 1), Y = R.slice(j.length, Q ? -1 : void 0), ie = Symbol("logicalChain-" + ++D), ee = i(__spreadArray(__spreadArray([], __read(j), false), [l(Y)], false), { id: ie }); if (!Q)
            return ee; var ce = s(R); return i([ee, d(ce, { groupId: ie })]); }
        function m(o, h, v, S, b) { var B = o.getValue(); if (!E(B))
            return [i(h())]; var k = []; w(B.operator, B.left.operator) ? k = o.call(function (Y) { return m(Y, h, v, !0, b); }, "left") : k.push(i(h("left"))); var M = C(B), R = (B.operator === "|>" || B.type === "NGPipeExpression" || B.operator === "|" && v.parser === "__vue_expression") && !f(v.originalText, B.right), q = B.type === "NGPipeExpression" ? "|" : B.operator, J = B.type === "NGPipeExpression" && B.arguments.length > 0 ? i(l([n, ": ", a([n, ": "], o.map(h, "arguments").map(function (Y) { return p(2, i(Y)); }))])) : "", L; if (M)
            L = [q, " ", h("right"), J];
        else {
            var ie = $(v) && q === "|>" ? o.call(function (ee) { return m(ee, h, v, !0, b); }, "right") : h("right");
            L = [R ? n : "", q, R ? " " : n, ie, J];
        } var Q = o.getParentNode(), V = F(B.left, N.Trailing | N.Line), j = V || !(b && B.type === "LogicalExpression") && Q.type !== B.type && B.left.type !== B.type && B.right.type !== B.type; if (k.push(R ? "" : " ", j ? i(L, { shouldBreak: V }) : L), S && F(B)) {
            var Y = y(t(o, k, v));
            return c(Y) || Y.type === "fill" ? g(Y) : [Y];
        } return k; }
        function C(o) { return o.type !== "LogicalExpression" ? !1 : !!(o.right.type === "ObjectExpression" && o.right.properties.length > 0 || o.right.type === "ArrayExpression" && o.right.elements.length > 0 || _(o.right)); }
        r.exports = { printBinaryishExpression: T, shouldInlineLogicalExpression: C };
    } }), nd = te({ "src/language-js/print/angular.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.join, s = _b.line, a = _b.group, _h = Ke(), n = _h.hasNode, u = _h.hasComment, i = _h.getComments, l = Zn().printBinaryishExpression;
        function p(g, c, f) { var E = g.getValue(); if (E.type.startsWith("NG"))
            switch (E.type) {
                case "NGRoot": return [f("node"), u(E.node) ? " //" + i(E.node)[0].value.trimEnd() : ""];
                case "NGPipeExpression": return l(g, c, f);
                case "NGChainedExpression": return a(t([";", s], g.map(function (_) { return y(_) ? f() : ["(", f(), ")"]; }, "expressions")));
                case "NGEmptyExpression": return "";
                case "NGQuotedExpression": return [E.prefix, ": ", E.value.trim()];
                case "NGMicrosyntax": return g.map(function (_, w) { return [w === 0 ? "" : d(_.getValue(), w, E) ? " " : [";", s], f()]; }, "body");
                case "NGMicrosyntaxKey": return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(E.name) ? E.name : JSON.stringify(E.name);
                case "NGMicrosyntaxExpression": return [f("expression"), E.alias === null ? "" : [" as ", f("alias")]];
                case "NGMicrosyntaxKeyedExpression": {
                    var _ = g.getName(), w = g.getParentNode(), F = d(E, _, w) || (_ === 1 && (E.key.name === "then" || E.key.name === "else") || _ === 2 && E.key.name === "else" && w.body[_ - 1].type === "NGMicrosyntaxKeyedExpression" && w.body[_ - 1].key.name === "then") && w.body[0].type === "NGMicrosyntaxExpression";
                    return [f("key"), F ? " " : ": ", f("expression")];
                }
                case "NGMicrosyntaxLet": return ["let ", f("key"), E.value === null ? "" : [" = ", f("value")]];
                case "NGMicrosyntaxAs": return [f("key"), " as ", f("alias")];
                default: throw new Error("Unknown Angular node type: ".concat(JSON.stringify(E.type), "."));
            } }
        function d(g, c, f) { return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && c === 1 && f.body[0].type === "NGMicrosyntaxLet" && f.body[0].value === null; }
        function y(g) { return n(g.getValue(), function (c) { switch (c.type) {
            case void 0: return !1;
            case "CallExpression":
            case "OptionalCallExpression":
            case "AssignmentExpression": return !0;
        } }); }
        r.exports = { printAngular: p };
    } }), ud = te({ "src/language-js/print/jsx.js": function (e, r) {
        "use strict";
        ne();
        var _b = et(), t = _b.printComments, s = _b.printDanglingComments, a = _b.printCommentsSeparately, _h = qe(), _j = _h.builders, n = _j.line, u = _j.hardline, i = _j.softline, l = _j.group, p = _j.indent, d = _j.conditionalGroup, y = _j.fill, g = _j.ifBreak, c = _j.lineSuffixBoundary, f = _j.join, E = _h.utils.willBreak, _k = Ue(), _ = _k.getLast, w = _k.getPreferredQuote, _q = Ke(), F = _q.isJsxNode, N = _q.rawText, x = _q.isCallExpression, I = _q.isStringLiteral, P = _q.isBinaryish, $ = _q.hasComment, D = _q.CommentCheckFlags, T = _q.hasNodeIgnoreComment, m = Ot(), C = fo().willPrintOwnComments, o = function (U) { return U === "" || U === n || U === u || U === i; };
        function h(U, Z, se) {
            var e_51, _b;
            var fe = U.getValue();
            if (fe.type === "JSXElement" && de(fe))
                return [se("openingElement"), se("closingElement")];
            var ge = fe.type === "JSXElement" ? se("openingElement") : se("openingFragment"), he = fe.type === "JSXElement" ? se("closingElement") : se("closingFragment");
            if (fe.children.length === 1 && fe.children[0].type === "JSXExpressionContainer" && (fe.children[0].expression.type === "TemplateLiteral" || fe.children[0].expression.type === "TaggedTemplateExpression"))
                return __spreadArray(__spreadArray([ge], __read(U.map(se, "children")), false), [he], false);
            fe.children = fe.children.map(function (A) { return Fe(A) ? { type: "JSXText", value: " ", raw: " " } : A; });
            var we = fe.children.some(F), ke = fe.children.filter(function (A) { return A.type === "JSXExpressionContainer"; }).length > 1, Re = fe.type === "JSXElement" && fe.openingElement.attributes.length > 1, Ne = E(ge) || we || Re || ke, Pe = U.getParentNode().rootMarker === "mdx", oe = Z.singleQuote ? "{' '}" : '{" "}', H = Pe ? " " : g([oe, i], " "), pe = fe.openingElement && fe.openingElement.name && fe.openingElement.name.name === "fbt", X = v(U, Z, se, H, pe), le = fe.children.some(function (A) { return ue(A); });
            for (var A = X.length - 2; A >= 0; A--) {
                var G = X[A] === "" && X[A + 1] === "", re = X[A] === u && X[A + 1] === "" && X[A + 2] === u, ye = (X[A] === i || X[A] === u) && X[A + 1] === "" && X[A + 2] === H, Ce = X[A] === H && X[A + 1] === "" && (X[A + 2] === i || X[A + 2] === u), Be = X[A] === H && X[A + 1] === "" && X[A + 2] === H, ve = X[A] === i && X[A + 1] === "" && X[A + 2] === u || X[A] === u && X[A + 1] === "" && X[A + 2] === i;
                re && le || G || ye || Be || ve ? X.splice(A, 2) : Ce && X.splice(A + 1, 2);
            }
            for (; X.length > 0 && o(_(X));)
                X.pop();
            for (; X.length > 1 && o(X[0]) && o(X[1]);)
                X.shift(), X.shift();
            var Ae = [];
            try {
                for (var _h = __values(X.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), A = _k[0], G = _k[1];
                    if (G === H) {
                        if (A === 1 && X[A - 1] === "") {
                            if (X.length === 2) {
                                Ae.push(oe);
                                continue;
                            }
                            Ae.push([oe, u]);
                            continue;
                        }
                        else if (A === X.length - 1) {
                            Ae.push(oe);
                            continue;
                        }
                        else if (X[A - 1] === "" && X[A - 2] === u) {
                            Ae.push(oe);
                            continue;
                        }
                    }
                    Ae.push(G), E(G) && (Ne = !0);
                }
            }
            catch (e_51_1) { e_51 = { error: e_51_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_51) throw e_51.error; }
            }
            var Ee = le ? y(Ae) : l(Ae, { shouldBreak: !0 });
            if (Pe)
                return Ee;
            var De = l([ge, p([u, Ee]), u, he]);
            return Ne ? De : d([l(__spreadArray(__spreadArray([ge], __read(X), false), [he], false)), De]);
        }
        function v(U, Z, se, fe, ge) { var he = []; return U.each(function (we, ke, Re) {
            var e_52, _b;
            var Ne = we.getValue();
            if (Ne.type === "JSXText") {
                var Pe = N(Ne);
                if (ue(Ne)) {
                    var oe = Pe.split(ce);
                    if (oe[0] === "") {
                        if (he.push(""), oe.shift(), /\n/.test(oe[0])) {
                            var pe = Re[ke + 1];
                            he.push(b(ge, oe[1], Ne, pe));
                        }
                        else
                            he.push(fe);
                        oe.shift();
                    }
                    var H = void 0;
                    if (_(oe) === "" && (oe.pop(), H = oe.pop()), oe.length === 0)
                        return;
                    try {
                        for (var _h = __values(oe.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var _k = __read(_j.value, 2), pe = _k[0], X = _k[1];
                            pe % 2 === 1 ? he.push(n) : he.push(X);
                        }
                    }
                    catch (e_52_1) { e_52 = { error: e_52_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                        }
                        finally { if (e_52) throw e_52.error; }
                    }
                    if (H !== void 0)
                        if (/\n/.test(H)) {
                            var pe = Re[ke + 1];
                            he.push(b(ge, _(he), Ne, pe));
                        }
                        else
                            he.push(fe);
                    else {
                        var pe = Re[ke + 1];
                        he.push(S(ge, _(he), Ne, pe));
                    }
                }
                else
                    /\n/.test(Pe) ? Pe.match(/\n/g).length > 1 && he.push("", u) : he.push("", fe);
            }
            else {
                var Pe = se();
                he.push(Pe);
                var oe = Re[ke + 1];
                if (oe && ue(oe)) {
                    var pe = K(N(oe)).split(ce)[0];
                    he.push(S(ge, pe, Ne, oe));
                }
                else
                    he.push(u);
            }
        }, "children"), he; }
        function S(U, Z, se, fe) { return U ? "" : se.type === "JSXElement" && !se.closingElement || fe && fe.type === "JSXElement" && !fe.closingElement ? Z.length === 1 ? i : u : i; }
        function b(U, Z, se, fe) { return U ? u : Z.length === 1 ? se.type === "JSXElement" && !se.closingElement || fe && fe.type === "JSXElement" && !fe.closingElement ? u : i : u; }
        function B(U, Z, se) { var fe = U.getParentNode(); if (!fe || { ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[fe.type])
            return Z; var he = U.match(void 0, function (ke) { return ke.type === "ArrowFunctionExpression"; }, x, function (ke) { return ke.type === "JSXExpressionContainer"; }), we = m(U, se); return l([we ? "" : g("("), p([i, Z]), i, we ? "" : g(")")], { shouldBreak: he }); }
        function k(U, Z, se) { var fe = U.getValue(), ge = []; if (ge.push(se("name")), fe.value) {
            var he = void 0;
            if (I(fe.value)) {
                var ke = N(fe.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), _b = w(ke, Z.jsxSingleQuote ? "'" : '"'), Re = _b.escaped, Ne = _b.quote, Pe = _b.regex;
                ke = ke.replace(Pe, Re);
                var _h = U.call(function () { return a(U, Z); }, "value"), oe = _h.leading, H = _h.trailing;
                he = [oe, Ne, ke, Ne, H];
            }
            else
                he = se("value");
            ge.push("=", he);
        } return ge; }
        function M(U, Z, se) { var fe = U.getValue(), ge = function (he, we) { return he.type === "JSXEmptyExpression" || !$(he) && (he.type === "ArrayExpression" || he.type === "ObjectExpression" || he.type === "ArrowFunctionExpression" || he.type === "AwaitExpression" && (ge(he.argument, he) || he.argument.type === "JSXElement") || x(he) || he.type === "FunctionExpression" || he.type === "TemplateLiteral" || he.type === "TaggedTemplateExpression" || he.type === "DoExpression" || F(we) && (he.type === "ConditionalExpression" || P(he))); }; return ge(fe.expression, U.getParentNode(0)) ? l(["{", se("expression"), c, "}"]) : l(["{", p([i, se("expression")]), i, c, "}"]); }
        function R(U, Z, se) {
            var fe = U.getValue(), ge = fe.name && $(fe.name) || fe.typeParameters && $(fe.typeParameters);
            if (fe.selfClosing && fe.attributes.length === 0 && !ge)
                return ["<", se("name"), se("typeParameters"), " />"];
            if (fe.attributes && fe.attributes.length === 1 && fe.attributes[0].value && I(fe.attributes[0].value) && !fe.attributes[0].value.value.includes("\n") && !ge && !$(fe.attributes[0]))
                return l(__spreadArray(__spreadArray(["<", se("name"), se("typeParameters"), " "], __read(U.map(se, "attributes")), false), [fe.selfClosing ? " />" : ">"], false));
            var he = fe.attributes && fe.attributes.some(function (ke) { return ke.value && I(ke.value) && ke.value.value.includes("\n"); }), we = Z.singleAttributePerLine && fe.attributes.length > 1 ? u : n;
            return l(__spreadArray(["<", se("name"), se("typeParameters"), p(U.map(function () { return [we, se()]; }, "attributes"))], __read(q(fe, Z, ge)), false), { shouldBreak: he });
        }
        function q(U, Z, se) { return U.selfClosing ? [n, "/>"] : J(U, Z, se) ? [">"] : [i, ">"]; }
        function J(U, Z, se) { var fe = U.attributes.length > 0 && $(_(U.attributes), D.Trailing); return U.attributes.length === 0 && !se || (Z.bracketSameLine || Z.jsxBracketSameLine) && (!se || U.attributes.length > 0) && !fe; }
        function L(U, Z, se) { var fe = U.getValue(), ge = []; ge.push("</"); var he = se("name"); return $(fe.name, D.Leading | D.Line) ? ge.push(p([u, he]), u) : $(fe.name, D.Leading | D.Block) ? ge.push(" ", he) : ge.push(he), ge.push(">"), ge; }
        function Q(U, Z) { var se = U.getValue(), fe = $(se), ge = $(se, D.Line), he = se.type === "JSXOpeningFragment"; return [he ? "<" : "</", p([ge ? u : fe && !he ? " " : "", s(U, Z, !0)]), ge ? u : "", ">"]; }
        function V(U, Z, se) { var fe = t(U, h(U, Z, se), Z); return B(U, fe, Z); }
        function j(U, Z) { var se = U.getValue(), fe = $(se, D.Line); return [s(U, Z, !fe), fe ? u : ""]; }
        function Y(U, Z, se) { var fe = U.getValue(); return ["{", U.call(function (ge) { var he = ["...", se()], we = ge.getValue(); return !$(we) || !C(ge) ? he : [p([i, t(ge, he, Z)]), i]; }, fe.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"]; }
        function ie(U, Z, se) { var fe = U.getValue(); if (fe.type.startsWith("JSX"))
            switch (fe.type) {
                case "JSXAttribute": return k(U, Z, se);
                case "JSXIdentifier": return String(fe.name);
                case "JSXNamespacedName": return f(":", [se("namespace"), se("name")]);
                case "JSXMemberExpression": return f(".", [se("object"), se("property")]);
                case "JSXSpreadAttribute": return Y(U, Z, se);
                case "JSXSpreadChild": return Y(U, Z, se);
                case "JSXExpressionContainer": return M(U, Z, se);
                case "JSXFragment":
                case "JSXElement": return V(U, Z, se);
                case "JSXOpeningElement": return R(U, Z, se);
                case "JSXClosingElement": return L(U, Z, se);
                case "JSXOpeningFragment":
                case "JSXClosingFragment": return Q(U, Z);
                case "JSXEmptyExpression": return j(U, Z);
                case "JSXText": throw new Error("JSXText should be handled by JSXElement");
                default: throw new Error("Unknown JSX node type: ".concat(JSON.stringify(fe.type), "."));
            } }
        var ee = "\n\r\t", ce = new RegExp("([" + ee + "]+)"), W = new RegExp("[^" + ee + "]"), K = function (U) { return U.replace(new RegExp("(?:^" + ce.source + "|" + ce.source + "$)"), ""); };
        function de(U) { if (U.children.length === 0)
            return !0; if (U.children.length > 1)
            return !1; var Z = U.children[0]; return Z.type === "JSXText" && !ue(Z); }
        function ue(U) { return U.type === "JSXText" && (W.test(N(U)) || !/\n/.test(N(U))); }
        function Fe(U) { return U.type === "JSXExpressionContainer" && I(U.expression) && U.expression.value === " " && !$(U.expression); }
        function z(U) { var Z = U.getValue(), se = U.getParentNode(); if (!se || !Z || !F(Z) || !F(se))
            return !1; var fe = se.children.indexOf(Z), ge = null; for (var he = fe; he > 0; he--) {
            var we = se.children[he - 1];
            if (!(we.type === "JSXText" && !ue(we))) {
                ge = we;
                break;
            }
        } return ge && ge.type === "JSXExpressionContainer" && ge.expression.type === "JSXEmptyExpression" && T(ge.expression); }
        r.exports = { hasJsxIgnoreComment: z, printJsx: ie };
    } }), ct = te({ "src/language-js/print/misc.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().isNonEmptyArray, _b = qe().builders, s = _b.indent, a = _b.join, n = _b.line, u = Ke().isFlowAnnotationComment;
        function i(_) { var w = _.getValue(); return !w.optional || w.type === "Identifier" && w === _.getParentNode().key ? "" : w.type === "OptionalCallExpression" || w.type === "OptionalMemberExpression" && w.computed ? "?." : "?"; }
        function l(_) { return _.getValue().definite || _.match(void 0, function (w, F) { return F === "id" && w.type === "VariableDeclarator" && w.definite; }) ? "!" : ""; }
        function p(_, w, F) { var N = _.getValue(); return N.typeArguments ? F("typeArguments") : N.typeParameters ? F("typeParameters") : ""; }
        function d(_, w, F) { var N = _.getValue(); if (!N.typeAnnotation)
            return ""; var x = _.getParentNode(), I = x.type === "DeclareFunction" && x.id === N; return u(w.originalText, N.typeAnnotation) ? [" /*: ", F("typeAnnotation"), " */"] : [I ? "" : ": ", F("typeAnnotation")]; }
        function y(_, w, F) { return ["::", F("callee")]; }
        function g(_, w, F) { var N = _.getValue(); return t(N.modifiers) ? [a(" ", _.map(F, "modifiers")), " "] : ""; }
        function c(_, w, F) { return _.type === "EmptyStatement" ? ";" : _.type === "BlockStatement" || F ? [" ", w] : s([n, w]); }
        function f(_, w, F) { return ["...", F("argument"), d(_, w, F)]; }
        function E(_, w) { var F = _.slice(1, -1); if (F.includes('"') || F.includes("'"))
            return _; var N = w.singleQuote ? "'" : '"'; return N + F + N; }
        r.exports = { printOptionalToken: i, printDefiniteToken: l, printFunctionTypeParameters: p, printBindExpressionCallee: y, printTypeScriptModifiers: g, printTypeAnnotation: d, printRestSpread: f, adjustClause: c, printDirective: E };
    } }), Qt = te({ "src/language-js/print/array.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, _b = qe().builders, s = _b.line, a = _b.softline, n = _b.hardline, u = _b.group, i = _b.indent, l = _b.ifBreak, p = _b.fill, _h = Ue(), d = _h.getLast, y = _h.hasNewline, _j = Ke(), g = _j.shouldPrintComma, c = _j.hasComment, f = _j.CommentCheckFlags, E = _j.isNextLineEmpty, _ = _j.isNumericLiteral, w = _j.isSignedNumericLiteral, F = ut().locStart, _k = ct(), N = _k.printOptionalToken, x = _k.printTypeAnnotation;
        function I(T, m, C) { var o = T.getValue(), h = [], v = o.type === "TupleExpression" ? "#[" : "[", S = "]"; if (o.elements.length === 0)
            c(o, f.Dangling) ? h.push(u([v, t(T, m), a, S])) : h.push(v, S);
        else {
            var b = d(o.elements), B = !(b && b.type === "RestElement"), k = b === null, M = Symbol("array"), R = !m.__inJestEach && o.elements.length > 1 && o.elements.every(function (L, Q, V) { var j = L && L.type; if (j !== "ArrayExpression" && j !== "ObjectExpression")
                return !1; var Y = V[Q + 1]; if (Y && j !== Y.type)
                return !1; var ie = j === "ArrayExpression" ? "elements" : "properties"; return L[ie] && L[ie].length > 1; }), q = P(o, m), J = B ? k ? "," : g(m) ? q ? l(",", "", { groupId: M }) : l(",") : "" : "";
            h.push(u([v, i([a, q ? D(T, m, C, J) : [$(T, m, "elements", C), J], t(T, m, !0)]), a, S], { shouldBreak: R, id: M }));
        } return h.push(N(T), x(T, m, C)), h; }
        function P(T, m) { return T.elements.length > 1 && T.elements.every(function (C) { return C && (_(C) || w(C) && !c(C.argument)) && !c(C, f.Trailing | f.Line, function (o) { return !y(m.originalText, F(o), { backwards: !0 }); }); }); }
        function $(T, m, C, o) { var h = [], v = []; return T.each(function (S) { h.push(v, u(o())), v = [",", s], S.getValue() && E(S.getValue(), m) && v.push(a); }, C), h; }
        function D(T, m, C, o) { var h = []; return T.each(function (v, S, b) { var B = S === b.length - 1; h.push([C(), B ? o : ","]), B || h.push(E(v.getValue(), m) ? [n, n] : c(b[S + 1], f.Leading | f.Line) ? n : s); }, "elements"), p(h); }
        r.exports = { printArray: I, printArrayItems: $, isConciselyPrintedArray: P };
    } }), mo = te({ "src/language-js/print/call-arguments.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, _b = Ue(), s = _b.getLast, a = _b.getPenultimate, _h = Ke(), n = _h.getFunctionParameters, u = _h.hasComment, i = _h.CommentCheckFlags, l = _h.isFunctionCompositionArgs, p = _h.isJsxNode, d = _h.isLongCurriedCallExpression, y = _h.shouldPrintComma, g = _h.getCallArguments, c = _h.iterateCallArgumentsPath, f = _h.isNextLineEmpty, E = _h.isCallExpression, _ = _h.isStringLiteral, w = _h.isObjectProperty, F = _h.isTSTypeExpression, _j = qe(), _k = _j.builders, N = _k.line, x = _k.hardline, I = _k.softline, P = _k.group, $ = _k.indent, D = _k.conditionalGroup, T = _k.ifBreak, m = _k.breakParent, C = _j.utils.willBreak, o = Kt().ArgExpansionBailout, h = Qt().isConciselyPrintedArray;
        function v(q, J, L) { var Q = q.getValue(), V = Q.type === "ImportExpression", j = g(Q); if (j.length === 0)
            return ["(", t(q, J, !0), ")"]; if (k(j))
            return ["(", L(["arguments", 0]), ", ", L(["arguments", 1]), ")"]; var Y = !1, ie = !1, ee = j.length - 1, ce = []; c(q, function (z, U) { var Z = z.getNode(), se = [L()]; U === ee || (f(Z, J) ? (U === 0 && (ie = !0), Y = !0, se.push(",", x, x)) : se.push(",", N)), ce.push(se); }); var W = !(V || Q.callee && Q.callee.type === "Import") && y(J, "all") ? "," : ""; function K() { return P(["(", $(__spreadArray([N], __read(ce), false)), W, N, ")"], { shouldBreak: !0 }); } if (Y || q.getParentNode().type !== "Decorator" && l(j))
            return K(); var de = B(j), ue = b(j, J); if (de || ue) {
            if (de ? ce.slice(1).some(C) : ce.slice(0, -1).some(C))
                return K();
            var z_1 = [];
            try {
                q.try(function () { c(q, function (U, Z) { de && Z === 0 && (z_1 = __spreadArray([[L([], { expandFirstArg: !0 }), ce.length > 1 ? "," : "", ie ? x : N, ie ? x : ""]], __read(ce.slice(1)), false)), ue && Z === ee && (z_1 = __spreadArray(__spreadArray([], __read(ce.slice(0, -1)), false), [L([], { expandLastArg: !0 })], false)); }); });
            }
            catch (U) {
                if (U instanceof o)
                    return K();
                throw U;
            }
            return [ce.some(C) ? m : "", D([__spreadArray(__spreadArray(["("], __read(z_1), false), [")"], false), de ? __spreadArray(__spreadArray(["(", P(z_1[0], { shouldBreak: !0 })], __read(z_1.slice(1)), false), [")"], false) : __spreadArray(__spreadArray(["("], __read(ce.slice(0, -1)), false), [P(s(z_1), { shouldBreak: !0 }), ")"], false), K()])];
        } var Fe = ["(", $(__spreadArray([I], __read(ce), false)), T(W), I, ")"]; return d(q) ? Fe : P(Fe, { shouldBreak: ce.some(C) || Y }); }
        function S(q) { var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; return q.type === "ObjectExpression" && (q.properties.length > 0 || u(q)) || q.type === "ArrayExpression" && (q.elements.length > 0 || u(q)) || q.type === "TSTypeAssertion" && S(q.expression) || F(q) && S(q.expression) || q.type === "FunctionExpression" || q.type === "ArrowFunctionExpression" && (!q.returnType || !q.returnType.typeAnnotation || q.returnType.typeAnnotation.type !== "TSTypeReference" || M(q.body)) && (q.body.type === "BlockStatement" || q.body.type === "ArrowFunctionExpression" && S(q.body, !0) || q.body.type === "ObjectExpression" || q.body.type === "ArrayExpression" || !J && (E(q.body) || q.body.type === "ConditionalExpression") || p(q.body)) || q.type === "DoExpression" || q.type === "ModuleExpression"; }
        function b(q, J) { var L = s(q), Q = a(q); return !u(L, i.Leading) && !u(L, i.Trailing) && S(L) && (!Q || Q.type !== L.type) && (q.length !== 2 || Q.type !== "ArrowFunctionExpression" || L.type !== "ArrayExpression") && !(q.length > 1 && L.type === "ArrayExpression" && h(L, J)); }
        function B(q) { if (q.length !== 2)
            return !1; var _b = __read(q, 2), J = _b[0], L = _b[1]; return J.type === "ModuleExpression" && R(L) ? !0 : !u(J) && (J.type === "FunctionExpression" || J.type === "ArrowFunctionExpression" && J.body.type === "BlockStatement") && L.type !== "FunctionExpression" && L.type !== "ArrowFunctionExpression" && L.type !== "ConditionalExpression" && !S(L); }
        function k(q) { return q.length === 2 && q[0].type === "ArrowFunctionExpression" && n(q[0]).length === 0 && q[0].body.type === "BlockStatement" && q[1].type === "ArrayExpression" && !q.some(function (J) { return u(J); }); }
        function M(q) { return q.type === "BlockStatement" && (q.body.some(function (J) { return J.type !== "EmptyStatement"; }) || u(q, i.Dangling)); }
        function R(q) { return q.type === "ObjectExpression" && q.properties.length === 1 && w(q.properties[0]) && q.properties[0].key.type === "Identifier" && q.properties[0].key.name === "type" && _(q.properties[0].value) && q.properties[0].value.value === "module"; }
        r.exports = v;
    } }), go = te({ "src/language-js/print/member.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.softline, s = _b.group, a = _b.indent, n = _b.label, _h = Ke(), u = _h.isNumericLiteral, i = _h.isMemberExpression, l = _h.isCallExpression, p = ct().printOptionalToken;
        function d(g, c, f) { var E = g.getValue(), _ = g.getParentNode(), w, F = 0; do
            w = g.getParentNode(F), F++;
        while (w && (i(w) || w.type === "TSNonNullExpression")); var N = f("object"), x = y(g, c, f), I = w && (w.type === "NewExpression" || w.type === "BindExpression" || w.type === "AssignmentExpression" && w.left.type !== "Identifier") || E.computed || E.object.type === "Identifier" && E.property.type === "Identifier" && !i(_) || (_.type === "AssignmentExpression" || _.type === "VariableDeclarator") && (l(E.object) && E.object.arguments.length > 0 || E.object.type === "TSNonNullExpression" && l(E.object.expression) && E.object.expression.arguments.length > 0 || N.label === "member-chain"); return n(N.label === "member-chain" ? "member-chain" : "member", [N, I ? x : s(a([t, x]))]); }
        function y(g, c, f) { var E = f("property"), _ = g.getValue(), w = p(g); return _.computed ? !_.property || u(_.property) ? [w, "[", E, "]"] : s([w, "[", a([t, E]), t, "]"]) : [w, ".", E]; }
        r.exports = { printMemberExpression: d, printMemberLookup: y };
    } }), sd = te({ "src/language-js/print/member-chain.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printComments, _b = Ue(), s = _b.getLast, a = _b.isNextLineEmptyAfterIndex, n = _b.getNextNonSpaceNonCommentCharacterIndex, u = Ot(), _h = Ke(), i = _h.isCallExpression, l = _h.isMemberExpression, p = _h.isFunctionOrArrowExpression, d = _h.isLongCurriedCallExpression, y = _h.isMemberish, g = _h.isNumericLiteral, c = _h.isSimpleCallArgument, f = _h.hasComment, E = _h.CommentCheckFlags, _ = _h.isNextLineEmpty, w = ut().locEnd, _j = qe(), _k = _j.builders, F = _k.join, N = _k.hardline, x = _k.group, I = _k.indent, P = _k.conditionalGroup, $ = _k.breakParent, D = _k.label, T = _j.utils.willBreak, m = mo(), C = go().printMemberLookup, _q = ct(), o = _q.printOptionalToken, h = _q.printFunctionTypeParameters, v = _q.printBindExpressionCallee;
        function S(b, B, k) { var M = b.getParentNode(), R = !M || M.type === "ExpressionStatement", q = []; function J(Ne) { var Pe = B.originalText, oe = n(Pe, Ne, w); return Pe.charAt(oe) === ")" ? oe !== !1 && a(Pe, oe + 1) : _(Ne, B); } function L(Ne) { var Pe = Ne.getValue(); i(Pe) && (y(Pe.callee) || i(Pe.callee)) ? (q.unshift({ node: Pe, printed: [t(Ne, [o(Ne), h(Ne, B, k), m(Ne, B, k)], B), J(Pe) ? N : ""] }), Ne.call(function (oe) { return L(oe); }, "callee")) : y(Pe) ? (q.unshift({ node: Pe, needsParens: u(Ne, B), printed: t(Ne, l(Pe) ? C(Ne, B, k) : v(Ne, B, k), B) }), Ne.call(function (oe) { return L(oe); }, "object")) : Pe.type === "TSNonNullExpression" ? (q.unshift({ node: Pe, printed: t(Ne, "!", B) }), Ne.call(function (oe) { return L(oe); }, "expression")) : q.unshift({ node: Pe, printed: k() }); } var Q = b.getValue(); q.unshift({ node: Q, printed: [o(b), h(b, B, k), m(b, B, k)] }), Q.callee && b.call(function (Ne) { return L(Ne); }, "callee"); var V = [], j = [q[0]], Y = 1; for (; Y < q.length && (q[Y].node.type === "TSNonNullExpression" || i(q[Y].node) || l(q[Y].node) && q[Y].node.computed && g(q[Y].node.property)); ++Y)
            j.push(q[Y]); if (!i(q[0].node))
            for (; Y + 1 < q.length && (y(q[Y].node) && y(q[Y + 1].node)); ++Y)
                j.push(q[Y]); V.push(j), j = []; var ie = !1; for (; Y < q.length; ++Y) {
            if (ie && y(q[Y].node)) {
                if (q[Y].node.computed && g(q[Y].node.property)) {
                    j.push(q[Y]);
                    continue;
                }
                V.push(j), j = [], ie = !1;
            }
            (i(q[Y].node) || q[Y].node.type === "ImportExpression") && (ie = !0), j.push(q[Y]), f(q[Y].node, E.Trailing) && (V.push(j), j = [], ie = !1);
        } j.length > 0 && V.push(j); function ee(Ne) { return /^[A-Z]|^[$_]+$/.test(Ne); } function ce(Ne) { return Ne.length <= B.tabWidth; } function W(Ne) { var Pe = Ne[1].length > 0 && Ne[1][0].node.computed; if (Ne[0].length === 1) {
            var H = Ne[0][0].node;
            return H.type === "ThisExpression" || H.type === "Identifier" && (ee(H.name) || R && ce(H.name) || Pe);
        } var oe = s(Ne[0]).node; return l(oe) && oe.property.type === "Identifier" && (ee(oe.property.name) || Pe); } var K = V.length >= 2 && !f(V[1][0].node) && W(V); function de(Ne) { var Pe = Ne.map(function (oe) { return oe.printed; }); return Ne.length > 0 && s(Ne).needsParens ? __spreadArray(__spreadArray(["("], __read(Pe), false), [")"], false) : Pe; } function ue(Ne) { return Ne.length === 0 ? "" : I(x([N, F(N, Ne.map(de))])); } var Fe = V.map(de), z = Fe, U = K ? 3 : 2, Z = V.flat(), se = Z.slice(1, -1).some(function (Ne) { return f(Ne.node, E.Leading); }) || Z.slice(0, -1).some(function (Ne) { return f(Ne.node, E.Trailing); }) || V[U] && f(V[U][0].node, E.Leading); if (V.length <= U && !se)
            return d(b) ? z : x(z); var fe = s(V[K ? 1 : 0]).node, ge = !i(fe) && J(fe), he = [de(V[0]), K ? V.slice(1, 2).map(de) : "", ge ? N : "", ue(V.slice(K ? 2 : 1))], we = q.map(function (Ne) { var Pe = Ne.node; return Pe; }).filter(i); function ke() { var Ne = s(s(V)).node, Pe = s(Fe); return i(Ne) && T(Pe) && we.slice(0, -1).some(function (oe) { return oe.arguments.some(p); }); } var Re; return se || we.length > 2 && we.some(function (Ne) { return !Ne.arguments.every(function (Pe) { return c(Pe, 0); }); }) || Fe.slice(0, -1).some(T) || ke() ? Re = x(he) : Re = [T(z) || ge ? $ : "", P([z, he])], D("member-chain", Re); }
        r.exports = S;
    } }), yo = te({ "src/language-js/print/call-expression.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.join, s = _b.group, a = Ot(), _h = Ke(), n = _h.getCallArguments, u = _h.hasFlowAnnotationComment, i = _h.isCallExpression, l = _h.isMemberish, p = _h.isStringLiteral, d = _h.isTemplateOnItsOwnLine, y = _h.isTestCall, g = _h.iterateCallArgumentsPath, c = sd(), f = mo(), _j = ct(), E = _j.printOptionalToken, _ = _j.printFunctionTypeParameters;
        function w(N, x, I) { var P = N.getValue(), $ = N.getParentNode(), D = P.type === "NewExpression", T = P.type === "ImportExpression", m = E(N), C = n(P); if (C.length > 0 && (!T && !D && F(P, $) || C.length === 1 && d(C[0], x.originalText) || !D && y(P, $))) {
            var v_1 = [];
            return g(N, function () { v_1.push(I()); }), [D ? "new " : "", I("callee"), m, _(N, x, I), "(", t(", ", v_1), ")"];
        } var o = (x.parser === "babel" || x.parser === "babel-flow") && P.callee && P.callee.type === "Identifier" && u(P.callee.trailingComments); if (o && (P.callee.trailingComments[0].printed = !0), !T && !D && l(P.callee) && !N.call(function (v) { return a(v, x); }, "callee"))
            return c(N, x, I); var h = [D ? "new " : "", T ? "import" : I("callee"), m, o ? "/*:: ".concat(P.callee.trailingComments[0].value.slice(2).trim(), " */") : "", _(N, x, I), f(N, x, I)]; return T || i(P.callee) ? s(h) : h; }
        function F(N, x) { if (N.callee.type !== "Identifier")
            return !1; if (N.callee.name === "require")
            return !0; if (N.callee.name === "define") {
            var I = n(N);
            return x.type === "ExpressionStatement" && (I.length === 1 || I.length === 2 && I[0].type === "ArrayExpression" || I.length === 3 && p(I[0]) && I[1].type === "ArrayExpression");
        } return !1; }
        r.exports = { printCallExpression: w };
    } }), Zt = te({ "src/language-js/print/assignment.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.isNonEmptyArray, s = _b.getStringWidth, _h = qe(), _j = _h.builders, a = _j.line, n = _j.group, u = _j.indent, i = _j.indentIfBreak, l = _j.lineSuffixBoundary, _k = _h.utils, p = _k.cleanDoc, d = _k.willBreak, y = _k.canBreak, _q = Ke(), g = _q.hasLeadingOwnLineComment, c = _q.isBinaryish, f = _q.isStringLiteral, E = _q.isLiteral, _ = _q.isNumericLiteral, w = _q.isCallExpression, F = _q.isMemberExpression, N = _q.getCallArguments, x = _q.rawText, I = _q.hasComment, P = _q.isSignedNumericLiteral, $ = _q.isObjectProperty, D = Zn().shouldInlineLogicalExpression, T = yo().printCallExpression;
        function m(W, K, de, ue, Fe, z) { var U = h(W, K, de, ue, z), Z = de(z, { assignmentLayout: U }); switch (U) {
            case "break-after-operator": return n([n(ue), Fe, n(u([a, Z]))]);
            case "never-break-after-operator": return n([n(ue), Fe, " ", Z]);
            case "fluid": {
                var se = Symbol("assignment");
                return n([n(ue), Fe, n(u(a), { id: se }), l, i(Z, { groupId: se })]);
            }
            case "break-lhs": return n([ue, Fe, " ", n(Z)]);
            case "chain": return [n(ue), Fe, a, Z];
            case "chain-tail": return [n(ue), Fe, u([a, Z])];
            case "chain-tail-arrow-chain": return [n(ue), Fe, Z];
            case "only-left": return ue;
        } }
        function C(W, K, de) { var ue = W.getValue(); return m(W, K, de, de("left"), [" ", ue.operator], "right"); }
        function o(W, K, de) { return m(W, K, de, de("id"), " =", "init"); }
        function h(W, K, de, ue, Fe) { var z = W.getValue(), U = z[Fe]; if (!U)
            return "only-left"; var Z = !b(U); if (W.match(b, B, function (he) { return !Z || he.type !== "ExpressionStatement" && he.type !== "VariableDeclaration"; }))
            return Z ? U.type === "ArrowFunctionExpression" && U.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain"; if (!Z && b(U.right) || g(K.originalText, U))
            return "break-after-operator"; if (U.type === "CallExpression" && U.callee.name === "require" || K.parser === "json5" || K.parser === "json")
            return "never-break-after-operator"; if (S(z) || k(z) || q(z) || J(z) && y(ue))
            return "break-lhs"; var ge = ie(z, ue, K); return W.call(function () { return v(W, K, de, ge); }, Fe) ? "break-after-operator" : ge || U.type === "TemplateLiteral" || U.type === "TaggedTemplateExpression" || U.type === "BooleanLiteral" || _(U) || U.type === "ClassExpression" ? "never-break-after-operator" : "fluid"; }
        function v(W, K, de, ue) { var Fe = W.getValue(); if (c(Fe) && !D(Fe))
            return !0; switch (Fe.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression": return !0;
            case "ConditionalExpression": {
                var Z = Fe.test;
                return c(Z) && !D(Z);
            }
            case "ClassExpression": return t(Fe.decorators);
        } if (ue)
            return !1; var z = Fe, U = []; for (;;)
            if (z.type === "UnaryExpression")
                z = z.argument, U.push("argument");
            else if (z.type === "TSNonNullExpression")
                z = z.expression, U.push("expression");
            else
                break; return !!(f(z) || W.call.apply(W, __spreadArray([function () { return V(W, K, de); }], __read(U), false))); }
        function S(W) { if (B(W)) {
            var K = W.left || W.id;
            return K.type === "ObjectPattern" && K.properties.length > 2 && K.properties.some(function (de) { return $(de) && (!de.shorthand || de.value && de.value.type === "AssignmentPattern"); });
        } return !1; }
        function b(W) { return W.type === "AssignmentExpression"; }
        function B(W) { return b(W) || W.type === "VariableDeclarator"; }
        function k(W) { var K = M(W); if (t(K)) {
            var de_1 = W.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (K.length > 1 && K.some(function (ue) { return ue[de_1] || ue.default; }))
                return !0;
        } return !1; }
        function M(W) { return R(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null; }
        function R(W) { return W.type === "TSTypeAliasDeclaration" || W.type === "TypeAlias"; }
        function q(W) { if (W.type !== "VariableDeclarator")
            return !1; var K = W.id.typeAnnotation; if (!K || !K.typeAnnotation)
            return !1; var de = L(K.typeAnnotation); return t(de) && de.length > 1 && de.some(function (ue) { return t(L(ue)) || ue.type === "TSConditionalType"; }); }
        function J(W) { return W.type === "VariableDeclarator" && W.init && W.init.type === "ArrowFunctionExpression"; }
        function L(W) { return Q(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null; }
        function Q(W) { return W.type === "TSTypeReference" || W.type === "GenericTypeAnnotation"; }
        function V(W, K, de) { var ue = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, Fe = W.getValue(), z = function () { return V(W, K, de, !0); }; if (Fe.type === "TSNonNullExpression")
            return W.call(z, "expression"); if (w(Fe)) {
            if (T(W, K, de).label === "member-chain")
                return !1;
            var Z = N(Fe);
            return !(Z.length === 0 || Z.length === 1 && Y(Z[0], K)) || ee(Fe, de) ? !1 : W.call(z, "callee");
        } return F(Fe) ? W.call(z, "object") : ue && (Fe.type === "Identifier" || Fe.type === "ThisExpression"); }
        var j = .25;
        function Y(W, K) {
            var de = K.printWidth;
            if (I(W))
                return !1;
            var ue = de * j;
            if (W.type === "ThisExpression" || W.type === "Identifier" && W.name.length <= ue || P(W) && !I(W.argument))
                return !0;
            var Fe = W.type === "Literal" && "regex" in W && W.regex.pattern || W.type === "RegExpLiteral" && W.pattern;
            return Fe ? Fe.length <= ue : f(W) ? x(W).length <= ue : W.type === "TemplateLiteral" ? W.expressions.length === 0 && W.quasis[0].value.raw.length <= ue && !W.quasis[0].value.raw.includes("\n") : E(W);
        }
        function ie(W, K, de) { if (!$(W))
            return !1; K = p(K); var ue = 3; return typeof K == "string" && s(K) < de.tabWidth + ue; }
        function ee(W, K) { var de = ce(W); if (t(de)) {
            if (de.length > 1)
                return !0;
            if (de.length === 1) {
                var Fe = de[0];
                if (Fe.type === "TSUnionType" || Fe.type === "UnionTypeAnnotation" || Fe.type === "TSIntersectionType" || Fe.type === "IntersectionTypeAnnotation" || Fe.type === "TSTypeLiteral" || Fe.type === "ObjectTypeAnnotation")
                    return !0;
            }
            var ue = W.typeParameters ? "typeParameters" : "typeArguments";
            if (d(K(ue)))
                return !0;
        } return !1; }
        function ce(W) { return W.typeParameters && W.typeParameters.params || W.typeArguments && W.typeArguments.params; }
        r.exports = { printVariableDeclarator: o, printAssignmentExpression: C, printAssignment: m, isArrowFunctionVariableDeclarator: J };
    } }), Ir = te({ "src/language-js/print/function-parameters.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().getNextNonSpaceNonCommentCharacter, s = et().printDanglingComments, _b = qe(), _h = _b.builders, a = _h.line, n = _h.hardline, u = _h.softline, i = _h.group, l = _h.indent, p = _h.ifBreak, _j = _b.utils, d = _j.removeLines, y = _j.willBreak, _k = Ke(), g = _k.getFunctionParameters, c = _k.iterateFunctionParametersPath, f = _k.isSimpleType, E = _k.isTestCall, _ = _k.isTypeAnnotationAFunction, w = _k.isObjectType, F = _k.isObjectTypePropertyAFunction, N = _k.hasRestParameter, x = _k.shouldPrintComma, I = _k.hasComment, P = _k.isNextLineEmpty, $ = ut().locEnd, D = Kt().ArgExpansionBailout, T = ct().printFunctionTypeParameters;
        function m(v, S, b, B, k) { var M = v.getValue(), R = g(M), q = k ? T(v, b, S) : ""; if (R.length === 0)
            return [q, "(", s(v, b, !0, function (ie) { return t(b.originalText, ie, $) === ")"; }), ")"]; var J = v.getParentNode(), L = E(J), Q = C(M), V = []; if (c(v, function (ie, ee) { var ce = ee === R.length - 1; ce && M.rest && V.push("..."), V.push(S()), !ce && (V.push(","), L || Q ? V.push(" ") : P(R[ee], b) ? V.push(n, n) : V.push(a)); }), B) {
            if (y(q) || y(V))
                throw new D;
            return i([d(q), "(", d(V), ")"]);
        } var j = R.every(function (ie) { return !ie.decorators; }); return Q && j ? __spreadArray(__spreadArray([q, "("], __read(V), false), [")"], false) : L ? __spreadArray(__spreadArray([q, "("], __read(V), false), [")"], false) : (F(J) || _(J) || J.type === "TypeAlias" || J.type === "UnionTypeAnnotation" || J.type === "TSUnionType" || J.type === "IntersectionTypeAnnotation" || J.type === "FunctionTypeAnnotation" && J.returnType === M) && R.length === 1 && R[0].name === null && M.this !== R[0] && R[0].typeAnnotation && M.typeParameters === null && f(R[0].typeAnnotation) && !M.rest ? b.arrowParens === "always" ? __spreadArray(__spreadArray(["("], __read(V), false), [")"], false) : V : [q, "(", l(__spreadArray([u], __read(V), false)), p(!N(M) && x(b, "all") ? "," : ""), u, ")"]; }
        function C(v) { if (!v)
            return !1; var S = g(v); if (S.length !== 1)
            return !1; var _b = __read(S, 1), b = _b[0]; return !I(b) && (b.type === "ObjectPattern" || b.type === "ArrayPattern" || b.type === "Identifier" && b.typeAnnotation && (b.typeAnnotation.type === "TypeAnnotation" || b.typeAnnotation.type === "TSTypeAnnotation") && w(b.typeAnnotation.typeAnnotation) || b.type === "FunctionTypeParam" && w(b.typeAnnotation) || b.type === "AssignmentPattern" && (b.left.type === "ObjectPattern" || b.left.type === "ArrayPattern") && (b.right.type === "Identifier" || b.right.type === "ObjectExpression" && b.right.properties.length === 0 || b.right.type === "ArrayExpression" && b.right.elements.length === 0)); }
        function o(v) { var S; return v.returnType ? (S = v.returnType, S.typeAnnotation && (S = S.typeAnnotation)) : v.typeAnnotation && (S = v.typeAnnotation), S; }
        function h(v, S) { var b = o(v); if (!b)
            return !1; var B = v.typeParameters && v.typeParameters.params; if (B) {
            if (B.length > 1)
                return !1;
            if (B.length === 1) {
                var k = B[0];
                if (k.constraint || k.default)
                    return !1;
            }
        } return g(v).length === 1 && (w(b) || y(S)); }
        r.exports = { printFunctionParameters: m, shouldHugFunctionParameters: C, shouldGroupFunctionParameters: h };
    } }), kr = te({ "src/language-js/print/type-annotation.js": function (e, r) {
        "use strict";
        ne();
        var _b = et(), t = _b.printComments, s = _b.printDanglingComments, a = Ue().isNonEmptyArray, _h = qe().builders, n = _h.group, u = _h.join, i = _h.line, l = _h.softline, p = _h.indent, d = _h.align, y = _h.ifBreak, g = Ot(), c = ut().locStart, _j = Ke(), f = _j.isSimpleType, E = _j.isObjectType, _ = _j.hasLeadingOwnLineComment, w = _j.isObjectTypePropertyAFunction, F = _j.shouldPrintComma, N = Zt().printAssignment, _k = Ir(), x = _k.printFunctionParameters, I = _k.shouldGroupFunctionParameters, P = Qt().printArrayItems;
        function $(b) { if (f(b) || E(b))
            return !0; if (b.type === "UnionTypeAnnotation" || b.type === "TSUnionType") {
            var B = b.types.filter(function (M) { return M.type === "VoidTypeAnnotation" || M.type === "TSVoidKeyword" || M.type === "NullLiteralTypeAnnotation" || M.type === "TSNullKeyword"; }).length, k = b.types.some(function (M) { return M.type === "ObjectTypeAnnotation" || M.type === "TSTypeLiteral" || M.type === "GenericTypeAnnotation" || M.type === "TSTypeReference"; });
            if (b.types.length - 1 === B && k)
                return !0;
        } return !1; }
        function D(b, B, k) { var M = B.semi ? ";" : "", R = b.getValue(), q = []; return q.push("opaque type ", k("id"), k("typeParameters")), R.supertype && q.push(": ", k("supertype")), R.impltype && q.push(" = ", k("impltype")), q.push(M), q; }
        function T(b, B, k) { var M = B.semi ? ";" : "", R = b.getValue(), q = []; R.declare && q.push("declare "), q.push("type ", k("id"), k("typeParameters")); var J = R.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right"; return [N(b, B, k, q, " =", J), M]; }
        function m(b, B, k) { var M = b.getValue(), R = b.map(k, "types"), q = [], J = !1; for (var L = 0; L < R.length; ++L)
            L === 0 ? q.push(R[L]) : E(M.types[L - 1]) && E(M.types[L]) ? q.push([" & ", J ? p(R[L]) : R[L]]) : !E(M.types[L - 1]) && !E(M.types[L]) ? q.push(p([" &", i, R[L]])) : (L > 1 && (J = !0), q.push(" & ", L > 1 ? p(R[L]) : R[L])); return n(q); }
        function C(b, B, k) { var M = b.getValue(), R = b.getParentNode(), q = R.type !== "TypeParameterInstantiation" && R.type !== "TSTypeParameterInstantiation" && R.type !== "GenericTypeAnnotation" && R.type !== "TSTypeReference" && R.type !== "TSTypeAssertion" && R.type !== "TupleTypeAnnotation" && R.type !== "TSTupleType" && !(R.type === "FunctionTypeParam" && !R.name && b.getParentNode(1).this !== R) && !((R.type === "TypeAlias" || R.type === "VariableDeclarator" || R.type === "TSTypeAliasDeclaration") && _(B.originalText, M)), J = $(M), L = b.map(function (j) { var Y = k(); return J || (Y = d(2, Y)), t(j, Y, B); }, "types"); if (J)
            return u(" | ", L); var Q = q && !_(B.originalText, M), V = [y([Q ? i : "", "| "]), u([i, "| "], L)]; return g(b, B) ? n([p(V), l]) : R.type === "TupleTypeAnnotation" && R.types.length > 1 || R.type === "TSTupleType" && R.elementTypes.length > 1 ? n([p([y(["(", l]), V]), l, y(")")]) : n(q ? p(V) : V); }
        function o(b, B, k) { var M = b.getValue(), R = [], q = b.getParentNode(0), J = b.getParentNode(1), L = b.getParentNode(2), Q = M.type === "TSFunctionType" || !((q.type === "ObjectTypeProperty" || q.type === "ObjectTypeInternalSlot") && !q.variance && !q.optional && c(q) === c(M) || q.type === "ObjectTypeCallProperty" || L && L.type === "DeclareFunction"), V = Q && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation"), j = V && Q && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation") && J.type === "ArrowFunctionExpression"; w(q) && (Q = !0, V = !0), j && R.push("("); var Y = x(b, k, B, !1, !0), ie = M.returnType || M.predicate || M.typeAnnotation ? [Q ? " => " : ": ", k("returnType"), k("predicate"), k("typeAnnotation")] : "", ee = I(M, ie); return R.push(ee ? n(Y) : Y), ie && R.push(ie), j && R.push(")"), n(R); }
        function h(b, B, k) { var M = b.getValue(), R = M.type === "TSTupleType" ? "elementTypes" : "types", q = M[R], J = a(q), L = J ? l : ""; return n(["[", p([L, P(b, B, R, k)]), y(J && F(B, "all") ? "," : ""), s(b, B, !0), L, "]"]); }
        function v(b, B, k) { var M = b.getValue(), R = M.type === "OptionalIndexedAccessType" && M.optional ? "?.[" : "["; return [k("objectType"), R, k("indexType"), "]"]; }
        function S(b, B, k) { var M = b.getValue(); return [M.postfix ? "" : k, B("typeAnnotation"), M.postfix ? k : ""]; }
        r.exports = { printOpaqueType: D, printTypeAlias: T, printIntersectionType: m, printUnionType: C, printFunctionType: o, printTupleType: h, printIndexedAccessType: v, shouldHugType: $, printJSDocType: S };
    } }), Lr = te({ "src/language-js/print/type-parameters.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, _b = qe().builders, s = _b.join, a = _b.line, n = _b.hardline, u = _b.softline, i = _b.group, l = _b.indent, p = _b.ifBreak, _h = Ke(), d = _h.isTestCall, y = _h.hasComment, g = _h.CommentCheckFlags, c = _h.isTSXFile, f = _h.shouldPrintComma, E = _h.getFunctionParameters, _ = _h.isObjectType, w = _h.getTypeScriptMappedTypeModifier, F = Ue().createGroupIdMapper, N = kr().shouldHugType, x = Zt().isArrowFunctionVariableDeclarator, I = F("typeParameters");
        function P(T, m, C, o) { var h = T.getValue(); if (!h[o])
            return ""; if (!Array.isArray(h[o]))
            return C(o); var v = T.getNode(2), S = v && d(v), b = T.match(function (M) { return !(M[o].length === 1 && _(M[o][0])); }, void 0, function (M, R) { return R === "typeAnnotation"; }, function (M) { return M.type === "Identifier"; }, x); if (h[o].length === 0 || !b && (S || h[o].length === 1 && (h[o][0].type === "NullableTypeAnnotation" || N(h[o][0]))))
            return ["<", s(", ", T.map(C, o)), $(T, m), ">"]; var k = h.type === "TSTypeParameterInstantiation" ? "" : E(h).length === 1 && c(m) && !h[o][0].constraint && T.getParentNode().type === "ArrowFunctionExpression" ? "," : f(m, "all") ? p(",") : ""; return i(["<", l([u, s([",", a], T.map(C, o))]), k, u, ">"], { id: I(h) }); }
        function $(T, m) { var C = T.getValue(); if (!y(C, g.Dangling))
            return ""; var o = !y(C, g.Line), h = t(T, m, o); return o ? h : [h, n]; }
        function D(T, m, C) { var o = T.getValue(), h = [o.type === "TSTypeParameter" && o.const ? "const " : ""], v = T.getParentNode(); return v.type === "TSMappedType" ? (v.readonly && h.push(w(v.readonly, "readonly"), " "), h.push("[", C("name")), o.constraint && h.push(" in ", C("constraint")), v.nameType && h.push(" as ", T.callParent(function () { return C("nameType"); })), h.push("]"), h) : (o.variance && h.push(C("variance")), o.in && h.push("in "), o.out && h.push("out "), h.push(C("name")), o.bound && h.push(": ", C("bound")), o.constraint && h.push(" extends ", C("constraint")), o.default && h.push(" = ", C("default")), h); }
        r.exports = { printTypeParameter: D, printTypeParameters: P, getTypeParametersGroupId: I };
    } }), er = te({ "src/language-js/print/property.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printComments, _b = Ue(), s = _b.printString, a = _b.printNumber, _h = Ke(), n = _h.isNumericLiteral, u = _h.isSimpleNumber, i = _h.isStringLiteral, l = _h.isStringPropSafeToUnquote, p = _h.rawText, d = Zt().printAssignment, y = new WeakMap;
        function g(f, E, _) { var w = f.getNode(); if (w.computed)
            return ["[", _("key"), "]"]; var F = f.getParentNode(), N = w.key; if (E.quoteProps === "consistent" && !y.has(F)) {
            var x = (F.properties || F.body || F.members).some(function (I) { return !I.computed && I.key && i(I.key) && !l(I, E); });
            y.set(F, x);
        } if ((N.type === "Identifier" || n(N) && u(a(p(N))) && String(N.value) === a(p(N)) && !(E.parser === "typescript" || E.parser === "babel-ts")) && (E.parser === "json" || E.quoteProps === "consistent" && y.get(F))) {
            var x_2 = s(JSON.stringify(N.type === "Identifier" ? N.name : N.value.toString()), E);
            return f.call(function (I) { return t(I, x_2, E); }, "key");
        } return l(w, E) && (E.quoteProps === "as-needed" || E.quoteProps === "consistent" && !y.get(F)) ? f.call(function (x) { return t(x, /^\d/.test(N.value) ? a(N.value) : N.value, E); }, "key") : _("key"); }
        function c(f, E, _) { return f.getValue().shorthand ? _("value") : d(f, E, _, g(f, E, _), ":", "value"); }
        r.exports = { printProperty: c, printPropertyKey: g };
    } }), Or = te({ "src/language-js/print/function.js": function (e, r) {
        "use strict";
        ne();
        var t = Yt(), _b = et(), s = _b.printDanglingComments, a = _b.printCommentsSeparately, n = lt(), u = Ue().getNextNonSpaceNonCommentCharacterIndex, _h = qe(), _j = _h.builders, i = _j.line, l = _j.softline, p = _j.group, d = _j.indent, y = _j.ifBreak, g = _j.hardline, c = _j.join, f = _j.indentIfBreak, _k = _h.utils, E = _k.removeLines, _ = _k.willBreak, w = Kt().ArgExpansionBailout, _q = Ke(), F = _q.getFunctionParameters, N = _q.hasLeadingOwnLineComment, x = _q.isFlowAnnotationComment, I = _q.isJsxNode, P = _q.isTemplateOnItsOwnLine, $ = _q.shouldPrintComma, D = _q.startsWithNoLookaheadToken, T = _q.isBinaryish, m = _q.isLineComment, C = _q.hasComment, o = _q.getComments, h = _q.CommentCheckFlags, v = _q.isCallLikeExpression, S = _q.isCallExpression, b = _q.getCallArguments, B = _q.hasNakedLeftSide, k = _q.getLeftSide, M = ut().locEnd, _v = Ir(), R = _v.printFunctionParameters, q = _v.shouldGroupFunctionParameters, J = er().printPropertyKey, L = ct().printFunctionTypeParameters;
        function Q(U, Z, se, fe) { var ge = U.getValue(), he = !1; if ((ge.type === "FunctionDeclaration" || ge.type === "FunctionExpression") && fe && fe.expandLastArg) {
            var Pe = U.getParentNode();
            S(Pe) && b(Pe).length > 1 && (he = !0);
        } var we = []; ge.type === "TSDeclareFunction" && ge.declare && we.push("declare "), ge.async && we.push("async "), ge.generator ? we.push("function* ") : we.push("function "), ge.id && we.push(Z("id")); var ke = R(U, Z, se, he), Re = K(U, Z, se), Ne = q(ge, Re); return we.push(L(U, se, Z), p([Ne ? p(ke) : ke, Re]), ge.body ? " " : "", Z("body")), se.semi && (ge.declare || !ge.body) && we.push(";"), we; }
        function V(U, Z, se) { var fe = U.getNode(), ge = fe.kind, he = fe.value || fe, we = []; return !ge || ge === "init" || ge === "method" || ge === "constructor" ? he.async && we.push("async ") : (t.ok(ge === "get" || ge === "set"), we.push(ge, " ")), he.generator && we.push("*"), we.push(J(U, Z, se), fe.optional || fe.key.optional ? "?" : ""), fe === he ? we.push(j(U, Z, se)) : he.type === "FunctionExpression" ? we.push(U.call(function (ke) { return j(ke, Z, se); }, "value")) : we.push(se("value")), we; }
        function j(U, Z, se) { var fe = U.getNode(), ge = R(U, se, Z), he = K(U, se, Z), we = q(fe, he), ke = [L(U, Z, se), p([we ? p(ge) : ge, he])]; return fe.body ? ke.push(" ", se("body")) : ke.push(Z.semi ? ";" : ""), ke; }
        function Y(U, Z, se, fe) { var ge = U.getValue(), he = []; if (ge.async && he.push("async "), W(U, Z))
            he.push(se(["params", 0]));
        else {
            var ke = fe && (fe.expandLastArg || fe.expandFirstArg), Re = K(U, se, Z);
            if (ke) {
                if (_(Re))
                    throw new w;
                Re = p(E(Re));
            }
            he.push(p([R(U, se, Z, ke, !0), Re]));
        } var we = s(U, Z, !0, function (ke) { var Re = u(Z.originalText, ke, M); return Re !== !1 && Z.originalText.slice(Re, Re + 2) === "=>"; }); return we && he.push(" ", we), he; }
        function ie(U, Z, se, fe, ge, he) { var we = U.getName(), ke = U.getParentNode(), Re = v(ke) && we === "callee", Ne = Boolean(Z && Z.assignmentLayout), Pe = he.body.type !== "BlockStatement" && he.body.type !== "ObjectExpression" && he.body.type !== "SequenceExpression", oe = Re && Pe || Z && Z.assignmentLayout === "chain-tail-arrow-chain", H = Symbol("arrow-chain"); return he.body.type === "SequenceExpression" && (ge = p(["(", d([l, ge]), l, ")"])), p([p(d([Re || Ne ? l : "", p(c([" =>", i], se), { shouldBreak: fe })]), { id: H, shouldBreak: oe }), " =>", f(Pe ? d([i, ge]) : [" ", ge], { groupId: H }), Re ? y(l, "", { groupId: H }) : ""]); }
        function ee(U, Z, se, fe) { var ge = U.getValue(), he = [], we = [], ke = !1; if (function H() { var pe = Y(U, Z, se, fe); if (he.length === 0)
            he.push(pe);
        else {
            var _b = a(U, Z), X = _b.leading, le = _b.trailing;
            he.push([X, pe]), we.unshift(le);
        } ke = ke || ge.returnType && F(ge).length > 0 || ge.typeParameters || F(ge).some(function (X) { return X.type !== "Identifier"; }), ge.body.type !== "ArrowFunctionExpression" || fe && fe.expandLastArg ? we.unshift(se("body", fe)) : (ge = ge.body, U.call(H, "body")); }(), he.length > 1)
            return ie(U, fe, he, ke, we, ge); var Re = he; if (Re.push(" =>"), !N(Z.originalText, ge.body) && (ge.body.type === "ArrayExpression" || ge.body.type === "ObjectExpression" || ge.body.type === "BlockStatement" || I(ge.body) || P(ge.body, Z.originalText) || ge.body.type === "ArrowFunctionExpression" || ge.body.type === "DoExpression"))
            return p(__spreadArray(__spreadArray([], __read(Re), false), [" ", we], false)); if (ge.body.type === "SequenceExpression")
            return p(__spreadArray(__spreadArray([], __read(Re), false), [p([" (", d([l, we]), l, ")"])], false)); var Ne = (fe && fe.expandLastArg || U.getParentNode().type === "JSXExpressionContainer") && !C(ge), Pe = fe && fe.expandLastArg && $(Z, "all"), oe = ge.body.type === "ConditionalExpression" && !D(ge.body, function (H) { return H.type === "ObjectExpression"; }); return p(__spreadArray(__spreadArray([], __read(Re), false), [p([d([i, oe ? y("", "(") : "", we, oe ? y("", ")") : ""]), Ne ? [y(Pe ? "," : ""), l] : ""])], false)); }
        function ce(U) { var Z = F(U); return Z.length === 1 && !U.typeParameters && !C(U, h.Dangling) && Z[0].type === "Identifier" && !Z[0].typeAnnotation && !C(Z[0]) && !Z[0].optional && !U.predicate && !U.returnType; }
        function W(U, Z) { if (Z.arrowParens === "always")
            return !1; if (Z.arrowParens === "avoid") {
            var se = U.getValue();
            return ce(se);
        } return !1; }
        function K(U, Z, se) { var fe = U.getValue(), ge = Z("returnType"); if (fe.returnType && x(se.originalText, fe.returnType))
            return [" /*: ", ge, " */"]; var he = [ge]; return fe.returnType && fe.returnType.typeAnnotation && he.unshift(": "), fe.predicate && he.push(fe.returnType ? " " : ": ", Z("predicate")), he; }
        function de(U, Z, se) { var fe = U.getValue(), ge = Z.semi ? ";" : "", he = []; fe.argument && (z(Z, fe.argument) ? he.push([" (", d([g, se("argument")]), g, ")"]) : T(fe.argument) || fe.argument.type === "SequenceExpression" ? he.push(p([y(" (", " "), d([l, se("argument")]), l, y(")")])) : he.push(" ", se("argument"))); var we = o(fe), ke = n(we), Re = ke && m(ke); return Re && he.push(ge), C(fe, h.Dangling) && he.push(" ", s(U, Z, !0)), Re || he.push(ge), he; }
        function ue(U, Z, se) { return ["return", de(U, Z, se)]; }
        function Fe(U, Z, se) { return ["throw", de(U, Z, se)]; }
        function z(U, Z) { if (N(U.originalText, Z))
            return !0; if (B(Z)) {
            var se = Z, fe = void 0;
            for (; fe = k(se);)
                if (se = fe, N(U.originalText, se))
                    return !0;
        } return !1; }
        r.exports = { printFunction: Q, printArrowFunction: ee, printMethod: V, printReturnStatement: ue, printThrowStatement: Fe, printMethodInternal: j, shouldPrintParamsWithoutParens: W };
    } }), eu = te({ "src/language-js/print/decorators.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.isNonEmptyArray, s = _b.hasNewline, _h = qe().builders, a = _h.line, n = _h.hardline, u = _h.join, i = _h.breakParent, l = _h.group, _j = ut(), p = _j.locStart, d = _j.locEnd, y = Ke().getParentExportDeclaration;
        function g(w, F, N) { var x = w.getValue(); return l([u(a, w.map(N, "decorators")), E(x, F) ? n : a]); }
        function c(w, F, N) { return [u(n, w.map(N, "declaration", "decorators")), n]; }
        function f(w, F, N) { var x = w.getValue(), I = x.decorators; if (!t(I) || _(w.getParentNode()))
            return; var P = x.type === "ClassExpression" || x.type === "ClassDeclaration" || E(x, F); return [y(w) ? n : P ? i : "", u(a, w.map(N, "decorators")), a]; }
        function E(w, F) { return w.decorators.some(function (N) { return s(F.originalText, d(N)); }); }
        function _(w) { if (w.type !== "ExportDefaultDeclaration" && w.type !== "ExportNamedDeclaration" && w.type !== "DeclareExportDeclaration")
            return !1; var F = w.declaration && w.declaration.decorators; return t(F) && p(w) === p(F[0]); }
        r.exports = { printDecorators: f, printClassMemberDecorators: g, printDecoratorsBeforeExport: c, hasDecoratorsBeforeExport: _ };
    } }), tr = te({ "src/language-js/print/class.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.isNonEmptyArray, s = _b.createGroupIdMapper, _h = et(), a = _h.printComments, n = _h.printDanglingComments, _j = qe().builders, u = _j.join, i = _j.line, l = _j.hardline, p = _j.softline, d = _j.group, y = _j.indent, g = _j.ifBreak, _k = Ke(), c = _k.hasComment, f = _k.CommentCheckFlags, E = Lr().getTypeParametersGroupId, _ = Or().printMethod, _q = ct(), w = _q.printOptionalToken, F = _q.printTypeAnnotation, N = _q.printDefiniteToken, x = er().printPropertyKey, I = Zt().printAssignment, P = eu().printClassMemberDecorators;
        function $(b, B, k) { var M = b.getValue(), R = []; M.declare && R.push("declare "), M.abstract && R.push("abstract "), R.push("class"); var q = M.id && c(M.id, f.Trailing) || M.typeParameters && c(M.typeParameters, f.Trailing) || M.superClass && c(M.superClass) || t(M.extends) || t(M.mixins) || t(M.implements), J = [], L = []; if (M.id && J.push(" ", k("id")), J.push(k("typeParameters")), M.superClass) {
            var Q_2 = [h(b, B, k), k("superTypeParameters")], V = b.call(function (j) { return ["extends ", a(j, Q_2, B)]; }, "superClass");
            q ? L.push(i, d(V)) : L.push(" ", V);
        }
        else
            L.push(o(b, B, k, "extends")); if (L.push(o(b, B, k, "mixins"), o(b, B, k, "implements")), q) {
            var Q = void 0;
            C(M) ? Q = __spreadArray(__spreadArray([], __read(J), false), [y(L)], false) : Q = y(__spreadArray(__spreadArray([], __read(J), false), [L], false)), R.push(d(Q, { id: D(M) }));
        }
        else
            R.push.apply(R, __spreadArray(__spreadArray([], __read(J), false), __read(L), false)); return R.push(" ", k("body")), R; }
        var D = s("heritageGroup");
        function T(b) { return g(l, "", { groupId: D(b) }); }
        function m(b) { return ["superClass", "extends", "mixins", "implements"].filter(function (B) { return Boolean(b[B]); }).length > 1; }
        function C(b) { return b.typeParameters && !c(b.typeParameters, f.Trailing | f.Line) && !m(b); }
        function o(b, B, k, M) { var R = b.getValue(); if (!t(R[M]))
            return ""; var q = n(b, B, !0, function (J) { var L = J.marker; return L === M; }); return [C(R) ? g(" ", i, { groupId: E(R.typeParameters) }) : i, q, q && l, M, d(y([i, u([",", i], b.map(k, M))]))]; }
        function h(b, B, k) { var M = k("superClass"); return b.getParentNode().type === "AssignmentExpression" ? d(g(["(", y([p, M]), p, ")"], M)) : M; }
        function v(b, B, k) { var M = b.getValue(), R = []; return t(M.decorators) && R.push(P(b, B, k)), M.accessibility && R.push(M.accessibility + " "), M.readonly && R.push("readonly "), M.declare && R.push("declare "), M.static && R.push("static "), (M.type === "TSAbstractMethodDefinition" || M.abstract) && R.push("abstract "), M.override && R.push("override "), R.push(_(b, B, k)), R; }
        function S(b, B, k) { var M = b.getValue(), R = [], q = B.semi ? ";" : ""; return t(M.decorators) && R.push(P(b, B, k)), M.accessibility && R.push(M.accessibility + " "), M.declare && R.push("declare "), M.static && R.push("static "), (M.type === "TSAbstractPropertyDefinition" || M.type === "TSAbstractAccessorProperty" || M.abstract) && R.push("abstract "), M.override && R.push("override "), M.readonly && R.push("readonly "), M.variance && R.push(k("variance")), (M.type === "ClassAccessorProperty" || M.type === "AccessorProperty" || M.type === "TSAbstractAccessorProperty") && R.push("accessor "), R.push(x(b, B, k), w(b), N(b), F(b, B, k)), [I(b, B, k, R, " =", "value"), q]; }
        r.exports = { printClass: $, printClassMethod: v, printClassProperty: S, printHardlineAfterHeritage: T };
    } }), ho = te({ "src/language-js/print/interface.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().isNonEmptyArray, _b = qe().builders, s = _b.join, a = _b.line, n = _b.group, u = _b.indent, i = _b.ifBreak, _h = Ke(), l = _h.hasComment, p = _h.identity, d = _h.CommentCheckFlags, y = Lr().getTypeParametersGroupId, g = ct().printTypeScriptModifiers;
        function c(f, E, _) { var w = f.getValue(), F = []; w.declare && F.push("declare "), w.type === "TSInterfaceDeclaration" && F.push(w.abstract ? "abstract " : "", g(f, E, _)), F.push("interface"); var N = [], x = []; w.type !== "InterfaceTypeAnnotation" && N.push(" ", _("id"), _("typeParameters")); var I = w.typeParameters && !l(w.typeParameters, d.Trailing | d.Line); return t(w.extends) && x.push(I ? i(" ", a, { groupId: y(w.typeParameters) }) : a, "extends ", (w.extends.length === 1 ? p : u)(s([",", a], f.map(_, "extends")))), w.id && l(w.id, d.Trailing) || t(w.extends) ? I ? F.push(n(__spreadArray(__spreadArray([], __read(N), false), [u(x)], false))) : F.push(n(u(__spreadArray(__spreadArray([], __read(N), false), __read(x), false)))) : F.push.apply(F, __spreadArray(__spreadArray([], __read(N), false), __read(x), false)), F.push(" ", _("body")), n(F); }
        r.exports = { printInterface: c };
    } }), vo = te({ "src/language-js/print/module.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().isNonEmptyArray, _b = qe().builders, s = _b.softline, a = _b.group, n = _b.indent, u = _b.join, i = _b.line, l = _b.ifBreak, p = _b.hardline, d = et().printDanglingComments, _h = Ke(), y = _h.hasComment, g = _h.CommentCheckFlags, c = _h.shouldPrintComma, f = _h.needsHardlineAfterDanglingComment, E = _h.isStringLiteral, _ = _h.rawText, _j = ut(), w = _j.locStart, F = _j.hasSameLoc, _k = eu(), N = _k.hasDecoratorsBeforeExport, x = _k.printDecoratorsBeforeExport;
        function I(S, b, B) { var k = S.getValue(), M = b.semi ? ";" : "", R = [], q = k.importKind; return R.push("import"), q && q !== "value" && R.push(" ", q), R.push(m(S, b, B), T(S, b, B), o(S, b, B), M), R; }
        function P(S, b, B) { var k = S.getValue(), M = []; N(k) && M.push(x(S, b, B)); var R = k.type, q = k.exportKind, J = k.declaration; return M.push("export"), (k.default || R === "ExportDefaultDeclaration") && M.push(" default"), y(k, g.Dangling) && (M.push(" ", d(S, b, !0)), f(k) && M.push(p)), J ? M.push(" ", B("declaration")) : M.push(q === "type" ? " type" : "", m(S, b, B), T(S, b, B), o(S, b, B)), D(k, b) && M.push(";"), M; }
        function $(S, b, B) { var k = S.getValue(), M = b.semi ? ";" : "", R = [], q = k.exportKind, J = k.exported; return R.push("export"), q === "type" && R.push(" type"), R.push(" *"), J && R.push(" as ", B("exported")), R.push(T(S, b, B), o(S, b, B), M), R; }
        function D(S, b) { if (!b.semi)
            return !1; var B = S.type, k = S.declaration, M = S.default || B === "ExportDefaultDeclaration"; if (!k)
            return !0; var R = k.type; return !!(M && R !== "ClassDeclaration" && R !== "FunctionDeclaration" && R !== "TSInterfaceDeclaration" && R !== "DeclareClass" && R !== "DeclareFunction" && R !== "TSDeclareFunction" && R !== "EnumDeclaration"); }
        function T(S, b, B) { var k = S.getValue(); if (!k.source)
            return ""; var M = []; return C(k, b) || M.push(" from"), M.push(" ", B("source")), M; }
        function m(S, b, B) { var k = S.getValue(); if (C(k, b))
            return ""; var M = [" "]; if (t(k.specifiers)) {
            var R_1 = [], q_2 = [];
            S.each(function () { var J = S.getValue().type; if (J === "ExportNamespaceSpecifier" || J === "ExportDefaultSpecifier" || J === "ImportNamespaceSpecifier" || J === "ImportDefaultSpecifier")
                R_1.push(B());
            else if (J === "ExportSpecifier" || J === "ImportSpecifier")
                q_2.push(B());
            else
                throw new Error("Unknown specifier type ".concat(JSON.stringify(J))); }, "specifiers"), M.push(u(", ", R_1)), q_2.length > 0 && (R_1.length > 0 && M.push(", "), q_2.length > 1 || R_1.length > 0 || k.specifiers.some(function (L) { return y(L); }) ? M.push(a(["{", n([b.bracketSpacing ? i : s, u([",", i], q_2)]), l(c(b) ? "," : ""), b.bracketSpacing ? i : s, "}"])) : M.push(__spreadArray(__spreadArray(["{", b.bracketSpacing ? " " : ""], __read(q_2), false), [b.bracketSpacing ? " " : "", "}"], false)));
        }
        else
            M.push("{}"); return M; }
        function C(S, b) { var B = S.type, k = S.importKind, M = S.source, R = S.specifiers; return B !== "ImportDeclaration" || t(R) || k === "type" ? !1 : !/{\s*}/.test(b.originalText.slice(w(S), w(M))); }
        function o(S, b, B) { var k = S.getNode(); return t(k.assertions) ? [" assert {", b.bracketSpacing ? " " : "", u(", ", S.map(B, "assertions")), b.bracketSpacing ? " " : "", "}"] : ""; }
        function h(S, b, B) { var k = S.getNode(), M = k.type, R = [], q = M === "ImportSpecifier" ? k.importKind : k.exportKind; q && q !== "value" && R.push(q, " "); var J = M.startsWith("Import"), L = J ? "imported" : "local", Q = J ? "local" : "exported", V = k[L], j = k[Q], Y = "", ie = ""; return M === "ExportNamespaceSpecifier" || M === "ImportNamespaceSpecifier" ? Y = "*" : V && (Y = B(L)), j && !v(k) && (ie = B(Q)), R.push(Y, Y && ie ? " as " : "", ie), R; }
        function v(S) { if (S.type !== "ImportSpecifier" && S.type !== "ExportSpecifier")
            return !1; var _b = S, b = _b.local, _h = S.type === "ImportSpecifier" ? "imported" : "exported", B = _b[_h]; if (b.type !== B.type || !F(b, B))
            return !1; if (E(b))
            return b.value === B.value && _(b) === _(B); switch (b.type) {
            case "Identifier": return b.name === B.name;
            default: return !1;
        } }
        r.exports = { printImportDeclaration: I, printExportDeclaration: P, printExportAllDeclaration: $, printModuleSpecifier: h };
    } }), tu = te({ "src/language-js/print/object.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, _b = qe().builders, s = _b.line, a = _b.softline, n = _b.group, u = _b.indent, i = _b.ifBreak, l = _b.hardline, _h = Ue(), p = _h.getLast, d = _h.hasNewlineInRange, y = _h.hasNewline, g = _h.isNonEmptyArray, _j = Ke(), c = _j.shouldPrintComma, f = _j.hasComment, E = _j.getComments, _ = _j.CommentCheckFlags, w = _j.isNextLineEmpty, _k = ut(), F = _k.locStart, N = _k.locEnd, _q = ct(), x = _q.printOptionalToken, I = _q.printTypeAnnotation, P = Ir().shouldHugFunctionParameters, $ = kr().shouldHugType, D = tr().printHardlineAfterHeritage;
        function T(m, C, o) {
            var e_53, _b;
            var h = C.semi ? ";" : "", v = m.getValue(), S;
            v.type === "TSTypeLiteral" ? S = "members" : v.type === "TSInterfaceBody" ? S = "body" : S = "properties";
            var b = v.type === "ObjectTypeAnnotation", B = [S];
            b && B.push("indexers", "callProperties", "internalSlots");
            var k = B.map(function (W) { return v[W][0]; }).sort(function (W, K) { return F(W) - F(K); })[0], M = m.getParentNode(0), R = b && M && (M.type === "InterfaceDeclaration" || M.type === "DeclareInterface" || M.type === "DeclareClass") && m.getName() === "body", q = v.type === "TSInterfaceBody" || R || v.type === "ObjectPattern" && M.type !== "FunctionDeclaration" && M.type !== "FunctionExpression" && M.type !== "ArrowFunctionExpression" && M.type !== "ObjectMethod" && M.type !== "ClassMethod" && M.type !== "ClassPrivateMethod" && M.type !== "AssignmentPattern" && M.type !== "CatchClause" && v.properties.some(function (W) { return W.value && (W.value.type === "ObjectPattern" || W.value.type === "ArrayPattern"); }) || v.type !== "ObjectPattern" && k && d(C.originalText, F(v), F(k)), J = R ? ";" : v.type === "TSInterfaceBody" || v.type === "TSTypeLiteral" ? i(h, ";") : ",", L = v.type === "RecordExpression" ? "#{" : v.exact ? "{|" : "{", Q = v.exact ? "|}" : "}", V = [];
            try {
                for (var B_1 = __values(B), B_1_1 = B_1.next(); !B_1_1.done; B_1_1 = B_1.next()) {
                    var W = B_1_1.value;
                    m.each(function (K) { var de = K.getValue(); V.push({ node: de, printed: o(), loc: F(de) }); }, W);
                }
            }
            catch (e_53_1) { e_53 = { error: e_53_1 }; }
            finally {
                try {
                    if (B_1_1 && !B_1_1.done && (_b = B_1.return)) _b.call(B_1);
                }
                finally { if (e_53) throw e_53.error; }
            }
            B.length > 1 && V.sort(function (W, K) { return W.loc - K.loc; });
            var j = [], Y = V.map(function (W) { var K = __spreadArray(__spreadArray([], __read(j), false), [n(W.printed)], false); return j = [J, s], (W.node.type === "TSPropertySignature" || W.node.type === "TSMethodSignature" || W.node.type === "TSConstructSignatureDeclaration") && f(W.node, _.PrettierIgnore) && j.shift(), w(W.node, C) && j.push(l), K; });
            if (v.inexact) {
                var W = void 0;
                if (f(v, _.Dangling)) {
                    var K = f(v, _.Line);
                    W = [t(m, C, !0), K || y(C.originalText, N(p(E(v)))) ? l : s, "..."];
                }
                else
                    W = ["..."];
                Y.push(__spreadArray(__spreadArray([], __read(j), false), __read(W), false));
            }
            var ie = p(v[S]), ee = !(v.inexact || ie && ie.type === "RestElement" || ie && (ie.type === "TSPropertySignature" || ie.type === "TSCallSignatureDeclaration" || ie.type === "TSMethodSignature" || ie.type === "TSConstructSignatureDeclaration") && f(ie, _.PrettierIgnore)), ce;
            if (Y.length === 0) {
                if (!f(v, _.Dangling))
                    return [L, Q, I(m, C, o)];
                ce = n([L, t(m, C), a, Q, x(m), I(m, C, o)]);
            }
            else
                ce = [R && g(v.properties) ? D(M) : "", L, u(__spreadArray([C.bracketSpacing ? s : a], __read(Y), false)), i(ee && (J !== "," || c(C)) ? J : ""), C.bracketSpacing ? s : a, Q, x(m), I(m, C, o)];
            return m.match(function (W) { return W.type === "ObjectPattern" && !W.decorators; }, function (W, K, de) { return P(W) && (K === "params" || K === "parameters" || K === "this" || K === "rest") && de === 0; }) || m.match($, function (W, K) { return K === "typeAnnotation"; }, function (W, K) { return K === "typeAnnotation"; }, function (W, K, de) { return P(W) && (K === "params" || K === "parameters" || K === "this" || K === "rest") && de === 0; }) || !q && m.match(function (W) { return W.type === "ObjectPattern"; }, function (W) { return W.type === "AssignmentExpression" || W.type === "VariableDeclarator"; }) ? ce : n(ce, { shouldBreak: q });
        }
        r.exports = { printObject: T };
    } }), id = te({ "src/language-js/print/flow.js": function (e, r) {
        "use strict";
        ne();
        var t = Yt(), s = et().printDanglingComments, _b = Ue(), a = _b.printString, n = _b.printNumber, _h = qe().builders, u = _h.hardline, i = _h.softline, l = _h.group, p = _h.indent, _j = Ke(), d = _j.getParentExportDeclaration, y = _j.isFunctionNotation, g = _j.isGetterOrSetter, c = _j.rawText, f = _j.shouldPrintComma, _k = ut(), E = _k.locStart, _ = _k.locEnd, w = Xt().replaceTextEndOfLine, F = tr().printClass, _q = kr(), N = _q.printOpaqueType, x = _q.printTypeAlias, I = _q.printIntersectionType, P = _q.printUnionType, $ = _q.printFunctionType, D = _q.printTupleType, T = _q.printIndexedAccessType, m = ho().printInterface, _v = Lr(), C = _v.printTypeParameter, o = _v.printTypeParameters, _w = vo(), h = _w.printExportDeclaration, v = _w.printExportAllDeclaration, S = Qt().printArrayItems, b = tu().printObject, B = er().printPropertyKey, _x = ct(), k = _x.printOptionalToken, M = _x.printTypeAnnotation, R = _x.printRestSpread;
        function q(L, Q, V) { var j = L.getValue(), Y = Q.semi ? ";" : "", ie = []; switch (j.type) {
            case "DeclareClass": return J(L, F(L, Q, V));
            case "DeclareFunction": return J(L, ["function ", V("id"), j.predicate ? " " : "", V("predicate"), Y]);
            case "DeclareModule": return J(L, ["module ", V("id"), " ", V("body")]);
            case "DeclareModuleExports": return J(L, ["module.exports", ": ", V("typeAnnotation"), Y]);
            case "DeclareVariable": return J(L, ["var ", V("id"), Y]);
            case "DeclareOpaqueType": return J(L, N(L, Q, V));
            case "DeclareInterface": return J(L, m(L, Q, V));
            case "DeclareTypeAlias": return J(L, x(L, Q, V));
            case "DeclareExportDeclaration": return J(L, h(L, Q, V));
            case "DeclareExportAllDeclaration": return J(L, v(L, Q, V));
            case "OpaqueType": return N(L, Q, V);
            case "TypeAlias": return x(L, Q, V);
            case "IntersectionTypeAnnotation": return I(L, Q, V);
            case "UnionTypeAnnotation": return P(L, Q, V);
            case "FunctionTypeAnnotation": return $(L, Q, V);
            case "TupleTypeAnnotation": return D(L, Q, V);
            case "GenericTypeAnnotation": return [V("id"), o(L, Q, V, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType": return T(L, Q, V);
            case "TypeAnnotation": return V("typeAnnotation");
            case "TypeParameter": return C(L, Q, V);
            case "TypeofTypeAnnotation": return ["typeof ", V("argument")];
            case "ExistsTypeAnnotation": return "*";
            case "EmptyTypeAnnotation": return "empty";
            case "MixedTypeAnnotation": return "mixed";
            case "ArrayTypeAnnotation": return [V("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation": return String(j.value);
            case "EnumDeclaration": return ["enum ", V("id"), " ", V("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
                if (j.type === "EnumSymbolBody" || j.explicitType) {
                    var ee = null;
                    switch (j.type) {
                        case "EnumBooleanBody":
                            ee = "boolean";
                            break;
                        case "EnumNumberBody":
                            ee = "number";
                            break;
                        case "EnumStringBody":
                            ee = "string";
                            break;
                        case "EnumSymbolBody":
                            ee = "symbol";
                            break;
                    }
                    ie.push("of ", ee, " ");
                }
                if (j.members.length === 0 && !j.hasUnknownMembers)
                    ie.push(l(["{", s(L, Q), i, "}"]));
                else {
                    var ee = j.members.length > 0 ? [u, S(L, Q, "members", V), j.hasUnknownMembers || f(Q) ? "," : ""] : [];
                    ie.push(l(["{", p(__spreadArray(__spreadArray([], __read(ee), false), __read(j.hasUnknownMembers ? [u, "..."] : []), false)), s(L, Q, !0), u, "}"]));
                }
                return ie;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember": return [V("id"), " = ", typeof j.init == "object" ? V("init") : String(j.init)];
            case "EnumDefaultedMember": return V("id");
            case "FunctionTypeParam": {
                var ee = j.name ? V("name") : L.getParentNode().this === j ? "this" : "";
                return [ee, k(L), ee ? ": " : "", V("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation": return m(L, Q, V);
            case "ClassImplements":
            case "InterfaceExtends": return [V("id"), V("typeParameters")];
            case "NullableTypeAnnotation": return ["?", V("typeAnnotation")];
            case "Variance": {
                var ee = j.kind;
                return t.ok(ee === "plus" || ee === "minus"), ee === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty": return j.static && ie.push("static "), ie.push(V("value")), ie;
            case "ObjectTypeIndexer": return [j.static ? "static " : "", j.variance ? V("variance") : "", "[", V("id"), j.id ? ": " : "", V("key"), "]: ", V("value")];
            case "ObjectTypeProperty": {
                var ee = "";
                return j.proto ? ee = "proto " : j.static && (ee = "static "), [ee, g(j) ? j.kind + " " : "", j.variance ? V("variance") : "", B(L, Q, V), k(L), y(j) ? "" : ": ", V("value")];
            }
            case "ObjectTypeAnnotation": return b(L, Q, V);
            case "ObjectTypeInternalSlot": return [j.static ? "static " : "", "[[", V("id"), "]]", k(L), j.method ? "" : ": ", V("value")];
            case "ObjectTypeSpreadProperty": return R(L, Q, V);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier": return [V("qualification"), ".", V("id")];
            case "StringLiteralTypeAnnotation": return w(a(c(j), Q));
            case "NumberLiteralTypeAnnotation": t.strictEqual(typeof j.value, "number");
            case "BigIntLiteralTypeAnnotation": return j.extra ? n(j.extra.raw) : n(j.raw);
            case "TypeCastExpression": return ["(", V("expression"), M(L, Q, V), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
                var ee = o(L, Q, V, "params");
                if (Q.parser === "flow") {
                    var ce = E(j), W = _(j), K = Q.originalText.lastIndexOf("/*", ce), de = Q.originalText.indexOf("*/", W);
                    if (K !== -1 && de !== -1) {
                        var ue = Q.originalText.slice(K + 2, de).trim();
                        if (ue.startsWith("::") && !ue.includes("/*") && !ue.includes("*/"))
                            return ["/*:: ", ee, " */"];
                    }
                }
                return ee;
            }
            case "InferredPredicate": return "%checks";
            case "DeclaredPredicate": return ["%checks(", V("value"), ")"];
            case "AnyTypeAnnotation": return "any";
            case "BooleanTypeAnnotation": return "boolean";
            case "BigIntTypeAnnotation": return "bigint";
            case "NullLiteralTypeAnnotation": return "null";
            case "NumberTypeAnnotation": return "number";
            case "SymbolTypeAnnotation": return "symbol";
            case "StringTypeAnnotation": return "string";
            case "VoidTypeAnnotation": return "void";
            case "ThisTypeAnnotation": return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type": throw new Error("unprintable type: " + JSON.stringify(j.type));
        } }
        function J(L, Q) { var V = d(L); return V ? (t.strictEqual(V.type, "DeclareExportDeclaration"), Q) : ["declare ", Q]; }
        r.exports = { printFlow: q };
    } }), ad = te({ "src/language-js/utils/is-ts-keyword-type.js": function (e, r) {
        "use strict";
        ne();
        function t(s) { var a = s.type; return a.startsWith("TS") && a.endsWith("Keyword"); }
        r.exports = t;
    } }), Co = te({ "src/language-js/print/ternary.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().hasNewlineInRange, _b = Ke(), s = _b.isJsxNode, a = _b.getComments, n = _b.isCallExpression, u = _b.isMemberExpression, i = _b.isTSTypeExpression, _h = ut(), l = _h.locStart, p = _h.locEnd, d = _t(), _j = qe().builders, y = _j.line, g = _j.softline, c = _j.group, f = _j.indent, E = _j.align, _ = _j.ifBreak, w = _j.dedent, F = _j.breakParent;
        function N(D) {
            var e_54, _b;
            var T = [D];
            for (var m = 0; m < T.length; m++) {
                var C = T[m];
                try {
                    for (var _h = (e_54 = void 0, __values(["test", "consequent", "alternate"])), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var o = _j.value;
                        var h = C[o];
                        if (s(h))
                            return !0;
                        h.type === "ConditionalExpression" && T.push(h);
                    }
                }
                catch (e_54_1) { e_54 = { error: e_54_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                    }
                    finally { if (e_54) throw e_54.error; }
                }
            }
            return !1;
        }
        function x(D, T, m) { var C = D.getValue(), o = C.type === "ConditionalExpression", h = o ? "alternate" : "falseType", v = D.getParentNode(), S = o ? m("test") : [m("checkType"), " ", "extends", " ", m("extendsType")]; return v.type === C.type && v[h] === C ? E(2, S) : S; }
        var I = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function P(D) { var T = D.getValue(); if (T.type !== "ConditionalExpression")
            return !1; var m, C = T; for (var o = 0; !m; o++) {
            var h = D.getParentNode(o);
            if (n(h) && h.callee === C || u(h) && h.object === C || h.type === "TSNonNullExpression" && h.expression === C) {
                C = h;
                continue;
            }
            h.type === "NewExpression" && h.callee === C || i(h) && h.expression === C ? (m = D.getParentNode(o + 1), C = h) : m = h;
        } return C === T ? !1 : m[I.get(m.type)] === C; }
        function $(D, T, m) { var C = D.getValue(), o = C.type === "ConditionalExpression", h = o ? "consequent" : "trueType", v = o ? "alternate" : "falseType", S = o ? ["test"] : ["checkType", "extendsType"], b = C[h], B = C[v], k = [], M = !1, R = D.getParentNode(), q = R.type === C.type && S.some(function (ue) { return R[ue] === C; }), J = R.type === C.type && !q, L, Q, V = 0; do
            Q = L || C, L = D.getParentNode(V), V++;
        while (L && L.type === C.type && S.every(function (ue) { return L[ue] !== Q; })); var j = L || R, Y = Q; if (o && (s(C[S[0]]) || s(b) || s(B) || N(Y))) {
            M = !0, J = !0;
            var ue = function (z) { return [_("("), f([g, z]), g, _(")")]; }, Fe = function (z) { return z.type === "NullLiteral" || z.type === "Literal" && z.value === null || z.type === "Identifier" && z.name === "undefined"; };
            k.push(" ? ", Fe(b) ? m(h) : ue(m(h)), " : ", B.type === C.type || Fe(B) ? m(v) : ue(m(v)));
        }
        else {
            var ue = [y, "? ", b.type === C.type ? _("", "(") : "", E(2, m(h)), b.type === C.type ? _("", ")") : "", y, ": ", B.type === C.type ? m(v) : E(2, m(v))];
            k.push(R.type !== C.type || R[v] === C || q ? ue : T.useTabs ? w(f(ue)) : E(Math.max(0, T.tabWidth - 2), ue));
        } var ee = __spreadArray(__spreadArray([], __read(S.map(function (ue) { return a(C[ue]); })), false), [a(b), a(B)], false).flat().some(function (ue) { return d(ue) && t(T.originalText, l(ue), p(ue)); }), ce = function (ue) { return R === j ? c(ue, { shouldBreak: ee }) : ee ? [ue, F] : ue; }, W = !M && (u(R) || R.type === "NGPipeExpression" && R.left === C) && !R.computed, K = P(D), de = ce([x(D, T, m), J ? k : f(k), o && W && !K ? g : ""]); return q || K ? c([f([g, de]), g]) : de; }
        r.exports = { printTernary: $ };
    } }), Eo = te({ "src/language-js/print/statement.js": function (e, r) {
        "use strict";
        ne();
        var t = qe().builders.hardline, s = Ot(), _b = Ke(), a = _b.getLeftSidePathName, n = _b.hasNakedLeftSide, u = _b.isJsxNode, i = _b.isTheOnlyJsxElementInMarkdown, l = _b.hasComment, p = _b.CommentCheckFlags, d = _b.isNextLineEmpty, y = Or().shouldPrintParamsWithoutParens;
        function g(x, I, P, $) { var D = x.getValue(), T = [], m = D.type === "ClassBody", C = c(D[$]); return x.each(function (o, h, v) { var S = o.getValue(); if (S.type === "EmptyStatement")
            return; var b = P(); !I.semi && !m && !i(I, o) && f(o, I) ? l(S, p.Leading) ? T.push(P([], { needsSemi: !0 })) : T.push(";", b) : T.push(b), !I.semi && m && F(S) && N(S, v[h + 1]) && T.push(";"), S !== C && (T.push(t), d(S, I) && T.push(t)); }, $), T; }
        function c(x) { for (var I = x.length - 1; I >= 0; I--) {
            var P = x[I];
            if (P.type !== "EmptyStatement")
                return P;
        } }
        function f(x, I) { return x.getNode().type !== "ExpressionStatement" ? !1 : x.call(function ($) { return E($, I); }, "expression"); }
        function E(x, I) { var P = x.getValue(); switch (P.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral": return !0;
            case "ArrowFunctionExpression": {
                if (!y(x, I))
                    return !0;
                break;
            }
            case "UnaryExpression": {
                var $ = P.prefix, D = P.operator;
                if ($ && (D === "+" || D === "-"))
                    return !0;
                break;
            }
            case "BindExpression": {
                if (!P.object)
                    return !0;
                break;
            }
            case "Literal": {
                if (P.regex)
                    return !0;
                break;
            }
            default: if (u(P))
                return !0;
        } return s(x, I) ? !0 : n(P) ? x.call.apply(x, __spreadArray([function ($) { return E($, I); }], __read(a(x, P)), false)) : !1; }
        function _(x, I, P) { return g(x, I, P, "body"); }
        function w(x, I, P) { return g(x, I, P, "consequent"); }
        var F = function (x) { var I = x.type; return I === "ClassProperty" || I === "PropertyDefinition" || I === "ClassPrivateProperty" || I === "ClassAccessorProperty" || I === "AccessorProperty" || I === "TSAbstractPropertyDefinition" || I === "TSAbstractAccessorProperty"; };
        function N(x, I) { var _b = x.key, P = _b.type, $ = _b.name; if (!x.computed && P === "Identifier" && ($ === "static" || $ === "get" || $ === "set" || $ === "accessor") && !x.value && !x.typeAnnotation)
            return !0; if (!I || I.static || I.accessibility)
            return !1; if (!I.computed) {
            var D = I.key && I.key.name;
            if (D === "in" || D === "instanceof")
                return !0;
        } if (F(I) && I.variance && !I.static && !I.declare)
            return !0; switch (I.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition": return I.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
                if ((I.value ? I.value.async : I.async) || I.kind === "get" || I.kind === "set")
                    return !1;
                var T = I.value ? I.value.generator : I.generator;
                return !!(I.computed || T);
            }
            case "TSIndexSignature": return !0;
        } return !1; }
        r.exports = { printBody: _, printSwitchCaseConsequent: w };
    } }), Fo = te({ "src/language-js/print/block.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, s = Ue().isNonEmptyArray, _b = qe().builders, a = _b.hardline, n = _b.indent, _h = Ke(), u = _h.hasComment, i = _h.CommentCheckFlags, l = _h.isNextLineEmpty, p = tr().printHardlineAfterHeritage, d = Eo().printBody;
        function y(c, f, E) { var _ = c.getValue(), w = []; if (_.type === "StaticBlock" && w.push("static "), _.type === "ClassBody" && s(_.body)) {
            var N = c.getParentNode();
            w.push(p(N));
        } w.push("{"); var F = g(c, f, E); if (F)
            w.push(n([a, F]), a);
        else {
            var N = c.getParentNode(), x = c.getParentNode(1);
            N.type === "ArrowFunctionExpression" || N.type === "FunctionExpression" || N.type === "FunctionDeclaration" || N.type === "ObjectMethod" || N.type === "ClassMethod" || N.type === "ClassPrivateMethod" || N.type === "ForStatement" || N.type === "WhileStatement" || N.type === "DoWhileStatement" || N.type === "DoExpression" || N.type === "CatchClause" && !x.finalizer || N.type === "TSModuleDeclaration" || N.type === "TSDeclareFunction" || _.type === "StaticBlock" || _.type === "ClassBody" || w.push(a);
        } return w.push("}"), w; }
        function g(c, f, E) { var _ = c.getValue(), w = s(_.directives), F = _.body.some(function (I) { return I.type !== "EmptyStatement"; }), N = u(_, i.Dangling); if (!w && !F && !N)
            return ""; var x = []; if (w && c.each(function (I, P, $) { x.push(E()), (P < $.length - 1 || F || N) && (x.push(a), l(I.getValue(), f) && x.push(a)); }, "directives"), F && x.push(d(c, f, E)), N && x.push(t(c, f, !0)), _.type === "Program") {
            var I = c.getParentNode();
            (!I || I.type !== "ModuleExpression") && x.push(a);
        } return x; }
        r.exports = { printBlock: y, printBlockBody: g };
    } }), od = te({ "src/language-js/print/typescript.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, s = Ue().hasNewlineInRange, _b = qe().builders, a = _b.join, n = _b.line, u = _b.hardline, i = _b.softline, l = _b.group, p = _b.indent, d = _b.conditionalGroup, y = _b.ifBreak, _h = Ke(), g = _h.isStringLiteral, c = _h.getTypeScriptMappedTypeModifier, f = _h.shouldPrintComma, E = _h.isCallExpression, _ = _h.isMemberExpression, w = ad(), _j = ut(), F = _j.locStart, N = _j.locEnd, _k = ct(), x = _k.printOptionalToken, I = _k.printTypeScriptModifiers, P = Co().printTernary, _q = Ir(), $ = _q.printFunctionParameters, D = _q.shouldGroupFunctionParameters, T = Lt().printTemplateLiteral, m = Qt().printArrayItems, C = tu().printObject, _v = tr(), o = _v.printClassProperty, h = _v.printClassMethod, _w = Lr(), v = _w.printTypeParameter, S = _w.printTypeParameters, b = er().printPropertyKey, _x = Or(), B = _x.printFunction, k = _x.printMethodInternal, M = ho().printInterface, R = Fo().printBlock, _y = kr(), q = _y.printTypeAlias, J = _y.printIntersectionType, L = _y.printUnionType, Q = _y.printFunctionType, V = _y.printTupleType, j = _y.printIndexedAccessType, Y = _y.printJSDocType;
        function ie(ee, ce, W) { var K = ee.getValue(); if (!K.type.startsWith("TS"))
            return; if (w(K))
            return K.type.slice(2, -7).toLowerCase(); var de = ce.semi ? ";" : "", ue = []; switch (K.type) {
            case "TSThisType": return "this";
            case "TSTypeAssertion": {
                var Fe = !(K.expression.type === "ArrayExpression" || K.expression.type === "ObjectExpression"), z = l(["<", p([i, W("typeAnnotation")]), i, ">"]), U = [y("("), p([i, W("expression")]), i, y(")")];
                return Fe ? d([[z, W("expression")], [z, l(U, { shouldBreak: !0 })], [z, W("expression")]]) : l([z, W("expression")]);
            }
            case "TSDeclareFunction": return B(ee, W, ce);
            case "TSExportAssignment": return ["export = ", W("expression"), de];
            case "TSModuleBlock": return R(ee, ce, W);
            case "TSInterfaceBody":
            case "TSTypeLiteral": return C(ee, ce, W);
            case "TSTypeAliasDeclaration": return q(ee, ce, W);
            case "TSQualifiedName": return a(".", [W("left"), W("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod": return h(ee, ce, W);
            case "TSAbstractAccessorProperty":
            case "TSAbstractPropertyDefinition": return o(ee, ce, W);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments": return ue.push(W("expression")), K.typeParameters && ue.push(W("typeParameters")), ue;
            case "TSTemplateLiteralType": return T(ee, W, ce);
            case "TSNamedTupleMember": return [W("label"), K.optional ? "?" : "", ": ", W("elementType")];
            case "TSRestType": return ["...", W("typeAnnotation")];
            case "TSOptionalType": return [W("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration": return M(ee, ce, W);
            case "TSClassImplements": return [W("expression"), W("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation": return S(ee, ce, W, "params");
            case "TSTypeParameter": return v(ee, ce, W);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
                var Fe = K.type === "TSAsExpression" ? "as" : "satisfies";
                ue.push(W("expression"), " ".concat(Fe, " "), W("typeAnnotation"));
                var z = ee.getParentNode();
                return E(z) && z.callee === K || _(z) && z.object === K ? l([p(__spreadArray([i], __read(ue), false)), i]) : ue;
            }
            case "TSArrayType": return [W("elementType"), "[]"];
            case "TSPropertySignature": return K.readonly && ue.push("readonly "), ue.push(b(ee, ce, W), x(ee)), K.typeAnnotation && ue.push(": ", W("typeAnnotation")), K.initializer && ue.push(" = ", W("initializer")), ue;
            case "TSParameterProperty": return K.accessibility && ue.push(K.accessibility + " "), K.export && ue.push("export "), K.static && ue.push("static "), K.override && ue.push("override "), K.readonly && ue.push("readonly "), ue.push(W("parameter")), ue;
            case "TSTypeQuery": return ["typeof ", W("exprName"), W("typeParameters")];
            case "TSIndexSignature": {
                var Fe = ee.getParentNode(), z = K.parameters.length > 1 ? y(f(ce) ? "," : "") : "", U = l([p([i, a([", ", i], ee.map(W, "parameters"))]), z, i]);
                return [K.export ? "export " : "", K.accessibility ? [K.accessibility, " "] : "", K.static ? "static " : "", K.readonly ? "readonly " : "", K.declare ? "declare " : "", "[", K.parameters ? U : "", K.typeAnnotation ? "]: " : "]", K.typeAnnotation ? W("typeAnnotation") : "", Fe.type === "ClassBody" ? de : ""];
            }
            case "TSTypePredicate": return [K.asserts ? "asserts " : "", W("parameterName"), K.typeAnnotation ? [" is ", W("typeAnnotation")] : ""];
            case "TSNonNullExpression": return [W("expression"), "!"];
            case "TSImportType": return [K.isTypeOf ? "typeof " : "", "import(", W(K.parameter ? "parameter" : "argument"), ")", K.qualifier ? [".", W("qualifier")] : "", S(ee, ce, W, "typeParameters")];
            case "TSLiteralType": return W("literal");
            case "TSIndexedAccessType": return j(ee, ce, W);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
                if (K.type === "TSConstructorType" && K.abstract && ue.push("abstract "), K.type !== "TSCallSignatureDeclaration" && ue.push("new "), ue.push(l($(ee, W, ce, !1, !0))), K.returnType || K.typeAnnotation) {
                    var Fe = K.type === "TSConstructorType";
                    ue.push(Fe ? " => " : ": ", W("returnType"), W("typeAnnotation"));
                }
                return ue;
            }
            case "TSTypeOperator": return [K.operator, " ", W("typeAnnotation")];
            case "TSMappedType": {
                var Fe = s(ce.originalText, F(K), N(K));
                return l(["{", p([ce.bracketSpacing ? n : i, W("typeParameter"), K.optional ? c(K.optional, "?") : "", K.typeAnnotation ? ": " : "", W("typeAnnotation"), y(de)]), t(ee, ce, !0), ce.bracketSpacing ? n : i, "}"], { shouldBreak: Fe });
            }
            case "TSMethodSignature": {
                var Fe = K.kind && K.kind !== "method" ? "".concat(K.kind, " ") : "";
                ue.push(K.accessibility ? [K.accessibility, " "] : "", Fe, K.export ? "export " : "", K.static ? "static " : "", K.readonly ? "readonly " : "", K.abstract ? "abstract " : "", K.declare ? "declare " : "", K.computed ? "[" : "", W("key"), K.computed ? "]" : "", x(ee));
                var z = $(ee, W, ce, !1, !0), U = K.returnType ? "returnType" : "typeAnnotation", Z = K[U], se = Z ? W(U) : "", fe = D(K, se);
                return ue.push(fe ? l(z) : z), Z && ue.push(": ", l(se)), l(ue);
            }
            case "TSNamespaceExportDeclaration": return ue.push("export as namespace ", W("id")), ce.semi && ue.push(";"), l(ue);
            case "TSEnumDeclaration": return K.declare && ue.push("declare "), K.modifiers && ue.push(I(ee, ce, W)), K.const && ue.push("const "), ue.push("enum ", W("id"), " "), K.members.length === 0 ? ue.push(l(["{", t(ee, ce), i, "}"])) : ue.push(l(["{", p([u, m(ee, ce, "members", W), f(ce, "es5") ? "," : ""]), t(ee, ce, !0), u, "}"])), ue;
            case "TSEnumMember": return K.computed ? ue.push("[", W("id"), "]") : ue.push(W("id")), K.initializer && ue.push(" = ", W("initializer")), ue;
            case "TSImportEqualsDeclaration": return K.isExport && ue.push("export "), ue.push("import "), K.importKind && K.importKind !== "value" && ue.push(K.importKind, " "), ue.push(W("id"), " = ", W("moduleReference")), ce.semi && ue.push(";"), l(ue);
            case "TSExternalModuleReference": return ["require(", W("expression"), ")"];
            case "TSModuleDeclaration": {
                var Fe = ee.getParentNode(), z = g(K.id), U = Fe.type === "TSModuleDeclaration", Z = K.body && K.body.type === "TSModuleDeclaration";
                if (U)
                    ue.push(".");
                else {
                    K.declare && ue.push("declare "), ue.push(I(ee, ce, W));
                    var se = ce.originalText.slice(F(K), F(K.id));
                    K.id.type === "Identifier" && K.id.name === "global" && !/namespace|module/.test(se) || ue.push(z || /(?:^|\s)module(?:\s|$)/.test(se) ? "module " : "namespace ");
                }
                return ue.push(W("id")), Z ? ue.push(W("body")) : K.body ? ue.push(" ", l(W("body"))) : ue.push(de), ue;
            }
            case "TSConditionalType": return P(ee, ce, W);
            case "TSInferType": return ["infer", " ", W("typeParameter")];
            case "TSIntersectionType": return J(ee, ce, W);
            case "TSUnionType": return L(ee, ce, W);
            case "TSFunctionType": return Q(ee, ce, W);
            case "TSTupleType": return V(ee, ce, W);
            case "TSTypeReference": return [W("typeName"), S(ee, ce, W, "typeParameters")];
            case "TSTypeAnnotation": return W("typeAnnotation");
            case "TSEmptyBodyFunctionExpression": return k(ee, ce, W);
            case "TSJSDocAllType": return "*";
            case "TSJSDocUnknownType": return "?";
            case "TSJSDocNullableType": return Y(ee, W, "?");
            case "TSJSDocNonNullableType": return Y(ee, W, "!");
            case "TSInstantiationExpression": return [W("expression"), W("typeParameters")];
            default: throw new Error("Unknown TypeScript node type: ".concat(JSON.stringify(K.type), "."));
        } }
        r.exports = { printTypescript: ie };
    } }), ld = te({ "src/language-js/print/comment.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().hasNewline, _b = qe(), _h = _b.builders, s = _h.join, a = _h.hardline, n = _b.utils.replaceTextEndOfLine, u = Ke().isLineComment, _j = ut(), i = _j.locStart, l = _j.locEnd, p = _t();
        function d(c, f) { var E = c.getValue(); if (u(E))
            return f.originalText.slice(i(E), l(E)).trimEnd(); if (p(E)) {
            if (y(E)) {
                var F = g(E);
                return E.trailing && !t(f.originalText, i(E), { backwards: !0 }) ? [a, F] : F;
            }
            var _ = l(E), w = f.originalText.slice(_ - 3, _) === "*-/";
            return ["/*", n(E.value), w ? "*-/" : "*/"];
        } throw new Error("Not a comment: " + JSON.stringify(E)); }
        function y(c) {
            var f = "*".concat(c.value, "*").split("\n");
            return f.length > 1 && f.every(function (E) { return E.trim()[0] === "*"; });
        }
        function g(c) {
            var f = c.value.split("\n");
            return ["/*", s(a, f.map(function (E, _) { return _ === 0 ? E.trimEnd() : " " + (_ < f.length - 1 ? E.trim() : E.trimStart()); })), "*/"];
        }
        r.exports = { printComment: d };
    } }), cd = te({ "src/language-js/print/literal.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.printString, s = _b.printNumber, a = Xt().replaceTextEndOfLine, n = ct().printDirective;
        function u(d, y) { var g = d.getNode(); switch (g.type) {
            case "RegExpLiteral": return p(g);
            case "BigIntLiteral": return l(g.bigint || g.extra.raw);
            case "NumericLiteral": return s(g.extra.raw);
            case "StringLiteral": return a(t(g.extra.raw, y));
            case "NullLiteral": return "null";
            case "BooleanLiteral": return String(g.value);
            case "DecimalLiteral": return s(g.value) + "m";
            case "Literal": {
                if (g.regex)
                    return p(g.regex);
                if (g.bigint)
                    return l(g.raw);
                if (g.decimal)
                    return s(g.decimal) + "m";
                var c = g.value;
                return typeof c == "number" ? s(g.raw) : typeof c == "string" ? i(d) ? n(g.raw, y) : a(t(g.raw, y)) : String(c);
            }
        } }
        function i(d) { if (d.getName() !== "expression")
            return; var y = d.getParentNode(); return y.type === "ExpressionStatement" && y.directive; }
        function l(d) { return d.toLowerCase(); }
        function p(d) { var y = d.pattern, g = d.flags; return g = __spreadArray([], __read(g), false).sort().join(""), "/".concat(y, "/").concat(g); }
        r.exports = { printLiteral: u };
    } }), pd = te({ "src/language-js/printer-estree.js": function (e, r) {
        "use strict";
        ne();
        var t = et().printDanglingComments, s = Ue().hasNewline, _b = qe(), _h = _b.builders, a = _h.join, n = _h.line, u = _h.hardline, i = _h.softline, l = _h.group, p = _h.indent, d = _b.utils.replaceTextEndOfLine, y = Um(), g = Jm(), c = po().insertPragma, f = fo(), E = Ot(), _ = Do(), _j = Ke(), w = _j.hasFlowShorthandAnnotationComment, F = _j.hasComment, N = _j.CommentCheckFlags, x = _j.isTheOnlyJsxElementInMarkdown, I = _j.isLineComment, P = _j.isNextLineEmpty, $ = _j.needsHardlineAfterDanglingComment, D = _j.hasIgnoreComment, T = _j.isCallExpression, m = _j.isMemberExpression, C = _j.markerForIfWithoutBlockAndSameLineComment, _k = ut(), o = _k.locStart, h = _k.locEnd, v = _t(), _q = rd(), S = _q.printHtmlBinding, b = _q.isVueEventBindingExpression, B = nd().printAngular, _v = ud(), k = _v.printJsx, M = _v.hasJsxIgnoreComment, R = id().printFlow, q = od().printTypescript, _w = ct(), J = _w.printOptionalToken, L = _w.printBindExpressionCallee, Q = _w.printTypeAnnotation, V = _w.adjustClause, j = _w.printRestSpread, Y = _w.printDefiniteToken, ie = _w.printDirective, _x = vo(), ee = _x.printImportDeclaration, ce = _x.printExportDeclaration, W = _x.printExportAllDeclaration, K = _x.printModuleSpecifier, de = Co().printTernary, ue = Lt().printTemplateLiteral, Fe = Qt().printArray, z = tu().printObject, _y = tr(), U = _y.printClass, Z = _y.printClassMethod, se = _y.printClassProperty, fe = er().printProperty, _z = Or(), ge = _z.printFunction, he = _z.printArrowFunction, we = _z.printMethod, ke = _z.printReturnStatement, Re = _z.printThrowStatement, Ne = yo().printCallExpression, _1 = Zt(), Pe = _1.printVariableDeclarator, oe = _1.printAssignmentExpression, H = Zn().printBinaryishExpression, pe = Eo().printSwitchCaseConsequent, X = go().printMemberExpression, _2 = Fo(), le = _2.printBlock, Ae = _2.printBlockBody, Ee = ld().printComment, De = cd().printLiteral, A = eu().printDecorators;
        function G(Ce, Be, ve, ze) { var xe = re(Ce, Be, ve, ze); if (!xe)
            return ""; var Ye = Ce.getValue(), Se = Ye.type; if (Se === "ClassMethod" || Se === "ClassPrivateMethod" || Se === "ClassProperty" || Se === "ClassAccessorProperty" || Se === "AccessorProperty" || Se === "TSAbstractAccessorProperty" || Se === "PropertyDefinition" || Se === "TSAbstractPropertyDefinition" || Se === "ClassPrivateProperty" || Se === "MethodDefinition" || Se === "TSAbstractMethodDefinition" || Se === "TSDeclareMethod")
            return xe; var Ie = [xe], Oe = A(Ce, Be, ve), Je = Ye.type === "ClassExpression" && Oe; if (Oe && (Ie = __spreadArray(__spreadArray([], __read(Oe), false), [xe], false), !Je))
            return l(Ie); if (!E(Ce, Be))
            return ze && ze.needsSemi && Ie.unshift(";"), Ie.length === 1 && Ie[0] === xe ? xe : Ie; if (Je && (Ie = [p(__spreadArray([n], __read(Ie), false))]), Ie.unshift("("), ze && ze.needsSemi && Ie.unshift(";"), w(Ye)) {
            var _b = __read(Ye.trailingComments, 1), je = _b[0];
            Ie.push(" /*", je.value.trimStart(), "*/"), je.printed = !0;
        } return Je && Ie.push(n), Ie.push(")"), Ie; }
        function re(Ce, Be, ve, ze) {
            var e_55, _b;
            var xe = Ce.getValue(), Ye = Be.semi ? ";" : "";
            if (!xe)
                return "";
            if (typeof xe == "string")
                return xe;
            try {
                for (var _h = __values([De, S, B, k, R, q]), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var Ie = _j.value;
                    var Oe = Ie(Ce, Be, ve);
                    if (typeof Oe < "u")
                        return Oe;
                }
            }
            catch (e_55_1) { e_55 = { error: e_55_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_55) throw e_55.error; }
            }
            var Se = [];
            switch (xe.type) {
                case "JsExpressionRoot": return ve("node");
                case "JsonRoot": return [ve("node"), u];
                case "File": return xe.program && xe.program.interpreter && Se.push(ve(["program", "interpreter"])), Se.push(ve("program")), Se;
                case "Program": return Ae(Ce, Be, ve);
                case "EmptyStatement": return "";
                case "ExpressionStatement": {
                    if (Be.parser === "__vue_event_binding" || Be.parser === "__vue_ts_event_binding") {
                        var Oe = Ce.getParentNode();
                        if (Oe.type === "Program" && Oe.body.length === 1 && Oe.body[0] === xe)
                            return [ve("expression"), b(xe.expression) ? ";" : ""];
                    }
                    var Ie = t(Ce, Be, !0, function (Oe) { var Je = Oe.marker; return Je === C; });
                    return [ve("expression"), x(Be, Ce) ? "" : Ye, Ie ? [" ", Ie] : ""];
                }
                case "ParenthesizedExpression": return !F(xe.expression) && (xe.expression.type === "ObjectExpression" || xe.expression.type === "ArrayExpression") ? ["(", ve("expression"), ")"] : l(["(", p([i, ve("expression")]), i, ")"]);
                case "AssignmentExpression": return oe(Ce, Be, ve);
                case "VariableDeclarator": return Pe(Ce, Be, ve);
                case "BinaryExpression":
                case "LogicalExpression": return H(Ce, Be, ve);
                case "AssignmentPattern": return [ve("left"), " = ", ve("right")];
                case "OptionalMemberExpression":
                case "MemberExpression": return X(Ce, Be, ve);
                case "MetaProperty": return [ve("meta"), ".", ve("property")];
                case "BindExpression": return xe.object && Se.push(ve("object")), Se.push(l(p([i, L(Ce, Be, ve)]))), Se;
                case "Identifier": return [xe.name, J(Ce), Y(Ce), Q(Ce, Be, ve)];
                case "V8IntrinsicIdentifier": return ["%", xe.name];
                case "SpreadElement":
                case "SpreadElementPattern":
                case "SpreadProperty":
                case "SpreadPropertyPattern":
                case "RestElement": return j(Ce, Be, ve);
                case "FunctionDeclaration":
                case "FunctionExpression": return ge(Ce, ve, Be, ze);
                case "ArrowFunctionExpression": return he(Ce, Be, ve, ze);
                case "YieldExpression": return Se.push("yield"), xe.delegate && Se.push("*"), xe.argument && Se.push(" ", ve("argument")), Se;
                case "AwaitExpression": {
                    if (Se.push("await"), xe.argument) {
                        Se.push(" ", ve("argument"));
                        var Ie = Ce.getParentNode();
                        if (T(Ie) && Ie.callee === xe || m(Ie) && Ie.object === xe) {
                            Se = [p(__spreadArray([i], __read(Se), false)), i];
                            var Oe = Ce.findAncestor(function (Je) { return Je.type === "AwaitExpression" || Je.type === "BlockStatement"; });
                            if (!Oe || Oe.type !== "AwaitExpression")
                                return l(Se);
                        }
                    }
                    return Se;
                }
                case "ExportDefaultDeclaration":
                case "ExportNamedDeclaration": return ce(Ce, Be, ve);
                case "ExportAllDeclaration": return W(Ce, Be, ve);
                case "ImportDeclaration": return ee(Ce, Be, ve);
                case "ImportSpecifier":
                case "ExportSpecifier":
                case "ImportNamespaceSpecifier":
                case "ExportNamespaceSpecifier":
                case "ImportDefaultSpecifier":
                case "ExportDefaultSpecifier": return K(Ce, Be, ve);
                case "ImportAttribute": return [ve("key"), ": ", ve("value")];
                case "Import": return "import";
                case "BlockStatement":
                case "StaticBlock":
                case "ClassBody": return le(Ce, Be, ve);
                case "ThrowStatement": return Re(Ce, Be, ve);
                case "ReturnStatement": return ke(Ce, Be, ve);
                case "NewExpression":
                case "ImportExpression":
                case "OptionalCallExpression":
                case "CallExpression": return Ne(Ce, Be, ve);
                case "ObjectExpression":
                case "ObjectPattern":
                case "RecordExpression": return z(Ce, Be, ve);
                case "ObjectProperty":
                case "Property": return xe.method || xe.kind === "get" || xe.kind === "set" ? we(Ce, Be, ve) : fe(Ce, Be, ve);
                case "ObjectMethod": return we(Ce, Be, ve);
                case "Decorator": return ["@", ve("expression")];
                case "ArrayExpression":
                case "ArrayPattern":
                case "TupleExpression": return Fe(Ce, Be, ve);
                case "SequenceExpression": {
                    var Ie = Ce.getParentNode(0);
                    if (Ie.type === "ExpressionStatement" || Ie.type === "ForStatement") {
                        var Oe_1 = [];
                        return Ce.each(function (Je, be) { be === 0 ? Oe_1.push(ve()) : Oe_1.push(",", p([n, ve()])); }, "expressions"), l(Oe_1);
                    }
                    return l(a([",", n], Ce.map(ve, "expressions")));
                }
                case "ThisExpression": return "this";
                case "Super": return "super";
                case "Directive": return [ve("value"), Ye];
                case "DirectiveLiteral": return ie(xe.extra.raw, Be);
                case "UnaryExpression": return Se.push(xe.operator), /[a-z]$/.test(xe.operator) && Se.push(" "), F(xe.argument) ? Se.push(l(["(", p([i, ve("argument")]), i, ")"])) : Se.push(ve("argument")), Se;
                case "UpdateExpression": return Se.push(ve("argument"), xe.operator), xe.prefix && Se.reverse(), Se;
                case "ConditionalExpression": return de(Ce, Be, ve);
                case "VariableDeclaration": {
                    var Ie = Ce.map(ve, "declarations"), Oe = Ce.getParentNode(), Je_1 = Oe.type === "ForStatement" || Oe.type === "ForInStatement" || Oe.type === "ForOfStatement", be_1 = xe.declarations.some(function (Me) { return Me.init; }), je = void 0;
                    return Ie.length === 1 && !F(xe.declarations[0]) ? je = Ie[0] : Ie.length > 0 && (je = p(Ie[0])), Se = [xe.declare ? "declare " : "", xe.kind, je ? [" ", je] : "", p(Ie.slice(1).map(function (Me) { return [",", be_1 && !Je_1 ? u : n, Me]; }))], Je_1 && Oe.body !== xe || Se.push(Ye), l(Se);
                }
                case "WithStatement": return l(["with (", ve("object"), ")", V(xe.body, ve("body"))]);
                case "IfStatement": {
                    var Ie = V(xe.consequent, ve("consequent")), Oe = l(["if (", l([p([i, ve("test")]), i]), ")", Ie]);
                    if (Se.push(Oe), xe.alternate) {
                        var Je = F(xe.consequent, N.Trailing | N.Line) || $(xe), be = xe.consequent.type === "BlockStatement" && !Je;
                        Se.push(be ? " " : u), F(xe, N.Dangling) && Se.push(t(Ce, Be, !0), Je ? u : " "), Se.push("else", l(V(xe.alternate, ve("alternate"), xe.alternate.type === "IfStatement")));
                    }
                    return Se;
                }
                case "ForStatement": {
                    var Ie = V(xe.body, ve("body")), Oe = t(Ce, Be, !0), Je = Oe ? [Oe, i] : "";
                    return !xe.init && !xe.test && !xe.update ? [Je, l(["for (;;)", Ie])] : [Je, l(["for (", l([p([i, ve("init"), ";", n, ve("test"), ";", n, ve("update")]), i]), ")", Ie])];
                }
                case "WhileStatement": return l(["while (", l([p([i, ve("test")]), i]), ")", V(xe.body, ve("body"))]);
                case "ForInStatement": return l(["for (", ve("left"), " in ", ve("right"), ")", V(xe.body, ve("body"))]);
                case "ForOfStatement": return l(["for", xe.await ? " await" : "", " (", ve("left"), " of ", ve("right"), ")", V(xe.body, ve("body"))]);
                case "DoWhileStatement": {
                    var Ie = V(xe.body, ve("body"));
                    return Se = [l(["do", Ie])], xe.body.type === "BlockStatement" ? Se.push(" ") : Se.push(u), Se.push("while (", l([p([i, ve("test")]), i]), ")", Ye), Se;
                }
                case "DoExpression": return [xe.async ? "async " : "", "do ", ve("body")];
                case "BreakStatement": return Se.push("break"), xe.label && Se.push(" ", ve("label")), Se.push(Ye), Se;
                case "ContinueStatement": return Se.push("continue"), xe.label && Se.push(" ", ve("label")), Se.push(Ye), Se;
                case "LabeledStatement": return xe.body.type === "EmptyStatement" ? [ve("label"), ":;"] : [ve("label"), ": ", ve("body")];
                case "TryStatement": return ["try ", ve("block"), xe.handler ? [" ", ve("handler")] : "", xe.finalizer ? [" finally ", ve("finalizer")] : ""];
                case "CatchClause":
                    if (xe.param) {
                        var Ie = F(xe.param, function (Je) { return !v(Je) || Je.leading && s(Be.originalText, h(Je)) || Je.trailing && s(Be.originalText, o(Je), { backwards: !0 }); }), Oe = ve("param");
                        return ["catch ", Ie ? ["(", p([i, Oe]), i, ") "] : ["(", Oe, ") "], ve("body")];
                    }
                    return ["catch ", ve("body")];
                case "SwitchStatement": return [l(["switch (", p([i, ve("discriminant")]), i, ")"]), " {", xe.cases.length > 0 ? p([u, a(u, Ce.map(function (Ie, Oe, Je) { var be = Ie.getValue(); return [ve(), Oe !== Je.length - 1 && P(be, Be) ? u : ""]; }, "cases"))]) : "", u, "}"];
                case "SwitchCase": {
                    xe.test ? Se.push("case ", ve("test"), ":") : Se.push("default:"), F(xe, N.Dangling) && Se.push(" ", t(Ce, Be, !0));
                    var Ie = xe.consequent.filter(function (Oe) { return Oe.type !== "EmptyStatement"; });
                    if (Ie.length > 0) {
                        var Oe = pe(Ce, Be, ve);
                        Se.push(Ie.length === 1 && Ie[0].type === "BlockStatement" ? [" ", Oe] : p([u, Oe]));
                    }
                    return Se;
                }
                case "DebuggerStatement": return ["debugger", Ye];
                case "ClassDeclaration":
                case "ClassExpression": return U(Ce, Be, ve);
                case "ClassMethod":
                case "ClassPrivateMethod":
                case "MethodDefinition": return Z(Ce, Be, ve);
                case "ClassProperty":
                case "PropertyDefinition":
                case "ClassPrivateProperty":
                case "ClassAccessorProperty":
                case "AccessorProperty": return se(Ce, Be, ve);
                case "TemplateElement": return d(xe.value.raw);
                case "TemplateLiteral": return ue(Ce, ve, Be);
                case "TaggedTemplateExpression": return [ve("tag"), ve("typeParameters"), ve("quasi")];
                case "PrivateIdentifier": return ["#", ve("name")];
                case "PrivateName": return ["#", ve("id")];
                case "InterpreterDirective": return Se.push("#!", xe.value, u), P(xe, Be) && Se.push(u), Se;
                case "TopicReference": return "%";
                case "ArgumentPlaceholder": return "?";
                case "ModuleExpression": {
                    Se.push("module {");
                    var Ie = ve("body");
                    return Ie && Se.push(p([u, Ie]), u), Se.push("}"), Se;
                }
                default: throw new Error("unknown type: " + JSON.stringify(xe.type));
            }
        }
        function ye(Ce) { return Ce.type && !v(Ce) && !I(Ce) && Ce.type !== "EmptyStatement" && Ce.type !== "TemplateElement" && Ce.type !== "Import" && Ce.type !== "TSEmptyBodyFunctionExpression"; }
        r.exports = { preprocess: _, print: G, embed: y, insertPragma: c, massageAstNode: g, hasPrettierIgnore: function (Ce) { return D(Ce) || M(Ce); }, willPrintOwnComments: f.willPrintOwnComments, canAttachComment: ye, printComment: Ee, isBlockComment: v, handleComments: { avoidAstMutation: !0, ownLine: f.handleOwnLineComment, endOfLine: f.handleEndOfLineComment, remaining: f.handleRemainingComment }, getCommentChildNodes: f.getCommentChildNodes };
    } }), fd = te({ "src/language-js/printer-estree-json.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.hardline, s = _b.indent, a = _b.join, n = Do();
        function u(d, y, g) { var c = d.getValue(); switch (c.type) {
            case "JsonRoot": return [g("node"), t];
            case "ArrayExpression": {
                if (c.elements.length === 0)
                    return "[]";
                var f = d.map(function () { return d.getValue() === null ? "null" : g(); }, "elements");
                return ["[", s([t, a([",", t], f)]), t, "]"];
            }
            case "ObjectExpression": return c.properties.length === 0 ? "{}" : ["{", s([t, a([",", t], d.map(g, "properties"))]), t, "}"];
            case "ObjectProperty": return [g("key"), ": ", g("value")];
            case "UnaryExpression": return [c.operator === "+" ? "" : c.operator, g("argument")];
            case "NullLiteral": return "null";
            case "BooleanLiteral": return c.value ? "true" : "false";
            case "StringLiteral": return JSON.stringify(c.value);
            case "NumericLiteral": return i(d) ? JSON.stringify(String(c.value)) : JSON.stringify(c.value);
            case "Identifier": return i(d) ? JSON.stringify(c.name) : c.name;
            case "TemplateLiteral": return g(["quasis", 0]);
            case "TemplateElement": return JSON.stringify(c.value.cooked);
            default: throw new Error("unknown type: " + JSON.stringify(c.type));
        } }
        function i(d) { return d.getName() === "key" && d.getParentNode().type === "ObjectProperty"; }
        var l = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function p(d, y) {
            var e_56, _b;
            var g = d.type;
            if (g === "ObjectProperty") {
                var c = d.key;
                c.type === "Identifier" ? y.key = { type: "StringLiteral", value: c.name } : c.type === "NumericLiteral" && (y.key = { type: "StringLiteral", value: String(c.value) });
                return;
            }
            if (g === "UnaryExpression" && d.operator === "+")
                return y.argument;
            if (g === "ArrayExpression") {
                try {
                    for (var _h = __values(d.elements.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var _k = __read(_j.value, 2), c = _k[0], f = _k[1];
                        f === null && y.elements.splice(c, 0, { type: "NullLiteral" });
                    }
                }
                catch (e_56_1) { e_56 = { error: e_56_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                    }
                    finally { if (e_56) throw e_56.error; }
                }
                return;
            }
            if (g === "TemplateLiteral")
                return { type: "StringLiteral", value: d.quasis[0].value.cooked };
        }
        p.ignoredProperties = l, r.exports = { preprocess: n, print: u, massageAstNode: p };
    } }), jt = te({ "src/common/common-options.js": function (e, r) {
        "use strict";
        ne();
        var t = "Common";
        r.exports = { bracketSpacing: { since: "0.0.0", category: t, type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t, type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t, type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t, type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t, type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
    } }), Dd = te({ "src/language-js/options.js": function (e, r) {
        "use strict";
        ne();
        var t = jt(), s = "JavaScript";
        r.exports = { arrowParens: { since: "1.9.0", category: s, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: s, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: s, type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t.singleQuote, jsxSingleQuote: { since: "1.15.0", category: s, type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: s, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: s, type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t.singleAttributePerLine };
    } }), md = te({ "src/language-js/parse/parsers.js": function () { ne(); } }), In = te({ "node_modules/linguist-languages/data/JavaScript.json": function (e, r) { r.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 }; } }), dd = te({ "node_modules/linguist-languages/data/TypeScript.json": function (e, r) { r.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 }; } }), gd = te({ "node_modules/linguist-languages/data/TSX.json": function (e, r) { r.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 }; } }), Fa = te({ "node_modules/linguist-languages/data/JSON.json": function (e, r) { r.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 }; } }), yd = te({ "node_modules/linguist-languages/data/JSON with Comments.json": function (e, r) { r.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 }; } }), hd = te({ "node_modules/linguist-languages/data/JSON5.json": function (e, r) { r.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 }; } }), vd = te({ "src/language-js/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = pd(), a = fd(), n = Dd(), u = md(), i = [t(In(), function (p) { return ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: __spreadArray(__spreadArray([], __read(p.interpreters), false), ["zx"], false), extensions: __spreadArray(__spreadArray([], __read(p.extensions.filter(function (d) { return d !== ".jsx"; })), false), [".wxs"], false) }); }), t(In(), function () { return ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] }); }), t(In(), function () { return ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 }); }), t(dd(), function () { return ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] }); }), t(gd(), function () { return ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] }); }), t(Fa(), function () { return ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] }); }), t(Fa(), function (p) { return ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: p.extensions.filter(function (d) { return d !== ".jsonl"; }) }); }), t(yd(), function (p) { return ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: __spreadArray(__spreadArray([], __read(p.filenames), false), [".eslintrc", ".swcrc"], false) }); }), t(hd(), function () { return ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }); })], l = { estree: s, "estree-json": a };
        r.exports = { languages: i, options: n, printers: l, parsers: u };
    } }), Cd = te({ "src/language-css/clean.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().isFrontMatterNode, s = lt(), a = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function n(i, l, p) { if (t(i) && i.lang === "yaml" && delete l.value, i.type === "css-comment" && p.type === "css-root" && p.nodes.length > 0 && ((p.nodes[0] === i || t(p.nodes[0]) && p.nodes[1] === i) && (delete l.text, /^\*\s*@(?:format|prettier)\s*$/.test(i.text)) || p.type === "css-root" && s(p.nodes) === i))
            return null; if (i.type === "value-root" && delete l.text, (i.type === "media-query" || i.type === "media-query-list" || i.type === "media-feature-expression") && delete l.value, i.type === "css-rule" && delete l.params, i.type === "selector-combinator" && (l.value = l.value.replace(/\s+/g, " ")), i.type === "media-feature" && (l.value = l.value.replace(/ /g, "")), (i.type === "value-word" && (i.isColor && i.isHex || ["initial", "inherit", "unset", "revert"].includes(l.value.replace().toLowerCase())) || i.type === "media-feature" || i.type === "selector-root-invalid" || i.type === "selector-pseudo") && (l.value = l.value.toLowerCase()), i.type === "css-decl" && (l.prop = l.prop.toLowerCase()), (i.type === "css-atrule" || i.type === "css-import") && (l.name = l.name.toLowerCase()), i.type === "value-number" && (l.unit = l.unit.toLowerCase()), (i.type === "media-feature" || i.type === "media-keyword" || i.type === "media-type" || i.type === "media-unknown" || i.type === "media-url" || i.type === "media-value" || i.type === "selector-attribute" || i.type === "selector-string" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "value-string") && l.value && (l.value = u(l.value)), i.type === "selector-attribute" && (l.attribute = l.attribute.trim(), l.namespace && typeof l.namespace == "string" && (l.namespace = l.namespace.trim(), l.namespace.length === 0 && (l.namespace = !0)), l.value && (l.value = l.value.trim().replace(/^["']|["']$/g, ""), delete l.quoted)), (i.type === "media-value" || i.type === "media-type" || i.type === "value-number" || i.type === "selector-root-invalid" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "selector-tag") && l.value && (l.value = l.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, function (d, y, g) { var c = Number(y); return Number.isNaN(c) ? d : c + g.toLowerCase(); })), i.type === "selector-tag") {
            var d = i.value.toLowerCase();
            ["from", "to"].includes(d) && (l.value = d);
        } if (i.type === "css-atrule" && i.name.toLowerCase() === "supports" && delete l.value, i.type === "selector-unknown" && delete l.value, i.type === "value-comma_group") {
            var d = i.groups.findIndex(function (y) { return y.type === "value-number" && y.unit === "..."; });
            d !== -1 && (l.groups[d].unit = "", l.groups.splice(d + 1, 0, { type: "value-word", value: "...", isColor: !1, isHex: !1 }));
        } if (i.type === "value-comma_group" && i.groups.some(function (d) { return d.type === "value-atword" && d.value.endsWith("[") || d.type === "value-word" && d.value.startsWith("]"); }))
            return { type: "value-atword", value: i.groups.map(function (d) { return d.value; }).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } }; }
        n.ignoredProperties = a;
        function u(i) { return i.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1"); }
        r.exports = n;
    } }), ru = te({ "src/utils/front-matter/print.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.hardline, s = _b.markAsRoot;
        function a(n, u) { if (n.lang === "yaml") {
            var i = n.value.trim(), l = i ? u(i, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
            return s([n.startDelimiter, t, l, l ? t : "", n.endDelimiter]);
        } }
        r.exports = a;
    } }), Ed = te({ "src/language-css/embed.js": function (e, r) {
        "use strict";
        ne();
        var t = qe().builders.hardline, s = ru();
        function a(n, u, i) { var l = n.getValue(); if (l.type === "front-matter") {
            var p = s(l, i);
            return p ? [p, t] : "";
        } }
        r.exports = a;
    } }), Ao = te({ "src/utils/front-matter/parse.js": function (e, r) {
        "use strict";
        ne();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function s(a) { var n = a.match(t); if (!n)
            return { content: a }; var _b = n.groups, u = _b.startDelimiter, i = _b.language, _h = _b.value, l = _h === void 0 ? "" : _h, p = _b.endDelimiter, d = i.trim() || "yaml"; if (u === "+++" && (d = "toml"), d !== "yaml" && u !== p)
            return { content: a }; var _j = __read(n, 1), y = _j[0]; return { frontMatter: { type: "front-matter", lang: d, value: l, startDelimiter: u, endDelimiter: p, raw: y.replace(/\n$/, "") }, content: y.replace(/[^\n]/g, " ") + a.slice(y.length) }; }
        r.exports = s;
    } }), Fd = te({ "src/language-css/pragma.js": function (e, r) {
        "use strict";
        ne();
        var t = po(), s = Ao();
        function a(u) { return t.hasPragma(s(u).content); }
        function n(u) {
            var _b = s(u), i = _b.frontMatter, l = _b.content;
            return (i ? i.raw + "\n\n" : "") + t.insertPragma(l);
        }
        r.exports = { hasPragma: a, insertPragma: n };
    } }), Ad = te({ "src/language-css/utils/index.js": function (e, r) {
        "use strict";
        ne();
        var t = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function s(z, U) { var Z = Array.isArray(U) ? U : [U], se = -1, fe; for (; fe = z.getParentNode(++se);)
            if (Z.includes(fe.type))
                return se; return -1; }
        function a(z, U) { var Z = s(z, U); return Z === -1 ? null : z.getParentNode(Z); }
        function n(z) { var U; var Z = a(z, "css-decl"); return Z == null || (U = Z.prop) === null || U === void 0 ? void 0 : U.toLowerCase(); }
        var u = new Set(["initial", "inherit", "unset", "revert"]);
        function i(z) { return u.has(z.toLowerCase()); }
        function l(z, U) { var Z = a(z, "css-atrule"); return (Z == null ? void 0 : Z.name) && Z.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(U.toLowerCase()); }
        function p(z) { return z.includes("$") || z.includes("@") || z.includes("#") || z.startsWith("%") || z.startsWith("--") || z.startsWith(":--") || z.includes("(") && z.includes(")") ? z : z.toLowerCase(); }
        function d(z, U) { var Z; var se = a(z, "value-func"); return (se == null || (Z = se.value) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === U; }
        function y(z) { var U; var Z = a(z, "css-rule"), se = Z == null || (U = Z.raws) === null || U === void 0 ? void 0 : U.selector; return se && (se.startsWith(":import") || se.startsWith(":export")); }
        function g(z, U) { var Z = Array.isArray(U) ? U : [U], se = a(z, "css-atrule"); return se && Z.includes(se.name.toLowerCase()); }
        function c(z) { var U = z.getValue(), Z = a(z, "css-atrule"); return (Z == null ? void 0 : Z.name) === "import" && U.groups[0].value === "url" && U.groups.length === 2; }
        function f(z) { return z.type === "value-func" && z.value.toLowerCase() === "url"; }
        function E(z, U) { var Z; var se = (Z = z.getParentNode()) === null || Z === void 0 ? void 0 : Z.nodes; return se && se.indexOf(U) === se.length - 1; }
        function _(z) { var U = z.selector; return U ? typeof U == "string" && /^@.+:.*$/.test(U) || U.value && /^@.+:.*$/.test(U.value) : !1; }
        function w(z) { return z.type === "value-word" && ["from", "through", "end"].includes(z.value); }
        function F(z) { return z.type === "value-word" && ["and", "or", "not"].includes(z.value); }
        function N(z) { return z.type === "value-word" && z.value === "in"; }
        function x(z) { return z.type === "value-operator" && z.value === "*"; }
        function I(z) { return z.type === "value-operator" && z.value === "/"; }
        function P(z) { return z.type === "value-operator" && z.value === "+"; }
        function $(z) { return z.type === "value-operator" && z.value === "-"; }
        function D(z) { return z.type === "value-operator" && z.value === "%"; }
        function T(z) { return x(z) || I(z) || P(z) || $(z) || D(z); }
        function m(z) { return z.type === "value-word" && ["==", "!="].includes(z.value); }
        function C(z) { return z.type === "value-word" && ["<", ">", "<=", ">="].includes(z.value); }
        function o(z) { return z.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(z.name); }
        function h(z) { var U; return ((U = z.raws) === null || U === void 0 ? void 0 : U.params) && /^\(\s*\)$/.test(z.raws.params); }
        function v(z) { return z.name.startsWith("prettier-placeholder"); }
        function S(z) { return z.prop.startsWith("@prettier-placeholder"); }
        function b(z, U) { return z.value === "$$" && z.type === "value-func" && (U == null ? void 0 : U.type) === "value-word" && !U.raws.before; }
        function B(z) { var U, Z; return ((U = z.value) === null || U === void 0 ? void 0 : U.type) === "value-root" && ((Z = z.value.group) === null || Z === void 0 ? void 0 : Z.type) === "value-value" && z.prop.toLowerCase() === "composes"; }
        function k(z) { var U, Z, se; return ((U = z.value) === null || U === void 0 || (Z = U.group) === null || Z === void 0 || (se = Z.group) === null || se === void 0 ? void 0 : se.type) === "value-paren_group" && z.value.group.group.open !== null && z.value.group.group.close !== null; }
        function M(z) { var U; return ((U = z.raws) === null || U === void 0 ? void 0 : U.before) === ""; }
        function R(z) { var U, Z; return z.type === "value-comma_group" && ((U = z.groups) === null || U === void 0 || (Z = U[1]) === null || Z === void 0 ? void 0 : Z.type) === "value-colon"; }
        function q(z) { var U; return z.type === "value-paren_group" && ((U = z.groups) === null || U === void 0 ? void 0 : U[0]) && R(z.groups[0]); }
        function J(z) { var U; var Z = z.getValue(); if (Z.groups.length === 0)
            return !1; var se = z.getParentNode(1); if (!q(Z) && !(se && q(se)))
            return !1; var fe = a(z, "css-decl"); return !!(fe != null && (U = fe.prop) !== null && U !== void 0 && U.startsWith("$") || q(se) || se.type === "value-func"); }
        function L(z) { return z.type === "value-comment" && z.inline; }
        function Q(z) { return z.type === "value-word" && z.value === "#"; }
        function V(z) { return z.type === "value-word" && z.value === "{"; }
        function j(z) { return z.type === "value-word" && z.value === "}"; }
        function Y(z) { return ["value-word", "value-atword"].includes(z.type); }
        function ie(z) { return (z == null ? void 0 : z.type) === "value-colon"; }
        function ee(z, U) { if (!R(U))
            return !1; var Z = U.groups, se = Z.indexOf(z); return se === -1 ? !1 : ie(Z[se + 1]); }
        function ce(z) { return z.value && ["not", "and", "or"].includes(z.value.toLowerCase()); }
        function W(z) { return z.type !== "value-func" ? !1 : t.has(z.value.toLowerCase()); }
        function K(z) { return /\/\//.test(z.split(/[\n\r]/).pop()); }
        function de(z) { return (z == null ? void 0 : z.type) === "value-atword" && z.value.startsWith("prettier-placeholder-"); }
        function ue(z, U) { var Z, se; if (((Z = z.open) === null || Z === void 0 ? void 0 : Z.value) !== "(" || ((se = z.close) === null || se === void 0 ? void 0 : se.value) !== ")" || z.groups.some(function (fe) { return fe.type !== "value-comma_group"; }))
            return !1; if (U.type === "value-comma_group") {
            var fe = U.groups.indexOf(z) - 1, ge = U.groups[fe];
            if ((ge == null ? void 0 : ge.type) === "value-word" && ge.value === "with")
                return !0;
        } return !1; }
        function Fe(z) { var U, Z; return z.type === "value-paren_group" && ((U = z.open) === null || U === void 0 ? void 0 : U.value) === "(" && ((Z = z.close) === null || Z === void 0 ? void 0 : Z.value) === ")"; }
        r.exports = { getAncestorCounter: s, getAncestorNode: a, getPropOfDeclNode: n, maybeToLowerCase: p, insideValueFunctionNode: d, insideICSSRuleNode: y, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: c, isKeyframeAtRuleKeywords: l, isWideKeywords: i, isLastNode: E, isSCSSControlDirectiveNode: o, isDetachedRulesetDeclarationNode: _, isRelationalOperatorNode: C, isEqualityOperatorNode: m, isMultiplicationNode: x, isDivisionNode: I, isAdditionNode: P, isSubtractionNode: $, isModuloNode: D, isMathOperatorNode: T, isEachKeywordNode: N, isForKeywordNode: w, isURLFunctionNode: f, isIfElseKeywordNode: F, hasComposesNode: B, hasParensAroundNode: k, hasEmptyRawBefore: M, isDetachedRulesetCallNode: h, isTemplatePlaceholderNode: v, isTemplatePropNode: S, isPostcssSimpleVarNode: b, isKeyValuePairNode: R, isKeyValuePairInParenGroupNode: q, isKeyInValuePairNode: ee, isSCSSMapItemNode: J, isInlineValueCommentNode: L, isHashNode: Q, isLeftCurlyBraceNode: V, isRightCurlyBraceNode: j, isWordNode: Y, isColonNode: ie, isMediaAndSupportsKeywords: ce, isColorAdjusterFuncNode: W, lastLineHasInlineComment: K, isAtWordPlaceholderNode: de, isConfigurationNode: ue, isParenGroupNode: Fe };
    } }), Sd = te({ "src/utils/line-column-to-index.js": function (e, r) {
        "use strict";
        ne(), r.exports = function (t, s) {
            var a = 0;
            for (var n = 0; n < t.line - 1; ++n)
                a = s.indexOf("\n", a) + 1;
            return a + t.column;
        };
    } }), xd = te({ "src/language-css/loc.js": function (e, r) {
        "use strict";
        ne();
        var t = wr().skipEverythingButNewLine, s = lt(), a = Sd();
        function n(c, f) { return typeof c.sourceIndex == "number" ? c.sourceIndex : c.source ? a(c.source.start, f) - 1 : null; }
        function u(c, f) { if (c.type === "css-comment" && c.inline)
            return t(f, c.source.startOffset); var E = c.nodes && s(c.nodes); return E && c.source && !c.source.end && (c = E), c.source && c.source.end ? a(c.source.end, f) : null; }
        function i(c, f) { c.source && (c.source.startOffset = n(c, f), c.source.endOffset = u(c, f)); for (var E in c) {
            var _ = c[E];
            E === "source" || !_ || typeof _ != "object" || (_.type === "value-root" || _.type === "value-unknown" ? l(_, p(c), _.text || _.value) : i(_, f));
        } }
        function l(c, f, E) { c.source && (c.source.startOffset = n(c, E) + f, c.source.endOffset = u(c, E) + f); for (var _ in c) {
            var w = c[_];
            _ === "source" || !w || typeof w != "object" || l(w, f, E);
        } }
        function p(c) { var f = c.source.startOffset; return typeof c.prop == "string" && (f += c.prop.length), c.type === "css-atrule" && typeof c.name == "string" && (f += 1 + c.name.length + c.raws.afterName.match(/^\s*:?\s*/)[0].length), c.type !== "css-atrule" && c.raws && typeof c.raws.between == "string" && (f += c.raws.between.length), f; }
        function d(c) {
            var e_57, _b;
            var f = "initial", E = "initial", _, w = !1, F = [];
            for (var N = 0; N < c.length; N++) {
                var x = c[N];
                switch (f) {
                    case "initial":
                        if (x === "'") {
                            f = "single-quotes";
                            continue;
                        }
                        if (x === '"') {
                            f = "double-quotes";
                            continue;
                        }
                        if ((x === "u" || x === "U") && c.slice(N, N + 4).toLowerCase() === "url(") {
                            f = "url", N += 3;
                            continue;
                        }
                        if (x === "*" && c[N - 1] === "/") {
                            f = "comment-block";
                            continue;
                        }
                        if (x === "/" && c[N - 1] === "/") {
                            f = "comment-inline", _ = N - 1;
                            continue;
                        }
                        continue;
                    case "single-quotes":
                        if (x === "'" && c[N - 1] !== "\\" && (f = E, E = "initial"), x === "\n" || x === "\r")
                            return c;
                        continue;
                    case "double-quotes":
                        if (x === '"' && c[N - 1] !== "\\" && (f = E, E = "initial"), x === "\n" || x === "\r")
                            return c;
                        continue;
                    case "url":
                        if (x === ")" && (f = "initial"), x === "\n" || x === "\r")
                            return c;
                        if (x === "'") {
                            f = "single-quotes", E = "url";
                            continue;
                        }
                        if (x === '"') {
                            f = "double-quotes", E = "url";
                            continue;
                        }
                        continue;
                    case "comment-block":
                        x === "/" && c[N - 1] === "*" && (f = "initial");
                        continue;
                    case "comment-inline":
                        (x === '"' || x === "'" || x === "*") && (w = !0), (x === "\n" || x === "\r") && (w && F.push([_, N]), f = "initial", w = !1);
                        continue;
                }
            }
            try {
                for (var F_1 = __values(F), F_1_1 = F_1.next(); !F_1_1.done; F_1_1 = F_1.next()) {
                    var _h = __read(F_1_1.value, 2), N = _h[0], x = _h[1];
                    c = c.slice(0, N) + c.slice(N, x).replace(/["'*]/g, " ") + c.slice(x);
                }
            }
            catch (e_57_1) { e_57 = { error: e_57_1 }; }
            finally {
                try {
                    if (F_1_1 && !F_1_1.done && (_b = F_1.return)) _b.call(F_1);
                }
                finally { if (e_57) throw e_57.error; }
            }
            return c;
        }
        function y(c) { return c.source.startOffset; }
        function g(c) { return c.source.endOffset; }
        r.exports = { locStart: y, locEnd: g, calculateLoc: i, replaceQuotesInInlineComments: d };
    } }), bd = te({ "src/language-css/utils/is-less-parser.js": function (e, r) {
        "use strict";
        ne();
        function t(s) { return s.parser === "css" || s.parser === "less"; }
        r.exports = t;
    } }), Td = te({ "src/language-css/utils/is-scss.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a) { return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(a); }
        r.exports = t;
    } }), Bd = te({ "src/language-css/utils/css-units.evaluate.js": function (e, r) { r.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" }; } }), Nd = te({ "src/language-css/utils/print-unit.js": function (e, r) {
        "use strict";
        ne();
        var t = Bd();
        function s(a) { var n = a.toLowerCase(); return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : a; }
        r.exports = s;
    } }), wd = te({ "src/language-css/printer-postcss.js": function (e, r) {
        "use strict";
        ne();
        var t = lt(), _b = Ue(), s = _b.printNumber, a = _b.printString, n = _b.hasNewline, u = _b.isFrontMatterNode, i = _b.isNextLineEmpty, l = _b.isNonEmptyArray, _h = qe(), _j = _h.builders, p = _j.join, d = _j.line, y = _j.hardline, g = _j.softline, c = _j.group, f = _j.fill, E = _j.indent, _ = _j.dedent, w = _j.ifBreak, F = _j.breakParent, _k = _h.utils, N = _k.removeLines, x = _k.getDocParts, I = Cd(), P = Ed(), $ = Fd().insertPragma, _q = Ad(), D = _q.getAncestorNode, T = _q.getPropOfDeclNode, m = _q.maybeToLowerCase, C = _q.insideValueFunctionNode, o = _q.insideICSSRuleNode, h = _q.insideAtRuleNode, v = _q.insideURLFunctionInImportAtRuleNode, S = _q.isKeyframeAtRuleKeywords, b = _q.isWideKeywords, B = _q.isLastNode, k = _q.isSCSSControlDirectiveNode, M = _q.isDetachedRulesetDeclarationNode, R = _q.isRelationalOperatorNode, q = _q.isEqualityOperatorNode, J = _q.isMultiplicationNode, L = _q.isDivisionNode, Q = _q.isAdditionNode, V = _q.isSubtractionNode, j = _q.isMathOperatorNode, Y = _q.isEachKeywordNode, ie = _q.isForKeywordNode, ee = _q.isURLFunctionNode, ce = _q.isIfElseKeywordNode, W = _q.hasComposesNode, K = _q.hasParensAroundNode, de = _q.hasEmptyRawBefore, ue = _q.isKeyValuePairNode, Fe = _q.isKeyInValuePairNode, z = _q.isDetachedRulesetCallNode, U = _q.isTemplatePlaceholderNode, Z = _q.isTemplatePropNode, se = _q.isPostcssSimpleVarNode, fe = _q.isSCSSMapItemNode, ge = _q.isInlineValueCommentNode, he = _q.isHashNode, we = _q.isLeftCurlyBraceNode, ke = _q.isRightCurlyBraceNode, Re = _q.isWordNode, Ne = _q.isColonNode, Pe = _q.isMediaAndSupportsKeywords, oe = _q.isColorAdjusterFuncNode, H = _q.lastLineHasInlineComment, pe = _q.isAtWordPlaceholderNode, X = _q.isConfigurationNode, le = _q.isParenGroupNode, _v = xd(), Ae = _v.locStart, Ee = _v.locEnd, De = bd(), A = Td(), G = Nd();
        function re(be) { return be.trailingComma === "es5" || be.trailingComma === "all"; }
        function ye(be, je, Me) { var ae = be.getValue(); if (!ae)
            return ""; if (typeof ae == "string")
            return ae; switch (ae.type) {
            case "front-matter": return [ae.raw, y];
            case "css-root": {
                var Ve = Ce(be, je, Me), We = ae.raws.after.trim();
                return We.startsWith(";") && (We = We.slice(1).trim()), [Ve, We ? " ".concat(We) : "", x(Ve).length > 0 ? y : ""];
            }
            case "css-comment": {
                var Ve = ae.inline || ae.raws.inline, We = je.originalText.slice(Ae(ae), Ee(ae));
                return Ve ? We.trimEnd() : We;
            }
            case "css-rule": return [Me("selector"), ae.important ? " !important" : "", ae.nodes ? [ae.selector && ae.selector.type === "selector-unknown" && H(ae.selector.value) ? d : " ", "{", ae.nodes.length > 0 ? E([y, Ce(be, je, Me)]) : "", y, "}", M(ae) ? ";" : ""] : ";"];
            case "css-decl": {
                var Ve = be.getParentNode(), We = ae.raws.between, Xe = We.trim(), st = Xe === ":", O = W(ae) ? N(Me("value")) : Me("value");
                return !st && H(Xe) && (O = E([y, _(O)])), [ae.raws.before.replace(/[\s;]/g, ""), Ve.type === "css-atrule" && Ve.variable || o(be) ? ae.prop : m(ae.prop), Xe.startsWith("//") ? " " : "", Xe, ae.extend ? "" : " ", De(je) && ae.extend && ae.selector ? ["extend(", Me("selector"), ")"] : "", O, ae.raws.important ? ae.raws.important.replace(/\s*!\s*important/i, " !important") : ae.important ? " !important" : "", ae.raws.scssDefault ? ae.raws.scssDefault.replace(/\s*!default/i, " !default") : ae.scssDefault ? " !default" : "", ae.raws.scssGlobal ? ae.raws.scssGlobal.replace(/\s*!global/i, " !global") : ae.scssGlobal ? " !global" : "", ae.nodes ? [" {", E([g, Ce(be, je, Me)]), g, "}"] : Z(ae) && !Ve.raws.semicolon && je.originalText[Ee(ae) - 1] !== ";" ? "" : je.__isHTMLStyleAttribute && B(be, ae) ? w(";") : ";"];
            }
            case "css-atrule": {
                var Ve = be.getParentNode(), We = U(ae) && !Ve.raws.semicolon && je.originalText[Ee(ae) - 1] !== ";";
                if (De(je)) {
                    if (ae.mixin)
                        return [Me("selector"), ae.important ? " !important" : "", We ? "" : ";"];
                    if (ae.function)
                        return [ae.name, Me("params"), We ? "" : ";"];
                    if (ae.variable)
                        return ["@", ae.name, ": ", ae.value ? Me("value") : "", ae.raws.between.trim() ? ae.raws.between.trim() + " " : "", ae.nodes ? ["{", E([ae.nodes.length > 0 ? g : "", Ce(be, je, Me)]), g, "}"] : "", We ? "" : ";"];
                }
                return ["@", z(ae) || ae.name.endsWith(":") ? ae.name : m(ae.name), ae.params ? [z(ae) ? "" : U(ae) ? ae.raws.afterName === "" ? "" : ae.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ae.raws.afterName) ? [y, y] : /^\s*\n/.test(ae.raws.afterName) ? y : " " : " ", Me("params")] : "", ae.selector ? E([" ", Me("selector")]) : "", ae.value ? c([" ", Me("value"), k(ae) ? K(ae) ? " " : d : ""]) : ae.name === "else" ? " " : "", ae.nodes ? [k(ae) ? "" : ae.selector && !ae.selector.nodes && typeof ae.selector.value == "string" && H(ae.selector.value) || !ae.selector && typeof ae.params == "string" && H(ae.params) ? d : " ", "{", E([ae.nodes.length > 0 ? g : "", Ce(be, je, Me)]), g, "}"] : We ? "" : ";"];
            }
            case "media-query-list": {
                var Ve_1 = [];
                return be.each(function (We) { var Xe = We.getValue(); Xe.type === "media-query" && Xe.value === "" || Ve_1.push(Me()); }, "nodes"), c(E(p(d, Ve_1)));
            }
            case "media-query": return [p(" ", be.map(Me, "nodes")), B(be, ae) ? "" : ","];
            case "media-type": return Oe(Se(ae.value, je));
            case "media-feature-expression": return ae.nodes ? __spreadArray(__spreadArray(["("], __read(be.map(Me, "nodes")), false), [")"], false) : ae.value;
            case "media-feature": return m(Se(ae.value.replace(/ +/g, " "), je));
            case "media-colon": return [ae.value, " "];
            case "media-value": return Oe(Se(ae.value, je));
            case "media-keyword": return Se(ae.value, je);
            case "media-url": return Se(ae.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), je);
            case "media-unknown": return ae.value;
            case "selector-root": return c([h(be, "custom-selector") ? [D(be, "css-atrule").customSelector, d] : "", p([",", h(be, ["extend", "custom-selector", "nest"]) ? d : y], be.map(Me, "nodes"))]);
            case "selector-selector": return c(E(be.map(Me, "nodes")));
            case "selector-comment": return ae.value;
            case "selector-string": return Se(ae.value, je);
            case "selector-tag": {
                var Ve = be.getParentNode(), We = Ve && Ve.nodes.indexOf(ae), Xe = We && Ve.nodes[We - 1];
                return [ae.namespace ? [ae.namespace === !0 ? "" : ae.namespace.trim(), "|"] : "", Xe.type === "selector-nesting" ? ae.value : Oe(S(be, ae.value) ? ae.value.toLowerCase() : ae.value)];
            }
            case "selector-id": return ["#", ae.value];
            case "selector-class": return [".", Oe(Se(ae.value, je))];
            case "selector-attribute": {
                var nt;
                return ["[", ae.namespace ? [ae.namespace === !0 ? "" : ae.namespace.trim(), "|"] : "", ae.attribute.trim(), (nt = ae.operator) !== null && nt !== void 0 ? nt : "", ae.value ? Ie(Se(ae.value.trim(), je), je) : "", ae.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
                if (ae.value === "+" || ae.value === ">" || ae.value === "~" || ae.value === ">>>") {
                    var Xe = be.getParentNode();
                    return [Xe.type === "selector-selector" && Xe.nodes[0] === ae ? "" : d, ae.value, B(be, ae) ? "" : " "];
                }
                var Ve = ae.value.trim().startsWith("(") ? d : "", We = Oe(Se(ae.value.trim(), je)) || d;
                return [Ve, We];
            }
            case "selector-universal": return [ae.namespace ? [ae.namespace === !0 ? "" : ae.namespace.trim(), "|"] : "", ae.value];
            case "selector-pseudo": return [m(ae.value), l(ae.nodes) ? c(["(", E([g, p([",", d], be.map(Me, "nodes"))]), g, ")"]) : ""];
            case "selector-nesting": return ae.value;
            case "selector-unknown": {
                var Ve = D(be, "css-rule");
                if (Ve && Ve.isSCSSNesterProperty)
                    return Oe(Se(m(ae.value), je));
                var We = be.getParentNode();
                if (We.raws && We.raws.selector) {
                    var st = Ae(We), O = st + We.raws.selector.length;
                    return je.originalText.slice(st, O).trim();
                }
                var Xe = be.getParentNode(1);
                if (We.type === "value-paren_group" && Xe && Xe.type === "value-func" && Xe.value === "selector") {
                    var st = Ee(We.open) + 1, O = Ae(We.close), me = je.originalText.slice(st, O).trim();
                    return H(me) ? [F, me] : me;
                }
                return ae.value;
            }
            case "value-value":
            case "value-root": return Me("group");
            case "value-comment": return je.originalText.slice(Ae(ae), Ee(ae));
            case "value-comma_group": {
                var Ve = be.getParentNode(), We = be.getParentNode(1), Xe = T(be), st = Xe && Ve.type === "value-value" && (Xe === "grid" || Xe.startsWith("grid-template")), O = D(be, "css-atrule"), me = O && k(O), _e = ae.groups.some(function (at) { return ge(at); }), He = be.map(Me, "groups"), Ge = [], it_1 = C(be, "url"), Qe = !1, rt = !1;
                for (var at = 0; at < ae.groups.length; ++at) {
                    var tt;
                    Ge.push(He[at]);
                    var Ze = ae.groups[at - 1], Le = ae.groups[at], $e = ae.groups[at + 1], nr = ae.groups[at + 2];
                    if (it_1) {
                        ($e && Q($e) || Q(Le)) && Ge.push(" ");
                        continue;
                    }
                    if (h(be, "forward") && Le.type === "value-word" && Le.value && Ze !== void 0 && Ze.type === "value-word" && Ze.value === "as" && $e.type === "value-operator" && $e.value === "*" || !$e || Le.type === "value-word" && Le.value.endsWith("-") && pe($e))
                        continue;
                    if (Le.type === "value-string" && Le.quoted) {
                        var Mr = Le.value.lastIndexOf("#{"), Rr = Le.value.lastIndexOf("}");
                        Mr !== -1 && Rr !== -1 ? Qe = Mr > Rr : Mr !== -1 ? Qe = !0 : Rr !== -1 && (Qe = !1);
                    }
                    if (Qe || Ne(Le) || Ne($e) || Le.type === "value-atword" && (Le.value === "" || Le.value.endsWith("[")) || $e.type === "value-word" && $e.value.startsWith("]") || Le.value === "~" || Le.value && Le.value.includes("\\") && $e && $e.type !== "value-comment" || Ze && Ze.value && Ze.value.indexOf("\\") === Ze.value.length - 1 && Le.type === "value-operator" && Le.value === "/" || Le.value === "\\" || se(Le, $e) || he(Le) || we(Le) || ke($e) || we($e) && de($e) || ke(Le) && de($e) || Le.value === "--" && he($e))
                        continue;
                    var qr = j(Le), su = j($e);
                    if ((qr && he($e) || su && ke(Le)) && de($e) || !Ze && L(Le) || C(be, "calc") && (Q(Le) || Q($e) || V(Le) || V($e)) && de($e))
                        continue;
                    var No = (Q(Le) || V(Le)) && at === 0 && ($e.type === "value-number" || $e.isHex) && We && oe(We) && !de($e), iu = nr && nr.type === "value-func" || nr && Re(nr) || Le.type === "value-func" || Re(Le), au = $e.type === "value-func" || Re($e) || Ze && Ze.type === "value-func" || Ze && Re(Ze);
                    if (!(!(J($e) || J(Le)) && !C(be, "calc") && !No && (L($e) && !iu || L(Le) && !au || Q($e) && !iu || Q(Le) && !au || V($e) || V(Le)) && (de($e) || qr && (!Ze || Ze && j(Ze)))) && !((je.parser === "scss" || je.parser === "less") && qr && Le.value === "-" && le($e) && Ee(Le) === Ae($e.open) && $e.open.value === "(")) {
                        if (ge(Le)) {
                            if (Ve.type === "value-paren_group") {
                                Ge.push(_(y));
                                continue;
                            }
                            Ge.push(y);
                            continue;
                        }
                        if (me && (q($e) || R($e) || ce($e) || Y(Le) || ie(Le))) {
                            Ge.push(" ");
                            continue;
                        }
                        if (O && O.name.toLowerCase() === "namespace") {
                            Ge.push(" ");
                            continue;
                        }
                        if (st) {
                            Le.source && $e.source && Le.source.start.line !== $e.source.start.line ? (Ge.push(y), rt = !0) : Ge.push(" ");
                            continue;
                        }
                        if (su) {
                            Ge.push(" ");
                            continue;
                        }
                        if (!($e && $e.value === "...") && !(pe(Le) && pe($e) && Ee(Le) === Ae($e))) {
                            if (pe(Le) && le($e) && Ee(Le) === Ae($e.open)) {
                                Ge.push(g);
                                continue;
                            }
                            if (Le.value === "with" && le($e)) {
                                Ge.push(" ");
                                continue;
                            }
                            (tt = Le.value) !== null && tt !== void 0 && tt.endsWith("#") && $e.value === "{" && le($e.group) || Ge.push(d);
                        }
                    }
                }
                return _e && Ge.push(F), rt && Ge.unshift(y), me ? c(E(Ge)) : v(be) ? c(f(Ge)) : c(E(f(Ge)));
            }
            case "value-paren_group": {
                var Ve = be.getParentNode();
                if (Ve && ee(Ve) && (ae.groups.length === 1 || ae.groups.length > 0 && ae.groups[0].type === "value-comma_group" && ae.groups[0].groups.length > 0 && ae.groups[0].groups[0].type === "value-word" && ae.groups[0].groups[0].value.startsWith("data:")))
                    return [ae.open ? Me("open") : "", p(",", be.map(Me, "groups")), ae.close ? Me("close") : ""];
                if (!ae.open) {
                    var it_2 = be.map(Me, "groups"), Qe = [];
                    for (var rt = 0; rt < it_2.length; rt++)
                        rt !== 0 && Qe.push([",", d]), Qe.push(it_2[rt]);
                    return c(E(f(Qe)));
                }
                var We = fe(be), Xe = t(ae.groups), st = Xe && Xe.type === "value-comment", O = Fe(ae, Ve), me = X(ae, Ve), _e = me || We && !O, He = me || O, Ge = c([ae.open ? Me("open") : "", E([g, p([d], be.map(function (it, Qe) { var rt = it.getValue(), at = Qe === ae.groups.length - 1, Ze = [Me(), at ? "" : ","]; if (ue(rt) && rt.type === "value-comma_group" && rt.groups && rt.groups[0].type !== "value-paren_group" && rt.groups[2] && rt.groups[2].type === "value-paren_group") {
                            var Le = x(Ze[0].contents.contents);
                            Le[1] = c(Le[1]), Ze = [c(_(Ze))];
                        } if (!at && rt.type === "value-comma_group" && l(rt.groups)) {
                            var Le = t(rt.groups);
                            !Le.source && Le.close && (Le = Le.close), Le.source && i(je.originalText, Le, Ee) && Ze.push(y);
                        } return Ze; }, "groups"))]), w(!st && A(je.parser, je.originalText) && We && re(je) ? "," : ""), g, ae.close ? Me("close") : ""], { shouldBreak: _e });
                return He ? _(Ge) : Ge;
            }
            case "value-func": return [ae.value, h(be, "supports") && Pe(ae) ? " " : "", Me("group")];
            case "value-paren": return ae.value;
            case "value-number": return [Je(ae.value), G(ae.unit)];
            case "value-operator": return ae.value;
            case "value-word": return ae.isColor && ae.isHex || b(ae.value) ? ae.value.toLowerCase() : ae.value;
            case "value-colon": {
                var Ve = be.getParentNode(), We = Ve && Ve.groups.indexOf(ae), Xe = We && Ve.groups[We - 1];
                return [ae.value, Xe && typeof Xe.value == "string" && t(Xe.value) === "\\" || C(be, "url") ? "" : d];
            }
            case "value-comma": return [ae.value, " "];
            case "value-string": return a(ae.raws.quote + ae.value + ae.raws.quote, je);
            case "value-atword": return ["@", ae.value];
            case "value-unicode-range": return ae.value;
            case "value-unknown": return ae.value;
            default: throw new Error("Unknown postcss type ".concat(JSON.stringify(ae.type)));
        } }
        function Ce(be, je, Me) { var ae = []; return be.each(function (nt, tt, Ve) { var We = Ve[tt - 1]; if (We && We.type === "css-comment" && We.text.trim() === "prettier-ignore") {
            var Xe = nt.getValue();
            ae.push(je.originalText.slice(Ae(Xe), Ee(Xe)));
        }
        else
            ae.push(Me()); tt !== Ve.length - 1 && (Ve[tt + 1].type === "css-comment" && !n(je.originalText, Ae(Ve[tt + 1]), { backwards: !0 }) && !u(Ve[tt]) || Ve[tt + 1].type === "css-atrule" && Ve[tt + 1].name === "else" && Ve[tt].type !== "css-comment" ? ae.push(" ") : (ae.push(je.__isHTMLStyleAttribute ? d : y), i(je.originalText, nt.getValue(), Ee) && !u(Ve[tt]) && ae.push(y))); }, "nodes"), ae; }
        var Be = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, ve = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, ze = /[A-Za-z]+/g, xe = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, Ye = new RegExp(Be.source + "|(".concat(xe.source, ")?(").concat(ve.source, ")(").concat(ze.source, ")?"), "g");
        function Se(be, je) { return be.replace(Be, function (Me) { return a(Me, je); }); }
        function Ie(be, je) { var Me = je.singleQuote ? "'" : '"'; return be.includes('"') || be.includes("'") ? be : Me + be + Me; }
        function Oe(be) { return be.replace(Ye, function (je, Me, ae, nt, tt) { return !ae && nt ? Je(nt) + m(tt || "") : je; }); }
        function Je(be) { return s(be).replace(/\.0(?=$|e)/, ""); }
        r.exports = { print: ye, embed: P, insertPragma: $, massageAstNode: I };
    } }), _d = te({ "src/language-css/options.js": function (e, r) {
        "use strict";
        ne();
        var t = jt();
        r.exports = { singleQuote: t.singleQuote };
    } }), Pd = te({ "src/language-css/parsers.js": function () { ne(); } }), Id = te({ "node_modules/linguist-languages/data/CSS.json": function (e, r) { r.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 }; } }), kd = te({ "node_modules/linguist-languages/data/PostCSS.json": function (e, r) { r.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 }; } }), Ld = te({ "node_modules/linguist-languages/data/Less.json": function (e, r) { r.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 }; } }), Od = te({ "node_modules/linguist-languages/data/SCSS.json": function (e, r) { r.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 }; } }), jd = te({ "src/language-css/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = wd(), a = _d(), n = Pd(), u = [t(Id(), function (l) { return ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: __spreadArray(__spreadArray([], __read(l.extensions), false), [".wxss"], false) }); }), t(kd(), function () { return ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] }); }), t(Ld(), function () { return ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] }); }), t(Od(), function () { return ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }); })], i = { postcss: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
    } }), qd = te({ "src/language-handlebars/loc.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return a.loc.start.offset; }
        function s(a) { return a.loc.end.offset; }
        r.exports = { locStart: t, locEnd: s };
    } }), Md = te({ "src/language-handlebars/clean.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a) { if (s.type === "TextNode") {
            var n = s.chars.trim();
            if (!n)
                return null;
            a.chars = n.replace(/[\t\n\f\r ]+/g, " ");
        } s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete a.value; }
        t.ignoredProperties = new Set(["loc", "selfClosing"]), r.exports = t;
    } }), Rd = te({ "src/language-handlebars/html-void-elements.evaluate.js": function (e, r) { r.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]; } }), $d = te({ "src/language-handlebars/utils.js": function (e, r) {
        "use strict";
        ne();
        var t = lt(), s = Rd();
        function a(x) { var I = x.getValue(), P = x.getParentNode(0); return !!(g(x, ["ElementNode"]) && t(P.children) === I || g(x, ["Block"]) && t(P.body) === I); }
        function n(x) { return x.toUpperCase() === x; }
        function u(x) { return y(x, ["ElementNode"]) && typeof x.tag == "string" && !x.tag.startsWith(":") && (n(x.tag[0]) || x.tag.includes(".")); }
        var i = new Set(s);
        function l(x) { return i.has(x.toLowerCase()) && !n(x[0]); }
        function p(x) { return x.selfClosing === !0 || l(x.tag) || u(x) && x.children.every(function (I) { return d(I); }); }
        function d(x) { return y(x, ["TextNode"]) && !/\S/.test(x.chars); }
        function y(x, I) { return x && I.includes(x.type); }
        function g(x, I) { var P = x.getParentNode(0); return y(P, I); }
        function c(x, I) { var P = _(x); return y(P, I); }
        function f(x, I) { var P = w(x); return y(P, I); }
        function E(x, I) { var P, $, D, T; var m = x.getValue(), C = (P = x.getParentNode(0)) !== null && P !== void 0 ? P : {}, o = ($ = (D = (T = C.children) !== null && T !== void 0 ? T : C.body) !== null && D !== void 0 ? D : C.parts) !== null && $ !== void 0 ? $ : [], h = o.indexOf(m); return h !== -1 && o[h + I]; }
        function _(x) { var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1; return E(x, -I); }
        function w(x) { return E(x, 1); }
        function F(x) { return y(x, ["MustacheCommentStatement"]) && typeof x.value == "string" && x.value.trim() === "prettier-ignore"; }
        function N(x) { var I = x.getValue(), P = _(x, 2); return F(I) || F(P); }
        r.exports = { getNextNode: w, getPreviousNode: _, hasPrettierIgnore: N, isLastNodeOfSiblings: a, isNextNodeOfSomeType: f, isNodeOfSomeType: y, isParentOfSomeType: g, isPreviousNodeOfSomeType: c, isVoid: p, isWhitespaceNode: d };
    } }), Vd = te({ "src/language-handlebars/printer-glimmer.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.dedent, s = _h.fill, a = _h.group, n = _h.hardline, u = _h.ifBreak, i = _h.indent, l = _h.join, p = _h.line, d = _h.softline, _j = _b.utils, y = _j.getDocParts, g = _j.replaceTextEndOfLine, _k = Ue(), c = _k.getPreferredQuote, f = _k.isNonEmptyArray, _q = qd(), E = _q.locStart, _ = _q.locEnd, w = Md(), _v = $d(), F = _v.getNextNode, N = _v.getPreviousNode, x = _v.hasPrettierIgnore, I = _v.isLastNodeOfSiblings, P = _v.isNextNodeOfSomeType, $ = _v.isNodeOfSomeType, D = _v.isParentOfSomeType, T = _v.isPreviousNodeOfSomeType, m = _v.isVoid, C = _v.isWhitespaceNode, o = 2;
        function h(H, pe, X) { var le = H.getValue(); if (!le)
            return ""; if (x(H))
            return pe.originalText.slice(E(le), _(le)); var Ae = pe.singleQuote ? "'" : '"'; switch (le.type) {
            case "Block":
            case "Program":
            case "Template": return a(H.map(X, "body"));
            case "ElementNode": {
                var Ee = a(S(H, X)), De = pe.htmlWhitespaceSensitivity === "ignore" && P(H, ["ElementNode"]) ? d : "";
                if (m(le))
                    return [Ee, De];
                var A = ["</", le.tag, ">"];
                return le.children.length === 0 ? [Ee, i(A), De] : pe.htmlWhitespaceSensitivity === "ignore" ? [Ee, i(b(H, pe, X)), n, i(A), De] : [Ee, i(a(b(H, pe, X))), i(A), De];
            }
            case "BlockStatement": {
                var Ee = H.getParentNode(1);
                return Ee && Ee.inverse && Ee.inverse.body.length === 1 && Ee.inverse.body[0] === le && Ee.inverse.body[0].path.parts[0] === Ee.path.parts[0] ? [ie(H, X, Ee.inverse.body[0].path.parts[0]), de(H, X, pe), ue(H, X, pe)] : [j(H, X), a([de(H, X, pe), ue(H, X, pe), ee(H, X, pe)])];
            }
            case "ElementModifierStatement": return a(["{{", Re(H, X), "}}"]);
            case "MustacheStatement": return a([k(le), Re(H, X), M(le)]);
            case "SubExpression": return a(["(", ke(H, X), d, ")"]);
            case "AttrNode": {
                var Ee = le.value.type === "TextNode";
                if (Ee && le.value.chars === "" && E(le.value) === _(le.value))
                    return le.name;
                var A = Ee ? c(le.value.chars, Ae).quote : le.value.type === "ConcatStatement" ? c(le.value.parts.filter(function (re) { return re.type === "TextNode"; }).map(function (re) { return re.chars; }).join(""), Ae).quote : "", G = X("value");
                return [le.name, "=", A, le.name === "class" && A ? a(i(G)) : G, A];
            }
            case "ConcatStatement": return H.map(X, "parts");
            case "Hash": return l(p, H.map(X, "pairs"));
            case "HashPair": return [le.key, "=", X("value")];
            case "TextNode": {
                var Ee = le.chars.replace(/{{/g, "\\{{"), De = U(H);
                if (De) {
                    if (De === "class") {
                        var Ye = Ee.trim().split(/\s+/).join(" "), Se = !1, Ie = !1;
                        return D(H, ["ConcatStatement"]) && (T(H, ["MustacheStatement"]) && /^\s/.test(Ee) && (Se = !0), P(H, ["MustacheStatement"]) && /\s$/.test(Ee) && Ye !== "" && (Ie = !0)), [Se ? p : "", Ye, Ie ? p : ""];
                    }
                    return g(Ee);
                }
                var G = /^[\t\n\f\r ]*$/.test(Ee), re = !N(H), ye = !F(H);
                if (pe.htmlWhitespaceSensitivity !== "ignore") {
                    var Ye = /^[\t\n\f\r ]*/, Se = /[\t\n\f\r ]*$/, Ie = ye && D(H, ["Template"]), Oe = re && D(H, ["Template"]);
                    if (G) {
                        if (Oe || Ie)
                            return "";
                        var ae = [p], nt = Z(Ee);
                        return nt && (ae = ge(nt)), I(H) && (ae = ae.map(function (tt) { return t(tt); })), ae;
                    }
                    var _b = __read(Ee.match(Ye), 1), Je = _b[0], _h = __read(Ee.match(Se), 1), be = _h[0], je = [];
                    if (Je) {
                        je = [p];
                        var ae = Z(Je);
                        ae && (je = ge(ae)), Ee = Ee.replace(Ye, "");
                    }
                    var Me = [];
                    if (be) {
                        if (!Ie) {
                            Me = [p];
                            var ae = Z(be);
                            ae && (Me = ge(ae)), I(H) && (Me = Me.map(function (nt) { return t(nt); }));
                        }
                        Ee = Ee.replace(Se, "");
                    }
                    return __spreadArray(__spreadArray(__spreadArray([], __read(je), false), [s(Fe(Ee))], false), __read(Me), false);
                }
                var Ce = Z(Ee), Be = se(Ee), ve = fe(Ee);
                if ((re || ye) && G && D(H, ["Block", "ElementNode", "Template"]))
                    return "";
                G && Ce ? (Be = Math.min(Ce, o), ve = 0) : (P(H, ["BlockStatement", "ElementNode"]) && (ve = Math.max(ve, 1)), T(H, ["BlockStatement", "ElementNode"]) && (Be = Math.max(Be, 1)));
                var ze = "", xe = "";
                return ve === 0 && P(H, ["MustacheStatement"]) && (xe = " "), Be === 0 && T(H, ["MustacheStatement"]) && (ze = " "), re && (Be = 0, ze = ""), ye && (ve = 0, xe = ""), Ee = Ee.replace(/^[\t\n\f\r ]+/g, ze).replace(/[\t\n\f\r ]+$/, xe), __spreadArray(__spreadArray(__spreadArray([], __read(ge(Be)), false), [s(Fe(Ee))], false), __read(ge(ve)), false);
            }
            case "MustacheCommentStatement": {
                var Ee = E(le), De = _(le), A = pe.originalText.charAt(Ee + 2) === "~", G = pe.originalText.charAt(De - 3) === "~", re = le.value.includes("}}") ? "--" : "";
                return ["{{", A ? "~" : "", "!", re, le.value, re, G ? "~" : "", "}}"];
            }
            case "PathExpression": return le.original;
            case "BooleanLiteral": return String(le.value);
            case "CommentStatement": return ["<!--", le.value, "-->"];
            case "StringLiteral": {
                if (we(H)) {
                    var Ee = pe.singleQuote ? '"' : "'";
                    return he(le.value, Ee);
                }
                return he(le.value, Ae);
            }
            case "NumberLiteral": return String(le.value);
            case "UndefinedLiteral": return "undefined";
            case "NullLiteral": return "null";
            default: throw new Error("unknown glimmer type: " + JSON.stringify(le.type));
        } }
        function v(H, pe) { return E(H) - E(pe); }
        function S(H, pe) {
            var e_58, _b;
            var X = H.getValue(), le = ["attributes", "modifiers", "comments"].filter(function (Ee) { return f(X[Ee]); }), Ae = le.flatMap(function (Ee) { return X[Ee]; }).sort(v);
            try {
                for (var le_1 = __values(le), le_1_1 = le_1.next(); !le_1_1.done; le_1_1 = le_1.next()) {
                    var Ee = le_1_1.value;
                    H.each(function (De) { var A = Ae.indexOf(De.getValue()); Ae.splice(A, 1, [p, pe()]); }, Ee);
                }
            }
            catch (e_58_1) { e_58 = { error: e_58_1 }; }
            finally {
                try {
                    if (le_1_1 && !le_1_1.done && (_b = le_1.return)) _b.call(le_1);
                }
                finally { if (e_58) throw e_58.error; }
            }
            return f(X.blockParams) && Ae.push(p, oe(X)), ["<", X.tag, i(Ae), B(X)];
        }
        function b(H, pe, X) { var Ae = H.getValue().children.every(function (Ee) { return C(Ee); }); return pe.htmlWhitespaceSensitivity === "ignore" && Ae ? "" : H.map(function (Ee, De) { var A = X(); return De === 0 && pe.htmlWhitespaceSensitivity === "ignore" ? [d, A] : A; }, "children"); }
        function B(H) { return m(H) ? u([d, "/>"], [" />", d]) : u([d, ">"], ">"); }
        function k(H) { var pe = H.escaped === !1 ? "{{{" : "{{", X = H.strip && H.strip.open ? "~" : ""; return [pe, X]; }
        function M(H) { var pe = H.escaped === !1 ? "}}}" : "}}"; return [H.strip && H.strip.close ? "~" : "", pe]; }
        function R(H) { var pe = k(H), X = H.openStrip.open ? "~" : ""; return [pe, X, "#"]; }
        function q(H) { var pe = M(H); return [H.openStrip.close ? "~" : "", pe]; }
        function J(H) { var pe = k(H), X = H.closeStrip.open ? "~" : ""; return [pe, X, "/"]; }
        function L(H) { var pe = M(H); return [H.closeStrip.close ? "~" : "", pe]; }
        function Q(H) { var pe = k(H), X = H.inverseStrip.open ? "~" : ""; return [pe, X]; }
        function V(H) { var pe = M(H); return [H.inverseStrip.close ? "~" : "", pe]; }
        function j(H, pe) { var X = H.getValue(), le = [], Ae = Pe(H, pe); return Ae && le.push(a(Ae)), f(X.program.blockParams) && le.push(oe(X.program)), a([R(X), Ne(H, pe), le.length > 0 ? i([p, l(p, le)]) : "", d, q(X)]); }
        function Y(H, pe) { return [pe.htmlWhitespaceSensitivity === "ignore" ? n : "", Q(H), "else", V(H)]; }
        function ie(H, pe, X) { var le = H.getValue(), Ae = H.getParentNode(1); return a([Q(Ae), ["else", " ", X], i(__spreadArray([p, a(Pe(H, pe))], __read(f(le.program.blockParams) ? [p, oe(le.program)] : []), false)), d, V(Ae)]); }
        function ee(H, pe, X) { var le = H.getValue(); return X.htmlWhitespaceSensitivity === "ignore" ? [ce(le) ? d : n, J(le), pe("path"), L(le)] : [J(le), pe("path"), L(le)]; }
        function ce(H) { return $(H, ["BlockStatement"]) && H.program.body.every(function (pe) { return C(pe); }); }
        function W(H) { return K(H) && H.inverse.body.length === 1 && $(H.inverse.body[0], ["BlockStatement"]) && H.inverse.body[0].path.parts[0] === H.path.parts[0]; }
        function K(H) { return $(H, ["BlockStatement"]) && H.inverse; }
        function de(H, pe, X) { var le = H.getValue(); if (ce(le))
            return ""; var Ae = pe("program"); return X.htmlWhitespaceSensitivity === "ignore" ? i([n, Ae]) : i(Ae); }
        function ue(H, pe, X) { var le = H.getValue(), Ae = pe("inverse"), Ee = X.htmlWhitespaceSensitivity === "ignore" ? [n, Ae] : Ae; return W(le) ? Ee : K(le) ? [Y(le, X), i(Ee)] : ""; }
        function Fe(H) { return y(l(p, z(H))); }
        function z(H) { return H.split(/[\t\n\f\r ]+/); }
        function U(H) { for (var pe = 0; pe < 2; pe++) {
            var X = H.getParentNode(pe);
            if (X && X.type === "AttrNode")
                return X.name.toLowerCase();
        } }
        function Z(H) {
            return H = typeof H == "string" ? H : "", H.split("\n").length - 1;
        }
        function se(H) { H = typeof H == "string" ? H : ""; var pe = (H.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || ""; return Z(pe); }
        function fe(H) { H = typeof H == "string" ? H : ""; var pe = (H.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || ""; return Z(pe); }
        function ge() { var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0; return Array.from({ length: Math.min(H, o) }).fill(n); }
        function he(H, pe) { var _b = c(H, pe), X = _b.quote, le = _b.regex; return [X, H.replace(le, "\\".concat(X)), X]; }
        function we(H) { var pe = 0, X = H.getParentNode(pe); for (; X && $(X, ["SubExpression"]);)
            pe++, X = H.getParentNode(pe); return !!(X && $(H.getParentNode(pe + 1), ["ConcatStatement"]) && $(H.getParentNode(pe + 2), ["AttrNode"])); }
        function ke(H, pe) { var X = Ne(H, pe), le = Pe(H, pe); return le ? i([X, p, a(le)]) : X; }
        function Re(H, pe) { var X = Ne(H, pe), le = Pe(H, pe); return le ? [i([X, p, le]), d] : X; }
        function Ne(H, pe) { return pe("path"); }
        function Pe(H, pe) { var X = H.getValue(), le = []; if (X.params.length > 0) {
            var Ae = H.map(pe, "params");
            le.push.apply(le, __spreadArray([], __read(Ae), false));
        } if (X.hash && X.hash.pairs.length > 0) {
            var Ae = pe("hash");
            le.push(Ae);
        } return le.length === 0 ? "" : l(p, le); }
        function oe(H) { return ["as |", H.blockParams.join(" "), "|"]; }
        r.exports = { print: h, massageAstNode: w };
    } }), Wd = te({ "src/language-handlebars/parsers.js": function () { ne(); } }), Hd = te({ "node_modules/linguist-languages/data/Handlebars.json": function (e, r) { r.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 }; } }), Gd = te({ "src/language-handlebars/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = Vd(), a = Wd(), n = [t(Hd(), function () { return ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }); })], u = { glimmer: s };
        r.exports = { languages: n, printers: u, parsers: a };
    } }), Ud = te({ "src/language-graphql/pragma.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(a); }
        function s(a) {
            return "# @format\n\n" + a;
        }
        r.exports = { hasPragma: t, insertPragma: s };
    } }), Jd = te({ "src/language-graphql/loc.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return typeof a.start == "number" ? a.start : a.loc && a.loc.start; }
        function s(a) { return typeof a.end == "number" ? a.end : a.loc && a.loc.end; }
        r.exports = { locStart: t, locEnd: s };
    } }), zd = te({ "src/language-graphql/printer-graphql.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.join, s = _b.hardline, a = _b.line, n = _b.softline, u = _b.group, i = _b.indent, l = _b.ifBreak, _h = Ue(), p = _h.isNextLineEmpty, d = _h.isNonEmptyArray, y = Ud().insertPragma, _j = Jd(), g = _j.locStart, c = _j.locEnd;
        function f(P, $, D) {
            var T = P.getValue();
            if (!T)
                return "";
            if (typeof T == "string")
                return T;
            switch (T.kind) {
                case "Document": {
                    var m_1 = [];
                    return P.each(function (C, o, h) { m_1.push(D()), o !== h.length - 1 && (m_1.push(s), p($.originalText, C.getValue(), c) && m_1.push(s)); }, "definitions"), __spreadArray(__spreadArray([], __read(m_1), false), [s], false);
                }
                case "OperationDefinition": {
                    var m = $.originalText[g(T)] !== "{", C = Boolean(T.name);
                    return [m ? T.operation : "", m && C ? [" ", D("name")] : "", m && !C && d(T.variableDefinitions) ? " " : "", d(T.variableDefinitions) ? u(["(", i([n, t([l("", ", "), n], P.map(D, "variableDefinitions"))]), n, ")"]) : "", E(P, D, T), T.selectionSet ? !m && !C ? "" : " " : "", D("selectionSet")];
                }
                case "FragmentDefinition": return ["fragment ", D("name"), d(T.variableDefinitions) ? u(["(", i([n, t([l("", ", "), n], P.map(D, "variableDefinitions"))]), n, ")"]) : "", " on ", D("typeCondition"), E(P, D, T), " ", D("selectionSet")];
                case "SelectionSet": return ["{", i([s, t(s, _(P, $, D, "selections"))]), s, "}"];
                case "Field": return u([T.alias ? [D("alias"), ": "] : "", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", E(P, D, T), T.selectionSet ? " " : "", D("selectionSet")]);
                case "Name": return T.value;
                case "StringValue": {
                    if (T.block) {
                        var m = T.value.replace(/"""/g, "\\$&").split("\n");
                        return m.length === 1 && (m[0] = m[0].trim()), m.every(function (C) { return C === ""; }) && (m.length = 0), t(s, __spreadArray(__spreadArray(['"""'], __read(m), false), ['"""'], false));
                    }
                    return ['"', T.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
                }
                case "IntValue":
                case "FloatValue":
                case "EnumValue": return T.value;
                case "BooleanValue": return T.value ? "true" : "false";
                case "NullValue": return "null";
                case "Variable": return ["$", D("name")];
                case "ListValue": return u(["[", i([n, t([l("", ", "), n], P.map(D, "values"))]), n, "]"]);
                case "ObjectValue": return u(["{", $.bracketSpacing && T.fields.length > 0 ? " " : "", i([n, t([l("", ", "), n], P.map(D, "fields"))]), n, l("", $.bracketSpacing && T.fields.length > 0 ? " " : ""), "}"]);
                case "ObjectField":
                case "Argument": return [D("name"), ": ", D("value")];
                case "Directive": return ["@", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : ""];
                case "NamedType": return D("name");
                case "VariableDefinition": return [D("variable"), ": ", D("type"), T.defaultValue ? [" = ", D("defaultValue")] : "", E(P, D, T)];
                case "ObjectTypeExtension":
                case "ObjectTypeDefinition": return [D("description"), T.description ? s : "", T.kind === "ObjectTypeExtension" ? "extend " : "", "type ", D("name"), T.interfaces.length > 0 ? __spreadArray([" implements "], __read(N(P, $, D)), false) : "", E(P, D, T), T.fields.length > 0 ? [" {", i([s, t(s, _(P, $, D, "fields"))]), s, "}"] : ""];
                case "FieldDefinition": return [D("description"), T.description ? s : "", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", ": ", D("type"), E(P, D, T)];
                case "DirectiveDefinition": return [D("description"), T.description ? s : "", "directive ", "@", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", T.repeatable ? " repeatable" : "", " on ", t(" | ", P.map(D, "locations"))];
                case "EnumTypeExtension":
                case "EnumTypeDefinition": return [D("description"), T.description ? s : "", T.kind === "EnumTypeExtension" ? "extend " : "", "enum ", D("name"), E(P, D, T), T.values.length > 0 ? [" {", i([s, t(s, _(P, $, D, "values"))]), s, "}"] : ""];
                case "EnumValueDefinition": return [D("description"), T.description ? s : "", D("name"), E(P, D, T)];
                case "InputValueDefinition": return [D("description"), T.description ? T.description.block ? s : a : "", D("name"), ": ", D("type"), T.defaultValue ? [" = ", D("defaultValue")] : "", E(P, D, T)];
                case "InputObjectTypeExtension":
                case "InputObjectTypeDefinition": return [D("description"), T.description ? s : "", T.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", D("name"), E(P, D, T), T.fields.length > 0 ? [" {", i([s, t(s, _(P, $, D, "fields"))]), s, "}"] : ""];
                case "SchemaExtension": return __spreadArray(["extend schema", E(P, D, T)], __read(T.operationTypes.length > 0 ? [" {", i([s, t(s, _(P, $, D, "operationTypes"))]), s, "}"] : []), false);
                case "SchemaDefinition": return [D("description"), T.description ? s : "", "schema", E(P, D, T), " {", T.operationTypes.length > 0 ? i([s, t(s, _(P, $, D, "operationTypes"))]) : "", s, "}"];
                case "OperationTypeDefinition": return [D("operation"), ": ", D("type")];
                case "InterfaceTypeExtension":
                case "InterfaceTypeDefinition": return [D("description"), T.description ? s : "", T.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", D("name"), T.interfaces.length > 0 ? __spreadArray([" implements "], __read(N(P, $, D)), false) : "", E(P, D, T), T.fields.length > 0 ? [" {", i([s, t(s, _(P, $, D, "fields"))]), s, "}"] : ""];
                case "FragmentSpread": return ["...", D("name"), E(P, D, T)];
                case "InlineFragment": return ["...", T.typeCondition ? [" on ", D("typeCondition")] : "", E(P, D, T), " ", D("selectionSet")];
                case "UnionTypeExtension":
                case "UnionTypeDefinition": return u([D("description"), T.description ? s : "", u([T.kind === "UnionTypeExtension" ? "extend " : "", "union ", D("name"), E(P, D, T), T.types.length > 0 ? [" =", l("", " "), i([l([a, "  "]), t([a, "| "], P.map(D, "types"))])] : ""])]);
                case "ScalarTypeExtension":
                case "ScalarTypeDefinition": return [D("description"), T.description ? s : "", T.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", D("name"), E(P, D, T)];
                case "NonNullType": return [D("type"), "!"];
                case "ListType": return ["[", D("type"), "]"];
                default: throw new Error("unknown graphql type: " + JSON.stringify(T.kind));
            }
        }
        function E(P, $, D) { if (D.directives.length === 0)
            return ""; var T = t(a, P.map($, "directives")); return D.kind === "FragmentDefinition" || D.kind === "OperationDefinition" ? u([a, T]) : [" ", u(i([n, T]))]; }
        function _(P, $, D, T) { return P.map(function (m, C, o) { var h = D(); return C < o.length - 1 && p($.originalText, m.getValue(), c) ? [h, s] : h; }, T); }
        function w(P) { return P.kind && P.kind !== "Comment"; }
        function F(P) { var $ = P.getValue(); if ($.kind === "Comment")
            return "#" + $.value.trimEnd(); throw new Error("Not a comment: " + JSON.stringify($)); }
        function N(P, $, D) { var T = P.getNode(), m = [], C = T.interfaces, o = P.map(function (h) { return D(h); }, "interfaces"); for (var h = 0; h < C.length; h++) {
            var v = C[h];
            m.push(o[h]);
            var S = C[h + 1];
            if (S) {
                var b = $.originalText.slice(v.loc.end, S.loc.start), B = b.includes("#"), k = b.replace(/#.*/g, "").trim();
                m.push(k === "," ? "," : " &", B ? a : " ");
            }
        } return m; }
        function x(P, $) {
            P.kind === "StringValue" && P.block && !P.value.includes("\n") && ($.value = $.value.trim());
        }
        x.ignoredProperties = new Set(["loc", "comments"]);
        function I(P) { var $; var D = P.getValue(); return D == null || ($ = D.comments) === null || $ === void 0 ? void 0 : $.some(function (T) { return T.value.trim() === "prettier-ignore"; }); }
        r.exports = { print: f, massageAstNode: x, hasPrettierIgnore: I, insertPragma: y, printComment: F, canAttachComment: w };
    } }), Xd = te({ "src/language-graphql/options.js": function (e, r) {
        "use strict";
        ne();
        var t = jt();
        r.exports = { bracketSpacing: t.bracketSpacing };
    } }), Kd = te({ "src/language-graphql/parsers.js": function () { ne(); } }), Yd = te({ "node_modules/linguist-languages/data/GraphQL.json": function (e, r) { r.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 }; } }), Qd = te({ "src/language-graphql/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = zd(), a = Xd(), n = Kd(), u = [t(Yd(), function () { return ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }); })], i = { graphql: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
    } }), So = te({ "node_modules/collapse-white-space/index.js": function (e, r) {
        "use strict";
        ne(), r.exports = t;
        function t(s) { return String(s).replace(/\s+/g, " "); }
    } }), xo = te({ "src/language-markdown/loc.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return a.position.start.offset; }
        function s(a) { return a.position.end.offset; }
        r.exports = { locStart: t, locEnd: s };
    } }), Zd = te({ "src/language-markdown/constants.evaluate.js": function (e, r) { r.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" }; } }), nu = te({ "src/language-markdown/utils.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().getLast, _b = xo(), s = _b.locStart, a = _b.locEnd, _h = Zd(), n = _h.cjkPattern, u = _h.kPattern, i = _h.punctuationPattern, l = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], p = __spreadArray(__spreadArray([], __read(l), false), ["tableCell", "paragraph", "heading"], false), d = new RegExp(u), y = new RegExp(i);
        function g(F, N) {
            var e_59, _b, e_60, _h;
            var x = "non-cjk", I = "cj-letter", P = "k-letter", $ = "cjk-punctuation", D = [], T = (N.proseWrap === "preserve" ? F : F.replace(new RegExp("(".concat(n, ")\n(").concat(n, ")"), "g"), "$1$2")).split(/([\t\n ]+)/);
            try {
                for (var _j = __values(T.entries()), _k = _j.next(); !_k.done; _k = _j.next()) {
                    var _q = __read(_k.value, 2), C = _q[0], o = _q[1];
                    if (C % 2 === 1) {
                        D.push({ type: "whitespace", value: /\n/.test(o) ? "\n" : " " });
                        continue;
                    }
                    if ((C === 0 || C === T.length - 1) && o === "")
                        continue;
                    var h = o.split(new RegExp("(".concat(n, ")")));
                    try {
                        for (var _v = (e_60 = void 0, __values(h.entries())), _w = _v.next(); !_w.done; _w = _v.next()) {
                            var _x = __read(_w.value, 2), v = _x[0], S = _x[1];
                            if (!((v === 0 || v === h.length - 1) && S === "")) {
                                if (v % 2 === 0) {
                                    S !== "" && m({ type: "word", value: S, kind: x, hasLeadingPunctuation: y.test(S[0]), hasTrailingPunctuation: y.test(t(S)) });
                                    continue;
                                }
                                m(y.test(S) ? { type: "word", value: S, kind: $, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: S, kind: d.test(S) ? P : I, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 });
                            }
                        }
                    }
                    catch (e_60_1) { e_60 = { error: e_60_1 }; }
                    finally {
                        try {
                            if (_w && !_w.done && (_h = _v.return)) _h.call(_v);
                        }
                        finally { if (e_60) throw e_60.error; }
                    }
                }
            }
            catch (e_59_1) { e_59 = { error: e_59_1 }; }
            finally {
                try {
                    if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                }
                finally { if (e_59) throw e_59.error; }
            }
            return D;
            function m(C) { var o = t(D); o && o.type === "word" && (o.kind === x && C.kind === I && !o.hasTrailingPunctuation || o.kind === I && C.kind === x && !C.hasLeadingPunctuation ? D.push({ type: "whitespace", value: " " }) : !h(x, $) && ![o.value, C.value].some(function (v) { return /\u3000/.test(v); }) && D.push({ type: "whitespace", value: "" })), D.push(C); function h(v, S) { return o.kind === v && C.kind === S || o.kind === S && C.kind === v; } }
        }
        function c(F, N) { var _b = __read(N.slice(F.position.start.offset, F.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/), 4), x = _b[1], I = _b[2], P = _b[3]; return { numberText: x, marker: I, leadingSpaces: P }; }
        function f(F, N) { if (!F.ordered || F.children.length < 2)
            return !1; var x = Number(c(F.children[0], N.originalText).numberText), I = Number(c(F.children[1], N.originalText).numberText); if (x === 0 && F.children.length > 2) {
            var P = Number(c(F.children[2], N.originalText).numberText);
            return I === 1 && P === 1;
        } return I === 1; }
        function E(F, N) {
            var x = F.value;
            return F.position.end.offset === N.length && x.endsWith("\n") && N.endsWith("\n") ? x.slice(0, -1) : x;
        }
        function _(F, N) { return function x(I, P, $) { var D = Object.assign({}, N(I, P, $)); return D.children && (D.children = D.children.map(function (T, m) { return x(T, m, __spreadArray([D], __read($), false)); })), D; }(F, null, []); }
        function w(F) { if ((F == null ? void 0 : F.type) !== "link" || F.children.length !== 1)
            return !1; var _b = __read(F.children, 1), N = _b[0]; return s(F) === s(N) && a(F) === a(N); }
        r.exports = { mapAst: _, splitText: g, punctuationPattern: i, getFencedCodeBlockValue: E, getOrderedListItemInfo: c, hasGitDiffFriendlyOrderedList: f, INLINE_NODE_TYPES: l, INLINE_NODE_WRAPPER_TYPES: p, isAutolink: w };
    } }), eg = te({ "src/language-markdown/embed.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.inferParserByLanguage, s = _b.getMaxContinuousCount, _h = qe(), _j = _h.builders, a = _j.hardline, n = _j.markAsRoot, u = _h.utils.replaceEndOfLine, i = ru(), l = nu().getFencedCodeBlockValue;
        function p(d, y, g, c) { var f = d.getValue(); if (f.type === "code" && f.lang !== null) {
            var E = t(f.lang, c);
            if (E) {
                var _ = c.__inJsTemplate ? "~" : "`", w = _.repeat(Math.max(3, s(f.value, _) + 1)), F = { parser: E };
                f.lang === "tsx" && (F.filepath = "dummy.tsx");
                var N = g(l(f, c.originalText), F, { stripTrailingHardline: !0 });
                return n([w, f.lang, f.meta ? " " + f.meta : "", a, u(N), a, w]);
            }
        } switch (f.type) {
            case "front-matter": return i(f, g);
            case "importExport": return [g(f.value, { parser: "babel" }, { stripTrailingHardline: !0 }), a];
            case "jsx": return g("<$>".concat(f.value, "</$>"), { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 });
        } return null; }
        r.exports = p;
    } }), bo = te({ "src/language-markdown/pragma.js": function (e, r) {
        "use strict";
        ne();
        var t = Ao(), s = ["format", "prettier"];
        function a(n) {
            var u = "@(".concat(s.join("|"), ")"), i = new RegExp(["<!--\\s*".concat(u, "\\s*-->"), "{\\s*\\/\\*\\s*".concat(u, "\\s*\\*\\/\\s*}"), "<!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(u, "[^\\S\n]*($|\n)[\\s\\S]*\n.*-->")].join("|"), "m"), l = n.match(i);
            return (l == null ? void 0 : l.index) === 0;
        }
        r.exports = { startWithPragma: a, hasPragma: function (n) { return a(t(n).content.trimStart()); }, insertPragma: function (n) {
                var u = t(n), i = "<!-- @".concat(s[0], " -->");
                return u.frontMatter ? "".concat(u.frontMatter.raw, "\n\n").concat(i, "\n\n").concat(u.content) : "".concat(i, "\n\n").concat(u.content);
            } };
    } }), tg = te({ "src/language-markdown/print-preprocess.js": function (e, r) {
        "use strict";
        ne();
        var t = lt(), _b = nu(), s = _b.getOrderedListItemInfo, a = _b.mapAst, n = _b.splitText, u = /^.$/su;
        function i(w, F) { return w = d(w, F), w = c(w), w = p(w, F), w = E(w, F), w = _(w, F), w = f(w, F), w = l(w), w = y(w), w; }
        function l(w) { return a(w, function (F) { return F.type !== "import" && F.type !== "export" ? F : Object.assign(Object.assign({}, F), {}, { type: "importExport" }); }); }
        function p(w, F) { return a(w, function (N) { return N.type !== "inlineCode" || F.proseWrap === "preserve" ? N : Object.assign(Object.assign({}, N), {}, { value: N.value.replace(/\s+/g, " ") }); }); }
        function d(w, F) { return a(w, function (N) { return N.type !== "text" || N.value === "*" || N.value === "_" || !u.test(N.value) || N.position.end.offset - N.position.start.offset === N.value.length ? N : Object.assign(Object.assign({}, N), {}, { value: F.originalText.slice(N.position.start.offset, N.position.end.offset) }); }); }
        function y(w) {
            return g(w, function (F, N) { return F.type === "importExport" && N.type === "importExport"; }, function (F, N) { return ({ type: "importExport", value: F.value + "\n\n" + N.value, position: { start: F.position.start, end: N.position.end } }); });
        }
        function g(w, F, N) { return a(w, function (x) { if (!x.children)
            return x; var I = x.children.reduce(function (P, $) { var D = t(P); return D && F(D, $) ? P.splice(-1, 1, N(D, $)) : P.push($), P; }, []); return Object.assign(Object.assign({}, x), {}, { children: I }); }); }
        function c(w) { return g(w, function (F, N) { return F.type === "text" && N.type === "text"; }, function (F, N) { return ({ type: "text", value: F.value + N.value, position: { start: F.position.start, end: N.position.end } }); }); }
        function f(w, F) { return a(w, function (N, x, I) { var _b = __read(I, 1), P = _b[0]; if (N.type !== "text")
            return N; var $ = N.value; return P.type === "paragraph" && (x === 0 && ($ = $.trimStart()), x === P.children.length - 1 && ($ = $.trimEnd())), { type: "sentence", position: N.position, children: n($, F) }; }); }
        function E(w, F) { return a(w, function (N, x, I) { if (N.type === "code") {
            var P = /^\n?(?: {4,}|\t)/.test(F.originalText.slice(N.position.start.offset, N.position.end.offset));
            if (N.isIndented = P, P)
                for (var $ = 0; $ < I.length; $++) {
                    var D = I[$];
                    if (D.hasIndentedCodeblock)
                        break;
                    D.type === "list" && (D.hasIndentedCodeblock = !0);
                }
        } return N; }); }
        function _(w, F) { return a(w, function (I, P, $) { if (I.type === "list" && I.children.length > 0) {
            for (var D = 0; D < $.length; D++) {
                var T = $[D];
                if (T.type === "list" && !T.isAligned)
                    return I.isAligned = !1, I;
            }
            I.isAligned = x(I);
        } return I; }); function N(I) { return I.children.length === 0 ? -1 : I.children[0].position.start.column - 1; } function x(I) { if (!I.ordered)
            return !0; var _b = __read(I.children, 2), P = _b[0], $ = _b[1]; if (s(P, F.originalText).leadingSpaces.length > 1)
            return !0; var T = N(P); if (T === -1)
            return !1; if (I.children.length === 1)
            return T % F.tabWidth === 0; var m = N($); return T !== m ? !1 : T % F.tabWidth === 0 ? !0 : s($, F.originalText).leadingSpaces.length > 1; } }
        r.exports = i;
    } }), rg = te({ "src/language-markdown/clean.js": function (e, r) {
        "use strict";
        ne();
        var t = So(), s = Ue().isFrontMatterNode, a = bo().startWithPragma, n = new Set(["position", "raw"]);
        function u(i, l, p) { if ((i.type === "front-matter" || i.type === "code" || i.type === "yaml" || i.type === "import" || i.type === "export" || i.type === "jsx") && delete l.value, i.type === "list" && delete l.isAligned, (i.type === "list" || i.type === "listItem") && (delete l.spread, delete l.loose), i.type === "text" || (i.type === "inlineCode" && (l.value = i.value.replace(/[\t\n ]+/g, " ")), i.type === "wikiLink" && (l.value = i.value.trim().replace(/[\t\n]+/g, " ")), (i.type === "definition" || i.type === "linkReference" || i.type === "imageReference") && (l.label = t(i.label)), (i.type === "definition" || i.type === "link" || i.type === "image") && i.title && (l.title = i.title.replace(/\\(["')])/g, "$1")), p && p.type === "root" && p.children.length > 0 && (p.children[0] === i || s(p.children[0]) && p.children[1] === i) && i.type === "html" && a(i.value)))
            return null; }
        u.ignoredProperties = n, r.exports = u;
    } }), ng = te({ "src/language-markdown/printer-markdown.js": function (e, r) {
        "use strict";
        ne();
        var t = So(), _b = Ue(), s = _b.getLast, a = _b.getMinNotPresentContinuousCount, n = _b.getMaxContinuousCount, u = _b.getStringWidth, i = _b.isNonEmptyArray, _h = qe(), _j = _h.builders, l = _j.breakParent, p = _j.join, d = _j.line, y = _j.literalline, g = _j.markAsRoot, c = _j.hardline, f = _j.softline, E = _j.ifBreak, _ = _j.fill, w = _j.align, F = _j.indent, N = _j.group, x = _j.hardlineWithoutBreakParent, _k = _h.utils, I = _k.normalizeDoc, P = _k.replaceTextEndOfLine, $ = _h.printer.printDocToString, D = eg(), T = bo().insertPragma, _q = xo(), m = _q.locStart, C = _q.locEnd, o = tg(), h = rg(), _v = nu(), v = _v.getFencedCodeBlockValue, S = _v.hasGitDiffFriendlyOrderedList, b = _v.splitText, B = _v.punctuationPattern, k = _v.INLINE_NODE_TYPES, M = _v.INLINE_NODE_WRAPPER_TYPES, R = _v.isAutolink, q = new Set(["importExport"]), J = ["heading", "tableCell", "link", "wikiLink"], L = new Set(["listItem", "definition", "footnoteDefinition"]);
        function Q(oe, H, pe) { var X = oe.getValue(); if (ge(oe))
            return b(H.originalText.slice(X.position.start.offset, X.position.end.offset), H).map(function (le) { return le.type === "word" ? le.value : le.value === "" ? "" : W(oe, le.value, H); }); switch (X.type) {
            case "front-matter": return H.originalText.slice(X.position.start.offset, X.position.end.offset);
            case "root": return X.children.length === 0 ? "" : [I(de(oe, H, pe)), q.has(z(X).type) ? "" : c];
            case "paragraph": return ue(oe, H, pe, { postprocessor: _ });
            case "sentence": return ue(oe, H, pe);
            case "word": {
                var le = X.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(B, ")(_+)"), "(_+)(".concat(B, "|$)")].join("|"), "g"), function (De, A, G, re, ye) { return (G ? "".concat(A).concat(G) : "".concat(re).concat(ye)).replace(/_/g, "\\_"); }), Ae = function (De, A, G) { return De.type === "sentence" && G === 0; }, Ee = function (De, A, G) { return R(De.children[G - 1]); };
                return le !== X.value && (oe.match(void 0, Ae, Ee) || oe.match(void 0, Ae, function (De, A, G) { return De.type === "emphasis" && G === 0; }, Ee)) && (le = le.replace(/^(\\?[*_])+/, function (De) { return De.replace(/\\/g, ""); })), le;
            }
            case "whitespace": {
                var le = oe.getParentNode(), Ae = le.children.indexOf(X), Ee = le.children[Ae + 1], De = Ee && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(Ee.value) ? "never" : H.proseWrap;
                return W(oe, X.value, { proseWrap: De });
            }
            case "emphasis": {
                var le = void 0;
                if (R(X.children[0]))
                    le = H.originalText[X.position.start.offset];
                else {
                    var Ae = oe.getParentNode(), Ee = Ae.children.indexOf(X), De = Ae.children[Ee - 1], A = Ae.children[Ee + 1];
                    le = De && De.type === "sentence" && De.children.length > 0 && s(De.children).type === "word" && !s(De.children).hasTrailingPunctuation || A && A.type === "sentence" && A.children.length > 0 && A.children[0].type === "word" && !A.children[0].hasLeadingPunctuation || ce(oe, "emphasis") ? "*" : "_";
                }
                return [le, ue(oe, H, pe), le];
            }
            case "strong": return ["**", ue(oe, H, pe), "**"];
            case "delete": return ["~~", ue(oe, H, pe), "~~"];
            case "inlineCode": {
                var le = a(X.value, "`"), Ae = "`".repeat(le || 1), Ee = le && !/^\s/.test(X.value) ? " " : "";
                return [Ae, Ee, X.value, Ee, Ae];
            }
            case "wikiLink": {
                var le = "";
                return H.proseWrap === "preserve" ? le = X.value : le = X.value.replace(/[\t\n]+/g, " "), ["[[", le, "]]"];
            }
            case "link": switch (H.originalText[X.position.start.offset]) {
                case "<": {
                    var le = "mailto:";
                    return ["<", X.url.startsWith(le) && H.originalText.slice(X.position.start.offset + 1, X.position.start.offset + 1 + le.length) !== le ? X.url.slice(le.length) : X.url, ">"];
                }
                case "[": return ["[", ue(oe, H, pe), "](", he(X.url, ")"), we(X.title, H), ")"];
                default: return H.originalText.slice(X.position.start.offset, X.position.end.offset);
            }
            case "image": return ["![", X.alt || "", "](", he(X.url, ")"), we(X.title, H), ")"];
            case "blockquote": return ["> ", w("> ", ue(oe, H, pe))];
            case "heading": return ["#".repeat(X.depth) + " ", ue(oe, H, pe)];
            case "code": {
                if (X.isIndented) {
                    var Ee = " ".repeat(4);
                    return w(Ee, __spreadArray([Ee], __read(P(X.value, c)), false));
                }
                var le = H.__inJsTemplate ? "~" : "`", Ae = le.repeat(Math.max(3, n(X.value, le) + 1));
                return __spreadArray(__spreadArray([Ae, X.lang || "", X.meta ? " " + X.meta : "", c], __read(P(v(X, H.originalText), c)), false), [c, Ae], false);
            }
            case "html": {
                var le = oe.getParentNode(), Ae = le.type === "root" && s(le.children) === X ? X.value.trimEnd() : X.value, Ee = /^<!--.*-->$/s.test(Ae);
                return P(Ae, Ee ? c : g(y));
            }
            case "list": {
                var le_2 = Y(X, oe.getParentNode()), Ae_1 = S(X, H);
                return ue(oe, H, pe, { processor: function (Ee, De) { var A = re(), G = Ee.getValue(); if (G.children.length === 2 && G.children[1].type === "html" && G.children[0].position.start.column !== G.children[1].position.start.column)
                        return [A, V(Ee, H, pe, A)]; return [A, w(" ".repeat(A.length), V(Ee, H, pe, A))]; function re() { var ye = X.ordered ? (De === 0 ? X.start : Ae_1 ? 1 : X.start + De) + (le_2 % 2 === 0 ? ". " : ") ") : le_2 % 2 === 0 ? "- " : "* "; return X.isAligned || X.hasIndentedCodeblock ? j(ye, H) : ye; } } });
            }
            case "thematicBreak": {
                var le = ee(oe, "list");
                return le === -1 ? "---" : Y(oe.getParentNode(le), oe.getParentNode(le + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference": return ["[", ue(oe, H, pe), "]", X.referenceType === "full" ? Ne(X) : X.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference": switch (X.referenceType) {
                case "full": return ["![", X.alt || "", "]", Ne(X)];
                default: return ["![", X.alt, "]", X.referenceType === "collapsed" ? "[]" : ""];
            }
            case "definition": {
                var le = H.proseWrap === "always" ? d : " ";
                return N([Ne(X), ":", F([le, he(X.url), X.title === null ? "" : [le, we(X.title, H, !1)]])]);
            }
            case "footnote": return ["[^", ue(oe, H, pe), "]"];
            case "footnoteReference": return Pe(X);
            case "footnoteDefinition": {
                var le = oe.getParentNode().children[oe.getName() + 1], Ae = X.children.length === 1 && X.children[0].type === "paragraph" && (H.proseWrap === "never" || H.proseWrap === "preserve" && X.children[0].position.start.line === X.children[0].position.end.line);
                return [Pe(X), ": ", Ae ? ue(oe, H, pe) : N([w(" ".repeat(4), ue(oe, H, pe, { processor: function (Ee, De) { return De === 0 ? N([f, pe()]) : pe(); } })), le && le.type === "footnoteDefinition" ? f : ""])];
            }
            case "table": return K(oe, H, pe);
            case "tableCell": return ue(oe, H, pe);
            case "break": return /\s/.test(H.originalText[X.position.start.offset]) ? ["  ", g(y)] : ["\\", c];
            case "liquidNode": return P(X.value, c);
            case "importExport": return [X.value, c];
            case "esComment": return ["{/* ", X.value, " */}"];
            case "jsx": return X.value;
            case "math": return ["$$", c, X.value ? __spreadArray(__spreadArray([], __read(P(X.value, c)), false), [c], false) : "", "$$"];
            case "inlineMath": return H.originalText.slice(m(X), C(X));
            case "tableRow":
            case "listItem":
            default: throw new Error("Unknown markdown type ".concat(JSON.stringify(X.type)));
        } }
        function V(oe, H, pe, X) { var le = oe.getValue(), Ae = le.checked === null ? "" : le.checked ? "[x] " : "[ ] "; return [Ae, ue(oe, H, pe, { processor: function (Ee, De) { if (De === 0 && Ee.getValue().type !== "list")
                    return w(" ".repeat(Ae.length), pe()); var A = " ".repeat(ke(H.tabWidth - X.length, 0, 3)); return [A, w(A, pe())]; } })]; }
        function j(oe, H) { var pe = X(); return oe + " ".repeat(pe >= 4 ? 0 : pe); function X() { var le = oe.length % H.tabWidth; return le === 0 ? 0 : H.tabWidth - le; } }
        function Y(oe, H) { return ie(oe, H, function (pe) { return pe.ordered === oe.ordered; }); }
        function ie(oe, H, pe) {
            var e_61, _b;
            var X = -1;
            try {
                for (var _h = __values(H.children), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var le = _j.value;
                    if (le.type === oe.type && pe(le) ? X++ : X = -1, le === oe)
                        return X;
                }
            }
            catch (e_61_1) { e_61 = { error: e_61_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_61) throw e_61.error; }
            }
        }
        function ee(oe, H) { var pe = Array.isArray(H) ? H : [H], X = -1, le; for (; le = oe.getParentNode(++X);)
            if (pe.includes(le.type))
                return X; return -1; }
        function ce(oe, H) { var pe = ee(oe, H); return pe === -1 ? null : oe.getParentNode(pe); }
        function W(oe, H, pe) {
            if (pe.proseWrap === "preserve" && H === "\n")
                return c;
            var X = pe.proseWrap === "always" && !ce(oe, J);
            return H !== "" ? X ? d : " " : X ? f : "";
        }
        function K(oe, H, pe) { var X = oe.getValue(), le = [], Ae = oe.map(function (ye) { return ye.map(function (Ce, Be) { var ve = $(pe(), H).formatted, ze = u(ve); return le[Be] = Math.max(le[Be] || 3, ze), { text: ve, width: ze }; }, "children"); }, "children"), Ee = A(!1); if (H.proseWrap !== "never")
            return [l, Ee]; var De = A(!0); return [l, N(E(De, Ee))]; function A(ye) { var Ce = [re(Ae[0], ye), G(ye)]; return Ae.length > 1 && Ce.push(p(x, Ae.slice(1).map(function (Be) { return re(Be, ye); }))), p(x, Ce); } function G(ye) { return "| ".concat(le.map(function (Be, ve) { var ze = X.align[ve], xe = ze === "center" || ze === "left" ? ":" : "-", Ye = ze === "center" || ze === "right" ? ":" : "-", Se = ye ? "-" : "-".repeat(Be - 2); return "".concat(xe).concat(Se).concat(Ye); }).join(" | "), " |"); } function re(ye, Ce) { return "| ".concat(ye.map(function (ve, ze) { var xe = ve.text, Ye = ve.width; if (Ce)
            return xe; var Se = le[ze] - Ye, Ie = X.align[ze], Oe = 0; Ie === "right" ? Oe = Se : Ie === "center" && (Oe = Math.floor(Se / 2)); var Je = Se - Oe; return "".concat(" ".repeat(Oe)).concat(xe).concat(" ".repeat(Je)); }).join(" | "), " |"); } }
        function de(oe, H, pe) {
            var e_62, _b;
            var X = [], le = null, Ae = oe.getValue().children;
            try {
                for (var _h = __values(Ae.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), Ee = _k[0], De = _k[1];
                    switch (U(De)) {
                        case "start":
                            le === null && (le = { index: Ee, offset: De.position.end.offset });
                            break;
                        case "end":
                            le !== null && (X.push({ start: le, end: { index: Ee, offset: De.position.start.offset } }), le = null);
                            break;
                        default: break;
                    }
                }
            }
            catch (e_62_1) { e_62 = { error: e_62_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_62) throw e_62.error; }
            }
            return ue(oe, H, pe, { processor: function (Ee, De) { if (X.length > 0) {
                    var A = X[0];
                    if (De === A.start.index)
                        return [Fe(Ae[A.start.index]), H.originalText.slice(A.start.offset, A.end.offset), Fe(Ae[A.end.index])];
                    if (A.start.index < De && De < A.end.index)
                        return !1;
                    if (De === A.end.index)
                        return X.shift(), !1;
                } return pe(); } });
        }
        function ue(oe, H, pe) { var X = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, le = X.postprocessor, Ae = X.processor || (function () { return pe(); }), Ee = oe.getValue(), De = [], A; return oe.each(function (G, re) { var ye = G.getValue(), Ce = Ae(G, re); if (Ce !== !1) {
            var Be = { parts: De, prevNode: A, parentNode: Ee, options: H };
            Z(ye, Be) && (De.push(c), A && q.has(A.type) || (se(ye, Be) || fe(ye, Be)) && De.push(c), fe(ye, Be) && De.push(c)), De.push(Ce), A = ye;
        } }, "children"), le ? le(De) : De; }
        function Fe(oe) { if (oe.type === "html")
            return oe.value; if (oe.type === "paragraph" && Array.isArray(oe.children) && oe.children.length === 1 && oe.children[0].type === "esComment")
            return ["{/* ", oe.children[0].value, " */}"]; }
        function z(oe) { var H = oe; for (; i(H.children);)
            H = s(H.children); return H; }
        function U(oe) { var H; if (oe.type === "html")
            H = oe.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
        else {
            var pe = void 0;
            oe.type === "esComment" ? pe = oe : oe.type === "paragraph" && oe.children.length === 1 && oe.children[0].type === "esComment" && (pe = oe.children[0]), pe && (H = pe.value.match(/^prettier-ignore(?:-(start|end))?$/));
        } return H ? H[1] || "next" : !1; }
        function Z(oe, H) { var pe = H.parts.length === 0, X = k.includes(oe.type), le = oe.type === "html" && M.includes(H.parentNode.type); return !pe && !X && !le; }
        function se(oe, H) { var pe, X, le; var Ee = (H.prevNode && H.prevNode.type) === oe.type && L.has(oe.type), De = H.parentNode.type === "listItem" && !H.parentNode.loose, A = ((pe = H.prevNode) === null || pe === void 0 ? void 0 : pe.type) === "listItem" && H.prevNode.loose, G = U(H.prevNode) === "next", re = oe.type === "html" && ((X = H.prevNode) === null || X === void 0 ? void 0 : X.type) === "html" && H.prevNode.position.end.line + 1 === oe.position.start.line, ye = oe.type === "html" && H.parentNode.type === "listItem" && ((le = H.prevNode) === null || le === void 0 ? void 0 : le.type) === "paragraph" && H.prevNode.position.end.line + 1 === oe.position.start.line; return A || !(Ee || De || G || re || ye); }
        function fe(oe, H) { var pe = H.prevNode && H.prevNode.type === "list", X = oe.type === "code" && oe.isIndented; return pe && X; }
        function ge(oe) { var H = ce(oe, ["linkReference", "imageReference"]); return H && (H.type !== "linkReference" || H.referenceType !== "full"); }
        function he(oe) { var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], pe = __spreadArray([" "], __read(Array.isArray(H) ? H : [H]), false); return new RegExp(pe.map(function (X) { return "\\".concat(X); }).join("|")).test(oe) ? "<".concat(oe, ">") : oe; }
        function we(oe, H) { var pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0; if (!oe)
            return ""; if (pe)
            return " " + we(oe, H, !1); if (oe = oe.replace(/\\(["')])/g, "$1"), oe.includes('"') && oe.includes("'") && !oe.includes(")"))
            return "(".concat(oe, ")"); var X = oe.split("'").length - 1, le = oe.split('"').length - 1, Ae = X > le ? '"' : le > X || H.singleQuote ? "'" : '"'; return oe = oe.replace(/\\/, "\\\\"), oe = oe.replace(new RegExp("(".concat(Ae, ")"), "g"), "\\$1"), "".concat(Ae).concat(oe).concat(Ae); }
        function ke(oe, H, pe) { return oe < H ? H : oe > pe ? pe : oe; }
        function Re(oe) { var H = Number(oe.getName()); if (H === 0)
            return !1; var pe = oe.getParentNode().children[H - 1]; return U(pe) === "next"; }
        function Ne(oe) { return "[".concat(t(oe.label), "]"); }
        function Pe(oe) { return "[^".concat(oe.label, "]"); }
        r.exports = { preprocess: o, print: Q, embed: D, massageAstNode: h, hasPrettierIgnore: Re, insertPragma: T };
    } }), ug = te({ "src/language-markdown/options.js": function (e, r) {
        "use strict";
        ne();
        var t = jt();
        r.exports = { proseWrap: t.proseWrap, singleQuote: t.singleQuote };
    } }), sg = te({ "src/language-markdown/parsers.js": function () { ne(); } }), Aa = te({ "node_modules/linguist-languages/data/Markdown.json": function (e, r) { r.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: !0, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 }; } }), ig = te({ "src/language-markdown/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = ng(), a = ug(), n = sg(), u = [t(Aa(), function (l) { return ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: __spreadArray(__spreadArray([], __read(l.filenames), false), ["README"], false), extensions: l.extensions.filter(function (p) { return p !== ".mdx"; }) }); }), t(Aa(), function () { return ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }); })], i = { mdast: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
    } }), ag = te({ "src/language-html/clean.js": function (e, r) {
        "use strict";
        ne();
        var t = Ue().isFrontMatterNode, s = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function a(n, u) { if (n.type === "text" || n.type === "comment" || t(n) || n.type === "yaml" || n.type === "toml")
            return null; n.type === "attribute" && delete u.value, n.type === "docType" && delete u.value; }
        a.ignoredProperties = s, r.exports = a;
    } }), og = te({ "src/language-html/constants.evaluate.js": function (e, r) { r.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" }; } }), lg = te({ "src/language-html/utils/is-unknown-namespace.js": function (e, r) {
        "use strict";
        ne();
        function t(s) { return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace); }
        r.exports = t;
    } }), qt = te({ "src/language-html/utils/index.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.inferParserByLanguage, s = _b.isFrontMatterNode, _h = qe(), _j = _h.builders, a = _j.line, n = _j.hardline, u = _j.join, _k = _h.utils, i = _k.getDocParts, l = _k.replaceTextEndOfLine, _q = og(), p = _q.CSS_DISPLAY_TAGS, d = _q.CSS_DISPLAY_DEFAULT, y = _q.CSS_WHITE_SPACE_TAGS, g = _q.CSS_WHITE_SPACE_DEFAULT, c = lg(), f = new Set(["	", "\n", "\f", "\r", " "]), E = function (A) { return A.replace(/^[\t\n\f\r ]+/, ""); }, _ = function (A) { return A.replace(/[\t\n\f\r ]+$/, ""); }, w = function (A) { return E(_(A)); }, F = function (A) { return A.replace(/^[\t\f\r ]*\n/g, ""); }, N = function (A) { return F(_(A)); }, x = function (A) { return A.split(/[\t\n\f\r ]+/); }, I = function (A) { return A.match(/^[\t\n\f\r ]*/)[0]; }, P = function (A) { var _b = __read(A.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s), 4), G = _b[1], re = _b[2], ye = _b[3]; return { leadingWhitespace: G, trailingWhitespace: ye, text: re }; }, $ = function (A) { return /[\t\n\f\r ]/.test(A); };
        function D(A, G) { return !!(A.type === "ieConditionalComment" && A.lastChild && !A.lastChild.isSelfClosing && !A.lastChild.endSourceSpan || A.type === "ieConditionalComment" && !A.complete || se(A) && A.children.some(function (re) { return re.type !== "text" && re.type !== "interpolation"; }) || X(A, G) && !o(A) && A.type !== "interpolation"); }
        function T(A) { return A.type === "attribute" || !A.parent || !A.prev ? !1 : m(A.prev); }
        function m(A) { return A.type === "comment" && A.value.trim() === "prettier-ignore"; }
        function C(A) { return A.type === "text" || A.type === "comment"; }
        function o(A) { return A.type === "element" && (A.fullName === "script" || A.fullName === "style" || A.fullName === "svg:style" || c(A) && (A.name === "script" || A.name === "style")); }
        function h(A) { return A.children && !o(A); }
        function v(A) { return o(A) || A.type === "interpolation" || S(A); }
        function S(A) { return we(A).startsWith("pre"); }
        function b(A, G) { var re = ye(); if (re && !A.prev && A.parent && A.parent.tagDefinition && A.parent.tagDefinition.ignoreFirstLf)
            return A.type === "interpolation"; return re; function ye() { return s(A) ? !1 : (A.type === "text" || A.type === "interpolation") && A.prev && (A.prev.type === "text" || A.prev.type === "interpolation") ? !0 : !A.parent || A.parent.cssDisplay === "none" ? !1 : se(A.parent) ? !0 : !(!A.prev && (A.parent.type === "root" || se(A) && A.parent || o(A.parent) || H(A.parent, G) || !ue(A.parent.cssDisplay)) || A.prev && !U(A.prev.cssDisplay)); } }
        function B(A, G) { return s(A) ? !1 : (A.type === "text" || A.type === "interpolation") && A.next && (A.next.type === "text" || A.next.type === "interpolation") ? !0 : !A.parent || A.parent.cssDisplay === "none" ? !1 : se(A.parent) ? !0 : !(!A.next && (A.parent.type === "root" || se(A) && A.parent || o(A.parent) || H(A.parent, G) || !Fe(A.parent.cssDisplay)) || A.next && !z(A.next.cssDisplay)); }
        function k(A) { return Z(A.cssDisplay) && !o(A); }
        function M(A) { return s(A) || A.next && A.sourceSpan.end && A.sourceSpan.end.line + 1 < A.next.sourceSpan.start.line; }
        function R(A) { return q(A) || A.type === "element" && A.children.length > 0 && (["body", "script", "style"].includes(A.name) || A.children.some(function (G) { return ee(G); })) || A.firstChild && A.firstChild === A.lastChild && A.firstChild.type !== "text" && V(A.firstChild) && (!A.lastChild.isTrailingSpaceSensitive || j(A.lastChild)); }
        function q(A) { return A.type === "element" && A.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(A.name) || A.cssDisplay.startsWith("table") && A.cssDisplay !== "table-cell"); }
        function J(A) { return Y(A) || A.prev && L(A.prev) || Q(A); }
        function L(A) { return Y(A) || A.type === "element" && A.fullName === "br" || Q(A); }
        function Q(A) { return V(A) && j(A); }
        function V(A) { return A.hasLeadingSpaces && (A.prev ? A.prev.sourceSpan.end.line < A.sourceSpan.start.line : A.parent.type === "root" || A.parent.startSourceSpan.end.line < A.sourceSpan.start.line); }
        function j(A) { return A.hasTrailingSpaces && (A.next ? A.next.sourceSpan.start.line > A.sourceSpan.end.line : A.parent.type === "root" || A.parent.endSourceSpan && A.parent.endSourceSpan.start.line > A.sourceSpan.end.line); }
        function Y(A) { switch (A.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive": return !0;
            case "element": return ["script", "select"].includes(A.name);
        } return !1; }
        function ie(A) { return A.lastChild ? ie(A.lastChild) : A; }
        function ee(A) { return A.children && A.children.some(function (G) { return G.type !== "text"; }); }
        function ce(A) { var _b = A.attrMap, G = _b.type, re = _b.lang; if (G === "module" || G === "text/javascript" || G === "text/babel" || G === "application/javascript" || re === "jsx")
            return "babel"; if (G === "application/x-typescript" || re === "ts" || re === "tsx")
            return "typescript"; if (G === "text/markdown")
            return "markdown"; if (G === "text/html")
            return "html"; if (G && (G.endsWith("json") || G.endsWith("importmap")) || G === "speculationrules")
            return "json"; if (G === "text/x-handlebars-template")
            return "glimmer"; }
        function W(A, G) { var re = A.attrMap.lang; if (!re || re === "postcss" || re === "css")
            return "css"; if (re === "scss")
            return "scss"; if (re === "less")
            return "less"; if (re === "stylus")
            return t("stylus", G); }
        function K(A, G) { if (A.name === "script" && !A.attrMap.src)
            return !A.attrMap.lang && !A.attrMap.type ? "babel" : ce(A); if (A.name === "style")
            return W(A, G); if (G && X(A, G))
            return ce(A) || !("src" in A.attrMap) && t(A.attrMap.lang, G); }
        function de(A) { return A === "block" || A === "list-item" || A.startsWith("table"); }
        function ue(A) { return !de(A) && A !== "inline-block"; }
        function Fe(A) { return !de(A) && A !== "inline-block"; }
        function z(A) { return !de(A); }
        function U(A) { return !de(A); }
        function Z(A) { return !de(A) && A !== "inline-block"; }
        function se(A) { return we(A).startsWith("pre"); }
        function fe(A, G) { var re = 0; for (var ye = A.stack.length - 1; ye >= 0; ye--) {
            var Ce = A.stack[ye];
            Ce && typeof Ce == "object" && !Array.isArray(Ce) && G(Ce) && re++;
        } return re; }
        function ge(A, G) { var re = A; for (; re;) {
            if (G(re))
                return !0;
            re = re.parent;
        } return !1; }
        function he(A, G) { if (A.prev && A.prev.type === "comment") {
            var ye = A.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (ye)
                return ye[1];
        } var re = !1; if (A.type === "element" && A.namespace === "svg")
            if (ge(A, function (ye) { return ye.fullName === "svg:foreignObject"; }))
                re = !0;
            else
                return A.name === "svg" ? "inline-block" : "block"; switch (G.htmlWhitespaceSensitivity) {
            case "strict": return "inline";
            case "ignore": return "block";
            default: return G.parser === "vue" && A.parent && A.parent.type === "root" ? "block" : A.type === "element" && (!A.namespace || re || c(A)) && p[A.name] || d;
        } }
        function we(A) { return A.type === "element" && (!A.namespace || c(A)) && y[A.name] || g; }
        function ke(A) {
            var e_63, _b;
            var G = Number.POSITIVE_INFINITY;
            try {
                for (var _h = __values(A.split("\n")), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var re = _j.value;
                    if (re.length === 0)
                        continue;
                    if (!f.has(re[0]))
                        return 0;
                    var ye = I(re).length;
                    re.length !== ye && ye < G && (G = ye);
                }
            }
            catch (e_63_1) { e_63 = { error: e_63_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_63) throw e_63.error; }
            }
            return G === Number.POSITIVE_INFINITY ? 0 : G;
        }
        function Re(A) {
            var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke(A);
            return G === 0 ? A : A.split("\n").map(function (re) { return re.slice(G); }).join("\n");
        }
        function Ne(A, G) { var re = 0; for (var ye = 0; ye < A.length; ye++)
            A[ye] === G && re++; return re; }
        function Pe(A) { return A.replace(/&apos;/g, "'").replace(/&quot;/g, '"'); }
        var oe = new Set(["template", "style", "script"]);
        function H(A, G) { return pe(A, G) && !oe.has(A.fullName); }
        function pe(A, G) { return G.parser === "vue" && A.type === "element" && A.parent.type === "root" && A.fullName.toLowerCase() !== "html"; }
        function X(A, G) { return pe(A, G) && (H(A, G) || A.attrMap.lang && A.attrMap.lang !== "html"); }
        function le(A) { var G = A.fullName; return G.charAt(0) === "#" || G === "slot-scope" || G === "v-slot" || G.startsWith("v-slot:"); }
        function Ae(A, G) { var re = A.parent; if (!pe(re, G))
            return !1; var ye = re.fullName, Ce = A.fullName; return ye === "script" && Ce === "setup" || ye === "style" && Ce === "vars"; }
        function Ee(A) { var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A.value; return A.parent.isWhitespaceSensitive ? A.parent.isIndentationSensitive ? l(G) : l(Re(N(G)), n) : i(u(a, x(G))); }
        function De(A, G) { return pe(A, G) && A.name === "script"; }
        r.exports = { htmlTrim: w, htmlTrimPreserveIndentation: N, hasHtmlWhitespace: $, getLeadingAndTrailingHtmlWhitespace: P, canHaveInterpolation: h, countChars: Ne, countParents: fe, dedentString: Re, forceBreakChildren: q, forceBreakContent: R, forceNextEmptyLine: M, getLastDescendant: ie, getNodeCssStyleDisplay: he, getNodeCssStyleWhiteSpace: we, hasPrettierIgnore: T, inferScriptParser: K, isVueCustomBlock: H, isVueNonHtmlBlock: X, isVueScriptTag: De, isVueSlotAttribute: le, isVueSfcBindingsAttribute: Ae, isVueSfcBlock: pe, isDanglingSpaceSensitiveNode: k, isIndentationSensitiveNode: S, isLeadingSpaceSensitiveNode: b, isPreLikeNode: se, isScriptLikeTag: o, isTextLikeNode: C, isTrailingSpaceSensitiveNode: B, isWhitespaceSensitiveNode: v, isUnknownNamespace: c, preferHardlineAsLeadingSpaces: J, preferHardlineAsTrailingSpaces: L, shouldPreserveContent: D, unescapeQuoteEntities: Pe, getTextValueParts: Ee };
    } }), cg = te({ "node_modules/angular-html-parser/lib/compiler/src/chars.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(i) { return i >= e.$TAB && i <= e.$SPACE || i == e.$NBSP; }
        e.isWhitespace = r;
        function t(i) { return e.$0 <= i && i <= e.$9; }
        e.isDigit = t;
        function s(i) { return i >= e.$a && i <= e.$z || i >= e.$A && i <= e.$Z; }
        e.isAsciiLetter = s;
        function a(i) { return i >= e.$a && i <= e.$f || i >= e.$A && i <= e.$F || t(i); }
        e.isAsciiHexDigit = a;
        function n(i) { return i === e.$LF || i === e.$CR; }
        e.isNewLine = n;
        function u(i) { return e.$0 <= i && i <= e.$7; }
        e.isOctalDigit = u;
    } }), pg = te({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = /** @class */ (function () {
            function r(s, a, n) {
                this.filePath = s, this.name = a, this.members = n;
            }
            r.prototype.assertNoMembers = function () { if (this.members.length)
                throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), ".")); };
            return r;
        }());
        e.StaticSymbol = r;
        var t = /** @class */ (function () {
            function t() {
                this.cache = new Map;
            }
            t.prototype.get = function (s, a, n) { n = n || []; var u = n.length ? ".".concat(n.join(".")) : "", i = "\"".concat(s, "\".").concat(a).concat(u), l = this.cache.get(i); return l || (l = new r(s, a, n), this.cache.set(i, l)), l; };
            return t;
        }());
        e.StaticSymbolCache = t;
    } }), fg = te({ "node_modules/angular-html-parser/lib/compiler/src/util.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = /-+([a-z0-9])/g;
        function t(o) { return o.replace(r, function () { for (var h = arguments.length, v = new Array(h), S = 0; S < h; S++)
            v[S] = arguments[S]; return v[1].toUpperCase(); }); }
        e.dashCaseToCamelCase = t;
        function s(o, h) { return n(o, ":", h); }
        e.splitAtColon = s;
        function a(o, h) { return n(o, ".", h); }
        e.splitAtPeriod = a;
        function n(o, h, v) { var S = o.indexOf(h); return S == -1 ? v : [o.slice(0, S).trim(), o.slice(S + 1).trim()]; }
        function u(o, h, v) { return Array.isArray(o) ? h.visitArray(o, v) : F(o) ? h.visitStringMap(o, v) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? h.visitPrimitive(o, v) : h.visitOther(o, v); }
        e.visitValue = u;
        function i(o) { return o != null; }
        e.isDefined = i;
        function l(o) { return o === void 0 ? null : o; }
        e.noUndefined = l;
        var p = /** @class */ (function () {
            function p() {
            }
            p.prototype.visitArray = function (o, h) {
                var _this = this;
                return o.map(function (v) { return u(v, _this, h); });
            };
            p.prototype.visitStringMap = function (o, h) {
                var _this = this;
                var v = {};
                return Object.keys(o).forEach(function (S) { v[S] = u(o[S], _this, h); }), v;
            };
            p.prototype.visitPrimitive = function (o, h) { return o; };
            p.prototype.visitOther = function (o, h) { return o; };
            return p;
        }());
        e.ValueTransformer = p, e.SyncAsync = { assertSync: function (o) { if (P(o))
                throw new Error("Illegal state: value cannot be a promise"); return o; }, then: function (o, h) { return P(o) ? o.then(h) : h(o); }, all: function (o) { return o.some(P) ? Promise.all(o) : o; } };
        function d(o) { throw new Error("Internal Error: ".concat(o)); }
        e.error = d;
        function y(o, h) { var v = Error(o); return v[g] = !0, h && (v[c] = h), v; }
        e.syntaxError = y;
        var g = "ngSyntaxError", c = "ngParseErrors";
        function f(o) { return o[g]; }
        e.isSyntaxError = f;
        function E(o) { return o[c] || []; }
        e.getParseErrors = E;
        function _(o) { return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); }
        e.escapeRegExp = _;
        var w = Object.getPrototypeOf({});
        function F(o) { return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === w; }
        function N(o) { var h = ""; for (var v = 0; v < o.length; v++) {
            var S = o.charCodeAt(v);
            if (S >= 55296 && S <= 56319 && o.length > v + 1) {
                var b = o.charCodeAt(v + 1);
                b >= 56320 && b <= 57343 && (v++, S = (S - 55296 << 10) + b - 56320 + 65536);
            }
            S <= 127 ? h += String.fromCharCode(S) : S <= 2047 ? h += String.fromCharCode(S >> 6 & 31 | 192, S & 63 | 128) : S <= 65535 ? h += String.fromCharCode(S >> 12 | 224, S >> 6 & 63 | 128, S & 63 | 128) : S <= 2097151 && (h += String.fromCharCode(S >> 18 & 7 | 240, S >> 12 & 63 | 128, S >> 6 & 63 | 128, S & 63 | 128));
        } return h; }
        e.utf8Encode = N;
        function x(o) {
            if (typeof o == "string")
                return o;
            if (o instanceof Array)
                return "[" + o.map(x).join(", ") + "]";
            if (o == null)
                return "" + o;
            if (o.overriddenName)
                return "".concat(o.overriddenName);
            if (o.name)
                return "".concat(o.name);
            if (!o.toString)
                return "object";
            var h = o.toString();
            if (h == null)
                return "" + h;
            var v = h.indexOf("\n");
            return v === -1 ? h : h.substring(0, v);
        }
        e.stringify = x;
        function I(o) { return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o; }
        e.resolveForwardRef = I;
        function P(o) { return !!o && typeof o.then == "function"; }
        e.isPromise = P;
        var $ = /** @class */ (function () {
            function $(o) {
                this.full = o;
                var h = o.split(".");
                this.major = h[0], this.minor = h[1], this.patch = h.slice(2).join(".");
            }
            return $;
        }());
        e.Version = $;
        var D = typeof window < "u" && window, T = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, m = typeof globalThis < "u" && globalThis, C = m || D || T;
        e.global = C;
    } }), Dg = te({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = pg(), t = fg(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function a(v) { return v.replace(/\W/g, "_"); }
        e.sanitizeIdentifier = a;
        var n = 0;
        function u(v) { if (!v || !v.reference)
            return null; var S = v.reference; if (S instanceof r.StaticSymbol)
            return S.name; if (S.__anonymousType)
            return S.__anonymousType; var b = t.stringify(S); return b.indexOf("(") >= 0 ? (b = "anonymous_".concat(n++), S.__anonymousType = b) : b = a(b), b; }
        e.identifierName = u;
        function i(v) { var S = v.reference; return S instanceof r.StaticSymbol ? S.filePath : "./".concat(t.stringify(S)); }
        e.identifierModuleUrl = i;
        function l(v, S) { return "View_".concat(u({ reference: v }), "_").concat(S); }
        e.viewClassName = l;
        function p(v) { return "RenderType_".concat(u({ reference: v })); }
        e.rendererTypeName = p;
        function d(v) { return "HostView_".concat(u({ reference: v })); }
        e.hostViewClassName = d;
        function y(v) { return "".concat(u({ reference: v }), "NgFactory"); }
        e.componentFactoryName = y;
        var g;
        (function (v) { v[v.Pipe = 0] = "Pipe", v[v.Directive = 1] = "Directive", v[v.NgModule = 2] = "NgModule", v[v.Injectable = 3] = "Injectable"; })(g = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function c(v) { return v.value != null ? a(v.value) : u(v.identifier); }
        e.tokenName = c;
        function f(v) { return v.identifier != null ? v.identifier.reference : v.value; }
        e.tokenReference = f;
        var E = /** @class */ (function () {
            function E() {
                var _b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = _b.moduleUrl, S = _b.styles, b = _b.styleUrls;
                this.moduleUrl = v || null, this.styles = P(S), this.styleUrls = P(b);
            }
            return E;
        }());
        e.CompileStylesheetMetadata = E;
        var _ = /** @class */ (function () {
            function _(v) {
                var S = v.encapsulation, b = v.template, B = v.templateUrl, k = v.htmlAst, M = v.styles, R = v.styleUrls, q = v.externalStylesheets, J = v.animations, L = v.ngContentSelectors, Q = v.interpolation, V = v.isInline, j = v.preserveWhitespaces;
                if (this.encapsulation = S, this.template = b, this.templateUrl = B, this.htmlAst = k, this.styles = P(M), this.styleUrls = P(R), this.externalStylesheets = P(q), this.animations = J ? D(J) : [], this.ngContentSelectors = L || [], Q && Q.length != 2)
                    throw new Error("'interpolation' should have a start and an end symbol.");
                this.interpolation = Q, this.isInline = V, this.preserveWhitespaces = j;
            }
            _.prototype.toSummary = function () { return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations }; };
            return _;
        }());
        e.CompileTemplateMetadata = _;
        var w = /** @class */ (function () {
            function w(v) {
                var S = v.isHost, b = v.type, B = v.isComponent, k = v.selector, M = v.exportAs, R = v.changeDetection, q = v.inputs, J = v.outputs, L = v.hostListeners, Q = v.hostProperties, V = v.hostAttributes, j = v.providers, Y = v.viewProviders, ie = v.queries, ee = v.guards, ce = v.viewQueries, W = v.entryComponents, K = v.template, de = v.componentViewType, ue = v.rendererType, Fe = v.componentFactory;
                this.isHost = !!S, this.type = b, this.isComponent = B, this.selector = k, this.exportAs = M, this.changeDetection = R, this.inputs = q, this.outputs = J, this.hostListeners = L, this.hostProperties = Q, this.hostAttributes = V, this.providers = P(j), this.viewProviders = P(Y), this.queries = P(ie), this.guards = ee, this.viewQueries = P(ce), this.entryComponents = P(W), this.template = K, this.componentViewType = de, this.rendererType = ue, this.componentFactory = Fe;
            }
            w.create = function (v) { var S = v.isHost, b = v.type, B = v.isComponent, k = v.selector, M = v.exportAs, R = v.changeDetection, q = v.inputs, J = v.outputs, L = v.host, Q = v.providers, V = v.viewProviders, j = v.queries, Y = v.guards, ie = v.viewQueries, ee = v.entryComponents, ce = v.template, W = v.componentViewType, K = v.rendererType, de = v.componentFactory, ue = {}, Fe = {}, z = {}; L != null && Object.keys(L).forEach(function (se) { var fe = L[se], ge = se.match(s); ge === null ? z[se] = fe : ge[1] != null ? Fe[ge[1]] = fe : ge[2] != null && (ue[ge[2]] = fe); }); var U = {}; q != null && q.forEach(function (se) { var fe = t.splitAtColon(se, [se, se]); U[fe[0]] = fe[1]; }); var Z = {}; return J != null && J.forEach(function (se) { var fe = t.splitAtColon(se, [se, se]); Z[fe[0]] = fe[1]; }), new w({ isHost: S, type: b, isComponent: !!B, selector: k, exportAs: M, changeDetection: R, inputs: U, outputs: Z, hostListeners: ue, hostProperties: Fe, hostAttributes: z, providers: Q, viewProviders: V, queries: j, guards: Y, viewQueries: ie, entryComponents: ee, template: ce, componentViewType: W, rendererType: K, componentFactory: de }); };
            w.prototype.toSummary = function () { return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory }; };
            return w;
        }());
        e.CompileDirectiveMetadata = w;
        var F = /** @class */ (function () {
            function F(v) {
                var S = v.type, b = v.name, B = v.pure;
                this.type = S, this.name = b, this.pure = !!B;
            }
            F.prototype.toSummary = function () { return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure }; };
            return F;
        }());
        e.CompilePipeMetadata = F;
        var N = /** @class */ (function () {
            function N() {
            }
            return N;
        }());
        e.CompileShallowModuleMetadata = N;
        var x = /** @class */ (function () {
            function x(v) {
                var S = v.type, b = v.providers, B = v.declaredDirectives, k = v.exportedDirectives, M = v.declaredPipes, R = v.exportedPipes, q = v.entryComponents, J = v.bootstrapComponents, L = v.importedModules, Q = v.exportedModules, V = v.schemas, j = v.transitiveModule, Y = v.id;
                this.type = S || null, this.declaredDirectives = P(B), this.exportedDirectives = P(k), this.declaredPipes = P(M), this.exportedPipes = P(R), this.providers = P(b), this.entryComponents = P(q), this.bootstrapComponents = P(J), this.importedModules = P(L), this.exportedModules = P(Q), this.schemas = P(V), this.id = Y || null, this.transitiveModule = j || null;
            }
            x.prototype.toSummary = function () { var v = this.transitiveModule; return { summaryKind: g.NgModule, type: this.type, entryComponents: v.entryComponents, providers: v.providers, modules: v.modules, exportedDirectives: v.exportedDirectives, exportedPipes: v.exportedPipes }; };
            return x;
        }());
        e.CompileNgModuleMetadata = x;
        var I = /** @class */ (function () {
            function I() {
                this.directivesSet = new Set, this.directives = [], this.exportedDirectivesSet = new Set, this.exportedDirectives = [], this.pipesSet = new Set, this.pipes = [], this.exportedPipesSet = new Set, this.exportedPipes = [], this.modulesSet = new Set, this.modules = [], this.entryComponentsSet = new Set, this.entryComponents = [], this.providers = [];
            }
            I.prototype.addProvider = function (v, S) { this.providers.push({ provider: v, module: S }); };
            I.prototype.addDirective = function (v) { this.directivesSet.has(v.reference) || (this.directivesSet.add(v.reference), this.directives.push(v)); };
            I.prototype.addExportedDirective = function (v) { this.exportedDirectivesSet.has(v.reference) || (this.exportedDirectivesSet.add(v.reference), this.exportedDirectives.push(v)); };
            I.prototype.addPipe = function (v) { this.pipesSet.has(v.reference) || (this.pipesSet.add(v.reference), this.pipes.push(v)); };
            I.prototype.addExportedPipe = function (v) { this.exportedPipesSet.has(v.reference) || (this.exportedPipesSet.add(v.reference), this.exportedPipes.push(v)); };
            I.prototype.addModule = function (v) { this.modulesSet.has(v.reference) || (this.modulesSet.add(v.reference), this.modules.push(v)); };
            I.prototype.addEntryComponent = function (v) { this.entryComponentsSet.has(v.componentType) || (this.entryComponentsSet.add(v.componentType), this.entryComponents.push(v)); };
            return I;
        }());
        e.TransitiveCompileNgModuleMetadata = I;
        function P(v) { return v || []; }
        var $ = /** @class */ (function () {
            function $(v, S) {
                var b = S.useClass, B = S.useValue, k = S.useExisting, M = S.useFactory, R = S.deps, q = S.multi;
                this.token = v, this.useClass = b || null, this.useValue = B, this.useExisting = k, this.useFactory = M || null, this.dependencies = R || null, this.multi = !!q;
            }
            return $;
        }());
        e.ProviderMeta = $;
        function D(v) { return v.reduce(function (S, b) { var B = Array.isArray(b) ? D(b) : b; return S.concat(B); }, []); }
        e.flatten = D;
        function T(v) { return v.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///"); }
        function m(v, S, b) { var B; return b.isInline ? S.type.reference instanceof r.StaticSymbol ? B = "".concat(S.type.reference.filePath, ".").concat(S.type.reference.name, ".html") : B = "".concat(u(v), "/").concat(u(S.type), ".html") : B = b.templateUrl, S.type.reference instanceof r.StaticSymbol ? B : T(B); }
        e.templateSourceUrl = m;
        function C(v, S) { var b = v.moduleUrl.split(/\/\\/g), B = b[b.length - 1]; return T("css/".concat(S).concat(B, ".ngstyle.js")); }
        e.sharedStylesheetJitUrl = C;
        function o(v) { return T("".concat(u(v.type), "/module.ngfactory.js")); }
        e.ngModuleJitUrl = o;
        function h(v, S) { return T("".concat(u(v), "/").concat(u(S.type), ".ngfactory.js")); }
        e.templateJitUrl = h;
    } }), mg = te({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js": function (e) {
        "use strict";
        ne(), Object.defineProperty(e, "__esModule", { value: !0 });
        var r = cg(), t = Dg(), s = /** @class */ (function () {
            function s(d, y, g, c) {
                this.file = d, this.offset = y, this.line = g, this.col = c;
            }
            s.prototype.toString = function () { return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url; };
            s.prototype.moveBy = function (d) { var y = this.file.content, g = y.length, c = this.offset, f = this.line, E = this.col; for (; c > 0 && d < 0;)
                if (c--, d++, y.charCodeAt(c) == r.$LF) {
                    f--;
                    var w = y.substr(0, c - 1).lastIndexOf(String.fromCharCode(r.$LF));
                    E = w > 0 ? c - w : c;
                }
                else
                    E--; for (; c < g && d > 0;) {
                var _ = y.charCodeAt(c);
                c++, d--, _ == r.$LF ? (f++, E = 0) : E++;
            } return new s(this.file, c, f, E); };
            s.prototype.getContext = function (d, y) {
                var g = this.file.content, c = this.offset;
                if (c != null) {
                    c > g.length - 1 && (c = g.length - 1);
                    var f = c, E = 0, _ = 0;
                    for (; E < d && c > 0 && (c--, E++, !(g[c] == "\n" && ++_ == y));)
                        ;
                    for (E = 0, _ = 0; E < d && f < g.length - 1 && (f++, E++, !(g[f] == "\n" && ++_ == y));)
                        ;
                    return { before: g.substring(c, this.offset), after: g.substring(this.offset, f + 1) };
                }
                return null;
            };
            return s;
        }());
        e.ParseLocation = s;
        var a = /** @class */ (function () {
            function a(d, y) {
                this.content = d, this.url = y;
            }
            return a;
        }());
        e.ParseSourceFile = a;
        var n = /** @class */ (function () {
            function n(d, y) {
                var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                this.start = d, this.end = y, this.details = g;
            }
            n.prototype.toString = function () { return this.start.file.content.substring(this.start.offset, this.end.offset); };
            return n;
        }());
        e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new s(new a("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var u;
        (function (d) { d[d.WARNING = 0] = "WARNING", d[d.ERROR = 1] = "ERROR"; })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var i = /** @class */ (function () {
            function i(d, y) {
                var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
                this.span = d, this.msg = y, this.level = g;
            }
            i.prototype.contextualMessage = function () { var d = this.span.start.getContext(100, 3); return d ? "".concat(this.msg, " (\"").concat(d.before, "[").concat(u[this.level], " ->]").concat(d.after, "\")") : this.msg; };
            i.prototype.toString = function () { var d = this.span.details ? ", ".concat(this.span.details) : ""; return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(d); };
            return i;
        }());
        e.ParseError = i;
        function l(d, y) { var g = t.identifierModuleUrl(y), c = g != null ? "in ".concat(d, " ").concat(t.identifierName(y), " in ").concat(g) : "in ".concat(d, " ").concat(t.identifierName(y)), f = new a("", c); return new n(new s(f, -1, -1, -1), new s(f, -1, -1, -1)); }
        e.typeSourceSpan = l;
        function p(d, y, g) { var c = "in ".concat(d, " ").concat(y, " in ").concat(g), f = new a("", c); return new n(new s(f, -1, -1, -1), new s(f, -1, -1, -1)); }
        e.r3JitTypeSourceSpan = p;
    } }), dg = te({ "src/language-html/print-preprocess.js": function (e, r) {
        "use strict";
        ne();
        var t = mg().ParseSourceSpan, _b = qt(), s = _b.htmlTrim, a = _b.getLeadingAndTrailingHtmlWhitespace, n = _b.hasHtmlWhitespace, u = _b.canHaveInterpolation, i = _b.getNodeCssStyleDisplay, l = _b.isDanglingSpaceSensitiveNode, p = _b.isIndentationSensitiveNode, d = _b.isLeadingSpaceSensitiveNode, y = _b.isTrailingSpaceSensitiveNode, g = _b.isWhitespaceSensitiveNode, c = _b.isVueScriptTag, f = [_, w, N, I, P, T, $, D, m, x, C];
        function E(o, h) {
            var e_64, _b;
            try {
                for (var f_2 = __values(f), f_2_1 = f_2.next(); !f_2_1.done; f_2_1 = f_2.next()) {
                    var v = f_2_1.value;
                    v(o, h);
                }
            }
            catch (e_64_1) { e_64 = { error: e_64_1 }; }
            finally {
                try {
                    if (f_2_1 && !f_2_1.done && (_b = f_2.return)) _b.call(f_2);
                }
                finally { if (e_64) throw e_64.error; }
            }
            return o;
        }
        function _(o) {
            o.walk(function (h) {
                if (h.type === "element" && h.tagDefinition.ignoreFirstLf && h.children.length > 0 && h.children[0].type === "text" && h.children[0].value[0] === "\n") {
                    var v = h.children[0];
                    v.value.length === 1 ? h.removeChild(v) : v.value = v.value.slice(1);
                }
            });
        }
        function w(o) { var h = function (v) { return v.type === "element" && v.prev && v.prev.type === "ieConditionalStartComment" && v.prev.sourceSpan.end.offset === v.startSourceSpan.start.offset && v.firstChild && v.firstChild.type === "ieConditionalEndComment" && v.firstChild.sourceSpan.start.offset === v.startSourceSpan.end.offset; }; o.walk(function (v) { if (v.children)
            for (var S = 0; S < v.children.length; S++) {
                var b = v.children[S];
                if (!h(b))
                    continue;
                var B = b.prev, k = b.firstChild;
                v.removeChild(B), S--;
                var M = new t(B.sourceSpan.start, k.sourceSpan.end), R = new t(M.start, b.sourceSpan.end);
                b.condition = B.condition, b.sourceSpan = R, b.startSourceSpan = M, b.removeChild(k);
            } }); }
        function F(o, h, v) { o.walk(function (S) { if (S.children)
            for (var b = 0; b < S.children.length; b++) {
                var B = S.children[b];
                if (B.type !== "text" && !h(B))
                    continue;
                B.type !== "text" && (B.type = "text", B.value = v(B));
                var k = B.prev;
                !k || k.type !== "text" || (k.value += B.value, k.sourceSpan = new t(k.sourceSpan.start, B.sourceSpan.end), S.removeChild(B), b--);
            } }); }
        function N(o) { return F(o, function (h) { return h.type === "cdata"; }, function (h) { return "<![CDATA[".concat(h.value, "]]>"); }); }
        function x(o) { var h = function (v) { return v.type === "element" && v.attrs.length === 0 && v.children.length === 1 && v.firstChild.type === "text" && !n(v.children[0].value) && !v.firstChild.hasLeadingSpaces && !v.firstChild.hasTrailingSpaces && v.isLeadingSpaceSensitive && !v.hasLeadingSpaces && v.isTrailingSpaceSensitive && !v.hasTrailingSpaces && v.prev && v.prev.type === "text" && v.next && v.next.type === "text"; }; o.walk(function (v) { if (v.children)
            for (var S = 0; S < v.children.length; S++) {
                var b = v.children[S];
                if (!h(b))
                    continue;
                var B = b.prev, k = b.next;
                B.value += "<".concat(b.rawName, ">") + b.firstChild.value + "</".concat(b.rawName, ">") + k.value, B.sourceSpan = new t(B.sourceSpan.start, k.sourceSpan.end), B.isTrailingSpaceSensitive = k.isTrailingSpaceSensitive, B.hasTrailingSpaces = k.hasTrailingSpaces, v.removeChild(b), S--, v.removeChild(k);
            } }); }
        function I(o, h) { if (h.parser === "html")
            return; var v = /{{(.+?)}}/s; o.walk(function (S) {
            var e_65, _b;
            if (u(S))
                try {
                    for (var _h = __values(S.children), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var b = _j.value;
                        if (b.type !== "text")
                            continue;
                        var B = b.sourceSpan.start, k = null, M = b.value.split(v);
                        for (var R = 0; R < M.length; R++, B = k) {
                            var q = M[R];
                            if (R % 2 === 0) {
                                k = B.moveBy(q.length), q.length > 0 && S.insertChildBefore(b, { type: "text", value: q, sourceSpan: new t(B, k) });
                                continue;
                            }
                            k = B.moveBy(q.length + 4), S.insertChildBefore(b, { type: "interpolation", sourceSpan: new t(B, k), children: q.length === 0 ? [] : [{ type: "text", value: q, sourceSpan: new t(B.moveBy(2), k.moveBy(-2)) }] });
                        }
                        S.removeChild(b);
                    }
                }
                catch (e_65_1) { e_65 = { error: e_65_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                    }
                    finally { if (e_65) throw e_65.error; }
                }
        }); }
        function P(o) { o.walk(function (h) { if (!h.children)
            return; if (h.children.length === 0 || h.children.length === 1 && h.children[0].type === "text" && s(h.children[0].value).length === 0) {
            h.hasDanglingSpaces = h.children.length > 0, h.children = [];
            return;
        } var v = g(h), S = p(h); if (!v)
            for (var b = 0; b < h.children.length; b++) {
                var B = h.children[b];
                if (B.type !== "text")
                    continue;
                var _b = a(B.value), k = _b.leadingWhitespace, M = _b.text, R = _b.trailingWhitespace, q = B.prev, J = B.next;
                M ? (B.value = M, B.sourceSpan = new t(B.sourceSpan.start.moveBy(k.length), B.sourceSpan.end.moveBy(-R.length)), k && (q && (q.hasTrailingSpaces = !0), B.hasLeadingSpaces = !0), R && (B.hasTrailingSpaces = !0, J && (J.hasLeadingSpaces = !0))) : (h.removeChild(B), b--, (k || R) && (q && (q.hasTrailingSpaces = !0), J && (J.hasLeadingSpaces = !0)));
            } h.isWhitespaceSensitive = v, h.isIndentationSensitive = S; }); }
        function $(o) { o.walk(function (h) { h.isSelfClosing = !h.children || h.type === "element" && (h.tagDefinition.isVoid || h.startSourceSpan === h.endSourceSpan); }); }
        function D(o, h) { o.walk(function (v) { v.type === "element" && (v.hasHtmComponentClosingTag = v.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(h.originalText.slice(v.endSourceSpan.start.offset, v.endSourceSpan.end.offset))); }); }
        function T(o, h) { o.walk(function (v) { v.cssDisplay = i(v, h); }); }
        function m(o, h) { o.walk(function (v) {
            var e_66, _b;
            var S = v.children;
            if (S) {
                if (S.length === 0) {
                    v.isDanglingSpaceSensitive = l(v);
                    return;
                }
                try {
                    for (var S_1 = __values(S), S_1_1 = S_1.next(); !S_1_1.done; S_1_1 = S_1.next()) {
                        var b = S_1_1.value;
                        b.isLeadingSpaceSensitive = d(b, h), b.isTrailingSpaceSensitive = y(b, h);
                    }
                }
                catch (e_66_1) { e_66 = { error: e_66_1 }; }
                finally {
                    try {
                        if (S_1_1 && !S_1_1.done && (_b = S_1.return)) _b.call(S_1);
                    }
                    finally { if (e_66) throw e_66.error; }
                }
                for (var b = 0; b < S.length; b++) {
                    var B = S[b];
                    B.isLeadingSpaceSensitive = (b === 0 || B.prev.isTrailingSpaceSensitive) && B.isLeadingSpaceSensitive, B.isTrailingSpaceSensitive = (b === S.length - 1 || B.next.isLeadingSpaceSensitive) && B.isTrailingSpaceSensitive;
                }
            }
        }); }
        function C(o, h) { if (h.parser === "vue") {
            var v = o.children.find(function (b) { return c(b, h); });
            if (!v)
                return;
            var S = v.attrMap.lang;
            (S === "ts" || S === "typescript") && (h.__should_parse_vue_template_with_ts = !0);
        } }
        r.exports = E;
    } }), gg = te({ "src/language-html/pragma.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(a); }
        function s(a) {
            return "<!-- @format -->\n\n" + a.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: t, insertPragma: s };
    } }), uu = te({ "src/language-html/loc.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return a.sourceSpan.start.offset; }
        function s(a) { return a.sourceSpan.end.offset; }
        r.exports = { locStart: t, locEnd: s };
    } }), rr = te({ "src/language-html/print/tag.js": function (e, r) {
        "use strict";
        ne();
        var t = Yt(), s = Ue().isNonEmptyArray, _b = qe(), _h = _b.builders, a = _h.indent, n = _h.join, u = _h.line, i = _h.softline, l = _h.hardline, p = _b.utils.replaceTextEndOfLine, _j = uu(), d = _j.locStart, y = _j.locEnd, _k = qt(), g = _k.isTextLikeNode, c = _k.getLastDescendant, f = _k.isPreLikeNode, E = _k.hasPrettierIgnore, _ = _k.shouldPreserveContent, w = _k.isVueSfcBlock;
        function F(L, Q) { return [L.isSelfClosing ? "" : N(L, Q), x(L, Q)]; }
        function N(L, Q) { return L.lastChild && o(L.lastChild) ? "" : [I(L, Q), $(L, Q)]; }
        function x(L, Q) { return (L.next ? m(L.next) : C(L.parent)) ? "" : [D(L, Q), P(L, Q)]; }
        function I(L, Q) { return C(L) ? D(L.lastChild, Q) : ""; }
        function P(L, Q) { return o(L) ? $(L.parent, Q) : h(L) ? q(L.next) : ""; }
        function $(L, Q) { if (t(!L.isSelfClosing), T(L, Q))
            return ""; switch (L.type) {
            case "ieConditionalComment": return "<!";
            case "element": if (L.hasHtmComponentClosingTag)
                return "<//";
            default: return "</".concat(L.rawName);
        } }
        function D(L, Q) { if (T(L, Q))
            return ""; switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment": return "[endif]-->";
            case "ieConditionalStartComment": return "]><!-->";
            case "interpolation": return "}}";
            case "element": if (L.isSelfClosing)
                return "/>";
            default: return ">";
        } }
        function T(L, Q) { return !L.isSelfClosing && !L.endSourceSpan && (E(L) || _(L.parent, Q)); }
        function m(L) { return L.prev && L.prev.type !== "docType" && !g(L.prev) && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces; }
        function C(L) { return L.lastChild && L.lastChild.isTrailingSpaceSensitive && !L.lastChild.hasTrailingSpaces && !g(c(L.lastChild)) && !f(L); }
        function o(L) { return !L.next && !L.hasTrailingSpaces && L.isTrailingSpaceSensitive && g(c(L)); }
        function h(L) { return L.next && !g(L.next) && g(L) && L.isTrailingSpaceSensitive && !L.hasTrailingSpaces; }
        function v(L) { var Q = L.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s); return Q ? Q[1] ? Q[1].split(/\s+/) : !0 : !1; }
        function S(L) { return !L.prev && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces; }
        function b(L, Q, V) { var j = L.getValue(); if (!s(j.attrs))
            return j.isSelfClosing ? " " : ""; var Y = j.prev && j.prev.type === "comment" && v(j.prev.value), ie = typeof Y == "boolean" ? function () { return Y; } : Array.isArray(Y) ? function (ue) { return Y.includes(ue.rawName); } : function () { return !1; }, ee = L.map(function (ue) { var Fe = ue.getValue(); return ie(Fe) ? p(Q.originalText.slice(d(Fe), y(Fe))) : V(); }, "attrs"), ce = j.type === "element" && j.fullName === "script" && j.attrs.length === 1 && j.attrs[0].fullName === "src" && j.children.length === 0, K = Q.singleAttributePerLine && j.attrs.length > 1 && !w(j, Q) ? l : u, de = [a([ce ? " " : u, n(K, ee)])]; return j.firstChild && S(j.firstChild) || j.isSelfClosing && C(j.parent) || ce ? de.push(j.isSelfClosing ? " " : "") : de.push(Q.bracketSameLine ? j.isSelfClosing ? " " : "" : j.isSelfClosing ? u : i), de; }
        function B(L) { return L.firstChild && S(L.firstChild) ? "" : J(L); }
        function k(L, Q, V) { var j = L.getValue(); return [M(j, Q), b(L, Q, V), j.isSelfClosing ? "" : B(j)]; }
        function M(L, Q) { return L.prev && h(L.prev) ? "" : [R(L, Q), q(L)]; }
        function R(L, Q) { return S(L) ? J(L.parent) : m(L) ? D(L.prev, Q) : ""; }
        function q(L) { switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment": return "<!--[if ".concat(L.condition);
            case "ieConditionalEndComment": return "<!--<!";
            case "interpolation": return "{{";
            case "docType": return "<!DOCTYPE";
            case "element": if (L.condition)
                return "<!--[if ".concat(L.condition, "]><!--><").concat(L.rawName);
            default: return "<".concat(L.rawName);
        } }
        function J(L) { switch (t(!L.isSelfClosing), L.type) {
            case "ieConditionalComment": return "]>";
            case "element": if (L.condition)
                return "><!--<![endif]-->";
            default: return ">";
        } }
        r.exports = { printClosingTag: F, printClosingTagStart: N, printClosingTagStartMarker: $, printClosingTagEndMarker: D, printClosingTagSuffix: P, printClosingTagEnd: x, needsToBorrowLastChildClosingTagEndMarker: C, needsToBorrowParentClosingTagStartMarker: o, needsToBorrowPrevClosingTagEndMarker: m, printOpeningTag: k, printOpeningTagStart: M, printOpeningTagPrefix: R, printOpeningTagStartMarker: q, printOpeningTagEndMarker: J, needsToBorrowNextOpeningTagStartMarker: h, needsToBorrowParentOpeningTagEndMarker: S };
    } }), yg = te({ "node_modules/parse-srcset/src/parse-srcset.js": function (e, r) {
        ne(), function (t, s) { typeof define == "function" && define.amd ? define([], s) : typeof r == "object" && r.exports ? r.exports = s() : t.parseSrcset = s(); }(e, function () {
            return function (t, s) {
                var a = s && s.logger || console;
                function n($) {
                    return $ === " " || $ === "	" || $ === "\n" || $ === "\f" || $ === "\r";
                }
                function u($) { var D, T = $.exec(t.substring(N)); if (T)
                    return D = T[0], N += D.length, D; }
                for (var i = t.length, l = /^[ \t\n\r\u000c]+/, p = /^[, \t\n\r\u000c]+/, d = /^[^ \t\n\r\u000c]+/, y = /[,]+$/, g = /^\d+$/, c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, f, E, _, w, F, N = 0, x = [];;) {
                    if (u(p), N >= i)
                        return x;
                    f = u(d), E = [], f.slice(-1) === "," ? (f = f.replace(y, ""), P()) : I();
                }
                function I() { for (u(l), _ = "", w = "in descriptor";;) {
                    if (F = t.charAt(N), w === "in descriptor")
                        if (n(F))
                            _ && (E.push(_), _ = "", w = "after descriptor");
                        else if (F === ",") {
                            N += 1, _ && E.push(_), P();
                            return;
                        }
                        else if (F === "(")
                            _ = _ + F, w = "in parens";
                        else if (F === "") {
                            _ && E.push(_), P();
                            return;
                        }
                        else
                            _ = _ + F;
                    else if (w === "in parens")
                        if (F === ")")
                            _ = _ + F, w = "in descriptor";
                        else if (F === "") {
                            E.push(_), P();
                            return;
                        }
                        else
                            _ = _ + F;
                    else if (w === "after descriptor" && !n(F))
                        if (F === "") {
                            P();
                            return;
                        }
                        else
                            w = "in descriptor", N -= 1;
                    N += 1;
                } }
                function P() { var $ = !1, D, T, m, C, o = {}, h, v, S, b, B; for (C = 0; C < E.length; C++)
                    h = E[C], v = h[h.length - 1], S = h.substring(0, h.length - 1), b = parseInt(S, 10), B = parseFloat(S), g.test(S) && v === "w" ? ((D || T) && ($ = !0), b === 0 ? $ = !0 : D = b) : c.test(S) && v === "x" ? ((D || T || m) && ($ = !0), B < 0 ? $ = !0 : T = B) : g.test(S) && v === "h" ? ((m || T) && ($ = !0), b === 0 ? $ = !0 : m = b) : $ = !0; $ ? a && a.error && a.error("Invalid srcset descriptor found in '" + t + "' at '" + h + "'.") : (o.url = f, D && (o.w = D), T && (o.d = T), m && (o.h = m), x.push(o)); }
            };
        });
    } }), hg = te({ "src/language-html/syntax-attribute.js": function (e, r) {
        "use strict";
        ne();
        var t = yg(), _b = qe().builders, s = _b.ifBreak, a = _b.join, n = _b.line;
        function u(l) { var p = t(l, { logger: { error: function (I) { throw new Error(I); } } }), d = p.some(function (I) { var P = I.w; return P; }), y = p.some(function (I) { var P = I.h; return P; }), g = p.some(function (I) { var P = I.d; return P; }); if (d + y + g > 1)
            throw new Error("Mixed descriptor in srcset is not supported"); var c = d ? "w" : y ? "h" : "d", f = d ? "w" : y ? "h" : "x", E = function (I) { return Math.max.apply(Math, __spreadArray([], __read(I), false)); }, _ = p.map(function (I) { return I.url; }), w = E(_.map(function (I) { return I.length; })), F = p.map(function (I) { return I[c]; }).map(function (I) { return I ? I.toString() : ""; }), N = F.map(function (I) { var P = I.indexOf("."); return P === -1 ? I.length : P; }), x = E(N); return a([",", n], _.map(function (I, P) { var $ = [I], D = F[P]; if (D) {
            var T = w - I.length + 1, m = x - N[P], C = " ".repeat(T + m);
            $.push(s(C, " "), D + f);
        } return $; })); }
        function i(l) { return l.trim().split(/\s+/).join(" "); }
        r.exports = { printImgSrcset: u, printClassNames: i };
    } }), vg = te({ "src/language-html/syntax-vue.js": function (e, r) {
        "use strict";
        ne();
        var t = qe().builders.group;
        function s(i, l) { var _b = a(i), p = _b.left, d = _b.operator, y = _b.right; return [t(l("function _(".concat(p, ") {}"), { parser: "babel", __isVueForBindingLeft: !0 })), " ", d, " ", l(y, { parser: "__js_expression" }, { stripTrailingHardline: !0 })]; }
        function a(i) { var l = /(.*?)\s+(in|of)\s+(.*)/s, p = /,([^,\]}]*)(?:,([^,\]}]*))?$/, d = /^\(|\)$/g, y = i.match(l); if (!y)
            return; var g = {}; if (g.for = y[3].trim(), !g.for)
            return; var c = y[1].trim().replace(d, ""), f = c.match(p); f ? (g.alias = c.replace(p, ""), g.iterator1 = f[1].trim(), f[2] && (g.iterator2 = f[2].trim())) : g.alias = c; var E = [g.alias, g.iterator1, g.iterator2]; if (!E.some(function (_, w) { return !_ && (w === 0 || E.slice(w + 1).some(Boolean)); }))
            return { left: E.filter(Boolean).join(","), operator: y[2], right: g.for }; }
        function n(i, l) { return l("function _(".concat(i, ") {}"), { parser: "babel", __isVueBindings: !0 }); }
        function u(i) { var l = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, p = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, d = i.trim(); return l.test(d) || p.test(d); }
        r.exports = { isVueEventBindingExpression: u, printVueFor: s, printVueBindings: n };
    } }), To = te({ "src/language-html/get-node-content.js": function (e, r) {
        "use strict";
        ne();
        var _b = rr(), t = _b.needsToBorrowParentClosingTagStartMarker, s = _b.printClosingTagStartMarker, a = _b.needsToBorrowLastChildClosingTagEndMarker, n = _b.printClosingTagEndMarker, u = _b.needsToBorrowParentOpeningTagEndMarker, i = _b.printOpeningTagEndMarker;
        function l(p, d) { var y = p.startSourceSpan.end.offset; p.firstChild && u(p.firstChild) && (y -= i(p).length); var g = p.endSourceSpan.start.offset; return p.lastChild && t(p.lastChild) ? g += s(p, d).length : a(p) && (g -= n(p.lastChild, d).length), d.originalText.slice(y, g); }
        r.exports = l;
    } }), Cg = te({ "src/language-html/embed.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.breakParent, s = _h.group, a = _h.hardline, n = _h.indent, u = _h.line, i = _h.fill, l = _h.softline, _j = _b.utils, p = _j.mapDoc, d = _j.replaceTextEndOfLine, y = ru(), _k = rr(), g = _k.printClosingTag, c = _k.printClosingTagSuffix, f = _k.needsToBorrowPrevClosingTagEndMarker, E = _k.printOpeningTagPrefix, _ = _k.printOpeningTag, _q = hg(), w = _q.printImgSrcset, F = _q.printClassNames, _v = vg(), N = _v.printVueFor, x = _v.printVueBindings, I = _v.isVueEventBindingExpression, _w = qt(), P = _w.isScriptLikeTag, $ = _w.isVueNonHtmlBlock, D = _w.inferScriptParser, T = _w.htmlTrimPreserveIndentation, m = _w.dedentString, C = _w.unescapeQuoteEntities, o = _w.isVueSlotAttribute, h = _w.isVueSfcBindingsAttribute, v = _w.getTextValueParts, S = To();
        function b(k, M, R) {
            var e_67, _b;
            var q = function (ee) { return new RegExp(ee.join("|")).test(k.fullName); }, J = function () { return C(k.value); }, L = !1, Q = function (ee, ce) { var W = ee.type === "NGRoot" ? ee.node.type === "NGMicrosyntax" && ee.node.body.length === 1 && ee.node.body[0].type === "NGMicrosyntaxExpression" ? ee.node.body[0].expression : ee.node : ee.type === "JsExpressionRoot" ? ee.node : ee; W && (W.type === "ObjectExpression" || W.type === "ArrayExpression" || ce.parser === "__vue_expression" && (W.type === "TemplateLiteral" || W.type === "StringLiteral")) && (L = !0); }, V = function (ee) { return s(ee); }, j = function (ee) { var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0; return s([n([l, ee]), ce ? l : ""]); }, Y = function (ee) { return L ? V(ee) : j(ee); }, ie = function (ee, ce) { return M(ee, Object.assign({ __onHtmlBindingRoot: Q, __embeddedInHtml: !0 }, ce)); };
            if (k.fullName === "srcset" && (k.parent.fullName === "img" || k.parent.fullName === "source"))
                return j(w(J()));
            if (k.fullName === "class" && !R.parentParser) {
                var ee = J();
                if (!ee.includes("{{"))
                    return F(ee);
            }
            if (k.fullName === "style" && !R.parentParser) {
                var ee = J();
                if (!ee.includes("{{"))
                    return j(ie(ee, { parser: "css", __isHTMLStyleAttribute: !0 }));
            }
            if (R.parser === "vue") {
                if (k.fullName === "v-for")
                    return N(J(), ie);
                if (o(k) || h(k, R))
                    return x(J(), ie);
                var ee = ["^@", "^v-on:"], ce = ["^:", "^v-bind:"], W = ["^v-"];
                if (q(ee)) {
                    var K = J(), de = I(K) ? "__js_expression" : R.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
                    return Y(ie(K, { parser: de }));
                }
                if (q(ce))
                    return Y(ie(J(), { parser: "__vue_expression" }));
                if (q(W))
                    return Y(ie(J(), { parser: "__js_expression" }));
            }
            if (R.parser === "angular") {
                var ee = function (z, U) { return ie(z, Object.assign(Object.assign({}, U), {}, { trailingComma: "none" })); }, ce = ["^\\*"], W = ["^\\(.+\\)$", "^on-"], K = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], de = ["^i18n(-.+)?$"];
                if (q(W))
                    return Y(ee(J(), { parser: "__ng_action" }));
                if (q(K))
                    return Y(ee(J(), { parser: "__ng_binding" }));
                if (q(de)) {
                    var z = J().trim();
                    return j(i(v(k, z)), !z.includes("@@"));
                }
                if (q(ce))
                    return Y(ee(J(), { parser: "__ng_directive" }));
                var ue = /{{(.+?)}}/s, Fe = J();
                if (ue.test(Fe)) {
                    var z = [];
                    try {
                        for (var _h = __values(Fe.split(ue).entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var _k = __read(_j.value, 2), U = _k[0], Z = _k[1];
                            if (U % 2 === 0)
                                z.push(d(Z));
                            else
                                try {
                                    z.push(s(["{{", n([u, ee(Z, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })]), u, "}}"]));
                                }
                                catch (_q) {
                                    z.push("{{", d(Z), "}}");
                                }
                        }
                    }
                    catch (e_67_1) { e_67 = { error: e_67_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                        }
                        finally { if (e_67) throw e_67.error; }
                    }
                    return s(z);
                }
            }
            return null;
        }
        function B(k, M, R, q) { var J = k.getValue(); switch (J.type) {
            case "element": {
                if (P(J) || J.type === "interpolation")
                    return;
                if (!J.isSelfClosing && $(J, q)) {
                    var L = D(J, q);
                    if (!L)
                        return;
                    var Q = S(J, q), V = /^\s*$/.test(Q), j = "";
                    return V || (j = R(T(Q), { parser: L, __embeddedInHtml: !0 }, { stripTrailingHardline: !0 }), V = j === ""), [E(J, q), s(_(k, q, M)), V ? "" : a, j, V ? "" : a, g(J, q), c(J, q)];
                }
                break;
            }
            case "text": {
                if (P(J.parent)) {
                    var L = D(J.parent, q);
                    if (L) {
                        var Q = L === "markdown" ? m(J.value.replace(/^[^\S\n]*\n/, "")) : J.value, V = { parser: L, __embeddedInHtml: !0 };
                        if (q.parser === "html" && L === "babel") {
                            var j = "script", Y = J.parent.attrMap;
                            Y && (Y.type === "module" || Y.type === "text/babel" && Y["data-type"] === "module") && (j = "module"), V.__babelSourceType = j;
                        }
                        return [t, E(J, q), R(Q, V, { stripTrailingHardline: !0 }), c(J, q)];
                    }
                }
                else if (J.parent.type === "interpolation") {
                    var L = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
                    return q.parser === "angular" ? (L.parser = "__ng_interpolation", L.trailingComma = "none") : q.parser === "vue" ? L.parser = q.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : L.parser = "__js_expression", [n([u, R(J.value, L, { stripTrailingHardline: !0 })]), J.parent.next && f(J.parent.next) ? " " : u];
                }
                break;
            }
            case "attribute": {
                if (!J.value)
                    break;
                if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(q.originalText.slice(J.valueSpan.start.offset, J.valueSpan.end.offset)))
                    return [J.rawName, "=", J.value];
                if (q.parser === "lwc" && /^{.*}$/s.test(q.originalText.slice(J.valueSpan.start.offset, J.valueSpan.end.offset)))
                    return [J.rawName, "=", J.value];
                var L = b(J, function (Q, V) { return R(Q, Object.assign({ __isInHtmlAttribute: !0, __embeddedInHtml: !0 }, V), { stripTrailingHardline: !0 }); }, q);
                if (L)
                    return [J.rawName, '="', s(p(L, function (Q) { return typeof Q == "string" ? Q.replace(/"/g, "&quot;") : Q; })), '"'];
                break;
            }
            case "front-matter": return y(J, R);
        } }
        r.exports = B;
    } }), Bo = te({ "src/language-html/print/children.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.breakParent, s = _h.group, a = _h.ifBreak, n = _h.line, u = _h.softline, i = _h.hardline, l = _b.utils.replaceTextEndOfLine, _j = uu(), p = _j.locStart, d = _j.locEnd, _k = qt(), y = _k.forceBreakChildren, g = _k.forceNextEmptyLine, c = _k.isTextLikeNode, f = _k.hasPrettierIgnore, E = _k.preferHardlineAsLeadingSpaces, _q = rr(), _ = _q.printOpeningTagPrefix, w = _q.needsToBorrowNextOpeningTagStartMarker, F = _q.printOpeningTagStartMarker, N = _q.needsToBorrowPrevClosingTagEndMarker, x = _q.printClosingTagEndMarker, I = _q.printClosingTagSuffix, P = _q.needsToBorrowParentClosingTagStartMarker;
        function $(m, C, o) { var h = m.getValue(); return f(h) ? __spreadArray(__spreadArray([_(h, C)], __read(l(C.originalText.slice(p(h) + (h.prev && w(h.prev) ? F(h).length : 0), d(h) - (h.next && N(h.next) ? x(h, C).length : 0)))), false), [I(h, C)], false) : o(); }
        function D(m, C) { return c(m) && c(C) ? m.isTrailingSpaceSensitive ? m.hasTrailingSpaces ? E(C) ? i : n : "" : E(C) ? i : u : w(m) && (f(C) || C.firstChild || C.isSelfClosing || C.type === "element" && C.attrs.length > 0) || m.type === "element" && m.isSelfClosing && N(C) ? "" : !C.isLeadingSpaceSensitive || E(C) || N(C) && m.lastChild && P(m.lastChild) && m.lastChild.lastChild && P(m.lastChild.lastChild) ? i : C.hasLeadingSpaces ? n : u; }
        function T(m, C, o) { var h = m.getValue(); if (y(h))
            return __spreadArray([t], __read(m.map(function (S) { var b = S.getValue(), B = b.prev ? D(b.prev, b) : ""; return [B ? [B, g(b.prev) ? i : ""] : "", $(S, C, o)]; }, "children")), false); var v = h.children.map(function () { return Symbol(""); }); return m.map(function (S, b) { var B = S.getValue(); if (c(B)) {
            if (B.prev && c(B.prev)) {
                var Q = D(B.prev, B);
                if (Q)
                    return g(B.prev) ? [i, i, $(S, C, o)] : [Q, $(S, C, o)];
            }
            return $(S, C, o);
        } var k = [], M = [], R = [], q = [], J = B.prev ? D(B.prev, B) : "", L = B.next ? D(B, B.next) : ""; return J && (g(B.prev) ? k.push(i, i) : J === i ? k.push(i) : c(B.prev) ? M.push(J) : M.push(a("", u, { groupId: v[b - 1] }))), L && (g(B) ? c(B.next) && q.push(i, i) : L === i ? c(B.next) && q.push(i) : R.push(L)), __spreadArray(__spreadArray(__spreadArray([], __read(k), false), [s(__spreadArray(__spreadArray([], __read(M), false), [s(__spreadArray([$(S, C, o)], __read(R), false), { id: v[b] })], false))], false), __read(q), false); }, "children"); }
        r.exports = { printChildren: T };
    } }), Eg = te({ "src/language-html/print/element.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.breakParent, s = _h.dedentToRoot, a = _h.group, n = _h.ifBreak, u = _h.indentIfBreak, i = _h.indent, l = _h.line, p = _h.softline, d = _b.utils.replaceTextEndOfLine, y = To(), _j = qt(), g = _j.shouldPreserveContent, c = _j.isScriptLikeTag, f = _j.isVueCustomBlock, E = _j.countParents, _ = _j.forceBreakContent, _k = rr(), w = _k.printOpeningTagPrefix, F = _k.printOpeningTag, N = _k.printClosingTagSuffix, x = _k.printClosingTag, I = _k.needsToBorrowPrevClosingTagEndMarker, P = _k.needsToBorrowLastChildClosingTagEndMarker, $ = Bo().printChildren;
        function D(T, m, C) { var o = T.getValue(); if (g(o, m))
            return __spreadArray(__spreadArray(__spreadArray([w(o, m), a(F(T, m, C))], __read(d(y(o, m))), false), __read(x(o, m)), false), [N(o, m)], false); var h = o.children.length === 1 && o.firstChild.type === "interpolation" && o.firstChild.isLeadingSpaceSensitive && !o.firstChild.hasLeadingSpaces && o.lastChild.isTrailingSpaceSensitive && !o.lastChild.hasTrailingSpaces, v = Symbol("element-attr-group-id"), S = function (M) { return a([a(F(T, m, C), { id: v }), M, x(o, m)]); }, b = function (M) { return h ? u(M, { groupId: v }) : (c(o) || f(o, m)) && o.parent.type === "root" && m.parser === "vue" && !m.vueIndentScriptAndStyle ? M : i(M); }, B = function () { return h ? n(p, "", { groupId: v }) : o.firstChild.hasLeadingSpaces && o.firstChild.isLeadingSpaceSensitive ? l : o.firstChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive ? s(p) : p; }, k = function () { return (o.next ? I(o.next) : P(o.parent)) ? o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? " " : "" : h ? n(p, "", { groupId: v }) : o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? l : (o.lastChild.type === "comment" || o.lastChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(m.tabWidth * E(T, function (R) { return R.parent && R.parent.type !== "root"; }), "}$")).test(o.lastChild.value) ? "" : p; }; return o.children.length === 0 ? S(o.hasDanglingSpaces && o.isDanglingSpaceSensitive ? l : "") : S([_(o) ? t : "", b([B(), $(T, m, C)]), k()]); }
        r.exports = { printElement: D };
    } }), Fg = te({ "src/language-html/printer-html.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.fill, s = _h.group, a = _h.hardline, n = _h.literalline, _j = _b.utils, u = _j.cleanDoc, i = _j.getDocParts, l = _j.isConcat, p = _j.replaceTextEndOfLine, d = ag(), _k = qt(), y = _k.countChars, g = _k.unescapeQuoteEntities, c = _k.getTextValueParts, f = dg(), E = gg().insertPragma, _q = uu(), _ = _q.locStart, w = _q.locEnd, F = Cg(), _v = rr(), N = _v.printClosingTagSuffix, x = _v.printClosingTagEnd, I = _v.printOpeningTagPrefix, P = _v.printOpeningTagStart, $ = Eg().printElement, D = Bo().printChildren;
        function T(m, C, o) { var h = m.getValue(); switch (h.type) {
            case "front-matter": return p(h.raw);
            case "root": return C.__onHtmlRoot && C.__onHtmlRoot(h), [s(D(m, C, o)), a];
            case "element":
            case "ieConditionalComment": return $(m, C, o);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment": return [P(h), x(h)];
            case "interpolation": return __spreadArray(__spreadArray([P(h, C)], __read(m.map(o, "children")), false), [x(h, C)], false);
            case "text": {
                if (h.parent.type === "interpolation") {
                    var S = /\n[^\S\n]*$/, b = S.test(h.value), B = b ? h.value.replace(S, "") : h.value;
                    return __spreadArray(__spreadArray([], __read(p(B)), false), [b ? a : ""], false);
                }
                var v = u(__spreadArray(__spreadArray([I(h, C)], __read(c(h)), false), [N(h, C)], false));
                return l(v) || v.type === "fill" ? t(i(v)) : v;
            }
            case "docType": return [s([P(h, C), " ", h.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), x(h, C)];
            case "comment": return __spreadArray(__spreadArray([I(h, C)], __read(p(C.originalText.slice(_(h), w(h)), n)), false), [N(h, C)], false);
            case "attribute": {
                if (h.value === null)
                    return h.rawName;
                var v = g(h.value), S = y(v, "'"), b = y(v, '"'), B = S < b ? "'" : '"';
                return __spreadArray(__spreadArray([h.rawName, "=", B], __read(p(B === '"' ? v.replace(/"/g, "&quot;") : v.replace(/'/g, "&apos;"))), false), [B], false);
            }
            default: throw new Error("Unexpected node type ".concat(h.type));
        } }
        r.exports = { preprocess: f, print: T, insertPragma: E, massageAstNode: d, embed: F };
    } }), Ag = te({ "src/language-html/options.js": function (e, r) {
        "use strict";
        ne();
        var t = jt(), s = "HTML";
        r.exports = { bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: s, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: s, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } };
    } }), Sg = te({ "src/language-html/parsers.js": function () { ne(); } }), kn = te({ "node_modules/linguist-languages/data/HTML.json": function (e, r) { r.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 }; } }), xg = te({ "node_modules/linguist-languages/data/Vue.json": function (e, r) { r.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 }; } }), bg = te({ "src/language-html/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = Fg(), a = Ag(), n = Sg(), u = [t(kn(), function () { return ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] }); }), t(kn(), function (l) { return ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: __spreadArray(__spreadArray([], __read(l.extensions), false), [".mjml"], false) }); }), t(kn(), function () { return ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] }); }), t(xg(), function () { return ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }); })], i = { html: s };
        r.exports = { languages: u, printers: i, options: a, parsers: n };
    } }), Tg = te({ "src/language-yaml/pragma.js": function (e, r) {
        "use strict";
        ne();
        function t(n) { return /^\s*@(?:prettier|format)\s*$/.test(n); }
        function s(n) { return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(n); }
        function a(n) {
            return "# @format\n\n".concat(n);
        }
        r.exports = { isPragma: t, hasPragma: s, insertPragma: a };
    } }), Bg = te({ "src/language-yaml/loc.js": function (e, r) {
        "use strict";
        ne();
        function t(a) { return a.position.start.offset; }
        function s(a) { return a.position.end.offset; }
        r.exports = { locStart: t, locEnd: s };
    } }), Ng = te({ "src/language-yaml/embed.js": function (e, r) {
        "use strict";
        ne();
        function t(s, a, n, u) { if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(u.filepath))
            return n(u.originalText, Object.assign(Object.assign({}, u), {}, { parser: "json" })); }
        r.exports = t;
    } }), Mt = te({ "src/language-yaml/utils.js": function (e, r) {
        "use strict";
        ne();
        var _b = Ue(), t = _b.getLast, s = _b.isNonEmptyArray;
        function a(D, T) { var m = 0, C = D.stack.length - 1; for (var o = 0; o < C; o++) {
            var h = D.stack[o];
            n(h) && T(h) && m++;
        } return m; }
        function n(D, T) { return D && typeof D.type == "string" && (!T || T.includes(D.type)); }
        function u(D, T, m) { return T("children" in D ? Object.assign(Object.assign({}, D), {}, { children: D.children.map(function (C) { return u(C, T, D); }) }) : D, m); }
        function i(D, T, m) { Object.defineProperty(D, T, { get: m, enumerable: !1 }); }
        function l(D, T) {
            var m = 0, C = T.length;
            for (var o = D.position.end.offset - 1; o < C; o++) {
                var h = T[o];
                if (h === "\n" && m++, m === 1 && /\S/.test(h))
                    return !1;
                if (m === 2)
                    return !0;
            }
            return !1;
        }
        function p(D) { switch (D.getValue().type) {
            case "tag":
            case "anchor":
            case "comment": return !1;
        } var m = D.stack.length; for (var C = 1; C < m; C++) {
            var o = D.stack[C], h = D.stack[C - 1];
            if (Array.isArray(h) && typeof o == "number" && o !== h.length - 1)
                return !1;
        } return !0; }
        function d(D) { return s(D.children) ? d(t(D.children)) : D; }
        function y(D) { return D.value.trim() === "prettier-ignore"; }
        function g(D) { var T = D.getValue(); if (T.type === "documentBody") {
            var m = D.getParentNode();
            return N(m.head) && y(t(m.head.endComments));
        } return E(T) && y(t(T.leadingComments)); }
        function c(D) { return !s(D.children) && !f(D); }
        function f(D) { return E(D) || _(D) || w(D) || F(D) || N(D); }
        function E(D) { return s(D == null ? void 0 : D.leadingComments); }
        function _(D) { return s(D == null ? void 0 : D.middleComments); }
        function w(D) { return D == null ? void 0 : D.indicatorComment; }
        function F(D) { return D == null ? void 0 : D.trailingComment; }
        function N(D) { return s(D == null ? void 0 : D.endComments); }
        function x(D) {
            var e_68, _b;
            var T = [], m;
            try {
                for (var _h = __values(D.split(/( +)/)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var C = _j.value;
                    C !== " " ? m === " " ? T.push(C) : T.push((T.pop() || "") + C) : m === void 0 && T.unshift(""), m = C;
                }
            }
            catch (e_68_1) { e_68 = { error: e_68_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_68) throw e_68.error; }
            }
            return m === " " && T.push((T.pop() || "") + " "), T[0] === "" && (T.shift(), T.unshift(" " + (T.shift() || ""))), T;
        }
        function I(D, T, m) {
            var C = T.split("\n").map(function (o, h, v) { return h === 0 && h === v.length - 1 ? o : h !== 0 && h !== v.length - 1 ? o.trim() : h === 0 ? o.trimEnd() : o.trimStart(); });
            return m.proseWrap === "preserve" ? C.map(function (o) { return o.length === 0 ? [] : [o]; }) : C.map(function (o) { return o.length === 0 ? [] : x(o); }).reduce(function (o, h, v) { return v !== 0 && C[v - 1].length > 0 && h.length > 0 && !(D === "quoteDouble" && t(t(o)).endsWith("\\")) ? __spreadArray(__spreadArray([], __read(o.slice(0, -1)), false), [__spreadArray(__spreadArray([], __read(t(o)), false), __read(h), false)], false) : __spreadArray(__spreadArray([], __read(o), false), [h], false); }, []).map(function (o) { return m.proseWrap === "never" ? [o.join(" ")] : o; });
        }
        function P(D, T) {
            var m = T.parentIndent, C = T.isLastDescendant, o = T.options, h = D.position.start.line === D.position.end.line ? "" : o.originalText.slice(D.position.start.offset, D.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], v;
            if (D.indent === null) {
                var B = h.match(/^(?<leadingSpace> *)[^\n\r ]/m);
                v = B ? B.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
            }
            else
                v = D.indent - 1 + m;
            var S = h.split("\n").map(function (B) { return B.slice(v); });
            if (o.proseWrap === "preserve" || D.type === "blockLiteral")
                return b(S.map(function (B) { return B.length === 0 ? [] : [B]; }));
            return b(S.map(function (B) { return B.length === 0 ? [] : x(B); }).reduce(function (B, k, M) { return M !== 0 && S[M - 1].length > 0 && k.length > 0 && !/^\s/.test(k[0]) && !/^\s|\s$/.test(t(B)) ? __spreadArray(__spreadArray([], __read(B.slice(0, -1)), false), [__spreadArray(__spreadArray([], __read(t(B)), false), __read(k), false)], false) : __spreadArray(__spreadArray([], __read(B), false), [k], false); }, []).map(function (B) { return B.reduce(function (k, M) { return k.length > 0 && /\s$/.test(t(k)) ? __spreadArray(__spreadArray([], __read(k.slice(0, -1)), false), [t(k) + " " + M], false) : __spreadArray(__spreadArray([], __read(k), false), [M], false); }, []); }).map(function (B) { return o.proseWrap === "never" ? [B.join(" ")] : B; }));
            function b(B) { if (D.chomping === "keep")
                return t(B).length === 0 ? B.slice(0, -1) : B; var k = 0; for (var M = B.length - 1; M >= 0 && B[M].length === 0; M--)
                k++; return k === 0 ? B : k >= 2 && !C ? B.slice(0, -(k - 1)) : B.slice(0, -k); }
        }
        function $(D) { if (!D)
            return !0; switch (D.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence": return !0;
            default: return !1;
        } }
        r.exports = { getLast: t, getAncestorCount: a, isNode: n, isEmptyNode: c, isInlineNode: $, mapNode: u, defineShortcut: i, isNextLineEmpty: l, isLastDescendantNode: p, getBlockValueLineContents: P, getFlowScalarLineContents: I, getLastDescendantNode: d, hasPrettierIgnore: g, hasLeadingComments: E, hasMiddleComments: _, hasIndicatorComment: w, hasTrailingComment: F, hasEndComments: N };
    } }), wg = te({ "src/language-yaml/print-preprocess.js": function (e, r) {
        "use strict";
        ne();
        var _b = Mt(), t = _b.defineShortcut, s = _b.mapNode;
        function a(u) { return s(u, n); }
        function n(u) { switch (u.type) {
            case "document":
                t(u, "head", function () { return u.children[0]; }), t(u, "body", function () { return u.children[1]; });
                break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
                t(u, "content", function () { return u.children[0]; });
                break;
            case "mappingItem":
            case "flowMappingItem":
                t(u, "key", function () { return u.children[0]; }), t(u, "value", function () { return u.children[1]; });
                break;
        } return u; }
        r.exports = a;
    } }), jr = te({ "src/language-yaml/print/misc.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.softline, s = _b.align, _h = Mt(), a = _h.hasEndComments, n = _h.isNextLineEmpty, u = _h.isNode, i = new WeakMap;
        function l(y, g) { var c = y.getValue(), f = y.stack[0], E; return i.has(f) ? E = i.get(f) : (E = new Set, i.set(f, E)), !E.has(c.position.end.line) && (E.add(c.position.end.line), n(c, g) && !p(y.getParentNode())) ? t : ""; }
        function p(y) { return a(y) && !u(y, ["documentHead", "documentBody", "flowMapping", "flowSequence"]); }
        function d(y, g) { return s(" ".repeat(y), g); }
        r.exports = { alignWithSpaces: d, shouldPrintEndComments: p, printNextEmptyLine: l };
    } }), _g = te({ "src/language-yaml/print/flow-mapping-sequence.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.ifBreak, s = _b.line, a = _b.softline, n = _b.hardline, u = _b.join, _h = Mt(), i = _h.isEmptyNode, l = _h.getLast, p = _h.hasEndComments, _j = jr(), d = _j.printNextEmptyLine, y = _j.alignWithSpaces;
        function g(f, E, _) { var w = f.getValue(), F = w.type === "flowMapping", N = F ? "{" : "[", x = F ? "}" : "]", I = a; F && w.children.length > 0 && _.bracketSpacing && (I = s); var P = l(w.children), $ = P && P.type === "flowMappingItem" && i(P.key) && i(P.value); return [N, y(_.tabWidth, [I, c(f, E, _), _.trailingComma === "none" ? "" : t(","), p(w) ? [n, u(n, f.map(E, "endComments"))] : ""]), $ ? "" : I, x]; }
        function c(f, E, _) { var w = f.getValue(); return f.map(function (N, x) { return [E(), x === w.children.length - 1 ? "" : [",", s, w.children[x].position.start.line !== w.children[x + 1].position.start.line ? d(N, _.originalText) : ""]]; }, "children"); }
        r.exports = { printFlowMapping: g, printFlowSequence: g };
    } }), Pg = te({ "src/language-yaml/print/mapping-item.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe().builders, t = _b.conditionalGroup, s = _b.group, a = _b.hardline, n = _b.ifBreak, u = _b.join, i = _b.line, _h = Mt(), l = _h.hasLeadingComments, p = _h.hasMiddleComments, d = _h.hasTrailingComment, y = _h.hasEndComments, g = _h.isNode, c = _h.isEmptyNode, f = _h.isInlineNode, E = jr().alignWithSpaces;
        function _(x, I, P, $, D) { var T = x.key, m = x.value, C = c(T), o = c(m); if (C && o)
            return ": "; var h = $("key"), v = F(x) ? " " : ""; if (o)
            return x.type === "flowMappingItem" && I.type === "flowMapping" ? h : x.type === "mappingItem" && w(T.content, D) && !d(T.content) && (!I.tag || I.tag.value !== "tag:yaml.org,2002:set") ? [h, v, ":"] : ["? ", E(2, h)]; var S = $("value"); if (C)
            return [": ", E(2, S)]; if (l(m) || !f(T.content))
            return ["? ", E(2, h), a, u("", P.map($, "value", "leadingComments").map(function (q) { return [q, a]; })), ": ", E(2, S)]; if (N(T.content) && !l(T.content) && !p(T.content) && !d(T.content) && !y(T) && !l(m.content) && !p(m.content) && !y(m) && w(m.content, D))
            return [h, v, ": ", S]; var b = Symbol("mappingKey"), B = s([n("? "), s(E(2, h), { id: b })]), k = [a, ": ", E(2, S)], M = [v, ":"]; l(m.content) || y(m) && m.content && !g(m.content, ["mapping", "sequence"]) || I.type === "mapping" && d(T.content) && f(m.content) || g(m.content, ["mapping", "sequence"]) && m.content.tag === null && m.content.anchor === null ? M.push(a) : m.content && M.push(i), M.push(S); var R = E(D.tabWidth, M); return w(T.content, D) && !l(T.content) && !p(T.content) && !y(T) ? t([[h, R]]) : t([[B, n(k, R, { groupId: b })]]); }
        function w(x, I) {
            if (!x)
                return !0;
            switch (x.type) {
                case "plain":
                case "quoteSingle":
                case "quoteDouble": break;
                case "alias": return !0;
                default: return !1;
            }
            if (I.proseWrap === "preserve")
                return x.position.start.line === x.position.end.line;
            if (/\\$/m.test(I.originalText.slice(x.position.start.offset, x.position.end.offset)))
                return !1;
            switch (I.proseWrap) {
                case "never": return !x.value.includes("\n");
                case "always": return !/[\n ]/.test(x.value);
                default: return !1;
            }
        }
        function F(x) { return x.key.content && x.key.content.type === "alias"; }
        function N(x) { if (!x)
            return !0; switch (x.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle": return x.position.start.line === x.position.end.line;
            case "alias": return !0;
            default: return !1;
        } }
        r.exports = _;
    } }), Ig = te({ "src/language-yaml/print/block.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.dedent, s = _h.dedentToRoot, a = _h.fill, n = _h.hardline, u = _h.join, i = _h.line, l = _h.literalline, p = _h.markAsRoot, d = _b.utils.getDocParts, _j = Mt(), y = _j.getAncestorCount, g = _j.getBlockValueLineContents, c = _j.hasIndicatorComment, f = _j.isLastDescendantNode, E = _j.isNode, _ = jr().alignWithSpaces;
        function w(F, N, x) {
            var e_69, _b;
            var I = F.getValue(), P = y(F, function (C) { return E(C, ["sequence", "mapping"]); }), $ = f(F), D = [I.type === "blockFolded" ? ">" : "|"];
            I.indent !== null && D.push(I.indent.toString()), I.chomping !== "clip" && D.push(I.chomping === "keep" ? "+" : "-"), c(I) && D.push(" ", N("indicatorComment"));
            var T = g(I, { parentIndent: P, isLastDescendant: $, options: x }), m = [];
            try {
                for (var _h = __values(T.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), C = _k[0], o = _k[1];
                    C === 0 && m.push(n), m.push(a(d(u(i, o)))), C !== T.length - 1 ? m.push(o.length === 0 ? n : p(l)) : I.chomping === "keep" && $ && m.push(s(o.length === 0 ? n : l));
                }
            }
            catch (e_69_1) { e_69 = { error: e_69_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_69) throw e_69.error; }
            }
            return I.indent === null ? D.push(t(_(x.tabWidth, m))) : D.push(s(_(I.indent - 1 + P, m))), D;
        }
        r.exports = w;
    } }), kg = te({ "src/language-yaml/printer-yaml.js": function (e, r) {
        "use strict";
        ne();
        var _b = qe(), _h = _b.builders, t = _h.breakParent, s = _h.fill, a = _h.group, n = _h.hardline, u = _h.join, i = _h.line, l = _h.lineSuffix, p = _h.literalline, _j = _b.utils, d = _j.getDocParts, y = _j.replaceTextEndOfLine, g = Ue().isPreviousLineEmpty, _k = Tg(), c = _k.insertPragma, f = _k.isPragma, E = Bg().locStart, _ = Ng(), _q = Mt(), w = _q.getFlowScalarLineContents, F = _q.getLastDescendantNode, N = _q.hasLeadingComments, x = _q.hasMiddleComments, I = _q.hasTrailingComment, P = _q.hasEndComments, $ = _q.hasPrettierIgnore, D = _q.isLastDescendantNode, T = _q.isNode, m = _q.isInlineNode, C = wg(), _v = jr(), o = _v.alignWithSpaces, h = _v.printNextEmptyLine, v = _v.shouldPrintEndComments, _w = _g(), S = _w.printFlowMapping, b = _w.printFlowSequence, B = Pg(), k = Ig();
        function M(j, Y, ie) { var ee = j.getValue(), ce = []; ee.type !== "mappingValue" && N(ee) && ce.push([u(n, j.map(ie, "leadingComments")), n]); var W = ee.tag, K = ee.anchor; W && ce.push(ie("tag")), W && K && ce.push(" "), K && ce.push(ie("anchor")); var de = ""; T(ee, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !D(j) && (de = h(j, Y.originalText)), (W || K) && (T(ee, ["sequence", "mapping"]) && !x(ee) ? ce.push(n) : ce.push(" ")), x(ee) && ce.push([ee.middleComments.length === 1 ? "" : n, u(n, j.map(ie, "middleComments")), n]); var ue = j.getParentNode(); return $(j) ? ce.push(y(Y.originalText.slice(ee.position.start.offset, ee.position.end.offset).trimEnd(), p)) : ce.push(a(R(ee, ue, j, Y, ie))), I(ee) && !T(ee, ["document", "documentHead"]) && ce.push(l([ee.type === "mappingValue" && !ee.content ? "" : " ", ue.type === "mappingKey" && j.getParentNode(2).type === "mapping" && m(ee) ? "" : t, ie("trailingComment")])), v(ee) && ce.push(o(ee.type === "sequenceItem" ? 2 : 0, [n, u(n, j.map(function (Fe) { return [g(Y.originalText, Fe.getValue(), E) ? n : "", ie()]; }, "endComments"))])), ce.push(de), ce; }
        function R(j, Y, ie, ee, ce) { switch (j.type) {
            case "root": {
                var W_1 = j.children, K_1 = [];
                ie.each(function (ue, Fe) { var z = W_1[Fe], U = W_1[Fe + 1]; Fe !== 0 && K_1.push(n), K_1.push(ce()), J(z, U) ? (K_1.push(n, "..."), I(z) && K_1.push(" ", ce("trailingComment"))) : U && !I(U.head) && K_1.push(n, "---"); }, "children");
                var de = F(j);
                return (!T(de, ["blockLiteral", "blockFolded"]) || de.chomping !== "keep") && K_1.push(n), K_1;
            }
            case "document": {
                var W = Y.children[ie.getName() + 1], K = [];
                return L(j, W, Y, ee) === "head" && ((j.head.children.length > 0 || j.head.endComments.length > 0) && K.push(ce("head")), I(j.head) ? K.push(["---", " ", ce(["head", "trailingComment"])]) : K.push("---")), q(j) && K.push(ce("body")), u(n, K);
            }
            case "documentHead": return u(n, __spreadArray(__spreadArray([], __read(ie.map(ce, "children")), false), __read(ie.map(ce, "endComments")), false));
            case "documentBody": {
                var W = j.children, K = j.endComments, de = "";
                if (W.length > 0 && K.length > 0) {
                    var ue = F(j);
                    T(ue, ["blockFolded", "blockLiteral"]) ? ue.chomping !== "keep" && (de = [n, n]) : de = n;
                }
                return [u(n, ie.map(ce, "children")), de, u(n, ie.map(ce, "endComments"))];
            }
            case "directive": return ["%", u(" ", __spreadArray([j.name], __read(j.parameters), false))];
            case "comment": return ["#", j.value];
            case "alias": return ["*", j.value];
            case "tag": return ee.originalText.slice(j.position.start.offset, j.position.end.offset);
            case "anchor": return ["&", j.value];
            case "plain": return Q(j.type, ee.originalText.slice(j.position.start.offset, j.position.end.offset), ee);
            case "quoteDouble":
            case "quoteSingle": {
                var W = "'", K = '"', de = ee.originalText.slice(j.position.start.offset + 1, j.position.end.offset - 1);
                if (j.type === "quoteSingle" && de.includes("\\") || j.type === "quoteDouble" && /\\[^"]/.test(de)) {
                    var Fe = j.type === "quoteDouble" ? K : W;
                    return [Fe, Q(j.type, de, ee), Fe];
                }
                if (de.includes(K))
                    return [W, Q(j.type, j.type === "quoteDouble" ? de.replace(/\\"/g, K).replace(/'/g, W.repeat(2)) : de, ee), W];
                if (de.includes(W))
                    return [K, Q(j.type, j.type === "quoteSingle" ? de.replace(/''/g, W) : de, ee), K];
                var ue = ee.singleQuote ? W : K;
                return [ue, Q(j.type, de, ee), ue];
            }
            case "blockFolded":
            case "blockLiteral": return k(ie, ce, ee);
            case "mapping":
            case "sequence": return u(n, ie.map(ce, "children"));
            case "sequenceItem": return ["- ", o(2, j.content ? ce("content") : "")];
            case "mappingKey":
            case "mappingValue": return j.content ? ce("content") : "";
            case "mappingItem":
            case "flowMappingItem": return B(j, Y, ie, ce, ee);
            case "flowMapping": return S(ie, ce, ee);
            case "flowSequence": return b(ie, ce, ee);
            case "flowSequenceItem": return ce("content");
            default: throw new Error("Unexpected node type ".concat(j.type));
        } }
        function q(j) { return j.body.children.length > 0 || P(j.body); }
        function J(j, Y) { return I(j) || Y && (Y.head.children.length > 0 || P(Y.head)); }
        function L(j, Y, ie, ee) { return ie.children[0] === j && /---(?:\s|$)/.test(ee.originalText.slice(E(j), E(j) + 4)) || j.head.children.length > 0 || P(j.head) || I(j.head) ? "head" : J(j, Y) ? !1 : Y ? "root" : !1; }
        function Q(j, Y, ie) { var ee = w(j, Y, ie); return u(n, ee.map(function (ce) { return s(d(u(i, ce))); })); }
        function V(j, Y) { if (T(Y))
            switch (delete Y.position, Y.type) {
                case "comment":
                    if (f(Y.value))
                        return null;
                    break;
                case "quoteDouble":
                case "quoteSingle":
                    Y.type = "quote";
                    break;
            } }
        r.exports = { preprocess: C, embed: _, print: M, massageAstNode: V, insertPragma: c };
    } }), Lg = te({ "src/language-yaml/options.js": function (e, r) {
        "use strict";
        ne();
        var t = jt();
        r.exports = { bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap };
    } }), Og = te({ "src/language-yaml/parsers.js": function () { ne(); } }), jg = te({ "node_modules/linguist-languages/data/YAML.json": function (e, r) { r.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 }; } }), qg = te({ "src/language-yaml/index.js": function (e, r) {
        "use strict";
        ne();
        var t = wt(), s = kg(), a = Lg(), n = Og(), u = [t(jg(), function (i) { return ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: __spreadArray(__spreadArray([], __read(i.filenames.filter(function (l) { return l !== "yarn.lock"; })), false), [".prettierrc", ".stylelintrc", ".lintstagedrc"], false) }); })];
        r.exports = { languages: u, printers: { yaml: s }, options: a, parsers: n };
    } }), Mg = te({ "src/languages.js": function (e, r) {
        "use strict";
        ne(), r.exports = [vd(), jd(), Gd(), Qd(), ig(), bg(), qg()];
    } }), Rg = te({ "src/standalone.js": function (e, r) { ne(); var t = xa().version, s = Om(), a = Un().getSupportInfo, n = jm(), u = Mg(), i = qe(); function l(d) { var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1; return function () { for (var g = arguments.length, c = new Array(g), f = 0; f < g; f++)
        c[f] = arguments[f]; var E = c[y] || {}, _ = E.plugins || []; return c[y] = Object.assign(Object.assign({}, E), {}, { plugins: __spreadArray(__spreadArray([], __read(u), false), __read(Array.isArray(_) ? _ : Object.values(_)), false) }), d.apply(void 0, __spreadArray([], __read(c), false)); }; } var p = l(s.formatWithCursor); r.exports = { formatWithCursor: p, format: function (d, y) { return p(d, y).formatted; }, check: function (d, y) { var g = p(d, y).formatted; return g === d; }, doc: i, getSupportInfo: l(a, 0), version: t, util: n, __debug: { parse: l(s.parse), formatAST: l(s.formatAST), formatDoc: l(s.formatDoc), printToDoc: l(s.printToDoc), printDocToString: l(s.printDocToString) } }; } }), Ty = Rg();
exports.default = Ty;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
