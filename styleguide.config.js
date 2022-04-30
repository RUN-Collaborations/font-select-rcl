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
    description: 'The following links lead to Codesandbox examples:<br /><br /><ul><li>[Material UI Example](https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.js)</li><li>[useDetectDir Example](https://codesandbox.io/s/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx)</li><li>[useAssumeGraphite Example](https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)</li></ul>',
  },
  /**
  {
    name: 'Embedded Web Fonts',
    description: 'Embedded web fonts and web fonts are not provided by this rhl, though are additional app concerns to contemplate. There are multiple ways in which web fonts can be delivered such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.<br /><br />If providing a web font for which a user may also have a local version, consider making allowances for the possiblity that version differences can exist. A solution that gives users maximum control is to allow selection of either a web font or a locally installed version of the font, taking care not to override one with the other. One approach is shown in this [codesandbox example utilizing MUI](https://codesandbox.io/s/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.js).',
  },
  */
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