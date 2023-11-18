// ==UserScript==
// @name         gwdang
// @version      0.1
// @description
// @icon         https://www.gwdang.com/favicon.ico
// @include      https://item.taobao.com/*
// @include      https://detail.tmall.com/*
// @include      https://item.jd.com/*
// ==/UserScript==

(function () {
  'use strict'

  const gwd = document.createElement('script')
  gwd.setAttribute('src', 'https://browser.gwdang.com/get.js?f=/js/gwdang_extension.js')
  document.body.appendChild(gwd)
  
})()
