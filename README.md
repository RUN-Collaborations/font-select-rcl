# Project Status
Under review.

# To Do
 * Show props with hooks in styleguide
 * Add a TW3 reference implementations

## Built With

 * React.js

## Project Goals
Deliver a React Hook Library (RHL) that:
1. Detects whether or not fonts are locally installed
   * Caters to styling of a selectable font dropdown list by the RCL consumer.
1. When specified, also detects whether or not [graphite-enabled](https://software.sil.org/fonts/) fonts are locally installed.

These goals are accomplished by testing fonts to indentify whether or not they are installed in the local environment, and returning the detection status of each font tested. Consumers can create their own font list or utilize the exported arrays of approximately 475 font families:
* The primary exported font array is [useFonts.json](https://github.com/RUN-Collaborations/font-select-rcl/blob/main/src/fonts/useFonts.json), which **includes** *Windows 11 system and supplemental font families* and *MacOS system and downloadable font families thru Monterey (v12)*, but **excludes**:
   * Variants like bold, italic, oblique, light, medium, thin, extra, etc
   * Thick fonts such as Impact and Cooper
   * Symbols, icons, emojis, assets, wingdings, webdings, ornaments, math, Marlett, etc
   * MS Office Cloud fonts or MacOS document fonts except where there is overlap
* An array of [graphite-enabled](https://software.sil.org/fonts/) fonts is also exported -- [useGraphiteEnabledFonts.json](https://github.com/RUN-Collaborations/font-select-rcl/blob/main/src/fonts/useGraphiteEnabledFonts.json):
   * These fonts are for use in applications with [Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) implemented, which supports “smart fonts” capable of advanced behaviors, including combination and positioning of letters in complex ways.
      * Firefox[1] is one such environment and [Electronite](https://www.npmjs.com/package/electronite) is another (see also {[Electronite Packager](https://www.npmjs.com/package/electronite-packager)).
         * The useGraphite hook detects Firefox.
   * The addition of user-controlled line-height settings and font-size settings are recommended for Graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for customizable presentation optimization.

## Font Detection Approach
The current approach compares the width of a test string in each font to that of a baseline generic-family, defaulted to monospace.[2] Apps can alternatively define their own baseline generic-family. Some other font detect approaches use multiple fallback generic-families, such as `serif, sans-serif, monospace`, though not always in that order.

### Font Test String
The default test string is currently 'abcdefghijklmnopqrstuvwxyz0123456789'. If a font exists that does not support any of these characters, then that font will not be detected. That use-case can also be mitigated as a custom test string can be utilized in place of the default.  Some test font string observed in other font detect approaches include:
* `'abcdefghijklmnopqrstuvwxyz& #0123456789'`
* `random_words_#!@#$^&*()+mdvejreu_RANDOM_WORDS`
* And the following suggestion, which seem to have originated with Lalit Patel[3]:  
   * "Use m or w because these two characters take up the maximum width."  
* See endnote[3] for some some compiled links to additional information.

### Handling Right-to-Left (RTL) and Left-to-Right (LTR) Text:
The useDetectDir hook enables simple autodection of RTL/LTR text through examining the range of unicode values of characters of the text. Code utilized in this hook originated from [Christopher Klapp](https://github.com/klappy)'s [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/master/src/helpers/detectRTL.js).

## Getting Started
1. Explore the [all-in-one Example](https://font-detect-rhl.netlify.app/#/All-in-one%20Example) and documentation of [useDetectFonts](https://font-detect-rhl.netlify.app/#/➤useDetectFonts), [useFonts](https://font-detect-rhl.netlify.app/#/➤useFonts), [useAssumeGraphite](https://font-detect-rhl.netlify.app/#/➤useAssumeGraphite), [useGraphiteEnabledFonts](https://font-detect-rhl.netlify.app/#/➤useGraphiteEnabledFonts), and [useDetectDir](https://font-detect-rhl.netlify.app/#/➤useDetectDir).

1. Then take advantage of these codesandbox examples applying font-detect-rhl:
   * [MUI Example](https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.js)
   * [useDetectRTL](https://codesandbox.io/s/usedetectrtl-font-detect-rhl-280fws?file=/src/components/DetectRTL.jsx)
   * [useAssumeGraphite](https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)

### Embedded Web Fonts and Web Fonts
Embedded web fonts and web fonts are not provided by this rhl, though are additional app concerns to contemplate. There are multiple ways in which web fonts can be delivered such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.
* If providing a web font for which a user may also have a local version, consider making allowances for the possiblity that version differences can exist. A solution that gives users maximum control is to allow selection of either a web font or a locally installed version of the font, taking care not to override one with the other. One approach is shown in this [codesandbox example utilizing MUI](https://codesandbox.io/s/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.js).
___

## Endnotes
[1] If [gfx.font_rendering.graphite.enabled](https://silnrsi.github.io/FDBP/en-US/Browsers%20as%20a%20font%20test%20platform.html) is ever set to false in about:config in Firefox, then Graphite will not be enabled and graphite-enabled fonts will not render properly. To access this setting in [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox):
* Type about:config in your address bar and press Enter.
* Click on the "I'll be careful, I promise" button.
* Type graphite in your search bar to look for gfx.font_rendering.graphite.enabled.
* Double-click on the preference name line to toggle the value between false and true. [A bold line indicates a setting that is set to true.](https://support.mozilla.org/en-US/kb/about-config-editor-firefox)

[2] Closely followed logic in [Detect Whether a Font is Installed](https://www.kirupa.com/html5/detect_whether_font_is_installed.htm), then after implementation found [fontexist.js](https://gist.github.com/alloyking/4154494). Uncertain of the original source.

[3] Additional references:
* [JavaScript/CSS Font Detector by Lalit Patel](https://gist.github.com/szepeviktor/d28dfcfc889fe61763f3)
* Additional reference links are available in the Alternatives section of https://github.com/rwoodr/fontcheck
* Consider also the following search strings to look for further information:
   * Detect Font
   * Font Detect
   * Font Detector
   * Font Check
   * Font Checker
   * Available Fonts
   * Is Font Available
