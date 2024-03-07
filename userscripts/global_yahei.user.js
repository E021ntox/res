// ==UserScript==
// @name         Global YaHei
// @version      0.1
// @description
// @include      *
// @run-at       document-start
// @grant        GM_addStyle
// @updateURL    https://github.com/E021ntox/res/raw/main/userscripts/global_yahei.user.js
// @downloadURL  https://github.com/E021ntox/res/raw/main/userscripts/global_yahei.user.js
// ==/UserScript==

(function () {
  'use strict'

  const css = `

@font-face { font-family: "SimSun"; src: local("Microsoft YaHei UI"); }
@font-face { font-family: "NSimSun"; src: local("Microsoft YaHei UI"); }
@font-face { font-family: "宋体"; src: local("Microsoft YaHei UI"); }

`

  GM_addStyle(css)

})()
