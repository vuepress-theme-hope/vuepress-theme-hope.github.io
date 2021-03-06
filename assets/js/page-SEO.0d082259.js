(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{630:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("vuepress-theme-hope")]),t._v(" provide SEO enhancement by includeing "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/seo/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@mr-hope/vuepress-plugin-seo")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To make the plugin work better, you may need to look at "),a("RouterLink",{attrs:{to:"/config/page.html#page-information-configuration"}},[t._v("Page Information Configuration")]),t._v(" and configure them reasonably.")],1),t._v(" "),a("p",[t._v("If you don’t need this plugin, please set "),a("code",[t._v("themeConfig.seo")]),t._v(" to "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("SEO Intro")]),t._v(" "),a("p",[a("strong",[t._v("S")]),t._v("earch "),a("strong",[t._v("e")]),t._v("ngine "),a("strong",[t._v("optimization")]),t._v(' (SEO) is the process of improving the quality and quantity of site traffic to a site or a web page from search engines. SEO targets unpaid traffic (known as "natural" or "organic" results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search, news search, and industry-specific vertical search engines.')]),t._v(" "),a("p",[t._v("As an internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a site will receive more visitors from a search engine when sites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.")])]),t._v(" "),a("h2",{attrs:{id:"out-of-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#out-of-box"}},[t._v("#")]),t._v(" Out of box")]),t._v(" "),a("p",[t._v("The plugin is used out of the box. Without any configuration, it will extract the corresponding information from the page content to generate the "),a("code",[t._v("<meta>")]),t._v(" tag as much as possible.")]),t._v(" "),a("p",[t._v("By default, the plugin will read the site configuration, theme configuration and page frontmatter to automatically generate "),a("code",[t._v("<meta>")]),t._v(" tags as much as possible. Such as site name, page title, page type, writing date, last update date, and article tags are all automatically generated.")]),t._v(" "),a("p",[t._v("The following are the "),a("code",[t._v("<meta>")]),t._v(" tags and their values that will be injected into "),a("code",[t._v("<head>")]),t._v(" by default:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("property")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("content")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:url")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("themeConfig.hostname")]),t._v(" + "),a("code",[t._v("path")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:site_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("$site.title")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:title")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.title")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:description")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.description")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("'article'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:image")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("themeConfig.hostname")]),t._v(" + "),a("code",[t._v("page.frontmatter.image")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:updated_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.updatedTimeStamp")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:locale")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page._computed.$lang")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:locale:alternate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Other languages including in "),a("code",[t._v("$themeConfig.locales")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("twitter:card")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("'summary_large_image'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("twitter:image:alt")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("$site.title")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:author")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.author")]),t._v(" || "),a("code",[t._v("themeConfig.author")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:tag")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.tags")]),t._v(" || "),a("code",[t._v("page.frontmatter.tag")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:published_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.time")]),t._v(" || "),a("code",[t._v("page.frontmatter.date")]),t._v(" || "),a("code",[t._v("page.createTimeStamp")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:modified_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.updatedTimeStamp")])])])])]),t._v(" "),a("h2",{attrs:{id:"free-customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-customization"}},[t._v("#")]),t._v(" Free customization")]),t._v(" "),a("p",[t._v("You can configure the "),a("code",[t._v("meta")]),t._v(" option in the frontmatter of the page to customize the content of the "),a("code",[t._v("<meta>")]),t._v(" tag of a specific page for SEO.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("meta:\n  - name: keywords\n    content: SEO plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Will automatically inject "),a("code",[t._v('<meta name="keywords" content="SEO plugin" />')]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"customize-generation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-generation-process"}},[t._v("#")]),t._v(" Customize generation process")]),t._v(" "),a("p",[t._v("You can pass a function to "),a("code",[t._v("themeConfig.seo.seo")]),t._v(" to inject a new "),a("code",[t._v("<meta>")]),t._v(" tag or override the default generated content in the "),a("a",{attrs:{href:"#out-of-box"}},[t._v("Out of box")]),t._v(" section. You need to return an object in the format of "),a("code",[t._v("<property>: <content>")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, if you return "),a("code",[t._v("{'og:url':'google.com','og:image':'google.com/logo.jpg' }")]),t._v(", the plugin will inject the following content into "),a("code",[t._v("<head>")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com/logo.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("When the "),a("code",[t._v("<meta>")]),t._v(" you need to inject does not use "),a("code",[t._v("property")]),t._v(" and "),a("code",[t._v("content")]),t._v(", or you want to remove the existing meta, you can pass in a custom generation function to "),a("code",[t._v("themeConfig.seo.customMeta")]),t._v(" to completely customize the "),a("code",[t._v("<meta>")]),t._v(" tag .")]),t._v(" "),a("p",[t._v("The structure of "),a("code",[t._v("customMeta")]),t._v(" is "),a("code",[t._v("(meta: Meta[], info: PageSeoInfo) => void")])]),t._v(" "),a("p",[t._v("Interface of "),a("code",[t._v("PageSeoInfo")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageSeoInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Current Page Object */")]),t._v("\n  page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Vuepress Config  */")]),t._v("\n  site"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SiteConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Current ThemeConfig */")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ThemeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** langs which are supported */")]),t._v("\n  locale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Current page path */")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("The type of "),a("code",[t._v("Meta")]),t._v(" is "),a("code",[t._v('Record<"content" | "name" | "charset" | "http-equiv", string>')]),t._v(", the key of the object will be rendered as the attribute of the "),a("code",[t._v("<meta>")]),t._v(" tag, and the value will be rendered as The value of the corresponding attribute.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageSeoInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"og:type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("Will inject "),a("code",[t._v('<meta a="1" b="2" />')]),t._v(" into the "),a("code",[t._v("<head>")]),t._v(" of the current page, and remove any existing "),a("code",[t._v('<meta property="og:type" />')]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"rdfa-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdfa-1-1"}},[t._v("#")]),t._v(" RDFa 1.1")]),t._v(" "),a("p",[t._v("The theme adds rich media structure support to most of the website structure by following "),a("a",{attrs:{href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RDFa 1.1"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),a("p",[t._v("You can use "),a("a",{attrs:{href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Rich Media Structure Test Tool"),a("OutboundLink")],1),t._v(" to test this site.")])])])}),[],!1,null,null,null);e.default=n.exports},703:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("vuepress-theme-hope")]),t._v(" 通过内置 "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/seo/zh/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@mr-hope/vuepress-plugin-seo")]),a("OutboundLink")],1),t._v(" 为提供 SEO 增强功能。")]),t._v(" "),a("p",[t._v("为了使插件能够更好的工作，可能需要查看一下 "),a("RouterLink",{attrs:{to:"/zh/config/page.html#页面信息配置"}},[t._v("页面信息配置")]),t._v(" 并合理的配置它们。")],1),t._v(" "),a("p",[t._v("如果不需要这个插件，请设置 "),a("code",[t._v("themeConfig.seo")]),t._v(" 为 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("SEO 介绍")]),t._v(" "),a("p",[t._v("搜索引擎优化 ("),a("strong",[t._v("S")]),t._v("earch "),a("strong",[t._v("E")]),t._v("ngine "),a("strong",[t._v("O")]),t._v("ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。")])]),t._v(" "),a("h2",{attrs:{id:"开箱即用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开箱即用"}},[t._v("#")]),t._v(" 开箱即用")]),t._v(" "),a("p",[t._v("插件会向网页的 "),a("code",[t._v("<head>")]),t._v(" 注入一些 "),a("code",[t._v("<meta>")]),t._v(" 标签，使的网页对搜索引擎和社交媒体更加友好。")]),t._v(" "),a("p",[t._v("默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动为生成 "),a("code",[t._v("<meta>")]),t._v(" 标签。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。")]),t._v(" "),a("p",[t._v("以下是会被默认注入到 "),a("code",[t._v("<head>")]),t._v(" 中的 "),a("code",[t._v("<meta>")]),t._v(" 标签及其值:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:url")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("themeConfig.hostname")]),t._v(" + "),a("code",[t._v("path")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:site_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("$site.title")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:title")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.title")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:description")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.description")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("'article'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:image")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("themeConfig.hostname")]),t._v(" + "),a("code",[t._v("page.frontmatter.image")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:updated_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.updateTimeStamp")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:locale")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page._computed.$lang")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("og:locale:alternate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("$themeConfig.locales")]),t._v(" 包含的其他语言")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("twitter:card")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("'summary_large_image'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("twitter:image:alt")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("$site.title")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:author")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.author")]),t._v(" || "),a("code",[t._v("themeConfig.author")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:tag")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.tags")]),t._v(" || "),a("code",[t._v("page.frontmatter.tag")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:published_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.frontmatter.time")]),t._v(" || "),a("code",[t._v("page.frontmatter.date")]),t._v(" || "),a("code",[t._v("page.createTimeStamp")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("article:modified_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("page.updateTimeStamp")])])])])]),t._v(" "),a("h2",{attrs:{id:"自由定制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自由定制"}},[t._v("#")]),t._v(" 自由定制")]),t._v(" "),a("p",[t._v("你可以在页面的 frontmatter 中配置 "),a("code",[t._v("meta")]),t._v(" 选项，自主定制特定页面用于 SEO 的 "),a("code",[t._v("<meta>")]),t._v(" 标签内容。")]),t._v(" "),a("p",[t._v("如:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("meta:\n  - name: keywords\n    content: SEO plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("会自动注入 "),a("code",[t._v('<meta name="keywords" content="SEO plugin" />')]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"自定义生成过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义生成过程"}},[t._v("#")]),t._v(" 自定义生成过程")]),t._v(" "),a("p",[t._v("你可以向 "),a("code",[t._v("themeConfig.seo.seo")]),t._v(" 传入一个函数来注入新的 "),a("code",[t._v("<meta>")]),t._v(" 标签或覆盖默认生成内容。你需要按照 "),a("code",[t._v("<property>: <content>")]),t._v(" 的格式来返回一个对象。")]),t._v(" "),a("p",[t._v("比如你返回了 "),a("code",[t._v("{ 'og:url': 'google.com', 'og:image': 'google.com/logo.jpg' }")]),t._v("，则插件会注入以下内容到 "),a("code",[t._v("<head>")]),t._v(" 中:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com/logo.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("当你需要注入的 "),a("code",[t._v("<meta>")]),t._v(" 没有使用 "),a("code",[t._v("property")]),t._v(" 和 "),a("code",[t._v("content")]),t._v("，或者你想要移除已有的 meta，你可以向 "),a("code",[t._v("themeConfig.seo.customMeta")]),t._v(" 传入一个自定义生成函数，完全定制 "),a("code",[t._v("<meta>")]),t._v(" 标签。")]),t._v(" "),a("p",[a("code",[t._v("customMeta")]),t._v(" 的结构为 "),a("code",[t._v("(meta: Meta[], info: PageSeoInfo) => void")])]),t._v(" "),a("p",[a("code",[t._v("PageSeoInfo")]),t._v(" 的结构如下:")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageSeoInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 当前页面对象 */")]),t._v("\n  page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Vuepress 配置  */")]),t._v("\n  site"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SiteConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 主题配置 */")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ThemeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 站点支持的语言 */")]),t._v("\n  locale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 当前页面路径 */")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("code",[t._v("Meta")]),t._v(" 的类型为 "),a("code",[t._v('Record<"content" | "name" | "charset" | "http-equiv", string>')]),t._v("，对象的键会渲染为 "),a("code",[t._v("<meta>")]),t._v(" 标签的属性，值会渲染为对应属性的值。")]),t._v(" "),a("p",[t._v("比如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageSeoInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"og:type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("会向当前页面的 "),a("code",[t._v("<head>")]),t._v(" 注入 "),a("code",[t._v('<meta a="1" b="2" />')]),t._v("，并移除任何已存在的 "),a("code",[t._v('<meta property="og:type" />')]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"rdfa-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdfa-1-1"}},[t._v("#")]),t._v(" RDFa 1.1")]),t._v(" "),a("p",[t._v("主题通过遵循 "),a("a",{attrs:{href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RDFa 1.1"),a("OutboundLink")],1),t._v("，为网站的大部分结构添加了富媒体结构支持。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("你可以使用 "),a("a",{attrs:{href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google 富媒体结构测试工具"),a("OutboundLink")],1),t._v(" 测试本站点。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);