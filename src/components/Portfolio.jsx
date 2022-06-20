import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ToggleList from './ToggleList';
import market1 from '../../public/assets/market-1.png';
import market2 from '../../public/assets/market-2.png';
import market3 from '../../public/assets/market-3.png';
import market4 from '../../public/assets/market-4.png';
import market5 from '../../public/assets/market-5.png';
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
import Modal from './Modal';

const projectList = [
  {
    lang: 'EN',
    title: 'Open market',
    summary:
      'Open market platform where buyers can buy and sellers can register & sell products',
    description: [
      'Duration : 2022.04 ~ ing',
      'Skills : React, React Router, JavaScript, Styled Components',
      'Role : Developed front-end & integrated with back-end (API integration)',
    ],
    link: [
      { type: 'Website', to: 'https://choar816.github.io/open-market/' },
      { type: 'GitHub', to: 'https://github.com/choar816/open-market' },
      {
        type: 'Demo Video',
        to: 'https://drive.google.com/file/d/1zP27kC8ETIAf3sMW13BAxMlnJJgqtO2T/view?usp=sharing',
      },
    ],
    photo: [market1, market2, market3, market4, market5],
  },
  {
    lang: 'KO',
    title: '오픈마켓',
    summary:
      '판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 오픈마켓 플랫폼',
    description: [
      '진행 기간 : 2022.04 ~ ing',
      '사용 기술 : React, React Router, JavaScript, Styled Components',
      '역할 : 프론트엔드 개발 & 백엔드 연결 (API 연동)',
    ],
    detail: [
      'create-react-app을 사용하지 않고 babel, webpack 등을 직접 설정하여 React 개발환경을 구축했습니다.',
      'GitHub Pages 배포를 자동화하였습니다.',
      '반응형 레이아웃을 구현하였습니다. (메인 페이지, Header, Footer)',
      'Image Carousel을 라이브러리를 사용하지 않고 직접 구현하였습니다.',
      'fetch 및 localStorage를 사용하여 로그인/로그아웃 기능을 구현했습니다.',
      'fetch를 사용해 회원가입, 상품 목록 조회, 상품 상세 조회, 장바구니 기능을 구현했습니다.',
      '로딩 중일 때의 UI를 구현했습니다. (상품 목록 페이지, 상품 상세 페이지, 장바구니 페이지 등)',
      '예외 처리를 수행했습니다. (상품이 0개일 경우, 없는 상품 페이지에 접근할 경우, 판매자인데 장바구니에 접근할 경우 등)',
    ],
    link: [
      { type: '웹사이트', to: 'https://choar816.github.io/open-market/' },
      { type: '깃허브', to: 'https://github.com/choar816/open-market' },
      {
        type: '데모 비디오',
        to: 'https://drive.google.com/file/d/1zP27kC8ETIAf3sMW13BAxMlnJJgqtO2T/view?usp=sharing',
      },
    ],
    photo: [market1, market2, market3, market4, market5],
  },
  {
    lang: 'EN',
    title: 'Meow Meow Fuzzyface',
    summary: 'Simple game inspired by Vampire Survivors',
    description: [
      'Duration : 2022.05 (1 week)',
      'Skills : JavaScript, Phaser 3',
      'Role : Developed overall game',
    ],
    detail: ['작성중입니다.'],
    link: [
      {
        type: 'Website',
        to: 'https://choar816.github.io/meow-meow-fuzzyface/',
      },
      { type: 'GitHub', to: 'https://github.com/choar816/meow-meow-fuzzyface' },
    ],
    photo: [meow1, meow2, meow3, meow4, meow5],
  },
  {
    lang: 'KO',
    title: '먀우 먀우 퍼지페이스',
    summary:
      '뱀파이어 서바이벌(Vampire Survivors)로부터 영감을 받아 만든 간단한 게임',
    description: [
      '진행 기간 : 2022.05 (1주)',
      '사용 기술 : JavaScript, Phaser 3',
      '역할 : 게임 개발 전반',
    ],
    detail: [
      'Player, Enemy 등 class 단위로 코드 작성',
      '재사용성 및 확장성을 고려한 객체지향적 설계',
      '현재 인프런 강의 제작 중',
    ],
    link: [
      {
        type: '웹사이트',
        to: 'https://choar816.github.io/meow-meow-fuzzyface/',
      },
      { type: '깃허브', to: 'https://github.com/choar816/meow-meow-fuzzyface' },
    ],
    photo: [meow1, meow2, meow3, meow4, meow5],
  },
  {
    lang: 'EN',
    title: 'Intro',
    summary: 'Website that shows my resume and portfolio',
    description: [
      'Duration : 2022.03. (2 weeks)',
      'Skills : React, React Redux, JavaScript, Styled Components',
      'Role : Designed & Developed everything',
    ],
    link: [
      { type: 'Website', to: 'https://choar816.github.io/intro-choar/' },
      { type: 'GitHub', to: 'https://github.com/choar816/intro-choar' },
    ],
    photo: [intro1, intro2, intro3, intro4, intro5],
  },
  {
    lang: 'KO',
    title: '인트로',
    summary: '이력서와 포트폴리오를 정리한 웹사이트',
    description: [
      '진행 기간 : 2022.03. (2주)',
      '사용 기술 : React, React Redux, JavaScript, Styled Components',
      '역할 : 디자인, 개발 전체',
    ],
    detail: [
      '기획 및 디자인을 하였습니다.',
      'create-react-app을 사용하지 않고 babel, webpack 등을 직접 설정하여 React 개발환경을 구축했습니다.',
      '반응형 레이아웃을 구현하였습니다.',
      'react-redux로 i18n을 적용하였습니다.',
      'react-redux로 라이트 모드/다크 모드 토글 기능을 구현했습니다.',
      '배경 그라데이션의 transition을 구현했습니다.',
    ],
    link: [
      { type: '웹사이트', to: 'https://choar816.github.io/intro-choar/' },
      { type: '깃허브', to: 'https://github.com/choar816/intro-choar' },
    ],
    photo: [intro1, intro2, intro3, intro4, intro5],
  },
  {
    lang: 'EN',
    title: 'JS Quiz (Team Project)',
    summary: 'Website where people can solve JavaScript quizs and check scores',
    description: [
      'Duration : 2021.12. (3 weeks)',
      'Skills : HTML, CSS, JavaScript, Firebase, Chart.js',
      'Role : Developed timer related function',
    ],
    link: [
      { type: 'Website', to: 'https://jsquizzz.netlify.app/' },
      { type: 'GitHub', to: 'https://github.com/useon/js-quiz' },
    ],
    photo: [js1, js2, js3, js4, js5, js6],
  },
  {
    lang: 'KO',
    title: 'JS 퀴즈 (팀 프로젝트)',
    summary: '자바스크립트 문법 퀴즈를 풀며 실력을 확인할 수 있는 웹사이트',
    description: [
      '진행 기간 : 2021.12. (3주)',
      '사용 기술 : HTML, CSS, JavaScript, Firebase, Chart.js',
      '역할 : 타이머 관련 기능 개발',
    ],
    link: [
      { type: '웹사이트', to: 'https://jsquizzz.netlify.app/' },
      { type: '깃허브', to: 'https://github.com/useon/js-quiz' },
    ],
    photo: [js1, js2, js3, js4, js5, js6],
  },

  {
    lang: 'EN',
    title: 'Landing Page',
    summary: 'Landing page that can be used for various purposes',
    description: [
      'Duration : 2021.12. ~ 2022.01. (1 week)',
      'Skills : HTML, SCSS, JavaScript',
      'Role : Developed everything',
    ],
    link: [
      { type: 'Website', to: 'https://choar816.github.io/landing-page/' },
      { type: 'GitHub', to: 'https://github.com/choar816/landing-page' },
    ],
    photo: [landing1, landing2, landing3, landing4],
  },
  {
    lang: 'KO',
    title: '랜딩 페이지',
    summary: '개인 포트폴리오 등 다양한 목적으로 사용 가능한 랜딩 페이지',
    description: [
      '진행 기간 : 2021.12. ~ 2022.01. (1주)',
      '사용 기술 : HTML, SCSS, JavaScript',
      '역할 : 개발 전체',
    ],
    link: [
      { type: '웹사이트', to: 'https://choar816.github.io/landing-page/' },
      { type: '깃허브', to: 'https://github.com/choar816/landing-page' },
    ],
    photo: [landing1, landing2, landing3, landing4],
  },

  {
    lang: 'EN',
    title: '10000 Hours',
    summary: 'Cloned website of weniv 10000 hours website',
    description: [
      'Duration : 2021.11. ~ 2021.12. (3 days)',
      'Skills : HTML, CSS, JavaScript',
      'Role : Developed everything',
    ],
    link: [
      {
        type: 'Website',
        to: 'https://choar816.github.io/10000hours-rule/',
      },
      {
        type: 'GitHub',
        to: 'https://github.com/choar816/10000hours-rule',
      },
    ],
    photo: [hour1, hour2, hour3, hour4, hour5],
  },
  {
    lang: 'KO',
    title: '1만 시간의 법칙',
    summary: '위니브 1만 시간의 법칙의 클론 웹사이트',
    description: [
      '진행 기간 : 2021.11. ~ 2021.12. (3일)',
      '사용 기술 : HTML, CSS, JavaScript',
      '역할 : 개발 전체',
    ],
    link: [
      {
        type: '웹사이트',
        to: 'https://choar816.github.io/10000hours-rule/',
      },
      {
        type: '깃허브',
        to: 'https://github.com/choar816/10000hours-rule',
      },
    ],
    photo: [hour1, hour2, hour3, hour4, hour5],
  },
  {
    lang: 'EN',
    title: 'Coolzzin Test',
    summary:
      'Coolzzin test website consisting of a main page, a problem page, and a result page',
    description: [
      'Duration : 2021.11. ~ 2021.12. (3 days)',
      'Skills : Bootstrap, JavaScript',
      'Role : Edit UI(Bootstrap) & Put ad(Kakao Adfit) & Deploy (Netlify)',
    ],
    link: [
      {
        type: 'Website',
        to: 'https://test-coolzzin.netlify.app/',
      },
      {
        type: 'GitHub',
        to: 'https://github.com/choar816/coolzzin-test',
      },
    ],
    photo: [cool1, cool2, cool3, cool4],
  },
  {
    lang: 'KO',
    title: '쿨찐 테스트',
    summary:
      '메인 페이지, 문제 페이지, 결과 페이지로 이루어진 쿨찐 테스트 웹사이트',
    description: [
      '진행 기간 : 2021.11. ~ 2021.12. (3일)',
      '사용 기술 : Bootstrap, JavaScript',
      '역할 : UI 수정 (Bootstrap) & 광고 부착 (Kakao Adfit) & 배포 (Netlify)',
    ],
    link: [
      {
        type: '웹사이트',
        to: 'https://test-coolzzin.netlify.app/',
      },
      {
        type: '깃허브',
        to: 'https://github.com/choar816/coolzzin-test',
      },
    ],
    photo: [cool1, cool2, cool3, cool4],
  },

  {
    lang: 'EN',
    title: 'Blockchain UX Checklist',
    summary:
      "Android application of 'UX guideline application for developers and operators of blockchain services' designed by EDEN Lab., POSTECH",
    description: [
      'Duration : 2021.06. ~ 2021.09.',
      'Skills : Android(Java)',
      'Role : Developed everything',
    ],
    link: [
      {
        type: 'Google Play Store',
        to: 'https://play.google.com/store/apps/details?id=com.eden.blue',
      },
      { type: 'GitHub', to: 'https://github.com/choar816/blockchain-ux-app' },
    ],
    photo: [block1, block2, block3],
  },
  {
    lang: 'KO',
    title: '블록체인 UX 체크리스트',
    summary:
      "포항공과대학교 EDEN Lab.에서 기획한 '블록체인 서비스의 개발자 및 운영자를 위한 UX 가이드라인 애플리케이션'의 안드로이드 어플리케이션",
    description: [
      '진행 기간 : 2021.06. ~ 2021.09.',
      '사용 기술 : Android(Java)',
      '역할 : 개발 전체',
    ],
    link: [
      {
        type: '플레이스토어',
        to: 'https://play.google.com/store/apps/details?id=com.eden.blue',
      },
      { type: '깃허브', to: 'https://github.com/choar816/blockchain-ux-app' },
    ],
    photo: [block1, block2, block3],
  },

  {
    lang: 'EN',
    title: 'Lottery Generator',
    summary:
      'Mobile application that randomly generates and records lottery numbers',
    description: [
      'Duration : 2021.08. (1 week)',
      'Skills : React Native, JavaScript, Expo',
      'Role : Developed front-end & Deploy',
    ],
    link: [
      {
        type: 'Google Play Store',
        to: 'https://play.google.com/store/apps/details?id=com.joebrothers.lotterygenerator',
      },
    ],
    photo: [lotto1, lotto2, lotto3],
  },
  {
    lang: 'KO',
    title: '로또 번호 생성기',
    summary: '로또 번호를 랜덤하게 생성 및 기록해주는 모바일 어플리케이션',
    description: [
      '진행 기간 : 2021.08. (1주)',
      '사용 기술 : React Native, JavaScript, Expo',
      '역할 : 프론트엔드 개발 & 배포',
    ],
    link: [
      {
        type: '플레이스토어',
        to: 'https://play.google.com/store/apps/details?id=com.joebrothers.lotterygenerator',
      },
    ],
    photo: [lotto1, lotto2, lotto3],
  },
];

function Portfolio() {
  const lang = useSelector((state) => state.lang);
  const [modalOn, setModalOn] = useState(false);
  const [imgSrc, setImgSrc] = useState(market1);
  const [title, setTitle] = useState('');

  return (
    <Container>
      <Modal
        modalOn={modalOn}
        setModalOn={setModalOn}
        imgSrc={imgSrc}
        title={title}
      />
      {projectList
        .filter((proj) => lang === proj.lang)
        .map((proj) => (
          <Project>
            <PhotoContainer>
              {proj.photo.map((val, idx) => (
                <img
                  key={idx}
                  src={val}
                  alt="포트폴리오 이미지"
                  onClick={() => {
                    setImgSrc(val);
                    setModalOn(true);
                    setTitle(proj.title);
                  }}
                />
              ))}
            </PhotoContainer>
            <ExpContainer>
              <h2>{proj.title}</h2>
              <p>{proj.summary}</p>
              <ul className="list-with-dash">
                <li>
                  {proj.link.map((val) => (
                    <a target="_blank" rel="noreferrer noopener" href={val.to}>
                      {val.type}
                    </a>
                  ))}
                </li>
                {proj.description.map((val) => (
                  <li>{val}</li>
                ))}
              </ul>
              <ToggleList list={proj.detail} />
            </ExpContainer>
          </Project>
        ))}
    </Container>
  );
}

export default Portfolio;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 1.1rem;
    text-decoration: underline;
  }
  .list-with-dash {
    margin-top: 1rem;
    list-style: '· ' inside;
  }
  a {
    color: #0024c6;
    transition: all 0.5s;
    &:hover {
      color: #738dff;
      text-decoration: underline;
    }
    & + a {
      margin-left: 0.7rem;
    }
  }
`;

const Project = styled.article`
  display: flex;
  flex-direction: column;

  & + article {
    margin-top: 2.5rem;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #e6e6e6;
      position: absolute;
      top: -1.2rem;
    }
  }
`;

const PhotoContainer = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  height: 200px;
  width: 100%;
  overflow-x: scroll;

  img {
    height: 180px;
    cursor: pointer;
  }
`;

const ExpContainer = styled.article`
  margin-top: 10px;
`;
