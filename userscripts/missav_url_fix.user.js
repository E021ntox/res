// ==UserScript==
// @name         MissAV Fix
// @version      0.1
// @description  
// @match        https://missav.com/*
// @icon         https://missav.com/img/favicon.png
// @updateURL    https://github.com/E021ntox/res/raw/main/userscripts/missav_fix.user.js
// @downloadURL  https://github.com/E021ntox/res/raw/main/userscripts/missav_fix.user.js
// ==/UserScript==

(function () {
  'use strict'

  const url = location.pathname.split('/')

  if (url.length >= 2 && url[1].startsWith('dm')) {
    history.replaceState({}, '', location.href.replace(`/${url[1]}`, ''))
  }

})()
