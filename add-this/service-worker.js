if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f8477e23.css",revision:"b8c6e3cc47a930941455f7b4f1427246"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/17.30f798c5.js",revision:"5690aac02509f1cd3bd40ad44f170db0"},{url:"assets/js/app.8002e404.js",revision:"2c6177aac7319f36310a6b7bc09a28db"},{url:"assets/js/layout-Blog.0fb999b5.js",revision:"41e09b9f01888c2349c34496301bd6e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.24b49169.js",revision:"f3ee0316f2fac4eade36242c94fa6a6c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.686785e6.js",revision:"f178f5b04eadffdee16ebec9c68d5988"},{url:"assets/js/layout-Layout.ebac9f59.js",revision:"afdec308e2a539b60fdaf79284dbc920"},{url:"assets/js/layout-NotFound.94eea476.js",revision:"f1287af8a6a4d6692dbe1a1347ed2ac5"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-APIConfig.f2b6ae5e.js",revision:"92ff5a81f27eddd2c2e5f84d851c5582"},{url:"assets/js/page-Guide.36b1a7f4.js",revision:"6b6bd6f3b7f688240adccde0fa586918"},{url:"assets/js/page-Home.d460aeac.js",revision:"228f4f37c0484df1e98edf660c9504ac"},{url:"assets/js/page-主页.1cd58a48.js",revision:"c5354ecbdc99502cf4959977a26e3406"},{url:"assets/js/page-指南.b4930223.js",revision:"edc1a4691e1e3dc094e46cfad3dcc86d"},{url:"assets/js/page-配置.bba3c0e5.js",revision:"052beda9dee6b997a6c39ab7f8937558"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.655bdbd2.js",revision:"64d678fcb8afde553332faf360c63e4b"},{url:"assets/js/vendors~photo-swipe.2a20fd99.js",revision:"c1b22257538b0affdb3bcd5768689384"},{url:"assets/js/vendors~valine.2074367e.js",revision:"e298c2fa8dcf94e0befb19421eb3f328"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"68c828ac83fb72dcb6cd96f5f384ee23"},{url:"config/index.html",revision:"b0fdad1b6209477812836a2e0b287afa"},{url:"guide/index.html",revision:"18c32c2e974ee736ab0783df62bd9825"},{url:"index.html",revision:"f473b13235106831bb957f5782f96c61"},{url:"zh/config/index.html",revision:"990831d469d7264a014fa6e69df2b0c2"},{url:"zh/guide/index.html",revision:"792f8098705e33a37fe5cf00d578c376"},{url:"zh/index.html",revision:"075a371d9e0cd96f68e59b937ea0077f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"175b2683ceab0c9df7fba92edbb8f175"},{url:"assets/icon/config-monochrome.png",revision:"b5167d8ef45438c0e9e39ff89230435c"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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
