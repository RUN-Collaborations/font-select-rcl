"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preAdjRtlCount = exports.matchesStr = exports.count = exports.adjMarkupCount = void 0;
// return a string of all matches
var matchesStr = exports.matchesStr = function matchesStr(string, regexp) {
  var matchesArr = string.match(regexp);
  var matchesArrLen = (matchesArr === null || matchesArr === void 0 ? void 0 : matchesArr.length) || 0;
  var matchesStr = matchesArrLen !== 0 ? matchesArr.join('') : '';
  return matchesStr;
};

// return the length of the string unless it is 0
var count = exports.count = function count(matchesStr) {
  var charCount = (matchesStr === null || matchesStr === void 0 ? void 0 : matchesStr.length) || 0;
  return charCount;
};

// Identify markup Count less neutral in markup, RTL in markup, and neutral in RTL in markup (should be 0)
var adjMarkupCount = exports.adjMarkupCount = function adjMarkupCount(string, markupCheckRegex, neutralDirCheckRegex, rtlDirCheckRegex, verbose, isMarkup) {
  // markupScope including overlap with neutralScope and rtlScope
  var markupMatches = matchesStr(string, markupCheckRegex);
  var markupChars = count(markupMatches);

  // rtlScope in markupScope including any overlap with neutralScope
  var rtlInMarkupMatches = matchesStr(markupMatches, rtlDirCheckRegex);
  var rtlCharsInMarkup = count(matchesStr(rtlInMarkupMatches, rtlDirCheckRegex));

  // Any neutralScope in rtlScope in markupScope 
  var neutInRtlInMarkup = count(matchesStr(rtlInMarkupMatches, neutralDirCheckRegex));

  // neutralScope in markupScope
  var neutralCaptureChars = count(matchesStr(markupMatches, neutralDirCheckRegex));

  // markupScope less neutralScope in markupScope
  var markupLessNeut = markupChars - neutralCaptureChars;
  if (verbose) console.log('%c isMarkup = %c' + isMarkup + '; %c\n %c adj markup %c =  ' + markupChars + ' markup - ' + neutralCaptureChars + ' neutral in markup = %c ' + markupLessNeut + ' ', 'font-weight: bold; font-style: italic; background-color: yellow;', 'font-weight: bold; font-style: italic; background-color: yellow; color: ' + (isMarkup ? 'green' : 'red') + ';', '', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');
  var adjMarkupCountObj = {
    markupLessNeut: markupLessNeut,
    rtlInMarkup: rtlCharsInMarkup,
    neutInRtlInMarkup: neutInRtlInMarkup // should be 0
  };
  return adjMarkupCountObj;
};

// Identify RTL count and neutral in RTL (should be 0)
var preAdjRtlCount = exports.preAdjRtlCount = function preAdjRtlCount(string, rtlDirCheckRegex, neutralDirCheckRegex) {
  // rltScope including overlap with markupScope and neutralScope
  var rtlMatches = matchesStr(string, rtlDirCheckRegex);
  var rtlChars = count(rtlMatches);

  // Any neutralScope in rtlScope (should be 0)
  var neutralInRtlInMarkup = count(matchesStr(rtlMatches, neutralDirCheckRegex)); // Should be 0

  var adjMarkupCountObj = {
    rtlChars: rtlChars,
    neutralInRtl: neutralInRtlInMarkup // should be 0
  };
  return adjMarkupCountObj;
};