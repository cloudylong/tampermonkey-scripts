// ==UserScript==
// @name         豆瓣预告片优化
// @namespace    https://github.com/cloudylong/
// @version      1.0
// @description  优化豆瓣预告片的浏览体验
// @author       Walter
// @match        https://movie.douban.com/trailer/*
// @icon         https://img3.doubanio.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // 0.0（静音）~ 1.0（最大音量）
  document.querySelector("video").volume = 0.3;
})();
