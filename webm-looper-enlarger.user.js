// ==UserScript==
// @name        Webm Looper and Enlarger
// @namespace   com.mrfatgoat.webmlooperEnlarger
// @author      WhatIsThisImNotGoodWithComputers, mrfatgoat
// @description A userscript which automatically enlarges and enables looping on Webm videos in your browser.
// @include     *.webm
// @run-at      document-start
// @version     1.0
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("\
  video {\
    width: 100%; \
    height: 100%; \
    box-shadow: none; \
  }");

var vids = document.getElementsByTagName('video');
for (i = 0; i < vids.length; i++) {
  vids[i].setAttribute('loop', 'true');
}
void 0;
