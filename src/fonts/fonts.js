import { createGlobalStyle } from 'styled-components';

/** Licensed under the Apache License ver 2.0. See https://www.apache.org/licenses/LICENSE-2.0.html for details. */
import OpenSansV28LatinRegularWoff2 from './web-fonts/open-sans-v28-latin-regular.woff2';
import RobotoCondensedV24LatinRegularWoff2 from './web-fonts/roboto-condensed-v24-latin-regular.woff2';
import RobotoMonoV13LatinRegularWoff2 from './web-fonts/roboto-mono-v13-latin-regular.woff2';
import RobotoV29LatinRegularWoff2 from './web-fonts/roboto-v29-latin-regular.woff2';

/** Licensed under the Open Font License ver 1.1. See http://scripts.sil.org/OFL for details. */
import LatoV22LatinRegularWoff2 from './web-fonts/lato-v22-latin-regular.woff2';
import MontserratV23LatinRegularWoff2 from './web-fonts/montserrat-v23-latin-regular.woff2';
import NotoSansJpV40LatinRegularWoff2 from './web-fonts/noto-sans-jp-v40-latin-regular.woff2';
import OswaldV47LatinRegularWoff2 from './web-fonts/oswald-v47-latin-regular.woff2';
import PoppinsV19LatinRegularWoff2 from './web-fonts/poppins-v19-latin-regular.woff2';
import SourceSansProV19LatinRegularWoff2 from './web-fonts/source-sans-pro-v19-latin-regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Open Sans v28';
        src: local('Open Sans v28'),
        url(${OpenSansV28LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Roboto Condensed v24';
        src: local('Roboto Condensed v24'),
        url(${RobotoCondensedV24LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Roboto Mono v13';
        src: local('Roboto Mono v13'),
        url(${RobotoMonoV13LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Roboto v29';
        src: local('Roboto v29'),
        url(${RobotoV29LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Lato v22';
        src: local('Lato v22'),
        url(${LatoV22LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Montserrat v23';
        src: local('Montserrat v23'),
        url(${MontserratV23LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Noto Sans JP v40';
        src: local('Noto Sans JP v40'),
        url(${NotoSansJpV40LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Oswald v47';
        src: local('Oswald v47'),
        url(${OswaldV47LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Poppins v19';
        src: local('Poppins v19'),
        url(${PoppinsV19LatinRegularWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'Source Sans Pro v19';
        src: local('Source Sans Pro v19'),
        url(${SourceSansProV19LatinRegularWoff2}) format('woff2');
    }    
`;
