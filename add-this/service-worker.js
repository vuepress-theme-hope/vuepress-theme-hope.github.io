if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.881923dc.css",revision:"236af6c510ddc03c5e49ca64f624d3b4"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/17.30f798c5.js",revision:"5690aac02509f1cd3bd40ad44f170db0"},{url:"assets/js/app.c00e9929.js",revision:"117624cff8ac5d320b5b2b2bba655212"},{url:"assets/js/layout-Blog.eb325ddc.js",revision:"9e363f179235d3fcab732b20cd02c53b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.bce16a87.js",revision:"6b8b7ae9424edcb2fbb04ba9aa96faed"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.25a443c7.js",revision:"2eb141de70641763df549d497c2c4cf3"},{url:"assets/js/layout-Layout.40866673.js",revision:"ae45a2b215ff71c70f33c460f126bff7"},{url:"assets/js/layout-NotFound.9c64d3fc.js",revision:"0f901588fd253a8814856de8e87de726"},{url:"assets/js/layout-Slide.82838e5d.js",revision:"d20667eb5e48204d5eec132bb08f21e8"},{url:"assets/js/page-APIConfig.f2b6ae5e.js",revision:"92ff5a81f27eddd2c2e5f84d851c5582"},{url:"assets/js/page-Guide.36b1a7f4.js",revision:"6b6bd6f3b7f688240adccde0fa586918"},{url:"assets/js/page-Home.d460aeac.js",revision:"228f4f37c0484df1e98edf660c9504ac"},{url:"assets/js/page-主页.1cd58a48.js",revision:"c5354ecbdc99502cf4959977a26e3406"},{url:"assets/js/page-指南.b4930223.js",revision:"edc1a4691e1e3dc094e46cfad3dcc86d"},{url:"assets/js/page-配置.bba3c0e5.js",revision:"052beda9dee6b997a6c39ab7f8937558"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.249a5ce7.js",revision:"1ad421ce8daf59dd2b6eb9ba019560b4"},{url:"assets/js/vendors~photo-swipe.2a20fd99.js",revision:"c1b22257538b0affdb3bcd5768689384"},{url:"assets/js/vendors~valine.2074367e.js",revision:"e298c2fa8dcf94e0befb19421eb3f328"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"07b2aca915da033c4b768764f2fc4154"},{url:"config/index.html",revision:"8d7c810229164047b84d220a511f779a"},{url:"guide/index.html",revision:"fc23a56ca0c09951804787d333b31984"},{url:"index.html",revision:"1237e10e611943f8eeb0b279ad6f6f6b"},{url:"zh/config/index.html",revision:"f83a5f95e8d8e4ac76d15baafca2c430"},{url:"zh/guide/index.html",revision:"dee58cdeabb89156693b1405cae6cba1"},{url:"zh/index.html",revision:"57a2e14de9d961080549dbd292158dbc"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"175b2683ceab0c9df7fba92edbb8f175"},{url:"assets/icon/config-monochrome.png",revision:"b5167d8ef45438c0e9e39ff89230435c"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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
