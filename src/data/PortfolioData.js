import market1 from '../../public/assets/market-1.png';
import market2 from '../../public/assets/market-2.png';
import market3 from '../../public/assets/market-3.png';
import market4 from '../../public/assets/market-4.png';
import market5 from '../../public/assets/market-5.png';
import form1 from '../../public/assets/form1.png';
import form2 from '../../public/assets/form2.png';
import form3 from '../../public/assets/form3.png';
import form4 from '../../public/assets/form4.png';
import form5 from '../../public/assets/form5.png';
import form6 from '../../public/assets/form6.png';
import form7 from '../../public/assets/form7.png';
import mine1 from '../../public/assets/mine1.png';
import mine2 from '../../public/assets/mine2.png';
import mine3 from '../../public/assets/mine3.png';
import mine4 from '../../public/assets/mine4.png';
import mine5 from '../../public/assets/mine5.png';
import mine6 from '../../public/assets/mine6.png';
import meow1 from '../../public/assets/meow-1.png';
import meow2 from '../../public/assets/meow-2.png';
import meow3 from '../../public/assets/meow-3.png';
import meow4 from '../../public/assets/meow-4.png';
import meow5 from '../../public/assets/meow-5.png';
import intro1 from '../../public/assets/intro-1.png';
import intro2 from '../../public/assets/intro-2.png';
import intro3 from '../../public/assets/intro-3.png';
import intro4 from '../../public/assets/intro-4.png';
import intro5 from '../../public/assets/intro-5.png';
import js1 from '../../public/assets/js-1.png';
import js2 from '../../public/assets/js-2.png';
import js3 from '../../public/assets/js-3.png';
import js4 from '../../public/assets/js-4.png';
import js5 from '../../public/assets/js-5.png';
import js6 from '../../public/assets/js-6.png';
import landing1 from '../../public/assets/landing-1.png';
import landing2 from '../../public/assets/landing-2.png';
import landing3 from '../../public/assets/landing-3.png';
import landing4 from '../../public/assets/landing-4.png';
import hour1 from '../../public/assets/hour-1.png';
import hour2 from '../../public/assets/hour-2.png';
import hour3 from '../../public/assets/hour-3.png';
import hour4 from '../../public/assets/hour-4.png';
import hour5 from '../../public/assets/hour-5.png';
import cool1 from '../../public/assets/cool-1.png';
import cool2 from '../../public/assets/cool-2.png';
import cool3 from '../../public/assets/cool-3.png';
import cool4 from '../../public/assets/cool-4.png';
import block1 from '../../public/assets/block-1.webp';
import block2 from '../../public/assets/block-2.webp';
import block3 from '../../public/assets/block-3.webp';
import lotto1 from '../../public/assets/lotto-1.webp';
import lotto2 from '../../public/assets/lotto-2.webp';
import lotto3 from '../../public/assets/lotto-3.webp';

const projectList = [
  {
    lang: 'EN',
    title: 'Open market',
    summary:
      'Open market platform where buyers can buy and sellers can register & sell products',
    descriptions: [
      'Duration : 2022.04 ~ ing',
      'Skills : React, React Router, JavaScript, Styled Components',
      'Role : Developed front-end & integrated with back-end (API integration)',
    ],
    links: [
      { type: 'Website', to: 'https://choar816.github.io/open-market/' },
      { type: 'GitHub', to: 'https://github.com/choar816/open-market' },
      {
        type: 'Demo Video',
        to: 'https://drive.google.com/file/d/1zP27kC8ETIAf3sMW13BAxMlnJJgqtO2T/view?usp=sharing',
      },
    ],
    photos: [market1, market2, market3, market4, market5],
  },
  {
    lang: 'KO',
    title: '오픈마켓',
    summary:
      '판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 오픈마켓 플랫폼',
    descriptions: [
      '진행 기간 : 2022.04 ~ ing',
      '사용 기술 : React, React Router, JavaScript, Styled Components',
      '역할',
    ],
    details: [
      '누구나 쉽고 빠르게 코드 구조를 파악할 수 있도록 폴더 구조의 best practice를 고민하고 적용했습니다.',
      'UI와 business logic을 분리하여 코드의 가독성과 재사용성을 높였습니다.',
      '반응형 레이아웃을 구현하였습니다. (메인 페이지, Header, Footer)',
      'Image Carousel을 라이브러리를 사용하지 않고 직접 구현하였습니다.',
      'fetch API를 통해 백엔드 서버와 통신했으며, UX 향상을 위해 localStorage를 통한 로그인 유지 기능을 구현했습니다.',
      'react-query를 사용해 fetch 코드를 개선하고 로딩 및 에러 시의 로직을 처리했습니다.',
      '각종 예외 처리를 수행했습니다. (상품이 0개일 경우, 없는 상품 페이지에 접근할 경우, 판매자인데 장바구니에 접근할 경우 등)',
      'create-react-app을 사용하지 않고 babel, webpack 등을 직접 설정하여 React 개발환경을 구축했습니다.',
      'GitHub Actions를 활용해 GitHub Pages로의 배포를 자동화하였습니다.',
      'Figma 및 API는 위니브에서 제작해주신 것을 활용했습니다.',
    ],
    links: [
      { type: '웹사이트', to: 'https://choar816.github.io/open-market/' },
      { type: '깃허브', to: 'https://github.com/choar816/open-market' },
      {
        type: '데모 비디오',
        to: 'https://drive.google.com/file/d/1zP27kC8ETIAf3sMW13BAxMlnJJgqtO2T/view?usp=sharing',
      },
    ],
    photos: [market1, market2, market3, market4, market5],
  },
  {
    lang: 'EN',
    title: 'Ahra Forms',
    summary: 'Project that cloned Google Forms',
    descriptions: [
      'Duration : 2022.08 (3 days)',
      'Skills : React, JavaScript, Redux Toolkit, React Router, Ant Design',
      'Role : Developed front-end (Please check GitHub README for details)',
    ],
    links: [
      { type: 'Website', to: 'https://choar816.github.io/clone-google-forms/' },
      { type: 'GitHub', to: 'https://github.com/choar816/clone-google-forms' },
    ],
    photos: [form1, form2, form3, form4, form5, form6, form7],
  },
  {
    lang: 'KO',
    title: 'Ahra Forms',
    summary: 'Google Forms를 클론한 프로젝트',
    descriptions: [
      '진행 기간 : 2022.08 (3 days)',
      '사용 기술 : React, JavaScript, Redux Toolkit, React Router, Ant Design',
      '역할',
    ],
    details: ['GitHub README 참고 부탁드립니다.'],
    links: [
      { type: '웹사이트', to: 'https://choar816.github.io/clone-google-forms/' },
      { type: '깃허브', to: 'https://github.com/choar816/clone-google-forms' },
    ],
    photos: [form1, form2, form3, form4, form5, form6, form7],
  },
  {
    lang: 'EN',
    title: 'Minesweeper',
    summary: 'Puzzle video game where mines are scattered throughout a board, which is divided into cells.',
    descriptions: [
      'Duration : 2022.08 (3 days)',
      'Skills : React, JavaScript, Redux Toolkit, Styled Components, Ant Design',
      'Role : Developed front-end (Please check GitHub README for details)',
    ],
    links: [
      { type: 'Website', to: 'https://choar816.github.io/clone-minesweeper/' },
      { type: 'GitHub', to: 'https://github.com/choar816/clone-minesweeper' },
    ],
    photos: [mine1, mine2, mine3, mine4, mine5, mine6],
  },
  {
    lang: 'KO',
    title: '지뢰찾기',
    summary: '지뢰가 랜덤하게 숨어있는 보드에서 지뢰가 아닌 칸만 열어야 하는 게임',
    descriptions: [
      '진행 기간 : 2022.08 (3 days)',
      '사용 기술 : React, JavaScript, Redux Toolkit, Styled Components, Ant Design',
      '역할',
    ],
    details: ['GitHub README 참고 부탁드립니다.'],
    links: [
      { type: '웹사이트', to: 'https://choar816.github.io/clone-minesweeper/' },
      { type: '깃허브', to: 'https://github.com/choar816/clone-minesweeper' },
    ],
    photos: [mine1, mine2, mine3, mine4, mine5, mine6],
  },
  {
    lang: 'EN',
    title: 'Meow Meow Fuzzyface',
    summary: 'Simple game inspired by Vampire Survivors',
    descriptions: [
      'Duration : 2022.05 (1 week)',
      'Skills : JavaScript, Phaser 3',
      'Role : Developed overall game',
    ],
    details: ['작성중입니다.'],
    links: [
      {
        type: 'Website',
        to: 'https://choar816.github.io/meow-meow-fuzzyface/',
      },
      { type: 'GitHub', to: 'https://github.com/choar816/meow-meow-fuzzyface' },
      {
        type: 'Website(Lecture ver.)',
        to: 'https://weniv.github.io/game-with-phaser/',
      },
      {
        type: 'GitHub(Lecture ver.)',
        to: 'https://github.com/weniv/game-with-phaser',
      },
    ],
    photos: [meow1, meow2, meow3, meow4, meow5],
  },
  {
    lang: 'KO',
    title: '먀우 먀우 퍼지페이스',
    summary:
      '뱀파이어 서바이벌(Vampire Survivors)로부터 영감을 받아 만든 간단한 게임',
    descriptions: [
      '진행 기간 : 2022.05 (1주)',
      '사용 기술 : JavaScript, Phaser 3',
      '역할 : 게임 개발 전반',
    ],
    details: [
      'Player, Enemy 등 class 단위로 코드 작성',
      '재사용성 및 확장성을 고려한 객체지향적 설계',
      '현재 인프런 강의 제작 중',
    ],
    links: [
      {
        type: '웹사이트',
        to: 'https://choar816.github.io/meow-meow-fuzzyface/',
      },
      { type: '깃허브', to: 'https://github.com/choar816/meow-meow-fuzzyface' },
      {
        type: '웹사이트(강의버전)',
        to: 'https://weniv.github.io/game-with-phaser/',
      },
      {
        type: '깃허브(강의버전)',
        to: 'https://github.com/weniv/game-with-phaser',
      },
    ],
    photos: [meow1, meow2, meow3, meow4, meow5],
  },
  {
    lang: 'EN',
    title: 'Intro',
    summary: 'Website that shows my resume and portfolio',
    descriptions: [
      'Duration : 2022.03. (2 weeks)',
      'Skills : React, React Redux, JavaScript, Styled Components',
      'Role : Designed & Developed everything',
    ],
    links: [
      { type: 'Website', to: 'https://choar816.github.io/intro-choar/' },
      { type: 'GitHub', to: 'https://github.com/choar816/intro-choar' },
    ],
    photos: [intro1, intro2, intro3, intro4, intro5],
  },
  {
    lang: 'KO',
    title: '인트로',
    summary: '이력서와 포트폴리오를 정리한 웹사이트',
    descriptions: [
      '진행 기간 : 2022.03. (2주)',
      '사용 기술 : React, React Redux, JavaScript, Styled Components',
      '역할 : 디자인, 개발 전체',
    ],
    details: [
      '기획 및 디자인을 하였습니다.',
      'create-react-app을 사용하지 않고 babel, webpack 등을 직접 설정하여 React 개발환경을 구축했습니다.',
      '반응형 레이아웃을 구현하였습니다.',
      'react-redux로 i18n을 적용하였습니다.',
      'react-redux로 라이트 모드/다크 모드 토글 기능을 구현했습니다.',
      '배경 그라데이션의 transition을 구현했습니다.',
    ],
    links: [
      { type: '웹사이트', to: 'https://choar816.github.io/intro-choar/' },
      { type: '깃허브', to: 'https://github.com/choar816/intro-choar' },
    ],
    photos: [intro1, intro2, intro3, intro4, intro5],
  },

  {
    lang: 'EN',
    title: 'Landing Page',
    summary: 'Landing page that can be used for various purposes',
    descriptions: [
      'Duration : 2021.12. ~ 2022.01. (1 week)',
      'Skills : HTML, SCSS, JavaScript',
      'Role : Developed everything',
    ],
    links: [
      { type: 'Website', to: 'https://choar816.github.io/landing-page/' },
      { type: 'GitHub', to: 'https://github.com/choar816/landing-page' },
    ],
    photos: [landing1, landing2, landing3, landing4],
  },
  {
    lang: 'KO',
    title: '랜딩 페이지',
    summary: '개인 포트폴리오 등 다양한 목적으로 사용 가능한 랜딩 페이지',
    descriptions: [
      '진행 기간 : 2021.12. ~ 2022.01. (1주)',
      '사용 기술 : HTML, SCSS, JavaScript',
      '역할 : 개발 전체',
    ],
    links: [
      { type: '웹사이트', to: 'https://choar816.github.io/landing-page/' },
      { type: '깃허브', to: 'https://github.com/choar816/landing-page' },
    ],
    photos: [landing1, landing2, landing3, landing4],
  },

  {
    lang: 'EN',
    title: '10000 Hours',
    summary: 'Cloned website of weniv 10000 hours website',
    descriptions: [
      'Duration : 2021.11. ~ 2021.12. (3 days)',
      'Skills : HTML, CSS, JavaScript',
      'Role : Developed everything',
    ],
    links: [
      {
        type: 'Website',
        to: 'https://choar816.github.io/10000hours-rule/',
      },
      {
        type: 'GitHub',
        to: 'https://github.com/choar816/10000hours-rule',
      },
    ],
    photos: [hour1, hour2, hour3, hour4, hour5],
  },
  {
    lang: 'KO',
    title: '1만 시간의 법칙',
    summary: '위니브 1만 시간의 법칙의 클론 웹사이트',
    descriptions: [
      '진행 기간 : 2021.11. ~ 2021.12. (3일)',
      '사용 기술 : HTML, CSS, JavaScript',
      '역할 : 개발 전체',
    ],
    links: [
      {
        type: '웹사이트',
        to: 'https://choar816.github.io/10000hours-rule/',
      },
      {
        type: '깃허브',
        to: 'https://github.com/choar816/10000hours-rule',
      },
    ],
    photos: [hour1, hour2, hour3, hour4, hour5],
  },

  {
    lang: 'EN',
    title: 'Blockchain UX Checklist',
    summary:
      "Android application of 'UX guideline application for developers and operators of blockchain services' designed by EDEN Lab., POSTECH",
    descriptions: [
      'Duration : 2021.06. ~ 2021.09.',
      'Skills : Android(Java)',
      'Role : Developed everything',
    ],
    links: [
      {
        type: 'Google Play Store',
        to: 'https://play.google.com/store/apps/details?id=com.eden.blue',
      },
      { type: 'GitHub', to: 'https://github.com/choar816/blockchain-ux-app' },
    ],
    photos: [block1, block2, block3],
  },
  {
    lang: 'KO',
    title: '블록체인 UX 체크리스트',
    summary:
      "포항공과대학교 EDEN Lab.에서 기획한 '블록체인 서비스의 개발자 및 운영자를 위한 UX 가이드라인 애플리케이션'의 안드로이드 어플리케이션",
    descriptions: [
      '진행 기간 : 2021.06. ~ 2021.09.',
      '사용 기술 : Android(Java)',
      '역할 : 개발 전체',
    ],
    links: [
      {
        type: '플레이스토어',
        to: 'https://play.google.com/store/apps/details?id=com.eden.blue',
      },
      { type: '깃허브', to: 'https://github.com/choar816/blockchain-ux-app' },
    ],
    photos: [block1, block2, block3],
  },

  {
    lang: 'EN',
    title: 'Lottery Generator',
    summary:
      'Mobile application that randomly generates and records lottery numbers',
    descriptions: [
      'Duration : 2021.08. (1 week)',
      'Skills : React Native, JavaScript, Expo',
      'Role : Developed front-end & Deploy',
    ],
    links: [
      {
        type: 'Google Play Store',
        to: 'https://play.google.com/store/apps/details?id=com.joebrothers.lotterygenerator',
      },
    ],
    photos: [lotto1, lotto2, lotto3],
  },
  {
    lang: 'KO',
    title: '로또 번호 생성기',
    summary: '로또 번호를 랜덤하게 생성 및 기록해주는 모바일 어플리케이션',
    descriptions: [
      '진행 기간 : 2021.08. (1주)',
      '사용 기술 : React Native, JavaScript, Expo',
      '역할 : 프론트엔드 개발 & 배포',
    ],
    links: [
      {
        type: '플레이스토어',
        to: 'https://play.google.com/store/apps/details?id=com.joebrothers.lotterygenerator',
      },
    ],
    photos: [lotto1, lotto2, lotto3],
  },
];

export default projectList;
