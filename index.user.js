// ==UserScript==
// @name         open link current tab
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  在当前tab打开链接
// @author       xue1206
// @match        *://*.bilibili.com/*
// @license      GPLv3 License
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// ==/UserScript==

(function () {
    'use strict';

    const getBlankTargetAnchorElement = (e) => {
        let target = e.target;
        while (target) {
            if (target.tagName.toLowerCase() === 'a' && target.getAttribute('target') === '_blank') {
                return target
            }
            target = target.parentElement;
        }
        return null;
    }

    document.addEventListener('click', (e) => {
        console.log('my', e)
        let anchorElement = getBlankTargetAnchorElement(e);
        if (anchorElement) {
            e.stopPropagation();
            e.preventDefault();
            window.location.assign(anchorElement.href)
        }
    }, { capture: true })

})();
