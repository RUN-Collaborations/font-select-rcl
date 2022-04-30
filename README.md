## Built With

 * React.js

## Project Goals
Deliver a React Hook Library (RHL) that:
1. Detects whether or not fonts are locally installed
   * Caters to styling of a selectable font dropdown list by the RHL consumer.
1. When specified, also detects whether or not [graphite-enabled](https://software.sil.org/fonts/) fonts are locally installed.

These goals are accomplished by testing fonts to identify whether or not they are installed in the local environment, and returning the detection status of each font tested. Consumers can create their own font list or utilize the exported arrays of approximately 475 font families:
* The primary exported font array is [fontList.json](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/fonts/fontList.json), which **includes** *Windows 11 system and supplemental font families* and *MacOS system and downloadable font families thru Monterey (v12)*, but **excludes**:
   * Variants like bold, italic, oblique, light, medium, thin, extra, etc
   * Thick fonts such as Impact and Cooper
   * Symbols, icons, emojis, assets, wingdings, webdings, ornaments, math, Marlett, etc
   * MS Office Cloud fonts or MacOS document fonts except where there is overlap
* An array of [graphite-enabled](https://software.sil.org/fonts/) fonts is also exported -- [graphiteEnabledFontList.json](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/fonts/graphiteEnabledFontList.json):
   * These fonts are for use in applications with [Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) implemented, a rendering engine for complex scripts that supports “smart fonts” capable of advanced behaviors, including combination and positioning of letters in complex ways.
      * *Firefox<sup id="a1">[[1]](#f1)</sup>* is an application in which Graphite is implemented, and [Electronite](https://www.npmjs.com/package/electronite) is a framework that can be used to build and [package](https://www.npmjs.com/package/electronite-packager) others.
      * Addition of line-height settings and font-size settings are recommended for Graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for presentation optimization.

## <span id="Font_Detection_Approach">Font Detection Approach</span>
The current approach compares the width of a test string in each font to that of a baseline generic-family, defaulted to monospace<span style="white-space:nowrap;">.*<sup id="a2">[[2]](#f2)</sup>*</span> Apps can also define their own baseline generic-family if prefered. Some other font detect approaches use multiple fallback generic-families, such as `serif, sans-serif, monospace`, though not always in that order.

### Font Test String
The default test string is currently `'abcdefghijklmnopqrstuvwxyz0123456789'`. If a font exists that does not support any of these characters, then that font will not be detected. That use-case can be mitigated through use of a custom test string that exists in both the baseline font and the tested font. Some test strings observed in other font detect approaches include `'abcdefghijklmnopqrstuvwxyz& #0123456789'`, `'random_words_#!@#$^&*()+mdvejreu_RANDOM_WORDS'`, and the following suggestion (which seem to have originated with *Lalit Patel<sup id="a3">[[3]](#f3)</sup>*): *"Use m or w because these two characters take up the maximum width."* See *endnotes<sup>[[3]](#f3)</sup>* for links to additional information.

### Handling Right-to-Left (RTL) and Left-to-Right (LTR) Text:
The useDetectDir hook enables simple autodection of RTL/LTR text through examining the range of unicode values of characters of the text. Code utilized in this hook originated from [Christopher Klapp](https://github.com/klappy)'s [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js).

## Getting Started
1. Explore the [Styleguide Example](#/Example) and documentation of [useDetectFonts](#/Example?id=usedetectfonts), [fontList](#/Example?id=fontlist), [useAssumeGraphite](#/Example?id=useassumegraphite), [graphiteEnabledFontList](#/Example?id=graphiteenabledfontlist), and [useDetectDir](#/Example?id=usedetectdir).

1. Then take advantage of these codesandbox examples applying font-detect-rhl:
   * [MUI Example](https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.js)
   * [useDetectDir](https://codesandbox.io/s/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx)
   * [useAssumeGraphite](https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)
1. Here are links to additional reference applications:
   * [Simple USFM Text Editor App](https://simple-usfm-editor-app.netlify.app/) | [source code](https://github.com/klappy/simple-usfm-editor-app/blob/main/src/components/FontSelect.jsx)

### Embedded Web Fonts and Web Fonts
Embedded web fonts and web fonts are not provided by this rhl, though are additional app concerns to contemplate. There are multiple ways in which web fonts can be delivered such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.

If providing a web font for which a user may also have a local version, consider making allowances for the possiblity that version differences can exist. A solution that gives users maximum control is to allow selection of either a web font or a locally installed version of the font, taking care not to override one with the other.
___

## Endnotes
[<b id="f1">1</b>] ... If [gfx.font_rendering.graphite.enabled](https://silnrsi.github.io/FDBP/en-US/Browsers%20as%20a%20font%20test%20platform.html) is ever set to false in about:config in [Firefox](https://www.mozilla.org/firefox/all/), then Graphite will not be enabled and graphite-enabled fonts will not render properly. To access this setting in [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox):
* Type about:config in your address bar and press Enter.
* Click on the "I'll be careful, I promise" button.
* Type graphite in your search bar to look for gfx.font_rendering.graphite.enabled.
* Double-click on the preference name line to toggle the value between false and true. [A bold line indicates a setting that is set to true.](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) ... [↩](#a1)

[<b id="f2">2</b>] ... Closely followed logic in [Detect Whether a Font is Installed](https://www.kirupa.com/html5/detect_whether_font_is_installed.htm), then after implementation found [fontexist.js](https://gist.github.com/alloyking/4154494). Uncertain of the original source. ... [↩](#a2)

[<b id="f3">3</b>] ... Additional references:
* [JavaScript/CSS Font Detector by Lalit Patel](https://gist.github.com/szepeviktor/d28dfcfc889fe61763f3)
* Additional reference links are available in the Alternatives section of https://github.com/rwoodr/fontcheck
* Consider also the following search strings to look for further information:
   * Detect Font
   * Font Detect
   * Font Detector
   * Font Check
   * Font Checker
   * Available Fonts
   * Is Font Available ... [↩](#a3)
