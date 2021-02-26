(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{633:function(t,e,r){"use strict";r.r(e);var v=r(1),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("有些时候，你可能不想让你的某些文章被他人复制，或者你想让他人在复制时，自动生成一段版权信息到剪切板中。")]),t._v(" "),r("p",[t._v("为针对这一情况，"),r("code",[t._v("vuepress-theme-hope")]),t._v(" 引入了 "),r("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-copyright",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-copyright"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"启用插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启用插件"}},[t._v("#")]),t._v(" 启用插件")]),t._v(" "),r("p",[t._v("由于相当一部分用户将本主题用于构建文档，而文档站点通常不需要附加版权信息，所以本插件并不是默认启用的。")]),t._v(" "),r("p",[t._v("启用本插件，你需要将主题配置中的 "),r("code",[t._v("copyright")]),t._v(" 设置为 true，或者设置 "),r("code",[t._v("copyright.status")]),t._v(" 才能启用它。"),r("code",[t._v("copyright.status")]),t._v(" 可选的值为 "),r("code",[t._v("global")]),t._v(" 和 "),r("code",[t._v("local")]),t._v("，。默认的值是 "),r("code",[t._v("global")]),t._v(" 即全局启用 (也是 "),r("code",[t._v("themeConfig.copyright: true")]),t._v(" 的状态)。")]),t._v(" "),r("h2",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),r("p",[t._v("默认设置下，当用户从你的站点复制超过 100 字的消息时，在这段消息的尾部添加版权声明消息。")]),t._v(" "),r("p",[t._v("版权声明的作者名称会从你在主题中配置的作者信息或站点名称自动生成。")]),t._v(" "),r("h3",{attrs:{id:"触发字符数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#触发字符数"}},[t._v("#")]),t._v(" 触发字符数 "),r("Badge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),r("p",[t._v("你可以通过 "),r("code",[t._v("copyright.minLength")]),t._v(" 设置触发禁用复制或者追加版权信息的最小字符数，默认为 "),r("code",[t._v("100")]),t._v("。")]),t._v(" "),r("p",[t._v("在 themeConfig 和 frontmatter 均可以设置这一属性，前者会自动应用于全局，而后者仅作用于特定页面优先级高于前者。")]),t._v(" "),r("h3",{attrs:{id:"禁止复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#禁止复制"}},[t._v("#")]),t._v(" 禁止复制")]),t._v(" "),r("p",[t._v("在 frontmatter 中将 "),r("code",[t._v("copyright.noCopy")]),t._v(" 设置为 "),r("code",[t._v("true")]),t._v("。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("该行为收到 "),r("code",[t._v("minLength")]),t._v(" 的控制，即字符串没有达到 "),r("code",[t._v("minLength")]),t._v(" 的值的时候用户仍然可以进行复制操作。")])]),t._v(" "),r("h3",{attrs:{id:"禁止选中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#禁止选中"}},[t._v("#")]),t._v(" 禁止选中")]),t._v(" "),r("p",[t._v("在 frontmatter 中设置 "),r("code",[t._v("copyright.noSelect")]),t._v(" 为 "),r("code",[t._v("true")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"演示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[t._v("#")]),t._v(" 演示")]),t._v(" "),r("p",[t._v("请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。")]),t._v(" "),r("h2",{attrs:{id:"文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),r("p",[t._v("关于插件详细信息，请参见 "),r("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/copyright/#%E9%85%8D%E7%BD%AE%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-copyright 文档"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("这是一个 vuepress 社区插件，而不是内置插件。因此，如果你遇到问题，请前往 "),r("a",{attrs:{href:"https://github.com/vuepress/vuepress-plugin-copyright",target:"_blank",rel:"noopener noreferrer"}},[t._v("它的仓库"),r("OutboundLink")],1),t._v(" 寻求帮助。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);