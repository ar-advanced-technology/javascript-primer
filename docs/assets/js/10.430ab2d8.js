(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"モーダルウィンドウ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#モーダルウィンドウ"}},[t._v("#")]),t._v(" モーダルウィンドウ")]),t._v(" "),s("h2",{attrs:{id:"問題"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#問題"}},[t._v("#")]),t._v(" 問題")]),t._v(" "),s("p",[t._v("今回の問題ではモーダルウィンドウを実装します。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codepen.io/MasahiroHarada/pen/REVmbY/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codepen.io/MasahiroHarada/pen/REVmbY/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("後述する仕様の通りに動作するように JavaScript を編集しましょう。"),s("br"),t._v("\n穴埋めになっているので "),s("code",[t._v("/* Insert code here... */")]),t._v(" の箇所にコードを足してください。")]),t._v(" "),s("p",[t._v("HTML と CSS は出来ているので変更しません。"),s("br"),t._v("\nただし重要なヒントですのでよく確認してください。")]),t._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),s("ul",[s("li",[t._v("jQuery などのライブラリは使用せずに実装してください。")]),t._v(" "),s("li",[t._v("対応ブラウザは Google Chrome 最新版とします。")]),t._v(" "),s("li",[t._v("解答例では ES2015 以降の文法も使用します。")])]),t._v(" "),s("h2",{attrs:{id:"モーダル機能の仕様"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#モーダル機能の仕様"}},[t._v("#")]),t._v(" モーダル機能の仕様")]),t._v(" "),s("h3",{attrs:{id:"開く"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#開く"}},[t._v("#")]),t._v(" 開く")]),t._v(" "),s("p",[s("code",[t._v("data-modal-open")]),t._v(" 属性を付与した要素をクリックすると、"),s("code",[t._v("data-modal-open")]),t._v("  の属性値を id に持つ要素をモーダルウィンドウとして表示します。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-modal-open")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myModal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Open Modal"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myModal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Content --\x3e")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"閉じる"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#閉じる"}},[t._v("#")]),t._v(" 閉じる")]),t._v(" "),s("p",[t._v("モーダル内の "),s("code",[t._v("data-modal-close")]),t._v(" 属性を持つ要素をクリックすると、その要素を内包するモーダルウィンドウが閉じられます。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myModal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-modal-close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Close Modal"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"進め方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#進め方"}},[t._v("#")]),t._v(" 進め方")]),t._v(" "),s("ol",[s("li",[t._v("問題で提示された CodePen を Fork して編集する。")]),t._v(" "),s("li",[t._v("課題ができたら URL を提出する。")])]),t._v(" "),s("h2",{attrs:{id:"ヒント"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ヒント"}},[t._v("#")]),t._v(" ヒント")]),t._v(" "),s("p",[t._v("モーダルが開いている状態と閉じている状態は、どのように切り替えるか？")]),t._v(" "),s("h2",{attrs:{id:"解答例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解答例"}},[t._v("#")]),t._v(" 解答例")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例と解説")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.hypertextcandy.com/javascript-practical-quiz-modal-window",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.hypertextcandy.com/javascript-practical-quiz-modal-window"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);