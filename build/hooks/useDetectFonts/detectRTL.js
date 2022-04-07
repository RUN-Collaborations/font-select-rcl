"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRtl = void 0;
var rtlDirCheckRegex = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/gm;

var isRtl = function isRtl(text) {
  var mostlyRtl = false;

  if (text && text.length) {
    var rtlMatches = text.match(rtlDirCheckRegex);
    var rtlChars = rtlMatches === null || rtlMatches === void 0 ? void 0 : rtlMatches.length;
    var textChars = text.length;
    var rtlRatio = rtlChars / textChars;

    if (rtlRatio > 0.3) {
      mostlyRtl = true;
    }
  }

  ; // console.log('isRtl: ', mostlyRtl);

  return mostlyRtl;
};

exports.isRtl = isRtl;