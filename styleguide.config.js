const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const {
  name, version, repository,
} = require('./package.json');

// const pathComponents = path.join(__dirname, 'src/components/');
const pathHooks = path.join(__dirname, 'src/hooks/');
const sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'All-in-one Example',
    content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-FontDropdown.md'),
  },
  {
    name: '➤useDetectFonts',
    content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-InlineArray.md'),
    // components: path.join(pathHooks, 'useDetectFonts', '*.jsx'),
  },
  {
    name: '➤useFonts',
    content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-useFonts.md'),
  },
  {
    name: '➤useAssumeGraphite',
    content: path.join(pathHooks, 'useAssumeGraphite', 'useAssumeGraphite.md'),
  },
  {
    name: '➤useGraphiteEnabledFonts',
    content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-GraphiteEnabled.md'),
  },
  {
    name: '➤useDetectDir',
    content: path.join(pathHooks, 'useDetectDir', 'useDetectDir.md'),
  },
  {
    name: 'Codesandbox Examples',
    description: 'These are links to examples in Codesandbox:',
    sections: [
      {
        name: 'MUI',
        external: true,
        href: 'https://codesandbox.io/s/mui-font-detect-rhl-xui47y?file=/src/components/SelectMUI.js'
      },
      {
        name: 'useDetectDir',
        external: true,
        href: 'https://codesandbox.io/s/usedetectdir-font-detect-rhl-280fws?file=/src/components/DetectDir.jsx'
      },
      {
        name: 'useAssumeGraphite',
        external: true,
        href: 'https://codesandbox.io/s/useassumegraphite-font-detect-rhl-dnlqs1?file=/src/components/UtilizeGraphiteFonts.jsx'
      },
    ],
  },
  {
    name: 'Embedded Web Fonts',
    description: 'These are links to examples in Codesandbox:',
    sections: [
      {
        name: 'MUI with Embedded Web Font',
        external: true,
        href: 'https://codesandbox.io/s/mui-font-detect-rhl-embedded-web-fonts-rtn566?file=/src/components/SelectMUI.js'
      },
    ],
  },
];

module.exports = {
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  sections,
  moduleAliases: { 'font-detect-rhl': path.resolve(__dirname, 'src') },
  // components: 'src/hooks/**/*.{jsx}',
  getComponentPathLine: componentPath => {
    const _name = path.basename(componentPath, '.js');
    return `import { ${_name.split('.')[0]} } from '${name}';`;
  },
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub',
  },
};