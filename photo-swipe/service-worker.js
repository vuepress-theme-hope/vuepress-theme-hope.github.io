if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,o,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(o.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.792ae1f5.css",revision:"df39c6087d2e6cd58f09a4224c772ddf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/17.30f798c5.js",revision:"5690aac02509f1cd3bd40ad44f170db0"},{url:"assets/js/app.e82c2f03.js",revision:"913a47d99f5a5319a5834a4adcffce6a"},{url:"assets/js/layout-Blog.eb325ddc.js",revision:"9e363f179235d3fcab732b20cd02c53b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bce16a87.js",revision:"6b8b7ae9424edcb2fbb04ba9aa96faed"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.25a443c7.js",revision:"2eb141de70641763df549d497c2c4cf3"},{url:"assets/js/layout-Layout.afa847db.js",revision:"e71ffd0cfe82e6769a0f6fa55574f109"},{url:"assets/js/layout-NotFound.9c64d3fc.js",revision:"0f901588fd253a8814856de8e87de726"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-Config.d6d3cbc9.js",revision:"9651064622c9fd8beb10c37451509ee2"},{url:"assets/js/page-Demo.1c0e42b2.js",revision:"86f6fda5f5df69dc68a6315ac00095c4"},{url:"assets/js/page-Home.35e4ba56.js",revision:"3bc5ae0112121b032fb8c9799981f94a"},{url:"assets/js/page-主页.9dfecfbf.js",revision:"8691831b48a31ff1063c968b06acdfb0"},{url:"assets/js/page-演示.4e918816.js",revision:"1aabacffe0446031270424396c0573af"},{url:"assets/js/page-配置.37034b62.js",revision:"3ffd5813561ff08b9266fcfff5c11ad6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.249a5ce7.js",revision:"1ad421ce8daf59dd2b6eb9ba019560b4"},{url:"assets/js/vendors~photo-swipe.2a20fd99.js",revision:"c1b22257538b0affdb3bcd5768689384"},{url:"assets/js/vendors~valine.2074367e.js",revision:"e298c2fa8dcf94e0befb19421eb3f328"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"f39c4f11c8f47893929d35df4ea95c66"},{url:"config/index.html",revision:"bdfad817b36e5ef303aaf9b018010dc1"},{url:"demo/index.html",revision:"ffe15ae0b967148218a43e79f947eea8"},{url:"index.html",revision:"ac8d485b4e60e47a3fc117f82a6c6a4b"},{url:"zh/config/index.html",revision:"93d2845db98bba11098549402054e8c0"},{url:"zh/demo/index.html",revision:"74570493d38e298826fe2e91401b5214"},{url:"zh/index.html",revision:"427a78c308f9acaa5c135dd6e95e7f3b"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ffb260c08d4f317f23f9be131656ebeb"},{url:"assets/icon/config-monochrome.png",revision:"02de2166629446a3bb7fa6a4f9a0e16a"},{url:"assets/icon/demo-maskable.png",revision:"fbb8642e8b855e59cdbebfbbb14051ea"},{url:"assets/icon/demo-monochrome.png",revision:"09ee1bc96dcf70de47e291a300c6515f"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
