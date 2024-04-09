// return an string of all matches
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

// removes neutral characters as per neutralScope regex
export const adjcount = (string, regexp, neutralDirCheckRegex) =>  {

  const capturedTextStr = matchesStr (string, regexp);
  const capturedChars = count (capturedTextStr);

  const neutralCaptureChars = count (matchesStr (capturedTextStr, neutralDirCheckRegex));

  const adjCaptureChars = capturedChars - neutralCaptureChars;

  return (adjCaptureChars);
};