try {
  self["workbox:core:6.5.0"] && _();
} catch (e) {}
const e = (e, ...a) => {
  let s = e;
  return a.length > 0 && (s += ` :: ${JSON.stringify(a)}`), s;
};
class a extends Error {
  constructor(a, s) {
    super(e(a, s)), (this.name = a), (this.details = s);
  }
}
const s = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: "undefined" != typeof registration ? registration.scope : "",
  },
  i = (e) => [s.prefix, e, s.suffix].filter((e) => e && e.length > 0).join("-"),
  r = (e) => {
    ((e) => {
      for (const a of Object.keys(s)) e(a);
    })((a) => {
      "string" == typeof e[a] && (s[a] = e[a]);
    });
  },
  c = (e) => e || i(s.precache),
  t = (e) => e || i(s.runtime);
try {
  self["workbox:routing:6.5.0"] && _();
} catch (e) {}
const d = (e) => (e && "object" == typeof e ? e : { handle: e });
class f {
  constructor(e, a, s = "GET") {
    (this.handler = d(a)), (this.match = e), (this.method = s);
  }
  setCatchHandler(e) {
    this.catchHandler = d(e);
  }
}
class n extends f {
  constructor(e, a, s) {
    super(
      ({ url: a }) => {
        const s = e.exec(a.href);
        if (s && (a.origin === location.origin || 0 === s.index))
          return s.slice(1);
      },
      a,
      s
    );
  }
}
class o {
  constructor() {
    (this.i = new Map()), (this.t = new Map());
  }
  get routes() {
    return this.i;
  }
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: a } = e,
        s = this.handleRequest({ request: a, event: e });
      s && e.respondWith(s);
    });
  }
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && "CACHE_URLS" === e.data.type) {
        const { payload: a } = e.data,
          s = Promise.all(
            a.urlsToCache.map((a) => {
              "string" == typeof a && (a = [a]);
              const s = new Request(...a);
              return this.handleRequest({ request: s, event: e });
            })
          );
        e.waitUntil(s),
          e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  handleRequest({ request: e, event: a }) {
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http")) return;
    const i = s.origin === location.origin,
      { params: r, route: c } = this.findMatchingRoute({
        event: a,
        request: e,
        sameOrigin: i,
        url: s,
      });
    let t = c && c.handler;
    const d = e.method;
    if ((!t && this.t.has(d) && (t = this.t.get(d)), !t)) return;
    let f;
    try {
      f = t.handle({ url: s, request: e, event: a, params: r });
    } catch (e) {
      f = Promise.reject(e);
    }
    const n = c && c.catchHandler;
    return (
      f instanceof Promise &&
        (this.o || n) &&
        (f = f.catch(async (i) => {
          if (n)
            try {
              return await n.handle({
                url: s,
                request: e,
                event: a,
                params: r,
              });
            } catch (e) {
              e instanceof Error && (i = e);
            }
          if (this.o) return this.o.handle({ url: s, request: e, event: a });
          throw i;
        })),
      f
    );
  }
  findMatchingRoute({ url: e, sameOrigin: a, request: s, event: i }) {
    const r = this.i.get(s.method) || [];
    for (const c of r) {
      let r;
      const t = c.match({ url: e, sameOrigin: a, request: s, event: i });
      if (t)
        return (
          (r = t),
          ((Array.isArray(r) && 0 === r.length) ||
            (t.constructor === Object && 0 === Object.keys(t).length) ||
            "boolean" == typeof t) &&
            (r = void 0),
          { route: c, params: r }
        );
    }
    return {};
  }
  setDefaultHandler(e, a = "GET") {
    this.t.set(a, d(e));
  }
  setCatchHandler(e) {
    this.o = d(e);
  }
  registerRoute(e) {
    this.i.has(e.method) || this.i.set(e.method, []),
      this.i.get(e.method).push(e);
  }
  unregisterRoute(e) {
    if (!this.i.has(e.method))
      throw new a("unregister-route-but-not-found-with-method", {
        method: e.method,
      });
    const s = this.i.get(e.method).indexOf(e);
    if (!(s > -1)) throw new a("unregister-route-route-not-registered");
    this.i.get(e.method).splice(s, 1);
  }
}
let b;
function l(e, a) {
  const s = a();
  return e.waitUntil(s), s;
}
try {
  self["workbox:precaching:6.5.0"] && _();
} catch (e) {}
function u(e) {
  if (!e) throw new a("add-to-cache-list-unexpected-type", { entry: e });
  if ("string" == typeof e) {
    const a = new URL(e, location.href);
    return { cacheKey: a.href, url: a.href };
  }
  const { revision: s, url: i } = e;
  if (!i) throw new a("add-to-cache-list-unexpected-type", { entry: e });
  if (!s) {
    const e = new URL(i, location.href);
    return { cacheKey: e.href, url: e.href };
  }
  const r = new URL(i, location.href),
    c = new URL(i, location.href);
  return (
    r.searchParams.set("__WB_REVISION__", s), { cacheKey: r.href, url: c.href }
  );
}
class h {
  constructor() {
    (this.updatedURLs = []),
      (this.notUpdatedURLs = []),
      (this.handlerWillStart = async ({ request: e, state: a }) => {
        a && (a.originalRequest = e);
      }),
      (this.cachedResponseWillBeUsed = async ({
        event: e,
        state: a,
        cachedResponse: s,
      }) => {
        if (
          "install" === e.type &&
          a &&
          a.originalRequest &&
          a.originalRequest instanceof Request
        ) {
          const e = a.originalRequest.url;
          s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e);
        }
        return s;
      });
  }
}
class g {
  constructor({ precacheController: e }) {
    (this.cacheKeyWillBeUsed = async ({ request: e, params: a }) => {
      const s =
        (null == a ? void 0 : a.cacheKey) || this.l.getCacheKeyForURL(e.url);
      return s ? new Request(s, { headers: e.headers }) : e;
    }),
      (this.l = e);
  }
}
let v;
async function m(e, s) {
  let i = null;
  if (e.url) {
    i = new URL(e.url).origin;
  }
  if (i !== self.location.origin)
    throw new a("cross-origin-copy-response", { origin: i });
  const r = e.clone(),
    c = {
      headers: new Headers(r.headers),
      status: r.status,
      statusText: r.statusText,
    },
    t = s ? s(c) : c,
    d = (function () {
      if (void 0 === v) {
        const e = new Response("");
        if ("body" in e)
          try {
            new Response(e.body), (v = !0);
          } catch (e) {
            v = !1;
          }
        v = !1;
      }
      return v;
    })()
      ? r.body
      : await r.blob();
  return new Response(d, t);
}
function p(e, a) {
  const s = new URL(e);
  for (const e of a) s.searchParams.delete(e);
  return s.href;
}
class j {
  constructor() {
    this.promise = new Promise((e, a) => {
      (this.resolve = e), (this.reject = a);
    });
  }
}
const w = new Set();
try {
  self["workbox:strategies:6.5.0"] && _();
} catch (e) {}
function y(e) {
  return "string" == typeof e ? new Request(e) : e;
}
class x {
  constructor(e, a) {
    (this.u = {}),
      Object.assign(this, a),
      (this.event = a.event),
      (this.h = e),
      (this.g = new j()),
      (this.v = []),
      (this.m = [...e.plugins]),
      (this.p = new Map());
    for (const e of this.m) this.p.set(e, {});
    this.event.waitUntil(this.g.promise);
  }
  async fetch(e) {
    const { event: s } = this;
    let i = y(e);
    if ("navigate" === i.mode && s instanceof FetchEvent && s.preloadResponse) {
      const e = await s.preloadResponse;
      if (e) return e;
    }
    const r = this.hasCallback("fetchDidFail") ? i.clone() : null;
    try {
      for (const e of this.iterateCallbacks("requestWillFetch"))
        i = await e({ request: i.clone(), event: s });
    } catch (e) {
      if (e instanceof Error)
        throw new a("plugin-error-request-will-fetch", {
          thrownErrorMessage: e.message,
        });
    }
    const c = i.clone();
    try {
      let e;
      e = await fetch(i, "navigate" === i.mode ? void 0 : this.h.fetchOptions);
      for (const a of this.iterateCallbacks("fetchDidSucceed"))
        e = await a({ event: s, request: c, response: e });
      return e;
    } catch (e) {
      throw (
        (r &&
          (await this.runCallbacks("fetchDidFail", {
            error: e,
            event: s,
            originalRequest: r.clone(),
            request: c.clone(),
          })),
        e)
      );
    }
  }
  async fetchAndCachePut(e) {
    const a = await this.fetch(e),
      s = a.clone();
    return this.waitUntil(this.cachePut(e, s)), a;
  }
  async cacheMatch(e) {
    const a = y(e);
    let s;
    const { cacheName: i, matchOptions: r } = this.h,
      c = await this.getCacheKey(a, "read"),
      t = Object.assign(Object.assign({}, r), { cacheName: i });
    s = await caches.match(c, t);
    for (const e of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s =
        (await e({
          cacheName: i,
          matchOptions: r,
          cachedResponse: s,
          request: c,
          event: this.event,
        })) || void 0;
    return s;
  }
  async cachePut(e, s) {
    const i = y(e);
    var r;
    await ((r = 0), new Promise((e) => setTimeout(e, r)));
    const c = await this.getCacheKey(i, "write");
    if (!s)
      throw new a("cache-put-with-no-response", {
        url:
          ((t = c.url),
          new URL(String(t), location.href).href.replace(
            new RegExp(`^${location.origin}`),
            ""
          )),
      });
    var t;
    const d = await this.j(s);
    if (!d) return !1;
    const { cacheName: f, matchOptions: n } = this.h,
      o = await self.caches.open(f),
      b = this.hasCallback("cacheDidUpdate"),
      l = b
        ? await (async function (e, a, s, i) {
            const r = p(a.url, s);
            if (a.url === r) return e.match(a, i);
            const c = Object.assign(Object.assign({}, i), { ignoreSearch: !0 }),
              t = await e.keys(a, c);
            for (const a of t) if (r === p(a.url, s)) return e.match(a, i);
          })(o, c.clone(), ["__WB_REVISION__"], n)
        : null;
    try {
      await o.put(c, b ? d.clone() : d);
    } catch (e) {
      if (e instanceof Error)
        throw (
          ("QuotaExceededError" === e.name &&
            (await (async function () {
              for (const e of w) await e();
            })()),
          e)
        );
    }
    for (const e of this.iterateCallbacks("cacheDidUpdate"))
      await e({
        cacheName: f,
        oldResponse: l,
        newResponse: d.clone(),
        request: c,
        event: this.event,
      });
    return !0;
  }
  async getCacheKey(e, a) {
    const s = `${e.url} | ${a}`;
    if (!this.u[s]) {
      let i = e;
      for (const e of this.iterateCallbacks("cacheKeyWillBeUsed"))
        i = y(
          await e({
            mode: a,
            request: i,
            event: this.event,
            params: this.params,
          })
        );
      this.u[s] = i;
    }
    return this.u[s];
  }
  hasCallback(e) {
    for (const a of this.h.plugins) if (e in a) return !0;
    return !1;
  }
  async runCallbacks(e, a) {
    for (const s of this.iterateCallbacks(e)) await s(a);
  }
  *iterateCallbacks(e) {
    for (const a of this.h.plugins)
      if ("function" == typeof a[e]) {
        const s = this.p.get(a),
          i = (i) => {
            const r = Object.assign(Object.assign({}, i), { state: s });
            return a[e](r);
          };
        yield i;
      }
  }
  waitUntil(e) {
    return this.v.push(e), e;
  }
  async doneWaiting() {
    let e;
    for (; (e = this.v.shift()); ) await e;
  }
  destroy() {
    this.g.resolve(null);
  }
  async j(e) {
    let a = e,
      s = !1;
    for (const e of this.iterateCallbacks("cacheWillUpdate"))
      if (
        ((a =
          (await e({
            request: this.request,
            response: a,
            event: this.event,
          })) || void 0),
        (s = !0),
        !a)
      )
        break;
    return s || (a && 200 !== a.status && (a = void 0)), a;
  }
}
class k extends class {
  constructor(e = {}) {
    (this.cacheName = t(e.cacheName)),
      (this.plugins = e.plugins || []),
      (this.fetchOptions = e.fetchOptions),
      (this.matchOptions = e.matchOptions);
  }
  handle(e) {
    const [a] = this.handleAll(e);
    return a;
  }
  handleAll(e) {
    e instanceof FetchEvent && (e = { event: e, request: e.request });
    const a = e.event,
      s = "string" == typeof e.request ? new Request(e.request) : e.request,
      i = "params" in e ? e.params : void 0,
      r = new x(this, { event: a, request: s, params: i }),
      c = this.k(r, s, a);
    return [c, this.T(c, r, s, a)];
  }
  async k(e, s, i) {
    let r;
    await e.runCallbacks("handlerWillStart", { event: i, request: s });
    try {
      if (((r = await this.R(s, e)), !r || "error" === r.type))
        throw new a("no-response", { url: s.url });
    } catch (a) {
      if (a instanceof Error)
        for (const c of e.iterateCallbacks("handlerDidError"))
          if (((r = await c({ error: a, event: i, request: s })), r)) break;
      if (!r) throw a;
    }
    for (const a of e.iterateCallbacks("handlerWillRespond"))
      r = await a({ event: i, request: s, response: r });
    return r;
  }
  async T(e, a, s, i) {
    let r, c;
    try {
      r = await e;
    } catch (c) {}
    try {
      await a.runCallbacks("handlerDidRespond", {
        event: i,
        request: s,
        response: r,
      }),
        await a.doneWaiting();
    } catch (e) {
      e instanceof Error && (c = e);
    }
    if (
      (await a.runCallbacks("handlerDidComplete", {
        event: i,
        request: s,
        response: r,
        error: c,
      }),
      a.destroy(),
      c)
    )
      throw c;
  }
} {
  constructor(e = {}) {
    (e.cacheName = c(e.cacheName)),
      super(e),
      (this._ = !1 !== e.fallbackToNetwork),
      this.plugins.push(k.copyRedirectedCacheableResponsesPlugin);
  }
  async R(e, a) {
    const s = await a.cacheMatch(e);
    return (
      s ||
      (a.event && "install" === a.event.type
        ? await this.K(e, a)
        : await this.S(e, a))
    );
  }
  async S(e, s) {
    let i;
    const r = s.params || {};
    if (!this._)
      throw new a("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url,
      });
    {
      const a = r.integrity,
        c = e.integrity,
        t = !c || c === a;
      (i = await s.fetch(new Request(e, { integrity: c || a }))),
        a && t && (this.C(), await s.cachePut(e, i.clone()));
    }
    return i;
  }
  async K(e, s) {
    this.C();
    const i = await s.fetch(e);
    if (!(await s.cachePut(e, i.clone())))
      throw new a("bad-precaching-response", { url: e.url, status: i.status });
    return i;
  }
  C() {
    let e = null,
      a = 0;
    for (const [s, i] of this.plugins.entries())
      i !== k.copyRedirectedCacheableResponsesPlugin &&
        (i === k.defaultPrecacheCacheabilityPlugin && (e = s),
        i.cacheWillUpdate && a++);
    0 === a
      ? this.plugins.push(k.defaultPrecacheCacheabilityPlugin)
      : a > 1 && null !== e && this.plugins.splice(e, 1);
  }
}
(k.defaultPrecacheCacheabilityPlugin = {
  cacheWillUpdate: async ({ response: e }) =>
    !e || e.status >= 400 ? null : e,
}),
  (k.copyRedirectedCacheableResponsesPlugin = {
    cacheWillUpdate: async ({ response: e }) => (e.redirected ? await m(e) : e),
  });
class z {
  constructor({
    cacheName: e,
    plugins: a = [],
    fallbackToNetwork: s = !0,
  } = {}) {
    (this.X = new Map()),
      (this.M = new Map()),
      (this.q = new Map()),
      (this.h = new k({
        cacheName: c(e),
        plugins: [...a, new g({ precacheController: this })],
        fallbackToNetwork: s,
      })),
      (this.install = this.install.bind(this)),
      (this.activate = this.activate.bind(this));
  }
  get strategy() {
    return this.h;
  }
  precache(e) {
    this.addToCacheList(e),
      this.L ||
        (self.addEventListener("install", this.install),
        self.addEventListener("activate", this.activate),
        (this.L = !0));
  }
  addToCacheList(e) {
    const s = [];
    for (const i of e) {
      "string" == typeof i
        ? s.push(i)
        : i && void 0 === i.revision && s.push(i.url);
      const { cacheKey: e, url: r } = u(i),
        c = "string" != typeof i && i.revision ? "reload" : "default";
      if (this.X.has(r) && this.X.get(r) !== e)
        throw new a("add-to-cache-list-conflicting-entries", {
          firstEntry: this.X.get(r),
          secondEntry: e,
        });
      if ("string" != typeof i && i.integrity) {
        if (this.q.has(e) && this.q.get(e) !== i.integrity)
          throw new a("add-to-cache-list-conflicting-integrities", { url: r });
        this.q.set(e, i.integrity);
      }
      if ((this.X.set(r, e), this.M.set(r, c), s.length > 0)) {
        const e = `Workbox is precaching URLs without revision info: ${s.join(
          ", "
        )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(e);
      }
    }
  }
  install(e) {
    return l(e, async () => {
      const a = new h();
      this.strategy.plugins.push(a);
      for (const [a, s] of this.X) {
        const i = this.q.get(s),
          r = this.M.get(a),
          c = new Request(a, {
            integrity: i,
            cache: r,
            credentials: "same-origin",
          });
        await Promise.all(
          this.strategy.handleAll({
            params: { cacheKey: s },
            request: c,
            event: e,
          })
        );
      }
      const { updatedURLs: s, notUpdatedURLs: i } = a;
      return { updatedURLs: s, notUpdatedURLs: i };
    });
  }
  activate(e) {
    return l(e, async () => {
      const e = await self.caches.open(this.strategy.cacheName),
        a = await e.keys(),
        s = new Set(this.X.values()),
        i = [];
      for (const r of a) s.has(r.url) || (await e.delete(r), i.push(r.url));
      return { deletedURLs: i };
    });
  }
  getURLsToCacheKeys() {
    return this.X;
  }
  getCachedURLs() {
    return [...this.X.keys()];
  }
  getCacheKeyForURL(e) {
    const a = new URL(e, location.href);
    return this.X.get(a.href);
  }
  getIntegrityForCacheKey(e) {
    return this.q.get(e);
  }
  async matchPrecache(e) {
    const a = e instanceof Request ? e.url : e,
      s = this.getCacheKeyForURL(a);
    if (s) {
      return (await self.caches.open(this.strategy.cacheName)).match(s);
    }
  }
  createHandlerBoundToURL(e) {
    const s = this.getCacheKeyForURL(e);
    if (!s) throw new a("non-precached-url", { url: e });
    return (a) => (
      (a.request = new Request(e)),
      (a.params = Object.assign({ cacheKey: s }, a.params)),
      this.strategy.handle(a)
    );
  }
}
let T;
const R = () => (T || (T = new z()), T);
class K extends f {
  constructor(e, a) {
    super(({ request: s }) => {
      const i = e.getURLsToCacheKeys();
      for (const r of (function* (
        e,
        {
          ignoreURLParametersMatching: a = [/^utm_/, /^fbclid$/],
          directoryIndex: s = "index.html",
          cleanURLs: i = !0,
          urlManipulation: r,
        } = {}
      ) {
        const c = new URL(e, location.href);
        (c.hash = ""), yield c.href;
        const t = (function (e, a = []) {
          for (const s of [...e.searchParams.keys()])
            a.some((e) => e.test(s)) && e.searchParams.delete(s);
          return e;
        })(c, a);
        if ((yield t.href, s && t.pathname.endsWith("/"))) {
          const e = new URL(t.href);
          (e.pathname += s), yield e.href;
        }
        if (i) {
          const e = new URL(t.href);
          (e.pathname += ".html"), yield e.href;
        }
        if (r) {
          const e = r({ url: c });
          for (const a of e) yield a.href;
        }
      })(s.url, a)) {
        const a = i.get(r);
        if (a) {
          return { cacheKey: a, integrity: e.getIntegrityForCacheKey(a) };
        }
      }
    }, e.strategy);
  }
}
function S(e) {
  const s = R();
  !(function (e, s, i) {
    let r;
    if ("string" == typeof e) {
      const a = new URL(e, location.href);
      r = new f(({ url: e }) => e.href === a.href, s, i);
    } else if (e instanceof RegExp) r = new n(e, s, i);
    else if ("function" == typeof e) r = new f(e, s, i);
    else {
      if (!(e instanceof f))
        throw new a("unsupported-route-type", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture",
        });
      r = e;
    }
    (b || ((b = new o()), b.addFetchListener(), b.addCacheListener()),
    b).registerRoute(r);
  })(new K(s, e));
}
var C;
r({ prefix: "mr-hope" }),
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
  self.addEventListener("activate", () => self.clients.claim()),
  (C = {}),
  (function (e) {
    R().precache(e);
  })([]),
  S(C),
  self.addEventListener("activate", (e) => {
    const a = c();
    e.waitUntil(
      (async (e, a = "-precache-") => {
        const s = (await self.caches.keys()).filter(
          (s) => s.includes(a) && s.includes(self.registration.scope) && s !== e
        );
        return await Promise.all(s.map((e) => self.caches.delete(e))), s;
      })(a).then((e) => {})
    );
  });
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
