if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.bcfd6547.css",revision:"9b40bda9e6d706ff41817de2fb89b04a"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/39.64c582b0.js",revision:"466f1f4b377b8d07ba5fc6ac2fa06b42"},{url:"assets/js/40.b1af1161.js",revision:"1b8e2bd51b7b7d6ac3662f53b0c87194"},{url:"assets/js/41.f55b9236.js",revision:"a44744ad4e2bf7bda5ec9e75583869bf"},{url:"assets/js/42.8c54f6d8.js",revision:"facbbd12cd64bb0c60f6c18d68e72f67"},{url:"assets/js/43.bf0d66f0.js",revision:"905717bb8d4c867a04ac767dae4f34c2"},{url:"assets/js/app.bb256c83.js",revision:"fce0c8eea9c57e6c39bcd5c18aa33579"},{url:"assets/js/layout-Blog.5a72f95a.js",revision:"7bd2e8a80eb318e9f43bfbf9f3cede87"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.5d4c77cb.js",revision:"071817c91989f59373505fc7664102d2"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.48dea84f.js",revision:"0b3c927dc52d32bccbac0c2674724296"},{url:"assets/js/layout-Layout.230c88f0.js",revision:"dbf5dcb3fcac5244d7d9818f077cc982"},{url:"assets/js/layout-NotFound.0935a0de.js",revision:"a048b23d085cc9ae2e0c0d0612dd2956"},{url:"assets/js/layout-Slide.cfcf5bdd.js",revision:"f34a8da959fe49ebc82344b5bc430eb7"},{url:"assets/js/page-CodeDemo.4d13fed7.js",revision:"ff787546b1498c5f2329afd57e2962b8"},{url:"assets/js/page-Config.f3b60530.js",revision:"c7e70132b980b892f4134f46290ad741"},{url:"assets/js/page-Customalignment.cb705838.js",revision:"a6fcd098a746c6d9904b4ab11a02effc"},{url:"assets/js/page-Demo.be0de21b.js",revision:"28cd1d84aade49f82674d6539729ded7"},{url:"assets/js/page-Flowchart.560a6531.js",revision:"e2ac45757ec10fde6e21580ecfc3b011"},{url:"assets/js/page-Footnote.f682b1c3.js",revision:"5ca7d74c52c6c56e40402fcd628dc313"},{url:"assets/js/page-GetStarted.fe9673da.js",revision:"dc18f92e8f2d05f3878b8dcfa956a973"},{url:"assets/js/page-Home.89e472c5.js",revision:"1068dc9a48b06e64e7cfc29374e34b52"},{url:"assets/js/page-Markup.d82725ee.js",revision:"20184420203582c336079486ba3c5d85"},{url:"assets/js/page-Presentation.a4d1934b.js",revision:"b7814b057f507434f985af2aaac63aff"},{url:"assets/js/page-SuperscriptandSubscript.0794a023.js",revision:"10239846a17fec4ad30bc944047d2a51"},{url:"assets/js/page-Tex.38623d4a.js",revision:"a5285f884d1f806ff0ef0156722227b2"},{url:"assets/js/page-Tex语法.ffe7cdb6.js",revision:"2a88a1ed5303fe64d1c4add7d1c8ced8"},{url:"assets/js/page-Themes.f14ad3a3.js",revision:"7f03043a6b8a19401c9580649260e4d7"},{url:"assets/js/page-上下角标.24ea6566.js",revision:"101a5e02cd0bcb0d7bf30264e6dfa30a"},{url:"assets/js/page-主页.585261eb.js",revision:"d5ec53b15f5467ae8f98aead4a90bd85"},{url:"assets/js/page-代码演示.bced5c8e.js",revision:"54d85f8e05c3a2312ff0477a967d274d"},{url:"assets/js/page-幻灯片主题.f356c797.js",revision:"4d655e19fb7d61a15eafc9d465c33895"},{url:"assets/js/page-幻灯片支持.4a205ba3.js",revision:"a5990e9e7a0dfacf2529adc7fb29d25d"},{url:"assets/js/page-幻灯片演示.89ceaa4a.js",revision:"3f9a5b2bdf32a6e20f1e09e1e1f02ebe"},{url:"assets/js/page-快速上手.5642186a.js",revision:"93b2d8862970e41e928e5deb8a92abb4"},{url:"assets/js/page-标记.0155ab7f.js",revision:"9efc7b1e48a3aa8c6d3f7c53a2fab913"},{url:"assets/js/page-流程图.b7e2bc85.js",revision:"d92163fc90db341976da925bcbc65a1d"},{url:"assets/js/page-脚注.560440a2.js",revision:"d65c81d83cd84becca4dfa3c48cdc470"},{url:"assets/js/page-自定义对齐.07e591a6.js",revision:"f3104eec0c31fe9283af284e66ef715c"},{url:"assets/js/page-配置.e824e23a.js",revision:"fc1f2e60d31c31b85b67cdc5a0179d12"},{url:"assets/js/vendors~flowchart.c800f4f6.js",revision:"df588de8efa2e0e3d32e9947efae44e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fc74fe4e.js",revision:"a4f07ed230dd435d39ecb5de01b34f3e"},{url:"assets/js/vendors~photo-swipe.f30e2376.js",revision:"2b7340c77b749654c612e80b0fc36112"},{url:"assets/js/vendors~reveal.8f666f48.js",revision:"8d059c8d1571dcf488744104b94c755d"},{url:"assets/js/vendors~valine.1d08e913.js",revision:"2f8ee80f307255df5311cda7f48c808f"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"9b7a479042f1868a57c1a20ee65d89f6"},{url:"config/index.html",revision:"0a542239bc3a8aa6778b6df3c8c8461c"},{url:"guide/align/index.html",revision:"fafecdb5c8da867d7c457fb75352ba3f"},{url:"guide/demo/index.html",revision:"aabdd6dfdf0e6c32cca62c9e1b2f2e34"},{url:"guide/flowchart/index.html",revision:"12b6951f757909d266283ff4feeb2b34"},{url:"guide/footnote/index.html",revision:"2f44b701a9cd439e69c78d070be3d012"},{url:"guide/index.html",revision:"eef1ee8ef0b1709832fe6171eb3c6193"},{url:"guide/mark/index.html",revision:"d654e40c3f895f25384f6f348fe13d92"},{url:"guide/presentation/demo/index.html",revision:"69b9083f3ef11285c4be4ee86ee58baf"},{url:"guide/presentation/index.html",revision:"2a4b5ae35c4e508c30dbbf2ed087d743"},{url:"guide/presentation/themes/index.html",revision:"134b0c0ec84549ccd13592030ee02064"},{url:"guide/sup-sub/index.html",revision:"57e2f652796470269f48adb5dcb0a4b3"},{url:"guide/tex/index.html",revision:"110eaeba00e8be27a2267d086ac6b63d"},{url:"index.html",revision:"418d1beb23bb336fca63b551a7254180"},{url:"zh/config/index.html",revision:"c72bba182de10d02c8865274bccbf12d"},{url:"zh/guide/align/index.html",revision:"dae6f1c4c71ba3465435a2856cec9bac"},{url:"zh/guide/demo/index.html",revision:"2f17196fb00ce8a2f1ad4d5b8a5eb0b6"},{url:"zh/guide/flowchart/index.html",revision:"01b19f6d701c30addf6f3a6a87b25bd6"},{url:"zh/guide/footnote/index.html",revision:"f7f17b6fd22d599b6b0f415b340b8a13"},{url:"zh/guide/index.html",revision:"707e25949679ca950c6b61689468bd17"},{url:"zh/guide/mark/index.html",revision:"d70f6a1e5b2af0b88f216654b90eba05"},{url:"zh/guide/presentation/demo/index.html",revision:"88f518d045dc617ed64d44948517e3ba"},{url:"zh/guide/presentation/index.html",revision:"b570abca520aabdea5e8cd6c56f2bec1"},{url:"zh/guide/presentation/themes/index.html",revision:"d65e9c68fecb05bf61ef7858137a259d"},{url:"zh/guide/sup-sub/index.html",revision:"a0194fffd36ef9b8957ed81572b66965"},{url:"zh/guide/tex/index.html",revision:"038173c9424aa9c2178b216efe7bcab6"},{url:"zh/index.html",revision:"be78c3780dea41c6067532114ce793ee"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"b75883647416c36200e4beec68700e71"},{url:"assets/icon/config-monochrome.png",revision:"63cfa67502c8967bd58042182757dcd1"},{url:"assets/icon/guide-maskable.png",revision:"83f680eb8e3d20df2650184092151431"},{url:"assets/icon/guide-monochrome.png",revision:"6a7f3acdb8b7e7a74725ee971a098ef8"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),e.cleanupOutdatedCaches()}));
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
