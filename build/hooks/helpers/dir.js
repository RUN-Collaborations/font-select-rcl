"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesStr = exports.count = exports.adjcount = void 0;
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

// removes neutral characters as per neutralScope regex
var adjcount = exports.adjcount = function adjcount(what, string, regexp, neutralDirCheckRegex, verbose, isMarkup) {
  var capturedTextStr = matchesStr(string, regexp);
  var capturedChars = count(capturedTextStr);
  var neutralCaptureChars = count(matchesStr(capturedTextStr, neutralDirCheckRegex));
  var adjCaptureChars = capturedChars - neutralCaptureChars;
  if (verbose) console.log((what === 'markup' && 'isMarkup = ' + isMarkup + '; ') + capturedChars + ' total ' + what + ' - ' + neutralCaptureChars + ' neutral in ' + what + ' = ' + adjCaptureChars + ' ' + what + ' w/o neutral');
  return adjCaptureChars;
};