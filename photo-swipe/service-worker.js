if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,o,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(o.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.dc292005.css",revision:"70fcbe4e0eb54a8dfc1b8219a37b5510"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/17.30f798c5.js",revision:"5690aac02509f1cd3bd40ad44f170db0"},{url:"assets/js/app.ab1e8cdb.js",revision:"00b624ac206047dd7106dd77a66ce637"},{url:"assets/js/layout-Blog.0fb999b5.js",revision:"41e09b9f01888c2349c34496301bd6e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.24b49169.js",revision:"f3ee0316f2fac4eade36242c94fa6a6c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.686785e6.js",revision:"f178f5b04eadffdee16ebec9c68d5988"},{url:"assets/js/layout-Layout.757f0f8e.js",revision:"9b9cc84bbed899c862902ebdae5ad936"},{url:"assets/js/layout-NotFound.94eea476.js",revision:"f1287af8a6a4d6692dbe1a1347ed2ac5"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-Config.d6d3cbc9.js",revision:"9651064622c9fd8beb10c37451509ee2"},{url:"assets/js/page-Demo.1c0e42b2.js",revision:"86f6fda5f5df69dc68a6315ac00095c4"},{url:"assets/js/page-Home.35e4ba56.js",revision:"3bc5ae0112121b032fb8c9799981f94a"},{url:"assets/js/page-主页.9dfecfbf.js",revision:"8691831b48a31ff1063c968b06acdfb0"},{url:"assets/js/page-演示.4e918816.js",revision:"1aabacffe0446031270424396c0573af"},{url:"assets/js/page-配置.37034b62.js",revision:"3ffd5813561ff08b9266fcfff5c11ad6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ca4670d5.js",revision:"b432f2838480af0312d3d7a771e88df5"},{url:"assets/js/vendors~photo-swipe.2a20fd99.js",revision:"c1b22257538b0affdb3bcd5768689384"},{url:"assets/js/vendors~valine.2074367e.js",revision:"e298c2fa8dcf94e0befb19421eb3f328"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"a4e548b33c842acba4eee383544cfa36"},{url:"config/index.html",revision:"120c1bd37cfb3503db416139b13b4513"},{url:"demo/index.html",revision:"a6aa9fae611be9dbd17b97c23887152b"},{url:"index.html",revision:"b3934770baa8ac408e55a2bf1d29d183"},{url:"zh/config/index.html",revision:"94e10a48c4d652d88c9685b59a8029a3"},{url:"zh/demo/index.html",revision:"e9dbc0680ae05498a67d940d5d2d6ae4"},{url:"zh/index.html",revision:"62775eb08461c4c2cd3405a77fc11d16"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ffb260c08d4f317f23f9be131656ebeb"},{url:"assets/icon/config-monochrome.png",revision:"02de2166629446a3bb7fa6a4f9a0e16a"},{url:"assets/icon/demo-maskable.png",revision:"fbb8642e8b855e59cdbebfbbb14051ea"},{url:"assets/icon/demo-monochrome.png",revision:"09ee1bc96dcf70de47e291a300c6515f"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
