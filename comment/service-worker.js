if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}}))).then((e=>{const a=c(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.3c1b9775.css",revision:"0b3f403ea121087743c90aa8391977d6"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/33.3eac37c0.js",revision:"eef7e91c8078ba78c2b7f5ca3c9548a2"},{url:"assets/js/app.41461c6e.js",revision:"b35f89064e231ee53e6bf3ce0da7a32c"},{url:"assets/js/layout-Blog.720eeecd.js",revision:"539afa1e10e29aa0ebafe1427432f75c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ed7a81df.js",revision:"4f988a6c5444a8ece5b1de048cc57bd7"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.686785e6.js",revision:"f178f5b04eadffdee16ebec9c68d5988"},{url:"assets/js/layout-Layout.89c7105e.js",revision:"7f1ac669df0b23b1f8d6c469b0255977"},{url:"assets/js/layout-NotFound.1f15977f.js",revision:"75a1440209b717858b491927733735b9"},{url:"assets/js/layout-Slide.d2aa927d.js",revision:"0b02e8c09b84022336ae12dc44fbe003"},{url:"assets/js/page-APIConfig.e6e90d0d.js",revision:"9f43f7ad9f23cde0590f00497855fbdf"},{url:"assets/js/page-BitBucketOAuthConsumer.cbddbb1e.js",revision:"dcd7035d4e1efeb38628cf537c75a7aa"},{url:"assets/js/page-GiteeThirdPartyApplication.9b32acc7.js",revision:"a8c3f8082d3632bcc93f855138ac8e74"},{url:"assets/js/page-Gitee第三方应用.8430c55d.js",revision:"481b35fde1d18f132e334deb369a4b3d"},{url:"assets/js/page-GitHubOAuthApp.4d41fd50.js",revision:"ccf7099ff39c02881de019e00fde2038"},{url:"assets/js/page-GitLabApplication.0a51b8d1.js",revision:"f8c22210a8b58f167fa440c6cff8ffff"},{url:"assets/js/page-Guide.5261ddcf.js",revision:"eb438d1762ee2978ff6889bba98c35d5"},{url:"assets/js/page-Home.2873b406.js",revision:"2bc58310d61cc3c23a93d794d674887a"},{url:"assets/js/page-Pageinformation.440c74b6.js",revision:"b1950dc33fc75cdff09c2cfffad254b0"},{url:"assets/js/page-SupportedPlatforms.970d8049.js",revision:"2cbc542870b2bd783419e4cb112afd57"},{url:"assets/js/page-UsingVssue.7a2a281b.js",revision:"56d264c0444695aafa682cb29a8284da"},{url:"assets/js/page-Valine.cabd5192.js",revision:"203f15fa9b4c6dacd0d822b5a35e74ad"},{url:"assets/js/page-ValineConfig.7b549ef6.js",revision:"e45cf0d090dbd9530d4af91361c12682"},{url:"assets/js/page-valine配置.6165d967.js",revision:"321847f24c931033693fe6fb3943e55a"},{url:"assets/js/page-VssueOptions.6cccc95e.js",revision:"f6b599f953617cb37f9894f21faf3161"},{url:"assets/js/page-Vssue配置.da201ce6.js",revision:"4e1cab1e24a30842ff8506254e296da2"},{url:"assets/js/page-主页.8b6b04ee.js",revision:"8b773fb4cd15833bad64965b8c6c7afd"},{url:"assets/js/page-使用Vssue.0ba5600d.js",revision:"8d29c961c8c940068e14bdfa4d06078b"},{url:"assets/js/page-指南.ace2e514.js",revision:"406e3da67eb15341c2b46bfeacb9f85d"},{url:"assets/js/page-支持的代码托管平台.7e0d0e90.js",revision:"7b0446b91b77addc7717b505a5f89431"},{url:"assets/js/page-配置.e68f839b.js",revision:"f44f9601999c54d0950dd84ce5b3414e"},{url:"assets/js/page-页面信息.7639f59b.js",revision:"6ddf5607a42201de4ca023fedbbe0ab2"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.01394c3f.js",revision:"ebf8bffc5b1593dd2396a417598dde28"},{url:"assets/js/vendors~photo-swipe.f22cf766.js",revision:"96847f7625e67efedaac34627c41ca49"},{url:"assets/js/vendors~valine.ba72c3fc.js",revision:"7f6be06819131a45a3f8ff5d6483695e"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"404.html",revision:"0f58054e8a910183760585651b7e8b96"},{url:"config/index.html",revision:"81edad4e122468c221c8bbb1e0dae42e"},{url:"config/valine/index.html",revision:"25edbe6fe6ae63b5f29e4426aba2112c"},{url:"config/vssue/index.html",revision:"aa79738057db0d9b952be32231f0d01f"},{url:"guide/bitbucket/index.html",revision:"4bd887dacebf7c8f6ca425276f785c17"},{url:"guide/gitee/index.html",revision:"ddd8b8f9aac53e12a5b4aa21ec8ffd81"},{url:"guide/github/index.html",revision:"bb8338f5489ec80c7a9b2122c22e1ab7"},{url:"guide/gitlab/index.html",revision:"9c9602641a897faf106803d91487a3d0"},{url:"guide/index.html",revision:"ca70dd6c4b1eea2f3d47867328011610"},{url:"guide/page-info/index.html",revision:"8af19536a1813206342fc7940636faa5"},{url:"guide/supported-platforms/index.html",revision:"970351502900772a1a27e3d66ec0fc60"},{url:"guide/valine/index.html",revision:"6235af1b798d48060b6d627daadf586d"},{url:"guide/vssue/index.html",revision:"b4db0c3b9c4a77fb5d90490a742dcb2e"},{url:"index.html",revision:"d8898a2400c7aee37558c03ec4bb9775"},{url:"zh/config/index.html",revision:"029a28c35594a6bfeabd9ad27cee2c1c"},{url:"zh/config/valine/index.html",revision:"04743c5eb79c3ac8eff887a7ac3659f3"},{url:"zh/config/vssue/index.html",revision:"2a60fa6283e2b1844fc8c629ff0ffa49"},{url:"zh/guide/bitbucket/index.html",revision:"93dbb517b3e6095885e3f17ec649b0f1"},{url:"zh/guide/gitee/index.html",revision:"1bc795e11e5429fc24cb1758e1c51bbe"},{url:"zh/guide/github/index.html",revision:"82d7a4f809a9205cf88492f8b6b86df6"},{url:"zh/guide/gitlab/index.html",revision:"3ff5bf44d63e21eb411c98d96e5aa149"},{url:"zh/guide/index.html",revision:"8254d64378ca37c9ad2a49481894731e"},{url:"zh/guide/page-info/index.html",revision:"c625367bc93d179637e0e96e6468c2a0"},{url:"zh/guide/supported-platforms/index.html",revision:"f8ed96ceecf39fec27de623fbc98c4e5"},{url:"zh/guide/valine/index.html",revision:"2129c1739eed0cca1fa675be502ea9a2"},{url:"zh/guide/vssue/index.html",revision:"0fe84be45bf8b133dbf50a629667d875"},{url:"zh/index.html",revision:"ac73d859385dea9384aed5c675ade8e6"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"8fb998d2c4b2f220ffe160bec5a8b7e8"},{url:"assets/icon/config-monochrome.png",revision:"9b595baf417a780a9303b27cbbd90b08"},{url:"assets/icon/guide-maskable.png",revision:"5cb5beea2e1d662315456d0ae0d5b859"},{url:"assets/icon/guide-monochrome.png",revision:"e7cdce40205b69056052c55ede7ee4b0"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/oauth-app-bitbucket-02.c8beb6e8.png",revision:"c8beb6e894f63ffc339ba00dcb65e3b4"},{url:"assets/img/oauth-app-bitbucket-03.09b5ed37.png",revision:"09b5ed3786e81568470486ef9896185c"},{url:"assets/img/oauth-app-bitbucket-04.0c45a140.png",revision:"0c45a1403e8f2ab38b739e63702ddb0e"},{url:"assets/img/oauth-app-bitbucket-05.a2f2d6ac.png",revision:"a2f2d6acfa737a030adbdcd75aa971c1"},{url:"assets/img/oauth-app-bitbucket-07.cf8fc7f4.png",revision:"cf8fc7f4b4929303a4b9f46720a43b88"},{url:"assets/img/oauth-app-bitbucket-08.7f00911c.png",revision:"7f00911ca41acb2b1a046ee0568af107"},{url:"assets/img/oauth-app-bitbucket-09.c2ab277d.png",revision:"c2ab277d8ad4e98c7f4f691aa7ea72fb"},{url:"assets/img/oauth-app-bitbucket-10.f37491f1.png",revision:"f37491f109980cbe7914f34e28846a71"},{url:"assets/img/oauth-app-bitbucket-11.79a3f6d2.png",revision:"79a3f6d233e75495005ac449ce11641d"},{url:"assets/img/oauth-app-bitbucket-12.089f6791.png",revision:"089f679110bd790abaa8f3c23a44c611"},{url:"assets/img/oauth-app-bitbucket-13.7aa7d9c4.png",revision:"7aa7d9c466b279fde1d6eb54e77e82fa"},{url:"assets/img/oauth-app-gitee-01.2a3c853a.png",revision:"2a3c853a940c5a6c57d29bcd8a9eb590"},{url:"assets/img/oauth-app-gitee-03.363b3a3c.png",revision:"363b3a3c6cd4837594809fd4dc84cfa0"},{url:"assets/img/oauth-app-gitee-05.bffbad68.png",revision:"bffbad6850c6fd028a5853e362136de9"},{url:"assets/img/oauth-app-gitee-06.6e88fc1c.png",revision:"6e88fc1c896e84776053fcb4322e25e2"},{url:"assets/img/oauth-app-gitee-07.ba63f365.png",revision:"ba63f365645adcaf42e18e50ced4b8af"},{url:"assets/img/oauth-app-gitee-08.9bf7b38e.png",revision:"9bf7b38e1e9e14557e8f556d191b180b"},{url:"assets/img/oauth-app-gitee-09.bd995516.png",revision:"bd99551642054ab701428019a3c7a66b"},{url:"assets/img/oauth-app-github-01.7919ae3d.png",revision:"7919ae3d0dc3d6e3c9a175b0237bc390"},{url:"assets/img/oauth-app-github-02.0d3bf018.png",revision:"0d3bf018dede16124c37f53e933982a8"},{url:"assets/img/oauth-app-github-03.affa7728.png",revision:"affa7728746e815425b57991fce7fdc5"},{url:"assets/img/oauth-app-github-04.26a18f63.png",revision:"26a18f6346d2cbcf8f62d3526efdbb9a"},{url:"assets/img/oauth-app-github-05.de3a1e8b.png",revision:"de3a1e8b71d73434c55ee6a02846320c"},{url:"assets/img/oauth-app-github-06.2dfcd3c0.png",revision:"2dfcd3c030f75a738185d96ad1cc861c"},{url:"assets/img/oauth-app-github-07.ca635603.png",revision:"ca635603c2c60699528ba6d71e5d5b28"},{url:"assets/img/oauth-app-github-08.a426516b.png",revision:"a426516b6bd7b9ab7d7713c4c9706ddb"},{url:"assets/img/oauth-app-github-09.7973e808.png",revision:"7973e8084c2b285a06afa61d4d2ce5eb"},{url:"assets/img/oauth-app-github-10.82a78dae.png",revision:"82a78dae7d2daba58c60903e03172236"},{url:"assets/img/oauth-app-gitlab-01.fce804e9.png",revision:"fce804e92d44edbca5e1718033c6ca7b"},{url:"assets/img/oauth-app-gitlab-02.5086d383.png",revision:"5086d3832fdd5c502e67146179ed2667"},{url:"assets/img/oauth-app-gitlab-03.579755c0.png",revision:"579755c057a278c4cb560815224f4a69"},{url:"assets/img/oauth-app-gitlab-04.452c719d.png",revision:"452c719df7bd6c0e2e8b551bbdb5c286"},{url:"assets/img/oauth-app-gitlab-05.5ce60c45.png",revision:"5ce60c45e5f3953580857aecba0060df"},{url:"assets/img/oauth-app-gitlab-06.f94755f6.png",revision:"f94755f6c0e1a8f3afe8801949556d7a"},{url:"assets/img/oauth-app-gitlab-07.b5f392f5.png",revision:"b5f392f51bb73b882885c582c21a13b3"},{url:"assets/img/oauth-app-gitlab-08.a422bfa3.png",revision:"a422bfa3a70f9b84cad3d9d3d510620d"},{url:"assets/img/oauth-app-gitlab-09.a508e2d4.png",revision:"a508e2d495c213affbdbf3b668e1a399"}],{}),e.cleanupOutdatedCaches()}));
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
