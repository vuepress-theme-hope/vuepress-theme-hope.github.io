(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{641:function(t,a,e){"use strict";e.r(a);var s=e(1),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("通过内置 "),e("a",{attrs:{href:"https://vuepress-theme-hope.github.io/comment/zh/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("@mr-hope/vuepress-plugin-comment")]),e("OutboundLink")],1),t._v("，"),e("code",[t._v("vuepress-theme-hope")]),t._v(" 实现了文章信息展示。")]),t._v(" "),e("h2",{attrs:{id:"启用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用"}},[t._v("#")]),t._v(" 启用")]),t._v(" "),e("p",[t._v("页面信息默认全局启用，同时支持页面配置"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn1"}},[t._v("[1]")]),e("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})]),t._v("。你可以在特定页面的 frontmatter 中设置 "),e("code",[t._v("pageInfo: false")]),t._v(" 来局部禁用它。")]),t._v(" "),e("p",[t._v("如果你需要保持全局禁用，请设置 "),e("code",[t._v("themeConfig.pageInfo")]),t._v(" 为 "),e("code",[t._v("false")]),t._v("。这样你可以在特定页面的 frontmatter 中设置 "),e("code",[t._v("pageInfo")]),t._v(" 来局部启用它。")]),t._v(" "),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数 "),e("Badge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),e("p",[e("code",[t._v("pageInfo")]),t._v(" 默认接受一个字符串数组，可以填入各条目名称，填入的顺序即是各条目显示的顺序。")]),t._v(" "),e("p",[t._v("条目可选的值和对应内容如下:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("条目")]),t._v(" "),e("th",[t._v("对应内容")]),t._v(" "),e("th",[t._v("页面 frontmatter 值")]),t._v(" "),e("th",[t._v("主题设置的配置项")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("'author'")])]),t._v(" "),e("td",[t._v("作者")]),t._v(" "),e("td",[t._v("author")]),t._v(" "),e("td",[t._v("author")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'time'")])]),t._v(" "),e("td",[t._v("写作日期")]),t._v(" "),e("td",[t._v("time")]),t._v(" "),e("td",[t._v("N/A")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'category'")])]),t._v(" "),e("td",[t._v("分类")]),t._v(" "),e("td",[t._v("category")]),t._v(" "),e("td",[t._v("N/A")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'tag'")])]),t._v(" "),e("td",[t._v("标签")]),t._v(" "),e("td",[t._v("tags")]),t._v(" "),e("td",[t._v("N/A")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'reading-time'")])]),t._v(" "),e("td",[t._v("预计阅读时间")]),t._v(" "),e("td",[t._v("N/A(自动生成)")]),t._v(" "),e("td",[t._v("N/A")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'word'")])]),t._v(" "),e("td",[t._v("字数")]),t._v(" "),e("td",[t._v("N/A(自动生成)")]),t._v(" "),e("td",[t._v("N/A")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("'visitor'")])]),t._v(" "),e("td",[t._v("访问量")]),t._v(" "),e("td",[t._v("visitor(仅 Valine 可用)")]),t._v(" "),e("td",[t._v("comment.visitor")])])])]),t._v(" "),e("p",[t._v("默认会显示 “作者，访问量，写作日期，分类，标签，预计阅读时间”。")]),t._v(" "),e("h3",{attrs:{id:"作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作者"}},[t._v("#")]),t._v(" 作者 "),e("Badge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),e("p",[t._v("例子:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("author: Mr.Hope")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("作者姓名也可以在 "),e("code",[t._v("themeConfig.author")]),t._v(" 中全局配置，这样每篇文章都会显示默认作者。这时，你仍可以在页面中配置 frontmatter 中的 "),e("code",[t._v("author")]),t._v(" 为一个新值来覆盖默认作者，或者设置 "),e("code",[t._v("author")]),t._v(" 为 "),e("code",[t._v("false")]),t._v(" 取消作者显示。")]),t._v(" "),e("h3",{attrs:{id:"写作日期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写作日期"}},[t._v("#")]),t._v(" 写作日期")]),t._v(" "),e("p",[t._v("建议 time 以标准格式输入日期，即 "),e("code",[t._v("xxxx-xx-xx")]),t._v(" 的形式，如 “2020 年 4 月 1 日” 应当输入为 "),e("code",[t._v("2020-04-01")])]),t._v(" "),e("p",[t._v("例子:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("time: 2020-01-01")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"分类与标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类与标签"}},[t._v("#")]),t._v(" 分类与标签")]),t._v(" "),e("p",[t._v("详见 "),e("RouterLink",{attrs:{to:"/zh/guide/blog/blog.html"}},[t._v("博客章节")])],1),t._v(" "),e("h3",{attrs:{id:"阅读时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阅读时间"}},[t._v("#")]),t._v(" 阅读时间")]),t._v(" "),e("p",[t._v("默认的统计方式是一分钟 300 字，你可以设置 "),e("code",[t._v("themeConfig.wordPerminute")]),t._v(" 来覆盖它，该选项不支持在页面单独配置。")]),t._v(" "),e("h3",{attrs:{id:"浏览量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览量"}},[t._v("#")]),t._v(" 浏览量 "),e("Badge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),e("p",[t._v("当配置 "),e("RouterLink",{attrs:{to:"/zh/guide/feature/comment.html"}},[t._v("评论功能")]),t._v(" 为 Valine 时，该功能默认启用。")],1),t._v(" "),e("p",[t._v("例子:")]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("visitor: false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("hr",{staticClass:"footnotes-sep"}),t._v(" "),e("section",{staticClass:"footnotes"},[e("ol",{staticClass:"footnotes-list"},[e("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[e("p",[e("strong",[t._v("支持页面配置")]),t._v(" "),e("Badge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),e("p",[e("strong",[t._v("支持页面配置")]),t._v(" 指主题允许页面的配置覆盖全局的配置。这意味着你可以在全局启用的情况下，在特定页面将其禁用，或在全局禁用的情况下在特定页面启用。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("例子")]),t._v(" "),e("p",[t._v("以路径导航为例:")]),t._v(" "),e("p",[t._v("该功能默认全局启用，即 "),e("code",[t._v("themeConfig.breadcrumb")]),t._v(" 默认为 "),e("code",[t._v("true")]),t._v("，同时你可以在特定页面的 Front Matter 中设置 "),e("code",[t._v("breadcrumb: false")]),t._v(" 来局部禁用它。")]),t._v(" "),e("p",[t._v("当然你也可以将 "),e("code",[t._v("themeConfig.breadcrumb")]),t._v(" 选项设置为 "),e("code",[t._v("false")]),t._v(" 来全局禁用它，之在特定页面的 Front Matter 中设置 "),e("code",[t._v("breadcrumb: true")]),t._v(" 来局部启用它。")])]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);