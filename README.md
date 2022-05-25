## Font-Detect-RHL <sub><sub><sup><sup>[[npm](https://www.npmjs.com/package/font-detect-rhl) | [github](https://github.com/RUN-Collaborations/font-detect-rhl) | [netlify](https://font-detect-rhl.netlify.app/) ]</sup></sup></sub></sub>
Font-Detect-RHL is a [React.js](https://reactjs.org/) Hook Library (RHL) that:
1. Detects whether or not fonts are locally installed, catering to a selectable font dropdown list that is stylable by the RHL consumer.
1. When specified, also detects whether or not [Graphite-enabled](https://software.sil.org/fonts/) fonts are locally installed.
1. The aim of the provided font lists are to cater to normal / regular / roman / plain fonts, with the option for RHL consumers to add their own fonts in as desired.

This is accomplished by testing fonts to identify whether or not they are installed in the local environment, and returning the detection status of each font tested. Consumers can utilize the exported arrays listing over 730 *font families<sup id="a1">[[1]](#f1)</sup>* and/or specify their own fonts.

### Contents: <sub><sup id="Contents">[[Font Families](#Font_Families) | [Font Detection Approach](#Font_Detection_Approach) | [Getting Started](#Getting_Started)]</sup></sub>

## <span id="Font_Families">Font Families </span><sub><sub><sup><sup>[[fontList](https://font-detect-rhl.netlify.app/#/Example?id=usedetectfonts) | [graphiteEnabledFontList](https://font-detect-rhl.netlify.app/#/Example?id=graphiteenabledfontlist)] ... [↩](#Contents)</sup></sup></sub></sub>

The primary exported font array is [fontList.json](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/fonts/fontList.json) ([fontList](https://font-detect-rhl.netlify.app/#/Example?id=usedetectfonts)), which ***includes***:
* Windows 11 system and supplemental font families
* MacOS system and downloadable font families thru Monterey (v12)
* Over 250 fonts common to multiple *Linux desktop environments/distributions<sup id="a2">[[2]](#f2)</sup>*
* Pre-installed *Android fonts<sup id="a3">[[3]](#f3)</sup>*
* iOS system *fonts<sup id="a4">[[4]](#f4)</sup>*

Note, however that this provided font list ***excludes***:
* Font names that include hairline, thin, ultra-light, extra-light, light, book, medium, demi-bold, semi-bold, bold, extra-bold, extra heavy, black, extra-black, ultra-black, ultra, italic, slanted, and oblique.
* Thick fonts such as Impact and Cooper
* Symbols, icons, emojis, assets, wingdings, webdings, dingbats, ornaments, math, music, hieroglyphs, cuneiform, numbers, Marlett, etc.
* MS Office Cloud fonts or MacOS document fonts except where there is overlap

A separate array of [Graphite-enabled](https://software.sil.org/fonts/) fonts is also exported -- [graphiteEnabledFontList.json](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/fonts/graphiteEnabledFontList.json) ([graphiteEnabledFontList](https://font-detect-rhl.netlify.app/#/Example?id=graphiteenabledfontlist)):
* These fonts are for use in applications with [Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) implemented, a rendering engine for complex scripts that supports “smart fonts” capable of advanced behaviors, including combination and positioning of letters in complex ways.
   * *Firefox<sup id="a5">[[5]](#f5)</sup>* is an application in which Graphite is implemented, and [Electronite](https://www.npmjs.com/package/electronite) is a framework that can be used to build and [package](https://www.npmjs.com/package/electronite-packager) others.
   * Addition of line-height settings and font-size settings are recommended for Graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for presentation optimization.

## <span id="Font_Detection_Approach">Font Detection Approach </span><sub><sub><sup><sup>[[useDetectFonts](https://font-detect-rhl.netlify.app/#/Example?id=usedetectfonts)] ... [↩](#Contents)</sup></sup></sub></sub>
The current approach compares the width of a test string in each font to that of a baseline generic-family, defaulted to monospace<span style="white-space:nowrap;">.*<sup id="a6">[[6]](#f6)</sup>*</span> Apps can also define their own baseline generic-family if prefered. Some other font detect approaches use multiple fallback generic-families, such as `serif, sans-serif, monospace`, though not always in that order.

### Font Test String
The default test string is currently `'abcdefghijklmnopqrstuvwxyz0123456789'`. If a font exists that does not support any of these characters, then that font will not be detected. That use-case can be mitigated through use of a custom test string that exists in both the baseline font and the tested font. Some test strings observed in other font detect approaches include `'abcdefghijklmnopqrstuvwxyz& #0123456789'`, `'random_words_#!@#$^&*()+mdvejreu_RANDOM_WORDS'`, and the following suggestion (which seem to have originated with *Lalit Patel<sup id="a7">[[7]](#f7)</sup>*): *"Use m or w because these two characters take up the maximum width."* See *endnotes<sup>[[7]](#f7)</sup>* for links to additional information.

### Handling Right-to-Left (RTL) and Left-to-Right (LTR) Text <sub><sup>[[useDetectDir](https://font-detect-rhl.netlify.app/#/Example?id=usedetectdir)]</sup></sub>
The useDetectDir hook enables simple autodection of RTL/LTR text through examining the range of unicode values of characters of the text. Code utilized in this hook originated from [Christopher Klapp](https://github.com/klappy)'s [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js).

## <span id="Getting_Started">Getting Started </span><sub><sub><sup><sup>... [↩](#Contents)</sup></sup></sub></sub>
1. Explore the [Styleguide Example](#/Example) and documentation of [useDetectFonts](#/Example?id=usedetectfonts), [fontList](#/Example?id=fontlist), [useAssumeGraphite](#/Example?id=useassumegraphite), [graphiteEnabledFontList](#/Example?id=graphiteenabledfontlist), and [useDetectDir](#/Example?id=usedetectdir).

1. Then take advantage of these codesandbox examples applying font-detect-rhl:
   * [MUI Example](https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.js)
      * *See also [Simple USFM Editor App](https://simple-usfm-editor-app.netlify.app/) / [source code](https://github.com/klappy/simple-usfm-editor-app/blob/main/src/components/font-configuration/)*
   * [Tailwind CSS Example with Headless UI](https://codesandbox.io/s/font-detect-rhl-react18-tailwindcss3-headlessui-sfcneo?file=/src/components/Example.jsx)<br /><sup>On 502 gateway errors, wait for the codesandbox terminal frame to reach "webpack compiled successfully" then refresh the browser frame ( ⟳ ).</sup>
      * *See also [Simple USFM Alignment Prototype](https://simple-usfm-alignment-prototype.netlify.app/) / [source code](https://github.com/RUN-Collaborations/simple-usfm-alignment-prototype/blob/master/src/components/FontDropdown.jsx))*
   * [useDetectDir](https://codesandbox.io/s/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx)
   * [useAssumeGraphite](https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)

### Web Fonts
Web fonts are not addressed by this rhl, though are an additional app concern for developers to consider. There are multiple ways in which web fonts can be delivered, such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.

If providing a web font for which a user may also have a local version, consider making allowances for the possiblity that version differences can exist. Consider giving users maximum control by allowing selection of either a web font or a locally installed version of the font, taking care not to override one with the other.

For one approach to webfonts coupled with locally detected fonts, see:
   * *[Font-Detect-RHL + Embedded Web Fonts with MUI in Codesandbox](https://codesandbox.io/s/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.js)*
   * *[Font-Detect-RHL + Embedded Web Fonts with TailwindCSS and HeadlessUI in Codesandbox](https://codesandbox.io/s/font-detect-rhl-react18-tailwindcss3-headlessui-embedded-web-fonts-6m4gdt?file=/src/components/Example.jsx)*<br /><sup>On 502 gateway errors, wait for the codesandbox terminal frame to reach "webpack compiled successfully" then refresh the browser frame ( ⟳ ).</sup>

And for further insight on application of webfonts, see *[How to Optimize Web Font Loading Performance with Best Practices](https://www.holisticseo.digital/pagespeed/loading-font/)*.
___

## Endnotes
[<b id="f1">1</b>] ... "Font family refers to all the variations of a typeface that share a common name. For example, Times Roman, Times Italic, Times Bold, and Times Bold Italic are all members of the same font family." [[source](http://theworldsgreatestbook.com/choosing-book-font/)] ... [↩](#a1)

[<b id="f2">2</b>] ... Fonts installed with linux vary significantly by desktop environment and [distribution](https://distrowatch.com/). The compiled list included here represents style="Regular", style="Normal", and style="Roman" from an `fc-list` from at least four of the following combinations:
* Cinnamon - Linux Mint 20.3
* Fluxbox - MX Linux 22.1
* Gnome - Manjaro 21.2.6
* Gnome - Ubuntu 22.04
* KDE (Plasma) - MX Linux 22.1
* Mate - Linux Mint 20.3
* Mate - Ubuntu 20.04.4
* Xfce - Endeavour Apollo 22.1
* Xfce - Linux Mint 20.3
* Xfce - MX Linux 22.1 ... [↩](#a2)

[<b id="f3">3</b>] ... Android: Droid Sans, Droid Serif), Droid Sans Mono, and Roboto [[source](https://www.exeideas.com/2016/02/list-of-default-fonts-in-android.html)] [[see also](https://stackoverflow.com/questions/3532397/how-to-retrieve-a-list-of-available-installed-fonts-in-android)] ... [↩](#a3)

[<b id="f4">4</b>] ... iOS: SF Pro Text, SF Pro Display, SF Pro, SF Compact, SF Mono, SF Arabic, and New York [[source](https://9to5mac.com/2021/10/25/apple-refreshes-design-resources-for-ios-15-with-new-templates-fonts-and-website/)] [[see also](https://developer.apple.com/fonts/)], and many pre-installed fonts that overlap with MacOS system and downloadable font families [[source](https://developer.apple.com/fonts/system-fonts/)]  ... [↩](#a4)

[<b id="f5">5</b>] ... If [gfx.font_rendering.graphite.enabled](https://silnrsi.github.io/FDBP/en-US/Browsers%20as%20a%20font%20test%20platform.html) is ever set to false in about:config in [Firefox](https://www.mozilla.org/firefox/all/), then Graphite will not be enabled and graphite-enabled fonts will not render properly. To access this setting in [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox):
* Type about:config in your address bar and press Enter.
* Click on the "I'll be careful, I promise" button.
* Type "graphite" in your search bar to look for gfx.font_rendering.graphite.enabled.
* Double-click on the preference name line to toggle the value between false and true. [A bold line indicates a setting that is set to true.](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) ... [↩](#a5)

[<b id="f6">6</b>] ... Closely followed logic in [Detect Whether a Font is Installed](https://www.kirupa.com/html5/detect_whether_font_is_installed.htm), then after implementation found [fontexist.js](https://gist.github.com/alloyking/4154494). Uncertain of the original source. ... [↩](#a6)

[<b id="f7">7</b>] ... Additional references:
* [JavaScript/CSS Font Detector by Lalit Patel](https://gist.github.com/szepeviktor/d28dfcfc889fe61763f3)
* Additional reference links are available in the Alternatives section of https://github.com/rwoodr/fontcheck
* Consider also the following search strings to look for further information:
   * Detect Font
   * Font Detect
   * Font Detector
   * Font Check
   * Font Checker
   * Available Fonts
   * Is Font Available ... [↩](#a7)
