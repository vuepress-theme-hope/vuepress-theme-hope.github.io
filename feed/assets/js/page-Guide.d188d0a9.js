(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{458:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[a("code",[e._v("@mr-hope/vuepress-plugin-feed")]),e._v(" plugin will automatically generate feed in the following three formats for you")]),e._v(" "),a("ul",[a("li",[e._v("Atom 1.0")]),e._v(" "),a("li",[e._v("JSON 1.1")]),e._v(" "),a("li",[e._v("RSS 2.0")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),a("p",[e._v("Atom and JSON are provided to improve more feed software adaptation.")]),e._v(" "),a("p",[e._v("Please use RSS by default.")])]),e._v(" "),a("p",[e._v("Considering that rare people stick to feed now, this plugin provides a minimal configuration to adjust the automatic generation of detailed feed files. Of course, this plugin allows you to freely define the output content of the feed.")]),e._v(" "),a("p",[e._v("In order to generate the link address correctly, you need to provide "),a("code",[e._v("baseLang")]),e._v(" (root directory language) and "),a("code",[e._v("hostname")]),e._v(" (deployment domain name) in the plugin options or themeConfig. All other options are optional.")]),e._v(" "),a("h2",{attrs:{id:"channel-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-settings"}},[e._v("#")]),e._v(" Channel Settings")]),e._v(" "),a("p",[e._v("You can customize information of feed channel by setting the "),a("code",[e._v("channel")]),e._v(" option.")]),e._v(" "),a("p",[e._v("We recommend you to set the following options:")]),e._v(" "),a("ul",[a("li",[e._v("Convert the date when the feed was created to ISOString and write it to "),a("code",[e._v("channel.pubDate")])]),e._v(" "),a("li",[e._v("Set the content update cycle (unit: minute) in "),a("code",[e._v("channel.ttl")])]),e._v(" "),a("li",[e._v("Set your copyright information through "),a("code",[e._v("channel.copyright")])]),e._v(" "),a("li",[e._v("Set channel author via "),a("code",[e._v("channel.author")]),e._v(", or set "),a("code",[e._v("themeConfig.author")]),e._v(" as the author name.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Default channel settings")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The title and description of the channel is the name and description of the site by default")])]),e._v(" "),a("li",[a("p",[e._v("The link of the channel, the last update time will be automatically generated by the plugin.")])]),e._v(" "),a("li",[a("p",[e._v("The plugin will try to generate copyright information by reading the copyright information in the footer.")])])])]),e._v(" "),a("p",[e._v("For detailed options and their values, please see "),a("RouterLink",{attrs:{to:"/config/channel.html"}},[e._v("Configuration → Channel Settings")])],1),e._v(" "),a("h2",{attrs:{id:"project-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-settings"}},[e._v("#")]),e._v(" Project Settings")]),e._v(" "),a("h3",{attrs:{id:"default-generation-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-generation-logic"}},[e._v("#")]),e._v(" Default generation logic")]),e._v(" "),a("p",[e._v("By default, all articles will be added to the feed stream.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Articles")]),e._v(" "),a("p",[e._v("All pages whose "),a("code",[e._v("frontmatter.article")]),e._v(" is not "),a("code",[e._v("false")]),e._v(" and are not the homepage will be regarded as articles.")])]),e._v(" "),a("p",[a("code",[e._v("@mr-hope/vuepress-plugin-feed")]),e._v(" will read the following options from frontmatter:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("description")]),e._v(": the description of the article")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("author")]),e._v(": the name of the author of the article")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("copyrightText")]),e._v(": the copyright information of the article")])])]),e._v(" "),a("p",[e._v("-"),a("code",[e._v("time")]),e._v(": the publication time of the article")]),e._v(" "),a("p",[e._v("-"),a("code",[e._v("image")]),e._v(": the cover of the article")]),e._v(" "),a("p",[a("code",[e._v("@mr-hope/vuepress-plugin-feed")]),e._v(" also use the following items:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("page.excerpt")]),e._v(": any content before "),a("code",[e._v("\x3c!-- more --\x3e")]),e._v(" , used as the alternative description of the article")]),e._v(" "),a("li",[e._v("The rendered page content: used to describe the content of the feed item")])]),e._v(" "),a("h3",{attrs:{id:"customize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize"}},[e._v("#")]),e._v(" Customize")]),e._v(" "),a("p",[e._v("You can control the generation of feed items for specific articles by configuring the feed options in frontmatter.")]),e._v(" "),a("p",[e._v("To remove a specific page from the feed, you can set "),a("code",[e._v("feed.enable")]),e._v(" to "),a("code",[e._v("false")]),e._v(" in the frontmatter of the page.")]),e._v(" "),a("p",[e._v("You can also add content directly to the feed plugin via "),a("code",[e._v("frontmatter.feed")]),e._v(". The supported options are as follows:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("feed.title")]),e._v(": Override default article title for feed items")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("feed.description")]),e._v(": Override the default article description for the feed item")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("feed.author")]),e._v(": Set multiple authors and detailed author information, the format is "),a("code",[e._v("FeedAuthor[] | FeedAuthor")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Read from "),a("code",[e._v("frontmatter.author")]),e._v(" by default.")])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("FeedAuthor Format")]),e._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FeedAuthor")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Author name */")]),e._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Author email */")]),e._v("\n  email"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Author website */")]),e._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n   * Author’s avatar address\n   *\n   * Square, preferably not less than 128×128, transparent background\n   */")]),e._v("\n  avator"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("feed.contributor")]),e._v(": Set multiple contributors and detailed contributor information, the format is "),a("code",[e._v("FeedContributor[] | FeedContributor")])]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("FeedContributor")]),e._v(" option is exactly the same as "),a("code",[e._v("FeedAuthor")]),e._v(". This option is the same as "),a("code",[e._v("feed.author")]),e._v(" by default.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("feed.category")]),e._v(": Set multiple detailed categories information, the format is "),a("code",[e._v("FeedCategory[] | FeedCategory")])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("FeedCategory Format")]),e._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FeedCategory")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Category name */")]),e._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n   * Category domain\n   *\n   * @description rss format only\n   */")]),e._v("\n  domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n   * The categorization scheme via a URI\n   *\n   * @description atom format only\n   */")]),e._v("\n  scheme"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("feed.guid")]),e._v(": The feed item identifier, permanent link of the page or page link by default")])])]),e._v(" "),a("p",[e._v("For detailed options and their default values, please see "),a("RouterLink",{attrs:{to:"/config/item.html"}},[e._v("Configuration → Item")])],1),e._v(" "),a("h2",{attrs:{id:"output-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-configuration"}},[e._v("#")]),e._v(" Output configuration")]),e._v(" "),a("p",[e._v("You can use the "),a("code",[e._v("output")]),e._v(" in the configuration options to decide which feed file formats to output and their location.")]),e._v(" "),a("p",[e._v("For detailed options and their default values, please refer to "),a("RouterLink",{attrs:{to:"/config/#output"}},[e._v("Configuration → Output")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);