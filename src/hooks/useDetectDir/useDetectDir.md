<!-- # useDetectRTL -->
**useDetectDir** examines the range of unicode values of characters in the text, returning 'rtl' for right-to-left or 'ltr' for left-to-right. Code utilized in this hook originated from [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js), developed by [Christopher Klapp](https://github.com/klappy).

*Scripts detected*:
* Contemporary: Adlam, Arabic, Arabic Supplement, Arabic Presentation Forms-A, Arabic Presentation Forms-B, Hanifi Rohingya, Hebrew, Alphabetic Presentation Forms, Mandaic, Mende Kikakui, N'Ko, Samaritan, Syriac, Thaana, and Yezidi
* Ancient: Old South Arabian, Old North Arabian, Imperial Aramaic, Avestan, Cypriot Syllabary, Egyptian Hieroglyphs, Egyptian Hieroglyph Format Controls, Ethiopic, Ethiopic Supplement, Ethiopic Extended, Ethiopic Extended-A, Ethiopic Extended-B, Hatran, Old Hungarian, Old Italic, Kharoshthi, Lydian, Nabataean, Inscriptional Pahlavi, Inscriptional Parthian, Psalter Pahlavi, Old Persian, Phoenician, Sogdian, Old Sogdian, and Old Turkic

Tip: Reduce the RTL:LTR ratioThreshold if testing a source with a large amount of LTR markup text.
```jsx
import { useDetectDir } from 'font-detect-rhl';

function Component(){

    const useDetectDirProps = { text: 'TEST', ratioThreshold: 0.3 };

    dir = useDetectDir( useDetectDirProps );

    return (<div>Direction: <b>{dir}</b></div>);
};

<Component />
```