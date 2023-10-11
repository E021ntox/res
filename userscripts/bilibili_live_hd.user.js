// ==UserScript==
// @name         BiliBili Live HD
// @version      0.1
// @description
// @icon         https://www.bilibili.com/favicon.ico
// @include      https://live.bilibili.com/*
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
    // const hevc = info.qualityCandidates.filter(x => x.qn.includes('hevc'))[0].qn
    // const avc = info.qualityCandidates.filter(x => !x.qn.includes('hevc'))[0].qn
    // player.switchQuality(hevc)

    // 小窗播放
    // const button = document.createElement('button')
    // button.style.marginRight = '5px'
    // button.innerHTML = '小窗播放'
    // button.onclick = () => window.open(document.location, '_blank', 'popup,noopener,noreferrer')
    // document.querySelector('#chat-control-panel-vm .icon-right-part').prepend(button)

    console.log('BiliBili Live HD: Done')

  })
  observer.observe(document, { childList: true, subtree: true })

})()
