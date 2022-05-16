const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const {
  name, version, repository,
} = require('./package.json');

const sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'Example',
    content: 'src/hooks/example.md',
    components: () => [
      'src/hooks/useDetectFonts/useDetectFonts.jsx',
      'src/fonts/fontList.jsx',
      'src/hooks/useAssumeGraphite/useAssumeGraphite.jsx',
      'src/fonts/graphiteEnabledFontList.jsx',
      'src/hooks/useDetectDir/useDetectDir.jsx',
    ],
  },
  {
    name: 'Codesandbox',
    description: 'The following links lead to Codesandbox examples:<br /><br /><ul><li>[Material UI Example](https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.js) *(see also [Simple USFM Editor App](https://simple-usfm-editor-app.netlify.app/) / [source code](https://github.com/klappy/simple-usfm-editor-app/blob/main/src/components/font-configuration/))*</li><li>[useDetectDir Example](https://codesandbox.io/s/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx)</li><li>[useAssumeGraphite Example](https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)</li></ul>',
  },
  {
    name: 'Web Fonts',
    description: 'Web fonts are not addressed by this rhl, though are an additional app concern for developers to consider. There are multiple ways in which web fonts can be delivered, such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.<br /><br />If providing a web font for which a user may also have a local version, consider making allowances for the possiblity that version differences can exist. Consider giving users maximum control by allowing selection of either a web font or a locally installed version of the font, taking care not to override one with the other.<br /><br />For one approach to webfonts coupled with locally detected fonts, see *[Font-Detect-RHL + Embedded Web Fonts with MUI in Codesandbox](https://codesandbox.io/s/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.js)*. And for further insight on application of webfonts, see *[How to Optimize Web Font Loading Performance with Best Practices](https://www.holisticseo.digital/pagespeed/loading-font/)*.',
  },
];

module.exports = {
  ignore: ["./src/hooks/**/*.js"],
  usageMode: 'expand',  
  exampleMode: 'expand',
  pagePerSection: true,
  sections,
  moduleAliases: { 'font-detect-rhl': path.resolve(__dirname, 'src') },
  // components: 'src/hooks/**/*.{jsx,ts,tsx}',
  getComponentPathLine: componentPath => {
    const _name = path.basename(componentPath, '.jsx');
    return `import { ${_name.split('.')[0]} } from '${name}';`;
  },
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub',
  },
};