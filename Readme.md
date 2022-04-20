# Project Status
THIS IS A WORK IN PROGRESS. Components and props are subject to change.

For an example of where this is headed, see the "Set Font" dropdowns at [simple-usfm-alignment-prototype.netlify.app](https://simple-usfm-alignment-prototype.netlify.app/).

# To Do
 * Show clearly how to consume the rhl
 * Further simplify styleguide
 * Add more reference implementations
 * Consider json font data distribution method
   * Consider webfont field(s)?

## Project Goals
Deliver a React Hook Library (RHL) that:
 * Detects whether or not fonts are locally installed
   * Caters to styling of a selectable font dropdown list by the RCL consumer.
 * When specified, also detect whether or not [graphite-enabled](https://software.sil.org/fonts/) fonts are locally installed

Do this by:
 * Test around 500 font families to indentify whether or not they are installed in the local environment, and return detection status of each fonts.
    * Font tested are listed in the [fonts.json array](https://github.com/RUN-Collaborations/font-select-rcl/blob/main/src/fonts/fonts.json), including:
      * Windows 11 system and supplemental font families
      * MacOS system and downloadable font families thru Monterey (v12)
      * However, this list currently excludes the following (which can be passed back in by apps consuming the rcl where they are needed):
         * Variants like bold, italic, oblique, light, medium, thin, extra, etc
         * Thick fonts such as Impact and Cooper
         * Symbols, icons, emojis, assets, wingdings, webdings, ornaments, math, Marlett, etc
         * MS Office Cloud fonts or MacOS document fonts except where there is overlap
         * Google fonts. (TBD. Need them?)
      * In Firefox[1] (or when explicity specified by an app) [graphite-enabled](https://software.sil.org/fonts/) fonts are also detected.
         * [Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) supports “smart fonts” capable of advanced behaviors, including combination and positioning of letters in complex ways.
         * See [grapite-enabled-fonts.json](https://github.com/RUN-Collaborations/font-select-rcl/blob/main/src/fonts/graphite-enabled-fonts.json)
         * The addition of user-controlled line-height settings and font-size settings are recommended for graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for customized presentation optimization.

## Font Detection Approach
The current approach compares the width of a test string in each font to that of a baseline generic-family, defaulted to monospace.[2] Some other font detect approaches use multiple fallback generic-families, such as `serif, sans-serif, monospace`, though not always in that order. Is there a need for this on a system that does not have monospace defined? Apps can define their own baseline generic-family if preferred.

### Font Test String
The default test string is currently 'abcdefghijklmnopqrstuvwxyz0123456789'. If a font exists that does not support any of these characters, then that font will not be detected. Is that a real-word possibility? If so, apps can pass their own custom test string.

Some other test font string observed in other font detect approaches include:
 * `'abcdefghijklmnopqrstuvwxyz& #0123456789'`
 * `random_words_#!@#$^&*()+mdvejreu_RANDOM_WORDS`
 * And the following suggestion, which seem to have originated with Lalit Patel[3]:  
   * "Use m or w because these two characters take up the maximum width."  
   * "Use LLi so the same matching fonts can get separated." _(Not applicable to the test approach currently applied.)_
      * Example: `var testString = "mmmmmmmmmmlli";`_(LLi is not needed in the test approach currently applied.)_

### Use Cases Anybody?
 * Is anybody running into needed use-cases where the implemented test is not working?
 * There are also other existing approaches. See endnote[3] for some some compiled links.

### useDetectRTL
Code utilized in autodetection of RTL/LTR text originated from [Christopher Klapp](https://github.com/klappy)'s [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/master/src/helpers/detectRTL.js).

### Web Fonts
 * There are multiple ways in which web fonts can be delivered such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted. If providing a web font for which a user may also have a local version, make allowances for the possiblity that there could be font version differences. Allow the user to select between either one rather than overriding one with the other.

## Built With

 * React.js

## Getting Started

 * [font-detect-rhl.netlify.app](https://font-detect-rhl.netlify.app/).
 * How to Consume font-detect-rhl:
   * [useDetectFonts](https://codesandbox.io/s/simplefontdropdown-font-detect-rhl-qbv8ee?file=/src/components/SimpleFontDropdown.jsx)
   * [useGraphite](https://codesandbox.io/s/usegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)
   * [useDetectRTL](https://codesandbox.io/s/usedetectrtl-font-detect-rhl-280fws?file=/src/components/DetectRTL.jsx)
 * To Add: Links to additional reference implementations.
___

## Endnotes
[1] If [gfx.font_rendering.graphite.enabled](https://silnrsi.github.io/FDBP/en-US/Browsers%20as%20a%20font%20test%20platform.html) is ever set to false in about:config in Firefox, then Graphite will not be enabled and graphite-enabled fonts will not render properly. To access this setting in [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox):
* Type about:config in your address bar and press Enter.
* Click on the "I'll be careful, I promise" button.
* Type graphite in your search bar to look for gfx.font_rendering.graphite.enabled.
* Double-click on the preference name line to toggle the value between false and true. [A bold line indicates a setting that is set to true.](https://support.mozilla.org/en-US/kb/about-config-editor-firefox)

[2] Closely followed logic in [Detect Whether a Font is Installed](https://www.kirupa.com/html5/detect_whether_font_is_installed.htm), then after implementation found [fontexist.js](https://gist.github.com/alloyking/4154494). Uncertain of the original source.

[3]  
* [JavaScript/CSS Font Detector by Lalit Patel](https://gist.github.com/szepeviktor/d28dfcfc889fe61763f3)
* More links are available in the Alternatives section of https://github.com/rwoodr/fontcheck
* Search strings to consider for more information:
   * Detect Font
   * Font Detect
   * Font Detector
   * Font Check
   * Font Checker
   * Available Fonts
   * Is Font Available
