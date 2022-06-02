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
    description: 'The following links lead to Codesandbox examples that can be copied, emulated or forked:<br /><br /><ul><li>[Material UI Example](https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.jsx)<ul><li>See also [Simple USFM Editor App](https://simple-usfm-editor-app.netlify.app/) / [source code](https://github.com/klappy/simple-usfm-editor-app/blob/main/src/components/font-configuration/)</li></ul></li><li>[Tailwind CSS Example with Tailwind Elements](https://codesandbox.io/s/font-detect-rhl-react18-tailwindcss3-tw-elements-5lzvjg?file=/src/components/Example.jsx)<sup>⟳ *as needed [[8]](#f8)*</sup><br />&nbsp;</li><li>[Tailwind CSS Example with Headless UI](https://codesandbox.io/s/font-detect-rhl-react18-tailwindcss3-headlessui-sfcneo?file=/src/components/Example.jsx)<sup>⟳ *as needed [[8]](#f8)*</sup><ul><li>See also [Simple USFM Alignment Prototype](https://simple-usfm-alignment-prototype.netlify.app/) / [source code](https://github.com/RUN-Collaborations/simple-usfm-alignment-prototype/blob/master/src/components/FontDropdown.jsx)</li></ul></li><li>[useDetectDir Example](https://codesandbox.io/s/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx)<br />&nbsp;</li><li>[useAssumeGraphite Example](https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx)</li></ul>',
  },
  {
    name: 'Web Fonts',
    description: 'Web fonts are not addressed by this rhl, though are an additional app concern for developers to consider. There are multiple ways in which web fonts can be delivered, such as base64, woff2, woff, ttf, otf, packaged with an app, self hosted, or third-party-hosted.<br /><br />If providing a web font for which a user may also have a local version, consider making allowances for the possiblity that version differences can exist. Consider giving users maximum control by allowing selection of either a web font or a locally installed version of the font, taking care not to override one with the other.<br /><br />For further insight on application of webfonts, see [How to Optimize Web Font Loading Performance with Best Practices](https://www.holisticseo.digital/pagespeed/loading-font/).<br /><br />And for one approach to webfonts coupled with locally detected fonts, see:<br><ul><li>[Font-Detect-RHL Embedded Web Fonts with MUI](https://codesandbox.io/s/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.jsx)</li><li>[Font-Detect-RHL Embedded Web Fonts with TailwindCSS and Tailwind Elements](https://codesandbox.io/s/font-detect-rhl-react18-tailwindcss3-headlessui-embedded-web-fonts-6m4gdt?file=/src/components/Example.jsx)<sup>⟳ *as needed [[8]](#f8)*</sup></li><li>[Font-Detect-RHL Embedded Web Fonts with TailwindCSS and HeadlessUI](https://codesandbox.io/s/font-detect-rhl-react18-tailwindcss3-headlessui-embedded-web-fonts-6m4gdt?file=/src/components/Example.jsx)<sup>⟳ *as needed [[8]](#f8)*</sup></li></ul>',
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