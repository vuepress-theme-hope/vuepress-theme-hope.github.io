if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.da08532f.css",revision:"a10ececdf99a81c84e02fc3064bb63cd"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/17.30f798c5.js",revision:"5690aac02509f1cd3bd40ad44f170db0"},{url:"assets/js/app.32fc0c3f.js",revision:"832ec32120e8fc42f7d81f6043c250da"},{url:"assets/js/layout-Blog.eb325ddc.js",revision:"9e363f179235d3fcab732b20cd02c53b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bce16a87.js",revision:"6b8b7ae9424edcb2fbb04ba9aa96faed"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.25a443c7.js",revision:"2eb141de70641763df549d497c2c4cf3"},{url:"assets/js/layout-Layout.e59b654f.js",revision:"5dd7f97882951d1226324172e0592956"},{url:"assets/js/layout-NotFound.9c64d3fc.js",revision:"0f901588fd253a8814856de8e87de726"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-Config.80786a8c.js",revision:"212a33128667a7e0b8031e0b0d0da220"},{url:"assets/js/page-Guide.c06ab331.js",revision:"fe10097a622ad3c79caaf13491d651a0"},{url:"assets/js/page-Home.1d6c9bac.js",revision:"baab54e6a945ee1252912380c53e3319"},{url:"assets/js/page-主页.184d46fa.js",revision:"128c5cb0aa66b622ac0fac3b0252bccd"},{url:"assets/js/page-指南.f1e56127.js",revision:"3bc085ff4ea0e45fa97eda3a465d961f"},{url:"assets/js/page-配置.b1528a4c.js",revision:"85003f10caa90015b6ee33cab90bd4f7"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.249a5ce7.js",revision:"1ad421ce8daf59dd2b6eb9ba019560b4"},{url:"assets/js/vendors~photo-swipe.2a20fd99.js",revision:"c1b22257538b0affdb3bcd5768689384"},{url:"assets/js/vendors~valine.2074367e.js",revision:"e298c2fa8dcf94e0befb19421eb3f328"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"a07889c050225c7814db28ecfff07240"},{url:"config/index.html",revision:"44f64d86f116ad5b0b244d6fd075d174"},{url:"guide/index.html",revision:"7221ea4a6cbc78a8f0688ad9ae760337"},{url:"index.html",revision:"98b744302df230d7305b585f7c6fb122"},{url:"zh/config/index.html",revision:"05b01554384d68275ad60f25199fab50"},{url:"zh/guide/index.html",revision:"ac165b70c65ce6892a87b32672e9f010"},{url:"zh/index.html",revision:"97cb2d8095d16256b6fa8ecedbc222a0"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"492db50fd944ce74f319bfd142c61c0a"},{url:"assets/icon/config-monochrome.png",revision:"82cd504110dad5d766925814933d61e1"},{url:"assets/icon/guide-maskable.png",revision:"f14c9571658250dffcda5ed9fb84b457"},{url:"assets/icon/guide-monochrome.png",revision:"931bf2b6692ee8086aab6ba2b1be5d11"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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
