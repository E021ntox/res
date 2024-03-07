// ==UserScript==
// @name         gwdang
// @version      0.1
// @description
// @icon         https://www.gwdang.com/favicon.ico
// @include      https://*.taobao.com/*
// @include      https://*.tmall.com/*
// @include      https://*.jd.com/*
// @updateURL    https://github.com/E021ntox/res/raw/main/userscripts/gwdang.user.js
// @downloadURL  https://github.com/E021ntox/res/raw/main/userscripts/gwdang.user.js
// ==/UserScript==

(function () {
  'use strict'

  const gwd = document.createElement('script')
  gwd.setAttribute('src', 'https://browser.gwdang.com/get.js?f=/js/gwdang_extension.js')
  document.body.appendChild(gwd)

})()
