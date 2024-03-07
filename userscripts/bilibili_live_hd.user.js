// ==UserScript==
// @name         BiliBili Live HD
// @version      0.1
// @description
// @icon         https://www.bilibili.com/favicon.ico
// @include      https://live.bilibili.com/*
// @updateURL    https://github.com/E021ntox/res/raw/main/userscripts/bilibili_live_hd.user.js
// ==/UserScript==

(function () {
  'use strict'

  const observer = new MutationObserver((mutationList, observer) => {

    if (!unsafeWindow.top.livePlayer) return
    if (!document.querySelector('#live-player > video')) return
    if (!document.querySelector('#chat-control-panel-vm .icon-right-part')) return

    observer.disconnect()

    const player = unsafeWindow.top.livePlayer
    const info = player.getPlayerInfo()
    // if (info.liveStatus != 1) return

    // 网页全屏
    document.querySelector('#live-player').dispatchEvent(new Event('dblclick', { bubbles: true }))
    document.querySelector('#aside-area-toggle-btn').click()

    // 原画
    player.switchQuality(info.qualityCandidates[0].qn)

    // 小窗播放
    // const button = document.createElement('button')
    // button.style.marginRight = '5px'
    // button.innerHTML = '小窗播放'
    // button.onclick = () => window.open(document.location, '_blank', 'popup,noopener,noreferrer')
    // document.querySelector('#chat-control-panel-vm .icon-right-part').prepend(button)

  })
  observer.observe(document, { childList: true, subtree: true })

})()
