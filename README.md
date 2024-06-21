# blink-chrome
Brings back blink functionality for Chrome.

A little while ago, I found out that you can't use blink in any way in Chrome (text-decoration:blink, the blink tag). What an outrage! After hearing this, I set out to create a way to bring blink back for those who wanted it. You can adjust the code in the function to make a specific element blink, or change the colors so it fits with your site's CSS. Just add the code from <code>blink.js</code> into your JS as a function somewhere and change it to your site's style specifications (color, etc.), as well as the timing on the <code>setInterval</code>. Thank you to the developers of the blink tag and Google Chrome for inspiring me to create this.

# NOTE/(6/21/2024)

Soooooo. Apparently this thing does not work unless the background is white and the color is black. I'll fix this by replacing the JS function with a CSS animation. This will be implemented soon, as I am lazy and have 80 trillion other projects, as most of us do.

Original JSFiddle: https://jsfiddle.net/Tumbleweed64/06bx42qg/show
