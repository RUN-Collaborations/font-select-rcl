import PropTypes from 'prop-types';

// Code originated from Christopher Klapp at https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js

const rtlDirCheckRegex = /[\u{0590}-\u{085F}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFC}\u{10D00}-\u{10D3F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10F00}-\u{10F6F}\u{13000}-\u{1345F}\u{1E7E0}-\u{1E7FF}]/ugm;

/* Unicode v15.1 Standards -- https://www.unicode.org/

Contemporary Scripts
  \u0590-\u085F
    U+0590 - U+05FF: Hebrew
    U+0600 - U+06FF: Arabic
    U+0700 - U+074F: Syriac
    U+0750 - U+077F: Arabic Supplement
    U+0780 - U+07BF: Thaana
    U+07C0 - U+07FF: N'Ko
    U+0800 - U+083F: Samaritan
    U+0840 - U+085F: Mandaic
  \uFB00-\uFDFF
    U+FB00 - U+FB4F: Alphabetic Presentation Forms
    U+FB50 - U+FDFD: Arabic Presentation Forms-A
  \uFE70-\uFEFC
    U+FE70 - U+FEFF: Arabic Presentation Forms-B
  \u{10D00}-\u{10D3F}
    U+10D00 - U+10D3F: Hanifi Rohingya
  \u{10E80}-\u{10EBF}
    U+10E80 - U+10EBF: Yezidi
  \u{1E800}-\u{1E8DF}
    U+1E800 - U+1E8DF: Mende Kikakui
  \u{1E900}-\u{1E95F}
    U+1E900 - U+1E95F: Adlam

Todhri and Garay are two additional RTL scripts projected to be added in Unicode v16.0 Standards -- https://en.wikipedia.org/w/index.php?title=Unicode&oldid=1197435625#Projected_versions

Ancient Scripts
    \u1200-\u139F
      U+1200 - U+137F: Ethiopic
      U+1380 - U+139F: Ethiopic Supplement
    \2D80-\u2DDF
      U+2D80 - U+2DDF: Ethiopic Extended
    \uAB00-\uAB2F
      U+AB00 - U+AB2F: Ethiopic Extended-A
    \u{10300}-\u{1032F}
      U+10300 - U+1032F: Old Italic
    \u{103A0}-\u{103DF}
      U+103A0 - U+103DF: Old Persian
    \u{10800}-\u{1085F}
      U+10800 - U+1083F: Cypriot Syllabary
      U+10840 - U+1085F: Imperial Aramaic
    \u{10880}-\u{108AF}
      U+10880 - U+108AF: Nabataean
    \u{108E0}-\u{1093F}
      U+108E0 - U+108FF: Hatran
      U+10900 - U+1091F: Phoenician
      U+10920 - U+1093F: Lydian
    \u{10A00}-\u{10A9F}
      U+10A00 - U+10A5F: Kharoshthi
      U+10A60 - U+10A7F: Old South Arabian
      U+10A80 - U+10A9F: Old North Arabian
    \u{10B00}-\u{10BAF}
      U+10B00 - U+10B3F: Avestan
      U+10B40 - U+10B5F: Inscriptional Parthian
      U+10B60 - U+10B7F: Inscriptional Pahlavi
      U+10B80 - U+10BAF: Psalter Pahlavi
    \u{10C00}-\u{10C4F}
      U+10C00 - U+10C4F: Old Turkic
    \u{10C80}-\u{10CFF}
      U+10C80 - U+10CFF: Old Hungarian
    \u{10F00}-\u{10F6F}
      U+10F00 - U+10F2F: Old Sogdian
      U+10F30 - U+10F6F: Sogdian
    \u{13000}-\u{1345F}
      U+13000 - U+1342F: Egyptian Hieroglyphs: Range
      U+13430 - U+1345F: Egyptian Hieroglyph Format Controls
    \u{1E7E0}-\u{1E7FF}
      U+1E7E0 - U+1E7FF: Ethiopic Extended-B
*/


export default function useDetectDir({ text, ratioThreshold=0.3 }) {
  let mostlyRtl = false;

  if (text && text.length) {
    const rtlMatches = text.match(rtlDirCheckRegex);
    const rtlChars = rtlMatches?.length;
    const textChars = text.length;
    const rtlRatio = rtlChars / textChars;

    if (rtlRatio > ratioThreshold) { mostlyRtl = true; }
  };

  return (mostlyRtl ? 'rtl' : 'ltr');
};

useDetectDir.propTypes = {
  /** text to examine */
  text: PropTypes.string.isRequired,
  /** RTL:LTR ratio threshold (default is 0.3)  */
  ratioThreshold: PropTypes.number.isRequired,
};

useDetectDir.propDefaults = {
  ratioThreshold: 0.3,
};