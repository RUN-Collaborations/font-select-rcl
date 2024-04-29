// return a string of all matches
export const matchesStr = (string, regexp) => {
  const matchesArr = string.match(regexp);
  const matchesArrLen = matchesArr?.length || 0;
  const matchesStr = matchesArrLen !== 0 ? matchesArr.join('') : '';

  return (matchesStr);
};

// return the length of the string unless it is 0
export const count = (matchesStr) => {
  const charCount = matchesStr?.length || 0;

  return (charCount);
};

// Identify markup Count less neutral in markup, RTL in markup, and neutral in RTL in markup (should be 0)
export const adjMarkupCount = (string, markupCheckRegex, neutralDirCheckRegex, rtlDirCheckRegex, verbose, isMarkup) =>  {

  // markupScope including overlap with neutralScope and rtlScope
  const markupMatches = matchesStr (string, markupCheckRegex);
  const markupChars = count (markupMatches);

  // rtlScope in markupScope including any overlap with neutralScope
  const rtlInMarkupMatches = matchesStr (markupMatches, rtlDirCheckRegex);
  const rtlCharsInMarkup = count (matchesStr (rtlInMarkupMatches, rtlDirCheckRegex));

  // Any neutralScope in rtlScope in markupScope 
  const neutInRtlInMarkup = count (matchesStr (rtlInMarkupMatches, neutralDirCheckRegex));
  
  // neutralScope in markupScope
  const neutralCaptureChars = count (matchesStr (markupMatches, neutralDirCheckRegex));

  // markupScope less neutralScope in markupScope
  const markupLessNeut = markupChars - neutralCaptureChars;

  if (verbose) console.log('%c isMarkup = %c' + isMarkup + '; %c\n %c adj markup %c =  ' + markupChars + ' markup - ' + neutralCaptureChars + ' neutral in markup = %c ' + markupLessNeut +' ', 'font-weight: bold; font-style: italic; background-color: yellow;','font-weight: bold; font-style: italic; background-color: yellow; color: ' + (isMarkup ? 'green' : 'red') + ';','','color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');

  const adjMarkupCountObj = {
    markupLessNeut: markupLessNeut,
    rtlInMarkup: rtlCharsInMarkup,
    neutInRtlInMarkup: neutInRtlInMarkup // should be 0
  }
  return (adjMarkupCountObj);
};

// Identify RTL count and neutral in RTL (should be 0)
export const preAdjRtlCount = (string, rtlDirCheckRegex, neutralDirCheckRegex) =>  {

  // rltScope including overlap with markupScope and neutralScope
  const rtlMatches = matchesStr (string, rtlDirCheckRegex);
  const rtlChars = count (rtlMatches);

  // Any neutralScope in rtlScope (should be 0)
  const neutralInRtlInMarkup = count (matchesStr (rtlMatches, neutralDirCheckRegex));  // Should be 0

  const adjMarkupCountObj = {
    rtlChars: rtlChars,
    neutralInRtl: neutralInRtlInMarkup // should be 0
  }
  return (adjMarkupCountObj);
};