if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-ab6d3691"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.bb5faa42.css",revision:"10ceed141f83af9cc2c04204e1db8341"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/127.fe727bf2.js",revision:"0ef631d4cc9d6d97130ec4d9241ba0f5"},{url:"assets/js/128.6e4d7f5d.js",revision:"fa39c26b012f4b5ac291dde375c462bc"},{url:"assets/js/129.ed73c627.js",revision:"b6a2e2e5e5ba4c61c4b668f9117e5738"},{url:"assets/js/130.cf66bdde.js",revision:"559aaa8ee6c64ca03c44fbe5e05c22bf"},{url:"assets/js/131.3750d86e.js",revision:"0957fc218f90a45c3f2bb612cde05f19"},{url:"assets/js/app.5ffafa14.js",revision:"4a070094d13112fc0e436bcffb2b8041"},{url:"assets/js/layout-Blog.ea172fd1.js",revision:"96b9c6f3f64ea23c1f677d9ff4850e06"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.210559c6.js",revision:"081e8799557a89193847ae565f5a79e5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.9bd7b8ea.js",revision:"6de9f7126d844a16c83af1ecf261701e"},{url:"assets/js/layout-Layout.3ad4b2ea.js",revision:"0672e75a72bef125ee78e6faeeb849b3"},{url:"assets/js/layout-NotFound.047fd5b5.js",revision:"10e1d77393058e696f73d8d3da459f66"},{url:"assets/js/layout-Slide.978032ca.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress.81caba84.js",revision:"ee118534c8165691a68e86ac4f11c24a"},{url:"assets/js/page-Basic.3cea6903.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage.79157769.js",revision:"f75b97782f0ff5da0bc1908c6fdbf7c7"},{url:"assets/js/page-Blogrelated.a287051b.js",revision:"224e5b4a601049f999642dafc8182a15"},{url:"assets/js/page-CodeDemo.1586929c.js",revision:"01e73ca8cfc958182d501420f9c83c46"},{url:"assets/js/page-CommentFunction.3a96158f.js",revision:"659fdb266e05db6349fb8dbedbcc152f"},{url:"assets/js/page-Commonproblems.54bbb5e7.js",revision:"579c37e944f40d5309c95ca3e1793664"},{url:"assets/js/page-Config.76b34aa2.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment.ca28bc3c.js",revision:"943362b4ebee347dccc545a188139e03"},{url:"assets/js/page-DarkmodeandThemecolor.289b5042.js",revision:"ffa017f2a139d72e5a9dd8331fb8097f"},{url:"assets/js/page-DefaultThemeConfig.4e759c7a.js",revision:"fbe67d15be72b312ed80fe275fba197e"},{url:"assets/js/page-Demos.933898e1.js",revision:"ee5d6251d5d6473d667143bd424e1c76"},{url:"assets/js/page-EmojiList.f4d17e96.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表.d164850a.js",revision:"c06892825910cf145f89cfe1e84756fa"},{url:"assets/js/page-Encryptionfunction.497a893b.js",revision:"3ea13eec7c17dcc0b435a469f4c294d0"},{url:"assets/js/page-FeedSupport.0b8e5df1.js",revision:"1a091294851fe64e55218e418a8c5a1a"},{url:"assets/js/page-Feed支持.312a93eb.js",revision:"b109768caa98a46d9169cf8dfc57a6c7"},{url:"assets/js/page-FileStructure.078c7925.js",revision:"3b0c4d047f72bea59e501d2e2c4391b8"},{url:"assets/js/page-Flowchart.de2dbc2a.js",revision:"cd9082e3cc3dd832176dac1f787d4d8e"},{url:"assets/js/page-Footnote.9d325817.js",revision:"7c77b159100bd225380779b02cd13bac"},{url:"assets/js/page-Home.d081c308.js",revision:"33ef65c15e6f98a85a7b719f52a92cc6"},{url:"assets/js/page-HomePage.e053697a.js",revision:"208a62c3ac27c79f6c06eef0633a45db"},{url:"assets/js/page-Iconsupport.8bc8aca9.js",revision:"879841eecb06b7842419e48413915894"},{url:"assets/js/page-InstallUsage.4a129fa1.js",revision:"8781e3eaa07b41469fd1e95ccb7d1d0f"},{url:"assets/js/page-Introduction.523e737d.js",revision:"5e905113a53bbbd1114ae1d4984d3146"},{url:"assets/js/page-Layout.ef384a7f.js",revision:"c7d9b5ccd5a82b424364af416c53663a"},{url:"assets/js/page-MarkdownDEMO.ee7d4c0b.js",revision:"cbaad4551ae1459ec02ba675900be680"},{url:"assets/js/page-MarkdownEnhance.d32682a8.js",revision:"8b6d5f3ba2b2e39322f5514e60083654"},{url:"assets/js/page-MarkdownIntroduction.26d7008e.js",revision:"c081a75d612c64e7c58061275d5d0c6d"},{url:"assets/js/page-Markdown介绍.aa794f2a.js",revision:"98dd8635ecb4fecb7859cbd389ccaa57"},{url:"assets/js/page-Markdown增强.05075326.js",revision:"43a7257ef05ae36e2b766d5cf7b7b0da"},{url:"assets/js/page-Markdown示例.759b17b8.js",revision:"9344bdc0dd271f974469d41d9bde4e38"},{url:"assets/js/page-Markup.8e374b21.js",revision:"2532a5c9edb739fb59eb955e2bc99a0f"},{url:"assets/js/page-Nature.1efe143c.js",revision:"63b14dad223381cb67cc5f1822aaad9f"},{url:"assets/js/page-NavBar.fdf82562.js",revision:"2294d7c55efe3bd30d81a760d2aa0412"},{url:"assets/js/page-NewComponent.a09eaf74.js",revision:"9d80b572e1ae48b4718d8188bd8d8846"},{url:"assets/js/page-Newfeature.1b55a952.js",revision:"2d7f75c0c205ac641cc36d1af1ce75eb"},{url:"assets/js/page-Object.166073e0.js",revision:"ee9c4e0d119db0c8bcba6d9c39a44579"},{url:"assets/js/page-Page.78cf8447.js",revision:"02bca46cfba923de6cc90be1024328d4"},{url:"assets/js/page-PageConfig.8bb313d4.js",revision:"fbe90985d2f5818d5cb461db2cb4bd6e"},{url:"assets/js/page-PageEnhance.56854e8f.js",revision:"158714ebc6593eeeb3dbee331fdb368a"},{url:"assets/js/page-Pageinformation.fd247073.js",revision:"c3c7c00945ea1bba867fc8af01a6b4bb"},{url:"assets/js/page-People.8b33fb54.js",revision:"dd33592ee177a83b9ceb9bf67fd4f643"},{url:"assets/js/page-Place.988a3a43.js",revision:"ab7522eb523b706b5e5506d6992fbee7"},{url:"assets/js/page-PluginDescription.f020fc47.js",revision:"f4074de8b27c92bdca9f3e0220c4d65b"},{url:"assets/js/page-Plugins.aaabe6a9.js",revision:"2c7e459811f67343d2c29b7180218fcb"},{url:"assets/js/page-Presentation.b1bae5b4.js",revision:"4f89591645a971b49d7307491ac31244"},{url:"assets/js/page-PWA.ee969f2f.js",revision:"235b25f342276573c8f1d8f5cb571606"},{url:"assets/js/page-SEOandSitemap.01cea4b0.js",revision:"7e9437e79541c9eada6f5f46570bf9ef"},{url:"assets/js/page-SEO和Sitemap.34679236.js",revision:"0e6d4244207ac3624470b2a09502672c"},{url:"assets/js/page-Sidebar.ca0a7afa.js",revision:"83ac9c694372c0501cf81df677e9aa16"},{url:"assets/js/page-Slide.0ece5a4f.js",revision:"51698273fb86eddc3120d66c3da00ba0"},{url:"assets/js/page-Stylusconfig.fa48d171.js",revision:"cd8d05561c611d89fe7061522c0aa380"},{url:"assets/js/page-Stylus配置.c75e6929.js",revision:"a6afefa354cad4e92b9e3183be7fe1a9"},{url:"assets/js/page-SuperscriptandSubscript.fb901a7f.js",revision:"6764167d8fdd9c14901e6f4f65b27602"},{url:"assets/js/page-Symbol.d532def2.js",revision:"f1e0757c722ce1f255c4cde6045d7191"},{url:"assets/js/page-Tex.bb1b47e2.js",revision:"d3b6d200941d26662470b0691292ff66"},{url:"assets/js/page-ThemeConfig.9176404d.js",revision:"983b2cc9b50eafdc3be5d766632f7f9a"},{url:"assets/js/page-ThemeFeatureConfig.85d58733.js",revision:"d7801924010c85c247910282110afaa7"},{url:"assets/js/page-ThemeLayoutConfig.28314c64.js",revision:"067152eb8e62b278c5399d1dc2d0e7d8"},{url:"assets/js/page-ThemePluginConfig.027de0ac.js",revision:"5fb8934a136f4438f0deb5aa8cf5a645"},{url:"assets/js/page-TSsupport.ade337ba.js",revision:"d1d6bd4b30e962a51999f0e8e5645b7e"},{url:"assets/js/page-TS支持.9e45bf40.js",revision:"c14ccd38590643499c01c24283c86024"},{url:"assets/js/page-vuepress-plugin-container.e41202d5.js",revision:"e93a29ce672d46e41c883ad2195b3d19"},{url:"assets/js/page-vuepress-plugin-copyright.5ac89f96.js",revision:"11c264d4f86c9f606014264f55040822"},{url:"assets/js/page-VuePress.6a156773.js",revision:"b61686321d936d0911cec62506ea2326"},{url:"assets/js/page-VuePressCases.84a3a14a.js",revision:"a3c61a62eb15900799f8a39ccf27a45b"},{url:"assets/js/page-VuePresscommands.d6b72ffb.js",revision:"a5652ce9622019221ac28d2f84283c1b"},{url:"assets/js/page-VuePress案例.a4b2d776.js",revision:"45860e1ba637d9731235006251e8c208"},{url:"assets/js/page-上下角标.c5ef3661.js",revision:"774dd7853afbf0b3bf472bae6ce5eafd"},{url:"assets/js/page-主页.7c5fea08.js",revision:"0b118977d02b1c32eb09a1e72bb85246"},{url:"assets/js/page-主题功能配置.7c12d0b8.js",revision:"9ba378d0e0d8867674acd02fb9844df0"},{url:"assets/js/page-主题布局配置.4abf0b81.js",revision:"1355295d4cdf17de01c89da64ff1a172"},{url:"assets/js/page-主题插件配置.44143a76.js",revision:"bb6cabde986947fc4de8c7d9ca5652b6"},{url:"assets/js/page-主题配置.c7a014ea.js",revision:"ba6dee4f67749e90c32c2adaea4a792c"},{url:"assets/js/page-人物.053a143a.js",revision:"cf9ad4da7204cc6a76824f933c864f76"},{url:"assets/js/page-介绍.da7380e7.js",revision:"257e342a80cb3f23177480c24945879b"},{url:"assets/js/page-代码演示.906601cb.js",revision:"a51dc9488b30bee2aa00f881f499d75e"},{url:"assets/js/page-侧边栏.7a97e3c5.js",revision:"15bb21f5d89a622f7af97b2cfdcd0af0"},{url:"assets/js/page-加密功能.01e17a43.js",revision:"4c397ebcd53f66876ad307fc60ca935e"},{url:"assets/js/page-博客相关.a17a6e2a.js",revision:"5bc718dfd3a2a40a052600bcc50d1a14"},{url:"assets/js/page-博客首页.cae02a22.js",revision:"d43adc473d3bfe6d7987e2d63fb22c22"},{url:"assets/js/page-图标支持.81959ca0.js",revision:"b442e72f92bc6f742d678cc82be523cc"},{url:"assets/js/page-地点.b3d5c5ad.js",revision:"5717012f2bea228571dfd66169c8218d"},{url:"assets/js/page-基础知识.a9fe8ade.js",revision:"7ea6334f0b1a4ed1e99b8c76b407864b"},{url:"assets/js/page-安装使用.50fc23f6.js",revision:"e63db214c230a34f88ef04b49d325f1f"},{url:"assets/js/page-对象.0494bd26.js",revision:"81958927fa5ec82f8d89990c7aef7aa5"},{url:"assets/js/page-导航栏.6ed66017.js",revision:"c8d2d3b782c11705fca48103814f84ce"},{url:"assets/js/page-布局.b5c48246.js",revision:"267c28900cc8d7dc3b6fbaf9707e58bf"},{url:"assets/js/page-常见问题.1d36d315.js",revision:"327578eb576eb05ffe427638aee0e40f"},{url:"assets/js/page-幻灯片.271255b1.js",revision:"8cd2687d2b79d071499062b842927261"},{url:"assets/js/page-插件.56c05820.js",revision:"74c2b2987e694be4bcbcb9988b1d5e8e"},{url:"assets/js/page-插件说明.e48edf4a.js",revision:"619647e4219a04d8532d64be667d1b5d"},{url:"assets/js/page-文件结构介绍.205a2c71.js",revision:"9e2660ad64a8330b0d42d19abd9f5b3f"},{url:"assets/js/page-新增特性.c6e8fe71.js",revision:"e40410f905ff281d22dd203b9d23e191"},{url:"assets/js/page-新增组件.2bedddef.js",revision:"92a8e1730c3bf1c651e1c354655164ed"},{url:"assets/js/page-标记.22b2e592.js",revision:"5b3e3f3ce3e9da6ef4da70dfdf754fab"},{url:"assets/js/page-流程图.63a4a563.js",revision:"8a6f449708377d35edaeaa1273b5cedd"},{url:"assets/js/page-深色模式与主题色.c1086e00.js",revision:"faf9e2f019d8e3b879454ae1a38650d7"},{url:"assets/js/page-符号.55c28fbb.js",revision:"2461d3aaac35f1fe1bf9ca2c9c0fbe7c"},{url:"assets/js/page-脚注.9468e39c.js",revision:"dd69f28ca8ee18d3d2a1c6922580143b"},{url:"assets/js/page-自定义对齐.41bbf1b8.js",revision:"8a4fb131f6afd886a9d11c51262f7f64"},{url:"assets/js/page-自然.8c36f9a2.js",revision:"a2933885d8a88ff9db08040f116cc716"},{url:"assets/js/page-评论功能.41c0f469.js",revision:"46fde8e629200bf437f7e0077dd8900a"},{url:"assets/js/page-配置.24901324.js",revision:"6aea21d24b6c70cd207b83ae67b7f7dc"},{url:"assets/js/page-页面.97f70295.js",revision:"9fecd74b153113937dda6f664dcfd4e0"},{url:"assets/js/page-页面信息.b268a1a7.js",revision:"862c068c9dd9a81223dc3a35917caf1e"},{url:"assets/js/page-页面增强.ed5c97dc.js",revision:"67b8f3b4f27e02c34cb0949fd539fac6"},{url:"assets/js/page-页面配置.0c87baa0.js",revision:"1cb81dadd26be65d43416b25e2623880"},{url:"assets/js/page-项目指令.b817a737.js",revision:"776fe302dd0e6781d368d8593b2d2260"},{url:"assets/js/page-项目案例.4ad2ac2b.js",revision:"4ae82a556137f21b9ffb3aa41178d7fd"},{url:"assets/js/page-首页.88be2607.js",revision:"5243ed4debd0aaf095ee790d28cd319e"},{url:"assets/js/page-默认主题配置.fd615e85.js",revision:"2aa29f87d828973c375ebf61916a8fae"},{url:"assets/js/vendors~docsearch.7f8f33bd.js",revision:"f7a83f3c2e4d04afd32767b1fbd80ba4"},{url:"assets/js/vendors~flowchart.441e298d.js",revision:"98a2494b8c4a8f363d6d701447884dc0"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4d10d045.js",revision:"c6766ff1f90c1e2fada3031525e31988"},{url:"assets/js/vendors~photo-swipe.aa1530c5.js",revision:"58cf3e266e173f94e93d309f3927df09"},{url:"assets/js/vendors~reveal.3b97b216.js",revision:"d8b902fcf7380e140d9cf36fa725c805"},{url:"assets/js/vendors~valine.e9604dcb.js",revision:"4b0e5cd02fa3d6bf324973531625a971"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"437c8bcd0e1e7564db907dede0bcb9bc"},{url:"article/index.html",revision:"bd9232719d4b902da26fc5226391b2e8"},{url:"basic/index.html",revision:"33fe8dcf40b162e0eb4a8ee92872444e"},{url:"basic/markdown/demo/index.html",revision:"710f4206e3537dda95bd1f093b466e10"},{url:"basic/markdown/emoji/index.html",revision:"5a7649e93f6ed2c653bbcfb1813283ef"},{url:"basic/markdown/emoji/nature/index.html",revision:"07fcc5ee4db4aeef7b01d3b393c2a440"},{url:"basic/markdown/emoji/object/index.html",revision:"a52c0065ea65232d44c414c3d8ef6584"},{url:"basic/markdown/emoji/people/index.html",revision:"40e6edfd885c4dfc00718678c1fbc460"},{url:"basic/markdown/emoji/place/index.html",revision:"b48b9044851caca492389f767932e023"},{url:"basic/markdown/emoji/symbol/index.html",revision:"95dc0947f41aeadb5b3e8ca2a9879a5a"},{url:"basic/markdown/index.html",revision:"b06490904b24eb40b263de7ba4ee9014"},{url:"basic/vuepress/case/index.html",revision:"edc8a0cbe23e478642c4e3e35a8a7cd6"},{url:"basic/vuepress/command/index.html",revision:"09b3aa72ee516a257c2e099d77490621"},{url:"basic/vuepress/file/index.html",revision:"7903de0c08fef41c65736d155203b398"},{url:"basic/vuepress/index.html",revision:"e96014d792a61c101342f1537e67df84"},{url:"basic/vuepress/plugin/index.html",revision:"a06cea2f548db4c5e28af023bbb8dcbc"},{url:"basic/vuepress/theme/index.html",revision:"9c11db4ee4518d591aa6e3fb35f27289"},{url:"category/basic/index.html",revision:"76d5004341f2b4ef61d243a442952d25"},{url:"category/basic/page/2/index.html",revision:"c98d0e94bad43a7b4bab0e6dc35970bc"},{url:"category/basic/page/3/index.html",revision:"5c6744b1e1fdbc2edf3333f2913840db"},{url:"category/config/index.html",revision:"309b43990643725110572acc38513164"},{url:"category/config/page/2/index.html",revision:"9580b9553cc381ed752add21a734ff71"},{url:"category/config/page/3/index.html",revision:"191108d5106fcb4004024abfaf8c2fc1"},{url:"category/demo/index.html",revision:"b0e25c641303b3a3d164824b513b9db3"},{url:"category/FAQ/index.html",revision:"33564701e8a6d0f3f2ab2044be117f75"},{url:"category/feature/index.html",revision:"155173b27d5276c9b0dcf9f22a365329"},{url:"category/feature/page/2/index.html",revision:"a9330986bb82e149c19e4c9f11f55b88"},{url:"category/feature/page/3/index.html",revision:"1b57fa4e979a7f7eaa36a9ada1c6a844"},{url:"category/index.html",revision:"a7e3abbad1b9cbb92d3d5b2b3852d1bd"},{url:"category/instruction/index.html",revision:"14dd5ff81a247d6b16dd460578f85600"},{url:"category/layout/index.html",revision:"846ef1ac0b5c636ff3e50676b72bcb87"},{url:"category/layout/page/2/index.html",revision:"fb83aae73e4227a283b30187eab5a503"},{url:"category/markdown/index.html",revision:"7cef2c75c1e47bf50402555a26a1f6bb"},{url:"category/markdown/page/2/index.html",revision:"37e1a0b21a7d3296af100b95f5e320c2"},{url:"config/index.html",revision:"75de120a2fbf2e9bde34e6f09fdece78"},{url:"config/page/index.html",revision:"66caa0724aa4eeee4fe595793811752e"},{url:"config/plugin/container/index.html",revision:"c5f1422b613c6cb6d999b3e58215d942"},{url:"config/plugin/copyright/index.html",revision:"a26810c731629c385879ad97b03e7469"},{url:"config/plugin/index.html",revision:"f97bc3b84fdf0935d41fd0790d1bf7d1"},{url:"config/stylus/index.html",revision:"2e84d07ffc7b45ffe290e8622ae41d85"},{url:"config/theme/apperance/index.html",revision:"ee47d99e0da9d57685722dd36df2c37e"},{url:"config/theme/default/index.html",revision:"17661ad221a1eceaf8510bd354587a91"},{url:"config/theme/feature/index.html",revision:"4d6fd2f551ba706a386d6d10405784cf"},{url:"config/theme/index.html",revision:"0205ea9e844fdb4edcdd4f12bd1bc6ed"},{url:"config/theme/plugin/index.html",revision:"65bc0d92de47b2bd2f21719d2594f46f"},{url:"demo/index.html",revision:"b465fe3449cb9f04c7c237ed5afd98a5"},{url:"encrypt/index.html",revision:"cb29c65f784495dad02e8be541568004"},{url:"FAQ/index.html",revision:"d7e43b0b92768be4924e0b6afc9ffb42"},{url:"guide/feature/blog/index.html",revision:"106a4be2de749f5d1a047eb92c7f82f9"},{url:"guide/feature/comment/index.html",revision:"23e52ed5ea0e6acae75e6ca89548751a"},{url:"guide/feature/component/index.html",revision:"ad24e4d8a329eb4ee6166f71c80721d6"},{url:"guide/feature/encrypt/index.html",revision:"6c707e4dd6c46786bd1189720975e379"},{url:"guide/feature/feed/index.html",revision:"9b18421d55e596201e4d49176df5830f"},{url:"guide/feature/icon/index.html",revision:"e519ef09a79830149931e3a676dbc59d"},{url:"guide/feature/index.html",revision:"8f70117d27b944434edcea17526c98e9"},{url:"guide/feature/markdown/align/index.html",revision:"28c6834c477b0a8c921b42c27d169da0"},{url:"guide/feature/markdown/demo/index.html",revision:"1bd1bd2ac43c2460513a3e1e522f2f2d"},{url:"guide/feature/markdown/flowchart/index.html",revision:"d3682c29f56f781972872bf580bc159c"},{url:"guide/feature/markdown/footnote/index.html",revision:"bd56ab3fe1dfae2114f1cc77f21655df"},{url:"guide/feature/markdown/index.html",revision:"76408877d799ec58da71d4f97e086fd7"},{url:"guide/feature/markdown/mark/index.html",revision:"98dbda9e7f41939561d662315b62a871"},{url:"guide/feature/markdown/presentation/index.html",revision:"3da2dc3cc0cb615391e0683079e584b4"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"a277521e8180156ecec20967fbd1bbe8"},{url:"guide/feature/markdown/tex/index.html",revision:"3064843d47d422c6f7be13a372d0b4b6"},{url:"guide/feature/page-info/index.html",revision:"fab2eb84bc9de117bd6e19a80e493f8b"},{url:"guide/feature/page/index.html",revision:"e58e1d626ba03419b106a0ac3ac223d7"},{url:"guide/feature/pwa/index.html",revision:"e8e2cc21572022e0f83c2ecc2e100581"},{url:"guide/feature/seo-sitemap/index.html",revision:"9e8a74cb5cacadea429889f27d06b1d7"},{url:"guide/feature/theme/index.html",revision:"c554e5ae830af1d0bf8755e5db5f3bb0"},{url:"guide/feature/typescript/index.html",revision:"a780fb2f69c6e580c6d2a6ac4539d5f8"},{url:"guide/index.html",revision:"300c3afaf55dad4266eea4b23892882e"},{url:"guide/install/index.html",revision:"622b152de490e25eb48d88f12a8e66cd"},{url:"guide/layout/blog/index.html",revision:"c9dc60dfd41710e19ae3e84fb64e3259"},{url:"guide/layout/home/index.html",revision:"cd4e25b2747f6848a7f0a021ca227e33"},{url:"guide/layout/index.html",revision:"972434444c2b79f654d2d8567ba28ce0"},{url:"guide/layout/navbar/index.html",revision:"a9a829733af734ead2e1f1e31d940427"},{url:"guide/layout/page/index.html",revision:"627499d0651bdbc2fd2490e7cca22382"},{url:"guide/layout/sidebar/index.html",revision:"29ee3b7021684cee96c81a2de8d614af"},{url:"guide/layout/slides/index.html",revision:"8b68685f367ca73f51d8a7ae4306c522"},{url:"index.html",revision:"708cd97df26c260f2de78dc6243c6aa7"},{url:"slide/index.html",revision:"94277738a602a73ae06e7d6833569c27"},{url:"tag/blog/index.html",revision:"9bf71ec26fc548a0015402da71cb9b82"},{url:"tag/comment/index.html",revision:"11f6bf74e899114ee685a76e03884abe"},{url:"tag/components/index.html",revision:"0a5a7f65b3d85b95a5d1cb303f5fe977"},{url:"tag/config/index.html",revision:"d1c4a5b87ac18e1acc0a1622b19c4fe0"},{url:"tag/config/page/2/index.html",revision:"0f870d4e4a76cf7d99c0a9afc05e5ef4"},{url:"tag/config/page/3/index.html",revision:"e2d541979d6108b273fb9efbdff80e79"},{url:"tag/emoji/index.html",revision:"79928cf659dfc5fb89ef8d6db99c4a88"},{url:"tag/emoji/page/2/index.html",revision:"e11ebb5d8b265c86468f31feaefa1637"},{url:"tag/encrypt/index.html",revision:"6827b0169ab3ac926b2ff3168cf0a255"},{url:"tag/feature/index.html",revision:"2c24a4c177b5371b1a2d62686050a5b8"},{url:"tag/feature/page/2/index.html",revision:"25f8654962024bce53e61a02cd13e2c5"},{url:"tag/feature/page/3/index.html",revision:"c667f023069598fa8c723029b31b2f05"},{url:"tag/feature/page/4/index.html",revision:"84645f8530441496346920033a2b8f5d"},{url:"tag/feature/page/5/index.html",revision:"38e3b1b10a681f59902c99c7395b1220"},{url:"tag/feed/index.html",revision:"a295df924dbdb0fff2a078091f50ad68"},{url:"tag/frontmatter/index.html",revision:"d5c39f044cdcba9ac6c6459013605588"},{url:"tag/home/index.html",revision:"ce7c194e153f8975dfad0c09417162d8"},{url:"tag/icon/index.html",revision:"6b56ac9de1baee8ceeaa8e0deb80427d"},{url:"tag/index.html",revision:"1cc2dd16238ce9c7d793bcc6872c8124"},{url:"tag/intro/index.html",revision:"50e15f1086bea359296a9a08e9149be7"},{url:"tag/layout/index.html",revision:"2b6656e74d79005fe94d43315db2dbb6"},{url:"tag/layout/page/2/index.html",revision:"733570da9a453868703b2d0bce2d4e2b"},{url:"tag/markdown/index.html",revision:"b94327e10cbf2e043c4de7cfd100a1cd"},{url:"tag/markdown/page/2/index.html",revision:"572c3921826196b789943cd99da1acf9"},{url:"tag/markdown/page/3/index.html",revision:"4db32ce1ed3a78262bc2db3e89e5d434"},{url:"tag/markdown/page/4/index.html",revision:"e3f2db6ecd025b0decea8ca184845e43"},{url:"tag/navbar/index.html",revision:"444eb9503208b51e155ff16f883955da"},{url:"tag/page-info/index.html",revision:"6c09512823b33daca88dc35781b22753"},{url:"tag/page/index.html",revision:"465c72e59ad784f2878461eec2321ac2"},{url:"tag/plugin/index.html",revision:"34e2ecd3467442b5d39b2bcf4a401959"},{url:"tag/pwa/index.html",revision:"d31b4c605615e07b1d938a8b068dbe13"},{url:"tag/seo/index.html",revision:"0ce33bc35895ed921d40150d873c1f88"},{url:"tag/sidebar/index.html",revision:"495a529df335489eb35d7e17f1bfc095"},{url:"tag/sitemap/index.html",revision:"f8e198fba3a934ed64269e07d9379edc"},{url:"tag/slides/index.html",revision:"681af3ad115ed8a3d9a991d369831602"},{url:"tag/style/index.html",revision:"0795fb106259f5e7d88a1fb54c0d5bd0"},{url:"tag/themeConfig/index.html",revision:"914e45297056682c0c4bd5afbb7dd28e"},{url:"tag/typescript/index.html",revision:"328f6f790f487197d33c554e672e12c2"},{url:"tag/vuepress/index.html",revision:"73b905708e7f6aa1b4dc9da081e256d2"},{url:"tag/vuepress/page/2/index.html",revision:"82464777abff946d48aaf45eea9edd56"},{url:"timeline/index.html",revision:"99f0d934790f2e3db87a7b741230b289"},{url:"zh/basic/index.html",revision:"c94f629810972131da6de65284483c5f"},{url:"zh/basic/markdown/demo/index.html",revision:"517897824cd10a8e8b3653e2e6eaf0e2"},{url:"zh/basic/markdown/emoji/index.html",revision:"79bc1b4ea4d0a0f661a56249c5f30325"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"ae438ae38a1de9ed02adf56897462386"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"e70b51e4945d281f8bb651df62bd1e13"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"738d5a4fb29cc30fb072f25d49fc9d28"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"a64656c2a93603d33700d70dcdfc80b0"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"c633022993460fa49f1f89b39e8e0a48"},{url:"zh/basic/markdown/index.html",revision:"ea81bc7d3e8955414d601df2f5a3f33d"},{url:"zh/basic/vuepress/case/index.html",revision:"c89bd18080cde2ab558b3c65349344d9"},{url:"zh/basic/vuepress/command/index.html",revision:"1c03261cd5563f858928fc597d4315f0"},{url:"zh/basic/vuepress/file/index.html",revision:"60053e4d1c3cee8392e9ca9a98b43c78"},{url:"zh/basic/vuepress/index.html",revision:"2e9b67f6240dc70a9cf6f5d76bcc257f"},{url:"zh/basic/vuepress/plugin/index.html",revision:"2241c1062342e8d0b29f0a2f7b1fc362"},{url:"zh/basic/vuepress/theme/index.html",revision:"14ee4cf61feba0b3f850752ad3ce839c"},{url:"zh/config/index.html",revision:"047eaa041339c875a6d43eadd12ae826"},{url:"zh/config/page/index.html",revision:"9d2e3a59401483e9f7269c64009f31f7"},{url:"zh/config/plugin/container/index.html",revision:"1f09e1de0c4259a641a8cd63f05181c8"},{url:"zh/config/plugin/copyright/index.html",revision:"af2b99b7f1992ec2cc8064fca30f22f0"},{url:"zh/config/plugin/index.html",revision:"221b195cec703e277046eac5ba37c3ae"},{url:"zh/config/stylus/index.html",revision:"1ed7ae1f02db737d039ead94c16e2111"},{url:"zh/config/theme/apperance/index.html",revision:"d5ad77e3b0fa909006e37f2796130c4d"},{url:"zh/config/theme/default/index.html",revision:"74f36e612814938fa60d97931c1e32c0"},{url:"zh/config/theme/feature/index.html",revision:"1d3a670a5bccc6a4b80f99a0473a70d9"},{url:"zh/config/theme/index.html",revision:"58758480b0263ae8a7cfdb95541e4270"},{url:"zh/config/theme/plugin/index.html",revision:"e6b104a2a3a45da34acc62e07e8d161d"},{url:"zh/demo/index.html",revision:"85726a42beef7585f6f0e49f65db45d9"},{url:"zh/FAQ/index.html",revision:"e1a8f4b40a2da11b75487d69dc34cff1"},{url:"zh/guide/feature/blog/index.html",revision:"3fc9d0ecfb3fe1ee257c90245b70d4ca"},{url:"zh/guide/feature/comment/index.html",revision:"daed92e99dd82adebb55dd828c9170d9"},{url:"zh/guide/feature/component/index.html",revision:"2f069725a472ac18e4e6412f4f80d8ad"},{url:"zh/guide/feature/encrypt/index.html",revision:"a65b6eb3817c0d81bf121509a92962b4"},{url:"zh/guide/feature/feed/index.html",revision:"45c5eb1f83c2daebf21e1b62bb24feb1"},{url:"zh/guide/feature/icon/index.html",revision:"62dd9a689cfc1e86743770cacc3d13e6"},{url:"zh/guide/feature/index.html",revision:"0b881f8a32c39f79b4750ee3c9af9705"},{url:"zh/guide/feature/markdown/align/index.html",revision:"bcd4906fc0391509ac6745e241c1b10e"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"bed0c8b8a4a36cad7bf2220fff381d8c"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"061594200308e9c1d5819c63596702c7"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"8f01e3df25f34f33ff883c9c903ac321"},{url:"zh/guide/feature/markdown/index.html",revision:"8cea555c6c8e5ba560bb6e70e50b20dd"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"bfd702c970035a444b4d20debe0b6878"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"7a6a3049f1bf64385aebf9b63e395769"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"d37c584123ccc75be431322c874d8666"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"b903cc5d1101aefcbdd2ac49eb41a257"},{url:"zh/guide/feature/page-info/index.html",revision:"24edbc44cc207bcef80d435d922fd11c"},{url:"zh/guide/feature/page/index.html",revision:"a114f53bec4b00e0cd1287a87fc018e6"},{url:"zh/guide/feature/pwa/index.html",revision:"f150bf4968b08071ed6f5153d8ceb47f"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"c1f0ef84dff0682084546f8e933c11c0"},{url:"zh/guide/feature/theme/index.html",revision:"40a9e6f3e55044a850cebfe89f218fd6"},{url:"zh/guide/feature/typescript/index.html",revision:"ef7e98fb68f72eb075fb4900f96e9e51"},{url:"zh/guide/index.html",revision:"3a2776dc72231c67f88c0f11ea1f517d"},{url:"zh/guide/install/index.html",revision:"6fa81b2665517a57c151f0afd20d8853"},{url:"zh/guide/layout/blog/index.html",revision:"857c299ec2588ad0e2d0991fc3144731"},{url:"zh/guide/layout/home/index.html",revision:"c376f4b4ec6f51caa0a8e194fdabd679"},{url:"zh/guide/layout/index.html",revision:"32aebd61e681bf144eee076a1d480fbd"},{url:"zh/guide/layout/navbar/index.html",revision:"5c6376b0aff7bff303bb4231805e2033"},{url:"zh/guide/layout/page/index.html",revision:"151adcbc9105ead8b68cce2ff840fda5"},{url:"zh/guide/layout/sidebar/index.html",revision:"f30b68b948e4ed9eccbe38da46cb7348"},{url:"zh/guide/layout/slides/index.html",revision:"abc34d4b6e88928539913ab948685694"},{url:"zh/index.html",revision:"93e39d7db10b670e8c84dc2709828791"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.c3dc68c7.png",revision:"c3dc68c733676095a82cf811b2ee4f97"},{url:"assets/img/darkmode.49bdcce2.png",revision:"49bdcce283cf45658b2f14dd59581194"},{url:"assets/img/darkmode.f4b38a9a.png",revision:"f4b38a9a3c54865f430513351d683b7c"},{url:"assets/img/home.41b92bac.png",revision:"41b92bacb4e514c1a9dd0416542292fb"},{url:"assets/img/home.b0fc3313.png",revision:"b0fc3313e9b47b58bb3149a37176fdb5"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.576a16be.png",revision:"576a16be27110e8e710442bbc8f98416"},{url:"assets/img/iconfont-edit.ae174b67.png",revision:"ae174b67620849ac9aebf32ab1dcf9a2"},{url:"assets/img/iconfont-new.10965ce6.png",revision:"10965ce685dd8be3bc8a2898be737970"},{url:"assets/img/slides.1194fc70.png",revision:"1194fc70c2e81246453d8fdd819cab6e"},{url:"assets/img/slides.72c24f1c.png",revision:"72c24f1c815dcaca94bbc1cb45238d82"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
