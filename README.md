# Webm Looper (and Enlarger) Userscript
Forked from [Here](https://github.com/WhatIsThisImNotGoodWithComputers/webm-looper-userscript)

A userscript which automatically enables looping on Webm videos in your browser. It will also automatically expand the video size to fit the entire screen.
This requires you to have a userscript engine installed, one like GreaseMonkey, Scriptish or TamperMonkey.

By default it only loops single .webm files (urls which end in .webm). Include any page you'd like and it should work on that page. Note that it loops every video, not just webm.

# [Click here to install](https://github.com/mrfatgoat/webm-looper-userscript/raw/master/webm-looper-enlarger.user.js)

# Enabling local files on GreaseMonkey

If you wish to use this on local files (file:/// urls) you need to enable this in GreaseMonkey.
Navigate to about:config in Firefox and search for `extensions.greasemonkey.fileIsGreaseable`. Flip this to true.
