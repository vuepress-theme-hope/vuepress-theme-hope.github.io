if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.480daab4.css",revision:"8cb9965d438587b4810e08e7a1c35927"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/12.5ecaea47.js",revision:"389984d03cbc32dd3ff3b7eadc39132c"},{url:"assets/js/app.b6adea97.js",revision:"a6a7d7e704912488bbe4468c2020e690"},{url:"assets/js/layout-Blog.57e05b28.js",revision:"c52de9c082c0ec95e909abb647e570f9"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.cec63ef1.js",revision:"82c06baf26f29582a89ef9e38fc3ce11"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.cdbbaf23.js",revision:"f276a6acede0450171b69d9e9d96153b"},{url:"assets/js/layout-Layout.427eaf7d.js",revision:"2db8b8cf1c4e8a79b68251c62141d29f"},{url:"assets/js/layout-NotFound.dbf6ee8d.js",revision:"5292974cec0f9c75c42c78088ece2bff"},{url:"assets/js/layout-Slide.94ed2dd6.js",revision:"be8bcb18d919cd330eddb165b17d494c"},{url:"assets/js/page-Home.4d46b583.js",revision:"3e1be73d80d809a245f4dce70d6f5e97"},{url:"assets/js/page-主页.558ccb55.js",revision:"f17c7e8da3d677a0ec89ab7aad1a3731"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.59f13964.js",revision:"594c810d2afc78e514834e155b0f157d"},{url:"assets/js/vendors~photo-swipe.ff121d5b.js",revision:"90073e5b474fe4ecd5958f3b98da114e"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"404.html",revision:"c8055d7c92408e99314fc38fc2ce30ce"},{url:"article/index.html",revision:"e6a026a9621de598ef3b16559253d806"},{url:"category/index.html",revision:"335349fece213065ce4af18d287c3aef"},{url:"encrypt/index.html",revision:"24edced33014b1e7f4dbe3447878a9bb"},{url:"index.html",revision:"de317c1970c1bcea7387f516529922b6"},{url:"slide/index.html",revision:"4a4893577e88e595272c94e03a6a0a92"},{url:"tag/index.html",revision:"c55f05cbd7e15691ba68e249e699f5fc"},{url:"timeline/index.html",revision:"4511d496236d96ad11cc00f2194f448b"},{url:"zh/index.html",revision:"400539b2f9a0f9b7c2360398756dcbcc"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"}],{}),e.cleanupOutdatedCaches()}));
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
