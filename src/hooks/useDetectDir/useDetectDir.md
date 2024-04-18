<!-- # useDetectDir -->
**useDetectDir** examines the range of unicode values of characters in the text, returning 'rtl' for right-to-left or 'ltr' for left-to-right. It ignores neutral characters, and can optionally also adjust for markup via regular expression. Code utilized in this hook originated from [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js), developed by [Christopher Klapp](https://github.com/klappy).

Two examples follow. The first treats input as plain text. If you are working with plain texts or have already stripped markup (e.g., usfm run through Proskomma) then use the first approach and adjust the ratioThreshold as needed. The second example (scroll further down) shows compensating for markup with customizable regex statements.

### *useDetectDir - Plain Text*
```jsx
import { useDetectDir } from 'font-detect-rhl';

function Component(){

    const useDetectDirProps = ({ text: `T E S T`, ratioThreshold: 0.3 });

    dir = useDetectDir( useDetectDirProps );

    return (<div>Direction: <b>{dir}</b></div>);
};

<Component />
```
<!-- # useDetectDir -->
### *useDetectDir - Markup Text*

The following examples adjust for markup. Results do not have to be exactly, though increasing precision allows for use of a higher ratioThreshold where markdown contains a large volume of LTR text (e.g., some alignment approaches in usfm).

One example below is with usfm, and the other is with markdown. Improve upon these regex statements, use them as is, or setup entirely different ones as best fit your needs.

With verbose set to true, the js console log will show the following calculated number of characters:

- total raw
- total neutral
- total markup characters - neutral characters in markup regex = markup characters without neutral characters
- adjusted total characters (LTR & RTL)
- total RTL characters - neutral characters in RTL regex = RTL characters without neutral characters
- LTR characters without neutral characters
- the calculated ratio of RTL:(LTR & RTL)
 
```jsx
import { useState } from 'react';
import { useDetectDir } from 'font-detect-rhl';
import { loremIpsumBook } from 'lorem-ipsum-usfm';

const usfm = loremIpsumBook({
  bookCode: '1LI',
  bookName: '1 Lorem Ipsum',
  chapterMin: 1,
  chapterMax: 20,
  chapterBias: 5,
  // chapterCount: 3,
  paragraphChance: 0.3,
  verseMin: 1,
  verseMax: 100,
  verseBias: 10,
  // verbose: true,
});


// Default regex is shown below. Uncomment and edit to play with different regex statements after adding ones defined here to const useDetectDirProps in the function Component.

/*
const rtlScope = {
  regex: [/[\u{0590}-\u{085F}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFC}\u{10D00}-\u{10D3F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10F00}-\u{10F6F}\u{13000}-\u{1345F}\u{1E7E0}-\u{1E7FF}]/ugm],
};
*/

/*
const neutralScope = {
  regex: [/\.|-|\r?\n|\r|[\u{000C}\u{0020}\u{1680}\u{2000}-\u{200A}\u{2028}\u{205F}\u{3000}]/ugm],
};
*/

// default scope is for usfm. Test it on your expected patterns and customize as needed. Must also pass isMarkup: true
/*
const markupScope = {
  regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm], // USFM: References and \id <code> | Full lines | Remaining markers | Attributes
};
*/

// example of a Markdown scope. Test on your expected patterns and customize as needed. Must also pass isMarkup: true)
/*
const markupScope = {
  regex: [/^#{1,}|((?<=.[\r?\n|\r])^)={1,}|^ *>{1,}( >)* #*=*(\d+\.)*|^ *\d+\.|^ *\+|(_|\*|~|\|)|[\[|!\[]|(\.*?\]\((.*?)\))/gm], // headings | alternate heading | block quotes and inside headings and inside ordered lists | ordered lists | unordered + lists | bold, italics, strike, horizontal rules, tables (and any other occurrence of _, *, ~, or | (not capturing - as it is in neutralScop) | link/image
};
*/

function Component(){

  const EXAMPLE = usfm;

  const [example, setExample] = useState(EXAMPLE);

  // Note the ratioThreshold (RTL %) is increased from the default of 0.3 in this example.
  // const useDetectDirProps = ({ text: example, ratioThreshold: 0.51, rtlScope, neutralScope, isMarkup: true, markupScope, verbose: true });
  const useDetectDirProps = ({ text: example, ratioThreshold: 0.51, isMarkup: true, verbose: true });

  dir = useDetectDir( useDetectDirProps );

  return (<div>Direction: <b>{dir}</b><br />
        <em>
          &nbsp;Click out of the editable text area after making changes to see them applied:
        </em>
      <textarea
      rows="16"
      name="example"
      onBlur={(event) => {
        const _example = event.target.value;
        setExample(_example);
      }}
      style= {{ width: '100%', borderColor: "blue", direction: dir, }}
      defaultValue={usfm}
      >
    </textarea>
      <p></p>
      <hr />
      <div
        style={{
          width: "100%",
          display: "flex",
          color: "grey"
        }}
      >
        <div
          style={{
            width: "62%",
            direction: "LTR",
            border: 0,
            float: "left",
            textAlign: "right"
          }}
        >
          <div><p style={{ fontSize: "0.9em", margin: "0px", textAlign: "center" }}>
              <b>Sample Markdown RTL Text:</b>
              <br />
              (for copy-paste)
            </p>
          </div>
          <div
            style={{
              width: "100%",
              direction: "RTL",
              border: "1px solid #969696",
              float: "right",
              textAlign: "right"
            }}
          >
            ***JHN***<br />
            <br />
            ---<br />
            <br />
            ## [إِنْجِيلُ يُوحَنَّا](https://ebible.org/study/?w1=bible&t1=local%3Aarb-vd&v1=JN1_1)<br />
            <br />
            ### 1<br />
            <br />
            #### الكلمة صار جسدًا<br />
            <br />            
            1. فِي ٱلْبَدْءِ كَانَ ٱلْكَلِمَةُ، وَٱلْكَلِمَةُ كَانَ عِنْدَ ٱللهِ، وَكَانَ ٱلْكَلِمَةُ ٱللهَ.<br />
            2. هَذَا كَانَ فِي ٱلْبَدْءِ عِنْدَ ٱللهِ.<br />
            3. كُلُّ شَيْءٍ بِهِ كَانَ، وَبِغَيْرِهِ لَمْ يَكُنْ شَيْءٌ مِمَّا كَانَ.<br />
            4. فِيهِ كَانَتِ ٱلْحَيَاةُ، وَٱلْحَيَاةُ كَانَتْ نُورَ ٱلنَّاسِ،<br />
            5. وَٱلنُّورُ يُضِيءُ فِي ٱلظُّلْمَةِ، وَٱلظُّلْمَةُ لَمْ تُدْرِكْهُ.<br />
          </div>
        </div>
        <div
          style={{
            width: "2%",
            direction: "LTR",
            border: 0,
            float: "right",
            textAlign: "right"
          }}
        >{" "}
        </div>
        <div
          style={{
            width: "36%",
            direction: "LTR",
            border: 0,
            float: "right",
            textAlign: "right"
          }}
        >
            <div><p style={{ fontSize: "0.9em", margin: "0px", textAlign: "center" }}>
                <b>Sample USFM RTL Text:</b>
                <br />
                (for copy-paste)
              </p>
            </div>
            <div
              style={{
                width: "100%",
                direction: "RTL",
                border: "1px solid #969696",
                float: "right",
                textAlign: "right"
              }}
            >
              \id JHN<br />
              \mt1 إِنْجِيلُ يُوحَنَّا<br />
              \c 1<br />
              \s1 الكلمة صار جسدًا<br />
              \p<br />
              \v 1 فِي ٱلْبَدْءِ كَانَ ٱلْكَلِمَةُ، وَٱلْكَلِمَةُ كَانَ عِنْدَ ٱللهِ، وَكَانَ ٱلْكَلِمَةُ ٱللهَ.<br />
              \v 2 هَذَا كَانَ فِي ٱلْبَدْءِ عِنْدَ ٱللهِ.<br />
              \v 3 كُلُّ شَيْءٍ بِهِ كَانَ، وَبِغَيْرِهِ لَمْ يَكُنْ شَيْءٌ مِمَّا كَانَ.<br />
              \v 4 فِيهِ كَانَتِ ٱلْحَيَاةُ، وَٱلْحَيَاةُ كَانَتْ نُورَ ٱلنَّاسِ،<br />
              \v 5 وَٱلنُّورُ يُضِيءُ فِي ٱلظُّلْمَةِ، وَٱلظُّلْمَةُ لَمْ تُدْرِكْهُ.<br />
              \p<br />
              \v 6 كَانَ إِنْسَانٌ مُرْسَلٌ مِنَ ٱللهِ ٱسْمُهُ يُوحَنَّا.<br />
              \v 7 هَذَا جَاءَ لِلشَّهَادَةِ لِيَشْهَدَ لِلنُّورِ، لِكَيْ يُؤْمِنَ ٱلْكُلُّ بِوَاسِطَتِهِ.<br />
              \v 8 لَمْ يَكُنْ هُوَ ٱلنُّورَ، بَلْ لِيَشْهَدَ لِلنُّورِ.<br />
              \v 9 كَانَ ٱلنُّورُ ٱلْحَقِيقِيُّ ٱلَّذِي يُنِيرُ كُلَّ إِنْسَانٍ آتِيًا إِلَى ٱلْعَالَمِ.<br />
            </div>
        </div>
      </div>
    </div>);
};

<Component />
```