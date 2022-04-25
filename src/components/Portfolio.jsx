import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const projectList = [
  {
    lang: 'EN',
    title: 'Intro of choar',
    summary: 'Website where shows my resume and portfolio',
    description: [
      'Duration : 2022.03. (2 weeks)',
      'Skills : React, Redux',
      'Role : Designed & Developed everything',
    ],
    link: [
      { type: 'Website', to: 'https://choar816.github.io/intro-choar/' },
      { type: 'GitHub', to: 'https://github.com/choar816/intro-choar' },
    ],
  },
  {
    lang: 'KO',
    title: '나의 인트로',
    summary: '이력서와 포트폴리오를 정리한 웹사이트',
    description: [
      '진행 기간 : 2022.03. (2주)',
      '사용 기술 : React, Redux',
      '역할 : 디자인, 개발 전체',
    ],
    link: [
      { type: '웹사이트', to: 'https://choar816.github.io/intro-choar/' },
      { type: '깃허브', to: 'https://github.com/choar816/intro-choar' },
    ],
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
  },
  {
    lang: 'KO',
    title: '로또 번호 생성기',
    summary:
      '로또 번호를 랜덤하게 생성 및 기록해주는 모바일 어플리케이션',
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
  },
  {
    lang: 'EN',
    title: '10000 Hours',
    summary:
      'Cloned website of weniv 10000 hours website',
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
  },
  {
    lang: 'KO',
    title: '1만 시간의 법칙',
    summary:
      '위니브 1만 시간의 법칙의 클론 웹사이트',
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
  },
];

const Container = styled.ul`
  & > li + li {
    margin-top: 2.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1.1rem;
    text-decoration: underline;
  }
  .list-with-dash {
    margin-top: 1rem;
    list-style: '- ' inside;
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

function Portfolio() {
  const lang = useSelector((state) => state.lang);

  return (
    <Container>
      {projectList
        .filter((proj) => lang === proj.lang)
        .map((proj) => (
          <li>
            <h2>{proj.title}</h2>
            <p>{proj.summary}</p>
            <ul className="list-with-dash">
              {proj.description.map((val) => (
                <li>{val}</li>
              ))}
              <li>
                {proj.link.map((val) => (
                  <a target="_blank" rel="noreferrer noopener" href={val.to}>
                    {val.type}
                  </a>
                ))}
              </li>
            </ul>
          </li>
        ))}
    </Container>
  );
}

export default Portfolio;
