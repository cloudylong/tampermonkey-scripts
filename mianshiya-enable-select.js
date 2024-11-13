// ==UserScript==
// @name         面试鸭
// @namespace    https://github.com/cloudylong/
// @version      1.0
// @description  允许用户选择文本
// @author       Walter
// @match        https://www.mianshiya.com/*
// @icon         https://www.mianshiya.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const intervalID = setInterval(() => {
    if (document.body.style.userSelect == "none") {
      document.body.style.userSelect = "text"
      clearInterval(intervalID);
    }
  }, 1000);
})();
