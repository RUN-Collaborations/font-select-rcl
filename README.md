## Font-Detect-RHL <sub><sup>[ [npm](https://www.npmjs.com/package/font-detect-rhl) | [github](https://github.com/RUN-Collaborations/font-detect-rhl) | [netlify](https://font-detect-rhl.netlify.app/) ]</sup></sub>
Font-Detect-RHL is a [React.js](https://reactjs.org/) Hook Library (RHL) that:
1. Detects whether or not fonts are locally installed, and returns the status.
1. Caters to a stylable font dropdown list.
1. Considers [Graphite](https://graphite.sil.org/)-enabled [fonts](https://software.sil.org/fonts/) and supporting environments.

Use the exported arrays listing over 1000 *font families<sup id="a1">[[1]](#f1)</sup>*, and make custom additions as needed.

See also: [How To Tell If A Font Is Copyrighted & Why You Should Always Check](https://logosbynick.com/how-to-tell-if-a-font-is-copyrighted/).

<span id="toc">————————————————————————————</span>

### Contents:
1. [Font Families](#1-font-families)
2. [Font Detection Approach](#2-font-detection-approach)
<br />2.1 [Font Test String](#2-1-font-test-string)
<br />2.2 [Handling Right-to-Left (RTL) and Left-to-Right (LTR) Text](#2-2-handling-rtl-and-ltr-text)
3. [Getting Started](#3-getting-started)
<br />3.1 [Web Fonts](#3-1-web-fonts)
<br />3.2 [To Quote or Not to Quote](#3-2-to-quote-or-not-to-quote)
<br />3.3 [Minor Browser Differences Possible](#3-3-minor-browser-differences-possible)
4. [Endnotes](#4-endnotes)

————————————————————————————

<span id="1-font-families">&nbsp;</span>
## Font Families <sub><sup>[ [fontList](https://font-detect-rhl.netlify.app/#/Example?id=usedetectfonts) | [graphiteEnabledFontList](https://font-detect-rhl.netlify.app/#/Example?id=graphiteenabledfontlist) ] ... [↩](#toc)</sup></sub>

Provided font lists focus on normal, regular, roman, and plain fonts. The primary exported font array is [fontList.json](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/fonts/fontList.json) ([fontList](https://font-detect-rhl.netlify.app/#/Example?id=usedetectfonts)), which ***includes***:
* Windows 11 system and supplemental font families
* MacOS system and downloadable font families thru Sonoma (v14)
* Over 250 fonts common to multiple *Linux desktop environments/distributions<sup id="a2">[[2]](#f2)</sup>*
* Pre-installed *Android fonts and a few common App fonts<sup id="a3">[[3]](#f3)</sup>*
* iOS system *fonts<sup id="a4">[[4]](#f4)</sup>*

Note, however that this provided font list ***excludes***:
* Font names that include hairline, thin, ultra-light, extra-light, light, book, medium, demi-bold, semi-bold, bold, extra-bold, heavy, extra heavy, black, extra-black, ultra-black, ultra, italic, slanted, and oblique.
* Thick fonts such as Impact and Cooper
* Symbols, icons, emojis, assets, wingdings, webdings, dingbats, ornaments, math, music, hieroglyphs, cuneiform, numbers, Marlett, etc.
* MS Office Cloud fonts or MacOS document fonts except where there is overlap

A separate array of [Graphite-enabled](https://software.sil.org/fonts/) fonts is also exported -- [graphiteEnabledFontList.json](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/fonts/graphiteEnabledFontList.json) ([graphiteEnabledFontList](https://font-detect-rhl.netlify.app/#/Example?id=graphiteenabledfontlist)):
* These fonts are for use in applications with [Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) implemented, a rendering engine for complex scripts that supports “smart fonts” capable of advanced behaviors, including combination and positioning of letters in complex ways.
   * *Firefox<sup id="a5">[[5]](#f5)</sup>* is an application in which Graphite is implemented, and [Electronite](https://www.npmjs.com/package/electronite) is a framework that can be used to build and [package](https://www.npmjs.com/package/electronite-packager) others.
   * Addition of line-height settings and font-size settings are recommended for Graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for presentation optimization.

<span id="2-font-detection-approach">&nbsp;</span>
## Font Detection Approach <sub><sup>[ [useDetectFonts](https://font-detect-rhl.netlify.app/#/Example?id=usedetectfonts) ] ... [↩](#toc)</sup></sub>
The current approach compares the width of a test string in each font to that of a baseline generic-family, defaulted to monospace<span style="white-space:nowrap;">.*<sup id="a6">[[6]](#f6)</sup>*</span> Apps can also define their own baseline generic-family if preferred. Some other font detect approaches use multiple fallback generic-families, such as `serif, sans-serif, monospace`, though not always in that order.

<span id="2-1-font-test-string">&nbsp;</span>
### Font Test String <sub><sup>... [↩](#toc)</sup></sub>
The default test string is currently `'abcdefghijklmnopqrstuvwxyz0123456789'`. If a font exists that does not support any of these characters, then that font will not be detected. That use-case can be mitigated through use of a custom test string that exists in both the baseline font and the tested font. Some test strings observed in other font detect approaches include `'abcdefghijklmnopqrstuvwxyz& #0123456789'`, `'random_words_#!@#$^&*()+mdvejreu_RANDOM_WORDS'`, and the following suggestion (which seem to have originated with *Lalit Patel<sup id="a7">[[7]](#f7)</sup>*): *"Use m or w because these two characters take up the maximum width."* See *endnotes<sup>[[7]](#f7)</sup>* for links to additional information.

<span id="2-2-handling-rtl-and-ltr-text">&nbsp;</span>
### Handling Right-to-Left (RTL) and Left-to-Right (LTR) Text <sub><sup>[ [useDetectDir](https://font-detect-rhl.netlify.app/#/Example?id=usedetectdir) ] ... [↩](#toc)</sup></sub>
The useDetectDir hook enables simple autodetection of RTL/LTR text through examining the range of unicode values of characters of the text. Code utilized in this hook originated from [Christopher Klapp](https://github.com/klappy)'s [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js).

RTL scripts taken into account are listed below. Unicode ranges [utilized](https://github.com/RUN-Collaborations/font-detect-rhl/blob/main/src/hooks/useDetectDir/useDetectDir.js#L5) are from v15.1 standards:
* Contemporary Scripts
   * Adlam
   * Arabic, Arabic Supplement, Arabic Presentation Forms-A, Arabic Presentation Forms-B
   * Hanifi Rohingya
   * Hebrew, Alphabetic Presentation Forms
   * Mandaic
   * Mende Kikakui
   * N'Ko
   * Samaritan
   * Syriac
   * Thaana
   * Yezidi
* Ancient Scripts
   * Old South Arabian
   * Old North Arabian
   * Imperial Aramaic
   * Avestan
   * Cypriot Syllabary
   * Egyptian Hieroglyphs, Egyptian Hieroglyph Format Controls
   * Ethiopic, Ethiopic Supplement, Ethiopic Extended, Ethiopic Extended-A, Ethiopic Extended-B
   * Hatran
   * Old Hungarian
   * Old Italic
   * Kharoshthi
   * Lydian
   * Nabataean
   * Inscriptional Pahlavi, Inscriptional Parthian, Psalter Pahlavi
   * Old Persian
   * Phoenician
   * Sogdian, Old Sogdian
   * Old Turkic

Note: Todhri and Garay are two additional RTL scripts [projected](https://en.wikipedia.org/w/index.php?title=Unicode&oldid=1197435625#Projected_versions) to be added in Unicode v16.0 Standards.

<span id="3-getting-started">&nbsp;</span>
## Getting Started <sub><sup>... [↩](#toc)</sup></sub>
1. Explore the [Style Guide Example](#/Example) and documentation of [useDetectFonts](#/Example?id=usedetectfonts), [fontList](#/Example?id=fontlist), [useAssumeGraphite](#/Example?id=useassumegraphite), [graphiteEnabledFontList](#/Example?id=graphiteenabledfontlist), and [useDetectDir](#/Example?id=usedetectdir).

1. Then take advantage of these CodeSandbox examples applying font-detect-rhl:
   * Material UI Examples: [Font Dropdown](https://codesandbox.io/p/devbox/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.jsx) | [with type your font](https://codesandbox.io/p/devbox/mui-font-detect-rhl-type-your-font-8xqw6p)<br />
      *See also [Simple USFM Editor App](https://simple-usfm-editor-app.netlify.app/) | [source code](https://github.com/klappy/simple-usfm-editor-app/blob/main/src/components/font-configuration/)*
   * Tailwind CSS Examples with Tailwind Elements with sliders for Font Size and Height: [Font Dropdown](https://codesandbox.io/p/devbox/font-detect-rhl-react18-tailwindcss3-tw-elements-5lzvjg?file=/src/components/Example.jsx) | [with type your font](https://codesandbox.io/p/devbox/font-detect-rhl-react18-tailwindcss3-tw-elements-type-your-font-pjd3qs)
   * Tailwind CSS Examples with Headless UI: [Font Dropdown](https://codesandbox.io/p/devbox/font-detect-rhl-react18-tailwindcss3-headlessui-sfcneo?file=/src/components/Example.jsx) | [with type your font](https://codesandbox.io/p/devbox/font-detect-rhl-react18-tailwindcss3-headlessui-type-your-font-zpcprs)<br />
   *See also [Simple USFM Alignment Prototype](https://simple-usfm-alignment-prototype.netlify.app/) | [source code](https://github.com/RUN-Collaborations/simple-usfm-alignment-prototype/blob/master/src/components/FontDropdown.jsx)*
   * [useDetectDir](https://codesandbox.io/p/devbox/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx)
   * [useAssumeGraphite](https://codesandbox.io/p/devbox/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)

<span id="3-1-web-fonts">&nbsp;</span>
### Web Fonts <sub><sup>... [↩](#toc)</sup></sub>
Web fonts are not addressed by this rhl, though are an additional app concern for developers to consider. There are multiple ways in which web fonts can be delivered, such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.

If providing a web font for which a user may also have a local version, consider making allowances for the possibility that version differences can exist. Consider giving users maximum control by allowing selection of either a web font or a locally installed version of the font, taking care not to override one with the other.

For one approach to web fonts coupled with locally detected fonts, see:
   * [Font-Detect-RHL + Embedded Web Fonts with MUI](https://codesandbox.io/p/devbox/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.jsx)
   * [Font-Detect-RHL + Embedded Web Fonts with TailwindCSS and Tailwind Elements with sliders for Font Size and Height](https://codesandbox.io/p/devbox/font-detect-rhl-react18-tailwindcss3-tw-elements-embedded-web-fonts-cpzhl8?file=%2Fsrc%2Fcomponents%2FExample.jsx)
   * [Font-Detect-RHL + Embedded Web Fonts with TailwindCSS and HeadlessUI](https://codesandbox.io/p/devbox/font-detect-rhl-react18-tailwindcss3-headlessui-embedded-web-fonts-6m4gdt?file=/src/components/Example.jsx)

And for further insight on application of web fonts, see *[How to Optimize Web Font Loading Performance with Best Practices](https://www.holisticseo.digital/pagespeed/loading-font/)*.

<span id="3-2-to-quote-or-not-to-quote">&nbsp;</span>
### To Quote or Not to Quote <sub><sup>... [↩](#toc)</sup></sub>
Font lists provided here do not include any Generic Font Families. It is recommended<sup id="a8">[[8]](#f8)</sup> to add quotes around detected font results. useDetectFonts tests fonts with quotes around them against a baseline generic font without quotes.

Generic<sup id="a9">[[9]](#f9)</sup> font families, global values<sup id="a10">[[10]](#f10)</sup>, and Apple's aliases<sup id="a11">[[11]](#f11)</sup> for default fonts must be requested without quotes. Adding quotes requests a specific font by that name rather than applying the keyword.

<span id="3-3-minor-browser-differences-possible">&nbsp;</span>
### Minor Browser Differences Possible <sub><sup>... [↩](#toc)</sup></sub>
There are some one-off cases in which at least one web browser does not properly apply a few locally installed fonts to pages served over the Internet. So, if your browser is not cooperating with an installed font in the detectable list used, then try a different browser or serve your page locally.<sup id="a12">[[12]](#f12)</sup>
___

<span id="4-endnotes">&nbsp;</span>
## Endnotes <sub><sup>... [↩](#toc)</sup></sub>
[<b id="f1">1</b>] ... "Font family refers to all the variations of a typeface that share a common name. For example, Times Roman, Times Italic, Times Bold, and Times Bold Italic are all members of the same font family." [[source](http://theworldsgreatestbook.com/choosing-book-font/)] ... [↩](#a1)

[<b id="f2">2</b>] ... Fonts installed with linux vary significantly by desktop environment and [distribution](https://distrowatch.com/). The compiled list included here represents style="Regular", style="Normal", and style="Roman" from an `fc-list` that overlap in four or more of the following combinations:
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

[<b id="f3">3</b>] ... Android: Droid Sans, Droid Serif, Droid Sans Mono, Roboto, Lato, Montserrat, Source Sans Pro, Raleway, Merriweather, Nunito Sans, and Poppins. [[source 1](https://www.designyourway.net/blog/best-fonts-for-android/) | [[source 2](https://stackoverflow.com/questions/3532397/how-to-retrieve-a-list-of-available-installed-fonts-in-android)] ... [↩](#a3)

[<b id="f4">4</b>] ... iOS: New York, SF Pro Text, SF Pro Display, SF Pro, SF Compact, SF Mono, SF Arabic, SF Armenian, SF Georgian, and SF Hebrew. [[source 1](https://developer.apple.com/fonts/) | [source 2](https://9to5mac.com/2021/10/25/apple-refreshes-design-resources-for-ios-15-with-new-templates-fonts-and-website/)], and many pre-installed fonts that overlap with MacOS system and downloadable font families [[source](https://developer.apple.com/fonts/system-fonts/)]  ... [↩](#a4)

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

[<b id="f8">8</b>] ... While fonts technically can be requested without quotes, that calls for escaping special characters. See [Unquoted font family names in CSS](https://mathiasbynens.be/notes/unquoted-font-family). ... [↩](#a8)

[<b id="f9">9</b>] ... serif. sans-serif, cursive, fantasy, system-ui, monospace, ui-serif, ui-sans-serif, ui-monospace, ui-rounded, math, emoji, and fangsong, as in: `font-family: monospace;`,.... For explanations and examples, see the [`<generic=name>` section of this font-family CSS property documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name). ... [↩](#a9)

[<b id="f10">10</b>] ... inherit, initial, revert, revert-layer, and unset, as in: `font-family: inherit;` ... [↩](#a10)

[<b id="f11">11</b>] ... BlinkMacSystemFont, -apple-system, -apple-system-body, -apple-system-headline, -apple-system-subheadline, -apple-system-caption1, -apple-system-caption2, -apple-system-footnote, -apple-system-short-body, -apple-system-short-headline, -apple-system-short-subheadline, -apple-system-short-caption1, -apple-system-short-footnote, and -apple-system-tall-body", as in `font-family: -apple-system;` ... [↩](#a11)

[<b id="f12">12</b>] ... On Windows 11, Brave Version 1.64.113 (Chromium: 123.0.6312.86 (Official Build) (64-bit)) recognizes the following fonts on pages served locally, but not when served over the Internet (tested via CodeSandbox and Netlify). On the other hand, Firefox 124.0.1 (64-bit) renders these properly in each case: [Aldhabi](https://learn.microsoft.com/en-us/typography/font-list/aldhabi), [Andalus](https://learn.microsoft.com/en-us/typography/font-list/andalus), [Arabic Typesetting](https://learn.microsoft.com/en-us/typography/font-list/arabic-typesetting), [Leelawadee](https://learn.microsoft.com/en-us/typography/font-list/leelawadee), [Microsoft Uighur](https://learn.microsoft.com/en-us/typography/font-list/microsoft-uighur), [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), [Sakkal Majalla](https://learn.microsoft.com/en-us/typography/font-list/sakkal-majalla), [Simplified Arabic](https://learn.microsoft.com/en-us/typography/font-list/simplified-arabic), [Traditional Arabic](https://learn.microsoft.com/en-us/typography/font-list/traditional-arabic), and [Urdu Typesetting](https://learn.microsoft.com/en-us/typography/font-list/urdu-typesetting). There may be others, and Brave/Chromium may improve this over time. ... [↩](#a12)