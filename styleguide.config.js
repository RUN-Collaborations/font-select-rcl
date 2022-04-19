const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const {
  name, version, repository,
} = require('./package.json');

const pathComponents = path.join(__dirname, 'src/components/');
const pathHooks = path.join(__dirname, 'src/hooks/');
const sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'useDetectFonts',
    description: 'Five examples are shown below:',
    content: path.join(pathHooks, 'useDetectFonts', '_readme.md'),
    sections: [
      {
        name: 'Font Dropdown',
        content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-FontDropdown.md'),
      },
      {
        name: 'Inline Array',
        content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-InlineArray.md'),
      },
      {
        name: 'JSON Array',
        content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-JsonArray.md'),
      },
      {
        name: 'Graphite Enabled',
        content: path.join(pathHooks, 'useDetectFonts', 'useDetectFonts-GraphiteEnabled.md'),
      },
    ],
  },
  {
    name: 'useGraphite',
    content: path.join(pathHooks, 'useGraphite', 'useGraphite.md'),
  },
  {
    name: 'useDetectRTL',
    content: path.join(pathHooks, 'useDetectRTL', 'useDetectRTL.md'),
  },
  {
    name: 'ProvidedFontList',
    content: path.join(pathComponents, 'providedFontList', 'ProvidedFontList.md'),
  },
  {
    name: 'FontOption',
    content: path.join(pathComponents, 'fontOption', 'FontOption.md'),
  },
  {
    name: 'FontOptions',
    description: 'Three examples are shown below:',
    content: path.join(pathComponents, 'fontOptions', '_readme.md'),
    sections: [
      {
        name: 'A Single Font',
        content: path.join(pathComponents, 'fontOptions', 'FontOptions-SingleFont.md'),
      },
      {
        name: 'Detected Fonts',
        content: path.join(pathComponents, 'fontOptions', 'FontOptions-DetectedFonts.md'),
      },
      {
        name: 'All Requested Fonts',
        content: path.join(pathComponents, 'fontOptions', 'FontOptions-AllListedFonts.md'),
      },
    ],
  },
  {
    name: 'Codesanbox Examples',
    sections: [
      {
        name: 'Font Dropdown MUI',
        external: true,
        href: 'https://codesandbox.io/s/fontdropdownmui-font-detect-rhl-xui47y'
      },
      {
        name: 'Simple Font Dropdown',
        external: true,
        href: 'https://codesandbox.io/s/simplefontdropdown-font-detect-rhl-qbv8ee'
      },
    ],
  },
];

module.exports = {
  usageMode: 'expand',
  // exampleMode: 'expand',
  pagePerSection: true,
  sections,
  moduleAliases: { 'font-detect-rhl': path.resolve(__dirname, 'src') },
  // components: 'src/**/*.{jsx,ts,tsx}',
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