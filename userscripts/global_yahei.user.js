// ==UserScript==
// @name         Global YaHei
// @version      0.1
// @description
// @include      *
// @run-at       document-start
// @grant        GM_addStyle
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
