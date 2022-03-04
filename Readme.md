# Project Status
THIS IS A WORK IN PROGRESS. Components and props are subject to change.

For an example of where this is headed, see the "Set Font" dropdowns at [simple-usfm-alignment-prototype.netlify.app](https://simple-usfm-alignment-prototype.netlify.app/).

## Project Goals
Deliver a React Component Library (RCL) that:
 * Returns a selectable dropdown list for styling by the RCL consumer (in process).
 * Offers a font size setting. (in process)
 * Test around 500 font families to indentify whether or not they are installed in the local environment. Only deteted fonts are presented in the dropdown.
    * Font tested are listed in the fonts.json array, including:
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
         * See grapite-enabled-fonts.json
         * In Firefox[1] (or when explicitly specified by an app), line-height setting are available for graphite-enabled fonts to mitigate collisions or near collisions across rows. (in process)

## Font Detection Approach
The current approach compares the width of a test string in each font to that of a baseline font, presently the default monospace font. Some other font detect approaches use multiple fallback tests, such as 'serif', 'sans-serif', 'monospace' (though not always in that order). Is this needed on a system that does not have a default monospace font defined?

### Font Test String
The default test string is currently 'abcdefghijklmnopqrstuvwxyz0123456789'. If a font exists that does not support any of these characters, then that font will not be detected. Is that a real-word possibility? If so, apps can pass their own custom test string.

Some other test font string observed in other font detect approaches include:
 * 'abcdefghijklmnopqrstuvwxyz& #0123456789'
 * "random_words_#!@#$^&*()+mdvejreu_RANDOM_WORDS"
 * And the following suggestion, which seem to have originated with Lalit Patel[2]:  
    // Use m or w because these two characters take up the maximum width.  
    // Use LLi so the same matching fonts can get separated.  (Not applicable to the test approach currently applied)  
    var testString = "mmmmmmmmmmlli";  

### Use Cases Anybody?
 * Is anybody running into needed use-cases where the implemented test is not working?
 * There are also other existing approaches. See endnote[2] for some some compiled links.

## Built With

 * React.js

## Getting Started

 * [font-select-rcl.netlify.app](https://font-select-rcl.netlify.app/).

 * To Add: How to consume the rcl.

 * To Add: Links to reference implementations.
___

## Endnotes
[1] If [gfx.font_rendering.graphite.enabled](https://silnrsi.github.io/FDBP/en-US/Browsers%20as%20a%20font%20test%20platform.html) is ever set to false in about:config in Firefox, then Graphite will not be enabled and graphite-enabled fonts will not render properly. To access this setting in [Firefox Configuration Editor(https://support.mozilla.org/en-US/kb/about-config-editor-firefox)]:
* Type [about:config](about:config) in your address bar and press Enter.
* Click on the "I'll be careful, I promise" button.
* Type graphite in your search bar to look for gfx.font_rendering.graphite.enabled.
* Double-click on the preference name line to toggle the value between false and true. [A bold line indicates a setting that is set to true.](https://support.mozilla.org/en-US/kb/about-config-editor-firefox)

[2]  
* [JavaScript/CSS Font Detector by Lalit Patel](https://gist.github.com/szepeviktor/d28dfcfc889fe61763f3)
* More links are available in the Alternatives section of https://github.com/rwoodr/fontcheck