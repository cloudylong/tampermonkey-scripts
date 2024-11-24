// ==UserScript==
// @name         面试鸭
// @namespace    https://github.com/cloudylong/
// @version      1.0
// @description  允许用户选择文本
// @author       Walter
// @match        https://www.mianshiya.com/*
// @icon         https://www.mianshiya.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    /* 解除禁选文本 */
    body {
        user-select: initial !important;
    }
`);

(function () {
  "use strict";

})();
